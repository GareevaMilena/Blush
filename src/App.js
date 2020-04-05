import React from 'react';
import {getLandmarks, loadModels} from './faceapi';
import IconsClick from './iconsClick';
import {faces} from "./faceChoose";
import FaceChoose from "./faceChoose";
import face001 from './images/faces/face0001.jpg';
//import logo1 from './images/overlay/overlayBLUSH1.png';
import logo1 from './overlay.png';
import mask2 from './images/overlay/overlayBLUSH2.png'
import giff from './logo1.gif'
import "./styles.css"

import Sandbox from "./sandbox";
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
    this.Wheel = this.Wheel.bind(this);
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
    document.getElementById("face").style.transform = document.getElementById("face").style.WebkitTransform =
        document.getElementById("face").style.MsTransform ='scale(1.00)';
    let scalestring = document.getElementById("or").style.transform;
    console.log(scalestring, scalestring.indexOf(")")+1)
    scalestring = scalestring.slice(0, scalestring.indexOf(")")+1) + ' scale(1.00)';
    document.getElementById("or").style.transform = scalestring
    //document.getElementById("face").style.transformOrigin = 'top left'
    //document.getElementById("or").style.transformOrigin = 'top left'
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
        document.getElementById("face").style.transform = document.getElementById("face").style.WebkitTransform =
            document.getElementById("face").style.MsTransform ='scale(1.00)';
        let scalestring = document.getElementById("or").style.transform;
        scalestring = scalestring.slice(0, scalestring.indexOf(")")+1) + ' scale(1.00)';
        document.getElementById("or").style.transform = scalestring
        document.getElementById("giff").hidden = false
        document.getElementById("or").hidden = true
        let try1 = document.getElementById("face")
        try1.src = b
        this.processImage(this.state.imageSrc);
      }
    }
  }

  Wheel(e){
    //if (document.getElementById("face").style.transform.charAt(0) ==="s")
    if (document.getElementById("or").style.transform.includes("s"))
    {
    let scalestring = document.getElementById("face").style.transform
    scalestring = scalestring.charAt(6) + scalestring.charAt(7) + scalestring.charAt(8) + scalestring.charAt(9)
    let scale = parseFloat(scalestring)
    if (e.deltaY <= 0) {
      if (scale <= 1.95)
        scale += 0.05;
    }
    else{
      if (scale >=0.55)
        scale -= 0.05;
    }
    scalestring = document.getElementById("or").style.transform;
      scalestring = scalestring.slice(0, scalestring.indexOf("le(")+3) + scale +')';
    document.getElementById("face").style.transform = document.getElementById("face").style.WebkitTransform =
        document.getElementById("face").style.MsTransform = 'scale(' + scale + ')';
      document.getElementById("face").style.transformOrigin = document.getElementById("face").style.WebkitTransformOrigin
          = document.getElementById("face").style.MsTransformOrigin = '0 0'
    document.getElementById("or").style.transform = document.getElementById("or").style.WebkitTransform =
       document.getElementById("or").style.MsTransform = scalestring;
      let top_x = document.getElementById("or").style.top;
      let top_left = document.getElementById("or").style.left;
      top_left = parseFloat(top_left)
      document.getElementById("or").style.transformOrigin =
          document.getElementById("or").style.WebkitTransformOrigin = document.getElementById("or").style.MsTransformOrigin =
      '-'+parseFloat(top_x)+ 'px -' + top_left+'px'

      //console.log('cho', document.getElementById("face").style.tran, document.getElementById("or").style.transformOrigin)
    /*console.log(document.getElementById("face").style.transform ,document.getElementById("or").style.transform)
    let for_width = Math.abs(scale -1)/0.05;
    let top = document.getElementById("or").style.top;
    top = top.slice(0, top.indexOf("px"));
    document.getElementById("or").style.top = parseFloat(top) -
        (document.getElementById("face").width*Math.pow(scale, for_width)-document.getElementById("face").width*Math.pow(scale, for_width-1))/2 +'px';
    console.log("top", document.getElementById("or").style.top)*/
      // let for_width = Math.abs(scale -1)/0.05;
      // console.log("for_width", scale, for_width)
      // let top = document.getElementById("or").style.top;
      // document.getElementById("or").style.top = parseFloat(top) - scale*for_width +'px'
    }
    else
    {
      document.getElementById("face").style.transform = 'scale(1.00)';
      document.getElementById("or").style.transform += 'scale(1.00)';
    }
    //this.processImage(this.state.imageSrc);
  }
  // *********************************************
  render() {

    //const jsxCanvas = <canvas ref="canvas" />
    return <div className="App">
      <IconsClick/>
      <Sandbox/>
      <main className="App-header">

        <img src={face001} alt="face" ref="face001" id="face" onWheel={this.Wheel} className="facestyle"/>
        <img src={logo1} alt="en" ref="logo" id="or" onWheel={this.Wheel} hidden={true}/>
        <img src={mask2} alt="fe" ref="mask2" id="mask2" hidden={true}/>
        <img src={giff} alt="fe" ref="giff" id="giff" className="giffstyle" hidden={false}/>
        <input type="file" multiple={true} id="file-input" src={logo1} hidden={true} onChange={this.changeImage.bind(this)} />
        <FaceChoose func={this.newface}/>
      </main>
    </div>;
  } // end render


} // end App



export default App;

