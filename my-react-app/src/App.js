import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');
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
    if(tab1p2 === false && tab2p2 === false && tab3p2 === false && startPage1p2 === true) {
      startPage1.remove();
      workSamples.remove();
      contactMe.remove();
      mainAllOverAllContent.appendChild(aboutMeContent);
      tab1p2 = true;
      startPage1p2 = false;
      } else if(tab1p2 === false && tab2p2 === false && tab3p2 === true && startPage1p2 === false){
          startPage1.remove();
          workSamples.remove();
          contactMe.remove();
          mainAllOverAllContent.appendChild(aboutMeContent);
          tab1p2 = true;
          tab3p2 = false
      } else if(tab1p2 === false && tab2p2 === true && tab3p2 === false && startPage1p2 === false) {
          startPage1.remove();
          workSamples.remove();
          contactMe.remove();
          mainAllOverAllContent.appendChild(aboutMeContent);
          tab1p2 = true;
          tab2p2 = false
      } else if(tab1p2 === true && tab2p2 === false && tab3p2 === false && startPage1p2 === false) {
          alert('This tab is already open.');
      } else {
          alert('Something unexpected happen.');
      };
      return tab1p2, tab1p2, tab1p2, startPage1p2;
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
        <button className="mainAll-tabBarDiv-orderList-tab2">My work sample</button>
        <button className="mainAll-tabBarDiv-orderList-tab3">Contact me</button>
       </ol>
      </div>
      <div className="mainAll-overAllContent"></div>
      <div className="mainAll-content1" id="mainAll-overAllContent-content1">
       <h1 className="mainAll-content1-h11">Hello, I'm Lee Cash you can get to know me better by clicking about me, my work sample or contact me.</h1>
      </div>
      <div className="mainAll-overAllContent-content2" id="mainAll-overAllContent-content2" >
        <p className="mainAll-overAllContent-content2-name">Name:</p>
        <p className="mainAll-overAllContent-content2-age">age:</p>
        <p className="mainAll-overAllContent-content2-education">education:</p>
      </div>
      <div className="mainAll-overAllContent-content3" id="mainAll-overAllContent-content3">
        <p>tab2</p>
      </div>
      <div className="mainAll-overAllContent-content4" id="mainAll-overAllContent-content3">
        <p>tab3</p>
      </div>
     </div>
    </div>
  );
}

export default App;
