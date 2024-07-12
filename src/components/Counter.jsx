import { useState } from "react";

import { Button, Input } from "neetoui";

const Counter = () => {
  const [currentValue, setCurrentValue] = useState(0);

  const incrementValue = () => {
    const nextValue = currentValue + 1;
    setCurrentValue(nextValue);
  };

  const decrementValue = () => {
    if (currentValue > 0) {
      const previousValue = currentValue - 1;
      setCurrentValue(previousValue);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 py-4">
      <Input className="max-w-56 w-56" value={currentValue} />
      <div className="flex items-center gap-4">
        <Button
          className="shrink-0 focus-within:ring-0 hover:bg-transparent"
          label="Decrement"
          style="primary"
          onClick={decrementValue}
        />
        <Button
          className="shrink-0 focus-within:ring-0 hover:bg-transparent"
          label="Increment"
          style="primary"
          onClick={incrementValue}
        />
      </div>
    </div>
  );
};

export default Counter;
