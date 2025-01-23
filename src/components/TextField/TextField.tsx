import React from 'react';
import './TextField.css';

interface TextFieldProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void; // Renomeado para "onChange"
}

export const TextField = ({ onChange, label, value, placeholder }: TextFieldProps) => {
  const editedValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="textfield-div">
      <label>{label}</label>
      <input 
        type="text" 
        value={value} 
        onChange={editedValue} 
        placeholder={placeholder}
      />
    </div>
  );
};
