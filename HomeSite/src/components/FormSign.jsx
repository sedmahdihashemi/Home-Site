import React from 'react'

export default function FormSign() {
    return (
        <div className='col-12 d-flex justify-content-center mt-5'>
            <form className='col-9'>
                <div className="col-12 mb-3 d-flex flex-wrap justify-content-between">
                    <div className='col-5'>
                        <label htmlFor="exampleInputFirst" className="form-label">First Name </label>
                        <input type="text" className="form-control" id="exampleInputFirst" />
                    </div>
                    <div className='col-5'>
                    <label htmlFor="exampleInputLast" className="form-label">Last Name </label>
                    <input type="text" className="form-control" id="exampleInputLast" />
                    </div>
                    <div className='col-5'>
                    <label htmlFor="exampleInputphone" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="exampleInputphone" />
                    </div>
                 

                </div>
                <div className="mb-3 col-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  
                </div>
                <div className="mb-3 col-5">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
