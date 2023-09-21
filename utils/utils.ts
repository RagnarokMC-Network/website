import type { Profile } from "./types";

const permissions = [
  { id: "owner", color: "#bf0f0f" },
  { id: "admin", color: "#ebab34" },
  { id: "developer", color: "#8c8c8c" },
  { id: "moderator+", color: "#349beb" },
  { id: "moderator", color: "#349beb" },
  { id: "builder", color: "#b90fbf" },
  { id: "helper+", color: "#2ca122" },
  { id: "helper", color: "#2ca122" },
];

export default {
  isStaffer() {
    let profile: any = window.localStorage.getItem("profile");
    if (!profile) return false;

    profile = JSON.parse(profile);

    if (profile && profile.hasOwnProperty("primary_group")) {
      if (permissions.some((al) => al.id == profile.primary_group)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
};
