import React from 'react'
import LectureCard from '../components/LectureCard'

export default function Practice() {
  return (
    <section class="practice">
      <div class="container">
        <div class="content">

          <div class="content-header">
            <h2 class="content-header__title">
              Практика
							</h2>
          </div>

          <p class="content__text padding-l">
            Ниже приведен список опубликованных заданий курса CS75. Информация о публикации новых
            заданий будет доступна на странице с лекциями ("Лекции").
						</p>

          <div class="cards cards--full">

            <LectureCard gradient="greenToYellow" number="НП0"/>
            <LectureCard gradient="greenToYellow" number="НП1"/>
            <LectureCard gradient="greenToYellow" number="НП2"/>
            <LectureCard gradient="greenToYellow" number="НП3"/>
            
          </div>

        </div>
      </div>
    </section>
  )
}
