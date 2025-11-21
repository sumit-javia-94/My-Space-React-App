import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../assets/banne1.jpg';
import banner2 from '../../assets/banner2.jpg';

function HomeBanner() {
  return (
    <section className='iwt-banner-slider'>
      <Carousel>
        <Carousel.Item style={{height:"500px"}}>
          <img className='w-100' src={banner1} alt='banner1'/>
          <Carousel.Caption className='text-dark text-start'>
            <h1 className='mb-4'>Bicycle for riding</h1>
            <h6 className='mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:"500px"}}>
          <img className='w-100' src={banner2} alt='banner2'/>
          <Carousel.Caption className='text-dark text-start'>
            <h1 className='mb-4'>Mother and son playing super heroes</h1>
            <h6 className='mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default HomeBanner;