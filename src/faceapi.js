// ********************************************************
// Imports
// ********************************************************

import * as faceapi from 'face-api.js';
import overlay1 from './logo2.png';
// ********************************************************
// Const
// ********************************************************

const USE_TINY_MODEL = true;

// ********************************************************
// Class
// ********************************************************

const getOverlayValues = landmarks => {
  const nose = landmarks.getNose()
  const jawline = landmarks.getJawOutline()

  const jawLeft = jawline[0]
  const jawRight = jawline.splice(-1)[0]
  const adjacent = jawRight.x - jawLeft.x
  const opposite = jawRight.y - jawLeft.y
  const jawLength = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2))

  console.log(jawRight.x - jawLeft.x, jawRight.y - jawLeft.y);
  // Both of these work. The chat believes atan2 is better.
  // I don't know why. (It doesn’t break if we divide by zero.)
  // const angle = Math.round(Math.tan(opposite / adjacent) * 100)
  const angle = Math.atan2(opposite, adjacent) * (180 / Math.PI)
  const width = jawLength * 2.2

  return {
    width,
    angle,
    leftOffset: jawLeft.x - width * 0.27,
    topOffset: nose[0].y - width * 0.47,
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
  /*const detection = await faceapi
      .detectSingleFace(imageSrc, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks(true);

  const overlayValues = getOverlayValues(detection.landmarks);

  const scale = imageSrc.width / imageSrc.naturalWidth;
  console.log("scale", scale);
  const overlay = document.createElement("img");
  //overlay.src = getRandomMask(masks)
  overlay.src = overlay1
      //"./logo2.png";
  overlay.alt = "mask overlay.";
  overlay.style.cssText = `
        position: absolute;
        left: ${overlayValues.leftOffset * scale}px;
        top: ${overlayValues.topOffset * scale}px;
        width: ${overlayValues.width * scale}px;
        transform: rotate(${overlayValues.angle}deg);
      `

  console.log(overlayValues.leftOffset*scale);
  console.log(overlayValues.topOffset*scale);
  imageSrc.appendChild(overlay);*/

  console.log('face-api completed face detection.');
  //return detection;
  return fullDesc;
}
export async function maskify(imageSrc){

  const detection = await faceapi
      .detectSingleFace(imageSrc, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks(true);

  const overlayValues = getOverlayValues(detection.landmarks);

  const scale = imageSrc.width / imageSrc.naturalWidth;
  console.log("scale", scale);
  if (!detection) {
    return
  }
  const overlay = document.createElement("img");
  //overlay.src = getRandomMask(masks)
  overlay.src = overlay1
  //"./logo2.png";
  overlay.alt = "mask overlay.";
  overlay.style.cssText = `
        position: absolute;
        left: ${overlayValues.leftOffset * scale}px;
        top: ${overlayValues.topOffset * scale}px;
        width: ${overlayValues.width * scale}px;
        transform: rotate(${overlayValues.angle}deg);
      `

  console.log(overlayValues.width);
  console.log(overlayValues.topOffset*scale);
  imageSrc.appendChild(overlay);
  console.log('face-api detection.');
  //return detection;
}

