(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[5],{168:function(e,t,n){"use strict";(function(e,i){var a=n(4),r=n.n(a),o=n(14),c=n.n(o),l=n(6),u=n.n(l),s=n(7),d=n.n(s),m=n(23),p=n.n(m),f=n(8),g=n.n(f),h=n(9),y=n.n(h),v=n(3),_=n.n(v),k=n(1),E=n(0),b=n(11),R=n.n(b),S=n(5),M=n(106),N=n(45),C=n(169),D=n(114),O=n(31),w=n(20);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=_()(e);if(t){var a=_()(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return y()(this,n)}}var U=R.a.withSelect,x=function(t){g()(UserMenu,t);var n,a=j(UserMenu);function UserMenu(e){var t;return u()(this,UserMenu),(t=a.call(this,e)).state={dialogActive:!1,menuOpen:!1},t.handleMenu=t.handleMenu.bind(p()(t)),t.handleMenuClose=t.handleMenuClose.bind(p()(t)),t.handleMenuItemSelect=t.handleMenuItemSelect.bind(p()(t)),t.handleDialog=t.handleDialog.bind(p()(t)),t.handleDialogClose=t.handleDialogClose.bind(p()(t)),t.handleUnlinkConfirm=t.handleUnlinkConfirm.bind(p()(t)),t.menuButtonRef=Object(k.h)(),t.menuRef=Object(k.h)(),t}return d()(UserMenu,[{key:"componentDidMount",value:function(){e.addEventListener("mouseup",this.handleMenuClose),e.addEventListener("keyup",this.handleMenuClose),e.addEventListener("keyup",this.handleDialogClose)}},{key:"componentWillUnmount",value:function(){e.removeEventListener("mouseup",this.handleMenuClose),e.removeEventListener("keyup",this.handleMenuClose),e.removeEventListener("keyup",this.handleDialogClose)}},{key:"handleMenu",value:function(){var e=this.state.menuOpen;this.setState({menuOpen:!e})}},{key:"handleMenuClose",value:function(e){("keyup"!==e.type||27!==e.keyCode)&&"mouseup"!==e.type||this.menuButtonRef.current.buttonRef.current.contains(e.target)||this.menuRef.current.menuRef.current.contains(e.target)||this.setState({menuOpen:!1})}},{key:"handleMenuItemSelect",value:function(t,n){var i=this.props.proxyPermissionsURL;if("keydown"===n.type&&(13===n.keyCode||32===n.keyCode)||"click"===n.type)switch(t){case 0:this.handleDialog();break;case 1:if(!i)return;e.location.assign(i);break;default:this.handleMenu()}}},{key:"handleDialog",value:function(){this.setState((function(e){return{dialogActive:!e.dialogActive,menuOpen:!1}}))}},{key:"handleDialogClose",value:function(e){27===e.keyCode&&this.setState({dialogActive:!1,menuOpen:!1})}},{key:"handleUnlinkConfirm",value:(n=c()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({dialogActive:!1}),Object(S.d)(),document.location=Object(S.m)("googlesitekit-splash",{googlesitekit_context:"revoked"});case 3:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.proxyPermissionsURL,n=e.userEmail,a=e.userPicture,r=this.state,o=r.dialogActive,c=r.menuOpen;return n?i.createElement(k.b,null,i.createElement("div",{className:"googlesitekit-dropdown-menu mdc-menu-surface--anchor"},i.createElement(N.a,{ref:this.menuButtonRef,className:"googlesitekit-header__dropdown mdc-button--dropdown",text:!0,onClick:this.handleMenu,icon:a?i.createElement("i",{className:"mdc-button__icon","aria-hidden":"true"},i.createElement("img",{className:"mdc-button__icon--image",src:a,alt:Object(E.__)("User Avatar","google-site-kit")})):void 0,ariaHaspopup:"menu",ariaExpanded:c,ariaControls:"user-menu"},n),i.createElement(C.a,{ref:this.menuRef,menuOpen:c,menuItems:[Object(E.__)("Disconnect","google-site-kit")].concat(t?[Object(E.__)("Manage sites…","google-site-kit")]:[]),onSelected:this.handleMenuItemSelect,id:"user-menu"})),i.createElement(D.a,null,i.createElement(M.a,{dialogActive:o,handleConfirm:this.handleUnlinkConfirm,handleDialog:this.handleDialog,title:Object(E.__)("Disconnect","google-site-kit"),subtitle:Object(E.__)("Disconnecting Site Kit by Google will remove your access to all services. After disconnecting, you will need to re-authorize to restore service.","google-site-kit"),confirmButton:Object(E.__)("Disconnect","google-site-kit"),provides:[],danger:!0}))):null}}]),UserMenu}(k.a);t.a=U((function(e){return{proxyPermissionsURL:e(O.c).getProxyPermissionsURL(),userEmail:e(w.c).getEmail(),userPicture:e(w.c).getPicture()}}))(x)}).call(this,n(15),n(10))},169:function(e,t,n){"use strict";(function(e){var i=n(6),a=n.n(i),r=n(7),o=n.n(r),c=n(8),l=n.n(c),u=n(9),s=n.n(u),d=n(3),m=n.n(d),p=n(1),f=n(2),g=n.n(f),h=n(42);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=m()(e);if(t){var a=m()(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return s()(this,n)}}var v=function(t){l()(Menu,t);var n=y(Menu);function Menu(e){var t;return a()(this,Menu),(t=n.call(this,e)).menuRef=Object(p.h)(),t}return o()(Menu,[{key:"componentDidMount",value:function(){var e=this.props.menuOpen;this.menu=new h.f(this.menuRef.current),this.menu.open=e,this.menu.setDefaultFocusState(1)}},{key:"componentDidUpdate",value:function(e){var t=this.props.menuOpen;t!==e.menuOpen&&(this.menu.open=t)}},{key:"render",value:function(){var t=this.props,n=t.menuOpen,i=t.menuItems,a=t.onSelected,r=t.id;return e.createElement("div",{className:"mdc-menu mdc-menu-surface",ref:this.menuRef},e.createElement("ul",{id:r,className:"mdc-list",role:"menu","aria-hidden":!n,"aria-orientation":"vertical",tabIndex:"-1"},i.map((function(t,n){return e.createElement("li",{key:n,className:"mdc-list-item",role:"menuitem",onClick:a.bind(null,n),onKeyDown:a.bind(null,n)},e.createElement("span",{className:"mdc-list-item__text"},t))}))))}}]),Menu}(p.a);v.propTypes={menuOpen:g.a.bool.isRequired,menuItems:g.a.array.isRequired,id:g.a.string.isRequired},t.a=v}).call(this,n(10))},170:function(e,t,n){"use strict";var i=n(6),a=n.n(i),r=n(7),o=n.n(r),c=n(8),l=n.n(c),u=n(9),s=n.n(u),d=n(3),m=n.n(d),p=n(87);function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=m()(e);if(t){var a=m()(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return s()(this,n)}}var g=function(e){l()(ErrorNotification,e);var t=f(ErrorNotification);function ErrorNotification(){return a()(this,ErrorNotification),t.apply(this,arguments)}return o()(ErrorNotification,[{key:"render",value:function(){return null}}]),ErrorNotification}(n(1).a);t.a=Object(p.a)("googlesitekit.ErrorNotification")(g)},31:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var i="core/site",a="primary",r="secondary"},310:function(e,t,n){"use strict";n.r(t),function(e,i){var a=n(6),r=n.n(a),o=n(7),c=n.n(o),l=n(8),u=n.n(l),s=n(9),d=n.n(s),m=n(3),p=n.n(m),f=n(1),g=n(16),h=n(87),y=n(0),v=n(96),_=n(25),k=n(95),E=n(5);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p()(e);if(t){var a=p()(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return d()(this,n)}}var R=function(t){u()(BaseComponent,t);var n=b(BaseComponent);function BaseComponent(){return r()(this,BaseComponent),n.apply(this,arguments)}return c()(BaseComponent,[{key:"render",value:function(){var t=this.props.children;return e.createElement(f.b,null,t)}}]),BaseComponent}(f.a),S=function(t){u()(SetupWrapper,t);var n=b(SetupWrapper);function SetupWrapper(e){var t;r()(this,SetupWrapper),t=n.call(this,e);var a=i._googlesitekitLegacyData.setup.moduleToSetup;return t.state={currentModule:a},t}return c()(SetupWrapper,[{key:"render",value:function(){var t=this.state.currentModule,n=SetupWrapper.loadSetupModule(t),i=Object(E.m)("googlesitekit-settings",{});return e.createElement(f.b,null,e.createElement(v.a,null),e.createElement("div",{className:"googlesitekit-setup"},e.createElement("div",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},e.createElement("section",{className:"googlesitekit-setup__wrapper"},e.createElement("div",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},e.createElement("p",{className:" googlesitekit-setup__intro-title googlesitekit-overline "},Object(y.__)("Connect Service","google-site-kit")),n))),e.createElement("div",{className:"googlesitekit-setup__footer"},e.createElement("div",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop "},e.createElement(_.a,{id:"setup-".concat(t,"-cancel"),href:i},Object(y.__)("Cancel","google-site-kit"))),e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--align-right "},e.createElement(k.a,null)))))))))))}}],[{key:"loadSetupModule",value:function(t){var n=Object(h.a)("googlesitekit.ModuleSetup-".concat(t))(R);return e.createElement(n,{finishSetup:SetupWrapper.finishSetup,onSettingsPage:!1,isEditing:!0})}},{key:"finishSetup",value:function(){var e={notification:"authentication_success"};i._googlesitekitLegacyData.setup&&i._googlesitekitLegacyData.setup.moduleToSetup&&(e.slug=i._googlesitekitLegacyData.setup.moduleToSetup);var t=Object(E.m)("googlesitekit-dashboard",e);Object(g.delay)((function(){i.location.replace(t)}),500,"later")}}]),SetupWrapper}(f.a);t.default=S}.call(this,n(10),n(15))},95:function(e,t,n){"use strict";(function(e){n(1);var i=n(0),a=n(25);t.a=function HelpLink(){var t=Object(i.__)("Need help?","google-site-kit");return e.createElement(a.a,{className:"googlesitekit-help-link",href:"https://sitekit.withgoogle.com/documentation/",external:!0},t)}}).call(this,n(10))},96:function(e,t,n){"use strict";(function(e){var i=n(1),a=n(11),r=n.n(a),o=n(144),c=n(168),l=n(170),u=n(20),s=r.a.useSelect;t.a=function Header(){var t=s((function(e){return e(u.c).isAuthenticated()}));return e.createElement(i.b,null,e.createElement("header",{className:"googlesitekit-header"},e.createElement("section",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--align-middle mdc-layout-grid__cell--span-3-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop "},e.createElement(o.a,null)),e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--align-middle mdc-layout-grid__cell--align-right-phone mdc-layout-grid__cell--span-1-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop "},t&&e.createElement(c.a,null))))),e.createElement(l.a,null))}}).call(this,n(10))}}]);