import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../assets/a1.jpg';
import pic2 from '../assets/a2.jpg';
import pic3 from '../assets/a3.jpg';

export default function Slider() {
    return (
        <div>
            <Carousel variant="light" >
                <Carousel.Item>
                    <img
                        className=" w-100 img-fluid"
                        src={pic1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-light'>First slide label</h5>
                        <p className='text-light'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={pic3}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-light'>Second slide label</h5>
                        <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={pic2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-light'>Third slide label</h5>
                        <p className='text-light'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
