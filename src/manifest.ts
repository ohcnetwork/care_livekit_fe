import { lazy } from "react";
import routes from "./routes";
import { PluginManifest } from "@/pluginMap";

const manifest: PluginManifest = {
  plugin: "care-livekit",
  routes,
  extends: ["DoctorConnectButtons"],
  components: {
    DoctorConnectButtons: lazy(
      () => import("./components/DoctorConnectButtons"),
    ),
  },
  navItems: [],
};

export default manifest;
