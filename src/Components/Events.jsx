import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../Assets/webinar_image.png";
import img2 from '../Assets/sentinel_program_image.png';
import img3 from '../Assets/ieee_day_image.jpeg';
import img4 from '../Assets/wiexperience_image.png';
import img5 from '../Assets/dssywc_image.png';
const Events = () => {
  const [num, cnum] = React.useState(3);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: num,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
  };

  const eventsData = [
    {
      title: 'Web Development Webinar (August 7th, 2021)',
      description: '"Unlocking Web Development Potential" - IEEE DTU and IEEE DTU WIE, in collaboration with PrepBytes, hosted a transformative webinar. With Ms. Mamta Kumari, Co-Founder of PrepBytes, as the keynote speaker, 300 participants were guided on efficiently building quality web projects, tapping into the endless possibilities of web development.',
      image: img1,
      link: '',
    },
    {
      title: 'Sentinel Education Program (September 15th - October 21st, 2021)',
      description: '"Sentinel Education: Crafting Future Innovators" - IEEE DTU and IEEE WIE joined forces with Sentinel Education for an intensive five-week program. Four workshops, each led by industry experts, empowered attendees to ideate, create, and execute privacy-focused decentralized applications. With a substantial prize pool of US$100,000, this initiative promised to open doors to exciting opportunities in the world of tech.',
      image: img2,
      link: '',
    },
    {
      title: 'IEEE DAY’21 (October 4th-5th, 2021)',
      description: '"IEEE Day: Celebrating a Legacy of Innovation" - IEEE DTU marked IEEE Day on October 4th and 5th, commemorating the historical gathering of engineers in 1884. This event united engineers globally to share technical insights and explore the future of technology. It was a celebration of innovation and collaboration, focusing on leveraging technology for a brighter tomorrow.',
      image: img3,
      link: '',
    },
    {
      title: 'WIExperience - IEEE Day (October 5th, 2021)',
      description: '"WIExperience: Women Pioneering in Tech" - IEEE DTU WIE, in collaboration with IEEE WIE AG Delhi Section, presented WIExperience. This empowering event featured a panel of distinguished women in technology, including Shatakshi Singh, Ishita Sharma, Palak Aggarwal, and Ayushi Kesharwani. They shared their inspiring journeys in the tech industry, encouraging young women to excel in this dynamic field.',
      image: img4,
      link: '',
    },
    {
      title: 'Delhi Section Students-Young Professionals Women in Engineering Congress (September 17th-18th, 2022)',
      description: '"DSSYWC 2022: Forging Paths in Engineering" - IEEE DTU Student Branch hosted the annual flagship congress of IEEE Delhi Section. Over two days, the event provided a platform for young minds to showcase their ideas and skills, connect with industry experts, and learn from seniors. The congress recognized outstanding student branches, fostering a spirit of innovation and collaboration.',
      image: img5,
      link: '',
    },
  ];

  React.useEffect(() => {
    if (window.innerWidth < 655) {
      cnum(1);
    } else if (window.innerWidth < 1057) {
      cnum(2);
    }
  }, [window.innerWidth]);

  return (
    <div id="events" className="row clients-outer eventspadding bg-[rgb(253, 246, 249)] mt-6 w-full" data-aos="fade-up">
      <div className="col-full p-0 eventbox1">
        <h2 className="text-2xl font-bold headings mb-4 headings p-0">Our Events</h2>
        <Slider {...settings}>
          {eventsData.map((event, index) => (
            <div key={index} className=" clients__slide flex space-x-4 p-4 ">
              <p>
                <div className="bg-[rgba(110,43,127,1)] p-4 flex-1 transition-transform transform hover:scale-105 h-[630px] eventbox2 border-4 border-white">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-64 h-64 mx-auto event-img eveimg"
                  />
                  <h2 className="text-[rgba(253,246,249,1)] text-lg font-bold font-mono mt-2 event-head">
                    {event.title}
                  </h2>
                  <p className="text-[rgb(224,224,224)] font-light event-desc">{event.description}</p>
                </div>
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Events;
