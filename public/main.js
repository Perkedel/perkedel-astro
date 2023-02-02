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
            entireSelect[i].style.cursor = "url(https://www.rw-designer.com/cursor-extern.php?id=181168), url(https://github.com/Perkedel/After-Church/raw/master/RAW%20files/rw-designer/Donut-select.cur), pointer";
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
// big nav button
let navPutLeft = document.getElementsByClassName("NavPutLeft");
let navPutRight = document.getElementsByClassName("NavPutRight");
// match media
// let isMobileMedia = window.matchMedia(`(max-width: 600px)`) && window.matchMedia(`screen`);
let isMobileMedia = window.matchMedia(`(max-width: 600px)`);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBackTopbutton.style.display = "block";
        // myNavBtnClass.stule.opacity = .5;
        for (let thingy of myNavBtnClass) {
            thingy.style.opacity = 0.8;
        }

        for (let biggie of navPutLeft) {
          if (isMobileMedia.matches){
            biggie.style.display = 'none';
          } else {
            if(biggie.style.display.trim() == 'none'){
              biggie.style.display = 'inline-block';
            }
          }
        }
        for (let biggie of navPutRight) {
          if (isMobileMedia.matches){
            biggie.style.display = 'none';
          } else {
            if(biggie.style.display.trim() == 'none'){
              biggie.style.display = 'inline-block';
            }
          }
        }
    } else {
        myBackTopbutton.style.display = "none";
        // myNavBtnClass.stule.opacity = 1;
        // myNavBar.style.opacity = 1;
        for (let thingy of myNavBtnClass) {
            thingy.style.opacity = 1;
        }
        for (let biggie of navPutLeft) {
          if (isMobileMedia.matches){
            biggie.style.display = 'inline-block';
          } else {
            if(biggie.style.display.trim() == 'none'){
              biggie.style.display = 'inline-block';
            }
          }
        }
        for (let biggie of navPutRight) {
          if (isMobileMedia.matches){
            biggie.style.display = 'inline-block';
          } else {
            if(biggie.style.display.trim() == 'none'){
              biggie.style.display = 'inline-block';
            }
          }
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
function fallbackCopyTextToClipboard(text, withNotification = false, contextSay = 'text') {
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
        console.log('Fallback: Copying text command for ' + contextSay + ' `' + thing + '` was ' + msg);
        if (withNotification) {
            Toastify({
                text: 'Copied the ' + contextSay + ' \`<code>' + text + '</code>\` to clipboard',
                class: "copySuccessToast",
                duration: 5000,
                gravity: "bottom",
                position: "left",
                escapeMarkup: false,
                close: true,
                style: {
                    background: "linear-gradient(to right, #000022, #002222)",
                },
                onClick: function() {},
            }).showToast();
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy ' + contextSay + ' `' + thing + '`', err);
        if (withNotification) {
            Toastify({
                text: 'Failed to Copy the ' + contextSay + ' \`<code>' + text + '</code>\` to clipboard',
                class: "copyFailToast",
                duration: 5000,
                gravity: "bottom",
                position: "left",
                escapeMarkup: false,
                close: true,
                style: {
                    background: "linear-gradient(to right, #FF0000, #002222)",
                },
                onClick: function() {},
            }).showToast();
        }
    }

    document.body.removeChild(textArea);
}

// function plsCopyThe(thing){
function plsCopyThe(thing, withNotification = false, contextSay = 'text') {

    // to clipboard pls
    // Get the text field
    // var thing = location.href;

    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(thing, withNotification, contextSay);
        return;
    }

    // // Select the text field
    // thing.select();
    // thing.setSelectionRange(0, 99999); // For mobile devices

    // // Copy the text inside the text field
    // navigator.clipboard.writeText(thing.value);
    navigator.clipboard.writeText(thing).then(function() {
        console.log('Async: Copied the ' + contextSay + ' `' + thing + '`');
        if (withNotification) {
            Toastify({
                text: 'Copied the ' + contextSay + ' \`<code>' + thing + '</code>\` to clipboard',
                class: "copySuccessToast",
                duration: 5000,
                gravity: "bottom",
                position: "left",
                escapeMarkup: false,
                close: true,
                style: {
                    background: "linear-gradient(to right, #000022, #002222)",
                },
                onClick: function() {},
            }).showToast();
        }

    }, function(err) {
        console.error('WERROR: Async: Could not copy ' + contextSay + ' `' + thing + '`: ', err);
        if (withNotification) {
            Toastify({
                text: 'Failed to Copy the ' + contextSay + ' \`<code>' + thing + '</code>\` to clipboard',
                class: "copyFailToast",
                duration: 5000,
                gravity: "bottom",
                position: "left",
                escapeMarkup: false,
                close: true,
                style: {
                    background: "linear-gradient(to right, #FF0000, #002222)",
                },
                onClick: function() {},
            }).showToast();
        }
    });

}

function plsCopyTheURL() {
    plsCopyThe(location.href, false, 'URL');
    // https://github.com/apvarun/toastify-js
    // https://apvarun.github.io/toastify-js/#
    Toastify({
        text: 'Copied the URL \`<code>' + location.href + '</code>\` to clipboard',
        class: "copyURLToast",
        duration: 5000,
        gravity: "bottom",
        position: "left",
        escapeMarkup: false,
        close: true,
        style: {
            background: "linear-gradient(to right, #000022, #002222)",
        },
        onClick: function() {},
    }).showToast();
}

function BrowserInfoPls() {
    // modal https://tingle.robinparisi.com/
    let windowe = new tingle.modal({
        footer: true,
        onOpen: function() {},
        closeLabel: "Close",
    });
    windowe.setContent(`
        <h2>Browser Info</h2>
        <p>
            Cookies Enabled: <b>` + navigator.cookieEnabled + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + "Cookies Enabled: " + navigator.cookieEnabled + `',true,'Cookies enabled status')" id="copyURLButton" title="Copy URL">&#xf68e;</button><br/>
            User Agent: <b>` + navigator.userAgent + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + navigator.userAgent + `',true,'User agent')" id="copyURLButton" title="Copy URL">&#xf68e;</button><br/>
            Platform: <b>` + navigator.platform + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + navigator.platform + `',true,'Platform')" id="copyURLButton" title="Copy URL">&#xf68e;</button><br/>
            Language: <b>` + navigator.language + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + navigator.language + `',true,'Browser language')" id="copyURLButton" title="Copy URL">&#xf68e;</button><br/>
            Product: <b>` + navigator.product + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + navigator.product + `',true,'Browser Engine')" id="copyURLButton" title="Copy URL">&#xf68e;</button><br/>
            Memory: <b>` + navigator.deviceMemory + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + "Memory: " + navigator.deviceMemory + `',true,'Memory')" id="copyURLButton" title="Copy URL">&#xf68e;</button><br/>
            Max Touch Points: <b>` + navigator.maxTouchPoints + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + "Max Touch Points: " + navigator.maxTouchPoints + `',true,'Number of max touch points')" id="copyURLButton" title="Copy URL">&#xf68e;</button><br/>
            Inline PDF Viewer: <b>` + navigator.pdfViewerEnabled + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + "Inline PDF Viewer Enabled: " + navigator.pdfViewerEnabled + `',true,'Inline PDF Viewer status')" id="copyURLButton" title="Copy URL">&#xf68e;</button><br/>
            Product: <b>` + navigator.product + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + navigator.product + `',true,'Browser Engine')" id="copyURLButton" title="Copy URL">&#xf68e;</button><br/>
            Is Online?: <b>` + navigator.onLine + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + "Is Online?: " + navigator.onLine + `',true,'Online status')" id="copyURLButton" title="Copy URL">&#xf68e;</button><br/>
            Is Java Edition Enabled?: <b>` + navigator.javaEnabled() + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + "Is Java Edition Supported?: " + navigator.javaEnabled() + `',true,'Oracle Java status')" id="copyURLButton" title="Copy URL">&#xf68e;</button> (<b>Not to be confused with JavaScript!</b>)<br/>
            Is Do not Dox / Track Enabled?: <b>` + navigator.doNotTrack + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + "Is Do not Dox / Track Enabled?: " + navigator.doNotTrack + `',true,'Do not dox / track status')" id="copyURLButton" title="Copy URL">&#xf68e;</button><br/>
            These values below somehow does not represent your actual browser values! It's because these are deprecated<br/><br/>
            App Version: <b>` + navigator.appVersion + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + navigator.appVersion + `',true,'Browser version')" id="copyURLButton" title="Copy URL">&#xf68e;</button><br/>
            Codename: <b>` + navigator.appCodeName + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + navigator.appCodeName + `',true,'Codename')" id="copyURLButton" title="Copy URL">&#xf68e;</button><br/>
            Browser Name: <b>` + navigator.appName + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + navigator.appName + `',true,'Browser Name')" id="copyURLButton" title="Copy URL">&#xf68e;</button><br/>
        </p>
        <p style="font-size:.75em;">These data above are your local data & won't be stored nor shared by us, except the sus plugins such as Microsoft Clarity.</p>
        `);
    windowe.addFooterBtn('OK', 'tingle-btn tingle-btn--primary', function() {
        // here goes some logic
        windowe.close();
    });
    windowe.open();
}

function URLInfoPls() {
    // modal https://tingle.robinparisi.com/
    let windowe = new tingle.modal({
        footer: true,
        onOpen: function() {
            console.log(`URL Info for:\n` + location.href + `\n\nPathname: ` + location.pathname + `\nOrigin: ` + location.origin + `\n`);
        },
        closeLabel: "Close",
    });
    // windowe.setContent(`<h2>URL Info</h2><p><b style="color:cyan;"><code>` + location.href + `</code></b><br/><br/>Pathname: <b style="color:cyan;"><code>` + location.pathname + `</code></b><br/>Origin: <b style="color:cyan;"><code>` + location.origin + `</code></b><br/></p>`);
    windowe.setContent(`
        <h2>URL Info</h2>
        <h3>Location URL</h3>
        <p>
            <b class="URLinfo--sauce">` + location.href + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + location.href + `',true,'URL')" id="copyURLButton" title="Copy URL">&#xf68e;</button>
            <br/>
            <br/>
            Pathname: <b class="URLinfo--sauce">` + location.pathname + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + location.pathname + `',true,'Pathname')" id="copyPathnameButton" title="Copy Pathname">&#xf68e;</button>  <br/>
            Origin: <b class="URLinfo--sauce">` + location.origin + `</b> <button class="SpecialityButton" style="" onclick="plsCopyThe('` + location.origin + `',true,'Origin URL')" id="copyOriginButton" title="Copy Origin">&#xf68e;</button><br/>
        </p>
        <h3>Additional Infos</h3>
        <ul>
            <li><a class="Buttonnize" href="javascript:BrowserInfoPls()">&#xf488; Browser Info &#xf7fb;</a> <b>Local statuses</b> such as cookies enabled, browser version, user agent, OS, etc.</li>
        </ul>

        `);
    windowe.addFooterBtn('OK', 'tingle-btn tingle-btn--primary', function() {
        // here goes some logic
        windowe.close();
    });
    windowe.open();

    // alert(`URL Info for:\n` + location.href + `\n\nPathname: ` + location.pathname + `\nOrigin: ` + location.origin + `\n`);
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
let daWordOfItNSFW = [];



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


function regenerateWord(includeNSFW = false) {
    // https://stackoverflow.com/a/36756480/9079640
    htmlSelectred = includeNSFW ? (() => {
            switch (Math.random() > .5) {
                case true:
                    {
                        return daWordOfItNSFW[Math.floor(Math.random() * daWordOfItNSFW.length)];
                    }
                case false:
                    {
                        return daWordOfIt[Math.floor(Math.random() * daWordOfIt.length)];
                    }
            }
        })() :
        daWordOfIt[Math.floor(Math.random() * daWordOfIt.length)];
    // document.getElementById('generateWord').innerHTML = daWord[Math.floor(Math.random() * daWord.length)];
    // console.log("Generate with " + (includeNSFW ? "NSFW" : "SFW") + ": \n" + daWordOfIt);
    // console.log("Generate with " + (includeNSFW ? "NSFW" : "SFW") + ": \n" + htmlSelectred);
    document.getElementById('generateWord').innerHTML = htmlSelectred;
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
function getJSONF(url, kludgeGenerateWord = false, kludgeIncludeNSFW = true) {
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
            daWordOfItNSFW = kludgeIncludeNSFW ? data.daWordNSFW : [];
            // return data;
            if (kludgeGenerateWord)
                regenerateWord();
            // idk how to pause that function above until these here complete.
        });
}
// getJSONF('/generateWord.json').then(data => {
//     regenerateWord();
// });
getJSONF('/assets/json/funnyWords/generateWord.json', true, true);
// regenerateWord();

function fillJSONF(url){
  fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          return data;
          // idk how to pause that function above until these here complete.
      });
}


