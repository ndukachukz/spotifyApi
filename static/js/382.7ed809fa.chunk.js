"use strict";(self.webpackChunkpartner_hero_test=self.webpackChunkpartner_hero_test||[]).push([[382],{6052:function(e,n,t){t.d(n,{C:function(){return u},T:function(){return s}});var r=t(9434),s=function(){return(0,r.I0)()},u=r.v9},825:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(2791),s=t(6871),u=t(6234),c=t.n(u),o=t(6052),f=t(384),a=function(){var e=new(c())({clientId:"58b3f355fdca46428a44c4596f4b9fe0",clientSecret:"395fff7617454220be2e2be859b7ed33"}),n=localStorage.getItem("tokens"),t=JSON.parse(n),u=null===t||void 0===t?void 0:t.access_token,a=null===t||void 0===t?void 0:t.refresh_token,i=(0,s.s0)(),l=(0,o.T)();return(0,r.useEffect)((function(){!1===!!t&&i("/auth"),e.setAccessToken(u),e.setRefreshToken(a),l((0,f.V)(e))}),[]),e}},382:function(e,n,t){t.r(n);var r=t(1413),s=t(2982),u=t(8735),c=t(3209),o=t(2791),f=t(6871),a=t(6052),i=t(929),l=t(7911),h=t(825),d=t(184);n.default=function(){var e=(0,h.Z)(),n=(0,f.s0)(),t=(0,a.T)(),b=(0,a.C)((function(e){return e})),k=(b.searchResults,b.userLibrary),m=b.authToken;return(0,o.useEffect)((function(){(m.access_token.length<10||m.refresh_token.length<10)&&n("/auth"),e.getMySavedAlbums().then((function(e){t((0,l.f)((0,s.Z)(e.body.items)))}),(function(e){n("auth")}))}),[]),(0,d.jsxs)(u.xu,{maxW:"7xl",mx:"auto",pt:5,px:{base:2,sm:5,md:17},children:[(0,d.jsx)(c.m$.h1,{textAlign:"start",fontSize:"2xl",py:5,fontWeight:"bold",children:"New Releases"}),(0,d.jsx)(u.MI,{columns:{base:1,sm:2,md:3,lg:4},spacing:{base:5,lg:8},children:k.map((function(e,n){return(0,d.jsx)(i.l1,(0,r.Z)({},e),n)}))})]})}}}]);
//# sourceMappingURL=382.7ed809fa.chunk.js.map