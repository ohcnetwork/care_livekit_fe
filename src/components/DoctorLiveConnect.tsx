import React from "react";

import LiveKitComponent from "./LiveKitComponent";
import { useAuthContext } from "@core/common/hooks/useAuthUser";

const PageTitle = React.lazy(() => import("@core/components/Common/PageTitle"));

const DoctorLiveConnect = ({ username }: { username: string }) => {
  const { user: currentUser } = useAuthContext();
  return (
    <div className="px-2 pb-2">
      <PageTitle title="Doctor Live Connect" />
      <div className="flex flex-col gap-8 xl:flex-row">
        <div className="service-panel flex w-full rounded-lg bg-white md:rounded-xl">
          <div className="flex w-full flex-col justify-between gap-6 p-6 pt-4 md:p-8 md:pt-6">
            <div>
              <div className="flex w-full flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="break-words text-2xl font-bold md:text-3xl">
                    Connect to Doctor {username}
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <LiveKitComponent
                  sourceUsername={currentUser?.username || "anonymous"}
                  targetUsername={username}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLiveConnect;
