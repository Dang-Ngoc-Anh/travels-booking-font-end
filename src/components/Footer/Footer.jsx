import React from 'react'
import './footer.css'
import logo from '../../assets/images/logo.png'
import { Container , Row , Col, ListGroup , ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
const Footer = () => {

  const year = new Date().getFullYear().toString();
  const quick_link1 = [
    {
        path: '/home',
        display : 'Home'
    },
    {
        path: '/#',
        display : 'About'
    },
    {
        path: '/tours',
        display : 'Tours'
    }
]

const quick_link2 = [
  {
      path: '/gallery',
      display : 'Gallery'
  },
  {
      path: '/login',
      display : 'Login'
  },
  {
      path: '/register',
      display : 'Register'
  }
]



  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt=""  />
              <p>Lorgin ipsum dolar sit amet , 
                consectetur adipisicing Quas aliquam ,
                hic tempro inventore suscipit unde</p>
            </div>
            <div className='social__links d-flex align-items-center gap-4'>
              <span>
                <Link to='#' ><i class="ri-youtube-fill"></i></Link>
              </span>
              <span>
                <Link to='#' ><i class="ri-facebook-circle-fill"></i></Link>
              </span>
              <span>
                <Link to='#' ><i class="ri-instagram-fill"></i></Link>
              </span>
              <span>
                <Link to='#' ><i class="ri-github-fill"></i></Link>
              </span>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Discover
              <ListGroup className='footer__quick-links'>
                    {
                      quick_link1.map((item, index)=>{
                        return <ListGroupItem key={index}>
                          <Link to={item.path}>{item.display}</Link>
                        </ListGroupItem>
                      })
                    }
              </ListGroup>
            </h5>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Quicklink
              <ListGroup className='footer__quick-links'>
                    {
                      quick_link2.map((item, index)=>{
                        return <ListGroupItem key={index}>
                          <Link to={item.path}>{item.display}</Link>
                        </ListGroupItem>
                      })
                    }
              </ListGroup>
            </h5>
          </Col>

          <Col lg='3'>
            <h5 className='footer__link-title'>Contact
              <ListGroup className='footer__quick-links'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-map-pin-fill"></i></span>
                    Address:
                  </h6>
                  <p className='mb-0'>Sylhet , Bangladesh</p>
                 </ListGroupItem>

                 <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-mail-fill"></i></span>
                    Email:
                  </h6>
                  <p className='mb-0'>dang.ngoc.anh210103@gmail.com</p>

                 </ListGroupItem>

                 <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-phone-line"></i></span>
                    Phone:
                  </h6>
                  <p className='mb-0'>0988195467</p>

                 </ListGroupItem>
              </ListGroup>
            </h5>
          </Col>

          <Col lg='12' className='text-center pt-5'>
            <div className="copyright">Copyright {year} , 
            design and develop Đặng Ngọc Anh. All right reserved.</div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer