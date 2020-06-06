import React from 'react';
import Quiz from '../ReusableComponents/Quiz';
import questions from '../Data';

const ReactQuiz = () => {
  return (
    <div>
      <Quiz questions={questions} />
    </div>
  );
};

export default ReactQuiz;
