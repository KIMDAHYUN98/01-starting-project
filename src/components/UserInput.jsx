import { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000, // 초기 투자금
    annualInvestment: 1200, // 추가 투자금
    expectedReturn: 6, // 기대 수익률
    duration: 10 // 투자 기간
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput, // 새로운 객체에 모든 예전 값들을 복사
        [inputIdentifier]: newValue // 새로운 값 할당
      }
    });
  }

  return <section id="user-input">
    <div className="input-group">
      <p>
        <label>Initial Investment</label>
        <input 
          type="number" 
          required 
          value={userInput.initialInvestment}
          onChange={(event) => 
            handleChange('initialInvestment', event.target.value)} 
        />
      </p>
      <p>
        <label>Annual Investment</label>
        <input 
          type="number" 
          required 
          value={userInput.annualInvestment}
          onChange={(event) => 
            handleChange('annualInvestment', event.target.value)} 
        />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label>Expected Return</label>
        <input 
          type="number" 
          required 
          value={userInput.expectedReturn}
          onChange={(event) => 
            handleChange('expectedReturn', event.target.value)} 
        />
      </p>
      <p>
        <label>Duration</label>
        <input 
          type="number" 
          required 
          value={userInput.duration}
          onChange={(event) => 
            handleChange('duration', event.target.value)} 
        />
      </p>
    </div>
  </section>
}