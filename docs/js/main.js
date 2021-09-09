"use strict"

import {Background} from './background.js';

let canvas = document.getElementById('background');
let context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let background = new Background('img/old-paper.jpg',
    'img/dust-far.jpg',
    'img/dust-near.jpg',
    'img/vignette.png',
    'img/scanlines.png');

let drawBackground = function (time) {
    background.draw(context, canvas, time);
};

const refreshRate = 60;

window.setInterval(() => {
  drawBackground(30)
}, refreshRate);