(this["webpackJsonpbc12-react-hw-03-image-finder"]=this["webpackJsonpbc12-react-hw-03-image-finder"]||[]).push([[0],{14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__17RCK",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1wjta"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3antE"}},27:function(e,t,a){e.exports={loader:"Loader_loader__2m_6L"}},28:function(e,t,a){e.exports={Button:"Button_Button__3wckd"}},29:function(e,t,a){e.exports={app:"App_app__1bXcb"}},34:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(12),o=a.n(c),l=(a(34),a(15)),s=a(4),i=a(5),u=a(7),h=a(6),m=a(24),d=a.n(m),p={fetchHits:function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n;return d.a.get("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(r,"&key=").concat("20731872-71a610166f6b50a9cc8e22574","&image_type=photo&orientation=horizontal&per_page=").concat(12)).then((function(e){return e.data.hits}))}},b=a(8),g=a.n(b),j=a(0),f=document.querySelector("#modal-root"),_=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onEscPress=function(t){"Escape"===t.code&&(console.log("Escape"),e.props.onClose())},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEscPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEscPress)}},{key:"render",value:function(){var e=this.props,t=e.onClose,a=(e.icon,e.title,e.children);return Object(c.createPortal)(Object(j.jsx)("div",{className:g.a.backdrop,onClick:this.handleBackdropClick,children:Object(j.jsxs)("div",{className:g.a.modal,children:[Object(j.jsx)("header",{className:g.a.header,children:Object(j.jsx)("button",{type:"button",className:g.a.closeBtn,onClick:t,"aria-label":"Close",children:"\xd7"})}),Object(j.jsx)("div",{className:g.a.content,children:a})]})}),f)}}]),a}(n.Component),y=_,O=a(14),S=a.n(O),I=function(e){var t=e.smallImage,a=e.largeImage,n=e.onClick,r=e.tags;return Object(j.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(j.jsx)("img",{onClick:function(){return n(a)},src:t,alt:r,className:S.a.ImageGalleryItemImage})})},v=a(25),x=a.n(v),k=function(e){var t=e.hits,a=e.onClick;return Object(j.jsx)("ul",{className:x.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(j.jsx)(I,{smallImage:n,largeImage:r,alt:c,onClick:a},t)}))})},C=a(26),w=a.n(C),M=a(27),B=a.n(M),N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)(w.a,{className:B.a.loader,type:"ThreeDots",color:"#3f51b5",height:120,width:120,timeout:3e3})}}]),a}(n.Component),L=N,F=a(9),Q=a.n(F),G=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleChange=function(t){e.setState({searchQuery:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:Q.a.Searchbar,children:Object(j.jsxs)("form",{className:Q.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:Q.a.SearchFormButton,children:Object(j.jsx)("span",{className:Q.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:Q.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleChange})]})})}}]),a}(n.Component),P=G,E=a(28),A=a.n(E),D=function(e){var t=e.onClick;return Object(j.jsx)("button",{type:"button",className:A.a.Button,onClick:t,children:Object(j.jsx)("span",{children:"Loade more"})})},U=a(29),R=a.n(U),T="none",q="open",H=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={openedModal:T,hits:[],currentPage:1,searchQuery:"",largeImage:"",isLoading:!1,smallImage:"",alt:""},e.getDataApi=function(){var t=e.state,a={currentPage:t.currentPage,searchQuery:t.searchQuery};e.setState({isLoading:!0}),p.fetchHits(a).then((function(t){e.setState((function(e){return{hits:[].concat(Object(l.a)(e.hits),Object(l.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e.handleSearch=function(t){e.setState({searchQuery:t,currentPage:1,hits:[]})},e.openModal=function(t){return e.setState({openedModal:q,largeImage:t})},e.closeModal=function(){return e.setState({openedModal:T})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.getDataApi()}},{key:"render",value:function(){var e=this.state,t=e.openedModal,a=e.isLoading,n=e.hits,r=(e.smallImage,e.alt,n.length>0&&!a);return Object(j.jsxs)("div",{className:R.a.app,children:[Object(j.jsx)(P,{onSubmit:this.handleSearch}),n.length>0&&Object(j.jsx)(k,{hits:n,onClick:this.openModal}),a&&Object(j.jsx)(L,{}),r&&Object(j.jsx)(D,{onClick:this.getDataApi}),t===q&&Object(j.jsx)(y,{onClose:this.closeModal,children:Object(j.jsx)(I,{onClick:this.openModal,smallImage:n.webformatURL,largeImage:n.largeImageURL,alt:n.tags})})]})}}]),a}(n.Component),W=H;o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(W,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={backdrop:"Modal_backdrop__1pYM-",modal:"Modal_modal__h2CnA",header:"Modal_header__1u-k1",closeBtn:"Modal_closeBtn__drpQo",content:"Modal_content__3XVSN",lead:"Modal_lead__12rxE",imageWrapper:"Modal_imageWrapper__-MPy4"}},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3Tfpq",SearchForm:"Searchbar_SearchForm__1CfZf",SearchFormButton:"Searchbar_SearchFormButton__3Bkpa",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1eOlt",SearchFormInput:"Searchbar_SearchFormInput__3In_f"}}},[[74,1,2]]]);
//# sourceMappingURL=main.2f215ba4.chunk.js.map