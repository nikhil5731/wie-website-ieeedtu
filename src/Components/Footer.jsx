import logo from "../Assets/wie.png"
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-[rgba(110,43,127)] text-[#fbf7f7] flex flex-col flex-nowrap items-center justify-center mt-[100px] w-full ' id='footer'>
      <div className='bg-[rgb(110,43,127)] rounded-lg w-full gap-2 h-full px-[20px]'>
        <div className='content-center footer1'>
          <div className='flex flex-col items-center justify-center flex-nowrap'>
            <img src={logo} alt='logo' width={150} height={150} />
            <p className='text-[rgb(253,246,249)] mx-4 text-md bsh'>
              WIE IEEE-DTU
            </p>
          </div>
          <div>
            <p className='text-[#fff] text-lg font-bold py-2 bsh'>
              Delhi Technological University
            </p>
            <div className='flex flex md:flex-row items-center justify-start'>
              <a aria-label="link10" href='https://goo.gl/maps/otEPWNLtnYi928Sz6' target='_blank' rel='noreferrer'>
                <svg height="30px" fill="#BECACA" width="30px" className="" viewBox="0 0 384 512">
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                </svg>
              </a>
              <div className=' bscflex flex-col items-start justify-center'>
                <p className='text-[rgb(253,246,249)] mx-4 text-md bsc'>
                  Shahbad Daulatpur, Bawana Road
                </p>
                <p className='text-[rgb(253,246,249)] mx-4 text-md bsc'>
                  Delhi - 110042
                </p>
                <p className='text-[rgb(253,246,249)] mx-4 text-md'>
                  <a aria-label="www.dtu.ac.in" href='https://www.dtu.ac.in/' target='_blank' rel='noreferrer' className='hover:text-[#08D4F8] bsc'>www.dtu.ac.in</a>
                </p>
                <p className='text-[rgb(253,246,249)] mx-4 text-md'>
                  <a aria-label="IEEE-DTU: www.ieeedtu.in" href='https://www.ieeedtu.in' target='_blank' rel="noreferrer" className='hover:text-[#08D4F8] bsc'>
                    IEEE-DTU: www.ieeedtu.in
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='text-[#fff] text-lg font-bold py-2 bsh'>
              Contact Us
            </p>
            <div className='flex items-center justify-start'>
              <div className='bg-[#7f7f7f] px-1 pt-1 rounded-lg bsc'>
                <svg width="17px" fill="white" height="17px" className="bsc" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet"><path fill="white" d="M34.06 26.407l-3.496-3.496a4.942 4.942 0 0 0-8.34 2.528c-5.765-1.078-11.372-6.662-11.721-11.653a4.908 4.908 0 0 0 2.586-1.36a4.943 4.943 0 0 0 0-6.99L9.594 1.94a4.943 4.943 0 0 0-6.99 0C-7.882 12.426 23.574 43.882 34.06 33.396a4.944 4.944 0 0 0 0-6.989z"></path></svg>
              </div>
              <div>
                <p className='text-[rgb(253,246,249)] mx-4 text-md bsc'>
                  Anshita Garg
                </p>
                <p className='text-[rgb(253,246,249)] mx-4 text-md bsc'>
                  <a aria-label="+91 85888 19718" href='https://wa.me/+918588819718?text=' target='_blank' rel='noreferrer' className='hover:text-[#08D4F8]'>+91 98991 33065</a>
                </p>
              </div>
            </div>
            <div className='flex items-center justify-start bsc'>
              <div className='bg-[#7f7f7f] px-1 pt-1 rounded-lg'>
                <svg width="17px" fill="white" height="17px" className="bsc" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet"><path fill="white" d="M34.06 26.407l-3.496-3.496a4.942 4.942 0 0 0-8.34 2.528c-5.765-1.078-11.372-6.662-11.721-11.653a4.908 4.908 0 0 0 2.586-1.36a4.943 4.943 0 0 0 0-6.99L9.594 1.94a4.943 4.943 0 0 0-6.99 0C-7.882 12.426 23.574 43.882 34.06 33.396a4.944 4.944 0 0 0 0-6.989z"></path></svg>
              </div>
              <div>
                <p className='text-[rgb(253,246,249)] mx-4 text-md bsc'>
                  Aanya
                </p>
                <p className='text-[rgb(253,246,249)] mx-4 text-md bsc'>
                  <a aria-label="+91 95600 83110" href='https://wa.me/+919560083110?text=' target='_blank' rel='noreferrer' className='hover:text-[#08D4F8]'>+91 88269 78278</a>
                </p>
              </div>
            </div>
          </div>

          {/* <div className='text-[rgb(253,246,249)] mx-4 text-md flex flex-col items-start justify-start '>
                        <p className='text-[#fff] text-lg py-2 bsh'>
                            <b className=''>
                                Designed by
                            </b>
                        </p>
                        <span className='flex items-center justify-between'>
                            <p className='pr-1 bsc'>
                                Prashant
                            </p>
                            <a aria-label="link2rr" href='https://github.com/prashant0664' target='_blank' rel='noreferrer' className='pt-1'>
                                <BsGithub className='hover:color-white bsc' />
                            </a>
                        </span>
                    </div> */}

        </div>
        <div className='py-2 mb-[20px]'>
          <hr />
          <div className='flex justify-between items-center mx-10 text-sm pt-8 disf2   '>
            <p >
              ©2023 Women in Engineering IEEE-DTU
            </p>
            <div className='flex items-center justify-center gap-[20px] margin-bottom-footer2'>
              <a aria-label="link17" href='https://www.facebook.com/ieeedtu/' target='_blank' rel='noreferrer'>
                <svg fill="white" width="29px" height="29px" className="text-[23px] bicon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
                </svg>
              </a>
              <a aria-label="link18" href='https://www.instagram.com/ieee.dtu/' target='_blank' rel='noreferrer'>
                <BsInstagram className='text-[23px] hover:text-[#08D4F8]' />
              </a>
              <a href='https://www.linkedin.com/company/ieee-dtu/' aria-label="link2p" target='_blank' rel='noreferrer'>
                <BsLinkedin className='text-[23px] hover:text-[#08D4F8]' />
              </a>
              <a aria-label="link19" href='https://twitter.com/dtu_ieee' target='_blank' rel='noreferrer'>
                <svg height="23px" width="23px" fill="white" className="text-[23px] hover:text-[#08D4F8]" viewBox="0 0 512 512">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
                {/* <FaXTwitter className='text-[23px] hover:text-[#08D4F8]' /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
