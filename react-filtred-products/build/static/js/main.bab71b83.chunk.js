(this["webpackJsonplearn-react"]=this["webpackJsonplearn-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(3),r=n(5),l=n(4),i=n(0),o=n.n(i),s=n(7),h=n.n(s),u=(n(13),n(14),n(1)),d=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).handleFilterTextChange=c.handleFilterTextChange.bind(Object(u.a)(c)),c.handleCheckIsStack=c.handleCheckIsStack.bind(Object(u.a)(c)),c}return Object(c.a)(n,[{key:"handleFilterTextChange",value:function(e){this.props.onFilterChangeText(e.target.value)}},{key:"handleCheckIsStack",value:function(e){this.props.onInStockChange(e.target.checked)}},{key:"render",value:function(){return o.a.createElement("form",null,o.a.createElement("input",{type:"search",placeholder:"Search...",value:this.props.filterText,onChange:this.handleFilterTextChange}),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",checked:this.props.isStockOnly,onChange:this.handleCheckIsStack}),"Only show products in stock"))}}]),n}(o.a.Component),k=o.a.lazy((function(){return n.e(3).then(n.bind(null,16))})),p=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={filterText:"",isStockOnly:!1},c.handleFilterTextChange=c.handleFilterTextChange.bind(Object(u.a)(c)),c.handleCheckIsStack=c.handleCheckIsStack.bind(Object(u.a)(c)),c}return Object(c.a)(n,[{key:"handleFilterTextChange",value:function(e){this.setState({filterText:e})}},{key:"handleCheckIsStack",value:function(e){this.setState({isStockOnly:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:"filtred-product-table"},o.a.createElement(d,{filterText:this.state.filterText,isStockOnly:this.state.isStockOnly,onFilterChangeText:this.handleFilterTextChange,onInStockChange:this.handleCheckIsStack}),o.a.createElement(i.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(k,{products:this.props.products,filterText:this.state.filterText,isStockOnly:this.state.isStockOnly})))}}]),n}(o.a.Component),b=[{category:"Sporting Goods",price:"$49.99",stocked:!0,name:"Football"},{category:"Sporting Goods",price:"$9.99",stocked:!0,name:"Baseball"},{category:"Sporting Goods",price:"$29.99",stocked:!1,name:"Basketball"},{category:"Electronics",price:"$99.99",stocked:!0,name:"iPod Touch"},{category:"Electronics",price:"$399.99",stocked:!1,name:"iPhone 5"},{category:"Electronics",price:"$199.99",stocked:!0,name:"Nexus 7"}],f=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Product filtred table"),o.a.createElement("hr",null),o.a.createElement(p,{products:b}))}}]),n}(o.a.Component);h.a.render(o.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.bab71b83.chunk.js.map