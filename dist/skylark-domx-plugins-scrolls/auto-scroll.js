/**
 * skylark-domx-plugins-scrolls - The skylark scrolls plugins library for dom api extension
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-domx-plugins/skylark-domx-plugins-scrolls/
 * @license MIT
 */
define(["skylark-langx","skylark-domx-browser","skylark-domx-eventer","skylark-domx-noder","skylark-domx-finder","skylark-domx-geom","skylark-domx-styler","skylark-domx-query","skylark-domx-plugins-base","./scrolls"],function(l,t,o,r,e,s,i,a,c,n){"use strict";var h=c.Plugin.inherit({klassName:"AutoScroll",pluginName:"lark.scrolls.autoscroll",options:{scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},_construct:function(t,o){this.overrided(t,o),this.autoScrolls=[],this._autoScroll=l.debounce((l,o)=>{var a=this.options,c=a.scrollSensitivity,n=a.scrollSpeed,h=r.scrollingElement();this.scrollEl=e.scrollableParent(t,!0);var u=0,v=this.scrollEl,d=this.autoScrolls;do{var f,y,m,b,k,S,g,_,w,x=v,p=s.boundingRect(x),E=p.top,T=p.bottom,P=p.left,X=p.right,Y=p.width,I=p.height;if(f=x.scrollWidth,y=x.scrollHeight,m=i.css(x),_=x.scrollLeft,w=x.scrollTop,x===h?(S=Y<f&&("auto"===m.overflowX||"scroll"===m.overflowX||"visible"===m.overflowX),g=I<y&&("auto"===m.overflowY||"scroll"===m.overflowY||"visible"===m.overflowY)):(S=Y<f&&("auto"===m.overflowX||"scroll"===m.overflowX),g=I<y&&("auto"===m.overflowY||"scroll"===m.overflowY)),b=S&&(Math.abs(X-l)<=c&&_+Y<f)-(Math.abs(P-l)<=c&&!!_),k=g&&(Math.abs(T-o)<=c&&w+I<y)-(Math.abs(E-o)<=c&&!!w),!d[u])for(var A=0;A<=u;A++)d[A]||(d[A]={});d[u].vx==b&&d[u].vy==k&&d[u].el===x||(d[u].el=x,d[u].vx=b,d[u].vy=k,clearInterval(d[u].pid),!x||0==b&&0==k||(this.scrollThisInstance=!0,d[u].pid=setInterval(function(){var l=d[this.layer].vy?d[this.layer].vy*n:0,t=d[this.layer].vx?d[this.layer].vx*n:0;s.scrollBy(d[this.layer].el,t,l)}.bind({layer:u}),24))),u++}while(a.bubbleScroll&&v!==h&&(v=e.scrollableParent(v,!1)))},30)},destroy:function(){this._clearAutoScrolls(),this._cancelThrottle(),this._nulling()},handle:function(l,t){this._throttleTimeout=this._autoScroll(l,t)},_clearAutoScrolls:function(){this.autoScrolls.forEach(function(l){clearInterval(l.pid)}),this.autoScrolls=[]},_cancelThrottle:function(){this._throttleTimeout&&this._throttleTimeout.cancel&&(this._throttleTimeout.cancel(),this._throttleTimeout=void 0)},_nulling:function(){this.pointerElemChangedInterval=null,this.lastPointerElemX=null,this.lastPointerElemY=null,this.scrollEl=this.scrollParentEl=this.autoScrolls.length=null}});return c.register(h),n.AutoScroll=h});
//# sourceMappingURL=sourcemaps/auto-scroll.js.map
