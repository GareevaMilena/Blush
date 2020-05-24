import React from 'react';
import {getLandmarks, loadModels} from './faceapi';
import IconsClick from './iconsClick';
import {faces} from "./faceChoose";
import FaceChoose from "./faceChoose";
import face001 from './images/faces/face0001.jpg';
import logo1 from './images/overlay/blush1left.png';
import logo1r from './images/overlay/blush1right.png';
//import logo1 from './overlay.png';
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
    this.DragStart=this.DragStart.bind(this);
    this.DragEnd=this.DragEnd.bind(this);
    this.state ={
      mouseX: 0,
      mouseY: 0
    }
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
    //console.log("faceRef", faceRef);
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
      //console.log('fullDescription', getLandmarks(imageSrc));
      //console.log('imag', imageSrc);

      this.setState({fullDesc: fullDescription});
    });
  };

  newface(index){
    let try1 = document.getElementById("face")
    try1.src = faces[index]
    //document.getElementById("face").height = 100
    if(parseFloat(document.documentElement.clientWidth) >= 700)
      document.getElementById("face").style.left ='80px'
    else
      document.getElementById("face").style.left ='40px'
    document.getElementById("face").style.top ='0px'
    document.getElementById("giff").hidden=false
    document.getElementById("or").hidden=true
    document.getElementById("or2").hidden=true
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
        /*document.getElementById("face").style.transform = document.getElementById("face").style.WebkitTransform =
            document.getElementById("face").style.MsTransform ='scale(1.00)';
        let scalestring = document.getElementById("or").style.transform;
        scalestring = scalestring.slice(0, scalestring.indexOf(")")+1) + ' scale(1.00)';
        document.getElementById("or").style.transform = scalestring*/
        if(parseFloat(document.documentElement.clientWidth) >= 700)
          document.getElementById("face").style.left ='80px'
        else
          document.getElementById("face").style.left ='40px'
        document.getElementById("face").style.top ='0px'
        document.getElementById("giff").hidden = false
        document.getElementById("or").hidden = true
        document.getElementById("or2").hidden = true
        let try1 = document.getElementById("face")
        try1.src = b
        this.processImage(this.state.imageSrc);
      }
    }
  }

  DragEnd(e){
    document.getElementById("face").style.left = '' + (parseFloat(document.getElementById("face").style.left)
        +e.clientX - this.state.mouseX) +'px'
    document.getElementById("face").style.top = '' + (parseFloat(document.getElementById("face").style.top)
        +e.clientY - this.state.mouseY) +'px'
    document.getElementById("or").style.left = '' + (parseFloat(document.getElementById("or").style.left)
        +e.clientX - this.state.mouseX) +'px'
    document.getElementById("or").style.top = '' + (parseFloat(document.getElementById("or").style.top)
        +e.clientY - this.state.mouseY) +'px'
    this.processImage(this.state.imageSrc);
  }


  DragStart(e){
    if (!document.getElementById("face").style.left.includes("px")){
      if(parseFloat(document.documentElement.clientWidth) >= 700)
      document.getElementById("face").style.left ='80px'
      else
        document.getElementById("face").style.left ='40px'
      document.getElementById("face").style.top ='0px'
    }
    //console.log('kjjkbb', document.getElementById("or").style.top)
    this.setState({mouseX: e.clientX})
    this.setState({mouseY: e.clientY})
  }

  Wheel(e){
    document.getElementById("face").style.maxHeight = "none"
    let scalestring = document.getElementById("face").height
    console.log(scalestring)
    let scale = parseFloat(scalestring)
    if (e.deltaY <=0)
      document.getElementById("face").height = scale * 1.05
    else
      document.getElementById("face").height = scale / 1.05
    this.processImage(this.state.imageSrc);
  }

  // *********************************************
  render() {
    //const jsxCanvas = <canvas ref="canvas" />
    return <div className="App">
      <IconsClick/>
      <Sandbox/>
      <main className="App-header">
        <img src={face001} alt="face" ref="face001" id="face" onWheel={this.Wheel}
             onDragStart={this.DragStart} onDragEnd={this.DragEnd} className="facestyle"/>
        <img src={logo1} alt="en" ref="logo" id="or"
             onDragStart={this.DragStart} onDragEnd={this.DragEnd} onWheel={this.Wheel} hidden={true}/>
        <img src={logo1r} alt="en" ref="logo" id="or2"
             onDragStart={this.DragStart} onDragEnd={this.DragEnd} onWheel={this.Wheel} hidden={true}/>
        <img src={mask2} alt="fe" ref="mask2" id="mask2" hidden={true}/>
        <img src={giff} alt="fe" ref="giff" id="giff" className="giffstyle" hidden={false}/>
        <input type="file" multiple={true} id="file-input" accept="image/*,image/jpeg" src={logo1} hidden={true} onChange={this.changeImage.bind(this)} />
        <FaceChoose func={this.newface}/>
      </main>
    </div>;
  } // end render


} // end App



export default App;

