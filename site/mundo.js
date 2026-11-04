/* Portal FPM — Mundo das companhias. Gerado de src/mundo (npm run build); não edite à mão. Inclui three.js (MIT). */
var yu=0,Rc=1,Mu=2;var ps=1,Su=2,tr=3,Xi=0,nn=1,ri=2,ai=0,er=1,oi=2,Ic=3,Pc=4,bu=5;var ms=100,wu=101,Tu=102,Eu=103,Au=104,Cu=200,Ru=201,Iu=202,Pu=203,Lc=204,Dc=205,Lu=206,Du=207,Nu=208,Uu=209,Fu=210,Ou=211,Bu=212,zu=213,ku=214,Qa=0,to=1,eo=2,Bs=3,no=4,io=5,so=6,ro=7,ko=0,Hu=1,Vu=2,Gn=0,Nc=1,Uc=2,Fc=3,sa=4,Oc=5,Bc=6,zc=7;var kc=300,$i=301,gs=302,Ho=303,Vo=304,ra=306,ao=1e3,jn=1001,oo=1002,Ze=1003,Gu=1004;var aa=1005;var en=1006,Go=1007;var qi=1008;var _n=1009,Hc=1010,Vc=1011,nr=1012,Wo=1013,Wn=1014,In=1015,Xn=1016,Xo=1017,$o=1018,ir=1020,Gc=35902,Wc=35899,Xc=1021,$c=1022,Pn=1023,ti=1026,Yi=1027,qo=1028,Yo=1029,Zi=1030,Zo=1031;var Jo=1033,oa=33776,la=33777,ca=33778,ha=33779,Ko=35840,jo=35841,Qo=35842,tl=35843,el=36196,nl=37492,il=37496,sl=37488,rl=37489,ua=37490,al=37491,ol=37808,ll=37809,cl=37810,hl=37811,ul=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,_l=37818,xl=37819,vl=37820,yl=37821,Ml=36492,Sl=36494,bl=36495,wl=36283,Tl=36284,da=36285,El=36286;var Cr=2300,lo=2301,Ka=2302,_c=2303,xc=2400,vc=2401,yc=2402;var Wu=3200;var fa=0,Xu=1,Ti="",tn="srgb",Rr="srgb-linear",Ir="linear",Me="srgb";var ja=7680;var $u=519,qu=512,Yu=513,Zu=514,Al=515,Ju=516,Ku=517,Cl=518,ju=519,Qu=35044;var qc="300 es",zn=2e3,zs=2001;function df(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ff(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function td(){let i=Pr("canvas");return i.style.display="block",i}var zh={},ks=null;function Yc(...i){let t="THREE."+i.shift();ks?ks("log",t,...i):console.log(t,...i)}function ed(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ee(...i){i=ed(i);let t="THREE."+i.shift();if(ks)ks("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=ed(i);let t="THREE."+i.shift();if(ks)ks("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function as(...i){let t=i.join(" ");t in zh||(zh[t]=!0,ee(...i))}function nd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var id={[Qa]:to,[eo]:so,[no]:ro,[Bs]:io,[to]:Qa,[so]:eo,[ro]:no,[io]:Bs},ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Wl=Math.PI/180,co=180/Math.PI;function sr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function pf(i,t){return(i%t+t)%t}function Xl(i,t,e){return(1-e)*i+e*t}function _r(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var th=class th{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};th.prototype.isVector2=!0;var Ct=th,An=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(f!==x||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*x;g<0&&(u=-u,d=-d,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let S=Math.acos(g),E=Math.sin(S);p=Math.sin(p*S)/E,o=Math.sin(o*S)/E,l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+x*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+x*o;let S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-o*d,t[e+2]=c*m+h*d+o*u-l*f,t[e+3]=h*m-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},eh=class eh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $l.copy(this).projectOnVector(t),this.sub($l)}reflect(t){return this.sub($l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eh.prototype.isVector3=!0;var N=eh,$l=new N,kh=new An,nh=class nh{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],S=s[1],E=s[4],_=s[7],w=s[2],T=s[5],P=s[8];return r[0]=a*x+o*S+l*w,r[3]=a*g+o*E+l*T,r[6]=a*p+o*_+l*P,r[1]=c*x+h*S+f*w,r[4]=c*g+h*E+f*T,r[7]=c*p+h*_+f*P,r[2]=u*x+d*S+m*w,r[5]=u*g+d*E+m*T,r[8]=u*p+d*_+m*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=e*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ql.makeScale(t,e)),this}rotate(t){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ql.makeRotation(-t)),this}translate(t,e){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ql.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nh.prototype.isMatrix3=!0;var oe=nh,ql=new oe,Hh=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mf(){let i={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Me&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return as("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return as("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rr]:{primaries:t,whitePoint:n,transfer:Ir,toXYZ:Hh,fromXYZ:Vh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:Hh,fromXYZ:Vh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}var ge=mf();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bs,ho=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{bs===void 0&&(bs=Pr("canvas")),bs.width=t.width,bs.height=t.height;let s=bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gf=0,Hs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=sr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yl(s[a].image)):r.push(Yl(s[a]))}else r=Yl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Yl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ho.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}var _f=0,Zl=new N,dn=class i extends ei{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=jn,s=jn,r=en,a=qi,o=Pn,l=_n,c=i.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=sr(),this.name="",this.source=new Hs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ao:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ao:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=kc;dn.DEFAULT_ANISOTROPY=1;var ih=class ih{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,_=(d+1)/2,w=(p+1)/2,T=(h+u)/4,P=(f+x)/4,v=(m+g)/4;return E>_&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=P/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=v/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=P/r,s=v/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(f-x)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ih.prototype.isVector4=!0;var De=ih,uo=class extends ei{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new dn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Hs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends uo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Lr=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fo=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var zo=class zo{constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,m,x,g)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ws.setFromMatrixColumn(t,0).length(),r=1/ws.setFromMatrixColumn(t,1).length(),a=1/ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,m=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,m=c*h,x=c*f;e[0]=u+x*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,m=c*h,x=c*f;e[0]=u-x*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,m=o*h,x=o*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-u*f,e[8]=m*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-x*f}else if(t.order==="XZY"){let u=a*l,d=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=a*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xf,t,vf)}lookAt(t,e,n){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ui.crossVectors(n,vn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ui.crossVectors(n,vn)),Ui.normalize(),Aa.crossVectors(vn,Ui),s[0]=Ui.x,s[4]=Aa.x,s[8]=vn.x,s[1]=Ui.y,s[5]=Aa.y,s[9]=vn.y,s[2]=Ui.z,s[6]=Aa.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],S=n[3],E=n[7],_=n[11],w=n[15],T=s[0],P=s[4],v=s[8],A=s[12],L=s[1],k=s[5],B=s[9],et=s[13],U=s[2],Y=s[6],it=s[10],rt=s[14],ft=s[3],F=s[7],nt=s[11],X=s[15];return r[0]=a*T+o*L+l*U+c*ft,r[4]=a*P+o*k+l*Y+c*F,r[8]=a*v+o*B+l*it+c*nt,r[12]=a*A+o*et+l*rt+c*X,r[1]=h*T+f*L+u*U+d*ft,r[5]=h*P+f*k+u*Y+d*F,r[9]=h*v+f*B+u*it+d*nt,r[13]=h*A+f*et+u*rt+d*X,r[2]=m*T+x*L+g*U+p*ft,r[6]=m*P+x*k+g*Y+p*F,r[10]=m*v+x*B+g*it+p*nt,r[14]=m*A+x*et+g*rt+p*X,r[3]=S*T+E*L+_*U+w*ft,r[7]=S*P+E*k+_*Y+w*F,r[11]=S*v+E*B+_*it+w*nt,r[15]=S*A+E*et+_*rt+w*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15],S=l*d-c*u,E=o*d-c*f,_=o*u-l*f,w=a*d-c*h,T=a*u-l*h,P=a*f-o*h;return e*(x*S-g*E+p*_)-n*(m*S-g*w+p*T)+s*(m*E-x*w+p*P)-r*(m*_-x*T+g*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],S=e*o-n*a,E=e*l-s*a,_=e*c-r*a,w=n*l-s*o,T=n*c-r*o,P=s*c-r*l,v=h*x-f*m,A=h*g-u*m,L=h*p-d*m,k=f*g-u*x,B=f*p-d*x,et=u*p-d*g,U=S*et-E*B+_*k+w*L-T*A+P*v;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/U;return t[0]=(o*et-l*B+c*k)*Y,t[1]=(s*B-n*et-r*k)*Y,t[2]=(x*P-g*T+p*w)*Y,t[3]=(u*T-f*P-d*w)*Y,t[4]=(l*L-a*et-c*A)*Y,t[5]=(e*et-s*L+r*A)*Y,t[6]=(g*_-m*P-p*E)*Y,t[7]=(h*P-u*_+d*E)*Y,t[8]=(a*B-o*L+c*v)*Y,t[9]=(n*L-e*B-r*v)*Y,t[10]=(m*T-x*_+p*S)*Y,t[11]=(f*_-h*T-d*S)*Y,t[12]=(o*A-a*k-l*v)*Y,t[13]=(e*k-n*A+s*v)*Y,t[14]=(x*E-m*w-g*S)*Y,t[15]=(h*w-f*E+u*S)*Y,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,x=a*h,g=a*f,p=o*f,S=l*c,E=l*h,_=l*f,w=n.x,T=n.y,P=n.z;return s[0]=(1-(x+p))*w,s[1]=(d+_)*w,s[2]=(m-E)*w,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(u+p))*T,s[6]=(g+S)*T,s[7]=0,s[8]=(m+E)*P,s[9]=(g-S)*P,s[10]=(1-(u+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ws.set(s[0],s[1],s[2]).length(),o=ws.set(s[4],s[5],s[6]).length(),l=ws.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);let c=1/a,h=1/o,f=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,e.setFromRotationMatrix(Un),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=zn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===zn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===zs)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=zn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===zn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===zs)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};zo.prototype.isMatrix4=!0;var ve=zo,ws=new N,Un=new ve,xf=new N(0,0,0),vf=new N(1,1,1),Ui=new N,Aa=new N,vn=new N,Gh=new ve,Wh=new An,ni=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var Vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yf=0,Xh=new N,Ts=new An,pi=new ve,Ca=new N,xr=new N,Mf=new N,Sf=new An,$h=new N(1,0,0),qh=new N(0,1,0),Yh=new N(0,0,1),Zh={type:"added"},bf={type:"removed"},Es={type:"childadded",child:null},Jl={type:"childremoved",child:null},Ge=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new ni,n=new An,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new oe}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis($h,t)}rotateY(t){return this.rotateOnAxis(qh,t)}rotateZ(t){return this.rotateOnAxis(Yh,t)}translateOnAxis(t,e){return Xh.copy(t).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($h,t)}translateY(t){return this.translateOnAxis(qh,t)}translateZ(t){return this.translateOnAxis(Yh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ca.copy(t):Ca.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(xr,Ca,this.up):pi.lookAt(Ca,xr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(pi),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zh),Es.child=t,this.dispatchEvent(Es),Es.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bf),Jl.child=t,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zh),Es.child=t,this.dispatchEvent(Es),Es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,Mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ge.DEFAULT_UP=new N(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},wf={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function Kl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ne=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=pf(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Kl(a,r,t+1/3),this.g=Kl(a,r,t),this.b=Kl(a,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=sd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return ge.workingToColorSpace(cn.copy(this),t),Math.round(de(cn.r*255,0,255))*65536+Math.round(de(cn.g*255,0,255))*256+Math.round(de(cn.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(cn.copy(this),e);let n=cn.r,s=cn.g,r=cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=tn){ge.workingToColorSpace(cn.copy(this),t);let e=cn.r,n=cn.g,s=cn.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(Ra);let n=Xl(Fi.h,Ra.h,e),s=Xl(Fi.s,Ra.s,e),r=Xl(Fi.l,Ra.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new ne;ne.NAMES=sd;var os=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ne(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},yi=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new N,mi=new N,jl=new N,gi=new N,As=new N,Cs=new N,Jh=new N,Ql=new N,tc=new N,ec=new N,nc=new De,ic=new De,sc=new De,ki=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),mi.subVectors(n,e),jl.subVectors(t,e);let a=Fn.dot(Fn),o=Fn.dot(mi),l=Fn.dot(jl),c=mi.dot(mi),h=mi.dot(jl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return nc.setScalar(0),ic.setScalar(0),sc.setScalar(0),nc.fromBufferAttribute(t,e),ic.fromBufferAttribute(t,n),sc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(nc,r.x),a.addScaledVector(ic,r.y),a.addScaledVector(sc,r.z),a}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),mi.subVectors(t,e),Fn.cross(mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Fn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;As.subVectors(s,n),Cs.subVectors(r,n),Ql.subVectors(t,n);let l=As.dot(Ql),c=Cs.dot(Ql);if(l<=0&&c<=0)return e.copy(n);tc.subVectors(t,s);let h=As.dot(tc),f=Cs.dot(tc);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(As,a);ec.subVectors(t,r);let d=As.dot(ec),m=Cs.dot(ec);if(m>=0&&d<=m)return e.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Cs,o);let g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Jh.subVectors(r,s),o=(f-h)/(f-h+(d-m)),e.copy(s).addScaledVector(Jh,o);let p=1/(g+x+u);return a=x*p,o=u*p,e.copy(n).addScaledVector(As,a).addScaledVector(Cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ii=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(t.matrixWorld),this.union(Ia)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),Pa.subVectors(this.max,vr),Rs.subVectors(t.a,vr),Is.subVectors(t.b,vr),Ps.subVectors(t.c,vr),Oi.subVectors(Is,Rs),Bi.subVectors(Ps,Is),ns.subVectors(Rs,Ps);let e=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-ns.z,ns.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,ns.z,0,-ns.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-ns.y,ns.x,0];return!rc(e,Rs,Is,Ps,Pa)||(e=[1,0,0,0,1,0,0,0,1],!rc(e,Rs,Is,Ps,Pa))?!1:(La.crossVectors(Oi,Bi),e=[La.x,La.y,La.z],rc(e,Rs,Is,Ps,Pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_i=[new N,new N,new N,new N,new N,new N,new N,new N],On=new N,Ia=new ii,Rs=new N,Is=new N,Ps=new N,Oi=new N,Bi=new N,ns=new N,vr=new N,Pa=new N,La=new N,is=new N;function rc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){is.fromArray(i,r);let o=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=t.dot(is),c=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var He=new N,Da=new Ct,Tf=0,we=class extends ei{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qu,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Da.fromBufferAttribute(this,e),Da.applyMatrix3(t),this.setXY(e,Da.x,Da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_r(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_r(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_r(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_r(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_r(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Dr=class extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Nr=class extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ef=new ii,yr=new N,ac=new N,Mi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ef.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);let e=yr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(ac)),this.expandByPoint(yr.copy(t.center).sub(ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Af=0,En=new ve,oc=new Ge,Ls=new N,yn=new ii,Mr=new ii,Ye=new N,Ee=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(df(t)?Nr:Dr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return oc.lookAt(t),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(yn.min,Mr.min),yn.expandByPoint(Ye),Ye.addVectors(yn.max,Mr.max),yn.expandByPoint(Ye)):(yn.expandByPoint(Mr.min),yn.expandByPoint(Mr.max))}yn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ye.fromBufferAttribute(o,c),l&&(Ls.fromBufferAttribute(t,c),Ye.add(Ls)),s=Math.max(s,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new we(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new N,l[v]=new N;let c=new N,h=new N,f=new N,u=new Ct,d=new Ct,m=new Ct,x=new N,g=new N;function p(v,A,L){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,L),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,L),h.sub(c),f.sub(c),d.sub(u),m.sub(u);let k=1/(d.x*m.y-m.x*d.y);isFinite(k)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(k),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(k),o[v].add(x),o[A].add(x),o[L].add(x),l[v].add(g),l[A].add(g),l[L].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,A=S.length;v<A;++v){let L=S[v],k=L.start,B=L.count;for(let et=k,U=k+B;et<U;et+=3)p(t.getX(et+0),t.getX(et+1),t.getX(et+2))}let E=new N,_=new N,w=new N,T=new N;function P(v){w.fromBufferAttribute(s,v),T.copy(w);let A=o[v];E.copy(A),E.sub(w.multiplyScalar(w.dot(A))).normalize(),_.crossVectors(T,A);let k=_.dot(l[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,k)}for(let v=0,A=S.length;v<A;++v){let L=S[v],k=L.start,B=L.count;for(let et=k,U=k+B;et<U;et+=3)P(t.getX(et+0)),P(t.getX(et+1)),P(t.getX(et+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,f=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new we(u,h,f)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var lc=new N,Cf=new N,Rf=new oe,Bn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=lc.subVectors(n,e).cross(Cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(lc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Rf.getNormalMatrix(t),s=this.coplanarPoint(lc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},If=0,si=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=er,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Dc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Bn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var xi=new N,cc=new N,Na=new N,Ua=new N,Ws=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){cc.copy(t).add(e).multiplyScalar(.5),Na.copy(e).sub(t).normalize(),Ua.copy(this.origin).sub(cc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Na),o=Ua.dot(this.direction),l=-Ua.dot(Na),c=Ua.lengthSq(),h=Math.abs(1-a*a),f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(cc).addScaledVector(Na,u),d}intersectSphere(t,e){if(t.radius<0)return null;xi.subVectors(t.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,m=e.x-a.x,x=e.y-a.y,g=e.z-a.z,p=n.x-a.x,S=n.y-a.y,E=n.z-a.z,_=Math.abs(l),w=Math.abs(c),T=Math.abs(h),P,v,A,L,k,B,et,U,Y,it,rt,ft;if(_>=w&&_>=T?(A=l,B=f,Y=m,ft=p,l>=0?(P=c,v=h,L=u,k=d,et=x,U=g,it=S,rt=E):(P=h,v=c,L=d,k=u,et=g,U=x,it=E,rt=S)):w>=T?(A=c,B=u,Y=x,ft=S,c>=0?(P=h,v=l,L=d,k=f,et=g,U=m,it=E,rt=p):(P=l,v=h,L=f,k=d,et=m,U=g,it=p,rt=E)):(A=h,B=d,Y=g,ft=E,h>=0?(P=l,v=c,L=f,k=u,et=m,U=x,it=p,rt=S):(P=c,v=l,L=u,k=f,et=x,U=m,it=S,rt=p)),A===0)return null;let F=P/A,nt=v/A,X=1/A,Q=L-F*B,Rt=k-nt*B,Kt=et-F*Y,Lt=U-nt*Y,Xt=it-F*ft,at=rt-nt*ft,ct=Xt*Lt-at*Kt,pt=Q*at-Rt*Xt,Yt=Kt*Rt-Lt*Q;if(s){if(ct<0||pt<0||Yt<0)return null}else if((ct<0||pt<0||Yt<0)&&(ct>0||pt>0||Yt>0))return null;let It=ct+pt+Yt;if(It===0)return null;let kt=X*(ct*B+pt*Y+Yt*ft);return(It>0?kt<0:kt>0)?null:this.at(kt/It,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hn=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kh=new ve,ss=new Ws,Fa=new Mi,jh=new N,Oa=new N,Ba=new N,za=new N,hc=new N,ka=new N,Qh=new N,Ha=new N,fe=class extends Ge{constructor(t=new Ee,e=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(hc.fromBufferAttribute(f,t),a?ka.addScaledVector(hc,h):ka.addScaledVector(hc.sub(e),h))}e.add(ka)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(Fa.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Fa,jh)===null||ss.origin.distanceToSquared(jh)>(t.far-t.near)**2))&&(Kh.copy(r).invert(),ss.copy(t.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],S=Math.max(g.start,d.start),E=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=S,w=E;_<w;_+=3){let T=o.getX(_),P=o.getX(_+1),v=o.getX(_+2);s=Va(this,p,t,n,c,h,f,T,P,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let S=o.getX(g),E=o.getX(g+1),_=o.getX(g+2);s=Va(this,a,t,n,c,h,f,S,E,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],S=Math.max(g.start,d.start),E=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=S,w=E;_<w;_+=3){let T=_,P=_+1,v=_+2;s=Va(this,p,t,n,c,h,f,T,P,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let S=g,E=g+1,_=g+2;s=Va(this,a,t,n,c,h,f,S,E,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Pf(i,t,e,n,s,r,a,o){let l;if(t.side===nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xi,o),l===null)return null;Ha.copy(o),Ha.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ha);return c<e.near||c>e.far?null:{distance:c,point:Ha.clone(),object:i}}function Va(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Oa),i.getVertexPosition(l,Ba),i.getVertexPosition(c,za);let h=Pf(i,t,e,n,Oa,Ba,za,Qh);if(h){let f=new N;ki.getBarycoord(Qh,Oa,Ba,za,f),s&&(h.uv=ki.getInterpolatedAttribute(s,o,l,c,f,new Ct)),r&&(h.uv1=ki.getInterpolatedAttribute(r,o,l,c,f,new Ct)),a&&(h.normal=ki.getInterpolatedAttribute(a,o,l,c,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new N,materialIndex:0};ki.getNormal(Oa,Ba,za,u.normal),h.face=u,h.barycoord=f}return h}var Ur=class extends dn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ze,h=Ze,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vn=class extends we{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ds=new ve,tu=new ve,Ga=[],eu=new ii,Lf=new ve,Sr=new fe,br=new Mi,ls=class extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),eu.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(eu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),br.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),t.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),tu.multiplyMatrices(n,Ds),Sr.matrixWorld=tu,Sr.raycast(t,Ga);for(let a=0,o=Ga.length;a<o;a++){let l=Ga[a];l.instanceId=r,l.object=this,e.push(l)}Ga.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Vn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ur(new Float32Array(s*this.count),s,this.count,qo,In));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rs=new Mi,Df=new Ct(.5,.5),Wa=new N,Xs=class{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],S=r[12],E=r[13],_=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,p-m,w-S).normalize(),s[1].setComponents(c+a,d+h,p+m,w+S).normalize(),s[2].setComponents(c+o,d+f,p+x,w+E).normalize(),s[3].setComponents(c-o,d-f,p-x,w-E).normalize(),n)s[4].setComponents(l,u,g,_).normalize(),s[5].setComponents(c-l,d-u,p-g,w-_).normalize();else if(s[4].setComponents(c-l,d-u,p-g,w-_).normalize(),e===zn)s[5].setComponents(c+l,d+u,p+g,w+_).normalize();else if(e===zs)s[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);let e=Df.distanceTo(t.center);return rs.radius=.7071067811865476+e,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Wa.x=s.normal.x>0?t.max.x:t.min.x,Wa.y=s.normal.y>0?t.max.y:t.min.y,Wa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var po=class extends si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},mo=new N,go=new N,nu=new ve,wr=new Ws,Xa=new Mi,uc=new N,iu=new N,_o=class extends Ge{constructor(t=new Ee,e=new po){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)mo.fromBufferAttribute(e,s-1),go.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=mo.distanceTo(go);t.setAttribute("lineDistance",new ce(n,1))}else ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,t.ray.intersectsSphere(Xa)===!1)return;nu.copy(s).invert(),wr.copy(t.ray).applyMatrix4(nu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=c){let p=h.getX(x),S=h.getX(x+1),E=$a(this,t,wr,l,p,S,x);E&&e.push(E)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=$a(this,t,wr,l,x,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=c){let p=$a(this,t,wr,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=$a(this,t,wr,l,m-1,d,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $a(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(mo.fromBufferAttribute(o,s),go.fromBufferAttribute(o,r),e.distanceSqToSegment(mo,go,uc,iu)>n)return;uc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(uc);if(!(c<t.near||c>t.far))return{distance:c,point:iu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var su=new N,ru=new N,Fr=class extends _o{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)su.fromBufferAttribute(e,s),ru.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+su.distanceTo(ru);t.setAttribute("lineDistance",new ce(n,1))}else ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Or=class extends dn{constructor(t=[],e=$i,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},$s=class extends dn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends dn{constructor(t,e,n=Wn,s,r,a,o=Ze,l=Ze,c,h=ti,f=1){if(h!==ti&&h!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},xo=class extends Hi{constructor(t,e=Wn,n=$i,s,r,a=Ze,o=Ze,l,c=ti){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Br=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Cn=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(f,2));function m(x,g,p,S,E,_,w,T,P,v,A){let L=_/P,k=w/v,B=_/2,et=w/2,U=T/2,Y=P+1,it=v+1,rt=0,ft=0,F=new N;for(let nt=0;nt<it;nt++){let X=nt*k-et;for(let Q=0;Q<Y;Q++){let Rt=Q*L-B;F[x]=Rt*S,F[g]=X*E,F[p]=U,c.push(F.x,F.y,F.z),F[x]=0,F[g]=0,F[p]=T>0?1:-1,h.push(F.x,F.y,F.z),f.push(Q/P),f.push(1-nt/v),rt+=1}}for(let nt=0;nt<v;nt++)for(let X=0;X<P;X++){let Q=u+X+Y*nt,Rt=u+X+Y*(nt+1),Kt=u+(X+1)+Y*(nt+1),Lt=u+(X+1)+Y*nt;l.push(Q,Rt,Lt),l.push(Rt,Kt,Lt),ft+=6}o.addGroup(d,ft,A),d+=ft,u+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var zr=class i extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new N,h=new Ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qs=class i extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,x=[],g=n/2,p=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(d,2));function S(){let _=new N,w=new N,T=0,P=(e-t)/n;for(let v=0;v<=r;v++){let A=[],L=v/r,k=L*(e-t)+t;for(let B=0;B<=s;B++){let et=B/s,U=et*l+o,Y=Math.sin(U),it=Math.cos(U);w.x=k*Y,w.y=-L*n+g,w.z=k*it,f.push(w.x,w.y,w.z),_.set(Y,P,it).normalize(),u.push(_.x,_.y,_.z),d.push(et,1-L),A.push(m++)}x.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){let L=x[A][v],k=x[A+1][v],B=x[A+1][v+1],et=x[A][v+1];(t>0||A!==0)&&(h.push(L,k,et),T+=3),(e>0||A!==r-1)&&(h.push(k,B,et),T+=3)}c.addGroup(p,T,0),p+=T}function E(_){let w=m,T=new Ct,P=new N,v=0,A=_===!0?t:e,L=_===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,g*L,0),u.push(0,L,0),d.push(.5,.5),m++;let k=m;for(let B=0;B<=s;B++){let U=B/s*l+o,Y=Math.cos(U),it=Math.sin(U);P.x=A*it,P.y=g*L,P.z=A*Y,f.push(P.x,P.y,P.z),u.push(0,L,0),T.x=Y*.5+.5,T.y=it*.5*L+.5,d.push(T.x,T.y),m++}for(let B=0;B<s;B++){let et=w+B,U=k+B;_===!0?h.push(U,U+1,et):h.push(U+1,U,et),v+=3}c.addGroup(p,v,_===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vo=class i extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let E=new N,_=new N,w=new N;for(let T=0;T<e.length;T+=3)d(e[T+0],E),d(e[T+1],_),d(e[T+2],w),l(E,_,w,S)}function l(S,E,_,w){let T=w+1,P=[];for(let v=0;v<=T;v++){P[v]=[];let A=S.clone().lerp(_,v/T),L=E.clone().lerp(_,v/T),k=T-v;for(let B=0;B<=k;B++)B===0&&v===T?P[v][B]=A:P[v][B]=A.clone().lerp(L,B/k)}for(let v=0;v<T;v++)for(let A=0;A<2*(T-v)-1;A++){let L=Math.floor(A/2);A%2===0?(u(P[v][L+1]),u(P[v+1][L]),u(P[v][L])):(u(P[v][L+1]),u(P[v+1][L+1]),u(P[v+1][L]))}}function c(S){let E=new N;for(let _=0;_<r.length;_+=3)E.x=r[_+0],E.y=r[_+1],E.z=r[_+2],E.normalize().multiplyScalar(S),r[_+0]=E.x,r[_+1]=E.y,r[_+2]=E.z}function h(){let S=new N;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];let _=g(S)/2/Math.PI+.5,w=p(S)/Math.PI+.5;a.push(_,1-w)}m(),f()}function f(){for(let S=0;S<a.length;S+=6){let E=a[S+0],_=a[S+2],w=a[S+4],T=Math.max(E,_,w),P=Math.min(E,_,w);T>.9&&P<.1&&(E<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),w<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function d(S,E){let _=S*3;E.x=t[_+0],E.y=t[_+1],E.z=t[_+2]}function m(){let S=new N,E=new N,_=new N,w=new N,T=new Ct,P=new Ct,v=new Ct;for(let A=0,L=0;A<r.length;A+=9,L+=6){S.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),_.set(r[A+6],r[A+7],r[A+8]),T.set(a[L+0],a[L+1]),P.set(a[L+2],a[L+3]),v.set(a[L+4],a[L+5]),w.copy(S).add(E).add(_).divideScalar(3);let k=g(w);x(T,L+0,S,k),x(P,L+2,E,k),x(v,L+4,_,k)}}function x(S,E,_,w){w<0&&S.x===1&&(a[E]=S.x-1),_.x===0&&_.z===0&&(a[E]=w/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ee("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Ct:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],a=[],o=new N,l=new ve;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(de(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(de(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ys=class extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yo=class extends Ys{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Zc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var au=new N,ou=new N,dc=new Zc,fc=new Zc,pc=new Zc,Zs=class extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ou.subVectors(s[0],s[1]).add(s[0]),c=ou);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(au.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=au),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),dc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,x,g),fc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,x,g),pc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),fc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),pc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(dc.calc(l),fc.calc(l),pc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function lu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Nf(i,t){let e=1-i;return e*e*t}function Uf(i,t){return 2*(1-i)*i*t}function Ff(i,t){return i*i*t}function Er(i,t,e,n){return Nf(i,t)+Uf(i,e)+Ff(i,n)}function Of(i,t){let e=1-i;return e*e*e*t}function Bf(i,t){let e=1-i;return 3*e*e*i*t}function zf(i,t){return 3*(1-i)*i*i*t}function kf(i,t){return i*i*i*t}function Ar(i,t,e,n,s){return Of(i,t)+Bf(i,e)+zf(i,n)+kf(i,s)}var kr=class extends Mn{constructor(t=new Ct,e=new Ct,n=new Ct,s=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(t,s.x,r.x,a.x,o.x),Ar(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Js=class extends Mn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(t,s.x,r.x,a.x,o.x),Ar(t,s.y,r.y,a.y,o.y),Ar(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hr=class extends Mn{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends Mn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vr=class extends Mn{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Er(t,s.x,r.x,a.x),Er(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gr=class extends Mn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Er(t,s.x,r.x,a.x),Er(t,s.y,r.y,a.y),Er(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wr=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(lu(o,l.x,c.x,h.x,f.x),lu(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}},So=Object.freeze({__proto__:null,ArcCurve:yo,CatmullRomCurve3:Zs,CubicBezierCurve:kr,CubicBezierCurve3:Js,EllipseCurve:Ys,LineCurve:Hr,LineCurve3:Mo,QuadraticBezierCurve:Vr,QuadraticBezierCurve3:Gr,SplineCurve:Wr}),bo=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new So[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new So[s.type]().fromJSON(s))}return this}},Si=class extends bo{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Hr(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Vr(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new kr(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s),new Ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Wr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ys(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},bi=class extends Si{constructor(t){super(t),this.uuid=sr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Si().fromJSON(s))}return this}};function Hf(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=rd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=$f(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<s;u+=e){let d=i[u],m=i[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Xr(r,a,e,o,l,c,0),a}function rd(i,t,e,n,s){let r;if(s===ip(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=cu(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=cu(a/n|0,i[a],i[a+1],r);return r&&Ks(r,r.next)&&(qr(r),r=r.next),r}function cs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ks(e,e.next)||Ne(e.prev,e,e.next)===0)){if(qr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Kf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Gf(i,n,s,r):Vf(i)){t.push(l.i,i.i,c.i),qr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Wf(cs(i),t),Xr(i,t,e,n,s,r,2)):a===2&&Xf(i,t,e,n,s,r):Xr(cs(i),t,e,n,s,r,1);break}}}function Vf(i){let t=i.prev,e=i,n=i.next;if(Ne(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Tr(s,o,r,l,a,c,m.x,m.y)&&Ne(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Gf(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ne(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),m=Math.min(h,f,u),x=Math.max(o,l,c),g=Math.max(h,f,u),p=Mc(d,m,t,e,n),S=Mc(x,g,t,e,n),E=i.prevZ,_=i.nextZ;for(;E&&E.z>=p&&_&&_.z<=S;){if(E.x>=d&&E.x<=x&&E.y>=m&&E.y<=g&&E!==s&&E!==a&&Tr(o,h,l,f,c,u,E.x,E.y)&&Ne(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Tr(o,h,l,f,c,u,_.x,_.y)&&Ne(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=x&&E.y>=m&&E.y<=g&&E!==s&&E!==a&&Tr(o,h,l,f,c,u,E.x,E.y)&&Ne(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=S;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Tr(o,h,l,f,c,u,_.x,_.y)&&Ne(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Wf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ks(n,s)&&od(n,e,e.next,s)&&$r(n,s)&&$r(s,n)&&(t.push(n.i,e.i,s.i),qr(e),qr(e.next),e=i=s),e=e.next}while(e!==i);return cs(e)}function Xf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&tp(a,o)){let l=ld(a,o);a=cs(a,a.next),l=cs(l,l.next),Xr(a,t,e,n,s,r,0),Xr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function $f(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=rd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Qf(c))}s.sort(qf);for(let r=0;r<s.length;r++)e=Yf(s[r],e);return e}function qf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Yf(i,t){let e=Zf(i,t);if(!e)return t;let n=ld(e,i);return cs(n,n.next),cs(e,e.next)}function Zf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ks(i,e))return e;do{if(Ks(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ad(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);$r(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Jf(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Jf(i,t){return Ne(i.prev,i,t.prev)<0&&Ne(t.next,i,i.next)<0}function Kf(i,t,e,n){let s=i;do s.z===0&&(s.z=Mc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,jf(s)}function jf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Mc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Qf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ad(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Tr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&ad(i,t,e,n,s,r,a,o)}function tp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ep(i,t)&&($r(i,t)&&$r(t,i)&&np(i,t)&&(Ne(i.prev,i,t.prev)||Ne(i,t.prev,t))||Ks(i,t)&&Ne(i.prev,i,i.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ks(i,t){return i.x===t.x&&i.y===t.y}function od(i,t,e,n){let s=Ya(Ne(i,t,e)),r=Ya(Ne(i,t,n)),a=Ya(Ne(e,n,i)),o=Ya(Ne(e,n,t));return!!(s!==r&&a!==o||s===0&&qa(i,e,t)||r===0&&qa(i,n,t)||a===0&&qa(e,i,n)||o===0&&qa(e,t,n))}function qa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ya(i){return i>0?1:i<0?-1:0}function ep(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&od(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function $r(i,t){return Ne(i.prev,i,i.next)<0?Ne(i,t,i.next)>=0&&Ne(i,i.prev,t)>=0:Ne(i,t,i.prev)<0||Ne(i,i.next,t)<0}function np(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ld(i,t){let e=Sc(i.i,i.x,i.y),n=Sc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function cu(i,t,e,n){let s=Sc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ip(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var bc=class{static triangulate(t,e,n=2){return Hf(t,e,n)}},Qn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];hu(t),uu(n,t);let a=t.length;e.forEach(hu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,uu(n,e[l]);let o=bc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function hu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function uu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Yr=class i extends Ee{constructor(t=new bi([new Ct(.5,.5),new Ct(-.5,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:sp,E,_=!1,w,T,P,v;if(p){E=p.getSpacedPoints(h),_=!0,u=!1;let ut=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,ut),T=new N,P=new N,v=new N}u||(g=0,d=0,m=0,x=0);let A=o.extractPoints(c),L=A.shape,k=A.holes;if(!Qn.isClockWise(L)){L=L.reverse();for(let ut=0,yt=k.length;ut<yt;ut++){let Tt=k[ut];Qn.isClockWise(Tt)&&(k[ut]=Tt.reverse())}}function et(ut){let Tt=10000000000000001e-36,xt=ut[0];for(let wt=1;wt<=ut.length;wt++){let qt=wt%ut.length,Zt=ut[qt],jt=Zt.x-xt.x,Qt=Zt.y-xt.y,H=jt*jt+Qt*Qt,me=Math.max(Math.abs(Zt.x),Math.abs(Zt.y),Math.abs(xt.x),Math.abs(xt.y)),le=Tt*me*me;if(H<=le){ut.splice(qt,1),wt--;continue}xt=Zt}}et(L),k.forEach(et);let U=k.length,Y=L;for(let ut=0;ut<U;ut++){let yt=k[ut];L=L.concat(yt)}function it(ut,yt,Tt){return yt||se("ExtrudeGeometry: vec does not exist"),ut.clone().addScaledVector(yt,Tt)}let rt=L.length;function ft(ut,yt,Tt){let xt,wt,qt,Zt=ut.x-yt.x,jt=ut.y-yt.y,Qt=Tt.x-ut.x,H=Tt.y-ut.y,me=Zt*Zt+jt*jt,le=Zt*H-jt*Qt;if(Math.abs(le)>Number.EPSILON){let C=Math.sqrt(me),y=Math.sqrt(Qt*Qt+H*H),tt=yt.x-jt/C,b=yt.y+Zt/C,R=Tt.x-H/y,J=Tt.y+Qt/y,W=((R-tt)*H-(J-b)*Qt)/(Zt*H-jt*Qt);xt=tt+Zt*W-ut.x,wt=b+jt*W-ut.y;let z=xt*xt+wt*wt;if(z<=2)return new Ct(xt,wt);qt=Math.sqrt(z/2)}else{let C=!1;Zt>Number.EPSILON?Qt>Number.EPSILON&&(C=!0):Zt<-Number.EPSILON?Qt<-Number.EPSILON&&(C=!0):Math.sign(jt)===Math.sign(H)&&(C=!0),C?(xt=-jt,wt=Zt,qt=Math.sqrt(me)):(xt=Zt,wt=jt,qt=Math.sqrt(me/2))}return new Ct(xt/qt,wt/qt)}let F=[];for(let ut=0,yt=Y.length,Tt=yt-1,xt=ut+1;ut<yt;ut++,Tt++,xt++)Tt===yt&&(Tt=0),xt===yt&&(xt=0),F[ut]=ft(Y[ut],Y[Tt],Y[xt]);let nt=[],X,Q=F.concat();for(let ut=0,yt=U;ut<yt;ut++){let Tt=k[ut];X=[];for(let xt=0,wt=Tt.length,qt=wt-1,Zt=xt+1;xt<wt;xt++,qt++,Zt++)qt===wt&&(qt=0),Zt===wt&&(Zt=0),X[xt]=ft(Tt[xt],Tt[qt],Tt[Zt]);nt.push(X),Q=Q.concat(X)}let Rt;if(g===0)Rt=Qn.triangulateShape(Y,k);else{let ut=[],yt=[];for(let Tt=0;Tt<g;Tt++){let xt=Tt/g,wt=d*Math.cos(xt*Math.PI/2),qt=m*Math.sin(xt*Math.PI/2)+x;for(let Zt=0,jt=Y.length;Zt<jt;Zt++){let Qt=it(Y[Zt],F[Zt],qt);pt(Qt.x,Qt.y,-wt),xt===0&&ut.push(Qt)}for(let Zt=0,jt=U;Zt<jt;Zt++){let Qt=k[Zt];X=nt[Zt];let H=[];for(let me=0,le=Qt.length;me<le;me++){let C=it(Qt[me],X[me],qt);pt(C.x,C.y,-wt),xt===0&&H.push(C)}xt===0&&yt.push(H)}}Rt=Qn.triangulateShape(ut,yt)}let Kt=Rt.length,Lt=m+x;for(let ut=0;ut<rt;ut++){let yt=u?it(L[ut],Q[ut],Lt):L[ut];_?(P.copy(w.normals[0]).multiplyScalar(yt.x),T.copy(w.binormals[0]).multiplyScalar(yt.y),v.copy(E[0]).add(P).add(T),pt(v.x,v.y,v.z)):pt(yt.x,yt.y,0)}for(let ut=1;ut<=h;ut++)for(let yt=0;yt<rt;yt++){let Tt=u?it(L[yt],Q[yt],Lt):L[yt];_?(P.copy(w.normals[ut]).multiplyScalar(Tt.x),T.copy(w.binormals[ut]).multiplyScalar(Tt.y),v.copy(E[ut]).add(P).add(T),pt(v.x,v.y,v.z)):pt(Tt.x,Tt.y,f/h*ut)}for(let ut=g-1;ut>=0;ut--){let yt=ut/g,Tt=d*Math.cos(yt*Math.PI/2),xt=m*Math.sin(yt*Math.PI/2)+x;for(let wt=0,qt=Y.length;wt<qt;wt++){let Zt=it(Y[wt],F[wt],xt);pt(Zt.x,Zt.y,f+Tt)}for(let wt=0,qt=k.length;wt<qt;wt++){let Zt=k[wt];X=nt[wt];for(let jt=0,Qt=Zt.length;jt<Qt;jt++){let H=it(Zt[jt],X[jt],xt);_?pt(H.x,H.y+E[h-1].y,E[h-1].x+Tt):pt(H.x,H.y,f+Tt)}}}Xt(),at();function Xt(){let ut=s.length/3;if(u){let yt=0,Tt=rt*yt;for(let xt=0;xt<Kt;xt++){let wt=Rt[xt];Yt(wt[2]+Tt,wt[1]+Tt,wt[0]+Tt)}yt=h+g*2,Tt=rt*yt;for(let xt=0;xt<Kt;xt++){let wt=Rt[xt];Yt(wt[0]+Tt,wt[1]+Tt,wt[2]+Tt)}}else{for(let yt=0;yt<Kt;yt++){let Tt=Rt[yt];Yt(Tt[2],Tt[1],Tt[0])}for(let yt=0;yt<Kt;yt++){let Tt=Rt[yt];Yt(Tt[0]+rt*h,Tt[1]+rt*h,Tt[2]+rt*h)}}n.addGroup(ut,s.length/3-ut,0)}function at(){let ut=s.length/3,yt=0;ct(Y,yt),yt+=Y.length;for(let Tt=0,xt=k.length;Tt<xt;Tt++){let wt=k[Tt];ct(wt,yt),yt+=wt.length}n.addGroup(ut,s.length/3-ut,1)}function ct(ut,yt){let Tt=ut.length;for(;--Tt>=0;){let xt=Tt,wt=Tt-1;wt<0&&(wt=ut.length-1);for(let qt=0,Zt=h+g*2;qt<Zt;qt++){let jt=rt*qt,Qt=rt*(qt+1),H=yt+xt+jt,me=yt+wt+jt,le=yt+wt+Qt,C=yt+xt+Qt;It(H,me,le,C)}}}function pt(ut,yt,Tt){l.push(ut),l.push(yt),l.push(Tt)}function Yt(ut,yt,Tt){kt(ut),kt(yt),kt(Tt);let xt=s.length/3,wt=S.generateTopUV(n,s,xt-3,xt-2,xt-1);pe(wt[0]),pe(wt[1]),pe(wt[2])}function It(ut,yt,Tt,xt){kt(ut),kt(yt),kt(xt),kt(yt),kt(Tt),kt(xt);let wt=s.length/3,qt=S.generateSideWallUV(n,s,wt-6,wt-3,wt-2,wt-1);pe(qt[0]),pe(qt[1]),pe(qt[3]),pe(qt[1]),pe(qt[2]),pe(qt[3])}function kt(ut){s.push(l[ut*3+0]),s.push(l[ut*3+1]),s.push(l[ut*3+2])}function pe(ut){r.push(ut.x),r.push(ut.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return rp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new So[s.type]().fromJSON(s)),new i(n,t.options)}},sp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Ct(r,a),new Ct(o,l),new Ct(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Ct(a,1-l),new Ct(c,1-f),new Ct(u,1-m),new Ct(x,1-p)]:[new Ct(o,1-l),new Ct(h,1-f),new Ct(d,1-m),new Ct(g,1-p)]}};function rp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Zr=class i extends Ee{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=de(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,f=new N,u=new Ct,d=new N,m=new N,x=new N,g=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let S=0;S<=e;S++){let E=n+S*h*s,_=Math.sin(E),w=Math.cos(E);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*_,f.y=t[T].y,f.z=t[T].x*w,a.push(f.x,f.y,f.z),u.x=S/e,u.y=T/(t.length-1),o.push(u.x,u.y);let P=l[3*T+0]*_,v=l[3*T+1],A=l[3*T+0]*w;c.push(P,v,A)}}for(let S=0;S<e;S++)for(let E=0;E<t.length-1;E++){let _=E+S*t.length,w=_,T=_+t.length,P=_+t.length+1,v=_+1;r.push(w,T,v),r.push(P,v,T)}this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("uv",new ce(o,2)),this.setAttribute("normal",new ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Jr=class i extends vo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Rn=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let S=p*u-a;for(let E=0;E<c;E++){let _=E*f-r;m.push(_,-S,0),x.push(0,0,1),g.push(E/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let E=S+c*p,_=S+c*(p+1),w=S+1+c*(p+1),T=S+1+c*p;d.push(E,_,T),d.push(_,w,T)}this.setIndex(d),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var hs=class i extends Ee{constructor(t=new bi([new Ct(0,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(r,3)),this.setAttribute("uv",new ce(a,2));function c(h){let f=s.length/3,u=h.extractPoints(e),d=u.shape,m=u.holes;Qn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let S=m[g];Qn.isClockWise(S)===!0&&(m[g]=S.reverse())}let x=Qn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let S=m[g];d=d.concat(S)}for(let g=0,p=d.length;g<p;g++){let S=d[g];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let g=0,p=x.length;g<p;g++){let S=x[g],E=S[0]+f,_=S[1]+f,w=S[2]+f;n.push(E,_,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return ap(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function ap(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Kr=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new N,u=new N,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let S=[],E=p/n,_=a+E*o,w=t*Math.cos(_),T=Math.sqrt(t*t-w*w),P=0;p===0&&a===0?P=.5/e:p===n&&l===Math.PI&&(P=-.5/e);for(let v=0;v<=e;v++){let A=v/e,L=s+A*r;f.x=-T*Math.cos(L),f.y=w,f.z=T*Math.sin(L),m.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),g.push(A+P,1-E),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let E=h[p][S+1],_=h[p][S],w=h[p+1][S],T=h[p+1][S+1];(p!==0||a>0)&&d.push(E,_,T),(p!==n-1||l<Math.PI)&&d.push(_,w,T)}this.setIndex(d),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var jr=class i extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new N,d=new N,m=new N;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let p=0;p<=s;p++){let S=p/s*r;d.x=(t+e*Math.cos(g))*Math.cos(S),d.y=(t+e*Math.cos(g))*Math.sin(S),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(p/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let p=(s+1)*x+g-1,S=(s+1)*(x-1)+g-1,E=(s+1)*(x-1)+g,_=(s+1)*x+g;l.push(p,S,_),l.push(S,E,_)}this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var us=class i extends Ee{constructor(t=new Gr(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new N,l=new N,c=new Ct,h=new N,f=[],u=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(d,2));function x(){for(let E=0;E<e;E++)g(E);g(r===!1?e:0),S(),p()}function g(E){h=t.getPointAt(E/e,h);let _=a.normals[E],w=a.binormals[E];for(let T=0;T<=s;T++){let P=T/s*Math.PI*2,v=Math.sin(P),A=-Math.cos(P);l.x=A*_.x+v*w.x,l.y=A*_.y+v*w.y,l.z=A*_.z+v*w.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=e;E++)for(let _=1;_<=s;_++){let w=(s+1)*(E-1)+(_-1),T=(s+1)*E+(_-1),P=(s+1)*E+_,v=(s+1)*(E-1)+_;m.push(w,T,v),m.push(T,P,v)}}function S(){for(let E=0;E<=e;E++)for(let _=0;_<=s;_++)c.x=E/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new So[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function _s(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(du(s))s.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(du(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function hn(i){let t={};for(let e=0;e<i.length;e++){let n=_s(i[e]);for(let s in n)t[s]=n[s]}return t}function du(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function op(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var cd={clone:_s,merge:hn},lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lp,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=op(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new De().fromArray(s.value);break;case"m3":this.uniforms[n].value=new oe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wo=class extends Je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ze=class extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Qr=class extends si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=ko,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},To=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Eo=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ns(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function mc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Vi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ao=class extends Vi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xc,endingEnd:xc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case vc:r=t,o=2*e-n;break;case yc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vc:a=t,l=2*n-e;break;case yc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,S=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,E=(-1-d)*g+(1.5+d)*x+.5*m,_=d*g-d*x;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+S*a[c+w]+E*a[l+w]+_*a[f+w];return r}},Co=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Ro=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Io=class extends Vi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(n-e)/(s-e),x=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*m;return r}let u=o*2,d=t-1;for(let m=0;m!==o;++m){let x=a[c+m],g=a[l+m],p=d*u+m*2,S=f[p],E=f[p+1],_=t*u+m*2,w=h[_],T=h[_+1],P=up(n,e,S,w,s);r[m]=hd(P,x,E,T,g)}return r}};function hd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function hp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function up(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=hd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=hp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ns(e,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ns(t.times,Array),values:Ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),mc(t.settings)&&(n.settings={inTangents:Ns(t.settings.inTangents,Array),outTangents:Ns(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Io(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Cr:e=this.InterpolantFactoryMethodDiscrete;break;case lo:e=this.InterpolantFactoryMethodLinear;break;case Ka:e=this.InterpolantFactoryMethodSmooth;break;case _c:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ee("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return Ka;case this.InterpolantFactoryMethodBezier:return _c}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;mc(this.settings)&&(fu(this.settings.inTangents,t),fu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(se("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(se("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){se("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){se("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ff(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){se("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ka,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let m=0;m!==n;++m){let x=e[f+m];if(x!==e[u+m]||x!==e[d+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,mc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function fu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=lo;var Gi=class extends Sn{constructor(t,e,n){super(t,e,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Cr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};Po.prototype.ValueTypeName="color";var Lo=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};Lo.prototype.ValueTypeName="number";var Do=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)An.slerpFlat(r,0,a,c-o,a,c,l);return r}},ta=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Do(this.times,this.values,this.getValueSize(),t)}};ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Sn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Cr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};No.prototype.ValueTypeName="vector";var Uo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ud=new Uo,Fo=class{constructor(t){this.manager=t!==void 0?t:ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var js=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ds=class extends js{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},gc=new ve,pu=new N,mu=new N,ea=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(pu),mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(gc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===zs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Za=new N,Ja=new An,Kn=new N,na=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Za,Ja,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ja,Kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Za,Ja,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ja,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new N,gu=new Ct,_u=new Ct,Ve=class extends na{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return co*2*Math.atan(Math.tan(Wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,gu,_u),e.subVectors(_u,gu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Wl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var wc=class extends ea{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0}},ia=class extends js{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Qs=class extends na{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Tc=class extends ea{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wi=class extends js{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new Tc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Us=-90,Fs=1,Oo=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(Us,Fs,t,e);s.layers=this.layers,this.add(s);let r=new Ve(Us,Fs,t,e);r.layers=this.layers,this.add(r);let a=new Ve(Us,Fs,t,e);a.layers=this.layers,this.add(a);let o=new Ve(Us,Fs,t,e);o.layers=this.layers,this.add(o);let l=new Ve(Us,Fs,t,e);l.layers=this.layers,this.add(l);let c=new Ve(Us,Fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Bo=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Kc="\\[\\]\\.:\\/",dp=new RegExp("["+Kc+"]","g"),jc="[^"+Kc+"]",fp="[^"+Kc.replace("\\.","")+"]",pp=/((?:WC+[\/:])*)/.source.replace("WC",jc),mp=/(WCOD+)?/.source.replace("WCOD",fp),gp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jc),_p=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jc),xp=new RegExp("^"+pp+mp+gp+_p+"$"),vp=["material","materials","bones","map"],Ec=class{constructor(t,e,n){let s=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dp,"")}static parseTrackName(t){let e=xp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;se("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=Ec;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ev=new Float32Array(1);var xu=new ve,fs=class{constructor(t,e,n=0,s=1/0){this.ray=new Ws(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xu),this}intersectObject(t,e=!0,n=[]){return Ac(t,this,n,e),n.sort(vu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ac(t[s],this,n,e);return n.sort(vu),n}};function vu(i,t){return i.distance-t.distance}function Ac(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ac(r[a],t,e,!0)}}var sh=class sh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};sh.prototype.isMatrix2=!0;var Cc=sh;function Qc(i,t,e,n){let s=yp(n);switch(e){case Xc:return i*t;case qo:return i*t/s.components*s.byteLength;case Yo:return i*t/s.components*s.byteLength;case Zi:return i*t*2/s.components*s.byteLength;case Zo:return i*t*2/s.components*s.byteLength;case $c:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case Jo:return i*t*4/s.components*s.byteLength;case oa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jo:case tl:return Math.max(i,16)*Math.max(t,8)/4;case Ko:case Qo:return Math.max(i,8)*Math.max(t,8)/2;case el:case nl:case sl:case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case il:case ua:case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ml:case Sl:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wl:case Tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case da:case El:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yp(i){switch(i){case _n:case Hc:return{byteLength:1,components:1};case nr:case Vc:case Xn:return{byteLength:2,components:1};case Xo:case $o:return{byteLength:2,components:4};case Wn:case Wo:case In:return{byteLength:4,components:1};case Gc:case Wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Dd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ap(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let x=f[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Kp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ym=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Em=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Im=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_g=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ug=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Og=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:Cp,alphahash_pars_fragment:Rp,alphamap_fragment:Ip,alphamap_pars_fragment:Pp,alphatest_fragment:Lp,alphatest_pars_fragment:Dp,aomap_fragment:Np,aomap_pars_fragment:Up,batching_pars_vertex:Fp,batching_vertex:Op,begin_vertex:Bp,beginnormal_vertex:zp,bsdfs:kp,iridescence_fragment:Hp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Xp,clipping_planes_vertex:$p,color_fragment:qp,color_pars_fragment:Yp,color_pars_vertex:Zp,color_vertex:Jp,common:Kp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:tm,displacementmap_vertex:em,emissivemap_fragment:nm,emissivemap_pars_fragment:im,colorspace_fragment:sm,colorspace_pars_fragment:rm,envmap_fragment:am,envmap_common_pars_fragment:om,envmap_pars_fragment:lm,envmap_pars_vertex:cm,envmap_physical_pars_fragment:ym,envmap_vertex:hm,fog_vertex:um,fog_pars_vertex:dm,fog_fragment:fm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:xm,lights_pars_begin:vm,lights_toon_fragment:Mm,lights_toon_pars_fragment:Sm,lights_phong_fragment:bm,lights_phong_pars_fragment:wm,lights_physical_fragment:Tm,lights_physical_pars_fragment:Em,lights_fragment_begin:Am,lights_fragment_maps:Cm,lights_fragment_end:Rm,lightprobes_pars_fragment:Im,logdepthbuf_fragment:Pm,logdepthbuf_pars_fragment:Lm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Nm,map_fragment:Um,map_pars_fragment:Fm,map_particle_fragment:Om,map_particle_pars_fragment:Bm,metalnessmap_fragment:zm,metalnessmap_pars_fragment:km,morphinstance_vertex:Hm,morphcolor_vertex:Vm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:$m,normal_fragment_maps:qm,normal_pars_fragment:Ym,normal_pars_vertex:Zm,normal_vertex:Jm,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:tg,iridescence_pars_fragment:eg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:sg,project_vertex:rg,dithering_fragment:ag,dithering_pars_fragment:og,roughnessmap_fragment:lg,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:ug,shadowmap_vertex:dg,shadowmask_pars_fragment:fg,skinbase_vertex:pg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:_g,specularmap_fragment:xg,specularmap_pars_fragment:vg,tonemapping_fragment:yg,tonemapping_pars_fragment:Mg,transmission_fragment:Sg,transmission_pars_fragment:bg,uv_pars_fragment:wg,uv_pars_vertex:Tg,uv_vertex:Eg,worldpos_vertex:Ag,background_vert:Cg,background_frag:Rg,backgroundCube_vert:Ig,backgroundCube_frag:Pg,cube_vert:Lg,cube_frag:Dg,depth_vert:Ng,depth_frag:Ug,distance_vert:Fg,distance_frag:Og,equirect_vert:Bg,equirect_frag:zg,linedashed_vert:kg,linedashed_frag:Hg,meshbasic_vert:Vg,meshbasic_frag:Gg,meshlambert_vert:Wg,meshlambert_frag:Xg,meshmatcap_vert:$g,meshmatcap_frag:qg,meshnormal_vert:Yg,meshnormal_frag:Zg,meshphong_vert:Jg,meshphong_frag:Kg,meshphysical_vert:jg,meshphysical_frag:Qg,meshtoon_vert:t0,meshtoon_frag:e0,points_vert:n0,points_frag:i0,shadow_vert:s0,shadow_frag:r0,sprite_vert:a0,sprite_frag:o0},Ot={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},ci={basic:{uniforms:hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:hn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:hn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ne(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:hn([Ot.points,Ot.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:hn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:hn([Ot.common,Ot.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:hn([Ot.sprite,Ot.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:hn([Ot.common,Ot.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:hn([Ot.lights,Ot.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};ci.physical={uniforms:hn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var Rl={r:0,b:0,g:0},l0=new ve,Nd=new oe;Nd.set(-1,0,0,0,1,0,0,0,1);function c0(i,t,e,n,s,r){let a=new ne(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){let _=S.backgroundBlurriness>0;E=t.get(E,_)}return E}function m(S){let E=!1,_=d(S);_===null?g(a,o):_&&_.isColor&&(g(_,1),E=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,E){let _=d(E);_&&(_.isCubeTexture||_.mapping===ra)?(c===void 0&&(c=new fe(new Cn(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:_s(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(l0.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nd),c.material.toneMapped=ge.getTransfer(_.colorSpace)!==Me,(h!==_||f!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new fe(new Rn(2,2),new Je({name:"BackgroundMaterial",uniforms:_s(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ge.getTransfer(_.colorSpace)!==Me,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,E){S.getRGB(Rl,Jc(i)),e.buffers.color.setClear(Rl.r,Rl.g,Rl.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:m,addToRenderList:x,dispose:p}}function h0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(k,B,et,U,Y){let it=!1,rt=f(k,U,et,B);r!==rt&&(r=rt,c(r.object)),it=d(k,U,et,Y),it&&m(k,U,et,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(it||a)&&(a=!1,_(k,B,et,U),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(k){return i.bindVertexArray(k)}function h(k){return i.deleteVertexArray(k)}function f(k,B,et,U){let Y=U.wireframe===!0,it=n[B.id];it===void 0&&(it={},n[B.id]=it);let rt=k.isInstancedMesh===!0?k.id:0,ft=it[rt];ft===void 0&&(ft={},it[rt]=ft);let F=ft[et.id];F===void 0&&(F={},ft[et.id]=F);let nt=F[Y];return nt===void 0&&(nt=u(l()),F[Y]=nt),nt}function u(k){let B=[],et=[],U=[];for(let Y=0;Y<e;Y++)B[Y]=0,et[Y]=0,U[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:et,attributeDivisors:U,object:k,attributes:{},index:null}}function d(k,B,et,U){let Y=r.attributes,it=B.attributes,rt=0,ft=et.getAttributes();for(let F in ft)if(ft[F].location>=0){let X=Y[F],Q=it[F];if(Q===void 0&&(F==="instanceMatrix"&&k.instanceMatrix&&(Q=k.instanceMatrix),F==="instanceColor"&&k.instanceColor&&(Q=k.instanceColor)),X===void 0||X.attribute!==Q||Q&&X.data!==Q.data)return!0;rt++}return r.attributesNum!==rt||r.index!==U}function m(k,B,et,U){let Y={},it=B.attributes,rt=0,ft=et.getAttributes();for(let F in ft)if(ft[F].location>=0){let X=it[F];X===void 0&&(F==="instanceMatrix"&&k.instanceMatrix&&(X=k.instanceMatrix),F==="instanceColor"&&k.instanceColor&&(X=k.instanceColor));let Q={};Q.attribute=X,X&&X.data&&(Q.data=X.data),Y[F]=Q,rt++}r.attributes=Y,r.attributesNum=rt,r.index=U}function x(){let k=r.newAttributes;for(let B=0,et=k.length;B<et;B++)k[B]=0}function g(k){p(k,0)}function p(k,B){let et=r.newAttributes,U=r.enabledAttributes,Y=r.attributeDivisors;et[k]=1,U[k]===0&&(i.enableVertexAttribArray(k),U[k]=1),Y[k]!==B&&(i.vertexAttribDivisor(k,B),Y[k]=B)}function S(){let k=r.newAttributes,B=r.enabledAttributes;for(let et=0,U=B.length;et<U;et++)B[et]!==k[et]&&(i.disableVertexAttribArray(et),B[et]=0)}function E(k,B,et,U,Y,it,rt){rt===!0?i.vertexAttribIPointer(k,B,et,Y,it):i.vertexAttribPointer(k,B,et,U,Y,it)}function _(k,B,et,U){x();let Y=U.attributes,it=et.getAttributes(),rt=B.defaultAttributeValues;for(let ft in it){let F=it[ft];if(F.location>=0){let nt=Y[ft];if(nt===void 0&&(ft==="instanceMatrix"&&k.instanceMatrix&&(nt=k.instanceMatrix),ft==="instanceColor"&&k.instanceColor&&(nt=k.instanceColor)),nt!==void 0){let X=nt.normalized,Q=nt.itemSize,Rt=t.get(nt);if(Rt===void 0)continue;let Kt=Rt.buffer,Lt=Rt.type,Xt=Rt.bytesPerElement,at=Lt===i.INT||Lt===i.UNSIGNED_INT||nt.gpuType===Wo;if(nt.isInterleavedBufferAttribute){let ct=nt.data,pt=ct.stride,Yt=nt.offset;if(ct.isInstancedInterleavedBuffer){for(let It=0;It<F.locationSize;It++)p(F.location+It,ct.meshPerAttribute);k.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let It=0;It<F.locationSize;It++)g(F.location+It);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let It=0;It<F.locationSize;It++)E(F.location+It,Q/F.locationSize,Lt,X,pt*Xt,(Yt+Q/F.locationSize*It)*Xt,at)}else{if(nt.isInstancedBufferAttribute){for(let ct=0;ct<F.locationSize;ct++)p(F.location+ct,nt.meshPerAttribute);k.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ct=0;ct<F.locationSize;ct++)g(F.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let ct=0;ct<F.locationSize;ct++)E(F.location+ct,Q/F.locationSize,Lt,X,Q*Xt,Q/F.locationSize*ct*Xt,at)}}else if(rt!==void 0){let X=rt[ft];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(F.location,X);break;case 3:i.vertexAttrib3fv(F.location,X);break;case 4:i.vertexAttrib4fv(F.location,X);break;default:i.vertexAttrib1fv(F.location,X)}}}}S()}function w(){A();for(let k in n){let B=n[k];for(let et in B){let U=B[et];for(let Y in U){let it=U[Y];for(let rt in it)h(it[rt].object),delete it[rt];delete U[Y]}}delete n[k]}}function T(k){if(n[k.id]===void 0)return;let B=n[k.id];for(let et in B){let U=B[et];for(let Y in U){let it=U[Y];for(let rt in it)h(it[rt].object),delete it[rt];delete U[Y]}}delete n[k.id]}function P(k){for(let B in n){let et=n[B];for(let U in et){let Y=et[U];if(Y[k.id]===void 0)continue;let it=Y[k.id];for(let rt in it)h(it[rt].object),delete it[rt];delete Y[k.id]}}}function v(k){for(let B in n){let et=n[B],U=k.isInstancedMesh===!0?k.id:0,Y=et[U];if(Y!==void 0){for(let it in Y){let rt=Y[it];for(let ft in rt)h(rt[ft].object),delete rt[ft];delete Y[it]}delete et[U],Object.keys(et).length===0&&delete n[B]}}}function A(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function u0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function d0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Pn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let v=P===Xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==_n&&P!==In&&!v&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ee("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:_,maxSamples:w,samples:T}}function f0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Bn,o=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let S=r?0:n,E=S*4,_=p.clippingState||null;l.value=_,_=h(m,u,E,d);for(let w=0;w!==E;++w)_[w]=e[w];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,_=d;E!==x;++E,_+=4)a.copy(f[E]).applyMatrix4(S,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var ar=4,p0=6,m0=20,g0=256,pa=new Qs,dd=new ne,rh=null,ah=0,oh=0,lh=!1,_0=new N,xs=new N,Ji=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=_0}=r;rh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(rh,ah,oh),this._renderer.xr.enabled=lh,t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Xn,format:Pn,colorSpace:Rr,depthBuffer:!1},s=fd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=x0(r)),this._blurMaterial=y0(r,t,e),this._ggxMaterial=v0(r,t,e)}return s}_compileMaterial(t){let e=new fe(new Ee,t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,s,r){let l=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(dd),f.toneMapping=Gn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fe(new Cn,new Hn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,p=!0):(g.color.copy(dd),p=!0);for(let E=0;E<6;E++){let _=E%3;_===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):_===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let w=this._cubeSize;rr(s,_*w,E>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(x,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===$i||t.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;rr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-ar?n-m+ar:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,rr(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(o,pa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,rr(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(o,pa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-ar?s-this._lodMax+ar:0),u=4*(this._cubeSize-h);rr(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,pa)}};function x0(i){let t=[],e=[],n=i,s=i-ar+1+p0;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),x=new Float32Array(d*u*f);for(let p=0;p<f;p++){let S=p%3*2/3-1,E=p>2?0:-1,_=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];m.set(_,d*u*p);for(let w=0;w<u;w++){let T=h[w*2]*2-1,P=h[w*2+1]*2-1;p===0?xs.set(1,P,T):p===1?xs.set(-T,1,-P):p===2?xs.set(-T,P,1):p===3?xs.set(-1,P,-T):p===4?xs.set(-T,-1,P):xs.set(T,P,-1),xs.toArray(x,(p*u+w)*d)}}let g=new Ee;g.setAttribute("position",new we(m,d)),g.setAttribute("outputDirection",new we(x,d)),e.push(new fe(g,null)),n>ar&&n--}return{lodMeshes:e,sizeLods:t}}function fd(i,t,e){let n=new gn(i,t,e);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function v0(i,t,e){return new Je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:g0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function y0(i,t,e){return new Je({name:"SphericalGaussianBlur",defines:{SAMPLES:m0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function pd(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function md(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Pl=class extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Or(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Cn(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ai});r.uniforms.tEquirect.value=e;let a=new fe(s,r),o=e.minFilter;return e.minFilter===qi&&(e.minFilter=en),new Oo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function M0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Ho||d===Vo)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new Pl(m.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,m=d===Ho||d===Vo,x=d===$i||d===gs;if(m||x){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Ji(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let S=u.image;return m&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new Ji(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Ho?u.mapping=$i:d===Vo&&(u.mapping=gs),u}function l(u){let d=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function S0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&as("WebGLRenderer: "+n+" extension not supported."),s}}}function b0(i,t,e,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,m=f.attributes.position,x=0;if(m===void 0)return;if(d!==null){let S=d.array;x=d.version;for(let E=0,_=S.length;E<_;E+=3){let w=S[E+0],T=S[E+1],P=S[E+2];u.push(w,T,T,P,P,w)}}else{let S=m.array;x=m.version;for(let E=0,_=S.length/3-1;E<_;E+=3){let w=E+0,T=E+1,P=E+2;u.push(w,T,T,P,P,w)}}let g=new(m.count>=65535?Nr:Dr)(u,1);g.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function w0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function T0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:se("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function E0(i,t,e){let n=new WeakMap,s=new De;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let A=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],E=0;d===!0&&(E=1),m===!0&&(E=2),x===!0&&(E=3);let _=o.attributes.position.count*E,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*w*4*f),P=new Lr(T,_,w,f);P.type=In,P.needsUpdate=!0;let v=E*4;for(let L=0;L<f;L++){let k=g[L],B=p[L],et=S[L],U=_*w*4*L;for(let Y=0;Y<k.count;Y++){let it=Y*v;d===!0&&(s.fromBufferAttribute(k,Y),T[U+it+0]=s.x,T[U+it+1]=s.y,T[U+it+2]=s.z,T[U+it+3]=0),m===!0&&(s.fromBufferAttribute(B,Y),T[U+it+4]=s.x,T[U+it+5]=s.y,T[U+it+6]=s.z,T[U+it+7]=0),x===!0&&(s.fromBufferAttribute(et,Y),T[U+it+8]=s.x,T[U+it+9]=s.y,T[U+it+10]=s.z,T[U+it+11]=et.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new Ct(_,w)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function A0(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var C0={[Nc]:"LINEAR_TONE_MAPPING",[Uc]:"REINHARD_TONE_MAPPING",[Fc]:"CINEON_TONE_MAPPING",[sa]:"ACES_FILMIC_TONE_MAPPING",[Bc]:"AGX_TONE_MAPPING",[zc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function R0(i,t,e,n,s,r){let a=new gn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ee;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));let h=new wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new fe(c,h),u=new Qs(-1,1,1,-1,0,1),d=null,m=null,x=!1,g,p=null,S=[],E=!1;this.setSize=function(_,w){a.setSize(_,w),o!==null&&o.setSize(_,w),l!==null&&l.setSize(_,w);for(let T=0;T<S.length;T++){let P=S[T];P.setSize&&P.setSize(_,w)}},this.setEffects=function(_){S=_,E=S.length>0&&S[0].isRenderPass===!0;let w=a.width,T=a.height;S.length>0&&o===null&&(o=new gn(w,T,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new gn(w,T,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<S.length;P++){let v=S[P];v.setSize&&v.setSize(w,T)}},this.begin=function(_,w){if(x||_.toneMapping===Gn&&S.length===0)return!1;if(p=w,w!==null){let T=w.width,P=w.height;(a.width!==T||a.height!==P)&&this.setSize(T,P)}return E===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Gn,!0},this.hasRenderPass=function(){return E},this.end=function(_,w){_.toneMapping=g,x=!0;let T=a,P=o;for(let v=0;v<S.length;v++){let A=S[v];A.enabled!==!1&&(A.render(_,P,T,w),A.needsSwap!==!1&&(T=P,P=P===o?l:o))}if(d!==_.outputColorSpace||m!==_.toneMapping){d=_.outputColorSpace,m=_.toneMapping,h.defines={},ge.getTransfer(d)===Me&&(h.defines.SRGB_TRANSFER="");let v=C0[m];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(p),_.render(f,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Ud=new dn,uh=new Hi(1,1),Fd=new Lr,Od=new fo,Bd=new Or,gd=[],_d=[],xd=new Float32Array(16),vd=new Float32Array(9),yd=new Float32Array(4);function lr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=gd[s];if(r===void 0&&(r=new Float32Array(s),gd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Nl(i,t){let e=_d[t];e===void 0&&(e=new Int32Array(t),_d[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function I0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function P0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function L0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function N0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;yd.set(n),i.uniformMatrix2fv(this.addr,!1,yd),Xe(e,n)}}function U0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;vd.set(n),i.uniformMatrix3fv(this.addr,!1,vd),Xe(e,n)}}function F0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;xd.set(n),i.uniformMatrix4fv(this.addr,!1,xd),Xe(e,n)}}function O0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function H0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function X0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uh.compareFunction=e.isReversedDepthBuffer()?Cl:Al,r=uh):r=Ud,e.setTexture2D(t||r,s)}function $0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Od,s)}function q0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bd,s)}function Y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fd,s)}function Z0(i){switch(i){case 5126:return I0;case 35664:return P0;case 35665:return L0;case 35666:return D0;case 35674:return N0;case 35675:return U0;case 35676:return F0;case 5124:case 35670:return O0;case 35667:case 35671:return B0;case 35668:case 35672:return z0;case 35669:case 35673:return k0;case 5125:return H0;case 36294:return V0;case 36295:return G0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}function J0(i,t){i.uniform1fv(this.addr,t)}function K0(i,t){let e=lr(t,this.size,2);i.uniform2fv(this.addr,e)}function j0(i,t){let e=lr(t,this.size,3);i.uniform3fv(this.addr,e)}function Q0(i,t){let e=lr(t,this.size,4);i.uniform4fv(this.addr,e)}function t_(i,t){let e=lr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function e_(i,t){let e=lr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function n_(i,t){let e=lr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function i_(i,t){i.uniform1iv(this.addr,t)}function s_(i,t){i.uniform2iv(this.addr,t)}function r_(i,t){i.uniform3iv(this.addr,t)}function a_(i,t){i.uniform4iv(this.addr,t)}function o_(i,t){i.uniform1uiv(this.addr,t)}function l_(i,t){i.uniform2uiv(this.addr,t)}function c_(i,t){i.uniform3uiv(this.addr,t)}function h_(i,t){i.uniform4uiv(this.addr,t)}function u_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=uh:a=Ud;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function d_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Od,r[a])}function f_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Bd,r[a])}function p_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Fd,r[a])}function m_(i){switch(i){case 5126:return J0;case 35664:return K0;case 35665:return j0;case 35666:return Q0;case 35674:return t_;case 35675:return e_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}var dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Z0(e.type)}},fh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m_(e.type)}},ph=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ch=/(\w+)(\])?(\[|\.)?/g;function Md(i,t){i.seq.push(t),i.map[t.id]=t}function g_(i,t,e){let n=i.name,s=n.length;for(ch.lastIndex=0;;){let r=ch.exec(n),a=ch.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Md(e,c===void 0?new dh(o,i,t):new fh(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new ph(o),Md(e,f)),e=f}}}var or=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);g_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Sd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var __=37297,x_=0;function v_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var bd=new oe;function y_(i){ge._getMatrix(bd,ge.workingColorSpace,i);let t=`mat3( ${bd.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case Ir:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+v_(i.getShaderSource(t),o)}else return r}function M_(i,t){let e=y_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var S_={[Nc]:"Linear",[Uc]:"Reinhard",[Fc]:"Cineon",[sa]:"ACESFilmic",[Bc]:"AgX",[zc]:"Neutral",[Oc]:"Custom"};function b_(i,t){let e=S_[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Il=new N;function w_(){ge.getLuminanceCoefficients(Il);let i=Il.x.toFixed(4),t=Il.y.toFixed(4),e=Il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function E_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function A_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ga(i){return i!==""}function Td(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ed(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(i){return i.replace(C_,I_)}var R_=new Map;function I_(i,t){let e=he[t];if(e===void 0){let n=R_.get(t);if(n!==void 0)e=he[n],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return mh(e)}var P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(i){return i.replace(P_,L_)}function L_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var D_={[ps]:"SHADOWMAP_TYPE_PCF",[tr]:"SHADOWMAP_TYPE_VSM"};function N_(i){return D_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var U_={[$i]:"ENVMAP_TYPE_CUBE",[gs]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE_UV"};function F_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":U_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var O_={[gs]:"ENVMAP_MODE_REFRACTION"};function B_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":O_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var z_={[ko]:"ENVMAP_BLENDING_MULTIPLY",[Hu]:"ENVMAP_BLENDING_MIX",[Vu]:"ENVMAP_BLENDING_ADD"};function k_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":z_[i.combine]||"ENVMAP_BLENDING_NONE"}function H_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function V_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=N_(e),c=F_(e),h=B_(e),f=k_(e),u=H_(e),d=T_(e),m=E_(r),x=s.createProgram(),g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ga).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ga).join(`
`),p.length>0&&(p+=`
`)):(g=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),p=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?he.tonemapping_pars_fragment:"",e.toneMapping!==Gn?b_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,M_("linearToOutputTexel",e.outputColorSpace),w_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ga).join(`
`)),a=mh(a),a=Td(a,e),a=Ed(a,e),o=mh(o),o=Td(o,e),o=Ed(o,e),a=Ad(a),o=Ad(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=S+g+a,_=S+p+o,w=Sd(s,s.VERTEX_SHADER,E),T=Sd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,w),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(k){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",et=s.getShaderInfoLog(w)||"",U=s.getShaderInfoLog(T)||"",Y=B.trim(),it=et.trim(),rt=U.trim(),ft=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ft=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,T);else{let nt=wd(s,w,"vertex"),X=wd(s,T,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Y+`
`+nt+`
`+X)}else Y!==""?ee("WebGLProgram: Program Info Log:",Y):(it===""||rt==="")&&(F=!1);F&&(k.diagnostics={runnable:ft,programLog:Y,vertexShader:{log:it,prefix:g},fragmentShader:{log:rt,prefix:p}})}s.deleteShader(w),s.deleteShader(T),v=new or(s,x),A=A_(s,x)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(x,__)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=T,this}var G_=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _h(t),e.set(t,n)),n}},_h=class{constructor(t){this.id=G_++,this.code=t,this.usedTimes=0}};function W_(i){return i===Zi||i===ua||i===da}function X_(i,t,e,n,s,r){let a=new Vs,o=new gh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,A,L,k,B,et){let U=k.fog,Y=B.geometry,it=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?k.environment:null,rt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ft=t.get(v.envMap||it,rt),F=ft&&ft.mapping===ra?ft.image.height:null,nt=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&ee("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let X=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Q=X!==void 0?X.length:0,Rt=0;Y.morphAttributes.position!==void 0&&(Rt=1),Y.morphAttributes.normal!==void 0&&(Rt=2),Y.morphAttributes.color!==void 0&&(Rt=3);let Kt,Lt,Xt,at;if(nt){let xe=ci[nt];Kt=xe.vertexShader,Lt=xe.fragmentShader}else{Kt=v.vertexShader,Lt=v.fragmentShader;let xe=o.getVertexShaderStage(v),ue=o.getFragmentShaderStage(v);o.update(v,xe,ue),Xt=xe.id,at=ue.id}let ct=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Yt=B.isInstancedMesh===!0,It=B.isBatchedMesh===!0,kt=!!v.map,pe=!!v.matcap,ut=!!ft,yt=!!v.aoMap,Tt=!!v.lightMap,xt=!!v.bumpMap&&v.wireframe===!1,wt=!!v.normalMap,qt=!!v.displacementMap,Zt=!!v.emissiveMap,jt=!!v.metalnessMap,Qt=!!v.roughnessMap,H=v.anisotropy>0,me=v.clearcoat>0,le=v.dispersion>0,C=v.retroreflectivity>0,y=v.iridescence>0,tt=v.sheen>0,b=v.transmission>0,R=H&&!!v.anisotropyMap,J=me&&!!v.clearcoatMap,W=me&&!!v.clearcoatNormalMap,z=me&&!!v.clearcoatRoughnessMap,Z=y&&!!v.iridescenceMap,q=y&&!!v.iridescenceThicknessMap,bt=tt&&!!v.sheenColorMap,ot=tt&&!!v.sheenRoughnessMap,$=!!v.specularMap,Nt=!!v.specularColorMap,Dt=!!v.specularIntensityMap,Jt=b&&!!v.transmissionMap,O=b&&!!v.thicknessMap,mt=!!v.gradientMap,st=!!v.alphaMap,Mt=v.alphaTest>0,Ut=!!v.alphaHash,gt=!!v.extensions,zt=Gn;v.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(zt=i.toneMapping);let Wt={shaderID:nt,shaderType:v.type,shaderName:v.name,vertexShader:Kt,fragmentShader:Lt,defines:v.defines,customVertexShaderID:Xt,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:It,batchingColor:It&&B._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&B.instanceColor!==null,instancingMorph:Yt&&B.morphTexture!==null,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:kt,matcap:pe,envMap:ut,envMapMode:ut&&ft.mapping,envMapCubeUVHeight:F,aoMap:yt,lightMap:Tt,bumpMap:xt,normalMap:wt,displacementMap:qt,emissiveMap:Zt,normalMapObjectSpace:wt&&v.normalMapType===Xu,normalMapTangentSpace:wt&&v.normalMapType===fa,packedNormalMap:wt&&v.normalMapType===fa&&W_(v.normalMap.format),metalnessMap:jt,roughnessMap:Qt,anisotropy:H,anisotropyMap:R,clearcoat:me,clearcoatMap:J,clearcoatNormalMap:W,clearcoatRoughnessMap:z,dispersion:le,retroreflection:C,iridescence:y,iridescenceMap:Z,iridescenceThicknessMap:q,sheen:tt,sheenColorMap:bt,sheenRoughnessMap:ot,specularMap:$,specularColorMap:Nt,specularIntensityMap:Dt,transmission:b,transmissionMap:Jt,thicknessMap:O,gradientMap:mt,opaque:v.transparent===!1&&v.blending===er&&v.alphaToCoverage===!1,alphaMap:st,alphaTest:Mt,alphaHash:Ut,combine:v.combine,mapUv:kt&&m(v.map.channel),aoMapUv:yt&&m(v.aoMap.channel),lightMapUv:Tt&&m(v.lightMap.channel),bumpMapUv:xt&&m(v.bumpMap.channel),normalMapUv:wt&&m(v.normalMap.channel),displacementMapUv:qt&&m(v.displacementMap.channel),emissiveMapUv:Zt&&m(v.emissiveMap.channel),metalnessMapUv:jt&&m(v.metalnessMap.channel),roughnessMapUv:Qt&&m(v.roughnessMap.channel),anisotropyMapUv:R&&m(v.anisotropyMap.channel),clearcoatMapUv:J&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:W&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:q&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:ot&&m(v.sheenRoughnessMap.channel),specularMapUv:$&&m(v.specularMap.channel),specularColorMapUv:Nt&&m(v.specularColorMap.channel),specularIntensityMapUv:Dt&&m(v.specularIntensityMap.channel),transmissionMapUv:Jt&&m(v.transmissionMap.channel),thicknessMapUv:O&&m(v.thicknessMap.channel),alphaMapUv:st&&m(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(wt||H),vertexNormals:!!Y.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(kt||st),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||Y.attributes.normal===void 0&&wt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Rt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:et.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:kt&&v.map.isVideoTexture===!0&&ge.getTransfer(v.map.colorSpace)===Me,decodeVideoTextureEmissive:Zt&&v.emissiveMap.isVideoTexture===!0&&ge.getTransfer(v.emissiveMap.colorSpace)===Me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ri,flipSided:v.side===nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:gt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&v.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function g(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)A.push(L),A.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(p(A,v),S(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function p(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function S(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function E(v){let A=d[v.type],L;if(A){let k=ci[A];L=cd.clone(k.uniforms)}else L=v.uniforms;return L}function _(v,A){let L=h.get(A);return L!==void 0?++L.usedTimes:(L=new V_(i,A,v,s),c.push(L),h.set(A,L)),L}function w(v){if(--v.usedTimes===0){let A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function P(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:_,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:P}}function $_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function q_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Rd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Id(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,x,g,p){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},i[t]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=m,S.materialVariant=a(u),S.groupOrder=x,S.renderOrder=u.renderOrder,S.z=g,S.group=p),t++,S}function l(u,d,m,x,g,p,S){S.reversedDepth===!0&&(g=-g);let E=o(u,d,m,x,g,p);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):e.push(E)}function c(u,d,m,x,g,p){let S=o(u,d,m,x,g,p);m.transmission>0?n.unshift(S):m.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,d){e.length>1&&e.sort(u||q_),n.length>1&&n.sort(d||Rd),s.length>1&&s.sort(d||Rd)}function f(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Y_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Id,i.set(n,[a])):s>=r.length?(a=new Id,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Z_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new ne};break;case"SpotLight":e={position:new N,direction:new N,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function J_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var K_=0;function j_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Q_(i){let t=new Z_,e=J_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new ve,a=new ve;function o(c){let h=0,f=0,u=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,S=0,E=0,_=0,w=0,T=0,P=0,v=0,A=0,L=0;c.sort(j_);for(let B=0,et=c.length;B<et;B++){let U=c[B],Y=U.color,it=U.intensity,rt=U.distance,ft=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Zi?ft=U.shadow.map.texture:ft=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=Y.r*it,f+=Y.g*it,u+=Y.b*it;else if(U.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(U.sh.coefficients[F],it);L++}else if(U.isSunLight){let F=t.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let nt=U.shadow,X=e.get(U);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[m]=X,n.sunShadowMap[m]=ft;let Q=nt.getViewportCount();for(let Rt=0;Rt<Q;Rt++)n.sunShadowMatrix[x+Rt]=nt.getMatrix(Rt),n.sunShadowCascade[x+Rt]=nt._cascadeData[Rt];x+=Q,m++}n.sun[d]=F,d++}else if(U.isDirectionalLight){let F=t.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let nt=U.shadow,X=e.get(U);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.directionalShadow[g]=X,n.directionalShadowMap[g]=ft,n.directionalShadowMatrix[g]=U.shadow.matrix,w++}n.directional[g]=F,g++}else if(U.isSpotLight){let F=t.get(U);F.position.setFromMatrixPosition(U.matrixWorld),F.color.copy(Y).multiplyScalar(it),F.distance=rt,F.coneCos=Math.cos(U.angle),F.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),F.decay=U.decay,n.spot[S]=F;let nt=U.shadow;if(U.map&&(n.spotLightMap[v]=U.map,v++,nt.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[S]=nt.matrix,U.castShadow){let X=e.get(U);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.spotShadow[S]=X,n.spotShadowMap[S]=ft,P++}S++}else if(U.isRectAreaLight){let F=t.get(U);F.color.copy(Y).multiplyScalar(it),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),n.rectArea[E]=F,E++}else if(U.isPointLight){let F=t.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),F.distance=U.distance,F.decay=U.decay,U.castShadow){let nt=U.shadow,X=e.get(U);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,X.shadowCameraNear=nt.camera.near,X.shadowCameraFar=nt.camera.far,n.pointShadow[p]=X,n.pointShadowMap[p]=ft,n.pointShadowMatrix[p]=U.shadow.matrix,T++}n.point[p]=F,p++}else if(U.isHemisphereLight){let F=t.get(U);F.skyColor.copy(U.color).multiplyScalar(it),F.groundColor.copy(U.groundColor).multiplyScalar(it),n.hemi[_]=F,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let k=n.hash;(k.sunLength!==d||k.directionalLength!==g||k.pointLength!==p||k.spotLength!==S||k.rectAreaLength!==E||k.hemiLength!==_||k.numSunShadows!==m||k.numDirectionalShadows!==w||k.numPointShadows!==T||k.numSpotShadows!==P||k.numSpotMaps!==v||k.numLightProbes!==L)&&(n.sun.length=d,n.directional.length=g,n.spot.length=S,n.rectArea.length=E,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+v-A,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,k.sunLength=d,k.directionalLength=g,k.pointLength=p,k.spotLength=S,k.rectAreaLength=E,k.hemiLength=_,k.numSunShadows=m,k.numDirectionalShadows=w,k.numPointShadows=T,k.numSpotShadows=P,k.numSpotMaps=v,k.numLightProbes=L,n.version=K_++)}function l(c,h){let f=0,u=0,d=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){let _=c[S];if(_.isSunLight){let w=n.sun[f];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),f++}else if(_.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(_.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Pd(i){let t=new Q_(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function tx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Pd(i),t.set(s,[o])):r>=a.length?(o=new Pd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ix=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],sx=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Ld=new ve,ma=new N,hh=new N;function rx(i,t,e){let n=new Xs,s=new Ct,r=new Ct,a=new De,o=new To,l=new Eo,c={},h=e.maxTextureSize,f={[Xi]:nn,[nn]:Xi,[ri]:ri},u=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:ex,fragmentShader:nx}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ee;m.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new fe(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ps;let p=this.type;this.render=function(T,P,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Su&&(ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ps);let A=i.getRenderTarget(),L=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ai),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let et=p!==this.type;et&&P.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(Y=>Y.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,Y=T.length;U<Y;U++){let it=T[U],rt=it.shadow;if(rt===void 0){ee("WebGLShadowMap:",it,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;s.copy(rt.mapSize);let ft=rt.getFrameExtents();s.multiply(ft),r.copy(rt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,rt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,rt.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(rt.camera._reversedDepth=F,rt.map===null||et===!0){if(rt.map!==null&&(rt.map.depthTexture!==null&&(rt.map.depthTexture.dispose(),rt.map.depthTexture=null),rt.map.dispose()),this.type===tr){if(it.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}rt.map=new gn(s.x,s.y,{format:Zi,type:Xn,minFilter:en,magFilter:en,generateMipmaps:!1}),rt.map.texture.name=it.name+".shadowMap",rt.map.depthTexture=new Hi(s.x,s.y,In),rt.map.depthTexture.name=it.name+".shadowMapDepth",rt.map.depthTexture.format=ti,rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=Ze,rt.map.depthTexture.magFilter=Ze}else it.isPointLight?(rt.map=new Pl(s.x),rt.map.depthTexture=new xo(s.x,Wn)):(rt.map=new gn(s.x,s.y),rt.map.depthTexture=new Hi(s.x,s.y,Wn)),rt.map.depthTexture.name=it.name+".shadowMap",rt.map.depthTexture.format=ti,this.type===ps?(rt.map.depthTexture.compareFunction=F?Cl:Al,rt.map.depthTexture.minFilter=en,rt.map.depthTexture.magFilter=en):(rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=Ze,rt.map.depthTexture.magFilter=Ze);rt.camera.updateProjectionMatrix()}rt.map.isWebGLCubeRenderTarget!==!0&&(rt.map.width!==s.x||rt.map.height!==s.y)&&rt.map.setSize(s.x,s.y);let nt=rt.map.isWebGLCubeRenderTarget?6:rt.getViewportCount();it.isPointLight!==!0&&rt.updateMatrices(it,v);for(let X=0;X<nt;X++){let Q=rt.getCamera(X);if(it.isPointLight){let Rt=rt.camera,Kt=rt.matrix,Lt=it.distance||Rt.far;Lt!==Rt.far&&(Rt.far=Lt,Rt.updateProjectionMatrix()),ma.setFromMatrixPosition(it.matrixWorld),Rt.position.copy(ma),hh.copy(Rt.position),hh.add(ix[X]),Rt.up.copy(sx[X]),Rt.lookAt(hh),Rt.updateMatrixWorld(),Kt.makeTranslation(-ma.x,-ma.y,-ma.z),Ld.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),rt._frustum.setFromProjectionMatrix(Ld,Rt.coordinateSystem,Rt.reversedDepth)}if(rt.map.isWebGLCubeRenderTarget)i.setRenderTarget(rt.map,X),i.clear();else{X===0&&(i.setRenderTarget(rt.map),i.clear());let Rt=rt.getViewport(X);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),B.viewport(a)}n=rt.getFrustum(X),_(P,v,Q,it,this.type)}rt.isPointLightShadow!==!0&&this.type===tr&&S(rt,v),rt.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,L,k)};function S(T,P){let v=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new gn(s.x,s.y,{format:Zi,type:Xn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,v,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,v,d,x,null)}function E(T,P,v,A){let L=null,k=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)L=k;else if(L=v.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let B=L.uuid,et=P.uuid,U=c[B];U===void 0&&(U={},c[B]=U);let Y=U[et];Y===void 0&&(Y=L.clone(),U[et]=Y,P.addEventListener("dispose",w)),L=Y}if(L.visible=P.visible,L.wireframe=P.wireframe,A===tr?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:f[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let B=i.properties.get(L);B.light=v}return L}function _(T,P,v,A,L){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===tr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let et=t.update(T),U=T.material;if(Array.isArray(U)){let Y=et.groups;for(let it=0,rt=Y.length;it<rt;it++){let ft=Y[it],F=U[ft.materialIndex];if(F&&F.visible){let nt=E(T,F,A,L);T.onBeforeShadow(i,T,P,v,et,nt,ft),i.renderBufferDirect(v,null,et,nt,T,ft),T.onAfterShadow(i,T,P,v,et,nt,ft)}}}else if(U.visible){let Y=E(T,U,A,L);T.onBeforeShadow(i,T,P,v,et,Y,null),i.renderBufferDirect(v,null,et,Y,T,null),T.onAfterShadow(i,T,P,v,et,Y,null)}}let B=T.children;for(let et=0,U=B.length;et<U;et++)_(B[et],P,v,A,L)}function w(T){T.target.removeEventListener("dispose",w);for(let v in c){let A=c[v],L=T.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function ax(i,t){function e(){let O=!1,mt=new De,st=null,Mt=new De(0,0,0,0);return{setMask:function(Ut){st!==Ut&&!O&&(i.colorMask(Ut,Ut,Ut,Ut),st=Ut)},setLocked:function(Ut){O=Ut},setClear:function(Ut,gt,zt,Wt,xe){xe===!0&&(Ut*=Wt,gt*=Wt,zt*=Wt),mt.set(Ut,gt,zt,Wt),Mt.equals(mt)===!1&&(i.clearColor(Ut,gt,zt,Wt),Mt.copy(mt))},reset:function(){O=!1,st=null,Mt.set(-1,0,0,0)}}}function n(){let O=!1,mt=!1,st=null,Mt=null,Ut=null;return{setReversed:function(gt){if(mt!==gt){let zt=t.get("EXT_clip_control");gt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),mt=gt;let Wt=Ut;Ut=null,this.setClear(Wt)}},getReversed:function(){return mt},setTest:function(gt){gt?ct(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(gt){st!==gt&&!O&&(i.depthMask(gt),st=gt)},setFunc:function(gt){if(mt&&(gt=id[gt]),Mt!==gt){switch(gt){case Qa:i.depthFunc(i.NEVER);break;case to:i.depthFunc(i.ALWAYS);break;case eo:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case no:i.depthFunc(i.EQUAL);break;case io:i.depthFunc(i.GEQUAL);break;case so:i.depthFunc(i.GREATER);break;case ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=gt}},setLocked:function(gt){O=gt},setClear:function(gt){Ut!==gt&&(Ut=gt,mt&&(gt=1-gt),i.clearDepth(gt))},reset:function(){O=!1,st=null,Mt=null,Ut=null,mt=!1}}}function s(){let O=!1,mt=null,st=null,Mt=null,Ut=null,gt=null,zt=null,Wt=null,xe=null;return{setTest:function(ue){O||(ue?ct(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(ue){mt!==ue&&!O&&(i.stencilMask(ue),mt=ue)},setFunc:function(ue,je,rn){(st!==ue||Mt!==je||Ut!==rn)&&(i.stencilFunc(ue,je,rn),st=ue,Mt=je,Ut=rn)},setOp:function(ue,je,rn){(gt!==ue||zt!==je||Wt!==rn)&&(i.stencilOp(ue,je,rn),gt=ue,zt=je,Wt=rn)},setLocked:function(ue){O=ue},setClear:function(ue){xe!==ue&&(i.clearStencil(ue),xe=ue)},reset:function(){O=!1,mt=null,st=null,Mt=null,Ut=null,gt=null,zt=null,Wt=null,xe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],x=null,g=!1,p=null,S=null,E=null,_=null,w=null,T=null,P=null,v=new ne(0,0,0),A=0,L=!1,k=null,B=null,et=null,U=null,Y=null,it=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,ft=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(F)[1]),rt=ft>=1):F.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),rt=ft>=2);let nt=null,X={},Q=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),Kt=new De().fromArray(Q),Lt=new De().fromArray(Rt);function Xt(O,mt,st,Mt){let Ut=new Uint8Array(4),gt=i.createTexture();i.bindTexture(O,gt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<st;zt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(mt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return gt}let at={};at[i.TEXTURE_2D]=Xt(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=Xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=Xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=Xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),a.setFunc(Bs),xt(!1),wt(Rc),ct(i.CULL_FACE),yt(ai);function ct(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function pt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Yt(O,mt){return u[O]!==mt?(i.bindFramebuffer(O,mt),u[O]=mt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function It(O,mt){let st=m,Mt=!1;if(O){st=d.get(mt),st===void 0&&(st=[],d.set(mt,st));let Ut=O.textures;if(st.length!==Ut.length||st[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,zt=Ut.length;gt<zt;gt++)st[gt]=i.COLOR_ATTACHMENT0+gt;st.length=Ut.length,Mt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(st)}function kt(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let pe={[ms]:i.FUNC_ADD,[wu]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};pe[Eu]=i.MIN,pe[Au]=i.MAX;let ut={[Cu]:i.ZERO,[Ru]:i.ONE,[Iu]:i.SRC_COLOR,[Lc]:i.SRC_ALPHA,[Fu]:i.SRC_ALPHA_SATURATE,[Nu]:i.DST_COLOR,[Lu]:i.DST_ALPHA,[Pu]:i.ONE_MINUS_SRC_COLOR,[Dc]:i.ONE_MINUS_SRC_ALPHA,[Uu]:i.ONE_MINUS_DST_COLOR,[Du]:i.ONE_MINUS_DST_ALPHA,[Ou]:i.CONSTANT_COLOR,[Bu]:i.ONE_MINUS_CONSTANT_COLOR,[zu]:i.CONSTANT_ALPHA,[ku]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(O,mt,st,Mt,Ut,gt,zt,Wt,xe,ue){if(O===ai){g===!0&&(pt(i.BLEND),g=!1);return}if(g===!1&&(ct(i.BLEND),g=!0),O!==bu){if(O!==p||ue!==L){if((S!==ms||w!==ms)&&(i.blendEquation(i.FUNC_ADD),S=ms,w=ms),ue)switch(O){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oi:i.blendFunc(i.ONE,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",O);break}else switch(O){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ic:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pc:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",O);break}E=null,_=null,T=null,P=null,v.set(0,0,0),A=0,p=O,L=ue}return}Ut=Ut||mt,gt=gt||st,zt=zt||Mt,(mt!==S||Ut!==w)&&(i.blendEquationSeparate(pe[mt],pe[Ut]),S=mt,w=Ut),(st!==E||Mt!==_||gt!==T||zt!==P)&&(i.blendFuncSeparate(ut[st],ut[Mt],ut[gt],ut[zt]),E=st,_=Mt,T=gt,P=zt),(Wt.equals(v)===!1||xe!==A)&&(i.blendColor(Wt.r,Wt.g,Wt.b,xe),v.copy(Wt),A=xe),p=O,L=!1}function Tt(O,mt){O.side===ri?pt(i.CULL_FACE):ct(i.CULL_FACE);let st=O.side===nn;mt&&(st=!st),xt(st),O.blending===er&&O.transparent===!1?yt(ai):yt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let Mt=O.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Zt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(O){k!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),k=O)}function wt(O){O!==yu?(ct(i.CULL_FACE),O!==B&&(O===Rc?i.cullFace(i.BACK):O===Mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),B=O}function qt(O){O!==et&&(rt&&i.lineWidth(O),et=O)}function Zt(O,mt,st){O?(ct(i.POLYGON_OFFSET_FILL),(U!==mt||Y!==st)&&(U=mt,Y=st,a.getReversed()&&(mt=-mt),i.polygonOffset(mt,st))):pt(i.POLYGON_OFFSET_FILL)}function jt(O){O?ct(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function Qt(O){O===void 0&&(O=i.TEXTURE0+it-1),nt!==O&&(i.activeTexture(O),nt=O)}function H(O,mt,st){st===void 0&&(nt===null?st=i.TEXTURE0+it-1:st=nt);let Mt=X[st];Mt===void 0&&(Mt={type:void 0,texture:void 0},X[st]=Mt),(Mt.type!==O||Mt.texture!==mt)&&(nt!==st&&(i.activeTexture(st),nt=st),i.bindTexture(O,mt||at[O]),Mt.type=O,Mt.texture=mt)}function me(){let O=X[nt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function le(){try{i.compressedTexImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function y(){try{i.texSubImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function tt(){try{i.texSubImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function b(){try{i.compressedTexSubImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function R(){try{i.compressedTexSubImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function J(){try{i.texStorage2D(...arguments)}catch(O){se("WebGLState:",O)}}function W(){try{i.texStorage3D(...arguments)}catch(O){se("WebGLState:",O)}}function z(){try{i.texImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function Z(){try{i.texImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function q(O){return f[O]!==void 0?f[O]:i.getParameter(O)}function bt(O,mt){f[O]!==mt&&(i.pixelStorei(O,mt),f[O]=mt)}function ot(O){Kt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Kt.copy(O))}function $(O){Lt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Lt.copy(O))}function Nt(O,mt){let st=c.get(mt);st===void 0&&(st=new WeakMap,c.set(mt,st));let Mt=st.get(O);Mt===void 0&&(Mt=i.getUniformBlockIndex(mt,O.name),st.set(O,Mt))}function Dt(O,mt){let Mt=c.get(mt).get(O);l.get(mt)!==Mt&&(i.uniformBlockBinding(mt,Mt,O.__bindingPointIndex),l.set(mt,Mt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},nt=null,X={},u={},d=new WeakMap,m=[],x=null,g=!1,p=null,S=null,E=null,_=null,w=null,T=null,P=null,v=new ne(0,0,0),A=0,L=!1,k=null,B=null,et=null,U=null,Y=null,Kt.set(0,0,i.canvas.width,i.canvas.height),Lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:pt,bindFramebuffer:Yt,drawBuffers:It,useProgram:kt,setBlending:yt,setMaterial:Tt,setFlipSided:xt,setCullFace:wt,setLineWidth:qt,setPolygonOffset:Zt,setScissorTest:jt,activeTexture:Qt,bindTexture:H,unbindTexture:me,compressedTexImage2D:le,compressedTexImage3D:C,texImage2D:z,texImage3D:Z,pixelStorei:bt,getParameter:q,updateUBOMapping:Nt,uniformBlockBinding:Dt,texStorage2D:J,texStorage3D:W,texSubImage2D:y,texSubImage3D:tt,compressedTexSubImage2D:b,compressedTexSubImage3D:R,scissor:ot,viewport:$,reset:Jt}}function ox(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap,f=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,y){return m?new OffscreenCanvas(C,y):Pr("canvas")}function g(C,y,tt){let b=1,R=le(C);if((R.width>tt||R.height>tt)&&(b=tt/Math.max(R.width,R.height)),b<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let J=Math.floor(b*R.width),W=Math.floor(b*R.height);u===void 0&&(u=x(J,W));let z=y?x(J,W):u;return z.width=J,z.height=W,z.getContext("2d").drawImage(C,0,0,J,W),ee("WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+J+"x"+W+")."),z}else return"data"in C&&ee("WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),C;return C}function p(C){return C.generateMipmaps}function S(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,y,tt,b,R,J=!1){if(C!==null){if(i[C]!==void 0)return i[C];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let W;b&&(W=t.get("EXT_texture_norm16"),W||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let z=y;if(y===i.RED&&(tt===i.FLOAT&&(z=i.R32F),tt===i.HALF_FLOAT&&(z=i.R16F),tt===i.UNSIGNED_BYTE&&(z=i.R8),tt===i.UNSIGNED_SHORT&&W&&(z=W.R16_EXT),tt===i.SHORT&&W&&(z=W.R16_SNORM_EXT)),y===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(z=i.R8UI),tt===i.UNSIGNED_SHORT&&(z=i.R16UI),tt===i.UNSIGNED_INT&&(z=i.R32UI),tt===i.BYTE&&(z=i.R8I),tt===i.SHORT&&(z=i.R16I),tt===i.INT&&(z=i.R32I)),y===i.RG&&(tt===i.FLOAT&&(z=i.RG32F),tt===i.HALF_FLOAT&&(z=i.RG16F),tt===i.UNSIGNED_BYTE&&(z=i.RG8),tt===i.UNSIGNED_SHORT&&W&&(z=W.RG16_EXT),tt===i.SHORT&&W&&(z=W.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(z=i.RG8UI),tt===i.UNSIGNED_SHORT&&(z=i.RG16UI),tt===i.UNSIGNED_INT&&(z=i.RG32UI),tt===i.BYTE&&(z=i.RG8I),tt===i.SHORT&&(z=i.RG16I),tt===i.INT&&(z=i.RG32I)),y===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(z=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(z=i.RGB16UI),tt===i.UNSIGNED_INT&&(z=i.RGB32UI),tt===i.BYTE&&(z=i.RGB8I),tt===i.SHORT&&(z=i.RGB16I),tt===i.INT&&(z=i.RGB32I)),y===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),tt===i.UNSIGNED_INT&&(z=i.RGBA32UI),tt===i.BYTE&&(z=i.RGBA8I),tt===i.SHORT&&(z=i.RGBA16I),tt===i.INT&&(z=i.RGBA32I)),y===i.RGB&&(tt===i.UNSIGNED_SHORT&&W&&(z=W.RGB16_EXT),tt===i.SHORT&&W&&(z=W.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(z=i.R11F_G11F_B10F)),y===i.RGBA){let Z=J?Ir:ge.getTransfer(R);tt===i.FLOAT&&(z=i.RGBA32F),tt===i.HALF_FLOAT&&(z=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(z=Z===Me?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&W&&(z=W.RGBA16_EXT),tt===i.SHORT&&W&&(z=W.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function w(C,y){let tt;return C?y===null||y===Wn||y===ir?tt=i.DEPTH24_STENCIL8:y===In?tt=i.DEPTH32F_STENCIL8:y===nr&&(tt=i.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Wn||y===ir?tt=i.DEPTH_COMPONENT24:y===In?tt=i.DEPTH_COMPONENT32F:y===nr&&(tt=i.DEPTH_COMPONENT16),tt}function T(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ze&&C.minFilter!==en?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function P(C){let y=C.target;y.removeEventListener("dispose",P),A(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&f.delete(y)}function v(C){let y=C.target;y.removeEventListener("dispose",v),k(y)}function A(C){let y=n.get(C);if(y.__webglInit===void 0)return;let tt=C.source,b=d.get(tt);if(b){let R=b[y.__cacheKey];R.usedTimes--,R.usedTimes===0&&L(C),Object.keys(b).length===0&&d.delete(tt)}n.remove(C)}function L(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let tt=C.source,b=d.get(tt);delete b[y.__cacheKey],a.memory.textures--}function k(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let b=0;b<6;b++){if(Array.isArray(y.__webglFramebuffer[b]))for(let R=0;R<y.__webglFramebuffer[b].length;R++)i.deleteFramebuffer(y.__webglFramebuffer[b][R]);else i.deleteFramebuffer(y.__webglFramebuffer[b]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[b])}else{if(Array.isArray(y.__webglFramebuffer))for(let b=0;b<y.__webglFramebuffer.length;b++)i.deleteFramebuffer(y.__webglFramebuffer[b]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let b=0;b<y.__webglColorRenderbuffer.length;b++)y.__webglColorRenderbuffer[b]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[b]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let tt=C.textures;for(let b=0,R=tt.length;b<R;b++){let J=n.get(tt[b]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(tt[b])}n.remove(C)}let B=0;function et(){B=0}function U(){return B}function Y(C){B=C}function it(){let C=B;return C>=s.maxTextures&&ee("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,C}function rt(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function ft(C,y){let tt=n.get(C);if(C.isVideoTexture&&H(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&tt.__version!==C.version){let b=C.image;if(b===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(b.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(tt,C,y);return}}else C.isExternalTexture&&(tt.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+y)}function F(C,y){let tt=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&tt.__version!==C.version){pt(tt,C,y);return}else C.isExternalTexture&&(tt.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+y)}function nt(C,y){let tt=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&tt.__version!==C.version){pt(tt,C,y);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+y)}function X(C,y){let tt=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&tt.__version!==C.version){Yt(tt,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+y)}let Q={[ao]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[oo]:i.MIRRORED_REPEAT},Rt={[Ze]:i.NEAREST,[Gu]:i.NEAREST_MIPMAP_NEAREST,[aa]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Go]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},Kt={[qu]:i.NEVER,[ju]:i.ALWAYS,[Yu]:i.LESS,[Al]:i.LEQUAL,[Zu]:i.EQUAL,[Cl]:i.GEQUAL,[Ju]:i.GREATER,[Ku]:i.NOTEQUAL};function Lt(C,y){if(y.type===In&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===en||y.magFilter===Go||y.magFilter===aa||y.magFilter===qi||y.minFilter===en||y.minFilter===Go||y.minFilter===aa||y.minFilter===qi)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Q[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Q[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Q[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Rt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Rt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Kt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ze||y.minFilter!==aa&&y.minFilter!==qi||y.type===In&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Xt(C,y){let tt=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",P));let b=y.source,R=d.get(b);R===void 0&&(R={},d.set(b,R));let J=rt(y);if(J!==C.__cacheKey){R[J]===void 0&&(R[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),R[J].usedTimes++;let W=R[C.__cacheKey];W!==void 0&&(R[C.__cacheKey].usedTimes--,W.usedTimes===0&&L(y)),C.__cacheKey=J,C.__webglTexture=R[J].texture}return tt}function at(C,y,tt){return Math.floor(Math.floor(C/tt)/y)}function ct(C,y,tt,b){let J=C.updateRanges;if(J.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,tt,b,y.data);else{J.sort((bt,ot)=>bt.start-ot.start);let W=0;for(let bt=1;bt<J.length;bt++){let ot=J[W],$=J[bt],Nt=ot.start+ot.count,Dt=at($.start,y.width,4),Jt=at(ot.start,y.width,4);$.start<=Nt+1&&Dt===Jt&&at($.start+$.count-1,y.width,4)===Dt?ot.count=Math.max(ot.count,$.start+$.count-ot.start):(++W,J[W]=$)}J.length=W+1;let z=e.getParameter(i.UNPACK_ROW_LENGTH),Z=e.getParameter(i.UNPACK_SKIP_PIXELS),q=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let bt=0,ot=J.length;bt<ot;bt++){let $=J[bt],Nt=Math.floor($.start/4),Dt=Math.ceil($.count/4),Jt=Nt%y.width,O=Math.floor(Nt/y.width),mt=Dt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Jt,O,mt,st,tt,b,y.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(i.UNPACK_SKIP_ROWS,q)}}function pt(C,y,tt){let b=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(b=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(b=i.TEXTURE_3D);let R=Xt(C,y),J=y.source;e.bindTexture(b,C.__webglTexture,i.TEXTURE0+tt);let W=n.get(J);if(J.version!==W.__version||R===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let st=ge.getPrimaries(ge.workingColorSpace),Mt=y.colorSpace===Ti?null:ge.getPrimaries(y.colorSpace),Ut=y.colorSpace===Ti||st===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let Z=g(y.image,!1,s.maxTextureSize);Z=me(y,Z);let q=r.convert(y.format,y.colorSpace),bt=r.convert(y.type),ot=_(y.internalFormat,q,bt,y.normalized,y.colorSpace,y.isVideoTexture);Lt(b,y);let $,Nt=y.mipmaps,Dt=y.isVideoTexture!==!0,Jt=W.__version===void 0||R===!0,O=J.dataReady,mt=T(y,Z);if(y.isDepthTexture)ot=w(y.format===Yi,y.type),Jt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,ot,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,ot,Z.width,Z.height,0,q,bt,null));else if(y.isDataTexture)if(Nt.length>0){Dt&&Jt&&e.texStorage2D(i.TEXTURE_2D,mt,ot,Nt[0].width,Nt[0].height);for(let st=0,Mt=Nt.length;st<Mt;st++)$=Nt[st],Dt?O&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,$.width,$.height,q,bt,$.data):e.texImage2D(i.TEXTURE_2D,st,ot,$.width,$.height,0,q,bt,$.data);y.generateMipmaps=!1}else Dt?(Jt&&e.texStorage2D(i.TEXTURE_2D,mt,ot,Z.width,Z.height),O&&ct(y,Z,q,bt)):e.texImage2D(i.TEXTURE_2D,0,ot,Z.width,Z.height,0,q,bt,Z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Dt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,ot,Nt[0].width,Nt[0].height,Z.depth);for(let st=0,Mt=Nt.length;st<Mt;st++)if($=Nt[st],y.format!==Pn)if(q!==null)if(Dt){if(O)if(y.layerUpdates.size>0){let Ut=Qc($.width,$.height,y.format,y.type);for(let gt of y.layerUpdates){let zt=$.data.subarray(gt*Ut/$.data.BYTES_PER_ELEMENT,(gt+1)*Ut/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,gt,$.width,$.height,1,q,zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,$.width,$.height,Z.depth,q,$.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,ot,$.width,$.height,Z.depth,0,$.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,$.width,$.height,Z.depth,q,bt,$.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,ot,$.width,$.height,Z.depth,0,q,bt,$.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Dt&&Jt&&e.texStorage2D(i.TEXTURE_2D,mt,ot,Nt[0].width,Nt[0].height);for(let st=0,Mt=Nt.length;st<Mt;st++)$=Nt[st],y.format!==Pn?q!==null?Dt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,$.width,$.height,q,$.data):e.compressedTexImage2D(i.TEXTURE_2D,st,ot,$.width,$.height,0,$.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?O&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,$.width,$.height,q,bt,$.data):e.texImage2D(i.TEXTURE_2D,st,ot,$.width,$.height,0,q,bt,$.data)}else if(y.isDataArrayTexture)if(Dt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,ot,Z.width,Z.height,Z.depth),O)if(y.layerUpdates.size>0){let st=Qc(Z.width,Z.height,y.format,y.type);for(let Mt of y.layerUpdates){let Ut=Z.data.subarray(Mt*st/Z.data.BYTES_PER_ELEMENT,(Mt+1)*st/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Mt,Z.width,Z.height,1,q,bt,Ut)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,q,bt,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ot,Z.width,Z.height,Z.depth,0,q,bt,Z.data);else if(y.isData3DTexture)Dt?(Jt&&e.texStorage3D(i.TEXTURE_3D,mt,ot,Z.width,Z.height,Z.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,q,bt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,ot,Z.width,Z.height,Z.depth,0,q,bt,Z.data);else if(y.isFramebufferTexture){if(Jt)if(Dt)e.texStorage2D(i.TEXTURE_2D,mt,ot,Z.width,Z.height);else{let st=Z.width,Mt=Z.height;for(let Ut=0;Ut<mt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,ot,st,Mt,0,q,bt,null),st>>=1,Mt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),Z.parentNode!==st){st.appendChild(Z),f.add(y),st.onpaint=Mt=>{let Ut=Mt.changedElements;for(let gt of f)Ut.includes(gt.image)&&(gt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let Ut=i.RGBA,gt=i.RGBA,zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ut,gt,zt,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Dt&&Jt){let st=le(Nt[0]);e.texStorage2D(i.TEXTURE_2D,mt,ot,st.width,st.height)}for(let st=0,Mt=Nt.length;st<Mt;st++)$=Nt[st],Dt?O&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,q,bt,$):e.texImage2D(i.TEXTURE_2D,st,ot,q,bt,$);y.generateMipmaps=!1}else if(Dt){if(Jt){let st=le(Z);e.texStorage2D(i.TEXTURE_2D,mt,ot,st.width,st.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,q,bt,Z)}else e.texImage2D(i.TEXTURE_2D,0,ot,q,bt,Z);p(y)&&S(b),W.__version=J.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Yt(C,y,tt){if(y.image.length!==6)return;let b=Xt(C,y),R=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+tt);let J=n.get(R);if(R.version!==J.__version||b===!0){e.activeTexture(i.TEXTURE0+tt);let W=ge.getPrimaries(ge.workingColorSpace),z=y.colorSpace===Ti?null:ge.getPrimaries(y.colorSpace),Z=y.colorSpace===Ti||W===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let q=y.isCompressedTexture||y.image[0].isCompressedTexture,bt=y.image[0]&&y.image[0].isDataTexture,ot=[];for(let gt=0;gt<6;gt++)!q&&!bt?ot[gt]=g(y.image[gt],!0,s.maxCubemapSize):ot[gt]=bt?y.image[gt].image:y.image[gt],ot[gt]=me(y,ot[gt]);let $=ot[0],Nt=r.convert(y.format,y.colorSpace),Dt=r.convert(y.type),Jt=_(y.internalFormat,Nt,Dt,y.normalized,y.colorSpace),O=y.isVideoTexture!==!0,mt=J.__version===void 0||b===!0,st=R.dataReady,Mt=T(y,$);Lt(i.TEXTURE_CUBE_MAP,y);let Ut;if(q){O&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Jt,$.width,$.height);for(let gt=0;gt<6;gt++){Ut=ot[gt].mipmaps;for(let zt=0;zt<Ut.length;zt++){let Wt=Ut[zt];y.format!==Pn?Nt!==null?O?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt,0,0,Wt.width,Wt.height,Nt,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt,Jt,Wt.width,Wt.height,0,Wt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt,0,0,Wt.width,Wt.height,Nt,Dt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt,Jt,Wt.width,Wt.height,0,Nt,Dt,Wt.data)}}}else{if(Ut=y.mipmaps,O&&mt){Ut.length>0&&Mt++;let gt=le(ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Jt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){O?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ot[gt].width,ot[gt].height,Nt,Dt,ot[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Jt,ot[gt].width,ot[gt].height,0,Nt,Dt,ot[gt].data);for(let zt=0;zt<Ut.length;zt++){let xe=Ut[zt].image[gt].image;O?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt+1,0,0,xe.width,xe.height,Nt,Dt,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt+1,Jt,xe.width,xe.height,0,Nt,Dt,xe.data)}}else{O?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Nt,Dt,ot[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Jt,Nt,Dt,ot[gt]);for(let zt=0;zt<Ut.length;zt++){let Wt=Ut[zt];O?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt+1,0,0,Nt,Dt,Wt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt+1,Jt,Nt,Dt,Wt.image[gt])}}}p(y)&&S(i.TEXTURE_CUBE_MAP),J.__version=R.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function It(C,y,tt,b,R,J){let W=r.convert(tt.format,tt.colorSpace),z=r.convert(tt.type),Z=_(tt.internalFormat,W,z,tt.normalized,tt.colorSpace),q=n.get(y),bt=n.get(tt);if(bt.__renderTarget=y,!q.__hasExternalTextures){let ot=Math.max(1,y.width>>J),$=Math.max(1,y.height>>J);R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?e.texImage3D(R,J,Z,ot,$,y.depth,0,W,z,null):e.texImage2D(R,J,Z,ot,$,0,W,z,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Qt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,b,R,bt.__webglTexture,0,jt(y)):(R===i.TEXTURE_2D||R>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,b,R,bt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(C,y,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){let b=y.depthTexture,R=b&&b.isDepthTexture?b.type:null,J=w(y.stencilBuffer,R),W=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Qt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt(y),J,y.width,y.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt(y),J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,C)}else{let b=y.textures;for(let R=0;R<b.length;R++){let J=b[R],W=r.convert(J.format,J.colorSpace),z=r.convert(J.type),Z=_(J.internalFormat,W,z,J.normalized,J.colorSpace);Qt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt(y),Z,y.width,y.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt(y),Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(C,y,tt){let b=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let R=n.get(y.depthTexture);if(R.__renderTarget=y,(!R.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),b){if(R.__webglInit===void 0&&(R.__webglInit=!0,y.depthTexture.addEventListener("dispose",P)),R.__webglTexture===void 0){R.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,y.depthTexture);let q=r.convert(y.depthTexture.format),bt=r.convert(y.depthTexture.type),ot;y.depthTexture.format===ti?ot=i.DEPTH_COMPONENT24:y.depthTexture.format===Yi&&(ot=i.DEPTH24_STENCIL8);for(let $=0;$<6;$++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ot,y.width,y.height,0,q,bt,null)}}else ft(y.depthTexture,0);let J=R.__webglTexture,W=jt(y),z=b?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,Z=y.depthTexture.format===Yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===ti)Qt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,z,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,Z,z,J,0);else if(y.depthTexture.format===Yi)Qt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,z,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,Z,z,J,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(C){let y=n.get(C),tt=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let b=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),b){let R=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,b.removeEventListener("dispose",R)};b.addEventListener("dispose",R),y.__depthDisposeCallback=R}y.__boundDepthTexture=b}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(tt)for(let b=0;b<6;b++)pe(y.__webglFramebuffer[b],C,b);else{let b=C.texture.mipmaps;b&&b.length>0?pe(y.__webglFramebuffer[0],C,0):pe(y.__webglFramebuffer,C,0)}else if(tt){y.__webglDepthbuffer=[];for(let b=0;b<6;b++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[b]),y.__webglDepthbuffer[b]===void 0)y.__webglDepthbuffer[b]=i.createRenderbuffer(),kt(y.__webglDepthbuffer[b],C,!1);else{let R=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[b];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,J)}}else{let b=C.texture.mipmaps;if(b&&b.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),kt(y.__webglDepthbuffer,C,!1);else{let R=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,J)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(C,y,tt){let b=n.get(C);y!==void 0&&It(b.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&ut(C)}function Tt(C){let y=C.texture,tt=n.get(C),b=n.get(y);C.addEventListener("dispose",v);let R=C.textures,J=C.isWebGLCubeRenderTarget===!0,W=R.length>1;if(W||(b.__webglTexture===void 0&&(b.__webglTexture=i.createTexture()),b.__version=y.version,a.memory.textures++),J){tt.__webglFramebuffer=[];for(let z=0;z<6;z++)if(y.mipmaps&&y.mipmaps.length>0){tt.__webglFramebuffer[z]=[];for(let Z=0;Z<y.mipmaps.length;Z++)tt.__webglFramebuffer[z][Z]=i.createFramebuffer()}else tt.__webglFramebuffer[z]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){tt.__webglFramebuffer=[];for(let z=0;z<y.mipmaps.length;z++)tt.__webglFramebuffer[z]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(W)for(let z=0,Z=R.length;z<Z;z++){let q=n.get(R[z]);q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Qt(C)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let z=0;z<R.length;z++){let Z=R[z];tt.__webglColorRenderbuffer[z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[z]);let q=r.convert(Z.format,Z.colorSpace),bt=r.convert(Z.type),ot=_(Z.internalFormat,q,bt,Z.normalized,Z.colorSpace,C.isXRRenderTarget===!0),$=jt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,ot,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,tt.__webglColorRenderbuffer[z])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(tt.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,y);for(let z=0;z<6;z++)if(y.mipmaps&&y.mipmaps.length>0)for(let Z=0;Z<y.mipmaps.length;Z++)It(tt.__webglFramebuffer[z][Z],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Z);else It(tt.__webglFramebuffer[z],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);p(y)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(W){for(let z=0,Z=R.length;z<Z;z++){let q=R[z],bt=n.get(q),ot=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,bt.__webglTexture),Lt(ot,q),It(tt.__webglFramebuffer,C,q,i.COLOR_ATTACHMENT0+z,ot,0),p(q)&&S(ot)}e.unbindTexture()}else{let z=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(z=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(z,b.__webglTexture),Lt(z,y),y.mipmaps&&y.mipmaps.length>0)for(let Z=0;Z<y.mipmaps.length;Z++)It(tt.__webglFramebuffer[Z],C,y,i.COLOR_ATTACHMENT0,z,Z);else It(tt.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,z,0);p(y)&&S(z),e.unbindTexture()}C.depthBuffer&&ut(C)}function xt(C){let y=C.textures;for(let tt=0,b=y.length;tt<b;tt++){let R=y[tt];if(p(R)){let J=E(C),W=n.get(R).__webglTexture;e.bindTexture(J,W),S(J),e.unbindTexture()}}}let wt=[],qt=[];function Zt(C){if(C.samples>0){if(Qt(C)===!1){let y=C.textures,tt=C.width,b=C.height,R=i.COLOR_BUFFER_BIT,J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=n.get(C),z=y.length>1;if(z)for(let q=0;q<y.length;q++)e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,W.__webglMultisampledFramebuffer);let Z=C.texture.mipmaps;Z&&Z.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer);for(let q=0;q<y.length;q++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(R|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(R|=i.STENCIL_BUFFER_BIT)),z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,W.__webglColorRenderbuffer[q]);let bt=n.get(y[q]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,bt,0)}i.blitFramebuffer(0,0,tt,b,0,0,tt,b,R,i.NEAREST),l===!0&&(wt.length=0,qt.length=0,wt.push(i.COLOR_ATTACHMENT0+q),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(wt.push(J),qt.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,qt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),z)for(let q=0;q<y.length;q++){e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,W.__webglColorRenderbuffer[q]);let bt=n.get(y[q]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function jt(C){return Math.min(s.maxSamples,C.samples)}function Qt(C){let y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function H(C){let y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function me(C,y){let tt=C.colorSpace,b=C.format,R=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||tt!==Rr&&tt!==Ti&&(ge.getTransfer(tt)===Me?(b!==Pn||R!==_n)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",tt)),y}function le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=it,this.resetTextureUnits=et,this.getTextureUnits=U,this.setTextureUnits=Y,this.setTexture2D=ft,this.setTexture2DArray=F,this.setTexture3D=nt,this.setTextureCube=X,this.rebindTextures=yt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function lx(i,t){function e(n,s=Ti){let r,a=ge.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===nr)return i.UNSIGNED_SHORT;if(n===Wo)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Xn)return i.HALF_FLOAT;if(n===Xc)return i.ALPHA;if(n===$c)return i.RGB;if(n===Pn)return i.RGBA;if(n===ti)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===qo)return i.RED;if(n===Yo)return i.RED_INTEGER;if(n===Zi)return i.RG;if(n===Zo)return i.RG_INTEGER;if(n===Jo)return i.RGBA_INTEGER;if(n===oa||n===la||n===ca||n===ha)if(a===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ko||n===jo||n===Qo||n===tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===el||n===nl||n===il||n===sl||n===rl||n===ua||n===al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===el||n===nl)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===il)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sl)return r.COMPRESSED_R11_EAC;if(n===rl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ua)return r.COMPRESSED_RG11_EAC;if(n===al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ml||n===Sl||n===bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ml)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wl||n===Tl||n===da||n===El)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Br(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Je({vertexShader:cx,fragmentShader:hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vh=class extends ei{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new xh,p={},S=e.getContextAttributes(),E=null,_=null,w=[],T=[],P=new Ct,v=null,A=null,L=new Ve;L.viewport=new De;let k=new Ve;k.viewport=new De;let B=[L,k],et=new Bo,U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let ct=w[at];return ct===void 0&&(ct=new Gs,w[at]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(at){let ct=w[at];return ct===void 0&&(ct=new Gs,w[at]=ct),ct.getGripSpace()},this.getHand=function(at){let ct=w[at];return ct===void 0&&(ct=new Gs,w[at]=ct),ct.getHandSpace()};function it(at){let ct=T.indexOf(at.inputSource);if(ct===-1)return;let pt=w[ct];pt!==void 0&&(pt.update(at.inputSource,at.frame,c||a),pt.dispatchEvent({type:at.type,data:at.inputSource}))}function rt(){s.removeEventListener("select",it),s.removeEventListener("selectstart",it),s.removeEventListener("selectend",it),s.removeEventListener("squeeze",it),s.removeEventListener("squeezestart",it),s.removeEventListener("squeezeend",it),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",ft);for(let at=0;at<w.length;at++){let ct=T[at];ct!==null&&(T[at]=null,w[at].disconnect(ct))}U=null,Y=null,g.reset();for(let at in p)delete p[at];if(t.setRenderTarget(E),d=null,u=null,f=null,s=null,_=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(P.width,P.height,!1),A!==null){let at=A.camera;at.fov=A.fov,at.zoom=A.zoom,at.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,n.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){o=at,n.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(at){c=at},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",it),s.addEventListener("selectstart",it),s.addEventListener("selectend",it),s.addEventListener("squeeze",it),s.addEventListener("squeezestart",it),s.addEventListener("squeezeend",it),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",ft),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Yt=null,It=null;S.depth&&(It=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=S.stencil?Yi:ti,Yt=S.stencil?ir:Wn);let kt={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(kt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new gn(u.textureWidth,u.textureHeight,{format:Pn,type:_n,depthTexture:new Hi(u.textureWidth,u.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let pt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new gn(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ft(at){for(let ct=0;ct<at.removed.length;ct++){let pt=at.removed[ct],Yt=T.indexOf(pt);Yt>=0&&(T[Yt]=null,w[Yt].disconnect(pt))}for(let ct=0;ct<at.added.length;ct++){let pt=at.added[ct],Yt=T.indexOf(pt);if(Yt===-1){for(let kt=0;kt<w.length;kt++)if(kt>=T.length){T.push(pt),Yt=kt;break}else if(T[kt]===null){T[kt]=pt,Yt=kt;break}if(Yt===-1)break}let It=w[Yt];It&&It.connect(pt)}}let F=new N,nt=new N;function X(at,ct,pt){F.setFromMatrixPosition(ct.matrixWorld),nt.setFromMatrixPosition(pt.matrixWorld);let Yt=F.distanceTo(nt),It=ct.projectionMatrix.elements,kt=pt.projectionMatrix.elements,pe=It[14]/(It[10]-1),ut=It[14]/(It[10]+1),yt=(It[9]+1)/It[5],Tt=(It[9]-1)/It[5],xt=(It[8]-1)/It[0],wt=(kt[8]+1)/kt[0],qt=pe*xt,Zt=pe*wt,jt=Yt/(-xt+wt),Qt=jt*-xt;if(ct.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Qt),at.translateZ(jt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),It[10]===-1)at.projectionMatrix.copy(ct.projectionMatrix),at.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let H=pe+jt,me=ut+jt,le=qt-Qt,C=Zt+(Yt-Qt),y=yt*ut/me*H,tt=Tt*ut/me*H;at.projectionMatrix.makePerspective(le,C,y,tt,H,me),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function Q(at,ct){ct===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(ct.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let ct=at.near,pt=at.far;g.texture!==null&&(g.depthNear>0&&(ct=g.depthNear),g.depthFar>0&&(pt=g.depthFar)),et.near=k.near=L.near=ct,et.far=k.far=L.far=pt,(U!==et.near||Y!==et.far)&&(s.updateRenderState({depthNear:et.near,depthFar:et.far}),U=et.near,Y=et.far),et.layers.mask=at.layers.mask|6,L.layers.mask=et.layers.mask&-5,k.layers.mask=et.layers.mask&-3;let Yt=at.parent,It=et.cameras;Q(et,Yt);for(let kt=0;kt<It.length;kt++)Q(It[kt],Yt);It.length===2?X(et,L,k):et.projectionMatrix.copy(L.projectionMatrix),A===null&&at.isPerspectiveCamera&&(A={camera:at,fov:at.fov,zoom:at.zoom}),Rt(at,et,Yt)};function Rt(at,ct,pt){pt===null?at.matrix.copy(ct.matrixWorld):(at.matrix.copy(pt.matrixWorld),at.matrix.invert(),at.matrix.multiply(ct.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(ct.projectionMatrix),at.projectionMatrixInverse.copy(ct.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=co*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(at){l=at,u!==null&&(u.fixedFoveation=at),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=at)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(et)},this.getCameraTexture=function(at){return p[at]};let Kt=null;function Lt(at,ct){if(h=ct.getViewerPose(c||a),m=ct,h!==null){let pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Yt=!1;pt.length!==et.cameras.length&&(et.cameras.length=0,Yt=!0);for(let ut=0;ut<pt.length;ut++){let yt=pt[ut],Tt=null;if(d!==null)Tt=d.getViewport(yt);else{let wt=f.getViewSubImage(u,yt);Tt=wt.viewport,ut===0&&(t.setRenderTargetTextures(_,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(_))}let xt=B[ut];xt===void 0&&(xt=new Ve,xt.layers.enable(ut),xt.viewport=new De,B[ut]=xt),xt.matrix.fromArray(yt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(yt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ut===0&&(et.matrix.copy(xt.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),Yt===!0&&et.cameras.push(xt)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let ut=f.getDepthInformation(pt[0]);ut&&ut.isValid&&ut.texture&&g.init(ut,s.renderState)}if(It&&It.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let ut=0;ut<pt.length;ut++){let yt=pt[ut].camera;if(yt){let Tt=p[yt];Tt||(Tt=new Br,p[yt]=Tt);let xt=f.getCameraImage(yt);Tt.sourceTexture=xt}}}}for(let pt=0;pt<w.length;pt++){let Yt=T[pt],It=w[pt];Yt!==null&&It!==void 0&&It.update(Yt,ct,c||a)}Kt&&Kt(at,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),m=null}let Xt=new Dd;Xt.setAnimationLoop(Lt),this.setAnimationLoop=function(at){Kt=at},this.dispose=function(){}}},ux=new ve,zd=new oe;zd.set(-1,0,0,0,1,0,0,0,1);function dx(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Jc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,E,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,S,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===nn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===nn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=t.get(p),E=S.envMap,_=S.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(ux.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(zd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){let T=w.program;n.uniformBlockBinding(_,T)}function c(_,w){let T=s[_.id];T===void 0&&(g(_),T=h(_),s[_.id]=T,_.addEventListener("dispose",S));let P=w.program;n.updateUBOMapping(_,P);let v=t.render.frame;r[_.id]!==v&&(u(_),r[_.id]=v)}function h(_){let w=f();_.__bindingPointIndex=w;let T=i.createBuffer(),P=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let w=s[_.id],T=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,A=T.length;v<A;v++){let L=T[v];if(Array.isArray(L))for(let k=0,B=L.length;k<B;k++)d(L[k],v,k,P);else d(L,v,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,w,T,P){if(x(_,w,T,P)===!0){let v=_.__offset,A=_.value;if(Array.isArray(A)){let L=0;for(let k=0;k<A.length;k++){let B=A[k],et=p(B);m(B,_.__data,L),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(L+=et.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,_.__data)}}function m(_,w,T){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,T)}function x(_,w,T,P){let v=_.value,A=w+"_"+T;if(P[A]===void 0)return typeof v=="number"||typeof v=="boolean"?P[A]=v:ArrayBuffer.isView(v)?P[A]=v.slice():P[A]=v.clone(),!0;{let L=P[A];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return P[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function g(_){let w=_.uniforms,T=0,P=16;for(let A=0,L=w.length;A<L;A++){let k=Array.isArray(w[A])?w[A]:[w[A]];for(let B=0,et=k.length;B<et;B++){let U=k[B],Y=Array.isArray(U.value)?U.value:[U.value];for(let it=0,rt=Y.length;it<rt;it++){let ft=Y[it],F=p(ft),nt=T%P,X=nt%F.boundary,Q=nt+X;T+=X,Q!==0&&P-Q<F.storage&&(T+=P-Q),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=F.storage}}}let v=T%P;return v>0&&(T+=P-v),_.__size=T,_.__cache={},this}function p(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",_),w}function S(_){let w=_.target;w.removeEventListener("dispose",S);let T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function E(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var px=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function mx(){return li===null&&(li=new Ur(px,16,16,Zi,Xn),li.name="DFG_LUT",li.minFilter=en,li.magFilter=en,li.wrapS=jn,li.wrapT=jn,li.generateMipmaps=!1,li.needsUpdate=!0),li}var Ll=class{constructor(t={}){let{canvas:e=td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=_n}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=d,g=new Set([Jo,Zo,Yo]),p=new Set([_n,Wn,nr,ir,Xo,$o]),S=new Uint32Array(4),E=new Int32Array(4),_=new N,w=null,T=null,P=[],v=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,k=!1,B=null,et=null,U=null,Y=null;this._outputColorSpace=tn;let it=0,rt=0,ft=null,F=-1,nt=null,X=new De,Q=new De,Rt=null,Kt=new ne(0),Lt=0,Xt=e.width,at=e.height,ct=1,pt=null,Yt=null,It=new De(0,0,Xt,at),kt=new De(0,0,Xt,at),pe=!1,ut=new Xs,yt=!1,Tt=!1,xt=new ve,wt=new N,qt=new De,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function Qt(){return ft===null?ct:1}let H=n;function me(M,D){return e.getContext(M,D)}let le,C,y,tt,b,R,J,W,z,Z,q,bt,ot,$,Nt,Dt,Jt,O,mt,st,Mt,Ut,gt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",je,!1),H===null){let D="webgl2";if(H=me(D,M),H===null)throw me(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(M){throw e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",je,!1),se("WebGLRenderer: "+M.message),M}function zt(){le=new S0(H),le.init(),Mt=new lx(H,le),C=new d0(H,le,t,Mt),y=new ax(H,le),C.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),et=H.createFramebuffer(),U=H.createFramebuffer(),Y=H.createFramebuffer(),tt=new T0(H),b=new $_,R=new ox(H,le,y,b,C,Mt,tt),J=new M0(L),W=new Ap(H),Ut=new h0(H,W),z=new b0(H,W,tt,Ut),Z=new A0(H,z,W,Ut,tt),O=new E0(H,C,R),Nt=new f0(b),q=new X_(L,J,le,C,Ut,Nt),bt=new dx(L,b),ot=new Y_,$=new tx(le),Jt=new c0(L,J,y,Z,m,l),Dt=new rx(L,Z,C),gt=new fx(H,tt,C,y),mt=new u0(H,le,tt),st=new w0(H,le,tt),tt.programs=q.programs,L.capabilities=C,L.extensions=le,L.properties=b,L.renderLists=ot,L.shadowMap=Dt,L.state=y,L.info=tt}x!==_n&&(A=new R0(x,e.width,e.height,o,s,r));let Wt=new vh(L,H);this.xr=Wt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let M=le.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=le.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(M){M!==void 0&&(ct=M,this.setSize(Xt,at,!1))},this.getSize=function(M){return M.set(Xt,at)},this.setSize=function(M,D,j=!0){if(Wt.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}Xt=M,at=D,e.width=Math.floor(M*ct),e.height=Math.floor(D*ct),j===!0&&(e.style.width=M+"px",e.style.height=D+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(Xt*ct,at*ct).floor()},this.setDrawingBufferSize=function(M,D,j){Xt=M,at=D,ct=j,e.width=Math.floor(M*j),e.height=Math.floor(D*j),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(x===_n){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(X)},this.getViewport=function(M){return M.copy(It)},this.setViewport=function(M,D,j,V){M.isVector4?It.set(M.x,M.y,M.z,M.w):It.set(M,D,j,V),y.viewport(X.copy(It).multiplyScalar(ct).round())},this.getScissor=function(M){return M.copy(kt)},this.setScissor=function(M,D,j,V){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,D,j,V),y.scissor(Q.copy(kt).multiplyScalar(ct).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){y.setScissorTest(pe=M)},this.setOpaqueSort=function(M){pt=M},this.setTransparentSort=function(M){Yt=M},this.getClearColor=function(M){return M.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,j=!0){let V=0;if(M){let K=!1;if(ft!==null){let St=ft.texture.format;K=g.has(St)}if(K){let St=ft.texture.type,At=p.has(St),vt=Jt.getClearColor(),Et=Jt.getClearAlpha(),Ht=vt.r,ae=vt.g,te=vt.b;At?(S[0]=Ht,S[1]=ae,S[2]=te,S[3]=Et,H.clearBufferuiv(H.COLOR,0,S)):(E[0]=Ht,E[1]=ae,E[2]=te,E[3]=Et,H.clearBufferiv(H.COLOR,0,E))}else V|=H.COLOR_BUFFER_BIT}D&&(V|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(V|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&H.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),B=M},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",je,!1),Jt.dispose(),ot.dispose(),$.dispose(),b.dispose(),J.dispose(),Z.dispose(),Ut.dispose(),gt.dispose(),q.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Se),Wt.removeEventListener("sessionend",Le),be.stop()};function xe(M){M.preventDefault(),Yc("WebGLRenderer: Context Lost."),k=!0}function ue(){Yc("WebGLRenderer: Context Restored."),k=!1;let M=tt.autoReset,D=Dt.enabled,j=Dt.autoUpdate,V=Dt.needsUpdate,K=Dt.type;zt(),tt.autoReset=M,Dt.enabled=D,Dt.autoUpdate=j,Dt.needsUpdate=V,Dt.type=K}function je(M){se("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function rn(M){let D=M.target;D.removeEventListener("dispose",rn),gr(D)}function gr(M){Ii(M),b.remove(M)}function Ii(M){let D=b.get(M).programs;D!==void 0&&(D.forEach(function(j){q.releaseProgram(j)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,j,V,K,St){D===null&&(D=Zt);let At=K.isMesh&&K.matrixWorld.determinantAffine()<0,vt=G(M,D,j,V,K);y.setMaterial(V,At);let Et=j.index,Ht=1;if(V.wireframe===!0){if(Et=z.getWireframeAttribute(j),Et===void 0)return;Ht=2}let ae=j.drawRange,te=j.attributes.position,Vt=ae.start*Ht,ye=(ae.start+ae.count)*Ht;St!==null&&(Vt=Math.max(Vt,St.start*Ht),ye=Math.min(ye,(St.start+St.count)*Ht)),Et!==null?(Vt=Math.max(Vt,0),ye=Math.min(ye,Et.count)):te!=null&&(Vt=Math.max(Vt,0),ye=Math.min(ye,te.count));let ke=ye-Vt;if(ke<0||ke===1/0)return;Ut.setup(K,V,vt,j,Et);let Ie,Ae=mt;if(Et!==null&&(Ie=W.get(Et),Ae=st,Ae.setIndex(Ie)),K.isMesh)V.wireframe===!0?(y.setLineWidth(V.wireframeLinewidth*Qt()),Ae.setMode(H.LINES)):Ae.setMode(H.TRIANGLES);else if(K.isLine){let on=V.linewidth;on===void 0&&(on=1),y.setLineWidth(on*Qt()),K.isLineSegments?Ae.setMode(H.LINES):K.isLineLoop?Ae.setMode(H.LINE_LOOP):Ae.setMode(H.LINE_STRIP)}else K.isPoints?Ae.setMode(H.POINTS):K.isSprite&&Ae.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(le.get("WEBGL_multi_draw"))Ae.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let on=K._multiDrawStarts,Gt=K._multiDrawCounts,un=K._multiDrawCount,_e=Et?W.get(Et).bytesPerElement:1,Tn=b.get(V).currentProgram.getUniforms();for(let Jn=0;Jn<un;Jn++)Tn.setValue(H,"_gl_DrawID",Jn),Ae.render(on[Jn]/_e,Gt[Jn])}else if(K.isInstancedMesh)Ae.renderInstances(Vt,ke,K.count);else if(j.isInstancedBufferGeometry){let on=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Gt=Math.min(j.instanceCount,on);Ae.renderInstances(Vt,ke,Gt)}else Ae.render(Vt,ke)};function Pt(M,D,j,V){B!==null&&M.isNodeMaterial&&B.setObject(V,M),yt===!0&&Nt.setState(M,j,!1),M.transparent===!0&&M.side===ri&&M.forceSinglePass===!1?(M.side=nn,M.needsUpdate=!0,fi(M,D,V),M.side=Xi,M.needsUpdate=!0,fi(M,D,V),M.side=ri):fi(M,D,V)}this.compile=function(M,D,j=null){j===null&&(j=M),B!==null&&B.renderStart(M,D,j),T=$.get(j),T.init(D),v.push(T),j.traverseVisible(function(K){K.isLight&&K.layers.test(D.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),M!==j&&M.traverseVisible(function(K){K.isLight&&K.layers.test(D.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),Tt=this.localClippingEnabled,yt=Nt.init(this.clippingPlanes,Tt),yt===!0&&Nt.setGlobalState(this.clippingPlanes,D),B!==null&&Dt.render(T.state.shadowsArray,j,D);let V=new Set;return M.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let St=K.material;if(St)if(Array.isArray(St))for(let At=0;At<St.length;At++){let vt=St[At];Pt(vt,j,D,K),V.add(vt)}else Pt(St,j,D,K),V.add(St)}),T=v.pop(),B!==null&&B.renderEnd(),V},this.compileAsync=function(M,D,j=null){let V=this.compile(M,D,j);return new Promise(K=>{function St(){if(V.forEach(function(At){let Et=b.get(At).currentProgram;(Et===void 0||Et.isReady())&&V.delete(At)}),V.size===0){K(M);return}setTimeout(St,10)}le.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let $t=null;function re(M){$t&&$t(M)}function Se(){be.stop()}function Le(){be.start()}let be=new Dd;be.setAnimationLoop(re),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(M){$t=M,Wt.setAnimationLoop(M),M===null?be.stop():be.start()},Wt.addEventListener("sessionstart",Se),Wt.addEventListener("sessionend",Le),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;B!==null&&B.renderStart(M,D);let j=Wt.enabled===!0&&Wt.isPresenting===!0,V=A!==null&&(ft===null||j)&&A.begin(L,ft);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(D),D=Wt.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,D,ft),T=$.get(M,v.length),T.init(D),T.state.textureUnits=R.getTextureUnits(),v.push(T),xt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ut.setFromProjectionMatrix(xt,zn,D.reversedDepth),Tt=this.localClippingEnabled,yt=Nt.init(this.clippingPlanes,Tt),w=ot.get(M,P.length),w.init(),P.push(w),Wt.enabled===!0&&Wt.isPresenting===!0){let At=L.xr.getDepthSensingMesh();At!==null&&Qe(At,D,-1/0,L.sortObjects)}Qe(M,D,0,L.sortObjects),w.finish(),B!==null&&B.updateLights(T.state.lightsArray),L.sortObjects===!0&&w.sort(pt,Yt),jt=Wt.enabled===!1||Wt.isPresenting===!1||Wt.hasDepthSensing()===!1,jt&&Jt.addToRenderList(w,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),yt===!0&&Nt.beginShadows();let K=T.state.shadowsArray;if(Dt.render(K,M,D),yt===!0&&Nt.endShadows(),(V&&A.hasRenderPass())===!1){let At=w.opaque,vt=w.transmissive;if(T.setupLights(),D.isArrayCamera){let Et=D.cameras;if(vt.length>0)for(let Ht=0,ae=Et.length;Ht<ae;Ht++){let te=Et[Ht];an(At,vt,M,te)}jt&&Jt.render(M);for(let Ht=0,ae=Et.length;Ht<ae;Ht++){let te=Et[Ht];qe(w,M,te,te.viewport)}}else vt.length>0&&an(At,vt,M,D),jt&&Jt.render(M),qe(w,M,D)}ft!==null&&rt===0&&(R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft)),V&&A.end(L),M.isScene===!0&&M.onAfterRender(L,M,D),Ut.resetDefaultState(),F=-1,nt=null,v.pop(),v.length>0?(T=v[v.length-1],R.setTextureUnits(T.state.textureUnits),yt===!0&&Nt.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?w=P[P.length-1]:w=null,B!==null&&B.renderEnd()};function Qe(M,D,j,V){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)j=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(ut)){V&&qt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(xt);let At=Z.update(M),vt=M.material;vt.visible&&w.push(M,At,vt,j,qt.z,null,D)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(ut))){let At=Z.update(M),vt=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),qt.copy(M.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),qt.copy(At.boundingSphere.center)),qt.applyMatrix4(M.matrixWorld).applyMatrix4(xt)),Array.isArray(vt)){let Et=At.groups;for(let Ht=0,ae=Et.length;Ht<ae;Ht++){let te=Et[Ht],Vt=vt[te.materialIndex];Vt&&Vt.visible&&w.push(M,At,Vt,j,qt.z,te,D)}}else vt.visible&&w.push(M,At,vt,j,qt.z,null,D)}}let St=M.children;for(let At=0,vt=St.length;At<vt;At++)Qe(St[At],D,j,V)}function qe(M,D,j,V){let{opaque:K,transmissive:St,transparent:At}=M;T.setupLightsView(j),yt===!0&&Nt.setGlobalState(L.clippingPlanes,j),V&&y.viewport(X.copy(V)),K.length>0&&pn(K,D,j),St.length>0&&pn(St,D,j),At.length>0&&pn(At,D,j),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function an(M,D,j,V){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let Vt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new gn(1,1,{generateMipmaps:!0,type:Vt?Xn:_n,minFilter:qi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let St=T.state.transmissionRenderTarget[V.id],At=V.viewport||X;St.setSize(At.z*L.transmissionResolutionScale,At.w*L.transmissionResolutionScale);let vt=L.getRenderTarget(),Et=L.getActiveCubeFace(),Ht=L.getActiveMipmapLevel();L.setRenderTarget(St),L.getClearColor(Kt),Lt=L.getClearAlpha(),Lt<1&&L.setClearColor(16777215,.5),L.clear(),jt&&Jt.render(j);let ae=L.toneMapping;L.toneMapping=Gn;let te=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),yt===!0&&Nt.setGlobalState(L.clippingPlanes,V),pn(M,j,V),R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St),le.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let ye=0,ke=D.length;ye<ke;ye++){let Ie=D[ye],{object:Ae,geometry:on,material:Gt,group:un}=Ie;if(Gt.side===ri&&Ae.layers.test(V.layers)){let _e=Gt.side;Gt.side=nn,Gt.needsUpdate=!0,ts(Ae,j,V,on,Gt,un),Gt.side=_e,Gt.needsUpdate=!0,Vt=!0}}Vt===!0&&(R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St))}L.setRenderTarget(vt,Et,Ht),L.setClearColor(Kt,Lt),te!==void 0&&(V.viewport=te),L.toneMapping=ae}function pn(M,D,j){let V=D.isScene===!0?D.overrideMaterial:null;for(let K=0,St=M.length;K<St;K++){let At=M[K],{object:vt,geometry:Et,group:Ht}=At,ae=At.material;ae.allowOverride===!0&&V!==null&&(ae=V),vt.layers.test(j.layers)&&ts(vt,D,j,Et,ae,Ht)}}function ts(M,D,j,V,K,St){B!==null&&K.isNodeMaterial&&B.setObject(M,K),M.onBeforeRender(L,D,j,V,K,St),M.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),K.onBeforeRender(L,D,j,V,M,St),K.transparent===!0&&K.side===ri&&K.forceSinglePass===!1?(K.side=nn,K.needsUpdate=!0,L.renderBufferDirect(j,D,V,K,M,St),K.side=Xi,K.needsUpdate=!0,L.renderBufferDirect(j,D,V,K,M,St),K.side=ri):L.renderBufferDirect(j,D,V,K,M,St),M.onAfterRender(L,D,j,V,K,St)}function fi(M,D,j){D.isScene!==!0&&(D=Zt);let V=b.get(M),K=T.state.lights,St=T.state.shadowsArray,At=K.state.version,vt=q.getParameters(M,K.state,St,D,j,T.state.lightProbeGridArray),Et=q.getProgramCacheKey(vt),Ht=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,V.fog=D.fog;let ae=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=J.get(M.envMap||V.environment,ae),V.envMapRotation=V.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Ht===void 0&&(M.addEventListener("dispose",rn),Ht=new Map,V.programs=Ht);let te=Ht.get(Et);if(te!==void 0){if(V.currentProgram===te&&V.lightsStateVersion===At)return es(M,vt),te}else vt.uniforms=q.getUniforms(M),B!==null&&M.isNodeMaterial&&B.build(M,j,vt),M.onBeforeCompile(vt,L),te=q.acquireProgram(vt,Et),Ht.set(Et,te),V.uniforms=vt.uniforms;let Vt=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Vt.clippingPlanes=Nt.uniform),es(M,vt),V.needsLights=ht(M),V.lightsStateVersion=At,V.needsLights&&(Vt.ambientLightColor.value=K.state.ambient,Vt.lightProbe.value=K.state.probe,Vt.sunLights.value=K.state.sun,Vt.sunLightShadows.value=K.state.sunShadow,Vt.directionalLights.value=K.state.directional,Vt.directionalLightShadows.value=K.state.directionalShadow,Vt.spotLights.value=K.state.spot,Vt.spotLightShadows.value=K.state.spotShadow,Vt.rectAreaLights.value=K.state.rectArea,Vt.ltc_1.value=K.state.rectAreaLTC1,Vt.ltc_2.value=K.state.rectAreaLTC2,Vt.pointLights.value=K.state.point,Vt.pointLightShadows.value=K.state.pointShadow,Vt.hemisphereLights.value=K.state.hemi,Vt.sunShadowMatrix.value=K.state.sunShadowMatrix,Vt.sunShadowCascade.value=K.state.sunShadowCascade,Vt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Vt.spotLightMatrix.value=K.state.spotLightMatrix,Vt.spotLightMap.value=K.state.spotLightMap,Vt.pointShadowMatrix.value=K.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=te,V.uniformsList=null,te}function Pi(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=or.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function es(M,D){let j=b.get(M);j.outputColorSpace=D.outputColorSpace,j.batching=D.batching,j.batchingColor=D.batchingColor,j.instancing=D.instancing,j.instancingColor=D.instancingColor,j.instancingMorph=D.instancingMorph,j.skinning=D.skinning,j.morphTargets=D.morphTargets,j.morphNormals=D.morphNormals,j.morphColors=D.morphColors,j.morphTargetsCount=D.morphTargetsCount,j.numClippingPlanes=D.numClippingPlanes,j.numIntersection=D.numClipIntersection,j.vertexAlphas=D.vertexAlphas,j.vertexTangents=D.vertexTangents,j.toneMapping=D.toneMapping}function wn(M,D){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;_.setFromMatrixPosition(D.matrixWorld);for(let j=0,V=M.length;j<V;j++){let K=M[j];if(K.texture!==null&&K.boundingBox.containsPoint(_))return K}return null}function G(M,D,j,V,K){D.isScene!==!0&&(D=Zt),R.resetTextureUnits();let St=D.fog,At=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?D.environment:null,vt=ft===null?L.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:ge.workingColorSpace,Et=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ht=J.get(V.envMap||At,Et),ae=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,te=!!j.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Vt=!!j.morphAttributes.position,ye=!!j.morphAttributes.normal,ke=!!j.morphAttributes.color,Ie=Gn;V.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ie=L.toneMapping);let Ae=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,on=Ae!==void 0?Ae.length:0,Gt=b.get(V),un=T.state.lights;if(yt===!0&&(Tt===!0||M!==nt)){let Ce=M===nt&&V.id===F;Nt.setState(V,M,Ce)}let _e=!1;V.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==un.state.version||Gt.outputColorSpace!==vt||K.isBatchedMesh&&Gt.batching===!1||!K.isBatchedMesh&&Gt.batching===!0||K.isBatchedMesh&&Gt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Gt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Gt.instancing===!1||!K.isInstancedMesh&&Gt.instancing===!0||K.isSkinnedMesh&&Gt.skinning===!1||!K.isSkinnedMesh&&Gt.skinning===!0||K.isInstancedMesh&&Gt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Gt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Gt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Gt.instancingMorph===!1&&K.morphTexture!==null||Gt.envMap!==Ht||V.fog===!0&&Gt.fog!==St||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Nt.numPlanes||Gt.numIntersection!==Nt.numIntersection)||Gt.vertexAlphas!==ae||Gt.vertexTangents!==te||Gt.morphTargets!==Vt||Gt.morphNormals!==ye||Gt.morphColors!==ke||Gt.toneMapping!==Ie||Gt.morphTargetsCount!==on||!!Gt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,Gt.__version=V.version);let Tn=Gt.currentProgram;_e===!0&&(Tn=fi(V,D,K),B&&V.isNodeMaterial&&B.onUpdateProgram(V,Tn,Gt));let Jn=!1,Li=!1,Ms=!1,Te=Tn.getUniforms(),Be=Gt.uniforms;if(y.useProgram(Tn.program)&&(Jn=!0,Li=!0,Ms=!0),V.id!==F&&(F=V.id,Li=!0),Gt.needsLights){let Ce=wn(T.state.lightProbeGridArray,K);Gt.lightProbeGrid!==Ce&&(Gt.lightProbeGrid=Ce,Li=!0)}if(Jn||nt!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Te.setValue(H,"projectionMatrix",M.projectionMatrix),Te.setValue(H,"viewMatrix",M.matrixWorldInverse);let Ni=Te.map.cameraPosition;Ni!==void 0&&Ni.setValue(H,wt.setFromMatrixPosition(M.matrixWorld)),C.logarithmicDepthBuffer&&Te.setValue(H,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Te.setValue(H,"isOrthographic",M.isOrthographicCamera===!0),nt!==M&&(nt=M,Li=!0,Ms=!0)}if(Gt.needsLights&&(un.state.sunShadowMap.length>0&&Te.setValue(H,"sunShadowMap",un.state.sunShadowMap,R),un.state.directionalShadowMap.length>0&&Te.setValue(H,"directionalShadowMap",un.state.directionalShadowMap,R),un.state.spotShadowMap.length>0&&Te.setValue(H,"spotShadowMap",un.state.spotShadowMap,R),un.state.pointShadowMap.length>0&&Te.setValue(H,"pointShadowMap",un.state.pointShadowMap,R)),K.isSkinnedMesh){Te.setOptional(H,K,"bindMatrix"),Te.setOptional(H,K,"bindMatrixInverse");let Ce=K.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),Te.setValue(H,"boneTexture",Ce.boneTexture,R))}K.isBatchedMesh&&(Te.setOptional(H,K,"batchingTexture"),Te.setValue(H,"batchingTexture",K._matricesTexture,R),Te.setOptional(H,K,"batchingIdTexture"),Te.setValue(H,"batchingIdTexture",K._indirectTexture,R),Te.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Te.setValue(H,"batchingColorTexture",K._colorsTexture,R));let Di=j.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&O.update(K,j,Tn),(Li||Gt.receiveShadow!==K.receiveShadow)&&(Gt.receiveShadow=K.receiveShadow,Te.setValue(H,"receiveShadow",K.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&D.environment!==null&&(Be.envMapIntensity.value=D.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=mx()),Li){if(Te.setValue(H,"toneMappingExposure",L.toneMappingExposure),Gt.needsLights&&dt(Be,Ms),St&&V.fog===!0&&bt.refreshFogUniforms(Be,St),bt.refreshMaterialUniforms(Be,V,ct,at,T.state.transmissionRenderTarget[M.id]),Gt.needsLights&&Gt.lightProbeGrid){let Ce=Gt.lightProbeGrid;Be.probesSH.value=Ce.texture,Be.probesMin.value.copy(Ce.boundingBox.min),Be.probesMax.value.copy(Ce.boundingBox.max),Be.probesResolution.value.copy(Ce.resolution)}or.upload(H,Pi(Gt),Be,R)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(or.upload(H,Pi(Gt),Be,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Te.setValue(H,"center",K.center),Te.setValue(H,"modelViewMatrix",K.modelViewMatrix),Te.setValue(H,"normalMatrix",K.normalMatrix),Te.setValue(H,"modelMatrix",K.matrixWorld),V.uniformsGroups!==void 0){let Ce=V.uniformsGroups;for(let Ni=0,Ss=Ce.length;Ni<Ss;Ni++){let Bh=Ce[Ni];gt.update(Bh,Tn),gt.bind(Bh,Tn)}}return Tn}function dt(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function ht(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return it},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(M,D,j){let V=b.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),b.get(M.texture).__webglTexture=D,b.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:j,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){let j=b.get(M);j.__webglFramebuffer=D,j.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,j=0){ft=M,it=D,rt=j;let V=null,K=!1,St=!1;if(M){let vt=b.get(M);if(vt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(H.FRAMEBUFFER,vt.__webglFramebuffer),X.copy(M.viewport),Q.copy(M.scissor),Rt=M.scissorTest,y.viewport(X),y.scissor(Q),y.setScissorTest(Rt),F=-1;return}else if(vt.__webglFramebuffer===void 0)R.setupRenderTarget(M);else if(vt.__hasExternalTextures)R.rebindTextures(M,b.get(M.texture).__webglTexture,b.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ae=M.depthTexture;if(vt.__boundDepthTexture!==ae){if(ae!==null&&b.has(ae)&&(M.width!==ae.image.width||M.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(M)}}let Et=M.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(St=!0);let Ht=b.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ht[D])?V=Ht[D][j]:V=Ht[D],K=!0):M.samples>0&&R.useMultisampledRTT(M)===!1?V=b.get(M).__webglMultisampledFramebuffer:Array.isArray(Ht)?V=Ht[j]:V=Ht,X.copy(M.viewport),Q.copy(M.scissor),Rt=M.scissorTest}else X.copy(It).multiplyScalar(ct).floor(),Q.copy(kt).multiplyScalar(ct).floor(),Rt=pe;if(j!==0&&(V=et),y.bindFramebuffer(H.FRAMEBUFFER,V)&&y.drawBuffers(M,V),y.viewport(X),y.scissor(Q),y.setScissorTest(Rt),K){let vt=b.get(M.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+D,vt.__webglTexture,j)}else if(St){let vt=D;for(let Et=0;Et<M.textures.length;Et++){let Ht=b.get(M.textures[Et]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Et,Ht.__webglTexture,j,vt)}}else if(M!==null&&j!==0){let vt=b.get(M.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,vt.__webglTexture,j)}F=-1};function _t(M){let D=b.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=C.textureFormatReadable(M.format),D.__typeReadable=C.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,j,V,K,St,At,vt=0){if(!(M&&M.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=b.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(Et=Et[At]),Et){y.bindFramebuffer(H.FRAMEBUFFER,Et);try{let Ht=M.textures[vt],ae=Ht.format,te=Ht.type;M.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+vt);let Vt=_t(Ht);if(Vt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Vt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-V&&j>=0&&j<=M.height-K&&H.readPixels(D,j,V,K,Mt.convert(ae),Mt.convert(te),St)}finally{let Ht=ft!==null?b.get(ft).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(M,D,j,V,K,St,At,vt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=b.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(Et=Et[At]),Et)if(D>=0&&D<=M.width-V&&j>=0&&j<=M.height-K){y.bindFramebuffer(H.FRAMEBUFFER,Et);let Ht=M.textures[vt],ae=Ht.format,te=Ht.type;M.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+vt);let Vt=_t(Ht);if(Vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ye),H.bufferData(H.PIXEL_PACK_BUFFER,St.byteLength,H.STREAM_READ),H.readPixels(D,j,V,K,Mt.convert(ae),Mt.convert(te),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let ke=ft!==null?b.get(ft).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,ke);let Ie=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await nd(H,Ie,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ye),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,St),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ye),H.deleteSync(Ie),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,j=0){let V=Math.pow(2,-j),K=Math.floor(M.image.width*V),St=Math.floor(M.image.height*V),At=D!==null?D.x:0,vt=D!==null?D.y:0;R.setTexture2D(M,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,At,vt,K,St),y.unbindTexture()},this.copyTextureToTexture=function(M,D,j=null,V=null,K=0,St=0){let At,vt,Et,Ht,ae,te,Vt,ye,ke,Ie=M.isCompressedTexture?M.mipmaps[St]:M.image;if(j!==null)At=j.max.x-j.min.x,vt=j.max.y-j.min.y,Et=j.isBox3?j.max.z-j.min.z:1,Ht=j.min.x,ae=j.min.y,te=j.isBox3?j.min.z:0;else{let Be=Math.pow(2,-K);At=Math.floor(Ie.width*Be),vt=Math.floor(Ie.height*Be),M.isDataArrayTexture?Et=Ie.depth:M.isData3DTexture?Et=Math.floor(Ie.depth*Be):Et=1,Ht=0,ae=0,te=0}V!==null?(Vt=V.x,ye=V.y,ke=V.z):(Vt=0,ye=0,ke=0);let Ae=Mt.convert(D.format),on=Mt.convert(D.type),Gt;D.isData3DTexture?(R.setTexture3D(D,0),Gt=H.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(R.setTexture2DArray(D,0),Gt=H.TEXTURE_2D_ARRAY):(R.setTexture2D(D,0),Gt=H.TEXTURE_2D),y.activeTexture(H.TEXTURE0),y.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,D.flipY),y.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),y.pixelStorei(H.UNPACK_ALIGNMENT,D.unpackAlignment);let un=y.getParameter(H.UNPACK_ROW_LENGTH),_e=y.getParameter(H.UNPACK_IMAGE_HEIGHT),Tn=y.getParameter(H.UNPACK_SKIP_PIXELS),Jn=y.getParameter(H.UNPACK_SKIP_ROWS),Li=y.getParameter(H.UNPACK_SKIP_IMAGES);y.pixelStorei(H.UNPACK_ROW_LENGTH,Ie.width),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ie.height),y.pixelStorei(H.UNPACK_SKIP_PIXELS,Ht),y.pixelStorei(H.UNPACK_SKIP_ROWS,ae),y.pixelStorei(H.UNPACK_SKIP_IMAGES,te);let Ms=M.isDataArrayTexture||M.isData3DTexture,Te=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){let Be=b.get(M),Di=b.get(D),Ce=b.get(Be.__renderTarget),Ni=b.get(Di.__renderTarget);y.bindFramebuffer(H.READ_FRAMEBUFFER,Ce.__webglFramebuffer),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Ss=0;Ss<Et;Ss++)Ms&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,b.get(M).__webglTexture,K,te+Ss),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,b.get(D).__webglTexture,St,ke+Ss)),H.blitFramebuffer(Ht,ae,At,vt,Vt,ye,At,vt,H.DEPTH_BUFFER_BIT,H.NEAREST);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||M.isRenderTargetTexture||b.has(M)){let Be=b.get(M),Di=b.get(D);y.bindFramebuffer(H.READ_FRAMEBUFFER,U),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,Y);for(let Ce=0;Ce<Et;Ce++)Ms?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Be.__webglTexture,K,te+Ce):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Be.__webglTexture,K),Te?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Di.__webglTexture,St,ke+Ce):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Di.__webglTexture,St),K!==0?H.blitFramebuffer(Ht,ae,At,vt,Vt,ye,At,vt,H.COLOR_BUFFER_BIT,H.NEAREST):Te?H.copyTexSubImage3D(Gt,St,Vt,ye,ke+Ce,Ht,ae,At,vt):H.copyTexSubImage2D(Gt,St,Vt,ye,Ht,ae,At,vt);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Te?M.isDataTexture||M.isData3DTexture?H.texSubImage3D(Gt,St,Vt,ye,ke,At,vt,Et,Ae,on,Ie.data):D.isCompressedArrayTexture?H.compressedTexSubImage3D(Gt,St,Vt,ye,ke,At,vt,Et,Ae,Ie.data):H.texSubImage3D(Gt,St,Vt,ye,ke,At,vt,Et,Ae,on,Ie):M.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,St,Vt,ye,At,vt,Ae,on,Ie.data):M.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,St,Vt,ye,Ie.width,Ie.height,Ae,Ie.data):H.texSubImage2D(H.TEXTURE_2D,St,Vt,ye,At,vt,Ae,on,Ie);y.pixelStorei(H.UNPACK_ROW_LENGTH,un),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_e),y.pixelStorei(H.UNPACK_SKIP_PIXELS,Tn),y.pixelStorei(H.UNPACK_SKIP_ROWS,Jn),y.pixelStorei(H.UNPACK_SKIP_IMAGES,Li),St===0&&D.generateMipmaps&&H.generateMipmap(Gt),y.unbindTexture()},this.initRenderTarget=function(M){b.get(M).__webglFramebuffer===void 0&&R.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?R.setTextureCube(M,0):M.isData3DTexture?R.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?R.setTexture2DArray(M,0):R.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){it=0,rt=0,ft=null,y.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};var hr=class extends yi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Cn;t.deleteAttribute("uv");let e=new ze({side:nn}),n=new ze,s=new ia(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new fe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ls(t,n,6),o=new Ge;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new fe(t,cr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new fe(t,cr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new fe(t,cr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new fe(t,cr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new fe(t,cr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new fe(t,cr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function cr(i){return new Qr({color:0,emissive:16777215,emissiveIntensity:i})}function yh(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ee,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Hd(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][u]);let m=Hd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Hd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new we(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){let x=h.getComponent(u,m);o.setComponent(u+f,m,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var sn=(i,t,e)=>Math.max(t,Math.min(e,i)),Vd=(i,t,e)=>{let n=sn((e-i)/(t-i),0,1);return n*n*(3-2*n)},Gd=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,gx=i=>i.t==="c"?i.mc?1.8+1.25*Math.log10(1+i.mc/1e8):1.8:i.t==="s"?1.2:i.v?1+.8*Math.log10(1+i.v/1e8):1;function _x(i,t){return t?"inv":i.t==="c"?i.mc?"tower":"block":i.t==="p"?"pawn":i.t==="s"?"sub":"tile"}function Wd(i,t,e={}){let{palette:n,accent:s="#3cf0b4"}=e,r=t.nodes.length,a=t.mapa,o=Math.min(innerWidth,innerHeight)<700,l=new ne(s),c=100/a.W,h=100,f=a.H*c,u=.55,d=G=>G*c-h/2,m=G=>G*c-f/2,x=new Ll({canvas:i,antialias:!0,powerPreference:"high-performance"});x.setPixelRatio(Math.min(devicePixelRatio||1,2)),x.toneMapping=sa,x.toneMappingExposure=1,x.outputColorSpace=tn,x.shadowMap.enabled=!0,x.shadowMap.type=ps,x.shadowMap.autoUpdate=!1;let g=!0,p=new yi;p.background=new ne(329483),p.fog=new os(329483,160,420);let S=new Ve(30,1,.5,1200),E=new Ji(x);p.environment=E.fromScene(new hr,.04).texture,p.environmentIntensity=.42;let _=new wi(16774118,2.3);_.position.set(-60,120,-40),_.castShadow=!0,_.shadow.mapSize.set(o?2048:4096,o?2048:4096),Object.assign(_.shadow.camera,{left:-h*.62,right:h*.62,top:f*.75,bottom:-f*.75,near:20,far:320}),_.shadow.bias=-4e-4,_.shadow.normalBias=.03,_.shadow.radius=3,p.add(_,_.target);let w=new wi(10336511,.45);w.position.set(70,60,90),p.add(w),p.add(new ds(12109533,724242,.42));let T=new ze({color:724499,roughness:.95,envMapIntensity:.2});T.onBeforeCompile=G=>{G.vertexShader=G.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),G.fragmentShader=G.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <color_fragment>",`#include <color_fragment>
      vec2 g = abs(fract(vWp.xz / 2.0 + 0.5) - 0.5) * 2.0;
      float dotk = 1.0 - smoothstep(0.045, 0.085, length(g));
      diffuseColor.rgb += vec3(0.05, 0.06, 0.075) * dotk;
      diffuseColor.rgb *= 1.0 - 0.55 * smoothstep(60.0, 160.0, length(vWp.xz));`)};let P=new fe(new Rn(700,700),T);P.rotation.x=-Math.PI/2,P.receiveShadow=!0,p.add(P);function v(G,dt,ht){let _t=new bi;return _t.moveTo(-G/2+ht,-dt/2),_t.lineTo(G/2-ht,-dt/2),_t.quadraticCurveTo(G/2,-dt/2,G/2,-dt/2+ht),_t.lineTo(G/2,dt/2-ht),_t.quadraticCurveTo(G/2,dt/2,G/2-ht,dt/2),_t.lineTo(-G/2+ht,dt/2),_t.quadraticCurveTo(-G/2,dt/2,-G/2,dt/2-ht),_t.lineTo(-G/2,-dt/2+ht),_t.quadraticCurveTo(-G/2,-dt/2,-G/2+ht,-dt/2),_t}let A={uDimOthers:{value:0},uFocus:{value:-1}},L=a.plates.map((G,dt)=>{let ht=(G.x1-G.x0)*c,_t=(G.y1-G.y0)*c,M=d((G.x0+G.x1)/2),D=m((G.y0+G.y1)/2),j=Math.min(1.2,Math.min(ht,_t)*.06),V=new ne(G.c==="inv"?n.investor:n.sector(G.c)),K=new Yr(v(ht,_t,j),{depth:u,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:3,curveSegments:8});K.rotateX(-Math.PI/2);let St=new ze({color:new ne(1317152).lerp(V,.055),roughness:.82,metalness:.05,envMapIntensity:.35});St.onBeforeCompile=te=>{Object.assign(te.uniforms,A,{uMe:{value:dt}}),te.vertexShader=te.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp; varying vec3 vNo;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz; vNo = normal;`),te.fragmentShader=te.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWp; varying vec3 vNo; uniform float uDimOthers; uniform float uFocus; uniform float uMe;`).replace("#include <color_fragment>",`#include <color_fragment>
        // grade fina de pontos no tampo, como uma placa de circuito
        vec2 g = abs(fract(vWp.xz / 1.0 + 0.5) - 0.5) * 2.0;
        float dotk = (1.0 - smoothstep(0.06, 0.12, length(g))) * step(0.5, vNo.y);
        diffuseColor.rgb += vec3(0.035, 0.04, 0.05) * dotk;
        float other = uFocus >= 0.0 && abs(uFocus - uMe) > 0.5 ? 1.0 : 0.0;
        diffuseColor.rgb *= 1.0 - 0.5 * uDimOthers * other;`)};let At=new fe(K,St);At.position.set(M,0,D),At.receiveShadow=!0,At.castShadow=!1,p.add(At);let vt=v(ht+.1,_t+.1,j+.05),Et=v(ht-.22,_t-.22,Math.max(.05,j-.11));vt.holes.push(new Si(Et.getPoints(48)));let Ht=new hs(vt,12);Ht.rotateX(-Math.PI/2);let ae=new fe(Ht,new Hn({color:V,transparent:!0,opacity:.55,blending:oi,depthWrite:!1}));return ae.position.set(M,u+.1,D),p.add(ae),{...G,j:dt,mesh:At,rim:ae,col:V,w:ht,h:_t,cx:M,cz:D,x0:d(G.x0),x1:d(G.x1),z0:m(G.y0),z1:m(G.y1)}}),k=u+.08,B=new Uint8Array(r),et=G=>it[G]*(.32+.22*Math.sqrt(sn(Math.log10(1+(t.nodes[G].v||0)/1e8)/4,0,1)));a.plates.forEach((G,dt)=>{if(G.c==="inv")for(let ht=0;ht<r;ht++)a.plate[ht]===dt&&(B[ht]=1)});let U=new Float32Array(r),Y=new Float32Array(r),it=new Float32Array(r),rt=new Float32Array(r),ft=new Array(r);for(let G=0;G<r;G++){let dt=t.nodes[G];U[G]=d(a.x[G]),Y[G]=m(a.y[G]),it[G]=gx(dt)*(a.pad||1.5)*c,ft[G]=_x(dt,B[G]),ft[G]==="tower"?rt[G]=.7+7.6*Math.pow(sn(Math.log10(dt.mc/2e8)/Math.log10(4e3),0,1),1.45):ft[G]==="block"?rt[G]=.42:ft[G]==="inv"?rt[G]=2.8*et(G):ft[G]==="pawn"?rt[G]=.42:rt[G]=.14}let F={uRise:{value:1},uDim:{value:0},uTime:{value:0},uAcc:{value:l},uFocus:{value:-1}},nt=new Int32Array(r).fill(-1),X=[];function Q(G,dt,ht,_t,M,{roof:D=!1,lift:j=0}={}){let V=Math.max(1,_t.length),K=new Float32Array(V),St=new Float32Array(V).fill(1),At=new Float32Array(V),vt=new Float32Array(V);dt.setAttribute("aHL",new Vn(K,1)),dt.setAttribute("aVis",new Vn(St,1)),dt.setAttribute("aDelay",new Vn(At,1)),dt.setAttribute("aPlate",new Vn(vt,1)),ht.onBeforeCompile=te=>{Object.assign(te.uniforms,F),te.vertexShader=te.vertexShader.replace("#include <common>",`#include <common>
attribute float aHL; attribute float aVis; attribute float aDelay; attribute float aPlate; uniform float uRise; uniform float uTime; uniform float uFocus; varying float vY; varying float vTopN; varying float vHL; varying float vOther;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float rise = smoothstep(aDelay, aDelay + 0.35, uRise);
          vY = position.y; vTopN = normal.y; vHL = aHL;
          vOther = uFocus >= 0.0 && abs(uFocus - aPlate) > 0.5 ? 1.0 : 0.0;
          transformed.y *= max(0.001, rise * aVis);
          transformed.xz *= aVis;
          ${j?`transformed.y += ${j.toFixed(2)} * aVis + 0.18 * sin(uTime * 1.3 + aDelay * 40.0) * aVis;`:""}`),te.fragmentShader=te.fragmentShader.replace("#include <common>",`#include <common>
varying float vY; varying float vTopN; varying float vHL; varying float vOther; uniform float uDim; uniform float uTime; uniform vec3 uAcc;`).replace("#include <color_fragment>",`#include <color_fragment>
          float top = step(0.5, vTopN);
          ${D?`vec3 secCol = diffuseColor.rgb;
          diffuseColor.rgb = mix(vec3(0.86, 0.87, 0.89), secCol, top);
          diffuseColor.rgb *= mix(0.62, 1.0, smoothstep(0.0, 0.3, vY));`:""}
          float isHL = step(0.01, vHL);
          float dimK = max(uDim * (1.0 - isHL), 0.75 * vOther * (1.0 - isHL));
          // o que n\xE3o est\xE1 em destaque fica escuro e sem cor, para o destaque saltar
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11))), 0.6 * dimK);
          diffuseColor.rgb *= 1.0 - 0.84 * dimK;
          diffuseColor.rgb = mix(diffuseColor.rgb, uAcc, vHL * (0.25 + 0.6 * top));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          totalEmissiveRadiance += uAcc * vHL * (0.10 + 0.5 * top) * (0.85 + 0.15 * sin(uTime * 3.0));`)};let Et=new ls(dt,ht,V),Ht=new ve,ae=new ne;return _t.forEach((te,Vt)=>{nt[te]=Vt,M(te,Ht,ae),Et.setMatrixAt(Vt,Ht),Et.setColorAt(Vt,ae),vt[Vt]=a.plate[te]}),Et.count=_t.length,Et.instanceMatrix.needsUpdate=!0,Et.instanceColor&&(Et.instanceColor.needsUpdate=!0),Et.userData={name:G,idx:_t,hl:K,vis:St,delay:At,geo:dt},Et.frustumCulled=!1,p.add(Et),X.push(Et),Et}let Rt={tower:[],block:[],tile:[],sub:[],pawn:[],inv:[]};for(let G=0;G<r;G++)Rt[ft[G]].push(G);let Kt=new N,Lt=new An,Xt=new N,at=()=>{let G=new Cn(1,1,1);return G.translate(0,.5,0),G},ct=Q("tower",at(),new ze({color:16777215,roughness:.42,metalness:.05}),Rt.tower,(G,dt,ht)=>{let _t=it[G]*1.05;dt.compose(Kt.set(U[G],k,Y[G]),Lt.identity(),Xt.set(_t,rt[G],_t)),ht.set(n.sector(t.nodes[G].c))},{roof:!0});ct.castShadow=!0,ct.receiveShadow=!0;let pt=Q("block",at(),new ze({color:16777215,roughness:.55}),Rt.block,(G,dt,ht)=>{let _t=it[G]*1;dt.compose(Kt.set(U[G],k,Y[G]),Lt.identity(),Xt.set(_t,rt[G],_t)),ht.set(n.sector(t.nodes[G].c)).lerp(new ne(10134445),.35)},{roof:!0});pt.castShadow=!0,pt.receiveShadow=!0;let Yt=()=>new ze({color:16777215,roughness:.6}),It=Q("tile",at(),Yt(),Rt.tile,(G,dt,ht)=>{let _t=it[G]*.7;dt.compose(Kt.set(U[G],k,Y[G]),Lt.identity(),Xt.set(_t,rt[G],_t)),ht.set(n.kind(t.nodes[G]))});It.receiveShadow=!0;let kt=Q("sub",at(),Yt(),Rt.sub,(G,dt,ht)=>{let _t=it[G]*.75;dt.compose(Kt.set(U[G],k,Y[G]),Lt.identity(),Xt.set(_t,rt[G],_t)),ht.set(n.kind(t.nodes[G]))});kt.receiveShadow=!0;let pe=(()=>{let G=new qs(.42,.5,.2,9,1,!1);G.translate(0,.1,0);let dt=new qs(.16,.32,.55,9,1,!0);dt.translate(0,.47,0);let ht=new Kr(.24,9,6);ht.translate(0,.86,0);let _t=yh([G,dt,ht]);return _t.scale(1,1/1.1,1),_t})(),ut=Q("pawn",pe,new ze({color:16777215,roughness:.45,metalness:.05}),Rt.pawn,(G,dt,ht)=>{let _t=it[G]*.62;dt.compose(Kt.set(U[G],k,Y[G]),Lt.identity(),Xt.set(_t,_t*1.1,_t)),ht.set(n.kind(t.nodes[G]))});ut.castShadow=!0;let yt=(()=>{let G=new Jr(1,0);return G.scale(.8,1.15,.8),G.translate(0,1.15,0),G})(),Tt=Q("inv",yt,new ze({color:16777215,roughness:.25,metalness:.35,flatShading:!0}),Rt.inv,(G,dt,ht)=>{let _t=t.nodes[G],M=et(G);dt.compose(Kt.set(U[G],k,Y[G]),Lt.identity(),Xt.set(M,M,M)),ht.set(n.kind(_t))},{lift:.5});Tt.castShadow=!0;let xt=28,wt=G=>k+rt[G];function qt(G,dt,ht){let _t=U[G],M=Y[G],D=U[dt],j=Y[dt],V=wt(G),K=wt(dt),At=.6+Math.hypot(D-_t,j-M)*.22;for(let vt=0;vt<=xt;vt++){let Et=vt/xt;ht[vt*3]=_t+(D-_t)*Et,ht[vt*3+1]=V+(K-V)*Et+At*Math.sin(Math.PI*Et),ht[vt*3+2]=M+(j-M)*Et}return ht}let Zt={uDim:{value:0},uAlpha:{value:1}},jt=new Je({uniforms:Zt,transparent:!0,depthWrite:!1,blending:oi,vertexShader:"attribute float aT; attribute float aW; varying float vT; varying float vW; void main(){ vT = aT; vW = aW; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uAlpha; uniform float uDim; varying float vT; varying float vW;
      void main(){ float a = smoothstep(0.0, 0.1, vT) * smoothstep(1.0, 0.9, vT); gl_FragColor = vec4(vec3(0.78, 0.85, 1.0) * a * vW * uAlpha * (1.0 - 0.9 * uDim), 1.0); }`}),Qt=null;function H(G){let dt=[];for(let[V,K,,St]of t.edges||[]){if(!(St&1)||G&&(!G[V]||!G[K])||a.plate[V]!==a.plate[K])continue;let At=t.nodes[K],vt=t.nodes[V];if(At.t!=="c"&&At.t!=="s")continue;let Et=Math.hypot(U[V]-U[K],Y[V]-Y[K]);vt.t!=="c"&&Et<6||dt.push([V,K,.1+.3*Vd(2,40,Et)])}let ht=new Float32Array(dt.length*xt*6),_t=new Float32Array(dt.length*xt*2),M=new Float32Array(dt.length*xt*2),D=new Float32Array((xt+1)*3);dt.forEach(([V,K,St],At)=>{qt(V,K,D);for(let vt=0;vt<xt;vt++){let Et=(At*xt+vt)*2;ht.set(D.subarray(vt*3,vt*3+6),Et*3),_t[Et]=vt/xt,_t[Et+1]=(vt+1)/xt,M[Et]=M[Et+1]=St}});let j=new Ee;j.setAttribute("position",new we(ht,3)),j.setAttribute("aT",new we(_t,1)),j.setAttribute("aW",new we(M,1)),Qt?(Qt.geometry.dispose(),Qt.geometry=j):(Qt=new Fr(j,jt),Qt.frustumCulled=!1,p.add(Qt))}H(null);let me={uTime:{value:0},uAcc:{value:l},uGrow:{value:1}},le=new Je({uniforms:me,transparent:!0,depthWrite:!1,blending:oi,vertexShader:`attribute float aPhase; attribute float aCtl; attribute float aLen; varying vec2 vUv; varying float vPhase; varying float vCtl; varying float vLen; varying vec3 vN; varying vec3 vV;
      void main(){ vUv = uv; vPhase = aPhase; vCtl = aCtl; vLen = aLen; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uTime; uniform vec3 uAcc; uniform float uGrow; varying vec2 vUv; varying float vPhase; varying float vCtl; varying float vLen; varying vec3 vN; varying vec3 vV;
      void main(){
        float t = vUv.x;
        if (t > uGrow) discard;
        float ends = smoothstep(0.0, 0.03, t) * smoothstep(1.0, 0.97, t);
        float core = pow(abs(dot(vN, vV)), 1.3);
        float w = 1.6 / max(2.0, vLen);
        float pulse = 0.0;
        for (int k = 0; k < 2; k++) { float c = fract(uTime * 3.0 / max(4.0, vLen) + vPhase + float(k) * 0.5); float d = c - t; pulse += smoothstep(w, 0.0, abs(d)) * (d < 0.0 ? 0.4 : 1.0); }
        vec3 base = mix(vec3(0.40, 0.48, 0.60), uAcc, vCtl);
        vec3 c = base * (0.25 + 0.45 * core) + mix(vec3(0.85, 0.92, 1.0), uAcc * 1.3 + 0.15, vCtl) * pulse * (0.5 + 0.5 * core);
        gl_FragColor = vec4(c * ends, 1.0);
      }`}),C=new fe(new Ee,le);C.frustumCulled=!1,p.add(C);let y=1;function tt(G){if(C.geometry.dispose(),!G.length){C.geometry=new Ee;return}let dt=new Float32Array((xt+1)*3),ht=G.slice(0,300).map(([_t,M,D],j)=>{qt(_t,M,dt);let V=new Zs(Array.from({length:xt+1},(vt,Et)=>new N().fromArray(dt,Et*3))),K=V.getLength(),St=new us(V,Math.max(24,Math.min(90,Math.round(K*2))),D?.11:.065,6,!1),At=St.attributes.position.count;return St.setAttribute("aPhase",new we(new Float32Array(At).fill(j*.137%1),1)),St.setAttribute("aCtl",new we(new Float32Array(At).fill(D?1:0),1)),St.setAttribute("aLen",new we(new Float32Array(At).fill(K),1)),St});C.geometry=yh(ht),ht.forEach(_t=>_t.dispose()),y=0}let b={v:0,to:0},R={v:0,to:0,plate:-1};function J(G,dt=.7){for(let ht of X)ht.userData.hl.fill(0);if(G)for(let[ht,_t]of G){let M=nt[ht];M<0||(W[ft[ht]].userData.hl[M]=_t)}for(let ht of X)ht.userData.geo.attributes.aHL.needsUpdate=!0;b.to=G?dt:0}let W={tower:ct,block:pt,tile:It,sub:kt,pawn:ut,inv:Tt};function z(G){R.plate=G,R.to=G>=0?1:0,F.uFocus.value=A.uFocus.value=G,L.forEach((dt,ht)=>{dt.rim.material.opacity=G<0?.55:ht===G?.95:.18})}function Z(G){for(let dt of X){let{idx:ht,vis:_t,geo:M}=dt.userData;ht.forEach((D,j)=>{_t[j]=G[D]?1:0}),M.attributes.aVis.needsUpdate=!0}H(G),g=!0}let q={t0:0,dur:0};function bt(){for(let G of X){let{idx:dt,delay:ht,geo:_t}=G.userData;dt.forEach((M,D)=>{ht[D]=sn(Math.hypot(U[M],Y[M]*1.3)/70,0,1)*.7+M%7*.01}),_t.attributes.aDelay.needsUpdate=!0}F.uRise.value=0,q.t0=performance.now(),q.dur=2400}let ot={W:1,H:1,offX:0,offY:0,toX:0,toY:0,inset:{l:0,r:0,t:0,b:0}},$={x:0,z:0,d:160,tx:0,tz:0,td:160,vx:0,vz:0,tilt:.3,fly:null},Nt=9,Dt=Math.max(260,f*2.2);function Jt(){S.position.set($.x,Math.cos($.tilt)*$.d,$.z+Math.sin($.tilt)*$.d),S.up.set(0,1,0),S.lookAt($.x,0,$.z),p.fog.near=$.d*1.2,p.fog.far=$.d*3.2}let O=new fs,mt=new Ct,st=new N;function Mt(G,dt,ht=k){mt.set(G/ot.W*2-1,-(dt/ot.H)*2+1),O.setFromCamera(mt,S);let _t=(ht-O.ray.origin.y)/O.ray.direction.y;return O.ray.origin.clone().addScaledVector(O.ray.direction,_t)}function Ut(G,dt,ht,_t,M=1.08){let D=S.fov*Math.PI/360,j=ot.inset,V=Math.max(200,ot.W-j.l-j.r),K=Math.max(160,ot.H-j.t-j.b),St=V/K,At=(dt-G)*M,Et=(_t-ht)*M/2/Math.tan(D)/Math.cos($.tilt)*(ot.H/K),Ht=At/2/(Math.tan(D)*St)*(ot.H/K);return sn(Math.max(Et,Ht)+2,Nt,Dt)}function gt(G,dt,ht,_t=1100){$.fly={a:{x:$.x,z:$.z,d:$.d},b:{x:G,z:dt,d:ht},t0:performance.now(),dur:_t},$.tx=G,$.tz=dt,$.td=ht,$.vx=$.vz=0}function zt(G,dt,ht,_t,M={}){let D=Math.max(M.minD||Nt,Ut(G,dt,ht,_t,M.pad||1.12));gt((G+dt)/2,(ht+_t)/2+(M.dz||0),D,M.dur||1100)}function Wt(G,dt={}){if(!G.length)return;let ht=1/0,_t=-1/0,M=1/0,D=-1/0;for(let V of G)ht=Math.min(ht,U[V]-it[V]),_t=Math.max(_t,U[V]+it[V]),M=Math.min(M,Y[V]-it[V]-rt[V]*.45-1.5),D=Math.max(D,Y[V]+it[V]);let j=dt.minSpan||14;if(_t-ht<j){let V=(ht+_t)/2;ht=V-j/2,_t=V+j/2}if(D-M<j*.6){let V=(M+D)/2;M=V-j*.3,D=V+j*.3}zt(ht,_t,M,D,dt)}function xe(G,dt={}){let ht=L[G];zt(ht.x0,ht.x1,ht.z0-1.5,ht.z1,{pad:1.06,...dt})}function ue(G=1100){zt(-h/2,h/2,-f/2-2,f/2,{pad:1.04,dur:G})}function je(G,dt){let ht=Mt(ot.W/2,ot.H/2),_t=Mt(ot.W/2+G,ot.H/2+dt);$.x-=_t.x-ht.x,$.z-=_t.z-ht.z,$.tx=$.x,$.tz=$.z,$.fly=null,Ii()}function rn(G,dt){let ht=Mt(ot.W/2,ot.H/2),_t=Mt(ot.W/2+G*16,ot.H/2+dt*16);$.vx=-(_t.x-ht.x),$.vz=-(_t.z-ht.z)}function gr(G,dt,ht){let _t=$.td,M=sn($.td*G,Nt,Dt);if($.fly=null,dt!=null){let D=Mt(dt,ht),j=1-M/_t;$.tx+=(D.x-$.tx)*j,$.tz+=(D.z-$.tz)*j}$.td=M}function Ii(){$.x=sn($.x,-h*.6,h*.6),$.z=sn($.z,-f*.7,f*.7),$.tx=sn($.tx,-h*.6,h*.6),$.tz=sn($.tz,-f*.7,f*.7)}let Pt=new N;function $t(G,dt={}){return Pt.set(U[G],wt(G)*(ft[G]==="tower"?F.uRise.value>=1?1:.6:1),Y[G]).project(S),dt.x=(Pt.x*.5+.5)*ot.W,dt.y=(-Pt.y*.5+.5)*ot.H,dt.f=Pt.z<1&&dt.x>-40&&dt.x<ot.W+40&&dt.y>-40&&dt.y<ot.H+40?1:0,dt.r=it[G],dt}function re(G,dt,ht,_t={}){return Pt.set(G,dt,ht).project(S),_t.x=(Pt.x*.5+.5)*ot.W,_t.y=(-Pt.y*.5+.5)*ot.H,_t.f=Pt.z<1?1:0,_t}function Se(){let G=re($.x,k,$.z),dt=re($.x+1,k,$.z);return Math.hypot(dt.x-G.x,dt.y-G.y)}let Le=[];function be(G,dt,ht){mt.set(G/ot.W*2-1,-(dt/ot.H)*2+1),O.setFromCamera(mt,S);let _t=-1,M=1/0;for(let St of X){Le.length=0,St.raycast(O,Le);for(let At of Le){let vt=St.userData.idx[At.instanceId];vt==null||ht&&!ht[vt]||At.distance<M&&(M=At.distance,_t=vt)}}if(_t>=0)return _t;let D=matchMedia("(pointer: coarse)").matches?16:8,j=Se(),V={},K=1/0;for(let St=0;St<r;St++){if(ht&&!ht[St])continue;re(U[St],k,Y[St],V);let At=Math.hypot(V.x-G,V.y-dt),vt=Math.max(2,it[St]*.6*j);if(At>D+vt)continue;let Et=At-vt-(t.nodes[St].t==="c"?3:0);Et<K&&(K=Et,_t=St)}return _t}function Qe(G,dt){let ht=Mt(G,dt,u);for(let _t of L)if(ht.x>=_t.x0&&ht.x<=_t.x1&&ht.z>=_t.z0&&ht.z<=_t.z1)return _t.j;return-1}let qe={t:0,last:performance.now()};function an(G=performance.now()){let dt=Math.min(.05,(G-qe.last)/1e3);if(qe.last=G,qe.t+=dt,$.fly){let ht=$.fly,_t=sn((G-ht.t0)/ht.dur,0,1),M=Gd(_t);$.x=ht.a.x+(ht.b.x-ht.a.x)*M,$.z=ht.a.z+(ht.b.z-ht.a.z)*M,$.d=ht.a.d+(ht.b.d-ht.a.d)*M,_t>=1&&($.fly=null)}else{$.x+=$.vx,$.z+=$.vz,$.tx+=$.vx,$.tz+=$.vz;let ht=Math.pow(.88,dt*60);$.vx*=ht,$.vz*=ht,Math.abs($.vx)+Math.abs($.vz)<.001&&($.vx=$.vz=0);let _t=Math.min(1,dt*9);$.x+=($.tx-$.x)*_t,$.z+=($.tz-$.z)*_t,$.d+=($.td-$.d)*_t,Ii()}if(Math.abs(ot.toX-ot.offX)+Math.abs(ot.toY-ot.offY)>.3){let ht=Math.min(1,dt*7);wn(ot.offX+(ot.toX-ot.offX)*ht,ot.offY+(ot.toY-ot.offY)*ht)}if(Jt(),S.updateMatrixWorld(),b.v+=(b.to-b.v)*Math.min(1,dt*5),R.v+=(R.to-R.v)*Math.min(1,dt*5),F.uDim.value=b.v,Zt.uDim.value=Math.max(b.v,R.v*.6),A.uDimOthers.value=R.v,F.uTime.value=me.uTime.value=qe.t,q.dur){let ht=sn((G-q.t0)/q.dur,0,1);F.uRise.value=1.4*ht,g=!0,ht>=1&&(q.dur=0,F.uRise.value=1.4)}Zt.uAlpha.value=Vd(.8,1.35,F.uRise.value),y=Math.min(1,y+dt*1.5),me.uGrow.value=Gd(y)}function pn(){g&&(x.shadowMap.needsUpdate=!0,g=!1),x.render(p,S)}function ts(){an();try{x.compile(p,S)}catch{}pn(),qe.last=performance.now()}function fi(G,dt){ot.W=Math.max(1,G),ot.H=Math.max(1,dt),x.setSize(ot.W,ot.H,!1),S.aspect=ot.W/ot.H,S.updateProjectionMatrix(),wn(ot.offX,ot.offY)}function Pi(G,dt,ht=!1){ot.toX=G,ot.toY=dt,ht&&wn(G,dt)}function es(G,dt,ht,_t,M=!1){ot.inset={l:G,r:dt,t:ht,b:_t},Pi((G-dt)/2,(ht-_t)/2,M)}function wn(G,dt){ot.offX=G,ot.offY=dt,S.setViewOffset(ot.W,ot.H,-G,-dt,ot.W,ot.H)}return{renderer:x,scene:p,camera:S,cam:$,view:ot,plates:L,update:an,render:pn,warmup:ts,resize:fi,setOffset:Pi,setInsets:es,pan:je,fling:rn,zoom:gr,flyTo:gt,flyToBox:zt,flyToNodes:Wt,flyToPlate:xe,fitAll:ue,pick:be,plateAt:Qe,project:$t,projectPoint:re,pxPerUnit:Se,setHighlight:J,setFlows:tt,setVisible:Z,setFocusPlate:z,intro:bt,isInv:B,shape:ft,X:U,Z:Y,R:it,TOP:k,PLATE_H:u,get scale(){return c},dispose(){x.dispose(),E.dispose()}}}var _a=new N;function Ln(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;_a.copy(t),_a[n]=0,_a.normalize();let c=.5*a/(a+o),h=1-_a.angleTo(i)/l;return Math.sign(_a[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Ul=class i extends Cn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new N,c=new N,h=new N(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,x=new N,g=.5/a;for(let p=0,S=0;p<f.length;p+=3,S+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:x.set(1,0,0),d[S+0]=Ln(x,c,"z","y",r,n),d[S+1]=1-Ln(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),d[S+0]=1-Ln(x,c,"z","y",r,n),d[S+1]=1-Ln(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),d[S+0]=1-Ln(x,c,"x","z",r,t),d[S+1]=Ln(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[S+0]=1-Ln(x,c,"x","z",r,t),d[S+1]=1-Ln(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[S+0]=1-Ln(x,c,"x","y",r,t),d[S+1]=1-Ln(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),d[S+0]=Ln(x,c,"x","y",r,t),d[S+1]=1-Ln(x,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Ei=(i,t,e)=>Math.max(t,Math.min(e,i)),Mh=i=>1-Math.pow(1-i,3),xx=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Sh='"Inter", -apple-system, system-ui, sans-serif',xa='"IBM Plex Mono", ui-monospace, Menlo, monospace';function Xd(i,t){let{W:e,colorOf:n,kindLabel:s,shortName:r,brl:a,pct:o,accent:l="#3cf0b4",onPick:c,onExt:h,canvas:f}=t,u=new ne(l),d=()=>innerWidth<=760,m=new yi;m.background=new ne(461069),m.fog=new os(461069,24,60);let x=new Ve(32,1,.1,200),g=new Ji(i);m.environment=g.fromScene(new hr,.04).texture,m.environmentIntensity=.55;let p=new wi(16774378,2.4);p.position.set(-6,14,7),p.castShadow=!0,p.shadow.mapSize.set(2048,2048),Object.assign(p.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:1,far:50}),p.shadow.bias=-5e-4,p.shadow.normalBias=.02,p.shadow.radius=6,m.add(p,p.target);let S=new wi(10336511,.5);S.position.set(8,6,-4),m.add(S),m.add(new ds(12109533,724242,.45));let E={uAcc:{value:u},uGlow:{value:0}},_=new ze({color:987929,roughness:.92,metalness:0,envMapIntensity:.2});_.onBeforeCompile=b=>{Object.assign(b.uniforms,E),b.vertexShader=b.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),b.fragmentShader=b.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWp; uniform vec3 uAcc; uniform float uGlow;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 g = abs(fract(vWp.xz / 0.5 + 0.5) - 0.5) * 0.5;
        float dotk = 1.0 - smoothstep(0.012, 0.022, length(g));
        float r = length(vWp.xz);
        diffuseColor.rgb += vec3(0.06, 0.075, 0.09) * dotk * (1.0 - smoothstep(10.0, 40.0, r));
        diffuseColor.rgb *= 1.0 - 0.45 * smoothstep(14.0, 48.0, r);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += uAcc * uGlow * 0.3 * exp(-pow(length(vWp.xz) / 2.0, 2.0));`)};let w=new fe(new Rn(260,260),_);w.rotation.x=-Math.PI/2,w.receiveShadow=!0,m.add(w);let T=new kn;m.add(T);let P=i.capabilities.getMaxAnisotropy();typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(b,R,J,W,z){this.moveTo(b+z,R),this.arcTo(b+J,R,b+J,R+W,z),this.arcTo(b+J,R+W,b,R+W,z),this.arcTo(b,R+W,b,R,z),this.arcTo(b,R,b+J,R,z),this.closePath()});function v(b,R,J){let W=document.createElement("canvas"),z=2;W.width=b*z,W.height=R*z;let Z=W.getContext("2d");Z.scale(z,z),J(Z,b,R);let q=new $s(W);return q.colorSpace=tn,q.anisotropy=Math.min(8,P),q}function A(b,R,J,W){let z=String(R).split(/\s+/),Z=[],q="";for(let bt of z){let ot=q?`${q} ${bt}`:bt;b.measureText(ot).width<=J||!q?q=ot:(Z.push(q),q=bt)}if(q&&Z.push(q),Z.length>W){Z.length=W;let bt=Z[W-1];for(;bt.length>1&&b.measureText(`${bt}\u2026`).width>J;)bt=bt.slice(0,-1);Z[W-1]=`${bt}\u2026`}return Z}function L(b,R,J,W,z,Z){b.save(),b.translate(J,W),b.strokeStyle=Z,b.fillStyle=Z,b.lineWidth=z*.09,b.lineJoin="round",b.lineCap="round";let q=z/2;if(b.beginPath(),R==="pf")b.arc(0,-q*.32,q*.3,0,Math.PI*2),b.stroke(),b.beginPath(),b.moveTo(-q*.6,q*.62),b.quadraticCurveTo(-q*.6,q*.05,0,q*.05),b.quadraticCurveTo(q*.6,q*.05,q*.6,q*.62),b.stroke();else if(R==="gov"){b.moveTo(-q*.7,-q*.2),b.lineTo(0,-q*.65),b.lineTo(q*.7,-q*.2),b.closePath(),b.stroke();for(let bt of[-.45,0,.45])b.beginPath(),b.moveTo(bt*q,-q*.1),b.lineTo(bt*q,q*.45),b.stroke();b.beginPath(),b.moveTo(-q*.75,q*.62),b.lineTo(q*.75,q*.62),b.stroke()}else R==="fund"||R==="pen"?(b.arc(0,0,q*.62,-Math.PI/2,Math.PI*1.25),b.stroke(),b.beginPath(),b.moveTo(0,0),b.lineTo(0,-q*.62),b.moveTo(0,0),b.lineTo(-q*.44,q*.44),b.stroke()):R==="ext"?(b.setLineDash([z*.12,z*.1]),b.strokeRect(-q*.6,-q*.45,q*1.2,q*.95)):(b.moveTo(-q*.62,q*.62),b.lineTo(-q*.62,-q*.35),b.lineTo(q*.05,-q*.65),b.lineTo(q*.05,q*.62),b.moveTo(q*.05,-q*.1),b.lineTo(q*.62,q*.05),b.lineTo(q*.62,q*.62),b.moveTo(-q*.8,q*.62),b.lineTo(q*.8,q*.62),b.stroke());b.restore()}let k=b=>b.t==="c"?"c":b.t==="p"?"pf":b.t==="s"?"sub":b.c,B={w:2.9,h:.26,d:1.12},et=new Ul(B.w,B.h,B.d,5,.12),U=new Rn(B.w-.16,B.d-.12);U.rotateX(-Math.PI/2);let Y=(()=>{let b=new bi,R=B.w/2+.07,J=B.d/2+.07,W=.2;b.moveTo(-R+W,-J),b.lineTo(R-W,-J),b.quadraticCurveTo(R,-J,R,-J+W),b.lineTo(R,J-W),b.quadraticCurveTo(R,J,R-W,J),b.lineTo(-R+W,J),b.quadraticCurveTo(-R,J,-R,J-W),b.lineTo(-R,-J+W),b.quadraticCurveTo(-R,-J,-R+W,-J);let z=new Si,Z=R-.035,q=J-.035,bt=W-.03;z.moveTo(-Z+bt,-q),z.lineTo(Z-bt,-q),z.quadraticCurveTo(Z,-q,Z,-q+bt),z.lineTo(Z,q-bt),z.quadraticCurveTo(Z,q,Z-bt,q),z.lineTo(-Z+bt,q),z.quadraticCurveTo(-Z,q,-Z,q-bt),z.lineTo(-Z,-q+bt),z.quadraticCurveTo(-Z,-q,-Z+bt,-q),b.holes.push(z);let ot=new hs(b,8);return ot.rotateX(-Math.PI/2),ot})(),it=(()=>{let b=document.createElement("canvas");b.width=b.height=128;let R=b.getContext("2d"),J=R.createRadialGradient(64,64,0,64,64,64);return J.addColorStop(0,"rgba(255,255,255,1)"),J.addColorStop(.4,"rgba(255,255,255,.35)"),J.addColorStop(1,"rgba(255,255,255,0)"),R.fillStyle=J,R.fillRect(0,0,128,128),new $s(b)})();function rt(b){return v(320,124,(R,J,W)=>{R.clearRect(0,0,J,W);let z=14,Z=14,q=44;R.fillStyle=b.dim?"#e9ebee":"#eef6f2",R.beginPath(),R.roundRect(z,Z,q,q,10),R.fill(),R.strokeStyle=b.dim?"#cfd3d8":"#bfe7d7",R.lineWidth=1,R.stroke(),L(R,b.kind,z+q/2,Z+q/2,26,b.dim?"#8a9097":"#1d9c70"),R.fillStyle=b.dim?"#5b616a":"#14171c",R.font=`700 19px ${Sh}`,R.textBaseline="alphabetic",A(R,b.name,J-80,2).forEach((Dt,Jt)=>R.fillText(Dt,70,34+Jt*22));let ot=W-18;R.font=`600 14px ${xa}`,b.pct&&(R.fillStyle=b.ctl?"#0f8f63":"#3d4652",R.fillText(b.pct,14,ot));let $=b.pct?R.measureText(b.pct).width+12:0;R.font=`500 12px ${xa}`,R.fillStyle="#6c7480";let Nt=b.sub.toUpperCase();for(;Nt.length>4&&R.measureText(Nt).width>J-28-$;)Nt=Nt.slice(0,-2);R.fillText(Nt,14+$,ot),R.fillStyle=b.color,R.fillRect(14,W-8,Math.min(J-28,40+200*(b.share||0)),2.5)})}function ft(b){return v(256,256,(R,J,W)=>{let z=R.createRadialGradient(J/2,W/2,0,J/2,W/2,J/2);z.addColorStop(0,"#0f3a32"),z.addColorStop(1,"#08221d"),R.fillStyle=z,R.fillRect(0,0,J,W),R.textAlign="center";let Z=b.tk||b.n.replace(/[^A-Za-zÀ-ÿ0-9 ]/g,"").split(/\s+/).filter(Boolean).slice(0,2).map(bt=>bt[0]).join("").toUpperCase();R.fillStyle="#e9fff6",R.font=`700 ${Z.length>5?38:50}px ${Sh}`,R.fillText(Z,J/2,W/2+4),R.font=`600 15px ${Sh}`,R.fillStyle="rgba(220,240,232,.78)";let q=r(b.n);R.fillText(q.length>24?`${q.slice(0,22)}\u2026`:q,J/2,W/2+36),R.font=`500 12px ${xa}`,R.fillStyle="rgba(150,230,200,.75)",R.fillText((b.t==="c"?b.mc?a(b.mc):"capital fechado":s(b)).toUpperCase(),J/2,W/2-44)})}let F={uTime:{value:0},uAcc:{value:u},uGrow:{value:0}},nt=new Je({uniforms:F,vertexShader:`attribute float aCtl; attribute float aPhase; attribute float aDir; attribute float aLen; varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying float vCtl; varying float vPhase; varying float vDir; varying float vLen;
      void main(){ vUv = uv; vCtl = aCtl; vPhase = aPhase; vDir = aDir; vLen = aLen; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uTime; uniform vec3 uAcc; uniform float uGrow; varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying float vCtl; varying float vPhase; varying float vDir; varying float vLen;
      void main(){
        float t = vUv.x;
        float tf = vDir > 0.5 ? t : 1.0 - t; // 0 no dono, 1 no possu\xEDdo
        if (tf > uGrow) discard;
        vec3 L = normalize(vec3(-0.3, 0.9, 0.35));
        float dif = 0.35 + 0.65 * max(dot(vN, L), 0.0);
        float rimk = pow(1.0 - max(dot(vN, vV), 0.0), 2.5);
        float rings = 0.82 + 0.18 * smoothstep(0.2, 0.8, abs(sin(t * vLen * 22.0)));
        vec3 base = mix(vec3(0.17, 0.19, 0.22), vec3(0.26, 0.29, 0.33), vCtl) * dif * rings + rimk * 0.08;
        // pulsos de comprimento fixo (em unidades da mesa), qualquer que seja o tamanho do cabo
        float w = 0.5 / max(1.0, vLen);
        float e = 0.0;
        for (int k = 0; k < 2; k++) {
          float c = fract(uTime * 0.55 / max(1.0, vLen) + vPhase + float(k) * 0.5);
          float d = c - tf;
          e += smoothstep(w, 0.0, abs(d)) * (d < 0.0 ? 0.5 : 1.0);
        }
        e *= 0.3 + 0.7 * vCtl;
        vec3 col = mix(base, uAcc * 1.6 * dif + uAcc * 0.5, clamp(e, 0.0, 1.0));
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),X={open:!1,focus:-1,items:[],cables:null,hub:null,t0:0,a:0,aTo:0,hover:null,bounds:null,bands:[]},Q={x:0,z:1.2,dist:15,tx:0,tz:1.2,tdist:15,vx:0,vz:0,yaw:0};function Rt(){for(let b of[...T.children])T.remove(b),b.traverse(R=>{if(R.geometry&&R.geometry!==et&&R.geometry!==U&&R.geometry!==Y&&R.geometry.dispose(),R.material)for(let J of[].concat(R.material))J.map&&J.map!==it&&J.map.dispose(),J!==nt&&J.dispose()});X.items=[],X.cables=null,X.hub=null}function Kt(b,R){Rt();let J=e.nodes[b],W=[{key:`w${b}`,w:b,lvl:0}],z=new Map([[b,W[0]]]),Z=[],q=[b];for(let Pt=-1;Pt>=-4&&q.length;Pt--){let $t=[];for(let re of q){let Se=e.inc[re].filter(Le=>e.ef[Le]&1||e.ep[Le]>=5||e.ep[Le]<0).sort((Le,be)=>(e.ef[be]&1)-(e.ef[Le]&1)||e.ep[be]-e.ep[Le]).slice(0,Pt===-1?14:5);for(let Le of Se){let be=e.es[Le];if(!z.has(be)){if(Pt<-1&&!(e.ef[Le]&1))continue;let Qe={key:`w${be}`,w:be,lvl:Pt};z.set(be,Qe),W.push(Qe),$t.push(be)}z.get(be).lvl<z.get(re).lvl&&Z.push({a:z.get(be),b:z.get(re),p:e.ep[Le],ctl:e.ef[Le]&1})}}q=$t}let bt=e.out[b].filter(Pt=>!z.has(e.et[Pt])).sort((Pt,$t)=>(e.ef[$t]&1)-(e.ef[Pt]&1)||e.ep[$t]-e.ep[Pt]);for(let Pt of bt){let $t=e.et[Pt],re={key:`w${$t}`,w:$t,lvl:1};z.set($t,re),W.push(re),Z.push({a:z.get(b),b:re,p:e.ep[Pt],ctl:e.ef[Pt]&1})}for(let Pt of R||[]){let $t=String(Pt.cnpj||"").replace(/\D/g,""),re=e.byCnpj.get($t);if(re!=null&&z.has(re))continue;let Se=re!=null?{key:`w${re}`,w:re,lvl:1}:{key:`x${$t||Pt.n}`,ext:Pt,lvl:1};re!=null&&z.set(re,Se),W.push(Se),Z.push({a:z.get(b),b:Se,p:Pt.pct,ctl:(Pt.pct||0)>50})}for(let Pt of W.filter($t=>$t.lvl===1&&$t.w!=null).slice(0,18))for(let $t of e.out[Pt.w].filter(re=>e.ef[re]&1).slice(0,4)){let re=e.et[$t];if(z.has(re))continue;let Se={key:`w${re}`,w:re,lvl:2};z.set(re,Se),W.push(Se),Z.push({a:Pt,b:Se,p:e.ep[$t],ctl:1})}let ot=W.filter(Pt=>Pt.lvl>0);if(ot.length>64){let Pt=new Set(ot.slice(0,64));for(let $t=W.length-1;$t>=0;$t--)W[$t].lvl>0&&!Pt.has(W[$t])&&W.splice($t,1);for(let $t=Z.length-1;$t>=0;$t--)(!W.includes(Z[$t].b)||!W.includes(Z[$t].a))&&Z.splice($t,1)}let $=ct(W,Z);X.bands=$;for(let Pt of $){let $t=at(Pt);$t&&T.add($t)}let Nt=new kn,Dt=1.25,Jt=[[0,0],[Dt,0],[Dt+.06,.05],[Dt+.08,.16],[Dt+.06,.34],[Dt,.4],[Dt-.12,.42],[0,.42]].map(([Pt,$t])=>new Ct(Pt,$t)),O=new fe(new Zr(Jt,96),new ze({color:1063475,roughness:.32,metalness:.55}));O.castShadow=!0,O.receiveShadow=!0;let mt=new fe(new jr(Dt-.2,.045,16,128),new ze({color:u,emissive:u,emissiveIntensity:1.6,roughness:.3}));mt.rotation.x=-Math.PI/2,mt.position.y=.43;let st=ft(J),Mt=new fe(new zr(Dt-.3,64),new ze({color:16777215,roughness:.45,metalness:.2,map:st,emissive:16777215,emissiveMap:st,emissiveIntensity:.35}));Mt.rotation.x=-Math.PI/2,Mt.position.y=.425;let Ut=new fe(new Rn(6,6),new Hn({map:it,color:u,transparent:!0,opacity:.22,blending:oi,depthWrite:!1}));Ut.rotation.x=-Math.PI/2,Ut.position.y=.012,Nt.add(O,mt,Mt,Ut),Nt.userData={key:`w${b}`,w:b,nd:W[0],ring:mt,glow:Ut},T.add(Nt),X.hub=Nt;let gt=Math.max(1,...Z.map(Pt=>Pt.p||0));for(let Pt of W){if(Pt.lvl===0)continue;let $t=Pt.w!=null?e.nodes[Pt.w]:null,re=Pt.lvl<0?Z.find(pn=>pn.a===Pt):Z.find(pn=>pn.b===Pt),Se=!!(re&&re.ctl),Le=$t?{name:r($t.n),kind:k($t),color:n($t),sub:$t.t==="c"?[$t.tk,$t.mc?a($t.mc):"capital fechado"].filter(Boolean).join(" \xB7 "):s($t),pct:re&&re.p>=0?o(re.p):"",ctl:Se,share:(re?.p||0)/gt}:{name:Pt.ext.n,kind:"ext",color:"#8a9097",sub:Pt.ext.pais&&!/^brasil$/i.test(Pt.ext.pais)?Pt.ext.pais:"capital fechado",pct:re&&re.p>=0?o(re.p):"",ctl:Se,dim:!0,share:(re?.p||0)/gt},be=new kn,Qe=new fe(et,new ze({color:Le.dim?12172739:15264492,roughness:.5,metalness:0}));Qe.castShadow=!0,Qe.receiveShadow=!0,Qe.position.y=B.h/2+.02;let qe=new fe(U,new ze({map:rt(Le),transparent:!0,roughness:.55}));qe.position.y=B.h+.022;let an=new fe(Y,new Hn({color:Se?u:new ne(7306380),transparent:!0,opacity:Se?.9:.35,blending:oi,depthWrite:!1}));an.position.y=.015,be.add(Qe,qe,an),be.position.set(Pt.x,0,Pt.z),be.userData={nd:Pt,card:Qe,rim:an,ctl:Se,baseY:0},T.add(be),X.items.push(be)}let zt=[];if(Z.forEach((Pt,$t)=>{let re=Pt.a.lvl===0?null:Pt.a,Se=Pt.b.lvl===0?null:Pt.b,Le=re?new N(re.x,.13,re.z+(re.z<(Se?Se.z:0)?B.d/2:-B.d/2)):null,be=Se?new N(Se.x,.13,Se.z+(Se.z<(re?re.z:0)?B.d/2:-B.d/2)):null,Qe=dt=>{let ht=new N(dt.x,0,dt.z).normalize();return new N(ht.x*(Dt+.05),.16,ht.z*(Dt+.05))},qe=Le||Qe(be),an=be||Qe(Le),pn=an.z-qe.z,ts=qe.clone().add(new N(0,0,pn*.5)),fi=an.clone().add(new N(0,0,-pn*.5));re||ts.copy(qe).add(new N(qe.x*.5,0,qe.z*.5)),Se||fi.copy(an).add(new N(an.x*.5,0,an.z*.5));let Pi=new Js(qe,ts,fi,an),es=Pi.getLength(),wn=new us(Pi,Math.max(24,Math.round(es*10)),Pt.ctl?.085:.05,10,!1),G=wn.attributes.position.count;wn.setAttribute("aCtl",new we(new Float32Array(G).fill(Pt.ctl?1:0),1)),wn.setAttribute("aPhase",new we(new Float32Array(G).fill($t*.173%1),1)),wn.setAttribute("aDir",new we(new Float32Array(G).fill(1),1)),wn.setAttribute("aLen",new we(new Float32Array(G).fill(es),1)),zt.push(wn)}),zt.length){let Pt=Lt(zt),$t=new fe(Pt,nt);$t.castShadow=!0,T.add($t),X.cables=$t}let Wt=-2,xe=2,ue=-2,je=2;for(let Pt of W)Wt=Math.min(Wt,Pt.x-B.w/2),xe=Math.max(xe,Pt.x+B.w/2),ue=Math.min(ue,Pt.z-B.d/2),je=Math.max(je,Pt.z+B.d/2);for(let Pt of $)ue=Math.min(ue,Pt.zLab-.3);X.bounds={x0:Wt,x1:xe,z0:ue,z1:je};let rn=d()?3:5,gr=W.filter(Pt=>Pt.lvl===1).sort((Pt,$t)=>Pt.z-$t.z||Pt.x-$t.x).slice(0,rn*2),Ii=W.filter(Pt=>Pt.lvl===-1).sort((Pt,$t)=>$t.z-Pt.z||Pt.x-$t.x);X.near=W.filter(Pt=>Pt.lvl===0).concat(d()?Ii.slice(0,rn*2):Ii,gr),X.nearAllOwners=!d()||Ii.length<=rn*2}function Lt(b){let R=0,J=0;for(let $ of b)R+=$.attributes.position.count,J+=$.index.count;let W=new Ee,z=["position","normal","uv","aCtl","aPhase","aDir","aLen"],Z={};for(let $ of z)Z[$]=new Float32Array(R*b[0].attributes[$].itemSize);let q=new Uint32Array(J),bt=0,ot=0;for(let $ of b){for(let Dt of z)Z[Dt].set($.attributes[Dt].array,bt*$.attributes[Dt].itemSize);let Nt=$.index.array;for(let Dt=0;Dt<Nt.length;Dt++)q[ot+Dt]=Nt[Dt]+bt;bt+=$.attributes.position.count,ot+=Nt.length,$.dispose()}for(let $ of z)W.setAttribute($,new we(Z[$],b[0].attributes[$].itemSize));return W.setIndex(new we(q,1)),W}let Xt={"-1":"Acionistas diretos","-2":"Quem controla os acionistas","-3":"Controle acima","-4":"Controle final",1:"Participa\xE7\xF5es e controladas",2:"Controladas das controladas"};function at(b){let R=`${Xt[b.lvl]||(b.lvl<0?"Controle acima":"Mais abaixo")} \xB7 ${b.n}`.toUpperCase(),J=34,W=.3/J,z=document.createElement("canvas").getContext("2d");z.font=`600 17px ${xa}`;let Z=Math.ceil(z.measureText(R).width+30),q=v(Z,J,($,Nt,Dt)=>{$.clearRect(0,0,Nt,Dt),$.fillStyle=b.lvl<0?"rgba(150,170,200,.9)":"rgba(60,240,180,.85)",$.beginPath(),$.arc(8,Dt/2,4,0,Math.PI*2),$.fill(),$.font=`600 17px ${xa}`,$.textBaseline="middle",$.fillStyle="rgba(205,214,226,.82)",$.fillText(R,22,Dt/2+1)}),bt=new Rn(Z*W,J*W);bt.rotateX(-Math.PI/2);let ot=new fe(bt,new Hn({map:q,transparent:!0,depthWrite:!1,toneMapped:!1}));return ot.position.set(b.x0+Z*W/2,.012,b.zLab),ot.userData.band=b.lvl,ot}function ct(b,R){let J=d()?3:5,W=.45,z=1.75,Z=3.1,q=new Map;for(let O of b)(q.get(O.lvl)||q.set(O.lvl,[]).get(O.lvl)).push(O);let bt=O=>{let mt=R.filter(st=>st.b===O).map(st=>st.a.x||0);return mt.length?mt.reduce((st,Mt)=>st+Mt,0)/mt.length:0},ot=O=>{let mt=R.filter(st=>st.a===O).map(st=>st.b.x||0);return mt.length?mt.reduce((st,Mt)=>st+Mt,0)/mt.length:0},$=q.get(0)[0];$.x=0,$.z=0;let Nt=[],Dt=O=>{let mt=Math.min(J,O);return-(mt*B.w+(mt-1)*W)/2},Jt=-Z+.4;for(let O of[...q.keys()].filter(mt=>mt<0).sort((mt,st)=>st-mt)){let mt=q.get(O);mt.sort((st,Mt)=>ot(st)-ot(Mt));for(let st=0;st<mt.length;st+=J){let Mt=mt.slice(st,st+J),Ut=Mt.length*B.w+(Mt.length-1)*W;Mt.forEach((gt,zt)=>{gt.x=-Ut/2+B.w/2+zt*(B.w+W),gt.z=Jt}),Jt-=z}Nt.push({lvl:O,n:mt.length,x0:Dt(mt.length),zLab:Jt+z-B.d/2-.36}),Jt-=Z-z}Jt=Z-.4;for(let O of[...q.keys()].filter(mt=>mt>0).sort((mt,st)=>mt-st)){let mt=q.get(O);O>1&&mt.sort((st,Mt)=>bt(st)-bt(Mt)),Nt.push({lvl:O,n:mt.length,x0:Dt(mt.length),zLab:Jt-B.d/2-.36});for(let st=0;st<mt.length;st+=J){let Mt=mt.slice(st,st+J),Ut=Mt.length*B.w+(Mt.length-1)*W;Mt.forEach((gt,zt)=>{gt.x=-Ut/2+B.w/2+zt*(B.w+W),gt.z=Jt}),Jt+=z}Jt+=Z-z}return Nt}let pt={W:1,H:1,offX:0,offY:0,freeW:1,freeH:1,top:0};function Yt(){x.setViewOffset(pt.W,pt.H,-pt.offX,-pt.offY,pt.W,pt.H)}function It(b){let R=X.near&&X.near.length>1?X.near.reduce((W,z)=>({x0:Math.min(W.x0,z.x-B.w/2),x1:Math.max(W.x1,z.x+B.w/2),z0:Math.min(W.z0,z.z-B.d/2),z1:Math.max(W.z1,z.z+B.d/2)}),{x0:-2,x1:2,z0:-2,z1:2}):X.bounds,J=X.bands.find(W=>W.lvl===-1);J&&R!==X.bounds&&X.nearAllOwners&&(R.z0=Math.min(R.z0,J.zLab-.3)),kt(R,b)}function kt(b,R){let J=b.x1-b.x0+1.2,W=b.z1-b.z0+1.6,z=pt.freeW/pt.H,Z=x.fov*Math.PI/360,q=J/2/Math.tan(Z)/z,bt=W/2/Math.tan(Z)*(pt.H/Math.max(200,pt.freeH));Q.tdist=Ei(Math.max(q,bt)*1.04,6,90),Q.tx=(b.x0+b.x1)/2,Q.tz=(b.z0+b.z1)/2,R&&(Q.dist=Q.tdist,Q.x=Q.tx,Q.z=Q.tz)}function pe(){x.position.set(Q.x+Math.sin(Q.yaw)*Math.cos(1.5)*Q.dist,Math.sin(1.5)*Q.dist,Q.z+Math.cos(Q.yaw)*Math.cos(1.5)*Q.dist),x.lookAt(Q.x,0,Q.z),p.position.set(Q.x-6,14,Q.z+7),p.target.position.set(Q.x,0,Q.z)}let ut=new fs,yt=new Ct;function Tt(b,R){yt.set(b/pt.W*2-1,-(R/pt.H)*2+1),ut.setFromCamera(yt,x);let J=X.items.map(z=>z.userData.card);X.hub&&J.push(X.hub.children[0]);let W=ut.intersectObjects(J,!1)[0];return W?W.object===X.hub?.children[0]?X.hub:X.items.find(z=>z.userData.card===W.object):null}let xt=new Map,wt=null,qt=null,Zt=0;function jt(b,R){yt.set(b/pt.W*2-1,-(R/pt.H)*2+1),ut.setFromCamera(yt,x);let J=-ut.ray.origin.y/ut.ray.direction.y;return ut.ray.origin.clone().addScaledVector(ut.ray.direction,J)}function Qt(b){if(X.open){try{f.setPointerCapture(b.pointerId)}catch{}if(xt.set(b.pointerId,{x:b.clientX,y:b.clientY}),xt.size===2){let[R,J]=[...xt.values()];qt={d:Math.hypot(R.x-J.x,R.y-J.y)},wt=null;return}wt={sx:b.clientX,sy:b.clientY,x:b.clientX,y:b.clientY,moved:!1,g:jt(b.clientX,b.clientY)},Q.vx=Q.vz=0}}function H(b){if(X.open){if(xt.has(b.pointerId)&&xt.set(b.pointerId,{x:b.clientX,y:b.clientY}),qt&&xt.size===2){let[R,J]=[...xt.values()],W=Math.hypot(R.x-J.x,R.y-J.y);Q.tdist=Ei(Q.tdist*(qt.d/Math.max(1,W)),5,90),Q.dist=Q.tdist,qt.d=W;return}if(wt){if(!wt.moved&&Math.hypot(b.clientX-wt.sx,b.clientY-wt.sy)>6&&(wt.moved=!0,f.classList.add("dragging")),wt.moved){pe(),x.updateMatrixWorld();let R=jt(b.clientX,b.clientY),J=wt.g.x-R.x,W=wt.g.z-R.z;Q.x+=J,Q.z+=W,Q.tx=Q.x,Q.tz=Q.z,Q.vx=J,Q.vz=W}return}if(b.pointerType==="mouse"){let R=Tt(b.clientX,b.clientY);R!==X.hover&&(X.hover=R,f.classList.toggle("pointing",!!R))}}}function me(b){if(!X.open)return;if(xt.delete(b.pointerId),f.classList.remove("dragging"),qt){xt.size<2&&(qt=null);return}if(!wt)return;let R=wt;if(wt=null,R.moved)return;let J=performance.now(),W=J-Zt<320;Zt=J;let z=Tt(b.clientX,b.clientY);if(!z)return;let Z=z.userData.nd;if(Z.ext){h(Z.ext);return}X.selected=z,c(Z.w,W&&z!==X.hub)}function le(b){if(!X.open)return;b.preventDefault();let R=Math.exp(b.deltaY*(b.ctrlKey?.012:.0016)),J=jt(b.clientX,b.clientY),W=Ei(Q.tdist*R,5,90),z=1-W/Q.tdist;Q.tx+=(J.x-Q.tx)*z,Q.tz+=(J.z-Q.tz)*z,Q.tdist=W}f.addEventListener("pointerdown",Qt),f.addEventListener("pointermove",H),f.addEventListener("pointerup",me),f.addEventListener("pointercancel",me),f.addEventListener("wheel",le,{passive:!1});let C=performance.now(),y=0;function tt(b){let R=Math.min(.05,(b-C)/1e3);C=b,y+=R;let J=Ei((b-X.t0)/1400,0,1);if(X.hub){let W=Mh(Ei(J*1.8,0,1));X.hub.scale.setScalar(.6+.4*W),X.hub.position.y=-.4*(1-W),X.hub.userData.ring.material.emissiveIntensity=1.2+.35*Math.sin(y*2.2)}X.items.forEach((W,z)=>{let Z=W.userData.nd,q=Ei((J-.15-Math.min(.5,(Math.abs(Z.lvl)-1)*.12+z%12*.025))/.35,0,1),bt=Mh(q),ot=X.hover===W?1:0,$=X.selected===W?1:0;W.userData.lift=(W.userData.lift||0)+(ot*.18+$*.1-(W.userData.lift||0))*Math.min(1,R*12),W.position.y=-.5*(1-bt)+W.userData.lift,W.scale.setScalar(.85+.15*bt),W.visible=q>0,W.userData.rim.material.opacity=(W.userData.ctl?.9:.35)*bt+$*.4}),F.uGrow.value=xx(Ei((J-.3)/.6,0,1)),F.uTime.value=y,E.uGlow.value=Mh(Ei(J*1.5,0,1)),!wt&&!qt&&(Q.x+=(Q.tx-Q.x)*Math.min(1,R*6),Q.z+=(Q.tz-Q.z)*Math.min(1,R*6)),Q.dist+=(Q.tdist-Q.dist)*Math.min(1,R*7),m.fog.near=Q.dist*1.35,m.fog.far=Q.dist*3.2,Q.yaw=0,pe(),i.shadowMap.needsUpdate=!0,i.render(m,x)}return{get focus(){return X.focus},open(b,R){Kt(b,R),X.open=!0,X.focus=b,X.t0=performance.now(),X.hover=null,X.selected=X.hub,It(!0),Q.dist=Q.tdist*1.25},close(){X.open=!1,X.focus=-1,Rt()},frame:tt,resize(b,R){pt.W=b,pt.H=R,x.aspect=b/R,x.updateProjectionMatrix(),Yt()},setFree(b,R,J,W=0){pt.offX=(b-R)/2,pt.offY=(W-J)/2,pt.freeW=Math.max(200,pt.W-b-R),pt.freeH=Math.max(200,pt.H-J-W),Yt(),X.open&&It(!1)},zoom(b){Q.tdist=Ei(Q.tdist*b,5,90)},fit(){X.bounds&&kt(X.bounds)}}}var vx="mapa-2",ur=["fin","tech","saude","log","agro","ind","util","oil","base","cons","imob","out"];function yx(i){return i.t==="c"?i.mc?1.8+1.25*Math.log10(1+i.mc/1e8):1.8:i.t==="s"?1.2:i.v?1+.8*Math.log10(1+i.v/1e8):1}function Mx(i){let t=i.nodes.length,e=new Int32Array(t),n=new Int32Array(t);for(let[s,r]of i.edges||[])e[r]++,i.nodes[r].t==="c"&&n[s]++;return Uint8Array.from(i.nodes,(s,r)=>s.t==="j"&&(s.c==="gov"||(s.c==="fund"||s.c==="pen")&&!e[r]&&n[r]>=2)?1:0)}function Sx(i,t){let e=i.nodes,n=e.length,s=new Int16Array(n).fill(-1),r=o=>{let l=ur.indexOf(o);return l<0?ur.length-1:l};e.forEach((o,l)=>{o.t==="c"&&(s[l]=r(o.c))});let a=Array.from({length:n},()=>[]);for(let[o,l,,c]of i.edges||[]){let h=c&1?3:1;a[o].push([l,h]),a[l].push([o,h])}for(let[o,l]of i.board||[])a[o].push([l,.3]),a[l].push([o,.3]);for(let o=0;o<6;o++){let l=0;for(let c=0;c<n;c++){if(s[c]>=0)continue;let h=new Float64Array(ur.length),f=!1;for(let[u,d]of a[c])s[u]>=0&&!t[u]&&(h[s[u]]+=d*(e[u].t==="c"?2:1),f=!0);if(f){let u=0;for(let d=1;d<h.length;d++)h[d]>h[u]&&(u=d);s[c]=u,l++}}if(!l)break}for(let o=0;o<n;o++)s[o]<0&&(s[o]=ur.length-1);return s}function bx(i,t,e,n,s){let r=[],a=i.slice(),o=t,l=e,c=n,h=s,f=(u,d)=>{let m=u.reduce((g,p)=>g+p.a,0),x=0;for(let g of u){let p=m/d,S=g.a/p;x=Math.max(x,Math.max(p/S,S/p))}return x};for(;a.length;){let u=Math.min(c,h),d=[a.shift()];for(;a.length&&f([...d,a[0]],u)<=f(d,u);)d.push(a.shift());let m=d.reduce((x,g)=>x+g.a,0);if(c>=h){let x=m/h,g=l;for(let p of d){let S=p.a/x;r.push({...p,x0:o,y0:g,x1:o+x,y1:g+S}),g+=S}o+=x,c-=x}else{let x=m/c,g=o;for(let p of d){let S=p.a/x;r.push({...p,x0:g,y0:l,x1:g+S,y1:l+x}),g+=S}l+=x,h-=x}}return r}var wx=1.62,$d=.62;function bh(i,{log:t=()=>{},aspect:e=wx}={}){let n=i.nodes,s=n.length,r=i.pos||[],a=Mx(i),o=Sx(i,a),l=ur.length,c=Int16Array.from(o,(F,nt)=>a[nt]?l:F),h=Float64Array.from(n,F=>yx(F)*1.5),f=new Float64Array(l+1);for(let F=0;F<s;F++)f[c[F]]+=Math.PI*h[F]*h[F];let u=[];for(let F=0;F<=l;F++)f[F]>0&&u.push({k:F,c:F===l?"inv":ur[F],a:f[F]/.42});u.sort((F,nt)=>nt.a-F.a);let d=u.reduce((F,nt)=>F+nt.a,0),m=Math.sqrt(d*e),x=d/m,g=bx(u,0,0,m,x),p=Math.sqrt(d),S=p*Math.sqrt(1.62)*.014,E=g.map(F=>({c:F.c,k:F.k,x0:F.x0+S/2,y0:F.y0+S/2,x1:F.x1-S/2,y1:F.y1-S/2})),_=new Map(E.map((F,nt)=>[F.k,nt])),w=new Float64Array(s),T=new Float64Array(s),P=F=>{let nt=Math.min(F.x1-F.x0,F.y1-F.y0)*.06+2,X=Math.min((F.y1-F.y0)*.16,p/Math.sqrt(1.62)*.045);return{x0:F.x0+nt,x1:F.x1-nt,y0:F.y0+nt+X,y1:F.y1-nt}};for(let F of E){let nt=[];for(let Lt=0;Lt<s;Lt++)c[Lt]===F.k&&nt.push(Lt);let X=P(F);if(F.c==="inv"){nt.sort((at,ct)=>(n[ct].v||0)-(n[at].v||0)||at-ct);let Lt=Math.max(1,Math.round(Math.sqrt(nt.length*((X.x1-X.x0)/Math.max(1,X.y1-X.y0))))),Xt=Math.ceil(nt.length/Lt);nt.forEach((at,ct)=>{w[at]=X.x0+(ct%Lt+.5)*((X.x1-X.x0)/Lt),T[at]=X.y0+(Math.floor(ct/Lt)+.5)*((X.y1-X.y0)/Xt)});continue}let Q=Lt=>{let Xt=Lt.map((It,kt)=>kt).sort((It,kt)=>Lt[It]-Lt[kt]||It-kt),at=new Float64Array(Lt.length);Xt.forEach((It,kt)=>{at[It]=(kt+.5)/Lt.length});let ct=Xt.map(It=>Lt[It]),pt=ct[Math.floor(ct.length*.03)]??0,Yt=ct[Math.ceil(ct.length*.97)-1]??1;return Lt.map((It,kt)=>.6*at[kt]+.4*Math.min(1,Math.max(0,(It-pt)/Math.max(1e-9,Yt-pt))))},Rt=Q(nt.map(Lt=>r[2*Lt]||0)),Kt=Q(nt.map(Lt=>r[2*Lt+1]||0));nt.forEach((Lt,Xt)=>{w[Lt]=X.x0+Rt[Xt]*(X.x1-X.x0),T[Lt]=X.y0+Kt[Xt]*(X.y1-X.y0)})}let v=[];for(let[F,nt,,X]of i.edges||[])c[F]===c[nt]&&c[F]!==l&&v.push([F,nt,X&1?.06:.02]);let A=new Int32Array(s).fill(-1);for(let F of i.groups||[])if(F.nc>=2)for(let nt of F.m)nt!==F.h&&c[nt]===c[F.h]&&n[nt].t==="c"&&(A[nt]=F.h);let L=new Map(E.map(F=>[F.k,P(F)])),k=Array.from(h).sort((F,nt)=>F-nt),B=Math.max(2,k[Math.floor(k.length/2)]*2.2),et=(F,nt)=>(F+4096)*8192+(nt+4096),U=new Float64Array(s),Y=new Float64Array(s),it=new Map,rt=160;for(let F=0;F<rt;F++){let nt=1-F/rt;U.fill(0),Y.fill(0);for(let[Q,Rt,Kt]of v){let Lt=w[Rt]-w[Q],Xt=T[Rt]-T[Q],at=Math.hypot(Lt,Xt)||1e-9,ct=(h[Q]+h[Rt])*1.1;if(at<=ct)continue;let pt=Kt*(at-ct)/at;U[Q]+=Lt*pt,Y[Q]+=Xt*pt,U[Rt]-=Lt*pt,Y[Rt]-=Xt*pt}for(let Q=0;Q<s;Q++)A[Q]>=0&&(U[Q]+=(w[A[Q]]-w[Q])*.03,Y[Q]+=(T[A[Q]]-T[Q])*.03);it.clear();for(let Q=0;Q<s;Q++){let Rt=et(Math.floor(w[Q]/B),Math.floor(T[Q]/B)),Kt=it.get(Rt);Kt||it.set(Rt,Kt=[]),Kt.push(Q)}for(let Q=0;Q<s;Q++){let Rt=Math.floor(w[Q]/B),Kt=Math.floor(T[Q]/B),Lt=Math.ceil(2*h[Q]/B);for(let Xt=Rt-Lt;Xt<=Rt+Lt;Xt++)for(let at=Kt-Lt;at<=Kt+Lt;at++){let ct=it.get(et(Xt,at));if(ct)for(let pt of ct){if(h[pt]>h[Q]||h[pt]===h[Q]&&pt<=Q||c[pt]!==c[Q])continue;let Yt=w[Q]-w[pt],It=T[Q]-T[pt],kt=Math.hypot(Yt,It)||1e-6,pe=h[Q]+h[pt];if(kt>=pe)continue;let ut=(pe-kt)/kt*.5;U[Q]+=Yt*ut,Y[Q]+=It*ut,U[pt]-=Yt*ut,Y[pt]-=It*ut}}}let X=3*nt+.3;for(let Q=0;Q<s;Q++){if(c[Q]===l)continue;let Rt=U[Q],Kt=Y[Q],Lt=Math.hypot(Rt,Kt);Lt>X&&(Rt*=X/Lt,Kt*=X/Lt);let Xt=L.get(c[Q]);w[Q]=Math.min(Xt.x1-h[Q]*.5,Math.max(Xt.x0+h[Q]*.5,w[Q]+Rt)),T[Q]=Math.min(Xt.y1-h[Q]*.5,Math.max(Xt.y0+h[Q]*.5,T[Q]+Kt))}}t(`mapa: ${E.length} blocos, ${s} n\xF3s, ${m.toFixed(0)} \xD7 ${x.toFixed(0)}`);let ft=F=>Math.round(F*10)/10;return{v:vx,W:ft(m),H:ft(x),pad:1.5,x:Array.from(w,ft),y:Array.from(T,ft),plate:Array.from(c,F=>_.get(F)),plates:E.map(F=>({c:F.c,x0:ft(F.x0),y0:ft(F.y0),x1:ft(F.x1),y1:ft(F.y1)}))}}var Bt=(i,t=document)=>t.querySelector(i),ie=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ya=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Oe=(i,t=0)=>Number(i).toLocaleString("pt-BR",{minimumFractionDigits:t,maximumFractionDigits:t}),tf=i=>typeof i=="number"&&isFinite(i),Re=i=>tf(i)?i>=1e12?`R$ ${Oe(i/1e12,2)} tri`:i>=1e9?`R$ ${Oe(i/1e9,i>=1e11?0:1)} bi`:i>=1e6?`R$ ${Oe(i/1e6,0)} mi`:`R$ ${Oe(i)}`:"\u2013",Yn=i=>tf(i)&&i>=0?`${Oe(i,i>=10||i===Math.round(i)?i===Math.round(i)?0:1:2)}%`:"\u2013",Fe=(i,t,e)=>`${Oe(i)} ${i===1?t:e}`,qn=(i,t="ic")=>`<svg class="${t}" aria-hidden="true"><use href="#i-${i}"/></svg>`,dr={get:(i,t)=>{try{let e=localStorage.getItem(`n1:${i}`);return e==null?t:JSON.parse(e)}catch{return t}},set:(i,t)=>{try{localStorage.setItem(`n1:${i}`,JSON.stringify(t))}catch{}}},Ph=matchMedia("(prefers-reduced-motion: reduce)").matches,vs=matchMedia("(pointer: coarse)").matches,$e=i=>{let t=String(i).replace(/[\s,]+(S\.?\/?A\.?|S\/a|Ltda\.?|Inc\.?|LLC|S\.à ?r\.l\.?|Sarl|S\.R\.L\.)\s*$/i,"").replace(/\s*\(.*?\)\s*$/,"").replace(/[\s,;-]+$/,"");return t.length>34?`${t.slice(0,32)}\u2026`:t},Tx=i=>i.length===14?`${i.slice(0,2)}.${i.slice(2,5)}.${i.slice(5,8)}/${i.slice(8,12)}-${i.slice(12)}`:i;function Ma(i){let t=Bt("#toast");t.textContent=i,t.hidden=!1,clearTimeout(Ma.t),Ma.t=setTimeout(()=>{t.hidden=!0},2800)}var fr={fin:["#8fb8e8","Bancos e servi\xE7os financeiros","Financeiro"],tech:["#7cc6d9","Telecom, m\xEDdia e tecnologia","Tecnologia"],saude:["#78cfc0","Sa\xFAde e educa\xE7\xE3o","Sa\xFAde"],log:["#8ccfa3","Transporte e log\xEDstica","Log\xEDstica"],agro:["#b5cf86","Agro, alimentos e bebidas","Agro"],ind:["#d4c97f","Ind\xFAstria e bens de capital","Ind\xFAstria"],util:["#e3bb72","Energia el\xE9trica e saneamento","Energia"],oil:["#e59f78","Petr\xF3leo, g\xE1s e qu\xEDmica","Petr\xF3leo"],base:["#d99090","Minera\xE7\xE3o, siderurgia e papel","Minera\xE7\xE3o"],cons:["#d996b4","Varejo e consumo","Consumo"],imob:["#b9a0dd","Constru\xE7\xE3o e im\xF3veis","Imobili\xE1rio"],out:["#a8b3bf","Holdings e outros","Holdings"]},Vl={pf:["#f0c9a0","Pessoa f\xEDsica"],hold:["#8ea3bd","Holding ou empresa"],fund:["#a9a2f5","Gestora ou fundo"],pen:["#d39af0","Fundo de pens\xE3o"],gov:["#f2d37a","Governo"],sub:["#7fd6b4","Controlada em comum"]},ef="#b3a6f7",Ol="#3cf0b4",di=i=>(fr[i]||fr.out)[0],Lh=i=>i.t==="s"?"sub":i.t==="p"?"pf":Vl[i.c]?i.c:"hold",Zn=i=>i.t==="c"?di(i.c):Vl[Lh(i)][0],bn=i=>i.t==="c"?"Companhia aberta":Vl[Lh(i)][1],Ex={sector:di,kind:i=>Vl[Lh(i)][0],investor:ef};var I={ready:!1};function Ax(i){let t=i.nodes,e=t.length;Object.assign(I,{data:i,nodes:t,N:e,groups:i.groups||[],setores:i.setores||{}}),t.forEach((r,a)=>{r.i=a,r.f=ya(r.n)});let n=i.edges||[];I.M=n.length,I.es=new Int32Array(I.M),I.et=new Int32Array(I.M),I.ep=new Float32Array(I.M),I.ef=new Uint8Array(I.M),n.forEach(([r,a,o,l],c)=>{I.es[c]=r,I.et[c]=a,I.ep[c]=o,I.ef[c]=l});let s=i.board||[];I.B=s.length,I.bs=new Int32Array(I.B),I.bt=new Int32Array(I.B),I.br=s.map(r=>r[2]),s.forEach(([r,a],o)=>{I.bs[o]=r,I.bt[o]=a}),I.out=Array.from({length:e},()=>[]),I.inc=Array.from({length:e},()=>[]),I.brd=Array.from({length:e},()=>[]);for(let r=0;r<I.M;r++)I.out[I.es[r]].push(r),I.inc[I.et[r]].push(r);for(let r=0;r<I.B;r++)I.brd[I.bs[r]].push(r),I.brd[I.bt[r]].push(r);I.groups.forEach((r,a)=>{r.i=a,r.f=ya(r.n);let o={};for(let l of r.m)t[l].t==="c"&&(o[t[l].c]=(o[t[l].c]||0)+(t[l].mc||1e8));r.sector=Object.entries(o).sort((l,c)=>c[1]-l[1])[0]?.[0]||"out"}),I.deg=Float32Array.from(t,(r,a)=>I.out[a].length+I.inc[a].length+I.brd[a].length),I.crank=new Int32Array(e).fill(1e9),t.map((r,a)=>a).filter(r=>t[r].t==="c").sort((r,a)=>(t[a].mc||0)-(t[r].mc||0)).forEach((r,a)=>{I.crank[r]=a}),I.labelOrder=t.map((r,a)=>a).sort((r,a)=>Bl(a)-Bl(r)),I.byId=new Map(t.map(r=>[r.id,r.i])),I.byK=new Map(t.filter(r=>r.k).map(r=>[r.k,r.i])),I.bySlug=new Map(t.filter(r=>r.s).map(r=>[r.s,r.i])),I.byCnpj=new Map(t.filter(r=>r.cnpj).map(r=>[r.cnpj,r.i])),I.ready=!0}var Bl=i=>{let t=I.nodes[i];return t.t==="c"?1e15+(t.mc||0)+I.deg[i]*1e8:(t.v||0)+I.deg[i]*5e8},lt={mode:"world",hover:-1,sel:-1,group:-1,sector:-1,shape:null,hl:null,layers:{people:!0,funds:!0,board:!1,ctlonly:!1,groups:!0,...dr.get("mundo-layers",{})},pathIds:null,lastInput:performance.now()},xn=new Uint8Array(1);function nf(){xn=new Uint8Array(I.N);let i=lt.layers;for(let t=0;t<I.N;t++){let e=I.nodes[t],n=1;e.t==="p"&&!i.people&&(n=0),e.t==="j"&&(e.c==="fund"||e.c==="pen")&&!i.funds&&(n=0),e.b&&!i.board&&!I.out[t].length&&!I.inc[t].length&&(n=0),i.ctlonly&&e.t!=="c"&&!I.out[t].some(s=>I.ef[s]&1)&&(n=0),xn[t]=n}Ft?.setVisible(xn)}var Ft=null,ui=null;function Dh(i){let t=new Set([i]),e=new Set,n=new Set;for(let s of I.out[i])xn[I.et[s]]&&(!lt.layers.ctlonly||I.ef[s]&1)&&(t.add(I.et[s]),e.add(s));for(let s of I.inc[i])xn[I.es[s]]&&(!lt.layers.ctlonly||I.ef[s]&1)&&(t.add(I.es[s]),e.add(s));if(lt.layers.board||I.nodes[i].b)for(let s of I.brd[i]){let r=I.bs[s]===i?I.bt[s]:I.bs[s];t.add(r),n.add(s)}return{nodes:t,edges:e,brd:n}}function Nn(i,t,e,n=[],s=.75,r=!1){if(lt.hl=i,!Ft)return;if(!i){Ft.setHighlight(null),Ft.setFlows([]);return}let a=new Map;for(let l of i)a.set(l,.5);for(let l of n)a.set(l,1);Ft.setHighlight(a,s);let o=[];for(let l of t||[])o.push([I.es[l],I.et[l],r?1:I.ef[l]&1]);for(let l of e||[])o.push([I.bs[l],I.bt[l],r?1:0]);o.sort((l,c)=>c[2]-l[2]),Ft.setFlows(o)}function Ke(i,{fly:t=!0,push:e=!0}={}){if(lt.mode!=="world"&&hi(!1),Ri(),lt.sel=i,lt.group=-1,Nh(),mr(),i<0){Nn(null),af(),e&&Qi("");return}let n=Dh(i);Nn(n.nodes,n.edges,n.brd,[i]),Uh(i),Gl(),t&&Ft.flyToNodes([...n.nodes],{minSpan:18}),e&&Qi(`n/${I.nodes[i].id}`)}function zl(i,{push:t=!0}={}){lt.mode!=="world"&&hi(!1),Ri();let e=I.groups[i];lt.sel=-1,lt.group=i,Nh(),mr();let n=new Set(e.m),s=new Set;for(let r of e.m)for(let a of I.out[r])n.has(I.et[a])&&s.add(a);Nn(n,s,new Set,e.m.filter(r=>I.nodes[r].t==="c")),Lx(i),Gl(),Ft.flyToNodes(e.m,{minSpan:20}),t&&Qi(`g/${i}`)}var qd=i=>(I.data.mapa.plates||[]).findIndex(t=>t.c===i);function Sa(i,{push:t=!0,fly:e=!0}={}){i<0||(lt.mode!=="world"&&hi(!1),Ri(),lt.sel=-1,lt.group=-1,lt.sector=i,mr(),Nn(null),Ft.setFocusPlate(i),Kx(i),e&&Ft.flyToPlate(i),Gl(),t&&Qi(`setor/${I.data.mapa.plates[i].c}`))}function Nh(){lt.sector<0||(lt.sector=-1,Ft?.setFocusPlate(-1))}function Yd(i){if(!Ft||lt.mode!=="world")return;if(lt.shape===i||!i){mr(),lt.sel>=0?Ke(lt.sel,{fly:!1,push:!1}):Nn(null);return}(lt.sel>=0||lt.group>=0)&&(lt.sel=-1,lt.group=-1,lt.sector<0&&af(),Qi(lt.sector>=0?`setor/${I.data.mapa.plates[lt.sector].c}`:""),Gl()),Ri(),lt.shape=i,sf();let t=new Set,e=new Map;for(let n=0;n<I.N;n++)xn[n]&&Ft.shape[n]===i&&(lt.sector<0||I.data.mapa.plate[n]===lt.sector)&&(t.add(n),e.set(n,.02));lt.hl=t,Ft.setHighlight(e,.85),Ft.setFlows([])}function mr(){lt.shape&&(lt.shape=null,sf())}var sf=()=>{for(let i of document.querySelectorAll("#m-key [data-shape]"))i.classList.toggle("on",i.dataset.shape===lt.shape)};function rf(i){let t=-1,e=-2;for(let n of I.inc[i])I.ef[n]&1&&I.ep[n]>e&&(e=I.ep[n],t=I.es[n]);return t}function Cx(i){let t=[i],e=new Set([i]);for(;;){let n=rf(t[t.length-1]);if(n<0||e.has(n))break;e.add(n),t.push(n)}return t}var Rx=(i,t)=>I.out[i].find(e=>I.et[e]===t);function Ix(i){let t=Zn(i);if(i.t==="c"){let e=i.n.replace(/[^A-Za-zÀ-ÿ0-9 ]/g,"").split(/\s+/).filter(Boolean).slice(0,2).map(n=>n[0]).join("").toUpperCase();return`<span class="m-badge" style="--c:${t}"><span>${ie(e)}</span>${i.tk?`<img src="https://icons.brapi.dev/icons/${ie(i.tk)}.svg" alt="" loading="lazy" onload="this.naturalWidth > 1 ? this.classList.add('ok') : this.remove()" onerror="this.remove()">`:""}</span>`}if(i.t==="p"){let e=i.n.split(/\s+/).filter(n=>n&&!/^(de|da|do|das|dos|e)$/i.test(n)).slice(0,2).map(n=>n[0]).join("").toUpperCase();return`<span class="m-badge round" style="--c:${t}"><span>${ie(e)}</span></span>`}return`<span class="m-badge" style="--c:${t}">${qn("cias")}</span>`}function Ai(i,t,e,n){let s=I.nodes[i];return`<li data-go="${i}"><span class="m-dot" style="--c:${Zn(s)}"></span><span class="nm">${ie(s.n)}</span>
    <span class="pc ${n?"m-ctl":""}">${ie(t)}</span>${e?`<small>${ie(e)}</small>`:""}</li>`}function ys(i,t=8,e=""){return i.length?`<ul class="m-list" ${e?`data-list="${e}"`:""}>${i.slice(0,t).join("")}${i.length>t?`<li class="more" data-more="${e}">Mostrar mais ${i.length-t}</li>`:""}</ul>`:""}function Px(i){let t=i.filter(h=>h.p>0).slice(0,7);if(!t.length)return"";let e=t.reduce((h,f)=>h+f.p,0),n=e>100?100/e:1;e=Math.min(100,e);let s=46,r=2*Math.PI*s,a=0,o=t.map(h=>{let f=h.p*n/100,u=Math.max(0,f*r-2),d=`<circle r="${s}" cx="60" cy="60" fill="none" stroke="${Zn(I.nodes[h.o])}" stroke-width="${h.ctl?13:10}" stroke-dasharray="${u.toFixed(2)} ${(r-u).toFixed(2)}" stroke-dashoffset="${(-a*r).toFixed(2)}" data-go="${h.o}"><title>${ie(I.nodes[h.o].n)} \xB7 ${Yn(h.p)}</title></circle>`;return a+=f,d}).join(""),l=t[0],c=t.slice(0,5).map(h=>`<li data-go="${h.o}"><i style="--c:${Zn(I.nodes[h.o])}"></i><span>${ie($e(I.nodes[h.o].n))}</span><b>${Yn(h.p)}</b></li>`).join("")+(e<99.5?`<li class="rest"><i></i><span>Demais acionistas</span><b>${Yn(100-e)}</b></li>`:"");return`<div class="m-donut"><svg viewBox="0 0 120 120" aria-hidden="true"><circle r="${s}" cx="60" cy="60" fill="none" class="m-donut-track" stroke-width="10"/><g transform="rotate(-90 60 60)">${o}</g>
    <text x="60" y="56" text-anchor="middle" class="m-donut-v">${Yn(l.p)}</text><text x="60" y="72" text-anchor="middle" class="m-donut-l">${l.ctl?"controle":"maior fatia"}</text></svg>
    <ul>${c}</ul></div>`}var Dn={},Zd={P:"Presidente do conselho",E:"Diretor-presidente (CEO)",C:"Conselho de administra\xE7\xE3o",D:"Diretoria"};function Uh(i){let t=I.nodes[i],e=Bt("#m-panel-body"),n=I.inc[i].map(m=>({j:m,o:I.es[m],p:I.ep[m],ctl:I.ef[m]&1})).sort((m,x)=>x.ctl-m.ctl||x.p-m.p),s=I.out[i].map(m=>({j:m,o:I.et[m],p:I.ep[m],ctl:I.ef[m]&1})).sort((m,x)=>x.ctl-m.ctl||(I.nodes[x.o].mc||0)*x.p-(I.nodes[m.o].mc||0)*m.p||x.p-m.p),r=I.brd[i].map(m=>({j:m,o:I.bs[m]===i?I.bt[m]:I.bs[m],r:I.br[m]})),a=t.g!=null?I.groups[t.g]:null,o=Cx(i),l=s.filter(m=>m.ctl).length,c=t.t==="c"?[t.tk||"capital fechado",t.st,t.uf]:[bn(t),t.pais,t.cnpj?Tx(t.cnpj):""],h=t.t==="c"?[["Valor de mercado",t.mc?Re(t.mc):"\u2013"],["Acionistas",Oe(n.length)],["Participa\xE7\xF5es",Oe(s.length)]]:[["Participa\xE7\xF5es",Oe(s.length)],["Valor estimado",t.v?Re(t.v):"\u2013"],[r.length?"Cargos":"Controla",Oe(r.length||l)]];Dn={inc:n.map(m=>Ai(m.o,Yn(m.p),[m.ctl?"controlador":"",I.ef[m.j]&2?"acordo de acionistas":"",bn(I.nodes[m.o])].filter(Boolean).join(" \xB7 "),m.ctl)),out:s.map(m=>Ai(m.o,Yn(m.p),[m.ctl?"controla":"",I.nodes[m.o].mc?`valor de mercado ${Re(I.nodes[m.o].mc)}`:bn(I.nodes[m.o])].filter(Boolean).join(" \xB7 "),m.ctl)),brd:r.map(m=>{let x=I.nodes[m.o];if(t.t==="c"){let g=I.brd[m.o].map(p=>I.bs[p]===m.o?I.bt[p]:I.bs[p]).filter(p=>p!==i).map(p=>$e(I.nodes[p].n));return Ai(m.o,"",`${Zd[m.r]||"Cargo"} aqui \xB7 tamb\xE9m em ${g.slice(0,3).join(", ")}${g.length>3?` e mais ${g.length-3}`:""}`,!1)}return Ai(m.o,"",`${Zd[m.r]||"Cargo"}${x.mc?` \xB7 ${Re(x.mc)}`:""}`,!1)})};let f=t.t==="c"&&t.k?`cias.html#cia/${encodeURIComponent(t.k)}`:t.s?`cias.html#pessoa/${encodeURIComponent(t.s)}`:"",u=t.t==="c"?I.setores[t.c]||fr[t.c]?.[1]:"",d=lt.mode==="tree";e.innerHTML=`
    <div class="m-kicker" style="--c:${Zn(t)}"><i></i>${ie(t.t==="c"?u||"Companhia aberta":bn(t))}</div>
    <div class="m-head">${Ix(t)}<div><h2>${ie(t.n)}</h2><p>${ie(c.filter(Boolean).join(" \xB7 "))}</p></div></div>
    ${a&&a.nc>=2?`<div class="m-chips"><button class="m-chip gold" data-group="${a.i}" type="button">${qn("cias","ic ic-xs")}Grupo ${ie(a.n)} \xB7 ${Fe(a.nc,"companhia","companhias")}</button></div>`:""}
    <div class="m-stats">${h.map(([m,x])=>`<div class="m-stat"><span>${m}</span><b>${ie(x)}</b></div>`).join("")}</div>
    <div class="m-btns">
      ${d&&lt.treeFocus===i?`<button class="m-btn primary" type="button" data-act="world">${qn("map")}Ver no mapa</button>`:`<button class="m-btn primary" type="button" data-act="tree">${qn("tree")}Estrutura societ\xE1ria</button>`}
      <button class="m-btn" type="button" data-act="path">${qn("path")}Conectar com\u2026</button>
      ${f?`<a class="m-btn wide ghost" href="${f}">${t.t==="c"?"Perfil completo da companhia":"Perfil completo"} ${qn("ext")}</a>`:""}
    </div>
    <div id="m-pick-slot"></div>
    ${t.t==="c"&&n.length?`<div class="m-sec"><h3>Composi\xE7\xE3o acion\xE1ria<small>participa\xE7\xF5es relevantes</small></h3>${Px(n)}</div>`:""}
    ${o.length>1?`<div class="m-sec"><h3>Quem controla<small>do controlador final at\xE9 aqui</small></h3><ol class="m-chain">${o.slice().reverse().map((m,x,g)=>{let p=g[x+1],S=p!=null?Rx(m,p):null,E=S==null?"":I.ef[S]&2?`bloco de controle \xB7 ${Yn(I.ep[S])}`:`controla com ${Yn(I.ep[S])}`;return`<li data-go="${m}" class="${m===i?"me":""}"><span class="nm">${ie(I.nodes[m].n)}</span><span class="pc">${E}</span></li>`}).join("")}</ol></div>`:""}
    ${n.length?`<div class="m-sec"><h3>${t.t==="c"?"Acionistas":"Quem \xE9 dono"}<small>${Fe(n.length,"acionista","acionistas")} relevante${n.length===1?"":"s"}</small></h3>${ys(Dn.inc,8,"inc")}</div>`:""}
    ${s.length?`<div class="m-sec"><h3>${t.t==="c"?"Participa\xE7\xF5es em outras":"Participa\xE7\xF5es"}<small>${Fe(s.length,"empresa","empresas")}</small></h3>${ys(Dn.out,8,"out")}</div>`:""}
    ${r.length?`<div class="m-sec"><h3>${t.t==="c"?"Quem do conselho ou da diretoria tamb\xE9m est\xE1 em outras":"Cargos"}<small>${Fe(r.length,t.t==="c"?"pessoa":"companhia",t.t==="c"?"pessoas":"companhias")}</small></h3>${ys(Dn.brd,8,"brd")}</div>`:""}
    <p class="m-foot">Participa\xE7\xF5es acima de 5% e controladores, como declarados no Formul\xE1rio de Refer\xEAncia de cada companhia \xE0 CVM${t.v?"; valor estimado = participa\xE7\xE3o \xD7 valor de mercado":""}.</p>`,ba()}function Lx(i){let t=I.groups[i],e=t.m.filter(a=>I.nodes[a].t==="c").sort((a,o)=>(I.nodes[o].mc||0)-(I.nodes[a].mc||0)),n=I.nodes[t.h];Dn={cos:e.map(a=>Ai(a,I.nodes[a].mc?Re(I.nodes[a].mc):"",[I.nodes[a].tk,a===t.h?"topo do grupo":""].filter(Boolean).join(" \xB7 "),!1))};let s=e.reduce((a,o)=>a+(I.nodes[o].mc||0),0),r=s?`<div class="m-bar">${e.filter(a=>I.nodes[a].mc).slice(0,12).map(a=>`<span data-go="${a}" style="flex:${I.nodes[a].mc/s};--c:${Zn(I.nodes[a])}" title="${ie(I.nodes[a].n)} \xB7 ${Re(I.nodes[a].mc)}"></span>`).join("")}</div>`:"";Bt("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${di(t.sector)}"><i></i>Grupo econ\xF4mico \xB7 ${ie(fr[t.sector]?.[1]||"")}</div>
    <div class="m-head"><span class="m-badge" style="--c:${di(t.sector)}">${qn("cias")}</span><div><h2>Grupo ${ie(t.n)}</h2><p>${Fe(t.nc,"companhia aberta","companhias abertas")} \xB7 ${Fe(t.m.length,"entidade","entidades")}</p></div></div>
    <div class="m-stats">
      <div class="m-stat"><span>Valor de mercado</span><b>${ie(t.mc?Re(t.mc):"\u2013")}</b></div>
      <div class="m-stat"><span>Companhias</span><b>${Oe(t.nc)}</b></div>
      <div class="m-stat"><span>Entidades</span><b>${Oe(t.m.length)}</b></div>
    </div>
    ${r}
    <div class="m-btns"><button class="m-btn primary wide" type="button" data-act="tree" data-node="${t.h}">${qn("tree")}Estrutura a partir de ${ie($e(n.n))}</button></div>
    ${t.r.length?`<div class="m-sec"><h3>Controle final</h3>${ys(t.r.map(a=>Ai(a,"",bn(I.nodes[a]),!0)),6)}</div>`:""}
    <div class="m-sec"><h3>Companhias do grupo<small>valor de mercado</small></h3>${ys(Dn.cos,12,"cos")}</div>
    <p class="m-foot">Grupo = companhias que chegam ao mesmo topo seguindo, em cada uma, o acionista controlador de maior participa\xE7\xE3o.</p>`,ba()}function ba(){let i=Bt("#m-panel");innerWidth<=760&&(i.hidden||lt.mode!=="world")&&i.classList.add("peek"),i.hidden=!1,document.body.classList.add("panel-open"),Bt("#m-panel-body").scrollTop=0,fn(),clearTimeout(fn.t),fn.t=setTimeout(fn,450)}function af(){Bt("#m-panel").hidden=!0,document.body.classList.remove("panel-open"),fn(),clearTimeout(fn.t),fn.t=setTimeout(fn,450)}function Dx(i,t){let e=l=>!(I.nodes[l].t==="j"&&(I.nodes[l].c==="fund"||I.nodes[l].c==="pen"))||l===i||l===t,n=new Int32Array(I.N).fill(-1),s=new Int32Array(I.N).fill(-1),r=[i];for(n[i]=i;r.length;){let l=r.shift();if(l===t)break;if(l!==i&&!e(l))continue;let c=(h,f)=>{n[h]===-1&&(n[h]=l,s[h]=f,r.push(h))};for(let h of I.out[l])c(I.et[h],h);for(let h of I.inc[l])c(I.es[h],h);for(let h of I.brd[l])c(I.bs[h]===l?I.bt[h]:I.bs[h],-2-h)}if(n[t]===-1)return null;let a=[t],o=[];for(let l=t;l!==i;l=n[l])o.unshift(s[l]),a.unshift(n[l]);return{path:a,ev:o}}function kl(i,t,{push:e=!0}={}){let n=Dx(i,t);if(!n){Ma(`N\xE3o h\xE1 liga\xE7\xE3o entre ${$e(I.nodes[i].n)} e ${$e(I.nodes[t].n)} sem passar por gestoras ou fundos`);return}lt.mode==="tree"&&hi(!1),lt.mode="path",lt.sel=-1,mr();let s=new Set(n.path),r=new Set,a=new Set;for(let l of n.ev)l>=0?r.add(l):a.add(-2-l);if(lt.pathIds=[i,t],lt.forceVis&&(lt.forceVis=null,Ft.setVisible(xn)),n.path.some(l=>!xn[l])){lt.forceVis=new Set(n.path);let l=xn.slice();for(let c of n.path)l[c]=1;Ft.setVisible(l)}Ri(),Nn(s,r,a,n.path,.85,!0),Bt("#m-mode").hidden=!1,Bt("#m-mode-text").innerHTML=`<span class="m-mode-k">Caminho</span><b>${ie($e(I.nodes[i].n))} \u2192 ${ie($e(I.nodes[t].n))}</b><span class="m-mode-n">${Fe(n.ev.length,"passo","passos")}</span>`;let o=n.ev.map(l=>{let c=d=>`<b data-go="${d}">${ie(I.nodes[d].n)}</b>`;if(l>=0){let d=I.es[l],m=I.et[l],x=I.ep[l],g=I.ef[l]&1;return`<li>${c(d)} ${g?"controla":"tem"} ${x>=0?`${Yn(x)} de`:"participa\xE7\xE3o em"} ${c(m)}</li>`}let h=-2-l,f=I.bs[h],u=I.bt[h];return`<li>${c(f)} est\xE1 ${{P:"na presid\xEAncia do conselho",E:"na presid\xEAncia executiva",C:"no conselho de administra\xE7\xE3o",D:"na diretoria"}[I.br[h]]||"na administra\xE7\xE3o"} de ${c(u)}</li>`});Bt("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${Ol}"><i></i>Caminho mais curto</div>
    <div class="m-head"><span class="m-badge" style="--c:${Ol}">${qn("path")}</span><div><h2>Como se conectam</h2><p>${ie($e(I.nodes[i].n))} e ${ie($e(I.nodes[t].n))}</p></div></div>
    <div class="m-sec"><h3>O caminho<small>${Fe(n.ev.length,"liga\xE7\xE3o","liga\xE7\xF5es")}</small></h3><ol class="m-path">${o.join("")}</ol></div>
    <div class="m-btns"><button class="m-btn wide" type="button" data-sel="${i}">Voltar para ${ie($e(I.nodes[i].n))}</button><button class="m-btn wide" type="button" data-sel="${t}">Ir para ${ie($e(I.nodes[t].n))}</button></div>
    <p class="m-foot">Liga\xE7\xF5es por participa\xE7\xE3o acion\xE1ria (5% ou mais, ou controle) e por pessoas que est\xE3o no conselho ou na diretoria das duas. Gestoras e fundos n\xE3o contam como ponte.</p>`,ba(),Ft.flyToNodes(n.path,{minSpan:20}),e&&Qi(`c/${I.nodes[i].id}/${I.nodes[t].id}`)}async function ji(i,{push:t=!0}={}){let e=I.nodes[i],n=[];try{await Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1200))])}catch{}if(e.t==="c"&&e.k)try{n=(await fetch(`data/cias/perfil/${encodeURIComponent(e.k)}.json`,{cache:"no-cache"}).then(a=>a.ok?a.json():{})).participacoes||[]}catch{n=[]}let s=lt.mode!=="tree";s&&await Hl(),lt.mode="tree",lt.sel=i,lt.group=-1,lt.treeFocus=i,Nh(),mr(),Ri(),Ta(-1),lt.hover=-1,Nn(null),document.body.classList.add("in-tree"),Uh(i),ui.open(i,n,{from:s?Ft.project(i,{}):null}),Bt("#m-mode").hidden=!1,Bt("#m-mode-text").innerHTML=`<span class="m-mode-k">Estrutura societ\xE1ria</span><b>${ie(e.n)}</b>`,fn(),t&&Qi(`e/${e.id}`)}function Hl(){let i=Bt("#m-fade");return!i||Ph?Promise.resolve():(i.classList.add("on"),clearTimeout(Hl.t),Hl.t=setTimeout(()=>i.classList.remove("on"),260),new Promise(t=>setTimeout(t,170)))}function hi(i=!0){lt.mode==="tree"&&(Hl(),ui.close(),document.body.classList.remove("in-tree")),lt.mode="world",Bt("#m-mode").hidden=!0,lt.pathIds=null,lt.forceVis&&(lt.forceVis=null,Ft.setVisible(xn)),i&&(lt.sel>=0?Ke(lt.sel):(Nn(null),Qi("")))}function Nx(i,t=9){let e=ya(i.trim());if(e.length<2)return[];let n=e.split(/\s+/),s=[];for(let r of I.groups)r.nc<2||n.every(a=>r.f.includes(a))&&s.push({g:r.i,s:(r.f.startsWith(e)?100:50)+Math.log10(r.mc||10)});for(let r of I.nodes){if(!xn[r.i]&&r.t!=="c")continue;let a=0;r.f===e||r.tk&&ya(r.tk)===e?a=120:r.f.startsWith(e)||r.tk&&ya(r.tk).startsWith(e)?a=90:n.every(o=>r.f.includes(o))&&(a=r.f.split(/\s+/).some(o=>o.startsWith(n[0]))?60:35),a&&(a+=r.t==="c"?12+Math.log10(r.mc||1e6):Math.log10(r.v||1e6)+I.deg[r.i]*.2,s.push({i:r.i,s:a}))}return s.sort((r,a)=>a.s-r.s).slice(0,t)}function Ux(i){if(!i.length)return'<li class="none">Nada com esse nome no mapa.</li>';let t=[["Grupos econ\xF4micos",i.filter(n=>n.g!=null)],["Companhias",i.filter(n=>n.i!=null&&I.nodes[n.i].t==="c")],["Pessoas e investidores",i.filter(n=>n.i!=null&&I.nodes[n.i].t!=="c")]],e=0;return t.filter(([,n])=>n.length).map(([n,s])=>`<li class="grp" role="presentation">${n}</li>`+s.map(r=>{let a=e++;if(r.g!=null){let l=I.groups[r.g];return`<li role="option" data-idx="${a}" aria-selected="false"><span class="m-dot" style="--c:${di(l.sector)}"></span><span class="m-r-txt"><b>Grupo ${ie(l.n)}</b><small>${Fe(l.nc,"companhia","companhias")}${l.mc?` \xB7 ${Re(l.mc)}`:""}</small></span></li>`}let o=I.nodes[r.i];return`<li role="option" data-idx="${a}" aria-selected="false"><span class="m-dot" style="--c:${Zn(o)}"></span><span class="m-r-txt"><b>${ie(o.n)}</b><small>${ie(o.t==="c"?[o.tk,o.mc?Re(o.mc):"capital fechado",o.st].filter(Boolean).join(" \xB7 "):[bn(o),o.v?`\u2248 ${Re(o.v)}`:""].filter(Boolean).join(" \xB7 "))}</small></span></li>`}).join("")).join("")}function of(i,t,e){let n=[],s=0,r=()=>{n=Nx(i.value),n=[...n.filter(o=>o.g!=null),...n.filter(o=>o.i!=null&&I.nodes[o.i].t==="c"),...n.filter(o=>o.i!=null&&I.nodes[o.i].t!=="c")],s=Math.min(s,Math.max(0,n.length-1)),t.hidden=!i.value.trim(),t.innerHTML=Ux(n),t.querySelectorAll("[data-idx]").forEach(o=>o.setAttribute("aria-selected",String(+o.dataset.idx===s))),i.closest("[role=combobox]")?.setAttribute("aria-expanded",String(!t.hidden))},a=o=>{o&&(i.value="",t.hidden=!0,i.blur(),e(o))};i.addEventListener("input",()=>{s=0,r()}),i.addEventListener("focus",()=>{i.value.trim()&&r()}),i.addEventListener("keydown",o=>{o.key==="ArrowDown"||o.key==="ArrowUp"?(o.preventDefault(),s=(s+(o.key==="ArrowDown"?1:-1)+n.length)%Math.max(1,n.length),r()):o.key==="Enter"?(o.preventDefault(),a(n[s])):o.key==="Escape"&&(i.value="",t.hidden=!0,i.blur())}),t.addEventListener("pointerdown",o=>{let l=o.target.closest("[data-idx]");l&&(o.preventDefault(),a(n[+l.dataset.idx]))}),document.addEventListener("pointerdown",o=>{!t.contains(o.target)&&o.target!==i&&(t.hidden=!0)})}var wh="groups";function Th(){let i=Bt("#m-rank"),t=Bt("#m-tab-note"),e="";if(wh==="groups"){t.textContent="Grupos econ\xF4micos pelo valor de mercado das companhias abertas que re\xFAnem.";let n=I.groups.filter(r=>r.nc>=2),s=n[0]?.mc||1;e=n.slice(0,60).map(r=>`<li data-group="${r.i}" class="${lt.group===r.i?"on":""}" style="--c:${di(r.sector)};--w:${((r.mc||0)/s*100).toFixed(1)}%"><b>${ie(r.n)}</b><span class="v">${r.mc?Re(r.mc).replace("R$ ",""):""}</span>
      <small>${Fe(r.nc,"companhia","companhias")}${r.r.length?` \xB7 ${ie(r.r.slice(0,2).map(a=>$e(I.nodes[a].n)).join(", "))}`:""}</small><i class="m-rank-bar"></i></li>`).join("")}else if(wh==="investors"){t.textContent="Quem tem mais valor em participa\xE7\xF5es diretas (participa\xE7\xE3o \xD7 valor de mercado).";let n=I.nodes.filter(r=>r.t!=="c"&&r.v).sort((r,a)=>a.v-r.v).slice(0,60),s=n[0]?.v||1;e=n.map(r=>`<li data-go="${r.i}" class="${lt.sel===r.i?"on":""}" style="--c:${Zn(r)};--w:${(r.v/s*100).toFixed(1)}%"><b>${ie($e(r.n))}</b><span class="v">${Re(r.v).replace("R$ ","")}</span>
      <small>${ie(bn(r))} \xB7 ${Fe(I.out[r.i].length,"participa\xE7\xE3o","participa\xE7\xF5es")}</small><i class="m-rank-bar"></i></li>`).join("")}else{t.textContent="Pessoas e empresas que mais ligam companhias entre si: participa\xE7\xF5es e cadeiras em conselhos e diretorias.";let n=a=>new Set([...I.out[a.i].map(o=>I.et[o]),...I.brd[a.i].map(o=>I.bt[o])].filter(o=>I.nodes[o].t==="c")).size,s=I.nodes.filter(a=>a.t==="p"||a.t==="j").map(a=>[a,n(a)]).filter(([,a])=>a>=3).sort((a,o)=>o[1]-a[1]||(o[0].v||0)-(a[0].v||0)).slice(0,60),r=s[0]?.[1]||1;e=s.map(([a,o])=>`<li data-go="${a.i}" class="${lt.sel===a.i?"on":""}" style="--c:${Zn(a)};--w:${(o/r*100).toFixed(1)}%"><b>${ie($e(a.n))}</b><span class="v">${o}</span>
      <small>${ie(bn(a))} \xB7 ${o} companhias</small><i class="m-rank-bar"></i></li>`).join("")}i.innerHTML=e}function Gl(){for(let i of Bt("#m-rank").children)i.classList.toggle("on",i.dataset.group!=null&&+i.dataset.group===lt.group||i.dataset.go!=null&&+i.dataset.go===lt.sel)}var Fx=[["tower","Companhia aberta",'<svg viewBox="0 0 20 20"><path d="M6 18V5.5L11 3.5V18" fill="#dfe3ea"/><path d="M11 3.5 14 5v13h-3z" fill="#9aa4b3"/><path d="M6 5.5 11 3.5 14 5 9 7z" fill="var(--c)"/></svg>'],["block","Capital fechado",'<svg viewBox="0 0 20 20"><path d="M4 16v-5l6-2.5 6 2.5v5l-6 2.5z" fill="#c9ced6"/><path d="M4 11l6-2.5 6 2.5-6 2.5z" fill="var(--c)"/></svg>'],["tile","Holding ou empresa",'<svg viewBox="0 0 20 20"><path d="M3 12.5 10 9.5l7 3-7 3z" fill="#8ea3bd"/><path d="M3 12.5v1.2l7 3v-1.2zM17 12.5v1.2l-7 3v-1.2z" fill="#5f7088"/></svg>'],["sub","Controlada em comum",'<svg viewBox="0 0 20 20"><path d="M3 12.5 10 9.5l7 3-7 3z" fill="#7fd6b4"/><path d="M3 12.5v1.2l7 3v-1.2zM17 12.5v1.2l-7 3v-1.2z" fill="#4f9a7e"/></svg>'],["pawn","Pessoa f\xEDsica",'<svg viewBox="0 0 20 20"><circle cx="10" cy="6" r="2.6" fill="#f0c9a0"/><path d="M7.4 15.5 8.4 9.4h3.2l1 6.1z" fill="#f0c9a0"/><ellipse cx="10" cy="16" rx="4.6" ry="1.6" fill="#c99e74"/></svg>'],["inv","Investidor institucional",'<svg viewBox="0 0 20 20"><path d="M10 2.5 15 9 10 17.5 5 9z" fill="#b3a6f7"/><path d="M10 2.5 15 9H5z" fill="#d6cffb"/><path d="M10 17.5 15 9H10z" fill="#8576d6"/></svg>']],Ox={tower:"Aberta",block:"Fechada",tile:"Holding",sub:"Controlada",pawn:"Pessoa",inv:"Investidor"},Bx=()=>Fx.map(([i,t,e])=>`<button type="button" class="m-key-i" data-shape="${i}" title="Destacar no mapa: ${t}" style="--c:${di("util")}">${e}<span class="l">${t}</span><span class="s">${Ox[i]}</span></button>`).join("")+'<span class="m-key-i m-key-ctl"><i class="m-key-ln"></i><span class="l">Controle</span><span class="s">Controle</span></span>';function Fh(){let i=I.data.mapa,t=i.plates.map(()=>({n:0,listed:0,mc:0}));for(let e=0;e<I.N;e++){let n=I.nodes[e],s=t[i.plate[e]];n.t==="c"?(s.n++,n.mc&&(s.listed++,s.mc+=n.mc)):Ft?.isInv[e]&&(s.n++,s.mc+=n.v||0)}return t}var pr=i=>i.c==="inv"?"Investidores institucionais":fr[i.c]?.[1]||i.c,zx=i=>i.c==="inv"?"Investidores":fr[i.c]?.[2]||i.c,Ea=i=>i.c==="inv"?ef:di(i.c);function kx(){let i=Fh(),t=I.data.mapa.plates.map((e,n)=>n).sort((e,n)=>i[n].mc-i[e].mc);Bt("#m-legend").innerHTML=`<div class="m-lg-sec">${t.map(e=>{let n=I.data.mapa.plates[e];return`<button class="lg" type="button" data-plate="${e}"><i style="--c:${Ea(n)}"></i><span>${ie(pr(n))}</span><small>${Oe(i[e].n)}</small></button>`}).join("")}</div>`,Bt("#m-key").innerHTML=Bx()}function Qi(i){let t=i?`#${i}`:"";location.hash!==t&&history.replaceState(null,"",t||location.pathname+location.search)}function lf(){let i=decodeURIComponent(location.hash.replace(/^#/,"")),[t,e,n]=i.split("/"),s=r=>r?I.byId.has(r)?I.byId.get(r):r.startsWith("k")&&I.byK.has(r.slice(1))?I.byK.get(r.slice(1)):I.bySlug.has(r)?I.bySlug.get(r):I.byK.has(r)?I.byK.get(r):-1:-1;t==="n"&&s(e)>=0?Ke(s(e),{push:!1}):t==="s"&&I.bySlug.has(e)?Ke(I.bySlug.get(e),{push:!1}):t==="g"&&I.groups[+e]?zl(+e,{push:!1}):t==="e"&&s(e)>=0?ji(s(e),{push:!1}):t==="c"&&s(e)>=0&&s(n)>=0?kl(s(e),s(n),{push:!1}):t==="setor"&&qd(e)>=0?Sa(qd(e),{push:!1}):(t==="n"||t==="s"||t==="e")&&Ma("Essa entidade n\xE3o est\xE1 no mapa: ela n\xE3o tem participa\xE7\xE3o relevante em companhia aberta.")}var $n={pool:[],used:new Map,layer:null,t:0},Fl=[],wa=0;function Hx(){let i=performance.now();if(i-wa<300)return Fl;wa=i,Fl=[];for(let t of document.querySelectorAll(".m-top > :not(.m-pop), #m-explore, #m-panel, .m-nav > *, #m-hud, #m-key, #m-mode, #m-hint")){if(t.hidden||t.offsetParent===null)continue;let e=t.getBoundingClientRect();e.width&&e.height&&Fl.push([e.left-6,e.top-6,e.right+6,e.bottom+6])}return Fl}var va=null;function Vx(){if(va)return va;va=I.data.mapa.plates.map(()=>[]);for(let i of I.labelOrder)(I.nodes[i].t==="c"||Ft.isInv[i])&&va[I.data.mapa.plate[i]].push(i);return va}function Jd(i){let t=I.nodes[i];return t.t==="c"?[$e(t.n),[t.tk,t.mc?Re(t.mc).replace("R$ ","R$ ").toUpperCase():"capital fechado"].filter(Boolean).join(" \xB7 ")]:[$e(t.n),[bn(t),t.v?`\u2248 ${Re(t.v)}`:""].filter(Boolean).join(" \xB7 ")]}var Oh=[];function Gx(){let i=Fh(),t=Bt("#m-plates");t.innerHTML="",I.data.mapa.plates.forEach((e,n)=>{let s=document.createElement("button");s.type="button",s.className="m-plate",s.dataset.plate=n,s.style.setProperty("--c",Ea(e));let r=e.c==="inv"?Fe(i[n].n,"investidor","investidores"):Fe(i[n].n,"companhia","companhias");s.innerHTML=`<b><span class="full">${ie(pr(e))}</span><span class="short">${ie(zx(e))}</span></b><small>${r}${i[n].mc?` \xB7 ${Re(i[n].mc)}`:""}</small>`,s.title=`Ver o setor ${pr(e)} inteiro`,t.appendChild(s),Oh[n]={el:s,p:e}})}var Wx={};function Xx(i){let t=Ft.pxPerUnit();Oh.forEach(({el:e},n)=>{let s=Ft.plates[n],r=Ft.projectPoint(s.x0+.9,Ft.PLATE_H+.1,s.z0+.7,Wx),a=(s.x1-s.x0)*t,o=!!r.f&&a>46&&lt.mode!=="tree";if(e.classList.toggle("on",o),e.classList.toggle("compact",a<210),e.classList.toggle("dim",lt.sector>=0&&lt.sector!==n),!o)return;e.style.transform=`translate3d(${r.x.toFixed(1)}px, ${r.y.toFixed(1)}px, 0)`,e.style.maxWidth=`${Math.max(60,a-18).toFixed(0)}px`;let l=e.getBoundingClientRect();l.width&&i.push([l.left-4,l.top-4,l.right+4,l.bottom+4])})}function $x(){if(!Ft||lt.mode==="tree"){for(let u of $n.used.values())u.classList.remove("on");for(let{el:u}of Oh)u.classList.remove("on");return}let i=innerWidth,t=innerHeight,e=[...Hx()];Xx(e);let n=(u,d,m,x)=>{if(u<8||d<8||m>i-8||x>t-8)return!1;for(let g of e)if(u<g[2]&&m>g[0]&&d<g[3]&&x>g[1])return!1;return!0},s=Ft.pxPerUnit(),r=sn((s-6)/40,0,1),a=Math.round((vs?6:12)+r*(vs?26:60)),o=lt.hl,l;if(o)l=[...o].sort((u,d)=>Bl(d)-Bl(u)).slice(0,60);else if(lt.sector<0&&r<.5){let u=Vx(),d=s*s,m=Ft.plates.map(x=>sn(Math.round((x.x1-x.x0)*(x.z1-x.z0)*d/42e3),1,6));l=[];for(let x=0;x<6;x++)for(let g=0;g<u.length;g++)x<m[g]&&u[g][x]!=null&&l.push(u[g][x]);a=Math.max(a,vs?12:34)}else lt.sector>=0?(l=I.labelOrder.filter(u=>I.data.mapa.plate[u]===lt.sector&&(I.nodes[u].t==="c"||Ft.isInv[u])),a=Math.max(a,vs?18:48)):l=I.labelOrder.slice(0,260);let c=new Map,h={},f=0;for(let u of l){if(f>=a)break;if(c.has(u)||!xn[u]&&!lt.forceVis?.has(u))continue;let d=I.nodes[u],m=o&&o.has(u);if(!m&&d.t!=="c"&&!Ft.isInv[u]&&r<.55||(Ft.project(u,h),!h.f))continue;let[x,g]=Jd(u),p=d.t==="c"&&I.crank[u]<10,S=Math.max(x.length*(p?7.6:6.9),g.length*6.1)+14,E=30,_=null;for(let[w,T]of[["r",!1],["l",!1],["r",!0],["l",!0]]){let P=w==="r"?h.x+14:h.x-14-S,v=T?h.y+8:h.y-34;if(n(P,v,P+S,v+E)){_={side:w,below:T,x0:P,y0:v};break}}_&&(e.push([_.x0,_.y0,_.x0+S,_.y0+E],[h.x-4,h.y-4,h.x+4,h.y+4]),c.set(u,{x:h.x,y:h.y,side:_.side,below:_.below,a:1,hl:m,big:p}),f++)}for(let[u,d]of $n.used)c.has(u)||(d.classList.remove("on"),$n.used.delete(u),$n.pool.push(d));for(let[u,d]of c){let m=$n.used.get(u);if(m)!m.classList.contains("on")&&performance.now()-m._t>20&&m.classList.add("on");else{m=$n.pool.pop()||Object.assign(document.createElement("div"),{className:"m-lab"}),m.parentNode||$n.layer.appendChild(m);let[x,g]=Jd(u);m.innerHTML=`<i class="m-lab-dot"></i><span class="m-lab-ln"></span><span class="m-lab-tx"><b>${ie(x)}</b><small>${ie(g)}</small></span>`,m.dataset.i=u,m.classList.remove("on"),m._t=performance.now(),$n.used.set(u,m)}m.classList.toggle("l",d.side==="l"),m.classList.toggle("b",!!d.below),m.classList.toggle("hl",!!d.hl),m.classList.toggle("big",d.big),m.style.transform=`translate3d(${d.x.toFixed(1)}px, ${d.y.toFixed(1)}px, 0)`,m.style.setProperty("--a","1")}}function Eh(){let i=Ft.plateAt(innerWidth/2+Ft.view.offX,innerHeight/2+Ft.view.offY),t=i>=0?I.data.mapa.plates[i]:null,e=Ah/Math.max(1,Ft.cam.d),n=e<1.45?"":`<span>ZOOM ${e.toFixed(1).replace(".",",")}\xD7</span>${t?`<span class="m-hud-sec" style="--c:${Ea(t)}">${ie(pr(t).toUpperCase())}</span>`:""}`;n!==Eh.last&&(Bt("#m-hud").innerHTML=n,Eh.last=n)}var Ah=160;function Ta(i,t,e){let n=Bt("#m-tip");if(i<0||vs){n.hidden=!0;return}let s=I.nodes[i],r=[];if(s.t==="c"){r.push([s.tk||"Capital fechado",s.mc?Re(s.mc):""]);let c=rf(i);c>=0&&r.push(["Controle",$e(I.nodes[c].n)])}else r.push([bn(s),s.v?`\u2248 ${Re(s.v)}`:""]);let a=new Set([...I.out[i].map(c=>I.et[c]),...I.inc[i].map(c=>I.es[c])]).size;r.push(["Liga\xE7\xF5es",Oe(a+I.brd[i].length)]),n.innerHTML=`<div class="m-tip-head"><i style="background:${Zn(s)}"></i><b>${ie(s.n)}</b></div>${r.map(([c,h])=>`<div class="row"><span>${ie(c)}</span><span>${ie(h)}</span></div>`).join("")}<div class="row muted"><span>Clique para ver quem \xE9 dono \xB7 dois cliques abrem a estrutura</span></div>`,n.hidden=!1;let o=n.offsetWidth,l=n.offsetHeight;n.style.left=`${sn(t+18,8,innerWidth-o-8)}px`,n.style.top=`${e+18+l>innerHeight-8?e-l-14:e+18}px`}function fn(){if(wa=0,!Ft)return;let i=Bt("#m-explore"),t=Bt("#m-panel"),e=Bt("#m-key").getBoundingClientRect(),n=t&&!t.hidden,s=0,r=0,a=0,o=Bt(".m-top").getBoundingClientRect().bottom+6;innerWidth>760?(i&&!i.classList.contains("collapsed")&&i.offsetParent&&(s=i.getBoundingClientRect().right),r=n?innerWidth-t.offsetLeft:62,e.height&&(a=innerHeight-e.top+6)):n?a=t.offsetHeight:a=e.height?innerHeight-e.top+6:64,Ft.setInsets(s,r,lt.mode==="tree"?0:o,a);let l=Bt("#m-mode"),c=l&&!l.hidden?Math.max(o,l.getBoundingClientRect().bottom+6):o;ui?.setFree(s,r,a,c)}var cf=0,Kd=0;function hf(i){cf=requestAnimationFrame(hf),!document.hidden&&(lt.mode==="tree"?ui.frame(i):(Ft.update(i),Ft.render(),i-Kd>32&&($x(),Eh(),Kd=i)))}var Ci=new Map,Ue=null,Ki=null,jd=0,Ch=0,Rh=null;function qx(i){if(lt.mode==="tree")return;if(i.currentTarget.setPointerCapture(i.pointerId),Ci.set(i.pointerId,{x:i.clientX,y:i.clientY}),lt.lastInput=performance.now(),Ri(),Ft.cam.vx=Ft.cam.vz=0,Ft.cam.fly=null,Ci.size===2){let[e,n]=[...Ci.values()];Ki={d:Math.hypot(e.x-n.x,e.y-n.y),mx:(e.x+n.x)/2,my:(e.y+n.y)/2},Ue=null;return}Ue={x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,moved:!1,hist:[{x:i.clientX,y:i.clientY,t:performance.now()}]}}function Yx(i){if(Ci.has(i.pointerId)&&Ci.set(i.pointerId,{x:i.clientX,y:i.clientY}),lt.lastInput=performance.now(),lt.mode!=="tree"){if(Ki&&Ci.size===2){let[t,e]=[...Ci.values()],n=Math.hypot(t.x-e.x,t.y-e.y),s=(t.x+e.x)/2,r=(t.y+e.y)/2;Ft.zoom(Ki.d/Math.max(1,n),s,r),Ft.pan(s-Ki.mx,r-Ki.my),Ki={d:n,mx:s,my:r};return}if(Ue){let t=i.clientX-Ue.x,e=i.clientY-Ue.y;if(!Ue.moved&&Math.hypot(i.clientX-Ue.sx,i.clientY-Ue.sy)>(vs?8:4)&&(Ue.moved=!0,i.currentTarget.classList.add("dragging"),Ta(-1)),Ue.moved){Ft.pan(t,e),Ue.x=i.clientX,Ue.y=i.clientY;let n=performance.now();for(Ue.hist.push({x:i.clientX,y:i.clientY,t:n});Ue.hist.length>6||Ue.hist.length>2&&n-Ue.hist[0].t>100;)Ue.hist.shift()}return}i.pointerType==="mouse"&&(Rh=[i.clientX,i.clientY],Ch||(Ch=requestAnimationFrame(Ih)))}}function Ih(){if(Ch=0,!Rh||lt.mode==="tree")return;let[i,t]=Rh,e=Ft.pick(i,t,xn),n=e<0?Ft.plateAt(i,t):-1;Bt("#map").classList.toggle("pointing",e>=0||n>=0),e!==lt.hover&&(lt.hover=e,clearTimeout(Ih.t),lt.sel<0&&lt.group<0&&!lt.shape&&lt.mode==="world"&&(Ih.t=setTimeout(()=>{if(!(lt.sel>=0||lt.group>=0||lt.shape||lt.mode!=="world"||lt.hover!==e))if(e>=0){let r=Dh(e);Nn(r.nodes,r.edges,r.brd,[e],.45)}else Nn(null)},e>=0?140:90))),e>=0?Ta(e,i,t):n>=0&&n!==lt.sector?Zx(n,i,t):Ta(-1)}function Zx(i,t,e){let n=Bt("#m-tip");if(vs){n.hidden=!0;return}let s=I.data.mapa.plates[i],r=Fh()[i];n.innerHTML=`<div class="m-tip-head"><i style="background:${Ea(s)}"></i><b>${ie(pr(s))}</b></div><div class="row"><span>${s.c==="inv"?"Investidores":"Companhias"}</span><span>${Oe(r.n)}</span></div><div class="row"><span>${s.c==="inv"?"Valor investido":"Valor de mercado"}</span><span>${r.mc?Re(r.mc):"\u2013"}</span></div><div class="row muted"><span>Clique para ver o setor inteiro</span></div>`,n.hidden=!1;let a=n.offsetWidth,o=n.offsetHeight;n.style.left=`${sn(t+18,8,innerWidth-a-8)}px`,n.style.top=`${e+18+o>innerHeight-8?e-o-14:e+18}px`}function Qd(i){if(Ci.delete(i.pointerId),i.currentTarget.classList.remove("dragging"),Ki){Ci.size<2&&(Ki=null);return}if(!Ue||lt.mode==="tree"){Ue=null;return}let t=Ue;if(Ue=null,t.moved){let a=t.hist;if(a.length>=2&&!Ph){let o=a[0],l=a[a.length-1],c=Math.max(16,l.t-o.t);performance.now()-l.t<80&&Ft.fling((l.x-o.x)/c,(l.y-o.y)/c)}return}let e=performance.now(),n=e-jd<320;jd=e;let s=Ft.pick(i.clientX,i.clientY,xn);if(n&&s>=0){ji(s);return}if(s>=0){Ke(s);return}if(n){Ft.zoom(.55,i.clientX,i.clientY);return}let r=Ft.plateAt(i.clientX,i.clientY);if(r>=0&&lt.mode==="world"){(r!==lt.sector||lt.sel>=0||lt.group>=0)&&Sa(r);return}(lt.sel>=0||lt.group>=0||lt.sector>=0||lt.shape||lt.mode==="path")&&(lt.mode==="path"&&hi(!1),Ke(-1))}function Jx(i){if(i.preventDefault(),lt.lastInput=performance.now(),Ri(),lt.mode==="tree")return;let t=Math.exp(i.deltaY*(i.ctrlKey?.012:i.deltaMode===1?.05:.0018));Ft.zoom(t,i.clientX,i.clientY)}var uf=0;function Ri(){let i=Bt("#m-hint");i&&!i.hidden&&(i.hidden=!0,dr.set("mundo-hint",1),wa=0),clearTimeout(uf)}function Kx(i){let t=I.data.mapa,e=t.plates[i],n=[];for(let _=0;_<I.N;_++)t.plate[_]===i&&n.push(_);let s=(_,w)=>(I.nodes[w].mc||0)-(I.nodes[_].mc||0)||I.nodes[_].n.localeCompare(I.nodes[w].n),r=Ea(e);if(Dn={},e.c==="inv"){let _=n.sort((T,P)=>(I.nodes[P].v||0)-(I.nodes[T].v||0));Dn.inv=_.map(T=>{let P=new Set(I.out[T].map(v=>I.et[v]).filter(v=>I.nodes[v].t==="c")).size;return Ai(T,I.nodes[T].v?Re(I.nodes[T].v):"",`${bn(I.nodes[T])} \xB7 ${Fe(P,"companhia","companhias")}`,!1)});let w=_.reduce((T,P)=>T+(I.nodes[P].v||0),0);Bt("#m-panel-body").innerHTML=`
      <div class="m-kicker" style="--c:${r}"><i></i>Bloco dos investidores</div>
      <div class="m-head"><span class="m-badge" style="--c:${r}">${qn("cias")}</span><div><h2>Investidores institucionais</h2><p>gestoras, fundos de pens\xE3o e governo</p></div></div>
      <div class="m-stats"><div class="m-stat"><span>Investidores</span><b>${Oe(_.length)}</b></div><div class="m-stat"><span>Valor investido</span><b>${ie(w?Re(w):"\u2013")}</b></div><div class="m-stat"><span>Participa\xE7\xF5es</span><b>${Oe(_.reduce((T,P)=>T+I.out[P].length,0))}</b></div></div>
      <div class="m-sec"><h3>Pelo valor investido<small>participa\xE7\xE3o \xD7 valor de mercado</small></h3>${ys(Dn.inv,15,"inv")}</div>
      <p class="m-foot">Quem tem 5% ou mais de duas ou mais companhias abertas e n\xE3o tem dono no mapa, mais o governo. Os demais acionistas ficam no setor das companhias em que investem.</p>`,ba();return}let a=n.filter(_=>I.nodes[_].t==="c").sort(s),o=a.filter(_=>I.nodes[_].mc),l=o.reduce((_,w)=>_+I.nodes[w].mc,0),c=new Map;for(let _ of a){let w=I.nodes[_].st||"Outros";(c.get(w)||c.set(w,[]).get(w)).push(_)}let h=[...c.entries()].map(([_,w])=>[_,w,w.reduce((T,P)=>T+(I.nodes[P].mc||0),0)]).sort((_,w)=>w[2]-_[2]||w[1].length-_[1].length),f=h.map(([_,w,T],P)=>(Dn[`seg${P}`]=w.map(v=>Ai(v,I.nodes[v].mc?Re(I.nodes[v].mc):"",[I.nodes[v].tk||"capital fechado",I.nodes[v].g!=null&&I.groups[I.nodes[v].g]?.nc>=2?`grupo ${I.groups[I.nodes[v].g].n}`:""].filter(Boolean).join(" \xB7 "),!1)),`<div class="m-seg"><h4><span>${ie(_)}</span><small>${Fe(w.length,"companhia","companhias")}${T?` \xB7 ${Re(T)}`:""}</small></h4>${ys(Dn[`seg${P}`],5,`seg${P}`)}</div>`)).join(""),u=_=>_.m.filter(w=>I.nodes[w].t==="c"&&t.plate[w]===i).length,d=I.groups.filter(_=>_.nc>=2&&u(_)>0).slice(0,12),m=d.map(_=>{let w=u(_);return`<li data-group="${_.i}"><span class="m-dot" style="--c:${di(_.sector)}"></span><span class="nm">Grupo ${ie(_.n)}</span><span class="pc">${_.mc?Re(_.mc):""}</span><small>${w===_.nc?Fe(_.nc,"companhia","companhias"):`${w} de ${_.nc} companhias aqui`}${_.r.length?` \xB7 ${ie(_.r.slice(0,2).map(T=>$e(I.nodes[T].n)).join(", "))}`:""}</small></li>`}).join(""),x=new Map;for(let _ of a)for(let w of I.inc[_]){let T=I.es[w];if(!Ft.isInv[T])continue;let P=x.get(T)||{n:0,v:0};P.n++,P.v+=Math.max(0,I.ep[w])/100*(I.nodes[_].mc||0),x.set(T,P)}let p=[...x.entries()].sort((_,w)=>w[1].n-_[1].n||w[1].v-_[1].v).slice(0,8).map(([_,w])=>Ai(_,w.v?`\u2248 ${Re(w.v)}`:"",`${bn(I.nodes[_])} \xB7 em ${Fe(w.n,"companhia","companhias")} do setor`,!1)).join(""),S=n.filter(_=>I.nodes[_].t==="p").length,E=n.filter(_=>I.nodes[_].t==="j"||I.nodes[_].t==="s").length;Bt("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${r}"><i></i>Setor</div>
    <div class="m-head"><span class="m-badge" style="--c:${r}">${qn("cias")}</span><div><h2>${ie(pr(e))}</h2><p>${Fe(a.length,"companhia","companhias")} \xB7 ${Fe(h.length,"segmento","segmentos")} \xB7 ${Fe(d.length,"grupo","grupos")}</p></div></div>
    <div class="m-stats"><div class="m-stat"><span>Valor de mercado</span><b>${ie(l?Re(l):"\u2013")}</b></div><div class="m-stat"><span>Na bolsa</span><b>${Oe(o.length)}</b></div><div class="m-stat"><span>Capital fechado</span><b>${Oe(a.length-o.length)}</b></div></div>
    <p class="m-note m-sec-note">No bloco tamb\xE9m est\xE3o ${Fe(E,"holding ou empresa","holdings e empresas")} e ${Fe(S,"pessoa f\xEDsica","pessoas f\xEDsicas")} ligadas a essas companhias.</p>
    <div class="m-sec"><h3>Companhias por segmento<small>valor de mercado</small></h3>${f}</div>
    ${m?`<div class="m-sec"><h3>Grupos econ\xF4micos<small>valor de mercado</small></h3><ul class="m-list">${m}</ul></div>`:""}
    ${p?`<div class="m-sec"><h3>Investidores mais presentes<small>companhias do setor</small></h3><ul class="m-list">${p}</ul></div>`:""}
    <p class="m-foot">Cada companhia fica no bloco do seu setor; holdings e pessoas, no setor das companhias que controlam. Segmento \xE9 o setor de atividade declarado \xE0 CVM.</p>`,ba()}function jx(){let i=Bt("#map");addEventListener("resize",()=>{Ft.resize(innerWidth,innerHeight),ui?.resize(innerWidth,innerHeight),fn()}),i.addEventListener("pointerdown",qx),i.addEventListener("pointermove",Yx),i.addEventListener("pointerup",Qd),i.addEventListener("pointercancel",Qd),i.addEventListener("pointerleave",()=>{Ue||lt.mode==="tree"||(Ta(-1),lt.hover>=0&&(lt.hover=-1,lt.sel<0&&lt.group<0&&!lt.shape&&lt.mode==="world"&&Nn(null)))}),i.addEventListener("wheel",Jx,{passive:!1}),$n.layer.addEventListener("click",n=>{let s=n.target.closest(".m-lab");s&&lt.mode!=="tree"&&Ke(+s.dataset.i)}),$n.layer.addEventListener("dblclick",n=>{let s=n.target.closest(".m-lab");s&&ji(+s.dataset.i)}),Bt("#m-plates").addEventListener("click",n=>{let s=n.target.closest("[data-plate]");s&&Sa(+s.dataset.plate)});let t=n=>()=>{lt.lastInput=performance.now(),lt.mode==="tree"?ui.zoom(n):Ft.zoom(n)};Bt("#m-zin").onclick=t(.7),Bt("#m-zout").onclick=t(1/.7),Bt("#m-zfit").onclick=()=>{lt.mode==="tree"?ui.fit():Ft.fitAll()},Bt("#m-layers-btn").onclick=n=>{n.stopPropagation();let s=Bt("#m-layers");s.hidden=!s.hidden,Bt("#m-layers-btn").setAttribute("aria-expanded",String(!s.hidden))},document.addEventListener("pointerdown",n=>{n.target.closest("#m-layers, #m-layers-btn")||(Bt("#m-layers").hidden=!0,Bt("#m-layers-btn").setAttribute("aria-expanded","false"))});for(let n of document.querySelectorAll("#m-layers [data-layer]"))n.checked=!!lt.layers[n.dataset.layer],n.onchange=()=>{if(lt.layers[n.dataset.layer]=n.checked,dr.set("mundo-layers",lt.layers),nf(),lt.sel>=0&&lt.mode==="world"){let s=Dh(lt.sel);Nn(s.nodes,s.edges,s.brd,[lt.sel])}else if(lt.shape){let s=lt.shape;lt.shape=null,Yd(s)}Th()};let e=n=>{let s=n.target.closest("[data-plate]");s&&(Bt("#m-layers").hidden=!0,Sa(+s.dataset.plate))};Bt("#m-legend").onclick=e,Bt("#m-key").onclick=n=>{let s=n.target.closest("[data-shape]");s&&Yd(s.dataset.shape)},Bt("#m-explore-toggle").onclick=()=>{let n=Bt("#m-explore");n.classList.toggle("collapsed"),Bt("#m-explore-toggle").setAttribute("aria-expanded",String(!n.classList.contains("collapsed"))),dr.set("mundo-explore",!n.classList.contains("collapsed")),fn()},Bt(".m-tabs").onclick=n=>{let s=n.target.closest("[data-tab]");if(s){wh=s.dataset.tab;for(let r of document.querySelectorAll(".m-tabs [data-tab]"))r.setAttribute("aria-checked",String(r===s));Th(),Bt("#m-rank").scrollTop=0}},Bt(".m-grab").onclick=()=>{Bt("#m-panel").classList.toggle("peek"),setTimeout(fn,420)},Bt("#m-panel-close").onclick=()=>{lt.mode!=="world"&&hi(!1),Ke(-1)},Bt("#m-mode-close").onclick=()=>{let n=lt.sel;hi(!1),n>=0?Ke(n):Ke(-1)},document.addEventListener("click",n=>{let s=n.target.closest("[data-more]");if(s){let c=s.dataset.more;s.closest("ul").innerHTML=Dn[c].join("");return}let r=n.target.closest("[data-go]");if(r&&(r.closest("#m-panel")||r.closest("#m-explore"))){let c=+r.dataset.go;if(lt.mode==="tree"){ji(c);return}Ke(c);return}let a=n.target.closest("[data-sel]");if(a){hi(!1),Ke(+a.dataset.sel);return}let o=n.target.closest("[data-group]");if(o&&(o.closest("#m-panel")||o.closest("#m-explore"))){zl(+o.dataset.group),innerWidth<=760&&(Bt("#m-explore").classList.add("collapsed"),fn());return}let l=n.target.closest("[data-act]");if(l){let c=l.dataset.node!=null?+l.dataset.node:lt.sel;if(l.dataset.act==="tree"&&c>=0&&ji(c),l.dataset.act==="world"){let h=lt.sel;hi(!1),h>=0&&Ke(h)}l.dataset.act==="path"&&c>=0&&Qx(c)}}),document.addEventListener("keydown",n=>{if(!n.target.matches("input[type=search], input[type=text], textarea")){if(n.key==="/"||(n.metaKey||n.ctrlKey)&&n.key.toLowerCase()==="k")n.preventDefault(),Bt("#m-q").focus();else if(n.key==="Escape")if(lt.mode!=="world"){let s=lt.sel;hi(!1),s>=0?Ke(s):Ke(-1)}else Ke(-1);else if(n.key==="+"||n.key==="=")Bt("#m-zin").click();else if(n.key==="-")Bt("#m-zout").click();else if(n.key==="0")Bt("#m-zfit").click();else if(lt.mode==="world"&&n.key.startsWith("Arrow")){lt.lastInput=performance.now();let s=80;Ft.pan(n.key==="ArrowLeft"?s:n.key==="ArrowRight"?-s:0,n.key==="ArrowUp"?s:n.key==="ArrowDown"?-s:0)}}}),of(Bt("#m-q"),Bt("#m-results"),n=>{n.g!=null?zl(n.g):lt.mode==="tree"?ji(n.i):Ke(n.i)}),addEventListener("hashchange",()=>lf())}function Qx(i){let t=Bt("#m-pick-slot");t.innerHTML=`<div class="m-pick"><div class="m-search" role="combobox" aria-expanded="false"><svg class="ic"><use href="#i-path"/></svg>
    <input id="m-pick-q" type="search" placeholder="Com quem? Empresa, pessoa ou investidor" autocomplete="off" aria-label="Conectar com"><ul id="m-pick-res" class="m-results" role="listbox" hidden></ul></div></div>`;let e=Bt("#m-pick-q");of(e,Bt("#m-pick-res"),n=>{n.g!=null?kl(i,I.groups[n.g].h):kl(i,n.i)}),e.focus()}async function tv(){$n.layer=Bt("#m-labels"),(innerWidth<=760||dr.get("mundo-explore",!1)===!1)&&Bt("#m-explore").classList.add("collapsed");let i;try{i=await fetch("data/cias/mundo.json",{cache:"no-cache"}).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}catch{Bt("#m-empty").hidden=!1,Bt("#m-empty").textContent="O mapa ainda n\xE3o foi montado. Ele \xE9 refeito a cada atualiza\xE7\xE3o do portal; tente de novo em alguns minutos.",document.body.classList.remove("loading");return}let t=s=>s&&s.x&&s.x.length===i.nodes.length;innerHeight>innerWidth*1.15?i.mapa=t(i.mapaV)?i.mapaV:bh(i,{aspect:$d}):t(i.mapa)||(i.mapa=bh(i)),delete i.mapaV,Ax(i);try{Ft=Wd(Bt("#map"),i,{palette:Ex,accent:Ol})}catch(s){console.error(s),Bt("#m-empty").hidden=!1,Bt("#m-empty").textContent="Este navegador n\xE3o conseguiu abrir o Mundo em 3D (WebGL desligado ou indispon\xEDvel). Tente em outro navegador ou atualize o sistema.",document.body.classList.remove("loading");return}i.mapa.plates.forEach((s,r)=>{s.j=r}),ui=Xd(Ft.renderer,{W:I,colorOf:Zn,sectorColor:di,kindLabel:bn,shortName:$e,brl:Re,pct:Yn,accent:Ol,onPick:(s,r)=>{r?ji(s):(lt.sel=s,Uh(s))},onExt:s=>Ma(`${s.n}: controlada de capital fechado (${Yn(s.pct)})`),canvas:Bt("#map")}),Ft.resize(innerWidth,innerHeight),ui.resize(innerWidth,innerHeight),nf();let n=i.stats||{};Bt("#m-sub").textContent=`${Oe(n.cias||0)} companhias \xB7 ${Oe(n.grupos||0)} grupos \xB7 ${Oe((n.acionistas||0)+(n.pessoas_conselho||0))} acionistas e conselheiros`,kx(),Gx(),Th(),jx(),fn(),Ft.setOffset(Ft.view.toX,Ft.view.toY,!0),document.fonts?.ready.then(()=>fn()),document.body.classList.remove("loading"),Ft.warmup(),Ft.fitAll(0),Ft.cam.x=Ft.cam.tx,Ft.cam.z=Ft.cam.tz,Ft.cam.d=Ft.cam.td,Ft.cam.fly=null,Ah=Ft.cam.td,!location.hash&&!Ph&&(Ft.intro(),Ft.cam.d=Ah*1.35),cf=requestAnimationFrame(hf),lf(),!dr.get("mundo-hint",0)&&!location.hash&&setTimeout(()=>{lt.sel<0&&lt.mode==="world"&&(Bt("#m-hint").hidden=!1,wa=0,uf=setTimeout(Ri,9e3))},3200),/[?&]debug\b/.test(location.search)&&(window.__mundo={ui:lt,W:I,map:Ft,tree:ui,select:Ke,openTree:ji,showPath:kl,selectGroup:zl,focusSector:Sa})}tv();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
