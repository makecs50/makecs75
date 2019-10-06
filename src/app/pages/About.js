import React from 'react';
import introGif from '../assets/img/intro-gif.gif';

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="content">

          <div className="content-header">
            <h2 className="content-header__title">
              JS and Beyond <span className="gold-text">[CS75]</span>
            </h2>
            <time className="publication__date"><i>"Достали веб-разработчики!"</i> - Mohmad Wolf</time>
          </div>
          <p className="content__text">
            <strong>JavaScript</strong> намного круче Python'a - если вы с этим согласны или же желаете оспорить
            правдивость данного объективного утверждения, то добро пожаловать на курс по углубленному
            изучению сверхязыка <strong>JavaScript</strong> и технологий построенных вокруг него. Это <strong>CS75!</strong>
          </p>

          <div className="content__img">
            <img className="content__photo" src={introGif} alt="" />
          </div>

          <ul className="content__list">
            <li className="content__list-item"><span className="mark-text">Требования</span> Пройденный курс CS50 или умение программировать.</li>
            <li className="content__list-item"><span className="mark-text">Лекции</span> Воскресенье,
              10:30-14:30 в <strong>Точке Кипения</strong> ЧГУ.</li>
            <li className="content__list-item"><span className="mark-text">Видеозаписи</span> Да, будут
              публиковаться
              после
              каждой проведенной
                      лекции.</li>
            <li className="content__list-item"><span className="mark-text">Финальный проект</span> Возможно
              будет.
              Детали
              TBA (To Be Announced).
                    </li>
          </ul>

          <p className="content__text">
            <span className="bold-text">CS75 находится в разработке</span>. Мы строим этот курс, параллельно
            занимаясь другими, более
            ресурсозатратными проектами (кошение травы, посещение родственников, троллинг ГГНТУ), поэтому просим проявить терпение и не придираться к скорости
            публикации материалов. Спасибо за понимание!
                  </p>

        </div>
      </div>
    </section>

  )
}
