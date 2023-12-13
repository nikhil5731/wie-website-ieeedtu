import React from 'react'
import data from "../Data/NavbarData.json"
import { TfiMenu } from "react-icons/tfi"
import { ImCross } from "react-icons/im"

/**
 * This function contains Navbar
 * @version 1.0.0
 * @since 1.0.0
 * @visibleName Hero Section
 */
const Hero = () => {
    const [rc1, crc1] = React.useState(47);
    const [gc1, grc1] = React.useState(3);
    const [bc1, brc1] = React.useState(110);
    const [rc2, crc2] = React.useState(16);
    const [gc2, grc2] = React.useState(1);
    const [bc2, brc2] = React.useState(40);
    const [rc3, crc3] = React.useState(35);
    const [gc3, grc3] = React.useState(3);
    const [bc3, brc3] = React.useState(33);

    const [show, cshow] = React.useState(false)

    const [arr, carr] = React.useState([]);
    const [arr1, carr1] = React.useState([]);


    const [mshow2, cmshow2] = React.useState(false);



    const [cross, ccross] = React.useState(false);
    const navbarStyles = {
        position: 'fixed',
        height: '60px',
        width: '100%',
        backgroundColor: 'grey',
        textAlign: 'center'
    }


    const getrandom = (min, max) => {
        const floatRandom = Math.random()
        const difference = max - min;
        const random = Math.round(difference * floatRandom)
        const randomWithinRange = random + min
        return randomWithinRange
    }

    React.useEffect(() => {
        fillclr();
    }, [])

    const fillclr = () => {
        var arrs1 = []
        var arrs2 = []
        for (let i = 0; i < 250; i++) {
            arrs1.push(getrandom(6, 100));
            arrs2.push(getrandom(6, 100));
        }
        carr(arrs1);
        carr1(arrs2);
    }
    const Backbox = () => {
        return (
            <div className='box' key={Math.random()}>
                {
                    arr.map((i, j) => {
                        return (<>
                            <div key={j} style={{ top: `${i}%`, left: `${arr1[j]}%` }}></div>
                        </>)
                    })
                }
            </div>
        )
    }
    return (
        <>
            <div className={`${cross ? '' : 'hidden'} ${!cross ? 'hidden' : 'sideback'}`} onClick={() => { ccross(!true); cmshow2(!mshow2); }}>
            </div>
            <Backbox key={Math.random()} />
            <div className='hero-umain'>

                <div id="home" className={`hero-main ${show ? '' : ''}`} style={{
                    "--rc1": rc1, "--gc1": gc1, "--bc1": bc1,
                    "--rc2": rc2, "--gc2": gc2, "--bc2": bc2, "--rc3": rc3, "--gc3": gc3, "--bc3": bc3
                }}>
                    <div className={(window.innerWidth > 520) ? `navcont` : 'hidden'}>
                        <div className='navlist2'>
                            {
                                data.data.map((i, j) => {
                                    return (<>
                                        <a className='navitem2' href={i.link} key={i.link}>
                                            <h2 className='navname2'>
                                                {i.name}
                                            </h2>
                                        </a>
                                    </>)
                                })
                            }
                        </div>
                    </div>


                    <div className={(window.innerWidth <= 520) ? `navcont2 z-[1000000]` : 'hidden'}>
                        <p className={`menuicon flex ${!cross ? '' : 'hidden'}`} onClick={() => { ccross(true) }}>
                            <TfiMenu className='menuiconb' /><p className='menuicona text-[1.3rem]'>
                                MENU
                            </p>
                        </p>
                        <p onClick={() => { ccross(false) }} className={`menuicon2 flex ${!cross ? 'hidden' : ''}`}>
                            <ImCross className='menuiconb' />
                            <p className='menuicona text-[1.3rem]'>
                                CLOSE
                            </p>
                        </p>

                        <div className='navlist22' wobble={`${!cross}`}>
                            {
                                data.data.map((i, j) => {
                                    return (<>
                                        <a className='navitem22' href={i.link} key={i.link}>
                                            <h2 className='navname2'>
                                                {i.name}
                                            </h2>
                                        </a>
                                    </>)
                                })
                            }
                        </div>
                    </div>

                    <div className='heading-hero'>
                        <h1 className='heading-main'>
                            <span className='first-letter'>W</span>omen <br /><span className='first-letter'>&#160;I</span>n <br /><span className='first-letter'>E</span>ngineering
                        </h1>
                        <div className='hero-subheading'>DELHI TECHNOLOGICAL<br /> UNIVERSITY</div>
                    </div>
                </div>
            </div>


        </>
    )

}

export default Hero
