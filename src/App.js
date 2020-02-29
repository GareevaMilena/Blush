import React, {useEffect} from 'react';
import {getLandmarks, loadModels} from './faceapi';
import face001 from './face0001.jpg';
import logo1 from './overlayBLUSH1.png';
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


onClickChoose(){

}

  // *********************************************
  render() {

    const styleImage = {
      display: 'none'
    };

    console.log('CHECK render');
    //const jsxCanvas = <canvas ref="canvas" />
    return <div className="App">
      <header className="App-header">

        <canvas id="canvas" width="0" height="0"></canvas>


        <img src={face001} alt="face" ref="face001"/>
        <img src={logo1} alt="fe" ref="logo" id="or" hidden={true}/>
      </header>
    </div>;
  } // end render


} // end App



export default App;

