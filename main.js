import {gsap} from "https://esm.sh/gsap";
import { ScrollTrigger } from "https://esm.sh/gsap/ScrollTrigger.js";
import {viewWebsite, GetData} from "./start.js";
export function VerifyWebAccess(encodeCode, encodeId, webData, type, url){
    $('head').append(`<link rel="stylesheet" href="https://namekinggamerboy.github.io/E-Commerce-Helper/main.css" /> 
<script src="https://namekinggamerboy.github.io/E-Commerce-Helper/function/function.js"></script>`);
url = "https://marvelous-legend-catboat.glitch.me";
  if(!type)type = "homepage";
  fetch(url+"/api/userFound", {
    method: "GET",
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer E-Commerce Helper Website '+encodeCode,
  },
  }).then(e => e.json()).then(body => {
    if(body.success){
  fetch(url+"/api/myWebsiteData", {
    method: "GET",
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer E-Commerce Helper Website ${body.data.code}`,
    'Id': `Bearer E-Commerce Helper Website ${encodeId}`,
    'Typeofweb': `Bearer ECH-${type}` 
  },
  }).then(e => e.json()).then(ok => {
     /* console.log("fetch body",body);
      console.log("getch ok",ok); */
    if(ok.success){
       viewWebsite({ success: true, data: ok.data }, webData, invertColor, navColorPicker);
    } else {
       viewWebsite({ success: false, code: ok.code, error: ok.error }, webData, invertColor, navColorPicker);
    }
    }).catch(er => {
       viewWebsite({ success: false, code: 500, error: ef }, webData, invertColor, navColorPicker);
    });
    } else {
       viewWebsite({ success: false, code: body.code, error: body.error }, webData, invertColor, navColorPicker);
    }
  }).catch(ef => {
       viewWebsite({ success: false, code: 500, error: ef }, webData, invertColor, navColorPicker);
  });
    let gh = GetData("data revied");
    return gh;
}
function setHtml(val, html){
return $("#"+val).html(html);
}
function invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // https://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186  ? '#000000' : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}
function navColorPicker(color) {
  if(color.replace("#", "") == "FFFFFF"){
    return "navbar-dark";
  } else if(color.replace("#", "") === "000000"){
    return "navbar-light";
  }
}
function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}
