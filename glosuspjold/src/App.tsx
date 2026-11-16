import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import { cards } from "./cards";
import Flashcard from "./components/FlashCard";

type Screen = "start" | "cards" | "done";

function App() {
  const [screen, setScreen] = useState<Screen>("start");
  const [index, setIndex] = useState(0);
  const card = cards[index];
  const [flipped, setFlipped] = useState(false);

  // NOTE: ER KOMINN Á SKREF 5!!!!
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
          />
        </>
      )}
      {screen === "done" && <p>Hér koma niðurstöður</p>}
    </main>
  );
}

export default App;
