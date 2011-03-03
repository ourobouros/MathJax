/*
 *  /MathJax/jax/output/HTML-CSS/autoload/maction.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var g="1.0.2";var c=MathJax.ElementJax.mml,e=MathJax.OutputJax["HTML-CSS"];var d,f,b;var a=e.config.tooltip=MathJax.Hub.Insert({delayPost:600,delayClear:600,offsetX:10,offsetY:5},e.config.tooltip||{});c.maction.Augment({HTMLtooltip:e.addElement(document.body,"div",{id:"MathJax_Tooltip"}),toHTML:function(k,h,m){k=this.HTMLhandleSize(this.HTMLcreateSpan(k));k.bbox=null;var i=this.getValues("actiontype","selection"),n;var j=this.data[i.selection-1];if(j){e.Measured(j.toHTML(k),k);if(m!=null){e.Remeasured(j.HTMLstretchV(k,h,m),k)}else{if(h!=null){e.Remeasured(j.HTMLstretchH(k,h),k)}}if(e.msieHitBoxBug){var l=e.addElement(k,"span");n=e.createFrame(l,k.bbox.h,k.bbox.d,k.bbox.w,0,"none");k.insertBefore(l,k.firstChild);l.style.marginRight=e.Em(-k.bbox.w);if(e.msieInlineBlockAlignBug){n.style.verticalAlign=e.Em(e.getHD(k).d-k.bbox.d)}}else{n=e.createFrame(k,k.bbox.h,k.bbox.d,k.bbox.w,0,"none");k.insertBefore(n,k.firstChild);n.style.marginRight=e.Em(-k.bbox.w)}n.className="MathJax_HitBox";n.id="MathJax-HitBox-"+this.spanID;if(this.HTMLaction[i.actiontype]){this.HTMLaction[i.actiontype].call(this,k,n,i.selection)}}this.HTMLhandleSpace(k);this.HTMLhandleColor(k);return k},HTMLstretchH:c.mbase.HTMLstretchH,HTMLstretchV:c.mbase.HTMLstretchV,HTMLaction:{toggle:function(i,j,h){this.selection=h;j.onclick=i.childNodes[1].onclick=MathJax.Callback(["HTMLclick",this]);j.style.cursor=i.childNodes[1].style.cursor="pointer"},statusline:function(i,j,h){j.onmouseover=i.childNodes[1].onmouseover=MathJax.Callback(["HTMLsetStatus",this]);j.onmouseout=i.childNodes[1].onmouseout=MathJax.Callback(["HTMLclearStatus",this]);j.onmouseover.autoReset=j.onmouseout.autoReset=true},tooltip:function(i,j,h){if(this.data[1]&&this.data[1].isToken){j.title=j.alt=i.childNodes[1].title=i.childNodes[1].alt=this.data[1].data.join("")}else{j.onmouseover=i.childNodes[1].onmouseover=MathJax.Callback(["HTMLtooltipOver",this]);j.onmouseout=i.childNodes[1].onmouseout=MathJax.Callback(["HTMLtooltipOut",this]);j.onmouseover.autoReset=j.onmouseout.autoReset=true}}},HTMLclick:function(j){this.selection++;if(this.selection>this.data.length){this.selection=1}var k=this;while(k.type!=="math"){k=k.inherit}var h=k.HTMLspanElement();while(h.nodeName.toLowerCase()!=="nobr"){h=h.parentNode}var i=h.parentNode;i.removeChild(h);var l=i;if(i.parentNode.className==="MathJax_Display"){l=i.parentNode}k.toHTML(i,l);if(!j){j=window.event}if(j.preventDefault){j.preventDefault()}if(j.stopPropagation){j.stopPropagation()}j.cancelBubble=true;j.returnValue=false;return false},HTMLsetStatus:function(h){window.status=((this.data[1]&&this.data[1].isToken)?this.data[1].data.join(""):this.data[1].toString())},HTMLclearStatus:function(h){window.status=""},HTMLtooltipOver:function(i){if(!i){i=window.event}if(b){clearTimeout(b);b=null}if(f){clearTimeout(f)}var h=i.clientX;var k=i.clientY;var j=MathJax.Callback(["HTMLtooltipPost",this,h+a.offsetX,k+a.offsetY]);f=setTimeout(j,a.delayPost)},HTMLtooltipOut:function(h){if(f){clearTimeout(f);f=null}if(b){clearTimeout(b)}var i=MathJax.Callback(["HTMLtooltipClear",this,80]);b=setTimeout(i,a.delayClear)},HTMLtooltipPost:function(i,m){f=null;if(b){clearTimeout(b);b=null}var l=this.HTMLtooltip;l.style.display="block";l.style.opacity="";l.style.filter=e.config.styles["#MathJax_Tooltip"].filter;if(this===d){return}l.style.left=i+"px";l.style.top=m+"px";l.innerHTML='<span class="MathJax"><nobr></nobr></span>';e.getScales(l.firstChild,l.firstChild);var h=e.createStack(l.firstChild.firstChild);var k=e.createBox(h);try{e.Measured(this.data[1].toHTML(k),k)}catch(j){if(!j.restart){throw j}l.style.display="none";MathJax.Callback.After(["HTMLtooltipPost",this,i,m],j.restart)}e.placeBox(k,0,0);e.createRule(l.firstChild.firstChild,k.bbox.h,k.bbox.d,0);d=this},HTMLtooltipClear:function(i){var h=this.HTMLtooltip;if(i<=0){h.style.display="none";h.style.opacity=h.style.filter="";b=null}else{h.style.opacity=i/100;h.style.filter="alpha(opacity="+i+")";b=setTimeout(MathJax.Callback(["HTMLtooltipClear",this,i-20]),50)}}});MathJax.Hub.Browser.Select({MSIE:function(h){e.msieHitBoxBug=true}});MathJax.Hub.Startup.signal.Post("HTML-CSS maction Ready");MathJax.Ajax.loadComplete(e.autoloadDir+"/maction.js")});

