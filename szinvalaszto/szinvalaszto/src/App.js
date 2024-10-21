import React, { useState } from 'react';

const ColorBox = ({ color }) => {
  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        backgroundColor: color,
        borderRadius: '5px',
        margin: 'auto',
      }}
    ></div>
  );
};

const ColorSelector = ({options, selectedOption, onSelect }) => {
  return (
    <div style={{margin: '15px auto'}}>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option.code)}
          style={{ 
            backgroundColor: selectedOption === option.code ? 'lightblue' : 'lightgrey',
            margin: '5px',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
};

export const App = () => {
  const [color, setColor] = useState(null);
  const colors = [
    { name: 'Kék', code: 'blue' },
    { name: 'Zöld', code: 'green' },
    { name: 'Piros', code: 'red' },
    { name: 'Lila', code: 'purple' },
    { name: 'Fekete', code: 'black' }
  ];

  return (
    <div>
      <ColorBox color={color} />
      <ColorSelector
        options={colors}
        selectedOption={color}
        onSelect={setColor}
      />
    </div>
  );
};