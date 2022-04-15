import React from 'react'

import EmptyState from '../components/EmptyState'

export default function Practice() {
  return (
    <section className="practice">
      <div className="container">
        <div className="content">

          <div className="content-header">
            <h2 className="content-header__title">
              Практика
							</h2>
          </div>

          <p className="content__text padding-l text-center">
            Ниже будут опубликовываться задания курса CS75.
          </p>

          <div className="cards cards--full">
            <EmptyState />
          </div>

        </div>
      </div>
    </section>
  )
}
