import React, { useState, useEffect } from 'react';
//import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [tab, setTab] = useState(0);
  const testName = 'check the server port 5000';
  var mainAllOverAllContent = document.getElementById('mainAll-overAllContent');
  var startPage1 = document.getElementById('mainAll-overAllContent-content1');
  var aboutMeContent = document.getElementById('mainAll-overAllContent-content2');
  var workSamples = document.getElementById('mainAll-overAllContent-content3');
  var contactMe = document.getElementById('mainAll-overAllContent-content4');
  var startPage1p2 = true;
  var tab1p2 = false;
  var tab2p2 = false;
  var tab3p2 = false;
  function tab1() {
    setTab(1);
  };
  function tab2() {
    setTab(2);
  };
  function tab3() {
    setTab(3);
  };

  function initialLoad() {
    aboutMeContent.remove();
    workSamples.remove();
    contactMe.remove();
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
        <button onClick={tab2} className="mainAll-tabBarDiv-orderList-tab2">My work sample</button>
        <button onClick={tab3} className="mainAll-tabBarDiv-orderList-tab3">Contact me</button>
       </ol>
      </div>
      <div className="mainAll-overAllContent">
       <div className="mainAll-content1" id="mainAll-overAllContent-content1" hidden={tab != 0}>
        <h1 className="mainAll-content1-h11">Hello, I'm Lee Cash you can get to know me better by clicking about me, my work sample or contact me.</h1>
       </div>
       <div className="mainAll-overAllContent-content2" id="mainAll-overAllContent-content2" hidden={tab != 1}>
         <p className="mainAll-overAllContent-content2-name">Name:</p>
         <p className="mainAll-overAllContent-content2-age">age:</p>
         <p className="mainAll-overAllContent-content2-education">education:</p>
       </div>
       <div className="mainAll-overAllContent-content3" id="mainAll-overAllContent-content3" hidden={tab != 2}>
         <p>tab2</p>
       </div>
       <div className="mainAll-overAllContent-content4" id="mainAll-overAllContent-content3" hidden={tab != 3}>
         <p>tab3</p>
       </div>
      </div>
     </div>
    </div>
  );
}

export default App;
