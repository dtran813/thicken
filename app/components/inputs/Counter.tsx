'use client';

import { useCallback } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

interface CounterProps {
  value: number;
  className?: string;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  value,
  className = '',
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }
    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className={`flex flex-row items-center gap-4 ${className}`}>
      <button
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-400 text-neutral-700 transition hover:opacity-80"
        onClick={onReduce}
      >
        <FiMinus />
      </button>
      <p className="text-lg font-semibold">{value}</p>
      <button
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-400 text-neutral-700 transition hover:opacity-80"
        onClick={onAdd}
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default Counter;
