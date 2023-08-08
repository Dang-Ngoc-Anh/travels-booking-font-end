import React, { useRef, useState } from 'react'
import '../styles/tour-detail.css'
import { Container , Row , Col , Form , ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import avata from '../assets/images/avatar.jpg'
import calculatorAvgrating from '../utils/avgRating'
import Booking from '../components/Booking/Booking'
const TourDetails = () => {
  const {id} = useParams();
  const tour = tourData.find(tour => tour.id === id)
  const opptions = {
    day:"number",
    month:"long",
    year:"numeric"
  }
  const reviewMsgRef = useRef('')
  const [tourRating , setTourRating] = useState(null)
  const submitHandle = e =>{
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value
    alert(` ${reviewText} => Chất lượng dịch vụ: ${tourRating}`)
  }
  const { 
    photo,
    title,
    city,
    distance,
    price,
    maxGroupSize,
    desc,
    reviews,
    address,
    featured} = tour
    const {totalRating , avgRating} = calculatorAvgrating(reviews)


    return (
    <section>

      <Container>
        <Row>
          <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt="" />
            </div>
            <div className='tour__info'>
              <h2>{title}</h2>
              <div className='d-flex align-items-center gap-5'>
                <span className='tour__rating align-items-center gap-1'>
                      <i class="ri-star-fill" style={{
                        'color':'var(--secondary-color)'
                      }}></i>
                      {calculatorAvgrating === 0 ? null : avgRating}
                      {totalRating === 0? 'Not rated' : <span>({reviews?.length}) </span> } 
                  </span>
                  <span>
                  <i class="ri-map-pin-user-line"></i>{address}
                    </span>
              </div>
              <div className="tour__extra-detail">
                    <span><i class="ri-map-pin-line"></i>{city}</span>
                    <span><i class="ri-money-dollar-circle-line"></i>{price}/Person</span>
                    <span><i class="ri-map-pin-time-line"></i>{distance}Km</span>
                    <span><i class="ri-group-line"></i>{maxGroupSize}</span>
              </div>
              <h5>Description</h5>
                    <p>{desc}</p>
            </div>
            {/* ========tours revews sections start=========  */}
            <div className="tour__reviews mt-4">
              <h4>Reviews({reviews?.length } review)</h4>
              <Form className='d-flex align-items-center gap-3 mt-4
              rating__group' onSubmit={submitHandle}>
                  <span>1<i class="ri-star-fill" onClick={()=> setTourRating(1)}></i></span>
                  <span>2<i class="ri-star-fill" onClick={()=> setTourRating(2)}></i></span>
                  <span>3<i class="ri-star-fill" onClick={()=> setTourRating(3)}></i></span>
                  <span>4<i class="ri-star-fill" onClick={()=> setTourRating(4)}></i></span>
                  <span>5<i class="ri-star-fill" onClick={()=> setTourRating(5)}></i></span>
                  <div className="review__input">
                    <input 
                      type="text" 
                      placeholder='Share your thoughts' 
                      ref={reviewMsgRef}
                      required
                      />
                    <button className='btn primary__btn text-white'>Submit</button>
                  </div>
              </Form>
              <ListGroup>
                <div className="user__reviews">
                  {
                    reviews?.map(review =>{
                      return <div className="review__item">
                        <img src={avata} alt="" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>Ngoc Anh</h5>
                                <p>{new Date().toLocaleDateString()}</p>
                              </div>
                              <span>5<i class="ri-star-fill"></i></span>
                          </div>
                          <h6>Amzing tour</h6>
                        </div>
                      </div>
                    })
                  }
                </div>
              </ListGroup>
            </div>
            {/* ========tours revews sections end=======  */}
          </Col>
          <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TourDetails