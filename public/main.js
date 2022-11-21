/*
Perkedel's base JavaScript for Perkedel's raw websites
*/

// https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
// import { jQuery } from 'https://code.jquery.com/jquery-3.6.1.min.js';
// import { mermaid } from 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js';
// import { zeromd } from 'https://cdn.jsdelivr.net/gh/zerodevx/zero-md@2/dist/zero-md.min.js';
// const jQuery =
//     import ('https://code.jquery.com/jquery-3.6.1.min.js');
// import * as jQuery from 'https://code.jquery.com/jquery-3.6.1.min.js';
// import 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js';
// import 'https://code.jquery.com/jquery-3.6.1.min.js';
// import '/node_modules/focus-visible/dist/focus-visible.min.js';
// import Toastify from 'toastify-js';
// import Toastify from '/node_modules/toastify-js';

/*
noscript. built-in standard tag for if JS disabled
- https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element
- https://stackoverflow.com/questions/121203/how-to-detect-if-javascript-is-disabled
- https://www.youtube.com/watch?v=j5Sl6vx_l1s
*/

/*
How to link JS to HTML
script must be inside body & the last line.
da-header must be on the top underneath script & da-footer on the most bottom.
old
```
<body>
  <script src="/main.js"></script>
  <da-header></da-header>
  
  ..your content here..
  
  <da-footer>/da-footer>
</body>
```
new
```
<body>
  
  ..your content here..
  
  <script src="/main.js"></script>
</body>
```
- https://linuxhint.com/link-javascript-to-html/
*/

// Damnit, this kills the Archive widget. pls help me figure out how to prevent these mechanics from killing the Wayback Machine widget!!! cool and good thanccc..

/*
https://stackoverflow.com/a/12369387/9079640
https://www.w3schools.com/js/js_switch.asp
https://www.w3schools.com/cssref/pr_class_cursor.asp
https://www.w3schools.com/cssref/playit.asp?filename=playcss_cursor
*/
var entireSelect = document.getElementsByTagName("*");
var entireCounts = entireSelect.length;
for (var i = 0; i < entireCounts; i++) {
    /*
    if(window.getComputedStyle(entireSelect[i]).cursor == "pointer") {
        entireSelect[i].style.cursor = "url(https://github.com/Perkedel/After-Church/raw/master/RAW%20files/cursor.cc/VacuumSkoll.cur), default";
    }
    */
    switch (window.getComputedStyle(entireSelect[i]).cursor) {

        case 'default':
            entireSelect[i].style.cursor = "url(https://github.com/Perkedel/After-Church/raw/master/RAW%20files/cursor.cc/VacuumSkoll.cur), default";
            break;

        case 'wait':
            entireSelect[i].style.cursor = "url(https://github.com/Perkedel/After-Church/raw/master/RAW%20files/Cursor/Gravity%20Wait.ani), wait";
            break;

        case 'pointer':
            entireSelect[i].style.cursor = "url(http://www.rw-designer.com/cursor-extern.php?id=181168), url(https://github.com/Perkedel/After-Church/raw/master/RAW%20files/rw-designer/Donut-select.cur), pointer";
            break;
            /*
            default:
              entireSelect[i].style.cursor = "url(https://github.com/Perkedel/After-Church/raw/master/RAW%20files/cursor.cc/VacuumSkoll.cur), default";
              break;
            */
    }
}

