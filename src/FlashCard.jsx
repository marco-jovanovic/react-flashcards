import React, { useState } from 'react';

import { questions } from '../data';

function FlashCard() {
  const [myquestions, setMyQuestions] = useState(questions);
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id);

    if (selectedId === id) {
      setSelectedId(null);
    }
  };

  return (
    <>
      <div className="grid-container">
        {myquestions.map((item) => {
          const { question, answer, id } = item;

          return (
            <div
              onClick={() => handleClick(id)}
              key={id}
              className={selectedId === id ? 'grid-item selected' : 'grid-item'}
            >
              <h1>{selectedId === id ? answer : question}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FlashCard;
