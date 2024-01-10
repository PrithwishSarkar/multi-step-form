import React from "react";

export default function Posts(props) {
    return (
        <div className="container">
            <h4>"emailId" : "{props.e}",</h4>
            <h4>"password" : "{props.p}",</h4>
            <h4>"firstName" : "{props.f}",</h4>
            <h4>"lastName" : "{props.l}",</h4>
            <h4>"address" : "{props.a}",</h4>
            <h4>"countryCode" : "{props.c}",</h4>
            <h4>"phoneNumber" : "{props.n}"</h4>            


        </div>
    );
}