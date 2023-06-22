import React, { useState } from 'react';
import "./AdvanceTaxCalculator.css";

const AdvanceTaxCalculator = () => {
  const [netTaxableIncome, setNetTaxableIncome] = useState(0);
  const [isSection115BAC, setIsSection115BAC] = useState(false);
  const [incomeTax, setIncomeTax] = useState(0);
  const [surcharge, setSurcharge] = useState(0);
  const [healthCess, setHealthCess] = useState(0);
  const [totalTaxLiability, setTotalTaxLiability] = useState(0);
  const [relief, setRelief] = useState(0);
  const [tdsCredit, setTDSCredit] = useState(0);
  const [assessedTax, setAssessedTax] = useState(0);

  const calculateAdvanceTax = () => {
    
    let calculatedIncomeTax = 0;
    let calculatedSurcharge = 0;
    let calculatedHealthCess = 0;
    let calculatedTotalTaxLiability = 0;
    let calculatedAssessedTax = 0;

    if (isSection115BAC) {
      calculatedIncomeTax = netTaxableIncome * 0.2;
    } 
    else {
      calculatedIncomeTax = netTaxableIncome * 0.3;
    }

    calculatedSurcharge = calculatedIncomeTax * 0.1;

    calculatedHealthCess = calculatedIncomeTax * 0.04;

    calculatedTotalTaxLiability = calculatedIncomeTax + calculatedSurcharge + calculatedHealthCess;

    // Calculate assessed tax by considering relief and TDS/TCS/MAT credit
    calculatedAssessedTax = calculatedTotalTaxLiability - relief - tdsCredit;

    setIncomeTax(calculatedIncomeTax);
    setSurcharge(calculatedSurcharge);
    setHealthCess(calculatedHealthCess);
    setTotalTaxLiability(calculatedTotalTaxLiability);
    setAssessedTax(calculatedAssessedTax);
  };

  return (
    <div className='form-container'>
      <h2 className='heading'>Advance Tax Calculator</h2>
      
      <div className="form-group">
      <label>
        Tax Payer:
      </label>
        <select name="" id="">
          <option value="">Select</option>
          <option value="individual">Individual</option>
          <option value="huf">HUF</option>
          <option value="aop">AOPs/BOI</option>
          <option value="domestic">Domestic Company</option>
          <option value="foreign">Foreign Company</option>
          <option value="firms">Firms</option>
          <option value="llp">LLP</option>
          <option value="co-operative">Co-opperative Society</option>
        </select>
      
      </div>

      <div className="form-group">
      <label>
        Net Taxable Income:
        </label>
        <input
          type="number"
          value={netTaxableIncome}
          onChange={(e) => setNetTaxableIncome(Number(e.target.value))}
        />
      </div>

      <div className="form-group">
      <label>
        Opting for taxation under Section 115BAC:
        </label>
        <input
          type="checkbox"
          checked={isSection115BAC}
          onChange={(e) => setIsSection115BAC(e.target.checked)}
        />
      
      </div>

      <div className="result-group">
        <label>Income Tax:</label>
        <span>{incomeTax}</span>
      </div>
      <div className="result-group">
        <label>Surcharge:</label>
        <span>{surcharge}</span>
      </div>
      <div className="result-group">
        <label>Health and Education Cess: </label>
        <span>{healthCess}</span>
      </div>
      <div className="result-group">
        <label>Total Tax Liability: </label>
        <span>{totalTaxLiability}</span>
      </div>
      <div className="result-group">
        <label>Relief: </label>
        <span>{relief}</span>
      </div>
      <div className="result-group">
        <label>TDS/TCS/MAT (AMT) Credit Utilized: </label>
        <span>{tdsCredit}</span>
      </div>
      <div className="result-group">
        <label>Assessed Tax: </label>
        <span>{assessedTax}</span>
      </div>

      <button className='calcbtn' onClick={calculateAdvanceTax}>Calculate</button>
      
    </div>
  );
};

export default AdvanceTaxCalculator;
