import { useState } from "react"
import React from "react"
import { Button } from "react-bootstrap"
import '../Address.css'

const DummyAdd = [
    { name: 'Bruce Banner', email: 'b.banner223@aol.com', phone: '502-999-7898', address: '1254 something made up', city: 'anywhere usa', state: 'youknow', zip: '65401' },
    { name: 'Carol Danver ', email: 'd.danver@hotmail.com', phone: '502-999-7898', address: '1254 something made up', city: 'anywhere usa', state: 'youknow', zip: '65401' },
    { name: 'Thor Odinsson' , email: 'OdinssonTheStrongest@god.com', phone: '502-999-7898', address: '1254 something made up', city: 'anywhere usa', state: 'youknow', zip: '65401' },
    { name: 'Natas ha Romanov', email: 'Romanov@kgb.com', phone: '502-999-7898', address: '1254 something made up', city: 'anywhere usa', state: 'youknow', zip: '65401' },
    { name: 'Wanda Maximoff', email: 'Maximoff@annon.com', phone: '502-999-7898', address: '1254 something made up', city: 'anywhere usa', state: 'youknow', zip: '65401' },
    { name: 'Tony Stark' , email: 'Stark@starkindustries.com', phone: '502-999-7898', address: '1254 something made up', city: 'anywhere usa', state: 'youknow', zip: '65401' },

]

                    {DummyAdd.map((personInfo, i) => {return(
                        <div key={i} className="card Address-card">
                    <div className="card-body"><h5 className="card-title"></h5>{personInfo.name}</div>
                    <div className="card-body"><h5 className="card-title"></h5>{personInfo.city}</div>
                    <div className="card-body"><h5 className="card-title"></h5>{personInfo.state}</div>
                    <p>
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#personInfo.i" aria-expanded="false" aria-controls="collapseExample">
                        Full info
                    </button>
                    <div class="collapse" id={personInfo.i}>
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
                    
            

export default DummyAdd.map