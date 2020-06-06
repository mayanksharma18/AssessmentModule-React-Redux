import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import ReactCountdownClock from 'react-countdown-clock';
import Quiz from '../ReusableComponents/Quiz';
import questions from '../DataSets/JsQuestions';
import Loader from '../ReusableComponents/Loader';
// import Timer from '../ReusableComponents/Timer';

const JavaScriptQuiz = () => {
  const [progress, setProgress] = useState(20);
  const [loader, showLoader] = useState(true);

  const hideLoader = () => {
    showLoader(false);
    clearInterval();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? hideLoader() : prevProgress + 20
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      {loader ? (
        <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
          <Loader value={progress} />
          <Typography variant="caption" component="div" color="textSecondary">
            Loading Quiz...
          </Typography>
        </div>
      ) : (
        <>
          {/* <ReactCountdownClock
            seconds={120}
            color="#de4747"
            alpha={0.9}
            size={100}
          /> */}
          <Quiz questions={questions} />
        </>
      )}
    </div>
  );
};

export default JavaScriptQuiz;
