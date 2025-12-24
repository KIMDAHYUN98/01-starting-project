import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  /**
   * valueEndOfYear : 연말 자산 가치(연말 기준 총 자산)
   * interest : 이자, 수익금
   * annualInvestment : 연간 투자금(추가 투자금)
   */
  const initialInvestment = 
      resultsData[0].valueEndOfYear - 
      resultsData[0].interest -
      resultsData[0].annualInvestment;
  console.log(resultsData);

  return <table id="result">
    <thead>
      <tr>
        <th>연도</th>
        <th>투자 자산 가치</th>
        <th>연간 이자 (해당 연도 수익)</th>
        <th>누적 이자</th>
        <th>총 투자 원금</th>
      </tr>
    </thead>
    <tbody>
      {resultsData.map(yearData => {
        // 해당 년도의 수익금
        const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
        const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

        return <tr key={yearData.year}>
          <td>{yearData.year}</td>
          <td>{formatter.format(yearData.valueEndOfYear)}</td>
          <td>{formatter.format(yearData.interest)}</td>
          <td>{formatter.format(totalInterest)}</td>
          <td>{formatter.format(totalAmountInvested)}</td>
        </tr>
      })}
    </tbody>
  </table>
};