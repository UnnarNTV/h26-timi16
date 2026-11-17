import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import { cards } from "./cards";
import Flashcard from "./components/Flashcard";

type Screen = "start" | "cards" | "done";

function App() {
  const [screen, setScreen] = useState<Screen>("start");
  const [index, setIndex] = useState(0);
  const card = cards[index];
  const [flipped, setFlipped] = useState(false);
  const isLast = index === cards.length - 1;
  const [answers, setAnswers] = useState<boolean[]>([]);
  const isAnswered = answers.length > index;
  const currentAnswer = isAnswered ? answers[index] : null;

  function handleAnswer(knew: boolean) {
    if (isAnswered) return;
    setAnswers([...answers, knew]);
  }

  function handleNext() {
    if (isLast) {
      setScreen("done");
      return;
    }
    setIndex(index + 1);
    setFlipped(false);
  }

  return (
    <main>
      <h1>Glósuspjöld</h1>
      {screen === "start" && (
        <StartScreen total={cards.length} onStart={() => setScreen("cards")} />
      )}
      {screen === "cards" && (
        <>
          <section>
            Spjald {index + 1} af {cards.length}
          </section>
          <Flashcard
            card={card}
            flipped={flipped}
            onFlip={() => setFlipped(!flipped)}
            answer={currentAnswer}
          />
          {flipped && (
            <div className="answer-buttons">
              <button
                className="known-btn"
                onClick={() => handleAnswer(true)}
                disabled={isAnswered}
              >
                ✓ Ég kunni þetta
              </button>
              <button
                className="unknown-btn"
                onClick={() => handleAnswer(false)}
                disabled={isAnswered}
              >
                ✗ Kunni ekki
              </button>
            </div>
          )}

          <button onClick={() => handleNext()} disabled={!isAnswered}>
            {isLast ? "Sjá niðurstöður" : "Næsta spjald"}
          </button>
        </>
      )}
      {screen === "done" && <p>Hér koma niðurstöður</p>}
    </main>
  );
}

export default App;
