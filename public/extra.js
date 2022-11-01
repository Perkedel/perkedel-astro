/*
Extra JS due to order of execution matters
runs after Footering
*/
//dfsd

import * as Main from '/main.js';

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
    "cally make this $0 wtf!!! I'm gonna use all my salary to get this done, so peck you!",
];
getJSONP('/generateWord.jsonc', function(data) {
    daWord = data.daWord;
});
document.getElementById('generateWord').innerHTML = daWord[Math.floor(Math.random() * daWord.length)];


/*
by JOELwindows7
Perkedel Technologies
GNU AGPLv3
 */