/**
 * skylark-domx-spy - The skylark spy plugins library for dom api extension
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-domx/skylark-domx-spy/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-browser","skylark-domx-eventer","skylark-domx-noder","skylark-domx-geom","skylark-domx-query","skylark-domx-plugins","./spy"],function(t,e,i,o,s,n,f,a){"use strict";var h=f.Plugin.inherit({klassName:"Affix",pluginName:"domx.affix",options:{offset:0,target:window},_construct:function(e,i){this.overrided(e,i),this.$target=n(this.options.target).on("scroll.affix.data-api",t.proxy(this.checkPosition,this)).on("click.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=this.$(),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()},getState:function(t,e,i,o){var s=this.$target.scrollTop(),n=this.$element.offset(),f=this.$target.height();if(null!=i&&"top"==this.affixed)return s<i&&"top";if("bottom"==this.affixed)return null!=i?!(s+this.unpin<=n.top)&&"bottom":!(s+f<=t-o)&&"bottom";var a=null==this.affixed,h=a?s:n.top;return null!=i&&s<=i?"top":null!=o&&h+(a?f:e)>=t-o&&"bottom"},getPinnedOffset:function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},checkPositionWithEventLoop:function(){setTimeout(t.proxy(this.checkPosition,this),1)},checkPosition:function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,o=e.top,s=e.bottom,f=Math.max(n(document).height(),n(document.body).height());"object"!=typeof e&&(s=o=e),"function"==typeof o&&(o=e.top(this.$element)),"function"==typeof s&&(s=e.bottom(this.$element));var a=this.getState(f,t,o,s);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var r="affix"+(a?"-"+a:""),l=i.create(r+".affix");if(this.$element.trigger(l),l.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(r).trigger(r.replace("affix","affixed")+".affix")}"bottom"==a&&this.$element.offset({top:f-t-s})}}});return h.RESET="affix affix-top affix-bottom",f.register(h),a.Affix=h});
//# sourceMappingURL=sourcemaps/Affix.js.map
