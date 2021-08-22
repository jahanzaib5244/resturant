import React from 'react'
import ItemCard from '../../components/Card';
import p1 from'../../assets/1.jpg';
import p2 from'../../assets/2.jpg';
import p3 from'../../assets/3.jpg';
import p4 from'../../assets/4.jpg';
import p5 from'../../assets/5.jpg';

import p6 from'../../assets/6.jpg';
import p7 from'../../assets/7.jpg';
import p8 from'../../assets/8.jpg';
import p9 from'../../assets/9.jpg';
import p10 from'../../assets/10.jpg';


export default function ResturantDetail() {
    return (
   <div>
        <div className='container'>
                <div classname='row'>
                    <div className=' text-center my-4' >
                        <h1 >Items</h1>
                        <hr className='w-25 mx-auto' />
                    </div>

                </div>
            </div>



        <div className='container'>
            <div className='row'>

                <div className='col-md-4 col-10 mx-auto my-3'>
                    <ItemCard image={p1} price={300} order='ordernow' />
                </div>
                <div className='col-md-4 col-10 mx-auto my-3'>
                    <ItemCard image={p10} price={300}  order='ordernow'/>
                </div>
                <div className='col-md-4 col-10 mx-auto my-3'>
                    <ItemCard image={p2} price={350}  order='ordernow'/>
                </div>
                <div className='col-md-4 col-10 mx-auto my-3'>
                    <ItemCard image={p3} price={500}order='ordernow' />
                </div>
                <div className='col-md-4 col-10 mx-auto my-3'>
                    <ItemCard image={p4} price={300}  order='ordernow'/>
                </div>
                <div className='col-md-4 col-10 mx-auto my-3'>
                    <ItemCard image={p5} price={360} order='ordernow'/>
                </div>

                <div className='col-md-4 col-10 mx-auto my-3'>
                    <ItemCard image={p6} price={309}  order='ordernow'/>
                </div>
                <div className='col-md-4 col-10 mx-auto my-3'>
                    <ItemCard image={p7} price={654} order='ordernow' />
                </div>
                <div className='col-md-4 col-10 mx-auto my-3'>
                    <ItemCard image={p8} price={847} order='ordernow' />
                </div>
                <div className='col-md-4 col-10 mx-auto my-3'>
                    <ItemCard image={p9}  price={7900} order='ordernow' />
                </div>


            </div>

        </div>
        </div>
    )
}
