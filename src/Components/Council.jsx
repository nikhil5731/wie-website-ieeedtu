import React from 'react'
import "../style/council.css"
import Chair from "../Assets/council/Rishi.jpeg"
import vchair from "../Assets/council/Kaustubh Kambiri.jpeg"
import jswie from "../Assets/council/anika.PNG"
import {BsInstagram, BsLinkedin} from "react-icons/bs"
const Council = () => {
  return (
    <>
      <section id="council" className="w-full mt-[20px] mb-[60px]">
      <h1 className='headings'>
        Council
      </h1>
        <div className=' w-full'>
          <div className=' conti '>
            <div className='concontainer'>
              <div className='chair'>
                <img src={Chair} alt="wie-chair" className='chairimg' />
              </div>
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

          </div>
        </div>
        {/* <div className="intro-wrap">
          <br />
          <div className="row section-header has-bottom-sep light-sep" data-aos="fade-up">
            <div className="col-full">
              <h3 className="subhead con-cil1">The Team</h3>
              <h1 className="display-2 display-2--light">IEEE-DTU Council</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div className="imgBox">
              <img src={Chair} alt="chairimage" />
            </div>
            <div className="content">
              <h2 className='con-cil5'>Rishi Maheshwari<br />
                <span>CHAIRPERSON, IEEE DTU WIE</span>
                <br />
                <ul className="contact-social con-cil2">
                  <li>
                    <a href="https://www.instagram.com/maheshwarixd/"><i className="fa-brands fa-instagram con-cil3"
                      aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/rishi-maheshwari-09199020a"><i className="con-cil4 fa-brands fa-linkedin"
                      aria-hidden="true"></i></a>
                  </li>
                </ul>
              </h2>
            </div>
          </div>
        </div> */}
      </section>
    </>
  )
}

export default Council