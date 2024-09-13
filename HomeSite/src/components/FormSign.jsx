import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import {toast , ToastContainer, Zoom} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function FormSign() {
const[id , setId] = useState("")
const[phone , setPhone] = useState("")
const[email , setEmail] = useState("")
const[password , setPassword] = useState("")

const navigate = useNavigate()

const subHandler = (e)=>{
    e.preventDefault()
    // toast.error('sabt kon')
    if(isValidate()){

    
    let registerObj = {id , phone , email , password}
    // console.log(registerObj);
    fetch('http://localhost:8000/users' , {
        method:"POST",
        headers:{
            'Content-Type':'application/json'
            },
            body: JSON.stringify(registerObj)

    }).then(res =>{
        toast.success('Register successfully')
        navigate('/login')
        
    }).catch(err=>{
        toast.error('Faild'+err.massage)

    })
}
    
}

const isValidate = ()=>{
    let isProceed = true
    let errorMassage = 'Please enter the value in '
    if(id === null || id === ''){
        isProceed = false
        errorMassage += ' userName '    
    }
    if(phone === null || phone === ''){
        isProceed = false
        errorMassage += ' phone '    
    }
    if(email === null || email === ''){
        isProceed = false
        errorMassage += ' email '    
    }
    if(password === null || password === ''){
        isProceed = false
        errorMassage += ' password '    
    }
    if(!isProceed){
        toast.warning(errorMassage)
    }else{
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){
            isProceed = false
            toast.warning(' Please enter valid email ')
        }
    }
    return isProceed
}
    return (
        <div className='col-12 d-flex justify-content-center mt-5'>
            <form className='col-9' onSubmit={subHandler}>
                <div className="col-12 mb-3 d-flex flex-wrap justify-content-between">
                    <div className='col-5'>
                        <label htmlFor="exampleInputUser" className="form-label">User Name</label>
                        <input type="text" value={id} onChange={(e)=>setId(e.target.value)} className="form-control" id="exampleInputUser" />
                    </div>
                   
                    <div className='col-5'>
                    <label htmlFor="exampleInputphone" className="form-label">Phone Number</label>
                    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputphone" />
                    </div>
                 

                </div>
                <div className="mb-3 col-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  
                </div>
                <div className="mb-3 col-5">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

                
            </form>
        </div>
    )
}
