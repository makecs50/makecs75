import React from 'react'
import ali from '../assets/img/team/ali.gif'
import djanibek from '../assets/img/team/djanibek.gif'
import mohmad from '../assets/img/team/mohmad.gif'

export default function Team() {
  return (
    <section className="team">
      <div className="container">
        <div className="content">

          <div className="content-header">
            <h2 className="content-header__title">
              Наша команда
							</h2>
          </div>

          <div className="team">
            <div className="team__inner">

              <div className="team__item">
                <div className="team__img">
                  <img src={ali} alt="" />
                </div>
                <div className="team__name">
                  Лом-Али
									</div>
                <div className="team__work">
                  JS-предоставитель
									</div>
                <div className="team__about">
                  <p>Бывший препод <strong>ГГНТУ</strong>.<br />
                    Еще не нынешний и не бывший препод <strong>ЧГУ</strong>.<br />
                    Активно пытается понять, чем занимается <strong>ЧГПУ</strong>.

                  </p>
                </div>
                <div className="team__socials">
                  <a rel="noopener noreferrer" className="team__socials-link" target="_blank" href="https://t.me/makecsx">
                    <svg className="team__socials-icon">
                      <use hrefxlink="#telegram"></use>
                    </svg>
                  </a>
                  <a rel="noopener noreferrer" className="team__socials-link" target="_blank" href="https://instagram.com/makecsx">
                    <svg className="team__socials-icon">
                      <use hrefxlink="#instagram"></use>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="team__item">
                <div className="team__img">
                  <img src={mohmad} alt="" />
                </div>
                <div className="team__name">
                  Мухьаммад-Хусейн
									</div>
                <div className="team__work">
                  JS-употребитель
									</div>
                <h3><i><b>@badaevmh</b></i></h3>

                <div className="team__about">
                  <p>Сам принимает и другим предлагает, благодаря чему смог сверстать данный ресурс (сайт <strong>makecs75.ru</strong>).</p>
                </div>
                <div className="team__socials">
                  <a rel="noopener noreferrer" className="team__socials-link" target="_blank" href="https://t.me/webchech">
                    <svg className="team__socials-icon">
                      <use hrefxlink="#telegram"></use>
                    </svg>
                  </a>
                  {/* <a className="team__socials-link" href="#">
                    <svg className="team__socials-icon">
                      <use href="#instagram"></use>
                    </svg>
                  </a> */}
                </div>
              </div>


              <div className="team__item">
                <div className="team__img">
                  <img src={djanibek} alt="" />
                </div>
                <div className="team__name">
                Са'д
									</div>
                <div className="team__work">
                  CS-рофлитель
									</div>
                <div className="team__about">
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
