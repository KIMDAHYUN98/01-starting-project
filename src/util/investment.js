// 이 함수는 자바스크립트 객체를 인자로 받는다
// 이 객체는 다음과 같은 속성들을 포함해야 한다
// - initialInvestment: 초기 투자 금액
// - annualInvestment: 매년 투자하는 금액
// - expectedReturn: 기대되는 (연간) 수익률
// - duration: 투자 기간(연 단위)

export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // 연도 식별자
      interest: interestEarnedInYear, // 해당 연도 이자 금액
      valueEndOfYear: investmentValue, // 초기투자액 + 연간투자액
      annualInvestment: annualInvestment, // 해당 연도에 추가로 투자한 금액
    });
  }

  return annualData;
}

// 브라우저에서 제공하는 Intl API를 사용해 포맷터 객체를 생성한다
// 이 객체는 숫자를 통화 형식으로 변환해 주는 "format()" 메서드를 제공한다
// 사용 예: formatter.format(1000) → "$1,000" 형태로 출력됨
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
