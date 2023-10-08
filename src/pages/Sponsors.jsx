import google from "../assets/sponsors/google.png"
import amazon from "../assets/sponsors/amazon.png"
import figma from "../assets/sponsors/figma.png"
import spotify from "../assets/sponsors/spotify.png"
import telerama from "../assets/sponsors/telerama.png"

const Sponsors = () => {
    return (
        <div className="mt-24">
            <h2 className="text-center font-bold text-4xl">Our Sponsors</h2>
            <div className="flex items-center justify-evenly mt-10">
                <img className="drop-shadow-lg" src={google} alt="" />
                <img className="drop-shadow-lg" src={amazon} alt="" />
                <img className="drop-shadow-lg" src={figma} alt="" />
                <img className="drop-shadow-lg" src={spotify} alt="" />
                <img className="drop-shadow-lg" src={telerama} alt="" />
            </div>
        </div>
    );
};

export default Sponsors;