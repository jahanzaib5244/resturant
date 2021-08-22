import React from 'react';

import ItemCard from '../../components/Card';

import Slider from '../../components/Slider';
import resturant_p from '../../assets/r2.jpg';

export default function Home() {
 
    
    return (
        <div>

        

            <Slider />
            <div className='container'>
                <div classname='row'>
                    <div className=' text-center my-4' >
                        <h1 >Resturants</h1>
                        <hr className='w-25 mx-auto' />
                    </div>

                </div>
            </div>
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 col-10 mx-auto my-3'>
                            <ItemCard image={resturant_p} price='resturant1'  order='check more' />
                        </div>
                        <div className='col-md-4 col-10 mx-auto my-3 '>
                            <ItemCard image={resturant_p} price='resturant1'   order='check more'/>
                        </div>
                        <div className='col-md-4 col-10 mx-auto my-3 '>
                            <ItemCard image={resturant_p} price='resturant1'   order='check more'/>
                        </div>
                        <div className='col-md-4 col-10 mx-auto my-3 '>
                            <ItemCard image={resturant_p}  price='resturant1' order='check more'/>
                        </div>

                        <div className='col-md-4 col-10 mx-auto my-3 '>
                            <ItemCard image={resturant_p} price='resturant1'   order='check more' />
                        </div>
                        <div className='col-md-4 col-10 mx-auto my-3 '>
                            <ItemCard image={resturant_p} price='resturant1'  order='check more'/>
                        </div>
                        <div className='col-md-4 col-10 mx-auto my-3 '>
                            <ItemCard image={resturant_p} price='resturant1'  order='check more'/>
                        </div>
                        <div className='col-md-4 col-10 mx-auto my-3 '>
                            <ItemCard image={resturant_p} price='resturant1'  order='check more'/>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}
