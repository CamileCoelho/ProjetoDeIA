(()=>{"use strict";var t={803:(t,o,r)=>{r.d(o,{X:()=>a});var n=r(4),a=function(){function t(t){this.rotas=t}return t.prototype.busca=function(t,o){var r=new n.z(t,null),a=[r],e=new Set;e.add(r.coordenada);for(var i=1,s=0,c=null;a.length>0&&null===c;){var u=a.shift();if(s++,this.isPrateleira(u.coordenada)){if(u.coordenada===o){c=u;break}}else for(var l=0,d=this.rotas.rotas[u.coordenada]||[];l<d.length;l++){var p=d[l];if(p===o){i++;var f=new n.z(p,u);e.add(p),c=f}else e.has(p)||(i++,f=new n.z(p,u),a.push(f),e.add(p))}}return[c,i,s]},t.prototype.isPrateleira=function(t){return!t.includes("x")},t.prototype.pegaCaminho=function(t,o,r){var n=[];if(null===t)console.log("Solução não encontrada.");else{for(console.log("***Rota encontrada***");null!==t;)console.log(t.coordenada),n.push(t.coordenada),t=t.pai;n.reverse()}return console.log("Vertices visitados: ",o),console.log("Vertices expandidos: ",r),n},t}()},916:(t,o,r)=>{var n=r(419),a=(function(){function t(t){this.dicPrateleiraParaCoordenada={},this.rotas=t,this.inicializaDic()}t.prototype.inicializaDic=function(){for(var t=1;t<=100;t++){var o=void 0;t>=1&&t<=10?o="0x"+t:t>=11&&t<=20?o="2x"+(t-10):t>=21&&t<=30?o="3x"+(t-20):t>=31&&t<=40?o="5x"+(t-30):t>=41&&t<=50?o="6x"+(t-40):t>=51&&t<=60?o="8x"+(t-50):t>=61&&t<=70?o="9x"+(t-60):t>=71&&t<=80?o="11x"+(t-70):t>=81&&t<=90?o="12x"+(t-80):t>=91&&t<=100&&(o="14x"+(t-90)),this.dicPrateleiraParaCoordenada[t.toString()]=o}},t.prototype.realizaBusca=function(t,o){var r=this.busca(t,o,[]),a=r.resultado,e=r.qtdVisitados,i=r.qtdExpandidos,s=this.pegaCaminho(a,e,i);return new n.z(s,e,i)},t.prototype.calculaDistancia=function(t,o){var r=this.dicPrateleiraParaCoordenada[o],n=t.split("x").map(Number),a=n[0],e=n[1],i=r.split("x").map(Number),s=i[0],c=i[1],u=Math.abs(s-a),l=Math.abs(c-e);return Math.sqrt(Math.pow(u,2)+Math.pow(l,2))},t.prototype.busca=function(t,o,r){var n=this.calculaDistancia(t,o),e=new a(t,null,0,n);r.push(e);for(var i=1,s=0,c=null;0!==r.length;){if(r.sort((function(t,o){return t.fn-o.fn})),(e=r.shift()).coordenada===o){c=e;break}if(!this.ehPrateleira(e.coordenada)){s+=1;var u=this.geraFilhos(e,o,r,i);r=u.newFronteira,i=u.newQtdVisitados}}return{resultado:c,qtdVisitados:i,qtdExpandidos:s}},t.prototype.ehPrateleira=function(t){return!t.includes("x")},t.prototype.ehAncestral=function(t,o){for(;null!==o;){if(t===o.coordenada)return!0;o=o.pai}return!1},t.prototype.geraFilhos=function(t,o,r,n){for(var e=0,i=this.rotas.rotas[t.coordenada];e<i.length;e++){var s=i[e];if(null===t.pai||!this.ehAncestral(s,t.pai))if(n+=1,this.ehPrateleira(s)){if(s===o){var c=new a(s,t,t.gn,0);r.push(c)}}else{var u=this.calculaDistancia(s,o),l=u,d=new a(s,t,t.gn+u,l);r.push(d)}}return{newFronteira:r,newQtdVisitados:n}},t.prototype.pegaCaminho=function(t,o,r){var n=[];if(null===t)console.log("Solução não encontrada.");else{for(console.log("***Rota encontrada***");null!==t;)n.push(t.coordenada+" - "+t.gn),t=t.pai;n.reverse();for(var a=0,e=n;a<e.length;a++){var i=e[a];console.log(i)}}return console.log("Estados visitados: ",o),console.log("Estados expandidos: ",r),n}}(),function(){function t(t,o,r,n){this.coordenada=t,this.pai=o,this.gn=r,this.hn=n}return Object.defineProperty(t.prototype,"fn",{get:function(){return this.hn},enumerable:!1,configurable:!0}),t}())},126:(t,o,r)=>{var n,a=r(803),e=r(419),i=(n=function(t,o){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])},n(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)});!function(t){function o(){return null!==t&&t.apply(this,arguments)||this}i(o,t),o.prototype.realizaBusca=function(t,o){var r=this.busca(t,o),n=r[0],a=r[1],i=r[2],s=this.pegaCaminho(n,a,i);return new e.z(s,a,i)}}(a.X)},609:(t,o,r)=>{var n,a=r(803),e=r(419),i=r(4),s=(n=function(t,o){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])},n(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)});!function(t){function o(){return null!==t&&t.apply(this,arguments)||this}s(o,t),o.prototype.realizaBusca=function(t,o){var r=this.buscaProfundidade(t,o),n=r[0],a=r[1],i=r[2],s=this.pegaCaminho(n,a,i);return new e.z(s,a,i)},o.prototype.buscaProfundidade=function(t,o){if(t===o)return[null,0,0];for(var r=[new i.z(t,null)],n=new Set,a=1,e=0,s=null;r.length>0&&null===s;){var c=r.shift();if(e++,n.add(c.coordenada),this.rotas.rotas[c.coordenada])for(var u=0,l=this.rotas.rotas[c.coordenada];u<l.length;u++){var d=l[u];if(d===o){a++;var p=new i.z(d,c);n.add(d),s=p;break}n.has(d)?a++:(a++,p=new i.z(d,c),r.push(p))}}return[s,a,e]}}(a.X)},419:(t,o,r)=>{r.d(o,{z:()=>n});var n=function(t,o,r){this.caminho=t,this.qtdVisitados=o,this.qtdExpandidos=r}},4:(t,o,r)=>{r.d(o,{z:()=>n});var n=function(t,o){this.coordenada=t,this.pai=o}}},o={};function r(n){var a=o[n];if(void 0!==a)return a.exports;var e=o[n]={exports:{}};return t[n](e,e.exports,r),e.exports}r.d=(t,o)=>{for(var n in o)r.o(o,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},r.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r(803),r(916),r(126),r(609)})();
//# sourceMappingURL=algoritimos.bundle.js.map