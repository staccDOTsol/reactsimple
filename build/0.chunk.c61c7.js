(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+/t2":function(t,e){function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},i.apply(this,arguments)}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var n,o,a;a=function(){return function t(e,i,r){function n(a){if(!i[a]){if(!e[a]){if(o)return o(a,!0);var A=new Error("Cannot find module '"+a+"'");throw A.code="MODULE_NOT_FOUND",A}var s=i[a]={exports:{}};e[a][0].call(s.exports,(function(t){return n(e[a][1][t]||t)}),s,s.exports,t,e,i,r)}return i[a].exports}for(var o=!1,a=0;a<r.length;a++)n(r[a]);return n}({1:[function(t,e){"use strict";function i(t){var e=t||[],i={js:0<=e.indexOf("js"),wasm:0<=e.indexOf("wasm")};n.call(this,i),this.features={js:i.js,wasm:i.wasm&&this.has_wasm()},this.use(o),this.use(a)}var r=t("inherits"),n=t("multimath"),o=t("multimath/lib/unsharp_mask"),a=t("./mm_resize");r(i,n),i.prototype.resizeAndUnsharp=function(t,e){var i=this.resize(t,e);return t.unsharpAmount&&this.unsharp_mask(i,t.toWidth,t.toHeight,t.unsharpAmount,t.unsharpRadius,t.unsharpThreshold),i},e.exports=i},{"./mm_resize":4,inherits:15,multimath:16,"multimath/lib/unsharp_mask":19}],2:[function(t,e){"use strict";function i(t){return t<0?0:255<t?255:t}e.exports={convolveHorizontally:function(t,e,r,n,o,a){var A,s,u,h,f,c,g,l,I,p,m,d=0,w=0;for(I=0;I<n;I++){for(p=f=0;p<o;p++){for(c=a[f++],g=a[f++],l=d+4*c|0,A=s=u=h=0;0<g;g--)h=h+(m=a[f++])*t[l+3]|0,u=u+m*t[l+2]|0,s=s+m*t[l+1]|0,A=A+m*t[l]|0,l=l+4|0;e[w+3]=i(h+8192>>14),e[w+2]=i(u+8192>>14),e[w+1]=i(s+8192>>14),e[w]=i(A+8192>>14),w=w+4*n|0}w=4*(I+1)|0,d=(I+1)*r*4|0}},convolveVertically:function(t,e,r,n,o,a){var A,s,u,h,f,c,g,l,I,p,m,d=0,w=0;for(I=0;I<n;I++){for(p=f=0;p<o;p++){for(c=a[f++],g=a[f++],l=d+4*c|0,A=s=u=h=0;0<g;g--)h=h+(m=a[f++])*t[l+3]|0,u=u+m*t[l+2]|0,s=s+m*t[l+1]|0,A=A+m*t[l]|0,l=l+4|0;e[w+3]=i(h+8192>>14),e[w+2]=i(u+8192>>14),e[w+1]=i(s+8192>>14),e[w]=i(A+8192>>14),w=w+4*n|0}w=4*(I+1)|0,d=(I+1)*r*4|0}}}},{}],3:[function(t,e){"use strict";e.exports="AGFzbQEAAAABFAJgBn9/f39/fwBgB39/f39/f38AAg8BA2VudgZtZW1vcnkCAAEDAwIAAQQEAXAAAAcZAghjb252b2x2ZQAACmNvbnZvbHZlSFYAAQkBAArmAwLBAwEQfwJAIANFDQAgBEUNACAFQQRqIRVBACEMQQAhDQNAIA0hDkEAIRFBACEHA0AgB0ECaiESAn8gBSAHQQF0IgdqIgZBAmouAQAiEwRAQQAhCEEAIBNrIRQgFSAHaiEPIAAgDCAGLgEAakECdGohEEEAIQlBACEKQQAhCwNAIBAoAgAiB0EYdiAPLgEAIgZsIAtqIQsgB0H/AXEgBmwgCGohCCAHQRB2Qf8BcSAGbCAKaiEKIAdBCHZB/wFxIAZsIAlqIQkgD0ECaiEPIBBBBGohECAUQQFqIhQNAAsgEiATagwBC0EAIQtBACEKQQAhCUEAIQggEgshByABIA5BAnRqIApBgMAAakEOdSIGQf8BIAZB/wFIG0EQdEGAgPwHcUEAIAZBAEobIAtBgMAAakEOdSIGQf8BIAZB/wFIG0EYdEEAIAZBAEobciAJQYDAAGpBDnUiBkH/ASAGQf8BSBtBCHRBgP4DcUEAIAZBAEobciAIQYDAAGpBDnUiBkH/ASAGQf8BSBtB/wFxQQAgBkEAShtyNgIAIA4gA2ohDiARQQFqIhEgBEcNAAsgDCACaiEMIA1BAWoiDSADRw0ACwsLIQACQEEAIAIgAyAEIAUgABAAIAJBACAEIAUgBiABEAALCw=="},{}],4:[function(t,e){"use strict";e.exports={name:"resize",fn:t("./resize"),wasm_fn:t("./resize_wasm"),wasm_src:t("./convolve_wasm_base64")}},{"./convolve_wasm_base64":3,"./resize":5,"./resize_wasm":8}],5:[function(t,e){"use strict";var i=t("./resize_filter_gen"),r=t("./convolve").convolveHorizontally,n=t("./convolve").convolveVertically;e.exports=function(t){var e=t.src,o=t.width,a=t.height,A=t.toWidth,s=t.toHeight,u=t.scaleX||t.toWidth/t.width,h=t.scaleY||t.toHeight/t.height,f=t.offsetX||0,c=t.offsetY||0,g=t.dest||new Uint8Array(A*s*4),l=void 0===t.quality?3:t.quality,I=t.alpha||!1,p=i(l,o,A,u,f),m=i(l,a,s,h,c),d=new Uint8Array(A*a*4);return r(e,d,o,a,A,p),n(d,g,a,A,s,m),I||function(t,e,i){for(var r=3,n=e*i*4|0;r<n;)t[r]=255,r=r+4|0}(g,A,s),g}},{"./convolve":2,"./resize_filter_gen":6}],6:[function(t,e){"use strict";function i(t){return Math.round(16383*t)}var r=t("./resize_filter_info");e.exports=function(t,e,n,o,a){var A,s,u,h,f,c,g,l,I,p,m,d,w,B,b,y,_=r[t].filter,E=1/o,C=Math.min(1,o),Q=r[t].win/C,v=Math.floor(2*(1+Q)),x=new Int16Array((v+2)*n),D=0,M=!x.subarray||!x.set;for(A=0;A<n;A++){for(s=(A+.5)*E+a,u=Math.max(0,Math.floor(s-Q)),f=(h=Math.min(e-1,Math.ceil(s+Q)))-u+1,c=new Float32Array(f),g=new Int16Array(f),I=u,p=l=0;I<=h;I++,p++)l+=m=_((I+.5-s)*C),c[p]=m;for(p=d=0;p<c.length;p++)d+=w=c[p]/l,g[p]=i(w);for(g[n>>1]+=i(1-d),B=0;B<g.length&&0===g[B];)B++;if(B<g.length){for(b=g.length-1;0<b&&0===g[b];)b--;if(y=b-B+1,x[D++]=u+B,x[D++]=y,M)for(p=B;p<=b;p++)x[D++]=g[p];else x.set(g.subarray(B,b+1),D),D+=y}else x[D++]=0,x[D++]=0}return x}},{"./resize_filter_info":7}],7:[function(t,e){"use strict";e.exports=[{win:.5,filter:function(t){return-.5<=t&&t<.5?1:0}},{win:1,filter:function(t){if(t<=-1||1<=t)return 0;if(-1.1920929e-7<t&&t<1.1920929e-7)return 1;var e=t*Math.PI;return Math.sin(e)/e*(.54+.46*Math.cos(e/1))}},{win:2,filter:function(t){if(t<=-2||2<=t)return 0;if(-1.1920929e-7<t&&t<1.1920929e-7)return 1;var e=t*Math.PI;return Math.sin(e)/e*Math.sin(e/2)/(e/2)}},{win:3,filter:function(t){if(t<=-3||3<=t)return 0;if(-1.1920929e-7<t&&t<1.1920929e-7)return 1;var e=t*Math.PI;return Math.sin(e)/e*Math.sin(e/3)/(e/3)}}]},{}],8:[function(t,e){"use strict";function i(t,e,i){if(n)e.set(function(t){return new Uint8Array(t.buffer,0,t.byteLength)}(t),i);else for(var r=i,o=0;o<t.length;o++){var a=t[o];e[r++]=255&a,e[r++]=a>>8&255}}var r=t("./resize_filter_gen"),n=!0;try{n=1===new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0]}catch(t){}e.exports=function(t){var e=t.src,n=t.width,o=t.height,a=t.toWidth,A=t.toHeight,s=t.scaleX||t.toWidth/t.width,u=t.scaleY||t.toHeight/t.height,h=t.offsetX||0,f=t.offsetY||0,c=t.dest||new Uint8Array(a*A*4),g=void 0===t.quality?3:t.quality,l=t.alpha||!1,I=r(g,n,a,s,h),p=r(g,o,A,u,f),m=this.__align(0+Math.max(e.byteLength,c.byteLength)),d=this.__align(m+o*a*4),w=this.__align(d+I.byteLength),B=this.__instance("resize",w+p.byteLength),b=new Uint8Array(this.__memory.buffer),y=new Uint32Array(this.__memory.buffer),_=new Uint32Array(e.buffer);return y.set(_),i(I,b,d),i(p,b,w),(B.exports.convolveHV||B.exports._convolveHV)(d,w,m,n,o,a,A),new Uint32Array(c.buffer).set(new Uint32Array(this.__memory.buffer,0,A*a)),l||function(t,e,i){for(var r=3,n=e*i*4|0;r<n;)t[r]=255,r=r+4|0}(c,a,A),c}},{"./resize_filter_gen":6}],9:[function(t,e){"use strict";function i(t,e){this.create=t,this.available=[],this.acquired={},this.lastId=1,this.timeoutId=0,this.idle=e||2e3}i.prototype.acquire=function(){var t,e=this;return 0!==this.available.length?t=this.available.pop():((t=this.create()).id=this.lastId++,t.release=function(){return e.release(t)}),this.acquired[t.id]=t},i.prototype.release=function(t){var e=this;delete this.acquired[t.id],t.lastUsed=Date.now(),this.available.push(t),0===this.timeoutId&&(this.timeoutId=setTimeout((function(){return e.gc()}),100))},i.prototype.gc=function(){var t=this,e=Date.now();this.available=this.available.filter((function(i){return!(e-i.lastUsed>t.idle&&(i.destroy(),1))})),this.timeoutId=0!==this.available.length?setTimeout((function(){return t.gc()}),100):0},e.exports=i},{}],10:[function(t,e){"use strict";e.exports=function(t,e,i,r,n,o){var a=(2*o+2+1)/n;if(.5<a)return[[i,r]];var A=Math.ceil(Math.log(Math.min(i/t,r/e))/Math.log(a));if(A<=1)return[[i,r]];for(var s=[],u=0;u<A;u++){var h=Math.round(Math.pow(Math.pow(t,A-u-1)*Math.pow(i,u+1),1/A)),f=Math.round(Math.pow(Math.pow(e,A-u-1)*Math.pow(r,u+1),1/A));s.push([h,f])}return s}},{}],11:[function(t,e){"use strict";function i(t){var e=Math.round(t);return Math.abs(t-e)<n?e:Math.floor(t)}function r(t){var e=Math.round(t);return Math.abs(t-e)<n?e:Math.ceil(t)}var n=1e-5;e.exports=function(t){var e,n,o,a,A,s,u=t.toWidth/t.width,h=t.toHeight/t.height,f=i(t.srcTileSize*u)-2*t.destTileBorder,c=i(t.srcTileSize*h)-2*t.destTileBorder;if(f<1||c<1)throw new Error("Internal error in pica: target tile width/height is too small.");var g,l=[];for(a=0;a<t.toHeight;a+=c)for(o=0;o<t.toWidth;o+=f)(e=o-t.destTileBorder)<0&&(e=0),e+(A=o+f+t.destTileBorder-e)>=t.toWidth&&(A=t.toWidth-e),(n=a-t.destTileBorder)<0&&(n=0),n+(s=a+c+t.destTileBorder-n)>=t.toHeight&&(s=t.toHeight-n),g={toX:e,toY:n,toWidth:A,toHeight:s,toInnerX:o,toInnerY:a,toInnerWidth:f,toInnerHeight:c,offsetX:e/u-i(e/u),offsetY:n/h-i(n/h),scaleX:u,scaleY:h,x:i(e/u),y:i(n/h),width:r(A/u),height:r(s/h)},l.push(g);return l}},{}],12:[function(t,e){"use strict";function i(t){return Object.prototype.toString.call(t)}e.exports.isCanvas=function(t){var e=i(t);return"[object HTMLCanvasElement]"===e||"[object Canvas]"===e},e.exports.isImage=function(t){return"[object HTMLImageElement]"===i(t)},e.exports.limiter=function(t){function e(){i<t&&r.length&&(i++,r.shift()())}var i=0,r=[];return function(t){return new Promise((function(n,o){r.push((function(){t().then((function(t){n(t),i--,e()}),(function(t){o(t),i--,e()}))})),e()}))}},e.exports.cib_quality_name=function(t){switch(t){case 0:return"pixelated";case 1:return"low";case 2:return"medium"}return"high"},e.exports.cib_support=function(){return Promise.resolve().then((function(){if("undefined"==typeof createImageBitmap||"undefined"==typeof document)return!1;var t=document.createElement("canvas");return t.width=100,t.height=100,createImageBitmap(t,0,0,100,100,{resizeWidth:10,resizeHeight:10,resizeQuality:"high"}).then((function(e){var i=10===e.width;return e.close(),t=null,i}))})).catch((function(){return!1}))}},{}],13:[function(t,e){"use strict";e.exports=function(){var e,i=t("./mathlib");onmessage=function(t){var r=t.data.opts,n=(e=e||new i(t.data.features)).resizeAndUnsharp(r);postMessage({result:n},[n.buffer])}}},{"./mathlib":1}],14:[function(t,e){function i(t,e,i,r,n,o){var a,A,s,u,h,f,c,g,l,I,p,m,d,w;for(l=0;l<o;l++){for(g=0,u=h=(a=t[f=(c=l)*n])*r[6],p=r[0],m=r[1],d=r[4],w=r[5],I=0;I<n;I++)s=(A=t[f])*p+a*m+u*d+h*w,h=u,a=A,i[g]=u=s,g++,f++;for(g--,c+=o*(n-1),u=h=(a=t[--f])*r[7],A=a,p=r[2],m=r[3],I=n-1;0<=I;I--)s=A*p+a*m+u*d+h*w,h=u,a=A,A=t[f],e[c]=i[g]+(u=s),f--,g--,c-=o}}var r,n,o,a,A,s;e.exports=function(t,e,u,h){if(h){var f=new Uint16Array(t.length),c=new Float32Array(Math.max(e,u)),g=function(t){t<.5&&(t=.5);var e=Math.exp(.527076)/t,i=Math.exp(-e),u=Math.exp(-2*e),h=(1-i)*(1-i)/(1+2*e*i-u);return n=(r=h)*(e-1)*i,o=h*(1+e)*i,a=-h*u,A=2*i,s=-u,new Float32Array([r,n,o,a,A,s,(r+n)/(1-A-s),(o+a)/(1-A-s)])}(h);i(t,f,c,g,e,u),i(f,t,c,g,u,e)}}},{}],15:[function(t,e){e.exports="function"==typeof Object.create?function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:function(t,e){if(e){var i=function(){};t.super_=e,i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t}}},{}],16:[function(t,e){"use strict";function i(t){if(!(this instanceof i))return new i(t);var e=r({},a,t||{});if(this.options=e,this.__cache={},this.__init_promise=null,this.__modules=e.modules||{},this.__memory=null,this.__wasm={},this.__isLE=1===new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0],!this.options.js&&!this.options.wasm)throw new Error('mathlib: at least "js" or "wasm" should be enabled')}var r=t("object-assign"),n=t("./lib/base64decode"),o=t("./lib/wa_detect"),a={js:!0,wasm:!0};i.prototype.has_wasm=o,i.prototype.use=function(t){return this.__modules[t.name]=t,this[t.name]=this.options.wasm&&this.has_wasm()&&t.wasm_fn?t.wasm_fn:t.fn,this},i.prototype.init=function(){if(this.__init_promise)return this.__init_promise;if(!this.options.js&&this.options.wasm&&!this.has_wasm())return Promise.reject(new Error('mathlib: only "wasm" was enabled, but it\'s not supported'));var t=this;return this.__init_promise=Promise.all(Object.keys(t.__modules).map((function(e){var i=t.__modules[e];return t.options.wasm&&t.has_wasm()&&i.wasm_fn?t.__wasm[e]?null:WebAssembly.compile(t.__base64decode(i.wasm_src)).then((function(i){t.__wasm[e]=i})):null}))).then((function(){return t})),this.__init_promise},i.prototype.__base64decode=n,i.prototype.__reallocate=function(t){if(!this.__memory)return this.__memory=new WebAssembly.Memory({initial:Math.ceil(t/65536)}),this.__memory;var e=this.__memory.buffer.byteLength;return e<t&&this.__memory.grow(Math.ceil((t-e)/65536)),this.__memory},i.prototype.__instance=function(t,e,i){if(e&&this.__reallocate(e),this.__wasm[t]||(this.__wasm[t]=new WebAssembly.Module(this.__base64decode(this.__modules[t].wasm_src))),!this.__cache[t]){var n={memoryBase:0,memory:this.__memory,tableBase:0,table:new WebAssembly.Table({initial:0,element:"anyfunc"})};this.__cache[t]=new WebAssembly.Instance(this.__wasm[t],{env:r(n,i||{})})}return this.__cache[t]},i.prototype.__align=function(t,e){var i=t%(e=e||8);return t+(i?e-i:0)},e.exports=i},{"./lib/base64decode":17,"./lib/wa_detect":23,"object-assign":24}],17:[function(t,e){"use strict";e.exports=function(t){for(var e=t.replace(/[\r\n=]/g,""),i=e.length,r=new Uint8Array(3*i>>2),n=0,o=0,a=0;a<i;a++)a%4==0&&a&&(r[o++]=n>>16&255,r[o++]=n>>8&255,r[o++]=255&n),n=n<<6|"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(a));var A=i%4*6;return 0==A?(r[o++]=n>>16&255,r[o++]=n>>8&255,r[o++]=255&n):18==A?(r[o++]=n>>10&255,r[o++]=n>>2&255):12==A&&(r[o++]=n>>4&255),r}},{}],18:[function(t,e){"use strict";e.exports=function(t,e,i){for(var r,n,o,a=e*i,A=new Uint16Array(a),s=0;s<a;s++)o=t[4*s+2],A[s]=257*(((n=t[4*s+1])<=(r=t[4*s])&&o<=r?r:o<=n&&r<=n?n:o)+(r<=n&&r<=o?r:n<=o&&n<=r?n:o))>>1;return A}},{}],19:[function(t,e){"use strict";e.exports={name:"unsharp_mask",fn:t("./unsharp_mask"),wasm_fn:t("./unsharp_mask_wasm"),wasm_src:t("./unsharp_mask_wasm_base64")}},{"./unsharp_mask":20,"./unsharp_mask_wasm":21,"./unsharp_mask_wasm_base64":22}],20:[function(t,e){"use strict";var i=t("glur/mono16"),r=t("./hsl_l16");e.exports=function(t,e,n,o,a,A){var s,u,h,f,c,g,l,I,p,m,d,w,B;if(!(0===o||a<.5)){2<a&&(a=2);var b=r(t,e,n),y=new Uint16Array(b);i(y,e,n,a);for(var _=o/100*4096+.5|0,E=257*A|0,C=e*n,Q=0;Q<C;Q++)w=2*(b[Q]-y[Q]),Math.abs(w)>=E&&(s=t[B=4*Q],h=t[2+B],g=257*((I=(u=t[1+B])<=s&&h<=s?s:s<=u&&h<=u?u:h)+(l=s<=u&&s<=h?s:u<=s&&u<=h?u:h))>>1,f=l===I?c=0:(c=g<=32767?4095*(I-l)/(I+l)|0:4095*(I-l)/(510-I-l)|0,s===I?65535*(u-h)/(6*(I-l))|0:u===I?21845+(65535*(h-s)/(6*(I-l))|0):43690+(65535*(s-u)/(6*(I-l))|0)),65535<(g+=_*w+2048>>12)?g=65535:g<0&&(g=0),0===c?s=u=h=g>>8:(p=2*g-(m=g<=32767?g*(4096+c)+2048>>12:g+((65535-g)*c+2048>>12))>>8,m>>=8,s=43690<=(d=f+21845&65535)?p:32767<=d?p+(6*(m-p)*(43690-d)+32768>>16):10922<=d?m:p+(6*(m-p)*d+32768>>16),u=43690<=(d=65535&f)?p:32767<=d?p+(6*(m-p)*(43690-d)+32768>>16):10922<=d?m:p+(6*(m-p)*d+32768>>16),h=43690<=(d=f-21845&65535)?p:32767<=d?p+(6*(m-p)*(43690-d)+32768>>16):10922<=d?m:p+(6*(m-p)*d+32768>>16)),t[B]=s,t[1+B]=u,t[2+B]=h)}}},{"./hsl_l16":18,"glur/mono16":14}],21:[function(t,e){"use strict";e.exports=function(t,e,i,r,n,o){if(!(0===r||n<.5)){2<n&&(n=2);var a=e*i,A=4*a,s=2*a,u=2*a,h=4*Math.max(e,i),f=A,c=f+s,g=c+u,l=g+u,I=l+h,p=this.__instance("unsharp_mask",A+s+2*u+h+32,{exp:Math.exp}),m=new Uint32Array(t.buffer);new Uint32Array(this.__memory.buffer).set(m);var d=p.exports.hsl_l16||p.exports._hsl_l16;d(0,f,e,i),(d=p.exports.blurMono16||p.exports._blurMono16)(f,c,g,l,I,e,i,n),(d=p.exports.unsharp||p.exports._unsharp)(0,0,f,c,e,i,r,o),m.set(new Uint32Array(this.__memory.buffer,0,a))}}},{}],22:[function(t,e){"use strict";e.exports="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"},{}],23:[function(t,e){"use strict";var i;e.exports=function(){if(void 0!==i)return i;if(i=!1,"undefined"==typeof WebAssembly)return i;try{var t=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),e=new WebAssembly.Module(t);return 0!==new WebAssembly.Instance(e,{}).exports.test(4)&&(i=!0),i}catch(t){}return i}},{}],24:[function(t,e){"use strict";var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(i({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t){for(var e,i,a=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),A=1;A<arguments.length;A++){for(var s in e=Object(arguments[A]))n.call(e,s)&&(a[s]=e[s]);if(r){i=r(e);for(var u=0;u<i.length;u++)o.call(e,i[u])&&(a[i[u]]=e[i[u]])}}return a}},{}],25:[function(t,e,i){var r=arguments[3],n=arguments[4],o=arguments[5],a=JSON.stringify;e.exports=function(t,e){for(var i,A=Object.keys(o),s=0,u=A.length;s<u;s++){var h=A[s],f=o[h].exports;if(f===t||f&&f.default===t){i=h;break}}if(!i){i=Math.floor(Math.pow(16,8)*Math.random()).toString(16);var c={};for(s=0,u=A.length;s<u;s++)c[h=A[s]]=h;n[i]=["function(require,module,exports){"+t+"(self); }",c]}var g=Math.floor(Math.pow(16,8)*Math.random()).toString(16),l={};l[i]=i,n[g]=["function(require,module,exports){var f = require("+a(i)+");(f.default ? f.default : f)(self);}",l];var I={};!function t(e){for(var i in I[e]=!0,n[e][1]){var r=n[e][1][i];I[r]||t(r)}}(g);var p="("+r+")({"+Object.keys(I).map((function(t){return a(t)+":["+n[t][0]+","+a(n[t][1])+"]"})).join(",")+"},{},["+a(g)+"])",m=window.URL||window.webkitURL||window.mozURL||window.msURL,d=new Blob([p],{type:"text/javascript"});if(e&&e.bare)return d;var w=m.createObjectURL(d),B=new Worker(w);return B.objectURL=w,B}},{}],"/":[function(t,e){"use strict";function i(){return{value:o(u),destroy:function(){if(this.value.terminate(),"undefined"!=typeof window){var t=window.URL||window.webkitURL||window.mozURL||window.msURL;t&&t.revokeObjectURL&&this.value.objectURL&&t.revokeObjectURL(this.value.objectURL)}}}}function r(t){if(!(this instanceof r))return new r(t);this.options=n({},m,t||{});var e="lk_".concat(this.options.concurrency);this.__limit=c[e]||s.limiter(this.options.concurrency),c[e]||(c[e]=this.__limit),this.features={js:!1,wasm:!1,cib:!1,ww:!1},this.__workersPool=null,this.__requested_features=[],this.__mathlib=null}var n=t("object-assign"),o=t("webworkify"),a=t("./lib/mathlib"),A=t("./lib/pool"),s=t("./lib/utils"),u=t("./lib/worker"),h=t("./lib/stepper"),f=t("./lib/tiler"),c={},g=!1;try{"undefined"!=typeof navigator&&navigator.userAgent&&(g=0<=navigator.userAgent.indexOf("Safari"))}catch(e){}var l=1;"undefined"!=typeof navigator&&(l=Math.min(navigator.hardwareConcurrency||1,4));var I,p,m={tile:1024,concurrency:l,features:["js","wasm","ww"],idle:2e3},d={quality:3,alpha:!1,unsharpAmount:0,unsharpRadius:0,unsharpThreshold:0};r.prototype.init=function(){var e=this;if(this.__initPromise)return this.__initPromise;if(!1!==I&&!0!==I&&(I=!1,"undefined"!=typeof ImageData&&"undefined"!=typeof Uint8ClampedArray))try{new ImageData(new Uint8ClampedArray(400),10,10),I=!0}catch(o){}!1!==p&&!0!==p&&(p=!1,"undefined"!=typeof ImageBitmap&&(ImageBitmap.prototype&&ImageBitmap.prototype.close?p=!0:this.debug("ImageBitmap does not support .close(), disabled")));var r=this.options.features.slice();if(0<=r.indexOf("all")&&(r=["cib","wasm","js","ww"]),this.__requested_features=r,this.__mathlib=new a(r),0<=r.indexOf("ww")&&"undefined"!=typeof window&&"Worker"in window)try{t("webworkify")((function(){})).terminate(),this.features.ww=!0;var o="wp_".concat(JSON.stringify(this.options));c[o]?this.__workersPool=c[o]:(this.__workersPool=new A(i,this.options.idle),c[o]=this.__workersPool)}catch(o){}var u,h=this.__mathlib.init().then((function(t){n(e.features,t.features)}));return u=p?s.cib_support().then((function(t){e.features.cib&&r.indexOf("cib")<0?e.debug("createImageBitmap() resize supported, but disabled by config"):0<=r.indexOf("cib")&&(e.features.cib=t)})):Promise.resolve(!1),this.__initPromise=Promise.all([h,u]).then((function(){return e})),this.__initPromise},r.prototype.resize=function(t,e,i){var r=this;this.debug("Start resize...");var o=n({},d);if(isNaN(i)?i&&(o=n(o,i)):o=n(o,{quality:i}),o.toWidth=e.width,o.toHeight=e.height,o.width=t.naturalWidth||t.width,o.height=t.naturalHeight||t.height,0===e.width||0===e.height)return Promise.reject(new Error("Invalid output size: ".concat(e.width,"x").concat(e.height)));2<o.unsharpRadius&&(o.unsharpRadius=2);var a=!1,A=null;o.cancelToken&&(A=o.cancelToken.then((function(t){throw a=!0,t}),(function(t){throw a=!0,t})));var u=Math.ceil(Math.max(3,2.5*o.unsharpRadius|0));return this.init().then((function(){function i(t,e,i){var n,o,h;return Promise.resolve().then((function(){if(h=e.getContext("2d",{alpha:Boolean(i.alpha)}),s.isCanvas(t))return n=t.getContext("2d",{alpha:Boolean(i.alpha)}),null;if(s.isImage(t))return p?(r.debug("Decode image via createImageBitmap"),createImageBitmap(t).then((function(t){o=t}))):null;throw new Error('".from" should be image or canvas')})).then((function(){function c(){o&&(o.close(),o=null)}if(a)return A;r.debug("Calculate tiles");var p=f({width:i.width,height:i.height,srcTileSize:r.options.tile,toWidth:i.toWidth,toHeight:i.toHeight,destTileBorder:u}).map((function(e){return function(e){return r.__limit((function(){if(a)return A;var u;if(s.isCanvas(t))r.debug("Get tile pixel data"),u=n.getImageData(e.x,e.y,e.width,e.height);else{r.debug("Draw tile imageBitmap/image to temporary canvas");var f=document.createElement("canvas");f.width=e.width,f.height=e.height;var c=f.getContext("2d",{alpha:Boolean(i.alpha)});c.globalCompositeOperation="copy",c.drawImage(o||t,e.x,e.y,e.width,e.height,0,0,e.width,e.height),r.debug("Get tile pixel data"),u=c.getImageData(0,0,e.width,e.height),c=f=null}var p={src:u.data,width:e.width,height:e.height,toWidth:e.toWidth,toHeight:e.toHeight,scaleX:e.scaleX,scaleY:e.scaleY,offsetX:e.offsetX,offsetY:e.offsetY,quality:i.quality,alpha:i.alpha,unsharpAmount:i.unsharpAmount,unsharpRadius:i.unsharpRadius,unsharpThreshold:i.unsharpThreshold};return r.debug("Invoke resize math"),Promise.resolve().then((function(){return function(t){return Promise.resolve().then((function(){return r.features.ww?new Promise((function(e,i){var n=r.__workersPool.acquire();A&&A.catch((function(t){return i(t)})),n.value.onmessage=function(t){n.release(),t.data.err?i(t.data.err):e(t.data.result)},n.value.postMessage({opts:t,features:r.__requested_features,preload:{wasm_nodule:r.__mathlib.__}},[t.src.buffer])})):r.__mathlib.resizeAndUnsharp(t,l)}))}(p)})).then((function(t){if(a)return A;var i;if(u=null,r.debug("Convert raw rgba tile result to ImageData"),I)i=new ImageData(new Uint8ClampedArray(t),e.toWidth,e.toHeight);else if((i=h.createImageData(e.toWidth,e.toHeight)).data.set)i.data.set(t);else for(var n=i.data.length-1;0<=n;n--)i.data[n]=t[n];return r.debug("Draw tile"),g?h.putImageData(i,e.toX,e.toY,e.toInnerX-e.toX,e.toInnerY-e.toY,e.toInnerWidth+1e-5,e.toInnerHeight+1e-5):h.putImageData(i,e.toX,e.toY,e.toInnerX-e.toX,e.toInnerY-e.toY,e.toInnerWidth,e.toInnerHeight),null}))}))}(e)}));return r.debug("Process tiles"),Promise.all(p).then((function(){return r.debug("Finished!"),c(),e}),(function(t){throw c(),t}))}))}if(a)return A;if(r.features.cib){var c=e.getContext("2d",{alpha:Boolean(o.alpha)});return r.debug("Resize via createImageBitmap()"),createImageBitmap(t,{resizeWidth:o.toWidth,resizeHeight:o.toHeight,resizeQuality:s.cib_quality_name(o.quality)}).then((function(t){if(a)return A;if(!o.unsharpAmount)return c.drawImage(t,0,0),t.close(),c=null,r.debug("Finished!"),e;r.debug("Unsharp result");var i=document.createElement("canvas");i.width=o.toWidth,i.height=o.toHeight;var n=i.getContext("2d",{alpha:Boolean(o.alpha)});n.drawImage(t,0,0),t.close();var s=n.getImageData(0,0,o.toWidth,o.toHeight);return r.__mathlib.unsharp_mask(s.data,o.toWidth,o.toHeight,o.unsharpAmount,o.unsharpRadius,o.unsharpThreshold),c.putImageData(s,0,0),s=n=i=c=null,r.debug("Finished!"),e}))}var l={};return function t(e,r,o,s){if(a)return A;var u,h=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],r=!0,n=!1,o=void 0;try{for(var a,A=t[Symbol.iterator]();!(r=(a=A.next()).done)&&(i.push(a.value),!e||i.length!==e);r=!0);}catch(t){n=!0,o=t}finally{try{r||null==A.return||A.return()}finally{if(n)throw o}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(e.shift(),2),f=h[0],c=h[1],g=0===e.length;return s=n({},s,{toWidth:f,toHeight:c,quality:g?s.quality:Math.min(1,s.quality)}),g||((u=document.createElement("canvas")).width=f,u.height=c),i(r,g?o:u,s).then((function(){return g?o:(s.width=f,s.height=c,t(e,u,o,s))}))}(h(o.width,o.height,o.toWidth,o.toHeight,r.options.tile,u),t,e,o)}))},r.prototype.resizeBuffer=function(t){var e=this,i=n({},d,t);return this.init().then((function(){return e.__mathlib.resizeAndUnsharp(i)}))},r.prototype.toBlob=function(t,e,i){return e=e||"image/png",new Promise((function(r){if(t.toBlob)t.toBlob((function(t){return r(t)}),e,i);else{for(var n=atob(t.toDataURL(e,i).split(",")[1]),o=n.length,a=new Uint8Array(o),A=0;A<o;A++)a[A]=n.charCodeAt(A);r(new Blob([a],{type:e}))}}))},r.prototype.debug=function(){},e.exports=r},{"./lib/mathlib":1,"./lib/pool":9,"./lib/stepper":10,"./lib/tiler":11,"./lib/utils":12,"./lib/worker":13,"object-assign":24,webworkify:25}]},{},[])("/")},"object"==r(e)&&void 0!==t?t.exports=a():void 0===(o="function"==typeof(n=a)?n.apply(e,[]):n)||(t.exports=o)}}]);
//# sourceMappingURL=0.chunk.c61c7.js.map