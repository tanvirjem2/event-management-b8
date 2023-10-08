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
                <img src={google} alt="" />
                <img src={amazon} alt="" />
                <img src={figma} alt="" />
                <img src={spotify} alt="" />
                <img src={telerama} alt="" />
            </div>
        </div>
    );
};

export default Sponsors;