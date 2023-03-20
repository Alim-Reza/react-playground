import React, { useState, useEffect, useLayoutEffect } from 'react';

export default function OldTimer() {
  const [seconds, setSeconds] = useState(1000);

  const [visibleTime, setVisibleTime] = useState(new Date());
  const [hiddenTime, setHiddenTime] = useState(new Date());
  const [deductLostTime, setDeductLostTime] = useState(false);

  const onVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      const visibleTimeVar = new Date();
      console.log('tab visile on => ', visibleTimeVar);
      setVisibleTime(visibleTimeVar);
    } else {
      const hiddenTimeVar = new Date();
      console.log('tab HIDDEN on => ', hiddenTimeVar);
      setHiddenTime(hiddenTimeVar);
      setDeductLostTime(true);
    }
  };

  useLayoutEffect(() => {
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () =>
      document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  useEffect(() => {
    let tradeRequestApprovalCountDownInterval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        if (deductLostTime) {
          setSeconds((prev) => {
            return prev > 0
              ? prev - Math.abs((visibleTime - hiddenTime) / 1000)
              : prev;
          });
          setDeductLostTime(false);
        } else {
          setSeconds((prev) => {
            return prev > 0 ? prev - 1 : prev;
          });
        }
      }
    }, 1000);
    return () => {
      clearInterval(tradeRequestApprovalCountDownInterval);
    };
  }, [hiddenTime, visibleTime]);

  const secondToHHMMSS = (seconds) => {
    return new Date(seconds * 1000).toISOString().substring(11, 11 + 8);
  };

  return (
    <>
      <p>
        <strong className="text-red">{visibleTime.toLocaleTimeString()}</strong>
      </p>
      <p>
        <strong className="text-red">{hiddenTime.toLocaleTimeString()}</strong>
      </p>
      <p>
        difference is:{' '}
        <strong className="text-red">{visibleTime - hiddenTime}</strong>
      </p>
      <p>
        <strong className="text-red">{secondToHHMMSS(seconds)} </strong>
      </p>
    </>
  );
}
