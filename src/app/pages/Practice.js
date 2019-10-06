import React from 'react'

import EmptyState from '../components/EmptyState'

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

          <p class="content__text padding-l text-center">
            Ниже будут опубликовываться задания курса CS75.
          </p>

          <div class="cards cards--full">
            <EmptyState />
          </div>

        </div>
      </div>
    </section>
  )
}
