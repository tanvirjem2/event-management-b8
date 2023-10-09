import google from "../assets/sponsors/google.png"
import amazon from "../assets/sponsors/amazon.png"
import figma from "../assets/sponsors/figma.png"
import spotify from "../assets/sponsors/spotify.png"
import telerama from "../assets/sponsors/telerama.png"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Sponsors = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div className="mt-24">
            <h2 className="text-center font-bold text-4xl">Our Sponsors</h2>
            <div className="flex items-center justify-evenly mt-10">
                <div data-aos="zoom-out-up">
                    <img className="drop-shadow-lg" src={google} alt="" />
                </div>
                <div data-aos="zoom-out-up">
                    <img className="drop-shadow-lg" src={amazon} alt="" />
                </div>
                <div data-aos="zoom-out-up">
                    <img className="drop-shadow-lg" src={figma} alt="" />
                </div>
                <div data-aos="zoom-out-up">
                    <img className="drop-shadow-lg" src={spotify} alt="" />
                </div>
                <div data-aos="zoom-out-up">
                    <img className="drop-shadow-lg" src={telerama} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Sponsors;