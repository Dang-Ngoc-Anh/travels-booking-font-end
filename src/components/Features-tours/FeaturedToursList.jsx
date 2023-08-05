import React from 'react'
import TourCard from '../../share/TourCard'
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
const FeaturedToursList = () => {
  return (
    <>
        {tourData?.map(tour =>{
            return (<Col lg='3' className='mb-4' key={tour.id}>
                    <TourCard tour={tour}/>
            </Col>)
        })}
    </>
  )
}

export default FeaturedToursList