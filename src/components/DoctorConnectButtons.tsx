import React from "react";
import { navigate } from "raviger";

import CareIcon from "@core/CAREUI/icons/CareIcon";
import { triggerGoal } from "@core/Integrations/Plausible";
import useAuthUser from "@core/common/hooks/useAuthUser";

import { DoctorConnectButtonComponentType } from "@/pluginTypes";

const DoctorConnectButtons: DoctorConnectButtonComponentType = ({ user }) => {
  const authUser = useAuthUser();

  const handleLivekitConnect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();

    triggerGoal("Doctor Connect Click", {
      medium: "Livekit Video Call",
      userId: authUser.id,
      targetUserType: user.user_type,
    });

    // Navigate to the Livekit video call page with the user's ID
    navigate(`/live_connect/${user.username}`);
  };

  const ConnectDoctorText = "Connect via Livekit Video Call";

  return (
    <a onClick={handleLivekitConnect}>
      <div className="tooltip">
        <span className="tooltip-text tooltip-left">{ConnectDoctorText}</span>
        <CareIcon icon="l-video" className="h-5 w-5" />
      </div>
    </a>
  );
};

export default DoctorConnectButtons;
