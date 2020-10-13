import React from "react";

import { ReactComponent as Phone } from "assets/phone.svg";
import { ReactComponent as Viber } from "assets/viber.svg";
import { ReactComponent as Skype } from "assets/skype.svg";
import { ReactComponent as Mail } from "assets/mail.svg";
import { ReactComponent as Telegram } from "assets/telegram.svg";

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
  { name: "Scrap Sports", path: "http://scrapsports.qa.leansquad.net/" },
  { name: "LEANSQAD", path: "https://leansquad.com/" },
  { name: "SpecCrew", path: "https://speccrew.com/" },
  { name: "Shop-A-Dev", path: "https://shopadev.com/" },
  { name: "Focal Point", path: "https://focalpointprocurement.com/" },
  { name: "USA Houseloans", path: "https://usahouseloans.leansquad.net/" },
  { name: "Crown & Caliber", path: "https://www.crownandcaliber.com/" },
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
