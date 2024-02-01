import React, { useState } from "react";
import {
    Link,
    useNavigate
  } from "react-router-dom";

export default function Form2(props) {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [addr, setaddr] = useState("");
    const navigate = useNavigate();
    // const [cnd, setcnd] = useState(false);
    function handlefname(e){
        setfname(e.target.value);
    }
    function handlelname(e){
        setlname(e.target.value);
    }
    function handleaddr(e){
        setaddr(e.target.value);
    }
    function validate(){
        let isValid = true;

            if (fname === '' || !/^[a-zA-Z]+$/.test(fname) || fname.length < 2 || fname.length > 50) {
                isValid = false;
                alert("Invalid First Name");
            }

            if (lname !== "" && !/^[a-zA-Z]+$/.test(lname)) {
                isValid = false;
                alert("Invalid Last Name");
            }

            if (addr === '' || addr.length < 10) {
                isValid = false;
                alert("Invalid Last Name");
            }

            if(isValid){
                props.func(fname, lname, addr);
                // setcnd(true);
                navigate("/form3");
            }
    }
    return (
        <div>
            
           <div className='togglebar'>
        <Link to={"/form1"} className="links"><h2 className="formbtn">Form 1</h2></Link>
        <Link to={"/form2"} className="links"><h2 className="formbtn">Form 2</h2></Link>
        {props.two? <Link to={"/form3"} className="links"><h2 className="formbtn">Form 3</h2></Link> : <h2 className="formbtn">Form 3</h2>}
        
      </div>
        <div className="container">
            <div className="entry">
                <form action="" className="formstyle">
                    <h2>First Name:</h2>
                    <input type="text" name="firstname" id="" placeholder="Enter your First Name" value={fname} onChange={handlefname}/>

                    <h2>Last Name:</h2>
                    <input type="text" name="lastname" id="" placeholder="Enter your Last Name(optional)" value={lname} onChange={handlelname}/>

                    <h2>Address:</h2>
                    <input type="text" name="address" id="" placeholder="Enter your Address" value={addr} onChange={handleaddr}/>

                </form>
            </div>
            <div className="btn">
            <Link to={"/form1"} className="links"><button className="enable">Back</button></Link>
                <button className="enable">Save</button>
                <button className="enable" onClick={validate}>Save & Next</button>
                {/* {cnd? <Link to={"/form3"} style={{ textDecoration: 'none' }}><button>Save & Next</button></Link> : <button onClick={validate}>Save & Next</button>} */}
            </div>
        </div>
        </div>
    );
}