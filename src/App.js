import React, {useEffect} from 'react';
import {getLandmarks, loadModels, maskify} from './faceapi';
import face001 from './face0001.jpg';
import logo1 from './overlayBLUSH1.png';
import mask2 from './overlayBLUSH2.png'
import giff from './logo1.gif'
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
    this.onButton = this.onButton.bind(this);
    console.log('CHECK constuctor');

  } // end constr


  // *********************************************
  renderSceneLoaded(imageSrc) {
    const wImage = imageSrc.width;
    const hImage = imageSrc.height;
    //console.log("image dim = " + wImage.toString() + ", " + hImage.toString());

    this.setState({imageSrc: imageSrc});

    const objCanvas = this.refs.canvas;
    if (objCanvas === null) {
      return;
    }
    this.setState({canvas: objCanvas});

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
    await getLandmarks(imageSrc, this.state).then( fullDescription => {
      // console.log(fullDescription);
      console.log('imag', imageSrc);
      console.log('CHECK process Image');

      this.setState({fullDesc: fullDescription});
    });
  };
  async startDetect(index) {
    const refs = [this.refs.face001, this.refs.face002];
    const imgRef = refs[index];
    this.setState({fullDesc: null});
    this.renderSceneLoaded(imgRef);
    console.log('CHECK start Detect');

    await this.processImage(imgRef);
  }

  onButton() {
    //console.log('Pressed button :' + index.toString());
    console.log('CHECK onButton');
    //this.startDetect(index);
  }

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
    //try1.style.opacity
    //try1.hidden = !try1.hidden
    //try1.style.opacity = `${100}px`
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

  // *********************************************
  render() {

    const styleImage = {
      display: 'none'
    };

    const giffstyle={
      position: 'absolute',
      background: 'white',
    }
    const picturestyle ={
      position: 'absolute',
      height: document.documentElement.clientHeight,
      //marginleft: 'auto',
      //marginRight: 'auto',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, 0%)',
      //left: (document.documentElement.clientWidth)/2,
    }

    console.log('CHECK render');
    //const jsxCanvas = <canvas ref="canvas" />
    return <div className="App">
      <header className="App-header">

        <button type="button" className="btn btn-secondary" onClick={this.onClick1}>less</button>
        <img src={face001} alt="face" ref="face001" id="face"/>
        <img src={logo1} alt="fe" ref="logo" id="or" hidden={true}/>
        <button type="button" className="btn btn-secondary" onClick={this.onClick}>more</button>
        <img src={mask2} alt="fe" ref="mask2" id="mask2" hidden={true}/>
        <img src={giff} alt="fe" ref="giff" id="giff" style={giffstyle} hidden={false}/>
        <button type="button" className="btn btn-secondary" onClick={this.ClickMask2}>mask2</button>
        <button type="button" className="btn btn-secondary" onClick={this.ClickMask1}>mask1</button>
      </header>
    </div>;

  } // end render


} // end App



export default App;

