import React from 'react'
import "../style/contact.css"

/**
 * This function contains information of benefits of joining IEEE
 * and google form to join IEEE
 * @version 1.0.0
 * @since 1.0.0
 * @visibleName Join IEEE-DTU
 */
/// This section contans th einfo about Why IEEE-DTU and form to Join IEEE DTU
/// This is divided into two parts:
/// 1st part contains google form and second part contain Benefits of joining IEEE

const Contact = () => {
  return (
    <>
      <section id="contact" className="form con-class2b">
        <br /><br />
        {/* Google form part */}
        <div className="grid-container_5">
          <div className="grid-item_5 con-class3">
            <div className="py-2">
              <span className="con-class1 headings-ben">Be Part of the IEEE-DTU Family</span>
              <h3 className="con-class2">
                <b>
                  Join Now
                </b>
              </h3>
              <br />
            </div>
            <iframe src="https://forms.gle/u164tfiTynR6oChs9" className='iframe-class' width="450" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
          </div>
          {/* Benefits of Joining IEEE part */}
          <div className="grid-item_5">
            <div className="row section-header has-bottom-sep aos-init aos-animate" data-aos="fade-up">
              <div className="col-full">
                <h5 className="con-class4 headings-ben ml-[0px]" >Benefits</h5>
                <h4 className="display-1 display-1--light con-class5">
                  <b>

                    OF JOINING IEEE DTU
                  </b>
                </h4>
              </div>
            </div>
            <p className='con-class6'>
              IEEE membership is an identity in itself. This includes invites to International conferences, journals, and year-round Seminars and Workshops. The members get special discounts on electronic devices and workshops. Competitions and contests like IEEE Xtreme are a direct opportunity to compete with the stalwarts of their fields.

              leee.org's email ID gives you a sense of belongingness in the outside world and opens up a lot of opportunities.<br /><br />

              IEEE members enjoy reduced rates on many proprietary products and services including IEEE books and eBooks, journals and articles, conferences and proceedings, standards, society memberships, and continuing education courses. In addition, members have access to a variety of affinity programs that offer savings.

              The IEEE Xplore Library offers a student member access to the ultimate collection of technical periodicals and conference publications at no additional cost. The latest research from 37 peer-reviewed magazines and journals, covering the whole spectrum of computing and if that wasn't enough to captivate your interest 700,000 documents from more than 300,000 content experts covering virtually every computing topic.

              Excited enough? Well, these were just the perks of being a member of IEEE Let's talk about the additional perks of IEEE DTU. Let's just say, it can't be expressed on a tiny page like this. But still, am gonna try.<br /><br />

              Ever wondered to participate in Robo wars and Robo roces. Did it ever occur to you, how to build one of those drones? Worry not, we have you covered! Becoming a member invites you to be a part of the family of great minds, each a master of his own field. who, in the due course of time would become your mentors. We work using the concept of SIGS (Special Interest Groups) and take classes for you after compus hours and help you grow. Be it the field of Al and ML, or if you want to learn Arduino, or if you have a knack for designing, be it web or 30 Modelling.

              You can't stop exploring that is a guarantee we provide on our behalf. <br /><br />

            </p>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact