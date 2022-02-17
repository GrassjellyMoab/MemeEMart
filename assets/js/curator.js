/**
* I dont have
* Default feed Layout
* 2021-12-21 13:59:09
*/
(function () {
    // Loader
    var loader=new function(){this.rC=-1,this.r=[],this.add=function(t){this.r.push(t)},this.addTag=function(t,e){var i=document.getElementsByTagName("head")[0],s=t.indexOf(".js")>0?"script":"link",n=document.createElement(s);i.appendChild(n),n.onload=e,n.charset="UTF-8","script"===s?(n.type="text/javascript",n.src=t):"link"===s&&(n.rel="stylesheet",n.href=t)},this.loadNext=function(){if(this.rC++,this.rC>=this.r.length)this.done();else{var t=this.r[this.rC];this.addTag(t,this.loadNext.bind(this))}},this.done=function(){this.onResourcesLoaded(window.Curator)},this.load=function(t){this.onResourcesLoaded=t,this.loadNext()}};

    // Config
    var config = {"type":"Waterfall","container":"#curator-feed-default-feed-layout","debug":0,"feed":{"id":"ac23a706-1128-4e2d-a0ec-298aa0462adf","apiEndpoint":"https:\/\/api.curator.io"},"theme":"sydney"};
    var colours = {};
    var styles = {};

    // Bootstrap
    function loaderCallback () {
        window.Curator.loadWidget(config, colours, styles);
    }

    // Run Loader
    loader.add('assets/js/curator assets/curator1.css');
    loader.add('assets/js/curator assets/curatorasset.js');

    

    loader.load(loaderCallback);
})();