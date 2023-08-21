import React, { useEffect, useState } from 'react'
import CommonSection from '../share/CommonSection'
import '../styles/tour.css';
import tourData from '../assets/data/tours'
import TourCard from '../share/TourCard';
import SearchBar from '../share/SearchBar';
import NewLetter from  '../share/NewLetter';
import { Container, Row , Col} from 'reactstrap';

const Tour = () => {

  const [pageCount , setPageCount] = useState(0);
  const [page , setPage] = useState(0);
  useEffect(()=> {
    const pages = Math.ceil(5/4)

    setPageCount(pages);
  }, [])
  return (
    <>
      <CommonSection title={'All tours'} />
      <section>
        <Container>
          <Row>
              <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {
              tourData.map((item , index)=>{
                return (<Col lg='3' key={index}><TourCard tour={item}/></Col>)
              })
            }
          </Row>
          <Col lg='12'>
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map(number =>(
                    <span 
                      key={number} 
                      onClick={()=> setPage(number)}
                      className={page === number ? "active__page" : ""}>
                      {number + 1}
                    </span>
                  ))}
            </div>
          </Col>
        </Container>
      </section>
    </>
  )
}

export default Tour