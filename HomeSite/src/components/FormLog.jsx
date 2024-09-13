import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { usePostContext } from '../store/Store'

export default function FormLog() {
    const [userLogIn , setUserLogIn] = useState('')
    const [passwordLogIn , setPasswordLogIn] = useState('')
    const navigate = useNavigate()
    const {isLogIn,setIsLogIn} = usePostContext();

    const logIn = (e)=>{
        e.preventDefault()
        if(validate()){
            // console.log('true');
            fetch('http://localhost:8000/users/'+userLogIn)
            .then(res => {
                return res.json()
            })
            .then(data =>{
                console.log(data);
                if(Object.keys(data).length === 0){
                    toast.error('User not found')
                }else{
                    if(data.password === passwordLogIn){
                        setIsLogIn(true)
                        sessionStorage.setItem('userName',userLogIn)
                        toast.success('Login Successfull')
                        navigate('/')
                    }else{
                        toast.error('Password  is incorrect')
                    }
                }
                
            })
            .catch(err => {
                toast.error('Log In Failed : '+ err.massage)
            })
            
        }


    } 


    const validate = ()=>{
        let resulte = true
        if(userLogIn === null || userLogIn === ''){
            resulte = false
            toast.warning(' Please enter UserName ')
        }
        if(passwordLogIn === null || passwordLogIn === ''){
            resulte = false
            toast.warning(' Please enter Password ')
        }

        return resulte
    }
    return (
        <div className='col-12 d-flex justify-content-center mt-5'>
            <form className='col-9' onSubmit={logIn}>
                <div className="mb-3 col-5">
                    <label htmlFor="exampleInputUser1" className="form-label">User Name</label>
                    <input type="text" value={userLogIn} onChange={(e)=>setUserLogIn(e.target.value)} className="form-control" id="exampleInputUser1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3 col-5">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={passwordLogIn} onChange={(e)=>setPasswordLogIn(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Log In</button>
                <Link className='btn btn-outline-dark ms-3' to={'/signup'}>Sign Up</Link>
            </form>
        </div>
    )
}
