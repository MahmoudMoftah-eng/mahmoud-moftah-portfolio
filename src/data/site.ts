import { existsSync } from "node:fs";
export const site = {
  name: "Mahmoud Moftah Mohamed",
  email: "mahmoud.moftah.eng@gmail.com",
  location: "Sakarya, Türkiye",
  github: "", // TODO_GITHUB_URL
  linkedin: "", // TODO_LINKEDIN_URL
  cv: "Mahmoud_Moftah_CV.pdf",
  cvAvailable: existsSync(
    new URL("../../public/Mahmoud_Moftah_CV.pdf", import.meta.url),
  ),
  description:
    "Mechatronics Engineering student focused on embedded systems, control engineering, autonomous UAVs and robotics.",
};
export const url = (path = "") =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
