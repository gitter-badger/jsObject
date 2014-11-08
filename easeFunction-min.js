extend(jsObject,{easeInQuad:function(t,n,e,u){return e*(t/=u)*t+n},easeOutQuad:function(t,n,e,u){return-e*(t/=u)*(t-2)+n},easeInOutQuad:function(t,n,e,u){return(t/=u/2)<1?e/2*t*t+n:-e/2*(--t*(t-2)-1)+n},easeInCubic:function(t,n,e,u){return e*(t/=u)*t*t+n},easeOutCubic:function(t,n,e,u){return e*((t=t/u-1)*t*t+1)+n},easeInOutCubic:function(t,n,e,u){return(t/=u/2)<1?e/2*t*t*t+n:e/2*((t-=2)*t*t+2)+n},easeInQuart:function(t,n,e,u){return e*(t/=u)*t*t*t+n},easeOutQuart:function(t,n,e,u){return-e*((t=t/u-1)*t*t*t-1)+n},easeInOutQuart:function(t,n,e,u){return(t/=u/2)<1?e/2*t*t*t*t+n:-e/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(t,n,e,u){return e*(t/=u)*t*t*t*t+n},easeOutQuint:function(t,n,e,u){return e*((t=t/u-1)*t*t*t*t+1)+n},easeInOutQuint:function(t,n,e,u){return(t/=u/2)<1?e/2*t*t*t*t*t+n:e/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(t,n,e,u){return-e*Math.cos(t/u*(Math.PI/2))+e+n},easeOutSine:function(t,n,e,u){return e*Math.sin(t/u*(Math.PI/2))+n},easeInOutSine:function(t,n,e,u){return-e/2*(Math.cos(Math.PI*t/u)-1)+n},easeInExpo:function(t,n,e,u){return 0==t?n:e*Math.pow(2,10*(t/u-1))+n},easeOutExpo:function(t,n,e,u){return t==u?n+e:e*(-Math.pow(2,-10*t/u)+1)+n},easeInOutExpo:function(t,n,e,u){return 0==t?n:t==u?n+e:(t/=u/2)<1?e/2*Math.pow(2,10*(t-1))+n:e/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(t,n,e,u){return-e*(Math.sqrt(1-(t/=u)*t)-1)+n},easeOutCirc:function(t,n,e,u){return e*Math.sqrt(1-(t=t/u-1)*t)+n},easeInOutCirc:function(t,n,e,u){return(t/=u/2)<1?-e/2*(Math.sqrt(1-t*t)-1)+n:e/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(t,n,e,u){var a=1.70158,r=0,i=e;return 0==t?n:1==(t/=u)?n+e:(r||(r=.3*u),i<Math.abs(e)?(i=e,a=r/4):a=r/(2*Math.PI)*Math.asin(e/i),-(i*Math.pow(2,10*(t-=1))*Math.sin(2*(t*u-a)*Math.PI/r))+n)},easeOutElastic:function(t,n,e,u){var a=1.70158,r=0,i=e;return 0==t?n:1==(t/=u)?n+e:(r||(r=.3*u),i<Math.abs(e)?(i=e,a=r/4):a=r/(2*Math.PI)*Math.asin(e/i),i*Math.pow(2,-10*t)*Math.sin(2*(t*u-a)*Math.PI/r)+e+n)},easeInOutElastic:function(t,n,e,u){var a=1.70158,r=0,i=e;return 0==t?n:2==(t/=u/2)?n+e:(r||(r=.3*u*1.5),i<Math.abs(e)?(i=e,a=r/4):a=r/(2*Math.PI)*Math.asin(e/i),1>t?-.5*i*Math.pow(2,10*(t-=1))*Math.sin(2*(t*u-a)*Math.PI/r)+n:i*Math.pow(2,-10*(t-=1))*Math.sin(2*(t*u-a)*Math.PI/r)*.5+e+n)},easeInBack:function(t,n,e,u,a){return void 0==a&&(a=1.70158),e*(t/=u)*t*((a+1)*t-a)+n},easeOutBack:function(t,n,e,u,a){return void 0==a&&(a=1.70158),e*((t=t/u-1)*t*((a+1)*t+a)+1)+n},easeInOutBack:function(t,n,e,u,a){return void 0==a&&(a=1.70158),(t/=u/2)<1?e/2*t*t*(((a*=1.525)+1)*t-a)+n:e/2*((t-=2)*t*(((a*=1.525)+1)*t+a)+2)+n},easeInBounce:function(t,n,e,u){return e-this.easeOutBounce(u-t,0,e,u)+n},easeOutBounce:function(t,n,e,u){return(t/=u)<1/2.75?7.5625*e*t*t+n:2/2.75>t?e*(7.5625*(t-=1.5/2.75)*t+.75)+n:2.5/2.75>t?e*(7.5625*(t-=2.25/2.75)*t+.9375)+n:e*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(t,n,e,u){return u/2>t?.5*this.easeInBounce(2*t,0,e,u)+n:.5*this.easeOutBounce(2*t-u,0,e,u)+.5*e+n}})();