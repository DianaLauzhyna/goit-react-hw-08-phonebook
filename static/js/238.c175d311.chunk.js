"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[238],{5238:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var a,i,r,o,c,l,s,d,u,p,h,x,f=t(1413),m=t(2791),g=t(9434),b=t(885),j=t(168),v=t(6088),Z=v.Z.label(a||(a=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),k=v.Z.span(i||(i=(0,j.Z)(["\n  display: block;\n  font-weight: 700;\n  margin-bottom: 10px;\n"]))),y=v.Z.input(r||(r=(0,j.Z)(["\n  background-color: #d160a7b8;\n  color: black;\n  display: block;\n  width: 300px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  padding: 10px;\n"]))),C=t(184),w=function(n){var e=n.mainTitle,t=n.type,a=n.name,i=n.title,r=n.pattern,o=n.handleChange,c=n.value;return(0,C.jsxs)(Z,{children:[(0,C.jsx)(k,{children:e}),(0,C.jsx)(y,{type:t,name:a,pattern:r,title:i,value:c,onChange:o,required:!0})]})},A=function(n){return n.contacts.contacts},S=function(n){return n.contacts.filter},_=function(n){return n.contacts.editedContact},P=v.Z.form(o||(o=(0,j.Z)(["\n  width: 500px;\n  margin-right: auto;\n  margin-left: auto;\n  text-align: center;\n"]))),z=v.Z.button(c||(c=(0,j.Z)(["\n  padding: 5px;\n  background-color: hotpink;\n  font-size: 15px;\n  border-radius: 4px;\n  color: black;\n  font-weight: bold;\n\n  &:hover {\n    color: white;\n  }\n"]))),E=v.Z.ul(l||(l=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex-grow: 1;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  height: 280px;\n  overflow: scroll;\n"]))),D=v.Z.li(s||(s=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n"]))),L=function(n){var e=n.onInputContact,t=(0,g.v9)(_),a=(0,m.useState)(""),i=(0,b.Z)(a,2),r=i[0],o=i[1],c=(0,m.useState)(""),l=(0,b.Z)(c,2),s=l[0],d=l[1],u=function(n){"name"===n.target.name?o(n.target.value):d(n.target.value)};return(0,m.useEffect)((function(){t&&o(t.name),t&&d(t.number)}),[t]),(0,C.jsxs)(P,{onSubmit:function(n){n.preventDefault(),e({name:r,number:s}),o(""),d("")},children:[(0,C.jsx)(w,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",mainTitle:"Name",defaultValue:"Bob",value:r,handleChange:u}),(0,C.jsx)(w,{type:"tel",name:"phone",title:"Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",mainTitle:"Phone",defaultValue:"+1",value:s,handleChange:u}),t?(0,C.jsx)(z,{type:"submit",children:"Edit Contact"}):(0,C.jsx)(z,{type:"submit",children:"Add Contact"})]})},N=function(n){var e=n.contacts,t=n.onClickDelete,a=n.onClickEdit;return e.length?(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(E,{children:e.map((function(n){return(0,C.jsxs)(D,{children:[n.name,":",(0,C.jsx)("span",{children:n.number}),(0,C.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,C.jsx)(z,{type:"button",onClick:function(){return t(n.id)},children:"Delete"}),(0,C.jsx)(z,{type:"button",onClick:function(){return a(n.id)},children:"Edit"})]})]},n.id)}))})}):(0,C.jsx)("p",{children:"No any data"})},I=v.Z.section(d||(d=(0,j.Z)(["\n  position: relative;\n  width: 600px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 10px;\n  border-radius: 20px;\n  border: 5px solid #364448;\n  background-color: #dfdbe5;\n"]))),T=v.Z.h1(u||(u=(0,j.Z)(["\n  width: fit-content;\n  margin: 0 auto 20px;\n\n  color: white;\n  background-color: #364448;\n  border-radius: 15px;\n  padding: 10px;\n"]))),B=function(n){var e=n.title,t=n.children;return(0,C.jsxs)(I,{children:[(0,C.jsx)(T,{children:e}),t]})},F=function(n){var e=n.nameSearch,t=n.onSearchName;return(0,C.jsxs)(Z,{children:[(0,C.jsx)(k,{children:e}),(0,C.jsx)(y,{type:"text",placeholder:"Search by name",onChange:function(n){return t(n.target.value)}})]})},J=t(835),K=t(8185),V=t(8402),q=function(){return(0,C.jsx)(V.s5,{strokeColor:"pink",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})},G=t(1538),M=t(7691),Q=t(9632),W=M.ZP.div(p||(p=(0,j.Z)(["\nwidth: fit-content;\nmargin:  0 auto;\nposition: absolute;\ntop: 10px;\nright: 10px;"]))),$=M.ZP.main(h||(h=(0,j.Z)(["\nbackground-image: url('","');\nbackground-size: cover;\nheight: 100% ;"])),Q),H=M.ZP.div(x||(x=(0,j.Z)(["\ndisplay: flex;\npadding: 100px;"]))),O=function(){var n=(0,g.v9)(_),e=(0,g.v9)(A),t=e.items,a=e.isLoading,i=e.error,r=(0,g.v9)(J.v).isAuth,o=(0,g.v9)(S),c=(0,g.I0)();(0,m.useEffect)((function(){c((0,K.Jv)())}),[c]);return(0,C.jsx)($,{children:r&&(0,C.jsxs)(H,{children:[(0,C.jsx)(B,{title:"PhoneBook",children:(0,C.jsx)(L,{onInputContact:function(e){if(!n&&t.some((function(n){return n.name===e.name})))return alert("".concat(e.name," is already in contacts."));!n&&c((0,K.uK)(e)),n&&c((0,K.Tk)((0,f.Z)({id:n.id},e)))}})}),(0,C.jsxs)(B,{title:"Contacts",children:[(0,C.jsx)(F,{nameSearch:"Find contacts by name",onSearchName:function(n){var e=n.trim().toLocaleLowerCase();e||(o=""),o=t.filter((function(n){return n.name.toLocaleLowerCase().includes(e)})),c((0,G.QA)(o))}}),(0,C.jsx)(W,{children:a&&(0,C.jsx)(q,{})}),(0,C.jsx)("p",{children:i}),(0,C.jsx)(N,{onClickDelete:function(n){c((0,K.GK)(n))},onClickEdit:function(n){var e=t.find((function(e){return e.id===n}));c((0,G.mP)(e))},contacts:""===o?t:o})]})]})})}},9632:function(n,e,t){n.exports=t.p+"static/media/backgroundImage.1efa43aa888c30bb4002.jpg"}}]);
//# sourceMappingURL=238.c175d311.chunk.js.map