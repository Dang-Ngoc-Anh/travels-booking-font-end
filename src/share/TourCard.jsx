import React from 'react'
import './tour-card.css'
import { Button, Card , CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import calculatorAvgrating from '../utils/avgRating'
const TourCard = ({tour}) => {
    const { 
        id,
        title,
        city,
        distance,
        price,
        maxGroupSize,
        desc,
        reviews,
        photo,
        featured} = tour

        const {totalRating , avgRating} = calculatorAvgrating(reviews)
  return (
    <div className='tour__card'>
        <Card>
            <div className="tour__img">
                <img src={photo} alt="tour-img" />
                {featured && <span>Featured</span>}
            </div>
        </Card>
        <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className='tour__location align-items-center gap-1'>
                    <i class="ri-map-pin-line"></i>{city}
                </span>
                <span className='tour__rating align-items-center gap-1'>
                    <i class="ri-star-fill"></i>
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0? 'Not rated' : <span>({reviews.length}) </span> } 
                </span>
            </div>
            <h5 className="tour__title">
                <Link to={`tours/${id}`}>{title}</Link>
            </h5>
            <div className="card__bottom d-flex align-items-center
            justify-content-between mt-3">
                <h5>${price} <span>/Person</span></h5>
                <Button className='btn booking__btn' >
                    <Link to={`tours/${id}`}>Book Now</Link>
                </Button>
            </div>
        </CardBody>
    </div>
  )
}

export default TourCard