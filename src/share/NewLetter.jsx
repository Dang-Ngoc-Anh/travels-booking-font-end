import React from 'react'
import './new-letter.css'
import maleTourist from '../assets/images/male-tourist.png'
import { Container , Row , Col } from 'reactstrap'
const NewLetter = () => {
  return (
    <section className='newletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newletter__content">
                        <h2>Subscribe now to the get usefull traveling information.</h2>

                        <div className="newletter__input">
                            <input type="email" placeholder='Enter your email' />
                            <button className="btn newletters__btn">Subscribe</button>
                        </div>
                        <p>Lorgin ipsum dolar sit amet , consectetur adipisicing
                    Quas aliquam , hic tempro inventore suscipit unde
                </p>
                    </div>
                </Col>

                <Col lg='6'>
                    <div className="newletter__img">
                        <img src={maleTourist} alt="" srcset="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewLetter