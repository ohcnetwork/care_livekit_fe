import "@livekit/components-styles";

import { useEffect, useState } from "react";

import request from "@core/Utils/request/request";
import routes from "../api/api";
import ErrorBoundary from "@core/components/Common/ErrorBoundary";

import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  useTracks,
} from "@livekit/components-react";
import { Track } from "livekit-client";

export default function LiveKitComponent(props: {
  sourceUsername: string;
  targetUsername: string;
}) {
  const [token, setToken] = useState("");
  const [serverUrl, setServerUrl] = useState("");

  const getToken = async () => {
    const { res, data } = await request(routes.livekit.create_room, {
      body: {
        source: props.sourceUsername,
        target: props.targetUsername,
      },
    });

    if (res?.status === 201 && data) {
      setToken(data.access);
      setServerUrl(data.url);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div className="roomContainer">
      <ErrorBoundary
        fallback={
          <div className="flex h-screen w-screen items-center justify-center">
            Error loading LiveKitRoom
          </div>
        }
      >
        {token && serverUrl && <Livekit serverUrl={serverUrl} token={token} />}
      </ErrorBoundary>
    </div>
  );
}

export function Livekit({
  serverUrl,
  token,
}: {
  serverUrl: string;
  token: string;
}) {
  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      serverUrl={serverUrl}
      data-lk-theme="default"
      style={{ height: "100vh" }}
    >
      {/* Your custom component with basic video conferencing functionality. */}
      <MyVideoConference />
      {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
      <RoomAudioRenderer />
      {/* Controls for the user to start/stop audio, video, and screen
      share tracks and to leave the room. */}
      <ControlBar />
    </LiveKitRoom>
  );
}

function MyVideoConference() {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false }
  );
  return (
    <GridLayout
      tracks={tracks}
      style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}
    >
      {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
      <ParticipantTile />
    </GridLayout>
  );
}
