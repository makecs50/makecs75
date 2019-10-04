import React from 'react'
import LectureCard from '../components/LectureCard'

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
            <LectureCard number="1" title="Hello World"/>
            <LectureCard number="2" title="Hello World"/>
            <LectureCard number="3" title="Hello World"/>
            <LectureCard number="4" title="Hello World"/>
            <LectureCard number="5" title="Hello World"/>
            <LectureCard number="6" title="Hello World"/>
            <LectureCard number="7" title="Hello World"/>
          </div>
        </div>
      </div>
    </section>
  )
}
