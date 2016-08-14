"use strict";define("horses-and-chickens/app",["exports","ember","horses-and-chickens/resolver","ember-load-initializers","horses-and-chickens/config/environment"],function(e,n,t,a,r){var i=void 0;n.default.MODEL_FACTORY_INJECTIONS=!0,i=n.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default}),(0,a.default)(i,r.default.modulePrefix),e.default=i}),define("horses-and-chickens/components/app-version",["exports","ember-cli-app-version/components/app-version","horses-and-chickens/config/environment"],function(e,n,t){var a=t.default.APP.name,r=t.default.APP.version;e.default=n.default.extend({version:r,name:a})}),define("horses-and-chickens/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,n){e.default=n.default}),define("horses-and-chickens/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,n){e.default=n.default}),define("horses-and-chickens/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","horses-and-chickens/config/environment"],function(e,n,t){e.default={name:"App Version",initialize:(0,n.default)(t.default.APP.name,t.default.APP.version)}}),define("horses-and-chickens/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,n){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("horses-and-chickens/initializers/data-adapter",["exports","ember"],function(e,n){e.default={name:"data-adapter",before:"store",initialize:n.default.K}}),define("horses-and-chickens/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,n,t){e.default={name:"ember-data",initialize:n.default}}),define("horses-and-chickens/initializers/export-application-global",["exports","ember","horses-and-chickens/config/environment"],function(e,n,t){function a(){var e=arguments[1]||arguments[0];if(t.default.exportApplicationGlobal!==!1){var a,r=t.default.exportApplicationGlobal;a="string"==typeof r?r:n.default.String.classify(t.default.modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("horses-and-chickens/initializers/injectStore",["exports","ember"],function(e,n){e.default={name:"injectStore",before:"store",initialize:n.default.K}}),define("horses-and-chickens/initializers/store",["exports","ember"],function(e,n){e.default={name:"store",after:"ember-data",initialize:n.default.K}}),define("horses-and-chickens/initializers/transforms",["exports","ember"],function(e,n){e.default={name:"transforms",before:"store",initialize:n.default.K}}),define("horses-and-chickens/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,n){e.default={name:"ember-data",initialize:n.default}}),define("horses-and-chickens/models/model",["exports","ember"],function(e,n){var t=n.default.Object,a=n.default.computed;e.default=t.extend({horses:0,chickens:0,total:a("horses","chickens",function(){return this.get("horses")+this.get("chickens")})})}),define("horses-and-chickens/resolver",["exports","ember-resolver"],function(e,n){e.default=n.default}),define("horses-and-chickens/router",["exports","ember","horses-and-chickens/config/environment"],function(e,n,t){var a=n.default.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL});a.map(function(){this.route("v1")}),e.default=a}),define("horses-and-chickens/routes/application",["exports","ember","horses-and-chickens/models/model"],function(e,n,t){var a=n.default.Route;e.default=a.extend({model:function(){return t.default.create({horses:6,chickens:1})},actions:{refresh:function(){this.refresh()}}})}),define("horses-and-chickens/routes/v1",["exports","ember"],function(e,n){e.default=n.default.Route.extend({})}),define("horses-and-chickens/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("horses-and-chickens/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"horses-and-chickens/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createElement("div");e.setAttribute(t,"class","u-pad-5");var a=e.createTextNode("\n  ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(n,[0]),1,1),a},statements:[["content","outlet",["loc",[null,[2,2],[2,12]]],0,0,0,0]],locals:[],templates:[]}}())}),define("horses-and-chickens/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:6,column:6},end:{line:6,column:27}},moduleName:"horses-and-chickens/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("v1");return e.appendChild(n,t),n},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:1,column:0},end:{line:8,column:0}},moduleName:"horses-and-chickens/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createElement("h1"),a=e.createTextNode("Horses and Chickens");e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("p"),a=e.createTextNode("Versions:");e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("ul"),a=e.createTextNode("\n  ");e.appendChild(t,a);var a=e.createElement("li"),r=e.createComment("");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(n,[4,1]),0,0),a},statements:[["block","link-to",["v1"],[],0,null,["loc",[null,[6,6],[6,27]]]]],locals:[],templates:[e]}}())}),define("horses-and-chickens/templates/v1",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:1,column:0},end:{line:19,column:0}},moduleName:"horses-and-chickens/templates/v1.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createElement("div");e.setAttribute(t,"class","flex");var a=e.createTextNode("\n  ");e.appendChild(t,a);var a=e.createElement("label"),r=e.createTextNode("\n    Horses\n    ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n  ");e.appendChild(t,a);var a=e.createElement("label"),r=e.createTextNode("\n    Chickens\n    ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n  ");e.appendChild(t,a);var a=e.createElement("label"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("strong"),i=e.createTextNode("Total");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n\n  ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","flex__block"),e.appendChild(t,a);var a=e.createTextNode("\n\n  ");e.appendChild(t,a);var a=e.createElement("button"),r=e.createTextNode("Reset");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var a=e.childAt(n,[0]),r=e.childAt(a,[9]),i=new Array(4);return i[0]=e.createMorphAt(e.childAt(a,[1]),1,1),i[1]=e.createMorphAt(e.childAt(a,[3]),1,1),i[2]=e.createMorphAt(e.childAt(a,[5]),3,3),i[3]=e.createElementMorph(r),i},statements:[["inline","input",[],["type","number","value",["subexpr","@mut",[["get","model.horses",["loc",[null,[4,32],[4,44]]],0,0,0,0]],[],[],0,0],"min",0],["loc",[null,[4,4],[4,52]]],0,0],["inline","input",[],["type","number","value",["subexpr","@mut",[["get","model.chickens",["loc",[null,[8,32],[8,46]]],0,0,0,0]],[],[],0,0],"min",0],["loc",[null,[8,4],[8,54]]],0,0],["inline","input",[],["type","number","value",["subexpr","@mut",[["get","model.total",["loc",[null,[12,32],[12,43]]],0,0,0,0]],[],[],0,0],"disabled",!0],["loc",[null,[12,4],[12,59]]],0,0],["element","action",["refresh"],[],["loc",[null,[17,10],[17,30]]],0,0]],locals:[],templates:[]}}())}),define("horses-and-chickens/config/environment",["ember"],function(e){var n="horses-and-chickens";try{var t=n+"/config/environment",a=e.default.$('meta[name="'+t+'"]').attr("content"),r=JSON.parse(unescape(a));return{default:r}}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("horses-and-chickens/app").default.create({name:"horses-and-chickens",version:"0.0.0+06b18c63"});