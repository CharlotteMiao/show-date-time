import React, { useState } from 'react';

const ColorPicker = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // default white
  const [textColor, setTextColor] = useState('#000000'); // default black

  const handleBackgroundChange = (color) => {
    if (color !== textColor) {
      setBackgroundColor(color);
    }
  };

  const handleTextChange = (color) => {
    if (color !== backgroundColor) {
      setTextColor(color);
    }
  };

  return (
    <div>
      <label>
        Background Color:
        <input type="color" value={backgroundColor} onChange={(e) => handleBackgroundChange(e.target.value)} />
      </label>
      <br />
      <label>
        Text Color:
        <input type="color" value={textColor} onChange={(e) => handleTextChange(e.target.value)} />
      </label>
      <br />
      <div style={{ backgroundColor, color: textColor, padding: '20px' }}>
        <p>This is a text with dynamic colors.</p>
      </div>
    </div>
  );
};

export default ColorPicker;