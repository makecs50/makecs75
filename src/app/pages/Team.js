import React from 'react'
import ali from '../assets/img/team/ali.gif'
import djanibek from '../assets/img/team/djanibek.gif'
import mohmad from '../assets/img/team/mohmad.gif'

export default function Team() {
  return (
    <section class="team">
      <div class="container">
        <div class="content">

          <div class="content-header">
            <h2 class="content-header__title">
              Наша команда
							</h2>
          </div>

          <div class="team">
            <div class="team__inner">

              <div class="team__item">
                <div class="team__img">
                  <img src={ali} alt="" />
                </div>
                <div class="team__name">
                  Лом-Али
									</div>
                <div class="team__work">
                  JS-предоставитель
									</div>
                <div class="team__about">
                  <p>Бывший препод <strong>ГГНТУ</strong>.<br />
                    Еще не нынешний и не бывший препод <strong>ЧГУ</strong>.<br />
                    Активно пытается понять, чем занимается <strong>ЧГПУ</strong>.

                  </p>
                </div>
                <div class="team__socials">
                  <a rel="noopener noreferrer" class="team__socials-link" target="_blank" href="https://t.me/makecsx">
                    <svg class="team__socials-icon">
                      <use hrefXlink="#telegram"></use>
                    </svg>
                  </a>
                  <a rel="noopener noreferrer" class="team__socials-link" target="_blank" href="https://instagram.com/makecsx">
                    <svg class="team__socials-icon">
                      <use hrefXlink="#instagram"></use>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="team__item">
                <div class="team__img">
                  <img src={mohmad} alt="" />
                </div>
                <div class="team__name">
                  Мухьаммад-Хусейн
									</div>
                <div class="team__work">
                  JS-употребитель
									</div>
                <div class="team__about">
                  <p>Сам принимает и другим предлагает, благодаря чему нашел вдохновение и создал данный ресурс (сайт <strong>makecs75.ru</strong>).</p>
                </div>
                <div class="team__socials">
                  <a rel="noopener noreferrer" class="team__socials-link" target="_blank" href="https://t.me/webchech">
                    <svg class="team__socials-icon">
                      <use hrefXlink="#telegram"></use>
                    </svg>
                  </a>
                  {/* <a class="team__socials-link" href="#">
                    <svg class="team__socials-icon">
                      <use href="#instagram"></use>
                    </svg>
                  </a> */}
                </div>
              </div>


              <div class="team__item">
                <div class="team__img">
                  <img src={djanibek} alt="" />
                </div>
                <div class="team__name">
                Са'д
									</div>
                <div class="team__work">
                  CS-рофлитель
									</div>
                <div class="team__about">
                  <p>Рофлит студентов, обучающихся по направлению <strong>Computer Science</strong>.</p>
                </div>
                {/* <div class="team__socials">
                  <a class="team__socials-link" href="#">
                    <svg class="team__socials-icon">
                      <use href="#telegram"></use>
                    </svg>
                  </a>
                  <a class="team__socials-link" href="#">
                    <svg class="team__socials-icon">
                      <use href="#instagram"></use>
                    </svg>
                  </a>


                </div> */}
              </div>



            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
