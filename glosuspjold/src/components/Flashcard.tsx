import type { Card } from "../cards";

type FlashcardProps = {
  card: Card;
  flipped: boolean;
  onFlip: () => void;
};

function Flashcard({ card, flipped, onFlip }: FlashcardProps) {
  return (
    <div className="card">
      <p className="side">{flipped ? "Svar" : "Spurning"}</p>
      <p className="text">{flipped ? card.back : card.front}</p>
      <button className="flip" onClick={onFlip}>
        {flipped ? "Fela svar" : "Sýna svar"}
      </button>
    </div>
  );
}

export default Flashcard;
