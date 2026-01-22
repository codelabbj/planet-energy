(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function s(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(u){if(u.ep)return;u.ep=!0;const d=s(u);fetch(u.href,d)}})();function p0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var eu={exports:{}},jl={};var Bp;function Pb(){if(Bp)return jl;Bp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(o,u,d){var h=null;if(d!==void 0&&(h=""+d),u.key!==void 0&&(h=""+u.key),"key"in u){d={};for(var p in u)p!=="key"&&(d[p]=u[p])}else d=u;return u=d.ref,{$$typeof:n,type:o,key:h,ref:u!==void 0?u:null,props:d}}return jl.Fragment=i,jl.jsx=s,jl.jsxs=s,jl}var Up;function Fb(){return Up||(Up=1,eu.exports=Pb()),eu.exports}var f=Fb(),tu={exports:{}},ae={};var kp;function Jb(){if(kp)return ae;kp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function N(A){return A===null||typeof A!="object"?null:(A=S&&A[S]||A["@@iterator"],typeof A=="function"?A:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,R={};function _(A,Y,Q){this.props=A,this.context=Y,this.refs=R,this.updater=Q||O}_.prototype.isReactComponent={},_.prototype.setState=function(A,Y){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,Y,"setState")},_.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function H(){}H.prototype=_.prototype;function U(A,Y,Q){this.props=A,this.context=Y,this.refs=R,this.updater=Q||O}var J=U.prototype=new H;J.constructor=U,L(J,_.prototype),J.isPureReactComponent=!0;var X=Array.isArray;function te(){}var Z={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function oe(A,Y,Q){var I=Q.ref;return{$$typeof:n,type:A,key:Y,ref:I!==void 0?I:null,props:Q}}function be(A,Y){return oe(A.type,Y,A.props)}function qe(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function Qe(A){var Y={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(Q){return Y[Q]})}var on=/\/+/g;function Dt(A,Y){return typeof A=="object"&&A!==null&&A.key!=null?Qe(""+A.key):Y.toString(36)}function dt(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(te,te):(A.status="pending",A.then(function(Y){A.status==="pending"&&(A.status="fulfilled",A.value=Y)},function(Y){A.status==="pending"&&(A.status="rejected",A.reason=Y)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function B(A,Y,Q,I,ie){var re=typeof A;(re==="undefined"||re==="boolean")&&(A=null);var xe=!1;if(A===null)xe=!0;else switch(re){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(A.$$typeof){case n:case i:xe=!0;break;case v:return xe=A._init,B(xe(A._payload),Y,Q,I,ie)}}if(xe)return ie=ie(A),xe=I===""?"."+Dt(A,0):I,X(ie)?(Q="",xe!=null&&(Q=xe.replace(on,"$&/")+"/"),B(ie,Y,Q,"",function(Mi){return Mi})):ie!=null&&(qe(ie)&&(ie=be(ie,Q+(ie.key==null||A&&A.key===ie.key?"":(""+ie.key).replace(on,"$&/")+"/")+xe)),Y.push(ie)),1;xe=0;var rt=I===""?".":I+":";if(X(A))for(var Be=0;Be<A.length;Be++)I=A[Be],re=rt+Dt(I,Be),xe+=B(I,Y,Q,re,ie);else if(Be=N(A),typeof Be=="function")for(A=Be.call(A),Be=0;!(I=A.next()).done;)I=I.value,re=rt+Dt(I,Be++),xe+=B(I,Y,Q,re,ie);else if(re==="object"){if(typeof A.then=="function")return B(dt(A),Y,Q,I,ie);throw Y=String(A),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return xe}function G(A,Y,Q){if(A==null)return A;var I=[],ie=0;return B(A,I,"","",function(re){return Y.call(Q,re,ie++)}),I}function $(A){if(A._status===-1){var Y=A._result;Y=Y(),Y.then(function(Q){(A._status===0||A._status===-1)&&(A._status=1,A._result=Q)},function(Q){(A._status===0||A._status===-1)&&(A._status=2,A._result=Q)}),A._status===-1&&(A._status=0,A._result=Y)}if(A._status===1)return A._result.default;throw A._result}var fe=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},pe={map:G,forEach:function(A,Y,Q){G(A,function(){Y.apply(this,arguments)},Q)},count:function(A){var Y=0;return G(A,function(){Y++}),Y},toArray:function(A){return G(A,function(Y){return Y})||[]},only:function(A){if(!qe(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ae.Activity=x,ae.Children=pe,ae.Component=_,ae.Fragment=s,ae.Profiler=u,ae.PureComponent=U,ae.StrictMode=o,ae.Suspense=g,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,ae.__COMPILER_RUNTIME={__proto__:null,c:function(A){return Z.H.useMemoCache(A)}},ae.cache=function(A){return function(){return A.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(A,Y,Q){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var I=L({},A.props),ie=A.key;if(Y!=null)for(re in Y.key!==void 0&&(ie=""+Y.key),Y)!K.call(Y,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&Y.ref===void 0||(I[re]=Y[re]);var re=arguments.length-2;if(re===1)I.children=Q;else if(1<re){for(var xe=Array(re),rt=0;rt<re;rt++)xe[rt]=arguments[rt+2];I.children=xe}return oe(A.type,ie,I)},ae.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:d,_context:A},A},ae.createElement=function(A,Y,Q){var I,ie={},re=null;if(Y!=null)for(I in Y.key!==void 0&&(re=""+Y.key),Y)K.call(Y,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(ie[I]=Y[I]);var xe=arguments.length-2;if(xe===1)ie.children=Q;else if(1<xe){for(var rt=Array(xe),Be=0;Be<xe;Be++)rt[Be]=arguments[Be+2];ie.children=rt}if(A&&A.defaultProps)for(I in xe=A.defaultProps,xe)ie[I]===void 0&&(ie[I]=xe[I]);return oe(A,re,ie)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(A){return{$$typeof:p,render:A}},ae.isValidElement=qe,ae.lazy=function(A){return{$$typeof:v,_payload:{_status:-1,_result:A},_init:$}},ae.memo=function(A,Y){return{$$typeof:y,type:A,compare:Y===void 0?null:Y}},ae.startTransition=function(A){var Y=Z.T,Q={};Z.T=Q;try{var I=A(),ie=Z.S;ie!==null&&ie(Q,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(te,fe)}catch(re){fe(re)}finally{Y!==null&&Q.types!==null&&(Y.types=Q.types),Z.T=Y}},ae.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},ae.use=function(A){return Z.H.use(A)},ae.useActionState=function(A,Y,Q){return Z.H.useActionState(A,Y,Q)},ae.useCallback=function(A,Y){return Z.H.useCallback(A,Y)},ae.useContext=function(A){return Z.H.useContext(A)},ae.useDebugValue=function(){},ae.useDeferredValue=function(A,Y){return Z.H.useDeferredValue(A,Y)},ae.useEffect=function(A,Y){return Z.H.useEffect(A,Y)},ae.useEffectEvent=function(A){return Z.H.useEffectEvent(A)},ae.useId=function(){return Z.H.useId()},ae.useImperativeHandle=function(A,Y,Q){return Z.H.useImperativeHandle(A,Y,Q)},ae.useInsertionEffect=function(A,Y){return Z.H.useInsertionEffect(A,Y)},ae.useLayoutEffect=function(A,Y){return Z.H.useLayoutEffect(A,Y)},ae.useMemo=function(A,Y){return Z.H.useMemo(A,Y)},ae.useOptimistic=function(A,Y){return Z.H.useOptimistic(A,Y)},ae.useReducer=function(A,Y,Q){return Z.H.useReducer(A,Y,Q)},ae.useRef=function(A){return Z.H.useRef(A)},ae.useState=function(A){return Z.H.useState(A)},ae.useSyncExternalStore=function(A,Y,Q){return Z.H.useSyncExternalStore(A,Y,Q)},ae.useTransition=function(){return Z.H.useTransition()},ae.version="19.2.3",ae}var Hp;function Fu(){return Hp||(Hp=1,tu.exports=Jb()),tu.exports}var T=Fu();const g0=p0(T);var nu={exports:{}},Tl={},au={exports:{}},iu={};var qp;function Ib(){return qp||(qp=1,(function(n){function i(B,G){var $=B.length;B.push(G);e:for(;0<$;){var fe=$-1>>>1,pe=B[fe];if(0<u(pe,G))B[fe]=G,B[$]=pe,$=fe;else break e}}function s(B){return B.length===0?null:B[0]}function o(B){if(B.length===0)return null;var G=B[0],$=B.pop();if($!==G){B[0]=$;e:for(var fe=0,pe=B.length,A=pe>>>1;fe<A;){var Y=2*(fe+1)-1,Q=B[Y],I=Y+1,ie=B[I];if(0>u(Q,$))I<pe&&0>u(ie,Q)?(B[fe]=ie,B[I]=$,fe=I):(B[fe]=Q,B[Y]=$,fe=Y);else if(I<pe&&0>u(ie,$))B[fe]=ie,B[I]=$,fe=I;else break e}}return G}function u(B,G){var $=B.sortIndex-G.sortIndex;return $!==0?$:B.id-G.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var h=Date,p=h.now();n.unstable_now=function(){return h.now()-p}}var g=[],y=[],v=1,x=null,S=3,N=!1,O=!1,L=!1,R=!1,_=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function J(B){for(var G=s(y);G!==null;){if(G.callback===null)o(y);else if(G.startTime<=B)o(y),G.sortIndex=G.expirationTime,i(g,G);else break;G=s(y)}}function X(B){if(L=!1,J(B),!O)if(s(g)!==null)O=!0,te||(te=!0,Qe());else{var G=s(y);G!==null&&dt(X,G.startTime-B)}}var te=!1,Z=-1,K=5,oe=-1;function be(){return R?!0:!(n.unstable_now()-oe<K)}function qe(){if(R=!1,te){var B=n.unstable_now();oe=B;var G=!0;try{e:{O=!1,L&&(L=!1,H(Z),Z=-1),N=!0;var $=S;try{t:{for(J(B),x=s(g);x!==null&&!(x.expirationTime>B&&be());){var fe=x.callback;if(typeof fe=="function"){x.callback=null,S=x.priorityLevel;var pe=fe(x.expirationTime<=B);if(B=n.unstable_now(),typeof pe=="function"){x.callback=pe,J(B),G=!0;break t}x===s(g)&&o(g),J(B)}else o(g);x=s(g)}if(x!==null)G=!0;else{var A=s(y);A!==null&&dt(X,A.startTime-B),G=!1}}break e}finally{x=null,S=$,N=!1}G=void 0}}finally{G?Qe():te=!1}}}var Qe;if(typeof U=="function")Qe=function(){U(qe)};else if(typeof MessageChannel<"u"){var on=new MessageChannel,Dt=on.port2;on.port1.onmessage=qe,Qe=function(){Dt.postMessage(null)}}else Qe=function(){_(qe,0)};function dt(B,G){Z=_(function(){B(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(B){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var $=S;S=G;try{return B()}finally{S=$}},n.unstable_requestPaint=function(){R=!0},n.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=S;S=B;try{return G()}finally{S=$}},n.unstable_scheduleCallback=function(B,G,$){var fe=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?fe+$:fe):$=fe,B){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=$+pe,B={id:v++,callback:G,priorityLevel:B,startTime:$,expirationTime:pe,sortIndex:-1},$>fe?(B.sortIndex=$,i(y,B),s(g)===null&&B===s(y)&&(L?(H(Z),Z=-1):L=!0,dt(X,$-fe))):(B.sortIndex=pe,i(g,B),O||N||(O=!0,te||(te=!0,Qe()))),B},n.unstable_shouldYield=be,n.unstable_wrapCallback=function(B){var G=S;return function(){var $=S;S=G;try{return B.apply(this,arguments)}finally{S=$}}}})(iu)),iu}var Yp;function $b(){return Yp||(Yp=1,au.exports=Ib()),au.exports}var lu={exports:{}},st={};var Gp;function Wb(){if(Gp)return st;Gp=1;var n=Fu();function i(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)y+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(g,y,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:x==null?null:""+x,children:g,containerInfo:y,implementation:v}}var h=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,st.createPortal=function(g,y){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return d(g,y,null,v)},st.flushSync=function(g){var y=h.T,v=o.p;try{if(h.T=null,o.p=2,g)return g()}finally{h.T=y,o.p=v,o.d.f()}},st.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,o.d.C(g,y))},st.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},st.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var v=y.as,x=p(v,y.crossOrigin),S=typeof y.integrity=="string"?y.integrity:void 0,N=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;v==="style"?o.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:N}):v==="script"&&o.d.X(g,{crossOrigin:x,integrity:S,fetchPriority:N,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},st.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var v=p(y.as,y.crossOrigin);o.d.M(g,{crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&o.d.M(g)},st.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var v=y.as,x=p(v,y.crossOrigin);o.d.L(g,v,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},st.preloadModule=function(g,y){if(typeof g=="string")if(y){var v=p(y.as,y.crossOrigin);o.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else o.d.m(g)},st.requestFormReset=function(g){o.d.r(g)},st.unstable_batchedUpdates=function(g,y){return g(y)},st.useFormState=function(g,y,v){return h.H.useFormState(g,y,v)},st.useFormStatus=function(){return h.H.useHostTransitionStatus()},st.version="19.2.3",st}var Xp;function e1(){if(Xp)return lu.exports;Xp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),lu.exports=Wb(),lu.exports}var Kp;function t1(){if(Kp)return Tl;Kp=1;var n=$b(),i=Fu(),s=e1();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(o(188))}function y(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var r=a.return;if(r===null)break;var c=r.alternate;if(c===null){if(l=r.return,l!==null){a=l;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===a)return g(r),e;if(c===l)return g(r),t;c=c.sibling}throw Error(o(188))}if(a.return!==l.return)a=r,l=c;else{for(var m=!1,b=r.child;b;){if(b===a){m=!0,a=r,l=c;break}if(b===l){m=!0,l=r,a=c;break}b=b.sibling}if(!m){for(b=c.child;b;){if(b===a){m=!0,a=c,l=r;break}if(b===l){m=!0,l=c,a=r;break}b=b.sibling}if(!m)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),U=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),oe=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),qe=Symbol.iterator;function Qe(e){return e===null||typeof e!="object"?null:(e=qe&&e[qe]||e["@@iterator"],typeof e=="function"?e:null)}var on=Symbol.for("react.client.reference");function Dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===on?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case _:return"Profiler";case R:return"StrictMode";case X:return"Suspense";case te:return"SuspenseList";case oe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case U:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:Dt(e.type)||"Memo";case K:t=e._payload,e=e._init;try{return Dt(e(t))}catch{}}return null}var dt=Array.isArray,B=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function A(e){return{current:e}}function Y(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function Q(e,t){pe++,fe[pe]=e.current,e.current=t}var I=A(null),ie=A(null),re=A(null),xe=A(null);function rt(e,t){switch(Q(re,t),Q(ie,e),Q(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sp(t),e=op(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(I),Q(I,e)}function Be(){Y(I),Y(ie),Y(re)}function Mi(e){e.memoizedState!==null&&Q(xe,e);var t=I.current,a=op(t,e.type);t!==a&&(Q(ie,e),Q(I,a))}function Zl(e){ie.current===e&&(Y(I),Y(ie)),xe.current===e&&(Y(xe),vl._currentValue=$)}var _o,_f;function ra(e){if(_o===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);_o=t&&t[1]||"",_f=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_o+e+_f}var Bo=!1;function Uo(e,t){if(!e||Bo)return"";Bo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(z){var D=z}Reflect.construct(e,[],q)}else{try{q.call()}catch(z){D=z}e.call(q.prototype)}}else{try{throw Error()}catch(z){D=z}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(z){if(z&&D&&typeof z.stack=="string")return[z.stack,D.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),m=c[0],b=c[1];if(m&&b){var j=m.split(`
`),M=b.split(`
`);for(r=l=0;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;for(;r<M.length&&!M[r].includes("DetermineComponentFrameRoot");)r++;if(l===j.length||r===M.length)for(l=j.length-1,r=M.length-1;1<=l&&0<=r&&j[l]!==M[r];)r--;for(;1<=l&&0<=r;l--,r--)if(j[l]!==M[r]){if(l!==1||r!==1)do if(l--,r--,0>r||j[l]!==M[r]){var V=`
`+j[l].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=l&&0<=r);break}}}finally{Bo=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ra(a):""}function Nv(e,t){switch(e.tag){case 26:case 27:case 5:return ra(e.type);case 16:return ra("Lazy");case 13:return e.child!==t&&t!==null?ra("Suspense Fallback"):ra("Suspense");case 19:return ra("SuspenseList");case 0:case 15:return Uo(e.type,!1);case 11:return Uo(e.type.render,!1);case 1:return Uo(e.type,!0);case 31:return ra("Activity");default:return""}}function Bf(e){try{var t="",a=null;do t+=Nv(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ko=Object.prototype.hasOwnProperty,Ho=n.unstable_scheduleCallback,qo=n.unstable_cancelCallback,Av=n.unstable_shouldYield,wv=n.unstable_requestPaint,bt=n.unstable_now,Cv=n.unstable_getCurrentPriorityLevel,Uf=n.unstable_ImmediatePriority,kf=n.unstable_UserBlockingPriority,Ql=n.unstable_NormalPriority,Mv=n.unstable_LowPriority,Hf=n.unstable_IdlePriority,Dv=n.log,Rv=n.unstable_setDisableYieldValue,Di=null,St=null;function Rn(e){if(typeof Dv=="function"&&Rv(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(Di,e)}catch{}}var jt=Math.clz32?Math.clz32:Lv,zv=Math.log,Ov=Math.LN2;function Lv(e){return e>>>=0,e===0?32:31-(zv(e)/Ov|0)|0}var Pl=256,Fl=262144,Jl=4194304;function ca(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Il(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var r=0,c=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~c,l!==0?r=ca(l):(m&=b,m!==0?r=ca(m):a||(a=b&~e,a!==0&&(r=ca(a))))):(b=l&~c,b!==0?r=ca(b):m!==0?r=ca(m):a||(a=l&~e,a!==0&&(r=ca(a)))),r===0?0:t!==0&&t!==r&&(t&c)===0&&(c=r&-r,a=t&-t,c>=a||c===32&&(a&4194048)!==0)?t:r}function Ri(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Vv(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qf(){var e=Jl;return Jl<<=1,(Jl&62914560)===0&&(Jl=4194304),e}function Yo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function zi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _v(e,t,a,l,r,c){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,j=e.expirationTimes,M=e.hiddenUpdates;for(a=m&~a;0<a;){var V=31-jt(a),q=1<<V;b[V]=0,j[V]=-1;var D=M[V];if(D!==null)for(M[V]=null,V=0;V<D.length;V++){var z=D[V];z!==null&&(z.lane&=-536870913)}a&=~q}l!==0&&Yf(e,l,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(m&~t))}function Yf(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-jt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Gf(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-jt(a),r=1<<l;r&t|e[l]&t&&(e[l]|=t),a&=~r}}function Xf(e,t){var a=t&-t;return a=(a&42)!==0?1:Go(a),(a&(e.suspendedLanes|t))!==0?0:a}function Go(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kf(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Dp(e.type))}function Zf(e,t){var a=G.p;try{return G.p=e,t()}finally{G.p=a}}var zn=Math.random().toString(36).slice(2),$e="__reactFiber$"+zn,ht="__reactProps$"+zn,Oa="__reactContainer$"+zn,Ko="__reactEvents$"+zn,Bv="__reactListeners$"+zn,Uv="__reactHandles$"+zn,Qf="__reactResources$"+zn,Oi="__reactMarker$"+zn;function Zo(e){delete e[$e],delete e[ht],delete e[Ko],delete e[Bv],delete e[Uv]}function La(e){var t=e[$e];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Oa]||a[$e]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=mp(e);e!==null;){if(a=e[$e])return a;e=mp(e)}return t}e=a,a=e.parentNode}return null}function Va(e){if(e=e[$e]||e[Oa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Li(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function _a(e){var t=e[Qf];return t||(t=e[Qf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Oi]=!0}var Pf=new Set,Ff={};function ua(e,t){Ba(e,t),Ba(e+"Capture",t)}function Ba(e,t){for(Ff[e]=t,e=0;e<t.length;e++)Pf.add(t[e])}var kv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jf={},If={};function Hv(e){return ko.call(If,e)?!0:ko.call(Jf,e)?!1:kv.test(e)?If[e]=!0:(Jf[e]=!0,!1)}function $l(e,t,a){if(Hv(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Wl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function rn(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qv(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,c=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(m){a=""+m,c.call(this,m)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qo(e){if(!e._valueTracker){var t=$f(e)?"checked":"value";e._valueTracker=qv(e,t,""+e[t])}}function Wf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=$f(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function es(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yv=/[\n"\\]/g;function zt(e){return e.replace(Yv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Po(e,t,a,l,r,c,m,b){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Rt(t)):e.value!==""+Rt(t)&&(e.value=""+Rt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Fo(e,m,Rt(t)):a!=null?Fo(e,m,Rt(a)):l!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Rt(b):e.removeAttribute("name")}function ed(e,t,a,l,r,c,m,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Qo(e);return}a=a!=null?""+Rt(a):"",t=t!=null?""+Rt(t):a,b||t===e.value||(e.value=t),e.defaultValue=t}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Qo(e)}function Fo(e,t,a){t==="number"&&es(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ua(e,t,a,l){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Rt(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function td(e,t,a){if(t!=null&&(t=""+Rt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Rt(a):""}function nd(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(dt(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Rt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Qo(e)}function ka(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Gv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ad(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Gv.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function id(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in t)l=t[r],t.hasOwnProperty(r)&&a[r]!==l&&ad(e,r,l)}else for(var c in t)t.hasOwnProperty(c)&&ad(e,c,t[c])}function Jo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ts(e){return Kv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function cn(){}var Io=null;function $o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,qa=null;function ld(e){var t=Va(e);if(t&&(e=t.stateNode)){var a=e[ht]||null;e:switch(e=t.stateNode,t.type){case"input":if(Po(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var r=l[ht]||null;if(!r)throw Error(o(90));Po(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Wf(l)}break e;case"textarea":td(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ua(e,!!a.multiple,t,!1)}}}var Wo=!1;function sd(e,t,a){if(Wo)return e(t,a);Wo=!0;try{var l=e(t);return l}finally{if(Wo=!1,(Ha!==null||qa!==null)&&(Ys(),Ha&&(t=Ha,e=qa,qa=Ha=null,ld(t),e)))for(t=0;t<e.length;t++)ld(e[t])}}function Vi(e,t){var a=e.stateNode;if(a===null)return null;var l=a[ht]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),er=!1;if(un)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){er=!0}}),window.addEventListener("test",_i,_i),window.removeEventListener("test",_i,_i)}catch{er=!1}var On=null,tr=null,ns=null;function od(){if(ns)return ns;var e,t=tr,a=t.length,l,r="value"in On?On.value:On.textContent,c=r.length;for(e=0;e<a&&t[e]===r[e];e++);var m=a-e;for(l=1;l<=m&&t[a-l]===r[c-l];l++);return ns=r.slice(e,1<l?1-l:void 0)}function as(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function is(){return!0}function rd(){return!1}function mt(e){function t(a,l,r,c,m){this._reactName=a,this._targetInst=r,this.type=l,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?is:rd,this.isPropagationStopped=rd,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=is)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=is)},persist:function(){},isPersistent:is}),t}var fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ls=mt(fa),Bi=x({},fa,{view:0,detail:0}),Zv=mt(Bi),nr,ar,Ui,ss=x({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ui&&(Ui&&e.type==="mousemove"?(nr=e.screenX-Ui.screenX,ar=e.screenY-Ui.screenY):ar=nr=0,Ui=e),nr)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),cd=mt(ss),Qv=x({},ss,{dataTransfer:0}),Pv=mt(Qv),Fv=x({},Bi,{relatedTarget:0}),ir=mt(Fv),Jv=x({},fa,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=mt(Jv),$v=x({},fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wv=mt($v),ex=x({},fa,{data:0}),ud=mt(ex),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ix(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ax[e])?!!t[e]:!1}function lr(){return ix}var lx=x({},Bi,{key:function(e){if(e.key){var t=tx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=as(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lr,charCode:function(e){return e.type==="keypress"?as(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?as(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sx=mt(lx),ox=x({},ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=mt(ox),rx=x({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lr}),cx=mt(rx),ux=x({},fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=mt(ux),dx=x({},ss,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=mt(dx),mx=x({},fa,{newState:0,oldState:0}),px=mt(mx),gx=[9,13,27,32],sr=un&&"CompositionEvent"in window,ki=null;un&&"documentMode"in document&&(ki=document.documentMode);var yx=un&&"TextEvent"in window&&!ki,dd=un&&(!sr||ki&&8<ki&&11>=ki),hd=" ",md=!1;function pd(e,t){switch(e){case"keyup":return gx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ya=!1;function vx(e,t){switch(e){case"compositionend":return gd(t);case"keypress":return t.which!==32?null:(md=!0,hd);case"textInput":return e=t.data,e===hd&&md?null:e;default:return null}}function xx(e,t){if(Ya)return e==="compositionend"||!sr&&pd(e,t)?(e=od(),ns=tr=On=null,Ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dd&&t.locale!=="ko"?null:t.data;default:return null}}var bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bx[e.type]:t==="textarea"}function vd(e,t,a,l){Ha?qa?qa.push(l):qa=[l]:Ha=l,t=Fs(t,"onChange"),0<t.length&&(a=new ls("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Hi=null,qi=null;function Sx(e){ep(e,0)}function os(e){var t=Li(e);if(Wf(t))return e}function xd(e,t){if(e==="change")return t}var bd=!1;if(un){var or;if(un){var rr="oninput"in document;if(!rr){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),rr=typeof Sd.oninput=="function"}or=rr}else or=!1;bd=or&&(!document.documentMode||9<document.documentMode)}function jd(){Hi&&(Hi.detachEvent("onpropertychange",Td),qi=Hi=null)}function Td(e){if(e.propertyName==="value"&&os(qi)){var t=[];vd(t,qi,e,$o(e)),sd(Sx,t)}}function jx(e,t,a){e==="focusin"?(jd(),Hi=t,qi=a,Hi.attachEvent("onpropertychange",Td)):e==="focusout"&&jd()}function Tx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return os(qi)}function Ex(e,t){if(e==="click")return os(t)}function Nx(e,t){if(e==="input"||e==="change")return os(t)}function Ax(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:Ax;function Yi(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var r=a[l];if(!ko.call(t,r)||!Tt(e[r],t[r]))return!1}return!0}function Ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nd(e,t){var a=Ed(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ed(a)}}function Ad(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ad(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=es(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=es(e.document)}return t}function cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wx=un&&"documentMode"in document&&11>=document.documentMode,Ga=null,ur=null,Gi=null,fr=!1;function Cd(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fr||Ga==null||Ga!==es(l)||(l=Ga,"selectionStart"in l&&cr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Gi&&Yi(Gi,l)||(Gi=l,l=Fs(ur,"onSelect"),0<l.length&&(t=new ls("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Ga)))}function da(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Xa={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionrun:da("Transition","TransitionRun"),transitionstart:da("Transition","TransitionStart"),transitioncancel:da("Transition","TransitionCancel"),transitionend:da("Transition","TransitionEnd")},dr={},Md={};un&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete Xa.animationend.animation,delete Xa.animationiteration.animation,delete Xa.animationstart.animation),"TransitionEvent"in window||delete Xa.transitionend.transition);function ha(e){if(dr[e])return dr[e];if(!Xa[e])return e;var t=Xa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Md)return dr[e]=t[a];return e}var Dd=ha("animationend"),Rd=ha("animationiteration"),zd=ha("animationstart"),Cx=ha("transitionrun"),Mx=ha("transitionstart"),Dx=ha("transitioncancel"),Od=ha("transitionend"),Ld=new Map,hr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hr.push("scrollEnd");function Zt(e,t){Ld.set(e,t),ua(t,[e])}var rs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ot=[],Ka=0,mr=0;function cs(){for(var e=Ka,t=mr=Ka=0;t<e;){var a=Ot[t];Ot[t++]=null;var l=Ot[t];Ot[t++]=null;var r=Ot[t];Ot[t++]=null;var c=Ot[t];if(Ot[t++]=null,l!==null&&r!==null){var m=l.pending;m===null?r.next=r:(r.next=m.next,m.next=r),l.pending=r}c!==0&&Vd(a,r,c)}}function us(e,t,a,l){Ot[Ka++]=e,Ot[Ka++]=t,Ot[Ka++]=a,Ot[Ka++]=l,mr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function pr(e,t,a,l){return us(e,t,a,l),fs(e)}function ma(e,t){return us(e,null,null,t),fs(e)}function Vd(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var r=!1,c=e.return;c!==null;)c.childLanes|=a,l=c.alternate,l!==null&&(l.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&t!==null&&(r=31-jt(a),e=c.hiddenUpdates,l=e[r],l===null?e[r]=[t]:l.push(t),t.lane=a|536870912),c):null}function fs(e){if(50<fl)throw fl=0,Ec=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Za={};function Rx(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,a,l){return new Rx(e,t,a,l)}function gr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fn(e,t){var a=e.alternate;return a===null?(a=Et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function _d(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ds(e,t,a,l,r,c){var m=0;if(l=e,typeof e=="function")gr(e)&&(m=1);else if(typeof e=="string")m=_b(e,a,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case oe:return e=Et(31,a,t,r),e.elementType=oe,e.lanes=c,e;case L:return pa(a.children,r,c,t);case R:m=8,r|=24;break;case _:return e=Et(12,a,t,r|2),e.elementType=_,e.lanes=c,e;case X:return e=Et(13,a,t,r),e.elementType=X,e.lanes=c,e;case te:return e=Et(19,a,t,r),e.elementType=te,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:m=10;break e;case H:m=9;break e;case J:m=11;break e;case Z:m=14;break e;case K:m=16,l=null;break e}m=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Et(m,a,t,r),t.elementType=e,t.type=l,t.lanes=c,t}function pa(e,t,a,l){return e=Et(7,e,l,t),e.lanes=a,e}function yr(e,t,a){return e=Et(6,e,null,t),e.lanes=a,e}function Bd(e){var t=Et(18,null,null,0);return t.stateNode=e,t}function vr(e,t,a){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ud=new WeakMap;function Lt(e,t){if(typeof e=="object"&&e!==null){var a=Ud.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Bf(t)},Ud.set(e,t),t)}return{value:e,source:t,stack:Bf(t)}}var Qa=[],Pa=0,hs=null,Xi=0,Vt=[],_t=0,Ln=null,$t=1,Wt="";function dn(e,t){Qa[Pa++]=Xi,Qa[Pa++]=hs,hs=e,Xi=t}function kd(e,t,a){Vt[_t++]=$t,Vt[_t++]=Wt,Vt[_t++]=Ln,Ln=e;var l=$t;e=Wt;var r=32-jt(l)-1;l&=~(1<<r),a+=1;var c=32-jt(t)+r;if(30<c){var m=r-r%5;c=(l&(1<<m)-1).toString(32),l>>=m,r-=m,$t=1<<32-jt(t)+r|a<<r|l,Wt=c+e}else $t=1<<c|a<<r|l,Wt=e}function xr(e){e.return!==null&&(dn(e,1),kd(e,1,0))}function br(e){for(;e===hs;)hs=Qa[--Pa],Qa[Pa]=null,Xi=Qa[--Pa],Qa[Pa]=null;for(;e===Ln;)Ln=Vt[--_t],Vt[_t]=null,Wt=Vt[--_t],Vt[_t]=null,$t=Vt[--_t],Vt[_t]=null}function Hd(e,t){Vt[_t++]=$t,Vt[_t++]=Wt,Vt[_t++]=Ln,$t=t.id,Wt=t.overflow,Ln=e}var We=null,Ce=null,me=!1,Vn=null,Bt=!1,Sr=Error(o(519));function _n(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ki(Lt(t,e)),Sr}function qd(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[$e]=e,t[ht]=l,a){case"dialog":ue("cancel",t),ue("close",t);break;case"iframe":case"object":case"embed":ue("load",t);break;case"video":case"audio":for(a=0;a<hl.length;a++)ue(hl[a],t);break;case"source":ue("error",t);break;case"img":case"image":case"link":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"input":ue("invalid",t),ed(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ue("invalid",t);break;case"textarea":ue("invalid",t),nd(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||ip(t.textContent,a)?(l.popover!=null&&(ue("beforetoggle",t),ue("toggle",t)),l.onScroll!=null&&ue("scroll",t),l.onScrollEnd!=null&&ue("scrollend",t),l.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||_n(e,!0)}function Yd(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:Bt=!1;return;case 27:case 3:Bt=!0;return;default:We=We.return}}function Fa(e){if(e!==We)return!1;if(!me)return Yd(e),me=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||kc(e.type,e.memoizedProps)),a=!a),a&&Ce&&_n(e),Yd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ce=hp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ce=hp(e)}else t===27?(t=Ce,Jn(e.type)?(e=Xc,Xc=null,Ce=e):Ce=t):Ce=We?kt(e.stateNode.nextSibling):null;return!0}function ga(){Ce=We=null,me=!1}function jr(){var e=Vn;return e!==null&&(vt===null?vt=e:vt.push.apply(vt,e),Vn=null),e}function Ki(e){Vn===null?Vn=[e]:Vn.push(e)}var Tr=A(null),ya=null,hn=null;function Bn(e,t,a){Q(Tr,t._currentValue),t._currentValue=a}function mn(e){e._currentValue=Tr.current,Y(Tr)}function Er(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Nr(e,t,a,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var m=r.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=r;for(var j=0;j<t.length;j++)if(b.context===t[j]){c.lanes|=a,b=c.alternate,b!==null&&(b.lanes|=a),Er(c.return,a,e),l||(m=null);break e}c=b.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(o(341));m.lanes|=a,c=m.alternate,c!==null&&(c.lanes|=a),Er(m,a,e),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function Ja(e,t,a,l){e=null;for(var r=t,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(o(387));if(m=m.memoizedProps,m!==null){var b=r.type;Tt(r.pendingProps.value,m.value)||(e!==null?e.push(b):e=[b])}}else if(r===xe.current){if(m=r.alternate,m===null)throw Error(o(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(vl):e=[vl])}r=r.return}e!==null&&Nr(t,e,a,l),t.flags|=262144}function ms(e){for(e=e.firstContext;e!==null;){if(!Tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function va(e){ya=e,hn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return Gd(ya,e)}function ps(e,t){return ya===null&&va(e),Gd(e,t)}function Gd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},hn===null){if(e===null)throw Error(o(308));hn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else hn=hn.next=t;return a}var zx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Ox=n.unstable_scheduleCallback,Lx=n.unstable_NormalPriority,Ye={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ar(){return{controller:new zx,data:new Map,refCount:0}}function Zi(e){e.refCount--,e.refCount===0&&Ox(Lx,function(){e.controller.abort()})}var Qi=null,wr=0,Ia=0,$a=null;function Vx(e,t){if(Qi===null){var a=Qi=[];wr=0,Ia=Dc(),$a={status:"pending",value:void 0,then:function(l){a.push(l)}}}return wr++,t.then(Xd,Xd),t}function Xd(){if(--wr===0&&Qi!==null){$a!==null&&($a.status="fulfilled");var e=Qi;Qi=null,Ia=0,$a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _x(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var r=0;r<a.length;r++)(0,a[r])(t)},function(r){for(l.status="rejected",l.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),l}var Kd=B.S;B.S=function(e,t){Cm=bt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Vx(e,t),Kd!==null&&Kd(e,t)};var xa=A(null);function Cr(){var e=xa.current;return e!==null?e:we.pooledCache}function gs(e,t){t===null?Q(xa,xa.current):Q(xa,t.pool)}function Zd(){var e=Cr();return e===null?null:{parent:Ye._currentValue,pool:e}}var Wa=Error(o(460)),Mr=Error(o(474)),ys=Error(o(542)),vs={then:function(){}};function Qd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(cn,cn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jd(e),e;default:if(typeof t.status=="string")t.then(cn,cn);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=l}},function(l){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jd(e),e}throw Sa=t,Wa}}function ba(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Sa=a,Wa):a}}var Sa=null;function Fd(){if(Sa===null)throw Error(o(459));var e=Sa;return Sa=null,e}function Jd(e){if(e===Wa||e===ys)throw Error(o(483))}var ei=null,Pi=0;function xs(e){var t=Pi;return Pi+=1,ei===null&&(ei=[]),Pd(ei,e,t)}function Fi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function bs(e,t){throw t.$$typeof===S?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Id(e){function t(w,E){if(e){var C=w.deletions;C===null?(w.deletions=[E],w.flags|=16):C.push(E)}}function a(w,E){if(!e)return null;for(;E!==null;)t(w,E),E=E.sibling;return null}function l(w){for(var E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function r(w,E){return w=fn(w,E),w.index=0,w.sibling=null,w}function c(w,E,C){return w.index=C,e?(C=w.alternate,C!==null?(C=C.index,C<E?(w.flags|=67108866,E):C):(w.flags|=67108866,E)):(w.flags|=1048576,E)}function m(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function b(w,E,C,k){return E===null||E.tag!==6?(E=yr(C,w.mode,k),E.return=w,E):(E=r(E,C),E.return=w,E)}function j(w,E,C,k){var ee=C.type;return ee===L?V(w,E,C.props.children,k,C.key):E!==null&&(E.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===K&&ba(ee)===E.type)?(E=r(E,C.props),Fi(E,C),E.return=w,E):(E=ds(C.type,C.key,C.props,null,w.mode,k),Fi(E,C),E.return=w,E)}function M(w,E,C,k){return E===null||E.tag!==4||E.stateNode.containerInfo!==C.containerInfo||E.stateNode.implementation!==C.implementation?(E=vr(C,w.mode,k),E.return=w,E):(E=r(E,C.children||[]),E.return=w,E)}function V(w,E,C,k,ee){return E===null||E.tag!==7?(E=pa(C,w.mode,k,ee),E.return=w,E):(E=r(E,C),E.return=w,E)}function q(w,E,C){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=yr(""+E,w.mode,C),E.return=w,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case N:return C=ds(E.type,E.key,E.props,null,w.mode,C),Fi(C,E),C.return=w,C;case O:return E=vr(E,w.mode,C),E.return=w,E;case K:return E=ba(E),q(w,E,C)}if(dt(E)||Qe(E))return E=pa(E,w.mode,C,null),E.return=w,E;if(typeof E.then=="function")return q(w,xs(E),C);if(E.$$typeof===U)return q(w,ps(w,E),C);bs(w,E)}return null}function D(w,E,C,k){var ee=E!==null?E.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return ee!==null?null:b(w,E,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case N:return C.key===ee?j(w,E,C,k):null;case O:return C.key===ee?M(w,E,C,k):null;case K:return C=ba(C),D(w,E,C,k)}if(dt(C)||Qe(C))return ee!==null?null:V(w,E,C,k,null);if(typeof C.then=="function")return D(w,E,xs(C),k);if(C.$$typeof===U)return D(w,E,ps(w,C),k);bs(w,C)}return null}function z(w,E,C,k,ee){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return w=w.get(C)||null,b(E,w,""+k,ee);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case N:return w=w.get(k.key===null?C:k.key)||null,j(E,w,k,ee);case O:return w=w.get(k.key===null?C:k.key)||null,M(E,w,k,ee);case K:return k=ba(k),z(w,E,C,k,ee)}if(dt(k)||Qe(k))return w=w.get(C)||null,V(E,w,k,ee,null);if(typeof k.then=="function")return z(w,E,C,xs(k),ee);if(k.$$typeof===U)return z(w,E,C,ps(E,k),ee);bs(E,k)}return null}function F(w,E,C,k){for(var ee=null,ge=null,W=E,se=E=0,he=null;W!==null&&se<C.length;se++){W.index>se?(he=W,W=null):he=W.sibling;var ye=D(w,W,C[se],k);if(ye===null){W===null&&(W=he);break}e&&W&&ye.alternate===null&&t(w,W),E=c(ye,E,se),ge===null?ee=ye:ge.sibling=ye,ge=ye,W=he}if(se===C.length)return a(w,W),me&&dn(w,se),ee;if(W===null){for(;se<C.length;se++)W=q(w,C[se],k),W!==null&&(E=c(W,E,se),ge===null?ee=W:ge.sibling=W,ge=W);return me&&dn(w,se),ee}for(W=l(W);se<C.length;se++)he=z(W,w,se,C[se],k),he!==null&&(e&&he.alternate!==null&&W.delete(he.key===null?se:he.key),E=c(he,E,se),ge===null?ee=he:ge.sibling=he,ge=he);return e&&W.forEach(function(ta){return t(w,ta)}),me&&dn(w,se),ee}function ne(w,E,C,k){if(C==null)throw Error(o(151));for(var ee=null,ge=null,W=E,se=E=0,he=null,ye=C.next();W!==null&&!ye.done;se++,ye=C.next()){W.index>se?(he=W,W=null):he=W.sibling;var ta=D(w,W,ye.value,k);if(ta===null){W===null&&(W=he);break}e&&W&&ta.alternate===null&&t(w,W),E=c(ta,E,se),ge===null?ee=ta:ge.sibling=ta,ge=ta,W=he}if(ye.done)return a(w,W),me&&dn(w,se),ee;if(W===null){for(;!ye.done;se++,ye=C.next())ye=q(w,ye.value,k),ye!==null&&(E=c(ye,E,se),ge===null?ee=ye:ge.sibling=ye,ge=ye);return me&&dn(w,se),ee}for(W=l(W);!ye.done;se++,ye=C.next())ye=z(W,w,se,ye.value,k),ye!==null&&(e&&ye.alternate!==null&&W.delete(ye.key===null?se:ye.key),E=c(ye,E,se),ge===null?ee=ye:ge.sibling=ye,ge=ye);return e&&W.forEach(function(Qb){return t(w,Qb)}),me&&dn(w,se),ee}function Ae(w,E,C,k){if(typeof C=="object"&&C!==null&&C.type===L&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case N:e:{for(var ee=C.key;E!==null;){if(E.key===ee){if(ee=C.type,ee===L){if(E.tag===7){a(w,E.sibling),k=r(E,C.props.children),k.return=w,w=k;break e}}else if(E.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===K&&ba(ee)===E.type){a(w,E.sibling),k=r(E,C.props),Fi(k,C),k.return=w,w=k;break e}a(w,E);break}else t(w,E);E=E.sibling}C.type===L?(k=pa(C.props.children,w.mode,k,C.key),k.return=w,w=k):(k=ds(C.type,C.key,C.props,null,w.mode,k),Fi(k,C),k.return=w,w=k)}return m(w);case O:e:{for(ee=C.key;E!==null;){if(E.key===ee)if(E.tag===4&&E.stateNode.containerInfo===C.containerInfo&&E.stateNode.implementation===C.implementation){a(w,E.sibling),k=r(E,C.children||[]),k.return=w,w=k;break e}else{a(w,E);break}else t(w,E);E=E.sibling}k=vr(C,w.mode,k),k.return=w,w=k}return m(w);case K:return C=ba(C),Ae(w,E,C,k)}if(dt(C))return F(w,E,C,k);if(Qe(C)){if(ee=Qe(C),typeof ee!="function")throw Error(o(150));return C=ee.call(C),ne(w,E,C,k)}if(typeof C.then=="function")return Ae(w,E,xs(C),k);if(C.$$typeof===U)return Ae(w,E,ps(w,C),k);bs(w,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,E!==null&&E.tag===6?(a(w,E.sibling),k=r(E,C),k.return=w,w=k):(a(w,E),k=yr(C,w.mode,k),k.return=w,w=k),m(w)):a(w,E)}return function(w,E,C,k){try{Pi=0;var ee=Ae(w,E,C,k);return ei=null,ee}catch(W){if(W===Wa||W===ys)throw W;var ge=Et(29,W,null,w.mode);return ge.lanes=k,ge.return=w,ge}}}var ja=Id(!0),$d=Id(!1),Un=!1;function Dr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Hn(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ve&2)!==0){var r=l.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),l.pending=t,t=fs(e),Vd(e,null,a),t}return us(e,l,t,a),fs(e)}function Ji(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Gf(e,a)}}function zr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var r=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?r=c=m:c=c.next=m,a=a.next}while(a!==null);c===null?r=c=t:c=c.next=t}else r=c=t;a={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Or=!1;function Ii(){if(Or){var e=$a;if(e!==null)throw e}}function $i(e,t,a,l){Or=!1;var r=e.updateQueue;Un=!1;var c=r.firstBaseUpdate,m=r.lastBaseUpdate,b=r.shared.pending;if(b!==null){r.shared.pending=null;var j=b,M=j.next;j.next=null,m===null?c=M:m.next=M,m=j;var V=e.alternate;V!==null&&(V=V.updateQueue,b=V.lastBaseUpdate,b!==m&&(b===null?V.firstBaseUpdate=M:b.next=M,V.lastBaseUpdate=j))}if(c!==null){var q=r.baseState;m=0,V=M=j=null,b=c;do{var D=b.lane&-536870913,z=D!==b.lane;if(z?(de&D)===D:(l&D)===D){D!==0&&D===Ia&&(Or=!0),V!==null&&(V=V.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var F=e,ne=b;D=t;var Ae=a;switch(ne.tag){case 1:if(F=ne.payload,typeof F=="function"){q=F.call(Ae,q,D);break e}q=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=ne.payload,D=typeof F=="function"?F.call(Ae,q,D):F,D==null)break e;q=x({},q,D);break e;case 2:Un=!0}}D=b.callback,D!==null&&(e.flags|=64,z&&(e.flags|=8192),z=r.callbacks,z===null?r.callbacks=[D]:z.push(D))}else z={lane:D,tag:b.tag,payload:b.payload,callback:b.callback,next:null},V===null?(M=V=z,j=q):V=V.next=z,m|=D;if(b=b.next,b===null){if(b=r.shared.pending,b===null)break;z=b,b=z.next,z.next=null,r.lastBaseUpdate=z,r.shared.pending=null}}while(!0);V===null&&(j=q),r.baseState=j,r.firstBaseUpdate=M,r.lastBaseUpdate=V,c===null&&(r.shared.lanes=0),Kn|=m,e.lanes=m,e.memoizedState=q}}function Wd(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function eh(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wd(a[e],t)}var ti=A(null),Ss=A(0);function th(e,t){e=Tn,Q(Ss,e),Q(ti,t),Tn=e|t.baseLanes}function Lr(){Q(Ss,Tn),Q(ti,ti.current)}function Vr(){Tn=Ss.current,Y(ti),Y(Ss)}var Nt=A(null),Ut=null;function qn(e){var t=e.alternate;Q(Ue,Ue.current&1),Q(Nt,e),Ut===null&&(t===null||ti.current!==null||t.memoizedState!==null)&&(Ut=e)}function _r(e){Q(Ue,Ue.current),Q(Nt,e),Ut===null&&(Ut=e)}function nh(e){e.tag===22?(Q(Ue,Ue.current),Q(Nt,e),Ut===null&&(Ut=e)):Yn()}function Yn(){Q(Ue,Ue.current),Q(Nt,Nt.current)}function At(e){Y(Nt),Ut===e&&(Ut=null),Y(Ue)}var Ue=A(0);function js(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yc(a)||Gc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pn=0,le=null,Ee=null,Ge=null,Ts=!1,ni=!1,Ta=!1,Es=0,Wi=0,ai=null,Bx=0;function Le(){throw Error(o(321))}function Br(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Tt(e[a],t[a]))return!1;return!0}function Ur(e,t,a,l,r,c){return pn=c,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?kh:Wr,Ta=!1,c=a(l,r),Ta=!1,ni&&(c=ih(t,a,l,r)),ah(e),c}function ah(e){B.H=nl;var t=Ee!==null&&Ee.next!==null;if(pn=0,Ge=Ee=le=null,Ts=!1,Wi=0,ai=null,t)throw Error(o(300));e===null||Xe||(e=e.dependencies,e!==null&&ms(e)&&(Xe=!0))}function ih(e,t,a,l){le=e;var r=0;do{if(ni&&(ai=null),Wi=0,ni=!1,25<=r)throw Error(o(301));if(r+=1,Ge=Ee=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}B.H=Hh,c=t(a,l)}while(ni);return c}function Ux(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?el(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(le.flags|=1024),t}function kr(){var e=Es!==0;return Es=0,e}function Hr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function qr(e){if(Ts){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ts=!1}pn=0,Ge=Ee=le=null,ni=!1,Wi=Es=0,ai=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?le.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function ke(){if(Ee===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Ge===null?le.memoizedState:Ge.next;if(t!==null)Ge=t,Ee=e;else{if(e===null)throw le.alternate===null?Error(o(467)):Error(o(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ge===null?le.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Ns(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function el(e){var t=Wi;return Wi+=1,ai===null&&(ai=[]),e=Pd(ai,e,t),t=le,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?kh:Wr),e}function As(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return el(e);if(e.$$typeof===U)return et(e)}throw Error(o(438,String(e)))}function Yr(e){var t=null,a=le.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=le.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ns(),le.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=be;return t.index++,a}function gn(e,t){return typeof t=="function"?t(e):t}function ws(e){var t=ke();return Gr(t,Ee,e)}function Gr(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var r=e.baseQueue,c=l.pending;if(c!==null){if(r!==null){var m=r.next;r.next=c.next,c.next=m}t.baseQueue=r=c,l.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{t=r.next;var b=m=null,j=null,M=t,V=!1;do{var q=M.lane&-536870913;if(q!==M.lane?(de&q)===q:(pn&q)===q){var D=M.revertLane;if(D===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),q===Ia&&(V=!0);else if((pn&D)===D){M=M.next,D===Ia&&(V=!0);continue}else q={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},j===null?(b=j=q,m=c):j=j.next=q,le.lanes|=D,Kn|=D;q=M.action,Ta&&a(c,q),c=M.hasEagerState?M.eagerState:a(c,q)}else D={lane:q,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},j===null?(b=j=D,m=c):j=j.next=D,le.lanes|=q,Kn|=q;M=M.next}while(M!==null&&M!==t);if(j===null?m=c:j.next=b,!Tt(c,e.memoizedState)&&(Xe=!0,V&&(a=$a,a!==null)))throw a;e.memoizedState=c,e.baseState=m,e.baseQueue=j,l.lastRenderedState=c}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Xr(e){var t=ke(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,r=a.pending,c=t.memoizedState;if(r!==null){a.pending=null;var m=r=r.next;do c=e(c,m.action),m=m.next;while(m!==r);Tt(c,t.memoizedState)||(Xe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),a.lastRenderedState=c}return[c,l]}function lh(e,t,a){var l=le,r=ke(),c=me;if(c){if(a===void 0)throw Error(o(407));a=a()}else a=t();var m=!Tt((Ee||r).memoizedState,a);if(m&&(r.memoizedState=a,Xe=!0),r=r.queue,Qr(rh.bind(null,l,r,e),[e]),r.getSnapshot!==t||m||Ge!==null&&Ge.memoizedState.tag&1){if(l.flags|=2048,ii(9,{destroy:void 0},oh.bind(null,l,r,a,t),null),we===null)throw Error(o(349));c||(pn&127)!==0||sh(l,t,a)}return a}function sh(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=le.updateQueue,t===null?(t=Ns(),le.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function oh(e,t,a,l){t.value=a,t.getSnapshot=l,ch(t)&&uh(e)}function rh(e,t,a){return a(function(){ch(t)&&uh(e)})}function ch(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Tt(e,a)}catch{return!0}}function uh(e){var t=ma(e,2);t!==null&&xt(t,e,2)}function Kr(e){var t=ct();if(typeof e=="function"){var a=e;if(e=a(),Ta){Rn(!0);try{a()}finally{Rn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:e},t}function fh(e,t,a,l){return e.baseState=a,Gr(e,Ee,typeof l=="function"?l:gn)}function kx(e,t,a,l,r){if(Ds(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};B.T!==null?a(!0):c.isTransition=!1,l(c),a=t.pending,a===null?(c.next=t.pending=c,dh(t,c)):(c.next=a.next,t.pending=a.next=c)}}function dh(e,t){var a=t.action,l=t.payload,r=e.state;if(t.isTransition){var c=B.T,m={};B.T=m;try{var b=a(r,l),j=B.S;j!==null&&j(m,b),hh(e,t,b)}catch(M){Zr(e,t,M)}finally{c!==null&&m.types!==null&&(c.types=m.types),B.T=c}}else try{c=a(r,l),hh(e,t,c)}catch(M){Zr(e,t,M)}}function hh(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){mh(e,t,l)},function(l){return Zr(e,t,l)}):mh(e,t,a)}function mh(e,t,a){t.status="fulfilled",t.value=a,ph(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,dh(e,a)))}function Zr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,ph(t),t=t.next;while(t!==l)}e.action=null}function ph(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function gh(e,t){return t}function yh(e,t){if(me){var a=we.formState;if(a!==null){e:{var l=le;if(me){if(Ce){t:{for(var r=Ce,c=Bt;r.nodeType!==8;){if(!c){r=null;break t}if(r=kt(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){Ce=kt(r.nextSibling),l=r.data==="F!";break e}}_n(l)}l=!1}l&&(t=a[0])}}return a=ct(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gh,lastRenderedState:t},a.queue=l,a=_h.bind(null,le,l),l.dispatch=a,l=Kr(!1),c=$r.bind(null,le,!1,l.queue),l=ct(),r={state:t,dispatch:null,action:e,pending:null},l.queue=r,a=kx.bind(null,le,r,c,a),r.dispatch=a,l.memoizedState=e,[t,a,!1]}function vh(e){var t=ke();return xh(t,Ee,e)}function xh(e,t,a){if(t=Gr(e,t,gh)[0],e=ws(gn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=el(t)}catch(m){throw m===Wa?ys:m}else l=t;t=ke();var r=t.queue,c=r.dispatch;return a!==t.memoizedState&&(le.flags|=2048,ii(9,{destroy:void 0},Hx.bind(null,r,a),null)),[l,c,e]}function Hx(e,t){e.action=t}function bh(e){var t=ke(),a=Ee;if(a!==null)return xh(t,a,e);ke(),t=t.memoizedState,a=ke();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function ii(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=le.updateQueue,t===null&&(t=Ns(),le.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Sh(){return ke().memoizedState}function Cs(e,t,a,l){var r=ct();le.flags|=e,r.memoizedState=ii(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ms(e,t,a,l){var r=ke();l=l===void 0?null:l;var c=r.memoizedState.inst;Ee!==null&&l!==null&&Br(l,Ee.memoizedState.deps)?r.memoizedState=ii(t,c,a,l):(le.flags|=e,r.memoizedState=ii(1|t,c,a,l))}function jh(e,t){Cs(8390656,8,e,t)}function Qr(e,t){Ms(2048,8,e,t)}function qx(e){le.flags|=4;var t=le.updateQueue;if(t===null)t=Ns(),le.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Th(e){var t=ke().memoizedState;return qx({ref:t,nextImpl:e}),function(){if((ve&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Eh(e,t){return Ms(4,2,e,t)}function Nh(e,t){return Ms(4,4,e,t)}function Ah(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wh(e,t,a){a=a!=null?a.concat([e]):null,Ms(4,4,Ah.bind(null,t,e),a)}function Pr(){}function Ch(e,t){var a=ke();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Br(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Mh(e,t){var a=ke();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Br(t,l[1]))return l[0];if(l=e(),Ta){Rn(!0);try{e()}finally{Rn(!1)}}return a.memoizedState=[l,t],l}function Fr(e,t,a){return a===void 0||(pn&1073741824)!==0&&(de&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Dm(),le.lanes|=e,Kn|=e,a)}function Dh(e,t,a,l){return Tt(a,t)?a:ti.current!==null?(e=Fr(e,a,l),Tt(e,t)||(Xe=!0),e):(pn&42)===0||(pn&1073741824)!==0&&(de&261930)===0?(Xe=!0,e.memoizedState=a):(e=Dm(),le.lanes|=e,Kn|=e,t)}function Rh(e,t,a,l,r){var c=G.p;G.p=c!==0&&8>c?c:8;var m=B.T,b={};B.T=b,$r(e,!1,t,a);try{var j=r(),M=B.S;if(M!==null&&M(b,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var V=_x(j,l);tl(e,t,V,Mt(e))}else tl(e,t,l,Mt(e))}catch(q){tl(e,t,{then:function(){},status:"rejected",reason:q},Mt())}finally{G.p=c,m!==null&&b.types!==null&&(m.types=b.types),B.T=m}}function Yx(){}function Jr(e,t,a,l){if(e.tag!==5)throw Error(o(476));var r=zh(e).queue;Rh(e,r,t,$,a===null?Yx:function(){return Oh(e),a(l)})}function zh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Oh(e){var t=zh(e);t.next===null&&(t=e.alternate.memoizedState),tl(e,t.next.queue,{},Mt())}function Ir(){return et(vl)}function Lh(){return ke().memoizedState}function Vh(){return ke().memoizedState}function Gx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Mt();e=kn(a);var l=Hn(t,e,a);l!==null&&(xt(l,t,a),Ji(l,t,a)),t={cache:Ar()},e.payload=t;return}t=t.return}}function Xx(e,t,a){var l=Mt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ds(e)?Bh(t,a):(a=pr(e,t,a,l),a!==null&&(xt(a,e,l),Uh(a,t,l)))}function _h(e,t,a){var l=Mt();tl(e,t,a,l)}function tl(e,t,a,l){var r={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ds(e))Bh(t,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var m=t.lastRenderedState,b=c(m,a);if(r.hasEagerState=!0,r.eagerState=b,Tt(b,m))return us(e,t,r,0),we===null&&cs(),!1}catch{}if(a=pr(e,t,r,l),a!==null)return xt(a,e,l),Uh(a,t,l),!0}return!1}function $r(e,t,a,l){if(l={lane:2,revertLane:Dc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ds(e)){if(t)throw Error(o(479))}else t=pr(e,a,l,2),t!==null&&xt(t,e,2)}function Ds(e){var t=e.alternate;return e===le||t!==null&&t===le}function Bh(e,t){ni=Ts=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Uh(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Gf(e,a)}}var nl={readContext:et,use:As,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};nl.useEffectEvent=Le;var kh={readContext:et,use:As,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:jh,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Cs(4194308,4,Ah.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Cs(4194308,4,e,t)},useInsertionEffect:function(e,t){Cs(4,2,e,t)},useMemo:function(e,t){var a=ct();t=t===void 0?null:t;var l=e();if(Ta){Rn(!0);try{e()}finally{Rn(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ct();if(a!==void 0){var r=a(t);if(Ta){Rn(!0);try{a(t)}finally{Rn(!1)}}}else r=t;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=Xx.bind(null,le,e),[l.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=Kr(e);var t=e.queue,a=_h.bind(null,le,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Pr,useDeferredValue:function(e,t){var a=ct();return Fr(a,e,t)},useTransition:function(){var e=Kr(!1);return e=Rh.bind(null,le,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=le,r=ct();if(me){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),we===null)throw Error(o(349));(de&127)!==0||sh(l,t,a)}r.memoizedState=a;var c={value:a,getSnapshot:t};return r.queue=c,jh(rh.bind(null,l,c,e),[e]),l.flags|=2048,ii(9,{destroy:void 0},oh.bind(null,l,c,a,t),null),a},useId:function(){var e=ct(),t=we.identifierPrefix;if(me){var a=Wt,l=$t;a=(l&~(1<<32-jt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Es++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Bx++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ir,useFormState:yh,useActionState:yh,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=$r.bind(null,le,!0,a),a.dispatch=t,[e,t]},useMemoCache:Yr,useCacheRefresh:function(){return ct().memoizedState=Gx.bind(null,le)},useEffectEvent:function(e){var t=ct(),a={impl:e};return t.memoizedState=a,function(){if((ve&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Wr={readContext:et,use:As,useCallback:Ch,useContext:et,useEffect:Qr,useImperativeHandle:wh,useInsertionEffect:Eh,useLayoutEffect:Nh,useMemo:Mh,useReducer:ws,useRef:Sh,useState:function(){return ws(gn)},useDebugValue:Pr,useDeferredValue:function(e,t){var a=ke();return Dh(a,Ee.memoizedState,e,t)},useTransition:function(){var e=ws(gn)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:el(e),t]},useSyncExternalStore:lh,useId:Lh,useHostTransitionStatus:Ir,useFormState:vh,useActionState:vh,useOptimistic:function(e,t){var a=ke();return fh(a,Ee,e,t)},useMemoCache:Yr,useCacheRefresh:Vh};Wr.useEffectEvent=Th;var Hh={readContext:et,use:As,useCallback:Ch,useContext:et,useEffect:Qr,useImperativeHandle:wh,useInsertionEffect:Eh,useLayoutEffect:Nh,useMemo:Mh,useReducer:Xr,useRef:Sh,useState:function(){return Xr(gn)},useDebugValue:Pr,useDeferredValue:function(e,t){var a=ke();return Ee===null?Fr(a,e,t):Dh(a,Ee.memoizedState,e,t)},useTransition:function(){var e=Xr(gn)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:el(e),t]},useSyncExternalStore:lh,useId:Lh,useHostTransitionStatus:Ir,useFormState:bh,useActionState:bh,useOptimistic:function(e,t){var a=ke();return Ee!==null?fh(a,Ee,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yr,useCacheRefresh:Vh};Hh.useEffectEvent=Th;function ec(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:x({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var tc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Mt(),r=kn(l);r.payload=t,a!=null&&(r.callback=a),t=Hn(e,r,l),t!==null&&(xt(t,e,l),Ji(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Mt(),r=kn(l);r.tag=1,r.payload=t,a!=null&&(r.callback=a),t=Hn(e,r,l),t!==null&&(xt(t,e,l),Ji(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Mt(),l=kn(a);l.tag=2,t!=null&&(l.callback=t),t=Hn(e,l,a),t!==null&&(xt(t,e,a),Ji(t,e,a))}};function qh(e,t,a,l,r,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,m):t.prototype&&t.prototype.isPureReactComponent?!Yi(a,l)||!Yi(r,c):!0}function Yh(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&tc.enqueueReplaceState(t,t.state,null)}function Ea(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=x({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function Gh(e){rs(e)}function Xh(e){console.error(e)}function Kh(e){rs(e)}function Rs(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Zh(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function nc(e,t,a){return a=kn(a),a.tag=3,a.payload={element:null},a.callback=function(){Rs(e,t)},a}function Qh(e){return e=kn(e),e.tag=3,e}function Ph(e,t,a,l){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var c=l.value;e.payload=function(){return r(c)},e.callback=function(){Zh(t,a,l)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Zh(t,a,l),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function Kx(e,t,a,l,r){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Ja(t,a,r,!0),a=Nt.current,a!==null){switch(a.tag){case 31:case 13:return Ut===null?Gs():a.alternate===null&&Ve===0&&(Ve=3),a.flags&=-257,a.flags|=65536,a.lanes=r,l===vs?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),wc(e,l,r)),!1;case 22:return a.flags|=65536,l===vs?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),wc(e,l,r)),!1}throw Error(o(435,a.tag))}return wc(e,l,r),Gs(),!1}if(me)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,l!==Sr&&(e=Error(o(422),{cause:l}),Ki(Lt(e,a)))):(l!==Sr&&(t=Error(o(423),{cause:l}),Ki(Lt(t,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Lt(l,a),r=nc(e.stateNode,l,r),zr(e,r),Ve!==4&&(Ve=2)),!1;var c=Error(o(520),{cause:l});if(c=Lt(c,a),ul===null?ul=[c]:ul.push(c),Ve!==4&&(Ve=2),t===null)return!0;l=Lt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=nc(a.stateNode,l,e),zr(a,e),!1;case 1:if(t=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Zn===null||!Zn.has(c))))return a.flags|=65536,r&=-r,a.lanes|=r,r=Qh(r),Ph(r,e,a,l),zr(a,r),!1}a=a.return}while(a!==null);return!1}var ac=Error(o(461)),Xe=!1;function tt(e,t,a,l){t.child=e===null?$d(t,null,a,l):ja(t,e.child,a,l)}function Fh(e,t,a,l,r){a=a.render;var c=t.ref;if("ref"in l){var m={};for(var b in l)b!=="ref"&&(m[b]=l[b])}else m=l;return va(t),l=Ur(e,t,a,m,c,r),b=kr(),e!==null&&!Xe?(Hr(e,t,r),yn(e,t,r)):(me&&b&&xr(t),t.flags|=1,tt(e,t,l,r),t.child)}function Jh(e,t,a,l,r){if(e===null){var c=a.type;return typeof c=="function"&&!gr(c)&&c.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=c,Ih(e,t,c,l,r)):(e=ds(a.type,null,l,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!fc(e,r)){var m=c.memoizedProps;if(a=a.compare,a=a!==null?a:Yi,a(m,l)&&e.ref===t.ref)return yn(e,t,r)}return t.flags|=1,e=fn(c,l),e.ref=t.ref,e.return=t,t.child=e}function Ih(e,t,a,l,r){if(e!==null){var c=e.memoizedProps;if(Yi(c,l)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=l=c,fc(e,r))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,yn(e,t,r)}return ic(e,t,a,l,r)}function $h(e,t,a,l){var r=l.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~c}else l=0,t.child=null;return Wh(e,t,c,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&gs(t,c!==null?c.cachePool:null),c!==null?th(t,c):Lr(),nh(t);else return l=t.lanes=536870912,Wh(e,t,c!==null?c.baseLanes|a:a,a,l)}else c!==null?(gs(t,c.cachePool),th(t,c),Yn(),t.memoizedState=null):(e!==null&&gs(t,null),Lr(),Yn());return tt(e,t,r,a),t.child}function al(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Wh(e,t,a,l,r){var c=Cr();return c=c===null?null:{parent:Ye._currentValue,pool:c},t.memoizedState={baseLanes:a,cachePool:c},e!==null&&gs(t,null),Lr(),nh(t),e!==null&&Ja(e,t,l,!0),t.childLanes=r,null}function zs(e,t){return t=Ls({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function em(e,t,a){return ja(t,e.child,null,a),e=zs(t,t.pendingProps),e.flags|=2,At(t),t.memoizedState=null,e}function Zx(e,t,a){var l=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(me){if(l.mode==="hidden")return e=zs(t,l),t.lanes=536870912,al(null,e);if(_r(t),(e=Ce)?(e=dp(e,Bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ln!==null?{id:$t,overflow:Wt}:null,retryLane:536870912,hydrationErrors:null},a=Bd(e),a.return=t,t.child=a,We=t,Ce=null)):e=null,e===null)throw _n(t);return t.lanes=536870912,null}return zs(t,l)}var c=e.memoizedState;if(c!==null){var m=c.dehydrated;if(_r(t),r)if(t.flags&256)t.flags&=-257,t=em(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Xe||Ja(e,t,a,!1),r=(a&e.childLanes)!==0,Xe||r){if(l=we,l!==null&&(m=Xf(l,a),m!==0&&m!==c.retryLane))throw c.retryLane=m,ma(e,m),xt(l,e,m),ac;Gs(),t=em(e,t,a)}else e=c.treeContext,Ce=kt(m.nextSibling),We=t,me=!0,Vn=null,Bt=!1,e!==null&&Hd(t,e),t=zs(t,l),t.flags|=4096;return t}return e=fn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Os(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ic(e,t,a,l,r){return va(t),a=Ur(e,t,a,l,void 0,r),l=kr(),e!==null&&!Xe?(Hr(e,t,r),yn(e,t,r)):(me&&l&&xr(t),t.flags|=1,tt(e,t,a,r),t.child)}function tm(e,t,a,l,r,c){return va(t),t.updateQueue=null,a=ih(t,l,a,r),ah(e),l=kr(),e!==null&&!Xe?(Hr(e,t,c),yn(e,t,c)):(me&&l&&xr(t),t.flags|=1,tt(e,t,a,c),t.child)}function nm(e,t,a,l,r){if(va(t),t.stateNode===null){var c=Za,m=a.contextType;typeof m=="object"&&m!==null&&(c=et(m)),c=new a(l,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=tc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=l,c.state=t.memoizedState,c.refs={},Dr(t),m=a.contextType,c.context=typeof m=="object"&&m!==null?et(m):Za,c.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(ec(t,a,m,l),c.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&tc.enqueueReplaceState(c,c.state,null),$i(t,l,c,r),Ii(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){c=t.stateNode;var b=t.memoizedProps,j=Ea(a,b);c.props=j;var M=c.context,V=a.contextType;m=Za,typeof V=="object"&&V!==null&&(m=et(V));var q=a.getDerivedStateFromProps;V=typeof q=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,V||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||M!==m)&&Yh(t,c,l,m),Un=!1;var D=t.memoizedState;c.state=D,$i(t,l,c,r),Ii(),M=t.memoizedState,b||D!==M||Un?(typeof q=="function"&&(ec(t,a,q,l),M=t.memoizedState),(j=Un||qh(t,a,j,l,D,M,m))?(V||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=M),c.props=l,c.state=M,c.context=m,l=j):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{c=t.stateNode,Rr(e,t),m=t.memoizedProps,V=Ea(a,m),c.props=V,q=t.pendingProps,D=c.context,M=a.contextType,j=Za,typeof M=="object"&&M!==null&&(j=et(M)),b=a.getDerivedStateFromProps,(M=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==q||D!==j)&&Yh(t,c,l,j),Un=!1,D=t.memoizedState,c.state=D,$i(t,l,c,r),Ii();var z=t.memoizedState;m!==q||D!==z||Un||e!==null&&e.dependencies!==null&&ms(e.dependencies)?(typeof b=="function"&&(ec(t,a,b,l),z=t.memoizedState),(V=Un||qh(t,a,V,l,D,z,j)||e!==null&&e.dependencies!==null&&ms(e.dependencies))?(M||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,z,j),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,z,j)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=z),c.props=l,c.state=z,c.context=j,l=V):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),l=!1)}return c=l,Os(e,t),l=(t.flags&128)!==0,c||l?(c=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&l?(t.child=ja(t,e.child,null,r),t.child=ja(t,null,a,r)):tt(e,t,a,r),t.memoizedState=c.state,e=t.child):e=yn(e,t,r),e}function am(e,t,a,l){return ga(),t.flags|=256,tt(e,t,a,l),t.child}var lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(e){return{baseLanes:e,cachePool:Zd()}}function oc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ct),e}function im(e,t,a){var l=t.pendingProps,r=!1,c=(t.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),m&&(r=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(r?qn(t):Yn(),(e=Ce)?(e=dp(e,Bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ln!==null?{id:$t,overflow:Wt}:null,retryLane:536870912,hydrationErrors:null},a=Bd(e),a.return=t,t.child=a,We=t,Ce=null)):e=null,e===null)throw _n(t);return Gc(e)?t.lanes=32:t.lanes=536870912,null}var b=l.children;return l=l.fallback,r?(Yn(),r=t.mode,b=Ls({mode:"hidden",children:b},r),l=pa(l,r,a,null),b.return=t,l.return=t,b.sibling=l,t.child=b,l=t.child,l.memoizedState=sc(a),l.childLanes=oc(e,m,a),t.memoizedState=lc,al(null,l)):(qn(t),rc(t,b))}var j=e.memoizedState;if(j!==null&&(b=j.dehydrated,b!==null)){if(c)t.flags&256?(qn(t),t.flags&=-257,t=cc(e,t,a)):t.memoizedState!==null?(Yn(),t.child=e.child,t.flags|=128,t=null):(Yn(),b=l.fallback,r=t.mode,l=Ls({mode:"visible",children:l.children},r),b=pa(b,r,a,null),b.flags|=2,l.return=t,b.return=t,l.sibling=b,t.child=l,ja(t,e.child,null,a),l=t.child,l.memoizedState=sc(a),l.childLanes=oc(e,m,a),t.memoizedState=lc,t=al(null,l));else if(qn(t),Gc(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var M=m.dgst;m=M,l=Error(o(419)),l.stack="",l.digest=m,Ki({value:l,source:null,stack:null}),t=cc(e,t,a)}else if(Xe||Ja(e,t,a,!1),m=(a&e.childLanes)!==0,Xe||m){if(m=we,m!==null&&(l=Xf(m,a),l!==0&&l!==j.retryLane))throw j.retryLane=l,ma(e,l),xt(m,e,l),ac;Yc(b)||Gs(),t=cc(e,t,a)}else Yc(b)?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,Ce=kt(b.nextSibling),We=t,me=!0,Vn=null,Bt=!1,e!==null&&Hd(t,e),t=rc(t,l.children),t.flags|=4096);return t}return r?(Yn(),b=l.fallback,r=t.mode,j=e.child,M=j.sibling,l=fn(j,{mode:"hidden",children:l.children}),l.subtreeFlags=j.subtreeFlags&65011712,M!==null?b=fn(M,b):(b=pa(b,r,a,null),b.flags|=2),b.return=t,l.return=t,l.sibling=b,t.child=l,al(null,l),l=t.child,b=e.child.memoizedState,b===null?b=sc(a):(r=b.cachePool,r!==null?(j=Ye._currentValue,r=r.parent!==j?{parent:j,pool:j}:r):r=Zd(),b={baseLanes:b.baseLanes|a,cachePool:r}),l.memoizedState=b,l.childLanes=oc(e,m,a),t.memoizedState=lc,al(e.child,l)):(qn(t),a=e.child,e=a.sibling,a=fn(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function rc(e,t){return t=Ls({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ls(e,t){return e=Et(22,e,null,t),e.lanes=0,e}function cc(e,t,a){return ja(t,e.child,null,a),e=rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lm(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Er(e.return,t,a)}function uc(e,t,a,l,r,c){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:r,treeForkCount:c}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=r,m.treeForkCount=c)}function sm(e,t,a){var l=t.pendingProps,r=l.revealOrder,c=l.tail;l=l.children;var m=Ue.current,b=(m&2)!==0;if(b?(m=m&1|2,t.flags|=128):m&=1,Q(Ue,m),tt(e,t,l,a),l=me?Xi:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lm(e,a,t);else if(e.tag===19)lm(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=t.child,r=null;a!==null;)e=a.alternate,e!==null&&js(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),uc(t,!1,r,a,c,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&js(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}uc(t,!0,a,null,c,l);break;case"together":uc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function yn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Kn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Ja(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=fn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=fn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function fc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ms(e)))}function Qx(e,t,a){switch(t.tag){case 3:rt(t,t.stateNode.containerInfo),Bn(t,Ye,e.memoizedState.cache),ga();break;case 27:case 5:Mi(t);break;case 4:rt(t,t.stateNode.containerInfo);break;case 10:Bn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,_r(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(qn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?im(e,t,a):(qn(t),e=yn(e,t,a),e!==null?e.sibling:null);qn(t);break;case 19:var r=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Ja(e,t,a,!1),l=(a&t.childLanes)!==0),r){if(l)return sm(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Q(Ue,Ue.current),l)break;return null;case 22:return t.lanes=0,$h(e,t,a,t.pendingProps);case 24:Bn(t,Ye,e.memoizedState.cache)}return yn(e,t,a)}function om(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!fc(e,a)&&(t.flags&128)===0)return Xe=!1,Qx(e,t,a);Xe=(e.flags&131072)!==0}else Xe=!1,me&&(t.flags&1048576)!==0&&kd(t,Xi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=ba(t.elementType),t.type=e,typeof e=="function")gr(e)?(l=Ea(e,l),t.tag=1,t=nm(null,t,e,l,a)):(t.tag=0,t=ic(null,t,e,l,a));else{if(e!=null){var r=e.$$typeof;if(r===J){t.tag=11,t=Fh(null,t,e,l,a);break e}else if(r===Z){t.tag=14,t=Jh(null,t,e,l,a);break e}}throw t=Dt(e)||e,Error(o(306,t,""))}}return t;case 0:return ic(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,r=Ea(l,t.pendingProps),nm(e,t,l,r,a);case 3:e:{if(rt(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var c=t.memoizedState;r=c.element,Rr(e,t),$i(t,l,null,a);var m=t.memoizedState;if(l=m.cache,Bn(t,Ye,l),l!==c.cache&&Nr(t,[Ye],a,!0),Ii(),l=m.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=am(e,t,l,a);break e}else if(l!==r){r=Lt(Error(o(424)),t),Ki(r),t=am(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ce=kt(e.firstChild),We=t,me=!0,Vn=null,Bt=!0,a=$d(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ga(),l===r){t=yn(e,t,a);break e}tt(e,t,l,a)}t=t.child}return t;case 26:return Os(e,t),e===null?(a=vp(t.type,null,t.pendingProps,null))?t.memoizedState=a:me||(a=t.type,e=t.pendingProps,l=Js(re.current).createElement(a),l[$e]=t,l[ht]=e,nt(l,a,e),Je(l),t.stateNode=l):t.memoizedState=vp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Mi(t),e===null&&me&&(l=t.stateNode=pp(t.type,t.pendingProps,re.current),We=t,Bt=!0,r=Ce,Jn(t.type)?(Xc=r,Ce=kt(l.firstChild)):Ce=r),tt(e,t,t.pendingProps.children,a),Os(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((r=l=Ce)&&(l=Tb(l,t.type,t.pendingProps,Bt),l!==null?(t.stateNode=l,We=t,Ce=kt(l.firstChild),Bt=!1,r=!0):r=!1),r||_n(t)),Mi(t),r=t.type,c=t.pendingProps,m=e!==null?e.memoizedProps:null,l=c.children,kc(r,c)?l=null:m!==null&&kc(r,m)&&(t.flags|=32),t.memoizedState!==null&&(r=Ur(e,t,Ux,null,null,a),vl._currentValue=r),Os(e,t),tt(e,t,l,a),t.child;case 6:return e===null&&me&&((e=a=Ce)&&(a=Eb(a,t.pendingProps,Bt),a!==null?(t.stateNode=a,We=t,Ce=null,e=!0):e=!1),e||_n(t)),null;case 13:return im(e,t,a);case 4:return rt(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ja(t,null,l,a):tt(e,t,l,a),t.child;case 11:return Fh(e,t,t.type,t.pendingProps,a);case 7:return tt(e,t,t.pendingProps,a),t.child;case 8:return tt(e,t,t.pendingProps.children,a),t.child;case 12:return tt(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Bn(t,t.type,l.value),tt(e,t,l.children,a),t.child;case 9:return r=t.type._context,l=t.pendingProps.children,va(t),r=et(r),l=l(r),t.flags|=1,tt(e,t,l,a),t.child;case 14:return Jh(e,t,t.type,t.pendingProps,a);case 15:return Ih(e,t,t.type,t.pendingProps,a);case 19:return sm(e,t,a);case 31:return Zx(e,t,a);case 22:return $h(e,t,a,t.pendingProps);case 24:return va(t),l=et(Ye),e===null?(r=Cr(),r===null&&(r=we,c=Ar(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=a),r=c),t.memoizedState={parent:l,cache:r},Dr(t),Bn(t,Ye,r)):((e.lanes&a)!==0&&(Rr(e,t),$i(t,null,null,a),Ii()),r=e.memoizedState,c=t.memoizedState,r.parent!==l?(r={parent:l,cache:l},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Bn(t,Ye,l)):(l=c.cache,Bn(t,Ye,l),l!==r.cache&&Nr(t,[Ye],a,!0))),tt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function vn(e){e.flags|=4}function dc(e,t,a,l,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Lm())e.flags|=8192;else throw Sa=vs,Mr}else e.flags&=-16777217}function rm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tp(t))if(Lm())e.flags|=8192;else throw Sa=vs,Mr}function Vs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qf():536870912,e.lanes|=t,ri|=t)}function il(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Px(e,t,a){var l=t.pendingProps;switch(br(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),mn(Ye),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fa(t)?vn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,jr())),Me(t),null;case 26:var r=t.type,c=t.memoizedState;return e===null?(vn(t),c!==null?(Me(t),rm(t,c)):(Me(t),dc(t,r,null,l,a))):c?c!==e.memoizedState?(vn(t),Me(t),rm(t,c)):(Me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&vn(t),Me(t),dc(t,r,e,l,a)),null;case 27:if(Zl(t),a=re.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&vn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Me(t),null}e=I.current,Fa(t)?qd(t):(e=pp(r,l,a),t.stateNode=e,vn(t))}return Me(t),null;case 5:if(Zl(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&vn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Me(t),null}if(c=I.current,Fa(t))qd(t);else{var m=Js(re.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?m.createElement("select",{is:l.is}):m.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?m.createElement(r,{is:l.is}):m.createElement(r)}}c[$e]=t,c[ht]=l;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=c;e:switch(nt(c,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&vn(t)}}return Me(t),dc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&vn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=re.current,Fa(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,r=We,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[$e]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||ip(e.nodeValue,a)),e||_n(t,!0)}else e=Js(e).createTextNode(l),e[$e]=t,t.stateNode=e}return Me(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Fa(t),a!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[$e]=t}else ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),e=!1}else a=jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(At(t),t):(At(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Me(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Fa(t),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[$e]=t}else ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),r=!1}else r=jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(At(t),t):(At(t),null)}return At(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==r&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Vs(t,t.updateQueue),Me(t),null);case 4:return Be(),e===null&&Lc(t.stateNode.containerInfo),Me(t),null;case 10:return mn(t.type),Me(t),null;case 19:if(Y(Ue),l=t.memoizedState,l===null)return Me(t),null;if(r=(t.flags&128)!==0,c=l.rendering,c===null)if(r)il(l,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=js(e),c!==null){for(t.flags|=128,il(l,!1),e=c.updateQueue,t.updateQueue=e,Vs(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)_d(a,e),a=a.sibling;return Q(Ue,Ue.current&1|2),me&&dn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&bt()>Hs&&(t.flags|=128,r=!0,il(l,!1),t.lanes=4194304)}else{if(!r)if(e=js(c),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Vs(t,e),il(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!me)return Me(t),null}else 2*bt()-l.renderingStartTime>Hs&&a!==536870912&&(t.flags|=128,r=!0,il(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(e=l.last,e!==null?e.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=bt(),e.sibling=null,a=Ue.current,Q(Ue,r?a&1|2:a&1),me&&dn(t,l.treeForkCount),e):(Me(t),null);case 22:case 23:return At(t),Vr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),a=t.updateQueue,a!==null&&Vs(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Y(xa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),mn(Ye),Me(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Fx(e,t){switch(br(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(Ye),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Zl(t),null;case 31:if(t.memoizedState!==null){if(At(t),t.alternate===null)throw Error(o(340));ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(At(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Ue),null;case 4:return Be(),null;case 10:return mn(t.type),null;case 22:case 23:return At(t),Vr(),e!==null&&Y(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return mn(Ye),null;case 25:return null;default:return null}}function cm(e,t){switch(br(t),t.tag){case 3:mn(Ye),Be();break;case 26:case 27:case 5:Zl(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&At(t);break;case 13:At(t);break;case 19:Y(Ue);break;case 10:mn(t.type);break;case 22:case 23:At(t),Vr(),e!==null&&Y(xa);break;case 24:mn(Ye)}}function ll(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){l=void 0;var c=a.create,m=a.inst;l=c(),m.destroy=l}a=a.next}while(a!==r)}}catch(b){je(t,t.return,b)}}function Gn(e,t,a){try{var l=t.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var c=r.next;l=c;do{if((l.tag&e)===e){var m=l.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,r=t;var j=a,M=b;try{M()}catch(V){je(r,j,V)}}}l=l.next}while(l!==c)}}catch(V){je(t,t.return,V)}}function um(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{eh(t,a)}catch(l){je(e,e.return,l)}}}function fm(e,t,a){a.props=Ea(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){je(e,t,l)}}function sl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(r){je(e,t,r)}}function en(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(r){je(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){je(e,t,r)}else a.current=null}function dm(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(r){je(e,e.return,r)}}function hc(e,t,a){try{var l=e.stateNode;yb(l,e.type,a,t),l[ht]=t}catch(r){je(e,e.return,r)}}function hm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Jn(e.type)||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=cn));else if(l!==4&&(l===27&&Jn(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(pc(e,t,a),e=e.sibling;e!==null;)pc(e,t,a),e=e.sibling}function _s(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Jn(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(_s(e,t,a),e=e.sibling;e!==null;)_s(e,t,a),e=e.sibling}function mm(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);nt(t,l,a),t[$e]=e,t[ht]=a}catch(c){je(e,e.return,c)}}var xn=!1,Ke=!1,gc=!1,pm=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Jx(e,t){if(e=e.containerInfo,Bc=ao,e=wd(e),cr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var r=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var m=0,b=-1,j=-1,M=0,V=0,q=e,D=null;t:for(;;){for(var z;q!==a||r!==0&&q.nodeType!==3||(b=m+r),q!==c||l!==0&&q.nodeType!==3||(j=m+l),q.nodeType===3&&(m+=q.nodeValue.length),(z=q.firstChild)!==null;)D=q,q=z;for(;;){if(q===e)break t;if(D===a&&++M===r&&(b=m),D===c&&++V===l&&(j=m),(z=q.nextSibling)!==null)break;q=D,D=q.parentNode}q=z}a=b===-1||j===-1?null:{start:b,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:e,selectionRange:a},ao=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=t,r=c.memoizedProps,c=c.memoizedState,l=a.stateNode;try{var F=Ea(a.type,r);e=l.getSnapshotBeforeUpdate(F,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(ne){je(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)qc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function gm(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Sn(e,a),l&4&&ll(5,a);break;case 1:if(Sn(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){je(a,a.return,m)}else{var r=Ea(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){je(a,a.return,m)}}l&64&&um(a),l&512&&sl(a,a.return);break;case 3:if(Sn(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{eh(e,t)}catch(m){je(a,a.return,m)}}break;case 27:t===null&&l&4&&mm(a);case 26:case 5:Sn(e,a),t===null&&l&4&&dm(a),l&512&&sl(a,a.return);break;case 12:Sn(e,a);break;case 31:Sn(e,a),l&4&&xm(e,a);break;case 13:Sn(e,a),l&4&&bm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lb.bind(null,a),Nb(e,a))));break;case 22:if(l=a.memoizedState!==null||xn,!l){t=t!==null&&t.memoizedState!==null||Ke,r=xn;var c=Ke;xn=l,(Ke=t)&&!c?jn(e,a,(a.subtreeFlags&8772)!==0):Sn(e,a),xn=r,Ke=c}break;case 30:break;default:Sn(e,a)}}function ym(e){var t=e.alternate;t!==null&&(e.alternate=null,ym(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Zo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,pt=!1;function bn(e,t,a){for(a=a.child;a!==null;)vm(e,t,a),a=a.sibling}function vm(e,t,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Di,a)}catch{}switch(a.tag){case 26:Ke||en(a,t),bn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ke||en(a,t);var l=Re,r=pt;Jn(a.type)&&(Re=a.stateNode,pt=!1),bn(e,t,a),pl(a.stateNode),Re=l,pt=r;break;case 5:Ke||en(a,t);case 6:if(l=Re,r=pt,Re=null,bn(e,t,a),Re=l,pt=r,Re!==null)if(pt)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(a.stateNode)}catch(c){je(a,t,c)}else try{Re.removeChild(a.stateNode)}catch(c){je(a,t,c)}break;case 18:Re!==null&&(pt?(e=Re,up(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),gi(e)):up(Re,a.stateNode));break;case 4:l=Re,r=pt,Re=a.stateNode.containerInfo,pt=!0,bn(e,t,a),Re=l,pt=r;break;case 0:case 11:case 14:case 15:Gn(2,a,t),Ke||Gn(4,a,t),bn(e,t,a);break;case 1:Ke||(en(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&fm(a,t,l)),bn(e,t,a);break;case 21:bn(e,t,a);break;case 22:Ke=(l=Ke)||a.memoizedState!==null,bn(e,t,a),Ke=l;break;default:bn(e,t,a)}}function xm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gi(e)}catch(a){je(t,t.return,a)}}}function bm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gi(e)}catch(a){je(t,t.return,a)}}function Ix(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pm),t;default:throw Error(o(435,e.tag))}}function Bs(e,t){var a=Ix(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var r=sb.bind(null,e,l);l.then(r,r)}})}function gt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var r=a[l],c=e,m=t,b=m;e:for(;b!==null;){switch(b.tag){case 27:if(Jn(b.type)){Re=b.stateNode,pt=!1;break e}break;case 5:Re=b.stateNode,pt=!1;break e;case 3:case 4:Re=b.stateNode.containerInfo,pt=!0;break e}b=b.return}if(Re===null)throw Error(o(160));vm(c,m,r),Re=null,pt=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sm(t,e),t=t.sibling}var Qt=null;function Sm(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gt(t,e),yt(e),l&4&&(Gn(3,e,e.return),ll(3,e),Gn(5,e,e.return));break;case 1:gt(t,e),yt(e),l&512&&(Ke||a===null||en(a,a.return)),l&64&&xn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var r=Qt;if(gt(t,e),yt(e),l&512&&(Ke||a===null||en(a,a.return)),l&4){var c=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":c=r.getElementsByTagName("title")[0],(!c||c[Oi]||c[$e]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(l),r.head.insertBefore(c,r.querySelector("head > title"))),nt(c,l,a),c[$e]=e,Je(c),l=c;break e;case"link":var m=Sp("link","href",r).get(l+(a.href||""));if(m){for(var b=0;b<m.length;b++)if(c=m[b],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(b,1);break t}}c=r.createElement(l),nt(c,l,a),r.head.appendChild(c);break;case"meta":if(m=Sp("meta","content",r).get(l+(a.content||""))){for(b=0;b<m.length;b++)if(c=m[b],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(b,1);break t}}c=r.createElement(l),nt(c,l,a),r.head.appendChild(c);break;default:throw Error(o(468,l))}c[$e]=e,Je(c),l=c}e.stateNode=l}else jp(r,e.type,e.stateNode);else e.stateNode=bp(r,l,e.memoizedProps);else c!==l?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,l===null?jp(r,e.type,e.stateNode):bp(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&hc(e,e.memoizedProps,a.memoizedProps)}break;case 27:gt(t,e),yt(e),l&512&&(Ke||a===null||en(a,a.return)),a!==null&&l&4&&hc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(gt(t,e),yt(e),l&512&&(Ke||a===null||en(a,a.return)),e.flags&32){r=e.stateNode;try{ka(r,"")}catch(F){je(e,e.return,F)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,hc(e,r,a!==null?a.memoizedProps:r)),l&1024&&(gc=!0);break;case 6:if(gt(t,e),yt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(F){je(e,e.return,F)}}break;case 3:if(Ws=null,r=Qt,Qt=Is(t.containerInfo),gt(t,e),Qt=r,yt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{gi(t.containerInfo)}catch(F){je(e,e.return,F)}gc&&(gc=!1,jm(e));break;case 4:l=Qt,Qt=Is(e.stateNode.containerInfo),gt(t,e),yt(e),Qt=l;break;case 12:gt(t,e),yt(e);break;case 31:gt(t,e),yt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bs(e,l)));break;case 13:gt(t,e),yt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ks=bt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bs(e,l)));break;case 22:r=e.memoizedState!==null;var j=a!==null&&a.memoizedState!==null,M=xn,V=Ke;if(xn=M||r,Ke=V||j,gt(t,e),Ke=V,xn=M,yt(e),l&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(a===null||j||xn||Ke||Na(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){j=a=t;try{if(c=j.stateNode,r)m=c.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=j.stateNode;var q=j.memoizedProps.style,D=q!=null&&q.hasOwnProperty("display")?q.display:null;b.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(F){je(j,j.return,F)}}}else if(t.tag===6){if(a===null){j=t;try{j.stateNode.nodeValue=r?"":j.memoizedProps}catch(F){je(j,j.return,F)}}}else if(t.tag===18){if(a===null){j=t;try{var z=j.stateNode;r?fp(z,!0):fp(j.stateNode,!1)}catch(F){je(j,j.return,F)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Bs(e,a))));break;case 19:gt(t,e),yt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bs(e,l)));break;case 30:break;case 21:break;default:gt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(hm(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var r=a.stateNode,c=mc(e);_s(e,c,r);break;case 5:var m=a.stateNode;a.flags&32&&(ka(m,""),a.flags&=-33);var b=mc(e);_s(e,b,m);break;case 3:case 4:var j=a.stateNode.containerInfo,M=mc(e);pc(e,M,j);break;default:throw Error(o(161))}}catch(V){je(e,e.return,V)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;jm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gm(e,t.alternate,t),t=t.sibling}function Na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gn(4,t,t.return),Na(t);break;case 1:en(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&fm(t,t.return,a),Na(t);break;case 27:pl(t.stateNode);case 26:case 5:en(t,t.return),Na(t);break;case 22:t.memoizedState===null&&Na(t);break;case 30:Na(t);break;default:Na(t)}e=e.sibling}}function jn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,r=e,c=t,m=c.flags;switch(c.tag){case 0:case 11:case 15:jn(r,c,a),ll(4,c);break;case 1:if(jn(r,c,a),l=c,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(M){je(l,l.return,M)}if(l=c,r=l.updateQueue,r!==null){var b=l.stateNode;try{var j=r.shared.hiddenCallbacks;if(j!==null)for(r.shared.hiddenCallbacks=null,r=0;r<j.length;r++)Wd(j[r],b)}catch(M){je(l,l.return,M)}}a&&m&64&&um(c),sl(c,c.return);break;case 27:mm(c);case 26:case 5:jn(r,c,a),a&&l===null&&m&4&&dm(c),sl(c,c.return);break;case 12:jn(r,c,a);break;case 31:jn(r,c,a),a&&m&4&&xm(r,c);break;case 13:jn(r,c,a),a&&m&4&&bm(r,c);break;case 22:c.memoizedState===null&&jn(r,c,a),sl(c,c.return);break;case 30:break;default:jn(r,c,a)}t=t.sibling}}function yc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zi(a))}function vc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zi(e))}function Pt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tm(e,t,a,l),t=t.sibling}function Tm(e,t,a,l){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(e,t,a,l),r&2048&&ll(9,t);break;case 1:Pt(e,t,a,l);break;case 3:Pt(e,t,a,l),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zi(e)));break;case 12:if(r&2048){Pt(e,t,a,l),e=t.stateNode;try{var c=t.memoizedProps,m=c.id,b=c.onPostCommit;typeof b=="function"&&b(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){je(t,t.return,j)}}else Pt(e,t,a,l);break;case 31:Pt(e,t,a,l);break;case 13:Pt(e,t,a,l);break;case 23:break;case 22:c=t.stateNode,m=t.alternate,t.memoizedState!==null?c._visibility&2?Pt(e,t,a,l):ol(e,t):c._visibility&2?Pt(e,t,a,l):(c._visibility|=2,li(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),r&2048&&yc(m,t);break;case 24:Pt(e,t,a,l),r&2048&&vc(t.alternate,t);break;default:Pt(e,t,a,l)}}function li(e,t,a,l,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,m=t,b=a,j=l,M=m.flags;switch(m.tag){case 0:case 11:case 15:li(c,m,b,j,r),ll(8,m);break;case 23:break;case 22:var V=m.stateNode;m.memoizedState!==null?V._visibility&2?li(c,m,b,j,r):ol(c,m):(V._visibility|=2,li(c,m,b,j,r)),r&&M&2048&&yc(m.alternate,m);break;case 24:li(c,m,b,j,r),r&&M&2048&&vc(m.alternate,m);break;default:li(c,m,b,j,r)}t=t.sibling}}function ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,r=l.flags;switch(l.tag){case 22:ol(a,l),r&2048&&yc(l.alternate,l);break;case 24:ol(a,l),r&2048&&vc(l.alternate,l);break;default:ol(a,l)}t=t.sibling}}var rl=8192;function si(e,t,a){if(e.subtreeFlags&rl)for(e=e.child;e!==null;)Em(e,t,a),e=e.sibling}function Em(e,t,a){switch(e.tag){case 26:si(e,t,a),e.flags&rl&&e.memoizedState!==null&&Bb(a,Qt,e.memoizedState,e.memoizedProps);break;case 5:si(e,t,a);break;case 3:case 4:var l=Qt;Qt=Is(e.stateNode.containerInfo),si(e,t,a),Qt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=rl,rl=16777216,si(e,t,a),rl=l):si(e,t,a));break;default:si(e,t,a)}}function Nm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function cl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ie=l,wm(l,e)}Nm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Am(e),e=e.sibling}function Am(e){switch(e.tag){case 0:case 11:case 15:cl(e),e.flags&2048&&Gn(9,e,e.return);break;case 3:cl(e);break;case 12:cl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Us(e)):cl(e);break;default:cl(e)}}function Us(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ie=l,wm(l,e)}Nm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gn(8,t,t.return),Us(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Us(t));break;default:Us(t)}e=e.sibling}}function wm(e,t){for(;Ie!==null;){var a=Ie;switch(a.tag){case 0:case 11:case 15:Gn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zi(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ie=l;else e:for(a=e;Ie!==null;){l=Ie;var r=l.sibling,c=l.return;if(ym(l),l===a){Ie=null;break e}if(r!==null){r.return=c,Ie=r;break e}Ie=c}}}var $x={getCacheForType:function(e){var t=et(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return et(Ye).controller.signal}},Wx=typeof WeakMap=="function"?WeakMap:Map,ve=0,we=null,ce=null,de=0,Se=0,wt=null,Xn=!1,oi=!1,xc=!1,Tn=0,Ve=0,Kn=0,Aa=0,bc=0,Ct=0,ri=0,ul=null,vt=null,Sc=!1,ks=0,Cm=0,Hs=1/0,qs=null,Zn=null,Pe=0,Qn=null,ci=null,En=0,jc=0,Tc=null,Mm=null,fl=0,Ec=null;function Mt(){return(ve&2)!==0&&de!==0?de&-de:B.T!==null?Dc():Kf()}function Dm(){if(Ct===0)if((de&536870912)===0||me){var e=Fl;Fl<<=1,(Fl&3932160)===0&&(Fl=262144),Ct=e}else Ct=536870912;return e=Nt.current,e!==null&&(e.flags|=32),Ct}function xt(e,t,a){(e===we&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(ui(e,0),Pn(e,de,Ct,!1)),zi(e,a),((ve&2)===0||e!==we)&&(e===we&&((ve&2)===0&&(Aa|=a),Ve===4&&Pn(e,de,Ct,!1)),tn(e))}function Rm(e,t,a){if((ve&6)!==0)throw Error(o(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ri(e,t),r=l?nb(e,t):Ac(e,t,!0),c=l;do{if(r===0){oi&&!l&&Pn(e,t,0,!1);break}else{if(a=e.current.alternate,c&&!eb(a)){r=Ac(e,t,!1),c=!1;continue}if(r===2){if(c=t,e.errorRecoveryDisabledLanes&c)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var b=e;r=ul;var j=b.current.memoizedState.isDehydrated;if(j&&(ui(b,m).flags|=256),m=Ac(b,m,!1),m!==2){if(xc&&!j){b.errorRecoveryDisabledLanes|=c,Aa|=c,r=4;break e}c=vt,vt=r,c!==null&&(vt===null?vt=c:vt.push.apply(vt,c))}r=m}if(c=!1,r!==2)continue}}if(r===1){ui(e,0),Pn(e,t,0,!0);break}e:{switch(l=e,c=r,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Pn(l,t,Ct,!Xn);break e;case 2:vt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=ks+300-bt(),10<r)){if(Pn(l,t,Ct,!Xn),Il(l,0,!0)!==0)break e;En=t,l.timeoutHandle=rp(zm.bind(null,l,a,vt,qs,Sc,t,Ct,Aa,ri,Xn,c,"Throttled",-0,0),r);break e}zm(l,a,vt,qs,Sc,t,Ct,Aa,ri,Xn,c,null,-0,0)}}break}while(!0);tn(e)}function zm(e,t,a,l,r,c,m,b,j,M,V,q,D,z){if(e.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Em(t,c,q);var F=(c&62914560)===c?ks-bt():(c&4194048)===c?Cm-bt():0;if(F=Ub(q,F),F!==null){En=c,e.cancelPendingCommit=F(Hm.bind(null,e,t,c,a,l,r,m,b,j,V,q,null,D,z)),Pn(e,c,m,!M);return}}Hm(e,t,c,a,l,r,m,b,j)}function eb(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var r=a[l],c=r.getSnapshot;r=r.value;try{if(!Tt(c(),r))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pn(e,t,a,l){t&=~bc,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var r=t;0<r;){var c=31-jt(r),m=1<<c;l[c]=-1,r&=~m}a!==0&&Yf(e,a,t)}function Ys(){return(ve&6)===0?(dl(0),!1):!0}function Nc(){if(ce!==null){if(Se===0)var e=ce.return;else e=ce,hn=ya=null,qr(e),ei=null,Pi=0,e=ce;for(;e!==null;)cm(e.alternate,e),e=e.return;ce=null}}function ui(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,bb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),En=0,Nc(),we=e,ce=a=fn(e.current,null),de=t,Se=0,wt=null,Xn=!1,oi=Ri(e,t),xc=!1,ri=Ct=bc=Aa=Kn=Ve=0,vt=ul=null,Sc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var r=31-jt(l),c=1<<r;t|=e[r],l&=~c}return Tn=t,cs(),a}function Om(e,t){le=null,B.H=nl,t===Wa||t===ys?(t=Fd(),Se=3):t===Mr?(t=Fd(),Se=4):Se=t===ac?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,wt=t,ce===null&&(Ve=1,Rs(e,Lt(t,e.current)))}function Lm(){var e=Nt.current;return e===null?!0:(de&4194048)===de?Ut===null:(de&62914560)===de||(de&536870912)!==0?e===Ut:!1}function Vm(){var e=B.H;return B.H=nl,e===null?nl:e}function _m(){var e=B.A;return B.A=$x,e}function Gs(){Ve=4,Xn||(de&4194048)!==de&&Nt.current!==null||(oi=!0),(Kn&134217727)===0&&(Aa&134217727)===0||we===null||Pn(we,de,Ct,!1)}function Ac(e,t,a){var l=ve;ve|=2;var r=Vm(),c=_m();(we!==e||de!==t)&&(qs=null,ui(e,t)),t=!1;var m=Ve;e:do try{if(Se!==0&&ce!==null){var b=ce,j=wt;switch(Se){case 8:Nc(),m=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var M=Se;if(Se=0,wt=null,fi(e,b,j,M),a&&oi){m=0;break e}break;default:M=Se,Se=0,wt=null,fi(e,b,j,M)}}tb(),m=Ve;break}catch(V){Om(e,V)}while(!0);return t&&e.shellSuspendCounter++,hn=ya=null,ve=l,B.H=r,B.A=c,ce===null&&(we=null,de=0,cs()),m}function tb(){for(;ce!==null;)Bm(ce)}function nb(e,t){var a=ve;ve|=2;var l=Vm(),r=_m();we!==e||de!==t?(qs=null,Hs=bt()+500,ui(e,t)):oi=Ri(e,t);e:do try{if(Se!==0&&ce!==null){t=ce;var c=wt;t:switch(Se){case 1:Se=0,wt=null,fi(e,t,c,1);break;case 2:case 9:if(Qd(c)){Se=0,wt=null,Um(t);break}t=function(){Se!==2&&Se!==9||we!==e||(Se=7),tn(e)},c.then(t,t);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:Qd(c)?(Se=0,wt=null,Um(t)):(Se=0,wt=null,fi(e,t,c,7));break;case 5:var m=null;switch(ce.tag){case 26:m=ce.memoizedState;case 5:case 27:var b=ce;if(m?Tp(m):b.stateNode.complete){Se=0,wt=null;var j=b.sibling;if(j!==null)ce=j;else{var M=b.return;M!==null?(ce=M,Xs(M)):ce=null}break t}}Se=0,wt=null,fi(e,t,c,5);break;case 6:Se=0,wt=null,fi(e,t,c,6);break;case 8:Nc(),Ve=6;break e;default:throw Error(o(462))}}ab();break}catch(V){Om(e,V)}while(!0);return hn=ya=null,B.H=l,B.A=r,ve=a,ce!==null?0:(we=null,de=0,cs(),Ve)}function ab(){for(;ce!==null&&!Av();)Bm(ce)}function Bm(e){var t=om(e.alternate,e,Tn);e.memoizedProps=e.pendingProps,t===null?Xs(e):ce=t}function Um(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=tm(a,t,t.pendingProps,t.type,void 0,de);break;case 11:t=tm(a,t,t.pendingProps,t.type.render,t.ref,de);break;case 5:qr(t);default:cm(a,t),t=ce=_d(t,Tn),t=om(a,t,Tn)}e.memoizedProps=e.pendingProps,t===null?Xs(e):ce=t}function fi(e,t,a,l){hn=ya=null,qr(t),ei=null,Pi=0;var r=t.return;try{if(Kx(e,r,t,a,de)){Ve=1,Rs(e,Lt(a,e.current)),ce=null;return}}catch(c){if(r!==null)throw ce=r,c;Ve=1,Rs(e,Lt(a,e.current)),ce=null;return}t.flags&32768?(me||l===1?e=!0:oi||(de&536870912)!==0?e=!1:(Xn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Nt.current,l!==null&&l.tag===13&&(l.flags|=16384))),km(t,e)):Xs(t)}function Xs(e){var t=e;do{if((t.flags&32768)!==0){km(t,Xn);return}e=t.return;var a=Px(t.alternate,t,Tn);if(a!==null){ce=a;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);Ve===0&&(Ve=5)}function km(e,t){do{var a=Fx(e.alternate,e);if(a!==null){a.flags&=32767,ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ce=e;return}ce=e=a}while(e!==null);Ve=6,ce=null}function Hm(e,t,a,l,r,c,m,b,j){e.cancelPendingCommit=null;do Ks();while(Pe!==0);if((ve&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=mr,_v(e,a,c,m,b,j),e===we&&(ce=we=null,de=0),ci=t,Qn=e,En=a,jc=c,Tc=r,Mm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ob(Ql,function(){return Km(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,r=G.p,G.p=2,m=ve,ve|=4;try{Jx(e,t,a)}finally{ve=m,G.p=r,B.T=l}}Pe=1,qm(),Ym(),Gm()}}function qm(){if(Pe===1){Pe=0;var e=Qn,t=ci,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var l=G.p;G.p=2;var r=ve;ve|=4;try{Sm(t,e);var c=Uc,m=wd(e.containerInfo),b=c.focusedElem,j=c.selectionRange;if(m!==b&&b&&b.ownerDocument&&Ad(b.ownerDocument.documentElement,b)){if(j!==null&&cr(b)){var M=j.start,V=j.end;if(V===void 0&&(V=M),"selectionStart"in b)b.selectionStart=M,b.selectionEnd=Math.min(V,b.value.length);else{var q=b.ownerDocument||document,D=q&&q.defaultView||window;if(D.getSelection){var z=D.getSelection(),F=b.textContent.length,ne=Math.min(j.start,F),Ae=j.end===void 0?ne:Math.min(j.end,F);!z.extend&&ne>Ae&&(m=Ae,Ae=ne,ne=m);var w=Nd(b,ne),E=Nd(b,Ae);if(w&&E&&(z.rangeCount!==1||z.anchorNode!==w.node||z.anchorOffset!==w.offset||z.focusNode!==E.node||z.focusOffset!==E.offset)){var C=q.createRange();C.setStart(w.node,w.offset),z.removeAllRanges(),ne>Ae?(z.addRange(C),z.extend(E.node,E.offset)):(C.setEnd(E.node,E.offset),z.addRange(C))}}}}for(q=[],z=b;z=z.parentNode;)z.nodeType===1&&q.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<q.length;b++){var k=q[b];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}ao=!!Bc,Uc=Bc=null}finally{ve=r,G.p=l,B.T=a}}e.current=t,Pe=2}}function Ym(){if(Pe===2){Pe=0;var e=Qn,t=ci,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var l=G.p;G.p=2;var r=ve;ve|=4;try{gm(e,t.alternate,t)}finally{ve=r,G.p=l,B.T=a}}Pe=3}}function Gm(){if(Pe===4||Pe===3){Pe=0,wv();var e=Qn,t=ci,a=En,l=Mm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pe=5:(Pe=0,ci=Qn=null,Xm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Zn=null),Xo(a),t=t.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Di,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=B.T,r=G.p,G.p=2,B.T=null;try{for(var c=e.onRecoverableError,m=0;m<l.length;m++){var b=l[m];c(b.value,{componentStack:b.stack})}}finally{B.T=t,G.p=r}}(En&3)!==0&&Ks(),tn(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===Ec?fl++:(fl=0,Ec=e):fl=0,dl(0)}}function Xm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Zi(t)))}function Ks(){return qm(),Ym(),Gm(),Km()}function Km(){if(Pe!==5)return!1;var e=Qn,t=jc;jc=0;var a=Xo(En),l=B.T,r=G.p;try{G.p=32>a?32:a,B.T=null,a=Tc,Tc=null;var c=Qn,m=En;if(Pe=0,ci=Qn=null,En=0,(ve&6)!==0)throw Error(o(331));var b=ve;if(ve|=4,Am(c.current),Tm(c,c.current,m,a),ve=b,dl(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Di,c)}catch{}return!0}finally{G.p=r,B.T=l,Xm(e,t)}}function Zm(e,t,a){t=Lt(a,t),t=nc(e.stateNode,t,2),e=Hn(e,t,2),e!==null&&(zi(e,2),tn(e))}function je(e,t,a){if(e.tag===3)Zm(e,e,a);else for(;t!==null;){if(t.tag===3){Zm(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Zn===null||!Zn.has(l))){e=Lt(a,e),a=Qh(2),l=Hn(t,a,2),l!==null&&(Ph(a,l,t,e),zi(l,2),tn(l));break}}t=t.return}}function wc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Wx;var r=new Set;l.set(t,r)}else r=l.get(t),r===void 0&&(r=new Set,l.set(t,r));r.has(a)||(xc=!0,r.add(a),e=ib.bind(null,e,t,a),t.then(e,e))}function ib(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,we===e&&(de&a)===a&&(Ve===4||Ve===3&&(de&62914560)===de&&300>bt()-ks?(ve&2)===0&&ui(e,0):bc|=a,ri===de&&(ri=0)),tn(e)}function Qm(e,t){t===0&&(t=qf()),e=ma(e,t),e!==null&&(zi(e,t),tn(e))}function lb(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Qm(e,a)}function sb(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Qm(e,a)}function ob(e,t){return Ho(e,t)}var Zs=null,di=null,Cc=!1,Qs=!1,Mc=!1,Fn=0;function tn(e){e!==di&&e.next===null&&(di===null?Zs=di=e:di=di.next=e),Qs=!0,Cc||(Cc=!0,cb())}function dl(e,t){if(!Mc&&Qs){Mc=!0;do for(var a=!1,l=Zs;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var c=0;else{var m=l.suspendedLanes,b=l.pingedLanes;c=(1<<31-jt(42|e)+1)-1,c&=r&~(m&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Im(l,c))}else c=de,c=Il(l,l===we?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Ri(l,c)||(a=!0,Im(l,c));l=l.next}while(a);Mc=!1}}function rb(){Pm()}function Pm(){Qs=Cc=!1;var e=0;Fn!==0&&xb()&&(e=Fn);for(var t=bt(),a=null,l=Zs;l!==null;){var r=l.next,c=Fm(l,t);c===0?(l.next=null,a===null?Zs=r:a.next=r,r===null&&(di=a)):(a=l,(e!==0||(c&3)!==0)&&(Qs=!0)),l=r}Pe!==0&&Pe!==5||dl(e),Fn!==0&&(Fn=0)}function Fm(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var m=31-jt(c),b=1<<m,j=r[m];j===-1?((b&a)===0||(b&l)!==0)&&(r[m]=Vv(b,t)):j<=t&&(e.expiredLanes|=b),c&=~b}if(t=we,a=de,a=Il(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&qo(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ri(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&qo(l),Xo(a)){case 2:case 8:a=kf;break;case 32:a=Ql;break;case 268435456:a=Hf;break;default:a=Ql}return l=Jm.bind(null,e),a=Ho(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&qo(l),e.callbackPriority=2,e.callbackNode=null,2}function Jm(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ks()&&e.callbackNode!==a)return null;var l=de;return l=Il(e,e===we?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Rm(e,l,t),Fm(e,bt()),e.callbackNode!=null&&e.callbackNode===a?Jm.bind(null,e):null)}function Im(e,t){if(Ks())return null;Rm(e,t,!0)}function cb(){Sb(function(){(ve&6)!==0?Ho(Uf,rb):Pm()})}function Dc(){if(Fn===0){var e=Ia;e===0&&(e=Pl,Pl<<=1,(Pl&261888)===0&&(Pl=256)),Fn=e}return Fn}function $m(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ts(""+e)}function Wm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function ub(e,t,a,l,r){if(t==="submit"&&a&&a.stateNode===r){var c=$m((r[ht]||null).action),m=l.submitter;m&&(t=(t=m[ht]||null)?$m(t.formAction):m.getAttribute("formAction"),t!==null&&(c=t,m=null));var b=new ls("action","action",null,l,r);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Fn!==0){var j=m?Wm(r,m):new FormData(r);Jr(a,{pending:!0,data:j,method:r.method,action:c},null,j)}}else typeof c=="function"&&(b.preventDefault(),j=m?Wm(r,m):new FormData(r),Jr(a,{pending:!0,data:j,method:r.method,action:c},c,j))},currentTarget:r}]})}}for(var Rc=0;Rc<hr.length;Rc++){var zc=hr[Rc],fb=zc.toLowerCase(),db=zc[0].toUpperCase()+zc.slice(1);Zt(fb,"on"+db)}Zt(Dd,"onAnimationEnd"),Zt(Rd,"onAnimationIteration"),Zt(zd,"onAnimationStart"),Zt("dblclick","onDoubleClick"),Zt("focusin","onFocus"),Zt("focusout","onBlur"),Zt(Cx,"onTransitionRun"),Zt(Mx,"onTransitionStart"),Zt(Dx,"onTransitionCancel"),Zt(Od,"onTransitionEnd"),Ba("onMouseEnter",["mouseout","mouseover"]),Ba("onMouseLeave",["mouseout","mouseover"]),Ba("onPointerEnter",["pointerout","pointerover"]),Ba("onPointerLeave",["pointerout","pointerover"]),ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ua("onBeforeInput",["compositionend","keypress","textInput","paste"]),ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function ep(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],r=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var m=l.length-1;0<=m;m--){var b=l[m],j=b.instance,M=b.currentTarget;if(b=b.listener,j!==c&&r.isPropagationStopped())break e;c=b,r.currentTarget=M;try{c(r)}catch(V){rs(V)}r.currentTarget=null,c=j}else for(m=0;m<l.length;m++){if(b=l[m],j=b.instance,M=b.currentTarget,b=b.listener,j!==c&&r.isPropagationStopped())break e;c=b,r.currentTarget=M;try{c(r)}catch(V){rs(V)}r.currentTarget=null,c=j}}}}function ue(e,t){var a=t[Ko];a===void 0&&(a=t[Ko]=new Set);var l=e+"__bubble";a.has(l)||(tp(t,e,2,!1),a.add(l))}function Oc(e,t,a){var l=0;t&&(l|=4),tp(a,e,l,t)}var Ps="_reactListening"+Math.random().toString(36).slice(2);function Lc(e){if(!e[Ps]){e[Ps]=!0,Pf.forEach(function(a){a!=="selectionchange"&&(hb.has(a)||Oc(a,!1,e),Oc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ps]||(t[Ps]=!0,Oc("selectionchange",!1,t))}}function tp(e,t,a,l){switch(Dp(t)){case 2:var r=qb;break;case 8:r=Yb;break;default:r=Fc}a=r.bind(null,t,a,e),r=void 0,!er||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function Vc(e,t,a,l,r){var c=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var b=l.stateNode.containerInfo;if(b===r)break;if(m===4)for(m=l.return;m!==null;){var j=m.tag;if((j===3||j===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;b!==null;){if(m=La(b),m===null)return;if(j=m.tag,j===5||j===6||j===26||j===27){l=c=m;continue e}b=b.parentNode}}l=l.return}sd(function(){var M=c,V=$o(a),q=[];e:{var D=Ld.get(e);if(D!==void 0){var z=ls,F=e;switch(e){case"keypress":if(as(a)===0)break e;case"keydown":case"keyup":z=sx;break;case"focusin":F="focus",z=ir;break;case"focusout":F="blur",z=ir;break;case"beforeblur":case"afterblur":z=ir;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=cx;break;case Dd:case Rd:case zd:z=Iv;break;case Od:z=fx;break;case"scroll":case"scrollend":z=Zv;break;case"wheel":z=hx;break;case"copy":case"cut":case"paste":z=Wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=fd;break;case"toggle":case"beforetoggle":z=px}var ne=(t&4)!==0,Ae=!ne&&(e==="scroll"||e==="scrollend"),w=ne?D!==null?D+"Capture":null:D;ne=[];for(var E=M,C;E!==null;){var k=E;if(C=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||C===null||w===null||(k=Vi(E,w),k!=null&&ne.push(ml(E,k,C))),Ae)break;E=E.return}0<ne.length&&(D=new z(D,F,null,a,V),q.push({event:D,listeners:ne}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",D&&a!==Io&&(F=a.relatedTarget||a.fromElement)&&(La(F)||F[Oa]))break e;if((z||D)&&(D=V.window===V?V:(D=V.ownerDocument)?D.defaultView||D.parentWindow:window,z?(F=a.relatedTarget||a.toElement,z=M,F=F?La(F):null,F!==null&&(Ae=d(F),ne=F.tag,F!==Ae||ne!==5&&ne!==27&&ne!==6)&&(F=null)):(z=null,F=M),z!==F)){if(ne=cd,k="onMouseLeave",w="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ne=fd,k="onPointerLeave",w="onPointerEnter",E="pointer"),Ae=z==null?D:Li(z),C=F==null?D:Li(F),D=new ne(k,E+"leave",z,a,V),D.target=Ae,D.relatedTarget=C,k=null,La(V)===M&&(ne=new ne(w,E+"enter",F,a,V),ne.target=C,ne.relatedTarget=Ae,k=ne),Ae=k,z&&F)t:{for(ne=mb,w=z,E=F,C=0,k=w;k;k=ne(k))C++;k=0;for(var ee=E;ee;ee=ne(ee))k++;for(;0<C-k;)w=ne(w),C--;for(;0<k-C;)E=ne(E),k--;for(;C--;){if(w===E||E!==null&&w===E.alternate){ne=w;break t}w=ne(w),E=ne(E)}ne=null}else ne=null;z!==null&&np(q,D,z,ne,!1),F!==null&&Ae!==null&&np(q,Ae,F,ne,!0)}}e:{if(D=M?Li(M):window,z=D.nodeName&&D.nodeName.toLowerCase(),z==="select"||z==="input"&&D.type==="file")var ge=xd;else if(yd(D))if(bd)ge=Nx;else{ge=Tx;var W=jx}else z=D.nodeName,!z||z.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?M&&Jo(M.elementType)&&(ge=xd):ge=Ex;if(ge&&(ge=ge(e,M))){vd(q,ge,a,V);break e}W&&W(e,D,M),e==="focusout"&&M&&D.type==="number"&&M.memoizedProps.value!=null&&Fo(D,"number",D.value)}switch(W=M?Li(M):window,e){case"focusin":(yd(W)||W.contentEditable==="true")&&(Ga=W,ur=M,Gi=null);break;case"focusout":Gi=ur=Ga=null;break;case"mousedown":fr=!0;break;case"contextmenu":case"mouseup":case"dragend":fr=!1,Cd(q,a,V);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":Cd(q,a,V)}var se;if(sr)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else Ya?pd(e,a)&&(he="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&(dd&&a.locale!=="ko"&&(Ya||he!=="onCompositionStart"?he==="onCompositionEnd"&&Ya&&(se=od()):(On=V,tr="value"in On?On.value:On.textContent,Ya=!0)),W=Fs(M,he),0<W.length&&(he=new ud(he,e,null,a,V),q.push({event:he,listeners:W}),se?he.data=se:(se=gd(a),se!==null&&(he.data=se)))),(se=yx?vx(e,a):xx(e,a))&&(he=Fs(M,"onBeforeInput"),0<he.length&&(W=new ud("onBeforeInput","beforeinput",null,a,V),q.push({event:W,listeners:he}),W.data=se)),ub(q,e,M,a,V)}ep(q,t)})}function ml(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Fs(e,t){for(var a=t+"Capture",l=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=Vi(e,a),r!=null&&l.unshift(ml(e,r,c)),r=Vi(e,t),r!=null&&l.push(ml(e,r,c))),e.tag===3)return l;e=e.return}return[]}function mb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function np(e,t,a,l,r){for(var c=t._reactName,m=[];a!==null&&a!==l;){var b=a,j=b.alternate,M=b.stateNode;if(b=b.tag,j!==null&&j===l)break;b!==5&&b!==26&&b!==27||M===null||(j=M,r?(M=Vi(a,c),M!=null&&m.unshift(ml(a,M,j))):r||(M=Vi(a,c),M!=null&&m.push(ml(a,M,j)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var pb=/\r\n?/g,gb=/\u0000|\uFFFD/g;function ap(e){return(typeof e=="string"?e:""+e).replace(pb,`
`).replace(gb,"")}function ip(e,t){return t=ap(t),ap(e)===t}function Ne(e,t,a,l,r,c){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ka(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ka(e,""+l);break;case"className":Wl(e,"class",l);break;case"tabIndex":Wl(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Wl(e,a,l);break;case"style":id(e,l,c);break;case"data":if(t!=="object"){Wl(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ts(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(t!=="input"&&Ne(e,t,"name",r.name,r,null),Ne(e,t,"formEncType",r.formEncType,r,null),Ne(e,t,"formMethod",r.formMethod,r,null),Ne(e,t,"formTarget",r.formTarget,r,null)):(Ne(e,t,"encType",r.encType,r,null),Ne(e,t,"method",r.method,r,null),Ne(e,t,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ts(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=cn);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ts(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ue("beforetoggle",e),ue("toggle",e),$l(e,"popover",l);break;case"xlinkActuate":rn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":rn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":rn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":rn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":rn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":rn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":rn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":rn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":rn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":$l(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xv.get(a)||a,$l(e,a,l))}}function _c(e,t,a,l,r,c){switch(a){case"style":id(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ka(e,l):(typeof l=="number"||typeof l=="bigint")&&ka(e,""+l);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"onClick":l!=null&&(e.onclick=cn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ff.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),t=a.slice(2,r?a.length-7:void 0),c=e[ht]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(t,c,r),typeof l=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,r);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):$l(e,a,l)}}}function nt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var l=!1,r=!1,c;for(c in a)if(a.hasOwnProperty(c)){var m=a[c];if(m!=null)switch(c){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ne(e,t,c,m,a,null)}}r&&Ne(e,t,"srcSet",a.srcSet,a,null),l&&Ne(e,t,"src",a.src,a,null);return;case"input":ue("invalid",e);var b=c=m=r=null,j=null,M=null;for(l in a)if(a.hasOwnProperty(l)){var V=a[l];if(V!=null)switch(l){case"name":r=V;break;case"type":m=V;break;case"checked":j=V;break;case"defaultChecked":M=V;break;case"value":c=V;break;case"defaultValue":b=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(o(137,t));break;default:Ne(e,t,l,V,a,null)}}ed(e,c,b,j,M,m,r,!1);return;case"select":ue("invalid",e),l=m=c=null;for(r in a)if(a.hasOwnProperty(r)&&(b=a[r],b!=null))switch(r){case"value":c=b;break;case"defaultValue":m=b;break;case"multiple":l=b;default:Ne(e,t,r,b,a,null)}t=c,a=m,e.multiple=!!l,t!=null?Ua(e,!!l,t,!1):a!=null&&Ua(e,!!l,a,!0);return;case"textarea":ue("invalid",e),c=r=l=null;for(m in a)if(a.hasOwnProperty(m)&&(b=a[m],b!=null))switch(m){case"value":l=b;break;case"defaultValue":r=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:Ne(e,t,m,b,a,null)}nd(e,l,r,c);return;case"option":for(j in a)a.hasOwnProperty(j)&&(l=a[j],l!=null)&&(j==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ne(e,t,j,l,a,null));return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(l=0;l<hl.length;l++)ue(hl[l],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in a)if(a.hasOwnProperty(M)&&(l=a[M],l!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ne(e,t,M,l,a,null)}return;default:if(Jo(t)){for(V in a)a.hasOwnProperty(V)&&(l=a[V],l!==void 0&&_c(e,t,V,l,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!=null&&Ne(e,t,b,l,a,null))}function yb(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,m=null,b=null,j=null,M=null,V=null;for(z in a){var q=a[z];if(a.hasOwnProperty(z)&&q!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":j=q;default:l.hasOwnProperty(z)||Ne(e,t,z,null,l,q)}}for(var D in l){var z=l[D];if(q=a[D],l.hasOwnProperty(D)&&(z!=null||q!=null))switch(D){case"type":c=z;break;case"name":r=z;break;case"checked":M=z;break;case"defaultChecked":V=z;break;case"value":m=z;break;case"defaultValue":b=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:z!==q&&Ne(e,t,D,z,l,q)}}Po(e,m,b,j,M,V,c,r);return;case"select":z=m=b=D=null;for(c in a)if(j=a[c],a.hasOwnProperty(c)&&j!=null)switch(c){case"value":break;case"multiple":z=j;default:l.hasOwnProperty(c)||Ne(e,t,c,null,l,j)}for(r in l)if(c=l[r],j=a[r],l.hasOwnProperty(r)&&(c!=null||j!=null))switch(r){case"value":D=c;break;case"defaultValue":b=c;break;case"multiple":m=c;default:c!==j&&Ne(e,t,r,c,l,j)}t=b,a=m,l=z,D!=null?Ua(e,!!a,D,!1):!!l!=!!a&&(t!=null?Ua(e,!!a,t,!0):Ua(e,!!a,a?[]:"",!1));return;case"textarea":z=D=null;for(b in a)if(r=a[b],a.hasOwnProperty(b)&&r!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ne(e,t,b,null,l,r)}for(m in l)if(r=l[m],c=a[m],l.hasOwnProperty(m)&&(r!=null||c!=null))switch(m){case"value":D=r;break;case"defaultValue":z=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==c&&Ne(e,t,m,r,l,c)}td(e,D,z);return;case"option":for(var F in a)D=a[F],a.hasOwnProperty(F)&&D!=null&&!l.hasOwnProperty(F)&&(F==="selected"?e.selected=!1:Ne(e,t,F,null,l,D));for(j in l)D=l[j],z=a[j],l.hasOwnProperty(j)&&D!==z&&(D!=null||z!=null)&&(j==="selected"?e.selected=D&&typeof D!="function"&&typeof D!="symbol":Ne(e,t,j,D,l,z));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)D=a[ne],a.hasOwnProperty(ne)&&D!=null&&!l.hasOwnProperty(ne)&&Ne(e,t,ne,null,l,D);for(M in l)if(D=l[M],z=a[M],l.hasOwnProperty(M)&&D!==z&&(D!=null||z!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:Ne(e,t,M,D,l,z)}return;default:if(Jo(t)){for(var Ae in a)D=a[Ae],a.hasOwnProperty(Ae)&&D!==void 0&&!l.hasOwnProperty(Ae)&&_c(e,t,Ae,void 0,l,D);for(V in l)D=l[V],z=a[V],!l.hasOwnProperty(V)||D===z||D===void 0&&z===void 0||_c(e,t,V,D,l,z);return}}for(var w in a)D=a[w],a.hasOwnProperty(w)&&D!=null&&!l.hasOwnProperty(w)&&Ne(e,t,w,null,l,D);for(q in l)D=l[q],z=a[q],!l.hasOwnProperty(q)||D===z||D==null&&z==null||Ne(e,t,q,D,l,z)}function lp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var r=a[l],c=r.transferSize,m=r.initiatorType,b=r.duration;if(c&&b&&lp(m)){for(m=0,b=r.responseEnd,l+=1;l<a.length;l++){var j=a[l],M=j.startTime;if(M>b)break;var V=j.transferSize,q=j.initiatorType;V&&lp(q)&&(j=j.responseEnd,m+=V*(j<b?1:(b-M)/(j-M)))}if(--l,t+=8*(c+m)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bc=null,Uc=null;function Js(e){return e.nodeType===9?e:e.ownerDocument}function sp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function op(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function kc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hc=null;function xb(){var e=window.event;return e&&e.type==="popstate"?e===Hc?!1:(Hc=e,!0):(Hc=null,!1)}var rp=typeof setTimeout=="function"?setTimeout:void 0,bb=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,Sb=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(e){return cp.resolve(null).then(e).catch(jb)}:rp;function jb(e){setTimeout(function(){throw e})}function Jn(e){return e==="head"}function up(e,t){var a=t,l=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(r),gi(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")pl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pl(a);for(var c=a.firstChild;c;){var m=c.nextSibling,b=c.nodeName;c[Oi]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=m}}else a==="body"&&pl(e.ownerDocument.body);a=r}while(a);gi(t)}function fp(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function qc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qc(a),Zo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Tb(e,t,a,l){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Oi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function Eb(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=kt(e.nextSibling),e===null))return null;return e}function dp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=kt(e.nextSibling),e===null))return null;return e}function Yc(e){return e.data==="$?"||e.data==="$~"}function Gc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Nb(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Xc=null;function hp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return kt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function mp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function pp(e,t,a){switch(t=Js(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function pl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Zo(e)}var Ht=new Map,gp=new Set;function Is(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=G.d;G.d={f:Ab,r:wb,D:Cb,C:Mb,L:Db,m:Rb,X:Ob,S:zb,M:Lb};function Ab(){var e=Nn.f(),t=Ys();return e||t}function wb(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?Oh(t):Nn.r(e)}var hi=typeof document>"u"?null:document;function yp(e,t,a){var l=hi;if(l&&typeof t=="string"&&t){var r=zt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),gp.has(r)||(gp.add(r),e={rel:e,crossOrigin:a,href:t},l.querySelector(r)===null&&(t=l.createElement("link"),nt(t,"link",e),Je(t),l.head.appendChild(t)))}}function Cb(e){Nn.D(e),yp("dns-prefetch",e,null)}function Mb(e,t){Nn.C(e,t),yp("preconnect",e,t)}function Db(e,t,a){Nn.L(e,t,a);var l=hi;if(l&&e&&t){var r='link[rel="preload"][as="'+zt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+zt(a.imageSizes)+'"]')):r+='[href="'+zt(e)+'"]';var c=r;switch(t){case"style":c=mi(e);break;case"script":c=pi(e)}Ht.has(c)||(e=x({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ht.set(c,e),l.querySelector(r)!==null||t==="style"&&l.querySelector(gl(c))||t==="script"&&l.querySelector(yl(c))||(t=l.createElement("link"),nt(t,"link",e),Je(t),l.head.appendChild(t)))}}function Rb(e,t){Nn.m(e,t);var a=hi;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+zt(l)+'"][href="'+zt(e)+'"]',c=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=pi(e)}if(!Ht.has(c)&&(e=x({rel:"modulepreload",href:e},t),Ht.set(c,e),a.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yl(c)))return}l=a.createElement("link"),nt(l,"link",e),Je(l),a.head.appendChild(l)}}}function zb(e,t,a){Nn.S(e,t,a);var l=hi;if(l&&e){var r=_a(l).hoistableStyles,c=mi(e);t=t||"default";var m=r.get(c);if(!m){var b={loading:0,preload:null};if(m=l.querySelector(gl(c)))b.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ht.get(c))&&Kc(e,a);var j=m=l.createElement("link");Je(j),nt(j,"link",e),j._p=new Promise(function(M,V){j.onload=M,j.onerror=V}),j.addEventListener("load",function(){b.loading|=1}),j.addEventListener("error",function(){b.loading|=2}),b.loading|=4,$s(m,t,l)}m={type:"stylesheet",instance:m,count:1,state:b},r.set(c,m)}}}function Ob(e,t){Nn.X(e,t);var a=hi;if(a&&e){var l=_a(a).hoistableScripts,r=pi(e),c=l.get(r);c||(c=a.querySelector(yl(r)),c||(e=x({src:e,async:!0},t),(t=Ht.get(r))&&Zc(e,t),c=a.createElement("script"),Je(c),nt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function Lb(e,t){Nn.M(e,t);var a=hi;if(a&&e){var l=_a(a).hoistableScripts,r=pi(e),c=l.get(r);c||(c=a.querySelector(yl(r)),c||(e=x({src:e,async:!0,type:"module"},t),(t=Ht.get(r))&&Zc(e,t),c=a.createElement("script"),Je(c),nt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function vp(e,t,a,l){var r=(r=re.current)?Is(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=mi(a.href),a=_a(r).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mi(a.href);var c=_a(r).hoistableStyles,m=c.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,m),(c=r.querySelector(gl(e)))&&!c._p&&(m.instance=c,m.state.loading=5),Ht.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ht.set(e,a),c||Vb(r,e,a,m.state))),t&&l===null)throw Error(o(528,""));return m}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=pi(a),a=_a(r).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function mi(e){return'href="'+zt(e)+'"'}function gl(e){return'link[rel="stylesheet"]['+e+"]"}function xp(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Vb(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),nt(t,"link",a),Je(t),e.head.appendChild(t))}function pi(e){return'[src="'+zt(e)+'"]'}function yl(e){return"script[async]"+e}function bp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+zt(a.href)+'"]');if(l)return t.instance=l,Je(l),l;var r=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Je(l),nt(l,"style",r),$s(l,a.precedence,e),t.instance=l;case"stylesheet":r=mi(a.href);var c=e.querySelector(gl(r));if(c)return t.state.loading|=4,t.instance=c,Je(c),c;l=xp(a),(r=Ht.get(r))&&Kc(l,r),c=(e.ownerDocument||e).createElement("link"),Je(c);var m=c;return m._p=new Promise(function(b,j){m.onload=b,m.onerror=j}),nt(c,"link",l),t.state.loading|=4,$s(c,a.precedence,e),t.instance=c;case"script":return c=pi(a.src),(r=e.querySelector(yl(c)))?(t.instance=r,Je(r),r):(l=a,(r=Ht.get(c))&&(l=x({},a),Zc(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),Je(r),nt(r,"link",l),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,$s(l,a.precedence,e));return t.instance}function $s(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,c=r,m=0;m<l.length;m++){var b=l[m];if(b.dataset.precedence===t)c=b;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Kc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ws=null;function Sp(e,t,a){if(Ws===null){var l=new Map,r=Ws=new Map;r.set(a,l)}else r=Ws,l=r.get(a),l||(l=new Map,r.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var c=a[r];if(!(c[Oi]||c[$e]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(t)||"";m=e+m;var b=l.get(m);b?b.push(c):l.set(m,[c])}}return l}function jp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function _b(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Tp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bb(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=mi(l.href),c=t.querySelector(gl(r));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=eo.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=c,Je(c);return}c=t.ownerDocument||t,l=xp(l),(r=Ht.get(r))&&Kc(l,r),c=c.createElement("link"),Je(c);var m=c;m._p=new Promise(function(b,j){m.onload=b,m.onerror=j}),nt(c,"link",l),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=eo.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Qc=0;function Ub(e,t){return e.stylesheets&&e.count===0&&no(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&no(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Qc===0&&(Qc=62500*vb());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&no(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Qc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function eo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)no(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var to=null;function no(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,to=new Map,t.forEach(kb,e),to=null,eo.call(e))}function kb(e,t){if(!(t.state.loading&4)){var a=to.get(e);if(a)var l=a.get(null);else{a=new Map,to.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var m=r[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),l=m)}l&&a.set(null,l)}r=t.instance,m=r.getAttribute("data-precedence"),c=a.get(m)||l,c===l&&a.set(null,r),a.set(m,r),this.count++,l=eo.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var vl={$$typeof:U,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Hb(e,t,a,l,r,c,m,b,j){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.hiddenUpdates=Yo(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function Ep(e,t,a,l,r,c,m,b,j,M,V,q){return e=new Hb(e,t,a,m,j,M,V,q,b),t=1,c===!0&&(t|=24),c=Et(3,null,null,t),e.current=c,c.stateNode=e,t=Ar(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:l,isDehydrated:a,cache:t},Dr(c),e}function Np(e){return e?(e=Za,e):Za}function Ap(e,t,a,l,r,c){r=Np(r),l.context===null?l.context=r:l.pendingContext=r,l=kn(t),l.payload={element:a},c=c===void 0?null:c,c!==null&&(l.callback=c),a=Hn(e,l,t),a!==null&&(xt(a,e,t),Ji(a,e,t))}function wp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Pc(e,t){wp(e,t),(e=e.alternate)&&wp(e,t)}function Cp(e){if(e.tag===13||e.tag===31){var t=ma(e,67108864);t!==null&&xt(t,e,67108864),Pc(e,67108864)}}function Mp(e){if(e.tag===13||e.tag===31){var t=Mt();t=Go(t);var a=ma(e,t);a!==null&&xt(a,e,t),Pc(e,t)}}var ao=!0;function qb(e,t,a,l){var r=B.T;B.T=null;var c=G.p;try{G.p=2,Fc(e,t,a,l)}finally{G.p=c,B.T=r}}function Yb(e,t,a,l){var r=B.T;B.T=null;var c=G.p;try{G.p=8,Fc(e,t,a,l)}finally{G.p=c,B.T=r}}function Fc(e,t,a,l){if(ao){var r=Jc(l);if(r===null)Vc(e,t,l,io,a),Rp(e,l);else if(Xb(r,e,t,a,l))l.stopPropagation();else if(Rp(e,l),t&4&&-1<Gb.indexOf(e)){for(;r!==null;){var c=Va(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=ca(c.pendingLanes);if(m!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var j=1<<31-jt(m);b.entanglements[1]|=j,m&=~j}tn(c),(ve&6)===0&&(Hs=bt()+500,dl(0))}}break;case 31:case 13:b=ma(c,2),b!==null&&xt(b,c,2),Ys(),Pc(c,2)}if(c=Jc(l),c===null&&Vc(e,t,l,io,a),c===r)break;r=c}r!==null&&l.stopPropagation()}else Vc(e,t,l,null,a)}}function Jc(e){return e=$o(e),Ic(e)}var io=null;function Ic(e){if(io=null,e=La(e),e!==null){var t=d(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=p(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return io=e,null}function Dp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cv()){case Uf:return 2;case kf:return 8;case Ql:case Mv:return 32;case Hf:return 268435456;default:return 32}default:return 32}}var $c=!1,In=null,$n=null,Wn=null,xl=new Map,bl=new Map,ea=[],Gb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rp(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":xl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bl.delete(t.pointerId)}}function Sl(e,t,a,l,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:c,targetContainers:[r]},t!==null&&(t=Va(t),t!==null&&Cp(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Xb(e,t,a,l,r){switch(t){case"focusin":return In=Sl(In,e,t,a,l,r),!0;case"dragenter":return $n=Sl($n,e,t,a,l,r),!0;case"mouseover":return Wn=Sl(Wn,e,t,a,l,r),!0;case"pointerover":var c=r.pointerId;return xl.set(c,Sl(xl.get(c)||null,e,t,a,l,r)),!0;case"gotpointercapture":return c=r.pointerId,bl.set(c,Sl(bl.get(c)||null,e,t,a,l,r)),!0}return!1}function zp(e){var t=La(e.target);if(t!==null){var a=d(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,Zf(e.priority,function(){Mp(a)});return}}else if(t===31){if(t=p(a),t!==null){e.blockedOn=t,Zf(e.priority,function(){Mp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Jc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Io=l,a.target.dispatchEvent(l),Io=null}else return t=Va(a),t!==null&&Cp(t),e.blockedOn=a,!1;t.shift()}return!0}function Op(e,t,a){lo(e)&&a.delete(t)}function Kb(){$c=!1,In!==null&&lo(In)&&(In=null),$n!==null&&lo($n)&&($n=null),Wn!==null&&lo(Wn)&&(Wn=null),xl.forEach(Op),bl.forEach(Op)}function so(e,t){e.blockedOn===t&&(e.blockedOn=null,$c||($c=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Kb)))}var oo=null;function Lp(e){oo!==e&&(oo=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){oo===e&&(oo=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],r=e[t+2];if(typeof l!="function"){if(Ic(l||a)===null)continue;break}var c=Va(a);c!==null&&(e.splice(t,3),t-=3,Jr(c,{pending:!0,data:r,method:a.method,action:l},l,r))}}))}function gi(e){function t(j){return so(j,e)}In!==null&&so(In,e),$n!==null&&so($n,e),Wn!==null&&so(Wn,e),xl.forEach(t),bl.forEach(t);for(var a=0;a<ea.length;a++){var l=ea[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ea.length&&(a=ea[0],a.blockedOn===null);)zp(a),a.blockedOn===null&&ea.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var r=a[l],c=a[l+1],m=r[ht]||null;if(typeof c=="function")m||Lp(a);else if(m){var b=null;if(c&&c.hasAttribute("formAction")){if(r=c,m=c[ht]||null)b=m.formAction;else if(Ic(r)!==null)continue}else b=m.action;typeof b=="function"?a[l+1]=b:(a.splice(l,3),l-=3),Lp(a)}}}function Vp(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return r=m})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Wc(e){this._internalRoot=e}ro.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=Mt();Ap(a,l,e,t,null,null)},ro.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ap(e.current,2,null,e,null,null),Ys(),t[Oa]=null}};function ro(e){this._internalRoot=e}ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kf();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ea.length&&t!==0&&t<ea[a].priority;a++);ea.splice(a,0,e),a===0&&zp(e)}};var _p=i.version;if(_p!=="19.2.3")throw Error(o(527,_p,"19.2.3"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=y(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Zb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{Di=co.inject(Zb),St=co}catch{}}return Tl.createRoot=function(e,t){if(!u(e))throw Error(o(299));var a=!1,l="",r=Gh,c=Xh,m=Kh;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Ep(e,1,!1,null,null,a,l,null,r,c,m,Vp),e[Oa]=t.current,Lc(e),new Wc(t)},Tl.hydrateRoot=function(e,t,a){if(!u(e))throw Error(o(299));var l=!1,r="",c=Gh,m=Xh,b=Kh,j=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(j=a.formState)),t=Ep(e,1,!0,t,a??null,l,r,j,c,m,b,Vp),t.context=Np(null),a=t.current,l=Mt(),l=Go(l),r=kn(l),r.callback=null,Hn(a,r,l),a=l,t.current.lanes=a,zi(t,a),tn(t),e[Oa]=t.current,Lc(e),new ro(t)},Tl.version="19.2.3",Tl}var Zp;function n1(){if(Zp)return nu.exports;Zp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),nu.exports=t1(),nu.exports}var a1=n1();const i1=p0(a1);var Qp="popstate";function l1(n={}){function i(o,u){let{pathname:d,search:h,hash:p}=o.location;return Nu("",{pathname:d,search:h,hash:p},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function s(o,u){return typeof u=="string"?u:Ol(u)}return o1(i,s,null,n)}function Oe(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function It(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function s1(){return Math.random().toString(36).substring(2,10)}function Pp(n,i){return{usr:n.state,key:n.key,idx:i}}function Nu(n,i,s=null,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?Ei(i):i,state:s,key:i&&i.key||o||s1()}}function Ol({pathname:n="/",search:i="",hash:s=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Ei(n){let i={};if(n){let s=n.indexOf("#");s>=0&&(i.hash=n.substring(s),n=n.substring(0,s));let o=n.indexOf("?");o>=0&&(i.search=n.substring(o),n=n.substring(0,o)),n&&(i.pathname=n)}return i}function o1(n,i,s,o={}){let{window:u=document.defaultView,v5Compat:d=!1}=o,h=u.history,p="POP",g=null,y=v();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function v(){return(h.state||{idx:null}).idx}function x(){p="POP";let R=v(),_=R==null?null:R-y;y=R,g&&g({action:p,location:L.location,delta:_})}function S(R,_){p="PUSH";let H=Nu(L.location,R,_);y=v()+1;let U=Pp(H,y),J=L.createHref(H);try{h.pushState(U,"",J)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;u.location.assign(J)}d&&g&&g({action:p,location:L.location,delta:1})}function N(R,_){p="REPLACE";let H=Nu(L.location,R,_);y=v();let U=Pp(H,y),J=L.createHref(H);h.replaceState(U,"",J),d&&g&&g({action:p,location:L.location,delta:0})}function O(R){return r1(R)}let L={get action(){return p},get location(){return n(u,h)},listen(R){if(g)throw new Error("A history only accepts one active listener");return u.addEventListener(Qp,x),g=R,()=>{u.removeEventListener(Qp,x),g=null}},createHref(R){return i(u,R)},createURL:O,encodeLocation(R){let _=O(R);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:S,replace:N,go(R){return h.go(R)}};return L}function r1(n,i=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Oe(s,"No window.location.(origin|href) available to create URL");let o=typeof n=="string"?n:Ol(n);return o=o.replace(/ $/,"%20"),!i&&o.startsWith("//")&&(o=s+o),new URL(o,s)}function y0(n,i,s="/"){return c1(n,i,s,!1)}function c1(n,i,s,o){let u=typeof i=="string"?Ei(i):i,d=Cn(u.pathname||"/",s);if(d==null)return null;let h=v0(n);u1(h);let p=null;for(let g=0;p==null&&g<h.length;++g){let y=S1(d);p=x1(h[g],y,o)}return p}function v0(n,i=[],s=[],o="",u=!1){let d=(h,p,g=u,y)=>{let v={relativePath:y===void 0?h.path||"":y,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(o)&&g)return;Oe(v.relativePath.startsWith(o),`Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(o.length)}let x=An([o,v.relativePath]),S=s.concat(v);h.children&&h.children.length>0&&(Oe(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),v0(h.children,i,S,x,g)),!(h.path==null&&!h.index)&&i.push({path:x,score:y1(x,h.index),routesMeta:S})};return n.forEach((h,p)=>{if(h.path===""||!h.path?.includes("?"))d(h,p);else for(let g of x0(h.path))d(h,p,!0,g)}),i}function x0(n){let i=n.split("/");if(i.length===0)return[];let[s,...o]=i,u=s.endsWith("?"),d=s.replace(/\?$/,"");if(o.length===0)return u?[d,""]:[d];let h=x0(o.join("/")),p=[];return p.push(...h.map(g=>g===""?d:[d,g].join("/"))),u&&p.push(...h),p.map(g=>n.startsWith("/")&&g===""?"/":g)}function u1(n){n.sort((i,s)=>i.score!==s.score?s.score-i.score:v1(i.routesMeta.map(o=>o.childrenIndex),s.routesMeta.map(o=>o.childrenIndex)))}var f1=/^:[\w-]+$/,d1=3,h1=2,m1=1,p1=10,g1=-2,Fp=n=>n==="*";function y1(n,i){let s=n.split("/"),o=s.length;return s.some(Fp)&&(o+=g1),i&&(o+=h1),s.filter(u=>!Fp(u)).reduce((u,d)=>u+(f1.test(d)?d1:d===""?m1:p1),o)}function v1(n,i){return n.length===i.length&&n.slice(0,-1).every((o,u)=>o===i[u])?n[n.length-1]-i[i.length-1]:0}function x1(n,i,s=!1){let{routesMeta:o}=n,u={},d="/",h=[];for(let p=0;p<o.length;++p){let g=o[p],y=p===o.length-1,v=d==="/"?i:i.slice(d.length)||"/",x=To({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},v),S=g.route;if(!x&&y&&s&&!o[o.length-1].route.index&&(x=To({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},v)),!x)return null;Object.assign(u,x.params),h.push({params:u,pathname:An([d,x.pathname]),pathnameBase:N1(An([d,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(d=An([d,x.pathnameBase]))}return h}function To(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,o]=b1(n.path,n.caseSensitive,n.end),u=i.match(s);if(!u)return null;let d=u[0],h=d.replace(/(.)\/+$/,"$1"),p=u.slice(1);return{params:o.reduce((y,{paramName:v,isOptional:x},S)=>{if(v==="*"){let O=p[S]||"";h=d.slice(0,d.length-O.length).replace(/(.)\/+$/,"$1")}const N=p[S];return x&&!N?y[v]=void 0:y[v]=(N||"").replace(/%2F/g,"/"),y},{}),pathname:d,pathnameBase:h,pattern:n}}function b1(n,i=!1,s=!0){It(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,g)=>(o.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(o.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),o]}function S1(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return It(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function Cn(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let s=i.endsWith("/")?i.length-1:i.length,o=n.charAt(s);return o&&o!=="/"?null:n.slice(s)||"/"}var b0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,j1=n=>b0.test(n);function T1(n,i="/"){let{pathname:s,search:o="",hash:u=""}=typeof n=="string"?Ei(n):n,d;if(s)if(j1(s))d=s;else{if(s.includes("//")){let h=s;s=s.replace(/\/\/+/g,"/"),It(!1,`Pathnames cannot have embedded double slashes - normalizing ${h} -> ${s}`)}s.startsWith("/")?d=Jp(s.substring(1),"/"):d=Jp(s,i)}else d=i;return{pathname:d,search:A1(o),hash:w1(u)}}function Jp(n,i){let s=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?s.length>1&&s.pop():u!=="."&&s.push(u)}),s.length>1?s.join("/"):"/"}function su(n,i,s,o){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function E1(n){return n.filter((i,s)=>s===0||i.route.path&&i.route.path.length>0)}function S0(n){let i=E1(n);return i.map((s,o)=>o===i.length-1?s.pathname:s.pathnameBase)}function j0(n,i,s,o=!1){let u;typeof n=="string"?u=Ei(n):(u={...n},Oe(!u.pathname||!u.pathname.includes("?"),su("?","pathname","search",u)),Oe(!u.pathname||!u.pathname.includes("#"),su("#","pathname","hash",u)),Oe(!u.search||!u.search.includes("#"),su("#","search","hash",u)));let d=n===""||u.pathname==="",h=d?"/":u.pathname,p;if(h==null)p=s;else{let x=i.length-1;if(!o&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),x-=1;u.pathname=S.join("/")}p=x>=0?i[x]:"/"}let g=T1(u,p),y=h&&h!=="/"&&h.endsWith("/"),v=(d||h===".")&&s.endsWith("/");return!g.pathname.endsWith("/")&&(y||v)&&(g.pathname+="/"),g}var An=n=>n.join("/").replace(/\/\/+/g,"/"),N1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),A1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,w1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,C1=class{constructor(n,i,s,o=!1){this.status=n,this.statusText=i||"",this.internal=o,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function M1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function D1(n){return n.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var T0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function E0(n,i){let s=n;if(typeof s!="string"||!b0.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let o=s,u=!1;if(T0)try{let d=new URL(window.location.href),h=s.startsWith("//")?new URL(d.protocol+s):new URL(s),p=Cn(h.pathname,i);h.origin===d.origin&&p!=null?s=p+h.search+h.hash:u=!0}catch{It(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:u,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var N0=["POST","PUT","PATCH","DELETE"];new Set(N0);var R1=["GET",...N0];new Set(R1);var Ni=T.createContext(null);Ni.displayName="DataRouter";var Do=T.createContext(null);Do.displayName="DataRouterState";var z1=T.createContext(!1),A0=T.createContext({isTransitioning:!1});A0.displayName="ViewTransition";var O1=T.createContext(new Map);O1.displayName="Fetchers";var L1=T.createContext(null);L1.displayName="Await";var Kt=T.createContext(null);Kt.displayName="Navigation";var kl=T.createContext(null);kl.displayName="Location";var Dn=T.createContext({outlet:null,matches:[],isDataRoute:!1});Dn.displayName="Route";var Ju=T.createContext(null);Ju.displayName="RouteError";var w0="REACT_ROUTER_ERROR",V1="REDIRECT",_1="ROUTE_ERROR_RESPONSE";function B1(n){if(n.startsWith(`${w0}:${V1}:{`))try{let i=JSON.parse(n.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function U1(n){if(n.startsWith(`${w0}:${_1}:{`))try{let i=JSON.parse(n.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new C1(i.status,i.statusText,i.data)}catch{}}function k1(n,{relative:i}={}){Oe(Hl(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:o}=T.useContext(Kt),{hash:u,pathname:d,search:h}=ql(n,{relative:i}),p=d;return s!=="/"&&(p=d==="/"?s:An([s,d])),o.createHref({pathname:p,search:h,hash:u})}function Hl(){return T.useContext(kl)!=null}function sa(){return Oe(Hl(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(kl).location}var C0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function M0(n){T.useContext(Kt).static||T.useLayoutEffect(n)}function Iu(){let{isDataRoute:n}=T.useContext(Dn);return n?$1():H1()}function H1(){Oe(Hl(),"useNavigate() may be used only in the context of a <Router> component.");let n=T.useContext(Ni),{basename:i,navigator:s}=T.useContext(Kt),{matches:o}=T.useContext(Dn),{pathname:u}=sa(),d=JSON.stringify(S0(o)),h=T.useRef(!1);return M0(()=>{h.current=!0}),T.useCallback((g,y={})=>{if(It(h.current,C0),!h.current)return;if(typeof g=="number"){s.go(g);return}let v=j0(g,JSON.parse(d),u,y.relative==="path");n==null&&i!=="/"&&(v.pathname=v.pathname==="/"?i:An([i,v.pathname])),(y.replace?s.replace:s.push)(v,y.state,y)},[i,s,d,u,n])}T.createContext(null);function ql(n,{relative:i}={}){let{matches:s}=T.useContext(Dn),{pathname:o}=sa(),u=JSON.stringify(S0(s));return T.useMemo(()=>j0(n,JSON.parse(u),o,i==="path"),[n,u,o,i])}function q1(n,i){return D0(n,i)}function D0(n,i,s,o,u){Oe(Hl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=T.useContext(Kt),{matches:h}=T.useContext(Dn),p=h[h.length-1],g=p?p.params:{},y=p?p.pathname:"/",v=p?p.pathnameBase:"/",x=p&&p.route;{let H=x&&x.path||"";z0(y,!x||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let S=sa(),N;if(i){let H=typeof i=="string"?Ei(i):i;Oe(v==="/"||H.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${H.pathname}" was given in the \`location\` prop.`),N=H}else N=S;let O=N.pathname||"/",L=O;if(v!=="/"){let H=v.replace(/^\//,"").split("/");L="/"+O.replace(/^\//,"").split("/").slice(H.length).join("/")}let R=y0(n,{pathname:L});It(x||R!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),It(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=Z1(R&&R.map(H=>Object.assign({},H,{params:Object.assign({},g,H.params),pathname:An([v,d.encodeLocation?d.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?v:An([v,d.encodeLocation?d.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),h,s,o,u);return i&&_?T.createElement(kl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},_):_}function Y1(){let n=I1(),i=M1(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:d},"ErrorBoundary")," or"," ",T.createElement("code",{style:d},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},i),s?T.createElement("pre",{style:u},s):null,h)}var G1=T.createElement(Y1,null),R0=class extends T.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){this.props.onError?this.props.onError(n,i):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const s=U1(n.digest);s&&(n=s)}let i=n!==void 0?T.createElement(Dn.Provider,{value:this.props.routeContext},T.createElement(Ju.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?T.createElement(X1,{error:n},i):i}};R0.contextType=z1;var ou=new WeakMap;function X1({children:n,error:i}){let{basename:s}=T.useContext(Kt);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let o=B1(i.digest);if(o){let u=ou.get(i);if(u)throw u;let d=E0(o.location,s);if(T0&&!ou.get(i))if(d.isExternal||o.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:o.replace}));throw ou.set(i,h),h}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return n}function K1({routeContext:n,match:i,children:s}){let o=T.useContext(Ni);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),T.createElement(Dn.Provider,{value:n},s)}function Z1(n,i=[],s=null,o=null,u=null){if(n==null){if(!s)return null;if(s.errors)n=s.matches;else if(i.length===0&&!s.initialized&&s.matches.length>0)n=s.matches;else return null}let d=n,h=s?.errors;if(h!=null){let v=d.findIndex(x=>x.route.id&&h?.[x.route.id]!==void 0);Oe(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let p=!1,g=-1;if(s)for(let v=0;v<d.length;v++){let x=d[v];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(g=v),x.route.id){let{loaderData:S,errors:N}=s,O=x.route.loader&&!S.hasOwnProperty(x.route.id)&&(!N||N[x.route.id]===void 0);if(x.route.lazy||O){p=!0,g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}let y=s&&o?(v,x)=>{o(v,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:D1(s.matches),errorInfo:x})}:void 0;return d.reduceRight((v,x,S)=>{let N,O=!1,L=null,R=null;s&&(N=h&&x.route.id?h[x.route.id]:void 0,L=x.route.errorElement||G1,p&&(g<0&&S===0?(z0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),O=!0,R=null):g===S&&(O=!0,R=x.route.hydrateFallbackElement||null)));let _=i.concat(d.slice(0,S+1)),H=()=>{let U;return N?U=L:O?U=R:x.route.Component?U=T.createElement(x.route.Component,null):x.route.element?U=x.route.element:U=v,T.createElement(K1,{match:x,routeContext:{outlet:v,matches:_,isDataRoute:s!=null},children:U})};return s&&(x.route.ErrorBoundary||x.route.errorElement||S===0)?T.createElement(R0,{location:s.location,revalidation:s.revalidation,component:L,error:N,children:H(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:y}):H()},null)}function $u(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Q1(n){let i=T.useContext(Ni);return Oe(i,$u(n)),i}function P1(n){let i=T.useContext(Do);return Oe(i,$u(n)),i}function F1(n){let i=T.useContext(Dn);return Oe(i,$u(n)),i}function Wu(n){let i=F1(n),s=i.matches[i.matches.length-1];return Oe(s.route.id,`${n} can only be used on routes that contain a unique "id"`),s.route.id}function J1(){return Wu("useRouteId")}function I1(){let n=T.useContext(Ju),i=P1("useRouteError"),s=Wu("useRouteError");return n!==void 0?n:i.errors?.[s]}function $1(){let{router:n}=Q1("useNavigate"),i=Wu("useNavigate"),s=T.useRef(!1);return M0(()=>{s.current=!0}),T.useCallback(async(u,d={})=>{It(s.current,C0),s.current&&(typeof u=="number"?await n.navigate(u):await n.navigate(u,{fromRouteId:i,...d}))},[n,i])}var Ip={};function z0(n,i,s){!i&&!Ip[n]&&(Ip[n]=!0,It(!1,s))}T.memo(W1);function W1({routes:n,future:i,state:s,onError:o}){return D0(n,void 0,s,o,i)}function qt(n){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function e2({basename:n="/",children:i=null,location:s,navigationType:o="POP",navigator:u,static:d=!1,unstable_useTransitions:h}){Oe(!Hl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=n.replace(/^\/*/,"/"),g=T.useMemo(()=>({basename:p,navigator:u,static:d,unstable_useTransitions:h,future:{}}),[p,u,d,h]);typeof s=="string"&&(s=Ei(s));let{pathname:y="/",search:v="",hash:x="",state:S=null,key:N="default"}=s,O=T.useMemo(()=>{let L=Cn(y,p);return L==null?null:{location:{pathname:L,search:v,hash:x,state:S,key:N},navigationType:o}},[p,y,v,x,S,N,o]);return It(O!=null,`<Router basename="${p}"> is not able to match the URL "${y}${v}${x}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:T.createElement(Kt.Provider,{value:g},T.createElement(kl.Provider,{children:i,value:O}))}function t2({children:n,location:i}){return q1(Au(n),i)}function Au(n,i=[]){let s=[];return T.Children.forEach(n,(o,u)=>{if(!T.isValidElement(o))return;let d=[...i,u];if(o.type===T.Fragment){s.push.apply(s,Au(o.props.children,d));return}Oe(o.type===qt,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let h={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=Au(o.props.children,d)),s.push(h)}),s}var yo="get",vo="application/x-www-form-urlencoded";function Ro(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function n2(n){return Ro(n)&&n.tagName.toLowerCase()==="button"}function a2(n){return Ro(n)&&n.tagName.toLowerCase()==="form"}function i2(n){return Ro(n)&&n.tagName.toLowerCase()==="input"}function l2(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function s2(n,i){return n.button===0&&(!i||i==="_self")&&!l2(n)}var uo=null;function o2(){if(uo===null)try{new FormData(document.createElement("form"),0),uo=!1}catch{uo=!0}return uo}var r2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ru(n){return n!=null&&!r2.has(n)?(It(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vo}"`),null):n}function c2(n,i){let s,o,u,d,h;if(a2(n)){let p=n.getAttribute("action");o=p?Cn(p,i):null,s=n.getAttribute("method")||yo,u=ru(n.getAttribute("enctype"))||vo,d=new FormData(n)}else if(n2(n)||i2(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=n.getAttribute("formaction")||p.getAttribute("action");if(o=g?Cn(g,i):null,s=n.getAttribute("formmethod")||p.getAttribute("method")||yo,u=ru(n.getAttribute("formenctype"))||ru(p.getAttribute("enctype"))||vo,d=new FormData(p,n),!o2()){let{name:y,type:v,value:x}=n;if(v==="image"){let S=y?`${y}.`:"";d.append(`${S}x`,"0"),d.append(`${S}y`,"0")}else y&&d.append(y,x)}}else{if(Ro(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=yo,o=null,u=vo,h=n}return d&&u==="text/plain"&&(h=d,d=void 0),{action:o,method:s.toLowerCase(),encType:u,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ef(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function u2(n,i,s,o){let u=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${o}`:u.pathname=`${u.pathname}.${o}`:u.pathname==="/"?u.pathname=`_root.${o}`:i&&Cn(u.pathname,i)==="/"?u.pathname=`${i.replace(/\/$/,"")}/_root.${o}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${o}`,u}async function f2(n,i){if(n.id in i)return i[n.id];try{let s=await import(n.module);return i[n.id]=s,s}catch(s){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function d2(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function h2(n,i,s){let o=await Promise.all(n.map(async u=>{let d=i.routes[u.route.id];if(d){let h=await f2(d,s);return h.links?h.links():[]}return[]}));return y2(o.flat(1).filter(d2).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function $p(n,i,s,o,u,d){let h=(g,y)=>s[y]?g.route.id!==s[y].route.id:!0,p=(g,y)=>s[y].pathname!==g.pathname||s[y].route.path?.endsWith("*")&&s[y].params["*"]!==g.params["*"];return d==="assets"?i.filter((g,y)=>h(g,y)||p(g,y)):d==="data"?i.filter((g,y)=>{let v=o.routes[g.route.id];if(!v||!v.hasLoader)return!1;if(h(g,y)||p(g,y))return!0;if(g.route.shouldRevalidate){let x=g.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function m2(n,i,{includeHydrateFallback:s}={}){return p2(n.map(o=>{let u=i.routes[o.route.id];if(!u)return[];let d=[u.module];return u.clientActionModule&&(d=d.concat(u.clientActionModule)),u.clientLoaderModule&&(d=d.concat(u.clientLoaderModule)),s&&u.hydrateFallbackModule&&(d=d.concat(u.hydrateFallbackModule)),u.imports&&(d=d.concat(u.imports)),d}).flat(1))}function p2(n){return[...new Set(n)]}function g2(n){let i={},s=Object.keys(n).sort();for(let o of s)i[o]=n[o];return i}function y2(n,i){let s=new Set;return new Set(i),n.reduce((o,u)=>{let d=JSON.stringify(g2(u));return s.has(d)||(s.add(d),o.push({key:d,link:u})),o},[])}function O0(){let n=T.useContext(Ni);return ef(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function v2(){let n=T.useContext(Do);return ef(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var tf=T.createContext(void 0);tf.displayName="FrameworkContext";function L0(){let n=T.useContext(tf);return ef(n,"You must render this element inside a <HydratedRouter> element"),n}function x2(n,i){let s=T.useContext(tf),[o,u]=T.useState(!1),[d,h]=T.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:y,onMouseLeave:v,onTouchStart:x}=i,S=T.useRef(null);T.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let L=_=>{_.forEach(H=>{h(H.isIntersecting)})},R=new IntersectionObserver(L,{threshold:.5});return S.current&&R.observe(S.current),()=>{R.disconnect()}}},[n]),T.useEffect(()=>{if(o){let L=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(L)}}},[o]);let N=()=>{u(!0)},O=()=>{u(!1),h(!1)};return s?n!=="intent"?[d,S,{}]:[d,S,{onFocus:El(p,N),onBlur:El(g,O),onMouseEnter:El(y,N),onMouseLeave:El(v,O),onTouchStart:El(x,N)}]:[!1,S,{}]}function El(n,i){return s=>{n&&n(s),s.defaultPrevented||i(s)}}function b2({page:n,...i}){let{router:s}=O0(),o=T.useMemo(()=>y0(s.routes,n,s.basename),[s.routes,n,s.basename]);return o?T.createElement(j2,{page:n,matches:o,...i}):null}function S2(n){let{manifest:i,routeModules:s}=L0(),[o,u]=T.useState([]);return T.useEffect(()=>{let d=!1;return h2(n,i,s).then(h=>{d||u(h)}),()=>{d=!0}},[n,i,s]),o}function j2({page:n,matches:i,...s}){let o=sa(),{future:u,manifest:d,routeModules:h}=L0(),{basename:p}=O0(),{loaderData:g,matches:y}=v2(),v=T.useMemo(()=>$p(n,i,y,d,o,"data"),[n,i,y,d,o]),x=T.useMemo(()=>$p(n,i,y,d,o,"assets"),[n,i,y,d,o]),S=T.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let L=new Set,R=!1;if(i.forEach(H=>{let U=d.routes[H.route.id];!U||!U.hasLoader||(!v.some(J=>J.route.id===H.route.id)&&H.route.id in g&&h[H.route.id]?.shouldRevalidate||U.hasClientLoader?R=!0:L.add(H.route.id))}),L.size===0)return[];let _=u2(n,p,u.unstable_trailingSlashAwareDataRequests,"data");return R&&L.size>0&&_.searchParams.set("_routes",i.filter(H=>L.has(H.route.id)).map(H=>H.route.id).join(",")),[_.pathname+_.search]},[p,u.unstable_trailingSlashAwareDataRequests,g,o,d,v,i,n,h]),N=T.useMemo(()=>m2(x,d),[x,d]),O=S2(x);return T.createElement(T.Fragment,null,S.map(L=>T.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...s})),N.map(L=>T.createElement("link",{key:L,rel:"modulepreload",href:L,...s})),O.map(({key:L,link:R})=>T.createElement("link",{key:L,nonce:s.nonce,...R})))}function T2(...n){return i=>{n.forEach(s=>{typeof s=="function"?s(i):s!=null&&(s.current=i)})}}var E2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{E2&&(window.__reactRouterVersion="7.12.0")}catch{}function N2({basename:n,children:i,unstable_useTransitions:s,window:o}){let u=T.useRef();u.current==null&&(u.current=l1({window:o,v5Compat:!0}));let d=u.current,[h,p]=T.useState({action:d.action,location:d.location}),g=T.useCallback(y=>{s===!1?p(y):T.startTransition(()=>p(y))},[s]);return T.useLayoutEffect(()=>d.listen(g),[d,g]),T.createElement(e2,{basename:n,children:i,location:h.location,navigationType:h.action,navigator:d,unstable_useTransitions:s})}var V0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,at=T.forwardRef(function({onClick:i,discover:s="render",prefetch:o="none",relative:u,reloadDocument:d,replace:h,state:p,target:g,to:y,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:S,...N},O){let{basename:L,unstable_useTransitions:R}=T.useContext(Kt),_=typeof y=="string"&&V0.test(y),H=E0(y,L);y=H.to;let U=k1(y,{relative:u}),[J,X,te]=x2(o,N),Z=M2(y,{replace:h,state:p,target:g,preventScrollReset:v,relative:u,viewTransition:x,unstable_defaultShouldRevalidate:S,unstable_useTransitions:R});function K(be){i&&i(be),be.defaultPrevented||Z(be)}let oe=T.createElement("a",{...N,...te,href:H.absoluteURL||U,onClick:H.isExternal||d?i:K,ref:T2(O,X),target:g,"data-discover":!_&&s==="render"?"true":void 0});return J&&!_?T.createElement(T.Fragment,null,oe,T.createElement(b2,{page:U})):oe});at.displayName="Link";var A2=T.forwardRef(function({"aria-current":i="page",caseSensitive:s=!1,className:o="",end:u=!1,style:d,to:h,viewTransition:p,children:g,...y},v){let x=ql(h,{relative:y.relative}),S=sa(),N=T.useContext(Do),{navigator:O,basename:L}=T.useContext(Kt),R=N!=null&&L2(x)&&p===!0,_=O.encodeLocation?O.encodeLocation(x).pathname:x.pathname,H=S.pathname,U=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;s||(H=H.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&L&&(U=Cn(U,L)||U);const J=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let X=H===_||!u&&H.startsWith(_)&&H.charAt(J)==="/",te=U!=null&&(U===_||!u&&U.startsWith(_)&&U.charAt(_.length)==="/"),Z={isActive:X,isPending:te,isTransitioning:R},K=X?i:void 0,oe;typeof o=="function"?oe=o(Z):oe=[o,X?"active":null,te?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let be=typeof d=="function"?d(Z):d;return T.createElement(at,{...y,"aria-current":K,className:oe,ref:v,style:be,to:h,viewTransition:p},typeof g=="function"?g(Z):g)});A2.displayName="NavLink";var w2=T.forwardRef(({discover:n="render",fetcherKey:i,navigate:s,reloadDocument:o,replace:u,state:d,method:h=yo,action:p,onSubmit:g,relative:y,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:S,...N},O)=>{let{unstable_useTransitions:L}=T.useContext(Kt),R=z2(),_=O2(p,{relative:y}),H=h.toLowerCase()==="get"?"get":"post",U=typeof p=="string"&&V0.test(p),J=X=>{if(g&&g(X),X.defaultPrevented)return;X.preventDefault();let te=X.nativeEvent.submitter,Z=te?.getAttribute("formmethod")||h,K=()=>R(te||X.currentTarget,{fetcherKey:i,method:Z,navigate:s,replace:u,state:d,relative:y,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:S});L&&s!==!1?T.startTransition(()=>K()):K()};return T.createElement("form",{ref:O,method:H,action:_,onSubmit:o?g:J,...N,"data-discover":!U&&n==="render"?"true":void 0})});w2.displayName="Form";function C2(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _0(n){let i=T.useContext(Ni);return Oe(i,C2(n)),i}function M2(n,{target:i,replace:s,state:o,preventScrollReset:u,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:p,unstable_useTransitions:g}={}){let y=Iu(),v=sa(),x=ql(n,{relative:d});return T.useCallback(S=>{if(s2(S,i)){S.preventDefault();let N=s!==void 0?s:Ol(v)===Ol(x),O=()=>y(n,{replace:N,state:o,preventScrollReset:u,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:p});g?T.startTransition(()=>O()):O()}},[v,y,x,s,o,i,n,u,d,h,p,g])}var D2=0,R2=()=>`__${String(++D2)}__`;function z2(){let{router:n}=_0("useSubmit"),{basename:i}=T.useContext(Kt),s=J1(),o=n.fetch,u=n.navigate;return T.useCallback(async(d,h={})=>{let{action:p,method:g,encType:y,formData:v,body:x}=c2(d,i);if(h.navigate===!1){let S=h.fetcherKey||R2();await o(S,s,h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:v,body:x,formMethod:h.method||g,formEncType:h.encType||y,flushSync:h.flushSync})}else await u(h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:v,body:x,formMethod:h.method||g,formEncType:h.encType||y,replace:h.replace,state:h.state,fromRouteId:s,flushSync:h.flushSync,viewTransition:h.viewTransition})},[o,u,i,s])}function O2(n,{relative:i}={}){let{basename:s}=T.useContext(Kt),o=T.useContext(Dn);Oe(o,"useFormAction must be used inside a RouteContext");let[u]=o.matches.slice(-1),d={...ql(n||".",{relative:i})},h=sa();if(n==null){d.search=h.search;let p=new URLSearchParams(d.search),g=p.getAll("index");if(g.some(v=>v==="")){p.delete("index"),g.filter(x=>x).forEach(x=>p.append("index",x));let v=p.toString();d.search=v?`?${v}`:""}}return(!n||n===".")&&u.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:An([s,d.pathname])),Ol(d)}function L2(n,{relative:i}={}){let s=T.useContext(A0);Oe(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=_0("useViewTransitionState"),u=ql(n,{relative:i});if(!s.isTransitioning)return!1;let d=Cn(s.currentLocation.pathname,o)||s.currentLocation.pathname,h=Cn(s.nextLocation.pathname,o)||s.nextLocation.pathname;return To(u.pathname,h)!=null||To(u.pathname,d)!=null}const nf=T.createContext({});function af(n){const i=T.useRef(null);return i.current===null&&(i.current=n()),i.current}const lf=typeof window<"u",B0=lf?T.useLayoutEffect:T.useEffect,zo=T.createContext(null);function sf(n,i){n.indexOf(i)===-1&&n.push(i)}function of(n,i){const s=n.indexOf(i);s>-1&&n.splice(s,1)}const sn=(n,i,s)=>s>i?i:s<n?n:s;let rf=()=>{};const Mn={},U0=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function k0(n){return typeof n=="object"&&n!==null}const H0=n=>/^0[^.\s]+$/u.test(n);function cf(n){let i;return()=>(i===void 0&&(i=n()),i)}const Xt=n=>n,V2=(n,i)=>s=>i(n(s)),Yl=(...n)=>n.reduce(V2),Ll=(n,i,s)=>{const o=i-n;return o===0?1:(s-n)/o};class uf{constructor(){this.subscriptions=[]}add(i){return sf(this.subscriptions,i),()=>of(this.subscriptions,i)}notify(i,s,o){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](i,s,o);else for(let d=0;d<u;d++){const h=this.subscriptions[d];h&&h(i,s,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const wn=n=>n*1e3,Gt=n=>n/1e3;function q0(n,i){return i?n*(1e3/i):0}const Y0=(n,i,s)=>(((1-3*s+3*i)*n+(3*s-6*i))*n+3*i)*n,_2=1e-7,B2=12;function U2(n,i,s,o,u){let d,h,p=0;do h=i+(s-i)/2,d=Y0(h,o,u)-n,d>0?s=h:i=h;while(Math.abs(d)>_2&&++p<B2);return h}function Gl(n,i,s,o){if(n===i&&s===o)return Xt;const u=d=>U2(d,0,1,n,s);return d=>d===0||d===1?d:Y0(u(d),i,o)}const G0=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,X0=n=>i=>1-n(1-i),K0=Gl(.33,1.53,.69,.99),ff=X0(K0),Z0=G0(ff),Q0=n=>(n*=2)<1?.5*ff(n):.5*(2-Math.pow(2,-10*(n-1))),df=n=>1-Math.sin(Math.acos(n)),P0=X0(df),F0=G0(df),k2=Gl(.42,0,1,1),H2=Gl(0,0,.58,1),J0=Gl(.42,0,.58,1),q2=n=>Array.isArray(n)&&typeof n[0]!="number",I0=n=>Array.isArray(n)&&typeof n[0]=="number",Y2={linear:Xt,easeIn:k2,easeInOut:J0,easeOut:H2,circIn:df,circInOut:F0,circOut:P0,backIn:ff,backInOut:Z0,backOut:K0,anticipate:Q0},G2=n=>typeof n=="string",Wp=n=>{if(I0(n)){rf(n.length===4);const[i,s,o,u]=n;return Gl(i,s,o,u)}else if(G2(n))return Y2[n];return n},fo=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function X2(n,i){let s=new Set,o=new Set,u=!1,d=!1;const h=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function g(v){h.has(v)&&(y.schedule(v),n()),v(p)}const y={schedule:(v,x=!1,S=!1)=>{const O=S&&u?s:o;return x&&h.add(v),O.has(v)||O.add(v),v},cancel:v=>{o.delete(v),h.delete(v)},process:v=>{if(p=v,u){d=!0;return}u=!0,[s,o]=[o,s],s.forEach(g),s.clear(),u=!1,d&&(d=!1,y.process(v))}};return y}const K2=40;function $0(n,i){let s=!1,o=!0;const u={delta:0,timestamp:0,isProcessing:!1},d=()=>s=!0,h=fo.reduce((U,J)=>(U[J]=X2(d),U),{}),{setup:p,read:g,resolveKeyframes:y,preUpdate:v,update:x,preRender:S,render:N,postRender:O}=h,L=()=>{const U=Mn.useManualTiming?u.timestamp:performance.now();s=!1,Mn.useManualTiming||(u.delta=o?1e3/60:Math.max(Math.min(U-u.timestamp,K2),1)),u.timestamp=U,u.isProcessing=!0,p.process(u),g.process(u),y.process(u),v.process(u),x.process(u),S.process(u),N.process(u),O.process(u),u.isProcessing=!1,s&&i&&(o=!1,n(L))},R=()=>{s=!0,o=!0,u.isProcessing||n(L)};return{schedule:fo.reduce((U,J)=>{const X=h[J];return U[J]=(te,Z=!1,K=!1)=>(s||R(),X.schedule(te,Z,K)),U},{}),cancel:U=>{for(let J=0;J<fo.length;J++)h[fo[J]].cancel(U)},state:u,steps:h}}const{schedule:De,cancel:ia,state:it,steps:cu}=$0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Xt,!0);let xo;function Z2(){xo=void 0}const ut={now:()=>(xo===void 0&&ut.set(it.isProcessing||Mn.useManualTiming?it.timestamp:performance.now()),xo),set:n=>{xo=n,queueMicrotask(Z2)}},W0=n=>i=>typeof i=="string"&&i.startsWith(n),ey=W0("--"),Q2=W0("var(--"),hf=n=>Q2(n)?P2.test(n.split("/*")[0].trim()):!1,P2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function eg(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Ai={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Vl={...Ai,transform:n=>sn(0,1,n)},ho={...Ai,default:1},Cl=n=>Math.round(n*1e5)/1e5,mf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function F2(n){return n==null}const J2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,pf=(n,i)=>s=>!!(typeof s=="string"&&J2.test(s)&&s.startsWith(n)||i&&!F2(s)&&Object.prototype.hasOwnProperty.call(s,i)),ty=(n,i,s)=>o=>{if(typeof o!="string")return o;const[u,d,h,p]=o.match(mf);return{[n]:parseFloat(u),[i]:parseFloat(d),[s]:parseFloat(h),alpha:p!==void 0?parseFloat(p):1}},I2=n=>sn(0,255,n),uu={...Ai,transform:n=>Math.round(I2(n))},Ma={test:pf("rgb","red"),parse:ty("red","green","blue"),transform:({red:n,green:i,blue:s,alpha:o=1})=>"rgba("+uu.transform(n)+", "+uu.transform(i)+", "+uu.transform(s)+", "+Cl(Vl.transform(o))+")"};function $2(n){let i="",s="",o="",u="";return n.length>5?(i=n.substring(1,3),s=n.substring(3,5),o=n.substring(5,7),u=n.substring(7,9)):(i=n.substring(1,2),s=n.substring(2,3),o=n.substring(3,4),u=n.substring(4,5),i+=i,s+=s,o+=o,u+=u),{red:parseInt(i,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:u?parseInt(u,16)/255:1}}const wu={test:pf("#"),parse:$2,transform:Ma.transform},Xl=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),na=Xl("deg"),ln=Xl("%"),P=Xl("px"),W2=Xl("vh"),eS=Xl("vw"),tg={...ln,parse:n=>ln.parse(n)/100,transform:n=>ln.transform(n*100)},yi={test:pf("hsl","hue"),parse:ty("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:s,alpha:o=1})=>"hsla("+Math.round(n)+", "+ln.transform(Cl(i))+", "+ln.transform(Cl(s))+", "+Cl(Vl.transform(o))+")"},Ze={test:n=>Ma.test(n)||wu.test(n)||yi.test(n),parse:n=>Ma.test(n)?Ma.parse(n):yi.test(n)?yi.parse(n):wu.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ma.transform(n):yi.transform(n),getAnimatableNone:n=>{const i=Ze.parse(n);return i.alpha=0,Ze.transform(i)}},tS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function nS(n){return isNaN(n)&&typeof n=="string"&&(n.match(mf)?.length||0)+(n.match(tS)?.length||0)>0}const ny="number",ay="color",aS="var",iS="var(",ng="${}",lS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function _l(n){const i=n.toString(),s=[],o={color:[],number:[],var:[]},u=[];let d=0;const p=i.replace(lS,g=>(Ze.test(g)?(o.color.push(d),u.push(ay),s.push(Ze.parse(g))):g.startsWith(iS)?(o.var.push(d),u.push(aS),s.push(g)):(o.number.push(d),u.push(ny),s.push(parseFloat(g))),++d,ng)).split(ng);return{values:s,split:p,indexes:o,types:u}}function iy(n){return _l(n).values}function ly(n){const{split:i,types:s}=_l(n),o=i.length;return u=>{let d="";for(let h=0;h<o;h++)if(d+=i[h],u[h]!==void 0){const p=s[h];p===ny?d+=Cl(u[h]):p===ay?d+=Ze.transform(u[h]):d+=u[h]}return d}}const sS=n=>typeof n=="number"?0:Ze.test(n)?Ze.getAnimatableNone(n):n;function oS(n){const i=iy(n);return ly(n)(i.map(sS))}const la={test:nS,parse:iy,createTransformer:ly,getAnimatableNone:oS};function fu(n,i,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(i-n)*6*s:s<1/2?i:s<2/3?n+(i-n)*(2/3-s)*6:n}function rS({hue:n,saturation:i,lightness:s,alpha:o}){n/=360,i/=100,s/=100;let u=0,d=0,h=0;if(!i)u=d=h=s;else{const p=s<.5?s*(1+i):s+i-s*i,g=2*s-p;u=fu(g,p,n+1/3),d=fu(g,p,n),h=fu(g,p,n-1/3)}return{red:Math.round(u*255),green:Math.round(d*255),blue:Math.round(h*255),alpha:o}}function Eo(n,i){return s=>s>0?i:n}const ze=(n,i,s)=>n+(i-n)*s,du=(n,i,s)=>{const o=n*n,u=s*(i*i-o)+o;return u<0?0:Math.sqrt(u)},cS=[wu,Ma,yi],uS=n=>cS.find(i=>i.test(n));function ag(n){const i=uS(n);if(!i)return!1;let s=i.parse(n);return i===yi&&(s=rS(s)),s}const ig=(n,i)=>{const s=ag(n),o=ag(i);if(!s||!o)return Eo(n,i);const u={...s};return d=>(u.red=du(s.red,o.red,d),u.green=du(s.green,o.green,d),u.blue=du(s.blue,o.blue,d),u.alpha=ze(s.alpha,o.alpha,d),Ma.transform(u))},Cu=new Set(["none","hidden"]);function fS(n,i){return Cu.has(n)?s=>s<=0?n:i:s=>s>=1?i:n}function dS(n,i){return s=>ze(n,i,s)}function gf(n){return typeof n=="number"?dS:typeof n=="string"?hf(n)?Eo:Ze.test(n)?ig:pS:Array.isArray(n)?sy:typeof n=="object"?Ze.test(n)?ig:hS:Eo}function sy(n,i){const s=[...n],o=s.length,u=n.map((d,h)=>gf(d)(d,i[h]));return d=>{for(let h=0;h<o;h++)s[h]=u[h](d);return s}}function hS(n,i){const s={...n,...i},o={};for(const u in s)n[u]!==void 0&&i[u]!==void 0&&(o[u]=gf(n[u])(n[u],i[u]));return u=>{for(const d in o)s[d]=o[d](u);return s}}function mS(n,i){const s=[],o={color:0,var:0,number:0};for(let u=0;u<i.values.length;u++){const d=i.types[u],h=n.indexes[d][o[d]],p=n.values[h]??0;s[u]=p,o[d]++}return s}const pS=(n,i)=>{const s=la.createTransformer(i),o=_l(n),u=_l(i);return o.indexes.var.length===u.indexes.var.length&&o.indexes.color.length===u.indexes.color.length&&o.indexes.number.length>=u.indexes.number.length?Cu.has(n)&&!u.values.length||Cu.has(i)&&!o.values.length?fS(n,i):Yl(sy(mS(o,u),u.values),s):Eo(n,i)};function oy(n,i,s){return typeof n=="number"&&typeof i=="number"&&typeof s=="number"?ze(n,i,s):gf(n)(n,i)}const gS=n=>{const i=({timestamp:s})=>n(s);return{start:(s=!0)=>De.update(i,s),stop:()=>ia(i),now:()=>it.isProcessing?it.timestamp:ut.now()}},ry=(n,i,s=10)=>{let o="";const u=Math.max(Math.round(i/s),2);for(let d=0;d<u;d++)o+=Math.round(n(d/(u-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},No=2e4;function yf(n){let i=0;const s=50;let o=n.next(i);for(;!o.done&&i<No;)i+=s,o=n.next(i);return i>=No?1/0:i}function yS(n,i=100,s){const o=s({...n,keyframes:[0,i]}),u=Math.min(yf(o),No);return{type:"keyframes",ease:d=>o.next(u*d).value/i,duration:Gt(u)}}const vS=5;function cy(n,i,s){const o=Math.max(i-vS,0);return q0(s-n(o),i-o)}const _e={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},hu=.001;function xS({duration:n=_e.duration,bounce:i=_e.bounce,velocity:s=_e.velocity,mass:o=_e.mass}){let u,d,h=1-i;h=sn(_e.minDamping,_e.maxDamping,h),n=sn(_e.minDuration,_e.maxDuration,Gt(n)),h<1?(u=y=>{const v=y*h,x=v*n,S=v-s,N=Mu(y,h),O=Math.exp(-x);return hu-S/N*O},d=y=>{const x=y*h*n,S=x*s+s,N=Math.pow(h,2)*Math.pow(y,2)*n,O=Math.exp(-x),L=Mu(Math.pow(y,2),h);return(-u(y)+hu>0?-1:1)*((S-N)*O)/L}):(u=y=>{const v=Math.exp(-y*n),x=(y-s)*n+1;return-hu+v*x},d=y=>{const v=Math.exp(-y*n),x=(s-y)*(n*n);return v*x});const p=5/n,g=SS(u,d,p);if(n=wn(n),isNaN(g))return{stiffness:_e.stiffness,damping:_e.damping,duration:n};{const y=Math.pow(g,2)*o;return{stiffness:y,damping:h*2*Math.sqrt(o*y),duration:n}}}const bS=12;function SS(n,i,s){let o=s;for(let u=1;u<bS;u++)o=o-n(o)/i(o);return o}function Mu(n,i){return n*Math.sqrt(1-i*i)}const jS=["duration","bounce"],TS=["stiffness","damping","mass"];function lg(n,i){return i.some(s=>n[s]!==void 0)}function ES(n){let i={velocity:_e.velocity,stiffness:_e.stiffness,damping:_e.damping,mass:_e.mass,isResolvedFromDuration:!1,...n};if(!lg(n,TS)&&lg(n,jS))if(n.visualDuration){const s=n.visualDuration,o=2*Math.PI/(s*1.2),u=o*o,d=2*sn(.05,1,1-(n.bounce||0))*Math.sqrt(u);i={...i,mass:_e.mass,stiffness:u,damping:d}}else{const s=xS(n);i={...i,...s,mass:_e.mass},i.isResolvedFromDuration=!0}return i}function Ao(n=_e.visualDuration,i=_e.bounce){const s=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:o,restDelta:u}=s;const d=s.keyframes[0],h=s.keyframes[s.keyframes.length-1],p={done:!1,value:d},{stiffness:g,damping:y,mass:v,duration:x,velocity:S,isResolvedFromDuration:N}=ES({...s,velocity:-Gt(s.velocity||0)}),O=S||0,L=y/(2*Math.sqrt(g*v)),R=h-d,_=Gt(Math.sqrt(g/v)),H=Math.abs(R)<5;o||(o=H?_e.restSpeed.granular:_e.restSpeed.default),u||(u=H?_e.restDelta.granular:_e.restDelta.default);let U;if(L<1){const X=Mu(_,L);U=te=>{const Z=Math.exp(-L*_*te);return h-Z*((O+L*_*R)/X*Math.sin(X*te)+R*Math.cos(X*te))}}else if(L===1)U=X=>h-Math.exp(-_*X)*(R+(O+_*R)*X);else{const X=_*Math.sqrt(L*L-1);U=te=>{const Z=Math.exp(-L*_*te),K=Math.min(X*te,300);return h-Z*((O+L*_*R)*Math.sinh(K)+X*R*Math.cosh(K))/X}}const J={calculatedDuration:N&&x||null,next:X=>{const te=U(X);if(N)p.done=X>=x;else{let Z=X===0?O:0;L<1&&(Z=X===0?wn(O):cy(U,X,te));const K=Math.abs(Z)<=o,oe=Math.abs(h-te)<=u;p.done=K&&oe}return p.value=p.done?h:te,p},toString:()=>{const X=Math.min(yf(J),No),te=ry(Z=>J.next(X*Z).value,X,30);return X+"ms "+te},toTransition:()=>{}};return J}Ao.applyToOptions=n=>{const i=yS(n,100,Ao);return n.ease=i.ease,n.duration=wn(i.duration),n.type="keyframes",n};function Du({keyframes:n,velocity:i=0,power:s=.8,timeConstant:o=325,bounceDamping:u=10,bounceStiffness:d=500,modifyTarget:h,min:p,max:g,restDelta:y=.5,restSpeed:v}){const x=n[0],S={done:!1,value:x},N=K=>p!==void 0&&K<p||g!==void 0&&K>g,O=K=>p===void 0?g:g===void 0||Math.abs(p-K)<Math.abs(g-K)?p:g;let L=s*i;const R=x+L,_=h===void 0?R:h(R);_!==R&&(L=_-x);const H=K=>-L*Math.exp(-K/o),U=K=>_+H(K),J=K=>{const oe=H(K),be=U(K);S.done=Math.abs(oe)<=y,S.value=S.done?_:be};let X,te;const Z=K=>{N(S.value)&&(X=K,te=Ao({keyframes:[S.value,O(S.value)],velocity:cy(U,K,S.value),damping:u,stiffness:d,restDelta:y,restSpeed:v}))};return Z(0),{calculatedDuration:null,next:K=>{let oe=!1;return!te&&X===void 0&&(oe=!0,J(K),Z(K)),X!==void 0&&K>=X?te.next(K-X):(!oe&&J(K),S)}}}function NS(n,i,s){const o=[],u=s||Mn.mix||oy,d=n.length-1;for(let h=0;h<d;h++){let p=u(n[h],n[h+1]);if(i){const g=Array.isArray(i)?i[h]||Xt:i;p=Yl(g,p)}o.push(p)}return o}function AS(n,i,{clamp:s=!0,ease:o,mixer:u}={}){const d=n.length;if(rf(d===i.length),d===1)return()=>i[0];if(d===2&&i[0]===i[1])return()=>i[1];const h=n[0]===n[1];n[0]>n[d-1]&&(n=[...n].reverse(),i=[...i].reverse());const p=NS(i,o,u),g=p.length,y=v=>{if(h&&v<n[0])return i[0];let x=0;if(g>1)for(;x<n.length-2&&!(v<n[x+1]);x++);const S=Ll(n[x],n[x+1],v);return p[x](S)};return s?v=>y(sn(n[0],n[d-1],v)):y}function wS(n,i){const s=n[n.length-1];for(let o=1;o<=i;o++){const u=Ll(0,i,o);n.push(ze(s,1,u))}}function CS(n){const i=[0];return wS(i,n.length-1),i}function MS(n,i){return n.map(s=>s*i)}function DS(n,i){return n.map(()=>i||J0).splice(0,n.length-1)}function Ml({duration:n=300,keyframes:i,times:s,ease:o="easeInOut"}){const u=q2(o)?o.map(Wp):Wp(o),d={done:!1,value:i[0]},h=MS(s&&s.length===i.length?s:CS(i),n),p=AS(h,i,{ease:Array.isArray(u)?u:DS(i,u)});return{calculatedDuration:n,next:g=>(d.value=p(g),d.done=g>=n,d)}}const RS=n=>n!==null;function vf(n,{repeat:i,repeatType:s="loop"},o,u=1){const d=n.filter(RS),p=u<0||i&&s!=="loop"&&i%2===1?0:d.length-1;return!p||o===void 0?d[p]:o}const zS={decay:Du,inertia:Du,tween:Ml,keyframes:Ml,spring:Ao};function uy(n){typeof n.type=="string"&&(n.type=zS[n.type])}class xf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,s){return this.finished.then(i,s)}}const OS=n=>n/100;class bf extends xf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:s}=this.options;s&&s.updatedAt!==ut.now()&&this.tick(ut.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;uy(i);const{type:s=Ml,repeat:o=0,repeatDelay:u=0,repeatType:d,velocity:h=0}=i;let{keyframes:p}=i;const g=s||Ml;g!==Ml&&typeof p[0]!="number"&&(this.mixKeyframes=Yl(OS,oy(p[0],p[1])),p=[0,100]);const y=g({...i,keyframes:p});d==="mirror"&&(this.mirroredGenerator=g({...i,keyframes:[...p].reverse(),velocity:-h})),y.calculatedDuration===null&&(y.calculatedDuration=yf(y));const{calculatedDuration:v}=y;this.calculatedDuration=v,this.resolvedDuration=v+u,this.totalDuration=this.resolvedDuration*(o+1)-u,this.generator=y}updateTime(i){const s=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(i,s=!1){const{generator:o,totalDuration:u,mixKeyframes:d,mirroredGenerator:h,resolvedDuration:p,calculatedDuration:g}=this;if(this.startTime===null)return o.next(0);const{delay:y=0,keyframes:v,repeat:x,repeatType:S,repeatDelay:N,type:O,onUpdate:L,finalKeyframe:R}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-u/this.speed,this.startTime)),s?this.currentTime=i:this.updateTime(i);const _=this.currentTime-y*(this.playbackSpeed>=0?1:-1),H=this.playbackSpeed>=0?_<0:_>u;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let U=this.currentTime,J=o;if(x){const K=Math.min(this.currentTime,u)/p;let oe=Math.floor(K),be=K%1;!be&&K>=1&&(be=1),be===1&&oe--,oe=Math.min(oe,x+1),oe%2&&(S==="reverse"?(be=1-be,N&&(be-=N/p)):S==="mirror"&&(J=h)),U=sn(0,1,be)*p}const X=H?{done:!1,value:v[0]}:J.next(U);d&&(X.value=d(X.value));let{done:te}=X;!H&&g!==null&&(te=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const Z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&te);return Z&&O!==Du&&(X.value=vf(v,this.options,R,this.speed)),L&&L(X.value),Z&&this.finish(),X}then(i,s){return this.finished.then(i,s)}get duration(){return Gt(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Gt(i)}get time(){return Gt(this.currentTime)}set time(i){i=wn(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(ut.now());const s=this.playbackSpeed!==i;this.playbackSpeed=i,s&&(this.time=Gt(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=gS,startTime:s}=this.options;this.driver||(this.driver=i(u=>this.tick(u))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=s??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ut.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function LS(n){for(let i=1;i<n.length;i++)n[i]??(n[i]=n[i-1])}const Da=n=>n*180/Math.PI,Ru=n=>{const i=Da(Math.atan2(n[1],n[0]));return zu(i)},VS={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Ru,rotateZ:Ru,skewX:n=>Da(Math.atan(n[1])),skewY:n=>Da(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},zu=n=>(n=n%360,n<0&&(n+=360),n),sg=Ru,og=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),rg=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),_S={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:og,scaleY:rg,scale:n=>(og(n)+rg(n))/2,rotateX:n=>zu(Da(Math.atan2(n[6],n[5]))),rotateY:n=>zu(Da(Math.atan2(-n[2],n[0]))),rotateZ:sg,rotate:sg,skewX:n=>Da(Math.atan(n[4])),skewY:n=>Da(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Ou(n){return n.includes("scale")?1:0}function Lu(n,i){if(!n||n==="none")return Ou(i);const s=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,u;if(s)o=_S,u=s;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=VS,u=p}if(!u)return Ou(i);const d=o[i],h=u[1].split(",").map(US);return typeof d=="function"?d(h):h[d]}const BS=(n,i)=>{const{transform:s="none"}=getComputedStyle(n);return Lu(s,i)};function US(n){return parseFloat(n.trim())}const wi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ci=new Set(wi),cg=n=>n===Ai||n===P,kS=new Set(["x","y","z"]),HS=wi.filter(n=>!kS.has(n));function qS(n){const i=[];return HS.forEach(s=>{const o=n.getValue(s);o!==void 0&&(i.push([s,o.get()]),o.set(s.startsWith("scale")?1:0))}),i}const aa={width:({x:n},{paddingLeft:i="0",paddingRight:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),height:({y:n},{paddingTop:i="0",paddingBottom:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>Lu(i,"x"),y:(n,{transform:i})=>Lu(i,"y")};aa.translateX=aa.x;aa.translateY=aa.y;const Ra=new Set;let Vu=!1,_u=!1,Bu=!1;function fy(){if(_u){const n=Array.from(Ra).filter(o=>o.needsMeasurement),i=new Set(n.map(o=>o.element)),s=new Map;i.forEach(o=>{const u=qS(o);u.length&&(s.set(o,u),o.render())}),n.forEach(o=>o.measureInitialState()),i.forEach(o=>{o.render();const u=s.get(o);u&&u.forEach(([d,h])=>{o.getValue(d)?.set(h)})}),n.forEach(o=>o.measureEndState()),n.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}_u=!1,Vu=!1,Ra.forEach(n=>n.complete(Bu)),Ra.clear()}function dy(){Ra.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(_u=!0)})}function YS(){Bu=!0,dy(),fy(),Bu=!1}class Sf{constructor(i,s,o,u,d,h=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=s,this.name=o,this.motionValue=u,this.element=d,this.isAsync=h}scheduleResolve(){this.state="scheduled",this.isAsync?(Ra.add(this),Vu||(Vu=!0,De.read(dy),De.resolveKeyframes(fy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:s,element:o,motionValue:u}=this;if(i[0]===null){const d=u?.get(),h=i[i.length-1];if(d!==void 0)i[0]=d;else if(o&&s){const p=o.readValue(s,h);p!=null&&(i[0]=p)}i[0]===void 0&&(i[0]=h),u&&d===void 0&&u.set(i[0])}LS(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Ra.delete(this)}cancel(){this.state==="scheduled"&&(Ra.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const GS=n=>n.startsWith("--");function XS(n,i,s){GS(i)?n.style.setProperty(i,s):n.style[i]=s}const KS=cf(()=>window.ScrollTimeline!==void 0),ZS={};function QS(n,i){const s=cf(n);return()=>ZS[i]??s()}const hy=QS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Al=([n,i,s,o])=>`cubic-bezier(${n}, ${i}, ${s}, ${o})`,ug={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Al([0,.65,.55,1]),circOut:Al([.55,0,1,.45]),backIn:Al([.31,.01,.66,-.59]),backOut:Al([.33,1.53,.69,.99])};function my(n,i){if(n)return typeof n=="function"?hy()?ry(n,i):"ease-out":I0(n)?Al(n):Array.isArray(n)?n.map(s=>my(s,i)||ug.easeOut):ug[n]}function PS(n,i,s,{delay:o=0,duration:u=300,repeat:d=0,repeatType:h="loop",ease:p="easeOut",times:g}={},y=void 0){const v={[i]:s};g&&(v.offset=g);const x=my(p,u);Array.isArray(x)&&(v.easing=x);const S={delay:o,duration:u,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:d+1,direction:h==="reverse"?"alternate":"normal"};return y&&(S.pseudoElement=y),n.animate(v,S)}function py(n){return typeof n=="function"&&"applyToOptions"in n}function FS({type:n,...i}){return py(n)&&hy()?n.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class JS extends xf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;const{element:s,name:o,keyframes:u,pseudoElement:d,allowFlatten:h=!1,finalKeyframe:p,onComplete:g}=i;this.isPseudoElement=!!d,this.allowFlatten=h,this.options=i,rf(typeof i.type!="string");const y=FS(i);this.animation=PS(s,o,u,y,d),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const v=vf(u,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(v):XS(s,o,v),this.animation.cancel()}g?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return Gt(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Gt(i)}get time(){return Gt(Number(this.animation.currentTime)||0)}set time(i){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=wn(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(i){this.manualStartTime=this.animation.startTime=i}attachTimeline({timeline:i,observe:s}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&KS()?(this.animation.timeline=i,Xt):s(this)}}const gy={anticipate:Q0,backInOut:Z0,circInOut:F0};function IS(n){return n in gy}function $S(n){typeof n.ease=="string"&&IS(n.ease)&&(n.ease=gy[n.ease])}const mu=10;class WS extends JS{constructor(i){$S(i),uy(i),super(i),i.startTime!==void 0&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:s,onUpdate:o,onComplete:u,element:d,...h}=this.options;if(!s)return;if(i!==void 0){s.set(i);return}const p=new bf({...h,autoplay:!1}),g=Math.max(mu,ut.now()-this.startTime),y=sn(0,mu,g-mu);s.setWithVelocity(p.sample(Math.max(0,g-y)).value,p.sample(g).value,y),p.stop()}}const fg=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(la.test(n)||n==="0")&&!n.startsWith("url("));function ej(n){const i=n[0];if(n.length===1)return!0;for(let s=0;s<n.length;s++)if(n[s]!==i)return!0}function tj(n,i,s,o){const u=n[0];if(u===null)return!1;if(i==="display"||i==="visibility")return!0;const d=n[n.length-1],h=fg(u,i),p=fg(d,i);return!h||!p?!1:ej(n)||(s==="spring"||py(s))&&o}function Uu(n){n.duration=0,n.type="keyframes"}const nj=new Set(["opacity","clipPath","filter","transform"]),aj=cf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function ij(n){const{motionValue:i,name:s,repeatDelay:o,repeatType:u,damping:d,type:h}=n;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:y}=i.owner.getProps();return aj()&&s&&nj.has(s)&&(s!=="transform"||!y)&&!g&&!o&&u!=="mirror"&&d!==0&&h!=="inertia"}const lj=40;class sj extends xf{constructor({autoplay:i=!0,delay:s=0,type:o="keyframes",repeat:u=0,repeatDelay:d=0,repeatType:h="loop",keyframes:p,name:g,motionValue:y,element:v,...x}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ut.now();const S={autoplay:i,delay:s,type:o,repeat:u,repeatDelay:d,repeatType:h,name:g,motionValue:y,element:v,...x},N=v?.KeyframeResolver||Sf;this.keyframeResolver=new N(p,(O,L,R)=>this.onKeyframesResolved(O,L,S,!R),g,y,v),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,s,o,u){this.keyframeResolver=void 0;const{name:d,type:h,velocity:p,delay:g,isHandoff:y,onUpdate:v}=o;this.resolvedAt=ut.now(),tj(i,d,h,p)||((Mn.instantAnimations||!g)&&v?.(vf(i,o,s)),i[0]=i[i.length-1],Uu(o),o.repeat=0);const S={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>lj?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...o,keyframes:i},N=!y&&ij(S)?new WS({...S,element:S.motionValue.owner.current}):new bf(S);N.finished.then(()=>this.notifyFinished()).catch(Xt),this.pendingTimeline&&(this.stopTimeline=N.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=N}get finished(){return this._animation?this.animation.finished:this._finished}then(i,s){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),YS()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const oj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function rj(n){const i=oj.exec(n);if(!i)return[,];const[,s,o,u]=i;return[`--${s??o}`,u]}function yy(n,i,s=1){const[o,u]=rj(n);if(!o)return;const d=window.getComputedStyle(i).getPropertyValue(o);if(d){const h=d.trim();return U0(h)?parseFloat(h):h}return hf(u)?yy(u,i,s+1):u}function jf(n,i){return n?.[i]??n?.default??n}const vy=new Set(["width","height","top","left","right","bottom",...wi]),cj={test:n=>n==="auto",parse:n=>n},xy=n=>i=>i.test(n),by=[Ai,P,ln,na,eS,W2,cj],dg=n=>by.find(xy(n));function uj(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||H0(n):!0}const fj=new Set(["brightness","contrast","saturate","opacity"]);function dj(n){const[i,s]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[o]=s.match(mf)||[];if(!o)return n;const u=s.replace(o,"");let d=fj.has(i)?1:0;return o!==s&&(d*=100),i+"("+d+u+")"}const hj=/\b([a-z-]*)\(.*?\)/gu,ku={...la,getAnimatableNone:n=>{const i=n.match(hj);return i?i.map(dj).join(" "):n}},hg={...Ai,transform:Math.round},mj={rotate:na,rotateX:na,rotateY:na,rotateZ:na,scale:ho,scaleX:ho,scaleY:ho,scaleZ:ho,skew:na,skewX:na,skewY:na,distance:P,translateX:P,translateY:P,translateZ:P,x:P,y:P,z:P,perspective:P,transformPerspective:P,opacity:Vl,originX:tg,originY:tg,originZ:P},Tf={borderWidth:P,borderTopWidth:P,borderRightWidth:P,borderBottomWidth:P,borderLeftWidth:P,borderRadius:P,radius:P,borderTopLeftRadius:P,borderTopRightRadius:P,borderBottomRightRadius:P,borderBottomLeftRadius:P,width:P,maxWidth:P,height:P,maxHeight:P,top:P,right:P,bottom:P,left:P,inset:P,insetBlock:P,insetBlockStart:P,insetBlockEnd:P,insetInline:P,insetInlineStart:P,insetInlineEnd:P,padding:P,paddingTop:P,paddingRight:P,paddingBottom:P,paddingLeft:P,paddingBlock:P,paddingBlockStart:P,paddingBlockEnd:P,paddingInline:P,paddingInlineStart:P,paddingInlineEnd:P,margin:P,marginTop:P,marginRight:P,marginBottom:P,marginLeft:P,marginBlock:P,marginBlockStart:P,marginBlockEnd:P,marginInline:P,marginInlineStart:P,marginInlineEnd:P,backgroundPositionX:P,backgroundPositionY:P,...mj,zIndex:hg,fillOpacity:Vl,strokeOpacity:Vl,numOctaves:hg},pj={...Tf,color:Ze,backgroundColor:Ze,outlineColor:Ze,fill:Ze,stroke:Ze,borderColor:Ze,borderTopColor:Ze,borderRightColor:Ze,borderBottomColor:Ze,borderLeftColor:Ze,filter:ku,WebkitFilter:ku},Sy=n=>pj[n];function jy(n,i){let s=Sy(n);return s!==ku&&(s=la),s.getAnimatableNone?s.getAnimatableNone(i):void 0}const gj=new Set(["auto","none","0"]);function yj(n,i,s){let o=0,u;for(;o<n.length&&!u;){const d=n[o];typeof d=="string"&&!gj.has(d)&&_l(d).values.length&&(u=n[o]),o++}if(u&&s)for(const d of i)n[d]=jy(s,u)}class vj extends Sf{constructor(i,s,o,u,d){super(i,s,o,u,d,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:s,name:o}=this;if(!s||!s.current)return;super.readKeyframes();for(let v=0;v<i.length;v++){let x=i[v];if(typeof x=="string"&&(x=x.trim(),hf(x))){const S=yy(x,s.current);S!==void 0&&(i[v]=S),v===i.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!vy.has(o)||i.length!==2)return;const[u,d]=i,h=dg(u),p=dg(d),g=eg(u),y=eg(d);if(g!==y&&aa[o]){this.needsMeasurement=!0;return}if(h!==p)if(cg(h)&&cg(p))for(let v=0;v<i.length;v++){const x=i[v];typeof x=="string"&&(i[v]=parseFloat(x))}else aa[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:s}=this,o=[];for(let u=0;u<i.length;u++)(i[u]===null||uj(i[u]))&&o.push(u);o.length&&yj(i,o,s)}measureInitialState(){const{element:i,unresolvedKeyframes:s,name:o}=this;if(!i||!i.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=aa[o](i.measureViewportBox(),window.getComputedStyle(i.current)),s[0]=this.measuredOrigin;const u=s[s.length-1];u!==void 0&&i.getValue(o,u).jump(u,!1)}measureEndState(){const{element:i,name:s,unresolvedKeyframes:o}=this;if(!i||!i.current)return;const u=i.getValue(s);u&&u.jump(this.measuredOrigin,!1);const d=o.length-1,h=o[d];o[d]=aa[s](i.measureViewportBox(),window.getComputedStyle(i.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,g])=>{i.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function xj(n,i,s){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let o=document;const u=s?.[n]??o.querySelectorAll(n);return u?Array.from(u):[]}return Array.from(n)}const Ty=(n,i)=>i&&typeof n=="number"?i.transform(n):n;function Ey(n){return k0(n)&&"offsetHeight"in n}const mg=30,bj=n=>!isNaN(parseFloat(n));class Sj{constructor(i,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const u=ut.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=s.owner}setCurrent(i){this.current=i,this.updatedAt=ut.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=bj(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,s){this.events[i]||(this.events[i]=new uf);const o=this.events[i].add(s);return i==="change"?()=>{o(),De.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,s){this.passiveEffect=i,this.stopPassiveEffect=s}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,s,o){this.set(s),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-o}jump(i,s=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=ut.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>mg)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,mg);return q0(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(i){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=i(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ji(n,i){return new Sj(n,i)}const{schedule:Ef}=$0(queueMicrotask,!1),Jt={x:!1,y:!1};function Ny(){return Jt.x||Jt.y}function jj(n){return n==="x"||n==="y"?Jt[n]?null:(Jt[n]=!0,()=>{Jt[n]=!1}):Jt.x||Jt.y?null:(Jt.x=Jt.y=!0,()=>{Jt.x=Jt.y=!1})}function Ay(n,i){const s=xj(n),o=new AbortController,u={passive:!0,...i,signal:o.signal};return[s,u,()=>o.abort()]}function pg(n){return!(n.pointerType==="touch"||Ny())}function Tj(n,i,s={}){const[o,u,d]=Ay(n,s),h=p=>{if(!pg(p))return;const{target:g}=p,y=i(g,p);if(typeof y!="function"||!g)return;const v=x=>{pg(x)&&(y(x),g.removeEventListener("pointerleave",v))};g.addEventListener("pointerleave",v,u)};return o.forEach(p=>{p.addEventListener("pointerenter",h,u)}),d}const wy=(n,i)=>i?n===i?!0:wy(n,i.parentElement):!1,Nf=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,Ej=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Cy(n){return Ej.has(n.tagName)||n.isContentEditable===!0}const bo=new WeakSet;function gg(n){return i=>{i.key==="Enter"&&n(i)}}function pu(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const Nj=(n,i)=>{const s=n.currentTarget;if(!s)return;const o=gg(()=>{if(bo.has(s))return;pu(s,"down");const u=gg(()=>{pu(s,"up")}),d=()=>pu(s,"cancel");s.addEventListener("keyup",u,i),s.addEventListener("blur",d,i)});s.addEventListener("keydown",o,i),s.addEventListener("blur",()=>s.removeEventListener("keydown",o),i)};function yg(n){return Nf(n)&&!Ny()}function Aj(n,i,s={}){const[o,u,d]=Ay(n,s),h=p=>{const g=p.currentTarget;if(!yg(p))return;bo.add(g);const y=i(g,p),v=(N,O)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",S),bo.has(g)&&bo.delete(g),yg(N)&&typeof y=="function"&&y(N,{success:O})},x=N=>{v(N,g===window||g===document||s.useGlobalTarget||wy(g,N.target))},S=N=>{v(N,!1)};window.addEventListener("pointerup",x,u),window.addEventListener("pointercancel",S,u)};return o.forEach(p=>{(s.useGlobalTarget?window:p).addEventListener("pointerdown",h,u),Ey(p)&&(p.addEventListener("focus",y=>Nj(y,u)),!Cy(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),d}function My(n){return k0(n)&&"ownerSVGElement"in n}function wj(n){return My(n)&&n.tagName==="svg"}const ot=n=>!!(n&&n.getVelocity),Cj=[...by,Ze,la],Mj=n=>Cj.find(xy(n)),Af=T.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function vg(n,i){if(typeof n=="function")return n(i);n!=null&&(n.current=i)}function Dj(...n){return i=>{let s=!1;const o=n.map(u=>{const d=vg(u,i);return!s&&typeof d=="function"&&(s=!0),d});if(s)return()=>{for(let u=0;u<o.length;u++){const d=o[u];typeof d=="function"?d():vg(n[u],null)}}}}function Rj(...n){return T.useCallback(Dj(...n),n)}class zj extends T.Component{getSnapshotBeforeUpdate(i){const s=this.props.childRef.current;if(s&&i.isPresent&&!this.props.isPresent){const o=s.offsetParent,u=Ey(o)&&o.offsetWidth||0,d=this.props.sizeRef.current;d.height=s.offsetHeight||0,d.width=s.offsetWidth||0,d.top=s.offsetTop,d.left=s.offsetLeft,d.right=u-d.width-d.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Oj({children:n,isPresent:i,anchorX:s,root:o}){const u=T.useId(),d=T.useRef(null),h=T.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=T.useContext(Af),g=n.props?.ref??n?.ref,y=Rj(d,g);return T.useInsertionEffect(()=>{const{width:v,height:x,top:S,left:N,right:O}=h.current;if(i||!d.current||!v||!x)return;const L=s==="left"?`left: ${N}`:`right: ${O}`;d.current.dataset.motionPopId=u;const R=document.createElement("style");p&&(R.nonce=p);const _=o??document.head;return _.appendChild(R),R.sheet&&R.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${v}px !important;
            height: ${x}px !important;
            ${L}px !important;
            top: ${S}px !important;
          }
        `),()=>{_.contains(R)&&_.removeChild(R)}},[i]),f.jsx(zj,{isPresent:i,childRef:d,sizeRef:h,children:T.cloneElement(n,{ref:y})})}const Lj=({children:n,initial:i,isPresent:s,onExitComplete:o,custom:u,presenceAffectsLayout:d,mode:h,anchorX:p,root:g})=>{const y=af(Vj),v=T.useId();let x=!0,S=T.useMemo(()=>(x=!1,{id:v,initial:i,isPresent:s,custom:u,onExitComplete:N=>{y.set(N,!0);for(const O of y.values())if(!O)return;o&&o()},register:N=>(y.set(N,!1),()=>y.delete(N))}),[s,y,o]);return d&&x&&(S={...S}),T.useMemo(()=>{y.forEach((N,O)=>y.set(O,!1))},[s]),T.useEffect(()=>{!s&&!y.size&&o&&o()},[s]),h==="popLayout"&&(n=f.jsx(Oj,{isPresent:s,anchorX:p,root:g,children:n})),f.jsx(zo.Provider,{value:S,children:n})};function Vj(){return new Map}function Dy(n=!0){const i=T.useContext(zo);if(i===null)return[!0,null];const{isPresent:s,onExitComplete:o,register:u}=i,d=T.useId();T.useEffect(()=>{if(n)return u(d)},[n]);const h=T.useCallback(()=>n&&o&&o(d),[d,o,n]);return!s&&o?[!1,h]:[!0]}const mo=n=>n.key||"";function xg(n){const i=[];return T.Children.forEach(n,s=>{T.isValidElement(s)&&i.push(s)}),i}const za=({children:n,custom:i,initial:s=!0,onExitComplete:o,presenceAffectsLayout:u=!0,mode:d="sync",propagate:h=!1,anchorX:p="left",root:g})=>{const[y,v]=Dy(h),x=T.useMemo(()=>xg(n),[n]),S=h&&!y?[]:x.map(mo),N=T.useRef(!0),O=T.useRef(x),L=af(()=>new Map),R=T.useRef(new Set),[_,H]=T.useState(x),[U,J]=T.useState(x);B0(()=>{N.current=!1,O.current=x;for(let Z=0;Z<U.length;Z++){const K=mo(U[Z]);S.includes(K)?(L.delete(K),R.current.delete(K)):L.get(K)!==!0&&L.set(K,!1)}},[U,S.length,S.join("-")]);const X=[];if(x!==_){let Z=[...x];for(let K=0;K<U.length;K++){const oe=U[K],be=mo(oe);S.includes(be)||(Z.splice(K,0,oe),X.push(oe))}return d==="wait"&&X.length&&(Z=X),J(xg(Z)),H(x),null}const{forceRender:te}=T.useContext(nf);return f.jsx(f.Fragment,{children:U.map(Z=>{const K=mo(Z),oe=h&&!y?!1:x===U||S.includes(K),be=()=>{if(R.current.has(K))return;if(R.current.add(K),L.has(K))L.set(K,!0);else return;let qe=!0;L.forEach(Qe=>{Qe||(qe=!1)}),qe&&(te?.(),J(O.current),h&&v?.(),o&&o())};return f.jsx(Lj,{isPresent:oe,initial:!N.current||s?void 0:!1,custom:i,presenceAffectsLayout:u,mode:d,root:g,onExitComplete:oe?void 0:be,anchorX:p,children:Z},K)})})},Ry=T.createContext({strict:!1}),bg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ti={};for(const n in bg)Ti[n]={isEnabled:i=>bg[n].some(s=>!!i[s])};function _j(n){for(const i in n)Ti[i]={...Ti[i],...n[i]}}const Bj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function wo(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Bj.has(n)}let zy=n=>!wo(n);function Uj(n){typeof n=="function"&&(zy=i=>i.startsWith("on")?!wo(i):n(i))}try{Uj(require("@emotion/is-prop-valid").default)}catch{}function kj(n,i,s){const o={};for(const u in n)u==="values"&&typeof n.values=="object"||(zy(u)||s===!0&&wo(u)||!i&&!wo(u)||n.draggable&&u.startsWith("onDrag"))&&(o[u]=n[u]);return o}const Oo=T.createContext({});function Lo(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Bl(n){return typeof n=="string"||Array.isArray(n)}const wf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Cf=["initial",...wf];function Vo(n){return Lo(n.animate)||Cf.some(i=>Bl(n[i]))}function Oy(n){return!!(Vo(n)||n.variants)}function Hj(n,i){if(Vo(n)){const{initial:s,animate:o}=n;return{initial:s===!1||Bl(s)?s:void 0,animate:Bl(o)?o:void 0}}return n.inherit!==!1?i:{}}function qj(n){const{initial:i,animate:s}=Hj(n,T.useContext(Oo));return T.useMemo(()=>({initial:i,animate:s}),[Sg(i),Sg(s)])}function Sg(n){return Array.isArray(n)?n.join(" "):n}function jg(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const Nl={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(P.test(n))n=parseFloat(n);else return n;const s=jg(n,i.target.x),o=jg(n,i.target.y);return`${s}% ${o}%`}},Yj={correct:(n,{treeScale:i,projectionDelta:s})=>{const o=n,u=la.parse(n);if(u.length>5)return o;const d=la.createTransformer(n),h=typeof u[0]!="number"?1:0,p=s.x.scale*i.x,g=s.y.scale*i.y;u[0+h]/=p,u[1+h]/=g;const y=ze(p,g,.5);return typeof u[2+h]=="number"&&(u[2+h]/=y),typeof u[3+h]=="number"&&(u[3+h]/=y),d(u)}},Hu={borderRadius:{...Nl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Nl,borderTopRightRadius:Nl,borderBottomLeftRadius:Nl,borderBottomRightRadius:Nl,boxShadow:Yj};function Ly(n,{layout:i,layoutId:s}){return Ci.has(n)||n.startsWith("origin")||(i||s!==void 0)&&(!!Hu[n]||n==="opacity")}const Gj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Xj=wi.length;function Kj(n,i,s){let o="",u=!0;for(let d=0;d<Xj;d++){const h=wi[d],p=n[h];if(p===void 0)continue;let g=!0;if(typeof p=="number"?g=p===(h.startsWith("scale")?1:0):g=parseFloat(p)===0,!g||s){const y=Ty(p,Tf[h]);if(!g){u=!1;const v=Gj[h]||h;o+=`${v}(${y}) `}s&&(i[h]=y)}}return o=o.trim(),s?o=s(i,u?"":o):u&&(o="none"),o}function Mf(n,i,s){const{style:o,vars:u,transformOrigin:d}=n;let h=!1,p=!1;for(const g in i){const y=i[g];if(Ci.has(g)){h=!0;continue}else if(ey(g)){u[g]=y;continue}else{const v=Ty(y,Tf[g]);g.startsWith("origin")?(p=!0,d[g]=v):o[g]=v}}if(i.transform||(h||s?o.transform=Kj(i,n.transform,s):o.transform&&(o.transform="none")),p){const{originX:g="50%",originY:y="50%",originZ:v=0}=d;o.transformOrigin=`${g} ${y} ${v}`}}const Df=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Vy(n,i,s){for(const o in i)!ot(i[o])&&!Ly(o,s)&&(n[o]=i[o])}function Zj({transformTemplate:n},i){return T.useMemo(()=>{const s=Df();return Mf(s,i,n),Object.assign({},s.vars,s.style)},[i])}function Qj(n,i){const s=n.style||{},o={};return Vy(o,s,n),Object.assign(o,Zj(n,i)),o}function Pj(n,i){const s={},o=Qj(n,i);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=o,s}const Fj={offset:"stroke-dashoffset",array:"stroke-dasharray"},Jj={offset:"strokeDashoffset",array:"strokeDasharray"};function Ij(n,i,s=1,o=0,u=!0){n.pathLength=1;const d=u?Fj:Jj;n[d.offset]=P.transform(-o);const h=P.transform(i),p=P.transform(s);n[d.array]=`${h} ${p}`}const $j=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function _y(n,{attrX:i,attrY:s,attrScale:o,pathLength:u,pathSpacing:d=1,pathOffset:h=0,...p},g,y,v){if(Mf(n,p,y),g){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:S}=n;x.transform&&(S.transform=x.transform,delete x.transform),(S.transform||x.transformOrigin)&&(S.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),S.transform&&(S.transformBox=v?.transformBox??"fill-box",delete x.transformBox);for(const N of $j)x[N]!==void 0&&(S[N]=x[N],delete x[N]);i!==void 0&&(x.x=i),s!==void 0&&(x.y=s),o!==void 0&&(x.scale=o),u!==void 0&&Ij(x,u,d,h,!1)}const By=()=>({...Df(),attrs:{}}),Uy=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Wj(n,i,s,o){const u=T.useMemo(()=>{const d=By();return _y(d,i,Uy(o),n.transformTemplate,n.style),{...d.attrs,style:{...d.style}}},[i]);if(n.style){const d={};Vy(d,n.style,n),u.style={...d,...u.style}}return u}const eT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Rf(n){return typeof n!="string"||n.includes("-")?!1:!!(eT.indexOf(n)>-1||/[A-Z]/u.test(n))}function tT(n,i,s,{latestValues:o},u,d=!1,h){const g=(h??Rf(n)?Wj:Pj)(i,o,u,n),y=kj(i,typeof n=="string",d),v=n!==T.Fragment?{...y,...g,ref:s}:{},{children:x}=i,S=T.useMemo(()=>ot(x)?x.get():x,[x]);return T.createElement(n,{...v,children:S})}function Tg(n){const i=[{},{}];return n?.values.forEach((s,o)=>{i[0][o]=s.get(),i[1][o]=s.getVelocity()}),i}function zf(n,i,s,o){if(typeof i=="function"){const[u,d]=Tg(o);i=i(s!==void 0?s:n.custom,u,d)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[u,d]=Tg(o);i=i(s!==void 0?s:n.custom,u,d)}return i}function So(n){return ot(n)?n.get():n}function nT({scrapeMotionValuesFromProps:n,createRenderState:i},s,o,u){return{latestValues:aT(s,o,u,n),renderState:i()}}function aT(n,i,s,o){const u={},d=o(n,{});for(const S in d)u[S]=So(d[S]);let{initial:h,animate:p}=n;const g=Vo(n),y=Oy(n);i&&y&&!g&&n.inherit!==!1&&(h===void 0&&(h=i.initial),p===void 0&&(p=i.animate));let v=s?s.initial===!1:!1;v=v||h===!1;const x=v?p:h;if(x&&typeof x!="boolean"&&!Lo(x)){const S=Array.isArray(x)?x:[x];for(let N=0;N<S.length;N++){const O=zf(n,S[N]);if(O){const{transitionEnd:L,transition:R,..._}=O;for(const H in _){let U=_[H];if(Array.isArray(U)){const J=v?U.length-1:0;U=U[J]}U!==null&&(u[H]=U)}for(const H in L)u[H]=L[H]}}}return u}const ky=n=>(i,s)=>{const o=T.useContext(Oo),u=T.useContext(zo),d=()=>nT(n,i,o,u);return s?d():af(d)};function Of(n,i,s){const{style:o}=n,u={};for(const d in o)(ot(o[d])||i.style&&ot(i.style[d])||Ly(d,n)||s?.getValue(d)?.liveStyle!==void 0)&&(u[d]=o[d]);return u}const iT=ky({scrapeMotionValuesFromProps:Of,createRenderState:Df});function Hy(n,i,s){const o=Of(n,i,s);for(const u in n)if(ot(n[u])||ot(i[u])){const d=wi.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;o[d]=n[u]}return o}const lT=ky({scrapeMotionValuesFromProps:Hy,createRenderState:By}),sT=Symbol.for("motionComponentSymbol");function oT(n,i,s){const o=T.useRef(s);T.useInsertionEffect(()=>{o.current=s});const u=T.useRef(null);return T.useCallback(d=>{d&&n.onMount?.(d),i&&(d?i.mount(d):i.unmount());const h=o.current;if(typeof h=="function")if(d){const p=h(d);typeof p=="function"&&(u.current=p)}else u.current?(u.current(),u.current=null):h(d);else h&&(h.current=d)},[i])}const Lf=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),rT="framerAppearId",qy="data-"+Lf(rT),Yy=T.createContext({});function wl(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function cT(n,i,s,o,u,d){const{visualElement:h}=T.useContext(Oo),p=T.useContext(Ry),g=T.useContext(zo),y=T.useContext(Af).reducedMotion,v=T.useRef(null);o=o||p.renderer,!v.current&&o&&(v.current=o(n,{visualState:i,parent:h,props:s,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:y,isSVG:d}));const x=v.current,S=T.useContext(Yy);x&&!x.projection&&u&&(x.type==="html"||x.type==="svg")&&uT(v.current,s,u,S);const N=T.useRef(!1);T.useInsertionEffect(()=>{x&&N.current&&x.update(s,g)});const O=s[qy],L=T.useRef(!!O&&!window.MotionHandoffIsComplete?.(O)&&window.MotionHasOptimisedAnimation?.(O));return B0(()=>{x&&(N.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),x.scheduleRenderMicrotask(),L.current&&x.animationState&&x.animationState.animateChanges())}),T.useEffect(()=>{x&&(!L.current&&x.animationState&&x.animationState.animateChanges(),L.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(O)}),L.current=!1),x.enteringChildren=void 0)}),x}function uT(n,i,s,o){const{layoutId:u,layout:d,drag:h,dragConstraints:p,layoutScroll:g,layoutRoot:y,layoutCrossfade:v}=i;n.projection=new s(n.latestValues,i["data-framer-portal-id"]?void 0:Gy(n.parent)),n.projection.setOptions({layoutId:u,layout:d,alwaysMeasureLayout:!!h||p&&wl(p),visualElement:n,animationType:typeof d=="string"?d:"both",initialPromotionConfig:o,crossfade:v,layoutScroll:g,layoutRoot:y})}function Gy(n){if(n)return n.options.allowProjection!==!1?n.projection:Gy(n.parent)}function gu(n,{forwardMotionProps:i=!1,type:s}={},o,u){o&&_j(o);const d=s?s==="svg":Rf(n),h=d?lT:iT;function p(y,v){let x;const S={...T.useContext(Af),...y,layoutId:fT(y)},{isStatic:N}=S,O=qj(y),L=h(y,N);if(!N&&lf){dT();const R=hT(S);x=R.MeasureLayout,O.visualElement=cT(n,L,S,u,R.ProjectionNode,d)}return f.jsxs(Oo.Provider,{value:O,children:[x&&O.visualElement?f.jsx(x,{visualElement:O.visualElement,...S}):null,tT(n,y,oT(L,O.visualElement,v),L,N,i,d)]})}p.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const g=T.forwardRef(p);return g[sT]=n,g}function fT({layoutId:n}){const i=T.useContext(nf).id;return i&&n!==void 0?i+"-"+n:n}function dT(n,i){T.useContext(Ry).strict}function hT(n){const{drag:i,layout:s}=Ti;if(!i&&!s)return{};const o={...i,...s};return{MeasureLayout:i?.isEnabled(n)||s?.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function mT(n,i){if(typeof Proxy>"u")return gu;const s=new Map,o=(d,h)=>gu(d,h,n,i),u=(d,h)=>o(d,h);return new Proxy(u,{get:(d,h)=>h==="create"?o:(s.has(h)||s.set(h,gu(h,void 0,n,i)),s.get(h))})}function Xy({top:n,left:i,right:s,bottom:o}){return{x:{min:i,max:s},y:{min:n,max:o}}}function pT({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function gT(n,i){if(!i)return n;const s=i({x:n.left,y:n.top}),o=i({x:n.right,y:n.bottom});return{top:s.y,left:s.x,bottom:o.y,right:o.x}}function yu(n){return n===void 0||n===1}function qu({scale:n,scaleX:i,scaleY:s}){return!yu(n)||!yu(i)||!yu(s)}function Ca(n){return qu(n)||Ky(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Ky(n){return Eg(n.x)||Eg(n.y)}function Eg(n){return n&&n!=="0%"}function Co(n,i,s){const o=n-s,u=i*o;return s+u}function Ng(n,i,s,o,u){return u!==void 0&&(n=Co(n,u,o)),Co(n,s,o)+i}function Yu(n,i=0,s=1,o,u){n.min=Ng(n.min,i,s,o,u),n.max=Ng(n.max,i,s,o,u)}function Zy(n,{x:i,y:s}){Yu(n.x,i.translate,i.scale,i.originPoint),Yu(n.y,s.translate,s.scale,s.originPoint)}const Ag=.999999999999,wg=1.0000000000001;function yT(n,i,s,o=!1){const u=s.length;if(!u)return;i.x=i.y=1;let d,h;for(let p=0;p<u;p++){d=s[p],h=d.projectionDelta;const{visualElement:g}=d.options;g&&g.props.style&&g.props.style.display==="contents"||(o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&xi(n,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),h&&(i.x*=h.x.scale,i.y*=h.y.scale,Zy(n,h)),o&&Ca(d.latestValues)&&xi(n,d.latestValues))}i.x<wg&&i.x>Ag&&(i.x=1),i.y<wg&&i.y>Ag&&(i.y=1)}function vi(n,i){n.min=n.min+i,n.max=n.max+i}function Cg(n,i,s,o,u=.5){const d=ze(n.min,n.max,u);Yu(n,i,s,d,o)}function xi(n,i){Cg(n.x,i.x,i.scaleX,i.scale,i.originX),Cg(n.y,i.y,i.scaleY,i.scale,i.originY)}function Qy(n,i){return Xy(gT(n.getBoundingClientRect(),i))}function vT(n,i,s){const o=Qy(n,s),{scroll:u}=i;return u&&(vi(o.x,u.offset.x),vi(o.y,u.offset.y)),o}const Mg=()=>({translate:0,scale:1,origin:0,originPoint:0}),bi=()=>({x:Mg(),y:Mg()}),Dg=()=>({min:0,max:0}),Fe=()=>({x:Dg(),y:Dg()}),Gu={current:null},Py={current:!1};function xT(){if(Py.current=!0,!!lf)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Gu.current=n.matches;n.addEventListener("change",i),i()}else Gu.current=!1}const bT=new WeakMap;function ST(n,i,s){for(const o in i){const u=i[o],d=s[o];if(ot(u))n.addValue(o,u);else if(ot(d))n.addValue(o,ji(u,{owner:n}));else if(d!==u)if(n.hasValue(o)){const h=n.getValue(o);h.liveStyle===!0?h.jump(u):h.hasAnimated||h.set(u)}else{const h=n.getStaticValue(o);n.addValue(o,ji(h!==void 0?h:u,{owner:n}))}}for(const o in s)i[o]===void 0&&n.removeValue(o);return i}const Rg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class jT{scrapeMotionValuesFromProps(i,s,o){return{}}constructor({parent:i,props:s,presenceContext:o,reducedMotionConfig:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Sf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=ut.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,De.render(this.render,!1,!0))};const{latestValues:g,renderState:y}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=s.initial?{...g}:{},this.renderState=y,this.parent=i,this.props=s,this.presenceContext=o,this.depth=i?i.depth+1:0,this.reducedMotionConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Vo(s),this.isVariantNode=Oy(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:v,...x}=this.scrapeMotionValuesFromProps(s,{},this);for(const S in x){const N=x[S];g[S]!==void 0&&ot(N)&&N.set(g[S])}}mount(i){this.current=i,bT.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,o)=>this.bindToMotionValue(o,s)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Py.current||xT(),this.shouldReduceMotion=Gu.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ia(this.notifyUpdate),ia(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const s=this.features[i];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,s){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const o=Ci.has(i);o&&this.onBindTransform&&this.onBindTransform();const u=s.on("change",h=>{this.latestValues[i]=h,this.props.onUpdate&&De.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,s)),this.valueSubscriptions.set(i,()=>{u(),d&&d(),s.owner&&s.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Ti){const s=Ti[i];if(!s)continue;const{isEnabled:o,Feature:u}=s;if(!this.features[i]&&u&&o(this.props)&&(this.features[i]=new u(this)),this.features[i]){const d=this.features[i];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Fe()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,s){this.latestValues[i]=s}update(i,s){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let o=0;o<Rg.length;o++){const u=Rg[o];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const d="on"+u,h=i[d];h&&(this.propEventSubscriptions[u]=this.on(u,h))}this.prevMotionValues=ST(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(i),()=>s.variantChildren.delete(i)}addValue(i,s){const o=this.values.get(i);s!==o&&(o&&this.removeValue(i),this.bindToMotionValue(i,s),this.values.set(i,s),this.latestValues[i]=s.get())}removeValue(i){this.values.delete(i);const s=this.valueSubscriptions.get(i);s&&(s(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,s){if(this.props.values&&this.props.values[i])return this.props.values[i];let o=this.values.get(i);return o===void 0&&s!==void 0&&(o=ji(s===null?void 0:s,{owner:this}),this.addValue(i,o)),o}readValue(i,s){let o=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return o!=null&&(typeof o=="string"&&(U0(o)||H0(o))?o=parseFloat(o):!Mj(o)&&la.test(s)&&(o=jy(i,s)),this.setBaseTarget(i,ot(o)?o.get():o)),ot(o)?o.get():o}setBaseTarget(i,s){this.baseTarget[i]=s}getBaseTarget(i){const{initial:s}=this.props;let o;if(typeof s=="string"||typeof s=="object"){const d=zf(this.props,s,this.presenceContext?.custom);d&&(o=d[i])}if(s&&o!==void 0)return o;const u=this.getBaseTargetFromProps(this.props,i);return u!==void 0&&!ot(u)?u:this.initialValues[i]!==void 0&&o===void 0?void 0:this.baseTarget[i]}on(i,s){return this.events[i]||(this.events[i]=new uf),this.events[i].add(s)}notify(i,...s){this.events[i]&&this.events[i].notify(...s)}scheduleRenderMicrotask(){Ef.render(this.render)}}class Fy extends jT{constructor(){super(...arguments),this.KeyframeResolver=vj}sortInstanceNodePosition(i,s){return i.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(i,s){return i.style?i.style[s]:void 0}removeValueFromRenderState(i,{vars:s,style:o}){delete s[i],delete o[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;ot(i)&&(this.childSubscription=i.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}function Jy(n,{style:i,vars:s},o,u){const d=n.style;let h;for(h in i)d[h]=i[h];u?.applyProjectionStyles(d,o);for(h in s)d.setProperty(h,s[h])}function TT(n){return window.getComputedStyle(n)}class ET extends Fy{constructor(){super(...arguments),this.type="html",this.renderInstance=Jy}readValueFromInstance(i,s){if(Ci.has(s))return this.projection?.isProjecting?Ou(s):BS(i,s);{const o=TT(i),u=(ey(s)?o.getPropertyValue(s):o[s])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(i,{transformPagePoint:s}){return Qy(i,s)}build(i,s,o){Mf(i,s,o.transformTemplate)}scrapeMotionValuesFromProps(i,s,o){return Of(i,s,o)}}const Iy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function NT(n,i,s,o){Jy(n,i,void 0,o);for(const u in i.attrs)n.setAttribute(Iy.has(u)?u:Lf(u),i.attrs[u])}class AT extends Fy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Fe}getBaseTargetFromProps(i,s){return i[s]}readValueFromInstance(i,s){if(Ci.has(s)){const o=Sy(s);return o&&o.default||0}return s=Iy.has(s)?s:Lf(s),i.getAttribute(s)}scrapeMotionValuesFromProps(i,s,o){return Hy(i,s,o)}build(i,s,o){_y(i,s,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(i,s,o,u){NT(i,s,o,u)}mount(i){this.isSVGTag=Uy(i.tagName),super.mount(i)}}const wT=(n,i)=>i.isSVG??Rf(n)?new AT(i):new ET(i,{allowProjection:n!==T.Fragment});function Si(n,i,s){const o=n.getProps();return zf(o,i,s!==void 0?s:o.custom,n)}const Xu=n=>Array.isArray(n);function CT(n,i,s){n.hasValue(i)?n.getValue(i).set(s):n.addValue(i,ji(s))}function MT(n){return Xu(n)?n[n.length-1]||0:n}function DT(n,i){const s=Si(n,i);let{transitionEnd:o={},transition:u={},...d}=s||{};d={...d,...o};for(const h in d){const p=MT(d[h]);CT(n,h,p)}}function RT(n){return!!(ot(n)&&n.add)}function Ku(n,i){const s=n.getValue("willChange");if(RT(s))return s.add(i);if(!s&&Mn.WillChange){const o=new Mn.WillChange("auto");n.addValue("willChange",o),o.add(i)}}function $y(n){return n.props[qy]}const zT=n=>n!==null;function OT(n,{repeat:i,repeatType:s="loop"},o){const u=n.filter(zT),d=i&&s!=="loop"&&i%2===1?0:u.length-1;return u[d]}const LT={type:"spring",stiffness:500,damping:25,restSpeed:10},VT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),_T={type:"keyframes",duration:.8},BT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},UT=(n,{keyframes:i})=>i.length>2?_T:Ci.has(n)?n.startsWith("scale")?VT(i[1]):LT:BT;function kT({when:n,delay:i,delayChildren:s,staggerChildren:o,staggerDirection:u,repeat:d,repeatType:h,repeatDelay:p,from:g,elapsed:y,...v}){return!!Object.keys(v).length}const Vf=(n,i,s,o={},u,d)=>h=>{const p=jf(o,n)||{},g=p.delay||o.delay||0;let{elapsed:y=0}=o;y=y-wn(g);const v={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:i.getVelocity(),...p,delay:-y,onUpdate:S=>{i.set(S),p.onUpdate&&p.onUpdate(S)},onComplete:()=>{h(),p.onComplete&&p.onComplete()},name:n,motionValue:i,element:d?void 0:u};kT(p)||Object.assign(v,UT(n,v)),v.duration&&(v.duration=wn(v.duration)),v.repeatDelay&&(v.repeatDelay=wn(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let x=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(Uu(v),v.delay===0&&(x=!0)),(Mn.instantAnimations||Mn.skipAnimations)&&(x=!0,Uu(v),v.delay=0),v.allowFlatten=!p.type&&!p.ease,x&&!d&&i.get()!==void 0){const S=OT(v.keyframes,p);if(S!==void 0){De.update(()=>{v.onUpdate(S),v.onComplete()});return}}return p.isSync?new bf(v):new sj(v)};function HT({protectedKeys:n,needsAnimating:i},s){const o=n.hasOwnProperty(s)&&i[s]!==!0;return i[s]=!1,o}function Wy(n,i,{delay:s=0,transitionOverride:o,type:u}={}){let{transition:d=n.getDefaultTransition(),transitionEnd:h,...p}=i;o&&(d=o);const g=[],y=u&&n.animationState&&n.animationState.getState()[u];for(const v in p){const x=n.getValue(v,n.latestValues[v]??null),S=p[v];if(S===void 0||y&&HT(y,v))continue;const N={delay:s,...jf(d||{},v)},O=x.get();if(O!==void 0&&!x.isAnimating&&!Array.isArray(S)&&S===O&&!N.velocity)continue;let L=!1;if(window.MotionHandoffAnimation){const _=$y(n);if(_){const H=window.MotionHandoffAnimation(_,v,De);H!==null&&(N.startTime=H,L=!0)}}Ku(n,v),x.start(Vf(v,x,S,n.shouldReduceMotion&&vy.has(v)?{type:!1}:N,n,L));const R=x.animation;R&&g.push(R)}return h&&Promise.all(g).then(()=>{De.update(()=>{h&&DT(n,h)})}),g}function ev(n,i,s,o=0,u=1){const d=Array.from(n).sort((y,v)=>y.sortNodePosition(v)).indexOf(i),h=n.size,p=(h-1)*o;return typeof s=="function"?s(d,h):u===1?d*o:p-d*o}function Zu(n,i,s={}){const o=Si(n,i,s.type==="exit"?n.presenceContext?.custom:void 0);let{transition:u=n.getDefaultTransition()||{}}=o||{};s.transitionOverride&&(u=s.transitionOverride);const d=o?()=>Promise.all(Wy(n,o,s)):()=>Promise.resolve(),h=n.variantChildren&&n.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:v,staggerDirection:x}=u;return qT(n,i,g,y,v,x,s)}:()=>Promise.resolve(),{when:p}=u;if(p){const[g,y]=p==="beforeChildren"?[d,h]:[h,d];return g().then(()=>y())}else return Promise.all([d(),h(s.delay)])}function qT(n,i,s=0,o=0,u=0,d=1,h){const p=[];for(const g of n.variantChildren)g.notify("AnimationStart",i),p.push(Zu(g,i,{...h,delay:s+(typeof o=="function"?0:o)+ev(n.variantChildren,g,o,u,d)}).then(()=>g.notify("AnimationComplete",i)));return Promise.all(p)}function YT(n,i,s={}){n.notify("AnimationStart",i);let o;if(Array.isArray(i)){const u=i.map(d=>Zu(n,d,s));o=Promise.all(u)}else if(typeof i=="string")o=Zu(n,i,s);else{const u=typeof i=="function"?Si(n,i,s.custom):i;o=Promise.all(Wy(n,u,s))}return o.then(()=>{n.notify("AnimationComplete",i)})}function tv(n,i){if(!Array.isArray(i))return!1;const s=i.length;if(s!==n.length)return!1;for(let o=0;o<s;o++)if(i[o]!==n[o])return!1;return!0}const GT=Cf.length;function nv(n){if(!n)return;if(!n.isControllingVariants){const s=n.parent?nv(n.parent)||{}:{};return n.props.initial!==void 0&&(s.initial=n.props.initial),s}const i={};for(let s=0;s<GT;s++){const o=Cf[s],u=n.props[o];(Bl(u)||u===!1)&&(i[o]=u)}return i}const XT=[...wf].reverse(),KT=wf.length;function ZT(n){return i=>Promise.all(i.map(({animation:s,options:o})=>YT(n,s,o)))}function QT(n){let i=ZT(n),s=zg(),o=!0;const u=g=>(y,v)=>{const x=Si(n,v,g==="exit"?n.presenceContext?.custom:void 0);if(x){const{transition:S,transitionEnd:N,...O}=x;y={...y,...O,...N}}return y};function d(g){i=g(n)}function h(g){const{props:y}=n,v=nv(n.parent)||{},x=[],S=new Set;let N={},O=1/0;for(let R=0;R<KT;R++){const _=XT[R],H=s[_],U=y[_]!==void 0?y[_]:v[_],J=Bl(U),X=_===g?H.isActive:null;X===!1&&(O=R);let te=U===v[_]&&U!==y[_]&&J;if(te&&o&&n.manuallyAnimateOnMount&&(te=!1),H.protectedKeys={...N},!H.isActive&&X===null||!U&&!H.prevProp||Lo(U)||typeof U=="boolean")continue;const Z=PT(H.prevProp,U);let K=Z||_===g&&H.isActive&&!te&&J||R>O&&J,oe=!1;const be=Array.isArray(U)?U:[U];let qe=be.reduce(u(_),{});X===!1&&(qe={});const{prevResolvedValues:Qe={}}=H,on={...Qe,...qe},Dt=G=>{K=!0,S.has(G)&&(oe=!0,S.delete(G)),H.needsAnimating[G]=!0;const $=n.getValue(G);$&&($.liveStyle=!1)};for(const G in on){const $=qe[G],fe=Qe[G];if(N.hasOwnProperty(G))continue;let pe=!1;Xu($)&&Xu(fe)?pe=!tv($,fe):pe=$!==fe,pe?$!=null?Dt(G):S.add(G):$!==void 0&&S.has(G)?Dt(G):H.protectedKeys[G]=!0}H.prevProp=U,H.prevResolvedValues=qe,H.isActive&&(N={...N,...qe}),o&&n.blockInitialAnimation&&(K=!1);const dt=te&&Z;K&&(!dt||oe)&&x.push(...be.map(G=>{const $={type:_};if(typeof G=="string"&&o&&!dt&&n.manuallyAnimateOnMount&&n.parent){const{parent:fe}=n,pe=Si(fe,G);if(fe.enteringChildren&&pe){const{delayChildren:A}=pe.transition||{};$.delay=ev(fe.enteringChildren,n,A)}}return{animation:G,options:$}}))}if(S.size){const R={};if(typeof y.initial!="boolean"){const _=Si(n,Array.isArray(y.initial)?y.initial[0]:y.initial);_&&_.transition&&(R.transition=_.transition)}S.forEach(_=>{const H=n.getBaseTarget(_),U=n.getValue(_);U&&(U.liveStyle=!0),R[_]=H??null}),x.push({animation:R})}let L=!!x.length;return o&&(y.initial===!1||y.initial===y.animate)&&!n.manuallyAnimateOnMount&&(L=!1),o=!1,L?i(x):Promise.resolve()}function p(g,y){if(s[g].isActive===y)return Promise.resolve();n.variantChildren?.forEach(x=>x.animationState?.setActive(g,y)),s[g].isActive=y;const v=h(g);for(const x in s)s[x].protectedKeys={};return v}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>s,reset:()=>{s=zg()}}}function PT(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!tv(i,n):!1}function wa(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function zg(){return{animate:wa(!0),whileInView:wa(),whileHover:wa(),whileTap:wa(),whileDrag:wa(),whileFocus:wa(),exit:wa()}}class oa{constructor(i){this.isMounted=!1,this.node=i}update(){}}class FT extends oa{constructor(i){super(i),i.animationState||(i.animationState=QT(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Lo(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:s}=this.node.prevProps||{};i!==s&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let JT=0;class IT extends oa{constructor(){super(...arguments),this.id=JT++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:s}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===o)return;const u=this.node.animationState.setActive("exit",!i);s&&!i&&u.then(()=>{s(this.id)})}mount(){const{register:i,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const $T={animation:{Feature:FT},exit:{Feature:IT}};function Ul(n,i,s,o={passive:!0}){return n.addEventListener(i,s,o),()=>n.removeEventListener(i,s)}function Kl(n){return{point:{x:n.pageX,y:n.pageY}}}const WT=n=>i=>Nf(i)&&n(i,Kl(i));function Dl(n,i,s,o){return Ul(n,i,WT(s),o)}const av=1e-4,eE=1-av,tE=1+av,iv=.01,nE=0-iv,aE=0+iv;function ft(n){return n.max-n.min}function iE(n,i,s){return Math.abs(n-i)<=s}function Og(n,i,s,o=.5){n.origin=o,n.originPoint=ze(i.min,i.max,n.origin),n.scale=ft(s)/ft(i),n.translate=ze(s.min,s.max,n.origin)-n.originPoint,(n.scale>=eE&&n.scale<=tE||isNaN(n.scale))&&(n.scale=1),(n.translate>=nE&&n.translate<=aE||isNaN(n.translate))&&(n.translate=0)}function Rl(n,i,s,o){Og(n.x,i.x,s.x,o?o.originX:void 0),Og(n.y,i.y,s.y,o?o.originY:void 0)}function Lg(n,i,s){n.min=s.min+i.min,n.max=n.min+ft(i)}function lE(n,i,s){Lg(n.x,i.x,s.x),Lg(n.y,i.y,s.y)}function Vg(n,i,s){n.min=i.min-s.min,n.max=n.min+ft(i)}function Mo(n,i,s){Vg(n.x,i.x,s.x),Vg(n.y,i.y,s.y)}function Yt(n){return[n("x"),n("y")]}const lv=({current:n})=>n?n.ownerDocument.defaultView:null,_g=(n,i)=>Math.abs(n-i);function sE(n,i){const s=_g(n.x,i.x),o=_g(n.y,i.y);return Math.sqrt(s**2+o**2)}const Bg=new Set(["auto","scroll"]);class sv{constructor(i,s,{transformPagePoint:o,contextWindow:u=window,dragSnapToOrigin:d=!1,distanceThreshold:h=3,element:p}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=N=>{this.handleScroll(N.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const N=xu(this.lastMoveEventInfo,this.history),O=this.startEvent!==null,L=sE(N.offset,{x:0,y:0})>=this.distanceThreshold;if(!O&&!L)return;const{point:R}=N,{timestamp:_}=it;this.history.push({...R,timestamp:_});const{onStart:H,onMove:U}=this.handlers;O||(H&&H(this.lastMoveEvent,N),this.startEvent=this.lastMoveEvent),U&&U(this.lastMoveEvent,N)},this.handlePointerMove=(N,O)=>{this.lastMoveEvent=N,this.lastMoveEventInfo=vu(O,this.transformPagePoint),De.update(this.updatePoint,!0)},this.handlePointerUp=(N,O)=>{this.end();const{onEnd:L,onSessionEnd:R,resumeAnimation:_}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const H=xu(N.type==="pointercancel"?this.lastMoveEventInfo:vu(O,this.transformPagePoint),this.history);this.startEvent&&L&&L(N,H),R&&R(N,H)},!Nf(i))return;this.dragSnapToOrigin=d,this.handlers=s,this.transformPagePoint=o,this.distanceThreshold=h,this.contextWindow=u||window;const g=Kl(i),y=vu(g,this.transformPagePoint),{point:v}=y,{timestamp:x}=it;this.history=[{...v,timestamp:x}];const{onSessionStart:S}=s;S&&S(i,xu(y,this.history)),this.removeListeners=Yl(Dl(this.contextWindow,"pointermove",this.handlePointerMove),Dl(this.contextWindow,"pointerup",this.handlePointerUp),Dl(this.contextWindow,"pointercancel",this.handlePointerUp)),p&&this.startScrollTracking(p)}startScrollTracking(i){let s=i.parentElement;for(;s;){const o=getComputedStyle(s);(Bg.has(o.overflowX)||Bg.has(o.overflowY))&&this.scrollPositions.set(s,{x:s.scrollLeft,y:s.scrollTop}),s=s.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(i){const s=this.scrollPositions.get(i);if(!s)return;const o=i===window,u=o?{x:window.scrollX,y:window.scrollY}:{x:i.scrollLeft,y:i.scrollTop},d={x:u.x-s.x,y:u.y-s.y};d.x===0&&d.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=d.x,this.lastMoveEventInfo.point.y+=d.y):this.history.length>0&&(this.history[0].x-=d.x,this.history[0].y-=d.y),this.scrollPositions.set(i,u),De.update(this.updatePoint,!0))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ia(this.updatePoint)}}function vu(n,i){return i?{point:i(n.point)}:n}function Ug(n,i){return{x:n.x-i.x,y:n.y-i.y}}function xu({point:n},i){return{point:n,delta:Ug(n,ov(i)),offset:Ug(n,oE(i)),velocity:rE(i,.1)}}function oE(n){return n[0]}function ov(n){return n[n.length-1]}function rE(n,i){if(n.length<2)return{x:0,y:0};let s=n.length-1,o=null;const u=ov(n);for(;s>=0&&(o=n[s],!(u.timestamp-o.timestamp>wn(i)));)s--;if(!o)return{x:0,y:0};const d=Gt(u.timestamp-o.timestamp);if(d===0)return{x:0,y:0};const h={x:(u.x-o.x)/d,y:(u.y-o.y)/d};return h.x===1/0&&(h.x=0),h.y===1/0&&(h.y=0),h}function cE(n,{min:i,max:s},o){return i!==void 0&&n<i?n=o?ze(i,n,o.min):Math.max(n,i):s!==void 0&&n>s&&(n=o?ze(s,n,o.max):Math.min(n,s)),n}function kg(n,i,s){return{min:i!==void 0?n.min+i:void 0,max:s!==void 0?n.max+s-(n.max-n.min):void 0}}function uE(n,{top:i,left:s,bottom:o,right:u}){return{x:kg(n.x,s,u),y:kg(n.y,i,o)}}function Hg(n,i){let s=i.min-n.min,o=i.max-n.max;return i.max-i.min<n.max-n.min&&([s,o]=[o,s]),{min:s,max:o}}function fE(n,i){return{x:Hg(n.x,i.x),y:Hg(n.y,i.y)}}function dE(n,i){let s=.5;const o=ft(n),u=ft(i);return u>o?s=Ll(i.min,i.max-o,n.min):o>u&&(s=Ll(n.min,n.max-u,i.min)),sn(0,1,s)}function hE(n,i){const s={};return i.min!==void 0&&(s.min=i.min-n.min),i.max!==void 0&&(s.max=i.max-n.min),s}const Qu=.35;function mE(n=Qu){return n===!1?n=0:n===!0&&(n=Qu),{x:qg(n,"left","right"),y:qg(n,"top","bottom")}}function qg(n,i,s){return{min:Yg(n,i),max:Yg(n,s)}}function Yg(n,i){return typeof n=="number"?n:n[i]||0}const pE=new WeakMap;class gE{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Fe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:s=!1,distanceThreshold:o}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const d=x=>{s?(this.stopAnimation(),this.snapToCursor(Kl(x).point)):this.pauseAnimation()},h=(x,S)=>{this.stopAnimation();const{drag:N,dragPropagation:O,onDragStart:L}=this.getProps();if(N&&!O&&(this.openDragLock&&this.openDragLock(),this.openDragLock=jj(N),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Yt(_=>{let H=this.getAxisMotionValue(_).get()||0;if(ln.test(H)){const{projection:U}=this.visualElement;if(U&&U.layout){const J=U.layout.layoutBox[_];J&&(H=ft(J)*(parseFloat(H)/100))}}this.originPoint[_]=H}),L&&De.postRender(()=>L(x,S)),Ku(this.visualElement,"transform");const{animationState:R}=this.visualElement;R&&R.setActive("whileDrag",!0)},p=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S;const{dragPropagation:N,dragDirectionLock:O,onDirectionLock:L,onDrag:R}=this.getProps();if(!N&&!this.openDragLock)return;const{offset:_}=S;if(O&&this.currentDirection===null){this.currentDirection=yE(_),this.currentDirection!==null&&L&&L(this.currentDirection);return}this.updateAxis("x",S.point,_),this.updateAxis("y",S.point,_),this.visualElement.render(),R&&R(x,S)},g=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S,this.stop(x,S),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>Yt(x=>this.getAnimationState(x)==="paused"&&this.getAxisMotionValue(x).animation?.play()),{dragSnapToOrigin:v}=this.getProps();this.panSession=new sv(i,{onSessionStart:d,onStart:h,onMove:p,onSessionEnd:g,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:v,distanceThreshold:o,contextWindow:lv(this.visualElement),element:this.visualElement.current})}stop(i,s){const o=i||this.latestPointerEvent,u=s||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!u||!o)return;const{velocity:h}=u;this.startAnimation(h);const{onDragEnd:p}=this.getProps();p&&De.postRender(()=>p(o,u))}cancel(){this.isDragging=!1;const{projection:i,animationState:s}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}updateAxis(i,s,o){const{drag:u}=this.getProps();if(!o||!po(i,u,this.currentDirection))return;const d=this.getAxisMotionValue(i);let h=this.originPoint[i]+o[i];this.constraints&&this.constraints[i]&&(h=cE(h,this.constraints[i],this.elastic[i])),d.set(h)}resolveConstraints(){const{dragConstraints:i,dragElastic:s}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;i&&wl(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&o?this.constraints=uE(o.layoutBox,i):this.constraints=!1,this.elastic=mE(s),u!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Yt(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=hE(o.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:s}=this.getProps();if(!i||!wl(i))return!1;const o=i.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const d=vT(o,u.root,this.visualElement.getTransformPagePoint());let h=fE(u.layout.layoutBox,d);if(s){const p=s(pT(h));this.hasMutatedConstraints=!!p,p&&(h=Xy(p))}return h}startAnimation(i){const{drag:s,dragMomentum:o,dragElastic:u,dragTransition:d,dragSnapToOrigin:h,onDragTransitionEnd:p}=this.getProps(),g=this.constraints||{},y=Yt(v=>{if(!po(v,s,this.currentDirection))return;let x=g&&g[v]||{};h&&(x={min:0,max:0});const S=u?200:1e6,N=u?40:1e7,O={type:"inertia",velocity:o?i[v]:0,bounceStiffness:S,bounceDamping:N,timeConstant:750,restDelta:1,restSpeed:10,...d,...x};return this.startAxisValueAnimation(v,O)});return Promise.all(y).then(p)}startAxisValueAnimation(i,s){const o=this.getAxisMotionValue(i);return Ku(this.visualElement,i),o.start(Vf(i,o,0,s,this.visualElement,!1))}stopAnimation(){Yt(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Yt(i=>this.getAxisMotionValue(i).animation?.pause())}getAnimationState(i){return this.getAxisMotionValue(i).animation?.state}getAxisMotionValue(i){const s=`_drag${i.toUpperCase()}`,o=this.visualElement.getProps(),u=o[s];return u||this.visualElement.getValue(i,(o.initial?o.initial[i]:void 0)||0)}snapToCursor(i){Yt(s=>{const{drag:o}=this.getProps();if(!po(s,o,this.currentDirection))return;const{projection:u}=this.visualElement,d=this.getAxisMotionValue(s);if(u&&u.layout){const{min:h,max:p}=u.layout.layoutBox[s],g=d.get()||0;d.set(i[s]-ze(h,p,.5)+g)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:s}=this.getProps(),{projection:o}=this.visualElement;if(!wl(s)||!o||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Yt(h=>{const p=this.getAxisMotionValue(h);if(p&&this.constraints!==!1){const g=p.get();u[h]=dE({min:g,max:g},this.constraints[h])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Yt(h=>{if(!po(h,i,null))return;const p=this.getAxisMotionValue(h),{min:g,max:y}=this.constraints[h];p.set(ze(g,y,u[h]))})}addListeners(){if(!this.visualElement.current)return;pE.set(this.visualElement,this);const i=this.visualElement.current,s=Dl(i,"pointerdown",g=>{const{drag:y,dragListener:v=!0}=this.getProps();y&&v&&!Cy(g.target)&&this.start(g)}),o=()=>{const{dragConstraints:g}=this.getProps();wl(g)&&g.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,d=u.addEventListener("measure",o);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),De.read(o);const h=Ul(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:y})=>{this.isDragging&&y&&(Yt(v=>{const x=this.getAxisMotionValue(v);x&&(this.originPoint[v]+=g[v].translate,x.set(x.get()+g[v].translate))}),this.visualElement.render())}));return()=>{h(),s(),d(),p&&p()}}getProps(){const i=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:o=!1,dragPropagation:u=!1,dragConstraints:d=!1,dragElastic:h=Qu,dragMomentum:p=!0}=i;return{...i,drag:s,dragDirectionLock:o,dragPropagation:u,dragConstraints:d,dragElastic:h,dragMomentum:p}}}function po(n,i,s){return(i===!0||i===n)&&(s===null||s===n)}function yE(n,i=10){let s=null;return Math.abs(n.y)>i?s="y":Math.abs(n.x)>i&&(s="x"),s}class vE extends oa{constructor(i){super(i),this.removeGroupControls=Xt,this.removeListeners=Xt,this.controls=new gE(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Xt}update(){const{dragControls:i}=this.node.getProps(),{dragControls:s}=this.node.prevProps||{};i!==s&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const Gg=n=>(i,s)=>{n&&De.postRender(()=>n(i,s))};class xE extends oa{constructor(){super(...arguments),this.removePointerDownListener=Xt}onPointerDown(i){this.session=new sv(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:lv(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:s,onPan:o,onPanEnd:u}=this.node.getProps();return{onSessionStart:Gg(i),onStart:Gg(s),onMove:o,onEnd:(d,h)=>{delete this.session,u&&De.postRender(()=>u(d,h))}}}mount(){this.removePointerDownListener=Dl(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const jo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let bu=!1;class bE extends T.Component{componentDidMount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:o,layoutId:u}=this.props,{projection:d}=i;d&&(s.group&&s.group.add(d),o&&o.register&&u&&o.register(d),bu&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),jo.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:s,visualElement:o,drag:u,isPresent:d}=this.props,{projection:h}=o;return h&&(h.isPresent=d,bu=!0,u||i.layoutDependency!==s||s===void 0||i.isPresent!==d?h.willUpdate():this.safeToRemove(),i.isPresent!==d&&(d?h.promote():h.relegate()||De.postRender(()=>{const p=h.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Ef.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:o}=this.props,{projection:u}=i;bu=!0,u&&(u.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(u),o&&o.deregister&&o.deregister(u))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function rv(n){const[i,s]=Dy(),o=T.useContext(nf);return f.jsx(bE,{...n,layoutGroup:o,switchLayoutGroup:T.useContext(Yy),isPresent:i,safeToRemove:s})}function SE(n,i,s){const o=ot(n)?n:ji(n);return o.start(Vf("",o,i,s)),o.animation}const jE=(n,i)=>n.depth-i.depth;class TE{constructor(){this.children=[],this.isDirty=!1}add(i){sf(this.children,i),this.isDirty=!0}remove(i){of(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(jE),this.isDirty=!1,this.children.forEach(i)}}function EE(n,i){const s=ut.now(),o=({timestamp:u})=>{const d=u-s;d>=i&&(ia(o),n(d-i))};return De.setup(o,!0),()=>ia(o)}const cv=["TopLeft","TopRight","BottomLeft","BottomRight"],NE=cv.length,Xg=n=>typeof n=="string"?parseFloat(n):n,Kg=n=>typeof n=="number"||P.test(n);function AE(n,i,s,o,u,d){u?(n.opacity=ze(0,s.opacity??1,wE(o)),n.opacityExit=ze(i.opacity??1,0,CE(o))):d&&(n.opacity=ze(i.opacity??1,s.opacity??1,o));for(let h=0;h<NE;h++){const p=`border${cv[h]}Radius`;let g=Zg(i,p),y=Zg(s,p);if(g===void 0&&y===void 0)continue;g||(g=0),y||(y=0),g===0||y===0||Kg(g)===Kg(y)?(n[p]=Math.max(ze(Xg(g),Xg(y),o),0),(ln.test(y)||ln.test(g))&&(n[p]+="%")):n[p]=y}(i.rotate||s.rotate)&&(n.rotate=ze(i.rotate||0,s.rotate||0,o))}function Zg(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const wE=uv(0,.5,P0),CE=uv(.5,.95,Xt);function uv(n,i,s){return o=>o<n?0:o>i?1:s(Ll(n,i,o))}function Qg(n,i){n.min=i.min,n.max=i.max}function Ft(n,i){Qg(n.x,i.x),Qg(n.y,i.y)}function Pg(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function Fg(n,i,s,o,u){return n-=i,n=Co(n,1/s,o),u!==void 0&&(n=Co(n,1/u,o)),n}function ME(n,i=0,s=1,o=.5,u,d=n,h=n){if(ln.test(i)&&(i=parseFloat(i),i=ze(h.min,h.max,i/100)-h.min),typeof i!="number")return;let p=ze(d.min,d.max,o);n===d&&(p-=i),n.min=Fg(n.min,i,s,p,u),n.max=Fg(n.max,i,s,p,u)}function Jg(n,i,[s,o,u],d,h){ME(n,i[s],i[o],i[u],i.scale,d,h)}const DE=["x","scaleX","originX"],RE=["y","scaleY","originY"];function Ig(n,i,s,o){Jg(n.x,i,DE,s?s.x:void 0,o?o.x:void 0),Jg(n.y,i,RE,s?s.y:void 0,o?o.y:void 0)}function $g(n){return n.translate===0&&n.scale===1}function fv(n){return $g(n.x)&&$g(n.y)}function Wg(n,i){return n.min===i.min&&n.max===i.max}function zE(n,i){return Wg(n.x,i.x)&&Wg(n.y,i.y)}function e0(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function dv(n,i){return e0(n.x,i.x)&&e0(n.y,i.y)}function t0(n){return ft(n.x)/ft(n.y)}function n0(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class OE{constructor(){this.members=[]}add(i){sf(this.members,i),i.scheduleRender()}remove(i){if(of(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(i){const s=this.members.findIndex(u=>i===u);if(s===0)return!1;let o;for(let u=s;u>=0;u--){const d=this.members[u];if(d.isPresent!==!1){o=d;break}}return o?(this.promote(o),!0):!1}promote(i,s){const o=this.lead;if(i!==o&&(this.prevLead=o,this.lead=i,i.show(),o)){o.instance&&o.scheduleRender(),i.scheduleRender(),i.resumeFrom=o,s&&(i.resumeFrom.preserveOpacity=!0),o.snapshot&&(i.snapshot=o.snapshot,i.snapshot.latestValues=o.animationValues||o.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:u}=i.options;u===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:s,resumingFrom:o}=i;s.onExitComplete&&s.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function LE(n,i,s){let o="";const u=n.x.translate/i.x,d=n.y.translate/i.y,h=s?.z||0;if((u||d||h)&&(o=`translate3d(${u}px, ${d}px, ${h}px) `),(i.x!==1||i.y!==1)&&(o+=`scale(${1/i.x}, ${1/i.y}) `),s){const{transformPerspective:y,rotate:v,rotateX:x,rotateY:S,skewX:N,skewY:O}=s;y&&(o=`perspective(${y}px) ${o}`),v&&(o+=`rotate(${v}deg) `),x&&(o+=`rotateX(${x}deg) `),S&&(o+=`rotateY(${S}deg) `),N&&(o+=`skewX(${N}deg) `),O&&(o+=`skewY(${O}deg) `)}const p=n.x.scale*i.x,g=n.y.scale*i.y;return(p!==1||g!==1)&&(o+=`scale(${p}, ${g})`),o||"none"}const Su=["","X","Y","Z"],VE=1e3;let _E=0;function ju(n,i,s,o){const{latestValues:u}=i;u[n]&&(s[n]=u[n],i.setStaticValue(n,0),o&&(o[n]=0))}function hv(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const s=$y(i);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:u,layoutId:d}=n.options;window.MotionCancelOptimisedAnimation(s,"transform",De,!(u||d))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&hv(o)}function mv({attachResizeListener:n,defaultParent:i,measureScroll:s,checkIsScrollRoot:o,resetTransform:u}){return class{constructor(h={},p=i?.()){this.id=_E++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(kE),this.nodes.forEach(GE),this.nodes.forEach(XE),this.nodes.forEach(HE)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=h,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new TE)}addEventListener(h,p){return this.eventHandlers.has(h)||this.eventHandlers.set(h,new uf),this.eventHandlers.get(h).add(p)}notifyListeners(h,...p){const g=this.eventHandlers.get(h);g&&g.notify(...p)}hasListeners(h){return this.eventHandlers.has(h)}mount(h){if(this.instance)return;this.isSVG=My(h)&&!wj(h),this.instance=h;const{layoutId:p,layout:g,visualElement:y}=this.options;if(y&&!y.current&&y.mount(h),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(g||p)&&(this.isLayoutDirty=!0),n){let v,x=0;const S=()=>this.root.updateBlockedByResize=!1;De.read(()=>{x=window.innerWidth}),n(h,()=>{const N=window.innerWidth;N!==x&&(x=N,this.root.updateBlockedByResize=!0,v&&v(),v=EE(S,250),jo.hasAnimatedSinceResize&&(jo.hasAnimatedSinceResize=!1,this.nodes.forEach(l0)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&y&&(p||g)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:x,hasRelativeLayoutChanged:S,layout:N})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const O=this.options.transition||y.getDefaultTransition()||FE,{onLayoutAnimationStart:L,onLayoutAnimationComplete:R}=y.getProps(),_=!this.targetLayout||!dv(this.targetLayout,N),H=!x&&S;if(this.options.layoutRoot||this.resumeFrom||H||x&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const U={...jf(O,"layout"),onPlay:L,onComplete:R};(y.shouldReduceMotion||this.options.layoutRoot)&&(U.delay=0,U.type=!1),this.startAnimation(U),this.setAnimationOrigin(v,H)}else x||l0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=N})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const h=this.getStack();h&&h.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ia(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(KE),this.animationId++)}getTransformTemplate(){const{visualElement:h}=this.options;return h&&h.getProps().transformTemplate}willUpdate(h=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&hv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const x=this.path[v];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:p,layout:g}=this.options;if(p===void 0&&!g)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),h&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(a0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(i0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(YE),this.nodes.forEach(BE),this.nodes.forEach(UE)):this.nodes.forEach(i0),this.clearAllSnapshots();const p=ut.now();it.delta=sn(0,1e3/60,p-it.timestamp),it.timestamp=p,it.isProcessing=!0,cu.update.process(it),cu.preRender.process(it),cu.render.process(it),it.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ef.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(qE),this.sharedNodes.forEach(ZE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,De.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){De.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ft(this.snapshot.measuredBox.x)&&!ft(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const h=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Fe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,h?h.layoutBox:void 0)}updateScroll(h="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===h&&(p=!1),p&&this.instance){const g=o(this.instance);this.scroll={animationId:this.root.animationId,phase:h,isRoot:g,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:g}}}resetTransform(){if(!u)return;const h=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!fv(this.projectionDelta),g=this.getTransformTemplate(),y=g?g(this.latestValues,""):void 0,v=y!==this.prevTransformTemplateValue;h&&this.instance&&(p||Ca(this.latestValues)||v)&&(u(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(h=!0){const p=this.measurePageBox();let g=this.removeElementScroll(p);return h&&(g=this.removeTransform(g)),JE(g),{animationId:this.root.animationId,measuredBox:p,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:h}=this.options;if(!h)return Fe();const p=h.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(IE))){const{scroll:y}=this.root;y&&(vi(p.x,y.offset.x),vi(p.y,y.offset.y))}return p}removeElementScroll(h){const p=Fe();if(Ft(p,h),this.scroll?.wasRoot)return p;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:v,options:x}=y;y!==this.root&&v&&x.layoutScroll&&(v.wasRoot&&Ft(p,h),vi(p.x,v.offset.x),vi(p.y,v.offset.y))}return p}applyTransform(h,p=!1){const g=Fe();Ft(g,h);for(let y=0;y<this.path.length;y++){const v=this.path[y];!p&&v.options.layoutScroll&&v.scroll&&v!==v.root&&xi(g,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),Ca(v.latestValues)&&xi(g,v.latestValues)}return Ca(this.latestValues)&&xi(g,this.latestValues),g}removeTransform(h){const p=Fe();Ft(p,h);for(let g=0;g<this.path.length;g++){const y=this.path[g];if(!y.instance||!Ca(y.latestValues))continue;qu(y.latestValues)&&y.updateSnapshot();const v=Fe(),x=y.measurePageBox();Ft(v,x),Ig(p,y.latestValues,y.snapshot?y.snapshot.layoutBox:void 0,v)}return Ca(this.latestValues)&&Ig(p,this.latestValues),p}setTargetDelta(h){this.targetDelta=h,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(h){this.options={...this.options,...h,crossfade:h.crossfade!==void 0?h.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==it.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(h=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==p;if(!(h||g&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:x}=this.options;if(!this.layout||!(v||x))return;this.resolvedRelativeTargetAt=it.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Fe(),this.targetWithTransforms=Fe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),lE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ft(this.target,this.layout.layoutBox),Zy(this.target,this.targetDelta)):Ft(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||qu(this.parent.latestValues)||Ky(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(h,p,g){this.relativeParent=h,this.linkedParentVersion=h.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Fe(),this.relativeTargetOrigin=Fe(),Mo(this.relativeTargetOrigin,p,g),Ft(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const h=this.getLead(),p=!!this.resumingFrom||this!==h;let g=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(g=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===it.timestamp&&(g=!1),g)return;const{layout:y,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||v))return;Ft(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,S=this.treeScale.y;yT(this.layoutCorrected,this.treeScale,this.path,p),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=Fe());const{target:N}=h;if(!N){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Pg(this.prevProjectionDelta.x,this.projectionDelta.x),Pg(this.prevProjectionDelta.y,this.projectionDelta.y)),Rl(this.projectionDelta,this.layoutCorrected,N,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==S||!n0(this.projectionDelta.x,this.prevProjectionDelta.x)||!n0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",N))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(h=!0){if(this.options.visualElement?.scheduleRender(),h){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=bi(),this.projectionDelta=bi(),this.projectionDeltaWithTransform=bi()}setAnimationOrigin(h,p=!1){const g=this.snapshot,y=g?g.latestValues:{},v={...this.latestValues},x=bi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const S=Fe(),N=g?g.source:void 0,O=this.layout?this.layout.source:void 0,L=N!==O,R=this.getStack(),_=!R||R.members.length<=1,H=!!(L&&!_&&this.options.crossfade===!0&&!this.path.some(PE));this.animationProgress=0;let U;this.mixTargetDelta=J=>{const X=J/1e3;s0(x.x,h.x,X),s0(x.y,h.y,X),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Mo(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),QE(this.relativeTarget,this.relativeTargetOrigin,S,X),U&&zE(this.relativeTarget,U)&&(this.isProjectionDirty=!1),U||(U=Fe()),Ft(U,this.relativeTarget)),L&&(this.animationValues=v,AE(v,y,this.latestValues,X,H,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=X},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(h){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ia(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=De.update(()=>{jo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ji(0)),this.currentAnimation=SE(this.motionValue,[0,1e3],{...h,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),h.onUpdate&&h.onUpdate(p)},onStop:()=>{},onComplete:()=>{h.onComplete&&h.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const h=this.getStack();h&&h.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(VE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const h=this.getLead();let{targetWithTransforms:p,target:g,layout:y,latestValues:v}=h;if(!(!p||!g||!y)){if(this!==h&&this.layout&&y&&pv(this.options.animationType,this.layout.layoutBox,y.layoutBox)){g=this.target||Fe();const x=ft(this.layout.layoutBox.x);g.x.min=h.target.x.min,g.x.max=g.x.min+x;const S=ft(this.layout.layoutBox.y);g.y.min=h.target.y.min,g.y.max=g.y.min+S}Ft(p,g),xi(p,v),Rl(this.projectionDeltaWithTransform,this.layoutCorrected,p,v)}}registerSharedNode(h,p){this.sharedNodes.has(h)||this.sharedNodes.set(h,new OE),this.sharedNodes.get(h).add(p);const y=p.options.initialPromotionConfig;p.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(p):void 0})}isLead(){const h=this.getStack();return h?h.lead===this:!0}getLead(){const{layoutId:h}=this.options;return h?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:h}=this.options;return h?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:h}=this.options;if(h)return this.root.sharedNodes.get(h)}promote({needsReset:h,transition:p,preserveFollowOpacity:g}={}){const y=this.getStack();y&&y.promote(this,g),h&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const h=this.getStack();return h?h.relegate(this):!1}resetSkewAndRotation(){const{visualElement:h}=this.options;if(!h)return;let p=!1;const{latestValues:g}=h;if((g.z||g.rotate||g.rotateX||g.rotateY||g.rotateZ||g.skewX||g.skewY)&&(p=!0),!p)return;const y={};g.z&&ju("z",h,y,this.animationValues);for(let v=0;v<Su.length;v++)ju(`rotate${Su[v]}`,h,y,this.animationValues),ju(`skew${Su[v]}`,h,y,this.animationValues);h.render();for(const v in y)h.setStaticValue(v,y[v]),this.animationValues&&(this.animationValues[v]=y[v]);h.scheduleRender()}applyProjectionStyles(h,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){h.visibility="hidden";return}const g=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,h.visibility="",h.opacity="",h.pointerEvents=So(p?.pointerEvents)||"",h.transform=g?g(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(h.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,h.pointerEvents=So(p?.pointerEvents)||""),this.hasProjected&&!Ca(this.latestValues)&&(h.transform=g?g({},""):"none",this.hasProjected=!1);return}h.visibility="";const v=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=LE(this.projectionDeltaWithTransform,this.treeScale,v);g&&(x=g(v,x)),h.transform=x;const{x:S,y:N}=this.projectionDelta;h.transformOrigin=`${S.origin*100}% ${N.origin*100}% 0`,y.animationValues?h.opacity=y===this?v.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=y===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const O in Hu){if(v[O]===void 0)continue;const{correct:L,applyTo:R,isCSSVariable:_}=Hu[O],H=x==="none"?v[O]:L(v[O],y);if(R){const U=R.length;for(let J=0;J<U;J++)h[R[J]]=H}else _?this.options.visualElement.renderState.vars[O]=H:h[O]=H}this.options.layoutId&&(h.pointerEvents=y===this?So(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(h=>h.currentAnimation?.stop()),this.root.nodes.forEach(a0),this.root.sharedNodes.clear()}}}function BE(n){n.updateLayout()}function UE(n){const i=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&i&&n.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:o}=n.layout,{animationType:u}=n.options,d=i.source!==n.layout.source;u==="size"?Yt(v=>{const x=d?i.measuredBox[v]:i.layoutBox[v],S=ft(x);x.min=s[v].min,x.max=x.min+S}):pv(u,i.layoutBox,s)&&Yt(v=>{const x=d?i.measuredBox[v]:i.layoutBox[v],S=ft(s[v]);x.max=x.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+S)});const h=bi();Rl(h,s,i.layoutBox);const p=bi();d?Rl(p,n.applyTransform(o,!0),i.measuredBox):Rl(p,s,i.layoutBox);const g=!fv(h);let y=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:x,layout:S}=v;if(x&&S){const N=Fe();Mo(N,i.layoutBox,x.layoutBox);const O=Fe();Mo(O,s,S.layoutBox),dv(N,O)||(y=!0),v.options.layoutRoot&&(n.relativeTarget=O,n.relativeTargetOrigin=N,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:s,snapshot:i,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(n.isLead()){const{onExitComplete:s}=n.options;s&&s()}n.options.transition=void 0}function kE(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function HE(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function qE(n){n.clearSnapshot()}function a0(n){n.clearMeasurements()}function i0(n){n.isLayoutDirty=!1}function YE(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function l0(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function GE(n){n.resolveTargetDelta()}function XE(n){n.calcProjection()}function KE(n){n.resetSkewAndRotation()}function ZE(n){n.removeLeadSnapshot()}function s0(n,i,s){n.translate=ze(i.translate,0,s),n.scale=ze(i.scale,1,s),n.origin=i.origin,n.originPoint=i.originPoint}function o0(n,i,s,o){n.min=ze(i.min,s.min,o),n.max=ze(i.max,s.max,o)}function QE(n,i,s,o){o0(n.x,i.x,s.x,o),o0(n.y,i.y,s.y,o)}function PE(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const FE={duration:.45,ease:[.4,0,.1,1]},r0=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),c0=r0("applewebkit/")&&!r0("chrome/")?Math.round:Xt;function u0(n){n.min=c0(n.min),n.max=c0(n.max)}function JE(n){u0(n.x),u0(n.y)}function pv(n,i,s){return n==="position"||n==="preserve-aspect"&&!iE(t0(i),t0(s),.2)}function IE(n){return n!==n.root&&n.scroll?.wasRoot}const $E=mv({attachResizeListener:(n,i)=>Ul(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Tu={current:void 0},gv=mv({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Tu.current){const n=new $E({});n.mount(window),n.setOptions({layoutScroll:!0}),Tu.current=n}return Tu.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),WE={pan:{Feature:xE},drag:{Feature:vE,ProjectionNode:gv,MeasureLayout:rv}};function f0(n,i,s){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",s==="Start");const u="onHover"+s,d=o[u];d&&De.postRender(()=>d(i,Kl(i)))}class e5 extends oa{mount(){const{current:i}=this.node;i&&(this.unmount=Tj(i,(s,o)=>(f0(this.node,o,"Start"),u=>f0(this.node,u,"End"))))}unmount(){}}class t5 extends oa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Yl(Ul(this.node.current,"focus",()=>this.onFocus()),Ul(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function d0(n,i,s){const{props:o}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",s==="Start");const u="onTap"+(s==="End"?"":s),d=o[u];d&&De.postRender(()=>d(i,Kl(i)))}class n5 extends oa{mount(){const{current:i}=this.node;i&&(this.unmount=Aj(i,(s,o)=>(d0(this.node,o,"Start"),(u,{success:d})=>d0(this.node,u,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Pu=new WeakMap,Eu=new WeakMap,a5=n=>{const i=Pu.get(n.target);i&&i(n)},i5=n=>{n.forEach(a5)};function l5({root:n,...i}){const s=n||document;Eu.has(s)||Eu.set(s,{});const o=Eu.get(s),u=JSON.stringify(i);return o[u]||(o[u]=new IntersectionObserver(i5,{root:n,...i})),o[u]}function s5(n,i,s){const o=l5(i);return Pu.set(n,s),o.observe(n),()=>{Pu.delete(n),o.unobserve(n)}}const o5={some:0,all:1};class r5 extends oa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:s,margin:o,amount:u="some",once:d}=i,h={root:s?s.current:void 0,rootMargin:o,threshold:typeof u=="number"?u:o5[u]},p=g=>{const{isIntersecting:y}=g;if(this.isInView===y||(this.isInView=y,d&&!y&&this.hasEnteredView))return;y&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",y);const{onViewportEnter:v,onViewportLeave:x}=this.node.getProps(),S=y?v:x;S&&S(g)};return s5(this.node.current,h,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:s}=this.node;["amount","margin","root"].some(c5(i,s))&&this.startObserver()}unmount(){}}function c5({viewport:n={}},{viewport:i={}}={}){return s=>n[s]!==i[s]}const u5={inView:{Feature:r5},tap:{Feature:n5},focus:{Feature:t5},hover:{Feature:e5}},f5={layout:{ProjectionNode:gv,MeasureLayout:rv}},d5={...$T,...u5,...WE,...f5},Te=mT(d5,wT);const h5=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m5=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,s,o)=>o?o.toUpperCase():s.toLowerCase()),h0=n=>{const i=m5(n);return i.charAt(0).toUpperCase()+i.slice(1)},yv=(...n)=>n.filter((i,s,o)=>!!i&&i.trim()!==""&&o.indexOf(i)===s).join(" ").trim(),p5=n=>{for(const i in n)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};var g5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const y5=T.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:u="",children:d,iconNode:h,...p},g)=>T.createElement("svg",{ref:g,...g5,width:i,height:i,stroke:n,strokeWidth:o?Number(s)*24/Number(i):s,className:yv("lucide",u),...!d&&!p5(p)&&{"aria-hidden":"true"},...p},[...h.map(([y,v])=>T.createElement(y,v)),...Array.isArray(d)?d:[d]]));const He=(n,i)=>{const s=T.forwardRef(({className:o,...u},d)=>T.createElement(y5,{ref:d,iconNode:i,className:yv(`lucide-${h5(h0(n))}`,`lucide-${n}`,o),...u}));return s.displayName=h0(n),s};const v5=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],vv=He("activity",v5);const x5=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],xv=He("arrow-right",x5);const b5=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],S5=He("briefcase",b5);const j5=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],m0=He("chevron-left",j5);const T5=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],go=He("chevron-right",T5);const E5=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],N5=He("cpu",E5);const A5=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],w5=He("facebook",A5);const C5=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],M5=He("file-text",C5);const D5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],R5=He("info",D5);const z5=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],O5=He("link",z5);const L5=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],V5=He("linkedin",L5);const _5=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],bv=He("mail",_5);const B5=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],zl=He("map-pin",B5);const U5=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],k5=He("menu",U5);const H5=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Sv=He("phone",H5);const q5=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Y5=He("search",q5);const G5=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],X5=He("send",G5);const K5=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Z5=He("shield-check",K5);const Q5=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],P5=He("sliders-vertical",Q5);const F5=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],J5=He("x",F5);const I5=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],$5=He("zap",I5),W5={en:{nav:{home:"Home",industrial:"Industrial",hv:"High Voltage",cabling:"Cabling",solar:"Solar",om:"O&M",contact:"Contact Us",about:"About Us"},hero:{companyName:"PLANET ENERGY",distributorText:"SYSTEMS",title:"POWERING THE ENERGY OF TOMORROW",subtitle:"AUTHORIZED NATIONAL DISTRIBUTOR FOR SIEMENS & HELUKABEL",cta:"Explore Solutions",slides:{label_benin:"Energy Infrastructure • Benin",label_berlin:"Engineering HQ • Berlin",label_ghana:"Distribution Hub • Ghana",benin:"Energy Infrastructure • Benin",berlin:"Engineering HQ • Berlin",ghana:"Distribution Hub • Ghana",industry:"Industrial Automation"}},partners:{overline:"TRUSTED GLOBALLY",title:"Strategic Technology Partners"},footer:{desc:"Expert engineering solutions in electrical infrastructure, high-voltage systems, and industrial automation across Africa.",solutions:"Our Solutions",company:"Company",contact:"Global Presence",rights:"All rights reserved.",links:{about:"About Us",om:"O&M Services",careers:"Careers",news:"News & Press",privacy:"Privacy Policy",terms:"Terms of Service",sitemap:"Sitemap"}},about:{hero:{overline:"COMPANY PROFILE",title:"Engineering Excellence."},main:{title:"Bridging German Precision with Local Expertise.",description1:"Planet Energy Systems is a premier Benino-German enterprise delivering innovative solutions in electrical infrastructure, high-voltage telecommunications, and industrial automation.",description2:"Our team combines European engineering standards with deep African market insights. Founded in 2000, we have grown from a specialized consultancy to a full-service EPC partner, ensuring reliable power supply for industries and utilities across the continent.",stats:{years:"Years Active",projects:"Major Projects"}},leadership:{title:"Leadership",founder:{name:"Mauriel Ahodi",role:"Founder & CEO",bio:"An electrical engineer alumnus of TU Berlin with over 15 years of experience in O&M systems and renewable energy at German firms like Skytron Energy and Luxra AG. Mauriel established Planet Energy to bring sustainable power stability to West Africa."},executives:{technical:"Technical Director",financial:"Financial Director",legal:"Legal Counsel",board:"Executive Board"}},imageCaption:"Berlin, Germany HQ"},contact:{phone:"+229 21 31 16 00",email:"info@planet-energy.de",offices:{cotonou:{name:"Cotonou (HQ)",description:"Corporate Office, Benin"},accra:{name:"Accra",description:"Regional Hub, Ghana"},berlin:{name:"Berlin",description:"Engineering HQ, Germany"}},form:{title:"Send us a message",labels:{fullName:"Full Name",email:"Email Address",company:"Company / Organization",department:"Department",message:"Message"},placeholders:{fullName:"e.g. Robert Smith",email:"robert@company.com",company:"e.g. Planet Energy Systems",message:"How can we help you today?"},options:{sales:"Sales Inquiry",technical:"Technical Support",partnership:"Partnership",other:"Other"},submit:"Send Message"}},operations:{hero:{overline:"LIFECYCLE SERVICES",title:"Operations & Maintenance",subtitle:"Comprehensive technical management and preventive maintenance for electrical infrastructure."},main:{title:"Maximizing",titleAccent:"System Reliability.",description1:"We support our clients in all technical tasks of building management and take care of service and maintenance throughout the entire lifecycle of your building.",description2:"Regular maintenance of your electrical installation helps prevent power outages, equipment damage, and accidents. It is therefore necessary to regularly check the technical safety of installations, especially older ones.",services:{security:{title:"Technical Safety",description:"Regular inspections to prevent accidents and ensure compliance."},performance:{title:"Continuous Performance",description:"Optimization of equipment to avoid unforeseen breakdowns."}}},scada:{header:"SCADA MONITORING ACTIVE",metrics:{voltage:"Voltage",load:"Load",status:"Status",optimal:"OPTIMAL"}}},products:{hero:{overline:"PRODUCT PORTFOLIO",title:"Technical Solutions",subtitle:"Verified components for industrial infrastructure and high-voltage distribution."},tabs:{protection:"Circuit Protection",switching:"Switching & Relay",control:"Control & Monitor",loaddrive:"Load & Drive"},categories:{acb:"Air Circuit Breakers (ACB)",mccb:"Moulded Case (MCCB)",mcb:"Miniature Breakers (MCB)",contactors:"Industrial Contactors",overloadRelays:"Thermal Overload Relays",monitoring:"Technical Monitoring",timers:"Industrial Timers",signaling:"Signaling Devices",changeover:"Changeover Switches",superswitch:"Superswitch SDF"}},productShowcase:{overline:"INNOVATION HUB",title:"Featured Solutions",viewProduct:"View Details",sets:[{category:"Circuit Protection",items:[{name:"Air Circuit Breakers",spec:"High Voltage • 6300A",detail:"Robust protection for industrial scale power distribution."},{name:"Moulded Case Breakers",spec:"Medium Voltage • 1600A",detail:"Compact efficiency for commercial and industrial panels."},{name:"Miniature Breakers",spec:"Low Voltage • 125A",detail:"Precision protection for final distribution circuits."}]},{category:"Cabling Systems",items:[{name:"Industrial Control",spec:"Flexible • Shielded",detail:"Oil-resistant control cables for automation machinery."},{name:"Data Network",spec:"CAT6 • Fiber Optic",detail:"High-speed data transmission for smart factories."},{name:"Solar PV",spec:"UV Resistant • DC",detail:"Durable cabling for photovoltaic energy harvesting."}]}]},sitrain:{hero:{badge:"SIEMENS DIGITAL ACADEMY",title:"SITRAIN India",subtitle:"The Future of Industrial Learning Starts Here. Expert-led training for automation, drive systems, and power distribution.",button:"Explore Courses"},features:{digitalFormats:{title:"Digital Formats",description:"Classroom courses now available in interactive digital formats for remote professional growth."},tsdcKalwa:{title:"TSDC Kalwa",description:"Hands-on training at our specialized Technical Service & Development Center in Navi Mumbai."},certifiedMastery:{title:"Certified Mastery",description:"Get recognized for your technical expertise with industry-leading Siemens certifications."}},locations:{title:"National Presence",subtitle:"Our training centers are strategically located across industrial hubs.",centers:{kalwa:"Kalwa (Main)",noida:"Noida",coimbatore:"Coimbatore",panchakula:"Panchakula",kolkata:"Kolkata"}}},solar:{hero:{title:"SOLAR ENERGY SOLUTIONS"},status:{title:"Coming Soon",text:"We are currently preparing our comprehensive solar solutions portfolio. Stay tuned for updates."}},hv:{hero:{title:"HIGH VOLTAGE SYSTEMS"},status:{title:"Coming Soon",text:"Our high-voltage infrastructure services section is under development. Efficient power distribution solutions are on the way."}},home:{intro:{overline:"WHO WE ARE",title:"Engineering the future of sustainable energy.",description:"We are an international company offering intelligent and innovative solutions.",stats:{years:"Years Experience",countries:"Countries",support:"Support"}},connection:{overline:"INTERNATIONAL CONNECTION",title:"German Partnership",description:"Cooperation with our German partners allows for the best possible implementation of your projects thanks to many years of experience and competence - from planning to installation to O&M monitoring via SCADA for all our services."},mission:{overline:"MISSION",title:"Sustainable Development",description:"Our goal is to sustainably meet today's and tomorrow's energy needs with renewable energies and to modernize electrical grids. In Africa in particular, this is a difficult task that we undertake to create training and jobs in this field. In this way, we solve energy problems and give local populations the key to their independent and sustainable development."}},industrial:{hero:{title:"PLANET ENERGY SYSTEMS",subtitle:"INDUSTRIAL AND AUTOMATION SOLUTIONS"},intro:{text:"Specialized solutions for industrial electrical infrastructure and automation."},sections:{breakers:{title:"Industrial Breakers",text:"High-performance circuit protection for demanding industrial applications."},control:{title:"Control Systems",text:"Intelligent control and monitoring for decentralized energy systems."},simocode:{title:"Siemens SIMOCODE",text:"Flexible and modular motor management system for low-voltage motors."},catalog:{title:"Product Catalog"}}},cablingLanding:{brandStory:"Planet Energy Systems is pleased to announce its selection as the exclusive distributor of HELUKABEL in Benin. This strategic partnership combines the expertise of Planet Energy Systems in renewable energies and intelligent technical solutions with the excellence of HELUKABEL, a world leader in cabling technology.",intro:"Our domains of offering:",domains:["Industrial Cables & Wires","Data, Network & Bus Technology","Media Technology","Pre-assembled Cables","Cable Accessories","Wind Energy","Photovoltaic"],sections:{movement:{title:"YOUR WORLD IN MOVEMENT",featured:{title:"HELUWIND",subtitle:"The reliable connection for wind turbines.",btn:"VIEW MORE"},cards:[{title:"DRIVE SYSTEMS",subtitle:"Connecting the source to the speed.",btn:"DISCOVER"},{title:"AUTOMATION",subtitle:"Cables for control and sensors.",btn:"DISCOVER"},{title:"ROBOTICS",subtitle:"Flexible cables for high dynamics.",btn:"DISCOVER"}]},catalog:{consulted:{title:"MOST CONSULTED",subtitle:"Our top technical cabling solutions.",btn:"VIEW DETAIL",products:[{name:"S-Y-JZ",artNo:"11001"},{name:"S-Y-OZ",artNo:"11002"},{name:"S-Y-JZ-JZ",artNo:"11003"},{name:"S-Y-OZ-OZ",artNo:"11004"},{name:"TOPFLEX-EMV",artNo:"11005"},{name:"TOPFLEX-JZ",artNo:"11006"},{name:"TOPFLEX-OZ",artNo:"11007"}]},halogenFree:{title:"HALOGEN FREE SOLUTONS",subtitle:"Enhanced safety for public and industrial buildings.",btn:"VIEW DETAIL",products:[{name:"HMH",desc:"Halogen-free control cable"},{name:"HMH-C",desc:"Screened halogen-free control cable"},{name:"H05Z-K",desc:"Halogen-free single core"},{name:"H07Z-K",desc:"Halogen-free single core"}]}}}}},fr:{nav:{home:"Accueil",industrial:"Industriel",hv:"Haute Tension",cabling:"Câblerie",solar:"Solaire",om:"O&M",contact:"Contactez-nous",about:"À Propos"},hero:{companyName:"PLANET ENERGY",distributorText:"SYSTEMS",title:"PROPULSER L'ÉNERGIE DE DEMAIN",subtitle:"DISTRIBUTEUR NATIONAL AGRÉÉ POUR SIEMENS & HELUKABEL",cta:"Explorer les Solutions",slides:{label_benin:"Infrastructure Énergétique • Bénin",label_berlin:"Siège Ingénierie • Berlin",label_ghana:"Hub de Distribution • Ghana",benin:"Infrastructure Énergétique • Bénin",berlin:"Siège Ingénierie • Berlin",ghana:"Hub de Distribution • Ghana",industry:"Automatisation Industrielle"}},partners:{overline:"CONFIANCE MONDIALE",title:"Partenaires Technologiques Stratégiques"},footer:{desc:"Solutions d'ingénierie expertes dans l'infrastructure électrique, les systèmes haute tension et l'automatisation industrielle en Afrique.",solutions:"Nos Solutions",company:"Entreprise",contact:"Présence Globale",rights:"Tous droits réservés.",links:{about:"À Propos",om:"Services O&M",careers:"Carrières",news:"Actualités & Presse",privacy:"Politique de Confidentialité",terms:"Conditions de Service",sitemap:"Plan du Site"}},about:{hero:{overline:"PROFIL DE L'ENTREPRISE",title:"Excellence Technique."},main:{title:"Allier la Précision Allemande à l'Expertise Locale.",description1:"Planet Energy Systems est une entreprise bénino-allemande de premier plan offrant des solutions innovantes dans l'infrastructure électrique, les télécommunications haute tension et l'automatisation industrielle.",description2:"Notre équipe combine les normes d'ingénierie européennes avec une profonde connaissance du marché africain. Fondée en 2000, nous avons évolué d'un cabinet de conseil spécialisé vers un partenaire EPC à service complet, garantissant un approvisionnement énergétique fiable pour les industries et les services publics du continent.",stats:{years:"Années Actives",projects:"Projets Majeurs"}},leadership:{title:"Direction",founder:{name:"Mauriel Ahodi",role:"Fondateur & PDG",bio:"Ingénieur électricien diplômé de la TU Berlin avec plus de 15 ans d'expérience dans les systèmes O&M et les énergies renouvelables chez des entreprises allemandes comme Skytron Energy et Luxra AG. Mauriel a créé Planet Energy pour apporter une stabilité énergétique durable en Afrique de l'Ouest."},executives:{technical:"Directeur Technique",financial:"Directeur Financier",legal:"Conseil Juridique",board:"Conseil d'Administration"}},imageCaption:"Siège Berlin, Allemagne"},contact:{phone:"+229 21 31 16 00",email:"info@planet-energy.de",offices:{cotonou:{name:"Cotonou (HQ)",description:"Siège Social, Bénin"},accra:{name:"Accra",description:"Hub Régional, Ghana"},berlin:{name:"Berlin",description:"Siège Ingénierie, Allemagne"}},form:{title:"Envoyez-nous un message",labels:{fullName:"Nom Complet",email:"Adresse Email",company:"Entreprise / Organisation",department:"Département",message:"Message"},placeholders:{fullName:"ex. Robert Smith",email:"robert@company.com",company:"ex. Planet Energy Systems",message:"Comment pouvons-nous vous aider aujourd'hui ?"},options:{sales:"Demande de Vente",technical:"Support Technique",partnership:"Partenariat",other:"Autre"},submit:"Envoyer le Message"}},operations:{hero:{overline:"SERVICES DU CYCLE DE VIE",title:"Opérations & Maintenance",subtitle:"Gestion technique complète et maintenance préventive pour l'infrastructure électrique."},main:{title:"Maximiser",titleAccent:"la Fiabilité du Système.",description1:"Nous soutenons nos clients dans toutes les tâches techniques de la gestion du bâtiment et nous chargeons du service et de l'entretien durant tout le cycle de vie de votre immeuble.",description2:"L'entretien régulier de votre installation électrique contribue à prévenir les pannes de courant, les dégâts occasionnés sur les équipements et les accidents. Il convient donc par conséquent, de contrôler régulièrement la sécurité technique des installations, particulièrement les plus anciennes.",services:{security:{title:"Sécurité Technique",description:"Inspections régulières pour prévenir les accidents et garantir la conformité."},performance:{title:"Performance Continue",description:"Optimisation des équipements pour éviter les pannes imprévues."}}},scada:{header:"SURVEILLANCE SCADA ACTIVE",metrics:{voltage:"Tension",load:"Charge",status:"Statut",optimal:"OPTIMAL"}}},products:{hero:{overline:"PORTEFEUILLE PRODUITS",title:"Solutions Techniques",subtitle:"Composants vérifiés pour l'infrastructure industrielle et la distribution haute tension."},tabs:{protection:"Protection de Circuit",switching:"Commutation & Relais",control:"Contrôle & Surveillance",loaddrive:"Charge & Entraînement"},categories:{acb:"Disjoncteurs à Air (ACB)",mccb:"Disjoncteurs Moulded Case (MCCB)",mcb:"Disjoncteurs Miniatures (MCB)",contactors:"Contacteurs Industriels",overloadRelays:"Relais Thermiques de Surcharge",monitoring:"Surveillance Technique",timers:"Minuteries Industrielles",signaling:"Dispositifs de Signalisation",changeover:"Commutateurs de Transfert",superswitch:"Superswitch SDF"}},productShowcase:{overline:"CENTRE D'INNOVATION",title:"Solutions Vedettes",viewProduct:"Voir Détails",sets:[{category:"Protection Circuit",items:[{name:"Disjoncteurs à Air",spec:"Haute Tension • 6300A",detail:"Protection robuste pour la distribution d'énergie à l'échelle industrielle."},{name:"Disjoncteurs Boîtier Moulé",spec:"Moyenne Tension • 1600A",detail:"Efficacité compacte pour les panneaux commerciaux et industriels."},{name:"Disjoncteurs Miniatures",spec:"Basse Tension • 125A",detail:"Protection de précision pour les circuits de distribution finale."}]},{category:"Systèmes de Câblage",items:[{name:"Contrôle Industriel",spec:"Flexible • Blindé",detail:"Câbles de contrôle résistants à l'huile pour machines d'automatisation."},{name:"Réseau de Données",spec:"CAT6 • Fibre Optique",detail:"Transmission de données haute vitesse pour les usines intelligentes."},{name:"Solaire PV",spec:"Résistant UV • DC",detail:"Câblage durable pour la récolte d'énergie photovoltaïque."}]}]},sitrain:{hero:{badge:"SIEMENS DIGITAL ACADEMY",title:"SITRAIN India",subtitle:"L'Avenir de l'Apprentissage Industriel Commence Ici. Formation dirigée par des experts pour l'automatisation, les systèmes d'entraînement et la distribution électrique.",button:"Explorer les Cours"},features:{digitalFormats:{title:"Formats Numériques",description:"Cours en classe désormais disponibles en formats numériques interactifs pour une croissance professionnelle à distance."},tsdcKalwa:{title:"TSDC Kalwa",description:"Formation pratique dans notre Centre Technique de Service et Développement spécialisé à Navi Mumbai."},certifiedMastery:{title:"Maîtrise Certifiée",description:"Faites reconnaître votre expertise technique avec les certifications leaders du secteur de Siemens."}},locations:{title:"Présence Nationale",subtitle:"Nos centres de formation sont stratégiquement situés dans les pôles industriels.",centers:{kalwa:"Kalwa (Principal)",noida:"Noida",coimbatore:"Coimbatore",panchakula:"Panchakula",kolkata:"Kolkata"}}},solar:{hero:{title:"SOLUTIONS D'ÉNERGIE SOLAIRE"},status:{title:"Bientôt Disponible",text:"Nous préparons actuellement notre portefeuille complet de solutions solaires. Restez à l'écoute pour les mises à jour."}},hv:{hero:{title:"SYSTÈMES HAUTE TENSION"},status:{title:"Bientôt Disponible",text:"Notre section de services d'infrastructure haute tension est en cours de développement. Des solutions de distribution d'énergie efficaces sont en route."}},home:{intro:{overline:"QUI SOMMES NOUS",title:"Ingénierie de l'avenir de l'énergie durable.",description:"Nous sommes une société internationale qui vous propose des solutions intelligente et innovantes",stats:{years:"Années d'Expérience",countries:"Pays",support:"Support"}},connection:{overline:"CONNECTION INTERNATIONAL",title:"Partenariat Allemand",description:"La coopération avec nos partenaires allemands permet la meilleure mise en œuvre possible de vos projets grâce à de nombreuses années d'expérience et de compétence - de la planification à l'installation jusqu’au suivi O&M par SCADA pour toutes nos services."},mission:{overline:"MISSION",title:"Développement Durable",description:"Notre objectif est de répondre durablement aux besoins énergétiques d'aujourd'hui et de demain avec les énergies renouvelables et de moderniser les réseaux électriques. En Afrique en particulier, c'est une tâche difficile que nous assurons pour créer de la formation et des emplois dans ce domaine. De cette façon, nous résolvons les problèmes énergétiques et donnons aux populations locales la clé de leur développement indépendant et durable."}},industrial:{hero:{title:"PLANET ENERGY SYSTEMS",subtitle:"SOLUTIONS INDUSTRIELLES ET D'AUTOMATISATION"},intro:{text:"Solutions spécialisées pour l'infrastructure électrique industrielle et l'automatisation."},sections:{breakers:{title:"Disjoncteurs Industriels",text:"Protection de circuit haute performance pour les applications industrielles exigeantes."},control:{title:"Systèmes de Contrôle",text:"Contrôle et surveillance intelligents pour les systèmes énergétiques décentralisés."},simocode:{title:"Siemens SIMOCODE",text:"Système de gestion de moteur flexible et modulaire pour moteurs basse tension."},catalog:{title:"Catalogue Produits"}}},cablingLanding:{brandStory:"Planet Energy Systems a le plaisir d'annoncer sa sélection en tant que distributeur exclusif de HELUKABEL au Bénin. Ce partenariat stratégique combine l'expertise de Planet Energy Systems dans les énergies renouvelables et les solutions techniques intelligentes avec l'excellence de HELUKABEL, un leader mondial de la technologie de câblerie.",intro:"Nos domaines d'offre :",domains:["Câbles et fils industriels","Technologie de données, de réseau et de bus","Technologie des médias","Câbles pré-assemblés","Accessoires de câble","Énergie éolienne","Photovoltaïque"],sections:{movement:{title:"VOTRE MONDE EN MOUVEMENT",featured:{title:"HELUWIND",subtitle:"La connexion fiable pour les éoliennes.",btn:"VOIR PLUS"},cards:[{title:"DRIVE SYSTEMS",subtitle:"Connecter la source à la vitesse.",btn:"DÉCOUVRIR"},{title:"AUTOMATISATION",subtitle:"Câbles pour le contrôle et les capteurs.",btn:"DÉCOUVRIR"},{title:"ROBOTIQUE",subtitle:"Câbles flexibles pour haute dynamique.",btn:"DÉCOUVRIR"}]},catalog:{consulted:{title:"LES PLUS CONSULTÉS",subtitle:"Nos meilleures solutions de câblage technique.",btn:"VOIR DÉTAIL",products:[{name:"S-Y-JZ",artNo:"11001"},{name:"S-Y-OZ",artNo:"11002"},{name:"S-Y-JZ-JZ",artNo:"11003"},{name:"S-Y-OZ-OZ",artNo:"11004"},{name:"TOPFLEX-EMV",artNo:"11005"},{name:"TOPFLEX-JZ",artNo:"11006"},{name:"TOPFLEX-OZ",artNo:"11007"}]},halogenFree:{title:"SOLUTIONS SANS HALOGÈNE",subtitle:"Sécurité renforcée pour les bâtiments publics et industriels.",btn:"VOIR DÉTAIL",products:[{name:"HMH",desc:"Câble de commande sans halogène"},{name:"HMH-C",desc:"Câble de commande blindé sans halogène"},{name:"H05Z-K",desc:"Monoconducteur sans halogène"},{name:"H07Z-K",desc:"Monoconducteur sans halogène"}]}}}}}},jv=T.createContext(),eN=({children:n})=>{const[i,s]=T.useState("fr"),o=d=>{s(d==="fr"||d==="en"?d:h=>h==="fr"?"en":"fr")},u=d=>{const h=d.split(".");let p=W5[i];for(const g of h){if(p[g]===void 0)return console.warn(`Translation missing for key: ${d} in language: ${i}`),d;p=p[g]}return p};return f.jsx(jv.Provider,{value:{language:i,toggleLanguage:o,t:u},children:n})},lt=()=>T.useContext(jv),tN=({isOpen:n,onClose:i,activeCategory:s})=>{const{t:o}=lt(),d=(()=>{if(!s)return[];try{const p=o(`megamenu.products.${s}`);return Array.isArray(p)?p:[]}catch(p){return console.error("Error fetching megamenu translations:",p),[]}})(),h=(p,g)=>({breakers:["https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=400","https://images.unsplash.com/photo-1617529497471-9218633199c0?auto=format&fit=crop&q=80&w=400","https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=400"],hv:["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400","https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?auto=format&fit=crop&q=80&w=400","https://images.unsplash.com/photo-1565514020176-dbf22378f825?auto=format&fit=crop&q=80&w=400"],cables:["https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?auto=format&fit=crop&q=80&w=400","https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=400","https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400"],solar:["https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400","https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=400","https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&q=80&w=400"]})[p]?.[g]||"";return f.jsxs(Te.div,{initial:{opacity:0,y:-20},animate:{opacity:n?1:0,y:n?0:-20},transition:{duration:.4,ease:[.22,1,.36,1]},className:`mega-menu-overlay ${n?"active":""}`,onMouseLeave:i,children:[f.jsx("div",{className:"container mega-grid",children:d.length>0?d.map((p,g)=>f.jsxs("div",{className:"mega-card",children:[f.jsxs("div",{className:"card-img",children:[f.jsx("img",{src:h(s,g),alt:p.title}),f.jsx("div",{className:"overlay"})]}),f.jsxs("div",{className:"card-content",children:[f.jsx("h3",{children:p.title}),f.jsx("p",{children:p.desc})]})]},g)):f.jsx("div",{className:"empty-state",children:"Select a category"})}),f.jsx("style",{jsx:!0,children:`
        .mega-menu-overlay {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          border-top: 1px solid #eee;
          box-shadow: 0 40px 80px rgba(0,0,0,0.1);
          z-index: 100;
          pointer-events: none;
          visibility: hidden;
        }

        .mega-menu-overlay.active {
          pointer-events: auto;
          visibility: visible;
        }

        .mega-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          padding: 60px 40px;
        }

        .mega-card {
           group: true;
           cursor: pointer;
        }

        .card-img {
            height: 200px;
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            margin-bottom: 20px;
        }

        .card-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }

        .mega-card:hover .card-img img {
            transform: scale(1.1);
        }

        .card-content h3 {
            font-size: 18px;
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 8px;
        }

        .card-content p {
            font-size: 14px;
            color: var(--color-text-muted);
            line-height: 1.6;
            margin-bottom: 16px;
        }

      `})]})},Tv="/assets/logo-BAXlkkGO.png",nN=()=>{const[n,i]=T.useState(!1),[s,o]=T.useState(!1),[u,d]=T.useState(""),[h,p]=T.useState(!1),{language:g,toggleLanguage:y,t:v}=lt(),x=sa(),S=Iu();T.useEffect(()=>{const R=()=>i(window.scrollY>50);return window.addEventListener("scroll",R),()=>window.removeEventListener("scroll",R)},[]);const N=[{title:v("nav.home"),path:"/"},{title:v("nav.industrial"),path:"/industrial"},{title:v("nav.hv"),path:"/high-voltage"},{title:v("nav.cabling"),path:"/products/cables"},{title:v("nav.solar"),path:"/solar"},{title:v("nav.om"),path:"/operations"},{title:v("nav.about"),path:"/about"}],O=R=>{R.mega?(d(R.mega),o(!0)):o(!1)},L=["/industrial","/solar","/high-voltage"].includes(x.pathname);return f.jsxs("nav",{className:`nav-corporate ${n||s||L?"scrolled":""}`,children:[f.jsxs("div",{className:"container nav-inner",children:[f.jsxs("div",{className:"nav-top",children:[f.jsx(at,{to:"/",className:"brand-corporate",children:f.jsx("img",{src:Tv,alt:"Planet Energy System",className:"logo-image"})}),f.jsxs("div",{className:"nav-actions",children:[f.jsxs("div",{className:"lang-selector",children:[f.jsx("span",{className:`lang ${g==="en"?"active":""}`,onClick:()=>y("en"),children:"EN"}),f.jsx("span",{className:"divider",children:"/"}),f.jsx("span",{className:`lang ${g==="fr"?"active":""}`,onClick:()=>y("fr"),children:"FR"})]}),f.jsx("button",{className:"btn-contact-nav",onClick:()=>S("/contact"),children:v("nav.contact")}),f.jsx("button",{className:"hamburger-menu",onClick:()=>p(!h),children:h?f.jsx(J5,{size:24}):f.jsx(k5,{size:24})})]})]}),f.jsx("div",{className:"nav-menu",children:N.map(R=>f.jsx("div",{onMouseEnter:()=>O(R),className:"nav-item-container",children:f.jsx(at,{to:R.path,className:`nav-link-corporate ${x.pathname===R.path?"active":""}`,children:R.title})},R.path))})]}),f.jsx(za,{children:h&&f.jsxs(Te.div,{className:"mobile-menu",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.2},children:[N.map(R=>f.jsx(at,{to:R.path,className:"mobile-menu-link",onClick:()=>p(!1),children:R.title},R.path)),f.jsx("div",{className:"mobile-menu-divider"}),f.jsx("button",{className:"mobile-contact-button",onClick:()=>{S("/contact"),p(!1)},children:v("nav.contact")}),f.jsxs("div",{className:"mobile-lang-selector",children:[f.jsx("span",{className:`lang ${g==="en"?"active":""}`,onClick:()=>y("en"),children:"EN"}),f.jsx("span",{className:"divider",children:"/"}),f.jsx("span",{className:`lang ${g==="fr"?"active":""}`,onClick:()=>y("fr"),children:"FR"})]})]})}),f.jsx(tN,{isOpen:s,onClose:()=>o(!1),activeCategory:u}),f.jsx("style",{jsx:!0,children:`
        .nav-corporate {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1001;
          padding: 24px 0;
          transition: all 0.4s ease;
          background: transparent;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .nav-corporate.scrolled {
          padding: 16px 0;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          border-bottom: none;
        }

        /* Adjust colors when scrolled because bg becomes white */
        .nav-corporate.scrolled .brand-corporate,
        .nav-corporate.scrolled .nav-link-corporate,
        .nav-corporate.scrolled .lang-selector {
           color: var(--color-primary);
        }
        
        .nav-corporate.scrolled .brand-corporate .text-light {
           color: var(--color-secondary);
        }
        
        .nav-corporate.scrolled .nav-link-corporate:hover {
           color: var(--color-accent);
        }

        .nav-corporate.scrolled .btn-contact-nav {
           border-color: var(--color-primary);
           color: var(--color-primary);
        }
        
        .nav-corporate.scrolled .btn-contact-nav:hover {
           background: var(--color-primary);
           color: white;
        }

        .nav-inner {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .nav-top {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .brand-corporate {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 24px;
          letter-spacing: -0.5px;
          color: white;
          text-decoration: none;
          display: flex;
          gap: 6px;
          align-items: center;
          transition: opacity 0.3s ease;
        }

        .brand-corporate:hover {
          opacity: 0.8;
        }

        .logo-image {
          height: 60px;
          width: auto;
          object-fit: contain;
          transition: height 0.3s ease;
        }

        .nav-corporate.scrolled .logo-image {
          height: 50px;
        }
        
        .brand-logo-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .brand-main {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 1px;
          color: white;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .brand-dot {
          color: var(--color-accent);
          font-weight: 900;
        }

        .brand-subtitle {
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          font-size: 9px;
          letter-spacing: 1.5px;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          margin-top: -2px;
        }

        .nav-corporate.scrolled .brand-main {
          color: var(--color-primary);
        }

        .nav-corporate.scrolled .brand-subtitle {
          color: var(--color-secondary);
        }
        
        .brand-corporate .text-light {
            font-weight: 400;
            color: rgba(255,255,255,0.9);
        }

        .nav-menu {
          display: flex;
          gap: 40px;
          width: 100%;
          justify-content: center;
          align-items: center;
        }

        .nav-link-corporate {
          color: white; /* Default white on transparent */
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          transition: color 0.3s ease;
          padding: 10px 0;
          display: inline-block;
          position: relative;
        }

        .nav-link-corporate:hover, .nav-link-corporate.active {
          color: var(--color-accent); 
        }

        /* Solid simple hover line */
        .nav-link-corporate::after {
            content: '';
            position: absolute;
            bottom: 0px;
            left: 0;
            width: 0%;
            height: 2px;
            background: var(--color-accent);
            transition: width 0.3s ease;
        }
        
        .nav-link-corporate:hover::after, .nav-link-corporate.active::after {
            width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .lang-selector {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px; /* Slightly larger for readability */
          font-weight: 600;
          color: white;
        }

        .lang { cursor: pointer; opacity: 0.7; transition: opacity 0.3s; }
        .lang:hover, .lang.active { opacity: 1; font-weight: 700; }
        .divider { opacity: 0.4; }

        .btn-contact-nav {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          padding: 10px 24px;
          border-radius: 4px; /* Boxy corporate look */
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Outfit', sans-serif;
        }

        .btn-contact-nav:hover {
          background: white;
          color: var(--color-primary);
          border-color: white;
        }

        /* Hamburger Menu */
        .hamburger-menu {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 8px;
          transition: color 0.3s ease;
        }

        .hamburger-menu:hover {
          color: var(--color-accent);
        }

        .nav-corporate.scrolled .hamburger-menu {
          color: var(--color-primary);
        }

        .nav-corporate.scrolled .hamburger-menu:hover {
          color: var(--color-accent);
        }

        /* Mobile Menu */
        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(0, 31, 53, 0.98);
          backdrop-filter: blur(10px);
          padding: 24px;
          flex-direction: column;
          gap: 16px;
          border-top: 1px solid rgba(255,255,255,0.1);
          z-index: 1000;
        }

        .nav-corporate.scrolled .mobile-menu {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
        }

        .mobile-menu-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          padding: 12px 0;
          transition: color 0.3s ease;
          display: block;
        }

        .mobile-menu-link:hover {
          color: var(--color-accent);
        }

        .nav-corporate.scrolled .mobile-menu-link {
          color: var(--color-primary);
        }

        .nav-corporate.scrolled .mobile-menu-link:hover {
          color: var(--color-accent);
        }

        /* Mobile Menu Divider */
        .mobile-menu-divider {
          height: 1px;
          background: rgba(255,255,255,0.2);
          margin: 12px 0;
        }

        .nav-corporate.scrolled .mobile-menu-divider {
          background: rgba(0,0,0,0.1);
        }

        /* Mobile Contact Button */
        .mobile-contact-button {
          background: var(--color-accent);
          border: 1px solid var(--color-accent);
          color: #001f35;
          padding: 12px 24px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Outfit', sans-serif;
          width: 100%;
          text-align: center;
        }

        .mobile-contact-button:hover {
          background: transparent;
          color: var(--color-accent);
        }

        .nav-corporate.scrolled .mobile-contact-button {
          background: var(--color-primary);
          color: white;
        }

        .nav-corporate.scrolled .mobile-contact-button:hover {
          background: transparent;
          color: var(--color-primary);
          border-color: var(--color-primary);
        }

        /* Mobile Language Selector */
        .mobile-lang-selector {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: white;
          padding-top: 12px;
        }

        .nav-corporate.scrolled .mobile-lang-selector {
          color: var(--color-primary);
        }

        .mobile-lang-selector .lang {
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.3s;
        }

        .mobile-lang-selector .lang:hover,
        .mobile-lang-selector .lang.active {
          opacity: 1;
          font-weight: 700;
        }

        .mobile-lang-selector .divider {
          opacity: 0.4;
        }

        @media (max-width: 1024px) {
           .nav-menu { display: none; }
           .lang-selector { display: none; }
           .btn-contact-nav { display: none; }
           .hamburger-menu { display: block; }
           .mobile-menu { display: flex; }
        }
      `})]})},aN=()=>{const{t:n}=lt();return f.jsxs("footer",{className:"footer-corporate",children:[f.jsxs("div",{className:"container footer-grid",children:[f.jsxs("div",{className:"footer-col brand-col",children:[f.jsx("img",{src:Tv,alt:"Planet Energy System",className:"footer-logo-image"}),f.jsx("p",{className:"footer-desc",children:n("footer.desc")}),f.jsxs("div",{className:"social-row",children:[f.jsx("a",{href:"#",className:"social-btn",children:f.jsx(V5,{size:18})}),f.jsx("a",{href:"#",className:"social-btn",children:f.jsx(w5,{size:18})})]})]}),f.jsxs("div",{className:"footer-col",children:[f.jsx("h4",{children:n("footer.solutions")}),f.jsxs("div",{className:"footer-link-list",children:[f.jsx(at,{to:"/products",children:"Siemens Low Voltage"}),f.jsx(at,{to:"/products",children:"Industrial Automation"}),f.jsx(at,{to:"/products",children:"Helukabel Systems"}),f.jsx(at,{to:"/products",children:"Renewable Energy"})]})]}),f.jsxs("div",{className:"footer-col",children:[f.jsx("h4",{children:n("footer.company")}),f.jsxs("div",{className:"footer-link-list",children:[f.jsx(at,{to:"/about",children:n("footer.links.about")}),f.jsx(at,{to:"/operations",children:n("footer.links.om")}),f.jsx(at,{to:"/contact",children:n("footer.links.careers")}),f.jsx(at,{to:"/contact",children:n("footer.links.news")})]})]}),f.jsxs("div",{className:"footer-col contact-col",children:[f.jsx("h4",{children:n("footer.contact")}),f.jsxs("div",{className:"contact-list",children:[f.jsxs("div",{className:"contact-section",children:[f.jsx("p",{className:"contact-section-title",style:{fontWeight:700,marginBottom:"8px"},children:n("contact.offices.cotonou.name")}),f.jsxs("div",{className:"c-item",children:[f.jsx(zl,{size:16,className:"c-icon"}),f.jsx("span",{children:n("contact.offices.cotonou.description")})]}),f.jsxs("div",{className:"c-item",children:[f.jsx(Sv,{size:16,className:"c-icon"}),f.jsx("span",{children:n("contact.phone")})]})]}),f.jsxs("div",{className:"contact-section",style:{marginTop:"16px",paddingTop:"16px",borderTop:"1px solid rgba(255,255,255,0.1)"},children:[f.jsx("p",{className:"contact-section-title",style:{fontWeight:700,marginBottom:"8px"},children:n("contact.offices.accra.name")}),f.jsxs("div",{className:"c-item",children:[f.jsx(zl,{size:16,className:"c-icon"}),f.jsx("span",{children:n("contact.offices.accra.description")})]})]}),f.jsxs("div",{className:"c-item",style:{marginTop:"16px"},children:[f.jsx(bv,{size:16,className:"c-icon"}),f.jsx("span",{children:n("contact.email")})]})]})]})]}),f.jsx("div",{className:"footer-bottom",children:f.jsxs("div",{className:"container bottom-flex",children:[f.jsxs("p",{children:["© ",new Date().getFullYear()," Planet Energy. ",n("footer.rights")]}),f.jsxs("div",{className:"legal-links",children:[f.jsx(at,{to:"/legal",children:n("footer.links.terms")}),f.jsx(at,{to:"/privacy",children:n("footer.links.privacy")}),f.jsx(at,{to:"/sitemap",children:n("footer.links.sitemap")})]})]})}),f.jsx("style",{jsx:!0,children:`
        .footer-corporate {
           background: #050505;
           color: #e5e5e5;
           padding-top: 100px;
           border-top: 1px solid rgba(255,255,255,0.05);
           font-family: 'Outfit', sans-serif;
        }

        .footer-grid {
           display: grid;
           grid-template-columns: 2fr 1fr 1fr 1.5fr;
           gap: 60px;
           padding-bottom: 80px;
        }

        .footer-logo {
           display: flex;
           flex-direction: column;
           gap: 4px;
           margin-bottom: 24px;
        }

        .footer-logo-image {
           height: 70px;
           width: auto;
           object-fit: contain;
           margin-bottom: 16px;
        }

        .footer-logo-main {
           font-family: 'Outfit', sans-serif;
           font-weight: 800;
           font-size: 18px;
           letter-spacing: 1px;
           color: white;
           display: flex;
           align-items: center;
           gap: 2px;
        }

        .footer-logo-dot {
           color: var(--color-accent);
           font-weight: 900;
        }

        .footer-logo-subtitle {
           font-family: 'Outfit', sans-serif;
           font-weight: 400;
           font-size: 8px;
           letter-spacing: 1.5px;
           color: rgba(255, 255, 255, 0.5);
           text-transform: uppercase;
        }

        .logo-text {
           font-family: 'Outfit', sans-serif;
           font-weight: 800;
           font-size: 20px;
           letter-spacing: 1px;
           color: white;
        }

        .logo-dot {
           width: 8px;
           height: 8px;
           background: var(--color-accent);
           border-radius: 50%;
        }

        .footer-desc {
           color: #a3a3a3;
           line-height: 1.6;
           font-size: 15px;
           margin-bottom: 32px;
           max-width: 300px;
        }

        .social-row {
           display: flex;
           gap: 12px;
        }

        .social-btn {
           width: 36px;
           height: 36px;
           border-radius: 50%;
           background: rgba(255,255,255,0.1);
           display: flex;
           align-items: center;
           justify-content: center;
           color: white;
           transition: all 0.2s;
        }

        .social-btn:hover {
           background: var(--color-accent);
           color: #050505;
        }

        .footer-col h4 {
           color: white;
           font-size: 13px;
           font-weight: 700;
           letter-spacing: 1px;
           margin-bottom: 24px;
           text-transform: uppercase;
        }

        .footer-link-list {
           display: flex;
           flex-direction: column;
           gap: 16px;
        }

        .footer-link-list a {
           color: #a3a3a3;
           font-size: 15px;
           transition: color 0.2s;
        }

        .footer-link-list a:hover {
           color: white;
        }

        .contact-list {
           display: flex;
           flex-direction: column;
           gap: 20px;
        }

        .c-item {
           display: flex;
           align-items: flex-start;
           gap: 12px;
           color: #a3a3a3;
           font-size: 15px;
        }

        .c-icon {
           color: var(--color-accent);
           margin-top: 3px;
        }

        .footer-bottom {
           border-top: 1px solid rgba(255,255,255,0.05);
           padding: 30px 0;
           background: #000;
        }

        .bottom-flex {
           display: flex;
           justify-content: space-between;
           align-items: center;
           font-size: 13px;
           color: #525252;
        }

        .legal-links {
           display: flex;
           gap: 24px;
        }

        .legal-links a {
           color: #525252;
           transition: color 0.2s;
           text-decoration: none;
        }

        .legal-links a:hover {
           color: #a3a3a3;
        }

        @media (max-width: 1024px) {
           .footer-grid {
              grid-template-columns: 1fr 1fr;
              gap: 40px;
           }
        }

        @media (max-width: 600px) {
           .footer-grid {
              grid-template-columns: 1fr;
           }
           .bottom-flex {
              flex-direction: column;
              gap: 16px;
              text-align: center;
           }
        }
      `})]})},iN="/assets/Acrra%20Rue.jpg-DYHkzvud.jpeg",lN="/assets/Amazonee.jpg-B_fiw0lm.jpeg",sN="/assets/Tour%20de%20berlin.jpg-DScq44ov.jpeg",oN=()=>{const{t:n}=lt(),i=[{type:"image",src:lN,label:n("hero.slides.label_benin")},{type:"image",src:iN,label:n("hero.slides.label_ghana")},{type:"image",src:sN,label:n("hero.slides.label_berlin")}],[s,o]=T.useState(0);return T.useEffect(()=>{const u=setInterval(()=>{o(d=>(d+1)%i.length)},5e3);return()=>clearInterval(u)},[]),f.jsxs("div",{className:"hero-premium",children:[f.jsx(za,{mode:"wait",children:f.jsxs(Te.div,{className:"media-background",initial:{opacity:1},animate:{opacity:1},exit:{opacity:1},transition:{duration:0},children:[i[s].type==="video"?f.jsx("video",{src:i[s].src,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"hero-media"}):f.jsx("img",{src:i[s].src,alt:"Hero Background",className:"hero-media"}),f.jsx("div",{className:"hero-overlay"})]},s)}),f.jsxs("div",{className:"container hero-content",children:[f.jsx(Te.div,{className:"text-block",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:f.jsxs("h1",{className:"hero-title-main",children:[f.jsx("span",{className:"company-name",children:n("hero.companyName")}),f.jsx("span",{className:"distributor-text",children:n("hero.distributorText")})]})}),f.jsxs(Te.div,{className:"slide-indicator",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},children:[f.jsx("div",{className:"slide-line"}),f.jsx("span",{children:i[s].label})]},s)]}),f.jsx("style",{jsx:!0,children:`
        .hero-premium {
            height: 100vh;
            min-height: 800px;
            position: relative;
            display: flex;
            /* align-items: center; Removed to allow child to fill height */
            overflow: hidden;
            background: linear-gradient(135deg, #001f35 0%, #0f3355 100%);
        }

    .hero-premium::before {
      content: '';
      position: absolute;
      top: 0;
      right: -20%;
      bottom: 0;
      width: 60%;
      background: radial-gradient(circle at 100% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 45%);
      pointer-events: none;
      z-index: 0;
    }

        .media-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
        }

        .hero-media {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(0, 31, 53, 0.72), rgba(15, 51, 85, 0.42));
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 3;
      color: white;
      display: flex;
      height: 100%; /* Full height */
      align-items: center; /* Center text vertically */
      justify-content: space-between;
      width: 100%;
    }

        .text-block {
            max-width: 1000px;
        }

        .hero-overline {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-accent);
            font-weight: 700;
            letter-spacing: 2px;
            font-size: 12px;
            margin-bottom: 24px;
        }

        .hero-overline .dot {
            width: 8px;
            height: 8px;
            background: var(--color-accent);
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(230, 166, 0, 0.5);
        }

    .hero-title-main {
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 80px;
      font-family: 'Outfit', sans-serif;
      text-shadow: 0 4px 30px rgba(0,0,0,0.6);
      border-left: 5px solid var(--color-accent);
      padding-left: 32px;
    }

    .company-name {
      font-size: 56px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #ffffff;
      text-transform: uppercase;
      display: block;
      line-height: 1.1;
      white-space: nowrap;
    }

    .distributor-text {
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 4px;
      color: var(--color-accent);
      display: block;
      white-space: nowrap;
      text-transform: uppercase;
    }

        .hero-subtitle {
            font-size: 20px;
            color: rgba(255,255,255,0.8);
            margin-bottom: 40px;
            max-width: 500px;
            line-height: 1.6;
        }

        .btn-hero-primary {
            background: var(--color-primary);
            color: white;
            border: none;
            padding: 16px 32px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: all 0.3s ease;
            font-family: 'Outfit', sans-serif;
        }

        .btn-hero-primary:hover {
            background: var(--color-accent);
            color: black;
            padding-right: 40px;
        }

        .slide-indicator {
            position: absolute;
            bottom: 60px;
            right: 0;
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .slide-line {
            width: 60px;
            height: 2px;
            background: var(--color-accent);
        }

        .slide-indicator span {
            color: white;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 14px;
        }

        @media (max-width: 768px) {
            .company-name { font-size: 28px; white-space: normal; }
            .distributor-text { font-size: 13px; letter-spacing: 2px; white-space: normal; }
            
            /* On mobile, let's keep it absolute but align left or adjust */
            .slide-indicator { left: 0; right: auto; bottom: 30px; }
            
            .hero-content { align-items: flex-start; }
            .hero-title-main { border-left-width: 3px; padding-left: 20px; }
        }
      `})]})},rN="/assets/dis1-BNW3Q4Tb.jpg",cN="/assets/dis2-Cj-YKEFv.jpg",uN="/assets/dis3-elsU1-oK.jpg",fN=()=>{const{t:n}=lt(),[i,s]=T.useState(0),o=n("productShowcase.sets",{returnObjects:!0});if(!o||!Array.isArray(o))return null;const u=[{...o[0],items:o[0].items.map((d,h)=>({...d,img:h===0?rN:h===1?cN:uN}))},{...o[1],items:o[1].items.map((d,h)=>({...d,img:h===0?"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600":h===1?"https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=600":"https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600"}))}];return f.jsxs("section",{className:"product-showcase-corporate section-padding",children:[f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"showcase-header",children:[f.jsxs("div",{className:"header-left",children:[f.jsx("span",{className:"overline-light",children:n("productShowcase.overline")}),f.jsx("h2",{className:"title-light",children:n("productShowcase.title")})]}),f.jsx("div",{className:"header-controls",children:u.map((d,h)=>f.jsx("button",{className:`tab-btn ${i===h?"active":""}`,onClick:()=>s(h),children:d.category},h))})]}),f.jsx("div",{className:"showcase-content",children:f.jsx(za,{mode:"wait",children:f.jsx(Te.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},className:"products-grid",children:u[i].items.map((d,h)=>f.jsxs("div",{className:"project-card",children:[f.jsxs("div",{className:"card-bg",children:[f.jsx("img",{src:d.img,alt:d.name}),f.jsx("div",{className:"card-overlay"})]}),f.jsxs("div",{className:"card-info",children:[f.jsx("span",{className:"card-spec",children:d.spec}),f.jsx("h3",{children:d.name}),f.jsxs("div",{className:"card-hover-detail",children:[f.jsx("div",{className:"divider-w"}),f.jsx("p",{children:d.detail}),f.jsxs("span",{className:"view-link",children:[n("productShowcase.viewProduct")," ",f.jsx(xv,{size:16})]})]})]})]},h))},i)})})]}),f.jsx("style",{jsx:!0,children:`
        .product-showcase-corporate {
          background: #002b49; /* Deep Corporate Navy */
          color: white;
          padding-top: 100px;
          padding-bottom: 100px;
        }

        .showcase-header {
           display: flex;
           justify-content: space-between;
           align-items: flex-end;
           margin-bottom: 60px;
           border-bottom: 1px solid rgba(255,255,255,0.1);
           padding-bottom: 40px;
        }

        .overline-light {
           color: var(--color-accent);
           font-weight: 700;
           font-size: 13px;
           letter-spacing: 2px;
           display: block;
           margin-bottom: 16px;
           font-family: 'Outfit', sans-serif;
           text-transform: uppercase;
        }

        .title-light {
           font-family: 'Outfit', sans-serif;
           font-size: 48px;
           font-weight: 700;
           line-height: 1.1;
           color: white;
        }

        .header-controls {
           display: flex;
           gap: 32px;
        }

        .tab-btn {
           background: transparent;
           border: none;
           color: rgba(255,255,255,0.6);
           font-size: 16px;
           font-weight: 600;
           padding-bottom: 10px;
           cursor: pointer;
           transition: all 0.3s;
           font-family: 'Outfit', sans-serif;
           position: relative;
        }

        .tab-btn:hover {
           color: white;
        }

        .tab-btn.active {
           color: white;
        }
        
        .tab-btn.active::after {
           content: '';
           position: absolute;
           bottom: -41px; /* Align with border-bottom of header */
           left: 0;
           width: 100%;
           height: 3px;
           background: var(--color-accent);
        }

        .products-grid {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
           gap: 30px;
        }

        .project-card {
           position: relative;
           height: 450px;
           border-radius: 4px;
           overflow: hidden;
           cursor: pointer;
           group: true;
           background: #001f35;
        }

        .card-bg {
           position: absolute;
           inset: 0;
        }
        
        .card-bg img {
           width: 100%;
           height: 100%;
           object-fit: cover;
           transition: transform 0.6s ease;
        }
        
        .project-card:hover .card-bg img {
           transform: scale(1.05);
        }

        .card-overlay {
           position: absolute;
           inset: 0;
           background: linear-gradient(to top, rgba(0, 43, 73, 0.95), rgba(0, 43, 73, 0.4) 60%, transparent);
        }

        .card-info {
           position: relative;
           z-index: 2;
           height: 100%;
           display: flex;
           flex-direction: column;
           justify-content: flex-end;
           padding: 32px;
        }

        .card-spec {
           color: var(--color-accent);
           font-size: 12px;
           font-weight: 700;
           text-transform: uppercase;
           letter-spacing: 1px;
           margin-bottom: 8px;
        }

        .card-info h3 {
           font-family: 'Outfit', sans-serif;
           font-size: 24px;
           font-weight: 600;
           color: white;
           margin-bottom: 0;
           transition: transform 0.4s;
        }

        .card-hover-detail {
           max-height: 0;
           overflow: hidden;
           transition: max-height 0.4s ease, opacity 0.4s;
           opacity: 0;
        }

        .project-card:hover .card-hover-detail {
           max-height: 100px;
           opacity: 1;
        }
        
        .project-card:hover h3 {
           transform: translateY(-10px);
        }

        .divider-w {
           width: 40px;
           height: 1px;
           background: rgba(255,255,255,0.3);
           margin: 16px 0;
        }
        
        .card-hover-detail p {
           font-size: 14px;
           color: rgba(255,255,255,0.8);
           margin-bottom: 12px;
        }
        
        .view-link {
           display: flex;
           align-items: center;
           gap: 8px;
           font-size: 13px;
           font-weight: 700;
           color: white;
        }

        @media (max-width: 1024px) {
           .showcase-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 30px;
           }
           .products-grid {
              grid-template-columns: 1fr;
           }
           .project-card {
              height: 350px;
           }
        }
      `})]})},dN=[{siemens:"SINAMICS S120",cable:"HELUPOWER 600",group:"Drive Systems"},{siemens:"SIMOTION D425",cable:"HELUFLEX 500",group:"Motion Control"},{siemens:"S7-1500 PLC",cable:"HELUCOM PRO",group:"Automation"}],hN=()=>{const[n,i]=T.useState(""),s=dN.filter(o=>o.siemens.toLowerCase().includes(n.toLowerCase()));return f.jsxs("section",{className:"comp-tool-corporate section-padding",children:[f.jsxs("div",{className:"container tool-grid",children:[f.jsxs("div",{className:"tool-content",children:[f.jsx("span",{className:"overline-light",children:"ENGINEERING TOOLS"}),f.jsxs("h2",{className:"title-light",children:["Find the perfect ",f.jsx("br",{}),f.jsx("span",{className:"text-grad",children:"connection."})]}),f.jsx("p",{className:"tool-desc",children:"Ensure system reliability by pairing your specific Siemens drives and controllers with the certified Helukabel solutions."}),f.jsxs("div",{className:"search-container",children:[f.jsx(Y5,{className:"search-icon",size:20}),f.jsx("input",{type:"text",className:"search-input",placeholder:"Search Siemens System (e.g. SINAMICS)...",value:n,onChange:o=>i(o.target.value)})]})]}),f.jsx("div",{className:"tool-interface",children:f.jsx(za,{mode:"popLayout",children:s.length>0?f.jsx("div",{className:"results-list",children:s.map((o,u)=>f.jsxs(Te.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},className:"match-card",children:[f.jsxs("div",{className:"match-row",children:[f.jsxs("div",{className:"match-node",children:[f.jsx("span",{className:"label",children:"System"}),f.jsx("span",{className:"value",children:o.siemens})]}),f.jsx("div",{className:"match-link",children:f.jsx(O5,{size:16})}),f.jsxs("div",{className:"match-node right",children:[f.jsx("span",{className:"label",children:"Cable Match"}),f.jsx("span",{className:"value accent",children:o.cable})]})]}),f.jsxs("div",{className:"match-footer",children:[f.jsx("span",{className:"verified-badge",children:"✓ Verified"}),f.jsx("span",{className:"group-name",children:o.group})]})]},u))}):f.jsxs(Te.div,{initial:{opacity:0},animate:{opacity:1},className:"no-results",children:[f.jsx("div",{className:"empty-state-icon",children:f.jsx(R5,{size:32})}),f.jsx("h3",{children:"No direct match found."}),f.jsx("p",{children:"Our technical team can engineer a custom solution for your specific configuration."}),f.jsxs("button",{className:"btn-solid-small",children:["Contact Engineering ",f.jsx(xv,{size:14})]})]})})})]}),f.jsx("style",{jsx:!0,children:`
        .comp-tool-corporate {
          background: #001f35; /* Darker Navy */
          color: white;
          padding: 100px 0;
        }

        .tool-grid {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 80px;
           align-items: start;
        }

        .overline-light {
            color: var(--color-accent);
            font-weight: 700;
            letter-spacing: 2px;
            font-size: 13px;
            display: block;
            margin-bottom: 24px;
            font-family: 'Outfit', sans-serif;
            text-transform: uppercase;
        }

        .title-light {
            font-family: 'Outfit', sans-serif;
            font-size: 48px;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: 24px;
            color: white;
        }
        
        .text-grad {
            color: var(--color-accent);
        }

        .tool-desc {
            font-size: 18px;
            color: rgba(255,255,255,0.7);
            line-height: 1.6;
            margin-bottom: 40px;
            max-width: 500px;
        }

        .search-container {
            position: relative;
            max-width: 450px;
        }

        .search-icon {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--color-accent);
        }

        .search-input {
            width: 100%;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 4px; /* Corporate square look */
            padding: 18px 18px 18px 50px;
            color: white;
            font-size: 16px;
            font-family: 'Outfit', sans-serif;
            outline: none;
            transition: all 0.2s;
        }

        .search-input:focus {
            background: rgba(255,255,255,0.1);
            border-color: var(--color-accent);
        }

        .tool-interface {
            background: #001524;
            border-radius: 4px;
            border: 1px solid rgba(255,255,255,0.05);
            padding: 40px;
            min-height: 400px;
        }

        .results-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .match-card {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.05);
            border-radius: 4px;
            padding: 24px;
        }
        
        .match-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .match-node {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        
        .match-node.right {
            text-align: right;
        }

        .label {
            font-size: 11px;
            text-transform: uppercase;
            color: rgba(255,255,255,0.4);
            font-weight: 600;
        }
        
        .value {
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
            font-size: 16px;
            color: white;
        }
        
        .value.accent {
            color: var(--color-accent);
        }
        
        .match-link {
            color: rgba(255,255,255,0.2);
        }
        
        .match-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 16px;
            border-top: 1px solid rgba(255,255,255,0.05);
            font-size: 13px;
        }
        
        .verified-badge {
            color: #4ade80; /* Green */
            font-weight: 600;
        }
        
        .group-name {
            color: rgba(255,255,255,0.5);
        }

        .no-results {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: 100%;
            padding-top: 60px;
        }
        
        .empty-state-icon {
            margin-bottom: 20px;
            color: rgba(255,255,255,0.2);
        }
        
        .no-results h3 {
            font-family: 'Outfit', sans-serif;
            font-size: 20px;
            margin-bottom: 12px;
        }
        
        .no-results p {
            color: rgba(255,255,255,0.6);
            margin-bottom: 24px;
            font-size: 15px;
        }
        
        .btn-solid-small {
            background: var(--color-accent);
            color: white;
            border: none;
            padding: 10px 20px;
            font-weight: 600;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            font-family: 'Outfit', sans-serif;
        }

        @media (max-width: 1024px) {
           .tool-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `})]})},mN=()=>{const{t:n}=lt(),i=[{name:"Siemens",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png"},{name:"Helukabel",logo:"src/assets/logo1.png"},{name:"SMA",logo:"src/assets/logo2.gif"},{name:"Aiko Solar",logo:"src/assets/logo3.png"},{name:"Ammonit",logo:"src/assets/logo4.webp"},{name:"Firnasshuman",logo:"src/assets/logo5.webp"}];return f.jsxs("section",{className:"partners-section",children:[f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"partners-header",children:[f.jsx("span",{className:"overline",children:n("partners.overline")}),f.jsx("h3",{children:n("partners.title")})]}),f.jsx("div",{className:"partners-grid",children:i.map((s,o)=>f.jsx(Te.div,{className:"partner-logo-box",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},transition:{delay:o*.1,duration:.5},viewport:{once:!0},children:f.jsx("img",{src:s.logo,alt:s.name,className:"p-logo"})},o))})]}),f.jsx("style",{jsx:!0,children:`
                .partners-section {
                    padding: 80px 0;
                    background: white;
                    border-top: 1px solid #f1f5f9;
                }

                .partners-header {
                    text-align: center;
                    margin-bottom: 50px;
                }

                .overline {
                    color: var(--color-accent);
                    font-weight: 700;
                    letter-spacing: 2px;
                    font-size: 12px;
                    display: block;
                    margin-bottom: 12px;
                }

                .partners-header h3 {
                    font-size: 28px;
                    color: #1e293b;
                    font-weight: 700;
                    font-family: 'Outfit', sans-serif;
                }

                .partners-grid {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 60px;
                }

                .partner-logo-box {
                    width: 160px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    filter: grayscale(100%);
                    opacity: 0.6;
                    transition: all 0.3s ease;
                }

                .partner-logo-box:hover {
                    filter: grayscale(0%);
                    opacity: 1;
                    transform: scale(1.05);
                }
                
                .p-logo {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }

                @media (max-width: 768px) {
                    .partners-grid { gap: 40px; }
                    .partner-logo-box { width: 120px; }
                }
            `})]})},pN=()=>{const{t:n}=lt();return f.jsxs("div",{className:"home-page",children:[f.jsx(oN,{}),f.jsx("div",{className:"accueil-divider"}),f.jsx("section",{className:"accueil-section",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"accueil-content-centered",children:[f.jsx("h2",{className:"accueil-title-full",children:"Bienvenue chez Planet Energy"}),f.jsx("div",{className:"accueil-divider-full"})]})})}),f.jsx("div",{className:"accueil-divider"}),f.jsx("section",{className:"corporate-intro",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"intro-grid",children:[f.jsxs("div",{className:"intro-text-column",children:[f.jsx("span",{className:"overline",children:n("home.intro.overline")}),f.jsx("h2",{className:"section-title-corporate",children:n("home.intro.title")}),f.jsx("p",{className:"intro-description",children:n("home.intro.description")}),f.jsxs("div",{className:"corporate-stats-row",children:[f.jsxs("div",{className:"stat-item",children:[f.jsx("span",{className:"stat-number",children:"10+"}),f.jsx("span",{className:"stat-label",children:n("home.intro.stats.years")})]}),f.jsxs("div",{className:"stat-item",children:[f.jsx("span",{className:"stat-number",children:"3"}),f.jsx("span",{className:"stat-label",children:n("home.intro.stats.countries")})]}),f.jsxs("div",{className:"stat-item",children:[f.jsx("span",{className:"stat-number",children:"24/7"}),f.jsx("span",{className:"stat-label",children:n("home.intro.stats.support")})]})]})]}),f.jsx("div",{className:"intro-image-block",children:f.jsxs("div",{className:"reach-map-container",children:[f.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png",alt:"Global Map",className:"map-graphic",style:{opacity:.1}}),f.jsxs("div",{className:"map-dots",children:[f.jsx("div",{className:"map-dot",style:{top:"30%",left:"48%"},title:"Germany"}),f.jsx("div",{className:"map-dot",style:{top:"55%",left:"48%"},title:"Benin"}),f.jsx("div",{className:"map-dot",style:{top:"58%",left:"52%"},title:"Ghana"}),f.jsx("div",{className:"map-dot",style:{top:"45%",left:"70%"},title:"India"})]})]})})]})})}),f.jsx("div",{className:"accueil-divider"}),f.jsx("style",{jsx:!0,children:`
                .accueil-section {
                    padding: 60px 0;
                    background: #fff;
                }
                
                .accueil-content-centered {
                    text-align: left;
                    width: 100%;
                }
                
                .accueil-title-full {
                    font-family: 'Outfit', sans-serif;
                    font-size: 36px;
                    color: var(--color-primary);
                    margin: 0;
                    padding-bottom: 20px;
                    width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                
                .accueil-divider-full {
                    height: 4px;
                    background: var(--color-accent);
                    width: 100%;
                    border-radius: 2px;
                }
                
                .accueil-divider {
                    height: 1px;
                    background: rgba(0,0,0,0.1);
                    width: 100%;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .intro-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                    padding: 80px 0;
                }
                
                .overline {
                    color: var(--color-accent);
                    font-weight: 700;
                    font-size: 13px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    display: block;
                    margin-bottom: 24px;
                    font-family: 'Outfit', sans-serif;
                }
                
                .section-title-corporate {
                    font-family: 'Outfit', sans-serif;
                    font-size: 48px;
                    line-height: 1.1;
                    color: var(--color-primary);
                    margin-bottom: 32px;
                    font-weight: 700;
                }
                
                .intro-description {
                    font-size: 18px;
                    line-height: 1.7;
                    color: var(--color-text-light);
                    margin-bottom: 48px;
                    white-space: pre-line;
                }
                
                .corporate-stats-row {
                    display: flex;
                    gap: 48px;
                    border-top: 1px solid rgba(0,0,0,0.1);
                    padding-top: 40px;
                }
                
                .stat-item {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                
                .stat-number {
                    font-family: 'Outfit', sans-serif;
                    font-size: 42px;
                    font-weight: 700;
                    color: var(--color-primary);
                    line-height: 1;
                }
                
                .stat-label {
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--color-text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                
                .intro-image-block {
                    position: relative;
                }
                
                .corp-img-main {
                    width: 100%;
                    border-radius: 4px;
                    position: relative;
                    z-index: 2;
                    background: #f8f9fa;
                    padding: 20px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                
                .corp-img-accent {
                    position: absolute;
                    top: -20px;
                    right: -20px;
                    width: 100%;
                    height: 100%;
                    border: 2px solid var(--color-accent);
                    z-index: 1;
                    border-radius: 4px;
                }
                
                /* Split Layout Styles */
                .split-layout {
                    display: flex;
                    align-items: center;
                    gap: 80px;
                    padding: 80px 0;
                }
                
                .split-layout.reverse {
                    flex-direction: row-reverse;
                }
                
                .split-image {
                    flex: 1;
                    position: relative;
                }
                
                .feature-img {
                    width: 100%;
                    height: 400px;
                    object-fit: cover;
                    border-radius: 4px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                
                .split-content {
                    flex: 1;
                }
                
                .split-description {
                    font-size: 18px;
                    line-height: 1.7;
                    color: var(--color-text);
                    white-space: pre-line;
                }

                @media (max-width: 1024px) {
                    .intro-grid, .split-layout {
                        grid-template-columns: 1fr;
                        flex-direction: column;
                        gap: 40px;
                    }
                    .split-layout.reverse {
                        flex-direction: column;
                    }
                    .feature-img {
                        height: 300px;
                    }
                    .accueil-title-full {
                        white-space: normal;
                    }
                }
            `}),f.jsx(fN,{}),f.jsx("div",{className:"accueil-divider"}),f.jsx("section",{className:"connection-section",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"split-layout",children:[f.jsx("div",{className:"split-image",children:f.jsx("img",{src:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",alt:"International Partnership",className:"feature-img"})}),f.jsxs("div",{className:"split-content",children:[f.jsx("span",{className:"overline",children:n("home.connection.overline")}),f.jsx("h2",{className:"section-title-corporate",children:n("home.connection.title")}),f.jsx("p",{className:"split-description",children:n("home.connection.description")})]})]})})}),f.jsx("div",{className:"accueil-divider"}),f.jsx("section",{className:"mission-section",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"split-layout",children:[f.jsxs("div",{className:"split-content",children:[f.jsx("span",{className:"overline",children:n("home.mission.overline")}),f.jsx("h2",{className:"section-title-corporate",children:n("home.mission.title")}),f.jsx("p",{className:"split-description",children:n("home.mission.description")})]}),f.jsx("div",{className:"split-image",children:f.jsx("img",{src:"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",alt:"Sustainable Mission",className:"feature-img"})})]})})}),f.jsx("div",{className:"accueil-divider"}),f.jsx(hN,{}),f.jsx("div",{className:"accueil-divider"}),f.jsx(mN,{})]})},nn={breakers:{acb:{series:"3WJ",ratedCurrent:"800A - 4000A",breakingCapacity:"55kA",standard:"IEC 60947-2",features:["LCD Display","Contact erosion indicator","Ready to close mechanism"]},mccb:{series:"3VJ",variants:[{type:"3VJ1",protection:"Thermal Magnetic",current:"16A - 125A"},{type:"3VJ2",protection:"Microprocessor",current:"160A - 630A"}],breakingCapacity:"10kA - 55kA"},mcb:{series:"5SL/5TJ",variants:["5SL6 (7.5kA)","5SL4 (10kA)","5TJ (Digital Industrial)"]}},loadBreak:{changeover:{series:"3KJ",current:"63A - 3150A",config:"4-pole"},superswitch:{series:"3KL8",current:"20A - 800A",protection:"SDF/SD"}},switching:{contactors:{series:["3MT7","3TS","3MH7"],applications:["Power Switching","Capacitor Duty","Motor Protection"]},overloadRelays:{series:"3MU7",group:"Class 10",types:["Contactor mounted","Independent"]}},control:{monitoring:{series:"7UG",parameters:["Voltage","Phase","Current","Earth Fault"]},timers:{series:"7PV",types:["Multifunction","Digital","Analog"]},signaling:{series:"3SB5",types:["LED Lamps","Pushbuttons","Emergency Stop"]}}},an=({data:n,title:i})=>f.jsxs(Te.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"tech-card-corporate",children:[f.jsx("div",{className:"card-header",children:f.jsx("h3",{className:"card-title",children:i})}),f.jsx("div",{className:"tech-specs-list",children:Object.entries(n).map(([s,o],u)=>s==="image"?null:f.jsxs("div",{className:"spec-row",children:[f.jsx("span",{className:"spec-label",children:s.replace(/([A-Z])/g," $1").toUpperCase()}),f.jsx("span",{className:"spec-value",children:Array.isArray(o)?o.join(" • "):typeof o=="object"?"Standard Config":o})]},u))}),f.jsx("div",{className:"card-footer",children:f.jsxs("button",{className:"btn-datasheet",children:[f.jsx(M5,{size:14})," View Datasheet"]})}),f.jsx("style",{jsx:!0,children:`
        .tech-card-corporate {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .tech-card-corporate:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transform: translateY(-5px);
          border-color: var(--color-accent);
        }

        .card-header {
           background: #f8fafc;
           padding: 20px 24px;
           border-bottom: 1px solid #e2e8f0;
        }

        .card-title {
           font-size: 18px;
           color: #1e293b;
           margin: 0;
           font-weight: 700;
           font-family: 'Outfit', sans-serif;
        }

        .tech-specs-list {
          padding: 24px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 14px;
          border-bottom: 1px dashed #e2e8f0;
          padding-bottom: 8px;
        }
        
        .spec-row:last-child {
            border-bottom: none;
        }

        .spec-label {
          color: #64748b;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          flex-shrink: 0;
        }

        .spec-value {
          color: #334155;
          text-align: right;
          font-weight: 600;
        }
        
        .card-footer {
            padding: 16px 24px;
            border-top: 1px solid #e2e8f0;
            background: #f8fafc;
        }
        
        .btn-datasheet {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--color-primary);
            font-size: 13px;
            font-weight: 600;
            background: none;
            border: none;
            cursor: pointer;
            transition: color 0.2s;
            font-family: 'Outfit', sans-serif;
        }
        
        .btn-datasheet:hover {
            color: var(--color-accent);
        }

        @media (max-width: 600px) {
          .spec-row { flex-direction: column; gap: 4px; align-items: flex-start; }
          .spec-value { text-align: left; }
        }
      `})]}),gN=()=>{const{t:n}=lt(),[i,s]=T.useState("protection"),o=[{id:"protection",label:n("products.tabs.protection"),icon:$5},{id:"switching",label:n("products.tabs.switching"),icon:P5},{id:"control",label:n("products.tabs.control"),icon:vv},{id:"loaddrive",label:n("products.tabs.loaddrive"),icon:N5}];return f.jsxs("div",{className:"product-page-corporate",children:[f.jsx("section",{className:"prod-header",children:f.jsxs("div",{className:"container",children:[f.jsx("span",{className:"overline",children:n("products.hero.overline")}),f.jsx("h1",{children:n("products.hero.title")}),f.jsx("p",{children:n("products.hero.subtitle")})]})}),f.jsx("div",{className:"tab-sticky-bar",children:f.jsx("div",{className:"container",children:f.jsx("div",{className:"tab-list",children:o.map(u=>f.jsxs("button",{onClick:()=>s(u.id),className:`tab-btn ${i===u.id?"active":""}`,children:[f.jsx(u.icon,{size:18,className:"tab-icon"}),u.label]},u.id))})})}),f.jsx("section",{className:"catalog-content section-padding",children:f.jsx("div",{className:"container",children:f.jsx(za,{mode:"wait",children:f.jsxs(Te.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},className:"catalog-grid",children:[i==="protection"&&f.jsxs(f.Fragment,{children:[f.jsx(an,{title:n("products.categories.acb"),data:nn.breakers.acb}),f.jsx(an,{title:n("products.categories.mccb"),data:nn.breakers.mccb}),f.jsx(an,{title:n("products.categories.mcb"),data:nn.breakers.mcb})]}),i==="switching"&&f.jsxs(f.Fragment,{children:[f.jsx(an,{title:n("products.categories.contactors"),data:nn.switching.contactors}),f.jsx(an,{title:n("products.categories.overloadRelays"),data:nn.switching.overloadRelays})]}),i==="control"&&f.jsxs(f.Fragment,{children:[f.jsx(an,{title:n("products.categories.monitoring"),data:nn.control.monitoring}),f.jsx(an,{title:n("products.categories.timers"),data:nn.control.timers}),f.jsx(an,{title:n("products.categories.signaling"),data:nn.control.signaling})]}),i==="loaddrive"&&f.jsxs(f.Fragment,{children:[f.jsx(an,{title:n("products.categories.changeover"),data:nn.loadBreak.changeover}),f.jsx(an,{title:n("products.categories.superswitch"),data:nn.loadBreak.superswitch})]})]},i)})})}),f.jsx("style",{jsx:!0,children:`
                .product-page-corporate {
                    background: #f8fafc;
                    min-height: 100vh;
                    font-family: 'Outfit', sans-serif;
                }

                .prod-header {
                    background-image: radial-gradient(circle at 15% 25%, rgba(255,255,255,0.02), transparent 12%), linear-gradient(135deg, #003a57 0%, #006a86 100%);
                    color: white;
                    padding: 140px 0 100px;
                    text-align: center;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                }

                .prod-header h1 {
                    font-size: 56px;
                    font-weight: 700;
                    margin: 12px 0;
                    text-shadow: 0 8px 20px rgba(0,0,0,0.42);
                }

                .prod-header p {
                    font-size: 18px;
                    color: rgba(255,255,255,0.9);
                    max-width: 680px;
                    margin: 0 auto;
                }
                
                .overline {
                    display: inline-block;
                    background: rgba(255,255,255,0.06);
                    color: var(--color-accent);
                    font-weight: 700;
                    letter-spacing: 1px;
                    font-size: 12px;
                    padding: 8px 12px;
                    border-radius: 999px;
                    text-transform: uppercase;
                }

                .tab-sticky-bar {
                    background: white;
                    border-bottom: 1px solid #e2e8f0;
                    position: sticky;
                    top: 80px; /* Adjust based on navbar height */
                    z-index: 10;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                }
                
                .tab-list {
                    display: flex;
                    justify-content: center;
                    gap: 40px;
                }
                
                .tab-btn {
                    background: none;
                    border: none;
                    padding: 24px 0;
                    font-size: 15px;
                    font-weight: 600;
                    color: #64748b;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    position: relative;
                    font-family: 'Outfit', sans-serif;
                    transition: color 0.2s;
                }
                
                .tab-btn:hover {
                    color: var(--color-primary);
                }
                
                .tab-btn.active {
                    color: var(--color-primary);
                }
                
                .tab-btn.active::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: var(--color-accent);
                    border-radius: 3px 3px 0 0;
                }

                .catalog-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    min-height: 400px; /* Prevent jump */
                }

                @media (max-width: 1024px) {
                    .catalog-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 768px) {
                    .catalog-grid { grid-template-columns: 1fr; }
                    .tab-list { overflow-x: auto; justify-content: flex-start; padding: 0 20px; gap: 30px; }
                    .tab-btn { white-space: nowrap; padding: 20px 0; }
                }
            `})]})},yN=()=>{const{t:n}=lt();return f.jsxs("div",{className:"corporate-page",children:[f.jsx("section",{className:"corporate-hero",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"hero-content-simple",children:[f.jsx("span",{className:"overline",children:n("about.hero.overline")}),f.jsx("h1",{children:n("about.hero.title")})]})})}),f.jsx("section",{className:"section-padding bg-white",children:f.jsxs("div",{className:"container corporate-grid",children:[f.jsxs("div",{className:"corp-text",children:[f.jsx("h2",{className:"section-title",children:n("about.main.title")}),f.jsx("div",{className:"divider-line"}),f.jsx("p",{className:"lead-text",children:n("about.main.description1")}),f.jsx("p",{className:"body-text",children:n("about.main.description2")}),f.jsxs("div",{className:"stats-row",children:[f.jsxs("div",{className:"stat",children:[f.jsx("span",{className:"val",children:"25+"}),f.jsx("span",{className:"lbl",children:n("about.main.stats.years")})]}),f.jsxs("div",{className:"stat",children:[f.jsx("span",{className:"val",children:"50+"}),f.jsx("span",{className:"lbl",children:n("about.main.stats.projects")})]})]})]}),f.jsxs("div",{className:"corp-image-block",children:[f.jsx("img",{src:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000",alt:"Engineering Team",className:"main-img"}),f.jsx("div",{className:"img-caption",children:f.jsx("span",{children:n("about.imageCaption")})})]})]})}),f.jsx("section",{className:"section-padding bg-light",children:f.jsxs("div",{className:"container",children:[f.jsx("div",{className:"team-header",children:f.jsx("h2",{children:n("about.leadership.title")})}),f.jsxs("div",{className:"team-list",children:[f.jsx("div",{className:"leader-card",children:f.jsxs("div",{className:"leader-bio",children:[f.jsx("h3",{children:n("about.leadership.founder.name")}),f.jsx("span",{className:"role",children:n("about.leadership.founder.role")}),f.jsx("p",{children:n("about.leadership.founder.bio")})]})}),f.jsx("div",{className:"exec-grid",children:[n("about.leadership.executives.technical"),n("about.leadership.executives.financial"),n("about.leadership.executives.legal")].map((i,s)=>f.jsxs("div",{className:"exec-slot",children:[f.jsx("div",{className:"slot-icon",children:f.jsx(S5,{size:20})}),f.jsx("h4",{children:i}),f.jsx("span",{children:n("about.leadership.executives.board")})]},s))})]})]})}),f.jsx("style",{jsx:!0,children:`
                .corporate-page {
                    background: white;
                    color: var(--color-text);
                    font-family: 'Outfit', sans-serif;
                }

                .corporate-hero {
                    /* richer gradient, subtle texture and larger spacing */
                    background-image: radial-gradient(circle at 10% 20%, rgba(255,255,255,0.02), transparent 15%), linear-gradient(135deg, #003a57 0%, #006a86 100%);
                    padding: 140px 0 100px;
                    color: white;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    overflow: hidden;
                }

                .hero-content-simple h1 {
                    font-size: 64px;
                    font-weight: 700;
                    line-height: 1.05;
                    margin-top: 12px;
                    text-shadow: 0 10px 30px rgba(0,0,0,0.45);
                }

                .overline {
                    display: inline-block;
                    background: rgba(255,255,255,0.06);
                    color: var(--color-accent);
                    font-weight: 700;
                    letter-spacing: 1px;
                    font-size: 12px;
                    padding: 8px 12px;
                    border-radius: 999px;
                    text-transform: uppercase;
                }
                
                .bg-white { background: #ffffff; }
                .bg-light { background: #f8fafc; }

                .corporate-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: start;
                }

                .section-title {
                    font-size: 42px;
                    color: var(--color-primary);
                    line-height: 1.2;
                    margin-bottom: 32px;
                    font-weight: 700;
                }

                .divider-line {
                    width: 60px;
                    height: 4px;
                    background: var(--color-accent);
                    margin-bottom: 32px;
                }
                
                .lead-text {
                    font-size: 20px;
                    color: #334155;
                    line-height: 1.6;
                    margin-bottom: 24px;
                    font-weight: 500;
                }
                
                .body-text {
                    font-size: 16px;
                    color: #64748b;
                    line-height: 1.7;
                    margin-bottom: 40px;
                }
                
                .stats-row {
                    display: flex;
                    gap: 60px;
                    border-top: 1px solid #e2e8f0;
                    padding-top: 32px;
                }
                
                .val {
                    display: block;
                    font-size: 48px;
                    font-weight: 700;
                    color: var(--color-primary);
                    line-height: 1;
                }
                
                .lbl {
                    font-size: 13px;
                    color: #64748b;
                    text-transform: uppercase;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }

                .corp-image-block {
                    position: relative;
                }
                
                .main-img {
                    width: 100%;
                    border-radius: 4px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                
                .img-caption {
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    background: white;
                    padding: 8px 16px;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: 700;
                    color: var(--color-primary);
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                }

                .team-header {
                    margin-bottom: 60px;
                }
                .team-header h2 {
                    font-size: 36px;
                    color: var(--color-primary);
                    font-weight: 700;
                }
                
                .leader-card {
                    background: white;
                    border: 1px solid #e2e8f0;
                    padding: 40px;
                    border-radius: 4px;
                    margin-bottom: 30px;
                    border-left: 4px solid var(--color-accent);
                }
                
                .leader-bio h3 {
                    font-size: 24px;
                    color: var(--color-primary);
                    margin-bottom: 4px;
                }
                
                .leader-bio .role {
                    color: var(--color-accent);
                    font-weight: 600;
                    text-transform: uppercase;
                    font-size: 13px;
                    display: block;
                    margin-bottom: 16px;
                }
                
                .leader-bio p {
                    color: #475569;
                    line-height: 1.6;
                    max-width: 800px;
                }

                .exec-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }
                
                .exec-slot {
                    background: white;
                    padding: 30px;
                    border: 1px dashed #cbd5e1;
                    border-radius: 4px;
                    text-align: center;
                }
                
                .slot-icon {
                    color: #94a3b8;
                    margin-bottom: 16px;
                }
                
                .exec-slot h4 {
                    font-size: 16px;
                    color: var(--color-primary);
                    margin-bottom: 4px;
                }
                
                .exec-slot span {
                    font-size: 12px;
                    color: #94a3b8;
                    text-transform: uppercase;
                }

                @media (max-width: 1024px) {
                    .corporate-grid { grid-template-columns: 1fr; gap: 40px; }
                    .exec-grid { grid-template-columns: 1fr; }
                    .hero-content-simple h1 { font-size: 48px; }
                }
            `})]})},vN=()=>{const{t:n}=lt();return f.jsxs("div",{className:"contact-page-corporate",children:[f.jsx("section",{className:"contact-hero",children:f.jsxs("div",{className:"container",children:[f.jsx("span",{className:"overline",children:n("contact.hero.overline")}),f.jsx("h1",{children:n("contact.hero.title")}),f.jsx("p",{children:n("contact.hero.subtitle")})]})}),f.jsx("section",{className:"contact-content section-padding",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"contact-grid",children:[f.jsxs("div",{className:"info-column",children:[f.jsx("h2",{className:"info-title",children:n("contact.info.title")}),f.jsx("p",{className:"info-lead",children:n("contact.info.description")}),f.jsxs("div",{className:"office-list",children:[f.jsxs("div",{className:"office-item",children:[f.jsx("div",{className:"icon-box",children:f.jsx(zl,{size:20})}),f.jsxs("div",{className:"details",children:[f.jsx("h4",{children:n("contact.offices.yamuna.name")}),f.jsx("p",{children:n("contact.offices.yamuna.description")})]})]}),f.jsxs("div",{className:"office-item",children:[f.jsx("div",{className:"icon-box",children:f.jsx(zl,{size:20})}),f.jsxs("div",{className:"details",children:[f.jsx("h4",{children:n("contact.offices.chandigarh.name")}),f.jsx("p",{children:n("contact.offices.chandigarh.description")})]})]}),f.jsxs("div",{className:"office-item",children:[f.jsx("div",{className:"icon-box",children:f.jsx(zl,{size:20})}),f.jsxs("div",{className:"details",children:[f.jsx("h4",{children:n("contact.offices.zirakpur.name")}),f.jsx("p",{children:n("contact.offices.zirakpur.description")})]})]})]}),f.jsxs("div",{className:"direct-contact",children:[f.jsx("h3",{className:"sub-header",children:n("contact.info.directContact")}),f.jsxs("div",{className:"contact-methods",children:[f.jsxs("a",{href:"tel:+919315555515",className:"c-link",children:[f.jsx(Sv,{size:18})," ",f.jsx("span",{children:"+91 93155 55515"})]}),f.jsxs("a",{href:"mailto:info@sinoplus.in",className:"c-link",children:[f.jsx(bv,{size:18})," ",f.jsx("span",{children:"info@sinoplus.in"})]})]})]})]}),f.jsx("div",{className:"form-column",children:f.jsxs("div",{className:"form-card",children:[f.jsx("h3",{children:n("contact.form.title")}),f.jsxs("form",{className:"corporate-form",children:[f.jsxs("div",{className:"form-row",children:[f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:n("contact.form.labels.fullName")}),f.jsx("input",{type:"text",placeholder:n("contact.form.placeholders.fullName")})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:n("contact.form.labels.email")}),f.jsx("input",{type:"email",placeholder:n("contact.form.placeholders.email")})]})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:n("contact.form.labels.company")}),f.jsx("input",{type:"text",placeholder:n("contact.form.placeholders.company")})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:n("contact.form.labels.department")}),f.jsxs("select",{children:[f.jsx("option",{children:n("contact.form.options.sales")}),f.jsx("option",{children:n("contact.form.options.technical")}),f.jsx("option",{children:n("contact.form.options.partnership")}),f.jsx("option",{children:n("contact.form.options.other")})]})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:n("contact.form.labels.message")}),f.jsx("textarea",{rows:"4",placeholder:n("contact.form.placeholders.message")})]}),f.jsxs("button",{type:"submit",className:"submit-btn",children:[n("contact.form.submit")," ",f.jsx(X5,{size:16})]})]})]})})]})})}),f.jsx("style",{jsx:!0,children:`
                .contact-page-corporate {
                    background: white;
                    color: var(--color-text);
                    font-family: 'Outfit', sans-serif;
                    min-height: 100vh;
                }

                .contact-hero {
                    background-image: radial-gradient(circle at 20% 10%, rgba(255,255,255,0.02), transparent 12%), linear-gradient(135deg, #003a57 0%, #006a86 100%);
                    color: white;
                    padding: 140px 0 100px;
                    text-align: center;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                }

                .contact-hero h1 {
                    font-size: 56px;
                    font-weight: 700;
                    margin: 12px 0;
                    text-shadow: 0 8px 20px rgba(0,0,0,0.42);
                }

                .contact-hero p {
                    font-size: 18px;
                    color: rgba(255,255,255,0.9);
                    max-width: 680px;
                    margin: 0 auto;
                }
                
                .overline {
                    display: inline-block;
                    background: rgba(255,255,255,0.06);
                    color: var(--color-accent);
                    font-weight: 700;
                    letter-spacing: 1px;
                    font-size: 12px;
                    padding: 8px 12px;
                    border-radius: 999px;
                    text-transform: uppercase;
                }
                
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 80px;
                    align-items: start;
                }
                
                .info-title {
                    font-size: 36px;
                    font-weight: 700;
                    color: var(--color-primary);
                    margin-bottom: 24px;
                    line-height: 1.2;
                }
                
                .info-lead {
                    font-size: 18px;
                    color: #64748b;
                    margin-bottom: 48px;
                    line-height: 1.6;
                }
                
                .office-list {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    margin-bottom: 60px;
                }
                
                .office-item {
                    display: flex;
                    gap: 20px;
                }
                
                .icon-box {
                    width: 40px;
                    height: 40px;
                    background: #f1f5f9;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-primary);
                }
                
                .details h4 {
                    font-size: 18px;
                    color: #1e293b;
                    margin-bottom: 4px;
                    font-weight: 700;
                }
                
                .details p {
                    color: #64748b;
                    font-size: 15px;
                }
                
                .sub-header {
                    font-size: 14px;
                    text-transform: uppercase;
                    color: #94a3b8;
                    letter-spacing: 1px;
                    margin-bottom: 24px;
                }
                
                .contact-methods {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                
                .c-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: var(--color-primary);
                    font-weight: 600;
                    font-size: 18px;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                
                .c-link:hover {
                    color: var(--color-accent);
                }

                .form-card {
                    background: white;
                    border: 1px solid #e2e8f0;
                    padding: 48px;
                    border-radius: 4px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                }
                
                .form-card h3 {
                    font-size: 24px;
                    color: var(--color-primary);
                    margin-bottom: 32px;
                }
                
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }
                
                .form-group {
                    margin-bottom: 24px;
                }
                
                .form-group label {
                    display: block;
                    font-size: 13px;
                    font-weight: 700;
                    color: #475569;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                }
                
                .form-group input, .form-group select, .form-group textarea {
                    width: 100%;
                    padding: 14px 16px;
                    border: 1px solid #cbd5e1;
                    border-radius: 4px;
                    font-size: 16px;
                    color: #1e293b;
                    outline: none;
                    font-family: inherit;
                    transition: border-color 0.2s;
                }
                
                .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
                    border-color: var(--color-accent);
                    box-shadow: 0 0 0 3px rgba(var(--color-accent-rgb), 0.1);
                }
                
                .submit-btn {
                    background: var(--color-primary);
                    color: white;
                    border: none;
                    padding: 16px 32px;
                    font-size: 16px;
                    font-weight: 700;
                    border-radius: 4px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    transition: background 0.2s;
                    font-family: 'Outfit', sans-serif;
                }
                
                .submit-btn:hover {
                    background: var(--color-accent);
                }

                @media (max-width: 1024px) {
                    .contact-grid { grid-template-columns: 1fr; gap: 60px; }
                    .form-card { padding: 32px; }
                }
                
                @media (max-width: 600px) {
                   .form-row { grid-template-columns: 1fr; }
                }
            `})]})},xN=()=>{const{t:n}=lt();return f.jsxs("div",{className:"operations-page",children:[f.jsx("section",{className:"ops-hero",children:f.jsxs("div",{className:"container",children:[f.jsx("span",{className:"overline",children:n("operations.hero.overline")}),f.jsx("h1",{children:n("operations.hero.title")}),f.jsx("p",{children:n("operations.hero.subtitle")})]})}),f.jsx("section",{className:"section-padding bg-white",children:f.jsxs("div",{className:"container ops-grid",children:[f.jsxs("div",{className:"ops-content",children:[f.jsxs("h2",{className:"section-title",children:[n("operations.main.title")," ",f.jsx("span",{className:"text-accent",children:n("operations.main.titleAccent")})]}),f.jsx("p",{className:"lead-text",children:n("operations.main.description1")}),f.jsx("p",{className:"body-text",children:n("operations.main.description2")}),f.jsxs("div",{className:"service-list",children:[f.jsxs("div",{className:"s-item",children:[f.jsx(Z5,{size:24,className:"s-icon"}),f.jsxs("div",{className:"s-text",children:[f.jsx("h4",{children:n("operations.main.services.security.title")}),f.jsx("p",{children:n("operations.main.services.security.description")})]})]}),f.jsxs("div",{className:"s-item",children:[f.jsx(vv,{size:24,className:"s-icon"}),f.jsxs("div",{className:"s-text",children:[f.jsx("h4",{children:n("operations.main.services.performance.title")}),f.jsx("p",{children:n("operations.main.services.performance.description")})]})]})]})]}),f.jsx("div",{className:"ops-visual",children:f.jsxs("div",{className:"visual-card",children:[f.jsx("img",{src:"https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800",alt:"Maintenance Engineer",className:"ops-img"}),f.jsxs("div",{className:"scada-overlay",children:[f.jsxs("div",{className:"scada-header",children:[f.jsx("span",{className:"dot"}),f.jsx("span",{children:n("operations.scada.header")})]}),f.jsxs("div",{className:"scada-grid",children:[f.jsxs("div",{className:"m-metric",children:[f.jsx("span",{className:"lbl",children:n("operations.scada.metrics.voltage")}),f.jsx("span",{className:"val",children:"230.4 V"})]}),f.jsxs("div",{className:"m-metric",children:[f.jsx("span",{className:"lbl",children:n("operations.scada.metrics.load")}),f.jsx("span",{className:"val",children:"84%"})]}),f.jsxs("div",{className:"m-metric",children:[f.jsx("span",{className:"lbl",children:n("operations.scada.metrics.status")}),f.jsx("span",{className:"val ok",children:n("operations.scada.metrics.optimal")})]})]})]})]})})]})}),f.jsx("style",{jsx:!0,children:`
                .operations-page {
                    background: white;
                    color: var(--color-text);
                    font-family: 'Outfit', sans-serif;
                    min-height: 100vh;
                }

                .ops-hero {
                    background-image: radial-gradient(circle at 90% 10%, rgba(255,255,255,0.02), transparent 10%), linear-gradient(135deg, #003a57 0%, #006a86 100%);
                    color: white;
                    padding: 140px 0 100px;
                    text-align: center;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                }

                .ops-hero h1 {
                    font-size: 60px;
                    font-weight: 700;
                    margin: 12px 0;
                    line-height: 1.05;
                    text-shadow: 0 8px 24px rgba(0,0,0,0.4);
                }

                .ops-hero p {
                    font-size: 18px;
                    color: rgba(255,255,255,0.9);
                    max-width: 680px;
                    margin: 0 auto;
                }
                
                .overline {
                    display: inline-block;
                    background: rgba(255,255,255,0.06);
                    color: var(--color-accent);
                    font-weight: 700;
                    letter-spacing: 1px;
                    font-size: 12px;
                    padding: 8px 12px;
                    border-radius: 999px;
                    text-transform: uppercase;
                }

                .ops-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                }

                .section-title {
                    font-size: 42px;
                    color: var(--color-primary);
                    font-weight: 700;
                    margin-bottom: 32px;
                    line-height: 1.2;
                }
                
                .text-accent { color: var(--color-accent); }

                .lead-text {
                    font-size: 20px;
                    color: #1e293b;
                    margin-bottom: 24px;
                    line-height: 1.6;
                    font-weight: 500;
                }
                
                .body-text {
                    font-size: 16px;
                    color: #64748b;
                    margin-bottom: 40px;
                    line-height: 1.7;
                }

                .service-list {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }
                
                .s-item {
                    display: flex;
                    gap: 20px;
                    background: #f8fafc;
                    padding: 24px;
                    border-radius: 8px;
                    border: 1px solid #e2e8f0;
                }
                
                .s-icon {
                    color: var(--color-accent);
                    margin-top: 4px;
                }
                
                .s-text h4 {
                    font-size: 18px;
                    color: var(--color-primary);
                    margin-bottom: 4px;
                    font-weight: 700;
                }
                
                .s-text p {
                    font-size: 14px;
                    color: #64748b;
                    margin: 0;
                }

                .visual-card {
                    position: relative;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                
                .ops-img {
                    width: 100%;
                    display: block;
                }
                
                .scada-overlay {
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    left: 20px;
                    background: rgba(15, 23, 42, 0.9);
                    backdrop-filter: blur(10px);
                    padding: 20px;
                    border-radius: 4px;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                
                .scada-header {
                     display: flex;
                     align-items: center;
                     gap: 8px;
                     color: #4ade80;
                     font-size: 11px;
                     font-weight: 700;
                     letter-spacing: 1px;
                     margin-bottom: 16px;
                     border-bottom: 1px solid rgba(255,255,255,0.1);
                     padding-bottom: 8px;
                }
                
                .dot { width: 6px; height: 6px; background: #4ade80; border-radius: 50%; box-shadow: 0 0 8px #4ade80; }
                
                .scada-grid {
                    display: flex;
                    justify-content: space-between;
                }
                
                .m-metric {
                    display: flex;
                    flex-direction: column;
                }
                
                .lbl { font-size: 10px; color: #94a3b8; text-transform: uppercase; margin-bottom: 2px; }
                .val { font-size: 16px; color: white; font-weight: 700; font-family: monospace; }
                .val.ok { color: #4ade80; }

                @media (max-width: 1024px) {
                    .ops-grid { grid-template-columns: 1fr; gap: 50px; }
                }
            `})]})},bN=()=>{const{t:n}=lt(),i=n("legal.impressum.sections"),s=["generalTerms","legalMentions","serviceAccess","intellectualProperty","personalData","contentResponsibility","linkResponsibility","copyright"];return f.jsxs("div",{className:"legal-page",children:[f.jsx("section",{className:"legal-hero",children:f.jsx("div",{className:"container",children:f.jsxs(Te.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"hero-content",children:[f.jsx("h1",{children:n("legal.impressum.title")}),f.jsx("p",{children:"Last Updated: January 2026"})]})})}),f.jsx("section",{className:"legal-content section-padding",children:f.jsx("div",{className:"container",children:f.jsx("div",{className:"legal-wrapper",children:s.map((o,u)=>{const d=i[o];return f.jsxs(Te.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:u*.05},viewport:{once:!0,margin:"-100px"},className:"legal-section",children:[f.jsx("h2",{className:"section-heading",children:d.heading}),d.subheading&&f.jsx("h3",{className:"section-subheading",children:d.subheading}),f.jsx("div",{className:"section-content",children:d.content.split(`
`).map((h,p)=>f.jsx("p",{children:h},p))})]},o)})})})}),f.jsx("style",{jsx:!0,children:`
                .legal-page {
                    background: #fff;
                }

                .legal-hero {
                    background: linear-gradient(135deg, #001f35 0%, #0f3355 100%);
                    padding: 100px 20px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .legal-hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.1), transparent);
                    pointer-events: none;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                }

                .legal-hero h1 {
                    font-size: 3rem;
                    font-weight: 700;
                    color: #fff;
                    margin: 0;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                    letter-spacing: -0.5px;
                }

                .legal-hero p {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.7);
                    margin-top: 16px;
                }

                .legal-content {
                    padding: 100px 20px;
                }

                .container {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .legal-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 80px;
                }

                .legal-section {
                    line-height: 1.9;
                }

                .section-heading {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #001f35;
                    margin: 0 0 16px 0;
                    padding-bottom: 16px;
                    border-bottom: 3px solid #0f9b8a;
                }

                .section-subheading {
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: #0f3355;
                    margin: 20px 0 16px 0;
                }

                .section-content {
                    margin-top: 20px;
                }

                .section-content p {
                    font-size: 1rem;
                    color: #333;
                    margin: 16px 0;
                    text-align: justify;
                    line-height: 1.9;
                }

                .section-content p:first-child {
                    margin-top: 0;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .legal-hero {
                        padding: 70px 20px;
                    }

                    .legal-hero h1 {
                        font-size: 2.2rem;
                    }

                    .legal-hero p {
                        font-size: 0.95rem;
                        margin-top: 14px;
                    }

                    .legal-content {
                        padding: 70px 20px;
                    }

                    .legal-wrapper {
                        gap: 60px;
                    }

                    .section-heading {
                        font-size: 1.6rem;
                    }

                    .section-subheading {
                        font-size: 1.2rem;
                    }

                    .section-content p {
                        font-size: 0.95rem;
                        text-align: left;
                        margin: 14px 0;
                    }

                    .container {
                        padding: 0 15px;
                    }
                }

                @media (max-width: 480px) {
                    .legal-hero {
                        padding: 50px 15px;
                    }

                    .legal-hero h1 {
                        font-size: 1.6rem;
                    }

                    .legal-hero p {
                        font-size: 0.9rem;
                        margin-top: 12px;
                    }

                    .legal-content {
                        padding: 50px 15px;
                    }

                    .legal-wrapper {
                        gap: 45px;
                    }

                    .section-heading {
                        font-size: 1.3rem;
                        margin-bottom: 14px;
                        padding-bottom: 12px;
                    }

                    .section-subheading {
                        font-size: 1.1rem;
                        margin: 16px 0 12px 0;
                    }

                    .section-content p {
                        font-size: 0.9rem;
                        margin: 12px 0;
                    }

                    .container {
                        padding: 0 10px;
                    }
                }
            `})]})},Ev="/assets/Cableeee-BI5lyJmU.jpg",SN=()=>{const{t:n}=lt(),i=Iu();return f.jsx(Te.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"cable-news-page",children:f.jsxs("div",{className:"article-container",children:[f.jsx("h1",{className:"article-title",children:n("cableArticle.title")}),f.jsx("p",{className:"article-intro",children:n("cableArticle.intro")}),f.jsx("div",{className:"article-hero",children:f.jsx("img",{src:Ev,alt:"Halogen-free cables"})}),f.jsxs("div",{className:"article-content",children:[f.jsxs("section",{className:"article-section",children:[f.jsx("h2",{children:n("cableArticle.section1.title")}),f.jsx("p",{children:n("cableArticle.section1.content")}),f.jsx("div",{className:"problem-box",children:f.jsx("p",{children:n("cableArticle.section1.problem")})})]}),f.jsxs("section",{className:"article-section",children:[f.jsx("h2",{children:n("cableArticle.section2.title")}),f.jsx("p",{children:n("cableArticle.section2.content")}),f.jsx("div",{className:"examples-grid",children:n("cableArticle.section2.examples").map((s,o)=>f.jsxs("div",{className:"example-card",children:[f.jsx("h3",{children:s.category}),f.jsx("p",{children:s.text})]},o))})]}),f.jsxs("section",{className:"article-section",children:[f.jsx("h2",{children:n("cableArticle.designations.title")}),f.jsx("p",{children:n("cableArticle.designations.intro")}),f.jsx("ul",{className:"designations-list",children:n("cableArticle.designations.list").map((s,o)=>f.jsx("li",{children:s},o))}),f.jsx("p",{style:{marginTop:"20px",fontSize:"14px",fontStyle:"italic"},children:n("cableArticle.designations.footer")})]}),f.jsxs("section",{className:"article-section",children:[f.jsx("h2",{children:n("cableArticle.norms.title")}),f.jsx("ul",{className:"norms-list",children:n("cableArticle.norms.list").map((s,o)=>f.jsx("li",{children:s},o))})]}),f.jsxs("section",{className:"article-section",children:[f.jsx("h2",{children:n("cableArticle.conclusion.title")}),f.jsx("p",{children:n("cableArticle.conclusion.text")})]}),f.jsx("div",{className:"article-footer",children:f.jsxs("button",{className:"btn-back",onClick:()=>i(-1),children:["← ",n("cableArticle.back")]})})]})]})})},jN="/assets/cable-article-hero-CpnB5E9A.png",TN="/assets/IM1-wSi5xQxj.jpg",EN="/assets/IM2-DxeZbaSJ.jpg",NN="/assets/IM3-36Sn8f2z.jpg",AN="/assets/PIC1%20N-DYRL0zzb.jpg",wN="/assets/PIC2-Cp0X03CD.jpg",CN="/assets/PIC3-CP3F7DH4.jpg",MN="/assets/PIC4-Cj9Z3cxm.jpg",DN="/assets/PIC5-Cez_oDo_.jpg",RN="/assets/PIC6-Dn8lG2-x.jpg",zN="/assets/PIC7-DVZAbNgm.jpg",ON="/assets/PIC8-BDpEf-e1.jpg",LN="/assets/PIC9-BH4a-Jks.jpg",VN="/assets/PIC10-teAFpTJt.jpg",_N="/assets/PIC11-CMWTGhhu.jpg",BN="/assets/IM4-BS540DZU.jpg",UN="/assets/IM%20C1-DT1BSBqW.jpg",kN="/assets/IM%20C2-Dxmd5vtp.jpg",HN="/assets/IM%20C3-CDmJaTBx.jpg",qN=()=>{const{t:n}=lt(),[i,s]=T.useState(0),[o,u]=T.useState(!1),d=g0.useRef(null),h=[{image:jN,title:"PLANET ENERGY SYSTEMS",subtitle:n("hero.subtitle"),hasButton:!1},{image:Ev,title:n("productShowcase.sets.1.items.0.name"),subtitle:n("productShowcase.sets.1.items.0.detail"),hasButton:!0,btnText:n("productShowcase.viewProduct"),link:"/newsroom/halogen-free-cables"},{image:TN,title:n("productShowcase.sets.1.category"),subtitle:n("productShowcase.sets.1.items.0.detail"),hasButton:!0,btnText:n("productShowcase.viewProduct"),link:"/products/cables"},{image:EN,title:n("nav.solar"),subtitle:n("productShowcase.sets.1.items.2.detail"),hasButton:!0,btnText:n("productShowcase.viewProduct"),link:"/products/cables"},{image:NN,title:n("about.hero.title"),subtitle:n("footer.desc"),hasButton:!0,btnText:n("productShowcase.viewProduct"),link:"/products/cables"}],p=[AN,wN,CN,MN,LN,VN,_N],g=[DN,RN,zN,ON],y=S=>{if(d.current){const{scrollLeft:N,clientWidth:O}=d.current,L=S==="left"?N-O:N+O;d.current.scrollTo({left:L,behavior:"smooth"})}};T.useEffect(()=>{if(o)return;const S=setInterval(()=>{s(N=>(N+1)%h.length)},6e3);return()=>clearInterval(S)},[h.length,o]);const v=()=>s(S=>(S+1)%h.length),x=()=>s(S=>(S-1+h.length)%h.length);return f.jsxs("div",{className:"cables-landing-container",children:[f.jsxs("div",{className:"cabling-carousel-hero full-height",children:[f.jsx(za,{mode:"wait",children:f.jsxs(Te.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1.2,ease:"easeInOut"},className:"carousel-slide",children:[f.jsx("img",{src:h[i].image,alt:`Slide ${i+1}`}),f.jsx("div",{className:`carousel-overlay dark ${i===0?"darker-overlay":""}`}),f.jsx("div",{className:"carousel-content-wrapper left",children:f.jsxs("div",{className:"carousel-text-overlay",children:[f.jsxs(Te.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.4,duration:.8},children:[h[i].title,h[i].subtitle&&f.jsxs(f.Fragment,{children:[f.jsx("br",{})," ",f.jsx("span",{className:"text-highlight",children:h[i].subtitle})]})]}),h[i].hasButton&&f.jsx(Te.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7,duration:.6},className:"carousel-cta-container",children:f.jsxs(at,{to:h[i].link,className:"carousel-btn premium",children:[h[i].btnText," ",f.jsx(go,{size:20})]})})]})})]},i)}),f.jsx("button",{className:"carousel-control prev",onClick:x,children:f.jsx(m0,{size:44})}),f.jsx("button",{className:"carousel-control next",onClick:v,children:f.jsx(go,{size:44})}),f.jsx("div",{className:"carousel-indicators",children:h.map((S,N)=>f.jsx("div",{className:`indicator ${N===i?"active":""}`,onClick:()=>{s(N),u(!0)},children:f.jsx("span",{className:"dot"})},N))})]}),f.jsx("section",{className:"brand-intro-section",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"brand-intro-grid",children:[f.jsx(Te.div,{className:"brand-description",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:f.jsx("p",{className:"brand-story-text",children:n("cablingLanding.brandStory")})}),f.jsxs("div",{className:"domains-offering",children:[f.jsx(Te.h3,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},children:n("cablingLanding.intro")}),f.jsx("ul",{className:"domains-grid-list",children:(Array.isArray(n("cablingLanding.domains"))?n("cablingLanding.domains"):[]).map((S,N)=>f.jsxs(Te.li,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},transition:{delay:N*.05},viewport:{once:!0},className:"domain-bullet",children:[f.jsx(go,{size:14,className:"bullet-icon"}),f.jsx("span",{children:S})]},N))})]})]})})}),f.jsx("section",{className:"movement-solutions-section",children:f.jsxs("div",{className:"container",children:[f.jsx("div",{style:{textAlign:"center",marginBottom:"40px"},children:f.jsx("h2",{className:"section-title",style:{color:"#1B6B3D",fontSize:"2.5rem",fontWeight:"700"},children:n("cablingLanding.sections.movement.title")})}),f.jsxs("div",{className:"movement-cards-grid",children:[f.jsxs(Te.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},className:"movement-card featured",children:[f.jsx("div",{className:"card-bg-placeholder",children:f.jsx("img",{src:BN,alt:"Movement Featured",className:"section-img"})}),f.jsxs("div",{className:"card-content",children:[f.jsx("h2",{children:n("cablingLanding.sections.movement.featured.title")}),f.jsx("p",{children:n("cablingLanding.sections.movement.featured.subtitle")}),f.jsx("button",{className:"terracotta-btn",children:n("cablingLanding.sections.movement.featured.btn")})]})]}),(Array.isArray(n("cablingLanding.sections.movement.cards"))?n("cablingLanding.sections.movement.cards"):[]).map((S,N)=>f.jsxs(Te.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{delay:.1*(N+1)},className:"movement-card sub",children:[f.jsxs("div",{className:"card-bg-placeholder",children:[N===0&&f.jsx("img",{src:UN,alt:S.title,className:"section-img"}),N===1&&f.jsx("img",{src:kN,alt:S.title,className:"section-img"}),N===2&&f.jsx("img",{src:HN,alt:S.title,className:"section-img"})]}),f.jsxs("div",{className:"card-content",children:[f.jsx("h3",{children:S.title}),f.jsx("p",{children:S.subtitle}),f.jsx("button",{className:"terracotta-btn",children:S.btn})]})]},N))]})]})}),f.jsx("section",{className:"catalog-sections",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"catalog-row horizontal-scroll-row",children:[f.jsxs("div",{className:"section-header",children:[f.jsx("h2",{children:n("cablingLanding.sections.catalog.consulted.title")}),f.jsx("p",{children:n("cablingLanding.sections.catalog.consulted.subtitle")})]}),f.jsxs("div",{className:"scroll-controls",children:[f.jsx("button",{className:"scroll-btn left",onClick:()=>y("left"),children:f.jsx(m0,{size:24})}),f.jsx("button",{className:"scroll-btn right",onClick:()=>y("right"),children:f.jsx(go,{size:24})})]}),f.jsx("div",{className:"product-scroll-wrapper",ref:d,children:f.jsx("div",{className:"product-grid horizontal",children:(Array.isArray(n("cablingLanding.sections.catalog.consulted.products"))?n("cablingLanding.sections.catalog.consulted.products"):[]).map((S,N)=>f.jsxs(Te.div,{whileHover:{y:-5},className:"product-card",children:[f.jsx("div",{className:"product-img-box",children:f.jsx("img",{src:p[N],alt:S.name,className:"product-img"})}),f.jsxs("div",{className:"product-info",children:[f.jsx("h4",{className:"product-name",children:S.name}),f.jsxs("p",{className:"art-no",children:["Numéro d’article ",S.artNo]}),f.jsxs("div",{className:"product-badges",children:[f.jsx("span",{className:"badge-placeholder"}),f.jsx("span",{className:"badge-placeholder"}),f.jsx("span",{className:"badge-placeholder"})]})]}),f.jsx("button",{className:"terracotta-btn-outline",children:n("cablingLanding.sections.catalog.consulted.btn")})]},N))})})]}),f.jsxs("div",{className:"catalog-row",children:[f.jsxs("div",{className:"section-header",children:[f.jsx("h2",{children:n("cablingLanding.sections.catalog.halogenFree.title")}),f.jsx("p",{children:n("cablingLanding.sections.catalog.halogenFree.subtitle")})]}),f.jsx("div",{className:"product-grid",children:(Array.isArray(n("cablingLanding.sections.catalog.halogenFree.products"))?n("cablingLanding.sections.catalog.halogenFree.products"):[]).map((S,N)=>f.jsxs(Te.div,{whileHover:{y:-5},className:"product-card",children:[f.jsx("div",{className:"product-img-box",children:f.jsx("img",{src:g[N],alt:S.name,className:"product-img"})}),f.jsxs("div",{className:"product-info",children:[f.jsx("h4",{className:"product-name",children:S.name}),f.jsx("p",{className:"product-desc",children:S.desc})]}),f.jsx("button",{className:"terracotta-btn-outline",children:n("cablingLanding.sections.catalog.halogenFree.btn")})]},N))})]})]})})]})},YN="/assets/B1.jpg-BRxoeR55.jpeg",GN="/assets/B2-CyERZq85.jpeg",XN="/assets/B3-BbhKXVlm.jpeg",KN="/assets/Bh-KPpviFDA.jpeg",ZN="/assets/Dijoncteur.jpg-lKtNkb5l.jpeg",QN="/assets/SIEMENS%20Disjoncteur.jpg-B-ztEhpZ.jpeg",PN="/assets/SIEMENS%20Disjoncteur%20bipolaire.jpg-2a3oRad8.jpeg",FN=()=>{const{t:n}=lt();return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"industrial-page",children:[f.jsxs("div",{className:"industrial-hero",children:[f.jsx("div",{className:"hero-overlay"}),f.jsx("div",{className:"container hero-content",children:f.jsx(Te.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8},className:"hero-text-block",children:f.jsxs("h1",{className:"hero-title-main",children:[f.jsx("span",{className:"company-name",children:n("industrial.hero.title")}),f.jsx("span",{className:"distributor-text",children:n("industrial.hero.subtitle")})]})})})]}),f.jsx("section",{className:"section-padding intro-section",children:f.jsx("div",{className:"container",children:f.jsx("p",{className:"intro-text-large text-center",children:n("industrial.intro.text")})})}),f.jsxs("div",{className:"industrial-content",children:[f.jsx("section",{className:"content-row section-padding bg-light",children:f.jsxs("div",{className:"container grid-row",children:[f.jsxs("div",{className:"text-col",children:[f.jsx("h2",{className:"section-title",children:n("industrial.sections.breakers.title")}),f.jsx("p",{className:"section-desc",children:n("industrial.sections.breakers.text")})]}),f.jsx("div",{className:"image-col",children:f.jsx("img",{src:YN,alt:"Circuit Breaker",className:"content-image"})})]})}),f.jsx("section",{className:"content-row section-padding",children:f.jsxs("div",{className:"container grid-row reverse-mobile",children:[f.jsx("div",{className:"image-col",children:f.jsx("img",{src:GN,alt:"Industrial Control",className:"content-image"})}),f.jsxs("div",{className:"text-col",children:[f.jsx("h2",{className:"section-title",children:n("industrial.sections.control.title")}),f.jsx("p",{className:"section-desc",children:n("industrial.sections.control.text")})]})]})}),f.jsx("section",{className:"content-row section-padding bg-light",children:f.jsxs("div",{className:"container grid-row",children:[f.jsxs("div",{className:"text-col",children:[f.jsx("h2",{className:"section-title",children:n("industrial.sections.simocode.title")}),f.jsx("p",{className:"section-desc",children:n("industrial.sections.simocode.text")})]}),f.jsx("div",{className:"image-col",children:f.jsx("img",{src:XN,alt:"Simocode Siemens",className:"content-image"})})]})})]}),f.jsx("section",{className:"section-padding bg-white",children:f.jsxs("div",{className:"container",children:[f.jsx("div",{style:{textAlign:"center",marginBottom:"60px"},children:f.jsx("h2",{className:"section-title",style:{display:"inline-block"},children:n("industrial.sections.catalog.title")})}),f.jsx("div",{className:"product-grid",children:[{id:1,title:"SIEMENS Disjoncteur 2A Ph+N Courbe C 4.5kA 230V - 5SL3002-7KL",ref:"5SL3002-7KL",price:"12,90 €",rating:5,stock:!0},{id:2,title:"SIEMENS Disjoncteur 10A Ph+N Courbe C 4.5kA 230V - 5SL3010-7KL",ref:"5SL3010-7KL",price:"7,30 €",rating:4,stock:!0},{id:3,title:"SIEMENS Disjoncteur 16A Ph+N Courbe C 4.5kA 230V - 5SL3016-7KL",ref:"5SL3016-7KL",price:"7,30 €",rating:5,stock:!0},{id:4,title:"SIEMENS Disjoncteur 20A Ph+N Courbe C 4.5kA 230V - 5SL3020-7KL",ref:"5SL3020-7KL",price:"7,30 €",rating:4,stock:!0},{id:5,title:"SIEMENS Disjoncteur 32A Ph+N Courbe C 4.5kA 230V - 5SL3032-7KL",ref:"5SL3032-7KL",price:"10,50 €",rating:4,stock:!0},{id:6,title:"SIEMENS Disjoncteur tétrapolaire 10A courbe C 6kA 400V",ref:"5SE2410-6",price:"49,80 €",rating:5,stock:!0},{id:7,title:"SIEMENS Disjoncteur tétrapolaire 16A courbe C 6kA 400V",ref:"5SE2416-6",price:"58,79 €",rating:5,stock:!0},{id:8,title:"SIEMENS Disjoncteur bipolaire 20A pour parafoudre courbe C 6kA 230V",ref:"5SE2420-6",price:"42,90 €",rating:4,stock:!0}].map((i,s)=>{let o=ZN;return s>=5&&s<7?o=QN:s>=7&&(o=PN),f.jsxs("div",{className:"product-card",children:[f.jsx("div",{className:"product-image",children:f.jsx("img",{src:o,alt:i.title})}),f.jsxs("div",{className:"product-info",children:[f.jsx("h3",{className:"product-title",children:i.title}),f.jsx("div",{className:"product-meta",children:f.jsxs("span",{className:"ref",children:["Réf: ",i.ref]})}),f.jsxs("div",{className:"brand-rating",children:[f.jsx("span",{className:"brand",children:"SIEMENS"}),f.jsx("div",{className:"stars",children:[...Array(5)].map((u,d)=>f.jsx("span",{className:d<i.rating?"star filled":"star",children:"★"},d))})]}),f.jsxs("div",{className:"action-row",children:[f.jsx("input",{type:"number",min:"1",defaultValue:"1",className:"qty-input"}),f.jsx("button",{className:"btn-cart",children:"AJOUTER AU PANIER"})]})]})]},i.id)})})]})})]}),f.jsx("style",{jsx:!0,children:`
                .industrial-hero {
                    height: 100vh;
                    min-height: 800px;
                    background-image: url(${KN});
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }

                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%);
                    z-index: 1;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    height: 100%;
                    display: flex;
                    align-items: center;
                }

                .hero-text-block {
                    margin-left: 0;
                }

                .hero-title-main {
                    color: #fff;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    font-family: 'Outfit', sans-serif;
                    text-shadow: 0 4px 30px rgba(0,0,0,0.6);
                    border-left: 5px solid var(--color-accent);
                    padding-left: 32px;
                }

                .company-name {
                    font-size: 3.5rem;
                    font-weight: 800;
                    letter-spacing: 1px;
                    color: #ffffff;
                    text-transform: uppercase;
                    line-height: 1.1;
                }

                .distributor-text {
                    font-size: 1.5rem;
                    font-weight: 600;
                    letter-spacing: 4px;
                    color: var(--color-accent);
                    text-transform: uppercase;
                }

                .hero-title {
                    color: white;
                    font-size: 3.8rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: -1px;
                    line-height: 1.1;
                    margin: 0;
                    font-family: 'Outfit', sans-serif;
                    text-shadow: 0 4px 12px rgba(0,0,0,0.4);
                }

                .intro-text-large {
                    font-size: 1.8rem;
                    color: var(--color-primary);
                    font-weight: 600;
                    text-align: center;
                    line-height: 1.4;
                    position: relative;
                    padding-bottom: 20px;
                    border-bottom: 3px solid var(--color-accent);
                    display: inline-block;
                }

                .intro-section {
                    text-align: center;
                }

                .content-row {
                    border-bottom: 1px solid #eee;
                }

                .bg-light {
                    background-color: #f8f9fa;
                }

                .grid-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                }

                .text-col {
                    padding: 20px;
                }

                .section-title {
                    font-size: 2.2rem;
                    color: var(--color-primary);
                    margin-bottom: 24px;
                    font-weight: 700;
                    position: relative;
                    padding-bottom: 16px;
                }

                .section-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 60px;
                    height: 4px;
                    background: var(--color-accent);
                }

                .section-desc {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: #555;
                }

                .content-image {
                    width: 100%;
                    height: auto;
                    border-radius: 4px;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
                    transition: transform 0.3s ease;
                }

                .content-image:hover {
                    transform: translateY(-5px);
                }

                @media (max-width: 992px) {
                    .industrial-hero {
                        height: 60vh;
                        min-height: 500px;
                    }
                    
                    .hero-content {
                        padding-left: 20px;
                        padding-right: 20px;
                    }

                    .hero-title {
                        font-size: 2.2rem;
                    }

                    .intro-text-large {
                        font-size: 1.2rem;
                    }

                    .grid-row {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }

                    .reverse-mobile {
                        display: flex;
                        flex-direction: column-reverse;
                    }

                    .image-col {
                        order: -1; 
                    }
                    
                    .reverse-mobile .image-col {
                        order: 0; 
                    }
                    .reverse-mobile .image-col {
                        order: 0; 
                    }
                    
                    .showcase-gallery {
                        grid-template-columns: 1fr;
                    }
                }

                .bg-light { background: #f8fafc; }

                    .showcase-gallery {
                        display: none;
                    }
                }

                .bg-light { background: #f8fafc; }
                .bg-white { background: #ffffff; }

                .product-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 30px;
                }

                .product-card {
                    background: white;
                    border: 1px solid #e2e8f0;
                    border-radius: 4px;
                    padding: 20px;
                    transition: all 0.3s ease;
                }

                .product-card:hover {
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    border-color: var(--color-primary);
                }

                .product-image {
                    height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                }

                .product-image img {
                    max-height: 100%;
                    max-width: 100%;
                }

                .product-title {
                    font-size: 14px;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 12px;
                    line-height: 1.4;
                    height: 40px; 
                    overflow: hidden;
                }

                .product-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 12px;
                    font-size: 11px;
                }

                .stock-badge {
                    color: #22c55e;
                    font-weight: 700;
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .stock-badge .dot {
                    width: 6px;
                    height: 6px;
                    background: #22c55e;
                    border-radius: 50%;
                }

                .brand-rating {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 16px;
                    border-bottom: 1px solid #f0f0f0;
                    padding-bottom: 12px;
                }

                .brand {
                    color: #009999; 
                    font-weight: 700;
                    font-size: 13px;
                }

                .stars {
                    color: #fbbf24;
                }

                .price-row {
                    text-align: right;
                    margin-bottom: 16px;
                }

                .price {
                    font-size: 20px;
                    font-weight: 700;
                    color: #333;
                }

                .price small {
                    font-size: 10px;
                    color: #999;
                    margin-left: 2px;
                }

                .action-row {
                    display: flex;
                    gap: 10px;
                }

                .qty-input {
                    width: 50px;
                    padding: 8px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    text-align: center;
                }

                .btn-cart {
                    flex: 1;
                    background: #0090d0;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.2s;
                    text-transform: uppercase;
                }

                .btn-cart:hover {
                    background: #007bb5;
                }
            `})]})},JN="/assets/Panneau.jpg-CXjxr_Sy.jpeg",IN=()=>{const{t:n}=lt();return f.jsxs("div",{className:"page-wrapper",children:[f.jsxs("div",{className:"page-hero",children:[f.jsx("div",{className:"hero-overlay"}),f.jsx("div",{className:"container hero-content",children:f.jsx(Te.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8}})})]}),f.jsx("section",{className:"section-padding text-center",children:f.jsxs("div",{className:"container",children:[f.jsx("h2",{className:"status-title",children:n("solar.status.title")}),f.jsx("div",{className:"divider-center"}),f.jsx("p",{className:"status-text",children:n("solar.status.text")})]})}),f.jsx("style",{jsx:!0,children:`
                .page-hero {
                    height: 100vh;
                    min-height: 600px;
                    background-image: url(${JN});
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }

                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%);
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    text-align: left;
                    width: 100%;
                }

                .hero-title {
                    color: white;
                    font-size: 3.8rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: -1px;
                    line-height: 1.1;
                    margin: 0;
                    font-family: 'Outfit', sans-serif;
                    text-shadow: 0 4px 12px rgba(0,0,0,0.4);
                }

                .status-title {
                    font-size: 2.5rem;
                    color: var(--color-primary);
                    font-weight: 700;
                    margin-bottom: 24px;
                    font-family: 'Outfit', sans-serif;
                }

                .divider-center {
                    width: 80px;
                    height: 4px;
                    background: var(--color-accent);
                    margin: 0 auto 32px;
                }

                .status-text {
                    font-size: 1.2rem;
                    color: #555;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                @media (max-width: 992px) {
                    .page-hero {
                        height: 60vh;
                        min-height: 500px;
                    }
                    
                    .hero-title {
                        font-size: 2.2rem;
                        padding: 0 20px;
                    }
                }
            `})]})},$N="/assets/Haute%20tension.jpg-CS0ngYWt.jpeg",WN=()=>{const{t:n}=lt();return f.jsxs("div",{className:"page-wrapper",children:[f.jsxs("div",{className:"page-hero",children:[f.jsx("div",{className:"hero-overlay"}),f.jsx("div",{className:"container hero-content",children:f.jsx(Te.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8},children:f.jsx("h1",{className:"hero-title",children:n("hv.hero.title")})})})]}),f.jsx("section",{className:"section-padding text-center",children:f.jsxs("div",{className:"container",children:[f.jsx("h2",{className:"status-title",children:n("hv.status.title")}),f.jsx("div",{className:"divider-center"}),f.jsx("p",{className:"status-text",children:n("hv.status.text")})]})}),f.jsx("style",{jsx:!0,children:`
                .page-hero {
                    height: 100vh;
                    min-height: 600px;
                    background-image: url(${$N});
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }

                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%);
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    text-align: left;
                    width: 100%;
                }

                .hero-title {
                    color: white;
                    font-size: 3.8rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: -1px;
                    line-height: 1.1;
                    margin: 0;
                    font-family: 'Outfit', sans-serif;
                    text-shadow: 0 4px 12px rgba(0,0,0,0.4);
                }

                .status-title {
                    font-size: 2.5rem;
                    color: var(--color-primary);
                    font-weight: 700;
                    margin-bottom: 24px;
                    font-family: 'Outfit', sans-serif;
                }

                .divider-center {
                    width: 80px;
                    height: 4px;
                    background: var(--color-accent);
                    margin: 0 auto 32px;
                }

                .status-text {
                    font-size: 1.2rem;
                    color: #555;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                @media (max-width: 992px) {
                    .page-hero {
                        height: 60vh;
                        min-height: 500px;
                    }
                    
                    .hero-title {
                        font-size: 2.2rem;
                        padding: 0 20px;
                    }
                }
            `})]})},eA=({onComplete:n})=>{const[i,s]=T.useState(0);return T.useEffect(()=>{const p=setInterval(()=>{s(y=>{const v=y+1;return v>=100?(clearInterval(p),100):v})},20),g=setTimeout(()=>{n()},2500);return()=>{clearInterval(p),clearTimeout(g)}},[n]),f.jsxs(Te.div,{className:"loading-screen",initial:{y:0},exit:{y:"-100%",transition:{duration:.8,ease:[.76,0,.24,1]}},children:[f.jsxs("div",{className:"loader-content",children:[f.jsxs("h1",{className:"loader-title",children:[f.jsx("span",{className:"stroke",children:"PLANET"}),"ENERGY"]}),f.jsxs("div",{className:"counter-wrap",children:[f.jsx("div",{className:"progress-bar",children:f.jsx(Te.div,{className:"fill",style:{width:`${i}%`}})}),f.jsxs("span",{className:"count",children:[Math.round(i),"%"]})]})]}),f.jsx("style",{jsx:!0,children:`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--color-bg-dark);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .loader-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .loader-title {
          font-family: 'Syne', sans-serif;
          font-size: 80px;
          font-weight: 800;
          letter-spacing: -2px;
          margin: 0;
        }

        .stroke {
          -webkit-text-stroke: 2px transparent;
          background: linear-gradient(to bottom, #fff 30%, rgba(255,255,255,0.4));
          -webkit-background-clip: text;
          color: transparent;
        }

        .counter-wrap {
          width: 300px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .progress-bar {
          flex-grow: 1;
          height: 2px;
          background: rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }

        .fill {
          height: 100%;
          background: var(--color-accent);
        }

        .count {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: var(--color-accent);
          min-width: 40px;
          text-align: right;
        }

        @media (max-width: 768px) {
          .loader-title { font-size: 40px; }
          .counter-wrap { width: 200px; }
        }
      `})]})};function tA(){const[n,i]=T.useState(!0),[s,o]=T.useState(!1),u=()=>{i(!1)};return T.useEffect(()=>{console.log("isLoading:",n,"showContent:",s)},[n,s]),f.jsx(N2,{children:f.jsxs("div",{className:"app-container",children:[f.jsx(za,{mode:"wait",onExitComplete:()=>o(!0),children:n&&f.jsx(eA,{onComplete:u},"loader")}),s&&f.jsxs(f.Fragment,{children:[f.jsx(nN,{}),f.jsx("main",{children:f.jsxs(t2,{children:[f.jsx(qt,{path:"/",element:f.jsx(pN,{})}),f.jsx(qt,{path:"/products",element:f.jsx(gN,{})}),f.jsx(qt,{path:"/about",element:f.jsx(yN,{})}),f.jsx(qt,{path:"/contact",element:f.jsx(vN,{})}),f.jsx(qt,{path:"/operations",element:f.jsx(xN,{})}),f.jsx(qt,{path:"/legal",element:f.jsx(bN,{})}),f.jsx(qt,{path:"/newsroom/halogen-free-cables",element:f.jsx(SN,{})}),f.jsx(qt,{path:"/products/cables",element:f.jsx(qN,{})}),f.jsx(qt,{path:"/industrial",element:f.jsx(FN,{})}),f.jsx(qt,{path:"/solar",element:f.jsx(IN,{})}),f.jsx(qt,{path:"/high-voltage",element:f.jsx(WN,{})})]})}),f.jsx(aN,{})]})]})})}i1.createRoot(document.getElementById("root")).render(f.jsx(g0.StrictMode,{children:f.jsx(eN,{children:f.jsx(tA,{})})}));
