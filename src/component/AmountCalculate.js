import React from 'react';

function AmountCalculate() {
  return (
    <div className='amountCal'>
      <div className='amountCal-summery'>
        <p>Summery</p>
      </div>
      <div className='amountCal-container'>
        <div className='amountCal-content amountCal-content-border '>
          <p className='amountCal-content-title'>Total Betting:</p>
          <div className='amountCal-content-totalBetting'>
            <p className='amountCal-content-totalBetting-moneydisplay'>
              USD 20
            </p>
            <p className='amountCal-content-totalBetting-moneydisplay'>
              <span>&#40;</span>NTD 300<span>&#41;</span>
            </p>
          </div>
        </div>
        <div className='amountCal-content'>
          <p className='amountCal-content-title'>Credit Left:</p>
          <div className='amountCal-content-totalBetting'>
            <p>NTD 2000</p>
            <button>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmountCalculate;
