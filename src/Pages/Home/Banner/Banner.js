import React from 'react';
import './Banner.css';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <div className='carusel-img'>
    <img src={img1} alt='' className="w-full rounded-xl" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
      <h4 className='text-6xl font-bold text-white'>Affortable <br />
        Price for Car <br />
        Serviching
      </h4>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5  top-1/2">
      <p className='text-white text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tempore quasi et corrupti blanditiis dolore dolores voluptate amet reprehenderit itaque?</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5  top-3/4">
    <button className="btn btn-secondary mr-5">Button</button>
    <button className="btn btn-outline btn-secondary">Button</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <div className='carusel-img'>
    <img src={img2} alt='' className="w-full rounded-xl" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
      <h4 className='text-6xl font-bold text-white'>Affortable <br />
        Price for Car <br />
        Serviching
      </h4>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5  top-1/2">
      <p className='text-white text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tempore quasi et corrupti blanditiis dolore dolores voluptate amet reprehenderit itaque?</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5  top-3/4">
    <button className="btn btn-secondary mr-5">Button</button>
    <button className="btn btn-outline btn-secondary">Button</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <div className='carusel-img'>
    <img src={img3} alt='' className="w-full rounded-xl" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
      <h4 className='text-6xl font-bold text-white'>Affortable <br />
        Price for Car <br />
        Serviching
      </h4>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5  top-1/2">
      <p className='text-white text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tempore quasi et corrupti blanditiis dolore dolores voluptate amet reprehenderit itaque?</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5  top-3/4">
    <button className="btn btn-secondary mr-5">Button</button>
    <button className="btn btn-outline btn-secondary">Button</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
    );
};

export default Banner;