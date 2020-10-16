import React from "react";
import CustomLink from "components/CustomLink/CustomLink";
import { contacts } from "data";
import s from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section className={s.contacts}>
      <div className="container">
        <h3 className={s.title} >Контактная информация:</h3>
        <p className={s.adress} >Адрес: г. Донецк</p>
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
    </section>
  );
};

export default Contacts;
