import React, { useState } from 'react'

function Contact() {
    const [change, setChange] = useState('')
    const [clicked, setClicked] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("name: " + event.target[0].value)
        console.log("date: " + event.target[1].value)
        console.log("feedback: " + event.target[2].value)
        console.log("message: " + event.target[3].value)
        if (change) {
            console.log("gender " + change)
        }
        if (clicked) {
            console.log("confirmation policy: " + clicked)
        }

    }
    
    return (
        <>
            <div className='center_align'>
                <form onSubmit={handleSubmit}>
                        <div class="col-md-6" id="contact">
                            <label for="inputEmail4" class="form-label">Name</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mt-3">
                            <label for="inputPassword4" class="form-label">Date</label>
                            <input type="date" class="form-control" />
                        </div>
                        <div class="col-6 mt-3">
                            <label for="inputAddress2" class="form-label">Feedbak Title</label>
                            <input type="text" class="form-control" id="inputAddress2" />
                        </div>
                        <div class="col-6 mt-3">
                            <label for="inputAddress" class="form-label">Your Message</label>
                            <textarea type="text" class="form-control" />
                        </div>
                    <fieldset class="row mb-3 mt-3">
                        <legend class="col-form-label col-sm-1 pt-0">Gender</legend>
                        <div class="col-sm-5">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value={change} onChange={(e) => setChange("male")} />
                                <label class="form-check-label" for="gridRadios1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value={change} onChange={(e) => setChange("female")} />
                                <label class="form-check-label" for="gridRadios2">
                                    Female
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value={change} onChange={(e) => setChange("other")} />
                                <label class="form-check-label" for="gridRadios2">
                                    Other
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <div class="row mb-3">
                        <div class="col-sm-5 offset-sm-1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1" onClick={() => setClicked("checked")} />
                                <label class="form-check-label" for="gridCheck1">
                                    confirm policy
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sumbit</button>
                </form>
            </div>
        </>
    )
}

export default Contact;