import React, { useState } from 'react';
import "./HRAForm.css";

function HRAForm() {
  const [basicSalary, setBasicSalary] = useState('');
  const [da, setDA] = useState('');
  const [commission, setCommission] = useState('');
  const [hraReceived, setHRReceived] = useState('');
  const [rentPaid, setRentPaid] = useState('');
  const [isMetroCity, setIsMetroCity] = useState(false);
  const [exemptedHRA, setExemptedHRA] = useState(0);
  const [taxableHRA, setTaxableHRA] = useState(0);

  const calculateHRA = () => {
    
    const hra = (basicSalary + da + (commission / 100)) * 0.5; 

   
    const metroCityMultiplier = isMetroCity ? 0.5 : 0.4; 

    const exemptedAmount = Math.min(rentPaid, hraReceived * metroCityMultiplier, hra);
    const taxableAmount = hra - exemptedAmount;

    // Update the state with the calculated values
    setExemptedHRA(exemptedAmount);
    setTaxableHRA(taxableAmount);
  };

  const resetFunc=()=>{
    setBasicSalary("");
    setDA("");
    setCommission("");
    setHRReceived("");
    setRentPaid("");
    setIsMetroCity("");
    setExemptedHRA(0);
    setTaxableHRA(0);
  }

  return (
    <div className="form-container">
      <div className='heading'>HOUSE RENT ALLOWANCE</div>
      <div className="form-group">
      <label>Basic Salary:</label>
      <input type="number" value={basicSalary} onChange={(e) => setBasicSalary(parseFloat(e.target.value))} />
      </div>

      <div className="form-group">
      <label>DA forming part of Salary:</label>
      <input type="number" value={da} onChange={(e) => setDA(parseFloat(e.target.value))} />
      </div>

      <div className="form-group">
      <label>Commission (% of Turnover):</label>
      <input type="number" value={commission} onChange={(e) => setCommission(parseFloat(e.target.value))} />
      </div>

      <div className="form-group">
      <label>HRA Received:</label>
      <input type="number" value={hraReceived} onChange={(e) => setHRReceived(parseFloat(e.target.value))} />
      </div>
      
      <div className="form-group">
      <label>Rent Paid:</label>
      <input type="number" value={rentPaid} onChange={(e) => setRentPaid(parseFloat(e.target.value))} />
      </div>

      <div className="form-group">
      <label>Residing in Metro City:</label>
      <input type="checkbox" checked={isMetroCity} onChange={(e) => setIsMetroCity(e.target.checked)} /> <span>(Tick if any)</span>
      </div>

      <div className="result-group">
        <label>Exempted House Rent Allowance:</label>
        <span>{exemptedHRA}</span>
      </div>

      <div className="result-group">
        <label>Taxable House Rent Allowance:</label>
        <span>{taxableHRA}</span>
      </div>

      <div className='btn'>
      <button onClick={calculateHRA} className='calcbtn'>Calculate</button>

      <button onClick={resetFunc} className='resetbtn'>Reset</button>
      </div>
    </div>
  );
}

export default HRAForm;
