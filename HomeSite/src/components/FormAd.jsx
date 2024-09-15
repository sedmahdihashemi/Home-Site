import React, { useState } from 'react'
import Map from './Map'
import { toast } from 'react-toastify'

export default function FormAd() {

    const[tileInp , setTitleInp] = useState('')
    const[phoneInp , setPhoneInp] = useState('')
    const[addressInp , setAddressInp] = useState('')
    const[descInp , setDescInp] = useState('')
    const adHandlerForm = (e)=>{
        e.preventDefault()
        if(isValide()){

        }

    }

    const isValide = ()=>{
        let valide = true
         let errorMassage = 'Please enter the value in '
        if(tileInp == null || tileInp == ''){
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
                <input onChange={(e) => setPhoneInp(e.target.value)} type="email" class="form-control" id="inputPhone4" />
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
            <Map />
            <h4 className='col-6 ms-3'>select your location</h4>
            </div>



            <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>

            
        </form>
    )
}
