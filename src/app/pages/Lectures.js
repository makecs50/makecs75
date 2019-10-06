import React from 'react'

import EmptyState from '../components/EmptyState'

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

          <p className="content__text padding-l text-center">
            Здесь будут публиковать видеозаписи, слайды и лекционный код (код, написанный во время лекции).
        </p>

          <div className="cards">
            <EmptyState />
          </div>
        </div>
      </div>
    </section>
  )
}