/*
Reusable Component pls!
- https://medium.com/front-end-weekly/how-to-build-reusable-html-components-without-component-based-frameworks-2f7747f4c5db
- https://dev.to/anuradha9712/create-reusable-web-components-in-html-1llc
- https://www.educba.com/javascript-append/
- https://stackoverflow.com/questions/60722734/how-can-i-append-html-code-using-javascript
- https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript
- https://ezgif.com for gif tools
- https://stackoverflow.com/questions/1347675/html-img-scaling
- https://www.w3schools.com/tags/att_img_width.asp
*/
/*
class daHeader extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <header>
      <h1><img src="/favicon.gif"><a href="/">Perkedel NECT</a></h1>
    </header>
    <hr>
    <nav>
      <ul>
        <li class="NavPutLeft"><a title="Go back one level in address bar path" href=".." class="NavBtn">&#xf053;</a></li>
        <li class="NavPutLeft"><a title="Go home to root of this website" href="/" class="NavBtn">🏠 Home &#xf015;</a></li>
        <li class="NavPutLeft"><a title="Go to apps page, list of applications" href="/apps" class="NavBtn">📦 Applications &#xf53a;</a></li>
        <!--<li class="NavPutLeft"><a title="Go back one level in address bar path" href=".." class="NavBtn">&#xf049; BACK &#xf9d4;</a></li>-->
        
        
        <li class="NavPutRight dropdown">
          <a class="dropbtn NavBtn" title="Open Menu">&#xea7c;</a>
          
          <div class="dropdown-content">
            <a title="View this page source" href="view-source://." class="NavBtn">View Source &#xe771;</a>
          </div>
        </li>
        <li class="NavPutRight"><a title="Go read our Privacy Policy" href="/privacy_policy" class="NavBtn">📜 Privacy Policy &#xf069;</a></li>
        <li class="NavPutRight"><a title="Go read about us & our white paper stuffs" href="/about" class="NavBtn">📃 About &#xf05a;</a></li>
        
      </ul>
    </nav>
    <hr>
    `;  
    // this.innerHTML = '<object type="text/html" data="/__header.html" ></object>';
  }
}

class daFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <footer>
      <hr>
      <p><img width="50em" src="/Perkedel Icon.png"/> <font size = "12">Perkedel Technologies</font></p>
      <p>Powered by <a href="https://neocities.org" target="_blank" rel="noopener noreferrer">Neocities</a></p>
      <font size=2><p>DISCLAIMER:</p> 
        <ul>
          <li><b>Neocities never put watermark</b>, I just write my own just to let you know how, yeah.</li>
          <li>This website like many is stored on regular centralized system, specifically static cloud type whatever Neocities said. Therefore we do not endorse using such service other than for clout purpose<br>With that of course, there is already as usual high risk of DMCA attacks & abuse. </li>
        </ul>
        <p>Content = CC4.0-BY-SA<br>Website = GNU AGPLv3</p>
        <a target="_blank" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a target="_blank" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
        <br>
        <a target="_blank" rel="license" href="https://www.gnu.org/licenses/agpl-3.0.html"><img src="https://www.gnu.org/graphics/agplv3-with-text-162x68.png" width="100px"/></a>
      </font>
      <p>© Perkedel Technologies, Some Rights Reserved</p>
    </footer>
    `;  
    // this.innerHTML = '<object type="text/html" data="/__footer.html" ></object>'; // not working! it put those inside a box!
  }
}

customElements.define('da-header', daHeader);
customElements.define('da-footer', daFooter);
// customElements.define('back-to-top-btn', daBackTopTopButton);
*/

/* Base Document
- https://www.educba.com/javascript-append/
*/
// document.ready(function(){
// element.innerHTML = "<da-header></da-header>" + element.innerHTML + "<da-footer></da-footer>";
// });
// document.body.innerHTML = `<da-header></da-header> <main>` + document.body.innerHTML + `</main> <back-to-top-btn></back-to-top-btn> <da-footer></da-footer>`;
// document.body.innerHTML = `<da-header></da-header> <main>` + document.body.innerHTML + `</main> <button onclick="topFunction()" id="backTopButton" title="Back To Top">&#xf63e; 🔝 TOP ☝️ &#xf148;</button> <da-footer></da-footer>`;

// & the scroll to top function pls. https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// Get the button:
let myBackTopbutton = document.getElementById("backTopButton");
let myNavBtnClass = document.getElementsByClassName("NavBtn");
let myNavBar = document.getElementsByTagName("nav");

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBackTopbutton.style.display = "block";
        // myNavBtnClass.stule.opacity = .5;
        for (let thingy of myNavBtnClass) {
            thingy.style.opacity = 0.8;
        }
    } else {
        myBackTopbutton.style.display = "none";
        // myNavBtnClass.stule.opacity = 1;
        // myNavBar.style.opacity = 1;
        for (let thingy of myNavBtnClass) {
            thingy.style.opacity = 1;
        }
    }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

class daBackTopTopButton extends HTMLElement {
    // https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
    connectedCallback() {
        this.innerHTML = `
      <button onclick="topFunction()" id="backTopButton" title="Back To Top">&#xf63e; 🔝 TOP ☝️ &#xf148;</button>
      `
    }
}

// PLS PUT HERE INSTEAD
function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

// function plsCopyThe(thing){
function plsCopyThe(thing) {

    // to clipboard pls
    // Get the text field
    // var thing = location.href;

    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(thing);
        return;
    }

    // // Select the text field
    // thing.select();
    // thing.setSelectionRange(0, 99999); // For mobile devices

    // // Copy the text inside the text field
    // navigator.clipboard.writeText(thing.value);
    navigator.clipboard.writeText(thing).then(function() {
        console.log('Async: Copied the `' + thing + '`');
    }, function(err) {
        console.error('WERROR: Async: Could not copy text `' + thing + '`: ', err);
    });

}

function plsCopyTheURL() {
    plsCopyThe(location.href);
    // https://github.com/apvarun/toastify-js
    // https://apvarun.github.io/toastify-js/#
    Toastify({
        text: `Copied the URL ` + location.href + ` to clipboard`,
        duration: 3000,
        gravity: "bottom",
        position: "left",
        style: {
            background: "linear-gradient(to right, #000022, #002222)",
        },
        onClick: function() {},
    }).showToast();
}

function URLInfoPls() {
    alert(`URL Info for:\n` + location.href + `\n\nPathname: ` + location.pathname + `\nOrigin: ` + location.origin + `\n`);
    // alert(`URL Info for:\n`+{Astro.url.href}+`\n\nPathname: `+{Astro.url.pathname}+`\nOrigin: `+location.origin+`\n`);
}

customElements.define('back-to-top-btn', daBackTopTopButton);
// end scroll to top

// PURE JSON GET
// https://stackoverflow.com/a/2499647/9079640
function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] ||
        document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

let kludgeringDatasoid;
let daWordOfIt = [];



// Generate Word pls
// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
// https://stackoverflow.com/questions/13237421/how-to-generate-random-words-in-javascript
// https://randomwordgenerator.com/
// https://www.w3schools.com/js/js_json_parse.asp
// https://stackoverflow.com/questions/50401390/promises-fetch-in-javascript-how-to-extract-text-from-text-file
// https://stackoverflow.com/a/12460434/9079640
let daWord = [
    'Hello World',
    "Pincore",
    "reddymen",
    "Segment",
    "Achieve",
    "Goaler",
    "<b>HEH SHOO <a href='https://youtu.be/4vGoth137VQ' target='blank' rel='noopener noreferrer'>💥💥💥💥💥</a>!!!</b>",
    "Attrend",
    "Reugol",
    // "cally make this $0 wtf!!! I'm gonna use all my salary to get this done, so peck you!",
];
let miniGenWord = [
    'HA',
    'HU',
    'HEH',
    'KURIK',
];
// getJSONP('/generateWord.jsonc', function(data) {

//     daWord = data.daWord;
//     console.log(daWord);
// });
// getJSONP('/generateWord.json', function(data) {

//     daWord = data.daWord;
//     console.log(daWord);
// });
// getJSONF('/generateWord.json');
// daWord = await getJSONF('/generateWord.json').daWord;
// daWord = getJSONF('/generateWord.json').daWord;
// daWord = kludgeringDatasoid.daWord;
// daWord = daWordOfIt;
// daWord = getJSONF('/generateWord.json').daWord;
// console.log(kludgeringDatasoid);


function regenerateWord() {
    // document.getElementById('generateWord').innerHTML = daWord[Math.floor(Math.random() * daWord.length)];
    document.getElementById('generateWord').innerHTML = daWordOfIt[Math.floor(Math.random() * daWordOfIt.length)];
}

function miniGenerate() {
    document.getElementById('miniGen').innerHTML = miniGenWord[Math.floor(Math.random() * miniGenWord.length)];
}

// $(function() {
//     $.getJSON('/generateWord.jsonc', function(data) {
//         daWord = data.daWord;
//         console.log(daWord);
//     });
// });
function getJSONF(url, kludgeGenerateWord = false) {
    // https://www.telerik.com/blogs/what-is-json-how-to-handle-unexpected-token-error
    // https://youtu.be/C3dfjyft_m4
    // fetch(url, {
    //     method: `GET`,
    //     headers: {
    //         "Content-Type": `application/json`,
    //     }
    // }).then(async response => {
    //     try {
    //         const data = await response.json();
    //         console.log('response data?', data);
    //         kludgeringDatasoid = data;
    //         return data;
    //     } catch (error) {
    //         console.log('Error happened here!');
    //         console.error(error);
    //         return null;
    //     }
    // });
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            kludgeringDatasoid = data;
            daWordOfIt = data.daWord;
            // return data;
            if (kludgeGenerateWord)
                regenerateWord();
            // idk how to pause that function above until these here complete.
        });
}
// getJSONF('/generateWord.json').then(data => {
//     regenerateWord();
// });
getJSONF('/assets/json/funnyWords/generateWord.json', true);
// regenerateWord();



