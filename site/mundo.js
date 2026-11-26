/* Portal FPM — Mundo das companhias. Gerado de src/mundo (npm run build); não edite à mão. Inclui three.js (MIT). */
var cd=0,gu=1,hd=2;var gr=1,ud=2,ia=3,$s=0,zn=1,gi=2,xi=0,sa=1,ra=2,xu=3,vu=4,fd=5;var xr=100,dd=101,pd=102,md=103,gd=104,xd=200,vd=201,_d=202,yd=203,_u=204,yu=205,Md=206,bd=207,Sd=208,wd=209,Ed=210,Td=211,Ad=212,Cd=213,Rd=214,Al=0,Cl=1,Rl=2,Vr=3,Pl=4,Il=5,Ll=6,Dl=7,fc=0,Pd=1,Id=2,Hi=0,po=1,mo=2,go=3,xo=4,vo=5,_o=6,vr=7;var Mu=300,qs=301,_r=302,dc=303,pc=304,yo=306,Nl=1e3,ts=1001,Ul=1002,Dn=1003,Ld=1004;var Mo=1005;var Bn=1006,mc=1007;var vi=1008;var ei=1009,bu=1010,Su=1011,aa=1012,gc=1013,Gi=1014,_i=1015,qn=1016,xc=1017,vc=1018,oa=1020,wu=35902,Eu=35899,Tu=1021,Au=1022,yi=1023,es=1026,Ys=1027,_c=1028,yc=1029,Zs=1030,Mc=1031;var bc=1033,bo=33776,So=33777,wo=33778,Eo=33779,Sc=35840,wc=35841,Ec=35842,Tc=35843,Ac=36196,Cc=37492,Rc=37496,Pc=37488,Ic=37489,To=37490,Lc=37491,Dc=37808,Nc=37809,Uc=37810,Fc=37811,Oc=37812,Bc=37813,zc=37814,kc=37815,Hc=37816,Gc=37817,Vc=37818,Wc=37819,Xc=37820,$c=37821,qc=36492,Yc=36494,Zc=36495,Jc=36283,Kc=36284,Ao=36285,jc=36286;var Ba=2300,Fl=2301,El=2302,nu=2303,iu=2400,su=2401,ru=2402;var Dd=3200,Qc=3201;var Co=0,Nd=1,Es="",Ln="srgb",za="srgb-linear",ka="linear",We="srgb";var Tl=7680;var Ud=519,Fd=512,Od=513,Bd=514,th=515,zd=516,kd=517,eh=518,Hd=519,Gd=35044;var Cu="300 es",Ui=2e3,Wr=2001;function I0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function L0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ha(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vd(){let i=Ha("canvas");return i.style.display="block",i}var Tf={},Xr=null;function Ru(...i){let t="THREE."+i.shift();Xr?Xr("log",t,...i):console.log(t,...i)}function Wd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function de(...i){i=Wd(i);let t="THREE."+i.shift();if(Xr)Xr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ye(...i){i=Wd(i);let t="THREE."+i.shift();if(Xr)Xr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ar(...i){let t=i.join(" ");t in Tf||(Tf[t]=!0,de(...i))}function Xd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var $d={[Al]:Cl,[Rl]:Ll,[Pl]:Dl,[Vr]:Il,[Cl]:Al,[Ll]:Rl,[Dl]:Pl,[Il]:Vr},ns=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rh=Math.PI/180,Ol=180/Math.PI;function la(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[e&63|128]+Gn[e>>8&255]+"-"+Gn[e>>16&255]+Gn[e>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function D0(i,t){return(i%t+t)%t}function Ph(i,t,e){return(1-e)*i+e*t}function Aa(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Uu=class Uu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Oe(this.x,t.x,e.x),this.y=Oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Oe(this.x,t,e),this.y=Oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uu.prototype.isVector2=!0;var Ut=Uu,oi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],m=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*y;g<0&&(u=-u,f=-f,m=-m,y=-y,g=-g);let p=1-o;if(g<.9995){let M=Math.acos(g),A=Math.sin(M);p=Math.sin(p*M)/A,o=Math.sin(o*M)/A,l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+y*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-o*f,t[e+2]=c*m+h*f+o*u-l*d,t[e+3]=h*m-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Fu=class Fu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Af.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Af.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Oe(this.x,t.x,e.x),this.y=Oe(this.y,t.y,e.y),this.z=Oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Oe(this.x,t,e),this.y=Oe(this.y,t,e),this.z=Oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ih.copy(this).projectOnVector(t),this.sub(Ih)}reflect(t){return this.sub(Ih.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fu.prototype.isVector3=!0;var U=Fu,Ih=new U,Af=new oi,Ou=class Ou{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],y=s[0],g=s[3],p=s[6],M=s[1],A=s[4],_=s[7],b=s[2],w=s[5],I=s[8];return r[0]=a*y+o*M+l*b,r[3]=a*g+o*A+l*w,r[6]=a*p+o*_+l*I,r[1]=c*y+h*M+d*b,r[4]=c*g+h*A+d*w,r[7]=c*p+h*_+d*I,r[2]=u*y+f*M+m*b,r[5]=u*g+f*A+m*w,r[8]=u*p+f*_+m*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lh.makeScale(t,e)),this}rotate(t){return ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lh.makeRotation(-t)),this}translate(t,e){return ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ou.prototype.isMatrix3=!0;var Te=Ou,Lh=new Te,Cf=new Te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rf=new Te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function N0(){let i={enabled:!0,workingColorSpace:za,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===We&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===We&&(s.r=Hr(s.r),s.g=Hr(s.g),s.b=Hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Es?ka:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ar("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ar("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[za]:{primaries:t,whitePoint:n,transfer:ka,toXYZ:Cf,fromXYZ:Rf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:t,whitePoint:n,transfer:We,toXYZ:Cf,fromXYZ:Rf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),i}var Fe=N0();function Ms(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ar,Bl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ar===void 0&&(Ar=Ha("canvas")),Ar.width=t.width,Ar.height=t.height;let s=Ar.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ar}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ha("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ms(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ms(e[n]/255)*255):e[n]=Ms(e[n]);return{data:e,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},U0=0,$r=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=la(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Dh(s[a].image)):r.push(Dh(s[a]))}else r=Dh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Dh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}var F0=0,Nh=new U,$n=class i extends ns{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ts,s=ts,r=Bn,a=vi,o=yi,l=ei,c=i.DEFAULT_ANISOTROPY,h=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=la(),this.name="",this.source=new $r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){de(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){de(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nl:t.x=t.x-Math.floor(t.x);break;case ts:t.x=t.x<0?0:1;break;case Ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nl:t.y=t.y-Math.floor(t.y);break;case ts:t.y=t.y<0?0:1;break;case Ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Mu;$n.DEFAULT_ANISOTROPY=1;var Bu=class Bu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,_=(f+1)/2,b=(p+1)/2,w=(h+u)/4,I=(d+y)/4,x=(m+g)/4;return A>_&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=I/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=I/r,s=x/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Oe(this.x,t.x,e.x),this.y=Oe(this.y,t.y,e.y),this.z=Oe(this.z,t.z,e.z),this.w=Oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Oe(this.x,t,e),this.y=Oe(this.y,t,e),this.z=Oe(this.z,t,e),this.w=Oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bu.prototype.isVector4=!0;var Ke=Bu,zl=class extends ns{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ke(0,0,t,e),this.scissorTest=!1,this.viewport=new Ke(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new $n(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new $r(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends zl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ga=class extends $n{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var kl=class extends $n{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var uc=class uc{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,m,y,g)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,m,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Cr.setFromMatrixColumn(t,0).length(),r=1/Cr.setFromMatrixColumn(t,1).length(),a=1/Cr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,m=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,y=c*d;e[0]=u+y*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,m=o*h,y=o*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(O0,t,B0)}lookAt(t,e,n){let s=this.elements;return ri.subVectors(t,e),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ns.crossVectors(n,ri),Ns.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ns.crossVectors(n,ri)),Ns.normalize(),Qo.crossVectors(ri,Ns),s[0]=Ns.x,s[4]=Qo.x,s[8]=ri.x,s[1]=Ns.y,s[5]=Qo.y,s[9]=ri.y,s[2]=Ns.z,s[6]=Qo.z,s[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],y=n[6],g=n[10],p=n[14],M=n[3],A=n[7],_=n[11],b=n[15],w=s[0],I=s[4],x=s[8],C=s[12],B=s[1],$=s[5],z=s[9],K=s[13],F=s[2],q=s[6],ht=s[10],j=s[14],yt=s[3],rt=s[7],gt=s[11],Mt=s[15];return r[0]=a*w+o*B+l*F+c*yt,r[4]=a*I+o*$+l*q+c*rt,r[8]=a*x+o*z+l*ht+c*gt,r[12]=a*C+o*K+l*j+c*Mt,r[1]=h*w+d*B+u*F+f*yt,r[5]=h*I+d*$+u*q+f*rt,r[9]=h*x+d*z+u*ht+f*gt,r[13]=h*C+d*K+u*j+f*Mt,r[2]=m*w+y*B+g*F+p*yt,r[6]=m*I+y*$+g*q+p*rt,r[10]=m*x+y*z+g*ht+p*gt,r[14]=m*C+y*K+g*j+p*Mt,r[3]=M*w+A*B+_*F+b*yt,r[7]=M*I+A*$+_*q+b*rt,r[11]=M*x+A*z+_*ht+b*gt,r[15]=M*C+A*K+_*j+b*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],y=t[7],g=t[11],p=t[15],M=l*f-c*u,A=o*f-c*d,_=o*u-l*d,b=a*f-c*h,w=a*u-l*h,I=a*d-o*h;return e*(y*M-g*A+p*_)-n*(m*M-g*b+p*w)+s*(m*A-y*b+p*I)-r*(m*_-y*w+g*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],y=t[13],g=t[14],p=t[15],M=e*o-n*a,A=e*l-s*a,_=e*c-r*a,b=n*l-s*o,w=n*c-r*o,I=s*c-r*l,x=h*y-d*m,C=h*g-u*m,B=h*p-f*m,$=d*g-u*y,z=d*p-f*y,K=u*p-f*g,F=M*K-A*z+_*$+b*B-w*C+I*x;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/F;return t[0]=(o*K-l*z+c*$)*q,t[1]=(s*z-n*K-r*$)*q,t[2]=(y*I-g*w+p*b)*q,t[3]=(u*w-d*I-f*b)*q,t[4]=(l*B-a*K-c*C)*q,t[5]=(e*K-s*B+r*C)*q,t[6]=(g*_-m*I-p*A)*q,t[7]=(h*I-u*_+f*A)*q,t[8]=(a*z-o*B+c*x)*q,t[9]=(n*B-e*z-r*x)*q,t[10]=(m*w-y*_+p*M)*q,t[11]=(d*_-h*w-f*M)*q,t[12]=(o*C-a*$-l*x)*q,t[13]=(e*$-n*C+s*x)*q,t[14]=(y*A-m*b-g*M)*q,t[15]=(h*b-d*A+u*M)*q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,m=r*d,y=a*h,g=a*d,p=o*d,M=l*c,A=l*h,_=l*d,b=n.x,w=n.y,I=n.z;return s[0]=(1-(y+p))*b,s[1]=(f+_)*b,s[2]=(m-A)*b,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(u+p))*w,s[6]=(g+M)*w,s[7]=0,s[8]=(m+A)*I,s[9]=(g-M)*I,s[10]=(1-(u+y))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Cr.set(s[0],s[1],s[2]).length(),o=Cr.set(s[4],s[5],s[6]).length(),l=Cr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ii.copy(this);let c=1/a,h=1/o,d=1/l;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=d,Ii.elements[9]*=d,Ii.elements[10]*=d,e.setFromRotationMatrix(Ii),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Ui,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,y;if(l)m=r/(a-r),y=a*r/(a-r);else if(o===Ui)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Wr)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ui,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),m,y;if(l)m=1/(a-r),y=a/(a-r);else if(o===Ui)m=-2/(a-r),y=-(a+r)/(a-r);else if(o===Wr)m=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};uc.prototype.isMatrix4=!0;var He=uc,Cr=new U,Ii=new He,O0=new U(0,0,0),B0=new U(1,1,1),Ns=new U,Qo=new U,ri=new U,Pf=new He,If=new oi,li=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return If.setFromEuler(this),this.setFromQuaternion(If,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},z0=0,Lf=new U,Rr=new oi,gs=new He,tl=new U,Ca=new U,k0=new U,H0=new oi,Df=new U(1,0,0),Nf=new U(0,1,0),Uf=new U(0,0,1),Ff={type:"added"},G0={type:"removed"},Pr={type:"childadded",child:null},Uh={type:"childremoved",child:null},yn=class i extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=la(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new li,n=new oi,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Te}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rr.setFromAxisAngle(t,e),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,e){return Rr.setFromAxisAngle(t,e),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(Df,t)}rotateY(t){return this.rotateOnAxis(Nf,t)}rotateZ(t){return this.rotateOnAxis(Uf,t)}translateOnAxis(t,e){return Lf.copy(t).applyQuaternion(this.quaternion),this.position.add(Lf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Df,t)}translateY(t){return this.translateOnAxis(Nf,t)}translateZ(t){return this.translateOnAxis(Uf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?tl.copy(t):tl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gs.lookAt(Ca,tl,this.up):gs.lookAt(tl,Ca,this.up),this.quaternion.setFromRotationMatrix(gs),s&&(gs.extractRotation(s.matrixWorld),Rr.setFromRotationMatrix(gs),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ff),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null):ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(G0),Uh.child=t,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gs.multiply(t.parent.matrixWorld)),t.applyMatrix4(gs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ff),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,t,k0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,H0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new U(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fi=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},V0={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(V0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},el={h:0,s:0,l:0};function Fh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ue=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Fe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Fe.workingColorSpace){if(t=D0(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Fh(a,r,t+1/3),this.g=Fh(a,r,t),this.b=Fh(a,r,t-1/3)}return Fe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ln){function n(r){r!==void 0&&parseFloat(r)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:de("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ln){let n=qd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return Fe.workingToColorSpace(Vn.copy(this),t),Math.round(Oe(Vn.r*255,0,255))*65536+Math.round(Oe(Vn.g*255,0,255))*256+Math.round(Oe(Vn.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Fe.workingColorSpace){Fe.workingToColorSpace(Vn.copy(this),e);let n=Vn.r,s=Vn.g,r=Vn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Fe.workingColorSpace){return Fe.workingToColorSpace(Vn.copy(this),e),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=Ln){Fe.workingToColorSpace(Vn.copy(this),t);let e=Vn.r,n=Vn.g,s=Vn.b;return t!==Ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Us),this.setHSL(Us.h+t,Us.s+e,Us.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Us),t.getHSL(el);let n=Ph(Us.h,el.h,e),s=Ph(Us.s,el.s,e),r=Ph(Us.l,el.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new ue;ue.NAMES=qd;var or=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ue(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bs=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Li=new U,xs=new U,Oh=new U,vs=new U,Ir=new U,Lr=new U,Of=new U,Bh=new U,zh=new U,kh=new U,Hh=new Ke,Gh=new Ke,Vh=new Ke,zs=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Li.subVectors(t,e),s.cross(Li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Li.subVectors(s,e),xs.subVectors(n,e),Oh.subVectors(t,e);let a=Li.dot(Li),o=Li.dot(xs),l=Li.dot(Oh),c=xs.dot(xs),h=xs.dot(Oh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vs)===null?!1:vs.x>=0&&vs.y>=0&&vs.x+vs.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,vs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vs.x),l.addScaledVector(a,vs.y),l.addScaledVector(o,vs.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(t,e),Gh.fromBufferAttribute(t,n),Vh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Hh,r.x),a.addScaledVector(Gh,r.y),a.addScaledVector(Vh,r.z),a}static isFrontFacing(t,e,n,s){return Li.subVectors(n,e),xs.subVectors(t,e),Li.cross(xs).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),xs.subVectors(this.a,this.b),Li.cross(xs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ir.subVectors(s,n),Lr.subVectors(r,n),Bh.subVectors(t,n);let l=Ir.dot(Bh),c=Lr.dot(Bh);if(l<=0&&c<=0)return e.copy(n);zh.subVectors(t,s);let h=Ir.dot(zh),d=Lr.dot(zh);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ir,a);kh.subVectors(t,r);let f=Ir.dot(kh),m=Lr.dot(kh);if(m>=0&&f<=m)return e.copy(r);let y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Lr,o);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Of.subVectors(r,s),o=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(Of,o);let p=1/(g+y+u);return a=y*p,o=u*p,e.copy(n).addScaledVector(Ir,a).addScaledVector(Lr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},is=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Di):Di.fromBufferAttribute(r,a),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nl.copy(n.boundingBox)),nl.applyMatrix4(t.matrixWorld),this.union(nl)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ra),il.subVectors(this.max,Ra),Dr.subVectors(t.a,Ra),Nr.subVectors(t.b,Ra),Ur.subVectors(t.c,Ra),Fs.subVectors(Nr,Dr),Os.subVectors(Ur,Nr),nr.subVectors(Dr,Ur);let e=[0,-Fs.z,Fs.y,0,-Os.z,Os.y,0,-nr.z,nr.y,Fs.z,0,-Fs.x,Os.z,0,-Os.x,nr.z,0,-nr.x,-Fs.y,Fs.x,0,-Os.y,Os.x,0,-nr.y,nr.x,0];return!Wh(e,Dr,Nr,Ur,il)||(e=[1,0,0,0,1,0,0,0,1],!Wh(e,Dr,Nr,Ur,il))?!1:(sl.crossVectors(Fs,Os),e=[sl.x,sl.y,sl.z],Wh(e,Dr,Nr,Ur,il))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_s),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_s=[new U,new U,new U,new U,new U,new U,new U,new U],Di=new U,nl=new is,Dr=new U,Nr=new U,Ur=new U,Fs=new U,Os=new U,nr=new U,Ra=new U,il=new U,sl=new U,ir=new U;function Wh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ir.fromArray(i,r);let o=s.x*Math.abs(ir.x)+s.y*Math.abs(ir.y)+s.z*Math.abs(ir.z),l=t.dot(ir),c=e.dot(ir),h=n.dot(ir);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var _n=new U,rl=new Ut,W0=0,Ce=class extends ns{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gd,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rl.fromBufferAttribute(this,e),rl.applyMatrix3(t),this.setXY(e,rl.x,rl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix3(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix4(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyNormalMatrix(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.transformDirection(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Aa(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Aa(e,this.array)),e}setX(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Aa(e,this.array)),e}setY(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Aa(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Aa(e,this.array)),e}setW(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),n=ti(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),n=ti(n,this.array),s=ti(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),n=ti(n,this.array),s=ti(s,this.array),r=ti(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Va=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Wa=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ie=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},X0=new is,Pa=new U,Xh=new U,ss=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):X0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pa.subVectors(t,this.center);let e=Pa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Pa,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pa.copy(t.center).add(Xh)),this.expandByPoint(Pa.copy(t.center).sub(Xh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$0=0,pi=new He,$h=new yn,Fr=new U,ai=new is,Ia=new is,In=new U,Xe=class i extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=la(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(I0(t)?Wa:Va)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,e,n){return pi.makeTranslation(t,e,n),this.applyMatrix4(pi),this}scale(t,e,n){return pi.makeScale(t,e,n),this.applyMatrix4(pi),this}lookAt(t){return $h.lookAt(t),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ai.setFromBufferAttribute(r),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ia.setFromBufferAttribute(o),this.morphTargetsRelative?(In.addVectors(ai.min,Ia.min),ai.expandByPoint(In),In.addVectors(ai.max,Ia.max),ai.expandByPoint(In)):(ai.expandByPoint(Ia.min),ai.expandByPoint(Ia.max))}ai.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)In.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(In));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)In.fromBufferAttribute(o,c),l&&(Fr.fromBufferAttribute(t,c),In.add(Fr)),s=Math.max(s,n.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ce(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new U,l[x]=new U;let c=new U,h=new U,d=new U,u=new Ut,f=new Ut,m=new Ut,y=new U,g=new U;function p(x,C,B){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,B),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,C),m.fromBufferAttribute(r,B),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let $=1/(f.x*m.y-m.x*f.y);isFinite($)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar($),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar($),o[x].add(y),o[C].add(y),o[B].add(y),l[x].add(g),l[C].add(g),l[B].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,C=M.length;x<C;++x){let B=M[x],$=B.start,z=B.count;for(let K=$,F=$+z;K<F;K+=3)p(t.getX(K+0),t.getX(K+1),t.getX(K+2))}let A=new U,_=new U,b=new U,w=new U;function I(x){b.fromBufferAttribute(s,x),w.copy(b);let C=o[x];A.copy(C),A.sub(b.multiplyScalar(b.dot(C))).normalize(),_.crossVectors(w,C);let $=_.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,$)}for(let x=0,C=M.length;x<C;++x){let B=M[x],$=B.start,z=B.count;for(let K=$,F=$+z;K<F;K+=3)I(t.getX(K+0)),I(t.getX(K+1)),I(t.getX(K+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)In.fromBufferAttribute(t,e),In.normalize(),t.setXYZ(e,In.x,In.y,In.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new Ce(u,h,d)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var qh=new U,q0=new U,Y0=new Te,Ni=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=qh.subVectors(n,e).cross(q0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(qh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Y0.getNormalMatrix(t),s=this.coplanarPoint(qh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Z0=0,Oi=class extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=la(),this.name="",this.type="Material",this.blending=sa,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=yu,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tl,this.stencilZFail=Tl,this.stencilZPass=Tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){de(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){de(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ni().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ys=new U,Yh=new U,al=new U,ol=new U,lr=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ys)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ys.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ys.copy(this.origin).addScaledVector(this.direction,e),ys.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yh.copy(t).add(e).multiplyScalar(.5),al.copy(e).sub(t).normalize(),ol.copy(this.origin).sub(Yh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(al),o=ol.dot(this.direction),l=-ol.dot(al),c=ol.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Yh).addScaledVector(al,u),f}intersectSphere(t,e){if(t.radius<0)return null;ys.subVectors(t.center,this.origin);let n=ys.dot(this.direction),s=ys.dot(ys)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ys)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,m=e.x-a.x,y=e.y-a.y,g=e.z-a.z,p=n.x-a.x,M=n.y-a.y,A=n.z-a.z,_=Math.abs(l),b=Math.abs(c),w=Math.abs(h),I,x,C,B,$,z,K,F,q,ht,j,yt;if(_>=b&&_>=w?(C=l,z=d,q=m,yt=p,l>=0?(I=c,x=h,B=u,$=f,K=y,F=g,ht=M,j=A):(I=h,x=c,B=f,$=u,K=g,F=y,ht=A,j=M)):b>=w?(C=c,z=u,q=y,yt=M,c>=0?(I=h,x=l,B=f,$=d,K=g,F=m,ht=A,j=p):(I=l,x=h,B=d,$=f,K=m,F=g,ht=p,j=A)):(C=h,z=f,q=g,yt=A,h>=0?(I=l,x=c,B=d,$=u,K=m,F=y,ht=p,j=M):(I=c,x=l,B=u,$=d,K=y,F=m,ht=M,j=p)),C===0)return null;let rt=I/C,gt=x/C,Mt=1/C,Ct=B-rt*z,mt=$-gt*z,fe=K-rt*q,Re=F-gt*q,Ue=ht-rt*yt,dt=j-gt*yt,bt=Ue*Re-dt*fe,Dt=Ct*dt-mt*Ue,H=fe*mt-Re*Ct;if(s){if(bt<0||Dt<0||H<0)return null}else if((bt<0||Dt<0||H<0)&&(bt>0||Dt>0||H>0))return null;let ut=bt+Dt+H;if(ut===0)return null;let lt=Mt*(bt*z+Dt*q+H*yt);return(ut>0?lt<0:lt>0)?null:this.at(lt/ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ss=class extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Bf=new He,sr=new lr,ll=new ss,zf=new U,cl=new U,hl=new U,ul=new U,Zh=new U,fl=new U,kf=new U,dl=new U,Ne=class extends yn{constructor(t=new Xe,e=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){fl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Zh.fromBufferAttribute(d,t),a?fl.addScaledVector(Zh,h):fl.addScaledVector(Zh.sub(e),h))}e.add(fl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(r),sr.copy(t.ray).recast(t.near),!(ll.containsPoint(sr.origin)===!1&&(sr.intersectSphere(ll,zf)===null||sr.origin.distanceToSquared(zf)>(t.far-t.near)**2))&&(Bf.copy(r).invert(),sr.copy(t.ray).applyMatrix4(Bf),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,sr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=a[g.materialIndex],M=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,b=A;_<b;_+=3){let w=o.getX(_),I=o.getX(_+1),x=o.getX(_+2);s=pl(this,p,t,n,c,h,d,w,I,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let M=o.getX(g),A=o.getX(g+1),_=o.getX(g+2);s=pl(this,a,t,n,c,h,d,M,A,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=a[g.materialIndex],M=Math.max(g.start,f.start),A=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,b=A;_<b;_+=3){let w=_,I=_+1,x=_+2;s=pl(this,p,t,n,c,h,d,w,I,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let M=g,A=g+1,_=g+2;s=pl(this,a,t,n,c,h,d,M,A,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function J0(i,t,e,n,s,r,a,o){let l;if(t.side===zn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===$s,o),l===null)return null;dl.copy(o),dl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(dl);return c<e.near||c>e.far?null:{distance:c,point:dl.clone(),object:i}}function pl(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,cl),i.getVertexPosition(l,hl),i.getVertexPosition(c,ul);let h=J0(i,t,e,n,cl,hl,ul,kf);if(h){let d=new U;zs.getBarycoord(kf,cl,hl,ul,d),s&&(h.uv=zs.getInterpolatedAttribute(s,o,l,c,d,new Ut)),r&&(h.uv1=zs.getInterpolatedAttribute(r,o,l,c,d,new Ut)),a&&(h.normal=zs.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};zs.getNormal(cl,hl,ul,u.normal),h.face=u,h.barycoord=d}return h}var Xa=class extends $n{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Dn,h=Dn,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=class extends Ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Or=new He,Hf=new He,ml=[],Gf=new is,K0=new He,La=new Ne,Da=new ss,rs=class extends Ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,K0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new is),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Or),Gf.copy(t.boundingBox).applyMatrix4(Or),this.boundingBox.union(Gf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Or),Da.copy(t.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Da)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(La.geometry=this.geometry,La.material=this.material,La.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Da.copy(this.boundingSphere),Da.applyMatrix4(n),t.ray.intersectsSphere(Da)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Or),Hf.multiplyMatrices(n,Or),La.matrixWorld=Hf,La.raycast(t,ml);for(let a=0,o=ml.length;a<o;a++){let l=ml[a];l.instanceId=r,l.object=this,e.push(l)}ml.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xa(new Float32Array(s*this.count),s,this.count,_c,_i));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rr=new ss,j0=new Ut(.5,.5),gl=new U,Zr=class{constructor(t=new Ni,e=new Ni,n=new Ni,s=new Ni,r=new Ni,a=new Ni){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ui,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],y=r[9],g=r[10],p=r[11],M=r[12],A=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-a,f-h,p-m,b-M).normalize(),s[1].setComponents(c+a,f+h,p+m,b+M).normalize(),s[2].setComponents(c+o,f+d,p+y,b+A).normalize(),s[3].setComponents(c-o,f-d,p-y,b-A).normalize(),n)s[4].setComponents(l,u,g,_).normalize(),s[5].setComponents(c-l,f-u,p-g,b-_).normalize();else if(s[4].setComponents(c-l,f-u,p-g,b-_).normalize(),e===Ui)s[5].setComponents(c+l,f+u,p+g,b+_).normalize();else if(e===Wr)s[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(t){rr.center.set(0,0,0);let e=j0.distanceTo(t.center);return rr.radius=.7071067811865476+e,rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(gl.x=s.normal.x>0?t.max.x:t.min.x,gl.y=s.normal.y>0?t.max.y:t.min.y,gl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(gl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Hl=class extends Oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Gl=new U,Vl=new U,Vf=new He,Na=new lr,xl=new ss,Jh=new U,Wf=new U,Wl=class extends yn{constructor(t=new Xe,e=new Hl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Gl.fromBufferAttribute(e,s-1),Vl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Gl.distanceTo(Vl);t.setAttribute("lineDistance",new Ie(n,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(s),xl.radius+=r,t.ray.intersectsSphere(xl)===!1)return;Vf.copy(s).invert(),Na.copy(t.ray).applyMatrix4(Vf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let y=f,g=m-1;y<g;y+=c){let p=h.getX(y),M=h.getX(y+1),A=vl(this,t,Na,l,p,M,y);A&&e.push(A)}if(this.isLineLoop){let y=h.getX(m-1),g=h.getX(f),p=vl(this,t,Na,l,y,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let y=f,g=m-1;y<g;y+=c){let p=vl(this,t,Na,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=vl(this,t,Na,l,m-1,f,m-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vl(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Gl.fromBufferAttribute(o,s),Vl.fromBufferAttribute(o,r),e.distanceSqToSegment(Gl,Vl,Jh,Wf)>n)return;Jh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Jh);if(!(c<t.near||c>t.far))return{distance:c,point:Wf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Xf=new U,$f=new U,$a=class extends Wl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Xf.fromBufferAttribute(e,s),$f.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xf.distanceTo($f);t.setAttribute("lineDistance",new Ie(n,1))}else de("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Xl=class extends Oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qf=new He,au=new lr,_l=new ss,yl=new U,Jr=class extends yn{constructor(t=new Xe,e=new Xl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_l.copy(n.boundingSphere),_l.applyMatrix4(s),_l.radius+=r,t.ray.intersectsSphere(_l)===!1)return;qf.copy(s).invert(),au.copy(t.ray).applyMatrix4(qf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,y=f;m<y;m++){let g=c.getX(m);yl.fromBufferAttribute(d,g),Yf(yl,g,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,y=f;m<y;m++)yl.fromBufferAttribute(d,m),Yf(yl,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yf(i,t,e,n,s,r,a){let o=au.distanceSqToPoint(i);if(o<e){let l=new U;au.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var qa=class extends $n{constructor(t=[],e=qs,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zi=class extends $n{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ks=class extends $n{constructor(t,e,n=Gi,s,r,a,o=Dn,l=Dn,c,h=es,d=1){if(h!==es&&h!==Ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $r(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},$l=class extends ks{constructor(t,e=Gi,n=qs,s,r,a=Dn,o=Dn,l,c=es){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ya=class extends $n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ze=class i extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(d,2));function m(y,g,p,M,A,_,b,w,I,x,C){let B=_/I,$=b/x,z=_/2,K=b/2,F=w/2,q=I+1,ht=x+1,j=0,yt=0,rt=new U;for(let gt=0;gt<ht;gt++){let Mt=gt*$-K;for(let Ct=0;Ct<q;Ct++){let mt=Ct*B-z;rt[y]=mt*M,rt[g]=Mt*A,rt[p]=F,c.push(rt.x,rt.y,rt.z),rt[y]=0,rt[g]=0,rt[p]=w>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(Ct/I),d.push(1-gt/x),j+=1}}for(let gt=0;gt<x;gt++)for(let Mt=0;Mt<I;Mt++){let Ct=u+Mt+q*gt,mt=u+Mt+q*(gt+1),fe=u+(Mt+1)+q*(gt+1),Re=u+(Mt+1)+q*gt;l.push(Ct,mt,Re),l.push(mt,fe,Re),yt+=6}o.addGroup(f,yt,C),f+=yt,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Za=class i extends Xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new U,h=new Ut;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(o,3)),this.setAttribute("uv",new Ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},mi=class i extends Xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,y=[],g=n/2,p=0;M(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(f,2));function M(){let _=new U,b=new U,w=0,I=(e-t)/n;for(let x=0;x<=r;x++){let C=[],B=x/r,$=B*(e-t)+t;for(let z=0;z<=s;z++){let K=z/s,F=K*l+o,q=Math.sin(F),ht=Math.cos(F);b.x=$*q,b.y=-B*n+g,b.z=$*ht,d.push(b.x,b.y,b.z),_.set(q,I,ht).normalize(),u.push(_.x,_.y,_.z),f.push(K,1-B),C.push(m++)}y.push(C)}for(let x=0;x<s;x++)for(let C=0;C<r;C++){let B=y[C][x],$=y[C+1][x],z=y[C+1][x+1],K=y[C][x+1];(t>0||C!==0)&&(h.push(B,$,K),w+=3),(e>0||C!==r-1)&&(h.push($,z,K),w+=3)}c.addGroup(p,w,0),p+=w}function A(_){let b=m,w=new Ut,I=new U,x=0,C=_===!0?t:e,B=_===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,g*B,0),u.push(0,B,0),f.push(.5,.5),m++;let $=m;for(let z=0;z<=s;z++){let F=z/s*l+o,q=Math.cos(F),ht=Math.sin(F);I.x=C*ht,I.y=g*B,I.z=C*q,d.push(I.x,I.y,I.z),u.push(0,B,0),w.x=q*.5+.5,w.y=ht*.5*B+.5,f.push(w.x,w.y),m++}for(let z=0;z<s;z++){let K=b+z,F=$+z;_===!0?h.push(F,F+1,K):h.push(F+1,F,K),x+=3}c.addGroup(p,x,_===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ki=class i extends mi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ql=class i extends Xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(r.slice(),3)),this.setAttribute("uv",new Ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let A=new U,_=new U,b=new U;for(let w=0;w<e.length;w+=3)f(e[w+0],A),f(e[w+1],_),f(e[w+2],b),l(A,_,b,M)}function l(M,A,_,b){let w=b+1,I=[];for(let x=0;x<=w;x++){I[x]=[];let C=M.clone().lerp(_,x/w),B=A.clone().lerp(_,x/w),$=w-x;for(let z=0;z<=$;z++)z===0&&x===w?I[x][z]=C:I[x][z]=C.clone().lerp(B,z/$)}for(let x=0;x<w;x++)for(let C=0;C<2*(w-x)-1;C++){let B=Math.floor(C/2);C%2===0?(u(I[x][B+1]),u(I[x+1][B]),u(I[x][B])):(u(I[x][B+1]),u(I[x+1][B+1]),u(I[x+1][B]))}}function c(M){let A=new U;for(let _=0;_<r.length;_+=3)A.x=r[_+0],A.y=r[_+1],A.z=r[_+2],A.normalize().multiplyScalar(M),r[_+0]=A.x,r[_+1]=A.y,r[_+2]=A.z}function h(){let M=new U;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];let _=g(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;a.push(_,1-b)}m(),d()}function d(){for(let M=0;M<a.length;M+=6){let A=a[M+0],_=a[M+2],b=a[M+4],w=Math.max(A,_,b),I=Math.min(A,_,b);w>.9&&I<.1&&(A<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,A){let _=M*3;A.x=t[_+0],A.y=t[_+1],A.z=t[_+2]}function m(){let M=new U,A=new U,_=new U,b=new U,w=new Ut,I=new Ut,x=new Ut;for(let C=0,B=0;C<r.length;C+=9,B+=6){M.set(r[C+0],r[C+1],r[C+2]),A.set(r[C+3],r[C+4],r[C+5]),_.set(r[C+6],r[C+7],r[C+8]),w.set(a[B+0],a[B+1]),I.set(a[B+2],a[B+3]),x.set(a[B+4],a[B+5]),b.copy(M).add(A).add(_).divideScalar(3);let $=g(b);y(w,B+0,M,$),y(I,B+2,A,$),y(x,B+4,_,$)}}function y(M,A,_,b){b<0&&M.x===1&&(a[A]=M.x-1),_.x===0&&_.z===0&&(a[A]=b/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Ut:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new He;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Kr=class extends ci{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Yl=class extends Kr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pu(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Zf=new U,Jf=new U,Kh=new Pu,jh=new Pu,Qh=new Pu,Zl=class extends ci{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Jf.subVectors(s[0],s[1]).add(s[0]),c=Jf);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Zf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Zf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Kh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,y,g),jh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,y,g),Qh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(Kh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),jh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Qh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Kh.calc(l),jh.calc(l),Qh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Kf(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Q0(i,t){let e=1-i;return e*e*t}function tm(i,t){return 2*(1-i)*i*t}function em(i,t){return i*i*t}function Fa(i,t,e,n){return Q0(i,t)+tm(i,e)+em(i,n)}function nm(i,t){let e=1-i;return e*e*e*t}function im(i,t){let e=1-i;return 3*e*e*i*t}function sm(i,t){return 3*(1-i)*i*i*t}function rm(i,t){return i*i*i*t}function Oa(i,t,e,n,s){return nm(i,t)+im(i,e)+sm(i,n)+rm(i,s)}var Ja=class extends ci{constructor(t=new Ut,e=new Ut,n=new Ut,s=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ut){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Oa(t,s.x,r.x,a.x,o.x),Oa(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jr=class extends ci{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Oa(t,s.x,r.x,a.x,o.x),Oa(t,s.y,r.y,a.y,o.y),Oa(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ka=class extends ci{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jl=class extends ci{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends ci{constructor(t=new Ut,e=new Ut,n=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ut){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Fa(t,s.x,r.x,a.x),Fa(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cr=class extends ci{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Fa(t,s.x,r.x,a.x),Fa(t,s.y,r.y,a.y),Fa(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Kf(o,l.x,c.x,h.x,d.x),Kf(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ut().fromArray(s))}return this}},ou=Object.freeze({__proto__:null,ArcCurve:Yl,CatmullRomCurve3:Zl,CubicBezierCurve:Ja,CubicBezierCurve3:jr,EllipseCurve:Kr,LineCurve:Ka,LineCurve3:Jl,QuadraticBezierCurve:ja,QuadraticBezierCurve3:cr,SplineCurve:Qa}),Kl=class extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ou[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ou[s.type]().fromJSON(s))}return this}},hr=class extends Kl{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ka(this.currentPoint.clone(),new Ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ja(this.currentPoint.clone(),new Ut(t,e),new Ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ja(this.currentPoint.clone(),new Ut(t,e),new Ut(n,s),new Ut(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Qa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Kr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Qr=class extends hr{constructor(t){super(t),this.uuid=la(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new hr().fromJSON(s))}return this}};function am(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Yd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=um(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],m=i[u+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return to(r,a,e,o,l,c,0),a}function Yd(i,t,e,n,s){let r;if(s===bm(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=jf(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=jf(a/n|0,i[a],i[a+1],r);return r&&ta(r,r.next)&&(no(r),r=r.next),r}function ur(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ta(e,e.next)||an(e.prev,e,e.next)===0)){if(no(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function to(i,t,e,n,s,r,a){if(!i)return;!a&&r&&gm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?lm(i,n,s,r):om(i)){t.push(l.i,i.i,c.i),no(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=cm(ur(i),t),to(i,t,e,n,s,r,2)):a===2&&hm(i,t,e,n,s,r):to(ur(i),t,e,n,s,r,1);break}}}function om(i){let t=i.prev,e=i,n=i.next;if(an(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Ua(s,o,r,l,a,c,m.x,m.y)&&an(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function lm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(an(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),m=Math.min(h,d,u),y=Math.max(o,l,c),g=Math.max(h,d,u),p=lu(f,m,t,e,n),M=lu(y,g,t,e,n),A=i.prevZ,_=i.nextZ;for(;A&&A.z>=p&&_&&_.z<=M;){if(A.x>=f&&A.x<=y&&A.y>=m&&A.y<=g&&A!==s&&A!==a&&Ua(o,h,l,d,c,u,A.x,A.y)&&an(A.prev,A,A.next)>=0||(A=A.prevZ,_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Ua(o,h,l,d,c,u,_.x,_.y)&&an(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;A&&A.z>=p;){if(A.x>=f&&A.x<=y&&A.y>=m&&A.y<=g&&A!==s&&A!==a&&Ua(o,h,l,d,c,u,A.x,A.y)&&an(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Ua(o,h,l,d,c,u,_.x,_.y)&&an(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function cm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ta(n,s)&&Jd(n,e,e.next,s)&&eo(n,s)&&eo(s,n)&&(t.push(n.i,e.i,s.i),no(e),no(e.next),e=i=s),e=e.next}while(e!==i);return ur(e)}function hm(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_m(a,o)){let l=Kd(a,o);a=ur(a,a.next),l=ur(l,l.next),to(a,t,e,n,s,r,0),to(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function um(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Yd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(vm(c))}s.sort(fm);for(let r=0;r<s.length;r++)e=dm(s[r],e);return e}function fm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function dm(i,t){let e=pm(i,t);if(!e)return t;let n=Kd(e,i);return ur(n,n.next),ur(e,e.next)}function pm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(ta(i,e))return e;do{if(ta(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Zd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);eo(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&mm(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function mm(i,t){return an(i.prev,i,t.prev)<0&&an(t.next,i,i.next)<0}function gm(i,t,e,n){let s=i;do s.z===0&&(s.z=lu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,xm(s)}function xm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function lu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function vm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Zd(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ua(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Zd(i,t,e,n,s,r,a,o)}function _m(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ym(i,t)&&(eo(i,t)&&eo(t,i)&&Mm(i,t)&&(an(i.prev,i,t.prev)||an(i,t.prev,t))||ta(i,t)&&an(i.prev,i,i.next)>0&&an(t.prev,t,t.next)>0)}function an(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ta(i,t){return i.x===t.x&&i.y===t.y}function Jd(i,t,e,n){let s=bl(an(i,t,e)),r=bl(an(i,t,n)),a=bl(an(e,n,i)),o=bl(an(e,n,t));return!!(s!==r&&a!==o||s===0&&Ml(i,e,t)||r===0&&Ml(i,n,t)||a===0&&Ml(e,i,n)||o===0&&Ml(e,t,n))}function Ml(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function bl(i){return i>0?1:i<0?-1:0}function ym(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Jd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function eo(i,t){return an(i.prev,i,i.next)<0?an(i,t,i.next)>=0&&an(i,i.prev,t)>=0:an(i,t,i.prev)<0||an(i,i.next,t)<0}function Mm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Kd(i,t){let e=cu(i.i,i.x,i.y),n=cu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function jf(i,t,e,n){let s=cu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function no(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var hu=class{static triangulate(t,e,n=2){return am(t,e,n)}},Gr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Qf(t),td(n,t);let a=t.length;e.forEach(Qf);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,td(n,e[l]);let o=hu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Qf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function td(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var io=class i extends Xe{constructor(t=[new Ut(0,-.5),new Ut(.5,0),new Ut(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Oe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new U,u=new Ut,f=new U,m=new U,y=new U,g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(m)}for(let M=0;M<=e;M++){let A=n+M*h*s,_=Math.sin(A),b=Math.cos(A);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*_,d.y=t[w].y,d.z=t[w].x*b,a.push(d.x,d.y,d.z),u.x=M/e,u.y=w/(t.length-1),o.push(u.x,u.y);let I=l[3*w+0]*_,x=l[3*w+1],C=l[3*w+0]*b;c.push(I,x,C)}}for(let M=0;M<e;M++)for(let A=0;A<t.length-1;A++){let _=A+M*t.length,b=_,w=_+t.length,I=_+t.length+1,x=_+1;r.push(b,w,x),r.push(I,x,w)}this.setIndex(r),this.setAttribute("position",new Ie(a,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},so=class i extends ql{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},hi=class i extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],m=[],y=[],g=[];for(let p=0;p<h;p++){let M=p*u-a;for(let A=0;A<c;A++){let _=A*d-r;m.push(_,-M,0),y.push(0,0,1),g.push(A/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let A=M+c*p,_=M+c*(p+1),b=M+1+c*(p+1),w=M+1+c*p;f.push(A,_,w),f.push(_,b,w)}this.setIndex(f),this.setAttribute("position",new Ie(m,3)),this.setAttribute("normal",new Ie(y,3)),this.setAttribute("uv",new Ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ro=class i extends Xe{constructor(t=new Qr([new Ut(0,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(r,3)),this.setAttribute("uv",new Ie(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,m=u.holes;Gr.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let M=m[g];Gr.isClockWise(M)===!0&&(m[g]=M.reverse())}let y=Gr.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let M=m[g];f=f.concat(M)}for(let g=0,p=f.length;g<p;g++){let M=f[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,p=y.length;g<p;g++){let M=y[g],A=M[0]+d,_=M[1]+d,b=M[2]+d;n.push(A,_,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Sm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Sm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ws=class i extends Xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new U,u=new U,f=[],m=[],y=[],g=[];for(let p=0;p<=n;p++){let M=[],A=p/n,_=a+A*o,b=t*Math.cos(_),w=Math.sqrt(t*t-b*b),I=0;p===0&&a===0?I=.5/e:p===n&&l===Math.PI&&(I=-.5/e);for(let x=0;x<=e;x++){let C=x/e,B=s+C*r;d.x=-w*Math.cos(B),d.y=b,d.z=w*Math.sin(B),m.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(C+I,1-A),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let A=h[p][M+1],_=h[p][M],b=h[p+1][M],w=h[p+1][M+1];(p!==0||a>0)&&f.push(A,_,w),(p!==n-1||l<Math.PI)&&f.push(_,b,w)}this.setIndex(f),this.setAttribute("position",new Ie(m,3)),this.setAttribute("normal",new Ie(y,3)),this.setAttribute("uv",new Ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ao=class i extends Xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new U,f=new U,m=new U;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let p=(s+1)*y+g-1,M=(s+1)*(y-1)+g-1,A=(s+1)*(y-1)+g,_=(s+1)*y+g;l.push(p,M,_),l.push(M,A,_)}this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var fr=class i extends Xe{constructor(t=new cr(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new Ut,h=new U,d=[],u=[],f=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(f,2));function y(){for(let A=0;A<e;A++)g(A);g(r===!1?e:0),M(),p()}function g(A){h=t.getPointAt(A/e,h);let _=a.normals[A],b=a.binormals[A];for(let w=0;w<=s;w++){let I=w/s*Math.PI*2,x=Math.sin(I),C=-Math.cos(I);l.x=C*_.x+x*b.x,l.y=C*_.y+x*b.y,l.z=C*_.z+x*b.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=e;A++)for(let _=1;_<=s;_++){let b=(s+1)*(A-1)+(_-1),w=(s+1)*A+(_-1),I=(s+1)*A+_,x=(s+1)*(A-1)+_;m.push(b,w,x),m.push(w,I,x)}}function M(){for(let A=0;A<=e;A++)for(let _=0;_<=s;_++)c.x=A/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ou[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function yr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ed(s))s.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ed(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Wn(i){let t={};for(let e=0;e<i.length;e++){let n=yr(i[e]);for(let s in n)t[s]=n[s]}return t}function ed(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Iu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Fe.workingColorSpace}var ca={clone:yr,merge:Wn},Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=Tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yr(t.uniforms),this.uniformsGroups=wm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m4":this.uniforms[n].value=new He().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ea=class extends on{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fn=class extends Oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var oo=class extends Oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=fc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},dr=class extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jl=class extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Br(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function tu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Hs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ql=class extends Hs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:iu,endingEnd:iu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case su:r=t,o=2*e-n;break;case ru:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case su:a=t,l=2*n-e;break;case ru:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),y=m*m,g=y*m,p=-u*g+2*u*y-u*m,M=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*m+1,A=(-1-f)*g+(1.5+f)*y+.5*m,_=f*g-f*y;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+M*a[c+b]+A*a[l+b]+_*a[d+b];return r}},tc=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},ec=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},nc=class extends Hs{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(s-e),y=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*m;return r}let u=o*2,f=t-1;for(let m=0;m!==o;++m){let y=a[c+m],g=a[l+m],p=f*u+m*2,M=d[p],A=d[p+1],_=t*u+m*2,b=h[_],w=h[_+1],I=Cm(n,e,M,b,s);r[m]=jd(I,y,A,w,g)}return r}};function jd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Am(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Cm(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=jd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Am(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ui=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Br(e,this.TimeBufferType),this.values=Br(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Br(t.times,Array),values:Br(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),tu(t.settings)&&(n.settings={inTangents:Br(t.settings.inTangents,Array),outTangents:Br(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new nc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ba:e=this.InterpolantFactoryMethodDiscrete;break;case Fl:e=this.InterpolantFactoryMethodLinear;break;case El:e=this.InterpolantFactoryMethodSmooth;break;case nu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return de("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ba;case this.InterpolantFactoryMethodLinear:return Fl;case this.InterpolantFactoryMethodSmooth:return El;case this.InterpolantFactoryMethodBezier:return nu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;tu(this.settings)&&(nd(this.settings.inTangents,t),nd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ye("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ye("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ye("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ye("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&L0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ye("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===El,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let y=e[d+m];if(y!==e[u+m]||y!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,tu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function nd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Fl;var Gs=class extends ui{constructor(t,e,n){super(t,e,n)}};Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Ba;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}};ic.prototype.ValueTypeName="color";var sc=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}};sc.prototype.ValueTypeName="number";var rc=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)oi.slerpFlat(r,0,a,c-o,a,c,l);return r}},lo=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new rc(this.times,this.values,this.getValueSize(),t)}};lo.prototype.ValueTypeName="quaternion";lo.prototype.InterpolantFactoryMethodSmooth=void 0;var Vs=class extends ui{constructor(t,e,n){super(t,e,n)}};Vs.prototype.ValueTypeName="string";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=Ba;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}};ac.prototype.ValueTypeName="vector";var oc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qd=new oc,lc=class{constructor(t){this.manager=t!==void 0?t:Qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};lc.DEFAULT_MATERIAL_NAME="__DEFAULT";var na=class extends yn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},pr=class extends na{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},eu=new He,id=new U,sd=new U,co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;id.setFromMatrixPosition(t.matrixWorld),e.position.copy(id),sd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){eu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(eu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Wr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(eu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sl=new U,wl=new oi,Qi=new U,ho=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sl,wl,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,wl,Qi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Sl,wl,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,wl,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bs=new U,rd=new Ut,ad=new Ut,Tn=class extends ho{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ol*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(Rh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bs.x,Bs.y).multiplyScalar(-t/Bs.z),Bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bs.x,Bs.y).multiplyScalar(-t/Bs.z)}getViewSize(t,e){return this.getViewBounds(t,rd,ad),e.subVectors(ad,rd)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rh*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var uu=class extends co{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0}},uo=class extends na{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new uu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ws=class extends ho{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fu=class extends co{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends na{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new fu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zr=-90,kr=1,cc=class extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tn(zr,kr,t,e);s.layers=this.layers,this.add(s);let r=new Tn(zr,kr,t,e);r.layers=this.layers,this.add(r);let a=new Tn(zr,kr,t,e);a.layers=this.layers,this.add(a);let o=new Tn(zr,kr,t,e);o.layers=this.layers,this.add(o);let l=new Tn(zr,kr,t,e);l.layers=this.layers,this.add(l);let c=new Tn(zr,kr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},hc=class extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},fo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Rm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Rm(){this._document.hidden===!1&&this.reset()}var Lu="\\[\\]\\.:\\/",Pm=new RegExp("["+Lu+"]","g"),Du="[^"+Lu+"]",Im="[^"+Lu.replace("\\.","")+"]",Lm=/((?:WC+[\/:])*)/.source.replace("WC",Du),Dm=/(WCOD+)?/.source.replace("WCOD",Im),Nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Du),Um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Du),Fm=new RegExp("^"+Lm+Dm+Nm+Um+"$"),Om=["material","materials","bones","map"],du=class{constructor(t,e,n){let s=n||en.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},en=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pm,"")}static parseTrackName(t){let e=Fm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Om.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){de("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};en.Composite=du;en.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};en.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};en.prototype.GetterByBindingType=[en.prototype._getValue_direct,en.prototype._getValue_array,en.prototype._getValue_arrayElement,en.prototype._getValue_toArray];en.prototype.SetterByBindingTypeAndVersioning=[[en.prototype._setValue_direct,en.prototype._setValue_direct_setNeedsUpdate,en.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[en.prototype._setValue_array,en.prototype._setValue_array_setNeedsUpdate,en.prototype._setValue_array_setMatrixWorldNeedsUpdate],[en.prototype._setValue_arrayElement,en.prototype._setValue_arrayElement_setNeedsUpdate,en.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[en.prototype._setValue_fromArray,en.prototype._setValue_fromArray_setNeedsUpdate,en.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E1=new Float32Array(1);var od=new He,mr=class{constructor(t,e,n=0,s=1/0){this.ray=new lr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ye("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return od.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(od),this}intersectObject(t,e=!0,n=[]){return pu(t,this,n,e),n.sort(ld),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)pu(t[s],this,n,e);return n.sort(ld),n}};function ld(i,t){return i.distance-t.distance}function pu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)pu(r[a],t,e,!0)}}var zu=class zu{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};zu.prototype.isMatrix2=!0;var mu=zu;function Nu(i,t,e,n){let s=Bm(n);switch(e){case Tu:return i*t;case _c:return i*t/s.components*s.byteLength;case yc:return i*t/s.components*s.byteLength;case Zs:return i*t*2/s.components*s.byteLength;case Mc:return i*t*2/s.components*s.byteLength;case Au:return i*t*3/s.components*s.byteLength;case yi:return i*t*4/s.components*s.byteLength;case bc:return i*t*4/s.components*s.byteLength;case bo:case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wc:case Tc:return Math.max(i,16)*Math.max(t,8)/4;case Sc:case Ec:return Math.max(i,8)*Math.max(t,8)/2;case Ac:case Cc:case Pc:case Ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rc:case To:case Lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case kc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qc:case Yc:case Zc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jc:case Kc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ao:case jc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bm(i){switch(i){case ei:case bu:return{byteLength:1,components:1};case aa:case Su:case qn:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case Gi:case gc:case _i:return{byteLength:4,components:1};case wu:case Eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Mp(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xm(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],y=d[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var $m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qm=`#ifdef USE_ALPHAHASH
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
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jm=`#ifdef USE_AOMAP
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
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tg=`#ifdef USE_BATCHING
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
#endif`,eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rg=`#ifdef USE_IRIDESCENCE
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
#endif`,ag=`#ifdef USE_BUMPMAP
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mg=`#define PI 3.141592653589793
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
} // validated`,gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xg=`vec3 transformedNormal = objectNormal;
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
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dg=`#ifdef USE_GRADIENTMAP
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
}`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Og=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vg=`PhysicalMaterial material;
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
#endif`,Wg=`uniform sampler2D dfgLUT;
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
}`,Xg=`
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
#endif`,$g=`#if defined( RE_IndirectDiffuse )
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
#endif`,qg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ex=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nx=`#if defined( USE_POINTS_UV )
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
#endif`,ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ax=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`#ifdef USE_MORPHTARGETS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
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
#endif`,gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ix=`float getShadowMask() {
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
}`,Lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ux=`#ifdef USE_SKINNING
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
#endif`,Fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#ifdef USE_TRANSMISSION
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qx=`uniform sampler2D t2D;
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`#include <common>
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
}`,Qx=`#if DEPTH_PACKING == 3200
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
}`,tv=`#define DISTANCE
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
}`,ev=`#define DISTANCE
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
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`uniform float scale;
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
}`,rv=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,ov=`uniform vec3 diffuse;
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
}`,lv=`#define LAMBERT
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
}`,cv=`#define LAMBERT
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
}`,hv=`#define MATCAP
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
}`,uv=`#define MATCAP
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
}`,fv=`#define NORMAL
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
}`,dv=`#define NORMAL
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
}`,pv=`#define PHONG
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
}`,mv=`#define PHONG
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
}`,gv=`#define STANDARD
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
}`,xv=`#define STANDARD
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
}`,vv=`#define TOON
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
}`,_v=`#define TOON
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
}`,yv=`uniform float size;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,bv=`#include <common>
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
}`,Sv=`uniform vec3 color;
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
}`,wv=`uniform float rotation;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:$m,alphahash_pars_fragment:qm,alphamap_fragment:Ym,alphamap_pars_fragment:Zm,alphatest_fragment:Jm,alphatest_pars_fragment:Km,aomap_fragment:jm,aomap_pars_fragment:Qm,batching_pars_vertex:tg,batching_vertex:eg,begin_vertex:ng,beginnormal_vertex:ig,bsdfs:sg,iridescence_fragment:rg,bumpmap_pars_fragment:ag,clipping_planes_fragment:og,clipping_planes_pars_fragment:lg,clipping_planes_pars_vertex:cg,clipping_planes_vertex:hg,color_fragment:ug,color_pars_fragment:fg,color_pars_vertex:dg,color_vertex:pg,common:mg,cube_uv_reflection_fragment:gg,defaultnormal_vertex:xg,displacementmap_pars_vertex:vg,displacementmap_vertex:_g,emissivemap_fragment:yg,emissivemap_pars_fragment:Mg,colorspace_fragment:bg,colorspace_pars_fragment:Sg,envmap_fragment:wg,envmap_common_pars_fragment:Eg,envmap_pars_fragment:Tg,envmap_pars_vertex:Ag,envmap_physical_pars_fragment:Bg,envmap_vertex:Cg,fog_vertex:Rg,fog_pars_vertex:Pg,fog_fragment:Ig,fog_pars_fragment:Lg,gradientmap_pars_fragment:Dg,lightmap_pars_fragment:Ng,lights_lambert_fragment:Ug,lights_lambert_pars_fragment:Fg,lights_pars_begin:Og,lights_toon_fragment:zg,lights_toon_pars_fragment:kg,lights_phong_fragment:Hg,lights_phong_pars_fragment:Gg,lights_physical_fragment:Vg,lights_physical_pars_fragment:Wg,lights_fragment_begin:Xg,lights_fragment_maps:$g,lights_fragment_end:qg,lightprobes_pars_fragment:Yg,logdepthbuf_fragment:Zg,logdepthbuf_pars_fragment:Jg,logdepthbuf_pars_vertex:Kg,logdepthbuf_vertex:jg,map_fragment:Qg,map_pars_fragment:tx,map_particle_fragment:ex,map_particle_pars_fragment:nx,metalnessmap_fragment:ix,metalnessmap_pars_fragment:sx,morphinstance_vertex:rx,morphcolor_vertex:ax,morphnormal_vertex:ox,morphtarget_pars_vertex:lx,morphtarget_vertex:cx,normal_fragment_begin:hx,normal_fragment_maps:ux,normal_pars_fragment:fx,normal_pars_vertex:dx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:gx,clearcoat_normal_fragment_maps:xx,clearcoat_pars_fragment:vx,iridescence_pars_fragment:_x,opaque_fragment:yx,packing:Mx,premultiplied_alpha_fragment:bx,project_vertex:Sx,dithering_fragment:wx,dithering_pars_fragment:Ex,roughnessmap_fragment:Tx,roughnessmap_pars_fragment:Ax,shadowmap_pars_fragment:Cx,shadowmap_pars_vertex:Rx,shadowmap_vertex:Px,shadowmask_pars_fragment:Ix,skinbase_vertex:Lx,skinning_pars_vertex:Dx,skinning_vertex:Nx,skinnormal_vertex:Ux,specularmap_fragment:Fx,specularmap_pars_fragment:Ox,tonemapping_fragment:Bx,tonemapping_pars_fragment:zx,transmission_fragment:kx,transmission_pars_fragment:Hx,uv_pars_fragment:Gx,uv_pars_vertex:Vx,uv_vertex:Wx,worldpos_vertex:Xx,background_vert:$x,background_frag:qx,backgroundCube_vert:Yx,backgroundCube_frag:Zx,cube_vert:Jx,cube_frag:Kx,depth_vert:jx,depth_frag:Qx,distance_vert:tv,distance_frag:ev,equirect_vert:nv,equirect_frag:iv,linedashed_vert:sv,linedashed_frag:rv,meshbasic_vert:av,meshbasic_frag:ov,meshlambert_vert:lv,meshlambert_frag:cv,meshmatcap_vert:hv,meshmatcap_frag:uv,meshnormal_vert:fv,meshnormal_frag:dv,meshphong_vert:pv,meshphong_frag:mv,meshphysical_vert:gv,meshphysical_frag:xv,meshtoon_vert:vv,meshtoon_frag:_v,points_vert:yv,points_frag:Mv,shadow_vert:bv,shadow_frag:Sv,sprite_vert:wv,sprite_frag:Ev},$t={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},os={basic:{uniforms:Wn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Wn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Wn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Wn([$t.common,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.roughnessmap,$t.metalnessmap,$t.fog,$t.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Wn([$t.common,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.gradientmap,$t.fog,$t.lights,{emissive:{value:new ue(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Wn([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Wn([$t.points,$t.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Wn([$t.common,$t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Wn([$t.common,$t.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Wn([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Wn([$t.sprite,$t.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distance:{uniforms:Wn([$t.common,$t.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distance_vert,fragmentShader:Le.distance_frag},shadow:{uniforms:Wn([$t.lights,$t.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};os.physical={uniforms:Wn([os.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var nh={r:0,b:0,g:0},Tv=new He,bp=new Te;bp.set(-1,0,0,0,1,0,0,0,1);function Av(i,t,e,n,s,r){let a=new ue(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let _=M.backgroundBlurriness>0;A=t.get(A,_)}return A}function m(M){let A=!1,_=f(M);_===null?g(a,o):_&&_.isColor&&(g(_,1),A=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,A){let _=f(A);_&&(_.isCubeTexture||_.mapping===yo)?(c===void 0&&(c=new Ne(new Ze(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:yr(os.backgroundCube.uniforms),vertexShader:os.backgroundCube.vertexShader,fragmentShader:os.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(A.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bp),c.material.toneMapped=Fe.getTransfer(_.colorSpace)!==We,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ne(new hi(2,2),new on({name:"BackgroundMaterial",uniforms:yr(os.background.uniforms),vertexShader:os.background.vertexShader,fragmentShader:os.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Fe.getTransfer(_.colorSpace)!==We,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,A){M.getRGB(nh,Iu(i)),e.buffers.color.setClear(nh.r,nh.g,nh.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:m,addToRenderList:y,dispose:p}}function Cv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o($,z,K,F,q){let ht=!1,j=d($,F,K,z);r!==j&&(r=j,c(r.object)),ht=f($,F,K,q),ht&&m($,F,K,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(ht||a)&&(a=!1,_($,z,K,F),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c($){return i.bindVertexArray($)}function h($){return i.deleteVertexArray($)}function d($,z,K,F){let q=F.wireframe===!0,ht=n[z.id];ht===void 0&&(ht={},n[z.id]=ht);let j=$.isInstancedMesh===!0?$.id:0,yt=ht[j];yt===void 0&&(yt={},ht[j]=yt);let rt=yt[K.id];rt===void 0&&(rt={},yt[K.id]=rt);let gt=rt[q];return gt===void 0&&(gt=u(l()),rt[q]=gt),gt}function u($){let z=[],K=[],F=[];for(let q=0;q<e;q++)z[q]=0,K[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:K,attributeDivisors:F,object:$,attributes:{},index:null}}function f($,z,K,F){let q=r.attributes,ht=z.attributes,j=0,yt=K.getAttributes();for(let rt in yt)if(yt[rt].location>=0){let Mt=q[rt],Ct=ht[rt];if(Ct===void 0&&(rt==="instanceMatrix"&&$.instanceMatrix&&(Ct=$.instanceMatrix),rt==="instanceColor"&&$.instanceColor&&(Ct=$.instanceColor)),Mt===void 0||Mt.attribute!==Ct||Ct&&Mt.data!==Ct.data)return!0;j++}return r.attributesNum!==j||r.index!==F}function m($,z,K,F){let q={},ht=z.attributes,j=0,yt=K.getAttributes();for(let rt in yt)if(yt[rt].location>=0){let Mt=ht[rt];Mt===void 0&&(rt==="instanceMatrix"&&$.instanceMatrix&&(Mt=$.instanceMatrix),rt==="instanceColor"&&$.instanceColor&&(Mt=$.instanceColor));let Ct={};Ct.attribute=Mt,Mt&&Mt.data&&(Ct.data=Mt.data),q[rt]=Ct,j++}r.attributes=q,r.attributesNum=j,r.index=F}function y(){let $=r.newAttributes;for(let z=0,K=$.length;z<K;z++)$[z]=0}function g($){p($,0)}function p($,z){let K=r.newAttributes,F=r.enabledAttributes,q=r.attributeDivisors;K[$]=1,F[$]===0&&(i.enableVertexAttribArray($),F[$]=1),q[$]!==z&&(i.vertexAttribDivisor($,z),q[$]=z)}function M(){let $=r.newAttributes,z=r.enabledAttributes;for(let K=0,F=z.length;K<F;K++)z[K]!==$[K]&&(i.disableVertexAttribArray(K),z[K]=0)}function A($,z,K,F,q,ht,j){j===!0?i.vertexAttribIPointer($,z,K,q,ht):i.vertexAttribPointer($,z,K,F,q,ht)}function _($,z,K,F){y();let q=F.attributes,ht=K.getAttributes(),j=z.defaultAttributeValues;for(let yt in ht){let rt=ht[yt];if(rt.location>=0){let gt=q[yt];if(gt===void 0&&(yt==="instanceMatrix"&&$.instanceMatrix&&(gt=$.instanceMatrix),yt==="instanceColor"&&$.instanceColor&&(gt=$.instanceColor)),gt!==void 0){let Mt=gt.normalized,Ct=gt.itemSize,mt=t.get(gt);if(mt===void 0)continue;let fe=mt.buffer,Re=mt.type,Ue=mt.bytesPerElement,dt=Re===i.INT||Re===i.UNSIGNED_INT||gt.gpuType===gc;if(gt.isInterleavedBufferAttribute){let bt=gt.data,Dt=bt.stride,H=gt.offset;if(bt.isInstancedInterleavedBuffer){for(let ut=0;ut<rt.locationSize;ut++)p(rt.location+ut,bt.meshPerAttribute);$.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let ut=0;ut<rt.locationSize;ut++)g(rt.location+ut);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let ut=0;ut<rt.locationSize;ut++)A(rt.location+ut,Ct/rt.locationSize,Re,Mt,Dt*Ue,(H+Ct/rt.locationSize*ut)*Ue,dt)}else{if(gt.isInstancedBufferAttribute){for(let bt=0;bt<rt.locationSize;bt++)p(rt.location+bt,gt.meshPerAttribute);$.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let bt=0;bt<rt.locationSize;bt++)g(rt.location+bt);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let bt=0;bt<rt.locationSize;bt++)A(rt.location+bt,Ct/rt.locationSize,Re,Mt,Ct*Ue,Ct/rt.locationSize*bt*Ue,dt)}}else if(j!==void 0){let Mt=j[yt];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(rt.location,Mt);break;case 3:i.vertexAttrib3fv(rt.location,Mt);break;case 4:i.vertexAttrib4fv(rt.location,Mt);break;default:i.vertexAttrib1fv(rt.location,Mt)}}}}M()}function b(){C();for(let $ in n){let z=n[$];for(let K in z){let F=z[K];for(let q in F){let ht=F[q];for(let j in ht)h(ht[j].object),delete ht[j];delete F[q]}}delete n[$]}}function w($){if(n[$.id]===void 0)return;let z=n[$.id];for(let K in z){let F=z[K];for(let q in F){let ht=F[q];for(let j in ht)h(ht[j].object),delete ht[j];delete F[q]}}delete n[$.id]}function I($){for(let z in n){let K=n[z];for(let F in K){let q=K[F];if(q[$.id]===void 0)continue;let ht=q[$.id];for(let j in ht)h(ht[j].object),delete ht[j];delete q[$.id]}}}function x($){for(let z in n){let K=n[z],F=$.isInstancedMesh===!0?$.id:0,q=K[F];if(q!==void 0){for(let ht in q){let j=q[ht];for(let yt in j)h(j[yt].object),delete j[yt];delete q[ht]}delete K[F],Object.keys(K).length===0&&delete n[z]}}}function C(){B(),a=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function Rv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Pv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==yi&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let x=I===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ei&&I!==_i&&!x&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(de("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:_,maxSamples:b,samples:w}}function Iv(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ni,o=new Te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,A=M*4,_=p.clippingState||null;l.value=_,_=h(m,u,A,f);for(let b=0;b!==A;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=f+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,_=f;A!==y;++A,_+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var ua=4,Lv=6,Dv=20,Nv=256,Ro=new Ws,tp=new ue,ku=null,Hu=0,Gu=0,Vu=!1,Uv=new U,Mr=new U,Js=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Uv}=r;ku=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ku,Hu,Gu),this._renderer.xr.enabled=Vu,t.scissorTest=!1,ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qs||t.mapping===_r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ku=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:qn,format:yi,colorSpace:za,depthBuffer:!1},s=ep(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ep(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fv(r)),this._blurMaterial=Bv(r,t,e),this._ggxMaterial=Ov(r,t,e)}return s}_compileMaterial(t){let e=new Ne(new Xe,t);this._renderer.compile(e,Ro)}_sceneToCubeUV(t,e,n,s,r){let l=new Tn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(tp),d.toneMapping=Hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new Ze,new Ss({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,p=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(tp),p=!0);for(let A=0;A<6;A++){let _=A%3;_===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):_===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let b=this._cubeSize;ha(s,_*b,A>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===qs||t.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=np());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ha(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ro)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,y=this._sizeLods[n],g=3*y*(n>m-ua?n-m+ua:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,ha(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Ro),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,ha(t,g,p,3*y,2*y),s.setRenderTarget(t),s.render(o,Ro)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-ua?s-this._lodMax+ua:0),u=4*(this._cubeSize-h);ha(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Ro)}};function Fv(i){let t=[],e=[],n=i,s=i-ua+1+Lv;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,A=p>2?0:-1,_=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];m.set(_,f*u*p);for(let b=0;b<u;b++){let w=h[b*2]*2-1,I=h[b*2+1]*2-1;p===0?Mr.set(1,I,w):p===1?Mr.set(-w,1,-I):p===2?Mr.set(-w,I,1):p===3?Mr.set(-1,I,-w):p===4?Mr.set(-w,-1,I):Mr.set(w,I,-1),Mr.toArray(y,(p*u+b)*f)}}let g=new Xe;g.setAttribute("position",new Ce(m,f)),g.setAttribute("outputDirection",new Ce(y,f)),e.push(new Ne(g,null)),n>ua&&n--}return{lodMeshes:e,sizeLods:t}}function ep(i,t,e){let n=new Nn(i,t,e);return n.texture.mapping=yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ov(i,t,e){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ah(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Bv(i,t,e){return new on({name:"SphericalGaussianBlur",defines:{SAMPLES:Dv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ah(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function np(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ip(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ah(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var sh=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ze(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:xi});r.uniforms.tEquirect.value=e;let a=new Ne(s,r),o=e.minFilter;return e.minFilter===vi&&(e.minFilter=Bn),new cc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function zv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===dc||f===pc)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let y=new sh(m.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,m=f===dc||f===pc,y=f===qs||f===_r;if(m||y){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Js(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return m&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Js(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===dc?u.mapping=qs:f===pc&&(u.mapping=_r),u}function l(u){let f=0,m=6;for(let y=0;y<m;y++)u[y]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function kv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ar("WebGLRenderer: "+n+" extension not supported."),s}}}function Hv(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,y=0;if(m===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let A=0,_=M.length;A<_;A+=3){let b=M[A+0],w=M[A+1],I=M[A+2];u.push(b,w,w,I,I,b)}}else{let M=m.array;y=m.version;for(let A=0,_=M.length/3-1;A<_;A+=3){let b=A+0,w=A+1,I=A+2;u.push(b,w,w,I,I,b)}}let g=new(m.count>=65535?Wa:Va)(u,1);g.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Gv(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=u[g];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wv(i,t,e){let n=new WeakMap,s=new Ke;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let C=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;f===!0&&(A=1),m===!0&&(A=2),y===!0&&(A=3);let _=o.attributes.position.count*A,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*b*4*d),I=new Ga(w,_,b,d);I.type=_i,I.needsUpdate=!0;let x=A*4;for(let B=0;B<d;B++){let $=g[B],z=p[B],K=M[B],F=_*b*4*B;for(let q=0;q<$.count;q++){let ht=q*x;f===!0&&(s.fromBufferAttribute($,q),w[F+ht+0]=s.x,w[F+ht+1]=s.y,w[F+ht+2]=s.z,w[F+ht+3]=0),m===!0&&(s.fromBufferAttribute(z,q),w[F+ht+4]=s.x,w[F+ht+5]=s.y,w[F+ht+6]=s.z,w[F+ht+7]=0),y===!0&&(s.fromBufferAttribute(K,q),w[F+ht+8]=s.x,w[F+ht+9]=s.y,w[F+ht+10]=s.z,w[F+ht+11]=K.itemSize===4?s.w:1)}}u={count:d,texture:I,size:new Ut(_,b)},n.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Xv(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var $v={[po]:"LINEAR_TONE_MAPPING",[mo]:"REINHARD_TONE_MAPPING",[go]:"CINEON_TONE_MAPPING",[xo]:"ACES_FILMIC_TONE_MAPPING",[_o]:"AGX_TONE_MAPPING",[vr]:"NEUTRAL_TONE_MAPPING",[vo]:"CUSTOM_TONE_MAPPING"};function qv(i,t,e,n,s,r){let a=new Nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Xe;c.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ie([0,2,0,0,2,0],2));let h=new ea({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ne(c,h),u=new Ws(-1,1,1,-1,0,1),f=null,m=null,y=!1,g,p=null,M=[],A=!1;this.setSize=function(_,b){a.setSize(_,b),o!==null&&o.setSize(_,b),l!==null&&l.setSize(_,b);for(let w=0;w<M.length;w++){let I=M[w];I.setSize&&I.setSize(_,b)}},this.setEffects=function(_){M=_,A=M.length>0&&M[0].isRenderPass===!0;let b=a.width,w=a.height;M.length>0&&o===null&&(o=new Nn(b,w,{type:qn,depthBuffer:!1,stencilBuffer:!1}),l=new Nn(b,w,{type:qn,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<M.length;I++){let x=M[I];x.setSize&&x.setSize(b,w)}},this.begin=function(_,b){if(y||_.toneMapping===Hi&&M.length===0)return!1;if(p=b,b!==null){let w=b.width,I=b.height;(a.width!==w||a.height!==I)&&this.setSize(w,I)}return A===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Hi,!0},this.hasRenderPass=function(){return A},this.end=function(_,b){_.toneMapping=g,y=!0;let w=a,I=o;for(let x=0;x<M.length;x++){let C=M[x];C.enabled!==!1&&(C.render(_,I,w,b),C.needsSwap!==!1&&(w=I,I=I===o?l:o))}if(f!==_.outputColorSpace||m!==_.toneMapping){f=_.outputColorSpace,m=_.toneMapping,h.defines={},Fe.getTransfer(f)===We&&(h.defines.SRGB_TRANSFER="");let x=$v[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(p),_.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Sp=new $n,$u=new ks(1,1),wp=new Ga,Ep=new kl,Tp=new qa,sp=[],rp=[],ap=new Float32Array(16),op=new Float32Array(9),lp=new Float32Array(4);function da(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=sp[s];if(r===void 0&&(r=new Float32Array(s),sp[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function An(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Cn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function oh(i,t){let e=rp[t];e===void 0&&(e=new Int32Array(t),rp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(An(e,t))return;i.uniform2fv(this.addr,t),Cn(e,t)}}function Jv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(An(e,t))return;i.uniform3fv(this.addr,t),Cn(e,t)}}function Kv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(An(e,t))return;i.uniform4fv(this.addr,t),Cn(e,t)}}function jv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(An(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Cn(e,t)}else{if(An(e,n))return;lp.set(n),i.uniformMatrix2fv(this.addr,!1,lp),Cn(e,n)}}function Qv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(An(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Cn(e,t)}else{if(An(e,n))return;op.set(n),i.uniformMatrix3fv(this.addr,!1,op),Cn(e,n)}}function t_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(An(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Cn(e,t)}else{if(An(e,n))return;ap.set(n),i.uniformMatrix4fv(this.addr,!1,ap),Cn(e,n)}}function e_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function n_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(An(e,t))return;i.uniform2iv(this.addr,t),Cn(e,t)}}function i_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(An(e,t))return;i.uniform3iv(this.addr,t),Cn(e,t)}}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(An(e,t))return;i.uniform4iv(this.addr,t),Cn(e,t)}}function r_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(An(e,t))return;i.uniform2uiv(this.addr,t),Cn(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(An(e,t))return;i.uniform3uiv(this.addr,t),Cn(e,t)}}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(An(e,t))return;i.uniform4uiv(this.addr,t),Cn(e,t)}}function c_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($u.compareFunction=e.isReversedDepthBuffer()?eh:th,r=$u):r=Sp,e.setTexture2D(t||r,s)}function h_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ep,s)}function u_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tp,s)}function f_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wp,s)}function d_(i){switch(i){case 5126:return Yv;case 35664:return Zv;case 35665:return Jv;case 35666:return Kv;case 35674:return jv;case 35675:return Qv;case 35676:return t_;case 5124:case 35670:return e_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return a_;case 36295:return o_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return f_}}function p_(i,t){i.uniform1fv(this.addr,t)}function m_(i,t){let e=da(t,this.size,2);i.uniform2fv(this.addr,e)}function g_(i,t){let e=da(t,this.size,3);i.uniform3fv(this.addr,e)}function x_(i,t){let e=da(t,this.size,4);i.uniform4fv(this.addr,e)}function v_(i,t){let e=da(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function __(i,t){let e=da(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function y_(i,t){let e=da(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function M_(i,t){i.uniform1iv(this.addr,t)}function b_(i,t){i.uniform2iv(this.addr,t)}function S_(i,t){i.uniform3iv(this.addr,t)}function w_(i,t){i.uniform4iv(this.addr,t)}function E_(i,t){i.uniform1uiv(this.addr,t)}function T_(i,t){i.uniform2uiv(this.addr,t)}function A_(i,t){i.uniform3uiv(this.addr,t)}function C_(i,t){i.uniform4uiv(this.addr,t)}function R_(i,t,e){let n=this.cache,s=t.length,r=oh(e,s);An(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=$u:a=Sp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function P_(i,t,e){let n=this.cache,s=t.length,r=oh(e,s);An(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ep,r[a])}function I_(i,t,e){let n=this.cache,s=t.length,r=oh(e,s);An(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Tp,r[a])}function L_(i,t,e){let n=this.cache,s=t.length,r=oh(e,s);An(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||wp,r[a])}function D_(i){switch(i){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return x_;case 35674:return v_;case 35675:return __;case 35676:return y_;case 5124:case 35670:return M_;case 35667:case 35671:return b_;case 35668:case 35672:return S_;case 35669:case 35673:return w_;case 5125:return E_;case 36294:return T_;case 36295:return A_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return L_}}var qu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=d_(e.type)}},Yu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D_(e.type)}},Zu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Wu=/(\w+)(\])?(\[|\.)?/g;function cp(i,t){i.seq.push(t),i.map[t.id]=t}function N_(i,t,e){let n=i.name,s=n.length;for(Wu.lastIndex=0;;){let r=Wu.exec(n),a=Wu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cp(e,c===void 0?new qu(o,i,t):new Yu(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Zu(o),cp(e,d)),e=d}}}var fa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);N_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function hp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var U_=37297,F_=0;function O_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var up=new Te;function B_(i){Fe._getMatrix(up,Fe.workingColorSpace,i);let t=`mat3( ${up.elements.map(e=>e.toFixed(4))} )`;switch(Fe.getTransfer(i)){case ka:return[t,"LinearTransferOETF"];case We:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+O_(i.getShaderSource(t),o)}else return r}function z_(i,t){let e=B_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var k_={[po]:"Linear",[mo]:"Reinhard",[go]:"Cineon",[xo]:"ACESFilmic",[_o]:"AgX",[vr]:"Neutral",[vo]:"Custom"};function H_(i,t){let e=k_[t];return e===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ih=new U;function G_(){Fe.getLuminanceCoefficients(ih);let i=ih.x.toFixed(4),t=ih.y.toFixed(4),e=ih.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function W_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function X_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Io(i){return i!==""}function dp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(i){return i.replace($_,Y_)}var q_=new Map;function Y_(i,t){let e=Le[t];if(e===void 0){let n=q_.get(t);if(n!==void 0)e=Le[n],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ju(e)}var Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mp(i){return i.replace(Z_,J_)}function J_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var K_={[gr]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function j_(i){return K_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Q_={[qs]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE_UV"};function ty(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Q_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ey={[_r]:"ENVMAP_MODE_REFRACTION"};function ny(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ey[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var iy={[fc]:"ENVMAP_BLENDING_MULTIPLY",[Pd]:"ENVMAP_BLENDING_MIX",[Id]:"ENVMAP_BLENDING_ADD"};function sy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":iy[i.combine]||"ENVMAP_BLENDING_NONE"}function ry(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ay(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=j_(e),c=ty(e),h=ny(e),d=sy(e),u=ry(e),f=V_(e),m=W_(r),y=s.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Io).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Io).join(`
`),p.length>0&&(p+=`
`)):(g=[gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),p=[gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?Le.tonemapping_pars_fragment:"",e.toneMapping!==Hi?H_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,z_("linearToOutputTexel",e.outputColorSpace),G_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Io).join(`
`)),a=Ju(a),a=dp(a,e),a=pp(a,e),o=Ju(o),o=dp(o,e),o=pp(o,e),a=mp(a),o=mp(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=M+g+a,_=M+p+o,b=hp(s,s.VERTEX_SHADER,A),w=hp(s,s.FRAGMENT_SHADER,_);s.attachShader(y,b),s.attachShader(y,w),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I($){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(y)||"",K=s.getShaderInfoLog(b)||"",F=s.getShaderInfoLog(w)||"",q=z.trim(),ht=K.trim(),j=F.trim(),yt=!0,rt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(yt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,b,w);else{let gt=fp(s,b,"vertex"),Mt=fp(s,w,"fragment");ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+q+`
`+gt+`
`+Mt)}else q!==""?de("WebGLProgram: Program Info Log:",q):(ht===""||j==="")&&(rt=!1);rt&&($.diagnostics={runnable:yt,programLog:q,vertexShader:{log:ht,prefix:g},fragmentShader:{log:j,prefix:p}})}s.deleteShader(b),s.deleteShader(w),x=new fa(s,y),C=X_(s,y)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(y,U_)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=w,this}var oy=0,Ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ju(t),e.set(t,n)),n}},ju=class{constructor(t){this.id=oy++,this.code=t,this.usedTimes=0}};function ly(i){return i===Zs||i===To||i===Ao}function cy(i,t,e,n,s,r){let a=new qr,o=new Ku,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,C,B,$,z,K){let F=$.fog,q=z.geometry,ht=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?$.environment:null,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,yt=t.get(x.envMap||ht,j),rt=yt&&yt.mapping===yo?yt.image.height:null,gt=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&de("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let Mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ct=Mt!==void 0?Mt.length:0,mt=0;q.morphAttributes.position!==void 0&&(mt=1),q.morphAttributes.normal!==void 0&&(mt=2),q.morphAttributes.color!==void 0&&(mt=3);let fe,Re,Ue,dt;if(gt){let ke=os[gt];fe=ke.vertexShader,Re=ke.fragmentShader}else{fe=x.vertexShader,Re=x.fragmentShader;let ke=o.getVertexShaderStage(x),De=o.getFragmentShaderStage(x);o.update(x,ke,De),Ue=ke.id,dt=De.id}let bt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),H=z.isInstancedMesh===!0,ut=z.isBatchedMesh===!0,lt=!!x.map,Ft=!!x.matcap,Vt=!!yt,Ot=!!x.aoMap,Bt=!!x.lightMap,Nt=!!x.bumpMap&&x.wireframe===!1,Ht=!!x.normalMap,he=!!x.displacementMap,Se=!!x.emissiveMap,oe=!!x.metalnessMap,me=!!x.roughnessMap,W=x.anisotropy>0,ve=x.clearcoat>0,be=x.dispersion>0,P=x.retroreflectivity>0,v=x.iridescence>0,J=x.sheen>0,it=x.transmission>0,T=W&&!!x.anisotropyMap,N=ve&&!!x.clearcoatMap,Z=ve&&!!x.clearcoatNormalMap,L=ve&&!!x.clearcoatRoughnessMap,G=v&&!!x.iridescenceMap,at=v&&!!x.iridescenceThicknessMap,Q=J&&!!x.sheenColorMap,wt=J&&!!x.sheenRoughnessMap,Tt=!!x.specularMap,It=!!x.specularColorMap,qt=!!x.specularIntensityMap,Qt=it&&!!x.transmissionMap,O=it&&!!x.thicknessMap,St=!!x.gradientMap,et=!!x.alphaMap,_t=x.alphaTest>0,Pt=!!x.alphaHash,Et=!!x.extensions,Zt=Hi;x.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let Jt={shaderID:gt,shaderType:x.type,shaderName:x.name,vertexShader:fe,fragmentShader:Re,defines:x.defines,customVertexShaderID:Ue,customFragmentShaderID:dt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ut,batchingColor:ut&&z._colorsTexture!==null,instancing:H,instancingColor:H&&z.instanceColor!==null,instancingMorph:H&&z.morphTexture!==null,outputColorSpace:bt===null?i.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Fe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:lt,matcap:Ft,envMap:Vt,envMapMode:Vt&&yt.mapping,envMapCubeUVHeight:rt,aoMap:Ot,lightMap:Bt,bumpMap:Nt,normalMap:Ht,displacementMap:he,emissiveMap:Se,normalMapObjectSpace:Ht&&x.normalMapType===Nd,normalMapTangentSpace:Ht&&x.normalMapType===Co,packedNormalMap:Ht&&x.normalMapType===Co&&ly(x.normalMap.format),metalnessMap:oe,roughnessMap:me,anisotropy:W,anisotropyMap:T,clearcoat:ve,clearcoatMap:N,clearcoatNormalMap:Z,clearcoatRoughnessMap:L,dispersion:be,retroreflection:P,iridescence:v,iridescenceMap:G,iridescenceThicknessMap:at,sheen:J,sheenColorMap:Q,sheenRoughnessMap:wt,specularMap:Tt,specularColorMap:It,specularIntensityMap:qt,transmission:it,transmissionMap:Qt,thicknessMap:O,gradientMap:St,opaque:x.transparent===!1&&x.blending===sa&&x.alphaToCoverage===!1,alphaMap:et,alphaTest:_t,alphaHash:Pt,combine:x.combine,mapUv:lt&&m(x.map.channel),aoMapUv:Ot&&m(x.aoMap.channel),lightMapUv:Bt&&m(x.lightMap.channel),bumpMapUv:Nt&&m(x.bumpMap.channel),normalMapUv:Ht&&m(x.normalMap.channel),displacementMapUv:he&&m(x.displacementMap.channel),emissiveMapUv:Se&&m(x.emissiveMap.channel),metalnessMapUv:oe&&m(x.metalnessMap.channel),roughnessMapUv:me&&m(x.roughnessMap.channel),anisotropyMapUv:T&&m(x.anisotropyMap.channel),clearcoatMapUv:N&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:Z&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:G&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:wt&&m(x.sheenRoughnessMap.channel),specularMapUv:Tt&&m(x.specularMap.channel),specularColorMapUv:It&&m(x.specularColorMap.channel),specularIntensityMapUv:qt&&m(x.specularIntensityMap.channel),transmissionMapUv:Qt&&m(x.transmissionMap.channel),thicknessMapUv:O&&m(x.thicknessMap.channel),alphaMapUv:et&&m(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ht||W),vertexNormals:!!q.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(lt||et),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||q.attributes.normal===void 0&&Ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Dt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:mt,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:lt&&x.map.isVideoTexture===!0&&Fe.getTransfer(x.map.colorSpace)===We,decodeVideoTextureEmissive:Se&&x.emissiveMap.isVideoTexture===!0&&Fe.getTransfer(x.emissiveMap.colorSpace)===We,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gi,flipSided:x.side===zn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Et&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&x.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function g(x){let C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(let B in x.defines)C.push(B),C.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(p(C,x),M(C,x),C.push(i.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function p(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numSunLights),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numSunLightShadows),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function M(x,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let C=f[x.type],B;if(C){let $=os[C];B=ca.clone($.uniforms)}else B=x.uniforms;return B}function _(x,C){let B=h.get(C);return B!==void 0?++B.usedTimes:(B=new ay(i,C,x,s),c.push(B),h.set(C,B)),B}function b(x){if(--x.usedTimes===0){let C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function I(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:_,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:I}}function hy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function uy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,y,g,p){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:p},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=m,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=g,M.group=p),t++,M}function l(u,f,m,y,g,p,M){M.reversedDepth===!0&&(g=-g);let A=o(u,f,m,y,g,p);m.transmission>0?n.push(A):m.transparent===!0?s.push(A):e.push(A)}function c(u,f,m,y,g,p){let M=o(u,f,m,y,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||uy),n.length>1&&n.sort(f||xp),s.length>1&&s.sort(f||xp)}function d(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function fy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new vp,i.set(n,[a])):s>=r.length?(a=new vp,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function dy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new ue};break;case"SpotLight":e={position:new U,direction:new U,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function py(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var my=0;function gy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xy(i){let t=new dy,e=py(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new He,a=new He;function o(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,M=0,A=0,_=0,b=0,w=0,I=0,x=0,C=0,B=0;c.sort(gy);for(let z=0,K=c.length;z<K;z++){let F=c[z],q=F.color,ht=F.intensity,j=F.distance,yt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Zs?yt=F.shadow.map.texture:yt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=q.r*ht,d+=q.g*ht,u+=q.b*ht;else if(F.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(F.sh.coefficients[rt],ht);B++}else if(F.isSunLight){let rt=t.get(F);if(rt.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let gt=F.shadow,Mt=e.get(F);Mt.shadowIntensity=gt.intensity,Mt.shadowBias=gt.bias,Mt.shadowNormalBias=gt.normalBias,Mt.shadowRadius=gt.radius,Mt.shadowMapSize.copy(gt.mapSize).multiply(gt.getFrameExtents()),n.sunShadow[m]=Mt,n.sunShadowMap[m]=yt;let Ct=gt.getViewportCount();for(let mt=0;mt<Ct;mt++)n.sunShadowMatrix[y+mt]=gt.getMatrix(mt),n.sunShadowCascade[y+mt]=gt._cascadeData[mt];y+=Ct,m++}n.sun[f]=rt,f++}else if(F.isDirectionalLight){let rt=t.get(F);if(rt.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let gt=F.shadow,Mt=e.get(F);Mt.shadowIntensity=gt.intensity,Mt.shadowBias=gt.bias,Mt.shadowNormalBias=gt.normalBias,Mt.shadowRadius=gt.radius,Mt.shadowMapSize=gt.mapSize,n.directionalShadow[g]=Mt,n.directionalShadowMap[g]=yt,n.directionalShadowMatrix[g]=F.shadow.matrix,b++}n.directional[g]=rt,g++}else if(F.isSpotLight){let rt=t.get(F);rt.position.setFromMatrixPosition(F.matrixWorld),rt.color.copy(q).multiplyScalar(ht),rt.distance=j,rt.coneCos=Math.cos(F.angle),rt.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),rt.decay=F.decay,n.spot[M]=rt;let gt=F.shadow;if(F.map&&(n.spotLightMap[x]=F.map,x++,gt.updateMatrices(F),F.castShadow&&C++),n.spotLightMatrix[M]=gt.matrix,F.castShadow){let Mt=e.get(F);Mt.shadowIntensity=gt.intensity,Mt.shadowBias=gt.bias,Mt.shadowNormalBias=gt.normalBias,Mt.shadowRadius=gt.radius,Mt.shadowMapSize=gt.mapSize,n.spotShadow[M]=Mt,n.spotShadowMap[M]=yt,I++}M++}else if(F.isRectAreaLight){let rt=t.get(F);rt.color.copy(q).multiplyScalar(ht),rt.halfWidth.set(F.width*.5,0,0),rt.halfHeight.set(0,F.height*.5,0),n.rectArea[A]=rt,A++}else if(F.isPointLight){let rt=t.get(F);if(rt.color.copy(F.color).multiplyScalar(F.intensity),rt.distance=F.distance,rt.decay=F.decay,F.castShadow){let gt=F.shadow,Mt=e.get(F);Mt.shadowIntensity=gt.intensity,Mt.shadowBias=gt.bias,Mt.shadowNormalBias=gt.normalBias,Mt.shadowRadius=gt.radius,Mt.shadowMapSize=gt.mapSize,Mt.shadowCameraNear=gt.camera.near,Mt.shadowCameraFar=gt.camera.far,n.pointShadow[p]=Mt,n.pointShadowMap[p]=yt,n.pointShadowMatrix[p]=F.shadow.matrix,w++}n.point[p]=rt,p++}else if(F.isHemisphereLight){let rt=t.get(F);rt.skyColor.copy(F.color).multiplyScalar(ht),rt.groundColor.copy(F.groundColor).multiplyScalar(ht),n.hemi[_]=rt,_++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=$t.LTC_FLOAT_1,n.rectAreaLTC2=$t.LTC_FLOAT_2):(n.rectAreaLTC1=$t.LTC_HALF_1,n.rectAreaLTC2=$t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let $=n.hash;($.sunLength!==f||$.directionalLength!==g||$.pointLength!==p||$.spotLength!==M||$.rectAreaLength!==A||$.hemiLength!==_||$.numSunShadows!==m||$.numDirectionalShadows!==b||$.numPointShadows!==w||$.numSpotShadows!==I||$.numSpotMaps!==x||$.numLightProbes!==B)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=A,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+x-C,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=B,$.sunLength=f,$.directionalLength=g,$.pointLength=p,$.spotLength=M,$.rectAreaLength=A,$.hemiLength=_,$.numSunShadows=m,$.numDirectionalShadows=b,$.numPointShadows=w,$.numSpotShadows=I,$.numSpotMaps=x,$.numLightProbes=B,n.version=my++)}function l(c,h){let d=0,u=0,f=0,m=0,y=0,g=0,p=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let _=c[M];if(_.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(_.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let b=n.rectArea[y];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function _p(i){let t=new xy(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function vy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new _p(i),t.set(s,[o])):r>=a.length?(o=new _p(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var _y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yy=`uniform sampler2D shadow_pass;
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
}`,My=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],by=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],yp=new He,Po=new U,Xu=new U;function Sy(i,t,e){let n=new Zr,s=new Ut,r=new Ut,a=new Ke,o=new dr,l=new jl,c={},h=e.maxTextureSize,d={[$s]:zn,[zn]:$s,[gi]:gi},u=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:_y,fragmentShader:yy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Xe;m.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ne(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gr;let p=this.type;this.render=function(w,I,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===ud&&(de("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gr);let C=i.getRenderTarget(),B=i.getActiveCubeFace(),$=i.getActiveMipmapLevel(),z=i.state;z.setBlending(xi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let K=p!==this.type;K&&I.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(q=>q.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,q=w.length;F<q;F++){let ht=w[F],j=ht.shadow;if(j===void 0){de("WebGLShadowMap:",ht,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let yt=j.getFrameExtents();s.multiply(yt),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/yt.x),s.x=r.x*yt.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/yt.y),s.y=r.y*yt.y,j.mapSize.y=r.y));let rt=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=rt,j.map===null||K===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===ia){if(ht.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Nn(s.x,s.y,{format:Zs,type:qn,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),j.map.texture.name=ht.name+".shadowMap",j.map.depthTexture=new ks(s.x,s.y,_i),j.map.depthTexture.name=ht.name+".shadowMapDepth",j.map.depthTexture.format=es,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Dn,j.map.depthTexture.magFilter=Dn}else ht.isPointLight?(j.map=new sh(s.x),j.map.depthTexture=new $l(s.x,Gi)):(j.map=new Nn(s.x,s.y),j.map.depthTexture=new ks(s.x,s.y,Gi)),j.map.depthTexture.name=ht.name+".shadowMap",j.map.depthTexture.format=es,this.type===gr?(j.map.depthTexture.compareFunction=rt?eh:th,j.map.depthTexture.minFilter=Bn,j.map.depthTexture.magFilter=Bn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Dn,j.map.depthTexture.magFilter=Dn);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let gt=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();ht.isPointLight!==!0&&j.updateMatrices(ht,x);for(let Mt=0;Mt<gt;Mt++){let Ct=j.getCamera(Mt);if(ht.isPointLight){let mt=j.camera,fe=j.matrix,Re=ht.distance||mt.far;Re!==mt.far&&(mt.far=Re,mt.updateProjectionMatrix()),Po.setFromMatrixPosition(ht.matrixWorld),mt.position.copy(Po),Xu.copy(mt.position),Xu.add(My[Mt]),mt.up.copy(by[Mt]),mt.lookAt(Xu),mt.updateMatrixWorld(),fe.makeTranslation(-Po.x,-Po.y,-Po.z),yp.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),j._frustum.setFromProjectionMatrix(yp,mt.coordinateSystem,mt.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,Mt),i.clear();else{Mt===0&&(i.setRenderTarget(j.map),i.clear());let mt=j.getViewport(Mt);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),z.viewport(a)}n=j.getFrustum(Mt),_(I,x,Ct,ht,this.type)}j.isPointLightShadow!==!0&&this.type===ia&&M(j,x),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(C,B,$)};function M(w,I){let x=t.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Nn(s.x,s.y,{format:Zs,type:qn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(I,null,x,u,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(I,null,x,f,y,null)}function A(w,I,x,C){let B=null,$=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if($!==void 0)B=$;else if(B=x.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let z=B.uuid,K=I.uuid,F=c[z];F===void 0&&(F={},c[z]=F);let q=F[K];q===void 0&&(q=B.clone(),F[K]=q,I.addEventListener("dispose",b)),B=q}if(B.visible=I.visible,B.wireframe=I.wireframe,C===ia?B.side=I.shadowSide!==null?I.shadowSide:I.side:B.side=I.shadowSide!==null?I.shadowSide:d[I.side],B.alphaMap=I.alphaMap,B.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,B.map=I.map,B.clipShadows=I.clipShadows,B.clippingPlanes=I.clippingPlanes,B.clipIntersection=I.clipIntersection,B.displacementMap=I.displacementMap,B.displacementScale=I.displacementScale,B.displacementBias=I.displacementBias,B.wireframeLinewidth=I.wireframeLinewidth,B.linewidth=I.linewidth,x.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let z=i.properties.get(B);z.light=x}return B}function _(w,I,x,C,B){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&B===ia)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let K=t.update(w),F=w.material;if(Array.isArray(F)){let q=K.groups;for(let ht=0,j=q.length;ht<j;ht++){let yt=q[ht],rt=F[yt.materialIndex];if(rt&&rt.visible){let gt=A(w,rt,C,B);w.onBeforeShadow(i,w,I,x,K,gt,yt),i.renderBufferDirect(x,null,K,gt,w,yt),w.onAfterShadow(i,w,I,x,K,gt,yt)}}}else if(F.visible){let q=A(w,F,C,B);w.onBeforeShadow(i,w,I,x,K,q,null),i.renderBufferDirect(x,null,K,q,w,null),w.onAfterShadow(i,w,I,x,K,q,null)}}let z=w.children;for(let K=0,F=z.length;K<F;K++)_(z[K],I,x,C,B)}function b(w){w.target.removeEventListener("dispose",b);for(let x in c){let C=c[x],B=w.target.uuid;B in C&&(C[B].dispose(),delete C[B])}}}function wy(i,t){function e(){let O=!1,St=new Ke,et=null,_t=new Ke(0,0,0,0);return{setMask:function(Pt){et!==Pt&&!O&&(i.colorMask(Pt,Pt,Pt,Pt),et=Pt)},setLocked:function(Pt){O=Pt},setClear:function(Pt,Et,Zt,Jt,ke){ke===!0&&(Pt*=Jt,Et*=Jt,Zt*=Jt),St.set(Pt,Et,Zt,Jt),_t.equals(St)===!1&&(i.clearColor(Pt,Et,Zt,Jt),_t.copy(St))},reset:function(){O=!1,et=null,_t.set(-1,0,0,0)}}}function n(){let O=!1,St=!1,et=null,_t=null,Pt=null;return{setReversed:function(Et){if(St!==Et){let Zt=t.get("EXT_clip_control");Et?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),St=Et;let Jt=Pt;Pt=null,this.setClear(Jt)}},getReversed:function(){return St},setTest:function(Et){Et?bt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(Et){et!==Et&&!O&&(i.depthMask(Et),et=Et)},setFunc:function(Et){if(St&&(Et=$d[Et]),_t!==Et){switch(Et){case Al:i.depthFunc(i.NEVER);break;case Cl:i.depthFunc(i.ALWAYS);break;case Rl:i.depthFunc(i.LESS);break;case Vr:i.depthFunc(i.LEQUAL);break;case Pl:i.depthFunc(i.EQUAL);break;case Il:i.depthFunc(i.GEQUAL);break;case Ll:i.depthFunc(i.GREATER);break;case Dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=Et}},setLocked:function(Et){O=Et},setClear:function(Et){Pt!==Et&&(Pt=Et,St&&(Et=1-Et),i.clearDepth(Et))},reset:function(){O=!1,et=null,_t=null,Pt=null,St=!1}}}function s(){let O=!1,St=null,et=null,_t=null,Pt=null,Et=null,Zt=null,Jt=null,ke=null;return{setTest:function(De){O||(De?bt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(De){St!==De&&!O&&(i.stencilMask(De),St=De)},setFunc:function(De,mn,gn){(et!==De||_t!==mn||Pt!==gn)&&(i.stencilFunc(De,mn,gn),et=De,_t=mn,Pt=gn)},setOp:function(De,mn,gn){(Et!==De||Zt!==mn||Jt!==gn)&&(i.stencilOp(De,mn,gn),Et=De,Zt=mn,Jt=gn)},setLocked:function(De){O=De},setClear:function(De){ke!==De&&(i.clearStencil(De),ke=De)},reset:function(){O=!1,St=null,et=null,_t=null,Pt=null,Et=null,Zt=null,Jt=null,ke=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],y=null,g=!1,p=null,M=null,A=null,_=null,b=null,w=null,I=null,x=new ue(0,0,0),C=0,B=!1,$=null,z=null,K=null,F=null,q=null,ht=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,yt=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(yt=parseFloat(/^WebGL (\d)/.exec(rt)[1]),j=yt>=1):rt.indexOf("OpenGL ES")!==-1&&(yt=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),j=yt>=2);let gt=null,Mt={},Ct=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),fe=new Ke().fromArray(Ct),Re=new Ke().fromArray(mt);function Ue(O,St,et,_t){let Pt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(O,Et),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<et;Zt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(St+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return Et}let dt={};dt[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),bt(i.DEPTH_TEST),a.setFunc(Vr),Nt(!1),Ht(gu),bt(i.CULL_FACE),Ot(xi);function bt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Dt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function H(O,St){return u[O]!==St?(i.bindFramebuffer(O,St),u[O]=St,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=St),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=St),!0):!1}function ut(O,St){let et=m,_t=!1;if(O){et=f.get(St),et===void 0&&(et=[],f.set(St,et));let Pt=O.textures;if(et.length!==Pt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,Zt=Pt.length;Et<Zt;Et++)et[Et]=i.COLOR_ATTACHMENT0+Et;et.length=Pt.length,_t=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,_t=!0);_t&&i.drawBuffers(et)}function lt(O){return y!==O?(i.useProgram(O),y=O,!0):!1}let Ft={[xr]:i.FUNC_ADD,[dd]:i.FUNC_SUBTRACT,[pd]:i.FUNC_REVERSE_SUBTRACT};Ft[md]=i.MIN,Ft[gd]=i.MAX;let Vt={[xd]:i.ZERO,[vd]:i.ONE,[_d]:i.SRC_COLOR,[_u]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[Md]:i.DST_ALPHA,[yd]:i.ONE_MINUS_SRC_COLOR,[yu]:i.ONE_MINUS_SRC_ALPHA,[wd]:i.ONE_MINUS_DST_COLOR,[bd]:i.ONE_MINUS_DST_ALPHA,[Td]:i.CONSTANT_COLOR,[Ad]:i.ONE_MINUS_CONSTANT_COLOR,[Cd]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function Ot(O,St,et,_t,Pt,Et,Zt,Jt,ke,De){if(O===xi){g===!0&&(Dt(i.BLEND),g=!1);return}if(g===!1&&(bt(i.BLEND),g=!0),O!==fd){if(O!==p||De!==B){if((M!==xr||b!==xr)&&(i.blendEquation(i.FUNC_ADD),M=xr,b=xr),De)switch(O){case sa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ra:i.blendFunc(i.ONE,i.ONE);break;case xu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ye("WebGLState: Invalid blending: ",O);break}else switch(O){case sa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ra:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xu:ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vu:ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ye("WebGLState: Invalid blending: ",O);break}A=null,_=null,w=null,I=null,x.set(0,0,0),C=0,p=O,B=De}return}Pt=Pt||St,Et=Et||et,Zt=Zt||_t,(St!==M||Pt!==b)&&(i.blendEquationSeparate(Ft[St],Ft[Pt]),M=St,b=Pt),(et!==A||_t!==_||Et!==w||Zt!==I)&&(i.blendFuncSeparate(Vt[et],Vt[_t],Vt[Et],Vt[Zt]),A=et,_=_t,w=Et,I=Zt),(Jt.equals(x)===!1||ke!==C)&&(i.blendColor(Jt.r,Jt.g,Jt.b,ke),x.copy(Jt),C=ke),p=O,B=!1}function Bt(O,St){O.side===gi?Dt(i.CULL_FACE):bt(i.CULL_FACE);let et=O.side===zn;St&&(et=!et),Nt(et),O.blending===sa&&O.transparent===!1?Ot(xi):Ot(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let _t=O.stencilWrite;o.setTest(_t),_t&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Se(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(O){$!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),$=O)}function Ht(O){O!==cd?(bt(i.CULL_FACE),O!==z&&(O===gu?i.cullFace(i.BACK):O===hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),z=O}function he(O){O!==K&&(j&&i.lineWidth(O),K=O)}function Se(O,St,et){O?(bt(i.POLYGON_OFFSET_FILL),(F!==St||q!==et)&&(F=St,q=et,a.getReversed()&&(St=-St),i.polygonOffset(St,et))):Dt(i.POLYGON_OFFSET_FILL)}function oe(O){O?bt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function me(O){O===void 0&&(O=i.TEXTURE0+ht-1),gt!==O&&(i.activeTexture(O),gt=O)}function W(O,St,et){et===void 0&&(gt===null?et=i.TEXTURE0+ht-1:et=gt);let _t=Mt[et];_t===void 0&&(_t={type:void 0,texture:void 0},Mt[et]=_t),(_t.type!==O||_t.texture!==St)&&(gt!==et&&(i.activeTexture(et),gt=et),i.bindTexture(O,St||dt[O]),_t.type=O,_t.texture=St)}function ve(){let O=Mt[gt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function be(){try{i.compressedTexImage2D(...arguments)}catch(O){ye("WebGLState:",O)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(O){ye("WebGLState:",O)}}function v(){try{i.texSubImage2D(...arguments)}catch(O){ye("WebGLState:",O)}}function J(){try{i.texSubImage3D(...arguments)}catch(O){ye("WebGLState:",O)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(O){ye("WebGLState:",O)}}function T(){try{i.compressedTexSubImage3D(...arguments)}catch(O){ye("WebGLState:",O)}}function N(){try{i.texStorage2D(...arguments)}catch(O){ye("WebGLState:",O)}}function Z(){try{i.texStorage3D(...arguments)}catch(O){ye("WebGLState:",O)}}function L(){try{i.texImage2D(...arguments)}catch(O){ye("WebGLState:",O)}}function G(){try{i.texImage3D(...arguments)}catch(O){ye("WebGLState:",O)}}function at(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function Q(O,St){d[O]!==St&&(i.pixelStorei(O,St),d[O]=St)}function wt(O){fe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),fe.copy(O))}function Tt(O){Re.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Re.copy(O))}function It(O,St){let et=c.get(St);et===void 0&&(et=new WeakMap,c.set(St,et));let _t=et.get(O);_t===void 0&&(_t=i.getUniformBlockIndex(St,O.name),et.set(O,_t))}function qt(O,St){let _t=c.get(St).get(O);l.get(St)!==_t&&(i.uniformBlockBinding(St,_t,O.__bindingPointIndex),l.set(St,_t))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},gt=null,Mt={},u={},f=new WeakMap,m=[],y=null,g=!1,p=null,M=null,A=null,_=null,b=null,w=null,I=null,x=new ue(0,0,0),C=0,B=!1,$=null,z=null,K=null,F=null,q=null,fe.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:bt,disable:Dt,bindFramebuffer:H,drawBuffers:ut,useProgram:lt,setBlending:Ot,setMaterial:Bt,setFlipSided:Nt,setCullFace:Ht,setLineWidth:he,setPolygonOffset:Se,setScissorTest:oe,activeTexture:me,bindTexture:W,unbindTexture:ve,compressedTexImage2D:be,compressedTexImage3D:P,texImage2D:L,texImage3D:G,pixelStorei:Q,getParameter:at,updateUBOMapping:It,uniformBlockBinding:qt,texStorage2D:N,texStorage3D:Z,texSubImage2D:v,texSubImage3D:J,compressedTexSubImage2D:it,compressedTexSubImage3D:T,scissor:wt,viewport:Tt,reset:Qt}}function Ey(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,v){return m?new OffscreenCanvas(P,v):Ha("canvas")}function g(P,v,J){let it=1,T=be(P);if((T.width>J||T.height>J)&&(it=J/Math.max(T.width,T.height)),it<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let N=Math.floor(it*T.width),Z=Math.floor(it*T.height);u===void 0&&(u=y(N,Z));let L=v?y(N,Z):u;return L.width=N,L.height=Z,L.getContext("2d").drawImage(P,0,0,N,Z),de("WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+N+"x"+Z+")."),L}else return"data"in P&&de("WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),P;return P}function p(P){return P.generateMipmaps}function M(P){i.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,v,J,it,T,N=!1){if(P!==null){if(i[P]!==void 0)return i[P];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z;it&&(Z=t.get("EXT_texture_norm16"),Z||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let L=v;if(v===i.RED&&(J===i.FLOAT&&(L=i.R32F),J===i.HALF_FLOAT&&(L=i.R16F),J===i.UNSIGNED_BYTE&&(L=i.R8),J===i.UNSIGNED_SHORT&&Z&&(L=Z.R16_EXT),J===i.SHORT&&Z&&(L=Z.R16_SNORM_EXT)),v===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(L=i.R8UI),J===i.UNSIGNED_SHORT&&(L=i.R16UI),J===i.UNSIGNED_INT&&(L=i.R32UI),J===i.BYTE&&(L=i.R8I),J===i.SHORT&&(L=i.R16I),J===i.INT&&(L=i.R32I)),v===i.RG&&(J===i.FLOAT&&(L=i.RG32F),J===i.HALF_FLOAT&&(L=i.RG16F),J===i.UNSIGNED_BYTE&&(L=i.RG8),J===i.UNSIGNED_SHORT&&Z&&(L=Z.RG16_EXT),J===i.SHORT&&Z&&(L=Z.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(L=i.RG8UI),J===i.UNSIGNED_SHORT&&(L=i.RG16UI),J===i.UNSIGNED_INT&&(L=i.RG32UI),J===i.BYTE&&(L=i.RG8I),J===i.SHORT&&(L=i.RG16I),J===i.INT&&(L=i.RG32I)),v===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(L=i.RGB8UI),J===i.UNSIGNED_SHORT&&(L=i.RGB16UI),J===i.UNSIGNED_INT&&(L=i.RGB32UI),J===i.BYTE&&(L=i.RGB8I),J===i.SHORT&&(L=i.RGB16I),J===i.INT&&(L=i.RGB32I)),v===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(L=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(L=i.RGBA16UI),J===i.UNSIGNED_INT&&(L=i.RGBA32UI),J===i.BYTE&&(L=i.RGBA8I),J===i.SHORT&&(L=i.RGBA16I),J===i.INT&&(L=i.RGBA32I)),v===i.RGB&&(J===i.UNSIGNED_SHORT&&Z&&(L=Z.RGB16_EXT),J===i.SHORT&&Z&&(L=Z.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(L=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(L=i.R11F_G11F_B10F)),v===i.RGBA){let G=N?ka:Fe.getTransfer(T);J===i.FLOAT&&(L=i.RGBA32F),J===i.HALF_FLOAT&&(L=i.RGBA16F),J===i.UNSIGNED_BYTE&&(L=G===We?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&Z&&(L=Z.RGBA16_EXT),J===i.SHORT&&Z&&(L=Z.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(L=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(L=i.RGB5_A1)}return(L===i.R16F||L===i.R32F||L===i.RG16F||L===i.RG32F||L===i.RGBA16F||L===i.RGBA32F)&&t.get("EXT_color_buffer_float"),L}function b(P,v){let J;return P?v===null||v===Gi||v===oa?J=i.DEPTH24_STENCIL8:v===_i?J=i.DEPTH32F_STENCIL8:v===aa&&(J=i.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gi||v===oa?J=i.DEPTH_COMPONENT24:v===_i?J=i.DEPTH_COMPONENT32F:v===aa&&(J=i.DEPTH_COMPONENT16),J}function w(P,v){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Dn&&P.minFilter!==Bn?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function I(P){let v=P.target;v.removeEventListener("dispose",I),C(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(P){let v=P.target;v.removeEventListener("dispose",x),$(v)}function C(P){let v=n.get(P);if(v.__webglInit===void 0)return;let J=P.source,it=f.get(J);if(it){let T=it[v.__cacheKey];T.usedTimes--,T.usedTimes===0&&B(P),Object.keys(it).length===0&&f.delete(J)}n.remove(P)}function B(P){let v=n.get(P);i.deleteTexture(v.__webglTexture);let J=P.source,it=f.get(J);delete it[v.__cacheKey],a.memory.textures--}function $(P){let v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(v.__webglFramebuffer[it]))for(let T=0;T<v.__webglFramebuffer[it].length;T++)i.deleteFramebuffer(v.__webglFramebuffer[it][T]);else i.deleteFramebuffer(v.__webglFramebuffer[it]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[it])}else{if(Array.isArray(v.__webglFramebuffer))for(let it=0;it<v.__webglFramebuffer.length;it++)i.deleteFramebuffer(v.__webglFramebuffer[it]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let it=0;it<v.__webglColorRenderbuffer.length;it++)v.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[it]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let J=P.textures;for(let it=0,T=J.length;it<T;it++){let N=n.get(J[it]);N.__webglTexture&&(i.deleteTexture(N.__webglTexture),a.memory.textures--),n.remove(J[it])}n.remove(P)}let z=0;function K(){z=0}function F(){return z}function q(P){z=P}function ht(){let P=z;return P>=s.maxTextures&&de("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,P}function j(P){let v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function yt(P,v){let J=n.get(P);if(P.isVideoTexture&&W(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&J.__version!==P.version){let it=P.image;if(it===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(J,P,v);return}}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+v)}function rt(P,v){let J=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){Dt(J,P,v);return}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+v)}function gt(P,v){let J=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){Dt(J,P,v);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+v)}function Mt(P,v){let J=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&J.__version!==P.version){H(J,P,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+v)}let Ct={[Nl]:i.REPEAT,[ts]:i.CLAMP_TO_EDGE,[Ul]:i.MIRRORED_REPEAT},mt={[Dn]:i.NEAREST,[Ld]:i.NEAREST_MIPMAP_NEAREST,[Mo]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[mc]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},fe={[Fd]:i.NEVER,[Hd]:i.ALWAYS,[Od]:i.LESS,[th]:i.LEQUAL,[Bd]:i.EQUAL,[eh]:i.GEQUAL,[zd]:i.GREATER,[kd]:i.NOTEQUAL};function Re(P,v){if(v.type===_i&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Bn||v.magFilter===mc||v.magFilter===Mo||v.magFilter===vi||v.minFilter===Bn||v.minFilter===mc||v.minFilter===Mo||v.minFilter===vi)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Ct[v.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Ct[v.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Ct[v.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,mt[v.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,fe[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Dn||v.minFilter!==Mo&&v.minFilter!==vi||v.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ue(P,v){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",I));let it=v.source,T=f.get(it);T===void 0&&(T={},f.set(it,T));let N=j(v);if(N!==P.__cacheKey){T[N]===void 0&&(T[N]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),T[N].usedTimes++;let Z=T[P.__cacheKey];Z!==void 0&&(T[P.__cacheKey].usedTimes--,Z.usedTimes===0&&B(v)),P.__cacheKey=N,P.__webglTexture=T[N].texture}return J}function dt(P,v,J){return Math.floor(Math.floor(P/J)/v)}function bt(P,v,J,it){let N=P.updateRanges;if(N.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,J,it,v.data);else{N.sort((Q,wt)=>Q.start-wt.start);let Z=0;for(let Q=1;Q<N.length;Q++){let wt=N[Z],Tt=N[Q],It=wt.start+wt.count,qt=dt(Tt.start,v.width,4),Qt=dt(wt.start,v.width,4);Tt.start<=It+1&&qt===Qt&&dt(Tt.start+Tt.count-1,v.width,4)===qt?wt.count=Math.max(wt.count,Tt.start+Tt.count-wt.start):(++Z,N[Z]=Tt)}N.length=Z+1;let L=e.getParameter(i.UNPACK_ROW_LENGTH),G=e.getParameter(i.UNPACK_SKIP_PIXELS),at=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Q=0,wt=N.length;Q<wt;Q++){let Tt=N[Q],It=Math.floor(Tt.start/4),qt=Math.ceil(Tt.count/4),Qt=It%v.width,O=Math.floor(It/v.width),St=qt,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Qt,O,St,et,J,it,v.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,L),e.pixelStorei(i.UNPACK_SKIP_PIXELS,G),e.pixelStorei(i.UNPACK_SKIP_ROWS,at)}}function Dt(P,v,J){let it=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(it=i.TEXTURE_3D);let T=Ue(P,v),N=v.source;e.bindTexture(it,P.__webglTexture,i.TEXTURE0+J);let Z=n.get(N);if(N.version!==Z.__version||T===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let et=Fe.getPrimaries(Fe.workingColorSpace),_t=v.colorSpace===Es?null:Fe.getPrimaries(v.colorSpace),Pt=v.colorSpace===Es||et===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let G=g(v.image,!1,s.maxTextureSize);G=ve(v,G);let at=r.convert(v.format,v.colorSpace),Q=r.convert(v.type),wt=_(v.internalFormat,at,Q,v.normalized,v.colorSpace,v.isVideoTexture);Re(it,v);let Tt,It=v.mipmaps,qt=v.isVideoTexture!==!0,Qt=Z.__version===void 0||T===!0,O=N.dataReady,St=w(v,G);if(v.isDepthTexture)wt=b(v.format===Ys,v.type),Qt&&(qt?e.texStorage2D(i.TEXTURE_2D,1,wt,G.width,G.height):e.texImage2D(i.TEXTURE_2D,0,wt,G.width,G.height,0,at,Q,null));else if(v.isDataTexture)if(It.length>0){qt&&Qt&&e.texStorage2D(i.TEXTURE_2D,St,wt,It[0].width,It[0].height);for(let et=0,_t=It.length;et<_t;et++)Tt=It[et],qt?O&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Tt.width,Tt.height,at,Q,Tt.data):e.texImage2D(i.TEXTURE_2D,et,wt,Tt.width,Tt.height,0,at,Q,Tt.data);v.generateMipmaps=!1}else qt?(Qt&&e.texStorage2D(i.TEXTURE_2D,St,wt,G.width,G.height),O&&bt(v,G,at,Q)):e.texImage2D(i.TEXTURE_2D,0,wt,G.width,G.height,0,at,Q,G.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,wt,It[0].width,It[0].height,G.depth);for(let et=0,_t=It.length;et<_t;et++)if(Tt=It[et],v.format!==yi)if(at!==null)if(qt){if(O)if(v.layerUpdates.size>0){let Pt=Nu(Tt.width,Tt.height,v.format,v.type);for(let Et of v.layerUpdates){let Zt=Tt.data.subarray(Et*Pt/Tt.data.BYTES_PER_ELEMENT,(Et+1)*Pt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,Et,Tt.width,Tt.height,1,at,Zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Tt.width,Tt.height,G.depth,at,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,wt,Tt.width,Tt.height,G.depth,0,Tt.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Tt.width,Tt.height,G.depth,at,Q,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,wt,Tt.width,Tt.height,G.depth,0,at,Q,Tt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{qt&&Qt&&e.texStorage2D(i.TEXTURE_2D,St,wt,It[0].width,It[0].height);for(let et=0,_t=It.length;et<_t;et++)Tt=It[et],v.format!==yi?at!==null?qt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,Tt.width,Tt.height,at,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,wt,Tt.width,Tt.height,0,Tt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?O&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Tt.width,Tt.height,at,Q,Tt.data):e.texImage2D(i.TEXTURE_2D,et,wt,Tt.width,Tt.height,0,at,Q,Tt.data)}else if(v.isDataArrayTexture)if(qt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,wt,G.width,G.height,G.depth),O)if(v.layerUpdates.size>0){let et=Nu(G.width,G.height,v.format,v.type);for(let _t of v.layerUpdates){let Pt=G.data.subarray(_t*et/G.data.BYTES_PER_ELEMENT,(_t+1)*et/G.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,G.width,G.height,1,at,Q,Pt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,at,Q,G.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,G.width,G.height,G.depth,0,at,Q,G.data);else if(v.isData3DTexture)qt?(Qt&&e.texStorage3D(i.TEXTURE_3D,St,wt,G.width,G.height,G.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,at,Q,G.data)):e.texImage3D(i.TEXTURE_3D,0,wt,G.width,G.height,G.depth,0,at,Q,G.data);else if(v.isFramebufferTexture){if(Qt)if(qt)e.texStorage2D(i.TEXTURE_2D,St,wt,G.width,G.height);else{let et=G.width,_t=G.height;for(let Pt=0;Pt<St;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,wt,et,_t,0,at,Q,null),et>>=1,_t>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),G.parentNode!==et){et.appendChild(G),d.add(v),et.onpaint=_t=>{let Pt=_t.changedElements;for(let Et of d)Pt.includes(Et.image)&&(Et.needsUpdate=!0)},et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,G);else{let Pt=i.RGBA,Et=i.RGBA,Zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pt,Et,Zt,G)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(It.length>0){if(qt&&Qt){let et=be(It[0]);e.texStorage2D(i.TEXTURE_2D,St,wt,et.width,et.height)}for(let et=0,_t=It.length;et<_t;et++)Tt=It[et],qt?O&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,at,Q,Tt):e.texImage2D(i.TEXTURE_2D,et,wt,at,Q,Tt);v.generateMipmaps=!1}else if(qt){if(Qt){let et=be(G);e.texStorage2D(i.TEXTURE_2D,St,wt,et.width,et.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,Q,G)}else e.texImage2D(i.TEXTURE_2D,0,wt,at,Q,G);p(v)&&M(it),Z.__version=N.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function H(P,v,J){if(v.image.length!==6)return;let it=Ue(P,v),T=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+J);let N=n.get(T);if(T.version!==N.__version||it===!0){e.activeTexture(i.TEXTURE0+J);let Z=Fe.getPrimaries(Fe.workingColorSpace),L=v.colorSpace===Es?null:Fe.getPrimaries(v.colorSpace),G=v.colorSpace===Es||Z===L?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);let at=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,wt=[];for(let Et=0;Et<6;Et++)!at&&!Q?wt[Et]=g(v.image[Et],!0,s.maxCubemapSize):wt[Et]=Q?v.image[Et].image:v.image[Et],wt[Et]=ve(v,wt[Et]);let Tt=wt[0],It=r.convert(v.format,v.colorSpace),qt=r.convert(v.type),Qt=_(v.internalFormat,It,qt,v.normalized,v.colorSpace),O=v.isVideoTexture!==!0,St=N.__version===void 0||it===!0,et=T.dataReady,_t=w(v,Tt);Re(i.TEXTURE_CUBE_MAP,v);let Pt;if(at){O&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Qt,Tt.width,Tt.height);for(let Et=0;Et<6;Et++){Pt=wt[Et].mipmaps;for(let Zt=0;Zt<Pt.length;Zt++){let Jt=Pt[Zt];v.format!==yi?It!==null?O?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt,0,0,Jt.width,Jt.height,It,Jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt,Qt,Jt.width,Jt.height,0,Jt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt,0,0,Jt.width,Jt.height,It,qt,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt,Qt,Jt.width,Jt.height,0,It,qt,Jt.data)}}}else{if(Pt=v.mipmaps,O&&St){Pt.length>0&&_t++;let Et=be(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Qt,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Q){O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,wt[Et].width,wt[Et].height,It,qt,wt[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Qt,wt[Et].width,wt[Et].height,0,It,qt,wt[Et].data);for(let Zt=0;Zt<Pt.length;Zt++){let ke=Pt[Zt].image[Et].image;O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt+1,0,0,ke.width,ke.height,It,qt,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt+1,Qt,ke.width,ke.height,0,It,qt,ke.data)}}else{O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,It,qt,wt[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Qt,It,qt,wt[Et]);for(let Zt=0;Zt<Pt.length;Zt++){let Jt=Pt[Zt];O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt+1,0,0,It,qt,Jt.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt+1,Qt,It,qt,Jt.image[Et])}}}p(v)&&M(i.TEXTURE_CUBE_MAP),N.__version=T.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function ut(P,v,J,it,T,N){let Z=r.convert(J.format,J.colorSpace),L=r.convert(J.type),G=_(J.internalFormat,Z,L,J.normalized,J.colorSpace),at=n.get(v),Q=n.get(J);if(Q.__renderTarget=v,!at.__hasExternalTextures){let wt=Math.max(1,v.width>>N),Tt=Math.max(1,v.height>>N);T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?e.texImage3D(T,N,G,wt,Tt,v.depth,0,Z,L,null):e.texImage2D(T,N,G,wt,Tt,0,Z,L,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),me(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,T,Q.__webglTexture,0,oe(v)):(T===i.TEXTURE_2D||T>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&T<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,T,Q.__webglTexture,N),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(P,v,J){if(i.bindRenderbuffer(i.RENDERBUFFER,P),v.depthBuffer){let it=v.depthTexture,T=it&&it.isDepthTexture?it.type:null,N=b(v.stencilBuffer,T),Z=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe(v),N,v.width,v.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe(v),N,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,N,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,P)}else{let it=v.textures;for(let T=0;T<it.length;T++){let N=it[T],Z=r.convert(N.format,N.colorSpace),L=r.convert(N.type),G=_(N.internalFormat,Z,L,N.normalized,N.colorSpace);me(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe(v),G,v.width,v.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe(v),G,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,G,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(P,v,J){let it=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let T=n.get(v.depthTexture);if(T.__renderTarget=v,(!T.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),it){if(T.__webglInit===void 0&&(T.__webglInit=!0,v.depthTexture.addEventListener("dispose",I)),T.__webglTexture===void 0){T.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture),Re(i.TEXTURE_CUBE_MAP,v.depthTexture);let at=r.convert(v.depthTexture.format),Q=r.convert(v.depthTexture.type),wt;v.depthTexture.format===es?wt=i.DEPTH_COMPONENT24:v.depthTexture.format===Ys&&(wt=i.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,wt,v.width,v.height,0,at,Q,null)}}else yt(v.depthTexture,0);let N=T.__webglTexture,Z=oe(v),L=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,G=v.depthTexture.format===Ys?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===es)me(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,L,N,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,G,L,N,0);else if(v.depthTexture.format===Ys)me(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,L,N,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,G,L,N,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(P){let v=n.get(P),J=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){let it=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),it){let T=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,it.removeEventListener("dispose",T)};it.addEventListener("dispose",T),v.__depthDisposeCallback=T}v.__boundDepthTexture=it}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(J)for(let it=0;it<6;it++)Ft(v.__webglFramebuffer[it],P,it);else{let it=P.texture.mipmaps;it&&it.length>0?Ft(v.__webglFramebuffer[0],P,0):Ft(v.__webglFramebuffer,P,0)}else if(J){v.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[it]),v.__webglDepthbuffer[it]===void 0)v.__webglDepthbuffer[it]=i.createRenderbuffer(),lt(v.__webglDepthbuffer[it],P,!1);else{let T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=v.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,T,i.RENDERBUFFER,N)}}else{let it=P.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),lt(v.__webglDepthbuffer,P,!1);else{let T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,T,i.RENDERBUFFER,N)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(P,v,J){let it=n.get(P);v!==void 0&&ut(it.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Vt(P)}function Bt(P){let v=P.texture,J=n.get(P),it=n.get(v);P.addEventListener("dispose",x);let T=P.textures,N=P.isWebGLCubeRenderTarget===!0,Z=T.length>1;if(Z||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=v.version,a.memory.textures++),N){J.__webglFramebuffer=[];for(let L=0;L<6;L++)if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer[L]=[];for(let G=0;G<v.mipmaps.length;G++)J.__webglFramebuffer[L][G]=i.createFramebuffer()}else J.__webglFramebuffer[L]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer=[];for(let L=0;L<v.mipmaps.length;L++)J.__webglFramebuffer[L]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Z)for(let L=0,G=T.length;L<G;L++){let at=n.get(T[L]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&me(P)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let L=0;L<T.length;L++){let G=T[L];J.__webglColorRenderbuffer[L]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[L]);let at=r.convert(G.format,G.colorSpace),Q=r.convert(G.type),wt=_(G.internalFormat,at,Q,G.normalized,G.colorSpace,P.isXRRenderTarget===!0),Tt=oe(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,wt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,J.__webglColorRenderbuffer[L])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(J.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(N){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Re(i.TEXTURE_CUBE_MAP,v);for(let L=0;L<6;L++)if(v.mipmaps&&v.mipmaps.length>0)for(let G=0;G<v.mipmaps.length;G++)ut(J.__webglFramebuffer[L][G],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,G);else ut(J.__webglFramebuffer[L],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);p(v)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Z){for(let L=0,G=T.length;L<G;L++){let at=T[L],Q=n.get(at),wt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(wt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,Q.__webglTexture),Re(wt,at),ut(J.__webglFramebuffer,P,at,i.COLOR_ATTACHMENT0+L,wt,0),p(at)&&M(wt)}e.unbindTexture()}else{let L=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(L=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(L,it.__webglTexture),Re(L,v),v.mipmaps&&v.mipmaps.length>0)for(let G=0;G<v.mipmaps.length;G++)ut(J.__webglFramebuffer[G],P,v,i.COLOR_ATTACHMENT0,L,G);else ut(J.__webglFramebuffer,P,v,i.COLOR_ATTACHMENT0,L,0);p(v)&&M(L),e.unbindTexture()}P.depthBuffer&&Vt(P)}function Nt(P){let v=P.textures;for(let J=0,it=v.length;J<it;J++){let T=v[J];if(p(T)){let N=A(P),Z=n.get(T).__webglTexture;e.bindTexture(N,Z),M(N),e.unbindTexture()}}}let Ht=[],he=[];function Se(P){if(P.samples>0){if(me(P)===!1){let v=P.textures,J=P.width,it=P.height,T=i.COLOR_BUFFER_BIT,N=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=n.get(P),L=v.length>1;if(L)for(let at=0;at<v.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer);let G=P.texture.mipmaps;G&&G.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let at=0;at<v.length;at++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(T|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(T|=i.STENCIL_BUFFER_BIT)),L){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Z.__webglColorRenderbuffer[at]);let Q=n.get(v[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,J,it,0,0,J,it,T,i.NEAREST),l===!0&&(Ht.length=0,he.length=0,Ht.push(i.COLOR_ATTACHMENT0+at),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Ht.push(N),he.push(N),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,he)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),L)for(let at=0;at<v.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,Z.__webglColorRenderbuffer[at]);let Q=n.get(v[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,Q,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let v=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function oe(P){return Math.min(s.maxSamples,P.samples)}function me(P){let v=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function W(P){let v=a.render.frame;h.get(P)!==v&&(h.set(P,v),P.update())}function ve(P,v){let J=P.colorSpace,it=P.format,T=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==za&&J!==Es&&(Fe.getTransfer(J)===We?(it!==yi||T!==ei)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ye("WebGLTextures: Unsupported texture color space:",J)),v}function be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=ht,this.resetTextureUnits=K,this.getTextureUnits=F,this.setTextureUnits=q,this.setTexture2D=yt,this.setTexture2DArray=rt,this.setTexture3D=gt,this.setTextureCube=Mt,this.rebindTextures=Ot,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ty(i,t){function e(n,s=Es){let r,a=Fe.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Eu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bu)return i.BYTE;if(n===Su)return i.SHORT;if(n===aa)return i.UNSIGNED_SHORT;if(n===gc)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===_i)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===Tu)return i.ALPHA;if(n===Au)return i.RGB;if(n===yi)return i.RGBA;if(n===es)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===_c)return i.RED;if(n===yc)return i.RED_INTEGER;if(n===Zs)return i.RG;if(n===Mc)return i.RG_INTEGER;if(n===bc)return i.RGBA_INTEGER;if(n===bo||n===So||n===wo||n===Eo)if(a===We)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sc||n===wc||n===Ec||n===Tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Cc||n===Rc||n===Pc||n===Ic||n===To||n===Lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ac||n===Cc)return a===We?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pc)return r.COMPRESSED_R11_EAC;if(n===Ic)return r.COMPRESSED_SIGNED_R11_EAC;if(n===To)return r.COMPRESSED_RG11_EAC;if(n===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Hc||n===Gc||n===Vc||n===Wc||n===Xc||n===$c)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qc||n===Yc||n===Zc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qc)return a===We?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jc||n===Kc||n===Ao||n===jc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cy=`
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

}`,Qu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ya(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new on({vertexShader:Ay,fragmentShader:Cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tf=class extends ns{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,y=typeof XRWebGLBinding<"u",g=new Qu,p={},M=e.getContextAttributes(),A=null,_=null,b=[],w=[],I=new Ut,x=null,C=null,B=new Tn;B.viewport=new Ke;let $=new Tn;$.viewport=new Ke;let z=[B,$],K=new hc,F=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(dt){let bt=b[dt];return bt===void 0&&(bt=new Yr,b[dt]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(dt){let bt=b[dt];return bt===void 0&&(bt=new Yr,b[dt]=bt),bt.getGripSpace()},this.getHand=function(dt){let bt=b[dt];return bt===void 0&&(bt=new Yr,b[dt]=bt),bt.getHandSpace()};function ht(dt){let bt=w.indexOf(dt.inputSource);if(bt===-1)return;let Dt=b[bt];Dt!==void 0&&(Dt.update(dt.inputSource,dt.frame,c||a),Dt.dispatchEvent({type:dt.type,data:dt.inputSource}))}function j(){s.removeEventListener("select",ht),s.removeEventListener("selectstart",ht),s.removeEventListener("selectend",ht),s.removeEventListener("squeeze",ht),s.removeEventListener("squeezestart",ht),s.removeEventListener("squeezeend",ht),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",yt);for(let dt=0;dt<b.length;dt++){let bt=w[dt];bt!==null&&(w[dt]=null,b[dt].disconnect(bt))}F=null,q=null,g.reset();for(let dt in p)delete p[dt];if(t.setRenderTarget(A),f=null,u=null,d=null,s=null,_=null,Ue.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(I.width,I.height,!1),C!==null){let dt=C.camera;dt.fov=C.fov,dt.zoom=C.zoom,dt.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(dt){r=dt,n.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(dt){o=dt,n.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(dt){c=dt},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(dt){if(s=dt,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",ht),s.addEventListener("selectstart",ht),s.addEventListener("selectend",ht),s.addEventListener("squeeze",ht),s.addEventListener("squeezestart",ht),s.addEventListener("squeezeend",ht),s.addEventListener("end",j),s.addEventListener("inputsourceschange",yt),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,H=null,ut=null;M.depth&&(ut=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Dt=M.stencil?Ys:es,H=M.stencil?oa:Gi);let lt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Nn(u.textureWidth,u.textureHeight,{format:yi,type:ei,depthTexture:new ks(u.textureWidth,u.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Dt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Dt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Nn(f.framebufferWidth,f.framebufferHeight,{format:yi,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function yt(dt){for(let bt=0;bt<dt.removed.length;bt++){let Dt=dt.removed[bt],H=w.indexOf(Dt);H>=0&&(w[H]=null,b[H].disconnect(Dt))}for(let bt=0;bt<dt.added.length;bt++){let Dt=dt.added[bt],H=w.indexOf(Dt);if(H===-1){for(let lt=0;lt<b.length;lt++)if(lt>=w.length){w.push(Dt),H=lt;break}else if(w[lt]===null){w[lt]=Dt,H=lt;break}if(H===-1)break}let ut=b[H];ut&&ut.connect(Dt)}}let rt=new U,gt=new U;function Mt(dt,bt,Dt){rt.setFromMatrixPosition(bt.matrixWorld),gt.setFromMatrixPosition(Dt.matrixWorld);let H=rt.distanceTo(gt),ut=bt.projectionMatrix.elements,lt=Dt.projectionMatrix.elements,Ft=ut[14]/(ut[10]-1),Vt=ut[14]/(ut[10]+1),Ot=(ut[9]+1)/ut[5],Bt=(ut[9]-1)/ut[5],Nt=(ut[8]-1)/ut[0],Ht=(lt[8]+1)/lt[0],he=Ft*Nt,Se=Ft*Ht,oe=H/(-Nt+Ht),me=oe*-Nt;if(bt.matrixWorld.decompose(dt.position,dt.quaternion,dt.scale),dt.translateX(me),dt.translateZ(oe),dt.matrixWorld.compose(dt.position,dt.quaternion,dt.scale),dt.matrixWorldInverse.copy(dt.matrixWorld).invert(),ut[10]===-1)dt.projectionMatrix.copy(bt.projectionMatrix),dt.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{let W=Ft+oe,ve=Vt+oe,be=he-me,P=Se+(H-me),v=Ot*Vt/ve*W,J=Bt*Vt/ve*W;dt.projectionMatrix.makePerspective(be,P,v,J,W,ve),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert()}}function Ct(dt,bt){bt===null?dt.matrixWorld.copy(dt.matrix):dt.matrixWorld.multiplyMatrices(bt.matrixWorld,dt.matrix),dt.matrixWorldInverse.copy(dt.matrixWorld).invert()}this.updateCamera=function(dt){if(s===null)return;let bt=dt.near,Dt=dt.far;g.texture!==null&&(g.depthNear>0&&(bt=g.depthNear),g.depthFar>0&&(Dt=g.depthFar)),K.near=$.near=B.near=bt,K.far=$.far=B.far=Dt,(F!==K.near||q!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),F=K.near,q=K.far),K.layers.mask=dt.layers.mask|6,B.layers.mask=K.layers.mask&-5,$.layers.mask=K.layers.mask&-3;let H=dt.parent,ut=K.cameras;Ct(K,H);for(let lt=0;lt<ut.length;lt++)Ct(ut[lt],H);ut.length===2?Mt(K,B,$):K.projectionMatrix.copy(B.projectionMatrix),C===null&&dt.isPerspectiveCamera&&(C={camera:dt,fov:dt.fov,zoom:dt.zoom}),mt(dt,K,H)};function mt(dt,bt,Dt){Dt===null?dt.matrix.copy(bt.matrixWorld):(dt.matrix.copy(Dt.matrixWorld),dt.matrix.invert(),dt.matrix.multiply(bt.matrixWorld)),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.updateMatrixWorld(!0),dt.projectionMatrix.copy(bt.projectionMatrix),dt.projectionMatrixInverse.copy(bt.projectionMatrixInverse),dt.isPerspectiveCamera&&(dt.fov=Ol*2*Math.atan(1/dt.projectionMatrix.elements[5]),dt.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(dt){l=dt,u!==null&&(u.fixedFoveation=dt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=dt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(K)},this.getCameraTexture=function(dt){return p[dt]};let fe=null;function Re(dt,bt){if(h=bt.getViewerPose(c||a),m=bt,h!==null){let Dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let H=!1;Dt.length!==K.cameras.length&&(K.cameras.length=0,H=!0);for(let Vt=0;Vt<Dt.length;Vt++){let Ot=Dt[Vt],Bt=null;if(f!==null)Bt=f.getViewport(Ot);else{let Ht=d.getViewSubImage(u,Ot);Bt=Ht.viewport,Vt===0&&(t.setRenderTargetTextures(_,Ht.colorTexture,Ht.depthStencilTexture),t.setRenderTarget(_))}let Nt=z[Vt];Nt===void 0&&(Nt=new Tn,Nt.layers.enable(Vt),Nt.viewport=new Ke,z[Vt]=Nt),Nt.matrix.fromArray(Ot.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Ot.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),Vt===0&&(K.matrix.copy(Nt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),H===!0&&K.cameras.push(Nt)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let Vt=d.getDepthInformation(Dt[0]);Vt&&Vt.isValid&&Vt.texture&&g.init(Vt,s.renderState)}if(ut&&ut.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let Vt=0;Vt<Dt.length;Vt++){let Ot=Dt[Vt].camera;if(Ot){let Bt=p[Ot];Bt||(Bt=new Ya,p[Ot]=Bt);let Nt=d.getCameraImage(Ot);Bt.sourceTexture=Nt}}}}for(let Dt=0;Dt<b.length;Dt++){let H=w[Dt],ut=b[Dt];H!==null&&ut!==void 0&&ut.update(H,bt,c||a)}fe&&fe(dt,bt),bt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:bt}),m=null}let Ue=new Mp;Ue.setAnimationLoop(Re),this.setAnimationLoop=function(dt){fe=dt},this.dispose=function(){}}},Ry=new He,Ap=new Te;Ap.set(-1,0,0,0,1,0,0,0,1);function Py(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Iu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,A,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,A):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===zn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===zn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),A=M.envMap,_=M.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(Ry.makeRotationFromEuler(_)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ap),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=A*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Iy(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let w=b.program;n.uniformBlockBinding(_,w)}function c(_,b){let w=s[_.id];w===void 0&&(g(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",M));let I=b.program;n.updateUBOMapping(_,I);let x=t.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){let b=d();_.__bindingPointIndex=b;let w=i.createBuffer(),I=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=s[_.id],w=_.uniforms,I=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,C=w.length;x<C;x++){let B=w[x];if(Array.isArray(B))for(let $=0,z=B.length;$<z;$++)f(B[$],x,$,I);else f(B,x,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,b,w,I){if(y(_,b,w,I)===!0){let x=_.__offset,C=_.value;if(Array.isArray(C)){let B=0;for(let $=0;$<C.length;$++){let z=C[$],K=p(z);m(z,_.__data,B),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(C,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function m(_,b,w){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,w)}function y(_,b,w,I){let x=_.value,C=b+"_"+w;if(I[C]===void 0)return typeof x=="number"||typeof x=="boolean"?I[C]=x:ArrayBuffer.isView(x)?I[C]=x.slice():I[C]=x.clone(),!0;{let B=I[C];if(typeof x=="number"||typeof x=="boolean"){if(B!==x)return I[C]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(B.equals(x)===!1)return B.copy(x),!0}}return!1}function g(_){let b=_.uniforms,w=0,I=16;for(let C=0,B=b.length;C<B;C++){let $=Array.isArray(b[C])?b[C]:[b[C]];for(let z=0,K=$.length;z<K;z++){let F=$[z],q=Array.isArray(F.value)?F.value:[F.value];for(let ht=0,j=q.length;ht<j;ht++){let yt=q[ht],rt=p(yt),gt=w%I,Mt=gt%rt.boundary,Ct=gt+Mt;w+=Mt,Ct!==0&&I-Ct<rt.storage&&(w+=I-Ct),F.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=rt.storage}}}let x=w%I;return x>0&&(w+=I-x),_.__size=w,_.__cache={},this}function p(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):de("WebGLRenderer: Unsupported uniform value type.",_),b}function M(_){let b=_.target;b.removeEventListener("dispose",M);let w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var Ly=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),as=null;function Dy(){return as===null&&(as=new Xa(Ly,16,16,Zs,qn),as.name="DFG_LUT",as.minFilter=Bn,as.magFilter=Bn,as.wrapS=ts,as.wrapT=ts,as.generateMipmaps=!1,as.needsUpdate=!0),as}var rh=class{constructor(t={}){let{canvas:e=Vd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ei}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let y=f,g=new Set([bc,Mc,yc]),p=new Set([ei,Gi,aa,oa,xc,vc]),M=new Uint32Array(4),A=new Int32Array(4),_=new U,b=null,w=null,I=[],x=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,$=!1,z=null,K=null,F=null,q=null;this._outputColorSpace=Ln;let ht=0,j=0,yt=null,rt=-1,gt=null,Mt=new Ke,Ct=new Ke,mt=null,fe=new ue(0),Re=0,Ue=e.width,dt=e.height,bt=1,Dt=null,H=null,ut=new Ke(0,0,Ue,dt),lt=new Ke(0,0,Ue,dt),Ft=!1,Vt=new Zr,Ot=!1,Bt=!1,Nt=new He,Ht=new U,he=new Ke,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function me(){return yt===null?bt:1}let W=n;function ve(S,X){return e.getContext(S,X)}let be,P,v,J,it,T,N,Z,L,G,at,Q,wt,Tt,It,qt,Qt,O,St,et,_t,Pt,Et;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",mn,!1),W===null){let X="webgl2";if(W=ve(X,S),W===null)throw ve(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(S){throw e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),ye("WebGLRenderer: "+S.message),S}function Zt(){be=new kv(W),be.init(),_t=new Ty(W,be),P=new Pv(W,be,t,_t),v=new wy(W,be),P.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),K=W.createFramebuffer(),F=W.createFramebuffer(),q=W.createFramebuffer(),J=new Vv(W),it=new hy,T=new Ey(W,be,v,it,P,_t,J),N=new zv(B),Z=new Xm(W),Pt=new Cv(W,Z),L=new Hv(W,Z,J,Pt),G=new Xv(W,L,Z,Pt,J),O=new Wv(W,P,T),It=new Iv(it),at=new cy(B,N,be,P,Pt,It),Q=new Py(B,it),wt=new fy,Tt=new vy(be),Qt=new Av(B,N,v,G,m,l),qt=new Sy(B,G,P),Et=new Iy(W,J,P,v),St=new Rv(W,be,J),et=new Gv(W,be,J),J.programs=at.programs,B.capabilities=P,B.extensions=be,B.properties=it,B.renderLists=wt,B.shadowMap=qt,B.state=v,B.info=J}y!==ei&&(C=new qv(y,e.width,e.height,o,s,r));let Jt=new tf(B,W);this.xr=Jt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let S=be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(S){S!==void 0&&(bt=S,this.setSize(Ue,dt,!1))},this.getSize=function(S){return S.set(Ue,dt)},this.setSize=function(S,X,ct=!0){if(Jt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=S,dt=X,e.width=Math.floor(S*bt),e.height=Math.floor(X*bt),ct===!0&&(e.style.width=S+"px",e.style.height=X+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,S,X)},this.getDrawingBufferSize=function(S){return S.set(Ue*bt,dt*bt).floor()},this.setDrawingBufferSize=function(S,X,ct){Ue=S,dt=X,bt=ct,e.width=Math.floor(S*ct),e.height=Math.floor(X*ct),this.setViewport(0,0,S,X)},this.setEffects=function(S){if(y===ei){ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let X=0;X<S.length;X++)if(S[X].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Mt)},this.getViewport=function(S){return S.copy(ut)},this.setViewport=function(S,X,ct,st){S.isVector4?ut.set(S.x,S.y,S.z,S.w):ut.set(S,X,ct,st),v.viewport(Mt.copy(ut).multiplyScalar(bt).round())},this.getScissor=function(S){return S.copy(lt)},this.setScissor=function(S,X,ct,st){S.isVector4?lt.set(S.x,S.y,S.z,S.w):lt.set(S,X,ct,st),v.scissor(Ct.copy(lt).multiplyScalar(bt).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(S){v.setScissorTest(Ft=S)},this.setOpaqueSort=function(S){Dt=S},this.setTransparentSort=function(S){H=S},this.getClearColor=function(S){return S.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(S=!0,X=!0,ct=!0){let st=0;if(S){let nt=!1;if(yt!==null){let Xt=yt.texture.format;nt=g.has(Xt)}if(nt){let Xt=yt.texture.type,Yt=p.has(Xt),Gt=Qt.getClearColor(),te=Qt.getClearAlpha(),ae=Gt.r,Me=Gt.g,Pe=Gt.b;Yt?(M[0]=ae,M[1]=Me,M[2]=Pe,M[3]=te,W.clearBufferuiv(W.COLOR,0,M)):(A[0]=ae,A[1]=Me,A[2]=Pe,A[3]=te,W.clearBufferiv(W.COLOR,0,A))}else st|=W.COLOR_BUFFER_BIT}X&&(st|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ct&&(st|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&W.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),z=S},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),Qt.dispose(),wt.dispose(),Tt.dispose(),it.dispose(),N.dispose(),G.dispose(),Pt.dispose(),Et.dispose(),at.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",Kt),Jt.removeEventListener("sessionend",_e),Ae.stop()};function ke(S){S.preventDefault(),Ru("WebGLRenderer: Context Lost."),$=!0}function De(){Ru("WebGLRenderer: Context Restored."),$=!1;let S=J.autoReset,X=qt.enabled,ct=qt.autoUpdate,st=qt.needsUpdate,nt=qt.type;Zt(),J.autoReset=S,qt.enabled=X,qt.autoUpdate=ct,qt.needsUpdate=st,qt.type=nt}function mn(S){ye("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function gn(S){let X=S.target;X.removeEventListener("dispose",gn),ms(X)}function ms(S){Sr(S),it.remove(S)}function Sr(S){let X=it.get(S).programs;X!==void 0&&(X.forEach(function(ct){at.releaseProgram(ct)}),S.isShaderMaterial&&at.releaseShaderCache(S))}this.renderBufferDirect=function(S,X,ct,st,nt,Xt){X===null&&(X=Se);let Yt=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Gt=Ls(S,X,ct,st,nt);v.setMaterial(st,Yt);let te=ct.index,ae=1;if(st.wireframe===!0){if(te=L.getWireframeAttribute(ct),te===void 0)return;ae=2}let Me=ct.drawRange,Pe=ct.attributes.position,se=Me.start*ae,Ve=(Me.start+Me.count)*ae;Xt!==null&&(se=Math.max(se,Xt.start*ae),Ve=Math.min(Ve,(Xt.start+Xt.count)*ae)),te!==null?(se=Math.max(se,0),Ve=Math.min(Ve,te.count)):Pe!=null&&(se=Math.max(se,0),Ve=Math.min(Ve,Pe.count));let un=Ve-se;if(un<0||un===1/0)return;Pt.setup(nt,st,Gt,ct,te);let Ge,ze=St;if(te!==null&&(Ge=Z.get(te),ze=et,ze.setIndex(Ge)),nt.isMesh)st.wireframe===!0?(v.setLineWidth(st.wireframeLinewidth*me()),ze.setMode(W.LINES)):ze.setMode(W.TRIANGLES);else if(nt.isLine){let Pn=st.linewidth;Pn===void 0&&(Pn=1),v.setLineWidth(Pn*me()),nt.isLineSegments?ze.setMode(W.LINES):nt.isLineLoop?ze.setMode(W.LINE_LOOP):ze.setMode(W.LINE_STRIP)}else nt.isPoints?ze.setMode(W.POINTS):nt.isSprite&&ze.setMode(W.TRIANGLES);if(nt.isBatchedMesh)if(be.get("WEBGL_multi_draw"))ze.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let Pn=nt._multiDrawStarts,jt=nt._multiDrawCounts,Un=nt._multiDrawCount,we=te?Z.get(te).bytesPerElement:1,Fn=it.get(st).currentProgram.getUniforms();for(let di=0;di<Un;di++)Fn.setValue(W,"_gl_DrawID",di),ze.render(Pn[di]/we,jt[di])}else if(nt.isInstancedMesh)ze.renderInstances(se,un,nt.count);else if(ct.isInstancedBufferGeometry){let Pn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,jt=Math.min(ct.instanceCount,Pn);ze.renderInstances(se,un,jt)}else ze.render(se,un)};function wr(S,X,ct,st){z!==null&&S.isNodeMaterial&&z.setObject(st,S),Ot===!0&&It.setState(S,ct,!1),S.transparent===!0&&S.side===gi&&S.forceSinglePass===!1?(S.side=zn,S.needsUpdate=!0,wn(S,X,st),S.side=$s,S.needsUpdate=!0,wn(S,X,st),S.side=gi):wn(S,X,st)}this.compile=function(S,X,ct=null){ct===null&&(ct=S),z!==null&&z.renderStart(S,X,ct),w=Tt.get(ct),w.init(X),x.push(w),ct.traverseVisible(function(nt){nt.isLight&&nt.layers.test(X.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),S!==ct&&S.traverseVisible(function(nt){nt.isLight&&nt.layers.test(X.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),Bt=this.localClippingEnabled,Ot=It.init(this.clippingPlanes,Bt),Ot===!0&&It.setGlobalState(this.clippingPlanes,X),z!==null&&qt.render(w.state.shadowsArray,ct,X);let st=new Set;return S.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Xt=nt.material;if(Xt)if(Array.isArray(Xt))for(let Yt=0;Yt<Xt.length;Yt++){let Gt=Xt[Yt];wr(Gt,ct,X,nt),st.add(Gt)}else wr(Xt,ct,X,nt),st.add(Xt)}),w=x.pop(),z!==null&&z.renderEnd(),st},this.compileAsync=function(S,X,ct=null){let st=this.compile(S,X,ct);return new Promise(nt=>{function Xt(){if(st.forEach(function(Yt){let te=it.get(Yt).currentProgram;(te===void 0||te.isReady())&&st.delete(Yt)}),st.size===0){nt(S);return}setTimeout(Xt,10)}be.get("KHR_parallel_shader_compile")!==null?Xt():setTimeout(Xt,10)})};let Zi=null;function zt(S){Zi&&Zi(S)}function Kt(){Ae.stop()}function _e(){Ae.start()}let Ae=new Mp;Ae.setAnimationLoop(zt),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(S){Zi=S,Jt.setAnimationLoop(S),S===null?Ae.stop():Ae.start()},Jt.addEventListener("sessionstart",Kt),Jt.addEventListener("sessionend",_e),this.render=function(S,X){if(X!==void 0&&X.isCamera!==!0){ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;z!==null&&z.renderStart(S,X);let ct=Jt.enabled===!0&&Jt.isPresenting===!0,st=C!==null&&(yt===null||ct)&&C.begin(B,yt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(X),X=Jt.getCamera()),S.isScene===!0&&S.onBeforeRender(B,S,X,yt),w=Tt.get(S,x.length),w.init(X),w.state.textureUnits=T.getTextureUnits(),x.push(w),Nt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Vt.setFromProjectionMatrix(Nt,Ui,X.reversedDepth),Bt=this.localClippingEnabled,Ot=It.init(this.clippingPlanes,Bt),b=wt.get(S,I.length),b.init(),I.push(b),Jt.enabled===!0&&Jt.isPresenting===!0){let Yt=B.xr.getDepthSensingMesh();Yt!==null&&$e(Yt,X,-1/0,B.sortObjects)}$e(S,X,0,B.sortObjects),b.finish(),z!==null&&z.updateLights(w.state.lightsArray),B.sortObjects===!0&&b.sort(Dt,H),oe=Jt.enabled===!1||Jt.isPresenting===!1||Jt.hasDepthSensing()===!1,oe&&Qt.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ot===!0&&It.beginShadows();let nt=w.state.shadowsArray;if(qt.render(nt,S,X),Ot===!0&&It.endShadows(),(st&&C.hasRenderPass())===!1){let Yt=b.opaque,Gt=b.transmissive;if(w.setupLights(),X.isArrayCamera){let te=X.cameras;if(Gt.length>0)for(let ae=0,Me=te.length;ae<Me;ae++){let Pe=te[ae];xn(Yt,Gt,S,Pe)}oe&&Qt.render(S);for(let ae=0,Me=te.length;ae<Me;ae++){let Pe=te[ae];je(b,S,Pe,Pe.viewport)}}else Gt.length>0&&xn(Yt,Gt,S,X),oe&&Qt.render(S),je(b,S,X)}yt!==null&&j===0&&(T.updateMultisampleRenderTarget(yt),T.updateRenderTargetMipmap(yt)),st&&C.end(B),S.isScene===!0&&S.onAfterRender(B,S,X),Pt.resetDefaultState(),rt=-1,gt=null,x.pop(),x.length>0?(w=x[x.length-1],T.setTextureUnits(w.state.textureUnits),Ot===!0&&It.setGlobalState(B.clippingPlanes,w.state.camera)):w=null,I.pop(),I.length>0?b=I[I.length-1]:b=null,z!==null&&z.renderEnd()};function $e(S,X,ct,st){if(S.visible===!1)return;if(S.layers.test(X.layers)){if(S.isGroup)ct=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(X);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Vt)){st&&he.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Nt);let Yt=G.update(S),Gt=S.material;Gt.visible&&b.push(S,Yt,Gt,ct,he.z,null,X)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Vt))){let Yt=G.update(S),Gt=S.material;if(st&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),he.copy(S.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),he.copy(Yt.boundingSphere.center)),he.applyMatrix4(S.matrixWorld).applyMatrix4(Nt)),Array.isArray(Gt)){let te=Yt.groups;for(let ae=0,Me=te.length;ae<Me;ae++){let Pe=te[ae],se=Gt[Pe.materialIndex];se&&se.visible&&b.push(S,Yt,se,ct,he.z,Pe,X)}}else Gt.visible&&b.push(S,Yt,Gt,ct,he.z,null,X)}}let Xt=S.children;for(let Yt=0,Gt=Xt.length;Yt<Gt;Yt++)$e(Xt[Yt],X,ct,st)}function je(S,X,ct,st){let{opaque:nt,transmissive:Xt,transparent:Yt}=S;w.setupLightsView(ct),Ot===!0&&It.setGlobalState(B.clippingPlanes,ct),st&&v.viewport(Mt.copy(st)),nt.length>0&&Sn(nt,X,ct),Xt.length>0&&Sn(Xt,X,ct),Yt.length>0&&Sn(Yt,X,ct),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function xn(S,X,ct,st){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[st.id]===void 0){let se=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[st.id]=new Nn(1,1,{generateMipmaps:!0,type:se?qn:ei,minFilter:vi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Fe.workingColorSpace})}let Xt=w.state.transmissionRenderTarget[st.id],Yt=st.viewport||Mt;Xt.setSize(Yt.z*B.transmissionResolutionScale,Yt.w*B.transmissionResolutionScale);let Gt=B.getRenderTarget(),te=B.getActiveCubeFace(),ae=B.getActiveMipmapLevel();B.setRenderTarget(Xt),B.getClearColor(fe),Re=B.getClearAlpha(),Re<1&&B.setClearColor(16777215,.5),B.clear(),oe&&Qt.render(ct);let Me=B.toneMapping;B.toneMapping=Hi;let Pe=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),w.setupLightsView(st),Ot===!0&&It.setGlobalState(B.clippingPlanes,st),Sn(S,ct,st),T.updateMultisampleRenderTarget(Xt),T.updateRenderTargetMipmap(Xt),be.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Ve=0,un=X.length;Ve<un;Ve++){let Ge=X[Ve],{object:ze,geometry:Pn,material:jt,group:Un}=Ge;if(jt.side===gi&&ze.layers.test(st.layers)){let we=jt.side;jt.side=zn,jt.needsUpdate=!0,Hn(ze,ct,st,Pn,jt,Un),jt.side=we,jt.needsUpdate=!0,se=!0}}se===!0&&(T.updateMultisampleRenderTarget(Xt),T.updateRenderTargetMipmap(Xt))}B.setRenderTarget(Gt,te,ae),B.setClearColor(fe,Re),Pe!==void 0&&(st.viewport=Pe),B.toneMapping=Me}function Sn(S,X,ct){let st=X.isScene===!0?X.overrideMaterial:null;for(let nt=0,Xt=S.length;nt<Xt;nt++){let Yt=S[nt],{object:Gt,geometry:te,group:ae}=Yt,Me=Yt.material;Me.allowOverride===!0&&st!==null&&(Me=st),Gt.layers.test(ct.layers)&&Hn(Gt,X,ct,te,Me,ae)}}function Hn(S,X,ct,st,nt,Xt){z!==null&&nt.isNodeMaterial&&z.setObject(S,nt),S.onBeforeRender(B,X,ct,st,nt,Xt),S.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),nt.onBeforeRender(B,X,ct,st,S,Xt),nt.transparent===!0&&nt.side===gi&&nt.forceSinglePass===!1?(nt.side=zn,nt.needsUpdate=!0,B.renderBufferDirect(ct,X,st,nt,S,Xt),nt.side=$s,nt.needsUpdate=!0,B.renderBufferDirect(ct,X,st,nt,S,Xt),nt.side=gi):B.renderBufferDirect(ct,X,st,nt,S,Xt),S.onAfterRender(B,X,ct,st,nt,Xt)}function wn(S,X,ct){X.isScene!==!0&&(X=Se);let st=it.get(S),nt=w.state.lights,Xt=w.state.shadowsArray,Yt=nt.state.version,Gt=at.getParameters(S,nt.state,Xt,X,ct,w.state.lightProbeGridArray),te=at.getProgramCacheKey(Gt),ae=st.programs;st.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?X.environment:null,st.fog=X.fog;let Me=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;st.envMap=N.get(S.envMap||st.environment,Me),st.envMapRotation=st.environment!==null&&S.envMap===null?X.environmentRotation:S.envMapRotation,ae===void 0&&(S.addEventListener("dispose",gn),ae=new Map,st.programs=ae);let Pe=ae.get(te);if(Pe!==void 0){if(st.currentProgram===Pe&&st.lightsStateVersion===Yt)return fi(S,Gt),Pe}else Gt.uniforms=at.getUniforms(S),z!==null&&S.isNodeMaterial&&z.build(S,ct,Gt),S.onBeforeCompile(Gt,B),Pe=at.acquireProgram(Gt,te),ae.set(te,Pe),st.uniforms=Gt.uniforms;let se=st.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(se.clippingPlanes=It.uniform),fi(S,Gt),st.needsLights=Ai(S),st.lightsStateVersion=Yt,st.needsLights&&(se.ambientLightColor.value=nt.state.ambient,se.lightProbe.value=nt.state.probe,se.sunLights.value=nt.state.sun,se.sunLightShadows.value=nt.state.sunShadow,se.directionalLights.value=nt.state.directional,se.directionalLightShadows.value=nt.state.directionalShadow,se.spotLights.value=nt.state.spot,se.spotLightShadows.value=nt.state.spotShadow,se.rectAreaLights.value=nt.state.rectArea,se.ltc_1.value=nt.state.rectAreaLTC1,se.ltc_2.value=nt.state.rectAreaLTC2,se.pointLights.value=nt.state.point,se.pointLightShadows.value=nt.state.pointShadow,se.hemisphereLights.value=nt.state.hemi,se.sunShadowMatrix.value=nt.state.sunShadowMatrix,se.sunShadowCascade.value=nt.state.sunShadowCascade,se.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,se.spotLightMatrix.value=nt.state.spotLightMatrix,se.spotLightMap.value=nt.state.spotLightMap,se.pointShadowMatrix.value=nt.state.pointShadowMatrix),st.lightProbeGrid=w.state.lightProbeGridArray.length>0,st.currentProgram=Pe,st.uniformsList=null,Pe}function si(S){if(S.uniformsList===null){let X=S.currentProgram.getUniforms();S.uniformsList=fa.seqWithValue(X.seq,S.uniforms)}return S.uniformsList}function fi(S,X){let ct=it.get(S);ct.outputColorSpace=X.outputColorSpace,ct.batching=X.batching,ct.batchingColor=X.batchingColor,ct.instancing=X.instancing,ct.instancingColor=X.instancingColor,ct.instancingMorph=X.instancingMorph,ct.skinning=X.skinning,ct.morphTargets=X.morphTargets,ct.morphNormals=X.morphNormals,ct.morphColors=X.morphColors,ct.morphTargetsCount=X.morphTargetsCount,ct.numClippingPlanes=X.numClippingPlanes,ct.numIntersection=X.numClipIntersection,ct.vertexAlphas=X.vertexAlphas,ct.vertexTangents=X.vertexTangents,ct.toneMapping=X.toneMapping}function tr(S,X){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;_.setFromMatrixPosition(X.matrixWorld);for(let ct=0,st=S.length;ct<st;ct++){let nt=S[ct];if(nt.texture!==null&&nt.boundingBox.containsPoint(_))return nt}return null}function Ls(S,X,ct,st,nt){X.isScene!==!0&&(X=Se),T.resetTextureUnits();let Xt=X.fog,Yt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?X.environment:null,Gt=yt===null?B.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Fe.workingColorSpace,te=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,ae=N.get(st.envMap||Yt,te),Me=st.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,Pe=!!ct.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),se=!!ct.morphAttributes.position,Ve=!!ct.morphAttributes.normal,un=!!ct.morphAttributes.color,Ge=Hi;st.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Ge=B.toneMapping);let ze=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Pn=ze!==void 0?ze.length:0,jt=it.get(st),Un=w.state.lights;if(Ot===!0&&(Bt===!0||S!==gt)){let Ye=S===gt&&st.id===rt;It.setState(st,S,Ye)}let we=!1;st.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Un.state.version||jt.outputColorSpace!==Gt||nt.isBatchedMesh&&jt.batching===!1||!nt.isBatchedMesh&&jt.batching===!0||nt.isBatchedMesh&&jt.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&jt.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&jt.instancing===!1||!nt.isInstancedMesh&&jt.instancing===!0||nt.isSkinnedMesh&&jt.skinning===!1||!nt.isSkinnedMesh&&jt.skinning===!0||nt.isInstancedMesh&&jt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&jt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&jt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&jt.instancingMorph===!1&&nt.morphTexture!==null||jt.envMap!==ae||st.fog===!0&&jt.fog!==Xt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==It.numPlanes||jt.numIntersection!==It.numIntersection)||jt.vertexAlphas!==Me||jt.vertexTangents!==Pe||jt.morphTargets!==se||jt.morphNormals!==Ve||jt.morphColors!==un||jt.toneMapping!==Ge||jt.morphTargetsCount!==Pn||!!jt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,jt.__version=st.version);let Fn=jt.currentProgram;we===!0&&(Fn=wn(st,X,nt),z&&st.isNodeMaterial&&z.onUpdateProgram(st,Fn,jt));let di=!1,Ki=!1,re=!1,ot=Fn.getUniforms(),tn=jt.uniforms;if(v.useProgram(Fn.program)&&(di=!0,Ki=!0,re=!0),st.id!==rt&&(rt=st.id,Ki=!0),jt.needsLights){let Ye=tr(w.state.lightProbeGridArray,nt);jt.lightProbeGrid!==Ye&&(jt.lightProbeGrid=Ye,Ki=!0)}if(di||gt!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ot.setValue(W,"projectionMatrix",S.projectionMatrix),ot.setValue(W,"viewMatrix",S.matrixWorldInverse);let ji=ot.map.cameraPosition;ji!==void 0&&ji.setValue(W,Ht.setFromMatrixPosition(S.matrixWorld)),P.logarithmicDepthBuffer&&ot.setValue(W,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ot.setValue(W,"isOrthographic",S.isOrthographicCamera===!0),gt!==S&&(gt=S,Ki=!0,re=!0)}if(jt.needsLights&&(Un.state.sunShadowMap.length>0&&ot.setValue(W,"sunShadowMap",Un.state.sunShadowMap,T),Un.state.directionalShadowMap.length>0&&ot.setValue(W,"directionalShadowMap",Un.state.directionalShadowMap,T),Un.state.spotShadowMap.length>0&&ot.setValue(W,"spotShadowMap",Un.state.spotShadowMap,T),Un.state.pointShadowMap.length>0&&ot.setValue(W,"pointShadowMap",Un.state.pointShadowMap,T)),nt.isSkinnedMesh){ot.setOptional(W,nt,"bindMatrix"),ot.setOptional(W,nt,"bindMatrixInverse");let Ye=nt.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),ot.setValue(W,"boneTexture",Ye.boneTexture,T))}nt.isBatchedMesh&&(ot.setOptional(W,nt,"batchingTexture"),ot.setValue(W,"batchingTexture",nt._matricesTexture,T),ot.setOptional(W,nt,"batchingIdTexture"),ot.setValue(W,"batchingIdTexture",nt._indirectTexture,T),ot.setOptional(W,nt,"batchingColorTexture"),nt._colorsTexture!==null&&ot.setValue(W,"batchingColorTexture",nt._colorsTexture,T));let Ci=ct.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&O.update(nt,ct,Fn),(Ki||jt.receiveShadow!==nt.receiveShadow)&&(jt.receiveShadow=nt.receiveShadow,ot.setValue(W,"receiveShadow",nt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&X.environment!==null&&(tn.envMapIntensity.value=X.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=Dy()),Ki){if(ot.setValue(W,"toneMappingExposure",B.toneMappingExposure),jt.needsLights&&jn(tn,re),Xt&&st.fog===!0&&Q.refreshFogUniforms(tn,Xt),Q.refreshMaterialUniforms(tn,st,bt,dt,w.state.transmissionRenderTarget[S.id]),jt.needsLights&&jt.lightProbeGrid){let Ye=jt.lightProbeGrid;tn.probesSH.value=Ye.texture,tn.probesMin.value.copy(Ye.boundingBox.min),tn.probesMax.value.copy(Ye.boundingBox.max),tn.probesResolution.value.copy(Ye.resolution)}fa.upload(W,si(jt),tn,T)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(fa.upload(W,si(jt),tn,T),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ot.setValue(W,"center",nt.center),ot.setValue(W,"modelViewMatrix",nt.modelViewMatrix),ot.setValue(W,"normalMatrix",nt.normalMatrix),ot.setValue(W,"modelMatrix",nt.matrixWorld),st.uniformsGroups!==void 0){let Ye=st.uniformsGroups;for(let ji=0,Xn=Ye.length;ji<Xn;ji++){let er=Ye[ji];Et.update(er,Fn),Et.bind(er,Fn)}}return Fn}function jn(S,X){S.ambientLightColor.needsUpdate=X,S.lightProbe.needsUpdate=X,S.sunLights.needsUpdate=X,S.sunLightShadows.needsUpdate=X,S.directionalLights.needsUpdate=X,S.directionalLightShadows.needsUpdate=X,S.pointLights.needsUpdate=X,S.pointLightShadows.needsUpdate=X,S.spotLights.needsUpdate=X,S.spotLightShadows.needsUpdate=X,S.rectAreaLights.needsUpdate=X,S.hemisphereLights.needsUpdate=X}function Ai(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return ht},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return yt},this.setRenderTargetTextures=function(S,X,ct){let st=it.get(S);st.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),it.get(S.texture).__webglTexture=X,it.get(S.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ct,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,X){let ct=it.get(S);ct.__webglFramebuffer=X,ct.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(S,X=0,ct=0){yt=S,ht=X,j=ct;let st=null,nt=!1,Xt=!1;if(S){let Gt=it.get(S);if(Gt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(W.FRAMEBUFFER,Gt.__webglFramebuffer),Mt.copy(S.viewport),Ct.copy(S.scissor),mt=S.scissorTest,v.viewport(Mt),v.scissor(Ct),v.setScissorTest(mt),rt=-1;return}else if(Gt.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Gt.__hasExternalTextures)T.rebindTextures(S,it.get(S.texture).__webglTexture,it.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Me=S.depthTexture;if(Gt.__boundDepthTexture!==Me){if(Me!==null&&it.has(Me)&&(S.width!==Me.image.width||S.height!==Me.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let te=S.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Xt=!0);let ae=it.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ae[X])?st=ae[X][ct]:st=ae[X],nt=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?st=it.get(S).__webglMultisampledFramebuffer:Array.isArray(ae)?st=ae[ct]:st=ae,Mt.copy(S.viewport),Ct.copy(S.scissor),mt=S.scissorTest}else Mt.copy(ut).multiplyScalar(bt).floor(),Ct.copy(lt).multiplyScalar(bt).floor(),mt=Ft;if(ct!==0&&(st=K),v.bindFramebuffer(W.FRAMEBUFFER,st)&&v.drawBuffers(S,st),v.viewport(Mt),v.scissor(Ct),v.setScissorTest(mt),nt){let Gt=it.get(S.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Gt.__webglTexture,ct)}else if(Xt){let Gt=X;for(let te=0;te<S.textures.length;te++){let ae=it.get(S.textures[te]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+te,ae.__webglTexture,ct,Gt)}}else if(S!==null&&ct!==0){let Gt=it.get(S.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Gt.__webglTexture,ct)}rt=-1};function Ji(S){let X=it.get(S);return(X.__readFormat!==S.format||X.__readType!==S.type)&&(X.__readFormat=S.format,X.__readType=S.type,X.__formatReadable=P.textureFormatReadable(S.format),X.__typeReadable=P.textureTypeReadable(S.type)),X}this.readRenderTargetPixels=function(S,X,ct,st,nt,Xt,Yt,Gt=0){if(!(S&&S.isWebGLRenderTarget)){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=it.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Yt!==void 0&&(te=te[Yt]),te){v.bindFramebuffer(W.FRAMEBUFFER,te);try{let ae=S.textures[Gt],Me=ae.format,Pe=ae.type;S.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Gt);let se=Ji(ae);if(se.__formatReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(se.__typeReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=S.width-st&&ct>=0&&ct<=S.height-nt&&W.readPixels(X,ct,st,nt,_t.convert(Me),_t.convert(Pe),Xt)}finally{let ae=yt!==null?it.get(yt).__webglFramebuffer:null;v.bindFramebuffer(W.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(S,X,ct,st,nt,Xt,Yt,Gt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=it.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Yt!==void 0&&(te=te[Yt]),te)if(X>=0&&X<=S.width-st&&ct>=0&&ct<=S.height-nt){v.bindFramebuffer(W.FRAMEBUFFER,te);let ae=S.textures[Gt],Me=ae.format,Pe=ae.type;S.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Gt);let se=Ji(ae);if(se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ve=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ve),W.bufferData(W.PIXEL_PACK_BUFFER,Xt.byteLength,W.STREAM_READ),W.readPixels(X,ct,st,nt,_t.convert(Me),_t.convert(Pe),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let un=yt!==null?it.get(yt).__webglFramebuffer:null;v.bindFramebuffer(W.FRAMEBUFFER,un);let Ge=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Xd(W,Ge,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ve),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Xt),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Ve),W.deleteSync(Ge),Xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,X=null,ct=0){let st=Math.pow(2,-ct),nt=Math.floor(S.image.width*st),Xt=Math.floor(S.image.height*st),Yt=X!==null?X.x:0,Gt=X!==null?X.y:0;T.setTexture2D(S,0),W.copyTexSubImage2D(W.TEXTURE_2D,ct,0,0,Yt,Gt,nt,Xt),v.unbindTexture()},this.copyTextureToTexture=function(S,X,ct=null,st=null,nt=0,Xt=0){let Yt,Gt,te,ae,Me,Pe,se,Ve,un,Ge=S.isCompressedTexture?S.mipmaps[Xt]:S.image;if(ct!==null)Yt=ct.max.x-ct.min.x,Gt=ct.max.y-ct.min.y,te=ct.isBox3?ct.max.z-ct.min.z:1,ae=ct.min.x,Me=ct.min.y,Pe=ct.isBox3?ct.min.z:0;else{let tn=Math.pow(2,-nt);Yt=Math.floor(Ge.width*tn),Gt=Math.floor(Ge.height*tn),S.isDataArrayTexture?te=Ge.depth:S.isData3DTexture?te=Math.floor(Ge.depth*tn):te=1,ae=0,Me=0,Pe=0}st!==null?(se=st.x,Ve=st.y,un=st.z):(se=0,Ve=0,un=0);let ze=_t.convert(X.format),Pn=_t.convert(X.type),jt;X.isData3DTexture?(T.setTexture3D(X,0),jt=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(T.setTexture2DArray(X,0),jt=W.TEXTURE_2D_ARRAY):(T.setTexture2D(X,0),jt=W.TEXTURE_2D),v.activeTexture(W.TEXTURE0),v.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),v.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),v.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);let Un=v.getParameter(W.UNPACK_ROW_LENGTH),we=v.getParameter(W.UNPACK_IMAGE_HEIGHT),Fn=v.getParameter(W.UNPACK_SKIP_PIXELS),di=v.getParameter(W.UNPACK_SKIP_ROWS),Ki=v.getParameter(W.UNPACK_SKIP_IMAGES);v.pixelStorei(W.UNPACK_ROW_LENGTH,Ge.width),v.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ge.height),v.pixelStorei(W.UNPACK_SKIP_PIXELS,ae),v.pixelStorei(W.UNPACK_SKIP_ROWS,Me),v.pixelStorei(W.UNPACK_SKIP_IMAGES,Pe);let re=S.isDataArrayTexture||S.isData3DTexture,ot=X.isDataArrayTexture||X.isData3DTexture;if(S.isDepthTexture){let tn=it.get(S),Ci=it.get(X),Ye=it.get(tn.__renderTarget),ji=it.get(Ci.__renderTarget);v.bindFramebuffer(W.READ_FRAMEBUFFER,Ye.__webglFramebuffer),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let Xn=0;Xn<te;Xn++)re&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,it.get(S).__webglTexture,nt,Pe+Xn),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,it.get(X).__webglTexture,Xt,un+Xn)),W.blitFramebuffer(ae,Me,Yt,Gt,se,Ve,Yt,Gt,W.DEPTH_BUFFER_BIT,W.NEAREST);v.bindFramebuffer(W.READ_FRAMEBUFFER,null),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(nt!==0||S.isRenderTargetTexture||it.has(S)){let tn=it.get(S),Ci=it.get(X);v.bindFramebuffer(W.READ_FRAMEBUFFER,F),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,q);for(let Ye=0;Ye<te;Ye++)re?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,tn.__webglTexture,nt,Pe+Ye):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,tn.__webglTexture,nt),ot?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ci.__webglTexture,Xt,un+Ye):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ci.__webglTexture,Xt),nt!==0?W.blitFramebuffer(ae,Me,Yt,Gt,se,Ve,Yt,Gt,W.COLOR_BUFFER_BIT,W.NEAREST):ot?W.copyTexSubImage3D(jt,Xt,se,Ve,un+Ye,ae,Me,Yt,Gt):W.copyTexSubImage2D(jt,Xt,se,Ve,ae,Me,Yt,Gt);v.bindFramebuffer(W.READ_FRAMEBUFFER,null),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else ot?S.isDataTexture||S.isData3DTexture?W.texSubImage3D(jt,Xt,se,Ve,un,Yt,Gt,te,ze,Pn,Ge.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(jt,Xt,se,Ve,un,Yt,Gt,te,ze,Ge.data):W.texSubImage3D(jt,Xt,se,Ve,un,Yt,Gt,te,ze,Pn,Ge):S.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Xt,se,Ve,Yt,Gt,ze,Pn,Ge.data):S.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Xt,se,Ve,Ge.width,Ge.height,ze,Ge.data):W.texSubImage2D(W.TEXTURE_2D,Xt,se,Ve,Yt,Gt,ze,Pn,Ge);v.pixelStorei(W.UNPACK_ROW_LENGTH,Un),v.pixelStorei(W.UNPACK_IMAGE_HEIGHT,we),v.pixelStorei(W.UNPACK_SKIP_PIXELS,Fn),v.pixelStorei(W.UNPACK_SKIP_ROWS,di),v.pixelStorei(W.UNPACK_SKIP_IMAGES,Ki),Xt===0&&X.generateMipmaps&&W.generateMipmap(jt),v.unbindTexture()},this.initRenderTarget=function(S){it.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){ht=0,j=0,yt=null,v.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Fe._getUnpackColorSpace()}};var ma=class extends bs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ze;t.deleteAttribute("uv");let e=new fn({side:zn}),n=new fn,s=new uo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ne(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new rs(t,n,6),o=new yn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ne(t,pa(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ne(t,pa(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ne(t,pa(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Ne(t,pa(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Ne(t,pa(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Ne(t,pa(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function pa(i){return new oo({color:0,emissive:16777215,emissiveIntensity:i})}function Mi(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Xe,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Cp(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][u]);let m=Cp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Cp(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ce(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let y=h.getComponent(u,m);o.setComponent(u+d,m,y)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Rp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Vi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ny=new Ws(-1,1,1,-1,0,1),ef=class extends Xe{constructor(){super(),this.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ie([0,2,0,0,2,0],2))}},Uy=new ef,ga=class{constructor(t){this._mesh=new Ne(Uy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ny)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var xa=class extends Vi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof on?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ca.clone(t.uniforms),this.material=new on({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ga(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Lo=class extends Vi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ch=class extends Vi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var hh=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Ut);this._width=n.width,this._height=n.height,e=new Nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xa(Rp),this.copyPass.material.blending=xi,this.timer=new fo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Lo!==void 0&&(a instanceof Lo?n=!0:a instanceof ch&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var uh=class extends Vi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ue}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Do={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var fh=class extends Vi{constructor(){super(),this.isOutputPass=!0,this.uniforms=ca.clone(Do.uniforms),this.material=new ea({name:Do.name,uniforms:this.uniforms,vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader}),this._fsQuad=new ga(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Fe.getTransfer(this._outputColorSpace)===We&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===po?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===mo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===go?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===vr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===vo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var No=(i,t,e=0,n=0,s=0)=>(i.translate(e,n,s),i.setAttribute("aPart",new Ce(new Float32Array(i.attributes.position.count).fill(t),1)),i),le=(i,t,e,n,s=0,r=0,a=0,o=0)=>{let l=new Ze(i,t,e);return o&&l.rotateZ(o),No(l,n,s,r+t/2,a)},nn=(i,t,e,n=0,s=0,r=0,a=i,o=10)=>No(new mi(a,i,t,o),e,n,s+t/2,r),dh=(i,t,e,n=0,s=0,r=0,a=10)=>No(new ki(i,t,a),e,n,s+t/2,r),ph=(i,t,e,n,s)=>No(new ws(i,8,6),t,e,n,s);function Pp(){let i={},t=(e,n,s={})=>{i[e]={geo:Mi(n),...s},n.forEach(r=>r.dispose())};return t("util",[nn(.035,1.25,1,0,0,0,.02),le(.07,.06,.16,1,0,1.22,.02),le(.3,.12,.22,1,-.28,0,.2),le(.3,.02,.22,2,-.28,.12,.2),nn(.012,.3,4,-.38,.12,.26,.012,5),nn(.012,.3,4,-.2,.12,.14,.012,5)],{rotor:[0,1.25,.11]}),t("oil",[nn(.2,.26,1,-.2,0,.15),nn(.205,.03,2,-.2,.19,.15),nn(.15,.2,1,.18,0,.22),nn(.155,.025,2,.18,.14,.22),nn(.05,.85,1,.1,0,-.15),nn(.06,.02,2,.1,.3,-.15),nn(.06,.02,2,.1,.6,-.15),le(.3,.02,.03,4,-.05,.3,-.15),nn(.02,1.15,4,-.3,0,-.2,.015,6),dh(.06,.22,3,-.3,1.15,-.2,7)]),t("agro",[...[-.3,0,.3].flatMap(e=>[nn(.14,.5,1,e,0,0),dh(.14,.12,1,e,.5,0),nn(.145,.03,2,e,.36,0)]),le(.06,.78,.06,4,.15,0,-.2),le(.5,.025,.04,4,0,.74,-.1,.12)]),t("ind",[le(.8,.22,.45,1),le(.8,.05,.01,5,0,.09,.23),...[-.27,0,.27].map(e=>le(.27,.09,.45,1,e,.2,0,.38)),nn(.04,.72,1,.28,0,-.3,.03),nn(.036,.04,6,.28,.7,-.3),nn(.04,.6,1,.12,0,-.3,.03),nn(.036,.04,6,.12,.58,-.3)],{smoke:[[.28,.76,-.3],[.12,.64,-.3]]}),t("base",[le(.6,.3,.5,1,-.1),le(.6,.03,.5,2,-.1,.3),le(.55,.03,.06,4,-.05,.42,.3,.5),nn(.05,1,1,.32,0,-.15,.035),nn(.04,.04,6,.32,.98,-.15),nn(.05,.8,1,.42,0,.1,.035),nn(.04,.04,6,.42,.78,.1),dh(.16,.14,4,-.38,0,.32,6)],{smoke:[[.32,1.05,-.15],[.42,.85,.1]]}),t("log",[...[-.22,0,.22].flatMap((e,n)=>[0,.1].flatMap((s,r)=>[le(.2,.09,.09,(n+r)%2?2:1,e,0,s),...(n+r)%3?[le(.2,.09,.09,(n+r)%2?1:2,e,.09,s)]:[]])),le(.03,.5,.03,4,-.38,0,.05),le(.03,.5,.03,4,.38,0,.05),le(.84,.035,.05,4,0,.5,.05),le(.06,.05,.07,1,.1,.45,.05),le(.03,.03,.03,6,0,.535,.05)]),t("saude",[le(.7,.3,.4,5),le(.72,.02,.42,1,0,.3),le(.06,.26,.03,2,0,.36,.1),le(.2,.07,.03,2,0,.455,.1),nn(.11,.01,2,.22,.32,-.05)]),t("tech",[le(.6,.2,.4,1,.05,0,.1),le(.6,.02,.41,2,.05,.07,.1),le(.6,.02,.41,2,.05,.14,.1),nn(.03,1.3,4,-.28,0,-.2,.008,6),ph(.06,1,-.22,.9,-.2),ph(.05,1,-.34,1.05,-.2),le(.03,.03,.03,6,-.28,1.3,-.2)]),t("cons",[le(.8,.2,.5,1),le(.82,.05,.52,2,0,.14),le(.24,.12,.02,5,0,0,.26),le(.1,.04,.1,4,-.2,.2),le(.1,.04,.1,4,.2,.2)]),t("imob",[le(.35,.42,.3,5,.3,0,.1),le(.36,.02,.31,1,.3,.42,.1),le(.36,.02,.31,1,.3,.21,.1),le(.035,1.2,.035,4,-.15),le(.9,.03,.03,4,.05,1.2),le(.12,.07,.06,1,-.33,1.17),le(.006,.4,.006,4,.35,.8),le(.03,.03,.03,6,.49,1.23)]),t("fin",[nn(.13,.03,2),dh(.1,.8,4,0,.03,0,8),le(.03,.03,.03,6,0,.83)],{top:!0}),i}function Ip(){let i=[0,1,2].map(n=>{let s=new Ze(.04,.5,.012);return s.translate(0,.25,0),s.rotateZ(n*Math.PI*2/3),s}),t=new ws(.035,8,6),e=Mi([...i,t]);return[...i,t].forEach(n=>n.dispose()),e}function nf(i){let t=(r,a,o)=>No(new Ze(r,a,r),0,0,o+a/2,0),e=i?.72:1,n=i?[t(1,.66,0),t(.72,.34,.66)]:[t(1,1,0)];n.push(le(1.1,.03,1.1,1),le(.26*e,.03,.2*e,1,-.2*e,1,.15*e),le(.16*e,.045,.16*e,4,.22*e,1,-.2*e),le(.3*e,.018,.12*e,4,.1*e,1,.3*e)),i&&n.push(nn(.012,.12,4,.2*e,1,.2*e,.006,5),le(.2,.02,.1,1,-.3,.66,.42),le(.1,.03,.1,4,.42,.66,-.3));let s=Mi(n);return n.forEach(r=>r.dispose()),s}function Lp(){let i=new mi(.018,.024,.2,6);i.translate(0,.1,0);let t=new ws(.2,12,9);t.scale(1,1.08,1),t.translate(0,.36,0);let e=(n,s,r,a)=>{let o=n.attributes.position.count,l=new Float32Array(o*3);for(let c=0;c<o;c++)l.set([s,r,a],c*3);return n.setAttribute("color",new Ce(l,3)),n};return Mi([e(i,.62,.56,.5),e(t,1,1,1)])}function Dp(){let i=[le(.2,.78,.24,1,-.13),le(.2,.78,.24,1,.13),le(.22,.07,.36,5,-.13,0,.05),le(.22,.07,.36,5,.13,0,.05),le(.62,.72,.32,1,0,.78),le(.2,.5,.02,2,0,.98,.165),le(.07,.4,.02,0,0,1.04,.18),le(.15,.64,.2,1,-.385,.84),le(.15,.64,.2,1,.385,.84),le(.13,.11,.16,3,-.385,.73),le(.13,.11,.16,3,.385,.73),le(.14,.1,.14,3,0,1.5),ph(.2,3,0,1.74,0),ph(.205,4,0,1.79,-.035)],t=Mi(i);return i.forEach(e=>e.dispose()),t}var Yn=(i,t,e,n,s=0,r=0,a=0)=>{i.translate(s,r,a);let o=i.attributes.position.count,l=new Float32Array(o*3);for(let c=0;c<o;c++)l.set([t,e,n],c*3);return i.setAttribute("color",new Ce(l,3)),i};function Np(){let i=[Yn(new Ze(.17,.03,.074),1,1,1,0,.03,0),Yn(new Ze(.09,.026,.064),.1,.13,.17,-.008,.057,0),Yn(new Ze(.094,.004,.068),1,1,1,-.008,.072,0),...[[-.052,.036],[.052,.036],[-.052,-.036],[.052,-.036]].map(([e,n])=>Yn(new Ze(.034,.03,.012),.06,.06,.07,e,.015,n)),Yn(new Ze(.004,.01,.06),1.6,1.5,1.1,.086,.034,0),Yn(new Ze(.004,.01,.06),.9,.1,.08,-.086,.034,0),Yn(new Ze(.19,.002,.092),.2,.2,.21,.008,.002,.008)],t=Mi(i);return i.forEach(e=>e.dispose()),t}function sf(i){let t=new mi(.09,.05,.5,8,1);t.rotateZ(Math.PI/2),t.scale(1,.55,1);let e=[Yn(t,1,1,1,0,.03,0),Yn(new Ze(.4,.012,.13),.75,.6,.42,-.02,.07,0)];if(i===0){let s=new ki(.17,.5,3);s.scale(1,1,.06);let r=new ki(.1,.36,3);r.scale(1,1,.06),e.push(Yn(new mi(.006,.006,.6,5),.3,.3,.32,.02,.37,0),Yn(s,1.5,1.5,1.5,-.08,.36,0),Yn(r,1.5,1.5,1.5,.13,.27,0))}else e.push(Yn(new Ze(.2,.06,.1),1.4,1.4,1.4,-.03,.1,0),Yn(new Ze(.12,.03,.09),.1,.14,.2,0,.14,0),Yn(new Ze(.14,.008,.11),1.4,1.4,1.4,-.03,.16,0));let n=Mi(e.map(s=>s.index?s.toNonIndexed():s));return e.forEach(s=>s.dispose()),n.computeVertexNormals(),n}var Bo=(i,t,e=0,n=0,s=0)=>{i.translate(e,n,s);let r=i.attributes.position.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)a.set(t,o*3);return i.setAttribute("color",new Ce(a,3)),i},Y=(i,t,e,n,s=0,r=0,a=0,o=0,l=0,c=0)=>{let h=new Ze(i,t,e);return l&&h.rotateX(l),c&&h.rotateZ(c),o&&h.rotateY(o),Bo(h,n,s,r+t/2,a)},qe=(i,t,e,n=0,s=0,r=0,a=i,o=8)=>Bo(new mi(a,i,t,o),e,n,s+t/2,r),bi=(i,t,e,n,s,r,a=8,o=!0)=>{let l=new mi(i,i,t,a);return o?l.rotateZ(Math.PI/2):l.rotateX(Math.PI/2),Bo(l,e,n,s,r)},As=(i,t,e,n=0,s=0,r=0,a=8)=>Bo(new ki(i,t,a),e,n,s+t/2,r),ls=(i,t,e,n,s)=>Bo(new ws(i,8,6),t,e,n,s),sn=i=>{let t=Mi(i.flat(1/0));return i.flat(1/0).forEach(e=>e.dispose()),t},ne=[.95,.95,.93],Up=[.93,.88,.76],Be=[.55,.57,.6],Qe=[.13,.14,.17],Zn=[.2,.32,.42],rn=[.78,.16,.13],kn=[.95,.76,.14],Ts=[.15,.36,.72],Wi=[.16,.5,.26],dn=[.5,.35,.2],rf=[.42,.3,.2],Fy=[.9,.82,.62],Uo=[.25,.26,.28],Oy=[.92,.5,.12],Fo=[.9,.7,.55],Si=(i,t,e,n=0)=>[Y(.15,.032,.068,i,t,.014,e,n),Y(.08,.026,.06,Qe,t,.046,e,n)],vn=(i,t,e=1)=>[qe(.012*e,.14*e,dn,i,0,t,.012*e,5),ls(.085*e,[.24,.5,.24],i,.2*e,t)],Op=(i,t,e,n=1)=>[qe(.006,.17*n,ne,t,0,e,.006,5),As(.1*n,.045*n,i,t,.16*n,e,8)],Oo=(i,t,e)=>[qe(.04,.006,ne,t,.05,e),qe(.006,.05,Be,t,0,e,.006,5),...Op(i,t,e,.9),Y(.025,.035,.025,dn,t-.065,0,e),Y(.025,.035,.025,dn,t+.065,0,e)],va=(i,t,e=0)=>[Y(.11,.055,.05,ne,i,.035,t,e),Y(.04,.03,.052,Qe,i+.01*Math.cos(e),.06,t-.01*Math.sin(e),e),Y(.04,.04,.036,ne,i+.07*Math.cos(e),.05,t-.07*Math.sin(e),e),Y(.1,.035,.012,Qe,i,0,t+.018,e),Y(.1,.035,.012,Qe,i,0,t-.018,e)],Bp=(i,t=Qe,e=[.15,.1,.08])=>sn([Y(.05,.11,.06,Fo,-.035),Y(.05,.11,.06,Fo,.035),Y(.13,.06,.07,t,0,.1),Y(.14,.12,.07,i,0,.16),Y(.035,.12,.05,Fo,-.09,.15),Y(.035,.12,.05,Fo,.09,.15),ls(.05,Fo,0,.335,0),ls(.052,e,0,.35,-.012)]),Fp={bar:()=>({boards:[["BAR",.18,.27,-.14,.34],["CERVEJA GELADA",-.38,.36,.02,.4,.5]],geo:sn([Y(1.1,.008,1,[.62,.45,.32],0,0,.05),Y(.56,.22,.3,[.72,.3,.22],.18,0,-.3),Y(.6,.02,.34,dn,.18,.22,-.3),Y(.56,.015,.16,rn,.18,.17,-.1,0,.35),Y(.12,.13,.01,Qe,.05,0,-.148),Y(.2,.08,.01,Zn,.3,.07,-.148),Oo(kn,-.05,.12),Oo(rn,.2,.2),Oo(kn,.4,.08),Oo(rn,-.05,.38),Oo(kn,.3,.42),qe(.012,.3,Be,-.5,0,.02,.012,5),qe(.012,.3,Be,-.26,0,.02,.012,5),vn(-.42,-.4),vn(.5,.48,.8)])}),posto:()=>({boards:[["POSTO",-.47,.34,.36,.2],["GASOLINA \xB7 ETANOL",0,.245,.215,.5]],tint:!0,geo:sn([Y(1.05,.006,.8,Uo,0,0,.05),Y(.78,.035,.44,ne,0,.24,.02),Y(.8,.02,.46,[1.3,1.3,1.3],0,.225,.02),...[[-.3,-.12],[.3,-.12],[-.3,.16],[.3,.16]].map(([i,t])=>qe(.016,.24,ne,i,0,t,.016,6)),...[-.2,0,.2].flatMap(i=>[Y(.1,.012,.3,Be,i,0,.02),Y(.035,.085,.03,rn,i,.012,-.05),Y(.035,.085,.03,rn,i,.012,.09)]),Y(.5,.16,.2,ne,0,0,-.4),Y(.4,.09,.01,Zn,0,.04,-.298),Y(.52,.02,.22,[1.3,1.3,1.3],0,.16,-.4),qe(.012,.42,Be,-.47,0,.36,.012,5),Si(rn,-.1,.02),Si(ne,.1,.16)])}),escola:()=>({kids:6,boards:[["ESCOLA",0,.25,-.215,.36]],geo:sn([Y(.8,.22,.26,kn,0,0,-.36),Y(.86,.02,.32,rn,0,.22,-.36),Y(.3,.3,.3,kn,0,0,-.36),As(.26,.1,rn,0,.3,-.36,4),Y(.08,.13,.01,Ts,0,0,-.208),...[-.3,-.18,.18,.3].map(i=>Y(.07,.07,.01,Zn,i,.09,-.228)),qe(.006,.36,Be,.46,0,-.2,.006,5),Y(.09,.05,.004,Wi,.505,.3,-.2),Y(.3,.006,.3,Fy,-.3,0,.25),Y(.012,.16,.012,rn,-.42,0,.14),Y(.012,.16,.012,rn,-.2,0,.14),Y(.24,.012,.012,rn,-.31,.16,.14),Y(.004,.11,.004,Qe,-.35,.05,.14),Y(.004,.11,.004,Qe,-.27,.05,.14),Y(.05,.008,.03,Ts,-.35,.045,.14),Y(.05,.008,.03,Ts,-.27,.045,.14),Y(.05,.14,.05,Ts,.16,0,.2),Y(.24,.012,.05,kn,.3,.07,.2,0,0,-.5),Y(.3,.012,.03,Wi,.3,.035,.42,0,0,.12),Y(.03,.035,.03,Be,.3,0,.42),vn(-.5,-.1),vn(.52,.5,.9),vn(-.52,.5,.9)])}),farmacia:()=>({boards:[["FARM\xC1CIA",0,.235,-.09,.44]],geo:sn([Y(.6,.2,.34,ne,0,0,-.28),Y(.64,.05,.36,Wi,0,.2,-.28),Y(.6,.012,.12,Wi,0,.15,-.06,0,.3),Y(.36,.1,.01,Zn,-.08,.02,-.108),Y(.1,.13,.01,Qe,.2,0,-.108),Y(.03,.11,.02,Wi,.38,.3,-.2),Y(.11,.03,.02,Wi,.38,.34,-.2),qe(.008,.3,Be,.38,0,-.2,.008,5),Si(ne,-.2,.3,.2),vn(.45,.4),vn(-.5,.42,.85)])}),hospital:()=>({boards:[["PRONTO-SOCORRO",0,.205,-.115,.5]],geo:sn([Y(.7,.18,.3,ne,0,0,-.3),Y(.72,.02,.32,rn,0,.18,-.3),Y(.4,.012,.16,ne,0,.13,-.08),qe(.01,.13,Be,-.18,0,-.01,.01,5),qe(.01,.13,Be,.18,0,-.01,.01,5),Y(.2,.07,.085,ne,-.2,.012,.25),Y(.07,.05,.08,ne,-.065,.012,.25),Y(.2,.012,.087,rn,-.2,.04,.25),Y(.03,.012,.03,[.2,.4,1.4],-.13,.082,.25),Y(.05,.03,.082,Qe,-.06,.05,.25),qe(.16,.006,Be,.32,0,.3,.16,16),qe(.13,.008,rn,.32,0,.3,.13,16),Y(.02,.01,.12,ne,.28,0,.3),Y(.02,.01,.12,ne,.36,0,.3),Y(.08,.01,.02,ne,.32,0,.3),vn(-.5,-.05)])}),aviao:()=>({boards:[["AEROPORTO",-.33,.2,-.33,.36]],tint:!0,geo:sn([Y(1.15,.006,.34,Uo,0,0,.18),...[-.4,-.2,0,.2,.4].map(i=>Y(.09,.008,.014,ne,i,0,.18)),bi(.045,.62,ne,0,.09,.18),ls(.045,ne,.31,.09,.18),As(.045,.14,ne,-.38,.02,.18,8).rotateZ(0),Y(.16,.012,.62,ne,.02,.085,.18),Y(.07,.01,.24,ne,-.28,.1,.18),Y(.09,.11,.012,[1.4,1.4,1.4],-.29,.1,.18),bi(.022,.08,Be,.05,.06,.02),bi(.022,.08,Be,.05,.06,.34),Y(.36,.012,.094,[1.4,1.4,1.4],.02,.1,.18),Y(.05,.02,.06,Zn,.27,.1,.18),Y(.5,.12,.2,ne,-.25,0,-.42),Y(.46,.06,.01,Zn,-.25,.04,-.318),qe(.03,.3,ne,.3,0,-.42,.03,8),qe(.06,.05,Zn,.3,.3,-.42,.045,8),qe(.065,.012,ne,.3,.35,-.42)])}),locadora:()=>({boards:[["ALUGUEL DE CARROS",.3,.2,-.33,.44]],geo:sn([Y(1.05,.006,.9,Uo,0,0,.05),Y(.4,.15,.2,ne,.3,0,-.42),Y(.34,.08,.01,Zn,.3,.04,-.318),Y(.44,.02,.24,Wi,.3,.15,-.42),...[-.36,-.12,.12,.36].flatMap((i,t)=>[.02,.3].flatMap((e,n)=>[Si([ne,Be,Qe,rn,Ts,ne,Be,kn][t*2+n],i,e,Math.PI/2),Y(.006,.007,.16,ne,i+.12,0,e)])),vn(-.45,-.42,.9)])}),trem:()=>({green:!0,geo:sn([Y(1.2,.008,.12,[.45,.42,.38],0,0,.1),Y(1.2,.01,.008,Be,0,.008,.07),Y(1.2,.01,.008,Be,0,.008,.13),...Array.from({length:13},(i,t)=>Y(.02,.01,.1,dn,-.54+t*.09,.004,.1)),Y(.24,.07,.07,Wi,.4,.02,.1),Y(.08,.05,.07,Wi,.34,.09,.1),Y(.07,.03,.062,Zn,.34,.1,.1),Y(.05,.025,.07,kn,.51,.02,.1),qe(.012,.03,Qe,.45,.09,.1),...[.12,-.14,-.4].flatMap((i,t)=>[Y(.22,.065,.066,[dn,rn,Be][t],i,.02,.1),Y(.2,.012,.05,[rf,Qe,rf][t],i,.085,.1)]),Y(.22,.012,.16,Be,-.3,0,-.2),Y(.2,.09,.1,Up,-.3,.012,-.22),Y(.26,.012,.16,rn,-.3,.1,-.2),vn(.3,-.35),vn(.5,.45,.9),vn(-.5,.45)])}),gado:()=>({green:!0,geo:sn([...[-.5,-.25,0,.25,.5].flatMap(i=>[Y(.012,.05,.012,dn,i,0,.5),Y(.012,.05,.012,dn,i,0,-.12)]),...[-.12,.19,.5].flatMap(i=>[Y(.012,.05,.012,dn,-.5,0,i),Y(.012,.05,.012,dn,.5,0,i)]),Y(1,.008,.008,dn,0,.035,.5),Y(1,.008,.008,dn,0,.035,-.12),Y(.008,.008,.62,dn,-.5,.035,.19),Y(.008,.008,.62,dn,.5,.035,.19),va(-.3,.1,.4),va(.05,.3,2.2),va(.3,.05,-.6),va(-.15,.38,3.4),va(.33,.36,1.2),va(-.36,.3,-1.4),Y(.3,.16,.22,rn,-.3,0,-.38),Y(.34,.012,.15,ne,-.3,.2,-.44,0,-.6),Y(.34,.012,.15,ne,-.3,.2,-.32,0,.6),Y(.09,.1,.01,ne,-.3,0,-.268),qe(.07,.24,Be,.2,0,-.38),As(.07,.06,Be,.2,.24,-.38)])}),trator:()=>({green:!0,geo:sn([Y(1.05,.012,.72,rf,0,0,.12),...Array.from({length:9},(i,t)=>Y(1,.03,.035,t%3?[.3,.55,.22]:[.62,.66,.24],0,.012,-.2+t*.08)),Y(.13,.05,.07,Wi,.25,.045,.44),Y(.07,.06,.066,Wi,.2,.09,.44),Y(.06,.035,.06,Zn,.2,.11,.44),bi(.045,.02,Qe,.2,.045,.485,10,!1),bi(.045,.02,Qe,.2,.045,.395,10,!1),bi(.025,.018,Qe,.3,.025,.48,8,!1),bi(.025,.018,Qe,.3,.025,.4,8,!1),bi(.03,.02,kn,.2,.045,.497,8,!1),Y(.26,.14,.18,rn,-.34,0,-.42),Y(.3,.012,.13,ne,-.34,.17,-.47,0,-.6),Y(.3,.012,.13,ne,-.34,.17,-.37,0,.6),qe(.06,.22,Be,.3,0,-.42),As(.06,.05,Be,.3,.22,-.42)])}),mercado:()=>({boards:[["SUPERMERCADO",0,.215,-.135,.6]],tint:!0,geo:sn([Y(1.05,.006,.6,Uo,0,0,.22),Y(.9,.2,.34,ne,0,0,-.32),Y(.92,.05,.36,[1.3,1.3,1.3],0,.2,-.32),Y(.4,.1,.01,Zn,0,0,-.148),Y(.2,.012,.1,Be,0,.12,-.1),...[-.36,-.18,0,.18,.36].flatMap(i=>[Y(.006,.007,.16,ne,i+.09,0,.12),Y(.006,.007,.16,ne,i+.09,0,.4)]),Si(rn,-.36,.12,Math.PI/2),Si(Be,0,.12,Math.PI/2),Si(ne,.18,.4,Math.PI/2),Si(Ts,-.18,.4,Math.PI/2),Si(Qe,.36,.12,Math.PI/2),Y(.05,.03,.08,Be,.45,0,-.08),Y(.05,.03,.08,Be,.45,0,0)])}),loja:()=>({boards:[["LOJAS",0,.26,-.165,.3]],geo:sn([...[-.34,0,.34].flatMap((i,t)=>[Y(.32,.2+t*.03,.3,[Up,ne,[.86,.8,.82]][t],i,0,-.32),Y(.32,.012,.12,[rn,Ts,kn][t],i,.13,-.12,0,.35),Y(.22,.09,.01,Zn,i-.02,.015,-.168),Y(.34,.015,.32,Be,i,.2+t*.03,-.32)]),Y(1.05,.008,.2,[.8,.78,.74],0,0,-.04),...[-.4,.4].map(i=>Y(.1,.03,.03,dn,i,.01,.1)),vn(-.2,.3),vn(.25,.36,.9),vn(.5,.2,.8),qe(.006,.2,Qe,0,0,.14,.006,5),ls(.02,[1.4,1.3,1],0,.21,.14)])}),agencia:()=>({boards:[["BANCO",0,.3,-.03,.26]],geo:sn([Y(.74,.03,.5,[.86,.85,.82],0,0,-.26),Y(.7,.03,.44,[.9,.89,.86],0,.03,-.28),Y(.6,.2,.3,ne,0,.06,-.33),...[-.24,-.08,.08,.24].map(i=>qe(.022,.2,ne,i,.06,-.12,.02,10)),Y(.66,.03,.42,[.9,.89,.86],0,.26,-.27),Y(.5,.06,.36,ne,0,.29,-.27),Y(.1,.13,.01,Qe,0,.06,-.178),Y(.08,.14,.06,Be,.42,0,.1),Y(.06,.04,.01,[.3,.8,1.2],.42,.08,.132),vn(-.45,.25),vn(.48,.42,.85),Y(.2,.07,.085,Qe,-.2,.012,.3),Y(.07,.05,.08,Qe,-.065,.012,.3)])}),agua:()=>({green:!0,geo:sn([...[[-.06,-.06],[.06,-.06],[-.06,.06],[.06,.06]].map(([i,t])=>qe(.01,.3,Be,-.35+i,0,-.3+t,.01,5)),qe(.12,.14,[.75,.85,.92],-.35,.3,-.3,.12,12),As(.13,.05,Ts,-.35,.44,-.3,12),...[[.1,-.2],[.38,.1],[-.2,.25]].flatMap(([i,t])=>[qe(.2,.04,Be,i,0,t,.2,16),qe(.18,.045,[.22,.55,.7],i,0,t,.18,16),Y(.38,.01,.015,ne,i,.05,t)]),Y(.22,.1,.14,ne,.36,0,-.42),vn(-.5,.5),vn(.5,.48,.85)])}),solar:()=>({green:!0,geo:sn([...[-.36,-.12,.12,.36].flatMap(i=>[-.1,.12,.34].flatMap(t=>[Y(.2,.008,.14,[.1,.18,.42],i,.06,t,0,.5),Y(.2,.002,.004,ne,i,.065,t,0,.5),qe(.006,.06,Be,i,0,t,.006,4)])),Y(.012,.5,.012,Be,-.36,0,-.4,0,0,.07),Y(.012,.5,.012,Be,-.28,0,-.4,0,0,-.07),Y(.26,.01,.01,Be,-.32,.36,-.4),Y(.18,.01,.01,Be,-.32,.44,-.4),Y(.1,.008,.008,Be,-.32,.2,-.4),Y(.2,.09,.12,ne,.34,0,-.42)])}),pedagio:()=>({boards:[["PED\xC1GIO",0,.27,.13,.4]],geo:sn([Y(1.15,.006,.5,Uo,0,0,.1),Y(.95,.03,.28,ne,0,.22,.1),Y(.97,.03,.3,Oy,0,.2,.1),...[-.36,-.12,.12,.36].flatMap(i=>[Y(.06,.2,.1,ne,i,0,.1),Y(.05,.05,.08,Zn,i,.09,.1),Y(.1,.01,.012,rn,i+.08,.07,.19),Y(.07,.012,.3,kn,i,0,.1)]),Si(ne,-.24,.3,Math.PI/2),Si(Ts,.24,-.08,Math.PI/2),Si(rn,0,.36,Math.PI/2),vn(-.5,-.4),vn(.5,-.4,.9)])}),minerio:()=>({green:!0,geo:sn([Y(1.05,.01,1,[.5,.42,.34],0,0,0),As(.22,.2,[.45,.25,.18],-.28,0,-.25,9),As(.16,.14,[.3,.3,.32],.05,0,-.35,9),As(.18,.16,[.55,.32,.2],.34,0,-.2,9),Y(.14,.03,.1,Qe,-.2,0,.25),Y(.12,.06,.09,kn,-.2,.03,.25),Y(.05,.05,.05,Zn,-.23,.09,.27),Y(.2,.02,.02,kn,-.08,.1,.25,0,0,.5),Y(.14,.018,.018,kn,.05,.1,.25,0,0,-.9),Y(.04,.035,.04,Qe,.09,.02,.25),Y(.22,.06,.12,kn,.3,.05,.3),Y(.16,.05,.13,kn,.27,.11,.3,0,0,.12),Y(.06,.06,.1,kn,.43,.08,.3),Y(.04,.03,.09,Zn,.44,.13,.3),...[[.22,.24],[.22,.36],[.4,.24],[.4,.36]].map(([i,t])=>bi(.04,.03,Qe,i,.04,t,10,!1)),Y(.5,.012,.04,Be,.1,.16,-.05,0,0,.3)])}),eucalipto:()=>({green:!0,geo:sn([...Array.from({length:30},(i,t)=>{let e=-.48+t%6*.14,n=-.48+Math.floor(t/6)*.14;return[qe(.01,.34,[.75,.72,.66],e,0,n,.008,5),ls(.055,[.2,.44,.26],e,.37,n)]}),...[0,1,2,3].map(i=>bi(.022,.4,dn,.05,.022,.3+i*.046)),...[0,1,2].map(i=>bi(.022,.4,dn,.05,.062,.323+i*.046)),bi(.022,.4,dn,.05,.1,.346),Y(.2,.06,.08,rn,.38,.03,.4),Y(.06,.07,.078,ne,.5,.03,.4),Y(.2,.05,.06,dn,.36,.09,.4)])})},By=[["bar",/ambev|cervej|bebidas/i],["aviao",/\bazul\b|gol linhas|a[eé]re[ao]|embraer|latam/i],["locadora",/localiza|movida|unidas|loca[cç][aã]o de ve/i],["trem",/\brumo\b|\bmrs\b|ferrovi|\bvli\b/i],["pedagio",/motiva|\bccr\b|ecorodovias|rodovi|arteris|triunfo part/i],["escola",/educa|cogna|yduqs|[aâ]nima|ser educacional|cruzeiro do sul|vitru|ensino|kroton|bahema/i],["farmacia",/drogasil|\braia\b|pague menos|panvel|dimed|d1000|farm[aá]c|profarma|hypera|blau/i],["hospital",/rede d.or|hapvida|\bdasa\b|fleury|oncocl|mater dei|kora sa|hospital|serv.*m[eé]dic|qualicorp|odontoprev/i],["gado",/\bjbs\b|marfrig|minerva|\bbrf\b|frigor|carnes/i],["eucalipto",/suzano|klabin|irani|dexco|eucatex|papel e celulose|madeira/i],["trator",/\bslc\b|brasilagro|boa safra|3tentos|terra santa|jalles|s[aã]o martinho|a[cç][uú]car|agr[ií]c|agropecu|ra[ií]zen/i],["mercado",/assa[ií]|carrefour|p[aã]o de a[cç][uú]car|\bgpa\b|grupo mateus|supermerc|atacad/i],["loja",/magazine|renner|americanas|c&a|riachuelo|guararapes|arezzo|azzas|vivara|marisa|casas bahia|lojas|natura|grendene|alpargatas|com[eé]rcio/i],["agua",/sabesp|copasa|sanepar|saneamento|aegea|igu[aá] san|casan|corsan|[aá]gua e/i],["minerio",/\bvale\b|minera[cç]|csn|usiminas|gerdau|sider[uú]rg|metal[uú]rg/i],["posto",/petrobras|vibra|ultrapar|cosan|ipiranga|petr[oó]leo|combust|\bprio\b|brava|petroreconcavo/i],["agencia",/\bbanco\b|bradesco|ita[uú]|santander|\bbtg\b|banrisul|\bpan\b|\binter\b|financeir/i],["solar",/energia|el[eé]tric|eletro|\bcemig\b|\bcopel\b|engie|\bcpfl\b|equatorial|energisa|neoenergia|auren|eneva|light|\baxia\b/i]];function zp(i){let t=`${i.n} ${i.st||""}`;for(let[e,n]of By)if(n.test(t))return e;return null}function kp(i){return Fp[i]?Fp[i]():null}var Cs={umbrella:i=>sn([Op(i,0,0,1.6),Y(.16,.012,.06,ne,.14,.03,.06,.3),Y(.04,.05,.06,ne,.07,.03,.09,.3,0,.5),Y(.16,.012,.06,ne,-.14,.03,.04,-.3),Y(.04,.05,.06,ne,-.07,.03,.07,-.3,0,-.5)]),towel:()=>sn([Y(.2,.004,.1,ne,0,0,0),Y(.05,.005,.1,[.5,.5,.5],0,0,0)]),kiosk:i=>sn([Y(.44,.13,.26,dn,0,0,0),Y(.46,.012,.28,[.8,.7,.5],0,.13,0),...[-.2,.2].flatMap(t=>[qe(.008,.3,dn,t,0,.12,.008,5),qe(.008,.3,dn,t,0,-.12,.008,5)]),...[-.18,-.06,.06,.18].map((t,e)=>Y(.12,.012,.36,e%2?ne:i,t,.3,0)),Y(.1,.04,.06,[.3,.7,.3],-.1,.142,.05),ls(.03,[.3,.55,.2],.08,.17,.05),ls(.03,[.3,.55,.2],.14,.17,.02),qe(.016,.42,[.6,.48,.34],.38,0,-.05,.012,6),...[0,1,2,3,4].map(t=>Y(.2,.006,.04,[.2,.5,.22],.38+.08*Math.cos(t*1.257),.41,-.05+.08*Math.sin(t*1.257),-t*1.257,0,-.35))]),board:i=>sn([Y(.035,.34,.012,i,0,.02,0,0,.12),Y(.012,.03,.03,Qe,0,0,.01)]),statue:()=>sn([Y(.3,1,.36,ne,-.2),Y(.3,1,.36,ne,.2),Y(.86,.95,.46,ne,0,1),Y(.2,.9,.28,ne,-.55,1.05),Y(.2,.9,.28,ne,.62,1.75,0,0,0,-.35),Y(.2,.16,.2,ne,0,1.95),ls(.28,ne,0,2.36,0),ls(.285,ne,0,2.43,-.05),Y(.9,.5,.06,ne,0,1.35,.24),Y(.1,.55,.03,ne,0,1.3,.285)]),pedestal:()=>sn([Y(1.9,.14,1.9,[.8,.79,.76],0,0,0),Y(1.5,.14,1.5,[.86,.85,.82],0,.14,0),Y(1.15,.7,1.15,[.9,.89,.86],0,.28,0),Y(1.3,.1,1.3,[.86,.85,.82],0,.98,0)])};var pn=(i,t,e)=>Math.max(t,Math.min(e,i)),zo=(i,t,e)=>{let n=pn((e-i)/(t-i),0,1);return n*n*(3-2*n)},Hp=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Xi=(i,t,e)=>i+(t-i)*e,$i=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},Gp=i=>i.t==="c"?i.mc?1.8+1.25*Math.log10(1+i.mc/1e8):1.8:i.t==="s"?1.2:i.v?1+.8*Math.log10(1+i.v/1e8):1;function zy(i){return i.t==="c"?i.mc?"tower":"block":i.t==="s"?"sub":i.t==="p"?"pawn":i.c==="fund"||i.c==="pen"||i.c==="gov"?"inv":"tile"}var Vp=`float hash21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x), mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y); }`;function Wp(i,t,e={}){let{palette:n,accent:s="#3cf0b4",reduced:r=!1,fixedQuality:a=!1}=e,o=t.nodes.length,l=t.mapa,c=Math.min(innerWidth,innerHeight)<700,h=new ue(s),d=100/l.W,u=100,f=l.H*d,m=E=>E*d-u/2,y=E=>E*d-f/2,g=.02,p=1.6,M={},A=(E,D=new ue)=>(D.set(E).getHSL(M),D.setHSL(M.h,Math.min(1,M.s*1.2+.06),M.l*.86)),_=new rh({canvas:i,antialias:!0,powerPreference:"high-performance"}),b=Math.min(devicePixelRatio||1,c?1.75:1.5);_.setPixelRatio(b),_.toneMapping=vr,_.toneMappingExposure=1,_.outputColorSpace=Ln,_.shadowMap.enabled=!0,_.shadowMap.type=gr,_.shadowMap.autoUpdate=!1;let w=3,I=new ue(13886702),x=new bs;x.background=I,x.fog=new or(I,160,520);let C=new Tn(32,1,.3,1600),B=new Js(_);x.environment=B.fromScene(new ma,.04).texture,x.environmentIntensity=.3;let $=new Xs(16773597,2.75);$.position.set(-75,105,62),$.castShadow=!0,$.shadow.mapSize.set(c?2048:4096,c?2048:4096),Object.assign($.shadow.camera,{left:-u*.66,right:u*.66,top:f*.85,bottom:-f*.85,near:10,far:360}),$.shadow.bias=-3e-4,$.shadow.normalBias=.035,$.shadow.radius=5,$.shadow.blurSamples=16,x.add($,$.target),x.add(new pr(14083319,10132100,.66));let z=null,K=null;try{let E=new Nn(4,4,{type:qn,samples:2});z=new hh(_,E),z.setPixelRatio(b),z.addPass(new uh(x,C)),K=new xa({uniforms:{tDiffuse:{value:null},uAmt:{value:0},uRes:{value:new Ut(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uAmt; uniform vec2 uRes; varying vec2 vUv;
        void main(){ float k = smoothstep(0.16, 0.5, abs(vUv.y - 0.5)) * uAmt; if (k < 0.01) { gl_FragColor = texture2D(tDiffuse, vUv); return; }
          vec4 c = vec4(0.0); for (int i = 0; i < 12; i++) { float a = float(i) * 2.39996, r = sqrt((float(i) + 0.5) / 12.0) * k; c += texture2D(tDiffuse, vUv + vec2(cos(a), sin(a)) * r / uRes); }
          gl_FragColor = c / 12.0; }`}),z.addPass(K),z.addPass(new fh)}catch{z=null}let F=new Array(o),q=new Float32Array(o),ht=new Float32Array(o),j=new Float32Array(o),yt=new Float32Array(o),rt=new Float32Array(o),gt=new Float32Array(o),Mt=new Float32Array(o),Ct=new Float32Array(o),mt=Uint8Array.from(l.sky||new Array(o).fill(0)),fe=new Uint8Array(o),Re=new Uint8Array(o),Ue=12.5,dt=3.1;for(let E=0;E<o;E++){let D=t.nodes[E];F[E]=zy(D),Re[E]=F[E]==="inv"?1:0,q[E]=m(l.x[E]),j[E]=y(l.y[E]);let V=l.lot&&l.lot[E]||0;if(fe[E]=V>0?1:0,Ct[E]=V*d,fe[E]){let k=Gp(D)*1.24*d,tt=$i(E);gt[E]=k*(.86+.3*tt),Mt[E]=k*(1.14-.3*tt),yt[E]=k*.6,F[E]==="tower"?rt[E]=.9+10.2*Math.pow(pn(Math.log10(D.mc/2e8)/Math.log10(4e3),0,1),1.5):rt[E]=k*(F[E]==="block"?.42+.3*$i(E+7):.3),ht[E]=g}else mt[E]?(yt[E]=Gp(D)*.5*d+.12,rt[E]=yt[E]*2.3,ht[E]=Ue+(mt[E]-1)*dt+($i(E)-.5)*1.4):(yt[E]=(.5+.1*Math.min(4,Math.log10(1+(D.v||0)/1e8)))*d,rt[E]=yt[E]*(F[E]==="tile"?1.3:2.1),ht[E]=g)}let bt=E=>ht[E]+rt[E],Dt=l.plates.map((E,D)=>({...E,j:D,col:A(n.sector(E.c)),x0:m(E.x0),x1:m(E.x1),z0:y(E.y0),z1:y(E.y1)})),H=(E,D)=>{let V=1e9;for(let k of Dt){let tt=Math.abs(E-(k.x0+k.x1)/2)-(k.x1-k.x0)/2,vt=Math.abs(D-(k.z0+k.z1)/2)-(k.z1-k.z0)/2;V=Math.min(V,Math.hypot(Math.max(tt,0),Math.max(vt,0))+Math.min(Math.max(tt,vt),0))}return V},ut=20261126,lt=()=>{ut|=0,ut=ut+1831565813|0;let E=Math.imul(ut^ut>>>15,1|ut);return E=E+Math.imul(E^E>>>7,61|E)^E,((E^E>>>14)>>>0)/4294967296},Ft=new Set(["util","oil","agro","ind","base","log","tech","imob","saude","cons"]),Vt=[],Ot=[],Bt=[],Nt=[],Ht={x0:-20,x1:20,z:f/2+8.2,r:2.4},he=(E,D)=>Math.hypot(E-pn(E,Ht.x0,Ht.x1),D-Ht.z)-Ht.r,Se=[];for(let E=0;E<o;E++)fe[E]&&Se.push(E);for(let E of Dt)for(let D=Math.ceil((E.x0+.25)/p);(D+1)*p<E.x1-.25;D++)for(let V=Math.ceil((E.z0+.25)/p);(V+1)*p<E.z1-.25;V++){let k=(D+.5)*p,tt=(V+.5)*p,vt=!0;for(let pt of Se){let ft=Ct[pt]+.85;if(Math.abs(q[pt]-k)<ft&&Math.abs(j[pt]-tt)<ft&&Math.hypot(q[pt]-k,j[pt]-tt)<ft){vt=!1;break}}vt&&Nt.push({cx:k,cz:tt,p:E})}let oe=[],me={},W={},ve=0,be=E=>W[E]||(W[E]=kp(E)),P=Se.filter(E=>t.nodes[E].t==="c").sort((E,D)=>(t.nodes[D].mc||0)-(t.nodes[E].mc||0));for(let E of P){let D=zp(t.nodes[E]);if(!D||(me[D]||0)>=14)continue;let V=-1,k=ve>Nt.length*.4?-1:6;for(let tt=0;tt<Nt.length;tt++){let vt=Nt[tt];if(vt.used||vt.p.j!==l.plate[E])continue;let pt=Math.hypot(vt.cx-q[E],vt.cz-j[E])+(vt.cz<j[E]-.3&&Math.abs(vt.cx-q[E])<gt[E]+1.2?4:0);pt<k&&(k=pt,V=tt)}if(V<0){let tt=(gt[E]+Mt[E])/2,vt=pn(tt*.8,.8,1.05);if(tt<.8)continue;me[D]=(me[D]||0)+1,oe.push({x:q[E]-gt[E]/2-.66*vt,z:j[E]+Mt[E]*.25,th:D,node:E,plate:l.plate[E],s:vt,inLot:!0});continue}ve++,Nt[V].used=!0,me[D]=(me[D]||0)+1,oe.push({x:Nt[V].cx,z:Nt[V].cz,th:D,node:E,plate:l.plate[E]}),be(D).green&&Ot.push([Nt[V].cx,Nt[V].cz,!1])}for(let E of Nt){if(E.used)continue;let{cx:D,cz:V,p:k}=E,tt=lt()<.12;if(Ot.push([D,V,tt]),!tt&&lt()<.42&&Ft.has(k.c)){Vt.push({x:D,z:V,plate:k.j,sec:k.c,s:1.05+lt()*.25});for(let[pt,ft]of[[-.5,-.5],[.5,-.5],[-.5,.5]])Bt.push([D+pt,V+ft,.5+lt()*.25]);continue}let vt=6+Math.floor(lt()*6);for(let pt=0;pt<vt;pt++){let ft=D+(lt()-.5)*1.1,At=V+(lt()-.5)*1.1;tt&&Math.hypot(ft-D,At-V)<.36||Bt.push([ft,At,.55+lt()*.4])}}for(let E of Se){if(Ct[E]<.45)continue;let D=Ct[E]*.95,V=Math.min(14,Math.floor(Math.PI*D/.42));for(let k=0;k<V;k++){let tt=Math.PI+(k+.5)/V*Math.PI;Bt.push([q[E]+Math.cos(tt)*D,j[E]+Math.sin(tt)*D,.5+lt()*.2])}}for(let E=-u/2-.6;E<=u/2+.6;E+=.46)for(let D=-f/2-.6;D<=f/2+.6;D+=.46){let V=H(E,D);V>.62&&V<1.2&&lt()<.8&&Bt.push([E+(lt()-.5)*.12,D+(lt()-.5)*.12,.6+lt()*.25])}for(let E=0;E<(c?1500:2800);E++){let D=(lt()-.5)*(u+10),V=(lt()-.5)*(f+9);H(D,V)<1.3||he(D,V)<.5||$i(Math.floor(D/3)*31+Math.floor(V/3)*17)<.42||Bt.push([D,V,.6+lt()*.7])}let v=(()=>{let E=c?2048:4096,D=Math.round(E*l.H/l.W),V=E/u,k=document.createElement("canvas");k.width=E,k.height=D;let tt=k.getContext("2d");tt.fillStyle="#000",tt.fillRect(0,0,E,D),tt.globalCompositeOperation="lighter";let vt=At=>(At+u/2)*V,pt=At=>(At+f/2)*V;for(let[At,ee,pe]of Ot)tt.fillStyle="#f00",tt.beginPath(),tt.roundRect(vt(At-.6),pt(ee-.6),1.2*V,1.2*V,.14*V),tt.fill(),pe&&(tt.fillStyle="#00f",tt.beginPath(),tt.ellipse(vt(At),pt(ee),.34*V,.26*V,At,0,6.2832),tt.fill());tt.fillStyle="#0f0";for(let At of Se)tt.beginPath(),tt.arc(vt(q[At]),pt(j[At]),Ct[At]*.93*V,0,6.2832),tt.fill();for(let At of oe)!At.inLot&&!be(At.th).green&&(tt.beginPath(),tt.roundRect(vt(At.x-.6),pt(At.z-.6),1.2*V,1.2*V,.1*V),tt.fill());let ft=new zi(k);return ft.anisotropy=_.capabilities.getMaxAnisotropy(),ft.generateMipmaps=!0,ft.minFilter=vi,ft})(),J=(()=>{let D=Math.round(2048*l.H/l.W),V=2048/u,k=document.createElement("canvas");k.width=2048,k.height=D;let tt=k.getContext("2d");tt.fillStyle="#000",tt.fillRect(0,0,2048,D),tt.fillStyle="#fff",tt.shadowColor="#fff";for(let pt of Se)tt.shadowBlur=Math.max(4,(.16+rt[pt]*.05)*V),tt.fillRect((q[pt]-gt[pt]/2+u/2)*V,(j[pt]-Mt[pt]/2+f/2)*V,gt[pt]*V,Mt[pt]*V);let vt=new zi(k);return vt.generateMipmaps=!0,vt.minFilter=vi,vt})(),it=Dt.length,T={uMask:{value:v},uAo:{value:J},uBeach:{value:new Ke(Ht.x0,Ht.x1,Ht.z,Ht.r)},uTime:{value:0},uSize:{value:new Ut(u,f)},uLand:{value:new Ut(u/2+9,f/2+7)},uRects:{value:Array.from({length:12},(E,D)=>{let V=Dt[D%it];return new Ke((V.x0+V.x1)/2,(V.z0+V.z1)/2,(V.x1-V.x0)/2,(V.z1-V.z0)/2)})},uCols:{value:Array.from({length:12},(E,D)=>{let V=Dt[D%it].col;return new U(V.r,V.g,V.b)})},uFocus:{value:new Ke(0,0,0,0)},uFocusK:{value:0},uDim:{value:0}},N=new fn({color:16777215,roughness:.94,metalness:0,envMapIntensity:.6});N.onBeforeCompile=E=>{Object.assign(E.uniforms,T),E.vertexShader=E.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),E.fragmentShader=E.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWp; uniform sampler2D uMask; uniform sampler2D uAo; uniform vec4 uBeach; uniform float uTime; uniform vec2 uSize; uniform vec2 uLand; uniform vec4 uRects[12]; uniform vec3 uCols[12];
        uniform vec4 uFocus; uniform float uFocusK; uniform float uDim;
        float gWater = 0.0;
        ${Vp}
        float sdRound(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 p = vWp.xz;
        float aa = fwidth(p.x) * 1.2;
        float n1 = vnoise(p * 0.3), n2 = vnoise(p * 1.7);
        vec2 bq = abs(p) - uLand;
        float land = length(max(bq, 0.0)) + min(max(bq.x, bq.y), 0.0) - 4.0 + vnoise(p * 0.07 + 3.1) * 7.0 + n1 * 1.5;
        float bd = length(vec2(p.x - clamp(p.x, uBeach.x, uBeach.y), p.y - uBeach.z)) - uBeach.w;
        land = min(land, bd);
        float d = 1e5; vec3 sec = uCols[0];
        for (int k = 0; k < ${it}; k++) { float dk = sdRound(p - uRects[k].xy, uRects[k].zw, 0.6); if (dk < d) { d = dk; sec = uCols[k]; } }
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
          road *= 1.0 - plaza; walk *= 1.0 - plaza;
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
          float sand = max(smoothstep(-2.0, -1.2, land), 1.0 - smoothstep(-0.9, -0.3, bd));
          col = mix(col, mix(vec3(0.95, 0.9, 0.76), vec3(0.8, 0.74, 0.6), smoothstep(-0.5, 0.0, land)) * (0.97 + 0.05 * n3), sand);
        }
        // setor em foco e escolha: o resto esmaece para um cinza claro
        float inF = step(uFocus.x, p.x) * step(p.x, uFocus.z) * step(uFocus.y, p.y) * step(p.y, uFocus.w);
        float dk = max(uDim, uFocusK * (1.0 - inF));
        col = mix(col, vec3(dot(col, vec3(0.3, 0.59, 0.11))) * 0.82, 0.9 * dk);
        diffuseColor.rgb = col;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.1, gWater);`)};let Z=new Ne(new hi(1800,1800),N);Z.rotation.x=-Math.PI/2,Z.receiveShadow=!0,x.add(Z);let L={uRise:{value:1.4},uDim:{value:0},uTime:{value:0},uAcc:{value:h},uFocus:{value:-1}},G=Array.from({length:o},()=>[]),at=[],Q="attribute float aHL; attribute float aVis; attribute float aDelay; attribute float aPlate; attribute float aSeed; attribute vec3 aSize; attribute float aLit; attribute float aPart; varying float vPart; uniform float uRise; uniform float uTime; uniform float uFocus; varying vec3 vOp; varying vec3 vOn; varying vec3 vSize; varying float vHL; varying float vOther; varying float vSeed; varying float vLit;",wt=`varying float vPart; varying vec3 vOp; varying vec3 vOn; varying vec3 vSize; varying float vHL; varying float vOther; varying float vSeed; varying float vLit; uniform float uDim; uniform float uTime; uniform vec3 uAcc; uniform sampler2D uSign; float gRough = -1.0;
${Vp}`;function Tt(E,D,V,k,tt,vt){let pt=Math.max(1,k.length),ft=new Float32Array(pt),At=new Float32Array(pt).fill(1),ee=new Float32Array(pt),pe=new Float32Array(pt),Rt=new Float32Array(pt),kt=new Float32Array(pt*3),ce=new Float32Array(pt),ie=(Je,Qn,jo=1)=>D.setAttribute(Je,new Bi(Qn,jo));ie("aHL",ft),ie("aVis",At),ie("aDelay",ee),ie("aPlate",pe),ie("aSeed",Rt),ie("aSize",kt,3),ie("aLit",ce);let Ee=Je=>(Object.assign(Je.uniforms,L),Je.vertexShader=Je.vertexShader.replace("#include <common>",`#include <common>
${Q}`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float rise = smoothstep(aDelay, aDelay + 0.35, uRise);
          vPart = aPart; vOp = position; vOn = normal; vSize = aSize; vHL = aHL; vSeed = aSeed; vLit = aLit;
          vOther = uFocus >= 0.0 && abs(uFocus - aPlate) > 0.5 ? 1.0 : 0.0;
          ${vt==="spin"?"float sa = uTime * (1.1 + 1.4 * aSeed) + aSeed * 20.0; transformed.xy = mat2(cos(sa), -sin(sa), sin(sa), cos(sa)) * transformed.xy; transformed *= max(0.001, rise * aVis);":vt==="bld"?"transformed.y *= max(0.001, rise * aVis); transformed.xz *= aVis;":"transformed *= max(0.001, rise * aVis); transformed.y += aLit * 0.22 * sin(uTime * 0.9 + aSeed * 40.0) / max(0.05, aSize.x);"}`),Je);V.onBeforeCompile=Je=>{Ee(Je),Je.fragmentShader=Je.fragmentShader.replace("#include <common>",`#include <common>
${wt}`).replace("#include <color_fragment>",`#include <color_fragment>
          float top = step(0.5, vOn.y);
          float isHL = step(0.01, vHL);
          float dimK = max(uDim * (1.0 - isHL), 0.85 * vOther * (1.0 - isHL));
          vec3 sec = diffuseColor.rgb;
          vec3 glow = vec3(0.0);
          float sdv = floor(vSeed * 997.0) / 997.0;
          ${vt==="bld"?`
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
            // letreiro: na fachada da frente, uma faixa na cor do setor com o nome da companhia
            float cell = abs(vLit) - 1.0;
            if (cell >= 0.0 && vOn.z > 0.5) {
              float tier = vLit < 0.0 && vOp.y > 0.665 ? 1.0 : 0.0;
              float al2 = mix(along, (along - 0.14) / 0.72, tier);
              float bw = (vLit < 0.0 ? 0.72 : 1.0) * vSize.x;
              float bh = clamp(bw * 0.25, 0.06, 0.42);
              vec2 suv = vec2(al2, (hgt - (vSize.y - bh - 0.035)) / bh);
              if (vSize.y > bh * 1.7 && suv.x > 0.0 && suv.x < 1.0 && suv.y > 0.0 && suv.y < 1.0) {
                vec2 auv = vec2((mod(cell, ${It}.0) + suv.x) / ${It}.0, 1.0 - (floor(cell / ${It}.0) + 1.0 - suv.y) / ${Math.max(1,Qt)}.0);
                wall = mix(sec * 0.82, vec3(1.0), texture2D(uSign, auv).r);
                gk = 0.0;
              }
            }
            wall *= mix(0.8, 1.0, smoothstep(0.0, 0.7, hgt));
            float edge = max(abs(vOp.x), abs(vOp.z)) * 2.0 / (abs(vOp.x) > 0.37 || abs(vOp.z) > 0.37 || vOp.y < 0.99 ? 1.0 : 0.72);
            float rim = smoothstep(0.92, 0.95, edge);
            vec3 roof = mix(mix(vec3(0.9, 0.89, 0.87), sec, 0.3), vec3(0.97), rim);
            diffuseColor.rgb = mix(wall, roof, top);
            gRough = mix(mix(0.8, 0.12, gk * (1.0 - crown)), 0.9, top);
            glow = uAcc * vHL * vHL * (0.1 + 1.0 * crown * (1.0 - top) + 0.8 * rim * top + 0.15 * top) * (0.9 + 0.1 * sin(uTime * 3.0));
          }`:`
          // pe\xE7as pequenas: figuras foscas na cor do tipo; nas pessoas, terno, camisa, pele, cabelo e sapatos
          if (vPart > 0.5) {
            float tone = hash21(vec2(sdv * 53.0, 4.0));
            vec3 suit = tone < 0.45 ? vec3(0.02, 0.03, 0.07) : tone < 0.8 ? vec3(0.035, 0.035, 0.045) : vec3(0.09, 0.09, 0.11);
            diffuseColor.rgb = vPart < 1.5 ? suit : vPart < 2.5 ? vec3(0.96) : vPart < 3.5 ? mix(vec3(0.95, 0.78, 0.64), vec3(0.5, 0.34, 0.24), hash21(vec2(sdv * 31.0, 8.0))) : vPart < 4.5 ? mix(vec3(0.1, 0.08, 0.07), vec3(0.5, 0.38, 0.24), step(0.7, hash21(vec2(sdv * 17.0, 2.0)))) : vec3(0.05);
            glow = uAcc * vHL * vHL * 0.5;
          } else {
            diffuseColor.rgb = sec * (0.82 + 0.18 * smoothstep(-0.3, 1.0, vOn.y));
            glow = sec * 0.1 + uAcc * vHL * vHL * 0.8 + sec * isHL * 0.25;
          }`}
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11))) * 0.86, 0.92 * dimK);
          glow *= 1.0 - 0.9 * dimK;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
if (gRough >= 0.0) roughnessFactor = gRough;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += glow;`)},V.customProgramCacheKey=()=>`inst-${vt}`;let ge=new rs(D,V,pt);ge.customDepthMaterial=new dr({depthPacking:Qc}),ge.customDepthMaterial.onBeforeCompile=Je=>Ee(Je),ge.customDepthMaterial.customProgramCacheKey=()=>`instd-${vt}`;let En=new He,Ri=new ue,Pi=new U;return k.forEach((Je,Qn)=>{typeof Je=="number"&&G[Je].push([ge,Qn]),tt(Je,En,Ri,Pi),ge.setMatrixAt(Qn,En),ge.setColorAt(Qn,Ri),pe[Qn]=typeof Je=="number"?l.plate[Je]:Je.plate,Rt[Qn]=$i((typeof Je=="number"?Je:Qn+7001)*3+1),kt.set([Pi.x,Pi.y,Pi.z],Qn*3),ce[Qn]=Pi.w||0}),ge.count=k.length,ge.instanceMatrix.needsUpdate=!0,ge.instanceColor&&(ge.instanceColor.needsUpdate=!0),ge.userData={name:E,idx:typeof k[0]=="number"?k:[],hl:ft,vis:At,delay:ee,geo:D},ge.frustumCulled=!1,vt!=="small"&&(ge.castShadow=!0,ge.receiveShadow=!0),x.add(ge),at.push(ge),ge}let It=10,qt=new Int32Array(o),Qt=Math.ceil(Se.filter(E=>t.nodes[E].t==="c").length/It);L.uSign={value:(()=>{let V=document.createElement("canvas");V.width=It*192,V.height=Math.max(1,Qt)*48;let k=V.getContext("2d");k.fillStyle="#000",k.fillRect(0,0,V.width,V.height),k.fillStyle="#fff",k.textAlign="center",k.textBaseline="middle";let tt=0;for(let pt of Se){let ft=t.nodes[pt];if(ft.t!=="c")continue;let At=String(ft.n).replace(/[\s,]+(S\.?\/?A\.?|Ltda\.?|Holding|Participa[cç][oõ]es|Companhia|Cia\.?)\b.*$/i,"").replace(/\s*\(.*?\)\s*$/,"").slice(0,18).trim().toUpperCase();k.font='700 30px "Inter", "Helvetica Neue", Arial, sans-serif';let ee=k.measureText(At).width,pe=Math.min(1,174/Math.max(1,ee));k.font=`700 ${Math.round(30*pe)}px "Inter", "Helvetica Neue", Arial, sans-serif`,k.fillText(At,(tt%It+.5)*192,(Math.floor(tt/It)+.52)*48),qt[pt]=++tt}let vt=new zi(V);return vt.anisotropy=_.capabilities.getMaxAnisotropy(),vt.generateMipmaps=!0,vt.minFilter=vi,vt})()};let O=new U,St=new oi,et=new U,_t=(E,D,V,k)=>{D.compose(O.set(q[E],g,j[E]),St.identity(),et.set(gt[E],rt[E],Mt[E]));let tt=t.nodes[E];A(tt.t==="c"?n.sector(tt.c):n.kind(tt),V),k.set(gt[E],rt[E],Mt[E]),k.w=qt[E]*(F[E]==="tower"&&rt[E]>3.2?-1:1)},Pt=()=>new fn({color:16777215,roughness:.7,metalness:0,envMapIntensity:2.2}),Et=[],Zt=[];for(let E of Se)(F[E]==="tower"&&rt[E]>3.2?Et:Zt).push(E);Tt("tall",nf(!0),Pt(),Et,_t,"bld"),Tt("low",nf(!1),Pt(),Zt,_t,"bld");let Jt=Pp(),ke=[],De=[];for(let[E,D]of Object.entries(Jt)){let V=[];for(let k of Se)t.nodes[k].t==="c"&&t.nodes[k].c===E&&(!D.top||F[k]==="tower"&&rt[k]>3.2)&&V.push(k);V.length&&Tt(`prop-${E}`,D.geo,Pt(),V,(k,tt,vt,pt)=>{let ft=(gt[k]+Mt[k])/2,At=D.top?ft*.62:ft*(F[k]==="tower"?.95:.8),ee=D.top?q[k]:q[k]+gt[k]/2+At*.52,pe=D.top?g+rt[k]:g,Rt=D.top?j[k]:j[k]+Mt[k]*.12;tt.compose(O.set(ee,pe,Rt),St.identity(),et.set(At,At,At)),A(n.sector(E),vt),pt.set(At,At,At),pt.w=0,D.rotor&&De.push([k,ee+D.rotor[0]*At,pe+D.rotor[1]*At,Rt+D.rotor[2]*At,At]);for(let kt of D.smoke||[])ke.push([k,ee+kt[0]*At,pe+kt[1]*At,Rt+kt[2]*At,At])},"bld")}let mn=De.map(E=>({node:E[0],x:E[1],y:E[2],z:E[3],s:E[4]}));for(let E of Ft){let D=Jt[E],V=Vt.filter(k=>k.sec===E);!D||!V.length||Tt(`decor-${E}`,D.geo.clone(),Pt(),V,(k,tt,vt,pt)=>{tt.compose(O.set(k.x,g,k.z),St.identity(),et.set(k.s,k.s,k.s)),A(n.sector(E),vt),pt.set(k.s,k.s,k.s),pt.w=0,D.rotor&&mn.push({plate:k.plate,x:k.x+D.rotor[0]*k.s,y:g+D.rotor[1]*k.s,z:k.z+D.rotor[2]*k.s,s:k.s});for(let ft of D.smoke||[])ke.push([-1,k.x+ft[0]*k.s,g+ft[1]*k.s,k.z+ft[2]*k.s,k.s])},"bld")}for(let E of[mn.filter(D=>D.node!=null),mn.filter(D=>D.node==null)]){if(!E.length)continue;let D=new Map(E.map(V=>[V.node,V]));Tt("rotor",Ip(),new fn({color:16777215,roughness:.5}),E[0].node!=null?E.map(V=>V.node):E,(V,k,tt,vt)=>{let pt=typeof V=="number"?D.get(V):V;k.compose(O.set(pt.x,pt.y,pt.z),St.identity(),et.set(pt.s,pt.s,pt.s)),tt.setRGB(.95,.95,.95),vt.set(pt.s,pt.s,pt.s),vt.w=0},"spin")}let gn={pawn:[],tile:[],inv:[]};for(let E=0;E<o;E++)fe[E]||gn[F[E]==="pawn"?"pawn":F[E]==="inv"?"inv":"tile"].push(E);let ms=Dp(),Sr=(()=>{let E=new Ze(1.3,1.3,1.3);return E.translate(0,.65,0),E})(),wr=(()=>{let E=new so(1,0);return E.scale(.82,1.15,.82),E.translate(0,1.15,0),E})(),Zi=(E,D,V,k)=>{let tt=yt[E]*(F[E]==="pawn"?1.3:1);D.compose(O.set(q[E],ht[E],j[E]),St.identity(),et.set(tt,tt,tt)),A(n.kind(t.nodes[E]),V),k.set(tt,tt,tt),k.w=mt[E]?1:0},zt=E=>new fn({color:16777215,roughness:.4,metalness:.05,flatShading:!!E});Tt("pawn",ms,zt(),gn.pawn,Zi,"small"),Tt("tile",Sr,zt(),gn.tile,Zi,"small"),Tt("inv",wr,zt(!0),gn.inv,Zi,"small");let Kt={uDim:{value:0},uRise:{value:1}};{let E=new fn({vertexColors:!0,roughness:.92}),D=pt=>{Object.assign(pt.uniforms,Kt),pt.vertexShader=pt.vertexShader.replace("#include <common>",`#include <common>
uniform float uRise;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed *= smoothstep(0.55, 1.2, uRise);`)};E.onBeforeCompile=pt=>{D(pt),pt.fragmentShader=pt.fragmentShader.replace("#include <common>",`#include <common>
uniform float uDim;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11))) * 0.86, 0.9 * uDim);`)};let V=new rs(Lp(),E,Bt.length);V.customDepthMaterial=new dr({depthPacking:Qc}),V.customDepthMaterial.onBeforeCompile=D;let k=new He,tt=new ue,vt=new li;Bt.forEach(([pt,ft,At],ee)=>{let pe=$i(ee*5.1+2);k.compose(O.set(pt,g,ft),St.setFromEuler(vt.set(0,pe*6.28,0)),et.set(At,At*(.85+.4*$i(ee+9)),At)),V.setMatrixAt(ee,k),pe>.97?tt.setRGB(.95,.77,.2):pe>.945?tt.setRGB(.93,.56,.68):pe>.93?tt.setRGB(.62,.5,.82):tt.setHSL(.26+.06*$i(ee*1.3),.36+.14*$i(ee*2.1),.3+.1*$i(ee*3.7)),V.setColorAt(ee,tt)}),V.castShadow=!0,V.receiveShadow=!0,V.frustumCulled=!1,x.add(V)}let _e={uTime:{value:0},uDim:{value:0},uRise:{value:1},uMask:{value:v},uSize:{value:new Ut(u,f)}};function Ae(E,D,V,k=!1){if(!D.length)return;let tt=D.length,vt=new Float32Array(tt*3),pt=new Float32Array(tt*3);E.setAttribute("aMove",new Bi(vt,3)),E.setAttribute("aPh",new Bi(pt,3));let ft=new fn({vertexColors:!0,roughness:.42,metalness:.1,envMapIntensity:1.6});ft.onBeforeCompile=kt=>{Object.assign(kt.uniforms,_e),kt.vertexShader=kt.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aMove; attribute vec3 aPh; uniform float uTime; uniform float uRise; uniform sampler2D uMask; uniform vec2 uSize;`).replace("#include <project_vertex>",`float mt = fract(aPh.x + uTime * aPh.y);
          vec3 ctr = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz + aMove * mt;
          ctr.y += aPh.z * sin(uTime * 1.3 + aPh.x * 30.0);
          float show = smoothstep(0.0, 0.03, mt) * smoothstep(1.0, 0.97, mt) * smoothstep(1.0, 1.3, uRise);
          ${V?"show *= 1.0 - smoothstep(0.3, 0.5, texture2D(uMask, vec2(ctr.x / uSize.x + 0.5, 0.5 - ctr.z / uSize.y)).g);":""}
          vec4 mvPosition = modelViewMatrix * vec4(ctr + mat3(instanceMatrix) * transformed * show, 1.0);
          gl_Position = projectionMatrix * mvPosition;`),kt.fragmentShader=kt.fragmentShader.replace("#include <common>",`#include <common>
uniform float uDim;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11))) * 0.86, 0.9 * uDim);`)},ft.customProgramCacheKey=()=>`mover-${V?1:0}`;let At=new rs(E,ft,tt),ee=new He,pe=new ue,Rt=new li;D.forEach((kt,ce)=>{ee.compose(O.set(kt.x,kt.y||g,kt.z),St.setFromEuler(Rt.set(0,kt.yaw,0)),et.set(kt.s,kt.s,kt.s)),At.setMatrixAt(ce,ee),At.setColorAt(ce,pe.setRGB(...kt.col)),vt.set([kt.mx,0,kt.mz],ce*3),pt.set([kt.ph,kt.sp,kt.bob||0],ce*3)}),At.frustumCulled=!1,k&&(At.castShadow=!0,At.receiveShadow=!0),x.add(At)}{let E=[[.93,.93,.92],[.93,.93,.92],[.72,.74,.77],[.72,.74,.77],[.14,.15,.18],[.14,.15,.18],[.75,.12,.1],[.12,.28,.6],[.95,.74,.12],[.2,.42,.34]],D=[],V=c?9:4.2;for(let tt of Dt)for(let vt=0;vt<2;vt++){let pt=(vt?tt.z0:tt.x0)+.3,ft=(vt?tt.z1:tt.x1)-.3,At=vt?tt.x0:tt.z0,ee=vt?tt.x1:tt.z1,pe=ft-pt;for(let Rt=Math.ceil((At+.5)/p);Rt*p<ee-.5;Rt++)for(let kt of[1,-1]){let ce=Math.max(1,Math.round(pe/V*(.6+lt()*.8))),ie=(.22+lt()*.2)/pe;for(let Ee=0;Ee<ce;Ee++){let ge=Rt*p+kt*(vt?-.043:.043),En=kt>0?pt:ft;D.push({x:vt?ge:En,z:vt?En:ge,yaw:vt?kt>0?-Math.PI/2:Math.PI/2:kt>0?0:Math.PI,s:1,mx:vt?0:kt*pe,mz:vt?kt*pe:0,ph:(Ee+lt()*.7)/ce,sp:ie,col:E[Math.floor(lt()*E.length)]})}}}Ae(Np(),D,!0);let k=[[],[]];for(let tt=0;tt<400&&k[0].length+k[1].length<(c?26:46);tt++){let vt=(lt()-.5)*(u+50),pt=(lt()-.5)*(f+46),ft=Math.abs(vt)-(u/2+9),At=Math.abs(pt)-(f/2+7),ee=Math.hypot(Math.max(ft,0),Math.max(At,0))+Math.min(Math.max(ft,At),0);if(ee<4.8||ee>15)continue;let pe=lt()*6.283,Rt=5+lt()*6,kt=lt()<.62?0:1;k[kt].push({x:vt,z:pt,y:.02,yaw:-pe,s:2.2+lt()*1.8,mx:Math.cos(pe)*Rt,mz:Math.sin(pe)*Rt,ph:lt(),sp:(kt?.03:.012)/Rt*4,bob:.012,col:lt()<.75?[.95,.95,.94]:lt()<.5?[.2,.3,.5]:[.75,.2,.16]})}Ae(sf(0),k[0],!1),Ae(sf(1),k[1],!1)}let $e=(E,D,V=1,k=0,tt=[1,1,1],vt=g)=>({x:E,y:vt,z:D,yaw:k,s:V,mx:0,mz:0,ph:.5,sp:0,col:tt}),je=(E,D,V,k,tt,vt,pt=[1,1,1])=>({x:E,y:g,z:D,yaw:-k,s:V,mx:Math.cos(k)*tt,mz:Math.sin(k)*tt,ph:lt(),sp:vt/tt,col:pt}),xn=[],Sn=(E,D,V,k,tt)=>xn.push({word:E,x:D,y:V,z:k,w:tt}),Hn=[[[.85,.2,.18],[.1,.12,.2]],[[.2,.42,.8],[.9,.9,.88]],[[.96,.8,.2],[.2,.4,.3]],[[.95,.95,.93],[.75,.2,.2]]],wn=Hn.map(()=>[]);{let E={};for(let Rt of oe)(E[Rt.th]||(E[Rt.th]=[])).push(Rt);for(let[Rt,kt]of Object.entries(E)){let ce=be(Rt);Ae(ce.geo,kt.map(ie=>$e(ie.x,ie.z,ie.s||1.02)),!1,!0);for(let ie of kt){let Ee=ie.s||1.02;for(let[ge,En,Ri,Pi,Je]of ce.boards||[])Sn(ge,ie.x+En*Ee,g+Ri*Ee,ie.z+Pi*Ee+.004,Je*Ee);for(let ge=0;ge<(ce.kids||0);ge++){let En=lt()*6.283;wn[ge%4].push(je(ie.x+(lt()-.5)*.7*Ee,ie.z+(.1+lt()*.35)*Ee,.42*Ee,En,(.35+lt()*.4)*Ee,.3+lt()*.25))}}}let D=["COCO GELADO","A\xC7A\xCD","PASTEL","SORVETE","CAIPIRINHA","MILHO VERDE","\xC1GUA DE COCO","TAPIOCA"],V=[[],[]],k=0;for(let Rt=-18;Rt<=18;Rt+=4.5){if(Math.abs(Rt)<3)continue;let kt=Ht.z-1.45,ce=1.7;V[k%2].push($e(Rt,kt,ce)),Sn(D[k%D.length],Rt,g+.4*ce,kt+.2*ce,.42*ce);for(let ie=0;ie<3;ie++)wn[(k+ie)%4].push($e(Rt-.3+ie*.3+lt()*.1,kt+.5+lt()*.2,.7,Math.PI+(lt()-.5)));k++}Ae(Cs.kiosk([.85,.2,.16]),V[0],!1,!0),Ae(Cs.kiosk([.15,.4,.75]),V[1],!1,!0);let tt=[[.85,.2,.16],[.96,.8,.2],[.15,.45,.8],[.95,.95,.93]],vt=tt.map(()=>[]),pt=[],ft=[[],[]];for(let Rt=0;Rt<110;Rt++){let kt=-21+lt()*42,ce=Ht.z-.7+lt()*2.3;if(Math.abs(kt)<2.4&&ce<Ht.z+1.2)continue;let ie=lt();ie<.5?(vt[Rt%4].push($e(kt,ce,1.5,lt()*6.28)),lt()<.7&&wn[Rt%4].push($e(kt+.25,ce+.15,.7,lt()*6.28))):ie<.75?pt.push($e(kt,ce,1.4,lt()*6.28,[[.9,.3,.3],[.3,.6,.9],[.98,.85,.3],[.4,.8,.6]][Rt%4])):ie<.85?ft[Rt%2].push($e(kt,ce,1.5,lt()*6.28)):wn[Rt%4].push($e(kt,ce,.7,lt()*6.28))}tt.forEach((Rt,kt)=>Ae(Cs.umbrella(Rt),vt[kt],!1,!0)),Ae(Cs.towel(),pt,!1),Ae(Cs.board([.95,.75,.2]),ft[0],!1,!0),Ae(Cs.board([.2,.7,.8]),ft[1],!1,!0);for(let Rt=0;Rt<22;Rt++)wn[Rt%4].push(je(-19+lt()*30,Ht.z+1.5+lt()*.5,.7,lt()<.5?0:Math.PI,5+lt()*5,.25+lt()*.2));for(let Rt=0;Rt<12;Rt++)wn[Rt%4].push(je(-18+lt()*36,Ht.z+lt()*1.2,.45,lt()*6.28,.8+lt(),.5+lt()*.3));Hn.forEach(([Rt,kt],ce)=>Ae(Bp(Rt,kt,ce%2?[.45,.32,.18]:[.12,.09,.07]),wn[ce],!1));let At=0,ee=Ht.z-.2;Ae(Cs.pedestal(),[$e(At,ee,1)],!1,!0);let pe=new Ne(Cs.statue(),new fn({color:16762938,metalness:.45,roughness:.32,envMapIntensity:3,emissive:8016384,emissiveIntensity:.55}));pe.position.set(At,g+1.08,ee),pe.scale.setScalar(.92),pe.castShadow=!0,x.add(pe),Sn("FELIPE PASSARO",At,g+.74,ee+.585,1.02),Sn("CRIADOR DESTE MUNDO",At,g+.46,ee+.585,.86)}if(xn.length){let E=[...new Set(xn.map(ie=>ie.word))],D=4,V=Math.ceil(E.length/D),k=256,tt=64,vt={"FELIPE PASSARO":"#2a2110","CRIADOR DESTE MUNDO":"#2a2110","CERVEJA GELADA":"#c98a12",BAR:"#7a2318",POSTO:"#0d6b3c","GASOLINA \xB7 ETANOL":"#0d6b3c",ESCOLA:"#1f4fa3",FARM\u00C1CIA:"#0e7a48","PRONTO-SOCORRO":"#b3261e",AEROPORTO:"#1c2f4d",SUPERMERCADO:"#c2371f",PED\u00C1GIO:"#c2671a"},pt=document.createElement("canvas");pt.width=D*k,pt.height=V*tt;let ft=pt.getContext("2d");ft.textAlign="center",ft.textBaseline="middle",E.forEach((ie,Ee)=>{let ge=Ee%D*k,En=Math.floor(Ee/D)*tt;ft.fillStyle=vt[ie]||"#17335f",ft.fillRect(ge,En,k,tt),ft.strokeStyle="rgba(255,255,255,.85)",ft.lineWidth=3,ft.strokeRect(ge+4,En+4,k-8,tt-8),ft.fillStyle=ie.startsWith("FELIPE")||ie.startsWith("CRIADOR")?"#f3cf6b":"#fff",ft.font='800 34px "Inter", "Helvetica Neue", Arial, sans-serif';let Ri=Math.min(1,(k-30)/Math.max(1,ft.measureText(ie).width));ft.font=`800 ${Math.round(34*Ri)}px "Inter", "Helvetica Neue", Arial, sans-serif`,ft.fillText(ie,ge+k/2,En+tt/2+2)});let At=new zi(pt);At.colorSpace=Ln,At.anisotropy=_.capabilities.getMaxAnisotropy();let ee=new hi(1,.25),pe=new Float32Array(xn.length*2);ee.setAttribute("aOff",new Bi(pe,2));let Rt=new fn({map:At,roughness:.6,side:gi});Rt.onBeforeCompile=ie=>{ie.vertexShader=ie.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aOff;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = uv * vec2(${(1/D).toFixed(5)}, ${(1/V).toFixed(5)}) + aOff;`)};let kt=new rs(ee,Rt,xn.length),ce=new He;xn.forEach((ie,Ee)=>{let ge=E.indexOf(ie.word);ce.compose(O.set(ie.x,ie.y,ie.z),St.identity(),et.set(ie.w,ie.w,1)),kt.setMatrixAt(Ee,ce),pe.set([ge%D/D,1-(Math.floor(ge/D)+1)/V],Ee*2)}),kt.frustumCulled=!1,x.add(kt)}let si=[];for(let E=0;E<o;E++)fe[E]||si.push(E);let fi={uDim:{value:0},uPx:{value:1},uRise:{value:1},uTime:{value:0},uFocus:{value:-1}},tr=(()=>{let E=si.length,D=new Float32Array(E*3),V=new Float32Array(E*3),k=new Float32Array(E),tt=new ue,vt=new Xe;si.forEach((At,ee)=>{D.set([q[At],ht[At]+rt[At]*.55,j[At]],ee*3),A(n.kind(t.nodes[At]),tt),V.set([tt.r,tt.g,tt.b],ee*3),k[ee]=mt[At]?yt[At]*5:yt[At]*2.4}),vt.setAttribute("position",new Ce(D,3)),vt.setAttribute("aCol",new Ce(V,3)),vt.setAttribute("aSize",new Ce(k,1)),vt.setAttribute("aHL",new Ce(new Float32Array(E),1)),vt.setAttribute("aVis",new Ce(new Float32Array(E).fill(1),1)),vt.setAttribute("aSky",new Ce(Float32Array.from(si,At=>mt[At]?1:0),1)),vt.setAttribute("aPlate",new Ce(Float32Array.from(si,At=>l.plate[At]),1));let pt=new on({uniforms:fi,transparent:!0,depthWrite:!1,vertexShader:`attribute vec3 aCol; attribute float aSize; attribute float aHL; attribute float aVis; attribute float aSky; attribute float aPlate; uniform float uPx; uniform float uDim; uniform float uRise; uniform float uTime; uniform float uFocus; varying vec3 vCol; varying float vA; varying float vSky;
        void main(){ vec3 p = position; p.y += aSky * 0.22 * sin(uTime * 0.9 + p.x * 3.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
          float px = aSize * uPx / -mv.z;
          gl_PointSize = clamp(px, aSky > 0.5 ? 6.0 : 2.2, 80.0) * aVis;
          float isHL = step(0.01, aHL);
          float other = uFocus >= 0.0 && abs(uFocus - aPlate) > 0.5 ? 1.0 : 0.0;
          float dimK = max(uDim, 0.8 * other) * (1.0 - isHL);
          // de perto a pe\xE7a aparece e a marca some
          float nearK = smoothstep(2.6, 5.5, px);
          vA = (aSky > 0.5 ? 0.3 + 0.3 * isHL : mix(0.9, 0.0, nearK)) * (1.0 - 0.8 * dimK) * aVis * smoothstep(0.7, 1.3, uRise);
          vCol = aCol; vSky = aSky; }`,fragmentShader:"varying vec3 vCol; varying float vA; varying float vSky; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = vSky > 0.5 ? pow(max(0.0, 1.0 - d), 1.6) : 1.0 - smoothstep(0.6, 1.0, d); gl_FragColor = vec4(mix(vCol, vec3(1.0), vSky * 0.5), a * vA); }"}),ft=new Jr(vt,pt);return ft.frustumCulled=!1,ft.renderOrder=2,x.add(ft),ft})(),Ls=new Int32Array(o).fill(-1);si.forEach((E,D)=>{Ls[E]=D});let jn={uTime:{value:0},uPx:{value:1},uDim:{value:0},uRise:{value:1}};if(ke.length&&!r){let D=ke.length*5,V=new Float32Array(D*3),k=new Float32Array(D*2);ke.forEach((pt,ft)=>{for(let At=0;At<5;At++)V.set([pt[1],pt[2],pt[3]],(ft*5+At)*3),k.set([(At+$i(ft))/5,pt[4]],(ft*5+At)*2)});let tt=new Xe;tt.setAttribute("position",new Ce(V,3)),tt.setAttribute("aPh",new Ce(k,2));let vt=new Jr(tt,new on({uniforms:jn,transparent:!0,depthWrite:!1,vertexShader:"attribute vec2 aPh; uniform float uTime; uniform float uPx; varying float vA; void main(){ float t = fract(uTime * 0.16 + aPh.x); vec3 p = position; p.y += t * 1.5 * aPh.y; p.x += (t * t * 0.7 + 0.06 * sin(uTime + aPh.x * 20.0)) * aPh.y; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((0.12 + 0.5 * t) * aPh.y * uPx / -mv.z, 1.0, 60.0); vA = smoothstep(0.0, 0.12, t) * (1.0 - t) * 0.5; }",fragmentShader:"uniform float uDim; uniform float uRise; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(0.93, 0.94, 0.96), pow(max(0.0, 1.0 - d), 1.4) * vA * (1.0 - 0.7 * uDim) * smoothstep(1.0, 1.35, uRise)); }"}));vt.frustumCulled=!1,x.add(vt)}let Ai=26,Ji=new U,S=new U,X=new U;function ct(E,D){let V=mt[E]?ht[E]+rt[E]*.15:bt(E)*.9,k=bt(D);Ji.set(q[E],V,j[E]),S.set(q[D],k,j[D]);let tt=Math.hypot(q[D]-q[E],j[D]-j[E]);return mt[E]?X.set(Xi(q[D],q[E],.12),Xi(k,V,.82),Xi(j[D],j[E],.12)):fe[E]?X.set((q[E]+q[D])/2,Math.max(V,k)+.7+tt*.3,(j[E]+j[D])/2):X.set(Xi(q[E],q[D],.6),Math.max(V,k)+.12+tt*.22,Xi(j[E],j[D],.6)),new cr(Ji.clone(),X.clone(),S.clone())}let st=(E,D)=>!mt[E]&&!fe[E]&&(l.anchor[E]===D||!fe[D]&&!mt[D]&&l.anchor[E]===l.anchor[D]),nt={uDim:{value:0},uAlpha:{value:1},uFar:{value:1}},Xt=new on({uniforms:nt,transparent:!0,depthWrite:!1,vertexShader:"attribute float aT; attribute vec2 aW; varying float vT; varying vec2 vW; void main(){ vT = aT; vW = aW; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uAlpha; uniform float uDim; uniform float uFar; varying float vT; varying vec2 vW;
      void main(){ float a = smoothstep(0.0, 0.08, vT) * (0.4 + 0.6 * vT); vec3 c = mix(vec3(0.3, 0.38, 0.55), vec3(0.05, 0.5, 0.38), vW.y);
        gl_FragColor = vec4(c, a * vW.x * uAlpha * (1.0 - 0.92 * uDim) * mix(uFar, 1.0, 0.4 * vW.y)); }`}),Yt=null;function Gt(E){let D=[],V=[],k=[],tt=(pt,ft,At,ee,pe,Rt,kt,ce,ie,Ee)=>{D.push(pt,ft,At,ee,pe,Rt),V.push(kt,ce),k.push(ie,Ee,ie,Ee)};for(let[pt,ft,,At]of t.edges||[]){if(E&&(!E[pt]||!E[ft]))continue;let ee=At&1;if(st(pt,ft)){let Ee=q[ft]-q[pt],ge=j[ft]-j[pt],En=Math.hypot(Ee,ge)||1,Ri=fe[ft]?Math.min(.92,Math.max(gt[ft],Mt[ft])*.5/En):0;tt(q[pt],g+.03,j[pt],q[ft]-Ee*Ri,g+.03,j[ft]-ge*Ri,.2,1,ee?.75:.35,ee);continue}let pe=ct(pt,ft),Rt=ee?.5:.2,kt=0,ce=0,ie=0;for(let Ee=0;Ee<=Ai;Ee++){let ge=pe.getPoint(Ee/Ai,Ji);Ee&&tt(kt,ce,ie,ge.x,ge.y,ge.z,(Ee-1)/Ai,Ee/Ai,Rt,ee),kt=ge.x,ce=ge.y,ie=ge.z}}let vt=new Xe;vt.setAttribute("position",new Ce(new Float32Array(D),3)),vt.setAttribute("aT",new Ce(new Float32Array(V),1)),vt.setAttribute("aW",new Ce(new Float32Array(k),2)),Yt?(Yt.geometry.dispose(),Yt.geometry=vt):(Yt=new $a(vt,Xt),Yt.frustumCulled=!1,Yt.renderOrder=1,x.add(Yt))}Gt(null);let te={uTime:{value:0},uGrow:{value:1},uPx:{value:1},uMinPx:{value:b}},ae=new on({uniforms:te,transparent:!0,depthWrite:!1,vertexShader:`attribute float aPhase; attribute float aCtl; attribute float aLen; attribute float aHead; attribute float aRad; attribute vec3 aCenter; uniform float uPx; uniform float uMinPx;
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
      }`}),Me=new Ne(new Xe,ae);Me.frustumCulled=!1,Me.renderOrder=3,x.add(Me);let Pe=1,se=new U(0,1,0),Ve=new oi;function un(E){if(Me.geometry.dispose(),!E.length){Me.geometry=new Xe;return}let D=(tt,vt,pt)=>tt.setAttribute(vt,new Ce(new Float32Array(tt.attributes.position.count).fill(pt),1)),V=(tt,vt,pt,ft)=>{let At=tt.attributes.position.count,ee=new Float32Array(At*3);for(let pe=0;pe<At;pe++)ee.set([vt,pt,ft],pe*3);tt.setAttribute("aCenter",new Ce(ee,3))},k=[];E.slice(0,320).forEach(([tt,vt,pt,ft],At)=>{let ee=ct(tt,vt),pe=ee.getLength(),Rt=(.035+.075*Math.sqrt(pn((ft>0?ft:pt?50:8)/100,.02,1)))*(c?1.25:1),kt=new fr(ee,pn(Math.round(pe*2.2),14,80),Rt,6,!1);D(kt,"aPhase",At*.137%1),D(kt,"aCtl",pt?1:0),D(kt,"aLen",pe),D(kt,"aHead",0),D(kt,"aRad",Rt),V(kt,0,0,0),k.push(kt);let ce=new ki(Rt*2.6,Rt*7,10,1),ie=ee.getTangent(.985,Ji).normalize();ce.translate(0,Rt*3.5,0),ce.applyQuaternion(Ve.setFromUnitVectors(se,ie));let Ee=ee.getPoint(1,S);ce.translate(Ee.x-ie.x*Rt*7,Ee.y-ie.y*Rt*7,Ee.z-ie.z*Rt*7),D(ce,"aPhase",0),D(ce,"aCtl",pt?1:0),D(ce,"aLen",pe),D(ce,"aHead",1),D(ce,"aRad",Rt),V(ce,Ee.x,Ee.y,Ee.z),k.push(ce)}),Me.geometry=Mi(k),k.forEach(tt=>tt.dispose()),Pe=0}let Ge={v:0,to:0},ze={v:0,to:0,plate:-1};function Pn(E,D=.7){for(let k of at)k.userData.hl.fill(0);let V=tr.geometry.attributes.aHL;if(V.array.fill(0),E)for(let[k,tt]of E){for(let vt of G[k])vt[0].userData.hl[vt[1]]=tt;Ls[k]>=0&&(V.array[Ls[k]]=tt)}for(let k of at)k.userData.geo.attributes.aHL.needsUpdate=!0;V.needsUpdate=!0,Ge.to=E?D:0}function jt(E){if(ze.plate=E,ze.to=E>=0?1:0,L.uFocus.value=fi.uFocus.value=E,E>=0){let D=Dt[E];T.uFocus.value.set(D.x0,D.z0,D.x1,D.z1)}}function Un(E){for(let V of at){let{idx:k,vis:tt,geo:vt}=V.userData;k.forEach((pt,ft)=>{tt[ft]=E[pt]?1:0}),vt.attributes.aVis.needsUpdate=!0}let D=tr.geometry.attributes.aVis;si.forEach((V,k)=>{D.array[k]=E[V]?1:0}),D.needsUpdate=!0,Gt(E),w=2}let we={t0:0,dur:0},Fn=0;function di(E=5200){let D=Se[0];for(let k of Se)rt[k]>rt[D]&&(D=k);for(let k of at){let{idx:tt,delay:vt,geo:pt}=k.userData;tt.forEach((ft,At)=>{vt[At]=pn(Math.hypot(q[ft]-q[D],(j[ft]-j[D])*1.2)/95,0,1)*.85+ft%7*.01}),pt.attributes.aDelay.needsUpdate=!0}L.uRise.value=0,we.t0=performance.now(),we.dur=E*.8;let V={x:ot.tx,z:ot.tz,d:ot.td};ot.x=q[D]+3,ot.z=j[D]+6,ot.d=30,ot.yaw=-.5,ot.fly={a:{x:ot.x,z:ot.z,d:ot.d,yaw:ot.yaw},b:{...V,yaw:0},t0:performance.now(),dur:E,intro:!0},Fn=3}function Ki(){if(ot.fly&&ot.fly.intro){let E=ot.fly;ot.fly=null,ot.tx=E.b.x,ot.tz=E.b.z,ot.td=E.b.d,ot.yaw=0}we.dur&&(we.t0=Math.min(we.t0,performance.now()-we.dur*.7))}let re={W:1,H:1,offX:0,offY:0,toX:0,toY:0,inset:{l:0,r:0,t:0,b:0}},ot={x:0,z:0,d:160,tx:0,tz:0,td:160,vx:0,vz:0,tilt:.5,yaw:0,sway:0,swayK:0,idleAt:performance.now(),fly:null},tn=7,Ci=Math.max(260,f*2.4),Ye=E=>.5+.48*(1-zo(16,120,E));function ji(){ot.tilt=Ye(ot.d);let E=ot.yaw+ot.sway,D=Math.sin(ot.tilt)*ot.d;C.position.set(ot.x+Math.sin(E)*D,Math.cos(ot.tilt)*ot.d,ot.z+Math.cos(E)*D),C.up.set(0,1,0),C.lookAt(ot.x,0,ot.z),x.fog.near=ot.d*1.3,x.fog.far=ot.d*4.4+60}let Xn=new mr,er=new Ut;function Er(E,D,V=g){er.set(E/re.W*2-1,-(D/re.H)*2+1),Xn.setFromCamera(er,C);let k=(V-Xn.ray.origin.y)/Xn.ray.direction.y;return Xn.ray.origin.clone().addScaledVector(Xn.ray.direction,k)}function g0(E,D,V,k,tt=1.08){let vt=C.fov*Math.PI/360,pt=re.inset,ft=Math.max(200,re.W-pt.l-pt.r),At=Math.max(160,re.H-pt.t-pt.b),ee=ft/At,pe=(D-E)*tt,Rt=(k-V)*tt,kt=100;for(let ce=0;ce<4;ce++){let ie=Ye(kt),Ee=Rt/2*(Math.cos(ie)/Math.tan(vt)+Math.sin(ie)),ge=pe/2/(Math.tan(vt)*ee)+Rt/2*Math.sin(ie)*.6;kt=Math.max(Ee,ge)*(re.H/At)}return pn(kt+1,tn,Ci)}function vf(E,D,V,k=1100){ot.fly={a:{x:ot.x,z:ot.z,d:ot.d,yaw:ot.yaw},b:{x:E,z:D,d:V,yaw:0},t0:performance.now(),dur:k},ot.tx=E,ot.tz=D,ot.td=V,ot.vx=ot.vz=0}function Jo(E,D,V,k,tt={}){let vt=Math.max(tt.minD||tn,g0(E,D,V,k,tt.pad||1.12));vf((E+D)/2,(V+k)/2+(tt.dz||0),vt,tt.dur||1100)}function x0(E,D={}){if(!E.length)return;let V=1/0,k=-1/0,tt=1/0,vt=-1/0;for(let ft of E)V=Math.min(V,q[ft]-yt[ft]),k=Math.max(k,q[ft]+yt[ft]),tt=Math.min(tt,j[ft]-yt[ft]-bt(ft)*.75-.6),vt=Math.max(vt,j[ft]+yt[ft]+.4);let pt=D.minSpan||14;if(k-V<pt){let ft=(V+k)/2;V=ft-pt/2,k=ft+pt/2}if(vt-tt<pt*.6){let ft=(tt+vt)/2;tt=ft-pt*.3,vt=ft+pt*.3}Jo(V,k,tt,vt,D)}function v0(E,D={}){let V=Dt[E];Jo(V.x0,V.x1,V.z0-2.5,V.z1,{pad:1.06,...D})}function _0(E=1100){Jo(-u/2-2,u/2+2,-f/2-4,f/2+6,{pad:1.03,dur:E})}function y0(E,D){let V=Er(re.W/2,re.H/2),k=Er(re.W/2+E,re.H/2+D);ot.x-=k.x-V.x,ot.z-=k.z-V.z,ot.tx=ot.x,ot.tz=ot.z,ot.fly=null,_f()}function M0(E,D){let V=Er(re.W/2,re.H/2),k=Er(re.W/2+E*16,re.H/2+D*16);ot.vx=-(k.x-V.x),ot.vz=-(k.z-V.z)}function b0(E,D,V){let k=ot.td,tt=pn(ot.td*E,tn,Ci);if(ot.fly=null,D!=null){let vt=Er(D,V),pt=1-tt/k;ot.tx+=(vt.x-ot.tx)*pt,ot.tz+=(vt.z-ot.tz)*pt}ot.td=tt}function _f(){let E=u/2+8,D=f/2+11;ot.x=pn(ot.x,-E,E),ot.z=pn(ot.z,-D,D),ot.tx=pn(ot.tx,-E,E),ot.tz=pn(ot.tz,-D,D)}function S0(){ot.idleAt=performance.now()}let Ds=new U;function w0(E,D={}){let V=fe[E]&&F[E]==="tower"?pn(L.uRise.value,.3,1):1;return Ds.set(q[E],ht[E]+rt[E]*V,j[E]).project(C),D.x=(Ds.x*.5+.5)*re.W,D.y=(-Ds.y*.5+.5)*re.H,D.f=Ds.z<1&&D.x>-40&&D.x<re.W+40&&D.y>-40&&D.y<re.H+40?1:0,D.r=yt[E],D}function Ko(E,D,V,k={}){return Ds.set(E,D,V).project(C),k.x=(Ds.x*.5+.5)*re.W,k.y=(-Ds.y*.5+.5)*re.H,k.f=Ds.z<1?1:0,k}function yf(){let E=Ko(ot.x,g,ot.z),D=Ko(ot.x+1,g,ot.z);return Math.hypot(D.x-E.x,D.y-E.y)}function E0(E,D,V){er.set(E/re.W*2-1,-(D/re.H)*2+1),Xn.setFromCamera(er,C);let k=-1,tt=1/0,vt=Xn.ray.origin,pt=Xn.ray.direction;for(let Rt=0;Rt<o;Rt++){if(V&&!V[Rt])continue;let kt=fe[Rt]?gt[Rt]/2:yt[Rt]*.85,ce=fe[Rt]?Mt[Rt]/2:yt[Rt]*.85,ie=ht[Rt],Ee=ht[Rt]+rt[Rt]*(fe[Rt]?1:1.25),ge=0,En=tt,Ri=[[vt.x,pt.x,q[Rt]-kt,q[Rt]+kt],[vt.y,pt.y,ie,Ee],[vt.z,pt.z,j[Rt]-ce,j[Rt]+ce]],Pi=!0;for(let[Je,Qn,jo,Ef]of Ri){if(Math.abs(Qn)<1e-9){if(Je<jo||Je>Ef){Pi=!1;break}continue}let Ea=(jo-Je)/Qn,Ta=(Ef-Je)/Qn;if(Ea>Ta){let P0=Ea;Ea=Ta,Ta=P0}if(Ea>ge&&(ge=Ea),Ta<En&&(En=Ta),ge>En){Pi=!1;break}}Pi&&(tt=ge,k=Rt)}if(k>=0)return k;let ft=matchMedia("(pointer: coarse)").matches?16:8,At=yf(),ee={},pe=1/0;for(let Rt=0;Rt<o;Rt++){if(V&&!V[Rt]||(Ko(q[Rt],ht[Rt]+rt[Rt]*.5,j[Rt],ee),!ee.f))continue;let kt=Math.hypot(ee.x-E,ee.y-D),ce=Math.max(2,yt[Rt]*.8*At);if(kt>ft+ce)continue;let ie=kt-ce-(fe[Rt]||mt[Rt]?3:0);ie<pe&&(pe=ie,k=Rt)}return k}function T0(E,D){let V=Er(E,D,0);for(let k of Dt)if(V.x>=k.x0&&V.x<=k.x1&&V.z>=k.z0&&V.z<=k.z1)return k.j;return-1}let Tr={t:0,last:performance.now()};function Mf(E=performance.now()){let D=Math.min(.5,(E-Tr.last)/1e3),V=Math.min(.05,D);if(Tr.last=E,Tr.t+=V,Fn&&!--Fn&&(we.t0=E,ot.fly&&ot.fly.intro&&(ot.fly.t0=E)),ot.fly){let ft=ot.fly,At=pn((E-ft.t0)/ft.dur,0,1),ee=ft.intro?At*At*(3-2*At):Hp(At);ot.x=Xi(ft.a.x,ft.b.x,ee),ot.z=Xi(ft.a.z,ft.b.z,ee),ot.yaw=Xi(ft.a.yaw,ft.b.yaw,ee),ot.d=ft.intro?Math.exp(Xi(Math.log(ft.a.d),Math.log(ft.b.d),ee)):Xi(ft.a.d,ft.b.d,ee),At>=1&&(ot.fly=null,ot.tx=ft.b.x,ot.tz=ft.b.z,ot.td=ft.b.d),ot.idleAt=E}else{ot.x+=ot.vx,ot.z+=ot.vz,ot.tx+=ot.vx,ot.tz+=ot.vz;let ft=Math.pow(.88,V*60);ot.vx*=ft,ot.vz*=ft,Math.abs(ot.vx)+Math.abs(ot.vz)<.001&&(ot.vx=ot.vz=0);let At=Math.min(1,V*9);ot.x+=(ot.tx-ot.x)*At,ot.z+=(ot.tz-ot.z)*At,ot.d+=(ot.td-ot.d)*At,ot.yaw+=(0-ot.yaw)*Math.min(1,V*4),_f()}let k=r?0:zo(2500,7e3,E-ot.idleAt);if(ot.swayK=Xi(ot.swayK,k,Math.min(1,V*1.5)),ot.sway=Math.sin(Tr.t*.16)*.075*ot.swayK,Math.abs(re.toX-re.offX)+Math.abs(re.toY-re.offY)>.3){let ft=1-Math.exp(-D*7);Ch(re.offX+(re.toX-re.offX)*ft,re.offY+(re.toY-re.offY)*ft)}ji(),C.updateMatrixWorld(),Ge.v+=(Ge.to-Ge.v)*(1-Math.exp(-D*5)),ze.v+=(ze.to-ze.v)*(1-Math.exp(-D*5));let tt=Math.min(1,Ge.v*1.25);if(L.uDim.value=fi.uDim.value=jn.uDim.value=tt,Kt.uDim.value=Math.max(tt,ze.v*.6),nt.uDim.value=Math.max(Math.min(1,Ge.v*1.3),ze.v*.7),T.uDim.value=tt,T.uFocusK.value=ze.v,L.uTime.value=te.uTime.value=T.uTime.value=fi.uTime.value=jn.uTime.value=_e.uTime.value=Tr.t,_e.uDim.value=Math.max(tt,ze.v*.6),_e.uRise.value=L.uRise.value,we.dur){let ft=pn((E-we.t0)/we.dur,0,1);L.uRise.value=1.4*ft,w=2,ft>=1&&(we.dur=0,L.uRise.value=1.4)}let vt=L.uRise.value;nt.uAlpha.value=zo(.8,1.35,vt),fi.uRise.value=jn.uRise.value=Kt.uRise.value=vt,nt.uFar.value=.12+.88*(1-zo(24,110,ot.d));let pt=re.H*b/(2*Math.tan(C.fov*Math.PI/360));fi.uPx.value=te.uPx.value=jn.uPx.value=pt,K&&(K.uniforms.uAmt.value=4.2*b*(1-zo(22,90,ot.d))*(1-.6*Math.min(1,Ge.v*1.3))),Pe=Math.min(1,Pe+D*1.25),te.uGrow.value=Hp(Pe)}let On={n:0,acc:0,last:0,skip:45,level:0};function A0(E){let D=E-On.last;if(On.last=E,a||On.level>=3||D>250||D<=0)return;if(On.skip>0){On.skip--;return}if(On.acc+=D,++On.n<40)return;let V=On.acc/On.n;if(On.n=On.acc=0,V<=38)return;On.level++,On.skip=20,On.level===1&&b<=1.3&&(On.level=2);let k=tt=>{b=tt,_.setPixelRatio(b),z&&z.setPixelRatio(b),te.uMinPx.value=b,Sf(re.W,re.H)};On.level===1?k(1.25):On.level===2?z&&(z.dispose(),z=null):b>1&&k(1)}function bf(){A0(performance.now()),w>0&&(_.shadowMap.needsUpdate=!0,w--),z?z.render():_.render(x,C)}function C0(){Mf();try{_.compile(x,C)}catch{}bf(),Tr.last=performance.now()}function Sf(E,D){re.W=Math.max(1,E),re.H=Math.max(1,D),_.setSize(re.W,re.H,!1),z&&(z.setSize(re.W,re.H),K.uniforms.uRes.value.set(re.W*b,re.H*b)),C.aspect=re.W/re.H,C.updateProjectionMatrix(),Ch(re.offX,re.offY)}function wf(E,D,V=!1){re.toX=E,re.toY=D,V&&Ch(E,D)}function R0(E,D,V,k,tt=!1){re.inset={l:E,r:D,t:V,b:k},wf((E-D)/2,(V-k)/2,tt)}function Ch(E,D){re.offX=E,re.offY=D,C.setViewOffset(re.W,re.H,-E,-D,re.W,re.H)}return{renderer:_,scene:x,camera:C,cam:ot,view:re,plates:Dt,update:Mf,render:bf,warmup:C0,resize:Sf,setOffset:wf,setInsets:R0,pan:y0,fling:M0,zoom:b0,flyTo:vf,flyToBox:Jo,flyToNodes:x0,flyToPlate:v0,fitAll:_0,pick:E0,plateAt:T0,project:w0,projectPoint:Ko,pxPerUnit:yf,setHighlight:Pn,setFlows:un,setVisible:Un,setFocusPlate:jt,intro:di,skipIntro:Ki,touch:S0,isInv:Re,isGround:fe,sky:mt,shape:F,X:q,Y:ht,Z:j,R:yt,TOP:g,PLATE_H:0,get scale(){return d},get introK(){return ot.fly&&ot.fly.intro?Fn?0:pn((performance.now()-ot.fly.t0)/ot.fly.dur,0,1):1},dispose(){_.dispose(),B.dispose()}}}var ko=new U;function wi(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;ko.copy(t),ko[n]=0,ko.normalize();let c=.5*a/(a+o),h=1-ko.angleTo(i)/l;return Math.sign(ko[e])===1?h*c:o/(a+o)+c+c*(1-h)}var mh=class i extends Ze{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new U,c=new U,h=new U(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,y=new U,g=.5/a;for(let p=0,M=0;p<d.length;p+=3,M+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:y.set(1,0,0),f[M+0]=wi(y,c,"z","y",r,n),f[M+1]=1-wi(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),f[M+0]=1-wi(y,c,"z","y",r,n),f[M+1]=1-wi(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),f[M+0]=1-wi(y,c,"x","z",r,t),f[M+1]=wi(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),f[M+0]=1-wi(y,c,"x","z",r,t),f[M+1]=1-wi(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),f[M+0]=1-wi(y,c,"x","y",r,t),f[M+1]=1-wi(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),f[M+0]=wi(y,c,"x","y",r,t),f[M+1]=1-wi(y,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Rs=(i,t,e)=>Math.max(t,Math.min(e,i)),af=i=>1-Math.pow(1-i,3),ky=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,of='"Inter", -apple-system, system-ui, sans-serif',Ho='"IBM Plex Mono", ui-monospace, Menlo, monospace';function Xp(i,t){let{W:e,colorOf:n,kindLabel:s,shortName:r,brl:a,pct:o,accent:l="#3cf0b4",onPick:c,onExt:h,canvas:d}=t,u=new ue(l),f=()=>innerWidth<=760,m=new bs;m.background=new ue(461069),m.fog=new or(461069,24,60);let y=new Tn(32,1,.1,200),g=new Js(i);m.environment=g.fromScene(new ma,.04).texture,m.environmentIntensity=.55;let p=new Xs(16774378,2.4);p.position.set(-6,14,7),p.castShadow=!0,p.shadow.mapSize.set(2048,2048),Object.assign(p.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:1,far:50}),p.shadow.bias=-5e-4,p.shadow.normalBias=.02,p.shadow.radius=6,m.add(p,p.target);let M=new Xs(10336511,.5);M.position.set(8,6,-4),m.add(M),m.add(new pr(12109533,724242,.45));let A={uAcc:{value:u},uGlow:{value:0}},_=new fn({color:987929,roughness:.92,metalness:0,envMapIntensity:.2});_.onBeforeCompile=T=>{Object.assign(T.uniforms,A),T.vertexShader=T.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),T.fragmentShader=T.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWp; uniform vec3 uAcc; uniform float uGlow;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 g = abs(fract(vWp.xz / 0.5 + 0.5) - 0.5) * 0.5;
        float dotk = 1.0 - smoothstep(0.012, 0.022, length(g));
        float r = length(vWp.xz);
        diffuseColor.rgb += vec3(0.06, 0.075, 0.09) * dotk * (1.0 - smoothstep(10.0, 40.0, r));
        diffuseColor.rgb *= 1.0 - 0.45 * smoothstep(14.0, 48.0, r);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += uAcc * uGlow * 0.3 * exp(-pow(length(vWp.xz) / 2.0, 2.0));`)};let b=new Ne(new hi(260,260),_);b.rotation.x=-Math.PI/2,b.receiveShadow=!0,m.add(b);let w=new Fi;m.add(w);let I=i.capabilities.getMaxAnisotropy();typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(T,N,Z,L,G){this.moveTo(T+G,N),this.arcTo(T+Z,N,T+Z,N+L,G),this.arcTo(T+Z,N+L,T,N+L,G),this.arcTo(T,N+L,T,N,G),this.arcTo(T,N,T+Z,N,G),this.closePath()});function x(T,N,Z){let L=document.createElement("canvas"),G=2;L.width=T*G,L.height=N*G;let at=L.getContext("2d");at.scale(G,G),Z(at,T,N);let Q=new zi(L);return Q.colorSpace=Ln,Q.anisotropy=Math.min(8,I),Q}function C(T,N,Z,L){let G=String(N).split(/\s+/),at=[],Q="";for(let wt of G){let Tt=Q?`${Q} ${wt}`:wt;T.measureText(Tt).width<=Z||!Q?Q=Tt:(at.push(Q),Q=wt)}if(Q&&at.push(Q),at.length>L){at.length=L;let wt=at[L-1];for(;wt.length>1&&T.measureText(`${wt}\u2026`).width>Z;)wt=wt.slice(0,-1);at[L-1]=`${wt}\u2026`}return at}function B(T,N,Z,L,G,at){T.save(),T.translate(Z,L),T.strokeStyle=at,T.fillStyle=at,T.lineWidth=G*.09,T.lineJoin="round",T.lineCap="round";let Q=G/2;if(T.beginPath(),N==="pf")T.arc(0,-Q*.32,Q*.3,0,Math.PI*2),T.stroke(),T.beginPath(),T.moveTo(-Q*.6,Q*.62),T.quadraticCurveTo(-Q*.6,Q*.05,0,Q*.05),T.quadraticCurveTo(Q*.6,Q*.05,Q*.6,Q*.62),T.stroke();else if(N==="gov"){T.moveTo(-Q*.7,-Q*.2),T.lineTo(0,-Q*.65),T.lineTo(Q*.7,-Q*.2),T.closePath(),T.stroke();for(let wt of[-.45,0,.45])T.beginPath(),T.moveTo(wt*Q,-Q*.1),T.lineTo(wt*Q,Q*.45),T.stroke();T.beginPath(),T.moveTo(-Q*.75,Q*.62),T.lineTo(Q*.75,Q*.62),T.stroke()}else N==="fund"||N==="pen"?(T.arc(0,0,Q*.62,-Math.PI/2,Math.PI*1.25),T.stroke(),T.beginPath(),T.moveTo(0,0),T.lineTo(0,-Q*.62),T.moveTo(0,0),T.lineTo(-Q*.44,Q*.44),T.stroke()):N==="ext"?(T.setLineDash([G*.12,G*.1]),T.strokeRect(-Q*.6,-Q*.45,Q*1.2,Q*.95)):(T.moveTo(-Q*.62,Q*.62),T.lineTo(-Q*.62,-Q*.35),T.lineTo(Q*.05,-Q*.65),T.lineTo(Q*.05,Q*.62),T.moveTo(Q*.05,-Q*.1),T.lineTo(Q*.62,Q*.05),T.lineTo(Q*.62,Q*.62),T.moveTo(-Q*.8,Q*.62),T.lineTo(Q*.8,Q*.62),T.stroke());T.restore()}let $=T=>T.t==="c"?"c":T.t==="p"?"pf":T.t==="s"?"sub":T.c,z={w:2.9,h:.26,d:1.12},K=1.25,F=new mh(z.w,z.h,z.d,5,.12),q=new hi(z.w-.16,z.d-.12);q.rotateX(-Math.PI/2);let ht=(()=>{let T=new Qr,N=z.w/2+.07,Z=z.d/2+.07,L=.2;T.moveTo(-N+L,-Z),T.lineTo(N-L,-Z),T.quadraticCurveTo(N,-Z,N,-Z+L),T.lineTo(N,Z-L),T.quadraticCurveTo(N,Z,N-L,Z),T.lineTo(-N+L,Z),T.quadraticCurveTo(-N,Z,-N,Z-L),T.lineTo(-N,-Z+L),T.quadraticCurveTo(-N,-Z,-N+L,-Z);let G=new hr,at=N-.035,Q=Z-.035,wt=L-.03;G.moveTo(-at+wt,-Q),G.lineTo(at-wt,-Q),G.quadraticCurveTo(at,-Q,at,-Q+wt),G.lineTo(at,Q-wt),G.quadraticCurveTo(at,Q,at-wt,Q),G.lineTo(-at+wt,Q),G.quadraticCurveTo(-at,Q,-at,Q-wt),G.lineTo(-at,-Q+wt),G.quadraticCurveTo(-at,-Q,-at+wt,-Q),T.holes.push(G);let Tt=new ro(T,8);return Tt.rotateX(-Math.PI/2),Tt})(),j=(()=>{let T=document.createElement("canvas");T.width=T.height=128;let N=T.getContext("2d"),Z=N.createRadialGradient(64,64,0,64,64,64);return Z.addColorStop(0,"rgba(255,255,255,1)"),Z.addColorStop(.4,"rgba(255,255,255,.35)"),Z.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=Z,N.fillRect(0,0,128,128),new zi(T)})();function yt(T){return x(320,124,(N,Z,L)=>{N.clearRect(0,0,Z,L);let G=14,at=14,Q=44;N.fillStyle=T.dim?"#e9ebee":"#eef6f2",N.beginPath(),N.roundRect(G,at,Q,Q,10),N.fill(),N.strokeStyle=T.dim?"#cfd3d8":"#bfe7d7",N.lineWidth=1,N.stroke(),B(N,T.kind,G+Q/2,at+Q/2,26,T.dim?"#8a9097":"#1d9c70"),N.fillStyle=T.dim?"#5b616a":"#14171c",N.font=`700 19px ${of}`,N.textBaseline="alphabetic",C(N,T.name,Z-80,2).forEach((Qt,O)=>N.fillText(Qt,70,34+O*22));let Tt=L-18;N.font=`600 14px ${Ho}`,T.pct&&(N.fillStyle=T.ctl?"#0f8f63":"#3d4652",N.fillText(T.pct,14,Tt));let It=T.pct?N.measureText(T.pct).width+12:0;N.font=`500 12px ${Ho}`,N.fillStyle="#6c7480";let qt=T.sub.toUpperCase();for(;qt.length>4&&N.measureText(qt).width>Z-28-It;)qt=qt.slice(0,-2);N.fillText(qt,14+It,Tt),N.fillStyle=T.color,N.fillRect(14,L-8,Math.min(Z-28,40+200*(T.share||0)),2.5)})}function rt(T){return x(256,256,(N,Z,L)=>{let G=N.createRadialGradient(Z/2,L/2,0,Z/2,L/2,Z/2);G.addColorStop(0,"#0f3a32"),G.addColorStop(1,"#08221d"),N.fillStyle=G,N.fillRect(0,0,Z,L),N.textAlign="center";let at=T.tk||T.n.replace(/[^A-Za-zÀ-ÿ0-9 ]/g,"").split(/\s+/).filter(Boolean).slice(0,2).map(wt=>wt[0]).join("").toUpperCase();N.fillStyle="#e9fff6",N.font=`700 ${at.length>5?38:50}px ${of}`,N.fillText(at,Z/2,L/2+4),N.font=`600 15px ${of}`,N.fillStyle="rgba(220,240,232,.78)";let Q=r(T.n);N.fillText(Q.length>24?`${Q.slice(0,22)}\u2026`:Q,Z/2,L/2+36),N.font=`500 12px ${Ho}`,N.fillStyle="rgba(150,230,200,.75)",N.fillText((T.t==="c"?T.mc?a(T.mc):"capital fechado":s(T)).toUpperCase(),Z/2,L/2-44)})}let gt={uTime:{value:0},uAcc:{value:u},uGrow:{value:0}},Mt=new on({uniforms:gt,vertexShader:`attribute float aCtl; attribute float aPhase; attribute float aDir; attribute float aLen; varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying float vCtl; varying float vPhase; varying float vDir; varying float vLen;
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
      }`}),Ct={open:!1,focus:-1,items:[],cables:null,hub:null,t0:0,a:0,aTo:0,hover:null,bounds:null},mt={x:0,z:1.2,dist:15,tx:0,tz:1.2,tdist:15,vx:0,vz:0,yaw:0};function fe(){for(let T of[...w.children])w.remove(T),T.traverse(N=>{if(N.geometry&&N.geometry!==F&&N.geometry!==q&&N.geometry!==ht&&N.geometry.dispose(),N.material)for(let Z of[].concat(N.material))Z.map&&Z.map!==j&&Z.map.dispose(),Z!==Mt&&Z.dispose()});Ct.items=[],Ct.cables=null,Ct.hub=null}function Re(T,N){fe();let Z=e.nodes[T],L=[{key:`w${T}`,w:T,lvl:0}],G=new Map([[T,L[0]]]),at=[],Q=[T];for(let zt=-1;zt>=-4&&Q.length;zt--){let Kt=[];for(let _e of Q){let Ae=e.inc[_e].filter($e=>e.ef[$e]&1||e.ep[$e]>=5||e.ep[$e]<0).sort(($e,je)=>(e.ef[je]&1)-(e.ef[$e]&1)||e.ep[je]-e.ep[$e]).slice(0,zt===-1?14:5);for(let $e of Ae){let je=e.es[$e];if(!G.has(je)){if(zt<-1&&!(e.ef[$e]&1))continue;let xn={key:`w${je}`,w:je,lvl:zt};G.set(je,xn),L.push(xn),Kt.push(je)}G.get(je).lvl<G.get(_e).lvl&&at.push({a:G.get(je),b:G.get(_e),p:e.ep[$e],ctl:e.ef[$e]&1})}}Q=Kt}let wt=e.out[T].filter(zt=>!G.has(e.et[zt])).sort((zt,Kt)=>(e.ef[Kt]&1)-(e.ef[zt]&1)||e.ep[Kt]-e.ep[zt]);for(let zt of wt){let Kt=e.et[zt],_e={key:`w${Kt}`,w:Kt,lvl:1};G.set(Kt,_e),L.push(_e),at.push({a:G.get(T),b:_e,p:e.ep[zt],ctl:e.ef[zt]&1})}for(let zt of N||[]){let Kt=String(zt.cnpj||"").replace(/\D/g,""),_e=e.byCnpj.get(Kt);if(_e!=null&&G.has(_e))continue;let Ae=_e!=null?{key:`w${_e}`,w:_e,lvl:1}:{key:`x${Kt||zt.n}`,ext:zt,lvl:1};_e!=null&&G.set(_e,Ae),L.push(Ae),at.push({a:G.get(T),b:Ae,p:zt.pct,ctl:(zt.pct||0)>50})}for(let zt of L.filter(Kt=>Kt.lvl===1&&Kt.w!=null).slice(0,18))for(let Kt of e.out[zt.w].filter(_e=>e.ef[_e]&1).slice(0,4)){let _e=e.et[Kt];if(G.has(_e))continue;let Ae={key:`w${_e}`,w:_e,lvl:2};G.set(_e,Ae),L.push(Ae),at.push({a:zt,b:Ae,p:e.ep[Kt],ctl:1})}let Tt=L.filter(zt=>zt.lvl>0);if(Tt.length>64){let zt=new Set(Tt.slice(0,64));for(let Kt=L.length-1;Kt>=0;Kt--)L[Kt].lvl>0&&!zt.has(L[Kt])&&L.splice(Kt,1);for(let Kt=at.length-1;Kt>=0;Kt--)(!L.includes(at[Kt].b)||!L.includes(at[Kt].a))&&at.splice(Kt,1)}let qt=Dt(L,at).map(zt=>{let Kt=bt(zt);return w.add(Kt),Kt}),Qt=new Fi,O=K,St=[[0,0],[O,0],[O+.06,.05],[O+.08,.16],[O+.06,.34],[O,.4],[O-.12,.42],[0,.42]].map(([zt,Kt])=>new Ut(zt,Kt)),et=new Ne(new io(St,96),new fn({color:1063475,roughness:.32,metalness:.55}));et.castShadow=!0,et.receiveShadow=!0;let _t=new Ne(new ao(O-.2,.045,16,128),new fn({color:u,emissive:u,emissiveIntensity:1.6,roughness:.3}));_t.rotation.x=-Math.PI/2,_t.position.y=.43;let Pt=rt(Z),Et=new Ne(new Za(O-.3,64),new fn({color:16777215,roughness:.45,metalness:.2,map:Pt,emissive:16777215,emissiveMap:Pt,emissiveIntensity:.35}));Et.rotation.x=-Math.PI/2,Et.position.y=.425;let Zt=new Ne(new hi(6,6),new Ss({map:j,color:u,transparent:!0,opacity:.22,blending:ra,depthWrite:!1}));Zt.rotation.x=-Math.PI/2,Zt.position.y=.012,Qt.add(et,_t,Et,Zt),Qt.userData={key:`w${T}`,w:T,nd:L[0],ring:_t,glow:Zt},w.add(Qt),Ct.hub=Qt;let Jt=Math.max(1,...at.map(zt=>zt.p||0));for(let zt of L){if(zt.lvl===0)continue;let Kt=zt.w!=null?e.nodes[zt.w]:null,_e=zt.lvl<0?at.find(wn=>wn.a===zt):at.find(wn=>wn.b===zt),Ae=!!(_e&&_e.ctl),$e=Kt?{name:r(Kt.n),kind:$(Kt),color:n(Kt),sub:Kt.t==="c"?[Kt.tk,Kt.mc?a(Kt.mc):"capital fechado"].filter(Boolean).join(" \xB7 "):s(Kt),pct:_e&&_e.p>=0?o(_e.p):"",ctl:Ae,share:(_e?.p||0)/Jt}:{name:zt.ext.n,kind:"ext",color:"#8a9097",sub:zt.ext.pais&&!/^brasil$/i.test(zt.ext.pais)?zt.ext.pais:"capital fechado",pct:_e&&_e.p>=0?o(_e.p):"",ctl:Ae,dim:!0,share:(_e?.p||0)/Jt},je=new Fi,xn=new Ne(F,new fn({color:$e.dim?12172739:15264492,roughness:.5,metalness:0}));xn.castShadow=!0,xn.receiveShadow=!0,xn.position.y=z.h/2+.02;let Sn=new Ne(q,new fn({map:yt($e),transparent:!0,roughness:.55}));Sn.position.y=z.h+.022;let Hn=new Ne(ht,new Ss({color:Ae?u:new ue(7306380),transparent:!0,opacity:Ae?.9:.35,blending:ra,depthWrite:!1}));Hn.position.y=.015,je.add(xn,Sn,Hn),je.position.set(zt.x,0,zt.z),je.userData={nd:zt,card:xn,rim:Hn,ctl:Ae,baseY:0},w.add(je),Ct.items.push(je)}let ke=[];if(at.forEach((zt,Kt)=>{let _e=zt.a.lvl===0?null:zt.a,Ae=zt.b.lvl===0?null:zt.b,$e=_e?new U(_e.x,.13,_e.z+(_e.z<(Ae?Ae.z:0)?z.d/2:-z.d/2)):null,je=Ae?new U(Ae.x,.13,Ae.z+(Ae.z<(_e?_e.z:0)?z.d/2:-z.d/2)):null,xn=Ji=>{let S=new U(Ji.x,0,Ji.z).normalize();return new U(S.x*(O+.05),.16,S.z*(O+.05))},Sn=$e||xn(je),Hn=je||xn($e),wn=Hn.z-Sn.z,si=Sn.clone().add(new U(0,0,wn*.5)),fi=Hn.clone().add(new U(0,0,-wn*.5));_e||si.copy(Sn).add(new U(Sn.x*.5,0,Sn.z*.5)),Ae||fi.copy(Hn).add(new U(Hn.x*.5,0,Hn.z*.5));let tr=new jr(Sn,si,fi,Hn),Ls=tr.getLength(),jn=new fr(tr,Math.max(24,Math.round(Ls*10)),zt.ctl?.085:.05,10,!1),Ai=jn.attributes.position.count;jn.setAttribute("aCtl",new Ce(new Float32Array(Ai).fill(zt.ctl?1:0),1)),jn.setAttribute("aPhase",new Ce(new Float32Array(Ai).fill(Kt*.173%1),1)),jn.setAttribute("aDir",new Ce(new Float32Array(Ai).fill(1),1)),jn.setAttribute("aLen",new Ce(new Float32Array(Ai).fill(Ls),1)),ke.push(jn)}),ke.length){let zt=Ue(ke),Kt=new Ne(zt,Mt);Kt.castShadow=!0,w.add(Kt),Ct.cables=Kt}let De=-2,mn=2,gn=-2,ms=2;for(let zt of L)De=Math.min(De,zt.x-z.w/2),mn=Math.max(mn,zt.x+z.w/2),gn=Math.min(gn,zt.z-z.d/2),ms=Math.max(ms,zt.z+z.d/2);for(let zt of qt){let Kt=zt.userData;De=Math.min(De,Kt.x0),mn=Math.max(mn,Kt.x1),gn=Math.min(gn,Kt.z-.3),ms=Math.max(ms,Kt.z+.3)}Ct.bounds={x0:De,x1:mn,z0:gn,z1:ms};let Sr=f()?3:5,wr=L.filter(zt=>zt.lvl===1).sort((zt,Kt)=>zt.z-Kt.z||zt.x-Kt.x).slice(0,Sr*2),Zi=L.filter(zt=>zt.lvl===-1).sort((zt,Kt)=>Kt.z-zt.z||zt.x-Kt.x);Ct.near=L.filter(zt=>zt.lvl===0).concat(f()?Zi.slice(0,Sr*2):Zi,wr)}function Ue(T){let N=0,Z=0;for(let It of T)N+=It.attributes.position.count,Z+=It.index.count;let L=new Xe,G=["position","normal","uv","aCtl","aPhase","aDir","aLen"],at={};for(let It of G)at[It]=new Float32Array(N*T[0].attributes[It].itemSize);let Q=new Uint32Array(Z),wt=0,Tt=0;for(let It of T){for(let Qt of G)at[Qt].set(It.attributes[Qt].array,wt*It.attributes[Qt].itemSize);let qt=It.index.array;for(let Qt=0;Qt<qt.length;Qt++)Q[Tt+Qt]=qt[Qt]+wt;wt+=It.attributes.position.count,Tt+=qt.length,It.dispose()}for(let It of G)L.setAttribute(It,new Ce(at[It],T[0].attributes[It].itemSize));return L.setIndex(new Ce(Q,1)),L}let dt={"-1":"Acionistas diretos","-2":"Quem controla os acionistas","-3":"Controle acima","-4":"Controle final",1:"Participa\xE7\xF5es e controladas",2:"Controladas das controladas"};function bt(T){let N=T.lvl===-1||T.lvl===1,Z=`${dt[T.lvl]||(T.lvl<0?"Controle acima":"Mais abaixo")} \xB7 ${T.n}`.toUpperCase(),L=34,G=.3/L,at=document.createElement("canvas").getContext("2d");at.font=`600 17px ${Ho}`;let Q=Math.ceil(at.measureText(Z).width+30),wt=x(Q,L,(St,et,_t)=>{St.clearRect(0,0,et,_t),St.fillStyle=T.lvl<0?"rgba(150,170,200,.9)":"rgba(60,240,180,.85)",St.beginPath(),N&&T.lvl<0?(St.moveTo(2,_t/2+5),St.lineTo(14,_t/2+5),St.lineTo(8,_t/2-6)):N?(St.moveTo(2,_t/2-5),St.lineTo(14,_t/2-5),St.lineTo(8,_t/2+6)):St.arc(8,_t/2,4,0,Math.PI*2),St.fill(),St.font=`600 17px ${Ho}`,St.textBaseline="middle",St.fillStyle="rgba(205,214,226,.82)",St.fillText(Z,22,_t/2+1)}),Tt=Q*G,It=new hi(Tt,L*G);It.rotateX(-Math.PI/2);let qt=new Ne(It,new Ss({map:wt,transparent:!0,depthWrite:!1,toneMapped:!1})),Qt=N?K+.45:T.n<=2?Math.min(T.x0,-Tt-1.7):T.x0,O=N?T.lvl<0?-.36:.36:T.zLab;return qt.position.set(Qt+Tt/2,.012,O),qt.userData={band:T.lvl,x0:Qt,x1:Qt+Tt,z:O},qt}function Dt(T,N){let Z=f()?3:5,L=.45,G=1.75,at=3.1,Q=new Map;for(let St of T)(Q.get(St.lvl)||Q.set(St.lvl,[]).get(St.lvl)).push(St);let wt=St=>{let et=N.filter(_t=>_t.b===St).map(_t=>_t.a.x||0);return et.length?et.reduce((_t,Pt)=>_t+Pt,0)/et.length:0},Tt=St=>{let et=N.filter(_t=>_t.a===St).map(_t=>_t.b.x||0);return et.length?et.reduce((_t,Pt)=>_t+Pt,0)/et.length:0},It=Q.get(0)[0];It.x=0,It.z=0;let qt=[],Qt=St=>{let et=Math.min(Z,St);return-(et*z.w+(et-1)*L)/2},O=-at+.4;for(let St of[...Q.keys()].filter(et=>et<0).sort((et,_t)=>_t-et)){let et=Q.get(St);et.sort((_t,Pt)=>Tt(_t)-Tt(Pt));for(let _t=0;_t<et.length;_t+=Z){let Pt=et.slice(_t,_t+Z),Et=Pt.length*z.w+(Pt.length-1)*L;Pt.forEach((Zt,Jt)=>{Zt.x=-Et/2+z.w/2+Jt*(z.w+L),Zt.z=O}),O-=G}qt.push({lvl:St,n:et.length,x0:Qt(et.length),zLab:O+G-z.d/2-.36}),O-=at-G}O=at-.4;for(let St of[...Q.keys()].filter(et=>et>0).sort((et,_t)=>et-_t)){let et=Q.get(St);St>1&&et.sort((_t,Pt)=>wt(_t)-wt(Pt)),qt.push({lvl:St,n:et.length,x0:Qt(et.length),zLab:O-z.d/2-.36});for(let _t=0;_t<et.length;_t+=Z){let Pt=et.slice(_t,_t+Z),Et=Pt.length*z.w+(Pt.length-1)*L;Pt.forEach((Zt,Jt)=>{Zt.x=-Et/2+z.w/2+Jt*(z.w+L),Zt.z=O}),O+=G}O+=at-G}return qt}let H={W:1,H:1,offX:0,offY:0,freeW:1,freeH:1,top:0};function ut(){y.setViewOffset(H.W,H.H,-H.offX,-H.offY,H.W,H.H)}function lt(T){let N=Ct.near&&Ct.near.length>1?Ct.near.reduce((Z,L)=>({x0:Math.min(Z.x0,L.x-z.w/2),x1:Math.max(Z.x1,L.x+z.w/2),z0:Math.min(Z.z0,L.z-z.d/2),z1:Math.max(Z.z1,L.z+z.d/2)}),{x0:-2,x1:2,z0:-2,z1:2}):Ct.bounds;Ft(N,T)}function Ft(T,N){let Z=T.x1-T.x0+1.2,L=T.z1-T.z0+1.6,G=H.freeW/H.H,at=y.fov*Math.PI/360,Q=Z/2/Math.tan(at)/G,wt=L/2/Math.tan(at)*(H.H/Math.max(200,H.freeH));mt.tdist=Rs(Math.max(Q,wt)*1.04,6,90),mt.tx=(T.x0+T.x1)/2,mt.tz=(T.z0+T.z1)/2,N&&(mt.dist=mt.tdist,mt.x=mt.tx,mt.z=mt.tz)}function Vt(){y.position.set(mt.x+Math.sin(mt.yaw)*Math.cos(1.5)*mt.dist,Math.sin(1.5)*mt.dist,mt.z+Math.cos(mt.yaw)*Math.cos(1.5)*mt.dist),y.lookAt(mt.x,0,mt.z),p.position.set(mt.x-6,14,mt.z+7),p.target.position.set(mt.x,0,mt.z)}let Ot=new mr,Bt=new Ut;function Nt(T,N){Bt.set(T/H.W*2-1,-(N/H.H)*2+1),Ot.setFromCamera(Bt,y);let Z=Ct.items.map(G=>G.userData.card);Ct.hub&&Z.push(Ct.hub.children[0]);let L=Ot.intersectObjects(Z,!1)[0];return L?L.object===Ct.hub?.children[0]?Ct.hub:Ct.items.find(G=>G.userData.card===L.object):null}let Ht=new Map,he=null,Se=null,oe=0;function me(T,N){Bt.set(T/H.W*2-1,-(N/H.H)*2+1),Ot.setFromCamera(Bt,y);let Z=-Ot.ray.origin.y/Ot.ray.direction.y;return Ot.ray.origin.clone().addScaledVector(Ot.ray.direction,Z)}function W(T){if(Ct.open){try{d.setPointerCapture(T.pointerId)}catch{}if(Ht.set(T.pointerId,{x:T.clientX,y:T.clientY}),Ht.size===2){let[N,Z]=[...Ht.values()];Se={d:Math.hypot(N.x-Z.x,N.y-Z.y)},he=null;return}he={sx:T.clientX,sy:T.clientY,x:T.clientX,y:T.clientY,moved:!1,g:me(T.clientX,T.clientY)},mt.vx=mt.vz=0}}function ve(T){if(Ct.open){if(Ht.has(T.pointerId)&&Ht.set(T.pointerId,{x:T.clientX,y:T.clientY}),Se&&Ht.size===2){let[N,Z]=[...Ht.values()],L=Math.hypot(N.x-Z.x,N.y-Z.y);mt.tdist=Rs(mt.tdist*(Se.d/Math.max(1,L)),5,90),mt.dist=mt.tdist,Se.d=L;return}if(he){if(!he.moved&&Math.hypot(T.clientX-he.sx,T.clientY-he.sy)>6&&(he.moved=!0,d.classList.add("dragging")),he.moved){Vt(),y.updateMatrixWorld();let N=me(T.clientX,T.clientY),Z=he.g.x-N.x,L=he.g.z-N.z;mt.x+=Z,mt.z+=L,mt.tx=mt.x,mt.tz=mt.z,mt.vx=Z,mt.vz=L}return}if(T.pointerType==="mouse"){let N=Nt(T.clientX,T.clientY);N!==Ct.hover&&(Ct.hover=N,d.classList.toggle("pointing",!!N))}}}function be(T){if(!Ct.open)return;if(Ht.delete(T.pointerId),d.classList.remove("dragging"),Se){Ht.size<2&&(Se=null);return}if(!he)return;let N=he;if(he=null,N.moved)return;let Z=performance.now(),L=Z-oe<320;oe=Z;let G=Nt(T.clientX,T.clientY);if(!G)return;let at=G.userData.nd;if(at.ext){h(at.ext);return}Ct.selected=G,c(at.w,L&&G!==Ct.hub)}function P(T){if(!Ct.open)return;T.preventDefault();let N=Math.exp(T.deltaY*(T.ctrlKey?.012:.0016)),Z=me(T.clientX,T.clientY),L=Rs(mt.tdist*N,5,90),G=1-L/mt.tdist;mt.tx+=(Z.x-mt.tx)*G,mt.tz+=(Z.z-mt.tz)*G,mt.tdist=L}d.addEventListener("pointerdown",W),d.addEventListener("pointermove",ve),d.addEventListener("pointerup",be),d.addEventListener("pointercancel",be),d.addEventListener("wheel",P,{passive:!1});let v=performance.now(),J=0;function it(T){let N=Math.min(.05,(T-v)/1e3);v=T,J+=N;let Z=Rs((T-Ct.t0)/1400,0,1);if(Ct.hub){let L=af(Rs(Z*1.8,0,1));Ct.hub.scale.setScalar(.6+.4*L),Ct.hub.position.y=-.4*(1-L),Ct.hub.userData.ring.material.emissiveIntensity=1.2+.35*Math.sin(J*2.2)}Ct.items.forEach((L,G)=>{let at=L.userData.nd,Q=Rs((Z-.15-Math.min(.5,(Math.abs(at.lvl)-1)*.12+G%12*.025))/.35,0,1),wt=af(Q),Tt=Ct.hover===L?1:0,It=Ct.selected===L?1:0;L.userData.lift=(L.userData.lift||0)+(Tt*.18+It*.1-(L.userData.lift||0))*Math.min(1,N*12),L.position.y=-.5*(1-wt)+L.userData.lift,L.scale.setScalar(.85+.15*wt),L.visible=Q>0,L.userData.rim.material.opacity=(L.userData.ctl?.9:.35)*wt+It*.4}),gt.uGrow.value=ky(Rs((Z-.3)/.6,0,1)),gt.uTime.value=J,A.uGlow.value=af(Rs(Z*1.5,0,1)),!he&&!Se&&(mt.x+=(mt.tx-mt.x)*Math.min(1,N*6),mt.z+=(mt.tz-mt.z)*Math.min(1,N*6)),mt.dist+=(mt.tdist-mt.dist)*Math.min(1,N*7),m.fog.near=mt.dist*1.35,m.fog.far=mt.dist*3.2,mt.yaw=0,Vt(),i.shadowMap.needsUpdate=!0,i.render(m,y)}return{get focus(){return Ct.focus},open(T,N){Re(T,N),Ct.open=!0,Ct.focus=T,Ct.t0=performance.now(),Ct.hover=null,Ct.selected=Ct.hub,lt(!0),mt.dist=mt.tdist*1.25},close(){Ct.open=!1,Ct.focus=-1,fe()},frame:it,resize(T,N){H.W=T,H.H=N,y.aspect=T/N,y.updateProjectionMatrix(),ut()},setFree(T,N,Z,L=0){H.offX=(T-N)/2,H.offY=(L-Z)/2,H.freeW=Math.max(200,H.W-T-N),H.freeH=Math.max(200,H.H-Z-L),ut(),Ct.open&&lt(!1)},zoom(T){mt.tdist=Rs(mt.tdist*T,5,90)},fit(){Ct.bounds&&Ft(Ct.bounds)}}}var lf="mapa-4",_a=["fin","tech","saude","log","agro","ind","util","oil","base","cons","imob","out"];function $p(i){return i.t==="c"?i.mc?1.8+1.25*Math.log10(1+i.mc/1e8):1.8:i.t==="s"?1.2:i.v?1+.8*Math.log10(1+i.v/1e8):1}function Hy(i){let t=i.nodes,e=t.length,n=new Int16Array(e).fill(-1),s=a=>{let o=_a.indexOf(a);return o<0?_a.length-1:o};t.forEach((a,o)=>{a.t==="c"&&(n[o]=s(a.c))});let r=Array.from({length:e},()=>[]);for(let[a,o,,l]of i.edges||[]){let c=l&1?3:1;r[a].push([o,c]),r[o].push([a,c])}for(let[a,o]of i.board||[])r[a].push([o,.3]),r[o].push([a,.3]);for(let a=0;a<6;a++){let o=0;for(let l=0;l<e;l++){if(n[l]>=0)continue;let c=new Float64Array(_a.length),h=!1;for(let[d,u]of r[l])n[d]>=0&&(c[n[d]]+=u*(t[d].t==="c"?2:1),h=!0);if(h){let d=0;for(let u=1;u<c.length;u++)c[u]>c[d]&&(d=u);n[l]=d,o++}}if(!o)break}for(let a=0;a<e;a++)n[a]<0&&(n[a]=_a.length-1);return n}function Gy(i,t,e,n,s){let r=[],a=i.slice(),o=t,l=e,c=n,h=s,d=(u,f)=>{let m=u.reduce((g,p)=>g+p.a,0),y=0;for(let g of u){let p=m/f,M=g.a/p;y=Math.max(y,Math.max(p/M,M/p))}return y};for(;a.length;){let u=Math.min(c,h),f=[a.shift()];for(;a.length&&d([...f,a[0]],u)<=d(f,u);)f.push(a.shift());let m=f.reduce((y,g)=>y+g.a,0);if(c>=h){let y=m/h,g=l;for(let p of f){let M=p.a/y;r.push({...p,x0:o,y0:g,x1:o+y,y1:g+M}),g+=M}o+=y,c-=y}else{let y=m/c,g=o;for(let p of f){let M=p.a/y;r.push({...p,x0:g,y0:l,x1:g+M,y1:l+y}),g+=M}l+=y,h-=y}}return r}var Vy=1.62,qp=.62;function Wy(i){let t=i.nodes,e=t.length,n=Array.from({length:e},()=>[]),s=new Int32Array(e);for(let[M,A,_,b]of i.edges||[])n[M].push([A,_,b]),s[A]++;let r=Array.from({length:e},()=>[]);for(let[M,A]of i.board||[])r[M].push(A);let a=Uint8Array.from(t,(M,A)=>M.t==="c"||M.t==="s"||!n[A].length&&s[A]?1:0),o=new Array(e).fill(null),l=new Uint8Array(e),c=M=>{if(o[M])return o[M];if(l[M])return new Map;l[M]=1;let A=new Map;for(let[_,b,w]of n[M]){let I=(b>0?b:5)*(w&1?2:1);if(a[_])A.set(_,(A.get(_)||0)+I*Math.max(1e8,t[_].mc||0));else for(let[x,C]of c(_))A.set(x,(A.get(x)||0)+C*Math.min(100,I)/100)}return l[M]=0,o[M]=A},h=new Int32Array(e).fill(-1),d=new Uint8Array(e),u=new Uint8Array(e),f=M=>M.slice().sort((A,_)=>(t[_].mc||0)-(t[A].mc||0)||A-_)[0],m=-1;for(let M=0;M<e;M++)t[M].t==="c"&&(m<0||(t[M].mc||0)>(t[m].mc||0))&&(m=M);for(let M=0;M<e;M++){if(a[M])continue;let A=c(M);A.size===1?h[M]=A.keys().next().value:A.size>=2?d[M]=1:h[M]=r[M].length?f(r[M]):m}let y=new Int16Array(e).fill(-1),g=new Uint8Array(e),p=M=>{if(a[M])return 0;if(y[M]>=0)return y[M];if(g[M])return 0;g[M]=1;let A=0,_=99;for(let[b]of n[M]){let w=p(b);(!d[M]||d[b])&&(A=Math.max(A,d[b]||!d[M]?w:0)),_=Math.min(_,w)}return g[M]=0,y[M]=d[M]?A+1:(_===99?0:_)+1};for(let M=0;M<e;M++)if(!a[M]){let A=p(M);d[M]?d[M]=Math.min(6,A):u[M]=Math.min(9,A)}return{out:n,ground:a,reach:c,anchor:h,sky:d,depth:u}}function cf(i,{log:t=()=>{},aspect:e=Vy}={}){let n=i.nodes,s=n.length,r=i.pos||[],{out:a,ground:o,reach:l,anchor:c,sky:h,depth:d}=Wy(i),u=Hy(i),f=_a.length,m=new Map;for(let H=0;H<s;H++)c[H]>=0&&(m.get(c[H])||m.set(c[H],[]).get(c[H])).push(H);let y=Float64Array.from(n,H=>$p(H)*.62),g=new Map,p=new Float64Array(s),M=(H,ut)=>{let lt=-1;for(let[Ft,Vt,Ot]of a[H])Ft===ut&&(lt=Math.max(lt,(Vt>0?Vt:0)+(Ot&1?1e3:0)));return lt};for(let H=0;H<s;H++){if(!o[H])continue;let ut=m.get(H),lt=y[H]*(n[H].t==="c"?2.1:1.42);if(!ut){p[H]=lt+.9;continue}let Ft=new Map;for(let Bt of ut){let Nt=d[Bt]||1;(Ft.get(Nt)||Ft.set(Nt,[]).get(Nt)).push(Bt)}let Vt=[],Ot=lt+1.5;for(let Bt of[...Ft.keys()].sort((Nt,Ht)=>Nt-Ht)){let Nt=Ft.get(Bt);for(Bt===1&&Nt.sort((Ht,he)=>M(he,H)-M(Ht,H)||(n[he].v||0)-(n[Ht].v||0)||Ht-he);Nt.length;){let Ht=Math.max(4,Math.floor(2*Math.PI*Ot/1.5));Vt.push({r:Ot,d:Bt,list:Nt.splice(0,Ht)}),Ot+=1.45}}g.set(H,Vt),p[H]=Ot-1.45+1.3}let A=new Float64Array(f);for(let H=0;H<s;H++)o[H]&&(A[u[H]]+=Math.PI*p[H]*p[H]);let _=[];for(let H=0;H<f;H++)A[H]>0&&_.push({k:H,c:_a[H],a:A[H]/.45});_.sort((H,ut)=>ut.a-H.a);let b=_.reduce((H,ut)=>H+ut.a,0),w=Math.sqrt(b*e),I=b/w,x=Gy(_,0,0,w,I),C=Math.sqrt(b),B=C*Math.sqrt(1.62)*.02,$=x.map(H=>({c:H.c,k:H.k,x0:H.x0+B/2,y0:H.y0+B/2,x1:H.x1-B/2,y1:H.y1-B/2})),z=new Map($.map((H,ut)=>[H.k,ut])),K=new Float64Array(s),F=new Float64Array(s),q=H=>{let ut=Math.min(H.x1-H.x0,H.y1-H.y0)*.03+1,lt=Math.min((H.y1-H.y0)*.12,C/Math.sqrt(1.62)*.035);return{x0:H.x0+ut,x1:H.x1-ut,y0:H.y0+ut+lt,y1:H.y1-ut}},ht=H=>{let ut=H.map((Bt,Nt)=>Nt).sort((Bt,Nt)=>H[Bt]-H[Nt]||Bt-Nt),lt=new Float64Array(H.length);ut.forEach((Bt,Nt)=>{lt[Bt]=(Nt+.5)/H.length});let Ft=ut.map(Bt=>H[Bt]),Vt=Ft[Math.floor(Ft.length*.03)]??0,Ot=Ft[Math.ceil(Ft.length*.97)-1]??1;return H.map((Bt,Nt)=>.6*lt[Nt]+.4*Math.min(1,Math.max(0,(Bt-Vt)/Math.max(1e-9,Ot-Vt))))};for(let H of $){let ut=[];for(let Ot=0;Ot<s;Ot++)o[Ot]&&u[Ot]===H.k&&ut.push(Ot);let lt=q(H),Ft=ht(ut.map(Ot=>r[2*Ot]||0)),Vt=ht(ut.map(Ot=>r[2*Ot+1]||0));ut.forEach((Ot,Bt)=>{K[Ot]=lt.x0+Ft[Bt]*(lt.x1-lt.x0),F[Ot]=lt.y0+Vt[Bt]*(lt.y1-lt.y0)})}let j=[];for(let H=0;H<s;H++)o[H]&&j.push(H);let yt=[];for(let[H,ut,,lt]of i.edges||[])o[H]&&o[ut]&&u[H]===u[ut]&&yt.push([H,ut,lt&1?.06:.02]);let rt=new Int32Array(s).fill(-1);for(let H of i.groups||[])if(H.nc>=2&&o[H.h])for(let ut of H.m)ut!==H.h&&o[ut]&&u[ut]===u[H.h]&&n[ut].t==="c"&&(rt[ut]=H.h);let gt=new Map($.map(H=>[H.k,q(H)])),Mt=(H,ut,lt,Ft,Vt)=>{let Ot=H.map(oe=>ut[oe]).sort((oe,me)=>oe-me),Bt=Math.max(2,(Ot[Math.floor(Ot.length/2)]||1)*2.2),Nt=(oe,me)=>(oe+4096)*8192+(me+4096),Ht=new Float64Array(s),he=new Float64Array(s),Se=new Map;for(let oe=0;oe<lt;oe++){let me=1-oe/lt;Ht.fill(0),he.fill(0),Vt(Ht,he,Math.max(0,me*1.6-.6)),Se.clear();for(let ve of H){let be=Nt(Math.floor(K[ve]/Bt),Math.floor(F[ve]/Bt)),P=Se.get(be);P||Se.set(be,P=[]),P.push(ve)}for(let ve of H){let be=Math.floor(K[ve]/Bt),P=Math.floor(F[ve]/Bt),v=Math.ceil(2*ut[ve]/Bt);for(let J=be-v;J<=be+v;J++)for(let it=P-v;it<=P+v;it++){let T=Se.get(Nt(J,it));if(T)for(let N of T){if(ut[N]>ut[ve]||ut[N]===ut[ve]&&N<=ve||!Ft.same(ve,N))continue;let Z=K[ve]-K[N],L=F[ve]-F[N],G=Math.hypot(Z,L);G<1e-6&&(Z=ve*7919%13-6||1,L=N*104729%11-5||1,G=Math.hypot(Z,L),Z*=.001/G,L*=.001/G,G=.001);let at=ut[ve]+ut[N];if(G>=at)continue;let Q=(at-G)/G*.5;Ht[ve]+=Z*Q,he[ve]+=L*Q,Ht[N]-=Z*Q,he[N]-=L*Q}}}let W=Ft.max*me+.3;for(let ve of H){let be=Ht[ve],P=he[ve],v=Math.hypot(be,P);v>W&&(be*=W/v,P*=W/v),Ft.move(ve,K[ve]+be,F[ve]+P)}}};Mt(j,p,220,{max:4,same:(H,ut)=>u[H]===u[ut],move:(H,ut,lt)=>{let Ft=gt.get(u[H]),Vt=Math.min(p[H],(Ft.x1-Ft.x0)/2,(Ft.y1-Ft.y0)/2)*.9;K[H]=Math.min(Ft.x1-Vt,Math.max(Ft.x0+Vt,ut)),F[H]=Math.min(Ft.y1-Vt,Math.max(Ft.y0+Vt,lt))}},(H,ut,lt)=>{if(lt){for(let[Ft,Vt,Ot]of yt){let Bt=Ot*lt,Nt=K[Vt]-K[Ft],Ht=F[Vt]-F[Ft],he=Math.hypot(Nt,Ht)||1e-9,Se=(p[Ft]+p[Vt])*1.05;if(he<=Se)continue;let oe=Bt*(he-Se)/he;H[Ft]+=Nt*oe,ut[Ft]+=Ht*oe,H[Vt]-=Nt*oe,ut[Vt]-=Ht*oe}for(let Ft of j)rt[Ft]>=0&&(H[Ft]+=(K[rt[Ft]]-K[Ft])*.03*lt,ut[Ft]+=(F[rt[Ft]]-F[Ft])*.03*lt)}});let Ct=new Float64Array(s),mt=Math.PI/2;for(let[H,ut]of g)for(let lt of ut){let Ft=lt.list.length,Vt=1.5/lt.r,Ot;if(lt.d===1){let Bt=Math.max(Vt,Math.min(2*Math.PI/Ft,Vt*1.9));Ot=lt.list.map((Nt,Ht)=>mt+(Ht%2?1:-1)*Math.ceil(Ht/2)*Bt)}else{let Bt=lt.list.map(oe=>{let me=0,W=0;for(let[ve]of a[oe])c[ve]===H&&(me+=Math.sin(Ct[ve]),W+=Math.cos(Ct[ve]));return me||W?Math.atan2(me,W):mt}),Nt=lt.list.map((oe,me)=>me).sort((oe,me)=>Bt[oe]-Bt[me]||oe-me);Ot=new Array(Ft);let Ht=-1/0,he=0;for(let oe of Nt){let me=Math.max(Bt[oe],Ht+Vt);he+=me-Bt[oe],Ot[oe]=me,Ht=me}let Se=Math.min(he/Ft,Vt*Ft*.5);for(let oe=0;oe<Ft;oe++)Ot[oe]-=Se}lt.list.forEach((Bt,Nt)=>{Ct[Bt]=Ot[Nt],K[Bt]=K[H]+Math.cos(Ot[Nt])*lt.r,F[Bt]=F[H]+Math.sin(Ot[Nt])*lt.r})}let fe=[];for(let H=0;H<s;H++)h[H]&&fe.push(H);let Re=new Float64Array(s),Ue=new Float64Array(s),dt=new Float64Array(s),bt=new Int16Array(s);for(let H=0;H<s;H++)bt[H]=o[H]?u[H]:c[H]>=0?u[c[H]]:0;for(let H of fe){let ut=l(H),lt=0,Ft=0,Vt=0,Ot=-1,Bt=-1;for(let[Nt,Ht]of ut){let he=Math.sqrt(Ht);lt+=K[Nt]*he,Ft+=F[Nt]*he,Vt+=he,Ht>Bt&&(Bt=Ht,Ot=Nt)}Re[H]=K[H]=lt/Vt,Ue[H]=F[H]=Ft/Vt,bt[H]=u[Ot],dt[H]=$p(n[H])*1.5+.6}Mt(fe,dt,140,{max:3,same:()=>!0,move:(H,ut,lt)=>{K[H]=Math.min(w-2,Math.max(2,ut)),F[H]=Math.min(I-2,Math.max(2,lt))}},(H,ut,lt)=>{for(let Ft of fe)H[Ft]+=(Re[Ft]-K[Ft])*.04*lt,ut[Ft]+=(Ue[Ft]-F[Ft])*.04*lt}),t(`mapa: ${$.length} bairros, ${j.length} terrenos, ${s-j.length-fe.length} nas pra\xE7as, ${fe.length} no c\xE9u, ${w.toFixed(0)} \xD7 ${I.toFixed(0)}`);let Dt=H=>Math.round(H*10)/10;return{v:lf,W:Dt(w),H:Dt(I),x:Array.from(K,Dt),y:Array.from(F,Dt),plate:Array.from(bt,H=>z.get(H)),sky:Array.from(h),anchor:Array.from(c),lot:Array.from(p,Dt),plates:$.map(H=>({c:H.c,x0:Dt(H.x0),y0:Dt(H.y0),x1:Dt(H.x1),y1:Dt(H.y1)}))}}var Wt=(i,t=document)=>t.querySelector(i),xe=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Vo=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),hn=(i,t=0)=>Number(i).toLocaleString("pt-BR",{minimumFractionDigits:t,maximumFractionDigits:t}),e0=i=>typeof i=="number"&&isFinite(i),cn=i=>e0(i)?i>=1e12?`R$ ${hn(i/1e12,2)} tri`:i>=1e9?`R$ ${hn(i/1e9,i>=1e11?0:1)} bi`:i>=1e6?`R$ ${hn(i/1e6,0)} mi`:`R$ ${hn(i)}`:"\u2013",Ei=i=>e0(i)&&i>=0?`${hn(i,i>=10||i===Math.round(i)?i===Math.round(i)?0:1:2)}%`:"\u2013",Mn=(i,t,e)=>`${hn(i)} ${i===1?t:e}`,cs=(i,t="ic")=>`<svg class="${t}" aria-hidden="true"><use href="#i-${i}"/></svg>`,br={get:(i,t)=>{try{let e=localStorage.getItem(`n1:${i}`);return e==null?t:JSON.parse(e)}catch{return t}},set:(i,t)=>{try{localStorage.setItem(`n1:${i}`,JSON.stringify(t))}catch{}}},xh=matchMedia("(prefers-reduced-motion: reduce)").matches,ya=matchMedia("(pointer: coarse)").matches,bn=i=>{let t=String(i).replace(/[\s,]+(S\.?\/?A\.?|S\/a|Ltda\.?|Inc\.?|LLC|S\.à ?r\.l\.?|Sarl|S\.R\.L\.)\s*$/i,"").replace(/\s*\(.*?\)\s*$/,"").replace(/[\s,;-]+$/,"");return t.length>34?`${t.slice(0,32)}\u2026`:t},Xy=i=>i.length===14?`${i.slice(0,2)}.${i.slice(2,5)}.${i.slice(5,8)}/${i.slice(8,12)}-${i.slice(12)}`:i;function Wo(i){let t=Wt("#toast");t.textContent=i,t.hidden=!1,clearTimeout(Wo.t),Wo.t=setTimeout(()=>{t.hidden=!0},2800)}var ba={fin:["#8fb8e8","Bancos e servi\xE7os financeiros","Financeiro"],tech:["#7cc6d9","Telecom, m\xEDdia e tecnologia","Tecnologia"],saude:["#78cfc0","Sa\xFAde e educa\xE7\xE3o","Sa\xFAde"],log:["#8ccfa3","Transporte e log\xEDstica","Log\xEDstica"],agro:["#b5cf86","Agro, alimentos e bebidas","Agro"],ind:["#d4c97f","Ind\xFAstria e bens de capital","Ind\xFAstria"],util:["#e3bb72","Energia el\xE9trica e saneamento","Energia"],oil:["#e59f78","Petr\xF3leo, g\xE1s e qu\xEDmica","Petr\xF3leo"],base:["#d99090","Minera\xE7\xE3o, siderurgia e papel","Minera\xE7\xE3o"],cons:["#d996b4","Varejo e consumo","Consumo"],imob:["#b9a0dd","Constru\xE7\xE3o e im\xF3veis","Imobili\xE1rio"],out:["#a8b3bf","Holdings e outros","Holdings"]},Sh={pf:["#f0c9a0","Pessoa f\xEDsica"],hold:["#8ea3bd","Holding ou empresa"],fund:["#a9a2f5","Gestora ou fundo"],pen:["#d39af0","Fundo de pens\xE3o"],gov:["#f2d37a","Governo"],sub:["#7fd6b4","Controlada em comum"]},$y="#b3a6f7",vh="#3cf0b4",ds=i=>(ba[i]||ba.out)[0],mf=i=>i.t==="s"?"sub":i.t==="p"?"pf":Sh[i.c]?i.c:"hold",Yi=i=>i.t==="c"?ds(i.c):Sh[mf(i)][0],Ti=i=>i.t==="c"?"Companhia aberta":Sh[mf(i)][1],qy={sector:ds,kind:i=>Sh[mf(i)][0],investor:$y},R={ready:!1};function Yy(i){let t=i.nodes,e=t.length;Object.assign(R,{data:i,nodes:t,N:e,groups:i.groups||[],setores:i.setores||{}}),t.forEach((r,a)=>{r.i=a,r.f=Vo(r.n)});let n=i.edges||[];R.M=n.length,R.es=new Int32Array(R.M),R.et=new Int32Array(R.M),R.ep=new Float32Array(R.M),R.ef=new Uint8Array(R.M),n.forEach(([r,a,o,l],c)=>{R.es[c]=r,R.et[c]=a,R.ep[c]=o,R.ef[c]=l});let s=i.board||[];R.B=s.length,R.bs=new Int32Array(R.B),R.bt=new Int32Array(R.B),R.br=s.map(r=>r[2]),s.forEach(([r,a],o)=>{R.bs[o]=r,R.bt[o]=a}),R.out=Array.from({length:e},()=>[]),R.inc=Array.from({length:e},()=>[]),R.brd=Array.from({length:e},()=>[]);for(let r=0;r<R.M;r++)R.out[R.es[r]].push(r),R.inc[R.et[r]].push(r);for(let r=0;r<R.B;r++)R.brd[R.bs[r]].push(r),R.brd[R.bt[r]].push(r);R.groups.forEach((r,a)=>{r.i=a,r.f=Vo(r.n);let o={};for(let l of r.m)t[l].t==="c"&&(o[t[l].c]=(o[t[l].c]||0)+(t[l].mc||1e8));r.sector=Object.entries(o).sort((l,c)=>c[1]-l[1])[0]?.[0]||"out"}),R.deg=Float32Array.from(t,(r,a)=>R.out[a].length+R.inc[a].length+R.brd[a].length),R.crank=new Int32Array(e).fill(1e9),t.map((r,a)=>a).filter(r=>t[r].t==="c").sort((r,a)=>(t[a].mc||0)-(t[r].mc||0)).forEach((r,a)=>{R.crank[r]=a}),R.labelOrder=t.map((r,a)=>a).sort((r,a)=>_h(a)-_h(r)),R.byId=new Map(t.map(r=>[r.id,r.i])),R.byK=new Map(t.filter(r=>r.k).map(r=>[r.k,r.i])),R.bySlug=new Map(t.filter(r=>r.s).map(r=>[r.s,r.i])),R.byCnpj=new Map(t.filter(r=>r.cnpj).map(r=>[r.cnpj,r.i])),R.ready=!0}var _h=i=>{let t=R.nodes[i];return t.t==="c"?1e15+(t.mc||0)+R.deg[i]*1e8:(t.v||0)+R.deg[i]*5e8},xt={mode:"world",hover:-1,sel:-1,group:-1,sector:-1,shape:null,hl:null,layers:{people:!0,funds:!0,board:!1,ctlonly:!1,groups:!0,...br.get("mundo-layers",{})},pathIds:null,lastInput:performance.now()},ii=new Uint8Array(1);function n0(){ii=new Uint8Array(R.N);let i=xt.layers;for(let t=0;t<R.N;t++){let e=R.nodes[t],n=1;e.t==="p"&&!i.people&&(n=0),e.t==="j"&&(e.c==="fund"||e.c==="pen")&&!i.funds&&(n=0),e.b&&!i.board&&!R.out[t].length&&!R.inc[t].length&&(n=0),i.ctlonly&&e.t!=="c"&&!R.out[t].some(s=>R.ef[s]&1)&&(n=0),ii[t]=n}Lt?.setVisible(ii)}var Lt=null,fs=null;function i0(i){let t=new Set([i]),e=new Set,n=new Set;for(let s of R.out[i])ii[R.et[s]]&&(!xt.layers.ctlonly||R.ef[s]&1)&&(t.add(R.et[s]),e.add(s));for(let s of R.inc[i])ii[R.es[s]]&&(!xt.layers.ctlonly||R.ef[s]&1)&&(t.add(R.es[s]),e.add(s));if(xt.layers.board||R.nodes[i].b)for(let s of R.brd[i]){let r=R.bs[s]===i?R.bt[s]:R.bs[s];t.add(r),n.add(s)}return{nodes:t,edges:e,brd:n}}function Is(i,t,e,n=[],s=.75,r=!1,a=null){if(xt.hl=i,xt.rel=a,u1(),!Lt)return;if(!i){Lt.setHighlight(null),Lt.setFlows([]);return}let o=new Map;for(let c of i)o.set(c,.5);for(let c of n)o.set(c,1);Lt.setHighlight(o,s);let l=[];for(let c of t||[])l.push([R.es[c],R.et[c],r?1:R.ef[c]&1,R.ep[c]]);for(let c of e||[])l.push([R.bs[c],R.bt[c],r?1:0,4]);l.sort((c,h)=>h[2]-c[2]),Lt.setFlows(l)}function s0(i,t){let e=new Map;for(let n of t.edges){let s=R.ef[n]&1,r=R.ep[n]>=0?Ei(R.ep[n]):"";R.et[n]===i?e.set(R.es[n],s?`controla${r?` \xB7 ${r}`:""}`:r?`dono de ${r}`:"acionista"):e.set(R.et[n],s?`controlada${r?` \xB7 ${r}`:""}`:r?`participa\xE7\xE3o de ${r}`:"participa\xE7\xE3o")}for(let n of t.brd){let s=R.bs[n]===i?R.bt[n]:R.bs[n];e.has(s)||e.set(s,{P:"presid\xEAncia do conselho",E:"presid\xEAncia executiva",C:"conselho",D:"diretoria"}[R.br[n]]||"administra\xE7\xE3o")}return e}function Rn(i,{fly:t=!0,push:e=!0}={}){if(xt.mode!=="world"&&hs(!1),ps(),xt.sel=i,xt.group=-1,gf(),wa(),i<0){Is(null),o0(),e&&Qs("");return}let n=i0(i);Is(n.nodes,n.edges,n.brd,[i],.75,!1,s0(i,n)),xf(i),Eh(),t&&Lt.flyToNodes(Zy(i,n.nodes),{minSpan:16}),e&&Qs(`n/${R.nodes[i].id}`)}function Zy(i,t){let e=[...t],n=1/0,s=-1/0,r=1/0,a=-1/0;for(let l of e)n=Math.min(n,Lt.X[l]),s=Math.max(s,Lt.X[l]),r=Math.min(r,Lt.Z[l]),a=Math.max(a,Lt.Z[l]);return Lt.sky[i]||Math.hypot(s-n,a-r)<=62?e:e.filter(l=>l===i||Math.hypot(Lt.X[l]-Lt.X[i],Lt.Z[l]-Lt.Z[i])<=26)}function yh(i,{push:t=!0}={}){xt.mode!=="world"&&hs(!1),ps();let e=R.groups[i];xt.sel=-1,xt.group=i,gf(),wa();let n=new Set(e.m),s=new Set;for(let r of e.m)for(let a of R.out[r])n.has(R.et[a])&&s.add(a);Is(n,s,new Set,e.m.filter(r=>R.nodes[r].t==="c")),t1(i),Eh(),Lt.flyToNodes(e.m,{minSpan:20}),t&&Qs(`g/${i}`)}var Yp=i=>(R.data.mapa.plates||[]).findIndex(t=>t.c===i);function Xo(i,{push:t=!0,fly:e=!0}={}){i<0||(xt.mode!=="world"&&hs(!1),ps(),xt.sel=-1,xt.group=-1,xt.sector=i,wa(),Is(null),Lt.setFocusPlate(i),M1(i),e&&Lt.flyToPlate(i),Eh(),t&&Qs(`setor/${R.data.mapa.plates[i].c}`))}function gf(){xt.sector<0||(xt.sector=-1,Lt?.setFocusPlate(-1))}function Zp(i){if(!Lt||xt.mode!=="world")return;if(xt.shape===i||!i){wa(),xt.sel>=0?Rn(xt.sel,{fly:!1,push:!1}):Is(null);return}(xt.sel>=0||xt.group>=0)&&(xt.sel=-1,xt.group=-1,xt.sector<0&&o0(),Qs(xt.sector>=0?`setor/${R.data.mapa.plates[xt.sector].c}`:""),Eh()),ps(),xt.shape=i,r0();let t=new Set,e=new Map;for(let n=0;n<R.N;n++)ii[n]&&Lt.shape[n]===i&&(xt.sector<0||R.data.mapa.plate[n]===xt.sector)&&(t.add(n),e.set(n,.02));xt.hl=t,Lt.setHighlight(e,.85),Lt.setFlows([])}function wa(){xt.shape&&(xt.shape=null,r0())}var r0=()=>{for(let i of document.querySelectorAll("#m-key [data-shape]"))i.classList.toggle("on",i.dataset.shape===xt.shape)};function a0(i){let t=-1,e=-2;for(let n of R.inc[i])R.ef[n]&1&&R.ep[n]>e&&(e=R.ep[n],t=R.es[n]);return t}function Jy(i){let t=[i],e=new Set([i]);for(;;){let n=a0(t[t.length-1]);if(n<0||e.has(n))break;e.add(n),t.push(n)}return t}var Ky=(i,t)=>R.out[i].find(e=>R.et[e]===t);function jy(i){let t=Yi(i);if(i.t==="c"){let e=i.n.replace(/[^A-Za-zÀ-ÿ0-9 ]/g,"").split(/\s+/).filter(Boolean).slice(0,2).map(n=>n[0]).join("").toUpperCase();return`<span class="m-badge" style="--c:${t}"><span>${xe(e)}</span>${i.tk?`<img src="https://icons.brapi.dev/icons/${xe(i.tk)}.svg" alt="" loading="lazy" onload="this.naturalWidth > 1 ? this.classList.add('ok') : this.remove()" onerror="this.remove()">`:""}</span>`}if(i.t==="p"){let e=i.n.split(/\s+/).filter(n=>n&&!/^(de|da|do|das|dos|e)$/i.test(n)).slice(0,2).map(n=>n[0]).join("").toUpperCase();return`<span class="m-badge round" style="--c:${t}"><span>${xe(e)}</span></span>`}return`<span class="m-badge" style="--c:${t}">${cs("cias")}</span>`}function js(i,t,e,n){let s=R.nodes[i];return`<li data-go="${i}"><span class="m-dot" style="--c:${Yi(s)}"></span><span class="nm">${xe(s.n)}</span>
    <span class="pc ${n?"m-ctl":""}">${xe(t)}</span>${e?`<small>${xe(e)}</small>`:""}</li>`}function Ma(i,t=8,e=""){return i.length?`<ul class="m-list" ${e?`data-list="${e}"`:""}>${i.slice(0,t).join("")}${i.length>t?`<li class="more" data-more="${e}">Mostrar mais ${i.length-t}</li>`:""}</ul>`:""}function Qy(i){let t=i.filter(h=>h.p>0).slice(0,7);if(!t.length)return"";let e=t.reduce((h,d)=>h+d.p,0),n=e>100?100/e:1;e=Math.min(100,e);let s=46,r=2*Math.PI*s,a=0,o=t.map(h=>{let d=h.p*n/100,u=Math.max(0,d*r-2),f=`<circle r="${s}" cx="60" cy="60" fill="none" stroke="${Yi(R.nodes[h.o])}" stroke-width="${h.ctl?13:10}" stroke-dasharray="${u.toFixed(2)} ${(r-u).toFixed(2)}" stroke-dashoffset="${(-a*r).toFixed(2)}" data-go="${h.o}"><title>${xe(R.nodes[h.o].n)} \xB7 ${Ei(h.p)}</title></circle>`;return a+=d,f}).join(""),l=t[0],c=t.slice(0,5).map(h=>`<li data-go="${h.o}"><i style="--c:${Yi(R.nodes[h.o])}"></i><span>${xe(bn(R.nodes[h.o].n))}</span><b>${Ei(h.p)}</b></li>`).join("")+(e<99.5?`<li class="rest"><i></i><span>Demais acionistas</span><b>${Ei(100-e)}</b></li>`:"");return`<div class="m-donut"><svg viewBox="0 0 120 120" aria-hidden="true"><circle r="${s}" cx="60" cy="60" fill="none" class="m-donut-track" stroke-width="10"/><g transform="rotate(-90 60 60)">${o}</g>
    <text x="60" y="56" text-anchor="middle" class="m-donut-v">${Ei(l.p)}</text><text x="60" y="72" text-anchor="middle" class="m-donut-l">${l.ctl?"controle":"maior fatia"}</text></svg>
    <ul>${c}</ul></div>`}var us={},Jp={P:"Presidente do conselho",E:"Diretor-presidente (CEO)",C:"Conselho de administra\xE7\xE3o",D:"Diretoria"};function xf(i){let t=R.nodes[i],e=Wt("#m-panel-body"),n=R.inc[i].map(m=>({j:m,o:R.es[m],p:R.ep[m],ctl:R.ef[m]&1})).sort((m,y)=>y.ctl-m.ctl||y.p-m.p),s=R.out[i].map(m=>({j:m,o:R.et[m],p:R.ep[m],ctl:R.ef[m]&1})).sort((m,y)=>y.ctl-m.ctl||(R.nodes[y.o].mc||0)*y.p-(R.nodes[m.o].mc||0)*m.p||y.p-m.p),r=R.brd[i].map(m=>({j:m,o:R.bs[m]===i?R.bt[m]:R.bs[m],r:R.br[m]})),a=t.g!=null?R.groups[t.g]:null,o=Jy(i),l=s.filter(m=>m.ctl).length,c=t.t==="c"?[t.tk||"capital fechado",t.st,t.uf]:[Ti(t),t.pais,t.cnpj?Xy(t.cnpj):""],h=t.t==="c"?[["Valor de mercado",t.mc?cn(t.mc):"\u2013"],["Acionistas",hn(n.length)],["Participa\xE7\xF5es",hn(s.length)]]:[["Participa\xE7\xF5es",hn(s.length)],["Valor estimado",t.v?cn(t.v):"\u2013"],[r.length?"Cargos":"Controla",hn(r.length||l)]];us={inc:n.map(m=>js(m.o,Ei(m.p),[m.ctl?"controlador":"",R.ef[m.j]&2?"acordo de acionistas":"",Ti(R.nodes[m.o])].filter(Boolean).join(" \xB7 "),m.ctl)),out:s.map(m=>js(m.o,Ei(m.p),[m.ctl?"controla":"",R.nodes[m.o].mc?`valor de mercado ${cn(R.nodes[m.o].mc)}`:Ti(R.nodes[m.o])].filter(Boolean).join(" \xB7 "),m.ctl)),brd:r.map(m=>{let y=R.nodes[m.o];if(t.t==="c"){let g=R.brd[m.o].map(p=>R.bs[p]===m.o?R.bt[p]:R.bs[p]).filter(p=>p!==i).map(p=>bn(R.nodes[p].n));return js(m.o,"",`${Jp[m.r]||"Cargo"} aqui \xB7 tamb\xE9m em ${g.slice(0,3).join(", ")}${g.length>3?` e mais ${g.length-3}`:""}`,!1)}return js(m.o,"",`${Jp[m.r]||"Cargo"}${y.mc?` \xB7 ${cn(y.mc)}`:""}`,!1)})};let d=t.t==="c"&&t.k?`cias.html#cia/${encodeURIComponent(t.k)}`:t.s?`cias.html#pessoa/${encodeURIComponent(t.s)}`:"",u=t.t==="c"?R.setores[t.c]||ba[t.c]?.[1]:"",f=xt.mode==="tree";e.innerHTML=`
    <div class="m-kicker" style="--c:${Yi(t)}"><i></i>${xe(t.t==="c"?u||"Companhia aberta":Ti(t))}</div>
    <div class="m-head">${jy(t)}<div><h2>${xe(t.n)}</h2><p>${xe(c.filter(Boolean).join(" \xB7 "))}</p></div></div>
    ${a&&a.nc>=2?`<div class="m-chips"><button class="m-chip gold" data-group="${a.i}" type="button">${cs("cias","ic ic-xs")}Grupo ${xe(a.n)} \xB7 ${Mn(a.nc,"companhia","companhias")}</button></div>`:""}
    <div class="m-stats">${h.map(([m,y])=>`<div class="m-stat"><span>${m}</span><b>${xe(y)}</b></div>`).join("")}</div>
    <div class="m-btns">
      ${f&&xt.treeFocus===i?`<button class="m-btn primary" type="button" data-act="world">${cs("map")}Ver no mapa</button>`:`<button class="m-btn primary" type="button" data-act="tree">${cs("tree")}Estrutura societ\xE1ria</button>`}
      <button class="m-btn" type="button" data-act="path">${cs("path")}Conectar com\u2026</button>
      ${d?`<a class="m-btn wide ghost" href="${d}">${t.t==="c"?"Perfil completo da companhia":"Perfil completo"} ${cs("ext")}</a>`:""}
    </div>
    <div id="m-pick-slot"></div>
    ${t.t==="c"&&n.length?`<div class="m-sec"><h3>Composi\xE7\xE3o acion\xE1ria<small>participa\xE7\xF5es relevantes</small></h3>${Qy(n)}</div>`:""}
    ${o.length>1?`<div class="m-sec"><h3>Quem controla<small>do controlador final at\xE9 aqui</small></h3><ol class="m-chain">${o.slice().reverse().map((m,y,g)=>{let p=g[y+1],M=p!=null?Ky(m,p):null,A=M==null?"":R.ef[M]&2?`bloco de controle \xB7 ${Ei(R.ep[M])}`:`controla com ${Ei(R.ep[M])}`;return`<li data-go="${m}" class="${m===i?"me":""}"><span class="nm">${xe(R.nodes[m].n)}</span><span class="pc">${A}</span></li>`}).join("")}</ol></div>`:""}
    ${n.length?`<div class="m-sec"><h3>${t.t==="c"?"Acionistas":"Quem \xE9 dono"}<small>${Mn(n.length,"acionista","acionistas")} relevante${n.length===1?"":"s"}</small></h3>${Ma(us.inc,8,"inc")}</div>`:""}
    ${s.length?`<div class="m-sec"><h3>${t.t==="c"?"Participa\xE7\xF5es em outras":"Participa\xE7\xF5es"}<small>${Mn(s.length,"empresa","empresas")}</small></h3>${Ma(us.out,8,"out")}</div>`:""}
    ${r.length?`<div class="m-sec"><h3>${t.t==="c"?"Quem do conselho ou da diretoria tamb\xE9m est\xE1 em outras":"Cargos"}<small>${Mn(r.length,t.t==="c"?"pessoa":"companhia",t.t==="c"?"pessoas":"companhias")}</small></h3>${Ma(us.brd,8,"brd")}</div>`:""}
    <p class="m-foot">Participa\xE7\xF5es acima de 5% e controladores, como declarados no Formul\xE1rio de Refer\xEAncia de cada companhia \xE0 CVM${t.v?"; valor estimado = participa\xE7\xE3o \xD7 valor de mercado":""}.</p>`,wh()}function t1(i){let t=R.groups[i],e=t.m.filter(a=>R.nodes[a].t==="c").sort((a,o)=>(R.nodes[o].mc||0)-(R.nodes[a].mc||0)),n=R.nodes[t.h];us={cos:e.map(a=>js(a,R.nodes[a].mc?cn(R.nodes[a].mc):"",[R.nodes[a].tk,a===t.h?"topo do grupo":""].filter(Boolean).join(" \xB7 "),!1))};let s=e.reduce((a,o)=>a+(R.nodes[o].mc||0),0),r=s?`<div class="m-bar">${e.filter(a=>R.nodes[a].mc).slice(0,12).map(a=>`<span data-go="${a}" style="flex:${R.nodes[a].mc/s};--c:${Yi(R.nodes[a])}" title="${xe(R.nodes[a].n)} \xB7 ${cn(R.nodes[a].mc)}"></span>`).join("")}</div>`:"";Wt("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${ds(t.sector)}"><i></i>Grupo econ\xF4mico \xB7 ${xe(ba[t.sector]?.[1]||"")}</div>
    <div class="m-head"><span class="m-badge" style="--c:${ds(t.sector)}">${cs("cias")}</span><div><h2>Grupo ${xe(t.n)}</h2><p>${Mn(t.nc,"companhia aberta","companhias abertas")} \xB7 ${Mn(t.m.length,"entidade","entidades")}</p></div></div>
    <div class="m-stats">
      <div class="m-stat"><span>Valor de mercado</span><b>${xe(t.mc?cn(t.mc):"\u2013")}</b></div>
      <div class="m-stat"><span>Companhias</span><b>${hn(t.nc)}</b></div>
      <div class="m-stat"><span>Entidades</span><b>${hn(t.m.length)}</b></div>
    </div>
    ${r}
    <div class="m-btns"><button class="m-btn primary wide" type="button" data-act="tree" data-node="${t.h}">${cs("tree")}Estrutura a partir de ${xe(bn(n.n))}</button></div>
    ${t.r.length?`<div class="m-sec"><h3>Controle final</h3>${Ma(t.r.map(a=>js(a,"",Ti(R.nodes[a]),!0)),6)}</div>`:""}
    <div class="m-sec"><h3>Companhias do grupo<small>valor de mercado</small></h3>${Ma(us.cos,12,"cos")}</div>
    <p class="m-foot">Grupo = companhias que chegam ao mesmo topo seguindo, em cada uma, o acionista controlador de maior participa\xE7\xE3o.</p>`,wh()}function wh(){let i=Wt("#m-panel");innerWidth<=760&&(i.hidden||xt.mode!=="world")&&i.classList.add("peek"),i.hidden=!1,document.body.classList.add("panel-open"),Wt("#m-panel-body").scrollTop=0,Kn(),clearTimeout(Kn.t),Kn.t=setTimeout(Kn,450)}function o0(){Wt("#m-panel").hidden=!0,document.body.classList.remove("panel-open"),Kn(),clearTimeout(Kn.t),Kn.t=setTimeout(Kn,450)}function e1(i,t){let e=l=>!(R.nodes[l].t==="j"&&(R.nodes[l].c==="fund"||R.nodes[l].c==="pen"))||l===i||l===t,n=new Int32Array(R.N).fill(-1),s=new Int32Array(R.N).fill(-1),r=[i];for(n[i]=i;r.length;){let l=r.shift();if(l===t)break;if(l!==i&&!e(l))continue;let c=(h,d)=>{n[h]===-1&&(n[h]=l,s[h]=d,r.push(h))};for(let h of R.out[l])c(R.et[h],h);for(let h of R.inc[l])c(R.es[h],h);for(let h of R.brd[l])c(R.bs[h]===l?R.bt[h]:R.bs[h],-2-h)}if(n[t]===-1)return null;let a=[t],o=[];for(let l=t;l!==i;l=n[l])o.unshift(s[l]),a.unshift(n[l]);return{path:a,ev:o}}function Mh(i,t,{push:e=!0}={}){let n=e1(i,t);if(!n){Wo(`N\xE3o h\xE1 liga\xE7\xE3o entre ${bn(R.nodes[i].n)} e ${bn(R.nodes[t].n)} sem passar por gestoras ou fundos`);return}xt.mode==="tree"&&hs(!1),xt.mode="path",xt.sel=-1,wa();let s=new Set(n.path),r=new Set,a=new Set;for(let l of n.ev)l>=0?r.add(l):a.add(-2-l);if(xt.pathIds=[i,t],xt.forceVis&&(xt.forceVis=null,Lt.setVisible(ii)),n.path.some(l=>!ii[l])){xt.forceVis=new Set(n.path);let l=ii.slice();for(let c of n.path)l[c]=1;Lt.setVisible(l)}ps(),Is(s,r,a,n.path,.85,!0),Wt("#m-mode").hidden=!1,Wt("#m-mode-text").innerHTML=`<span class="m-mode-k">Caminho</span><b>${xe(bn(R.nodes[i].n))} \u2192 ${xe(bn(R.nodes[t].n))}</b><span class="m-mode-n">${Mn(n.ev.length,"passo","passos")}</span>`;let o=n.ev.map(l=>{let c=f=>`<b data-go="${f}">${xe(R.nodes[f].n)}</b>`;if(l>=0){let f=R.es[l],m=R.et[l],y=R.ep[l],g=R.ef[l]&1;return`<li>${c(f)} ${g?"controla":"tem"} ${y>=0?`${Ei(y)} de`:"participa\xE7\xE3o em"} ${c(m)}</li>`}let h=-2-l,d=R.bs[h],u=R.bt[h];return`<li>${c(d)} est\xE1 ${{P:"na presid\xEAncia do conselho",E:"na presid\xEAncia executiva",C:"no conselho de administra\xE7\xE3o",D:"na diretoria"}[R.br[h]]||"na administra\xE7\xE3o"} de ${c(u)}</li>`});Wt("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${vh}"><i></i>Caminho mais curto</div>
    <div class="m-head"><span class="m-badge" style="--c:${vh}">${cs("path")}</span><div><h2>Como se conectam</h2><p>${xe(bn(R.nodes[i].n))} e ${xe(bn(R.nodes[t].n))}</p></div></div>
    <div class="m-sec"><h3>O caminho<small>${Mn(n.ev.length,"liga\xE7\xE3o","liga\xE7\xF5es")}</small></h3><ol class="m-path">${o.join("")}</ol></div>
    <div class="m-btns"><button class="m-btn wide" type="button" data-sel="${i}">Voltar para ${xe(bn(R.nodes[i].n))}</button><button class="m-btn wide" type="button" data-sel="${t}">Ir para ${xe(bn(R.nodes[t].n))}</button></div>
    <p class="m-foot">Liga\xE7\xF5es por participa\xE7\xE3o acion\xE1ria (5% ou mais, ou controle) e por pessoas que est\xE3o no conselho ou na diretoria das duas. Gestoras e fundos n\xE3o contam como ponte.</p>`,wh(),Lt.flyToNodes(n.path,{minSpan:20}),e&&Qs(`c/${R.nodes[i].id}/${R.nodes[t].id}`)}async function Ps(i,{push:t=!0}={}){let e=R.nodes[i],n=[];try{await Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1200))])}catch{}if(e.t==="c"&&e.k)try{n=(await fetch(`data/cias/perfil/${encodeURIComponent(e.k)}.json`,{cache:"no-cache"}).then(a=>a.ok?a.json():{})).participacoes||[]}catch{n=[]}let s=xt.mode!=="tree";s&&await bh(),xt.mode="tree",xt.sel=i,xt.group=-1,xt.treeFocus=i,gf(),wa(),ps(),Ah(-1),xt.hover=-1,Is(null),document.body.classList.add("in-tree"),xf(i),fs.open(i,n,{from:s?Lt.project(i,{}):null}),Wt("#m-mode").hidden=!1,Wt("#m-mode-text").innerHTML=`<span class="m-mode-k">Estrutura societ\xE1ria</span><b>${xe(e.n)}</b>`,Kn(),t&&Qs(`e/${e.id}`)}function bh(){let i=Wt("#m-fade");return!i||xh?Promise.resolve():(i.classList.add("on"),clearTimeout(bh.t),bh.t=setTimeout(()=>i.classList.remove("on"),260),new Promise(t=>setTimeout(t,170)))}function hs(i=!0){xt.mode==="tree"&&(bh(),fs.close(),document.body.classList.remove("in-tree")),xt.mode="world",Wt("#m-mode").hidden=!0,xt.pathIds=null,xt.forceVis&&(xt.forceVis=null,Lt.setVisible(ii)),i&&(xt.sel>=0?Rn(xt.sel):(Is(null),Qs("")))}function n1(i,t=9){let e=Vo(i.trim());if(e.length<2)return[];let n=e.split(/\s+/),s=[];for(let r of R.groups)r.nc<2||n.every(a=>r.f.includes(a))&&s.push({g:r.i,s:(r.f.startsWith(e)?100:50)+Math.log10(r.mc||10)});for(let r of R.nodes){if(!ii[r.i]&&r.t!=="c")continue;let a=0;r.f===e||r.tk&&Vo(r.tk)===e?a=120:r.f.startsWith(e)||r.tk&&Vo(r.tk).startsWith(e)?a=90:n.every(o=>r.f.includes(o))&&(a=r.f.split(/\s+/).some(o=>o.startsWith(n[0]))?60:35),a&&(a+=r.t==="c"?12+Math.log10(r.mc||1e6):Math.log10(r.v||1e6)+R.deg[r.i]*.2,s.push({i:r.i,s:a}))}return s.sort((r,a)=>a.s-r.s).slice(0,t)}function i1(i){if(!i.length)return'<li class="none">Nada com esse nome no mapa.</li>';let t=[["Grupos econ\xF4micos",i.filter(n=>n.g!=null)],["Companhias",i.filter(n=>n.i!=null&&R.nodes[n.i].t==="c")],["Pessoas e investidores",i.filter(n=>n.i!=null&&R.nodes[n.i].t!=="c")]],e=0;return t.filter(([,n])=>n.length).map(([n,s])=>`<li class="grp" role="presentation">${n}</li>`+s.map(r=>{let a=e++;if(r.g!=null){let l=R.groups[r.g];return`<li role="option" data-idx="${a}" aria-selected="false"><span class="m-dot" style="--c:${ds(l.sector)}"></span><span class="m-r-txt"><b>Grupo ${xe(l.n)}</b><small>${Mn(l.nc,"companhia","companhias")}${l.mc?` \xB7 ${cn(l.mc)}`:""}</small></span></li>`}let o=R.nodes[r.i];return`<li role="option" data-idx="${a}" aria-selected="false"><span class="m-dot" style="--c:${Yi(o)}"></span><span class="m-r-txt"><b>${xe(o.n)}</b><small>${xe(o.t==="c"?[o.tk,o.mc?cn(o.mc):"capital fechado",o.st].filter(Boolean).join(" \xB7 "):[Ti(o),o.v?`\u2248 ${cn(o.v)}`:""].filter(Boolean).join(" \xB7 "))}</small></span></li>`}).join("")).join("")}function l0(i,t,e){let n=[],s=0,r=()=>{n=n1(i.value),n=[...n.filter(o=>o.g!=null),...n.filter(o=>o.i!=null&&R.nodes[o.i].t==="c"),...n.filter(o=>o.i!=null&&R.nodes[o.i].t!=="c")],s=Math.min(s,Math.max(0,n.length-1)),t.hidden=!i.value.trim(),t.innerHTML=i1(n),t.querySelectorAll("[data-idx]").forEach(o=>o.setAttribute("aria-selected",String(+o.dataset.idx===s))),i.closest("[role=combobox]")?.setAttribute("aria-expanded",String(!t.hidden))},a=o=>{o&&(i.value="",t.hidden=!0,i.blur(),e(o))};i.addEventListener("input",()=>{s=0,r()}),i.addEventListener("focus",()=>{i.value.trim()&&r()}),i.addEventListener("keydown",o=>{o.key==="ArrowDown"||o.key==="ArrowUp"?(o.preventDefault(),s=(s+(o.key==="ArrowDown"?1:-1)+n.length)%Math.max(1,n.length),r()):o.key==="Enter"?(o.preventDefault(),a(n[s])):o.key==="Escape"&&ni.on?Zo():o.key==="Escape"&&(i.value="",t.hidden=!0,i.blur())}),t.addEventListener("pointerdown",o=>{let l=o.target.closest("[data-idx]");l&&(o.preventDefault(),a(n[+l.dataset.idx]))}),document.addEventListener("pointerdown",o=>{!t.contains(o.target)&&o.target!==i&&(t.hidden=!0)})}var hf="groups";function uf(){let i=Wt("#m-rank"),t=Wt("#m-tab-note"),e="";if(hf==="groups"){t.textContent="Grupos econ\xF4micos pelo valor de mercado das companhias abertas que re\xFAnem.";let n=R.groups.filter(r=>r.nc>=2),s=n[0]?.mc||1;e=n.slice(0,60).map(r=>`<li data-group="${r.i}" class="${xt.group===r.i?"on":""}" style="--c:${ds(r.sector)};--w:${((r.mc||0)/s*100).toFixed(1)}%"><b>${xe(r.n)}</b><span class="v">${r.mc?cn(r.mc).replace("R$ ",""):""}</span>
      <small>${Mn(r.nc,"companhia","companhias")}${r.r.length?` \xB7 ${xe(r.r.slice(0,2).map(a=>bn(R.nodes[a].n)).join(", "))}`:""}</small><i class="m-rank-bar"></i></li>`).join("")}else if(hf==="investors"){t.textContent="Quem tem mais valor em participa\xE7\xF5es diretas (participa\xE7\xE3o \xD7 valor de mercado).";let n=R.nodes.filter(r=>r.t!=="c"&&r.v).sort((r,a)=>a.v-r.v).slice(0,60),s=n[0]?.v||1;e=n.map(r=>`<li data-go="${r.i}" class="${xt.sel===r.i?"on":""}" style="--c:${Yi(r)};--w:${(r.v/s*100).toFixed(1)}%"><b>${xe(bn(r.n))}</b><span class="v">${cn(r.v).replace("R$ ","")}</span>
      <small>${xe(Ti(r))} \xB7 ${Mn(R.out[r.i].length,"participa\xE7\xE3o","participa\xE7\xF5es")}</small><i class="m-rank-bar"></i></li>`).join("")}else{t.textContent="Pessoas e empresas que mais ligam companhias entre si: participa\xE7\xF5es e cadeiras em conselhos e diretorias.";let n=a=>new Set([...R.out[a.i].map(o=>R.et[o]),...R.brd[a.i].map(o=>R.bt[o])].filter(o=>R.nodes[o].t==="c")).size,s=R.nodes.filter(a=>a.t==="p"||a.t==="j").map(a=>[a,n(a)]).filter(([,a])=>a>=3).sort((a,o)=>o[1]-a[1]||(o[0].v||0)-(a[0].v||0)).slice(0,60),r=s[0]?.[1]||1;e=s.map(([a,o])=>`<li data-go="${a.i}" class="${xt.sel===a.i?"on":""}" style="--c:${Yi(a)};--w:${(o/r*100).toFixed(1)}%"><b>${xe(bn(a.n))}</b><span class="v">${o}</span>
      <small>${xe(Ti(a))} \xB7 ${o} companhias</small><i class="m-rank-bar"></i></li>`).join("")}i.innerHTML=e}function Eh(){for(let i of Wt("#m-rank").children)i.classList.toggle("on",i.dataset.group!=null&&+i.dataset.group===xt.group||i.dataset.go!=null&&+i.dataset.go===xt.sel)}var s1=[["tower","Companhia aberta",'<svg viewBox="0 0 20 20"><path d="M6 18V5h8v13z" fill="#141b29"/><path d="M6 5h8v1.8H6z" fill="var(--c)"/><path d="M7.6 8.4h1.3v1.3H7.6zM11 8.4h1.3v1.3H11zM9.3 11h1.3v1.3H9.3zM7.6 13.6h1.3v1.3H7.6zM11 13.6h1.3v1.3H11zM11 11h1.3v1.3H11z" fill="#ffd9a0"/></svg>'],["block","Capital fechado",'<svg viewBox="0 0 20 20"><path d="M4 17v-6h12v6z" fill="#141b29"/><path d="M4 11h12v1.5H4z" fill="var(--c)"/><path d="M6 13.6h1.3v1.3H6zM12.6 13.6h1.3v1.3h-1.3z" fill="#ffd9a0"/></svg>'],["sub","Controlada em comum",'<svg viewBox="0 0 20 20"><path d="M4 17v-6h12v6z" fill="#141b29"/><path d="M4 11h12v1.5H4z" fill="#7fd6b4"/><path d="M9.3 13.6h1.3v1.3H9.3z" fill="#ffd9a0"/></svg>'],["pawn","Pessoa f\xEDsica",'<svg viewBox="0 0 20 20"><circle cx="10" cy="6" r="2.6" fill="#f0c9a0"/><path d="M7.4 15.5 8.4 9.4h3.2l1 6.1z" fill="#f0c9a0"/><ellipse cx="10" cy="16" rx="4.6" ry="1.6" fill="#c99e74"/></svg>'],["tile","Holding ou empresa",'<svg viewBox="0 0 20 20"><path d="M5 8.5 10 6l5 2.5v6L10 17l-5-2.5z" fill="#5f7088"/><path d="M5 8.5 10 6l5 2.5-5 2.5z" fill="#a9bdd6"/></svg>'],["inv","Gestora, fundo ou governo",'<svg viewBox="0 0 20 20"><path d="M10 2.5 15 9 10 17.5 5 9z" fill="#b3a6f7"/><path d="M10 2.5 15 9H5z" fill="#d6cffb"/><path d="M10 17.5 15 9H10z" fill="#8576d6"/></svg>']],r1={tower:"Aberta",block:"Fechada",tile:"Holding",sub:"Controlada",pawn:"Pessoa",inv:"Gestora"},a1=()=>s1.map(([i,t,e])=>`<button type="button" class="m-key-i" data-shape="${i}" title="Destacar no mapa: ${t}" style="--c:${ds("util")}">${e}<span class="l">${t}</span><span class="s">${r1[i]}</span></button>`).join("")+'<span class="m-key-sep"></span><span class="m-key-i m-key-ctl" title="O feixe corre de quem \xE9 dono para o que \xE9 possu\xEDdo"><i class="m-key-ln"></i><span class="l">Controla</span><span class="s">Controla</span></span><span class="m-key-i m-key-ctl part" title="Participa\xE7\xE3o sem controle"><i class="m-key-ln"></i><span class="l">Participa</span><span class="s">Participa</span></span>';function c0(){let i=R.data.mapa,t=i.plates.map(()=>({n:0,listed:0,mc:0}));for(let e=0;e<R.N;e++){let n=R.nodes[e],s=t[i.plate[e]];n.t==="c"&&(s.n++,n.mc&&(s.listed++,s.mc+=n.mc))}return t}var $o=i=>ba[i.c]?.[1]||i.c,o1=i=>ba[i.c]?.[2]||i.c,Th=i=>ds(i.c);function l1(){let i=c0(),t=R.data.mapa.plates.map((e,n)=>n).sort((e,n)=>i[n].mc-i[e].mc);Wt("#m-legend").innerHTML=`<div class="m-lg-sec">${t.map(e=>{let n=R.data.mapa.plates[e];return`<button class="lg" type="button" data-plate="${e}"><i style="--c:${Th(n)}"></i><span>${xe($o(n))}</span><small>${hn(i[e].n)}</small></button>`}).join("")}</div>`,Wt("#m-key").innerHTML=a1()}function Qs(i){let t=i?`#${i}`:"";location.hash!==t&&history.replaceState(null,"",t||location.pathname+location.search)}function h0(){let i=decodeURIComponent(location.hash.replace(/^#/,"")),[t,e,n]=i.split("/"),s=r=>r?R.byId.has(r)?R.byId.get(r):r.startsWith("k")&&R.byK.has(r.slice(1))?R.byK.get(r.slice(1)):R.bySlug.has(r)?R.bySlug.get(r):R.byK.has(r)?R.byK.get(r):-1:-1;t==="n"&&s(e)>=0?Rn(s(e),{push:!1}):t==="s"&&R.bySlug.has(e)?Rn(R.bySlug.get(e),{push:!1}):t==="g"&&R.groups[+e]?yh(+e,{push:!1}):t==="e"&&s(e)>=0?Ps(s(e),{push:!1}):t==="c"&&s(e)>=0&&s(n)>=0?Mh(s(e),s(n),{push:!1}):t==="setor"&&Yp(e)>=0?Xo(Yp(e),{push:!1}):(t==="n"||t==="s"||t==="e")&&Wo("Essa entidade n\xE3o est\xE1 no mapa: ela n\xE3o tem participa\xE7\xE3o relevante em companhia aberta.")}var Jn={pool:[],used:new Map,layer:null,t:0},gh=[],Sa=0;function c1(){let i=performance.now();if(i-Sa<300)return gh;Sa=i,gh=[];for(let t of document.querySelectorAll(".m-top > :not(.m-pop), #m-explore, #m-panel, .m-nav > *, #m-hud, #m-key, #m-mode, #m-hint")){if(t.hidden||t.offsetParent===null)continue;let e=t.getBoundingClientRect();e.width&&e.height&&gh.push([e.left-6,e.top-6,e.right+6,e.bottom+6])}return gh}var Go=null;function h1(){if(Go)return Go;Go=R.data.mapa.plates.map(()=>[]);for(let i of R.labelOrder)R.nodes[i].t==="c"&&Go[R.data.mapa.plate[i]].push(i);return Go}function u1(){for(let[i,t]of Jn.used)t.classList.remove("on"),Jn.used.delete(i),Jn.pool.push(t)}function Kp(i){let t=R.nodes[i];return xt.rel&&xt.rel.has(i)?[bn(t.n),xt.rel.get(i)]:t.t==="c"?[bn(t.n),[t.tk,t.mc?cn(t.mc).replace("R$ ","R$ ").toUpperCase():"capital fechado"].filter(Boolean).join(" \xB7 ")]:[bn(t.n),[Ti(t),t.v?`\u2248 ${cn(t.v)}`:""].filter(Boolean).join(" \xB7 ")]}var qo=[];function f1(){let i=c0(),t=Wt("#m-plates");t.innerHTML="",R.data.mapa.plates.forEach((e,n)=>{let s=document.createElement("button");s.type="button",s.className="m-plate",s.dataset.plate=n,s.style.setProperty("--c",Th(e));let r=Mn(i[n].n,"companhia","companhias");s.innerHTML=`<b><span class="full">${xe($o(e))}</span><span class="short">${xe(o1(e))}</span></b><small>${r}${i[n].mc?` \xB7 ${cn(i[n].mc)}`:""}</small>`,s.title=`Ver o setor ${$o(e)} inteiro`,t.appendChild(s),qo[n]={el:s,p:e}})}var d1={};function p1(i){let t=Lt.pxPerUnit();qo.forEach(({el:e},n)=>{let s=Lt.plates[n],r=Lt.projectPoint(s.x0+.9,Lt.PLATE_H+.1,s.z0+.7,d1),a=(s.x1-s.x0)*t,o=!!r.f&&a>46&&xt.mode!=="tree";if(e.classList.toggle("on",o),e.classList.toggle("compact",a<210),e.classList.toggle("dim",xt.sector>=0&&xt.sector!==n),!o)return;e.style.transform=`translate3d(${r.x.toFixed(1)}px, ${r.y.toFixed(1)}px, 0)`,e.style.maxWidth=`${Math.max(60,a-18).toFixed(0)}px`;let l=a<210?1:2;(e._fmt!==l||!e._w)&&(e._fmt=l,e._w=e.offsetWidth,e._h=e.offsetHeight),e._w&&i.push([r.x-4,r.y-4,r.x+e._w+4,r.y+e._h+4])})}function m1(){if(!Lt||xt.mode==="tree"){for(let u of Jn.used.values())u.classList.remove("on");for(let{el:u}of qo)u.classList.remove("on");return}let i=innerWidth,t=innerHeight,e=[...c1()];p1(e);let n=(u,f,m,y)=>{if(u<8||f<8||m>i-8||y>t-8)return!1;for(let g of e)if(u<g[2]&&m>g[0]&&f<g[3]&&y>g[1])return!1;return!0},s=Lt.pxPerUnit(),r=pn((s-6)/40,0,1),a=Math.round((ya?5:9)+r*(ya?14:30)),o=xt.hl,l;if(o)l=[...o].sort((u,f)=>_h(f)-_h(u)).slice(0,60);else if(xt.sector<0&&r<.5){let u=h1(),f=s*s,m=Lt.plates.map(y=>pn(Math.round((y.x1-y.x0)*(y.z1-y.z0)*f/42e3),1,6));l=[];for(let y=0;y<6;y++)for(let g=0;g<u.length;g++)y<m[g]&&u[g][y]!=null&&l.push(u[g][y]);a=Math.max(a,ya?9:18)}else xt.sector>=0?(l=R.labelOrder.filter(u=>R.data.mapa.plate[u]===xt.sector&&R.nodes[u].t==="c"&&(R.nodes[u].mc||r>.5)),a=ya?5+Math.round(r*10):8+Math.round(r*22)):l=R.labelOrder.slice(0,260);let c=new Map,h={},d=0;for(let u of l){if(d>=a)break;if(c.has(u)||!ii[u]&&!xt.forceVis?.has(u))continue;let f=R.nodes[u],m=o&&o.has(u);if(!m&&f.t!=="c"&&!Lt.sky[u]&&r<.55||(Lt.project(u,h),!h.f))continue;let[y,g]=Kp(u),p=f.t==="c"&&R.crank[u]<10,M=Math.max(y.length*(p?7.6:6.9),g.length*6.1)+14,A=30,_=null;for(let[b,w]of[["r",!1],["l",!1],["r",!0],["l",!0]]){let I=b==="r"?h.x+14:h.x-14-M,x=w?h.y+8:h.y-34;if(n(I,x,I+M,x+A)){_={side:b,below:w,x0:I,y0:x};break}}_&&(e.push([_.x0,_.y0,_.x0+M,_.y0+A],[h.x-4,h.y-4,h.x+4,h.y+4]),c.set(u,{x:h.x,y:h.y,side:_.side,below:_.below,a:1,hl:m,big:p}),d++)}for(let[u,f]of Jn.used)c.has(u)||(f.classList.remove("on"),Jn.used.delete(u),Jn.pool.push(f));for(let[u,f]of c){let m=Jn.used.get(u);if(m)!m.classList.contains("on")&&performance.now()-m._t>20&&m.classList.add("on");else{m=Jn.pool.pop()||Object.assign(document.createElement("div"),{className:"m-lab"}),m.parentNode||Jn.layer.appendChild(m);let[y,g]=Kp(u);m.innerHTML=`<i class="m-lab-dot"></i><span class="m-lab-ln"></span><span class="m-lab-tx"><b>${xe(y)}</b><small>${xe(g)}</small></span>`,m.classList.toggle("rel",!!(xt.rel&&xt.rel.has(u))),m.classList.toggle("relc",!!(xt.rel&&/^control/.test(xt.rel.get(u)||""))),m.dataset.i=u,m.classList.remove("on"),m._t=performance.now(),Jn.used.set(u,m)}m.classList.toggle("l",f.side==="l"),m.classList.toggle("b",!!f.below),m.classList.toggle("hl",!!f.hl),m.classList.toggle("big",f.big),m.style.transform=`translate3d(${f.x.toFixed(1)}px, ${f.y.toFixed(1)}px, 0)`,m.style.setProperty("--a","1")}}function ff(){let i=Lt.plateAt(innerWidth/2+Lt.view.offX,innerHeight/2+Lt.view.offY),t=i>=0?R.data.mapa.plates[i]:null,e=u0/Math.max(1,Lt.cam.d),n=e<1.45?"":`<span>ZOOM ${e.toFixed(1).replace(".",",")}\xD7</span>${t?`<span class="m-hud-sec" style="--c:${Th(t)}">${xe($o(t).toUpperCase())}</span>`:""}`;n!==ff.last&&(Wt("#m-hud").innerHTML=n,ff.last=n)}var u0=160;function Ah(i,t,e){let n=Wt("#m-tip");if(i<0||ya){n.hidden=!0;return}let s=R.nodes[i],r=[];if(s.t==="c"){r.push([s.tk||"Capital fechado",s.mc?cn(s.mc):""]);let c=a0(i);c>=0&&r.push(["Controle",bn(R.nodes[c].n)])}else r.push([Ti(s),s.v?`\u2248 ${cn(s.v)}`:""]);let a=new Set([...R.out[i].map(c=>R.et[c]),...R.inc[i].map(c=>R.es[c])]).size;r.push(["Liga\xE7\xF5es",hn(a+R.brd[i].length)]),n.innerHTML=`<div class="m-tip-head"><i style="background:${Yi(s)}"></i><b>${xe(s.n)}</b></div>${r.map(([c,h])=>`<div class="row"><span>${xe(c)}</span><span>${xe(h)}</span></div>`).join("")}<div class="row muted"><span>${Lt.sky[i]?"Paira sobre o que possui \xB7 ":Lt.isGround[i]?"":"Na pra\xE7a da companhia \xB7 "}clique para ver as liga\xE7\xF5es</span></div>`,n.hidden=!1;let o=n.offsetWidth,l=n.offsetHeight;n.style.left=`${pn(t+18,8,innerWidth-o-8)}px`,n.style.top=`${e+18+l>innerHeight-8?e-l-14:e+18}px`}function Kn(){if(Sa=0,!Lt)return;let i=Wt("#m-explore"),t=Wt("#m-panel"),e=Wt("#m-key").getBoundingClientRect(),n=t&&!t.hidden,s=0,r=0,a=0,o=Wt(".m-top").getBoundingClientRect().bottom+6;innerWidth>760?(i&&!i.classList.contains("collapsed")&&i.offsetParent&&(s=i.getBoundingClientRect().right),r=n?innerWidth-t.offsetLeft:62,e.height&&(a=innerHeight-e.top+6)):n?a=t.offsetHeight:a=e.height?innerHeight-e.top+6:64,Lt.setInsets(s,r,xt.mode==="tree"?0:o,a);let l=Wt("#m-mode"),c=l&&!l.hidden?Math.max(o,l.getBoundingClientRect().bottom+6):o;fs?.setFree(s,r,a,c)}var f0=0,jp=0;function d0(i){f0=requestAnimationFrame(d0),!document.hidden&&(xt.mode==="tree"?fs.frame(i):(Lt.update(i),Lt.render(),i-jp>32&&(m1(),ff(),jp=i)))}var qi=new Map,ln=null,Ks=null,Qp=0,df=0,pf=null;function g1(i){if(xt.mode==="tree")return;if(i.currentTarget.setPointerCapture(i.pointerId),qi.set(i.pointerId,{x:i.clientX,y:i.clientY}),xt.lastInput=performance.now(),ps(),Zo(),Lt.touch(),Lt.cam.vx=Lt.cam.vz=0,Lt.cam.fly=null,qi.size===2){let[e,n]=[...qi.values()];Ks={d:Math.hypot(e.x-n.x,e.y-n.y),mx:(e.x+n.x)/2,my:(e.y+n.y)/2},ln=null;return}ln={x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,moved:!1,hist:[{x:i.clientX,y:i.clientY,t:performance.now()}]}}function x1(i){if(qi.has(i.pointerId)&&qi.set(i.pointerId,{x:i.clientX,y:i.clientY}),xt.lastInput=performance.now(),qi.size&&Lt?.touch(),xt.mode!=="tree"){if(Ks&&qi.size===2){let[t,e]=[...qi.values()],n=Math.hypot(t.x-e.x,t.y-e.y),s=(t.x+e.x)/2,r=(t.y+e.y)/2;Lt.zoom(Ks.d/Math.max(1,n),s,r),Lt.pan(s-Ks.mx,r-Ks.my),Ks={d:n,mx:s,my:r};return}if(ln){let t=i.clientX-ln.x,e=i.clientY-ln.y;if(!ln.moved&&Math.hypot(i.clientX-ln.sx,i.clientY-ln.sy)>(ya?8:4)&&(ln.moved=!0,i.currentTarget.classList.add("dragging"),Ah(-1)),ln.moved){Lt.pan(t,e),ln.x=i.clientX,ln.y=i.clientY;let n=performance.now();for(ln.hist.push({x:i.clientX,y:i.clientY,t:n});ln.hist.length>6||ln.hist.length>2&&n-ln.hist[0].t>100;)ln.hist.shift()}return}i.pointerType==="mouse"&&(pf=[i.clientX,i.clientY],df||(df=requestAnimationFrame(v1)))}}function v1(){if(df=0,!pf||xt.mode==="tree")return;let[i,t]=pf,e=Lt.pick(i,t,ii);Wt("#map").classList.toggle("pointing",e>=0||p0(i,t)!=null||m0(i,t)>=0),xt.hover=e,Ah(e,i,t)}function p0(i,t){for(let[e,n]of Jn.used){if(!n.classList.contains("on"))continue;let s=n.lastElementChild.getBoundingClientRect();if(i>=s.left&&i<=s.right&&t>=s.top&&t<=s.bottom)return e}return null}function m0(i,t){for(let e=0;e<qo.length;e++){let n=qo[e].el;if(!n.classList.contains("on"))continue;let s=n.getBoundingClientRect();if(i>=s.left&&i<=s.right&&t>=s.top&&t<=s.bottom)return e}return-1}function t0(i){if(qi.delete(i.pointerId),i.currentTarget.classList.remove("dragging"),Ks){if(qi.size<2){Ks=null;let o=[...qi.values()][0];o&&(ln={x:o.x,y:o.y,sx:o.x,sy:o.y,moved:!0,hist:[{x:o.x,y:o.y,t:performance.now()}]})}return}if(!ln||xt.mode==="tree"){ln=null;return}let t=ln;if(ln=null,t.moved){let o=t.hist;if(o.length>=2&&!xh){let l=o[0],c=o[o.length-1],h=Math.max(16,c.t-l.t);performance.now()-c.t<80&&Lt.fling((c.x-l.x)/h,(c.y-l.y)/h)}return}let e=performance.now(),n=e-Qp<320;Qp=e;let s=p0(i.clientX,i.clientY);if(s!=null){n?Ps(s):Rn(s);return}let r=m0(i.clientX,i.clientY);if(r>=0){Xo(r);return}let a=Lt.pick(i.clientX,i.clientY,ii);if(n&&a>=0){Ps(a);return}if(a>=0){Rn(a);return}if(n){Lt.zoom(.55,i.clientX,i.clientY);return}(xt.sel>=0||xt.group>=0||xt.sector>=0||xt.shape||xt.mode==="path")&&(xt.mode==="path"&&hs(!1),Rn(-1))}function _1(i){if(i.preventDefault(),xt.lastInput=performance.now(),ps(),Zo(),Lt.touch(),xt.mode==="tree")return;let t=Math.exp(i.deltaY*(i.ctrlKey?.012:i.deltaMode===1?.05:.0018));Lt.zoom(t,i.clientX,i.clientY)}var ni={on:!1,t0:0,raf:0};function y1(i){let t=Wt("#m-intro");if(!t)return;let e=R.nodes.filter(o=>o.t==="c"),n=e.reduce((o,l)=>o+(l.mc||0),0),s=R.nodes.length-e.length;Wt("#m-intro-cap").textContent=`${hn(e.length)} companhias \xB7 ${hn(s)} acionistas e conselheiros \xB7 ${hn(R.M)} participa\xE7\xF5es`;let r=Wt("#m-intro-num");t.hidden=!1,requestAnimationFrame(()=>t.classList.add("on")),Object.assign(ni,{on:!0,done:0});let a=o=>{if(!ni.on)return;let l=pn(Lt.introK/.86,0,1),c=1-Math.pow(1-l,3);if(r.textContent=hn(n*c/1e12,2),Lt.introK>=1&&!ni.done&&(ni.done=o),ni.done&&o-ni.done>1800){Zo(!0);return}ni.raf=requestAnimationFrame(a)};ni.raf=requestAnimationFrame(a)}function Zo(i=!1){if(!ni.on)return;ni.on=!1,cancelAnimationFrame(ni.raf);let t=Wt("#m-intro");t.classList.remove("on"),setTimeout(()=>{t.hidden=!0},900),i||Lt.skipIntro(),document.body.classList.remove("intro"),br.get("mundo-hint",0)||(Yo=setTimeout(()=>{xt.sel<0&&xt.mode==="world"&&(Wt("#m-hint").hidden=!1,Sa=0,Yo=setTimeout(ps,9e3))},1400))}var Yo=0;function ps(){let i=Wt("#m-hint");i&&!i.hidden&&(i.hidden=!0,br.set("mundo-hint",1),Sa=0),clearTimeout(Yo)}function M1(i){let t=R.data.mapa,e=t.plates[i],n=[];for(let b=0;b<R.N;b++)t.plate[b]===i&&n.push(b);let s=(b,w)=>(R.nodes[w].mc||0)-(R.nodes[b].mc||0)||R.nodes[b].n.localeCompare(R.nodes[w].n),r=Th(e);us={};let a=n.filter(b=>R.nodes[b].t==="c").sort(s),o=a.filter(b=>R.nodes[b].mc),l=o.reduce((b,w)=>b+R.nodes[w].mc,0),c=new Map;for(let b of a){let w=R.nodes[b].st||"Outros";(c.get(w)||c.set(w,[]).get(w)).push(b)}let h=[...c.entries()].map(([b,w])=>[b,w,w.reduce((I,x)=>I+(R.nodes[x].mc||0),0)]).sort((b,w)=>w[2]-b[2]||w[1].length-b[1].length),d=h.map(([b,w,I],x)=>(us[`seg${x}`]=w.map(C=>js(C,R.nodes[C].mc?cn(R.nodes[C].mc):"",[R.nodes[C].tk||"capital fechado",R.nodes[C].g!=null&&R.groups[R.nodes[C].g]?.nc>=2?`grupo ${R.groups[R.nodes[C].g].n}`:""].filter(Boolean).join(" \xB7 "),!1)),`<div class="m-seg"><h4><span>${xe(b)}</span><small>${Mn(w.length,"companhia","companhias")}${I?` \xB7 ${cn(I)}`:""}</small></h4>${Ma(us[`seg${x}`],5,`seg${x}`)}</div>`)).join(""),u=b=>b.m.filter(w=>R.nodes[w].t==="c"&&t.plate[w]===i).length,f=R.groups.filter(b=>b.nc>=2&&u(b)>0).slice(0,12),m=f.map(b=>{let w=u(b);return`<li data-group="${b.i}"><span class="m-dot" style="--c:${ds(b.sector)}"></span><span class="nm">Grupo ${xe(b.n)}</span><span class="pc">${b.mc?cn(b.mc):""}</span><small>${w===b.nc?Mn(b.nc,"companhia","companhias"):`${w} de ${b.nc} companhias aqui`}${b.r.length?` \xB7 ${xe(b.r.slice(0,2).map(I=>bn(R.nodes[I].n)).join(", "))}`:""}</small></li>`}).join(""),y=new Map;for(let b of a)for(let w of R.inc[b]){let I=R.es[w];if(!Lt.isInv[I])continue;let x=y.get(I)||{n:0,v:0};x.n++,x.v+=Math.max(0,R.ep[w])/100*(R.nodes[b].mc||0),y.set(I,x)}let p=[...y.entries()].sort((b,w)=>w[1].n-b[1].n||w[1].v-b[1].v).slice(0,8).map(([b,w])=>js(b,w.v?`\u2248 ${cn(w.v)}`:"",`${Ti(R.nodes[b])} \xB7 em ${Mn(w.n,"companhia","companhias")} do setor`,!1)).join(""),M=n.filter(b=>!Lt.sky[b]),A=M.filter(b=>R.nodes[b].t==="p").length,_=M.filter(b=>R.nodes[b].t==="j"||R.nodes[b].t==="s").length;Wt("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${r}"><i></i>Setor</div>
    <div class="m-head"><span class="m-badge" style="--c:${r}">${cs("cias")}</span><div><h2>${xe($o(e))}</h2><p>${Mn(a.length,"companhia","companhias")} \xB7 ${Mn(h.length,"segmento","segmentos")} \xB7 ${Mn(f.length,"grupo","grupos")}</p></div></div>
    <div class="m-stats"><div class="m-stat"><span>Valor de mercado</span><b>${xe(l?cn(l):"\u2013")}</b></div><div class="m-stat"><span>Na bolsa</span><b>${hn(o.length)}</b></div><div class="m-stat"><span>Capital fechado</span><b>${hn(a.length-o.length)}</b></div></div>
    <p class="m-note m-sec-note">Nas pra\xE7as do bairro est\xE3o ${Mn(A,"pessoa f\xEDsica","pessoas f\xEDsicas")} e ${Mn(_,"holding ou empresa","holdings e empresas")} que s\xF3 t\xEAm participa\xE7\xE3o aqui.</p>
    <div class="m-sec"><h3>Companhias por segmento<small>valor de mercado</small></h3>${d}</div>
    ${m?`<div class="m-sec"><h3>Grupos econ\xF4micos<small>valor de mercado</small></h3><ul class="m-list">${m}</ul></div>`:""}
    ${p?`<div class="m-sec"><h3>Investidores mais presentes<small>companhias do setor</small></h3><ul class="m-list">${p}</ul></div>`:""}
    <p class="m-foot">Cada companhia fica no bairro do seu setor, com os donos de uma s\xF3 companhia na pra\xE7a dela; quem tem participa\xE7\xE3o em v\xE1rias paira acima da cidade. Segmento \xE9 o setor de atividade declarado \xE0 CVM.</p>`,wh()}function b1(){let i=Wt("#map");addEventListener("resize",()=>{Lt.resize(innerWidth,innerHeight),fs?.resize(innerWidth,innerHeight),Kn()}),i.addEventListener("pointerdown",g1),i.addEventListener("pointermove",x1),i.addEventListener("pointerup",t0),i.addEventListener("pointercancel",t0),i.addEventListener("pointerleave",()=>{ln||xt.mode==="tree"||(Ah(-1),xt.hover=-1)}),i.addEventListener("wheel",_1,{passive:!1}),Jn.layer.addEventListener("click",n=>{let s=n.target.closest(".m-lab");s&&xt.mode!=="tree"&&Rn(+s.dataset.i)}),Jn.layer.addEventListener("dblclick",n=>{let s=n.target.closest(".m-lab");s&&Ps(+s.dataset.i)}),Wt("#m-plates").addEventListener("click",n=>{let s=n.target.closest("[data-plate]");s&&Xo(+s.dataset.plate)});let t=n=>()=>{xt.lastInput=performance.now(),xt.mode==="tree"?fs.zoom(n):Lt.zoom(n)};Wt("#m-zin").onclick=t(.7),Wt("#m-zout").onclick=t(1/.7),Wt("#m-zfit").onclick=()=>{xt.mode==="tree"?fs.fit():Lt.fitAll()},Wt("#m-layers-btn").onclick=n=>{n.stopPropagation();let s=Wt("#m-layers");s.hidden=!s.hidden,Wt("#m-layers-btn").setAttribute("aria-expanded",String(!s.hidden))},document.addEventListener("pointerdown",n=>{n.target.closest("#m-layers, #m-layers-btn")||(Wt("#m-layers").hidden=!0,Wt("#m-layers-btn").setAttribute("aria-expanded","false"))});for(let n of document.querySelectorAll("#m-layers [data-layer]"))n.checked=!!xt.layers[n.dataset.layer],n.onchange=()=>{if(xt.layers[n.dataset.layer]=n.checked,br.set("mundo-layers",xt.layers),n0(),xt.sel>=0&&xt.mode==="world"){let s=i0(xt.sel);Is(s.nodes,s.edges,s.brd,[xt.sel],.75,!1,s0(xt.sel,s))}else if(xt.shape){let s=xt.shape;xt.shape=null,Zp(s)}uf()};let e=n=>{let s=n.target.closest("[data-plate]");s&&(Wt("#m-layers").hidden=!0,Xo(+s.dataset.plate))};Wt("#m-legend").onclick=e,Wt("#m-key").onclick=n=>{let s=n.target.closest("[data-shape]");s&&Zp(s.dataset.shape)},Wt("#m-explore-toggle").onclick=()=>{let n=Wt("#m-explore");n.classList.toggle("collapsed"),Wt("#m-explore-toggle").setAttribute("aria-expanded",String(!n.classList.contains("collapsed"))),br.set("mundo-explore",!n.classList.contains("collapsed")),Kn()},Wt(".m-tabs").onclick=n=>{let s=n.target.closest("[data-tab]");if(s){hf=s.dataset.tab;for(let r of document.querySelectorAll(".m-tabs [data-tab]"))r.setAttribute("aria-checked",String(r===s));uf(),Wt("#m-rank").scrollTop=0}},Wt(".m-grab").onclick=()=>{Wt("#m-panel").classList.toggle("peek"),setTimeout(Kn,420)},Wt("#m-panel-close").onclick=()=>{xt.mode!=="world"&&hs(!1),Rn(-1)},Wt("#m-mode-close").onclick=()=>{let n=xt.sel;hs(!1),n>=0?Rn(n):Rn(-1)},document.addEventListener("click",n=>{let s=n.target.closest("[data-more]");if(s){let c=s.dataset.more;s.closest("ul").innerHTML=us[c].join("");return}let r=n.target.closest("[data-go]");if(r&&(r.closest("#m-panel")||r.closest("#m-explore"))){let c=+r.dataset.go;if(xt.mode==="tree"){Ps(c);return}Rn(c);return}let a=n.target.closest("[data-sel]");if(a){hs(!1),Rn(+a.dataset.sel);return}let o=n.target.closest("[data-group]");if(o&&(o.closest("#m-panel")||o.closest("#m-explore"))){yh(+o.dataset.group),innerWidth<=760&&(Wt("#m-explore").classList.add("collapsed"),Kn());return}let l=n.target.closest("[data-act]");if(l){let c=l.dataset.node!=null?+l.dataset.node:xt.sel;if(l.dataset.act==="tree"&&c>=0&&Ps(c),l.dataset.act==="world"){let h=xt.sel;hs(!1),h>=0&&Rn(h)}l.dataset.act==="path"&&c>=0&&S1(c)}}),document.addEventListener("keydown",n=>{if(!n.target.matches("input[type=search], input[type=text], textarea")){if(n.key==="/"||(n.metaKey||n.ctrlKey)&&n.key.toLowerCase()==="k")n.preventDefault(),Wt("#m-q").focus();else if(n.key==="Escape"&&ni.on)Zo();else if(n.key==="Escape")if(xt.mode!=="world"){let s=xt.sel;hs(!1),s>=0?Rn(s):Rn(-1)}else Rn(-1);else if(n.key==="+"||n.key==="=")Wt("#m-zin").click();else if(n.key==="-")Wt("#m-zout").click();else if(n.key==="0")Wt("#m-zfit").click();else if(xt.mode==="world"&&n.key.startsWith("Arrow")){xt.lastInput=performance.now();let s=80;Lt.pan(n.key==="ArrowLeft"?s:n.key==="ArrowRight"?-s:0,n.key==="ArrowUp"?s:n.key==="ArrowDown"?-s:0)}}}),l0(Wt("#m-q"),Wt("#m-results"),n=>{n.g!=null?yh(n.g):xt.mode==="tree"?Ps(n.i):Rn(n.i)}),addEventListener("hashchange",()=>h0())}function S1(i){let t=Wt("#m-pick-slot");t.innerHTML=`<div class="m-pick"><div class="m-search" role="combobox" aria-expanded="false"><svg class="ic"><use href="#i-path"/></svg>
    <input id="m-pick-q" type="search" placeholder="Com quem? Empresa, pessoa ou investidor" autocomplete="off" aria-label="Conectar com"><ul id="m-pick-res" class="m-results" role="listbox" hidden></ul></div></div>`;let e=Wt("#m-pick-q");l0(e,Wt("#m-pick-res"),n=>{n.g!=null?Mh(i,R.groups[n.g].h):Mh(i,n.i)}),e.focus()}async function w1(){Jn.layer=Wt("#m-labels"),(innerWidth<=760||br.get("mundo-explore",!1)===!1)&&Wt("#m-explore").classList.add("collapsed");let i;try{i=await fetch("data/cias/mundo.json",{cache:"no-cache"}).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}catch{Wt("#m-empty").hidden=!1,Wt("#m-empty").textContent="O mapa ainda n\xE3o foi montado. Ele \xE9 refeito a cada atualiza\xE7\xE3o do portal; tente de novo em alguns minutos.",document.body.classList.remove("loading");return}let t=s=>s&&s.v===lf&&s.x&&s.x.length===i.nodes.length;innerHeight>innerWidth*1.15?i.mapa=t(i.mapaV)?i.mapaV:cf(i,{aspect:qp}):t(i.mapa)||(i.mapa=cf(i)),delete i.mapaV,Yy(i);try{Lt=Wp(Wt("#map"),i,{palette:qy,accent:vh,reduced:xh,fixedQuality:/[?&]hq\b/.test(location.search)})}catch(s){console.error(s),Wt("#m-empty").hidden=!1,Wt("#m-empty").textContent="Este navegador n\xE3o conseguiu abrir o Mundo em 3D (WebGL desligado ou indispon\xEDvel). Tente em outro navegador ou atualize o sistema.",document.body.classList.remove("loading");return}i.mapa.plates.forEach((s,r)=>{s.j=r}),fs=Xp(Lt.renderer,{W:R,colorOf:Yi,sectorColor:ds,kindLabel:Ti,shortName:bn,brl:cn,pct:Ei,accent:vh,onPick:(s,r)=>{r?Ps(s):(xt.sel=s,xf(s))},onExt:s=>Wo(`${s.n}: controlada de capital fechado (${Ei(s.pct)})`),canvas:Wt("#map")}),Lt.resize(innerWidth,innerHeight),fs.resize(innerWidth,innerHeight),n0();let n=i.stats||{};Wt("#m-sub").textContent=`${hn(n.cias||0)} companhias \xB7 ${hn(n.grupos||0)} grupos \xB7 ${hn((n.acionistas||0)+(n.pessoas_conselho||0))} acionistas e conselheiros`,l1(),f1(),uf(),b1(),Kn(),Lt.setOffset(Lt.view.toX,Lt.view.toY,!0),document.fonts?.ready.then(()=>Kn()),document.body.classList.remove("loading"),Lt.warmup(),Lt.fitAll(0),Lt.cam.x=Lt.cam.tx,Lt.cam.z=Lt.cam.tz,Lt.cam.d=Lt.cam.td,Lt.cam.fly=null,u0=Lt.cam.td,!location.hash&&!xh&&(document.body.classList.add("intro"),Lt.intro(5600),y1(5600)),f0=requestAnimationFrame(d0),h0(),!br.get("mundo-hint",0)&&!location.hash&&!ni.on&&(Yo=setTimeout(()=>{xt.sel<0&&xt.mode==="world"&&(Wt("#m-hint").hidden=!1,Sa=0,Yo=setTimeout(ps,9e3))},2500)),/[?&]debug\b/.test(location.search)&&(window.__mundo={ui:xt,W:R,map:Lt,tree:fs,select:Rn,openTree:Ps,showPath:Mh,selectGroup:yh,focusSector:Xo})}w1();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
