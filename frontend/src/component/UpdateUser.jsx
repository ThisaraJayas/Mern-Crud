import React, { useEffect } from "react";
import {useState} from "react";
import '../CSS/User.css'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateUser() {
    const {id} = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8081/getUser/'+id)
            .then(result => {
                setName(result.data.name || '');
                setEmail(result.data.email || '');
                setAge(result.data.age || '');
            })
            .catch(err => console.log(err));
    }, [id]);
    
console.log(name);
console.log(email);
console.log(age);
    return(
        <div className="banner">
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <form class="row g-3">
            
            <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Name</label>
                <input type="text" class="form-control" id="validationDefault02" 
                 value={name} />
            </div>
            <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Email</label>
                <input type="text" class="form-control" id="validationDefault02"  
                value={email}/>
            </div>
            <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Age</label>
                <input type="text" class="form-control" id="validationDefault02" 
                value={age} />
            </div>
            <div class="col-12 d-flex justify-content-end">
                <button class="btn btn-primary" type="submit">ADD</button>
            </div>
            </form>
            </div>
        
        </div>
    );
}




 // const {id} = useParams()
    // const [name, setName] = useState()
    // const [email, setEmail] = useState()
    // const [age, setAge] = useState()
    // const navigate = useNavigate()

    // useEffect(()=>{
    //     axios.get('http://localhost:8081/getUser/'+id)
    //     .then(result=>{console.log(result)
    //         setName(result.data.name)
    //         setEmail(result.data.email)
    //         setAge(result.data.age)
    //     }).catch(err=>console.log(err))
    // },[])
