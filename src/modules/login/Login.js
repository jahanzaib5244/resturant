import React from 'react';

import { Form, Button } from 'react-bootstrap';

import  {useState} from 'react'
import { useDispatch } from "react-redux";
import { doLogin } from '../../store/action/AuthAction'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const doLoginUser = ()=>{
        dispatch(doLogin(email,password))
    }


    
    return (
        <div >
            <div className='container'>
                <div className='row '>
                <div className=' text-center my-4' >
                        <h1 >Log In</h1>
                        <hr className='w-25 mx-auto' />
                    </div>
                    <div className='col-md-6 col-10 mx-auto my-5 '>
                        
                        
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={(e)=> setEmail(e.target.value) } type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            
                            
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(e)=> setPassword(e.target.value) } type="password" placeholder="Password" />
                            </Form.Group>
                            

                            
                            <Button onClick={doLoginUser} variant="primary" type="submit">
                                Log IN
                            </Button>
                        
                    </div>
                </div>

            </div>

        </div>
    )
}
