import React from 'react';
import lecture1 from '../assets/presentations/Lecture1.zip';

export default function Lecture(props) {
  const { title } = props;

  return (

    <section className="program">
      <div className="container">
        <div className="content">

          <div className="content-header">
            <h2 className="content-header__title">
              {title}
            </h2>
          </div>

          <p className="content__text">
            <iframe style={{ width: '100%', height: '315' }} height="315" src="https://www.youtube.com/embed/tC9Xr5WmXlk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </p>

          <div className="border-block">
            <ul className="border-block__list">
              <li className="border-block__list-item">Скачать <a href={lecture1}>презентацию</a></li>
            </ul>
          </div>


        </div>
      </div>
    </section>

  )
}
