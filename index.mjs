// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-contains@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-ctors@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";function h(t,e,s){return p(s)?l(s,"dtype")&&(t.dtype=s.dtype,!i(e,t.dtype))?new TypeError(m('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"dtype",e.join('", "'),t.dtype)):null:new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",s))}function u(t,e,n){if(!(this instanceof u))return new u(t,e,n);if(!s(t))throw new TypeError(m("invalid argument. First argument must be a function. Value: `%s`.",t));if(!r(e))throw new TypeError(m("invalid argument. Second argument must be an array of strings. Value: `%s`.",e));if(!i(e,n))throw new TypeError(m("invalid argument. Third argument must be a supported data type. Value: `%s`.",n));return this._prng=t,this._dtypes=e,this._dtype=n,this}t(u.prototype,"generate",(function(t,s,r,n){var i,p,l,u,g;if(!e(t))throw new TypeError(m("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",t));if(i={},arguments.length>3&&(u=h(i,this._dtypes,n)))throw u;return p=this._prng,"generic"===(g=i.dtype||this._dtype)?o(t,j):(l=new(a(g))(t),d([[s],[r],l],[t],[0,0,1],p),l);function j(){return p(s,r)}})),t(u.prototype,"assign",(function(t,e,s){if(!n(s))throw new TypeError(m("invalid argument. Third argument must be an array-like object. Value: `%s`.",s));return d([[t],[e],s],[s.length],[0,0,1],this._prng),s}));export{u as default};
//# sourceMappingURL=index.mjs.map
