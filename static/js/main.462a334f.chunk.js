(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,s){e.exports={nav:"Navbar_nav__1RChf",item:"Navbar_item__Qin6T",active:"Navbar_active__Siz7Z",grid:"Navbar_grid__2OMsl",friendName:"Navbar_friendName__VOdSD"}},116:function(e,t,s){e.exports={footer:"Footer_footer__29X5M"}},117:function(e,t,s){},118:function(e,t,s){e.exports={content:"ProfileInfo_content__3sl4Z"}},120:function(e,t,s){},202:function(e,t,s){},247:function(e,t,s){"use strict";s.r(t);var n,a=s(1),c=s.n(a),r=(s(120),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,251)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))}),o=s(7),i=s(37),u=s(3),l=s(111),d=s.n(l).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"65933dcc-6afe-43bc-af50-63aed10a4c85"}}),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return d.get("users?page=".concat(e,"&count=").concat(t))},b=function(e){return d.post("follow/".concat(e))},g=function(e){return d.delete("follow/".concat(e))},O=function(e){return console.log("Please use profileAPI ti get users."),h.getUserProfile(e)},h={getUserProfile:function(e){return d.get("profile/".concat(e))},getUserStatus:function(e){return d.get("profile/status/".concat(e))},updateUserStatus:function(e){return d.put("profile/status",{status:e})}},p=function(){return d.get("auth/me")};!function(e){e.ADD_POST="ADD_POST",e.SET_USERS_PROFILE="SET_USERS_PROFILE",e.SET_STATUS="SET_STATUS"}(n||(n={}));var f,m=function(e){return{type:"SET_STATUS",status:e}},_={posts:[{id:1,message:"Hello bro",likeCount:0}],profile:null,status:""},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.ADD_POST:var s={id:5,message:t.newPostText,likeCount:0};return""!==t.newPostText?Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[s])}):e;case n.SET_USERS_PROFILE:return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case n.SET_STATUS:return Object(u.a)(Object(u.a)({},e),{},{status:t.status});default:return e}};!function(e){e.SEND_MESSAGE="SEND_MESSAGE",e.UPDATE_NEW_MESSAGE_BODY="UPDATE_NEW_MESSAGE_BODY"}(f||(f={}));var v,S={dialogs:[{id:1,name:"Archi",img:"https://cs4.pikabu.ru/post_img/big/2015/03/10/5/1425968564_1301750843.jpg"},{id:2,name:"Dimich",img:"http://rasfokus.ru/images/photos/medium/71e226a2972b39c54360dfec99765e66.jpg"},{id:3,name:"The_Kot",img:"https://i1.u-mama.ru/111/87b/b3d/3f034929b4556f4a747ca0fd40c29f08.jpg"}],messages:[{id:1,message:"Hihihihih"},{id:2,message:"How is your s ds"},{id:3,message:"Hihihihih"}]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.SEND_MESSAGE:var s={id:6,message:t.messageText};return""!==t.messageText?Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(i.a)(e.messages),[s])}):e;default:return e}};!function(e){e.FOLLOW="FOLLOW",e.UNFOLLOW="UNFOLLOW",e.SET_USERS="SET_USERS",e.SET_CURRENT_PAGE="SET_CURRENT_PAGE",e.SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT",e.TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING",e.TOGGLE_IS_FETCHING_PROGRESS="TOGGLE_IS_FETCHING_PROGRESS"}(v||(v={}));var T,E={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},N=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},C=function(e,t){return{type:"TOGGLE_IS_FETCHING_PROGRESS",isFetching:e,userId:t}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.FOLLOW:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});case v.UNFOLLOW:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});case v.SET_USERS:return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case v.SET_CURRENT_PAGE:return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case v.SET_TOTAL_USERS_COUNT:return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.count});case v.TOGGLE_IS_FETCHING:return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case v.TOGGLE_IS_FETCHING_PROGRESS:return Object(u.a)(Object(u.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}};!function(e){e.SET_USER_DATA="SET_USER_DATA"}(T||(T={}));var U={userId:null,email:null,login:null,isAuth:!1},y=s(112),A=s(113),I=s(250),F=Object(o.combineReducers)({profilePage:x,dialogsPage:P,usersPage:w,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.SET_USER_DATA:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.data),{},{isAuth:!0});default:return e}},form:I.a}),D=Object(o.createStore)(F,Object(A.composeWithDevTools)(Object(o.applyMiddleware)(y.a))),k=s(56),R=s.n(k),L=s(9),G=(s(202),s(11)),M=s.n(G),H=s(0),B=function(){return Object(H.jsxs)("nav",{className:M.a.nav,children:[Object(H.jsx)("div",{className:M.a.item,children:Object(H.jsx)(L.b,{to:"/profile",activeClassName:M.a.active,children:"Profile"})}),Object(H.jsx)("div",{className:M.a.item,children:Object(H.jsx)(L.b,{to:"/users",activeClassName:M.a.active,children:"Users"})}),Object(H.jsx)("div",{className:"".concat(M.a.item," ").concat(M.a.active),children:Object(H.jsx)(L.b,{to:"/dialogs",activeClassName:M.a.active,children:" Dialogs"})}),Object(H.jsx)("div",{className:M.a.item,children:Object(H.jsx)(L.b,{to:"/news",activeClassName:M.a.active,children:"News"})}),Object(H.jsx)("div",{className:M.a.item,children:Object(H.jsx)(L.b,{to:"/music",activeClassName:M.a.active,children:"Music"})}),Object(H.jsx)("div",{className:M.a.item,children:Object(H.jsx)(L.b,{to:"/settings",activeClassName:M.a.active,children:"Settings"})}),Object(H.jsxs)("div",{children:[Object(H.jsx)(L.b,{to:"/friends",className:M.a.friendName,children:"Friends"}),Object(H.jsx)("div",{className:M.a.grid,children:" "})]})]})},W=s(116),z=s.n(W),K=function(){return Object(H.jsx)("footer",{className:z.a.footer,children:"footer"})},q=s(8),J=s(76),V=s.n(J),Z=function(){return Object(H.jsx)("div",{children:Object(H.jsx)("div",{className:V.a.news,children:Object(H.jsx)("div",{className:V.a.newsTitle,children:"News"})})})},Q=function(){return Object(H.jsx)("div",{children:"Music"})},Y=function(){return Object(H.jsx)("div",{children:"Settings"})},X=s(30),$=s.n(X),ee=s(27),te=s.n(ee),se=function(e){var t="/dialogs/"+e.id;return Object(H.jsxs)("div",{className:"".concat(te.a.dialog," ").concat(te.a.active," ").concat(te.a.grid),children:[Object(H.jsx)(L.b,{to:t,children:Object(H.jsx)("img",{src:e.img,alt:"aa",className:te.a.dialogAvatar})}),Object(H.jsx)("div",{className:te.a.dialogText,children:"some text"}),Object(H.jsx)(L.b,{to:t,activeClassName:te.a.active,className:te.a.dialogUsername,children:e.name})]})},ne=function(e){return Object(H.jsx)("div",{className:$.a.message,children:e.message})},ae=s(248),ce=s(249),re=s(45),oe=s(46),ie=s.n(oe),ue=function(e){var t=e.input,s=e.meta,n=Object(re.a)(e,["input","meta"]),a=s.touched&&s.error;return Object(H.jsxs)("div",{className:"".concat(ie.a.formControl," + ").concat(a?ie.a.error:""," "),children:[Object(H.jsx)("div",{children:Object(H.jsx)("textarea",Object(u.a)(Object(u.a)({},t),n))}),a&&Object(H.jsx)("span",{children:s.error})]})},le=function(e){var t=e.input,s=e.meta,n=Object(re.a)(e,["input","meta"]),a=s.touched&&s.error;return Object(H.jsxs)("div",{className:"".concat(ie.a.formControl," + ").concat(a?ie.a.error:""," "),children:[Object(H.jsx)("div",{children:Object(H.jsx)("input",Object(u.a)(Object(u.a)({},t),n))}),a&&Object(H.jsx)("span",{children:s.error})]})},de=function(e){return e?void 0:"field is req"},je=function(e){return function(t){return t.length>e?"max length is ".concat(e," symbols"):void 0}},be=je(100),ge=Object(ae.a)({form:"dialogsAddMessageForm"})((function(e){return Object(H.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(H.jsx)(ce.a,{placeholder:"create post",component:ue,name:"sendNewMessage",validate:[de,be],children:" "}),Object(H.jsx)("button",{children:"send"})]})})),Oe=function(e){var t=e.dialogsPage,s=e.sendMessage,n=t.dialogs.map((function(e){return Object(H.jsx)(se,{name:e.name,id:e.id,img:e.img},e.id)})),a=t.messages.map((function(e){return Object(H.jsx)(ne,{message:e.message,id:e.id},e.id)}));return Object(H.jsxs)("div",{className:$.a.dialogs,children:[Object(H.jsx)("h2",{className:$.a.dialogsHeader,children:" Dialogs"}),Object(H.jsx)("div",{className:$.a.dialogItems,children:n}),Object(H.jsxs)("div",{className:$.a.messages,children:[Object(H.jsx)("div",{children:a}),Object(H.jsx)(ge,{onSubmit:function(e){s(e.sendNewMessage)}})]})]})},he=s(10),pe=function(e){return{isAuth:e.auth.isAuth}};function fe(e){return Object(he.b)(pe)((function(t){t.isAuth;var s=Object(re.a)(t,["isAuth"]);return t.isAuth?Object(H.jsx)(e,Object(u.a)({},s)):Object(H.jsx)(q.b,{to:"/login"})}))}var me=Object(o.compose)(Object(he.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:"SEND_MESSAGE",messageText:e}}(t))}}})),fe)(Oe),_e=s(22),xe=s(23),ve=s(25),Se=s(24),Pe=s(32),Te=s.n(Pe),Ee=s.p+"static/media/icons8-user-male.be2cd3f6.svg",Ne=function(e){for(var t=e.users,s=e.currentPage,n=e.pageSize,a=e.totalUsersCount,c=e.onPageChanged,r=e.followingInProgress,o=e.follow,i=e.unfollow,u=Math.ceil(a/n),l=[],d=1;d<=u;d++)l.push(d);var j=l.map((function(e,t){return Object(H.jsx)("span",{onClick:function(){return c(e)},className:s===e?Te.a.selected:"",children:e},t)}));return Object(H.jsxs)("div",{children:[Object(H.jsx)("div",{style:{marginBottom:"20px"},children:j}),t.map((function(e){return Object(H.jsxs)("div",{className:Te.a.grid,children:[Object(H.jsx)(L.b,{to:"/profile/".concat(e.id," "),children:Object(H.jsx)("img",{className:Te.a.photo,src:null!==e.photos.small?e.photos.small:Ee,alt:"animated-user"})}),Object(H.jsx)("div",{className:Te.a.follow,children:e.followed?Object(H.jsx)("button",{disabled:r.some((function(t){return t===e.id})),onClick:function(){i(e.id)},children:"Unfollow"}):Object(H.jsx)("button",{disabled:r.some((function(t){return t===e.id})),onClick:function(){o(e.id)},children:"follow"})}),Object(H.jsx)("div",{className:Te.a.name,children:e.name}),Object(H.jsx)("div",{className:Te.a.status,children:e.status})]},e.id)}))]})},Ce=s.p+"static/media/Bean Eater-1.2s-197px.7923c0b5.svg",we=function(){return Object(H.jsx)("img",{style:{position:"absolute",top:"40%",left:"50%"},src:Ce,alt:"Packman"})},Ue=function(e){Object(ve.a)(s,e);var t=Object(Se.a)(s);function s(){var e;Object(_e.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(xe.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(H.jsxs)(H.Fragment,{children:[this.props.isFetching&&Object(H.jsx)(we,{}),Object(H.jsx)(Ne,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),s}(c.a.Component),ye=Object(o.compose)(Object(he.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},getUsers:function(e,t){return function(s){s(N(!0)),j(e,t).then((function(e){s(N(!1)),s({type:"SET_USERS",users:e.data.items}),s({type:"SET_TOTAL_USERS_COUNT",count:e.data.totalCount})}))}},follow:function(e){return function(t){t(C(!0,e)),b(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(C(!1,e))}))}},unfollow:function(e){return function(t){t(C(!0,e)),g(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(C(!1,e))}))}}}),fe)(Ue),Ae=s(117),Ie=s.n(Ae),Fe=s(118),De=s.n(Fe),ke=function(e){Object(ve.a)(s,e);var t=Object(Se.a)(s);function s(){var e;Object(_e.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={status:e.props.status,editMode:!0},e.onDoubleClick=function(){e.setState(Object(u.a)(Object(u.a)({},e.state),{},{editMode:!1}))},e.onBlur=function(t){e.setState(Object(u.a)(Object(u.a)({},e.state),{},{editMode:!0})),e.props.updateStatus(t.currentTarget.value)},e.onChange=function(t){e.setState(Object(u.a)(Object(u.a)({},e.state),{},{status:t.currentTarget.value}))},e.onEnter=function(t){"Enter"===t.key&&(e.setState(Object(u.a)(Object(u.a)({},e.state),{},{editMode:!0,value:t.currentTarget.value})),e.props.updateStatus(t.currentTarget.value))},e}return Object(xe.a)(s,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(H.jsx)("div",{children:this.state.editMode?Object(H.jsx)("span",{onDoubleClick:this.onDoubleClick,onTouchStart:this.onDoubleClick,children:this.props.status?this.props.status:"hey"}):Object(H.jsx)("input",{type:"text",onBlur:this.onBlur,value:this.state.status,autoFocus:!0,onChange:this.onChange,onKeyPress:this.onEnter})})}}]),s}(c.a.Component),Re=function(e){var t=e.profile,s=e.status,n=e.updateStatus;return t?Object(H.jsx)("div",{children:Object(H.jsxs)("div",{className:De.a.content,children:[Object(H.jsx)("img",{src:t.photos.small?t.photos.small:Ee,alt:""}),Object(H.jsx)(ke,{status:s,updateStatus:n}),Object(H.jsxs)("div",{children:[" ",t.fullName," "]}),Object(H.jsxs)("div",{children:[" ",t.aboutMe," "]}),Object(H.jsxs)("ul",{children:[Object(H.jsx)("li",{children:t.contacts.facebook?"Facebook: ".concat(t.contacts.facebook):""}),Object(H.jsx)("li",{children:t.contacts.website}),Object(H.jsx)("li",{children:t.contacts.vk}),Object(H.jsx)("li",{children:t.contacts.twitter}),Object(H.jsx)("li",{children:t.contacts.instagram}),Object(H.jsx)("li",{children:t.contacts.youtube}),Object(H.jsx)("li",{children:t.contacts.github}),Object(H.jsx)("li",{children:t.contacts.mainLink})]}),Object(H.jsx)("div",{children:t.lookingForAJobDescription})]})}):Object(H.jsx)(we,{})},Le=s(31),Ge=s.n(Le),Me=s(47),He=s.n(Me),Be=function(e){return Object(H.jsxs)("div",{className:He.a.post,children:[Object(H.jsx)("img",{className:He.a.avatar,src:"https://image.freepik.com/free-vector/cute-avocado-cartoon-icon_138676-1820.jpg",alt:"ss"}),Object(H.jsx)("div",{className:He.a.message,children:e.message}),Object(H.jsxs)("div",{className:He.a.like,children:[Object(H.jsx)("button",{children:"+"}),e.likeCount]})]})},We=je(10),ze=Object(ae.a)({form:"dialogsAddMessageForm"})((function(e){return Object(H.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(H.jsx)(ce.a,{className:Ge.a.createPostArea,component:ue,name:"newPostText",placeholder:"enter message",validate:[de,We]}),Object(H.jsx)("button",{className:Ge.a.createPostBtn,children:"Create new Post"})]})})),Ke=function(e){var t=e.posts.map((function(e){return Object(H.jsx)(Be,{id:e.id,message:e.message,likeCount:e.likeCount},e.id)}));return Object(H.jsxs)("div",{className:Ge.a.posts,children:[Object(H.jsxs)("div",{className:Ge.a.createPost,children:[Object(H.jsx)("div",{className:Ge.a.createPostTitle,children:"My posts"}),Object(H.jsx)(ze,{onSubmit:function(t){e.addPost(t.newPostText)}})]}),t]})},qe=Object(he.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD_POST",newPostText:e}}(t))}}}))(Ke),Je=function(e){var t=e.profile,s=e.status,n=e.updateStatus;return Object(H.jsxs)("div",{className:Ie.a.profile,children:[Object(H.jsx)(Re,{profile:t,status:s,updateStatus:n}),Object(H.jsx)(qe,{})]})},Ve=function(e){Object(ve.a)(s,e);var t=Object(Se.a)(s);function s(){return Object(_e.a)(this,s),t.apply(this,arguments)}return Object(xe.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="17798"),this.props.setUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return Object(H.jsx)("div",{children:Object(H.jsx)(Je,Object(u.a)(Object(u.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateUserStatus}))})}}]),s}(c.a.Component),Ze=Object(o.compose)(Object(he.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{setUserProfile:function(e){return function(t){O(e).then((function(e){t({type:"SET_USERS_PROFILE",profile:e.data})}))}},updateUserStatus:function(e){return function(t){h.updateUserStatus(e).then((function(s){0===s.data.resultCode&&t(m(e))}))}},getUserStatus:function(e){return function(t){h.getUserStatus(e).then((function(e){t(m(e.data))}))}}}),q.g)(Ve),Qe=s(79),Ye=s.n(Qe),Xe=function(e){var t=e.login,s=e.isAuth;return Object(H.jsxs)("header",{className:Ye.a.header,children:[Object(H.jsx)("img",{src:"https://i1.u-mama.ru/111/87b/b3d/3f034929b4556f4a747ca0fd40c29f08.jpg",alt:"animated-boy"}),Object(H.jsx)("div",{className:Ye.a.loginBlock,children:s?t:Object(H.jsx)(q.a,{children:Object(H.jsx)(L.b,{to:"/login",children:"Login"})})})]})},$e=function(e){Object(ve.a)(s,e);var t=Object(Se.a)(s);function s(){return Object(_e.a)(this,s),t.apply(this,arguments)}return Object(xe.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(H.jsx)(Xe,Object(u.a)({},this.props))}}]),s}(c.a.Component),et=Object(he.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){p().then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.userId,a=s.email,c=s.login;e(function(e,t,s){return{type:"SET_USER_DATA",data:{userId:e,email:t,login:s}}}(n,a,c))}}))}}})($e),tt=Object(ae.a)({form:"login"})((function(e){return Object(H.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(H.jsx)(ce.a,{placeholder:"Login",component:le,name:"login",validate:[de]}),Object(H.jsx)(ce.a,{placeholder:"password",component:le,name:"password",validate:[de]}),Object(H.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(H.jsx)(ce.a,{type:"checkbox",component:"input",name:"rememberMe"}),Object(H.jsx)("label",{htmlFor:"{'rememberMe'}",children:"remember me"})]}),Object(H.jsx)("button",{children:"Login"})]})})),st=s(80),nt=s.n(st),at=function(){return Object(H.jsx)("div",{className:nt.a.loginPage,children:Object(H.jsx)("div",{className:nt.a.loginForm,children:Object(H.jsx)(tt,{})})})},ct=function(){return Object(H.jsxs)("div",{className:"App",children:[Object(H.jsx)(et,{}),Object(H.jsx)(B,{}),Object(H.jsxs)("div",{className:"App-wrapper-content",children:[Object(H.jsx)(q.c,{path:"/profile/:userId?",render:function(){return Object(H.jsx)(Ze,{})}}),Object(H.jsx)(q.c,{path:"/dialogs",render:function(){return Object(H.jsx)(me,{})}}),Object(H.jsx)(q.c,{path:"/users",render:function(){return Object(H.jsx)(ye,{})}}),Object(H.jsx)(q.c,{path:"/login",render:function(){return Object(H.jsx)(at,{})}}),Object(H.jsx)(q.c,{path:"/news",component:Z}),Object(H.jsx)(q.c,{path:"/music",component:Q}),Object(H.jsx)(q.c,{path:"/settings",component:Y})]}),Object(H.jsx)(K,{})]})};R.a.render(Object(H.jsx)(c.a.StrictMode,{children:Object(H.jsx)(L.a,{children:Object(H.jsx)(he.a,{store:D,children:Object(H.jsx)(ct,{})})})}),document.getElementById("root")),r()},27:function(e,t,s){e.exports={grid:"DialogItem_grid__cimMD",dialog:"DialogItem_dialog__-gwuU",dialogUsername:"DialogItem_dialogUsername__2Wdhe",active:"DialogItem_active__1ypez",dialogAvatar:"DialogItem_dialogAvatar__2yo0F",dialogText:"DialogItem_dialogText__hea5r"}},30:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__NGOkO",dialogsHeader:"Dialogs_dialogsHeader__3a2W5",dialogItems:"Dialogs_dialogItems__3Ri9H",messages:"Dialogs_messages__1u87f",message:"Dialogs_message__2zHqf"}},31:function(e,t,s){e.exports={posts:"MyPosts_posts__1I5jP",createPost:"MyPosts_createPost__2gifI",createPostTitle:"MyPosts_createPostTitle__wdmaw",createPostArea:"MyPosts_createPostArea__1yyUo",createPostBtn:"MyPosts_createPostBtn__1xF5q"}},32:function(e,t,s){e.exports={grid:"users_grid__33E5T",photo:"users_photo__3XtN5",follow:"users_follow__1wF7B",name:"users_name__12Lg8",status:"users_status__3UmQ9",country:"users_country__tRhhc",city:"users_city__mT0Zm",selected:"users_selected__37Vpm"}},46:function(e,t,s){e.exports={formControl:"FormsControl_formControl__2gvJ0",error:"FormsControl_error__3qwFS"}},47:function(e,t,s){e.exports={post:"Post_post__2jKTs",avatar:"Post_avatar__sVTKg",message:"Post_message__15MVK",like:"Post_like__2r9_N"}},76:function(e,t,s){e.exports={news:"News_news__Q92op",newsTitle:"News_newsTitle__2sD-C"}},79:function(e,t,s){e.exports={header:"Header_header__1qW2j",loginBlock:"Header_loginBlock__3rAmo"}},80:function(e,t,s){e.exports={loginPage:"loginPage_loginPage__j0Zjz",loginForm:"loginPage_loginForm__3o3tc"}}},[[247,1,2]]]);
//# sourceMappingURL=main.462a334f.chunk.js.map