import React, { useState } from 'react'
import '../styles/login.css'
import { Container , Row , Col , Form , FormGroup , Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
const Registser = () => {

  const [credentials, setCredentials] = useState({
        email: undefined,
        password:undefined
});

const handleClick = (e)=>{
  e.preventDefault();
}

const handleChange = (e)=>{
    setCredentials(prev => ({...prev, [e.target.id]:e.target.value})) // return value thông qua sự kiên e.targrt.id
}
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
              <div className="login__container d-flex justify-content-between">
                <div className="login__img">
                  <img src={loginImg} alt="" srcset="" />
                </div>
                <div className="login__form">
                  <div className="user">
                    <img src={userIcon} alt="" />
                    <h2>Register</h2>
                  </div>
                  <Form className='form' onSubmit={handleClick}>
                  <FormGroup>
                      <input type="text" placeholder='User name' required 
                        id='username'
                        onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type="email" placeholder='Email' required 
                        id='email'
                        onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type="password" placeholder='Password' required 
                        id='password'
                        onChange={handleChange} />
                    </FormGroup>
                    <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                    <p>Don't have an account? <Link to='/login'>Login</Link></p>
                  </Form>
              </div>
              </div>
             </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Registser