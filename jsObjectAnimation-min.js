function jsObject(e){if(this===window)return new jsObject(e);var t=typeof e;"string"===t?this.el=document.getElementById(e):"object"===t&&"undefined"!==e.nodeType&&1===e.nodeType&&(this.el=e)}function toCamelCase(e){return e.replace(/-([a-z])/gi,function(e,t){return t.toUpperCase()})}var animationObj,getStyle,cfn;jsObject.extend=function(e){for(var t in e)this[t]=e[t];return this},animationObj=function(e){function t(){if(c){c=!1;for(i in s)clearInterval(s[i])}else{c=!0;for(i in s)s[i]=cfn(o[i],1)}}function n(e,n){var r,i,f,y,p;if(c&&(t(),u=100,o={},s={}),!n)throw{message:"Invalid argument"};r=0;for(styleValue in n)r++,i=e.style,f=n.ease?n.ease:"linearTween",i.hasOwnProperty(toCamelCase(styleValue))?(s[r]=0,y=getStyle(e,styleValue),y=isNaN(parseInt(y))?10:parseInt(y),u=0,p=typeof n[styleValue],"string"!==p&&"time"!==styleValue&&a(e,y,styleValue,n[styleValue],r,f)):("time"==styleValue&&(l=n[styleValue]),"ease"==styleValue&&(f=n.ease))}function a(t,n,a,r,i,f){c=!0;var y=t.style;!function(){var t=o[i]=function(){if(l>=u&&y[a]!==r+"px"){u++;var i=e[f](u,n,r-n,l)+"px";y[a]=i}else clearInterval(t.clearId),c=!1,y[a]=r+"px"};s[i]=cfn(t,1)}()}function r(e,t,n,a){return n*e/a+t}var u=0,l=100,s={},o={},c=!1;return{pause:t,animate:n,linearTween:r}}(jsObject),jsObject.extend(animationObj),jsObject.prototype={animate:function(e){return jsObject.animate(this.el,e),this},pause:function(){return jsObject.pause(),this}},getStyle=function(){return"undefined"!=typeof getComputedStyle?function(e,t){return window.getComputedStyle(e,null).getPropertyValue(t)}:function(e,t){return e.currentStyle[toCamelCase(t)]}}(),cfn=function(){var e=window.setInterval,t=function(t,n){var a=e(function(){t()},n);return t.clearId=a,a};return t}();