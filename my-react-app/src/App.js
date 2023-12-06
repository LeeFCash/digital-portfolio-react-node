import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const testName = 'check the server port 5000';
  var testForNull = null;
  var startPage = true;
  var tab1p2 = false;
  var tab2p2 = false;
  var tab3p2 = false;
  function tab1() {
    if(startPage === true && tab1p2 === false && tab2p2 === false && tab3p2 === false) {
      alert('what is up?');
    }
  };

  function mainAllContent2Load() {
    const mainAllContent2 = document.getElementById("mainAll-content2").mainAllContent2.remove();
    alert('hellooooo');
  }

/*useEffect(() => {
  fetch('http://localhost:5000')
  .then(response => response.text())
  .then(data => setData(data))
  .catch(error => console.error('error:', error));
});*/

  return (
    <div className="overManinAll">
     <div className="mainAll">
      <div className="mainAll-tabBarDiv">
       <ol className="mainAll-tabBarDiv-orderList">
        <button onClick={tab1} className="mainAll-tabBarDiv-orderList-tab1">About Me</button>
        <button className="mainAll-tabBarDiv-orderList-tab2">My work sample</button>
        <button className="mainAll-tabBarDiv-orderList-tab3">Contact me</button>
       </ol>
      </div>
      <div className="mainAll-content1" id="mainAll-content1">
       <h1 className="mainAll-content1-h11">Hello, I'm Lee Cash you can get to know me better by clicking about me, my work sample or contact me.</h1>
      </div>
      <div className="mainAll-content2" id="mainAll-content2" onload={mainAllContent2Load()}>
        <p className="mainAll-content2-name">Name:</p>
        <p className="mainAll-content2-age">age:</p>
        <p className="mainAll-content2-education">education:</p>
      </div>
     </div>
    </div>
  );
}

export default App;
