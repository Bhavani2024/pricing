import React from 'react'

function Form() {
    return (

        <div className="container w-75 mt-5">
            <h2 className="mb-5">Create Student</h2>
            <div className="row">
                <div className="col-6">
                    <label class="form-label">
                        First name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="inputpasswords"
                        aria-describedby="passwordHelpBlock"
                    />
                </div>
                <div className="col-6">
                    <label class="form-label">
                        Last name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="inputpasswords"
                        aria-describedby="passwordHelpBlock"
                    />
                </div>
                <div className="col-6">
                    <label class="form-label">
                        Email
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="inputpasswords"
                        aria-describedby="passwordHelpBlock"
                    />
                </div>
                <div className="col-3">
                    <label class="form-label">
                        Password
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="inputpasswords"
                        aria-describedby="passwordHelpBlock"
                    />
                </div>
            </div>
            <div className="text-end mt-5">
                <button className='btn btn-sm btn-outline-danger mx-2'>Cancel</button>
                <button className='btn btn-sm btn-outline-success mx-2'>submit</button>

            </div>
        </div>






    )
}

export default Form