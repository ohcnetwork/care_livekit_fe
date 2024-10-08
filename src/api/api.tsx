import { Type } from "@core/Redux/api";

export interface LiveKitTokenRequest {
  source: string;
  target: string;
}

export interface LiveKitTokenResponse {
  access: string;
  room_code: string;
}

const routes = {
  livekit: {
    create_room: {
      path: "/api/care_livekit/create_room/",
      method: "POST",
      TBody: Type<LiveKitTokenRequest>(),
      TRes: Type<LiveKitTokenResponse>(),
    },
  },
} as const;

export default routes;
