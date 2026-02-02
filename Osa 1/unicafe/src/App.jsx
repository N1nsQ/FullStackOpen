import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value, optional }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
    <td>{optional}</td>
  </tr>
);

const App = () => {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [negativeFeedback, setNegativeFeedback] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [sum, setSum] = useState(0);
  const [feedbackAverage, setFeedbackAverage] = useState(0);
  const [positivePercent, setPositivePercent] = useState(0);

  const title = "Anna palautetta";
  const subTitle = "Palautteet";

  const good = "Hyvä";
  const neutral = "Neutraali";
  const negative = "Negatiivinen";
  const total = "Ääniä yhteensä:";
  const average = "Keskiarvo:";
  const positiveVotes = "Positiivinen palaute:";
  const noFeedback = "Palautetta ei ole annettu.";

  const handleGoodFeedback = () => {
    const updatedGoods = goodFeedback + 1;
    const updatedTotalFeedback =
      updatedGoods + neutralFeedback + negativeFeedback;
    const updatedSum = sum + 1;

    setGoodFeedback(updatedGoods);
    setTotalFeedback(updatedTotalFeedback);
    setSum(updatedSum);
    setFeedbackAverage(updatedSum / updatedTotalFeedback);
    setPositivePercent((updatedGoods / updatedTotalFeedback) * 100);
  };

  const handleNeutralFeedback = () => {
    const updateNeutrals = neutralFeedback + 1;
    const updatedTotalFeedback =
      goodFeedback + updateNeutrals + negativeFeedback;

    setNeutralFeedback(updateNeutrals);
    setTotalFeedback(updatedTotalFeedback);
    setFeedbackAverage(sum / updatedTotalFeedback);
    setPositivePercent((goodFeedback / updatedTotalFeedback) * 100);
  };

  const handleNegativeFeedback = () => {
    const updateNegative = negativeFeedback + 1;
    const updatedTotalFeedback =
      goodFeedback + neutralFeedback + updateNegative;
    const updatedSum = sum - 1;

    setNegativeFeedback(updateNegative);
    setTotalFeedback(updatedTotalFeedback);
    setSum(updatedSum);
    setFeedbackAverage(updatedSum / updatedTotalFeedback);
    setPositivePercent((goodFeedback / updatedTotalFeedback) * 100);
  };

  return (
    <>
      <Header text={title} />
      <Button onClick={handleGoodFeedback} text={good} />
      <Button onClick={handleNeutralFeedback} text={neutral} />
      <Button onClick={handleNegativeFeedback} text={negative} />
      <Header text={subTitle} />

      {totalFeedback === 0 ? (
        <p>{noFeedback}</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text={good} value={goodFeedback} />
            <StatisticLine text={neutral} value={neutralFeedback} />
            <StatisticLine text={negative} value={negativeFeedback} />
            <StatisticLine text={total} value={totalFeedback} />
            <StatisticLine text={average} value={feedbackAverage} />
            <StatisticLine
              text={positiveVotes}
              value={positivePercent}
              optional="%"
            />
          </tbody>
        </table>
      )}
    </>
  );
};

export default App;
