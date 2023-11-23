import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const testName = 'check the server port 5000';
  var testForNull = null;

useEffect(() => {
  fetch('http://localhost:5000')
  .then(response => response.text())
  .then(data => setData(data))
  .catch(error => console.error('error:', error));
});

  return (
    <div className="text">
      {testForNull ? (
        <>
          test
        </>
      ) : (
        <h1>{ null ? testName : data }</h1>
      )}
    </div>
  );
}

export default App;
