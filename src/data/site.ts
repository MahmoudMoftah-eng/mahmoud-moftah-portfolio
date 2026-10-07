import { existsSync } from "node:fs";

export const site = {
  name: "Mahmoud Moftah Mohamed",
  email: "mahmoud.moftah.eng@gmail.com",
  location: "Sakarya, Türkiye",

  github: "https://github.com/MahmoudMoftah-eng",
  linkedin: "https://www.linkedin.com/in/mahmoud-moftah-0ba1ba304/",

  cv: "Mahmoud_Moftah_CV.pdf",

  cvAvailable: existsSync(
    new URL("../../public/Mahmoud_Moftah_CV.pdf", import.meta.url),
  ),

  description:
    "Mechatronics Engineering student focused on embedded systems, control engineering, autonomous UAVs and robotics.",
};

export const url = (path = "") =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;