// Owen Wilson WOW API
// https://owen-wilson-wow-api.onrender.com/
// featured in Astro.build sample
// let responseWow = await fetch('https://owen-wilson-wow-api.onrender.com/wows/random');
// let dataWow = await response.json();
// let dataWow;
// const optionsWow = { method: 'GET', headers: { accept: 'application/json' } };
// fetch('https://owen-wilson-wow-api.onrender.com/wows/random', optionsWow)
//     .then(response => response.json())
//     .then(response => dataWow = response)
//     // .then(response => console.log(response))
//     .catch(err => console.error(err));
// let vidWow1080 = dataWow[0].video["1080p"];
// let vidWow720 = dataWow[0].video["720p"];
// let vidWow480 = dataWow[0].video["480p"];
// let vidWow360 = dataWow[0].video["360p"];

async function regerenateWow() {
    // responseWow = await fetch('https://owen-wilson-wow-api.onrender.com/wows/random');
    // dataWow = await response.json();
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random', optionsWow)
        .then(response => response.json())
        .then(response => console.log(response))
        .then(response => dataWow = response.json())
        .catch(err => console.error(err));
    vidWow1080 = dataWow[0].video["1080p"];
    vidWow720 = dataWow[0].video["720p"];
    vidWow480 = dataWow[0].video["480p"];
    vidWow360 = dataWow[0].video["360p"];

    return dataWow;
}

