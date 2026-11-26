/* Portal FPM — Mundo das companhias. Gerado de src/mundo (npm run build); não edite à mão. Inclui three.js (MIT). */
var bf=0,Uh=1,wf=2;var Zs=1,Tf=2,Fr=3,Ss=0,Cn=1,Fi=2,ni=0,Or=1,zn=2,Fh=3,Oh=4,Ef=5;var Js=100,Af=101,Cf=102,Rf=103,Pf=104,If=200,Lf=201,Df=202,Nf=203,Bh=204,zh=205,Uf=206,Ff=207,Of=208,Bf=209,zf=210,kf=211,Hf=212,Vf=213,Gf=214,Ya=0,Za=1,Ja=2,br=3,Ka=4,ja=5,Qa=6,tl=7,Nl=0,Wf=1,Xf=2,Mi=0,Vo=1,Go=2,Wo=3,Ks=4,Xo=5,$o=6,qo=7;var kh=300,bs=301,js=302,Ul=303,Fl=304,Yo=306,el=1e3,Pi=1001,nl=1002,bn=1003,$f=1004;var Zo=1005;var En=1006,Ol=1007;var Oi=1008;var kn=1009,Hh=1010,Vh=1011,Br=1012,Bl=1013,Si=1014,ii=1015,xn=1016,zl=1017,kl=1018,zr=1020,Gh=35902,Wh=35899,Xh=1021,$h=1022,si=1023,Ii=1026,ws=1027,Hl=1028,Vl=1029,Ts=1030,Gl=1031;var Wl=1033,Jo=33776,Ko=33777,jo=33778,Qo=33779,Xl=35840,$l=35841,ql=35842,Yl=35843,Zl=36196,Jl=37492,Kl=37496,jl=37488,Ql=37489,ta=37490,tc=37491,ec=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,lc=37815,cc=37816,hc=37817,uc=37818,fc=37819,dc=37820,pc=37821,mc=36492,gc=36494,xc=36495,vc=36283,_c=36284,ea=36285,yc=36286;var fo=2300,il=2301,$a=2302,Mh=2303,Sh=2400,bh=2401,wh=2402;var qf=3200;var na=0,Yf=1,is="",Sn="srgb",po="srgb-linear",mo="linear",Fe="srgb";var qa=7680;var Zf=519,Jf=512,Kf=513,jf=514,Mc=515,Qf=516,td=517,Sc=518,ed=519,nd=35044;var qh="300 es",xi=2e3,wr=2001;function xp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function id(){let i=go("canvas");return i.style.display="block",i}var zu={},Tr=null;function Yh(...i){let t="THREE."+i.shift();Tr?Tr("log",t,...i):console.log(t,...i)}function sd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function re(...i){i=sd(i);let t="THREE."+i.shift();if(Tr)Tr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=sd(i);let t="THREE."+i.shift();if(Tr)Tr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Os(...i){let t=i.join(" ");t in zu||(zu[t]=!0,re(...i))}function rd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var od={[Ya]:Za,[Ja]:Qa,[Ka]:tl,[br]:ja,[Za]:Ya,[Qa]:Ja,[tl]:Ka,[ja]:br},Li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yc=Math.PI/180,sl=180/Math.PI;function kr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[e&63|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function _p(i,t){return(i%t+t)%t}function Zc(i,t,e){return(1-e)*i+e*t}function eo(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var tu=class tu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tu.prototype.isVector2=!0;var At=tu,Yn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(d!==v||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*v;g<0&&(u=-u,f=-f,m=-m,v=-v,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),E=Math.sin(y);p=Math.sin(p*y)/E,a=Math.sin(a*y)/E,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+v*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+v*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},eu=class eu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ku.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ku.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jc.copy(this).projectOnVector(t),this.sub(Jc)}reflect(t){return this.sub(Jc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eu.prototype.isVector3=!0;var N=eu,Jc=new N,ku=new Yn,nu=class nu{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],v=s[0],g=s[3],p=s[6],y=s[1],E=s[4],_=s[7],b=s[2],S=s[5],P=s[8];return r[0]=o*v+a*y+l*b,r[3]=o*g+a*E+l*S,r[6]=o*p+a*_+l*P,r[1]=c*v+h*y+d*b,r[4]=c*g+h*E+d*S,r[7]=c*p+h*_+d*P,r[2]=u*v+f*y+m*b,r[5]=u*g+f*E+m*S,r[8]=u*p+f*_+m*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kc.makeScale(t,e)),this}rotate(t){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kc.makeRotation(-t)),this}translate(t,e){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nu.prototype.isMatrix3=!0;var fe=nu,Kc=new fe,Hu=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vu=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yp(){let i={enabled:!0,workingColorSpace:po,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Fe&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Fe&&(s.r=Mr(s.r),s.g=Mr(s.g),s.b=Mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?mo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[po]:{primaries:t,whitePoint:n,transfer:mo,toXYZ:Hu,fromXYZ:Vu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:t,whitePoint:n,transfer:Fe,toXYZ:Hu,fromXYZ:Vu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),i}var Ee=yp();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ar,rl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ar===void 0&&(ar=go("canvas")),ar.width=t.width,ar.height=t.height;let s=ar.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ar}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=go("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mp=0,Er=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=kr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jc(s[o].image)):r.push(jc(s[o]))}else r=jc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}var Sp=0,Qc=new N,Nn=class i extends Li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pi,s=Pi,r=En,o=Oi,a=si,l=kn,c=i.DEFAULT_ANISOTROPY,h=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=kr(),this.name="",this.source=new Er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){re(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case el:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case nl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case el:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case nl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=kh;Nn.DEFAULT_ANISOTROPY=1;var iu=class iu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,_=(f+1)/2,b=(p+1)/2,S=(h+u)/4,P=(d+v)/4,M=(m+g)/4;return E>_&&E>b?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=S/n,r=P/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=M/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=P/r,s=M/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this.w=Ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this.w=Ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};iu.prototype.isVector4=!0;var We=iu,ol=class extends Li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Nn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Er(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends ol{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xo=class extends Nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var al=class extends Nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Dl=class Dl{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,v,g)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/lr.setFromMatrixColumn(t,0).length(),r=1/lr.setFromMatrixColumn(t,1).length(),o=1/lr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u+v*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,v=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-v*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bp,t,wp)}lookAt(t,e,n){let s=this.elements;return $n.subVectors(t,e),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ls.crossVectors(n,$n),ls.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ls.crossVectors(n,$n)),ls.normalize(),ya.crossVectors($n,ls),s[0]=ls.x,s[4]=ya.x,s[8]=$n.x,s[1]=ls.y,s[5]=ya.y,s[9]=$n.y,s[2]=ls.z,s[6]=ya.z,s[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],E=n[7],_=n[11],b=n[15],S=s[0],P=s[4],M=s[8],A=s[12],F=s[1],H=s[5],z=s[9],X=s[13],D=s[2],Z=s[6],tt=s[10],et=s[14],gt=s[3],rt=s[7],ft=s[11],dt=s[15];return r[0]=o*S+a*F+l*D+c*gt,r[4]=o*P+a*H+l*Z+c*rt,r[8]=o*M+a*z+l*tt+c*ft,r[12]=o*A+a*X+l*et+c*dt,r[1]=h*S+d*F+u*D+f*gt,r[5]=h*P+d*H+u*Z+f*rt,r[9]=h*M+d*z+u*tt+f*ft,r[13]=h*A+d*X+u*et+f*dt,r[2]=m*S+v*F+g*D+p*gt,r[6]=m*P+v*H+g*Z+p*rt,r[10]=m*M+v*z+g*tt+p*ft,r[14]=m*A+v*X+g*et+p*dt,r[3]=y*S+E*F+_*D+b*gt,r[7]=y*P+E*H+_*Z+b*rt,r[11]=y*M+E*z+_*tt+b*ft,r[15]=y*A+E*X+_*et+b*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15],y=l*f-c*u,E=a*f-c*d,_=a*u-l*d,b=o*f-c*h,S=o*u-l*h,P=o*d-a*h;return e*(v*y-g*E+p*_)-n*(m*y-g*b+p*S)+s*(m*E-v*b+p*P)-r*(m*_-v*S+g*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],y=e*a-n*o,E=e*l-s*o,_=e*c-r*o,b=n*l-s*a,S=n*c-r*a,P=s*c-r*l,M=h*v-d*m,A=h*g-u*m,F=h*p-f*m,H=d*g-u*v,z=d*p-f*v,X=u*p-f*g,D=y*X-E*z+_*H+b*F-S*A+P*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/D;return t[0]=(a*X-l*z+c*H)*Z,t[1]=(s*z-n*X-r*H)*Z,t[2]=(v*P-g*S+p*b)*Z,t[3]=(u*S-d*P-f*b)*Z,t[4]=(l*F-o*X-c*A)*Z,t[5]=(e*X-s*F+r*A)*Z,t[6]=(g*_-m*P-p*E)*Z,t[7]=(h*P-u*_+f*E)*Z,t[8]=(o*z-a*F+c*M)*Z,t[9]=(n*F-e*z-r*M)*Z,t[10]=(m*S-v*_+p*y)*Z,t[11]=(d*_-h*S-f*y)*Z,t[12]=(a*A-o*H-l*M)*Z,t[13]=(e*H-n*A+s*M)*Z,t[14]=(v*E-m*b-g*y)*Z,t[15]=(h*b-d*E+u*y)*Z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,v=o*h,g=o*d,p=a*d,y=l*c,E=l*h,_=l*d,b=n.x,S=n.y,P=n.z;return s[0]=(1-(v+p))*b,s[1]=(f+_)*b,s[2]=(m-E)*b,s[3]=0,s[4]=(f-_)*S,s[5]=(1-(u+p))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(m+E)*P,s[9]=(g-y)*P,s[10]=(1-(u+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=lr.set(s[0],s[1],s[2]).length(),a=lr.set(s[4],s[5],s[6]).length(),l=lr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),di.copy(this);let c=1/o,h=1/a,d=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=d,di.elements[9]*=d,di.elements[10]*=d,e.setFromRotationMatrix(di),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=xi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===xi)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===wr)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=xi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===xi)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===wr)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Dl.prototype.isMatrix4=!0;var Oe=Dl,lr=new N,di=new Oe,bp=new N(0,0,0),wp=new N(1,1,1),ls=new N,ya=new N,$n=new N,Gu=new Oe,Wu=new Yn,Di=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tp=0,Xu=new N,cr=new Yn,Yi=new Oe,Ma=new N,no=new N,Ep=new N,Ap=new Yn,$u=new N(1,0,0),qu=new N(0,1,0),Yu=new N(0,0,1),Zu={type:"added"},Cp={type:"removed"},hr={type:"childadded",child:null},th={type:"childremoved",child:null},un=class i extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new Di,n=new Yn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new fe}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis($u,t)}rotateY(t){return this.rotateOnAxis(qu,t)}rotateZ(t){return this.rotateOnAxis(Yu,t)}translateOnAxis(t,e){return Xu.copy(t).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($u,t)}translateY(t){return this.translateOnAxis(qu,t)}translateZ(t){return this.translateOnAxis(Yu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ma.copy(t):Ma.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(no,Ma,this.up):Yi.lookAt(Ma,no,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(Yi),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zu),hr.child=t,this.dispatchEvent(hr),hr.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cp),th.child=t,this.dispatchEvent(th),th.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zu),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,t,Ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,Ap,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};un.DEFAULT_UP=new N(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vi=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rp={type:"move"},Cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new vi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function eh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ee.workingColorSpace){if(t=_p(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=eh(o,r,t+1/3),this.g=eh(o,r,t),this.b=eh(o,r,t-1/3)}return Ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:re("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){let n=ad[t.toLowerCase()];return n!==void 0?this.setHex(n,e):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return Ee.workingToColorSpace(Ln.copy(this),t),Math.round(Ae(Ln.r*255,0,255))*65536+Math.round(Ae(Ln.g*255,0,255))*256+Math.round(Ae(Ln.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.workingToColorSpace(Ln.copy(this),e);let n=Ln.r,s=Ln.g,r=Ln.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ee.workingColorSpace){return Ee.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=Sn){Ee.workingToColorSpace(Ln.copy(this),t);let e=Ln.r,n=Ln.g,s=Ln.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+e,cs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cs),t.getHSL(Sa);let n=Zc(cs.h,Sa.h,e),s=Zc(cs.s,Sa.s,e),r=Zc(cs.l,Sa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new ee;ee.NAMES=ad;var Bs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ee(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ts=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},pi=new N,Zi=new N,nh=new N,Ji=new N,ur=new N,fr=new N,Ju=new N,ih=new N,sh=new N,rh=new N,oh=new We,ah=new We,lh=new We,ds=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pi.subVectors(t,e),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pi.subVectors(s,e),Zi.subVectors(n,e),nh.subVectors(t,e);let o=pi.dot(pi),a=pi.dot(Zi),l=pi.dot(nh),c=Zi.dot(Zi),h=Zi.dot(nh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return oh.setScalar(0),ah.setScalar(0),lh.setScalar(0),oh.fromBufferAttribute(t,e),ah.fromBufferAttribute(t,n),lh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oh,r.x),o.addScaledVector(ah,r.y),o.addScaledVector(lh,r.z),o}static isFrontFacing(t,e,n,s){return pi.subVectors(n,e),Zi.subVectors(t,e),pi.cross(Zi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),pi.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ur.subVectors(s,n),fr.subVectors(r,n),ih.subVectors(t,n);let l=ur.dot(ih),c=fr.dot(ih);if(l<=0&&c<=0)return e.copy(n);sh.subVectors(t,s);let h=ur.dot(sh),d=fr.dot(sh);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ur,o);rh.subVectors(t,r);let f=ur.dot(rh),m=fr.dot(rh);if(m>=0&&f<=m)return e.copy(r);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(fr,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Ju.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(Ju,a);let p=1/(g+v+u);return o=v*p,a=u*p,e.copy(n).addScaledVector(ur,o).addScaledVector(fr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ni=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mi):mi.fromBufferAttribute(r,o),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ba.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(t.matrixWorld),this.union(ba)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(io),wa.subVectors(this.max,io),dr.subVectors(t.a,io),pr.subVectors(t.b,io),mr.subVectors(t.c,io),hs.subVectors(pr,dr),us.subVectors(mr,pr),Ds.subVectors(dr,mr);let e=[0,-hs.z,hs.y,0,-us.z,us.y,0,-Ds.z,Ds.y,hs.z,0,-hs.x,us.z,0,-us.x,Ds.z,0,-Ds.x,-hs.y,hs.x,0,-us.y,us.x,0,-Ds.y,Ds.x,0];return!ch(e,dr,pr,mr,wa)||(e=[1,0,0,0,1,0,0,0,1],!ch(e,dr,pr,mr,wa))?!1:(Ta.crossVectors(hs,us),e=[Ta.x,Ta.y,Ta.z],ch(e,dr,pr,mr,wa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ki=[new N,new N,new N,new N,new N,new N,new N,new N],mi=new N,ba=new Ni,dr=new N,pr=new N,mr=new N,hs=new N,us=new N,Ds=new N,io=new N,wa=new N,Ta=new N,Ns=new N;function ch(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ns.fromArray(i,r);let a=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),l=t.dot(Ns),c=e.dot(Ns),h=n.dot(Ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var hn=new N,Ea=new At,Pp=0,_e=class extends Li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nd,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ea.fromBufferAttribute(this,e),Ea.applyMatrix3(t),this.setXY(e,Ea.x,Ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix3(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=eo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=eo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Bn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=eo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Bn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=eo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Bn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=eo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Bn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Bn(e,this.array),n=Bn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Bn(e,this.array),n=Bn(n,this.array),s=Bn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Bn(e,this.array),n=Bn(n,this.array),s=Bn(s,this.array),r=Bn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var vo=class extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _o=class extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ip=new Ni,so=new N,hh=new N,Ui=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ip.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);let e=so.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(so,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(hh)),this.expandByPoint(so.copy(t.center).sub(hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Lp=0,ti=new Oe,uh=new un,gr=new N,qn=new Ni,ro=new Ni,Mn=new N,Ue=class i extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xp(t)?_o:vo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,n){return ti.makeTranslation(t,e,n),this.applyMatrix4(ti),this}scale(t,e,n){return ti.makeScale(t,e,n),this.applyMatrix4(ti),this}lookAt(t){return uh.lookAt(t),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(qn.min,ro.min),qn.expandByPoint(Mn),Mn.addVectors(qn.max,ro.max),qn.expandByPoint(Mn)):(qn.expandByPoint(ro.min),qn.expandByPoint(ro.max))}qn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Mn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Mn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Mn.fromBufferAttribute(a,c),l&&(gr.fromBufferAttribute(t,c),Mn.add(gr)),s=Math.max(s,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new _e(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new N,l[M]=new N;let c=new N,h=new N,d=new N,u=new At,f=new At,m=new At,v=new N,g=new N;function p(M,A,F){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,F),u.fromBufferAttribute(r,M),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,F),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let H=1/(f.x*m.y-m.x*f.y);isFinite(H)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(H),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(H),a[M].add(v),a[A].add(v),a[F].add(v),l[M].add(g),l[A].add(g),l[F].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let M=0,A=y.length;M<A;++M){let F=y[M],H=F.start,z=F.count;for(let X=H,D=H+z;X<D;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let E=new N,_=new N,b=new N,S=new N;function P(M){b.fromBufferAttribute(s,M),S.copy(b);let A=a[M];E.copy(A),E.sub(b.multiplyScalar(b.dot(A))).normalize(),_.crossVectors(S,A);let H=_.dot(l[M])<0?-1:1;o.setXYZW(M,E.x,E.y,E.z,H)}for(let M=0,A=y.length;M<A;++M){let F=y[M],H=F.start,z=F.count;for(let X=H,D=H+z;X<D;X+=3)P(t.getX(X+0)),P(t.getX(X+1)),P(t.getX(X+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),v=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Mn.fromBufferAttribute(t,e),Mn.normalize(),t.setXYZ(e,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new _e(u,h,d)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var fh=new N,Dp=new N,Np=new fe,gi=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=fh.subVectors(n,e).cross(Dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(fh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Np.getNormalMatrix(t),s=this.coplanarPoint(fh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Up=0,_i=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=Or,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=zh,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qa,this.stencilZFail=qa,this.stencilZPass=qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){re(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new gi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new At().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ji=new N,dh=new N,Aa=new N,Ca=new N,zs=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,e),ji.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){dh.copy(t).add(e).multiplyScalar(.5),Aa.copy(e).sub(t).normalize(),Ca.copy(this.origin).sub(dh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Aa),a=Ca.dot(this.direction),l=-Ca.dot(Aa),c=Ca.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(dh).addScaledVector(Aa,u),f}intersectSphere(t,e){if(t.radius<0)return null;ji.subVectors(t.center,this.origin);let n=ji.dot(this.direction),s=ji.dot(ji)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,v=e.y-o.y,g=e.z-o.z,p=n.x-o.x,y=n.y-o.y,E=n.z-o.z,_=Math.abs(l),b=Math.abs(c),S=Math.abs(h),P,M,A,F,H,z,X,D,Z,tt,et,gt;if(_>=b&&_>=S?(A=l,z=d,Z=m,gt=p,l>=0?(P=c,M=h,F=u,H=f,X=v,D=g,tt=y,et=E):(P=h,M=c,F=f,H=u,X=g,D=v,tt=E,et=y)):b>=S?(A=c,z=u,Z=v,gt=y,c>=0?(P=h,M=l,F=f,H=d,X=g,D=m,tt=E,et=p):(P=l,M=h,F=d,H=f,X=m,D=g,tt=p,et=E)):(A=h,z=f,Z=g,gt=E,h>=0?(P=l,M=c,F=d,H=u,X=m,D=v,tt=p,et=y):(P=c,M=l,F=u,H=d,X=v,D=m,tt=y,et=p)),A===0)return null;let rt=P/A,ft=M/A,dt=1/A,xt=F-rt*z,pt=H-ft*z,we=X-rt*Z,ge=D-ft*Z,Me=tt-rt*gt,at=et-ft*gt,vt=Me*ge-at*we,Rt=xt*at-pt*Me,B=we*pt-ge*xt;if(s){if(vt<0||Rt<0||B<0)return null}else if((vt<0||Rt<0||B<0)&&(vt>0||Rt>0||B>0))return null;let lt=vt+Rt+B;if(lt===0)return null;let bt=dt*(vt*z+Rt*Z+B*gt);return(lt>0?bt<0:bt>0)?null:this.at(bt/lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yi=class extends _i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ku=new Oe,Us=new zs,Ra=new Ui,ju=new N,Pa=new N,Ia=new N,La=new N,ph=new N,Da=new N,Qu=new N,Na=new N,Ce=class extends un{constructor(t=new Ue,e=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ph.fromBufferAttribute(d,t),o?Da.addScaledVector(ph,h):Da.addScaledVector(ph.sub(e),h))}e.add(Da)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(r),Us.copy(t.ray).recast(t.near),!(Ra.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Ra,ju)===null||Us.origin.distanceToSquared(ju)>(t.far-t.near)**2))&&(Ku.copy(r).invert(),Us.copy(t.ray).applyMatrix4(Ku),!(n.boundingBox!==null&&Us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Us)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let g=u[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,b=E;_<b;_+=3){let S=a.getX(_),P=a.getX(_+1),M=a.getX(_+2);s=Ua(this,p,t,n,c,h,d,S,P,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let y=a.getX(g),E=a.getX(g+1),_=a.getX(g+2);s=Ua(this,o,t,n,c,h,d,y,E,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let g=u[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,b=E;_<b;_+=3){let S=_,P=_+1,M=_+2;s=Ua(this,p,t,n,c,h,d,S,P,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let y=g,E=g+1,_=g+2;s=Ua(this,o,t,n,c,h,d,y,E,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Fp(i,t,e,n,s,r,o,a){let l;if(t.side===Cn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ss,a),l===null)return null;Na.copy(a),Na.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Na);return c<e.near||c>e.far?null:{distance:c,point:Na.clone(),object:i}}function Ua(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Pa),i.getVertexPosition(l,Ia),i.getVertexPosition(c,La);let h=Fp(i,t,e,n,Pa,Ia,La,Qu);if(h){let d=new N;ds.getBarycoord(Qu,Pa,Ia,La,d),s&&(h.uv=ds.getInterpolatedAttribute(s,a,l,c,d,new At)),r&&(h.uv1=ds.getInterpolatedAttribute(r,a,l,c,d,new At)),o&&(h.normal=ds.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new N,materialIndex:0};ds.getNormal(Pa,Ia,La,u.normal),h.face=u,h.barycoord=d}return h}var yo=class extends Nn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=bn,h=bn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ps=class extends _e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xr=new Oe,tf=new Oe,Fa=[],ef=new Ni,Op=new Oe,oo=new Ce,ao=new Ui,ks=class extends Ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ps(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Op)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xr),ef.copy(t.boundingBox).applyMatrix4(xr),this.boundingBox.union(ef)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xr),ao.copy(t.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(ao)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),t.ray.intersectsSphere(ao)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xr),tf.multiplyMatrices(n,xr),oo.matrixWorld=tf,oo.raycast(t,Fa);for(let o=0,a=Fa.length;o<a;o++){let l=Fa[o];l.instanceId=r,l.object=this,e.push(l)}Fa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ps(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yo(new Float32Array(s*this.count),s,this.count,Hl,ii));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fs=new Ui,Bp=new At(.5,.5),Oa=new N,Rr=class{constructor(t=new gi,e=new gi,n=new gi,s=new gi,r=new gi,o=new gi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],v=r[9],g=r[10],p=r[11],y=r[12],E=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,f-h,p-m,b-y).normalize(),s[1].setComponents(c+o,f+h,p+m,b+y).normalize(),s[2].setComponents(c+a,f+d,p+v,b+E).normalize(),s[3].setComponents(c-a,f-d,p-v,b-E).normalize(),n)s[4].setComponents(l,u,g,_).normalize(),s[5].setComponents(c-l,f-u,p-g,b-_).normalize();else if(s[4].setComponents(c-l,f-u,p-g,b-_).normalize(),e===xi)s[5].setComponents(c+l,f+u,p+g,b+_).normalize();else if(e===wr)s[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);let e=Bp.distanceTo(t.center);return Fs.radius=.7071067811865476+e,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Oa.x=s.normal.x>0?t.max.x:t.min.x,Oa.y=s.normal.y>0?t.max.y:t.min.y,Oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ll=class extends _i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},cl=new N,hl=new N,nf=new Oe,lo=new zs,Ba=new Ui,mh=new N,sf=new N,ul=class extends un{constructor(t=new Ue,e=new ll){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)cl.fromBufferAttribute(e,s-1),hl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=cl.distanceTo(hl);t.setAttribute("lineDistance",new me(n,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,t.ray.intersectsSphere(Ba)===!1)return;nf.copy(s).invert(),lo.copy(t.ray).applyMatrix4(nf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=c){let p=h.getX(v),y=h.getX(v+1),E=za(this,t,lo,l,p,y,v);E&&e.push(E)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(f),p=za(this,t,lo,l,v,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=c){let p=za(this,t,lo,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=za(this,t,lo,l,m-1,f,m-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function za(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(cl.fromBufferAttribute(a,s),hl.fromBufferAttribute(a,r),e.distanceSqToSegment(cl,hl,mh,sf)>n)return;mh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(mh);if(!(c<t.near||c>t.far))return{distance:c,point:sf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var rf=new N,of=new N,Mo=class extends ul{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)rf.fromBufferAttribute(e,s),of.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rf.distanceTo(of);t.setAttribute("lineDistance",new me(n,1))}else re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var fl=class extends _i{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},af=new Oe,Th=new zs,ka=new Ui,Ha=new N,Hs=class extends un{constructor(t=new Ue,e=new fl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(s),ka.radius+=r,t.ray.intersectsSphere(ka)===!1)return;af.copy(s).invert(),Th.copy(t.ray).applyMatrix4(af);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,v=f;m<v;m++){let g=c.getX(m);Ha.fromBufferAttribute(d,g),lf(Ha,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,v=f;m<v;m++)Ha.fromBufferAttribute(d,m),lf(Ha,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lf(i,t,e,n,s,r,o){let a=Th.distanceSqToPoint(i);if(a<e){let l=new N;Th.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var So=class extends Nn{constructor(t=[],e=bs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ms=class extends Nn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gs=class extends Nn{constructor(t,e,n=Si,s,r,o,a=bn,l=bn,c,h=Ii,d=1){if(h!==Ii&&h!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Er(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},dl=class extends gs{constructor(t,e=Si,n=bs,s,r,o=bn,a=bn,l,c=Ii){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},bo=class extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},wn=class i extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function m(v,g,p,y,E,_,b,S,P,M,A){let F=_/P,H=b/M,z=_/2,X=b/2,D=S/2,Z=P+1,tt=M+1,et=0,gt=0,rt=new N;for(let ft=0;ft<tt;ft++){let dt=ft*H-X;for(let xt=0;xt<Z;xt++){let pt=xt*F-z;rt[v]=pt*y,rt[g]=dt*E,rt[p]=D,c.push(rt.x,rt.y,rt.z),rt[v]=0,rt[g]=0,rt[p]=S>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(xt/P),d.push(1-ft/M),et+=1}}for(let ft=0;ft<M;ft++)for(let dt=0;dt<P;dt++){let xt=u+dt+Z*ft,pt=u+dt+Z*(ft+1),we=u+(dt+1)+Z*(ft+1),ge=u+(dt+1)+Z*ft;l.push(xt,pt,ge),l.push(pt,we,ge),gt+=6}a.addGroup(f,gt,A),f+=gt,u+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var wo=class i extends Ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new At;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},es=class i extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,v=[],g=n/2,p=0;y(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(f,2));function y(){let _=new N,b=new N,S=0,P=(e-t)/n;for(let M=0;M<=r;M++){let A=[],F=M/r,H=F*(e-t)+t;for(let z=0;z<=s;z++){let X=z/s,D=X*l+a,Z=Math.sin(D),tt=Math.cos(D);b.x=H*Z,b.y=-F*n+g,b.z=H*tt,d.push(b.x,b.y,b.z),_.set(Z,P,tt).normalize(),u.push(_.x,_.y,_.z),f.push(X,1-F),A.push(m++)}v.push(A)}for(let M=0;M<s;M++)for(let A=0;A<r;A++){let F=v[A][M],H=v[A+1][M],z=v[A+1][M+1],X=v[A][M+1];(t>0||A!==0)&&(h.push(F,H,X),S+=3),(e>0||A!==r-1)&&(h.push(H,z,X),S+=3)}c.addGroup(p,S,0),p+=S}function E(_){let b=m,S=new At,P=new N,M=0,A=_===!0?t:e,F=_===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,g*F,0),u.push(0,F,0),f.push(.5,.5),m++;let H=m;for(let z=0;z<=s;z++){let D=z/s*l+a,Z=Math.cos(D),tt=Math.sin(D);P.x=A*tt,P.y=g*F,P.z=A*Z,d.push(P.x,P.y,P.z),u.push(0,F,0),S.x=Z*.5+.5,S.y=tt*.5*F+.5,f.push(S.x,S.y),m++}for(let z=0;z<s;z++){let X=b+z,D=H+z;_===!0?h.push(D,D+1,X):h.push(D+1,D,X),M+=3}c.addGroup(p,M,_===!0?1:2),p+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vs=class i extends es{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pl=class i extends Ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let E=new N,_=new N,b=new N;for(let S=0;S<e.length;S+=3)f(e[S+0],E),f(e[S+1],_),f(e[S+2],b),l(E,_,b,y)}function l(y,E,_,b){let S=b+1,P=[];for(let M=0;M<=S;M++){P[M]=[];let A=y.clone().lerp(_,M/S),F=E.clone().lerp(_,M/S),H=S-M;for(let z=0;z<=H;z++)z===0&&M===S?P[M][z]=A:P[M][z]=A.clone().lerp(F,z/H)}for(let M=0;M<S;M++)for(let A=0;A<2*(S-M)-1;A++){let F=Math.floor(A/2);A%2===0?(u(P[M][F+1]),u(P[M+1][F]),u(P[M][F])):(u(P[M][F+1]),u(P[M+1][F+1]),u(P[M+1][F]))}}function c(y){let E=new N;for(let _=0;_<r.length;_+=3)E.x=r[_+0],E.y=r[_+1],E.z=r[_+2],E.normalize().multiplyScalar(y),r[_+0]=E.x,r[_+1]=E.y,r[_+2]=E.z}function h(){let y=new N;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];let _=g(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;o.push(_,1-b)}m(),d()}function d(){for(let y=0;y<o.length;y+=6){let E=o[y+0],_=o[y+2],b=o[y+4],S=Math.max(E,_,b),P=Math.min(E,_,b);S>.9&&P<.1&&(E<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,E){let _=y*3;E.x=t[_+0],E.y=t[_+1],E.z=t[_+2]}function m(){let y=new N,E=new N,_=new N,b=new N,S=new At,P=new At,M=new At;for(let A=0,F=0;A<r.length;A+=9,F+=6){y.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),_.set(r[A+6],r[A+7],r[A+8]),S.set(o[F+0],o[F+1]),P.set(o[F+2],o[F+3]),M.set(o[F+4],o[F+5]),b.copy(y).add(E).add(_).divideScalar(3);let H=g(b);v(S,F+0,y,H),v(P,F+2,E,H),v(M,F+4,_,H)}}function v(y,E,_,b){b<0&&y.x===1&&(o[E]=y.x-1),_.x===0&&_.z===0&&(o[E]=b/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){re("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new At:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new Oe;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ae(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ae(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Pr=class extends Zn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new At){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ml=class extends Pr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var cf=new N,hf=new N,gh=new Zh,xh=new Zh,vh=new Zh,gl=class extends Zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(hf.subVectors(s[0],s[1]).add(s[0]),c=hf);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(cf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=cf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),gh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,v,g),xh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,v,g),vh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(gh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),xh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),vh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(gh.calc(l),xh.calc(l),vh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function uf(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function zp(i,t){let e=1-i;return e*e*t}function kp(i,t){return 2*(1-i)*i*t}function Hp(i,t){return i*i*t}function ho(i,t,e,n){return zp(i,t)+kp(i,e)+Hp(i,n)}function Vp(i,t){let e=1-i;return e*e*e*t}function Gp(i,t){let e=1-i;return 3*e*e*i*t}function Wp(i,t){return 3*(1-i)*i*i*t}function Xp(i,t){return i*i*i*t}function uo(i,t,e,n,s){return Vp(i,t)+Gp(i,e)+Wp(i,n)+Xp(i,s)}var To=class extends Zn{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(uo(t,s.x,r.x,o.x,a.x),uo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ir=class extends Zn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(uo(t,s.x,r.x,o.x,a.x),uo(t,s.y,r.y,o.y,a.y),uo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Eo=class extends Zn{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xl=class extends Zn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ao=class extends Zn{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ho(t,s.x,r.x,o.x),ho(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gs=class extends Zn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ho(t,s.x,r.x,o.x),ho(t,s.y,r.y,o.y),ho(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Co=class extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(uf(a,l.x,c.x,h.x,d.x),uf(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new At().fromArray(s))}return this}},Eh=Object.freeze({__proto__:null,ArcCurve:ml,CatmullRomCurve3:gl,CubicBezierCurve:To,CubicBezierCurve3:Ir,EllipseCurve:Pr,LineCurve:Eo,LineCurve3:xl,QuadraticBezierCurve:Ao,QuadraticBezierCurve3:Gs,SplineCurve:Co}),vl=class extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Eh[s.type]().fromJSON(s))}return this}},Ws=class extends vl{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Eo(this.currentPoint.clone(),new At(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ao(this.currentPoint.clone(),new At(t,e),new At(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new To(this.currentPoint.clone(),new At(t,e),new At(n,s),new At(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Co(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Pr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Lr=class extends Ws{constructor(t){super(t),this.uuid=kr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ws().fromJSON(s))}return this}};function $p(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ld(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Kp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){let f=i[u],m=i[u+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Ro(r,o,e,a,l,c,0),o}function ld(i,t,e,n,s){let r;if(s===lm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=ff(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=ff(o/n|0,i[o],i[o+1],r);return r&&Dr(r,r.next)&&(Io(r),r=r.next),r}function Xs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Dr(e,e.next)||en(e.prev,e,e.next)===0)){if(Io(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ro(i,t,e,n,s,r,o){if(!i)return;!o&&r&&nm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Yp(i,n,s,r):qp(i)){t.push(l.i,i.i,c.i),Io(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Zp(Xs(i),t),Ro(i,t,e,n,s,r,2)):o===2&&Jp(i,t,e,n,s,r):Ro(Xs(i),t,e,n,s,r,1);break}}}function qp(i){let t=i.prev,e=i,n=i.next;if(en(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&co(s,a,r,l,o,c,m.x,m.y)&&en(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Yp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(en(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),m=Math.min(h,d,u),v=Math.max(a,l,c),g=Math.max(h,d,u),p=Ah(f,m,t,e,n),y=Ah(v,g,t,e,n),E=i.prevZ,_=i.nextZ;for(;E&&E.z>=p&&_&&_.z<=y;){if(E.x>=f&&E.x<=v&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&co(a,h,l,d,c,u,E.x,E.y)&&en(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&co(a,h,l,d,c,u,_.x,_.y)&&en(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=v&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&co(a,h,l,d,c,u,E.x,E.y)&&en(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&co(a,h,l,d,c,u,_.x,_.y)&&en(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Zp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Dr(n,s)&&hd(n,e,e.next,s)&&Po(n,s)&&Po(s,n)&&(t.push(n.i,e.i,s.i),Io(e),Io(e.next),e=i=s),e=e.next}while(e!==i);return Xs(e)}function Jp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rm(o,a)){let l=ud(o,a);o=Xs(o,o.next),l=Xs(l,l.next),Ro(o,t,e,n,s,r,0),Ro(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Kp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=ld(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(sm(c))}s.sort(jp);for(let r=0;r<s.length;r++)e=Qp(s[r],e);return e}function jp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Qp(i,t){let e=tm(i,t);if(!e)return t;let n=ud(e,i);return Xs(n,n.next),Xs(e,e.next)}function tm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Dr(i,e))return e;do{if(Dr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&cd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Po(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&em(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function em(i,t){return en(i.prev,i,t.prev)<0&&en(t.next,i,i.next)<0}function nm(i,t,e,n){let s=i;do s.z===0&&(s.z=Ah(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,im(s)}function im(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ah(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function sm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function co(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&cd(i,t,e,n,s,r,o,a)}function rm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!om(i,t)&&(Po(i,t)&&Po(t,i)&&am(i,t)&&(en(i.prev,i,t.prev)||en(i,t.prev,t))||Dr(i,t)&&en(i.prev,i,i.next)>0&&en(t.prev,t,t.next)>0)}function en(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Dr(i,t){return i.x===t.x&&i.y===t.y}function hd(i,t,e,n){let s=Ga(en(i,t,e)),r=Ga(en(i,t,n)),o=Ga(en(e,n,i)),a=Ga(en(e,n,t));return!!(s!==r&&o!==a||s===0&&Va(i,e,t)||r===0&&Va(i,n,t)||o===0&&Va(e,i,n)||a===0&&Va(e,t,n))}function Va(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ga(i){return i>0?1:i<0?-1:0}function om(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Po(i,t){return en(i.prev,i,i.next)<0?en(i,t,i.next)>=0&&en(i,i.prev,t)>=0:en(i,t,i.prev)<0||en(i,i.next,t)<0}function am(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ud(i,t){let e=Ch(i.i,i.x,i.y),n=Ch(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ff(i,t,e,n){let s=Ch(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Io(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ch(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Rh=class{static triangulate(t,e,n=2){return $p(t,e,n)}},Sr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];df(t),pf(n,t);let o=t.length;e.forEach(df);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,pf(n,e[l]);let a=Rh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function df(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function pf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Lo=class i extends Ue{constructor(t=[new At(0,-.5),new At(.5,0),new At(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ae(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new N,u=new At,f=new N,m=new N,v=new N,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let y=0;y<=e;y++){let E=n+y*h*s,_=Math.sin(E),b=Math.cos(E);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*_,d.y=t[S].y,d.z=t[S].x*b,o.push(d.x,d.y,d.z),u.x=y/e,u.y=S/(t.length-1),a.push(u.x,u.y);let P=l[3*S+0]*_,M=l[3*S+1],A=l[3*S+0]*b;c.push(P,M,A)}}for(let y=0;y<e;y++)for(let E=0;E<t.length-1;E++){let _=E+y*t.length,b=_,S=_+t.length,P=_+t.length+1,M=_+1;r.push(b,S,M),r.push(P,M,S)}this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Do=class i extends pl{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ei=class i extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let y=p*u-o;for(let E=0;E<c;E++){let _=E*d-r;m.push(_,-y,0),v.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let E=y+c*p,_=y+c*(p+1),b=y+1+c*(p+1),S=y+1+c*p;f.push(E,_,S),f.push(_,b,S)}this.setIndex(f),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var No=class i extends Ue{constructor(t=new Lr([new At(0,.5),new At(-.5,-.5),new At(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new me(s,3)),this.setAttribute("normal",new me(r,3)),this.setAttribute("uv",new me(o,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,m=u.holes;Sr.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let y=m[g];Sr.isClockWise(y)===!0&&(m[g]=y.reverse())}let v=Sr.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let y=m[g];f=f.concat(y)}for(let g=0,p=f.length;g<p;g++){let y=f[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,p=v.length;g<p;g++){let y=v[g],E=y[0]+d,_=y[1]+d,b=y[2]+d;n.push(E,_,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return cm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function cm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var xs=class i extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new N,u=new N,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let y=[],E=p/n,_=o+E*a,b=t*Math.cos(_),S=Math.sqrt(t*t-b*b),P=0;p===0&&o===0?P=.5/e:p===n&&l===Math.PI&&(P=-.5/e);for(let M=0;M<=e;M++){let A=M/e,F=s+A*r;d.x=-S*Math.cos(F),d.y=b,d.z=S*Math.sin(F),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),g.push(A+P,1-E),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let E=h[p][y+1],_=h[p][y],b=h[p+1][y],S=h[p+1][y+1];(p!==0||o>0)&&f.push(E,_,S),(p!==n-1||l<Math.PI)&&f.push(_,b,S)}this.setIndex(f),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Uo=class i extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new N,f=new N,m=new N;for(let v=0;v<=n;v++){let g=o+v/n*a;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(y),f.y=(t+e*Math.cos(g))*Math.sin(y),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){let p=(s+1)*v+g-1,y=(s+1)*(v-1)+g-1,E=(s+1)*(v-1)+g,_=(s+1)*v+g;l.push(p,y,_),l.push(y,E,_)}this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var $s=class i extends Ue{constructor(t=new Gs(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new At,h=new N,d=[],u=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(f,2));function v(){for(let E=0;E<e;E++)g(E);g(r===!1?e:0),y(),p()}function g(E){h=t.getPointAt(E/e,h);let _=o.normals[E],b=o.binormals[E];for(let S=0;S<=s;S++){let P=S/s*Math.PI*2,M=Math.sin(P),A=-Math.cos(P);l.x=A*_.x+M*b.x,l.y=A*_.y+M*b.y,l.z=A*_.z+M*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let E=1;E<=e;E++)for(let _=1;_<=s;_++){let b=(s+1)*(E-1)+(_-1),S=(s+1)*E+(_-1),P=(s+1)*E+_,M=(s+1)*(E-1)+_;m.push(b,S,M),m.push(S,P,M)}}function y(){for(let E=0;E<=e;E++)for(let _=0;_<=s;_++)c.x=E/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Eh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Qs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(mf(s))s.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(mf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Dn(i){let t={};for(let e=0;e<i.length;e++){let n=Qs(i[e]);for(let s in n)t[s]=n[s]}return t}function mf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}var ss={clone:Qs,merge:Dn},um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends _i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=um,this.fragmentShader=fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qs(t.uniforms),this.uniformsGroups=hm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new At().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new We().fromArray(s.value);break;case"m3":this.uniforms[n].value=new fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Nr=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},An=class extends _i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Fo=class extends _i{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Nl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_l=class extends _i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yl=class extends _i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function vr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _h(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var vs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ml=class extends vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bh:r=t,a=2*e-n;break;case wh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bh:o=t,l=2*n-e;break;case wh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),v=m*m,g=v*m,p=-u*g+2*u*v-u*m,y=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*m+1,E=(-1-f)*g+(1.5+f)*v+.5*m,_=f*g-f*v;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+y*o[c+b]+E*o[l+b]+_*o[d+b];return r}},Sl=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},bl=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wl=class extends vs{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(s-e),v=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*v+o[l+g]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let v=o[c+m],g=o[l+m],p=f*u+m*2,y=d[p],E=d[p+1],_=t*u+m*2,b=h[_],S=h[_+1],P=pm(n,e,y,b,s);r[m]=fd(P,v,E,S,g)}return r}};function fd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function dm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function pm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=fd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=dm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Jn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vr(e,this.TimeBufferType),this.values=vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vr(t.times,Array),values:vr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),_h(t.settings)&&(n.settings={inTangents:vr(t.settings.inTangents,Array),outTangents:vr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case fo:e=this.InterpolantFactoryMethodDiscrete;break;case il:e=this.InterpolantFactoryMethodLinear;break;case $a:e=this.InterpolantFactoryMethodSmooth;break;case Mh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return re("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return il;case this.InterpolantFactoryMethodSmooth:return $a;case this.InterpolantFactoryMethodBezier:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;_h(this.settings)&&(gf(this.settings.inTangents,t),gf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(le("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(le("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){le("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){le("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&vp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){le("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$a,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let v=e[d+m];if(v!==e[u+m]||v!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,_h(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function gf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=il;var _s=class extends Jn{constructor(t,e,n){super(t,e,n)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=fo;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}};Tl.prototype.ValueTypeName="color";var El=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}};El.prototype.ValueTypeName="number";var Al=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Yn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Oo=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Al(this.times,this.values,this.getValueSize(),t)}};Oo.prototype.ValueTypeName="quaternion";Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends Jn{constructor(t,e,n){super(t,e,n)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=fo;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}};Cl.prototype.ValueTypeName="vector";var Rl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},dd=new Rl,Pl=class{constructor(t){this.manager=t!==void 0?t:dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=class extends un{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},qs=class extends Ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},yh=new Oe,xf=new N,vf=new N,Bo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;xf.setFromMatrixPosition(t.matrixWorld),e.position.copy(xf),vf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(yh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===wr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(yh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Wa=new N,Xa=new Yn,Ri=new N,zo=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wa,Xa,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,Ri.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Wa,Xa,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new N,_f=new At,yf=new At,gn=class extends zo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=sl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fs.x,fs.y).multiplyScalar(-t/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-t/fs.z)}getViewSize(t,e){return this.getViewBounds(t,_f,yf),e.subVectors(yf,_f)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ph=class extends Bo{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},ko=class extends Ur{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ph}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ms=class extends zo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ih=class extends Bo{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends Ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new Ih}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var _r=-90,yr=1,Il=class extends un{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(_r,yr,t,e);s.layers=this.layers,this.add(s);let r=new gn(_r,yr,t,e);r.layers=this.layers,this.add(r);let o=new gn(_r,yr,t,e);o.layers=this.layers,this.add(o);let a=new gn(_r,yr,t,e);a.layers=this.layers,this.add(a);let l=new gn(_r,yr,t,e);l.layers=this.layers,this.add(l);let c=new gn(_r,yr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ll=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ho=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=mm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function mm(){this._document.hidden===!1&&this.reset()}var Kh="\\[\\]\\.:\\/",gm=new RegExp("["+Kh+"]","g"),jh="[^"+Kh+"]",xm="[^"+Kh.replace("\\.","")+"]",vm=/((?:WC+[\/:])*)/.source.replace("WC",jh),_m=/(WCOD+)?/.source.replace("WCOD",xm),ym=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jh),Mm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jh),Sm=new RegExp("^"+vm+_m+ym+Mm+"$"),bm=["material","materials","bones","map"],Lh=class{constructor(t,e,n){let s=n||Ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ze=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gm,"")}static parseTrackName(t){let e=Sm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;le("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ze.Composite=Lh;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ly=new Float32Array(1);var Mf=new Oe,Ys=class{constructor(t,e,n=0,s=1/0){this.ray=new zs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Mf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mf),this}intersectObject(t,e=!0,n=[]){return Dh(t,this,n,e),n.sort(Sf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Dh(t[s],this,n,e);return n.sort(Sf),n}};function Sf(i,t){return i.distance-t.distance}function Dh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Dh(r[o],t,e,!0)}}var su=class su{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};su.prototype.isMatrix2=!0;var Nh=su;function Qh(i,t,e,n){let s=wm(n);switch(e){case Xh:return i*t;case Hl:return i*t/s.components*s.byteLength;case Vl:return i*t/s.components*s.byteLength;case Ts:return i*t*2/s.components*s.byteLength;case Gl:return i*t*2/s.components*s.byteLength;case $h:return i*t*3/s.components*s.byteLength;case si:return i*t*4/s.components*s.byteLength;case Wl:return i*t*4/s.components*s.byteLength;case Jo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $l:case Yl:return Math.max(i,16)*Math.max(t,8)/4;case Xl:case ql:return Math.max(i,8)*Math.max(t,8)/2;case Zl:case Jl:case jl:case Ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kl:case ta:case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mc:case gc:case xc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wm(i){switch(i){case kn:case Hh:return{byteLength:1,components:1};case Br:case Vh:case xn:return{byteLength:2,components:1};case zl:case kl:return{byteLength:2,components:4};case Si:case Bl:case ii:return{byteLength:4,components:1};case Gh:case Wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ud(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Im(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dm=`#ifdef USE_ALPHAHASH
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
#endif`,Nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bm=`#ifdef USE_AOMAP
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
#endif`,zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,km=`#ifdef USE_BATCHING
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
#endif`,Hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xm=`#ifdef USE_IRIDESCENCE
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
#endif`,$m=`#ifdef USE_BUMPMAP
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
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,e0=`#define PI 3.141592653589793
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
} // validated`,n0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i0=`vec3 transformedNormal = objectNormal;
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
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l0="gl_FragColor = linearToOutputTexel( gl_FragColor );",c0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_0=`#ifdef USE_GRADIENTMAP
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
}`,y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,w0=`#ifdef USE_ENVMAP
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
#endif`,T0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R0=`PhysicalMaterial material;
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
#endif`,P0=`uniform sampler2D dfgLUT;
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
}`,I0=`
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
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
#endif`,D0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,U0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V0=`#if defined( USE_POINTS_UV )
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
#endif`,G0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`#ifdef USE_MORPHTARGETS
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
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,eg=`#ifdef USE_NORMALMAP
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
#endif`,ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xg=`float getShadowMask() {
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
}`,vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mg=`#ifdef USE_SKINNING
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
#endif`,Sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,Ag=`#ifdef USE_TRANSMISSION
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`#include <common>
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
}`,zg=`#if DEPTH_PACKING == 3200
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
}`,kg=`#define DISTANCE
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
}`,Hg=`#define DISTANCE
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`uniform float scale;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,qg=`uniform vec3 diffuse;
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
}`,Yg=`#define LAMBERT
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
}`,Zg=`#define LAMBERT
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
}`,Jg=`#define MATCAP
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
}`,Kg=`#define MATCAP
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
}`,jg=`#define NORMAL
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
}`,Qg=`#define NORMAL
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
}`,tx=`#define PHONG
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
}`,ex=`#define PHONG
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
}`,nx=`#define STANDARD
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
}`,ix=`#define STANDARD
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
}`,sx=`#define TOON
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
}`,rx=`#define TOON
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
}`,ox=`uniform float size;
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
}`,ax=`uniform vec3 diffuse;
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
}`,lx=`#include <common>
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
}`,cx=`uniform vec3 color;
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
}`,hx=`uniform float rotation;
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
}`,ux=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:Lm,alphahash_pars_fragment:Dm,alphamap_fragment:Nm,alphamap_pars_fragment:Um,alphatest_fragment:Fm,alphatest_pars_fragment:Om,aomap_fragment:Bm,aomap_pars_fragment:zm,batching_pars_vertex:km,batching_vertex:Hm,begin_vertex:Vm,beginnormal_vertex:Gm,bsdfs:Wm,iridescence_fragment:Xm,bumpmap_pars_fragment:$m,clipping_planes_fragment:qm,clipping_planes_pars_fragment:Ym,clipping_planes_pars_vertex:Zm,clipping_planes_vertex:Jm,color_fragment:Km,color_pars_fragment:jm,color_pars_vertex:Qm,color_vertex:t0,common:e0,cube_uv_reflection_fragment:n0,defaultnormal_vertex:i0,displacementmap_pars_vertex:s0,displacementmap_vertex:r0,emissivemap_fragment:o0,emissivemap_pars_fragment:a0,colorspace_fragment:l0,colorspace_pars_fragment:c0,envmap_fragment:h0,envmap_common_pars_fragment:u0,envmap_pars_fragment:f0,envmap_pars_vertex:d0,envmap_physical_pars_fragment:w0,envmap_vertex:p0,fog_vertex:m0,fog_pars_vertex:g0,fog_fragment:x0,fog_pars_fragment:v0,gradientmap_pars_fragment:_0,lightmap_pars_fragment:y0,lights_lambert_fragment:M0,lights_lambert_pars_fragment:S0,lights_pars_begin:b0,lights_toon_fragment:T0,lights_toon_pars_fragment:E0,lights_phong_fragment:A0,lights_phong_pars_fragment:C0,lights_physical_fragment:R0,lights_physical_pars_fragment:P0,lights_fragment_begin:I0,lights_fragment_maps:L0,lights_fragment_end:D0,lightprobes_pars_fragment:N0,logdepthbuf_fragment:U0,logdepthbuf_pars_fragment:F0,logdepthbuf_pars_vertex:O0,logdepthbuf_vertex:B0,map_fragment:z0,map_pars_fragment:k0,map_particle_fragment:H0,map_particle_pars_fragment:V0,metalnessmap_fragment:G0,metalnessmap_pars_fragment:W0,morphinstance_vertex:X0,morphcolor_vertex:$0,morphnormal_vertex:q0,morphtarget_pars_vertex:Y0,morphtarget_vertex:Z0,normal_fragment_begin:J0,normal_fragment_maps:K0,normal_pars_fragment:j0,normal_pars_vertex:Q0,normal_vertex:tg,normalmap_pars_fragment:eg,clearcoat_normal_fragment_begin:ng,clearcoat_normal_fragment_maps:ig,clearcoat_pars_fragment:sg,iridescence_pars_fragment:rg,opaque_fragment:og,packing:ag,premultiplied_alpha_fragment:lg,project_vertex:cg,dithering_fragment:hg,dithering_pars_fragment:ug,roughnessmap_fragment:fg,roughnessmap_pars_fragment:dg,shadowmap_pars_fragment:pg,shadowmap_pars_vertex:mg,shadowmap_vertex:gg,shadowmask_pars_fragment:xg,skinbase_vertex:vg,skinning_pars_vertex:_g,skinning_vertex:yg,skinnormal_vertex:Mg,specularmap_fragment:Sg,specularmap_pars_fragment:bg,tonemapping_fragment:wg,tonemapping_pars_fragment:Tg,transmission_fragment:Eg,transmission_pars_fragment:Ag,uv_pars_fragment:Cg,uv_pars_vertex:Rg,uv_vertex:Pg,worldpos_vertex:Ig,background_vert:Lg,background_frag:Dg,backgroundCube_vert:Ng,backgroundCube_frag:Ug,cube_vert:Fg,cube_frag:Og,depth_vert:Bg,depth_frag:zg,distance_vert:kg,distance_frag:Hg,equirect_vert:Vg,equirect_frag:Gg,linedashed_vert:Wg,linedashed_frag:Xg,meshbasic_vert:$g,meshbasic_frag:qg,meshlambert_vert:Yg,meshlambert_frag:Zg,meshmatcap_vert:Jg,meshmatcap_frag:Kg,meshnormal_vert:jg,meshnormal_frag:Qg,meshphong_vert:tx,meshphong_frag:ex,meshphysical_vert:nx,meshphysical_frag:ix,meshtoon_vert:sx,meshtoon_frag:rx,points_vert:ox,points_frag:ax,shadow_vert:lx,shadow_frag:cx,sprite_vert:hx,sprite_frag:ux},Ht={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},zi={basic:{uniforms:Dn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Dn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Dn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Dn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Dn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new ee(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Dn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Dn([Ht.points,Ht.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Dn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Dn([Ht.common,Ht.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Dn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Dn([Ht.sprite,Ht.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Dn([Ht.common,Ht.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Dn([Ht.lights,Ht.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};zi.physical={uniforms:Dn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};var bc={r:0,b:0,g:0},fx=new Oe,Fd=new fe;Fd.set(-1,0,0,0,1,0,0,0,1);function dx(i,t,e,n,s,r){let o=new ee(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let _=y.backgroundBlurriness>0;E=t.get(E,_)}return E}function m(y){let E=!1,_=f(y);_===null?g(o,a):_&&_.isColor&&(g(_,1),E=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,E){let _=f(E);_&&(_.isCubeTexture||_.mapping===Yo)?(c===void 0&&(c=new Ce(new wn(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:Qs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fx.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fd),c.material.toneMapped=Ee.getTransfer(_.colorSpace)!==Fe,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ce(new ei(2,2),new ze({name:"BackgroundMaterial",uniforms:Qs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ee.getTransfer(_.colorSpace)!==Fe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,E){y.getRGB(bc,Jh(i)),e.buffers.color.setClear(bc.r,bc.g,bc.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:v,dispose:p}}function px(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(H,z,X,D,Z){let tt=!1,et=d(H,D,X,z);r!==et&&(r=et,c(r.object)),tt=f(H,D,X,Z),tt&&m(H,D,X,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,_(H,z,X,D),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(H){return i.bindVertexArray(H)}function h(H){return i.deleteVertexArray(H)}function d(H,z,X,D){let Z=D.wireframe===!0,tt=n[z.id];tt===void 0&&(tt={},n[z.id]=tt);let et=H.isInstancedMesh===!0?H.id:0,gt=tt[et];gt===void 0&&(gt={},tt[et]=gt);let rt=gt[X.id];rt===void 0&&(rt={},gt[X.id]=rt);let ft=rt[Z];return ft===void 0&&(ft=u(l()),rt[Z]=ft),ft}function u(H){let z=[],X=[],D=[];for(let Z=0;Z<e;Z++)z[Z]=0,X[Z]=0,D[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:D,object:H,attributes:{},index:null}}function f(H,z,X,D){let Z=r.attributes,tt=z.attributes,et=0,gt=X.getAttributes();for(let rt in gt)if(gt[rt].location>=0){let dt=Z[rt],xt=tt[rt];if(xt===void 0&&(rt==="instanceMatrix"&&H.instanceMatrix&&(xt=H.instanceMatrix),rt==="instanceColor"&&H.instanceColor&&(xt=H.instanceColor)),dt===void 0||dt.attribute!==xt||xt&&dt.data!==xt.data)return!0;et++}return r.attributesNum!==et||r.index!==D}function m(H,z,X,D){let Z={},tt=z.attributes,et=0,gt=X.getAttributes();for(let rt in gt)if(gt[rt].location>=0){let dt=tt[rt];dt===void 0&&(rt==="instanceMatrix"&&H.instanceMatrix&&(dt=H.instanceMatrix),rt==="instanceColor"&&H.instanceColor&&(dt=H.instanceColor));let xt={};xt.attribute=dt,dt&&dt.data&&(xt.data=dt.data),Z[rt]=xt,et++}r.attributes=Z,r.attributesNum=et,r.index=D}function v(){let H=r.newAttributes;for(let z=0,X=H.length;z<X;z++)H[z]=0}function g(H){p(H,0)}function p(H,z){let X=r.newAttributes,D=r.enabledAttributes,Z=r.attributeDivisors;X[H]=1,D[H]===0&&(i.enableVertexAttribArray(H),D[H]=1),Z[H]!==z&&(i.vertexAttribDivisor(H,z),Z[H]=z)}function y(){let H=r.newAttributes,z=r.enabledAttributes;for(let X=0,D=z.length;X<D;X++)z[X]!==H[X]&&(i.disableVertexAttribArray(X),z[X]=0)}function E(H,z,X,D,Z,tt,et){et===!0?i.vertexAttribIPointer(H,z,X,Z,tt):i.vertexAttribPointer(H,z,X,D,Z,tt)}function _(H,z,X,D){v();let Z=D.attributes,tt=X.getAttributes(),et=z.defaultAttributeValues;for(let gt in tt){let rt=tt[gt];if(rt.location>=0){let ft=Z[gt];if(ft===void 0&&(gt==="instanceMatrix"&&H.instanceMatrix&&(ft=H.instanceMatrix),gt==="instanceColor"&&H.instanceColor&&(ft=H.instanceColor)),ft!==void 0){let dt=ft.normalized,xt=ft.itemSize,pt=t.get(ft);if(pt===void 0)continue;let we=pt.buffer,ge=pt.type,Me=pt.bytesPerElement,at=ge===i.INT||ge===i.UNSIGNED_INT||ft.gpuType===Bl;if(ft.isInterleavedBufferAttribute){let vt=ft.data,Rt=vt.stride,B=ft.offset;if(vt.isInstancedInterleavedBuffer){for(let lt=0;lt<rt.locationSize;lt++)p(rt.location+lt,vt.meshPerAttribute);H.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let lt=0;lt<rt.locationSize;lt++)g(rt.location+lt);i.bindBuffer(i.ARRAY_BUFFER,we);for(let lt=0;lt<rt.locationSize;lt++)E(rt.location+lt,xt/rt.locationSize,ge,dt,Rt*Me,(B+xt/rt.locationSize*lt)*Me,at)}else{if(ft.isInstancedBufferAttribute){for(let vt=0;vt<rt.locationSize;vt++)p(rt.location+vt,ft.meshPerAttribute);H.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let vt=0;vt<rt.locationSize;vt++)g(rt.location+vt);i.bindBuffer(i.ARRAY_BUFFER,we);for(let vt=0;vt<rt.locationSize;vt++)E(rt.location+vt,xt/rt.locationSize,ge,dt,xt*Me,xt/rt.locationSize*vt*Me,at)}}else if(et!==void 0){let dt=et[gt];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(rt.location,dt);break;case 3:i.vertexAttrib3fv(rt.location,dt);break;case 4:i.vertexAttrib4fv(rt.location,dt);break;default:i.vertexAttrib1fv(rt.location,dt)}}}}y()}function b(){A();for(let H in n){let z=n[H];for(let X in z){let D=z[X];for(let Z in D){let tt=D[Z];for(let et in tt)h(tt[et].object),delete tt[et];delete D[Z]}}delete n[H]}}function S(H){if(n[H.id]===void 0)return;let z=n[H.id];for(let X in z){let D=z[X];for(let Z in D){let tt=D[Z];for(let et in tt)h(tt[et].object),delete tt[et];delete D[Z]}}delete n[H.id]}function P(H){for(let z in n){let X=n[z];for(let D in X){let Z=X[D];if(Z[H.id]===void 0)continue;let tt=Z[H.id];for(let et in tt)h(tt[et].object),delete tt[et];delete Z[H.id]}}}function M(H){for(let z in n){let X=n[z],D=H.isInstancedMesh===!0?H.id:0,Z=X[D];if(Z!==void 0){for(let tt in Z){let et=Z[tt];for(let gt in et)h(et[gt].object),delete et[gt];delete Z[tt]}delete X[D],Object.keys(X).length===0&&delete n[z]}}}function A(){F(),o=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function mx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function gx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==si&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let M=P===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==kn&&P!==ii&&!M&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:_,maxSamples:b,samples:S}}function xx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new gi,a=new fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,E=y*4,_=p.clippingState||null;l.value=_,_=h(m,u,E,f);for(let b=0;b!==E;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,_=f;E!==v;++E,_+=4)o.copy(d[E]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var Vr=4,vx=6,_x=20,yx=256,ia=new Ms,pd=new ee,ru=null,ou=0,au=0,lu=!1,Mx=new N,tr=new N,Es=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Mx}=r;ru=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ru,ou,au),this._renderer.xr.enabled=lu,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ru=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:xn,format:si,colorSpace:po,depthBuffer:!1},s=md(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Sx(r)),this._blurMaterial=wx(r,t,e),this._ggxMaterial=bx(r,t,e)}return s}_compileMaterial(t){let e=new Ce(new Ue,t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,s,r){let l=new gn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(pd),d.toneMapping=Mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ce(new wn,new yi({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,p=!0):(g.color.copy(pd),p=!0);for(let E=0;E<6;E++){let _=E%3;_===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):_===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let b=this._cubeSize;Hr(s,_*b,E>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===bs||t.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ia)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-Vr?n-m+Vr:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Hr(r,g,p,3*v,2*v),s.setRenderTarget(r),s.render(a,ia),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Hr(t,g,p,3*v,2*v),s.setRenderTarget(t),s.render(a,ia)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Vr?s-this._lodMax+Vr:0),u=4*(this._cubeSize-h);Hr(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,ia)}};function Sx(i){let t=[],e=[],n=i,s=i-Vr+1+vx;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){let y=p%3*2/3-1,E=p>2?0:-1,_=[y,E,0,y+2/3,E,0,y+2/3,E+1,0,y,E,0,y+2/3,E+1,0,y,E+1,0];m.set(_,f*u*p);for(let b=0;b<u;b++){let S=h[b*2]*2-1,P=h[b*2+1]*2-1;p===0?tr.set(1,P,S):p===1?tr.set(-S,1,-P):p===2?tr.set(-S,P,1):p===3?tr.set(-1,P,-S):p===4?tr.set(-S,-1,P):tr.set(S,P,-1),tr.toArray(v,(p*u+b)*f)}}let g=new Ue;g.setAttribute("position",new _e(m,f)),g.setAttribute("outputDirection",new _e(v,f)),e.push(new Ce(g,null)),n>Vr&&n--}return{lodMeshes:e,sizeLods:t}}function md(i,t,e){let n=new on(i,t,e);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bx(i,t,e){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function wx(i,t,e){return new ze({name:"SphericalGaussianBlur",defines:{SAMPLES:_x,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function gd(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function xd(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Tc=class extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new So(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:ni});r.uniforms.tEquirect.value=e;let o=new Ce(s,r),a=e.minFilter;return e.minFilter===Oi&&(e.minFilter=En),new Il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Tx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ul||f===Fl)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let v=new Tc(m.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===Ul||f===Fl,v=f===bs||f===js;if(m||v){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Es(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return m&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new Es(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Ul?u.mapping=bs:f===Fl&&(u.mapping=js),u}function l(u){let f=0,m=6;for(let v=0;v<m;v++)u[v]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Ex(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Os("WebGLRenderer: "+n+" extension not supported."),s}}}function Ax(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,v=0;if(m===void 0)return;if(f!==null){let y=f.array;v=f.version;for(let E=0,_=y.length;E<_;E+=3){let b=y[E+0],S=y[E+1],P=y[E+2];u.push(b,S,S,P,P,b)}}else{let y=m.array;v=m.version;for(let E=0,_=y.length/3-1;E<_;E+=3){let b=E+0,S=E+1,P=E+2;u.push(b,S,S,P,P,b)}}let g=new(m.count>=65535?_o:vo)(u,1);g.version=v;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Cx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Rx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:le("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Px(i,t,e){let n=new WeakMap,s=new We;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let A=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),v===!0&&(E=3);let _=a.attributes.position.count*E,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*b*4*d),P=new xo(S,_,b,d);P.type=ii,P.needsUpdate=!0;let M=E*4;for(let F=0;F<d;F++){let H=g[F],z=p[F],X=y[F],D=_*b*4*F;for(let Z=0;Z<H.count;Z++){let tt=Z*M;f===!0&&(s.fromBufferAttribute(H,Z),S[D+tt+0]=s.x,S[D+tt+1]=s.y,S[D+tt+2]=s.z,S[D+tt+3]=0),m===!0&&(s.fromBufferAttribute(z,Z),S[D+tt+4]=s.x,S[D+tt+5]=s.y,S[D+tt+6]=s.z,S[D+tt+7]=0),v===!0&&(s.fromBufferAttribute(X,Z),S[D+tt+8]=s.x,S[D+tt+9]=s.y,S[D+tt+10]=s.z,S[D+tt+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new At(_,b)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ix(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Lx={[Vo]:"LINEAR_TONE_MAPPING",[Go]:"REINHARD_TONE_MAPPING",[Wo]:"CINEON_TONE_MAPPING",[Ks]:"ACES_FILMIC_TONE_MAPPING",[$o]:"AGX_TONE_MAPPING",[qo]:"NEUTRAL_TONE_MAPPING",[Xo]:"CUSTOM_TONE_MAPPING"};function Dx(i,t,e,n,s,r){let o=new on(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ue;c.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new me([0,2,0,0,2,0],2));let h=new Nr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ce(c,h),u=new Ms(-1,1,1,-1,0,1),f=null,m=null,v=!1,g,p=null,y=[],E=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),l!==null&&l.setSize(_,b);for(let S=0;S<y.length;S++){let P=y[S];P.setSize&&P.setSize(_,b)}},this.setEffects=function(_){y=_,E=y.length>0&&y[0].isRenderPass===!0;let b=o.width,S=o.height;y.length>0&&a===null&&(a=new on(b,S,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new on(b,S,{type:xn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<y.length;P++){let M=y[P];M.setSize&&M.setSize(b,S)}},this.begin=function(_,b){if(v||_.toneMapping===Mi&&y.length===0)return!1;if(p=b,b!==null){let S=b.width,P=b.height;(o.width!==S||o.height!==P)&&this.setSize(S,P)}return E===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=Mi,!0},this.hasRenderPass=function(){return E},this.end=function(_,b){_.toneMapping=g,v=!0;let S=o,P=a;for(let M=0;M<y.length;M++){let A=y[M];A.enabled!==!1&&(A.render(_,P,S,b),A.needsSwap!==!1&&(S=P,P=P===a?l:a))}if(f!==_.outputColorSpace||m!==_.toneMapping){f=_.outputColorSpace,m=_.toneMapping,h.defines={},Ee.getTransfer(f)===Fe&&(h.defines.SRGB_TRANSFER="");let M=Lx[m];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(p),_.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Od=new Nn,uu=new gs(1,1),Bd=new xo,zd=new al,kd=new So,vd=[],_d=[],yd=new Float32Array(16),Md=new Float32Array(9),Sd=new Float32Array(4);function Wr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=vd[s];if(r===void 0&&(r=new Float32Array(s),vd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function vn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _n(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cc(i,t){let e=_d[t];e===void 0&&(e=new Int32Array(t),_d[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Nx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2fv(this.addr,t),_n(e,t)}}function Fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(vn(e,t))return;i.uniform3fv(this.addr,t),_n(e,t)}}function Ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4fv(this.addr,t),_n(e,t)}}function Bx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_n(e,t)}else{if(vn(e,n))return;Sd.set(n),i.uniformMatrix2fv(this.addr,!1,Sd),_n(e,n)}}function zx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_n(e,t)}else{if(vn(e,n))return;Md.set(n),i.uniformMatrix3fv(this.addr,!1,Md),_n(e,n)}}function kx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_n(e,t)}else{if(vn(e,n))return;yd.set(n),i.uniformMatrix4fv(this.addr,!1,yd),_n(e,n)}}function Hx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2iv(this.addr,t),_n(e,t)}}function Gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;i.uniform3iv(this.addr,t),_n(e,t)}}function Wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4iv(this.addr,t),_n(e,t)}}function Xx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2uiv(this.addr,t),_n(e,t)}}function qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;i.uniform3uiv(this.addr,t),_n(e,t)}}function Yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4uiv(this.addr,t),_n(e,t)}}function Zx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uu.compareFunction=e.isReversedDepthBuffer()?Sc:Mc,r=uu):r=Od,e.setTexture2D(t||r,s)}function Jx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zd,s)}function Kx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kd,s)}function jx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bd,s)}function Qx(i){switch(i){case 5126:return Nx;case 35664:return Ux;case 35665:return Fx;case 35666:return Ox;case 35674:return Bx;case 35675:return zx;case 35676:return kx;case 5124:case 35670:return Hx;case 35667:case 35671:return Vx;case 35668:case 35672:return Gx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return $x;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return jx}}function tv(i,t){i.uniform1fv(this.addr,t)}function ev(i,t){let e=Wr(t,this.size,2);i.uniform2fv(this.addr,e)}function nv(i,t){let e=Wr(t,this.size,3);i.uniform3fv(this.addr,e)}function iv(i,t){let e=Wr(t,this.size,4);i.uniform4fv(this.addr,e)}function sv(i,t){let e=Wr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function rv(i,t){let e=Wr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ov(i,t){let e=Wr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function av(i,t){i.uniform1iv(this.addr,t)}function lv(i,t){i.uniform2iv(this.addr,t)}function cv(i,t){i.uniform3iv(this.addr,t)}function hv(i,t){i.uniform4iv(this.addr,t)}function uv(i,t){i.uniform1uiv(this.addr,t)}function fv(i,t){i.uniform2uiv(this.addr,t)}function dv(i,t){i.uniform3uiv(this.addr,t)}function pv(i,t){i.uniform4uiv(this.addr,t)}function mv(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=uu:o=Od;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function gv(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zd,r[o])}function xv(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||kd,r[o])}function vv(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bd,r[o])}function _v(i){switch(i){case 5126:return tv;case 35664:return ev;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return ov;case 5124:case 35670:return av;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return hv;case 5125:return uv;case 36294:return fv;case 36295:return dv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return vv}}var fu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qx(e.type)}},du=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_v(e.type)}},pu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},cu=/(\w+)(\])?(\[|\.)?/g;function bd(i,t){i.seq.push(t),i.map[t.id]=t}function yv(i,t,e){let n=i.name,s=n.length;for(cu.lastIndex=0;;){let r=cu.exec(n),o=cu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){bd(e,c===void 0?new fu(a,i,t):new du(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new pu(a),bd(e,d)),e=d}}}var Gr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);yv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function wd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Mv=37297,Sv=0;function bv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Td=new fe;function wv(i){Ee._getMatrix(Td,Ee.workingColorSpace,i);let t=`mat3( ${Td.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(i)){case mo:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ed(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+bv(i.getShaderSource(t),a)}else return r}function Tv(i,t){let e=wv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ev={[Vo]:"Linear",[Go]:"Reinhard",[Wo]:"Cineon",[Ks]:"ACESFilmic",[$o]:"AgX",[qo]:"Neutral",[Xo]:"Custom"};function Av(i,t){let e=Ev[t];return e===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wc=new N;function Cv(){Ee.getLuminanceCoefficients(wc);let i=wc.x.toFixed(4),t=wc.y.toFixed(4),e=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function Pv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Iv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ra(i){return i!==""}function Ad(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function mu(i){return i.replace(Lv,Nv)}var Dv=new Map;function Nv(i,t){let e=Se[t];if(e===void 0){let n=Dv.get(t);if(n!==void 0)e=Se[n],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return mu(e)}var Uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(i){return i.replace(Uv,Fv)}function Fv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Ov={[Zs]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function Bv(i){return Ov[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var zv={[bs]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[Yo]:"ENVMAP_TYPE_CUBE_UV"};function kv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":zv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Hv={[js]:"ENVMAP_MODE_REFRACTION"};function Vv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Gv={[Nl]:"ENVMAP_BLENDING_MULTIPLY",[Wf]:"ENVMAP_BLENDING_MIX",[Xf]:"ENVMAP_BLENDING_ADD"};function Wv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Gv[i.combine]||"ENVMAP_BLENDING_NONE"}function Xv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $v(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Bv(e),c=kv(e),h=Vv(e),d=Wv(e),u=Xv(e),f=Rv(e),m=Pv(r),v=s.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ra).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ra).join(`
`),p.length>0&&(p+=`
`)):(g=[Pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),p=[Pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?Se.tonemapping_pars_fragment:"",e.toneMapping!==Mi?Av("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,Tv("linearToOutputTexel",e.outputColorSpace),Cv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ra).join(`
`)),o=mu(o),o=Ad(o,e),o=Cd(o,e),a=mu(a),a=Ad(a,e),a=Cd(a,e),o=Rd(o),a=Rd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=y+g+o,_=y+p+a,b=wd(s,s.VERTEX_SHADER,E),S=wd(s,s.FRAGMENT_SHADER,_);s.attachShader(v,b),s.attachShader(v,S),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(H){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(v)||"",X=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(S)||"",Z=z.trim(),tt=X.trim(),et=D.trim(),gt=!0,rt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(gt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,b,S);else{let ft=Ed(s,b,"vertex"),dt=Ed(s,S,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Z+`
`+ft+`
`+dt)}else Z!==""?re("WebGLProgram: Program Info Log:",Z):(tt===""||et==="")&&(rt=!1);rt&&(H.diagnostics={runnable:gt,programLog:Z,vertexShader:{log:tt,prefix:g},fragmentShader:{log:et,prefix:p}})}s.deleteShader(b),s.deleteShader(S),M=new Gr(s,v),A=Iv(s,v)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(v,Mv)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=S,this}var qv=0,gu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new xu(t),e.set(t,n)),n}},xu=class{constructor(t){this.id=qv++,this.code=t,this.usedTimes=0}};function Yv(i){return i===Ts||i===ta||i===ea}function Zv(i,t,e,n,s,r){let o=new Ar,a=new gu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function v(M,A,F,H,z,X){let D=H.fog,Z=z.geometry,tt=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?H.environment:null,et=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,gt=t.get(M.envMap||tt,et),rt=gt&&gt.mapping===Yo?gt.image.height:null,ft=f[M.type];M.precision!==null&&(u=n.getMaxPrecision(M.precision),u!==M.precision&&re("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));let dt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xt=dt!==void 0?dt.length:0,pt=0;Z.morphAttributes.position!==void 0&&(pt=1),Z.morphAttributes.normal!==void 0&&(pt=2),Z.morphAttributes.color!==void 0&&(pt=3);let we,ge,Me,at;if(ft){let Ie=zi[ft];we=Ie.vertexShader,ge=Ie.fragmentShader}else{we=M.vertexShader,ge=M.fragmentShader;let Ie=a.getVertexShaderStage(M),Te=a.getFragmentShaderStage(M);a.update(M,Ie,Te),Me=Ie.id,at=Te.id}let vt=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),B=z.isInstancedMesh===!0,lt=z.isBatchedMesh===!0,bt=!!M.map,It=!!M.matcap,Nt=!!gt,Ut=!!M.aoMap,kt=!!M.lightMap,Pt=!!M.bumpMap&&M.wireframe===!1,Zt=!!M.normalMap,ne=!!M.displacementMap,Re=!!M.emissiveMap,ie=!!M.metalnessMap,ce=!!M.roughnessMap,G=M.anisotropy>0,ae=M.clearcoat>0,he=M.dispersion>0,C=M.retroreflectivity>0,x=M.iridescence>0,$=M.sheen>0,K=M.transmission>0,T=G&&!!M.anisotropyMap,U=ae&&!!M.clearcoatMap,W=ae&&!!M.clearcoatNormalMap,L=ae&&!!M.clearcoatRoughnessMap,k=x&&!!M.iridescenceMap,nt=x&&!!M.iridescenceThicknessMap,q=$&&!!M.sheenColorMap,mt=$&&!!M.sheenRoughnessMap,Mt=!!M.specularMap,Et=!!M.specularColorMap,Vt=!!M.specularIntensityMap,qt=K&&!!M.transmissionMap,O=K&&!!M.thicknessMap,_t=!!M.gradientMap,j=!!M.alphaMap,ht=M.alphaTest>0,Tt=!!M.alphaHash,yt=!!M.extensions,Xt=Mi;M.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Xt=i.toneMapping);let Yt={shaderID:ft,shaderType:M.type,shaderName:M.name,vertexShader:we,fragmentShader:ge,defines:M.defines,customVertexShaderID:Me,customFragmentShaderID:at,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:lt,batchingColor:lt&&z._colorsTexture!==null,instancing:B,instancingColor:B&&z.instanceColor!==null,instancingMorph:B&&z.morphTexture!==null,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Ee.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:bt,matcap:It,envMap:Nt,envMapMode:Nt&&gt.mapping,envMapCubeUVHeight:rt,aoMap:Ut,lightMap:kt,bumpMap:Pt,normalMap:Zt,displacementMap:ne,emissiveMap:Re,normalMapObjectSpace:Zt&&M.normalMapType===Yf,normalMapTangentSpace:Zt&&M.normalMapType===na,packedNormalMap:Zt&&M.normalMapType===na&&Yv(M.normalMap.format),metalnessMap:ie,roughnessMap:ce,anisotropy:G,anisotropyMap:T,clearcoat:ae,clearcoatMap:U,clearcoatNormalMap:W,clearcoatRoughnessMap:L,dispersion:he,retroreflection:C,iridescence:x,iridescenceMap:k,iridescenceThicknessMap:nt,sheen:$,sheenColorMap:q,sheenRoughnessMap:mt,specularMap:Mt,specularColorMap:Et,specularIntensityMap:Vt,transmission:K,transmissionMap:qt,thicknessMap:O,gradientMap:_t,opaque:M.transparent===!1&&M.blending===Or&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:Tt,combine:M.combine,mapUv:bt&&m(M.map.channel),aoMapUv:Ut&&m(M.aoMap.channel),lightMapUv:kt&&m(M.lightMap.channel),bumpMapUv:Pt&&m(M.bumpMap.channel),normalMapUv:Zt&&m(M.normalMap.channel),displacementMapUv:ne&&m(M.displacementMap.channel),emissiveMapUv:Re&&m(M.emissiveMap.channel),metalnessMapUv:ie&&m(M.metalnessMap.channel),roughnessMapUv:ce&&m(M.roughnessMap.channel),anisotropyMapUv:T&&m(M.anisotropyMap.channel),clearcoatMapUv:U&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:W&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:k&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:q&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&m(M.sheenRoughnessMap.channel),specularMapUv:Mt&&m(M.specularMap.channel),specularColorMapUv:Et&&m(M.specularColorMap.channel),specularIntensityMapUv:Vt&&m(M.specularIntensityMap.channel),transmissionMapUv:qt&&m(M.transmissionMap.channel),thicknessMapUv:O&&m(M.thicknessMap.channel),alphaMapUv:j&&m(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Zt||G),vertexNormals:!!Z.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(bt||j),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||Z.attributes.normal===void 0&&Zt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Rt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:pt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:bt&&M.map.isVideoTexture===!0&&Ee.getTransfer(M.map.colorSpace)===Fe,decodeVideoTextureEmissive:Re&&M.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(M.emissiveMap.colorSpace)===Fe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Fi,flipSided:M.side===Cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:yt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&M.extensions.multiDraw===!0||lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function g(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let F in M.defines)A.push(F),A.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(p(A,M),y(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function p(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numSunLights),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numSunLightShadows),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function y(M,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function E(M){let A=f[M.type],F;if(A){let H=zi[A];F=ss.clone(H.uniforms)}else F=M.uniforms;return F}function _(M,A){let F=h.get(A);return F!==void 0?++F.usedTimes:(F=new $v(i,A,M,s),c.push(F),h.set(A,F)),F}function b(M){if(--M.usedTimes===0){let A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function S(M){a.remove(M)}function P(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:E,acquireProgram:_,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:P}}function Jv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Kv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Id(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ld(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,v,g,p){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:p},i[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=m,y.materialVariant=o(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=g,y.group=p),t++,y}function l(u,f,m,v,g,p,y){y.reversedDepth===!0&&(g=-g);let E=a(u,f,m,v,g,p);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):e.push(E)}function c(u,f,m,v,g,p){let y=a(u,f,m,v,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||Kv),n.length>1&&n.sort(f||Id),s.length>1&&s.sort(f||Id)}function d(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function jv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Ld,i.set(n,[o])):s>=r.length?(o=new Ld,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new ee};break;case"SpotLight":e={position:new N,direction:new N,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function t_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var e_=0;function n_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function i_(i){let t=new Qv,e=t_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Oe,o=new Oe;function a(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,y=0,E=0,_=0,b=0,S=0,P=0,M=0,A=0,F=0;c.sort(n_);for(let z=0,X=c.length;z<X;z++){let D=c[z],Z=D.color,tt=D.intensity,et=D.distance,gt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ts?gt=D.shadow.map.texture:gt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=Z.r*tt,d+=Z.g*tt,u+=Z.b*tt;else if(D.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(D.sh.coefficients[rt],tt);F++}else if(D.isSunLight){let rt=t.get(D);if(rt.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ft=D.shadow,dt=e.get(D);dt.shadowIntensity=ft.intensity,dt.shadowBias=ft.bias,dt.shadowNormalBias=ft.normalBias,dt.shadowRadius=ft.radius,dt.shadowMapSize.copy(ft.mapSize).multiply(ft.getFrameExtents()),n.sunShadow[m]=dt,n.sunShadowMap[m]=gt;let xt=ft.getViewportCount();for(let pt=0;pt<xt;pt++)n.sunShadowMatrix[v+pt]=ft.getMatrix(pt),n.sunShadowCascade[v+pt]=ft._cascadeData[pt];v+=xt,m++}n.sun[f]=rt,f++}else if(D.isDirectionalLight){let rt=t.get(D);if(rt.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ft=D.shadow,dt=e.get(D);dt.shadowIntensity=ft.intensity,dt.shadowBias=ft.bias,dt.shadowNormalBias=ft.normalBias,dt.shadowRadius=ft.radius,dt.shadowMapSize=ft.mapSize,n.directionalShadow[g]=dt,n.directionalShadowMap[g]=gt,n.directionalShadowMatrix[g]=D.shadow.matrix,b++}n.directional[g]=rt,g++}else if(D.isSpotLight){let rt=t.get(D);rt.position.setFromMatrixPosition(D.matrixWorld),rt.color.copy(Z).multiplyScalar(tt),rt.distance=et,rt.coneCos=Math.cos(D.angle),rt.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),rt.decay=D.decay,n.spot[y]=rt;let ft=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,ft.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[y]=ft.matrix,D.castShadow){let dt=e.get(D);dt.shadowIntensity=ft.intensity,dt.shadowBias=ft.bias,dt.shadowNormalBias=ft.normalBias,dt.shadowRadius=ft.radius,dt.shadowMapSize=ft.mapSize,n.spotShadow[y]=dt,n.spotShadowMap[y]=gt,P++}y++}else if(D.isRectAreaLight){let rt=t.get(D);rt.color.copy(Z).multiplyScalar(tt),rt.halfWidth.set(D.width*.5,0,0),rt.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=rt,E++}else if(D.isPointLight){let rt=t.get(D);if(rt.color.copy(D.color).multiplyScalar(D.intensity),rt.distance=D.distance,rt.decay=D.decay,D.castShadow){let ft=D.shadow,dt=e.get(D);dt.shadowIntensity=ft.intensity,dt.shadowBias=ft.bias,dt.shadowNormalBias=ft.normalBias,dt.shadowRadius=ft.radius,dt.shadowMapSize=ft.mapSize,dt.shadowCameraNear=ft.camera.near,dt.shadowCameraFar=ft.camera.far,n.pointShadow[p]=dt,n.pointShadowMap[p]=gt,n.pointShadowMatrix[p]=D.shadow.matrix,S++}n.point[p]=rt,p++}else if(D.isHemisphereLight){let rt=t.get(D);rt.skyColor.copy(D.color).multiplyScalar(tt),rt.groundColor.copy(D.groundColor).multiplyScalar(tt),n.hemi[_]=rt,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let H=n.hash;(H.sunLength!==f||H.directionalLength!==g||H.pointLength!==p||H.spotLength!==y||H.rectAreaLength!==E||H.hemiLength!==_||H.numSunShadows!==m||H.numDirectionalShadows!==b||H.numPointShadows!==S||H.numSpotShadows!==P||H.numSpotMaps!==M||H.numLightProbes!==F)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=E,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+M-A,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=F,H.sunLength=f,H.directionalLength=g,H.pointLength=p,H.spotLength=y,H.rectAreaLength=E,H.hemiLength=_,H.numSunShadows=m,H.numDirectionalShadows=b,H.numPointShadows=S,H.numSpotShadows=P,H.numSpotMaps=M,H.numLightProbes=F,n.version=e_++)}function l(c,h){let d=0,u=0,f=0,m=0,v=0,g=0,p=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){let _=c[y];if(_.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(_.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Dd(i){let t=new i_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function s_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Dd(i),t.set(s,[a])):r>=o.length?(a=new Dd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
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
}`,a_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],l_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Nd=new Oe,sa=new N,hu=new N;function c_(i,t,e){let n=new Rr,s=new At,r=new At,o=new We,a=new _l,l=new yl,c={},h=e.maxTextureSize,d={[Ss]:Cn,[Cn]:Ss,[Fi]:Fi},u=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:r_,fragmentShader:o_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ue;m.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ce(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zs;let p=this.type;this.render=function(S,P,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Tf&&(re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zs);let A=i.getRenderTarget(),F=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ni),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=p!==this.type;X&&P.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(Z=>Z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,Z=S.length;D<Z;D++){let tt=S[D],et=tt.shadow;if(et===void 0){re("WebGLShadowMap:",tt,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;s.copy(et.mapSize);let gt=et.getFrameExtents();s.multiply(gt),r.copy(et.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,et.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,et.mapSize.y=r.y));let rt=i.state.buffers.depth.getReversed();if(et.camera._reversedDepth=rt,et.map===null||X===!0){if(et.map!==null&&(et.map.depthTexture!==null&&(et.map.depthTexture.dispose(),et.map.depthTexture=null),et.map.dispose()),this.type===Fr){if(tt.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}et.map=new on(s.x,s.y,{format:Ts,type:xn,minFilter:En,magFilter:En,generateMipmaps:!1}),et.map.texture.name=tt.name+".shadowMap",et.map.depthTexture=new gs(s.x,s.y,ii),et.map.depthTexture.name=tt.name+".shadowMapDepth",et.map.depthTexture.format=Ii,et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=bn,et.map.depthTexture.magFilter=bn}else tt.isPointLight?(et.map=new Tc(s.x),et.map.depthTexture=new dl(s.x,Si)):(et.map=new on(s.x,s.y),et.map.depthTexture=new gs(s.x,s.y,Si)),et.map.depthTexture.name=tt.name+".shadowMap",et.map.depthTexture.format=Ii,this.type===Zs?(et.map.depthTexture.compareFunction=rt?Sc:Mc,et.map.depthTexture.minFilter=En,et.map.depthTexture.magFilter=En):(et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=bn,et.map.depthTexture.magFilter=bn);et.camera.updateProjectionMatrix()}et.map.isWebGLCubeRenderTarget!==!0&&(et.map.width!==s.x||et.map.height!==s.y)&&et.map.setSize(s.x,s.y);let ft=et.map.isWebGLCubeRenderTarget?6:et.getViewportCount();tt.isPointLight!==!0&&et.updateMatrices(tt,M);for(let dt=0;dt<ft;dt++){let xt=et.getCamera(dt);if(tt.isPointLight){let pt=et.camera,we=et.matrix,ge=tt.distance||pt.far;ge!==pt.far&&(pt.far=ge,pt.updateProjectionMatrix()),sa.setFromMatrixPosition(tt.matrixWorld),pt.position.copy(sa),hu.copy(pt.position),hu.add(a_[dt]),pt.up.copy(l_[dt]),pt.lookAt(hu),pt.updateMatrixWorld(),we.makeTranslation(-sa.x,-sa.y,-sa.z),Nd.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),et._frustum.setFromProjectionMatrix(Nd,pt.coordinateSystem,pt.reversedDepth)}if(et.map.isWebGLCubeRenderTarget)i.setRenderTarget(et.map,dt),i.clear();else{dt===0&&(i.setRenderTarget(et.map),i.clear());let pt=et.getViewport(dt);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),z.viewport(o)}n=et.getFrustum(dt),_(P,M,xt,tt,this.type)}et.isPointLightShadow!==!0&&this.type===Fr&&y(et,M),et.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,F,H)};function y(S,P){let M=t.update(v);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new on(s.x,s.y,{format:Ts,type:xn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(P,null,M,u,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(P,null,M,f,v,null)}function E(S,P,M,A){let F=null,H=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(H!==void 0)F=H;else if(F=M.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let z=F.uuid,X=P.uuid,D=c[z];D===void 0&&(D={},c[z]=D);let Z=D[X];Z===void 0&&(Z=F.clone(),D[X]=Z,P.addEventListener("dispose",b)),F=Z}if(F.visible=P.visible,F.wireframe=P.wireframe,A===Fr?F.side=P.shadowSide!==null?P.shadowSide:P.side:F.side=P.shadowSide!==null?P.shadowSide:d[P.side],F.alphaMap=P.alphaMap,F.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,F.map=P.map,F.clipShadows=P.clipShadows,F.clippingPlanes=P.clippingPlanes,F.clipIntersection=P.clipIntersection,F.displacementMap=P.displacementMap,F.displacementScale=P.displacementScale,F.displacementBias=P.displacementBias,F.wireframeLinewidth=P.wireframeLinewidth,F.linewidth=P.linewidth,M.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let z=i.properties.get(F);z.light=M}return F}function _(S,P,M,A,F){if(S.visible===!1)return;if(S.layers.test(P.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&F===Fr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let X=t.update(S),D=S.material;if(Array.isArray(D)){let Z=X.groups;for(let tt=0,et=Z.length;tt<et;tt++){let gt=Z[tt],rt=D[gt.materialIndex];if(rt&&rt.visible){let ft=E(S,rt,A,F);S.onBeforeShadow(i,S,P,M,X,ft,gt),i.renderBufferDirect(M,null,X,ft,S,gt),S.onAfterShadow(i,S,P,M,X,ft,gt)}}}else if(D.visible){let Z=E(S,D,A,F);S.onBeforeShadow(i,S,P,M,X,Z,null),i.renderBufferDirect(M,null,X,Z,S,null),S.onAfterShadow(i,S,P,M,X,Z,null)}}let z=S.children;for(let X=0,D=z.length;X<D;X++)_(z[X],P,M,A,F)}function b(S){S.target.removeEventListener("dispose",b);for(let M in c){let A=c[M],F=S.target.uuid;F in A&&(A[F].dispose(),delete A[F])}}}function h_(i,t){function e(){let O=!1,_t=new We,j=null,ht=new We(0,0,0,0);return{setMask:function(Tt){j!==Tt&&!O&&(i.colorMask(Tt,Tt,Tt,Tt),j=Tt)},setLocked:function(Tt){O=Tt},setClear:function(Tt,yt,Xt,Yt,Ie){Ie===!0&&(Tt*=Yt,yt*=Yt,Xt*=Yt),_t.set(Tt,yt,Xt,Yt),ht.equals(_t)===!1&&(i.clearColor(Tt,yt,Xt,Yt),ht.copy(_t))},reset:function(){O=!1,j=null,ht.set(-1,0,0,0)}}}function n(){let O=!1,_t=!1,j=null,ht=null,Tt=null;return{setReversed:function(yt){if(_t!==yt){let Xt=t.get("EXT_clip_control");yt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),_t=yt;let Yt=Tt;Tt=null,this.setClear(Yt)}},getReversed:function(){return _t},setTest:function(yt){yt?vt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(yt){j!==yt&&!O&&(i.depthMask(yt),j=yt)},setFunc:function(yt){if(_t&&(yt=od[yt]),ht!==yt){switch(yt){case Ya:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Qa:i.depthFunc(i.GREATER);break;case tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=yt}},setLocked:function(yt){O=yt},setClear:function(yt){Tt!==yt&&(Tt=yt,_t&&(yt=1-yt),i.clearDepth(yt))},reset:function(){O=!1,j=null,ht=null,Tt=null,_t=!1}}}function s(){let O=!1,_t=null,j=null,ht=null,Tt=null,yt=null,Xt=null,Yt=null,Ie=null;return{setTest:function(Te){O||(Te?vt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(Te){_t!==Te&&!O&&(i.stencilMask(Te),_t=Te)},setFunc:function(Te,Xe,pn){(j!==Te||ht!==Xe||Tt!==pn)&&(i.stencilFunc(Te,Xe,pn),j=Te,ht=Xe,Tt=pn)},setOp:function(Te,Xe,pn){(yt!==Te||Xt!==Xe||Yt!==pn)&&(i.stencilOp(Te,Xe,pn),yt=Te,Xt=Xe,Yt=pn)},setLocked:function(Te){O=Te},setClear:function(Te){Ie!==Te&&(i.clearStencil(Te),Ie=Te)},reset:function(){O=!1,_t=null,j=null,ht=null,Tt=null,yt=null,Xt=null,Yt=null,Ie=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],v=null,g=!1,p=null,y=null,E=null,_=null,b=null,S=null,P=null,M=new ee(0,0,0),A=0,F=!1,H=null,z=null,X=null,D=null,Z=null,tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,gt=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(gt=parseFloat(/^WebGL (\d)/.exec(rt)[1]),et=gt>=1):rt.indexOf("OpenGL ES")!==-1&&(gt=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),et=gt>=2);let ft=null,dt={},xt=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),we=new We().fromArray(xt),ge=new We().fromArray(pt);function Me(O,_t,j,ht){let Tt=new Uint8Array(4),yt=i.createTexture();i.bindTexture(O,yt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<j;Xt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(_t+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return yt}let at={};at[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),vt(i.DEPTH_TEST),o.setFunc(br),Pt(!1),Zt(Uh),vt(i.CULL_FACE),Ut(ni);function vt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Rt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function B(O,_t){return u[O]!==_t?(i.bindFramebuffer(O,_t),u[O]=_t,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function lt(O,_t){let j=m,ht=!1;if(O){j=f.get(_t),j===void 0&&(j=[],f.set(_t,j));let Tt=O.textures;if(j.length!==Tt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Xt=Tt.length;yt<Xt;yt++)j[yt]=i.COLOR_ATTACHMENT0+yt;j.length=Tt.length,ht=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ht=!0);ht&&i.drawBuffers(j)}function bt(O){return v!==O?(i.useProgram(O),v=O,!0):!1}let It={[Js]:i.FUNC_ADD,[Af]:i.FUNC_SUBTRACT,[Cf]:i.FUNC_REVERSE_SUBTRACT};It[Rf]=i.MIN,It[Pf]=i.MAX;let Nt={[If]:i.ZERO,[Lf]:i.ONE,[Df]:i.SRC_COLOR,[Bh]:i.SRC_ALPHA,[zf]:i.SRC_ALPHA_SATURATE,[Of]:i.DST_COLOR,[Uf]:i.DST_ALPHA,[Nf]:i.ONE_MINUS_SRC_COLOR,[zh]:i.ONE_MINUS_SRC_ALPHA,[Bf]:i.ONE_MINUS_DST_COLOR,[Ff]:i.ONE_MINUS_DST_ALPHA,[kf]:i.CONSTANT_COLOR,[Hf]:i.ONE_MINUS_CONSTANT_COLOR,[Vf]:i.CONSTANT_ALPHA,[Gf]:i.ONE_MINUS_CONSTANT_ALPHA};function Ut(O,_t,j,ht,Tt,yt,Xt,Yt,Ie,Te){if(O===ni){g===!0&&(Rt(i.BLEND),g=!1);return}if(g===!1&&(vt(i.BLEND),g=!0),O!==Ef){if(O!==p||Te!==F){if((y!==Js||b!==Js)&&(i.blendEquation(i.FUNC_ADD),y=Js,b=Js),Te)switch(O){case Or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFunc(i.ONE,i.ONE);break;case Fh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",O);break}else switch(O){case Or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fh:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oh:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",O);break}E=null,_=null,S=null,P=null,M.set(0,0,0),A=0,p=O,F=Te}return}Tt=Tt||_t,yt=yt||j,Xt=Xt||ht,(_t!==y||Tt!==b)&&(i.blendEquationSeparate(It[_t],It[Tt]),y=_t,b=Tt),(j!==E||ht!==_||yt!==S||Xt!==P)&&(i.blendFuncSeparate(Nt[j],Nt[ht],Nt[yt],Nt[Xt]),E=j,_=ht,S=yt,P=Xt),(Yt.equals(M)===!1||Ie!==A)&&(i.blendColor(Yt.r,Yt.g,Yt.b,Ie),M.copy(Yt),A=Ie),p=O,F=!1}function kt(O,_t){O.side===Fi?Rt(i.CULL_FACE):vt(i.CULL_FACE);let j=O.side===Cn;_t&&(j=!j),Pt(j),O.blending===Or&&O.transparent===!1?Ut(ni):Ut(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let ht=O.stencilWrite;a.setTest(ht),ht&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(O){H!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),H=O)}function Zt(O){O!==bf?(vt(i.CULL_FACE),O!==z&&(O===Uh?i.cullFace(i.BACK):O===wf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),z=O}function ne(O){O!==X&&(et&&i.lineWidth(O),X=O)}function Re(O,_t,j){O?(vt(i.POLYGON_OFFSET_FILL),(D!==_t||Z!==j)&&(D=_t,Z=j,o.getReversed()&&(_t=-_t),i.polygonOffset(_t,j))):Rt(i.POLYGON_OFFSET_FILL)}function ie(O){O?vt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function ce(O){O===void 0&&(O=i.TEXTURE0+tt-1),ft!==O&&(i.activeTexture(O),ft=O)}function G(O,_t,j){j===void 0&&(ft===null?j=i.TEXTURE0+tt-1:j=ft);let ht=dt[j];ht===void 0&&(ht={type:void 0,texture:void 0},dt[j]=ht),(ht.type!==O||ht.texture!==_t)&&(ft!==j&&(i.activeTexture(j),ft=j),i.bindTexture(O,_t||at[O]),ht.type=O,ht.texture=_t)}function ae(){let O=dt[ft];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function he(){try{i.compressedTexImage2D(...arguments)}catch(O){le("WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){le("WebGLState:",O)}}function x(){try{i.texSubImage2D(...arguments)}catch(O){le("WebGLState:",O)}}function $(){try{i.texSubImage3D(...arguments)}catch(O){le("WebGLState:",O)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(O){le("WebGLState:",O)}}function T(){try{i.compressedTexSubImage3D(...arguments)}catch(O){le("WebGLState:",O)}}function U(){try{i.texStorage2D(...arguments)}catch(O){le("WebGLState:",O)}}function W(){try{i.texStorage3D(...arguments)}catch(O){le("WebGLState:",O)}}function L(){try{i.texImage2D(...arguments)}catch(O){le("WebGLState:",O)}}function k(){try{i.texImage3D(...arguments)}catch(O){le("WebGLState:",O)}}function nt(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function q(O,_t){d[O]!==_t&&(i.pixelStorei(O,_t),d[O]=_t)}function mt(O){we.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),we.copy(O))}function Mt(O){ge.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ge.copy(O))}function Et(O,_t){let j=c.get(_t);j===void 0&&(j=new WeakMap,c.set(_t,j));let ht=j.get(O);ht===void 0&&(ht=i.getUniformBlockIndex(_t,O.name),j.set(O,ht))}function Vt(O,_t){let ht=c.get(_t).get(O);l.get(_t)!==ht&&(i.uniformBlockBinding(_t,ht,O.__bindingPointIndex),l.set(_t,ht))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ft=null,dt={},u={},f=new WeakMap,m=[],v=null,g=!1,p=null,y=null,E=null,_=null,b=null,S=null,P=null,M=new ee(0,0,0),A=0,F=!1,H=null,z=null,X=null,D=null,Z=null,we.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:vt,disable:Rt,bindFramebuffer:B,drawBuffers:lt,useProgram:bt,setBlending:Ut,setMaterial:kt,setFlipSided:Pt,setCullFace:Zt,setLineWidth:ne,setPolygonOffset:Re,setScissorTest:ie,activeTexture:ce,bindTexture:G,unbindTexture:ae,compressedTexImage2D:he,compressedTexImage3D:C,texImage2D:L,texImage3D:k,pixelStorei:q,getParameter:nt,updateUBOMapping:Et,uniformBlockBinding:Vt,texStorage2D:U,texStorage3D:W,texSubImage2D:x,texSubImage3D:$,compressedTexSubImage2D:K,compressedTexSubImage3D:T,scissor:mt,viewport:Mt,reset:qt}}function u_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,x){return m?new OffscreenCanvas(C,x):go("canvas")}function g(C,x,$){let K=1,T=he(C);if((T.width>$||T.height>$)&&(K=$/Math.max(T.width,T.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let U=Math.floor(K*T.width),W=Math.floor(K*T.height);u===void 0&&(u=v(U,W));let L=x?v(U,W):u;return L.width=U,L.height=W,L.getContext("2d").drawImage(C,0,0,U,W),re("WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+U+"x"+W+")."),L}else return"data"in C&&re("WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),C;return C}function p(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,x,$,K,T,U=!1){if(C!==null){if(i[C]!==void 0)return i[C];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let W;K&&(W=t.get("EXT_texture_norm16"),W||re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let L=x;if(x===i.RED&&($===i.FLOAT&&(L=i.R32F),$===i.HALF_FLOAT&&(L=i.R16F),$===i.UNSIGNED_BYTE&&(L=i.R8),$===i.UNSIGNED_SHORT&&W&&(L=W.R16_EXT),$===i.SHORT&&W&&(L=W.R16_SNORM_EXT)),x===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(L=i.R8UI),$===i.UNSIGNED_SHORT&&(L=i.R16UI),$===i.UNSIGNED_INT&&(L=i.R32UI),$===i.BYTE&&(L=i.R8I),$===i.SHORT&&(L=i.R16I),$===i.INT&&(L=i.R32I)),x===i.RG&&($===i.FLOAT&&(L=i.RG32F),$===i.HALF_FLOAT&&(L=i.RG16F),$===i.UNSIGNED_BYTE&&(L=i.RG8),$===i.UNSIGNED_SHORT&&W&&(L=W.RG16_EXT),$===i.SHORT&&W&&(L=W.RG16_SNORM_EXT)),x===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(L=i.RG8UI),$===i.UNSIGNED_SHORT&&(L=i.RG16UI),$===i.UNSIGNED_INT&&(L=i.RG32UI),$===i.BYTE&&(L=i.RG8I),$===i.SHORT&&(L=i.RG16I),$===i.INT&&(L=i.RG32I)),x===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(L=i.RGB8UI),$===i.UNSIGNED_SHORT&&(L=i.RGB16UI),$===i.UNSIGNED_INT&&(L=i.RGB32UI),$===i.BYTE&&(L=i.RGB8I),$===i.SHORT&&(L=i.RGB16I),$===i.INT&&(L=i.RGB32I)),x===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(L=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(L=i.RGBA16UI),$===i.UNSIGNED_INT&&(L=i.RGBA32UI),$===i.BYTE&&(L=i.RGBA8I),$===i.SHORT&&(L=i.RGBA16I),$===i.INT&&(L=i.RGBA32I)),x===i.RGB&&($===i.UNSIGNED_SHORT&&W&&(L=W.RGB16_EXT),$===i.SHORT&&W&&(L=W.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(L=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(L=i.R11F_G11F_B10F)),x===i.RGBA){let k=U?mo:Ee.getTransfer(T);$===i.FLOAT&&(L=i.RGBA32F),$===i.HALF_FLOAT&&(L=i.RGBA16F),$===i.UNSIGNED_BYTE&&(L=k===Fe?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&W&&(L=W.RGBA16_EXT),$===i.SHORT&&W&&(L=W.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(L=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(L=i.RGB5_A1)}return(L===i.R16F||L===i.R32F||L===i.RG16F||L===i.RG32F||L===i.RGBA16F||L===i.RGBA32F)&&t.get("EXT_color_buffer_float"),L}function b(C,x){let $;return C?x===null||x===Si||x===zr?$=i.DEPTH24_STENCIL8:x===ii?$=i.DEPTH32F_STENCIL8:x===Br&&($=i.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Si||x===zr?$=i.DEPTH_COMPONENT24:x===ii?$=i.DEPTH_COMPONENT32F:x===Br&&($=i.DEPTH_COMPONENT16),$}function S(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==bn&&C.minFilter!==En?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function P(C){let x=C.target;x.removeEventListener("dispose",P),A(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function M(C){let x=C.target;x.removeEventListener("dispose",M),H(x)}function A(C){let x=n.get(C);if(x.__webglInit===void 0)return;let $=C.source,K=f.get($);if(K){let T=K[x.__cacheKey];T.usedTimes--,T.usedTimes===0&&F(C),Object.keys(K).length===0&&f.delete($)}n.remove(C)}function F(C){let x=n.get(C);i.deleteTexture(x.__webglTexture);let $=C.source,K=f.get($);delete K[x.__cacheKey],o.memory.textures--}function H(C){let x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let T=0;T<x.__webglFramebuffer[K].length;T++)i.deleteFramebuffer(x.__webglFramebuffer[K][T]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let $=C.textures;for(let K=0,T=$.length;K<T;K++){let U=n.get($[K]);U.__webglTexture&&(i.deleteTexture(U.__webglTexture),o.memory.textures--),n.remove($[K])}n.remove(C)}let z=0;function X(){z=0}function D(){return z}function Z(C){z=C}function tt(){let C=z;return C>=s.maxTextures&&re("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function et(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function gt(C,x){let $=n.get(C);if(C.isVideoTexture&&G(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&$.__version!==C.version){let K=C.image;if(K===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt($,C,x);return}}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+x)}function rt(C,x){let $=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){Rt($,C,x);return}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+x)}function ft(C,x){let $=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){Rt($,C,x);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+x)}function dt(C,x){let $=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&$.__version!==C.version){B($,C,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+x)}let xt={[el]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[nl]:i.MIRRORED_REPEAT},pt={[bn]:i.NEAREST,[$f]:i.NEAREST_MIPMAP_NEAREST,[Zo]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Ol]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},we={[Jf]:i.NEVER,[ed]:i.ALWAYS,[Kf]:i.LESS,[Mc]:i.LEQUAL,[jf]:i.EQUAL,[Sc]:i.GEQUAL,[Qf]:i.GREATER,[td]:i.NOTEQUAL};function ge(C,x){if(x.type===ii&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===En||x.magFilter===Ol||x.magFilter===Zo||x.magFilter===Oi||x.minFilter===En||x.minFilter===Ol||x.minFilter===Zo||x.minFilter===Oi)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,xt[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,xt[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,xt[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,pt[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,pt[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,we[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===bn||x.minFilter!==Zo&&x.minFilter!==Oi||x.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Me(C,x){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",P));let K=x.source,T=f.get(K);T===void 0&&(T={},f.set(K,T));let U=et(x);if(U!==C.__cacheKey){T[U]===void 0&&(T[U]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),T[U].usedTimes++;let W=T[C.__cacheKey];W!==void 0&&(T[C.__cacheKey].usedTimes--,W.usedTimes===0&&F(x)),C.__cacheKey=U,C.__webglTexture=T[U].texture}return $}function at(C,x,$){return Math.floor(Math.floor(C/$)/x)}function vt(C,x,$,K){let U=C.updateRanges;if(U.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,$,K,x.data);else{U.sort((q,mt)=>q.start-mt.start);let W=0;for(let q=1;q<U.length;q++){let mt=U[W],Mt=U[q],Et=mt.start+mt.count,Vt=at(Mt.start,x.width,4),qt=at(mt.start,x.width,4);Mt.start<=Et+1&&Vt===qt&&at(Mt.start+Mt.count-1,x.width,4)===Vt?mt.count=Math.max(mt.count,Mt.start+Mt.count-mt.start):(++W,U[W]=Mt)}U.length=W+1;let L=e.getParameter(i.UNPACK_ROW_LENGTH),k=e.getParameter(i.UNPACK_SKIP_PIXELS),nt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let q=0,mt=U.length;q<mt;q++){let Mt=U[q],Et=Math.floor(Mt.start/4),Vt=Math.ceil(Mt.count/4),qt=Et%x.width,O=Math.floor(Et/x.width),_t=Vt,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,qt,O,_t,j,$,K,x.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,L),e.pixelStorei(i.UNPACK_SKIP_PIXELS,k),e.pixelStorei(i.UNPACK_SKIP_ROWS,nt)}}function Rt(C,x,$){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);let T=Me(C,x),U=x.source;e.bindTexture(K,C.__webglTexture,i.TEXTURE0+$);let W=n.get(U);if(U.version!==W.__version||T===!0){if(e.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let j=Ee.getPrimaries(Ee.workingColorSpace),ht=x.colorSpace===is?null:Ee.getPrimaries(x.colorSpace),Tt=x.colorSpace===is||j===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let k=g(x.image,!1,s.maxTextureSize);k=ae(x,k);let nt=r.convert(x.format,x.colorSpace),q=r.convert(x.type),mt=_(x.internalFormat,nt,q,x.normalized,x.colorSpace,x.isVideoTexture);ge(K,x);let Mt,Et=x.mipmaps,Vt=x.isVideoTexture!==!0,qt=W.__version===void 0||T===!0,O=U.dataReady,_t=S(x,k);if(x.isDepthTexture)mt=b(x.format===ws,x.type),qt&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,mt,k.width,k.height):e.texImage2D(i.TEXTURE_2D,0,mt,k.width,k.height,0,nt,q,null));else if(x.isDataTexture)if(Et.length>0){Vt&&qt&&e.texStorage2D(i.TEXTURE_2D,_t,mt,Et[0].width,Et[0].height);for(let j=0,ht=Et.length;j<ht;j++)Mt=Et[j],Vt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Mt.width,Mt.height,nt,q,Mt.data):e.texImage2D(i.TEXTURE_2D,j,mt,Mt.width,Mt.height,0,nt,q,Mt.data);x.generateMipmaps=!1}else Vt?(qt&&e.texStorage2D(i.TEXTURE_2D,_t,mt,k.width,k.height),O&&vt(x,k,nt,q)):e.texImage2D(i.TEXTURE_2D,0,mt,k.width,k.height,0,nt,q,k.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Vt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,mt,Et[0].width,Et[0].height,k.depth);for(let j=0,ht=Et.length;j<ht;j++)if(Mt=Et[j],x.format!==si)if(nt!==null)if(Vt){if(O)if(x.layerUpdates.size>0){let Tt=Qh(Mt.width,Mt.height,x.format,x.type);for(let yt of x.layerUpdates){let Xt=Mt.data.subarray(yt*Tt/Mt.data.BYTES_PER_ELEMENT,(yt+1)*Tt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,yt,Mt.width,Mt.height,1,nt,Xt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Mt.width,Mt.height,k.depth,nt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,mt,Mt.width,Mt.height,k.depth,0,Mt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Mt.width,Mt.height,k.depth,nt,q,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,mt,Mt.width,Mt.height,k.depth,0,nt,q,Mt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Vt&&qt&&e.texStorage2D(i.TEXTURE_2D,_t,mt,Et[0].width,Et[0].height);for(let j=0,ht=Et.length;j<ht;j++)Mt=Et[j],x.format!==si?nt!==null?Vt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Mt.width,Mt.height,nt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,mt,Mt.width,Mt.height,0,Mt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Mt.width,Mt.height,nt,q,Mt.data):e.texImage2D(i.TEXTURE_2D,j,mt,Mt.width,Mt.height,0,nt,q,Mt.data)}else if(x.isDataArrayTexture)if(Vt){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,mt,k.width,k.height,k.depth),O)if(x.layerUpdates.size>0){let j=Qh(k.width,k.height,x.format,x.type);for(let ht of x.layerUpdates){let Tt=k.data.subarray(ht*j/k.data.BYTES_PER_ELEMENT,(ht+1)*j/k.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,k.width,k.height,1,nt,q,Tt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,nt,q,k.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,k.width,k.height,k.depth,0,nt,q,k.data);else if(x.isData3DTexture)Vt?(qt&&e.texStorage3D(i.TEXTURE_3D,_t,mt,k.width,k.height,k.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,nt,q,k.data)):e.texImage3D(i.TEXTURE_3D,0,mt,k.width,k.height,k.depth,0,nt,q,k.data);else if(x.isFramebufferTexture){if(qt)if(Vt)e.texStorage2D(i.TEXTURE_2D,_t,mt,k.width,k.height);else{let j=k.width,ht=k.height;for(let Tt=0;Tt<_t;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,mt,j,ht,0,nt,q,null),j>>=1,ht>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),k.parentNode!==j){j.appendChild(k),d.add(x),j.onpaint=ht=>{let Tt=ht.changedElements;for(let yt of d)Tt.includes(yt.image)&&(yt.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,k);else{let Tt=i.RGBA,yt=i.RGBA,Xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,yt,Xt,k)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Et.length>0){if(Vt&&qt){let j=he(Et[0]);e.texStorage2D(i.TEXTURE_2D,_t,mt,j.width,j.height)}for(let j=0,ht=Et.length;j<ht;j++)Mt=Et[j],Vt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,nt,q,Mt):e.texImage2D(i.TEXTURE_2D,j,mt,nt,q,Mt);x.generateMipmaps=!1}else if(Vt){if(qt){let j=he(k);e.texStorage2D(i.TEXTURE_2D,_t,mt,j.width,j.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt,q,k)}else e.texImage2D(i.TEXTURE_2D,0,mt,nt,q,k);p(x)&&y(K),W.__version=U.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function B(C,x,$){if(x.image.length!==6)return;let K=Me(C,x),T=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+$);let U=n.get(T);if(T.version!==U.__version||K===!0){e.activeTexture(i.TEXTURE0+$);let W=Ee.getPrimaries(Ee.workingColorSpace),L=x.colorSpace===is?null:Ee.getPrimaries(x.colorSpace),k=x.colorSpace===is||W===L?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);let nt=x.isCompressedTexture||x.image[0].isCompressedTexture,q=x.image[0]&&x.image[0].isDataTexture,mt=[];for(let yt=0;yt<6;yt++)!nt&&!q?mt[yt]=g(x.image[yt],!0,s.maxCubemapSize):mt[yt]=q?x.image[yt].image:x.image[yt],mt[yt]=ae(x,mt[yt]);let Mt=mt[0],Et=r.convert(x.format,x.colorSpace),Vt=r.convert(x.type),qt=_(x.internalFormat,Et,Vt,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,_t=U.__version===void 0||K===!0,j=T.dataReady,ht=S(x,Mt);ge(i.TEXTURE_CUBE_MAP,x);let Tt;if(nt){O&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,qt,Mt.width,Mt.height);for(let yt=0;yt<6;yt++){Tt=mt[yt].mipmaps;for(let Xt=0;Xt<Tt.length;Xt++){let Yt=Tt[Xt];x.format!==si?Et!==null?O?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt,0,0,Yt.width,Yt.height,Et,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt,qt,Yt.width,Yt.height,0,Yt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt,0,0,Yt.width,Yt.height,Et,Vt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt,qt,Yt.width,Yt.height,0,Et,Vt,Yt.data)}}}else{if(Tt=x.mipmaps,O&&_t){Tt.length>0&&ht++;let yt=he(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,qt,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(q){O?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,mt[yt].width,mt[yt].height,Et,Vt,mt[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,qt,mt[yt].width,mt[yt].height,0,Et,Vt,mt[yt].data);for(let Xt=0;Xt<Tt.length;Xt++){let Ie=Tt[Xt].image[yt].image;O?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt+1,0,0,Ie.width,Ie.height,Et,Vt,Ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt+1,qt,Ie.width,Ie.height,0,Et,Vt,Ie.data)}}else{O?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Et,Vt,mt[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,qt,Et,Vt,mt[yt]);for(let Xt=0;Xt<Tt.length;Xt++){let Yt=Tt[Xt];O?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt+1,0,0,Et,Vt,Yt.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt+1,qt,Et,Vt,Yt.image[yt])}}}p(x)&&y(i.TEXTURE_CUBE_MAP),U.__version=T.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function lt(C,x,$,K,T,U){let W=r.convert($.format,$.colorSpace),L=r.convert($.type),k=_($.internalFormat,W,L,$.normalized,$.colorSpace),nt=n.get(x),q=n.get($);if(q.__renderTarget=x,!nt.__hasExternalTextures){let mt=Math.max(1,x.width>>U),Mt=Math.max(1,x.height>>U);T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?e.texImage3D(T,U,k,mt,Mt,x.depth,0,W,L,null):e.texImage2D(T,U,k,mt,Mt,0,W,L,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),ce(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,T,q.__webglTexture,0,ie(x)):(T===i.TEXTURE_2D||T>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&T<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,T,q.__webglTexture,U),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(C,x,$){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){let K=x.depthTexture,T=K&&K.isDepthTexture?K.type:null,U=b(x.stencilBuffer,T),W=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ce(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(x),U,x.width,x.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(x),U,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,U,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,C)}else{let K=x.textures;for(let T=0;T<K.length;T++){let U=K[T],W=r.convert(U.format,U.colorSpace),L=r.convert(U.type),k=_(U.internalFormat,W,L,U.normalized,U.colorSpace);ce(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(x),k,x.width,x.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(x),k,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,k,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(C,x,$){let K=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let T=n.get(x.depthTexture);if(T.__renderTarget=x,(!T.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(T.__webglInit===void 0&&(T.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),T.__webglTexture===void 0){T.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture),ge(i.TEXTURE_CUBE_MAP,x.depthTexture);let nt=r.convert(x.depthTexture.format),q=r.convert(x.depthTexture.type),mt;x.depthTexture.format===Ii?mt=i.DEPTH_COMPONENT24:x.depthTexture.format===ws&&(mt=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,mt,x.width,x.height,0,nt,q,null)}}else gt(x.depthTexture,0);let U=T.__webglTexture,W=ie(x),L=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,k=x.depthTexture.format===ws?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ii)ce(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,L,U,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,k,L,U,0);else if(x.depthTexture.format===ws)ce(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,L,U,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,k,L,U,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(C){let x=n.get(C),$=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){let T=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",T)};K.addEventListener("dispose",T),x.__depthDisposeCallback=T}x.__boundDepthTexture=K}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if($)for(let K=0;K<6;K++)It(x.__webglFramebuffer[K],C,K);else{let K=C.texture.mipmaps;K&&K.length>0?It(x.__webglFramebuffer[0],C,0):It(x.__webglFramebuffer,C,0)}else if($){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),bt(x.__webglDepthbuffer[K],C,!1);else{let T=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,T,i.RENDERBUFFER,U)}}else{let K=C.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),bt(x.__webglDepthbuffer,C,!1);else{let T=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,T,i.RENDERBUFFER,U)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(C,x,$){let K=n.get(C);x!==void 0&&lt(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Nt(C)}function kt(C){let x=C.texture,$=n.get(C),K=n.get(x);C.addEventListener("dispose",M);let T=C.textures,U=C.isWebGLCubeRenderTarget===!0,W=T.length>1;if(W||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,o.memory.textures++),U){$.__webglFramebuffer=[];for(let L=0;L<6;L++)if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer[L]=[];for(let k=0;k<x.mipmaps.length;k++)$.__webglFramebuffer[L][k]=i.createFramebuffer()}else $.__webglFramebuffer[L]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer=[];for(let L=0;L<x.mipmaps.length;L++)$.__webglFramebuffer[L]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(W)for(let L=0,k=T.length;L<k;L++){let nt=n.get(T[L]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ce(C)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let L=0;L<T.length;L++){let k=T[L];$.__webglColorRenderbuffer[L]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[L]);let nt=r.convert(k.format,k.colorSpace),q=r.convert(k.type),mt=_(k.internalFormat,nt,q,k.normalized,k.colorSpace,C.isXRRenderTarget===!0),Mt=ie(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,$.__webglColorRenderbuffer[L])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),bt($.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(U){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ge(i.TEXTURE_CUBE_MAP,x);for(let L=0;L<6;L++)if(x.mipmaps&&x.mipmaps.length>0)for(let k=0;k<x.mipmaps.length;k++)lt($.__webglFramebuffer[L][k],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,k);else lt($.__webglFramebuffer[L],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);p(x)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(W){for(let L=0,k=T.length;L<k;L++){let nt=T[L],q=n.get(nt),mt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,q.__webglTexture),ge(mt,nt),lt($.__webglFramebuffer,C,nt,i.COLOR_ATTACHMENT0+L,mt,0),p(nt)&&y(mt)}e.unbindTexture()}else{let L=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(L=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(L,K.__webglTexture),ge(L,x),x.mipmaps&&x.mipmaps.length>0)for(let k=0;k<x.mipmaps.length;k++)lt($.__webglFramebuffer[k],C,x,i.COLOR_ATTACHMENT0,L,k);else lt($.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,L,0);p(x)&&y(L),e.unbindTexture()}C.depthBuffer&&Nt(C)}function Pt(C){let x=C.textures;for(let $=0,K=x.length;$<K;$++){let T=x[$];if(p(T)){let U=E(C),W=n.get(T).__webglTexture;e.bindTexture(U,W),y(U),e.unbindTexture()}}}let Zt=[],ne=[];function Re(C){if(C.samples>0){if(ce(C)===!1){let x=C.textures,$=C.width,K=C.height,T=i.COLOR_BUFFER_BIT,U=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=n.get(C),L=x.length>1;if(L)for(let nt=0;nt<x.length;nt++)e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,W.__webglMultisampledFramebuffer);let k=C.texture.mipmaps;k&&k.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer);for(let nt=0;nt<x.length;nt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(T|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(T|=i.STENCIL_BUFFER_BIT)),L){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,W.__webglColorRenderbuffer[nt]);let q=n.get(x[nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,q,0)}i.blitFramebuffer(0,0,$,K,0,0,$,K,T,i.NEAREST),l===!0&&(Zt.length=0,ne.length=0,Zt.push(i.COLOR_ATTACHMENT0+nt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Zt.push(U),ne.push(U),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),L)for(let nt=0;nt<x.length;nt++){e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,W.__webglColorRenderbuffer[nt]);let q=n.get(x[nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,q,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ie(C){return Math.min(s.maxSamples,C.samples)}function ce(C){let x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function G(C){let x=o.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function ae(C,x){let $=C.colorSpace,K=C.format,T=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||$!==po&&$!==is&&(Ee.getTransfer($)===Fe?(K!==si||T!==kn)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",$)),x}function he(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=tt,this.resetTextureUnits=X,this.getTextureUnits=D,this.setTextureUnits=Z,this.setTexture2D=gt,this.setTexture2DArray=rt,this.setTexture3D=ft,this.setTextureCube=dt,this.rebindTextures=Ut,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function f_(i,t){function e(n,s=is){let r,o=Ee.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hh)return i.BYTE;if(n===Vh)return i.SHORT;if(n===Br)return i.UNSIGNED_SHORT;if(n===Bl)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===Xh)return i.ALPHA;if(n===$h)return i.RGB;if(n===si)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===Hl)return i.RED;if(n===Vl)return i.RED_INTEGER;if(n===Ts)return i.RG;if(n===Gl)return i.RG_INTEGER;if(n===Wl)return i.RGBA_INTEGER;if(n===Jo||n===Ko||n===jo||n===Qo)if(o===Fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xl||n===$l||n===ql||n===Yl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zl||n===Jl||n===Kl||n===jl||n===Ql||n===ta||n===tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zl||n===Jl)return o===Fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jl)return r.COMPRESSED_R11_EAC;if(n===Ql)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return r.COMPRESSED_RG11_EAC;if(n===tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ec)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mc||n===gc||n===xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mc)return o===Fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vc||n===_c||n===ea||n===yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p_=`
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

}`,vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new bo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:d_,fragmentShader:p_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_u=class extends Li{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,v=typeof XRWebGLBinding<"u",g=new vu,p={},y=e.getContextAttributes(),E=null,_=null,b=[],S=[],P=new At,M=null,A=null,F=new gn;F.viewport=new We;let H=new gn;H.viewport=new We;let z=[F,H],X=new Ll,D=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let vt=b[at];return vt===void 0&&(vt=new Cr,b[at]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(at){let vt=b[at];return vt===void 0&&(vt=new Cr,b[at]=vt),vt.getGripSpace()},this.getHand=function(at){let vt=b[at];return vt===void 0&&(vt=new Cr,b[at]=vt),vt.getHandSpace()};function tt(at){let vt=S.indexOf(at.inputSource);if(vt===-1)return;let Rt=b[vt];Rt!==void 0&&(Rt.update(at.inputSource,at.frame,c||o),Rt.dispatchEvent({type:at.type,data:at.inputSource}))}function et(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",gt);for(let at=0;at<b.length;at++){let vt=S[at];vt!==null&&(S[at]=null,b[at].disconnect(vt))}D=null,Z=null,g.reset();for(let at in p)delete p[at];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,_=null,Me.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(P.width,P.height,!1),A!==null){let at=A.camera;at.fov=A.fov,at.zoom=A.zoom,at.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,n.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,n.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(at){c=at},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",et),s.addEventListener("inputsourceschange",gt),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,B=null,lt=null;y.depth&&(lt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=y.stencil?ws:Ii,B=y.stencil?zr:Si);let bt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new on(u.textureWidth,u.textureHeight,{format:si,type:kn,depthTexture:new gs(u.textureWidth,u.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Rt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new on(f.framebufferWidth,f.framebufferHeight,{format:si,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function gt(at){for(let vt=0;vt<at.removed.length;vt++){let Rt=at.removed[vt],B=S.indexOf(Rt);B>=0&&(S[B]=null,b[B].disconnect(Rt))}for(let vt=0;vt<at.added.length;vt++){let Rt=at.added[vt],B=S.indexOf(Rt);if(B===-1){for(let bt=0;bt<b.length;bt++)if(bt>=S.length){S.push(Rt),B=bt;break}else if(S[bt]===null){S[bt]=Rt,B=bt;break}if(B===-1)break}let lt=b[B];lt&&lt.connect(Rt)}}let rt=new N,ft=new N;function dt(at,vt,Rt){rt.setFromMatrixPosition(vt.matrixWorld),ft.setFromMatrixPosition(Rt.matrixWorld);let B=rt.distanceTo(ft),lt=vt.projectionMatrix.elements,bt=Rt.projectionMatrix.elements,It=lt[14]/(lt[10]-1),Nt=lt[14]/(lt[10]+1),Ut=(lt[9]+1)/lt[5],kt=(lt[9]-1)/lt[5],Pt=(lt[8]-1)/lt[0],Zt=(bt[8]+1)/bt[0],ne=It*Pt,Re=It*Zt,ie=B/(-Pt+Zt),ce=ie*-Pt;if(vt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(ce),at.translateZ(ie),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),lt[10]===-1)at.projectionMatrix.copy(vt.projectionMatrix),at.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{let G=It+ie,ae=Nt+ie,he=ne-ce,C=Re+(B-ce),x=Ut*Nt/ae*G,$=kt*Nt/ae*G;at.projectionMatrix.makePerspective(he,C,x,$,G,ae),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function xt(at,vt){vt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(vt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let vt=at.near,Rt=at.far;g.texture!==null&&(g.depthNear>0&&(vt=g.depthNear),g.depthFar>0&&(Rt=g.depthFar)),X.near=H.near=F.near=vt,X.far=H.far=F.far=Rt,(D!==X.near||Z!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),D=X.near,Z=X.far),X.layers.mask=at.layers.mask|6,F.layers.mask=X.layers.mask&-5,H.layers.mask=X.layers.mask&-3;let B=at.parent,lt=X.cameras;xt(X,B);for(let bt=0;bt<lt.length;bt++)xt(lt[bt],B);lt.length===2?dt(X,F,H):X.projectionMatrix.copy(F.projectionMatrix),A===null&&at.isPerspectiveCamera&&(A={camera:at,fov:at.fov,zoom:at.zoom}),pt(at,X,B)};function pt(at,vt,Rt){Rt===null?at.matrix.copy(vt.matrixWorld):(at.matrix.copy(Rt.matrixWorld),at.matrix.invert(),at.matrix.multiply(vt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(vt.projectionMatrix),at.projectionMatrixInverse.copy(vt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=sl*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(at){l=at,u!==null&&(u.fixedFoveation=at),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=at)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(X)},this.getCameraTexture=function(at){return p[at]};let we=null;function ge(at,vt){if(h=vt.getViewerPose(c||o),m=vt,h!==null){let Rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let B=!1;Rt.length!==X.cameras.length&&(X.cameras.length=0,B=!0);for(let Nt=0;Nt<Rt.length;Nt++){let Ut=Rt[Nt],kt=null;if(f!==null)kt=f.getViewport(Ut);else{let Zt=d.getViewSubImage(u,Ut);kt=Zt.viewport,Nt===0&&(t.setRenderTargetTextures(_,Zt.colorTexture,Zt.depthStencilTexture),t.setRenderTarget(_))}let Pt=z[Nt];Pt===void 0&&(Pt=new gn,Pt.layers.enable(Nt),Pt.viewport=new We,z[Nt]=Pt),Pt.matrix.fromArray(Ut.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Ut.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(kt.x,kt.y,kt.width,kt.height),Nt===0&&(X.matrix.copy(Pt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),B===!0&&X.cameras.push(Pt)}let lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Nt=d.getDepthInformation(Rt[0]);Nt&&Nt.isValid&&Nt.texture&&g.init(Nt,s.renderState)}if(lt&&lt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let Nt=0;Nt<Rt.length;Nt++){let Ut=Rt[Nt].camera;if(Ut){let kt=p[Ut];kt||(kt=new bo,p[Ut]=kt);let Pt=d.getCameraImage(Ut);kt.sourceTexture=Pt}}}}for(let Rt=0;Rt<b.length;Rt++){let B=S[Rt],lt=b[Rt];B!==null&&lt!==void 0&&lt.update(B,vt,c||o)}we&&we(at,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),m=null}let Me=new Ud;Me.setAnimationLoop(ge),this.setAnimationLoop=function(at){we=at},this.dispose=function(){}}},m_=new Oe,Hd=new fe;Hd.set(-1,0,0,0,1,0,0,0,1);function g_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Jh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,E,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),E=y.envMap,_=y.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(m_.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Hd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function x_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let S=b.program;n.uniformBlockBinding(_,S)}function c(_,b){let S=s[_.id];S===void 0&&(g(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",y));let P=b.program;n.updateUBOMapping(_,P);let M=t.render.frame;r[_.id]!==M&&(u(_),r[_.id]=M)}function h(_){let b=d();_.__bindingPointIndex=b;let S=i.createBuffer(),P=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=s[_.id],S=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let M=0,A=S.length;M<A;M++){let F=S[M];if(Array.isArray(F))for(let H=0,z=F.length;H<z;H++)f(F[H],M,H,P);else f(F,M,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,b,S,P){if(v(_,b,S,P)===!0){let M=_.__offset,A=_.value;if(Array.isArray(A)){let F=0;for(let H=0;H<A.length;H++){let z=A[H],X=p(z);m(z,_.__data,F),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(F+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,_.__data)}}function m(_,b,S){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,S)}function v(_,b,S,P){let M=_.value,A=b+"_"+S;if(P[A]===void 0)return typeof M=="number"||typeof M=="boolean"?P[A]=M:ArrayBuffer.isView(M)?P[A]=M.slice():P[A]=M.clone(),!0;{let F=P[A];if(typeof M=="number"||typeof M=="boolean"){if(F!==M)return P[A]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(F.equals(M)===!1)return F.copy(M),!0}}return!1}function g(_){let b=_.uniforms,S=0,P=16;for(let A=0,F=b.length;A<F;A++){let H=Array.isArray(b[A])?b[A]:[b[A]];for(let z=0,X=H.length;z<X;z++){let D=H[z],Z=Array.isArray(D.value)?D.value:[D.value];for(let tt=0,et=Z.length;tt<et;tt++){let gt=Z[tt],rt=p(gt),ft=S%P,dt=ft%rt.boundary,xt=ft+dt;S+=dt,xt!==0&&P-xt<rt.storage&&(S+=P-xt),D.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=rt.storage}}}let M=S%P;return M>0&&(S+=P-M),_.__size=S,_.__cache={},this}function p(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):re("WebGLRenderer: Unsupported uniform value type.",_),b}function y(_){let b=_.target;b.removeEventListener("dispose",y);let S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function E(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var v_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function __(){return Bi===null&&(Bi=new yo(v_,16,16,Ts,xn),Bi.name="DFG_LUT",Bi.minFilter=En,Bi.magFilter=En,Bi.wrapS=Pi,Bi.wrapT=Pi,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var Ec=class{constructor(t={}){let{canvas:e=id(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=kn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let v=f,g=new Set([Wl,Gl,Vl]),p=new Set([kn,Si,Br,zr,zl,kl]),y=new Uint32Array(4),E=new Int32Array(4),_=new N,b=null,S=null,P=[],M=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,H=!1,z=null,X=null,D=null,Z=null;this._outputColorSpace=Sn;let tt=0,et=0,gt=null,rt=-1,ft=null,dt=new We,xt=new We,pt=null,we=new ee(0),ge=0,Me=e.width,at=e.height,vt=1,Rt=null,B=null,lt=new We(0,0,Me,at),bt=new We(0,0,Me,at),It=!1,Nt=new Rr,Ut=!1,kt=!1,Pt=new Oe,Zt=new N,ne=new We,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function ce(){return gt===null?vt:1}let G=n;function ae(w,V){return e.getContext(w,V)}let he,C,x,$,K,T,U,W,L,k,nt,q,mt,Mt,Et,Vt,qt,O,_t,j,ht,Tt,yt;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",Xe,!1),G===null){let V="webgl2";if(G=ae(V,w),G===null)throw ae(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(w){throw e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Xe,!1),le("WebGLRenderer: "+w.message),w}function Xt(){he=new Ex(G),he.init(),ht=new f_(G,he),C=new gx(G,he,t,ht),x=new h_(G,he),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),X=G.createFramebuffer(),D=G.createFramebuffer(),Z=G.createFramebuffer(),$=new Rx(G),K=new Jv,T=new u_(G,he,x,K,C,ht,$),U=new Tx(F),W=new Im(G),Tt=new px(G,W),L=new Ax(G,W,$,Tt),k=new Ix(G,L,W,Tt,$),O=new Px(G,C,T),Et=new xx(K),nt=new Zv(F,U,he,C,Tt,Et),q=new g_(F,K),mt=new jv,Mt=new s_(he),qt=new dx(F,U,x,k,m,l),Vt=new c_(F,k,C),yt=new x_(G,$,C,x),_t=new mx(G,he,$),j=new Cx(G,he,$),$.programs=nt.programs,F.capabilities=C,F.extensions=he,F.properties=K,F.renderLists=mt,F.shadowMap=Vt,F.state=x,F.info=$}v!==kn&&(A=new Dx(v,e.width,e.height,a,s,r));let Yt=new _u(F,G);this.xr=Yt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let w=he.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=he.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(w){w!==void 0&&(vt=w,this.setSize(Me,at,!1))},this.getSize=function(w){return w.set(Me,at)},this.setSize=function(w,V,it=!0){if(Yt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=w,at=V,e.width=Math.floor(w*vt),e.height=Math.floor(V*vt),it===!0&&(e.style.width=w+"px",e.style.height=V+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(Me*vt,at*vt).floor()},this.setDrawingBufferSize=function(w,V,it){Me=w,at=V,vt=it,e.width=Math.floor(w*it),e.height=Math.floor(V*it),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(v===kn){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(dt)},this.getViewport=function(w){return w.copy(lt)},this.setViewport=function(w,V,it,J){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,V,it,J),x.viewport(dt.copy(lt).multiplyScalar(vt).round())},this.getScissor=function(w){return w.copy(bt)},this.setScissor=function(w,V,it,J){w.isVector4?bt.set(w.x,w.y,w.z,w.w):bt.set(w,V,it,J),x.scissor(xt.copy(bt).multiplyScalar(vt).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(w){x.setScissorTest(It=w)},this.setOpaqueSort=function(w){Rt=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,it=!0){let J=0;if(w){let Q=!1;if(gt!==null){let Bt=gt.texture.format;Q=g.has(Bt)}if(Q){let Bt=gt.texture.type,Wt=p.has(Bt),zt=qt.getClearColor(),Kt=qt.getClearAlpha(),te=zt.r,pe=zt.g,be=zt.b;Wt?(y[0]=te,y[1]=pe,y[2]=be,y[3]=Kt,G.clearBufferuiv(G.COLOR,0,y)):(E[0]=te,E[1]=pe,E[2]=be,E[3]=Kt,G.clearBufferiv(G.COLOR,0,E))}else J|=G.COLOR_BUFFER_BIT}V&&(J|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(J|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&G.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),z=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Xe,!1),qt.dispose(),mt.dispose(),Mt.dispose(),K.dispose(),U.dispose(),k.dispose(),Tt.dispose(),yt.dispose(),nt.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Jt),Yt.removeEventListener("sessionend",ue),de.stop()};function Ie(w){w.preventDefault(),Yh("WebGLRenderer: Context Lost."),H=!0}function Te(){Yh("WebGLRenderer: Context Restored."),H=!1;let w=$.autoReset,V=Vt.enabled,it=Vt.autoUpdate,J=Vt.needsUpdate,Q=Vt.type;Xt(),$.autoReset=w,Vt.enabled=V,Vt.autoUpdate=it,Vt.needsUpdate=J,Vt.type=Q}function Xe(w){le("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pn(w){let V=w.target;V.removeEventListener("dispose",pn),Wn(V)}function Wn(w){sr(w),K.remove(w)}function sr(w){let V=K.get(w).programs;V!==void 0&&(V.forEach(function(it){nt.releaseProgram(it)}),w.isShaderMaterial&&nt.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,it,J,Q,Bt){V===null&&(V=Re);let Wt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,zt=ct(w,V,it,J,Q);x.setMaterial(J,Wt);let Kt=it.index,te=1;if(J.wireframe===!0){if(Kt=L.getWireframeAttribute(it),Kt===void 0)return;te=2}let pe=it.drawRange,be=it.attributes.position,jt=pe.start*te,Ne=(pe.start+pe.count)*te;Bt!==null&&(jt=Math.max(jt,Bt.start*te),Ne=Math.min(Ne,(Bt.start+Bt.count)*te)),Kt!==null?(jt=Math.max(jt,0),Ne=Math.min(Ne,Kt.count)):be!=null&&(jt=Math.max(jt,0),Ne=Math.min(Ne,be.count));let nn=Ne-jt;if(nn<0||nn===1/0)return;Tt.setup(Q,J,zt,it,Kt);let De,He=_t;if(Kt!==null&&(De=W.get(Kt),He=j,He.setIndex(De)),Q.isMesh)J.wireframe===!0?(x.setLineWidth(J.wireframeLinewidth*ce()),He.setMode(G.LINES)):He.setMode(G.TRIANGLES);else if(Q.isLine){let cn=J.linewidth;cn===void 0&&(cn=1),x.setLineWidth(cn*ce()),Q.isLineSegments?He.setMode(G.LINES):Q.isLineLoop?He.setMode(G.LINE_LOOP):He.setMode(G.LINE_STRIP)}else Q.isPoints?He.setMode(G.POINTS):Q.isSprite&&He.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(he.get("WEBGL_multi_draw"))He.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let cn=Q._multiDrawStarts,$t=Q._multiDrawCounts,mn=Q._multiDrawCount,Le=Kt?W.get(Kt).bytesPerElement:1,Fn=K.get(J).currentProgram.getUniforms();for(let yn=0;yn<mn;yn++)Fn.setValue(G,"_gl_DrawID",yn),He.render(cn[yn]/Le,$t[yn])}else if(Q.isInstancedMesh)He.renderInstances(jt,nn,Q.count);else if(it.isInstancedBufferGeometry){let cn=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,$t=Math.min(it.instanceCount,cn);He.renderInstances(jt,nn,$t)}else He.render(jt,nn)};function ci(w,V,it,J){z!==null&&w.isNodeMaterial&&z.setObject(J,w),Ut===!0&&Et.setState(w,it,!1),w.transparent===!0&&w.side===Fi&&w.forceSinglePass===!1?(w.side=Cn,w.needsUpdate=!0,Xn(w,V,J),w.side=Ss,w.needsUpdate=!0,Xn(w,V,J),w.side=Fi):Xn(w,V,J)}this.compile=function(w,V,it=null){it===null&&(it=w),z!==null&&z.renderStart(w,V,it),S=Mt.get(it),S.init(V),M.push(S),it.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),w!==it&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),S.setupLights(),z!==null&&z.updateLights(S.state.lightsArray),kt=this.localClippingEnabled,Ut=Et.init(this.clippingPlanes,kt),Ut===!0&&Et.setGlobalState(this.clippingPlanes,V),z!==null&&Vt.render(S.state.shadowsArray,it,V);let J=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Bt=Q.material;if(Bt)if(Array.isArray(Bt))for(let Wt=0;Wt<Bt.length;Wt++){let zt=Bt[Wt];ci(zt,it,V,Q),J.add(zt)}else ci(Bt,it,V,Q),J.add(Bt)}),S=M.pop(),z!==null&&z.renderEnd(),J},this.compileAsync=function(w,V,it=null){let J=this.compile(w,V,it);return new Promise(Q=>{function Bt(){if(J.forEach(function(Wt){let Kt=K.get(Wt).currentProgram;(Kt===void 0||Kt.isReady())&&J.delete(Wt)}),J.size===0){Q(w);return}setTimeout(Bt,10)}he.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let hi=null;function Ft(w){hi&&hi(w)}function Jt(){de.stop()}function ue(){de.start()}let de=new Ud;de.setAnimationLoop(Ft),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(w){hi=w,Yt.setAnimationLoop(w),w===null?de.stop():de.start()},Yt.addEventListener("sessionstart",Jt),Yt.addEventListener("sessionend",ue),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;z!==null&&z.renderStart(w,V);let it=Yt.enabled===!0&&Yt.isPresenting===!0,J=A!==null&&(gt===null||it)&&A.begin(F,gt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(V),V=Yt.getCamera()),w.isScene===!0&&w.onBeforeRender(F,w,V,gt),S=Mt.get(w,M.length),S.init(V),S.state.textureUnits=T.getTextureUnits(),M.push(S),Pt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Nt.setFromProjectionMatrix(Pt,xi,V.reversedDepth),kt=this.localClippingEnabled,Ut=Et.init(this.clippingPlanes,kt),b=mt.get(w,P.length),b.init(),P.push(b),Yt.enabled===!0&&Yt.isPresenting===!0){let Wt=F.xr.getDepthSensingMesh();Wt!==null&&ke(Wt,V,-1/0,F.sortObjects)}ke(w,V,0,F.sortObjects),b.finish(),z!==null&&z.updateLights(S.state.lightsArray),F.sortObjects===!0&&b.sort(Rt,B),ie=Yt.enabled===!1||Yt.isPresenting===!1||Yt.hasDepthSensing()===!1,ie&&qt.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ut===!0&&Et.beginShadows();let Q=S.state.shadowsArray;if(Vt.render(Q,w,V),Ut===!0&&Et.endShadows(),(J&&A.hasRenderPass())===!1){let Wt=b.opaque,zt=b.transmissive;if(S.setupLights(),V.isArrayCamera){let Kt=V.cameras;if(zt.length>0)for(let te=0,pe=Kt.length;te<pe;te++){let be=Kt[te];Rn(Wt,zt,w,be)}ie&&qt.render(w);for(let te=0,pe=Kt.length;te<pe;te++){let be=Kt[te];Je(b,w,be,be.viewport)}}else zt.length>0&&Rn(Wt,zt,w,V),ie&&qt.render(w),Je(b,w,V)}gt!==null&&et===0&&(T.updateMultisampleRenderTarget(gt),T.updateRenderTargetMipmap(gt)),J&&A.end(F),w.isScene===!0&&w.onAfterRender(F,w,V),Tt.resetDefaultState(),rt=-1,ft=null,M.pop(),M.length>0?(S=M[M.length-1],T.setTextureUnits(S.state.textureUnits),Ut===!0&&Et.setGlobalState(F.clippingPlanes,S.state.camera)):S=null,P.pop(),P.length>0?b=P[P.length-1]:b=null,z!==null&&z.renderEnd()};function ke(w,V,it,J){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)it=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Nt)){J&&ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pt);let Wt=k.update(w),zt=w.material;zt.visible&&b.push(w,Wt,zt,it,ne.z,null,V)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Nt))){let Wt=k.update(w),zt=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ne.copy(w.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),ne.copy(Wt.boundingSphere.center)),ne.applyMatrix4(w.matrixWorld).applyMatrix4(Pt)),Array.isArray(zt)){let Kt=Wt.groups;for(let te=0,pe=Kt.length;te<pe;te++){let be=Kt[te],jt=zt[be.materialIndex];jt&&jt.visible&&b.push(w,Wt,jt,it,ne.z,be,V)}}else zt.visible&&b.push(w,Wt,zt,it,ne.z,null,V)}}let Bt=w.children;for(let Wt=0,zt=Bt.length;Wt<zt;Wt++)ke(Bt[Wt],V,it,J)}function Je(w,V,it,J){let{opaque:Q,transmissive:Bt,transparent:Wt}=w;S.setupLightsView(it),Ut===!0&&Et.setGlobalState(F.clippingPlanes,it),J&&x.viewport(dt.copy(J)),Q.length>0&&Pn(Q,V,it),Bt.length>0&&Pn(Bt,V,it),Wt.length>0&&Pn(Wt,V,it),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Rn(w,V,it,J){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[J.id]===void 0){let jt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[J.id]=new on(1,1,{generateMipmaps:!0,type:jt?xn:kn,minFilter:Oi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}let Bt=S.state.transmissionRenderTarget[J.id],Wt=J.viewport||dt;Bt.setSize(Wt.z*F.transmissionResolutionScale,Wt.w*F.transmissionResolutionScale);let zt=F.getRenderTarget(),Kt=F.getActiveCubeFace(),te=F.getActiveMipmapLevel();F.setRenderTarget(Bt),F.getClearColor(we),ge=F.getClearAlpha(),ge<1&&F.setClearColor(16777215,.5),F.clear(),ie&&qt.render(it);let pe=F.toneMapping;F.toneMapping=Mi;let be=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),S.setupLightsView(J),Ut===!0&&Et.setGlobalState(F.clippingPlanes,J),Pn(w,it,J),T.updateMultisampleRenderTarget(Bt),T.updateRenderTargetMipmap(Bt),he.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ne=0,nn=V.length;Ne<nn;Ne++){let De=V[Ne],{object:He,geometry:cn,material:$t,group:mn}=De;if($t.side===Fi&&He.layers.test(J.layers)){let Le=$t.side;$t.side=Cn,$t.needsUpdate=!0,$e(He,it,J,cn,$t,mn),$t.side=Le,$t.needsUpdate=!0,jt=!0}}jt===!0&&(T.updateMultisampleRenderTarget(Bt),T.updateRenderTargetMipmap(Bt))}F.setRenderTarget(zt,Kt,te),F.setClearColor(we,ge),be!==void 0&&(J.viewport=be),F.toneMapping=pe}function Pn(w,V,it){let J=V.isScene===!0?V.overrideMaterial:null;for(let Q=0,Bt=w.length;Q<Bt;Q++){let Wt=w[Q],{object:zt,geometry:Kt,group:te}=Wt,pe=Wt.material;pe.allowOverride===!0&&J!==null&&(pe=J),zt.layers.test(it.layers)&&$e(zt,V,it,Kt,pe,te)}}function $e(w,V,it,J,Q,Bt){z!==null&&Q.isNodeMaterial&&z.setObject(w,Q),w.onBeforeRender(F,V,it,J,Q,Bt),w.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(F,V,it,J,w,Bt),Q.transparent===!0&&Q.side===Fi&&Q.forceSinglePass===!1?(Q.side=Cn,Q.needsUpdate=!0,F.renderBufferDirect(it,V,J,Q,w,Bt),Q.side=Ss,Q.needsUpdate=!0,F.renderBufferDirect(it,V,J,Q,w,Bt),Q.side=Fi):F.renderBufferDirect(it,V,J,Q,w,Bt),w.onAfterRender(F,V,it,J,Q,Bt)}function Xn(w,V,it){V.isScene!==!0&&(V=Re);let J=K.get(w),Q=S.state.lights,Bt=S.state.shadowsArray,Wt=Q.state.version,zt=nt.getParameters(w,Q.state,Bt,V,it,S.state.lightProbeGridArray),Kt=nt.getProgramCacheKey(zt),te=J.programs;J.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,J.fog=V.fog;let pe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;J.envMap=U.get(w.envMap||J.environment,pe),J.envMapRotation=J.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",pn),te=new Map,J.programs=te);let be=te.get(Kt);if(be!==void 0){if(J.currentProgram===be&&J.lightsStateVersion===Wt)return Ls(w,zt),be}else zt.uniforms=nt.getUniforms(w),z!==null&&w.isNodeMaterial&&z.build(w,it,zt),w.onBeforeCompile(zt,F),be=nt.acquireProgram(zt,Kt),te.set(Kt,be),J.uniforms=zt.uniforms;let jt=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(jt.clippingPlanes=Et.uniform),Ls(w,zt),J.needsLights=qi(w),J.lightsStateVersion=Wt,J.needsLights&&(jt.ambientLightColor.value=Q.state.ambient,jt.lightProbe.value=Q.state.probe,jt.sunLights.value=Q.state.sun,jt.sunLightShadows.value=Q.state.sunShadow,jt.directionalLights.value=Q.state.directional,jt.directionalLightShadows.value=Q.state.directionalShadow,jt.spotLights.value=Q.state.spot,jt.spotLightShadows.value=Q.state.spotShadow,jt.rectAreaLights.value=Q.state.rectArea,jt.ltc_1.value=Q.state.rectAreaLTC1,jt.ltc_2.value=Q.state.rectAreaLTC2,jt.pointLights.value=Q.state.point,jt.pointLightShadows.value=Q.state.pointShadow,jt.hemisphereLights.value=Q.state.hemi,jt.sunShadowMatrix.value=Q.state.sunShadowMatrix,jt.sunShadowCascade.value=Q.state.sunShadowCascade,jt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,jt.spotLightMatrix.value=Q.state.spotLightMatrix,jt.spotLightMap.value=Q.state.spotLightMap,jt.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.lightProbeGrid=S.state.lightProbeGridArray.length>0,J.currentProgram=be,J.uniformsList=null,be}function Ei(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=Gr.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Ls(w,V){let it=K.get(w);it.outputColorSpace=V.outputColorSpace,it.batching=V.batching,it.batchingColor=V.batchingColor,it.instancing=V.instancing,it.instancingColor=V.instancingColor,it.instancingMorph=V.instancingMorph,it.skinning=V.skinning,it.morphTargets=V.morphTargets,it.morphNormals=V.morphNormals,it.morphColors=V.morphColors,it.morphTargetsCount=V.morphTargetsCount,it.numClippingPlanes=V.numClippingPlanes,it.numIntersection=V.numClipIntersection,it.vertexAlphas=V.vertexAlphas,it.vertexTangents=V.vertexTangents,it.toneMapping=V.toneMapping}function Qt(w,V){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(V.matrixWorld);for(let it=0,J=w.length;it<J;it++){let Q=w[it];if(Q.texture!==null&&Q.boundingBox.containsPoint(_))return Q}return null}function ct(w,V,it,J,Q){V.isScene!==!0&&(V=Re),T.resetTextureUnits();let Bt=V.fog,Wt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?V.environment:null,zt=gt===null?F.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Ee.workingColorSpace,Kt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,te=U.get(J.envMap||Wt,Kt),pe=J.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,be=!!it.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),jt=!!it.morphAttributes.position,Ne=!!it.morphAttributes.normal,nn=!!it.morphAttributes.color,De=Mi;J.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(De=F.toneMapping);let He=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,cn=He!==void 0?He.length:0,$t=K.get(J),mn=S.state.lights;if(Ut===!0&&(kt===!0||w!==ft)){let Ve=w===ft&&J.id===rt;Et.setState(J,w,Ve)}let Le=!1;J.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==mn.state.version||$t.outputColorSpace!==zt||Q.isBatchedMesh&&$t.batching===!1||!Q.isBatchedMesh&&$t.batching===!0||Q.isBatchedMesh&&$t.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&$t.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&$t.instancing===!1||!Q.isInstancedMesh&&$t.instancing===!0||Q.isSkinnedMesh&&$t.skinning===!1||!Q.isSkinnedMesh&&$t.skinning===!0||Q.isInstancedMesh&&$t.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&$t.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&$t.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&$t.instancingMorph===!1&&Q.morphTexture!==null||$t.envMap!==te||J.fog===!0&&$t.fog!==Bt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Et.numPlanes||$t.numIntersection!==Et.numIntersection)||$t.vertexAlphas!==pe||$t.vertexTangents!==be||$t.morphTargets!==jt||$t.morphNormals!==Ne||$t.morphColors!==nn||$t.toneMapping!==De||$t.morphTargetsCount!==cn||!!$t.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Le=!0):(Le=!0,$t.__version=J.version);let Fn=$t.currentProgram;Le===!0&&(Fn=Xn(J,V,Q),z&&J.isNodeMaterial&&z.onUpdateProgram(J,Fn,$t));let yn=!1,ui=!1,sn=!1,Be=Fn.getUniforms(),Ke=$t.uniforms;if(x.useProgram(Fn.program)&&(yn=!0,ui=!0,sn=!0),J.id!==rt&&(rt=J.id,ui=!0),$t.needsLights){let Ve=Qt(S.state.lightProbeGridArray,Q);$t.lightProbeGrid!==Ve&&($t.lightProbeGrid=Ve,ui=!0)}if(yn||ft!==w){x.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Be.setValue(G,"projectionMatrix",w.projectionMatrix),Be.setValue(G,"viewMatrix",w.matrixWorldInverse);let fi=Be.map.cameraPosition;fi!==void 0&&fi.setValue(G,Zt.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&Be.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Be.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),ft!==w&&(ft=w,ui=!0,sn=!0)}if($t.needsLights&&(mn.state.sunShadowMap.length>0&&Be.setValue(G,"sunShadowMap",mn.state.sunShadowMap,T),mn.state.directionalShadowMap.length>0&&Be.setValue(G,"directionalShadowMap",mn.state.directionalShadowMap,T),mn.state.spotShadowMap.length>0&&Be.setValue(G,"spotShadowMap",mn.state.spotShadowMap,T),mn.state.pointShadowMap.length>0&&Be.setValue(G,"pointShadowMap",mn.state.pointShadowMap,T)),Q.isSkinnedMesh){Be.setOptional(G,Q,"bindMatrix"),Be.setOptional(G,Q,"bindMatrixInverse");let Ve=Q.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Be.setValue(G,"boneTexture",Ve.boneTexture,T))}Q.isBatchedMesh&&(Be.setOptional(G,Q,"batchingTexture"),Be.setValue(G,"batchingTexture",Q._matricesTexture,T),Be.setOptional(G,Q,"batchingIdTexture"),Be.setValue(G,"batchingIdTexture",Q._indirectTexture,T),Be.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Be.setValue(G,"batchingColorTexture",Q._colorsTexture,T));let Ai=it.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&O.update(Q,it,Fn),(ui||$t.receiveShadow!==Q.receiveShadow)&&($t.receiveShadow=Q.receiveShadow,Be.setValue(G,"receiveShadow",Q.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&V.environment!==null&&(Ke.envMapIntensity.value=V.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=__()),ui){if(Be.setValue(G,"toneMappingExposure",F.toneMappingExposure),$t.needsLights&&jn(Ke,sn),Bt&&J.fog===!0&&q.refreshFogUniforms(Ke,Bt),q.refreshMaterialUniforms(Ke,J,vt,at,S.state.transmissionRenderTarget[w.id]),$t.needsLights&&$t.lightProbeGrid){let Ve=$t.lightProbeGrid;Ke.probesSH.value=Ve.texture,Ke.probesMin.value.copy(Ve.boundingBox.min),Ke.probesMax.value.copy(Ve.boundingBox.max),Ke.probesResolution.value.copy(Ve.resolution)}Gr.upload(G,Ei($t),Ke,T)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Gr.upload(G,Ei($t),Ke,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Be.setValue(G,"center",Q.center),Be.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Be.setValue(G,"normalMatrix",Q.normalMatrix),Be.setValue(G,"modelMatrix",Q.matrixWorld),J.uniformsGroups!==void 0){let Ve=J.uniformsGroups;for(let fi=0,as=Ve.length;fi<as;fi++){let rr=Ve[fi];yt.update(rr,Fn),yt.bind(rr,Fn)}}return Fn}function jn(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.sunLights.needsUpdate=V,w.sunLightShadows.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function qi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return gt},this.setRenderTargetTextures=function(w,V,it){let J=K.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),K.get(w.texture).__webglTexture=V,K.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:it,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){let it=K.get(w);it.__webglFramebuffer=V,it.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,it=0){gt=w,tt=V,et=it;let J=null,Q=!1,Bt=!1;if(w){let zt=K.get(w);if(zt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(G.FRAMEBUFFER,zt.__webglFramebuffer),dt.copy(w.viewport),xt.copy(w.scissor),pt=w.scissorTest,x.viewport(dt),x.scissor(xt),x.setScissorTest(pt),rt=-1;return}else if(zt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(zt.__hasExternalTextures)T.rebindTextures(w,K.get(w.texture).__webglTexture,K.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let pe=w.depthTexture;if(zt.__boundDepthTexture!==pe){if(pe!==null&&K.has(pe)&&(w.width!==pe.image.width||w.height!==pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}let Kt=w.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Bt=!0);let te=K.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(te[V])?J=te[V][it]:J=te[V],Q=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?J=K.get(w).__webglMultisampledFramebuffer:Array.isArray(te)?J=te[it]:J=te,dt.copy(w.viewport),xt.copy(w.scissor),pt=w.scissorTest}else dt.copy(lt).multiplyScalar(vt).floor(),xt.copy(bt).multiplyScalar(vt).floor(),pt=It;if(it!==0&&(J=X),x.bindFramebuffer(G.FRAMEBUFFER,J)&&x.drawBuffers(w,J),x.viewport(dt),x.scissor(xt),x.setScissorTest(pt),Q){let zt=K.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+V,zt.__webglTexture,it)}else if(Bt){let zt=V;for(let Kt=0;Kt<w.textures.length;Kt++){let te=K.get(w.textures[Kt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Kt,te.__webglTexture,it,zt)}}else if(w!==null&&it!==0){let zt=K.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zt.__webglTexture,it)}rt=-1};function os(w){let V=K.get(w);return(V.__readFormat!==w.format||V.__readType!==w.type)&&(V.__readFormat=w.format,V.__readType=w.type,V.__formatReadable=C.textureFormatReadable(w.format),V.__typeReadable=C.textureTypeReadable(w.type)),V}this.readRenderTargetPixels=function(w,V,it,J,Q,Bt,Wt,zt=0){if(!(w&&w.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Wt!==void 0&&(Kt=Kt[Wt]),Kt){x.bindFramebuffer(G.FRAMEBUFFER,Kt);try{let te=w.textures[zt],pe=te.format,be=te.type;w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+zt);let jt=os(te);if(jt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(jt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-J&&it>=0&&it<=w.height-Q&&G.readPixels(V,it,J,Q,ht.convert(pe),ht.convert(be),Bt)}finally{let te=gt!==null?K.get(gt).__webglFramebuffer:null;x.bindFramebuffer(G.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(w,V,it,J,Q,Bt,Wt,zt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Wt!==void 0&&(Kt=Kt[Wt]),Kt)if(V>=0&&V<=w.width-J&&it>=0&&it<=w.height-Q){x.bindFramebuffer(G.FRAMEBUFFER,Kt);let te=w.textures[zt],pe=te.format,be=te.type;w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+zt);let jt=os(te);if(jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ne=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ne),G.bufferData(G.PIXEL_PACK_BUFFER,Bt.byteLength,G.STREAM_READ),G.readPixels(V,it,J,Q,ht.convert(pe),ht.convert(be),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let nn=gt!==null?K.get(gt).__webglFramebuffer:null;x.bindFramebuffer(G.FRAMEBUFFER,nn);let De=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await rd(G,De,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ne),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Bt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(Ne),G.deleteSync(De),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,it=0){let J=Math.pow(2,-it),Q=Math.floor(w.image.width*J),Bt=Math.floor(w.image.height*J),Wt=V!==null?V.x:0,zt=V!==null?V.y:0;T.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,it,0,0,Wt,zt,Q,Bt),x.unbindTexture()},this.copyTextureToTexture=function(w,V,it=null,J=null,Q=0,Bt=0){let Wt,zt,Kt,te,pe,be,jt,Ne,nn,De=w.isCompressedTexture?w.mipmaps[Bt]:w.image;if(it!==null)Wt=it.max.x-it.min.x,zt=it.max.y-it.min.y,Kt=it.isBox3?it.max.z-it.min.z:1,te=it.min.x,pe=it.min.y,be=it.isBox3?it.min.z:0;else{let Ke=Math.pow(2,-Q);Wt=Math.floor(De.width*Ke),zt=Math.floor(De.height*Ke),w.isDataArrayTexture?Kt=De.depth:w.isData3DTexture?Kt=Math.floor(De.depth*Ke):Kt=1,te=0,pe=0,be=0}J!==null?(jt=J.x,Ne=J.y,nn=J.z):(jt=0,Ne=0,nn=0);let He=ht.convert(V.format),cn=ht.convert(V.type),$t;V.isData3DTexture?(T.setTexture3D(V,0),$t=G.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(T.setTexture2DArray(V,0),$t=G.TEXTURE_2D_ARRAY):(T.setTexture2D(V,0),$t=G.TEXTURE_2D),x.activeTexture(G.TEXTURE0),x.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,V.flipY),x.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),x.pixelStorei(G.UNPACK_ALIGNMENT,V.unpackAlignment);let mn=x.getParameter(G.UNPACK_ROW_LENGTH),Le=x.getParameter(G.UNPACK_IMAGE_HEIGHT),Fn=x.getParameter(G.UNPACK_SKIP_PIXELS),yn=x.getParameter(G.UNPACK_SKIP_ROWS),ui=x.getParameter(G.UNPACK_SKIP_IMAGES);x.pixelStorei(G.UNPACK_ROW_LENGTH,De.width),x.pixelStorei(G.UNPACK_IMAGE_HEIGHT,De.height),x.pixelStorei(G.UNPACK_SKIP_PIXELS,te),x.pixelStorei(G.UNPACK_SKIP_ROWS,pe),x.pixelStorei(G.UNPACK_SKIP_IMAGES,be);let sn=w.isDataArrayTexture||w.isData3DTexture,Be=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let Ke=K.get(w),Ai=K.get(V),Ve=K.get(Ke.__renderTarget),fi=K.get(Ai.__renderTarget);x.bindFramebuffer(G.READ_FRAMEBUFFER,Ve.__webglFramebuffer),x.bindFramebuffer(G.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let as=0;as<Kt;as++)sn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(w).__webglTexture,Q,be+as),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(V).__webglTexture,Bt,nn+as)),G.blitFramebuffer(te,pe,Wt,zt,jt,Ne,Wt,zt,G.DEPTH_BUFFER_BIT,G.NEAREST);x.bindFramebuffer(G.READ_FRAMEBUFFER,null),x.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||K.has(w)){let Ke=K.get(w),Ai=K.get(V);x.bindFramebuffer(G.READ_FRAMEBUFFER,D),x.bindFramebuffer(G.DRAW_FRAMEBUFFER,Z);for(let Ve=0;Ve<Kt;Ve++)sn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ke.__webglTexture,Q,be+Ve):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ke.__webglTexture,Q),Be?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ai.__webglTexture,Bt,nn+Ve):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ai.__webglTexture,Bt),Q!==0?G.blitFramebuffer(te,pe,Wt,zt,jt,Ne,Wt,zt,G.COLOR_BUFFER_BIT,G.NEAREST):Be?G.copyTexSubImage3D($t,Bt,jt,Ne,nn+Ve,te,pe,Wt,zt):G.copyTexSubImage2D($t,Bt,jt,Ne,te,pe,Wt,zt);x.bindFramebuffer(G.READ_FRAMEBUFFER,null),x.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Be?w.isDataTexture||w.isData3DTexture?G.texSubImage3D($t,Bt,jt,Ne,nn,Wt,zt,Kt,He,cn,De.data):V.isCompressedArrayTexture?G.compressedTexSubImage3D($t,Bt,jt,Ne,nn,Wt,zt,Kt,He,De.data):G.texSubImage3D($t,Bt,jt,Ne,nn,Wt,zt,Kt,He,cn,De):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Bt,jt,Ne,Wt,zt,He,cn,De.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Bt,jt,Ne,De.width,De.height,He,De.data):G.texSubImage2D(G.TEXTURE_2D,Bt,jt,Ne,Wt,zt,He,cn,De);x.pixelStorei(G.UNPACK_ROW_LENGTH,mn),x.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Le),x.pixelStorei(G.UNPACK_SKIP_PIXELS,Fn),x.pixelStorei(G.UNPACK_SKIP_ROWS,yn),x.pixelStorei(G.UNPACK_SKIP_IMAGES,ui),Bt===0&&V.generateMipmaps&&G.generateMipmap($t),x.unbindTexture()},this.initRenderTarget=function(w){K.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),x.unbindTexture()},this.resetState=function(){tt=0,et=0,gt=null,x.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}};var $r=class extends ts{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new wn;t.deleteAttribute("uv");let e=new An({side:Cn}),n=new An,s=new ko(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ce(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ks(t,n,6),a=new un;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ce(t,Xr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ce(t,Xr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ce(t,Xr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Ce(t,Xr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Ce(t,Xr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Ce(t,Xr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Xr(i){return new Fo({color:0,emissive:16777215,emissiveIntensity:i})}function er(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ue,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Vd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);let m=Vd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Vd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new _e(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let v=h.getComponent(u,m);a.setComponent(u+d,m,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var qr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},y_=new Ms(-1,1,1,-1,0,1),Mu=class extends Ue{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}},M_=new Mu,As=class{constructor(t){this._mesh=new Ce(M_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,y_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Rc=class extends Kn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ss.clone(t.uniforms),this.material=new ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new As(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var oa=class extends Kn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Pc=class extends Kn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ic=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new At);this._width=n.width,this._height=n.height,e=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rc(qr),this.copyPass.material.blending=ni,this.timer=new Ho}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}oa!==void 0&&(o instanceof oa?n=!0:o instanceof Pc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new At);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Lc=class extends Kn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ee}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Gd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ee(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Yr=class i extends Kn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new At(t.x,t.y):new At(256,256),this.clearColor=new ee(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,o,{type:xn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new on(r,o,{type:xn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new on(r,o,{type:xn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Gd;this.highPassUniforms=ss.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ze({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new At(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ss.clone(qr.uniforms),this.blendMaterial=new ze({uniforms:this.copyUniforms,vertexShader:qr.vertexShader,fragmentShader:qr.fragmentShader,premultipliedAlpha:!0,blending:zn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ee,this._oldClearAlpha=1,this._basic=new yi,this._fsQuad=new As(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new At(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new ze({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new At(.5,.5)},direction:{value:new At(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Yr.BlurDirectionX=new At(1,0);Yr.BlurDirectionY=new At(0,1);var aa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Dc=class extends Kn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ss.clone(aa.uniforms),this.material=new Nr({name:aa.name,uniforms:this.uniforms,vertexShader:aa.vertexShader,fragmentShader:aa.fragmentShader}),this._fsQuad=new As(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ee.getTransfer(this._outputColorSpace)===Fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Go?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ks?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$o?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Uc=(i,t,e=0,n=0,s=0)=>(i.translate(e,n,s),i.setAttribute("aPart",new _e(new Float32Array(i.attributes.position.count).fill(t),1)),i),ye=(i,t,e,n,s=0,r=0,o=0,a=0)=>{let l=new wn(i,t,e);return a&&l.rotateZ(a),Uc(l,n,s,r+t/2,o)},je=(i,t,e,n=0,s=0,r=0,o=i,a=10)=>Uc(new es(o,i,t,a),e,n,s+t/2,r),Nc=(i,t,e,n=0,s=0,r=0,o=10)=>Uc(new Vs(i,t,o),e,n,s+t/2,r),Wd=(i,t,e,n,s)=>Uc(new xs(i,8,6),t,e,n,s);function Xd(){let i={},t=(e,n,s={})=>{i[e]={geo:er(n),...s},n.forEach(r=>r.dispose())};return t("util",[je(.035,1.25,1,0,0,0,.02),ye(.07,.06,.16,1,0,1.22,.02),ye(.3,.12,.22,1,-.28,0,.2),ye(.3,.02,.22,2,-.28,.12,.2),je(.012,.3,4,-.38,.12,.26,.012,5),je(.012,.3,4,-.2,.12,.14,.012,5)],{rotor:[0,1.25,.11]}),t("oil",[je(.2,.26,1,-.2,0,.15),je(.205,.03,2,-.2,.19,.15),je(.15,.2,1,.18,0,.22),je(.155,.025,2,.18,.14,.22),je(.05,.85,1,.1,0,-.15),je(.06,.02,2,.1,.3,-.15),je(.06,.02,2,.1,.6,-.15),ye(.3,.02,.03,4,-.05,.3,-.15),je(.02,1.15,4,-.3,0,-.2,.015,6),Nc(.06,.22,3,-.3,1.15,-.2,7)]),t("agro",[...[-.3,0,.3].flatMap(e=>[je(.14,.5,1,e,0,0),Nc(.14,.12,1,e,.5,0),je(.145,.03,2,e,.36,0)]),ye(.06,.78,.06,4,.15,0,-.2),ye(.5,.025,.04,4,0,.74,-.1,.12)]),t("ind",[ye(.8,.22,.45,1),ye(.8,.05,.01,5,0,.09,.23),...[-.27,0,.27].map(e=>ye(.27,.09,.45,1,e,.2,0,.38)),je(.04,.72,1,.28,0,-.3,.03),je(.036,.04,6,.28,.7,-.3),je(.04,.6,1,.12,0,-.3,.03),je(.036,.04,6,.12,.58,-.3)],{smoke:[[.28,.76,-.3],[.12,.64,-.3]]}),t("base",[ye(.6,.3,.5,1,-.1),ye(.6,.03,.5,2,-.1,.3),ye(.55,.03,.06,4,-.05,.42,.3,.5),je(.05,1,1,.32,0,-.15,.035),je(.04,.04,6,.32,.98,-.15),je(.05,.8,1,.42,0,.1,.035),je(.04,.04,6,.42,.78,.1),Nc(.16,.14,4,-.38,0,.32,6)],{smoke:[[.32,1.05,-.15],[.42,.85,.1]]}),t("log",[...[-.22,0,.22].flatMap((e,n)=>[0,.1].flatMap((s,r)=>[ye(.2,.09,.09,(n+r)%2?2:1,e,0,s),...(n+r)%3?[ye(.2,.09,.09,(n+r)%2?1:2,e,.09,s)]:[]])),ye(.03,.5,.03,4,-.38,0,.05),ye(.03,.5,.03,4,.38,0,.05),ye(.84,.035,.05,4,0,.5,.05),ye(.06,.05,.07,1,.1,.45,.05),ye(.03,.03,.03,6,0,.535,.05)]),t("saude",[ye(.7,.3,.4,5),ye(.72,.02,.42,1,0,.3),ye(.06,.26,.03,2,0,.36,.1),ye(.2,.07,.03,2,0,.455,.1),je(.11,.01,2,.22,.32,-.05)]),t("tech",[ye(.6,.2,.4,1,.05,0,.1),ye(.6,.02,.41,2,.05,.07,.1),ye(.6,.02,.41,2,.05,.14,.1),je(.03,1.3,4,-.28,0,-.2,.008,6),Wd(.06,1,-.22,.9,-.2),Wd(.05,1,-.34,1.05,-.2),ye(.03,.03,.03,6,-.28,1.3,-.2)]),t("cons",[ye(.8,.2,.5,1),ye(.82,.05,.52,2,0,.14),ye(.24,.12,.02,5,0,0,.26),ye(.1,.04,.1,4,-.2,.2),ye(.1,.04,.1,4,.2,.2)]),t("imob",[ye(.35,.42,.3,5,.3,0,.1),ye(.36,.02,.31,1,.3,.42,.1),ye(.36,.02,.31,1,.3,.21,.1),ye(.035,1.2,.035,4,-.15),ye(.9,.03,.03,4,.05,1.2),ye(.12,.07,.06,1,-.33,1.17),ye(.006,.4,.006,4,.35,.8),ye(.03,.03,.03,6,.49,1.23)]),t("fin",[je(.13,.03,2),Nc(.1,.8,4,0,.03,0,8),ye(.03,.03,.03,6,0,.83)],{top:!0}),i}function $d(){let i=[0,1,2].map(n=>{let s=new wn(.04,.5,.012);return s.translate(0,.25,0),s.rotateZ(n*Math.PI*2/3),s}),t=new xs(.035,8,6),e=er([...i,t]);return[...i,t].forEach(n=>n.dispose()),e}var an=(i,t,e)=>Math.max(t,Math.min(e,i)),la=(i,t,e)=>{let n=an((e-i)/(t-i),0,1);return n*n*(3-2*n)},qd=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,bi=(i,t,e)=>i+(t-i)*e,wi=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},Yd=i=>i.t==="c"?i.mc?1.8+1.25*Math.log10(1+i.mc/1e8):1.8:i.t==="s"?1.2:i.v?1+.8*Math.log10(1+i.v/1e8):1;function S_(i){return i.t==="c"?i.mc?"tower":"block":i.t==="s"?"sub":i.t==="p"?"pawn":i.c==="fund"||i.c==="pen"||i.c==="gov"?"inv":"tile"}var Zd="float hash21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }";function Jd(i,t,e={}){let{palette:n,accent:s="#3cf0b4",reduced:r=!1,fixedQuality:o=!1}=e,a=t.nodes.length,l=t.mapa,c=Math.min(innerWidth,innerHeight)<700,h=new ee(s),d=100/l.W,u=100,f=l.H*d,m=I=>I*d-u/2,v=I=>I*d-f/2,g=.02,p={},y=(I,Y=new ee)=>(Y.set(I).getHSL(p),Y.setHSL(p.h,Math.min(1,p.s*1.55+.12),p.l*.86)),E=new Ec({canvas:i,antialias:!0,powerPreference:"high-performance"}),_=Math.min(devicePixelRatio||1,c?2:1.75);E.setPixelRatio(_),E.toneMapping=Ks,E.toneMappingExposure=1,E.outputColorSpace=Sn,E.shadowMap.enabled=!0,E.shadowMap.type=Zs,E.shadowMap.autoUpdate=!1;let b=new ee(329485),S=new ts;S.background=b,S.fog=new Bs(461590,160,420);let P=new gn(32,1,.3,1400),M=new Es(E);S.environment=M.fromScene(new $r,.04).texture,S.environmentIntensity=.22;let A=new ns(10469631,2.3);A.position.set(-60,110,40),S.add(A);let F=new ns(16755058,.7);F.position.set(90,30,-70),S.add(F),S.add(new qs(4874127,658450,1.5));let H=null,z=null;try{let I=new on(4,4,{type:xn,samples:c?2:4});H=new Ic(E,I),H.setPixelRatio(_),H.addPass(new Lc(S,P)),z=new Yr(new At(256,256),.5,.55,.8),H.addPass(z),H.addPass(new Dc)}catch{H=null}let X=new Array(a),D=new Float32Array(a),Z=new Float32Array(a),tt=new Float32Array(a),et=new Float32Array(a),gt=new Float32Array(a),rt=new Float32Array(a),ft=new Float32Array(a),dt=Uint8Array.from(l.sky||new Array(a).fill(0)),xt=new Uint8Array(a),pt=new Uint8Array(a),we=12.5,ge=3.1;for(let I=0;I<a;I++){let Y=t.nodes[I];X[I]=S_(Y),pt[I]=X[I]==="inv"?1:0,D[I]=m(l.x[I]),tt[I]=v(l.y[I]);let ut=l.lot&&l.lot[I]||0;if(xt[I]=ut>0?1:0,xt[I]){let ot=Yd(Y)*1.24*d,St=wi(I);rt[I]=ot*(.86+.3*St),ft[I]=ot*(1.14-.3*St),et[I]=ot*.6,X[I]==="tower"?gt[I]=.9+10.2*Math.pow(an(Math.log10(Y.mc/2e8)/Math.log10(4e3),0,1),1.5):gt[I]=ot*(X[I]==="block"?.42+.3*wi(I+7):.3),Z[I]=g}else dt[I]?(et[I]=Yd(Y)*.5*d+.12,gt[I]=et[I]*2.3,Z[I]=we+(dt[I]-1)*ge+(wi(I)-.5)*1.4):(et[I]=(.5+.1*Math.min(4,Math.log10(1+(Y.v||0)/1e8)))*d,gt[I]=et[I]*(X[I]==="tile"?1.3:2.1),Z[I]=g)}let Me=I=>Z[I]+gt[I],at=l.plates.map(I=>({...I})),Rt={uTex:{value:(()=>{let I=c?2048:4096,Y=Math.round(I*l.H/l.W),ut=I/l.W,ot=document.createElement("canvas");ot.width=I,ot.height=Y;let St=ot.getContext("2d");St.fillStyle="#000",St.fillRect(0,0,I,Y);let Dt=(wt,se)=>{let xe=new ee(wt);return`rgba(${Math.round(xe.r*255)},${Math.round(xe.g*255)},${Math.round(xe.b*255)},${se})`},Lt=(wt,se,xe,ve,Ge)=>{St.beginPath(),St.roundRect(wt,se,xe-wt,ve-se,Ge)};for(let wt of l.plates){let se=y(n.sector(wt.c)),xe=2.2*ut;Lt(wt.x0*ut,wt.y0*ut,wt.x1*ut,wt.y1*ut,xe);let ve=St.createLinearGradient(0,wt.y0*ut,0,wt.y1*ut);ve.addColorStop(0,Dt(se,.17)),ve.addColorStop(1,Dt(se,.07)),St.fillStyle=ve,St.fill()}St.globalCompositeOperation="lighter";for(let wt=0;wt<a;wt++){if(!xt[wt])continue;let se=t.nodes[wt],xe=l.lot[wt]*ut,ve=l.x[wt]*ut,Ge=l.y[wt]*ut,qe=y(se.t==="c"?n.sector(se.c):n.kind(se)),Ye=se.mc?.16+.34*an(Math.log10(se.mc/2e8)/3.6,0,1):.1,Pe=xe*(se.mc?2.1:1.5),rn=St.createRadialGradient(ve,Ge,0,ve,Ge,Pe);rn.addColorStop(0,Dt(qe,Ye)),rn.addColorStop(.45,Dt(qe,Ye*.4)),rn.addColorStop(1,Dt(qe,0)),St.fillStyle=rn,St.beginPath(),St.arc(ve,Ge,Pe,0,6.2832),St.fill()}St.globalCompositeOperation="source-over";for(let wt=0;wt<a;wt++){if(!xt[wt])continue;let se=l.lot[wt]*ut*.93,xe=l.x[wt]*ut,ve=l.y[wt]*ut;St.beginPath(),St.arc(xe,ve,se,0,6.2832),St.fillStyle="rgba(255,255,255,0.028)",St.fill(),St.lineWidth=Math.max(1,ut*.09),St.strokeStyle="rgba(255,255,255,0.11)",St.stroke()}for(let wt of l.plates)Lt(wt.x0*ut,wt.y0*ut,wt.x1*ut,wt.y1*ut,2.2*ut),St.lineWidth=Math.max(1.5,ut*.22),St.strokeStyle=Dt(y(n.sector(wt.c)),.8),St.stroke();let Gt=new ms(ot);return Gt.colorSpace=Sn,Gt.anisotropy=E.capabilities.getMaxAnisotropy(),Gt.generateMipmaps=!0,Gt.minFilter=Oi,Gt})()},uTime:{value:0},uSize:{value:new At(u,f)},uFocus:{value:new We(0,0,0,0)},uFocusK:{value:0},uDim:{value:0},uFogColor:{value:S.fog.color},uFogNear:{value:100},uFogFar:{value:400},uRise:{value:1}},B=new Ce(new ei(900,900),new ze({uniforms:Rt,vertexShader:"varying vec3 vWp; varying float vDepth; void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vWp = wp.xyz; vec4 mv = viewMatrix * wp; vDepth = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform sampler2D uTex; uniform float uTime; uniform vec2 uSize; uniform vec4 uFocus; uniform float uFocusK; uniform float uDim; uniform float uRise;
      uniform vec3 uFogColor; uniform float uFogNear; uniform float uFogFar; varying vec3 vWp; varying float vDepth;
      ${Zd}
      // luzes mi\xFAdas da cidade: uma por c\xE9lula, mais onde o bairro \xE9 mais denso
      float lights(vec2 p, float cell, float dens, float seed){
        vec2 q = p / cell; vec2 id = floor(q); vec2 f = fract(q) - 0.5;
        float h = hash21(id + seed);
        vec2 jit = (vec2(hash21(id + seed + 7.3), hash21(id + seed + 2.9)) - 0.5) * 0.5;
        float tw = 0.75 + 0.25 * sin(uTime * (0.6 + 2.0 * hash21(id + 5.1)) + h * 40.0);
        float on = step(1.0 - dens, h);
        float px = fwidth(q.x) + fwidth(q.y);
        float dot_ = smoothstep(0.13, 0.03, length(f - jit));
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
        // tr\xE2nsito: far\xF3is brancos num sentido, lanternas vermelhas no outro, correndo pela malha de ruas
        float fwS = fwidth(vWp.x);
        float nearK = (1.0 - smoothstep(0.012, 0.05, fwS)) * inside * smoothstep(0.02, 0.1, lum) * uRise;
        if (nearK > 0.001) {
          for (int ax = 0; ax < 2; ax++) {
            vec2 pq = ax == 0 ? vWp.xz : vWp.zx;
            float lane = floor(pq.y / 1.6 + 0.5);
            float off = pq.y - lane * 1.6;
            float sideL = sign(off);
            float lineK = smoothstep(0.03, 0.012, abs(abs(off) - 0.035));
            float sp = (0.5 + 0.7 * hash21(vec2(lane, float(ax) + 3.0))) * sideL;
            float u = pq.x * 5.0 - uTime * sp * 5.0;
            float car = step(0.86, hash21(vec2(floor(u), lane * 7.0 + sideL))) * smoothstep(0.32, 0.1, abs(fract(u) - 0.5));
            col += mix(vec3(1.0, 0.12, 0.08), vec3(1.0, 0.92, 0.75), step(0.0, sideL * (ax == 0 ? 1.0 : -1.0))) * car * lineK * nearK * 1.1;
          }
        }
        // setor em foco: o resto apaga
        float inF = step(uFocus.x, vWp.x) * step(vWp.x, uFocus.z) * step(uFocus.y, vWp.z) * step(vWp.z, uFocus.w);
        col *= 1.0 - 0.8 * uFocusK * (1.0 - inF);
        col *= 1.0 - 0.62 * uDim;
        float fog = smoothstep(uFogNear, uFogFar, vDepth);
        col = mix(col, uFogColor, fog);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`}));B.rotation.x=-Math.PI/2,B.renderOrder=-2,S.add(B);let lt=l.plates.map((I,Y)=>({...I,j:Y,col:new ee(n.sector(I.c)),x0:m(I.x0),x1:m(I.x1),z0:v(I.y0),z1:v(I.y1)})),bt={uRise:{value:1.4},uDim:{value:0},uTime:{value:0},uAcc:{value:h},uFocus:{value:-1}},It=Array.from({length:a},()=>[]),Nt=[],Ut="attribute float aHL; attribute float aVis; attribute float aDelay; attribute float aPlate; attribute float aSeed; attribute vec3 aSize; attribute float aLit; attribute float aPart; varying float vPart; uniform float uRise; uniform float uTime; uniform float uFocus; varying vec3 vOp; varying vec3 vOn; varying vec3 vSize; varying float vHL; varying float vOther; varying float vSeed; varying float vLit;",kt=`varying float vPart; varying vec3 vOp; varying vec3 vOn; varying vec3 vSize; varying float vHL; varying float vOther; varying float vSeed; varying float vLit; uniform float uDim; uniform float uTime; uniform vec3 uAcc;
${Zd}`;function Pt(I,Y,ut,ot,St,Dt){let Lt=Math.max(1,ot.length),Gt=new Float32Array(Lt),wt=new Float32Array(Lt).fill(1),se=new Float32Array(Lt),xe=new Float32Array(Lt),ve=new Float32Array(Lt),Ge=new Float32Array(Lt*3),qe=new Float32Array(Lt),Ye=(On,Qn,_a=1)=>Y.setAttribute(On,new ps(Qn,_a));Ye("aHL",Gt),Ye("aVis",wt),Ye("aDelay",se),Ye("aPlate",xe),Ye("aSeed",ve),Ye("aSize",Ge,3),Ye("aLit",qe),ut.onBeforeCompile=On=>{Object.assign(On.uniforms,bt),On.vertexShader=On.vertexShader.replace("#include <common>",`#include <common>
${Ut}`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float rise = smoothstep(aDelay, aDelay + 0.35, uRise);
          vPart = aPart; vOp = position; vOn = normal; vSize = aSize; vHL = aHL; vSeed = aSeed; vLit = aLit;
          vOther = uFocus >= 0.0 && abs(uFocus - aPlate) > 0.5 ? 1.0 : 0.0;
          ${Dt==="spin"?"float sa = uTime * (1.1 + 1.4 * aSeed) + aSeed * 20.0; transformed.xy = mat2(cos(sa), -sin(sa), sin(sa), cos(sa)) * transformed.xy; transformed *= max(0.001, rise * aVis);":Dt==="bld"?"transformed.y *= max(0.001, rise * aVis); transformed.xz *= aVis;":"transformed *= max(0.001, rise * aVis); transformed.y += aLit * 0.22 * sin(uTime * 0.9 + aSeed * 40.0) / max(0.05, aSize.x);"}`),On.fragmentShader=On.fragmentShader.replace("#include <common>",`#include <common>
${kt}`).replace("#include <color_fragment>",`#include <color_fragment>
          float top = step(0.5, vOn.y);
          float isHL = step(0.01, vHL);
          float dimK = max(uDim * (1.0 - isHL), 0.8 * vOther * (1.0 - isHL));
          vec3 sec = diffuseColor.rgb;
          vec3 glow = vec3(0.0);
          ${Dt==="bld"?`
          float live = 1.0 - 0.93 * dimK;
          if (vPart > 0.5) {
            // a pe\xE7a do setor: concreto, luz do setor, chama, metal, janelas, luz de obst\xE1culo
            float up = 0.75 + 0.25 * vOn.y;
            if (vPart < 1.5) { diffuseColor.rgb = mix(vec3(0.3, 0.33, 0.39), sec, 0.2) * up; glow = sec * 0.035 * live; }
            else if (vPart < 2.5) { diffuseColor.rgb = sec * 0.5; glow = sec * 1.15 * live; }
            else if (vPart < 3.5) { float fl = 0.72 + 0.28 * sin(uTime * 13.0 + vSeed * 50.0) * sin(uTime * 7.3 + vOp.y * 9.0); diffuseColor.rgb = vec3(0.3, 0.1, 0.02); glow = vec3(1.0, 0.42, 0.08) * 2.2 * fl * live; }
            else if (vPart < 4.5) { diffuseColor.rgb = vec3(0.1, 0.11, 0.14) * up; }
            else if (vPart < 5.5) {
              vec2 q = vec2((vOp.x + vOp.z) * 13.0, vOp.y * 12.0); vec2 f = fract(q);
              float on = step(0.45, hash21(floor(q) + floor(vSeed * 997.0) / 997.0 * 17.0));
              float mk = smoothstep(0.1, 0.2, f.x) * smoothstep(0.9, 0.8, f.x) * smoothstep(0.2, 0.32, f.y) * smoothstep(0.86, 0.74, f.y);
              float px = max(fwidth(q.x), fwidth(q.y));
              diffuseColor.rgb = vec3(0.07, 0.08, 0.11);
              glow = vec3(1.0, 0.68, 0.34) * mix(on * mk, 0.22, smoothstep(0.4, 1.0, px)) * 0.8 * (1.0 - top) * live;
            } else { diffuseColor.rgb = vec3(0.2, 0.02, 0.02); glow = vec3(1.0, 0.1, 0.06) * 2.4 * (0.25 + 0.75 * step(0.0, sin(uTime * 2.6 + vSeed * 40.0))) * live; }
            glow += uAcc * vHL * vHL * 0.3 + sec * step(0.01, vHL) * (1.0 - vHL) * 0.12;
          } else {
          // fachada de vidro escuro com janelas acesas; a coroa e o teto levam a cor do setor
          float side = abs(vOn.x) > 0.5 ? 1.0 : 0.0;
          float fw = mix(vSize.x, vSize.z, side);
          float along = mix(vOp.x, vOp.z, side) + 0.5;
          float hgt = vOp.y * vSize.y;
          float nx = max(2.0, floor(fw / 0.085)), ny = max(2.0, floor(vSize.y / 0.11));
          vec2 q = vec2(along * nx, vOp.y * ny);
          vec2 id = floor(q), f = fract(q);
          float face = floor(vOn.x + 0.5) + floor(vOn.z + 0.5) * 2.0;
          float sd = floor(vSeed * 997.0) / 997.0;
          float h = hash21(id + sd * 71.0 + face * 13.0);
          float tw = hash21(id * 1.7 + sd * 31.0 + face);
          float flick = step(0.93, tw) * floor(uTime * 0.35 + tw * 9.0) * 0.37;
          float on = step(1.0 - vLit, fract(h + flick));
          float mask = smoothstep(0.1, 0.2, f.x) * smoothstep(0.9, 0.8, f.x) * smoothstep(0.2, 0.32, f.y) * smoothstep(0.86, 0.74, f.y);
          float px = max(fwidth(q.x), fwidth(q.y));
          float win = mix(on * mask, vLit * 0.2, smoothstep(0.4, 1.0, px)) * (1.0 - top);
          vec3 winCol = mix(vec3(1.0, 0.66, 0.32), vec3(0.62, 0.8, 1.0), step(0.78, hash21(id + sd * 3.1)));
          winCol = mix(winCol, sec, 0.22 + 0.4 * smoothstep(0.4, 1.0, px));
          float crownH = min(0.14, vSize.y * 0.12);
          float crown = smoothstep(vSize.y - crownH - 0.012, vSize.y - crownH, hgt) * (1.0 - top);
          float edge = max(abs(vOp.x), abs(vOp.z)) * 2.0;
          float roofRim = top * smoothstep(0.86, 0.95, edge);
          float foot = (1.0 - top) * (1.0 - smoothstep(0.0, 0.5, hgt));
          diffuseColor.rgb = mix(vec3(0.05, 0.065, 0.1), sec, 0.09 + 0.06 * top);
          // luz de obst\xE1culo no topo dos mais altos, piscando
          float beacon = top * smoothstep(0.1, 0.05, length(vOp.xz)) * step(3.2, vSize.y) * (0.35 + 0.65 * step(0.0, sin(uTime * 2.2 + vSeed * 40.0)));
          glow = (winCol * win * 0.78 + sec * (crown * 1.25 + roofRim * 0.95 + top * 0.04 + foot * 0.1) + vec3(1.0, 0.12, 0.08) * beacon * 2.2) * live;
          glow += uAcc * vHL * vHL * (0.1 + 1.3 * crown + 0.9 * roofRim + 0.25 * top + 0.25 * foot) * (0.9 + 0.1 * sin(uTime * 3.0));
          glow += sec * step(0.01, vHL) * (1.0 - vHL) * (0.5 * crown + 0.4 * roofRim);
          }`:`
          // pe\xE7as pequenas: luzes da cor do tipo
          float live = 1.0 - 0.92 * dimK;
          diffuseColor.rgb = sec * (0.35 + 0.3 * top);
          glow = sec * (0.42 + 0.38 * vLit) * live * (0.75 + 0.5 * smoothstep(-0.2, 1.0, vOn.y));
          glow += uAcc * vHL * vHL * 0.9 + sec * step(0.01, vHL) * 0.35;`}
          diffuseColor.rgb *= 1.0 - 0.85 * dimK;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += glow;`)};let Pe=new ks(Y,ut,Lt),rn=new Oe,or=new ee,Ci=new N;return ot.forEach((On,Qn)=>{It[On].push([Pe,Qn]),St(On,rn,or,Ci),Pe.setMatrixAt(Qn,rn),Pe.setColorAt(Qn,or),xe[Qn]=l.plate[On],ve[Qn]=wi(On*3+1),Ge.set([Ci.x,Ci.y,Ci.z],Qn*3),qe[Qn]=Ci.w||0}),Pe.count=ot.length,Pe.instanceMatrix.needsUpdate=!0,Pe.instanceColor&&(Pe.instanceColor.needsUpdate=!0),Pe.userData={name:I,idx:ot,hl:Gt,vis:wt,delay:se,geo:Y},Pe.frustumCulled=!1,S.add(Pe),Nt.push(Pe),Pe}let Zt=new N,ne=new Yn,Re=new N,ie=()=>{let I=new wn(1,1,1);return I.translate(0,.5,0),I},ce=()=>{let I=new wn(1,.66,1);I.translate(0,.33,0);let Y=new wn(.72,.34,.72);return Y.translate(0,.83,0),er([I,Y])},G=I=>X[I]==="tower"?.38+.3*wi(I+3):X[I]==="block"?.2+.15*wi(I+3):.16,ae=(I,Y,ut,ot)=>{Y.compose(Zt.set(D[I],g,tt[I]),ne.identity(),Re.set(rt[I],gt[I],ft[I]));let St=t.nodes[I];y(St.t==="c"?n.sector(St.c):n.kind(St),ut),ot.set(rt[I],gt[I],ft[I]),ot.w=G(I)},he=()=>new An({color:16777215,roughness:.36,metalness:.4,envMapIntensity:.55}),C=[],x=[];for(let I=0;I<a;I++)xt[I]&&(X[I]==="tower"&&gt[I]>3.2?C:x).push(I);Pt("tall",ce(),he(),C,ae,"bld"),Pt("low",ie(),he(),x,ae,"bld");let $=Xd(),K=[],T=[],U=new Map;for(let[I,Y]of Object.entries($)){let ut=[];for(let ot=0;ot<a;ot++)xt[ot]&&t.nodes[ot].t==="c"&&t.nodes[ot].c===I&&(!Y.top||X[ot]==="tower"&&gt[ot]>3.2)&&ut.push(ot);ut.length&&Pt(`prop-${I}`,Y.geo,he(),ut,(ot,St,Dt,Lt)=>{let Gt=(rt[ot]+ft[ot])/2,wt=Y.top?Gt*.62:Gt*(X[ot]==="tower"?.95:.8),se=Y.top?D[ot]:D[ot]+rt[ot]/2+wt*.5,xe=Y.top?g+gt[ot]:g,ve=Y.top?tt[ot]:tt[ot]+ft[ot]*.12;St.compose(Zt.set(se,xe,ve),ne.identity(),Re.set(wt,wt,wt)),y(n.sector(I),Dt),Lt.set(wt,wt,wt),Lt.w=0,U.set(ot,[se,ve,wt]),Y.rotor&&T.push([ot,se+Y.rotor[0]*wt,xe+Y.rotor[1]*wt,ve+Y.rotor[2]*wt,wt]);for(let Ge of Y.smoke||[])K.push([ot,se+Ge[0]*wt,xe+Ge[1]*wt,ve+Ge[2]*wt,wt])},"bld")}if(T.length){let I=new Map(T.map(Y=>[Y[0],Y]));Pt("rotor",$d(),new An({color:16777215,roughness:.5}),T.map(Y=>Y[0]),(Y,ut,ot,St)=>{let Dt=I.get(Y);ut.compose(Zt.set(Dt[1],Dt[2],Dt[3]),ne.identity(),Re.set(Dt[4],Dt[4],Dt[4])),ot.setRGB(.8,.86,.95),St.set(Dt[4],Dt[4],Dt[4]),St.w=0},"spin")}let W={pawn:[],tile:[],inv:[]};for(let I=0;I<a;I++)xt[I]||W[X[I]==="pawn"?"pawn":X[I]==="inv"?"inv":"tile"].push(I);let L=(()=>{let I=new es(.42,.5,.2,9,1,!1);I.translate(0,.1,0);let Y=new es(.16,.32,.55,9,1,!0);Y.translate(0,.47,0);let ut=new xs(.24,9,6);ut.translate(0,.86,0);let ot=er([I,Y,ut]);return ot.scale(1,1.9,1),ot})(),k=(()=>{let I=new wn(1.3,1.3,1.3);return I.translate(0,.65,0),I})(),nt=(()=>{let I=new Do(1,0);return I.scale(.82,1.15,.82),I.translate(0,1.15,0),I})(),q=(I,Y,ut,ot)=>{let St=et[I];Y.compose(Zt.set(D[I],Z[I],tt[I]),ne.identity(),Re.set(St,St,St)),ut.set(n.kind(t.nodes[I])),ot.set(St,St,St),ot.w=dt[I]?1:0},mt=I=>new An({color:16777215,roughness:.35,metalness:.2,flatShading:!!I});Pt("pawn",L,mt(),W.pawn,q,"small"),Pt("tile",k,mt(),W.tile,q,"small"),Pt("inv",nt,mt(!0),W.inv,q,"small");let Mt=[];for(let I=0;I<a;I++)xt[I]||Mt.push(I);let Et={uDim:{value:0},uPx:{value:1},uRise:{value:1},uTime:{value:0},uFocus:{value:-1}},Vt=(()=>{let I=Mt.length,Y=new Float32Array(I*3),ut=new Float32Array(I*3),ot=new Float32Array(I),St=new ee,Dt=new Ue;Mt.forEach((wt,se)=>{Y.set([D[wt],Z[wt]+gt[wt]*.55,tt[wt]],se*3),St.set(n.kind(t.nodes[wt])),ut.set([St.r,St.g,St.b],se*3),ot[se]=dt[wt]?et[wt]*5.5:et[wt]*3.4}),Dt.setAttribute("position",new _e(Y,3)),Dt.setAttribute("aCol",new _e(ut,3)),Dt.setAttribute("aSize",new _e(ot,1)),Dt.setAttribute("aHL",new _e(new Float32Array(I),1)),Dt.setAttribute("aVis",new _e(new Float32Array(I).fill(1),1)),Dt.setAttribute("aSky",new _e(Float32Array.from(Mt,wt=>dt[wt]?1:0),1)),Dt.setAttribute("aPlate",new _e(Float32Array.from(Mt,wt=>l.plate[wt]),1));let Lt=new ze({uniforms:Et,transparent:!0,depthWrite:!1,blending:zn,vertexShader:`attribute vec3 aCol; attribute float aSize; attribute float aHL; attribute float aVis; attribute float aSky; attribute float aPlate; uniform float uPx; uniform float uDim; uniform float uRise; uniform float uTime; uniform float uFocus; varying vec3 vCol; varying float vA;
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
          vCol = aCol; }`,fragmentShader:"varying vec3 vCol; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = pow(max(0.0, 1.0 - d), 2.2); gl_FragColor = vec4(vCol * a * vA, 1.0); }"}),Gt=new Hs(Dt,Lt);return Gt.frustumCulled=!1,Gt.renderOrder=2,S.add(Gt),Gt})(),qt=new Int32Array(a).fill(-1);Mt.forEach((I,Y)=>{qt[I]=Y});let O={uTime:{value:0},uPx:{value:1},uDim:{value:0}};if(!r){let I=c?260:520,Y=new Float32Array(I*3),ut=new Float32Array(I);for(let Dt=0;Dt<I;Dt++)Y.set([(wi(Dt)-.5)*u*1.15,wi(Dt+.5)*24,(wi(Dt*1.7+3)-.5)*f*1.2],Dt*3),ut[Dt]=wi(Dt*2.3+9);let ot=new Ue;ot.setAttribute("position",new _e(Y,3)),ot.setAttribute("aS",new _e(ut,1));let St=new Hs(ot,new ze({uniforms:O,transparent:!0,depthWrite:!1,blending:zn,vertexShader:"attribute float aS; uniform float uTime; uniform float uPx; varying float vA; void main(){ vec3 p = position; p.y = mod(p.y + uTime * (0.12 + 0.25 * aS), 24.0); p.x += sin(uTime * 0.2 + aS * 30.0) * 0.6; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((0.1 + 0.16 * aS) * uPx / -mv.z, 1.0, 5.0); vA = (0.1 + 0.25 * aS) * smoothstep(0.0, 2.0, p.y) * smoothstep(24.0, 18.0, p.y); }",fragmentShader:"uniform float uDim; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(0.75, 0.86, 1.0) * max(0.0, 1.0 - d) * vA * (1.0 - 0.6 * uDim), 1.0); }"}));St.frustumCulled=!1,S.add(St)}let _t={uTime:{value:0},uPx:{value:1},uDim:{value:0},uRise:{value:1}};if(K.length&&!r){let Y=K.length*5,ut=new Float32Array(Y*3),ot=new Float32Array(Y*2);K.forEach((Lt,Gt)=>{for(let wt=0;wt<5;wt++)ut.set([Lt[1],Lt[2],Lt[3]],(Gt*5+wt)*3),ot.set([(wt+wi(Gt))/5,Lt[4]],(Gt*5+wt)*2)});let St=new Ue;St.setAttribute("position",new _e(ut,3)),St.setAttribute("aPh",new _e(ot,2));let Dt=new Hs(St,new ze({uniforms:_t,transparent:!0,depthWrite:!1,blending:zn,vertexShader:"attribute vec2 aPh; uniform float uTime; uniform float uPx; varying float vA; void main(){ float t = fract(uTime * 0.16 + aPh.x); vec3 p = position; p.y += t * 1.5 * aPh.y; p.x += (t * t * 0.7 + 0.06 * sin(uTime + aPh.x * 20.0)) * aPh.y; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((0.12 + 0.5 * t) * aPh.y * uPx / -mv.z, 1.0, 60.0); vA = smoothstep(0.0, 0.12, t) * (1.0 - t) * 0.2; }",fragmentShader:"uniform float uDim; uniform float uRise; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(0.62, 0.68, 0.8) * pow(max(0.0, 1.0 - d), 1.5) * vA * (1.0 - 0.85 * uDim) * smoothstep(1.0, 1.35, uRise), 1.0); }"}));Dt.frustumCulled=!1,S.add(Dt)}let j=26,ht=new N,Tt=new N,yt=new N;function Xt(I,Y){let ut=dt[I]?Z[I]+gt[I]*.15:Me(I)*.9,ot=Me(Y);ht.set(D[I],ut,tt[I]),Tt.set(D[Y],ot,tt[Y]);let St=Math.hypot(D[Y]-D[I],tt[Y]-tt[I]);return dt[I]?yt.set(bi(D[Y],D[I],.12),bi(ot,ut,.82),bi(tt[Y],tt[I],.12)):xt[I]?yt.set((D[I]+D[Y])/2,Math.max(ut,ot)+.7+St*.3,(tt[I]+tt[Y])/2):yt.set(bi(D[I],D[Y],.6),Math.max(ut,ot)+.12+St*.22,bi(tt[I],tt[Y],.6)),new Gs(ht.clone(),yt.clone(),Tt.clone())}let Yt=(I,Y)=>!dt[I]&&!xt[I]&&(l.anchor[I]===Y||!xt[Y]&&!dt[Y]&&l.anchor[I]===l.anchor[Y]),Ie={uDim:{value:0},uAlpha:{value:1},uAcc:{value:h},uFar:{value:1}},Te=new ze({uniforms:Ie,transparent:!0,depthWrite:!1,blending:zn,vertexShader:"attribute float aT; attribute vec2 aW; varying float vT; varying vec2 vW; void main(){ vT = aT; vW = aW; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uAlpha; uniform float uDim; uniform vec3 uAcc; uniform float uFar; varying float vT; varying vec2 vW;
      void main(){ float a = smoothstep(0.0, 0.08, vT) * (0.35 + 0.65 * vT); vec3 c = mix(vec3(0.55, 0.68, 1.0), mix(vec3(0.6, 0.85, 1.0), uAcc, 0.55), vW.y);
        gl_FragColor = vec4(c * a * vW.x * uAlpha * (1.0 - 0.94 * uDim) * mix(uFar, 1.0, 0.35 * vW.y), 1.0); }`}),Xe=null;function pn(I){let Y=[],ut=[],ot=[],St=(Lt,Gt,wt,se,xe,ve,Ge,qe,Ye,Pe)=>{Y.push(Lt,Gt,wt,se,xe,ve),ut.push(Ge,qe),ot.push(Ye,Pe,Ye,Pe)};for(let[Lt,Gt,,wt]of t.edges||[]){if(I&&(!I[Lt]||!I[Gt]))continue;let se=wt&1;if(Yt(Lt,Gt)){let Pe=D[Gt]-D[Lt],rn=tt[Gt]-tt[Lt],or=Math.hypot(Pe,rn)||1,Ci=xt[Gt]?Math.min(.92,Math.max(rt[Gt],ft[Gt])*.5/or):0;St(D[Lt],g+.02,tt[Lt],D[Gt]-Pe*Ci,g+.02,tt[Gt]-rn*Ci,.2,1,se?.3:.11,se);continue}let xe=Xt(Lt,Gt),ve=se?.15:.05,Ge=0,qe=0,Ye=0;for(let Pe=0;Pe<=j;Pe++){let rn=xe.getPoint(Pe/j,ht);Pe&&St(Ge,qe,Ye,rn.x,rn.y,rn.z,(Pe-1)/j,Pe/j,ve,se),Ge=rn.x,qe=rn.y,Ye=rn.z}}let Dt=new Ue;Dt.setAttribute("position",new _e(new Float32Array(Y),3)),Dt.setAttribute("aT",new _e(new Float32Array(ut),1)),Dt.setAttribute("aW",new _e(new Float32Array(ot),2)),Xe?(Xe.geometry.dispose(),Xe.geometry=Dt):(Xe=new Mo(Dt,Te),Xe.frustumCulled=!1,Xe.renderOrder=1,S.add(Xe))}pn(null);let Wn={uTime:{value:0},uAcc:{value:h},uGrow:{value:1},uPx:{value:1},uMinPx:{value:_}},sr=new ze({uniforms:Wn,transparent:!0,depthWrite:!1,blending:zn,vertexShader:`attribute float aPhase; attribute float aCtl; attribute float aLen; attribute float aHead; attribute float aRad; attribute vec3 aCenter; uniform float uPx; uniform float uMinPx;
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
      }`}),ci=new Ce(new Ue,sr);ci.frustumCulled=!1,ci.renderOrder=3,S.add(ci);let hi=1,Ft=new N(0,1,0),Jt=new Yn;function ue(I){if(ci.geometry.dispose(),!I.length){ci.geometry=new Ue;return}let Y=(ot,St,Dt)=>ot.setAttribute(St,new _e(new Float32Array(ot.attributes.position.count).fill(Dt),1)),ut=[];I.slice(0,320).forEach(([ot,St,Dt,Lt],Gt)=>{let wt=Xt(ot,St),se=wt.getLength(),xe=(.035+.075*Math.sqrt(an((Lt>0?Lt:Dt?50:8)/100,.02,1)))*(c?1.25:1),ve=new $s(wt,an(Math.round(se*2.2),14,80),xe,6,!1),Ge=(rn,or,Ci,On)=>{let Qn=rn.attributes.position.count,_a=new Float32Array(Qn*3);for(let qc=0;qc<Qn;qc++)_a.set([or,Ci,On],qc*3);rn.setAttribute("aCenter",new _e(_a,3))};Y(ve,"aPhase",Gt*.137%1),Y(ve,"aCtl",Dt?1:0),Y(ve,"aLen",se),Y(ve,"aHead",0),Y(ve,"aRad",xe),Ge(ve,0,0,0),ut.push(ve);let qe=new Vs(xe*2.6,xe*7,10,1),Ye=wt.getTangent(.985,ht).normalize();qe.translate(0,xe*3.5,0),qe.applyQuaternion(Jt.setFromUnitVectors(Ft,Ye));let Pe=wt.getPoint(1,Tt);qe.translate(Pe.x-Ye.x*xe*7,Pe.y-Ye.y*xe*7,Pe.z-Ye.z*xe*7),Y(qe,"aPhase",0),Y(qe,"aCtl",Dt?1:0),Y(qe,"aLen",se),Y(qe,"aHead",1),Y(qe,"aRad",xe),Ge(qe,Pe.x,Pe.y,Pe.z),ut.push(qe)}),ci.geometry=er(ut),ut.forEach(ot=>ot.dispose()),hi=0}let de={v:0,to:0},ke={v:0,to:0,plate:-1};function Je(I,Y=.7){for(let ot of Nt)ot.userData.hl.fill(0);let ut=Vt.geometry.attributes.aHL;if(ut.array.fill(0),I)for(let[ot,St]of I){for(let Dt of It[ot])Dt[0].userData.hl[Dt[1]]=St;qt[ot]>=0&&(ut.array[qt[ot]]=St)}for(let ot of Nt)ot.userData.geo.attributes.aHL.needsUpdate=!0;ut.needsUpdate=!0,de.to=I?Y:0}function Rn(I){if(ke.plate=I,ke.to=I>=0?1:0,bt.uFocus.value=Et.uFocus.value=I,I>=0){let Y=lt[I];Rt.uFocus.value.set(Y.x0,Y.z0,Y.x1,Y.z1)}}function Pn(I){for(let ut of Nt){let{idx:ot,vis:St,geo:Dt}=ut.userData;ot.forEach((Lt,Gt)=>{St[Gt]=I[Lt]?1:0}),Dt.attributes.aVis.needsUpdate=!0}let Y=Vt.geometry.attributes.aVis;Mt.forEach((ut,ot)=>{Y.array[ot]=I[ut]?1:0}),Y.needsUpdate=!0,pn(I)}let $e={t0:0,dur:0};function Xn(I=5200){let Y=0;for(let ot=0;ot<a;ot++)gt[ot]>gt[Y]&&xt[ot]&&(Y=ot);for(let ot of Nt){let{idx:St,delay:Dt,geo:Lt}=ot.userData;St.forEach((Gt,wt)=>{Dt[wt]=an(Math.hypot(D[Gt]-D[Y],(tt[Gt]-tt[Y])*1.2)/95,0,1)*.85+Gt%7*.01}),Lt.attributes.aDelay.needsUpdate=!0}bt.uRise.value=0,$e.t0=performance.now(),$e.dur=I*.8;let ut={x:ct.tx,z:ct.tz,d:ct.td};ct.x=D[Y]+3,ct.z=tt[Y]+6,ct.d=30,ct.yaw=-.5,ct.fly={a:{x:ct.x,z:ct.z,d:ct.d,yaw:ct.yaw},b:{...ut,yaw:0},t0:performance.now(),dur:I,intro:!0},Ei=3}let Ei=0;function Ls(){if(ct.fly&&ct.fly.intro){let I=ct.fly;ct.fly=null,ct.tx=I.b.x,ct.tz=I.b.z,ct.td=I.b.d,ct.yaw=0}$e.dur&&($e.t0=Math.min($e.t0,performance.now()-$e.dur*.7))}let Qt={W:1,H:1,offX:0,offY:0,toX:0,toY:0,inset:{l:0,r:0,t:0,b:0}},ct={x:0,z:0,d:160,tx:0,tz:0,td:160,vx:0,vz:0,tilt:.5,yaw:0,sway:0,idleAt:performance.now(),fly:null},jn=7,qi=Math.max(260,f*2.4),os=I=>.5+.48*(1-la(16,120,I));function w(){ct.tilt=os(ct.d);let I=ct.yaw+ct.sway,Y=Math.sin(ct.tilt)*ct.d;P.position.set(ct.x+Math.sin(I)*Y,Math.cos(ct.tilt)*ct.d,ct.z+Math.cos(I)*Y),P.up.set(0,1,0),P.lookAt(ct.x,0,ct.z),S.fog.near=ct.d*1.05,S.fog.far=ct.d*3.4,Rt.uFogNear.value=S.fog.near,Rt.uFogFar.value=S.fog.far}let V=new Ys,it=new At;function J(I,Y,ut=g){it.set(I/Qt.W*2-1,-(Y/Qt.H)*2+1),V.setFromCamera(it,P);let ot=(ut-V.ray.origin.y)/V.ray.direction.y;return V.ray.origin.clone().addScaledVector(V.ray.direction,ot)}function Q(I,Y,ut,ot,St=1.08){let Dt=P.fov*Math.PI/360,Lt=Qt.inset,Gt=Math.max(200,Qt.W-Lt.l-Lt.r),wt=Math.max(160,Qt.H-Lt.t-Lt.b),se=Gt/wt,xe=(Y-I)*St,ve=(ot-ut)*St,Ge=100;for(let qe=0;qe<4;qe++){let Ye=os(Ge),Pe=ve/2*(Math.cos(Ye)/Math.tan(Dt)+Math.sin(Ye)),rn=xe/2/(Math.tan(Dt)*se)+ve/2*Math.sin(Ye)*.6;Ge=Math.max(Pe,rn)*(Qt.H/wt)}return an(Ge+1,jn,qi)}function Bt(I,Y,ut,ot=1100){ct.fly={a:{x:ct.x,z:ct.z,d:ct.d,yaw:ct.yaw},b:{x:I,z:Y,d:ut,yaw:0},t0:performance.now(),dur:ot},ct.tx=I,ct.tz=Y,ct.td=ut,ct.vx=ct.vz=0}function Wt(I,Y,ut,ot,St={}){let Dt=Math.max(St.minD||jn,Q(I,Y,ut,ot,St.pad||1.12));Bt((I+Y)/2,(ut+ot)/2+(St.dz||0),Dt,St.dur||1100)}function zt(I,Y={}){if(!I.length)return;let ut=1/0,ot=-1/0,St=1/0,Dt=-1/0;for(let Gt of I)ut=Math.min(ut,D[Gt]-et[Gt]),ot=Math.max(ot,D[Gt]+et[Gt]),St=Math.min(St,tt[Gt]-et[Gt]-Me(Gt)*.75-.6),Dt=Math.max(Dt,tt[Gt]+et[Gt]+.4);let Lt=Y.minSpan||14;if(ot-ut<Lt){let Gt=(ut+ot)/2;ut=Gt-Lt/2,ot=Gt+Lt/2}if(Dt-St<Lt*.6){let Gt=(St+Dt)/2;St=Gt-Lt*.3,Dt=Gt+Lt*.3}Wt(ut,ot,St,Dt,Y)}function Kt(I,Y={}){let ut=lt[I];Wt(ut.x0,ut.x1,ut.z0-2.5,ut.z1,{pad:1.06,...Y})}function te(I=1100){Wt(-u/2,u/2,-f/2-3,f/2,{pad:1.03,dur:I})}function pe(I,Y){let ut=J(Qt.W/2,Qt.H/2),ot=J(Qt.W/2+I,Qt.H/2+Y);ct.x-=ot.x-ut.x,ct.z-=ot.z-ut.z,ct.tx=ct.x,ct.tz=ct.z,ct.fly=null,Ne()}function be(I,Y){let ut=J(Qt.W/2,Qt.H/2),ot=J(Qt.W/2+I*16,Qt.H/2+Y*16);ct.vx=-(ot.x-ut.x),ct.vz=-(ot.z-ut.z)}function jt(I,Y,ut){let ot=ct.td,St=an(ct.td*I,jn,qi);if(ct.fly=null,Y!=null){let Dt=J(Y,ut),Lt=1-St/ot;ct.tx+=(Dt.x-ct.tx)*Lt,ct.tz+=(Dt.z-ct.tz)*Lt}ct.td=St}function Ne(){ct.x=an(ct.x,-u*.6,u*.6),ct.z=an(ct.z,-f*.7,f*.75),ct.tx=an(ct.tx,-u*.6,u*.6),ct.tz=an(ct.tz,-f*.7,f*.75)}function nn(){ct.idleAt=performance.now()}let De=new N;function He(I,Y={}){let ut=xt[I]&&X[I]==="tower"?an(bt.uRise.value,.3,1):1;return De.set(D[I],Z[I]+gt[I]*ut,tt[I]).project(P),Y.x=(De.x*.5+.5)*Qt.W,Y.y=(-De.y*.5+.5)*Qt.H,Y.f=De.z<1&&Y.x>-40&&Y.x<Qt.W+40&&Y.y>-40&&Y.y<Qt.H+40?1:0,Y.r=et[I],Y}function cn(I,Y,ut,ot={}){return De.set(I,Y,ut).project(P),ot.x=(De.x*.5+.5)*Qt.W,ot.y=(-De.y*.5+.5)*Qt.H,ot.f=De.z<1?1:0,ot}function $t(){let I=cn(ct.x,g,ct.z),Y=cn(ct.x+1,g,ct.z);return Math.hypot(Y.x-I.x,Y.y-I.y)}let mn=[];function Le(I,Y,ut){it.set(I/Qt.W*2-1,-(Y/Qt.H)*2+1),V.setFromCamera(it,P);let ot=-1,St=1/0;for(let se of Nt){mn.length=0,se.raycast(V,mn);for(let xe of mn){let ve=se.userData.idx[xe.instanceId];ve==null||ut&&!ut[ve]||xe.distance<St&&(St=xe.distance,ot=ve)}}if(ot>=0)return ot;let Dt=matchMedia("(pointer: coarse)").matches?16:8,Lt=$t(),Gt={},wt=1/0;for(let se=0;se<a;se++){if(ut&&!ut[se]||(cn(D[se],Z[se]+gt[se]*.5,tt[se],Gt),!Gt.f))continue;let xe=Math.hypot(Gt.x-I,Gt.y-Y),ve=Math.max(2,et[se]*.8*Lt);if(xe>Dt+ve)continue;let Ge=xe-ve-(xt[se]||dt[se]?3:0);Ge<wt&&(wt=Ge,ot=se)}return ot}function Fn(I,Y){let ut=J(I,Y,0);for(let ot of lt)if(ut.x>=ot.x0&&ut.x<=ot.x1&&ut.z>=ot.z0&&ut.z<=ot.z1)return ot.j;return-1}let yn={t:0,last:performance.now()};function ui(I=performance.now()){let Y=Math.min(.5,(I-yn.last)/1e3),ut=Math.min(.05,Y);if(yn.last=I,yn.t+=ut,Ei&&!--Ei&&($e.t0=I,ct.fly&&ct.fly.intro&&(ct.fly.t0=I)),ct.fly){let Lt=ct.fly,Gt=an((I-Lt.t0)/Lt.dur,0,1),wt=Lt.intro?Gt*Gt*(3-2*Gt):qd(Gt);ct.x=bi(Lt.a.x,Lt.b.x,wt),ct.z=bi(Lt.a.z,Lt.b.z,wt),ct.yaw=bi(Lt.a.yaw,Lt.b.yaw,wt),ct.d=Lt.intro?Math.exp(bi(Math.log(Lt.a.d),Math.log(Lt.b.d),wt)):bi(Lt.a.d,Lt.b.d,wt),Gt>=1&&(ct.fly=null,ct.tx=Lt.b.x,ct.tz=Lt.b.z,ct.td=Lt.b.d),ct.idleAt=I}else{ct.x+=ct.vx,ct.z+=ct.vz,ct.tx+=ct.vx,ct.tz+=ct.vz;let Lt=Math.pow(.88,ut*60);ct.vx*=Lt,ct.vz*=Lt,Math.abs(ct.vx)+Math.abs(ct.vz)<.001&&(ct.vx=ct.vz=0);let Gt=Math.min(1,ut*9);ct.x+=(ct.tx-ct.x)*Gt,ct.z+=(ct.tz-ct.z)*Gt,ct.d+=(ct.td-ct.d)*Gt,ct.yaw+=(0-ct.yaw)*Math.min(1,ut*4),Ne()}let ot=r?0:la(2500,7e3,I-ct.idleAt);if(ct.swayK=bi(ct.swayK||0,ot,Math.min(1,ut*1.5)),ct.sway=Math.sin(yn.t*.16)*.075*ct.swayK,Math.abs(Qt.toX-Qt.offX)+Math.abs(Qt.toY-Qt.offY)>.3){let Lt=1-Math.exp(-Y*7);rr(Qt.offX+(Qt.toX-Qt.offX)*Lt,Qt.offY+(Qt.toY-Qt.offY)*Lt)}if(w(),P.updateMatrixWorld(),de.v+=(de.to-de.v)*(1-Math.exp(-Y*5)),ke.v+=(ke.to-ke.v)*(1-Math.exp(-Y*5)),bt.uDim.value=Et.uDim.value=Math.min(1,de.v*1.25),Ie.uDim.value=Math.max(Math.min(1,de.v*1.3),ke.v*.7),Rt.uDim.value=de.v,Rt.uFocusK.value=ke.v,O.uDim.value=de.v,bt.uTime.value=Wn.uTime.value=Rt.uTime.value=Et.uTime.value=O.uTime.value=yn.t,$e.dur){let Lt=an((I-$e.t0)/$e.dur,0,1);bt.uRise.value=1.4*Lt,Lt>=1&&($e.dur=0,bt.uRise.value=1.4)}let St=bt.uRise.value;Ie.uAlpha.value=la(.8,1.35,St),Et.uRise.value=St,Rt.uRise.value=la(0,.9,St+.15),Ie.uFar.value=.1+.9*(1-la(24,110,ct.d));let Dt=Qt.H*_/(2*Math.tan(P.fov*Math.PI/360));Et.uPx.value=O.uPx.value=Wn.uPx.value=_t.uPx.value=Dt,_t.uTime.value=yn.t,_t.uDim.value=Math.min(1,de.v*1.25),_t.uRise.value=St,hi=Math.min(1,hi+Y*1.25),Wn.uGrow.value=qd(hi)}let sn={n:0,acc:0,last:0,skip:45,level:0};function Be(I){let Y=I-sn.last;if(sn.last=I,o||sn.level>=2||Y>250||Y<=0)return;if(sn.skip>0){sn.skip--;return}if(sn.acc+=Y,++sn.n<50)return;let ut=sn.acc/sn.n;sn.n=sn.acc=0,!(ut<=42)&&(sn.level++,sn.skip=20,sn.level===1&&_>1.3?(_=1.25,E.setPixelRatio(_),H&&H.setPixelRatio(_),Wn.uMinPx.value=_,Ve(Qt.W,Qt.H)):(sn.level=2,H&&(H.dispose(),H=null)))}function Ke(){Be(performance.now()),H?H.render():E.render(S,P)}function Ai(){ui();try{E.compile(S,P)}catch{}Ke(),yn.last=performance.now()}function Ve(I,Y){Qt.W=Math.max(1,I),Qt.H=Math.max(1,Y),E.setSize(Qt.W,Qt.H,!1),H&&(H.setSize(Qt.W,Qt.H),z.resolution.set(Qt.W*.5,Qt.H*.5)),P.aspect=Qt.W/Qt.H,P.updateProjectionMatrix(),rr(Qt.offX,Qt.offY)}function fi(I,Y,ut=!1){Qt.toX=I,Qt.toY=Y,ut&&rr(I,Y)}function as(I,Y,ut,ot,St=!1){Qt.inset={l:I,r:Y,t:ut,b:ot},fi((I-Y)/2,(ut-ot)/2,St)}function rr(I,Y){Qt.offX=I,Qt.offY=Y,P.setViewOffset(Qt.W,Qt.H,-I,-Y,Qt.W,Qt.H)}return{renderer:E,scene:S,camera:P,cam:ct,view:Qt,plates:lt,update:ui,render:Ke,warmup:Ai,resize:Ve,setOffset:fi,setInsets:as,pan:pe,fling:be,zoom:jt,flyTo:Bt,flyToBox:Wt,flyToNodes:zt,flyToPlate:Kt,fitAll:te,pick:Le,plateAt:Fn,project:He,projectPoint:cn,pxPerUnit:$t,setHighlight:Je,setFlows:ue,setVisible:Pn,setFocusPlate:Rn,intro:Xn,skipIntro:Ls,touch:nn,isInv:pt,isGround:xt,sky:dt,shape:X,X:D,Y:Z,Z:tt,R:et,TOP:g,PLATE_H:0,get scale(){return d},get dimV(){return de.v},get introK(){return ct.fly&&ct.fly.intro?Ei?0:an((performance.now()-ct.fly.t0)/ct.fly.dur,0,1):1},dispose(){E.dispose(),M.dispose()}}}var ca=new N;function ri(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ca.copy(t),ca[n]=0,ca.normalize();let c=.5*o/(o+a),h=1-ca.angleTo(i)/l;return Math.sign(ca[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Fc=class i extends wn{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new N,c=new N,h=new N(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,v=new N,g=.5/o;for(let p=0,y=0;p<d.length;p+=3,y+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:v.set(1,0,0),f[y+0]=ri(v,c,"z","y",r,n),f[y+1]=1-ri(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),f[y+0]=1-ri(v,c,"z","y",r,n),f[y+1]=1-ri(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),f[y+0]=1-ri(v,c,"x","z",r,t),f[y+1]=ri(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[y+0]=1-ri(v,c,"x","z",r,t),f[y+1]=1-ri(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[y+0]=1-ri(v,c,"x","y",r,t),f[y+1]=1-ri(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),f[y+0]=ri(v,c,"x","y",r,t),f[y+1]=1-ri(v,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var rs=(i,t,e)=>Math.max(t,Math.min(e,i)),Su=i=>1-Math.pow(1-i,3),b_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,bu='"Inter", -apple-system, system-ui, sans-serif',ha='"IBM Plex Mono", ui-monospace, Menlo, monospace';function Kd(i,t){let{W:e,colorOf:n,kindLabel:s,shortName:r,brl:o,pct:a,accent:l="#3cf0b4",onPick:c,onExt:h,canvas:d}=t,u=new ee(l),f=()=>innerWidth<=760,m=new ts;m.background=new ee(461069),m.fog=new Bs(461069,24,60);let v=new gn(32,1,.1,200),g=new Es(i);m.environment=g.fromScene(new $r,.04).texture,m.environmentIntensity=.55;let p=new ns(16774378,2.4);p.position.set(-6,14,7),p.castShadow=!0,p.shadow.mapSize.set(2048,2048),Object.assign(p.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:1,far:50}),p.shadow.bias=-5e-4,p.shadow.normalBias=.02,p.shadow.radius=6,m.add(p,p.target);let y=new ns(10336511,.5);y.position.set(8,6,-4),m.add(y),m.add(new qs(12109533,724242,.45));let E={uAcc:{value:u},uGlow:{value:0}},_=new An({color:987929,roughness:.92,metalness:0,envMapIntensity:.2});_.onBeforeCompile=T=>{Object.assign(T.uniforms,E),T.vertexShader=T.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),T.fragmentShader=T.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWp; uniform vec3 uAcc; uniform float uGlow;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 g = abs(fract(vWp.xz / 0.5 + 0.5) - 0.5) * 0.5;
        float dotk = 1.0 - smoothstep(0.012, 0.022, length(g));
        float r = length(vWp.xz);
        diffuseColor.rgb += vec3(0.06, 0.075, 0.09) * dotk * (1.0 - smoothstep(10.0, 40.0, r));
        diffuseColor.rgb *= 1.0 - 0.45 * smoothstep(14.0, 48.0, r);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += uAcc * uGlow * 0.3 * exp(-pow(length(vWp.xz) / 2.0, 2.0));`)};let b=new Ce(new ei(260,260),_);b.rotation.x=-Math.PI/2,b.receiveShadow=!0,m.add(b);let S=new vi;m.add(S);let P=i.capabilities.getMaxAnisotropy();typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(T,U,W,L,k){this.moveTo(T+k,U),this.arcTo(T+W,U,T+W,U+L,k),this.arcTo(T+W,U+L,T,U+L,k),this.arcTo(T,U+L,T,U,k),this.arcTo(T,U,T+W,U,k),this.closePath()});function M(T,U,W){let L=document.createElement("canvas"),k=2;L.width=T*k,L.height=U*k;let nt=L.getContext("2d");nt.scale(k,k),W(nt,T,U);let q=new ms(L);return q.colorSpace=Sn,q.anisotropy=Math.min(8,P),q}function A(T,U,W,L){let k=String(U).split(/\s+/),nt=[],q="";for(let mt of k){let Mt=q?`${q} ${mt}`:mt;T.measureText(Mt).width<=W||!q?q=Mt:(nt.push(q),q=mt)}if(q&&nt.push(q),nt.length>L){nt.length=L;let mt=nt[L-1];for(;mt.length>1&&T.measureText(`${mt}\u2026`).width>W;)mt=mt.slice(0,-1);nt[L-1]=`${mt}\u2026`}return nt}function F(T,U,W,L,k,nt){T.save(),T.translate(W,L),T.strokeStyle=nt,T.fillStyle=nt,T.lineWidth=k*.09,T.lineJoin="round",T.lineCap="round";let q=k/2;if(T.beginPath(),U==="pf")T.arc(0,-q*.32,q*.3,0,Math.PI*2),T.stroke(),T.beginPath(),T.moveTo(-q*.6,q*.62),T.quadraticCurveTo(-q*.6,q*.05,0,q*.05),T.quadraticCurveTo(q*.6,q*.05,q*.6,q*.62),T.stroke();else if(U==="gov"){T.moveTo(-q*.7,-q*.2),T.lineTo(0,-q*.65),T.lineTo(q*.7,-q*.2),T.closePath(),T.stroke();for(let mt of[-.45,0,.45])T.beginPath(),T.moveTo(mt*q,-q*.1),T.lineTo(mt*q,q*.45),T.stroke();T.beginPath(),T.moveTo(-q*.75,q*.62),T.lineTo(q*.75,q*.62),T.stroke()}else U==="fund"||U==="pen"?(T.arc(0,0,q*.62,-Math.PI/2,Math.PI*1.25),T.stroke(),T.beginPath(),T.moveTo(0,0),T.lineTo(0,-q*.62),T.moveTo(0,0),T.lineTo(-q*.44,q*.44),T.stroke()):U==="ext"?(T.setLineDash([k*.12,k*.1]),T.strokeRect(-q*.6,-q*.45,q*1.2,q*.95)):(T.moveTo(-q*.62,q*.62),T.lineTo(-q*.62,-q*.35),T.lineTo(q*.05,-q*.65),T.lineTo(q*.05,q*.62),T.moveTo(q*.05,-q*.1),T.lineTo(q*.62,q*.05),T.lineTo(q*.62,q*.62),T.moveTo(-q*.8,q*.62),T.lineTo(q*.8,q*.62),T.stroke());T.restore()}let H=T=>T.t==="c"?"c":T.t==="p"?"pf":T.t==="s"?"sub":T.c,z={w:2.9,h:.26,d:1.12},X=1.25,D=new Fc(z.w,z.h,z.d,5,.12),Z=new ei(z.w-.16,z.d-.12);Z.rotateX(-Math.PI/2);let tt=(()=>{let T=new Lr,U=z.w/2+.07,W=z.d/2+.07,L=.2;T.moveTo(-U+L,-W),T.lineTo(U-L,-W),T.quadraticCurveTo(U,-W,U,-W+L),T.lineTo(U,W-L),T.quadraticCurveTo(U,W,U-L,W),T.lineTo(-U+L,W),T.quadraticCurveTo(-U,W,-U,W-L),T.lineTo(-U,-W+L),T.quadraticCurveTo(-U,-W,-U+L,-W);let k=new Ws,nt=U-.035,q=W-.035,mt=L-.03;k.moveTo(-nt+mt,-q),k.lineTo(nt-mt,-q),k.quadraticCurveTo(nt,-q,nt,-q+mt),k.lineTo(nt,q-mt),k.quadraticCurveTo(nt,q,nt-mt,q),k.lineTo(-nt+mt,q),k.quadraticCurveTo(-nt,q,-nt,q-mt),k.lineTo(-nt,-q+mt),k.quadraticCurveTo(-nt,-q,-nt+mt,-q),T.holes.push(k);let Mt=new No(T,8);return Mt.rotateX(-Math.PI/2),Mt})(),et=(()=>{let T=document.createElement("canvas");T.width=T.height=128;let U=T.getContext("2d"),W=U.createRadialGradient(64,64,0,64,64,64);return W.addColorStop(0,"rgba(255,255,255,1)"),W.addColorStop(.4,"rgba(255,255,255,.35)"),W.addColorStop(1,"rgba(255,255,255,0)"),U.fillStyle=W,U.fillRect(0,0,128,128),new ms(T)})();function gt(T){return M(320,124,(U,W,L)=>{U.clearRect(0,0,W,L);let k=14,nt=14,q=44;U.fillStyle=T.dim?"#e9ebee":"#eef6f2",U.beginPath(),U.roundRect(k,nt,q,q,10),U.fill(),U.strokeStyle=T.dim?"#cfd3d8":"#bfe7d7",U.lineWidth=1,U.stroke(),F(U,T.kind,k+q/2,nt+q/2,26,T.dim?"#8a9097":"#1d9c70"),U.fillStyle=T.dim?"#5b616a":"#14171c",U.font=`700 19px ${bu}`,U.textBaseline="alphabetic",A(U,T.name,W-80,2).forEach((qt,O)=>U.fillText(qt,70,34+O*22));let Mt=L-18;U.font=`600 14px ${ha}`,T.pct&&(U.fillStyle=T.ctl?"#0f8f63":"#3d4652",U.fillText(T.pct,14,Mt));let Et=T.pct?U.measureText(T.pct).width+12:0;U.font=`500 12px ${ha}`,U.fillStyle="#6c7480";let Vt=T.sub.toUpperCase();for(;Vt.length>4&&U.measureText(Vt).width>W-28-Et;)Vt=Vt.slice(0,-2);U.fillText(Vt,14+Et,Mt),U.fillStyle=T.color,U.fillRect(14,L-8,Math.min(W-28,40+200*(T.share||0)),2.5)})}function rt(T){return M(256,256,(U,W,L)=>{let k=U.createRadialGradient(W/2,L/2,0,W/2,L/2,W/2);k.addColorStop(0,"#0f3a32"),k.addColorStop(1,"#08221d"),U.fillStyle=k,U.fillRect(0,0,W,L),U.textAlign="center";let nt=T.tk||T.n.replace(/[^A-Za-zÀ-ÿ0-9 ]/g,"").split(/\s+/).filter(Boolean).slice(0,2).map(mt=>mt[0]).join("").toUpperCase();U.fillStyle="#e9fff6",U.font=`700 ${nt.length>5?38:50}px ${bu}`,U.fillText(nt,W/2,L/2+4),U.font=`600 15px ${bu}`,U.fillStyle="rgba(220,240,232,.78)";let q=r(T.n);U.fillText(q.length>24?`${q.slice(0,22)}\u2026`:q,W/2,L/2+36),U.font=`500 12px ${ha}`,U.fillStyle="rgba(150,230,200,.75)",U.fillText((T.t==="c"?T.mc?o(T.mc):"capital fechado":s(T)).toUpperCase(),W/2,L/2-44)})}let ft={uTime:{value:0},uAcc:{value:u},uGrow:{value:0}},dt=new ze({uniforms:ft,vertexShader:`attribute float aCtl; attribute float aPhase; attribute float aDir; attribute float aLen; varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying float vCtl; varying float vPhase; varying float vDir; varying float vLen;
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
      }`}),xt={open:!1,focus:-1,items:[],cables:null,hub:null,t0:0,a:0,aTo:0,hover:null,bounds:null},pt={x:0,z:1.2,dist:15,tx:0,tz:1.2,tdist:15,vx:0,vz:0,yaw:0};function we(){for(let T of[...S.children])S.remove(T),T.traverse(U=>{if(U.geometry&&U.geometry!==D&&U.geometry!==Z&&U.geometry!==tt&&U.geometry.dispose(),U.material)for(let W of[].concat(U.material))W.map&&W.map!==et&&W.map.dispose(),W!==dt&&W.dispose()});xt.items=[],xt.cables=null,xt.hub=null}function ge(T,U){we();let W=e.nodes[T],L=[{key:`w${T}`,w:T,lvl:0}],k=new Map([[T,L[0]]]),nt=[],q=[T];for(let Ft=-1;Ft>=-4&&q.length;Ft--){let Jt=[];for(let ue of q){let de=e.inc[ue].filter(ke=>e.ef[ke]&1||e.ep[ke]>=5||e.ep[ke]<0).sort((ke,Je)=>(e.ef[Je]&1)-(e.ef[ke]&1)||e.ep[Je]-e.ep[ke]).slice(0,Ft===-1?14:5);for(let ke of de){let Je=e.es[ke];if(!k.has(Je)){if(Ft<-1&&!(e.ef[ke]&1))continue;let Rn={key:`w${Je}`,w:Je,lvl:Ft};k.set(Je,Rn),L.push(Rn),Jt.push(Je)}k.get(Je).lvl<k.get(ue).lvl&&nt.push({a:k.get(Je),b:k.get(ue),p:e.ep[ke],ctl:e.ef[ke]&1})}}q=Jt}let mt=e.out[T].filter(Ft=>!k.has(e.et[Ft])).sort((Ft,Jt)=>(e.ef[Jt]&1)-(e.ef[Ft]&1)||e.ep[Jt]-e.ep[Ft]);for(let Ft of mt){let Jt=e.et[Ft],ue={key:`w${Jt}`,w:Jt,lvl:1};k.set(Jt,ue),L.push(ue),nt.push({a:k.get(T),b:ue,p:e.ep[Ft],ctl:e.ef[Ft]&1})}for(let Ft of U||[]){let Jt=String(Ft.cnpj||"").replace(/\D/g,""),ue=e.byCnpj.get(Jt);if(ue!=null&&k.has(ue))continue;let de=ue!=null?{key:`w${ue}`,w:ue,lvl:1}:{key:`x${Jt||Ft.n}`,ext:Ft,lvl:1};ue!=null&&k.set(ue,de),L.push(de),nt.push({a:k.get(T),b:de,p:Ft.pct,ctl:(Ft.pct||0)>50})}for(let Ft of L.filter(Jt=>Jt.lvl===1&&Jt.w!=null).slice(0,18))for(let Jt of e.out[Ft.w].filter(ue=>e.ef[ue]&1).slice(0,4)){let ue=e.et[Jt];if(k.has(ue))continue;let de={key:`w${ue}`,w:ue,lvl:2};k.set(ue,de),L.push(de),nt.push({a:Ft,b:de,p:e.ep[Jt],ctl:1})}let Mt=L.filter(Ft=>Ft.lvl>0);if(Mt.length>64){let Ft=new Set(Mt.slice(0,64));for(let Jt=L.length-1;Jt>=0;Jt--)L[Jt].lvl>0&&!Ft.has(L[Jt])&&L.splice(Jt,1);for(let Jt=nt.length-1;Jt>=0;Jt--)(!L.includes(nt[Jt].b)||!L.includes(nt[Jt].a))&&nt.splice(Jt,1)}let Vt=Rt(L,nt).map(Ft=>{let Jt=vt(Ft);return S.add(Jt),Jt}),qt=new vi,O=X,_t=[[0,0],[O,0],[O+.06,.05],[O+.08,.16],[O+.06,.34],[O,.4],[O-.12,.42],[0,.42]].map(([Ft,Jt])=>new At(Ft,Jt)),j=new Ce(new Lo(_t,96),new An({color:1063475,roughness:.32,metalness:.55}));j.castShadow=!0,j.receiveShadow=!0;let ht=new Ce(new Uo(O-.2,.045,16,128),new An({color:u,emissive:u,emissiveIntensity:1.6,roughness:.3}));ht.rotation.x=-Math.PI/2,ht.position.y=.43;let Tt=rt(W),yt=new Ce(new wo(O-.3,64),new An({color:16777215,roughness:.45,metalness:.2,map:Tt,emissive:16777215,emissiveMap:Tt,emissiveIntensity:.35}));yt.rotation.x=-Math.PI/2,yt.position.y=.425;let Xt=new Ce(new ei(6,6),new yi({map:et,color:u,transparent:!0,opacity:.22,blending:zn,depthWrite:!1}));Xt.rotation.x=-Math.PI/2,Xt.position.y=.012,qt.add(j,ht,yt,Xt),qt.userData={key:`w${T}`,w:T,nd:L[0],ring:ht,glow:Xt},S.add(qt),xt.hub=qt;let Yt=Math.max(1,...nt.map(Ft=>Ft.p||0));for(let Ft of L){if(Ft.lvl===0)continue;let Jt=Ft.w!=null?e.nodes[Ft.w]:null,ue=Ft.lvl<0?nt.find(Xn=>Xn.a===Ft):nt.find(Xn=>Xn.b===Ft),de=!!(ue&&ue.ctl),ke=Jt?{name:r(Jt.n),kind:H(Jt),color:n(Jt),sub:Jt.t==="c"?[Jt.tk,Jt.mc?o(Jt.mc):"capital fechado"].filter(Boolean).join(" \xB7 "):s(Jt),pct:ue&&ue.p>=0?a(ue.p):"",ctl:de,share:(ue?.p||0)/Yt}:{name:Ft.ext.n,kind:"ext",color:"#8a9097",sub:Ft.ext.pais&&!/^brasil$/i.test(Ft.ext.pais)?Ft.ext.pais:"capital fechado",pct:ue&&ue.p>=0?a(ue.p):"",ctl:de,dim:!0,share:(ue?.p||0)/Yt},Je=new vi,Rn=new Ce(D,new An({color:ke.dim?12172739:15264492,roughness:.5,metalness:0}));Rn.castShadow=!0,Rn.receiveShadow=!0,Rn.position.y=z.h/2+.02;let Pn=new Ce(Z,new An({map:gt(ke),transparent:!0,roughness:.55}));Pn.position.y=z.h+.022;let $e=new Ce(tt,new yi({color:de?u:new ee(7306380),transparent:!0,opacity:de?.9:.35,blending:zn,depthWrite:!1}));$e.position.y=.015,Je.add(Rn,Pn,$e),Je.position.set(Ft.x,0,Ft.z),Je.userData={nd:Ft,card:Rn,rim:$e,ctl:de,baseY:0},S.add(Je),xt.items.push(Je)}let Ie=[];if(nt.forEach((Ft,Jt)=>{let ue=Ft.a.lvl===0?null:Ft.a,de=Ft.b.lvl===0?null:Ft.b,ke=ue?new N(ue.x,.13,ue.z+(ue.z<(de?de.z:0)?z.d/2:-z.d/2)):null,Je=de?new N(de.x,.13,de.z+(de.z<(ue?ue.z:0)?z.d/2:-z.d/2)):null,Rn=os=>{let w=new N(os.x,0,os.z).normalize();return new N(w.x*(O+.05),.16,w.z*(O+.05))},Pn=ke||Rn(Je),$e=Je||Rn(ke),Xn=$e.z-Pn.z,Ei=Pn.clone().add(new N(0,0,Xn*.5)),Ls=$e.clone().add(new N(0,0,-Xn*.5));ue||Ei.copy(Pn).add(new N(Pn.x*.5,0,Pn.z*.5)),de||Ls.copy($e).add(new N($e.x*.5,0,$e.z*.5));let Qt=new Ir(Pn,Ei,Ls,$e),ct=Qt.getLength(),jn=new $s(Qt,Math.max(24,Math.round(ct*10)),Ft.ctl?.085:.05,10,!1),qi=jn.attributes.position.count;jn.setAttribute("aCtl",new _e(new Float32Array(qi).fill(Ft.ctl?1:0),1)),jn.setAttribute("aPhase",new _e(new Float32Array(qi).fill(Jt*.173%1),1)),jn.setAttribute("aDir",new _e(new Float32Array(qi).fill(1),1)),jn.setAttribute("aLen",new _e(new Float32Array(qi).fill(ct),1)),Ie.push(jn)}),Ie.length){let Ft=Me(Ie),Jt=new Ce(Ft,dt);Jt.castShadow=!0,S.add(Jt),xt.cables=Jt}let Te=-2,Xe=2,pn=-2,Wn=2;for(let Ft of L)Te=Math.min(Te,Ft.x-z.w/2),Xe=Math.max(Xe,Ft.x+z.w/2),pn=Math.min(pn,Ft.z-z.d/2),Wn=Math.max(Wn,Ft.z+z.d/2);for(let Ft of Vt){let Jt=Ft.userData;Te=Math.min(Te,Jt.x0),Xe=Math.max(Xe,Jt.x1),pn=Math.min(pn,Jt.z-.3),Wn=Math.max(Wn,Jt.z+.3)}xt.bounds={x0:Te,x1:Xe,z0:pn,z1:Wn};let sr=f()?3:5,ci=L.filter(Ft=>Ft.lvl===1).sort((Ft,Jt)=>Ft.z-Jt.z||Ft.x-Jt.x).slice(0,sr*2),hi=L.filter(Ft=>Ft.lvl===-1).sort((Ft,Jt)=>Jt.z-Ft.z||Ft.x-Jt.x);xt.near=L.filter(Ft=>Ft.lvl===0).concat(f()?hi.slice(0,sr*2):hi,ci)}function Me(T){let U=0,W=0;for(let Et of T)U+=Et.attributes.position.count,W+=Et.index.count;let L=new Ue,k=["position","normal","uv","aCtl","aPhase","aDir","aLen"],nt={};for(let Et of k)nt[Et]=new Float32Array(U*T[0].attributes[Et].itemSize);let q=new Uint32Array(W),mt=0,Mt=0;for(let Et of T){for(let qt of k)nt[qt].set(Et.attributes[qt].array,mt*Et.attributes[qt].itemSize);let Vt=Et.index.array;for(let qt=0;qt<Vt.length;qt++)q[Mt+qt]=Vt[qt]+mt;mt+=Et.attributes.position.count,Mt+=Vt.length,Et.dispose()}for(let Et of k)L.setAttribute(Et,new _e(nt[Et],T[0].attributes[Et].itemSize));return L.setIndex(new _e(q,1)),L}let at={"-1":"Acionistas diretos","-2":"Quem controla os acionistas","-3":"Controle acima","-4":"Controle final",1:"Participa\xE7\xF5es e controladas",2:"Controladas das controladas"};function vt(T){let U=T.lvl===-1||T.lvl===1,W=`${at[T.lvl]||(T.lvl<0?"Controle acima":"Mais abaixo")} \xB7 ${T.n}`.toUpperCase(),L=34,k=.3/L,nt=document.createElement("canvas").getContext("2d");nt.font=`600 17px ${ha}`;let q=Math.ceil(nt.measureText(W).width+30),mt=M(q,L,(_t,j,ht)=>{_t.clearRect(0,0,j,ht),_t.fillStyle=T.lvl<0?"rgba(150,170,200,.9)":"rgba(60,240,180,.85)",_t.beginPath(),U&&T.lvl<0?(_t.moveTo(2,ht/2+5),_t.lineTo(14,ht/2+5),_t.lineTo(8,ht/2-6)):U?(_t.moveTo(2,ht/2-5),_t.lineTo(14,ht/2-5),_t.lineTo(8,ht/2+6)):_t.arc(8,ht/2,4,0,Math.PI*2),_t.fill(),_t.font=`600 17px ${ha}`,_t.textBaseline="middle",_t.fillStyle="rgba(205,214,226,.82)",_t.fillText(W,22,ht/2+1)}),Mt=q*k,Et=new ei(Mt,L*k);Et.rotateX(-Math.PI/2);let Vt=new Ce(Et,new yi({map:mt,transparent:!0,depthWrite:!1,toneMapped:!1})),qt=U?X+.45:T.n<=2?Math.min(T.x0,-Mt-1.7):T.x0,O=U?T.lvl<0?-.36:.36:T.zLab;return Vt.position.set(qt+Mt/2,.012,O),Vt.userData={band:T.lvl,x0:qt,x1:qt+Mt,z:O},Vt}function Rt(T,U){let W=f()?3:5,L=.45,k=1.75,nt=3.1,q=new Map;for(let _t of T)(q.get(_t.lvl)||q.set(_t.lvl,[]).get(_t.lvl)).push(_t);let mt=_t=>{let j=U.filter(ht=>ht.b===_t).map(ht=>ht.a.x||0);return j.length?j.reduce((ht,Tt)=>ht+Tt,0)/j.length:0},Mt=_t=>{let j=U.filter(ht=>ht.a===_t).map(ht=>ht.b.x||0);return j.length?j.reduce((ht,Tt)=>ht+Tt,0)/j.length:0},Et=q.get(0)[0];Et.x=0,Et.z=0;let Vt=[],qt=_t=>{let j=Math.min(W,_t);return-(j*z.w+(j-1)*L)/2},O=-nt+.4;for(let _t of[...q.keys()].filter(j=>j<0).sort((j,ht)=>ht-j)){let j=q.get(_t);j.sort((ht,Tt)=>Mt(ht)-Mt(Tt));for(let ht=0;ht<j.length;ht+=W){let Tt=j.slice(ht,ht+W),yt=Tt.length*z.w+(Tt.length-1)*L;Tt.forEach((Xt,Yt)=>{Xt.x=-yt/2+z.w/2+Yt*(z.w+L),Xt.z=O}),O-=k}Vt.push({lvl:_t,n:j.length,x0:qt(j.length),zLab:O+k-z.d/2-.36}),O-=nt-k}O=nt-.4;for(let _t of[...q.keys()].filter(j=>j>0).sort((j,ht)=>j-ht)){let j=q.get(_t);_t>1&&j.sort((ht,Tt)=>mt(ht)-mt(Tt)),Vt.push({lvl:_t,n:j.length,x0:qt(j.length),zLab:O-z.d/2-.36});for(let ht=0;ht<j.length;ht+=W){let Tt=j.slice(ht,ht+W),yt=Tt.length*z.w+(Tt.length-1)*L;Tt.forEach((Xt,Yt)=>{Xt.x=-yt/2+z.w/2+Yt*(z.w+L),Xt.z=O}),O+=k}O+=nt-k}return Vt}let B={W:1,H:1,offX:0,offY:0,freeW:1,freeH:1,top:0};function lt(){v.setViewOffset(B.W,B.H,-B.offX,-B.offY,B.W,B.H)}function bt(T){let U=xt.near&&xt.near.length>1?xt.near.reduce((W,L)=>({x0:Math.min(W.x0,L.x-z.w/2),x1:Math.max(W.x1,L.x+z.w/2),z0:Math.min(W.z0,L.z-z.d/2),z1:Math.max(W.z1,L.z+z.d/2)}),{x0:-2,x1:2,z0:-2,z1:2}):xt.bounds;It(U,T)}function It(T,U){let W=T.x1-T.x0+1.2,L=T.z1-T.z0+1.6,k=B.freeW/B.H,nt=v.fov*Math.PI/360,q=W/2/Math.tan(nt)/k,mt=L/2/Math.tan(nt)*(B.H/Math.max(200,B.freeH));pt.tdist=rs(Math.max(q,mt)*1.04,6,90),pt.tx=(T.x0+T.x1)/2,pt.tz=(T.z0+T.z1)/2,U&&(pt.dist=pt.tdist,pt.x=pt.tx,pt.z=pt.tz)}function Nt(){v.position.set(pt.x+Math.sin(pt.yaw)*Math.cos(1.5)*pt.dist,Math.sin(1.5)*pt.dist,pt.z+Math.cos(pt.yaw)*Math.cos(1.5)*pt.dist),v.lookAt(pt.x,0,pt.z),p.position.set(pt.x-6,14,pt.z+7),p.target.position.set(pt.x,0,pt.z)}let Ut=new Ys,kt=new At;function Pt(T,U){kt.set(T/B.W*2-1,-(U/B.H)*2+1),Ut.setFromCamera(kt,v);let W=xt.items.map(k=>k.userData.card);xt.hub&&W.push(xt.hub.children[0]);let L=Ut.intersectObjects(W,!1)[0];return L?L.object===xt.hub?.children[0]?xt.hub:xt.items.find(k=>k.userData.card===L.object):null}let Zt=new Map,ne=null,Re=null,ie=0;function ce(T,U){kt.set(T/B.W*2-1,-(U/B.H)*2+1),Ut.setFromCamera(kt,v);let W=-Ut.ray.origin.y/Ut.ray.direction.y;return Ut.ray.origin.clone().addScaledVector(Ut.ray.direction,W)}function G(T){if(xt.open){try{d.setPointerCapture(T.pointerId)}catch{}if(Zt.set(T.pointerId,{x:T.clientX,y:T.clientY}),Zt.size===2){let[U,W]=[...Zt.values()];Re={d:Math.hypot(U.x-W.x,U.y-W.y)},ne=null;return}ne={sx:T.clientX,sy:T.clientY,x:T.clientX,y:T.clientY,moved:!1,g:ce(T.clientX,T.clientY)},pt.vx=pt.vz=0}}function ae(T){if(xt.open){if(Zt.has(T.pointerId)&&Zt.set(T.pointerId,{x:T.clientX,y:T.clientY}),Re&&Zt.size===2){let[U,W]=[...Zt.values()],L=Math.hypot(U.x-W.x,U.y-W.y);pt.tdist=rs(pt.tdist*(Re.d/Math.max(1,L)),5,90),pt.dist=pt.tdist,Re.d=L;return}if(ne){if(!ne.moved&&Math.hypot(T.clientX-ne.sx,T.clientY-ne.sy)>6&&(ne.moved=!0,d.classList.add("dragging")),ne.moved){Nt(),v.updateMatrixWorld();let U=ce(T.clientX,T.clientY),W=ne.g.x-U.x,L=ne.g.z-U.z;pt.x+=W,pt.z+=L,pt.tx=pt.x,pt.tz=pt.z,pt.vx=W,pt.vz=L}return}if(T.pointerType==="mouse"){let U=Pt(T.clientX,T.clientY);U!==xt.hover&&(xt.hover=U,d.classList.toggle("pointing",!!U))}}}function he(T){if(!xt.open)return;if(Zt.delete(T.pointerId),d.classList.remove("dragging"),Re){Zt.size<2&&(Re=null);return}if(!ne)return;let U=ne;if(ne=null,U.moved)return;let W=performance.now(),L=W-ie<320;ie=W;let k=Pt(T.clientX,T.clientY);if(!k)return;let nt=k.userData.nd;if(nt.ext){h(nt.ext);return}xt.selected=k,c(nt.w,L&&k!==xt.hub)}function C(T){if(!xt.open)return;T.preventDefault();let U=Math.exp(T.deltaY*(T.ctrlKey?.012:.0016)),W=ce(T.clientX,T.clientY),L=rs(pt.tdist*U,5,90),k=1-L/pt.tdist;pt.tx+=(W.x-pt.tx)*k,pt.tz+=(W.z-pt.tz)*k,pt.tdist=L}d.addEventListener("pointerdown",G),d.addEventListener("pointermove",ae),d.addEventListener("pointerup",he),d.addEventListener("pointercancel",he),d.addEventListener("wheel",C,{passive:!1});let x=performance.now(),$=0;function K(T){let U=Math.min(.05,(T-x)/1e3);x=T,$+=U;let W=rs((T-xt.t0)/1400,0,1);if(xt.hub){let L=Su(rs(W*1.8,0,1));xt.hub.scale.setScalar(.6+.4*L),xt.hub.position.y=-.4*(1-L),xt.hub.userData.ring.material.emissiveIntensity=1.2+.35*Math.sin($*2.2)}xt.items.forEach((L,k)=>{let nt=L.userData.nd,q=rs((W-.15-Math.min(.5,(Math.abs(nt.lvl)-1)*.12+k%12*.025))/.35,0,1),mt=Su(q),Mt=xt.hover===L?1:0,Et=xt.selected===L?1:0;L.userData.lift=(L.userData.lift||0)+(Mt*.18+Et*.1-(L.userData.lift||0))*Math.min(1,U*12),L.position.y=-.5*(1-mt)+L.userData.lift,L.scale.setScalar(.85+.15*mt),L.visible=q>0,L.userData.rim.material.opacity=(L.userData.ctl?.9:.35)*mt+Et*.4}),ft.uGrow.value=b_(rs((W-.3)/.6,0,1)),ft.uTime.value=$,E.uGlow.value=Su(rs(W*1.5,0,1)),!ne&&!Re&&(pt.x+=(pt.tx-pt.x)*Math.min(1,U*6),pt.z+=(pt.tz-pt.z)*Math.min(1,U*6)),pt.dist+=(pt.tdist-pt.dist)*Math.min(1,U*7),m.fog.near=pt.dist*1.35,m.fog.far=pt.dist*3.2,pt.yaw=0,Nt(),i.shadowMap.needsUpdate=!0,i.render(m,v)}return{get focus(){return xt.focus},open(T,U){ge(T,U),xt.open=!0,xt.focus=T,xt.t0=performance.now(),xt.hover=null,xt.selected=xt.hub,bt(!0),pt.dist=pt.tdist*1.25},close(){xt.open=!1,xt.focus=-1,we()},frame:K,resize(T,U){B.W=T,B.H=U,v.aspect=T/U,v.updateProjectionMatrix(),lt()},setFree(T,U,W,L=0){B.offX=(T-U)/2,B.offY=(L-W)/2,B.freeW=Math.max(200,B.W-T-U),B.freeH=Math.max(200,B.H-W-L),lt(),xt.open&&bt(!1)},zoom(T){pt.tdist=rs(pt.tdist*T,5,90)},fit(){xt.bounds&&It(xt.bounds)}}}var wu="mapa-4",Zr=["fin","tech","saude","log","agro","ind","util","oil","base","cons","imob","out"];function jd(i){return i.t==="c"?i.mc?1.8+1.25*Math.log10(1+i.mc/1e8):1.8:i.t==="s"?1.2:i.v?1+.8*Math.log10(1+i.v/1e8):1}function w_(i){let t=i.nodes,e=t.length,n=new Int16Array(e).fill(-1),s=o=>{let a=Zr.indexOf(o);return a<0?Zr.length-1:a};t.forEach((o,a)=>{o.t==="c"&&(n[a]=s(o.c))});let r=Array.from({length:e},()=>[]);for(let[o,a,,l]of i.edges||[]){let c=l&1?3:1;r[o].push([a,c]),r[a].push([o,c])}for(let[o,a]of i.board||[])r[o].push([a,.3]),r[a].push([o,.3]);for(let o=0;o<6;o++){let a=0;for(let l=0;l<e;l++){if(n[l]>=0)continue;let c=new Float64Array(Zr.length),h=!1;for(let[d,u]of r[l])n[d]>=0&&(c[n[d]]+=u*(t[d].t==="c"?2:1),h=!0);if(h){let d=0;for(let u=1;u<c.length;u++)c[u]>c[d]&&(d=u);n[l]=d,a++}}if(!a)break}for(let o=0;o<e;o++)n[o]<0&&(n[o]=Zr.length-1);return n}function T_(i,t,e,n,s){let r=[],o=i.slice(),a=t,l=e,c=n,h=s,d=(u,f)=>{let m=u.reduce((g,p)=>g+p.a,0),v=0;for(let g of u){let p=m/f,y=g.a/p;v=Math.max(v,Math.max(p/y,y/p))}return v};for(;o.length;){let u=Math.min(c,h),f=[o.shift()];for(;o.length&&d([...f,o[0]],u)<=d(f,u);)f.push(o.shift());let m=f.reduce((v,g)=>v+g.a,0);if(c>=h){let v=m/h,g=l;for(let p of f){let y=p.a/v;r.push({...p,x0:a,y0:g,x1:a+v,y1:g+y}),g+=y}a+=v,c-=v}else{let v=m/c,g=a;for(let p of f){let y=p.a/v;r.push({...p,x0:g,y0:l,x1:g+y,y1:l+v}),g+=y}l+=v,h-=v}}return r}var E_=1.62,Qd=.62;function A_(i){let t=i.nodes,e=t.length,n=Array.from({length:e},()=>[]),s=new Int32Array(e);for(let[y,E,_,b]of i.edges||[])n[y].push([E,_,b]),s[E]++;let r=Array.from({length:e},()=>[]);for(let[y,E]of i.board||[])r[y].push(E);let o=Uint8Array.from(t,(y,E)=>y.t==="c"||y.t==="s"||!n[E].length&&s[E]?1:0),a=new Array(e).fill(null),l=new Uint8Array(e),c=y=>{if(a[y])return a[y];if(l[y])return new Map;l[y]=1;let E=new Map;for(let[_,b,S]of n[y]){let P=(b>0?b:5)*(S&1?2:1);if(o[_])E.set(_,(E.get(_)||0)+P*Math.max(1e8,t[_].mc||0));else for(let[M,A]of c(_))E.set(M,(E.get(M)||0)+A*Math.min(100,P)/100)}return l[y]=0,a[y]=E},h=new Int32Array(e).fill(-1),d=new Uint8Array(e),u=new Uint8Array(e),f=y=>y.slice().sort((E,_)=>(t[_].mc||0)-(t[E].mc||0)||E-_)[0],m=-1;for(let y=0;y<e;y++)t[y].t==="c"&&(m<0||(t[y].mc||0)>(t[m].mc||0))&&(m=y);for(let y=0;y<e;y++){if(o[y])continue;let E=c(y);E.size===1?h[y]=E.keys().next().value:E.size>=2?d[y]=1:h[y]=r[y].length?f(r[y]):m}let v=new Int16Array(e).fill(-1),g=new Uint8Array(e),p=y=>{if(o[y])return 0;if(v[y]>=0)return v[y];if(g[y])return 0;g[y]=1;let E=0,_=99;for(let[b]of n[y]){let S=p(b);(!d[y]||d[b])&&(E=Math.max(E,d[b]||!d[y]?S:0)),_=Math.min(_,S)}return g[y]=0,v[y]=d[y]?E+1:(_===99?0:_)+1};for(let y=0;y<e;y++)if(!o[y]){let E=p(y);d[y]?d[y]=Math.min(6,E):u[y]=Math.min(9,E)}return{out:n,ground:o,reach:c,anchor:h,sky:d,depth:u}}function Tu(i,{log:t=()=>{},aspect:e=E_}={}){let n=i.nodes,s=n.length,r=i.pos||[],{out:o,ground:a,reach:l,anchor:c,sky:h,depth:d}=A_(i),u=w_(i),f=Zr.length,m=new Map;for(let B=0;B<s;B++)c[B]>=0&&(m.get(c[B])||m.set(c[B],[]).get(c[B])).push(B);let v=Float64Array.from(n,B=>jd(B)*.62),g=new Map,p=new Float64Array(s),y=(B,lt)=>{let bt=-1;for(let[It,Nt,Ut]of o[B])It===lt&&(bt=Math.max(bt,(Nt>0?Nt:0)+(Ut&1?1e3:0)));return bt};for(let B=0;B<s;B++){if(!a[B])continue;let lt=m.get(B),bt=v[B]*(n[B].t==="c"?2.1:1.42);if(!lt){p[B]=bt+.9;continue}let It=new Map;for(let kt of lt){let Pt=d[kt]||1;(It.get(Pt)||It.set(Pt,[]).get(Pt)).push(kt)}let Nt=[],Ut=bt+1.5;for(let kt of[...It.keys()].sort((Pt,Zt)=>Pt-Zt)){let Pt=It.get(kt);for(kt===1&&Pt.sort((Zt,ne)=>y(ne,B)-y(Zt,B)||(n[ne].v||0)-(n[Zt].v||0)||Zt-ne);Pt.length;){let Zt=Math.max(4,Math.floor(2*Math.PI*Ut/1.5));Nt.push({r:Ut,d:kt,list:Pt.splice(0,Zt)}),Ut+=1.45}}g.set(B,Nt),p[B]=Ut-1.45+1.3}let E=new Float64Array(f);for(let B=0;B<s;B++)a[B]&&(E[u[B]]+=Math.PI*p[B]*p[B]);let _=[];for(let B=0;B<f;B++)E[B]>0&&_.push({k:B,c:Zr[B],a:E[B]/.45});_.sort((B,lt)=>lt.a-B.a);let b=_.reduce((B,lt)=>B+lt.a,0),S=Math.sqrt(b*e),P=b/S,M=T_(_,0,0,S,P),A=Math.sqrt(b),F=A*Math.sqrt(1.62)*.02,H=M.map(B=>({c:B.c,k:B.k,x0:B.x0+F/2,y0:B.y0+F/2,x1:B.x1-F/2,y1:B.y1-F/2})),z=new Map(H.map((B,lt)=>[B.k,lt])),X=new Float64Array(s),D=new Float64Array(s),Z=B=>{let lt=Math.min(B.x1-B.x0,B.y1-B.y0)*.03+1,bt=Math.min((B.y1-B.y0)*.12,A/Math.sqrt(1.62)*.035);return{x0:B.x0+lt,x1:B.x1-lt,y0:B.y0+lt+bt,y1:B.y1-lt}},tt=B=>{let lt=B.map((kt,Pt)=>Pt).sort((kt,Pt)=>B[kt]-B[Pt]||kt-Pt),bt=new Float64Array(B.length);lt.forEach((kt,Pt)=>{bt[kt]=(Pt+.5)/B.length});let It=lt.map(kt=>B[kt]),Nt=It[Math.floor(It.length*.03)]??0,Ut=It[Math.ceil(It.length*.97)-1]??1;return B.map((kt,Pt)=>.6*bt[Pt]+.4*Math.min(1,Math.max(0,(kt-Nt)/Math.max(1e-9,Ut-Nt))))};for(let B of H){let lt=[];for(let Ut=0;Ut<s;Ut++)a[Ut]&&u[Ut]===B.k&&lt.push(Ut);let bt=Z(B),It=tt(lt.map(Ut=>r[2*Ut]||0)),Nt=tt(lt.map(Ut=>r[2*Ut+1]||0));lt.forEach((Ut,kt)=>{X[Ut]=bt.x0+It[kt]*(bt.x1-bt.x0),D[Ut]=bt.y0+Nt[kt]*(bt.y1-bt.y0)})}let et=[];for(let B=0;B<s;B++)a[B]&&et.push(B);let gt=[];for(let[B,lt,,bt]of i.edges||[])a[B]&&a[lt]&&u[B]===u[lt]&&gt.push([B,lt,bt&1?.06:.02]);let rt=new Int32Array(s).fill(-1);for(let B of i.groups||[])if(B.nc>=2&&a[B.h])for(let lt of B.m)lt!==B.h&&a[lt]&&u[lt]===u[B.h]&&n[lt].t==="c"&&(rt[lt]=B.h);let ft=new Map(H.map(B=>[B.k,Z(B)])),dt=(B,lt,bt,It,Nt)=>{let Ut=B.map(ie=>lt[ie]).sort((ie,ce)=>ie-ce),kt=Math.max(2,(Ut[Math.floor(Ut.length/2)]||1)*2.2),Pt=(ie,ce)=>(ie+4096)*8192+(ce+4096),Zt=new Float64Array(s),ne=new Float64Array(s),Re=new Map;for(let ie=0;ie<bt;ie++){let ce=1-ie/bt;Zt.fill(0),ne.fill(0),Nt(Zt,ne,Math.max(0,ce*1.6-.6)),Re.clear();for(let ae of B){let he=Pt(Math.floor(X[ae]/kt),Math.floor(D[ae]/kt)),C=Re.get(he);C||Re.set(he,C=[]),C.push(ae)}for(let ae of B){let he=Math.floor(X[ae]/kt),C=Math.floor(D[ae]/kt),x=Math.ceil(2*lt[ae]/kt);for(let $=he-x;$<=he+x;$++)for(let K=C-x;K<=C+x;K++){let T=Re.get(Pt($,K));if(T)for(let U of T){if(lt[U]>lt[ae]||lt[U]===lt[ae]&&U<=ae||!It.same(ae,U))continue;let W=X[ae]-X[U],L=D[ae]-D[U],k=Math.hypot(W,L);k<1e-6&&(W=ae*7919%13-6||1,L=U*104729%11-5||1,k=Math.hypot(W,L),W*=.001/k,L*=.001/k,k=.001);let nt=lt[ae]+lt[U];if(k>=nt)continue;let q=(nt-k)/k*.5;Zt[ae]+=W*q,ne[ae]+=L*q,Zt[U]-=W*q,ne[U]-=L*q}}}let G=It.max*ce+.3;for(let ae of B){let he=Zt[ae],C=ne[ae],x=Math.hypot(he,C);x>G&&(he*=G/x,C*=G/x),It.move(ae,X[ae]+he,D[ae]+C)}}};dt(et,p,220,{max:4,same:(B,lt)=>u[B]===u[lt],move:(B,lt,bt)=>{let It=ft.get(u[B]),Nt=Math.min(p[B],(It.x1-It.x0)/2,(It.y1-It.y0)/2)*.9;X[B]=Math.min(It.x1-Nt,Math.max(It.x0+Nt,lt)),D[B]=Math.min(It.y1-Nt,Math.max(It.y0+Nt,bt))}},(B,lt,bt)=>{if(bt){for(let[It,Nt,Ut]of gt){let kt=Ut*bt,Pt=X[Nt]-X[It],Zt=D[Nt]-D[It],ne=Math.hypot(Pt,Zt)||1e-9,Re=(p[It]+p[Nt])*1.05;if(ne<=Re)continue;let ie=kt*(ne-Re)/ne;B[It]+=Pt*ie,lt[It]+=Zt*ie,B[Nt]-=Pt*ie,lt[Nt]-=Zt*ie}for(let It of et)rt[It]>=0&&(B[It]+=(X[rt[It]]-X[It])*.03*bt,lt[It]+=(D[rt[It]]-D[It])*.03*bt)}});let xt=new Float64Array(s),pt=Math.PI/2;for(let[B,lt]of g)for(let bt of lt){let It=bt.list.length,Nt=1.5/bt.r,Ut;if(bt.d===1){let kt=Math.max(Nt,Math.min(2*Math.PI/It,Nt*1.9));Ut=bt.list.map((Pt,Zt)=>pt+(Zt%2?1:-1)*Math.ceil(Zt/2)*kt)}else{let kt=bt.list.map(ie=>{let ce=0,G=0;for(let[ae]of o[ie])c[ae]===B&&(ce+=Math.sin(xt[ae]),G+=Math.cos(xt[ae]));return ce||G?Math.atan2(ce,G):pt}),Pt=bt.list.map((ie,ce)=>ce).sort((ie,ce)=>kt[ie]-kt[ce]||ie-ce);Ut=new Array(It);let Zt=-1/0,ne=0;for(let ie of Pt){let ce=Math.max(kt[ie],Zt+Nt);ne+=ce-kt[ie],Ut[ie]=ce,Zt=ce}let Re=Math.min(ne/It,Nt*It*.5);for(let ie=0;ie<It;ie++)Ut[ie]-=Re}bt.list.forEach((kt,Pt)=>{xt[kt]=Ut[Pt],X[kt]=X[B]+Math.cos(Ut[Pt])*bt.r,D[kt]=D[B]+Math.sin(Ut[Pt])*bt.r})}let we=[];for(let B=0;B<s;B++)h[B]&&we.push(B);let ge=new Float64Array(s),Me=new Float64Array(s),at=new Float64Array(s),vt=new Int16Array(s);for(let B=0;B<s;B++)vt[B]=a[B]?u[B]:c[B]>=0?u[c[B]]:0;for(let B of we){let lt=l(B),bt=0,It=0,Nt=0,Ut=-1,kt=-1;for(let[Pt,Zt]of lt){let ne=Math.sqrt(Zt);bt+=X[Pt]*ne,It+=D[Pt]*ne,Nt+=ne,Zt>kt&&(kt=Zt,Ut=Pt)}ge[B]=X[B]=bt/Nt,Me[B]=D[B]=It/Nt,vt[B]=u[Ut],at[B]=jd(n[B])*1.5+.6}dt(we,at,140,{max:3,same:()=>!0,move:(B,lt,bt)=>{X[B]=Math.min(S-2,Math.max(2,lt)),D[B]=Math.min(P-2,Math.max(2,bt))}},(B,lt,bt)=>{for(let It of we)B[It]+=(ge[It]-X[It])*.04*bt,lt[It]+=(Me[It]-D[It])*.04*bt}),t(`mapa: ${H.length} bairros, ${et.length} terrenos, ${s-et.length-we.length} nas pra\xE7as, ${we.length} no c\xE9u, ${S.toFixed(0)} \xD7 ${P.toFixed(0)}`);let Rt=B=>Math.round(B*10)/10;return{v:wu,W:Rt(S),H:Rt(P),x:Array.from(X,Rt),y:Array.from(D,Rt),plate:Array.from(vt,B=>z.get(B)),sky:Array.from(h),anchor:Array.from(c),lot:Array.from(p,Rt),plates:H.map(B=>({c:B.c,x0:Rt(B.x0),y0:Rt(B.y0),x1:Rt(B.x1),y1:Rt(B.y1)}))}}var Ot=(i,t=document)=>t.querySelector(i),oe=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),fa=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),tn=(i,t=0)=>Number(i).toLocaleString("pt-BR",{minimumFractionDigits:t,maximumFractionDigits:t}),ap=i=>typeof i=="number"&&isFinite(i),Qe=i=>ap(i)?i>=1e12?`R$ ${tn(i/1e12,2)} tri`:i>=1e9?`R$ ${tn(i/1e9,i>=1e11?0:1)} bi`:i>=1e6?`R$ ${tn(i/1e6,0)} mi`:`R$ ${tn(i)}`:"\u2013",oi=i=>ap(i)&&i>=0?`${tn(i,i>=10||i===Math.round(i)?i===Math.round(i)?0:1:2)}%`:"\u2013",fn=(i,t,e)=>`${tn(i)} ${i===1?t:e}`,ki=(i,t="ic")=>`<svg class="${t}" aria-hidden="true"><use href="#i-${i}"/></svg>`,ir={get:(i,t)=>{try{let e=localStorage.getItem(`n1:${i}`);return e==null?t:JSON.parse(e)}catch{return t}},set:(i,t)=>{try{localStorage.setItem(`n1:${i}`,JSON.stringify(t))}catch{}}},Bc=matchMedia("(prefers-reduced-motion: reduce)").matches,nr=matchMedia("(pointer: coarse)").matches,dn=i=>{let t=String(i).replace(/[\s,]+(S\.?\/?A\.?|S\/a|Ltda\.?|Inc\.?|LLC|S\.à ?r\.l\.?|Sarl|S\.R\.L\.)\s*$/i,"").replace(/\s*\(.*?\)\s*$/,"").replace(/[\s,;-]+$/,"");return t.length>34?`${t.slice(0,32)}\u2026`:t},C_=i=>i.length===14?`${i.slice(0,2)}.${i.slice(2,5)}.${i.slice(5,8)}/${i.slice(8,12)}-${i.slice(12)}`:i;function da(i){let t=Ot("#toast");t.textContent=i,t.hidden=!1,clearTimeout(da.t),da.t=setTimeout(()=>{t.hidden=!0},2800)}var Kr={fin:["#8fb8e8","Bancos e servi\xE7os financeiros","Financeiro"],tech:["#7cc6d9","Telecom, m\xEDdia e tecnologia","Tecnologia"],saude:["#78cfc0","Sa\xFAde e educa\xE7\xE3o","Sa\xFAde"],log:["#8ccfa3","Transporte e log\xEDstica","Log\xEDstica"],agro:["#b5cf86","Agro, alimentos e bebidas","Agro"],ind:["#d4c97f","Ind\xFAstria e bens de capital","Ind\xFAstria"],util:["#e3bb72","Energia el\xE9trica e saneamento","Energia"],oil:["#e59f78","Petr\xF3leo, g\xE1s e qu\xEDmica","Petr\xF3leo"],base:["#d99090","Minera\xE7\xE3o, siderurgia e papel","Minera\xE7\xE3o"],cons:["#d996b4","Varejo e consumo","Consumo"],imob:["#b9a0dd","Constru\xE7\xE3o e im\xF3veis","Imobili\xE1rio"],out:["#a8b3bf","Holdings e outros","Holdings"]},Wc={pf:["#f0c9a0","Pessoa f\xEDsica"],hold:["#8ea3bd","Holding ou empresa"],fund:["#a9a2f5","Gestora ou fundo"],pen:["#d39af0","Fundo de pens\xE3o"],gov:["#f2d37a","Governo"],sub:["#7fd6b4","Controlada em comum"]},R_="#b3a6f7",zc="#3cf0b4",Xi=i=>(Kr[i]||Kr.out)[0],Lu=i=>i.t==="s"?"sub":i.t==="p"?"pf":Wc[i.c]?i.c:"hold",Ti=i=>i.t==="c"?Xi(i.c):Wc[Lu(i)][0],ai=i=>i.t==="c"?"Companhia aberta":Wc[Lu(i)][1],P_={sector:Xi,kind:i=>Wc[Lu(i)][0],investor:R_},R={ready:!1};function I_(i){let t=i.nodes,e=t.length;Object.assign(R,{data:i,nodes:t,N:e,groups:i.groups||[],setores:i.setores||{}}),t.forEach((r,o)=>{r.i=o,r.f=fa(r.n)});let n=i.edges||[];R.M=n.length,R.es=new Int32Array(R.M),R.et=new Int32Array(R.M),R.ep=new Float32Array(R.M),R.ef=new Uint8Array(R.M),n.forEach(([r,o,a,l],c)=>{R.es[c]=r,R.et[c]=o,R.ep[c]=a,R.ef[c]=l});let s=i.board||[];R.B=s.length,R.bs=new Int32Array(R.B),R.bt=new Int32Array(R.B),R.br=s.map(r=>r[2]),s.forEach(([r,o],a)=>{R.bs[a]=r,R.bt[a]=o}),R.out=Array.from({length:e},()=>[]),R.inc=Array.from({length:e},()=>[]),R.brd=Array.from({length:e},()=>[]);for(let r=0;r<R.M;r++)R.out[R.es[r]].push(r),R.inc[R.et[r]].push(r);for(let r=0;r<R.B;r++)R.brd[R.bs[r]].push(r),R.brd[R.bt[r]].push(r);R.groups.forEach((r,o)=>{r.i=o,r.f=fa(r.n);let a={};for(let l of r.m)t[l].t==="c"&&(a[t[l].c]=(a[t[l].c]||0)+(t[l].mc||1e8));r.sector=Object.entries(a).sort((l,c)=>c[1]-l[1])[0]?.[0]||"out"}),R.deg=Float32Array.from(t,(r,o)=>R.out[o].length+R.inc[o].length+R.brd[o].length),R.crank=new Int32Array(e).fill(1e9),t.map((r,o)=>o).filter(r=>t[r].t==="c").sort((r,o)=>(t[o].mc||0)-(t[r].mc||0)).forEach((r,o)=>{R.crank[r]=o}),R.labelOrder=t.map((r,o)=>o).sort((r,o)=>kc(o)-kc(r)),R.byId=new Map(t.map(r=>[r.id,r.i])),R.byK=new Map(t.filter(r=>r.k).map(r=>[r.k,r.i])),R.bySlug=new Map(t.filter(r=>r.s).map(r=>[r.s,r.i])),R.byCnpj=new Map(t.filter(r=>r.cnpj).map(r=>[r.cnpj,r.i])),R.ready=!0}var kc=i=>{let t=R.nodes[i];return t.t==="c"?1e15+(t.mc||0)+R.deg[i]*1e8:(t.v||0)+R.deg[i]*5e8},st={mode:"world",hover:-1,sel:-1,group:-1,sector:-1,shape:null,hl:null,layers:{people:!0,funds:!0,board:!1,ctlonly:!1,groups:!0,...ir.get("mundo-layers",{})},pathIds:null,lastInput:performance.now()},Gn=new Uint8Array(1);function lp(){Gn=new Uint8Array(R.N);let i=st.layers;for(let t=0;t<R.N;t++){let e=R.nodes[t],n=1;e.t==="p"&&!i.people&&(n=0),e.t==="j"&&(e.c==="fund"||e.c==="pen")&&!i.funds&&(n=0),e.b&&!i.board&&!R.out[t].length&&!R.inc[t].length&&(n=0),i.ctlonly&&e.t!=="c"&&!R.out[t].some(s=>R.ef[s]&1)&&(n=0),Gn[t]=n}Ct?.setVisible(Gn)}var Ct=null,Wi=null;function Du(i){let t=new Set([i]),e=new Set,n=new Set;for(let s of R.out[i])Gn[R.et[s]]&&(!st.layers.ctlonly||R.ef[s]&1)&&(t.add(R.et[s]),e.add(s));for(let s of R.inc[i])Gn[R.es[s]]&&(!st.layers.ctlonly||R.ef[s]&1)&&(t.add(R.es[s]),e.add(s));if(st.layers.board||R.nodes[i].b)for(let s of R.brd[i]){let r=R.bs[s]===i?R.bt[s]:R.bs[s];t.add(r),n.add(s)}return{nodes:t,edges:e,brd:n}}function li(i,t,e,n=[],s=.75,r=!1,o=null){if(st.hl=i,st.rel=o,Y_(),!Ct)return;if(!i){Ct.setHighlight(null),Ct.setFlows([]);return}let a=new Map;for(let c of i)a.set(c,.5);for(let c of n)a.set(c,1);Ct.setHighlight(a,s);let l=[];for(let c of t||[])l.push([R.es[c],R.et[c],r?1:R.ef[c]&1,R.ep[c]]);for(let c of e||[])l.push([R.bs[c],R.bt[c],r?1:0,4]);l.sort((c,h)=>h[2]-c[2]),Ct.setFlows(l)}function Nu(i,t){let e=new Map;for(let n of t.edges){let s=R.ef[n]&1,r=R.ep[n]>=0?oi(R.ep[n]):"";R.et[n]===i?e.set(R.es[n],s?`controla${r?` \xB7 ${r}`:""}`:r?`dono de ${r}`:"acionista"):e.set(R.et[n],s?`controlada${r?` \xB7 ${r}`:""}`:r?`participa\xE7\xE3o de ${r}`:"participa\xE7\xE3o")}for(let n of t.brd){let s=R.bs[n]===i?R.bt[n]:R.bs[n];e.has(s)||e.set(s,{P:"presid\xEAncia do conselho",E:"presid\xEAncia executiva",C:"conselho",D:"diretoria"}[R.br[n]]||"administra\xE7\xE3o")}return e}function Tn(i,{fly:t=!0,push:e=!0}={}){if(st.mode!=="world"&&Hi(!1),$i(),st.sel=i,st.group=-1,Uu(),to(),i<0){li(null),up(),e&&Is("");return}let n=Du(i);li(n.nodes,n.edges,n.brd,[i],.75,!1,Nu(i,n)),Fu(i),$c(),t&&Ct.flyToNodes(L_(i,n.nodes),{minSpan:16}),e&&Is(`n/${R.nodes[i].id}`)}function L_(i,t){let e=[...t],n=1/0,s=-1/0,r=1/0,o=-1/0;for(let l of e)n=Math.min(n,Ct.X[l]),s=Math.max(s,Ct.X[l]),r=Math.min(r,Ct.Z[l]),o=Math.max(o,Ct.Z[l]);return Ct.sky[i]||Math.hypot(s-n,o-r)<=62?e:e.filter(l=>l===i||Math.hypot(Ct.X[l]-Ct.X[i],Ct.Z[l]-Ct.Z[i])<=26)}function Hc(i,{push:t=!0}={}){st.mode!=="world"&&Hi(!1),$i();let e=R.groups[i];st.sel=-1,st.group=i,Uu(),to();let n=new Set(e.m),s=new Set;for(let r of e.m)for(let o of R.out[r])n.has(R.et[o])&&s.add(o);li(n,s,new Set,e.m.filter(r=>R.nodes[r].t==="c")),O_(i),$c(),Ct.flyToNodes(e.m,{minSpan:20}),t&&Is(`g/${i}`)}var tp=i=>(R.data.mapa.plates||[]).findIndex(t=>t.c===i);function pa(i,{push:t=!0,fly:e=!0}={}){i<0||(st.mode!=="world"&&Hi(!1),$i(),st.sel=-1,st.group=-1,st.sector=i,to(),li(null),Ct.setFocusPlate(i),sy(i),e&&Ct.flyToPlate(i),$c(),t&&Is(`setor/${R.data.mapa.plates[i].c}`))}function Uu(){st.sector<0||(st.sector=-1,Ct?.setFocusPlate(-1))}function ep(i){if(!Ct||st.mode!=="world")return;if(st.shape===i||!i){to(),st.sel>=0?Tn(st.sel,{fly:!1,push:!1}):li(null);return}(st.sel>=0||st.group>=0)&&(st.sel=-1,st.group=-1,st.sector<0&&up(),Is(st.sector>=0?`setor/${R.data.mapa.plates[st.sector].c}`:""),$c()),$i(),st.shape=i,cp();let t=new Set,e=new Map;for(let n=0;n<R.N;n++)Gn[n]&&Ct.shape[n]===i&&(st.sector<0||R.data.mapa.plate[n]===st.sector)&&(t.add(n),e.set(n,.02));st.hl=t,Ct.setHighlight(e,.85),Ct.setFlows([])}function to(){st.shape&&(st.shape=null,cp())}var cp=()=>{for(let i of document.querySelectorAll("#m-key [data-shape]"))i.classList.toggle("on",i.dataset.shape===st.shape)};function hp(i){let t=-1,e=-2;for(let n of R.inc[i])R.ef[n]&1&&R.ep[n]>e&&(e=R.ep[n],t=R.es[n]);return t}function D_(i){let t=[i],e=new Set([i]);for(;;){let n=hp(t[t.length-1]);if(n<0||e.has(n))break;e.add(n),t.push(n)}return t}var N_=(i,t)=>R.out[i].find(e=>R.et[e]===t);function U_(i){let t=Ti(i);if(i.t==="c"){let e=i.n.replace(/[^A-Za-zÀ-ÿ0-9 ]/g,"").split(/\s+/).filter(Boolean).slice(0,2).map(n=>n[0]).join("").toUpperCase();return`<span class="m-badge" style="--c:${t}"><span>${oe(e)}</span>${i.tk?`<img src="https://icons.brapi.dev/icons/${oe(i.tk)}.svg" alt="" loading="lazy" onload="this.naturalWidth > 1 ? this.classList.add('ok') : this.remove()" onerror="this.remove()">`:""}</span>`}if(i.t==="p"){let e=i.n.split(/\s+/).filter(n=>n&&!/^(de|da|do|das|dos|e)$/i.test(n)).slice(0,2).map(n=>n[0]).join("").toUpperCase();return`<span class="m-badge round" style="--c:${t}"><span>${oe(e)}</span></span>`}return`<span class="m-badge" style="--c:${t}">${ki("cias")}</span>`}function Rs(i,t,e,n){let s=R.nodes[i];return`<li data-go="${i}"><span class="m-dot" style="--c:${Ti(s)}"></span><span class="nm">${oe(s.n)}</span>
    <span class="pc ${n?"m-ctl":""}">${oe(t)}</span>${e?`<small>${oe(e)}</small>`:""}</li>`}function Jr(i,t=8,e=""){return i.length?`<ul class="m-list" ${e?`data-list="${e}"`:""}>${i.slice(0,t).join("")}${i.length>t?`<li class="more" data-more="${e}">Mostrar mais ${i.length-t}</li>`:""}</ul>`:""}function F_(i){let t=i.filter(h=>h.p>0).slice(0,7);if(!t.length)return"";let e=t.reduce((h,d)=>h+d.p,0),n=e>100?100/e:1;e=Math.min(100,e);let s=46,r=2*Math.PI*s,o=0,a=t.map(h=>{let d=h.p*n/100,u=Math.max(0,d*r-2),f=`<circle r="${s}" cx="60" cy="60" fill="none" stroke="${Ti(R.nodes[h.o])}" stroke-width="${h.ctl?13:10}" stroke-dasharray="${u.toFixed(2)} ${(r-u).toFixed(2)}" stroke-dashoffset="${(-o*r).toFixed(2)}" data-go="${h.o}"><title>${oe(R.nodes[h.o].n)} \xB7 ${oi(h.p)}</title></circle>`;return o+=d,f}).join(""),l=t[0],c=t.slice(0,5).map(h=>`<li data-go="${h.o}"><i style="--c:${Ti(R.nodes[h.o])}"></i><span>${oe(dn(R.nodes[h.o].n))}</span><b>${oi(h.p)}</b></li>`).join("")+(e<99.5?`<li class="rest"><i></i><span>Demais acionistas</span><b>${oi(100-e)}</b></li>`:"");return`<div class="m-donut"><svg viewBox="0 0 120 120" aria-hidden="true"><circle r="${s}" cx="60" cy="60" fill="none" class="m-donut-track" stroke-width="10"/><g transform="rotate(-90 60 60)">${a}</g>
    <text x="60" y="56" text-anchor="middle" class="m-donut-v">${oi(l.p)}</text><text x="60" y="72" text-anchor="middle" class="m-donut-l">${l.ctl?"controle":"maior fatia"}</text></svg>
    <ul>${c}</ul></div>`}var Gi={},np={P:"Presidente do conselho",E:"Diretor-presidente (CEO)",C:"Conselho de administra\xE7\xE3o",D:"Diretoria"};function Fu(i){let t=R.nodes[i],e=Ot("#m-panel-body"),n=R.inc[i].map(m=>({j:m,o:R.es[m],p:R.ep[m],ctl:R.ef[m]&1})).sort((m,v)=>v.ctl-m.ctl||v.p-m.p),s=R.out[i].map(m=>({j:m,o:R.et[m],p:R.ep[m],ctl:R.ef[m]&1})).sort((m,v)=>v.ctl-m.ctl||(R.nodes[v.o].mc||0)*v.p-(R.nodes[m.o].mc||0)*m.p||v.p-m.p),r=R.brd[i].map(m=>({j:m,o:R.bs[m]===i?R.bt[m]:R.bs[m],r:R.br[m]})),o=t.g!=null?R.groups[t.g]:null,a=D_(i),l=s.filter(m=>m.ctl).length,c=t.t==="c"?[t.tk||"capital fechado",t.st,t.uf]:[ai(t),t.pais,t.cnpj?C_(t.cnpj):""],h=t.t==="c"?[["Valor de mercado",t.mc?Qe(t.mc):"\u2013"],["Acionistas",tn(n.length)],["Participa\xE7\xF5es",tn(s.length)]]:[["Participa\xE7\xF5es",tn(s.length)],["Valor estimado",t.v?Qe(t.v):"\u2013"],[r.length?"Cargos":"Controla",tn(r.length||l)]];Gi={inc:n.map(m=>Rs(m.o,oi(m.p),[m.ctl?"controlador":"",R.ef[m.j]&2?"acordo de acionistas":"",ai(R.nodes[m.o])].filter(Boolean).join(" \xB7 "),m.ctl)),out:s.map(m=>Rs(m.o,oi(m.p),[m.ctl?"controla":"",R.nodes[m.o].mc?`valor de mercado ${Qe(R.nodes[m.o].mc)}`:ai(R.nodes[m.o])].filter(Boolean).join(" \xB7 "),m.ctl)),brd:r.map(m=>{let v=R.nodes[m.o];if(t.t==="c"){let g=R.brd[m.o].map(p=>R.bs[p]===m.o?R.bt[p]:R.bs[p]).filter(p=>p!==i).map(p=>dn(R.nodes[p].n));return Rs(m.o,"",`${np[m.r]||"Cargo"} aqui \xB7 tamb\xE9m em ${g.slice(0,3).join(", ")}${g.length>3?` e mais ${g.length-3}`:""}`,!1)}return Rs(m.o,"",`${np[m.r]||"Cargo"}${v.mc?` \xB7 ${Qe(v.mc)}`:""}`,!1)})};let d=t.t==="c"&&t.k?`cias.html#cia/${encodeURIComponent(t.k)}`:t.s?`cias.html#pessoa/${encodeURIComponent(t.s)}`:"",u=t.t==="c"?R.setores[t.c]||Kr[t.c]?.[1]:"",f=st.mode==="tree";e.innerHTML=`
    <div class="m-kicker" style="--c:${Ti(t)}"><i></i>${oe(t.t==="c"?u||"Companhia aberta":ai(t))}</div>
    <div class="m-head">${U_(t)}<div><h2>${oe(t.n)}</h2><p>${oe(c.filter(Boolean).join(" \xB7 "))}</p></div></div>
    ${o&&o.nc>=2?`<div class="m-chips"><button class="m-chip gold" data-group="${o.i}" type="button">${ki("cias","ic ic-xs")}Grupo ${oe(o.n)} \xB7 ${fn(o.nc,"companhia","companhias")}</button></div>`:""}
    <div class="m-stats">${h.map(([m,v])=>`<div class="m-stat"><span>${m}</span><b>${oe(v)}</b></div>`).join("")}</div>
    <div class="m-btns">
      ${f&&st.treeFocus===i?`<button class="m-btn primary" type="button" data-act="world">${ki("map")}Ver no mapa</button>`:`<button class="m-btn primary" type="button" data-act="tree">${ki("tree")}Estrutura societ\xE1ria</button>`}
      <button class="m-btn" type="button" data-act="path">${ki("path")}Conectar com\u2026</button>
      ${d?`<a class="m-btn wide ghost" href="${d}">${t.t==="c"?"Perfil completo da companhia":"Perfil completo"} ${ki("ext")}</a>`:""}
    </div>
    <div id="m-pick-slot"></div>
    ${t.t==="c"&&n.length?`<div class="m-sec"><h3>Composi\xE7\xE3o acion\xE1ria<small>participa\xE7\xF5es relevantes</small></h3>${F_(n)}</div>`:""}
    ${a.length>1?`<div class="m-sec"><h3>Quem controla<small>do controlador final at\xE9 aqui</small></h3><ol class="m-chain">${a.slice().reverse().map((m,v,g)=>{let p=g[v+1],y=p!=null?N_(m,p):null,E=y==null?"":R.ef[y]&2?`bloco de controle \xB7 ${oi(R.ep[y])}`:`controla com ${oi(R.ep[y])}`;return`<li data-go="${m}" class="${m===i?"me":""}"><span class="nm">${oe(R.nodes[m].n)}</span><span class="pc">${E}</span></li>`}).join("")}</ol></div>`:""}
    ${n.length?`<div class="m-sec"><h3>${t.t==="c"?"Acionistas":"Quem \xE9 dono"}<small>${fn(n.length,"acionista","acionistas")} relevante${n.length===1?"":"s"}</small></h3>${Jr(Gi.inc,8,"inc")}</div>`:""}
    ${s.length?`<div class="m-sec"><h3>${t.t==="c"?"Participa\xE7\xF5es em outras":"Participa\xE7\xF5es"}<small>${fn(s.length,"empresa","empresas")}</small></h3>${Jr(Gi.out,8,"out")}</div>`:""}
    ${r.length?`<div class="m-sec"><h3>${t.t==="c"?"Quem do conselho ou da diretoria tamb\xE9m est\xE1 em outras":"Cargos"}<small>${fn(r.length,t.t==="c"?"pessoa":"companhia",t.t==="c"?"pessoas":"companhias")}</small></h3>${Jr(Gi.brd,8,"brd")}</div>`:""}
    <p class="m-foot">Participa\xE7\xF5es acima de 5% e controladores, como declarados no Formul\xE1rio de Refer\xEAncia de cada companhia \xE0 CVM${t.v?"; valor estimado = participa\xE7\xE3o \xD7 valor de mercado":""}.</p>`,Xc()}function O_(i){let t=R.groups[i],e=t.m.filter(o=>R.nodes[o].t==="c").sort((o,a)=>(R.nodes[a].mc||0)-(R.nodes[o].mc||0)),n=R.nodes[t.h];Gi={cos:e.map(o=>Rs(o,R.nodes[o].mc?Qe(R.nodes[o].mc):"",[R.nodes[o].tk,o===t.h?"topo do grupo":""].filter(Boolean).join(" \xB7 "),!1))};let s=e.reduce((o,a)=>o+(R.nodes[a].mc||0),0),r=s?`<div class="m-bar">${e.filter(o=>R.nodes[o].mc).slice(0,12).map(o=>`<span data-go="${o}" style="flex:${R.nodes[o].mc/s};--c:${Ti(R.nodes[o])}" title="${oe(R.nodes[o].n)} \xB7 ${Qe(R.nodes[o].mc)}"></span>`).join("")}</div>`:"";Ot("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${Xi(t.sector)}"><i></i>Grupo econ\xF4mico \xB7 ${oe(Kr[t.sector]?.[1]||"")}</div>
    <div class="m-head"><span class="m-badge" style="--c:${Xi(t.sector)}">${ki("cias")}</span><div><h2>Grupo ${oe(t.n)}</h2><p>${fn(t.nc,"companhia aberta","companhias abertas")} \xB7 ${fn(t.m.length,"entidade","entidades")}</p></div></div>
    <div class="m-stats">
      <div class="m-stat"><span>Valor de mercado</span><b>${oe(t.mc?Qe(t.mc):"\u2013")}</b></div>
      <div class="m-stat"><span>Companhias</span><b>${tn(t.nc)}</b></div>
      <div class="m-stat"><span>Entidades</span><b>${tn(t.m.length)}</b></div>
    </div>
    ${r}
    <div class="m-btns"><button class="m-btn primary wide" type="button" data-act="tree" data-node="${t.h}">${ki("tree")}Estrutura a partir de ${oe(dn(n.n))}</button></div>
    ${t.r.length?`<div class="m-sec"><h3>Controle final</h3>${Jr(t.r.map(o=>Rs(o,"",ai(R.nodes[o]),!0)),6)}</div>`:""}
    <div class="m-sec"><h3>Companhias do grupo<small>valor de mercado</small></h3>${Jr(Gi.cos,12,"cos")}</div>
    <p class="m-foot">Grupo = companhias que chegam ao mesmo topo seguindo, em cada uma, o acionista controlador de maior participa\xE7\xE3o.</p>`,Xc()}function Xc(){let i=Ot("#m-panel");innerWidth<=760&&(i.hidden||st.mode!=="world")&&i.classList.add("peek"),i.hidden=!1,document.body.classList.add("panel-open"),Ot("#m-panel-body").scrollTop=0,Un(),clearTimeout(Un.t),Un.t=setTimeout(Un,450)}function up(){Ot("#m-panel").hidden=!0,document.body.classList.remove("panel-open"),Un(),clearTimeout(Un.t),Un.t=setTimeout(Un,450)}function B_(i,t){let e=l=>!(R.nodes[l].t==="j"&&(R.nodes[l].c==="fund"||R.nodes[l].c==="pen"))||l===i||l===t,n=new Int32Array(R.N).fill(-1),s=new Int32Array(R.N).fill(-1),r=[i];for(n[i]=i;r.length;){let l=r.shift();if(l===t)break;if(l!==i&&!e(l))continue;let c=(h,d)=>{n[h]===-1&&(n[h]=l,s[h]=d,r.push(h))};for(let h of R.out[l])c(R.et[h],h);for(let h of R.inc[l])c(R.es[h],h);for(let h of R.brd[l])c(R.bs[h]===l?R.bt[h]:R.bs[h],-2-h)}if(n[t]===-1)return null;let o=[t],a=[];for(let l=t;l!==i;l=n[l])a.unshift(s[l]),o.unshift(n[l]);return{path:o,ev:a}}function Vc(i,t,{push:e=!0}={}){let n=B_(i,t);if(!n){da(`N\xE3o h\xE1 liga\xE7\xE3o entre ${dn(R.nodes[i].n)} e ${dn(R.nodes[t].n)} sem passar por gestoras ou fundos`);return}st.mode==="tree"&&Hi(!1),st.mode="path",st.sel=-1,to();let s=new Set(n.path),r=new Set,o=new Set;for(let l of n.ev)l>=0?r.add(l):o.add(-2-l);if(st.pathIds=[i,t],st.forceVis&&(st.forceVis=null,Ct.setVisible(Gn)),n.path.some(l=>!Gn[l])){st.forceVis=new Set(n.path);let l=Gn.slice();for(let c of n.path)l[c]=1;Ct.setVisible(l)}$i(),li(s,r,o,n.path,.85,!0),Ot("#m-mode").hidden=!1,Ot("#m-mode-text").innerHTML=`<span class="m-mode-k">Caminho</span><b>${oe(dn(R.nodes[i].n))} \u2192 ${oe(dn(R.nodes[t].n))}</b><span class="m-mode-n">${fn(n.ev.length,"passo","passos")}</span>`;let a=n.ev.map(l=>{let c=f=>`<b data-go="${f}">${oe(R.nodes[f].n)}</b>`;if(l>=0){let f=R.es[l],m=R.et[l],v=R.ep[l],g=R.ef[l]&1;return`<li>${c(f)} ${g?"controla":"tem"} ${v>=0?`${oi(v)} de`:"participa\xE7\xE3o em"} ${c(m)}</li>`}let h=-2-l,d=R.bs[h],u=R.bt[h];return`<li>${c(d)} est\xE1 ${{P:"na presid\xEAncia do conselho",E:"na presid\xEAncia executiva",C:"no conselho de administra\xE7\xE3o",D:"na diretoria"}[R.br[h]]||"na administra\xE7\xE3o"} de ${c(u)}</li>`});Ot("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${zc}"><i></i>Caminho mais curto</div>
    <div class="m-head"><span class="m-badge" style="--c:${zc}">${ki("path")}</span><div><h2>Como se conectam</h2><p>${oe(dn(R.nodes[i].n))} e ${oe(dn(R.nodes[t].n))}</p></div></div>
    <div class="m-sec"><h3>O caminho<small>${fn(n.ev.length,"liga\xE7\xE3o","liga\xE7\xF5es")}</small></h3><ol class="m-path">${a.join("")}</ol></div>
    <div class="m-btns"><button class="m-btn wide" type="button" data-sel="${i}">Voltar para ${oe(dn(R.nodes[i].n))}</button><button class="m-btn wide" type="button" data-sel="${t}">Ir para ${oe(dn(R.nodes[t].n))}</button></div>
    <p class="m-foot">Liga\xE7\xF5es por participa\xE7\xE3o acion\xE1ria (5% ou mais, ou controle) e por pessoas que est\xE3o no conselho ou na diretoria das duas. Gestoras e fundos n\xE3o contam como ponte.</p>`,Xc(),Ct.flyToNodes(n.path,{minSpan:20}),e&&Is(`c/${R.nodes[i].id}/${R.nodes[t].id}`)}async function Ps(i,{push:t=!0}={}){let e=R.nodes[i],n=[];try{await Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1200))])}catch{}if(e.t==="c"&&e.k)try{n=(await fetch(`data/cias/perfil/${encodeURIComponent(e.k)}.json`,{cache:"no-cache"}).then(o=>o.ok?o.json():{})).participacoes||[]}catch{n=[]}let s=st.mode!=="tree";s&&await Gc(),st.mode="tree",st.sel=i,st.group=-1,st.treeFocus=i,Uu(),to(),$i(),ma(-1),st.hover=-1,li(null),document.body.classList.add("in-tree"),Fu(i),Wi.open(i,n,{from:s?Ct.project(i,{}):null}),Ot("#m-mode").hidden=!1,Ot("#m-mode-text").innerHTML=`<span class="m-mode-k">Estrutura societ\xE1ria</span><b>${oe(e.n)}</b>`,Un(),t&&Is(`e/${e.id}`)}function Gc(){let i=Ot("#m-fade");return!i||Bc?Promise.resolve():(i.classList.add("on"),clearTimeout(Gc.t),Gc.t=setTimeout(()=>i.classList.remove("on"),260),new Promise(t=>setTimeout(t,170)))}function Hi(i=!0){st.mode==="tree"&&(Gc(),Wi.close(),document.body.classList.remove("in-tree")),st.mode="world",Ot("#m-mode").hidden=!0,st.pathIds=null,st.forceVis&&(st.forceVis=null,Ct.setVisible(Gn)),i&&(st.sel>=0?Tn(st.sel):(li(null),Is("")))}function z_(i,t=9){let e=fa(i.trim());if(e.length<2)return[];let n=e.split(/\s+/),s=[];for(let r of R.groups)r.nc<2||n.every(o=>r.f.includes(o))&&s.push({g:r.i,s:(r.f.startsWith(e)?100:50)+Math.log10(r.mc||10)});for(let r of R.nodes){if(!Gn[r.i]&&r.t!=="c")continue;let o=0;r.f===e||r.tk&&fa(r.tk)===e?o=120:r.f.startsWith(e)||r.tk&&fa(r.tk).startsWith(e)?o=90:n.every(a=>r.f.includes(a))&&(o=r.f.split(/\s+/).some(a=>a.startsWith(n[0]))?60:35),o&&(o+=r.t==="c"?12+Math.log10(r.mc||1e6):Math.log10(r.v||1e6)+R.deg[r.i]*.2,s.push({i:r.i,s:o}))}return s.sort((r,o)=>o.s-r.s).slice(0,t)}function k_(i){if(!i.length)return'<li class="none">Nada com esse nome no mapa.</li>';let t=[["Grupos econ\xF4micos",i.filter(n=>n.g!=null)],["Companhias",i.filter(n=>n.i!=null&&R.nodes[n.i].t==="c")],["Pessoas e investidores",i.filter(n=>n.i!=null&&R.nodes[n.i].t!=="c")]],e=0;return t.filter(([,n])=>n.length).map(([n,s])=>`<li class="grp" role="presentation">${n}</li>`+s.map(r=>{let o=e++;if(r.g!=null){let l=R.groups[r.g];return`<li role="option" data-idx="${o}" aria-selected="false"><span class="m-dot" style="--c:${Xi(l.sector)}"></span><span class="m-r-txt"><b>Grupo ${oe(l.n)}</b><small>${fn(l.nc,"companhia","companhias")}${l.mc?` \xB7 ${Qe(l.mc)}`:""}</small></span></li>`}let a=R.nodes[r.i];return`<li role="option" data-idx="${o}" aria-selected="false"><span class="m-dot" style="--c:${Ti(a)}"></span><span class="m-r-txt"><b>${oe(a.n)}</b><small>${oe(a.t==="c"?[a.tk,a.mc?Qe(a.mc):"capital fechado",a.st].filter(Boolean).join(" \xB7 "):[ai(a),a.v?`\u2248 ${Qe(a.v)}`:""].filter(Boolean).join(" \xB7 "))}</small></span></li>`}).join("")).join("")}function fp(i,t,e){let n=[],s=0,r=()=>{n=z_(i.value),n=[...n.filter(a=>a.g!=null),...n.filter(a=>a.i!=null&&R.nodes[a.i].t==="c"),...n.filter(a=>a.i!=null&&R.nodes[a.i].t!=="c")],s=Math.min(s,Math.max(0,n.length-1)),t.hidden=!i.value.trim(),t.innerHTML=k_(n),t.querySelectorAll("[data-idx]").forEach(a=>a.setAttribute("aria-selected",String(+a.dataset.idx===s))),i.closest("[role=combobox]")?.setAttribute("aria-expanded",String(!t.hidden))},o=a=>{a&&(i.value="",t.hidden=!0,i.blur(),e(a))};i.addEventListener("input",()=>{s=0,r()}),i.addEventListener("focus",()=>{i.value.trim()&&r()}),i.addEventListener("keydown",a=>{a.key==="ArrowDown"||a.key==="ArrowUp"?(a.preventDefault(),s=(s+(a.key==="ArrowDown"?1:-1)+n.length)%Math.max(1,n.length),r()):a.key==="Enter"?(a.preventDefault(),o(n[s])):a.key==="Escape"&&Vn.on?va():a.key==="Escape"&&(i.value="",t.hidden=!0,i.blur())}),t.addEventListener("pointerdown",a=>{let l=a.target.closest("[data-idx]");l&&(a.preventDefault(),o(n[+l.dataset.idx]))}),document.addEventListener("pointerdown",a=>{!t.contains(a.target)&&a.target!==i&&(t.hidden=!0)})}var Eu="groups";function Au(){let i=Ot("#m-rank"),t=Ot("#m-tab-note"),e="";if(Eu==="groups"){t.textContent="Grupos econ\xF4micos pelo valor de mercado das companhias abertas que re\xFAnem.";let n=R.groups.filter(r=>r.nc>=2),s=n[0]?.mc||1;e=n.slice(0,60).map(r=>`<li data-group="${r.i}" class="${st.group===r.i?"on":""}" style="--c:${Xi(r.sector)};--w:${((r.mc||0)/s*100).toFixed(1)}%"><b>${oe(r.n)}</b><span class="v">${r.mc?Qe(r.mc).replace("R$ ",""):""}</span>
      <small>${fn(r.nc,"companhia","companhias")}${r.r.length?` \xB7 ${oe(r.r.slice(0,2).map(o=>dn(R.nodes[o].n)).join(", "))}`:""}</small><i class="m-rank-bar"></i></li>`).join("")}else if(Eu==="investors"){t.textContent="Quem tem mais valor em participa\xE7\xF5es diretas (participa\xE7\xE3o \xD7 valor de mercado).";let n=R.nodes.filter(r=>r.t!=="c"&&r.v).sort((r,o)=>o.v-r.v).slice(0,60),s=n[0]?.v||1;e=n.map(r=>`<li data-go="${r.i}" class="${st.sel===r.i?"on":""}" style="--c:${Ti(r)};--w:${(r.v/s*100).toFixed(1)}%"><b>${oe(dn(r.n))}</b><span class="v">${Qe(r.v).replace("R$ ","")}</span>
      <small>${oe(ai(r))} \xB7 ${fn(R.out[r.i].length,"participa\xE7\xE3o","participa\xE7\xF5es")}</small><i class="m-rank-bar"></i></li>`).join("")}else{t.textContent="Pessoas e empresas que mais ligam companhias entre si: participa\xE7\xF5es e cadeiras em conselhos e diretorias.";let n=o=>new Set([...R.out[o.i].map(a=>R.et[a]),...R.brd[o.i].map(a=>R.bt[a])].filter(a=>R.nodes[a].t==="c")).size,s=R.nodes.filter(o=>o.t==="p"||o.t==="j").map(o=>[o,n(o)]).filter(([,o])=>o>=3).sort((o,a)=>a[1]-o[1]||(a[0].v||0)-(o[0].v||0)).slice(0,60),r=s[0]?.[1]||1;e=s.map(([o,a])=>`<li data-go="${o.i}" class="${st.sel===o.i?"on":""}" style="--c:${Ti(o)};--w:${(a/r*100).toFixed(1)}%"><b>${oe(dn(o.n))}</b><span class="v">${a}</span>
      <small>${oe(ai(o))} \xB7 ${a} companhias</small><i class="m-rank-bar"></i></li>`).join("")}i.innerHTML=e}function $c(){for(let i of Ot("#m-rank").children)i.classList.toggle("on",i.dataset.group!=null&&+i.dataset.group===st.group||i.dataset.go!=null&&+i.dataset.go===st.sel)}var H_=[["tower","Companhia aberta",'<svg viewBox="0 0 20 20"><path d="M6 18V5h8v13z" fill="#141b29"/><path d="M6 5h8v1.8H6z" fill="var(--c)"/><path d="M7.6 8.4h1.3v1.3H7.6zM11 8.4h1.3v1.3H11zM9.3 11h1.3v1.3H9.3zM7.6 13.6h1.3v1.3H7.6zM11 13.6h1.3v1.3H11zM11 11h1.3v1.3H11z" fill="#ffd9a0"/></svg>'],["block","Capital fechado",'<svg viewBox="0 0 20 20"><path d="M4 17v-6h12v6z" fill="#141b29"/><path d="M4 11h12v1.5H4z" fill="var(--c)"/><path d="M6 13.6h1.3v1.3H6zM12.6 13.6h1.3v1.3h-1.3z" fill="#ffd9a0"/></svg>'],["sub","Controlada em comum",'<svg viewBox="0 0 20 20"><path d="M4 17v-6h12v6z" fill="#141b29"/><path d="M4 11h12v1.5H4z" fill="#7fd6b4"/><path d="M9.3 13.6h1.3v1.3H9.3z" fill="#ffd9a0"/></svg>'],["pawn","Pessoa f\xEDsica",'<svg viewBox="0 0 20 20"><circle cx="10" cy="6" r="2.6" fill="#f0c9a0"/><path d="M7.4 15.5 8.4 9.4h3.2l1 6.1z" fill="#f0c9a0"/><ellipse cx="10" cy="16" rx="4.6" ry="1.6" fill="#c99e74"/></svg>'],["tile","Holding ou empresa",'<svg viewBox="0 0 20 20"><path d="M5 8.5 10 6l5 2.5v6L10 17l-5-2.5z" fill="#5f7088"/><path d="M5 8.5 10 6l5 2.5-5 2.5z" fill="#a9bdd6"/></svg>'],["inv","Gestora, fundo ou governo",'<svg viewBox="0 0 20 20"><path d="M10 2.5 15 9 10 17.5 5 9z" fill="#b3a6f7"/><path d="M10 2.5 15 9H5z" fill="#d6cffb"/><path d="M10 17.5 15 9H10z" fill="#8576d6"/></svg>']],V_={tower:"Aberta",block:"Fechada",tile:"Holding",sub:"Controlada",pawn:"Pessoa",inv:"Gestora"},G_=()=>H_.map(([i,t,e])=>`<button type="button" class="m-key-i" data-shape="${i}" title="Destacar no mapa: ${t}" style="--c:${Xi("util")}">${e}<span class="l">${t}</span><span class="s">${V_[i]}</span></button>`).join("")+'<span class="m-key-sep"></span><span class="m-key-i m-key-ctl" title="O feixe corre de quem \xE9 dono para o que \xE9 possu\xEDdo"><i class="m-key-ln"></i><span class="l">Controla</span><span class="s">Controla</span></span><span class="m-key-i m-key-ctl part" title="Participa\xE7\xE3o sem controle"><i class="m-key-ln"></i><span class="l">Participa</span><span class="s">Participa</span></span>';function Ou(){let i=R.data.mapa,t=i.plates.map(()=>({n:0,listed:0,mc:0}));for(let e=0;e<R.N;e++){let n=R.nodes[e],s=t[i.plate[e]];n.t==="c"&&(s.n++,n.mc&&(s.listed++,s.mc+=n.mc))}return t}var jr=i=>Kr[i.c]?.[1]||i.c,W_=i=>Kr[i.c]?.[2]||i.c,xa=i=>Xi(i.c);function X_(){let i=Ou(),t=R.data.mapa.plates.map((e,n)=>n).sort((e,n)=>i[n].mc-i[e].mc);Ot("#m-legend").innerHTML=`<div class="m-lg-sec">${t.map(e=>{let n=R.data.mapa.plates[e];return`<button class="lg" type="button" data-plate="${e}"><i style="--c:${xa(n)}"></i><span>${oe(jr(n))}</span><small>${tn(i[e].n)}</small></button>`}).join("")}</div>`,Ot("#m-key").innerHTML=G_()}function Is(i){let t=i?`#${i}`:"";location.hash!==t&&history.replaceState(null,"",t||location.pathname+location.search)}function dp(){let i=decodeURIComponent(location.hash.replace(/^#/,"")),[t,e,n]=i.split("/"),s=r=>r?R.byId.has(r)?R.byId.get(r):r.startsWith("k")&&R.byK.has(r.slice(1))?R.byK.get(r.slice(1)):R.bySlug.has(r)?R.bySlug.get(r):R.byK.has(r)?R.byK.get(r):-1:-1;t==="n"&&s(e)>=0?Tn(s(e),{push:!1}):t==="s"&&R.bySlug.has(e)?Tn(R.bySlug.get(e),{push:!1}):t==="g"&&R.groups[+e]?Hc(+e,{push:!1}):t==="e"&&s(e)>=0?Ps(s(e),{push:!1}):t==="c"&&s(e)>=0&&s(n)>=0?Vc(s(e),s(n),{push:!1}):t==="setor"&&tp(e)>=0?pa(tp(e),{push:!1}):(t==="n"||t==="s"||t==="e")&&da("Essa entidade n\xE3o est\xE1 no mapa: ela n\xE3o tem participa\xE7\xE3o relevante em companhia aberta.")}var Hn={pool:[],used:new Map,layer:null,t:0},Oc=[],Qr=0;function $_(){let i=performance.now();if(i-Qr<300)return Oc;Qr=i,Oc=[];for(let t of document.querySelectorAll(".m-top > :not(.m-pop), #m-explore, #m-panel, .m-nav > *, #m-hud, #m-key, #m-mode, #m-hint")){if(t.hidden||t.offsetParent===null)continue;let e=t.getBoundingClientRect();e.width&&e.height&&Oc.push([e.left-6,e.top-6,e.right+6,e.bottom+6])}return Oc}var ua=null;function q_(){if(ua)return ua;ua=R.data.mapa.plates.map(()=>[]);for(let i of R.labelOrder)R.nodes[i].t==="c"&&ua[R.data.mapa.plate[i]].push(i);return ua}function Y_(){for(let[i,t]of Hn.used)t.classList.remove("on"),Hn.used.delete(i),Hn.pool.push(t)}function ip(i){let t=R.nodes[i];return st.rel&&st.rel.has(i)?[dn(t.n),st.rel.get(i)]:t.t==="c"?[dn(t.n),[t.tk,t.mc?Qe(t.mc).replace("R$ ","R$ ").toUpperCase():"capital fechado"].filter(Boolean).join(" \xB7 ")]:[dn(t.n),[ai(t),t.v?`\u2248 ${Qe(t.v)}`:""].filter(Boolean).join(" \xB7 ")]}var Bu=[];function Z_(){let i=Ou(),t=Ot("#m-plates");t.innerHTML="",R.data.mapa.plates.forEach((e,n)=>{let s=document.createElement("button");s.type="button",s.className="m-plate",s.dataset.plate=n,s.style.setProperty("--c",xa(e));let r=fn(i[n].n,"companhia","companhias");s.innerHTML=`<b><span class="full">${oe(jr(e))}</span><span class="short">${oe(W_(e))}</span></b><small>${r}${i[n].mc?` \xB7 ${Qe(i[n].mc)}`:""}</small>`,s.title=`Ver o setor ${jr(e)} inteiro`,t.appendChild(s),Bu[n]={el:s,p:e}})}var J_={};function K_(i){let t=Ct.pxPerUnit();Bu.forEach(({el:e},n)=>{let s=Ct.plates[n],r=Ct.projectPoint(s.x0+.9,Ct.PLATE_H+.1,s.z0+.7,J_),o=(s.x1-s.x0)*t,a=!!r.f&&o>46&&st.mode!=="tree";if(e.classList.toggle("on",a),e.classList.toggle("compact",o<210),e.classList.toggle("dim",st.sector>=0&&st.sector!==n),!a)return;e.style.transform=`translate3d(${r.x.toFixed(1)}px, ${r.y.toFixed(1)}px, 0)`,e.style.maxWidth=`${Math.max(60,o-18).toFixed(0)}px`;let l=e.getBoundingClientRect();l.width&&i.push([l.left-4,l.top-4,l.right+4,l.bottom+4])})}function j_(){if(!Ct||st.mode==="tree"){for(let u of Hn.used.values())u.classList.remove("on");for(let{el:u}of Bu)u.classList.remove("on");return}let i=innerWidth,t=innerHeight,e=[...$_()];K_(e);let n=(u,f,m,v)=>{if(u<8||f<8||m>i-8||v>t-8)return!1;for(let g of e)if(u<g[2]&&m>g[0]&&f<g[3]&&v>g[1])return!1;return!0},s=Ct.pxPerUnit(),r=an((s-6)/40,0,1),o=Math.round((nr?6:12)+r*(nr?26:60)),a=st.hl,l;if(a)l=[...a].sort((u,f)=>kc(f)-kc(u)).slice(0,60);else if(st.sector<0&&r<.5){let u=q_(),f=s*s,m=Ct.plates.map(v=>an(Math.round((v.x1-v.x0)*(v.z1-v.z0)*f/42e3),1,6));l=[];for(let v=0;v<6;v++)for(let g=0;g<u.length;g++)v<m[g]&&u[g][v]!=null&&l.push(u[g][v]);o=Math.max(o,nr?12:34)}else st.sector>=0?(l=R.labelOrder.filter(u=>R.data.mapa.plate[u]===st.sector&&R.nodes[u].t==="c"),o=Math.max(o,nr?12:28)):l=R.labelOrder.slice(0,260);let c=new Map,h={},d=0;for(let u of l){if(d>=o)break;if(c.has(u)||!Gn[u]&&!st.forceVis?.has(u))continue;let f=R.nodes[u],m=a&&a.has(u);if(!m&&f.t!=="c"&&!Ct.sky[u]&&r<.55||(Ct.project(u,h),!h.f))continue;let[v,g]=ip(u),p=f.t==="c"&&R.crank[u]<10,y=Math.max(v.length*(p?7.6:6.9),g.length*6.1)+14,E=30,_=null;for(let[b,S]of[["r",!1],["l",!1],["r",!0],["l",!0]]){let P=b==="r"?h.x+14:h.x-14-y,M=S?h.y+8:h.y-34;if(n(P,M,P+y,M+E)){_={side:b,below:S,x0:P,y0:M};break}}_&&(e.push([_.x0,_.y0,_.x0+y,_.y0+E],[h.x-4,h.y-4,h.x+4,h.y+4]),c.set(u,{x:h.x,y:h.y,side:_.side,below:_.below,a:1,hl:m,big:p}),d++)}for(let[u,f]of Hn.used)c.has(u)||(f.classList.remove("on"),Hn.used.delete(u),Hn.pool.push(f));for(let[u,f]of c){let m=Hn.used.get(u);if(m)!m.classList.contains("on")&&performance.now()-m._t>20&&m.classList.add("on");else{m=Hn.pool.pop()||Object.assign(document.createElement("div"),{className:"m-lab"}),m.parentNode||Hn.layer.appendChild(m);let[v,g]=ip(u);m.innerHTML=`<i class="m-lab-dot"></i><span class="m-lab-ln"></span><span class="m-lab-tx"><b>${oe(v)}</b><small>${oe(g)}</small></span>`,m.classList.toggle("rel",!!(st.rel&&st.rel.has(u))),m.classList.toggle("relc",!!(st.rel&&/^control/.test(st.rel.get(u)||""))),m.dataset.i=u,m.classList.remove("on"),m._t=performance.now(),Hn.used.set(u,m)}m.classList.toggle("l",f.side==="l"),m.classList.toggle("b",!!f.below),m.classList.toggle("hl",!!f.hl),m.classList.toggle("big",f.big),m.style.transform=`translate3d(${f.x.toFixed(1)}px, ${f.y.toFixed(1)}px, 0)`,m.style.setProperty("--a","1")}}function Cu(){let i=Ct.plateAt(innerWidth/2+Ct.view.offX,innerHeight/2+Ct.view.offY),t=i>=0?R.data.mapa.plates[i]:null,e=pp/Math.max(1,Ct.cam.d),n=e<1.45?"":`<span>ZOOM ${e.toFixed(1).replace(".",",")}\xD7</span>${t?`<span class="m-hud-sec" style="--c:${xa(t)}">${oe(jr(t).toUpperCase())}</span>`:""}`;n!==Cu.last&&(Ot("#m-hud").innerHTML=n,Cu.last=n)}var pp=160;function ma(i,t,e){let n=Ot("#m-tip");if(i<0||nr){n.hidden=!0;return}let s=R.nodes[i],r=[];if(s.t==="c"){r.push([s.tk||"Capital fechado",s.mc?Qe(s.mc):""]);let c=hp(i);c>=0&&r.push(["Controle",dn(R.nodes[c].n)])}else r.push([ai(s),s.v?`\u2248 ${Qe(s.v)}`:""]);let o=new Set([...R.out[i].map(c=>R.et[c]),...R.inc[i].map(c=>R.es[c])]).size;r.push(["Liga\xE7\xF5es",tn(o+R.brd[i].length)]),n.innerHTML=`<div class="m-tip-head"><i style="background:${Ti(s)}"></i><b>${oe(s.n)}</b></div>${r.map(([c,h])=>`<div class="row"><span>${oe(c)}</span><span>${oe(h)}</span></div>`).join("")}<div class="row muted"><span>${Ct.sky[i]?"Paira sobre o que possui \xB7 ":Ct.isGround[i]?"":"Na pra\xE7a da companhia \xB7 "}clique para ver as liga\xE7\xF5es</span></div>`,n.hidden=!1;let a=n.offsetWidth,l=n.offsetHeight;n.style.left=`${an(t+18,8,innerWidth-a-8)}px`,n.style.top=`${e+18+l>innerHeight-8?e-l-14:e+18}px`}function Un(){if(Qr=0,!Ct)return;let i=Ot("#m-explore"),t=Ot("#m-panel"),e=Ot("#m-key").getBoundingClientRect(),n=t&&!t.hidden,s=0,r=0,o=0,a=Ot(".m-top").getBoundingClientRect().bottom+6;innerWidth>760?(i&&!i.classList.contains("collapsed")&&i.offsetParent&&(s=i.getBoundingClientRect().right),r=n?innerWidth-t.offsetLeft:62,e.height&&(o=innerHeight-e.top+6)):n?o=t.offsetHeight:o=e.height?innerHeight-e.top+6:64,Ct.setInsets(s,r,st.mode==="tree"?0:a,o);let l=Ot("#m-mode"),c=l&&!l.hidden?Math.max(a,l.getBoundingClientRect().bottom+6):a;Wi?.setFree(s,r,o,c)}var mp=0,sp=0;function gp(i){mp=requestAnimationFrame(gp),!document.hidden&&(st.mode==="tree"?Wi.frame(i):(Ct.update(i),Ct.render(),i-sp>32&&(j_(),Cu(),sp=i)))}var Vi=new Map,ln=null,Cs=null,rp=0,Ru=0,Pu=null;function Q_(i){if(st.mode==="tree")return;if(i.currentTarget.setPointerCapture(i.pointerId),Vi.set(i.pointerId,{x:i.clientX,y:i.clientY}),st.lastInput=performance.now(),$i(),va(),Ct.touch(),Ct.cam.vx=Ct.cam.vz=0,Ct.cam.fly=null,Vi.size===2){let[e,n]=[...Vi.values()];Cs={d:Math.hypot(e.x-n.x,e.y-n.y),mx:(e.x+n.x)/2,my:(e.y+n.y)/2},ln=null;return}ln={x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,moved:!1,hist:[{x:i.clientX,y:i.clientY,t:performance.now()}]}}function ty(i){if(Vi.has(i.pointerId)&&Vi.set(i.pointerId,{x:i.clientX,y:i.clientY}),st.lastInput=performance.now(),Vi.size&&Ct?.touch(),st.mode!=="tree"){if(Cs&&Vi.size===2){let[t,e]=[...Vi.values()],n=Math.hypot(t.x-e.x,t.y-e.y),s=(t.x+e.x)/2,r=(t.y+e.y)/2;Ct.zoom(Cs.d/Math.max(1,n),s,r),Ct.pan(s-Cs.mx,r-Cs.my),Cs={d:n,mx:s,my:r};return}if(ln){let t=i.clientX-ln.x,e=i.clientY-ln.y;if(!ln.moved&&Math.hypot(i.clientX-ln.sx,i.clientY-ln.sy)>(nr?8:4)&&(ln.moved=!0,i.currentTarget.classList.add("dragging"),ma(-1)),ln.moved){Ct.pan(t,e),ln.x=i.clientX,ln.y=i.clientY;let n=performance.now();for(ln.hist.push({x:i.clientX,y:i.clientY,t:n});ln.hist.length>6||ln.hist.length>2&&n-ln.hist[0].t>100;)ln.hist.shift()}return}i.pointerType==="mouse"&&(Pu=[i.clientX,i.clientY],Ru||(Ru=requestAnimationFrame(Iu)))}}function Iu(){if(Ru=0,!Pu||st.mode==="tree")return;let[i,t]=Pu,e=Ct.pick(i,t,Gn),n=e<0?Ct.plateAt(i,t):-1;Ot("#map").classList.toggle("pointing",e>=0||n>=0),e!==st.hover&&(st.hover=e,clearTimeout(Iu.t),st.sel<0&&st.group<0&&!st.shape&&st.mode==="world"&&(Iu.t=setTimeout(()=>{if(!(st.sel>=0||st.group>=0||st.shape||st.mode!=="world"||st.hover!==e))if(e>=0){let r=Du(e);li(r.nodes,r.edges,r.brd,[e],.5,!1,Nu(e,r))}else li(null)},e>=0?140:90))),e>=0?ma(e,i,t):n>=0&&n!==st.sector?ey(n,i,t):ma(-1)}function ey(i,t,e){let n=Ot("#m-tip");if(nr){n.hidden=!0;return}let s=R.data.mapa.plates[i],r=Ou()[i];n.innerHTML=`<div class="m-tip-head"><i style="background:${xa(s)}"></i><b>${oe(jr(s))}</b></div><div class="row"><span>Companhias</span><span>${tn(r.n)}</span></div><div class="row"><span>Valor de mercado</span><span>${r.mc?Qe(r.mc):"\u2013"}</span></div><div class="row muted"><span>Clique para ver o setor inteiro</span></div>`,n.hidden=!1;let o=n.offsetWidth,a=n.offsetHeight;n.style.left=`${an(t+18,8,innerWidth-o-8)}px`,n.style.top=`${e+18+a>innerHeight-8?e-a-14:e+18}px`}function op(i){if(Vi.delete(i.pointerId),i.currentTarget.classList.remove("dragging"),Cs){Vi.size<2&&(Cs=null);return}if(!ln||st.mode==="tree"){ln=null;return}let t=ln;if(ln=null,t.moved){let o=t.hist;if(o.length>=2&&!Bc){let a=o[0],l=o[o.length-1],c=Math.max(16,l.t-a.t);performance.now()-l.t<80&&Ct.fling((l.x-a.x)/c,(l.y-a.y)/c)}return}let e=performance.now(),n=e-rp<320;rp=e;let s=Ct.pick(i.clientX,i.clientY,Gn);if(n&&s>=0){Ps(s);return}if(s>=0){Tn(s);return}if(n){Ct.zoom(.55,i.clientX,i.clientY);return}let r=Ct.plateAt(i.clientX,i.clientY);if(r>=0&&st.mode==="world"){(r!==st.sector||st.sel>=0||st.group>=0)&&pa(r);return}(st.sel>=0||st.group>=0||st.sector>=0||st.shape||st.mode==="path")&&(st.mode==="path"&&Hi(!1),Tn(-1))}function ny(i){if(i.preventDefault(),st.lastInput=performance.now(),$i(),va(),Ct.touch(),st.mode==="tree")return;let t=Math.exp(i.deltaY*(i.ctrlKey?.012:i.deltaMode===1?.05:.0018));Ct.zoom(t,i.clientX,i.clientY)}var Vn={on:!1,t0:0,raf:0};function iy(i){let t=Ot("#m-intro");if(!t)return;let e=R.nodes.filter(a=>a.t==="c"),n=e.reduce((a,l)=>a+(l.mc||0),0),s=R.nodes.length-e.length;Ot("#m-intro-cap").textContent=`${tn(e.length)} companhias \xB7 ${tn(s)} acionistas e conselheiros \xB7 ${tn(R.M)} participa\xE7\xF5es`;let r=Ot("#m-intro-num");t.hidden=!1,requestAnimationFrame(()=>t.classList.add("on")),Object.assign(Vn,{on:!0,done:0});let o=a=>{if(!Vn.on)return;let l=an(Ct.introK/.86,0,1),c=1-Math.pow(1-l,3);if(r.textContent=tn(n*c/1e12,2),Ct.introK>=1&&!Vn.done&&(Vn.done=a),Vn.done&&a-Vn.done>1800){va(!0);return}Vn.raf=requestAnimationFrame(o)};Vn.raf=requestAnimationFrame(o)}function va(i=!1){if(!Vn.on)return;Vn.on=!1,cancelAnimationFrame(Vn.raf);let t=Ot("#m-intro");t.classList.remove("on"),setTimeout(()=>{t.hidden=!0},900),i||Ct.skipIntro(),document.body.classList.remove("intro"),ir.get("mundo-hint",0)||(ga=setTimeout(()=>{st.sel<0&&st.mode==="world"&&(Ot("#m-hint").hidden=!1,Qr=0,ga=setTimeout($i,9e3))},1400))}var ga=0;function $i(){let i=Ot("#m-hint");i&&!i.hidden&&(i.hidden=!0,ir.set("mundo-hint",1),Qr=0),clearTimeout(ga)}function sy(i){let t=R.data.mapa,e=t.plates[i],n=[];for(let b=0;b<R.N;b++)t.plate[b]===i&&n.push(b);let s=(b,S)=>(R.nodes[S].mc||0)-(R.nodes[b].mc||0)||R.nodes[b].n.localeCompare(R.nodes[S].n),r=xa(e);Gi={};let o=n.filter(b=>R.nodes[b].t==="c").sort(s),a=o.filter(b=>R.nodes[b].mc),l=a.reduce((b,S)=>b+R.nodes[S].mc,0),c=new Map;for(let b of o){let S=R.nodes[b].st||"Outros";(c.get(S)||c.set(S,[]).get(S)).push(b)}let h=[...c.entries()].map(([b,S])=>[b,S,S.reduce((P,M)=>P+(R.nodes[M].mc||0),0)]).sort((b,S)=>S[2]-b[2]||S[1].length-b[1].length),d=h.map(([b,S,P],M)=>(Gi[`seg${M}`]=S.map(A=>Rs(A,R.nodes[A].mc?Qe(R.nodes[A].mc):"",[R.nodes[A].tk||"capital fechado",R.nodes[A].g!=null&&R.groups[R.nodes[A].g]?.nc>=2?`grupo ${R.groups[R.nodes[A].g].n}`:""].filter(Boolean).join(" \xB7 "),!1)),`<div class="m-seg"><h4><span>${oe(b)}</span><small>${fn(S.length,"companhia","companhias")}${P?` \xB7 ${Qe(P)}`:""}</small></h4>${Jr(Gi[`seg${M}`],5,`seg${M}`)}</div>`)).join(""),u=b=>b.m.filter(S=>R.nodes[S].t==="c"&&t.plate[S]===i).length,f=R.groups.filter(b=>b.nc>=2&&u(b)>0).slice(0,12),m=f.map(b=>{let S=u(b);return`<li data-group="${b.i}"><span class="m-dot" style="--c:${Xi(b.sector)}"></span><span class="nm">Grupo ${oe(b.n)}</span><span class="pc">${b.mc?Qe(b.mc):""}</span><small>${S===b.nc?fn(b.nc,"companhia","companhias"):`${S} de ${b.nc} companhias aqui`}${b.r.length?` \xB7 ${oe(b.r.slice(0,2).map(P=>dn(R.nodes[P].n)).join(", "))}`:""}</small></li>`}).join(""),v=new Map;for(let b of o)for(let S of R.inc[b]){let P=R.es[S];if(!Ct.isInv[P])continue;let M=v.get(P)||{n:0,v:0};M.n++,M.v+=Math.max(0,R.ep[S])/100*(R.nodes[b].mc||0),v.set(P,M)}let p=[...v.entries()].sort((b,S)=>S[1].n-b[1].n||S[1].v-b[1].v).slice(0,8).map(([b,S])=>Rs(b,S.v?`\u2248 ${Qe(S.v)}`:"",`${ai(R.nodes[b])} \xB7 em ${fn(S.n,"companhia","companhias")} do setor`,!1)).join(""),y=n.filter(b=>!Ct.sky[b]),E=y.filter(b=>R.nodes[b].t==="p").length,_=y.filter(b=>R.nodes[b].t==="j"||R.nodes[b].t==="s").length;Ot("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${r}"><i></i>Setor</div>
    <div class="m-head"><span class="m-badge" style="--c:${r}">${ki("cias")}</span><div><h2>${oe(jr(e))}</h2><p>${fn(o.length,"companhia","companhias")} \xB7 ${fn(h.length,"segmento","segmentos")} \xB7 ${fn(f.length,"grupo","grupos")}</p></div></div>
    <div class="m-stats"><div class="m-stat"><span>Valor de mercado</span><b>${oe(l?Qe(l):"\u2013")}</b></div><div class="m-stat"><span>Na bolsa</span><b>${tn(a.length)}</b></div><div class="m-stat"><span>Capital fechado</span><b>${tn(o.length-a.length)}</b></div></div>
    <p class="m-note m-sec-note">Nas pra\xE7as do bairro est\xE3o ${fn(E,"pessoa f\xEDsica","pessoas f\xEDsicas")} e ${fn(_,"holding ou empresa","holdings e empresas")} que s\xF3 t\xEAm participa\xE7\xE3o aqui.</p>
    <div class="m-sec"><h3>Companhias por segmento<small>valor de mercado</small></h3>${d}</div>
    ${m?`<div class="m-sec"><h3>Grupos econ\xF4micos<small>valor de mercado</small></h3><ul class="m-list">${m}</ul></div>`:""}
    ${p?`<div class="m-sec"><h3>Investidores mais presentes<small>companhias do setor</small></h3><ul class="m-list">${p}</ul></div>`:""}
    <p class="m-foot">Cada companhia fica no bairro do seu setor, com os donos de uma s\xF3 companhia na pra\xE7a dela; quem tem participa\xE7\xE3o em v\xE1rias paira acima da cidade. Segmento \xE9 o setor de atividade declarado \xE0 CVM.</p>`,Xc()}function ry(){let i=Ot("#map");addEventListener("resize",()=>{Ct.resize(innerWidth,innerHeight),Wi?.resize(innerWidth,innerHeight),Un()}),i.addEventListener("pointerdown",Q_),i.addEventListener("pointermove",ty),i.addEventListener("pointerup",op),i.addEventListener("pointercancel",op),i.addEventListener("pointerleave",()=>{ln||st.mode==="tree"||(ma(-1),st.hover>=0&&(st.hover=-1,st.sel<0&&st.group<0&&!st.shape&&st.mode==="world"&&li(null)))}),i.addEventListener("wheel",ny,{passive:!1}),Hn.layer.addEventListener("click",n=>{let s=n.target.closest(".m-lab");s&&st.mode!=="tree"&&Tn(+s.dataset.i)}),Hn.layer.addEventListener("dblclick",n=>{let s=n.target.closest(".m-lab");s&&Ps(+s.dataset.i)}),Ot("#m-plates").addEventListener("click",n=>{let s=n.target.closest("[data-plate]");s&&pa(+s.dataset.plate)});let t=n=>()=>{st.lastInput=performance.now(),st.mode==="tree"?Wi.zoom(n):Ct.zoom(n)};Ot("#m-zin").onclick=t(.7),Ot("#m-zout").onclick=t(1/.7),Ot("#m-zfit").onclick=()=>{st.mode==="tree"?Wi.fit():Ct.fitAll()},Ot("#m-layers-btn").onclick=n=>{n.stopPropagation();let s=Ot("#m-layers");s.hidden=!s.hidden,Ot("#m-layers-btn").setAttribute("aria-expanded",String(!s.hidden))},document.addEventListener("pointerdown",n=>{n.target.closest("#m-layers, #m-layers-btn")||(Ot("#m-layers").hidden=!0,Ot("#m-layers-btn").setAttribute("aria-expanded","false"))});for(let n of document.querySelectorAll("#m-layers [data-layer]"))n.checked=!!st.layers[n.dataset.layer],n.onchange=()=>{if(st.layers[n.dataset.layer]=n.checked,ir.set("mundo-layers",st.layers),lp(),st.sel>=0&&st.mode==="world"){let s=Du(st.sel);li(s.nodes,s.edges,s.brd,[st.sel],.75,!1,Nu(st.sel,s))}else if(st.shape){let s=st.shape;st.shape=null,ep(s)}Au()};let e=n=>{let s=n.target.closest("[data-plate]");s&&(Ot("#m-layers").hidden=!0,pa(+s.dataset.plate))};Ot("#m-legend").onclick=e,Ot("#m-key").onclick=n=>{let s=n.target.closest("[data-shape]");s&&ep(s.dataset.shape)},Ot("#m-explore-toggle").onclick=()=>{let n=Ot("#m-explore");n.classList.toggle("collapsed"),Ot("#m-explore-toggle").setAttribute("aria-expanded",String(!n.classList.contains("collapsed"))),ir.set("mundo-explore",!n.classList.contains("collapsed")),Un()},Ot(".m-tabs").onclick=n=>{let s=n.target.closest("[data-tab]");if(s){Eu=s.dataset.tab;for(let r of document.querySelectorAll(".m-tabs [data-tab]"))r.setAttribute("aria-checked",String(r===s));Au(),Ot("#m-rank").scrollTop=0}},Ot(".m-grab").onclick=()=>{Ot("#m-panel").classList.toggle("peek"),setTimeout(Un,420)},Ot("#m-panel-close").onclick=()=>{st.mode!=="world"&&Hi(!1),Tn(-1)},Ot("#m-mode-close").onclick=()=>{let n=st.sel;Hi(!1),n>=0?Tn(n):Tn(-1)},document.addEventListener("click",n=>{let s=n.target.closest("[data-more]");if(s){let c=s.dataset.more;s.closest("ul").innerHTML=Gi[c].join("");return}let r=n.target.closest("[data-go]");if(r&&(r.closest("#m-panel")||r.closest("#m-explore"))){let c=+r.dataset.go;if(st.mode==="tree"){Ps(c);return}Tn(c);return}let o=n.target.closest("[data-sel]");if(o){Hi(!1),Tn(+o.dataset.sel);return}let a=n.target.closest("[data-group]");if(a&&(a.closest("#m-panel")||a.closest("#m-explore"))){Hc(+a.dataset.group),innerWidth<=760&&(Ot("#m-explore").classList.add("collapsed"),Un());return}let l=n.target.closest("[data-act]");if(l){let c=l.dataset.node!=null?+l.dataset.node:st.sel;if(l.dataset.act==="tree"&&c>=0&&Ps(c),l.dataset.act==="world"){let h=st.sel;Hi(!1),h>=0&&Tn(h)}l.dataset.act==="path"&&c>=0&&oy(c)}}),document.addEventListener("keydown",n=>{if(!n.target.matches("input[type=search], input[type=text], textarea")){if(n.key==="/"||(n.metaKey||n.ctrlKey)&&n.key.toLowerCase()==="k")n.preventDefault(),Ot("#m-q").focus();else if(n.key==="Escape"&&Vn.on)va();else if(n.key==="Escape")if(st.mode!=="world"){let s=st.sel;Hi(!1),s>=0?Tn(s):Tn(-1)}else Tn(-1);else if(n.key==="+"||n.key==="=")Ot("#m-zin").click();else if(n.key==="-")Ot("#m-zout").click();else if(n.key==="0")Ot("#m-zfit").click();else if(st.mode==="world"&&n.key.startsWith("Arrow")){st.lastInput=performance.now();let s=80;Ct.pan(n.key==="ArrowLeft"?s:n.key==="ArrowRight"?-s:0,n.key==="ArrowUp"?s:n.key==="ArrowDown"?-s:0)}}}),fp(Ot("#m-q"),Ot("#m-results"),n=>{n.g!=null?Hc(n.g):st.mode==="tree"?Ps(n.i):Tn(n.i)}),addEventListener("hashchange",()=>dp())}function oy(i){let t=Ot("#m-pick-slot");t.innerHTML=`<div class="m-pick"><div class="m-search" role="combobox" aria-expanded="false"><svg class="ic"><use href="#i-path"/></svg>
    <input id="m-pick-q" type="search" placeholder="Com quem? Empresa, pessoa ou investidor" autocomplete="off" aria-label="Conectar com"><ul id="m-pick-res" class="m-results" role="listbox" hidden></ul></div></div>`;let e=Ot("#m-pick-q");fp(e,Ot("#m-pick-res"),n=>{n.g!=null?Vc(i,R.groups[n.g].h):Vc(i,n.i)}),e.focus()}async function ay(){Hn.layer=Ot("#m-labels"),(innerWidth<=760||ir.get("mundo-explore",!1)===!1)&&Ot("#m-explore").classList.add("collapsed");let i;try{i=await fetch("data/cias/mundo.json",{cache:"no-cache"}).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}catch{Ot("#m-empty").hidden=!1,Ot("#m-empty").textContent="O mapa ainda n\xE3o foi montado. Ele \xE9 refeito a cada atualiza\xE7\xE3o do portal; tente de novo em alguns minutos.",document.body.classList.remove("loading");return}let t=s=>s&&s.v===wu&&s.x&&s.x.length===i.nodes.length;innerHeight>innerWidth*1.15?i.mapa=t(i.mapaV)?i.mapaV:Tu(i,{aspect:Qd}):t(i.mapa)||(i.mapa=Tu(i)),delete i.mapaV,I_(i);try{Ct=Jd(Ot("#map"),i,{palette:P_,accent:zc,reduced:Bc,fixedQuality:/[?&]hq\b/.test(location.search)})}catch(s){console.error(s),Ot("#m-empty").hidden=!1,Ot("#m-empty").textContent="Este navegador n\xE3o conseguiu abrir o Mundo em 3D (WebGL desligado ou indispon\xEDvel). Tente em outro navegador ou atualize o sistema.",document.body.classList.remove("loading");return}i.mapa.plates.forEach((s,r)=>{s.j=r}),Wi=Kd(Ct.renderer,{W:R,colorOf:Ti,sectorColor:Xi,kindLabel:ai,shortName:dn,brl:Qe,pct:oi,accent:zc,onPick:(s,r)=>{r?Ps(s):(st.sel=s,Fu(s))},onExt:s=>da(`${s.n}: controlada de capital fechado (${oi(s.pct)})`),canvas:Ot("#map")}),Ct.resize(innerWidth,innerHeight),Wi.resize(innerWidth,innerHeight),lp();let n=i.stats||{};Ot("#m-sub").textContent=`${tn(n.cias||0)} companhias \xB7 ${tn(n.grupos||0)} grupos \xB7 ${tn((n.acionistas||0)+(n.pessoas_conselho||0))} acionistas e conselheiros`,X_(),Z_(),Au(),ry(),Un(),Ct.setOffset(Ct.view.toX,Ct.view.toY,!0),document.fonts?.ready.then(()=>Un()),document.body.classList.remove("loading"),Ct.warmup(),Ct.fitAll(0),Ct.cam.x=Ct.cam.tx,Ct.cam.z=Ct.cam.tz,Ct.cam.d=Ct.cam.td,Ct.cam.fly=null,pp=Ct.cam.td,!location.hash&&!Bc&&(document.body.classList.add("intro"),Ct.intro(5600),iy(5600)),mp=requestAnimationFrame(gp),dp(),!ir.get("mundo-hint",0)&&!location.hash&&!Vn.on&&(ga=setTimeout(()=>{st.sel<0&&st.mode==="world"&&(Ot("#m-hint").hidden=!1,Qr=0,ga=setTimeout($i,9e3))},2500)),/[?&]debug\b/.test(location.search)&&(window.__mundo={ui:st,W:R,map:Ct,tree:Wi,select:Tn,openTree:Ps,showPath:Vc,selectGroup:Hc,focusSector:pa})}ay();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
