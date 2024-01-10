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
        fo += `<h5 class="footer-logo">${bo} <span>${ho}</span></h5>`;
       } else {
         fo += `<h5 class="footer-logo">${body.data.website.name}</h5>`;
       }
      fo +=  `<p>${footer.text}</p>
      </div>
      <div class="col-md-4">
        <h5>Quick Links</h5>
        <ul class="footer-links" style="color: ${invertColor(footer.color,'#000000', '#FFFFFF')}">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h5>Follow Us</h5>
        <ul class="social-icons" style="color: ${invertColor(footer.color,'#000000', '#FFFFFF')}">
          <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
  </footer>`;  
  } else if(nav.type === 3){
    fo = `<div class="footer-clean"  style="background: ${footer.color}; color: ${invertColor(footer.color,'#000000', '#FFFFFF')};">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Legacy</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="#">Job openings</a></li>
                            <li><a href="#">Employee success</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 item social"><a href="#"><i class="icon ion-social-facebook" style="color: ${invertColor(footer.color,'#000000', '#FFFFFF')}"></i></a>
                    <a href="#"><i class="icon ion-social-twitter" style="color: ${invertColor(footer.color,'#000000', '#FFFFFF')};"></i></a>
    <a href="#"><i class="icon ion-social-snapchat" style="color: ${invertColor(footer.color,'#000000', '#FFFFFF')}"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a>
                        <p class="copyright">${footer.text}</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>`;
  }
     document.getElementById("footer").innerHTML =  fo; 
  }
}
