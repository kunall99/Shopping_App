(this["webpackJsonpredux-example"]=this["webpackJsonpredux-example"]||[]).push([[0],{62:function(e,t,a){e.exports={products:"Products_products__fSrN2"}},64:function(e,t,a){},67:function(e,t,a){e.exports=a.p+"static/media/smartphone.67a48767.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/speaker.4a0dbe85.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/book.028978f4.jpg"},79:function(e,t,a){e.exports=a(96)},84:function(e,t,a){},85:function(e,t,a){},90:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=(a(84),a(28)),l=a(11),s=(a(85),a(14)),m=a(20),u=a(132),d=a(135),p=a(137),E=a(138),h=a(144),v=a(61),f=a.n(v),y=(a(90),Object(u.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},tool:{position:"relative"}}})));var g=Object(s.b)((function(e){return{cart:e.shop.cart}}))((function(e){var t=e.cart,a=y(),c=Object(n.useState)(0),i=Object(m.a)(c,2),l=i[0],s=i[1];return Object(n.useEffect)((function(){var e=0;t.forEach((function(t){e+=t.qty})),s(e)}),[t]),r.a.createElement("div",{className:a.root},r.a.createElement(d.a,{style:{backgroundColor:"#badc58"},position:"static"},r.a.createElement(p.a,{className:a.tool},r.a.createElement(E.a,{variant:"h6",className:a.title},r.a.createElement(o.b,{to:"/",style:{color:"#2f3542"}},"Shopping")),r.a.createElement(o.b,{to:"/cart",style:{color:"#2f3542"}},r.a.createElement(h.a,{color:"inherit"},"Cart",r.a.createElement(f.a,{style:{marginLeft:"12%",marginRight:"1%"}}),r.a.createElement("span",{className:"cartNumber",style:{}},l))))))})),b=a(62),O=a.n(b),j=function(e){return{type:"ADD_TO_CART",payload:{id:e}}},N=a(139),C=a(142),w=a(141),T=a(140),S=(a(93),Object(u.a)({root:{maxWidth:345,marginBottom:"5%"},media:{height:"40vh"}}));var k=Object(s.b)(null,(function(e){return{addToCart:function(t){return e(j(t))},loadCurrentItem:function(t){return e(function(e){return{type:"LOAD_CURRENT_ITEM",payload:e}}(t))}}}))((function(e){var t=e.product,a=e.addToCart,n=e.loadCurrentItem,c=Object(l.g)(),i=S();return r.a.createElement(N.a,{className:i.root},r.a.createElement(T.a,{className:i.media,image:t.image,title:t.title}),r.a.createElement(w.a,{className:i.cardstyle},r.a.createElement(E.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p",style:{height:"26vh"}},t.description),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h5",align:"center",color:"textPrimary"},t.price,"\xa0\u20b9")),r.a.createElement(C.a,null,r.a.createElement(h.a,{size:"small",color:"primary",onClick:function(){n(t),c.push("/product/".concat(t.id))}},"View Item"),r.a.createElement(h.a,{size:"small",color:"primary",onClick:function(){return a(t.id)}},"Add to Cart")))})),x=Object(s.b)((function(e){return{products:e.shop.products}}))((function(e){var t=e.products;return r.a.createElement("div",{className:O.a.products},t.map((function(e){return r.a.createElement(k,{key:e.id,product:e})})))})),A=(a(94),a(95),a(63)),_=a.n(A);var R=Object(s.b)(null,(function(e){return{adjustQty:function(t,a){return e((n=t,r=a,console.log(r),{type:"ADJUST_ITEM_QTY",payload:{id:n,qty:r}}));var n,r},removeFromCart:function(t){return e({type:"REMOVE_FROM_CART",payload:{id:t}})}}}))((function(e){var t=e.item,a=e.adjustQty,c=e.removeFromCart,i=Object(n.useState)(t.qty),o=Object(m.a)(i,2),l=o[0],s=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("div",{className:"itemContainer"},r.a.createElement("div",{className:"imgc"},r.a.createElement("img",{src:t.image,alt:t.title})),r.a.createElement("div",{className:"desc"},r.a.createElement("div",{className:"itemName"},r.a.createElement("h3",null,t.title)),r.a.createElement("div",{className:"itemQuantity"},r.a.createElement("label",{htmlFor:"qty"},"Qty"),r.a.createElement("input",{min:"1",type:"number",id:"qty",name:"qty",value:l,onChange:function(e){e.target.value>0&&(s(e.target.value),a(t.id,e.target.value))}})),r.a.createElement("div",{className:"itemdesc"},r.a.createElement("p",{style:{color:"#222f3e",fontFamily:"cursive",textAlign:"justify"}},t.description)),r.a.createElement("div",{className:"pc"},r.a.createElement(h.a,{variant:"contained",color:"secondary",onClick:function(){return c(t.id)}},r.a.createElement(_.a,null),"Delete"),r.a.createElement("h3",{style:{marginTop:"1%",marginLeft:"4%"}},"\u20b9 ",t.price)))))})),I=a(143),B={SAVE10:{name:"SAVE10",discount:10},SAVE20:{name:"SAVE20",discount:20},ABCD:{name:"ABCD",discount:15}};var q=Object(s.b)((function(e){return{cart:e.shop.cart}}))((function(e){var t=e.cart,a=Object(n.useState)(0),c=Object(m.a)(a,2),i=c[0],o=c[1],l=Object(n.useState)(0),s=Object(m.a)(l,2),u=s[0],d=s[1],p=Object(n.useState)(""),E=Object(m.a)(p,2),v=E[0],f=E[1],y=Object(n.useState)(!0),g=Object(m.a)(y,2),b=g[0],O=g[1],j=Object(n.useState)(null),N=Object(m.a)(j,2),C=N[0],w=N[1],T=Object(n.useState)(null),S=Object(m.a)(T,2),k=S[0],x=S[1];return Object(n.useEffect)((function(){var e=0,a=0;t.forEach((function(t){e+=t.qty,a+=t.qty*t.price})),d(e),o(a)}),[t]),r.a.createElement(r.a.Fragment,null,0==t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Your cart is empty")):r.a.createElement("div",{className:"container-div"},r.a.createElement("div",{className:"items"},r.a.createElement("div",{className:"header"},r.a.createElement("h3",{style:{paddingTop:"2%",paddingLeft:"2%",marginBottom:"3%"}},"Shopping Cart")),r.a.createElement("div",{className:"added"},t.map((function(e){return r.a.createElement(R,{key:e.id,item:e})})))),r.a.createElement("div",{className:"details-c"},r.a.createElement("div",{className:"details"},r.a.createElement("h4",{style:{textAlign:"center",paddingTop:"5%"}},"Cart Summary"),r.a.createElement("div",{style:{textAlign:"center",marginBottom:"5%",marginTop:"5%"}},r.a.createElement("span",null,"Subtotal (",u," items) : "),r.a.createElement("span",{style:{fontWeight:"bold"}},"\u20b9 ",i)),r.a.createElement(r.a.Fragment,null,1==b?r.a.createElement("div",{className:"coupon"},r.a.createElement(I.a,{value:v,style:{marginRight:"2%"},id:"standard-basic",label:"Enter code",onChange:function(e){f(e.target.value)}}),r.a.createElement(h.a,{variant:"outlined",size:"small",onClick:function(){console.log(v);var e=v.trim().toUpperCase(),t=B[e];if(void 0==t)console.log("Coupon is not applicable"),w(!1),O(!1);else{w(!0),O(!1),console.log(t.discount);var a=i/100*t.discount,n=Math.trunc(i-a);x(i),o(n)}}},"Apply")):r.a.createElement(r.a.Fragment,null,1==C?r.a.createElement("div",{className:"smsg"},r.a.createElement("h4",null,"Code applied !"),r.a.createElement("div",{className:"revert"},r.a.createElement(h.a,{onClick:function(){o(k),x(null),w(null),O(!0),f("")},size:"small",variant:"contained",color:"secondary"},"Revert"))):r.a.createElement("div",{className:"fmsg"},r.a.createElement("h4",null,"Not valid !"),r.a.createElement("div",{className:"revert"},r.a.createElement(h.a,{onClick:function(){w(null),O(!0),f("")},size:"small",variant:"contained",color:"secondary"},"Try Again"))))),r.a.createElement("div",{className:"checkout"},r.a.createElement(h.a,{variant:"contained",color:"primary"},"Proceed To Buy"))))))})),D=a(64),F=a.n(D),M=a(65),V=a.n(M),W=Object(s.b)((function(e){return{current:e.shop.currentItem}}),(function(e){return{addToCart:function(t){return e(j(t))}}}))((function(e){var t=e.current,a=e.addToCart;return r.a.createElement("div",{className:"s-container"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{className:"img",src:t.image,alt:t.title})),r.a.createElement("div",{className:"detailss"},r.a.createElement("h1",{className:"p-name"},t.title),r.a.createElement("p",{style:{color:"#d63031",marginBottom:"5%"}},r.a.createElement("span",{style:{color:"grey"}},"M.R.P."),"\xa0 \u20b9 ",t.price),r.a.createElement("h4",{style:{color:"#2d3436",marginBottom:"4%"}},"Description"),r.a.createElement("p",{className:"description"},t.description),r.a.createElement(h.a,{style:{backgroundColor:"#e67e22",marginTop:"5%"},onClick:function(){return a(t.id)},className:F.a.details__addBtn},r.a.createElement(V.a,null),"\xa0 Add To Cart")))}));var L=Object(s.b)((function(e){return{current:e.shop.currentItem}}))((function(e){var t=e.current;return r.a.createElement(o.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(g,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:x}),r.a.createElement(l.b,{exact:!0,path:"/cart",component:q}),t?r.a.createElement(l.b,{exact:!0,path:"/product/:id",component:W}):r.a.createElement(l.a,{to:"/"}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(26),Q=a(66),z=a(70),U=a(15),G=a(67),J=a.n(G),Y=a(68),H=a.n(Y),X=a(69),$=a.n(X),K={products:[{id:1,title:"Smartphone",description:"This smartphone is not just a sight to behold but also comes equipped with innovative features\n         that will keep you productive and entertained. Its Helio G85 Gaming Processor ensures that you stay\n          on top of the leaderboard while gaming. Its 16.5 cm (6.5) Mini-drop Fullscreen ensures an immersive\n           experience while gaming, streaming content, and more. ",price:2e4,image:J.a},{id:2,title:"Bluetooth Speaker",description:"With the Bluetooth speaker, you can enjoy motivational, dance, or instrumental music whenever you want. \n        It ensures an immersive listening experience with its 52 mm full-range driver so that you can stay entertained\n         wherever you are. With an IPX7 rating, it ensures water resistance so that you can listen to music by\n          the poolside without a worry in the world.",price:999,image:H.a},{id:3,title:"Book",description:"The land of Meluha is an empire created by Lord Rama, and it is ruled by the Suryavanshis. This empire \n        is powerful and proud, however, the Saraswati river that is their source of water is slowing drying up. \n        On top of that, the empire is at war with the Chandravanshis who have allied with The Nagas, a group of \n        sinister and deformed human beings who have extraordinary martial art skills.",price:250,image:$.a}],cart:[],currentItem:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var a=e.products.find((function(e){return e.id===t.payload.id})),n=e.cart.find((function(e){return e.id===t.payload.id}));return Object(U.a)(Object(U.a)({},e),{},{cart:n?e.cart.map((function(e){return e.id===t.payload.id?Object(U.a)(Object(U.a)({},e),{},{qty:e.qty+1}):e})):[].concat(Object(z.a)(e.cart),[Object(U.a)(Object(U.a)({},a),{},{qty:1})])});case"REMOVE_FROM_CART":return Object(U.a)(Object(U.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case"ADJUST_ITEM_QTY":return Object(U.a)(Object(U.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload.id?Object(U.a)(Object(U.a)({},e),{},{qty:+t.payload.qty}):e}))});case"LOAD_CURRENT_ITEM":return Object(U.a)(Object(U.a)({},e),{},{currentItem:t.payload});default:return e}},ee=Object(P.combineReducers)({shop:Z}),te=Object(P.createStore)(ee,Object(Q.composeWithDevTools)());i.a.render(r.a.createElement(s.a,{store:te},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[79,1,2]]]);
//# sourceMappingURL=main.3e7d3e5f.chunk.js.map