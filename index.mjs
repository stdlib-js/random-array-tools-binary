// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-contains@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary@v0.3.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-ctors@v0.3.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";function l(t,e,n){if(!(this instanceof l))return new l(t,e,n);if(!s(t))throw new TypeError(m("1qj3c",t));if(!r(e))throw new TypeError(m("1qjAS",e));if(!i(e,n))throw new TypeError(m("1qjFO",n));return this._prng=t,this._dtypes=e,this._dtype=n,this}t(l.prototype,"generate",(function(t,s,r,n){var l,a,f,y,c;if(!e(t))throw new TypeError(m("1qj2d",t));if(l={},arguments.length>3&&(y=function(t,e,s){return j(s)?h(s,"dtype")&&(t.dtype=s.dtype,!i(e,t.dtype))?new TypeError(m("1qj4S","dtype",e.join('", "'),t.dtype)):null:new TypeError(m("1qj2V",s))}(l,this._dtypes,n),y))throw y;return a=this._prng,"generic"===(c=l.dtype||this._dtype)?d(t,(function(){return a(s,r)})):(f=new(p(c))(t),o([[s],[r],f],[t],[0,0,1],a),f)})),t(l.prototype,"assign",(function(t,e,s){if(!n(s))throw new TypeError(m("1qj2l",s));return o([[t],[e],s],[s.length],[0,0,1],this._prng),s}));export{l as default};
//# sourceMappingURL=index.mjs.map
