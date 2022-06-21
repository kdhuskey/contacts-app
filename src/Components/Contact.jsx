import { useState } from "react"
import React from "react"
import { Button } from "react-bootstrap"
import '../Address.css'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [contact, setContact] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        setContact([...contact, {name, email, phone, address, city, state, zip}])
        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
        setCity('')
        setState('')
        setZip('')

        
    }
    

    return (
        <div className="AddressForm">
            <h1>Contacts</h1>
            <form onSubmit={handleSubmit} className="AddBody">
                <div className="mb-1">
                    <label className = "form-label" htmlFor="text">Name</label>
                    <input required id="text" className="form-control" type="text" placeholder="Name here"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-1">
                    <label className="form-label" htmlFor="text">Email</label>
                    <input required className="form-control" id="text" type="Email" placeholder="Email....."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-1">
                    <label className="form-label" htmlFor="text">Phone</label>
                    <input required className="form-control" id="text" type="text" placeholder="Digits"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-1">
                    <label className="form-label" htmlFor="text">Address</label>
                    <input required className="form-control" id="text" type="text" placeholder="Street digits"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="mb-1">
                    <label className="form-label" htmlFor="text">City</label>
                    <input required className="form-control" id="text" type="text" placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="mb-1">
                    <label className="form-label" htmlFor="text">State</label>
                    <input required className="form-control" id="text" type="text" placeholder="State you call home"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="text">Zip Code</label>
                    <input required className="form-control" id="text" type="text" placeholder="How the post office finds you"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary" type="submit" >Add to Address Book</button>
                <br></br>
                </form>
                
                   {contact.sort((a, b) => a.name.localeCompare(b.name)).map((personInfo, i) => {return(
                       <div key={i} className="card Address-card">
                    <div className="card-body"><h5 className="card-title"></h5>{personInfo.name}</div>
                    <div className="card-body"><h5 className="card-title"></h5>{personInfo.city}</div>
                    <div className="card-body"><h5 className="card-title"></h5>{personInfo.state}</div>
                    <p>
                    <button onClick={console.log(i)} className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target= "#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Full info
                        
                    </button>
                    <div class="collapse" id= "collapseExample">
                    <div class="card card-body">
                    <div className="card-body"><h5 className="card-title"></h5>{personInfo.name}</div>
                    <div className="card-body"><h5 className="card-title"></h5>{personInfo.email}</div>
                    <div className="card-body"><h5 className="card-title"></h5>{personInfo.phone}</div>
                    <div className="card-body"><h5 className="card-title"></h5>{personInfo.address}</div>
                    <div className="card-body"><h5 className="card-title"></h5>{personInfo.city}</div>
                    <div className="card-body"><h5 className="card-title"></h5>{personInfo.state}</div>
                    <div className="card-body"><h5 className="card-title"></h5>{personInfo.zip}</div>
                    </div>
                    </div>
                    </p>
                    
                    
                    </div>
                    )
                })}
        </div>
    )
}

export default Contact