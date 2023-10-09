import wedding from "../assets/sponsors/vecteezy_botanical-floral-element-hand-drawn-logo-with-wild-flower_7342878.jpg"
import birthday from "../assets/sponsors/PngItem_4111338.png"
import Anniversaries from "../assets/sponsors/25th-Anniversary-Logo-PNG.png"
import Retirement from "../assets/sponsors/images.jpeg"
import baby from "../assets/sponsors/pngwing.com.png"
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
            <div className="flex flex-col lg:flex-row space-y-6 items-center justify-evenly mt-10">
                <div data-aos="zoom-out-up">
                    <img className="drop-shadow-lg w-[154px]" src={wedding} alt="" />
                </div>
                <div data-aos="zoom-out-up">
                    <img className="drop-shadow-lg w-[154px]" src={birthday} alt="" />
                </div>
                <div data-aos="zoom-out-up">
                    <img className="drop-shadow-lg w-[154px] " src={Anniversaries} alt="" />
                </div>
                <div data-aos="zoom-out-up">
                    <img className="drop-shadow-lg w-[154px]" src={Retirement} alt="" />
                </div>
                <div data-aos="zoom-out-up">
                    <img className="drop-shadow-lg w-[154px]" src={baby} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Sponsors;