// Scroll revealer
// https://youtu.be/T33NN_pPeNI
const scrollObverser = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('showScroll');
        } else {
            entry.target.classList.remove('showScroll');
        }
    });
});
const hiddenScrollers = document.querySelectorAll('.hideScroll');
hiddenScrollers.forEach((hiddenScroller) => { scrollObverser.observe(hiddenScroller); });

// Setting Dialog
let contenta = document.getElementById("_SettingContent").innerHTML;
let windoweSetting = new tingle.modal({
    footer: true,
    onOpen: function() {

    },
    closeLabel: "Close",
});
windoweSetting.setContent(contenta);
windoweSetting.addFooterBtn('OK', 'tingle-btn tingle-btn--primary', function() {
    // document.getElementById("_SettingContent").innerHTML = contenta;
    windoweSetting.close();
});

function openInPageSetting() {

    windoweSetting.open();
}

// Show Hide Download Links
function setDownloadLinkVisibility(into = true) {
    // works also if the element is outside where the checkbox was.
    // a.k.a. not next to nor descends to.
    // https://stackoverflow.com/a/19353448/9079640
    let stuffs = document.getElementsByClassName('DownloadLinks');
    console.log("Check Set visible to " + into);
    for (i = 0; i < stuffs.length; i++) {
        if (into) {
            // stuffs[i].style.display = "none";
            stuffs[i].classList.add('hidden');
        } else {
            // stuffs[i].style.display = "initial";
            stuffs[i].classList.remove('hidden');
        }
    }

    // also pls itterate other CHeckboxes like this too!
    let otherChecks = document.getElementsByClassName('DownloadShowHideCheckBoxes');
    for (i = 0; i < otherChecks.length; i++) {
        otherChecks[i].checked = into;
    }
}

