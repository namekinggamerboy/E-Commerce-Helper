import {gsap} from "https://esm.sh/gsap";
import { ScrollTrigger } from "https://esm.sh/gsap/ScrollTrigger.js";

export const viewNavbar = (body, invertColor, navColorPicker) => {
     let nav = body.data.navbar;
   let navbar = "";
  if(nav.type === 1){
  navbar = `<nav class="navbar navbar-expand-lg ${navColorPicker(invertColor(nav.color, '#FFFFFF', '#000000'))}" style="background: ${nav.color}; color: ${invertColor(nav.color,'#000000', '#FFFFFF')};">
  <div class="container-fluid">`;
    if(nav.logo){
    navbar += `<a class="navbar-brand mb-0 h1" href="/" style="color: ${invertColor(nav.color,'#000000', '#FFFFFF')};"><img src="${body.data.website.logo}" alt="Logo" class="d-inline-block align-text-top" style="width: 30px; height:30px; border-radius: 50%;"> ${body.data.website.name}</a>`;
    } else {
      navbar += `<a class="navbar-brand mb-0 h1" href="/" style="color: ${invertColor(nav.color,'#000000', '#FFFFFF')};">${body.data.website.name}</a>`;
    }
     
   navbar += `<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">`;
      nav.bar.map(e => {
     navbar += `<li class="nav-item">
          <a class="nav-link" aria-current="page" href="${e.url}" style="color: ${invertColor(nav.color,'#000000', '#FFFFFF')};">${e.name}</a>
        </li>`;
     });
   navbar += `</ul>
    </div>
  </div>
</nav>`;
  } else if(nav.type === 2){
 navbar = `<nav class="navbarFullscr" style="background: ${nav.color}; color: ${invertColor(nav.color,'#000000', '#FFFFFF')};">`;
 if(nav.logo){
    navbar += `<span style="color: ${invertColor(nav.color,'#000000', '#FFFFFF')}; font-size:30px;cursor:pointer; margin: 0;" onclick="openNav();">&#9776; <img src="${body.data.website.logo}" alt="Logo" class="d-inline-block align-text-top" style="width: 30px; height:30px; border-radius: 50%;"> ${body.data.website.name}</span>`;
    } else {
      navbar += `<span style="color: ${invertColor(nav.color,'#000000', '#FFFFFF')};font-size:30px;cursor:pointer; margin: 0;" onclick="openNav();">&#9776; ${body.data.website.name}</span>`;
    }
    navbar += `</nav><div id="myNavbar1" class="navbaroverlay">
<div><b class="title">${body.data.website.name}</b>
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav();"> &times;</a></div>
  <div class="navbaroverlay-content">`;
    nav.bar.map(e => {
    navbar += `<a href="${e.url}">${e.name}</a>`;
    });
  navbar += `</div></div>`;
  }
     document.getElementById("navbar").innerHTML =  navbar; 
}
