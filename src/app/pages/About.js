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
            <time className="publication__date">18 09 2019</time>
          </div>

          <p className="content__text">
            Добро пожаловать на CS75, курс по глубокому изучению JavaScript. Данный курс является
            продолжением курса makecs138x, где изучались все составляющие каскадных таблиц стилей.

                  </p>

          <p className="content__text">
            Мы проведем вас от самых азов, до материалов повышенной сложности, прекрасно демонстрируя
            теоретические, а также практические составляющие глубин JavaScript'a.
                  </p>

          <div className="content__img">
            <img className="content__photo" src={introGif} alt="" />
          </div>

          <ul className="content__list">
            <li className="content__list-item"><span className="mark-text">Требования</span> Достаточно
              компьютерной
                      грамотности.</li>
            <li className="content__list-item"><span className="mark-text">Лекции</span> Воскресенье,
              10:30-14:30 в
                      Инноразуме.</li>
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
            ресурсозатратными проектами, поэтому просим проявить терпение и не придираться к скорости
            публикации материалов. Спасибо за понимание!
                  </p>

        </div>
      </div>
    </section>

  )
}
