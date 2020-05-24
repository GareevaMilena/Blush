// ********************************************************
// Imports
// ********************************************************

import * as faceapi from 'face-api.js';
import overlay1 from './overlay.png';

// ********************************************************
// Const
// ********************************************************

const USE_TINY_MODEL = true;

// ********************************************************
// Class
// ********************************************************

export const getOverlayValues = landmarks => {
  const nose = landmarks.getNose()
  const jawline = landmarks.getJawOutline()

  const jawLeft = jawline[0]
  const jawRight = jawline.splice(-1)[0]
  const adjacent = jawRight.x - jawLeft.x
  const opposite = jawRight.y - jawLeft.y
  //const jawLength = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2))

  const nose_up = nose[0]
  //console.log ("levaya", nose_up.x - jawLeft.x )
  //console.log ("pravaya", jawRight.x - nose_up.x)
  let my_leftOffset;
  let my_topOffset;
  //if (nose_up.x - jawLeft.x > jawRight.x - nose_up.x)
  let levaya = Math.sqrt(Math.pow(nose_up.x - jawLeft.x, 2)+Math.pow(nose_up.y - jawLeft.y, 2));
  let pravaya = Math.sqrt(Math.pow(jawRight.x - nose_up.x, 2)+Math.pow(jawRight.y - nose_up.y, 2));
  let initial;
  initial = pravaya/levaya;
  console.log("initial", initial);
  my_leftOffset = (jawline[1].x + nose[4].x)/2;
  my_topOffset = (jawline[1].y + nose[4].y)/2;
  //else
   // console.log(my_leftOffset)
  // Both of these work. The chat believes atan2 is better.
  // I don't know why. (It doesn’t break if we divide by zero.)
  // const angle = Math.round(Math.tan(opposite / adjacent) * 100)
  const angle = Math.atan2(opposite, adjacent) * (180 / Math.PI)
  const width = Math.sqrt(Math.pow(nose_up.x - jawLeft.x, 2)+Math.pow(nose_up.y - jawLeft.y, 2))*0.7;
  let widthR = Math.sqrt(Math.pow(jawRight.x - nose_up.x, 2)+Math.pow(jawRight.y - nose_up.y, 2))*0.7;
  let my_right = (jawline[15].x + nose[4].x)/2;
  let topR = (jawline[15].y + nose[4].y)/2;

  //my_leftOffset += Math.abs(jawLength / width)
  //console.log("nn", nose[0].y - width * 0.47, jawLeft.x - width * 0.27);
  return {
    width,
    angle,
    leftOffset: my_leftOffset - width * 0.5,
    topOffset: my_topOffset - width * 0.5,
    widthR,
    my_right: my_right - widthR * 0.2,
    topR: topR - widthR * 0.45,
    initial
  }
}

export async function loadModels() {
  console.log('face-api create models...');
  const MODEL_URL = process.env.PUBLIC_URL + '/weights';
  await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
  await faceapi.loadFaceLandmarkTinyModel(MODEL_URL);
  await faceapi.loadFaceRecognitionModel(MODEL_URL);
  //await faceapi.loadFaceLandmarkModel(MODEL_URL);
  console.log('face-api loaded models!');
}

export async function getLandmarks(imageSrc) {
  const wImage = imageSrc.width;
  let scoreThreshold = 0.5;
  const options = new faceapi.TinyFaceDetectorOptions({
    wImage,
    scoreThreshold
  });
  console.log('face-api start detect face...');

  let fullDesc = await faceapi.detectAllFaces(imageSrc, options)
      .withFaceLandmarks(USE_TINY_MODEL)
      .withFaceDescriptors();

  let mask = overlay1;
  maskify(imageSrc, mask);

  console.log('face-api completed face detection.');
  //return detection;
  return fullDesc;
}

export async function maskify(imageSrc, mask){
  //const handleImage = (oldImage, newImage) => async () => {
  const detection = await faceapi
      .detectSingleFace(imageSrc, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks(true);

  if (detection !== undefined){
  const overlayValues = getOverlayValues(detection.landmarks);

  const scale = imageSrc.width / imageSrc.naturalWidth;
  if (!detection) {
    return
  }

  if (overlayValues.initial<0.5||(1/overlayValues.initial<0.5)){
    if (document.getElementById("or").alt === "en")
      alert("Face is too unproportional")
    if (document.getElementById("or").alt === "ru")
      alert("Слишком непропорциональное лицо")
    document.getElementById("giff").hidden=true
    return
  }

  let box = imageSrc.getBoundingClientRect();
  const overlay = document.createElement("img");
  //overlay.src = getRandomMask(masks)
  overlay.src = mask
  //"./logo2.png";
    console.log('overlayValues', overlayValues);
  overlay.alt = "mask overlay.";
  overlay.style.cssText = `
        position: absolute;
        left: ${overlayValues.leftOffset * scale + box.left +window.pageXOffset}px;
        top: ${overlayValues.topOffset * scale + box.top+ window.pageYOffset}px;
        width: ${overlayValues.width * scale}px;
        transform: rotate(${overlayValues.angle}deg);
      `
  imageSrc.appendChild(overlay);
  const image = new Image()
  image.crossOrigin = "Anonymous"
  //image.addEventListener("load", handleImage(imageSrc, image))
  //image.src = imageSrc.src
  //ctx.fillRect(0,0, wImage, hImage);

  // draw source image on screen

  //state={imageSrc: imageSrc, canvas: overlay1}
  //const canvas = state.canvas;
  //const imageS = state.imageSrc;
  let try1 = document.getElementById("or");
  let try2 = document.getElementById("or2")

  //try1.style.width = "200" +"px"
  //console.log("fsdfsfssd", overlay.style.left)
  try1.style.top = overlay.style.top;
  try2.style.top = (overlayValues.topR * scale + box.top+ window.pageYOffset).toString() + 'px';
  try1.style.left = overlay.style.left;
  try2.style.left = (overlayValues.my_right * scale + box.left +window.pageXOffset).toString() + 'px';
  try1.style.position = try2.style.position = "absolute";
  try1.style.width = overlay.style.width;
  try2.style.width = (overlayValues.widthR * scale).toString()+'px';
  try1.style.transform = try2.style.transform = overlay.style.transform;
  //try1.style.perspectiveOrigin = "0 50%";
  //try1.style.perspective =  "400px";
  //try1.style.opacity = "0.50"
  try1.hidden = try2.hidden = false;
  }
  else {
    if (document.getElementById("or").alt === "en")
      alert("No face was recognised")
    if (document.getElementById("or").alt === "ru")
      alert("Лицо не было найдено")
  }
  document.getElementById("giff").hidden=true

//не убирать!
  //let c = document.getElementById("canvas")
  //console.log(c)
  //let ctx = c.getContext('2d');
  //ctx.drawImage(imageSrc, 0, 0);
  //ctx.drawImage(overlay, overlayValues.leftOffset * scale, overlayValues.topOffset * scale);


  console.log('face-api detection.');
  //return detection;
}