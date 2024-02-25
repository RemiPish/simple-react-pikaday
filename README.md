
Simple-react-pikaday
========
A simple and easy-to-use date picker component for React apps, powered by the popular Pikaday date picker library and Moment.js for date formatting.

## Installation

Install `simple-react-pikaday` using npm:
```shell
npm install simple-react-pikaday
```
or using yarn:
```shell
yarn add simple-react-pikaday
```
## Usage
To use `Simple React Pikaday` in your project, import the `DatePicker` component and use it like any other React component:
```jsx
import React, { useState } from 'react';
import DatePicker from 'simple-react-pikaday';

const MyComponent = () => {
  const [date, setDate] = useState('');

  return (
    <div>
      <h2>Select a Date</h2>
      <DatePicker
        value={date}
        onChange={setDate}
      />
    </div>
  );
};

export default MyComponent;
```

 - value: Date value in `YYYY-MM-DD` format
 - onChange: Callback function that is called when the date is changed. Receives the new date as a string in `YYYY-MM-DD` format.

## Dependencies
This library utilizes `Pikaday` and `Moment.js`. These dependencies are included in the package, so you don't need to install them separately.