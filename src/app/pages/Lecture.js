import React from 'react';
import lectures from '../assets/presentations/';


export default function Lecture(props) {
  const { title, youtube, number } = props;

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
            <iframe style={{ width: '100%', height: '315' }} height="315" src={youtube} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </p>

          <div className="border-block">
            <ul className="border-block__list">
              <li className="border-block__list-item">Скачать <a href={lectures[`lecture${number}`]}>презентацию</a></li>
            </ul>
          </div>


        </div>
      </div>
    </section>

  )
}
