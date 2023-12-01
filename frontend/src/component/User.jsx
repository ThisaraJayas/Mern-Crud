import React, { useEffect } from "react";
import { useState } from "react";
import '../CSS/User.css'
import { Link } from "react-router-dom";
import axios from "axios";

export default function Users(){
    const[Users, setUsers] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081')
        .then(result=>setUsers(result.data))
        .catch(err=>console.log(err))
    },[])
    return(
        <div className="table-1">
            <div className="w-50 bg-white rounded p-3">
            <Link to="/create" className="btn btn-success">ADD</Link>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Operator</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Users.map((user)=>{
                        return <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                { <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link> }
                                <button>Delete</button>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
            </div>
        </div>
    )
}