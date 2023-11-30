import React from "react";
import {useState} from "react";
import '../CSS/User.css'

export default function CreateUsers() {
    return(
        <div className="banner">
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <form class="row g-3">
            
            <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Name</label>
                <input type="text" class="form-control" id="validationDefault02" value="Otto" />
            </div>
            <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Email</label>
                <input type="text" class="form-control" id="validationDefault02" value="Otto" />
            </div>
            <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Age</label>
                <input type="text" class="form-control" id="validationDefault02" value="Otto" />
            </div>
            <div class="col-12 d-flex justify-content-end">
                <button class="btn btn-primary" type="submit">Update</button>
            </div>
            </form>
            </div>
        
        </div>
    );
}