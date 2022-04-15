import React from 'react';
import Lecture from './Lecture';
import LectureCard from '../components/LectureCard';
import lecturesData from '../lecturesData.json';


export default function Lectures(props) {
  console.log(props)

  // const loadLecturePage = () => {
  //   const data = lecturesData[+props.match.params.number - 1]
  //   if (data) {
  //     return <Lecture
  //       title={data.title}
  //       youtube={data.youtube}
  //       number={props.match.params.number}
  //     />
  //   } else {
  //     return <div style={{ padding: "20px" }}>
  //       Хватит "ломать" сайт!))
  //     </div>
  //   }
  // }
  //
  // if (props.match.params.number) {
  //   return loadLecturePage();
  // }

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
            <LectureCard title="Неделя" number="1" >
              История JS. Базовые операторы. Функции-конструкторы.
            </LectureCard>
            <LectureCard title="Неделя" number="2" >
              Фундаментальные объекты.
            </LectureCard>
            <LectureCard title="Неделя" number="3" >
              Абстрактные операции.
            </LectureCard>
            <LectureCard title="Неделя" number="4" >
              Абстрактные операции (продолжение). Спецификация.
            </LectureCard>
            <LectureCard title="Неделя" number="5" >
              Область видимости (Scope).
            </LectureCard>
            <LectureCard title="Неделя" number="6" >
              Execution Context. Closure.
            </LectureCard>
            <LectureCard title="Неделя" number="7" >
              Прототипное наследование.
            </LectureCard>
          </div>
        </div>
      </div>
    </section>
  )
}
