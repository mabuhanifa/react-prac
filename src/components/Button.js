import React, { useState } from "react";

export default function Button({ style }) {
  const [state, setState] = useState(5);
  const onclick = () => {
    setState(state + 5);
  };
  return (
    <button className={style} onClick={onclick}>
      {state}
    </button>
  );
}
