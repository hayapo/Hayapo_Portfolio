(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{FLlr:function(t,r,n){var e=n("XKFU");e(e.P,"String",{repeat:n("l0Rn")})},HnlD:function(t,r,n){"use strict";n("qKvR");r.a={name:"jx2td0",styles:"flex:0;width:80%;max-width:1300px;padding:2vh 2vw 5vw 2vw;list-style:none;margin:0 auto;> h1{padding-bottom:3rem;font-size:4rem;}@media screen and (max-width:1100px){}@media screen and (max-width:768px){}@media screen and (max-width:480px){}@media screen and (max-height:430px){}"}},PGlZ:function(t,r,n){"use strict";n.d(r,"a",(function(){return p}));n("LK8F"),n("dZ+Y"),n("8+KV"),n("Vd3H"),n("0l/t"),n("bWfx"),n("a1Th"),n("h7Nl"),n("XfO3"),n("9AAn"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("hHhE"),n("91GP");var e=n("q1tI");function o(){return(o=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t}).apply(this,arguments)}var i=new Map,a=new Map,c=0;function s(t){return Object.keys(t).sort().filter((function(r){return void 0!==t[r]})).map((function(r){return r+"_"+("root"===r?(n=t.root)?(a.has(n)||(c+=1,a.set(n,c.toString())),a.get(n)):"0":t[r]);var n})).toString()}function u(t,r,n){if(void 0===n&&(n={}),!t)return function(){};var e=function(t){var r=s(t),n=i.get(r);if(!n){var e,o=new Map,a=new IntersectionObserver((function(r){r.forEach((function(r){var n,i=r.isIntersecting&&e.some((function(t){return r.intersectionRatio>=t}));t.trackVisibility&&void 0===r.isVisible&&(r.isVisible=i),null==(n=o.get(r.target))||n.forEach((function(t){t(i,r)}))}))}),t);e=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:r,observer:a,elements:o},i.set(r,n)}return n}(n),o=e.id,a=e.observer,c=e.elements,u=c.get(t)||[];return c.has(t)||c.set(t,u),u.push(r),a.observe(t),function(){u.splice(u.indexOf(r),1),0===u.length&&(c.delete(t),a.unobserve(t)),0===c.size&&(a.disconnect(),i.delete(o))}}function l(t){return"function"!=typeof t.children}var f=function(t){var r,n;function i(r){var n;return(n=t.call(this,r)||this).node=null,n._unobserveCb=null,n.handleNode=function(t){n.node&&(n.unobserve(),t||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=t||null,n.observeNode()},n.handleChange=function(t,r){t&&n.props.triggerOnce&&n.unobserve(),l(n.props)||n.setState({inView:t,entry:r}),n.props.onChange&&n.props.onChange(t,r)},n.state={inView:!!r.initialInView,entry:void 0},n}n=t,(r=i).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var a=i.prototype;return a.componentDidUpdate=function(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var t=this.props,r=t.threshold,n=t.root,e=t.rootMargin,o=t.trackVisibility,i=t.delay;this._unobserveCb=u(this.node,this.handleChange,{threshold:r,root:n,rootMargin:e,trackVisibility:o,delay:i})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!l(this.props)){var t=this.state,r=t.inView,n=t.entry;return this.props.children({inView:r,entry:n,ref:this.handleNode})}var i=this.props,a=i.children,c=i.as,s=i.tag,u=function(t,r){if(null==t)return{};var n,e,o={},i=Object.keys(t);for(e=0;e<i.length;e++)n=i[e],r.indexOf(n)>=0||(o[n]=t[n]);return o}(i,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(e.createElement)(c||s||"div",o({ref:this.handleNode},u),a)},i}(e.Component);function p(t){var r=void 0===t?{}:t,n=r.threshold,o=r.delay,i=r.trackVisibility,a=r.rootMargin,c=r.root,s=r.triggerOnce,l=r.skip,f=r.initialInView,p=Object(e.useRef)(),h=Object(e.useState)({inView:!!f}),d=h[0],b=h[1],v=Object(e.useCallback)((function(t){void 0!==p.current&&(p.current(),p.current=void 0),l||t&&(p.current=u(t,(function(t,r){b({inView:t,entry:r}),r.isIntersecting&&s&&p.current&&(p.current(),p.current=void 0)}),{root:c,rootMargin:a,threshold:n,trackVisibility:i,delay:o}))}),[Array.isArray(n)?n.toString():n,c,a,s,l,i,o]);Object(e.useEffect)((function(){p.current||!d.entry||s||l||b({inView:!!f})}));var g=[v,d.inView,d.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}f.displayName="InView",f.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},bVoc:function(t,r,n){"use strict";n.d(r,"g",(function(){return s})),n.d(r,"e",(function(){return u})),n.d(r,"b",(function(){return l})),n.d(r,"d",(function(){return f})),n.d(r,"c",(function(){return h})),n.d(r,"f",(function(){return H})),n.d(r,"a",(function(){return G}));var e=n("iYmT"),o=(n("q1tI"),n("PGlZ")),i=n("2iW/"),a=n("k8Ew"),c=n("qKvR"),s=function(t){var r=t.color,n=t.children,s=Object(o.a)({rootMargin:"-50px 0px"}),u=s[0],l=s[1];return Object(c.c)("h1",{ref:u,css:Object(e.a)({marginLeft:i.c[4],color:r,opacity:l?1:0,animation:l?a.b+" 0.5s ease-out":0})},n)},u=function(t){var r=t.children,n=Object(o.a)({rootMargin:"-50px 0px"}),s=n[0],u=n[1];return Object(c.c)("h2",{ref:s,css:Object(e.a)({color:i.a.black,opacity:u?1:0,animation:u?a.a+" 0.5s ease-out":0,"& i":{color:i.a.black,animation:u?a.b+" 0.5s ease-out":0}})},r)},l=function(t){var r=t.children,n=Object(o.a)(),s=n[0],u=n[1];return Object(c.c)("div",{ref:s,css:Object(e.a)({margin:i.c[8]+" auto",height:i.c[64],width:i.c[64],animation:u?a.a+" 0.5s ease-out":0,"& img":{borderRadius:"100%",border:i.c[3]+" solid "+i.a.lightBlue}})},r)},f=function(t){var r=t.children,n=Object(o.a)({rootMargin:"-20px 0px"}),i=n[0],s=n[1];return Object(c.c)("p",{ref:i,css:Object(e.a)({opacity:s?1:0,animation:s?a.a+" 0.5s ease-out":0})},r)},p=n("ma3e"),h=function(t){var r=t.children,n=t.href,s=Object(o.a)({rootMargin:"-20px 0px"}),u=s[0],l=s[1];return Object(c.c)("a",{href:n,ref:u,target:"_blank",rel:"noopener noreferrer",css:Object(e.a)({textDecoration:"none",color:i.a.blue,margin:i.c[1],opacity:l?1:0,animation:l?a.a+" 0.5s ease-out":0})},Object(c.c)(p.a,null),r)};n("0l/t"),n("FLlr");n("KKXr"),n("a1Th"),n("h7Nl"),n("Btvt");var d=/[\s]*([a-z-]+)[\s]*\([\s]*([^\)]+)[\s]*\)[\s]*/i,b=/^(\-?\d+\.?\d{0,5})/,v=function(t){return function(r){return r+t}},g=parseFloat;function y(t){return"number"==typeof t?t:.01*g(t)}function m(t){return w(100*t)+"%"}function w(t){return b.exec(t.toString())[1]}function O(t,r){return t+"("+Array.prototype.join.call(r,", ")+")"}function j(t){return function(){return O(t,arguments)}}n("bWfx");var x=function(t,r){return Array.prototype.filter.call(t,r)},k=(v("%"),v("deg"),v("em"),v("ex"),v("px")),V=(v("rad"),v("rem"),v("vh"),v("vw"),v("turn"),function(t){return function(){return x(arguments,(function(t){return t||0===t})).map((function(t){return"number"==typeof t?k(t):t.toString()})).join(t)}});V(" "),V(",");n("SRfc");var M,S=Math.round;function R(t,r){return S(t*r)/r}var C="rgb",I="hsl",X=((M={}).rgbhsl=function(t,r,n,e,o){var i,a,c=t/255,s=r/255,u=n/255,l=Math.min(c,s,u),f=Math.max(c,s,u),p=(l+f)/2,h=f-l;i=f===l?0:c===f?(s-u)/h:s===f?2+(u-c)/h:u===f?4+(c-s)/h:0;(i=Math.min(60*i,360))<0&&(i+=360);a=f===l?0:p<=.5?h/(f+l):h/(2-f-l);return new E(I,i,a,p,e,o)},M.hslrgb=function(t,r,n,e,o){var i=t/360,a=r,c=n;if(0===a){return new E(C,b=255*c,b,b,e,o)}for(var s=c<.5?c*(1+a):c+a-c*a,u=2*c-s,l=0,f=0,p=0,h=0;h<3;h++){var d=i+1/3*-(h-1);d<0&&d++,d>1&&d--;var b=void 0;b=6*d<1?u+6*(s-u)*d:2*d<1?s:3*d<2?u+(s-u)*(2/3-d)*6:u,b*=255,0===h?l=b:1===h?f=b:p=b}return new E(C,l,f,p,e,o)},M),L={r:255,g:255,b:255,h:360,s:1,l:1,a:1};function A(t){return function(t){var r=t.match(/#(([a-f0-9]{6})|([a-f0-9]{3}))$/i);if(!r)return;var n=r[1],e=parseInt(3===n.length?n[0]+n[0]+n[1]+n[1]+n[2]+n[2]:n,16);return new E(C,e>>16&255,e>>8&255,255&e,1,!1)}(t)||function(t){var r=function(t){var r=d.exec(t);if(r&&r.length)return[r[1]].concat(r[2].split(","))}(t);if(!r||4!==r.length&&5!==r.length)return;var n,e=r[0],o="rgba"===e,i="hsla"===e,a=e===C,c=e===I,s=i||o;if(a||o)n=C;else{if(!c&&!i)throw new Error("unsupported color string");n=I}var u=g(r[1]),l=a||o?g(r[2]):y(r[2]),f=a||o?g(r[3]):y(r[3]),p=s?g(r[4]):1;return new E(n,u,l,f,p,s)}(t)||B(255,0,0)}function B(t,r,n,e){return new E(C,t,r,n,void 0===e?1:y(e),void 0!==e)}function _(t,r,n){var e=r.f,o=r.r,i=r.g,a=r.b,c=r.a,s=void 0===n?r.o:n;return e!==t?X[e+t](o,i,a,c,s):void 0===n?r:new E(e,o,i,a,c,s)}var E=function(){function t(t,r,n,e,o,i){this.f=t,this.o=i;var a=t===I;this.r=Y(a?"h":"r",r),this.g=Y(a?"s":"g",n),this.b=Y(a?"l":"b",e),this.a=Y("a",o)}return t.prototype.toString=function(){var t,r,n=this,e=n.o,o=n.f,i=n.r,a=n.g,c=n.b,s=n.a;if(o===C)t=e?"rgba":C,r=[S(i),S(a),S(c)];else{if(o!==I)throw new Error("Invalid color format");t=e?"hsla":I,r=[S(i),m(R(a,100)),m(R(c,100))]}return e&&r.push(w(R(s,1e5))),O(t,r)},t.prototype.toHexString=function(){var t=_(C,this);return"#"+(N(t.r)+N(t.g)+N(t.b)).toUpperCase()},t.prototype.toHSL=function(){return _(I,this,!1)},t.prototype.toHSLA=function(){return _(I,this,!0)},t.prototype.toRGB=function(){return _(C,this,!1)},t.prototype.toRGBA=function(){return _(C,this,!0)},t.prototype.red=function(){var t=this;return(t.f===C?t:t.toRGB()).r},t.prototype.green=function(){var t=this;return(t.f===C?t:t.toRGB()).g},t.prototype.blue=function(){var t=this;return(t.f===C?t:t.toRGB()).b},t.prototype.hue=function(){var t=this;return(t.f===I?t:t.toHSL()).r},t.prototype.saturation=function(){var t=this;return(t.f===I?t:t.toHSL()).g},t.prototype.lightness=function(){var t=this;return(t.f===I?t:t.toHSL()).b},t.prototype.alpha=function(){return this.a},t.prototype.opacity=function(){return this.a},t.prototype.invert=function(){var r=this,n=_(C,r);return _(r.f,new t(C,255-n.r,255-n.g,255-n.b,r.a,r.o))},t.prototype.lighten=function(r,n){var e=this,o=_(I,e),i=L.l,a=o.b+(n?i-o.b:i)*y(r);return _(e.f,new t(I,o.r,o.g,a,e.a,e.o))},t.prototype.darken=function(r,n){var e=this,o=_(I,e),i=o.b-(n?o.b:L.l)*y(r);return _(e.f,new t(I,o.r,o.g,i,e.a,e.o))},t.prototype.saturate=function(r,n){var e=this,o=_(I,e),i=L.s,a=o.g+(n?i-o.g:i)*y(r);return _(e.f,new t(I,o.r,a,o.b,e.a,e.o))},t.prototype.desaturate=function(r,n){var e=this,o=_(I,e),i=L.s,a=o.g-(n?o.g:i)*y(r);return _(e.f,new t(I,o.r,a,o.b,e.a,e.o))},t.prototype.grayscale=function(){return this.desaturate(1)},t.prototype.fade=function(r){var n=this,e=Y("a",y(r));return _(n.f,new t(n.f,n.r,n.g,n.b,e,!0))},t.prototype.fadeOut=function(r,n){var e=this,o=Y("a",e.a-(n?e.a:1)*y(r));return _(e.f,new t(e.f,e.r,e.g,e.b,o,!0))},t.prototype.fadeIn=function(r,n){var e=this,o=Y("a",e.a+(n?e.a:1)*y(r));return _(e.f,new t(e.f,e.r,e.g,e.b,o,!0))},t.prototype.mix=function(r,n){var e,o=(e=r)instanceof E?e:A(e),i=_(C,this),a=_(C,o),c=void 0===n?.5:n,s=2*c-1,u=Math.abs(i.a-a.a),l=((s*u==-1?s:(s+u)/(1+s*u))+1)/2,f=1-l,p=new t(C,S(i.r*l+a.r*f),S(i.g*l+a.g*f),S(i.b*l+a.b*f),i.a*c+a.a*(1-c),this.o||o.o);return _(this.f,p)},t.prototype.tint=function(t){return B(255,255,255).mix(this,t)},t.prototype.shade=function(t){return B(0,0,0).mix(this,t)},t.prototype.spin=function(r){var n=this,e=_(I,n);return _(n.f,new t(I,W(e.r+r),e.g,e.b,n.a,n.o))},t}();function N(t){var r=S(t);return(r<16?"0":"")+r.toString(16)}function W(t){return((t<0?360:0)+t%360)%360}function Y(t,r){var n=L[t];return r<0?0:r>n?n:r}n("LK8F");n("pIFo");j("matrix"),j("matrix3d"),j("perspective"),j("rotate"),j("rotate3d"),j("rotateX"),j("rotateY"),j("rotateZ"),j("scale"),j("scale3d"),j("scaleX"),j("scaleY"),j("scaleZ"),j("skew"),j("skewX"),j("skewY"),j("translate"),j("translate3d"),j("translateX"),j("translateY"),j("translateZ");var G=function(t){return Object(c.c)("span",{className:"emoji",role:"img","aria-label":t.label?t.label:"","aria-hidden":t.label?"false":"true"},t.symbol)},H=function(t){t.children;var r=Object(o.a)({rootMargin:"-100px 0px"}),n=r[0],s=r[1];return Object(c.c)("table",{ref:n,css:Object(e.a)({margin:i.c[16]+" auto",borderTop:"solid "+i.c[1]+" "+i.a.black,borderBottom:"solid "+i.c[1]+" "+i.a.black,borderCollapse:"collapse",width:"100%",textAlign:"center  ","& thead":{"& tr th":{fontWeight:i.d.fontWeights.black,paddingLeft:i.c[0],borderBottom:"groove "+i.c[1]+" "+A(i.a.blue).fade(.4)}},"& tbody":{"& tr td":{fontWeight:i.d.fontWeights.black,paddingLeft:i.c[0],borderBottom:"groove "+i.c[1]+" "+A(i.a.blue).fade(.4)}},opacity:s?1:0,animation:s?a.a+" 0.5s ease-out":0})},Object(c.c)("thead",null,Object(c.c)("tr",null,Object(c.c)("th",null,"年"),Object(c.c)("th",null,"内容"))),Object(c.c)("tbody",null,Object(c.c)("tr",null,Object(c.c)("td",null,"1999"),Object(c.c)("td",null,"爆誕",Object(c.c)(G,{symbol:"👶"}),Object(c.c)("br",null),"(純粋無垢の権化)")),Object(c.c)("tr",null,Object(c.c)("td",null,"2015"),Object(c.c)("td",null,"春日部高等学校入学")),Object(c.c)("tr",null,Object(c.c)("td",null,"2018"),Object(c.c)("td",null,"名古屋大学情報学部入学")),Object(c.c)("tr",null,Object(c.c)("td",null,"2020"),Object(c.c)("td",null,"現在"))))}},k8Ew:function(t,r,n){"use strict";n.d(r,"b",(function(){return i})),n.d(r,"a",(function(){return a}));var e=n("qKvR"),o=n("2iW/"),i=(Object(e.d)({"0%":{opacity:0,transform:"translateX("+o.c[5]+")"},"80%":{transform:"translateX(-1rem)"},"100%":{opacity:1,transform:"translateX(0)"}}),Object(e.d)({"0%":{opacity:0,transform:"translateX(-"+o.c[5]+")"},"80%":{transform:"translateX(1rem)"},"100%":{opacity:1,transform:"translateX(0)"}})),a=Object(e.d)({"0%":{opacity:0,transform:"translateY("+o.c[4]+")"},"50%":{opacity:.5,transform:"translateY("+o.c[2]+")"},"100%":{opacity:1,transform:"translateY(0)"}})},l0Rn:function(t,r,n){"use strict";var e=n("RYi7"),o=n("vhPU");t.exports=function(t){var r=String(o(this)),n="",i=e(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(r+=r))1&i&&(n+=r);return n}}}]);
//# sourceMappingURL=5b48e14b26e5dec83f69e9fa28d63d4760a29463-3413b2c2f6bb41df8009.js.map