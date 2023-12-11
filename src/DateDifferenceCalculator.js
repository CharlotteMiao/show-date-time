import React, { useState } from 'react';

const DateDifferenceCalculator = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [difference, setDifference] = useState(null);

  const handleDateChange = (event, type) => {
    const newDate = new Date(event.target.value);
    if (type === 'start') {
      setStartDate(newDate);
    } else {
      setEndDate(newDate);
    }
  };

  const calculateDifference = () => {
    if (startDate && endDate && startDate <= endDate) {
      const diffInMillis = endDate - startDate;
      const diffInSeconds = Math.floor(diffInMillis / 1000);
      setDifference(diffInSeconds);
    } else {
      setDifference(null);
    }
  };

  return (
    <div>
      <form>
        <label>
          Start Date:
          <input type="datetime-local" value={startDate.toISOString().slice(0, 16)} onChange={(e) => handleDateChange(e, 'start')} />
        </label>
        <br />
        <label>
          End Date:
          <input type="datetime-local" value={endDate.toISOString().slice(0, 16)} onChange={(e) => handleDateChange(e, 'end')} />
        </label>
      </form>
      <button onClick={calculateDifference}>Calculate Difference</button>
      {difference !== null && (
        <div>
          <p>Difference in seconds: {difference}s</p>
          <p>Difference in minutes: {Math.floor(difference / 60)}m</p>
          <p>Difference in hours: {Math.floor(difference / 3600)}h</p>
          <p>Difference in days: {Math.floor(difference / 86400)}d</p>
          {/* Additional calculations for months and years can be added here */}
        </div>
      )}
    </div>
  );
};

export default DateDifferenceCalculator;