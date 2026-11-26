/* Portal FPM — Mundo das companhias. Gerado de src/mundo (npm run build); não edite à mão. Inclui three.js (MIT). */
var Cf=0,Fh=1,Rf=2;var Ys=1,Pf=2,Ur=3,ys=0,An=1,Fi=2,ni=0,Fr=1,Ms=2,Oh=3,Bh=4,If=5;var Zs=100,Lf=101,Df=102,Nf=103,Uf=104,Ff=200,Of=201,Bf=202,zf=203,zh=204,kh=205,kf=206,Hf=207,Vf=208,Gf=209,Wf=210,Xf=211,$f=212,qf=213,Yf=214,Ko=0,jo=1,Qo=2,Mr=3,tl=4,el=5,nl=6,il=7,Fl=0,Zf=1,Jf=2,_i=0,Ga=1,Wa=2,Xa=3,$a=4,qa=5,Ya=6,Js=7;var Hh=300,bs=301,Ks=302,Ol=303,Bl=304,Za=306,sl=1e3,Pi=1001,rl=1002,Mn=1003,Kf=1004;var Ja=1005;var En=1006,zl=1007;var yi=1008;var kn=1009,Vh=1010,Gh=1011,Or=1012,kl=1013,Mi=1014,ii=1015,pn=1016,Hl=1017,Vl=1018,Br=1020,Wh=35902,Xh=35899,$h=1021,qh=1022,si=1023,Ii=1026,Ss=1027,Gl=1028,Wl=1029,ws=1030,Xl=1031;var $l=1033,Ka=33776,ja=33777,Qa=33778,to=33779,ql=35840,Yl=35841,Zl=35842,Jl=35843,Kl=36196,jl=37492,Ql=37496,tc=37488,ec=37489,eo=37490,nc=37491,ic=37808,sc=37809,rc=37810,ac=37811,oc=37812,lc=37813,cc=37814,hc=37815,uc=37816,fc=37817,dc=37818,pc=37819,mc=37820,gc=37821,xc=36492,vc=36494,_c=36495,yc=36283,Mc=36284,no=36285,bc=36286;var pa=2300,al=2301,Zo=2302,bh=2303,Sh=2400,wh=2401,Th=2402;var jf=3200,Sc=3201;var io=0,Qf=1,is="",Tn="srgb",ma="srgb-linear",ga="linear",Ie="srgb";var Jo=7680;var td=519,ed=512,nd=513,id=514,wc=515,sd=516,rd=517,Tc=518,ad=519,od=35044;var Yh="300 es",mi=2e3,br=2001;function Ap(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ld(){let i=xa("canvas");return i.style.display="block",i}var Wu={},Sr=null;function Zh(...i){let t="THREE."+i.shift();Sr?Sr("log",t,...i):console.log(t,...i)}function cd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function se(...i){i=cd(i);let t="THREE."+i.shift();if(Sr)Sr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=cd(i);let t="THREE."+i.shift();if(Sr)Sr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Os(...i){let t=i.join(" ");t in Wu||(Wu[t]=!0,se(...i))}function hd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ud={[Ko]:jo,[Qo]:nl,[tl]:il,[Mr]:el,[jo]:Ko,[nl]:Qo,[il]:tl,[el]:Mr},Li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zc=Math.PI/180,ol=180/Math.PI;function zr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[e&63|128]+Rn[e>>8&255]+"-"+Rn[e>>16&255]+Rn[e>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function Rp(i,t){return(i%t+t)%t}function Jc(i,t,e){return(1-e)*i+e*t}function ia(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var eu=class eu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};eu.prototype.isVector2=!0;var Tt=eu,Yn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],m=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*y;g<0&&(u=-u,f=-f,m=-m,y=-y,g=-g);let p=1-o;if(g<.9995){let M=Math.acos(g),E=Math.sin(M);p=Math.sin(p*M)/E,o=Math.sin(o*M)/E,l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+y*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-o*f,t[e+2]=c*m+h*f+o*u-l*d,t[e+3]=h*m-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nu=class nu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kc.copy(this).projectOnVector(t),this.sub(Kc)}reflect(t){return this.sub(Kc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nu.prototype.isVector3=!0;var U=nu,Kc=new U,Xu=new Yn,iu=class iu{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],y=s[0],g=s[3],p=s[6],M=s[1],E=s[4],_=s[7],b=s[2],S=s[5],L=s[8];return r[0]=a*y+o*M+l*b,r[3]=a*g+o*E+l*S,r[6]=a*p+o*_+l*L,r[1]=c*y+h*M+d*b,r[4]=c*g+h*E+d*S,r[7]=c*p+h*_+d*L,r[2]=u*y+f*M+m*b,r[5]=u*g+f*E+m*S,r[8]=u*p+f*_+m*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(t,e)),this}rotate(t){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-t)),this}translate(t,e){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};iu.prototype.isMatrix3=!0;var pe=iu,jc=new pe,$u=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qu=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pp(){let i={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ie&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ie&&(s.r=_r(s.r),s.g=_r(s.g),s.b=_r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?ga:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ma]:{primaries:t,whitePoint:n,transfer:ga,toXYZ:$u,fromXYZ:qu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:t,whitePoint:n,transfer:Ie,toXYZ:$u,fromXYZ:qu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),i}var be=Pp();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rr,ll=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rr===void 0&&(rr=xa("canvas")),rr.width=t.width,rr.height=t.height;let s=rr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ip=0,wr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=zr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qc(s[a].image)):r.push(Qc(s[a]))}else r=Qc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Qc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}var Lp=0,th=new U,Un=class i extends Li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pi,s=Pi,r=En,a=yi,o=si,l=kn,c=i.DEFAULT_ANISOTROPY,h=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=zr(),this.name="",this.source=new wr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(th).x}get height(){return this.source.getSize(th).y}get depth(){return this.source.getSize(th).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){se(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sl:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sl:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Hh;Un.DEFAULT_ANISOTROPY=1;var su=class su{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,_=(f+1)/2,b=(p+1)/2,S=(h+u)/4,L=(d+y)/4,x=(m+g)/4;return E>_&&E>b?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=S/n,r=L/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=L/r,s=x/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};su.prototype.isVector4=!0;var He=su,cl=class extends Li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Un(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new wr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends cl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},va=class extends Un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var hl=class extends Un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ul=class Ul{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,m,y,g)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,m,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ul().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ar.setFromMatrixColumn(t,0).length(),r=1/ar.setFromMatrixColumn(t,1).length(),a=1/ar.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,m=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,y=c*d;e[0]=u+y*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,m=o*h,y=o*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dp,t,Np)}lookAt(t,e,n){let s=this.elements;return $n.subVectors(t,e),$n.lengthSq()===0&&($n.z=1),$n.normalize(),as.crossVectors(n,$n),as.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),as.crossVectors(n,$n)),as.normalize(),So.crossVectors($n,as),s[0]=as.x,s[4]=So.x,s[8]=$n.x,s[1]=as.y,s[5]=So.y,s[9]=$n.y,s[2]=as.z,s[6]=So.z,s[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],y=n[6],g=n[10],p=n[14],M=n[3],E=n[7],_=n[11],b=n[15],S=s[0],L=s[4],x=s[8],A=s[12],F=s[1],W=s[5],B=s[9],Z=s[13],k=s[2],K=s[6],j=s[10],ot=s[14],lt=s[3],rt=s[7],ct=s[11],vt=s[15];return r[0]=a*S+o*F+l*k+c*lt,r[4]=a*L+o*W+l*K+c*rt,r[8]=a*x+o*B+l*j+c*ct,r[12]=a*A+o*Z+l*ot+c*vt,r[1]=h*S+d*F+u*k+f*lt,r[5]=h*L+d*W+u*K+f*rt,r[9]=h*x+d*B+u*j+f*ct,r[13]=h*A+d*Z+u*ot+f*vt,r[2]=m*S+y*F+g*k+p*lt,r[6]=m*L+y*W+g*K+p*rt,r[10]=m*x+y*B+g*j+p*ct,r[14]=m*A+y*Z+g*ot+p*vt,r[3]=M*S+E*F+_*k+b*lt,r[7]=M*L+E*W+_*K+b*rt,r[11]=M*x+E*B+_*j+b*ct,r[15]=M*A+E*Z+_*ot+b*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],y=t[7],g=t[11],p=t[15],M=l*f-c*u,E=o*f-c*d,_=o*u-l*d,b=a*f-c*h,S=a*u-l*h,L=a*d-o*h;return e*(y*M-g*E+p*_)-n*(m*M-g*b+p*S)+s*(m*E-y*b+p*L)-r*(m*_-y*S+g*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],y=t[13],g=t[14],p=t[15],M=e*o-n*a,E=e*l-s*a,_=e*c-r*a,b=n*l-s*o,S=n*c-r*o,L=s*c-r*l,x=h*y-d*m,A=h*g-u*m,F=h*p-f*m,W=d*g-u*y,B=d*p-f*y,Z=u*p-f*g,k=M*Z-E*B+_*W+b*F-S*A+L*x;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/k;return t[0]=(o*Z-l*B+c*W)*K,t[1]=(s*B-n*Z-r*W)*K,t[2]=(y*L-g*S+p*b)*K,t[3]=(u*S-d*L-f*b)*K,t[4]=(l*F-a*Z-c*A)*K,t[5]=(e*Z-s*F+r*A)*K,t[6]=(g*_-m*L-p*E)*K,t[7]=(h*L-u*_+f*E)*K,t[8]=(a*B-o*F+c*x)*K,t[9]=(n*F-e*B-r*x)*K,t[10]=(m*S-y*_+p*M)*K,t[11]=(d*_-h*S-f*M)*K,t[12]=(o*A-a*W-l*x)*K,t[13]=(e*W-n*A+s*x)*K,t[14]=(y*E-m*b-g*M)*K,t[15]=(h*b-d*E+u*M)*K,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,m=r*d,y=a*h,g=a*d,p=o*d,M=l*c,E=l*h,_=l*d,b=n.x,S=n.y,L=n.z;return s[0]=(1-(y+p))*b,s[1]=(f+_)*b,s[2]=(m-E)*b,s[3]=0,s[4]=(f-_)*S,s[5]=(1-(u+p))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(m+E)*L,s[9]=(g-M)*L,s[10]=(1-(u+y))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ar.set(s[0],s[1],s[2]).length(),o=ar.set(s[4],s[5],s[6]).length(),l=ar.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ui.copy(this);let c=1/a,h=1/o,d=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,e.setFromRotationMatrix(ui),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=mi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,y;if(l)m=r/(a-r),y=a*r/(a-r);else if(o===mi)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===br)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),m,y;if(l)m=1/(a-r),y=a/(a-r);else if(o===mi)m=-2/(a-r),y=-(a+r)/(a-r);else if(o===br)m=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ul.prototype.isMatrix4=!0;var Pe=Ul,ar=new U,ui=new Pe,Dp=new U(0,0,0),Np=new U(1,1,1),as=new U,So=new U,$n=new U,Yu=new Pe,Zu=new Yn,ti=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Up=0,Ju=new U,or=new Yn,Yi=new Pe,wo=new U,sa=new U,Fp=new U,Op=new Yn,Ku=new U(1,0,0),ju=new U(0,1,0),Qu=new U(0,0,1),tf={type:"added"},Bp={type:"removed"},lr={type:"childadded",child:null},eh={type:"childremoved",child:null},on=class i extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new ti,n=new Yn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new pe}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(Ku,t)}rotateY(t){return this.rotateOnAxis(ju,t)}rotateZ(t){return this.rotateOnAxis(Qu,t)}translateOnAxis(t,e){return Ju.copy(t).applyQuaternion(this.quaternion),this.position.add(Ju.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ku,t)}translateY(t){return this.translateOnAxis(ju,t)}translateZ(t){return this.translateOnAxis(Qu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wo.copy(t):wo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(sa,wo,this.up):Yi.lookAt(wo,sa,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),or.setFromRotationMatrix(Yi),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tf),lr.child=t,this.dispatchEvent(lr),lr.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bp),eh.child=t,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tf),lr.child=t,this.dispatchEvent(lr),lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,t,Fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,Op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};on.DEFAULT_UP=new U(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},zp={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new gi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},To={h:0,s:0,l:0};function nh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=be.workingColorSpace){if(t=Rp(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=nh(a,r,t+1/3),this.g=nh(a,r,t),this.b=nh(a,r,t-1/3)}return be.colorSpaceToWorking(this,s),this}setStyle(t,e=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:se("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Tn){let n=fd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return be.workingToColorSpace(Pn.copy(this),t),Math.round(Se(Pn.r*255,0,255))*65536+Math.round(Se(Pn.g*255,0,255))*256+Math.round(Se(Pn.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.workingToColorSpace(Pn.copy(this),e);let n=Pn.r,s=Pn.g,r=Pn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.workingToColorSpace(Pn.copy(this),e),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Tn){be.workingToColorSpace(Pn.copy(this),t);let e=Pn.r,n=Pn.g,s=Pn.b;return t!==Tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(os),this.setHSL(os.h+t,os.s+e,os.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(os),t.getHSL(To);let n=Jc(os.h,To.h,e),s=Jc(os.s,To.s,e),r=Jc(os.l,To.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new te;te.NAMES=fd;var Bs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new te(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ts=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},fi=new U,Zi=new U,ih=new U,Ji=new U,cr=new U,hr=new U,ef=new U,sh=new U,rh=new U,ah=new U,oh=new He,lh=new He,ch=new He,us=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fi.subVectors(t,e),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fi.subVectors(s,e),Zi.subVectors(n,e),ih.subVectors(t,e);let a=fi.dot(fi),o=fi.dot(Zi),l=fi.dot(ih),c=Zi.dot(Zi),h=Zi.dot(ih),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ji.x),l.addScaledVector(a,Ji.y),l.addScaledVector(o,Ji.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return oh.setScalar(0),lh.setScalar(0),ch.setScalar(0),oh.fromBufferAttribute(t,e),lh.fromBufferAttribute(t,n),ch.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(oh,r.x),a.addScaledVector(lh,r.y),a.addScaledVector(ch,r.z),a}static isFrontFacing(t,e,n,s){return fi.subVectors(n,e),Zi.subVectors(t,e),fi.cross(Zi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),fi.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;cr.subVectors(s,n),hr.subVectors(r,n),sh.subVectors(t,n);let l=cr.dot(sh),c=hr.dot(sh);if(l<=0&&c<=0)return e.copy(n);rh.subVectors(t,s);let h=cr.dot(rh),d=hr.dot(rh);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(cr,a);ah.subVectors(t,r);let f=cr.dot(ah),m=hr.dot(ah);if(m>=0&&f<=m)return e.copy(r);let y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(hr,o);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return ef.subVectors(r,s),o=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(ef,o);let p=1/(g+y+u);return a=y*p,o=u*p,e.copy(n).addScaledVector(cr,a).addScaledVector(hr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Di=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,di):di.fromBufferAttribute(r,a),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ra),Ao.subVectors(this.max,ra),ur.subVectors(t.a,ra),fr.subVectors(t.b,ra),dr.subVectors(t.c,ra),ls.subVectors(fr,ur),cs.subVectors(dr,fr),Ds.subVectors(ur,dr);let e=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Ds.z,Ds.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Ds.z,0,-Ds.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Ds.y,Ds.x,0];return!hh(e,ur,fr,dr,Ao)||(e=[1,0,0,0,1,0,0,0,1],!hh(e,ur,fr,dr,Ao))?!1:(Co.crossVectors(ls,cs),e=[Co.x,Co.y,Co.z],hh(e,ur,fr,dr,Ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ki=[new U,new U,new U,new U,new U,new U,new U,new U],di=new U,Eo=new Di,ur=new U,fr=new U,dr=new U,ls=new U,cs=new U,Ds=new U,ra=new U,Ao=new U,Co=new U,Ns=new U;function hh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ns.fromArray(i,r);let o=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),l=t.dot(Ns),c=e.dot(Ns),h=n.dot(Ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var an=new U,Ro=new Tt,kp=0,xe=class extends Li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=od,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ro.fromBufferAttribute(this,e),Ro.applyMatrix3(t),this.setXY(e,Ro.x,Ro.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix3(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ia(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=zn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ia(e,this.array)),e}setX(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ia(e,this.array)),e}setY(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ia(e,this.array)),e}setZ(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ia(e,this.array)),e}setW(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=zn(e,this.array),n=zn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=zn(e,this.array),n=zn(n,this.array),s=zn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=zn(e,this.array),n=zn(n,this.array),s=zn(s,this.array),r=zn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var _a=class extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ya=class extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hp=new Di,aa=new U,uh=new U,Ni=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;aa.subVectors(t,this.center);let e=aa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(aa,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(aa.copy(t.center).add(uh)),this.expandByPoint(aa.copy(t.center).sub(uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Vp=0,Qn=new Pe,fh=new on,pr=new U,qn=new Di,oa=new Di,yn=new U,Le=class i extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ap(t)?ya:_a)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,n){return Qn.makeTranslation(t,e,n),this.applyMatrix4(Qn),this}scale(t,e,n){return Qn.makeScale(t,e,n),this.applyMatrix4(Qn),this}lookAt(t){return fh.lookAt(t),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(qn.min,oa.min),qn.expandByPoint(yn),yn.addVectors(qn.max,oa.max),qn.expandByPoint(yn)):(qn.expandByPoint(oa.min),qn.expandByPoint(oa.max))}qn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)yn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(yn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)yn.fromBufferAttribute(o,c),l&&(pr.fromBufferAttribute(t,c),yn.add(pr)),s=Math.max(s,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new xe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new U,l[x]=new U;let c=new U,h=new U,d=new U,u=new Tt,f=new Tt,m=new Tt,y=new U,g=new U;function p(x,A,F){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,F),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,F),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let W=1/(f.x*m.y-m.x*f.y);isFinite(W)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(W),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(W),o[x].add(y),o[A].add(y),o[F].add(y),l[x].add(g),l[A].add(g),l[F].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,A=M.length;x<A;++x){let F=M[x],W=F.start,B=F.count;for(let Z=W,k=W+B;Z<k;Z+=3)p(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let E=new U,_=new U,b=new U,S=new U;function L(x){b.fromBufferAttribute(s,x),S.copy(b);let A=o[x];E.copy(A),E.sub(b.multiplyScalar(b.dot(A))).normalize(),_.crossVectors(S,A);let W=_.dot(l[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,W)}for(let x=0,A=M.length;x<A;++x){let F=M[x],W=F.start,B=F.count;for(let Z=W,k=W+B;Z<k;Z+=3)L(t.getX(Z+0)),L(t.getX(Z+1)),L(t.getX(Z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)yn.fromBufferAttribute(t,e),yn.normalize(),t.setXYZ(e,yn.x,yn.y,yn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new xe(u,h,d)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dh=new U,Gp=new U,Wp=new pe,pi=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dh.subVectors(n,e).cross(Gp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(dh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wp.getNormalMatrix(t),s=this.coplanarPoint(dh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Xp=0,xi=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=Fr,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=kh,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){se(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new pi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ji=new U,ph=new U,Po=new U,Io=new U,zs=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,e),ji.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ph.copy(t).add(e).multiplyScalar(.5),Po.copy(e).sub(t).normalize(),Io.copy(this.origin).sub(ph);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Po),o=Io.dot(this.direction),l=-Io.dot(Po),c=Io.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ph).addScaledVector(Po,u),f}intersectSphere(t,e){if(t.radius<0)return null;ji.subVectors(t.center,this.origin);let n=ji.dot(this.direction),s=ji.dot(ji)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,m=e.x-a.x,y=e.y-a.y,g=e.z-a.z,p=n.x-a.x,M=n.y-a.y,E=n.z-a.z,_=Math.abs(l),b=Math.abs(c),S=Math.abs(h),L,x,A,F,W,B,Z,k,K,j,ot,lt;if(_>=b&&_>=S?(A=l,B=d,K=m,lt=p,l>=0?(L=c,x=h,F=u,W=f,Z=y,k=g,j=M,ot=E):(L=h,x=c,F=f,W=u,Z=g,k=y,j=E,ot=M)):b>=S?(A=c,B=u,K=y,lt=M,c>=0?(L=h,x=l,F=f,W=d,Z=g,k=m,j=E,ot=p):(L=l,x=h,F=d,W=f,Z=m,k=g,j=p,ot=E)):(A=h,B=f,K=g,lt=E,h>=0?(L=l,x=c,F=d,W=u,Z=m,k=y,j=p,ot=M):(L=c,x=l,F=u,W=d,Z=y,k=m,j=M,ot=p)),A===0)return null;let rt=L/A,ct=x/A,vt=1/A,yt=F-rt*B,dt=W-ct*B,ce=Z-rt*K,ie=k-ct*K,_e=j-rt*lt,ht=ot-ct*lt,mt=_e*ie-ht*ce,Nt=yt*ht-dt*_e,O=ce*dt-ie*yt;if(s){if(mt<0||Nt<0||O<0)return null}else if((mt<0||Nt<0||O<0)&&(mt>0||Nt>0||O>0))return null;let ut=mt+Nt+O;if(ut===0)return null;let St=vt*(mt*B+Nt*K+O*lt);return(ut>0?St<0:St>0)?null:this.at(St/ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vi=class extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nf=new Pe,Us=new zs,Lo=new Ni,sf=new U,Do=new U,No=new U,Uo=new U,mh=new U,Fo=new U,rf=new U,Oo=new U,we=class extends on{constructor(t=new Le,e=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(mh.fromBufferAttribute(d,t),a?Fo.addScaledVector(mh,h):Fo.addScaledVector(mh.sub(e),h))}e.add(Fo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(r),Us.copy(t.ray).recast(t.near),!(Lo.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Lo,sf)===null||Us.origin.distanceToSquared(sf)>(t.far-t.near)**2))&&(nf.copy(r).invert(),Us.copy(t.ray).applyMatrix4(nf),!(n.boundingBox!==null&&Us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Us)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=a[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,b=E;_<b;_+=3){let S=o.getX(_),L=o.getX(_+1),x=o.getX(_+2);s=Bo(this,p,t,n,c,h,d,S,L,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let M=o.getX(g),E=o.getX(g+1),_=o.getX(g+2);s=Bo(this,a,t,n,c,h,d,M,E,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=a[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,b=E;_<b;_+=3){let S=_,L=_+1,x=_+2;s=Bo(this,p,t,n,c,h,d,S,L,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let M=g,E=g+1,_=g+2;s=Bo(this,a,t,n,c,h,d,M,E,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function $p(i,t,e,n,s,r,a,o){let l;if(t.side===An?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ys,o),l===null)return null;Oo.copy(o),Oo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oo);return c<e.near||c>e.far?null:{distance:c,point:Oo.clone(),object:i}}function Bo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Do),i.getVertexPosition(l,No),i.getVertexPosition(c,Uo);let h=$p(i,t,e,n,Do,No,Uo,rf);if(h){let d=new U;us.getBarycoord(rf,Do,No,Uo,d),s&&(h.uv=us.getInterpolatedAttribute(s,o,l,c,d,new Tt)),r&&(h.uv1=us.getInterpolatedAttribute(r,o,l,c,d,new Tt)),a&&(h.normal=us.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};us.getNormal(Do,No,Uo,u.normal),h.face=u,h.barycoord=d}return h}var Ma=class extends Un{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Mn,h=Mn,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fs=class extends xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},mr=new Pe,af=new Pe,zo=[],of=new Di,qp=new Pe,la=new we,ca=new Ni,ds=class extends we{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mr),of.copy(t.boundingBox).applyMatrix4(mr),this.boundingBox.union(of)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mr),ca.copy(t.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(ca)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(n),t.ray.intersectsSphere(ca)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mr),af.multiplyMatrices(n,mr),la.matrixWorld=af,la.raycast(t,zo);for(let a=0,o=zo.length;a<o;a++){let l=zo[a];l.instanceId=r,l.object=this,e.push(l)}zo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new fs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ma(new Float32Array(s*this.count),s,this.count,Gl,ii));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fs=new Ni,Yp=new Tt(.5,.5),ko=new U,Ar=class{constructor(t=new pi,e=new pi,n=new pi,s=new pi,r=new pi,a=new pi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],y=r[9],g=r[10],p=r[11],M=r[12],E=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-a,f-h,p-m,b-M).normalize(),s[1].setComponents(c+a,f+h,p+m,b+M).normalize(),s[2].setComponents(c+o,f+d,p+y,b+E).normalize(),s[3].setComponents(c-o,f-d,p-y,b-E).normalize(),n)s[4].setComponents(l,u,g,_).normalize(),s[5].setComponents(c-l,f-u,p-g,b-_).normalize();else if(s[4].setComponents(c-l,f-u,p-g,b-_).normalize(),e===mi)s[5].setComponents(c+l,f+u,p+g,b+_).normalize();else if(e===br)s[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);let e=Yp.distanceTo(t.center);return Fs.radius=.7071067811865476+e,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ko.x=s.normal.x>0?t.max.x:t.min.x,ko.y=s.normal.y>0?t.max.y:t.min.y,ko.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ul=class extends xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},fl=new U,dl=new U,lf=new Pe,ha=new zs,Ho=new Ni,gh=new U,cf=new U,pl=class extends on{constructor(t=new Le,e=new ul){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)fl.fromBufferAttribute(e,s-1),dl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=fl.distanceTo(dl);t.setAttribute("lineDistance",new me(n,1))}else se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,t.ray.intersectsSphere(Ho)===!1)return;lf.copy(s).invert(),ha.copy(t.ray).applyMatrix4(lf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let y=f,g=m-1;y<g;y+=c){let p=h.getX(y),M=h.getX(y+1),E=Vo(this,t,ha,l,p,M,y);E&&e.push(E)}if(this.isLineLoop){let y=h.getX(m-1),g=h.getX(f),p=Vo(this,t,ha,l,y,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let y=f,g=m-1;y<g;y+=c){let p=Vo(this,t,ha,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=Vo(this,t,ha,l,m-1,f,m-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vo(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(fl.fromBufferAttribute(o,s),dl.fromBufferAttribute(o,r),e.distanceSqToSegment(fl,dl,gh,cf)>n)return;gh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(gh);if(!(c<t.near||c>t.far))return{distance:c,point:cf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var hf=new U,uf=new U,ba=class extends pl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)hf.fromBufferAttribute(e,s),uf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+hf.distanceTo(uf);t.setAttribute("lineDistance",new me(n,1))}else se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ml=class extends xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ff=new Pe,Eh=new zs,Go=new Ni,Wo=new U,Cr=class extends on{constructor(t=new Le,e=new ml){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(s),Go.radius+=r,t.ray.intersectsSphere(Go)===!1)return;ff.copy(s).invert(),Eh.copy(t.ray).applyMatrix4(ff);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,y=f;m<y;m++){let g=c.getX(m);Wo.fromBufferAttribute(d,g),df(Wo,g,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,y=f;m<y;m++)Wo.fromBufferAttribute(d,m),df(Wo,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function df(i,t,e,n,s,r,a){let o=Eh.distanceSqToPoint(i);if(o<e){let l=new U;Eh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Sa=class extends Un{constructor(t=[],e=bs,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},es=class extends Un{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ps=class extends Un{constructor(t,e,n=Mi,s,r,a,o=Mn,l=Mn,c,h=Ii,d=1){if(h!==Ii&&h!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},gl=class extends ps{constructor(t,e=Mi,n=bs,s,r,a=Mn,o=Mn,l,c=Ii){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},wa=class extends Un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},In=class i extends Le{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function m(y,g,p,M,E,_,b,S,L,x,A){let F=_/L,W=b/x,B=_/2,Z=b/2,k=S/2,K=L+1,j=x+1,ot=0,lt=0,rt=new U;for(let ct=0;ct<j;ct++){let vt=ct*W-Z;for(let yt=0;yt<K;yt++){let dt=yt*F-B;rt[y]=dt*M,rt[g]=vt*E,rt[p]=k,c.push(rt.x,rt.y,rt.z),rt[y]=0,rt[g]=0,rt[p]=S>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(yt/L),d.push(1-ct/x),ot+=1}}for(let ct=0;ct<x;ct++)for(let vt=0;vt<L;vt++){let yt=u+vt+K*ct,dt=u+vt+K*(ct+1),ce=u+(vt+1)+K*(ct+1),ie=u+(vt+1)+K*ct;l.push(yt,dt,ie),l.push(dt,ce,ie),lt+=6}o.addGroup(f,lt,A),f+=lt,u+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ta=class i extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new U,h=new Tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ui=class i extends Le{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,y=[],g=n/2,p=0;M(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(f,2));function M(){let _=new U,b=new U,S=0,L=(e-t)/n;for(let x=0;x<=r;x++){let A=[],F=x/r,W=F*(e-t)+t;for(let B=0;B<=s;B++){let Z=B/s,k=Z*l+o,K=Math.sin(k),j=Math.cos(k);b.x=W*K,b.y=-F*n+g,b.z=W*j,d.push(b.x,b.y,b.z),_.set(K,L,j).normalize(),u.push(_.x,_.y,_.z),f.push(Z,1-F),A.push(m++)}y.push(A)}for(let x=0;x<s;x++)for(let A=0;A<r;A++){let F=y[A][x],W=y[A+1][x],B=y[A+1][x+1],Z=y[A][x+1];(t>0||A!==0)&&(h.push(F,W,Z),S+=3),(e>0||A!==r-1)&&(h.push(W,B,Z),S+=3)}c.addGroup(p,S,0),p+=S}function E(_){let b=m,S=new Tt,L=new U,x=0,A=_===!0?t:e,F=_===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,g*F,0),u.push(0,F,0),f.push(.5,.5),m++;let W=m;for(let B=0;B<=s;B++){let k=B/s*l+o,K=Math.cos(k),j=Math.sin(k);L.x=A*j,L.y=g*F,L.z=A*K,d.push(L.x,L.y,L.z),u.push(0,F,0),S.x=K*.5+.5,S.y=j*.5*F+.5,f.push(S.x,S.y),m++}for(let B=0;B<s;B++){let Z=b+B,k=W+B;_===!0?h.push(k,k+1,Z):h.push(k+1,k,Z),x+=3}c.addGroup(p,x,_===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ks=class i extends Ui{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xl=class i extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let E=new U,_=new U,b=new U;for(let S=0;S<e.length;S+=3)f(e[S+0],E),f(e[S+1],_),f(e[S+2],b),l(E,_,b,M)}function l(M,E,_,b){let S=b+1,L=[];for(let x=0;x<=S;x++){L[x]=[];let A=M.clone().lerp(_,x/S),F=E.clone().lerp(_,x/S),W=S-x;for(let B=0;B<=W;B++)B===0&&x===S?L[x][B]=A:L[x][B]=A.clone().lerp(F,B/W)}for(let x=0;x<S;x++)for(let A=0;A<2*(S-x)-1;A++){let F=Math.floor(A/2);A%2===0?(u(L[x][F+1]),u(L[x+1][F]),u(L[x][F])):(u(L[x][F+1]),u(L[x+1][F+1]),u(L[x+1][F]))}}function c(M){let E=new U;for(let _=0;_<r.length;_+=3)E.x=r[_+0],E.y=r[_+1],E.z=r[_+2],E.normalize().multiplyScalar(M),r[_+0]=E.x,r[_+1]=E.y,r[_+2]=E.z}function h(){let M=new U;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];let _=g(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;a.push(_,1-b)}m(),d()}function d(){for(let M=0;M<a.length;M+=6){let E=a[M+0],_=a[M+2],b=a[M+4],S=Math.max(E,_,b),L=Math.min(E,_,b);S>.9&&L<.1&&(E<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,E){let _=M*3;E.x=t[_+0],E.y=t[_+1],E.z=t[_+2]}function m(){let M=new U,E=new U,_=new U,b=new U,S=new Tt,L=new Tt,x=new Tt;for(let A=0,F=0;A<r.length;A+=9,F+=6){M.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),_.set(r[A+6],r[A+7],r[A+8]),S.set(a[F+0],a[F+1]),L.set(a[F+2],a[F+3]),x.set(a[F+4],a[F+5]),b.copy(M).add(E).add(_).divideScalar(3);let W=g(b);y(S,F+0,M,W),y(L,F+2,E,W),y(x,F+4,_,W)}}function y(M,E,_,b){b<0&&M.x===1&&(a[E]=M.x-1),_.x===0&&_.z===0&&(a[E]=b/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){se("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Tt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new Pe;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Se(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Se(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rr=class extends Zn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},vl=class extends Rr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Jh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var pf=new U,mf=new U,xh=new Jh,vh=new Jh,_h=new Jh,_l=class extends Zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(mf.subVectors(s[0],s[1]).add(s[0]),c=mf);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(pf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),xh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,y,g),vh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,y,g),_h.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(xh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),vh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),_h.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(xh.calc(l),vh.calc(l),_h.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function gf(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Zp(i,t){let e=1-i;return e*e*t}function Jp(i,t){return 2*(1-i)*i*t}function Kp(i,t){return i*i*t}function fa(i,t,e,n){return Zp(i,t)+Jp(i,e)+Kp(i,n)}function jp(i,t){let e=1-i;return e*e*e*t}function Qp(i,t){let e=1-i;return 3*e*e*i*t}function tm(i,t){return 3*(1-i)*i*i*t}function em(i,t){return i*i*i*t}function da(i,t,e,n,s){return jp(i,t)+Qp(i,e)+tm(i,n)+em(i,s)}var Ea=class extends Zn{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(da(t,s.x,r.x,a.x,o.x),da(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pr=class extends Zn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(da(t,s.x,r.x,a.x,o.x),da(t,s.y,r.y,a.y,o.y),da(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Aa=class extends Zn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yl=class extends Zn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ca=class extends Zn{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(fa(t,s.x,r.x,a.x),fa(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hs=class extends Zn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(fa(t,s.x,r.x,a.x),fa(t,s.y,r.y,a.y),fa(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(gf(o,l.x,c.x,h.x,d.x),gf(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}},Ah=Object.freeze({__proto__:null,ArcCurve:vl,CatmullRomCurve3:_l,CubicBezierCurve:Ea,CubicBezierCurve3:Pr,EllipseCurve:Rr,LineCurve:Aa,LineCurve3:yl,QuadraticBezierCurve:Ca,QuadraticBezierCurve3:Hs,SplineCurve:Ra}),Ml=class extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ah[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ah[s.type]().fromJSON(s))}return this}},Vs=class extends Ml{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Aa(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ca(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ea(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s),new Tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ra(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Rr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ir=class extends Vs{constructor(t){super(t),this.uuid=zr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Vs().fromJSON(s))}return this}};function nm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=dd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=om(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],m=i[u+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Pa(r,a,e,o,l,c,0),a}function dd(i,t,e,n,s){let r;if(s===vm(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=xf(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=xf(a/n|0,i[a],i[a+1],r);return r&&Lr(r,r.next)&&(La(r),r=r.next),r}function Gs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Lr(e,e.next)||Je(e.prev,e,e.next)===0)){if(La(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Pa(i,t,e,n,s,r,a){if(!i)return;!a&&r&&fm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?sm(i,n,s,r):im(i)){t.push(l.i,i.i,c.i),La(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rm(Gs(i),t),Pa(i,t,e,n,s,r,2)):a===2&&am(i,t,e,n,s,r):Pa(Gs(i),t,e,n,s,r,1);break}}}function im(i){let t=i.prev,e=i,n=i.next;if(Je(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&ua(s,o,r,l,a,c,m.x,m.y)&&Je(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function sm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Je(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),m=Math.min(h,d,u),y=Math.max(o,l,c),g=Math.max(h,d,u),p=Ch(f,m,t,e,n),M=Ch(y,g,t,e,n),E=i.prevZ,_=i.nextZ;for(;E&&E.z>=p&&_&&_.z<=M;){if(E.x>=f&&E.x<=y&&E.y>=m&&E.y<=g&&E!==s&&E!==a&&ua(o,h,l,d,c,u,E.x,E.y)&&Je(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&ua(o,h,l,d,c,u,_.x,_.y)&&Je(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=y&&E.y>=m&&E.y<=g&&E!==s&&E!==a&&ua(o,h,l,d,c,u,E.x,E.y)&&Je(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&ua(o,h,l,d,c,u,_.x,_.y)&&Je(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function rm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Lr(n,s)&&md(n,e,e.next,s)&&Ia(n,s)&&Ia(s,n)&&(t.push(n.i,e.i,s.i),La(e),La(e.next),e=i=s),e=e.next}while(e!==i);return Gs(e)}function am(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mm(a,o)){let l=gd(a,o);a=Gs(a,a.next),l=Gs(l,l.next),Pa(a,t,e,n,s,r,0),Pa(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function om(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=dd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pm(c))}s.sort(lm);for(let r=0;r<s.length;r++)e=cm(s[r],e);return e}function lm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function cm(i,t){let e=hm(i,t);if(!e)return t;let n=gd(e,i);return Gs(n,n.next),Gs(e,e.next)}function hm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Lr(i,e))return e;do{if(Lr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&pd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Ia(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&um(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function um(i,t){return Je(i.prev,i,t.prev)<0&&Je(t.next,i,i.next)<0}function fm(i,t,e,n){let s=i;do s.z===0&&(s.z=Ch(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,dm(s)}function dm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Ch(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function pm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function pd(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ua(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&pd(i,t,e,n,s,r,a,o)}function mm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gm(i,t)&&(Ia(i,t)&&Ia(t,i)&&xm(i,t)&&(Je(i.prev,i,t.prev)||Je(i,t.prev,t))||Lr(i,t)&&Je(i.prev,i,i.next)>0&&Je(t.prev,t,t.next)>0)}function Je(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Lr(i,t){return i.x===t.x&&i.y===t.y}function md(i,t,e,n){let s=$o(Je(i,t,e)),r=$o(Je(i,t,n)),a=$o(Je(e,n,i)),o=$o(Je(e,n,t));return!!(s!==r&&a!==o||s===0&&Xo(i,e,t)||r===0&&Xo(i,n,t)||a===0&&Xo(e,i,n)||o===0&&Xo(e,t,n))}function Xo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $o(i){return i>0?1:i<0?-1:0}function gm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&md(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ia(i,t){return Je(i.prev,i,i.next)<0?Je(i,t,i.next)>=0&&Je(i,i.prev,t)>=0:Je(i,t,i.prev)<0||Je(i,i.next,t)<0}function xm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function gd(i,t){let e=Rh(i.i,i.x,i.y),n=Rh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function xf(i,t,e,n){let s=Rh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function La(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ph=class{static triangulate(t,e,n=2){return nm(t,e,n)}},yr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];vf(t),_f(n,t);let a=t.length;e.forEach(vf);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,_f(n,e[l]);let o=Ph.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function vf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function _f(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Da=class i extends Le{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Se(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new U,u=new Tt,f=new U,m=new U,y=new U,g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(m)}for(let M=0;M<=e;M++){let E=n+M*h*s,_=Math.sin(E),b=Math.cos(E);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*_,d.y=t[S].y,d.z=t[S].x*b,a.push(d.x,d.y,d.z),u.x=M/e,u.y=S/(t.length-1),o.push(u.x,u.y);let L=l[3*S+0]*_,x=l[3*S+1],A=l[3*S+0]*b;c.push(L,x,A)}}for(let M=0;M<e;M++)for(let E=0;E<t.length-1;E++){let _=E+M*t.length,b=_,S=_+t.length,L=_+t.length+1,x=_+1;r.push(b,S,x),r.push(L,x,S)}this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("uv",new me(o,2)),this.setAttribute("normal",new me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Na=class i extends xl{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ei=class i extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],m=[],y=[],g=[];for(let p=0;p<h;p++){let M=p*u-a;for(let E=0;E<c;E++){let _=E*d-r;m.push(_,-M,0),y.push(0,0,1),g.push(E/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let E=M+c*p,_=M+c*(p+1),b=M+1+c*(p+1),S=M+1+c*p;f.push(E,_,S),f.push(_,b,S)}this.setIndex(f),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(y,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ua=class i extends Le{constructor(t=new Ir([new Tt(0,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new me(s,3)),this.setAttribute("normal",new me(r,3)),this.setAttribute("uv",new me(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,m=u.holes;yr.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let M=m[g];yr.isClockWise(M)===!0&&(m[g]=M.reverse())}let y=yr.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let M=m[g];f=f.concat(M)}for(let g=0,p=f.length;g<p;g++){let M=f[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,p=y.length;g<p;g++){let M=y[g],E=M[0]+d,_=M[1]+d,b=M[2]+d;n.push(E,_,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return _m(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function _m(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ns=class i extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new U,u=new U,f=[],m=[],y=[],g=[];for(let p=0;p<=n;p++){let M=[],E=p/n,_=a+E*o,b=t*Math.cos(_),S=Math.sqrt(t*t-b*b),L=0;p===0&&a===0?L=.5/e:p===n&&l===Math.PI&&(L=-.5/e);for(let x=0;x<=e;x++){let A=x/e,F=s+A*r;d.x=-S*Math.cos(F),d.y=b,d.z=S*Math.sin(F),m.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(A+L,1-E),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let E=h[p][M+1],_=h[p][M],b=h[p+1][M],S=h[p+1][M+1];(p!==0||a>0)&&f.push(E,_,S),(p!==n-1||l<Math.PI)&&f.push(_,b,S)}this.setIndex(f),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(y,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Fa=class i extends Le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new U,f=new U,m=new U;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let p=(s+1)*y+g-1,M=(s+1)*(y-1)+g-1,E=(s+1)*(y-1)+g,_=(s+1)*y+g;l.push(p,M,_),l.push(M,E,_)}this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ws=class i extends Le{constructor(t=new Hs(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new Tt,h=new U,d=[],u=[],f=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(f,2));function y(){for(let E=0;E<e;E++)g(E);g(r===!1?e:0),M(),p()}function g(E){h=t.getPointAt(E/e,h);let _=a.normals[E],b=a.binormals[E];for(let S=0;S<=s;S++){let L=S/s*Math.PI*2,x=Math.sin(L),A=-Math.cos(L);l.x=A*_.x+x*b.x,l.y=A*_.y+x*b.y,l.z=A*_.z+x*b.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=e;E++)for(let _=1;_<=s;_++){let b=(s+1)*(E-1)+(_-1),S=(s+1)*E+(_-1),L=(s+1)*E+_,x=(s+1)*(E-1)+_;m.push(b,S,x),m.push(S,L,x)}}function M(){for(let E=0;E<=e;E++)for(let _=0;_<=s;_++)c.x=E/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ah[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function js(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(yf(s))s.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(yf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ln(i){let t={};for(let e=0;e<i.length;e++){let n=js(i[e]);for(let s in n)t[s]=n[s]}return t}function yf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ym(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var ss={clone:js,merge:Ln},Mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mm,this.fragmentShader=bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=ym(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new te().setHex(s.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new He().fromArray(s.value);break;case"m3":this.uniforms[n].value=new pe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Dr=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},dn=class extends xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Oa=class extends xi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Fl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xs=class extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bl=class extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function gr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function yh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ms=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sl=class extends ms{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wh:r=t,o=2*e-n;break;case Th:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wh:a=t,l=2*n-e;break;case Th:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),y=m*m,g=y*m,p=-u*g+2*u*y-u*m,M=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*m+1,E=(-1-f)*g+(1.5+f)*y+.5*m,_=f*g-f*y;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+M*a[c+b]+E*a[l+b]+_*a[d+b];return r}},wl=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Tl=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},El=class extends ms{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(s-e),y=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*m;return r}let u=o*2,f=t-1;for(let m=0;m!==o;++m){let y=a[c+m],g=a[l+m],p=f*u+m*2,M=d[p],E=d[p+1],_=t*u+m*2,b=h[_],S=h[_+1],L=wm(n,e,M,b,s);r[m]=xd(L,y,E,S,g)}return r}};function xd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Sm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function wm(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=xd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Sm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Jn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gr(e,this.TimeBufferType),this.values=gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gr(t.times,Array),values:gr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),yh(t.settings)&&(n.settings={inTangents:gr(t.settings.inTangents,Array),outTangents:gr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new El(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case pa:e=this.InterpolantFactoryMethodDiscrete;break;case al:e=this.InterpolantFactoryMethodLinear;break;case Zo:e=this.InterpolantFactoryMethodSmooth;break;case bh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return se("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return al;case this.InterpolantFactoryMethodSmooth:return Zo;case this.InterpolantFactoryMethodBezier:return bh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;yh(this.settings)&&(Mf(this.settings.inTangents,t),Mf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(le("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(le("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){le("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){le("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Cp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){le("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let y=e[d+m];if(y!==e[u+m]||y!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,yh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Mf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=al;var gs=class extends Jn{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=pa;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}};Al.prototype.ValueTypeName="color";var Cl=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}};Cl.prototype.ValueTypeName="number";var Rl=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ba=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Rl(this.times,this.values,this.getValueSize(),t)}};Ba.prototype.ValueTypeName="quaternion";Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends Jn{constructor(t,e,n){super(t,e,n)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=pa;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}};Pl.prototype.ValueTypeName="vector";var Il=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vd=new Il,Ll=class{constructor(t){this.manager=t!==void 0?t:vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nr=class extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},$s=class extends Nr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Mh=new Pe,bf=new U,Sf=new U,za=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;bf.setFromMatrixPosition(t.matrixWorld),e.position.copy(bf),Sf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Mh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===br||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Mh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},qo=new U,Yo=new Yn,Ri=new U,ka=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qo,Yo,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Yo,Ri.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(qo,Yo,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Yo,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hs=new U,wf=new Tt,Tf=new Tt,fn=class extends ka{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ol*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hs.x,hs.y).multiplyScalar(-t/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-t/hs.z)}getViewSize(t,e){return this.getViewBounds(t,wf,Tf),e.subVectors(Tf,wf)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ih=class extends za{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}},Ha=class extends Nr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ih}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},vs=class extends ka{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Lh=class extends za{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_s=class extends Nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Lh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var xr=-90,vr=1,Dl=class extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(xr,vr,t,e);s.layers=this.layers,this.add(s);let r=new fn(xr,vr,t,e);r.layers=this.layers,this.add(r);let a=new fn(xr,vr,t,e);a.layers=this.layers,this.add(a);let o=new fn(xr,vr,t,e);o.layers=this.layers,this.add(o);let l=new fn(xr,vr,t,e);l.layers=this.layers,this.add(l);let c=new fn(xr,vr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Nl=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Va=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Tm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Tm(){this._document.hidden===!1&&this.reset()}var jh="\\[\\]\\.:\\/",Em=new RegExp("["+jh+"]","g"),Qh="[^"+jh+"]",Am="[^"+jh.replace("\\.","")+"]",Cm=/((?:WC+[\/:])*)/.source.replace("WC",Qh),Rm=/(WCOD+)?/.source.replace("WCOD",Am),Pm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),Im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),Lm=new RegExp("^"+Cm+Rm+Pm+Im+"$"),Dm=["material","materials","bones","map"],Dh=class{constructor(t,e,n){let s=n||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},We=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Em,"")}static parseTrackName(t){let e=Lm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Dm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){se("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;le("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Dh;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vy=new Float32Array(1);var Ef=new Pe,qs=class{constructor(t,e,n=0,s=1/0){this.ray=new zs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ef.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ef),this}intersectObject(t,e=!0,n=[]){return Nh(t,this,n,e),n.sort(Af),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Nh(t[s],this,n,e);return n.sort(Af),n}};function Af(i,t){return i.distance-t.distance}function Nh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Nh(r[a],t,e,!0)}}var ru=class ru{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ru.prototype.isMatrix2=!0;var Uh=ru;function tu(i,t,e,n){let s=Nm(n);switch(e){case $h:return i*t;case Gl:return i*t/s.components*s.byteLength;case Wl:return i*t/s.components*s.byteLength;case ws:return i*t*2/s.components*s.byteLength;case Xl:return i*t*2/s.components*s.byteLength;case qh:return i*t*3/s.components*s.byteLength;case si:return i*t*4/s.components*s.byteLength;case $l:return i*t*4/s.components*s.byteLength;case Ka:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yl:case Jl:return Math.max(i,16)*Math.max(t,8)/4;case ql:case Zl:return Math.max(i,8)*Math.max(t,8)/2;case Kl:case jl:case tc:case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ql:case eo:case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xc:case vc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yc:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case no:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Nm(i){switch(i){case kn:case Vh:return{byteLength:1,components:1};case Or:case Gh:case pn:return{byteLength:2,components:1};case Hl:case Vl:return{byteLength:2,components:4};case Mi:case kl:case ii:return{byteLength:4,components:1};case Wh:case Xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function kd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hm(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],y=d[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gm=`#ifdef USE_ALPHAHASH
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
#endif`,Wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ym=`#ifdef USE_AOMAP
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
#endif`,Zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jm=`#ifdef USE_BATCHING
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
#endif`,Km=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e0=`#ifdef USE_IRIDESCENCE
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
#endif`,n0=`#ifdef USE_BUMPMAP
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,u0=`#define PI 3.141592653589793
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
} // validated`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d0=`vec3 transformedNormal = objectNormal;
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
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R0=`#ifdef USE_GRADIENTMAP
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
}`,P0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,N0=`#ifdef USE_ENVMAP
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
#endif`,U0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
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
#endif`,k0=`uniform sampler2D dfgLUT;
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
}`,H0=`
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
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
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j0=`#if defined( USE_POINTS_UV )
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
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
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
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
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
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ag=`float getShadowMask() {
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rg=`#ifdef USE_SKINNING
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
#endif`,Pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gg=`uniform sampler2D t2D;
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`#include <common>
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
}`,Zg=`#if DEPTH_PACKING == 3200
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
}`,Jg=`#define DISTANCE
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
}`,Kg=`#define DISTANCE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`uniform float scale;
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
}`,ex=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#define LAMBERT
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
}`,rx=`#define LAMBERT
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
}`,ax=`#define MATCAP
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
}`,ox=`#define MATCAP
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
}`,lx=`#define NORMAL
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
}`,cx=`#define NORMAL
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
}`,hx=`#define PHONG
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
}`,ux=`#define PHONG
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
}`,fx=`#define STANDARD
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
}`,dx=`#define STANDARD
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
}`,px=`#define TOON
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
}`,mx=`#define TOON
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
}`,gx=`uniform float size;
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
}`,xx=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,_x=`uniform vec3 color;
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
}`,yx=`uniform float rotation;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:Vm,alphahash_pars_fragment:Gm,alphamap_fragment:Wm,alphamap_pars_fragment:Xm,alphatest_fragment:$m,alphatest_pars_fragment:qm,aomap_fragment:Ym,aomap_pars_fragment:Zm,batching_pars_vertex:Jm,batching_vertex:Km,begin_vertex:jm,beginnormal_vertex:Qm,bsdfs:t0,iridescence_fragment:e0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:s0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:a0,color_fragment:o0,color_pars_fragment:l0,color_pars_vertex:c0,color_vertex:h0,common:u0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:d0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:g0,emissivemap_pars_fragment:x0,colorspace_fragment:v0,colorspace_pars_fragment:_0,envmap_fragment:y0,envmap_common_pars_fragment:M0,envmap_pars_fragment:b0,envmap_pars_vertex:S0,envmap_physical_pars_fragment:N0,envmap_vertex:w0,fog_vertex:T0,fog_pars_vertex:E0,fog_fragment:A0,fog_pars_fragment:C0,gradientmap_pars_fragment:R0,lightmap_pars_fragment:P0,lights_lambert_fragment:I0,lights_lambert_pars_fragment:L0,lights_pars_begin:D0,lights_toon_fragment:U0,lights_toon_pars_fragment:F0,lights_phong_fragment:O0,lights_phong_pars_fragment:B0,lights_physical_fragment:z0,lights_physical_pars_fragment:k0,lights_fragment_begin:H0,lights_fragment_maps:V0,lights_fragment_end:G0,lightprobes_pars_fragment:W0,logdepthbuf_fragment:X0,logdepthbuf_pars_fragment:$0,logdepthbuf_pars_vertex:q0,logdepthbuf_vertex:Y0,map_fragment:Z0,map_pars_fragment:J0,map_particle_fragment:K0,map_particle_pars_fragment:j0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:tg,morphinstance_vertex:eg,morphcolor_vertex:ng,morphnormal_vertex:ig,morphtarget_pars_vertex:sg,morphtarget_vertex:rg,normal_fragment_begin:ag,normal_fragment_maps:og,normal_pars_fragment:lg,normal_pars_vertex:cg,normal_vertex:hg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:pg,iridescence_pars_fragment:mg,opaque_fragment:gg,packing:xg,premultiplied_alpha_fragment:vg,project_vertex:_g,dithering_fragment:yg,dithering_pars_fragment:Mg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:wg,shadowmap_pars_vertex:Tg,shadowmap_vertex:Eg,shadowmask_pars_fragment:Ag,skinbase_vertex:Cg,skinning_pars_vertex:Rg,skinning_vertex:Pg,skinnormal_vertex:Ig,specularmap_fragment:Lg,specularmap_pars_fragment:Dg,tonemapping_fragment:Ng,tonemapping_pars_fragment:Ug,transmission_fragment:Fg,transmission_pars_fragment:Og,uv_pars_fragment:Bg,uv_pars_vertex:zg,uv_vertex:kg,worldpos_vertex:Hg,background_vert:Vg,background_frag:Gg,backgroundCube_vert:Wg,backgroundCube_frag:Xg,cube_vert:$g,cube_frag:qg,depth_vert:Yg,depth_frag:Zg,distance_vert:Jg,distance_frag:Kg,equirect_vert:jg,equirect_frag:Qg,linedashed_vert:tx,linedashed_frag:ex,meshbasic_vert:nx,meshbasic_frag:ix,meshlambert_vert:sx,meshlambert_frag:rx,meshmatcap_vert:ax,meshmatcap_frag:ox,meshnormal_vert:lx,meshnormal_frag:cx,meshphong_vert:hx,meshphong_frag:ux,meshphysical_vert:fx,meshphysical_frag:dx,meshtoon_vert:px,meshtoon_frag:mx,points_vert:gx,points_frag:xx,shadow_vert:vx,shadow_frag:_x,sprite_vert:yx,sprite_frag:Mx},Ht={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Bi={basic:{uniforms:Ln([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Ln([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Ln([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Ln([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Ln([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new te(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Ln([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Ln([Ht.points,Ht.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Ln([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Ln([Ht.common,Ht.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Ln([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Ln([Ht.sprite,Ht.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Ln([Ht.common,Ht.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Ln([Ht.lights,Ht.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Bi.physical={uniforms:Ln([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};var Ec={r:0,b:0,g:0},bx=new Pe,Hd=new pe;Hd.set(-1,0,0,0,1,0,0,0,1);function Sx(i,t,e,n,s,r){let a=new te(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let _=M.backgroundBlurriness>0;E=t.get(E,_)}return E}function m(M){let E=!1,_=f(M);_===null?g(a,o):_&&_.isColor&&(g(_,1),E=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,E){let _=f(E);_&&(_.isCubeTexture||_.mapping===Za)?(c===void 0&&(c=new we(new In(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:js(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bx.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hd),c.material.toneMapped=be.getTransfer(_.colorSpace)!==Ie,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new we(new ei(2,2),new ze({name:"BackgroundMaterial",uniforms:js(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=be.getTransfer(_.colorSpace)!==Ie,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,E){M.getRGB(Ec,Kh(i)),e.buffers.color.setClear(Ec.r,Ec.g,Ec.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:m,addToRenderList:y,dispose:p}}function wx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(W,B,Z,k,K){let j=!1,ot=d(W,k,Z,B);r!==ot&&(r=ot,c(r.object)),j=f(W,k,Z,K),j&&m(W,k,Z,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,_(W,B,Z,k),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(W){return i.bindVertexArray(W)}function h(W){return i.deleteVertexArray(W)}function d(W,B,Z,k){let K=k.wireframe===!0,j=n[B.id];j===void 0&&(j={},n[B.id]=j);let ot=W.isInstancedMesh===!0?W.id:0,lt=j[ot];lt===void 0&&(lt={},j[ot]=lt);let rt=lt[Z.id];rt===void 0&&(rt={},lt[Z.id]=rt);let ct=rt[K];return ct===void 0&&(ct=u(l()),rt[K]=ct),ct}function u(W){let B=[],Z=[],k=[];for(let K=0;K<e;K++)B[K]=0,Z[K]=0,k[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:k,object:W,attributes:{},index:null}}function f(W,B,Z,k){let K=r.attributes,j=B.attributes,ot=0,lt=Z.getAttributes();for(let rt in lt)if(lt[rt].location>=0){let vt=K[rt],yt=j[rt];if(yt===void 0&&(rt==="instanceMatrix"&&W.instanceMatrix&&(yt=W.instanceMatrix),rt==="instanceColor"&&W.instanceColor&&(yt=W.instanceColor)),vt===void 0||vt.attribute!==yt||yt&&vt.data!==yt.data)return!0;ot++}return r.attributesNum!==ot||r.index!==k}function m(W,B,Z,k){let K={},j=B.attributes,ot=0,lt=Z.getAttributes();for(let rt in lt)if(lt[rt].location>=0){let vt=j[rt];vt===void 0&&(rt==="instanceMatrix"&&W.instanceMatrix&&(vt=W.instanceMatrix),rt==="instanceColor"&&W.instanceColor&&(vt=W.instanceColor));let yt={};yt.attribute=vt,vt&&vt.data&&(yt.data=vt.data),K[rt]=yt,ot++}r.attributes=K,r.attributesNum=ot,r.index=k}function y(){let W=r.newAttributes;for(let B=0,Z=W.length;B<Z;B++)W[B]=0}function g(W){p(W,0)}function p(W,B){let Z=r.newAttributes,k=r.enabledAttributes,K=r.attributeDivisors;Z[W]=1,k[W]===0&&(i.enableVertexAttribArray(W),k[W]=1),K[W]!==B&&(i.vertexAttribDivisor(W,B),K[W]=B)}function M(){let W=r.newAttributes,B=r.enabledAttributes;for(let Z=0,k=B.length;Z<k;Z++)B[Z]!==W[Z]&&(i.disableVertexAttribArray(Z),B[Z]=0)}function E(W,B,Z,k,K,j,ot){ot===!0?i.vertexAttribIPointer(W,B,Z,K,j):i.vertexAttribPointer(W,B,Z,k,K,j)}function _(W,B,Z,k){y();let K=k.attributes,j=Z.getAttributes(),ot=B.defaultAttributeValues;for(let lt in j){let rt=j[lt];if(rt.location>=0){let ct=K[lt];if(ct===void 0&&(lt==="instanceMatrix"&&W.instanceMatrix&&(ct=W.instanceMatrix),lt==="instanceColor"&&W.instanceColor&&(ct=W.instanceColor)),ct!==void 0){let vt=ct.normalized,yt=ct.itemSize,dt=t.get(ct);if(dt===void 0)continue;let ce=dt.buffer,ie=dt.type,_e=dt.bytesPerElement,ht=ie===i.INT||ie===i.UNSIGNED_INT||ct.gpuType===kl;if(ct.isInterleavedBufferAttribute){let mt=ct.data,Nt=mt.stride,O=ct.offset;if(mt.isInstancedInterleavedBuffer){for(let ut=0;ut<rt.locationSize;ut++)p(rt.location+ut,mt.meshPerAttribute);W.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ut=0;ut<rt.locationSize;ut++)g(rt.location+ut);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let ut=0;ut<rt.locationSize;ut++)E(rt.location+ut,yt/rt.locationSize,ie,vt,Nt*_e,(O+yt/rt.locationSize*ut)*_e,ht)}else{if(ct.isInstancedBufferAttribute){for(let mt=0;mt<rt.locationSize;mt++)p(rt.location+mt,ct.meshPerAttribute);W.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let mt=0;mt<rt.locationSize;mt++)g(rt.location+mt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let mt=0;mt<rt.locationSize;mt++)E(rt.location+mt,yt/rt.locationSize,ie,vt,yt*_e,yt/rt.locationSize*mt*_e,ht)}}else if(ot!==void 0){let vt=ot[lt];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(rt.location,vt);break;case 3:i.vertexAttrib3fv(rt.location,vt);break;case 4:i.vertexAttrib4fv(rt.location,vt);break;default:i.vertexAttrib1fv(rt.location,vt)}}}}M()}function b(){A();for(let W in n){let B=n[W];for(let Z in B){let k=B[Z];for(let K in k){let j=k[K];for(let ot in j)h(j[ot].object),delete j[ot];delete k[K]}}delete n[W]}}function S(W){if(n[W.id]===void 0)return;let B=n[W.id];for(let Z in B){let k=B[Z];for(let K in k){let j=k[K];for(let ot in j)h(j[ot].object),delete j[ot];delete k[K]}}delete n[W.id]}function L(W){for(let B in n){let Z=n[B];for(let k in Z){let K=Z[k];if(K[W.id]===void 0)continue;let j=K[W.id];for(let ot in j)h(j[ot].object),delete j[ot];delete K[W.id]}}}function x(W){for(let B in n){let Z=n[B],k=W.isInstancedMesh===!0?W.id:0,K=Z[k];if(K!==void 0){for(let j in K){let ot=K[j];for(let lt in ot)h(ot[lt].object),delete ot[lt];delete K[j]}delete Z[k],Object.keys(Z).length===0&&delete n[B]}}}function A(){F(),a=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function Tx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ex(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==si&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let x=L===pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==kn&&L!==ii&&!x&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(se("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:_,maxSamples:b,samples:S}}function Ax(i){let t=this,e=null,n=0,s=!1,r=!1,a=new pi,o=new pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,E=M*4,_=p.clippingState||null;l.value=_,_=h(m,u,E,f);for(let b=0;b!==E;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=f+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,_=f;E!==y;++E,_+=4)a.copy(d[E]).applyMatrix4(M,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var Hr=4,Cx=6,Rx=20,Px=256,so=new vs,_d=new te,au=null,ou=0,lu=0,cu=!1,Ix=new U,Qs=new U,Ts=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ix}=r;au=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(au,ou,lu),this._renderer.xr.enabled=cu,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),au=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:pn,format:si,colorSpace:ma,depthBuffer:!1},s=yd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lx(r)),this._blurMaterial=Nx(r,t,e),this._ggxMaterial=Dx(r,t,e)}return s}_compileMaterial(t){let e=new we(new Le,t);this._renderer.compile(e,so)}_sceneToCubeUV(t,e,n,s,r){let l=new fn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(_d),d.toneMapping=_i,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new In,new vi({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,p=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(_d),p=!0);for(let E=0;E<6;E++){let _=E%3;_===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):_===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let b=this._cubeSize;kr(s,_*b,E>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===bs||t.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;kr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,so)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,y=this._sizeLods[n],g=3*y*(n>m-Hr?n-m+Hr:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,kr(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(o,so),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,kr(t,g,p,3*y,2*y),s.setRenderTarget(t),s.render(o,so)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Hr?s-this._lodMax+Hr:0),u=4*(this._cubeSize-h);kr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,so)}};function Lx(i){let t=[],e=[],n=i,s=i-Hr+1+Cx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,E=p>2?0:-1,_=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];m.set(_,f*u*p);for(let b=0;b<u;b++){let S=h[b*2]*2-1,L=h[b*2+1]*2-1;p===0?Qs.set(1,L,S):p===1?Qs.set(-S,1,-L):p===2?Qs.set(-S,L,1):p===3?Qs.set(-1,L,-S):p===4?Qs.set(-S,-1,L):Qs.set(S,L,-1),Qs.toArray(y,(p*u+b)*f)}}let g=new Le;g.setAttribute("position",new xe(m,f)),g.setAttribute("outputDirection",new xe(y,f)),e.push(new we(g,null)),n>Hr&&n--}return{lodMeshes:e,sizeLods:t}}function yd(i,t,e){let n=new tn(i,t,e);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dx(i,t,e){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Px,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Nx(i,t,e){return new ze({name:"SphericalGaussianBlur",defines:{SAMPLES:Rx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Md(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function bd(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cc=class extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Sa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new In(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:ni});r.uniforms.tEquirect.value=e;let a=new we(s,r),o=e.minFilter;return e.minFilter===yi&&(e.minFilter=En),new Dl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Ux(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ol||f===Bl)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let y=new Cc(m.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,m=f===Ol||f===Bl,y=f===bs||f===Ks;if(m||y){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Ts(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return m&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Ts(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Ol?u.mapping=bs:f===Bl&&(u.mapping=Ks),u}function l(u){let f=0,m=6;for(let y=0;y<m;y++)u[y]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Fx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Os("WebGLRenderer: "+n+" extension not supported."),s}}}function Ox(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,y=0;if(m===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let E=0,_=M.length;E<_;E+=3){let b=M[E+0],S=M[E+1],L=M[E+2];u.push(b,S,S,L,L,b)}}else{let M=m.array;y=m.version;for(let E=0,_=M.length/3-1;E<_;E+=3){let b=E+0,S=E+1,L=E+2;u.push(b,S,S,L,L,b)}}let g=new(m.count>=65535?ya:_a)(u,1);g.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Bx(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=u[g];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:le("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function kx(i,t,e){let n=new WeakMap,s=new He;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let A=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),y===!0&&(E=3);let _=o.attributes.position.count*E,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*b*4*d),L=new va(S,_,b,d);L.type=ii,L.needsUpdate=!0;let x=E*4;for(let F=0;F<d;F++){let W=g[F],B=p[F],Z=M[F],k=_*b*4*F;for(let K=0;K<W.count;K++){let j=K*x;f===!0&&(s.fromBufferAttribute(W,K),S[k+j+0]=s.x,S[k+j+1]=s.y,S[k+j+2]=s.z,S[k+j+3]=0),m===!0&&(s.fromBufferAttribute(B,K),S[k+j+4]=s.x,S[k+j+5]=s.y,S[k+j+6]=s.z,S[k+j+7]=0),y===!0&&(s.fromBufferAttribute(Z,K),S[k+j+8]=s.x,S[k+j+9]=s.y,S[k+j+10]=s.z,S[k+j+11]=Z.itemSize===4?s.w:1)}}u={count:d,texture:L,size:new Tt(_,b)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Hx(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Vx={[Ga]:"LINEAR_TONE_MAPPING",[Wa]:"REINHARD_TONE_MAPPING",[Xa]:"CINEON_TONE_MAPPING",[$a]:"ACES_FILMIC_TONE_MAPPING",[Ya]:"AGX_TONE_MAPPING",[Js]:"NEUTRAL_TONE_MAPPING",[qa]:"CUSTOM_TONE_MAPPING"};function Gx(i,t,e,n,s,r){let a=new tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Le;c.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new me([0,2,0,0,2,0],2));let h=new Dr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new we(c,h),u=new vs(-1,1,1,-1,0,1),f=null,m=null,y=!1,g,p=null,M=[],E=!1;this.setSize=function(_,b){a.setSize(_,b),o!==null&&o.setSize(_,b),l!==null&&l.setSize(_,b);for(let S=0;S<M.length;S++){let L=M[S];L.setSize&&L.setSize(_,b)}},this.setEffects=function(_){M=_,E=M.length>0&&M[0].isRenderPass===!0;let b=a.width,S=a.height;M.length>0&&o===null&&(o=new tn(b,S,{type:pn,depthBuffer:!1,stencilBuffer:!1}),l=new tn(b,S,{type:pn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<M.length;L++){let x=M[L];x.setSize&&x.setSize(b,S)}},this.begin=function(_,b){if(y||_.toneMapping===_i&&M.length===0)return!1;if(p=b,b!==null){let S=b.width,L=b.height;(a.width!==S||a.height!==L)&&this.setSize(S,L)}return E===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=_i,!0},this.hasRenderPass=function(){return E},this.end=function(_,b){_.toneMapping=g,y=!0;let S=a,L=o;for(let x=0;x<M.length;x++){let A=M[x];A.enabled!==!1&&(A.render(_,L,S,b),A.needsSwap!==!1&&(S=L,L=L===o?l:o))}if(f!==_.outputColorSpace||m!==_.toneMapping){f=_.outputColorSpace,m=_.toneMapping,h.defines={},be.getTransfer(f)===Ie&&(h.defines.SRGB_TRANSFER="");let x=Vx[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(p),_.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Vd=new Un,fu=new ps(1,1),Gd=new va,Wd=new hl,Xd=new Sa,Sd=[],wd=[],Td=new Float32Array(16),Ed=new Float32Array(9),Ad=new Float32Array(4);function Gr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Sd[s];if(r===void 0&&(r=new Float32Array(s),Sd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function mn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function gn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ic(i,t){let e=wd[t];e===void 0&&(e=new Int32Array(t),wd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2fv(this.addr,t),gn(e,t)}}function $x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(mn(e,t))return;i.uniform3fv(this.addr,t),gn(e,t)}}function qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4fv(this.addr,t),gn(e,t)}}function Yx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;Ad.set(n),i.uniformMatrix2fv(this.addr,!1,Ad),gn(e,n)}}function Zx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;Ed.set(n),i.uniformMatrix3fv(this.addr,!1,Ed),gn(e,n)}}function Jx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;Td.set(n),i.uniformMatrix4fv(this.addr,!1,Td),gn(e,n)}}function Kx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2iv(this.addr,t),gn(e,t)}}function Qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3iv(this.addr,t),gn(e,t)}}function tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4iv(this.addr,t),gn(e,t)}}function ev(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2uiv(this.addr,t),gn(e,t)}}function iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3uiv(this.addr,t),gn(e,t)}}function sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4uiv(this.addr,t),gn(e,t)}}function rv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fu.compareFunction=e.isReversedDepthBuffer()?Tc:wc,r=fu):r=Vd,e.setTexture2D(t||r,s)}function av(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wd,s)}function ov(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xd,s)}function lv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gd,s)}function cv(i){switch(i){case 5126:return Wx;case 35664:return Xx;case 35665:return $x;case 35666:return qx;case 35674:return Yx;case 35675:return Zx;case 35676:return Jx;case 5124:case 35670:return Kx;case 35667:case 35671:return jx;case 35668:case 35672:return Qx;case 35669:case 35673:return tv;case 5125:return ev;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return lv}}function hv(i,t){i.uniform1fv(this.addr,t)}function uv(i,t){let e=Gr(t,this.size,2);i.uniform2fv(this.addr,e)}function fv(i,t){let e=Gr(t,this.size,3);i.uniform3fv(this.addr,e)}function dv(i,t){let e=Gr(t,this.size,4);i.uniform4fv(this.addr,e)}function pv(i,t){let e=Gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mv(i,t){let e=Gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gv(i,t){let e=Gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xv(i,t){i.uniform1iv(this.addr,t)}function vv(i,t){i.uniform2iv(this.addr,t)}function _v(i,t){i.uniform3iv(this.addr,t)}function yv(i,t){i.uniform4iv(this.addr,t)}function Mv(i,t){i.uniform1uiv(this.addr,t)}function bv(i,t){i.uniform2uiv(this.addr,t)}function Sv(i,t){i.uniform3uiv(this.addr,t)}function wv(i,t){i.uniform4uiv(this.addr,t)}function Tv(i,t,e){let n=this.cache,s=t.length,r=Ic(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=fu:a=Vd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ev(i,t,e){let n=this.cache,s=t.length,r=Ic(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Wd,r[a])}function Av(i,t,e){let n=this.cache,s=t.length,r=Ic(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Xd,r[a])}function Cv(i,t,e){let n=this.cache,s=t.length,r=Ic(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Gd,r[a])}function Rv(i){switch(i){case 5126:return hv;case 35664:return uv;case 35665:return fv;case 35666:return dv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return xv;case 35667:case 35671:return vv;case 35668:case 35672:return _v;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return bv;case 36295:return Sv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Cv}}var du=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cv(e.type)}},pu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rv(e.type)}},mu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},hu=/(\w+)(\])?(\[|\.)?/g;function Cd(i,t){i.seq.push(t),i.map[t.id]=t}function Pv(i,t,e){let n=i.name,s=n.length;for(hu.lastIndex=0;;){let r=hu.exec(n),a=hu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cd(e,c===void 0?new du(o,i,t):new pu(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new mu(o),Cd(e,d)),e=d}}}var Vr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Pv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Rd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Iv=37297,Lv=0;function Dv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Pd=new pe;function Nv(i){be._getMatrix(Pd,be.workingColorSpace,i);let t=`mat3( ${Pd.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(i)){case ga:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Id(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Dv(i.getShaderSource(t),o)}else return r}function Uv(i,t){let e=Nv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Fv={[Ga]:"Linear",[Wa]:"Reinhard",[Xa]:"Cineon",[$a]:"ACESFilmic",[Ya]:"AgX",[Js]:"Neutral",[qa]:"Custom"};function Ov(i,t){let e=Fv[t];return e===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ac=new U;function Bv(){be.getLuminanceCoefficients(Ac);let i=Ac.x.toFixed(4),t=Ac.y.toFixed(4),e=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function kv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ao(i){return i!==""}function Ld(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function gu(i){return i.replace(Vv,Wv)}var Gv=new Map;function Wv(i,t){let e=ve[t];if(e===void 0){let n=Gv.get(t);if(n!==void 0)e=ve[n],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gu(e)}var Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(i){return i.replace(Xv,$v)}function $v(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ud(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var qv={[Ys]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function Yv(i){return qv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zv={[bs]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE_UV"};function Jv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Zv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Kv={[Ks]:"ENVMAP_MODE_REFRACTION"};function jv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Kv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qv={[Fl]:"ENVMAP_BLENDING_MULTIPLY",[Zf]:"ENVMAP_BLENDING_MIX",[Jf]:"ENVMAP_BLENDING_ADD"};function t_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qv[i.combine]||"ENVMAP_BLENDING_NONE"}function e_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function n_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Yv(e),c=Jv(e),h=jv(e),d=t_(e),u=e_(e),f=zv(e),m=kv(r),y=s.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ao).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ao).join(`
`),p.length>0&&(p+=`
`)):(g=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),p=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?ve.tonemapping_pars_fragment:"",e.toneMapping!==_i?Ov("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,Uv("linearToOutputTexel",e.outputColorSpace),Bv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ao).join(`
`)),a=gu(a),a=Ld(a,e),a=Dd(a,e),o=gu(o),o=Ld(o,e),o=Dd(o,e),a=Nd(a),o=Nd(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=M+g+a,_=M+p+o,b=Rd(s,s.VERTEX_SHADER,E),S=Rd(s,s.FRAGMENT_SHADER,_);s.attachShader(y,b),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(W){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(y)||"",Z=s.getShaderInfoLog(b)||"",k=s.getShaderInfoLog(S)||"",K=B.trim(),j=Z.trim(),ot=k.trim(),lt=!0,rt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(lt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,b,S);else{let ct=Id(s,b,"vertex"),vt=Id(s,S,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+K+`
`+ct+`
`+vt)}else K!==""?se("WebGLProgram: Program Info Log:",K):(j===""||ot==="")&&(rt=!1);rt&&(W.diagnostics={runnable:lt,programLog:K,vertexShader:{log:j,prefix:g},fragmentShader:{log:ot,prefix:p}})}s.deleteShader(b),s.deleteShader(S),x=new Vr(s,y),A=Hv(s,y)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(y,Iv)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=S,this}var i_=0,xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vu(t),e.set(t,n)),n}},vu=class{constructor(t){this.id=i_++,this.code=t,this.usedTimes=0}};function s_(i){return i===ws||i===eo||i===no}function r_(i,t,e,n,s,r){let a=new Tr,o=new xu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,A,F,W,B,Z){let k=W.fog,K=B.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?W.environment:null,ot=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,lt=t.get(x.envMap||j,ot),rt=lt&&lt.mapping===Za?lt.image.height:null,ct=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&se("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let vt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,yt=vt!==void 0?vt.length:0,dt=0;K.morphAttributes.position!==void 0&&(dt=1),K.morphAttributes.normal!==void 0&&(dt=2),K.morphAttributes.color!==void 0&&(dt=3);let ce,ie,_e,ht;if(ct){let Ae=Bi[ct];ce=Ae.vertexShader,ie=Ae.fragmentShader}else{ce=x.vertexShader,ie=x.fragmentShader;let Ae=o.getVertexShaderStage(x),ge=o.getFragmentShaderStage(x);o.update(x,Ae,ge),_e=Ae.id,ht=ge.id}let mt=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),O=B.isInstancedMesh===!0,ut=B.isBatchedMesh===!0,St=!!x.map,Et=!!x.matcap,Bt=!!lt,Pt=!!x.aoMap,Lt=!!x.lightMap,Ft=!!x.bumpMap&&x.wireframe===!1,jt=!!x.normalMap,ee=!!x.displacementMap,Me=!!x.emissiveMap,ne=!!x.metalnessMap,he=!!x.roughnessMap,H=x.anisotropy>0,ae=x.clearcoat>0,oe=x.dispersion>0,I=x.retroreflectivity>0,v=x.iridescence>0,Y=x.sheen>0,Q=x.transmission>0,T=H&&!!x.anisotropyMap,N=ae&&!!x.clearcoatMap,q=ae&&!!x.clearcoatNormalMap,D=ae&&!!x.clearcoatRoughnessMap,V=v&&!!x.iridescenceMap,st=v&&!!x.iridescenceThicknessMap,J=Y&&!!x.sheenColorMap,pt=Y&&!!x.sheenRoughnessMap,Mt=!!x.specularMap,At=!!x.specularColorMap,Vt=!!x.specularIntensityMap,Zt=Q&&!!x.transmissionMap,z=Q&&!!x.thicknessMap,_t=!!x.gradientMap,et=!!x.alphaMap,ft=x.alphaTest>0,bt=!!x.alphaHash,gt=!!x.extensions,Xt=_i;x.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Xt=i.toneMapping);let Wt={shaderID:ct,shaderType:x.type,shaderName:x.name,vertexShader:ce,fragmentShader:ie,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ut,batchingColor:ut&&B._colorsTexture!==null,instancing:O,instancingColor:O&&B.instanceColor!==null,instancingMorph:O&&B.morphTexture!==null,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:St,matcap:Et,envMap:Bt,envMapMode:Bt&&lt.mapping,envMapCubeUVHeight:rt,aoMap:Pt,lightMap:Lt,bumpMap:Ft,normalMap:jt,displacementMap:ee,emissiveMap:Me,normalMapObjectSpace:jt&&x.normalMapType===Qf,normalMapTangentSpace:jt&&x.normalMapType===io,packedNormalMap:jt&&x.normalMapType===io&&s_(x.normalMap.format),metalnessMap:ne,roughnessMap:he,anisotropy:H,anisotropyMap:T,clearcoat:ae,clearcoatMap:N,clearcoatNormalMap:q,clearcoatRoughnessMap:D,dispersion:oe,retroreflection:I,iridescence:v,iridescenceMap:V,iridescenceThicknessMap:st,sheen:Y,sheenColorMap:J,sheenRoughnessMap:pt,specularMap:Mt,specularColorMap:At,specularIntensityMap:Vt,transmission:Q,transmissionMap:Zt,thicknessMap:z,gradientMap:_t,opaque:x.transparent===!1&&x.blending===Fr&&x.alphaToCoverage===!1,alphaMap:et,alphaTest:ft,alphaHash:bt,combine:x.combine,mapUv:St&&m(x.map.channel),aoMapUv:Pt&&m(x.aoMap.channel),lightMapUv:Lt&&m(x.lightMap.channel),bumpMapUv:Ft&&m(x.bumpMap.channel),normalMapUv:jt&&m(x.normalMap.channel),displacementMapUv:ee&&m(x.displacementMap.channel),emissiveMapUv:Me&&m(x.emissiveMap.channel),metalnessMapUv:ne&&m(x.metalnessMap.channel),roughnessMapUv:he&&m(x.roughnessMap.channel),anisotropyMapUv:T&&m(x.anisotropyMap.channel),clearcoatMapUv:N&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:q&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:st&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:J&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:pt&&m(x.sheenRoughnessMap.channel),specularMapUv:Mt&&m(x.specularMap.channel),specularColorMapUv:At&&m(x.specularColorMap.channel),specularIntensityMapUv:Vt&&m(x.specularIntensityMap.channel),transmissionMapUv:Zt&&m(x.transmissionMap.channel),thicknessMapUv:z&&m(x.thicknessMap.channel),alphaMapUv:et&&m(x.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(jt||H),vertexNormals:!!K.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(St||et),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||K.attributes.normal===void 0&&jt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Nt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:dt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:St&&x.map.isVideoTexture===!0&&be.getTransfer(x.map.colorSpace)===Ie,decodeVideoTextureEmissive:Me&&x.emissiveMap.isVideoTexture===!0&&be.getTransfer(x.emissiveMap.colorSpace)===Ie,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Fi,flipSided:x.side===An,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:gt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&x.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function g(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let F in x.defines)A.push(F),A.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(p(A,x),M(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function M(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){let A=f[x.type],F;if(A){let W=Bi[A];F=ss.clone(W.uniforms)}else F=x.uniforms;return F}function _(x,A){let F=h.get(A);return F!==void 0?++F.usedTimes:(F=new n_(i,A,x,s),c.push(F),h.set(A,F)),F}function b(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function L(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:E,acquireProgram:_,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:L}}function a_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function o_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Fd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Od(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,y,g,p){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:p},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=m,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=g,M.group=p),t++,M}function l(u,f,m,y,g,p,M){M.reversedDepth===!0&&(g=-g);let E=o(u,f,m,y,g,p);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):e.push(E)}function c(u,f,m,y,g,p){let M=o(u,f,m,y,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||o_),n.length>1&&n.sort(f||Fd),s.length>1&&s.sort(f||Fd)}function d(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function l_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Od,i.set(n,[a])):s>=r.length?(a=new Od,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function c_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new te};break;case"SpotLight":e={position:new U,direction:new U,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function h_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var u_=0;function f_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function d_(i){let t=new c_,e=h_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new Pe,a=new Pe;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,M=0,E=0,_=0,b=0,S=0,L=0,x=0,A=0,F=0;c.sort(f_);for(let B=0,Z=c.length;B<Z;B++){let k=c[B],K=k.color,j=k.intensity,ot=k.distance,lt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ws?lt=k.shadow.map.texture:lt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=K.r*j,d+=K.g*j,u+=K.b*j;else if(k.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(k.sh.coefficients[rt],j);F++}else if(k.isSunLight){let rt=t.get(k);if(rt.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ct=k.shadow,vt=e.get(k);vt.shadowIntensity=ct.intensity,vt.shadowBias=ct.bias,vt.shadowNormalBias=ct.normalBias,vt.shadowRadius=ct.radius,vt.shadowMapSize.copy(ct.mapSize).multiply(ct.getFrameExtents()),n.sunShadow[m]=vt,n.sunShadowMap[m]=lt;let yt=ct.getViewportCount();for(let dt=0;dt<yt;dt++)n.sunShadowMatrix[y+dt]=ct.getMatrix(dt),n.sunShadowCascade[y+dt]=ct._cascadeData[dt];y+=yt,m++}n.sun[f]=rt,f++}else if(k.isDirectionalLight){let rt=t.get(k);if(rt.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ct=k.shadow,vt=e.get(k);vt.shadowIntensity=ct.intensity,vt.shadowBias=ct.bias,vt.shadowNormalBias=ct.normalBias,vt.shadowRadius=ct.radius,vt.shadowMapSize=ct.mapSize,n.directionalShadow[g]=vt,n.directionalShadowMap[g]=lt,n.directionalShadowMatrix[g]=k.shadow.matrix,b++}n.directional[g]=rt,g++}else if(k.isSpotLight){let rt=t.get(k);rt.position.setFromMatrixPosition(k.matrixWorld),rt.color.copy(K).multiplyScalar(j),rt.distance=ot,rt.coneCos=Math.cos(k.angle),rt.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),rt.decay=k.decay,n.spot[M]=rt;let ct=k.shadow;if(k.map&&(n.spotLightMap[x]=k.map,x++,ct.updateMatrices(k),k.castShadow&&A++),n.spotLightMatrix[M]=ct.matrix,k.castShadow){let vt=e.get(k);vt.shadowIntensity=ct.intensity,vt.shadowBias=ct.bias,vt.shadowNormalBias=ct.normalBias,vt.shadowRadius=ct.radius,vt.shadowMapSize=ct.mapSize,n.spotShadow[M]=vt,n.spotShadowMap[M]=lt,L++}M++}else if(k.isRectAreaLight){let rt=t.get(k);rt.color.copy(K).multiplyScalar(j),rt.halfWidth.set(k.width*.5,0,0),rt.halfHeight.set(0,k.height*.5,0),n.rectArea[E]=rt,E++}else if(k.isPointLight){let rt=t.get(k);if(rt.color.copy(k.color).multiplyScalar(k.intensity),rt.distance=k.distance,rt.decay=k.decay,k.castShadow){let ct=k.shadow,vt=e.get(k);vt.shadowIntensity=ct.intensity,vt.shadowBias=ct.bias,vt.shadowNormalBias=ct.normalBias,vt.shadowRadius=ct.radius,vt.shadowMapSize=ct.mapSize,vt.shadowCameraNear=ct.camera.near,vt.shadowCameraFar=ct.camera.far,n.pointShadow[p]=vt,n.pointShadowMap[p]=lt,n.pointShadowMatrix[p]=k.shadow.matrix,S++}n.point[p]=rt,p++}else if(k.isHemisphereLight){let rt=t.get(k);rt.skyColor.copy(k.color).multiplyScalar(j),rt.groundColor.copy(k.groundColor).multiplyScalar(j),n.hemi[_]=rt,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let W=n.hash;(W.sunLength!==f||W.directionalLength!==g||W.pointLength!==p||W.spotLength!==M||W.rectAreaLength!==E||W.hemiLength!==_||W.numSunShadows!==m||W.numDirectionalShadows!==b||W.numPointShadows!==S||W.numSpotShadows!==L||W.numSpotMaps!==x||W.numLightProbes!==F)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=E,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=F,W.sunLength=f,W.directionalLength=g,W.pointLength=p,W.spotLength=M,W.rectAreaLength=E,W.hemiLength=_,W.numSunShadows=m,W.numDirectionalShadows=b,W.numPointShadows=S,W.numSpotShadows=L,W.numSpotMaps=x,W.numLightProbes=F,n.version=u_++)}function l(c,h){let d=0,u=0,f=0,m=0,y=0,g=0,p=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let _=c[M];if(_.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(_.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let b=n.rectArea[y];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Bd(i){let t=new d_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function p_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Bd(i),t.set(s,[o])):r>=a.length?(o=new Bd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
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
}`,x_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],v_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],zd=new Pe,ro=new U,uu=new U;function __(i,t,e){let n=new Ar,s=new Tt,r=new Tt,a=new He,o=new Xs,l=new bl,c={},h=e.maxTextureSize,d={[ys]:An,[An]:ys,[Fi]:Fi},u=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Le;m.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new we(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let p=this.type;this.render=function(S,L,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Pf&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ys);let A=i.getRenderTarget(),F=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ni),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Z=p!==this.type;Z&&L.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(K=>K.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,K=S.length;k<K;k++){let j=S[k],ot=j.shadow;if(ot===void 0){se("WebGLShadowMap:",j,"has no shadow.");continue}if(ot.autoUpdate===!1&&ot.needsUpdate===!1)continue;s.copy(ot.mapSize);let lt=ot.getFrameExtents();s.multiply(lt),r.copy(ot.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,ot.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,ot.mapSize.y=r.y));let rt=i.state.buffers.depth.getReversed();if(ot.camera._reversedDepth=rt,ot.map===null||Z===!0){if(ot.map!==null&&(ot.map.depthTexture!==null&&(ot.map.depthTexture.dispose(),ot.map.depthTexture=null),ot.map.dispose()),this.type===Ur){if(j.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ot.map=new tn(s.x,s.y,{format:ws,type:pn,minFilter:En,magFilter:En,generateMipmaps:!1}),ot.map.texture.name=j.name+".shadowMap",ot.map.depthTexture=new ps(s.x,s.y,ii),ot.map.depthTexture.name=j.name+".shadowMapDepth",ot.map.depthTexture.format=Ii,ot.map.depthTexture.compareFunction=null,ot.map.depthTexture.minFilter=Mn,ot.map.depthTexture.magFilter=Mn}else j.isPointLight?(ot.map=new Cc(s.x),ot.map.depthTexture=new gl(s.x,Mi)):(ot.map=new tn(s.x,s.y),ot.map.depthTexture=new ps(s.x,s.y,Mi)),ot.map.depthTexture.name=j.name+".shadowMap",ot.map.depthTexture.format=Ii,this.type===Ys?(ot.map.depthTexture.compareFunction=rt?Tc:wc,ot.map.depthTexture.minFilter=En,ot.map.depthTexture.magFilter=En):(ot.map.depthTexture.compareFunction=null,ot.map.depthTexture.minFilter=Mn,ot.map.depthTexture.magFilter=Mn);ot.camera.updateProjectionMatrix()}ot.map.isWebGLCubeRenderTarget!==!0&&(ot.map.width!==s.x||ot.map.height!==s.y)&&ot.map.setSize(s.x,s.y);let ct=ot.map.isWebGLCubeRenderTarget?6:ot.getViewportCount();j.isPointLight!==!0&&ot.updateMatrices(j,x);for(let vt=0;vt<ct;vt++){let yt=ot.getCamera(vt);if(j.isPointLight){let dt=ot.camera,ce=ot.matrix,ie=j.distance||dt.far;ie!==dt.far&&(dt.far=ie,dt.updateProjectionMatrix()),ro.setFromMatrixPosition(j.matrixWorld),dt.position.copy(ro),uu.copy(dt.position),uu.add(x_[vt]),dt.up.copy(v_[vt]),dt.lookAt(uu),dt.updateMatrixWorld(),ce.makeTranslation(-ro.x,-ro.y,-ro.z),zd.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),ot._frustum.setFromProjectionMatrix(zd,dt.coordinateSystem,dt.reversedDepth)}if(ot.map.isWebGLCubeRenderTarget)i.setRenderTarget(ot.map,vt),i.clear();else{vt===0&&(i.setRenderTarget(ot.map),i.clear());let dt=ot.getViewport(vt);a.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),B.viewport(a)}n=ot.getFrustum(vt),_(L,x,yt,j,this.type)}ot.isPointLightShadow!==!0&&this.type===Ur&&M(ot,x),ot.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,F,W)};function M(S,L){let x=t.update(y);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new tn(s.x,s.y,{format:ws,type:pn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(L,null,x,u,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(L,null,x,f,y,null)}function E(S,L,x,A){let F=null,W=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(W!==void 0)F=W;else if(F=x.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let B=F.uuid,Z=L.uuid,k=c[B];k===void 0&&(k={},c[B]=k);let K=k[Z];K===void 0&&(K=F.clone(),k[Z]=K,L.addEventListener("dispose",b)),F=K}if(F.visible=L.visible,F.wireframe=L.wireframe,A===Ur?F.side=L.shadowSide!==null?L.shadowSide:L.side:F.side=L.shadowSide!==null?L.shadowSide:d[L.side],F.alphaMap=L.alphaMap,F.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,F.map=L.map,F.clipShadows=L.clipShadows,F.clippingPlanes=L.clippingPlanes,F.clipIntersection=L.clipIntersection,F.displacementMap=L.displacementMap,F.displacementScale=L.displacementScale,F.displacementBias=L.displacementBias,F.wireframeLinewidth=L.wireframeLinewidth,F.linewidth=L.linewidth,x.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let B=i.properties.get(F);B.light=x}return F}function _(S,L,x,A,F){if(S.visible===!1)return;if(S.layers.test(L.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&F===Ur)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let Z=t.update(S),k=S.material;if(Array.isArray(k)){let K=Z.groups;for(let j=0,ot=K.length;j<ot;j++){let lt=K[j],rt=k[lt.materialIndex];if(rt&&rt.visible){let ct=E(S,rt,A,F);S.onBeforeShadow(i,S,L,x,Z,ct,lt),i.renderBufferDirect(x,null,Z,ct,S,lt),S.onAfterShadow(i,S,L,x,Z,ct,lt)}}}else if(k.visible){let K=E(S,k,A,F);S.onBeforeShadow(i,S,L,x,Z,K,null),i.renderBufferDirect(x,null,Z,K,S,null),S.onAfterShadow(i,S,L,x,Z,K,null)}}let B=S.children;for(let Z=0,k=B.length;Z<k;Z++)_(B[Z],L,x,A,F)}function b(S){S.target.removeEventListener("dispose",b);for(let x in c){let A=c[x],F=S.target.uuid;F in A&&(A[F].dispose(),delete A[F])}}}function y_(i,t){function e(){let z=!1,_t=new He,et=null,ft=new He(0,0,0,0);return{setMask:function(bt){et!==bt&&!z&&(i.colorMask(bt,bt,bt,bt),et=bt)},setLocked:function(bt){z=bt},setClear:function(bt,gt,Xt,Wt,Ae){Ae===!0&&(bt*=Wt,gt*=Wt,Xt*=Wt),_t.set(bt,gt,Xt,Wt),ft.equals(_t)===!1&&(i.clearColor(bt,gt,Xt,Wt),ft.copy(_t))},reset:function(){z=!1,et=null,ft.set(-1,0,0,0)}}}function n(){let z=!1,_t=!1,et=null,ft=null,bt=null;return{setReversed:function(gt){if(_t!==gt){let Xt=t.get("EXT_clip_control");gt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),_t=gt;let Wt=bt;bt=null,this.setClear(Wt)}},getReversed:function(){return _t},setTest:function(gt){gt?mt(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(gt){et!==gt&&!z&&(i.depthMask(gt),et=gt)},setFunc:function(gt){if(_t&&(gt=ud[gt]),ft!==gt){switch(gt){case Ko:i.depthFunc(i.NEVER);break;case jo:i.depthFunc(i.ALWAYS);break;case Qo:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case tl:i.depthFunc(i.EQUAL);break;case el:i.depthFunc(i.GEQUAL);break;case nl:i.depthFunc(i.GREATER);break;case il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=gt}},setLocked:function(gt){z=gt},setClear:function(gt){bt!==gt&&(bt=gt,_t&&(gt=1-gt),i.clearDepth(gt))},reset:function(){z=!1,et=null,ft=null,bt=null,_t=!1}}}function s(){let z=!1,_t=null,et=null,ft=null,bt=null,gt=null,Xt=null,Wt=null,Ae=null;return{setTest:function(ge){z||(ge?mt(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(ge){_t!==ge&&!z&&(i.stencilMask(ge),_t=ge)},setFunc:function(ge,Ke,rn){(et!==ge||ft!==Ke||bt!==rn)&&(i.stencilFunc(ge,Ke,rn),et=ge,ft=Ke,bt=rn)},setOp:function(ge,Ke,rn){(gt!==ge||Xt!==Ke||Wt!==rn)&&(i.stencilOp(ge,Ke,rn),gt=ge,Xt=Ke,Wt=rn)},setLocked:function(ge){z=ge},setClear:function(ge){Ae!==ge&&(i.clearStencil(ge),Ae=ge)},reset:function(){z=!1,_t=null,et=null,ft=null,bt=null,gt=null,Xt=null,Wt=null,Ae=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],y=null,g=!1,p=null,M=null,E=null,_=null,b=null,S=null,L=null,x=new te(0,0,0),A=0,F=!1,W=null,B=null,Z=null,k=null,K=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ot=!1,lt=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(rt)[1]),ot=lt>=1):rt.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),ot=lt>=2);let ct=null,vt={},yt=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),ce=new He().fromArray(yt),ie=new He().fromArray(dt);function _e(z,_t,et,ft){let bt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(z,gt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<et;Xt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(_t+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return gt}let ht={};ht[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),mt(i.DEPTH_TEST),a.setFunc(Mr),Ft(!1),jt(Fh),mt(i.CULL_FACE),Pt(ni);function mt(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Nt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function O(z,_t){return u[z]!==_t?(i.bindFramebuffer(z,_t),u[z]=_t,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function ut(z,_t){let et=m,ft=!1;if(z){et=f.get(_t),et===void 0&&(et=[],f.set(_t,et));let bt=z.textures;if(et.length!==bt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Xt=bt.length;gt<Xt;gt++)et[gt]=i.COLOR_ATTACHMENT0+gt;et.length=bt.length,ft=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,ft=!0);ft&&i.drawBuffers(et)}function St(z){return y!==z?(i.useProgram(z),y=z,!0):!1}let Et={[Zs]:i.FUNC_ADD,[Lf]:i.FUNC_SUBTRACT,[Df]:i.FUNC_REVERSE_SUBTRACT};Et[Nf]=i.MIN,Et[Uf]=i.MAX;let Bt={[Ff]:i.ZERO,[Of]:i.ONE,[Bf]:i.SRC_COLOR,[zh]:i.SRC_ALPHA,[Wf]:i.SRC_ALPHA_SATURATE,[Vf]:i.DST_COLOR,[kf]:i.DST_ALPHA,[zf]:i.ONE_MINUS_SRC_COLOR,[kh]:i.ONE_MINUS_SRC_ALPHA,[Gf]:i.ONE_MINUS_DST_COLOR,[Hf]:i.ONE_MINUS_DST_ALPHA,[Xf]:i.CONSTANT_COLOR,[$f]:i.ONE_MINUS_CONSTANT_COLOR,[qf]:i.CONSTANT_ALPHA,[Yf]:i.ONE_MINUS_CONSTANT_ALPHA};function Pt(z,_t,et,ft,bt,gt,Xt,Wt,Ae,ge){if(z===ni){g===!0&&(Nt(i.BLEND),g=!1);return}if(g===!1&&(mt(i.BLEND),g=!0),z!==If){if(z!==p||ge!==F){if((M!==Zs||b!==Zs)&&(i.blendEquation(i.FUNC_ADD),M=Zs,b=Zs),ge)switch(z){case Fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFunc(i.ONE,i.ONE);break;case Oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",z);break}else switch(z){case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oh:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",z);break}E=null,_=null,S=null,L=null,x.set(0,0,0),A=0,p=z,F=ge}return}bt=bt||_t,gt=gt||et,Xt=Xt||ft,(_t!==M||bt!==b)&&(i.blendEquationSeparate(Et[_t],Et[bt]),M=_t,b=bt),(et!==E||ft!==_||gt!==S||Xt!==L)&&(i.blendFuncSeparate(Bt[et],Bt[ft],Bt[gt],Bt[Xt]),E=et,_=ft,S=gt,L=Xt),(Wt.equals(x)===!1||Ae!==A)&&(i.blendColor(Wt.r,Wt.g,Wt.b,Ae),x.copy(Wt),A=Ae),p=z,F=!1}function Lt(z,_t){z.side===Fi?Nt(i.CULL_FACE):mt(i.CULL_FACE);let et=z.side===An;_t&&(et=!et),Ft(et),z.blending===Fr&&z.transparent===!1?Pt(ni):Pt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let ft=z.stencilWrite;o.setTest(ft),ft&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Me(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(z){W!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),W=z)}function jt(z){z!==Cf?(mt(i.CULL_FACE),z!==B&&(z===Fh?i.cullFace(i.BACK):z===Rf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),B=z}function ee(z){z!==Z&&(ot&&i.lineWidth(z),Z=z)}function Me(z,_t,et){z?(mt(i.POLYGON_OFFSET_FILL),(k!==_t||K!==et)&&(k=_t,K=et,a.getReversed()&&(_t=-_t),i.polygonOffset(_t,et))):Nt(i.POLYGON_OFFSET_FILL)}function ne(z){z?mt(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function he(z){z===void 0&&(z=i.TEXTURE0+j-1),ct!==z&&(i.activeTexture(z),ct=z)}function H(z,_t,et){et===void 0&&(ct===null?et=i.TEXTURE0+j-1:et=ct);let ft=vt[et];ft===void 0&&(ft={type:void 0,texture:void 0},vt[et]=ft),(ft.type!==z||ft.texture!==_t)&&(ct!==et&&(i.activeTexture(et),ct=et),i.bindTexture(z,_t||ht[z]),ft.type=z,ft.texture=_t)}function ae(){let z=vt[ct];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function oe(){try{i.compressedTexImage2D(...arguments)}catch(z){le("WebGLState:",z)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(z){le("WebGLState:",z)}}function v(){try{i.texSubImage2D(...arguments)}catch(z){le("WebGLState:",z)}}function Y(){try{i.texSubImage3D(...arguments)}catch(z){le("WebGLState:",z)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(z){le("WebGLState:",z)}}function T(){try{i.compressedTexSubImage3D(...arguments)}catch(z){le("WebGLState:",z)}}function N(){try{i.texStorage2D(...arguments)}catch(z){le("WebGLState:",z)}}function q(){try{i.texStorage3D(...arguments)}catch(z){le("WebGLState:",z)}}function D(){try{i.texImage2D(...arguments)}catch(z){le("WebGLState:",z)}}function V(){try{i.texImage3D(...arguments)}catch(z){le("WebGLState:",z)}}function st(z){return d[z]!==void 0?d[z]:i.getParameter(z)}function J(z,_t){d[z]!==_t&&(i.pixelStorei(z,_t),d[z]=_t)}function pt(z){ce.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ce.copy(z))}function Mt(z){ie.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ie.copy(z))}function At(z,_t){let et=c.get(_t);et===void 0&&(et=new WeakMap,c.set(_t,et));let ft=et.get(z);ft===void 0&&(ft=i.getUniformBlockIndex(_t,z.name),et.set(z,ft))}function Vt(z,_t){let ft=c.get(_t).get(z);l.get(_t)!==ft&&(i.uniformBlockBinding(_t,ft,z.__bindingPointIndex),l.set(_t,ft))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ct=null,vt={},u={},f=new WeakMap,m=[],y=null,g=!1,p=null,M=null,E=null,_=null,b=null,S=null,L=null,x=new te(0,0,0),A=0,F=!1,W=null,B=null,Z=null,k=null,K=null,ce.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:mt,disable:Nt,bindFramebuffer:O,drawBuffers:ut,useProgram:St,setBlending:Pt,setMaterial:Lt,setFlipSided:Ft,setCullFace:jt,setLineWidth:ee,setPolygonOffset:Me,setScissorTest:ne,activeTexture:he,bindTexture:H,unbindTexture:ae,compressedTexImage2D:oe,compressedTexImage3D:I,texImage2D:D,texImage3D:V,pixelStorei:J,getParameter:st,updateUBOMapping:At,uniformBlockBinding:Vt,texStorage2D:N,texStorage3D:q,texSubImage2D:v,texSubImage3D:Y,compressedTexSubImage2D:Q,compressedTexSubImage3D:T,scissor:pt,viewport:Mt,reset:Zt}}function M_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,v){return m?new OffscreenCanvas(I,v):xa("canvas")}function g(I,v,Y){let Q=1,T=oe(I);if((T.width>Y||T.height>Y)&&(Q=Y/Math.max(T.width,T.height)),Q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let N=Math.floor(Q*T.width),q=Math.floor(Q*T.height);u===void 0&&(u=y(N,q));let D=v?y(N,q):u;return D.width=N,D.height=q,D.getContext("2d").drawImage(I,0,0,N,q),se("WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+N+"x"+q+")."),D}else return"data"in I&&se("WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),I;return I}function p(I){return I.generateMipmaps}function M(I){i.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,v,Y,Q,T,N=!1){if(I!==null){if(i[I]!==void 0)return i[I];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let q;Q&&(q=t.get("EXT_texture_norm16"),q||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let D=v;if(v===i.RED&&(Y===i.FLOAT&&(D=i.R32F),Y===i.HALF_FLOAT&&(D=i.R16F),Y===i.UNSIGNED_BYTE&&(D=i.R8),Y===i.UNSIGNED_SHORT&&q&&(D=q.R16_EXT),Y===i.SHORT&&q&&(D=q.R16_SNORM_EXT)),v===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(D=i.R8UI),Y===i.UNSIGNED_SHORT&&(D=i.R16UI),Y===i.UNSIGNED_INT&&(D=i.R32UI),Y===i.BYTE&&(D=i.R8I),Y===i.SHORT&&(D=i.R16I),Y===i.INT&&(D=i.R32I)),v===i.RG&&(Y===i.FLOAT&&(D=i.RG32F),Y===i.HALF_FLOAT&&(D=i.RG16F),Y===i.UNSIGNED_BYTE&&(D=i.RG8),Y===i.UNSIGNED_SHORT&&q&&(D=q.RG16_EXT),Y===i.SHORT&&q&&(D=q.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(D=i.RG8UI),Y===i.UNSIGNED_SHORT&&(D=i.RG16UI),Y===i.UNSIGNED_INT&&(D=i.RG32UI),Y===i.BYTE&&(D=i.RG8I),Y===i.SHORT&&(D=i.RG16I),Y===i.INT&&(D=i.RG32I)),v===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(D=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(D=i.RGB16UI),Y===i.UNSIGNED_INT&&(D=i.RGB32UI),Y===i.BYTE&&(D=i.RGB8I),Y===i.SHORT&&(D=i.RGB16I),Y===i.INT&&(D=i.RGB32I)),v===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(D=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(D=i.RGBA16UI),Y===i.UNSIGNED_INT&&(D=i.RGBA32UI),Y===i.BYTE&&(D=i.RGBA8I),Y===i.SHORT&&(D=i.RGBA16I),Y===i.INT&&(D=i.RGBA32I)),v===i.RGB&&(Y===i.UNSIGNED_SHORT&&q&&(D=q.RGB16_EXT),Y===i.SHORT&&q&&(D=q.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(D=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(D=i.R11F_G11F_B10F)),v===i.RGBA){let V=N?ga:be.getTransfer(T);Y===i.FLOAT&&(D=i.RGBA32F),Y===i.HALF_FLOAT&&(D=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(D=V===Ie?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&q&&(D=q.RGBA16_EXT),Y===i.SHORT&&q&&(D=q.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(D=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(D=i.RGB5_A1)}return(D===i.R16F||D===i.R32F||D===i.RG16F||D===i.RG32F||D===i.RGBA16F||D===i.RGBA32F)&&t.get("EXT_color_buffer_float"),D}function b(I,v){let Y;return I?v===null||v===Mi||v===Br?Y=i.DEPTH24_STENCIL8:v===ii?Y=i.DEPTH32F_STENCIL8:v===Or&&(Y=i.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mi||v===Br?Y=i.DEPTH_COMPONENT24:v===ii?Y=i.DEPTH_COMPONENT32F:v===Or&&(Y=i.DEPTH_COMPONENT16),Y}function S(I,v){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Mn&&I.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?v.mipmaps.length:1}function L(I){let v=I.target;v.removeEventListener("dispose",L),A(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(I){let v=I.target;v.removeEventListener("dispose",x),W(v)}function A(I){let v=n.get(I);if(v.__webglInit===void 0)return;let Y=I.source,Q=f.get(Y);if(Q){let T=Q[v.__cacheKey];T.usedTimes--,T.usedTimes===0&&F(I),Object.keys(Q).length===0&&f.delete(Y)}n.remove(I)}function F(I){let v=n.get(I);i.deleteTexture(v.__webglTexture);let Y=I.source,Q=f.get(Y);delete Q[v.__cacheKey],a.memory.textures--}function W(I){let v=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let T=0;T<v.__webglFramebuffer[Q].length;T++)i.deleteFramebuffer(v.__webglFramebuffer[Q][T]);else i.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[Q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Y=I.textures;for(let Q=0,T=Y.length;Q<T;Q++){let N=n.get(Y[Q]);N.__webglTexture&&(i.deleteTexture(N.__webglTexture),a.memory.textures--),n.remove(Y[Q])}n.remove(I)}let B=0;function Z(){B=0}function k(){return B}function K(I){B=I}function j(){let I=B;return I>=s.maxTextures&&se("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,I}function ot(I){let v=[];return v.push(I.wrapS),v.push(I.wrapT),v.push(I.wrapR||0),v.push(I.magFilter),v.push(I.minFilter),v.push(I.anisotropy),v.push(I.internalFormat),v.push(I.format),v.push(I.type),v.push(I.generateMipmaps),v.push(I.premultiplyAlpha),v.push(I.flipY),v.push(I.unpackAlignment),v.push(I.colorSpace),v.join()}function lt(I,v){let Y=n.get(I);if(I.isVideoTexture&&H(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){let Q=I.image;if(Q===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(Y,I,v);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+v)}function rt(I,v){let Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){Nt(Y,I,v);return}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+v)}function ct(I,v){let Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){Nt(Y,I,v);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+v)}function vt(I,v){let Y=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Y.__version!==I.version){O(Y,I,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+v)}let yt={[sl]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[rl]:i.MIRRORED_REPEAT},dt={[Mn]:i.NEAREST,[Kf]:i.NEAREST_MIPMAP_NEAREST,[Ja]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[zl]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},ce={[ed]:i.NEVER,[ad]:i.ALWAYS,[nd]:i.LESS,[wc]:i.LEQUAL,[id]:i.EQUAL,[Tc]:i.GEQUAL,[sd]:i.GREATER,[rd]:i.NOTEQUAL};function ie(I,v){if(v.type===ii&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===En||v.magFilter===zl||v.magFilter===Ja||v.magFilter===yi||v.minFilter===En||v.minFilter===zl||v.minFilter===Ja||v.minFilter===yi)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,yt[v.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,yt[v.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,yt[v.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,dt[v.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,dt[v.minFilter]),v.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ce[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Mn||v.minFilter!==Ja&&v.minFilter!==yi||v.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function _e(I,v){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,v.addEventListener("dispose",L));let Q=v.source,T=f.get(Q);T===void 0&&(T={},f.set(Q,T));let N=ot(v);if(N!==I.__cacheKey){T[N]===void 0&&(T[N]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),T[N].usedTimes++;let q=T[I.__cacheKey];q!==void 0&&(T[I.__cacheKey].usedTimes--,q.usedTimes===0&&F(v)),I.__cacheKey=N,I.__webglTexture=T[N].texture}return Y}function ht(I,v,Y){return Math.floor(Math.floor(I/Y)/v)}function mt(I,v,Y,Q){let N=I.updateRanges;if(N.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,Y,Q,v.data);else{N.sort((J,pt)=>J.start-pt.start);let q=0;for(let J=1;J<N.length;J++){let pt=N[q],Mt=N[J],At=pt.start+pt.count,Vt=ht(Mt.start,v.width,4),Zt=ht(pt.start,v.width,4);Mt.start<=At+1&&Vt===Zt&&ht(Mt.start+Mt.count-1,v.width,4)===Vt?pt.count=Math.max(pt.count,Mt.start+Mt.count-pt.start):(++q,N[q]=Mt)}N.length=q+1;let D=e.getParameter(i.UNPACK_ROW_LENGTH),V=e.getParameter(i.UNPACK_SKIP_PIXELS),st=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let J=0,pt=N.length;J<pt;J++){let Mt=N[J],At=Math.floor(Mt.start/4),Vt=Math.ceil(Mt.count/4),Zt=At%v.width,z=Math.floor(At/v.width),_t=Vt,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Zt,z,_t,et,Y,Q,v.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,D),e.pixelStorei(i.UNPACK_SKIP_PIXELS,V),e.pixelStorei(i.UNPACK_SKIP_ROWS,st)}}function Nt(I,v,Y){let Q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=i.TEXTURE_3D);let T=_e(I,v),N=v.source;e.bindTexture(Q,I.__webglTexture,i.TEXTURE0+Y);let q=n.get(N);if(N.version!==q.__version||T===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let et=be.getPrimaries(be.workingColorSpace),ft=v.colorSpace===is?null:be.getPrimaries(v.colorSpace),bt=v.colorSpace===is||et===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let V=g(v.image,!1,s.maxTextureSize);V=ae(v,V);let st=r.convert(v.format,v.colorSpace),J=r.convert(v.type),pt=_(v.internalFormat,st,J,v.normalized,v.colorSpace,v.isVideoTexture);ie(Q,v);let Mt,At=v.mipmaps,Vt=v.isVideoTexture!==!0,Zt=q.__version===void 0||T===!0,z=N.dataReady,_t=S(v,V);if(v.isDepthTexture)pt=b(v.format===Ss,v.type),Zt&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,pt,V.width,V.height):e.texImage2D(i.TEXTURE_2D,0,pt,V.width,V.height,0,st,J,null));else if(v.isDataTexture)if(At.length>0){Vt&&Zt&&e.texStorage2D(i.TEXTURE_2D,_t,pt,At[0].width,At[0].height);for(let et=0,ft=At.length;et<ft;et++)Mt=At[et],Vt?z&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Mt.width,Mt.height,st,J,Mt.data):e.texImage2D(i.TEXTURE_2D,et,pt,Mt.width,Mt.height,0,st,J,Mt.data);v.generateMipmaps=!1}else Vt?(Zt&&e.texStorage2D(i.TEXTURE_2D,_t,pt,V.width,V.height),z&&mt(v,V,st,J)):e.texImage2D(i.TEXTURE_2D,0,pt,V.width,V.height,0,st,J,V.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Vt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,pt,At[0].width,At[0].height,V.depth);for(let et=0,ft=At.length;et<ft;et++)if(Mt=At[et],v.format!==si)if(st!==null)if(Vt){if(z)if(v.layerUpdates.size>0){let bt=tu(Mt.width,Mt.height,v.format,v.type);for(let gt of v.layerUpdates){let Xt=Mt.data.subarray(gt*bt/Mt.data.BYTES_PER_ELEMENT,(gt+1)*bt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,gt,Mt.width,Mt.height,1,st,Xt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Mt.width,Mt.height,V.depth,st,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,pt,Mt.width,Mt.height,V.depth,0,Mt.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Mt.width,Mt.height,V.depth,st,J,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,pt,Mt.width,Mt.height,V.depth,0,st,J,Mt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Vt&&Zt&&e.texStorage2D(i.TEXTURE_2D,_t,pt,At[0].width,At[0].height);for(let et=0,ft=At.length;et<ft;et++)Mt=At[et],v.format!==si?st!==null?Vt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,Mt.width,Mt.height,st,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,pt,Mt.width,Mt.height,0,Mt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?z&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Mt.width,Mt.height,st,J,Mt.data):e.texImage2D(i.TEXTURE_2D,et,pt,Mt.width,Mt.height,0,st,J,Mt.data)}else if(v.isDataArrayTexture)if(Vt){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,pt,V.width,V.height,V.depth),z)if(v.layerUpdates.size>0){let et=tu(V.width,V.height,v.format,v.type);for(let ft of v.layerUpdates){let bt=V.data.subarray(ft*et/V.data.BYTES_PER_ELEMENT,(ft+1)*et/V.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,V.width,V.height,1,st,J,bt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,st,J,V.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,V.width,V.height,V.depth,0,st,J,V.data);else if(v.isData3DTexture)Vt?(Zt&&e.texStorage3D(i.TEXTURE_3D,_t,pt,V.width,V.height,V.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,st,J,V.data)):e.texImage3D(i.TEXTURE_3D,0,pt,V.width,V.height,V.depth,0,st,J,V.data);else if(v.isFramebufferTexture){if(Zt)if(Vt)e.texStorage2D(i.TEXTURE_2D,_t,pt,V.width,V.height);else{let et=V.width,ft=V.height;for(let bt=0;bt<_t;bt++)e.texImage2D(i.TEXTURE_2D,bt,pt,et,ft,0,st,J,null),et>>=1,ft>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),V.parentNode!==et){et.appendChild(V),d.add(v),et.onpaint=ft=>{let bt=ft.changedElements;for(let gt of d)bt.includes(gt.image)&&(gt.needsUpdate=!0)},et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,V);else{let bt=i.RGBA,gt=i.RGBA,Xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,bt,gt,Xt,V)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(At.length>0){if(Vt&&Zt){let et=oe(At[0]);e.texStorage2D(i.TEXTURE_2D,_t,pt,et.width,et.height)}for(let et=0,ft=At.length;et<ft;et++)Mt=At[et],Vt?z&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,st,J,Mt):e.texImage2D(i.TEXTURE_2D,et,pt,st,J,Mt);v.generateMipmaps=!1}else if(Vt){if(Zt){let et=oe(V);e.texStorage2D(i.TEXTURE_2D,_t,pt,et.width,et.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st,J,V)}else e.texImage2D(i.TEXTURE_2D,0,pt,st,J,V);p(v)&&M(Q),q.__version=N.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function O(I,v,Y){if(v.image.length!==6)return;let Q=_e(I,v),T=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Y);let N=n.get(T);if(T.version!==N.__version||Q===!0){e.activeTexture(i.TEXTURE0+Y);let q=be.getPrimaries(be.workingColorSpace),D=v.colorSpace===is?null:be.getPrimaries(v.colorSpace),V=v.colorSpace===is||q===D?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);let st=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let gt=0;gt<6;gt++)!st&&!J?pt[gt]=g(v.image[gt],!0,s.maxCubemapSize):pt[gt]=J?v.image[gt].image:v.image[gt],pt[gt]=ae(v,pt[gt]);let Mt=pt[0],At=r.convert(v.format,v.colorSpace),Vt=r.convert(v.type),Zt=_(v.internalFormat,At,Vt,v.normalized,v.colorSpace),z=v.isVideoTexture!==!0,_t=N.__version===void 0||Q===!0,et=T.dataReady,ft=S(v,Mt);ie(i.TEXTURE_CUBE_MAP,v);let bt;if(st){z&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Zt,Mt.width,Mt.height);for(let gt=0;gt<6;gt++){bt=pt[gt].mipmaps;for(let Xt=0;Xt<bt.length;Xt++){let Wt=bt[Xt];v.format!==si?At!==null?z?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,0,0,Wt.width,Wt.height,At,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,Zt,Wt.width,Wt.height,0,Wt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,0,0,Wt.width,Wt.height,At,Vt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,Zt,Wt.width,Wt.height,0,At,Vt,Wt.data)}}}else{if(bt=v.mipmaps,z&&_t){bt.length>0&&ft++;let gt=oe(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Zt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(J){z?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,pt[gt].width,pt[gt].height,At,Vt,pt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Zt,pt[gt].width,pt[gt].height,0,At,Vt,pt[gt].data);for(let Xt=0;Xt<bt.length;Xt++){let Ae=bt[Xt].image[gt].image;z?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,0,0,Ae.width,Ae.height,At,Vt,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,Zt,Ae.width,Ae.height,0,At,Vt,Ae.data)}}else{z?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,At,Vt,pt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Zt,At,Vt,pt[gt]);for(let Xt=0;Xt<bt.length;Xt++){let Wt=bt[Xt];z?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,0,0,At,Vt,Wt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,Zt,At,Vt,Wt.image[gt])}}}p(v)&&M(i.TEXTURE_CUBE_MAP),N.__version=T.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function ut(I,v,Y,Q,T,N){let q=r.convert(Y.format,Y.colorSpace),D=r.convert(Y.type),V=_(Y.internalFormat,q,D,Y.normalized,Y.colorSpace),st=n.get(v),J=n.get(Y);if(J.__renderTarget=v,!st.__hasExternalTextures){let pt=Math.max(1,v.width>>N),Mt=Math.max(1,v.height>>N);T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?e.texImage3D(T,N,V,pt,Mt,v.depth,0,q,D,null):e.texImage2D(T,N,V,pt,Mt,0,q,D,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),he(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,T,J.__webglTexture,0,ne(v)):(T===i.TEXTURE_2D||T>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&T<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,T,J.__webglTexture,N),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(I,v,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,I),v.depthBuffer){let Q=v.depthTexture,T=Q&&Q.isDepthTexture?Q.type:null,N=b(v.stencilBuffer,T),q=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne(v),N,v.width,v.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne(v),N,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,N,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,I)}else{let Q=v.textures;for(let T=0;T<Q.length;T++){let N=Q[T],q=r.convert(N.format,N.colorSpace),D=r.convert(N.type),V=_(N.internalFormat,q,D,N.normalized,N.colorSpace);he(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne(v),V,v.width,v.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne(v),V,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,V,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(I,v,Y){let Q=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let T=n.get(v.depthTexture);if(T.__renderTarget=v,(!T.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q){if(T.__webglInit===void 0&&(T.__webglInit=!0,v.depthTexture.addEventListener("dispose",L)),T.__webglTexture===void 0){T.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture),ie(i.TEXTURE_CUBE_MAP,v.depthTexture);let st=r.convert(v.depthTexture.format),J=r.convert(v.depthTexture.type),pt;v.depthTexture.format===Ii?pt=i.DEPTH_COMPONENT24:v.depthTexture.format===Ss&&(pt=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,pt,v.width,v.height,0,st,J,null)}}else lt(v.depthTexture,0);let N=T.__webglTexture,q=ne(v),D=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,V=v.depthTexture.format===Ss?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ii)he(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,D,N,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,V,D,N,0);else if(v.depthTexture.format===Ss)he(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,D,N,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,V,D,N,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(I){let v=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==I.depthTexture){let Q=I.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Q){let T=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Q.removeEventListener("dispose",T)};Q.addEventListener("dispose",T),v.__depthDisposeCallback=T}v.__boundDepthTexture=Q}if(I.depthTexture&&!v.__autoAllocateDepthBuffer)if(Y)for(let Q=0;Q<6;Q++)Et(v.__webglFramebuffer[Q],I,Q);else{let Q=I.texture.mipmaps;Q&&Q.length>0?Et(v.__webglFramebuffer[0],I,0):Et(v.__webglFramebuffer,I,0)}else if(Y){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]===void 0)v.__webglDepthbuffer[Q]=i.createRenderbuffer(),St(v.__webglDepthbuffer[Q],I,!1);else{let T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=v.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,T,i.RENDERBUFFER,N)}}else{let Q=I.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),St(v.__webglDepthbuffer,I,!1);else{let T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,T,i.RENDERBUFFER,N)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(I,v,Y){let Q=n.get(I);v!==void 0&&ut(Q.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Bt(I)}function Lt(I){let v=I.texture,Y=n.get(I),Q=n.get(v);I.addEventListener("dispose",x);let T=I.textures,N=I.isWebGLCubeRenderTarget===!0,q=T.length>1;if(q||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=v.version,a.memory.textures++),N){Y.__webglFramebuffer=[];for(let D=0;D<6;D++)if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer[D]=[];for(let V=0;V<v.mipmaps.length;V++)Y.__webglFramebuffer[D][V]=i.createFramebuffer()}else Y.__webglFramebuffer[D]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer=[];for(let D=0;D<v.mipmaps.length;D++)Y.__webglFramebuffer[D]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(q)for(let D=0,V=T.length;D<V;D++){let st=n.get(T[D]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&he(I)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let D=0;D<T.length;D++){let V=T[D];Y.__webglColorRenderbuffer[D]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[D]);let st=r.convert(V.format,V.colorSpace),J=r.convert(V.type),pt=_(V.internalFormat,st,J,V.normalized,V.colorSpace,I.isXRRenderTarget===!0),Mt=ne(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,pt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,Y.__webglColorRenderbuffer[D])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),St(Y.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(N){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ie(i.TEXTURE_CUBE_MAP,v);for(let D=0;D<6;D++)if(v.mipmaps&&v.mipmaps.length>0)for(let V=0;V<v.mipmaps.length;V++)ut(Y.__webglFramebuffer[D][V],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,V);else ut(Y.__webglFramebuffer[D],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);p(v)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(q){for(let D=0,V=T.length;D<V;D++){let st=T[D],J=n.get(st),pt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,J.__webglTexture),ie(pt,st),ut(Y.__webglFramebuffer,I,st,i.COLOR_ATTACHMENT0+D,pt,0),p(st)&&M(pt)}e.unbindTexture()}else{let D=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(D=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(D,Q.__webglTexture),ie(D,v),v.mipmaps&&v.mipmaps.length>0)for(let V=0;V<v.mipmaps.length;V++)ut(Y.__webglFramebuffer[V],I,v,i.COLOR_ATTACHMENT0,D,V);else ut(Y.__webglFramebuffer,I,v,i.COLOR_ATTACHMENT0,D,0);p(v)&&M(D),e.unbindTexture()}I.depthBuffer&&Bt(I)}function Ft(I){let v=I.textures;for(let Y=0,Q=v.length;Y<Q;Y++){let T=v[Y];if(p(T)){let N=E(I),q=n.get(T).__webglTexture;e.bindTexture(N,q),M(N),e.unbindTexture()}}}let jt=[],ee=[];function Me(I){if(I.samples>0){if(he(I)===!1){let v=I.textures,Y=I.width,Q=I.height,T=i.COLOR_BUFFER_BIT,N=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=n.get(I),D=v.length>1;if(D)for(let st=0;st<v.length;st++)e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer);let V=I.texture.mipmaps;V&&V.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let st=0;st<v.length;st++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(T|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(T|=i.STENCIL_BUFFER_BIT)),D){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,q.__webglColorRenderbuffer[st]);let J=n.get(v[st]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,Y,Q,0,0,Y,Q,T,i.NEAREST),l===!0&&(jt.length=0,ee.length=0,jt.push(i.COLOR_ATTACHMENT0+st),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(jt.push(N),ee.push(N),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),D)for(let st=0;st<v.length;st++){e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,q.__webglColorRenderbuffer[st]);let J=n.get(v[st]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,J,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let v=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ne(I){return Math.min(s.maxSamples,I.samples)}function he(I){let v=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function H(I){let v=a.render.frame;h.get(I)!==v&&(h.set(I,v),I.update())}function ae(I,v){let Y=I.colorSpace,Q=I.format,T=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==ma&&Y!==is&&(be.getTransfer(Y)===Ie?(Q!==si||T!==kn)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",Y)),v}function oe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=Z,this.getTextureUnits=k,this.setTextureUnits=K,this.setTexture2D=lt,this.setTexture2DArray=rt,this.setTexture3D=ct,this.setTextureCube=vt,this.rebindTextures=Pt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function b_(i,t){function e(n,s=is){let r,a=be.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===Hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vh)return i.BYTE;if(n===Gh)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===kl)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===$h)return i.ALPHA;if(n===qh)return i.RGB;if(n===si)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===Gl)return i.RED;if(n===Wl)return i.RED_INTEGER;if(n===ws)return i.RG;if(n===Xl)return i.RG_INTEGER;if(n===$l)return i.RGBA_INTEGER;if(n===Ka||n===ja||n===Qa||n===to)if(a===Ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ql||n===Yl||n===Zl||n===Jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===jl||n===Ql||n===tc||n===ec||n===eo||n===nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kl||n===jl)return a===Ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ql)return a===Ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===tc)return r.COMPRESSED_R11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_R11_EAC;if(n===eo)return r.COMPRESSED_RG11_EAC;if(n===nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ic)return a===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return a===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return a===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ac)return a===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return a===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return a===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return a===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return a===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return a===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return a===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return a===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return a===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return a===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return a===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xc||n===vc||n===_c)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xc)return a===Ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yc||n===Mc||n===no||n===bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var S_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w_=`
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

}`,_u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new wa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:S_,fragmentShader:w_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends Li{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,y=typeof XRWebGLBinding<"u",g=new _u,p={},M=e.getContextAttributes(),E=null,_=null,b=[],S=[],L=new Tt,x=null,A=null,F=new fn;F.viewport=new He;let W=new fn;W.viewport=new He;let B=[F,W],Z=new Nl,k=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ht){let mt=b[ht];return mt===void 0&&(mt=new Er,b[ht]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(ht){let mt=b[ht];return mt===void 0&&(mt=new Er,b[ht]=mt),mt.getGripSpace()},this.getHand=function(ht){let mt=b[ht];return mt===void 0&&(mt=new Er,b[ht]=mt),mt.getHandSpace()};function j(ht){let mt=S.indexOf(ht.inputSource);if(mt===-1)return;let Nt=b[mt];Nt!==void 0&&(Nt.update(ht.inputSource,ht.frame,c||a),Nt.dispatchEvent({type:ht.type,data:ht.inputSource}))}function ot(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",ot),s.removeEventListener("inputsourceschange",lt);for(let ht=0;ht<b.length;ht++){let mt=S[ht];mt!==null&&(S[ht]=null,b[ht].disconnect(mt))}k=null,K=null,g.reset();for(let ht in p)delete p[ht];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,_=null,_e.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(L.width,L.height,!1),A!==null){let ht=A.camera;ht.fov=A.fov,ht.zoom=A.zoom,ht.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ht){r=ht,n.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ht){o=ht,n.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ht){c=ht},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ht){if(s=ht,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",ot),s.addEventListener("inputsourceschange",lt),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,O=null,ut=null;M.depth&&(ut=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Nt=M.stencil?Ss:Ii,O=M.stencil?Br:Mi);let St={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(St),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new tn(u.textureWidth,u.textureHeight,{format:si,type:kn,depthTexture:new ps(u.textureWidth,u.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Nt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new tn(f.framebufferWidth,f.framebufferHeight,{format:si,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function lt(ht){for(let mt=0;mt<ht.removed.length;mt++){let Nt=ht.removed[mt],O=S.indexOf(Nt);O>=0&&(S[O]=null,b[O].disconnect(Nt))}for(let mt=0;mt<ht.added.length;mt++){let Nt=ht.added[mt],O=S.indexOf(Nt);if(O===-1){for(let St=0;St<b.length;St++)if(St>=S.length){S.push(Nt),O=St;break}else if(S[St]===null){S[St]=Nt,O=St;break}if(O===-1)break}let ut=b[O];ut&&ut.connect(Nt)}}let rt=new U,ct=new U;function vt(ht,mt,Nt){rt.setFromMatrixPosition(mt.matrixWorld),ct.setFromMatrixPosition(Nt.matrixWorld);let O=rt.distanceTo(ct),ut=mt.projectionMatrix.elements,St=Nt.projectionMatrix.elements,Et=ut[14]/(ut[10]-1),Bt=ut[14]/(ut[10]+1),Pt=(ut[9]+1)/ut[5],Lt=(ut[9]-1)/ut[5],Ft=(ut[8]-1)/ut[0],jt=(St[8]+1)/St[0],ee=Et*Ft,Me=Et*jt,ne=O/(-Ft+jt),he=ne*-Ft;if(mt.matrixWorld.decompose(ht.position,ht.quaternion,ht.scale),ht.translateX(he),ht.translateZ(ne),ht.matrixWorld.compose(ht.position,ht.quaternion,ht.scale),ht.matrixWorldInverse.copy(ht.matrixWorld).invert(),ut[10]===-1)ht.projectionMatrix.copy(mt.projectionMatrix),ht.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{let H=Et+ne,ae=Bt+ne,oe=ee-he,I=Me+(O-he),v=Pt*Bt/ae*H,Y=Lt*Bt/ae*H;ht.projectionMatrix.makePerspective(oe,I,v,Y,H,ae),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert()}}function yt(ht,mt){mt===null?ht.matrixWorld.copy(ht.matrix):ht.matrixWorld.multiplyMatrices(mt.matrixWorld,ht.matrix),ht.matrixWorldInverse.copy(ht.matrixWorld).invert()}this.updateCamera=function(ht){if(s===null)return;let mt=ht.near,Nt=ht.far;g.texture!==null&&(g.depthNear>0&&(mt=g.depthNear),g.depthFar>0&&(Nt=g.depthFar)),Z.near=W.near=F.near=mt,Z.far=W.far=F.far=Nt,(k!==Z.near||K!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),k=Z.near,K=Z.far),Z.layers.mask=ht.layers.mask|6,F.layers.mask=Z.layers.mask&-5,W.layers.mask=Z.layers.mask&-3;let O=ht.parent,ut=Z.cameras;yt(Z,O);for(let St=0;St<ut.length;St++)yt(ut[St],O);ut.length===2?vt(Z,F,W):Z.projectionMatrix.copy(F.projectionMatrix),A===null&&ht.isPerspectiveCamera&&(A={camera:ht,fov:ht.fov,zoom:ht.zoom}),dt(ht,Z,O)};function dt(ht,mt,Nt){Nt===null?ht.matrix.copy(mt.matrixWorld):(ht.matrix.copy(Nt.matrixWorld),ht.matrix.invert(),ht.matrix.multiply(mt.matrixWorld)),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.updateMatrixWorld(!0),ht.projectionMatrix.copy(mt.projectionMatrix),ht.projectionMatrixInverse.copy(mt.projectionMatrixInverse),ht.isPerspectiveCamera&&(ht.fov=ol*2*Math.atan(1/ht.projectionMatrix.elements[5]),ht.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(ht){l=ht,u!==null&&(u.fixedFoveation=ht),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ht)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Z)},this.getCameraTexture=function(ht){return p[ht]};let ce=null;function ie(ht,mt){if(h=mt.getViewerPose(c||a),m=mt,h!==null){let Nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let O=!1;Nt.length!==Z.cameras.length&&(Z.cameras.length=0,O=!0);for(let Bt=0;Bt<Nt.length;Bt++){let Pt=Nt[Bt],Lt=null;if(f!==null)Lt=f.getViewport(Pt);else{let jt=d.getViewSubImage(u,Pt);Lt=jt.viewport,Bt===0&&(t.setRenderTargetTextures(_,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(_))}let Ft=B[Bt];Ft===void 0&&(Ft=new fn,Ft.layers.enable(Bt),Ft.viewport=new He,B[Bt]=Ft),Ft.matrix.fromArray(Pt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Pt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Bt===0&&(Z.matrix.copy(Ft.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),O===!0&&Z.cameras.push(Ft)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let Bt=d.getDepthInformation(Nt[0]);Bt&&Bt.isValid&&Bt.texture&&g.init(Bt,s.renderState)}if(ut&&ut.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let Bt=0;Bt<Nt.length;Bt++){let Pt=Nt[Bt].camera;if(Pt){let Lt=p[Pt];Lt||(Lt=new wa,p[Pt]=Lt);let Ft=d.getCameraImage(Pt);Lt.sourceTexture=Ft}}}}for(let Nt=0;Nt<b.length;Nt++){let O=S[Nt],ut=b[Nt];O!==null&&ut!==void 0&&ut.update(O,mt,c||a)}ce&&ce(ht,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),m=null}let _e=new kd;_e.setAnimationLoop(ie),this.setAnimationLoop=function(ht){ce=ht},this.dispose=function(){}}},T_=new Pe,$d=new pe;$d.set(-1,0,0,0,1,0,0,0,1);function E_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Kh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,E,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===An&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===An&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),E=M.envMap,_=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply($d),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let S=b.program;n.uniformBlockBinding(_,S)}function c(_,b){let S=s[_.id];S===void 0&&(g(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",M));let L=b.program;n.updateUBOMapping(_,L);let x=t.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){let b=d();_.__bindingPointIndex=b;let S=i.createBuffer(),L=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=s[_.id],S=_.uniforms,L=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,A=S.length;x<A;x++){let F=S[x];if(Array.isArray(F))for(let W=0,B=F.length;W<B;W++)f(F[W],x,W,L);else f(F,x,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,b,S,L){if(y(_,b,S,L)===!0){let x=_.__offset,A=_.value;if(Array.isArray(A)){let F=0;for(let W=0;W<A.length;W++){let B=A[W],Z=p(B);m(B,_.__data,F),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(F+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function m(_,b,S){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,S)}function y(_,b,S,L){let x=_.value,A=b+"_"+S;if(L[A]===void 0)return typeof x=="number"||typeof x=="boolean"?L[A]=x:ArrayBuffer.isView(x)?L[A]=x.slice():L[A]=x.clone(),!0;{let F=L[A];if(typeof x=="number"||typeof x=="boolean"){if(F!==x)return L[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(F.equals(x)===!1)return F.copy(x),!0}}return!1}function g(_){let b=_.uniforms,S=0,L=16;for(let A=0,F=b.length;A<F;A++){let W=Array.isArray(b[A])?b[A]:[b[A]];for(let B=0,Z=W.length;B<Z;B++){let k=W[B],K=Array.isArray(k.value)?k.value:[k.value];for(let j=0,ot=K.length;j<ot;j++){let lt=K[j],rt=p(lt),ct=S%L,vt=ct%rt.boundary,yt=ct+vt;S+=vt,yt!==0&&L-yt<rt.storage&&(S+=L-yt),k.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=rt.storage}}}let x=S%L;return x>0&&(S+=L-x),_.__size=S,_.__cache={},this}function p(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):se("WebGLRenderer: Unsupported uniform value type.",_),b}function M(_){let b=_.target;b.removeEventListener("dispose",M);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function E(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var C_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Oi=null;function R_(){return Oi===null&&(Oi=new Ma(C_,16,16,ws,pn),Oi.name="DFG_LUT",Oi.minFilter=En,Oi.magFilter=En,Oi.wrapS=Pi,Oi.wrapT=Pi,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}var Rc=class{constructor(t={}){let{canvas:e=ld(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=kn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let y=f,g=new Set([$l,Xl,Wl]),p=new Set([kn,Mi,Or,Br,Hl,Vl]),M=new Uint32Array(4),E=new Int32Array(4),_=new U,b=null,S=null,L=[],x=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,W=!1,B=null,Z=null,k=null,K=null;this._outputColorSpace=Tn;let j=0,ot=0,lt=null,rt=-1,ct=null,vt=new He,yt=new He,dt=null,ce=new te(0),ie=0,_e=e.width,ht=e.height,mt=1,Nt=null,O=null,ut=new He(0,0,_e,ht),St=new He(0,0,_e,ht),Et=!1,Bt=new Ar,Pt=!1,Lt=!1,Ft=new Pe,jt=new U,ee=new He,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function he(){return lt===null?mt:1}let H=n;function ae(w,X){return e.getContext(w,X)}let oe,I,v,Y,Q,T,N,q,D,V,st,J,pt,Mt,At,Vt,Zt,z,_t,et,ft,bt,gt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Ke,!1),H===null){let X="webgl2";if(H=ae(X,w),H===null)throw ae(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(w){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Ke,!1),le("WebGLRenderer: "+w.message),w}function Xt(){oe=new Fx(H),oe.init(),ft=new b_(H,oe),I=new Ex(H,oe,t,ft),v=new y_(H,oe),I.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),Z=H.createFramebuffer(),k=H.createFramebuffer(),K=H.createFramebuffer(),Y=new zx(H),Q=new a_,T=new M_(H,oe,v,Q,I,ft,Y),N=new Ux(F),q=new Hm(H),bt=new wx(H,q),D=new Ox(H,q,Y,bt),V=new Hx(H,D,q,bt,Y),z=new kx(H,I,T),At=new Ax(Q),st=new r_(F,N,oe,I,bt,At),J=new E_(F,Q),pt=new l_,Mt=new p_(oe),Zt=new Sx(F,N,v,V,m,l),Vt=new __(F,V,I),gt=new A_(H,Y,I,v),_t=new Tx(H,oe,Y),et=new Bx(H,oe,Y),Y.programs=st.programs,F.capabilities=I,F.extensions=oe,F.properties=Q,F.renderLists=pt,F.shadowMap=Vt,F.state=v,F.info=Y}y!==kn&&(A=new Gx(y,e.width,e.height,o,s,r));let Wt=new yu(F,H);this.xr=Wt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(w){w!==void 0&&(mt=w,this.setSize(_e,ht,!1))},this.getSize=function(w){return w.set(_e,ht)},this.setSize=function(w,X,G=!0){if(Wt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=w,ht=X,e.width=Math.floor(w*mt),e.height=Math.floor(X*mt),G===!0&&(e.style.width=w+"px",e.style.height=X+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(_e*mt,ht*mt).floor()},this.setDrawingBufferSize=function(w,X,G){_e=w,ht=X,mt=G,e.width=Math.floor(w*G),e.height=Math.floor(X*G),this.setViewport(0,0,w,X)},this.setEffects=function(w){if(y===kn){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let X=0;X<w.length;X++)if(w[X].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(vt)},this.getViewport=function(w){return w.copy(ut)},this.setViewport=function(w,X,G,C){w.isVector4?ut.set(w.x,w.y,w.z,w.w):ut.set(w,X,G,C),v.viewport(vt.copy(ut).multiplyScalar(mt).round())},this.getScissor=function(w){return w.copy(St)},this.setScissor=function(w,X,G,C){w.isVector4?St.set(w.x,w.y,w.z,w.w):St.set(w,X,G,C),v.scissor(yt.copy(St).multiplyScalar(mt).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(w){v.setScissorTest(Et=w)},this.setOpaqueSort=function(w){Nt=w},this.setTransparentSort=function(w){O=w},this.getClearColor=function(w){return w.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,G=!0){let C=0;if(w){let tt=!1;if(lt!==null){let zt=lt.texture.format;tt=g.has(zt)}if(tt){let zt=lt.texture.type,qt=p.has(zt),kt=Zt.getClearColor(),$t=Zt.getClearAlpha(),Qt=kt.r,fe=kt.g,ye=kt.b;qt?(M[0]=Qt,M[1]=fe,M[2]=ye,M[3]=$t,H.clearBufferuiv(H.COLOR,0,M)):(E[0]=Qt,E[1]=fe,E[2]=ye,E[3]=$t,H.clearBufferiv(H.COLOR,0,E))}else C|=H.COLOR_BUFFER_BIT}X&&(C|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(C|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C!==0&&H.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),B=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Ke,!1),Zt.dispose(),pt.dispose(),Mt.dispose(),Q.dispose(),N.dispose(),V.dispose(),bt.dispose(),gt.dispose(),st.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Gt),Wt.removeEventListener("sessionend",ue),Te.stop()};function Ae(w){w.preventDefault(),Zh("WebGLRenderer: Context Lost."),W=!0}function ge(){Zh("WebGLRenderer: Context Restored."),W=!1;let w=Y.autoReset,X=Vt.enabled,G=Vt.autoUpdate,C=Vt.needsUpdate,tt=Vt.type;Xt(),Y.autoReset=w,Vt.enabled=X,Vt.autoUpdate=G,Vt.needsUpdate=C,Vt.type=tt}function Ke(w){le("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rn(w){let X=w.target;X.removeEventListener("dispose",rn),jn(X)}function jn(w){Ls(w),Q.remove(w)}function Ls(w){let X=Q.get(w).programs;X!==void 0&&(X.forEach(function(G){st.releaseProgram(G)}),w.isShaderMaterial&&st.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,G,C,tt,zt){X===null&&(X=Me);let qt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,kt=sr(w,X,G,C,tt);v.setMaterial(C,qt);let $t=G.index,Qt=1;if(C.wireframe===!0){if($t=D.getWireframeAttribute(G),$t===void 0)return;Qt=2}let fe=G.drawRange,ye=G.attributes.position,Kt=fe.start*Qt,Re=(fe.start+fe.count)*Qt;zt!==null&&(Kt=Math.max(Kt,zt.start*Qt),Re=Math.min(Re,(zt.start+zt.count)*Qt)),$t!==null?(Kt=Math.max(Kt,0),Re=Math.min(Re,$t.count)):ye!=null&&(Kt=Math.max(Kt,0),Re=Math.min(Re,ye.count));let je=Re-Kt;if(je<0||je===1/0)return;bt.setup(tt,C,kt,G,$t);let ke,Fe=_t;if($t!==null&&(ke=q.get($t),Fe=et,Fe.setIndex(ke)),tt.isMesh)C.wireframe===!0?(v.setLineWidth(C.wireframeLinewidth*he()),Fe.setMode(H.LINES)):Fe.setMode(H.TRIANGLES);else if(tt.isLine){let vn=C.linewidth;vn===void 0&&(vn=1),v.setLineWidth(vn*he()),tt.isLineSegments?Fe.setMode(H.LINES):tt.isLineLoop?Fe.setMode(H.LINE_LOOP):Fe.setMode(H.LINE_STRIP)}else tt.isPoints?Fe.setMode(H.POINTS):tt.isSprite&&Fe.setMode(H.TRIANGLES);if(tt.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Fe.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let vn=tt._multiDrawStarts,Yt=tt._multiDrawCounts,Sn=tt._multiDrawCount,Ce=$t?q.get($t).bytesPerElement:1,Bn=Q.get(C).currentProgram.getUniforms();for(let un=0;un<Sn;un++)Bn.setValue(H,"_gl_DrawID",un),Fe.render(vn[un]/Ce,Yt[un])}else if(tt.isInstancedMesh)Fe.renderInstances(Kt,je,tt.count);else if(G.isInstancedBufferGeometry){let vn=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Yt=Math.min(G.instanceCount,vn);Fe.renderInstances(Kt,je,Yt)}else Fe.render(Kt,je)};function nr(w,X,G,C){B!==null&&w.isNodeMaterial&&B.setObject(C,w),Pt===!0&&At.setState(w,G,!1),w.transparent===!0&&w.side===Fi&&w.forceSinglePass===!1?(w.side=An,w.needsUpdate=!0,Wn(w,X,C),w.side=ys,w.needsUpdate=!0,Wn(w,X,C),w.side=Fi):Wn(w,X,C)}this.compile=function(w,X,G=null){G===null&&(G=w),B!==null&&B.renderStart(w,X,G),S=Mt.get(G),S.init(X),x.push(S),G.traverseVisible(function(tt){tt.isLight&&tt.layers.test(X.layers)&&(S.pushLight(tt),tt.castShadow&&S.pushShadow(tt))}),w!==G&&w.traverseVisible(function(tt){tt.isLight&&tt.layers.test(X.layers)&&(S.pushLight(tt),tt.castShadow&&S.pushShadow(tt))}),S.setupLights(),B!==null&&B.updateLights(S.state.lightsArray),Lt=this.localClippingEnabled,Pt=At.init(this.clippingPlanes,Lt),Pt===!0&&At.setGlobalState(this.clippingPlanes,X),B!==null&&Vt.render(S.state.shadowsArray,G,X);let C=new Set;return w.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let zt=tt.material;if(zt)if(Array.isArray(zt))for(let qt=0;qt<zt.length;qt++){let kt=zt[qt];nr(kt,G,X,tt),C.add(kt)}else nr(zt,G,X,tt),C.add(zt)}),S=x.pop(),B!==null&&B.renderEnd(),C},this.compileAsync=function(w,X,G=null){let C=this.compile(w,X,G);return new Promise(tt=>{function zt(){if(C.forEach(function(qt){let $t=Q.get(qt).currentProgram;($t===void 0||$t.isReady())&&C.delete(qt)}),C.size===0){tt(w);return}setTimeout(zt,10)}oe.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let ci=null;function Ut(w){ci&&ci(w)}function Gt(){Te.stop()}function ue(){Te.start()}let Te=new kd;Te.setAnimationLoop(Ut),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(w){ci=w,Wt.setAnimationLoop(w),w===null?Te.stop():Te.start()},Wt.addEventListener("sessionstart",Gt),Wt.addEventListener("sessionend",ue),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;B!==null&&B.renderStart(w,X);let G=Wt.enabled===!0&&Wt.isPresenting===!0,C=A!==null&&(lt===null||G)&&A.begin(F,lt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(X),X=Wt.getCamera()),w.isScene===!0&&w.onBeforeRender(F,w,X,lt),S=Mt.get(w,x.length),S.init(X),S.state.textureUnits=T.getTextureUnits(),x.push(S),Ft.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Bt.setFromProjectionMatrix(Ft,mi,X.reversedDepth),Lt=this.localClippingEnabled,Pt=At.init(this.clippingPlanes,Lt),b=pt.get(w,L.length),b.init(),L.push(b),Wt.enabled===!0&&Wt.isPresenting===!0){let qt=F.xr.getDepthSensingMesh();qt!==null&&Ze(qt,X,-1/0,F.sortObjects)}Ze(w,X,0,F.sortObjects),b.finish(),B!==null&&B.updateLights(S.state.lightsArray),F.sortObjects===!0&&b.sort(Nt,O),ne=Wt.enabled===!1||Wt.isPresenting===!1||Wt.hasDepthSensing()===!1,ne&&Zt.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Pt===!0&&At.beginShadows();let tt=S.state.shadowsArray;if(Vt.render(tt,w,X),Pt===!0&&At.endShadows(),(C&&A.hasRenderPass())===!1){let qt=b.opaque,kt=b.transmissive;if(S.setupLights(),X.isArrayCamera){let $t=X.cameras;if(kt.length>0)for(let Qt=0,fe=$t.length;Qt<fe;Qt++){let ye=$t[Qt];hn(qt,kt,w,ye)}ne&&Zt.render(w);for(let Qt=0,fe=$t.length;Qt<fe;Qt++){let ye=$t[Qt];Ue(b,w,ye,ye.viewport)}}else kt.length>0&&hn(qt,kt,w,X),ne&&Zt.render(w),Ue(b,w,X)}lt!==null&&ot===0&&(T.updateMultisampleRenderTarget(lt),T.updateRenderTargetMipmap(lt)),C&&A.end(F),w.isScene===!0&&w.onAfterRender(F,w,X),bt.resetDefaultState(),rt=-1,ct=null,x.pop(),x.length>0?(S=x[x.length-1],T.setTextureUnits(S.state.textureUnits),Pt===!0&&At.setGlobalState(F.clippingPlanes,S.state.camera)):S=null,L.pop(),L.length>0?b=L[L.length-1]:b=null,B!==null&&B.renderEnd()};function Ze(w,X,G,C){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Bt)){C&&ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ft);let qt=V.update(w),kt=w.material;kt.visible&&b.push(w,qt,kt,G,ee.z,null,X)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Bt))){let qt=V.update(w),kt=w.material;if(C&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ee.copy(w.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),ee.copy(qt.boundingSphere.center)),ee.applyMatrix4(w.matrixWorld).applyMatrix4(Ft)),Array.isArray(kt)){let $t=qt.groups;for(let Qt=0,fe=$t.length;Qt<fe;Qt++){let ye=$t[Qt],Kt=kt[ye.materialIndex];Kt&&Kt.visible&&b.push(w,qt,Kt,G,ee.z,ye,X)}}else kt.visible&&b.push(w,qt,kt,G,ee.z,null,X)}}let zt=w.children;for(let qt=0,kt=zt.length;qt<kt;qt++)Ze(zt[qt],X,G,C)}function Ue(w,X,G,C){let{opaque:tt,transmissive:zt,transparent:qt}=w;S.setupLightsView(G),Pt===!0&&At.setGlobalState(F.clippingPlanes,G),C&&v.viewport(vt.copy(C)),tt.length>0&&Cn(tt,X,G),zt.length>0&&Cn(zt,X,G),qt.length>0&&Cn(qt,X,G),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function hn(w,X,G,C){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[C.id]===void 0){let Kt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[C.id]=new tn(1,1,{generateMipmaps:!0,type:Kt?pn:kn,minFilter:yi,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:be.workingColorSpace})}let zt=S.state.transmissionRenderTarget[C.id],qt=C.viewport||vt;zt.setSize(qt.z*F.transmissionResolutionScale,qt.w*F.transmissionResolutionScale);let kt=F.getRenderTarget(),$t=F.getActiveCubeFace(),Qt=F.getActiveMipmapLevel();F.setRenderTarget(zt),F.getClearColor(ce),ie=F.getClearAlpha(),ie<1&&F.setClearColor(16777215,.5),F.clear(),ne&&Zt.render(G);let fe=F.toneMapping;F.toneMapping=_i;let ye=C.viewport;if(C.viewport!==void 0&&(C.viewport=void 0),S.setupLightsView(C),Pt===!0&&At.setGlobalState(F.clippingPlanes,C),Cn(w,G,C),T.updateMultisampleRenderTarget(zt),T.updateRenderTargetMipmap(zt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Re=0,je=X.length;Re<je;Re++){let ke=X[Re],{object:Fe,geometry:vn,material:Yt,group:Sn}=ke;if(Yt.side===Fi&&Fe.layers.test(C.layers)){let Ce=Yt.side;Yt.side=An,Yt.needsUpdate=!0,Dn(Fe,G,C,vn,Yt,Sn),Yt.side=Ce,Yt.needsUpdate=!0,Kt=!0}}Kt===!0&&(T.updateMultisampleRenderTarget(zt),T.updateRenderTargetMipmap(zt))}F.setRenderTarget(kt,$t,Qt),F.setClearColor(ce,ie),ye!==void 0&&(C.viewport=ye),F.toneMapping=fe}function Cn(w,X,G){let C=X.isScene===!0?X.overrideMaterial:null;for(let tt=0,zt=w.length;tt<zt;tt++){let qt=w[tt],{object:kt,geometry:$t,group:Qt}=qt,fe=qt.material;fe.allowOverride===!0&&C!==null&&(fe=C),kt.layers.test(G.layers)&&Dn(kt,X,G,$t,fe,Qt)}}function Dn(w,X,G,C,tt,zt){B!==null&&tt.isNodeMaterial&&B.setObject(w,tt),w.onBeforeRender(F,X,G,C,tt,zt),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),tt.onBeforeRender(F,X,G,C,w,zt),tt.transparent===!0&&tt.side===Fi&&tt.forceSinglePass===!1?(tt.side=An,tt.needsUpdate=!0,F.renderBufferDirect(G,X,C,tt,w,zt),tt.side=ys,tt.needsUpdate=!0,F.renderBufferDirect(G,X,C,tt,w,zt),tt.side=Fi):F.renderBufferDirect(G,X,C,tt,w,zt),w.onAfterRender(F,X,G,C,tt,zt)}function Wn(w,X,G){X.isScene!==!0&&(X=Me);let C=Q.get(w),tt=S.state.lights,zt=S.state.shadowsArray,qt=tt.state.version,kt=st.getParameters(w,tt.state,zt,X,G,S.state.lightProbeGridArray),$t=st.getProgramCacheKey(kt),Qt=C.programs;C.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?X.environment:null,C.fog=X.fog;let fe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;C.envMap=N.get(w.envMap||C.environment,fe),C.envMapRotation=C.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Qt===void 0&&(w.addEventListener("dispose",rn),Qt=new Map,C.programs=Qt);let ye=Qt.get($t);if(ye!==void 0){if(C.currentProgram===ye&&C.lightsStateVersion===qt)return On(w,kt),ye}else kt.uniforms=st.getUniforms(w),B!==null&&w.isNodeMaterial&&B.build(w,G,kt),w.onBeforeCompile(kt,F),ye=st.acquireProgram(kt,$t),Qt.set($t,ye),C.uniforms=kt.uniforms;let Kt=C.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Kt.clippingPlanes=At.uniform),On(w,kt),C.needsLights=xn(w),C.lightsStateVersion=qt,C.needsLights&&(Kt.ambientLightColor.value=tt.state.ambient,Kt.lightProbe.value=tt.state.probe,Kt.sunLights.value=tt.state.sun,Kt.sunLightShadows.value=tt.state.sunShadow,Kt.directionalLights.value=tt.state.directional,Kt.directionalLightShadows.value=tt.state.directionalShadow,Kt.spotLights.value=tt.state.spot,Kt.spotLightShadows.value=tt.state.spotShadow,Kt.rectAreaLights.value=tt.state.rectArea,Kt.ltc_1.value=tt.state.rectAreaLTC1,Kt.ltc_2.value=tt.state.rectAreaLTC2,Kt.pointLights.value=tt.state.point,Kt.pointLightShadows.value=tt.state.pointShadow,Kt.hemisphereLights.value=tt.state.hemi,Kt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Kt.sunShadowCascade.value=tt.state.sunShadowCascade,Kt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Kt.spotLightMatrix.value=tt.state.spotLightMatrix,Kt.spotLightMap.value=tt.state.spotLightMap,Kt.pointShadowMatrix.value=tt.state.pointShadowMatrix),C.lightProbeGrid=S.state.lightProbeGridArray.length>0,C.currentProgram=ye,C.uniformsList=null,ye}function Xn(w){if(w.uniformsList===null){let X=w.currentProgram.getUniforms();w.uniformsList=Vr.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function On(w,X){let G=Q.get(w);G.outputColorSpace=X.outputColorSpace,G.batching=X.batching,G.batchingColor=X.batchingColor,G.instancing=X.instancing,G.instancingColor=X.instancingColor,G.instancingMorph=X.instancingMorph,G.skinning=X.skinning,G.morphTargets=X.morphTargets,G.morphNormals=X.morphNormals,G.morphColors=X.morphColors,G.morphTargetsCount=X.morphTargetsCount,G.numClippingPlanes=X.numClippingPlanes,G.numIntersection=X.numClipIntersection,G.vertexAlphas=X.vertexAlphas,G.vertexTangents=X.vertexTangents,G.toneMapping=X.toneMapping}function ir(w,X){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(X.matrixWorld);for(let G=0,C=w.length;G<C;G++){let tt=w[G];if(tt.texture!==null&&tt.boundingBox.containsPoint(_))return tt}return null}function sr(w,X,G,C,tt){X.isScene!==!0&&(X=Me),T.resetTextureUnits();let zt=X.fog,qt=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,kt=lt===null?F.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:be.workingColorSpace,$t=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,Qt=N.get(C.envMap||qt,$t),fe=C.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ye=!!G.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),Kt=!!G.morphAttributes.position,Re=!!G.morphAttributes.normal,je=!!G.morphAttributes.color,ke=_i;C.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ke=F.toneMapping);let Fe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,vn=Fe!==void 0?Fe.length:0,Yt=Q.get(C),Sn=S.state.lights;if(Pt===!0&&(Lt===!0||w!==ct)){let Oe=w===ct&&C.id===rt;At.setState(C,w,Oe)}let Ce=!1;C.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Sn.state.version||Yt.outputColorSpace!==kt||tt.isBatchedMesh&&Yt.batching===!1||!tt.isBatchedMesh&&Yt.batching===!0||tt.isBatchedMesh&&Yt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&Yt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&Yt.instancing===!1||!tt.isInstancedMesh&&Yt.instancing===!0||tt.isSkinnedMesh&&Yt.skinning===!1||!tt.isSkinnedMesh&&Yt.skinning===!0||tt.isInstancedMesh&&Yt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Yt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Yt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Yt.instancingMorph===!1&&tt.morphTexture!==null||Yt.envMap!==Qt||C.fog===!0&&Yt.fog!==zt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==At.numPlanes||Yt.numIntersection!==At.numIntersection)||Yt.vertexAlphas!==fe||Yt.vertexTangents!==ye||Yt.morphTargets!==Kt||Yt.morphNormals!==Re||Yt.morphColors!==je||Yt.toneMapping!==ke||Yt.morphTargetsCount!==vn||!!Yt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ce=!0):(Ce=!0,Yt.__version=C.version);let Bn=Yt.currentProgram;Ce===!0&&(Bn=Wn(C,X,tt),B&&C.isNodeMaterial&&B.onUpdateProgram(C,Bn,Yt));let un=!1,Ai=!1,hi=!1,De=Bn.getUniforms(),Ge=Yt.uniforms;if(v.useProgram(Bn.program)&&(un=!0,Ai=!0,hi=!0),C.id!==rt&&(rt=C.id,Ai=!0),Yt.needsLights){let Oe=ir(S.state.lightProbeGridArray,tt);Yt.lightProbeGrid!==Oe&&(Yt.lightProbeGrid=Oe,Ai=!0)}if(un||ct!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),De.setValue(H,"projectionMatrix",w.projectionMatrix),De.setValue(H,"viewMatrix",w.matrixWorldInverse);let Nn=De.map.cameraPosition;Nn!==void 0&&Nn.setValue(H,jt.setFromMatrixPosition(w.matrixWorld)),I.logarithmicDepthBuffer&&De.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&De.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),ct!==w&&(ct=w,Ai=!0,hi=!0)}if(Yt.needsLights&&(Sn.state.sunShadowMap.length>0&&De.setValue(H,"sunShadowMap",Sn.state.sunShadowMap,T),Sn.state.directionalShadowMap.length>0&&De.setValue(H,"directionalShadowMap",Sn.state.directionalShadowMap,T),Sn.state.spotShadowMap.length>0&&De.setValue(H,"spotShadowMap",Sn.state.spotShadowMap,T),Sn.state.pointShadowMap.length>0&&De.setValue(H,"pointShadowMap",Sn.state.pointShadowMap,T)),tt.isSkinnedMesh){De.setOptional(H,tt,"bindMatrix"),De.setOptional(H,tt,"bindMatrixInverse");let Oe=tt.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),De.setValue(H,"boneTexture",Oe.boneTexture,T))}tt.isBatchedMesh&&(De.setOptional(H,tt,"batchingTexture"),De.setValue(H,"batchingTexture",tt._matricesTexture,T),De.setOptional(H,tt,"batchingIdTexture"),De.setValue(H,"batchingIdTexture",tt._indirectTexture,T),De.setOptional(H,tt,"batchingColorTexture"),tt._colorsTexture!==null&&De.setValue(H,"batchingColorTexture",tt._colorsTexture,T));let Ci=G.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&z.update(tt,G,Bn),(Ai||Yt.receiveShadow!==tt.receiveShadow)&&(Yt.receiveShadow=tt.receiveShadow,De.setValue(H,"receiveShadow",tt.receiveShadow)),(C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial)&&C.envMap===null&&X.environment!==null&&(Ge.envMapIntensity.value=X.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=R_()),Ai){if(De.setValue(H,"toneMappingExposure",F.toneMappingExposure),Yt.needsLights&&Ti(Ge,hi),zt&&C.fog===!0&&J.refreshFogUniforms(Ge,zt),J.refreshMaterialUniforms(Ge,C,mt,ht,S.state.transmissionRenderTarget[w.id]),Yt.needsLights&&Yt.lightProbeGrid){let Oe=Yt.lightProbeGrid;Ge.probesSH.value=Oe.texture,Ge.probesMin.value.copy(Oe.boundingBox.min),Ge.probesMax.value.copy(Oe.boundingBox.max),Ge.probesResolution.value.copy(Oe.resolution)}Vr.upload(H,Xn(Yt),Ge,T)}if(C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(Vr.upload(H,Xn(Yt),Ge,T),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&De.setValue(H,"center",tt.center),De.setValue(H,"modelViewMatrix",tt.modelViewMatrix),De.setValue(H,"normalMatrix",tt.normalMatrix),De.setValue(H,"modelMatrix",tt.matrixWorld),C.uniformsGroups!==void 0){let Oe=C.uniformsGroups;for(let Nn=0,$i=Oe.length;Nn<$i;Nn++){let _n=Oe[Nn];gt.update(_n,Bn),gt.bind(_n,Bn)}}return Bn}function Ti(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.sunLights.needsUpdate=X,w.sunLightShadows.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function xn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ot},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(w,X,G){let C=Q.get(w);C.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,C.__autoAllocateDepthBuffer===!1&&(C.__useRenderToTexture=!1),Q.get(w.texture).__webglTexture=X,Q.get(w.depthTexture).__webglTexture=C.__autoAllocateDepthBuffer?void 0:G,C.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){let G=Q.get(w);G.__webglFramebuffer=X,G.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(w,X=0,G=0){lt=w,j=X,ot=G;let C=null,tt=!1,zt=!1;if(w){let kt=Q.get(w);if(kt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(H.FRAMEBUFFER,kt.__webglFramebuffer),vt.copy(w.viewport),yt.copy(w.scissor),dt=w.scissorTest,v.viewport(vt),v.scissor(yt),v.setScissorTest(dt),rt=-1;return}else if(kt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(kt.__hasExternalTextures)T.rebindTextures(w,Q.get(w.texture).__webglTexture,Q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let fe=w.depthTexture;if(kt.__boundDepthTexture!==fe){if(fe!==null&&Q.has(fe)&&(w.width!==fe.image.width||w.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}let $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(zt=!0);let Qt=Q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qt[X])?C=Qt[X][G]:C=Qt[X],tt=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?C=Q.get(w).__webglMultisampledFramebuffer:Array.isArray(Qt)?C=Qt[G]:C=Qt,vt.copy(w.viewport),yt.copy(w.scissor),dt=w.scissorTest}else vt.copy(ut).multiplyScalar(mt).floor(),yt.copy(St).multiplyScalar(mt).floor(),dt=Et;if(G!==0&&(C=Z),v.bindFramebuffer(H.FRAMEBUFFER,C)&&v.drawBuffers(w,C),v.viewport(vt),v.scissor(yt),v.setScissorTest(dt),tt){let kt=Q.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,kt.__webglTexture,G)}else if(zt){let kt=X;for(let $t=0;$t<w.textures.length;$t++){let Qt=Q.get(w.textures[$t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$t,Qt.__webglTexture,G,kt)}}else if(w!==null&&G!==0){let kt=Q.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,kt.__webglTexture,G)}rt=-1};function Ei(w){let X=Q.get(w);return(X.__readFormat!==w.format||X.__readType!==w.type)&&(X.__readFormat=w.format,X.__readType=w.type,X.__formatReadable=I.textureFormatReadable(w.format),X.__typeReadable=I.textureTypeReadable(w.type)),X}this.readRenderTargetPixels=function(w,X,G,C,tt,zt,qt,kt=0){if(!(w&&w.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qt!==void 0&&($t=$t[qt]),$t){v.bindFramebuffer(H.FRAMEBUFFER,$t);try{let Qt=w.textures[kt],fe=Qt.format,ye=Qt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+kt);let Kt=Ei(Qt);if(Kt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-C&&G>=0&&G<=w.height-tt&&H.readPixels(X,G,C,tt,ft.convert(fe),ft.convert(ye),zt)}finally{let Qt=lt!==null?Q.get(lt).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(w,X,G,C,tt,zt,qt,kt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qt!==void 0&&($t=$t[qt]),$t)if(X>=0&&X<=w.width-C&&G>=0&&G<=w.height-tt){v.bindFramebuffer(H.FRAMEBUFFER,$t);let Qt=w.textures[kt],fe=Qt.format,ye=Qt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+kt);let Kt=Ei(Qt);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Re),H.bufferData(H.PIXEL_PACK_BUFFER,zt.byteLength,H.STREAM_READ),H.readPixels(X,G,C,tt,ft.convert(fe),ft.convert(ye),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let je=lt!==null?Q.get(lt).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,je);let ke=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await hd(H,ke,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Re),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,zt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Re),H.deleteSync(ke),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,G=0){let C=Math.pow(2,-G),tt=Math.floor(w.image.width*C),zt=Math.floor(w.image.height*C),qt=X!==null?X.x:0,kt=X!==null?X.y:0;T.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,G,0,0,qt,kt,tt,zt),v.unbindTexture()},this.copyTextureToTexture=function(w,X,G=null,C=null,tt=0,zt=0){let qt,kt,$t,Qt,fe,ye,Kt,Re,je,ke=w.isCompressedTexture?w.mipmaps[zt]:w.image;if(G!==null)qt=G.max.x-G.min.x,kt=G.max.y-G.min.y,$t=G.isBox3?G.max.z-G.min.z:1,Qt=G.min.x,fe=G.min.y,ye=G.isBox3?G.min.z:0;else{let Ge=Math.pow(2,-tt);qt=Math.floor(ke.width*Ge),kt=Math.floor(ke.height*Ge),w.isDataArrayTexture?$t=ke.depth:w.isData3DTexture?$t=Math.floor(ke.depth*Ge):$t=1,Qt=0,fe=0,ye=0}C!==null?(Kt=C.x,Re=C.y,je=C.z):(Kt=0,Re=0,je=0);let Fe=ft.convert(X.format),vn=ft.convert(X.type),Yt;X.isData3DTexture?(T.setTexture3D(X,0),Yt=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(T.setTexture2DArray(X,0),Yt=H.TEXTURE_2D_ARRAY):(T.setTexture2D(X,0),Yt=H.TEXTURE_2D),v.activeTexture(H.TEXTURE0),v.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),v.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),v.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);let Sn=v.getParameter(H.UNPACK_ROW_LENGTH),Ce=v.getParameter(H.UNPACK_IMAGE_HEIGHT),Bn=v.getParameter(H.UNPACK_SKIP_PIXELS),un=v.getParameter(H.UNPACK_SKIP_ROWS),Ai=v.getParameter(H.UNPACK_SKIP_IMAGES);v.pixelStorei(H.UNPACK_ROW_LENGTH,ke.width),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ke.height),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Qt),v.pixelStorei(H.UNPACK_SKIP_ROWS,fe),v.pixelStorei(H.UNPACK_SKIP_IMAGES,ye);let hi=w.isDataArrayTexture||w.isData3DTexture,De=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){let Ge=Q.get(w),Ci=Q.get(X),Oe=Q.get(Ge.__renderTarget),Nn=Q.get(Ci.__renderTarget);v.bindFramebuffer(H.READ_FRAMEBUFFER,Oe.__webglFramebuffer),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let $i=0;$i<$t;$i++)hi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Q.get(w).__webglTexture,tt,ye+$i),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Q.get(X).__webglTexture,zt,je+$i)),H.blitFramebuffer(Qt,fe,qt,kt,Kt,Re,qt,kt,H.DEPTH_BUFFER_BIT,H.NEAREST);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(tt!==0||w.isRenderTargetTexture||Q.has(w)){let Ge=Q.get(w),Ci=Q.get(X);v.bindFramebuffer(H.READ_FRAMEBUFFER,k),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,K);for(let Oe=0;Oe<$t;Oe++)hi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.__webglTexture,tt,ye+Oe):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ge.__webglTexture,tt),De?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ci.__webglTexture,zt,je+Oe):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ci.__webglTexture,zt),tt!==0?H.blitFramebuffer(Qt,fe,qt,kt,Kt,Re,qt,kt,H.COLOR_BUFFER_BIT,H.NEAREST):De?H.copyTexSubImage3D(Yt,zt,Kt,Re,je+Oe,Qt,fe,qt,kt):H.copyTexSubImage2D(Yt,zt,Kt,Re,Qt,fe,qt,kt);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else De?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Yt,zt,Kt,Re,je,qt,kt,$t,Fe,vn,ke.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(Yt,zt,Kt,Re,je,qt,kt,$t,Fe,ke.data):H.texSubImage3D(Yt,zt,Kt,Re,je,qt,kt,$t,Fe,vn,ke):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,zt,Kt,Re,qt,kt,Fe,vn,ke.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,zt,Kt,Re,ke.width,ke.height,Fe,ke.data):H.texSubImage2D(H.TEXTURE_2D,zt,Kt,Re,qt,kt,Fe,vn,ke);v.pixelStorei(H.UNPACK_ROW_LENGTH,Sn),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ce),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Bn),v.pixelStorei(H.UNPACK_SKIP_ROWS,un),v.pixelStorei(H.UNPACK_SKIP_IMAGES,Ai),zt===0&&X.generateMipmaps&&H.generateMipmap(Yt),v.unbindTexture()},this.initRenderTarget=function(w){Q.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){j=0,ot=0,lt=null,v.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}};var Xr=class extends ts{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new In;t.deleteAttribute("uv");let e=new dn({side:An}),n=new dn,s=new Ha(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new we(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ds(t,n,6),o=new on;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new we(t,Wr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new we(t,Wr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new we(t,Wr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new we(t,Wr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new we(t,Wr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new we(t,Wr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Wr(i){return new Oa({color:0,emissive:16777215,emissiveIntensity:i})}function Es(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Le,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=qd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][u]);let m=qd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function qd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new xe(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let y=h.getComponent(u,m);o.setComponent(u+d,m,y)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var $r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},P_=new vs(-1,1,1,-1,0,1),bu=class extends Le{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}},I_=new bu,As=class{constructor(t){this._mesh=new we(I_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,P_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var qr=class extends Kn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ss.clone(t.uniforms),this.material=new ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new As(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var oo=class extends Kn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Lc=class extends Kn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Dc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Tt);this._width=n.width,this._height=n.height,e=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qr($r),this.copyPass.material.blending=ni,this.timer=new Va}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}oo!==void 0&&(a instanceof oo?n=!0:a instanceof Lc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Nc=class extends Kn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new te}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Yd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Yr=class i extends Kn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Tt(t.x,t.y):new Tt(256,256),this.clearColor=new te(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new tn(r,a,{type:pn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new tn(r,a,{type:pn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new tn(r,a,{type:pn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Yd;this.highPassUniforms=ss.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ze({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Tt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ss.clone($r.uniforms),this.blendMaterial=new ze({uniforms:this.copyUniforms,vertexShader:$r.vertexShader,fragmentShader:$r.fragmentShader,premultipliedAlpha:!0,blending:Ms,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new te,this._oldClearAlpha=1,this._basic=new vi,this._fsQuad=new As(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Tt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new ze({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Tt(.5,.5)},direction:{value:new Tt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ze({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Yr.BlurDirectionX=new Tt(1,0);Yr.BlurDirectionY=new Tt(0,1);var lo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Uc=class extends Kn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ss.clone(lo.uniforms),this.material=new Dr({name:lo.name,uniforms:this.uniforms,vertexShader:lo.vertexShader,fragmentShader:lo.fragmentShader}),this._fsQuad=new As(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},be.getTransfer(this._outputColorSpace)===Ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ga?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$a?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ya?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Js?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===qa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var co=(i,t,e=0,n=0,s=0)=>(i.translate(e,n,s),i.setAttribute("aPart",new xe(new Float32Array(i.attributes.position.count).fill(t),1)),i),de=(i,t,e,n,s=0,r=0,a=0,o=0)=>{let l=new In(i,t,e);return o&&l.rotateZ(o),co(l,n,s,r+t/2,a)},Xe=(i,t,e,n=0,s=0,r=0,a=i,o=10)=>co(new Ui(a,i,t,o),e,n,s+t/2,r),Fc=(i,t,e,n=0,s=0,r=0,a=10)=>co(new ks(i,t,a),e,n,s+t/2,r),Zd=(i,t,e,n,s)=>co(new ns(i,8,6),t,e,n,s);function Jd(){let i={},t=(e,n,s={})=>{i[e]={geo:Es(n),...s},n.forEach(r=>r.dispose())};return t("util",[Xe(.035,1.25,1,0,0,0,.02),de(.07,.06,.16,1,0,1.22,.02),de(.3,.12,.22,1,-.28,0,.2),de(.3,.02,.22,2,-.28,.12,.2),Xe(.012,.3,4,-.38,.12,.26,.012,5),Xe(.012,.3,4,-.2,.12,.14,.012,5)],{rotor:[0,1.25,.11]}),t("oil",[Xe(.2,.26,1,-.2,0,.15),Xe(.205,.03,2,-.2,.19,.15),Xe(.15,.2,1,.18,0,.22),Xe(.155,.025,2,.18,.14,.22),Xe(.05,.85,1,.1,0,-.15),Xe(.06,.02,2,.1,.3,-.15),Xe(.06,.02,2,.1,.6,-.15),de(.3,.02,.03,4,-.05,.3,-.15),Xe(.02,1.15,4,-.3,0,-.2,.015,6),Fc(.06,.22,3,-.3,1.15,-.2,7)]),t("agro",[...[-.3,0,.3].flatMap(e=>[Xe(.14,.5,1,e,0,0),Fc(.14,.12,1,e,.5,0),Xe(.145,.03,2,e,.36,0)]),de(.06,.78,.06,4,.15,0,-.2),de(.5,.025,.04,4,0,.74,-.1,.12)]),t("ind",[de(.8,.22,.45,1),de(.8,.05,.01,5,0,.09,.23),...[-.27,0,.27].map(e=>de(.27,.09,.45,1,e,.2,0,.38)),Xe(.04,.72,1,.28,0,-.3,.03),Xe(.036,.04,6,.28,.7,-.3),Xe(.04,.6,1,.12,0,-.3,.03),Xe(.036,.04,6,.12,.58,-.3)],{smoke:[[.28,.76,-.3],[.12,.64,-.3]]}),t("base",[de(.6,.3,.5,1,-.1),de(.6,.03,.5,2,-.1,.3),de(.55,.03,.06,4,-.05,.42,.3,.5),Xe(.05,1,1,.32,0,-.15,.035),Xe(.04,.04,6,.32,.98,-.15),Xe(.05,.8,1,.42,0,.1,.035),Xe(.04,.04,6,.42,.78,.1),Fc(.16,.14,4,-.38,0,.32,6)],{smoke:[[.32,1.05,-.15],[.42,.85,.1]]}),t("log",[...[-.22,0,.22].flatMap((e,n)=>[0,.1].flatMap((s,r)=>[de(.2,.09,.09,(n+r)%2?2:1,e,0,s),...(n+r)%3?[de(.2,.09,.09,(n+r)%2?1:2,e,.09,s)]:[]])),de(.03,.5,.03,4,-.38,0,.05),de(.03,.5,.03,4,.38,0,.05),de(.84,.035,.05,4,0,.5,.05),de(.06,.05,.07,1,.1,.45,.05),de(.03,.03,.03,6,0,.535,.05)]),t("saude",[de(.7,.3,.4,5),de(.72,.02,.42,1,0,.3),de(.06,.26,.03,2,0,.36,.1),de(.2,.07,.03,2,0,.455,.1),Xe(.11,.01,2,.22,.32,-.05)]),t("tech",[de(.6,.2,.4,1,.05,0,.1),de(.6,.02,.41,2,.05,.07,.1),de(.6,.02,.41,2,.05,.14,.1),Xe(.03,1.3,4,-.28,0,-.2,.008,6),Zd(.06,1,-.22,.9,-.2),Zd(.05,1,-.34,1.05,-.2),de(.03,.03,.03,6,-.28,1.3,-.2)]),t("cons",[de(.8,.2,.5,1),de(.82,.05,.52,2,0,.14),de(.24,.12,.02,5,0,0,.26),de(.1,.04,.1,4,-.2,.2),de(.1,.04,.1,4,.2,.2)]),t("imob",[de(.35,.42,.3,5,.3,0,.1),de(.36,.02,.31,1,.3,.42,.1),de(.36,.02,.31,1,.3,.21,.1),de(.035,1.2,.035,4,-.15),de(.9,.03,.03,4,.05,1.2),de(.12,.07,.06,1,-.33,1.17),de(.006,.4,.006,4,.35,.8),de(.03,.03,.03,6,.49,1.23)]),t("fin",[Xe(.13,.03,2),Fc(.1,.8,4,0,.03,0,8),de(.03,.03,.03,6,0,.83)],{top:!0}),i}function Kd(){let i=[0,1,2].map(n=>{let s=new In(.04,.5,.012);return s.translate(0,.25,0),s.rotateZ(n*Math.PI*2/3),s}),t=new ns(.035,8,6),e=Es([...i,t]);return[...i,t].forEach(n=>n.dispose()),e}function Su(i){let t=(r,a,o)=>co(new In(r,a,r),0,0,o+a/2,0),e=i?.72:1,n=i?[t(1,.66,0),t(.72,.34,.66)]:[t(1,1,0)];n.push(de(1.1,.03,1.1,1),de(.26*e,.03,.2*e,1,-.2*e,1,.15*e),de(.16*e,.045,.16*e,4,.22*e,1,-.2*e),de(.3*e,.018,.12*e,4,.1*e,1,.3*e)),i&&n.push(Xe(.012,.12,4,.2*e,1,.2*e,.006,5),de(.2,.02,.1,1,-.3,.66,.42),de(.1,.03,.1,4,.42,.66,-.3));let s=Es(n);return n.forEach(r=>r.dispose()),s}function jd(){let i=new Ui(.018,.024,.2,6);i.translate(0,.1,0);let t=new ns(.2,12,9);t.scale(1,1.08,1),t.translate(0,.36,0);let e=(n,s,r,a)=>{let o=n.attributes.position.count,l=new Float32Array(o*3);for(let c=0;c<o;c++)l.set([s,r,a],c*3);return n.setAttribute("color",new xe(l,3)),n};return Es([e(i,.62,.56,.5),e(t,1,1,1)])}var sn=(i,t,e)=>Math.max(t,Math.min(e,i)),ho=(i,t,e)=>{let n=sn((e-i)/(t-i),0,1);return n*n*(3-2*n)},Qd=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,bi=(i,t,e)=>i+(t-i)*e,Si=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},tp=i=>i.t==="c"?i.mc?1.8+1.25*Math.log10(1+i.mc/1e8):1.8:i.t==="s"?1.2:i.v?1+.8*Math.log10(1+i.v/1e8):1;function L_(i){return i.t==="c"?i.mc?"tower":"block":i.t==="s"?"sub":i.t==="p"?"pawn":i.c==="fund"||i.c==="pen"||i.c==="gov"?"inv":"tile"}var ep=`float hash21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x), mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y); }`;function np(i,t,e={}){let{palette:n,accent:s="#3cf0b4",reduced:r=!1,fixedQuality:a=!1}=e,o=t.nodes.length,l=t.mapa,c=Math.min(innerWidth,innerHeight)<700,h=new te(s),d=100/l.W,u=100,f=l.H*d,m=R=>R*d-u/2,y=R=>R*d-f/2,g=.02,p=1.6,M={},E=(R,$=new te)=>($.set(R).getHSL(M),$.setHSL(M.h,Math.min(1,M.s*1.2+.06),M.l*.86)),_=new Rc({canvas:i,antialias:!0,powerPreference:"high-performance"}),b=Math.min(devicePixelRatio||1,c?2:1.75);_.setPixelRatio(b),_.toneMapping=Js,_.toneMappingExposure=1,_.outputColorSpace=Tn,_.shadowMap.enabled=!0,_.shadowMap.type=Ys,_.shadowMap.autoUpdate=!1;let S=3,L=new te(13886702),x=new ts;x.background=L,x.fog=new Bs(L,160,520);let A=new fn(32,1,.3,1600),F=new Ts(_);x.environment=F.fromScene(new Xr,.04).texture,x.environmentIntensity=.3;let W=new _s(16773597,2.75);W.position.set(-75,105,62),W.castShadow=!0,W.shadow.mapSize.set(c?2048:4096,c?2048:4096),Object.assign(W.shadow.camera,{left:-u*.66,right:u*.66,top:f*.85,bottom:-f*.85,near:10,far:360}),W.shadow.bias=-3e-4,W.shadow.normalBias=.035,W.shadow.radius=5,W.shadow.blurSamples=16,x.add(W,W.target),x.add(new $s(14083319,10132100,.66));let B=null,Z=null,k=null;try{let R=new tn(4,4,{type:pn,samples:c?2:4});B=new Dc(_,R),B.setPixelRatio(b),B.addPass(new Nc(x,A)),Z=new Yr(new Tt(256,256),.06,.4,1.1),B.addPass(Z),k=new qr({uniforms:{tDiffuse:{value:null},uAmt:{value:0},uRes:{value:new Tt(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uAmt; uniform vec2 uRes; varying vec2 vUv;
        void main(){ float k = smoothstep(0.16, 0.5, abs(vUv.y - 0.5)) * uAmt; if (k < 0.01) { gl_FragColor = texture2D(tDiffuse, vUv); return; }
          vec4 c = vec4(0.0); for (int i = 0; i < 12; i++) { float a = float(i) * 2.39996, r = sqrt((float(i) + 0.5) / 12.0) * k; c += texture2D(tDiffuse, vUv + vec2(cos(a), sin(a)) * r / uRes); }
          gl_FragColor = c / 12.0; }`}),B.addPass(k),B.addPass(new Uc)}catch{B=null}let K=new Array(o),j=new Float32Array(o),ot=new Float32Array(o),lt=new Float32Array(o),rt=new Float32Array(o),ct=new Float32Array(o),vt=new Float32Array(o),yt=new Float32Array(o),dt=new Float32Array(o),ce=Uint8Array.from(l.sky||new Array(o).fill(0)),ie=new Uint8Array(o),_e=new Uint8Array(o),ht=12.5,mt=3.1;for(let R=0;R<o;R++){let $=t.nodes[R];K[R]=L_($),_e[R]=K[R]==="inv"?1:0,j[R]=m(l.x[R]),lt[R]=y(l.y[R]);let nt=l.lot&&l.lot[R]||0;if(ie[R]=nt>0?1:0,dt[R]=nt*d,ie[R]){let it=tp($)*1.24*d,xt=Si(R);vt[R]=it*(.86+.3*xt),yt[R]=it*(1.14-.3*xt),rt[R]=it*.6,K[R]==="tower"?ct[R]=.9+10.2*Math.pow(sn(Math.log10($.mc/2e8)/Math.log10(4e3),0,1),1.5):ct[R]=it*(K[R]==="block"?.42+.3*Si(R+7):.3),ot[R]=g}else ce[R]?(rt[R]=tp($)*.5*d+.12,ct[R]=rt[R]*2.3,ot[R]=ht+(ce[R]-1)*mt+(Si(R)-.5)*1.4):(rt[R]=(.5+.1*Math.min(4,Math.log10(1+($.v||0)/1e8)))*d,ct[R]=rt[R]*(K[R]==="tile"?1.3:2.1),ot[R]=g)}let Nt=R=>ot[R]+ct[R],O=l.plates.map((R,$)=>({...R,j:$,col:E(n.sector(R.c)),x0:m(R.x0),x1:m(R.x1),z0:y(R.y0),z1:y(R.y1)})),ut=(R,$)=>{let nt=1e9;for(let it of O){let xt=Math.abs(R-(it.x0+it.x1)/2)-(it.x1-it.x0)/2,Dt=Math.abs($-(it.z0+it.z1)/2)-(it.z1-it.z0)/2;nt=Math.min(nt,Math.hypot(Math.max(xt,0),Math.max(Dt,0))+Math.min(Math.max(xt,Dt),0))}return nt},St=20261126,Et=()=>{St|=0,St=St+1831565813|0;let R=Math.imul(St^St>>>15,1|St);return R=R+Math.imul(R^R>>>7,61|R)^R,((R^R>>>14)>>>0)/4294967296},Bt=[],Pt=[],Lt=[];for(let R=0;R<o;R++)ie[R]&&Lt.push(R);for(let R of O)for(let $=Math.ceil((R.x0+.25)/p);($+1)*p<R.x1-.25;$++)for(let nt=Math.ceil((R.z0+.25)/p);(nt+1)*p<R.z1-.25;nt++){let it=($+.5)*p,xt=(nt+.5)*p,Dt=!0;for(let Rt of Lt){let Jt=dt[Rt]+.85;if(Math.abs(j[Rt]-it)<Jt&&Math.abs(lt[Rt]-xt)<Jt&&Math.hypot(j[Rt]-it,lt[Rt]-xt)<Jt){Dt=!1;break}}if(!Dt)continue;let It=Et()<.12;Bt.push([it,xt,It]);let wt=6+Math.floor(Et()*6);for(let Rt=0;Rt<wt;Rt++){let Jt=it+(Et()-.5)*1.1,Ee=xt+(Et()-.5)*1.1;It&&Math.hypot(Jt-it,Ee-xt)<.36||Pt.push([Jt,Ee,.55+Et()*.4])}}for(let R of Lt){if(dt[R]<.45)continue;let $=dt[R]*.95,nt=Math.min(14,Math.floor(Math.PI*$/.42));for(let it=0;it<nt;it++){let xt=Math.PI+(it+.5)/nt*Math.PI;Pt.push([j[R]+Math.cos(xt)*$,lt[R]+Math.sin(xt)*$,.5+Et()*.2])}}for(let R=-u/2-.6;R<=u/2+.6;R+=.46)for(let $=-f/2-.6;$<=f/2+.6;$+=.46){let nt=ut(R,$);nt>.62&&nt<1.2&&Et()<.8&&Pt.push([R+(Et()-.5)*.12,$+(Et()-.5)*.12,.6+Et()*.25])}for(let R=0;R<(c?1500:2800);R++){let $=(Et()-.5)*(u+10),nt=(Et()-.5)*(f+9);ut($,nt)<1.3||Si(Math.floor($/3)*31+Math.floor(nt/3)*17)<.42||Pt.push([$,nt,.6+Et()*.7])}let Ft=(()=>{let R=c?2048:4096,$=Math.round(R*l.H/l.W),nt=R/u,it=document.createElement("canvas");it.width=R,it.height=$;let xt=it.getContext("2d");xt.fillStyle="#000",xt.fillRect(0,0,R,$),xt.globalCompositeOperation="lighter";let Dt=Rt=>(Rt+u/2)*nt,It=Rt=>(Rt+f/2)*nt;for(let[Rt,Jt,Ee]of Bt)xt.fillStyle="#f00",xt.beginPath(),xt.roundRect(Dt(Rt-.6),It(Jt-.6),1.2*nt,1.2*nt,.14*nt),xt.fill(),Ee&&(xt.fillStyle="#00f",xt.beginPath(),xt.ellipse(Dt(Rt),It(Jt),.34*nt,.26*nt,Rt,0,6.2832),xt.fill());xt.fillStyle="#0f0";for(let Rt of Lt)xt.beginPath(),xt.arc(Dt(j[Rt]),It(lt[Rt]),dt[Rt]*.93*nt,0,6.2832),xt.fill();let wt=new es(it);return wt.anisotropy=_.capabilities.getMaxAnisotropy(),wt.generateMipmaps=!0,wt.minFilter=yi,wt})(),jt=(()=>{let $=Math.round(2048*l.H/l.W),nt=2048/u,it=document.createElement("canvas");it.width=2048,it.height=$;let xt=it.getContext("2d");xt.fillStyle="#000",xt.fillRect(0,0,2048,$),xt.fillStyle="#fff",xt.shadowColor="#fff";for(let It of Lt)xt.shadowBlur=Math.max(4,(.16+ct[It]*.05)*nt),xt.fillRect((j[It]-vt[It]/2+u/2)*nt,(lt[It]-yt[It]/2+f/2)*nt,vt[It]*nt,yt[It]*nt);let Dt=new es(it);return Dt.generateMipmaps=!0,Dt.minFilter=yi,Dt})(),ee=O.length,Me={uMask:{value:Ft},uAo:{value:jt},uTime:{value:0},uSize:{value:new Tt(u,f)},uLand:{value:new Tt(u/2+9,f/2+7)},uRects:{value:Array.from({length:12},(R,$)=>{let nt=O[$%ee];return new He((nt.x0+nt.x1)/2,(nt.z0+nt.z1)/2,(nt.x1-nt.x0)/2,(nt.z1-nt.z0)/2)})},uCols:{value:Array.from({length:12},(R,$)=>{let nt=O[$%ee].col;return new U(nt.r,nt.g,nt.b)})},uFocus:{value:new He(0,0,0,0)},uFocusK:{value:0},uDim:{value:0}},ne=new dn({color:16777215,roughness:.94,metalness:0,envMapIntensity:.6});ne.onBeforeCompile=R=>{Object.assign(R.uniforms,Me),R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),R.fragmentShader=R.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWp; uniform sampler2D uMask; uniform sampler2D uAo; uniform float uTime; uniform vec2 uSize; uniform vec2 uLand; uniform vec4 uRects[12]; uniform vec3 uCols[12];
        uniform vec4 uFocus; uniform float uFocusK; uniform float uDim;
        float gWater = 0.0;
        ${ep}
        float sdRound(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 p = vWp.xz;
        float aa = fwidth(p.x) * 1.2;
        float n1 = vnoise(p * 0.3), n2 = vnoise(p * 1.7);
        vec2 bq = abs(p) - uLand;
        float land = length(max(bq, 0.0)) + min(max(bq.x, bq.y), 0.0) - 4.0 + vnoise(p * 0.07 + 3.1) * 7.0 + n1 * 1.5;
        float d = 1e5; vec3 sec = uCols[0];
        for (int k = 0; k < ${ee}; k++) { float dk = sdRound(p - uRects[k].xy, uRects[k].zw, 0.6); if (dk < d) { d = dk; sec = uCols[k]; } }
        vec2 muv = vec2(p.x / uSize.x + 0.5, 0.5 - p.y / uSize.y);
        float n3 = vnoise(p * 9.0);
        float far = 1.0 - smoothstep(0.012, 0.045, aa);
        vec3 lawn = mix(vec3(0.4, 0.6, 0.29), vec3(0.5, 0.67, 0.34), n2) * (0.96 + 0.08 * n3);
        vec3 parkC = mix(vec3(0.27, 0.48, 0.22), vec3(0.35, 0.55, 0.27), n2) * (0.96 + 0.08 * n3);
        vec3 asphalt = vec3(0.27, 0.28, 0.3) * (0.95 + 0.1 * n3);
        vec3 walkC = vec3(0.86, 0.85, 0.82);
        vec3 waterC = mix(vec3(0.36, 0.7, 0.76), vec3(0.26, 0.58, 0.7), n2);
        vec3 col;
        if (land > 0.0) {
          // mar: turquesa claro na beira, azul fundo ao largo, com ondula\xE7\xE3o e a espuma batendo na praia
          col = mix(vec3(0.42, 0.8, 0.8), vec3(0.1, 0.4, 0.6), smoothstep(0.0, 9.0, land));
          col += vec3(0.05) * smoothstep(0.55, 0.9, vnoise(p * 1.1 + vec2(uTime * 0.18, uTime * 0.12))) * far;
          float wave = land + 0.1 * sin(uTime * 0.7 + p.x * 0.6 + p.y * 0.45);
          col = mix(col, vec3(0.98), (1.0 - smoothstep(0.0, 0.16 + aa, wave)) * 0.9);
          col = mix(col, vec3(0.95), (smoothstep(0.5, 0.56, wave) - smoothstep(0.56, 0.68 + aa, wave)) * 0.35 * far);
          gWater = 1.0;
        } else if (d < 0.0) {
          // dentro do bairro: ruas com faixas e carros, cal\xE7adas, pra\xE7as com anel, gramados, parques e lagos
          vec4 m = texture2D(uMask, muv);
          vec2 gq = abs(fract(p / ${p.toFixed(1)} + 0.5) - 0.5) * ${p.toFixed(1)};
          float sd = min(gq.x, gq.y), along = gq.x < gq.y ? p.y : p.x;
          float road = 1.0 - smoothstep(0.085 - aa, 0.085 + aa, sd);
          float walk = 1.0 - smoothstep(0.135 - aa, 0.135 + aa, sd);
          float park = smoothstep(0.4, 0.6, m.r), pond = smoothstep(0.42, 0.58, m.b);
          float plaza = smoothstep(0.42, 0.58, m.g);
          float ring = smoothstep(0.3, 0.42, m.g) * (1.0 - smoothstep(0.5, 0.62, m.g));
          col = mix(lawn, parkC, park);
          col = mix(col, mix(vec3(0.93, 0.92, 0.89), sec, 0.05) * (0.97 + 0.03 * n3), plaza);
          col = mix(col, waterC, pond);
          col = mix(col, vec3(0.9, 0.86, 0.72), (smoothstep(0.3, 0.42, m.b) - pond) * 0.9);
          gWater = pond * (1.0 - walk);
          col = mix(col, mix(sec, vec3(0.55), 0.3), ring * 0.5 * (1.0 - pond));
          col = mix(col, walkC, walk);
          col = mix(col, asphalt, road);
          col = mix(col, vec3(0.95), road * far * 0.85 * step(0.5, fract(along * 3.0)) * (1.0 - smoothstep(0.004, 0.009, sd)));
          // faixa de pedestres perto dos cruzamentos
          float mx = max(gq.x, gq.y);
          float cross = road * far * step(mx, 0.21) * step(0.15, mx) * step(0.5, fract((gq.x < gq.y ? p.x : p.y) * 22.0));
          col = mix(col, vec3(0.95), cross * 0.85);
          // carros: carroceria arredondada com para-brisa e sombra, cada pista num sentido
          if (far > 0.01) for (int ax = 0; ax < 2; ax++) {
            vec2 pq = ax == 0 ? p : p.yx;
            float lane = floor(pq.y / ${p.toFixed(1)} + 0.5), off = pq.y - lane * ${p.toFixed(1)}, sideL = sign(off);
            float lc = abs(off) - 0.042;
            float sp = (0.3 + 0.4 * hash21(vec2(lane, float(ax) + 3.0))) * sideL;
            float uu = (pq.x - uTime * sp) / 0.52, fx = (fract(uu) - 0.5) * 0.52;
            float hc = hash21(vec2(floor(uu), lane * 7.0 + sideL + float(ax) * 13.0));
            if (hc < 0.7 || mx < 0.2) continue;
            vec2 cq = abs(vec2(fx, lc)) - vec2(0.062, 0.02) + 0.014;
            float body = 1.0 - smoothstep(-0.002, 0.004, length(max(cq, 0.0)) + min(max(cq.x, cq.y), 0.0) - 0.014);
            vec2 sq = abs(vec2(fx - 0.012, lc - 0.012)) - vec2(0.062, 0.02) + 0.014;
            float shade = 1.0 - smoothstep(-0.004, 0.02, length(max(sq, 0.0)) + min(max(sq.x, sq.y), 0.0) - 0.014);
            vec3 cc = hc > 0.96 ? vec3(0.8, 0.14, 0.12) : hc > 0.93 ? vec3(0.95, 0.76, 0.16) : hc > 0.89 ? vec3(0.16, 0.34, 0.66) : hc > 0.82 ? vec3(0.95, 0.95, 0.94) : hc > 0.76 ? vec3(0.7, 0.72, 0.75) : vec3(0.18, 0.19, 0.22);
            float cabin = step(abs(fx + sign(sp) * 0.006), 0.03) * step(abs(lc), 0.014);
            cc = mix(cc, vec3(0.12, 0.17, 0.23), cabin * 0.85);
            col = mix(col, col * 0.55, shade * road * far * 0.8);
            col = mix(col, cc, body * road * far);
          }
          // a borda do bairro: cal\xE7ada e um filete na cor do setor
          float e = -d;
          col = mix(col, walkC, 1.0 - smoothstep(0.16, 0.16 + aa, e));
          col = mix(col, sec, (smoothstep(0.035, 0.035 + aa, e) - smoothstep(0.11 + 2.0 * aa, 0.11 + 3.0 * aa, e)) * 0.92);
          col *= 1.0 - 0.45 * texture2D(uAo, muv).r;
        } else {
          // fora dos bairros: a avenida que contorna cada um, canteiros e, al\xE9m deles, campo, mata e a praia
          vec3 country = mix(lawn * 0.97, vec3(0.3, 0.5, 0.28), smoothstep(0.42, 0.68, vnoise(p * 0.2 + 7.0)));
          float rd = 1.0 - smoothstep(0.44 - aa, 0.44 + aa, d);
          col = mix(country, asphalt, rd);
          col = mix(col, vec3(0.95), rd * far * 0.85 * (1.0 - smoothstep(0.005, 0.011, abs(d - 0.23))) * step(0.5, fract((p.x + p.y) * 2.1)));
          // praia: areia clara, mais escura e molhada junto \xE0 \xE1gua
          float sand = smoothstep(-2.0, -1.2, land);
          col = mix(col, mix(vec3(0.95, 0.9, 0.76), vec3(0.8, 0.74, 0.6), smoothstep(-0.5, 0.0, land)) * (0.97 + 0.05 * n3), sand);
        }
        // setor em foco e escolha: o resto esmaece para um cinza claro
        float inF = step(uFocus.x, p.x) * step(p.x, uFocus.z) * step(uFocus.y, p.y) * step(p.y, uFocus.w);
        float dk = max(uDim, uFocusK * (1.0 - inF));
        col = mix(col, vec3(dot(col, vec3(0.3, 0.59, 0.11))) * 0.82, 0.9 * dk);
        diffuseColor.rgb = col;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.1, gWater);`)};let he=new we(new ei(1800,1800),ne);he.rotation.x=-Math.PI/2,he.receiveShadow=!0,x.add(he);let H={uRise:{value:1.4},uDim:{value:0},uTime:{value:0},uAcc:{value:h},uFocus:{value:-1}},ae=Array.from({length:o},()=>[]),oe=[],I="attribute float aHL; attribute float aVis; attribute float aDelay; attribute float aPlate; attribute float aSeed; attribute vec3 aSize; attribute float aLit; attribute float aPart; varying float vPart; uniform float uRise; uniform float uTime; uniform float uFocus; varying vec3 vOp; varying vec3 vOn; varying vec3 vSize; varying float vHL; varying float vOther; varying float vSeed; varying float vLit;",v=`varying float vPart; varying vec3 vOp; varying vec3 vOn; varying vec3 vSize; varying float vHL; varying float vOther; varying float vSeed; varying float vLit; uniform float uDim; uniform float uTime; uniform vec3 uAcc; float gRough = -1.0;
${ep}`;function Y(R,$,nt,it,xt,Dt){let It=Math.max(1,it.length),wt=new Float32Array(It),Rt=new Float32Array(It).fill(1),Jt=new Float32Array(It),Ee=new Float32Array(It),Ne=new Float32Array(It),Ve=new Float32Array(It*3),nn=new Float32Array(It),Qe=(wn,qi,Ep=1)=>$.setAttribute(wn,new fs(qi,Ep));Qe("aHL",wt),Qe("aVis",Rt),Qe("aDelay",Jt),Qe("aPlate",Ee),Qe("aSeed",Ne),Qe("aSize",Ve,3),Qe("aLit",nn);let $e=wn=>(Object.assign(wn.uniforms,H),wn.vertexShader=wn.vertexShader.replace("#include <common>",`#include <common>
${I}`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float rise = smoothstep(aDelay, aDelay + 0.35, uRise);
          vPart = aPart; vOp = position; vOn = normal; vSize = aSize; vHL = aHL; vSeed = aSeed; vLit = aLit;
          vOther = uFocus >= 0.0 && abs(uFocus - aPlate) > 0.5 ? 1.0 : 0.0;
          ${Dt==="spin"?"float sa = uTime * (1.1 + 1.4 * aSeed) + aSeed * 20.0; transformed.xy = mat2(cos(sa), -sin(sa), sin(sa), cos(sa)) * transformed.xy; transformed *= max(0.001, rise * aVis);":Dt==="bld"?"transformed.y *= max(0.001, rise * aVis); transformed.xz *= aVis;":"transformed *= max(0.001, rise * aVis); transformed.y += aLit * 0.22 * sin(uTime * 0.9 + aSeed * 40.0) / max(0.05, aSize.x);"}`),wn);nt.onBeforeCompile=wn=>{$e(wn),wn.fragmentShader=wn.fragmentShader.replace("#include <common>",`#include <common>
${v}`).replace("#include <color_fragment>",`#include <color_fragment>
          float top = step(0.5, vOn.y);
          float isHL = step(0.01, vHL);
          float dimK = max(uDim * (1.0 - isHL), 0.85 * vOther * (1.0 - isHL));
          vec3 sec = diffuseColor.rgb;
          vec3 glow = vec3(0.0);
          float sdv = floor(vSeed * 997.0) / 997.0;
          ${Dt==="bld"?`
          vec3 concrete = mix(vec3(0.94, 0.935, 0.92), sec, 0.03);
          if (vPart > 0.5) {
            // detalhes e a pe\xE7a do setor: concreto, tinta do setor, chama, metal, vidro, luz de obst\xE1culo
            if (vPart < 1.5) diffuseColor.rgb = concrete * (0.86 + 0.14 * top);
            else if (vPart < 2.5) { diffuseColor.rgb = sec; gRough = 0.5; }
            else if (vPart < 3.5) { float fl = 0.72 + 0.28 * sin(uTime * 13.0 + vSeed * 50.0) * sin(uTime * 7.3 + vOp.y * 9.0); diffuseColor.rgb = vec3(1.0, 0.5, 0.1); glow = vec3(1.0, 0.42, 0.08) * 1.6 * fl; }
            else if (vPart < 4.5) { diffuseColor.rgb = vec3(0.56, 0.58, 0.62); gRough = 0.4; }
            else if (vPart < 5.5) {
              vec2 q = vec2((vOp.x + vOp.z) * 13.0, vOp.y * 12.0); vec2 f = fract(q);
              float mk = smoothstep(0.1, 0.2, f.x) * smoothstep(0.9, 0.8, f.x) * smoothstep(0.2, 0.32, f.y) * smoothstep(0.86, 0.74, f.y) * (1.0 - top);
              float px = max(fwidth(q.x), fwidth(q.y));
              mk = mix(mk, 0.45 * (1.0 - top), smoothstep(0.4, 1.0, px));
              diffuseColor.rgb = mix(concrete, mix(vec3(0.4, 0.5, 0.6), vec3(0.62, 0.73, 0.82), hash21(floor(q) + sdv * 17.0)), mk);
              gRough = mix(0.8, 0.15, mk);
            } else { diffuseColor.rgb = vec3(0.7, 0.05, 0.04); glow = vec3(1.0, 0.1, 0.06) * 1.6 * step(0.0, sin(uTime * 2.6 + vSeed * 40.0)); }
            glow += uAcc * vHL * vHL * 0.25;
          } else {
            // fachada: cortina de vidro ou grelha de concreto com janelas; faixa do setor no alto; cobertura de brita
            float side = abs(vOn.x) > 0.5 ? 1.0 : 0.0;
            float fw = mix(vSize.x, vSize.z, side);
            float along = mix(vOp.x, vOp.z, side) + 0.5;
            float hgt = vOp.y * vSize.y;
            float style = hash21(vec2(sdv * 91.0, 3.0));
            float nx = max(3.0, floor(fw / (style < 0.6 ? 0.06 : 0.085))), ny = max(2.0, floor(vSize.y / 0.1));
            vec2 q = vec2(along * nx, vOp.y * ny);
            vec2 id = floor(q), f = fract(q);
            float face = floor(vOn.x + 0.5) + floor(vOn.z + 0.5) * 2.0;
            float hp = hash21(id + sdv * 71.0 + face * 13.0);
            float px = max(fwidth(q.x), fwidth(q.y)), lod = smoothstep(0.35, 0.9, px);
            // vidro azul-acinzentado, mais claro no alto (reflete o c\xE9u), com um toque da cor do setor
            vec3 glass = mix(vec3(0.2, 0.31, 0.43), vec3(0.5, 0.65, 0.78), smoothstep(0.0, 1.0, vOp.y) * 0.7 + hp * 0.3);
            glass = mix(glass, sec, 0.1);
            vec3 wall; float gk;
            if (style < 0.6) {
              // cortina de vidro: montantes e lajes em filetes brancos
              float frame = max(1.0 - smoothstep(0.02, 0.05, min(f.x, 1.0 - f.x)), 1.0 - smoothstep(0.06, 0.1, f.y));
              gk = mix(1.0 - frame, 0.86, lod);
              wall = mix(concrete, glass, gk);
            } else {
              // fachada branca com janelas recuadas
              float win = smoothstep(0.2, 0.26, f.x) * smoothstep(0.8, 0.74, f.x) * smoothstep(0.22, 0.3, f.y) * smoothstep(0.82, 0.74, f.y);
              gk = mix(win, 0.36, lod);
              wall = mix(concrete, glass * 0.62, gk);
            }
            float crown = smoothstep(vSize.y - 0.075, vSize.y - 0.065, hgt);
            wall = mix(wall, sec, crown);
            wall *= mix(0.8, 1.0, smoothstep(0.0, 0.7, hgt));
            float edge = max(abs(vOp.x), abs(vOp.z)) * 2.0 / (abs(vOp.x) > 0.37 || abs(vOp.z) > 0.37 || vOp.y < 0.99 ? 1.0 : 0.72);
            float rim = smoothstep(0.92, 0.95, edge);
            vec3 roof = mix(mix(vec3(0.9, 0.89, 0.87), sec, 0.3), vec3(0.97), rim);
            diffuseColor.rgb = mix(wall, roof, top);
            gRough = mix(mix(0.8, 0.12, gk * (1.0 - crown)), 0.9, top);
            glow = uAcc * vHL * vHL * (0.1 + 1.0 * crown * (1.0 - top) + 0.8 * rim * top + 0.15 * top) * (0.9 + 0.1 * sin(uTime * 3.0));
          }`:`
          // pe\xE7as pequenas: figuras foscas na cor do tipo
          diffuseColor.rgb = sec * (0.82 + 0.18 * smoothstep(-0.3, 1.0, vOn.y));
          glow = sec * 0.1 + uAcc * vHL * vHL * 0.8 + sec * isHL * 0.25;`}
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11))) * 0.86, 0.92 * dimK);
          glow *= 1.0 - 0.9 * dimK;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
if (gRough >= 0.0) roughnessFactor = gRough;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += glow;`)};let Be=new ds($,nt,It);Be.customDepthMaterial=new Xs({depthPacking:Sc}),Be.customDepthMaterial.onBeforeCompile=wn=>$e(wn);let bo=new Pe,ea=new te,na=new U;return it.forEach((wn,qi)=>{ae[wn].push([Be,qi]),xt(wn,bo,ea,na),Be.setMatrixAt(qi,bo),Be.setColorAt(qi,ea),Ee[qi]=l.plate[wn],Ne[qi]=Si(wn*3+1),Ve.set([na.x,na.y,na.z],qi*3),nn[qi]=na.w||0}),Be.count=it.length,Be.instanceMatrix.needsUpdate=!0,Be.instanceColor&&(Be.instanceColor.needsUpdate=!0),Be.userData={name:R,idx:it,hl:wt,vis:Rt,delay:Jt,geo:$},Be.frustumCulled=!1,Dt!=="small"&&(Be.castShadow=!0,Be.receiveShadow=!0),x.add(Be),oe.push(Be),Be}let Q=new U,T=new Yn,N=new U,q=(R,$,nt,it)=>{$.compose(Q.set(j[R],g,lt[R]),T.identity(),N.set(vt[R],ct[R],yt[R]));let xt=t.nodes[R];E(xt.t==="c"?n.sector(xt.c):n.kind(xt),nt),it.set(vt[R],ct[R],yt[R]),it.w=0},D=()=>new dn({color:16777215,roughness:.7,metalness:0,envMapIntensity:2.2}),V=[],st=[];for(let R of Lt)(K[R]==="tower"&&ct[R]>3.2?V:st).push(R);Y("tall",Su(!0),D(),V,q,"bld"),Y("low",Su(!1),D(),st,q,"bld");let J=Jd(),pt=[],Mt=[];for(let[R,$]of Object.entries(J)){let nt=[];for(let it of Lt)t.nodes[it].t==="c"&&t.nodes[it].c===R&&(!$.top||K[it]==="tower"&&ct[it]>3.2)&&nt.push(it);nt.length&&Y(`prop-${R}`,$.geo,D(),nt,(it,xt,Dt,It)=>{let wt=(vt[it]+yt[it])/2,Rt=$.top?wt*.62:wt*(K[it]==="tower"?.95:.8),Jt=$.top?j[it]:j[it]+vt[it]/2+Rt*.52,Ee=$.top?g+ct[it]:g,Ne=$.top?lt[it]:lt[it]+yt[it]*.12;xt.compose(Q.set(Jt,Ee,Ne),T.identity(),N.set(Rt,Rt,Rt)),E(n.sector(R),Dt),It.set(Rt,Rt,Rt),It.w=0,$.rotor&&Mt.push([it,Jt+$.rotor[0]*Rt,Ee+$.rotor[1]*Rt,Ne+$.rotor[2]*Rt,Rt]);for(let Ve of $.smoke||[])pt.push([it,Jt+Ve[0]*Rt,Ee+Ve[1]*Rt,Ne+Ve[2]*Rt,Rt])},"bld")}if(Mt.length){let R=new Map(Mt.map($=>[$[0],$]));Y("rotor",Kd(),new dn({color:16777215,roughness:.5}),Mt.map($=>$[0]),($,nt,it,xt)=>{let Dt=R.get($);nt.compose(Q.set(Dt[1],Dt[2],Dt[3]),T.identity(),N.set(Dt[4],Dt[4],Dt[4])),it.setRGB(.95,.95,.95),xt.set(Dt[4],Dt[4],Dt[4]),xt.w=0},"spin")}let At={pawn:[],tile:[],inv:[]};for(let R=0;R<o;R++)ie[R]||At[K[R]==="pawn"?"pawn":K[R]==="inv"?"inv":"tile"].push(R);let Vt=(()=>{let R=new Ui(.42,.5,.2,9,1,!1);R.translate(0,.1,0);let $=new Ui(.16,.32,.55,9,1,!0);$.translate(0,.47,0);let nt=new ns(.24,9,6);nt.translate(0,.86,0);let it=Es([R,$,nt]);return it.scale(1,1.9,1),it})(),Zt=(()=>{let R=new In(1.3,1.3,1.3);return R.translate(0,.65,0),R})(),z=(()=>{let R=new Na(1,0);return R.scale(.82,1.15,.82),R.translate(0,1.15,0),R})(),_t=(R,$,nt,it)=>{let xt=rt[R];$.compose(Q.set(j[R],ot[R],lt[R]),T.identity(),N.set(xt,xt,xt)),E(n.kind(t.nodes[R]),nt),it.set(xt,xt,xt),it.w=ce[R]?1:0},et=R=>new dn({color:16777215,roughness:.4,metalness:.05,flatShading:!!R});Y("pawn",Vt,et(),At.pawn,_t,"small"),Y("tile",Zt,et(),At.tile,_t,"small"),Y("inv",z,et(!0),At.inv,_t,"small");let ft={uDim:{value:0},uRise:{value:1}};{let R=new dn({vertexColors:!0,roughness:.92}),$=It=>{Object.assign(It.uniforms,ft),It.vertexShader=It.vertexShader.replace("#include <common>",`#include <common>
uniform float uRise;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed *= smoothstep(0.55, 1.2, uRise);`)};R.onBeforeCompile=It=>{$(It),It.fragmentShader=It.fragmentShader.replace("#include <common>",`#include <common>
uniform float uDim;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11))) * 0.86, 0.9 * uDim);`)};let nt=new ds(jd(),R,Pt.length);nt.customDepthMaterial=new Xs({depthPacking:Sc}),nt.customDepthMaterial.onBeforeCompile=$;let it=new Pe,xt=new te,Dt=new ti;Pt.forEach(([It,wt,Rt],Jt)=>{let Ee=Si(Jt*5.1+2);it.compose(Q.set(It,g,wt),T.setFromEuler(Dt.set(0,Ee*6.28,0)),N.set(Rt,Rt*(.85+.4*Si(Jt+9)),Rt)),nt.setMatrixAt(Jt,it),Ee>.97?xt.setRGB(.95,.77,.2):Ee>.945?xt.setRGB(.93,.56,.68):Ee>.93?xt.setRGB(.62,.5,.82):xt.setHSL(.26+.06*Si(Jt*1.3),.36+.14*Si(Jt*2.1),.3+.1*Si(Jt*3.7)),nt.setColorAt(Jt,xt)}),nt.castShadow=!0,nt.receiveShadow=!0,nt.frustumCulled=!1,x.add(nt)}let bt=[];for(let R=0;R<o;R++)ie[R]||bt.push(R);let gt={uDim:{value:0},uPx:{value:1},uRise:{value:1},uTime:{value:0},uFocus:{value:-1}},Xt=(()=>{let R=bt.length,$=new Float32Array(R*3),nt=new Float32Array(R*3),it=new Float32Array(R),xt=new te,Dt=new Le;bt.forEach((Rt,Jt)=>{$.set([j[Rt],ot[Rt]+ct[Rt]*.55,lt[Rt]],Jt*3),E(n.kind(t.nodes[Rt]),xt),nt.set([xt.r,xt.g,xt.b],Jt*3),it[Jt]=ce[Rt]?rt[Rt]*5:rt[Rt]*2.4}),Dt.setAttribute("position",new xe($,3)),Dt.setAttribute("aCol",new xe(nt,3)),Dt.setAttribute("aSize",new xe(it,1)),Dt.setAttribute("aHL",new xe(new Float32Array(R),1)),Dt.setAttribute("aVis",new xe(new Float32Array(R).fill(1),1)),Dt.setAttribute("aSky",new xe(Float32Array.from(bt,Rt=>ce[Rt]?1:0),1)),Dt.setAttribute("aPlate",new xe(Float32Array.from(bt,Rt=>l.plate[Rt]),1));let It=new ze({uniforms:gt,transparent:!0,depthWrite:!1,vertexShader:`attribute vec3 aCol; attribute float aSize; attribute float aHL; attribute float aVis; attribute float aSky; attribute float aPlate; uniform float uPx; uniform float uDim; uniform float uRise; uniform float uTime; uniform float uFocus; varying vec3 vCol; varying float vA; varying float vSky;
        void main(){ vec3 p = position; p.y += aSky * 0.22 * sin(uTime * 0.9 + p.x * 3.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
          float px = aSize * uPx / -mv.z;
          gl_PointSize = clamp(px, aSky > 0.5 ? 6.0 : 2.2, 80.0) * aVis;
          float isHL = step(0.01, aHL);
          float other = uFocus >= 0.0 && abs(uFocus - aPlate) > 0.5 ? 1.0 : 0.0;
          float dimK = max(uDim, 0.8 * other) * (1.0 - isHL);
          // de perto a pe\xE7a aparece e a marca some
          float nearK = smoothstep(5.0, 16.0, px);
          vA = (aSky > 0.5 ? 0.3 + 0.3 * isHL : mix(0.9, 0.0, nearK)) * (1.0 - 0.8 * dimK) * aVis * smoothstep(0.7, 1.3, uRise);
          vCol = aCol; vSky = aSky; }`,fragmentShader:"varying vec3 vCol; varying float vA; varying float vSky; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = vSky > 0.5 ? pow(max(0.0, 1.0 - d), 1.6) : 1.0 - smoothstep(0.6, 1.0, d); gl_FragColor = vec4(mix(vCol, vec3(1.0), vSky * 0.5), a * vA); }"}),wt=new Cr(Dt,It);return wt.frustumCulled=!1,wt.renderOrder=2,x.add(wt),wt})(),Wt=new Int32Array(o).fill(-1);bt.forEach((R,$)=>{Wt[R]=$});let Ae={uTime:{value:0},uPx:{value:1},uDim:{value:0},uRise:{value:1}};if(pt.length&&!r){let $=pt.length*5,nt=new Float32Array($*3),it=new Float32Array($*2);pt.forEach((It,wt)=>{for(let Rt=0;Rt<5;Rt++)nt.set([It[1],It[2],It[3]],(wt*5+Rt)*3),it.set([(Rt+Si(wt))/5,It[4]],(wt*5+Rt)*2)});let xt=new Le;xt.setAttribute("position",new xe(nt,3)),xt.setAttribute("aPh",new xe(it,2));let Dt=new Cr(xt,new ze({uniforms:Ae,transparent:!0,depthWrite:!1,vertexShader:"attribute vec2 aPh; uniform float uTime; uniform float uPx; varying float vA; void main(){ float t = fract(uTime * 0.16 + aPh.x); vec3 p = position; p.y += t * 1.5 * aPh.y; p.x += (t * t * 0.7 + 0.06 * sin(uTime + aPh.x * 20.0)) * aPh.y; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((0.12 + 0.5 * t) * aPh.y * uPx / -mv.z, 1.0, 60.0); vA = smoothstep(0.0, 0.12, t) * (1.0 - t) * 0.5; }",fragmentShader:"uniform float uDim; uniform float uRise; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(0.93, 0.94, 0.96), pow(max(0.0, 1.0 - d), 1.4) * vA * (1.0 - 0.7 * uDim) * smoothstep(1.0, 1.35, uRise)); }"}));Dt.frustumCulled=!1,x.add(Dt)}let ge=26,Ke=new U,rn=new U,jn=new U;function Ls(R,$){let nt=ce[R]?ot[R]+ct[R]*.15:Nt(R)*.9,it=Nt($);Ke.set(j[R],nt,lt[R]),rn.set(j[$],it,lt[$]);let xt=Math.hypot(j[$]-j[R],lt[$]-lt[R]);return ce[R]?jn.set(bi(j[$],j[R],.12),bi(it,nt,.82),bi(lt[$],lt[R],.12)):ie[R]?jn.set((j[R]+j[$])/2,Math.max(nt,it)+.7+xt*.3,(lt[R]+lt[$])/2):jn.set(bi(j[R],j[$],.6),Math.max(nt,it)+.12+xt*.22,bi(lt[R],lt[$],.6)),new Hs(Ke.clone(),jn.clone(),rn.clone())}let nr=(R,$)=>!ce[R]&&!ie[R]&&(l.anchor[R]===$||!ie[$]&&!ce[$]&&l.anchor[R]===l.anchor[$]),ci={uDim:{value:0},uAlpha:{value:1},uFar:{value:1}},Ut=new ze({uniforms:ci,transparent:!0,depthWrite:!1,vertexShader:"attribute float aT; attribute vec2 aW; varying float vT; varying vec2 vW; void main(){ vT = aT; vW = aW; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uAlpha; uniform float uDim; uniform float uFar; varying float vT; varying vec2 vW;
      void main(){ float a = smoothstep(0.0, 0.08, vT) * (0.4 + 0.6 * vT); vec3 c = mix(vec3(0.3, 0.38, 0.55), vec3(0.05, 0.5, 0.38), vW.y);
        gl_FragColor = vec4(c, a * vW.x * uAlpha * (1.0 - 0.92 * uDim) * mix(uFar, 1.0, 0.4 * vW.y)); }`}),Gt=null;function ue(R){let $=[],nt=[],it=[],xt=(It,wt,Rt,Jt,Ee,Ne,Ve,nn,Qe,$e)=>{$.push(It,wt,Rt,Jt,Ee,Ne),nt.push(Ve,nn),it.push(Qe,$e,Qe,$e)};for(let[It,wt,,Rt]of t.edges||[]){if(R&&(!R[It]||!R[wt]))continue;let Jt=Rt&1;if(nr(It,wt)){let $e=j[wt]-j[It],Be=lt[wt]-lt[It],bo=Math.hypot($e,Be)||1,ea=ie[wt]?Math.min(.92,Math.max(vt[wt],yt[wt])*.5/bo):0;xt(j[It],g+.03,lt[It],j[wt]-$e*ea,g+.03,lt[wt]-Be*ea,.2,1,Jt?.75:.35,Jt);continue}let Ee=Ls(It,wt),Ne=Jt?.5:.2,Ve=0,nn=0,Qe=0;for(let $e=0;$e<=ge;$e++){let Be=Ee.getPoint($e/ge,Ke);$e&&xt(Ve,nn,Qe,Be.x,Be.y,Be.z,($e-1)/ge,$e/ge,Ne,Jt),Ve=Be.x,nn=Be.y,Qe=Be.z}}let Dt=new Le;Dt.setAttribute("position",new xe(new Float32Array($),3)),Dt.setAttribute("aT",new xe(new Float32Array(nt),1)),Dt.setAttribute("aW",new xe(new Float32Array(it),2)),Gt?(Gt.geometry.dispose(),Gt.geometry=Dt):(Gt=new ba(Dt,Ut),Gt.frustumCulled=!1,Gt.renderOrder=1,x.add(Gt))}ue(null);let Te={uTime:{value:0},uGrow:{value:1},uPx:{value:1},uMinPx:{value:b}},Ze=new ze({uniforms:Te,transparent:!0,depthWrite:!1,vertexShader:`attribute float aPhase; attribute float aCtl; attribute float aLen; attribute float aHead; attribute float aRad; attribute vec3 aCenter; uniform float uPx; uniform float uMinPx;
      varying vec2 vUv; varying float vPhase; varying float vCtl; varying float vLen; varying float vHead; varying vec3 vN; varying vec3 vV;
      void main(){ vUv = uv; vPhase = aPhase; vCtl = aCtl; vLen = aLen; vHead = aHead; vN = normalize(normalMatrix * normal);
        vec3 p = position;
        float depth = -(modelViewMatrix * vec4(aHead > 0.5 ? aCenter : position, 1.0)).z;
        float want = uMinPx * (1.5 + 1.9 * aRad / 0.11) * depth / uPx;
        if (aHead > 0.5) p = aCenter + (position - aCenter) * max(1.0, want / aRad);
        else p += normal * max(0.0, want - aRad);
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uTime; uniform float uGrow; varying vec2 vUv; varying float vPhase; varying float vCtl; varying float vLen; varying float vHead; varying vec3 vN; varying vec3 vV;
      void main(){
        vec3 base = mix(vec3(0.04, 0.28, 1.0), vec3(0.0, 0.66, 0.42), vCtl);
        if (vHead > 0.5) { if (uGrow < 0.97) discard; gl_FragColor = vec4(base * 1.15, 1.0); return; }
        float t = vUv.x;
        if (t > uGrow) discard;
        float core = pow(abs(dot(vN, vV)), 1.2);
        // luzes a cada 2,4 unidades, correndo para o possu\xEDdo: cabe\xE7a clara, cauda que some para tr\xE1s
        float s = fract((t * vLen - uTime * 2.6) / 2.4 + vPhase);
        float comet = pow(s, 5.0);
        // miolo claro e borda escura: o cabo se l\xEA tanto sobre o piso claro quanto sobre a sombra
        gl_FragColor = vec4(base * (0.35 + 0.95 * core) + vec3(1.0) * comet * 0.85, smoothstep(0.0, 0.02, t));
      }`}),Ue=new we(new Le,Ze);Ue.frustumCulled=!1,Ue.renderOrder=3,x.add(Ue);let hn=1,Cn=new U(0,1,0),Dn=new Yn;function Wn(R){if(Ue.geometry.dispose(),!R.length){Ue.geometry=new Le;return}let $=(xt,Dt,It)=>xt.setAttribute(Dt,new xe(new Float32Array(xt.attributes.position.count).fill(It),1)),nt=(xt,Dt,It,wt)=>{let Rt=xt.attributes.position.count,Jt=new Float32Array(Rt*3);for(let Ee=0;Ee<Rt;Ee++)Jt.set([Dt,It,wt],Ee*3);xt.setAttribute("aCenter",new xe(Jt,3))},it=[];R.slice(0,320).forEach(([xt,Dt,It,wt],Rt)=>{let Jt=Ls(xt,Dt),Ee=Jt.getLength(),Ne=(.035+.075*Math.sqrt(sn((wt>0?wt:It?50:8)/100,.02,1)))*(c?1.25:1),Ve=new Ws(Jt,sn(Math.round(Ee*2.2),14,80),Ne,6,!1);$(Ve,"aPhase",Rt*.137%1),$(Ve,"aCtl",It?1:0),$(Ve,"aLen",Ee),$(Ve,"aHead",0),$(Ve,"aRad",Ne),nt(Ve,0,0,0),it.push(Ve);let nn=new ks(Ne*2.6,Ne*7,10,1),Qe=Jt.getTangent(.985,Ke).normalize();nn.translate(0,Ne*3.5,0),nn.applyQuaternion(Dn.setFromUnitVectors(Cn,Qe));let $e=Jt.getPoint(1,rn);nn.translate($e.x-Qe.x*Ne*7,$e.y-Qe.y*Ne*7,$e.z-Qe.z*Ne*7),$(nn,"aPhase",0),$(nn,"aCtl",It?1:0),$(nn,"aLen",Ee),$(nn,"aHead",1),$(nn,"aRad",Ne),nt(nn,$e.x,$e.y,$e.z),it.push(nn)}),Ue.geometry=Es(it),it.forEach(xt=>xt.dispose()),hn=0}let Xn={v:0,to:0},On={v:0,to:0,plate:-1};function ir(R,$=.7){for(let it of oe)it.userData.hl.fill(0);let nt=Xt.geometry.attributes.aHL;if(nt.array.fill(0),R)for(let[it,xt]of R){for(let Dt of ae[it])Dt[0].userData.hl[Dt[1]]=xt;Wt[it]>=0&&(nt.array[Wt[it]]=xt)}for(let it of oe)it.userData.geo.attributes.aHL.needsUpdate=!0;nt.needsUpdate=!0,Xn.to=R?$:0}function sr(R){if(On.plate=R,On.to=R>=0?1:0,H.uFocus.value=gt.uFocus.value=R,R>=0){let $=O[R];Me.uFocus.value.set($.x0,$.z0,$.x1,$.z1)}}function Ti(R){for(let nt of oe){let{idx:it,vis:xt,geo:Dt}=nt.userData;it.forEach((It,wt)=>{xt[wt]=R[It]?1:0}),Dt.attributes.aVis.needsUpdate=!0}let $=Xt.geometry.attributes.aVis;bt.forEach((nt,it)=>{$.array[it]=R[nt]?1:0}),$.needsUpdate=!0,ue(R),S=2}let xn={t0:0,dur:0},Ei=0;function w(R=5200){let $=Lt[0];for(let it of Lt)ct[it]>ct[$]&&($=it);for(let it of oe){let{idx:xt,delay:Dt,geo:It}=it.userData;xt.forEach((wt,Rt)=>{Dt[Rt]=sn(Math.hypot(j[wt]-j[$],(lt[wt]-lt[$])*1.2)/95,0,1)*.85+wt%7*.01}),It.attributes.aDelay.needsUpdate=!0}H.uRise.value=0,xn.t0=performance.now(),xn.dur=R*.8;let nt={x:C.tx,z:C.tz,d:C.td};C.x=j[$]+3,C.z=lt[$]+6,C.d=30,C.yaw=-.5,C.fly={a:{x:C.x,z:C.z,d:C.d,yaw:C.yaw},b:{...nt,yaw:0},t0:performance.now(),dur:R,intro:!0},Ei=3}function X(){if(C.fly&&C.fly.intro){let R=C.fly;C.fly=null,C.tx=R.b.x,C.tz=R.b.z,C.td=R.b.d,C.yaw=0}xn.dur&&(xn.t0=Math.min(xn.t0,performance.now()-xn.dur*.7))}let G={W:1,H:1,offX:0,offY:0,toX:0,toY:0,inset:{l:0,r:0,t:0,b:0}},C={x:0,z:0,d:160,tx:0,tz:0,td:160,vx:0,vz:0,tilt:.5,yaw:0,sway:0,swayK:0,idleAt:performance.now(),fly:null},tt=7,zt=Math.max(260,f*2.4),qt=R=>.5+.48*(1-ho(16,120,R));function kt(){C.tilt=qt(C.d);let R=C.yaw+C.sway,$=Math.sin(C.tilt)*C.d;A.position.set(C.x+Math.sin(R)*$,Math.cos(C.tilt)*C.d,C.z+Math.cos(R)*$),A.up.set(0,1,0),A.lookAt(C.x,0,C.z),x.fog.near=C.d*1.3,x.fog.far=C.d*4.4+60}let $t=new qs,Qt=new Tt;function fe(R,$,nt=g){Qt.set(R/G.W*2-1,-($/G.H)*2+1),$t.setFromCamera(Qt,A);let it=(nt-$t.ray.origin.y)/$t.ray.direction.y;return $t.ray.origin.clone().addScaledVector($t.ray.direction,it)}function ye(R,$,nt,it,xt=1.08){let Dt=A.fov*Math.PI/360,It=G.inset,wt=Math.max(200,G.W-It.l-It.r),Rt=Math.max(160,G.H-It.t-It.b),Jt=wt/Rt,Ee=($-R)*xt,Ne=(it-nt)*xt,Ve=100;for(let nn=0;nn<4;nn++){let Qe=qt(Ve),$e=Ne/2*(Math.cos(Qe)/Math.tan(Dt)+Math.sin(Qe)),Be=Ee/2/(Math.tan(Dt)*Jt)+Ne/2*Math.sin(Qe)*.6;Ve=Math.max($e,Be)*(G.H/Rt)}return sn(Ve+1,tt,zt)}function Kt(R,$,nt,it=1100){C.fly={a:{x:C.x,z:C.z,d:C.d,yaw:C.yaw},b:{x:R,z:$,d:nt,yaw:0},t0:performance.now(),dur:it},C.tx=R,C.tz=$,C.td=nt,C.vx=C.vz=0}function Re(R,$,nt,it,xt={}){let Dt=Math.max(xt.minD||tt,ye(R,$,nt,it,xt.pad||1.12));Kt((R+$)/2,(nt+it)/2+(xt.dz||0),Dt,xt.dur||1100)}function je(R,$={}){if(!R.length)return;let nt=1/0,it=-1/0,xt=1/0,Dt=-1/0;for(let wt of R)nt=Math.min(nt,j[wt]-rt[wt]),it=Math.max(it,j[wt]+rt[wt]),xt=Math.min(xt,lt[wt]-rt[wt]-Nt(wt)*.75-.6),Dt=Math.max(Dt,lt[wt]+rt[wt]+.4);let It=$.minSpan||14;if(it-nt<It){let wt=(nt+it)/2;nt=wt-It/2,it=wt+It/2}if(Dt-xt<It*.6){let wt=(xt+Dt)/2;xt=wt-It*.3,Dt=wt+It*.3}Re(nt,it,xt,Dt,$)}function ke(R,$={}){let nt=O[R];Re(nt.x0,nt.x1,nt.z0-2.5,nt.z1,{pad:1.06,...$})}function Fe(R=1100){Re(-u/2-2,u/2+2,-f/2-4,f/2+1,{pad:1.03,dur:R})}function vn(R,$){let nt=fe(G.W/2,G.H/2),it=fe(G.W/2+R,G.H/2+$);C.x-=it.x-nt.x,C.z-=it.z-nt.z,C.tx=C.x,C.tz=C.z,C.fly=null,Ce()}function Yt(R,$){let nt=fe(G.W/2,G.H/2),it=fe(G.W/2+R*16,G.H/2+$*16);C.vx=-(it.x-nt.x),C.vz=-(it.z-nt.z)}function Sn(R,$,nt){let it=C.td,xt=sn(C.td*R,tt,zt);if(C.fly=null,$!=null){let Dt=fe($,nt),It=1-xt/it;C.tx+=(Dt.x-C.tx)*It,C.tz+=(Dt.z-C.tz)*It}C.td=xt}function Ce(){C.x=sn(C.x,-u*.62,u*.62),C.z=sn(C.z,-f*.72,f*.78),C.tx=sn(C.tx,-u*.62,u*.62),C.tz=sn(C.tz,-f*.72,f*.78)}function Bn(){C.idleAt=performance.now()}let un=new U;function Ai(R,$={}){let nt=ie[R]&&K[R]==="tower"?sn(H.uRise.value,.3,1):1;return un.set(j[R],ot[R]+ct[R]*nt,lt[R]).project(A),$.x=(un.x*.5+.5)*G.W,$.y=(-un.y*.5+.5)*G.H,$.f=un.z<1&&$.x>-40&&$.x<G.W+40&&$.y>-40&&$.y<G.H+40?1:0,$.r=rt[R],$}function hi(R,$,nt,it={}){return un.set(R,$,nt).project(A),it.x=(un.x*.5+.5)*G.W,it.y=(-un.y*.5+.5)*G.H,it.f=un.z<1?1:0,it}function De(){let R=hi(C.x,g,C.z),$=hi(C.x+1,g,C.z);return Math.hypot($.x-R.x,$.y-R.y)}let Ge=[];function Ci(R,$,nt){Qt.set(R/G.W*2-1,-($/G.H)*2+1),$t.setFromCamera(Qt,A);let it=-1,xt=1/0;for(let Jt of oe){Ge.length=0,Jt.raycast($t,Ge);for(let Ee of Ge){let Ne=Jt.userData.idx[Ee.instanceId];Ne==null||nt&&!nt[Ne]||Ee.distance<xt&&(xt=Ee.distance,it=Ne)}}if(it>=0)return it;let Dt=matchMedia("(pointer: coarse)").matches?16:8,It=De(),wt={},Rt=1/0;for(let Jt=0;Jt<o;Jt++){if(nt&&!nt[Jt]||(hi(j[Jt],ot[Jt]+ct[Jt]*.5,lt[Jt],wt),!wt.f))continue;let Ee=Math.hypot(wt.x-R,wt.y-$),Ne=Math.max(2,rt[Jt]*.8*It);if(Ee>Dt+Ne)continue;let Ve=Ee-Ne-(ie[Jt]||ce[Jt]?3:0);Ve<Rt&&(Rt=Ve,it=Jt)}return it}function Oe(R,$){let nt=fe(R,$,0);for(let it of O)if(nt.x>=it.x0&&nt.x<=it.x1&&nt.z>=it.z0&&nt.z<=it.z1)return it.j;return-1}let Nn={t:0,last:performance.now()};function $i(R=performance.now()){let $=Math.min(.5,(R-Nn.last)/1e3),nt=Math.min(.05,$);if(Nn.last=R,Nn.t+=nt,Ei&&!--Ei&&(xn.t0=R,C.fly&&C.fly.intro&&(C.fly.t0=R)),C.fly){let wt=C.fly,Rt=sn((R-wt.t0)/wt.dur,0,1),Jt=wt.intro?Rt*Rt*(3-2*Rt):Qd(Rt);C.x=bi(wt.a.x,wt.b.x,Jt),C.z=bi(wt.a.z,wt.b.z,Jt),C.yaw=bi(wt.a.yaw,wt.b.yaw,Jt),C.d=wt.intro?Math.exp(bi(Math.log(wt.a.d),Math.log(wt.b.d),Jt)):bi(wt.a.d,wt.b.d,Jt),Rt>=1&&(C.fly=null,C.tx=wt.b.x,C.tz=wt.b.z,C.td=wt.b.d),C.idleAt=R}else{C.x+=C.vx,C.z+=C.vz,C.tx+=C.vx,C.tz+=C.vz;let wt=Math.pow(.88,nt*60);C.vx*=wt,C.vz*=wt,Math.abs(C.vx)+Math.abs(C.vz)<.001&&(C.vx=C.vz=0);let Rt=Math.min(1,nt*9);C.x+=(C.tx-C.x)*Rt,C.z+=(C.tz-C.z)*Rt,C.d+=(C.td-C.d)*Rt,C.yaw+=(0-C.yaw)*Math.min(1,nt*4),Ce()}let it=r?0:ho(2500,7e3,R-C.idleAt);if(C.swayK=bi(C.swayK,it,Math.min(1,nt*1.5)),C.sway=Math.sin(Nn.t*.16)*.075*C.swayK,Math.abs(G.toX-G.offX)+Math.abs(G.toY-G.offY)>.3){let wt=1-Math.exp(-$*7);Yc(G.offX+(G.toX-G.offX)*wt,G.offY+(G.toY-G.offY)*wt)}kt(),A.updateMatrixWorld(),Xn.v+=(Xn.to-Xn.v)*(1-Math.exp(-$*5)),On.v+=(On.to-On.v)*(1-Math.exp(-$*5));let xt=Math.min(1,Xn.v*1.25);if(H.uDim.value=gt.uDim.value=Ae.uDim.value=xt,ft.uDim.value=Math.max(xt,On.v*.6),ci.uDim.value=Math.max(Math.min(1,Xn.v*1.3),On.v*.7),Me.uDim.value=xt,Me.uFocusK.value=On.v,H.uTime.value=Te.uTime.value=Me.uTime.value=gt.uTime.value=Ae.uTime.value=Nn.t,xn.dur){let wt=sn((R-xn.t0)/xn.dur,0,1);H.uRise.value=1.4*wt,S=2,wt>=1&&(xn.dur=0,H.uRise.value=1.4)}let Dt=H.uRise.value;ci.uAlpha.value=ho(.8,1.35,Dt),gt.uRise.value=Ae.uRise.value=ft.uRise.value=Dt,ci.uFar.value=.12+.88*(1-ho(24,110,C.d));let It=G.H*b/(2*Math.tan(A.fov*Math.PI/360));gt.uPx.value=Te.uPx.value=Ae.uPx.value=It,k&&(k.uniforms.uAmt.value=4.2*b*(1-ho(22,90,C.d))*(1-.6*Math.min(1,Xn.v*1.3))),hn=Math.min(1,hn+$*1.25),Te.uGrow.value=Qd(hn)}let _n={n:0,acc:0,last:0,skip:45,level:0};function Sp(R){let $=R-_n.last;if(_n.last=R,a||_n.level>=2||$>250||$<=0)return;if(_n.skip>0){_n.skip--;return}if(_n.acc+=$,++_n.n<50)return;let nt=_n.acc/_n.n;_n.n=_n.acc=0,!(nt<=42)&&(_n.level++,_n.skip=20,_n.level===1&&b>1.3?(b=1.25,_.setPixelRatio(b),B&&B.setPixelRatio(b),Te.uMinPx.value=b,Vu(G.W,G.H)):(_n.level=2,B&&(B.dispose(),B=null)))}function Hu(){Sp(performance.now()),S>0&&(_.shadowMap.needsUpdate=!0,S--),B?B.render():_.render(x,A)}function wp(){$i();try{_.compile(x,A)}catch{}Hu(),Nn.last=performance.now()}function Vu(R,$){G.W=Math.max(1,R),G.H=Math.max(1,$),_.setSize(G.W,G.H,!1),B&&(B.setSize(G.W,G.H),Z.resolution.set(G.W*.5,G.H*.5),k.uniforms.uRes.value.set(G.W*b,G.H*b)),A.aspect=G.W/G.H,A.updateProjectionMatrix(),Yc(G.offX,G.offY)}function Gu(R,$,nt=!1){G.toX=R,G.toY=$,nt&&Yc(R,$)}function Tp(R,$,nt,it,xt=!1){G.inset={l:R,r:$,t:nt,b:it},Gu((R-$)/2,(nt-it)/2,xt)}function Yc(R,$){G.offX=R,G.offY=$,A.setViewOffset(G.W,G.H,-R,-$,G.W,G.H)}return{renderer:_,scene:x,camera:A,cam:C,view:G,plates:O,update:$i,render:Hu,warmup:wp,resize:Vu,setOffset:Gu,setInsets:Tp,pan:vn,fling:Yt,zoom:Sn,flyTo:Kt,flyToBox:Re,flyToNodes:je,flyToPlate:ke,fitAll:Fe,pick:Ci,plateAt:Oe,project:Ai,projectPoint:hi,pxPerUnit:De,setHighlight:ir,setFlows:Wn,setVisible:Ti,setFocusPlate:sr,intro:w,skipIntro:X,touch:Bn,isInv:_e,isGround:ie,sky:ce,shape:K,X:j,Y:ot,Z:lt,R:rt,TOP:g,PLATE_H:0,get scale(){return d},get introK(){return C.fly&&C.fly.intro?Ei?0:sn((performance.now()-C.fly.t0)/C.fly.dur,0,1):1},dispose(){_.dispose(),F.dispose()}}}var uo=new U;function ri(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;uo.copy(t),uo[n]=0,uo.normalize();let c=.5*a/(a+o),h=1-uo.angleTo(i)/l;return Math.sign(uo[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Oc=class i extends In{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new U,c=new U,h=new U(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,y=new U,g=.5/a;for(let p=0,M=0;p<d.length;p+=3,M+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:y.set(1,0,0),f[M+0]=ri(y,c,"z","y",r,n),f[M+1]=1-ri(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),f[M+0]=1-ri(y,c,"z","y",r,n),f[M+1]=1-ri(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),f[M+0]=1-ri(y,c,"x","z",r,t),f[M+1]=ri(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),f[M+0]=1-ri(y,c,"x","z",r,t),f[M+1]=1-ri(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),f[M+0]=1-ri(y,c,"x","y",r,t),f[M+1]=1-ri(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),f[M+0]=ri(y,c,"x","y",r,t),f[M+1]=1-ri(y,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var rs=(i,t,e)=>Math.max(t,Math.min(e,i)),wu=i=>1-Math.pow(1-i,3),D_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Tu='"Inter", -apple-system, system-ui, sans-serif',fo='"IBM Plex Mono", ui-monospace, Menlo, monospace';function ip(i,t){let{W:e,colorOf:n,kindLabel:s,shortName:r,brl:a,pct:o,accent:l="#3cf0b4",onPick:c,onExt:h,canvas:d}=t,u=new te(l),f=()=>innerWidth<=760,m=new ts;m.background=new te(461069),m.fog=new Bs(461069,24,60);let y=new fn(32,1,.1,200),g=new Ts(i);m.environment=g.fromScene(new Xr,.04).texture,m.environmentIntensity=.55;let p=new _s(16774378,2.4);p.position.set(-6,14,7),p.castShadow=!0,p.shadow.mapSize.set(2048,2048),Object.assign(p.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:1,far:50}),p.shadow.bias=-5e-4,p.shadow.normalBias=.02,p.shadow.radius=6,m.add(p,p.target);let M=new _s(10336511,.5);M.position.set(8,6,-4),m.add(M),m.add(new $s(12109533,724242,.45));let E={uAcc:{value:u},uGlow:{value:0}},_=new dn({color:987929,roughness:.92,metalness:0,envMapIntensity:.2});_.onBeforeCompile=T=>{Object.assign(T.uniforms,E),T.vertexShader=T.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),T.fragmentShader=T.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWp; uniform vec3 uAcc; uniform float uGlow;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 g = abs(fract(vWp.xz / 0.5 + 0.5) - 0.5) * 0.5;
        float dotk = 1.0 - smoothstep(0.012, 0.022, length(g));
        float r = length(vWp.xz);
        diffuseColor.rgb += vec3(0.06, 0.075, 0.09) * dotk * (1.0 - smoothstep(10.0, 40.0, r));
        diffuseColor.rgb *= 1.0 - 0.45 * smoothstep(14.0, 48.0, r);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += uAcc * uGlow * 0.3 * exp(-pow(length(vWp.xz) / 2.0, 2.0));`)};let b=new we(new ei(260,260),_);b.rotation.x=-Math.PI/2,b.receiveShadow=!0,m.add(b);let S=new gi;m.add(S);let L=i.capabilities.getMaxAnisotropy();typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(T,N,q,D,V){this.moveTo(T+V,N),this.arcTo(T+q,N,T+q,N+D,V),this.arcTo(T+q,N+D,T,N+D,V),this.arcTo(T,N+D,T,N,V),this.arcTo(T,N,T+q,N,V),this.closePath()});function x(T,N,q){let D=document.createElement("canvas"),V=2;D.width=T*V,D.height=N*V;let st=D.getContext("2d");st.scale(V,V),q(st,T,N);let J=new es(D);return J.colorSpace=Tn,J.anisotropy=Math.min(8,L),J}function A(T,N,q,D){let V=String(N).split(/\s+/),st=[],J="";for(let pt of V){let Mt=J?`${J} ${pt}`:pt;T.measureText(Mt).width<=q||!J?J=Mt:(st.push(J),J=pt)}if(J&&st.push(J),st.length>D){st.length=D;let pt=st[D-1];for(;pt.length>1&&T.measureText(`${pt}\u2026`).width>q;)pt=pt.slice(0,-1);st[D-1]=`${pt}\u2026`}return st}function F(T,N,q,D,V,st){T.save(),T.translate(q,D),T.strokeStyle=st,T.fillStyle=st,T.lineWidth=V*.09,T.lineJoin="round",T.lineCap="round";let J=V/2;if(T.beginPath(),N==="pf")T.arc(0,-J*.32,J*.3,0,Math.PI*2),T.stroke(),T.beginPath(),T.moveTo(-J*.6,J*.62),T.quadraticCurveTo(-J*.6,J*.05,0,J*.05),T.quadraticCurveTo(J*.6,J*.05,J*.6,J*.62),T.stroke();else if(N==="gov"){T.moveTo(-J*.7,-J*.2),T.lineTo(0,-J*.65),T.lineTo(J*.7,-J*.2),T.closePath(),T.stroke();for(let pt of[-.45,0,.45])T.beginPath(),T.moveTo(pt*J,-J*.1),T.lineTo(pt*J,J*.45),T.stroke();T.beginPath(),T.moveTo(-J*.75,J*.62),T.lineTo(J*.75,J*.62),T.stroke()}else N==="fund"||N==="pen"?(T.arc(0,0,J*.62,-Math.PI/2,Math.PI*1.25),T.stroke(),T.beginPath(),T.moveTo(0,0),T.lineTo(0,-J*.62),T.moveTo(0,0),T.lineTo(-J*.44,J*.44),T.stroke()):N==="ext"?(T.setLineDash([V*.12,V*.1]),T.strokeRect(-J*.6,-J*.45,J*1.2,J*.95)):(T.moveTo(-J*.62,J*.62),T.lineTo(-J*.62,-J*.35),T.lineTo(J*.05,-J*.65),T.lineTo(J*.05,J*.62),T.moveTo(J*.05,-J*.1),T.lineTo(J*.62,J*.05),T.lineTo(J*.62,J*.62),T.moveTo(-J*.8,J*.62),T.lineTo(J*.8,J*.62),T.stroke());T.restore()}let W=T=>T.t==="c"?"c":T.t==="p"?"pf":T.t==="s"?"sub":T.c,B={w:2.9,h:.26,d:1.12},Z=1.25,k=new Oc(B.w,B.h,B.d,5,.12),K=new ei(B.w-.16,B.d-.12);K.rotateX(-Math.PI/2);let j=(()=>{let T=new Ir,N=B.w/2+.07,q=B.d/2+.07,D=.2;T.moveTo(-N+D,-q),T.lineTo(N-D,-q),T.quadraticCurveTo(N,-q,N,-q+D),T.lineTo(N,q-D),T.quadraticCurveTo(N,q,N-D,q),T.lineTo(-N+D,q),T.quadraticCurveTo(-N,q,-N,q-D),T.lineTo(-N,-q+D),T.quadraticCurveTo(-N,-q,-N+D,-q);let V=new Vs,st=N-.035,J=q-.035,pt=D-.03;V.moveTo(-st+pt,-J),V.lineTo(st-pt,-J),V.quadraticCurveTo(st,-J,st,-J+pt),V.lineTo(st,J-pt),V.quadraticCurveTo(st,J,st-pt,J),V.lineTo(-st+pt,J),V.quadraticCurveTo(-st,J,-st,J-pt),V.lineTo(-st,-J+pt),V.quadraticCurveTo(-st,-J,-st+pt,-J),T.holes.push(V);let Mt=new Ua(T,8);return Mt.rotateX(-Math.PI/2),Mt})(),ot=(()=>{let T=document.createElement("canvas");T.width=T.height=128;let N=T.getContext("2d"),q=N.createRadialGradient(64,64,0,64,64,64);return q.addColorStop(0,"rgba(255,255,255,1)"),q.addColorStop(.4,"rgba(255,255,255,.35)"),q.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=q,N.fillRect(0,0,128,128),new es(T)})();function lt(T){return x(320,124,(N,q,D)=>{N.clearRect(0,0,q,D);let V=14,st=14,J=44;N.fillStyle=T.dim?"#e9ebee":"#eef6f2",N.beginPath(),N.roundRect(V,st,J,J,10),N.fill(),N.strokeStyle=T.dim?"#cfd3d8":"#bfe7d7",N.lineWidth=1,N.stroke(),F(N,T.kind,V+J/2,st+J/2,26,T.dim?"#8a9097":"#1d9c70"),N.fillStyle=T.dim?"#5b616a":"#14171c",N.font=`700 19px ${Tu}`,N.textBaseline="alphabetic",A(N,T.name,q-80,2).forEach((Zt,z)=>N.fillText(Zt,70,34+z*22));let Mt=D-18;N.font=`600 14px ${fo}`,T.pct&&(N.fillStyle=T.ctl?"#0f8f63":"#3d4652",N.fillText(T.pct,14,Mt));let At=T.pct?N.measureText(T.pct).width+12:0;N.font=`500 12px ${fo}`,N.fillStyle="#6c7480";let Vt=T.sub.toUpperCase();for(;Vt.length>4&&N.measureText(Vt).width>q-28-At;)Vt=Vt.slice(0,-2);N.fillText(Vt,14+At,Mt),N.fillStyle=T.color,N.fillRect(14,D-8,Math.min(q-28,40+200*(T.share||0)),2.5)})}function rt(T){return x(256,256,(N,q,D)=>{let V=N.createRadialGradient(q/2,D/2,0,q/2,D/2,q/2);V.addColorStop(0,"#0f3a32"),V.addColorStop(1,"#08221d"),N.fillStyle=V,N.fillRect(0,0,q,D),N.textAlign="center";let st=T.tk||T.n.replace(/[^A-Za-zÀ-ÿ0-9 ]/g,"").split(/\s+/).filter(Boolean).slice(0,2).map(pt=>pt[0]).join("").toUpperCase();N.fillStyle="#e9fff6",N.font=`700 ${st.length>5?38:50}px ${Tu}`,N.fillText(st,q/2,D/2+4),N.font=`600 15px ${Tu}`,N.fillStyle="rgba(220,240,232,.78)";let J=r(T.n);N.fillText(J.length>24?`${J.slice(0,22)}\u2026`:J,q/2,D/2+36),N.font=`500 12px ${fo}`,N.fillStyle="rgba(150,230,200,.75)",N.fillText((T.t==="c"?T.mc?a(T.mc):"capital fechado":s(T)).toUpperCase(),q/2,D/2-44)})}let ct={uTime:{value:0},uAcc:{value:u},uGrow:{value:0}},vt=new ze({uniforms:ct,vertexShader:`attribute float aCtl; attribute float aPhase; attribute float aDir; attribute float aLen; varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying float vCtl; varying float vPhase; varying float vDir; varying float vLen;
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
      }`}),yt={open:!1,focus:-1,items:[],cables:null,hub:null,t0:0,a:0,aTo:0,hover:null,bounds:null},dt={x:0,z:1.2,dist:15,tx:0,tz:1.2,tdist:15,vx:0,vz:0,yaw:0};function ce(){for(let T of[...S.children])S.remove(T),T.traverse(N=>{if(N.geometry&&N.geometry!==k&&N.geometry!==K&&N.geometry!==j&&N.geometry.dispose(),N.material)for(let q of[].concat(N.material))q.map&&q.map!==ot&&q.map.dispose(),q!==vt&&q.dispose()});yt.items=[],yt.cables=null,yt.hub=null}function ie(T,N){ce();let q=e.nodes[T],D=[{key:`w${T}`,w:T,lvl:0}],V=new Map([[T,D[0]]]),st=[],J=[T];for(let Ut=-1;Ut>=-4&&J.length;Ut--){let Gt=[];for(let ue of J){let Te=e.inc[ue].filter(Ze=>e.ef[Ze]&1||e.ep[Ze]>=5||e.ep[Ze]<0).sort((Ze,Ue)=>(e.ef[Ue]&1)-(e.ef[Ze]&1)||e.ep[Ue]-e.ep[Ze]).slice(0,Ut===-1?14:5);for(let Ze of Te){let Ue=e.es[Ze];if(!V.has(Ue)){if(Ut<-1&&!(e.ef[Ze]&1))continue;let hn={key:`w${Ue}`,w:Ue,lvl:Ut};V.set(Ue,hn),D.push(hn),Gt.push(Ue)}V.get(Ue).lvl<V.get(ue).lvl&&st.push({a:V.get(Ue),b:V.get(ue),p:e.ep[Ze],ctl:e.ef[Ze]&1})}}J=Gt}let pt=e.out[T].filter(Ut=>!V.has(e.et[Ut])).sort((Ut,Gt)=>(e.ef[Gt]&1)-(e.ef[Ut]&1)||e.ep[Gt]-e.ep[Ut]);for(let Ut of pt){let Gt=e.et[Ut],ue={key:`w${Gt}`,w:Gt,lvl:1};V.set(Gt,ue),D.push(ue),st.push({a:V.get(T),b:ue,p:e.ep[Ut],ctl:e.ef[Ut]&1})}for(let Ut of N||[]){let Gt=String(Ut.cnpj||"").replace(/\D/g,""),ue=e.byCnpj.get(Gt);if(ue!=null&&V.has(ue))continue;let Te=ue!=null?{key:`w${ue}`,w:ue,lvl:1}:{key:`x${Gt||Ut.n}`,ext:Ut,lvl:1};ue!=null&&V.set(ue,Te),D.push(Te),st.push({a:V.get(T),b:Te,p:Ut.pct,ctl:(Ut.pct||0)>50})}for(let Ut of D.filter(Gt=>Gt.lvl===1&&Gt.w!=null).slice(0,18))for(let Gt of e.out[Ut.w].filter(ue=>e.ef[ue]&1).slice(0,4)){let ue=e.et[Gt];if(V.has(ue))continue;let Te={key:`w${ue}`,w:ue,lvl:2};V.set(ue,Te),D.push(Te),st.push({a:Ut,b:Te,p:e.ep[Gt],ctl:1})}let Mt=D.filter(Ut=>Ut.lvl>0);if(Mt.length>64){let Ut=new Set(Mt.slice(0,64));for(let Gt=D.length-1;Gt>=0;Gt--)D[Gt].lvl>0&&!Ut.has(D[Gt])&&D.splice(Gt,1);for(let Gt=st.length-1;Gt>=0;Gt--)(!D.includes(st[Gt].b)||!D.includes(st[Gt].a))&&st.splice(Gt,1)}let Vt=Nt(D,st).map(Ut=>{let Gt=mt(Ut);return S.add(Gt),Gt}),Zt=new gi,z=Z,_t=[[0,0],[z,0],[z+.06,.05],[z+.08,.16],[z+.06,.34],[z,.4],[z-.12,.42],[0,.42]].map(([Ut,Gt])=>new Tt(Ut,Gt)),et=new we(new Da(_t,96),new dn({color:1063475,roughness:.32,metalness:.55}));et.castShadow=!0,et.receiveShadow=!0;let ft=new we(new Fa(z-.2,.045,16,128),new dn({color:u,emissive:u,emissiveIntensity:1.6,roughness:.3}));ft.rotation.x=-Math.PI/2,ft.position.y=.43;let bt=rt(q),gt=new we(new Ta(z-.3,64),new dn({color:16777215,roughness:.45,metalness:.2,map:bt,emissive:16777215,emissiveMap:bt,emissiveIntensity:.35}));gt.rotation.x=-Math.PI/2,gt.position.y=.425;let Xt=new we(new ei(6,6),new vi({map:ot,color:u,transparent:!0,opacity:.22,blending:Ms,depthWrite:!1}));Xt.rotation.x=-Math.PI/2,Xt.position.y=.012,Zt.add(et,ft,gt,Xt),Zt.userData={key:`w${T}`,w:T,nd:D[0],ring:ft,glow:Xt},S.add(Zt),yt.hub=Zt;let Wt=Math.max(1,...st.map(Ut=>Ut.p||0));for(let Ut of D){if(Ut.lvl===0)continue;let Gt=Ut.w!=null?e.nodes[Ut.w]:null,ue=Ut.lvl<0?st.find(Wn=>Wn.a===Ut):st.find(Wn=>Wn.b===Ut),Te=!!(ue&&ue.ctl),Ze=Gt?{name:r(Gt.n),kind:W(Gt),color:n(Gt),sub:Gt.t==="c"?[Gt.tk,Gt.mc?a(Gt.mc):"capital fechado"].filter(Boolean).join(" \xB7 "):s(Gt),pct:ue&&ue.p>=0?o(ue.p):"",ctl:Te,share:(ue?.p||0)/Wt}:{name:Ut.ext.n,kind:"ext",color:"#8a9097",sub:Ut.ext.pais&&!/^brasil$/i.test(Ut.ext.pais)?Ut.ext.pais:"capital fechado",pct:ue&&ue.p>=0?o(ue.p):"",ctl:Te,dim:!0,share:(ue?.p||0)/Wt},Ue=new gi,hn=new we(k,new dn({color:Ze.dim?12172739:15264492,roughness:.5,metalness:0}));hn.castShadow=!0,hn.receiveShadow=!0,hn.position.y=B.h/2+.02;let Cn=new we(K,new dn({map:lt(Ze),transparent:!0,roughness:.55}));Cn.position.y=B.h+.022;let Dn=new we(j,new vi({color:Te?u:new te(7306380),transparent:!0,opacity:Te?.9:.35,blending:Ms,depthWrite:!1}));Dn.position.y=.015,Ue.add(hn,Cn,Dn),Ue.position.set(Ut.x,0,Ut.z),Ue.userData={nd:Ut,card:hn,rim:Dn,ctl:Te,baseY:0},S.add(Ue),yt.items.push(Ue)}let Ae=[];if(st.forEach((Ut,Gt)=>{let ue=Ut.a.lvl===0?null:Ut.a,Te=Ut.b.lvl===0?null:Ut.b,Ze=ue?new U(ue.x,.13,ue.z+(ue.z<(Te?Te.z:0)?B.d/2:-B.d/2)):null,Ue=Te?new U(Te.x,.13,Te.z+(Te.z<(ue?ue.z:0)?B.d/2:-B.d/2)):null,hn=Ei=>{let w=new U(Ei.x,0,Ei.z).normalize();return new U(w.x*(z+.05),.16,w.z*(z+.05))},Cn=Ze||hn(Ue),Dn=Ue||hn(Ze),Wn=Dn.z-Cn.z,Xn=Cn.clone().add(new U(0,0,Wn*.5)),On=Dn.clone().add(new U(0,0,-Wn*.5));ue||Xn.copy(Cn).add(new U(Cn.x*.5,0,Cn.z*.5)),Te||On.copy(Dn).add(new U(Dn.x*.5,0,Dn.z*.5));let ir=new Pr(Cn,Xn,On,Dn),sr=ir.getLength(),Ti=new Ws(ir,Math.max(24,Math.round(sr*10)),Ut.ctl?.085:.05,10,!1),xn=Ti.attributes.position.count;Ti.setAttribute("aCtl",new xe(new Float32Array(xn).fill(Ut.ctl?1:0),1)),Ti.setAttribute("aPhase",new xe(new Float32Array(xn).fill(Gt*.173%1),1)),Ti.setAttribute("aDir",new xe(new Float32Array(xn).fill(1),1)),Ti.setAttribute("aLen",new xe(new Float32Array(xn).fill(sr),1)),Ae.push(Ti)}),Ae.length){let Ut=_e(Ae),Gt=new we(Ut,vt);Gt.castShadow=!0,S.add(Gt),yt.cables=Gt}let ge=-2,Ke=2,rn=-2,jn=2;for(let Ut of D)ge=Math.min(ge,Ut.x-B.w/2),Ke=Math.max(Ke,Ut.x+B.w/2),rn=Math.min(rn,Ut.z-B.d/2),jn=Math.max(jn,Ut.z+B.d/2);for(let Ut of Vt){let Gt=Ut.userData;ge=Math.min(ge,Gt.x0),Ke=Math.max(Ke,Gt.x1),rn=Math.min(rn,Gt.z-.3),jn=Math.max(jn,Gt.z+.3)}yt.bounds={x0:ge,x1:Ke,z0:rn,z1:jn};let Ls=f()?3:5,nr=D.filter(Ut=>Ut.lvl===1).sort((Ut,Gt)=>Ut.z-Gt.z||Ut.x-Gt.x).slice(0,Ls*2),ci=D.filter(Ut=>Ut.lvl===-1).sort((Ut,Gt)=>Gt.z-Ut.z||Ut.x-Gt.x);yt.near=D.filter(Ut=>Ut.lvl===0).concat(f()?ci.slice(0,Ls*2):ci,nr)}function _e(T){let N=0,q=0;for(let At of T)N+=At.attributes.position.count,q+=At.index.count;let D=new Le,V=["position","normal","uv","aCtl","aPhase","aDir","aLen"],st={};for(let At of V)st[At]=new Float32Array(N*T[0].attributes[At].itemSize);let J=new Uint32Array(q),pt=0,Mt=0;for(let At of T){for(let Zt of V)st[Zt].set(At.attributes[Zt].array,pt*At.attributes[Zt].itemSize);let Vt=At.index.array;for(let Zt=0;Zt<Vt.length;Zt++)J[Mt+Zt]=Vt[Zt]+pt;pt+=At.attributes.position.count,Mt+=Vt.length,At.dispose()}for(let At of V)D.setAttribute(At,new xe(st[At],T[0].attributes[At].itemSize));return D.setIndex(new xe(J,1)),D}let ht={"-1":"Acionistas diretos","-2":"Quem controla os acionistas","-3":"Controle acima","-4":"Controle final",1:"Participa\xE7\xF5es e controladas",2:"Controladas das controladas"};function mt(T){let N=T.lvl===-1||T.lvl===1,q=`${ht[T.lvl]||(T.lvl<0?"Controle acima":"Mais abaixo")} \xB7 ${T.n}`.toUpperCase(),D=34,V=.3/D,st=document.createElement("canvas").getContext("2d");st.font=`600 17px ${fo}`;let J=Math.ceil(st.measureText(q).width+30),pt=x(J,D,(_t,et,ft)=>{_t.clearRect(0,0,et,ft),_t.fillStyle=T.lvl<0?"rgba(150,170,200,.9)":"rgba(60,240,180,.85)",_t.beginPath(),N&&T.lvl<0?(_t.moveTo(2,ft/2+5),_t.lineTo(14,ft/2+5),_t.lineTo(8,ft/2-6)):N?(_t.moveTo(2,ft/2-5),_t.lineTo(14,ft/2-5),_t.lineTo(8,ft/2+6)):_t.arc(8,ft/2,4,0,Math.PI*2),_t.fill(),_t.font=`600 17px ${fo}`,_t.textBaseline="middle",_t.fillStyle="rgba(205,214,226,.82)",_t.fillText(q,22,ft/2+1)}),Mt=J*V,At=new ei(Mt,D*V);At.rotateX(-Math.PI/2);let Vt=new we(At,new vi({map:pt,transparent:!0,depthWrite:!1,toneMapped:!1})),Zt=N?Z+.45:T.n<=2?Math.min(T.x0,-Mt-1.7):T.x0,z=N?T.lvl<0?-.36:.36:T.zLab;return Vt.position.set(Zt+Mt/2,.012,z),Vt.userData={band:T.lvl,x0:Zt,x1:Zt+Mt,z},Vt}function Nt(T,N){let q=f()?3:5,D=.45,V=1.75,st=3.1,J=new Map;for(let _t of T)(J.get(_t.lvl)||J.set(_t.lvl,[]).get(_t.lvl)).push(_t);let pt=_t=>{let et=N.filter(ft=>ft.b===_t).map(ft=>ft.a.x||0);return et.length?et.reduce((ft,bt)=>ft+bt,0)/et.length:0},Mt=_t=>{let et=N.filter(ft=>ft.a===_t).map(ft=>ft.b.x||0);return et.length?et.reduce((ft,bt)=>ft+bt,0)/et.length:0},At=J.get(0)[0];At.x=0,At.z=0;let Vt=[],Zt=_t=>{let et=Math.min(q,_t);return-(et*B.w+(et-1)*D)/2},z=-st+.4;for(let _t of[...J.keys()].filter(et=>et<0).sort((et,ft)=>ft-et)){let et=J.get(_t);et.sort((ft,bt)=>Mt(ft)-Mt(bt));for(let ft=0;ft<et.length;ft+=q){let bt=et.slice(ft,ft+q),gt=bt.length*B.w+(bt.length-1)*D;bt.forEach((Xt,Wt)=>{Xt.x=-gt/2+B.w/2+Wt*(B.w+D),Xt.z=z}),z-=V}Vt.push({lvl:_t,n:et.length,x0:Zt(et.length),zLab:z+V-B.d/2-.36}),z-=st-V}z=st-.4;for(let _t of[...J.keys()].filter(et=>et>0).sort((et,ft)=>et-ft)){let et=J.get(_t);_t>1&&et.sort((ft,bt)=>pt(ft)-pt(bt)),Vt.push({lvl:_t,n:et.length,x0:Zt(et.length),zLab:z-B.d/2-.36});for(let ft=0;ft<et.length;ft+=q){let bt=et.slice(ft,ft+q),gt=bt.length*B.w+(bt.length-1)*D;bt.forEach((Xt,Wt)=>{Xt.x=-gt/2+B.w/2+Wt*(B.w+D),Xt.z=z}),z+=V}z+=st-V}return Vt}let O={W:1,H:1,offX:0,offY:0,freeW:1,freeH:1,top:0};function ut(){y.setViewOffset(O.W,O.H,-O.offX,-O.offY,O.W,O.H)}function St(T){let N=yt.near&&yt.near.length>1?yt.near.reduce((q,D)=>({x0:Math.min(q.x0,D.x-B.w/2),x1:Math.max(q.x1,D.x+B.w/2),z0:Math.min(q.z0,D.z-B.d/2),z1:Math.max(q.z1,D.z+B.d/2)}),{x0:-2,x1:2,z0:-2,z1:2}):yt.bounds;Et(N,T)}function Et(T,N){let q=T.x1-T.x0+1.2,D=T.z1-T.z0+1.6,V=O.freeW/O.H,st=y.fov*Math.PI/360,J=q/2/Math.tan(st)/V,pt=D/2/Math.tan(st)*(O.H/Math.max(200,O.freeH));dt.tdist=rs(Math.max(J,pt)*1.04,6,90),dt.tx=(T.x0+T.x1)/2,dt.tz=(T.z0+T.z1)/2,N&&(dt.dist=dt.tdist,dt.x=dt.tx,dt.z=dt.tz)}function Bt(){y.position.set(dt.x+Math.sin(dt.yaw)*Math.cos(1.5)*dt.dist,Math.sin(1.5)*dt.dist,dt.z+Math.cos(dt.yaw)*Math.cos(1.5)*dt.dist),y.lookAt(dt.x,0,dt.z),p.position.set(dt.x-6,14,dt.z+7),p.target.position.set(dt.x,0,dt.z)}let Pt=new qs,Lt=new Tt;function Ft(T,N){Lt.set(T/O.W*2-1,-(N/O.H)*2+1),Pt.setFromCamera(Lt,y);let q=yt.items.map(V=>V.userData.card);yt.hub&&q.push(yt.hub.children[0]);let D=Pt.intersectObjects(q,!1)[0];return D?D.object===yt.hub?.children[0]?yt.hub:yt.items.find(V=>V.userData.card===D.object):null}let jt=new Map,ee=null,Me=null,ne=0;function he(T,N){Lt.set(T/O.W*2-1,-(N/O.H)*2+1),Pt.setFromCamera(Lt,y);let q=-Pt.ray.origin.y/Pt.ray.direction.y;return Pt.ray.origin.clone().addScaledVector(Pt.ray.direction,q)}function H(T){if(yt.open){try{d.setPointerCapture(T.pointerId)}catch{}if(jt.set(T.pointerId,{x:T.clientX,y:T.clientY}),jt.size===2){let[N,q]=[...jt.values()];Me={d:Math.hypot(N.x-q.x,N.y-q.y)},ee=null;return}ee={sx:T.clientX,sy:T.clientY,x:T.clientX,y:T.clientY,moved:!1,g:he(T.clientX,T.clientY)},dt.vx=dt.vz=0}}function ae(T){if(yt.open){if(jt.has(T.pointerId)&&jt.set(T.pointerId,{x:T.clientX,y:T.clientY}),Me&&jt.size===2){let[N,q]=[...jt.values()],D=Math.hypot(N.x-q.x,N.y-q.y);dt.tdist=rs(dt.tdist*(Me.d/Math.max(1,D)),5,90),dt.dist=dt.tdist,Me.d=D;return}if(ee){if(!ee.moved&&Math.hypot(T.clientX-ee.sx,T.clientY-ee.sy)>6&&(ee.moved=!0,d.classList.add("dragging")),ee.moved){Bt(),y.updateMatrixWorld();let N=he(T.clientX,T.clientY),q=ee.g.x-N.x,D=ee.g.z-N.z;dt.x+=q,dt.z+=D,dt.tx=dt.x,dt.tz=dt.z,dt.vx=q,dt.vz=D}return}if(T.pointerType==="mouse"){let N=Ft(T.clientX,T.clientY);N!==yt.hover&&(yt.hover=N,d.classList.toggle("pointing",!!N))}}}function oe(T){if(!yt.open)return;if(jt.delete(T.pointerId),d.classList.remove("dragging"),Me){jt.size<2&&(Me=null);return}if(!ee)return;let N=ee;if(ee=null,N.moved)return;let q=performance.now(),D=q-ne<320;ne=q;let V=Ft(T.clientX,T.clientY);if(!V)return;let st=V.userData.nd;if(st.ext){h(st.ext);return}yt.selected=V,c(st.w,D&&V!==yt.hub)}function I(T){if(!yt.open)return;T.preventDefault();let N=Math.exp(T.deltaY*(T.ctrlKey?.012:.0016)),q=he(T.clientX,T.clientY),D=rs(dt.tdist*N,5,90),V=1-D/dt.tdist;dt.tx+=(q.x-dt.tx)*V,dt.tz+=(q.z-dt.tz)*V,dt.tdist=D}d.addEventListener("pointerdown",H),d.addEventListener("pointermove",ae),d.addEventListener("pointerup",oe),d.addEventListener("pointercancel",oe),d.addEventListener("wheel",I,{passive:!1});let v=performance.now(),Y=0;function Q(T){let N=Math.min(.05,(T-v)/1e3);v=T,Y+=N;let q=rs((T-yt.t0)/1400,0,1);if(yt.hub){let D=wu(rs(q*1.8,0,1));yt.hub.scale.setScalar(.6+.4*D),yt.hub.position.y=-.4*(1-D),yt.hub.userData.ring.material.emissiveIntensity=1.2+.35*Math.sin(Y*2.2)}yt.items.forEach((D,V)=>{let st=D.userData.nd,J=rs((q-.15-Math.min(.5,(Math.abs(st.lvl)-1)*.12+V%12*.025))/.35,0,1),pt=wu(J),Mt=yt.hover===D?1:0,At=yt.selected===D?1:0;D.userData.lift=(D.userData.lift||0)+(Mt*.18+At*.1-(D.userData.lift||0))*Math.min(1,N*12),D.position.y=-.5*(1-pt)+D.userData.lift,D.scale.setScalar(.85+.15*pt),D.visible=J>0,D.userData.rim.material.opacity=(D.userData.ctl?.9:.35)*pt+At*.4}),ct.uGrow.value=D_(rs((q-.3)/.6,0,1)),ct.uTime.value=Y,E.uGlow.value=wu(rs(q*1.5,0,1)),!ee&&!Me&&(dt.x+=(dt.tx-dt.x)*Math.min(1,N*6),dt.z+=(dt.tz-dt.z)*Math.min(1,N*6)),dt.dist+=(dt.tdist-dt.dist)*Math.min(1,N*7),m.fog.near=dt.dist*1.35,m.fog.far=dt.dist*3.2,dt.yaw=0,Bt(),i.shadowMap.needsUpdate=!0,i.render(m,y)}return{get focus(){return yt.focus},open(T,N){ie(T,N),yt.open=!0,yt.focus=T,yt.t0=performance.now(),yt.hover=null,yt.selected=yt.hub,St(!0),dt.dist=dt.tdist*1.25},close(){yt.open=!1,yt.focus=-1,ce()},frame:Q,resize(T,N){O.W=T,O.H=N,y.aspect=T/N,y.updateProjectionMatrix(),ut()},setFree(T,N,q,D=0){O.offX=(T-N)/2,O.offY=(D-q)/2,O.freeW=Math.max(200,O.W-T-N),O.freeH=Math.max(200,O.H-q-D),ut(),yt.open&&St(!1)},zoom(T){dt.tdist=rs(dt.tdist*T,5,90)},fit(){yt.bounds&&Et(yt.bounds)}}}var Eu="mapa-4",Zr=["fin","tech","saude","log","agro","ind","util","oil","base","cons","imob","out"];function sp(i){return i.t==="c"?i.mc?1.8+1.25*Math.log10(1+i.mc/1e8):1.8:i.t==="s"?1.2:i.v?1+.8*Math.log10(1+i.v/1e8):1}function N_(i){let t=i.nodes,e=t.length,n=new Int16Array(e).fill(-1),s=a=>{let o=Zr.indexOf(a);return o<0?Zr.length-1:o};t.forEach((a,o)=>{a.t==="c"&&(n[o]=s(a.c))});let r=Array.from({length:e},()=>[]);for(let[a,o,,l]of i.edges||[]){let c=l&1?3:1;r[a].push([o,c]),r[o].push([a,c])}for(let[a,o]of i.board||[])r[a].push([o,.3]),r[o].push([a,.3]);for(let a=0;a<6;a++){let o=0;for(let l=0;l<e;l++){if(n[l]>=0)continue;let c=new Float64Array(Zr.length),h=!1;for(let[d,u]of r[l])n[d]>=0&&(c[n[d]]+=u*(t[d].t==="c"?2:1),h=!0);if(h){let d=0;for(let u=1;u<c.length;u++)c[u]>c[d]&&(d=u);n[l]=d,o++}}if(!o)break}for(let a=0;a<e;a++)n[a]<0&&(n[a]=Zr.length-1);return n}function U_(i,t,e,n,s){let r=[],a=i.slice(),o=t,l=e,c=n,h=s,d=(u,f)=>{let m=u.reduce((g,p)=>g+p.a,0),y=0;for(let g of u){let p=m/f,M=g.a/p;y=Math.max(y,Math.max(p/M,M/p))}return y};for(;a.length;){let u=Math.min(c,h),f=[a.shift()];for(;a.length&&d([...f,a[0]],u)<=d(f,u);)f.push(a.shift());let m=f.reduce((y,g)=>y+g.a,0);if(c>=h){let y=m/h,g=l;for(let p of f){let M=p.a/y;r.push({...p,x0:o,y0:g,x1:o+y,y1:g+M}),g+=M}o+=y,c-=y}else{let y=m/c,g=o;for(let p of f){let M=p.a/y;r.push({...p,x0:g,y0:l,x1:g+M,y1:l+y}),g+=M}l+=y,h-=y}}return r}var F_=1.62,rp=.62;function O_(i){let t=i.nodes,e=t.length,n=Array.from({length:e},()=>[]),s=new Int32Array(e);for(let[M,E,_,b]of i.edges||[])n[M].push([E,_,b]),s[E]++;let r=Array.from({length:e},()=>[]);for(let[M,E]of i.board||[])r[M].push(E);let a=Uint8Array.from(t,(M,E)=>M.t==="c"||M.t==="s"||!n[E].length&&s[E]?1:0),o=new Array(e).fill(null),l=new Uint8Array(e),c=M=>{if(o[M])return o[M];if(l[M])return new Map;l[M]=1;let E=new Map;for(let[_,b,S]of n[M]){let L=(b>0?b:5)*(S&1?2:1);if(a[_])E.set(_,(E.get(_)||0)+L*Math.max(1e8,t[_].mc||0));else for(let[x,A]of c(_))E.set(x,(E.get(x)||0)+A*Math.min(100,L)/100)}return l[M]=0,o[M]=E},h=new Int32Array(e).fill(-1),d=new Uint8Array(e),u=new Uint8Array(e),f=M=>M.slice().sort((E,_)=>(t[_].mc||0)-(t[E].mc||0)||E-_)[0],m=-1;for(let M=0;M<e;M++)t[M].t==="c"&&(m<0||(t[M].mc||0)>(t[m].mc||0))&&(m=M);for(let M=0;M<e;M++){if(a[M])continue;let E=c(M);E.size===1?h[M]=E.keys().next().value:E.size>=2?d[M]=1:h[M]=r[M].length?f(r[M]):m}let y=new Int16Array(e).fill(-1),g=new Uint8Array(e),p=M=>{if(a[M])return 0;if(y[M]>=0)return y[M];if(g[M])return 0;g[M]=1;let E=0,_=99;for(let[b]of n[M]){let S=p(b);(!d[M]||d[b])&&(E=Math.max(E,d[b]||!d[M]?S:0)),_=Math.min(_,S)}return g[M]=0,y[M]=d[M]?E+1:(_===99?0:_)+1};for(let M=0;M<e;M++)if(!a[M]){let E=p(M);d[M]?d[M]=Math.min(6,E):u[M]=Math.min(9,E)}return{out:n,ground:a,reach:c,anchor:h,sky:d,depth:u}}function Au(i,{log:t=()=>{},aspect:e=F_}={}){let n=i.nodes,s=n.length,r=i.pos||[],{out:a,ground:o,reach:l,anchor:c,sky:h,depth:d}=O_(i),u=N_(i),f=Zr.length,m=new Map;for(let O=0;O<s;O++)c[O]>=0&&(m.get(c[O])||m.set(c[O],[]).get(c[O])).push(O);let y=Float64Array.from(n,O=>sp(O)*.62),g=new Map,p=new Float64Array(s),M=(O,ut)=>{let St=-1;for(let[Et,Bt,Pt]of a[O])Et===ut&&(St=Math.max(St,(Bt>0?Bt:0)+(Pt&1?1e3:0)));return St};for(let O=0;O<s;O++){if(!o[O])continue;let ut=m.get(O),St=y[O]*(n[O].t==="c"?2.1:1.42);if(!ut){p[O]=St+.9;continue}let Et=new Map;for(let Lt of ut){let Ft=d[Lt]||1;(Et.get(Ft)||Et.set(Ft,[]).get(Ft)).push(Lt)}let Bt=[],Pt=St+1.5;for(let Lt of[...Et.keys()].sort((Ft,jt)=>Ft-jt)){let Ft=Et.get(Lt);for(Lt===1&&Ft.sort((jt,ee)=>M(ee,O)-M(jt,O)||(n[ee].v||0)-(n[jt].v||0)||jt-ee);Ft.length;){let jt=Math.max(4,Math.floor(2*Math.PI*Pt/1.5));Bt.push({r:Pt,d:Lt,list:Ft.splice(0,jt)}),Pt+=1.45}}g.set(O,Bt),p[O]=Pt-1.45+1.3}let E=new Float64Array(f);for(let O=0;O<s;O++)o[O]&&(E[u[O]]+=Math.PI*p[O]*p[O]);let _=[];for(let O=0;O<f;O++)E[O]>0&&_.push({k:O,c:Zr[O],a:E[O]/.45});_.sort((O,ut)=>ut.a-O.a);let b=_.reduce((O,ut)=>O+ut.a,0),S=Math.sqrt(b*e),L=b/S,x=U_(_,0,0,S,L),A=Math.sqrt(b),F=A*Math.sqrt(1.62)*.02,W=x.map(O=>({c:O.c,k:O.k,x0:O.x0+F/2,y0:O.y0+F/2,x1:O.x1-F/2,y1:O.y1-F/2})),B=new Map(W.map((O,ut)=>[O.k,ut])),Z=new Float64Array(s),k=new Float64Array(s),K=O=>{let ut=Math.min(O.x1-O.x0,O.y1-O.y0)*.03+1,St=Math.min((O.y1-O.y0)*.12,A/Math.sqrt(1.62)*.035);return{x0:O.x0+ut,x1:O.x1-ut,y0:O.y0+ut+St,y1:O.y1-ut}},j=O=>{let ut=O.map((Lt,Ft)=>Ft).sort((Lt,Ft)=>O[Lt]-O[Ft]||Lt-Ft),St=new Float64Array(O.length);ut.forEach((Lt,Ft)=>{St[Lt]=(Ft+.5)/O.length});let Et=ut.map(Lt=>O[Lt]),Bt=Et[Math.floor(Et.length*.03)]??0,Pt=Et[Math.ceil(Et.length*.97)-1]??1;return O.map((Lt,Ft)=>.6*St[Ft]+.4*Math.min(1,Math.max(0,(Lt-Bt)/Math.max(1e-9,Pt-Bt))))};for(let O of W){let ut=[];for(let Pt=0;Pt<s;Pt++)o[Pt]&&u[Pt]===O.k&&ut.push(Pt);let St=K(O),Et=j(ut.map(Pt=>r[2*Pt]||0)),Bt=j(ut.map(Pt=>r[2*Pt+1]||0));ut.forEach((Pt,Lt)=>{Z[Pt]=St.x0+Et[Lt]*(St.x1-St.x0),k[Pt]=St.y0+Bt[Lt]*(St.y1-St.y0)})}let ot=[];for(let O=0;O<s;O++)o[O]&&ot.push(O);let lt=[];for(let[O,ut,,St]of i.edges||[])o[O]&&o[ut]&&u[O]===u[ut]&&lt.push([O,ut,St&1?.06:.02]);let rt=new Int32Array(s).fill(-1);for(let O of i.groups||[])if(O.nc>=2&&o[O.h])for(let ut of O.m)ut!==O.h&&o[ut]&&u[ut]===u[O.h]&&n[ut].t==="c"&&(rt[ut]=O.h);let ct=new Map(W.map(O=>[O.k,K(O)])),vt=(O,ut,St,Et,Bt)=>{let Pt=O.map(ne=>ut[ne]).sort((ne,he)=>ne-he),Lt=Math.max(2,(Pt[Math.floor(Pt.length/2)]||1)*2.2),Ft=(ne,he)=>(ne+4096)*8192+(he+4096),jt=new Float64Array(s),ee=new Float64Array(s),Me=new Map;for(let ne=0;ne<St;ne++){let he=1-ne/St;jt.fill(0),ee.fill(0),Bt(jt,ee,Math.max(0,he*1.6-.6)),Me.clear();for(let ae of O){let oe=Ft(Math.floor(Z[ae]/Lt),Math.floor(k[ae]/Lt)),I=Me.get(oe);I||Me.set(oe,I=[]),I.push(ae)}for(let ae of O){let oe=Math.floor(Z[ae]/Lt),I=Math.floor(k[ae]/Lt),v=Math.ceil(2*ut[ae]/Lt);for(let Y=oe-v;Y<=oe+v;Y++)for(let Q=I-v;Q<=I+v;Q++){let T=Me.get(Ft(Y,Q));if(T)for(let N of T){if(ut[N]>ut[ae]||ut[N]===ut[ae]&&N<=ae||!Et.same(ae,N))continue;let q=Z[ae]-Z[N],D=k[ae]-k[N],V=Math.hypot(q,D);V<1e-6&&(q=ae*7919%13-6||1,D=N*104729%11-5||1,V=Math.hypot(q,D),q*=.001/V,D*=.001/V,V=.001);let st=ut[ae]+ut[N];if(V>=st)continue;let J=(st-V)/V*.5;jt[ae]+=q*J,ee[ae]+=D*J,jt[N]-=q*J,ee[N]-=D*J}}}let H=Et.max*he+.3;for(let ae of O){let oe=jt[ae],I=ee[ae],v=Math.hypot(oe,I);v>H&&(oe*=H/v,I*=H/v),Et.move(ae,Z[ae]+oe,k[ae]+I)}}};vt(ot,p,220,{max:4,same:(O,ut)=>u[O]===u[ut],move:(O,ut,St)=>{let Et=ct.get(u[O]),Bt=Math.min(p[O],(Et.x1-Et.x0)/2,(Et.y1-Et.y0)/2)*.9;Z[O]=Math.min(Et.x1-Bt,Math.max(Et.x0+Bt,ut)),k[O]=Math.min(Et.y1-Bt,Math.max(Et.y0+Bt,St))}},(O,ut,St)=>{if(St){for(let[Et,Bt,Pt]of lt){let Lt=Pt*St,Ft=Z[Bt]-Z[Et],jt=k[Bt]-k[Et],ee=Math.hypot(Ft,jt)||1e-9,Me=(p[Et]+p[Bt])*1.05;if(ee<=Me)continue;let ne=Lt*(ee-Me)/ee;O[Et]+=Ft*ne,ut[Et]+=jt*ne,O[Bt]-=Ft*ne,ut[Bt]-=jt*ne}for(let Et of ot)rt[Et]>=0&&(O[Et]+=(Z[rt[Et]]-Z[Et])*.03*St,ut[Et]+=(k[rt[Et]]-k[Et])*.03*St)}});let yt=new Float64Array(s),dt=Math.PI/2;for(let[O,ut]of g)for(let St of ut){let Et=St.list.length,Bt=1.5/St.r,Pt;if(St.d===1){let Lt=Math.max(Bt,Math.min(2*Math.PI/Et,Bt*1.9));Pt=St.list.map((Ft,jt)=>dt+(jt%2?1:-1)*Math.ceil(jt/2)*Lt)}else{let Lt=St.list.map(ne=>{let he=0,H=0;for(let[ae]of a[ne])c[ae]===O&&(he+=Math.sin(yt[ae]),H+=Math.cos(yt[ae]));return he||H?Math.atan2(he,H):dt}),Ft=St.list.map((ne,he)=>he).sort((ne,he)=>Lt[ne]-Lt[he]||ne-he);Pt=new Array(Et);let jt=-1/0,ee=0;for(let ne of Ft){let he=Math.max(Lt[ne],jt+Bt);ee+=he-Lt[ne],Pt[ne]=he,jt=he}let Me=Math.min(ee/Et,Bt*Et*.5);for(let ne=0;ne<Et;ne++)Pt[ne]-=Me}St.list.forEach((Lt,Ft)=>{yt[Lt]=Pt[Ft],Z[Lt]=Z[O]+Math.cos(Pt[Ft])*St.r,k[Lt]=k[O]+Math.sin(Pt[Ft])*St.r})}let ce=[];for(let O=0;O<s;O++)h[O]&&ce.push(O);let ie=new Float64Array(s),_e=new Float64Array(s),ht=new Float64Array(s),mt=new Int16Array(s);for(let O=0;O<s;O++)mt[O]=o[O]?u[O]:c[O]>=0?u[c[O]]:0;for(let O of ce){let ut=l(O),St=0,Et=0,Bt=0,Pt=-1,Lt=-1;for(let[Ft,jt]of ut){let ee=Math.sqrt(jt);St+=Z[Ft]*ee,Et+=k[Ft]*ee,Bt+=ee,jt>Lt&&(Lt=jt,Pt=Ft)}ie[O]=Z[O]=St/Bt,_e[O]=k[O]=Et/Bt,mt[O]=u[Pt],ht[O]=sp(n[O])*1.5+.6}vt(ce,ht,140,{max:3,same:()=>!0,move:(O,ut,St)=>{Z[O]=Math.min(S-2,Math.max(2,ut)),k[O]=Math.min(L-2,Math.max(2,St))}},(O,ut,St)=>{for(let Et of ce)O[Et]+=(ie[Et]-Z[Et])*.04*St,ut[Et]+=(_e[Et]-k[Et])*.04*St}),t(`mapa: ${W.length} bairros, ${ot.length} terrenos, ${s-ot.length-ce.length} nas pra\xE7as, ${ce.length} no c\xE9u, ${S.toFixed(0)} \xD7 ${L.toFixed(0)}`);let Nt=O=>Math.round(O*10)/10;return{v:Eu,W:Nt(S),H:Nt(L),x:Array.from(Z,Nt),y:Array.from(k,Nt),plate:Array.from(mt,O=>B.get(O)),sky:Array.from(h),anchor:Array.from(c),lot:Array.from(p,Nt),plates:W.map(O=>({c:O.c,x0:Nt(O.x0),y0:Nt(O.y0),x1:Nt(O.x1),y1:Nt(O.y1)}))}}var Ot=(i,t=document)=>t.querySelector(i),re=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),mo=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Ye=(i,t=0)=>Number(i).toLocaleString("pt-BR",{minimumFractionDigits:t,maximumFractionDigits:t}),dp=i=>typeof i=="number"&&isFinite(i),qe=i=>dp(i)?i>=1e12?`R$ ${Ye(i/1e12,2)} tri`:i>=1e9?`R$ ${Ye(i/1e9,i>=1e11?0:1)} bi`:i>=1e6?`R$ ${Ye(i/1e6,0)} mi`:`R$ ${Ye(i)}`:"\u2013",ai=i=>dp(i)&&i>=0?`${Ye(i,i>=10||i===Math.round(i)?i===Math.round(i)?0:1:2)}%`:"\u2013",ln=(i,t,e)=>`${Ye(i)} ${i===1?t:e}`,zi=(i,t="ic")=>`<svg class="${t}" aria-hidden="true"><use href="#i-${i}"/></svg>`,er={get:(i,t)=>{try{let e=localStorage.getItem(`n1:${i}`);return e==null?t:JSON.parse(e)}catch{return t}},set:(i,t)=>{try{localStorage.setItem(`n1:${i}`,JSON.stringify(t))}catch{}}},zc=matchMedia("(prefers-reduced-motion: reduce)").matches,tr=matchMedia("(pointer: coarse)").matches,cn=i=>{let t=String(i).replace(/[\s,]+(S\.?\/?A\.?|S\/a|Ltda\.?|Inc\.?|LLC|S\.à ?r\.l\.?|Sarl|S\.R\.L\.)\s*$/i,"").replace(/\s*\(.*?\)\s*$/,"").replace(/[\s,;-]+$/,"");return t.length>34?`${t.slice(0,32)}\u2026`:t},B_=i=>i.length===14?`${i.slice(0,2)}.${i.slice(2,5)}.${i.slice(5,8)}/${i.slice(8,12)}-${i.slice(12)}`:i;function go(i){let t=Ot("#toast");t.textContent=i,t.hidden=!1,clearTimeout(go.t),go.t=setTimeout(()=>{t.hidden=!0},2800)}var Kr={fin:["#8fb8e8","Bancos e servi\xE7os financeiros","Financeiro"],tech:["#7cc6d9","Telecom, m\xEDdia e tecnologia","Tecnologia"],saude:["#78cfc0","Sa\xFAde e educa\xE7\xE3o","Sa\xFAde"],log:["#8ccfa3","Transporte e log\xEDstica","Log\xEDstica"],agro:["#b5cf86","Agro, alimentos e bebidas","Agro"],ind:["#d4c97f","Ind\xFAstria e bens de capital","Ind\xFAstria"],util:["#e3bb72","Energia el\xE9trica e saneamento","Energia"],oil:["#e59f78","Petr\xF3leo, g\xE1s e qu\xEDmica","Petr\xF3leo"],base:["#d99090","Minera\xE7\xE3o, siderurgia e papel","Minera\xE7\xE3o"],cons:["#d996b4","Varejo e consumo","Consumo"],imob:["#b9a0dd","Constru\xE7\xE3o e im\xF3veis","Imobili\xE1rio"],out:["#a8b3bf","Holdings e outros","Holdings"]},Xc={pf:["#f0c9a0","Pessoa f\xEDsica"],hold:["#8ea3bd","Holding ou empresa"],fund:["#a9a2f5","Gestora ou fundo"],pen:["#d39af0","Fundo de pens\xE3o"],gov:["#f2d37a","Governo"],sub:["#7fd6b4","Controlada em comum"]},z_="#b3a6f7",kc="#3cf0b4",Wi=i=>(Kr[i]||Kr.out)[0],Nu=i=>i.t==="s"?"sub":i.t==="p"?"pf":Xc[i.c]?i.c:"hold",wi=i=>i.t==="c"?Wi(i.c):Xc[Nu(i)][0],oi=i=>i.t==="c"?"Companhia aberta":Xc[Nu(i)][1],k_={sector:Wi,kind:i=>Xc[Nu(i)][0],investor:z_},P={ready:!1};function H_(i){let t=i.nodes,e=t.length;Object.assign(P,{data:i,nodes:t,N:e,groups:i.groups||[],setores:i.setores||{}}),t.forEach((r,a)=>{r.i=a,r.f=mo(r.n)});let n=i.edges||[];P.M=n.length,P.es=new Int32Array(P.M),P.et=new Int32Array(P.M),P.ep=new Float32Array(P.M),P.ef=new Uint8Array(P.M),n.forEach(([r,a,o,l],c)=>{P.es[c]=r,P.et[c]=a,P.ep[c]=o,P.ef[c]=l});let s=i.board||[];P.B=s.length,P.bs=new Int32Array(P.B),P.bt=new Int32Array(P.B),P.br=s.map(r=>r[2]),s.forEach(([r,a],o)=>{P.bs[o]=r,P.bt[o]=a}),P.out=Array.from({length:e},()=>[]),P.inc=Array.from({length:e},()=>[]),P.brd=Array.from({length:e},()=>[]);for(let r=0;r<P.M;r++)P.out[P.es[r]].push(r),P.inc[P.et[r]].push(r);for(let r=0;r<P.B;r++)P.brd[P.bs[r]].push(r),P.brd[P.bt[r]].push(r);P.groups.forEach((r,a)=>{r.i=a,r.f=mo(r.n);let o={};for(let l of r.m)t[l].t==="c"&&(o[t[l].c]=(o[t[l].c]||0)+(t[l].mc||1e8));r.sector=Object.entries(o).sort((l,c)=>c[1]-l[1])[0]?.[0]||"out"}),P.deg=Float32Array.from(t,(r,a)=>P.out[a].length+P.inc[a].length+P.brd[a].length),P.crank=new Int32Array(e).fill(1e9),t.map((r,a)=>a).filter(r=>t[r].t==="c").sort((r,a)=>(t[a].mc||0)-(t[r].mc||0)).forEach((r,a)=>{P.crank[r]=a}),P.labelOrder=t.map((r,a)=>a).sort((r,a)=>Hc(a)-Hc(r)),P.byId=new Map(t.map(r=>[r.id,r.i])),P.byK=new Map(t.filter(r=>r.k).map(r=>[r.k,r.i])),P.bySlug=new Map(t.filter(r=>r.s).map(r=>[r.s,r.i])),P.byCnpj=new Map(t.filter(r=>r.cnpj).map(r=>[r.cnpj,r.i])),P.ready=!0}var Hc=i=>{let t=P.nodes[i];return t.t==="c"?1e15+(t.mc||0)+P.deg[i]*1e8:(t.v||0)+P.deg[i]*5e8},at={mode:"world",hover:-1,sel:-1,group:-1,sector:-1,shape:null,hl:null,layers:{people:!0,funds:!0,board:!1,ctlonly:!1,groups:!0,...er.get("mundo-layers",{})},pathIds:null,lastInput:performance.now()},Gn=new Uint8Array(1);function pp(){Gn=new Uint8Array(P.N);let i=at.layers;for(let t=0;t<P.N;t++){let e=P.nodes[t],n=1;e.t==="p"&&!i.people&&(n=0),e.t==="j"&&(e.c==="fund"||e.c==="pen")&&!i.funds&&(n=0),e.b&&!i.board&&!P.out[t].length&&!P.inc[t].length&&(n=0),i.ctlonly&&e.t!=="c"&&!P.out[t].some(s=>P.ef[s]&1)&&(n=0),Gn[t]=n}Ct?.setVisible(Gn)}var Ct=null,Gi=null;function Uu(i){let t=new Set([i]),e=new Set,n=new Set;for(let s of P.out[i])Gn[P.et[s]]&&(!at.layers.ctlonly||P.ef[s]&1)&&(t.add(P.et[s]),e.add(s));for(let s of P.inc[i])Gn[P.es[s]]&&(!at.layers.ctlonly||P.ef[s]&1)&&(t.add(P.es[s]),e.add(s));if(at.layers.board||P.nodes[i].b)for(let s of P.brd[i]){let r=P.bs[s]===i?P.bt[s]:P.bs[s];t.add(r),n.add(s)}return{nodes:t,edges:e,brd:n}}function li(i,t,e,n=[],s=.75,r=!1,a=null){if(at.hl=i,at.rel=a,sy(),!Ct)return;if(!i){Ct.setHighlight(null),Ct.setFlows([]);return}let o=new Map;for(let c of i)o.set(c,.5);for(let c of n)o.set(c,1);Ct.setHighlight(o,s);let l=[];for(let c of t||[])l.push([P.es[c],P.et[c],r?1:P.ef[c]&1,P.ep[c]]);for(let c of e||[])l.push([P.bs[c],P.bt[c],r?1:0,4]);l.sort((c,h)=>h[2]-c[2]),Ct.setFlows(l)}function Fu(i,t){let e=new Map;for(let n of t.edges){let s=P.ef[n]&1,r=P.ep[n]>=0?ai(P.ep[n]):"";P.et[n]===i?e.set(P.es[n],s?`controla${r?` \xB7 ${r}`:""}`:r?`dono de ${r}`:"acionista"):e.set(P.et[n],s?`controlada${r?` \xB7 ${r}`:""}`:r?`participa\xE7\xE3o de ${r}`:"participa\xE7\xE3o")}for(let n of t.brd){let s=P.bs[n]===i?P.bt[n]:P.bs[n];e.has(s)||e.set(s,{P:"presid\xEAncia do conselho",E:"presid\xEAncia executiva",C:"conselho",D:"diretoria"}[P.br[n]]||"administra\xE7\xE3o")}return e}function bn(i,{fly:t=!0,push:e=!0}={}){if(at.mode!=="world"&&ki(!1),Xi(),at.sel=i,at.group=-1,Ou(),ta(),i<0){li(null),xp(),e&&Is("");return}let n=Uu(i);li(n.nodes,n.edges,n.brd,[i],.75,!1,Fu(i,n)),Bu(i),qc(),t&&Ct.flyToNodes(V_(i,n.nodes),{minSpan:16}),e&&Is(`n/${P.nodes[i].id}`)}function V_(i,t){let e=[...t],n=1/0,s=-1/0,r=1/0,a=-1/0;for(let l of e)n=Math.min(n,Ct.X[l]),s=Math.max(s,Ct.X[l]),r=Math.min(r,Ct.Z[l]),a=Math.max(a,Ct.Z[l]);return Ct.sky[i]||Math.hypot(s-n,a-r)<=62?e:e.filter(l=>l===i||Math.hypot(Ct.X[l]-Ct.X[i],Ct.Z[l]-Ct.Z[i])<=26)}function Vc(i,{push:t=!0}={}){at.mode!=="world"&&ki(!1),Xi();let e=P.groups[i];at.sel=-1,at.group=i,Ou(),ta();let n=new Set(e.m),s=new Set;for(let r of e.m)for(let a of P.out[r])n.has(P.et[a])&&s.add(a);li(n,s,new Set,e.m.filter(r=>P.nodes[r].t==="c")),q_(i),qc(),Ct.flyToNodes(e.m,{minSpan:20}),t&&Is(`g/${i}`)}var ap=i=>(P.data.mapa.plates||[]).findIndex(t=>t.c===i);function xo(i,{push:t=!0,fly:e=!0}={}){i<0||(at.mode!=="world"&&ki(!1),Xi(),at.sel=-1,at.group=-1,at.sector=i,ta(),li(null),Ct.setFocusPlate(i),py(i),e&&Ct.flyToPlate(i),qc(),t&&Is(`setor/${P.data.mapa.plates[i].c}`))}function Ou(){at.sector<0||(at.sector=-1,Ct?.setFocusPlate(-1))}function op(i){if(!Ct||at.mode!=="world")return;if(at.shape===i||!i){ta(),at.sel>=0?bn(at.sel,{fly:!1,push:!1}):li(null);return}(at.sel>=0||at.group>=0)&&(at.sel=-1,at.group=-1,at.sector<0&&xp(),Is(at.sector>=0?`setor/${P.data.mapa.plates[at.sector].c}`:""),qc()),Xi(),at.shape=i,mp();let t=new Set,e=new Map;for(let n=0;n<P.N;n++)Gn[n]&&Ct.shape[n]===i&&(at.sector<0||P.data.mapa.plate[n]===at.sector)&&(t.add(n),e.set(n,.02));at.hl=t,Ct.setHighlight(e,.85),Ct.setFlows([])}function ta(){at.shape&&(at.shape=null,mp())}var mp=()=>{for(let i of document.querySelectorAll("#m-key [data-shape]"))i.classList.toggle("on",i.dataset.shape===at.shape)};function gp(i){let t=-1,e=-2;for(let n of P.inc[i])P.ef[n]&1&&P.ep[n]>e&&(e=P.ep[n],t=P.es[n]);return t}function G_(i){let t=[i],e=new Set([i]);for(;;){let n=gp(t[t.length-1]);if(n<0||e.has(n))break;e.add(n),t.push(n)}return t}var W_=(i,t)=>P.out[i].find(e=>P.et[e]===t);function X_(i){let t=wi(i);if(i.t==="c"){let e=i.n.replace(/[^A-Za-zÀ-ÿ0-9 ]/g,"").split(/\s+/).filter(Boolean).slice(0,2).map(n=>n[0]).join("").toUpperCase();return`<span class="m-badge" style="--c:${t}"><span>${re(e)}</span>${i.tk?`<img src="https://icons.brapi.dev/icons/${re(i.tk)}.svg" alt="" loading="lazy" onload="this.naturalWidth > 1 ? this.classList.add('ok') : this.remove()" onerror="this.remove()">`:""}</span>`}if(i.t==="p"){let e=i.n.split(/\s+/).filter(n=>n&&!/^(de|da|do|das|dos|e)$/i.test(n)).slice(0,2).map(n=>n[0]).join("").toUpperCase();return`<span class="m-badge round" style="--c:${t}"><span>${re(e)}</span></span>`}return`<span class="m-badge" style="--c:${t}">${zi("cias")}</span>`}function Rs(i,t,e,n){let s=P.nodes[i];return`<li data-go="${i}"><span class="m-dot" style="--c:${wi(s)}"></span><span class="nm">${re(s.n)}</span>
    <span class="pc ${n?"m-ctl":""}">${re(t)}</span>${e?`<small>${re(e)}</small>`:""}</li>`}function Jr(i,t=8,e=""){return i.length?`<ul class="m-list" ${e?`data-list="${e}"`:""}>${i.slice(0,t).join("")}${i.length>t?`<li class="more" data-more="${e}">Mostrar mais ${i.length-t}</li>`:""}</ul>`:""}function $_(i){let t=i.filter(h=>h.p>0).slice(0,7);if(!t.length)return"";let e=t.reduce((h,d)=>h+d.p,0),n=e>100?100/e:1;e=Math.min(100,e);let s=46,r=2*Math.PI*s,a=0,o=t.map(h=>{let d=h.p*n/100,u=Math.max(0,d*r-2),f=`<circle r="${s}" cx="60" cy="60" fill="none" stroke="${wi(P.nodes[h.o])}" stroke-width="${h.ctl?13:10}" stroke-dasharray="${u.toFixed(2)} ${(r-u).toFixed(2)}" stroke-dashoffset="${(-a*r).toFixed(2)}" data-go="${h.o}"><title>${re(P.nodes[h.o].n)} \xB7 ${ai(h.p)}</title></circle>`;return a+=d,f}).join(""),l=t[0],c=t.slice(0,5).map(h=>`<li data-go="${h.o}"><i style="--c:${wi(P.nodes[h.o])}"></i><span>${re(cn(P.nodes[h.o].n))}</span><b>${ai(h.p)}</b></li>`).join("")+(e<99.5?`<li class="rest"><i></i><span>Demais acionistas</span><b>${ai(100-e)}</b></li>`:"");return`<div class="m-donut"><svg viewBox="0 0 120 120" aria-hidden="true"><circle r="${s}" cx="60" cy="60" fill="none" class="m-donut-track" stroke-width="10"/><g transform="rotate(-90 60 60)">${o}</g>
    <text x="60" y="56" text-anchor="middle" class="m-donut-v">${ai(l.p)}</text><text x="60" y="72" text-anchor="middle" class="m-donut-l">${l.ctl?"controle":"maior fatia"}</text></svg>
    <ul>${c}</ul></div>`}var Vi={},lp={P:"Presidente do conselho",E:"Diretor-presidente (CEO)",C:"Conselho de administra\xE7\xE3o",D:"Diretoria"};function Bu(i){let t=P.nodes[i],e=Ot("#m-panel-body"),n=P.inc[i].map(m=>({j:m,o:P.es[m],p:P.ep[m],ctl:P.ef[m]&1})).sort((m,y)=>y.ctl-m.ctl||y.p-m.p),s=P.out[i].map(m=>({j:m,o:P.et[m],p:P.ep[m],ctl:P.ef[m]&1})).sort((m,y)=>y.ctl-m.ctl||(P.nodes[y.o].mc||0)*y.p-(P.nodes[m.o].mc||0)*m.p||y.p-m.p),r=P.brd[i].map(m=>({j:m,o:P.bs[m]===i?P.bt[m]:P.bs[m],r:P.br[m]})),a=t.g!=null?P.groups[t.g]:null,o=G_(i),l=s.filter(m=>m.ctl).length,c=t.t==="c"?[t.tk||"capital fechado",t.st,t.uf]:[oi(t),t.pais,t.cnpj?B_(t.cnpj):""],h=t.t==="c"?[["Valor de mercado",t.mc?qe(t.mc):"\u2013"],["Acionistas",Ye(n.length)],["Participa\xE7\xF5es",Ye(s.length)]]:[["Participa\xE7\xF5es",Ye(s.length)],["Valor estimado",t.v?qe(t.v):"\u2013"],[r.length?"Cargos":"Controla",Ye(r.length||l)]];Vi={inc:n.map(m=>Rs(m.o,ai(m.p),[m.ctl?"controlador":"",P.ef[m.j]&2?"acordo de acionistas":"",oi(P.nodes[m.o])].filter(Boolean).join(" \xB7 "),m.ctl)),out:s.map(m=>Rs(m.o,ai(m.p),[m.ctl?"controla":"",P.nodes[m.o].mc?`valor de mercado ${qe(P.nodes[m.o].mc)}`:oi(P.nodes[m.o])].filter(Boolean).join(" \xB7 "),m.ctl)),brd:r.map(m=>{let y=P.nodes[m.o];if(t.t==="c"){let g=P.brd[m.o].map(p=>P.bs[p]===m.o?P.bt[p]:P.bs[p]).filter(p=>p!==i).map(p=>cn(P.nodes[p].n));return Rs(m.o,"",`${lp[m.r]||"Cargo"} aqui \xB7 tamb\xE9m em ${g.slice(0,3).join(", ")}${g.length>3?` e mais ${g.length-3}`:""}`,!1)}return Rs(m.o,"",`${lp[m.r]||"Cargo"}${y.mc?` \xB7 ${qe(y.mc)}`:""}`,!1)})};let d=t.t==="c"&&t.k?`cias.html#cia/${encodeURIComponent(t.k)}`:t.s?`cias.html#pessoa/${encodeURIComponent(t.s)}`:"",u=t.t==="c"?P.setores[t.c]||Kr[t.c]?.[1]:"",f=at.mode==="tree";e.innerHTML=`
    <div class="m-kicker" style="--c:${wi(t)}"><i></i>${re(t.t==="c"?u||"Companhia aberta":oi(t))}</div>
    <div class="m-head">${X_(t)}<div><h2>${re(t.n)}</h2><p>${re(c.filter(Boolean).join(" \xB7 "))}</p></div></div>
    ${a&&a.nc>=2?`<div class="m-chips"><button class="m-chip gold" data-group="${a.i}" type="button">${zi("cias","ic ic-xs")}Grupo ${re(a.n)} \xB7 ${ln(a.nc,"companhia","companhias")}</button></div>`:""}
    <div class="m-stats">${h.map(([m,y])=>`<div class="m-stat"><span>${m}</span><b>${re(y)}</b></div>`).join("")}</div>
    <div class="m-btns">
      ${f&&at.treeFocus===i?`<button class="m-btn primary" type="button" data-act="world">${zi("map")}Ver no mapa</button>`:`<button class="m-btn primary" type="button" data-act="tree">${zi("tree")}Estrutura societ\xE1ria</button>`}
      <button class="m-btn" type="button" data-act="path">${zi("path")}Conectar com\u2026</button>
      ${d?`<a class="m-btn wide ghost" href="${d}">${t.t==="c"?"Perfil completo da companhia":"Perfil completo"} ${zi("ext")}</a>`:""}
    </div>
    <div id="m-pick-slot"></div>
    ${t.t==="c"&&n.length?`<div class="m-sec"><h3>Composi\xE7\xE3o acion\xE1ria<small>participa\xE7\xF5es relevantes</small></h3>${$_(n)}</div>`:""}
    ${o.length>1?`<div class="m-sec"><h3>Quem controla<small>do controlador final at\xE9 aqui</small></h3><ol class="m-chain">${o.slice().reverse().map((m,y,g)=>{let p=g[y+1],M=p!=null?W_(m,p):null,E=M==null?"":P.ef[M]&2?`bloco de controle \xB7 ${ai(P.ep[M])}`:`controla com ${ai(P.ep[M])}`;return`<li data-go="${m}" class="${m===i?"me":""}"><span class="nm">${re(P.nodes[m].n)}</span><span class="pc">${E}</span></li>`}).join("")}</ol></div>`:""}
    ${n.length?`<div class="m-sec"><h3>${t.t==="c"?"Acionistas":"Quem \xE9 dono"}<small>${ln(n.length,"acionista","acionistas")} relevante${n.length===1?"":"s"}</small></h3>${Jr(Vi.inc,8,"inc")}</div>`:""}
    ${s.length?`<div class="m-sec"><h3>${t.t==="c"?"Participa\xE7\xF5es em outras":"Participa\xE7\xF5es"}<small>${ln(s.length,"empresa","empresas")}</small></h3>${Jr(Vi.out,8,"out")}</div>`:""}
    ${r.length?`<div class="m-sec"><h3>${t.t==="c"?"Quem do conselho ou da diretoria tamb\xE9m est\xE1 em outras":"Cargos"}<small>${ln(r.length,t.t==="c"?"pessoa":"companhia",t.t==="c"?"pessoas":"companhias")}</small></h3>${Jr(Vi.brd,8,"brd")}</div>`:""}
    <p class="m-foot">Participa\xE7\xF5es acima de 5% e controladores, como declarados no Formul\xE1rio de Refer\xEAncia de cada companhia \xE0 CVM${t.v?"; valor estimado = participa\xE7\xE3o \xD7 valor de mercado":""}.</p>`,$c()}function q_(i){let t=P.groups[i],e=t.m.filter(a=>P.nodes[a].t==="c").sort((a,o)=>(P.nodes[o].mc||0)-(P.nodes[a].mc||0)),n=P.nodes[t.h];Vi={cos:e.map(a=>Rs(a,P.nodes[a].mc?qe(P.nodes[a].mc):"",[P.nodes[a].tk,a===t.h?"topo do grupo":""].filter(Boolean).join(" \xB7 "),!1))};let s=e.reduce((a,o)=>a+(P.nodes[o].mc||0),0),r=s?`<div class="m-bar">${e.filter(a=>P.nodes[a].mc).slice(0,12).map(a=>`<span data-go="${a}" style="flex:${P.nodes[a].mc/s};--c:${wi(P.nodes[a])}" title="${re(P.nodes[a].n)} \xB7 ${qe(P.nodes[a].mc)}"></span>`).join("")}</div>`:"";Ot("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${Wi(t.sector)}"><i></i>Grupo econ\xF4mico \xB7 ${re(Kr[t.sector]?.[1]||"")}</div>
    <div class="m-head"><span class="m-badge" style="--c:${Wi(t.sector)}">${zi("cias")}</span><div><h2>Grupo ${re(t.n)}</h2><p>${ln(t.nc,"companhia aberta","companhias abertas")} \xB7 ${ln(t.m.length,"entidade","entidades")}</p></div></div>
    <div class="m-stats">
      <div class="m-stat"><span>Valor de mercado</span><b>${re(t.mc?qe(t.mc):"\u2013")}</b></div>
      <div class="m-stat"><span>Companhias</span><b>${Ye(t.nc)}</b></div>
      <div class="m-stat"><span>Entidades</span><b>${Ye(t.m.length)}</b></div>
    </div>
    ${r}
    <div class="m-btns"><button class="m-btn primary wide" type="button" data-act="tree" data-node="${t.h}">${zi("tree")}Estrutura a partir de ${re(cn(n.n))}</button></div>
    ${t.r.length?`<div class="m-sec"><h3>Controle final</h3>${Jr(t.r.map(a=>Rs(a,"",oi(P.nodes[a]),!0)),6)}</div>`:""}
    <div class="m-sec"><h3>Companhias do grupo<small>valor de mercado</small></h3>${Jr(Vi.cos,12,"cos")}</div>
    <p class="m-foot">Grupo = companhias que chegam ao mesmo topo seguindo, em cada uma, o acionista controlador de maior participa\xE7\xE3o.</p>`,$c()}function $c(){let i=Ot("#m-panel");innerWidth<=760&&(i.hidden||at.mode!=="world")&&i.classList.add("peek"),i.hidden=!1,document.body.classList.add("panel-open"),Ot("#m-panel-body").scrollTop=0,Fn(),clearTimeout(Fn.t),Fn.t=setTimeout(Fn,450)}function xp(){Ot("#m-panel").hidden=!0,document.body.classList.remove("panel-open"),Fn(),clearTimeout(Fn.t),Fn.t=setTimeout(Fn,450)}function Y_(i,t){let e=l=>!(P.nodes[l].t==="j"&&(P.nodes[l].c==="fund"||P.nodes[l].c==="pen"))||l===i||l===t,n=new Int32Array(P.N).fill(-1),s=new Int32Array(P.N).fill(-1),r=[i];for(n[i]=i;r.length;){let l=r.shift();if(l===t)break;if(l!==i&&!e(l))continue;let c=(h,d)=>{n[h]===-1&&(n[h]=l,s[h]=d,r.push(h))};for(let h of P.out[l])c(P.et[h],h);for(let h of P.inc[l])c(P.es[h],h);for(let h of P.brd[l])c(P.bs[h]===l?P.bt[h]:P.bs[h],-2-h)}if(n[t]===-1)return null;let a=[t],o=[];for(let l=t;l!==i;l=n[l])o.unshift(s[l]),a.unshift(n[l]);return{path:a,ev:o}}function Gc(i,t,{push:e=!0}={}){let n=Y_(i,t);if(!n){go(`N\xE3o h\xE1 liga\xE7\xE3o entre ${cn(P.nodes[i].n)} e ${cn(P.nodes[t].n)} sem passar por gestoras ou fundos`);return}at.mode==="tree"&&ki(!1),at.mode="path",at.sel=-1,ta();let s=new Set(n.path),r=new Set,a=new Set;for(let l of n.ev)l>=0?r.add(l):a.add(-2-l);if(at.pathIds=[i,t],at.forceVis&&(at.forceVis=null,Ct.setVisible(Gn)),n.path.some(l=>!Gn[l])){at.forceVis=new Set(n.path);let l=Gn.slice();for(let c of n.path)l[c]=1;Ct.setVisible(l)}Xi(),li(s,r,a,n.path,.85,!0),Ot("#m-mode").hidden=!1,Ot("#m-mode-text").innerHTML=`<span class="m-mode-k">Caminho</span><b>${re(cn(P.nodes[i].n))} \u2192 ${re(cn(P.nodes[t].n))}</b><span class="m-mode-n">${ln(n.ev.length,"passo","passos")}</span>`;let o=n.ev.map(l=>{let c=f=>`<b data-go="${f}">${re(P.nodes[f].n)}</b>`;if(l>=0){let f=P.es[l],m=P.et[l],y=P.ep[l],g=P.ef[l]&1;return`<li>${c(f)} ${g?"controla":"tem"} ${y>=0?`${ai(y)} de`:"participa\xE7\xE3o em"} ${c(m)}</li>`}let h=-2-l,d=P.bs[h],u=P.bt[h];return`<li>${c(d)} est\xE1 ${{P:"na presid\xEAncia do conselho",E:"na presid\xEAncia executiva",C:"no conselho de administra\xE7\xE3o",D:"na diretoria"}[P.br[h]]||"na administra\xE7\xE3o"} de ${c(u)}</li>`});Ot("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${kc}"><i></i>Caminho mais curto</div>
    <div class="m-head"><span class="m-badge" style="--c:${kc}">${zi("path")}</span><div><h2>Como se conectam</h2><p>${re(cn(P.nodes[i].n))} e ${re(cn(P.nodes[t].n))}</p></div></div>
    <div class="m-sec"><h3>O caminho<small>${ln(n.ev.length,"liga\xE7\xE3o","liga\xE7\xF5es")}</small></h3><ol class="m-path">${o.join("")}</ol></div>
    <div class="m-btns"><button class="m-btn wide" type="button" data-sel="${i}">Voltar para ${re(cn(P.nodes[i].n))}</button><button class="m-btn wide" type="button" data-sel="${t}">Ir para ${re(cn(P.nodes[t].n))}</button></div>
    <p class="m-foot">Liga\xE7\xF5es por participa\xE7\xE3o acion\xE1ria (5% ou mais, ou controle) e por pessoas que est\xE3o no conselho ou na diretoria das duas. Gestoras e fundos n\xE3o contam como ponte.</p>`,$c(),Ct.flyToNodes(n.path,{minSpan:20}),e&&Is(`c/${P.nodes[i].id}/${P.nodes[t].id}`)}async function Ps(i,{push:t=!0}={}){let e=P.nodes[i],n=[];try{await Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1200))])}catch{}if(e.t==="c"&&e.k)try{n=(await fetch(`data/cias/perfil/${encodeURIComponent(e.k)}.json`,{cache:"no-cache"}).then(a=>a.ok?a.json():{})).participacoes||[]}catch{n=[]}let s=at.mode!=="tree";s&&await Wc(),at.mode="tree",at.sel=i,at.group=-1,at.treeFocus=i,Ou(),ta(),Xi(),vo(-1),at.hover=-1,li(null),document.body.classList.add("in-tree"),Bu(i),Gi.open(i,n,{from:s?Ct.project(i,{}):null}),Ot("#m-mode").hidden=!1,Ot("#m-mode-text").innerHTML=`<span class="m-mode-k">Estrutura societ\xE1ria</span><b>${re(e.n)}</b>`,Fn(),t&&Is(`e/${e.id}`)}function Wc(){let i=Ot("#m-fade");return!i||zc?Promise.resolve():(i.classList.add("on"),clearTimeout(Wc.t),Wc.t=setTimeout(()=>i.classList.remove("on"),260),new Promise(t=>setTimeout(t,170)))}function ki(i=!0){at.mode==="tree"&&(Wc(),Gi.close(),document.body.classList.remove("in-tree")),at.mode="world",Ot("#m-mode").hidden=!0,at.pathIds=null,at.forceVis&&(at.forceVis=null,Ct.setVisible(Gn)),i&&(at.sel>=0?bn(at.sel):(li(null),Is("")))}function Z_(i,t=9){let e=mo(i.trim());if(e.length<2)return[];let n=e.split(/\s+/),s=[];for(let r of P.groups)r.nc<2||n.every(a=>r.f.includes(a))&&s.push({g:r.i,s:(r.f.startsWith(e)?100:50)+Math.log10(r.mc||10)});for(let r of P.nodes){if(!Gn[r.i]&&r.t!=="c")continue;let a=0;r.f===e||r.tk&&mo(r.tk)===e?a=120:r.f.startsWith(e)||r.tk&&mo(r.tk).startsWith(e)?a=90:n.every(o=>r.f.includes(o))&&(a=r.f.split(/\s+/).some(o=>o.startsWith(n[0]))?60:35),a&&(a+=r.t==="c"?12+Math.log10(r.mc||1e6):Math.log10(r.v||1e6)+P.deg[r.i]*.2,s.push({i:r.i,s:a}))}return s.sort((r,a)=>a.s-r.s).slice(0,t)}function J_(i){if(!i.length)return'<li class="none">Nada com esse nome no mapa.</li>';let t=[["Grupos econ\xF4micos",i.filter(n=>n.g!=null)],["Companhias",i.filter(n=>n.i!=null&&P.nodes[n.i].t==="c")],["Pessoas e investidores",i.filter(n=>n.i!=null&&P.nodes[n.i].t!=="c")]],e=0;return t.filter(([,n])=>n.length).map(([n,s])=>`<li class="grp" role="presentation">${n}</li>`+s.map(r=>{let a=e++;if(r.g!=null){let l=P.groups[r.g];return`<li role="option" data-idx="${a}" aria-selected="false"><span class="m-dot" style="--c:${Wi(l.sector)}"></span><span class="m-r-txt"><b>Grupo ${re(l.n)}</b><small>${ln(l.nc,"companhia","companhias")}${l.mc?` \xB7 ${qe(l.mc)}`:""}</small></span></li>`}let o=P.nodes[r.i];return`<li role="option" data-idx="${a}" aria-selected="false"><span class="m-dot" style="--c:${wi(o)}"></span><span class="m-r-txt"><b>${re(o.n)}</b><small>${re(o.t==="c"?[o.tk,o.mc?qe(o.mc):"capital fechado",o.st].filter(Boolean).join(" \xB7 "):[oi(o),o.v?`\u2248 ${qe(o.v)}`:""].filter(Boolean).join(" \xB7 "))}</small></span></li>`}).join("")).join("")}function vp(i,t,e){let n=[],s=0,r=()=>{n=Z_(i.value),n=[...n.filter(o=>o.g!=null),...n.filter(o=>o.i!=null&&P.nodes[o.i].t==="c"),...n.filter(o=>o.i!=null&&P.nodes[o.i].t!=="c")],s=Math.min(s,Math.max(0,n.length-1)),t.hidden=!i.value.trim(),t.innerHTML=J_(n),t.querySelectorAll("[data-idx]").forEach(o=>o.setAttribute("aria-selected",String(+o.dataset.idx===s))),i.closest("[role=combobox]")?.setAttribute("aria-expanded",String(!t.hidden))},a=o=>{o&&(i.value="",t.hidden=!0,i.blur(),e(o))};i.addEventListener("input",()=>{s=0,r()}),i.addEventListener("focus",()=>{i.value.trim()&&r()}),i.addEventListener("keydown",o=>{o.key==="ArrowDown"||o.key==="ArrowUp"?(o.preventDefault(),s=(s+(o.key==="ArrowDown"?1:-1)+n.length)%Math.max(1,n.length),r()):o.key==="Enter"?(o.preventDefault(),a(n[s])):o.key==="Escape"&&Vn.on?Mo():o.key==="Escape"&&(i.value="",t.hidden=!0,i.blur())}),t.addEventListener("pointerdown",o=>{let l=o.target.closest("[data-idx]");l&&(o.preventDefault(),a(n[+l.dataset.idx]))}),document.addEventListener("pointerdown",o=>{!t.contains(o.target)&&o.target!==i&&(t.hidden=!0)})}var Cu="groups";function Ru(){let i=Ot("#m-rank"),t=Ot("#m-tab-note"),e="";if(Cu==="groups"){t.textContent="Grupos econ\xF4micos pelo valor de mercado das companhias abertas que re\xFAnem.";let n=P.groups.filter(r=>r.nc>=2),s=n[0]?.mc||1;e=n.slice(0,60).map(r=>`<li data-group="${r.i}" class="${at.group===r.i?"on":""}" style="--c:${Wi(r.sector)};--w:${((r.mc||0)/s*100).toFixed(1)}%"><b>${re(r.n)}</b><span class="v">${r.mc?qe(r.mc).replace("R$ ",""):""}</span>
      <small>${ln(r.nc,"companhia","companhias")}${r.r.length?` \xB7 ${re(r.r.slice(0,2).map(a=>cn(P.nodes[a].n)).join(", "))}`:""}</small><i class="m-rank-bar"></i></li>`).join("")}else if(Cu==="investors"){t.textContent="Quem tem mais valor em participa\xE7\xF5es diretas (participa\xE7\xE3o \xD7 valor de mercado).";let n=P.nodes.filter(r=>r.t!=="c"&&r.v).sort((r,a)=>a.v-r.v).slice(0,60),s=n[0]?.v||1;e=n.map(r=>`<li data-go="${r.i}" class="${at.sel===r.i?"on":""}" style="--c:${wi(r)};--w:${(r.v/s*100).toFixed(1)}%"><b>${re(cn(r.n))}</b><span class="v">${qe(r.v).replace("R$ ","")}</span>
      <small>${re(oi(r))} \xB7 ${ln(P.out[r.i].length,"participa\xE7\xE3o","participa\xE7\xF5es")}</small><i class="m-rank-bar"></i></li>`).join("")}else{t.textContent="Pessoas e empresas que mais ligam companhias entre si: participa\xE7\xF5es e cadeiras em conselhos e diretorias.";let n=a=>new Set([...P.out[a.i].map(o=>P.et[o]),...P.brd[a.i].map(o=>P.bt[o])].filter(o=>P.nodes[o].t==="c")).size,s=P.nodes.filter(a=>a.t==="p"||a.t==="j").map(a=>[a,n(a)]).filter(([,a])=>a>=3).sort((a,o)=>o[1]-a[1]||(o[0].v||0)-(a[0].v||0)).slice(0,60),r=s[0]?.[1]||1;e=s.map(([a,o])=>`<li data-go="${a.i}" class="${at.sel===a.i?"on":""}" style="--c:${wi(a)};--w:${(o/r*100).toFixed(1)}%"><b>${re(cn(a.n))}</b><span class="v">${o}</span>
      <small>${re(oi(a))} \xB7 ${o} companhias</small><i class="m-rank-bar"></i></li>`).join("")}i.innerHTML=e}function qc(){for(let i of Ot("#m-rank").children)i.classList.toggle("on",i.dataset.group!=null&&+i.dataset.group===at.group||i.dataset.go!=null&&+i.dataset.go===at.sel)}var K_=[["tower","Companhia aberta",'<svg viewBox="0 0 20 20"><path d="M6 18V5h8v13z" fill="#141b29"/><path d="M6 5h8v1.8H6z" fill="var(--c)"/><path d="M7.6 8.4h1.3v1.3H7.6zM11 8.4h1.3v1.3H11zM9.3 11h1.3v1.3H9.3zM7.6 13.6h1.3v1.3H7.6zM11 13.6h1.3v1.3H11zM11 11h1.3v1.3H11z" fill="#ffd9a0"/></svg>'],["block","Capital fechado",'<svg viewBox="0 0 20 20"><path d="M4 17v-6h12v6z" fill="#141b29"/><path d="M4 11h12v1.5H4z" fill="var(--c)"/><path d="M6 13.6h1.3v1.3H6zM12.6 13.6h1.3v1.3h-1.3z" fill="#ffd9a0"/></svg>'],["sub","Controlada em comum",'<svg viewBox="0 0 20 20"><path d="M4 17v-6h12v6z" fill="#141b29"/><path d="M4 11h12v1.5H4z" fill="#7fd6b4"/><path d="M9.3 13.6h1.3v1.3H9.3z" fill="#ffd9a0"/></svg>'],["pawn","Pessoa f\xEDsica",'<svg viewBox="0 0 20 20"><circle cx="10" cy="6" r="2.6" fill="#f0c9a0"/><path d="M7.4 15.5 8.4 9.4h3.2l1 6.1z" fill="#f0c9a0"/><ellipse cx="10" cy="16" rx="4.6" ry="1.6" fill="#c99e74"/></svg>'],["tile","Holding ou empresa",'<svg viewBox="0 0 20 20"><path d="M5 8.5 10 6l5 2.5v6L10 17l-5-2.5z" fill="#5f7088"/><path d="M5 8.5 10 6l5 2.5-5 2.5z" fill="#a9bdd6"/></svg>'],["inv","Gestora, fundo ou governo",'<svg viewBox="0 0 20 20"><path d="M10 2.5 15 9 10 17.5 5 9z" fill="#b3a6f7"/><path d="M10 2.5 15 9H5z" fill="#d6cffb"/><path d="M10 17.5 15 9H10z" fill="#8576d6"/></svg>']],j_={tower:"Aberta",block:"Fechada",tile:"Holding",sub:"Controlada",pawn:"Pessoa",inv:"Gestora"},Q_=()=>K_.map(([i,t,e])=>`<button type="button" class="m-key-i" data-shape="${i}" title="Destacar no mapa: ${t}" style="--c:${Wi("util")}">${e}<span class="l">${t}</span><span class="s">${j_[i]}</span></button>`).join("")+'<span class="m-key-sep"></span><span class="m-key-i m-key-ctl" title="O feixe corre de quem \xE9 dono para o que \xE9 possu\xEDdo"><i class="m-key-ln"></i><span class="l">Controla</span><span class="s">Controla</span></span><span class="m-key-i m-key-ctl part" title="Participa\xE7\xE3o sem controle"><i class="m-key-ln"></i><span class="l">Participa</span><span class="s">Participa</span></span>';function zu(){let i=P.data.mapa,t=i.plates.map(()=>({n:0,listed:0,mc:0}));for(let e=0;e<P.N;e++){let n=P.nodes[e],s=t[i.plate[e]];n.t==="c"&&(s.n++,n.mc&&(s.listed++,s.mc+=n.mc))}return t}var jr=i=>Kr[i.c]?.[1]||i.c,ty=i=>Kr[i.c]?.[2]||i.c,yo=i=>Wi(i.c);function ey(){let i=zu(),t=P.data.mapa.plates.map((e,n)=>n).sort((e,n)=>i[n].mc-i[e].mc);Ot("#m-legend").innerHTML=`<div class="m-lg-sec">${t.map(e=>{let n=P.data.mapa.plates[e];return`<button class="lg" type="button" data-plate="${e}"><i style="--c:${yo(n)}"></i><span>${re(jr(n))}</span><small>${Ye(i[e].n)}</small></button>`}).join("")}</div>`,Ot("#m-key").innerHTML=Q_()}function Is(i){let t=i?`#${i}`:"";location.hash!==t&&history.replaceState(null,"",t||location.pathname+location.search)}function _p(){let i=decodeURIComponent(location.hash.replace(/^#/,"")),[t,e,n]=i.split("/"),s=r=>r?P.byId.has(r)?P.byId.get(r):r.startsWith("k")&&P.byK.has(r.slice(1))?P.byK.get(r.slice(1)):P.bySlug.has(r)?P.bySlug.get(r):P.byK.has(r)?P.byK.get(r):-1:-1;t==="n"&&s(e)>=0?bn(s(e),{push:!1}):t==="s"&&P.bySlug.has(e)?bn(P.bySlug.get(e),{push:!1}):t==="g"&&P.groups[+e]?Vc(+e,{push:!1}):t==="e"&&s(e)>=0?Ps(s(e),{push:!1}):t==="c"&&s(e)>=0&&s(n)>=0?Gc(s(e),s(n),{push:!1}):t==="setor"&&ap(e)>=0?xo(ap(e),{push:!1}):(t==="n"||t==="s"||t==="e")&&go("Essa entidade n\xE3o est\xE1 no mapa: ela n\xE3o tem participa\xE7\xE3o relevante em companhia aberta.")}var Hn={pool:[],used:new Map,layer:null,t:0},Bc=[],Qr=0;function ny(){let i=performance.now();if(i-Qr<300)return Bc;Qr=i,Bc=[];for(let t of document.querySelectorAll(".m-top > :not(.m-pop), #m-explore, #m-panel, .m-nav > *, #m-hud, #m-key, #m-mode, #m-hint")){if(t.hidden||t.offsetParent===null)continue;let e=t.getBoundingClientRect();e.width&&e.height&&Bc.push([e.left-6,e.top-6,e.right+6,e.bottom+6])}return Bc}var po=null;function iy(){if(po)return po;po=P.data.mapa.plates.map(()=>[]);for(let i of P.labelOrder)P.nodes[i].t==="c"&&po[P.data.mapa.plate[i]].push(i);return po}function sy(){for(let[i,t]of Hn.used)t.classList.remove("on"),Hn.used.delete(i),Hn.pool.push(t)}function cp(i){let t=P.nodes[i];return at.rel&&at.rel.has(i)?[cn(t.n),at.rel.get(i)]:t.t==="c"?[cn(t.n),[t.tk,t.mc?qe(t.mc).replace("R$ ","R$ ").toUpperCase():"capital fechado"].filter(Boolean).join(" \xB7 ")]:[cn(t.n),[oi(t),t.v?`\u2248 ${qe(t.v)}`:""].filter(Boolean).join(" \xB7 ")]}var ku=[];function ry(){let i=zu(),t=Ot("#m-plates");t.innerHTML="",P.data.mapa.plates.forEach((e,n)=>{let s=document.createElement("button");s.type="button",s.className="m-plate",s.dataset.plate=n,s.style.setProperty("--c",yo(e));let r=ln(i[n].n,"companhia","companhias");s.innerHTML=`<b><span class="full">${re(jr(e))}</span><span class="short">${re(ty(e))}</span></b><small>${r}${i[n].mc?` \xB7 ${qe(i[n].mc)}`:""}</small>`,s.title=`Ver o setor ${jr(e)} inteiro`,t.appendChild(s),ku[n]={el:s,p:e}})}var ay={};function oy(i){let t=Ct.pxPerUnit();ku.forEach(({el:e},n)=>{let s=Ct.plates[n],r=Ct.projectPoint(s.x0+.9,Ct.PLATE_H+.1,s.z0+.7,ay),a=(s.x1-s.x0)*t,o=!!r.f&&a>46&&at.mode!=="tree";if(e.classList.toggle("on",o),e.classList.toggle("compact",a<210),e.classList.toggle("dim",at.sector>=0&&at.sector!==n),!o)return;e.style.transform=`translate3d(${r.x.toFixed(1)}px, ${r.y.toFixed(1)}px, 0)`,e.style.maxWidth=`${Math.max(60,a-18).toFixed(0)}px`;let l=e.getBoundingClientRect();l.width&&i.push([l.left-4,l.top-4,l.right+4,l.bottom+4])})}function ly(){if(!Ct||at.mode==="tree"){for(let u of Hn.used.values())u.classList.remove("on");for(let{el:u}of ku)u.classList.remove("on");return}let i=innerWidth,t=innerHeight,e=[...ny()];oy(e);let n=(u,f,m,y)=>{if(u<8||f<8||m>i-8||y>t-8)return!1;for(let g of e)if(u<g[2]&&m>g[0]&&f<g[3]&&y>g[1])return!1;return!0},s=Ct.pxPerUnit(),r=sn((s-6)/40,0,1),a=Math.round((tr?6:12)+r*(tr?26:60)),o=at.hl,l;if(o)l=[...o].sort((u,f)=>Hc(f)-Hc(u)).slice(0,60);else if(at.sector<0&&r<.5){let u=iy(),f=s*s,m=Ct.plates.map(y=>sn(Math.round((y.x1-y.x0)*(y.z1-y.z0)*f/42e3),1,6));l=[];for(let y=0;y<6;y++)for(let g=0;g<u.length;g++)y<m[g]&&u[g][y]!=null&&l.push(u[g][y]);a=Math.max(a,tr?12:34)}else at.sector>=0?(l=P.labelOrder.filter(u=>P.data.mapa.plate[u]===at.sector&&P.nodes[u].t==="c"),a=Math.max(a,tr?12:28)):l=P.labelOrder.slice(0,260);let c=new Map,h={},d=0;for(let u of l){if(d>=a)break;if(c.has(u)||!Gn[u]&&!at.forceVis?.has(u))continue;let f=P.nodes[u],m=o&&o.has(u);if(!m&&f.t!=="c"&&!Ct.sky[u]&&r<.55||(Ct.project(u,h),!h.f))continue;let[y,g]=cp(u),p=f.t==="c"&&P.crank[u]<10,M=Math.max(y.length*(p?7.6:6.9),g.length*6.1)+14,E=30,_=null;for(let[b,S]of[["r",!1],["l",!1],["r",!0],["l",!0]]){let L=b==="r"?h.x+14:h.x-14-M,x=S?h.y+8:h.y-34;if(n(L,x,L+M,x+E)){_={side:b,below:S,x0:L,y0:x};break}}_&&(e.push([_.x0,_.y0,_.x0+M,_.y0+E],[h.x-4,h.y-4,h.x+4,h.y+4]),c.set(u,{x:h.x,y:h.y,side:_.side,below:_.below,a:1,hl:m,big:p}),d++)}for(let[u,f]of Hn.used)c.has(u)||(f.classList.remove("on"),Hn.used.delete(u),Hn.pool.push(f));for(let[u,f]of c){let m=Hn.used.get(u);if(m)!m.classList.contains("on")&&performance.now()-m._t>20&&m.classList.add("on");else{m=Hn.pool.pop()||Object.assign(document.createElement("div"),{className:"m-lab"}),m.parentNode||Hn.layer.appendChild(m);let[y,g]=cp(u);m.innerHTML=`<i class="m-lab-dot"></i><span class="m-lab-ln"></span><span class="m-lab-tx"><b>${re(y)}</b><small>${re(g)}</small></span>`,m.classList.toggle("rel",!!(at.rel&&at.rel.has(u))),m.classList.toggle("relc",!!(at.rel&&/^control/.test(at.rel.get(u)||""))),m.dataset.i=u,m.classList.remove("on"),m._t=performance.now(),Hn.used.set(u,m)}m.classList.toggle("l",f.side==="l"),m.classList.toggle("b",!!f.below),m.classList.toggle("hl",!!f.hl),m.classList.toggle("big",f.big),m.style.transform=`translate3d(${f.x.toFixed(1)}px, ${f.y.toFixed(1)}px, 0)`,m.style.setProperty("--a","1")}}function Pu(){let i=Ct.plateAt(innerWidth/2+Ct.view.offX,innerHeight/2+Ct.view.offY),t=i>=0?P.data.mapa.plates[i]:null,e=yp/Math.max(1,Ct.cam.d),n=e<1.45?"":`<span>ZOOM ${e.toFixed(1).replace(".",",")}\xD7</span>${t?`<span class="m-hud-sec" style="--c:${yo(t)}">${re(jr(t).toUpperCase())}</span>`:""}`;n!==Pu.last&&(Ot("#m-hud").innerHTML=n,Pu.last=n)}var yp=160;function vo(i,t,e){let n=Ot("#m-tip");if(i<0||tr){n.hidden=!0;return}let s=P.nodes[i],r=[];if(s.t==="c"){r.push([s.tk||"Capital fechado",s.mc?qe(s.mc):""]);let c=gp(i);c>=0&&r.push(["Controle",cn(P.nodes[c].n)])}else r.push([oi(s),s.v?`\u2248 ${qe(s.v)}`:""]);let a=new Set([...P.out[i].map(c=>P.et[c]),...P.inc[i].map(c=>P.es[c])]).size;r.push(["Liga\xE7\xF5es",Ye(a+P.brd[i].length)]),n.innerHTML=`<div class="m-tip-head"><i style="background:${wi(s)}"></i><b>${re(s.n)}</b></div>${r.map(([c,h])=>`<div class="row"><span>${re(c)}</span><span>${re(h)}</span></div>`).join("")}<div class="row muted"><span>${Ct.sky[i]?"Paira sobre o que possui \xB7 ":Ct.isGround[i]?"":"Na pra\xE7a da companhia \xB7 "}clique para ver as liga\xE7\xF5es</span></div>`,n.hidden=!1;let o=n.offsetWidth,l=n.offsetHeight;n.style.left=`${sn(t+18,8,innerWidth-o-8)}px`,n.style.top=`${e+18+l>innerHeight-8?e-l-14:e+18}px`}function Fn(){if(Qr=0,!Ct)return;let i=Ot("#m-explore"),t=Ot("#m-panel"),e=Ot("#m-key").getBoundingClientRect(),n=t&&!t.hidden,s=0,r=0,a=0,o=Ot(".m-top").getBoundingClientRect().bottom+6;innerWidth>760?(i&&!i.classList.contains("collapsed")&&i.offsetParent&&(s=i.getBoundingClientRect().right),r=n?innerWidth-t.offsetLeft:62,e.height&&(a=innerHeight-e.top+6)):n?a=t.offsetHeight:a=e.height?innerHeight-e.top+6:64,Ct.setInsets(s,r,at.mode==="tree"?0:o,a);let l=Ot("#m-mode"),c=l&&!l.hidden?Math.max(o,l.getBoundingClientRect().bottom+6):o;Gi?.setFree(s,r,a,c)}var Mp=0,hp=0;function bp(i){Mp=requestAnimationFrame(bp),!document.hidden&&(at.mode==="tree"?Gi.frame(i):(Ct.update(i),Ct.render(),i-hp>32&&(ly(),Pu(),hp=i)))}var Hi=new Map,en=null,Cs=null,up=0,Iu=0,Lu=null;function cy(i){if(at.mode==="tree")return;if(i.currentTarget.setPointerCapture(i.pointerId),Hi.set(i.pointerId,{x:i.clientX,y:i.clientY}),at.lastInput=performance.now(),Xi(),Mo(),Ct.touch(),Ct.cam.vx=Ct.cam.vz=0,Ct.cam.fly=null,Hi.size===2){let[e,n]=[...Hi.values()];Cs={d:Math.hypot(e.x-n.x,e.y-n.y),mx:(e.x+n.x)/2,my:(e.y+n.y)/2},en=null;return}en={x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,moved:!1,hist:[{x:i.clientX,y:i.clientY,t:performance.now()}]}}function hy(i){if(Hi.has(i.pointerId)&&Hi.set(i.pointerId,{x:i.clientX,y:i.clientY}),at.lastInput=performance.now(),Hi.size&&Ct?.touch(),at.mode!=="tree"){if(Cs&&Hi.size===2){let[t,e]=[...Hi.values()],n=Math.hypot(t.x-e.x,t.y-e.y),s=(t.x+e.x)/2,r=(t.y+e.y)/2;Ct.zoom(Cs.d/Math.max(1,n),s,r),Ct.pan(s-Cs.mx,r-Cs.my),Cs={d:n,mx:s,my:r};return}if(en){let t=i.clientX-en.x,e=i.clientY-en.y;if(!en.moved&&Math.hypot(i.clientX-en.sx,i.clientY-en.sy)>(tr?8:4)&&(en.moved=!0,i.currentTarget.classList.add("dragging"),vo(-1)),en.moved){Ct.pan(t,e),en.x=i.clientX,en.y=i.clientY;let n=performance.now();for(en.hist.push({x:i.clientX,y:i.clientY,t:n});en.hist.length>6||en.hist.length>2&&n-en.hist[0].t>100;)en.hist.shift()}return}i.pointerType==="mouse"&&(Lu=[i.clientX,i.clientY],Iu||(Iu=requestAnimationFrame(Du)))}}function Du(){if(Iu=0,!Lu||at.mode==="tree")return;let[i,t]=Lu,e=Ct.pick(i,t,Gn),n=e<0?Ct.plateAt(i,t):-1;Ot("#map").classList.toggle("pointing",e>=0||n>=0),e!==at.hover&&(at.hover=e,clearTimeout(Du.t),at.sel<0&&at.group<0&&!at.shape&&at.mode==="world"&&(Du.t=setTimeout(()=>{if(!(at.sel>=0||at.group>=0||at.shape||at.mode!=="world"||at.hover!==e))if(e>=0){let r=Uu(e);li(r.nodes,r.edges,r.brd,[e],.5,!1,Fu(e,r))}else li(null)},e>=0?140:90))),e>=0?vo(e,i,t):n>=0&&n!==at.sector?uy(n,i,t):vo(-1)}function uy(i,t,e){let n=Ot("#m-tip");if(tr){n.hidden=!0;return}let s=P.data.mapa.plates[i],r=zu()[i];n.innerHTML=`<div class="m-tip-head"><i style="background:${yo(s)}"></i><b>${re(jr(s))}</b></div><div class="row"><span>Companhias</span><span>${Ye(r.n)}</span></div><div class="row"><span>Valor de mercado</span><span>${r.mc?qe(r.mc):"\u2013"}</span></div><div class="row muted"><span>Clique para ver o setor inteiro</span></div>`,n.hidden=!1;let a=n.offsetWidth,o=n.offsetHeight;n.style.left=`${sn(t+18,8,innerWidth-a-8)}px`,n.style.top=`${e+18+o>innerHeight-8?e-o-14:e+18}px`}function fp(i){if(Hi.delete(i.pointerId),i.currentTarget.classList.remove("dragging"),Cs){Hi.size<2&&(Cs=null);return}if(!en||at.mode==="tree"){en=null;return}let t=en;if(en=null,t.moved){let a=t.hist;if(a.length>=2&&!zc){let o=a[0],l=a[a.length-1],c=Math.max(16,l.t-o.t);performance.now()-l.t<80&&Ct.fling((l.x-o.x)/c,(l.y-o.y)/c)}return}let e=performance.now(),n=e-up<320;up=e;let s=Ct.pick(i.clientX,i.clientY,Gn);if(n&&s>=0){Ps(s);return}if(s>=0){bn(s);return}if(n){Ct.zoom(.55,i.clientX,i.clientY);return}let r=Ct.plateAt(i.clientX,i.clientY);if(r>=0&&at.mode==="world"){(r!==at.sector||at.sel>=0||at.group>=0)&&xo(r);return}(at.sel>=0||at.group>=0||at.sector>=0||at.shape||at.mode==="path")&&(at.mode==="path"&&ki(!1),bn(-1))}function fy(i){if(i.preventDefault(),at.lastInput=performance.now(),Xi(),Mo(),Ct.touch(),at.mode==="tree")return;let t=Math.exp(i.deltaY*(i.ctrlKey?.012:i.deltaMode===1?.05:.0018));Ct.zoom(t,i.clientX,i.clientY)}var Vn={on:!1,t0:0,raf:0};function dy(i){let t=Ot("#m-intro");if(!t)return;let e=P.nodes.filter(o=>o.t==="c"),n=e.reduce((o,l)=>o+(l.mc||0),0),s=P.nodes.length-e.length;Ot("#m-intro-cap").textContent=`${Ye(e.length)} companhias \xB7 ${Ye(s)} acionistas e conselheiros \xB7 ${Ye(P.M)} participa\xE7\xF5es`;let r=Ot("#m-intro-num");t.hidden=!1,requestAnimationFrame(()=>t.classList.add("on")),Object.assign(Vn,{on:!0,done:0});let a=o=>{if(!Vn.on)return;let l=sn(Ct.introK/.86,0,1),c=1-Math.pow(1-l,3);if(r.textContent=Ye(n*c/1e12,2),Ct.introK>=1&&!Vn.done&&(Vn.done=o),Vn.done&&o-Vn.done>1800){Mo(!0);return}Vn.raf=requestAnimationFrame(a)};Vn.raf=requestAnimationFrame(a)}function Mo(i=!1){if(!Vn.on)return;Vn.on=!1,cancelAnimationFrame(Vn.raf);let t=Ot("#m-intro");t.classList.remove("on"),setTimeout(()=>{t.hidden=!0},900),i||Ct.skipIntro(),document.body.classList.remove("intro"),er.get("mundo-hint",0)||(_o=setTimeout(()=>{at.sel<0&&at.mode==="world"&&(Ot("#m-hint").hidden=!1,Qr=0,_o=setTimeout(Xi,9e3))},1400))}var _o=0;function Xi(){let i=Ot("#m-hint");i&&!i.hidden&&(i.hidden=!0,er.set("mundo-hint",1),Qr=0),clearTimeout(_o)}function py(i){let t=P.data.mapa,e=t.plates[i],n=[];for(let b=0;b<P.N;b++)t.plate[b]===i&&n.push(b);let s=(b,S)=>(P.nodes[S].mc||0)-(P.nodes[b].mc||0)||P.nodes[b].n.localeCompare(P.nodes[S].n),r=yo(e);Vi={};let a=n.filter(b=>P.nodes[b].t==="c").sort(s),o=a.filter(b=>P.nodes[b].mc),l=o.reduce((b,S)=>b+P.nodes[S].mc,0),c=new Map;for(let b of a){let S=P.nodes[b].st||"Outros";(c.get(S)||c.set(S,[]).get(S)).push(b)}let h=[...c.entries()].map(([b,S])=>[b,S,S.reduce((L,x)=>L+(P.nodes[x].mc||0),0)]).sort((b,S)=>S[2]-b[2]||S[1].length-b[1].length),d=h.map(([b,S,L],x)=>(Vi[`seg${x}`]=S.map(A=>Rs(A,P.nodes[A].mc?qe(P.nodes[A].mc):"",[P.nodes[A].tk||"capital fechado",P.nodes[A].g!=null&&P.groups[P.nodes[A].g]?.nc>=2?`grupo ${P.groups[P.nodes[A].g].n}`:""].filter(Boolean).join(" \xB7 "),!1)),`<div class="m-seg"><h4><span>${re(b)}</span><small>${ln(S.length,"companhia","companhias")}${L?` \xB7 ${qe(L)}`:""}</small></h4>${Jr(Vi[`seg${x}`],5,`seg${x}`)}</div>`)).join(""),u=b=>b.m.filter(S=>P.nodes[S].t==="c"&&t.plate[S]===i).length,f=P.groups.filter(b=>b.nc>=2&&u(b)>0).slice(0,12),m=f.map(b=>{let S=u(b);return`<li data-group="${b.i}"><span class="m-dot" style="--c:${Wi(b.sector)}"></span><span class="nm">Grupo ${re(b.n)}</span><span class="pc">${b.mc?qe(b.mc):""}</span><small>${S===b.nc?ln(b.nc,"companhia","companhias"):`${S} de ${b.nc} companhias aqui`}${b.r.length?` \xB7 ${re(b.r.slice(0,2).map(L=>cn(P.nodes[L].n)).join(", "))}`:""}</small></li>`}).join(""),y=new Map;for(let b of a)for(let S of P.inc[b]){let L=P.es[S];if(!Ct.isInv[L])continue;let x=y.get(L)||{n:0,v:0};x.n++,x.v+=Math.max(0,P.ep[S])/100*(P.nodes[b].mc||0),y.set(L,x)}let p=[...y.entries()].sort((b,S)=>S[1].n-b[1].n||S[1].v-b[1].v).slice(0,8).map(([b,S])=>Rs(b,S.v?`\u2248 ${qe(S.v)}`:"",`${oi(P.nodes[b])} \xB7 em ${ln(S.n,"companhia","companhias")} do setor`,!1)).join(""),M=n.filter(b=>!Ct.sky[b]),E=M.filter(b=>P.nodes[b].t==="p").length,_=M.filter(b=>P.nodes[b].t==="j"||P.nodes[b].t==="s").length;Ot("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${r}"><i></i>Setor</div>
    <div class="m-head"><span class="m-badge" style="--c:${r}">${zi("cias")}</span><div><h2>${re(jr(e))}</h2><p>${ln(a.length,"companhia","companhias")} \xB7 ${ln(h.length,"segmento","segmentos")} \xB7 ${ln(f.length,"grupo","grupos")}</p></div></div>
    <div class="m-stats"><div class="m-stat"><span>Valor de mercado</span><b>${re(l?qe(l):"\u2013")}</b></div><div class="m-stat"><span>Na bolsa</span><b>${Ye(o.length)}</b></div><div class="m-stat"><span>Capital fechado</span><b>${Ye(a.length-o.length)}</b></div></div>
    <p class="m-note m-sec-note">Nas pra\xE7as do bairro est\xE3o ${ln(E,"pessoa f\xEDsica","pessoas f\xEDsicas")} e ${ln(_,"holding ou empresa","holdings e empresas")} que s\xF3 t\xEAm participa\xE7\xE3o aqui.</p>
    <div class="m-sec"><h3>Companhias por segmento<small>valor de mercado</small></h3>${d}</div>
    ${m?`<div class="m-sec"><h3>Grupos econ\xF4micos<small>valor de mercado</small></h3><ul class="m-list">${m}</ul></div>`:""}
    ${p?`<div class="m-sec"><h3>Investidores mais presentes<small>companhias do setor</small></h3><ul class="m-list">${p}</ul></div>`:""}
    <p class="m-foot">Cada companhia fica no bairro do seu setor, com os donos de uma s\xF3 companhia na pra\xE7a dela; quem tem participa\xE7\xE3o em v\xE1rias paira acima da cidade. Segmento \xE9 o setor de atividade declarado \xE0 CVM.</p>`,$c()}function my(){let i=Ot("#map");addEventListener("resize",()=>{Ct.resize(innerWidth,innerHeight),Gi?.resize(innerWidth,innerHeight),Fn()}),i.addEventListener("pointerdown",cy),i.addEventListener("pointermove",hy),i.addEventListener("pointerup",fp),i.addEventListener("pointercancel",fp),i.addEventListener("pointerleave",()=>{en||at.mode==="tree"||(vo(-1),at.hover>=0&&(at.hover=-1,at.sel<0&&at.group<0&&!at.shape&&at.mode==="world"&&li(null)))}),i.addEventListener("wheel",fy,{passive:!1}),Hn.layer.addEventListener("click",n=>{let s=n.target.closest(".m-lab");s&&at.mode!=="tree"&&bn(+s.dataset.i)}),Hn.layer.addEventListener("dblclick",n=>{let s=n.target.closest(".m-lab");s&&Ps(+s.dataset.i)}),Ot("#m-plates").addEventListener("click",n=>{let s=n.target.closest("[data-plate]");s&&xo(+s.dataset.plate)});let t=n=>()=>{at.lastInput=performance.now(),at.mode==="tree"?Gi.zoom(n):Ct.zoom(n)};Ot("#m-zin").onclick=t(.7),Ot("#m-zout").onclick=t(1/.7),Ot("#m-zfit").onclick=()=>{at.mode==="tree"?Gi.fit():Ct.fitAll()},Ot("#m-layers-btn").onclick=n=>{n.stopPropagation();let s=Ot("#m-layers");s.hidden=!s.hidden,Ot("#m-layers-btn").setAttribute("aria-expanded",String(!s.hidden))},document.addEventListener("pointerdown",n=>{n.target.closest("#m-layers, #m-layers-btn")||(Ot("#m-layers").hidden=!0,Ot("#m-layers-btn").setAttribute("aria-expanded","false"))});for(let n of document.querySelectorAll("#m-layers [data-layer]"))n.checked=!!at.layers[n.dataset.layer],n.onchange=()=>{if(at.layers[n.dataset.layer]=n.checked,er.set("mundo-layers",at.layers),pp(),at.sel>=0&&at.mode==="world"){let s=Uu(at.sel);li(s.nodes,s.edges,s.brd,[at.sel],.75,!1,Fu(at.sel,s))}else if(at.shape){let s=at.shape;at.shape=null,op(s)}Ru()};let e=n=>{let s=n.target.closest("[data-plate]");s&&(Ot("#m-layers").hidden=!0,xo(+s.dataset.plate))};Ot("#m-legend").onclick=e,Ot("#m-key").onclick=n=>{let s=n.target.closest("[data-shape]");s&&op(s.dataset.shape)},Ot("#m-explore-toggle").onclick=()=>{let n=Ot("#m-explore");n.classList.toggle("collapsed"),Ot("#m-explore-toggle").setAttribute("aria-expanded",String(!n.classList.contains("collapsed"))),er.set("mundo-explore",!n.classList.contains("collapsed")),Fn()},Ot(".m-tabs").onclick=n=>{let s=n.target.closest("[data-tab]");if(s){Cu=s.dataset.tab;for(let r of document.querySelectorAll(".m-tabs [data-tab]"))r.setAttribute("aria-checked",String(r===s));Ru(),Ot("#m-rank").scrollTop=0}},Ot(".m-grab").onclick=()=>{Ot("#m-panel").classList.toggle("peek"),setTimeout(Fn,420)},Ot("#m-panel-close").onclick=()=>{at.mode!=="world"&&ki(!1),bn(-1)},Ot("#m-mode-close").onclick=()=>{let n=at.sel;ki(!1),n>=0?bn(n):bn(-1)},document.addEventListener("click",n=>{let s=n.target.closest("[data-more]");if(s){let c=s.dataset.more;s.closest("ul").innerHTML=Vi[c].join("");return}let r=n.target.closest("[data-go]");if(r&&(r.closest("#m-panel")||r.closest("#m-explore"))){let c=+r.dataset.go;if(at.mode==="tree"){Ps(c);return}bn(c);return}let a=n.target.closest("[data-sel]");if(a){ki(!1),bn(+a.dataset.sel);return}let o=n.target.closest("[data-group]");if(o&&(o.closest("#m-panel")||o.closest("#m-explore"))){Vc(+o.dataset.group),innerWidth<=760&&(Ot("#m-explore").classList.add("collapsed"),Fn());return}let l=n.target.closest("[data-act]");if(l){let c=l.dataset.node!=null?+l.dataset.node:at.sel;if(l.dataset.act==="tree"&&c>=0&&Ps(c),l.dataset.act==="world"){let h=at.sel;ki(!1),h>=0&&bn(h)}l.dataset.act==="path"&&c>=0&&gy(c)}}),document.addEventListener("keydown",n=>{if(!n.target.matches("input[type=search], input[type=text], textarea")){if(n.key==="/"||(n.metaKey||n.ctrlKey)&&n.key.toLowerCase()==="k")n.preventDefault(),Ot("#m-q").focus();else if(n.key==="Escape"&&Vn.on)Mo();else if(n.key==="Escape")if(at.mode!=="world"){let s=at.sel;ki(!1),s>=0?bn(s):bn(-1)}else bn(-1);else if(n.key==="+"||n.key==="=")Ot("#m-zin").click();else if(n.key==="-")Ot("#m-zout").click();else if(n.key==="0")Ot("#m-zfit").click();else if(at.mode==="world"&&n.key.startsWith("Arrow")){at.lastInput=performance.now();let s=80;Ct.pan(n.key==="ArrowLeft"?s:n.key==="ArrowRight"?-s:0,n.key==="ArrowUp"?s:n.key==="ArrowDown"?-s:0)}}}),vp(Ot("#m-q"),Ot("#m-results"),n=>{n.g!=null?Vc(n.g):at.mode==="tree"?Ps(n.i):bn(n.i)}),addEventListener("hashchange",()=>_p())}function gy(i){let t=Ot("#m-pick-slot");t.innerHTML=`<div class="m-pick"><div class="m-search" role="combobox" aria-expanded="false"><svg class="ic"><use href="#i-path"/></svg>
    <input id="m-pick-q" type="search" placeholder="Com quem? Empresa, pessoa ou investidor" autocomplete="off" aria-label="Conectar com"><ul id="m-pick-res" class="m-results" role="listbox" hidden></ul></div></div>`;let e=Ot("#m-pick-q");vp(e,Ot("#m-pick-res"),n=>{n.g!=null?Gc(i,P.groups[n.g].h):Gc(i,n.i)}),e.focus()}async function xy(){Hn.layer=Ot("#m-labels"),(innerWidth<=760||er.get("mundo-explore",!1)===!1)&&Ot("#m-explore").classList.add("collapsed");let i;try{i=await fetch("data/cias/mundo.json",{cache:"no-cache"}).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}catch{Ot("#m-empty").hidden=!1,Ot("#m-empty").textContent="O mapa ainda n\xE3o foi montado. Ele \xE9 refeito a cada atualiza\xE7\xE3o do portal; tente de novo em alguns minutos.",document.body.classList.remove("loading");return}let t=s=>s&&s.v===Eu&&s.x&&s.x.length===i.nodes.length;innerHeight>innerWidth*1.15?i.mapa=t(i.mapaV)?i.mapaV:Au(i,{aspect:rp}):t(i.mapa)||(i.mapa=Au(i)),delete i.mapaV,H_(i);try{Ct=np(Ot("#map"),i,{palette:k_,accent:kc,reduced:zc,fixedQuality:/[?&]hq\b/.test(location.search)})}catch(s){console.error(s),Ot("#m-empty").hidden=!1,Ot("#m-empty").textContent="Este navegador n\xE3o conseguiu abrir o Mundo em 3D (WebGL desligado ou indispon\xEDvel). Tente em outro navegador ou atualize o sistema.",document.body.classList.remove("loading");return}i.mapa.plates.forEach((s,r)=>{s.j=r}),Gi=ip(Ct.renderer,{W:P,colorOf:wi,sectorColor:Wi,kindLabel:oi,shortName:cn,brl:qe,pct:ai,accent:kc,onPick:(s,r)=>{r?Ps(s):(at.sel=s,Bu(s))},onExt:s=>go(`${s.n}: controlada de capital fechado (${ai(s.pct)})`),canvas:Ot("#map")}),Ct.resize(innerWidth,innerHeight),Gi.resize(innerWidth,innerHeight),pp();let n=i.stats||{};Ot("#m-sub").textContent=`${Ye(n.cias||0)} companhias \xB7 ${Ye(n.grupos||0)} grupos \xB7 ${Ye((n.acionistas||0)+(n.pessoas_conselho||0))} acionistas e conselheiros`,ey(),ry(),Ru(),my(),Fn(),Ct.setOffset(Ct.view.toX,Ct.view.toY,!0),document.fonts?.ready.then(()=>Fn()),document.body.classList.remove("loading"),Ct.warmup(),Ct.fitAll(0),Ct.cam.x=Ct.cam.tx,Ct.cam.z=Ct.cam.tz,Ct.cam.d=Ct.cam.td,Ct.cam.fly=null,yp=Ct.cam.td,!location.hash&&!zc&&(document.body.classList.add("intro"),Ct.intro(5600),dy(5600)),Mp=requestAnimationFrame(bp),_p(),!er.get("mundo-hint",0)&&!location.hash&&!Vn.on&&(_o=setTimeout(()=>{at.sel<0&&at.mode==="world"&&(Ot("#m-hint").hidden=!1,Qr=0,_o=setTimeout(Xi,9e3))},2500)),/[?&]debug\b/.test(location.search)&&(window.__mundo={ui:at,W:P,map:Ct,tree:Gi,select:bn,openTree:Ps,showPath:Gc,selectGroup:Vc,focusSector:xo})}xy();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
