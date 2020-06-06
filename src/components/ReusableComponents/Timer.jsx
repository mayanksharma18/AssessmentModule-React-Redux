import React, { useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import TimerIcon from '@material-ui/icons/Timer';

const Timer = ({ minutes = 1, seconds = 30 }) => {
  const [time, setTime] = useState({
    minutes: parseInt(minutes),
    seconds: parseInt(seconds),
  });
  const [over, setOver] = useState(false);
  const tick = () => {
    if (over) return;
    if (time.minutes === 0 && time.seconds === 0) {
      setOver(true);
    } else if (time.seconds === 0) {
      setTime({
        minutes: time.minutes - 1,
        seconds: 59,
      });
    } else {
      setTime({
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });
  return (
    <div>
      <Alert severity="info" icon={<TimerIcon fontSize="inherit" />} >
        <p>{`${time.minutes
          .toString()
          .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</p>
        <div>{over ? "Time's up!" : ''}</div>
      </Alert>
    </div>
  );
};

export default Timer;
