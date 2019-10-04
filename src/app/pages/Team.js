import React from 'react'
import ali from '../assets/img/team/ali.gif'
import djanibek from '../assets/img/team/djanibek.gif'

export default function Team() {
  return (
    <section class="team" style={{minHeight: '90vh'}}>
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
                  <img src={djanibek} alt="" />
                </div>
                <div class="team__name">
                  Джанибек
									</div>
                <div class="team__work">
                  CS-рофлитель
									</div>
                <div class="team__about">
                  <p>Рофлит студентов, обучающихся по направлению <strong>Computer Science</strong>.</p>
                </div>
                <div class="team__socials">
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


                </div>
              </div>


              <div class="team__item">
                <div class="team__img">
                  <img src={ali} alt="" />
                </div>
                <div class="team__name">
                  Лом-Али
									</div>
                <div class="team__work">
                  JS-обучитель
									</div>
                <div class="team__about">
                  <p>Бывший препод <strong>ГГНТУ</strong>.<br/>
                    Еще не нынешний и не бывший препод <strong>ЧГУ</strong>.<br/>
                    Активно пытается понять чем занимается <strong>ЧГПУ</strong>.
                    
                  </p>
                </div>
                <div class="team__socials">
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
                </div>
              </div>

              <div class="team__item">
                <div class="team__img">
                  <img src="https://placehold.it/320x240/33" alt="" />
                </div>
                <div class="team__name">
                  Мухьаммад-Хусейн
									</div>
                <div class="team__work">
                  JS-употребитель
									</div>
                <div class="team__about">
                  <p>Сам принимает и другим предлагает, благодаря чему самостоятельно придумал дизайн и сверстал сайт <strong>makecs75.ru</strong>.</p>
                </div>
                <div class="team__socials">
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
                </div>
              </div>

            
              
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}