function appearMoreNavMenuDialog() {
    let contento = document.getElementById('navMoreList').innerHTML;
    // modal https://tingle.robinparisi.com/
    let windowe = new tingle.modal({
        footer: true,
        onOpen: function() {

        },
        closeLabel: "Close",
    });
    // windowe.setContent(`<h2>URL Info</h2><p><b style="color:cyan;"><code>` + location.href + `</code></b><br/><br/>Pathname: <b style="color:cyan;"><code>` + location.pathname + `</code></b><br/>Origin: <b style="color:cyan;"><code>` + location.origin + `</code></b><br/></p>`);
    windowe.setContent(`
        <h2>More Navigation Menus</h2>
        <p>
            Select!
        </p>
        <ul class="ButtonizeListChildrenLinks">
        ` + contento + `
        </ul>
        `);
    windowe.addFooterBtn('Close', 'tingle-btn tingle-btn--default', function() {
        // here goes some logic
        windowe.close();
    });
    windowe.open();
}

function PoosayClin(poosayFresh = '') {
    // DONE: remove `enterNSFW/nsfw` or `enterNSFW` from URL path & then go to it!
    // poosayFresh = handover URL with that `enterNSFW/nsfw`
}


function openFullImage(at = '', withTitle = '', andAlt = null) {
    let windowe = new tingle.modal({
        footer: true,
        onOpen: function() {

        },
        closeLabel: "Close",
    });
    // windowe.setContent(`<h2>URL Info</h2><p><b style="color:cyan;"><code>` + location.href + `</code></b><br/><br/>Pathname: <b style="color:cyan;"><code>` + location.pathname + `</code></b><br/>Origin: <b style="color:cyan;"><code>` + location.origin + `</code></b><br/></p>`);
    windowe.setContent(`
        <h2>Image "<i>${withTitle}</i>"</h2>
        <p>
            <a href="${at}" class="Buttonnize" download>&#xf6d9; Download this image</a>
            <a href="${at}" class="Buttonnize" target="blank" rel="noopener noreferrer">Open in New Tab</a>
        </p>
        <p style="overflow-x:scroll;"><img src="${at}" title="${withTitle}" alt="${andAlt || withTitle}"/></p>
        `);
    windowe.addFooterBtn('Close', 'tingle-btn tingle-btn--default', function() {
        // here goes some logic
        windowe.close();
    });
    windowe.open();
}

// TODO: open full image packs like above but next button


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
