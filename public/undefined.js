// for undefined checks

if(typeof htmx == 'undefined'){
  document.write(unescape("%3Cscript src='/assets/scripts/js/htmx/htmx.min.js' type='text/javascript'%3E%3C/script%3E"));
}
if(typeof tingle == 'undefined'){
    document.write(unescape("%3Cscript src='/assets/scripts/js/tingle/dist/tingle.min.js' type='text/javascript'%3E%3C/script%3E"));
}

if(typeof Plyr == 'undefined'){
    document.write(unescape("%3Cscript src='/assets/scripts/js/plyr/plyr.polyfilled.js' type='text/javascript'%3E%3C/script%3E"));
}
if(typeof Blazy == 'undefined'){
    document.write(unescape("%3Cscript src='/assets/scripts/js/plyr/blazy.min.js' type='text/javascript'%3E%3C/script%3E"));
}
if(applyFocusVisiblePolyfill == 'undefined'){
    document.write(unescape("%3Cscript src='/assets/scripts/js/focus-visible/focus-visible.min.js' type='text/javascript'%3E%3C/script%3E"));
}
if(typeof midiPlayer == 'undefined'){
    document.write(unescape("%3Cscript src='/assets/scripts/js/html-midi-player/html-midi-player@1.5.0.js' type='text/javascript'%3E%3C/script%3E"));
}

/*
by JOELwindows7
Perkedel Technologies
GNU GPL v3
*/
