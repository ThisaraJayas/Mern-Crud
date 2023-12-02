import React from "react";
import {useState} from "react";
import '../CSS/User.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function CreateUsers() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()
const Submit = (e)=>{
    e.preventDefault()
    const newUser ={
        name,
        age,
        email
    }
    axios.post("http://localhost:8081/create", newUser).then(()=>{
        navigate('/')
    })
    .catch((err)=>{
        alert(err)
    })
}
    return(
        <div className="banner">
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <form class="row g-3" onSubmit={Submit}>
            
            <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Name</label>
                <input type="text" class="form-control" id="validationDefault02" 
                onChange={(e)=>setName(e.target.value)} />
            </div>
            <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Email</label>
                <input type="text" class="form-control" id="validationDefault02"  
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Age</label>
                <input type="text" class="form-control" id="validationDefault02" 
                onChange={(e)=>setAge(e.target.value)} />
            </div>
            <div class="col-12 d-flex justify-content-end">
                <button class="btn btn-primary" type="submit">ADD</button>
            </div>
            </form>
            </div>
        
        </div>
    );
}