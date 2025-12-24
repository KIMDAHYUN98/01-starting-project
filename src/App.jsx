import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
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
        [inputIdentifier]: +newValue, // 새로운 값 할당, + => 문자열 값일 경우 숫자 값으로 강제 변환
      }
    });
  }

  const inputIsVaild = userInput.duration >= 1;

  return (
    // React 컴포넌트는 return에서 JSX를 하나만 반환해야 한다
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    {!inputIsVaild && (
      <p className="center">0보다 큰 기간을 입력해 주세요.</p>
    )}
    {inputIsVaild && <Results input={userInput} />}
    </>
  )
}

export default App
