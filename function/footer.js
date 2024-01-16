import {gsap} from "https://esm.sh/gsap";
import { ScrollTrigger } from "https://esm.sh/gsap/ScrollTrigger.js";

export const viewFooter = (body, data, invertColor, navColorPicker) => {
  let footer = body.data.footer; 
  let nav = body.data.navbar;
  /* start link info */
  let pageLink = data.link;
  let socialLink = data.social;
  let careerLink = data.career;
  let otherLink = data.other;
  /* link info */
     let fo = "";
  if(footer.footer == true){
    if(nav.type === 1||nav.type === 2){
fo = `<footer id="sticky-footer" class="flex-shrink-0 py-4 text-50" style="background: ${footer.color}; color: ${invertColor(footer.color,'#000000', '#FFFFFF')}">
     <div class="container">
    <div class="row">
      <div class="col-md-4">`;
       if(body.data.website.name.includes(" ")){
         if(!body.data.website.name.includes(" ")) return  fo += `<h5 class="footer-logo">${body.data.website.name}</h5>`;
         let ho = body.data.website.name.split(" ")[1];
         let bo = body.data.website.name.split(" ")[0];
        fo += `<h5 class="footer-logo">${bo} <span style="color: ${data.footerColor ? data.footerColor : invertColor(footer.color,'#000000', '#FFFFFF')};">${ho}</span></h5>`;
       } else {
         fo += `<h5 class="footer-logo">${body.data.website.name}</h5>`;
       }
      fo +=  `<p>${footer.text}</p></div>`;
      if(pageLink.length){
      fo += `<div class="col-md-4"><h5>Quick Links</h5><ul class="footer-links" style="color: ${invertColor(footer.color,'#000000', '#FFFFFF')}">`;
       pageLink.map(link => { 
        fo += `<li><a href="${link.url}">${link.title}</a></li>`;
       });
       fo += `</ul></div>`;
      }
      if(careerLink.length){
      fo += `<div class="col-md-4"><h5>Careers</h5><ul class="footer-links" style="color: ${invertColor(footer.color,'#000000', '#FFFFFF')}">`;
       careerLink.map(clink => { 
        fo += `<li><a href="${clink.url}">${clink.title}</a></li>`;
       });
       fo += `</ul></div>`;
      }
      if(otherLink.length){
      fo += `<div class="col-md-4"><h5>Other Services</h5><ul class="footer-links" style="color: ${invertColor(footer.color,'#000000', '#FFFFFF')}">`;
       otherLink.map(olink => { 
        fo += `<li><a href="${olink.url}">${olink.title}</a></li>`;
       });
       fo += `</ul></div>`;
      }
      if(socialLink.length){
      fo += `<div class="col-md-4">
        <h5>Follow Us</h5><ul class="social-icons" style="color: ${invertColor(footer.color,'#000000', '#FFFFFF')}">`;
        socialLink.map(slink => {
          if(slink.name.endsWith("Btn")){
         fo += `<li><a href="${slink.url}" target="_blank" id="${slink.name}"><i class="${slink.title}"></i></a></li>`;
          }
        });
        fo += `</ul></div>`;
      }
    fo += `</div></div></footer>`;  
  } else if(nav.type === 3){
    fo = `<div class="footer-clean"  style="background: ${footer.color}; color: ${invertColor(footer.color,'#000000', '#FFFFFF')};">
        <footer>
            <div class="container">
                <div class="row justify-content-center">`;
                 if(otherLink.length){
         fo += `<div class="col-sm-4 col-md-3 item"><h3>Services</h3><ul>`;
                    otherLink.map(olink => {         
                   fo += `<li><a href="${olink.url}">${olink.title}</a></li>`;
                    });
                        fo += `</ul></div>`;
                 }
                    if(pageLink.length){
                    fo += `<div class="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>`;
                      pageLink.map(link => { 
              fo += `<li><a href="${link.url}">${link.title}</a></li>`;
                       });
                        fo += `</ul></div>`;
                    }
                    if(careerLink.length){
                    fo += `<div class="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>`;
                    careerLink.map(clink => { 
                    fo += `<li><a href="${clink.url}">${clink.title}</a></li>`;
                             });
                        fo += `</ul></div>`;
                        }
                  if(socialLink.length){
                  fo += `<div class="col-lg-3 item social">`;
                  socialLink.map(slink => {
          if(slink.name.endsWith("Btn")){
         fo += `<a href="${slink.url}" target="_blank" id="${slink.name}"><i class="${slink.title}"></i></a>`;
          }
        });
                    `</div>`;
                  }
                fo += `<div class="col-lg-3" style="width: max-content;"><p class="copyright">${footer.text}</p></div></div>
            </div>
        </footer>
    </div>`;
  }
     document.getElementById("footer").innerHTML =  fo; 
  }
}
