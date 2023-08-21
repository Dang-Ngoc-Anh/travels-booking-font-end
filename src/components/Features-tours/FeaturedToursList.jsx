import React from 'react'
import TourCard from '../../share/TourCard'
// import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
import useFetch from '../../hooks/useFetch.js'
import { BASE_URL } from '../../utils/config.js'
const FeaturedToursList = () => {
  const {data: featuredTours , loading , err} = useFetch(`${BASE_URL}/tour/search/getFeaturedTour`);
  return (
    <>
        {featuredTours?.map(tour =>{
            return (<Col lg='3' className='mb-4' key={tour._id}>
                    <TourCard tour={tour}/>
            </Col>)
        })}
    </>
  )
}

export default FeaturedToursList