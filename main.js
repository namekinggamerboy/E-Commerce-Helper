function VerifyWebAccess(encodeCode, url){
var data = '',
    code = 100,
    error = '';
url = "https://marvelous-legend-catboat.glitch.me";
$(document).ready(function() { 
$("#body").hide();
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
     'Id': "Bearer E-Commerce Helper Website cW9zamRmag=="
  },
  }).then(e => e.json()).then(body => {
    if(body.success){
      data = body.data;
    } else {
      code = body.code;
      error: body.error;
    }
    }).catch(er => {
    code = 500;
    error = er;
    });
    } else {
      code = body.code;
      error: body.error;
    }
  }).catch(ef => {
    code = 500;
    error = ef;
  });
});
  if(code == 200){
  return { success: true, data: data };
  } else if(code == 500) {
  return { success: false, error: error };
  } else if(code > 9||code < 99){
    return { success: false, code: code, error: error, data: data };
  }
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
