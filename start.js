import {gsap} from "https://esm.sh/gsap";
import { ScrollTrigger } from "https://esm.sh/gsap/ScrollTrigger.js";

import {viewNavbar} from 'https://namekinggamerboy.github.io/E-Commerce-Helper/function/navbar.js';
import {viewFooter} from 'https://namekinggamerboy.github.io/E-Commerce-Helper/function/footer.js';

export function viewWebsite(body, webdata, invertColor, navColorPicker) {
   if(body.success){
      let ggscript = '';
      let desc = body.data.website.description;
      if(desc){
      if(desc.includes("[ECOM.STARTSCRIPT:")){
      if(!desc.includes("[ECOM.STARTSCRIPT:")) return;
      let inside = desc.split(`[ECOM.STARTSCRIPT:`)[1].split("]")[0];
      ggscript = inside;
      desc = desc.split(`[ECOM.STARTSCRIPT:${inside}]`).join(``);
      }
   }
   let nav = body.data.navbar;
  if(nav.navbar == true){
   viewNavbar(body, invertColor, navColorPicker);
  }
 let footer = body.data.footer;
  if(footer.footer == true){
    viewFooter(body, webdata, invertColor, navColorPicker);
  }
   document.getElementById("new2").innerHTML = desc;
      if(ggscript){
      setTimeout(function(){
      eval(ggscript); 
      }, 200);
      }
  $("#load").hide();    
  $("#body").show();
   console.clear();
 caches.keys().then(function(names) {
    for (let name of names)
        caches.delete(name);
});   
    } else {
      if(body.code < 400){
    $("#alertcss").html(`<link href="https://fonts.googleapis.com/css?family=Monoton" rel="stylesheet"><link href="https://namekinggamerboy.github.io/E-Commerce-Helper/servererror.css" rel="stylesheet">`); 
    $("#alert").html(`<div class="vc-container">
  <div class="vc-content">
    <h1 class="vc-heading">${body.code}</h1>
   <span class="blink-infinite">Error</span>
   <p class="vc-sub-heading">${body.error}</p>
  </div>
</div>`);
  $("#load").hide();
    $("#alert").show();
    } else if(body.code > 400){
  $("#load").hide();
    $("#alert").show();
    $("#alertcss").html(` <link href="https://namekinggamerboy.github.io/E-Commerce-Helper/error.css" rel="stylesheet">`); 
    $("#ern").html("10");
    $("#er").html("Server Error Please Contact<br>E-Commerce Helper!");
    console.log(body.error);
  }
}
}
