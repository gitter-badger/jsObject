var arForFunClass,inc,tempVal;for(log=function(e){console.log(e)},arForFunClass=["addClass","removeClass","toggleClass","hasClass","css","click","mouseover","mouseout","addEvent","removeEvent"],inc=0;inc<arForFunClass.length;inc++)tempVal=arForFunClass[inc],jsObject.prototype[tempVal]=function(e){return"css"==e?function(t,n){jsObject[e](this.el,t,n)}:"click"==e||"mouseover"==e||"mouseout"==e?function(t){var n=this;return jsObject.addEvent(this.el,e,function(e){t.call(n,e)}),this}:"addEvent"==e||"removeEvent"==e?function(t,n){var s=this;return jsObject[e](this.el,t,function(e){n.call(s,e)}),this}:function(t){return jsObject[e](this.el,t),this}}(tempVal);"undefined"!=typeof addEventListener?(jsObject.addEvent=function(e,t,n){e.addEventListener(t,n,!1)},jsObject.removeEvent=function(e,t,n){e.removeEventListener(t,n,!1)}):"undefined"!=typeof attachEvent?(jsObject.addEvent=function(e,t,n){var s="e_"+t+n;e[s]=function(){var t=event.type,s=null;("mouseover"===t||"mouseout"===t)&&(s="mouseover"===t?event.fromElement:event.toElement),n.call(e,{target:event.srcElement,type:t,relatedTarget:s,_event:event,preventDefault:function(){this._event.returnValue=!1},stopPropagation:function(){this._event.cancelBubble=!0}})},e.attachEvent("on"+t,e[s])},jsObject.removeEvent=function(e,t,n){var s="e_"+t+n;void 0!==e[s]&&(e.detachEvent("on"+t,e[s]),delete e[s])}):(jsObject.addEvent=function(e,t,n){e["on"+t]=n},jsObject.removeEvent=function(e,t,n){e["on"+t]=null}),jsObject.extend({css:function(e,t,n){var s,r=typeof t,a=typeof n,i=e.style;if("undefined"!==r&&"undefined"===a){if("object"!==r){if("string"===r)return getStyle(e,t);throw{message:"Invalid parameter passed to css()"}}for(s in t)t.hasOwnProperty(s)&&(i[toCamelCase(s)]=t[s])}else{if("string"!==r||"string"!==a)throw{message:"Invalid parameters passed to css()"};i[toCamelCase(t)]=n}},hasClass:function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1},addClass:function(e,t){var n,s,r,a=e.className;if(a){for(n=t.split(/\s+/),s=n.length,r=0;s>r;r++)this.hasClass(e,n[r])||(a+=" "+n[r]);e.className=a.trim()}else e.className=t},removeClass:function(e,t){var n,s,r,a;if(t){for(n=t.split(/\s+/),s=" "+e.className+" ",r=n.length,a=0;r>a;a++)s=s.replace(" "+n[a]+" "," ");e.className=s.trim()}else e.className=""},toggleClass:function(e,t){for(var n=t.split(/\s+/),s=0,r;r=n[s++];)this[this.hasClass(e,r)?"removeClass":"addClass"](e,r)},createElement:function(e){var t,n,s,r,a;if(!e||!e.tagName)throw{message:"Invalid argument"};if(t=document.createElement(e.tagName),e.id&&(t.id=e.id),e.className&&(t.className=e.className),e.html&&(t.innerHTML=e.html),void 0!==e.attributes){n=e.attributes;for(s in n)n.hasOwnProperty(s)&&t.setAttribute(s,n[s])}if(void 0!==e.children)for(a=0;r=e.children[a++];)t.appendChild(this.createElement(r));return t}}),jsObject.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(s){t=void 0}return!t||t.getElementsByTagName("parsererror").length,t},jsObject.prototype.append=function(e){if(void 0!==e.nodeType&&1===e.nodeType)this.el.appendChild(e);else if(e instanceof jsObject)this.el.appendChild(e.el);else if("string"==typeof e){var t=this.el.innerHTML;this.el.innerHTML=t+e}return this},jsObject.prototype.html=function(e){return void 0!==e?(this.el.innerHTML=e,this):this.el.innerHTML},void 0===String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")});