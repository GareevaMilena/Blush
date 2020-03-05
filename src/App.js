import React, {useEffect} from 'react';
import {getLandmarks, loadModels, maskify} from './faceapi';
import face001 from './images/faces/face0001.jpg';
import face002 from './images/faces/face0002.jpg';
import face003 from './images/faces/face0003.jpg';
import face004 from './images/faces/face0004.jpg';
import face005 from './images/faces/face0005.jpg';
import logo1 from './images/overlay/overlayBLUSH1.png';
import mask2 from './images/overlay/overlayBLUSH2.png'
import mask3 from './images/overlay/overlayBLUSH3.png'
import mask4 from './images/overlay/overlayBLUSH4.png'
import giff from './logo1.gif'
import blush1 from './images/icons/button1.png'
import blush2 from './images/icons/button2.png'
import blush3 from './images/icons/button3.png'
import blush4 from './images/icons/button4.png'
import icon1 from './images/icons/icons1.png'
import icon2 from './images/icons/icons2.png'
import icon3 from './images/icons/icons3.png'
import icon4 from './images/icons/icons4.png'
import icon5 from './images/icons/icons5.png'
import "./styles.css"
// **********************************************
// Vars
// **********************************************

// **********************************************
// class App
// **********************************************


class App extends React.Component {
  constructor(props) {
    super(props);
    this.m_mount = null;
    this.changeface1 = this.changeface1.bind(this);
    this.changeface2 = this.changeface2.bind(this);
    this.changeface3 = this.changeface3.bind(this);
    this.changeface4 = this.changeface4.bind(this);
    this.changeface5 = this.changeface5.bind(this);
    console.log('CHECK constuctor');

  } // end constr


  // *********************************************
  renderSceneLoaded(imageSrc) {
    this.setState({imageSrc: imageSrc});

    const objCanvas = this.refs.canvas;
    if (objCanvas === null) {
      return;
    }
    //this.setState({canvas: objCanvas});

    console.log('CHECK render scene loaded');
    // perform animtaion by timer

  }

  renderScene(faceRef) {
    const imageSrc = faceRef;
    console.log('CHECK render scene');
    imageSrc.onload = () => {
      this.renderSceneLoaded(imageSrc);
    }// end on load image
  } // end renderScene

  // *********************************************
  async componentDidMount() {
    this.renderScene(this.refs.face001);

    await loadModels();
    console.log('CHECK did mount');
    await this.processImage(this.state.imageSrc);
  }

  processImage = async(imageSrc) => {
    await getLandmarks(imageSrc).then( fullDescription => {
      // console.log(fullDescription);
      console.log('imag', imageSrc);
      console.log('CHECK process Image');

      this.setState({fullDesc: fullDescription});
    });
  };

//upper
  onClick(){
    console.log('CHECK onButton');

    let try1 = document.getElementById("or")
    let a0;
    a0 = parseFloat(try1.style.opacity)
    if(a0 < 1)
      a0 = a0 + 0.1
    console.log(a0)
    try1.style.opacity = a0.toString()
  }
  //downer
  onClick1(){
    let try1 = document.getElementById("or")
    let a0;
    a0 = parseFloat(try1.style.opacity)
    if(a0 > 0)
      a0 = a0 - 0.1
    console.log(a0)
    try1.style.opacity = a0.toString()
    //try1.style.ma
}

ClickMask2(){
    let try1 = document.getElementById("or")
    try1.src=mask2
}
  ClickMask1(){
    let try1 = document.getElementById("or")
    try1.src=logo1
  }
  ClickMask3(){
    let try1 = document.getElementById("or")
    try1.src=mask3
  }
  ClickMask4(){
    let try1 = document.getElementById("or")
    try1.src=mask4
  }
  changeface1(){
    let try1 = document.getElementById("face")
    try1.src = face002
    document.getElementById("giff").hidden=false
    document.getElementById("or").hidden=true
    this.processImage(this.state.imageSrc);
  }
  changeface2(){
    let try1 = document.getElementById("face")
    try1.src = face001
    document.getElementById("giff").hidden=false
    document.getElementById("or").hidden=true
    this.processImage(this.state.imageSrc);
  }
  changeface3(){
    let try1 = document.getElementById("face")
    try1.src = face003
    document.getElementById("giff").hidden=false
    document.getElementById("or").hidden=true
    this.processImage(this.state.imageSrc);
  }
  changeface4(){
    let try1 = document.getElementById("face")
    try1.src = face004
    document.getElementById("giff").hidden=false
    document.getElementById("or").hidden=true
    this.processImage(this.state.imageSrc);
  }
  changeface5(){
    let try1 = document.getElementById("face")
    try1.src = face005
    document.getElementById("giff").hidden=false
    document.getElementById("or").hidden=true
    this.changeImage(false);
    this.processImage(this.state.imageSrc);
  }
  changeImage(e) {
    let file
    if (e === false)
      file = null
    else {
      file = e.target.files[0];
      console.log("file", file);
      let b
      if (file) {
        b = URL.createObjectURL(file);
        document.getElementById("giff").hidden = false
        document.getElementById("or").hidden = true
        let try1 = document.getElementById("face")
        try1.src = b
        this.processImage(this.state.imageSrc);
      }
    }
  }
  // *********************************************
  render() {

    const giffstyle={
      position: 'absolute',
      //display: inline
      //backgroundColor: 'white',
    }
    console.log('CHECK render');
    //const jsxCanvas = <canvas ref="canvas" />
    return <div className="App">
      <header className="App-header">

        <button type="button" className="btn btn-secondary" onClick={this.onClick1}>less</button>
        <img src={face001} alt="face" ref="face001" id="face"/>
        <img src={face002} alt="face" ref="face002" id="face" hidden={true}/>
        <img src={logo1} alt="fe" ref="logo" id="or" hidden={true}/>
        <button type="button" className="btn btn-secondary" onClick={this.onClick}>more</button>
        <img src={mask2} alt="fe" ref="mask2" id="mask2" hidden={true}/>
        <img src={giff} alt="fe" ref="giff" id="giff" style={giffstyle} hidden={false}/>
        <div>
        <img src={blush1} alt="fe" ref="mask2" id="mask2" onClick={this.ClickMask2}/>
        <img src={blush2} alt="fe" ref="mask2" id="mask2" onClick={this.ClickMask1}/>
        <img src={blush3} alt="fe" ref="mask2" id="mask3" onClick={this.ClickMask3}/>
        <img src={blush4} alt="fe" ref="mask2" id="mask3" onClick={this.ClickMask4}/>
        </div>
        <div id="main">
          <input type="file" onChange={this.changeImage.bind(this)} />
        </div>
        <div>
        <img src={icon1} onClick={this.changeface1}/>
        <img src={icon2} onClick={this.changeface2}/>
        <img src={icon3} onClick={this.changeface3}/>
        <img src={icon4} onClick={this.changeface4}/>
        <img src={icon5} onClick={this.changeface5}/>
        </div>
      </header>
    </div>;

  } // end render


} // end App



export default App;

