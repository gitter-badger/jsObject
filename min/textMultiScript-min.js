jsObject.onReady(function(){var e,t,a=jsObject("main"),c=90,n=a.el.children,s=10,i=100,o=jsObject("splitId"),j=!1,l=function(e){39==e.keyCode?O():37==e.keyCode&&b()},d=function(){var e,t;for(e=n.length-1;e>=0;e--)t=jsObject(n[e]),t.animate({delay:7*e,time:300,ease:"easeInOutElastic",top:s,width:10*Math.random()+5})},b=function(){s-=i,d()},O=function(){s+=i,d()},m=function(){jsObject.pause()},r=function(){o.revert(),j=!1},u=function(){var e,t,a,c,n;if(!j)for(e=o.expand(),t=20,j=!0,words=e.rvalue.allchar,a=0,c=words.length;c>a;a++)n=20*a,jsObject(words[a]).animate({time:60,delay:n,ease:"easeInBack","font-size":t,top:-20}).el.acb=function(){jsObject(this).animate({time:60,delay:0,top:0,ease:"easeOutBack","font-size":30},r).toggleClass("toggle").el.acb=function(){jsObject.toggleClass(this,"toggle")}}};for(e=1;c>=e;e++)t=jsObject.createElement({tagName:"span",className:"box"}),jsObject("main").el.appendChild(t);jsObject.addEvent(document,"keydown",l),jsObject(f.moveRight).click(O),jsObject(f.pause).click(m),jsObject(f.moveLeft).click(b),jsObject(f.textAnimation).click(u)});