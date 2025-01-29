import React from 'react';
import './TextField.css';

interface TextFieldProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  type?: "date" | "text"
}

export const TextField = ({ onChange, label, value, placeholder, type = "text" }: TextFieldProps) => {
  const editedValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="textfield-div">
      <label>{label}</label>
      <input 
        type={type} 
        value={value} 
        onChange={editedValue} 
        placeholder={placeholder}
      />
    </div>
  );
};
