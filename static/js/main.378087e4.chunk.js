(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a.n(n),r=a(6),c=a(2),o=a(1),s=(a(15),a(5)),l=a(8),d=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=function(e){var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(r.a)(t))+1},m=a(0),j={titleInput:"",userSelect:0},b=function(e){var t=e.addTodo,a=e.todos,n=Object(o.useState)(j),i=Object(c.a)(n,2),r=i[0],b=i[1],h=Object(o.useState)(!1),f=Object(c.a)(h,2),p=f[0],O=f[1],x=Object(o.useState)(!1),v=Object(c.a)(x,2),S=v[0],y=v[1],I=function(e){var t=e.target,a=t.value,n=t.name,i="";"userSelect"===n&&(i=Number(a),y(!1)),"titleInput"===e.target.name&&(i=a.trimStart(),O(!1)),b((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(s.a)({},n,i))}))};return Object(m.jsxs)("form",{action:"/api/todos",method:"POST",children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("input",{type:"text","data-cy":"titleInput",name:"titleInput",value:r.titleInput,required:!0,onChange:I}),p&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("select",{"data-cy":"userSelect",name:"userSelect",value:r.userSelect,required:!0,onChange:I,children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),d.map((function(e){var t=e.id,a=e.name;return Object(m.jsx)("option",{value:t,children:a},t)}))]}),S&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",onClick:function(e){e.preventDefault();var n=r.titleInput,i=r.userSelect;if(n||O(!0),0===i&&y(!0),n&&0!==i){var c={id:u(a)+1,completed:!1,title:n,userId:i};t(c),b(j)}},children:"Add"})]})},h=a(10),f=a.n(h),p=function(e){var t=e.user,a=t.name,n=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},O=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=function(e,t){return t.find((function(t){return t.id===e}))||null}(t.userId,d);return Object(m.jsxs)("article",{"data-id":a,className:f()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),Object(m.jsx)(p,{user:r})]})},x=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(O,{todo:e},e.id)}))})},v=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],S=function(){var e=Object(o.useState)(v),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsx)(b,{addTodo:function(e){n((function(t){return[].concat(Object(r.a)(t),[e])}))},todos:a}),Object(m.jsx)(x,{todos:a})]})};i.a.render(Object(m.jsx)(S,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.378087e4.chunk.js.map