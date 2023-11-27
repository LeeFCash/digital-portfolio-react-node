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
    <div className="overManinAll">
     <div className="mainAll">
      <div className="mainAll-tabBarDiv">
       <ol className="mainAll-tabBarDiv-orderList">
        <li className="mainAll-tabBarDiv-orderList-tab1">About Me</li>
        <li className="mainAll-tabBarDiv-orderList-tab2">My work sample</li>
        <li className="mainAll-tabBarDiv-orderList-tab3">Contact me</li>
       </ol>
      </div>
      <div className="mainAll-content1">
       <h1>Hello, I'm Lee Cash you can get to know me better by clicking either about me, my work sample,</h1>
      </div>
     </div>
    </div>
  );
}

export default App;
