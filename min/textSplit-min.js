jsObject.extend({expand:function(e){var i,n,t,r,l,s=e.innerHTML.split(" "),d="<div style='position:relative;display:inline;'>"+s.join("</div> <div style='position:relative;display:inline;'>")+"</div>";for(e.innerHTML=d,i=e.children,n=[],t=0;t<e.children.length;t++)for(r=e.children[t],r.innerHTML="<div style='position:relative;display:inline;'>"+r.innerHTML.split("").join("</div><div style='position:relative;display:inline;'>")+"</div>",l=0;l<r.children.length;l++)n.push(r.children[l]);return{allchar:n,words:i}},revert:function(e){var i=/<(div+)[^>]*?(\/)?>/g,n=/<\/div>/g;e.innerHTML=e.innerHTML.replace(i,"").replace(n,"")}}),jsObject.prototype.expand=function(){return{rvalue:jsObject.expand(this.el),current:this}},jsObject.prototype.revert=function(){return jsObject.revert(this.el),this};