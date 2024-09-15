import React, { useState } from 'react'
import Map from './Map'
import { toast } from 'react-toastify'
import { usePostContext } from '../store/Store'
import { useNavigate } from 'react-router'

export default function FormAd() {

    const[titleInp , setTitleInp] = useState('')
    const[phoneInp , setPhoneInp] = useState('')
    const[addressInp , setAddressInp] = useState('')
    const[descInp , setDescInp] = useState('')
    const {listMap , setListMap} = usePostContext()
    const navigate = useNavigate()
    const adHandlerForm = (e)=>{
        e.preventDefault()
        if(isValide()){
            let registerObj = {title:titleInp , phone:phoneInp , address:addressInp , desc:descInp,locationMap:listMap}
            fetch('http://localhost:8000/posts',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    
                    },
                    body:JSON.stringify(registerObj)

            }).then(res =>{
                toast.success('Register successfully')
                navigate('/')
                
            }).catch(err=>{
                toast.error('Faild'+err.massage)
        
            })

        }

    }

    const isValide = ()=>{
        let valide = true
         let errorMassage = 'Please enter the value in '
        if(titleInp == null || titleInp == ''){
            valide = false
            errorMassage += ' title ' 
        }
        if(phoneInp == null || phoneInp == ''){
            valide = false
            errorMassage += ' phone ' 
        }
        if(addressInp == null || addressInp == ''){
            valide = false
            errorMassage += ' address ' 
        }
        if(descInp == null || descInp == ''){
            valide = false
            errorMassage += ' title ' 
        }
        if(listMap.length == 0){
            valide = false
            toast.warning('Please select one map')
        }
        if(listMap.length > 1){
            valide = false
            toast.warning('Please select one map')
        }
        if(!valide){
            toast.warning(errorMassage)
        }
       
        

         return valide
    }
    return (
        <form class="row g-3 col-8" onSubmit={adHandlerForm}>
            <div class="col-md-6">
                <label htmlFor="inputTitle4" class="form-label">Title</label>
                <input onChange={(e) => setTitleInp(e.target.value)} type="text" class="form-control" id="inputTitle4" />
            </div>
            <div class="col-md-6">
                <label htmlFor="inputPhone4" class="form-label">Phone</label>
                <input onChange={(e) => setPhoneInp(e.target.value)} type="text" class="form-control" id="inputPhone4" />
            </div>

            <div class="col-12">
                <label htmlFor="inputAddress" class="form-label">Address</label>
                <input type="text" onChange={(e) => setAddressInp(e.target.value)} class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div class="col-12">
                <label htmlFor="inputDesc4" class="form-label">Description</label>
                <input type="text" onChange={(e) => setDescInp(e.target.value)} class="form-control" id="inputDesc4" placeholder="Description" />
            </div>
            <div className='col-8 d-flex'>
            <h4 className='col-6 ms-3'>select your location</h4>
            <Map />
            </div>



            <div class="col-12">
                <button type="submit" class="btn btn-primary">new Ad</button>
            </div>

            
        </form>
    )
}
