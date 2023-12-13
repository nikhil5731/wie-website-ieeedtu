import React from 'react'
import aboutimg from "../Assets/aboutimg.jpeg"

/**
 * This function contains info about IEEE DTU WIE
 * @version 1.0.0
 * @since 1.0.0
 * @visibleName About IEEE DTU WIE
 * @see https://www.ieeedtu.in
 */
const AboutUs = () => {
    return (
        <>
            <div className='about-section ' id="about">
                <div className='about-section-sub pb-[10px] pt-[10px]'>
                    <div className='headings text-white'>
                        <p className='text-[rgb(5,12,89)]'>About Us</p>
                    </div>
                    <div className='about-flex'>

                        <div className='about-content'>
                            <p className='hcontentsub text-[rgb(110,43,127)]'>
                                Within the formidable IEEE DTU society, IEEE Women in Engineering (WIE) serves as a dedicated subpart committed to advancing women in STEM fields. The vision it holds is that of a vibrant community of women and men collectively using their diverse talents for humanity. This global network of IEEE members and volunteers inspires young girls and promotes women engineers, actively working to foster gender diversity. In India, the IEEE DTU WIE Chapter, an integral part of this society, passionately supports the formation of new IEEE WIE Affinity Groups, acknowledges the exceptional achievements of women in electrical and electronics engineering, and organizes workshops at major technical conferences. By enhancing networking opportunities and advocating for IEEE WIE membership, it strives to lead the way in promoting gender inclusion within the fields of engineering and science.
                            </p>
                        </div>
                        <div className='about-img'>
                            <div className='aboutimgsub relative'>
                                <img src={aboutimg} alt="aboutwieimg" className='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs