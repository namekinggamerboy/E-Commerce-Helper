# E-Commerce-Helper
E-Commerce Helper web helper (general) javascript and css


ex.
```html
<script type="module">
    import {VerifyWebAccess} from "https://namekinggamerboy.github.io/E-Commerce-Helper/main.js";
$(document).ready(function() { 
$("#body").hide();
  VerifyWebAccess("< token id >",{
     footerColor: "plum",
     link: [{
      title: 'home',
      url: '/'
 }], social: [{
      name: "instagramBtn",
      title: 'fab fa-instagram',
      url: "/instgram.com"
    },{
      name: "facebookBtn",
      title: "fab fa-facebook",
      url: "/facebook.com"
    }
  ], career: [{
      title: 'job',
      url: '/'
  }], other: [{
      title: 'grow report',
      url: '/'
  }]
  });
});
  </script>
```
