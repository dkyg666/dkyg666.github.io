import { DarkmodeOptions } from "vuepress-theme-hope";
import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "其他",
    link: "/other/",
    icon: "fa-solid fa-solar-system",
  },
  {
    text: "收藏",
    link: "/collect/",
    icon: "fa-solid fa-stars",
  },
  {
    text: "视频",
    icon: "fa-solid fa-circle-video",
    children: [
      {
        text: "哔哩哔哩",
        icon: "fa-brands fa-bilibili",
        link: "https://www.bilibili.com/",
      },
      { 
        text: "YouTube", 
        icon:"fa-brands fa-youtube",
        link: "https://www.youtube.com/" 
      },
    ],
  },
]);

