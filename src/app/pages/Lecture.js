import React from 'react';
import * as lectures from '../assets/presentations/';
import lecturesData from '../lecturesData.json';
import { useParams } from 'react-router-dom';


export default function Lecture() {
  const { number } = useParams();
  const { title, youtube } = lecturesData[number - 1];

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
            <iframe style={{ width: '100%', height: '315' }}
                    title={title}
  height="315"
  src={youtube}
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen/>
          </p>

          <div className="border-block">
            <ul className="border-block__list">
              <li className="border-block__list-item">Скачать <a href={lectures[`lecture${number}`]}>презентацию</a>
              </li>
            </ul>
          </div>


        </div>
      </div>
    </section>

  )
}
