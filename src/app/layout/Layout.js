import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Menu from '../components/Menu';
import About from '../pages/About';
import Syllabus from '../pages/Syllabus';
import Lectures from '../pages/Lectures';
import Practice from '../pages/Practice';
import Contacts from '../pages/Contacts';
import Team from '../pages/Team';
import Footer from '../components/Footer';

import burger from '../assets/img/svg/burger.svg';

export default function Layout() {
  return (
    <div>
        <div className="sprites">
            <svg style={{display: 'none'}}>
              <symbol id="logo-js" viewBox="0 0 512 512">
                <g>
                  <path style={{fill: '#f0db4f'}} d="M391.05,232.97c-7.125-20.664-36.341-20.664-42.04-3.563c-5.7,17.101,13.539,27.076,43.466,37.053
                          c29.927,9.976,48.454,36.341,44.891,59.854s-13.539,54.154-72.68,54.154c-36.963,0-57.505-23.103-67.714-40.429l33.511-20.138
                          c0,0,11.401,24.227,32.777,24.227c21.377,0,29.927-7.125,29.927-23.514c0-19.951-69.118-27.076-79.806-61.279
                          s3.563-82.656,53.441-79.094c31.175,2.227,48.71,17.535,57.478,28.703L391.05,232.97z" />
                  <path style={{fill:'#f0db4f'}} d="M235.714,183.805c0,0,0,120.421,0,136.81c0,16.388-14.251,24.94-28.502,22.089
                          c-14.251-2.85-20.664-19.951-20.664-19.951l-32.777,22.089c0,0,7.125,32.777,52.016,35.628
                          c44.891,2.85,70.542-24.227,70.542-47.029s0-149.636,0-149.636L235.714,183.805L235.714,183.805z" />
                  <path style={{fill:'#f0db4f'}}
                    d="M73.968,45.213v390.781c10.606,10.742,22.162,20.532,34.534,29.268h294.996
                          c9.885-6.98,19.247-14.639,28.035-22.925H96.893V68.138h374.188v326.75c9.028-13.939,16.729-28.818,22.936-44.45V45.213H73.968z" />
                  <circle style={{fill:'#f0db4f'}} cx="87.855" cy="339.143" r="40.615" />

                </g>
              </symbol>
            </svg>

            <svg style={{display: 'none'}}>
              <symbol id="telegram" viewBox="0 -39 512.00011 512">
                <g>
                  <path
                    d="m504.09375 11.859375c-6.253906-7.648437-15.621094-11.859375-26.378906-11.859375-5.847656 0-12.042969 1.230469-18.410156 3.664062l-433.398438 165.441407c-23 8.777343-26.097656 21.949219-25.8984375 29.019531s4.0390625 20.046875 27.4999995 27.511719c.140626.042969.28125.085937.421876.125l89.898437 25.726562 48.617187 139.023438c6.628907 18.953125 21.507813 30.726562 38.835938 30.726562 10.925781 0 21.671875-4.578125 31.078125-13.234375l55.605469-51.199218 80.652344 64.941406c.007812.007812.019531.011718.027343.019531l.765625.617187c.070313.054688.144532.113282.214844.167969 8.964844 6.953125 18.75 10.625 28.308594 10.628907h.003906c18.675781 0 33.546875-13.824219 37.878906-35.214844l71.011719-350.640625c2.851563-14.074219.460937-26.667969-6.734375-35.464844zm-356.191406 234.742187 173.441406-88.605468-107.996094 114.753906c-1.769531 1.878906-3.023437 4.179688-3.640625 6.683594l-20.824219 84.351562zm68.132812 139.332032c-.71875.660156-1.441406 1.25-2.164062 1.792968l19.320312-78.25 35.144532 28.300782zm265.390625-344.566406-71.011719 350.644531c-.683593 3.355469-2.867187 11.164062-8.480468 11.164062-2.773438 0-6.257813-1.511719-9.824219-4.257812l-91.390625-73.585938c-.011719-.011719-.027344-.023437-.042969-.03125l-54.378906-43.789062 156.175781-165.949219c5-5.3125 5.453125-13.449219 1.074219-19.285156-4.382813-5.835938-12.324219-7.671875-18.820313-4.351563l-256.867187 131.226563-91.121094-26.070313 433.265625-165.390625c3.660156-1.398437 6.214844-1.691406 7.710938-1.691406.917968 0 2.550781.109375 3.15625.855469.796875.972656 1.8125 4.289062.554687 10.511719zm0 0" />
                </g>
              </symbol>
            </svg>

            <svg style={{display: 'none'}}>
              <symbol id="instagram" viewBox="0 0 512.00096 512.00096">
                <g>
                  <path
                    d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0" />
                  <path
                    d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0" />
                  <path
                    d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0" />
                </g>
              </symbol>
            </svg>

            <svg style={{display: 'none'}}>
              <symbol id="youtube" viewBox="0 0 90 90">
                <g>
                  <path id="YouTube" d="M70.939,65.832H66l0.023-2.869c0-1.275,1.047-2.318,2.326-2.318h0.315c1.282,0,2.332,1.043,2.332,2.318
                    L70.939,65.832z M52.413,59.684c-1.253,0-2.278,0.842-2.278,1.873V75.51c0,1.029,1.025,1.869,2.278,1.869
                    c1.258,0,2.284-0.84,2.284-1.869V61.557C54.697,60.525,53.671,59.684,52.413,59.684z M82.5,51.879v26.544
                    C82.5,84.79,76.979,90,70.23,90H19.771C13.02,90,7.5,84.79,7.5,78.423V51.879c0-6.367,5.52-11.578,12.271-11.578H70.23
                    C76.979,40.301,82.5,45.512,82.5,51.879z M23.137,81.305l-0.004-27.961l6.255,0.002v-4.143l-16.674-0.025v4.073l5.205,0.015v28.039
                    H23.137z M41.887,57.509h-5.215v14.931c0,2.16,0.131,3.24-0.008,3.621c-0.424,1.158-2.33,2.388-3.073,0.125
                    c-0.126-0.396-0.015-1.591-0.017-3.643l-0.021-15.034h-5.186l0.016,14.798c0.004,2.268-0.051,3.959,0.018,4.729
                    c0.127,1.357,0.082,2.939,1.341,3.843c2.346,1.69,6.843-0.252,7.968-2.668l-0.01,3.083l4.188,0.005L41.887,57.509L41.887,57.509z
                    M58.57,74.607L58.559,62.18c-0.004-4.736-3.547-7.572-8.356-3.74l0.021-9.239l-5.209,0.008l-0.025,31.89l4.284-0.062l0.39-1.986
                    C55.137,84.072,58.578,80.631,58.57,74.607z M74.891,72.96l-3.91,0.021c-0.002,0.155-0.008,0.334-0.01,0.529v2.182
                    c0,1.168-0.965,2.119-2.137,2.119h-0.766c-1.174,0-2.139-0.951-2.139-2.119V75.45v-2.4v-3.097h8.954v-3.37
                    c0-2.463-0.063-4.925-0.267-6.333c-0.641-4.454-6.893-5.161-10.051-2.881c-0.991,0.712-1.748,1.665-2.188,2.945
                    c-0.444,1.281-0.665,3.031-0.665,5.254v7.41C61.714,85.296,76.676,83.555,74.891,72.96z M54.833,32.732
                    c0.269,0.654,0.687,1.184,1.254,1.584c0.56,0.394,1.276,0.592,2.134,0.592c0.752,0,1.418-0.203,1.998-0.622
                    c0.578-0.417,1.065-1.04,1.463-1.871l-0.099,2.046h5.813V9.74H62.82v19.24c0,1.042-0.858,1.895-1.907,1.895
                    c-1.043,0-1.904-0.853-1.904-1.895V9.74h-4.776v16.674c0,2.124,0.039,3.54,0.102,4.258C54.4,31.385,54.564,32.069,54.833,32.732z
                    M37.217,18.77c0-2.373,0.198-4.226,0.591-5.562c0.396-1.331,1.107-2.401,2.137-3.208c1.027-0.811,2.342-1.217,3.941-1.217
                    c1.345,0,2.497,0.264,3.459,0.781c0.967,0.52,1.713,1.195,2.23,2.028c0.527,0.836,0.885,1.695,1.076,2.574
                    c0.195,0.891,0.291,2.235,0.291,4.048v6.252c0,2.293-0.092,3.98-0.271,5.051c-0.177,1.074-0.557,2.07-1.146,3.004
                    c-0.58,0.924-1.329,1.615-2.237,2.056c-0.918,0.445-1.968,0.663-3.154,0.663c-1.325,0-2.441-0.183-3.361-0.565
                    c-0.923-0.38-1.636-0.953-2.144-1.714c-0.513-0.762-0.874-1.69-1.092-2.772c-0.219-1.081-0.323-2.707-0.323-4.874L37.217,18.77
                    L37.217,18.77z M41.77,28.59c0,1.4,1.042,2.543,2.311,2.543c1.27,0,2.308-1.143,2.308-2.543V15.43c0-1.398-1.038-2.541-2.308-2.541
                    c-1.269,0-2.311,1.143-2.311,2.541V28.59z M25.682,35.235h5.484l0.006-18.96l6.48-16.242h-5.998l-3.445,12.064L24.715,0h-5.936
                    l6.894,16.284L25.682,35.235z" />
                </g>
              </symbol>
            </svg>
          </div>
      <div className="page">

          <Menu/>
          <main className="main grid-column">
            <button className="burger" type="button" id="burger">
              <img className="burger__icon" src={burger} alt=""/>
            </button>
            <Switch>
              <Route exact path={'/'} component={About} />
              <Route path={'/contacts'} component={Contacts} />
              <Route path={'/lectures'} component={Lectures} />
              <Route path={'/practice'} component={Practice} />
              <Route path={'/syllabus'} component={Syllabus} />
              <Route path={'/team'} component={Team} />
            </Switch>
            
            <Footer/>
          </main>
      </div>
    </div>
  )
}
