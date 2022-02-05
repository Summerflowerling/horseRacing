import React, { useLayoutEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const RaceGameDisplay = () => {
  const [start, setStart] = useState(false);
  const [randomTime, setRandomTime] = useState(0);
  const defaultTime = useRef(1.5);
  const [animateY, setAnimateY] = useState('90vh');

  useLayoutEffect(() => {
    let randomArray = [];
    let x = 0;
    while (x < 10) {
      let randomNum = Math.floor(Math.random(0, 1) * 5 + 2);
      randomArray.push(randomNum);
      x++;
    }

    const arrToSet = new Set(randomArray);
    const uniqueArray = [...arrToSet];
    setRandomTime(uniqueArray);
    console.log('random array', randomArray);
    console.log('final array', uniqueArray);
    console.log('This is randomTime', randomTime);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  setTimeout(() => {
    setStart(true);
  }, 5000);

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
        <p>Not yet</p>
      )}

      <div className='finishLine'>Finish Line</div>
    </>
  );
};

export default RaceGameDisplay;
