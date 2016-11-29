!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("react"),require("react-dom"));else if("function"==typeof define&&define.amd)define(["react","react-dom"],e);else{var i="object"==typeof exports?e(require("react"),require("react-dom")):e(t.React,t.ReactDom);for(var n in i)("object"==typeof exports?exports:t)[n]=i[n]}}(this,function(t,e){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,e,i){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(e,i){e.exports=t},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},s=i(0),o=n(s),a=i(6),l=(n(a),i(4)),u=n(l),c=i(2),p=n(c),h=i(5),d=n(h),f=i(3),g=n(f),v=function(t,e,i){null!==t&&"undefined"!=typeof t&&(t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i)},S=function(t,e,i){null!==t&&"undefined"!=typeof t&&(t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent?t.detachEvent("on"+e,i):t["on"+e]=null)},m=o.default.createClass({displayName:"Carousel",mixins:[u.default.Mixin],propTypes:{afterSlide:o.default.PropTypes.func,autoplay:o.default.PropTypes.bool,autoplayInterval:o.default.PropTypes.number,beforeSlide:o.default.PropTypes.func,cellAlign:o.default.PropTypes.oneOf(["left","center","right"]),cellSpacing:o.default.PropTypes.number,data:o.default.PropTypes.func,decorators:o.default.PropTypes.arrayOf(o.default.PropTypes.shape({component:o.default.PropTypes.func,position:o.default.PropTypes.oneOf(["TopLeft","TopCenter","TopRight","CenterLeft","CenterCenter","CenterRight","BottomLeft","BottomCenter","BottomRight"]),style:o.default.PropTypes.object})),dragging:o.default.PropTypes.bool,easing:o.default.PropTypes.string,edgeEasing:o.default.PropTypes.string,framePadding:o.default.PropTypes.string,frameOverflow:o.default.PropTypes.string,heightMode:o.default.PropTypes.oneOf(["max","adaptive"]).isRequired,initialSlideHeight:o.default.PropTypes.number,initialSlideWidth:o.default.PropTypes.number,lazyLoad:o.default.PropTypes.bool,scrollMode:o.default.PropTypes.oneOf(["page","remainder"]),slideIndex:o.default.PropTypes.number,slidesToShow:o.default.PropTypes.number,slidesToScroll:o.default.PropTypes.oneOfType([o.default.PropTypes.number,o.default.PropTypes.oneOf(["auto"])]),slideWidth:o.default.PropTypes.oneOfType([o.default.PropTypes.string,o.default.PropTypes.number]),speed:o.default.PropTypes.number,vertical:o.default.PropTypes.bool,width:o.default.PropTypes.string,wrapAround:o.default.PropTypes.bool},getDefaultProps:function(){return{afterSlide:function(){},autoplay:!1,autoplayInterval:3e3,beforeSlide:function(){},cellAlign:"left",cellSpacing:0,data:function(){},decorators:p.default,dragging:!0,easing:"easeOutCirc",edgeEasing:"easeOutElastic",framePadding:"0px",frameOverflow:"hidden",heightMode:"max",scrollMode:"remainder",slideIndex:0,slidesToScroll:1,slidesToShow:1,slideWidth:1,speed:500,vertical:!1,width:"100%",wrapAround:!1}},getInitialState:function(){return{currentSlide:this.props.slideIndex,dragging:!1,frameWidth:0,left:0,slideCount:0,slidesToScroll:this.props.slidesToScroll,slideWidth:0,top:0}},componentWillMount:function(){this.setInitialDimensions()},componentDidMount:function(){this.setDimensions(),this.bindEvents(),this.setExternalData(),this.props.autoplay&&this.startAutoplay()},componentWillReceiveProps:function(t){this.setState({slideCount:t.children.length}),this.setDimensions(t),this.props.slideIndex!==t.slideIndex&&t.slideIndex!==this.state.currentSlide&&this.goToSlide(t.slideIndex),this.props.autoplay!==t.autoplay&&(t.autoplay?this.startAutoplay():this.stopAutoplay())},componentWillUnmount:function(){this.unbindEvents(),this.stopAutoplay()},render:function(){var t=this,e=this.formatChildren(this.props.children);return o.default.createElement("div",{className:["slider",this.props.className||""].join(" "),ref:"slider",style:(0,d.default)(this.getSliderStyles(),this.props.style||{})},o.default.createElement("div",r({className:"slider-frame",ref:"frame",style:this.getFrameStyles()},this.getTouchEvents(),this.getMouseEvents(),{onClick:this.handleClick}),o.default.createElement("ul",{className:"slider-list",ref:"list",style:this.getListStyles()},e)),this.props.decorators?this.props.decorators.map(function(e,i){return o.default.createElement("div",{style:(0,d.default)(t.getDecoratorStyles(e.position),e.style||{}),className:"slider-decorator-"+i,key:i},o.default.createElement(e.component,{cellSpacing:t.props.cellSpacing,cellAlign:t.props.cellAlign,currentSlide:t.state.currentSlide,frameWidth:t.state.frameWidth,goToSlide:t.goToSlide,nextSlide:t.nextSlide,previousSlide:t.previousSlide,scrollMode:t.props.scrollMode,slideCount:t.state.slideCount,slidesToScroll:t.state.slidesToScroll,slidesToShow:t.props.slidesToShow,slideWidth:t.state.slideWidth,wrapAround:t.props.wrapAround}))}):null,o.default.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:t.getStyleTagStyles()}}))},touchObject:{},getTouchEvents:function(){var t=this;return{onTouchStart:function(e){t.touchObject={startX:e.touches[0].pageX,startY:e.touches[0].pageY},t.handleMouseOver()},onTouchMove:function(e){var i=t.swipeDirection(t.touchObject.startX,e.touches[0].pageX,t.touchObject.startY,e.touches[0].pageY);0!==i&&e.preventDefault();var n=t.props.vertical?Math.round(Math.sqrt(Math.pow(e.touches[0].pageY-t.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.touches[0].pageX-t.touchObject.startX,2)));t.touchObject={startX:t.touchObject.startX,startY:t.touchObject.startY,endX:e.touches[0].pageX,endY:e.touches[0].pageY,length:n,direction:i},t.setState({left:t.props.vertical?0:t.getTargetLeft(t.touchObject.length*t.touchObject.direction),top:t.props.vertical?t.getTargetLeft(t.touchObject.length*t.touchObject.direction):0})},onTouchEnd:function(e){t.handleSwipe(e),t.handleMouseOut()},onTouchCancel:function(e){t.handleSwipe(e)}}},clickSafe:!0,getMouseEvents:function(){var t=this;return this.props.dragging===!1?null:{onMouseOver:function(){t.handleMouseOver()},onMouseOut:function(){t.handleMouseOut()},onMouseDown:function(e){t.touchObject={startX:e.clientX,startY:e.clientY},t.setState({dragging:!0})},onMouseMove:function(e){if(t.state.dragging){var i=t.swipeDirection(t.touchObject.startX,e.clientX,t.touchObject.startY,e.clientY);0!==i&&e.preventDefault();var n=t.props.vertical?Math.round(Math.sqrt(Math.pow(e.clientY-t.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.clientX-t.touchObject.startX,2)));t.touchObject={startX:t.touchObject.startX,startY:t.touchObject.startY,endX:e.clientX,endY:e.clientY,length:n,direction:i},t.setState({left:t.props.vertical?0:t.getTargetLeft(t.touchObject.length*t.touchObject.direction),top:t.props.vertical?t.getTargetLeft(t.touchObject.length*t.touchObject.direction):0})}},onMouseUp:function(e){t.state.dragging&&t.handleSwipe(e)},onMouseLeave:function(e){t.state.dragging&&t.handleSwipe(e)}}},handleMouseOver:function(){this.props.autoplay&&(this.autoplayPaused=!0,this.stopAutoplay())},handleMouseOut:function(){this.props.autoplay&&this.autoplayPaused&&(this.startAutoplay(),this.autoplayPaused=null)},handleClick:function(t){this.clickSafe===!0&&(t.preventDefault(),t.stopPropagation(),t.nativeEvent&&t.nativeEvent.stopPropagation())},handleSwipe:function(t){"undefined"!=typeof this.touchObject.length&&this.touchObject.length>44?this.clickSafe=!0:this.clickSafe=!1;var e=this.props.slidesToShow;if("auto"===this.props.slidesToScroll&&(e=this.state.slidesToScroll),this.touchObject.length>this.state.slideWidth/e/5)if(1===this.touchObject.direction){var i=void 0,n=o.default.Children.count(this.props.children);switch(this.props.cellAlign){case"left":i=n-this.props.slidesToShow;break;case"center":i=n-Math.ceil(this.props.slidesToShow/2)-(this.props.slidesToShow%2===0?1:0);break;case"right":i=n-1}this.state.currentSlide>=("remainder"===this.props.scrollMode?i:n-1)&&!this.props.wrapAround?this.animateSlide(u.default.easingTypes[this.props.edgeEasing]):this.nextSlide()}else this.touchObject.direction===-1&&(this.state.currentSlide<=0&&!this.props.wrapAround?this.animateSlide(u.default.easingTypes[this.props.edgeEasing]):this.previousSlide());else this.goToSlide(this.state.currentSlide);this.touchObject={},this.setState({dragging:!1})},swipeDirection:function(t,e,i,n){var r,s,o,a;return r=t-e,s=i-n,o=Math.atan2(s,r),a=Math.round(180*o/Math.PI),a<0&&(a=360-Math.abs(a)),a<=45&&a>=0?1:a<=360&&a>=315?1:a>=135&&a<=225?-1:this.props.vertical===!0?a>=35&&a<=135?1:-1:0},autoplayIterator:function(){return this.props.wrapAround?this.nextSlide():void(this.state.currentSlide!==this.state.slideCount-this.state.slidesToShow?this.nextSlide():this.stopAutoplay())},startAutoplay:function(){this.autoplayID=setInterval(this.autoplayIterator,this.props.autoplayInterval)},resetAutoplay:function(){this.props.autoplay&&!this.autoplayPaused&&(this.stopAutoplay(),this.startAutoplay())},stopAutoplay:function(){this.autoplayID&&clearInterval(this.autoplayID)},goToSlide:function(t){var e=this;if(t>=o.default.Children.count(this.props.children)||t<0){if(!this.props.wrapAround)return;if(t>=o.default.Children.count(this.props.children))return this.props.beforeSlide(this.state.currentSlide,0),this.setState({currentSlide:0},function(){e.animateSlide(null,null,e.getTargetLeft(null,t),function(){e.animateSlide(null,.01),e.props.afterSlide(0),e.resetAutoplay(),e.setExternalData()})});var i=o.default.Children.count(this.props.children)-this.state.slidesToScroll;return this.props.beforeSlide(this.state.currentSlide,i),this.setState({currentSlide:i},function(){e.animateSlide(null,null,e.getTargetLeft(null,t),function(){e.animateSlide(null,.01),e.props.afterSlide(i),e.resetAutoplay(),e.setExternalData()})})}this.props.beforeSlide(this.state.currentSlide,t);var n=this.state.currentSlide;this.setState({currentSlide:t},function(){e.animateSlide(),e.resetAutoplay(),e.setExternalData(),n!==t&&this.props.afterSlide(t)})},nextSlide:function(){var t=o.default.Children.count(this.props.children),e=this.props.slidesToShow;if("auto"===this.props.slidesToScroll&&(e=this.state.slidesToScroll),!(this.state.currentSlide>t)||this.props.wrapAround)if(this.props.wrapAround)this.goToSlide(this.state.currentSlide+this.state.slidesToScroll);else{if(1!==this.props.slideWidth)return this.goToSlide(this.state.currentSlide+this.state.slidesToScroll);if("remainder"===this.props.scrollMode&&"right"!==this.props.cellAlign){var i=this.state,n=i.currentSlide,r=i.slidesToScroll,s=this.props.cellAlign,a=t-e;return"center"===s&&(a=t-1-Math.floor(e/2)),this.goToSlide(n+r>=a?a:n+r)}this.goToSlide(Math.min(this.state.currentSlide+this.state.slidesToScroll,t-1))}},previousSlide:function(){if(!(this.state.currentSlide<=0)||this.props.wrapAround)if(this.props.wrapAround)this.goToSlide(this.state.currentSlide-this.state.slidesToScroll);else{for(var t=this.state,e=t.currentSlide,i=t.slidesToScroll,n=0;n<e&&!(n+i>=e);)n+=i;this.goToSlide(n)}},animateSlide:function(t,e,i,n){this.tweenState(this.props.vertical?"top":"left",{easing:t||u.default.easingTypes[this.props.easing],duration:e||this.props.speed,endValue:i||this.getTargetLeft(),onEnd:n||null})},getTargetLeft:function(t,e){var i,n=e||this.state.currentSlide;switch(this.props.cellAlign){case"left":i=0,i-=this.props.cellSpacing*n;break;case"center":i=(this.state.frameWidth-this.state.slideWidth)/2,i-=this.props.cellSpacing*n;break;case"right":i=this.state.frameWidth-this.state.slideWidth,i-=this.props.cellSpacing*n}var r=this.state.slideWidth*n,s=this.state.currentSlide>0&&n+this.state.slidesToScroll>=this.state.slideCount;return s&&1!==this.props.slideWidth&&!this.props.wrapAround&&"auto"===this.props.slidesToScroll&&(r=this.state.slideWidth*this.state.slideCount-this.state.frameWidth,i=0,i-=this.props.cellSpacing*(this.state.slideCount-1)),i-=t||0,(r-i)*-1},bindEvents:function(){var t=this;g.default.canUseDOM&&(v(window,"resize",t.onResize),v(document,"readystatechange",t.onReadyStateChange))},onResize:function(){this.setDimensions()},onReadyStateChange:function(){this.setDimensions()},unbindEvents:function(){var t=this;g.default.canUseDOM&&(S(window,"resize",t.onResize),S(document,"readystatechange",t.onReadyStateChange))},formatChildren:function(t){var e=this,i=this.props.vertical?this.getTweeningValue("top"):this.getTweeningValue("left"),n=Math.max(this.state.currentSlide-this.props.slidesToShow,0),r=Math.min(this.state.currentSlide+2*this.props.slidesToShow,this.state.slideCount);return o.default.Children.map(t,function(t,s){if(!e.props.lazyLoad||n<=s&&s<r)return o.default.createElement("li",{className:"slider-slide",style:e.getSlideStyles(s,i),key:s},t)})},setInitialDimensions:function(){var t,e,i,n=this;t=this.props.vertical?this.props.initialSlideHeight||0:this.props.initialSlideWidth||0,i=this.props.initialSlideHeight?this.props.initialSlideHeight*this.props.slidesToShow:0,e=i+this.props.cellSpacing*(this.props.slidesToShow-1),this.setState({slideHeight:i,frameWidth:this.props.vertical?e:"100%",slideCount:o.default.Children.count(this.props.children),slideWidth:t},function(){n.setLeft(),n.setExternalData()})},setDimensions:function(t){t=t||this.props;var e,i,n,r,s,o,a,l=this;i=t.slidesToScroll,n=this.refs.frame;var u=n.childNodes[0].childNodes;if(this.props.vertical)u.length?(u[0].style.height="auto",o=u[0].offsetHeight*t.slidesToShow):o=100;else{o="max"===t.heightMode&&this.state.slideHeight||t.initialSlideHeight||0;for(var c=0;c<u.length;c++)o=Math.max(o,u[c].offsetHeight)}e="number"!=typeof t.slideWidth?parseInt(t.slideWidth):t.vertical?o/t.slidesToShow*t.slideWidth:n.offsetWidth/t.slidesToShow*t.slideWidth,t.vertical||(e-=t.cellSpacing*((100-100/t.slidesToShow)/100)),s=o+t.cellSpacing*(t.slidesToShow-1),r=t.vertical?s:n.offsetWidth,"auto"===t.slidesToScroll&&(a=r/(e+t.cellSpacing),i=1===t.slideWidth?Math.ceil(a):Math.floor(a)),this.setState({slideHeight:o,frameWidth:r,slideWidth:e,slidesToScroll:i,left:t.vertical?0:this.getTargetLeft(),top:t.vertical?this.getTargetLeft():0},function(){l.setLeft()})},setLeft:function(){this.setState({left:this.props.vertical?0:this.getTargetLeft(),top:this.props.vertical?this.getTargetLeft():0})},setExternalData:function(){this.props.data&&this.props.data()},getListStyles:function(){var t=this.state.slideWidth*o.default.Children.count(this.props.children),e=this.props.cellSpacing*o.default.Children.count(this.props.children),i="translate3d("+this.getTweeningValue("left")+"px, "+this.getTweeningValue("top")+"px, 0)";return{transform:i,WebkitTransform:i,msTransform:"translate("+this.getTweeningValue("left")+"px, "+this.getTweeningValue("top")+"px)",position:"relative",display:"block",margin:this.props.vertical?this.props.cellSpacing/2*-1+"px 0px":"0px "+this.props.cellSpacing/2*-1+"px",padding:0,height:this.props.vertical?t+e:"auto",width:this.props.vertical?"auto":t+e,cursor:this.state.dragging===!0?"pointer":"inherit",boxSizing:"border-box",MozBoxSizing:"border-box"}},getFrameStyles:function(){return{position:"relative",display:"block",overflow:this.props.frameOverflow,height:this.props.vertical?this.state.frameWidth||"initial":"auto",margin:this.props.framePadding,padding:0,transform:"translate3d(0, 0, 0)",WebkitTransform:"translate3d(0, 0, 0)",msTransform:"translate(0, 0)",boxSizing:"border-box",MozBoxSizing:"border-box"}},getSlideStyles:function(t,e){var i=this.getSlideTargetPosition(t,e);return{position:"relative",left:this.props.vertical?0:i,top:this.props.vertical?i:0,display:this.props.vertical?"block":"inline-block",listStyleType:"none",verticalAlign:"top",width:this.props.vertical?"100%":this.state.slideWidth,height:"auto",boxSizing:"border-box",MozBoxSizing:"border-box",marginLeft:this.props.vertical?"auto":this.props.cellSpacing/2,marginRight:this.props.vertical?"auto":this.props.cellSpacing/2,marginTop:this.props.vertical?this.props.cellSpacing/2:"auto",marginBottom:this.props.vertical?this.props.cellSpacing/2:"auto"}},getSlideTargetPosition:function(t,e){var i=this.state.frameWidth/this.state.slideWidth,n=0,r=(this.state.slideWidth+this.props.cellSpacing)*i*-1;if(this.props.wrapAround){var s=Math.ceil(e/this.state.slideWidth);if(this.state.slideCount-s<=t)return(this.state.slideWidth+this.props.cellSpacing)*-(t+1);var o=Math.ceil((Math.abs(e)-Math.abs(r))/this.state.slideWidth);if(1!==this.state.slideWidth&&(o=Math.ceil((Math.abs(e)-this.state.slideWidth)/this.state.slideWidth)),t<=o-1)return s<0?(this.state.slideWidth+this.props.cellSpacing)*this.state.slideCount:0}return n},getSliderStyles:function(){return{position:"relative",display:"block",width:this.props.width,height:"auto",boxSizing:"border-box",MozBoxSizing:"border-box",visibility:this.state.slideWidth?"visible":"hidden"}},getStyleTagStyles:function(){return".slider-slide > img {width: 100%; display: block;}"},getDecoratorStyles:function(t){switch(t){case"TopLeft":return{position:"absolute",top:0,left:0};case"TopCenter":return{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",WebkitTransform:"translateX(-50%)",msTransform:"translateX(-50%)"};case"TopRight":return{position:"absolute",top:0,right:0};case"CenterLeft":return{position:"absolute",top:"50%",left:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case"CenterCenter":return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",WebkitTransform:"translate(-50%, -50%)",msTransform:"translate(-50%, -50%)"};case"CenterRight":return{position:"absolute",top:"50%",right:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case"BottomLeft":return{position:"absolute",bottom:0,left:0};case"BottomCenter":return{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",WebkitTransform:"translateX(-50%)",msTransform:"translateX(-50%)"};case"BottomRight":return{position:"absolute",bottom:0,right:0};default:return{position:"absolute",top:0,left:0}}}});m.ControllerMixin={getInitialState:function(){return{carousels:{}}},setCarouselData:function(t){var e=this.state.carousels;e[t]=this.refs[t],this.setState({carousels:e})}},e.default=m},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),s=n(r),o=[{component:s.default.createClass({displayName:"component",render:function(){return s.default.createElement("button",{style:this.getButtonStyles(0===this.props.currentSlide&&!this.props.wrapAround),onClick:this.handleClick},"PREV")},handleClick:function(t){t.preventDefault(),this.props.previousSlide()},getButtonStyles:function(t){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,outline:0,opacity:t?.3:1,cursor:"pointer"}}}),position:"CenterLeft"},{component:s.default.createClass({displayName:"component",render:function(){var t=this.props.slideCount-1;if("remainder"===this.props.scrollMode)switch(this.props.cellAlign){case"center":t=this.props.slideCount-Math.ceil(this.props.slidesToShow/2)-(this.props.slidesToShow%2===0?1:0);break;case"left":t=this.props.slideCount-this.props.slidesToShow}return s.default.createElement("button",{style:this.getButtonStyles(this.props.currentSlide===t&&!this.props.wrapAround),onClick:this.handleClick},"NEXT")},handleClick:function(t){t.preventDefault(),this.props.nextSlide()},getButtonStyles:function(t){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,outline:0,opacity:t?.3:1,cursor:"pointer"}}}),position:"CenterRight"},{component:s.default.createClass({displayName:"component",render:function(){var t=this,e=this.getIndexes(t.props.slideCount,t.props.slidesToScroll,"page"===this.props.scrollMode);return s.default.createElement("ul",{style:t.getListStyles()},e.map(function(e){return s.default.createElement("li",{style:t.getListItemStyles(),key:e},s.default.createElement("button",{style:t.getButtonStyles(t.props.currentSlide===e),onClick:t.props.goToSlide.bind(null,e)},"•"))}))},getIndexes:function(t,e,i){var n=[];if(i){for(var r=0;r<t;r+=e)n.push(r);n[n.length-1]<t-1&&n.push(t-1)}else{var s=void 0;switch(this.props.cellAlign){case"left":s=t-this.props.slidesToShow;break;case"center":s=t-Math.ceil(this.props.slidesToShow/2)-(this.props.slidesToShow%2===0?1:0);break;case"right":s=t-1}for(var r=0;r<=t;r+=e)n.push(r<s?r:s)}var o={};return n.filter(function(t){if(void 0===o[t])return o[t]=t,!0}).sort()},getListStyles:function(){return{position:"relative",margin:0,top:-10,padding:0}},getListItemStyles:function(){return{listStyleType:"none",display:"inline-block"}},getButtonStyles:function(t){return{border:0,background:"transparent",color:"black",cursor:"pointer",padding:10,outline:0,fontSize:24,opacity:t?1:.5}}}),position:"BottomCenter"}];e.default=o},function(t,e,i){var n;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),s={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};n=function(){return s}.call(e,i,e,t),!(void 0!==n&&(t.exports=n))}()},function(t,e,i){!function(e,i){t.exports=i()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}({0:/*!*****************!*\
  !*** multi lib ***!
  \*****************/
function(t,e,i){t.exports=i(/*! ./index.js */169)},5:/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
function(t,e){function i(){u=!1,o.length?l=o.concat(l):c=-1,l.length&&n()}function n(){if(!u){var t=setTimeout(i);u=!0;for(var e=l.length;e;){for(o=l,l=[];++c<e;)o&&o[c].run();c=-1,e=l.length}o=null,u=!1,clearTimeout(t)}}function r(t,e){this.fun=t,this.array=e}function s(){}var o,a=t.exports={},l=[],u=!1,c=-1;a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];l.push(new r(t,e)),1!==l.length||u||setTimeout(n,0)},r.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=s,a.addListener=s,a.once=s,a.off=s,a.removeListener=s,a.removeAllListeners=s,a.emit=s,a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},169:/*!******************!*\
  !*** ./index.js ***!
  \******************/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(/*! tween-functions */170),s=n(r),o=i(/*! raf */171),a=n(o),l="ADDITIVE",u=r.easeInOutQuad,c=300,p=0,h={ADDITIVE:"ADDITIVE",DESTRUCTIVE:"DESTRUCTIVE"},d={_rafID:null,getInitialState:function(){return{tweenQueue:[]}},componentWillUnmount:function(){a.default.cancel(this._rafID),this._rafID=-1},tweenState:function(t,e){var i=this,n=e.easing,r=e.duration,s=e.delay,o=e.beginValue,d=e.endValue,f=e.onEnd,g=e.stackBehavior;this.setState(function(e){var v=e,S=void 0,m=void 0;if("string"==typeof t)S=t,m=t;else{for(var y=0;y<t.length-1;y++)v=v[t[y]];S=t[t.length-1],m=t.join("|")}var b={easing:n||u,duration:null==r?c:r,delay:null==s?p:s,beginValue:null==o?v[S]:o,endValue:d,onEnd:f,stackBehavior:g||l},T=e.tweenQueue;return b.stackBehavior===h.DESTRUCTIVE&&(T=e.tweenQueue.filter(function(t){return t.pathHash!==m})),T.push({pathHash:m,config:b,initTime:Date.now()+b.delay}),v[S]=b.endValue,1===T.length&&(i._rafID=(0,a.default)(i._rafCb)),{tweenQueue:T}})},getTweeningValue:function(t){var e=this.state,i=void 0,n=void 0;if("string"==typeof t)i=e[t],n=t;else{i=e;for(var r=0;r<t.length;r++)i=i[t[r]];n=t.join("|")}for(var s=Date.now(),r=0;r<e.tweenQueue.length;r++){var o=e.tweenQueue[r],a=o.pathHash,l=o.initTime,u=o.config;if(a===n){var c=s-l>u.duration?u.duration:Math.max(0,s-l),p=0===u.duration?u.endValue:u.easing(c,u.beginValue,u.endValue,u.duration),h=p-u.endValue;i+=h}}return i},_rafCb:function(){var t=this.state;if(0!==t.tweenQueue.length){for(var e=Date.now(),i=[],n=0;n<t.tweenQueue.length;n++){var r=t.tweenQueue[n],s=r.initTime,o=r.config;e-s<o.duration?i.push(r):o.onEnd&&o.onEnd()}this._rafID!==-1&&(this.setState({tweenQueue:i}),this._rafID=(0,a.default)(this._rafCb))}}};e.default={Mixin:d,easingTypes:s.default,stackBehavior:h},t.exports=e.default},170:/*!************************************!*\
  !*** ./~/tween-functions/index.js ***!
  \************************************/
function(t,e){"use strict";var i={linear:function(t,e,i,n){var r=i-e;return r*t/n+e},easeInQuad:function(t,e,i,n){var r=i-e;return r*(t/=n)*t+e},easeOutQuad:function(t,e,i,n){var r=i-e;return-r*(t/=n)*(t-2)+e},easeInOutQuad:function(t,e,i,n){var r=i-e;return(t/=n/2)<1?r/2*t*t+e:-r/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,i,n){var r=i-e;return r*(t/=n)*t*t+e},easeOutCubic:function(t,e,i,n){var r=i-e;return r*((t=t/n-1)*t*t+1)+e},easeInOutCubic:function(t,e,i,n){var r=i-e;return(t/=n/2)<1?r/2*t*t*t+e:r/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,i,n){var r=i-e;return r*(t/=n)*t*t*t+e},easeOutQuart:function(t,e,i,n){var r=i-e;return-r*((t=t/n-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,i,n){var r=i-e;return(t/=n/2)<1?r/2*t*t*t*t+e:-r/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,i,n){var r=i-e;return r*(t/=n)*t*t*t*t+e},easeOutQuint:function(t,e,i,n){var r=i-e;return r*((t=t/n-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,i,n){var r=i-e;return(t/=n/2)<1?r/2*t*t*t*t*t+e:r/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,i,n){var r=i-e;return-r*Math.cos(t/n*(Math.PI/2))+r+e},easeOutSine:function(t,e,i,n){var r=i-e;return r*Math.sin(t/n*(Math.PI/2))+e},easeInOutSine:function(t,e,i,n){var r=i-e;return-r/2*(Math.cos(Math.PI*t/n)-1)+e},easeInExpo:function(t,e,i,n){var r=i-e;return 0==t?e:r*Math.pow(2,10*(t/n-1))+e},easeOutExpo:function(t,e,i,n){var r=i-e;return t==n?e+r:r*(-Math.pow(2,-10*t/n)+1)+e},easeInOutExpo:function(t,e,i,n){var r=i-e;return 0===t?e:t===n?e+r:(t/=n/2)<1?r/2*Math.pow(2,10*(t-1))+e:r/2*(-Math.pow(2,-10*--t)+2)+e},easeInCirc:function(t,e,i,n){var r=i-e;return-r*(Math.sqrt(1-(t/=n)*t)-1)+e},easeOutCirc:function(t,e,i,n){var r=i-e;return r*Math.sqrt(1-(t=t/n-1)*t)+e},easeInOutCirc:function(t,e,i,n){var r=i-e;return(t/=n/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+e:r/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,i,n){var r,s,o,a=i-e;return o=1.70158,s=0,r=a,0===t?e:1===(t/=n)?e+a:(s||(s=.3*n),r<Math.abs(a)?(r=a,o=s/4):o=s/(2*Math.PI)*Math.asin(a/r),-(r*Math.pow(2,10*(t-=1))*Math.sin((t*n-o)*(2*Math.PI)/s))+e)},easeOutElastic:function(t,e,i,n){var r,s,o,a=i-e;return o=1.70158,s=0,r=a,0===t?e:1===(t/=n)?e+a:(s||(s=.3*n),r<Math.abs(a)?(r=a,o=s/4):o=s/(2*Math.PI)*Math.asin(a/r),r*Math.pow(2,-10*t)*Math.sin((t*n-o)*(2*Math.PI)/s)+a+e)},easeInOutElastic:function(t,e,i,n){var r,s,o,a=i-e;return o=1.70158,s=0,r=a,0===t?e:2===(t/=n/2)?e+a:(s||(s=n*(.3*1.5)),r<Math.abs(a)?(r=a,o=s/4):o=s/(2*Math.PI)*Math.asin(a/r),t<1?-.5*(r*Math.pow(2,10*(t-=1))*Math.sin((t*n-o)*(2*Math.PI)/s))+e:r*Math.pow(2,-10*(t-=1))*Math.sin((t*n-o)*(2*Math.PI)/s)*.5+a+e)},easeInBack:function(t,e,i,n,r){var s=i-e;return void 0===r&&(r=1.70158),s*(t/=n)*t*((r+1)*t-r)+e},easeOutBack:function(t,e,i,n,r){var s=i-e;return void 0===r&&(r=1.70158),s*((t=t/n-1)*t*((r+1)*t+r)+1)+e},easeInOutBack:function(t,e,i,n,r){var s=i-e;return void 0===r&&(r=1.70158),(t/=n/2)<1?s/2*(t*t*(((r*=1.525)+1)*t-r))+e:s/2*((t-=2)*t*(((r*=1.525)+1)*t+r)+2)+e},easeInBounce:function(t,e,n,r){var s,o=n-e;return s=i.easeOutBounce(r-t,0,o,r),o-s+e},easeOutBounce:function(t,e,i,n){var r=i-e;return(t/=n)<1/2.75?r*(7.5625*t*t)+e:t<2/2.75?r*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?r*(7.5625*(t-=2.25/2.75)*t+.9375)+e:r*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,r){var s,o=n-e;return t<r/2?(s=i.easeInBounce(2*t,0,o,r),.5*s+e):(s=i.easeOutBounce(2*t-r,0,o,r),.5*s+.5*o+e)}};t.exports=i},171:/*!************************!*\
  !*** ./~/raf/index.js ***!
  \************************/
function(t,e,i){(function(e){for(var n=i(/*! performance-now */172),r="undefined"==typeof window?e:window,s=["moz","webkit"],o="AnimationFrame",a=r["request"+o],l=r["cancel"+o]||r["cancelRequest"+o],u=0;!a&&u<s.length;u++)a=r[s[u]+"Request"+o],l=r[s[u]+"Cancel"+o]||r[s[u]+"CancelRequest"+o];if(!a||!l){var c=0,p=0,h=[],d=1e3/60;a=function(t){if(0===h.length){var e=n(),i=Math.max(0,d-(e-c));c=i+e,setTimeout(function(){var t=h.slice(0);h.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(c)}catch(t){setTimeout(function(){throw t},0)}},Math.round(i))}return h.push({handle:++p,callback:t,cancelled:!1}),p},l=function(t){for(var e=0;e<h.length;e++)h[e].handle===t&&(h[e].cancelled=!0)}}t.exports=function(t){return a.call(r,t)},t.exports.cancel=function(){l.apply(r,arguments)},t.exports.polyfill=function(){r.requestAnimationFrame=a,r.cancelAnimationFrame=l}}).call(e,function(){return this}())},172:/*!**************************************************!*\
  !*** ./~/performance-now/lib/performance-now.js ***!
  \**************************************************/
function(t,e,i){(function(e){(function(){var i,n,r;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(i()-r)/1e6},n=e.hrtime,i=function(){var t;return t=n(),1e9*t[0]+t[1]},r=i()):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(e,i(/*! ./~/process/browser.js */5))}})})},function(t,e){"use strict";function i(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function n(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;var n=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==n.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}var r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=n()?Object.assign:function(t,e){for(var n,o,a=i(t),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var u in n)r.call(n,u)&&(a[u]=n[u]);if(Object.getOwnPropertySymbols){o=Object.getOwnPropertySymbols(n);for(var c=0;c<o.length;c++)s.call(n,o[c])&&(a[o[c]]=n[o[c]])}}return a}},function(t,i){t.exports=e},function(t,e,i){"use strict";var n=i(1);t.exports=n}])});