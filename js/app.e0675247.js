(function(e){function t(t){for(var i,a,u=t[0],l=t[1],c=t[2],s=0,p=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={app:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-cli-app/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2458:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),r=(n("b0c0"),Object(i["e"])("header",null,[Object(i["e"])("h1",null,"My Friends")],-1));function o(e,t,n,o,a,u){var l=Object(i["i"])("add-friend"),c=Object(i["i"])("friend-contact");return Object(i["g"])(),Object(i["d"])("section",null,[r,Object(i["f"])(l,{onAddFriend:u.addFriend},null,8,["onAddFriend"]),(Object(i["g"])(!0),Object(i["d"])(i["a"],null,Object(i["h"])(a.friends,(function(e){return Object(i["g"])(),Object(i["d"])("ul",{key:e.name},[Object(i["f"])(c,{key:e.id,id:e.id,name:e.name,email:e.email,phone:e.phone,isFavourite:e.isFavourite,onToggleFavourite:u.toggleFavourite},null,8,["id","name","email","phone","isFavourite","onToggleFavourite"])])})),128))])}var a=n("5530"),u=(n("7db0"),n("d3b7"),n("25f0"),{data:function(){return{friends:[{id:"id1",name:"juliet",email:"juliet@email.com",phone:"7777777777",isFavourite:!0},{id:"id2",name:"romeo",email:"romeo@email.com",phone:"6666666666",isFavourite:!1}]}},methods:{toggleFavourite:function(e){var t=this.friends.find((function(t){return t.id===e}));t.isFavourite=!t.isFavourite},addFriend:function(e){var t=Object(a["a"])(Object(a["a"])({id:Math.random().toString()},e),{},{isFavourite:!0});this.friends.push(t)}}});n("a0a8");u.render=o;var l=u,c={key:0};function d(e,t,n,r,o,a){return Object(i["g"])(),Object(i["d"])("li",null,[Object(i["e"])("h2",null,Object(i["j"])(n.name)+" "+Object(i["j"])(n.isFavourite?"(Favourite)":""),1),Object(i["e"])("button",{onClick:t[0]||(t[0]=function(){return a.toggleFavourite&&a.toggleFavourite.apply(a,arguments)})},"Toggle Fav"),Object(i["e"])("button",{onClick:t[1]||(t[1]=function(){return a.toggleDetails&&a.toggleDetails.apply(a,arguments)})},"Show Details"),o.detailsIsVisible?(Object(i["g"])(),Object(i["d"])("ul",c,[Object(i["e"])("li",null,Object(i["j"])(n.email),1),Object(i["e"])("li",null,Object(i["j"])(n.phone),1)])):Object(i["c"])("",!0)])}var s={props:{id:{type:String,required:!0},name:{type:String,required:!0},email:{type:String,required:!0},phone:{type:String,required:!0},isFavourite:{type:Boolean,required:!1,default:!1}},data:function(){return{detailsIsVisible:!1}},methods:{toggleDetails:function(){this.detailsIsVisible=!this.detailsIsVisible},toggleFavourite:function(){this.$emit("toggle-favourite",this.id)}}};s.render=d;var p=s,b={class:"friend-container"},f=Object(i["e"])("h1",null,"Add Friend",-1),j={class:"container"},O={class:"input-group"},v=Object(i["e"])("label",{for:""},"Name",-1),m={class:"input-group"},h=Object(i["e"])("label",{for:""},"Phone",-1),g={class:"input-group"},y=Object(i["e"])("label",{for:""},"Email",-1);function F(e,t,n,r,o,a){return Object(i["g"])(),Object(i["d"])("div",b,[f,Object(i["e"])("div",j,[Object(i["e"])("div",O,[v,Object(i["l"])(Object(i["e"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.name=e}),type:"text"},null,512),[[i["k"],o.name]])]),Object(i["e"])("div",m,[h,Object(i["l"])(Object(i["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.phone=e}),type:"text"},null,512),[[i["k"],o.phone]])]),Object(i["e"])("div",g,[y,Object(i["l"])(Object(i["e"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.email=e}),type:"text"},null,512),[[i["k"],o.email]])]),Object(i["e"])("button",{onClick:t[3]||(t[3]=function(){return a.addFriend&&a.addFriend.apply(a,arguments)})},"Submit")])])}var k={data:function(){return{name:"",phone:"",email:""}},methods:{addFriend:function(){var e=this.name,t=this.phone,n=this.email;this.$emit("add-friend",{name:e,phone:t,email:n})}}};k.render=F;var S=k,w=Object(i["b"])(l);w.component("friend-contact",p),w.component("add-friend",S),w.mount("#app")},a0a8:function(e,t,n){"use strict";n("2458")}});
//# sourceMappingURL=app.e0675247.js.map