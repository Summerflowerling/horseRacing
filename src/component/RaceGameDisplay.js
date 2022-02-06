import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const RaceGameDisplay = () => {
  const [start, setStart] = useState(false);
  const [randomTime, setRandomTime] = useState([]);
  const defaultTime = useRef(1.5);
  const [animateY, setAnimateY] = useState('90vh');
  const numOfHorse = useRef(4);

  const startGame = () => {
    setTimeout(() => {
      setStart(true);
    }, 3000);
  };

  const flipStartStatus = () => {
    if (start) {
      randomTime.sort((a, b) => {
        return a - b;
      });
      setTimeout(() => {
        setStart(false);
      }, randomTime[numOfHorse.current - 1] * 1000);
    }
  };

  // Make random time array
  useEffect(() => {
    let randomArray = [];
    let x = 0;
    while (x < 10) {
      let randomNum = Math.floor(Math.random(0, 1) * 5 + 2);
      randomArray.push(randomNum);
      x++;
    }
    const arrToSet = new Set(randomArray); // make sure no duplicated numbers in the array
    const uniqueArray = [...arrToSet];
    if (uniqueArray.length <= 3) {
      uniqueArray.push(8, 9);
    }
    setRandomTime(uniqueArray);
    flipStartStatus();
    console.log('randomTime', randomTime);
  }, [start]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {start ? (
        <div className='horse-flex'>
          <motion.div
            className='horseUni horse1'
            animate={{ y: animateY }}
            transition={{ duration: randomTime[0] }}
          >
            Sprite
          </motion.div>
          <motion.div
            className='horseUni horse2'
            animate={{ y: animateY }}
            transition={{ duration: randomTime[1] }}
          >
            Thena
          </motion.div>
          <motion.div
            className='horseUni horse3'
            animate={{ y: animateY }}
            transition={{ duration: randomTime[2] | defaultTime }}
          >
            Midnight
          </motion.div>
          <motion.div
            className='horseUni horse4'
            animate={{ y: animateY }}
            transition={{ duration: randomTime[3] | defaultTime }}
          >
            Misty
          </motion.div>
        </div>
      ) : (
        <button className='finishLine-btn' onClick={startGame}>
          Start the Race
        </button>
      )}

      <div className='finishLine'>Finish Line</div>
    </>
  );
};

export default RaceGameDisplay;
