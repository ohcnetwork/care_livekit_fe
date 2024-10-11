import { lazy } from "react";
import routes from "./routes";
import { PluginManifest } from "@/pluginTypes";

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
