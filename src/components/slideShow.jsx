import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/bag.png";
import img2 from "../images/man.png";
import { Link } from 'react-router-dom';

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: 15,
        zIndex: 1,
        cursor: 'pointer',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        borderRadius: '50%',
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClick}
    >
      &#10094; {/* Unicode for left arrow */}
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right: 15,
        zIndex: 1,
        cursor: 'pointer',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        borderRadius: '50%',
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClick}
    >
      &#10095; {/* Unicode for right arrow */}
    </div>
  );
};

const SlideShow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="mt-5">
      <Slider {...settings}>
        <div className="bg-slate-100">
          <div className="flex flex-col md:flex-row md:gap-10 items-center justify-between">
            <div className="flex-1 flex justify-center">
              <img className='w-full h-auto' src={img2} alt="Man" />
            </div>
            <div className="flex-1 text-center md:text-left max-sm:pt-16">
              <h4 className="font-bold tracking-wide text-xl max-sm:mb-4 text-gray-600">Shopping with us.</h4>
              <h1 className="font-bold text-4xl md:text-7xl text-gray-800">Welcome (:</h1>
              <div>
                <Link to="#" className="btn-flip relative text-center lg:mr-20 max-sm:mb-20 max-sm:mr-24 uppercase duration-100" data-back="thank you" data-front="Hover me"></Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img className='w-full h-auto' src={img1} alt="Bag" />
            </div>
          </div>
        </div>
        
            <div className="home2 md:h-[338px] lg:h-[575px]">
          <div className="flex items-center h-full">
            <div className="text-center lg:pl-60 md:pl-28 max-sm:pl-20">
              <h4 className="font-bold tracking-wide text-xl text-gray-700">We have many categories</h4>
              <h1 className="max-sm:text-3xl font-bold text-7xl md:4xl text-red-600">Above 70%</h1>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SlideShow;
