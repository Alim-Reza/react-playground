import React, { useState, useEffect, useLayoutEffect } from 'react';

export default function OldTimer({ showHourValue }) {
  // const [seconds, setSeconds] = useState(1000);

  // const [visibleTime, setVisibleTime] = useState(new Date());
  // const [hiddenTime, setHiddenTime] = useState(new Date());
  // const [deductLostTime, setDeductLostTime] = useState(false);

  // const onVisibilityChange = () => {
  //   if (document.visibilityState === 'visible') {
  //     const visibleTimeVar = new Date();
  //     console.log('tab visile on => ', visibleTimeVar);
  //     setVisibleTime(new Date());
  //   } else {
  //     const hiddenTimeVar = new Date();
  //     console.log('tab HIDDEN on => ', hiddenTimeVar);
  //     setHiddenTime(new Date());
  //     setDeductLostTime(true);
  //   }
  // };

  // useLayoutEffect(() => {
  //   document.addEventListener('visibilitychange', onVisibilityChange);
  //   return () =>
  //     document.removeEventListener('visibilitychange', onVisibilityChange);
  // }, []);

  // useLayoutEffect(() => {
  //   let tradeRequestApprovalCountDownInterval = setInterval(() => {
  //     if (document.visibilityState === 'visible') {
  //       if (deductLostTime) {
  //         setSeconds((prev) => {
  //           return prev > 0
  //             ? prev - Math.round((visibleTime - hiddenTime) / 1000)
  //             : prev;
  //         });
  //         setDeductLostTime(false);
  //       } else {
  //         setSeconds((prev) => {
  //           return prev > 0 ? prev - 1 : prev;
  //         });
  //       }
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(tradeRequestApprovalCountDownInterval);
  //   };
  // }, [visibleTime, hiddenTime, deductLostTime]);
  // =============================
  // useLayoutEffect(() => {
  //   let whenVisibleDeductOnePerSecond = setInterval(() => {
  //     if (document.visibilityState === 'visible') {
  //       setSeconds((prev) => (prev > 0 ? prev - 1 : prev));
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(whenVisibleDeductOnePerSecond);
  //   };
  // }, []);
  // ====================================
  const [seconds, setSeconds] = useState(100);

  const [visibleTime, setVisibleTime] = useState(new Date());
  const [hiddenTime, setHiddenTime] = useState(new Date());
  const [deductLostTime, setDeductLostTime] = useState(false);

  const onVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      const visibleTimeVar = new Date();
      setVisibleTime(visibleTimeVar);
    } else {
      const hiddenTimeVar = new Date();
      setHiddenTime(hiddenTimeVar);
      setDeductLostTime(true);
    }
  };

  useLayoutEffect(() => {
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () =>
      document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  useLayoutEffect(() => {
    let tradeRequestApprovalCountDownInterval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        if (deductLostTime) {
          const timeDiff = Math.round((new Date() - hiddenTime) / 1000);
          setSeconds((prev) => (prev > timeDiff ? prev - timeDiff : 0));
          setDeductLostTime(false);
        } else {
          setSeconds((prev) => (prev > 0 ? prev - 1 : prev));
        }
      }
    }, 1000);
    return () => {
      clearInterval(tradeRequestApprovalCountDownInterval);
    };
  }, [hiddenTime, deductLostTime]);

  const secondToHHMMSS = (seconds) => {
    if (showHourValue) {
      return new Date(seconds * 1000).toISOString().substring(11, 11 + 8);
    } else {
      return new Date(seconds * 1000).toISOString().substring(14, 14 + 5);
    }
  };

  return (
    <>
      <p>
        <strong className="text-red">
          visibleTime: {visibleTime.toLocaleTimeString()}
        </strong>
      </p>
      <p>
        <strong className="text-red">
          hiddenTime: {hiddenTime.toLocaleTimeString()}
        </strong>
      </p>
      <p>
        <strong className="text-red">
          difference: {visibleTime - hiddenTime}
        </strong>
      </p>
      <p>
        <strong className="text-red">
          difference but in seconds:{' '}
          {Math.round((visibleTime - hiddenTime) / 1000)}
        </strong>
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
// useEffect(() => {
//   let tradeRequestApprovalCountDownInterval = setInterval(() => {
//     if (document.visibilityState === 'visible') {
//       if (deductLostTime) {
//         setSeconds((prev) => {
//           return prev > 0
//             ? prev - Math.round((visibleTime - hiddenTime) / 1000)
//             : prev;
//         });
//         setDeductLostTime(false);
//       } else {
//         setSeconds((prev) => {
//           return prev > 0 ? prev - 1 : prev;
//         });
//       }
//     }
//   }, 1000);
//   return () => {
//     clearInterval(tradeRequestApprovalCountDownInterval);
//   };
// }, [visibleTime, hiddenTime, deductLostTime]);
