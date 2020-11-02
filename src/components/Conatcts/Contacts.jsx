import React from "react";
import CustomLink from "components/CustomLink/CustomLink";
import { contacts } from "data";
import s from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section className={s.contacts}>
      <div className="container">
        <h3 className={s.title}>Контактная информация:</h3>
        <p className={s.adress}>Адрес: г. Донецк</p>
        {contacts.map((contact) => (
          <div className={s.contact} key={contact.path}>
            <CustomLink {...contact} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
