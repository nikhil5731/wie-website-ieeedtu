import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img0 from '../Assets/wievek_image.JPG';
import img1 from "../Assets/webinar_image.png";
import img2 from '../Assets/sentinel_program_image.png';
import img3 from '../Assets/ieee_day_image.jpeg';
import img4 from '../Assets/wiexperience_image.png';
import img5 from '../Assets/dssywc_image.png';
import eventsData from "../Data/EventsData.json"

/**
 * This function contains various past Events of IEEE-DTU WIE
 * @version 1.0.0
 * @since 1.0.0
 * @visibleName IEEE DTU WIE Events
 */
/// Following function will contain details about past events of IEEE-DTU
/// To add new event just open "../Data/EventsData.json" and add content there
/// for image issue, import image here and add image name in imgs json below
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
  const imgs = {
    img0: img0,
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5
  }
  React.useEffect(() => {
    if (window.innerWidth < 655) {
      cnum(1);
    } else if (window.innerWidth < 1057) {
      cnum(2);
    }
    console.log(eventsData.eventsData);
  }, [window.innerWidth]);

  return (
    <div id="events" className="row clients-outer eventspadding bg-[rgb(253, 246, 249)] mt-6 w-full" data-aos="fade-up">
      <div className="col-full p-0 eventbox1">
        <h2 className="text-2xl font-bold headings mb-4 headings p-0">Our Events</h2>
        <Slider {...settings}>
          {eventsData.eventsData.map((event, index) => (
            <div key={index} className=" clients__slide flex space-x-4 p-4 ">
              <p>
                <div className="bg-[rgba(110,43,127,1)] p-4 flex-1 transition-transform transform hover:scale-105 h-[630px] eventbox2 border-4 border-white">
                  <img
                    src={eval("imgs." + event.image)}
                    alt={event.title}
                    className="w-64 mx-auto event-img eveimg"
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
