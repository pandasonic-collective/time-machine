import useTimeTravel from './hooks/useTimeTravel';
import { useEffect, useState } from 'react';
export default function App() {
    const [handleChange, history, index] = useTimeTravel();

    console.log(
        'history:',
        history,
        'index:',
        index
    );
  return (
    <>
      <p>
        <button onClick={({target}) => handleChange(target)} name="undo">
          Undo
        </button>
      </p>
      <p>
        <button onClick={({target}) => handleChange(target)} name="redo">
          Redo
        </button>
      </p>
      <p>
        <input
          type="date"
          name="date"
          label="date"
          required
          onChange={({target}) => handleChange(target)}
        />
      </p>
      {history[index]}
    </>
  );
}
