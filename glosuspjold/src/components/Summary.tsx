import type { Card } from "../cards";

type SummaryProps = {
  cards: Card[];
  answers: boolean[];
  onRestart: () => void;
};

function Summary({ cards, answers, onRestart }: SummaryProps) {
  const knownCount = answers.filter((knew) => knew).length;
  const toPractice = cards.filter((_, i) => !answers[i]);

  return (
    <>
      <p>
        Þú kunnir {knownCount} af {cards.length}
      </p>
      {toPractice.length > 0 ? (
        <>
          <p>Þú vissir ekki eftirfarandi:</p>
          <ul>
            {toPractice.map((card) => (
              <li key={card.id}>{card.front}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Fullkomið! 🎉</p>
      )}
      <button onClick={onRestart}>Byrja aftur</button>
    </>
  );
}
export default Summary;
