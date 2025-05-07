import React, { useEffect, useReducer } from 'react'


let initialState = {
    time: 25*60,
    isRunning:false
}

function timerReducer(state, action) {
    switch (action.type) {
      case 'START':
        return { ...state, isRunning: true };
      case 'STOP':
        return { ...state, isRunning: false };
      case 'TICK':
        return state.time > 0 ? { ...state, time: state.time - 1 } : { ...state, isRunning: false };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  }
export default function NewTimer() {
    const [state, dispatch] = useReducer(timerReducer,initialState)

    
    useEffect(() => {
        let interval;
        if (state.isRunning) {
          interval = setInterval(() => {
            dispatch({ type: 'TICK' });
          }, 1000);
        }
        return () => clearInterval(interval);
      }, [state.isRunning]);
    
    const formatTime = (time) => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
      };
  return (
    <div>
      <h1>Pamodoro Time</h1>
      <h1>{formatTime(state.time)}</h1>
      <button onClick={() => dispatch({ type: state.isRunning ? 'STOP' : 'START' })}>
        {state.isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  )
}
