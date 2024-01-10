import React, { useState } from "react";
import {
    Link,
    useNavigate
  } from "react-router-dom";

export default function Form1(props){
    const disable = {
        backgroundColor: 'gray',
        cursor: 'not-allowed'

    };
    const [mail, setmail] = useState("");
    const [passw, setpassw] = useState("");
    const navigate = useNavigate();
    // const [cnd, setcnd] = useState(false);
    function handlemail(e){
        setmail(e.target.value);
    }
    function handlepass(e){
        setpassw(e.target.value);
    }
    function validate(){
        let isValid = true;
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            const passwordRegex = /^(?=(.*[A-Z]){2})(?=(.*[a-z]){2})(?=(.*\d){2})(?=(.*[\W_]){2}).{8,}$/;

            if (mail === '' || !emailRegex.test(mail)) {
                isValid = false;
                alert("Invalid email");
            }
            else{
                if (passw === '' || !passwordRegex.test(passw)) {
                    isValid = false;
                    alert("Invalid password");
                }
            }
            if(isValid){
                props.func(mail, passw);
                // setcnd(true)
                
                navigate("/form2");
            }
            
        
    }
    return(
        <div>
           <div className='togglebar'>
        <Link to={"/form1"} style={{ textDecoration: 'none' }}><h2 className="formbtn">Form 1</h2></Link>

        {props.one? <Link to={"/form2"} style={{ textDecoration: 'none' }}><h2 className="formbtn">Form 2</h2></Link> : <h2 className="formbtn">Form 2</h2>}
        
        {props.two? <Link to={"/form3"} style={{ textDecoration: 'none' }}><h2 className="formbtn">Form 3</h2></Link> : <h2 className="formbtn">Form 3</h2>}
        
      </div>
        <div className="container">
            <div className="entry">
            <form action="" className="formstyle">
                <h2>Email:</h2>
                <input type="email" name="email" id="" placeholder="Enter your email id" onChange={handlemail} value={mail}/>
                {/* <br /> */}
                <h2>Password:</h2>
                <input type="password" name="pass" id="" placeholder="Enter your password" onChange={handlepass} value={passw}/>
                
            </form>
            </div>
            <div className="btn">
                <button style={disable}>Back</button>
                <button>Save</button>
                <button onClick={validate}>Save & Next</button>
                {/* {cnd? <Link to={"/form2"} style={{ textDecoration: 'none' }}><button>Save & Next</button></Link> : <button onClick={validate}>Save & Next</button>} */}
                
            </div>
        </div>
        </div>
    );
}