import React, { useState } from "react";
import PropTypes from 'prop-types'
import './Styles.css'
import CVV from './cvv.png'

export default function Form() {
  const [name, setName] = useState(" ");
  const [number, setNumber] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [cvc, setCVC] = useState();
  const [error, setError] = useState(false);
  const [print,setPrint]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || number.length<16 || cvc.length===0 ) {
      setError(true);
    }
    else{
      setPrint(true)
    }
    if(name&&number&&month&&year&&cvc){
      console.log(name, number, month, year, cvc);
    }
  };

  const printData=()=>{
    if(name.length>0 && number.length===16 && month.length<=12 && cvc.length===3){
      setPrint(true)
    }
    else{
      setPrint(false)
    }
  }

  return (
      <div className="div">

      <div className="card-area">
        <div className="cards">
        {print?<p className="number-print">{number}</p>:null}<br></br>
        {print?<span className="name-print">{name.toUpperCase()}</span>:null}
        {print?<span className="month-print">{month}/</span>:null}
        {print?<span className="year-print">{year}</span>:null}
        {print?<span className="cvc-print">{cvc}</span>:null}
        <img src={CVV} alt="cvv" className="cvv-img"></img>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="label" />
        CARDHOLDER NAME
        <br />
        <input type='text' className="card-name" placeholder="e.g. Jane Appleseed"
        onChange={(e) => setName(e.target.value) }/>
        <br />
        {error && name.length===0 ? <label className="error">Cardholder name required</label> : ""}
        <br />
        <label className="label" />
        CARD NUMBER
        <br />
        <input type="text" className="card-num" placeholder="e.g.1234 5678 9123 0000"
          onChange={(e) => setNumber(e.target.value)}/>
        <br />
        {error && (number.length<16 || number.length>16)?<label className="error">Card Number Required</label>:""}
        <br />
        <label className="label" /> EXP. DATE (MM/YY) <label className="cvc-label"/> CVC
        <br />
        <input type="number" className="mm" placeholder="MM" 
          onChange={(e) => setMonth(e.target.value)}/>
        <input type="number" className="yy" placeholder="YY" 
        onChange={(e) => setYear(e.target.value)}/>
        <input type="number" className="cvc" placeholder="e.g 123"
         onChange={(e) => setCVC(e.target.value)}/>
        <br/>
         {error && (cvc.length<3 ||cvc.length>3)?<label className="cvc-error">CVC must be numeric</label>:""}
        <br />
        <button id="confirm" onClick={printData}>CONFIRM</button>
      </form>
    </div>
    
  );
}
Form.propTypes={
  name:PropTypes.string,
  number:PropTypes.number,
  month:PropTypes.number,
  year:PropTypes.number,
  cvc:PropTypes.number,
}
