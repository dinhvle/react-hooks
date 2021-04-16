import { useState } from "react";

export default function Increment() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <button onClick={increment}>Click {count} times</button>
    </div>
  );
}
