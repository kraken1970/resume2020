import React from "react";
import classNames from "classnames";
import photo from "assets/img/p2.jpg";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>Резюме</h1>
      <h2 className={s.subtitle}>
        Данное приложение написано на React JS. Код на Github:{" "}
        <a
          href="https://github.com/kraken1970/resume2020"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/kraken1970/resume2020
        </a>
      </h2>
      <div className={classNames("container", s.wrap)}>
        <div className={s.photo}>
          <img src={photo} alt="my-person" className={s.imgPhoto} />
        </div>
        <div className={s.text}>
          <p>Минин Сергей Викторович</p>
          <p>Проживание: Донецк</p>
          <p>Гражданство: РФ, Украина</p>
          <p>Профессиональная сфера: Frontend, IT, связь, работа в Интернете</p>
          <p>Образование: МИЭТ(МПиТК незаконченное)</p>
          <p>
            Опыт разработок: последние 1,5 года компания LEANSQUAD (USA) - более
            20 проектов
          </p>
          <h4>Основные навыки - разработка/верстка React-components</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
