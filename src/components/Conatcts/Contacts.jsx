import React from "react";
import CustomLink from "components/CustomLink/CustomLink";
import { contacts } from "components/Projects/data";
import s from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={s.contacts}>
      <h3>Контактная информация:</h3>
      <p>Адрес: г. Донецк</p>
      {contacts.map((contact) => (
        <div className={s.contact} key={contact.path}>
          <CustomLink
            type={contact.type}
            name1={contact.name1}
            name2={contact.name2}
            Pic={contact.Pic}
            path={contact.path}
            title={contact.title}
          />
        </div>
      ))}
      
    </div>
  );
};

export default Contacts;
