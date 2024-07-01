import React from 'react'
import "../style/council.css"
import Chair from "../Assets/council/om.jpeg"
import vchair from "../Assets/council/aashna.jpeg"
import jswie from "../Assets/council/anshita.jpeg"
import jswie2 from "../Assets/council/ritik.jpeg"
import { BsInstagram, BsLinkedin } from "react-icons/bs"


/**
 * This function contains information about IEEE-DTU Council
 * @version 1.0.0
 * @since 1.0.0
 * @visibleName IEEE DTU WIE Council
 */
/// Yhis page will contain about info of IEEE-DTU WIE Council
/// To change, just change/add info here
const Council = () => {
  return (
    <>
      <section id="council" className="w-full mt-[20px] mb-[60px]">
        <h1 className='headings'>
          Council
        </h1>
        <div className=' w-full'>
          <div className=' conti '>
            <div class="ui-card">
              <img src={Chair} className='imgs' />
              <div class="description">
                <h5>OM SHANKER SAHAY</h5>
                <p>CHAIRPERSON IEEE DTU WIE</p>
                <span className='flex1'>
                  <a className='chairclassa' aria-label="link18b" href='https://www.instagram.com/omssahay_28/' target='_blank' rel='noreferrer'>
                    <BsInstagram className='text-[20px] chairlinks' />
                  </a>
                  <a href='https://www.linkedin.com/in/om-shanker-sahay-688ab5224/' aria-label="link2pb" target='_blank' rel='noreferrer'>
                    <BsLinkedin className='text-[20px] chairlinks' />
                  </a>

                </span>
              </div>
            </div>
            <div class="ui-card">
              <img src={vchair} className='imgs' />
              <div class="description">
                <h5>ASHNA MITTAL</h5>
                <p className='h52'>
                  <p>
                    VICE-CHAIRPERSON IEEE DTU WIE
                  </p>
                </p>
                <span className='flex1'>
                  <a className='chairclassa' aria-label="link18b" href='https://www.instagram.com/_frohes_leben_/' target='_blank' rel='noreferrer'>
                    <BsInstagram className='text-[20px] chairlinks' />
                  </a>
                  <a href='https://www.linkedin.com/in/ashna-mittal-541201229/' aria-label="link2pb" target='_blank' rel='noreferrer'>
                    <BsLinkedin className='text-[20px] chairlinks' />
                  </a>

                </span>
              </div>
            </div>
            <div class="ui-card">
              <img src={jswie} className='imgs' />
              <div class="description">
                <h5>ANSHITA GARG</h5>
                <p>SECRETARY, IEEE DTU WIE</p>
                <span className='flex1'>
                  <a className='chairclassa' aria-label="link18b" href='https://www.instagram.com/anshita3_/' target='_blank' rel='noreferrer'>
                    <BsInstagram className='text-[20px] chairlinks' />
                  </a>
                  <a href='https://www.linkedin.com/in/anshita-garg-8286a5231/' aria-label="link2pb" target='_blank' rel='noreferrer'>
                    <BsLinkedin className='text-[20px] chairlinks' />
                  </a>

                </span>
              </div>
            </div>
            <div class="ui-card">
              <img src={jswie2} className='imgs' />
              <div class="description">
                <h5>RITIK GUPTA</h5>
                <p>SECRETARY, IEEE DTU WIE</p>
                <span className='flex1'>
                  <a className='chairclassa' aria-label="link18b" href='https://www.instagram.com/ritikk_gupta_/' target='_blank' rel='noreferrer'>
                    <BsInstagram className='text-[20px] chairlinks' />
                  </a>
                  <a href='https://www.linkedin.com/in/ritik-gupta-amlo/' aria-label="link2pb" target='_blank' rel='noreferrer'>
                    <BsLinkedin className='text-[20px] chairlinks' />
                  </a>

                </span>
              </div>
            </div>

            {/*  
            <div className='concontainer'>
              <div className='chair'>
                <img src={Chair} alt="wie-chair" className='chairimg' />
              </div>
              <br/>
              <div className='chair-head'>
                <div className='chair-name'>
                  RISHI MAHESHWARI
                </div>
                <div className='chair-pos'>
                  CHAIRERSON IEEE DTU WIE
                </div>
                <div className='chair-social flex'>
                  <a className='chairclassa' aria-label="link18b" href='https://www.instagram.com/maheshwarixd/' target='_blank' rel='noreferrer'>
                    <BsInstagram className='text-[20px] chairlinks' />
                  </a>
                  <a href='https://www.linkedin.com/in/rishi-maheshwari-09199020a' aria-label="link2pb" target='_blank' rel='noreferrer'>
                    <BsLinkedin className='text-[20px] chairlinks' />
                  </a>
                </div>
              </div>
            </div>
            <div className='concontainer'>
              <div className='chair'>
                <img src={vchair} alt="wie-chair" className='chairimg' />
              </div>
              <div className='chair-head'>
                <div className='chair-name'>
                  KAUSTUBH KAMBIRI
                </div>
                <div className='chair-pos'>
                  Vice-CHAIRPERSON IEEE DTU WIE
                </div>
                <div className='chair-social flex'>
                  <a className='chairclassa' aria-label="link18b" href='https://www.instagram.com/kaustubhkambiri/' target='_blank' rel='noreferrer'>
                    <BsInstagram className='text-[20px] chairlinks' />
                  </a>
                  <a href='https://www.linkedin.com/in/kaustubh-kambiri-927364200/' aria-label="link2pb" target='_blank' rel='noreferrer'>
                    <BsLinkedin className='text-[20px] chairlinks' />
                  </a>
                </div>
              </div>
            </div>
            <div className='concontainer'>
              <div className='chair'>
                <img src={jswie} alt="wie-chair" className='chairimg' />
              </div>
              <div className='chair-head'>
                <div className='chair-name'>
                  ANIKA PASSI
                </div>
                <div className='chair-pos'>
                  SECRETARY, IEEE DTU WIE
                </div>
                <div className='chair-social flex'>
                  <a className='chairclassa' aria-label="link18b" href='https://www.instagram.com/anikaapassi/' target='_blank' rel='noreferrer'>
                    <BsInstagram className='text-[20px] chairlinks' />
                  </a>
                  <a href='https://www.linkedin.com/in/anikapassi/' aria-label="link2pb" target='_blank' rel='noreferrer'>
                    <BsLinkedin className='text-[20px] chairlinks' />
                  </a>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Council
