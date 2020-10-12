import React from "react";
import photo from "assets/img/p2.jpg";
import s from './Header.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.photo}>
        <img src={photo} alt="my-person" className={s.imgPhoto} />
      </div>
      <div className={s.text}>
        <p>Минин Сергей Викторович</p>
        <p>Проживание: Донецк</p>
        <p>Гражданство: РФ, Украина</p>
        <p>Профессиональная сфера: Frontend, IT,  связь, работа в Интернете</p>
        <p>Образование: МИЭТ(МПиТК незаконченное)</p>
        <p>Опыт разработок: последние 1,5 года компания LEANSQUAD (USA) - более 12 проектов</p>
      </div>
    </header>
  );
};

export default Header;
