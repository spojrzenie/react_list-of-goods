(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n,r=s(4),o=s.n(r),i=s(5),c=s(6),a=s(8),l=s(7),u=s(2),b=s(1),h=s.n(b),d=(s(13),s(14),s(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var y=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:n.NONE},t.sortByAlphabetically=function(){t.setState({sortType:n.ALPHABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.reverseOrder=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.resetSorting=function(){t.setState({sortType:n.NONE,isReversed:!1})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.sortType,r=function(t,e){var s=e.sortType,r=e.isReversed,o=Object(u.a)(t);return s===n.ALPHABET&&o.sort((function(t,e){return t.localeCompare(e)})),s===n.LENGTH&&o.sort((function(t,e){return t.length-e.length})),r&&(o=Object(u.a)(o).reverse()),s===n.NONE&&(o=Object(u.a)(o)),o}(p,this.state);return Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:this.state.sortType===n.ALPHABET?"button is-info":"button is-info is-light",onClick:this.sortByAlphabetically,children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:this.state.sortType===n.LENGTH?"button is-success":"button is-success is-light",onClick:this.sortByLength,children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:!0===e?"button is-info":"button is-info is-light",onClick:this.reverseOrder,children:"Reverse"}),(s!==n.NONE||e)&&Object(d.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.resetSorting,children:"Reset"})]}),Object(d.jsx)("ul",{children:r.map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),s}(h.a.Component);o.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.be69e9a0.chunk.js.map