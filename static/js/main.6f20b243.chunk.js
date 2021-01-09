(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={app:"App_app__29Y6w",text:"App_text__2sfJ7"}},12:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__EX8zR",image:"ImageGalleryItem_image__2eH9t"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__2pYgl",modal:"Modal_modal__1UoM6"}},15:function(e,t,a){e.exports={loader:"Loader_loader__3zcn3"}},17:function(e,t,a){e.exports={button:"Button_button__2yY0C"}},46:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a(0),n=a.n(r),o=a(4),s=a.n(o),i=(a(23),a(14)),l=a(3),u=a(5),b=(a(24),a(11)),m=a.n(b),j=a(9),g=a.n(j),h=a(12),d=a.n(h);function p(e){var t=e.webformatURL,a=void 0===t?"https://picsum.photos/600/400":t,r=e.largeImageURL,n=void 0===r?"https://picsum.photos/600/400":r,o=e.tags,s=e.imageClick;return Object(c.jsx)("li",{className:d.a.imageGalleryItem,children:Object(c.jsx)("img",{src:a,"data-sourse":n,alt:o,className:d.a.image,onClick:s})})}var f=function(e){var t=e.images,a=e.largeURL;return Object(c.jsx)("ul",{className:g.a.imageGallery,children:t.map((function(e,t){return Object(c.jsx)(p,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags,imageClick:a},t)}))})},O=a(6),_=a.n(O);function x(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(l.a)(a,2),o=n[0],s=n[1];return Object(c.jsx)("header",{className:_.a.searchbar,children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),s("")):u.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430")},className:_.a.searchForm,children:[Object(c.jsx)("button",{type:"submit",className:_.a.button,children:Object(c.jsx)("span",{className:_.a.label,children:"Search"})}),Object(c.jsx)("input",{value:o,onChange:function(e){s(e.target.value.toLowerCase())},className:_.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var v=a(15),y=a.n(v),S=a(16),w=a.n(S),C=a.p+"static/media/pending.d3fe10c8.png";function L(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w.a,{className:y.a.loader,type:"Circles",color:"#3ccf9e",height:30,width:30}),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("ul",{className:g.a.imageGallery,children:Array(12).fill().map((function(e,t){return Object(c.jsx)(p,{webformatURL:C,largeImageURL:C},t)}))})})]})}var N=a(13),k=a.n(N),I=document.querySelector("#modal-root");function G(e){var t=e.onClose,a=e.children;Object(r.useEffect)((function(){window.addEventListener("keydown",n)}));var n=function(e){"Escape"===e.code&&t()};return Object(o.createPortal)(Object(c.jsx)("div",{className:k.a.overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(c.jsx)("div",{className:k.a.modal,children:a})}),I)}var R=a(2),U=a.n(R);function E(e){var t=e.message;return u.b.error("".concat(t))}E.propTypes={message:U.a.string};var F=a(17),M=a.n(F);function z(e){var t=e.onClick;return Object(c.jsx)("button",{className:M.a.button,type:"button",onClick:t,children:"Load more"})}var P={page:1,fetchGallery:function(e){var t=this,a="https://pixabay.com/api/?q=".concat(e,"&page=").concat(this.page,"&key=").concat("18773643-f1542c573d467a3c4fb890edb","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(a){return t.page+=1,a.ok?a.json():Promise.reject(new Error("\u041d\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(e)))}))},resetPage:function(){this.page=1}},H="idle",J="resolved",T="rejected";function q(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(""),s=Object(l.a)(o,2),b=s[0],j=s[1],g=Object(r.useState)([]),h=Object(l.a)(g,2),d=h[0],p=h[1],O=Object(r.useState)(null),_=Object(l.a)(O,2),v=_[0],y=_[1],S=Object(r.useState)(1),w=Object(l.a)(S,2),C=w[0],N=(w[1],Object(r.useState)(null)),k=Object(l.a)(N,2),I=k[0],R=k[1],U=Object(r.useState)(H),F=Object(l.a)(U,2),M=F[0],q=F[1],A=Object(r.useState)(!1),B=Object(l.a)(A,2),Y=B[0],X=B[1],D=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return Object(c.jsxs)("div",{className:m.a.app,children:[Object(c.jsx)(x,{onSubmit:function(e){P.resetPage(),n(e)}}),"idle"===M&&Object(c.jsx)("div",{className:m.a.text,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430"}),"pending"===M&&Object(c.jsx)(L,{}),"rejected"===M&&Object(c.jsx)(E,{message:I.message}),v>1&&"resolved"===M&&Object(c.jsx)(f,{images:d,largeURL:function(e){var t=e.target;if("IMG"===t.nodeName){var a=t.dataset.sourse;j(a)}}}),b&&Object(c.jsx)(G,{onClose:function(){j("")},children:Object(c.jsx)("img",{src:b,alt:a})}),Y&&Object(c.jsx)(L,{}),v>d.length&&!Y&&Object(c.jsx)(z,{onClick:function(){X(!0),P.fetchGallery(a,C).then((function(e){var t=e.hits,a=e.total;0===t.length&&u.b.error("\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0435\u0442 \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430!"),p((function(e){return[].concat(Object(i.a)(e),Object(i.a)(t))})),y(a),X(!1),q(J),D()})).catch((function(e){R(e),q(T)}))}}),Object(c.jsx)(u.a,{autoClose:3e3})]})}s.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(q,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__1fCoM",searchForm:"Searchbar_searchForm__TBh7S",button:"Searchbar_button__1z0Xa",label:"Searchbar_label__Jq4Py",input:"Searchbar_input__197LH"}},9:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__2HkzL"}}},[[46,1,2]]]);
//# sourceMappingURL=main.6f20b243.chunk.js.map