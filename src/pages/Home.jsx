import React from 'react'
import "../styles/home.css"
import {Container , Row , Col} from 'reactstrap' 
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg02 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import worldImg from "../assets/images/world.png"
import experience from "../assets/images/experience.png"
import Subtible from '../share/Subtible'
import SearchBar from '../share/SearchBar'
import ServicesList from '../services/ServicesList'
import FeaturedToursList from '../components/Features-tours/FeaturedToursList'
import MasonryImagesGallery from '../components/Img-gallery/MasonryImagesGallery'
import TestImonial from '../components/TestImonial/TestImonial'
import NewLetter from '../share/NewLetter'
const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row >
          <Col lg='6'>
            <div className='hero__content'>
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtible subtible={'Know Before You Go'}/>
                  <img src={worldImg} alt="" />
                </div>
                <h1>Traveling opens the door to creating <span
                className='highLight'>memories</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur , adiposicing elit.
                  Ulam ipsum nobis asperioes soluta volutapas quas voluptates
                  Molesiae tempora dignssimos , animi prasentium molesstias.
                  Molesiae tempora dignssimos , animi prasentium molesstias 
                </p>
            </div>
          </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} controls />
              </div>
            </Col>
            <Col lg='2' >
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
        </Row>
      </Container>
    </section>

    {/* ================hero sectio start ========================== */}

    <section>
      <Container>
        <Row>
          <Col  lg='3'>
            <h5 className="services__subtitle">
              what we serve
            </h5>
            <h2 className='services__title'>We offer our besr services</h2>
          </Col>
          <ServicesList />
        </Row>
      </Container>
    </section>

    <section >
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtible subtible={'Explore'}/>
            <h2 className="featured__tour-title">Ours featured tours</h2>
          </Col>
          <FeaturedToursList />
        </Row>
      </Container>
    </section>
    {/* experience seaction start */}
      <section>
        <Container>
            <Row>
              <Col lg='6'>
                <div className="experience__content">
                  <Subtible subtible={'Experience'}/>

                  <h2>Witch our all experience<br/> We will serve you</h2>
                  <p>Lorgin ipsum dolar sit amet , consectetur adipisicing <br /> Quas aliquam , hic tempro inventore suscipit unde </p>
                </div>
                <div className="counter__wrapper d-flex align-items-center gap-5">
                  <div className="counter__box">
                    <span>12k+</span>
                    <h6>Successful trip</h6>
                  </div>
                  <div className="counter__box">
                    <span>2k+</span>
                    <h6> Reguler client</h6>
                  </div>

                  <div className="counter__box">
                    <span>15</span>
                    <h6>Year experience</h6>
                  </div>
                </div>
              </Col>
              <Col lg='6'>
                <div className="experience__img">
                  <img src={experience} alt="" />
                </div>
              </Col>
            </Row>
        </Container>
      </section>


    {/* experience section begin */}

    {/* ====================gallery satrt =================*/}

    <section>
        <Container>
            <Row>
              <Col lg='12'>
                <Subtible subtible={'Gallery'} />
                <h2 className='gallery__title'>Visit our custemrs tour gallery</h2>
              </Col>
              <Col lg='12'>
                <MasonryImagesGallery />
              </Col>
            </Row>
        </Container>
    </section>
    {/* ====================gallery satrt =================*/}
    {/* =====================Test section imonial start*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtible subtible={'Fan our love'}/>
            <h2 className='testimonial__title'>What our fan say about us</h2>
          </Col>
          <Col lg='12'>
            <TestImonial  />
          </Col>
        </Row>
      </Container>
    </section>
    {/* =====================Test section imonial end*/}
    <NewLetter />
    </>
  )
}

export default Home