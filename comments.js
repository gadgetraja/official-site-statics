window.gc_params = {
  graphcomment_id: 'GadgetRaja',
  fixed_header_height: 0,
};

var loadJS = function(url, implementationCode, location){
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;
    location.appendChild(scriptTag);
};
var yourCodeToBeCalled = function(){
//your code goes here
}
loadJS('https://cdn.statically.io/gh/gadgetraja/official-site-statics/afc5fd14/graphcomment.js?' + Math.round(Math.random() * 1e8), yourCodeToBeCalled, document.body);