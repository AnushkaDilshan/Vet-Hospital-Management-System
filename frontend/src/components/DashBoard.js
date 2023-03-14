import React from 'react'
import {Link} from "react-router-dom"
import "./styles/DashBoard.css"

import Background from './styles/images/DashBoard_Background.jpg';

export default function DashBoard() {
  return (
    
    <body style={{ backgroundImage:`url(${Background})`}}>
        <br/>

    <div className="dashboard-header">
        <h1>ADMIN DASHBOARD</h1>
    </div>
        
    <div className="main-dashboard">
        <Link to="/add-payment">
            <button className="dashboard-btn" id="paymentBtn"><b>PAYMENT MANAGEMENT</b></button>
        </Link>
        <Link to="/appLogin">
            <button className="dashboard-btn" id="appointmentBtn"><b>APPOINTMENT MANAGEMENT</b></button>
        </Link>
        <Link to="/labLogin">
            <button className="dashboard-btn" id="labBtn"><b>LAB MANAGEMENT</b></button>
        </Link>
        <Link to="/phrLogin">
            <button className="dashboard-btn" id="pharmacyBtn"><b>PHARMACY MANAGEMENT</b></button>
        </Link>
        <Link to="/invLogin">
            <button className="dashboard-btn" id="inventoryBtn"><b>INVENTORY MANAGEMENT</b></button>
        </Link>
        <Link to="/petLogin">
            <button className="dashboard-btn" id="petBtn"><b>PET MANAGEMENT</b></button>
        </Link>
        <Link to="/loginPrescription">
            <button className="dashboard-btn" id="prescriptionBtn"><b>PRESCRIPTION MANAGEMENT</b></button>
        </Link>
        <Link to="/loginStaff">
            <button className="dashboard-btn" id="staffBtn"><b>STAFF MANAGEMENT</b></button>
        </Link>
    </div><br/>
    </body>
  )
}