import React, { useState, useEffect } from 'react';
import { differenceInCalendarMonths, differenceInCalendarYears } from 'date-fns';

const DateDifferenceCalculator = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [difference, setDifference] = useState(null);
  const [error, setError] = useState('');

  const handleDateChange = (event, type) => {
    const newDate = new Date(event.target.value);
    if (type === 'start') {
      setStartDate(newDate);
    } else {
      setEndDate(newDate);
    }
  };

  useEffect(() => {
    const calculateDifference = () => {
      if (startDate && endDate && startDate <= endDate) {
        const diffInSeconds = Math.floor((endDate - startDate) / 1000);
        setDifference(diffInSeconds);
        setError('');
      } else {
        setDifference(null);
        setError('End date must be equal to or later than the start date.');
      }
    };

    calculateDifference();
  }, [startDate, endDate]);

  const calculateMonthsAndYears = () => {
    if (startDate && endDate && startDate <= endDate) {
      const monthsDifference = differenceInCalendarMonths(endDate, startDate);
      const yearsDifference = differenceInCalendarYears(endDate, startDate);
      return { months: monthsDifference, years: yearsDifference };
    }
    return { months: 0, years: 0 };
  };

  const { months, years } = calculateMonthsAndYears();

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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {difference !== null && (
        <div>
          <p>Difference in seconds: {difference}s</p>
          <p>Difference in minutes: {Math.floor(difference / 60)}m</p>
          <p>Difference in hours: {Math.floor(difference / 3600)}h</p>
          <p>Difference in days: {Math.floor(difference / 86400)}d</p>
          <p>Difference in months: {months} months</p>
          <p>Difference in years: {years} years</p>
        </div>
      )}
    </div>
  );
};

export default DateDifferenceCalculator;
