import { ReactComponent as Phone } from "assets/phone.svg";
import { ReactComponent as Viber } from "assets/viber.svg";
import { ReactComponent as Skype } from "assets/skype.svg";
import { ReactComponent as Mail } from "assets/mail.svg";
import { ReactComponent as Telegram } from "assets/telegram.svg";

import Pic01 from "assets/img/pic01.jpg";
// import Pic02 from "assets/img/pic02.jpg";
import Pic03 from "assets/img/pic03.jpg";
import Pic04 from "assets/img/pic04.jpg";
// import Pic05 from "assets/img/pic05.jpg";
import Pic06 from "assets/img/pic06.jpg";

export const skills = [
  "React",
  "React-Router",
  "React-Redux",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Git",
  "Bootstrap",
  "jQuery",
  "Adobe Photoshop",
  "Figma",
  "БЭМ",
  "Scss",
  "Gulp",
  "Parcel",
  "Shopify",
];

export const projects = [
  { name: "LEANSQAD", path: "https://leansquad.com/", pic: Pic01 },
  // { name: "SpecCrew", path: "https://speccrew.com/", pic: Pic02 },
  { name: "Shop-A-Dev", path: "https://shopadev.com/", pic: Pic03 },
  {
    name: "Focal Point",
    path: "https://focalpointprocurement.com/",
    pic: Pic04,
  },
 
  {
    name: "Crown & Caliber",
    path: "https://www.crownandcaliber.com/",
    pic: Pic06,
  },
];

export const contacts = [
  {
    type: "contact",
    name1: "Телефон: +380713537644",
    Pic: Phone,
    path: "tel:+380713537644",
    title: "Позвоните мне",
  },
  {
    type: "contact",
    name1: "Viber: +79896150335",
    name2: "Связь через Viber с ПК",
    Pic: Viber,
    path: "viber://chat?number=79896150335",
    title: "Звонок через Viber",
  },
  {
    type: "contact",
    name1: "Viber: +79896150335",
    name2: "Набрать Viber с мобильного",
    Pic: Viber,
    path: "http://msng.link/vi/79896150335",
    title: "Напишите мне в Viber",
  },
  {
    type: "contact",
    name1: "Skype: tabaska14",
    Pic: Skype,
    path: "skype:tabaska14?call",
    title: "Звонок через Skype",
  },
  {
    type: "contact",
    name1: "E-mail: s.v.minin70@gmail.com",
    Pic: Mail,
    path: "mailto:s.v.minin70@gmail.com",
    title: "Напишите мне",
  },
  {
    type: "contact",
    name1: "Telegram Сергей Минин",
    Pic: Telegram,
    path: "tg://resolve?domain=@Serg_Minin",
    title: "Напишите мне",
  },
];
