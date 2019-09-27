import React from 'react'

export default function Lectures() {
  return (
    <section className="lectures">
      <div className="container container--lg">
        <div className="content">

          <div className="content-header">
            <h2 className="content-header__title">
              Лекции
          </h2>

          </div>

          <p className="content__text padding-l">
            Видеозаписи, слайды и лекционный код (код, написанный во время лекции).
        </p>

          <div className="cards">
            <div className="cards__item">
              <div className="cards__header">
                <time className="publication__date--lg" >
                  Сентябрь 18
              </time>
                <h3 className="cards__title">JavaScript. Что это и с чем едят</h3>
              </div>
              <div className="cards__content">
                <div className="content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum,
                cumque.</div>
                <div className="cards__links">
                  <a className="cards__link" href="#">Запись урока</a>
                  <a className="cards__link" href="#">Презентация</a>
                  <a className="cards__link" href="#">Код</a>
                </div>
              </div>
            </div>

            <div className="cards__item">
              <div className="cards__header">
                <time className="publication__date--lg">
                  Сентябрь 30
              </time>
                <h3 className="cards__title">Двумерные массивы</h3>
              </div>
              <div className="cards__content">
                <div className="content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum,
                  cumque.
              </div>
                <div className="cards__links">
                  <a className="cards__link" href="#">Запись урока</a>
                  <a className="cards__link" href="#">Презентация</a>
                  <a className="cards__link" href="#">Код</a>
                </div>
              </div>
            </div>

            <div className="cards__item">
              <div className="cards__header">
                <time className="publication__date--lg">
                  Октябрь 9
              </time>
                <h3 className="cards__title">Функции и методы в JS</h3>
              </div>
              <div className="cards__content">
                <div className="content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum,
                cumque.</div>
                <div className="cards__links">
                  <a className="cards__link" href="#">Запись урока</a>
                  <a className="cards__link" href="#">Презентация</a>
                  <a className="cards__link" href="#">Код</a>
                </div>
              </div>
            </div>

            <div className="cards__item">
              <div className="cards__header">
                <time className="publication__date--lg">
                  Октябрь 15
              </time>
                <h3 className="cards__title">Какой то умный заголовок</h3>
              </div>
              <div className="cards__content">
                <div className="content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum,
                cumque.</div>
                <div className="cards__links">
                  <a className="cards__link" href="#">Запись урока</a>
                  <a className="cards__link" href="#">Презентация</a>
                  <a className="cards__link" href="#">Код</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
