import React, { useState } from 'react'
import './booking.css'
import { Form , FormGroup , ListGroup, ListGroupItem, Button } from 'reactstrap'
const Booking = ({tour , avgRating}) => {
    const {price, reviews} = tour
    const [credentials, setCredentials] = useState({
        userId :'01',
        userEmail:"example.gmail.com",
        fullname:'',
        phone:'',
        bookAt:'',
        guestSize:1

    });

    
    const handleChange = (e)=>{
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value})) // return value thông qua sự kiên e.targrt.id
    }

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)
    // sender data to server
    const handleClick =(e)=>{
        e.preventDefault();
        console.log(credentials)
    }
  return (
    <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>{price}<span>/per Person</span></h3>
            <span className='tour__rating align-items-center gap-1'>
                      <i class="ri-star-fill" ></i>
                      {avgRating === 0 ? null : avgRating} ({reviews?.length})
                  </span>
        </div>

        <div className="booking__form">
            <h5>Information</h5>
            <Form className='booking__infor-form' onSubmit={handleClick}>
                <FormGroup>
                    <input 
                        type='text' 
                        placeholder='Full name' 
                        id='fullname'
                        onChange={handleChange}
                        required></input>
                </FormGroup>
                <FormGroup>
                    <input 
                        type='number' 
                        placeholder='Phone' 
                        id='phone'
                        onChange={handleChange}
                        required></input>
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input 
                        type='date' 
                        placeholder='Book At' 
                        id='bookAt'
                        onChange={handleChange}
                        required></input>

                        <input 
                        type='number' 
                        placeholder='Guest' 
                        id='guestSize'
                        onChange={handleChange}
                        required></input>
                </FormGroup>
            </Form>
        </div>

        <div className="booking__bottom">
            <ListGroup>
                <ListGroupItem className='boder-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>
                        ${price} <i class="ri-close-line">1 person</i>
                    </h5>
                    <span>{price}</span>
                </ListGroupItem>

                <ListGroupItem className='boder-0 px-0'>
                    <h5>Service charge</h5>
                    <span>${serviceFee}</span>
                </ListGroupItem>

                <ListGroupItem className='total boder-0 px-0'>
                    <h5>Total</h5>
                    <span>${totalAmount}</span>
                </ListGroupItem>
            </ListGroup>

            <Button className='btn primary__btn w-100 mt-4'
                onClick={handleClick}
            >Booking Now</Button>
        </div>
    </div>
  )
}

export default Booking