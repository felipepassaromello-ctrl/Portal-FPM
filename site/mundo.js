/* Portal FPM — Mundo das companhias. Gerado de src/mundo (npm run build); não edite à mão. Inclui three.js (MIT). */
var dd=0,Eh=1,fd=2;var zs=1,pd=2,Er=3,fs=0,yn=1,Ai=2,Qn=0,Ar=1,$n=2,Ah=3,Ch=4,md=5;var ks=100,gd=101,xd=102,_d=103,vd=104,yd=200,Md=201,Sd=202,bd=203,Rh=204,Ph=205,wd=206,Td=207,Ed=208,Ad=209,Cd=210,Rd=211,Pd=212,Id=213,Ld=214,ko=0,Ho=1,Vo=2,dr=3,Go=4,Wo=5,Xo=6,$o=7,El=0,Dd=1,Nd=2,mi=0,Da=1,Na=2,Ua=3,Hs=4,Fa=5,Oa=6,Ba=7;var Ih=300,ps=301,Vs=302,Al=303,Cl=304,za=306,qo=1e3,Mi=1001,Yo=1002,xn=1003,Ud=1004;var ka=1005;var vn=1006,Rl=1007;var Ci=1008;var Un=1009,Lh=1010,Dh=1011,Cr=1012,Pl=1013,gi=1014,ti=1015,un=1016,Il=1017,Ll=1018,Rr=1020,Nh=35902,Uh=35899,Fh=1021,Oh=1022,ei=1023,Si=1026,ms=1027,Dl=1028,Nl=1029,gs=1030,Ul=1031;var Fl=1033,Ha=33776,Va=33777,Ga=33778,Wa=33779,Ol=35840,Bl=35841,zl=35842,kl=35843,Hl=36196,Vl=37492,Gl=37496,Wl=37488,Xl=37489,Xa=37490,$l=37491,ql=37808,Yl=37809,Zl=37810,Jl=37811,Kl=37812,jl=37813,Ql=37814,tc=37815,ec=37816,nc=37817,ic=37818,sc=37819,rc=37820,ac=37821,oc=36492,lc=36494,cc=36495,hc=36283,uc=36284,$a=36285,dc=36286;var na=2300,Zo=2301,Bo=2302,dh=2303,fh=2400,ph=2401,mh=2402;var Fd=3200;var qa=0,Od=1,Zi="",gn="srgb",ia="srgb-linear",sa="linear",De="srgb";var zo=7680;var Bd=519,zd=512,kd=513,Hd=514,fc=515,Vd=516,Gd=517,pc=518,Wd=519,Xd=35044;var Bh="300 es",ui=2e3,fr=2001;function rp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ap(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $d(){let i=ra("canvas");return i.style.display="block",i}var Ru={},pr=null;function zh(...i){let t="THREE."+i.shift();pr?pr("log",t,...i):console.log(t,...i)}function qd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function se(...i){i=qd(i);let t="THREE."+i.shift();if(pr)pr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=qd(i);let t="THREE."+i.shift();if(pr)pr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cs(...i){let t=i.join(" ");t in Ru||(Ru[t]=!0,se(...i))}function Yd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Zd={[ko]:Ho,[Vo]:Xo,[Go]:$o,[dr]:Wo,[Ho]:ko,[Xo]:Vo,[$o]:Go,[Wo]:dr},bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zc=Math.PI/180,Jo=180/Math.PI;function Pr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function op(i,t){return(i%t+t)%t}function kc(i,t,e){return(1-e)*i+e*t}function Xr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xh=class Xh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xh.prototype.isVector2=!0;var Tt=Xh,Gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],m=r[a+2],_=r[a+3];if(f!==_||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*_;g<0&&(u=-u,d=-d,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){let M=Math.acos(g),E=Math.sin(M);p=Math.sin(p*M)/E,o=Math.sin(o*M)/E,l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+_*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+_*o;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-o*d,t[e+2]=c*m+h*d+o*u-l*f,t[e+3]=h*m-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$h=class $h{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hc.copy(this).projectOnVector(t),this.sub(Hc)}reflect(t){return this.sub(Hc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$h.prototype.isVector3=!0;var N=$h,Hc=new N,Pu=new Gn,qh=class qh{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],_=s[0],g=s[3],p=s[6],M=s[1],E=s[4],v=s[7],b=s[2],S=s[5],P=s[8];return r[0]=a*_+o*M+l*b,r[3]=a*g+o*E+l*S,r[6]=a*p+o*v+l*P,r[1]=c*_+h*M+f*b,r[4]=c*g+h*E+f*S,r[7]=c*p+h*v+f*P,r[2]=u*_+d*M+m*b,r[5]=u*g+d*E+m*S,r[8]=u*p+d*v+m*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=e*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=f*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vc.makeScale(t,e)),this}rotate(t){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vc.makeRotation(-t)),this}translate(t,e){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};qh.prototype.isMatrix3=!0;var fe=qh,Vc=new fe,Iu=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lu=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){let i={enabled:!0,workingColorSpace:ia,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===De&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===De&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zi?sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ia]:{primaries:t,whitePoint:n,transfer:sa,toXYZ:Iu,fromXYZ:Lu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:n,transfer:De,toXYZ:Iu,fromXYZ:Lu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}var Se=lp();function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Js,Ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Js===void 0&&(Js=ra("canvas")),Js.width=t.width,Js.height=t.height;let s=Js.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Js}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ra("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$i(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($i(e[n]/255)*255):e[n]=$i(e[n]);return{data:e,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cp=0,mr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Pr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gc(s[a].image)):r.push(Gc(s[a]))}else r=Gc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Gc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}var hp=0,Wc=new N,Cn=class i extends bi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Mi,s=Mi,r=vn,a=Ci,o=ei,l=Un,c=i.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Pr(),this.name="",this.source=new mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wc).x}get height(){return this.source.getSize(Wc).y}get depth(){return this.source.getSize(Wc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){se(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qo:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qo:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Ih;Cn.DEFAULT_ANISOTROPY=1;var Yh=class Yh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,v=(d+1)/2,b=(p+1)/2,S=(h+u)/4,P=(f+_)/4,y=(m+g)/4;return E>v&&E>b?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=S/n,r=P/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=P/r,s=y/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yh.prototype.isVector4=!0;var Ve=Yh,jo=class extends bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Cn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new mr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends jo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},aa=class extends Cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qo=class extends Cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Tl=class Tl{constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,m,_,g)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ks.setFromMatrixColumn(t,0).length(),r=1/Ks.setFromMatrixColumn(t,1).length(),a=1/Ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,m=o*h,_=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u+_*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u-_*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,m=o*h,_=o*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=_-u*f,e[8]=m*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-_*f}else if(t.order==="XZY"){let u=a*l,d=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=a*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(up,t,dp)}lookAt(t,e,n){let s=this.elements;return Hn.subVectors(t,e),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),ts.crossVectors(n,Hn),ts.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),ts.crossVectors(n,Hn)),ts.normalize(),uo.crossVectors(Hn,ts),s[0]=ts.x,s[4]=uo.x,s[8]=Hn.x,s[1]=ts.y,s[5]=uo.y,s[9]=Hn.y,s[2]=ts.z,s[6]=uo.z,s[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],M=n[3],E=n[7],v=n[11],b=n[15],S=s[0],P=s[4],y=s[8],A=s[12],F=s[1],H=s[5],k=s[9],X=s[13],D=s[2],Z=s[6],Q=s[10],nt=s[14],xt=s[3],rt=s[7],ut=s[11],dt=s[15];return r[0]=a*S+o*F+l*D+c*xt,r[4]=a*P+o*H+l*Z+c*rt,r[8]=a*y+o*k+l*Q+c*ut,r[12]=a*A+o*X+l*nt+c*dt,r[1]=h*S+f*F+u*D+d*xt,r[5]=h*P+f*H+u*Z+d*rt,r[9]=h*y+f*k+u*Q+d*ut,r[13]=h*A+f*X+u*nt+d*dt,r[2]=m*S+_*F+g*D+p*xt,r[6]=m*P+_*H+g*Z+p*rt,r[10]=m*y+_*k+g*Q+p*ut,r[14]=m*A+_*X+g*nt+p*dt,r[3]=M*S+E*F+v*D+b*xt,r[7]=M*P+E*H+v*Z+b*rt,r[11]=M*y+E*k+v*Q+b*ut,r[15]=M*A+E*X+v*nt+b*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15],M=l*d-c*u,E=o*d-c*f,v=o*u-l*f,b=a*d-c*h,S=a*u-l*h,P=a*f-o*h;return e*(_*M-g*E+p*v)-n*(m*M-g*b+p*S)+s*(m*E-_*b+p*P)-r*(m*v-_*S+g*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],M=e*o-n*a,E=e*l-s*a,v=e*c-r*a,b=n*l-s*o,S=n*c-r*o,P=s*c-r*l,y=h*_-f*m,A=h*g-u*m,F=h*p-d*m,H=f*g-u*_,k=f*p-d*_,X=u*p-d*g,D=M*X-E*k+v*H+b*F-S*A+P*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/D;return t[0]=(o*X-l*k+c*H)*Z,t[1]=(s*k-n*X-r*H)*Z,t[2]=(_*P-g*S+p*b)*Z,t[3]=(u*S-f*P-d*b)*Z,t[4]=(l*F-a*X-c*A)*Z,t[5]=(e*X-s*F+r*A)*Z,t[6]=(g*v-m*P-p*E)*Z,t[7]=(h*P-u*v+d*E)*Z,t[8]=(a*k-o*F+c*y)*Z,t[9]=(n*F-e*k-r*y)*Z,t[10]=(m*S-_*v+p*M)*Z,t[11]=(f*v-h*S-d*M)*Z,t[12]=(o*A-a*H-l*y)*Z,t[13]=(e*H-n*A+s*y)*Z,t[14]=(_*E-m*b-g*M)*Z,t[15]=(h*b-f*E+u*M)*Z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,_=a*h,g=a*f,p=o*f,M=l*c,E=l*h,v=l*f,b=n.x,S=n.y,P=n.z;return s[0]=(1-(_+p))*b,s[1]=(d+v)*b,s[2]=(m-E)*b,s[3]=0,s[4]=(d-v)*S,s[5]=(1-(u+p))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(m+E)*P,s[9]=(g-M)*P,s[10]=(1-(u+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ks.set(s[0],s[1],s[2]).length(),o=Ks.set(s[4],s[5],s[6]).length(),l=Ks.set(s[8],s[9],s[10]).length();r<0&&(a=-a),oi.copy(this);let c=1/a,h=1/o,f=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,e.setFromRotationMatrix(oi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=ui,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===ui)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===fr)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ui,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===ui)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===fr)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Tl.prototype.isMatrix4=!0;var Ne=Tl,Ks=new N,oi=new Ne,up=new N(0,0,0),dp=new N(1,1,1),ts=new N,uo=new N,Hn=new N,Du=new Ne,Nu=new Gn,wi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Du,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fp=0,Uu=new N,js=new Gn,Hi=new Ne,fo=new N,$r=new N,pp=new N,mp=new Gn,Fu=new N(1,0,0),Ou=new N(0,1,0),Bu=new N(0,0,1),zu={type:"added"},gp={type:"removed"},Qs={type:"childadded",child:null},Xc={type:"childremoved",child:null},on=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new wi,n=new Gn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new fe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.multiply(js),this}rotateOnWorldAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.premultiply(js),this}rotateX(t){return this.rotateOnAxis(Fu,t)}rotateY(t){return this.rotateOnAxis(Ou,t)}rotateZ(t){return this.rotateOnAxis(Bu,t)}translateOnAxis(t,e){return Uu.copy(t).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fu,t)}translateY(t){return this.translateOnAxis(Ou,t)}translateZ(t){return this.translateOnAxis(Bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fo.copy(t):fo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt($r,fo,this.up):Hi.lookAt(fo,$r,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Hi),this.quaternion.premultiply(js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zu),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gp),Xc.child=t,this.dispatchEvent(Xc),Xc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zu),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,t,pp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};on.DEFAULT_UP=new N(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},xp={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new di;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},po={h:0,s:0,l:0};function $c(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Se.workingColorSpace){if(t=op(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=$c(a,r,t+1/3),this.g=$c(a,r,t),this.b=$c(a,r,t-1/3)}return Se.colorSpaceToWorking(this,s),this}setStyle(t,e=gn){function n(r){r!==void 0&&parseFloat(r)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:se("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){let n=Jd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return Se.workingToColorSpace(bn.copy(this),t),Math.round(be(bn.r*255,0,255))*65536+Math.round(be(bn.g*255,0,255))*256+Math.round(be(bn.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.workingToColorSpace(bn.copy(this),e);let n=bn.r,s=bn.g,r=bn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Se.workingColorSpace){return Se.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=gn){Se.workingToColorSpace(bn.copy(this),t);let e=bn.r,n=bn.g,s=bn.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(es),this.setHSL(es.h+t,es.s+e,es.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(es),t.getHSL(po);let n=kc(es.h,po.h,e),s=kc(es.s,po.s,e),r=kc(es.l,po.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new ee;ee.NAMES=Jd;var Rs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ee(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qi=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},li=new N,Vi=new N,qc=new N,Gi=new N,tr=new N,er=new N,ku=new N,Yc=new N,Zc=new N,Jc=new N,Kc=new Ve,jc=new Ve,Qc=new Ve,rs=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),li.subVectors(t,e),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){li.subVectors(s,e),Vi.subVectors(n,e),qc.subVectors(t,e);let a=li.dot(li),o=li.dot(Vi),l=li.dot(qc),c=Vi.dot(Vi),h=Vi.dot(qc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(a,Gi.y),l.addScaledVector(o,Gi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Kc.setScalar(0),jc.setScalar(0),Qc.setScalar(0),Kc.fromBufferAttribute(t,e),jc.fromBufferAttribute(t,n),Qc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Kc,r.x),a.addScaledVector(jc,r.y),a.addScaledVector(Qc,r.z),a}static isFrontFacing(t,e,n,s){return li.subVectors(n,e),Vi.subVectors(t,e),li.cross(Vi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),li.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;tr.subVectors(s,n),er.subVectors(r,n),Yc.subVectors(t,n);let l=tr.dot(Yc),c=er.dot(Yc);if(l<=0&&c<=0)return e.copy(n);Zc.subVectors(t,s);let h=tr.dot(Zc),f=er.dot(Zc);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(tr,a);Jc.subVectors(t,r);let d=tr.dot(Jc),m=er.dot(Jc);if(m>=0&&d<=m)return e.copy(r);let _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(er,o);let g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return ku.subVectors(r,s),o=(f-h)/(f-h+(d-m)),e.copy(s).addScaledVector(ku,o);let p=1/(g+_+u);return a=_*p,o=u*p,e.copy(n).addScaledVector(tr,a).addScaledVector(er,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ti=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),go.subVectors(this.max,qr),nr.subVectors(t.a,qr),ir.subVectors(t.b,qr),sr.subVectors(t.c,qr),ns.subVectors(ir,nr),is.subVectors(sr,ir),ws.subVectors(nr,sr);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-ws.z,ws.y,ns.z,0,-ns.x,is.z,0,-is.x,ws.z,0,-ws.x,-ns.y,ns.x,0,-is.y,is.x,0,-ws.y,ws.x,0];return!th(e,nr,ir,sr,go)||(e=[1,0,0,0,1,0,0,0,1],!th(e,nr,ir,sr,go))?!1:(xo.crossVectors(ns,is),e=[xo.x,xo.y,xo.z],th(e,nr,ir,sr,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wi=[new N,new N,new N,new N,new N,new N,new N,new N],ci=new N,mo=new Ti,nr=new N,ir=new N,sr=new N,ns=new N,is=new N,ws=new N,qr=new N,go=new N,xo=new N,Ts=new N;function th(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ts.fromArray(i,r);let o=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=t.dot(Ts),c=e.dot(Ts),h=n.dot(Ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var an=new N,_o=new Tt,_p=0,Ae=class extends bi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_p++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xd,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix3(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array),s=Nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array),s=Nn(s,this.array),r=Nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var oa=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var la=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ge=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},vp=new Ti,Yr=new N,eh=new N,Ei=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);let e=Yr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Yr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(eh)),this.expandByPoint(Yr.copy(t.center).sub(eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yp=0,Kn=new Ne,nh=new on,rr=new N,Vn=new Ti,Zr=new Ti,mn=new N,Ue=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rp(t)?la:oa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,n){return Kn.makeTranslation(t,e,n),this.applyMatrix4(Kn),this}scale(t,e,n){return Kn.makeScale(t,e,n),this.applyMatrix4(Kn),this}lookAt(t){return nh.lookAt(t),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ge(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Zr.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(Vn.min,Zr.min),Vn.expandByPoint(mn),mn.addVectors(Vn.max,Zr.max),Vn.expandByPoint(mn)):(Vn.expandByPoint(Zr.min),Vn.expandByPoint(Zr.max))}Vn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)mn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(mn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mn.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(t,c),mn.add(rr)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new N,l[y]=new N;let c=new N,h=new N,f=new N,u=new Tt,d=new Tt,m=new Tt,_=new N,g=new N;function p(y,A,F){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,F),u.fromBufferAttribute(r,y),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,F),h.sub(c),f.sub(c),d.sub(u),m.sub(u);let H=1/(d.x*m.y-m.x*d.y);isFinite(H)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(H),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(H),o[y].add(_),o[A].add(_),o[F].add(_),l[y].add(g),l[A].add(g),l[F].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let y=0,A=M.length;y<A;++y){let F=M[y],H=F.start,k=F.count;for(let X=H,D=H+k;X<D;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let E=new N,v=new N,b=new N,S=new N;function P(y){b.fromBufferAttribute(s,y),S.copy(b);let A=o[y];E.copy(A),E.sub(b.multiplyScalar(b.dot(A))).normalize(),v.crossVectors(S,A);let H=v.dot(l[y])<0?-1:1;a.setXYZW(y,E.x,E.y,E.z,H)}for(let y=0,A=M.length;y<A;++y){let F=M[y],H=F.start,k=F.count;for(let X=H,D=H+k;X<D;X+=3)P(t.getX(X+0)),P(t.getX(X+1)),P(t.getX(X+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,f=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){let m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)mn.fromBufferAttribute(t,e),mn.normalize(),t.setXYZ(e,mn.x,mn.y,mn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new Ae(u,h,f)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ih=new N,Mp=new N,Sp=new fe,hi=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ih.subVectors(n,e).cross(Mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ih),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sp.getNormalMatrix(t),s=this.coplanarPoint(ih).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},bp=0,fi=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=Ar,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ph,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){se(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Xi=new N,sh=new N,vo=new N,yo=new N,Ps=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){sh.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),yo.copy(this.origin).sub(sh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(vo),o=yo.dot(this.direction),l=-yo.dot(vo),c=yo.lengthSq(),h=Math.abs(1-a*a),f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let _=1/h;f*=_,u*=_,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(sh).addScaledVector(vo,u),d}intersectSphere(t,e){if(t.radius<0)return null;Xi.subVectors(t.center,this.origin);let n=Xi.dot(this.direction),s=Xi.dot(Xi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,m=e.x-a.x,_=e.y-a.y,g=e.z-a.z,p=n.x-a.x,M=n.y-a.y,E=n.z-a.z,v=Math.abs(l),b=Math.abs(c),S=Math.abs(h),P,y,A,F,H,k,X,D,Z,Q,nt,xt;if(v>=b&&v>=S?(A=l,k=f,Z=m,xt=p,l>=0?(P=c,y=h,F=u,H=d,X=_,D=g,Q=M,nt=E):(P=h,y=c,F=d,H=u,X=g,D=_,Q=E,nt=M)):b>=S?(A=c,k=u,Z=_,xt=M,c>=0?(P=h,y=l,F=d,H=f,X=g,D=m,Q=E,nt=p):(P=l,y=h,F=f,H=d,X=m,D=g,Q=p,nt=E)):(A=h,k=d,Z=g,xt=E,h>=0?(P=l,y=c,F=f,H=u,X=m,D=_,Q=p,nt=M):(P=c,y=l,F=u,H=f,X=_,D=m,Q=M,nt=p)),A===0)return null;let rt=P/A,ut=y/A,dt=1/A,gt=F-rt*k,ft=H-ut*k,Me=X-rt*Z,xe=D-ut*Z,_e=Q-rt*xt,ot=nt-ut*xt,_t=_e*xe-ot*Me,Ct=gt*ot-ft*_e,B=Me*ft-xe*gt;if(s){if(_t<0||Ct<0||B<0)return null}else if((_t<0||Ct<0||B<0)&&(_t>0||Ct>0||B>0))return null;let lt=_t+Ct+B;if(lt===0)return null;let St=dt*(_t*k+Ct*Z+B*xt);return(lt>0?St<0:St>0)?null:this.at(St/lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pi=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hu=new Ne,Es=new Ps,Mo=new Ei,Vu=new N,So=new N,bo=new N,wo=new N,rh=new N,To=new N,Gu=new N,Eo=new N,we=class extends on{constructor(t=new Ue,e=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){To.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(rh.fromBufferAttribute(f,t),a?To.addScaledVector(rh,h):To.addScaledVector(rh.sub(e),h))}e.add(To)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),Es.copy(t.ray).recast(t.near),!(Mo.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Mo,Vu)===null||Es.origin.distanceToSquared(Vu)>(t.far-t.near)**2))&&(Hu.copy(r).invert(),Es.copy(t.ray).applyMatrix4(Hu),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Es)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,b=E;v<b;v+=3){let S=o.getX(v),P=o.getX(v+1),y=o.getX(v+2);s=Ao(this,p,t,n,c,h,f,S,P,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let M=o.getX(g),E=o.getX(g+1),v=o.getX(g+2);s=Ao(this,a,t,n,c,h,f,M,E,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,b=E;v<b;v+=3){let S=v,P=v+1,y=v+2;s=Ao(this,p,t,n,c,h,f,S,P,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let M=g,E=g+1,v=g+2;s=Ao(this,a,t,n,c,h,f,M,E,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function wp(i,t,e,n,s,r,a,o){let l;if(t.side===yn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===fs,o),l===null)return null;Eo.copy(o),Eo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Eo);return c<e.near||c>e.far?null:{distance:c,point:Eo.clone(),object:i}}function Ao(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,So),i.getVertexPosition(l,bo),i.getVertexPosition(c,wo);let h=wp(i,t,e,n,So,bo,wo,Gu);if(h){let f=new N;rs.getBarycoord(Gu,So,bo,wo,f),s&&(h.uv=rs.getInterpolatedAttribute(s,o,l,c,f,new Tt)),r&&(h.uv1=rs.getInterpolatedAttribute(r,o,l,c,f,new Tt)),a&&(h.normal=rs.getInterpolatedAttribute(a,o,l,c,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new N,materialIndex:0};rs.getNormal(So,bo,wo,u.normal),h.face=u,h.barycoord=f}return h}var ca=class extends Cn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=xn,h=xn,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var as=class extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ar=new Ne,Wu=new Ne,Co=[],Xu=new Ti,Tp=new Ne,Jr=new we,Kr=new Ei,Is=class extends we{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new as(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ar),Xu.copy(t.boundingBox).applyMatrix4(ar),this.boundingBox.union(Xu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ar),Kr.copy(t.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(Kr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),t.ray.intersectsSphere(Kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),Wu.multiplyMatrices(n,ar),Jr.matrixWorld=Wu,Jr.raycast(t,Co);for(let a=0,o=Co.length;a<o;a++){let l=Co[a];l.instanceId=r,l.object=this,e.push(l)}Co.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new as(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ca(new Float32Array(s*this.count),s,this.count,Dl,ti));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new Ei,Ep=new Tt(.5,.5),Ro=new N,_r=class{constructor(t=new hi,e=new hi,n=new hi,s=new hi,r=new hi,a=new hi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],M=r[12],E=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-a,d-h,p-m,b-M).normalize(),s[1].setComponents(c+a,d+h,p+m,b+M).normalize(),s[2].setComponents(c+o,d+f,p+_,b+E).normalize(),s[3].setComponents(c-o,d-f,p-_,b-E).normalize(),n)s[4].setComponents(l,u,g,v).normalize(),s[5].setComponents(c-l,d-u,p-g,b-v).normalize();else if(s[4].setComponents(c-l,d-u,p-g,b-v).normalize(),e===ui)s[5].setComponents(c+l,d+u,p+g,b+v).normalize();else if(e===fr)s[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);let e=Ep.distanceTo(t.center);return As.radius=.7071067811865476+e,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ro.x=s.normal.x>0?t.max.x:t.min.x,Ro.y=s.normal.y>0?t.max.y:t.min.y,Ro.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var tl=class extends fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},el=new N,nl=new N,$u=new Ne,jr=new Ps,Po=new Ei,ah=new N,qu=new N,il=class extends on{constructor(t=new Ue,e=new tl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)el.fromBufferAttribute(e,s-1),nl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=el.distanceTo(nl);t.setAttribute("lineDistance",new ge(n,1))}else se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),Po.radius+=r,t.ray.intersectsSphere(Po)===!1)return;$u.copy(s).invert(),jr.copy(t.ray).applyMatrix4($u);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=c){let p=h.getX(_),M=h.getX(_+1),E=Io(this,t,jr,l,p,M,_);E&&e.push(E)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(d),p=Io(this,t,jr,l,_,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=c){let p=Io(this,t,jr,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=Io(this,t,jr,l,m-1,d,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Io(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(el.fromBufferAttribute(o,s),nl.fromBufferAttribute(o,r),e.distanceSqToSegment(el,nl,ah,qu)>n)return;ah.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ah);if(!(c<t.near||c>t.far))return{distance:c,point:qu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Yu=new N,Zu=new N,ha=class extends il{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Yu.fromBufferAttribute(e,s),Zu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Yu.distanceTo(Zu);t.setAttribute("lineDistance",new ge(n,1))}else se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var sl=class extends fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ju=new Ne,gh=new Ps,Lo=new Ei,Do=new N,vr=class extends on{constructor(t=new Ue,e=new sl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,t.ray.intersectsSphere(Lo)===!1)return;Ju.copy(s).invert(),gh.copy(t.ray).applyMatrix4(Ju);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=u,_=d;m<_;m++){let g=c.getX(m);Do.fromBufferAttribute(f,g),Ku(Do,g,l,s,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=u,_=d;m<_;m++)Do.fromBufferAttribute(f,m),Ku(Do,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ku(i,t,e,n,s,r,a){let o=gh.distanceSqToPoint(i);if(o<e){let l=new N;gh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ua=class extends Cn{constructor(t=[],e=ps,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},os=class extends Cn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ls=class extends Cn{constructor(t,e,n=gi,s,r,a,o=xn,l=xn,c,h=Si,f=1){if(h!==Si&&h!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},rl=class extends ls{constructor(t,e=gi,n=ps,s,r,a=xn,o=xn,l,c=Si){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},da=class extends Cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Rn=class i extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(f,2));function m(_,g,p,M,E,v,b,S,P,y,A){let F=v/P,H=b/y,k=v/2,X=b/2,D=S/2,Z=P+1,Q=y+1,nt=0,xt=0,rt=new N;for(let ut=0;ut<Q;ut++){let dt=ut*H-X;for(let gt=0;gt<Z;gt++){let ft=gt*F-k;rt[_]=ft*M,rt[g]=dt*E,rt[p]=D,c.push(rt.x,rt.y,rt.z),rt[_]=0,rt[g]=0,rt[p]=S>0?1:-1,h.push(rt.x,rt.y,rt.z),f.push(gt/P),f.push(1-ut/y),nt+=1}}for(let ut=0;ut<y;ut++)for(let dt=0;dt<P;dt++){let gt=u+dt+Z*ut,ft=u+dt+Z*(ut+1),Me=u+(dt+1)+Z*(ut+1),xe=u+(dt+1)+Z*ut;l.push(gt,ft,xe),l.push(ft,Me,xe),xt+=6}o.addGroup(d,xt,A),d+=xt,u+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fa=class i extends Ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new N,h=new Tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ls=class i extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,_=[],g=n/2,p=0;M(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ge(f,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(d,2));function M(){let v=new N,b=new N,S=0,P=(e-t)/n;for(let y=0;y<=r;y++){let A=[],F=y/r,H=F*(e-t)+t;for(let k=0;k<=s;k++){let X=k/s,D=X*l+o,Z=Math.sin(D),Q=Math.cos(D);b.x=H*Z,b.y=-F*n+g,b.z=H*Q,f.push(b.x,b.y,b.z),v.set(Z,P,Q).normalize(),u.push(v.x,v.y,v.z),d.push(X,1-F),A.push(m++)}_.push(A)}for(let y=0;y<s;y++)for(let A=0;A<r;A++){let F=_[A][y],H=_[A+1][y],k=_[A+1][y+1],X=_[A][y+1];(t>0||A!==0)&&(h.push(F,H,X),S+=3),(e>0||A!==r-1)&&(h.push(H,k,X),S+=3)}c.addGroup(p,S,0),p+=S}function E(v){let b=m,S=new Tt,P=new N,y=0,A=v===!0?t:e,F=v===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,g*F,0),u.push(0,F,0),d.push(.5,.5),m++;let H=m;for(let k=0;k<=s;k++){let D=k/s*l+o,Z=Math.cos(D),Q=Math.sin(D);P.x=A*Q,P.y=g*F,P.z=A*Z,f.push(P.x,P.y,P.z),u.push(0,F,0),S.x=Z*.5+.5,S.y=Q*.5*F+.5,d.push(S.x,S.y),m++}for(let k=0;k<s;k++){let X=b+k,D=H+k;v===!0?h.push(D,D+1,X):h.push(D+1,D,X),y+=3}c.addGroup(p,y,v===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pa=class i extends Ls{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},al=class i extends Ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let E=new N,v=new N,b=new N;for(let S=0;S<e.length;S+=3)d(e[S+0],E),d(e[S+1],v),d(e[S+2],b),l(E,v,b,M)}function l(M,E,v,b){let S=b+1,P=[];for(let y=0;y<=S;y++){P[y]=[];let A=M.clone().lerp(v,y/S),F=E.clone().lerp(v,y/S),H=S-y;for(let k=0;k<=H;k++)k===0&&y===S?P[y][k]=A:P[y][k]=A.clone().lerp(F,k/H)}for(let y=0;y<S;y++)for(let A=0;A<2*(S-y)-1;A++){let F=Math.floor(A/2);A%2===0?(u(P[y][F+1]),u(P[y+1][F]),u(P[y][F])):(u(P[y][F+1]),u(P[y+1][F+1]),u(P[y+1][F]))}}function c(M){let E=new N;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(M),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){let M=new N;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];let v=g(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;a.push(v,1-b)}m(),f()}function f(){for(let M=0;M<a.length;M+=6){let E=a[M+0],v=a[M+2],b=a[M+4],S=Math.max(E,v,b),P=Math.min(E,v,b);S>.9&&P<.1&&(E<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,E){let v=M*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function m(){let M=new N,E=new N,v=new N,b=new N,S=new Tt,P=new Tt,y=new Tt;for(let A=0,F=0;A<r.length;A+=9,F+=6){M.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),S.set(a[F+0],a[F+1]),P.set(a[F+2],a[F+3]),y.set(a[F+4],a[F+5]),b.copy(M).add(E).add(v).divideScalar(3);let H=g(b);_(S,F+0,M,H),_(P,F+2,E,H),_(y,F+4,v,H)}}function _(M,E,v,b){b<0&&M.x===1&&(a[E]=M.x-1),v.x===0&&v.z===0&&(a[E]=b/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){se("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Tt:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],a=[],o=new N,l=new Ne;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(be(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(be(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},yr=class extends Wn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ol=class extends yr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function kh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ju=new N,Qu=new N,oh=new kh,lh=new kh,ch=new kh,ll=class extends Wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Qu.subVectors(s[0],s[1]).add(s[0]),c=Qu);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ju.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ju),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),oh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,_,g),lh.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,_,g),ch.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(oh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),lh.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ch.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(oh.calc(l),lh.calc(l),ch.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function td(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Ap(i,t){let e=1-i;return e*e*t}function Cp(i,t){return 2*(1-i)*i*t}function Rp(i,t){return i*i*t}function ta(i,t,e,n){return Ap(i,t)+Cp(i,e)+Rp(i,n)}function Pp(i,t){let e=1-i;return e*e*e*t}function Ip(i,t){let e=1-i;return 3*e*e*i*t}function Lp(i,t){return 3*(1-i)*i*i*t}function Dp(i,t){return i*i*i*t}function ea(i,t,e,n,s){return Pp(i,t)+Ip(i,e)+Lp(i,n)+Dp(i,s)}var ma=class extends Wn{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ea(t,s.x,r.x,a.x,o.x),ea(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mr=class extends Wn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ea(t,s.x,r.x,a.x,o.x),ea(t,s.y,r.y,a.y,o.y),ea(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ga=class extends Wn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cl=class extends Wn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xa=class extends Wn{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ta(t,s.x,r.x,a.x),ta(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ds=class extends Wn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ta(t,s.x,r.x,a.x),ta(t,s.y,r.y,a.y),ta(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(td(o,l.x,c.x,h.x,f.x),td(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}},xh=Object.freeze({__proto__:null,ArcCurve:ol,CatmullRomCurve3:ll,CubicBezierCurve:ma,CubicBezierCurve3:Mr,EllipseCurve:yr,LineCurve:ga,LineCurve3:cl,QuadraticBezierCurve:xa,QuadraticBezierCurve3:Ds,SplineCurve:_a}),hl=class extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new xh[s.type]().fromJSON(s))}return this}},Ns=class extends hl{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ga(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new xa(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ma(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s),new Tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new _a(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new yr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Sr=class extends Ns{constructor(t){super(t),this.uuid=Pr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ns().fromJSON(s))}return this}};function Np(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Kd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=zp(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<s;u+=e){let d=i[u],m=i[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return va(r,a,e,o,l,c,0),a}function Kd(i,t,e,n,s){let r;if(s===Jp(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=ed(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ed(a/n|0,i[a],i[a+1],r);return r&&br(r,r.next)&&(Ma(r),r=r.next),r}function Us(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(br(e,e.next)||Qe(e.prev,e,e.next)===0)){if(Ma(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function va(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Wp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Fp(i,n,s,r):Up(i)){t.push(l.i,i.i,c.i),Ma(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Op(Us(i),t),va(i,t,e,n,s,r,2)):a===2&&Bp(i,t,e,n,s,r):va(Us(i),t,e,n,s,r,1);break}}}function Up(i){let t=i.prev,e=i,n=i.next;if(Qe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Qr(s,o,r,l,a,c,m.x,m.y)&&Qe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Fp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Qe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),m=Math.min(h,f,u),_=Math.max(o,l,c),g=Math.max(h,f,u),p=_h(d,m,t,e,n),M=_h(_,g,t,e,n),E=i.prevZ,v=i.nextZ;for(;E&&E.z>=p&&v&&v.z<=M;){if(E.x>=d&&E.x<=_&&E.y>=m&&E.y<=g&&E!==s&&E!==a&&Qr(o,h,l,f,c,u,E.x,E.y)&&Qe(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Qr(o,h,l,f,c,u,v.x,v.y)&&Qe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=_&&E.y>=m&&E.y<=g&&E!==s&&E!==a&&Qr(o,h,l,f,c,u,E.x,E.y)&&Qe(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Qr(o,h,l,f,c,u,v.x,v.y)&&Qe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Op(i,t){let e=i;do{let n=e.prev,s=e.next.next;!br(n,s)&&Qd(n,e,e.next,s)&&ya(n,s)&&ya(s,n)&&(t.push(n.i,e.i,s.i),Ma(e),Ma(e.next),e=i=s),e=e.next}while(e!==i);return Us(e)}function Bp(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qp(a,o)){let l=tf(a,o);a=Us(a,a.next),l=Us(l,l.next),va(a,t,e,n,s,r,0),va(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function zp(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Kd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push($p(c))}s.sort(kp);for(let r=0;r<s.length;r++)e=Hp(s[r],e);return e}function kp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Hp(i,t){let e=Vp(i,t);if(!e)return t;let n=tf(e,i);return Us(n,n.next),Us(e,e.next)}function Vp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(br(i,e))return e;do{if(br(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&jd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);ya(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Gp(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Gp(i,t){return Qe(i.prev,i,t.prev)<0&&Qe(t.next,i,i.next)<0}function Wp(i,t,e,n){let s=i;do s.z===0&&(s.z=_h(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xp(s)}function Xp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function _h(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function $p(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function jd(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Qr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&jd(i,t,e,n,s,r,a,o)}function qp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Yp(i,t)&&(ya(i,t)&&ya(t,i)&&Zp(i,t)&&(Qe(i.prev,i,t.prev)||Qe(i,t.prev,t))||br(i,t)&&Qe(i.prev,i,i.next)>0&&Qe(t.prev,t,t.next)>0)}function Qe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function br(i,t){return i.x===t.x&&i.y===t.y}function Qd(i,t,e,n){let s=Uo(Qe(i,t,e)),r=Uo(Qe(i,t,n)),a=Uo(Qe(e,n,i)),o=Uo(Qe(e,n,t));return!!(s!==r&&a!==o||s===0&&No(i,e,t)||r===0&&No(i,n,t)||a===0&&No(e,i,n)||o===0&&No(e,t,n))}function No(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Uo(i){return i>0?1:i<0?-1:0}function Yp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ya(i,t){return Qe(i.prev,i,i.next)<0?Qe(i,t,i.next)>=0&&Qe(i,i.prev,t)>=0:Qe(i,t,i.prev)<0||Qe(i,i.next,t)<0}function Zp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function tf(i,t){let e=vh(i.i,i.x,i.y),n=vh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ed(i,t,e,n){let s=vh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ma(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jp(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var yh=class{static triangulate(t,e,n=2){return Np(t,e,n)}},ur=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];nd(t),id(n,t);let a=t.length;e.forEach(nd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,id(n,e[l]);let o=yh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function nd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function id(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Sa=class i extends Ue{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,f=new N,u=new Tt,d=new N,m=new N,_=new N,g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let M=0;M<=e;M++){let E=n+M*h*s,v=Math.sin(E),b=Math.cos(E);for(let S=0;S<=t.length-1;S++){f.x=t[S].x*v,f.y=t[S].y,f.z=t[S].x*b,a.push(f.x,f.y,f.z),u.x=M/e,u.y=S/(t.length-1),o.push(u.x,u.y);let P=l[3*S+0]*v,y=l[3*S+1],A=l[3*S+0]*b;c.push(P,y,A)}}for(let M=0;M<e;M++)for(let E=0;E<t.length-1;E++){let v=E+M*t.length,b=v,S=v+t.length,P=v+t.length+1,y=v+1;r.push(b,S,y),r.push(P,y,S)}this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("uv",new ge(o,2)),this.setAttribute("normal",new ge(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ba=class i extends al{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},jn=class i extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let M=p*u-a;for(let E=0;E<c;E++){let v=E*f-r;m.push(v,-M,0),_.push(0,0,1),g.push(E/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let E=M+c*p,v=M+c*(p+1),b=M+1+c*(p+1),S=M+1+c*p;d.push(E,v,S),d.push(v,b,S)}this.setIndex(d),this.setAttribute("position",new ge(m,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var wa=class i extends Ue{constructor(t=new Sr([new Tt(0,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ge(s,3)),this.setAttribute("normal",new ge(r,3)),this.setAttribute("uv",new ge(a,2));function c(h){let f=s.length/3,u=h.extractPoints(e),d=u.shape,m=u.holes;ur.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let M=m[g];ur.isClockWise(M)===!0&&(m[g]=M.reverse())}let _=ur.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let M=m[g];d=d.concat(M)}for(let g=0,p=d.length;g<p;g++){let M=d[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,p=_.length;g<p;g++){let M=_[g],E=M[0]+f,v=M[1]+f,b=M[2]+f;n.push(E,v,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Kp(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Kp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ta=class i extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new N,u=new N,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let M=[],E=p/n,v=a+E*o,b=t*Math.cos(v),S=Math.sqrt(t*t-b*b),P=0;p===0&&a===0?P=.5/e:p===n&&l===Math.PI&&(P=-.5/e);for(let y=0;y<=e;y++){let A=y/e,F=s+A*r;f.x=-S*Math.cos(F),f.y=b,f.z=S*Math.sin(F),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(A+P,1-E),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let E=h[p][M+1],v=h[p][M],b=h[p+1][M],S=h[p+1][M+1];(p!==0||a>0)&&d.push(E,v,S),(p!==n-1||l<Math.PI)&&d.push(v,b,S)}this.setIndex(d),this.setAttribute("position",new ge(m,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ea=class i extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new N,d=new N,m=new N;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let p=0;p<=s;p++){let M=p/s*r;d.x=(t+e*Math.cos(g))*Math.cos(M),d.y=(t+e*Math.cos(g))*Math.sin(M),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(p/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let p=(s+1)*_+g-1,M=(s+1)*(_-1)+g-1,E=(s+1)*(_-1)+g,v=(s+1)*_+g;l.push(p,M,v),l.push(M,E,v)}this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Fs=class i extends Ue{constructor(t=new Ds(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new N,l=new N,c=new Tt,h=new N,f=[],u=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new ge(f,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(d,2));function _(){for(let E=0;E<e;E++)g(E);g(r===!1?e:0),M(),p()}function g(E){h=t.getPointAt(E/e,h);let v=a.normals[E],b=a.binormals[E];for(let S=0;S<=s;S++){let P=S/s*Math.PI*2,y=Math.sin(P),A=-Math.cos(P);l.x=A*v.x+y*b.x,l.y=A*v.y+y*b.y,l.z=A*v.z+y*b.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=e;E++)for(let v=1;v<=s;v++){let b=(s+1)*(E-1)+(v-1),S=(s+1)*E+(v-1),P=(s+1)*E+v,y=(s+1)*(E-1)+v;m.push(b,S,y),m.push(S,P,y)}}function M(){for(let E=0;E<=e;E++)for(let v=0;v<=s;v++)c.x=E/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new xh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Gs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(sd(s))s.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(sd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Tn(i){let t={};for(let e=0;e<i.length;e++){let n=Gs(i[e]);for(let s in n)t[s]=n[s]}return t}function sd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function jp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}var Ji={clone:Gs,merge:Tn},Qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qp,this.fragmentShader=tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ne().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wr=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},wn=class extends fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qa,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Aa=class extends fi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qa,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=El,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ul=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},dl=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function or(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function hh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var cs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fl=class extends cs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ph:r=t,o=2*e-n;break;case mh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ph:a=t,l=2*n-e;break;case mh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,M=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,E=(-1-d)*g+(1.5+d)*_+.5*m,v=d*g-d*_;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+M*a[c+b]+E*a[l+b]+v*a[f+b];return r}},pl=class extends cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},ml=class extends cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},gl=class extends cs{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(n-e)/(s-e),_=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[l+g]*m;return r}let u=o*2,d=t-1;for(let m=0;m!==o;++m){let _=a[c+m],g=a[l+m],p=d*u+m*2,M=f[p],E=f[p+1],v=t*u+m*2,b=h[v],S=h[v+1],P=nm(n,e,M,b,s);r[m]=ef(P,_,E,S,g)}return r}};function ef(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function em(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function nm(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ef(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=em(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Xn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=or(e,this.TimeBufferType),this.values=or(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:or(t.times,Array),values:or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),hh(t.settings)&&(n.settings={inTangents:or(t.settings.inTangents,Array),outTangents:or(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new gl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case na:e=this.InterpolantFactoryMethodDiscrete;break;case Zo:e=this.InterpolantFactoryMethodLinear;break;case Bo:e=this.InterpolantFactoryMethodSmooth;break;case dh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return se("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return Zo;case this.InterpolantFactoryMethodSmooth:return Bo;case this.InterpolantFactoryMethodBezier:return dh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;hh(this.settings)&&(rd(this.settings.inTangents,t),rd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ce("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ce("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ap(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ce("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Bo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let m=0;m!==n;++m){let _=e[f+m];if(_!==e[u+m]||_!==e[d+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,hh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function rd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Zo;var hs=class extends Xn{constructor(t,e,n){super(t,e,n)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=na;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends Xn{constructor(t,e,n,s){super(t,e,n,s)}};xl.prototype.ValueTypeName="color";var _l=class extends Xn{constructor(t,e,n,s){super(t,e,n,s)}};_l.prototype.ValueTypeName="number";var vl=class extends cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ca=class extends Xn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}};Ca.prototype.ValueTypeName="quaternion";Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends Xn{constructor(t,e,n){super(t,e,n)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=na;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends Xn{constructor(t,e,n,s){super(t,e,n,s)}};yl.prototype.ValueTypeName="vector";var Ml=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nf=new Ml,Sl=class{constructor(t){this.manager=t!==void 0?t:nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tr=class extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Os=class extends Tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},uh=new Ne,ad=new N,od=new N,Ra=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ad.setFromMatrixPosition(t.matrixWorld),e.position.copy(ad),od.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(od),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(uh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===fr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(uh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fo=new N,Oo=new Gn,yi=new N,Pa=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fo,Oo,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Oo,yi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fo,Oo,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Oo,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new N,ld=new Tt,cd=new Tt,hn=class extends Pa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,e){return this.getViewBounds(t,ld,cd),e.subVectors(cd,ld)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Mh=class extends Ra{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}},Ia=class extends Tr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ds=class extends Pa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sh=class extends Ra{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yi=class extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Sh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var lr=-90,cr=1,bl=class extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(lr,cr,t,e);s.layers=this.layers,this.add(s);let r=new hn(lr,cr,t,e);r.layers=this.layers,this.add(r);let a=new hn(lr,cr,t,e);a.layers=this.layers,this.add(a);let o=new hn(lr,cr,t,e);o.layers=this.layers,this.add(o);let l=new hn(lr,cr,t,e);l.layers=this.layers,this.add(l);let c=new hn(lr,cr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},wl=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},La=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=im.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function im(){this._document.hidden===!1&&this.reset()}var Vh="\\[\\]\\.:\\/",sm=new RegExp("["+Vh+"]","g"),Gh="[^"+Vh+"]",rm="[^"+Vh.replace("\\.","")+"]",am=/((?:WC+[\/:])*)/.source.replace("WC",Gh),om=/(WCOD+)?/.source.replace("WCOD",rm),lm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),cm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),hm=new RegExp("^"+am+om+lm+cm+"$"),um=["material","materials","bones","map"],bh=class{constructor(t,e,n){let s=n||$e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},$e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sm,"")}static parseTrackName(t){let e=hm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);um.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){se("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=bh;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jv=new Float32Array(1);var hd=new Ne,Bs=class{constructor(t,e,n=0,s=1/0){this.ray=new Ps(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hd),this}intersectObject(t,e=!0,n=[]){return wh(t,this,n,e),n.sort(ud),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wh(t[s],this,n,e);return n.sort(ud),n}};function ud(i,t){return i.distance-t.distance}function wh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)wh(r[a],t,e,!0)}}var Zh=class Zh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Zh.prototype.isMatrix2=!0;var Th=Zh;function Wh(i,t,e,n){let s=dm(n);switch(e){case Fh:return i*t;case Dl:return i*t/s.components*s.byteLength;case Nl:return i*t/s.components*s.byteLength;case gs:return i*t*2/s.components*s.byteLength;case Ul:return i*t*2/s.components*s.byteLength;case Oh:return i*t*3/s.components*s.byteLength;case ei:return i*t*4/s.components*s.byteLength;case Fl:return i*t*4/s.components*s.byteLength;case Ha:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:case kl:return Math.max(i,16)*Math.max(t,8)/4;case Ol:case zl:return Math.max(i,8)*Math.max(t,8)/2;case Hl:case Vl:case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gl:case Xa:case $l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oc:case lc:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hc:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $a:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dm(i){switch(i){case Un:case Lh:return{byteLength:1,components:1};case Cr:case Dh:case un:return{byteLength:2,components:1};case Il:case Ll:return{byteLength:2,components:4};case gi:case Pl:case ti:return{byteLength:4,components:1};case Nh:case Uh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Tf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vm(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let _=f[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ym=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mm=`#ifdef USE_ALPHAHASH
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
#endif`,Sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Em=`#ifdef USE_AOMAP
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
#endif`,Am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cm=`#ifdef USE_BATCHING
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
#endif`,Rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dm=`#ifdef USE_IRIDESCENCE
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
#endif`,Nm=`#ifdef USE_BUMPMAP
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
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gm=`#define PI 3.141592653589793
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
} // validated`,Wm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xm=`vec3 transformedNormal = objectNormal;
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
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,og=`#ifdef USE_GRADIENTMAP
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
}`,lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ug=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,dg=`#ifdef USE_ENVMAP
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
#endif`,fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xg=`PhysicalMaterial material;
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
#endif`,_g=`uniform sampler2D dfgLUT;
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
}`,vg=`
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
#endif`,yg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pg=`#if defined( USE_POINTS_UV )
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
#endif`,Ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ug=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fg=`#ifdef USE_MORPHTARGETS
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
#endif`,Og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gg=`#ifdef USE_NORMALMAP
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
#endif`,Wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r0=`float getShadowMask() {
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
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,h0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p0=`#ifdef USE_TRANSMISSION
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
#endif`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`#include <common>
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
}`,A0=`#if DEPTH_PACKING == 3200
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
}`,C0=`#define DISTANCE
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
}`,R0=`#define DISTANCE
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`uniform float scale;
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
}`,D0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,U0=`uniform vec3 diffuse;
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
}`,F0=`#define LAMBERT
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
}`,O0=`#define LAMBERT
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
}`,B0=`#define MATCAP
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
}`,z0=`#define MATCAP
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
}`,k0=`#define NORMAL
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
}`,H0=`#define NORMAL
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
}`,V0=`#define PHONG
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
}`,G0=`#define PHONG
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
}`,W0=`#define STANDARD
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
}`,X0=`#define STANDARD
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
}`,$0=`#define TOON
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
}`,q0=`#define TOON
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
}`,Y0=`uniform float size;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,K0=`uniform vec3 color;
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
}`,j0=`uniform float rotation;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:ym,alphahash_pars_fragment:Mm,alphamap_fragment:Sm,alphamap_pars_fragment:bm,alphatest_fragment:wm,alphatest_pars_fragment:Tm,aomap_fragment:Em,aomap_pars_fragment:Am,batching_pars_vertex:Cm,batching_vertex:Rm,begin_vertex:Pm,beginnormal_vertex:Im,bsdfs:Lm,iridescence_fragment:Dm,bumpmap_pars_fragment:Nm,clipping_planes_fragment:Um,clipping_planes_pars_fragment:Fm,clipping_planes_pars_vertex:Om,clipping_planes_vertex:Bm,color_fragment:zm,color_pars_fragment:km,color_pars_vertex:Hm,color_vertex:Vm,common:Gm,cube_uv_reflection_fragment:Wm,defaultnormal_vertex:Xm,displacementmap_pars_vertex:$m,displacementmap_vertex:qm,emissivemap_fragment:Ym,emissivemap_pars_fragment:Zm,colorspace_fragment:Jm,colorspace_pars_fragment:Km,envmap_fragment:jm,envmap_common_pars_fragment:Qm,envmap_pars_fragment:tg,envmap_pars_vertex:eg,envmap_physical_pars_fragment:dg,envmap_vertex:ng,fog_vertex:ig,fog_pars_vertex:sg,fog_fragment:rg,fog_pars_fragment:ag,gradientmap_pars_fragment:og,lightmap_pars_fragment:lg,lights_lambert_fragment:cg,lights_lambert_pars_fragment:hg,lights_pars_begin:ug,lights_toon_fragment:fg,lights_toon_pars_fragment:pg,lights_phong_fragment:mg,lights_phong_pars_fragment:gg,lights_physical_fragment:xg,lights_physical_pars_fragment:_g,lights_fragment_begin:vg,lights_fragment_maps:yg,lights_fragment_end:Mg,lightprobes_pars_fragment:Sg,logdepthbuf_fragment:bg,logdepthbuf_pars_fragment:wg,logdepthbuf_pars_vertex:Tg,logdepthbuf_vertex:Eg,map_fragment:Ag,map_pars_fragment:Cg,map_particle_fragment:Rg,map_particle_pars_fragment:Pg,metalnessmap_fragment:Ig,metalnessmap_pars_fragment:Lg,morphinstance_vertex:Dg,morphcolor_vertex:Ng,morphnormal_vertex:Ug,morphtarget_pars_vertex:Fg,morphtarget_vertex:Og,normal_fragment_begin:Bg,normal_fragment_maps:zg,normal_pars_fragment:kg,normal_pars_vertex:Hg,normal_vertex:Vg,normalmap_pars_fragment:Gg,clearcoat_normal_fragment_begin:Wg,clearcoat_normal_fragment_maps:Xg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:qg,opaque_fragment:Yg,packing:Zg,premultiplied_alpha_fragment:Jg,project_vertex:Kg,dithering_fragment:jg,dithering_pars_fragment:Qg,roughnessmap_fragment:t0,roughnessmap_pars_fragment:e0,shadowmap_pars_fragment:n0,shadowmap_pars_vertex:i0,shadowmap_vertex:s0,shadowmask_pars_fragment:r0,skinbase_vertex:a0,skinning_pars_vertex:o0,skinning_vertex:l0,skinnormal_vertex:c0,specularmap_fragment:h0,specularmap_pars_fragment:u0,tonemapping_fragment:d0,tonemapping_pars_fragment:f0,transmission_fragment:p0,transmission_pars_fragment:m0,uv_pars_fragment:g0,uv_pars_vertex:x0,uv_vertex:_0,worldpos_vertex:v0,background_vert:y0,background_frag:M0,backgroundCube_vert:S0,backgroundCube_frag:b0,cube_vert:w0,cube_frag:T0,depth_vert:E0,depth_frag:A0,distance_vert:C0,distance_frag:R0,equirect_vert:P0,equirect_frag:I0,linedashed_vert:L0,linedashed_frag:D0,meshbasic_vert:N0,meshbasic_frag:U0,meshlambert_vert:F0,meshlambert_frag:O0,meshmatcap_vert:B0,meshmatcap_frag:z0,meshnormal_vert:k0,meshnormal_frag:H0,meshphong_vert:V0,meshphong_frag:G0,meshphysical_vert:W0,meshphysical_frag:X0,meshtoon_vert:$0,meshtoon_frag:q0,points_vert:Y0,points_frag:Z0,shadow_vert:J0,shadow_frag:K0,sprite_vert:j0,sprite_frag:Q0},zt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Pi={basic:{uniforms:Tn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Tn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Tn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Tn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Tn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new ee(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Tn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Tn([zt.points,zt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Tn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Tn([zt.common,zt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Tn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Tn([zt.sprite,zt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Tn([zt.common,zt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Tn([zt.lights,zt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Pi.physical={uniforms:Tn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};var mc={r:0,b:0,g:0},tx=new Ne,Ef=new fe;Ef.set(-1,0,0,0,1,0,0,0,1);function ex(i,t,e,n,s,r){let a=new ee(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let v=M.backgroundBlurriness>0;E=t.get(E,v)}return E}function m(M){let E=!1,v=d(M);v===null?g(a,o):v&&v.isColor&&(g(v,1),E=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,E){let v=d(E);v&&(v.isCubeTexture||v.mapping===za)?(c===void 0&&(c=new we(new Rn(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:Gs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tx.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ef),c.material.toneMapped=Se.getTransfer(v.colorSpace)!==De,(h!==v||f!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new we(new jn(2,2),new ze({name:"BackgroundMaterial",uniforms:Gs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Se.getTransfer(v.colorSpace)!==De,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,E){M.getRGB(mc,Hh(i)),e.buffers.color.setClear(mc.r,mc.g,mc.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:m,addToRenderList:_,dispose:p}}function nx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(H,k,X,D,Z){let Q=!1,nt=f(H,D,X,k);r!==nt&&(r=nt,c(r.object)),Q=d(H,D,X,Z),Q&&m(H,D,X,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,v(H,k,X,D),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(H){return i.bindVertexArray(H)}function h(H){return i.deleteVertexArray(H)}function f(H,k,X,D){let Z=D.wireframe===!0,Q=n[k.id];Q===void 0&&(Q={},n[k.id]=Q);let nt=H.isInstancedMesh===!0?H.id:0,xt=Q[nt];xt===void 0&&(xt={},Q[nt]=xt);let rt=xt[X.id];rt===void 0&&(rt={},xt[X.id]=rt);let ut=rt[Z];return ut===void 0&&(ut=u(l()),rt[Z]=ut),ut}function u(H){let k=[],X=[],D=[];for(let Z=0;Z<e;Z++)k[Z]=0,X[Z]=0,D[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:D,object:H,attributes:{},index:null}}function d(H,k,X,D){let Z=r.attributes,Q=k.attributes,nt=0,xt=X.getAttributes();for(let rt in xt)if(xt[rt].location>=0){let dt=Z[rt],gt=Q[rt];if(gt===void 0&&(rt==="instanceMatrix"&&H.instanceMatrix&&(gt=H.instanceMatrix),rt==="instanceColor"&&H.instanceColor&&(gt=H.instanceColor)),dt===void 0||dt.attribute!==gt||gt&&dt.data!==gt.data)return!0;nt++}return r.attributesNum!==nt||r.index!==D}function m(H,k,X,D){let Z={},Q=k.attributes,nt=0,xt=X.getAttributes();for(let rt in xt)if(xt[rt].location>=0){let dt=Q[rt];dt===void 0&&(rt==="instanceMatrix"&&H.instanceMatrix&&(dt=H.instanceMatrix),rt==="instanceColor"&&H.instanceColor&&(dt=H.instanceColor));let gt={};gt.attribute=dt,dt&&dt.data&&(gt.data=dt.data),Z[rt]=gt,nt++}r.attributes=Z,r.attributesNum=nt,r.index=D}function _(){let H=r.newAttributes;for(let k=0,X=H.length;k<X;k++)H[k]=0}function g(H){p(H,0)}function p(H,k){let X=r.newAttributes,D=r.enabledAttributes,Z=r.attributeDivisors;X[H]=1,D[H]===0&&(i.enableVertexAttribArray(H),D[H]=1),Z[H]!==k&&(i.vertexAttribDivisor(H,k),Z[H]=k)}function M(){let H=r.newAttributes,k=r.enabledAttributes;for(let X=0,D=k.length;X<D;X++)k[X]!==H[X]&&(i.disableVertexAttribArray(X),k[X]=0)}function E(H,k,X,D,Z,Q,nt){nt===!0?i.vertexAttribIPointer(H,k,X,Z,Q):i.vertexAttribPointer(H,k,X,D,Z,Q)}function v(H,k,X,D){_();let Z=D.attributes,Q=X.getAttributes(),nt=k.defaultAttributeValues;for(let xt in Q){let rt=Q[xt];if(rt.location>=0){let ut=Z[xt];if(ut===void 0&&(xt==="instanceMatrix"&&H.instanceMatrix&&(ut=H.instanceMatrix),xt==="instanceColor"&&H.instanceColor&&(ut=H.instanceColor)),ut!==void 0){let dt=ut.normalized,gt=ut.itemSize,ft=t.get(ut);if(ft===void 0)continue;let Me=ft.buffer,xe=ft.type,_e=ft.bytesPerElement,ot=xe===i.INT||xe===i.UNSIGNED_INT||ut.gpuType===Pl;if(ut.isInterleavedBufferAttribute){let _t=ut.data,Ct=_t.stride,B=ut.offset;if(_t.isInstancedInterleavedBuffer){for(let lt=0;lt<rt.locationSize;lt++)p(rt.location+lt,_t.meshPerAttribute);H.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let lt=0;lt<rt.locationSize;lt++)g(rt.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let lt=0;lt<rt.locationSize;lt++)E(rt.location+lt,gt/rt.locationSize,xe,dt,Ct*_e,(B+gt/rt.locationSize*lt)*_e,ot)}else{if(ut.isInstancedBufferAttribute){for(let _t=0;_t<rt.locationSize;_t++)p(rt.location+_t,ut.meshPerAttribute);H.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let _t=0;_t<rt.locationSize;_t++)g(rt.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let _t=0;_t<rt.locationSize;_t++)E(rt.location+_t,gt/rt.locationSize,xe,dt,gt*_e,gt/rt.locationSize*_t*_e,ot)}}else if(nt!==void 0){let dt=nt[xt];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(rt.location,dt);break;case 3:i.vertexAttrib3fv(rt.location,dt);break;case 4:i.vertexAttrib4fv(rt.location,dt);break;default:i.vertexAttrib1fv(rt.location,dt)}}}}M()}function b(){A();for(let H in n){let k=n[H];for(let X in k){let D=k[X];for(let Z in D){let Q=D[Z];for(let nt in Q)h(Q[nt].object),delete Q[nt];delete D[Z]}}delete n[H]}}function S(H){if(n[H.id]===void 0)return;let k=n[H.id];for(let X in k){let D=k[X];for(let Z in D){let Q=D[Z];for(let nt in Q)h(Q[nt].object),delete Q[nt];delete D[Z]}}delete n[H.id]}function P(H){for(let k in n){let X=n[k];for(let D in X){let Z=X[D];if(Z[H.id]===void 0)continue;let Q=Z[H.id];for(let nt in Q)h(Q[nt].object),delete Q[nt];delete Z[H.id]}}}function y(H){for(let k in n){let X=n[k],D=H.isInstancedMesh===!0?H.id:0,Z=X[D];if(Z!==void 0){for(let Q in Z){let nt=Z[Q];for(let xt in nt)h(nt[xt].object),delete nt[xt];delete Z[Q]}delete X[D],Object.keys(X).length===0&&delete n[k]}}}function A(){F(),a=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function ix(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==ei&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let y=P===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Un&&P!==ti&&!y&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(se("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,maxSamples:b,samples:S}}function rx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new hi,o=new fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,E=M*4,v=p.clippingState||null;l.value=v,v=h(m,u,E,d);for(let b=0;b!==E;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){let _=f!==null?f.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=d+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,v=d;E!==_;++E,v+=4)a.copy(f[E]).applyMatrix4(M,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var Lr=4,ax=6,ox=20,lx=256,Ya=new ds,sf=new ee,Jh=null,Kh=0,jh=0,Qh=!1,cx=new N,Ws=new N,xs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=cx}=r;Jh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jh,Kh,jh),this._renderer.xr.enabled=Qh,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:un,format:ei,colorSpace:ia,depthBuffer:!1},s=rf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hx(r)),this._blurMaterial=dx(r,t,e),this._ggxMaterial=ux(r,t,e)}return s}_compileMaterial(t){let e=new we(new Ue,t);this._renderer.compile(e,Ya)}_sceneToCubeUV(t,e,n,s,r){let l=new hn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(sf),f.toneMapping=mi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new Rn,new pi({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(sf),p=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let b=this._cubeSize;Ir(s,v*b,E>2?b:0,b,b),f.setRenderTarget(s),p&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ps||t.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ir(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ya)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-Lr?n-m+Lr:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Ir(r,g,p,3*_,2*_),s.setRenderTarget(r),s.render(o,Ya),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Ir(t,g,p,3*_,2*_),s.setRenderTarget(t),s.render(o,Ya)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Lr?s-this._lodMax+Lr:0),u=4*(this._cubeSize-h);Ir(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Ya)}};function hx(i){let t=[],e=[],n=i,s=i-Lr+1+ax;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let p=0;p<f;p++){let M=p%3*2/3-1,E=p>2?0:-1,v=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];m.set(v,d*u*p);for(let b=0;b<u;b++){let S=h[b*2]*2-1,P=h[b*2+1]*2-1;p===0?Ws.set(1,P,S):p===1?Ws.set(-S,1,-P):p===2?Ws.set(-S,P,1):p===3?Ws.set(-1,P,-S):p===4?Ws.set(-S,-1,P):Ws.set(S,P,-1),Ws.toArray(_,(p*u+b)*d)}}let g=new Ue;g.setAttribute("position",new Ae(m,d)),g.setAttribute("outputDirection",new Ae(_,d)),e.push(new we(g,null)),n>Lr&&n--}return{lodMeshes:e,sizeLods:t}}function rf(i,t,e){let n=new nn(i,t,e);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ux(i,t,e){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function dx(i,t,e){return new ze({name:"SphericalGaussianBlur",defines:{SAMPLES:ox,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function af(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function of(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xc=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ua(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rn(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Qn});r.uniforms.tEquirect.value=e;let a=new we(s,r),o=e.minFilter;return e.minFilter===Ci&&(e.minFilter=vn),new bl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function fx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Al||d===Cl)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new xc(m.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,m=d===Al||d===Cl,_=d===ps||d===Vs;if(m||_){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new xs(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return m&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new xs(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Al?u.mapping=ps:d===Cl&&(u.mapping=Vs),u}function l(u){let d=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function px(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cs("WebGLRenderer: "+n+" extension not supported."),s}}}function mx(i,t,e,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,m=f.attributes.position,_=0;if(m===void 0)return;if(d!==null){let M=d.array;_=d.version;for(let E=0,v=M.length;E<v;E+=3){let b=M[E+0],S=M[E+1],P=M[E+2];u.push(b,S,S,P,P,b)}}else{let M=m.array;_=m.version;for(let E=0,v=M.length/3-1;E<v;E+=3){let b=E+0,S=E+1,P=E+2;u.push(b,S,S,P,P,b)}}let g=new(m.count>=65535?la:oa)(u,1);g.version=_;let p=r.get(f);p&&t.remove(p),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function gx(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function xx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _x(i,t,e){let n=new WeakMap,s=new Ve;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let A=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;d===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let v=o.attributes.position.count*E,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*b*4*f),P=new aa(S,v,b,f);P.type=ti,P.needsUpdate=!0;let y=E*4;for(let F=0;F<f;F++){let H=g[F],k=p[F],X=M[F],D=v*b*4*F;for(let Z=0;Z<H.count;Z++){let Q=Z*y;d===!0&&(s.fromBufferAttribute(H,Z),S[D+Q+0]=s.x,S[D+Q+1]=s.y,S[D+Q+2]=s.z,S[D+Q+3]=0),m===!0&&(s.fromBufferAttribute(k,Z),S[D+Q+4]=s.x,S[D+Q+5]=s.y,S[D+Q+6]=s.z,S[D+Q+7]=0),_===!0&&(s.fromBufferAttribute(X,Z),S[D+Q+8]=s.x,S[D+Q+9]=s.y,S[D+Q+10]=s.z,S[D+Q+11]=X.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new Tt(v,b)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function vx(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var yx={[Da]:"LINEAR_TONE_MAPPING",[Na]:"REINHARD_TONE_MAPPING",[Ua]:"CINEON_TONE_MAPPING",[Hs]:"ACES_FILMIC_TONE_MAPPING",[Oa]:"AGX_TONE_MAPPING",[Ba]:"NEUTRAL_TONE_MAPPING",[Fa]:"CUSTOM_TONE_MAPPING"};function Mx(i,t,e,n,s,r){let a=new nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ue;c.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ge([0,2,0,0,2,0],2));let h=new wr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new we(c,h),u=new ds(-1,1,1,-1,0,1),d=null,m=null,_=!1,g,p=null,M=[],E=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),l!==null&&l.setSize(v,b);for(let S=0;S<M.length;S++){let P=M[S];P.setSize&&P.setSize(v,b)}},this.setEffects=function(v){M=v,E=M.length>0&&M[0].isRenderPass===!0;let b=a.width,S=a.height;M.length>0&&o===null&&(o=new nn(b,S,{type:un,depthBuffer:!1,stencilBuffer:!1}),l=new nn(b,S,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<M.length;P++){let y=M[P];y.setSize&&y.setSize(b,S)}},this.begin=function(v,b){if(_||v.toneMapping===mi&&M.length===0)return!1;if(p=b,b!==null){let S=b.width,P=b.height;(a.width!==S||a.height!==P)&&this.setSize(S,P)}return E===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=mi,!0},this.hasRenderPass=function(){return E},this.end=function(v,b){v.toneMapping=g,_=!0;let S=a,P=o;for(let y=0;y<M.length;y++){let A=M[y];A.enabled!==!1&&(A.render(v,P,S,b),A.needsSwap!==!1&&(S=P,P=P===o?l:o))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,h.defines={},Se.getTransfer(d)===De&&(h.defines.SRGB_TRANSFER="");let y=yx[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(p),v.render(f,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Af=new Cn,nu=new ls(1,1),Cf=new aa,Rf=new Qo,Pf=new ua,lf=[],cf=[],hf=new Float32Array(16),uf=new Float32Array(9),df=new Float32Array(4);function Nr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=lf[s];if(r===void 0&&(r=new Float32Array(s),lf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function dn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yc(i,t){let e=cf[t];e===void 0&&(e=new Int32Array(t),cf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2fv(this.addr,t),fn(e,t)}}function wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;i.uniform3fv(this.addr,t),fn(e,t)}}function Tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4fv(this.addr,t),fn(e,t)}}function Ex(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;df.set(n),i.uniformMatrix2fv(this.addr,!1,df),fn(e,n)}}function Ax(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;uf.set(n),i.uniformMatrix3fv(this.addr,!1,uf),fn(e,n)}}function Cx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;hf.set(n),i.uniformMatrix4fv(this.addr,!1,hf),fn(e,n)}}function Rx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2iv(this.addr,t),fn(e,t)}}function Ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3iv(this.addr,t),fn(e,t)}}function Lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4iv(this.addr,t),fn(e,t)}}function Dx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2uiv(this.addr,t),fn(e,t)}}function Ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3uiv(this.addr,t),fn(e,t)}}function Fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4uiv(this.addr,t),fn(e,t)}}function Ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nu.compareFunction=e.isReversedDepthBuffer()?pc:fc,r=nu):r=Af,e.setTexture2D(t||r,s)}function Bx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rf,s)}function zx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Pf,s)}function kx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Cf,s)}function Hx(i){switch(i){case 5126:return Sx;case 35664:return bx;case 35665:return wx;case 35666:return Tx;case 35674:return Ex;case 35675:return Ax;case 35676:return Cx;case 5124:case 35670:return Rx;case 35667:case 35671:return Px;case 35668:case 35672:return Ix;case 35669:case 35673:return Lx;case 5125:return Dx;case 36294:return Nx;case 36295:return Ux;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return kx}}function Vx(i,t){i.uniform1fv(this.addr,t)}function Gx(i,t){let e=Nr(t,this.size,2);i.uniform2fv(this.addr,e)}function Wx(i,t){let e=Nr(t,this.size,3);i.uniform3fv(this.addr,e)}function Xx(i,t){let e=Nr(t,this.size,4);i.uniform4fv(this.addr,e)}function $x(i,t){let e=Nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qx(i,t){let e=Nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yx(i,t){let e=Nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zx(i,t){i.uniform1iv(this.addr,t)}function Jx(i,t){i.uniform2iv(this.addr,t)}function Kx(i,t){i.uniform3iv(this.addr,t)}function jx(i,t){i.uniform4iv(this.addr,t)}function Qx(i,t){i.uniform1uiv(this.addr,t)}function t_(i,t){i.uniform2uiv(this.addr,t)}function e_(i,t){i.uniform3uiv(this.addr,t)}function n_(i,t){i.uniform4uiv(this.addr,t)}function i_(i,t,e){let n=this.cache,s=t.length,r=yc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=nu:a=Af;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function s_(i,t,e){let n=this.cache,s=t.length,r=yc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Rf,r[a])}function r_(i,t,e){let n=this.cache,s=t.length,r=yc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Pf,r[a])}function a_(i,t,e){let n=this.cache,s=t.length,r=yc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Cf,r[a])}function o_(i){switch(i){case 5126:return Vx;case 35664:return Gx;case 35665:return Wx;case 35666:return Xx;case 35674:return $x;case 35675:return qx;case 35676:return Yx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Kx;case 35669:case 35673:return jx;case 5125:return Qx;case 36294:return t_;case 36295:return e_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return a_}}var iu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hx(e.type)}},su=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=o_(e.type)}},ru=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},tu=/(\w+)(\])?(\[|\.)?/g;function ff(i,t){i.seq.push(t),i.map[t.id]=t}function l_(i,t,e){let n=i.name,s=n.length;for(tu.lastIndex=0;;){let r=tu.exec(n),a=tu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ff(e,c===void 0?new iu(o,i,t):new su(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new ru(o),ff(e,f)),e=f}}}var Dr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);l_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function pf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var c_=37297,h_=0;function u_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var mf=new fe;function d_(i){Se._getMatrix(mf,Se.workingColorSpace,i);let t=`mat3( ${mf.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(i)){case sa:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+u_(i.getShaderSource(t),o)}else return r}function f_(i,t){let e=d_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var p_={[Da]:"Linear",[Na]:"Reinhard",[Ua]:"Cineon",[Hs]:"ACESFilmic",[Oa]:"AgX",[Ba]:"Neutral",[Fa]:"Custom"};function m_(i,t){let e=p_[t];return e===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var gc=new N;function g_(){Se.getLuminanceCoefficients(gc);let i=gc.x.toFixed(4),t=gc.y.toFixed(4),e=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function __(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function v_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ja(i){return i!==""}function xf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _f(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(i){return i.replace(y_,S_)}var M_=new Map;function S_(i,t){let e=ve[t];if(e===void 0){let n=M_.get(t);if(n!==void 0)e=ve[n],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return au(e)}var b_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(i){return i.replace(b_,w_)}function w_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var T_={[zs]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function E_(i){return T_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var A_={[ps]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE",[za]:"ENVMAP_TYPE_CUBE_UV"};function C_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":A_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var R_={[Vs]:"ENVMAP_MODE_REFRACTION"};function P_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":R_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var I_={[El]:"ENVMAP_BLENDING_MULTIPLY",[Dd]:"ENVMAP_BLENDING_MIX",[Nd]:"ENVMAP_BLENDING_ADD"};function L_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":I_[i.combine]||"ENVMAP_BLENDING_NONE"}function D_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function N_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=E_(e),c=C_(e),h=P_(e),f=L_(e),u=D_(e),d=x_(e),m=__(r),_=s.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ja).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ja).join(`
`),p.length>0&&(p+=`
`)):(g=[yf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),p=[yf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?ve.tonemapping_pars_fragment:"",e.toneMapping!==mi?m_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,f_("linearToOutputTexel",e.outputColorSpace),g_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ja).join(`
`)),a=au(a),a=xf(a,e),a=_f(a,e),o=au(o),o=xf(o,e),o=_f(o,e),a=vf(a),o=vf(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=M+g+a,v=M+p+o,b=pf(s,s.VERTEX_SHADER,E),S=pf(s,s.FRAGMENT_SHADER,v);s.attachShader(_,b),s.attachShader(_,S),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(H){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(_)||"",X=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(S)||"",Z=k.trim(),Q=X.trim(),nt=D.trim(),xt=!0,rt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(xt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,S);else{let ut=gf(s,b,"vertex"),dt=gf(s,S,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Z+`
`+ut+`
`+dt)}else Z!==""?se("WebGLProgram: Program Info Log:",Z):(Q===""||nt==="")&&(rt=!1);rt&&(H.diagnostics={runnable:xt,programLog:Z,vertexShader:{log:Q,prefix:g},fragmentShader:{log:nt,prefix:p}})}s.deleteShader(b),s.deleteShader(S),y=new Dr(s,_),A=v_(s,_)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(_,c_)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=h_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=S,this}var U_=0,ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lu(t),e.set(t,n)),n}},lu=class{constructor(t){this.id=U_++,this.code=t,this.usedTimes=0}};function F_(i){return i===gs||i===Xa||i===$a}function O_(i,t,e,n,s,r){let a=new gr,o=new ou,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,A,F,H,k,X){let D=H.fog,Z=k.geometry,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?H.environment:null,nt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,xt=t.get(y.envMap||Q,nt),rt=xt&&xt.mapping===za?xt.image.height:null,ut=d[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&se("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let dt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,gt=dt!==void 0?dt.length:0,ft=0;Z.morphAttributes.position!==void 0&&(ft=1),Z.morphAttributes.normal!==void 0&&(ft=2),Z.morphAttributes.color!==void 0&&(ft=3);let Me,xe,_e,ot;if(ut){let Le=Pi[ut];Me=Le.vertexShader,xe=Le.fragmentShader}else{Me=y.vertexShader,xe=y.fragmentShader;let Le=o.getVertexShaderStage(y),pe=o.getFragmentShaderStage(y);o.update(y,Le,pe),_e=Le.id,ot=pe.id}let _t=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),B=k.isInstancedMesh===!0,lt=k.isBatchedMesh===!0,St=!!y.map,It=!!y.matcap,Rt=!!xt,Pt=!!y.aoMap,Nt=!!y.lightMap,Lt=!!y.bumpMap&&y.wireframe===!1,Qt=!!y.normalMap,ie=!!y.displacementMap,Re=!!y.emissiveMap,ne=!!y.metalnessMap,he=!!y.roughnessMap,G=y.anisotropy>0,oe=y.clearcoat>0,de=y.dispersion>0,C=y.retroreflectivity>0,x=y.iridescence>0,$=y.sheen>0,j=y.transmission>0,T=G&&!!y.anisotropyMap,U=oe&&!!y.clearcoatMap,W=oe&&!!y.clearcoatNormalMap,L=oe&&!!y.clearcoatRoughnessMap,z=x&&!!y.iridescenceMap,et=x&&!!y.iridescenceThicknessMap,Y=$&&!!y.sheenColorMap,pt=$&&!!y.sheenRoughnessMap,Mt=!!y.specularMap,Et=!!y.specularColorMap,Ft=!!y.specularIntensityMap,$t=j&&!!y.transmissionMap,O=j&&!!y.thicknessMap,yt=!!y.gradientMap,tt=!!y.alphaMap,ct=y.alphaTest>0,wt=!!y.alphaHash,mt=!!y.extensions,Wt=mi;y.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let Ht={shaderID:ut,shaderType:y.type,shaderName:y.name,vertexShader:Me,fragmentShader:xe,defines:y.defines,customVertexShaderID:_e,customFragmentShaderID:ot,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:lt,batchingColor:lt&&k._colorsTexture!==null,instancing:B,instancingColor:B&&k.instanceColor!==null,instancingMorph:B&&k.morphTexture!==null,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Se.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:St,matcap:It,envMap:Rt,envMapMode:Rt&&xt.mapping,envMapCubeUVHeight:rt,aoMap:Pt,lightMap:Nt,bumpMap:Lt,normalMap:Qt,displacementMap:ie,emissiveMap:Re,normalMapObjectSpace:Qt&&y.normalMapType===Od,normalMapTangentSpace:Qt&&y.normalMapType===qa,packedNormalMap:Qt&&y.normalMapType===qa&&F_(y.normalMap.format),metalnessMap:ne,roughnessMap:he,anisotropy:G,anisotropyMap:T,clearcoat:oe,clearcoatMap:U,clearcoatNormalMap:W,clearcoatRoughnessMap:L,dispersion:de,retroreflection:C,iridescence:x,iridescenceMap:z,iridescenceThicknessMap:et,sheen:$,sheenColorMap:Y,sheenRoughnessMap:pt,specularMap:Mt,specularColorMap:Et,specularIntensityMap:Ft,transmission:j,transmissionMap:$t,thicknessMap:O,gradientMap:yt,opaque:y.transparent===!1&&y.blending===Ar&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:ct,alphaHash:wt,combine:y.combine,mapUv:St&&m(y.map.channel),aoMapUv:Pt&&m(y.aoMap.channel),lightMapUv:Nt&&m(y.lightMap.channel),bumpMapUv:Lt&&m(y.bumpMap.channel),normalMapUv:Qt&&m(y.normalMap.channel),displacementMapUv:ie&&m(y.displacementMap.channel),emissiveMapUv:Re&&m(y.emissiveMap.channel),metalnessMapUv:ne&&m(y.metalnessMap.channel),roughnessMapUv:he&&m(y.roughnessMap.channel),anisotropyMapUv:T&&m(y.anisotropyMap.channel),clearcoatMapUv:U&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:W&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:et&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:pt&&m(y.sheenRoughnessMap.channel),specularMapUv:Mt&&m(y.specularMap.channel),specularColorMapUv:Et&&m(y.specularColorMap.channel),specularIntensityMapUv:Ft&&m(y.specularIntensityMap.channel),transmissionMapUv:$t&&m(y.transmissionMap.channel),thicknessMapUv:O&&m(y.thicknessMap.channel),alphaMapUv:tt&&m(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Qt||G),vertexNormals:!!Z.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(St||tt),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||Z.attributes.normal===void 0&&Qt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ct,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:ft,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:St&&y.map.isVideoTexture===!0&&Se.getTransfer(y.map.colorSpace)===De,decodeVideoTextureEmissive:Re&&y.emissiveMap.isVideoTexture===!0&&Se.getTransfer(y.emissiveMap.colorSpace)===De,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ai,flipSided:y.side===yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:mt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&y.extensions.multiDraw===!0||lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function g(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let F in y.defines)A.push(F),A.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(p(A,y),M(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function p(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function M(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function E(y){let A=d[y.type],F;if(A){let H=Pi[A];F=Ji.clone(H.uniforms)}else F=y.uniforms;return F}function v(y,A){let F=h.get(A);return F!==void 0?++F.usedTimes:(F=new N_(i,A,y,s),c.push(F),h.set(A,F)),F}function b(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){o.remove(y)}function P(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:E,acquireProgram:v,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:P}}function B_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function z_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Mf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,_,g,p){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},i[t]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=m,M.materialVariant=a(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=g,M.group=p),t++,M}function l(u,d,m,_,g,p,M){M.reversedDepth===!0&&(g=-g);let E=o(u,d,m,_,g,p);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):e.push(E)}function c(u,d,m,_,g,p){let M=o(u,d,m,_,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,d){e.length>1&&e.sort(u||z_),n.length>1&&n.sort(d||Mf),s.length>1&&s.sort(d||Mf)}function f(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function k_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Sf,i.set(n,[a])):s>=r.length?(a=new Sf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function H_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new ee};break;case"SpotLight":e={position:new N,direction:new N,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function V_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var G_=0;function W_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function X_(i){let t=new H_,e=V_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Ne,a=new Ne;function o(c){let h=0,f=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,M=0,E=0,v=0,b=0,S=0,P=0,y=0,A=0,F=0;c.sort(W_);for(let k=0,X=c.length;k<X;k++){let D=c[k],Z=D.color,Q=D.intensity,nt=D.distance,xt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===gs?xt=D.shadow.map.texture:xt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=Z.r*Q,f+=Z.g*Q,u+=Z.b*Q;else if(D.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(D.sh.coefficients[rt],Q);F++}else if(D.isSunLight){let rt=t.get(D);if(rt.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ut=D.shadow,dt=e.get(D);dt.shadowIntensity=ut.intensity,dt.shadowBias=ut.bias,dt.shadowNormalBias=ut.normalBias,dt.shadowRadius=ut.radius,dt.shadowMapSize.copy(ut.mapSize).multiply(ut.getFrameExtents()),n.sunShadow[m]=dt,n.sunShadowMap[m]=xt;let gt=ut.getViewportCount();for(let ft=0;ft<gt;ft++)n.sunShadowMatrix[_+ft]=ut.getMatrix(ft),n.sunShadowCascade[_+ft]=ut._cascadeData[ft];_+=gt,m++}n.sun[d]=rt,d++}else if(D.isDirectionalLight){let rt=t.get(D);if(rt.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ut=D.shadow,dt=e.get(D);dt.shadowIntensity=ut.intensity,dt.shadowBias=ut.bias,dt.shadowNormalBias=ut.normalBias,dt.shadowRadius=ut.radius,dt.shadowMapSize=ut.mapSize,n.directionalShadow[g]=dt,n.directionalShadowMap[g]=xt,n.directionalShadowMatrix[g]=D.shadow.matrix,b++}n.directional[g]=rt,g++}else if(D.isSpotLight){let rt=t.get(D);rt.position.setFromMatrixPosition(D.matrixWorld),rt.color.copy(Z).multiplyScalar(Q),rt.distance=nt,rt.coneCos=Math.cos(D.angle),rt.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),rt.decay=D.decay,n.spot[M]=rt;let ut=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,ut.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[M]=ut.matrix,D.castShadow){let dt=e.get(D);dt.shadowIntensity=ut.intensity,dt.shadowBias=ut.bias,dt.shadowNormalBias=ut.normalBias,dt.shadowRadius=ut.radius,dt.shadowMapSize=ut.mapSize,n.spotShadow[M]=dt,n.spotShadowMap[M]=xt,P++}M++}else if(D.isRectAreaLight){let rt=t.get(D);rt.color.copy(Z).multiplyScalar(Q),rt.halfWidth.set(D.width*.5,0,0),rt.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=rt,E++}else if(D.isPointLight){let rt=t.get(D);if(rt.color.copy(D.color).multiplyScalar(D.intensity),rt.distance=D.distance,rt.decay=D.decay,D.castShadow){let ut=D.shadow,dt=e.get(D);dt.shadowIntensity=ut.intensity,dt.shadowBias=ut.bias,dt.shadowNormalBias=ut.normalBias,dt.shadowRadius=ut.radius,dt.shadowMapSize=ut.mapSize,dt.shadowCameraNear=ut.camera.near,dt.shadowCameraFar=ut.camera.far,n.pointShadow[p]=dt,n.pointShadowMap[p]=xt,n.pointShadowMatrix[p]=D.shadow.matrix,S++}n.point[p]=rt,p++}else if(D.isHemisphereLight){let rt=t.get(D);rt.skyColor.copy(D.color).multiplyScalar(Q),rt.groundColor.copy(D.groundColor).multiplyScalar(Q),n.hemi[v]=rt,v++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=zt.LTC_FLOAT_1,n.rectAreaLTC2=zt.LTC_FLOAT_2):(n.rectAreaLTC1=zt.LTC_HALF_1,n.rectAreaLTC2=zt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let H=n.hash;(H.sunLength!==d||H.directionalLength!==g||H.pointLength!==p||H.spotLength!==M||H.rectAreaLength!==E||H.hemiLength!==v||H.numSunShadows!==m||H.numDirectionalShadows!==b||H.numPointShadows!==S||H.numSpotShadows!==P||H.numSpotMaps!==y||H.numLightProbes!==F)&&(n.sun.length=d,n.directional.length=g,n.spot.length=M,n.rectArea.length=E,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=F,H.sunLength=d,H.directionalLength=g,H.pointLength=p,H.spotLength=M,H.rectAreaLength=E,H.hemiLength=v,H.numSunShadows=m,H.numDirectionalShadows=b,H.numPointShadows=S,H.numSpotShadows=P,H.numSpotMaps=y,H.numLightProbes=F,n.version=G_++)}function l(c,h){let f=0,u=0,d=0,m=0,_=0,g=0,p=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let v=c[M];if(v.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),f++}else if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(v.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function bf(i){let t=new X_(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function $_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new bf(i),t.set(s,[o])):r>=a.length?(o=new bf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
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
}`,Z_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],J_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],wf=new Ne,Za=new N,eu=new N;function K_(i,t,e){let n=new _r,s=new Tt,r=new Tt,a=new Ve,o=new ul,l=new dl,c={},h=e.maxTextureSize,f={[fs]:yn,[yn]:fs,[Ai]:Ai},u=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ue;m.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new we(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zs;let p=this.type;this.render=function(S,P,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===pd&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zs);let A=i.getRenderTarget(),F=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Qn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let X=p!==this.type;X&&P.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(Z=>Z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,Z=S.length;D<Z;D++){let Q=S[D],nt=Q.shadow;if(nt===void 0){se("WebGLShadowMap:",Q,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;s.copy(nt.mapSize);let xt=nt.getFrameExtents();s.multiply(xt),r.copy(nt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xt.x),s.x=r.x*xt.x,nt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xt.y),s.y=r.y*xt.y,nt.mapSize.y=r.y));let rt=i.state.buffers.depth.getReversed();if(nt.camera._reversedDepth=rt,nt.map===null||X===!0){if(nt.map!==null&&(nt.map.depthTexture!==null&&(nt.map.depthTexture.dispose(),nt.map.depthTexture=null),nt.map.dispose()),this.type===Er){if(Q.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}nt.map=new nn(s.x,s.y,{format:gs,type:un,minFilter:vn,magFilter:vn,generateMipmaps:!1}),nt.map.texture.name=Q.name+".shadowMap",nt.map.depthTexture=new ls(s.x,s.y,ti),nt.map.depthTexture.name=Q.name+".shadowMapDepth",nt.map.depthTexture.format=Si,nt.map.depthTexture.compareFunction=null,nt.map.depthTexture.minFilter=xn,nt.map.depthTexture.magFilter=xn}else Q.isPointLight?(nt.map=new xc(s.x),nt.map.depthTexture=new rl(s.x,gi)):(nt.map=new nn(s.x,s.y),nt.map.depthTexture=new ls(s.x,s.y,gi)),nt.map.depthTexture.name=Q.name+".shadowMap",nt.map.depthTexture.format=Si,this.type===zs?(nt.map.depthTexture.compareFunction=rt?pc:fc,nt.map.depthTexture.minFilter=vn,nt.map.depthTexture.magFilter=vn):(nt.map.depthTexture.compareFunction=null,nt.map.depthTexture.minFilter=xn,nt.map.depthTexture.magFilter=xn);nt.camera.updateProjectionMatrix()}nt.map.isWebGLCubeRenderTarget!==!0&&(nt.map.width!==s.x||nt.map.height!==s.y)&&nt.map.setSize(s.x,s.y);let ut=nt.map.isWebGLCubeRenderTarget?6:nt.getViewportCount();Q.isPointLight!==!0&&nt.updateMatrices(Q,y);for(let dt=0;dt<ut;dt++){let gt=nt.getCamera(dt);if(Q.isPointLight){let ft=nt.camera,Me=nt.matrix,xe=Q.distance||ft.far;xe!==ft.far&&(ft.far=xe,ft.updateProjectionMatrix()),Za.setFromMatrixPosition(Q.matrixWorld),ft.position.copy(Za),eu.copy(ft.position),eu.add(Z_[dt]),ft.up.copy(J_[dt]),ft.lookAt(eu),ft.updateMatrixWorld(),Me.makeTranslation(-Za.x,-Za.y,-Za.z),wf.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),nt._frustum.setFromProjectionMatrix(wf,ft.coordinateSystem,ft.reversedDepth)}if(nt.map.isWebGLCubeRenderTarget)i.setRenderTarget(nt.map,dt),i.clear();else{dt===0&&(i.setRenderTarget(nt.map),i.clear());let ft=nt.getViewport(dt);a.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),k.viewport(a)}n=nt.getFrustum(dt),v(P,y,gt,Q,this.type)}nt.isPointLightShadow!==!0&&this.type===Er&&M(nt,y),nt.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,F,H)};function M(S,P){let y=t.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new nn(s.x,s.y,{format:gs,type:un}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(P,null,y,u,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(P,null,y,d,_,null)}function E(S,P,y,A){let F=null,H=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(H!==void 0)F=H;else if(F=y.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let k=F.uuid,X=P.uuid,D=c[k];D===void 0&&(D={},c[k]=D);let Z=D[X];Z===void 0&&(Z=F.clone(),D[X]=Z,P.addEventListener("dispose",b)),F=Z}if(F.visible=P.visible,F.wireframe=P.wireframe,A===Er?F.side=P.shadowSide!==null?P.shadowSide:P.side:F.side=P.shadowSide!==null?P.shadowSide:f[P.side],F.alphaMap=P.alphaMap,F.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,F.map=P.map,F.clipShadows=P.clipShadows,F.clippingPlanes=P.clippingPlanes,F.clipIntersection=P.clipIntersection,F.displacementMap=P.displacementMap,F.displacementScale=P.displacementScale,F.displacementBias=P.displacementBias,F.wireframeLinewidth=P.wireframeLinewidth,F.linewidth=P.linewidth,y.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let k=i.properties.get(F);k.light=y}return F}function v(S,P,y,A,F){if(S.visible===!1)return;if(S.layers.test(P.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&F===Er)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let X=t.update(S),D=S.material;if(Array.isArray(D)){let Z=X.groups;for(let Q=0,nt=Z.length;Q<nt;Q++){let xt=Z[Q],rt=D[xt.materialIndex];if(rt&&rt.visible){let ut=E(S,rt,A,F);S.onBeforeShadow(i,S,P,y,X,ut,xt),i.renderBufferDirect(y,null,X,ut,S,xt),S.onAfterShadow(i,S,P,y,X,ut,xt)}}}else if(D.visible){let Z=E(S,D,A,F);S.onBeforeShadow(i,S,P,y,X,Z,null),i.renderBufferDirect(y,null,X,Z,S,null),S.onAfterShadow(i,S,P,y,X,Z,null)}}let k=S.children;for(let X=0,D=k.length;X<D;X++)v(k[X],P,y,A,F)}function b(S){S.target.removeEventListener("dispose",b);for(let y in c){let A=c[y],F=S.target.uuid;F in A&&(A[F].dispose(),delete A[F])}}}function j_(i,t){function e(){let O=!1,yt=new Ve,tt=null,ct=new Ve(0,0,0,0);return{setMask:function(wt){tt!==wt&&!O&&(i.colorMask(wt,wt,wt,wt),tt=wt)},setLocked:function(wt){O=wt},setClear:function(wt,mt,Wt,Ht,Le){Le===!0&&(wt*=Ht,mt*=Ht,Wt*=Ht),yt.set(wt,mt,Wt,Ht),ct.equals(yt)===!1&&(i.clearColor(wt,mt,Wt,Ht),ct.copy(yt))},reset:function(){O=!1,tt=null,ct.set(-1,0,0,0)}}}function n(){let O=!1,yt=!1,tt=null,ct=null,wt=null;return{setReversed:function(mt){if(yt!==mt){let Wt=t.get("EXT_clip_control");mt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),yt=mt;let Ht=wt;wt=null,this.setClear(Ht)}},getReversed:function(){return yt},setTest:function(mt){mt?_t(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(mt){tt!==mt&&!O&&(i.depthMask(mt),tt=mt)},setFunc:function(mt){if(yt&&(mt=Zd[mt]),ct!==mt){switch(mt){case ko:i.depthFunc(i.NEVER);break;case Ho:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case dr:i.depthFunc(i.LEQUAL);break;case Go:i.depthFunc(i.EQUAL);break;case Wo:i.depthFunc(i.GEQUAL);break;case Xo:i.depthFunc(i.GREATER);break;case $o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=mt}},setLocked:function(mt){O=mt},setClear:function(mt){wt!==mt&&(wt=mt,yt&&(mt=1-mt),i.clearDepth(mt))},reset:function(){O=!1,tt=null,ct=null,wt=null,yt=!1}}}function s(){let O=!1,yt=null,tt=null,ct=null,wt=null,mt=null,Wt=null,Ht=null,Le=null;return{setTest:function(pe){O||(pe?_t(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(pe){yt!==pe&&!O&&(i.stencilMask(pe),yt=pe)},setFunc:function(pe,tn,pn){(tt!==pe||ct!==tn||wt!==pn)&&(i.stencilFunc(pe,tn,pn),tt=pe,ct=tn,wt=pn)},setOp:function(pe,tn,pn){(mt!==pe||Wt!==tn||Ht!==pn)&&(i.stencilOp(pe,tn,pn),mt=pe,Wt=tn,Ht=pn)},setLocked:function(pe){O=pe},setClear:function(pe){Le!==pe&&(i.clearStencil(pe),Le=pe)},reset:function(){O=!1,yt=null,tt=null,ct=null,wt=null,mt=null,Wt=null,Ht=null,Le=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],_=null,g=!1,p=null,M=null,E=null,v=null,b=null,S=null,P=null,y=new ee(0,0,0),A=0,F=!1,H=null,k=null,X=null,D=null,Z=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),nt=!1,xt=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(xt=parseFloat(/^WebGL (\d)/.exec(rt)[1]),nt=xt>=1):rt.indexOf("OpenGL ES")!==-1&&(xt=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),nt=xt>=2);let ut=null,dt={},gt=i.getParameter(i.SCISSOR_BOX),ft=i.getParameter(i.VIEWPORT),Me=new Ve().fromArray(gt),xe=new Ve().fromArray(ft);function _e(O,yt,tt,ct){let wt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(O,mt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<tt;Wt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(yt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return mt}let ot={};ot[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc(dr),Lt(!1),Qt(Eh),_t(i.CULL_FACE),Pt(Qn);function _t(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Ct(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function B(O,yt){return u[O]!==yt?(i.bindFramebuffer(O,yt),u[O]=yt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=yt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function lt(O,yt){let tt=m,ct=!1;if(O){tt=d.get(yt),tt===void 0&&(tt=[],d.set(yt,tt));let wt=O.textures;if(tt.length!==wt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Wt=wt.length;mt<Wt;mt++)tt[mt]=i.COLOR_ATTACHMENT0+mt;tt.length=wt.length,ct=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,ct=!0);ct&&i.drawBuffers(tt)}function St(O){return _!==O?(i.useProgram(O),_=O,!0):!1}let It={[ks]:i.FUNC_ADD,[gd]:i.FUNC_SUBTRACT,[xd]:i.FUNC_REVERSE_SUBTRACT};It[_d]=i.MIN,It[vd]=i.MAX;let Rt={[yd]:i.ZERO,[Md]:i.ONE,[Sd]:i.SRC_COLOR,[Rh]:i.SRC_ALPHA,[Cd]:i.SRC_ALPHA_SATURATE,[Ed]:i.DST_COLOR,[wd]:i.DST_ALPHA,[bd]:i.ONE_MINUS_SRC_COLOR,[Ph]:i.ONE_MINUS_SRC_ALPHA,[Ad]:i.ONE_MINUS_DST_COLOR,[Td]:i.ONE_MINUS_DST_ALPHA,[Rd]:i.CONSTANT_COLOR,[Pd]:i.ONE_MINUS_CONSTANT_COLOR,[Id]:i.CONSTANT_ALPHA,[Ld]:i.ONE_MINUS_CONSTANT_ALPHA};function Pt(O,yt,tt,ct,wt,mt,Wt,Ht,Le,pe){if(O===Qn){g===!0&&(Ct(i.BLEND),g=!1);return}if(g===!1&&(_t(i.BLEND),g=!0),O!==md){if(O!==p||pe!==F){if((M!==ks||b!==ks)&&(i.blendEquation(i.FUNC_ADD),M=ks,b=ks),pe)switch(O){case Ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFunc(i.ONE,i.ONE);break;case Ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ch:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",O);break}else switch(O){case Ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ah:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ch:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",O);break}E=null,v=null,S=null,P=null,y.set(0,0,0),A=0,p=O,F=pe}return}wt=wt||yt,mt=mt||tt,Wt=Wt||ct,(yt!==M||wt!==b)&&(i.blendEquationSeparate(It[yt],It[wt]),M=yt,b=wt),(tt!==E||ct!==v||mt!==S||Wt!==P)&&(i.blendFuncSeparate(Rt[tt],Rt[ct],Rt[mt],Rt[Wt]),E=tt,v=ct,S=mt,P=Wt),(Ht.equals(y)===!1||Le!==A)&&(i.blendColor(Ht.r,Ht.g,Ht.b,Le),y.copy(Ht),A=Le),p=O,F=!1}function Nt(O,yt){O.side===Ai?Ct(i.CULL_FACE):_t(i.CULL_FACE);let tt=O.side===yn;yt&&(tt=!tt),Lt(tt),O.blending===Ar&&O.transparent===!1?Pt(Qn):Pt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let ct=O.stencilWrite;o.setTest(ct),ct&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(O){H!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),H=O)}function Qt(O){O!==dd?(_t(i.CULL_FACE),O!==k&&(O===Eh?i.cullFace(i.BACK):O===fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),k=O}function ie(O){O!==X&&(nt&&i.lineWidth(O),X=O)}function Re(O,yt,tt){O?(_t(i.POLYGON_OFFSET_FILL),(D!==yt||Z!==tt)&&(D=yt,Z=tt,a.getReversed()&&(yt=-yt),i.polygonOffset(yt,tt))):Ct(i.POLYGON_OFFSET_FILL)}function ne(O){O?_t(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function he(O){O===void 0&&(O=i.TEXTURE0+Q-1),ut!==O&&(i.activeTexture(O),ut=O)}function G(O,yt,tt){tt===void 0&&(ut===null?tt=i.TEXTURE0+Q-1:tt=ut);let ct=dt[tt];ct===void 0&&(ct={type:void 0,texture:void 0},dt[tt]=ct),(ct.type!==O||ct.texture!==yt)&&(ut!==tt&&(i.activeTexture(tt),ut=tt),i.bindTexture(O,yt||ot[O]),ct.type=O,ct.texture=yt)}function oe(){let O=dt[ut];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function de(){try{i.compressedTexImage2D(...arguments)}catch(O){ce("WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){ce("WebGLState:",O)}}function x(){try{i.texSubImage2D(...arguments)}catch(O){ce("WebGLState:",O)}}function $(){try{i.texSubImage3D(...arguments)}catch(O){ce("WebGLState:",O)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(O){ce("WebGLState:",O)}}function T(){try{i.compressedTexSubImage3D(...arguments)}catch(O){ce("WebGLState:",O)}}function U(){try{i.texStorage2D(...arguments)}catch(O){ce("WebGLState:",O)}}function W(){try{i.texStorage3D(...arguments)}catch(O){ce("WebGLState:",O)}}function L(){try{i.texImage2D(...arguments)}catch(O){ce("WebGLState:",O)}}function z(){try{i.texImage3D(...arguments)}catch(O){ce("WebGLState:",O)}}function et(O){return f[O]!==void 0?f[O]:i.getParameter(O)}function Y(O,yt){f[O]!==yt&&(i.pixelStorei(O,yt),f[O]=yt)}function pt(O){Me.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Me.copy(O))}function Mt(O){xe.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),xe.copy(O))}function Et(O,yt){let tt=c.get(yt);tt===void 0&&(tt=new WeakMap,c.set(yt,tt));let ct=tt.get(O);ct===void 0&&(ct=i.getUniformBlockIndex(yt,O.name),tt.set(O,ct))}function Ft(O,yt){let ct=c.get(yt).get(O);l.get(yt)!==ct&&(i.uniformBlockBinding(yt,ct,O.__bindingPointIndex),l.set(yt,ct))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},ut=null,dt={},u={},d=new WeakMap,m=[],_=null,g=!1,p=null,M=null,E=null,v=null,b=null,S=null,P=null,y=new ee(0,0,0),A=0,F=!1,H=null,k=null,X=null,D=null,Z=null,Me.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Ct,bindFramebuffer:B,drawBuffers:lt,useProgram:St,setBlending:Pt,setMaterial:Nt,setFlipSided:Lt,setCullFace:Qt,setLineWidth:ie,setPolygonOffset:Re,setScissorTest:ne,activeTexture:he,bindTexture:G,unbindTexture:oe,compressedTexImage2D:de,compressedTexImage3D:C,texImage2D:L,texImage3D:z,pixelStorei:Y,getParameter:et,updateUBOMapping:Et,uniformBlockBinding:Ft,texStorage2D:U,texStorage3D:W,texSubImage2D:x,texSubImage3D:$,compressedTexSubImage2D:j,compressedTexSubImage3D:T,scissor:pt,viewport:Mt,reset:$t}}function Q_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap,f=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return m?new OffscreenCanvas(C,x):ra("canvas")}function g(C,x,$){let j=1,T=de(C);if((T.width>$||T.height>$)&&(j=$/Math.max(T.width,T.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let U=Math.floor(j*T.width),W=Math.floor(j*T.height);u===void 0&&(u=_(U,W));let L=x?_(U,W):u;return L.width=U,L.height=W,L.getContext("2d").drawImage(C,0,0,U,W),se("WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+U+"x"+W+")."),L}else return"data"in C&&se("WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),C;return C}function p(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,x,$,j,T,U=!1){if(C!==null){if(i[C]!==void 0)return i[C];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let W;j&&(W=t.get("EXT_texture_norm16"),W||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let L=x;if(x===i.RED&&($===i.FLOAT&&(L=i.R32F),$===i.HALF_FLOAT&&(L=i.R16F),$===i.UNSIGNED_BYTE&&(L=i.R8),$===i.UNSIGNED_SHORT&&W&&(L=W.R16_EXT),$===i.SHORT&&W&&(L=W.R16_SNORM_EXT)),x===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(L=i.R8UI),$===i.UNSIGNED_SHORT&&(L=i.R16UI),$===i.UNSIGNED_INT&&(L=i.R32UI),$===i.BYTE&&(L=i.R8I),$===i.SHORT&&(L=i.R16I),$===i.INT&&(L=i.R32I)),x===i.RG&&($===i.FLOAT&&(L=i.RG32F),$===i.HALF_FLOAT&&(L=i.RG16F),$===i.UNSIGNED_BYTE&&(L=i.RG8),$===i.UNSIGNED_SHORT&&W&&(L=W.RG16_EXT),$===i.SHORT&&W&&(L=W.RG16_SNORM_EXT)),x===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(L=i.RG8UI),$===i.UNSIGNED_SHORT&&(L=i.RG16UI),$===i.UNSIGNED_INT&&(L=i.RG32UI),$===i.BYTE&&(L=i.RG8I),$===i.SHORT&&(L=i.RG16I),$===i.INT&&(L=i.RG32I)),x===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(L=i.RGB8UI),$===i.UNSIGNED_SHORT&&(L=i.RGB16UI),$===i.UNSIGNED_INT&&(L=i.RGB32UI),$===i.BYTE&&(L=i.RGB8I),$===i.SHORT&&(L=i.RGB16I),$===i.INT&&(L=i.RGB32I)),x===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(L=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(L=i.RGBA16UI),$===i.UNSIGNED_INT&&(L=i.RGBA32UI),$===i.BYTE&&(L=i.RGBA8I),$===i.SHORT&&(L=i.RGBA16I),$===i.INT&&(L=i.RGBA32I)),x===i.RGB&&($===i.UNSIGNED_SHORT&&W&&(L=W.RGB16_EXT),$===i.SHORT&&W&&(L=W.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(L=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(L=i.R11F_G11F_B10F)),x===i.RGBA){let z=U?sa:Se.getTransfer(T);$===i.FLOAT&&(L=i.RGBA32F),$===i.HALF_FLOAT&&(L=i.RGBA16F),$===i.UNSIGNED_BYTE&&(L=z===De?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&W&&(L=W.RGBA16_EXT),$===i.SHORT&&W&&(L=W.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(L=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(L=i.RGB5_A1)}return(L===i.R16F||L===i.R32F||L===i.RG16F||L===i.RG32F||L===i.RGBA16F||L===i.RGBA32F)&&t.get("EXT_color_buffer_float"),L}function b(C,x){let $;return C?x===null||x===gi||x===Rr?$=i.DEPTH24_STENCIL8:x===ti?$=i.DEPTH32F_STENCIL8:x===Cr&&($=i.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===gi||x===Rr?$=i.DEPTH_COMPONENT24:x===ti?$=i.DEPTH_COMPONENT32F:x===Cr&&($=i.DEPTH_COMPONENT16),$}function S(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==xn&&C.minFilter!==vn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function P(C){let x=C.target;x.removeEventListener("dispose",P),A(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function y(C){let x=C.target;x.removeEventListener("dispose",y),H(x)}function A(C){let x=n.get(C);if(x.__webglInit===void 0)return;let $=C.source,j=d.get($);if(j){let T=j[x.__cacheKey];T.usedTimes--,T.usedTimes===0&&F(C),Object.keys(j).length===0&&d.delete($)}n.remove(C)}function F(C){let x=n.get(C);i.deleteTexture(x.__webglTexture);let $=C.source,j=d.get($);delete j[x.__cacheKey],a.memory.textures--}function H(C){let x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let T=0;T<x.__webglFramebuffer[j].length;T++)i.deleteFramebuffer(x.__webglFramebuffer[j][T]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let $=C.textures;for(let j=0,T=$.length;j<T;j++){let U=n.get($[j]);U.__webglTexture&&(i.deleteTexture(U.__webglTexture),a.memory.textures--),n.remove($[j])}n.remove(C)}let k=0;function X(){k=0}function D(){return k}function Z(C){k=C}function Q(){let C=k;return C>=s.maxTextures&&se("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,C}function nt(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function xt(C,x){let $=n.get(C);if(C.isVideoTexture&&G(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&$.__version!==C.version){let j=C.image;if(j===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct($,C,x);return}}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+x)}function rt(C,x){let $=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){Ct($,C,x);return}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+x)}function ut(C,x){let $=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){Ct($,C,x);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+x)}function dt(C,x){let $=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&$.__version!==C.version){B($,C,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+x)}let gt={[qo]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},ft={[xn]:i.NEAREST,[Ud]:i.NEAREST_MIPMAP_NEAREST,[ka]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[Rl]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},Me={[zd]:i.NEVER,[Wd]:i.ALWAYS,[kd]:i.LESS,[fc]:i.LEQUAL,[Hd]:i.EQUAL,[pc]:i.GEQUAL,[Vd]:i.GREATER,[Gd]:i.NOTEQUAL};function xe(C,x){if(x.type===ti&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===vn||x.magFilter===Rl||x.magFilter===ka||x.magFilter===Ci||x.minFilter===vn||x.minFilter===Rl||x.minFilter===ka||x.minFilter===Ci)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,gt[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,gt[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,gt[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ft[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ft[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Me[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===xn||x.minFilter!==ka&&x.minFilter!==Ci||x.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function _e(C,x){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",P));let j=x.source,T=d.get(j);T===void 0&&(T={},d.set(j,T));let U=nt(x);if(U!==C.__cacheKey){T[U]===void 0&&(T[U]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),T[U].usedTimes++;let W=T[C.__cacheKey];W!==void 0&&(T[C.__cacheKey].usedTimes--,W.usedTimes===0&&F(x)),C.__cacheKey=U,C.__webglTexture=T[U].texture}return $}function ot(C,x,$){return Math.floor(Math.floor(C/$)/x)}function _t(C,x,$,j){let U=C.updateRanges;if(U.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,$,j,x.data);else{U.sort((Y,pt)=>Y.start-pt.start);let W=0;for(let Y=1;Y<U.length;Y++){let pt=U[W],Mt=U[Y],Et=pt.start+pt.count,Ft=ot(Mt.start,x.width,4),$t=ot(pt.start,x.width,4);Mt.start<=Et+1&&Ft===$t&&ot(Mt.start+Mt.count-1,x.width,4)===Ft?pt.count=Math.max(pt.count,Mt.start+Mt.count-pt.start):(++W,U[W]=Mt)}U.length=W+1;let L=e.getParameter(i.UNPACK_ROW_LENGTH),z=e.getParameter(i.UNPACK_SKIP_PIXELS),et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Y=0,pt=U.length;Y<pt;Y++){let Mt=U[Y],Et=Math.floor(Mt.start/4),Ft=Math.ceil(Mt.count/4),$t=Et%x.width,O=Math.floor(Et/x.width),yt=Ft,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,$t,O,yt,tt,$,j,x.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,L),e.pixelStorei(i.UNPACK_SKIP_PIXELS,z),e.pixelStorei(i.UNPACK_SKIP_ROWS,et)}}function Ct(C,x,$){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);let T=_e(C,x),U=x.source;e.bindTexture(j,C.__webglTexture,i.TEXTURE0+$);let W=n.get(U);if(U.version!==W.__version||T===!0){if(e.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let tt=Se.getPrimaries(Se.workingColorSpace),ct=x.colorSpace===Zi?null:Se.getPrimaries(x.colorSpace),wt=x.colorSpace===Zi||tt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let z=g(x.image,!1,s.maxTextureSize);z=oe(x,z);let et=r.convert(x.format,x.colorSpace),Y=r.convert(x.type),pt=v(x.internalFormat,et,Y,x.normalized,x.colorSpace,x.isVideoTexture);xe(j,x);let Mt,Et=x.mipmaps,Ft=x.isVideoTexture!==!0,$t=W.__version===void 0||T===!0,O=U.dataReady,yt=S(x,z);if(x.isDepthTexture)pt=b(x.format===ms,x.type),$t&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,pt,z.width,z.height):e.texImage2D(i.TEXTURE_2D,0,pt,z.width,z.height,0,et,Y,null));else if(x.isDataTexture)if(Et.length>0){Ft&&$t&&e.texStorage2D(i.TEXTURE_2D,yt,pt,Et[0].width,Et[0].height);for(let tt=0,ct=Et.length;tt<ct;tt++)Mt=Et[tt],Ft?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Mt.width,Mt.height,et,Y,Mt.data):e.texImage2D(i.TEXTURE_2D,tt,pt,Mt.width,Mt.height,0,et,Y,Mt.data);x.generateMipmaps=!1}else Ft?($t&&e.texStorage2D(i.TEXTURE_2D,yt,pt,z.width,z.height),O&&_t(x,z,et,Y)):e.texImage2D(i.TEXTURE_2D,0,pt,z.width,z.height,0,et,Y,z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ft&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,pt,Et[0].width,Et[0].height,z.depth);for(let tt=0,ct=Et.length;tt<ct;tt++)if(Mt=Et[tt],x.format!==ei)if(et!==null)if(Ft){if(O)if(x.layerUpdates.size>0){let wt=Wh(Mt.width,Mt.height,x.format,x.type);for(let mt of x.layerUpdates){let Wt=Mt.data.subarray(mt*wt/Mt.data.BYTES_PER_ELEMENT,(mt+1)*wt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,mt,Mt.width,Mt.height,1,et,Wt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Mt.width,Mt.height,z.depth,et,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,pt,Mt.width,Mt.height,z.depth,0,Mt.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Mt.width,Mt.height,z.depth,et,Y,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,pt,Mt.width,Mt.height,z.depth,0,et,Y,Mt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ft&&$t&&e.texStorage2D(i.TEXTURE_2D,yt,pt,Et[0].width,Et[0].height);for(let tt=0,ct=Et.length;tt<ct;tt++)Mt=Et[tt],x.format!==ei?et!==null?Ft?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,Mt.width,Mt.height,et,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,pt,Mt.width,Mt.height,0,Mt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Mt.width,Mt.height,et,Y,Mt.data):e.texImage2D(i.TEXTURE_2D,tt,pt,Mt.width,Mt.height,0,et,Y,Mt.data)}else if(x.isDataArrayTexture)if(Ft){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,pt,z.width,z.height,z.depth),O)if(x.layerUpdates.size>0){let tt=Wh(z.width,z.height,x.format,x.type);for(let ct of x.layerUpdates){let wt=z.data.subarray(ct*tt/z.data.BYTES_PER_ELEMENT,(ct+1)*tt/z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,z.width,z.height,1,et,Y,wt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,et,Y,z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,z.width,z.height,z.depth,0,et,Y,z.data);else if(x.isData3DTexture)Ft?($t&&e.texStorage3D(i.TEXTURE_3D,yt,pt,z.width,z.height,z.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,et,Y,z.data)):e.texImage3D(i.TEXTURE_3D,0,pt,z.width,z.height,z.depth,0,et,Y,z.data);else if(x.isFramebufferTexture){if($t)if(Ft)e.texStorage2D(i.TEXTURE_2D,yt,pt,z.width,z.height);else{let tt=z.width,ct=z.height;for(let wt=0;wt<yt;wt++)e.texImage2D(i.TEXTURE_2D,wt,pt,tt,ct,0,et,Y,null),tt>>=1,ct>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),z.parentNode!==tt){tt.appendChild(z),f.add(x),tt.onpaint=ct=>{let wt=ct.changedElements;for(let mt of f)wt.includes(mt.image)&&(mt.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,z);else{let wt=i.RGBA,mt=i.RGBA,Wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,wt,mt,Wt,z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Et.length>0){if(Ft&&$t){let tt=de(Et[0]);e.texStorage2D(i.TEXTURE_2D,yt,pt,tt.width,tt.height)}for(let tt=0,ct=Et.length;tt<ct;tt++)Mt=Et[tt],Ft?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,et,Y,Mt):e.texImage2D(i.TEXTURE_2D,tt,pt,et,Y,Mt);x.generateMipmaps=!1}else if(Ft){if($t){let tt=de(z);e.texStorage2D(i.TEXTURE_2D,yt,pt,tt.width,tt.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et,Y,z)}else e.texImage2D(i.TEXTURE_2D,0,pt,et,Y,z);p(x)&&M(j),W.__version=U.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function B(C,x,$){if(x.image.length!==6)return;let j=_e(C,x),T=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+$);let U=n.get(T);if(T.version!==U.__version||j===!0){e.activeTexture(i.TEXTURE0+$);let W=Se.getPrimaries(Se.workingColorSpace),L=x.colorSpace===Zi?null:Se.getPrimaries(x.colorSpace),z=x.colorSpace===Zi||W===L?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);let et=x.isCompressedTexture||x.image[0].isCompressedTexture,Y=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let mt=0;mt<6;mt++)!et&&!Y?pt[mt]=g(x.image[mt],!0,s.maxCubemapSize):pt[mt]=Y?x.image[mt].image:x.image[mt],pt[mt]=oe(x,pt[mt]);let Mt=pt[0],Et=r.convert(x.format,x.colorSpace),Ft=r.convert(x.type),$t=v(x.internalFormat,Et,Ft,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,yt=U.__version===void 0||j===!0,tt=T.dataReady,ct=S(x,Mt);xe(i.TEXTURE_CUBE_MAP,x);let wt;if(et){O&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,$t,Mt.width,Mt.height);for(let mt=0;mt<6;mt++){wt=pt[mt].mipmaps;for(let Wt=0;Wt<wt.length;Wt++){let Ht=wt[Wt];x.format!==ei?Et!==null?O?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,0,0,Ht.width,Ht.height,Et,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,$t,Ht.width,Ht.height,0,Ht.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,0,0,Ht.width,Ht.height,Et,Ft,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,$t,Ht.width,Ht.height,0,Et,Ft,Ht.data)}}}else{if(wt=x.mipmaps,O&&yt){wt.length>0&&ct++;let mt=de(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,$t,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Y){O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,pt[mt].width,pt[mt].height,Et,Ft,pt[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,$t,pt[mt].width,pt[mt].height,0,Et,Ft,pt[mt].data);for(let Wt=0;Wt<wt.length;Wt++){let Le=wt[Wt].image[mt].image;O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,0,0,Le.width,Le.height,Et,Ft,Le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,$t,Le.width,Le.height,0,Et,Ft,Le.data)}}else{O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Et,Ft,pt[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,$t,Et,Ft,pt[mt]);for(let Wt=0;Wt<wt.length;Wt++){let Ht=wt[Wt];O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,0,0,Et,Ft,Ht.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,$t,Et,Ft,Ht.image[mt])}}}p(x)&&M(i.TEXTURE_CUBE_MAP),U.__version=T.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function lt(C,x,$,j,T,U){let W=r.convert($.format,$.colorSpace),L=r.convert($.type),z=v($.internalFormat,W,L,$.normalized,$.colorSpace),et=n.get(x),Y=n.get($);if(Y.__renderTarget=x,!et.__hasExternalTextures){let pt=Math.max(1,x.width>>U),Mt=Math.max(1,x.height>>U);T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?e.texImage3D(T,U,z,pt,Mt,x.depth,0,W,L,null):e.texImage2D(T,U,z,pt,Mt,0,W,L,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,T,Y.__webglTexture,0,ne(x)):(T===i.TEXTURE_2D||T>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&T<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,T,Y.__webglTexture,U),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(C,x,$){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){let j=x.depthTexture,T=j&&j.isDepthTexture?j.type:null,U=b(x.stencilBuffer,T),W=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne(x),U,x.width,x.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne(x),U,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,U,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,C)}else{let j=x.textures;for(let T=0;T<j.length;T++){let U=j[T],W=r.convert(U.format,U.colorSpace),L=r.convert(U.type),z=v(U.internalFormat,W,L,U.normalized,U.colorSpace);he(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne(x),z,x.width,x.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne(x),z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,z,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(C,x,$){let j=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let T=n.get(x.depthTexture);if(T.__renderTarget=x,(!T.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j){if(T.__webglInit===void 0&&(T.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),T.__webglTexture===void 0){T.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture),xe(i.TEXTURE_CUBE_MAP,x.depthTexture);let et=r.convert(x.depthTexture.format),Y=r.convert(x.depthTexture.type),pt;x.depthTexture.format===Si?pt=i.DEPTH_COMPONENT24:x.depthTexture.format===ms&&(pt=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,pt,x.width,x.height,0,et,Y,null)}}else xt(x.depthTexture,0);let U=T.__webglTexture,W=ne(x),L=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,z=x.depthTexture.format===ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Si)he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,L,U,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,z,L,U,0);else if(x.depthTexture.format===ms)he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,L,U,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,z,L,U,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(C){let x=n.get(C),$=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let j=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){let T=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",T)};j.addEventListener("dispose",T),x.__depthDisposeCallback=T}x.__boundDepthTexture=j}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if($)for(let j=0;j<6;j++)It(x.__webglFramebuffer[j],C,j);else{let j=C.texture.mipmaps;j&&j.length>0?It(x.__webglFramebuffer[0],C,0):It(x.__webglFramebuffer,C,0)}else if($){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),St(x.__webglDepthbuffer[j],C,!1);else{let T=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,T,i.RENDERBUFFER,U)}}else{let j=C.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),St(x.__webglDepthbuffer,C,!1);else{let T=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,T,i.RENDERBUFFER,U)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(C,x,$){let j=n.get(C);x!==void 0&&lt(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Rt(C)}function Nt(C){let x=C.texture,$=n.get(C),j=n.get(x);C.addEventListener("dispose",y);let T=C.textures,U=C.isWebGLCubeRenderTarget===!0,W=T.length>1;if(W||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,a.memory.textures++),U){$.__webglFramebuffer=[];for(let L=0;L<6;L++)if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer[L]=[];for(let z=0;z<x.mipmaps.length;z++)$.__webglFramebuffer[L][z]=i.createFramebuffer()}else $.__webglFramebuffer[L]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer=[];for(let L=0;L<x.mipmaps.length;L++)$.__webglFramebuffer[L]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(W)for(let L=0,z=T.length;L<z;L++){let et=n.get(T[L]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&he(C)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let L=0;L<T.length;L++){let z=T[L];$.__webglColorRenderbuffer[L]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[L]);let et=r.convert(z.format,z.colorSpace),Y=r.convert(z.type),pt=v(z.internalFormat,et,Y,z.normalized,z.colorSpace,C.isXRRenderTarget===!0),Mt=ne(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,pt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,$.__webglColorRenderbuffer[L])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),St($.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(U){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),xe(i.TEXTURE_CUBE_MAP,x);for(let L=0;L<6;L++)if(x.mipmaps&&x.mipmaps.length>0)for(let z=0;z<x.mipmaps.length;z++)lt($.__webglFramebuffer[L][z],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,z);else lt($.__webglFramebuffer[L],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);p(x)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(W){for(let L=0,z=T.length;L<z;L++){let et=T[L],Y=n.get(et),pt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Y.__webglTexture),xe(pt,et),lt($.__webglFramebuffer,C,et,i.COLOR_ATTACHMENT0+L,pt,0),p(et)&&M(pt)}e.unbindTexture()}else{let L=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(L=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(L,j.__webglTexture),xe(L,x),x.mipmaps&&x.mipmaps.length>0)for(let z=0;z<x.mipmaps.length;z++)lt($.__webglFramebuffer[z],C,x,i.COLOR_ATTACHMENT0,L,z);else lt($.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,L,0);p(x)&&M(L),e.unbindTexture()}C.depthBuffer&&Rt(C)}function Lt(C){let x=C.textures;for(let $=0,j=x.length;$<j;$++){let T=x[$];if(p(T)){let U=E(C),W=n.get(T).__webglTexture;e.bindTexture(U,W),M(U),e.unbindTexture()}}}let Qt=[],ie=[];function Re(C){if(C.samples>0){if(he(C)===!1){let x=C.textures,$=C.width,j=C.height,T=i.COLOR_BUFFER_BIT,U=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=n.get(C),L=x.length>1;if(L)for(let et=0;et<x.length;et++)e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,W.__webglMultisampledFramebuffer);let z=C.texture.mipmaps;z&&z.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer);for(let et=0;et<x.length;et++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(T|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(T|=i.STENCIL_BUFFER_BIT)),L){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,W.__webglColorRenderbuffer[et]);let Y=n.get(x[et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Y,0)}i.blitFramebuffer(0,0,$,j,0,0,$,j,T,i.NEAREST),l===!0&&(Qt.length=0,ie.length=0,Qt.push(i.COLOR_ATTACHMENT0+et),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Qt.push(U),ie.push(U),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),L)for(let et=0;et<x.length;et++){e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,W.__webglColorRenderbuffer[et]);let Y=n.get(x[et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,Y,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ne(C){return Math.min(s.maxSamples,C.samples)}function he(C){let x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function G(C){let x=a.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function oe(C,x){let $=C.colorSpace,j=C.format,T=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||$!==ia&&$!==Zi&&(Se.getTransfer($)===De?(j!==ei||T!==Un)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",$)),x}function de(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=X,this.getTextureUnits=D,this.setTextureUnits=Z,this.setTexture2D=xt,this.setTexture2DArray=rt,this.setTexture3D=ut,this.setTextureCube=dt,this.rebindTextures=Pt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function tv(i,t){function e(n,s=Zi){let r,a=Se.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lh)return i.BYTE;if(n===Dh)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===Fh)return i.ALPHA;if(n===Oh)return i.RGB;if(n===ei)return i.RGBA;if(n===Si)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===Dl)return i.RED;if(n===Nl)return i.RED_INTEGER;if(n===gs)return i.RG;if(n===Ul)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===Ha||n===Va||n===Ga||n===Wa)if(a===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Bl||n===zl||n===kl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===Xa||n===$l)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hl||n===Vl)return a===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wl)return r.COMPRESSED_R11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xa)return r.COMPRESSED_RG11_EAC;if(n===$l)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===Yl||n===Zl||n===Jl||n===Kl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===lc||n===cc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oc)return a===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===uc||n===$a||n===dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nv=`
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

}`,cu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new da(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:ev,fragmentShader:nv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hu=class extends bi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,_=typeof XRWebGLBinding<"u",g=new cu,p={},M=e.getContextAttributes(),E=null,v=null,b=[],S=[],P=new Tt,y=null,A=null,F=new hn;F.viewport=new Ve;let H=new hn;H.viewport=new Ve;let k=[F,H],X=new wl,D=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let _t=b[ot];return _t===void 0&&(_t=new xr,b[ot]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(ot){let _t=b[ot];return _t===void 0&&(_t=new xr,b[ot]=_t),_t.getGripSpace()},this.getHand=function(ot){let _t=b[ot];return _t===void 0&&(_t=new xr,b[ot]=_t),_t.getHandSpace()};function Q(ot){let _t=S.indexOf(ot.inputSource);if(_t===-1)return;let Ct=b[_t];Ct!==void 0&&(Ct.update(ot.inputSource,ot.frame,c||a),Ct.dispatchEvent({type:ot.type,data:ot.inputSource}))}function nt(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",xt);for(let ot=0;ot<b.length;ot++){let _t=S[ot];_t!==null&&(S[ot]=null,b[ot].disconnect(_t))}D=null,Z=null,g.reset();for(let ot in p)delete p[ot];if(t.setRenderTarget(E),d=null,u=null,f=null,s=null,v=null,_e.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(P.width,P.height,!1),A!==null){let ot=A.camera;ot.fov=A.fov,ot.zoom=A.zoom,ot.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,n.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){o=ot,n.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",xt),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,B=null,lt=null;M.depth&&(lt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=M.stencil?ms:Si,B=M.stencil?Rr:gi);let St={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(St),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new nn(u.textureWidth,u.textureHeight,{format:ei,type:Un,depthTexture:new ls(u.textureWidth,u.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ct={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new nn(d.framebufferWidth,d.framebufferHeight,{format:ei,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function xt(ot){for(let _t=0;_t<ot.removed.length;_t++){let Ct=ot.removed[_t],B=S.indexOf(Ct);B>=0&&(S[B]=null,b[B].disconnect(Ct))}for(let _t=0;_t<ot.added.length;_t++){let Ct=ot.added[_t],B=S.indexOf(Ct);if(B===-1){for(let St=0;St<b.length;St++)if(St>=S.length){S.push(Ct),B=St;break}else if(S[St]===null){S[St]=Ct,B=St;break}if(B===-1)break}let lt=b[B];lt&&lt.connect(Ct)}}let rt=new N,ut=new N;function dt(ot,_t,Ct){rt.setFromMatrixPosition(_t.matrixWorld),ut.setFromMatrixPosition(Ct.matrixWorld);let B=rt.distanceTo(ut),lt=_t.projectionMatrix.elements,St=Ct.projectionMatrix.elements,It=lt[14]/(lt[10]-1),Rt=lt[14]/(lt[10]+1),Pt=(lt[9]+1)/lt[5],Nt=(lt[9]-1)/lt[5],Lt=(lt[8]-1)/lt[0],Qt=(St[8]+1)/St[0],ie=It*Lt,Re=It*Qt,ne=B/(-Lt+Qt),he=ne*-Lt;if(_t.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(he),ot.translateZ(ne),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),lt[10]===-1)ot.projectionMatrix.copy(_t.projectionMatrix),ot.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{let G=It+ne,oe=Rt+ne,de=ie-he,C=Re+(B-he),x=Pt*Rt/oe*G,$=Nt*Rt/oe*G;ot.projectionMatrix.makePerspective(de,C,x,$,G,oe),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function gt(ot,_t){_t===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(_t.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let _t=ot.near,Ct=ot.far;g.texture!==null&&(g.depthNear>0&&(_t=g.depthNear),g.depthFar>0&&(Ct=g.depthFar)),X.near=H.near=F.near=_t,X.far=H.far=F.far=Ct,(D!==X.near||Z!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),D=X.near,Z=X.far),X.layers.mask=ot.layers.mask|6,F.layers.mask=X.layers.mask&-5,H.layers.mask=X.layers.mask&-3;let B=ot.parent,lt=X.cameras;gt(X,B);for(let St=0;St<lt.length;St++)gt(lt[St],B);lt.length===2?dt(X,F,H):X.projectionMatrix.copy(F.projectionMatrix),A===null&&ot.isPerspectiveCamera&&(A={camera:ot,fov:ot.fov,zoom:ot.zoom}),ft(ot,X,B)};function ft(ot,_t,Ct){Ct===null?ot.matrix.copy(_t.matrixWorld):(ot.matrix.copy(Ct.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(_t.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(_t.projectionMatrix),ot.projectionMatrixInverse.copy(_t.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=Jo*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(ot){l=ot,u!==null&&(u.fixedFoveation=ot),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ot)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(X)},this.getCameraTexture=function(ot){return p[ot]};let Me=null;function xe(ot,_t){if(h=_t.getViewerPose(c||a),m=_t,h!==null){let Ct=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let B=!1;Ct.length!==X.cameras.length&&(X.cameras.length=0,B=!0);for(let Rt=0;Rt<Ct.length;Rt++){let Pt=Ct[Rt],Nt=null;if(d!==null)Nt=d.getViewport(Pt);else{let Qt=f.getViewSubImage(u,Pt);Nt=Qt.viewport,Rt===0&&(t.setRenderTargetTextures(v,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(v))}let Lt=k[Rt];Lt===void 0&&(Lt=new hn,Lt.layers.enable(Rt),Lt.viewport=new Ve,k[Rt]=Lt),Lt.matrix.fromArray(Pt.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(Pt.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Rt===0&&(X.matrix.copy(Lt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),B===!0&&X.cameras.push(Lt)}let lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Rt=f.getDepthInformation(Ct[0]);Rt&&Rt.isValid&&Rt.texture&&g.init(Rt,s.renderState)}if(lt&&lt.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let Rt=0;Rt<Ct.length;Rt++){let Pt=Ct[Rt].camera;if(Pt){let Nt=p[Pt];Nt||(Nt=new da,p[Pt]=Nt);let Lt=f.getCameraImage(Pt);Nt.sourceTexture=Lt}}}}for(let Ct=0;Ct<b.length;Ct++){let B=S[Ct],lt=b[Ct];B!==null&&lt!==void 0&&lt.update(B,_t,c||a)}Me&&Me(ot,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),m=null}let _e=new Tf;_e.setAnimationLoop(xe),this.setAnimationLoop=function(ot){Me=ot},this.dispose=function(){}}},iv=new Ne,If=new fe;If.set(-1,0,0,0,1,0,0,0,1);function sv(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Hh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,E,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===yn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===yn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),E=M.envMap,v=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(iv.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(If),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rv(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let S=b.program;n.uniformBlockBinding(v,S)}function c(v,b){let S=s[v.id];S===void 0&&(g(v),S=h(v),s[v.id]=S,v.addEventListener("dispose",M));let P=b.program;n.updateUBOMapping(v,P);let y=t.render.frame;r[v.id]!==y&&(u(v),r[v.id]=y)}function h(v){let b=f();v.__bindingPointIndex=b;let S=i.createBuffer(),P=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let b=s[v.id],S=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,A=S.length;y<A;y++){let F=S[y];if(Array.isArray(F))for(let H=0,k=F.length;H<k;H++)d(F[H],y,H,P);else d(F,y,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,b,S,P){if(_(v,b,S,P)===!0){let y=v.__offset,A=v.value;if(Array.isArray(A)){let F=0;for(let H=0;H<A.length;H++){let k=A[H],X=p(k);m(k,v.__data,F),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(F+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function m(v,b,S){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,S)}function _(v,b,S,P){let y=v.value,A=b+"_"+S;if(P[A]===void 0)return typeof y=="number"||typeof y=="boolean"?P[A]=y:ArrayBuffer.isView(y)?P[A]=y.slice():P[A]=y.clone(),!0;{let F=P[A];if(typeof y=="number"||typeof y=="boolean"){if(F!==y)return P[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(F.equals(y)===!1)return F.copy(y),!0}}return!1}function g(v){let b=v.uniforms,S=0,P=16;for(let A=0,F=b.length;A<F;A++){let H=Array.isArray(b[A])?b[A]:[b[A]];for(let k=0,X=H.length;k<X;k++){let D=H[k],Z=Array.isArray(D.value)?D.value:[D.value];for(let Q=0,nt=Z.length;Q<nt;Q++){let xt=Z[Q],rt=p(xt),ut=S%P,dt=ut%rt.boundary,gt=ut+dt;S+=dt,gt!==0&&P-gt<rt.storage&&(S+=P-gt),D.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=rt.storage}}}let y=S%P;return y>0&&(S+=P-y),v.__size=S,v.__cache={},this}function p(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):se("WebGLRenderer: Unsupported uniform value type.",v),b}function M(v){let b=v.target;b.removeEventListener("dispose",M);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function E(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var av=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function ov(){return Ri===null&&(Ri=new ca(av,16,16,gs,un),Ri.name="DFG_LUT",Ri.minFilter=vn,Ri.magFilter=vn,Ri.wrapS=Mi,Ri.wrapT=Mi,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var _c=class{constructor(t={}){let{canvas:e=$d(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Un}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=d,g=new Set([Fl,Ul,Nl]),p=new Set([Un,gi,Cr,Rr,Il,Ll]),M=new Uint32Array(4),E=new Int32Array(4),v=new N,b=null,S=null,P=[],y=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,H=!1,k=null,X=null,D=null,Z=null;this._outputColorSpace=gn;let Q=0,nt=0,xt=null,rt=-1,ut=null,dt=new Ve,gt=new Ve,ft=null,Me=new ee(0),xe=0,_e=e.width,ot=e.height,_t=1,Ct=null,B=null,lt=new Ve(0,0,_e,ot),St=new Ve(0,0,_e,ot),It=!1,Rt=new _r,Pt=!1,Nt=!1,Lt=new Ne,Qt=new N,ie=new Ve,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function he(){return xt===null?_t:1}let G=n;function oe(w,V){return e.getContext(w,V)}let de,C,x,$,j,T,U,W,L,z,et,Y,pt,Mt,Et,Ft,$t,O,yt,tt,ct,wt,mt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",tn,!1),G===null){let V="webgl2";if(G=oe(V,w),G===null)throw oe(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(w){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",tn,!1),ce("WebGLRenderer: "+w.message),w}function Wt(){de=new px(G),de.init(),ct=new tv(G,de),C=new sx(G,de,t,ct),x=new j_(G,de),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),X=G.createFramebuffer(),D=G.createFramebuffer(),Z=G.createFramebuffer(),$=new xx(G),j=new B_,T=new Q_(G,de,x,j,C,ct,$),U=new fx(F),W=new vm(G),wt=new nx(G,W),L=new mx(G,W,$,wt),z=new vx(G,L,W,wt,$),O=new _x(G,C,T),Et=new rx(j),et=new O_(F,U,de,C,wt,Et),Y=new sv(F,j),pt=new k_,Mt=new $_(de),$t=new ex(F,U,x,z,m,l),Ft=new K_(F,z,C),mt=new rv(G,$,C,x),yt=new ix(G,de,$),tt=new gx(G,de,$),$.programs=et.programs,F.capabilities=C,F.extensions=de,F.properties=j,F.renderLists=pt,F.shadowMap=Ft,F.state=x,F.info=$}_!==Un&&(A=new Mx(_,e.width,e.height,o,s,r));let Ht=new hu(F,G);this.xr=Ht,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let w=de.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=de.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(w){w!==void 0&&(_t=w,this.setSize(_e,ot,!1))},this.getSize=function(w){return w.set(_e,ot)},this.setSize=function(w,V,st=!0){if(Ht.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=w,ot=V,e.width=Math.floor(w*_t),e.height=Math.floor(V*_t),st===!0&&(e.style.width=w+"px",e.style.height=V+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(_e*_t,ot*_t).floor()},this.setDrawingBufferSize=function(w,V,st){_e=w,ot=V,_t=st,e.width=Math.floor(w*st),e.height=Math.floor(V*st),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(_===Un){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(dt)},this.getViewport=function(w){return w.copy(lt)},this.setViewport=function(w,V,st,J){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,V,st,J),x.viewport(dt.copy(lt).multiplyScalar(_t).round())},this.getScissor=function(w){return w.copy(St)},this.setScissor=function(w,V,st,J){w.isVector4?St.set(w.x,w.y,w.z,w.w):St.set(w,V,st,J),x.scissor(gt.copy(St).multiplyScalar(_t).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(w){x.setScissorTest(It=w)},this.setOpaqueSort=function(w){Ct=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,st=!0){let J=0;if(w){let K=!1;if(xt!==null){let Bt=xt.texture.format;K=g.has(Bt)}if(K){let Bt=xt.texture.type,qt=p.has(Bt),Ot=$t.getClearColor(),jt=$t.getClearAlpha(),te=Ot.r,le=Ot.g,ye=Ot.b;qt?(M[0]=te,M[1]=le,M[2]=ye,M[3]=jt,G.clearBufferuiv(G.COLOR,0,M)):(E[0]=te,E[1]=le,E[2]=ye,E[3]=jt,G.clearBufferiv(G.COLOR,0,E))}else J|=G.COLOR_BUFFER_BIT}V&&(J|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(J|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&G.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),k=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",tn,!1),$t.dispose(),pt.dispose(),Mt.dispose(),j.dispose(),U.dispose(),z.dispose(),wt.dispose(),mt.dispose(),et.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Yt),Ht.removeEventListener("sessionend",ue),me.stop()};function Le(w){w.preventDefault(),zh("WebGLRenderer: Context Lost."),H=!0}function pe(){zh("WebGLRenderer: Context Restored."),H=!1;let w=$.autoReset,V=Ft.enabled,st=Ft.autoUpdate,J=Ft.needsUpdate,K=Ft.type;Wt(),$.autoReset=w,Ft.enabled=V,Ft.autoUpdate=st,Ft.needsUpdate=J,Ft.type=K}function tn(w){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pn(w){let V=w.target;V.removeEventListener("dispose",pn),zi(V)}function zi(w){qs(w),j.remove(w)}function qs(w){let V=j.get(w).programs;V!==void 0&&(V.forEach(function(st){et.releaseProgram(st)}),w.isShaderMaterial&&et.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,st,J,K,Bt){V===null&&(V=Re);let qt=K.isMesh&&K.matrixWorld.determinantAffine()<0,Ot=Yn(w,V,st,J,K);x.setMaterial(J,qt);let jt=st.index,te=1;if(J.wireframe===!0){if(jt=L.getWireframeAttribute(st),jt===void 0)return;te=2}let le=st.drawRange,ye=st.attributes.position,Zt=le.start*te,Ie=(le.start+le.count)*te;Bt!==null&&(Zt=Math.max(Zt,Bt.start*te),Ie=Math.min(Ie,(Bt.start+Bt.count)*te)),jt!==null?(Zt=Math.max(Zt,0),Ie=Math.min(Ie,jt.count)):ye!=null&&(Zt=Math.max(Zt,0),Ie=Math.min(Ie,ye.count));let qe=Ie-Zt;if(qe<0||qe===1/0)return;wt.setup(K,J,Ot,st,jt);let He,Be=yt;if(jt!==null&&(He=W.get(jt),Be=tt,Be.setIndex(He)),K.isMesh)J.wireframe===!0?(x.setLineWidth(J.wireframeLinewidth*he()),Be.setMode(G.LINES)):Be.setMode(G.TRIANGLES);else if(K.isLine){let Ke=J.linewidth;Ke===void 0&&(Ke=1),x.setLineWidth(Ke*he()),K.isLineSegments?Be.setMode(G.LINES):K.isLineLoop?Be.setMode(G.LINE_LOOP):Be.setMode(G.LINE_STRIP)}else K.isPoints?Be.setMode(G.POINTS):K.isSprite&&Be.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(de.get("WEBGL_multi_draw"))Be.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Ke=K._multiDrawStarts,Xt=K._multiDrawCounts,Fe=K._multiDrawCount,Pe=jt?W.get(jt).bytesPerElement:1,An=j.get(J).currentProgram.getUniforms();for(let Zn=0;Zn<Fe;Zn++)An.setValue(G,"_gl_DrawID",Zn),Be.render(Ke[Zn]/Pe,Xt[Zn])}else if(K.isInstancedMesh)Be.renderInstances(Zt,qe,K.count);else if(st.isInstancedBufferGeometry){let Ke=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Xt=Math.min(st.instanceCount,Ke);Be.renderInstances(Zt,qe,Xt)}else Be.render(Zt,qe)};function In(w,V,st,J){k!==null&&w.isNodeMaterial&&k.setObject(J,w),Pt===!0&&Et.setState(w,st,!1),w.transparent===!0&&w.side===Ai&&w.forceSinglePass===!1?(w.side=yn,w.needsUpdate=!0,En(w,V,J),w.side=fs,w.needsUpdate=!0,En(w,V,J),w.side=Ai):En(w,V,J)}this.compile=function(w,V,st=null){st===null&&(st=w),k!==null&&k.renderStart(w,V,st),S=Mt.get(st),S.init(V),y.push(S),st.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),w!==st&&w.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),k!==null&&k.updateLights(S.state.lightsArray),Nt=this.localClippingEnabled,Pt=Et.init(this.clippingPlanes,Nt),Pt===!0&&Et.setGlobalState(this.clippingPlanes,V),k!==null&&Ft.render(S.state.shadowsArray,st,V);let J=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Bt=K.material;if(Bt)if(Array.isArray(Bt))for(let qt=0;qt<Bt.length;qt++){let Ot=Bt[qt];In(Ot,st,V,K),J.add(Ot)}else In(Bt,st,V,K),J.add(Bt)}),S=y.pop(),k!==null&&k.renderEnd(),J},this.compileAsync=function(w,V,st=null){let J=this.compile(w,V,st);return new Promise(K=>{function Bt(){if(J.forEach(function(qt){let jt=j.get(qt).currentProgram;(jt===void 0||jt.isReady())&&J.delete(qt)}),J.size===0){K(w);return}setTimeout(Bt,10)}de.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Ln=null;function Dt(w){Ln&&Ln(w)}function Yt(){me.stop()}function ue(){me.start()}let me=new Tf;me.setAnimationLoop(Dt),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(w){Ln=w,Ht.setAnimationLoop(w),w===null?me.stop():me.start()},Ht.addEventListener("sessionstart",Yt),Ht.addEventListener("sessionend",ue),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;k!==null&&k.renderStart(w,V);let st=Ht.enabled===!0&&Ht.isPresenting===!0,J=A!==null&&(xt===null||st)&&A.begin(F,xt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(V),V=Ht.getCamera()),w.isScene===!0&&w.onBeforeRender(F,w,V,xt),S=Mt.get(w,y.length),S.init(V),S.state.textureUnits=T.getTextureUnits(),y.push(S),Lt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Rt.setFromProjectionMatrix(Lt,ui,V.reversedDepth),Nt=this.localClippingEnabled,Pt=Et.init(this.clippingPlanes,Nt),b=pt.get(w,P.length),b.init(),P.push(b),Ht.enabled===!0&&Ht.isPresenting===!0){let qt=F.xr.getDepthSensingMesh();qt!==null&&Je(qt,V,-1/0,F.sortObjects)}Je(w,V,0,F.sortObjects),b.finish(),k!==null&&k.updateLights(S.state.lightsArray),F.sortObjects===!0&&b.sort(Ct,B),ne=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,ne&&$t.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Pt===!0&&Et.beginShadows();let K=S.state.shadowsArray;if(Ft.render(K,w,V),Pt===!0&&Et.endShadows(),(J&&A.hasRenderPass())===!1){let qt=b.opaque,Ot=b.transmissive;if(S.setupLights(),V.isArrayCamera){let jt=V.cameras;if(Ot.length>0)for(let te=0,le=jt.length;te<le;te++){let ye=jt[te];Mn(qt,Ot,w,ye)}ne&&$t.render(w);for(let te=0,le=jt.length;te<le;te++){let ye=jt[te];ke(b,w,ye,ye.viewport)}}else Ot.length>0&&Mn(qt,Ot,w,V),ne&&$t.render(w),ke(b,w,V)}xt!==null&&nt===0&&(T.updateMultisampleRenderTarget(xt),T.updateRenderTargetMipmap(xt)),J&&A.end(F),w.isScene===!0&&w.onAfterRender(F,w,V),wt.resetDefaultState(),rt=-1,ut=null,y.pop(),y.length>0?(S=y[y.length-1],T.setTextureUnits(S.state.textureUnits),Pt===!0&&Et.setGlobalState(F.clippingPlanes,S.state.camera)):S=null,P.pop(),P.length>0?b=P[P.length-1]:b=null,k!==null&&k.renderEnd()};function Je(w,V,st,J){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)st=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Rt)){J&&ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Lt);let qt=z.update(w),Ot=w.material;Ot.visible&&b.push(w,qt,Ot,st,ie.z,null,V)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Rt))){let qt=z.update(w),Ot=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ie.copy(w.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),ie.copy(qt.boundingSphere.center)),ie.applyMatrix4(w.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ot)){let jt=qt.groups;for(let te=0,le=jt.length;te<le;te++){let ye=jt[te],Zt=Ot[ye.materialIndex];Zt&&Zt.visible&&b.push(w,qt,Zt,st,ie.z,ye,V)}}else Ot.visible&&b.push(w,qt,Ot,st,ie.z,null,V)}}let Bt=w.children;for(let qt=0,Ot=Bt.length;qt<Ot;qt++)Je(Bt[qt],V,st,J)}function ke(w,V,st,J){let{opaque:K,transmissive:Bt,transparent:qt}=w;S.setupLightsView(st),Pt===!0&&Et.setGlobalState(F.clippingPlanes,st),J&&x.viewport(dt.copy(J)),K.length>0&&Vt(K,V,st),Bt.length>0&&Vt(Bt,V,st),qt.length>0&&Vt(qt,V,st),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Mn(w,V,st,J){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[J.id]===void 0){let Zt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[J.id]=new nn(1,1,{generateMipmaps:!0,type:Zt?un:Un,minFilter:Ci,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Se.workingColorSpace})}let Bt=S.state.transmissionRenderTarget[J.id],qt=J.viewport||dt;Bt.setSize(qt.z*F.transmissionResolutionScale,qt.w*F.transmissionResolutionScale);let Ot=F.getRenderTarget(),jt=F.getActiveCubeFace(),te=F.getActiveMipmapLevel();F.setRenderTarget(Bt),F.getClearColor(Me),xe=F.getClearAlpha(),xe<1&&F.setClearColor(16777215,.5),F.clear(),ne&&$t.render(st);let le=F.toneMapping;F.toneMapping=mi;let ye=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),S.setupLightsView(J),Pt===!0&&Et.setGlobalState(F.clippingPlanes,J),Vt(w,st,J),T.updateMultisampleRenderTarget(Bt),T.updateRenderTargetMipmap(Bt),de.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ie=0,qe=V.length;Ie<qe;Ie++){let He=V[Ie],{object:Be,geometry:Ke,material:Xt,group:Fe}=He;if(Xt.side===Ai&&Be.layers.test(J.layers)){let Pe=Xt.side;Xt.side=yn,Xt.needsUpdate=!0,at(Be,st,J,Ke,Xt,Fe),Xt.side=Pe,Xt.needsUpdate=!0,Zt=!0}}Zt===!0&&(T.updateMultisampleRenderTarget(Bt),T.updateRenderTargetMipmap(Bt))}F.setRenderTarget(Ot,jt,te),F.setClearColor(Me,xe),ye!==void 0&&(J.viewport=ye),F.toneMapping=le}function Vt(w,V,st){let J=V.isScene===!0?V.overrideMaterial:null;for(let K=0,Bt=w.length;K<Bt;K++){let qt=w[K],{object:Ot,geometry:jt,group:te}=qt,le=qt.material;le.allowOverride===!0&&J!==null&&(le=J),Ot.layers.test(st.layers)&&at(Ot,V,st,jt,le,te)}}function at(w,V,st,J,K,Bt){k!==null&&K.isNodeMaterial&&k.setObject(w,K),w.onBeforeRender(F,V,st,J,K,Bt),w.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(F,V,st,J,w,Bt),K.transparent===!0&&K.side===Ai&&K.forceSinglePass===!1?(K.side=yn,K.needsUpdate=!0,F.renderBufferDirect(st,V,J,K,w,Bt),K.side=fs,K.needsUpdate=!0,F.renderBufferDirect(st,V,J,K,w,Bt),K.side=Ai):F.renderBufferDirect(st,V,J,K,w,Bt),w.onAfterRender(F,V,st,J,K,Bt)}function En(w,V,st){V.isScene!==!0&&(V=Re);let J=j.get(w),K=S.state.lights,Bt=S.state.shadowsArray,qt=K.state.version,Ot=et.getParameters(w,K.state,Bt,V,st,S.state.lightProbeGridArray),jt=et.getProgramCacheKey(Ot),te=J.programs;J.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,J.fog=V.fog;let le=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;J.envMap=U.get(w.envMap||J.environment,le),J.envMapRotation=J.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",pn),te=new Map,J.programs=te);let ye=te.get(jt);if(ye!==void 0){if(J.currentProgram===ye&&J.lightsStateVersion===qt)return Qi(w,Ot),ye}else Ot.uniforms=et.getUniforms(w),k!==null&&w.isNodeMaterial&&k.build(w,st,Ot),w.onBeforeCompile(Ot,F),ye=et.acquireProgram(Ot,jt),te.set(jt,ye),J.uniforms=Ot.uniforms;let Zt=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Zt.clippingPlanes=Et.uniform),Qi(w,Ot),J.needsLights=kn(w),J.lightsStateVersion=qt,J.needsLights&&(Zt.ambientLightColor.value=K.state.ambient,Zt.lightProbe.value=K.state.probe,Zt.sunLights.value=K.state.sun,Zt.sunLightShadows.value=K.state.sunShadow,Zt.directionalLights.value=K.state.directional,Zt.directionalLightShadows.value=K.state.directionalShadow,Zt.spotLights.value=K.state.spot,Zt.spotLightShadows.value=K.state.spotShadow,Zt.rectAreaLights.value=K.state.rectArea,Zt.ltc_1.value=K.state.rectAreaLTC1,Zt.ltc_2.value=K.state.rectAreaLTC2,Zt.pointLights.value=K.state.point,Zt.pointLightShadows.value=K.state.pointShadow,Zt.hemisphereLights.value=K.state.hemi,Zt.sunShadowMatrix.value=K.state.sunShadowMatrix,Zt.sunShadowCascade.value=K.state.sunShadowCascade,Zt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Zt.spotLightMatrix.value=K.state.spotLightMatrix,Zt.spotLightMap.value=K.state.spotLightMap,Zt.pointShadowMatrix.value=K.state.pointShadowMatrix),J.lightProbeGrid=S.state.lightProbeGridArray.length>0,J.currentProgram=ye,J.uniformsList=null,ye}function ji(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=Dr.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Qi(w,V){let st=j.get(w);st.outputColorSpace=V.outputColorSpace,st.batching=V.batching,st.batchingColor=V.batchingColor,st.instancing=V.instancing,st.instancingColor=V.instancingColor,st.instancingMorph=V.instancingMorph,st.skinning=V.skinning,st.morphTargets=V.morphTargets,st.morphNormals=V.morphNormals,st.morphColors=V.morphColors,st.morphTargetsCount=V.morphTargetsCount,st.numClippingPlanes=V.numClippingPlanes,st.numIntersection=V.numClipIntersection,st.vertexAlphas=V.vertexAlphas,st.vertexTangents=V.vertexTangents,st.toneMapping=V.toneMapping}function Ys(w,V){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;v.setFromMatrixPosition(V.matrixWorld);for(let st=0,J=w.length;st<J;st++){let K=w[st];if(K.texture!==null&&K.boundingBox.containsPoint(v))return K}return null}function Yn(w,V,st,J,K){V.isScene!==!0&&(V=Re),T.resetTextureUnits();let Bt=V.fog,qt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?V.environment:null,Ot=xt===null?F.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Se.workingColorSpace,jt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,te=U.get(J.envMap||qt,jt),le=J.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ye=!!st.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Zt=!!st.morphAttributes.position,Ie=!!st.morphAttributes.normal,qe=!!st.morphAttributes.color,He=mi;J.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(He=F.toneMapping);let Be=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ke=Be!==void 0?Be.length:0,Xt=j.get(J),Fe=S.state.lights;if(Pt===!0&&(Nt===!0||w!==ut)){let q=w===ut&&J.id===rt;Et.setState(J,w,q)}let Pe=!1;J.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Fe.state.version||Xt.outputColorSpace!==Ot||K.isBatchedMesh&&Xt.batching===!1||!K.isBatchedMesh&&Xt.batching===!0||K.isBatchedMesh&&Xt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Xt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Xt.instancing===!1||!K.isInstancedMesh&&Xt.instancing===!0||K.isSkinnedMesh&&Xt.skinning===!1||!K.isSkinnedMesh&&Xt.skinning===!0||K.isInstancedMesh&&Xt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Xt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Xt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Xt.instancingMorph===!1&&K.morphTexture!==null||Xt.envMap!==te||J.fog===!0&&Xt.fog!==Bt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Et.numPlanes||Xt.numIntersection!==Et.numIntersection)||Xt.vertexAlphas!==le||Xt.vertexTangents!==ye||Xt.morphTargets!==Zt||Xt.morphNormals!==Ie||Xt.morphColors!==qe||Xt.toneMapping!==He||Xt.morphTargetsCount!==Ke||!!Xt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Pe=!0):(Pe=!0,Xt.__version=J.version);let An=Xt.currentProgram;Pe===!0&&(An=En(J,V,K),k&&J.isNodeMaterial&&k.onUpdateProgram(J,An,Xt));let Zn=!1,ai=!1,ki=!1,Oe=An.getUniforms(),Ge=Xt.uniforms;if(x.useProgram(An.program)&&(Zn=!0,ai=!0,ki=!0),J.id!==rt&&(rt=J.id,ai=!0),Xt.needsLights){let q=Ys(S.state.lightProbeGridArray,K);Xt.lightProbeGrid!==q&&(Xt.lightProbeGrid=q,ai=!0)}if(Zn||ut!==w){x.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Oe.setValue(G,"projectionMatrix",w.projectionMatrix),Oe.setValue(G,"viewMatrix",w.matrixWorldInverse);let ht=Oe.map.cameraPosition;ht!==void 0&&ht.setValue(G,Qt.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&Oe.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Oe.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),ut!==w&&(ut=w,ai=!0,ki=!0)}if(Xt.needsLights&&(Fe.state.sunShadowMap.length>0&&Oe.setValue(G,"sunShadowMap",Fe.state.sunShadowMap,T),Fe.state.directionalShadowMap.length>0&&Oe.setValue(G,"directionalShadowMap",Fe.state.directionalShadowMap,T),Fe.state.spotShadowMap.length>0&&Oe.setValue(G,"spotShadowMap",Fe.state.spotShadowMap,T),Fe.state.pointShadowMap.length>0&&Oe.setValue(G,"pointShadowMap",Fe.state.pointShadowMap,T)),K.isSkinnedMesh){Oe.setOptional(G,K,"bindMatrix"),Oe.setOptional(G,K,"bindMatrixInverse");let q=K.skeleton;q&&(q.boneTexture===null&&q.computeBoneTexture(),Oe.setValue(G,"boneTexture",q.boneTexture,T))}K.isBatchedMesh&&(Oe.setOptional(G,K,"batchingTexture"),Oe.setValue(G,"batchingTexture",K._matricesTexture,T),Oe.setOptional(G,K,"batchingIdTexture"),Oe.setValue(G,"batchingIdTexture",K._indirectTexture,T),Oe.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&Oe.setValue(G,"batchingColorTexture",K._colorsTexture,T));let I=st.morphAttributes;if((I.position!==void 0||I.normal!==void 0||I.color!==void 0)&&O.update(K,st,An),(ai||Xt.receiveShadow!==K.receiveShadow)&&(Xt.receiveShadow=K.receiveShadow,Oe.setValue(G,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&V.environment!==null&&(Ge.envMapIntensity.value=V.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=ov()),ai){if(Oe.setValue(G,"toneMappingExposure",F.toneMappingExposure),Xt.needsLights&&zn(Ge,ki),Bt&&J.fog===!0&&Y.refreshFogUniforms(Ge,Bt),Y.refreshMaterialUniforms(Ge,J,_t,ot,S.state.transmissionRenderTarget[w.id]),Xt.needsLights&&Xt.lightProbeGrid){let q=Xt.lightProbeGrid;Ge.probesSH.value=q.texture,Ge.probesMin.value.copy(q.boundingBox.min),Ge.probesMax.value.copy(q.boundingBox.max),Ge.probesResolution.value.copy(q.resolution)}Dr.upload(G,ji(Xt),Ge,T)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Dr.upload(G,ji(Xt),Ge,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Oe.setValue(G,"center",K.center),Oe.setValue(G,"modelViewMatrix",K.modelViewMatrix),Oe.setValue(G,"normalMatrix",K.normalMatrix),Oe.setValue(G,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){let q=J.uniformsGroups;for(let ht=0,vt=q.length;ht<vt;ht++){let bt=q[ht];mt.update(bt,An),mt.bind(bt,An)}}return An}function zn(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.sunLights.needsUpdate=V,w.sunLightShadows.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function kn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return nt},this.getRenderTarget=function(){return xt},this.setRenderTargetTextures=function(w,V,st){let J=j.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),j.get(w.texture).__webglTexture=V,j.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:st,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){let st=j.get(w);st.__webglFramebuffer=V,st.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,st=0){xt=w,Q=V,nt=st;let J=null,K=!1,Bt=!1;if(w){let Ot=j.get(w);if(Ot.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(G.FRAMEBUFFER,Ot.__webglFramebuffer),dt.copy(w.viewport),gt.copy(w.scissor),ft=w.scissorTest,x.viewport(dt),x.scissor(gt),x.setScissorTest(ft),rt=-1;return}else if(Ot.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Ot.__hasExternalTextures)T.rebindTextures(w,j.get(w.texture).__webglTexture,j.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let le=w.depthTexture;if(Ot.__boundDepthTexture!==le){if(le!==null&&j.has(le)&&(w.width!==le.image.width||w.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}let jt=w.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Bt=!0);let te=j.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(te[V])?J=te[V][st]:J=te[V],K=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?J=j.get(w).__webglMultisampledFramebuffer:Array.isArray(te)?J=te[st]:J=te,dt.copy(w.viewport),gt.copy(w.scissor),ft=w.scissorTest}else dt.copy(lt).multiplyScalar(_t).floor(),gt.copy(St).multiplyScalar(_t).floor(),ft=It;if(st!==0&&(J=X),x.bindFramebuffer(G.FRAMEBUFFER,J)&&x.drawBuffers(w,J),x.viewport(dt),x.scissor(gt),x.setScissorTest(ft),K){let Ot=j.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ot.__webglTexture,st)}else if(Bt){let Ot=V;for(let jt=0;jt<w.textures.length;jt++){let te=j.get(w.textures[jt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+jt,te.__webglTexture,st,Ot)}}else if(w!==null&&st!==0){let Ot=j.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ot.__webglTexture,st)}rt=-1};function bs(w){let V=j.get(w);return(V.__readFormat!==w.format||V.__readType!==w.type)&&(V.__readFormat=w.format,V.__readType=w.type,V.__formatReadable=C.textureFormatReadable(w.format),V.__typeReadable=C.textureTypeReadable(w.type)),V}this.readRenderTargetPixels=function(w,V,st,J,K,Bt,qt,Ot=0){if(!(w&&w.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qt!==void 0&&(jt=jt[qt]),jt){x.bindFramebuffer(G.FRAMEBUFFER,jt);try{let te=w.textures[Ot],le=te.format,ye=te.type;w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ot);let Zt=bs(te);if(Zt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Zt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-J&&st>=0&&st<=w.height-K&&G.readPixels(V,st,J,K,ct.convert(le),ct.convert(ye),Bt)}finally{let te=xt!==null?j.get(xt).__webglFramebuffer:null;x.bindFramebuffer(G.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(w,V,st,J,K,Bt,qt,Ot=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qt!==void 0&&(jt=jt[qt]),jt)if(V>=0&&V<=w.width-J&&st>=0&&st<=w.height-K){x.bindFramebuffer(G.FRAMEBUFFER,jt);let te=w.textures[Ot],le=te.format,ye=te.type;w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ot);let Zt=bs(te);if(Zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ie),G.bufferData(G.PIXEL_PACK_BUFFER,Bt.byteLength,G.STREAM_READ),G.readPixels(V,st,J,K,ct.convert(le),ct.convert(ye),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let qe=xt!==null?j.get(xt).__webglFramebuffer:null;x.bindFramebuffer(G.FRAMEBUFFER,qe);let He=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Yd(G,He,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ie),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Bt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(Ie),G.deleteSync(He),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,st=0){let J=Math.pow(2,-st),K=Math.floor(w.image.width*J),Bt=Math.floor(w.image.height*J),qt=V!==null?V.x:0,Ot=V!==null?V.y:0;T.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,qt,Ot,K,Bt),x.unbindTexture()},this.copyTextureToTexture=function(w,V,st=null,J=null,K=0,Bt=0){let qt,Ot,jt,te,le,ye,Zt,Ie,qe,He=w.isCompressedTexture?w.mipmaps[Bt]:w.image;if(st!==null)qt=st.max.x-st.min.x,Ot=st.max.y-st.min.y,jt=st.isBox3?st.max.z-st.min.z:1,te=st.min.x,le=st.min.y,ye=st.isBox3?st.min.z:0;else{let Ge=Math.pow(2,-K);qt=Math.floor(He.width*Ge),Ot=Math.floor(He.height*Ge),w.isDataArrayTexture?jt=He.depth:w.isData3DTexture?jt=Math.floor(He.depth*Ge):jt=1,te=0,le=0,ye=0}J!==null?(Zt=J.x,Ie=J.y,qe=J.z):(Zt=0,Ie=0,qe=0);let Be=ct.convert(V.format),Ke=ct.convert(V.type),Xt;V.isData3DTexture?(T.setTexture3D(V,0),Xt=G.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(T.setTexture2DArray(V,0),Xt=G.TEXTURE_2D_ARRAY):(T.setTexture2D(V,0),Xt=G.TEXTURE_2D),x.activeTexture(G.TEXTURE0),x.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,V.flipY),x.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),x.pixelStorei(G.UNPACK_ALIGNMENT,V.unpackAlignment);let Fe=x.getParameter(G.UNPACK_ROW_LENGTH),Pe=x.getParameter(G.UNPACK_IMAGE_HEIGHT),An=x.getParameter(G.UNPACK_SKIP_PIXELS),Zn=x.getParameter(G.UNPACK_SKIP_ROWS),ai=x.getParameter(G.UNPACK_SKIP_IMAGES);x.pixelStorei(G.UNPACK_ROW_LENGTH,He.width),x.pixelStorei(G.UNPACK_IMAGE_HEIGHT,He.height),x.pixelStorei(G.UNPACK_SKIP_PIXELS,te),x.pixelStorei(G.UNPACK_SKIP_ROWS,le),x.pixelStorei(G.UNPACK_SKIP_IMAGES,ye);let ki=w.isDataArrayTexture||w.isData3DTexture,Oe=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let Ge=j.get(w),I=j.get(V),q=j.get(Ge.__renderTarget),ht=j.get(I.__renderTarget);x.bindFramebuffer(G.READ_FRAMEBUFFER,q.__webglFramebuffer),x.bindFramebuffer(G.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let vt=0;vt<jt;vt++)ki&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,j.get(w).__webglTexture,K,ye+vt),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,j.get(V).__webglTexture,Bt,qe+vt)),G.blitFramebuffer(te,le,qt,Ot,Zt,Ie,qt,Ot,G.DEPTH_BUFFER_BIT,G.NEAREST);x.bindFramebuffer(G.READ_FRAMEBUFFER,null),x.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||j.has(w)){let Ge=j.get(w),I=j.get(V);x.bindFramebuffer(G.READ_FRAMEBUFFER,D),x.bindFramebuffer(G.DRAW_FRAMEBUFFER,Z);for(let q=0;q<jt;q++)ki?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ge.__webglTexture,K,ye+q):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ge.__webglTexture,K),Oe?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,I.__webglTexture,Bt,qe+q):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,I.__webglTexture,Bt),K!==0?G.blitFramebuffer(te,le,qt,Ot,Zt,Ie,qt,Ot,G.COLOR_BUFFER_BIT,G.NEAREST):Oe?G.copyTexSubImage3D(Xt,Bt,Zt,Ie,qe+q,te,le,qt,Ot):G.copyTexSubImage2D(Xt,Bt,Zt,Ie,te,le,qt,Ot);x.bindFramebuffer(G.READ_FRAMEBUFFER,null),x.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Oe?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Xt,Bt,Zt,Ie,qe,qt,Ot,jt,Be,Ke,He.data):V.isCompressedArrayTexture?G.compressedTexSubImage3D(Xt,Bt,Zt,Ie,qe,qt,Ot,jt,Be,He.data):G.texSubImage3D(Xt,Bt,Zt,Ie,qe,qt,Ot,jt,Be,Ke,He):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Bt,Zt,Ie,qt,Ot,Be,Ke,He.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Bt,Zt,Ie,He.width,He.height,Be,He.data):G.texSubImage2D(G.TEXTURE_2D,Bt,Zt,Ie,qt,Ot,Be,Ke,He);x.pixelStorei(G.UNPACK_ROW_LENGTH,Fe),x.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pe),x.pixelStorei(G.UNPACK_SKIP_PIXELS,An),x.pixelStorei(G.UNPACK_SKIP_ROWS,Zn),x.pixelStorei(G.UNPACK_SKIP_IMAGES,ai),Bt===0&&V.generateMipmaps&&G.generateMipmap(Xt),x.unbindTexture()},this.initRenderTarget=function(w){j.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),x.unbindTexture()},this.resetState=function(){Q=0,nt=0,xt=null,x.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}};var Fr=class extends qi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Rn;t.deleteAttribute("uv");let e=new wn({side:yn}),n=new wn,s=new Ia(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new we(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Is(t,n,6),o=new on;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new we(t,Ur(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new we(t,Ur(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new we(t,Ur(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new we(t,Ur(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new we(t,Ur(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new we(t,Ur(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ur(i){return new Aa({color:0,emissive:16777215,emissiveIntensity:i})}function Mc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ue,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Df(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][u]);let m=Df(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Df(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ae(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){let _=h.getComponent(u,m);o.setComponent(u+f,m,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var qn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},lv=new ds(-1,1,1,-1,0,1),uu=class extends Ue{constructor(){super(),this.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ge([0,2,0,0,2,0],2))}},cv=new uu,_s=class{constructor(t){this._mesh=new we(cv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,lv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Sc=class extends qn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ji.clone(t.uniforms),this.material=new ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new _s(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ka=class extends qn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},bc=class extends qn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var wc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Tt);this._width=n.width,this._height=n.height,e=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Sc(Or),this.copyPass.material.blending=Qn,this.timer=new La}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ka!==void 0&&(a instanceof Ka?n=!0:a instanceof bc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Tc=class extends qn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ee}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Nf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ee(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Br=class i extends qn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Tt(t.x,t.y):new Tt(256,256),this.clearColor=new ee(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(r,a,{type:un,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new nn(r,a,{type:un,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new nn(r,a,{type:un,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Nf;this.highPassUniforms=Ji.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ze({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Tt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ji.clone(Or.uniforms),this.blendMaterial=new ze({uniforms:this.copyUniforms,vertexShader:Or.vertexShader,fragmentShader:Or.fragmentShader,premultipliedAlpha:!0,blending:$n,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ee,this._oldClearAlpha=1,this._basic=new pi,this._fsQuad=new _s(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Tt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new ze({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Tt(.5,.5)},direction:{value:new Tt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Br.BlurDirectionX=new Tt(1,0);Br.BlurDirectionY=new Tt(0,1);var ja={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ec=class extends qn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ji.clone(ja.uniforms),this.material=new wr({name:ja.name,uniforms:this.uniforms,vertexShader:ja.vertexShader,fragmentShader:ja.fragmentShader}),this._fsQuad=new _s(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Se.getTransfer(this._outputColorSpace)===De&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Da?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Na?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ua?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Hs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Oa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Fa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var sn=(i,t,e)=>Math.max(t,Math.min(e,i)),Qa=(i,t,e)=>{let n=sn((e-i)/(t-i),0,1);return n*n*(3-2*n)},Uf=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,xi=(i,t,e)=>i+(t-i)*e,Ii=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},Ff=i=>i.t==="c"?i.mc?1.8+1.25*Math.log10(1+i.mc/1e8):1.8:i.t==="s"?1.2:i.v?1+.8*Math.log10(1+i.v/1e8):1;function hv(i){return i.t==="c"?i.mc?"tower":"block":i.t==="s"?"sub":i.t==="p"?"pawn":i.c==="fund"||i.c==="pen"||i.c==="gov"?"inv":"tile"}var Of="float hash21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }";function Bf(i,t,e={}){let{palette:n,accent:s="#3cf0b4",reduced:r=!1,fixedQuality:a=!1}=e,o=t.nodes.length,l=t.mapa,c=Math.min(innerWidth,innerHeight)<700,h=new ee(s),f=100/l.W,u=100,d=l.H*f,m=I=>I*f-u/2,_=I=>I*f-d/2,g=.02,p={},M=(I,q=new ee)=>(q.set(I).getHSL(p),q.setHSL(p.h,Math.min(1,p.s*1.55+.12),p.l*.86)),E=new _c({canvas:i,antialias:!0,powerPreference:"high-performance"}),v=Math.min(devicePixelRatio||1,c?2:1.75);E.setPixelRatio(v),E.toneMapping=Hs,E.toneMappingExposure=1,E.outputColorSpace=gn,E.shadowMap.enabled=!0,E.shadowMap.type=zs,E.shadowMap.autoUpdate=!1;let b=new ee(329485),S=new qi;S.background=b,S.fog=new Rs(461590,160,420);let P=new hn(32,1,.3,1400),y=new xs(E);S.environment=y.fromScene(new Fr,.04).texture,S.environmentIntensity=.22;let A=new Yi(10469631,1.5);A.position.set(-60,110,40),S.add(A);let F=new Yi(16755058,.7);F.position.set(90,30,-70),S.add(F),S.add(new Os(3360107,395018,.9));let H=null,k=null;try{let I=new nn(4,4,{type:un,samples:c?2:4});H=new wc(E,I),H.setPixelRatio(v),H.addPass(new Tc(S,P)),k=new Br(new Tt(256,256),.5,.55,.8),H.addPass(k),H.addPass(new Ec)}catch{H=null}let X=new Array(o),D=new Float32Array(o),Z=new Float32Array(o),Q=new Float32Array(o),nt=new Float32Array(o),xt=new Float32Array(o),rt=new Float32Array(o),ut=new Float32Array(o),dt=Uint8Array.from(l.sky||new Array(o).fill(0)),gt=new Uint8Array(o),ft=new Uint8Array(o),Me=12.5,xe=3.1;for(let I=0;I<o;I++){let q=t.nodes[I];X[I]=hv(q),ft[I]=X[I]==="inv"?1:0,D[I]=m(l.x[I]),Q[I]=_(l.y[I]);let ht=l.lot&&l.lot[I]||0;if(gt[I]=ht>0?1:0,gt[I]){let vt=Ff(q)*1.24*f,bt=Ii(I);rt[I]=vt*(.86+.3*bt),ut[I]=vt*(1.14-.3*bt),nt[I]=vt*.6,X[I]==="tower"?xt[I]=.9+10.2*Math.pow(sn(Math.log10(q.mc/2e8)/Math.log10(4e3),0,1),1.5):xt[I]=vt*(X[I]==="block"?.42+.3*Ii(I+7):.3),Z[I]=g}else dt[I]?(nt[I]=Ff(q)*.5*f+.12,xt[I]=nt[I]*2.3,Z[I]=Me+(dt[I]-1)*xe+(Ii(I)-.5)*1.4):(nt[I]=(.5+.1*Math.min(4,Math.log10(1+(q.v||0)/1e8)))*f,xt[I]=nt[I]*(X[I]==="tile"?1.3:2.1),Z[I]=g)}let _e=I=>Z[I]+xt[I],ot=l.plates.map(I=>({...I})),Ct={uTex:{value:(()=>{let I=c?2048:4096,q=Math.round(I*l.H/l.W),ht=I/l.W,vt=document.createElement("canvas");vt.width=I,vt.height=q;let bt=vt.getContext("2d");bt.fillStyle="#000",bt.fillRect(0,0,I,q);let Kt=(Gt,re)=>{let Te=new ee(Gt);return`rgba(${Math.round(Te.r*255)},${Math.round(Te.g*255)},${Math.round(Te.b*255)},${re})`},kt=(Gt,re,Te,Ce,je)=>{bt.beginPath(),bt.roundRect(Gt,re,Te-Gt,Ce-re,je)};for(let Gt of l.plates){let re=M(n.sector(Gt.c)),Te=2.2*ht;kt(Gt.x0*ht,Gt.y0*ht,Gt.x1*ht,Gt.y1*ht,Te);let Ce=bt.createLinearGradient(0,Gt.y0*ht,0,Gt.y1*ht);Ce.addColorStop(0,Kt(re,.17)),Ce.addColorStop(1,Kt(re,.07)),bt.fillStyle=Ce,bt.fill()}bt.globalCompositeOperation="lighter";for(let Gt=0;Gt<o;Gt++){if(!gt[Gt])continue;let re=t.nodes[Gt],Te=l.lot[Gt]*ht,Ce=l.x[Gt]*ht,je=l.y[Gt]*ht,We=M(re.t==="c"?n.sector(re.c):n.kind(re)),Xe=re.mc?.16+.34*sn(Math.log10(re.mc/2e8)/3.6,0,1):.1,Ee=Te*(re.mc?2.1:1.5),en=bt.createRadialGradient(Ce,je,0,Ce,je,Ee);en.addColorStop(0,Kt(We,Xe)),en.addColorStop(.45,Kt(We,Xe*.4)),en.addColorStop(1,Kt(We,0)),bt.fillStyle=en,bt.beginPath(),bt.arc(Ce,je,Ee,0,6.2832),bt.fill()}bt.globalCompositeOperation="source-over";for(let Gt=0;Gt<o;Gt++){if(!gt[Gt])continue;let re=l.lot[Gt]*ht*.93,Te=l.x[Gt]*ht,Ce=l.y[Gt]*ht;bt.beginPath(),bt.arc(Te,Ce,re,0,6.2832),bt.fillStyle="rgba(255,255,255,0.028)",bt.fill(),bt.lineWidth=Math.max(1,ht*.09),bt.strokeStyle="rgba(255,255,255,0.11)",bt.stroke()}for(let Gt of l.plates)kt(Gt.x0*ht,Gt.y0*ht,Gt.x1*ht,Gt.y1*ht,2.2*ht),bt.lineWidth=Math.max(1.5,ht*.22),bt.strokeStyle=Kt(M(n.sector(Gt.c)),.8),bt.stroke();let Jt=new os(vt);return Jt.colorSpace=gn,Jt.anisotropy=E.capabilities.getMaxAnisotropy(),Jt.generateMipmaps=!0,Jt.minFilter=Ci,Jt})()},uTime:{value:0},uSize:{value:new Tt(u,d)},uFocus:{value:new Ve(0,0,0,0)},uFocusK:{value:0},uDim:{value:0},uFogColor:{value:S.fog.color},uFogNear:{value:100},uFogFar:{value:400},uRise:{value:1}},B=new we(new jn(900,900),new ze({uniforms:Ct,vertexShader:"varying vec3 vWp; varying float vDepth; void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vWp = wp.xyz; vec4 mv = viewMatrix * wp; vDepth = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform sampler2D uTex; uniform float uTime; uniform vec2 uSize; uniform vec4 uFocus; uniform float uFocusK; uniform float uDim; uniform float uRise;
      uniform vec3 uFogColor; uniform float uFogNear; uniform float uFogFar; varying vec3 vWp; varying float vDepth;
      ${Of}
      // luzes mi\xFAdas da cidade: uma por c\xE9lula, mais onde o bairro \xE9 mais denso
      float lights(vec2 p, float cell, float dens, float seed){
        vec2 q = p / cell; vec2 id = floor(q); vec2 f = fract(q) - 0.5;
        float h = hash21(id + seed);
        vec2 jit = (vec2(hash21(id + seed + 7.3), hash21(id + seed + 2.9)) - 0.5) * 0.5;
        float tw = 0.75 + 0.25 * sin(uTime * (0.6 + 2.0 * hash21(id + 5.1)) + h * 40.0);
        float on = step(1.0 - dens, h);
        float px = fwidth(q.x) + fwidth(q.y);
        float dot_ = smoothstep(0.2, 0.04, length(f - jit));
        return mix(on * dot_ * tw, dens * 0.07, smoothstep(0.5, 1.4, px));
      }
      void main(){
        vec2 uv = vec2(vWp.x / uSize.x + 0.5, 0.5 - vWp.z / uSize.y);
        float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
        vec3 t = texture2D(uTex, uv).rgb * inside;
        float lum = dot(t, vec3(0.3, 0.59, 0.11));
        vec3 col = vec3(0.012, 0.016, 0.026);
        // malha de ruas
        vec2 g1 = abs(fract(vWp.xz / 1.6) - 0.5); float st = 1.0 - smoothstep(0.0, 0.02 + fwidth(vWp.x) * 0.9, min(g1.x, g1.y));
        col += t * (0.6 + 0.12 * st) * uRise;
        col += vec3(0.02, 0.026, 0.04) * st * inside * 0.25;
        vec2 g2 = abs(fract(vWp.xz / 0.4) - 0.5); float st2 = (1.0 - smoothstep(0.0, 0.03 + fwidth(vWp.x) * 3.0, min(g2.x, g2.y))) * (1.0 - smoothstep(0.02, 0.07, fwidth(vWp.x)));
        col += (vec3(0.006, 0.008, 0.013) + t * 0.035) * st2 * inside;
        float dens = clamp(lum * 3.2, 0.0, 0.85);
        vec3 warm = mix(vec3(1.0, 0.72, 0.42), normalize(t + 0.001) * 1.3, 0.35);
        col += warm * (lights(vWp.xz, 0.21, dens, 0.0) * 0.9 + lights(vWp.xz + 3.7, 0.55, dens * 0.6, 9.0) * 0.8) * uRise;
        // setor em foco: o resto apaga
        float inF = step(uFocus.x, vWp.x) * step(vWp.x, uFocus.z) * step(uFocus.y, vWp.z) * step(vWp.z, uFocus.w);
        col *= 1.0 - 0.8 * uFocusK * (1.0 - inF);
        col *= 1.0 - 0.62 * uDim;
        float fog = smoothstep(uFogNear, uFogFar, vDepth);
        col = mix(col, uFogColor, fog);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`}));B.rotation.x=-Math.PI/2,B.renderOrder=-2,S.add(B);let lt=l.plates.map((I,q)=>({...I,j:q,col:new ee(n.sector(I.c)),x0:m(I.x0),x1:m(I.x1),z0:_(I.y0),z1:_(I.y1)})),St={uRise:{value:1.4},uDim:{value:0},uTime:{value:0},uAcc:{value:h},uFocus:{value:-1}},It=new Array(o).fill(null),Rt=[],Pt="attribute float aHL; attribute float aVis; attribute float aDelay; attribute float aPlate; attribute float aSeed; attribute vec3 aSize; attribute float aLit; uniform float uRise; uniform float uTime; uniform float uFocus; varying vec3 vOp; varying vec3 vOn; varying vec3 vSize; varying float vHL; varying float vOther; varying float vSeed; varying float vLit;",Nt=`varying vec3 vOp; varying vec3 vOn; varying vec3 vSize; varying float vHL; varying float vOther; varying float vSeed; varying float vLit; uniform float uDim; uniform float uTime; uniform vec3 uAcc;
${Of}`;function Lt(I,q,ht,vt,bt,Kt){let kt=Math.max(1,vt.length),Jt=new Float32Array(kt),Gt=new Float32Array(kt).fill(1),re=new Float32Array(kt),Te=new Float32Array(kt),Ce=new Float32Array(kt),je=new Float32Array(kt*3),We=new Float32Array(kt),Xe=(Dn,Jn,ho=1)=>q.setAttribute(Dn,new as(Jn,ho));Xe("aHL",Jt),Xe("aVis",Gt),Xe("aDelay",re),Xe("aPlate",Te),Xe("aSeed",Ce),Xe("aSize",je,3),Xe("aLit",We),ht.onBeforeCompile=Dn=>{Object.assign(Dn.uniforms,St),Dn.vertexShader=Dn.vertexShader.replace("#include <common>",`#include <common>
${Pt}`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float rise = smoothstep(aDelay, aDelay + 0.35, uRise);
          vOp = position; vOn = normal; vSize = aSize; vHL = aHL; vSeed = aSeed; vLit = aLit;
          vOther = uFocus >= 0.0 && abs(uFocus - aPlate) > 0.5 ? 1.0 : 0.0;
          ${Kt==="bld"?"transformed.y *= max(0.001, rise * aVis); transformed.xz *= aVis;":"transformed *= max(0.001, rise * aVis); transformed.y += aLit * 0.22 * sin(uTime * 0.9 + aSeed * 40.0) / max(0.05, aSize.x);"}`),Dn.fragmentShader=Dn.fragmentShader.replace("#include <common>",`#include <common>
${Nt}`).replace("#include <color_fragment>",`#include <color_fragment>
          float top = step(0.5, vOn.y);
          float isHL = step(0.01, vHL);
          float dimK = max(uDim * (1.0 - isHL), 0.8 * vOther * (1.0 - isHL));
          vec3 sec = diffuseColor.rgb;
          vec3 glow = vec3(0.0);
          ${Kt==="bld"?`
          // fachada de vidro escuro com janelas acesas; a coroa e o teto levam a cor do setor
          float side = abs(vOn.x) > 0.5 ? 1.0 : 0.0;
          float fw = mix(vSize.x, vSize.z, side);
          float along = mix(vOp.x, vOp.z, side) + 0.5;
          float hgt = vOp.y * vSize.y;
          float nx = max(2.0, floor(fw / 0.085)), ny = max(2.0, floor(vSize.y / 0.11));
          vec2 q = vec2(along * nx, vOp.y * ny);
          vec2 id = floor(q), f = fract(q);
          float face = vOn.x * 1.0 + vOn.z * 2.0;
          float h = hash21(id + vSeed * 71.0 + face * 13.0);
          float tw = hash21(id * 1.7 + vSeed * 31.0 + face);
          float flick = step(0.93, tw) * floor(uTime * 0.35 + tw * 9.0) * 0.37;
          float on = step(1.0 - vLit, fract(h + flick));
          float mask = smoothstep(0.1, 0.2, f.x) * smoothstep(0.9, 0.8, f.x) * smoothstep(0.2, 0.32, f.y) * smoothstep(0.86, 0.74, f.y);
          float px = max(fwidth(q.x), fwidth(q.y));
          float win = mix(on * mask, vLit * 0.2, smoothstep(0.4, 1.0, px)) * (1.0 - top);
          vec3 winCol = mix(vec3(1.0, 0.66, 0.32), vec3(0.62, 0.8, 1.0), step(0.78, hash21(id + vSeed * 3.1)));
          winCol = mix(winCol, sec, 0.22 + 0.4 * smoothstep(0.4, 1.0, px));
          float crownH = min(0.14, vSize.y * 0.12);
          float crown = smoothstep(vSize.y - crownH - 0.012, vSize.y - crownH, hgt) * (1.0 - top);
          float edge = max(abs(vOp.x), abs(vOp.z)) * 2.0;
          float roofRim = top * smoothstep(0.86, 0.95, edge);
          float foot = (1.0 - top) * (1.0 - smoothstep(0.0, 0.5, hgt));
          diffuseColor.rgb = mix(vec3(0.03, 0.04, 0.06), sec, 0.07 + 0.06 * top);
          float live = 1.0 - 0.93 * dimK;
          // luz de obst\xE1culo no topo dos mais altos, piscando
          float beacon = top * smoothstep(0.1, 0.05, length(vOp.xz)) * step(3.2, vSize.y) * (0.35 + 0.65 * step(0.0, sin(uTime * 2.2 + vSeed * 40.0)));
          glow = (winCol * win * 0.78 + sec * (crown * 1.25 + roofRim * 0.95 + top * 0.04 + foot * 0.1) + vec3(1.0, 0.12, 0.08) * beacon * 2.2) * live;
          glow += uAcc * vHL * vHL * (0.1 + 1.3 * crown + 0.9 * roofRim + 0.25 * top + 0.25 * foot) * (0.9 + 0.1 * sin(uTime * 3.0));
          glow += sec * step(0.01, vHL) * (1.0 - vHL) * (0.5 * crown + 0.4 * roofRim);`:`
          // pe\xE7as pequenas: luzes da cor do tipo
          float live = 1.0 - 0.92 * dimK;
          diffuseColor.rgb = sec * (0.35 + 0.3 * top);
          glow = sec * (0.42 + 0.38 * vLit) * live * (0.75 + 0.5 * smoothstep(-0.2, 1.0, vOn.y));
          glow += uAcc * vHL * vHL * 0.9 + sec * step(0.01, vHL) * 0.35;`}
          diffuseColor.rgb *= 1.0 - 0.85 * dimK;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += glow;`)};let Ee=new Is(q,ht,kt),en=new Ne,Zs=new ee,vi=new N;return vt.forEach((Dn,Jn)=>{It[Dn]=[Ee,Jn],bt(Dn,en,Zs,vi),Ee.setMatrixAt(Jn,en),Ee.setColorAt(Jn,Zs),Te[Jn]=l.plate[Dn],Ce[Jn]=Ii(Dn*3+1),je.set([vi.x,vi.y,vi.z],Jn*3),We[Jn]=vi.w||0}),Ee.count=vt.length,Ee.instanceMatrix.needsUpdate=!0,Ee.instanceColor&&(Ee.instanceColor.needsUpdate=!0),Ee.userData={name:I,idx:vt,hl:Jt,vis:Gt,delay:re,geo:q},Ee.frustumCulled=!1,S.add(Ee),Rt.push(Ee),Ee}let Qt=new N,ie=new Gn,Re=new N,ne=()=>{let I=new Rn(1,1,1);return I.translate(0,.5,0),I},he=()=>{let I=new Rn(1,.66,1);I.translate(0,.33,0);let q=new Rn(.72,.34,.72);return q.translate(0,.83,0),Mc([I,q])},G=I=>X[I]==="tower"?.38+.3*Ii(I+3):X[I]==="block"?.2+.15*Ii(I+3):.16,oe=(I,q,ht,vt)=>{q.compose(Qt.set(D[I],g,Q[I]),ie.identity(),Re.set(rt[I],xt[I],ut[I]));let bt=t.nodes[I];M(bt.t==="c"?n.sector(bt.c):n.kind(bt),ht),vt.set(rt[I],xt[I],ut[I]),vt.w=G(I)},de=()=>new wn({color:16777215,roughness:.36,metalness:.4,envMapIntensity:.55}),C=[],x=[];for(let I=0;I<o;I++)gt[I]&&(X[I]==="tower"&&xt[I]>3.2?C:x).push(I);Lt("tall",he(),de(),C,oe,"bld"),Lt("low",ne(),de(),x,oe,"bld");let $={pawn:[],tile:[],inv:[]};for(let I=0;I<o;I++)gt[I]||$[X[I]==="pawn"?"pawn":X[I]==="inv"?"inv":"tile"].push(I);let j=(()=>{let I=new Ls(.42,.5,.2,9,1,!1);I.translate(0,.1,0);let q=new Ls(.16,.32,.55,9,1,!0);q.translate(0,.47,0);let ht=new Ta(.24,9,6);ht.translate(0,.86,0);let vt=Mc([I,q,ht]);return vt.scale(1,1.9,1),vt})(),T=(()=>{let I=new Rn(1.3,1.3,1.3);return I.translate(0,.65,0),I})(),U=(()=>{let I=new ba(1,0);return I.scale(.82,1.15,.82),I.translate(0,1.15,0),I})(),W=(I,q,ht,vt)=>{let bt=nt[I];q.compose(Qt.set(D[I],Z[I],Q[I]),ie.identity(),Re.set(bt,bt,bt)),ht.set(n.kind(t.nodes[I])),vt.set(bt,bt,bt),vt.w=dt[I]?1:0},L=I=>new wn({color:16777215,roughness:.35,metalness:.2,flatShading:!!I});Lt("pawn",j,L(),$.pawn,W,"small"),Lt("tile",T,L(),$.tile,W,"small"),Lt("inv",U,L(!0),$.inv,W,"small");let z=[];for(let I=0;I<o;I++)gt[I]||z.push(I);let et={uDim:{value:0},uPx:{value:1},uRise:{value:1},uTime:{value:0},uFocus:{value:-1}},Y=(()=>{let I=z.length,q=new Float32Array(I*3),ht=new Float32Array(I*3),vt=new Float32Array(I),bt=new ee,Kt=new Ue;z.forEach((Gt,re)=>{q.set([D[Gt],Z[Gt]+xt[Gt]*.55,Q[Gt]],re*3),bt.set(n.kind(t.nodes[Gt])),ht.set([bt.r,bt.g,bt.b],re*3),vt[re]=dt[Gt]?nt[Gt]*5.5:nt[Gt]*3.4}),Kt.setAttribute("position",new Ae(q,3)),Kt.setAttribute("aCol",new Ae(ht,3)),Kt.setAttribute("aSize",new Ae(vt,1)),Kt.setAttribute("aHL",new Ae(new Float32Array(I),1)),Kt.setAttribute("aVis",new Ae(new Float32Array(I).fill(1),1)),Kt.setAttribute("aSky",new Ae(Float32Array.from(z,Gt=>dt[Gt]?1:0),1)),Kt.setAttribute("aPlate",new Ae(Float32Array.from(z,Gt=>l.plate[Gt]),1));let kt=new ze({uniforms:et,transparent:!0,depthWrite:!1,blending:$n,vertexShader:`attribute vec3 aCol; attribute float aSize; attribute float aHL; attribute float aVis; attribute float aSky; attribute float aPlate; uniform float uPx; uniform float uDim; uniform float uRise; uniform float uTime; uniform float uFocus; varying vec3 vCol; varying float vA;
        void main(){ vec3 p = position; p.y += aSky * 0.22 * sin(uTime * 0.9 + p.x * 3.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
          float px = aSize * uPx / -mv.z;
          gl_PointSize = clamp(px, aSky > 0.5 ? 5.0 : 1.6, 90.0) * aVis;
          float isHL = step(0.01, aHL);
          float other = uFocus >= 0.0 && abs(uFocus - aPlate) > 0.5 ? 1.0 : 0.0;
          float dimK = max(uDim, 0.8 * other) * (1.0 - isHL);
          // de perto a pe\xE7a aparece e o halo recua
          float near = smoothstep(26.0, 7.0, px);
          vA = (aSky > 0.5 ? 0.46 : mix(0.2, 0.75, near)) * (1.0 - 0.9 * dimK) * (1.0 + 0.9 * isHL) * aVis * smoothstep(0.7, 1.3, uRise);
          vCol = aCol; }`,fragmentShader:"varying vec3 vCol; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = pow(max(0.0, 1.0 - d), 2.2); gl_FragColor = vec4(vCol * a * vA, 1.0); }"}),Jt=new vr(Kt,kt);return Jt.frustumCulled=!1,Jt.renderOrder=2,S.add(Jt),Jt})(),pt=new Int32Array(o).fill(-1);z.forEach((I,q)=>{pt[I]=q});let Mt={uTime:{value:0},uPx:{value:1},uDim:{value:0}};if(!r){let I=c?260:520,q=new Float32Array(I*3),ht=new Float32Array(I);for(let Kt=0;Kt<I;Kt++)q.set([(Ii(Kt)-.5)*u*1.15,Ii(Kt+.5)*24,(Ii(Kt*1.7+3)-.5)*d*1.2],Kt*3),ht[Kt]=Ii(Kt*2.3+9);let vt=new Ue;vt.setAttribute("position",new Ae(q,3)),vt.setAttribute("aS",new Ae(ht,1));let bt=new vr(vt,new ze({uniforms:Mt,transparent:!0,depthWrite:!1,blending:$n,vertexShader:"attribute float aS; uniform float uTime; uniform float uPx; varying float vA; void main(){ vec3 p = position; p.y = mod(p.y + uTime * (0.12 + 0.25 * aS), 24.0); p.x += sin(uTime * 0.2 + aS * 30.0) * 0.6; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((0.1 + 0.16 * aS) * uPx / -mv.z, 1.0, 5.0); vA = (0.1 + 0.25 * aS) * smoothstep(0.0, 2.0, p.y) * smoothstep(24.0, 18.0, p.y); }",fragmentShader:"uniform float uDim; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(0.75, 0.86, 1.0) * max(0.0, 1.0 - d) * vA * (1.0 - 0.6 * uDim), 1.0); }"}));bt.frustumCulled=!1,S.add(bt)}let Et=26,Ft=new N,$t=new N,O=new N;function yt(I,q){let ht=dt[I]?Z[I]+xt[I]*.15:_e(I)*.9,vt=_e(q);Ft.set(D[I],ht,Q[I]),$t.set(D[q],vt,Q[q]);let bt=Math.hypot(D[q]-D[I],Q[q]-Q[I]);return dt[I]?O.set(xi(D[q],D[I],.12),xi(vt,ht,.82),xi(Q[q],Q[I],.12)):gt[I]?O.set((D[I]+D[q])/2,Math.max(ht,vt)+.7+bt*.3,(Q[I]+Q[q])/2):O.set(xi(D[I],D[q],.6),Math.max(ht,vt)+.12+bt*.22,xi(Q[I],Q[q],.6)),new Ds(Ft.clone(),O.clone(),$t.clone())}let tt=(I,q)=>!dt[I]&&!gt[I]&&(l.anchor[I]===q||!gt[q]&&!dt[q]&&l.anchor[I]===l.anchor[q]),ct={uDim:{value:0},uAlpha:{value:1},uAcc:{value:h},uFar:{value:1}},wt=new ze({uniforms:ct,transparent:!0,depthWrite:!1,blending:$n,vertexShader:"attribute float aT; attribute vec2 aW; varying float vT; varying vec2 vW; void main(){ vT = aT; vW = aW; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uAlpha; uniform float uDim; uniform vec3 uAcc; uniform float uFar; varying float vT; varying vec2 vW;
      void main(){ float a = smoothstep(0.0, 0.08, vT) * (0.35 + 0.65 * vT); vec3 c = mix(vec3(0.55, 0.68, 1.0), mix(vec3(0.6, 0.85, 1.0), uAcc, 0.55), vW.y);
        gl_FragColor = vec4(c * a * vW.x * uAlpha * (1.0 - 0.94 * uDim) * mix(uFar, 1.0, 0.35 * vW.y), 1.0); }`}),mt=null;function Wt(I){let q=[],ht=[],vt=[],bt=(kt,Jt,Gt,re,Te,Ce,je,We,Xe,Ee)=>{q.push(kt,Jt,Gt,re,Te,Ce),ht.push(je,We),vt.push(Xe,Ee,Xe,Ee)};for(let[kt,Jt,,Gt]of t.edges||[]){if(I&&(!I[kt]||!I[Jt]))continue;let re=Gt&1;if(tt(kt,Jt)){let Ee=D[Jt]-D[kt],en=Q[Jt]-Q[kt],Zs=Math.hypot(Ee,en)||1,vi=gt[Jt]?Math.min(.92,Math.max(rt[Jt],ut[Jt])*.5/Zs):0;bt(D[kt],g+.02,Q[kt],D[Jt]-Ee*vi,g+.02,Q[Jt]-en*vi,.2,1,re?.3:.11,re);continue}let Te=yt(kt,Jt),Ce=re?.15:.05,je=0,We=0,Xe=0;for(let Ee=0;Ee<=Et;Ee++){let en=Te.getPoint(Ee/Et,Ft);Ee&&bt(je,We,Xe,en.x,en.y,en.z,(Ee-1)/Et,Ee/Et,Ce,re),je=en.x,We=en.y,Xe=en.z}}let Kt=new Ue;Kt.setAttribute("position",new Ae(new Float32Array(q),3)),Kt.setAttribute("aT",new Ae(new Float32Array(ht),1)),Kt.setAttribute("aW",new Ae(new Float32Array(vt),2)),mt?(mt.geometry.dispose(),mt.geometry=Kt):(mt=new ha(Kt,wt),mt.frustumCulled=!1,mt.renderOrder=1,S.add(mt))}Wt(null);let Ht={uTime:{value:0},uAcc:{value:h},uGrow:{value:1},uPx:{value:1},uMinPx:{value:v}},Le=new ze({uniforms:Ht,transparent:!0,depthWrite:!1,blending:$n,vertexShader:`attribute float aPhase; attribute float aCtl; attribute float aLen; attribute float aHead; attribute float aRad; attribute vec3 aCenter; uniform float uPx; uniform float uMinPx;
      varying vec2 vUv; varying float vPhase; varying float vCtl; varying float vLen; varying float vHead; varying vec3 vN; varying vec3 vV;
      void main(){ vUv = uv; vPhase = aPhase; vCtl = aCtl; vLen = aLen; vHead = aHead; vN = normalize(normalMatrix * normal);
        vec3 p = position;
        float depth = -(modelViewMatrix * vec4(aHead > 0.5 ? aCenter : position, 1.0)).z;
        float want = uMinPx * (0.9 + 1.3 * aRad / 0.11) * depth / uPx;
        if (aHead > 0.5) p = aCenter + (position - aCenter) * max(1.0, want / aRad);
        else p += normal * max(0.0, want - aRad);
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uTime; uniform vec3 uAcc; uniform float uGrow; varying vec2 vUv; varying float vPhase; varying float vCtl; varying float vLen; varying float vHead; varying vec3 vN; varying vec3 vV;
      void main(){
        vec3 base = mix(vec3(0.36, 0.55, 1.0), uAcc, vCtl);
        if (vHead > 0.5) { if (uGrow < 0.97) discard; gl_FragColor = vec4(base * 1.5 + 0.2, 1.0); return; }
        float t = vUv.x;
        if (t > uGrow) discard;
        float ends = smoothstep(0.0, 0.02, t);
        float core = pow(abs(dot(vN, vV)), 1.2);
        // cometas a cada 2,4 unidades, correndo para o possu\xEDdo: cabe\xE7a clara, cauda que some para tr\xE1s
        float s = fract((t * vLen - uTime * 2.6) / 2.4 + vPhase);
        float comet = pow(s, 5.0);
        vec3 c = base * (0.4 + 0.5 * core) + (base * 0.9 + 0.35) * comet * 1.5;
        gl_FragColor = vec4(c * ends, 1.0);
      }`}),pe=new we(new Ue,Le);pe.frustumCulled=!1,pe.renderOrder=3,S.add(pe);let tn=1,pn=new N(0,1,0),zi=new Gn;function qs(I){if(pe.geometry.dispose(),!I.length){pe.geometry=new Ue;return}let q=(vt,bt,Kt)=>vt.setAttribute(bt,new Ae(new Float32Array(vt.attributes.position.count).fill(Kt),1)),ht=[];I.slice(0,320).forEach(([vt,bt,Kt,kt],Jt)=>{let Gt=yt(vt,bt),re=Gt.getLength(),Te=(.035+.075*Math.sqrt(sn((kt>0?kt:Kt?50:8)/100,.02,1)))*(c?1.25:1),Ce=new Fs(Gt,sn(Math.round(re*2.2),14,80),Te,6,!1),je=(en,Zs,vi,Dn)=>{let Jn=en.attributes.position.count,ho=new Float32Array(Jn*3);for(let Bc=0;Bc<Jn;Bc++)ho.set([Zs,vi,Dn],Bc*3);en.setAttribute("aCenter",new Ae(ho,3))};q(Ce,"aPhase",Jt*.137%1),q(Ce,"aCtl",Kt?1:0),q(Ce,"aLen",re),q(Ce,"aHead",0),q(Ce,"aRad",Te),je(Ce,0,0,0),ht.push(Ce);let We=new pa(Te*2.6,Te*7,10,1),Xe=Gt.getTangent(.985,Ft).normalize();We.translate(0,Te*3.5,0),We.applyQuaternion(zi.setFromUnitVectors(pn,Xe));let Ee=Gt.getPoint(1,$t);We.translate(Ee.x-Xe.x*Te*7,Ee.y-Xe.y*Te*7,Ee.z-Xe.z*Te*7),q(We,"aPhase",0),q(We,"aCtl",Kt?1:0),q(We,"aLen",re),q(We,"aHead",1),q(We,"aRad",Te),je(We,Ee.x,Ee.y,Ee.z),ht.push(We)}),pe.geometry=Mc(ht),ht.forEach(vt=>vt.dispose()),tn=0}let In={v:0,to:0},Ln={v:0,to:0,plate:-1};function Dt(I,q=.7){for(let vt of Rt)vt.userData.hl.fill(0);let ht=Y.geometry.attributes.aHL;if(ht.array.fill(0),I)for(let[vt,bt]of I){let Kt=It[vt];Kt&&(Kt[0].userData.hl[Kt[1]]=bt,pt[vt]>=0&&(ht.array[pt[vt]]=bt))}for(let vt of Rt)vt.userData.geo.attributes.aHL.needsUpdate=!0;ht.needsUpdate=!0,In.to=I?q:0}function Yt(I){if(Ln.plate=I,Ln.to=I>=0?1:0,St.uFocus.value=et.uFocus.value=I,I>=0){let q=lt[I];Ct.uFocus.value.set(q.x0,q.z0,q.x1,q.z1)}}function ue(I){for(let ht of Rt){let{idx:vt,vis:bt,geo:Kt}=ht.userData;vt.forEach((kt,Jt)=>{bt[Jt]=I[kt]?1:0}),Kt.attributes.aVis.needsUpdate=!0}let q=Y.geometry.attributes.aVis;z.forEach((ht,vt)=>{q.array[vt]=I[ht]?1:0}),q.needsUpdate=!0,Wt(I)}let me={t0:0,dur:0};function Je(I=5200){let q=0;for(let vt=0;vt<o;vt++)xt[vt]>xt[q]&&gt[vt]&&(q=vt);for(let vt of Rt){let{idx:bt,delay:Kt,geo:kt}=vt.userData;bt.forEach((Jt,Gt)=>{Kt[Gt]=sn(Math.hypot(D[Jt]-D[q],(Q[Jt]-Q[q])*1.2)/95,0,1)*.85+Jt%7*.01}),kt.attributes.aDelay.needsUpdate=!0}St.uRise.value=0,me.t0=performance.now(),me.dur=I*.8;let ht={x:at.tx,z:at.tz,d:at.td};at.x=D[q]+3,at.z=Q[q]+6,at.d=30,at.yaw=-.5,at.fly={a:{x:at.x,z:at.z,d:at.d,yaw:at.yaw},b:{...ht,yaw:0},t0:performance.now(),dur:I,intro:!0},ke=3}let ke=0;function Mn(){if(at.fly&&at.fly.intro){let I=at.fly;at.fly=null,at.tx=I.b.x,at.tz=I.b.z,at.td=I.b.d,at.yaw=0}me.dur&&(me.t0=Math.min(me.t0,performance.now()-me.dur*.7))}let Vt={W:1,H:1,offX:0,offY:0,toX:0,toY:0,inset:{l:0,r:0,t:0,b:0}},at={x:0,z:0,d:160,tx:0,tz:0,td:160,vx:0,vz:0,tilt:.5,yaw:0,sway:0,idleAt:performance.now(),fly:null},En=7,ji=Math.max(260,d*2.4),Qi=I=>.5+.48*(1-Qa(16,120,I));function Ys(){at.tilt=Qi(at.d);let I=at.yaw+at.sway,q=Math.sin(at.tilt)*at.d;P.position.set(at.x+Math.sin(I)*q,Math.cos(at.tilt)*at.d,at.z+Math.cos(I)*q),P.up.set(0,1,0),P.lookAt(at.x,0,at.z),S.fog.near=at.d*1.05,S.fog.far=at.d*3.4,Ct.uFogNear.value=S.fog.near,Ct.uFogFar.value=S.fog.far}let Yn=new Bs,zn=new Tt;function kn(I,q,ht=g){zn.set(I/Vt.W*2-1,-(q/Vt.H)*2+1),Yn.setFromCamera(zn,P);let vt=(ht-Yn.ray.origin.y)/Yn.ray.direction.y;return Yn.ray.origin.clone().addScaledVector(Yn.ray.direction,vt)}function bs(I,q,ht,vt,bt=1.08){let Kt=P.fov*Math.PI/360,kt=Vt.inset,Jt=Math.max(200,Vt.W-kt.l-kt.r),Gt=Math.max(160,Vt.H-kt.t-kt.b),re=Jt/Gt,Te=(q-I)*bt,Ce=(vt-ht)*bt,je=100;for(let We=0;We<4;We++){let Xe=Qi(je),Ee=Ce/2*(Math.cos(Xe)/Math.tan(Kt)+Math.sin(Xe)),en=Te/2/(Math.tan(Kt)*re)+Ce/2*Math.sin(Xe)*.6;je=Math.max(Ee,en)*(Vt.H/Gt)}return sn(je+1,En,ji)}function w(I,q,ht,vt=1100){at.fly={a:{x:at.x,z:at.z,d:at.d,yaw:at.yaw},b:{x:I,z:q,d:ht,yaw:0},t0:performance.now(),dur:vt},at.tx=I,at.tz=q,at.td=ht,at.vx=at.vz=0}function V(I,q,ht,vt,bt={}){let Kt=Math.max(bt.minD||En,bs(I,q,ht,vt,bt.pad||1.12));w((I+q)/2,(ht+vt)/2+(bt.dz||0),Kt,bt.dur||1100)}function st(I,q={}){if(!I.length)return;let ht=1/0,vt=-1/0,bt=1/0,Kt=-1/0;for(let Jt of I)ht=Math.min(ht,D[Jt]-nt[Jt]),vt=Math.max(vt,D[Jt]+nt[Jt]),bt=Math.min(bt,Q[Jt]-nt[Jt]-_e(Jt)*.75-.6),Kt=Math.max(Kt,Q[Jt]+nt[Jt]+.4);let kt=q.minSpan||14;if(vt-ht<kt){let Jt=(ht+vt)/2;ht=Jt-kt/2,vt=Jt+kt/2}if(Kt-bt<kt*.6){let Jt=(bt+Kt)/2;bt=Jt-kt*.3,Kt=Jt+kt*.3}V(ht,vt,bt,Kt,q)}function J(I,q={}){let ht=lt[I];V(ht.x0,ht.x1,ht.z0-2.5,ht.z1,{pad:1.06,...q})}function K(I=1100){V(-u/2,u/2,-d/2-3,d/2,{pad:1.03,dur:I})}function Bt(I,q){let ht=kn(Vt.W/2,Vt.H/2),vt=kn(Vt.W/2+I,Vt.H/2+q);at.x-=vt.x-ht.x,at.z-=vt.z-ht.z,at.tx=at.x,at.tz=at.z,at.fly=null,jt()}function qt(I,q){let ht=kn(Vt.W/2,Vt.H/2),vt=kn(Vt.W/2+I*16,Vt.H/2+q*16);at.vx=-(vt.x-ht.x),at.vz=-(vt.z-ht.z)}function Ot(I,q,ht){let vt=at.td,bt=sn(at.td*I,En,ji);if(at.fly=null,q!=null){let Kt=kn(q,ht),kt=1-bt/vt;at.tx+=(Kt.x-at.tx)*kt,at.tz+=(Kt.z-at.tz)*kt}at.td=bt}function jt(){at.x=sn(at.x,-u*.6,u*.6),at.z=sn(at.z,-d*.7,d*.75),at.tx=sn(at.tx,-u*.6,u*.6),at.tz=sn(at.tz,-d*.7,d*.75)}function te(){at.idleAt=performance.now()}let le=new N;function ye(I,q={}){let ht=gt[I]&&X[I]==="tower"?sn(St.uRise.value,.3,1):1;return le.set(D[I],Z[I]+xt[I]*ht,Q[I]).project(P),q.x=(le.x*.5+.5)*Vt.W,q.y=(-le.y*.5+.5)*Vt.H,q.f=le.z<1&&q.x>-40&&q.x<Vt.W+40&&q.y>-40&&q.y<Vt.H+40?1:0,q.r=nt[I],q}function Zt(I,q,ht,vt={}){return le.set(I,q,ht).project(P),vt.x=(le.x*.5+.5)*Vt.W,vt.y=(-le.y*.5+.5)*Vt.H,vt.f=le.z<1?1:0,vt}function Ie(){let I=Zt(at.x,g,at.z),q=Zt(at.x+1,g,at.z);return Math.hypot(q.x-I.x,q.y-I.y)}let qe=[];function He(I,q,ht){zn.set(I/Vt.W*2-1,-(q/Vt.H)*2+1),Yn.setFromCamera(zn,P);let vt=-1,bt=1/0;for(let re of Rt){qe.length=0,re.raycast(Yn,qe);for(let Te of qe){let Ce=re.userData.idx[Te.instanceId];Ce==null||ht&&!ht[Ce]||Te.distance<bt&&(bt=Te.distance,vt=Ce)}}if(vt>=0)return vt;let Kt=matchMedia("(pointer: coarse)").matches?16:8,kt=Ie(),Jt={},Gt=1/0;for(let re=0;re<o;re++){if(ht&&!ht[re]||(Zt(D[re],Z[re]+xt[re]*.5,Q[re],Jt),!Jt.f))continue;let Te=Math.hypot(Jt.x-I,Jt.y-q),Ce=Math.max(2,nt[re]*.8*kt);if(Te>Kt+Ce)continue;let je=Te-Ce-(gt[re]||dt[re]?3:0);je<Gt&&(Gt=je,vt=re)}return vt}function Be(I,q){let ht=kn(I,q,0);for(let vt of lt)if(ht.x>=vt.x0&&ht.x<=vt.x1&&ht.z>=vt.z0&&ht.z<=vt.z1)return vt.j;return-1}let Ke={t:0,last:performance.now()};function Xt(I=performance.now()){let q=Math.min(.5,(I-Ke.last)/1e3),ht=Math.min(.05,q);if(Ke.last=I,Ke.t+=ht,ke&&!--ke&&(me.t0=I,at.fly&&at.fly.intro&&(at.fly.t0=I)),at.fly){let kt=at.fly,Jt=sn((I-kt.t0)/kt.dur,0,1),Gt=kt.intro?Jt*Jt*(3-2*Jt):Uf(Jt);at.x=xi(kt.a.x,kt.b.x,Gt),at.z=xi(kt.a.z,kt.b.z,Gt),at.yaw=xi(kt.a.yaw,kt.b.yaw,Gt),at.d=kt.intro?Math.exp(xi(Math.log(kt.a.d),Math.log(kt.b.d),Gt)):xi(kt.a.d,kt.b.d,Gt),Jt>=1&&(at.fly=null,at.tx=kt.b.x,at.tz=kt.b.z,at.td=kt.b.d),at.idleAt=I}else{at.x+=at.vx,at.z+=at.vz,at.tx+=at.vx,at.tz+=at.vz;let kt=Math.pow(.88,ht*60);at.vx*=kt,at.vz*=kt,Math.abs(at.vx)+Math.abs(at.vz)<.001&&(at.vx=at.vz=0);let Jt=Math.min(1,ht*9);at.x+=(at.tx-at.x)*Jt,at.z+=(at.tz-at.z)*Jt,at.d+=(at.td-at.d)*Jt,at.yaw+=(0-at.yaw)*Math.min(1,ht*4),jt()}let vt=r?0:Qa(2500,7e3,I-at.idleAt);if(at.swayK=xi(at.swayK||0,vt,Math.min(1,ht*1.5)),at.sway=Math.sin(Ke.t*.16)*.075*at.swayK,Math.abs(Vt.toX-Vt.offX)+Math.abs(Vt.toY-Vt.offY)>.3){let kt=1-Math.exp(-q*7);Ge(Vt.offX+(Vt.toX-Vt.offX)*kt,Vt.offY+(Vt.toY-Vt.offY)*kt)}if(Ys(),P.updateMatrixWorld(),In.v+=(In.to-In.v)*(1-Math.exp(-q*5)),Ln.v+=(Ln.to-Ln.v)*(1-Math.exp(-q*5)),St.uDim.value=et.uDim.value=Math.min(1,In.v*1.25),ct.uDim.value=Math.max(Math.min(1,In.v*1.3),Ln.v*.7),Ct.uDim.value=In.v,Ct.uFocusK.value=Ln.v,Mt.uDim.value=In.v,St.uTime.value=Ht.uTime.value=Ct.uTime.value=et.uTime.value=Mt.uTime.value=Ke.t,me.dur){let kt=sn((I-me.t0)/me.dur,0,1);St.uRise.value=1.4*kt,kt>=1&&(me.dur=0,St.uRise.value=1.4)}let bt=St.uRise.value;ct.uAlpha.value=Qa(.8,1.35,bt),et.uRise.value=bt,Ct.uRise.value=Qa(0,.9,bt+.15),ct.uFar.value=.3+.7*(1-Qa(30,120,at.d));let Kt=Vt.H*v/(2*Math.tan(P.fov*Math.PI/360));et.uPx.value=Mt.uPx.value=Ht.uPx.value=Kt,tn=Math.min(1,tn+q*1.25),Ht.uGrow.value=Uf(tn)}let Fe={n:0,acc:0,last:0,skip:45,level:0};function Pe(I){let q=I-Fe.last;if(Fe.last=I,a||Fe.level>=2||q>250||q<=0)return;if(Fe.skip>0){Fe.skip--;return}if(Fe.acc+=q,++Fe.n<50)return;let ht=Fe.acc/Fe.n;Fe.n=Fe.acc=0,!(ht<=42)&&(Fe.level++,Fe.skip=20,Fe.level===1&&v>1.3?(v=1.25,E.setPixelRatio(v),H&&H.setPixelRatio(v),Ht.uMinPx.value=v,ai(Vt.W,Vt.H)):(Fe.level=2,H&&(H.dispose(),H=null)))}function An(){Pe(performance.now()),H?H.render():E.render(S,P)}function Zn(){Xt();try{E.compile(S,P)}catch{}An(),Ke.last=performance.now()}function ai(I,q){Vt.W=Math.max(1,I),Vt.H=Math.max(1,q),E.setSize(Vt.W,Vt.H,!1),H&&(H.setSize(Vt.W,Vt.H),k.resolution.set(Vt.W*.5,Vt.H*.5)),P.aspect=Vt.W/Vt.H,P.updateProjectionMatrix(),Ge(Vt.offX,Vt.offY)}function ki(I,q,ht=!1){Vt.toX=I,Vt.toY=q,ht&&Ge(I,q)}function Oe(I,q,ht,vt,bt=!1){Vt.inset={l:I,r:q,t:ht,b:vt},ki((I-q)/2,(ht-vt)/2,bt)}function Ge(I,q){Vt.offX=I,Vt.offY=q,P.setViewOffset(Vt.W,Vt.H,-I,-q,Vt.W,Vt.H)}return{renderer:E,scene:S,camera:P,cam:at,view:Vt,plates:lt,update:Xt,render:An,warmup:Zn,resize:ai,setOffset:ki,setInsets:Oe,pan:Bt,fling:qt,zoom:Ot,flyTo:w,flyToBox:V,flyToNodes:st,flyToPlate:J,fitAll:K,pick:He,plateAt:Be,project:ye,projectPoint:Zt,pxPerUnit:Ie,setHighlight:Dt,setFlows:qs,setVisible:ue,setFocusPlate:Yt,intro:Je,skipIntro:Mn,touch:te,isInv:ft,isGround:gt,sky:dt,shape:X,X:D,Y:Z,Z:Q,R:nt,TOP:g,PLATE_H:0,get scale(){return f},get dimV(){return In.v},get introK(){return at.fly&&at.fly.intro?ke?0:sn((performance.now()-at.fly.t0)/at.fly.dur,0,1):1},dispose(){E.dispose(),y.dispose()}}}var to=new N;function ni(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;to.copy(t),to[n]=0,to.normalize();let c=.5*a/(a+o),h=1-to.angleTo(i)/l;return Math.sign(to[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Ac=class i extends Rn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new N,c=new N,h=new N(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,_=new N,g=.5/a;for(let p=0,M=0;p<f.length;p+=3,M+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:_.set(1,0,0),d[M+0]=ni(_,c,"z","y",r,n),d[M+1]=1-ni(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),d[M+0]=1-ni(_,c,"z","y",r,n),d[M+1]=1-ni(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),d[M+0]=1-ni(_,c,"x","z",r,t),d[M+1]=ni(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[M+0]=1-ni(_,c,"x","z",r,t),d[M+1]=1-ni(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[M+0]=1-ni(_,c,"x","y",r,t),d[M+1]=1-ni(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),d[M+0]=ni(_,c,"x","y",r,t),d[M+1]=1-ni(_,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Ki=(i,t,e)=>Math.max(t,Math.min(e,i)),du=i=>1-Math.pow(1-i,3),uv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,fu='"Inter", -apple-system, system-ui, sans-serif',eo='"IBM Plex Mono", ui-monospace, Menlo, monospace';function zf(i,t){let{W:e,colorOf:n,kindLabel:s,shortName:r,brl:a,pct:o,accent:l="#3cf0b4",onPick:c,onExt:h,canvas:f}=t,u=new ee(l),d=()=>innerWidth<=760,m=new qi;m.background=new ee(461069),m.fog=new Rs(461069,24,60);let _=new hn(32,1,.1,200),g=new xs(i);m.environment=g.fromScene(new Fr,.04).texture,m.environmentIntensity=.55;let p=new Yi(16774378,2.4);p.position.set(-6,14,7),p.castShadow=!0,p.shadow.mapSize.set(2048,2048),Object.assign(p.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:1,far:50}),p.shadow.bias=-5e-4,p.shadow.normalBias=.02,p.shadow.radius=6,m.add(p,p.target);let M=new Yi(10336511,.5);M.position.set(8,6,-4),m.add(M),m.add(new Os(12109533,724242,.45));let E={uAcc:{value:u},uGlow:{value:0}},v=new wn({color:987929,roughness:.92,metalness:0,envMapIntensity:.2});v.onBeforeCompile=T=>{Object.assign(T.uniforms,E),T.vertexShader=T.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),T.fragmentShader=T.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWp; uniform vec3 uAcc; uniform float uGlow;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 g = abs(fract(vWp.xz / 0.5 + 0.5) - 0.5) * 0.5;
        float dotk = 1.0 - smoothstep(0.012, 0.022, length(g));
        float r = length(vWp.xz);
        diffuseColor.rgb += vec3(0.06, 0.075, 0.09) * dotk * (1.0 - smoothstep(10.0, 40.0, r));
        diffuseColor.rgb *= 1.0 - 0.45 * smoothstep(14.0, 48.0, r);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += uAcc * uGlow * 0.3 * exp(-pow(length(vWp.xz) / 2.0, 2.0));`)};let b=new we(new jn(260,260),v);b.rotation.x=-Math.PI/2,b.receiveShadow=!0,m.add(b);let S=new di;m.add(S);let P=i.capabilities.getMaxAnisotropy();typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(T,U,W,L,z){this.moveTo(T+z,U),this.arcTo(T+W,U,T+W,U+L,z),this.arcTo(T+W,U+L,T,U+L,z),this.arcTo(T,U+L,T,U,z),this.arcTo(T,U,T+W,U,z),this.closePath()});function y(T,U,W){let L=document.createElement("canvas"),z=2;L.width=T*z,L.height=U*z;let et=L.getContext("2d");et.scale(z,z),W(et,T,U);let Y=new os(L);return Y.colorSpace=gn,Y.anisotropy=Math.min(8,P),Y}function A(T,U,W,L){let z=String(U).split(/\s+/),et=[],Y="";for(let pt of z){let Mt=Y?`${Y} ${pt}`:pt;T.measureText(Mt).width<=W||!Y?Y=Mt:(et.push(Y),Y=pt)}if(Y&&et.push(Y),et.length>L){et.length=L;let pt=et[L-1];for(;pt.length>1&&T.measureText(`${pt}\u2026`).width>W;)pt=pt.slice(0,-1);et[L-1]=`${pt}\u2026`}return et}function F(T,U,W,L,z,et){T.save(),T.translate(W,L),T.strokeStyle=et,T.fillStyle=et,T.lineWidth=z*.09,T.lineJoin="round",T.lineCap="round";let Y=z/2;if(T.beginPath(),U==="pf")T.arc(0,-Y*.32,Y*.3,0,Math.PI*2),T.stroke(),T.beginPath(),T.moveTo(-Y*.6,Y*.62),T.quadraticCurveTo(-Y*.6,Y*.05,0,Y*.05),T.quadraticCurveTo(Y*.6,Y*.05,Y*.6,Y*.62),T.stroke();else if(U==="gov"){T.moveTo(-Y*.7,-Y*.2),T.lineTo(0,-Y*.65),T.lineTo(Y*.7,-Y*.2),T.closePath(),T.stroke();for(let pt of[-.45,0,.45])T.beginPath(),T.moveTo(pt*Y,-Y*.1),T.lineTo(pt*Y,Y*.45),T.stroke();T.beginPath(),T.moveTo(-Y*.75,Y*.62),T.lineTo(Y*.75,Y*.62),T.stroke()}else U==="fund"||U==="pen"?(T.arc(0,0,Y*.62,-Math.PI/2,Math.PI*1.25),T.stroke(),T.beginPath(),T.moveTo(0,0),T.lineTo(0,-Y*.62),T.moveTo(0,0),T.lineTo(-Y*.44,Y*.44),T.stroke()):U==="ext"?(T.setLineDash([z*.12,z*.1]),T.strokeRect(-Y*.6,-Y*.45,Y*1.2,Y*.95)):(T.moveTo(-Y*.62,Y*.62),T.lineTo(-Y*.62,-Y*.35),T.lineTo(Y*.05,-Y*.65),T.lineTo(Y*.05,Y*.62),T.moveTo(Y*.05,-Y*.1),T.lineTo(Y*.62,Y*.05),T.lineTo(Y*.62,Y*.62),T.moveTo(-Y*.8,Y*.62),T.lineTo(Y*.8,Y*.62),T.stroke());T.restore()}let H=T=>T.t==="c"?"c":T.t==="p"?"pf":T.t==="s"?"sub":T.c,k={w:2.9,h:.26,d:1.12},X=1.25,D=new Ac(k.w,k.h,k.d,5,.12),Z=new jn(k.w-.16,k.d-.12);Z.rotateX(-Math.PI/2);let Q=(()=>{let T=new Sr,U=k.w/2+.07,W=k.d/2+.07,L=.2;T.moveTo(-U+L,-W),T.lineTo(U-L,-W),T.quadraticCurveTo(U,-W,U,-W+L),T.lineTo(U,W-L),T.quadraticCurveTo(U,W,U-L,W),T.lineTo(-U+L,W),T.quadraticCurveTo(-U,W,-U,W-L),T.lineTo(-U,-W+L),T.quadraticCurveTo(-U,-W,-U+L,-W);let z=new Ns,et=U-.035,Y=W-.035,pt=L-.03;z.moveTo(-et+pt,-Y),z.lineTo(et-pt,-Y),z.quadraticCurveTo(et,-Y,et,-Y+pt),z.lineTo(et,Y-pt),z.quadraticCurveTo(et,Y,et-pt,Y),z.lineTo(-et+pt,Y),z.quadraticCurveTo(-et,Y,-et,Y-pt),z.lineTo(-et,-Y+pt),z.quadraticCurveTo(-et,-Y,-et+pt,-Y),T.holes.push(z);let Mt=new wa(T,8);return Mt.rotateX(-Math.PI/2),Mt})(),nt=(()=>{let T=document.createElement("canvas");T.width=T.height=128;let U=T.getContext("2d"),W=U.createRadialGradient(64,64,0,64,64,64);return W.addColorStop(0,"rgba(255,255,255,1)"),W.addColorStop(.4,"rgba(255,255,255,.35)"),W.addColorStop(1,"rgba(255,255,255,0)"),U.fillStyle=W,U.fillRect(0,0,128,128),new os(T)})();function xt(T){return y(320,124,(U,W,L)=>{U.clearRect(0,0,W,L);let z=14,et=14,Y=44;U.fillStyle=T.dim?"#e9ebee":"#eef6f2",U.beginPath(),U.roundRect(z,et,Y,Y,10),U.fill(),U.strokeStyle=T.dim?"#cfd3d8":"#bfe7d7",U.lineWidth=1,U.stroke(),F(U,T.kind,z+Y/2,et+Y/2,26,T.dim?"#8a9097":"#1d9c70"),U.fillStyle=T.dim?"#5b616a":"#14171c",U.font=`700 19px ${fu}`,U.textBaseline="alphabetic",A(U,T.name,W-80,2).forEach(($t,O)=>U.fillText($t,70,34+O*22));let Mt=L-18;U.font=`600 14px ${eo}`,T.pct&&(U.fillStyle=T.ctl?"#0f8f63":"#3d4652",U.fillText(T.pct,14,Mt));let Et=T.pct?U.measureText(T.pct).width+12:0;U.font=`500 12px ${eo}`,U.fillStyle="#6c7480";let Ft=T.sub.toUpperCase();for(;Ft.length>4&&U.measureText(Ft).width>W-28-Et;)Ft=Ft.slice(0,-2);U.fillText(Ft,14+Et,Mt),U.fillStyle=T.color,U.fillRect(14,L-8,Math.min(W-28,40+200*(T.share||0)),2.5)})}function rt(T){return y(256,256,(U,W,L)=>{let z=U.createRadialGradient(W/2,L/2,0,W/2,L/2,W/2);z.addColorStop(0,"#0f3a32"),z.addColorStop(1,"#08221d"),U.fillStyle=z,U.fillRect(0,0,W,L),U.textAlign="center";let et=T.tk||T.n.replace(/[^A-Za-zÀ-ÿ0-9 ]/g,"").split(/\s+/).filter(Boolean).slice(0,2).map(pt=>pt[0]).join("").toUpperCase();U.fillStyle="#e9fff6",U.font=`700 ${et.length>5?38:50}px ${fu}`,U.fillText(et,W/2,L/2+4),U.font=`600 15px ${fu}`,U.fillStyle="rgba(220,240,232,.78)";let Y=r(T.n);U.fillText(Y.length>24?`${Y.slice(0,22)}\u2026`:Y,W/2,L/2+36),U.font=`500 12px ${eo}`,U.fillStyle="rgba(150,230,200,.75)",U.fillText((T.t==="c"?T.mc?a(T.mc):"capital fechado":s(T)).toUpperCase(),W/2,L/2-44)})}let ut={uTime:{value:0},uAcc:{value:u},uGrow:{value:0}},dt=new ze({uniforms:ut,vertexShader:`attribute float aCtl; attribute float aPhase; attribute float aDir; attribute float aLen; varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying float vCtl; varying float vPhase; varying float vDir; varying float vLen;
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
      }`}),gt={open:!1,focus:-1,items:[],cables:null,hub:null,t0:0,a:0,aTo:0,hover:null,bounds:null},ft={x:0,z:1.2,dist:15,tx:0,tz:1.2,tdist:15,vx:0,vz:0,yaw:0};function Me(){for(let T of[...S.children])S.remove(T),T.traverse(U=>{if(U.geometry&&U.geometry!==D&&U.geometry!==Z&&U.geometry!==Q&&U.geometry.dispose(),U.material)for(let W of[].concat(U.material))W.map&&W.map!==nt&&W.map.dispose(),W!==dt&&W.dispose()});gt.items=[],gt.cables=null,gt.hub=null}function xe(T,U){Me();let W=e.nodes[T],L=[{key:`w${T}`,w:T,lvl:0}],z=new Map([[T,L[0]]]),et=[],Y=[T];for(let Dt=-1;Dt>=-4&&Y.length;Dt--){let Yt=[];for(let ue of Y){let me=e.inc[ue].filter(Je=>e.ef[Je]&1||e.ep[Je]>=5||e.ep[Je]<0).sort((Je,ke)=>(e.ef[ke]&1)-(e.ef[Je]&1)||e.ep[ke]-e.ep[Je]).slice(0,Dt===-1?14:5);for(let Je of me){let ke=e.es[Je];if(!z.has(ke)){if(Dt<-1&&!(e.ef[Je]&1))continue;let Mn={key:`w${ke}`,w:ke,lvl:Dt};z.set(ke,Mn),L.push(Mn),Yt.push(ke)}z.get(ke).lvl<z.get(ue).lvl&&et.push({a:z.get(ke),b:z.get(ue),p:e.ep[Je],ctl:e.ef[Je]&1})}}Y=Yt}let pt=e.out[T].filter(Dt=>!z.has(e.et[Dt])).sort((Dt,Yt)=>(e.ef[Yt]&1)-(e.ef[Dt]&1)||e.ep[Yt]-e.ep[Dt]);for(let Dt of pt){let Yt=e.et[Dt],ue={key:`w${Yt}`,w:Yt,lvl:1};z.set(Yt,ue),L.push(ue),et.push({a:z.get(T),b:ue,p:e.ep[Dt],ctl:e.ef[Dt]&1})}for(let Dt of U||[]){let Yt=String(Dt.cnpj||"").replace(/\D/g,""),ue=e.byCnpj.get(Yt);if(ue!=null&&z.has(ue))continue;let me=ue!=null?{key:`w${ue}`,w:ue,lvl:1}:{key:`x${Yt||Dt.n}`,ext:Dt,lvl:1};ue!=null&&z.set(ue,me),L.push(me),et.push({a:z.get(T),b:me,p:Dt.pct,ctl:(Dt.pct||0)>50})}for(let Dt of L.filter(Yt=>Yt.lvl===1&&Yt.w!=null).slice(0,18))for(let Yt of e.out[Dt.w].filter(ue=>e.ef[ue]&1).slice(0,4)){let ue=e.et[Yt];if(z.has(ue))continue;let me={key:`w${ue}`,w:ue,lvl:2};z.set(ue,me),L.push(me),et.push({a:Dt,b:me,p:e.ep[Yt],ctl:1})}let Mt=L.filter(Dt=>Dt.lvl>0);if(Mt.length>64){let Dt=new Set(Mt.slice(0,64));for(let Yt=L.length-1;Yt>=0;Yt--)L[Yt].lvl>0&&!Dt.has(L[Yt])&&L.splice(Yt,1);for(let Yt=et.length-1;Yt>=0;Yt--)(!L.includes(et[Yt].b)||!L.includes(et[Yt].a))&&et.splice(Yt,1)}let Ft=Ct(L,et).map(Dt=>{let Yt=_t(Dt);return S.add(Yt),Yt}),$t=new di,O=X,yt=[[0,0],[O,0],[O+.06,.05],[O+.08,.16],[O+.06,.34],[O,.4],[O-.12,.42],[0,.42]].map(([Dt,Yt])=>new Tt(Dt,Yt)),tt=new we(new Sa(yt,96),new wn({color:1063475,roughness:.32,metalness:.55}));tt.castShadow=!0,tt.receiveShadow=!0;let ct=new we(new Ea(O-.2,.045,16,128),new wn({color:u,emissive:u,emissiveIntensity:1.6,roughness:.3}));ct.rotation.x=-Math.PI/2,ct.position.y=.43;let wt=rt(W),mt=new we(new fa(O-.3,64),new wn({color:16777215,roughness:.45,metalness:.2,map:wt,emissive:16777215,emissiveMap:wt,emissiveIntensity:.35}));mt.rotation.x=-Math.PI/2,mt.position.y=.425;let Wt=new we(new jn(6,6),new pi({map:nt,color:u,transparent:!0,opacity:.22,blending:$n,depthWrite:!1}));Wt.rotation.x=-Math.PI/2,Wt.position.y=.012,$t.add(tt,ct,mt,Wt),$t.userData={key:`w${T}`,w:T,nd:L[0],ring:ct,glow:Wt},S.add($t),gt.hub=$t;let Ht=Math.max(1,...et.map(Dt=>Dt.p||0));for(let Dt of L){if(Dt.lvl===0)continue;let Yt=Dt.w!=null?e.nodes[Dt.w]:null,ue=Dt.lvl<0?et.find(En=>En.a===Dt):et.find(En=>En.b===Dt),me=!!(ue&&ue.ctl),Je=Yt?{name:r(Yt.n),kind:H(Yt),color:n(Yt),sub:Yt.t==="c"?[Yt.tk,Yt.mc?a(Yt.mc):"capital fechado"].filter(Boolean).join(" \xB7 "):s(Yt),pct:ue&&ue.p>=0?o(ue.p):"",ctl:me,share:(ue?.p||0)/Ht}:{name:Dt.ext.n,kind:"ext",color:"#8a9097",sub:Dt.ext.pais&&!/^brasil$/i.test(Dt.ext.pais)?Dt.ext.pais:"capital fechado",pct:ue&&ue.p>=0?o(ue.p):"",ctl:me,dim:!0,share:(ue?.p||0)/Ht},ke=new di,Mn=new we(D,new wn({color:Je.dim?12172739:15264492,roughness:.5,metalness:0}));Mn.castShadow=!0,Mn.receiveShadow=!0,Mn.position.y=k.h/2+.02;let Vt=new we(Z,new wn({map:xt(Je),transparent:!0,roughness:.55}));Vt.position.y=k.h+.022;let at=new we(Q,new pi({color:me?u:new ee(7306380),transparent:!0,opacity:me?.9:.35,blending:$n,depthWrite:!1}));at.position.y=.015,ke.add(Mn,Vt,at),ke.position.set(Dt.x,0,Dt.z),ke.userData={nd:Dt,card:Mn,rim:at,ctl:me,baseY:0},S.add(ke),gt.items.push(ke)}let Le=[];if(et.forEach((Dt,Yt)=>{let ue=Dt.a.lvl===0?null:Dt.a,me=Dt.b.lvl===0?null:Dt.b,Je=ue?new N(ue.x,.13,ue.z+(ue.z<(me?me.z:0)?k.d/2:-k.d/2)):null,ke=me?new N(me.x,.13,me.z+(me.z<(ue?ue.z:0)?k.d/2:-k.d/2)):null,Mn=bs=>{let w=new N(bs.x,0,bs.z).normalize();return new N(w.x*(O+.05),.16,w.z*(O+.05))},Vt=Je||Mn(ke),at=ke||Mn(Je),En=at.z-Vt.z,ji=Vt.clone().add(new N(0,0,En*.5)),Qi=at.clone().add(new N(0,0,-En*.5));ue||ji.copy(Vt).add(new N(Vt.x*.5,0,Vt.z*.5)),me||Qi.copy(at).add(new N(at.x*.5,0,at.z*.5));let Ys=new Mr(Vt,ji,Qi,at),Yn=Ys.getLength(),zn=new Fs(Ys,Math.max(24,Math.round(Yn*10)),Dt.ctl?.085:.05,10,!1),kn=zn.attributes.position.count;zn.setAttribute("aCtl",new Ae(new Float32Array(kn).fill(Dt.ctl?1:0),1)),zn.setAttribute("aPhase",new Ae(new Float32Array(kn).fill(Yt*.173%1),1)),zn.setAttribute("aDir",new Ae(new Float32Array(kn).fill(1),1)),zn.setAttribute("aLen",new Ae(new Float32Array(kn).fill(Yn),1)),Le.push(zn)}),Le.length){let Dt=_e(Le),Yt=new we(Dt,dt);Yt.castShadow=!0,S.add(Yt),gt.cables=Yt}let pe=-2,tn=2,pn=-2,zi=2;for(let Dt of L)pe=Math.min(pe,Dt.x-k.w/2),tn=Math.max(tn,Dt.x+k.w/2),pn=Math.min(pn,Dt.z-k.d/2),zi=Math.max(zi,Dt.z+k.d/2);for(let Dt of Ft){let Yt=Dt.userData;pe=Math.min(pe,Yt.x0),tn=Math.max(tn,Yt.x1),pn=Math.min(pn,Yt.z-.3),zi=Math.max(zi,Yt.z+.3)}gt.bounds={x0:pe,x1:tn,z0:pn,z1:zi};let qs=d()?3:5,In=L.filter(Dt=>Dt.lvl===1).sort((Dt,Yt)=>Dt.z-Yt.z||Dt.x-Yt.x).slice(0,qs*2),Ln=L.filter(Dt=>Dt.lvl===-1).sort((Dt,Yt)=>Yt.z-Dt.z||Dt.x-Yt.x);gt.near=L.filter(Dt=>Dt.lvl===0).concat(d()?Ln.slice(0,qs*2):Ln,In)}function _e(T){let U=0,W=0;for(let Et of T)U+=Et.attributes.position.count,W+=Et.index.count;let L=new Ue,z=["position","normal","uv","aCtl","aPhase","aDir","aLen"],et={};for(let Et of z)et[Et]=new Float32Array(U*T[0].attributes[Et].itemSize);let Y=new Uint32Array(W),pt=0,Mt=0;for(let Et of T){for(let $t of z)et[$t].set(Et.attributes[$t].array,pt*Et.attributes[$t].itemSize);let Ft=Et.index.array;for(let $t=0;$t<Ft.length;$t++)Y[Mt+$t]=Ft[$t]+pt;pt+=Et.attributes.position.count,Mt+=Ft.length,Et.dispose()}for(let Et of z)L.setAttribute(Et,new Ae(et[Et],T[0].attributes[Et].itemSize));return L.setIndex(new Ae(Y,1)),L}let ot={"-1":"Acionistas diretos","-2":"Quem controla os acionistas","-3":"Controle acima","-4":"Controle final",1:"Participa\xE7\xF5es e controladas",2:"Controladas das controladas"};function _t(T){let U=T.lvl===-1||T.lvl===1,W=`${ot[T.lvl]||(T.lvl<0?"Controle acima":"Mais abaixo")} \xB7 ${T.n}`.toUpperCase(),L=34,z=.3/L,et=document.createElement("canvas").getContext("2d");et.font=`600 17px ${eo}`;let Y=Math.ceil(et.measureText(W).width+30),pt=y(Y,L,(yt,tt,ct)=>{yt.clearRect(0,0,tt,ct),yt.fillStyle=T.lvl<0?"rgba(150,170,200,.9)":"rgba(60,240,180,.85)",yt.beginPath(),U&&T.lvl<0?(yt.moveTo(2,ct/2+5),yt.lineTo(14,ct/2+5),yt.lineTo(8,ct/2-6)):U?(yt.moveTo(2,ct/2-5),yt.lineTo(14,ct/2-5),yt.lineTo(8,ct/2+6)):yt.arc(8,ct/2,4,0,Math.PI*2),yt.fill(),yt.font=`600 17px ${eo}`,yt.textBaseline="middle",yt.fillStyle="rgba(205,214,226,.82)",yt.fillText(W,22,ct/2+1)}),Mt=Y*z,Et=new jn(Mt,L*z);Et.rotateX(-Math.PI/2);let Ft=new we(Et,new pi({map:pt,transparent:!0,depthWrite:!1,toneMapped:!1})),$t=U?X+.45:T.n<=2?Math.min(T.x0,-Mt-1.7):T.x0,O=U?T.lvl<0?-.36:.36:T.zLab;return Ft.position.set($t+Mt/2,.012,O),Ft.userData={band:T.lvl,x0:$t,x1:$t+Mt,z:O},Ft}function Ct(T,U){let W=d()?3:5,L=.45,z=1.75,et=3.1,Y=new Map;for(let yt of T)(Y.get(yt.lvl)||Y.set(yt.lvl,[]).get(yt.lvl)).push(yt);let pt=yt=>{let tt=U.filter(ct=>ct.b===yt).map(ct=>ct.a.x||0);return tt.length?tt.reduce((ct,wt)=>ct+wt,0)/tt.length:0},Mt=yt=>{let tt=U.filter(ct=>ct.a===yt).map(ct=>ct.b.x||0);return tt.length?tt.reduce((ct,wt)=>ct+wt,0)/tt.length:0},Et=Y.get(0)[0];Et.x=0,Et.z=0;let Ft=[],$t=yt=>{let tt=Math.min(W,yt);return-(tt*k.w+(tt-1)*L)/2},O=-et+.4;for(let yt of[...Y.keys()].filter(tt=>tt<0).sort((tt,ct)=>ct-tt)){let tt=Y.get(yt);tt.sort((ct,wt)=>Mt(ct)-Mt(wt));for(let ct=0;ct<tt.length;ct+=W){let wt=tt.slice(ct,ct+W),mt=wt.length*k.w+(wt.length-1)*L;wt.forEach((Wt,Ht)=>{Wt.x=-mt/2+k.w/2+Ht*(k.w+L),Wt.z=O}),O-=z}Ft.push({lvl:yt,n:tt.length,x0:$t(tt.length),zLab:O+z-k.d/2-.36}),O-=et-z}O=et-.4;for(let yt of[...Y.keys()].filter(tt=>tt>0).sort((tt,ct)=>tt-ct)){let tt=Y.get(yt);yt>1&&tt.sort((ct,wt)=>pt(ct)-pt(wt)),Ft.push({lvl:yt,n:tt.length,x0:$t(tt.length),zLab:O-k.d/2-.36});for(let ct=0;ct<tt.length;ct+=W){let wt=tt.slice(ct,ct+W),mt=wt.length*k.w+(wt.length-1)*L;wt.forEach((Wt,Ht)=>{Wt.x=-mt/2+k.w/2+Ht*(k.w+L),Wt.z=O}),O+=z}O+=et-z}return Ft}let B={W:1,H:1,offX:0,offY:0,freeW:1,freeH:1,top:0};function lt(){_.setViewOffset(B.W,B.H,-B.offX,-B.offY,B.W,B.H)}function St(T){let U=gt.near&&gt.near.length>1?gt.near.reduce((W,L)=>({x0:Math.min(W.x0,L.x-k.w/2),x1:Math.max(W.x1,L.x+k.w/2),z0:Math.min(W.z0,L.z-k.d/2),z1:Math.max(W.z1,L.z+k.d/2)}),{x0:-2,x1:2,z0:-2,z1:2}):gt.bounds;It(U,T)}function It(T,U){let W=T.x1-T.x0+1.2,L=T.z1-T.z0+1.6,z=B.freeW/B.H,et=_.fov*Math.PI/360,Y=W/2/Math.tan(et)/z,pt=L/2/Math.tan(et)*(B.H/Math.max(200,B.freeH));ft.tdist=Ki(Math.max(Y,pt)*1.04,6,90),ft.tx=(T.x0+T.x1)/2,ft.tz=(T.z0+T.z1)/2,U&&(ft.dist=ft.tdist,ft.x=ft.tx,ft.z=ft.tz)}function Rt(){_.position.set(ft.x+Math.sin(ft.yaw)*Math.cos(1.5)*ft.dist,Math.sin(1.5)*ft.dist,ft.z+Math.cos(ft.yaw)*Math.cos(1.5)*ft.dist),_.lookAt(ft.x,0,ft.z),p.position.set(ft.x-6,14,ft.z+7),p.target.position.set(ft.x,0,ft.z)}let Pt=new Bs,Nt=new Tt;function Lt(T,U){Nt.set(T/B.W*2-1,-(U/B.H)*2+1),Pt.setFromCamera(Nt,_);let W=gt.items.map(z=>z.userData.card);gt.hub&&W.push(gt.hub.children[0]);let L=Pt.intersectObjects(W,!1)[0];return L?L.object===gt.hub?.children[0]?gt.hub:gt.items.find(z=>z.userData.card===L.object):null}let Qt=new Map,ie=null,Re=null,ne=0;function he(T,U){Nt.set(T/B.W*2-1,-(U/B.H)*2+1),Pt.setFromCamera(Nt,_);let W=-Pt.ray.origin.y/Pt.ray.direction.y;return Pt.ray.origin.clone().addScaledVector(Pt.ray.direction,W)}function G(T){if(gt.open){try{f.setPointerCapture(T.pointerId)}catch{}if(Qt.set(T.pointerId,{x:T.clientX,y:T.clientY}),Qt.size===2){let[U,W]=[...Qt.values()];Re={d:Math.hypot(U.x-W.x,U.y-W.y)},ie=null;return}ie={sx:T.clientX,sy:T.clientY,x:T.clientX,y:T.clientY,moved:!1,g:he(T.clientX,T.clientY)},ft.vx=ft.vz=0}}function oe(T){if(gt.open){if(Qt.has(T.pointerId)&&Qt.set(T.pointerId,{x:T.clientX,y:T.clientY}),Re&&Qt.size===2){let[U,W]=[...Qt.values()],L=Math.hypot(U.x-W.x,U.y-W.y);ft.tdist=Ki(ft.tdist*(Re.d/Math.max(1,L)),5,90),ft.dist=ft.tdist,Re.d=L;return}if(ie){if(!ie.moved&&Math.hypot(T.clientX-ie.sx,T.clientY-ie.sy)>6&&(ie.moved=!0,f.classList.add("dragging")),ie.moved){Rt(),_.updateMatrixWorld();let U=he(T.clientX,T.clientY),W=ie.g.x-U.x,L=ie.g.z-U.z;ft.x+=W,ft.z+=L,ft.tx=ft.x,ft.tz=ft.z,ft.vx=W,ft.vz=L}return}if(T.pointerType==="mouse"){let U=Lt(T.clientX,T.clientY);U!==gt.hover&&(gt.hover=U,f.classList.toggle("pointing",!!U))}}}function de(T){if(!gt.open)return;if(Qt.delete(T.pointerId),f.classList.remove("dragging"),Re){Qt.size<2&&(Re=null);return}if(!ie)return;let U=ie;if(ie=null,U.moved)return;let W=performance.now(),L=W-ne<320;ne=W;let z=Lt(T.clientX,T.clientY);if(!z)return;let et=z.userData.nd;if(et.ext){h(et.ext);return}gt.selected=z,c(et.w,L&&z!==gt.hub)}function C(T){if(!gt.open)return;T.preventDefault();let U=Math.exp(T.deltaY*(T.ctrlKey?.012:.0016)),W=he(T.clientX,T.clientY),L=Ki(ft.tdist*U,5,90),z=1-L/ft.tdist;ft.tx+=(W.x-ft.tx)*z,ft.tz+=(W.z-ft.tz)*z,ft.tdist=L}f.addEventListener("pointerdown",G),f.addEventListener("pointermove",oe),f.addEventListener("pointerup",de),f.addEventListener("pointercancel",de),f.addEventListener("wheel",C,{passive:!1});let x=performance.now(),$=0;function j(T){let U=Math.min(.05,(T-x)/1e3);x=T,$+=U;let W=Ki((T-gt.t0)/1400,0,1);if(gt.hub){let L=du(Ki(W*1.8,0,1));gt.hub.scale.setScalar(.6+.4*L),gt.hub.position.y=-.4*(1-L),gt.hub.userData.ring.material.emissiveIntensity=1.2+.35*Math.sin($*2.2)}gt.items.forEach((L,z)=>{let et=L.userData.nd,Y=Ki((W-.15-Math.min(.5,(Math.abs(et.lvl)-1)*.12+z%12*.025))/.35,0,1),pt=du(Y),Mt=gt.hover===L?1:0,Et=gt.selected===L?1:0;L.userData.lift=(L.userData.lift||0)+(Mt*.18+Et*.1-(L.userData.lift||0))*Math.min(1,U*12),L.position.y=-.5*(1-pt)+L.userData.lift,L.scale.setScalar(.85+.15*pt),L.visible=Y>0,L.userData.rim.material.opacity=(L.userData.ctl?.9:.35)*pt+Et*.4}),ut.uGrow.value=uv(Ki((W-.3)/.6,0,1)),ut.uTime.value=$,E.uGlow.value=du(Ki(W*1.5,0,1)),!ie&&!Re&&(ft.x+=(ft.tx-ft.x)*Math.min(1,U*6),ft.z+=(ft.tz-ft.z)*Math.min(1,U*6)),ft.dist+=(ft.tdist-ft.dist)*Math.min(1,U*7),m.fog.near=ft.dist*1.35,m.fog.far=ft.dist*3.2,ft.yaw=0,Rt(),i.shadowMap.needsUpdate=!0,i.render(m,_)}return{get focus(){return gt.focus},open(T,U){xe(T,U),gt.open=!0,gt.focus=T,gt.t0=performance.now(),gt.hover=null,gt.selected=gt.hub,St(!0),ft.dist=ft.tdist*1.25},close(){gt.open=!1,gt.focus=-1,Me()},frame:j,resize(T,U){B.W=T,B.H=U,_.aspect=T/U,_.updateProjectionMatrix(),lt()},setFree(T,U,W,L=0){B.offX=(T-U)/2,B.offY=(L-W)/2,B.freeW=Math.max(200,B.W-T-U),B.freeH=Math.max(200,B.H-W-L),lt(),gt.open&&St(!1)},zoom(T){ft.tdist=Ki(ft.tdist*T,5,90)},fit(){gt.bounds&&It(gt.bounds)}}}var pu="mapa-3",zr=["fin","tech","saude","log","agro","ind","util","oil","base","cons","imob","out"];function kf(i){return i.t==="c"?i.mc?1.8+1.25*Math.log10(1+i.mc/1e8):1.8:i.t==="s"?1.2:i.v?1+.8*Math.log10(1+i.v/1e8):1}function dv(i){let t=i.nodes,e=t.length,n=new Int16Array(e).fill(-1),s=a=>{let o=zr.indexOf(a);return o<0?zr.length-1:o};t.forEach((a,o)=>{a.t==="c"&&(n[o]=s(a.c))});let r=Array.from({length:e},()=>[]);for(let[a,o,,l]of i.edges||[]){let c=l&1?3:1;r[a].push([o,c]),r[o].push([a,c])}for(let[a,o]of i.board||[])r[a].push([o,.3]),r[o].push([a,.3]);for(let a=0;a<6;a++){let o=0;for(let l=0;l<e;l++){if(n[l]>=0)continue;let c=new Float64Array(zr.length),h=!1;for(let[f,u]of r[l])n[f]>=0&&(c[n[f]]+=u*(t[f].t==="c"?2:1),h=!0);if(h){let f=0;for(let u=1;u<c.length;u++)c[u]>c[f]&&(f=u);n[l]=f,o++}}if(!o)break}for(let a=0;a<e;a++)n[a]<0&&(n[a]=zr.length-1);return n}function fv(i,t,e,n,s){let r=[],a=i.slice(),o=t,l=e,c=n,h=s,f=(u,d)=>{let m=u.reduce((g,p)=>g+p.a,0),_=0;for(let g of u){let p=m/d,M=g.a/p;_=Math.max(_,Math.max(p/M,M/p))}return _};for(;a.length;){let u=Math.min(c,h),d=[a.shift()];for(;a.length&&f([...d,a[0]],u)<=f(d,u);)d.push(a.shift());let m=d.reduce((_,g)=>_+g.a,0);if(c>=h){let _=m/h,g=l;for(let p of d){let M=p.a/_;r.push({...p,x0:o,y0:g,x1:o+_,y1:g+M}),g+=M}o+=_,c-=_}else{let _=m/c,g=o;for(let p of d){let M=p.a/_;r.push({...p,x0:g,y0:l,x1:g+M,y1:l+_}),g+=M}l+=_,h-=_}}return r}var pv=1.62,Hf=.62;function mv(i){let t=i.nodes,e=t.length,n=Array.from({length:e},()=>[]),s=new Int32Array(e);for(let[M,E,v,b]of i.edges||[])n[M].push([E,v,b]),s[E]++;let r=Array.from({length:e},()=>[]);for(let[M,E]of i.board||[])r[M].push(E);let a=Uint8Array.from(t,(M,E)=>M.t==="c"||M.t==="s"||!n[E].length&&s[E]?1:0),o=new Array(e).fill(null),l=new Uint8Array(e),c=M=>{if(o[M])return o[M];if(l[M])return new Map;l[M]=1;let E=new Map;for(let[v,b,S]of n[M]){let P=(b>0?b:5)*(S&1?2:1);if(a[v])E.set(v,(E.get(v)||0)+P*Math.max(1e8,t[v].mc||0));else for(let[y,A]of c(v))E.set(y,(E.get(y)||0)+A*Math.min(100,P)/100)}return l[M]=0,o[M]=E},h=new Int32Array(e).fill(-1),f=new Uint8Array(e),u=new Uint8Array(e),d=M=>M.slice().sort((E,v)=>(t[v].mc||0)-(t[E].mc||0)||E-v)[0],m=-1;for(let M=0;M<e;M++)t[M].t==="c"&&(m<0||(t[M].mc||0)>(t[m].mc||0))&&(m=M);for(let M=0;M<e;M++){if(a[M])continue;let E=c(M);E.size===1?h[M]=E.keys().next().value:E.size>=2?f[M]=1:h[M]=r[M].length?d(r[M]):m}let _=new Int16Array(e).fill(-1),g=new Uint8Array(e),p=M=>{if(a[M])return 0;if(_[M]>=0)return _[M];if(g[M])return 0;g[M]=1;let E=0,v=99;for(let[b]of n[M]){let S=p(b);(!f[M]||f[b])&&(E=Math.max(E,f[b]||!f[M]?S:0)),v=Math.min(v,S)}return g[M]=0,_[M]=f[M]?E+1:(v===99?0:v)+1};for(let M=0;M<e;M++)if(!a[M]){let E=p(M);f[M]?f[M]=Math.min(6,E):u[M]=Math.min(9,E)}return{out:n,ground:a,reach:c,anchor:h,sky:f,depth:u}}function mu(i,{log:t=()=>{},aspect:e=pv}={}){let n=i.nodes,s=n.length,r=i.pos||[],{out:a,ground:o,reach:l,anchor:c,sky:h,depth:f}=mv(i),u=dv(i),d=zr.length,m=new Map;for(let B=0;B<s;B++)c[B]>=0&&(m.get(c[B])||m.set(c[B],[]).get(c[B])).push(B);let _=Float64Array.from(n,B=>kf(B)*.62),g=new Map,p=new Float64Array(s),M=(B,lt)=>{let St=-1;for(let[It,Rt,Pt]of a[B])It===lt&&(St=Math.max(St,(Rt>0?Rt:0)+(Pt&1?1e3:0)));return St};for(let B=0;B<s;B++){if(!o[B])continue;let lt=m.get(B);if(!lt){p[B]=_[B]*1.42+.9;continue}let St=new Map;for(let Pt of lt){let Nt=f[Pt]||1;(St.get(Nt)||St.set(Nt,[]).get(Nt)).push(Pt)}let It=[],Rt=_[B]*1.42+1.5;for(let Pt of[...St.keys()].sort((Nt,Lt)=>Nt-Lt)){let Nt=St.get(Pt);for(Pt===1&&Nt.sort((Lt,Qt)=>M(Qt,B)-M(Lt,B)||(n[Qt].v||0)-(n[Lt].v||0)||Lt-Qt);Nt.length;){let Lt=Math.max(4,Math.floor(2*Math.PI*Rt/1.5));It.push({r:Rt,d:Pt,list:Nt.splice(0,Lt)}),Rt+=1.45}}g.set(B,It),p[B]=Rt-1.45+1.3}let E=new Float64Array(d);for(let B=0;B<s;B++)o[B]&&(E[u[B]]+=Math.PI*p[B]*p[B]);let v=[];for(let B=0;B<d;B++)E[B]>0&&v.push({k:B,c:zr[B],a:E[B]/.45});v.sort((B,lt)=>lt.a-B.a);let b=v.reduce((B,lt)=>B+lt.a,0),S=Math.sqrt(b*e),P=b/S,y=fv(v,0,0,S,P),A=Math.sqrt(b),F=A*Math.sqrt(1.62)*.02,H=y.map(B=>({c:B.c,k:B.k,x0:B.x0+F/2,y0:B.y0+F/2,x1:B.x1-F/2,y1:B.y1-F/2})),k=new Map(H.map((B,lt)=>[B.k,lt])),X=new Float64Array(s),D=new Float64Array(s),Z=B=>{let lt=Math.min(B.x1-B.x0,B.y1-B.y0)*.03+1,St=Math.min((B.y1-B.y0)*.12,A/Math.sqrt(1.62)*.035);return{x0:B.x0+lt,x1:B.x1-lt,y0:B.y0+lt+St,y1:B.y1-lt}},Q=B=>{let lt=B.map((Nt,Lt)=>Lt).sort((Nt,Lt)=>B[Nt]-B[Lt]||Nt-Lt),St=new Float64Array(B.length);lt.forEach((Nt,Lt)=>{St[Nt]=(Lt+.5)/B.length});let It=lt.map(Nt=>B[Nt]),Rt=It[Math.floor(It.length*.03)]??0,Pt=It[Math.ceil(It.length*.97)-1]??1;return B.map((Nt,Lt)=>.6*St[Lt]+.4*Math.min(1,Math.max(0,(Nt-Rt)/Math.max(1e-9,Pt-Rt))))};for(let B of H){let lt=[];for(let Pt=0;Pt<s;Pt++)o[Pt]&&u[Pt]===B.k&&lt.push(Pt);let St=Z(B),It=Q(lt.map(Pt=>r[2*Pt]||0)),Rt=Q(lt.map(Pt=>r[2*Pt+1]||0));lt.forEach((Pt,Nt)=>{X[Pt]=St.x0+It[Nt]*(St.x1-St.x0),D[Pt]=St.y0+Rt[Nt]*(St.y1-St.y0)})}let nt=[];for(let B=0;B<s;B++)o[B]&&nt.push(B);let xt=[];for(let[B,lt,,St]of i.edges||[])o[B]&&o[lt]&&u[B]===u[lt]&&xt.push([B,lt,St&1?.06:.02]);let rt=new Int32Array(s).fill(-1);for(let B of i.groups||[])if(B.nc>=2&&o[B.h])for(let lt of B.m)lt!==B.h&&o[lt]&&u[lt]===u[B.h]&&n[lt].t==="c"&&(rt[lt]=B.h);let ut=new Map(H.map(B=>[B.k,Z(B)])),dt=(B,lt,St,It,Rt)=>{let Pt=B.map(ne=>lt[ne]).sort((ne,he)=>ne-he),Nt=Math.max(2,(Pt[Math.floor(Pt.length/2)]||1)*2.2),Lt=(ne,he)=>(ne+4096)*8192+(he+4096),Qt=new Float64Array(s),ie=new Float64Array(s),Re=new Map;for(let ne=0;ne<St;ne++){let he=1-ne/St;Qt.fill(0),ie.fill(0),Rt(Qt,ie,Math.max(0,he*1.6-.6)),Re.clear();for(let oe of B){let de=Lt(Math.floor(X[oe]/Nt),Math.floor(D[oe]/Nt)),C=Re.get(de);C||Re.set(de,C=[]),C.push(oe)}for(let oe of B){let de=Math.floor(X[oe]/Nt),C=Math.floor(D[oe]/Nt),x=Math.ceil(2*lt[oe]/Nt);for(let $=de-x;$<=de+x;$++)for(let j=C-x;j<=C+x;j++){let T=Re.get(Lt($,j));if(T)for(let U of T){if(lt[U]>lt[oe]||lt[U]===lt[oe]&&U<=oe||!It.same(oe,U))continue;let W=X[oe]-X[U],L=D[oe]-D[U],z=Math.hypot(W,L);z<1e-6&&(W=oe*7919%13-6||1,L=U*104729%11-5||1,z=Math.hypot(W,L),W*=.001/z,L*=.001/z,z=.001);let et=lt[oe]+lt[U];if(z>=et)continue;let Y=(et-z)/z*.5;Qt[oe]+=W*Y,ie[oe]+=L*Y,Qt[U]-=W*Y,ie[U]-=L*Y}}}let G=It.max*he+.3;for(let oe of B){let de=Qt[oe],C=ie[oe],x=Math.hypot(de,C);x>G&&(de*=G/x,C*=G/x),It.move(oe,X[oe]+de,D[oe]+C)}}};dt(nt,p,220,{max:4,same:(B,lt)=>u[B]===u[lt],move:(B,lt,St)=>{let It=ut.get(u[B]),Rt=Math.min(p[B],(It.x1-It.x0)/2,(It.y1-It.y0)/2)*.9;X[B]=Math.min(It.x1-Rt,Math.max(It.x0+Rt,lt)),D[B]=Math.min(It.y1-Rt,Math.max(It.y0+Rt,St))}},(B,lt,St)=>{if(St){for(let[It,Rt,Pt]of xt){let Nt=Pt*St,Lt=X[Rt]-X[It],Qt=D[Rt]-D[It],ie=Math.hypot(Lt,Qt)||1e-9,Re=(p[It]+p[Rt])*1.05;if(ie<=Re)continue;let ne=Nt*(ie-Re)/ie;B[It]+=Lt*ne,lt[It]+=Qt*ne,B[Rt]-=Lt*ne,lt[Rt]-=Qt*ne}for(let It of nt)rt[It]>=0&&(B[It]+=(X[rt[It]]-X[It])*.03*St,lt[It]+=(D[rt[It]]-D[It])*.03*St)}});let gt=new Float64Array(s),ft=Math.PI/2;for(let[B,lt]of g)for(let St of lt){let It=St.list.length,Rt=1.5/St.r,Pt;if(St.d===1){let Nt=Math.max(Rt,Math.min(2*Math.PI/It,Rt*1.9));Pt=St.list.map((Lt,Qt)=>ft+(Qt%2?1:-1)*Math.ceil(Qt/2)*Nt)}else{let Nt=St.list.map(ne=>{let he=0,G=0;for(let[oe]of a[ne])c[oe]===B&&(he+=Math.sin(gt[oe]),G+=Math.cos(gt[oe]));return he||G?Math.atan2(he,G):ft}),Lt=St.list.map((ne,he)=>he).sort((ne,he)=>Nt[ne]-Nt[he]||ne-he);Pt=new Array(It);let Qt=-1/0,ie=0;for(let ne of Lt){let he=Math.max(Nt[ne],Qt+Rt);ie+=he-Nt[ne],Pt[ne]=he,Qt=he}let Re=Math.min(ie/It,Rt*It*.5);for(let ne=0;ne<It;ne++)Pt[ne]-=Re}St.list.forEach((Nt,Lt)=>{gt[Nt]=Pt[Lt],X[Nt]=X[B]+Math.cos(Pt[Lt])*St.r,D[Nt]=D[B]+Math.sin(Pt[Lt])*St.r})}let Me=[];for(let B=0;B<s;B++)h[B]&&Me.push(B);let xe=new Float64Array(s),_e=new Float64Array(s),ot=new Float64Array(s),_t=new Int16Array(s);for(let B=0;B<s;B++)_t[B]=o[B]?u[B]:c[B]>=0?u[c[B]]:0;for(let B of Me){let lt=l(B),St=0,It=0,Rt=0,Pt=-1,Nt=-1;for(let[Lt,Qt]of lt){let ie=Math.sqrt(Qt);St+=X[Lt]*ie,It+=D[Lt]*ie,Rt+=ie,Qt>Nt&&(Nt=Qt,Pt=Lt)}xe[B]=X[B]=St/Rt,_e[B]=D[B]=It/Rt,_t[B]=u[Pt],ot[B]=kf(n[B])*1.5+.6}dt(Me,ot,140,{max:3,same:()=>!0,move:(B,lt,St)=>{X[B]=Math.min(S-2,Math.max(2,lt)),D[B]=Math.min(P-2,Math.max(2,St))}},(B,lt,St)=>{for(let It of Me)B[It]+=(xe[It]-X[It])*.04*St,lt[It]+=(_e[It]-D[It])*.04*St}),t(`mapa: ${H.length} bairros, ${nt.length} terrenos, ${s-nt.length-Me.length} nas pra\xE7as, ${Me.length} no c\xE9u, ${S.toFixed(0)} \xD7 ${P.toFixed(0)}`);let Ct=B=>Math.round(B*10)/10;return{v:pu,W:Ct(S),H:Ct(P),x:Array.from(X,Ct),y:Array.from(D,Ct),plate:Array.from(_t,B=>k.get(B)),sky:Array.from(h),anchor:Array.from(c),lot:Array.from(p,Ct),plates:H.map(B=>({c:B.c,x0:Ct(B.x0),y0:Ct(B.y0),x1:Ct(B.x1),y1:Ct(B.y1)}))}}var Ut=(i,t=document)=>t.querySelector(i),ae=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),io=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Ze=(i,t=0)=>Number(i).toLocaleString("pt-BR",{minimumFractionDigits:t,maximumFractionDigits:t}),Zf=i=>typeof i=="number"&&isFinite(i),Ye=i=>Zf(i)?i>=1e12?`R$ ${Ze(i/1e12,2)} tri`:i>=1e9?`R$ ${Ze(i/1e9,i>=1e11?0:1)} bi`:i>=1e6?`R$ ${Ze(i/1e6,0)} mi`:`R$ ${Ze(i)}`:"\u2013",ii=i=>Zf(i)&&i>=0?`${Ze(i,i>=10||i===Math.round(i)?i===Math.round(i)?0:1:2)}%`:"\u2013",ln=(i,t,e)=>`${Ze(i)} ${i===1?t:e}`,Li=(i,t="ic")=>`<svg class="${t}" aria-hidden="true"><use href="#i-${i}"/></svg>`,$s={get:(i,t)=>{try{let e=localStorage.getItem(`n1:${i}`);return e==null?t:JSON.parse(e)}catch{return t}},set:(i,t)=>{try{localStorage.setItem(`n1:${i}`,JSON.stringify(t))}catch{}}},Rc=matchMedia("(prefers-reduced-motion: reduce)").matches,Xs=matchMedia("(pointer: coarse)").matches,cn=i=>{let t=String(i).replace(/[\s,]+(S\.?\/?A\.?|S\/a|Ltda\.?|Inc\.?|LLC|S\.à ?r\.l\.?|Sarl|S\.R\.L\.)\s*$/i,"").replace(/\s*\(.*?\)\s*$/,"").replace(/[\s,;-]+$/,"");return t.length>34?`${t.slice(0,32)}\u2026`:t},gv=i=>i.length===14?`${i.slice(0,2)}.${i.slice(2,5)}.${i.slice(5,8)}/${i.slice(8,12)}-${i.slice(12)}`:i;function so(i){let t=Ut("#toast");t.textContent=i,t.hidden=!1,clearTimeout(so.t),so.t=setTimeout(()=>{t.hidden=!0},2800)}var Hr={fin:["#8fb8e8","Bancos e servi\xE7os financeiros","Financeiro"],tech:["#7cc6d9","Telecom, m\xEDdia e tecnologia","Tecnologia"],saude:["#78cfc0","Sa\xFAde e educa\xE7\xE3o","Sa\xFAde"],log:["#8ccfa3","Transporte e log\xEDstica","Log\xEDstica"],agro:["#b5cf86","Agro, alimentos e bebidas","Agro"],ind:["#d4c97f","Ind\xFAstria e bens de capital","Ind\xFAstria"],util:["#e3bb72","Energia el\xE9trica e saneamento","Energia"],oil:["#e59f78","Petr\xF3leo, g\xE1s e qu\xEDmica","Petr\xF3leo"],base:["#d99090","Minera\xE7\xE3o, siderurgia e papel","Minera\xE7\xE3o"],cons:["#d996b4","Varejo e consumo","Consumo"],imob:["#b9a0dd","Constru\xE7\xE3o e im\xF3veis","Imobili\xE1rio"],out:["#a8b3bf","Holdings e outros","Holdings"]},Uc={pf:["#f0c9a0","Pessoa f\xEDsica"],hold:["#8ea3bd","Holding ou empresa"],fund:["#a9a2f5","Gestora ou fundo"],pen:["#d39af0","Fundo de pens\xE3o"],gov:["#f2d37a","Governo"],sub:["#7fd6b4","Controlada em comum"]},xv="#b3a6f7",Pc="#3cf0b4",Oi=i=>(Hr[i]||Hr.out)[0],Su=i=>i.t==="s"?"sub":i.t==="p"?"pf":Uc[i.c]?i.c:"hold",_i=i=>i.t==="c"?Oi(i.c):Uc[Su(i)][0],si=i=>i.t==="c"?"Companhia aberta":Uc[Su(i)][1],_v={sector:Oi,kind:i=>Uc[Su(i)][0],investor:xv},R={ready:!1};function vv(i){let t=i.nodes,e=t.length;Object.assign(R,{data:i,nodes:t,N:e,groups:i.groups||[],setores:i.setores||{}}),t.forEach((r,a)=>{r.i=a,r.f=io(r.n)});let n=i.edges||[];R.M=n.length,R.es=new Int32Array(R.M),R.et=new Int32Array(R.M),R.ep=new Float32Array(R.M),R.ef=new Uint8Array(R.M),n.forEach(([r,a,o,l],c)=>{R.es[c]=r,R.et[c]=a,R.ep[c]=o,R.ef[c]=l});let s=i.board||[];R.B=s.length,R.bs=new Int32Array(R.B),R.bt=new Int32Array(R.B),R.br=s.map(r=>r[2]),s.forEach(([r,a],o)=>{R.bs[o]=r,R.bt[o]=a}),R.out=Array.from({length:e},()=>[]),R.inc=Array.from({length:e},()=>[]),R.brd=Array.from({length:e},()=>[]);for(let r=0;r<R.M;r++)R.out[R.es[r]].push(r),R.inc[R.et[r]].push(r);for(let r=0;r<R.B;r++)R.brd[R.bs[r]].push(r),R.brd[R.bt[r]].push(r);R.groups.forEach((r,a)=>{r.i=a,r.f=io(r.n);let o={};for(let l of r.m)t[l].t==="c"&&(o[t[l].c]=(o[t[l].c]||0)+(t[l].mc||1e8));r.sector=Object.entries(o).sort((l,c)=>c[1]-l[1])[0]?.[0]||"out"}),R.deg=Float32Array.from(t,(r,a)=>R.out[a].length+R.inc[a].length+R.brd[a].length),R.crank=new Int32Array(e).fill(1e9),t.map((r,a)=>a).filter(r=>t[r].t==="c").sort((r,a)=>(t[a].mc||0)-(t[r].mc||0)).forEach((r,a)=>{R.crank[r]=a}),R.labelOrder=t.map((r,a)=>a).sort((r,a)=>Ic(a)-Ic(r)),R.byId=new Map(t.map(r=>[r.id,r.i])),R.byK=new Map(t.filter(r=>r.k).map(r=>[r.k,r.i])),R.bySlug=new Map(t.filter(r=>r.s).map(r=>[r.s,r.i])),R.byCnpj=new Map(t.filter(r=>r.cnpj).map(r=>[r.cnpj,r.i])),R.ready=!0}var Ic=i=>{let t=R.nodes[i];return t.t==="c"?1e15+(t.mc||0)+R.deg[i]*1e8:(t.v||0)+R.deg[i]*5e8},it={mode:"world",hover:-1,sel:-1,group:-1,sector:-1,shape:null,hl:null,layers:{people:!0,funds:!0,board:!1,ctlonly:!1,groups:!0,...$s.get("mundo-layers",{})},pathIds:null,lastInput:performance.now()},Bn=new Uint8Array(1);function Jf(){Bn=new Uint8Array(R.N);let i=it.layers;for(let t=0;t<R.N;t++){let e=R.nodes[t],n=1;e.t==="p"&&!i.people&&(n=0),e.t==="j"&&(e.c==="fund"||e.c==="pen")&&!i.funds&&(n=0),e.b&&!i.board&&!R.out[t].length&&!R.inc[t].length&&(n=0),i.ctlonly&&e.t!=="c"&&!R.out[t].some(s=>R.ef[s]&1)&&(n=0),Bn[t]=n}At?.setVisible(Bn)}var At=null,Fi=null;function bu(i){let t=new Set([i]),e=new Set,n=new Set;for(let s of R.out[i])Bn[R.et[s]]&&(!it.layers.ctlonly||R.ef[s]&1)&&(t.add(R.et[s]),e.add(s));for(let s of R.inc[i])Bn[R.es[s]]&&(!it.layers.ctlonly||R.ef[s]&1)&&(t.add(R.es[s]),e.add(s));if(it.layers.board||R.nodes[i].b)for(let s of R.brd[i]){let r=R.bs[s]===i?R.bt[s]:R.bs[s];t.add(r),n.add(s)}return{nodes:t,edges:e,brd:n}}function ri(i,t,e,n=[],s=.75,r=!1,a=null){if(it.hl=i,it.rel=a,Fv(),!At)return;if(!i){At.setHighlight(null),At.setFlows([]);return}let o=new Map;for(let c of i)o.set(c,.5);for(let c of n)o.set(c,1);At.setHighlight(o,s);let l=[];for(let c of t||[])l.push([R.es[c],R.et[c],r?1:R.ef[c]&1,R.ep[c]]);for(let c of e||[])l.push([R.bs[c],R.bt[c],r?1:0,4]);l.sort((c,h)=>h[2]-c[2]),At.setFlows(l)}function wu(i,t){let e=new Map;for(let n of t.edges){let s=R.ef[n]&1,r=R.ep[n]>=0?ii(R.ep[n]):"";R.et[n]===i?e.set(R.es[n],s?`controla${r?` \xB7 ${r}`:""}`:r?`dono de ${r}`:"acionista"):e.set(R.et[n],s?`controlada${r?` \xB7 ${r}`:""}`:r?`participa\xE7\xE3o de ${r}`:"participa\xE7\xE3o")}for(let n of t.brd){let s=R.bs[n]===i?R.bt[n]:R.bs[n];e.has(s)||e.set(s,{P:"presid\xEAncia do conselho",E:"presid\xEAncia executiva",C:"conselho",D:"diretoria"}[R.br[n]]||"administra\xE7\xE3o")}return e}function _n(i,{fly:t=!0,push:e=!0}={}){if(it.mode!=="world"&&Di(!1),Bi(),it.sel=i,it.group=-1,Tu(),Wr(),i<0){ri(null),Qf(),e&&Ss("");return}let n=bu(i);ri(n.nodes,n.edges,n.brd,[i],.75,!1,wu(i,n)),Eu(i),Oc(),t&&At.flyToNodes(yv(i,n.nodes),{minSpan:16}),e&&Ss(`n/${R.nodes[i].id}`)}function yv(i,t){let e=[...t],n=1/0,s=-1/0,r=1/0,a=-1/0;for(let l of e)n=Math.min(n,At.X[l]),s=Math.max(s,At.X[l]),r=Math.min(r,At.Z[l]),a=Math.max(a,At.Z[l]);return At.sky[i]||Math.hypot(s-n,a-r)<=62?e:e.filter(l=>l===i||Math.hypot(At.X[l]-At.X[i],At.Z[l]-At.Z[i])<=26)}function Lc(i,{push:t=!0}={}){it.mode!=="world"&&Di(!1),Bi();let e=R.groups[i];it.sel=-1,it.group=i,Tu(),Wr();let n=new Set(e.m),s=new Set;for(let r of e.m)for(let a of R.out[r])n.has(R.et[a])&&s.add(a);ri(n,s,new Set,e.m.filter(r=>R.nodes[r].t==="c")),Tv(i),Oc(),At.flyToNodes(e.m,{minSpan:20}),t&&Ss(`g/${i}`)}var Vf=i=>(R.data.mapa.plates||[]).findIndex(t=>t.c===i);function ro(i,{push:t=!0,fly:e=!0}={}){i<0||(it.mode!=="world"&&Di(!1),Bi(),it.sel=-1,it.group=-1,it.sector=i,Wr(),ri(null),At.setFocusPlate(i),$v(i),e&&At.flyToPlate(i),Oc(),t&&Ss(`setor/${R.data.mapa.plates[i].c}`))}function Tu(){it.sector<0||(it.sector=-1,At?.setFocusPlate(-1))}function Gf(i){if(!At||it.mode!=="world")return;if(it.shape===i||!i){Wr(),it.sel>=0?_n(it.sel,{fly:!1,push:!1}):ri(null);return}(it.sel>=0||it.group>=0)&&(it.sel=-1,it.group=-1,it.sector<0&&Qf(),Ss(it.sector>=0?`setor/${R.data.mapa.plates[it.sector].c}`:""),Oc()),Bi(),it.shape=i,Kf();let t=new Set,e=new Map;for(let n=0;n<R.N;n++)Bn[n]&&At.shape[n]===i&&(it.sector<0||R.data.mapa.plate[n]===it.sector)&&(t.add(n),e.set(n,.02));it.hl=t,At.setHighlight(e,.85),At.setFlows([])}function Wr(){it.shape&&(it.shape=null,Kf())}var Kf=()=>{for(let i of document.querySelectorAll("#m-key [data-shape]"))i.classList.toggle("on",i.dataset.shape===it.shape)};function jf(i){let t=-1,e=-2;for(let n of R.inc[i])R.ef[n]&1&&R.ep[n]>e&&(e=R.ep[n],t=R.es[n]);return t}function Mv(i){let t=[i],e=new Set([i]);for(;;){let n=jf(t[t.length-1]);if(n<0||e.has(n))break;e.add(n),t.push(n)}return t}var Sv=(i,t)=>R.out[i].find(e=>R.et[e]===t);function bv(i){let t=_i(i);if(i.t==="c"){let e=i.n.replace(/[^A-Za-zÀ-ÿ0-9 ]/g,"").split(/\s+/).filter(Boolean).slice(0,2).map(n=>n[0]).join("").toUpperCase();return`<span class="m-badge" style="--c:${t}"><span>${ae(e)}</span>${i.tk?`<img src="https://icons.brapi.dev/icons/${ae(i.tk)}.svg" alt="" loading="lazy" onload="this.naturalWidth > 1 ? this.classList.add('ok') : this.remove()" onerror="this.remove()">`:""}</span>`}if(i.t==="p"){let e=i.n.split(/\s+/).filter(n=>n&&!/^(de|da|do|das|dos|e)$/i.test(n)).slice(0,2).map(n=>n[0]).join("").toUpperCase();return`<span class="m-badge round" style="--c:${t}"><span>${ae(e)}</span></span>`}return`<span class="m-badge" style="--c:${t}">${Li("cias")}</span>`}function ys(i,t,e,n){let s=R.nodes[i];return`<li data-go="${i}"><span class="m-dot" style="--c:${_i(s)}"></span><span class="nm">${ae(s.n)}</span>
    <span class="pc ${n?"m-ctl":""}">${ae(t)}</span>${e?`<small>${ae(e)}</small>`:""}</li>`}function kr(i,t=8,e=""){return i.length?`<ul class="m-list" ${e?`data-list="${e}"`:""}>${i.slice(0,t).join("")}${i.length>t?`<li class="more" data-more="${e}">Mostrar mais ${i.length-t}</li>`:""}</ul>`:""}function wv(i){let t=i.filter(h=>h.p>0).slice(0,7);if(!t.length)return"";let e=t.reduce((h,f)=>h+f.p,0),n=e>100?100/e:1;e=Math.min(100,e);let s=46,r=2*Math.PI*s,a=0,o=t.map(h=>{let f=h.p*n/100,u=Math.max(0,f*r-2),d=`<circle r="${s}" cx="60" cy="60" fill="none" stroke="${_i(R.nodes[h.o])}" stroke-width="${h.ctl?13:10}" stroke-dasharray="${u.toFixed(2)} ${(r-u).toFixed(2)}" stroke-dashoffset="${(-a*r).toFixed(2)}" data-go="${h.o}"><title>${ae(R.nodes[h.o].n)} \xB7 ${ii(h.p)}</title></circle>`;return a+=f,d}).join(""),l=t[0],c=t.slice(0,5).map(h=>`<li data-go="${h.o}"><i style="--c:${_i(R.nodes[h.o])}"></i><span>${ae(cn(R.nodes[h.o].n))}</span><b>${ii(h.p)}</b></li>`).join("")+(e<99.5?`<li class="rest"><i></i><span>Demais acionistas</span><b>${ii(100-e)}</b></li>`:"");return`<div class="m-donut"><svg viewBox="0 0 120 120" aria-hidden="true"><circle r="${s}" cx="60" cy="60" fill="none" class="m-donut-track" stroke-width="10"/><g transform="rotate(-90 60 60)">${o}</g>
    <text x="60" y="56" text-anchor="middle" class="m-donut-v">${ii(l.p)}</text><text x="60" y="72" text-anchor="middle" class="m-donut-l">${l.ctl?"controle":"maior fatia"}</text></svg>
    <ul>${c}</ul></div>`}var Ui={},Wf={P:"Presidente do conselho",E:"Diretor-presidente (CEO)",C:"Conselho de administra\xE7\xE3o",D:"Diretoria"};function Eu(i){let t=R.nodes[i],e=Ut("#m-panel-body"),n=R.inc[i].map(m=>({j:m,o:R.es[m],p:R.ep[m],ctl:R.ef[m]&1})).sort((m,_)=>_.ctl-m.ctl||_.p-m.p),s=R.out[i].map(m=>({j:m,o:R.et[m],p:R.ep[m],ctl:R.ef[m]&1})).sort((m,_)=>_.ctl-m.ctl||(R.nodes[_.o].mc||0)*_.p-(R.nodes[m.o].mc||0)*m.p||_.p-m.p),r=R.brd[i].map(m=>({j:m,o:R.bs[m]===i?R.bt[m]:R.bs[m],r:R.br[m]})),a=t.g!=null?R.groups[t.g]:null,o=Mv(i),l=s.filter(m=>m.ctl).length,c=t.t==="c"?[t.tk||"capital fechado",t.st,t.uf]:[si(t),t.pais,t.cnpj?gv(t.cnpj):""],h=t.t==="c"?[["Valor de mercado",t.mc?Ye(t.mc):"\u2013"],["Acionistas",Ze(n.length)],["Participa\xE7\xF5es",Ze(s.length)]]:[["Participa\xE7\xF5es",Ze(s.length)],["Valor estimado",t.v?Ye(t.v):"\u2013"],[r.length?"Cargos":"Controla",Ze(r.length||l)]];Ui={inc:n.map(m=>ys(m.o,ii(m.p),[m.ctl?"controlador":"",R.ef[m.j]&2?"acordo de acionistas":"",si(R.nodes[m.o])].filter(Boolean).join(" \xB7 "),m.ctl)),out:s.map(m=>ys(m.o,ii(m.p),[m.ctl?"controla":"",R.nodes[m.o].mc?`valor de mercado ${Ye(R.nodes[m.o].mc)}`:si(R.nodes[m.o])].filter(Boolean).join(" \xB7 "),m.ctl)),brd:r.map(m=>{let _=R.nodes[m.o];if(t.t==="c"){let g=R.brd[m.o].map(p=>R.bs[p]===m.o?R.bt[p]:R.bs[p]).filter(p=>p!==i).map(p=>cn(R.nodes[p].n));return ys(m.o,"",`${Wf[m.r]||"Cargo"} aqui \xB7 tamb\xE9m em ${g.slice(0,3).join(", ")}${g.length>3?` e mais ${g.length-3}`:""}`,!1)}return ys(m.o,"",`${Wf[m.r]||"Cargo"}${_.mc?` \xB7 ${Ye(_.mc)}`:""}`,!1)})};let f=t.t==="c"&&t.k?`cias.html#cia/${encodeURIComponent(t.k)}`:t.s?`cias.html#pessoa/${encodeURIComponent(t.s)}`:"",u=t.t==="c"?R.setores[t.c]||Hr[t.c]?.[1]:"",d=it.mode==="tree";e.innerHTML=`
    <div class="m-kicker" style="--c:${_i(t)}"><i></i>${ae(t.t==="c"?u||"Companhia aberta":si(t))}</div>
    <div class="m-head">${bv(t)}<div><h2>${ae(t.n)}</h2><p>${ae(c.filter(Boolean).join(" \xB7 "))}</p></div></div>
    ${a&&a.nc>=2?`<div class="m-chips"><button class="m-chip gold" data-group="${a.i}" type="button">${Li("cias","ic ic-xs")}Grupo ${ae(a.n)} \xB7 ${ln(a.nc,"companhia","companhias")}</button></div>`:""}
    <div class="m-stats">${h.map(([m,_])=>`<div class="m-stat"><span>${m}</span><b>${ae(_)}</b></div>`).join("")}</div>
    <div class="m-btns">
      ${d&&it.treeFocus===i?`<button class="m-btn primary" type="button" data-act="world">${Li("map")}Ver no mapa</button>`:`<button class="m-btn primary" type="button" data-act="tree">${Li("tree")}Estrutura societ\xE1ria</button>`}
      <button class="m-btn" type="button" data-act="path">${Li("path")}Conectar com\u2026</button>
      ${f?`<a class="m-btn wide ghost" href="${f}">${t.t==="c"?"Perfil completo da companhia":"Perfil completo"} ${Li("ext")}</a>`:""}
    </div>
    <div id="m-pick-slot"></div>
    ${t.t==="c"&&n.length?`<div class="m-sec"><h3>Composi\xE7\xE3o acion\xE1ria<small>participa\xE7\xF5es relevantes</small></h3>${wv(n)}</div>`:""}
    ${o.length>1?`<div class="m-sec"><h3>Quem controla<small>do controlador final at\xE9 aqui</small></h3><ol class="m-chain">${o.slice().reverse().map((m,_,g)=>{let p=g[_+1],M=p!=null?Sv(m,p):null,E=M==null?"":R.ef[M]&2?`bloco de controle \xB7 ${ii(R.ep[M])}`:`controla com ${ii(R.ep[M])}`;return`<li data-go="${m}" class="${m===i?"me":""}"><span class="nm">${ae(R.nodes[m].n)}</span><span class="pc">${E}</span></li>`}).join("")}</ol></div>`:""}
    ${n.length?`<div class="m-sec"><h3>${t.t==="c"?"Acionistas":"Quem \xE9 dono"}<small>${ln(n.length,"acionista","acionistas")} relevante${n.length===1?"":"s"}</small></h3>${kr(Ui.inc,8,"inc")}</div>`:""}
    ${s.length?`<div class="m-sec"><h3>${t.t==="c"?"Participa\xE7\xF5es em outras":"Participa\xE7\xF5es"}<small>${ln(s.length,"empresa","empresas")}</small></h3>${kr(Ui.out,8,"out")}</div>`:""}
    ${r.length?`<div class="m-sec"><h3>${t.t==="c"?"Quem do conselho ou da diretoria tamb\xE9m est\xE1 em outras":"Cargos"}<small>${ln(r.length,t.t==="c"?"pessoa":"companhia",t.t==="c"?"pessoas":"companhias")}</small></h3>${kr(Ui.brd,8,"brd")}</div>`:""}
    <p class="m-foot">Participa\xE7\xF5es acima de 5% e controladores, como declarados no Formul\xE1rio de Refer\xEAncia de cada companhia \xE0 CVM${t.v?"; valor estimado = participa\xE7\xE3o \xD7 valor de mercado":""}.</p>`,Fc()}function Tv(i){let t=R.groups[i],e=t.m.filter(a=>R.nodes[a].t==="c").sort((a,o)=>(R.nodes[o].mc||0)-(R.nodes[a].mc||0)),n=R.nodes[t.h];Ui={cos:e.map(a=>ys(a,R.nodes[a].mc?Ye(R.nodes[a].mc):"",[R.nodes[a].tk,a===t.h?"topo do grupo":""].filter(Boolean).join(" \xB7 "),!1))};let s=e.reduce((a,o)=>a+(R.nodes[o].mc||0),0),r=s?`<div class="m-bar">${e.filter(a=>R.nodes[a].mc).slice(0,12).map(a=>`<span data-go="${a}" style="flex:${R.nodes[a].mc/s};--c:${_i(R.nodes[a])}" title="${ae(R.nodes[a].n)} \xB7 ${Ye(R.nodes[a].mc)}"></span>`).join("")}</div>`:"";Ut("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${Oi(t.sector)}"><i></i>Grupo econ\xF4mico \xB7 ${ae(Hr[t.sector]?.[1]||"")}</div>
    <div class="m-head"><span class="m-badge" style="--c:${Oi(t.sector)}">${Li("cias")}</span><div><h2>Grupo ${ae(t.n)}</h2><p>${ln(t.nc,"companhia aberta","companhias abertas")} \xB7 ${ln(t.m.length,"entidade","entidades")}</p></div></div>
    <div class="m-stats">
      <div class="m-stat"><span>Valor de mercado</span><b>${ae(t.mc?Ye(t.mc):"\u2013")}</b></div>
      <div class="m-stat"><span>Companhias</span><b>${Ze(t.nc)}</b></div>
      <div class="m-stat"><span>Entidades</span><b>${Ze(t.m.length)}</b></div>
    </div>
    ${r}
    <div class="m-btns"><button class="m-btn primary wide" type="button" data-act="tree" data-node="${t.h}">${Li("tree")}Estrutura a partir de ${ae(cn(n.n))}</button></div>
    ${t.r.length?`<div class="m-sec"><h3>Controle final</h3>${kr(t.r.map(a=>ys(a,"",si(R.nodes[a]),!0)),6)}</div>`:""}
    <div class="m-sec"><h3>Companhias do grupo<small>valor de mercado</small></h3>${kr(Ui.cos,12,"cos")}</div>
    <p class="m-foot">Grupo = companhias que chegam ao mesmo topo seguindo, em cada uma, o acionista controlador de maior participa\xE7\xE3o.</p>`,Fc()}function Fc(){let i=Ut("#m-panel");innerWidth<=760&&(i.hidden||it.mode!=="world")&&i.classList.add("peek"),i.hidden=!1,document.body.classList.add("panel-open"),Ut("#m-panel-body").scrollTop=0,Pn(),clearTimeout(Pn.t),Pn.t=setTimeout(Pn,450)}function Qf(){Ut("#m-panel").hidden=!0,document.body.classList.remove("panel-open"),Pn(),clearTimeout(Pn.t),Pn.t=setTimeout(Pn,450)}function Ev(i,t){let e=l=>!(R.nodes[l].t==="j"&&(R.nodes[l].c==="fund"||R.nodes[l].c==="pen"))||l===i||l===t,n=new Int32Array(R.N).fill(-1),s=new Int32Array(R.N).fill(-1),r=[i];for(n[i]=i;r.length;){let l=r.shift();if(l===t)break;if(l!==i&&!e(l))continue;let c=(h,f)=>{n[h]===-1&&(n[h]=l,s[h]=f,r.push(h))};for(let h of R.out[l])c(R.et[h],h);for(let h of R.inc[l])c(R.es[h],h);for(let h of R.brd[l])c(R.bs[h]===l?R.bt[h]:R.bs[h],-2-h)}if(n[t]===-1)return null;let a=[t],o=[];for(let l=t;l!==i;l=n[l])o.unshift(s[l]),a.unshift(n[l]);return{path:a,ev:o}}function Dc(i,t,{push:e=!0}={}){let n=Ev(i,t);if(!n){so(`N\xE3o h\xE1 liga\xE7\xE3o entre ${cn(R.nodes[i].n)} e ${cn(R.nodes[t].n)} sem passar por gestoras ou fundos`);return}it.mode==="tree"&&Di(!1),it.mode="path",it.sel=-1,Wr();let s=new Set(n.path),r=new Set,a=new Set;for(let l of n.ev)l>=0?r.add(l):a.add(-2-l);if(it.pathIds=[i,t],it.forceVis&&(it.forceVis=null,At.setVisible(Bn)),n.path.some(l=>!Bn[l])){it.forceVis=new Set(n.path);let l=Bn.slice();for(let c of n.path)l[c]=1;At.setVisible(l)}Bi(),ri(s,r,a,n.path,.85,!0),Ut("#m-mode").hidden=!1,Ut("#m-mode-text").innerHTML=`<span class="m-mode-k">Caminho</span><b>${ae(cn(R.nodes[i].n))} \u2192 ${ae(cn(R.nodes[t].n))}</b><span class="m-mode-n">${ln(n.ev.length,"passo","passos")}</span>`;let o=n.ev.map(l=>{let c=d=>`<b data-go="${d}">${ae(R.nodes[d].n)}</b>`;if(l>=0){let d=R.es[l],m=R.et[l],_=R.ep[l],g=R.ef[l]&1;return`<li>${c(d)} ${g?"controla":"tem"} ${_>=0?`${ii(_)} de`:"participa\xE7\xE3o em"} ${c(m)}</li>`}let h=-2-l,f=R.bs[h],u=R.bt[h];return`<li>${c(f)} est\xE1 ${{P:"na presid\xEAncia do conselho",E:"na presid\xEAncia executiva",C:"no conselho de administra\xE7\xE3o",D:"na diretoria"}[R.br[h]]||"na administra\xE7\xE3o"} de ${c(u)}</li>`});Ut("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${Pc}"><i></i>Caminho mais curto</div>
    <div class="m-head"><span class="m-badge" style="--c:${Pc}">${Li("path")}</span><div><h2>Como se conectam</h2><p>${ae(cn(R.nodes[i].n))} e ${ae(cn(R.nodes[t].n))}</p></div></div>
    <div class="m-sec"><h3>O caminho<small>${ln(n.ev.length,"liga\xE7\xE3o","liga\xE7\xF5es")}</small></h3><ol class="m-path">${o.join("")}</ol></div>
    <div class="m-btns"><button class="m-btn wide" type="button" data-sel="${i}">Voltar para ${ae(cn(R.nodes[i].n))}</button><button class="m-btn wide" type="button" data-sel="${t}">Ir para ${ae(cn(R.nodes[t].n))}</button></div>
    <p class="m-foot">Liga\xE7\xF5es por participa\xE7\xE3o acion\xE1ria (5% ou mais, ou controle) e por pessoas que est\xE3o no conselho ou na diretoria das duas. Gestoras e fundos n\xE3o contam como ponte.</p>`,Fc(),At.flyToNodes(n.path,{minSpan:20}),e&&Ss(`c/${R.nodes[i].id}/${R.nodes[t].id}`)}async function Ms(i,{push:t=!0}={}){let e=R.nodes[i],n=[];try{await Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1200))])}catch{}if(e.t==="c"&&e.k)try{n=(await fetch(`data/cias/perfil/${encodeURIComponent(e.k)}.json`,{cache:"no-cache"}).then(a=>a.ok?a.json():{})).participacoes||[]}catch{n=[]}let s=it.mode!=="tree";s&&await Nc(),it.mode="tree",it.sel=i,it.group=-1,it.treeFocus=i,Tu(),Wr(),Bi(),ao(-1),it.hover=-1,ri(null),document.body.classList.add("in-tree"),Eu(i),Fi.open(i,n,{from:s?At.project(i,{}):null}),Ut("#m-mode").hidden=!1,Ut("#m-mode-text").innerHTML=`<span class="m-mode-k">Estrutura societ\xE1ria</span><b>${ae(e.n)}</b>`,Pn(),t&&Ss(`e/${e.id}`)}function Nc(){let i=Ut("#m-fade");return!i||Rc?Promise.resolve():(i.classList.add("on"),clearTimeout(Nc.t),Nc.t=setTimeout(()=>i.classList.remove("on"),260),new Promise(t=>setTimeout(t,170)))}function Di(i=!0){it.mode==="tree"&&(Nc(),Fi.close(),document.body.classList.remove("in-tree")),it.mode="world",Ut("#m-mode").hidden=!0,it.pathIds=null,it.forceVis&&(it.forceVis=null,At.setVisible(Bn)),i&&(it.sel>=0?_n(it.sel):(ri(null),Ss("")))}function Av(i,t=9){let e=io(i.trim());if(e.length<2)return[];let n=e.split(/\s+/),s=[];for(let r of R.groups)r.nc<2||n.every(a=>r.f.includes(a))&&s.push({g:r.i,s:(r.f.startsWith(e)?100:50)+Math.log10(r.mc||10)});for(let r of R.nodes){if(!Bn[r.i]&&r.t!=="c")continue;let a=0;r.f===e||r.tk&&io(r.tk)===e?a=120:r.f.startsWith(e)||r.tk&&io(r.tk).startsWith(e)?a=90:n.every(o=>r.f.includes(o))&&(a=r.f.split(/\s+/).some(o=>o.startsWith(n[0]))?60:35),a&&(a+=r.t==="c"?12+Math.log10(r.mc||1e6):Math.log10(r.v||1e6)+R.deg[r.i]*.2,s.push({i:r.i,s:a}))}return s.sort((r,a)=>a.s-r.s).slice(0,t)}function Cv(i){if(!i.length)return'<li class="none">Nada com esse nome no mapa.</li>';let t=[["Grupos econ\xF4micos",i.filter(n=>n.g!=null)],["Companhias",i.filter(n=>n.i!=null&&R.nodes[n.i].t==="c")],["Pessoas e investidores",i.filter(n=>n.i!=null&&R.nodes[n.i].t!=="c")]],e=0;return t.filter(([,n])=>n.length).map(([n,s])=>`<li class="grp" role="presentation">${n}</li>`+s.map(r=>{let a=e++;if(r.g!=null){let l=R.groups[r.g];return`<li role="option" data-idx="${a}" aria-selected="false"><span class="m-dot" style="--c:${Oi(l.sector)}"></span><span class="m-r-txt"><b>Grupo ${ae(l.n)}</b><small>${ln(l.nc,"companhia","companhias")}${l.mc?` \xB7 ${Ye(l.mc)}`:""}</small></span></li>`}let o=R.nodes[r.i];return`<li role="option" data-idx="${a}" aria-selected="false"><span class="m-dot" style="--c:${_i(o)}"></span><span class="m-r-txt"><b>${ae(o.n)}</b><small>${ae(o.t==="c"?[o.tk,o.mc?Ye(o.mc):"capital fechado",o.st].filter(Boolean).join(" \xB7 "):[si(o),o.v?`\u2248 ${Ye(o.v)}`:""].filter(Boolean).join(" \xB7 "))}</small></span></li>`}).join("")).join("")}function tp(i,t,e){let n=[],s=0,r=()=>{n=Av(i.value),n=[...n.filter(o=>o.g!=null),...n.filter(o=>o.i!=null&&R.nodes[o.i].t==="c"),...n.filter(o=>o.i!=null&&R.nodes[o.i].t!=="c")],s=Math.min(s,Math.max(0,n.length-1)),t.hidden=!i.value.trim(),t.innerHTML=Cv(n),t.querySelectorAll("[data-idx]").forEach(o=>o.setAttribute("aria-selected",String(+o.dataset.idx===s))),i.closest("[role=combobox]")?.setAttribute("aria-expanded",String(!t.hidden))},a=o=>{o&&(i.value="",t.hidden=!0,i.blur(),e(o))};i.addEventListener("input",()=>{s=0,r()}),i.addEventListener("focus",()=>{i.value.trim()&&r()}),i.addEventListener("keydown",o=>{o.key==="ArrowDown"||o.key==="ArrowUp"?(o.preventDefault(),s=(s+(o.key==="ArrowDown"?1:-1)+n.length)%Math.max(1,n.length),r()):o.key==="Enter"?(o.preventDefault(),a(n[s])):o.key==="Escape"&&On.on?co():o.key==="Escape"&&(i.value="",t.hidden=!0,i.blur())}),t.addEventListener("pointerdown",o=>{let l=o.target.closest("[data-idx]");l&&(o.preventDefault(),a(n[+l.dataset.idx]))}),document.addEventListener("pointerdown",o=>{!t.contains(o.target)&&o.target!==i&&(t.hidden=!0)})}var gu="groups";function xu(){let i=Ut("#m-rank"),t=Ut("#m-tab-note"),e="";if(gu==="groups"){t.textContent="Grupos econ\xF4micos pelo valor de mercado das companhias abertas que re\xFAnem.";let n=R.groups.filter(r=>r.nc>=2),s=n[0]?.mc||1;e=n.slice(0,60).map(r=>`<li data-group="${r.i}" class="${it.group===r.i?"on":""}" style="--c:${Oi(r.sector)};--w:${((r.mc||0)/s*100).toFixed(1)}%"><b>${ae(r.n)}</b><span class="v">${r.mc?Ye(r.mc).replace("R$ ",""):""}</span>
      <small>${ln(r.nc,"companhia","companhias")}${r.r.length?` \xB7 ${ae(r.r.slice(0,2).map(a=>cn(R.nodes[a].n)).join(", "))}`:""}</small><i class="m-rank-bar"></i></li>`).join("")}else if(gu==="investors"){t.textContent="Quem tem mais valor em participa\xE7\xF5es diretas (participa\xE7\xE3o \xD7 valor de mercado).";let n=R.nodes.filter(r=>r.t!=="c"&&r.v).sort((r,a)=>a.v-r.v).slice(0,60),s=n[0]?.v||1;e=n.map(r=>`<li data-go="${r.i}" class="${it.sel===r.i?"on":""}" style="--c:${_i(r)};--w:${(r.v/s*100).toFixed(1)}%"><b>${ae(cn(r.n))}</b><span class="v">${Ye(r.v).replace("R$ ","")}</span>
      <small>${ae(si(r))} \xB7 ${ln(R.out[r.i].length,"participa\xE7\xE3o","participa\xE7\xF5es")}</small><i class="m-rank-bar"></i></li>`).join("")}else{t.textContent="Pessoas e empresas que mais ligam companhias entre si: participa\xE7\xF5es e cadeiras em conselhos e diretorias.";let n=a=>new Set([...R.out[a.i].map(o=>R.et[o]),...R.brd[a.i].map(o=>R.bt[o])].filter(o=>R.nodes[o].t==="c")).size,s=R.nodes.filter(a=>a.t==="p"||a.t==="j").map(a=>[a,n(a)]).filter(([,a])=>a>=3).sort((a,o)=>o[1]-a[1]||(o[0].v||0)-(a[0].v||0)).slice(0,60),r=s[0]?.[1]||1;e=s.map(([a,o])=>`<li data-go="${a.i}" class="${it.sel===a.i?"on":""}" style="--c:${_i(a)};--w:${(o/r*100).toFixed(1)}%"><b>${ae(cn(a.n))}</b><span class="v">${o}</span>
      <small>${ae(si(a))} \xB7 ${o} companhias</small><i class="m-rank-bar"></i></li>`).join("")}i.innerHTML=e}function Oc(){for(let i of Ut("#m-rank").children)i.classList.toggle("on",i.dataset.group!=null&&+i.dataset.group===it.group||i.dataset.go!=null&&+i.dataset.go===it.sel)}var Rv=[["tower","Companhia aberta",'<svg viewBox="0 0 20 20"><path d="M6 18V5h8v13z" fill="#141b29"/><path d="M6 5h8v1.8H6z" fill="var(--c)"/><path d="M7.6 8.4h1.3v1.3H7.6zM11 8.4h1.3v1.3H11zM9.3 11h1.3v1.3H9.3zM7.6 13.6h1.3v1.3H7.6zM11 13.6h1.3v1.3H11zM11 11h1.3v1.3H11z" fill="#ffd9a0"/></svg>'],["block","Capital fechado",'<svg viewBox="0 0 20 20"><path d="M4 17v-6h12v6z" fill="#141b29"/><path d="M4 11h12v1.5H4z" fill="var(--c)"/><path d="M6 13.6h1.3v1.3H6zM12.6 13.6h1.3v1.3h-1.3z" fill="#ffd9a0"/></svg>'],["sub","Controlada em comum",'<svg viewBox="0 0 20 20"><path d="M4 17v-6h12v6z" fill="#141b29"/><path d="M4 11h12v1.5H4z" fill="#7fd6b4"/><path d="M9.3 13.6h1.3v1.3H9.3z" fill="#ffd9a0"/></svg>'],["pawn","Pessoa f\xEDsica",'<svg viewBox="0 0 20 20"><circle cx="10" cy="6" r="2.6" fill="#f0c9a0"/><path d="M7.4 15.5 8.4 9.4h3.2l1 6.1z" fill="#f0c9a0"/><ellipse cx="10" cy="16" rx="4.6" ry="1.6" fill="#c99e74"/></svg>'],["tile","Holding ou empresa",'<svg viewBox="0 0 20 20"><path d="M5 8.5 10 6l5 2.5v6L10 17l-5-2.5z" fill="#5f7088"/><path d="M5 8.5 10 6l5 2.5-5 2.5z" fill="#a9bdd6"/></svg>'],["inv","Gestora, fundo ou governo",'<svg viewBox="0 0 20 20"><path d="M10 2.5 15 9 10 17.5 5 9z" fill="#b3a6f7"/><path d="M10 2.5 15 9H5z" fill="#d6cffb"/><path d="M10 17.5 15 9H10z" fill="#8576d6"/></svg>']],Pv={tower:"Aberta",block:"Fechada",tile:"Holding",sub:"Controlada",pawn:"Pessoa",inv:"Gestora"},Iv=()=>Rv.map(([i,t,e])=>`<button type="button" class="m-key-i" data-shape="${i}" title="Destacar no mapa: ${t}" style="--c:${Oi("util")}">${e}<span class="l">${t}</span><span class="s">${Pv[i]}</span></button>`).join("")+'<span class="m-key-sep"></span><span class="m-key-i m-key-ctl" title="O feixe corre de quem \xE9 dono para o que \xE9 possu\xEDdo"><i class="m-key-ln"></i><span class="l">Controla</span><span class="s">Controla</span></span><span class="m-key-i m-key-ctl part" title="Participa\xE7\xE3o sem controle"><i class="m-key-ln"></i><span class="l">Participa</span><span class="s">Participa</span></span>';function Au(){let i=R.data.mapa,t=i.plates.map(()=>({n:0,listed:0,mc:0}));for(let e=0;e<R.N;e++){let n=R.nodes[e],s=t[i.plate[e]];n.t==="c"&&(s.n++,n.mc&&(s.listed++,s.mc+=n.mc))}return t}var Vr=i=>Hr[i.c]?.[1]||i.c,Lv=i=>Hr[i.c]?.[2]||i.c,lo=i=>Oi(i.c);function Dv(){let i=Au(),t=R.data.mapa.plates.map((e,n)=>n).sort((e,n)=>i[n].mc-i[e].mc);Ut("#m-legend").innerHTML=`<div class="m-lg-sec">${t.map(e=>{let n=R.data.mapa.plates[e];return`<button class="lg" type="button" data-plate="${e}"><i style="--c:${lo(n)}"></i><span>${ae(Vr(n))}</span><small>${Ze(i[e].n)}</small></button>`}).join("")}</div>`,Ut("#m-key").innerHTML=Iv()}function Ss(i){let t=i?`#${i}`:"";location.hash!==t&&history.replaceState(null,"",t||location.pathname+location.search)}function ep(){let i=decodeURIComponent(location.hash.replace(/^#/,"")),[t,e,n]=i.split("/"),s=r=>r?R.byId.has(r)?R.byId.get(r):r.startsWith("k")&&R.byK.has(r.slice(1))?R.byK.get(r.slice(1)):R.bySlug.has(r)?R.bySlug.get(r):R.byK.has(r)?R.byK.get(r):-1:-1;t==="n"&&s(e)>=0?_n(s(e),{push:!1}):t==="s"&&R.bySlug.has(e)?_n(R.bySlug.get(e),{push:!1}):t==="g"&&R.groups[+e]?Lc(+e,{push:!1}):t==="e"&&s(e)>=0?Ms(s(e),{push:!1}):t==="c"&&s(e)>=0&&s(n)>=0?Dc(s(e),s(n),{push:!1}):t==="setor"&&Vf(e)>=0?ro(Vf(e),{push:!1}):(t==="n"||t==="s"||t==="e")&&so("Essa entidade n\xE3o est\xE1 no mapa: ela n\xE3o tem participa\xE7\xE3o relevante em companhia aberta.")}var Fn={pool:[],used:new Map,layer:null,t:0},Cc=[],Gr=0;function Nv(){let i=performance.now();if(i-Gr<300)return Cc;Gr=i,Cc=[];for(let t of document.querySelectorAll(".m-top > :not(.m-pop), #m-explore, #m-panel, .m-nav > *, #m-hud, #m-key, #m-mode, #m-hint")){if(t.hidden||t.offsetParent===null)continue;let e=t.getBoundingClientRect();e.width&&e.height&&Cc.push([e.left-6,e.top-6,e.right+6,e.bottom+6])}return Cc}var no=null;function Uv(){if(no)return no;no=R.data.mapa.plates.map(()=>[]);for(let i of R.labelOrder)R.nodes[i].t==="c"&&no[R.data.mapa.plate[i]].push(i);return no}function Fv(){for(let[i,t]of Fn.used)t.classList.remove("on"),Fn.used.delete(i),Fn.pool.push(t)}function Xf(i){let t=R.nodes[i];return it.rel&&it.rel.has(i)?[cn(t.n),it.rel.get(i)]:t.t==="c"?[cn(t.n),[t.tk,t.mc?Ye(t.mc).replace("R$ ","R$ ").toUpperCase():"capital fechado"].filter(Boolean).join(" \xB7 ")]:[cn(t.n),[si(t),t.v?`\u2248 ${Ye(t.v)}`:""].filter(Boolean).join(" \xB7 ")]}var Cu=[];function Ov(){let i=Au(),t=Ut("#m-plates");t.innerHTML="",R.data.mapa.plates.forEach((e,n)=>{let s=document.createElement("button");s.type="button",s.className="m-plate",s.dataset.plate=n,s.style.setProperty("--c",lo(e));let r=ln(i[n].n,"companhia","companhias");s.innerHTML=`<b><span class="full">${ae(Vr(e))}</span><span class="short">${ae(Lv(e))}</span></b><small>${r}${i[n].mc?` \xB7 ${Ye(i[n].mc)}`:""}</small>`,s.title=`Ver o setor ${Vr(e)} inteiro`,t.appendChild(s),Cu[n]={el:s,p:e}})}var Bv={};function zv(i){let t=At.pxPerUnit();Cu.forEach(({el:e},n)=>{let s=At.plates[n],r=At.projectPoint(s.x0+.9,At.PLATE_H+.1,s.z0+.7,Bv),a=(s.x1-s.x0)*t,o=!!r.f&&a>46&&it.mode!=="tree";if(e.classList.toggle("on",o),e.classList.toggle("compact",a<210),e.classList.toggle("dim",it.sector>=0&&it.sector!==n),!o)return;e.style.transform=`translate3d(${r.x.toFixed(1)}px, ${r.y.toFixed(1)}px, 0)`,e.style.maxWidth=`${Math.max(60,a-18).toFixed(0)}px`;let l=e.getBoundingClientRect();l.width&&i.push([l.left-4,l.top-4,l.right+4,l.bottom+4])})}function kv(){if(!At||it.mode==="tree"){for(let u of Fn.used.values())u.classList.remove("on");for(let{el:u}of Cu)u.classList.remove("on");return}let i=innerWidth,t=innerHeight,e=[...Nv()];zv(e);let n=(u,d,m,_)=>{if(u<8||d<8||m>i-8||_>t-8)return!1;for(let g of e)if(u<g[2]&&m>g[0]&&d<g[3]&&_>g[1])return!1;return!0},s=At.pxPerUnit(),r=sn((s-6)/40,0,1),a=Math.round((Xs?6:12)+r*(Xs?26:60)),o=it.hl,l;if(o)l=[...o].sort((u,d)=>Ic(d)-Ic(u)).slice(0,60);else if(it.sector<0&&r<.5){let u=Uv(),d=s*s,m=At.plates.map(_=>sn(Math.round((_.x1-_.x0)*(_.z1-_.z0)*d/42e3),1,6));l=[];for(let _=0;_<6;_++)for(let g=0;g<u.length;g++)_<m[g]&&u[g][_]!=null&&l.push(u[g][_]);a=Math.max(a,Xs?12:34)}else it.sector>=0?(l=R.labelOrder.filter(u=>R.data.mapa.plate[u]===it.sector&&R.nodes[u].t==="c"),a=Math.max(a,Xs?12:28)):l=R.labelOrder.slice(0,260);let c=new Map,h={},f=0;for(let u of l){if(f>=a)break;if(c.has(u)||!Bn[u]&&!it.forceVis?.has(u))continue;let d=R.nodes[u],m=o&&o.has(u);if(!m&&d.t!=="c"&&!At.sky[u]&&r<.55||(At.project(u,h),!h.f))continue;let[_,g]=Xf(u),p=d.t==="c"&&R.crank[u]<10,M=Math.max(_.length*(p?7.6:6.9),g.length*6.1)+14,E=30,v=null;for(let[b,S]of[["r",!1],["l",!1],["r",!0],["l",!0]]){let P=b==="r"?h.x+14:h.x-14-M,y=S?h.y+8:h.y-34;if(n(P,y,P+M,y+E)){v={side:b,below:S,x0:P,y0:y};break}}v&&(e.push([v.x0,v.y0,v.x0+M,v.y0+E],[h.x-4,h.y-4,h.x+4,h.y+4]),c.set(u,{x:h.x,y:h.y,side:v.side,below:v.below,a:1,hl:m,big:p}),f++)}for(let[u,d]of Fn.used)c.has(u)||(d.classList.remove("on"),Fn.used.delete(u),Fn.pool.push(d));for(let[u,d]of c){let m=Fn.used.get(u);if(m)!m.classList.contains("on")&&performance.now()-m._t>20&&m.classList.add("on");else{m=Fn.pool.pop()||Object.assign(document.createElement("div"),{className:"m-lab"}),m.parentNode||Fn.layer.appendChild(m);let[_,g]=Xf(u);m.innerHTML=`<i class="m-lab-dot"></i><span class="m-lab-ln"></span><span class="m-lab-tx"><b>${ae(_)}</b><small>${ae(g)}</small></span>`,m.classList.toggle("rel",!!(it.rel&&it.rel.has(u))),m.classList.toggle("relc",!!(it.rel&&/^control/.test(it.rel.get(u)||""))),m.dataset.i=u,m.classList.remove("on"),m._t=performance.now(),Fn.used.set(u,m)}m.classList.toggle("l",d.side==="l"),m.classList.toggle("b",!!d.below),m.classList.toggle("hl",!!d.hl),m.classList.toggle("big",d.big),m.style.transform=`translate3d(${d.x.toFixed(1)}px, ${d.y.toFixed(1)}px, 0)`,m.style.setProperty("--a","1")}}function _u(){let i=At.plateAt(innerWidth/2+At.view.offX,innerHeight/2+At.view.offY),t=i>=0?R.data.mapa.plates[i]:null,e=np/Math.max(1,At.cam.d),n=e<1.45?"":`<span>ZOOM ${e.toFixed(1).replace(".",",")}\xD7</span>${t?`<span class="m-hud-sec" style="--c:${lo(t)}">${ae(Vr(t).toUpperCase())}</span>`:""}`;n!==_u.last&&(Ut("#m-hud").innerHTML=n,_u.last=n)}var np=160;function ao(i,t,e){let n=Ut("#m-tip");if(i<0||Xs){n.hidden=!0;return}let s=R.nodes[i],r=[];if(s.t==="c"){r.push([s.tk||"Capital fechado",s.mc?Ye(s.mc):""]);let c=jf(i);c>=0&&r.push(["Controle",cn(R.nodes[c].n)])}else r.push([si(s),s.v?`\u2248 ${Ye(s.v)}`:""]);let a=new Set([...R.out[i].map(c=>R.et[c]),...R.inc[i].map(c=>R.es[c])]).size;r.push(["Liga\xE7\xF5es",Ze(a+R.brd[i].length)]),n.innerHTML=`<div class="m-tip-head"><i style="background:${_i(s)}"></i><b>${ae(s.n)}</b></div>${r.map(([c,h])=>`<div class="row"><span>${ae(c)}</span><span>${ae(h)}</span></div>`).join("")}<div class="row muted"><span>${At.sky[i]?"Paira sobre o que possui \xB7 ":At.isGround[i]?"":"Na pra\xE7a da companhia \xB7 "}clique para ver as liga\xE7\xF5es</span></div>`,n.hidden=!1;let o=n.offsetWidth,l=n.offsetHeight;n.style.left=`${sn(t+18,8,innerWidth-o-8)}px`,n.style.top=`${e+18+l>innerHeight-8?e-l-14:e+18}px`}function Pn(){if(Gr=0,!At)return;let i=Ut("#m-explore"),t=Ut("#m-panel"),e=Ut("#m-key").getBoundingClientRect(),n=t&&!t.hidden,s=0,r=0,a=0,o=Ut(".m-top").getBoundingClientRect().bottom+6;innerWidth>760?(i&&!i.classList.contains("collapsed")&&i.offsetParent&&(s=i.getBoundingClientRect().right),r=n?innerWidth-t.offsetLeft:62,e.height&&(a=innerHeight-e.top+6)):n?a=t.offsetHeight:a=e.height?innerHeight-e.top+6:64,At.setInsets(s,r,it.mode==="tree"?0:o,a);let l=Ut("#m-mode"),c=l&&!l.hidden?Math.max(o,l.getBoundingClientRect().bottom+6):o;Fi?.setFree(s,r,a,c)}var ip=0,$f=0;function sp(i){ip=requestAnimationFrame(sp),!document.hidden&&(it.mode==="tree"?Fi.frame(i):(At.update(i),At.render(),i-$f>32&&(kv(),_u(),$f=i)))}var Ni=new Map,rn=null,vs=null,qf=0,vu=0,yu=null;function Hv(i){if(it.mode==="tree")return;if(i.currentTarget.setPointerCapture(i.pointerId),Ni.set(i.pointerId,{x:i.clientX,y:i.clientY}),it.lastInput=performance.now(),Bi(),co(),At.touch(),At.cam.vx=At.cam.vz=0,At.cam.fly=null,Ni.size===2){let[e,n]=[...Ni.values()];vs={d:Math.hypot(e.x-n.x,e.y-n.y),mx:(e.x+n.x)/2,my:(e.y+n.y)/2},rn=null;return}rn={x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,moved:!1,hist:[{x:i.clientX,y:i.clientY,t:performance.now()}]}}function Vv(i){if(Ni.has(i.pointerId)&&Ni.set(i.pointerId,{x:i.clientX,y:i.clientY}),it.lastInput=performance.now(),Ni.size&&At?.touch(),it.mode!=="tree"){if(vs&&Ni.size===2){let[t,e]=[...Ni.values()],n=Math.hypot(t.x-e.x,t.y-e.y),s=(t.x+e.x)/2,r=(t.y+e.y)/2;At.zoom(vs.d/Math.max(1,n),s,r),At.pan(s-vs.mx,r-vs.my),vs={d:n,mx:s,my:r};return}if(rn){let t=i.clientX-rn.x,e=i.clientY-rn.y;if(!rn.moved&&Math.hypot(i.clientX-rn.sx,i.clientY-rn.sy)>(Xs?8:4)&&(rn.moved=!0,i.currentTarget.classList.add("dragging"),ao(-1)),rn.moved){At.pan(t,e),rn.x=i.clientX,rn.y=i.clientY;let n=performance.now();for(rn.hist.push({x:i.clientX,y:i.clientY,t:n});rn.hist.length>6||rn.hist.length>2&&n-rn.hist[0].t>100;)rn.hist.shift()}return}i.pointerType==="mouse"&&(yu=[i.clientX,i.clientY],vu||(vu=requestAnimationFrame(Mu)))}}function Mu(){if(vu=0,!yu||it.mode==="tree")return;let[i,t]=yu,e=At.pick(i,t,Bn),n=e<0?At.plateAt(i,t):-1;Ut("#map").classList.toggle("pointing",e>=0||n>=0),e!==it.hover&&(it.hover=e,clearTimeout(Mu.t),it.sel<0&&it.group<0&&!it.shape&&it.mode==="world"&&(Mu.t=setTimeout(()=>{if(!(it.sel>=0||it.group>=0||it.shape||it.mode!=="world"||it.hover!==e))if(e>=0){let r=bu(e);ri(r.nodes,r.edges,r.brd,[e],.5,!1,wu(e,r))}else ri(null)},e>=0?140:90))),e>=0?ao(e,i,t):n>=0&&n!==it.sector?Gv(n,i,t):ao(-1)}function Gv(i,t,e){let n=Ut("#m-tip");if(Xs){n.hidden=!0;return}let s=R.data.mapa.plates[i],r=Au()[i];n.innerHTML=`<div class="m-tip-head"><i style="background:${lo(s)}"></i><b>${ae(Vr(s))}</b></div><div class="row"><span>Companhias</span><span>${Ze(r.n)}</span></div><div class="row"><span>Valor de mercado</span><span>${r.mc?Ye(r.mc):"\u2013"}</span></div><div class="row muted"><span>Clique para ver o setor inteiro</span></div>`,n.hidden=!1;let a=n.offsetWidth,o=n.offsetHeight;n.style.left=`${sn(t+18,8,innerWidth-a-8)}px`,n.style.top=`${e+18+o>innerHeight-8?e-o-14:e+18}px`}function Yf(i){if(Ni.delete(i.pointerId),i.currentTarget.classList.remove("dragging"),vs){Ni.size<2&&(vs=null);return}if(!rn||it.mode==="tree"){rn=null;return}let t=rn;if(rn=null,t.moved){let a=t.hist;if(a.length>=2&&!Rc){let o=a[0],l=a[a.length-1],c=Math.max(16,l.t-o.t);performance.now()-l.t<80&&At.fling((l.x-o.x)/c,(l.y-o.y)/c)}return}let e=performance.now(),n=e-qf<320;qf=e;let s=At.pick(i.clientX,i.clientY,Bn);if(n&&s>=0){Ms(s);return}if(s>=0){_n(s);return}if(n){At.zoom(.55,i.clientX,i.clientY);return}let r=At.plateAt(i.clientX,i.clientY);if(r>=0&&it.mode==="world"){(r!==it.sector||it.sel>=0||it.group>=0)&&ro(r);return}(it.sel>=0||it.group>=0||it.sector>=0||it.shape||it.mode==="path")&&(it.mode==="path"&&Di(!1),_n(-1))}function Wv(i){if(i.preventDefault(),it.lastInput=performance.now(),Bi(),co(),At.touch(),it.mode==="tree")return;let t=Math.exp(i.deltaY*(i.ctrlKey?.012:i.deltaMode===1?.05:.0018));At.zoom(t,i.clientX,i.clientY)}var On={on:!1,t0:0,raf:0};function Xv(i){let t=Ut("#m-intro");if(!t)return;let e=R.nodes.filter(o=>o.t==="c"),n=e.reduce((o,l)=>o+(l.mc||0),0),s=R.nodes.length-e.length;Ut("#m-intro-cap").textContent=`${Ze(e.length)} companhias \xB7 ${Ze(s)} acionistas e conselheiros \xB7 ${Ze(R.M)} participa\xE7\xF5es`;let r=Ut("#m-intro-num");t.hidden=!1,requestAnimationFrame(()=>t.classList.add("on")),Object.assign(On,{on:!0,done:0});let a=o=>{if(!On.on)return;let l=sn(At.introK/.86,0,1),c=1-Math.pow(1-l,3);if(r.textContent=Ze(n*c/1e12,2),At.introK>=1&&!On.done&&(On.done=o),On.done&&o-On.done>1800){co(!0);return}On.raf=requestAnimationFrame(a)};On.raf=requestAnimationFrame(a)}function co(i=!1){if(!On.on)return;On.on=!1,cancelAnimationFrame(On.raf);let t=Ut("#m-intro");t.classList.remove("on"),setTimeout(()=>{t.hidden=!0},900),i||At.skipIntro(),document.body.classList.remove("intro"),$s.get("mundo-hint",0)||(oo=setTimeout(()=>{it.sel<0&&it.mode==="world"&&(Ut("#m-hint").hidden=!1,Gr=0,oo=setTimeout(Bi,9e3))},1400))}var oo=0;function Bi(){let i=Ut("#m-hint");i&&!i.hidden&&(i.hidden=!0,$s.set("mundo-hint",1),Gr=0),clearTimeout(oo)}function $v(i){let t=R.data.mapa,e=t.plates[i],n=[];for(let b=0;b<R.N;b++)t.plate[b]===i&&n.push(b);let s=(b,S)=>(R.nodes[S].mc||0)-(R.nodes[b].mc||0)||R.nodes[b].n.localeCompare(R.nodes[S].n),r=lo(e);Ui={};let a=n.filter(b=>R.nodes[b].t==="c").sort(s),o=a.filter(b=>R.nodes[b].mc),l=o.reduce((b,S)=>b+R.nodes[S].mc,0),c=new Map;for(let b of a){let S=R.nodes[b].st||"Outros";(c.get(S)||c.set(S,[]).get(S)).push(b)}let h=[...c.entries()].map(([b,S])=>[b,S,S.reduce((P,y)=>P+(R.nodes[y].mc||0),0)]).sort((b,S)=>S[2]-b[2]||S[1].length-b[1].length),f=h.map(([b,S,P],y)=>(Ui[`seg${y}`]=S.map(A=>ys(A,R.nodes[A].mc?Ye(R.nodes[A].mc):"",[R.nodes[A].tk||"capital fechado",R.nodes[A].g!=null&&R.groups[R.nodes[A].g]?.nc>=2?`grupo ${R.groups[R.nodes[A].g].n}`:""].filter(Boolean).join(" \xB7 "),!1)),`<div class="m-seg"><h4><span>${ae(b)}</span><small>${ln(S.length,"companhia","companhias")}${P?` \xB7 ${Ye(P)}`:""}</small></h4>${kr(Ui[`seg${y}`],5,`seg${y}`)}</div>`)).join(""),u=b=>b.m.filter(S=>R.nodes[S].t==="c"&&t.plate[S]===i).length,d=R.groups.filter(b=>b.nc>=2&&u(b)>0).slice(0,12),m=d.map(b=>{let S=u(b);return`<li data-group="${b.i}"><span class="m-dot" style="--c:${Oi(b.sector)}"></span><span class="nm">Grupo ${ae(b.n)}</span><span class="pc">${b.mc?Ye(b.mc):""}</span><small>${S===b.nc?ln(b.nc,"companhia","companhias"):`${S} de ${b.nc} companhias aqui`}${b.r.length?` \xB7 ${ae(b.r.slice(0,2).map(P=>cn(R.nodes[P].n)).join(", "))}`:""}</small></li>`}).join(""),_=new Map;for(let b of a)for(let S of R.inc[b]){let P=R.es[S];if(!At.isInv[P])continue;let y=_.get(P)||{n:0,v:0};y.n++,y.v+=Math.max(0,R.ep[S])/100*(R.nodes[b].mc||0),_.set(P,y)}let p=[..._.entries()].sort((b,S)=>S[1].n-b[1].n||S[1].v-b[1].v).slice(0,8).map(([b,S])=>ys(b,S.v?`\u2248 ${Ye(S.v)}`:"",`${si(R.nodes[b])} \xB7 em ${ln(S.n,"companhia","companhias")} do setor`,!1)).join(""),M=n.filter(b=>!At.sky[b]),E=M.filter(b=>R.nodes[b].t==="p").length,v=M.filter(b=>R.nodes[b].t==="j"||R.nodes[b].t==="s").length;Ut("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${r}"><i></i>Setor</div>
    <div class="m-head"><span class="m-badge" style="--c:${r}">${Li("cias")}</span><div><h2>${ae(Vr(e))}</h2><p>${ln(a.length,"companhia","companhias")} \xB7 ${ln(h.length,"segmento","segmentos")} \xB7 ${ln(d.length,"grupo","grupos")}</p></div></div>
    <div class="m-stats"><div class="m-stat"><span>Valor de mercado</span><b>${ae(l?Ye(l):"\u2013")}</b></div><div class="m-stat"><span>Na bolsa</span><b>${Ze(o.length)}</b></div><div class="m-stat"><span>Capital fechado</span><b>${Ze(a.length-o.length)}</b></div></div>
    <p class="m-note m-sec-note">Nas pra\xE7as do bairro est\xE3o ${ln(E,"pessoa f\xEDsica","pessoas f\xEDsicas")} e ${ln(v,"holding ou empresa","holdings e empresas")} que s\xF3 t\xEAm participa\xE7\xE3o aqui.</p>
    <div class="m-sec"><h3>Companhias por segmento<small>valor de mercado</small></h3>${f}</div>
    ${m?`<div class="m-sec"><h3>Grupos econ\xF4micos<small>valor de mercado</small></h3><ul class="m-list">${m}</ul></div>`:""}
    ${p?`<div class="m-sec"><h3>Investidores mais presentes<small>companhias do setor</small></h3><ul class="m-list">${p}</ul></div>`:""}
    <p class="m-foot">Cada companhia fica no bairro do seu setor, com os donos de uma s\xF3 companhia na pra\xE7a dela; quem tem participa\xE7\xE3o em v\xE1rias paira acima da cidade. Segmento \xE9 o setor de atividade declarado \xE0 CVM.</p>`,Fc()}function qv(){let i=Ut("#map");addEventListener("resize",()=>{At.resize(innerWidth,innerHeight),Fi?.resize(innerWidth,innerHeight),Pn()}),i.addEventListener("pointerdown",Hv),i.addEventListener("pointermove",Vv),i.addEventListener("pointerup",Yf),i.addEventListener("pointercancel",Yf),i.addEventListener("pointerleave",()=>{rn||it.mode==="tree"||(ao(-1),it.hover>=0&&(it.hover=-1,it.sel<0&&it.group<0&&!it.shape&&it.mode==="world"&&ri(null)))}),i.addEventListener("wheel",Wv,{passive:!1}),Fn.layer.addEventListener("click",n=>{let s=n.target.closest(".m-lab");s&&it.mode!=="tree"&&_n(+s.dataset.i)}),Fn.layer.addEventListener("dblclick",n=>{let s=n.target.closest(".m-lab");s&&Ms(+s.dataset.i)}),Ut("#m-plates").addEventListener("click",n=>{let s=n.target.closest("[data-plate]");s&&ro(+s.dataset.plate)});let t=n=>()=>{it.lastInput=performance.now(),it.mode==="tree"?Fi.zoom(n):At.zoom(n)};Ut("#m-zin").onclick=t(.7),Ut("#m-zout").onclick=t(1/.7),Ut("#m-zfit").onclick=()=>{it.mode==="tree"?Fi.fit():At.fitAll()},Ut("#m-layers-btn").onclick=n=>{n.stopPropagation();let s=Ut("#m-layers");s.hidden=!s.hidden,Ut("#m-layers-btn").setAttribute("aria-expanded",String(!s.hidden))},document.addEventListener("pointerdown",n=>{n.target.closest("#m-layers, #m-layers-btn")||(Ut("#m-layers").hidden=!0,Ut("#m-layers-btn").setAttribute("aria-expanded","false"))});for(let n of document.querySelectorAll("#m-layers [data-layer]"))n.checked=!!it.layers[n.dataset.layer],n.onchange=()=>{if(it.layers[n.dataset.layer]=n.checked,$s.set("mundo-layers",it.layers),Jf(),it.sel>=0&&it.mode==="world"){let s=bu(it.sel);ri(s.nodes,s.edges,s.brd,[it.sel],.75,!1,wu(it.sel,s))}else if(it.shape){let s=it.shape;it.shape=null,Gf(s)}xu()};let e=n=>{let s=n.target.closest("[data-plate]");s&&(Ut("#m-layers").hidden=!0,ro(+s.dataset.plate))};Ut("#m-legend").onclick=e,Ut("#m-key").onclick=n=>{let s=n.target.closest("[data-shape]");s&&Gf(s.dataset.shape)},Ut("#m-explore-toggle").onclick=()=>{let n=Ut("#m-explore");n.classList.toggle("collapsed"),Ut("#m-explore-toggle").setAttribute("aria-expanded",String(!n.classList.contains("collapsed"))),$s.set("mundo-explore",!n.classList.contains("collapsed")),Pn()},Ut(".m-tabs").onclick=n=>{let s=n.target.closest("[data-tab]");if(s){gu=s.dataset.tab;for(let r of document.querySelectorAll(".m-tabs [data-tab]"))r.setAttribute("aria-checked",String(r===s));xu(),Ut("#m-rank").scrollTop=0}},Ut(".m-grab").onclick=()=>{Ut("#m-panel").classList.toggle("peek"),setTimeout(Pn,420)},Ut("#m-panel-close").onclick=()=>{it.mode!=="world"&&Di(!1),_n(-1)},Ut("#m-mode-close").onclick=()=>{let n=it.sel;Di(!1),n>=0?_n(n):_n(-1)},document.addEventListener("click",n=>{let s=n.target.closest("[data-more]");if(s){let c=s.dataset.more;s.closest("ul").innerHTML=Ui[c].join("");return}let r=n.target.closest("[data-go]");if(r&&(r.closest("#m-panel")||r.closest("#m-explore"))){let c=+r.dataset.go;if(it.mode==="tree"){Ms(c);return}_n(c);return}let a=n.target.closest("[data-sel]");if(a){Di(!1),_n(+a.dataset.sel);return}let o=n.target.closest("[data-group]");if(o&&(o.closest("#m-panel")||o.closest("#m-explore"))){Lc(+o.dataset.group),innerWidth<=760&&(Ut("#m-explore").classList.add("collapsed"),Pn());return}let l=n.target.closest("[data-act]");if(l){let c=l.dataset.node!=null?+l.dataset.node:it.sel;if(l.dataset.act==="tree"&&c>=0&&Ms(c),l.dataset.act==="world"){let h=it.sel;Di(!1),h>=0&&_n(h)}l.dataset.act==="path"&&c>=0&&Yv(c)}}),document.addEventListener("keydown",n=>{if(!n.target.matches("input[type=search], input[type=text], textarea")){if(n.key==="/"||(n.metaKey||n.ctrlKey)&&n.key.toLowerCase()==="k")n.preventDefault(),Ut("#m-q").focus();else if(n.key==="Escape"&&On.on)co();else if(n.key==="Escape")if(it.mode!=="world"){let s=it.sel;Di(!1),s>=0?_n(s):_n(-1)}else _n(-1);else if(n.key==="+"||n.key==="=")Ut("#m-zin").click();else if(n.key==="-")Ut("#m-zout").click();else if(n.key==="0")Ut("#m-zfit").click();else if(it.mode==="world"&&n.key.startsWith("Arrow")){it.lastInput=performance.now();let s=80;At.pan(n.key==="ArrowLeft"?s:n.key==="ArrowRight"?-s:0,n.key==="ArrowUp"?s:n.key==="ArrowDown"?-s:0)}}}),tp(Ut("#m-q"),Ut("#m-results"),n=>{n.g!=null?Lc(n.g):it.mode==="tree"?Ms(n.i):_n(n.i)}),addEventListener("hashchange",()=>ep())}function Yv(i){let t=Ut("#m-pick-slot");t.innerHTML=`<div class="m-pick"><div class="m-search" role="combobox" aria-expanded="false"><svg class="ic"><use href="#i-path"/></svg>
    <input id="m-pick-q" type="search" placeholder="Com quem? Empresa, pessoa ou investidor" autocomplete="off" aria-label="Conectar com"><ul id="m-pick-res" class="m-results" role="listbox" hidden></ul></div></div>`;let e=Ut("#m-pick-q");tp(e,Ut("#m-pick-res"),n=>{n.g!=null?Dc(i,R.groups[n.g].h):Dc(i,n.i)}),e.focus()}async function Zv(){Fn.layer=Ut("#m-labels"),(innerWidth<=760||$s.get("mundo-explore",!1)===!1)&&Ut("#m-explore").classList.add("collapsed");let i;try{i=await fetch("data/cias/mundo.json",{cache:"no-cache"}).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}catch{Ut("#m-empty").hidden=!1,Ut("#m-empty").textContent="O mapa ainda n\xE3o foi montado. Ele \xE9 refeito a cada atualiza\xE7\xE3o do portal; tente de novo em alguns minutos.",document.body.classList.remove("loading");return}let t=s=>s&&s.v===pu&&s.x&&s.x.length===i.nodes.length;innerHeight>innerWidth*1.15?i.mapa=t(i.mapaV)?i.mapaV:mu(i,{aspect:Hf}):t(i.mapa)||(i.mapa=mu(i)),delete i.mapaV,vv(i);try{At=Bf(Ut("#map"),i,{palette:_v,accent:Pc,reduced:Rc,fixedQuality:/[?&]hq\b/.test(location.search)})}catch(s){console.error(s),Ut("#m-empty").hidden=!1,Ut("#m-empty").textContent="Este navegador n\xE3o conseguiu abrir o Mundo em 3D (WebGL desligado ou indispon\xEDvel). Tente em outro navegador ou atualize o sistema.",document.body.classList.remove("loading");return}i.mapa.plates.forEach((s,r)=>{s.j=r}),Fi=zf(At.renderer,{W:R,colorOf:_i,sectorColor:Oi,kindLabel:si,shortName:cn,brl:Ye,pct:ii,accent:Pc,onPick:(s,r)=>{r?Ms(s):(it.sel=s,Eu(s))},onExt:s=>so(`${s.n}: controlada de capital fechado (${ii(s.pct)})`),canvas:Ut("#map")}),At.resize(innerWidth,innerHeight),Fi.resize(innerWidth,innerHeight),Jf();let n=i.stats||{};Ut("#m-sub").textContent=`${Ze(n.cias||0)} companhias \xB7 ${Ze(n.grupos||0)} grupos \xB7 ${Ze((n.acionistas||0)+(n.pessoas_conselho||0))} acionistas e conselheiros`,Dv(),Ov(),xu(),qv(),Pn(),At.setOffset(At.view.toX,At.view.toY,!0),document.fonts?.ready.then(()=>Pn()),document.body.classList.remove("loading"),At.warmup(),At.fitAll(0),At.cam.x=At.cam.tx,At.cam.z=At.cam.tz,At.cam.d=At.cam.td,At.cam.fly=null,np=At.cam.td,!location.hash&&!Rc&&(document.body.classList.add("intro"),At.intro(5600),Xv(5600)),ip=requestAnimationFrame(sp),ep(),!$s.get("mundo-hint",0)&&!location.hash&&!On.on&&(oo=setTimeout(()=>{it.sel<0&&it.mode==="world"&&(Ut("#m-hint").hidden=!1,Gr=0,oo=setTimeout(Bi,9e3))},2500)),/[?&]debug\b/.test(location.search)&&(window.__mundo={ui:it,W:R,map:At,tree:Fi,select:_n,openTree:Ms,showPath:Dc,selectGroup:Lc,focusSector:ro})}Zv();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
