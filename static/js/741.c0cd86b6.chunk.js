"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[741],{741:function(e,t,n){n.r(t),n.d(t,{BASE_POSTER_URL:function(){return l},PLACEHOLDER:function(){return h},default:function(){return v}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(694),i=n(791),o=n(689),p={list:"cast_list__bULim",item:"cast_item__AMMjV",image:"cast_image__tExbg"},f=n(184),l="https://image.tmdb.org/t/p/w500/",h="https://via.placeholder.com/182x273",v=function(){var e=(0,o.UO)().movieId,t=(0,i.useState)([]),n=(0,a.Z)(t,2),c=n[0],v=n[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.Eb)(e);case 3:(n=t.sent)?v(n):console.log("There is no information about the cast here"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,f.jsx)("div",{className:p.box,children:c.length>0?(0,f.jsx)("ul",{className:p.list,children:c.map((function(e){var t=e.id,n=e.profile_path,r=e.original_name,a=e.character;return(0,f.jsxs)("li",{className:p.item,children:[(0,f.jsx)("img",{className:p.image,src:"".concat(n?l+n:h+"?text="+r),alt:r}),(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{children:"Actor:"})," ",r]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{className:p.text,children:"Character:"})," ",a]})]},t)}))}):(0,f.jsx)("p",{className:p.text,children:"We don't have info about cast for the movie."})})}},694:function(e,t,n){n.d(t,{Df:function(){return i},Eb:function(){return f},Hu:function(){return l},Pg:function(){return p},Ph:function(){return o}});var r=n(861),a=n(757),c=n.n(a),u=n(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="aea771816a243ac4858f7ced4c71da1a",i=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/week?api_key=".concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=741.c0cd86b6.chunk.js.map