import React from 'react'
import addressImage from '../assets/img/contacts1.jpg'
import arrowImage from '../assets/img/svg/link-arrow.svg'

export default function Contacts() {
  return (
    <section class="contacts">
      <div class="container">
        <div class="content">

          <div class="content-header">
            <h2 class="content-header__title">
              Как связаться с нами?
							</h2>
          </div>

          
          <a class="contacts__link italic-text" href="#">Перейти в Telegram
									<svg class="contacts__link-icon">
              <use href="#telegram"></use>
            </svg>
          </a>
          <a class="contacts__link italic-text" href="#">Перейти в Instagram
									<svg class="contacts__link-icon">
              <use href="#instagram"></use>
            </svg>
          </a>


         
          <a class="contacts__link italic-text" href="#">Перейти в YouTube
							<svg class="contacts__link-icon">
              <use href="#youtube"></use>
            </svg>
          </a>

          <h3 class="content__title">Где мы находимся?</h3>

          <address class="content__text">Адрес: просп. Мохаммеда Али, 2а, Грозный</address>

          <div class="content__img">
            <a class="content__img-link"
              href="https://www.google.com/maps/place/%D0%A2%D0%A0%D0%A6+%22%D0%93%D1%80%D0%BE%D0%B7%D0%BD%D1%8B%D0%B9-%D0%A1%D0%B8%D1%82%D0%B8%22/@43.3173037,45.7175249,19z/data=!4m5!3m4!1s0x4051d154130ca495:0xc02799933e021a42!8m2!3d43.3172196!4d45.7176401"
              target="_blank">
              Открыть карту
            </a>
            <img src={addressImage} alt="" />
          </div>

        </div >
      </div >
    </section >
  )
}
