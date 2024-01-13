import React, { useState, useEffect } from 'react';
import MeIMG from './IMG/MeIMG.jpg'
import awardDCpng from './IMG/awardDC.png'
import diplomajpg from './IMG/diploma.jpg'
import rewardTeachingjpg from './IMG/rewardTeaching.jpg'
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [tab, setTab] = useState(0);
  const testName = 'check the server port 5000';
  function tab1() {
    var mainAllOverAllContentContent2DivNAEdiv1 = document.getElementById('mainAll-overAllContent-content2-divNAE-div1');
    mainAllOverAllContentContent2DivNAEdiv1.innerHTML = "";
    var mainAllOverAllContentContent2DivNAEdiv2 = document.getElementById('mainAll-overAllContent-content2-divNAE-div2');
    mainAllOverAllContentContent2DivNAEdiv2.innerHTML = "";
    var mainAllOverAllContentContent2DivNAEdiv3 = document.getElementById('mainAll-overAllContent-content2-divNAE-div3');
    mainAllOverAllContentContent2DivNAEdiv3.innerHTML = "";
    var mainAllOverAllContentContent2 = document.getElementById("mainAll-overAllContent-content2");
    var mainAllOverAllContent = document.getElementById("mainAll-overAllContent");
    setTab(1);
    mainAllOverAllContentContent2.remove();
    mainAllOverAllContent.appendChild(mainAllOverAllContentContent2);
    setTimeout(aboutMeNAE, 5000);
  };
  function tab2() {
    var mainAllOverAllContent = document.getElementById("mainAll-overAllContent");
    var mainAllOverAllContentContent2 = document.getElementById("mainAll-overAllContent-content2");
    setTab(2);
    mainAllOverAllContentContent2.remove();
    mainAllOverAllContent.appendChild(mainAllOverAllContentContent2);
  };
  function tab3() {
    var mainAllOverAllContent = document.getElementById("mainAll-overAllContent");
    var mainAllOverAllContentContent3 = document.getElementById("mainAll-overAllContent-content3");
    setTab(3);
    mainAllOverAllContentContent3.remove();
    mainAllOverAllContent.appendChild(mainAllOverAllContentContent3);
  };
  function aboutMeNAE() {
    console.log('hello');
    var mainAllOverAllContentContent2DivNAEdiv1 = document.getElementById('mainAll-overAllContent-content2-divNAE-div1');
    mainAllOverAllContentContent2DivNAEdiv1.innerHTML = "";
    var mainAllOverAllContentContent2DivNAEdiv2 = document.getElementById('mainAll-overAllContent-content2-divNAE-div2');
    mainAllOverAllContentContent2DivNAEdiv2.innerHTML = "";
    var mainAllOverAllContentContent2DivNAEdiv3 = document.getElementById('mainAll-overAllContent-content2-divNAE-div3');
    mainAllOverAllContentContent2DivNAEdiv3.innerHTML = "";
    var name = ["L", "e", "e", " ", "C", "a", "s", "h"];
    var age = ["1", "9"];
    var education = ["G", "r", "a", "d", "u", "a", "t", "e", "d"];
    for (var i = 0; i < name.length; i++) {
      mainAllOverAllContentContent2DivNAEdiv1.innerHTML += "<spam class='main-content-aboutMeContent-text3-letter" + i + "-opacity0'>" + name[i] + "</spam>";
      console.log(name[i]);
    }
    for (var i = 0; i < age.length; i++) {
      mainAllOverAllContentContent2DivNAEdiv2.innerHTML += "<spam class='main-content-aboutMeContent-text3-letter" + i + "-opacity0'>" + age[i] + "</spam>";
      console.log(name[i]);
    }
    for (var i = 0; i < education.length; i++) {
      mainAllOverAllContentContent2DivNAEdiv3.innerHTML += "<spam class='main-content-aboutMeContent-text3-letter" + i + "-opacity0'>" + education[i] + "</spam>";
      console.log(name[i]);
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
      <div className="mainAll-overAllContent" id="mainAll-overAllContent">
       <div className="mainAll-content1" id="mainAll-overAllContent-content1" hidden={tab !== 0}>
        <h1 className="mainAll-content1-h11">Hello, I'm Lee Cash you can get to know me better by clicking about me, my work sample or contact me.</h1>
       </div>
       <div className="mainAll-overAllContent-content2" id="mainAll-overAllContent-content2" hidden={tab !== 1}>
         <img src={MeIMG} alt="error" className="mainAll-overAllContent-content2-meIMG"/>
         <div className="mainAll-overAllContent-content2-divNAE">
          <div className="NAElinement"><p className="mainAll-overAllContent-content2-divNAE-name">Name: </p><div className="mainAll-overAllContent-content2-divNAE-div1" id="mainAll-overAllContent-content2-divNAE-div1"></div></div>
          <div className="NAElinement"><p className="mainAll-overAllContent-content2-divNAE-age">age: </p><div className="mainAll-overAllContent-content2-divNAE-div2" id="mainAll-overAllContent-content2-divNAE-div2"></div></div>
          <div className="NAElinement"><p className="mainAll-overAllContent-content2-divNAE-education">education: </p><div className="mainAll-overAllContent-content2-divNAE-div3" id="mainAll-overAllContent-content2-divNAE-div3"></div></div>
         <div className="mainAll-overAllContent-content2-divIMGandInfo">
         <img src={diplomajpg} alt="error" className="mainAll-overAllContent-content2-diploma"/>
          <img src={awardDCpng} alt="error" className="mainAll-overAllContent-content2-awardDC"/>
          <img src={rewardTeachingjpg} alt="error" className="mainAll-overAllContent-content2-rewardTeaching"/>
         </div>
        </div>
       </div>
       <div className="mainAll-overAllContent-content3" id="mainAll-overAllContent-content3" hidden={tab !== 2}>
         <p>tab2</p>
       </div>
       <div className="mainAll-overAllContent-content4" id="mainAll-overAllContent-content4" hidden={tab !== 3}>
         <p>tab3</p>
       </div>
      </div>
     </div>
    </div>
  );
}

export default App;