/*
Moar Dump
- https://www.w3schools.com/html/html_scripts.asp
- https://www.freecodecamp.org/news/javascript-document-ready-jquery-example/
- https://duckduckgo.com/?q=html+js+ready&t=brave&ia=web
- https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-color&preval=transparent
- https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
- https://www.w3schools.com/cssref/pr_background-color.asp
- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
- https://support.microsoft.com/en-us/topic/how-to-build-a-virtual-keyboard-in-an-html-page-5b815ae2-c43c-c7a6-b4a2-f801b760ba3a
- https://stackoverflow.com/questions/23077537/create-an-html-numeric-keypad-without-table-layout#23077759
- https://www.w3schools.com/howto/howto_js_topnav.asp
- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_topnav
- https://www.javatpoint.com/how-to-make-a-navigation-bar-in-html
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets
- https://www.w3schools.com/Css/css_navbar.asp
- https://www.w3schools.com/Css/tryit.asp?filename=trycss_navbar_basic_css
- https://www.w3schools.com/Css/css_navbar_vertical.asp
- https://www.w3schools.com/Css/css_navbar_horizontal.asp
- https://www.inogic.com/blog/2014/09/using-ctrl-s-to-save-the-html-webresource-content/
- https://stackoverflow.com/questions/11362106/how-do-i-capture-a-ctrl-s-without-jquery-or-any-other-library
- https://www.designcise.com/web/tutorial/how-to-fix-issues-with-css-position-sticky-not-working
- https://caniuse.com/css-sticky
- https://dinbror.dk/blog/help-css-position-sticky-doesnt-work-solved/
- https://www.w3docs.com/snippets/css/how-to-set-sticky-positioning-with-css.html
- https://www.w3schools.com/Css/tryit.asp?filename=trycss_navbar_sticky
- https://www.w3schools.com/Css/tryit.asp?filename=trycss_navbar_horizontal_responsive
- https://www.w3schools.com/Css/css_dropdowns.asp
- https://www.w3schools.com/Css/tryit.asp?filename=trycss_dropdown_navbar2
- https://www.w3schools.com/Css/css_image_gallery.asp
- https://www.tutsmake.com/javascript-get-element-by-id-name-class-tag-value/
- https://www.w3schools.com/CSSref/css3_pr_opacity.asp
- https://www.w3schools.com/js/js_htmldom_css.asp
- https://www.w3schools.com/jsref/jsref_forEach.asp
- https://www.w3schools.com/js/js_htmldom_css.asp
- https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements
- https://www.tabnine.com/academy/javascript/how-to-change-css-javascript/
- https://www.delftstack.com/howto/css/background-opacity-css/
- https://www.designcise.com/web/tutorial/how-to-apply-css-opacity-to-background-color-only
- https://www.w3schools.com/html/html_links.asp
- https://www.w3schools.com/cssref/css_colors.asp
- https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_cursor2
- https://www.w3schools.com/jsref/prop_style_cursor.asp
- https://www.w3schools.com/cssref/pr_class_cursor.asp
- https://www.w3schools.com/cssref/playit.asp?filename=playcss_cursor&preval=alias
- https://www.w3schools.com/cssref/tryit.asp?filename=trycss_cursor
- https://www.w3schools.com/cssref/css_selectors.asp
- https://www.computerhope.com/issues/ch000071.htm
- https://stackoverflow.com/a/12369387/9079640
- https://html.com/attributes/a-title/
- https://www.w3schools.com/Css/css_dropdowns.asp
- https://www.w3schools.com/Css/tryit.asp?filename=trycss_dropdown_right
- https://www.w3schools.com/css/css_overflow.asp
- https://www.w3schools.com/Css/tryit.asp?filename=trycss_dropdown_image
- https://www.w3schools.com/Css/tryit.asp?filename=trycss_dropdown_navbar2
*/

/*
Idea:
- Check first flash. e.g. if slash is `apps` then active the `Application` nav button, etc.
*/

/*
SCRAP

<li class="NavPutRight dropdown" style="float:right">
          <a class="dropbtn NavBtn" title="Open Menu">&#xea7c;</a>
          <!--
          <ul class="dropdown-content">
            <li><a title="View this page source" href="view-source://." class="NavBtn">View Source &#xe771;</a></li>
          </ul>
          -->
          <!--
          <div class="dropdown-content">
            <a title="View this page source" href="view-source://." class="NavBtn">View Source &#xe771;</a>
          </div>
          -->
        </li>
*/

/*
Oh man. This is hard to make!
by JOELwindows7
Perkedel Technologies
GNU-AGPLv3
*/