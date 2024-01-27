"use client";
import { useState } from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onClick: () => void;
}

export const Checkbox = ({ label, checked, onClick }: CheckboxProps) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          onClick={onClick}
        />
        {label}
      </label>
    </div>
  );
};
