import React from 'react';
import LectureCard from '../components/LectureCard';


export default function Lectures(props) {
  console.log(props)

  return (
    <section className="lectures">
      <div className="container container--lg">
        <div className="content">

          <div className="content-header">
            <h2 className="content-header__title">
              Лекции
          </h2>

          </div>

          <p className="content__text padding-l text-center">
            Видеозаписи, слайды и лекционный код (код, написанный во время лекции).
        </p>

          <div className="cards">
            <LectureCard title="Лекция" number="1" >
              История JS. Базовые операторы. Функции-конструкторы.
            </LectureCard>
            <LectureCard title="Лекция" number="2" >
              Фундаментальные объекты.
            </LectureCard>
            <LectureCard title="Лекция" number="3" >
              Абстрактные операции.
            </LectureCard>
            <LectureCard title="Лекция" number="4" >
              Абстрактные операции (продолжение). Спецификация.
            </LectureCard>
            <LectureCard title="Лекция" number="5" >
              Область видимости (Scope).
            </LectureCard>
            <LectureCard title="Лекция" number="6" >
              Execution Context. Closure.
            </LectureCard>
            <LectureCard title="Лекция" number="7" >
              Прототипное наследование.
            </LectureCard>
            <LectureCard title="Лекция" number="8" gradient="lightToBlue">
              TypeScript<br/> Статическая Типизация.
            </LectureCard>
            <LectureCard title="Лекция" number="9" gradient="lightToBlue">
              TypeScript<br/> Разбор типов (продолжение)
            </LectureCard>
            <LectureCard title="Лекция" number="10" gradient="lightToBlue">
              TypeScript<br/> Union & Literal Types
            </LectureCard>
            <LectureCard title="Лекция" number="11" gradient="lightToBlue">
              TypeScript<br/> Функции и Типы. Конфигурация TS
            </LectureCard>
            {/*<LectureCard title="Лекция" number="10" gradient="lightToBlue">*/}
            {/*  TypeScript (Часть 3).*/}
            {/*</LectureCard>*/}

          </div>
        </div>
      </div>
    </section>
  )
}
