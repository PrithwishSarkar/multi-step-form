import React, { useState } from "react";
import {
    Link,
    useNavigate
  } from "react-router-dom";

export default function Form3(props){
    const disable = {
        backgroundColor: 'gray',
        cursor: 'not-allowed'

    };
    const cc={
        width: "325px",
        marginLeft: "5px"
    }
    const navigate = useNavigate();
    const [ccode, setccode] = useState("+91");
    const [num, setnum] = useState("");
    const [tnc, settnc] = useState(false);
    // const [cnd, setcnd] = useState(false);
    function handleccode(e){
        setccode(e.target.value);
    }
    function handlenum(e){
        setnum(e.target.value);
    }
    function handletnc(){
        settnc(!tnc);
    }
    function validate(){
        let isValid = true;

            if (num === '' || !/^\d{10}$/.test(num)) {
                isValid = false;
                alert("Invalid Phone Number");
            }

            if (!tnc) {
                isValid = false;
                alert("Please accept terms and conditions");
            }

            if(isValid){
                props.func(ccode, num);
                // setcnd(true);
                alert("Sbmitted");
                navigate("/posts");
            }

    }
    return(
        <div>
           <div className='togglebar'>
        <Link to={"/form1"} style={{ textDecoration: 'none' }}><h2 className="formbtn">Form 1</h2></Link>
        <Link to={"/form2"} style={{ textDecoration: 'none' }}><h2 className="formbtn">Form 2</h2></Link>
        <Link to={"/form3"} style={{ textDecoration: 'none' }}><h2 className="formbtn">Form 3</h2></Link>
        
      </div>
        <div className="container">
            <div className="entry">
                <form action="" className="formstyle">
                    <h2>Country code:</h2>
                    <select name="countrycode" id="" style={cc} value={ccode} onChange={handleccode}>
                        <option value="+91">India (+91)</option>
                        <option value="+1">America (+1)</option>
                    </select>

                    <h2>Phone Number:</h2>
                    <input type="text" name="phonenumber" id="" value={num} onChange={handlenum}/>
                    {/* <h2></h2> */}
                    {/* <h5><input type="checkbox" name="" id=""/> Accept Terms and Conditions</h5> */}
                </form>
                <h3><input type="checkbox" name="" id="" onClick={handletnc}/> Accept Terms and Conditions</h3>
                </div>
                <div className="btn">
                <Link to={"/form2"} style={{ textDecoration: 'none' }}>
                <button>Back</button></Link>
                <button onClick={validate}>Save</button>
                <button style={disable}>Save & Next</button>
                
            </div>
        </div>
        </div>
    );
}