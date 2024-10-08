import { lazy } from "react";
import routes from "./routes";
import { PluginManifest } from "@core/PluginEngine";

const manifest: PluginManifest = {
  plugin: "care-livekit",
  routes,
  extends: ["DoctorConnectButtons"],
  navItems: [],
};

export default manifest;
