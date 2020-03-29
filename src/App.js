import React from 'react';
import {getLandmarks, loadModels} from './faceapi';
import IconsClick from './iconsClick';
import {faces} from "./faceChoose";
import FaceChoose from "./faceChoose";
import face001 from './images/faces/face0001.jpg';
import logo1 from './images/overlay/overlayBLUSH1.png';
import mask2 from './images/overlay/overlayBLUSH2.png'
import giff from './logo1.gif'
import "./styles.css"

import Sandbox from "./sandbox";
import {Carousel} from "react-bootstrap";
// **********************************************
// Vars
// **********************************************

// **********************************************
// class App
// **********************************************



class App extends React.Component {
  constructor(props) {
    super(props);
    this.newface = this.newface.bind(this);
  } // end constr


  // *********************************************
  renderSceneLoaded(imageSrc) {
    this.setState({imageSrc: imageSrc});

    const objCanvas = this.refs.canvas;
    if (objCanvas === null) {
      return;
    }
    //this.setState({canvas: objCanvas});

    // perform animtaion by timer

  }

  renderScene(faceRef) {
    const imageSrc = faceRef;
    imageSrc.onload = () => {
      this.renderSceneLoaded(imageSrc);
    }// end on load image
  } // end renderScene

  // *********************************************
  async componentDidMount() {
    this.renderScene(this.refs.face001);

    await loadModels();
    await this.processImage(this.state.imageSrc);
  }

  processImage = async(imageSrc) => {
    await getLandmarks(imageSrc).then( fullDescription => {
      // console.log(fullDescription);
      console.log('imag', imageSrc);

      this.setState({fullDesc: fullDescription});
    });
  };

  newface(index){
    let try1 = document.getElementById("face")
    try1.src = faces[index]
    document.getElementById("giff").hidden=false
    document.getElementById("or").hidden=true
    this.processImage(this.state.imageSrc);
  }

  changeImage(e) {
    let file
    if (e === false)
      file = null
    else {
      file = e.target.files[0];
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

    //const jsxCanvas = <canvas ref="canvas" />
    return <html className="App">
      <IconsClick/>
      <Sandbox/>
      <main className="App-header">

        <img src={face001} alt="face" ref="face001" id="face" className="facestyle"/>
        <img src={logo1} alt="fe" ref="logo" id="or" hidden={true}/>
        <img src={mask2} alt="fe" ref="mask2" id="mask2" hidden={true}/>
        <img src={giff} alt="fe" ref="giff" id="giff" style={giffstyle} hidden={false}/>
        <input type="file" multiple={true} id="file-input" src={logo1} hidden={true} onChange={this.changeImage.bind(this)} />
        <FaceChoose func={this.newface}/>
      </main>
    </html>;
  } // end render


} // end App



export default App;

