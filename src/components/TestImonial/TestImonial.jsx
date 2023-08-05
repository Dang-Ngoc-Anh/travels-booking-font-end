import React from 'react'
import Slider from 'react-slick'
import avata01 from '../../assets/images/ava-1.jpg'
import avata02 from '../../assets/images/ava-2.jpg'
import avata03 from '../../assets/images/ava-3.jpg'
const TestImonial = () => {

  var settings  ={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoPlaySpeed:2000,
    slidesToShow:3,
    responsive:[
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          infinite:true,
          dots:true
        }
      },
      {
        breakpoint:576,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
        }
      }
    ]
  }
  return (
    <Slider {...settings }>
      <div className="testimonial py-4 px-3" >
        <p>Lorem ipsum dolor sit amet consectetur , adiposicing elit. 
          Ulam ipsum nobis asperioes soluta volutapas quas voluptates 
          Molesiae tempora dignssimos , animi prasentium molesstias.
           Molesiae tempora dignssimos , animi prasentium molesstias</p>
           <div className='d-flex align-items-center  gap-4 mt-3'>
                <img src={avata01} className='w-25 h-25 rounded-2' />
                <div>
                  <h5 className='mb-0 mt-3'>John Doe</h5>
                  <p>Customer</p>
                </div>
           </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur , adiposicing elit. 
          Ulam ipsum nobis asperioes soluta volutapas quas voluptates 
          Molesiae tempora dignssimos , animi prasentium molesstias.
           Molesiae tempora dignssimos , animi prasentium molesstias</p>
           <div className='d-flex align-items-center  gap-4 mt-3'>
                <img src={avata02} className='w-25 h-25 rounded-2' />
                <div>
                  <h5 className='mb-0 mt-3'>John Doe</h5>
                  <p>Customer</p>
                </div>
           </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur , adiposicing elit. 
          Ulam ipsum nobis asperioes soluta volutapas quas voluptates 
          Molesiae tempora dignssimos , animi prasentium molesstias.
           Molesiae tempora dignssimos , animi prasentium molesstias</p>
           <div className='d-flex align-items-center  gap-4 mt-3'>
                <img src={avata03} className='w-25 h-25 rounded-2' />
                <div>
                  <h5 className='mb-0 mt-3'>John Doe</h5>
                  <p>Customer</p>
                </div>
           </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur , adiposicing elit. 
          Ulam ipsum nobis asperioes soluta volutapas quas voluptates 
          Molesiae tempora dignssimos , animi prasentium molesstias.
           Molesiae tempora dignssimos , animi prasentium molesstias</p>
           <div className='d-flex align-items-center  gap-4 mt-3'>
                <img src={avata03} className='w-25 h-25 rounded-2' />
                <div>
                  <h5 className='mb-0 mt-3'>John Doe</h5>
                  <p>Customer</p>
                </div>
           </div>
      </div> 
    </Slider>
  )
}

export default TestImonial