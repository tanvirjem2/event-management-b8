import weddings from '../assets/Weddings.png'
import birthday from '../assets/Blue White And Pink Happy Birthday Banner (Landscape).png'
import anniversaries from '../assets/Aniversary.png'
import engagement from '../assets/Sunset Boats Engagement Party Invitation.png'

const Banner = () => {
    return (
        <div className="carousel w-full mt-6">

            {/* Slider 1 */}
            <div id="slide1" className="carousel-item relative w-full">

                {/* Picture 1 */}
                <div className="hero min-h-screen rounded-lg">
                    <img className='rounded-lg' src={weddings} alt="" />
                    <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>

            {/* Slider 2 */}
            <div id="slide2" className="carousel-item relative w-full">

                {/* Picture 2 */}
                <div className="hero min-h-screen rounded-lg">
                    <img className='rounded-lg' src={birthday} alt="" />
                    <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slider 3 */}
            <div id="slide3" className="carousel-item relative w-full">

                {/* Picture 3 */}
                <div className="hero min-h-screen rounded-lg">
                    <img className='rounded-lg' src={anniversaries} alt="" />
                    <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slider 4 */}
            <div id="slide4" className="carousel-item relative w-full">

                {/* Picture 4 */}
                <div className="hero min-h-screen rounded-lg">
                    <img className='rounded-lg h-[700px]' src={engagement} alt="" />
                    <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;