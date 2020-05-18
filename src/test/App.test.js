import {getOverlayValues} from "../faceapi";
const fetch = require('node-fetch');
const faceApi = require("face-api.js");
const canvas = require("canvas");
const fs = require('fs');
const {Canvas, Image, ImageData} = canvas;
const {abs} = Math;

faceApi.env.monkeyPatch({fetch, Canvas, Image, ImageData});

const inputData = JSON.parse(fs.readFileSync(__dirname + '/values.json', 'utf8'));

const MODEL_URL = __dirname + "/weights";
export async function loadModels() {
  await faceApi.nets.ssdMobilenetv1.loadFromDisk(MODEL_URL);
  await faceApi.nets.faceLandmark68Net.loadFromDisk(MODEL_URL);
  await faceApi.nets.faceLandmark68TinyNet.loadFromDisk(MODEL_URL);
}

describe('Start test', function () {


  for (const data of inputData) {
    doTest1(data);
  }
});

function doTest1(data) {
  it(`[${data.srcImg}] :correct face recognition`, async function () {
    await loadModels();
    const img = await canvas.loadImage(__dirname + '/' + data.srcImg);
    const detection = await faceApi.detectSingleFace(img).withFaceLandmarks(true);
    let test_width, test_angle, test_left, test_top = false
    let overlay = null;
    if (detection!==undefined){
      overlay = getOverlayValues(detection.landmarks);
      test_width = abs(overlay.width-data.theoryPoints.width)<20;
      test_angle = abs(overlay.angle-data.theoryPoints.angle)<5;
      test_left = abs(overlay.leftOffset-data.theoryPoints.leftOffset)<15;
      test_top = abs(overlay.topOffset-data.theoryPoints.topOffset)<15;
    }
    expect(test_width&&test_angle&&test_left&&test_top).toBe(true);
  });
}
