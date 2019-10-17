import React from 'react'

export default function Syllabus() {
  return (
    <section className="program">
      <div className="container">
        <div className="content">

          <div className="content-header">
            <h2 className="content-header__title">
              Программа курса
                    </h2>
          </div>

          <p className="content__text">
            Данный курс строится на материалах <a rel="noopener noreferrer" className="text-bold" target="_blank" href="https://frontendmasters.com/teachers/kyle-simpson/">Кайла Симпсона</a> - автор серии книг <span className="text-italic">"You don't know JS"</span>. Для более углубленного разбора работы JavaScript-окружения будут
            использоваться материалы <span className="text-bold"><a rel="noopener noreferrer" target="_blank" href="https://frontendmasters.com/teachers/will-sentance/">Уилла Сентенса</a></span> - CEO компании Codesmith.
          </p>

          <h3 className="content__title">Вот детальное описание того, что именно мы будем проходить:</h3>

          <div className="border-block">
            <ul className="border-block__list">
              <li className="border-block__list-item">Синтаксис ES5</li>
              <li className="border-block__list-item">Замыкания. Приведение типов. Hoisting</li>
              <li className="border-block__list-item">Контекст this. Прототипное наследование</li>
              <li className="border-block__list-item">Lexical Scope. Dynamic Scope. Functional & block scopes (области видимости)</li>
              <li className="border-block__list-item">Функции-конструкторы. Функциональные выражения. Callbacks. IFFEs</li>
              <li className="border-block__list-item">ES6: Классы. Деструктуризация. Стрелочные функции</li>
              <li className="border-block__list-item">Web APIs. Event Loop. Queues</li>
              <li className="border-block__list-item">Асинхронность: Promise. Async/Await. Observables</li>
              <li className="border-block__list-item">AJAX: XMLHttpRequest. Fetch API</li>
              <li className="border-block__list-item">Контекст выполнения</li>
              <li className="border-block__list-item">Применение операторов</li>
              <li className="border-block__list-item">Абстрактные операции</li>
              <li className="border-block__list-item">Генераторы</li>
              <li className="border-block__list-item">Функциональное программирование</li>
              <li className="border-block__list-item">Статическая типизация. TypeScript</li>
              <li className="border-block__list-item">DOM. Virtual DOM. Обработчики событий</li>
              <li className="border-block__list-item">Стримы. Работа с пакетами</li>
              <li className="border-block__list-item">переход к React'у</li>
            </ul>
          </div>

          <h3 className="content__title">Этот курс для вас, если ...</h3>

          <div className="border-block">
            <ul className="border-block__list">
              <li className="border-block__list-item">вы на приемлемом уровне знакомы с основными концепциями языков программирования (структуры данных, типы данных, переменные, операторы и т.п.)</li>
              <li className="border-block__list-item">вы до этого успели самостоятельно написать хотя бы консольную программу (без учебников и каких-либо готовых, написанных кем-либо другим, строчек кода)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}
