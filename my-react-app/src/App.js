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
        <button className="mainAll-tabBarDiv-orderList-tab1">About Me</button>
        <button className="mainAll-tabBarDiv-orderList-tab2">My work sample</button>
        <button className="mainAll-tabBarDiv-orderList-tab3">Contact me</button>
       </ol>
      </div>
      <div className="mainAll-content1">
       <h1>Hello, I'm Lee Cash you can get to know me better by clicking about me, my work sample or contact me.</h1>
       <script>
       alert('this website is under development and my have some problems, you can report these problems to leecash133@gmail.com');
       </script>
      </div>
     </div>
    </div>
  );
}

export default App;
