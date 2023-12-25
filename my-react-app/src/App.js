import React, { useState, useEffect } from 'react';
import MeIMG from './IMG/MeIMG.jpg'
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [tab, setTab] = useState(0);
  const testName = 'check the server port 5000';
  function tab1() {
    setTab(1);
    aboutMeNAE();
  };
  function tab2() {
    setTab(2);
  };
  function tab3() {
    setTab(3);
  };
  function aboutMeNAE() {
    console.log('hello');
    var mainAllOverAllContentContent2DivNAEdiv1 = document.getElementById('mainAll-overAllContent-content2-divNAE-div1');
    var mainAllOverAllContentContent2DivNAEdiv1 = document.getElementById('mainAll-overAllContent-content2-divNAE-div1');
    var mainAllOverAllContentContent2DivNAEdiv1 = document.getElementById('mainAll-overAllContent-content2-divNAE-div1');
    var name = ["L", "e", "e", " ", "C", "a", "s", "h"];
    var age = ["1", "9"];
    var education = ["G", "r", "a", "d", "u", "a", "t", "e", "d"];
    for (var i = 0; i < name.length - 1; i++) {
      mainAllOverAllContentContent2DivNAEdiv1.innerHTML =+ "<p>" + name[i] + "</p>";
    }    
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
       <div className="mainAll-content1" id="mainAll-overAllContent-content1" hidden={tab !== 0}>
        <h1 className="mainAll-content1-h11">Hello, I'm Lee Cash you can get to know me better by clicking about me, my work sample or contact me.</h1>
       </div>
       <div className="mainAll-overAllContent-content2" id="mainAll-overAllContent-content2" hidden={tab !== 1}>
         <img src={MeIMG} alt="error" className="mainAll-overAllContent-content2-meIMG"/>
         <div className="mainAll-overAllContent-content2-divNAE">
          <p className="mainAll-overAllContent-content2-divNAE-name">Name: </p><div id="mainAll-overAllContent-content2-divNAE-div1"></div>
          <p className="mainAll-overAllContent-content2-divNAE-age">age: </p><div id="mainAll-overAllContent-content2-divNAE-div2"></div>
          <p className="mainAll-overAllContent-content2-divNAE-education">education: </p><div id="mainAll-overAllContent-content2-divNAE-div3"></div>
        </div>
       </div>
       <div className="mainAll-overAllContent-content3" id="mainAll-overAllContent-content3" hidden={tab !== 2}>
         <p>tab2</p>
       </div>
       <div className="mainAll-overAllContent-content4" id="mainAll-overAllContent-content3" hidden={tab !== 3}>
         <p>tab3</p>
       </div>
      </div>
     </div>
    </div>
  );
}

export default App;
