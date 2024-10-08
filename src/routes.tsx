import { AppRoutes } from "@core/Routers/AppRouter";
import DoctorLiveConnect from "./components/DoctorLiveConnect";

const routes: AppRoutes = {
  "/live_connect/:username": ({ username }) => (
    <DoctorLiveConnect username={username} />
  ),
};

export default routes;
