/* Portal FPM — Mundo das companhias. Gerado de src/mundo (npm run build); não edite à mão. Inclui three.js (MIT). */
var Of=0,Vh=1,Bf=2;var js=1,zf=2,Br=3,Ss=0,An=1,Bi=2,ei=0,zr=1,ws=2,Gh=3,Wh=4,kf=5;var Qs=100,Hf=101,Vf=102,Gf=103,Wf=104,Xf=200,$f=201,qf=202,Yf=203,Xh=204,$h=205,Zf=206,Jf=207,Kf=208,jf=209,Qf=210,td=211,ed=212,nd=213,id=214,el=0,nl=1,il=2,wr=3,sl=4,rl=5,ol=6,al=7,kl=0,sd=1,rd=2,yi=0,qo=1,Yo=2,Zo=3,Jo=4,Ko=5,jo=6,tr=7;var qh=300,Ts=301,er=302,Hl=303,Vl=304,Qo=306,ll=1e3,Ii=1001,cl=1002,Mn=1003,od=1004;var ta=1005;var En=1006,Gl=1007;var ni=1008;var kn=1009,Yh=1010,Zh=1011,kr=1012,Wl=1013,Mi=1014,ii=1015,xn=1016,Xl=1017,$l=1018,Hr=1020,Jh=35902,Kh=35899,jh=1021,Qh=1022,si=1023,Li=1026,Es=1027,ql=1028,Yl=1029,As=1030,Zl=1031;var Jl=1033,ea=33776,na=33777,ia=33778,sa=33779,Kl=35840,jl=35841,Ql=35842,tc=35843,ec=36196,nc=37492,ic=37496,sc=37488,rc=37489,ra=37490,oc=37491,ac=37808,lc=37809,cc=37810,hc=37811,uc=37812,fc=37813,dc=37814,pc=37815,mc=37816,gc=37817,xc=37818,vc=37819,_c=37820,yc=37821,Mc=36492,bc=36494,Sc=36495,wc=36283,Tc=36284,oa=36285,Ec=36286;var vo=2300,hl=2301,Qa=2302,Ch=2303,Rh=2400,Ph=2401,Ih=2402;var ad=3200,Ac=3201;var aa=0,ld=1,rs="",Tn="srgb",_o="srgb-linear",yo="linear",Ne="srgb";var tl=7680;var cd=519,hd=512,ud=513,fd=514,Cc=515,dd=516,pd=517,Rc=518,md=519,gd=35044;var tu="300 es",gi=2e3,Tr=2001;function zp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function kp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xd(){let i=Mo("canvas");return i.style.display="block",i}var Qu={},Er=null;function eu(...i){let t="THREE."+i.shift();Er?Er("log",t,...i):console.log(t,...i)}function vd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ce(...i){i=vd(i);let t="THREE."+i.shift();if(Er)Er("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function me(...i){i=vd(i);let t="THREE."+i.shift();if(Er)Er("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Hs(...i){let t=i.join(" ");t in Qu||(Qu[t]=!0,ce(...i))}function _d(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var yd={[el]:nl,[il]:ol,[sl]:al,[wr]:rl,[nl]:el,[ol]:il,[al]:sl,[rl]:wr},Di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var eh=Math.PI/180,ul=180/Math.PI;function Vr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[e&63|128]+Rn[e>>8&255]+"-"+Rn[e>>16&255]+Rn[e>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Hp(i,t){return(i%t+t)%t}function nh(i,t,e){return(1-e)*i+e*t}function oo(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var au=class au{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};au.prototype.isVector2=!0;var Pt=au,qn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],y=r[o+3];if(d!==y||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*y;g<0&&(u=-u,f=-f,m=-m,y=-y,g=-g);let p=1-a;if(g<.9995){let M=Math.acos(g),E=Math.sin(M);p=Math.sin(p*M)/E,a=Math.sin(a*M)/E,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+y*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+y*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lu=class lu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ih.copy(this).projectOnVector(t),this.sub(ih)}reflect(t){return this.sub(ih.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lu.prototype.isVector3=!0;var N=lu,ih=new N,tf=new qn,cu=class cu{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],y=s[0],g=s[3],p=s[6],M=s[1],E=s[4],_=s[7],b=s[2],S=s[5],I=s[8];return r[0]=o*y+a*M+l*b,r[3]=o*g+a*E+l*S,r[6]=o*p+a*_+l*I,r[1]=c*y+h*M+d*b,r[4]=c*g+h*E+d*S,r[7]=c*p+h*_+d*I,r[2]=u*y+f*M+m*b,r[5]=u*g+f*E+m*S,r[8]=u*p+f*_+m*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sh.makeScale(t,e)),this}rotate(t){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sh.makeRotation(-t)),this}translate(t,e){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};cu.prototype.isMatrix3=!0;var xe=cu,sh=new xe,ef=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nf=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vp(){let i={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ne&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ne&&(s.r=br(s.r),s.g=br(s.g),s.b=br(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===rs?yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_o]:{primaries:t,whitePoint:n,transfer:yo,toXYZ:ef,fromXYZ:nf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:t,whitePoint:n,transfer:Ne,toXYZ:ef,fromXYZ:nf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),i}var we=Vp();function ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var lr,fl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{lr===void 0&&(lr=Mo("canvas")),lr.width=t.width,lr.height=t.height;let s=lr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=lr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ts(e[n]/255)*255):e[n]=ts(e[n]);return{data:e,width:t.width,height:t.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gp=0,Ar=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Vr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rh(s[o].image)):r.push(rh(s[o]))}else r=rh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function rh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}var Wp=0,oh=new N,Fn=class i extends Di{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ii,s=Ii,r=En,o=ni,a=si,l=kn,c=i.DEFAULT_ANISOTROPY,h=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Vr(),this.name="",this.source=new Ar(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oh).x}get height(){return this.source.getSize(oh).y}get depth(){return this.source.getSize(oh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ce(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ce(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ll:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ll:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=qh;Fn.DEFAULT_ANISOTROPY=1;var hu=class hu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,_=(f+1)/2,b=(p+1)/2,S=(h+u)/4,I=(d+y)/4,x=(m+g)/4;return E>_&&E>b?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=S/n,r=I/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=I/r,s=x/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this.w=Te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this.w=Te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hu.prototype.isVector4=!0;var Ve=hu,dl=class extends Di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Fn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ar(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},bo=class extends Fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pl=class extends Fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var zl=class zl{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,y,g)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/cr.setFromMatrixColumn(t,0).length(),r=1/cr.setFromMatrixColumn(t,1).length(),o=1/cr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,y=c*d;e[0]=u+y*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,y=c*d;e[0]=u-y*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,y=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,y=a*c;e[0]=l*h,e[4]=y-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-y*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xp,t,$p)}lookAt(t,e,n){let s=this.elements;return Xn.subVectors(t,e),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),us.crossVectors(n,Xn),us.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),us.crossVectors(n,Xn)),us.normalize(),Aa.crossVectors(Xn,us),s[0]=us.x,s[4]=Aa.x,s[8]=Xn.x,s[1]=us.y,s[5]=Aa.y,s[9]=Xn.y,s[2]=us.z,s[6]=Aa.z,s[10]=Xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],y=n[6],g=n[10],p=n[14],M=n[3],E=n[7],_=n[11],b=n[15],S=s[0],I=s[4],x=s[8],A=s[12],U=s[1],W=s[5],O=s[9],Z=s[13],z=s[2],K=s[6],j=s[10],lt=s[14],ht=s[3],ot=s[7],ut=s[11],vt=s[15];return r[0]=o*S+a*U+l*z+c*ht,r[4]=o*I+a*W+l*K+c*ot,r[8]=o*x+a*O+l*j+c*ut,r[12]=o*A+a*Z+l*lt+c*vt,r[1]=h*S+d*U+u*z+f*ht,r[5]=h*I+d*W+u*K+f*ot,r[9]=h*x+d*O+u*j+f*ut,r[13]=h*A+d*Z+u*lt+f*vt,r[2]=m*S+y*U+g*z+p*ht,r[6]=m*I+y*W+g*K+p*ot,r[10]=m*x+y*O+g*j+p*ut,r[14]=m*A+y*Z+g*lt+p*vt,r[3]=M*S+E*U+_*z+b*ht,r[7]=M*I+E*W+_*K+b*ot,r[11]=M*x+E*O+_*j+b*ut,r[15]=M*A+E*Z+_*lt+b*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],y=t[7],g=t[11],p=t[15],M=l*f-c*u,E=a*f-c*d,_=a*u-l*d,b=o*f-c*h,S=o*u-l*h,I=o*d-a*h;return e*(y*M-g*E+p*_)-n*(m*M-g*b+p*S)+s*(m*E-y*b+p*I)-r*(m*_-y*S+g*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],y=t[13],g=t[14],p=t[15],M=e*a-n*o,E=e*l-s*o,_=e*c-r*o,b=n*l-s*a,S=n*c-r*a,I=s*c-r*l,x=h*y-d*m,A=h*g-u*m,U=h*p-f*m,W=d*g-u*y,O=d*p-f*y,Z=u*p-f*g,z=M*Z-E*O+_*W+b*U-S*A+I*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/z;return t[0]=(a*Z-l*O+c*W)*K,t[1]=(s*O-n*Z-r*W)*K,t[2]=(y*I-g*S+p*b)*K,t[3]=(u*S-d*I-f*b)*K,t[4]=(l*U-o*Z-c*A)*K,t[5]=(e*Z-s*U+r*A)*K,t[6]=(g*_-m*I-p*E)*K,t[7]=(h*I-u*_+f*E)*K,t[8]=(o*O-a*U+c*x)*K,t[9]=(n*U-e*O-r*x)*K,t[10]=(m*S-y*_+p*M)*K,t[11]=(d*_-h*S-f*M)*K,t[12]=(a*A-o*W-l*x)*K,t[13]=(e*W-n*A+s*x)*K,t[14]=(y*E-m*b-g*M)*K,t[15]=(h*b-d*E+u*M)*K,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,y=o*h,g=o*d,p=a*d,M=l*c,E=l*h,_=l*d,b=n.x,S=n.y,I=n.z;return s[0]=(1-(y+p))*b,s[1]=(f+_)*b,s[2]=(m-E)*b,s[3]=0,s[4]=(f-_)*S,s[5]=(1-(u+p))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(m+E)*I,s[9]=(g-M)*I,s[10]=(1-(u+y))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=cr.set(s[0],s[1],s[2]).length(),a=cr.set(s[4],s[5],s[6]).length(),l=cr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),fi.copy(this);let c=1/o,h=1/a,d=1/l;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=h,fi.elements[5]*=h,fi.elements[6]*=h,fi.elements[8]*=d,fi.elements[9]*=d,fi.elements[10]*=d,e.setFromRotationMatrix(fi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=gi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,y;if(l)m=r/(o-r),y=o*r/(o-r);else if(a===gi)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Tr)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=gi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),m,y;if(l)m=1/(o-r),y=o/(o-r);else if(a===gi)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===Tr)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};zl.prototype.isMatrix4=!0;var Le=zl,cr=new N,fi=new Le,Xp=new N(0,0,0),$p=new N(1,1,1),us=new N,Aa=new N,Xn=new N,sf=new Le,rf=new qn,Yn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rf.setFromEuler(this),this.setFromQuaternion(rf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qp=0,of=new N,hr=new qn,Zi=new Le,Ca=new N,ao=new N,Yp=new N,Zp=new qn,af=new N(1,0,0),lf=new N(0,1,0),cf=new N(0,0,1),hf={type:"added"},Jp={type:"removed"},ur={type:"childadded",child:null},ah={type:"childremoved",child:null},hn=class i extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new Yn,n=new qn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new xe}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(af,t)}rotateY(t){return this.rotateOnAxis(lf,t)}rotateZ(t){return this.rotateOnAxis(cf,t)}translateOnAxis(t,e){return of.copy(t).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(af,t)}translateY(t){return this.translateOnAxis(lf,t)}translateZ(t){return this.translateOnAxis(cf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ca.copy(t):Ca.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(ao,Ca,this.up):Zi.lookAt(Ca,ao,this.up),this.quaternion.setFromRotationMatrix(Zi),s&&(Zi.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Zi),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hf),ur.child=t,this.dispatchEvent(ur),ur.child=null):me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jp),ah.child=t,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hf),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,t,Yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,Zp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hn.DEFAULT_UP=new N(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kp={type:"move"},Rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function lh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ne=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=we.workingColorSpace){if(t=Hp(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=lh(o,r,t+1/3),this.g=lh(o,r,t),this.b=lh(o,r,t-1/3)}return we.colorSpaceToWorking(this,s),this}setStyle(t,e=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&ce("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ce("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ce("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Tn){let n=Md[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ce("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return we.workingToColorSpace(Pn.copy(this),t),Math.round(Te(Pn.r*255,0,255))*65536+Math.round(Te(Pn.g*255,0,255))*256+Math.round(Te(Pn.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.workingToColorSpace(Pn.copy(this),e);let n=Pn.r,s=Pn.g,r=Pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.workingToColorSpace(Pn.copy(this),e),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Tn){we.workingToColorSpace(Pn.copy(this),t);let e=Pn.r,n=Pn.g,s=Pn.b;return t!==Tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fs),this.setHSL(fs.h+t,fs.s+e,fs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fs),t.getHSL(Ra);let n=nh(fs.h,Ra.h,e),s=nh(fs.s,Ra.s,e),r=nh(fs.l,Ra.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new ne;ne.NAMES=Md;var Vs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ne(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},es=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},di=new N,Ji=new N,ch=new N,Ki=new N,fr=new N,dr=new N,uf=new N,hh=new N,uh=new N,fh=new N,dh=new Ve,ph=new Ve,mh=new Ve,gs=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),di.subVectors(t,e),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){di.subVectors(s,e),Ji.subVectors(n,e),ch.subVectors(t,e);let o=di.dot(di),a=di.dot(Ji),l=di.dot(ch),c=Ji.dot(Ji),h=Ji.dot(ch),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ki.x),l.addScaledVector(o,Ki.y),l.addScaledVector(a,Ki.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(t,e),ph.fromBufferAttribute(t,n),mh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(dh,r.x),o.addScaledVector(ph,r.y),o.addScaledVector(mh,r.z),o}static isFrontFacing(t,e,n,s){return di.subVectors(n,e),Ji.subVectors(t,e),di.cross(Ji).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),di.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;fr.subVectors(s,n),dr.subVectors(r,n),hh.subVectors(t,n);let l=fr.dot(hh),c=dr.dot(hh);if(l<=0&&c<=0)return e.copy(n);uh.subVectors(t,s);let h=fr.dot(uh),d=dr.dot(uh);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(fr,o);fh.subVectors(t,r);let f=fr.dot(fh),m=dr.dot(fh);if(m>=0&&f<=m)return e.copy(r);let y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(dr,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return uf.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(uf,a);let p=1/(g+y+u);return o=y*p,a=u*p,e.copy(n).addScaledVector(fr,o).addScaledVector(dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ni=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox)),Pa.applyMatrix4(t.matrixWorld),this.union(Pa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lo),Ia.subVectors(this.max,lo),pr.subVectors(t.a,lo),mr.subVectors(t.b,lo),gr.subVectors(t.c,lo),ds.subVectors(mr,pr),ps.subVectors(gr,mr),Os.subVectors(pr,gr);let e=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-Os.z,Os.y,ds.z,0,-ds.x,ps.z,0,-ps.x,Os.z,0,-Os.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-Os.y,Os.x,0];return!gh(e,pr,mr,gr,Ia)||(e=[1,0,0,0,1,0,0,0,1],!gh(e,pr,mr,gr,Ia))?!1:(La.crossVectors(ds,ps),e=[La.x,La.y,La.z],gh(e,pr,mr,gr,Ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ji=[new N,new N,new N,new N,new N,new N,new N,new N],pi=new N,Pa=new Ni,pr=new N,mr=new N,gr=new N,ds=new N,ps=new N,Os=new N,lo=new N,Ia=new N,La=new N,Bs=new N;function gh(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bs.fromArray(i,r);let a=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),l=t.dot(Bs),c=e.dot(Bs),h=n.dot(Bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var cn=new N,Da=new Pt,jp=0,ye=class extends Di{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gd,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Da.fromBufferAttribute(this,e),Da.applyMatrix3(t),this.setXY(e,Da.x,Da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix3(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=oo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=zn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oo(e,this.array)),e}setX(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oo(e,this.array)),e}setY(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oo(e,this.array)),e}setW(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=zn(e,this.array),n=zn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=zn(e,this.array),n=zn(n,this.array),s=zn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=zn(e,this.array),n=zn(n,this.array),s=zn(s,this.array),r=zn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var So=class extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wo=class extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ve=class extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qp=new Ni,co=new N,xh=new N,Ui=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;co.subVectors(t,this.center);let e=co.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(co,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(co.copy(t.center).add(xh)),this.expandByPoint(co.copy(t.center).sub(xh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},tm=0,Qn=new Le,vh=new hn,xr=new N,$n=new Ni,ho=new Ni,yn=new N,Ue=class i extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zp(t)?wo:So)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new xe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,n){return Qn.makeTranslation(t,e,n),this.applyMatrix4(Qn),this}scale(t,e,n){return Qn.makeScale(t,e,n),this.applyMatrix4(Qn),this}lookAt(t){return vh.lookAt(t),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ve(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if($n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors($n.min,ho.min),$n.expandByPoint(yn),yn.addVectors($n.max,ho.max),$n.expandByPoint(yn)):($n.expandByPoint(ho.min),$n.expandByPoint(ho.max))}$n.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)yn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(yn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)yn.fromBufferAttribute(a,c),l&&(xr.fromBufferAttribute(t,c),yn.add(xr)),s=Math.max(s,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new N,l[x]=new N;let c=new N,h=new N,d=new N,u=new Pt,f=new Pt,m=new Pt,y=new N,g=new N;function p(x,A,U){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,U),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,U),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let W=1/(f.x*m.y-m.x*f.y);isFinite(W)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(W),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(W),a[x].add(y),a[A].add(y),a[U].add(y),l[x].add(g),l[A].add(g),l[U].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,A=M.length;x<A;++x){let U=M[x],W=U.start,O=U.count;for(let Z=W,z=W+O;Z<z;Z+=3)p(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let E=new N,_=new N,b=new N,S=new N;function I(x){b.fromBufferAttribute(s,x),S.copy(b);let A=a[x];E.copy(A),E.sub(b.multiplyScalar(b.dot(A))).normalize(),_.crossVectors(S,A);let W=_.dot(l[x])<0?-1:1;o.setXYZW(x,E.x,E.y,E.z,W)}for(let x=0,A=M.length;x<A;++x){let U=M[x],W=U.start,O=U.count;for(let Z=W,z=W+O;Z<z;Z+=3)I(t.getX(Z+0)),I(t.getX(Z+1)),I(t.getX(Z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)yn.fromBufferAttribute(t,e),yn.normalize(),t.setXYZ(e,yn.x,yn.y,yn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new ye(u,h,d)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var _h=new N,em=new N,nm=new xe,mi=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=_h.subVectors(n,e).cross(em.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(_h),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||nm.getNormalMatrix(t),s=this.coplanarPoint(_h).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},im=0,vi=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=zr,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=$h,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tl,this.stencilZFail=tl,this.stencilZPass=tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ce(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ce(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new mi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Qi=new N,yh=new N,Na=new N,Ua=new N,Gs=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,e),Qi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yh.copy(t).add(e).multiplyScalar(.5),Na.copy(e).sub(t).normalize(),Ua.copy(this.origin).sub(yh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Na),a=Ua.dot(this.direction),l=-Ua.dot(Na),c=Ua.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(yh).addScaledVector(Na,u),f}intersectSphere(t,e){if(t.radius<0)return null;Qi.subVectors(t.center,this.origin);let n=Qi.dot(this.direction),s=Qi.dot(Qi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,y=e.y-o.y,g=e.z-o.z,p=n.x-o.x,M=n.y-o.y,E=n.z-o.z,_=Math.abs(l),b=Math.abs(c),S=Math.abs(h),I,x,A,U,W,O,Z,z,K,j,lt,ht;if(_>=b&&_>=S?(A=l,O=d,K=m,ht=p,l>=0?(I=c,x=h,U=u,W=f,Z=y,z=g,j=M,lt=E):(I=h,x=c,U=f,W=u,Z=g,z=y,j=E,lt=M)):b>=S?(A=c,O=u,K=y,ht=M,c>=0?(I=h,x=l,U=f,W=d,Z=g,z=m,j=E,lt=p):(I=l,x=h,U=d,W=f,Z=m,z=g,j=p,lt=E)):(A=h,O=f,K=g,ht=E,h>=0?(I=l,x=c,U=d,W=u,Z=m,z=y,j=p,lt=M):(I=c,x=l,U=u,W=d,Z=y,z=m,j=M,lt=p)),A===0)return null;let ot=I/A,ut=x/A,vt=1/A,bt=U-ot*O,mt=W-ut*O,ge=Z-ot*K,le=z-ut*K,Se=j-ot*ht,ft=lt-ut*ht,xt=Se*le-ft*ge,Ot=bt*ft-mt*Se,F=ge*mt-le*bt;if(s){if(xt<0||Ot<0||F<0)return null}else if((xt<0||Ot<0||F<0)&&(xt>0||Ot>0||F>0))return null;let dt=xt+Ot+F;if(dt===0)return null;let Rt=vt*(xt*O+Ot*K+F*ht);return(dt>0?Rt<0:Rt>0)?null:this.at(Rt/dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_i=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ff=new Le,zs=new Gs,Fa=new Ui,df=new N,Oa=new N,Ba=new N,za=new N,Mh=new N,ka=new N,pf=new N,Ha=new N,Ee=class extends hn{constructor(t=new Ue,e=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Mh.fromBufferAttribute(d,t),o?ka.addScaledVector(Mh,h):ka.addScaledVector(Mh.sub(e),h))}e.add(ka)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),zs.copy(t.ray).recast(t.near),!(Fa.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Fa,df)===null||zs.origin.distanceToSquared(df)>(t.far-t.near)**2))&&(ff.copy(r).invert(),zs.copy(t.ray).applyMatrix4(ff),!(n.boundingBox!==null&&zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,b=E;_<b;_+=3){let S=a.getX(_),I=a.getX(_+1),x=a.getX(_+2);s=Va(this,p,t,n,c,h,d,S,I,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let M=a.getX(g),E=a.getX(g+1),_=a.getX(g+2);s=Va(this,o,t,n,c,h,d,M,E,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,b=E;_<b;_+=3){let S=_,I=_+1,x=_+2;s=Va(this,p,t,n,c,h,d,S,I,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let M=g,E=g+1,_=g+2;s=Va(this,o,t,n,c,h,d,M,E,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function sm(i,t,e,n,s,r,o,a){let l;if(t.side===An?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ss,a),l===null)return null;Ha.copy(a),Ha.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ha);return c<e.near||c>e.far?null:{distance:c,point:Ha.clone(),object:i}}function Va(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Oa),i.getVertexPosition(l,Ba),i.getVertexPosition(c,za);let h=sm(i,t,e,n,Oa,Ba,za,pf);if(h){let d=new N;gs.getBarycoord(pf,Oa,Ba,za,d),s&&(h.uv=gs.getInterpolatedAttribute(s,a,l,c,d,new Pt)),r&&(h.uv1=gs.getInterpolatedAttribute(r,a,l,c,d,new Pt)),o&&(h.normal=gs.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new N,materialIndex:0};gs.getNormal(Oa,Ba,za,u.normal),h.face=u,h.barycoord=d}return h}var To=class extends Fn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Mn,h=Mn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fi=class extends ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vr=new Le,mf=new Le,Ga=[],gf=new Ni,rm=new Le,uo=new Ee,fo=new Ui,ns=class extends Ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vr),gf.copy(t.boundingBox).applyMatrix4(vr),this.boundingBox.union(gf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vr),fo.copy(t.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(fo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(uo.geometry=this.geometry,uo.material=this.material,uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(n),t.ray.intersectsSphere(fo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vr),mf.multiplyMatrices(n,vr),uo.matrixWorld=mf,uo.raycast(t,Ga);for(let o=0,a=Ga.length;o<a;o++){let l=Ga[o];l.instanceId=r,l.object=this,e.push(l)}Ga.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new To(new Float32Array(s*this.count),s,this.count,ql,ii));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ks=new Ui,om=new Pt(.5,.5),Wa=new N,Pr=class{constructor(t=new mi,e=new mi,n=new mi,s=new mi,r=new mi,o=new mi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],y=r[9],g=r[10],p=r[11],M=r[12],E=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,f-h,p-m,b-M).normalize(),s[1].setComponents(c+o,f+h,p+m,b+M).normalize(),s[2].setComponents(c+a,f+d,p+y,b+E).normalize(),s[3].setComponents(c-a,f-d,p-y,b-E).normalize(),n)s[4].setComponents(l,u,g,_).normalize(),s[5].setComponents(c-l,f-u,p-g,b-_).normalize();else if(s[4].setComponents(c-l,f-u,p-g,b-_).normalize(),e===gi)s[5].setComponents(c+l,f+u,p+g,b+_).normalize();else if(e===Tr)s[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(t){ks.center.set(0,0,0);let e=om.distanceTo(t.center);return ks.radius=.7071067811865476+e,ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Wa.x=s.normal.x>0?t.max.x:t.min.x,Wa.y=s.normal.y>0?t.max.y:t.min.y,Wa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ml=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},gl=new N,xl=new N,xf=new Le,po=new Gs,Xa=new Ui,bh=new N,vf=new N,vl=class extends hn{constructor(t=new Ue,e=new ml){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)gl.fromBufferAttribute(e,s-1),xl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=gl.distanceTo(xl);t.setAttribute("lineDistance",new ve(n,1))}else ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,t.ray.intersectsSphere(Xa)===!1)return;xf.copy(s).invert(),po.copy(t.ray).applyMatrix4(xf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=c){let p=h.getX(y),M=h.getX(y+1),E=$a(this,t,po,l,p,M,y);E&&e.push(E)}if(this.isLineLoop){let y=h.getX(m-1),g=h.getX(f),p=$a(this,t,po,l,y,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=c){let p=$a(this,t,po,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=$a(this,t,po,l,m-1,f,m-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $a(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(gl.fromBufferAttribute(a,s),xl.fromBufferAttribute(a,r),e.distanceSqToSegment(gl,xl,bh,vf)>n)return;bh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(bh);if(!(c<t.near||c>t.far))return{distance:c,point:vf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var _f=new N,yf=new N,Eo=class extends vl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)_f.fromBufferAttribute(e,s),yf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_f.distanceTo(yf);t.setAttribute("lineDistance",new ve(n,1))}else ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _l=class extends vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Mf=new Le,Lh=new Gs,qa=new Ui,Ya=new N,Ir=class extends hn{constructor(t=new Ue,e=new _l){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),qa.radius+=r,t.ray.intersectsSphere(qa)===!1)return;Mf.copy(s).invert(),Lh.copy(t.ray).applyMatrix4(Mf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,y=f;m<y;m++){let g=c.getX(m);Ya.fromBufferAttribute(d,g),bf(Ya,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,y=f;m<y;m++)Ya.fromBufferAttribute(d,m),bf(Ya,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bf(i,t,e,n,s,r,o){let a=Lh.distanceSqToPoint(i);if(a<e){let l=new N;Lh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ao=class extends Fn{constructor(t=[],e=Ts,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Oi=class extends Fn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xs=class extends Fn{constructor(t,e,n=Mi,s,r,o,a=Mn,l=Mn,c,h=Li,d=1){if(h!==Li&&h!==Es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ar(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},yl=class extends xs{constructor(t,e=Mi,n=Ts,s,r,o=Mn,a=Mn,l,c=Li){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Co=class extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ge=class i extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(d,2));function m(y,g,p,M,E,_,b,S,I,x,A){let U=_/I,W=b/x,O=_/2,Z=b/2,z=S/2,K=I+1,j=x+1,lt=0,ht=0,ot=new N;for(let ut=0;ut<j;ut++){let vt=ut*W-Z;for(let bt=0;bt<K;bt++){let mt=bt*U-O;ot[y]=mt*M,ot[g]=vt*E,ot[p]=z,c.push(ot.x,ot.y,ot.z),ot[y]=0,ot[g]=0,ot[p]=S>0?1:-1,h.push(ot.x,ot.y,ot.z),d.push(bt/I),d.push(1-ut/x),lt+=1}}for(let ut=0;ut<x;ut++)for(let vt=0;vt<I;vt++){let bt=u+vt+K*ut,mt=u+vt+K*(ut+1),ge=u+(vt+1)+K*(ut+1),le=u+(vt+1)+K*ut;l.push(bt,mt,le),l.push(mt,ge,le),ht+=6}a.addGroup(f,ht,A),f+=ht,u+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ro=class i extends Ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new Pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(a,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},is=class i extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,y=[],g=n/2,p=0;M(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ve(d,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(f,2));function M(){let _=new N,b=new N,S=0,I=(e-t)/n;for(let x=0;x<=r;x++){let A=[],U=x/r,W=U*(e-t)+t;for(let O=0;O<=s;O++){let Z=O/s,z=Z*l+a,K=Math.sin(z),j=Math.cos(z);b.x=W*K,b.y=-U*n+g,b.z=W*j,d.push(b.x,b.y,b.z),_.set(K,I,j).normalize(),u.push(_.x,_.y,_.z),f.push(Z,1-U),A.push(m++)}y.push(A)}for(let x=0;x<s;x++)for(let A=0;A<r;A++){let U=y[A][x],W=y[A+1][x],O=y[A+1][x+1],Z=y[A][x+1];(t>0||A!==0)&&(h.push(U,W,Z),S+=3),(e>0||A!==r-1)&&(h.push(W,O,Z),S+=3)}c.addGroup(p,S,0),p+=S}function E(_){let b=m,S=new Pt,I=new N,x=0,A=_===!0?t:e,U=_===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,g*U,0),u.push(0,U,0),f.push(.5,.5),m++;let W=m;for(let O=0;O<=s;O++){let z=O/s*l+a,K=Math.cos(z),j=Math.sin(z);I.x=A*j,I.y=g*U,I.z=A*K,d.push(I.x,I.y,I.z),u.push(0,U,0),S.x=K*.5+.5,S.y=j*.5*U+.5,f.push(S.x,S.y),m++}for(let O=0;O<s;O++){let Z=b+O,z=W+O;_===!0?h.push(z,z+1,Z):h.push(z+1,z,Z),x+=3}c.addGroup(p,x,_===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ss=class i extends is{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ml=class i extends Ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ve(r,3)),this.setAttribute("normal",new ve(r.slice(),3)),this.setAttribute("uv",new ve(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let E=new N,_=new N,b=new N;for(let S=0;S<e.length;S+=3)f(e[S+0],E),f(e[S+1],_),f(e[S+2],b),l(E,_,b,M)}function l(M,E,_,b){let S=b+1,I=[];for(let x=0;x<=S;x++){I[x]=[];let A=M.clone().lerp(_,x/S),U=E.clone().lerp(_,x/S),W=S-x;for(let O=0;O<=W;O++)O===0&&x===S?I[x][O]=A:I[x][O]=A.clone().lerp(U,O/W)}for(let x=0;x<S;x++)for(let A=0;A<2*(S-x)-1;A++){let U=Math.floor(A/2);A%2===0?(u(I[x][U+1]),u(I[x+1][U]),u(I[x][U])):(u(I[x][U+1]),u(I[x+1][U+1]),u(I[x+1][U]))}}function c(M){let E=new N;for(let _=0;_<r.length;_+=3)E.x=r[_+0],E.y=r[_+1],E.z=r[_+2],E.normalize().multiplyScalar(M),r[_+0]=E.x,r[_+1]=E.y,r[_+2]=E.z}function h(){let M=new N;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];let _=g(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;o.push(_,1-b)}m(),d()}function d(){for(let M=0;M<o.length;M+=6){let E=o[M+0],_=o[M+2],b=o[M+4],S=Math.max(E,_,b),I=Math.min(E,_,b);S>.9&&I<.1&&(E<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,E){let _=M*3;E.x=t[_+0],E.y=t[_+1],E.z=t[_+2]}function m(){let M=new N,E=new N,_=new N,b=new N,S=new Pt,I=new Pt,x=new Pt;for(let A=0,U=0;A<r.length;A+=9,U+=6){M.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),_.set(r[A+6],r[A+7],r[A+8]),S.set(o[U+0],o[U+1]),I.set(o[U+2],o[U+3]),x.set(o[U+4],o[U+5]),b.copy(M).add(E).add(_).divideScalar(3);let W=g(b);y(S,U+0,M,W),y(I,U+2,E,W),y(x,U+4,_,W)}}function y(M,E,_,b){b<0&&M.x===1&&(o[E]=M.x-1),_.x===0&&_.z===0&&(o[E]=b/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ce("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Pt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new Le;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Lr=class extends Zn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},bl=class extends Lr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Sf=new N,wf=new N,Sh=new nu,wh=new nu,Th=new nu,Sl=class extends Zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(wf.subVectors(s[0],s[1]).add(s[0]),c=wf);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Sf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Sh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,y,g),wh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,y,g),Th.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(Sh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),wh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Th.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Sh.calc(l),wh.calc(l),Th.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Tf(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function am(i,t){let e=1-i;return e*e*t}function lm(i,t){return 2*(1-i)*i*t}function cm(i,t){return i*i*t}function go(i,t,e,n){return am(i,t)+lm(i,e)+cm(i,n)}function hm(i,t){let e=1-i;return e*e*e*t}function um(i,t){let e=1-i;return 3*e*e*i*t}function fm(i,t){return 3*(1-i)*i*i*t}function dm(i,t){return i*i*i*t}function xo(i,t,e,n,s){return hm(i,t)+um(i,e)+fm(i,n)+dm(i,s)}var Po=class extends Zn{constructor(t=new Pt,e=new Pt,n=new Pt,s=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xo(t,s.x,r.x,o.x,a.x),xo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dr=class extends Zn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xo(t,s.x,r.x,o.x,a.x),xo(t,s.y,r.y,o.y,a.y),xo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Io=class extends Zn{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wl=class extends Zn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends Zn{constructor(t=new Pt,e=new Pt,n=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(go(t,s.x,r.x,o.x),go(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ws=class extends Zn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(go(t,s.x,r.x,o.x),go(t,s.y,r.y,o.y),go(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Tf(a,l.x,c.x,h.x,d.x),Tf(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Pt().fromArray(s))}return this}},Dh=Object.freeze({__proto__:null,ArcCurve:bl,CatmullRomCurve3:Sl,CubicBezierCurve:Po,CubicBezierCurve3:Dr,EllipseCurve:Lr,LineCurve:Io,LineCurve3:wl,QuadraticBezierCurve:Lo,QuadraticBezierCurve3:Ws,SplineCurve:Do}),Tl=class extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Dh[s.type]().fromJSON(s))}return this}},Xs=class extends Tl{constructor(t){super(),this.type="Path",this.currentPoint=new Pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Io(this.currentPoint.clone(),new Pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Lo(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Po(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s),new Pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Do(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Lr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Nr=class extends Xs{constructor(t){super(t),this.uuid=Vr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Xs().fromJSON(s))}return this}};function pm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=bd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=_m(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){let f=i[u],m=i[u+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return No(r,o,e,a,l,c,0),o}function bd(i,t,e,n,s){let r;if(s===Pm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Ef(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Ef(o/n|0,i[o],i[o+1],r);return r&&Ur(r,r.next)&&(Fo(r),r=r.next),r}function $s(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ur(e,e.next)||tn(e.prev,e,e.next)===0)){if(Fo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function No(i,t,e,n,s,r,o){if(!i)return;!o&&r&&wm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?gm(i,n,s,r):mm(i)){t.push(l.i,i.i,c.i),Fo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=xm($s(i),t),No(i,t,e,n,s,r,2)):o===2&&vm(i,t,e,n,s,r):No($s(i),t,e,n,s,r,1);break}}}function mm(i){let t=i.prev,e=i,n=i.next;if(tn(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&mo(s,a,r,l,o,c,m.x,m.y)&&tn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function gm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(tn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),m=Math.min(h,d,u),y=Math.max(a,l,c),g=Math.max(h,d,u),p=Nh(f,m,t,e,n),M=Nh(y,g,t,e,n),E=i.prevZ,_=i.nextZ;for(;E&&E.z>=p&&_&&_.z<=M;){if(E.x>=f&&E.x<=y&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&mo(a,h,l,d,c,u,E.x,E.y)&&tn(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&mo(a,h,l,d,c,u,_.x,_.y)&&tn(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=y&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&mo(a,h,l,d,c,u,E.x,E.y)&&tn(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&mo(a,h,l,d,c,u,_.x,_.y)&&tn(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function xm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ur(n,s)&&wd(n,e,e.next,s)&&Uo(n,s)&&Uo(s,n)&&(t.push(n.i,e.i,s.i),Fo(e),Fo(e.next),e=i=s),e=e.next}while(e!==i);return $s(e)}function vm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Am(o,a)){let l=Td(o,a);o=$s(o,o.next),l=$s(l,l.next),No(o,t,e,n,s,r,0),No(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function _m(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=bd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Em(c))}s.sort(ym);for(let r=0;r<s.length;r++)e=Mm(s[r],e);return e}function ym(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Mm(i,t){let e=bm(i,t);if(!e)return t;let n=Td(e,i);return $s(n,n.next),$s(e,e.next)}function bm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ur(i,e))return e;do{if(Ur(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Sd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Uo(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Sm(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Sm(i,t){return tn(i.prev,i,t.prev)<0&&tn(t.next,i,i.next)<0}function wm(i,t,e,n){let s=i;do s.z===0&&(s.z=Nh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Tm(s)}function Tm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Nh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Em(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Sd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function mo(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Sd(i,t,e,n,s,r,o,a)}function Am(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Cm(i,t)&&(Uo(i,t)&&Uo(t,i)&&Rm(i,t)&&(tn(i.prev,i,t.prev)||tn(i,t.prev,t))||Ur(i,t)&&tn(i.prev,i,i.next)>0&&tn(t.prev,t,t.next)>0)}function tn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ur(i,t){return i.x===t.x&&i.y===t.y}function wd(i,t,e,n){let s=Ja(tn(i,t,e)),r=Ja(tn(i,t,n)),o=Ja(tn(e,n,i)),a=Ja(tn(e,n,t));return!!(s!==r&&o!==a||s===0&&Za(i,e,t)||r===0&&Za(i,n,t)||o===0&&Za(e,i,n)||a===0&&Za(e,t,n))}function Za(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ja(i){return i>0?1:i<0?-1:0}function Cm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&wd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Uo(i,t){return tn(i.prev,i,i.next)<0?tn(i,t,i.next)>=0&&tn(i,i.prev,t)>=0:tn(i,t,i.prev)<0||tn(i,i.next,t)<0}function Rm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Td(i,t){let e=Uh(i.i,i.x,i.y),n=Uh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ef(i,t,e,n){let s=Uh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Fh=class{static triangulate(t,e,n=2){return pm(t,e,n)}},Sr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Af(t),Cf(n,t);let o=t.length;e.forEach(Af);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Cf(n,e[l]);let a=Fh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Af(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Cf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Oo=class i extends Ue{constructor(t=[new Pt(0,-.5),new Pt(.5,0),new Pt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Te(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new N,u=new Pt,f=new N,m=new N,y=new N,g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(m)}for(let M=0;M<=e;M++){let E=n+M*h*s,_=Math.sin(E),b=Math.cos(E);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*_,d.y=t[S].y,d.z=t[S].x*b,o.push(d.x,d.y,d.z),u.x=M/e,u.y=S/(t.length-1),a.push(u.x,u.y);let I=l[3*S+0]*_,x=l[3*S+1],A=l[3*S+0]*b;c.push(I,x,A)}}for(let M=0;M<e;M++)for(let E=0;E<t.length-1;E++){let _=E+M*t.length,b=_,S=_+t.length,I=_+t.length+1,x=_+1;r.push(b,S,x),r.push(I,x,S)}this.setIndex(r),this.setAttribute("position",new ve(o,3)),this.setAttribute("uv",new ve(a,2)),this.setAttribute("normal",new ve(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Bo=class i extends Ml{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ti=class i extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],y=[],g=[];for(let p=0;p<h;p++){let M=p*u-o;for(let E=0;E<c;E++){let _=E*d-r;m.push(_,-M,0),y.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let E=M+c*p,_=M+c*(p+1),b=M+1+c*(p+1),S=M+1+c*p;f.push(E,_,S),f.push(_,b,S)}this.setIndex(f),this.setAttribute("position",new ve(m,3)),this.setAttribute("normal",new ve(y,3)),this.setAttribute("uv",new ve(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var zo=class i extends Ue{constructor(t=new Nr([new Pt(0,.5),new Pt(-.5,-.5),new Pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ve(s,3)),this.setAttribute("normal",new ve(r,3)),this.setAttribute("uv",new ve(o,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,m=u.holes;Sr.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let M=m[g];Sr.isClockWise(M)===!0&&(m[g]=M.reverse())}let y=Sr.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let M=m[g];f=f.concat(M)}for(let g=0,p=f.length;g<p;g++){let M=f[g];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,p=y.length;g<p;g++){let M=y[g],E=M[0]+d,_=M[1]+d,b=M[2]+d;n.push(E,_,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Im(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Im(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var qs=class i extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new N,u=new N,f=[],m=[],y=[],g=[];for(let p=0;p<=n;p++){let M=[],E=p/n,_=o+E*a,b=t*Math.cos(_),S=Math.sqrt(t*t-b*b),I=0;p===0&&o===0?I=.5/e:p===n&&l===Math.PI&&(I=-.5/e);for(let x=0;x<=e;x++){let A=x/e,U=s+A*r;d.x=-S*Math.cos(U),d.y=b,d.z=S*Math.sin(U),m.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(A+I,1-E),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let E=h[p][M+1],_=h[p][M],b=h[p+1][M],S=h[p+1][M+1];(p!==0||o>0)&&f.push(E,_,S),(p!==n-1||l<Math.PI)&&f.push(_,b,S)}this.setIndex(f),this.setAttribute("position",new ve(m,3)),this.setAttribute("normal",new ve(y,3)),this.setAttribute("uv",new ve(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ko=class i extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new N,f=new N,m=new N;for(let y=0;y<=n;y++){let g=o+y/n*a;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let p=(s+1)*y+g-1,M=(s+1)*(y-1)+g-1,E=(s+1)*(y-1)+g,_=(s+1)*y+g;l.push(p,M,_),l.push(M,E,_)}this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ys=class i extends Ue{constructor(t=new Ws(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new Pt,h=new N,d=[],u=[],f=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new ve(d,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(f,2));function y(){for(let E=0;E<e;E++)g(E);g(r===!1?e:0),M(),p()}function g(E){h=t.getPointAt(E/e,h);let _=o.normals[E],b=o.binormals[E];for(let S=0;S<=s;S++){let I=S/s*Math.PI*2,x=Math.sin(I),A=-Math.cos(I);l.x=A*_.x+x*b.x,l.y=A*_.y+x*b.y,l.z=A*_.z+x*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let E=1;E<=e;E++)for(let _=1;_<=s;_++){let b=(s+1)*(E-1)+(_-1),S=(s+1)*E+(_-1),I=(s+1)*E+_,x=(s+1)*(E-1)+_;m.push(b,S,x),m.push(S,I,x)}}function M(){for(let E=0;E<=e;E++)for(let _=0;_<=s;_++)c.x=E/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Dh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function nr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Rf(s))s.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Rf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function In(i){let t={};for(let e=0;e<i.length;e++){let n=nr(i[e]);for(let s in n)t[s]=n[s]}return t}function Rf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function iu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}var os={clone:nr,merge:In},Dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dm,this.fragmentShader=Nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=Lm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new xe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fr=class extends ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},un=class extends vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ho=class extends vi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=kl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Zs=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _r(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Eh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var vs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Al=class extends vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rh,endingEnd:Rh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ph:r=t,a=2*e-n;break;case Ih:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ph:o=t,l=2*n-e;break;case Ih:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),y=m*m,g=y*m,p=-u*g+2*u*y-u*m,M=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*m+1,E=(-1-f)*g+(1.5+f)*y+.5*m,_=f*g-f*y;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+M*o[c+b]+E*o[l+b]+_*o[d+b];return r}},Cl=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Rl=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pl=class extends vs{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(s-e),y=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*y+o[l+g]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let y=o[c+m],g=o[l+m],p=f*u+m*2,M=d[p],E=d[p+1],_=t*u+m*2,b=h[_],S=h[_+1],I=Fm(n,e,M,b,s);r[m]=Ed(I,y,E,S,g)}return r}};function Ed(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Um(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Fm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Ed(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Um(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Jn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_r(e,this.TimeBufferType),this.values=_r(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_r(t.times,Array),values:_r(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Eh(t.settings)&&(n.settings={inTangents:_r(t.settings.inTangents,Array),outTangents:_r(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Pl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case vo:e=this.InterpolantFactoryMethodDiscrete;break;case hl:e=this.InterpolantFactoryMethodLinear;break;case Qa:e=this.InterpolantFactoryMethodSmooth;break;case Ch:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ce("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vo;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return Qa;case this.InterpolantFactoryMethodBezier:return Ch}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Eh(this.settings)&&(Pf(this.settings.inTangents,t),Pf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(me("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(me("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){me("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){me("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&kp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){me("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let y=e[d+m];if(y!==e[u+m]||y!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Eh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Pf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=hl;var _s=class extends Jn{constructor(t,e,n){super(t,e,n)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=vo;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}};Il.prototype.ValueTypeName="color";var Ll=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}};Ll.prototype.ValueTypeName="number";var Dl=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)qn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vo=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}};Vo.prototype.ValueTypeName="quaternion";Vo.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends Jn{constructor(t,e,n){super(t,e,n)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=vo;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}};Nl.prototype.ValueTypeName="vector";var Ul=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ad=new Ul,Fl=class{constructor(t){this.manager=t!==void 0?t:Ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Fl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Or=class extends hn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Js=class extends Or{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ah=new Le,If=new N,Lf=new N,Go=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;If.setFromMatrixPosition(t.matrixWorld),e.position.copy(If),Lf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ah,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Tr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ah)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ka=new N,ja=new qn,Pi=new N,Wo=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ka,ja,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,ja,Pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ka,ja,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,ja,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new N,Df=new Pt,Nf=new Pt,gn=class extends Wo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ul*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(eh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(eh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ms.x,ms.y).multiplyScalar(-t/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-t/ms.z)}getViewSize(t,e){return this.getViewBounds(t,Df,Nf),e.subVectors(Nf,Df)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(eh*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Oh=class extends Go{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},Xo=class extends Or{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Oh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ms=class extends Wo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bh=class extends Go{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bs=class extends Or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new Bh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var yr=-90,Mr=1,Ol=class extends hn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(yr,Mr,t,e);s.layers=this.layers,this.add(s);let r=new gn(yr,Mr,t,e);r.layers=this.layers,this.add(r);let o=new gn(yr,Mr,t,e);o.layers=this.layers,this.add(o);let a=new gn(yr,Mr,t,e);a.layers=this.layers,this.add(a);let l=new gn(yr,Mr,t,e);l.layers=this.layers,this.add(l);let c=new gn(yr,Mr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Bl=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},$o=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Om.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Om(){this._document.hidden===!1&&this.reset()}var su="\\[\\]\\.:\\/",Bm=new RegExp("["+su+"]","g"),ru="[^"+su+"]",zm="[^"+su.replace("\\.","")+"]",km=/((?:WC+[\/:])*)/.source.replace("WC",ru),Hm=/(WCOD+)?/.source.replace("WCOD",zm),Vm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),Gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),Wm=new RegExp("^"+km+Hm+Vm+Gm+"$"),Xm=["material","materials","bones","map"],zh=class{constructor(t,e,n){let s=n||$e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},$e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bm,"")}static parseTrackName(t){let e=Wm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){me("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){me("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){me("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){me("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){me("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){me("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){me("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;me("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=zh;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Py=new Float32Array(1);var Uf=new Le,Ks=class{constructor(t,e,n=0,s=1/0){this.ray=new Gs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):me("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uf),this}intersectObject(t,e=!0,n=[]){return kh(t,this,n,e),n.sort(Ff),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)kh(t[s],this,n,e);return n.sort(Ff),n}};function Ff(i,t){return i.distance-t.distance}function kh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)kh(r[o],t,e,!0)}}var uu=class uu{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};uu.prototype.isMatrix2=!0;var Hh=uu;function ou(i,t,e,n){let s=$m(n);switch(e){case jh:return i*t;case ql:return i*t/s.components*s.byteLength;case Yl:return i*t/s.components*s.byteLength;case As:return i*t*2/s.components*s.byteLength;case Zl:return i*t*2/s.components*s.byteLength;case Qh:return i*t*3/s.components*s.byteLength;case si:return i*t*4/s.components*s.byteLength;case Jl:return i*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jl:case tc:return Math.max(i,16)*Math.max(t,8)/4;case Kl:case Ql:return Math.max(i,8)*Math.max(t,8)/2;case ec:case nc:case sc:case rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ic:case ra:case oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case gc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case yc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Mc:case bc:case Sc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wc:case Tc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case oa:case Ec:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $m(i){switch(i){case kn:case Yh:return{byteLength:1,components:1};case kr:case Zh:case xn:return{byteLength:2,components:1};case Xl:case $l:return{byteLength:2,components:4};case Mi:case Wl:case ii:return{byteLength:4,components:1};case Jh:case Kh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Zd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Qm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],y=d[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var t0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e0=`#ifdef USE_ALPHAHASH
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
#endif`,n0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
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
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l0=`#ifdef USE_BATCHING
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
#endif`,c0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,h0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d0=`#ifdef USE_IRIDESCENCE
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
#endif`,p0=`#ifdef USE_BUMPMAP
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
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,S0=`#define PI 3.141592653589793
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
} // validated`,w0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T0=`vec3 transformedNormal = objectNormal;
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
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H0=`#ifdef USE_GRADIENTMAP
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
}`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$0=`#ifdef USE_ENVMAP
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
#endif`,q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K0=`PhysicalMaterial material;
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
#endif`,j0=`uniform sampler2D dfgLUT;
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
}`,Q0=`
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
#endif`,tg=`#if defined( RE_IndirectDiffuse )
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ng=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hg=`#if defined( USE_POINTS_UV )
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
#endif`,ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
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
#endif`,xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_g=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sg=`#ifdef USE_NORMALMAP
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
#endif`,wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zg=`float getShadowMask() {
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
}`,kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gg=`#ifdef USE_SKINNING
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
#endif`,Wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yg=`#ifdef USE_TRANSMISSION
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
#endif`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ex=`uniform sampler2D t2D;
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`#include <common>
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
}`,ax=`#if DEPTH_PACKING == 3200
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
}`,lx=`#define DISTANCE
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
}`,cx=`#define DISTANCE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
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
}`,dx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#define LAMBERT
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
}`,xx=`#define LAMBERT
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
}`,vx=`#define MATCAP
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
}`,_x=`#define MATCAP
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
}`,yx=`#define NORMAL
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
}`,Mx=`#define NORMAL
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
}`,bx=`#define PHONG
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
}`,Sx=`#define PHONG
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
}`,wx=`#define STANDARD
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
}`,Tx=`#define STANDARD
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
}`,Ex=`#define TOON
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
}`,Ax=`#define TOON
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
}`,Cx=`uniform float size;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Ix=`uniform vec3 color;
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
}`,Lx=`uniform float rotation;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,be={alphahash_fragment:t0,alphahash_pars_fragment:e0,alphamap_fragment:n0,alphamap_pars_fragment:i0,alphatest_fragment:s0,alphatest_pars_fragment:r0,aomap_fragment:o0,aomap_pars_fragment:a0,batching_pars_vertex:l0,batching_vertex:c0,begin_vertex:h0,beginnormal_vertex:u0,bsdfs:f0,iridescence_fragment:d0,bumpmap_pars_fragment:p0,clipping_planes_fragment:m0,clipping_planes_pars_fragment:g0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:v0,color_fragment:_0,color_pars_fragment:y0,color_pars_vertex:M0,color_vertex:b0,common:S0,cube_uv_reflection_fragment:w0,defaultnormal_vertex:T0,displacementmap_pars_vertex:E0,displacementmap_vertex:A0,emissivemap_fragment:C0,emissivemap_pars_fragment:R0,colorspace_fragment:P0,colorspace_pars_fragment:I0,envmap_fragment:L0,envmap_common_pars_fragment:D0,envmap_pars_fragment:N0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:$0,envmap_vertex:F0,fog_vertex:O0,fog_pars_vertex:B0,fog_fragment:z0,fog_pars_fragment:k0,gradientmap_pars_fragment:H0,lightmap_pars_fragment:V0,lights_lambert_fragment:G0,lights_lambert_pars_fragment:W0,lights_pars_begin:X0,lights_toon_fragment:q0,lights_toon_pars_fragment:Y0,lights_phong_fragment:Z0,lights_phong_pars_fragment:J0,lights_physical_fragment:K0,lights_physical_pars_fragment:j0,lights_fragment_begin:Q0,lights_fragment_maps:tg,lights_fragment_end:eg,lightprobes_pars_fragment:ng,logdepthbuf_fragment:ig,logdepthbuf_pars_fragment:sg,logdepthbuf_pars_vertex:rg,logdepthbuf_vertex:og,map_fragment:ag,map_pars_fragment:lg,map_particle_fragment:cg,map_particle_pars_fragment:hg,metalnessmap_fragment:ug,metalnessmap_pars_fragment:fg,morphinstance_vertex:dg,morphcolor_vertex:pg,morphnormal_vertex:mg,morphtarget_pars_vertex:gg,morphtarget_vertex:xg,normal_fragment_begin:vg,normal_fragment_maps:_g,normal_pars_fragment:yg,normal_pars_vertex:Mg,normal_vertex:bg,normalmap_pars_fragment:Sg,clearcoat_normal_fragment_begin:wg,clearcoat_normal_fragment_maps:Tg,clearcoat_pars_fragment:Eg,iridescence_pars_fragment:Ag,opaque_fragment:Cg,packing:Rg,premultiplied_alpha_fragment:Pg,project_vertex:Ig,dithering_fragment:Lg,dithering_pars_fragment:Dg,roughnessmap_fragment:Ng,roughnessmap_pars_fragment:Ug,shadowmap_pars_fragment:Fg,shadowmap_pars_vertex:Og,shadowmap_vertex:Bg,shadowmask_pars_fragment:zg,skinbase_vertex:kg,skinning_pars_vertex:Hg,skinning_vertex:Vg,skinnormal_vertex:Gg,specularmap_fragment:Wg,specularmap_pars_fragment:Xg,tonemapping_fragment:$g,tonemapping_pars_fragment:qg,transmission_fragment:Yg,transmission_pars_fragment:Zg,uv_pars_fragment:Jg,uv_pars_vertex:Kg,uv_vertex:jg,worldpos_vertex:Qg,background_vert:tx,background_frag:ex,backgroundCube_vert:nx,backgroundCube_frag:ix,cube_vert:sx,cube_frag:rx,depth_vert:ox,depth_frag:ax,distance_vert:lx,distance_frag:cx,equirect_vert:hx,equirect_frag:ux,linedashed_vert:fx,linedashed_frag:dx,meshbasic_vert:px,meshbasic_frag:mx,meshlambert_vert:gx,meshlambert_frag:xx,meshmatcap_vert:vx,meshmatcap_frag:_x,meshnormal_vert:yx,meshnormal_frag:Mx,meshphong_vert:bx,meshphong_frag:Sx,meshphysical_vert:wx,meshphysical_frag:Tx,meshtoon_vert:Ex,meshtoon_frag:Ax,points_vert:Cx,points_frag:Rx,shadow_vert:Px,shadow_frag:Ix,sprite_vert:Lx,sprite_frag:Dx},Xt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},ki={basic:{uniforms:In([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:In([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:In([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:In([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:In([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new ne(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:In([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:In([Xt.points,Xt.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:In([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:In([Xt.common,Xt.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:In([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:In([Xt.sprite,Xt.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distance:{uniforms:In([Xt.common,Xt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distance_vert,fragmentShader:be.distance_frag},shadow:{uniforms:In([Xt.lights,Xt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};ki.physical={uniforms:In([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};var Pc={r:0,b:0,g:0},Nx=new Le,Jd=new xe;Jd.set(-1,0,0,0,1,0,0,0,1);function Ux(i,t,e,n,s,r){let o=new ne(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let _=M.backgroundBlurriness>0;E=t.get(E,_)}return E}function m(M){let E=!1,_=f(M);_===null?g(o,a):_&&_.isColor&&(g(_,1),E=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,E){let _=f(E);_&&(_.isCubeTexture||_.mapping===Qo)?(c===void 0&&(c=new Ee(new Ge(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:nr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jd),c.material.toneMapped=we.getTransfer(_.colorSpace)!==Ne,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ee(new ti(2,2),new ke({name:"BackgroundMaterial",uniforms:nr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=we.getTransfer(_.colorSpace)!==Ne,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,E){M.getRGB(Pc,iu(i)),e.buffers.color.setClear(Pc.r,Pc.g,Pc.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:y,dispose:p}}function Fx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(W,O,Z,z,K){let j=!1,lt=d(W,z,Z,O);r!==lt&&(r=lt,c(r.object)),j=f(W,z,Z,K),j&&m(W,z,Z,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,_(W,O,Z,z),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(W){return i.bindVertexArray(W)}function h(W){return i.deleteVertexArray(W)}function d(W,O,Z,z){let K=z.wireframe===!0,j=n[O.id];j===void 0&&(j={},n[O.id]=j);let lt=W.isInstancedMesh===!0?W.id:0,ht=j[lt];ht===void 0&&(ht={},j[lt]=ht);let ot=ht[Z.id];ot===void 0&&(ot={},ht[Z.id]=ot);let ut=ot[K];return ut===void 0&&(ut=u(l()),ot[K]=ut),ut}function u(W){let O=[],Z=[],z=[];for(let K=0;K<e;K++)O[K]=0,Z[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Z,attributeDivisors:z,object:W,attributes:{},index:null}}function f(W,O,Z,z){let K=r.attributes,j=O.attributes,lt=0,ht=Z.getAttributes();for(let ot in ht)if(ht[ot].location>=0){let vt=K[ot],bt=j[ot];if(bt===void 0&&(ot==="instanceMatrix"&&W.instanceMatrix&&(bt=W.instanceMatrix),ot==="instanceColor"&&W.instanceColor&&(bt=W.instanceColor)),vt===void 0||vt.attribute!==bt||bt&&vt.data!==bt.data)return!0;lt++}return r.attributesNum!==lt||r.index!==z}function m(W,O,Z,z){let K={},j=O.attributes,lt=0,ht=Z.getAttributes();for(let ot in ht)if(ht[ot].location>=0){let vt=j[ot];vt===void 0&&(ot==="instanceMatrix"&&W.instanceMatrix&&(vt=W.instanceMatrix),ot==="instanceColor"&&W.instanceColor&&(vt=W.instanceColor));let bt={};bt.attribute=vt,vt&&vt.data&&(bt.data=vt.data),K[ot]=bt,lt++}r.attributes=K,r.attributesNum=lt,r.index=z}function y(){let W=r.newAttributes;for(let O=0,Z=W.length;O<Z;O++)W[O]=0}function g(W){p(W,0)}function p(W,O){let Z=r.newAttributes,z=r.enabledAttributes,K=r.attributeDivisors;Z[W]=1,z[W]===0&&(i.enableVertexAttribArray(W),z[W]=1),K[W]!==O&&(i.vertexAttribDivisor(W,O),K[W]=O)}function M(){let W=r.newAttributes,O=r.enabledAttributes;for(let Z=0,z=O.length;Z<z;Z++)O[Z]!==W[Z]&&(i.disableVertexAttribArray(Z),O[Z]=0)}function E(W,O,Z,z,K,j,lt){lt===!0?i.vertexAttribIPointer(W,O,Z,K,j):i.vertexAttribPointer(W,O,Z,z,K,j)}function _(W,O,Z,z){y();let K=z.attributes,j=Z.getAttributes(),lt=O.defaultAttributeValues;for(let ht in j){let ot=j[ht];if(ot.location>=0){let ut=K[ht];if(ut===void 0&&(ht==="instanceMatrix"&&W.instanceMatrix&&(ut=W.instanceMatrix),ht==="instanceColor"&&W.instanceColor&&(ut=W.instanceColor)),ut!==void 0){let vt=ut.normalized,bt=ut.itemSize,mt=t.get(ut);if(mt===void 0)continue;let ge=mt.buffer,le=mt.type,Se=mt.bytesPerElement,ft=le===i.INT||le===i.UNSIGNED_INT||ut.gpuType===Wl;if(ut.isInterleavedBufferAttribute){let xt=ut.data,Ot=xt.stride,F=ut.offset;if(xt.isInstancedInterleavedBuffer){for(let dt=0;dt<ot.locationSize;dt++)p(ot.location+dt,xt.meshPerAttribute);W.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let dt=0;dt<ot.locationSize;dt++)g(ot.location+dt);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let dt=0;dt<ot.locationSize;dt++)E(ot.location+dt,bt/ot.locationSize,le,vt,Ot*Se,(F+bt/ot.locationSize*dt)*Se,ft)}else{if(ut.isInstancedBufferAttribute){for(let xt=0;xt<ot.locationSize;xt++)p(ot.location+xt,ut.meshPerAttribute);W.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let xt=0;xt<ot.locationSize;xt++)g(ot.location+xt);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let xt=0;xt<ot.locationSize;xt++)E(ot.location+xt,bt/ot.locationSize,le,vt,bt*Se,bt/ot.locationSize*xt*Se,ft)}}else if(lt!==void 0){let vt=lt[ht];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(ot.location,vt);break;case 3:i.vertexAttrib3fv(ot.location,vt);break;case 4:i.vertexAttrib4fv(ot.location,vt);break;default:i.vertexAttrib1fv(ot.location,vt)}}}}M()}function b(){A();for(let W in n){let O=n[W];for(let Z in O){let z=O[Z];for(let K in z){let j=z[K];for(let lt in j)h(j[lt].object),delete j[lt];delete z[K]}}delete n[W]}}function S(W){if(n[W.id]===void 0)return;let O=n[W.id];for(let Z in O){let z=O[Z];for(let K in z){let j=z[K];for(let lt in j)h(j[lt].object),delete j[lt];delete z[K]}}delete n[W.id]}function I(W){for(let O in n){let Z=n[O];for(let z in Z){let K=Z[z];if(K[W.id]===void 0)continue;let j=K[W.id];for(let lt in j)h(j[lt].object),delete j[lt];delete K[W.id]}}}function x(W){for(let O in n){let Z=n[O],z=W.isInstancedMesh===!0?W.id:0,K=Z[z];if(K!==void 0){for(let j in K){let lt=K[j];for(let ht in lt)h(lt[ht].object),delete lt[ht];delete K[j]}delete Z[z],Object.keys(Z).length===0&&delete n[O]}}}function A(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:U,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function Ox(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Bx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==si&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let x=I===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==kn&&I!==ii&&!x&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:_,maxSamples:b,samples:S}}function zx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new mi,a=new xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,E=M*4,_=p.clippingState||null;l.value=_,_=h(m,u,E,f);for(let b=0;b!==E;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=f+y*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,_=f;E!==y;++E,_+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var Wr=4,kx=6,Hx=20,Vx=256,la=new Ms,Cd=new ne,fu=null,du=0,pu=0,mu=!1,Gx=new N,ir=new N,Cs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Gx}=r;fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(fu,du,pu),this._renderer.xr.enabled=mu,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:xn,format:si,colorSpace:_o,depthBuffer:!1},s=Rd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wx(r)),this._blurMaterial=$x(r,t,e),this._ggxMaterial=Xx(r,t,e)}return s}_compileMaterial(t){let e=new Ee(new Ue,t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,s,r){let l=new gn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Cd),d.toneMapping=yi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ee(new Ge,new _i({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,p=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(Cd),p=!0);for(let E=0;E<6;E++){let _=E%3;_===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):_===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let b=this._cubeSize;Gr(s,_*b,E>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ts||t.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,la)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,y=this._sizeLods[n],g=3*y*(n>m-Wr?n-m+Wr:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Gr(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(a,la),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Gr(t,g,p,3*y,2*y),s.setRenderTarget(t),s.render(a,la)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Wr?s-this._lodMax+Wr:0),u=4*(this._cubeSize-h);Gr(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,la)}};function Wx(i){let t=[],e=[],n=i,s=i-Wr+1+kx;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,E=p>2?0:-1,_=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];m.set(_,f*u*p);for(let b=0;b<u;b++){let S=h[b*2]*2-1,I=h[b*2+1]*2-1;p===0?ir.set(1,I,S):p===1?ir.set(-S,1,-I):p===2?ir.set(-S,I,1):p===3?ir.set(-1,I,-S):p===4?ir.set(-S,-1,I):ir.set(S,I,-1),ir.toArray(y,(p*u+b)*f)}}let g=new Ue;g.setAttribute("position",new ye(m,f)),g.setAttribute("outputDirection",new ye(y,f)),e.push(new Ee(g,null)),n>Wr&&n--}return{lodMeshes:e,sizeLods:t}}function Rd(i,t,e){let n=new nn(i,t,e);return n.texture.mapping=Qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xx(i,t,e){return new ke({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function $x(i,t,e){return new ke({name:"SphericalGaussianBlur",defines:{SAMPLES:Hx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Pd(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Id(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Lc=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ao(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ge(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:ei});r.uniforms.tEquirect.value=e;let o=new Ee(s,r),a=e.minFilter;return e.minFilter===ni&&(e.minFilter=En),new Ol(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function qx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Hl||f===Vl)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let y=new Lc(m.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===Hl||f===Vl,y=f===Ts||f===er;if(m||y){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Cs(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return m&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Cs(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Hl?u.mapping=Ts:f===Vl&&(u.mapping=er),u}function l(u){let f=0,m=6;for(let y=0;y<m;y++)u[y]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Yx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Hs("WebGLRenderer: "+n+" extension not supported."),s}}}function Zx(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,y=0;if(m===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let E=0,_=M.length;E<_;E+=3){let b=M[E+0],S=M[E+1],I=M[E+2];u.push(b,S,S,I,I,b)}}else{let M=m.array;y=m.version;for(let E=0,_=M.length/3-1;E<_;E+=3){let b=E+0,S=E+1,I=E+2;u.push(b,S,S,I,I,b)}}let g=new(m.count>=65535?wo:So)(u,1);g.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Jx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=u[g];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Kx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:me("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jx(i,t,e){let n=new WeakMap,s=new Ve;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let A=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),y===!0&&(E=3);let _=a.attributes.position.count*E,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*b*4*d),I=new bo(S,_,b,d);I.type=ii,I.needsUpdate=!0;let x=E*4;for(let U=0;U<d;U++){let W=g[U],O=p[U],Z=M[U],z=_*b*4*U;for(let K=0;K<W.count;K++){let j=K*x;f===!0&&(s.fromBufferAttribute(W,K),S[z+j+0]=s.x,S[z+j+1]=s.y,S[z+j+2]=s.z,S[z+j+3]=0),m===!0&&(s.fromBufferAttribute(O,K),S[z+j+4]=s.x,S[z+j+5]=s.y,S[z+j+6]=s.z,S[z+j+7]=0),y===!0&&(s.fromBufferAttribute(Z,K),S[z+j+8]=s.x,S[z+j+9]=s.y,S[z+j+10]=s.z,S[z+j+11]=Z.itemSize===4?s.w:1)}}u={count:d,texture:I,size:new Pt(_,b)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Qx(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var tv={[qo]:"LINEAR_TONE_MAPPING",[Yo]:"REINHARD_TONE_MAPPING",[Zo]:"CINEON_TONE_MAPPING",[Jo]:"ACES_FILMIC_TONE_MAPPING",[jo]:"AGX_TONE_MAPPING",[tr]:"NEUTRAL_TONE_MAPPING",[Ko]:"CUSTOM_TONE_MAPPING"};function ev(i,t,e,n,s,r){let o=new nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ue;c.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ve([0,2,0,0,2,0],2));let h=new Fr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ee(c,h),u=new Ms(-1,1,1,-1,0,1),f=null,m=null,y=!1,g,p=null,M=[],E=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),l!==null&&l.setSize(_,b);for(let S=0;S<M.length;S++){let I=M[S];I.setSize&&I.setSize(_,b)}},this.setEffects=function(_){M=_,E=M.length>0&&M[0].isRenderPass===!0;let b=o.width,S=o.height;M.length>0&&a===null&&(a=new nn(b,S,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new nn(b,S,{type:xn,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<M.length;I++){let x=M[I];x.setSize&&x.setSize(b,S)}},this.begin=function(_,b){if(y||_.toneMapping===yi&&M.length===0)return!1;if(p=b,b!==null){let S=b.width,I=b.height;(o.width!==S||o.height!==I)&&this.setSize(S,I)}return E===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=yi,!0},this.hasRenderPass=function(){return E},this.end=function(_,b){_.toneMapping=g,y=!0;let S=o,I=a;for(let x=0;x<M.length;x++){let A=M[x];A.enabled!==!1&&(A.render(_,I,S,b),A.needsSwap!==!1&&(S=I,I=I===a?l:a))}if(f!==_.outputColorSpace||m!==_.toneMapping){f=_.outputColorSpace,m=_.toneMapping,h.defines={},we.getTransfer(f)===Ne&&(h.defines.SRGB_TRANSFER="");let x=tv[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(p),_.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Kd=new Fn,vu=new xs(1,1),jd=new bo,Qd=new pl,tp=new Ao,Ld=[],Dd=[],Nd=new Float32Array(16),Ud=new Float32Array(9),Fd=new Float32Array(4);function $r(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ld[s];if(r===void 0&&(r=new Float32Array(s),Ld[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function vn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _n(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Uc(i,t){let e=Dd[t];e===void 0&&(e=new Int32Array(t),Dd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function nv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2fv(this.addr,t),_n(e,t)}}function sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(vn(e,t))return;i.uniform3fv(this.addr,t),_n(e,t)}}function rv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4fv(this.addr,t),_n(e,t)}}function ov(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_n(e,t)}else{if(vn(e,n))return;Fd.set(n),i.uniformMatrix2fv(this.addr,!1,Fd),_n(e,n)}}function av(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_n(e,t)}else{if(vn(e,n))return;Ud.set(n),i.uniformMatrix3fv(this.addr,!1,Ud),_n(e,n)}}function lv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_n(e,t)}else{if(vn(e,n))return;Nd.set(n),i.uniformMatrix4fv(this.addr,!1,Nd),_n(e,n)}}function cv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2iv(this.addr,t),_n(e,t)}}function uv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;i.uniform3iv(this.addr,t),_n(e,t)}}function fv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4iv(this.addr,t),_n(e,t)}}function dv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2uiv(this.addr,t),_n(e,t)}}function mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;i.uniform3uiv(this.addr,t),_n(e,t)}}function gv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4uiv(this.addr,t),_n(e,t)}}function xv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vu.compareFunction=e.isReversedDepthBuffer()?Rc:Cc,r=vu):r=Kd,e.setTexture2D(t||r,s)}function vv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qd,s)}function _v(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tp,s)}function yv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jd,s)}function Mv(i){switch(i){case 5126:return nv;case 35664:return iv;case 35665:return sv;case 35666:return rv;case 35674:return ov;case 35675:return av;case 35676:return lv;case 5124:case 35670:return cv;case 35667:case 35671:return hv;case 35668:case 35672:return uv;case 35669:case 35673:return fv;case 5125:return dv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return yv}}function bv(i,t){i.uniform1fv(this.addr,t)}function Sv(i,t){let e=$r(t,this.size,2);i.uniform2fv(this.addr,e)}function wv(i,t){let e=$r(t,this.size,3);i.uniform3fv(this.addr,e)}function Tv(i,t){let e=$r(t,this.size,4);i.uniform4fv(this.addr,e)}function Ev(i,t){let e=$r(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Av(i,t){let e=$r(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cv(i,t){let e=$r(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rv(i,t){i.uniform1iv(this.addr,t)}function Pv(i,t){i.uniform2iv(this.addr,t)}function Iv(i,t){i.uniform3iv(this.addr,t)}function Lv(i,t){i.uniform4iv(this.addr,t)}function Dv(i,t){i.uniform1uiv(this.addr,t)}function Nv(i,t){i.uniform2uiv(this.addr,t)}function Uv(i,t){i.uniform3uiv(this.addr,t)}function Fv(i,t){i.uniform4uiv(this.addr,t)}function Ov(i,t,e){let n=this.cache,s=t.length,r=Uc(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=vu:o=Kd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Bv(i,t,e){let n=this.cache,s=t.length,r=Uc(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qd,r[o])}function zv(i,t,e){let n=this.cache,s=t.length,r=Uc(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||tp,r[o])}function kv(i,t,e){let n=this.cache,s=t.length,r=Uc(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jd,r[o])}function Hv(i){switch(i){case 5126:return bv;case 35664:return Sv;case 35665:return wv;case 35666:return Tv;case 35674:return Ev;case 35675:return Av;case 35676:return Cv;case 5124:case 35670:return Rv;case 35667:case 35671:return Pv;case 35668:case 35672:return Iv;case 35669:case 35673:return Lv;case 5125:return Dv;case 36294:return Nv;case 36295:return Uv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return kv}}var _u=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mv(e.type)}},yu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hv(e.type)}},Mu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},gu=/(\w+)(\])?(\[|\.)?/g;function Od(i,t){i.seq.push(t),i.map[t.id]=t}function Vv(i,t,e){let n=i.name,s=n.length;for(gu.lastIndex=0;;){let r=gu.exec(n),o=gu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Od(e,c===void 0?new _u(a,i,t):new yu(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Mu(a),Od(e,d)),e=d}}}var Xr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Vv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Bd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Gv=37297,Wv=0;function Xv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var zd=new xe;function $v(i){we._getMatrix(zd,we.workingColorSpace,i);let t=`mat3( ${zd.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(i)){case yo:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Xv(i.getShaderSource(t),a)}else return r}function qv(i,t){let e=$v(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Yv={[qo]:"Linear",[Yo]:"Reinhard",[Zo]:"Cineon",[Jo]:"ACESFilmic",[jo]:"AgX",[tr]:"Neutral",[Ko]:"Custom"};function Zv(i,t){let e=Yv[t];return e===void 0?(ce("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ic=new N;function Jv(){we.getLuminanceCoefficients(Ic);let i=Ic.x.toFixed(4),t=Ic.y.toFixed(4),e=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function jv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ha(i){return i!==""}function Hd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function bu(i){return i.replace(t_,n_)}var e_=new Map;function n_(i,t){let e=be[t];if(e===void 0){let n=e_.get(t);if(n!==void 0)e=be[n],ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bu(e)}var i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(i){return i.replace(i_,s_)}function s_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var r_={[js]:"SHADOWMAP_TYPE_PCF",[Br]:"SHADOWMAP_TYPE_VSM"};function o_(i){return r_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var a_={[Ts]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE",[Qo]:"ENVMAP_TYPE_CUBE_UV"};function l_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":a_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var c_={[er]:"ENVMAP_MODE_REFRACTION"};function h_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":c_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var u_={[kl]:"ENVMAP_BLENDING_MULTIPLY",[sd]:"ENVMAP_BLENDING_MIX",[rd]:"ENVMAP_BLENDING_ADD"};function f_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":u_[i.combine]||"ENVMAP_BLENDING_NONE"}function d_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function p_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=o_(e),c=l_(e),h=h_(e),d=f_(e),u=d_(e),f=Kv(e),m=jv(r),y=s.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ha).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ha).join(`
`),p.length>0&&(p+=`
`)):(g=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),p=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?be.tonemapping_pars_fragment:"",e.toneMapping!==yi?Zv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,qv("linearToOutputTexel",e.outputColorSpace),Jv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ha).join(`
`)),o=bu(o),o=Hd(o,e),o=Vd(o,e),a=bu(a),a=Hd(a,e),a=Vd(a,e),o=Gd(o),a=Gd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=M+g+o,_=M+p+a,b=Bd(s,s.VERTEX_SHADER,E),S=Bd(s,s.FRAGMENT_SHADER,_);s.attachShader(y,b),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(W){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(y)||"",Z=s.getShaderInfoLog(b)||"",z=s.getShaderInfoLog(S)||"",K=O.trim(),j=Z.trim(),lt=z.trim(),ht=!0,ot=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ht=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,b,S);else{let ut=kd(s,b,"vertex"),vt=kd(s,S,"fragment");me("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+K+`
`+ut+`
`+vt)}else K!==""?ce("WebGLProgram: Program Info Log:",K):(j===""||lt==="")&&(ot=!1);ot&&(W.diagnostics={runnable:ht,programLog:K,vertexShader:{log:j,prefix:g},fragmentShader:{log:lt,prefix:p}})}s.deleteShader(b),s.deleteShader(S),x=new Xr(s,y),A=Qv(s,y)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(y,Gv)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=S,this}var m_=0,Su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wu(t),e.set(t,n)),n}},wu=class{constructor(t){this.id=m_++,this.code=t,this.usedTimes=0}};function g_(i){return i===As||i===ra||i===oa}function x_(i,t,e,n,s,r){let o=new Cr,a=new Su,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,A,U,W,O,Z){let z=W.fog,K=O.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?W.environment:null,lt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ht=t.get(x.envMap||j,lt),ot=ht&&ht.mapping===Qo?ht.image.height:null,ut=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&ce("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let vt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,bt=vt!==void 0?vt.length:0,mt=0;K.morphAttributes.position!==void 0&&(mt=1),K.morphAttributes.normal!==void 0&&(mt=2),K.morphAttributes.color!==void 0&&(mt=3);let ge,le,Se,ft;if(ut){let Ie=ki[ut];ge=Ie.vertexShader,le=Ie.fragmentShader}else{ge=x.vertexShader,le=x.fragmentShader;let Ie=a.getVertexShaderStage(x),Me=a.getFragmentShaderStage(x);a.update(x,Ie,Me),Se=Ie.id,ft=Me.id}let xt=i.getRenderTarget(),Ot=i.state.buffers.depth.getReversed(),F=O.isInstancedMesh===!0,dt=O.isBatchedMesh===!0,Rt=!!x.map,wt=!!x.matcap,Vt=!!ht,Ft=!!x.aoMap,Gt=!!x.lightMap,Nt=!!x.bumpMap&&x.wireframe===!1,$t=!!x.normalMap,oe=!!x.displacementMap,Pe=!!x.emissiveMap,ie=!!x.metalnessMap,ue=!!x.roughnessMap,G=x.anisotropy>0,fe=x.clearcoat>0,ae=x.dispersion>0,R=x.retroreflectivity>0,v=x.iridescence>0,q=x.sheen>0,it=x.transmission>0,T=G&&!!x.anisotropyMap,D=fe&&!!x.clearcoatMap,$=fe&&!!x.clearcoatNormalMap,L=fe&&!!x.clearcoatRoughnessMap,k=v&&!!x.iridescenceMap,st=v&&!!x.iridescenceThicknessMap,Y=q&&!!x.sheenColorMap,gt=q&&!!x.sheenRoughnessMap,Tt=!!x.specularMap,Dt=!!x.specularColorMap,qt=!!x.specularIntensityMap,jt=it&&!!x.transmissionMap,B=it&&!!x.thicknessMap,_t=!!x.gradientMap,nt=!!x.alphaMap,pt=x.alphaTest>0,It=!!x.alphaHash,yt=!!x.extensions,Kt=yi;x.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Kt=i.toneMapping);let Zt={shaderID:ut,shaderType:x.type,shaderName:x.name,vertexShader:ge,fragmentShader:le,defines:x.defines,customVertexShaderID:Se,customFragmentShaderID:ft,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:dt,batchingColor:dt&&O._colorsTexture!==null,instancing:F,instancingColor:F&&O.instanceColor!==null,instancingMorph:F&&O.morphTexture!==null,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:we.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Rt,matcap:wt,envMap:Vt,envMapMode:Vt&&ht.mapping,envMapCubeUVHeight:ot,aoMap:Ft,lightMap:Gt,bumpMap:Nt,normalMap:$t,displacementMap:oe,emissiveMap:Pe,normalMapObjectSpace:$t&&x.normalMapType===ld,normalMapTangentSpace:$t&&x.normalMapType===aa,packedNormalMap:$t&&x.normalMapType===aa&&g_(x.normalMap.format),metalnessMap:ie,roughnessMap:ue,anisotropy:G,anisotropyMap:T,clearcoat:fe,clearcoatMap:D,clearcoatNormalMap:$,clearcoatRoughnessMap:L,dispersion:ae,retroreflection:R,iridescence:v,iridescenceMap:k,iridescenceThicknessMap:st,sheen:q,sheenColorMap:Y,sheenRoughnessMap:gt,specularMap:Tt,specularColorMap:Dt,specularIntensityMap:qt,transmission:it,transmissionMap:jt,thicknessMap:B,gradientMap:_t,opaque:x.transparent===!1&&x.blending===zr&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:pt,alphaHash:It,combine:x.combine,mapUv:Rt&&m(x.map.channel),aoMapUv:Ft&&m(x.aoMap.channel),lightMapUv:Gt&&m(x.lightMap.channel),bumpMapUv:Nt&&m(x.bumpMap.channel),normalMapUv:$t&&m(x.normalMap.channel),displacementMapUv:oe&&m(x.displacementMap.channel),emissiveMapUv:Pe&&m(x.emissiveMap.channel),metalnessMapUv:ie&&m(x.metalnessMap.channel),roughnessMapUv:ue&&m(x.roughnessMap.channel),anisotropyMapUv:T&&m(x.anisotropyMap.channel),clearcoatMapUv:D&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:$&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:k&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:st&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&m(x.sheenRoughnessMap.channel),specularMapUv:Tt&&m(x.specularMap.channel),specularColorMapUv:Dt&&m(x.specularColorMap.channel),specularIntensityMapUv:qt&&m(x.specularIntensityMap.channel),transmissionMapUv:jt&&m(x.transmissionMap.channel),thicknessMapUv:B&&m(x.thicknessMap.channel),alphaMapUv:nt&&m(x.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&($t||G),vertexNormals:!!K.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(Rt||nt),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||K.attributes.normal===void 0&&$t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ot,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:mt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Rt&&x.map.isVideoTexture===!0&&we.getTransfer(x.map.colorSpace)===Ne,decodeVideoTextureEmissive:Pe&&x.emissiveMap.isVideoTexture===!0&&we.getTransfer(x.emissiveMap.colorSpace)===Ne,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bi,flipSided:x.side===An,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:yt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&x.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function g(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)A.push(U),A.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(p(A,x),M(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function M(x,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function E(x){let A=f[x.type],U;if(A){let W=ki[A];U=os.clone(W.uniforms)}else U=x.uniforms;return U}function _(x,A){let U=h.get(A);return U!==void 0?++U.usedTimes:(U=new p_(i,A,x,s),c.push(U),h.set(A,U)),U}function b(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function I(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:E,acquireProgram:_,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:I}}function v_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function __(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Xd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $d(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,y,g,p){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:p},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=m,M.materialVariant=o(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=g,M.group=p),t++,M}function l(u,f,m,y,g,p,M){M.reversedDepth===!0&&(g=-g);let E=a(u,f,m,y,g,p);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):e.push(E)}function c(u,f,m,y,g,p){let M=a(u,f,m,y,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||__),n.length>1&&n.sort(f||Xd),s.length>1&&s.sort(f||Xd)}function d(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function y_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new $d,i.set(n,[o])):s>=r.length?(o=new $d,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function M_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new ne};break;case"SpotLight":e={position:new N,direction:new N,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function b_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var S_=0;function w_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function T_(i){let t=new M_,e=b_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Le,o=new Le;function a(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,M=0,E=0,_=0,b=0,S=0,I=0,x=0,A=0,U=0;c.sort(w_);for(let O=0,Z=c.length;O<Z;O++){let z=c[O],K=z.color,j=z.intensity,lt=z.distance,ht=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===As?ht=z.shadow.map.texture:ht=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)h+=K.r*j,d+=K.g*j,u+=K.b*j;else if(z.isLightProbe){for(let ot=0;ot<9;ot++)n.probe[ot].addScaledVector(z.sh.coefficients[ot],j);U++}else if(z.isSunLight){let ot=t.get(z);if(ot.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ut=z.shadow,vt=e.get(z);vt.shadowIntensity=ut.intensity,vt.shadowBias=ut.bias,vt.shadowNormalBias=ut.normalBias,vt.shadowRadius=ut.radius,vt.shadowMapSize.copy(ut.mapSize).multiply(ut.getFrameExtents()),n.sunShadow[m]=vt,n.sunShadowMap[m]=ht;let bt=ut.getViewportCount();for(let mt=0;mt<bt;mt++)n.sunShadowMatrix[y+mt]=ut.getMatrix(mt),n.sunShadowCascade[y+mt]=ut._cascadeData[mt];y+=bt,m++}n.sun[f]=ot,f++}else if(z.isDirectionalLight){let ot=t.get(z);if(ot.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ut=z.shadow,vt=e.get(z);vt.shadowIntensity=ut.intensity,vt.shadowBias=ut.bias,vt.shadowNormalBias=ut.normalBias,vt.shadowRadius=ut.radius,vt.shadowMapSize=ut.mapSize,n.directionalShadow[g]=vt,n.directionalShadowMap[g]=ht,n.directionalShadowMatrix[g]=z.shadow.matrix,b++}n.directional[g]=ot,g++}else if(z.isSpotLight){let ot=t.get(z);ot.position.setFromMatrixPosition(z.matrixWorld),ot.color.copy(K).multiplyScalar(j),ot.distance=lt,ot.coneCos=Math.cos(z.angle),ot.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ot.decay=z.decay,n.spot[M]=ot;let ut=z.shadow;if(z.map&&(n.spotLightMap[x]=z.map,x++,ut.updateMatrices(z),z.castShadow&&A++),n.spotLightMatrix[M]=ut.matrix,z.castShadow){let vt=e.get(z);vt.shadowIntensity=ut.intensity,vt.shadowBias=ut.bias,vt.shadowNormalBias=ut.normalBias,vt.shadowRadius=ut.radius,vt.shadowMapSize=ut.mapSize,n.spotShadow[M]=vt,n.spotShadowMap[M]=ht,I++}M++}else if(z.isRectAreaLight){let ot=t.get(z);ot.color.copy(K).multiplyScalar(j),ot.halfWidth.set(z.width*.5,0,0),ot.halfHeight.set(0,z.height*.5,0),n.rectArea[E]=ot,E++}else if(z.isPointLight){let ot=t.get(z);if(ot.color.copy(z.color).multiplyScalar(z.intensity),ot.distance=z.distance,ot.decay=z.decay,z.castShadow){let ut=z.shadow,vt=e.get(z);vt.shadowIntensity=ut.intensity,vt.shadowBias=ut.bias,vt.shadowNormalBias=ut.normalBias,vt.shadowRadius=ut.radius,vt.shadowMapSize=ut.mapSize,vt.shadowCameraNear=ut.camera.near,vt.shadowCameraFar=ut.camera.far,n.pointShadow[p]=vt,n.pointShadowMap[p]=ht,n.pointShadowMatrix[p]=z.shadow.matrix,S++}n.point[p]=ot,p++}else if(z.isHemisphereLight){let ot=t.get(z);ot.skyColor.copy(z.color).multiplyScalar(j),ot.groundColor.copy(z.groundColor).multiplyScalar(j),n.hemi[_]=ot,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xt.LTC_FLOAT_1,n.rectAreaLTC2=Xt.LTC_FLOAT_2):(n.rectAreaLTC1=Xt.LTC_HALF_1,n.rectAreaLTC2=Xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let W=n.hash;(W.sunLength!==f||W.directionalLength!==g||W.pointLength!==p||W.spotLength!==M||W.rectAreaLength!==E||W.hemiLength!==_||W.numSunShadows!==m||W.numDirectionalShadows!==b||W.numPointShadows!==S||W.numSpotShadows!==I||W.numSpotMaps!==x||W.numLightProbes!==U)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=E,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=U,W.sunLength=f,W.directionalLength=g,W.pointLength=p,W.spotLength=M,W.rectAreaLength=E,W.hemiLength=_,W.numSunShadows=m,W.numDirectionalShadows=b,W.numPointShadows=S,W.numSpotShadows=I,W.numSpotMaps=x,W.numLightProbes=U,n.version=S_++)}function l(c,h){let d=0,u=0,f=0,m=0,y=0,g=0,p=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let _=c[M];if(_.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(_.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let b=n.rectArea[y];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),y++}else if(_.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function qd(i){let t=new T_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function E_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new qd(i),t.set(s,[a])):r>=o.length?(a=new qd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`,R_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],P_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Yd=new Le,ca=new N,xu=new N;function I_(i,t,e){let n=new Pr,s=new Pt,r=new Pt,o=new Ve,a=new Zs,l=new El,c={},h=e.maxTextureSize,d={[Ss]:An,[An]:Ss,[Bi]:Bi},u=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:A_,fragmentShader:C_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ue;m.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ee(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let p=this.type;this.render=function(S,I,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===zf&&(ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=js);let A=i.getRenderTarget(),U=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ei),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Z=p!==this.type;Z&&I.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(K=>K.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,K=S.length;z<K;z++){let j=S[z],lt=j.shadow;if(lt===void 0){ce("WebGLShadowMap:",j,"has no shadow.");continue}if(lt.autoUpdate===!1&&lt.needsUpdate===!1)continue;s.copy(lt.mapSize);let ht=lt.getFrameExtents();s.multiply(ht),r.copy(lt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,lt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,lt.mapSize.y=r.y));let ot=i.state.buffers.depth.getReversed();if(lt.camera._reversedDepth=ot,lt.map===null||Z===!0){if(lt.map!==null&&(lt.map.depthTexture!==null&&(lt.map.depthTexture.dispose(),lt.map.depthTexture=null),lt.map.dispose()),this.type===Br){if(j.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}lt.map=new nn(s.x,s.y,{format:As,type:xn,minFilter:En,magFilter:En,generateMipmaps:!1}),lt.map.texture.name=j.name+".shadowMap",lt.map.depthTexture=new xs(s.x,s.y,ii),lt.map.depthTexture.name=j.name+".shadowMapDepth",lt.map.depthTexture.format=Li,lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=Mn,lt.map.depthTexture.magFilter=Mn}else j.isPointLight?(lt.map=new Lc(s.x),lt.map.depthTexture=new yl(s.x,Mi)):(lt.map=new nn(s.x,s.y),lt.map.depthTexture=new xs(s.x,s.y,Mi)),lt.map.depthTexture.name=j.name+".shadowMap",lt.map.depthTexture.format=Li,this.type===js?(lt.map.depthTexture.compareFunction=ot?Rc:Cc,lt.map.depthTexture.minFilter=En,lt.map.depthTexture.magFilter=En):(lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=Mn,lt.map.depthTexture.magFilter=Mn);lt.camera.updateProjectionMatrix()}lt.map.isWebGLCubeRenderTarget!==!0&&(lt.map.width!==s.x||lt.map.height!==s.y)&&lt.map.setSize(s.x,s.y);let ut=lt.map.isWebGLCubeRenderTarget?6:lt.getViewportCount();j.isPointLight!==!0&&lt.updateMatrices(j,x);for(let vt=0;vt<ut;vt++){let bt=lt.getCamera(vt);if(j.isPointLight){let mt=lt.camera,ge=lt.matrix,le=j.distance||mt.far;le!==mt.far&&(mt.far=le,mt.updateProjectionMatrix()),ca.setFromMatrixPosition(j.matrixWorld),mt.position.copy(ca),xu.copy(mt.position),xu.add(R_[vt]),mt.up.copy(P_[vt]),mt.lookAt(xu),mt.updateMatrixWorld(),ge.makeTranslation(-ca.x,-ca.y,-ca.z),Yd.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),lt._frustum.setFromProjectionMatrix(Yd,mt.coordinateSystem,mt.reversedDepth)}if(lt.map.isWebGLCubeRenderTarget)i.setRenderTarget(lt.map,vt),i.clear();else{vt===0&&(i.setRenderTarget(lt.map),i.clear());let mt=lt.getViewport(vt);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),O.viewport(o)}n=lt.getFrustum(vt),_(I,x,bt,j,this.type)}lt.isPointLightShadow!==!0&&this.type===Br&&M(lt,x),lt.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,U,W)};function M(S,I){let x=t.update(y);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new nn(s.x,s.y,{format:As,type:xn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(I,null,x,u,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(I,null,x,f,y,null)}function E(S,I,x,A){let U=null,W=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(W!==void 0)U=W;else if(U=x.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let O=U.uuid,Z=I.uuid,z=c[O];z===void 0&&(z={},c[O]=z);let K=z[Z];K===void 0&&(K=U.clone(),z[Z]=K,I.addEventListener("dispose",b)),U=K}if(U.visible=I.visible,U.wireframe=I.wireframe,A===Br?U.side=I.shadowSide!==null?I.shadowSide:I.side:U.side=I.shadowSide!==null?I.shadowSide:d[I.side],U.alphaMap=I.alphaMap,U.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,U.map=I.map,U.clipShadows=I.clipShadows,U.clippingPlanes=I.clippingPlanes,U.clipIntersection=I.clipIntersection,U.displacementMap=I.displacementMap,U.displacementScale=I.displacementScale,U.displacementBias=I.displacementBias,U.wireframeLinewidth=I.wireframeLinewidth,U.linewidth=I.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let O=i.properties.get(U);O.light=x}return U}function _(S,I,x,A,U){if(S.visible===!1)return;if(S.layers.test(I.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&U===Br)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let Z=t.update(S),z=S.material;if(Array.isArray(z)){let K=Z.groups;for(let j=0,lt=K.length;j<lt;j++){let ht=K[j],ot=z[ht.materialIndex];if(ot&&ot.visible){let ut=E(S,ot,A,U);S.onBeforeShadow(i,S,I,x,Z,ut,ht),i.renderBufferDirect(x,null,Z,ut,S,ht),S.onAfterShadow(i,S,I,x,Z,ut,ht)}}}else if(z.visible){let K=E(S,z,A,U);S.onBeforeShadow(i,S,I,x,Z,K,null),i.renderBufferDirect(x,null,Z,K,S,null),S.onAfterShadow(i,S,I,x,Z,K,null)}}let O=S.children;for(let Z=0,z=O.length;Z<z;Z++)_(O[Z],I,x,A,U)}function b(S){S.target.removeEventListener("dispose",b);for(let x in c){let A=c[x],U=S.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}function L_(i,t){function e(){let B=!1,_t=new Ve,nt=null,pt=new Ve(0,0,0,0);return{setMask:function(It){nt!==It&&!B&&(i.colorMask(It,It,It,It),nt=It)},setLocked:function(It){B=It},setClear:function(It,yt,Kt,Zt,Ie){Ie===!0&&(It*=Zt,yt*=Zt,Kt*=Zt),_t.set(It,yt,Kt,Zt),pt.equals(_t)===!1&&(i.clearColor(It,yt,Kt,Zt),pt.copy(_t))},reset:function(){B=!1,nt=null,pt.set(-1,0,0,0)}}}function n(){let B=!1,_t=!1,nt=null,pt=null,It=null;return{setReversed:function(yt){if(_t!==yt){let Kt=t.get("EXT_clip_control");yt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),_t=yt;let Zt=It;It=null,this.setClear(Zt)}},getReversed:function(){return _t},setTest:function(yt){yt?xt(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(yt){nt!==yt&&!B&&(i.depthMask(yt),nt=yt)},setFunc:function(yt){if(_t&&(yt=yd[yt]),pt!==yt){switch(yt){case el:i.depthFunc(i.NEVER);break;case nl:i.depthFunc(i.ALWAYS);break;case il:i.depthFunc(i.LESS);break;case wr:i.depthFunc(i.LEQUAL);break;case sl:i.depthFunc(i.EQUAL);break;case rl:i.depthFunc(i.GEQUAL);break;case ol:i.depthFunc(i.GREATER);break;case al:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=yt}},setLocked:function(yt){B=yt},setClear:function(yt){It!==yt&&(It=yt,_t&&(yt=1-yt),i.clearDepth(yt))},reset:function(){B=!1,nt=null,pt=null,It=null,_t=!1}}}function s(){let B=!1,_t=null,nt=null,pt=null,It=null,yt=null,Kt=null,Zt=null,Ie=null;return{setTest:function(Me){B||(Me?xt(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(Me){_t!==Me&&!B&&(i.stencilMask(Me),_t=Me)},setFunc:function(Me,en,ln){(nt!==Me||pt!==en||It!==ln)&&(i.stencilFunc(Me,en,ln),nt=Me,pt=en,It=ln)},setOp:function(Me,en,ln){(yt!==Me||Kt!==en||Zt!==ln)&&(i.stencilOp(Me,en,ln),yt=Me,Kt=en,Zt=ln)},setLocked:function(Me){B=Me},setClear:function(Me){Ie!==Me&&(i.clearStencil(Me),Ie=Me)},reset:function(){B=!1,_t=null,nt=null,pt=null,It=null,yt=null,Kt=null,Zt=null,Ie=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],y=null,g=!1,p=null,M=null,E=null,_=null,b=null,S=null,I=null,x=new ne(0,0,0),A=0,U=!1,W=null,O=null,Z=null,z=null,K=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),lt=!1,ht=0,ot=i.getParameter(i.VERSION);ot.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(ot)[1]),lt=ht>=1):ot.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),lt=ht>=2);let ut=null,vt={},bt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),ge=new Ve().fromArray(bt),le=new Ve().fromArray(mt);function Se(B,_t,nt,pt){let It=new Uint8Array(4),yt=i.createTexture();i.bindTexture(B,yt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<nt;Kt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(_t+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return yt}let ft={};ft[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xt(i.DEPTH_TEST),o.setFunc(wr),Nt(!1),$t(Vh),xt(i.CULL_FACE),Ft(ei);function xt(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Ot(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function F(B,_t){return u[B]!==_t?(i.bindFramebuffer(B,_t),u[B]=_t,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function dt(B,_t){let nt=m,pt=!1;if(B){nt=f.get(_t),nt===void 0&&(nt=[],f.set(_t,nt));let It=B.textures;if(nt.length!==It.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Kt=It.length;yt<Kt;yt++)nt[yt]=i.COLOR_ATTACHMENT0+yt;nt.length=It.length,pt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,pt=!0);pt&&i.drawBuffers(nt)}function Rt(B){return y!==B?(i.useProgram(B),y=B,!0):!1}let wt={[Qs]:i.FUNC_ADD,[Hf]:i.FUNC_SUBTRACT,[Vf]:i.FUNC_REVERSE_SUBTRACT};wt[Gf]=i.MIN,wt[Wf]=i.MAX;let Vt={[Xf]:i.ZERO,[$f]:i.ONE,[qf]:i.SRC_COLOR,[Xh]:i.SRC_ALPHA,[Qf]:i.SRC_ALPHA_SATURATE,[Kf]:i.DST_COLOR,[Zf]:i.DST_ALPHA,[Yf]:i.ONE_MINUS_SRC_COLOR,[$h]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[Jf]:i.ONE_MINUS_DST_ALPHA,[td]:i.CONSTANT_COLOR,[ed]:i.ONE_MINUS_CONSTANT_COLOR,[nd]:i.CONSTANT_ALPHA,[id]:i.ONE_MINUS_CONSTANT_ALPHA};function Ft(B,_t,nt,pt,It,yt,Kt,Zt,Ie,Me){if(B===ei){g===!0&&(Ot(i.BLEND),g=!1);return}if(g===!1&&(xt(i.BLEND),g=!0),B!==kf){if(B!==p||Me!==U){if((M!==Qs||b!==Qs)&&(i.blendEquation(i.FUNC_ADD),M=Qs,b=Qs),Me)switch(B){case zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ws:i.blendFunc(i.ONE,i.ONE);break;case Gh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:me("WebGLState: Invalid blending: ",B);break}else switch(B){case zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gh:me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wh:me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:me("WebGLState: Invalid blending: ",B);break}E=null,_=null,S=null,I=null,x.set(0,0,0),A=0,p=B,U=Me}return}It=It||_t,yt=yt||nt,Kt=Kt||pt,(_t!==M||It!==b)&&(i.blendEquationSeparate(wt[_t],wt[It]),M=_t,b=It),(nt!==E||pt!==_||yt!==S||Kt!==I)&&(i.blendFuncSeparate(Vt[nt],Vt[pt],Vt[yt],Vt[Kt]),E=nt,_=pt,S=yt,I=Kt),(Zt.equals(x)===!1||Ie!==A)&&(i.blendColor(Zt.r,Zt.g,Zt.b,Ie),x.copy(Zt),A=Ie),p=B,U=!1}function Gt(B,_t){B.side===Bi?Ot(i.CULL_FACE):xt(i.CULL_FACE);let nt=B.side===An;_t&&(nt=!nt),Nt(nt),B.blending===zr&&B.transparent===!1?Ft(ei):Ft(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let pt=B.stencilWrite;a.setTest(pt),pt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Pe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(B){W!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),W=B)}function $t(B){B!==Of?(xt(i.CULL_FACE),B!==O&&(B===Vh?i.cullFace(i.BACK):B===Bf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),O=B}function oe(B){B!==Z&&(lt&&i.lineWidth(B),Z=B)}function Pe(B,_t,nt){B?(xt(i.POLYGON_OFFSET_FILL),(z!==_t||K!==nt)&&(z=_t,K=nt,o.getReversed()&&(_t=-_t),i.polygonOffset(_t,nt))):Ot(i.POLYGON_OFFSET_FILL)}function ie(B){B?xt(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function ue(B){B===void 0&&(B=i.TEXTURE0+j-1),ut!==B&&(i.activeTexture(B),ut=B)}function G(B,_t,nt){nt===void 0&&(ut===null?nt=i.TEXTURE0+j-1:nt=ut);let pt=vt[nt];pt===void 0&&(pt={type:void 0,texture:void 0},vt[nt]=pt),(pt.type!==B||pt.texture!==_t)&&(ut!==nt&&(i.activeTexture(nt),ut=nt),i.bindTexture(B,_t||ft[B]),pt.type=B,pt.texture=_t)}function fe(){let B=vt[ut];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ae(){try{i.compressedTexImage2D(...arguments)}catch(B){me("WebGLState:",B)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(B){me("WebGLState:",B)}}function v(){try{i.texSubImage2D(...arguments)}catch(B){me("WebGLState:",B)}}function q(){try{i.texSubImage3D(...arguments)}catch(B){me("WebGLState:",B)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(B){me("WebGLState:",B)}}function T(){try{i.compressedTexSubImage3D(...arguments)}catch(B){me("WebGLState:",B)}}function D(){try{i.texStorage2D(...arguments)}catch(B){me("WebGLState:",B)}}function $(){try{i.texStorage3D(...arguments)}catch(B){me("WebGLState:",B)}}function L(){try{i.texImage2D(...arguments)}catch(B){me("WebGLState:",B)}}function k(){try{i.texImage3D(...arguments)}catch(B){me("WebGLState:",B)}}function st(B){return d[B]!==void 0?d[B]:i.getParameter(B)}function Y(B,_t){d[B]!==_t&&(i.pixelStorei(B,_t),d[B]=_t)}function gt(B){ge.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ge.copy(B))}function Tt(B){le.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),le.copy(B))}function Dt(B,_t){let nt=c.get(_t);nt===void 0&&(nt=new WeakMap,c.set(_t,nt));let pt=nt.get(B);pt===void 0&&(pt=i.getUniformBlockIndex(_t,B.name),nt.set(B,pt))}function qt(B,_t){let pt=c.get(_t).get(B);l.get(_t)!==pt&&(i.uniformBlockBinding(_t,pt,B.__bindingPointIndex),l.set(_t,pt))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ut=null,vt={},u={},f=new WeakMap,m=[],y=null,g=!1,p=null,M=null,E=null,_=null,b=null,S=null,I=null,x=new ne(0,0,0),A=0,U=!1,W=null,O=null,Z=null,z=null,K=null,ge.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xt,disable:Ot,bindFramebuffer:F,drawBuffers:dt,useProgram:Rt,setBlending:Ft,setMaterial:Gt,setFlipSided:Nt,setCullFace:$t,setLineWidth:oe,setPolygonOffset:Pe,setScissorTest:ie,activeTexture:ue,bindTexture:G,unbindTexture:fe,compressedTexImage2D:ae,compressedTexImage3D:R,texImage2D:L,texImage3D:k,pixelStorei:Y,getParameter:st,updateUBOMapping:Dt,uniformBlockBinding:qt,texStorage2D:D,texStorage3D:$,texSubImage2D:v,texSubImage3D:q,compressedTexSubImage2D:it,compressedTexSubImage3D:T,scissor:gt,viewport:Tt,reset:jt}}function D_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,v){return m?new OffscreenCanvas(R,v):Mo("canvas")}function g(R,v,q){let it=1,T=ae(R);if((T.width>q||T.height>q)&&(it=q/Math.max(T.width,T.height)),it<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let D=Math.floor(it*T.width),$=Math.floor(it*T.height);u===void 0&&(u=y(D,$));let L=v?y(D,$):u;return L.width=D,L.height=$,L.getContext("2d").drawImage(R,0,0,D,$),ce("WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+D+"x"+$+")."),L}else return"data"in R&&ce("WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),R;return R}function p(R){return R.generateMipmaps}function M(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(R,v,q,it,T,D=!1){if(R!==null){if(i[R]!==void 0)return i[R];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $;it&&($=t.get("EXT_texture_norm16"),$||ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let L=v;if(v===i.RED&&(q===i.FLOAT&&(L=i.R32F),q===i.HALF_FLOAT&&(L=i.R16F),q===i.UNSIGNED_BYTE&&(L=i.R8),q===i.UNSIGNED_SHORT&&$&&(L=$.R16_EXT),q===i.SHORT&&$&&(L=$.R16_SNORM_EXT)),v===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(L=i.R8UI),q===i.UNSIGNED_SHORT&&(L=i.R16UI),q===i.UNSIGNED_INT&&(L=i.R32UI),q===i.BYTE&&(L=i.R8I),q===i.SHORT&&(L=i.R16I),q===i.INT&&(L=i.R32I)),v===i.RG&&(q===i.FLOAT&&(L=i.RG32F),q===i.HALF_FLOAT&&(L=i.RG16F),q===i.UNSIGNED_BYTE&&(L=i.RG8),q===i.UNSIGNED_SHORT&&$&&(L=$.RG16_EXT),q===i.SHORT&&$&&(L=$.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(L=i.RG8UI),q===i.UNSIGNED_SHORT&&(L=i.RG16UI),q===i.UNSIGNED_INT&&(L=i.RG32UI),q===i.BYTE&&(L=i.RG8I),q===i.SHORT&&(L=i.RG16I),q===i.INT&&(L=i.RG32I)),v===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(L=i.RGB8UI),q===i.UNSIGNED_SHORT&&(L=i.RGB16UI),q===i.UNSIGNED_INT&&(L=i.RGB32UI),q===i.BYTE&&(L=i.RGB8I),q===i.SHORT&&(L=i.RGB16I),q===i.INT&&(L=i.RGB32I)),v===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(L=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(L=i.RGBA16UI),q===i.UNSIGNED_INT&&(L=i.RGBA32UI),q===i.BYTE&&(L=i.RGBA8I),q===i.SHORT&&(L=i.RGBA16I),q===i.INT&&(L=i.RGBA32I)),v===i.RGB&&(q===i.UNSIGNED_SHORT&&$&&(L=$.RGB16_EXT),q===i.SHORT&&$&&(L=$.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(L=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(L=i.R11F_G11F_B10F)),v===i.RGBA){let k=D?yo:we.getTransfer(T);q===i.FLOAT&&(L=i.RGBA32F),q===i.HALF_FLOAT&&(L=i.RGBA16F),q===i.UNSIGNED_BYTE&&(L=k===Ne?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&$&&(L=$.RGBA16_EXT),q===i.SHORT&&$&&(L=$.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(L=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(L=i.RGB5_A1)}return(L===i.R16F||L===i.R32F||L===i.RG16F||L===i.RG32F||L===i.RGBA16F||L===i.RGBA32F)&&t.get("EXT_color_buffer_float"),L}function b(R,v){let q;return R?v===null||v===Mi||v===Hr?q=i.DEPTH24_STENCIL8:v===ii?q=i.DEPTH32F_STENCIL8:v===kr&&(q=i.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mi||v===Hr?q=i.DEPTH_COMPONENT24:v===ii?q=i.DEPTH_COMPONENT32F:v===kr&&(q=i.DEPTH_COMPONENT16),q}function S(R,v){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Mn&&R.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function I(R){let v=R.target;v.removeEventListener("dispose",I),A(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(R){let v=R.target;v.removeEventListener("dispose",x),W(v)}function A(R){let v=n.get(R);if(v.__webglInit===void 0)return;let q=R.source,it=f.get(q);if(it){let T=it[v.__cacheKey];T.usedTimes--,T.usedTimes===0&&U(R),Object.keys(it).length===0&&f.delete(q)}n.remove(R)}function U(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let q=R.source,it=f.get(q);delete it[v.__cacheKey],o.memory.textures--}function W(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(v.__webglFramebuffer[it]))for(let T=0;T<v.__webglFramebuffer[it].length;T++)i.deleteFramebuffer(v.__webglFramebuffer[it][T]);else i.deleteFramebuffer(v.__webglFramebuffer[it]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[it])}else{if(Array.isArray(v.__webglFramebuffer))for(let it=0;it<v.__webglFramebuffer.length;it++)i.deleteFramebuffer(v.__webglFramebuffer[it]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let it=0;it<v.__webglColorRenderbuffer.length;it++)v.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[it]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let q=R.textures;for(let it=0,T=q.length;it<T;it++){let D=n.get(q[it]);D.__webglTexture&&(i.deleteTexture(D.__webglTexture),o.memory.textures--),n.remove(q[it])}n.remove(R)}let O=0;function Z(){O=0}function z(){return O}function K(R){O=R}function j(){let R=O;return R>=s.maxTextures&&ce("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function lt(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function ht(R,v){let q=n.get(R);if(R.isVideoTexture&&G(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&q.__version!==R.version){let it=R.image;if(it===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(q,R,v);return}}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+v)}function ot(R,v){let q=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){Ot(q,R,v);return}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+v)}function ut(R,v){let q=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){Ot(q,R,v);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+v)}function vt(R,v){let q=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&q.__version!==R.version){F(q,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+v)}let bt={[ll]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[cl]:i.MIRRORED_REPEAT},mt={[Mn]:i.NEAREST,[od]:i.NEAREST_MIPMAP_NEAREST,[ta]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Gl]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},ge={[hd]:i.NEVER,[md]:i.ALWAYS,[ud]:i.LESS,[Cc]:i.LEQUAL,[fd]:i.EQUAL,[Rc]:i.GEQUAL,[dd]:i.GREATER,[pd]:i.NOTEQUAL};function le(R,v){if(v.type===ii&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===En||v.magFilter===Gl||v.magFilter===ta||v.magFilter===ni||v.minFilter===En||v.minFilter===Gl||v.minFilter===ta||v.minFilter===ni)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,bt[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,bt[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,bt[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,mt[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ge[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Mn||v.minFilter!==ta&&v.minFilter!==ni||v.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Se(R,v){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",I));let it=v.source,T=f.get(it);T===void 0&&(T={},f.set(it,T));let D=lt(v);if(D!==R.__cacheKey){T[D]===void 0&&(T[D]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),T[D].usedTimes++;let $=T[R.__cacheKey];$!==void 0&&(T[R.__cacheKey].usedTimes--,$.usedTimes===0&&U(v)),R.__cacheKey=D,R.__webglTexture=T[D].texture}return q}function ft(R,v,q){return Math.floor(Math.floor(R/q)/v)}function xt(R,v,q,it){let D=R.updateRanges;if(D.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,q,it,v.data);else{D.sort((Y,gt)=>Y.start-gt.start);let $=0;for(let Y=1;Y<D.length;Y++){let gt=D[$],Tt=D[Y],Dt=gt.start+gt.count,qt=ft(Tt.start,v.width,4),jt=ft(gt.start,v.width,4);Tt.start<=Dt+1&&qt===jt&&ft(Tt.start+Tt.count-1,v.width,4)===qt?gt.count=Math.max(gt.count,Tt.start+Tt.count-gt.start):(++$,D[$]=Tt)}D.length=$+1;let L=e.getParameter(i.UNPACK_ROW_LENGTH),k=e.getParameter(i.UNPACK_SKIP_PIXELS),st=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Y=0,gt=D.length;Y<gt;Y++){let Tt=D[Y],Dt=Math.floor(Tt.start/4),qt=Math.ceil(Tt.count/4),jt=Dt%v.width,B=Math.floor(Dt/v.width),_t=qt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,jt,B,_t,nt,q,it,v.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,L),e.pixelStorei(i.UNPACK_SKIP_PIXELS,k),e.pixelStorei(i.UNPACK_SKIP_ROWS,st)}}function Ot(R,v,q){let it=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(it=i.TEXTURE_3D);let T=Se(R,v),D=v.source;e.bindTexture(it,R.__webglTexture,i.TEXTURE0+q);let $=n.get(D);if(D.version!==$.__version||T===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let nt=we.getPrimaries(we.workingColorSpace),pt=v.colorSpace===rs?null:we.getPrimaries(v.colorSpace),It=v.colorSpace===rs||nt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let k=g(v.image,!1,s.maxTextureSize);k=fe(v,k);let st=r.convert(v.format,v.colorSpace),Y=r.convert(v.type),gt=_(v.internalFormat,st,Y,v.normalized,v.colorSpace,v.isVideoTexture);le(it,v);let Tt,Dt=v.mipmaps,qt=v.isVideoTexture!==!0,jt=$.__version===void 0||T===!0,B=D.dataReady,_t=S(v,k);if(v.isDepthTexture)gt=b(v.format===Es,v.type),jt&&(qt?e.texStorage2D(i.TEXTURE_2D,1,gt,k.width,k.height):e.texImage2D(i.TEXTURE_2D,0,gt,k.width,k.height,0,st,Y,null));else if(v.isDataTexture)if(Dt.length>0){qt&&jt&&e.texStorage2D(i.TEXTURE_2D,_t,gt,Dt[0].width,Dt[0].height);for(let nt=0,pt=Dt.length;nt<pt;nt++)Tt=Dt[nt],qt?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Tt.width,Tt.height,st,Y,Tt.data):e.texImage2D(i.TEXTURE_2D,nt,gt,Tt.width,Tt.height,0,st,Y,Tt.data);v.generateMipmaps=!1}else qt?(jt&&e.texStorage2D(i.TEXTURE_2D,_t,gt,k.width,k.height),B&&xt(v,k,st,Y)):e.texImage2D(i.TEXTURE_2D,0,gt,k.width,k.height,0,st,Y,k.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,gt,Dt[0].width,Dt[0].height,k.depth);for(let nt=0,pt=Dt.length;nt<pt;nt++)if(Tt=Dt[nt],v.format!==si)if(st!==null)if(qt){if(B)if(v.layerUpdates.size>0){let It=ou(Tt.width,Tt.height,v.format,v.type);for(let yt of v.layerUpdates){let Kt=Tt.data.subarray(yt*It/Tt.data.BYTES_PER_ELEMENT,(yt+1)*It/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,yt,Tt.width,Tt.height,1,st,Kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Tt.width,Tt.height,k.depth,st,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,gt,Tt.width,Tt.height,k.depth,0,Tt.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Tt.width,Tt.height,k.depth,st,Y,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,gt,Tt.width,Tt.height,k.depth,0,st,Y,Tt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{qt&&jt&&e.texStorage2D(i.TEXTURE_2D,_t,gt,Dt[0].width,Dt[0].height);for(let nt=0,pt=Dt.length;nt<pt;nt++)Tt=Dt[nt],v.format!==si?st!==null?qt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,Tt.width,Tt.height,st,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,gt,Tt.width,Tt.height,0,Tt.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Tt.width,Tt.height,st,Y,Tt.data):e.texImage2D(i.TEXTURE_2D,nt,gt,Tt.width,Tt.height,0,st,Y,Tt.data)}else if(v.isDataArrayTexture)if(qt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,gt,k.width,k.height,k.depth),B)if(v.layerUpdates.size>0){let nt=ou(k.width,k.height,v.format,v.type);for(let pt of v.layerUpdates){let It=k.data.subarray(pt*nt/k.data.BYTES_PER_ELEMENT,(pt+1)*nt/k.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,k.width,k.height,1,st,Y,It)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,st,Y,k.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,k.width,k.height,k.depth,0,st,Y,k.data);else if(v.isData3DTexture)qt?(jt&&e.texStorage3D(i.TEXTURE_3D,_t,gt,k.width,k.height,k.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,st,Y,k.data)):e.texImage3D(i.TEXTURE_3D,0,gt,k.width,k.height,k.depth,0,st,Y,k.data);else if(v.isFramebufferTexture){if(jt)if(qt)e.texStorage2D(i.TEXTURE_2D,_t,gt,k.width,k.height);else{let nt=k.width,pt=k.height;for(let It=0;It<_t;It++)e.texImage2D(i.TEXTURE_2D,It,gt,nt,pt,0,st,Y,null),nt>>=1,pt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),k.parentNode!==nt){nt.appendChild(k),d.add(v),nt.onpaint=pt=>{let It=pt.changedElements;for(let yt of d)It.includes(yt.image)&&(yt.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,k);else{let It=i.RGBA,yt=i.RGBA,Kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,yt,Kt,k)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(qt&&jt){let nt=ae(Dt[0]);e.texStorage2D(i.TEXTURE_2D,_t,gt,nt.width,nt.height)}for(let nt=0,pt=Dt.length;nt<pt;nt++)Tt=Dt[nt],qt?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,st,Y,Tt):e.texImage2D(i.TEXTURE_2D,nt,gt,st,Y,Tt);v.generateMipmaps=!1}else if(qt){if(jt){let nt=ae(k);e.texStorage2D(i.TEXTURE_2D,_t,gt,nt.width,nt.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st,Y,k)}else e.texImage2D(i.TEXTURE_2D,0,gt,st,Y,k);p(v)&&M(it),$.__version=D.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function F(R,v,q){if(v.image.length!==6)return;let it=Se(R,v),T=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+q);let D=n.get(T);if(T.version!==D.__version||it===!0){e.activeTexture(i.TEXTURE0+q);let $=we.getPrimaries(we.workingColorSpace),L=v.colorSpace===rs?null:we.getPrimaries(v.colorSpace),k=v.colorSpace===rs||$===L?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);let st=v.isCompressedTexture||v.image[0].isCompressedTexture,Y=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let yt=0;yt<6;yt++)!st&&!Y?gt[yt]=g(v.image[yt],!0,s.maxCubemapSize):gt[yt]=Y?v.image[yt].image:v.image[yt],gt[yt]=fe(v,gt[yt]);let Tt=gt[0],Dt=r.convert(v.format,v.colorSpace),qt=r.convert(v.type),jt=_(v.internalFormat,Dt,qt,v.normalized,v.colorSpace),B=v.isVideoTexture!==!0,_t=D.__version===void 0||it===!0,nt=T.dataReady,pt=S(v,Tt);le(i.TEXTURE_CUBE_MAP,v);let It;if(st){B&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,jt,Tt.width,Tt.height);for(let yt=0;yt<6;yt++){It=gt[yt].mipmaps;for(let Kt=0;Kt<It.length;Kt++){let Zt=It[Kt];v.format!==si?Dt!==null?B?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Kt,0,0,Zt.width,Zt.height,Dt,Zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Kt,jt,Zt.width,Zt.height,0,Zt.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Kt,0,0,Zt.width,Zt.height,Dt,qt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Kt,jt,Zt.width,Zt.height,0,Dt,qt,Zt.data)}}}else{if(It=v.mipmaps,B&&_t){It.length>0&&pt++;let yt=ae(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,jt,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Y){B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,gt[yt].width,gt[yt].height,Dt,qt,gt[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,jt,gt[yt].width,gt[yt].height,0,Dt,qt,gt[yt].data);for(let Kt=0;Kt<It.length;Kt++){let Ie=It[Kt].image[yt].image;B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Kt+1,0,0,Ie.width,Ie.height,Dt,qt,Ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Kt+1,jt,Ie.width,Ie.height,0,Dt,qt,Ie.data)}}else{B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Dt,qt,gt[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,jt,Dt,qt,gt[yt]);for(let Kt=0;Kt<It.length;Kt++){let Zt=It[Kt];B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Kt+1,0,0,Dt,qt,Zt.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Kt+1,jt,Dt,qt,Zt.image[yt])}}}p(v)&&M(i.TEXTURE_CUBE_MAP),D.__version=T.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function dt(R,v,q,it,T,D){let $=r.convert(q.format,q.colorSpace),L=r.convert(q.type),k=_(q.internalFormat,$,L,q.normalized,q.colorSpace),st=n.get(v),Y=n.get(q);if(Y.__renderTarget=v,!st.__hasExternalTextures){let gt=Math.max(1,v.width>>D),Tt=Math.max(1,v.height>>D);T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?e.texImage3D(T,D,k,gt,Tt,v.depth,0,$,L,null):e.texImage2D(T,D,k,gt,Tt,0,$,L,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ue(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,T,Y.__webglTexture,0,ie(v)):(T===i.TEXTURE_2D||T>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&T<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,T,Y.__webglTexture,D),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(R,v,q){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let it=v.depthTexture,T=it&&it.isDepthTexture?it.type:null,D=b(v.stencilBuffer,T),$=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(v),D,v.width,v.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(v),D,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,D,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,R)}else{let it=v.textures;for(let T=0;T<it.length;T++){let D=it[T],$=r.convert(D.format,D.colorSpace),L=r.convert(D.type),k=_(D.internalFormat,$,L,D.normalized,D.colorSpace);ue(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(v),k,v.width,v.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(v),k,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,k,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(R,v,q){let it=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let T=n.get(v.depthTexture);if(T.__renderTarget=v,(!T.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),it){if(T.__webglInit===void 0&&(T.__webglInit=!0,v.depthTexture.addEventListener("dispose",I)),T.__webglTexture===void 0){T.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture),le(i.TEXTURE_CUBE_MAP,v.depthTexture);let st=r.convert(v.depthTexture.format),Y=r.convert(v.depthTexture.type),gt;v.depthTexture.format===Li?gt=i.DEPTH_COMPONENT24:v.depthTexture.format===Es&&(gt=i.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,gt,v.width,v.height,0,st,Y,null)}}else ht(v.depthTexture,0);let D=T.__webglTexture,$=ie(v),L=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,k=v.depthTexture.format===Es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Li)ue(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,L,D,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,k,L,D,0);else if(v.depthTexture.format===Es)ue(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,L,D,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,k,L,D,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(R){let v=n.get(R),q=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let it=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),it){let T=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,it.removeEventListener("dispose",T)};it.addEventListener("dispose",T),v.__depthDisposeCallback=T}v.__boundDepthTexture=it}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(q)for(let it=0;it<6;it++)wt(v.__webglFramebuffer[it],R,it);else{let it=R.texture.mipmaps;it&&it.length>0?wt(v.__webglFramebuffer[0],R,0):wt(v.__webglFramebuffer,R,0)}else if(q){v.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[it]),v.__webglDepthbuffer[it]===void 0)v.__webglDepthbuffer[it]=i.createRenderbuffer(),Rt(v.__webglDepthbuffer[it],R,!1);else{let T=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=v.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,D),i.framebufferRenderbuffer(i.FRAMEBUFFER,T,i.RENDERBUFFER,D)}}else{let it=R.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Rt(v.__webglDepthbuffer,R,!1);else{let T=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,D),i.framebufferRenderbuffer(i.FRAMEBUFFER,T,i.RENDERBUFFER,D)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(R,v,q){let it=n.get(R);v!==void 0&&dt(it.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Vt(R)}function Gt(R){let v=R.texture,q=n.get(R),it=n.get(v);R.addEventListener("dispose",x);let T=R.textures,D=R.isWebGLCubeRenderTarget===!0,$=T.length>1;if($||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=v.version,o.memory.textures++),D){q.__webglFramebuffer=[];for(let L=0;L<6;L++)if(v.mipmaps&&v.mipmaps.length>0){q.__webglFramebuffer[L]=[];for(let k=0;k<v.mipmaps.length;k++)q.__webglFramebuffer[L][k]=i.createFramebuffer()}else q.__webglFramebuffer[L]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){q.__webglFramebuffer=[];for(let L=0;L<v.mipmaps.length;L++)q.__webglFramebuffer[L]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if($)for(let L=0,k=T.length;L<k;L++){let st=n.get(T[L]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ue(R)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let L=0;L<T.length;L++){let k=T[L];q.__webglColorRenderbuffer[L]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[L]);let st=r.convert(k.format,k.colorSpace),Y=r.convert(k.type),gt=_(k.internalFormat,st,Y,k.normalized,k.colorSpace,R.isXRRenderTarget===!0),Tt=ie(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,gt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,q.__webglColorRenderbuffer[L])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(q.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(D){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),le(i.TEXTURE_CUBE_MAP,v);for(let L=0;L<6;L++)if(v.mipmaps&&v.mipmaps.length>0)for(let k=0;k<v.mipmaps.length;k++)dt(q.__webglFramebuffer[L][k],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,k);else dt(q.__webglFramebuffer[L],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);p(v)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($){for(let L=0,k=T.length;L<k;L++){let st=T[L],Y=n.get(st),gt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(gt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Y.__webglTexture),le(gt,st),dt(q.__webglFramebuffer,R,st,i.COLOR_ATTACHMENT0+L,gt,0),p(st)&&M(gt)}e.unbindTexture()}else{let L=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(L=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(L,it.__webglTexture),le(L,v),v.mipmaps&&v.mipmaps.length>0)for(let k=0;k<v.mipmaps.length;k++)dt(q.__webglFramebuffer[k],R,v,i.COLOR_ATTACHMENT0,L,k);else dt(q.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,L,0);p(v)&&M(L),e.unbindTexture()}R.depthBuffer&&Vt(R)}function Nt(R){let v=R.textures;for(let q=0,it=v.length;q<it;q++){let T=v[q];if(p(T)){let D=E(R),$=n.get(T).__webglTexture;e.bindTexture(D,$),M(D),e.unbindTexture()}}}let $t=[],oe=[];function Pe(R){if(R.samples>0){if(ue(R)===!1){let v=R.textures,q=R.width,it=R.height,T=i.COLOR_BUFFER_BIT,D=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=n.get(R),L=v.length>1;if(L)for(let st=0;st<v.length;st++)e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer);let k=R.texture.mipmaps;k&&k.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let st=0;st<v.length;st++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(T|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(T|=i.STENCIL_BUFFER_BIT)),L){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$.__webglColorRenderbuffer[st]);let Y=n.get(v[st]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Y,0)}i.blitFramebuffer(0,0,q,it,0,0,q,it,T,i.NEAREST),l===!0&&($t.length=0,oe.length=0,$t.push(i.COLOR_ATTACHMENT0+st),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&($t.push(D),oe.push(D),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),L)for(let st=0;st<v.length;st++){e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,$.__webglColorRenderbuffer[st]);let Y=n.get(v[st]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,Y,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ie(R){return Math.min(s.maxSamples,R.samples)}function ue(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function G(R){let v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function fe(R,v){let q=R.colorSpace,it=R.format,T=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==_o&&q!==rs&&(we.getTransfer(q)===Ne?(it!==si||T!==kn)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):me("WebGLTextures: Unsupported texture color space:",q)),v}function ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=Z,this.getTextureUnits=z,this.setTextureUnits=K,this.setTexture2D=ht,this.setTexture2DArray=ot,this.setTexture3D=ut,this.setTextureCube=vt,this.rebindTextures=Ft,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function N_(i,t){function e(n,s=rs){let r,o=we.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===Xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yh)return i.BYTE;if(n===Zh)return i.SHORT;if(n===kr)return i.UNSIGNED_SHORT;if(n===Wl)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===jh)return i.ALPHA;if(n===Qh)return i.RGB;if(n===si)return i.RGBA;if(n===Li)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===ql)return i.RED;if(n===Yl)return i.RED_INTEGER;if(n===As)return i.RG;if(n===Zl)return i.RG_INTEGER;if(n===Jl)return i.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===sa)if(o===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kl||n===jl||n===Ql||n===tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ec||n===nc||n===ic||n===sc||n===rc||n===ra||n===oc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ec||n===nc)return o===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ic)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sc)return r.COMPRESSED_R11_EAC;if(n===rc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ra)return r.COMPRESSED_RG11_EAC;if(n===oc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ac||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc||n===vc||n===_c||n===yc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ac)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_c)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mc||n===bc||n===Sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Mc)return o===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wc||n===Tc||n===oa||n===Ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
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

}`,Tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Co(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ke({vertexShader:U_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eu=class extends Di{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,y=typeof XRWebGLBinding<"u",g=new Tu,p={},M=e.getContextAttributes(),E=null,_=null,b=[],S=[],I=new Pt,x=null,A=null,U=new gn;U.viewport=new Ve;let W=new gn;W.viewport=new Ve;let O=[U,W],Z=new Bl,z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ft){let xt=b[ft];return xt===void 0&&(xt=new Rr,b[ft]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(ft){let xt=b[ft];return xt===void 0&&(xt=new Rr,b[ft]=xt),xt.getGripSpace()},this.getHand=function(ft){let xt=b[ft];return xt===void 0&&(xt=new Rr,b[ft]=xt),xt.getHandSpace()};function j(ft){let xt=S.indexOf(ft.inputSource);if(xt===-1)return;let Ot=b[xt];Ot!==void 0&&(Ot.update(ft.inputSource,ft.frame,c||o),Ot.dispatchEvent({type:ft.type,data:ft.inputSource}))}function lt(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",lt),s.removeEventListener("inputsourceschange",ht);for(let ft=0;ft<b.length;ft++){let xt=S[ft];xt!==null&&(S[ft]=null,b[ft].disconnect(xt))}z=null,K=null,g.reset();for(let ft in p)delete p[ft];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,_=null,Se.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(I.width,I.height,!1),A!==null){let ft=A.camera;ft.fov=A.fov,ft.zoom=A.zoom,ft.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ft){r=ft,n.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ft){a=ft,n.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ft){c=ft},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ft){if(s=ft,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",lt),s.addEventListener("inputsourceschange",ht),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,F=null,dt=null;M.depth&&(dt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ot=M.stencil?Es:Li,F=M.stencil?Hr:Mi);let Rt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Rt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new nn(u.textureWidth,u.textureHeight,{format:si,type:kn,depthTexture:new xs(u.textureWidth,u.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ot={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new nn(f.framebufferWidth,f.framebufferHeight,{format:si,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ht(ft){for(let xt=0;xt<ft.removed.length;xt++){let Ot=ft.removed[xt],F=S.indexOf(Ot);F>=0&&(S[F]=null,b[F].disconnect(Ot))}for(let xt=0;xt<ft.added.length;xt++){let Ot=ft.added[xt],F=S.indexOf(Ot);if(F===-1){for(let Rt=0;Rt<b.length;Rt++)if(Rt>=S.length){S.push(Ot),F=Rt;break}else if(S[Rt]===null){S[Rt]=Ot,F=Rt;break}if(F===-1)break}let dt=b[F];dt&&dt.connect(Ot)}}let ot=new N,ut=new N;function vt(ft,xt,Ot){ot.setFromMatrixPosition(xt.matrixWorld),ut.setFromMatrixPosition(Ot.matrixWorld);let F=ot.distanceTo(ut),dt=xt.projectionMatrix.elements,Rt=Ot.projectionMatrix.elements,wt=dt[14]/(dt[10]-1),Vt=dt[14]/(dt[10]+1),Ft=(dt[9]+1)/dt[5],Gt=(dt[9]-1)/dt[5],Nt=(dt[8]-1)/dt[0],$t=(Rt[8]+1)/Rt[0],oe=wt*Nt,Pe=wt*$t,ie=F/(-Nt+$t),ue=ie*-Nt;if(xt.matrixWorld.decompose(ft.position,ft.quaternion,ft.scale),ft.translateX(ue),ft.translateZ(ie),ft.matrixWorld.compose(ft.position,ft.quaternion,ft.scale),ft.matrixWorldInverse.copy(ft.matrixWorld).invert(),dt[10]===-1)ft.projectionMatrix.copy(xt.projectionMatrix),ft.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{let G=wt+ie,fe=Vt+ie,ae=oe-ue,R=Pe+(F-ue),v=Ft*Vt/fe*G,q=Gt*Vt/fe*G;ft.projectionMatrix.makePerspective(ae,R,v,q,G,fe),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert()}}function bt(ft,xt){xt===null?ft.matrixWorld.copy(ft.matrix):ft.matrixWorld.multiplyMatrices(xt.matrixWorld,ft.matrix),ft.matrixWorldInverse.copy(ft.matrixWorld).invert()}this.updateCamera=function(ft){if(s===null)return;let xt=ft.near,Ot=ft.far;g.texture!==null&&(g.depthNear>0&&(xt=g.depthNear),g.depthFar>0&&(Ot=g.depthFar)),Z.near=W.near=U.near=xt,Z.far=W.far=U.far=Ot,(z!==Z.near||K!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),z=Z.near,K=Z.far),Z.layers.mask=ft.layers.mask|6,U.layers.mask=Z.layers.mask&-5,W.layers.mask=Z.layers.mask&-3;let F=ft.parent,dt=Z.cameras;bt(Z,F);for(let Rt=0;Rt<dt.length;Rt++)bt(dt[Rt],F);dt.length===2?vt(Z,U,W):Z.projectionMatrix.copy(U.projectionMatrix),A===null&&ft.isPerspectiveCamera&&(A={camera:ft,fov:ft.fov,zoom:ft.zoom}),mt(ft,Z,F)};function mt(ft,xt,Ot){Ot===null?ft.matrix.copy(xt.matrixWorld):(ft.matrix.copy(Ot.matrixWorld),ft.matrix.invert(),ft.matrix.multiply(xt.matrixWorld)),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.updateMatrixWorld(!0),ft.projectionMatrix.copy(xt.projectionMatrix),ft.projectionMatrixInverse.copy(xt.projectionMatrixInverse),ft.isPerspectiveCamera&&(ft.fov=ul*2*Math.atan(1/ft.projectionMatrix.elements[5]),ft.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(ft){l=ft,u!==null&&(u.fixedFoveation=ft),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ft)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Z)},this.getCameraTexture=function(ft){return p[ft]};let ge=null;function le(ft,xt){if(h=xt.getViewerPose(c||o),m=xt,h!==null){let Ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let F=!1;Ot.length!==Z.cameras.length&&(Z.cameras.length=0,F=!0);for(let Vt=0;Vt<Ot.length;Vt++){let Ft=Ot[Vt],Gt=null;if(f!==null)Gt=f.getViewport(Ft);else{let $t=d.getViewSubImage(u,Ft);Gt=$t.viewport,Vt===0&&(t.setRenderTargetTextures(_,$t.colorTexture,$t.depthStencilTexture),t.setRenderTarget(_))}let Nt=O[Vt];Nt===void 0&&(Nt=new gn,Nt.layers.enable(Vt),Nt.viewport=new Ve,O[Vt]=Nt),Nt.matrix.fromArray(Ft.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Ft.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Vt===0&&(Z.matrix.copy(Nt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),F===!0&&Z.cameras.push(Nt)}let dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let Vt=d.getDepthInformation(Ot[0]);Vt&&Vt.isValid&&Vt.texture&&g.init(Vt,s.renderState)}if(dt&&dt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let Vt=0;Vt<Ot.length;Vt++){let Ft=Ot[Vt].camera;if(Ft){let Gt=p[Ft];Gt||(Gt=new Co,p[Ft]=Gt);let Nt=d.getCameraImage(Ft);Gt.sourceTexture=Nt}}}}for(let Ot=0;Ot<b.length;Ot++){let F=S[Ot],dt=b[Ot];F!==null&&dt!==void 0&&dt.update(F,xt,c||o)}ge&&ge(ft,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),m=null}let Se=new Zd;Se.setAnimationLoop(le),this.setAnimationLoop=function(ft){ge=ft},this.dispose=function(){}}},O_=new Le,ep=new xe;ep.set(-1,0,0,0,1,0,0,0,1);function B_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,iu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,E,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===An&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===An&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),E=M.envMap,_=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ep),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let S=b.program;n.uniformBlockBinding(_,S)}function c(_,b){let S=s[_.id];S===void 0&&(g(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",M));let I=b.program;n.updateUBOMapping(_,I);let x=t.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){let b=d();_.__bindingPointIndex=b;let S=i.createBuffer(),I=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,I,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=s[_.id],S=_.uniforms,I=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,A=S.length;x<A;x++){let U=S[x];if(Array.isArray(U))for(let W=0,O=U.length;W<O;W++)f(U[W],x,W,I);else f(U,x,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,b,S,I){if(y(_,b,S,I)===!0){let x=_.__offset,A=_.value;if(Array.isArray(A)){let U=0;for(let W=0;W<A.length;W++){let O=A[W],Z=p(O);m(O,_.__data,U),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function m(_,b,S){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,S)}function y(_,b,S,I){let x=_.value,A=b+"_"+S;if(I[A]===void 0)return typeof x=="number"||typeof x=="boolean"?I[A]=x:ArrayBuffer.isView(x)?I[A]=x.slice():I[A]=x.clone(),!0;{let U=I[A];if(typeof x=="number"||typeof x=="boolean"){if(U!==x)return I[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(U.equals(x)===!1)return U.copy(x),!0}}return!1}function g(_){let b=_.uniforms,S=0,I=16;for(let A=0,U=b.length;A<U;A++){let W=Array.isArray(b[A])?b[A]:[b[A]];for(let O=0,Z=W.length;O<Z;O++){let z=W[O],K=Array.isArray(z.value)?z.value:[z.value];for(let j=0,lt=K.length;j<lt;j++){let ht=K[j],ot=p(ht),ut=S%I,vt=ut%ot.boundary,bt=ut+vt;S+=vt,bt!==0&&I-bt<ot.storage&&(S+=I-bt),z.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=ot.storage}}}let x=S%I;return x>0&&(S+=I-x),_.__size=S,_.__cache={},this}function p(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):ce("WebGLRenderer: Unsupported uniform value type.",_),b}function M(_){let b=_.target;b.removeEventListener("dispose",M);let S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function E(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var k_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zi=null;function H_(){return zi===null&&(zi=new To(k_,16,16,As,xn),zi.name="DFG_LUT",zi.minFilter=En,zi.magFilter=En,zi.wrapS=Ii,zi.wrapT=Ii,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}var Dc=class{constructor(t={}){let{canvas:e=xd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=kn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let y=f,g=new Set([Jl,Zl,Yl]),p=new Set([kn,Mi,kr,Hr,Xl,$l]),M=new Uint32Array(4),E=new Int32Array(4),_=new N,b=null,S=null,I=[],x=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,W=!1,O=null,Z=null,z=null,K=null;this._outputColorSpace=Tn;let j=0,lt=0,ht=null,ot=-1,ut=null,vt=new Ve,bt=new Ve,mt=null,ge=new ne(0),le=0,Se=e.width,ft=e.height,xt=1,Ot=null,F=null,dt=new Ve(0,0,Se,ft),Rt=new Ve(0,0,Se,ft),wt=!1,Vt=new Pr,Ft=!1,Gt=!1,Nt=new Le,$t=new N,oe=new Ve,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function ue(){return ht===null?xt:1}let G=n;function fe(w,H){return e.getContext(w,H)}let ae,R,v,q,it,T,D,$,L,k,st,Y,gt,Tt,Dt,qt,jt,B,_t,nt,pt,It,yt;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",en,!1),G===null){let H="webgl2";if(G=fe(H,w),G===null)throw fe(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(w){throw e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",en,!1),me("WebGLRenderer: "+w.message),w}function Kt(){ae=new Yx(G),ae.init(),pt=new N_(G,ae),R=new Bx(G,ae,t,pt),v=new L_(G,ae),R.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),Z=G.createFramebuffer(),z=G.createFramebuffer(),K=G.createFramebuffer(),q=new Kx(G),it=new v_,T=new D_(G,ae,v,it,R,pt,q),D=new qx(U),$=new Qm(G),It=new Fx(G,$),L=new Zx(G,$,q,It),k=new Qx(G,L,$,It,q),B=new jx(G,R,T),Dt=new zx(it),st=new x_(U,D,ae,R,It,Dt),Y=new B_(U,it),gt=new y_,Tt=new E_(ae),jt=new Ux(U,D,v,k,m,l),qt=new I_(U,k,R),yt=new z_(G,q,R,v),_t=new Ox(G,ae,q),nt=new Jx(G,ae,q),q.programs=st.programs,U.capabilities=R,U.extensions=ae,U.properties=it,U.renderLists=gt,U.shadowMap=qt,U.state=v,U.info=q}y!==kn&&(A=new ev(y,e.width,e.height,a,s,r));let Zt=new Eu(U,G);this.xr=Zt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let w=ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(w){w!==void 0&&(xt=w,this.setSize(Se,ft,!1))},this.getSize=function(w){return w.set(Se,ft)},this.setSize=function(w,H,rt=!0){if(Zt.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=w,ft=H,e.width=Math.floor(w*xt),e.height=Math.floor(H*xt),rt===!0&&(e.style.width=w+"px",e.style.height=H+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(Se*xt,ft*xt).floor()},this.setDrawingBufferSize=function(w,H,rt){Se=w,ft=H,xt=rt,e.width=Math.floor(w*rt),e.height=Math.floor(H*rt),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(y===kn){me("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(vt)},this.getViewport=function(w){return w.copy(dt)},this.setViewport=function(w,H,rt,tt){w.isVector4?dt.set(w.x,w.y,w.z,w.w):dt.set(w,H,rt,tt),v.viewport(vt.copy(dt).multiplyScalar(xt).round())},this.getScissor=function(w){return w.copy(Rt)},this.setScissor=function(w,H,rt,tt){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,H,rt,tt),v.scissor(bt.copy(Rt).multiplyScalar(xt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(w){v.setScissorTest(wt=w)},this.setOpaqueSort=function(w){Ot=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,rt=!0){let tt=0;if(w){let et=!1;if(ht!==null){let Wt=ht.texture.format;et=g.has(Wt)}if(et){let Wt=ht.texture.type,zt=p.has(Wt),Bt=jt.getClearColor(),te=jt.getClearAlpha(),ee=Bt.r,Ct=Bt.g,Q=Bt.b;zt?(M[0]=ee,M[1]=Ct,M[2]=Q,M[3]=te,G.clearBufferuiv(G.COLOR,0,M)):(E[0]=ee,E[1]=Ct,E[2]=Q,E[3]=te,G.clearBufferiv(G.COLOR,0,E))}else tt|=G.COLOR_BUFFER_BIT}H&&(tt|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(tt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&G.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),O=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",en,!1),jt.dispose(),gt.dispose(),Tt.dispose(),it.dispose(),D.dispose(),k.dispose(),It.dispose(),yt.dispose(),st.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",Jt),Zt.removeEventListener("sessionend",pe),Ce.stop()};function Ie(w){w.preventDefault(),eu("WebGLRenderer: Context Lost."),W=!0}function Me(){eu("WebGLRenderer: Context Restored."),W=!1;let w=q.autoReset,H=qt.enabled,rt=qt.autoUpdate,tt=qt.needsUpdate,et=qt.type;Kt(),q.autoReset=w,qt.enabled=H,qt.autoUpdate=rt,qt.needsUpdate=tt,qt.type=et}function en(w){me("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ln(w){let H=w.target;H.removeEventListener("dispose",ln),Ln(H)}function Ln(w){ci(w),it.remove(w)}function ci(w){let H=it.get(w).programs;H!==void 0&&(H.forEach(function(rt){st.releaseProgram(rt)}),w.isShaderMaterial&&st.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,rt,tt,et,Wt){H===null&&(H=Pe);let zt=et.isMesh&&et.matrixWorld.determinantAffine()<0,Bt=ui(w,H,rt,tt,et);v.setMaterial(tt,zt);let te=rt.index,ee=1;if(tt.wireframe===!0){if(te=L.getWireframeAttribute(rt),te===void 0)return;ee=2}let Ct=rt.drawRange,Q=rt.attributes.position,Qt=Ct.start*ee,De=(Ct.start+Ct.count)*ee;Wt!==null&&(Qt=Math.max(Qt,Wt.start*ee),De=Math.min(De,(Wt.start+Wt.count)*ee)),te!==null?(Qt=Math.max(Qt,0),De=Math.min(De,te.count)):Q!=null&&(Qt=Math.max(Qt,0),De=Math.min(De,Q.count));let je=De-Qt;if(je<0||je===1/0)return;It.setup(et,tt,Bt,rt,te);let He,Re=_t;if(te!==null&&(He=$.get(te),Re=nt,Re.setIndex(He)),et.isMesh)tt.wireframe===!0?(v.setLineWidth(tt.wireframeLinewidth*ue()),Re.setMode(G.LINES)):Re.setMode(G.TRIANGLES);else if(et.isLine){let rn=tt.linewidth;rn===void 0&&(rn=1),v.setLineWidth(rn*ue()),et.isLineSegments?Re.setMode(G.LINES):et.isLineLoop?Re.setMode(G.LINE_LOOP):Re.setMode(G.LINE_STRIP)}else et.isPoints?Re.setMode(G.POINTS):et.isSprite&&Re.setMode(G.TRIANGLES);if(et.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))Re.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let rn=et._multiDrawStarts,Yt=et._multiDrawCounts,Sn=et._multiDrawCount,Ae=te?$.get(te).bytesPerElement:1,wn=it.get(tt).currentProgram.getUniforms();for(let jn=0;jn<Sn;jn++)wn.setValue(G,"_gl_DrawID",jn),Re.render(rn[jn]/Ae,Yt[jn])}else if(et.isInstancedMesh)Re.renderInstances(Qt,je,et.count);else if(rt.isInstancedBufferGeometry){let rn=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Yt=Math.min(rt.instanceCount,rn);Re.renderInstances(Qt,je,Yt)}else Re.render(Qt,je)};function Ns(w,H,rt,tt){O!==null&&w.isNodeMaterial&&O.setObject(tt,w),Ft===!0&&Dt.setState(w,rt,!1),w.transparent===!0&&w.side===Bi&&w.forceSinglePass===!1?(w.side=An,w.needsUpdate=!0,mn(w,H,tt),w.side=Ss,w.needsUpdate=!0,mn(w,H,tt),w.side=Bi):mn(w,H,tt)}this.compile=function(w,H,rt=null){rt===null&&(rt=w),O!==null&&O.renderStart(w,H,rt),S=Tt.get(rt),S.init(H),x.push(S),rt.traverseVisible(function(et){et.isLight&&et.layers.test(H.layers)&&(S.pushLight(et),et.castShadow&&S.pushShadow(et))}),w!==rt&&w.traverseVisible(function(et){et.isLight&&et.layers.test(H.layers)&&(S.pushLight(et),et.castShadow&&S.pushShadow(et))}),S.setupLights(),O!==null&&O.updateLights(S.state.lightsArray),Gt=this.localClippingEnabled,Ft=Dt.init(this.clippingPlanes,Gt),Ft===!0&&Dt.setGlobalState(this.clippingPlanes,H),O!==null&&qt.render(S.state.shadowsArray,rt,H);let tt=new Set;return w.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let Wt=et.material;if(Wt)if(Array.isArray(Wt))for(let zt=0;zt<Wt.length;zt++){let Bt=Wt[zt];Ns(Bt,rt,H,et),tt.add(Bt)}else Ns(Wt,rt,H,et),tt.add(Wt)}),S=x.pop(),O!==null&&O.renderEnd(),tt},this.compileAsync=function(w,H,rt=null){let tt=this.compile(w,H,rt);return new Promise(et=>{function Wt(){if(tt.forEach(function(zt){let te=it.get(zt).currentProgram;(te===void 0||te.isReady())&&tt.delete(zt)}),tt.size===0){et(w);return}setTimeout(Wt,10)}ae.get("KHR_parallel_shader_compile")!==null?Wt():setTimeout(Wt,10)})};let Ti=null;function Ut(w){Ti&&Ti(w)}function Jt(){Ce.stop()}function pe(){Ce.start()}let Ce=new Zd;Ce.setAnimationLoop(Ut),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(w){Ti=w,Zt.setAnimationLoop(w),w===null?Ce.stop():Ce.start()},Zt.addEventListener("sessionstart",Jt),Zt.addEventListener("sessionend",pe),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;O!==null&&O.renderStart(w,H);let rt=Zt.enabled===!0&&Zt.isPresenting===!0,tt=A!==null&&(ht===null||rt)&&A.begin(U,ht);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(H),H=Zt.getCamera()),w.isScene===!0&&w.onBeforeRender(U,w,H,ht),S=Tt.get(w,x.length),S.init(H),S.state.textureUnits=T.getTextureUnits(),x.push(S),Nt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Vt.setFromProjectionMatrix(Nt,gi,H.reversedDepth),Gt=this.localClippingEnabled,Ft=Dt.init(this.clippingPlanes,Gt),b=gt.get(w,I.length),b.init(),I.push(b),Zt.enabled===!0&&Zt.isPresenting===!0){let zt=U.xr.getDepthSensingMesh();zt!==null&&We(zt,H,-1/0,U.sortObjects)}We(w,H,0,U.sortObjects),b.finish(),O!==null&&O.updateLights(S.state.lightsArray),U.sortObjects===!0&&b.sort(Ot,F),ie=Zt.enabled===!1||Zt.isPresenting===!1||Zt.hasDepthSensing()===!1,ie&&jt.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ft===!0&&Dt.beginShadows();let et=S.state.shadowsArray;if(qt.render(et,w,H),Ft===!0&&Dt.endShadows(),(tt&&A.hasRenderPass())===!1){let zt=b.opaque,Bt=b.transmissive;if(S.setupLights(),H.isArrayCamera){let te=H.cameras;if(Bt.length>0)for(let ee=0,Ct=te.length;ee<Ct;ee++){let Q=te[ee];Cn(zt,Bt,w,Q)}ie&&jt.render(w);for(let ee=0,Ct=te.length;ee<Ct;ee++){let Q=te[ee];Xe(b,w,Q,Q.viewport)}}else Bt.length>0&&Cn(zt,Bt,w,H),ie&&jt.render(w),Xe(b,w,H)}ht!==null&&lt===0&&(T.updateMultisampleRenderTarget(ht),T.updateRenderTargetMipmap(ht)),tt&&A.end(U),w.isScene===!0&&w.onAfterRender(U,w,H),It.resetDefaultState(),ot=-1,ut=null,x.pop(),x.length>0?(S=x[x.length-1],T.setTextureUnits(S.state.textureUnits),Ft===!0&&Dt.setGlobalState(U.clippingPlanes,S.state.camera)):S=null,I.pop(),I.length>0?b=I[I.length-1]:b=null,O!==null&&O.renderEnd()};function We(w,H,rt,tt){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)rt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Vt)){tt&&oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Nt);let zt=k.update(w),Bt=w.material;Bt.visible&&b.push(w,zt,Bt,rt,oe.z,null,H)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Vt))){let zt=k.update(w),Bt=w.material;if(tt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),oe.copy(w.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),oe.copy(zt.boundingSphere.center)),oe.applyMatrix4(w.matrixWorld).applyMatrix4(Nt)),Array.isArray(Bt)){let te=zt.groups;for(let ee=0,Ct=te.length;ee<Ct;ee++){let Q=te[ee],Qt=Bt[Q.materialIndex];Qt&&Qt.visible&&b.push(w,zt,Qt,rt,oe.z,Q,H)}}else Bt.visible&&b.push(w,zt,Bt,rt,oe.z,null,H)}}let Wt=w.children;for(let zt=0,Bt=Wt.length;zt<Bt;zt++)We(Wt[zt],H,rt,tt)}function Xe(w,H,rt,tt){let{opaque:et,transmissive:Wt,transparent:zt}=w;S.setupLightsView(rt),Ft===!0&&Dt.setGlobalState(U.clippingPlanes,rt),tt&&v.viewport(vt.copy(tt)),et.length>0&&pn(et,H,rt),Wt.length>0&&pn(Wt,H,rt),zt.length>0&&pn(zt,H,rt),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Cn(w,H,rt,tt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[tt.id]===void 0){let Qt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[tt.id]=new nn(1,1,{generateMipmaps:!0,type:Qt?xn:kn,minFilter:ni,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:we.workingColorSpace})}let Wt=S.state.transmissionRenderTarget[tt.id],zt=tt.viewport||vt;Wt.setSize(zt.z*U.transmissionResolutionScale,zt.w*U.transmissionResolutionScale);let Bt=U.getRenderTarget(),te=U.getActiveCubeFace(),ee=U.getActiveMipmapLevel();U.setRenderTarget(Wt),U.getClearColor(ge),le=U.getClearAlpha(),le<1&&U.setClearColor(16777215,.5),U.clear(),ie&&jt.render(rt);let Ct=U.toneMapping;U.toneMapping=yi;let Q=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),S.setupLightsView(tt),Ft===!0&&Dt.setGlobalState(U.clippingPlanes,tt),pn(w,rt,tt),T.updateMultisampleRenderTarget(Wt),T.updateRenderTargetMipmap(Wt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let De=0,je=H.length;De<je;De++){let He=H[De],{object:Re,geometry:rn,material:Yt,group:Sn}=He;if(Yt.side===Bi&&Re.layers.test(tt.layers)){let Ae=Yt.side;Yt.side=An,Yt.needsUpdate=!0,Dn(Re,rt,tt,rn,Yt,Sn),Yt.side=Ae,Yt.needsUpdate=!0,Qt=!0}}Qt===!0&&(T.updateMultisampleRenderTarget(Wt),T.updateRenderTargetMipmap(Wt))}U.setRenderTarget(Bt,te,ee),U.setClearColor(ge,le),Q!==void 0&&(tt.viewport=Q),U.toneMapping=Ct}function pn(w,H,rt){let tt=H.isScene===!0?H.overrideMaterial:null;for(let et=0,Wt=w.length;et<Wt;et++){let zt=w[et],{object:Bt,geometry:te,group:ee}=zt,Ct=zt.material;Ct.allowOverride===!0&&tt!==null&&(Ct=tt),Bt.layers.test(rt.layers)&&Dn(Bt,H,rt,te,Ct,ee)}}function Dn(w,H,rt,tt,et,Wt){O!==null&&et.isNodeMaterial&&O.setObject(w,et),w.onBeforeRender(U,H,rt,tt,et,Wt),w.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),et.onBeforeRender(U,H,rt,tt,w,Wt),et.transparent===!0&&et.side===Bi&&et.forceSinglePass===!1?(et.side=An,et.needsUpdate=!0,U.renderBufferDirect(rt,H,tt,et,w,Wt),et.side=Ss,et.needsUpdate=!0,U.renderBufferDirect(rt,H,tt,et,w,Wt),et.side=Bi):U.renderBufferDirect(rt,H,tt,et,w,Wt),w.onAfterRender(U,H,rt,tt,et,Wt)}function mn(w,H,rt){H.isScene!==!0&&(H=Pe);let tt=it.get(w),et=S.state.lights,Wt=S.state.shadowsArray,zt=et.state.version,Bt=st.getParameters(w,et.state,Wt,H,rt,S.state.lightProbeGridArray),te=st.getProgramCacheKey(Bt),ee=tt.programs;tt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,tt.fog=H.fog;let Ct=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;tt.envMap=D.get(w.envMap||tt.environment,Ct),tt.envMapRotation=tt.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,ee===void 0&&(w.addEventListener("dispose",ln),ee=new Map,tt.programs=ee);let Q=ee.get(te);if(Q!==void 0){if(tt.currentProgram===Q&&tt.lightsStateVersion===zt)return hi(w,Bt),Q}else Bt.uniforms=st.getUniforms(w),O!==null&&w.isNodeMaterial&&O.build(w,rt,Bt),w.onBeforeCompile(Bt,U),Q=st.acquireProgram(Bt,te),ee.set(te,Q),tt.uniforms=Bt.uniforms;let Qt=tt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qt.clippingPlanes=Dt.uniform),hi(w,Bt),tt.needsLights=cs(w),tt.lightsStateVersion=zt,tt.needsLights&&(Qt.ambientLightColor.value=et.state.ambient,Qt.lightProbe.value=et.state.probe,Qt.sunLights.value=et.state.sun,Qt.sunLightShadows.value=et.state.sunShadow,Qt.directionalLights.value=et.state.directional,Qt.directionalLightShadows.value=et.state.directionalShadow,Qt.spotLights.value=et.state.spot,Qt.spotLightShadows.value=et.state.spotShadow,Qt.rectAreaLights.value=et.state.rectArea,Qt.ltc_1.value=et.state.rectAreaLTC1,Qt.ltc_2.value=et.state.rectAreaLTC2,Qt.pointLights.value=et.state.point,Qt.pointLightShadows.value=et.state.pointShadow,Qt.hemisphereLights.value=et.state.hemi,Qt.sunShadowMatrix.value=et.state.sunShadowMatrix,Qt.sunShadowCascade.value=et.state.sunShadowCascade,Qt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Qt.spotLightMatrix.value=et.state.spotLightMatrix,Qt.spotLightMap.value=et.state.spotLightMap,Qt.pointShadowMatrix.value=et.state.pointShadowMatrix),tt.lightProbeGrid=S.state.lightProbeGridArray.length>0,tt.currentProgram=Q,tt.uniformsList=null,Q}function ls(w){if(w.uniformsList===null){let H=w.currentProgram.getUniforms();w.uniformsList=Xr.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function hi(w,H){let rt=it.get(w);rt.outputColorSpace=H.outputColorSpace,rt.batching=H.batching,rt.batchingColor=H.batchingColor,rt.instancing=H.instancing,rt.instancingColor=H.instancingColor,rt.instancingMorph=H.instancingMorph,rt.skinning=H.skinning,rt.morphTargets=H.morphTargets,rt.morphNormals=H.morphNormals,rt.morphColors=H.morphColors,rt.morphTargetsCount=H.morphTargetsCount,rt.numClippingPlanes=H.numClippingPlanes,rt.numIntersection=H.numClipIntersection,rt.vertexAlphas=H.vertexAlphas,rt.vertexTangents=H.vertexTangents,rt.toneMapping=H.toneMapping}function or(w,H){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(H.matrixWorld);for(let rt=0,tt=w.length;rt<tt;rt++){let et=w[rt];if(et.texture!==null&&et.boundingBox.containsPoint(_))return et}return null}function ui(w,H,rt,tt,et){H.isScene!==!0&&(H=Pe),T.resetTextureUnits();let Wt=H.fog,zt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?H.environment:null,Bt=ht===null?U.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:we.workingColorSpace,te=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,ee=D.get(tt.envMap||zt,te),Ct=tt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Q=!!rt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Qt=!!rt.morphAttributes.position,De=!!rt.morphAttributes.normal,je=!!rt.morphAttributes.color,He=yi;tt.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(He=U.toneMapping);let Re=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,rn=Re!==void 0?Re.length:0,Yt=it.get(tt),Sn=S.state.lights;if(Ft===!0&&(Gt===!0||w!==ut)){let Be=w===ut&&tt.id===ot;Dt.setState(tt,w,Be)}let Ae=!1;tt.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Sn.state.version||Yt.outputColorSpace!==Bt||et.isBatchedMesh&&Yt.batching===!1||!et.isBatchedMesh&&Yt.batching===!0||et.isBatchedMesh&&Yt.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&Yt.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&Yt.instancing===!1||!et.isInstancedMesh&&Yt.instancing===!0||et.isSkinnedMesh&&Yt.skinning===!1||!et.isSkinnedMesh&&Yt.skinning===!0||et.isInstancedMesh&&Yt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Yt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Yt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Yt.instancingMorph===!1&&et.morphTexture!==null||Yt.envMap!==ee||tt.fog===!0&&Yt.fog!==Wt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Dt.numPlanes||Yt.numIntersection!==Dt.numIntersection)||Yt.vertexAlphas!==Ct||Yt.vertexTangents!==Q||Yt.morphTargets!==Qt||Yt.morphNormals!==De||Yt.morphColors!==je||Yt.toneMapping!==He||Yt.morphTargetsCount!==rn||!!Yt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ae=!0):(Ae=!0,Yt.__version=tt.version);let wn=Yt.currentProgram;Ae===!0&&(wn=mn(tt,H,et),O&&tt.isNodeMaterial&&O.onUpdateProgram(tt,wn,Yt));let jn=!1,Ei=!1,hs=!1,Oe=wn.getUniforms(),Qe=Yt.uniforms;if(v.useProgram(wn.program)&&(jn=!0,Ei=!0,hs=!0),tt.id!==ot&&(ot=tt.id,Ei=!0),Yt.needsLights){let Be=or(S.state.lightProbeGridArray,et);Yt.lightProbeGrid!==Be&&(Yt.lightProbeGrid=Be,Ei=!0)}if(jn||ut!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Oe.setValue(G,"projectionMatrix",w.projectionMatrix),Oe.setValue(G,"viewMatrix",w.matrixWorldInverse);let Ci=Oe.map.cameraPosition;Ci!==void 0&&Ci.setValue(G,$t.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&Oe.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Oe.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),ut!==w&&(ut=w,Ei=!0,hs=!0)}if(Yt.needsLights&&(Sn.state.sunShadowMap.length>0&&Oe.setValue(G,"sunShadowMap",Sn.state.sunShadowMap,T),Sn.state.directionalShadowMap.length>0&&Oe.setValue(G,"directionalShadowMap",Sn.state.directionalShadowMap,T),Sn.state.spotShadowMap.length>0&&Oe.setValue(G,"spotShadowMap",Sn.state.spotShadowMap,T),Sn.state.pointShadowMap.length>0&&Oe.setValue(G,"pointShadowMap",Sn.state.pointShadowMap,T)),et.isSkinnedMesh){Oe.setOptional(G,et,"bindMatrix"),Oe.setOptional(G,et,"bindMatrixInverse");let Be=et.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),Oe.setValue(G,"boneTexture",Be.boneTexture,T))}et.isBatchedMesh&&(Oe.setOptional(G,et,"batchingTexture"),Oe.setValue(G,"batchingTexture",et._matricesTexture,T),Oe.setOptional(G,et,"batchingIdTexture"),Oe.setValue(G,"batchingIdTexture",et._indirectTexture,T),Oe.setOptional(G,et,"batchingColorTexture"),et._colorsTexture!==null&&Oe.setValue(G,"batchingColorTexture",et._colorsTexture,T));let Ai=rt.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&B.update(et,rt,wn),(Ei||Yt.receiveShadow!==et.receiveShadow)&&(Yt.receiveShadow=et.receiveShadow,Oe.setValue(G,"receiveShadow",et.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&H.environment!==null&&(Qe.envMapIntensity.value=H.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=H_()),Ei){if(Oe.setValue(G,"toneMappingExposure",U.toneMappingExposure),Yt.needsLights&&Wn(Qe,hs),Wt&&tt.fog===!0&&Y.refreshFogUniforms(Qe,Wt),Y.refreshMaterialUniforms(Qe,tt,xt,ft,S.state.transmissionRenderTarget[w.id]),Yt.needsLights&&Yt.lightProbeGrid){let Be=Yt.lightProbeGrid;Qe.probesSH.value=Be.texture,Qe.probesMin.value.copy(Be.boundingBox.min),Qe.probesMax.value.copy(Be.boundingBox.max),Qe.probesResolution.value.copy(Be.resolution)}Xr.upload(G,ls(Yt),Qe,T)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Xr.upload(G,ls(Yt),Qe,T),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Oe.setValue(G,"center",et.center),Oe.setValue(G,"modelViewMatrix",et.modelViewMatrix),Oe.setValue(G,"normalMatrix",et.normalMatrix),Oe.setValue(G,"modelMatrix",et.matrixWorld),tt.uniformsGroups!==void 0){let Be=tt.uniformsGroups;for(let Ci=0,Nn=Be.length;Ci<Nn;Ci++){let Ta=Be[Ci];yt.update(Ta,wn),yt.bind(Ta,wn)}}return wn}function Wn(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.sunLights.needsUpdate=H,w.sunLightShadows.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function cs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return lt},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(w,H,rt){let tt=it.get(w);tt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),it.get(w.texture).__webglTexture=H,it.get(w.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:rt,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){let rt=it.get(w);rt.__webglFramebuffer=H,rt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,rt=0){ht=w,j=H,lt=rt;let tt=null,et=!1,Wt=!1;if(w){let Bt=it.get(w);if(Bt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(G.FRAMEBUFFER,Bt.__webglFramebuffer),vt.copy(w.viewport),bt.copy(w.scissor),mt=w.scissorTest,v.viewport(vt),v.scissor(bt),v.setScissorTest(mt),ot=-1;return}else if(Bt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Bt.__hasExternalTextures)T.rebindTextures(w,it.get(w.texture).__webglTexture,it.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ct=w.depthTexture;if(Bt.__boundDepthTexture!==Ct){if(Ct!==null&&it.has(Ct)&&(w.width!==Ct.image.width||w.height!==Ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}let te=w.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Wt=!0);let ee=it.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ee[H])?tt=ee[H][rt]:tt=ee[H],et=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?tt=it.get(w).__webglMultisampledFramebuffer:Array.isArray(ee)?tt=ee[rt]:tt=ee,vt.copy(w.viewport),bt.copy(w.scissor),mt=w.scissorTest}else vt.copy(dt).multiplyScalar(xt).floor(),bt.copy(Rt).multiplyScalar(xt).floor(),mt=wt;if(rt!==0&&(tt=Z),v.bindFramebuffer(G.FRAMEBUFFER,tt)&&v.drawBuffers(w,tt),v.viewport(vt),v.scissor(bt),v.setScissorTest(mt),et){let Bt=it.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,Bt.__webglTexture,rt)}else if(Wt){let Bt=H;for(let te=0;te<w.textures.length;te++){let ee=it.get(w.textures[te]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+te,ee.__webglTexture,rt,Bt)}}else if(w!==null&&rt!==0){let Bt=it.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Bt.__webglTexture,rt)}ot=-1};function Us(w){let H=it.get(w);return(H.__readFormat!==w.format||H.__readType!==w.type)&&(H.__readFormat=w.format,H.__readType=w.type,H.__formatReadable=R.textureFormatReadable(w.format),H.__typeReadable=R.textureTypeReadable(w.type)),H}this.readRenderTargetPixels=function(w,H,rt,tt,et,Wt,zt,Bt=0){if(!(w&&w.isWebGLRenderTarget)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=it.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(te=te[zt]),te){v.bindFramebuffer(G.FRAMEBUFFER,te);try{let ee=w.textures[Bt],Ct=ee.format,Q=ee.type;w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Bt);let Qt=Us(ee);if(Qt.__formatReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qt.__typeReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-tt&&rt>=0&&rt<=w.height-et&&G.readPixels(H,rt,tt,et,pt.convert(Ct),pt.convert(Q),Wt)}finally{let ee=ht!==null?it.get(ht).__webglFramebuffer:null;v.bindFramebuffer(G.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(w,H,rt,tt,et,Wt,zt,Bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=it.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(te=te[zt]),te)if(H>=0&&H<=w.width-tt&&rt>=0&&rt<=w.height-et){v.bindFramebuffer(G.FRAMEBUFFER,te);let ee=w.textures[Bt],Ct=ee.format,Q=ee.type;w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Bt);let Qt=Us(ee);if(Qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let De=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,De),G.bufferData(G.PIXEL_PACK_BUFFER,Wt.byteLength,G.STREAM_READ),G.readPixels(H,rt,tt,et,pt.convert(Ct),pt.convert(Q),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let je=ht!==null?it.get(ht).__webglFramebuffer:null;v.bindFramebuffer(G.FRAMEBUFFER,je);let He=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await _d(G,He,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,De),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Wt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(De),G.deleteSync(He),Wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,rt=0){let tt=Math.pow(2,-rt),et=Math.floor(w.image.width*tt),Wt=Math.floor(w.image.height*tt),zt=H!==null?H.x:0,Bt=H!==null?H.y:0;T.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,zt,Bt,et,Wt),v.unbindTexture()},this.copyTextureToTexture=function(w,H,rt=null,tt=null,et=0,Wt=0){let zt,Bt,te,ee,Ct,Q,Qt,De,je,He=w.isCompressedTexture?w.mipmaps[Wt]:w.image;if(rt!==null)zt=rt.max.x-rt.min.x,Bt=rt.max.y-rt.min.y,te=rt.isBox3?rt.max.z-rt.min.z:1,ee=rt.min.x,Ct=rt.min.y,Q=rt.isBox3?rt.min.z:0;else{let Qe=Math.pow(2,-et);zt=Math.floor(He.width*Qe),Bt=Math.floor(He.height*Qe),w.isDataArrayTexture?te=He.depth:w.isData3DTexture?te=Math.floor(He.depth*Qe):te=1,ee=0,Ct=0,Q=0}tt!==null?(Qt=tt.x,De=tt.y,je=tt.z):(Qt=0,De=0,je=0);let Re=pt.convert(H.format),rn=pt.convert(H.type),Yt;H.isData3DTexture?(T.setTexture3D(H,0),Yt=G.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(T.setTexture2DArray(H,0),Yt=G.TEXTURE_2D_ARRAY):(T.setTexture2D(H,0),Yt=G.TEXTURE_2D),v.activeTexture(G.TEXTURE0),v.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),v.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),v.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment);let Sn=v.getParameter(G.UNPACK_ROW_LENGTH),Ae=v.getParameter(G.UNPACK_IMAGE_HEIGHT),wn=v.getParameter(G.UNPACK_SKIP_PIXELS),jn=v.getParameter(G.UNPACK_SKIP_ROWS),Ei=v.getParameter(G.UNPACK_SKIP_IMAGES);v.pixelStorei(G.UNPACK_ROW_LENGTH,He.width),v.pixelStorei(G.UNPACK_IMAGE_HEIGHT,He.height),v.pixelStorei(G.UNPACK_SKIP_PIXELS,ee),v.pixelStorei(G.UNPACK_SKIP_ROWS,Ct),v.pixelStorei(G.UNPACK_SKIP_IMAGES,Q);let hs=w.isDataArrayTexture||w.isData3DTexture,Oe=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){let Qe=it.get(w),Ai=it.get(H),Be=it.get(Qe.__renderTarget),Ci=it.get(Ai.__renderTarget);v.bindFramebuffer(G.READ_FRAMEBUFFER,Be.__webglFramebuffer),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Nn=0;Nn<te;Nn++)hs&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,it.get(w).__webglTexture,et,Q+Nn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,it.get(H).__webglTexture,Wt,je+Nn)),G.blitFramebuffer(ee,Ct,zt,Bt,Qt,De,zt,Bt,G.DEPTH_BUFFER_BIT,G.NEAREST);v.bindFramebuffer(G.READ_FRAMEBUFFER,null),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(et!==0||w.isRenderTargetTexture||it.has(w)){let Qe=it.get(w),Ai=it.get(H);v.bindFramebuffer(G.READ_FRAMEBUFFER,z),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,K);for(let Be=0;Be<te;Be++)hs?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Qe.__webglTexture,et,Q+Be):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Qe.__webglTexture,et),Oe?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ai.__webglTexture,Wt,je+Be):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ai.__webglTexture,Wt),et!==0?G.blitFramebuffer(ee,Ct,zt,Bt,Qt,De,zt,Bt,G.COLOR_BUFFER_BIT,G.NEAREST):Oe?G.copyTexSubImage3D(Yt,Wt,Qt,De,je+Be,ee,Ct,zt,Bt):G.copyTexSubImage2D(Yt,Wt,Qt,De,ee,Ct,zt,Bt);v.bindFramebuffer(G.READ_FRAMEBUFFER,null),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Oe?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Yt,Wt,Qt,De,je,zt,Bt,te,Re,rn,He.data):H.isCompressedArrayTexture?G.compressedTexSubImage3D(Yt,Wt,Qt,De,je,zt,Bt,te,Re,He.data):G.texSubImage3D(Yt,Wt,Qt,De,je,zt,Bt,te,Re,rn,He):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Wt,Qt,De,zt,Bt,Re,rn,He.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Wt,Qt,De,He.width,He.height,Re,He.data):G.texSubImage2D(G.TEXTURE_2D,Wt,Qt,De,zt,Bt,Re,rn,He);v.pixelStorei(G.UNPACK_ROW_LENGTH,Sn),v.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ae),v.pixelStorei(G.UNPACK_SKIP_PIXELS,wn),v.pixelStorei(G.UNPACK_SKIP_ROWS,jn),v.pixelStorei(G.UNPACK_SKIP_IMAGES,Ei),Wt===0&&H.generateMipmaps&&G.generateMipmap(Yt),v.unbindTexture()},this.initRenderTarget=function(w){it.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){j=0,lt=0,ht=null,v.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}};var Yr=class extends es{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ge;t.deleteAttribute("uv");let e=new un({side:An}),n=new un,s=new Xo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ee(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ns(t,n,6),a=new hn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ee(t,qr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ee(t,qr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ee(t,qr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Ee(t,qr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Ee(t,qr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Ee(t,qr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function qr(i){return new Ho({color:0,emissive:16777215,emissiveIntensity:i})}function Hi(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ue,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=np(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][u]);let m=np(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function np(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ye(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let y=h.getComponent(u,m);a.setComponent(u+d,m,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Zr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},V_=new Ms(-1,1,1,-1,0,1),Cu=class extends Ue{constructor(){super(),this.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ve([0,2,0,0,2,0],2))}},G_=new Cu,Rs=class{constructor(t){this._mesh=new Ee(G_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,V_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Jr=class extends Kn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=os.clone(t.uniforms),this.material=new ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Rs(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ua=class extends Kn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Fc=class extends Kn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Oc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Pt);this._width=n.width,this._height=n.height,e=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jr(Zr),this.copyPass.material.blending=ei,this.timer=new $o}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ua!==void 0&&(o instanceof ua?n=!0:o instanceof Fc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bc=class extends Kn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ne}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var ip={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Kr=class i extends Kn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Pt(t.x,t.y):new Pt(256,256),this.clearColor=new ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(r,o,{type:xn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new nn(r,o,{type:xn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new nn(r,o,{type:xn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=ip;this.highPassUniforms=os.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Pt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=os.clone(Zr.uniforms),this.blendMaterial=new ke({uniforms:this.copyUniforms,vertexShader:Zr.vertexShader,fragmentShader:Zr.fragmentShader,premultipliedAlpha:!0,blending:ws,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ne,this._oldClearAlpha=1,this._basic=new _i,this._fsQuad=new Rs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Pt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new ke({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Pt(.5,.5)},direction:{value:new Pt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Kr.BlurDirectionX=new Pt(1,0);Kr.BlurDirectionY=new Pt(0,1);var fa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var zc=class extends Kn{constructor(){super(),this.isOutputPass=!0,this.uniforms=os.clone(fa.uniforms),this.material=new Fr({name:fa.name,uniforms:this.uniforms,vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader}),this._fsQuad=new Rs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},we.getTransfer(this._outputColorSpace)===Ne&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Jo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===tr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ko&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var da=(i,t,e=0,n=0,s=0)=>(i.translate(e,n,s),i.setAttribute("aPart",new ye(new Float32Array(i.attributes.position.count).fill(t),1)),i),se=(i,t,e,n,s=0,r=0,o=0,a=0)=>{let l=new Ge(i,t,e);return a&&l.rotateZ(a),da(l,n,s,r+t/2,o)},qe=(i,t,e,n=0,s=0,r=0,o=i,a=10)=>da(new is(o,i,t,a),e,n,s+t/2,r),kc=(i,t,e,n=0,s=0,r=0,o=10)=>da(new ss(i,t,o),e,n,s+t/2,r),Hc=(i,t,e,n,s)=>da(new qs(i,8,6),t,e,n,s);function sp(){let i={},t=(e,n,s={})=>{i[e]={geo:Hi(n),...s},n.forEach(r=>r.dispose())};return t("util",[qe(.035,1.25,1,0,0,0,.02),se(.07,.06,.16,1,0,1.22,.02),se(.3,.12,.22,1,-.28,0,.2),se(.3,.02,.22,2,-.28,.12,.2),qe(.012,.3,4,-.38,.12,.26,.012,5),qe(.012,.3,4,-.2,.12,.14,.012,5)],{rotor:[0,1.25,.11]}),t("oil",[qe(.2,.26,1,-.2,0,.15),qe(.205,.03,2,-.2,.19,.15),qe(.15,.2,1,.18,0,.22),qe(.155,.025,2,.18,.14,.22),qe(.05,.85,1,.1,0,-.15),qe(.06,.02,2,.1,.3,-.15),qe(.06,.02,2,.1,.6,-.15),se(.3,.02,.03,4,-.05,.3,-.15),qe(.02,1.15,4,-.3,0,-.2,.015,6),kc(.06,.22,3,-.3,1.15,-.2,7)]),t("agro",[...[-.3,0,.3].flatMap(e=>[qe(.14,.5,1,e,0,0),kc(.14,.12,1,e,.5,0),qe(.145,.03,2,e,.36,0)]),se(.06,.78,.06,4,.15,0,-.2),se(.5,.025,.04,4,0,.74,-.1,.12)]),t("ind",[se(.8,.22,.45,1),se(.8,.05,.01,5,0,.09,.23),...[-.27,0,.27].map(e=>se(.27,.09,.45,1,e,.2,0,.38)),qe(.04,.72,1,.28,0,-.3,.03),qe(.036,.04,6,.28,.7,-.3),qe(.04,.6,1,.12,0,-.3,.03),qe(.036,.04,6,.12,.58,-.3)],{smoke:[[.28,.76,-.3],[.12,.64,-.3]]}),t("base",[se(.6,.3,.5,1,-.1),se(.6,.03,.5,2,-.1,.3),se(.55,.03,.06,4,-.05,.42,.3,.5),qe(.05,1,1,.32,0,-.15,.035),qe(.04,.04,6,.32,.98,-.15),qe(.05,.8,1,.42,0,.1,.035),qe(.04,.04,6,.42,.78,.1),kc(.16,.14,4,-.38,0,.32,6)],{smoke:[[.32,1.05,-.15],[.42,.85,.1]]}),t("log",[...[-.22,0,.22].flatMap((e,n)=>[0,.1].flatMap((s,r)=>[se(.2,.09,.09,(n+r)%2?2:1,e,0,s),...(n+r)%3?[se(.2,.09,.09,(n+r)%2?1:2,e,.09,s)]:[]])),se(.03,.5,.03,4,-.38,0,.05),se(.03,.5,.03,4,.38,0,.05),se(.84,.035,.05,4,0,.5,.05),se(.06,.05,.07,1,.1,.45,.05),se(.03,.03,.03,6,0,.535,.05)]),t("saude",[se(.7,.3,.4,5),se(.72,.02,.42,1,0,.3),se(.06,.26,.03,2,0,.36,.1),se(.2,.07,.03,2,0,.455,.1),qe(.11,.01,2,.22,.32,-.05)]),t("tech",[se(.6,.2,.4,1,.05,0,.1),se(.6,.02,.41,2,.05,.07,.1),se(.6,.02,.41,2,.05,.14,.1),qe(.03,1.3,4,-.28,0,-.2,.008,6),Hc(.06,1,-.22,.9,-.2),Hc(.05,1,-.34,1.05,-.2),se(.03,.03,.03,6,-.28,1.3,-.2)]),t("cons",[se(.8,.2,.5,1),se(.82,.05,.52,2,0,.14),se(.24,.12,.02,5,0,0,.26),se(.1,.04,.1,4,-.2,.2),se(.1,.04,.1,4,.2,.2)]),t("imob",[se(.35,.42,.3,5,.3,0,.1),se(.36,.02,.31,1,.3,.42,.1),se(.36,.02,.31,1,.3,.21,.1),se(.035,1.2,.035,4,-.15),se(.9,.03,.03,4,.05,1.2),se(.12,.07,.06,1,-.33,1.17),se(.006,.4,.006,4,.35,.8),se(.03,.03,.03,6,.49,1.23)]),t("fin",[qe(.13,.03,2),kc(.1,.8,4,0,.03,0,8),se(.03,.03,.03,6,0,.83)],{top:!0}),i}function rp(){let i=[0,1,2].map(n=>{let s=new Ge(.04,.5,.012);return s.translate(0,.25,0),s.rotateZ(n*Math.PI*2/3),s}),t=new qs(.035,8,6),e=Hi([...i,t]);return[...i,t].forEach(n=>n.dispose()),e}function Ru(i){let t=(r,o,a)=>da(new Ge(r,o,r),0,0,a+o/2,0),e=i?.72:1,n=i?[t(1,.66,0),t(.72,.34,.66)]:[t(1,1,0)];n.push(se(1.1,.03,1.1,1),se(.26*e,.03,.2*e,1,-.2*e,1,.15*e),se(.16*e,.045,.16*e,4,.22*e,1,-.2*e),se(.3*e,.018,.12*e,4,.1*e,1,.3*e)),i&&n.push(qe(.012,.12,4,.2*e,1,.2*e,.006,5),se(.2,.02,.1,1,-.3,.66,.42),se(.1,.03,.1,4,.42,.66,-.3));let s=Hi(n);return n.forEach(r=>r.dispose()),s}function op(){let i=new is(.018,.024,.2,6);i.translate(0,.1,0);let t=new qs(.2,12,9);t.scale(1,1.08,1),t.translate(0,.36,0);let e=(n,s,r,o)=>{let a=n.attributes.position.count,l=new Float32Array(a*3);for(let c=0;c<a;c++)l.set([s,r,o],c*3);return n.setAttribute("color",new ye(l,3)),n};return Hi([e(i,.62,.56,.5),e(t,1,1,1)])}function ap(){let i=[se(.2,.78,.24,1,-.13),se(.2,.78,.24,1,.13),se(.22,.07,.36,5,-.13,0,.05),se(.22,.07,.36,5,.13,0,.05),se(.62,.72,.32,1,0,.78),se(.2,.5,.02,2,0,.98,.165),se(.07,.4,.02,0,0,1.04,.18),se(.15,.64,.2,1,-.385,.84),se(.15,.64,.2,1,.385,.84),se(.13,.11,.16,3,-.385,.73),se(.13,.11,.16,3,.385,.73),se(.14,.1,.14,3,0,1.5),Hc(.2,3,0,1.74,0),Hc(.205,4,0,1.79,-.035)],t=Hi(i);return i.forEach(e=>e.dispose()),t}var On=(i,t,e,n,s=0,r=0,o=0)=>{i.translate(s,r,o);let a=i.attributes.position.count,l=new Float32Array(a*3);for(let c=0;c<a;c++)l.set([t,e,n],c*3);return i.setAttribute("color",new ye(l,3)),i};function lp(){let i=[On(new Ge(.17,.03,.074),1,1,1,0,.03,0),On(new Ge(.09,.026,.064),.1,.13,.17,-.008,.057,0),On(new Ge(.094,.004,.068),1,1,1,-.008,.072,0),...[[-.052,.036],[.052,.036],[-.052,-.036],[.052,-.036]].map(([e,n])=>On(new Ge(.034,.03,.012),.06,.06,.07,e,.015,n)),On(new Ge(.004,.01,.06),1.6,1.5,1.1,.086,.034,0),On(new Ge(.004,.01,.06),.9,.1,.08,-.086,.034,0),On(new Ge(.19,.002,.092),.2,.2,.21,.008,.002,.008)],t=Hi(i);return i.forEach(e=>e.dispose()),t}function Pu(i){let t=new is(.09,.05,.5,8,1);t.rotateZ(Math.PI/2),t.scale(1,.55,1);let e=[On(t,1,1,1,0,.03,0),On(new Ge(.4,.012,.13),.75,.6,.42,-.02,.07,0)];if(i===0){let s=new ss(.17,.5,3);s.scale(1,1,.06);let r=new ss(.1,.36,3);r.scale(1,1,.06),e.push(On(new is(.006,.006,.6,5),.3,.3,.32,.02,.37,0),On(s,1.5,1.5,1.5,-.08,.36,0),On(r,1.5,1.5,1.5,.13,.27,0))}else e.push(On(new Ge(.2,.06,.1),1.4,1.4,1.4,-.03,.1,0),On(new Ge(.12,.03,.09),.1,.14,.2,0,.14,0),On(new Ge(.14,.008,.11),1.4,1.4,1.4,-.03,.16,0));let n=Hi(e.map(s=>s.index?s.toNonIndexed():s));return e.forEach(s=>s.dispose()),n.computeVertexNormals(),n}var an=(i,t,e)=>Math.max(t,Math.min(e,i)),pa=(i,t,e)=>{let n=an((e-i)/(t-i),0,1);return n*n*(3-2*n)},cp=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,bi=(i,t,e)=>i+(t-i)*e,Si=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},hp=i=>i.t==="c"?i.mc?1.8+1.25*Math.log10(1+i.mc/1e8):1.8:i.t==="s"?1.2:i.v?1+.8*Math.log10(1+i.v/1e8):1;function W_(i){return i.t==="c"?i.mc?"tower":"block":i.t==="s"?"sub":i.t==="p"?"pawn":i.c==="fund"||i.c==="pen"||i.c==="gov"?"inv":"tile"}var up=`float hash21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x), mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y); }`;function fp(i,t,e={}){let{palette:n,accent:s="#3cf0b4",reduced:r=!1,fixedQuality:o=!1}=e,a=t.nodes.length,l=t.mapa,c=Math.min(innerWidth,innerHeight)<700,h=new ne(s),d=100/l.W,u=100,f=l.H*d,m=C=>C*d-u/2,y=C=>C*d-f/2,g=.02,p=1.6,M={},E=(C,V=new ne)=>(V.set(C).getHSL(M),V.setHSL(M.h,Math.min(1,M.s*1.2+.06),M.l*.86)),_=new Dc({canvas:i,antialias:!0,powerPreference:"high-performance"}),b=Math.min(devicePixelRatio||1,c?2:1.75);_.setPixelRatio(b),_.toneMapping=tr,_.toneMappingExposure=1,_.outputColorSpace=Tn,_.shadowMap.enabled=!0,_.shadowMap.type=js,_.shadowMap.autoUpdate=!1;let S=3,I=new ne(13886702),x=new es;x.background=I,x.fog=new Vs(I,160,520);let A=new gn(32,1,.3,1600),U=new Cs(_);x.environment=U.fromScene(new Yr,.04).texture,x.environmentIntensity=.3;let W=new bs(16773597,2.75);W.position.set(-75,105,62),W.castShadow=!0,W.shadow.mapSize.set(c?2048:4096,c?2048:4096),Object.assign(W.shadow.camera,{left:-u*.66,right:u*.66,top:f*.85,bottom:-f*.85,near:10,far:360}),W.shadow.bias=-3e-4,W.shadow.normalBias=.035,W.shadow.radius=5,W.shadow.blurSamples=16,x.add(W,W.target),x.add(new Js(14083319,10132100,.66));let O=null,Z=null,z=null;try{let C=new nn(4,4,{type:xn,samples:c?2:4});O=new Oc(_,C),O.setPixelRatio(b),O.addPass(new Bc(x,A)),Z=new Kr(new Pt(256,256),.06,.4,1.1),O.addPass(Z),z=new Jr({uniforms:{tDiffuse:{value:null},uAmt:{value:0},uRes:{value:new Pt(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uAmt; uniform vec2 uRes; varying vec2 vUv;
        void main(){ float k = smoothstep(0.16, 0.5, abs(vUv.y - 0.5)) * uAmt; if (k < 0.01) { gl_FragColor = texture2D(tDiffuse, vUv); return; }
          vec4 c = vec4(0.0); for (int i = 0; i < 12; i++) { float a = float(i) * 2.39996, r = sqrt((float(i) + 0.5) / 12.0) * k; c += texture2D(tDiffuse, vUv + vec2(cos(a), sin(a)) * r / uRes); }
          gl_FragColor = c / 12.0; }`}),O.addPass(z),O.addPass(new zc)}catch{O=null}let K=new Array(a),j=new Float32Array(a),lt=new Float32Array(a),ht=new Float32Array(a),ot=new Float32Array(a),ut=new Float32Array(a),vt=new Float32Array(a),bt=new Float32Array(a),mt=new Float32Array(a),ge=Uint8Array.from(l.sky||new Array(a).fill(0)),le=new Uint8Array(a),Se=new Uint8Array(a),ft=12.5,xt=3.1;for(let C=0;C<a;C++){let V=t.nodes[C];K[C]=W_(V),Se[C]=K[C]==="inv"?1:0,j[C]=m(l.x[C]),ht[C]=y(l.y[C]);let J=l.lot&&l.lot[C]||0;if(le[C]=J>0?1:0,mt[C]=J*d,le[C]){let X=hp(V)*1.24*d,ct=Si(C);vt[C]=X*(.86+.3*ct),bt[C]=X*(1.14-.3*ct),ot[C]=X*.6,K[C]==="tower"?ut[C]=.9+10.2*Math.pow(an(Math.log10(V.mc/2e8)/Math.log10(4e3),0,1),1.5):ut[C]=X*(K[C]==="block"?.42+.3*Si(C+7):.3),lt[C]=g}else ge[C]?(ot[C]=hp(V)*.5*d+.12,ut[C]=ot[C]*2.3,lt[C]=ft+(ge[C]-1)*xt+(Si(C)-.5)*1.4):(ot[C]=(.5+.1*Math.min(4,Math.log10(1+(V.v||0)/1e8)))*d,ut[C]=ot[C]*(K[C]==="tile"?1.3:2.1),lt[C]=g)}let Ot=C=>lt[C]+ut[C],F=l.plates.map((C,V)=>({...C,j:V,col:E(n.sector(C.c)),x0:m(C.x0),x1:m(C.x1),z0:y(C.y0),z1:y(C.y1)})),dt=(C,V)=>{let J=1e9;for(let X of F){let ct=Math.abs(C-(X.x0+X.x1)/2)-(X.x1-X.x0)/2,Et=Math.abs(V-(X.z0+X.z1)/2)-(X.z1-X.z0)/2;J=Math.min(J,Math.hypot(Math.max(ct,0),Math.max(Et,0))+Math.min(Math.max(ct,Et),0))}return J},Rt=20261126,wt=()=>{Rt|=0,Rt=Rt+1831565813|0;let C=Math.imul(Rt^Rt>>>15,1|Rt);return C=C+Math.imul(C^C>>>7,61|C)^C,((C^C>>>14)>>>0)/4294967296},Vt=new Set(["util","oil","agro","ind","base","log","tech","imob","saude","cons"]),Ft=[],Gt=[],Nt=[],$t=[];for(let C=0;C<a;C++)le[C]&&$t.push(C);for(let C of F)for(let V=Math.ceil((C.x0+.25)/p);(V+1)*p<C.x1-.25;V++)for(let J=Math.ceil((C.z0+.25)/p);(J+1)*p<C.z1-.25;J++){let X=(V+.5)*p,ct=(J+.5)*p,Et=!0;for(let At of $t){let kt=mt[At]+.85;if(Math.abs(j[At]-X)<kt&&Math.abs(ht[At]-ct)<kt&&Math.hypot(j[At]-X,ht[At]-ct)<kt){Et=!1;break}}if(!Et)continue;let St=wt()<.12;if(Gt.push([X,ct,St]),!St&&wt()<.42&&Vt.has(C.c)){Ft.push({x:X,z:ct,plate:C.j,sec:C.c,s:1.05+wt()*.25});for(let[At,kt]of[[-.5,-.5],[.5,-.5],[-.5,.5]])Nt.push([X+At,ct+kt,.5+wt()*.25]);continue}let Mt=6+Math.floor(wt()*6);for(let At=0;At<Mt;At++){let kt=X+(wt()-.5)*1.1,de=ct+(wt()-.5)*1.1;St&&Math.hypot(kt-X,de-ct)<.36||Nt.push([kt,de,.55+wt()*.4])}}for(let C of $t){if(mt[C]<.45)continue;let V=mt[C]*.95,J=Math.min(14,Math.floor(Math.PI*V/.42));for(let X=0;X<J;X++){let ct=Math.PI+(X+.5)/J*Math.PI;Nt.push([j[C]+Math.cos(ct)*V,ht[C]+Math.sin(ct)*V,.5+wt()*.2])}}for(let C=-u/2-.6;C<=u/2+.6;C+=.46)for(let V=-f/2-.6;V<=f/2+.6;V+=.46){let J=dt(C,V);J>.62&&J<1.2&&wt()<.8&&Nt.push([C+(wt()-.5)*.12,V+(wt()-.5)*.12,.6+wt()*.25])}for(let C=0;C<(c?1500:2800);C++){let V=(wt()-.5)*(u+10),J=(wt()-.5)*(f+9);dt(V,J)<1.3||Si(Math.floor(V/3)*31+Math.floor(J/3)*17)<.42||Nt.push([V,J,.6+wt()*.7])}let oe=(()=>{let C=c?2048:4096,V=Math.round(C*l.H/l.W),J=C/u,X=document.createElement("canvas");X.width=C,X.height=V;let ct=X.getContext("2d");ct.fillStyle="#000",ct.fillRect(0,0,C,V),ct.globalCompositeOperation="lighter";let Et=At=>(At+u/2)*J,St=At=>(At+f/2)*J;for(let[At,kt,de]of Gt)ct.fillStyle="#f00",ct.beginPath(),ct.roundRect(Et(At-.6),St(kt-.6),1.2*J,1.2*J,.14*J),ct.fill(),de&&(ct.fillStyle="#00f",ct.beginPath(),ct.ellipse(Et(At),St(kt),.34*J,.26*J,At,0,6.2832),ct.fill());ct.fillStyle="#0f0";for(let At of $t)ct.beginPath(),ct.arc(Et(j[At]),St(ht[At]),mt[At]*.93*J,0,6.2832),ct.fill();let Mt=new Oi(X);return Mt.anisotropy=_.capabilities.getMaxAnisotropy(),Mt.generateMipmaps=!0,Mt.minFilter=ni,Mt})(),Pe=(()=>{let V=Math.round(2048*l.H/l.W),J=2048/u,X=document.createElement("canvas");X.width=2048,X.height=V;let ct=X.getContext("2d");ct.fillStyle="#000",ct.fillRect(0,0,2048,V),ct.fillStyle="#fff",ct.shadowColor="#fff";for(let St of $t)ct.shadowBlur=Math.max(4,(.16+ut[St]*.05)*J),ct.fillRect((j[St]-vt[St]/2+u/2)*J,(ht[St]-bt[St]/2+f/2)*J,vt[St]*J,bt[St]*J);let Et=new Oi(X);return Et.generateMipmaps=!0,Et.minFilter=ni,Et})(),ie=F.length,ue={uMask:{value:oe},uAo:{value:Pe},uTime:{value:0},uSize:{value:new Pt(u,f)},uLand:{value:new Pt(u/2+9,f/2+7)},uRects:{value:Array.from({length:12},(C,V)=>{let J=F[V%ie];return new Ve((J.x0+J.x1)/2,(J.z0+J.z1)/2,(J.x1-J.x0)/2,(J.z1-J.z0)/2)})},uCols:{value:Array.from({length:12},(C,V)=>{let J=F[V%ie].col;return new N(J.r,J.g,J.b)})},uFocus:{value:new Ve(0,0,0,0)},uFocusK:{value:0},uDim:{value:0}},G=new un({color:16777215,roughness:.94,metalness:0,envMapIntensity:.6});G.onBeforeCompile=C=>{Object.assign(C.uniforms,ue),C.vertexShader=C.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),C.fragmentShader=C.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWp; uniform sampler2D uMask; uniform sampler2D uAo; uniform float uTime; uniform vec2 uSize; uniform vec2 uLand; uniform vec4 uRects[12]; uniform vec3 uCols[12];
        uniform vec4 uFocus; uniform float uFocusK; uniform float uDim;
        float gWater = 0.0;
        ${up}
        float sdRound(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 p = vWp.xz;
        float aa = fwidth(p.x) * 1.2;
        float n1 = vnoise(p * 0.3), n2 = vnoise(p * 1.7);
        vec2 bq = abs(p) - uLand;
        float land = length(max(bq, 0.0)) + min(max(bq.x, bq.y), 0.0) - 4.0 + vnoise(p * 0.07 + 3.1) * 7.0 + n1 * 1.5;
        float d = 1e5; vec3 sec = uCols[0];
        for (int k = 0; k < ${ie}; k++) { float dk = sdRound(p - uRects[k].xy, uRects[k].zw, 0.6); if (dk < d) { d = dk; sec = uCols[k]; } }
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
          float sand = smoothstep(-2.0, -1.2, land);
          col = mix(col, mix(vec3(0.95, 0.9, 0.76), vec3(0.8, 0.74, 0.6), smoothstep(-0.5, 0.0, land)) * (0.97 + 0.05 * n3), sand);
        }
        // setor em foco e escolha: o resto esmaece para um cinza claro
        float inF = step(uFocus.x, p.x) * step(p.x, uFocus.z) * step(uFocus.y, p.y) * step(p.y, uFocus.w);
        float dk = max(uDim, uFocusK * (1.0 - inF));
        col = mix(col, vec3(dot(col, vec3(0.3, 0.59, 0.11))) * 0.82, 0.9 * dk);
        diffuseColor.rgb = col;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.1, gWater);`)};let fe=new Ee(new ti(1800,1800),G);fe.rotation.x=-Math.PI/2,fe.receiveShadow=!0,x.add(fe);let ae={uRise:{value:1.4},uDim:{value:0},uTime:{value:0},uAcc:{value:h},uFocus:{value:-1}},R=Array.from({length:a},()=>[]),v=[],q="attribute float aHL; attribute float aVis; attribute float aDelay; attribute float aPlate; attribute float aSeed; attribute vec3 aSize; attribute float aLit; attribute float aPart; varying float vPart; uniform float uRise; uniform float uTime; uniform float uFocus; varying vec3 vOp; varying vec3 vOn; varying vec3 vSize; varying float vHL; varying float vOther; varying float vSeed; varying float vLit;",it=`varying float vPart; varying vec3 vOp; varying vec3 vOn; varying vec3 vSize; varying float vHL; varying float vOther; varying float vSeed; varying float vLit; uniform float uDim; uniform float uTime; uniform vec3 uAcc; uniform sampler2D uSign; float gRough = -1.0;
${up}`;function T(C,V,J,X,ct,Et){let St=Math.max(1,X.length),Mt=new Float32Array(St),At=new Float32Array(St).fill(1),kt=new Float32Array(St),de=new Float32Array(St),re=new Float32Array(St),_e=new Float32Array(St*3),Ye=new Float32Array(St),Ze=(on,Ri,Bp=1)=>V.setAttribute(on,new Fi(Ri,Bp));Ze("aHL",Mt),Ze("aVis",At),Ze("aDelay",kt),Ze("aPlate",de),Ze("aSeed",re),Ze("aSize",_e,3),Ze("aLit",Ye);let ze=on=>(Object.assign(on.uniforms,ae),on.vertexShader=on.vertexShader.replace("#include <common>",`#include <common>
${q}`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float rise = smoothstep(aDelay, aDelay + 0.35, uRise);
          vPart = aPart; vOp = position; vOn = normal; vSize = aSize; vHL = aHL; vSeed = aSeed; vLit = aLit;
          vOther = uFocus >= 0.0 && abs(uFocus - aPlate) > 0.5 ? 1.0 : 0.0;
          ${Et==="spin"?"float sa = uTime * (1.1 + 1.4 * aSeed) + aSeed * 20.0; transformed.xy = mat2(cos(sa), -sin(sa), sin(sa), cos(sa)) * transformed.xy; transformed *= max(0.001, rise * aVis);":Et==="bld"?"transformed.y *= max(0.001, rise * aVis); transformed.xz *= aVis;":"transformed *= max(0.001, rise * aVis); transformed.y += aLit * 0.22 * sin(uTime * 0.9 + aSeed * 40.0) / max(0.05, aSize.x);"}`),on);J.onBeforeCompile=on=>{ze(on),on.fragmentShader=on.fragmentShader.replace("#include <common>",`#include <common>
${it}`).replace("#include <color_fragment>",`#include <color_fragment>
          float top = step(0.5, vOn.y);
          float isHL = step(0.01, vHL);
          float dimK = max(uDim * (1.0 - isHL), 0.85 * vOther * (1.0 - isHL));
          vec3 sec = diffuseColor.rgb;
          vec3 glow = vec3(0.0);
          float sdv = floor(vSeed * 997.0) / 997.0;
          ${Et==="bld"?`
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
                vec2 auv = vec2((mod(cell, ${D}.0) + suv.x) / ${D}.0, 1.0 - (floor(cell / ${D}.0) + 1.0 - suv.y) / ${Math.max(1,L)}.0);
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
totalEmissiveRadiance += glow;`)};let Fe=new ns(V,J,St);Fe.customDepthMaterial=new Zs({depthPacking:Ac}),Fe.customDepthMaterial.onBeforeCompile=on=>ze(on);let Fs=new Le,so=new ne,ro=new N;return X.forEach((on,Ri)=>{typeof on=="number"&&R[on].push([Fe,Ri]),ct(on,Fs,so,ro),Fe.setMatrixAt(Ri,Fs),Fe.setColorAt(Ri,so),de[Ri]=typeof on=="number"?l.plate[on]:on.plate,re[Ri]=Si((typeof on=="number"?on:Ri+7001)*3+1),_e.set([ro.x,ro.y,ro.z],Ri*3),Ye[Ri]=ro.w||0}),Fe.count=X.length,Fe.instanceMatrix.needsUpdate=!0,Fe.instanceColor&&(Fe.instanceColor.needsUpdate=!0),Fe.userData={name:C,idx:typeof X[0]=="number"?X:[],hl:Mt,vis:At,delay:kt,geo:V},Fe.frustumCulled=!1,Et!=="small"&&(Fe.castShadow=!0,Fe.receiveShadow=!0),x.add(Fe),v.push(Fe),Fe}let D=10,$=new Int32Array(a),L=Math.ceil($t.filter(C=>t.nodes[C].t==="c").length/D);ae.uSign={value:(()=>{let J=document.createElement("canvas");J.width=D*192,J.height=Math.max(1,L)*48;let X=J.getContext("2d");X.fillStyle="#000",X.fillRect(0,0,J.width,J.height),X.fillStyle="#fff",X.textAlign="center",X.textBaseline="middle";let ct=0;for(let St of $t){let Mt=t.nodes[St];if(Mt.t!=="c")continue;let At=String(Mt.n).replace(/[\s,]+(S\.?\/?A\.?|Ltda\.?|Holding|Participa[cç][oõ]es|Companhia|Cia\.?)\b.*$/i,"").replace(/\s*\(.*?\)\s*$/,"").slice(0,18).trim().toUpperCase();X.font='700 30px "Inter", "Helvetica Neue", Arial, sans-serif';let kt=X.measureText(At).width,de=Math.min(1,174/Math.max(1,kt));X.font=`700 ${Math.round(30*de)}px "Inter", "Helvetica Neue", Arial, sans-serif`,X.fillText(At,(ct%D+.5)*192,(Math.floor(ct/D)+.52)*48),$[St]=++ct}let Et=new Oi(J);return Et.anisotropy=_.capabilities.getMaxAnisotropy(),Et.generateMipmaps=!0,Et.minFilter=ni,Et})()};let k=new N,st=new qn,Y=new N,gt=(C,V,J,X)=>{V.compose(k.set(j[C],g,ht[C]),st.identity(),Y.set(vt[C],ut[C],bt[C]));let ct=t.nodes[C];E(ct.t==="c"?n.sector(ct.c):n.kind(ct),J),X.set(vt[C],ut[C],bt[C]),X.w=$[C]*(K[C]==="tower"&&ut[C]>3.2?-1:1)},Tt=()=>new un({color:16777215,roughness:.7,metalness:0,envMapIntensity:2.2}),Dt=[],qt=[];for(let C of $t)(K[C]==="tower"&&ut[C]>3.2?Dt:qt).push(C);T("tall",Ru(!0),Tt(),Dt,gt,"bld"),T("low",Ru(!1),Tt(),qt,gt,"bld");let jt=sp(),B=[],_t=[];for(let[C,V]of Object.entries(jt)){let J=[];for(let X of $t)t.nodes[X].t==="c"&&t.nodes[X].c===C&&(!V.top||K[X]==="tower"&&ut[X]>3.2)&&J.push(X);J.length&&T(`prop-${C}`,V.geo,Tt(),J,(X,ct,Et,St)=>{let Mt=(vt[X]+bt[X])/2,At=V.top?Mt*.62:Mt*(K[X]==="tower"?.95:.8),kt=V.top?j[X]:j[X]+vt[X]/2+At*.52,de=V.top?g+ut[X]:g,re=V.top?ht[X]:ht[X]+bt[X]*.12;ct.compose(k.set(kt,de,re),st.identity(),Y.set(At,At,At)),E(n.sector(C),Et),St.set(At,At,At),St.w=0,V.rotor&&_t.push([X,kt+V.rotor[0]*At,de+V.rotor[1]*At,re+V.rotor[2]*At,At]);for(let _e of V.smoke||[])B.push([X,kt+_e[0]*At,de+_e[1]*At,re+_e[2]*At,At])},"bld")}let nt=_t.map(C=>({node:C[0],x:C[1],y:C[2],z:C[3],s:C[4]}));for(let C of Vt){let V=jt[C],J=Ft.filter(X=>X.sec===C);!V||!J.length||T(`decor-${C}`,V.geo.clone(),Tt(),J,(X,ct,Et,St)=>{ct.compose(k.set(X.x,g,X.z),st.identity(),Y.set(X.s,X.s,X.s)),E(n.sector(C),Et),St.set(X.s,X.s,X.s),St.w=0,V.rotor&&nt.push({plate:X.plate,x:X.x+V.rotor[0]*X.s,y:g+V.rotor[1]*X.s,z:X.z+V.rotor[2]*X.s,s:X.s});for(let Mt of V.smoke||[])B.push([-1,X.x+Mt[0]*X.s,g+Mt[1]*X.s,X.z+Mt[2]*X.s,X.s])},"bld")}for(let C of[nt.filter(V=>V.node!=null),nt.filter(V=>V.node==null)]){if(!C.length)continue;let V=new Map(C.map(J=>[J.node,J]));T("rotor",rp(),new un({color:16777215,roughness:.5}),C[0].node!=null?C.map(J=>J.node):C,(J,X,ct,Et)=>{let St=typeof J=="number"?V.get(J):J;X.compose(k.set(St.x,St.y,St.z),st.identity(),Y.set(St.s,St.s,St.s)),ct.setRGB(.95,.95,.95),Et.set(St.s,St.s,St.s),Et.w=0},"spin")}let pt={pawn:[],tile:[],inv:[]};for(let C=0;C<a;C++)le[C]||pt[K[C]==="pawn"?"pawn":K[C]==="inv"?"inv":"tile"].push(C);let It=ap(),yt=(()=>{let C=new Ge(1.3,1.3,1.3);return C.translate(0,.65,0),C})(),Kt=(()=>{let C=new Bo(1,0);return C.scale(.82,1.15,.82),C.translate(0,1.15,0),C})(),Zt=(C,V,J,X)=>{let ct=ot[C]*(K[C]==="pawn"?1.3:1);V.compose(k.set(j[C],lt[C],ht[C]),st.identity(),Y.set(ct,ct,ct)),E(n.kind(t.nodes[C]),J),X.set(ct,ct,ct),X.w=ge[C]?1:0},Ie=C=>new un({color:16777215,roughness:.4,metalness:.05,flatShading:!!C});T("pawn",It,Ie(),pt.pawn,Zt,"small"),T("tile",yt,Ie(),pt.tile,Zt,"small"),T("inv",Kt,Ie(!0),pt.inv,Zt,"small");let Me={uDim:{value:0},uRise:{value:1}};{let C=new un({vertexColors:!0,roughness:.92}),V=St=>{Object.assign(St.uniforms,Me),St.vertexShader=St.vertexShader.replace("#include <common>",`#include <common>
uniform float uRise;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed *= smoothstep(0.55, 1.2, uRise);`)};C.onBeforeCompile=St=>{V(St),St.fragmentShader=St.fragmentShader.replace("#include <common>",`#include <common>
uniform float uDim;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11))) * 0.86, 0.9 * uDim);`)};let J=new ns(op(),C,Nt.length);J.customDepthMaterial=new Zs({depthPacking:Ac}),J.customDepthMaterial.onBeforeCompile=V;let X=new Le,ct=new ne,Et=new Yn;Nt.forEach(([St,Mt,At],kt)=>{let de=Si(kt*5.1+2);X.compose(k.set(St,g,Mt),st.setFromEuler(Et.set(0,de*6.28,0)),Y.set(At,At*(.85+.4*Si(kt+9)),At)),J.setMatrixAt(kt,X),de>.97?ct.setRGB(.95,.77,.2):de>.945?ct.setRGB(.93,.56,.68):de>.93?ct.setRGB(.62,.5,.82):ct.setHSL(.26+.06*Si(kt*1.3),.36+.14*Si(kt*2.1),.3+.1*Si(kt*3.7)),J.setColorAt(kt,ct)}),J.castShadow=!0,J.receiveShadow=!0,J.frustumCulled=!1,x.add(J)}let en={uTime:{value:0},uDim:{value:0},uRise:{value:1},uMask:{value:oe},uSize:{value:new Pt(u,f)}};function ln(C,V,J){if(!V.length)return;let X=V.length,ct=new Float32Array(X*3),Et=new Float32Array(X*3);C.setAttribute("aMove",new Fi(ct,3)),C.setAttribute("aPh",new Fi(Et,3));let St=new un({vertexColors:!0,roughness:.42,metalness:.1,envMapIntensity:1.6});St.onBeforeCompile=re=>{Object.assign(re.uniforms,en),re.vertexShader=re.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aMove; attribute vec3 aPh; uniform float uTime; uniform float uRise; uniform sampler2D uMask; uniform vec2 uSize;`).replace("#include <project_vertex>",`float mt = fract(aPh.x + uTime * aPh.y);
          vec3 ctr = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz + aMove * mt;
          ctr.y += aPh.z * sin(uTime * 1.3 + aPh.x * 30.0);
          float show = smoothstep(0.0, 0.03, mt) * smoothstep(1.0, 0.97, mt) * smoothstep(1.0, 1.3, uRise);
          ${J?"show *= 1.0 - smoothstep(0.3, 0.5, texture2D(uMask, vec2(ctr.x / uSize.x + 0.5, 0.5 - ctr.z / uSize.y)).g);":""}
          vec4 mvPosition = modelViewMatrix * vec4(ctr + mat3(instanceMatrix) * transformed * show, 1.0);
          gl_Position = projectionMatrix * mvPosition;`),re.fragmentShader=re.fragmentShader.replace("#include <common>",`#include <common>
uniform float uDim;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11))) * 0.86, 0.9 * uDim);`)};let Mt=new ns(C,St,X),At=new Le,kt=new ne,de=new Yn;V.forEach((re,_e)=>{At.compose(k.set(re.x,re.y||g,re.z),st.setFromEuler(de.set(0,re.yaw,0)),Y.set(re.s,re.s,re.s)),Mt.setMatrixAt(_e,At),Mt.setColorAt(_e,kt.setRGB(...re.col)),ct.set([re.mx,0,re.mz],_e*3),Et.set([re.ph,re.sp,re.bob||0],_e*3)}),Mt.frustumCulled=!1,x.add(Mt)}{let C=[[.93,.93,.92],[.93,.93,.92],[.72,.74,.77],[.72,.74,.77],[.14,.15,.18],[.14,.15,.18],[.75,.12,.1],[.12,.28,.6],[.95,.74,.12],[.2,.42,.34]],V=[],J=c?9:4.2;for(let ct of F)for(let Et=0;Et<2;Et++){let St=(Et?ct.z0:ct.x0)+.3,Mt=(Et?ct.z1:ct.x1)-.3,At=Et?ct.x0:ct.z0,kt=Et?ct.x1:ct.z1,de=Mt-St;for(let re=Math.ceil((At+.5)/p);re*p<kt-.5;re++)for(let _e of[1,-1]){let Ye=Math.max(1,Math.round(de/J*(.6+wt()*.8))),Ze=(.22+wt()*.2)/de;for(let ze=0;ze<Ye;ze++){let Fe=re*p+_e*(Et?-.043:.043),Fs=_e>0?St:Mt;V.push({x:Et?Fe:Fs,z:Et?Fs:Fe,yaw:Et?_e>0?-Math.PI/2:Math.PI/2:_e>0?0:Math.PI,s:1,mx:Et?0:_e*de,mz:Et?_e*de:0,ph:(ze+wt()*.7)/Ye,sp:Ze,col:C[Math.floor(wt()*C.length)]})}}}ln(lp(),V,!0);let X=[[],[]];for(let ct=0;ct<400&&X[0].length+X[1].length<(c?26:46);ct++){let Et=(wt()-.5)*(u+50),St=(wt()-.5)*(f+46),Mt=Math.abs(Et)-(u/2+9),At=Math.abs(St)-(f/2+7),kt=Math.hypot(Math.max(Mt,0),Math.max(At,0))+Math.min(Math.max(Mt,At),0);if(kt<4.8||kt>15)continue;let de=wt()*6.283,re=5+wt()*6,_e=wt()<.62?0:1;X[_e].push({x:Et,z:St,y:.02,yaw:-de,s:2.2+wt()*1.8,mx:Math.cos(de)*re,mz:Math.sin(de)*re,ph:wt(),sp:(_e?.03:.012)/re*4,bob:.012,col:wt()<.75?[.95,.95,.94]:wt()<.5?[.2,.3,.5]:[.75,.2,.16]})}ln(Pu(0),X[0],!1),ln(Pu(1),X[1],!1)}let Ln=[];for(let C=0;C<a;C++)le[C]||Ln.push(C);let ci={uDim:{value:0},uPx:{value:1},uRise:{value:1},uTime:{value:0},uFocus:{value:-1}},Ns=(()=>{let C=Ln.length,V=new Float32Array(C*3),J=new Float32Array(C*3),X=new Float32Array(C),ct=new ne,Et=new Ue;Ln.forEach((At,kt)=>{V.set([j[At],lt[At]+ut[At]*.55,ht[At]],kt*3),E(n.kind(t.nodes[At]),ct),J.set([ct.r,ct.g,ct.b],kt*3),X[kt]=ge[At]?ot[At]*5:ot[At]*2.4}),Et.setAttribute("position",new ye(V,3)),Et.setAttribute("aCol",new ye(J,3)),Et.setAttribute("aSize",new ye(X,1)),Et.setAttribute("aHL",new ye(new Float32Array(C),1)),Et.setAttribute("aVis",new ye(new Float32Array(C).fill(1),1)),Et.setAttribute("aSky",new ye(Float32Array.from(Ln,At=>ge[At]?1:0),1)),Et.setAttribute("aPlate",new ye(Float32Array.from(Ln,At=>l.plate[At]),1));let St=new ke({uniforms:ci,transparent:!0,depthWrite:!1,vertexShader:`attribute vec3 aCol; attribute float aSize; attribute float aHL; attribute float aVis; attribute float aSky; attribute float aPlate; uniform float uPx; uniform float uDim; uniform float uRise; uniform float uTime; uniform float uFocus; varying vec3 vCol; varying float vA; varying float vSky;
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
          vCol = aCol; vSky = aSky; }`,fragmentShader:"varying vec3 vCol; varying float vA; varying float vSky; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = vSky > 0.5 ? pow(max(0.0, 1.0 - d), 1.6) : 1.0 - smoothstep(0.6, 1.0, d); gl_FragColor = vec4(mix(vCol, vec3(1.0), vSky * 0.5), a * vA); }"}),Mt=new Ir(Et,St);return Mt.frustumCulled=!1,Mt.renderOrder=2,x.add(Mt),Mt})(),Ti=new Int32Array(a).fill(-1);Ln.forEach((C,V)=>{Ti[C]=V});let Ut={uTime:{value:0},uPx:{value:1},uDim:{value:0},uRise:{value:1}};if(B.length&&!r){let V=B.length*5,J=new Float32Array(V*3),X=new Float32Array(V*2);B.forEach((St,Mt)=>{for(let At=0;At<5;At++)J.set([St[1],St[2],St[3]],(Mt*5+At)*3),X.set([(At+Si(Mt))/5,St[4]],(Mt*5+At)*2)});let ct=new Ue;ct.setAttribute("position",new ye(J,3)),ct.setAttribute("aPh",new ye(X,2));let Et=new Ir(ct,new ke({uniforms:Ut,transparent:!0,depthWrite:!1,vertexShader:"attribute vec2 aPh; uniform float uTime; uniform float uPx; varying float vA; void main(){ float t = fract(uTime * 0.16 + aPh.x); vec3 p = position; p.y += t * 1.5 * aPh.y; p.x += (t * t * 0.7 + 0.06 * sin(uTime + aPh.x * 20.0)) * aPh.y; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((0.12 + 0.5 * t) * aPh.y * uPx / -mv.z, 1.0, 60.0); vA = smoothstep(0.0, 0.12, t) * (1.0 - t) * 0.5; }",fragmentShader:"uniform float uDim; uniform float uRise; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(0.93, 0.94, 0.96), pow(max(0.0, 1.0 - d), 1.4) * vA * (1.0 - 0.7 * uDim) * smoothstep(1.0, 1.35, uRise)); }"}));Et.frustumCulled=!1,x.add(Et)}let Jt=26,pe=new N,Ce=new N,We=new N;function Xe(C,V){let J=ge[C]?lt[C]+ut[C]*.15:Ot(C)*.9,X=Ot(V);pe.set(j[C],J,ht[C]),Ce.set(j[V],X,ht[V]);let ct=Math.hypot(j[V]-j[C],ht[V]-ht[C]);return ge[C]?We.set(bi(j[V],j[C],.12),bi(X,J,.82),bi(ht[V],ht[C],.12)):le[C]?We.set((j[C]+j[V])/2,Math.max(J,X)+.7+ct*.3,(ht[C]+ht[V])/2):We.set(bi(j[C],j[V],.6),Math.max(J,X)+.12+ct*.22,bi(ht[C],ht[V],.6)),new Ws(pe.clone(),We.clone(),Ce.clone())}let Cn=(C,V)=>!ge[C]&&!le[C]&&(l.anchor[C]===V||!le[V]&&!ge[V]&&l.anchor[C]===l.anchor[V]),pn={uDim:{value:0},uAlpha:{value:1},uFar:{value:1}},Dn=new ke({uniforms:pn,transparent:!0,depthWrite:!1,vertexShader:"attribute float aT; attribute vec2 aW; varying float vT; varying vec2 vW; void main(){ vT = aT; vW = aW; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uAlpha; uniform float uDim; uniform float uFar; varying float vT; varying vec2 vW;
      void main(){ float a = smoothstep(0.0, 0.08, vT) * (0.4 + 0.6 * vT); vec3 c = mix(vec3(0.3, 0.38, 0.55), vec3(0.05, 0.5, 0.38), vW.y);
        gl_FragColor = vec4(c, a * vW.x * uAlpha * (1.0 - 0.92 * uDim) * mix(uFar, 1.0, 0.4 * vW.y)); }`}),mn=null;function ls(C){let V=[],J=[],X=[],ct=(St,Mt,At,kt,de,re,_e,Ye,Ze,ze)=>{V.push(St,Mt,At,kt,de,re),J.push(_e,Ye),X.push(Ze,ze,Ze,ze)};for(let[St,Mt,,At]of t.edges||[]){if(C&&(!C[St]||!C[Mt]))continue;let kt=At&1;if(Cn(St,Mt)){let ze=j[Mt]-j[St],Fe=ht[Mt]-ht[St],Fs=Math.hypot(ze,Fe)||1,so=le[Mt]?Math.min(.92,Math.max(vt[Mt],bt[Mt])*.5/Fs):0;ct(j[St],g+.03,ht[St],j[Mt]-ze*so,g+.03,ht[Mt]-Fe*so,.2,1,kt?.75:.35,kt);continue}let de=Xe(St,Mt),re=kt?.5:.2,_e=0,Ye=0,Ze=0;for(let ze=0;ze<=Jt;ze++){let Fe=de.getPoint(ze/Jt,pe);ze&&ct(_e,Ye,Ze,Fe.x,Fe.y,Fe.z,(ze-1)/Jt,ze/Jt,re,kt),_e=Fe.x,Ye=Fe.y,Ze=Fe.z}}let Et=new Ue;Et.setAttribute("position",new ye(new Float32Array(V),3)),Et.setAttribute("aT",new ye(new Float32Array(J),1)),Et.setAttribute("aW",new ye(new Float32Array(X),2)),mn?(mn.geometry.dispose(),mn.geometry=Et):(mn=new Eo(Et,Dn),mn.frustumCulled=!1,mn.renderOrder=1,x.add(mn))}ls(null);let hi={uTime:{value:0},uGrow:{value:1},uPx:{value:1},uMinPx:{value:b}},or=new ke({uniforms:hi,transparent:!0,depthWrite:!1,vertexShader:`attribute float aPhase; attribute float aCtl; attribute float aLen; attribute float aHead; attribute float aRad; attribute vec3 aCenter; uniform float uPx; uniform float uMinPx;
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
      }`}),ui=new Ee(new Ue,or);ui.frustumCulled=!1,ui.renderOrder=3,x.add(ui);let Wn=1,cs=new N(0,1,0),Us=new qn;function w(C){if(ui.geometry.dispose(),!C.length){ui.geometry=new Ue;return}let V=(ct,Et,St)=>ct.setAttribute(Et,new ye(new Float32Array(ct.attributes.position.count).fill(St),1)),J=(ct,Et,St,Mt)=>{let At=ct.attributes.position.count,kt=new Float32Array(At*3);for(let de=0;de<At;de++)kt.set([Et,St,Mt],de*3);ct.setAttribute("aCenter",new ye(kt,3))},X=[];C.slice(0,320).forEach(([ct,Et,St,Mt],At)=>{let kt=Xe(ct,Et),de=kt.getLength(),re=(.035+.075*Math.sqrt(an((Mt>0?Mt:St?50:8)/100,.02,1)))*(c?1.25:1),_e=new Ys(kt,an(Math.round(de*2.2),14,80),re,6,!1);V(_e,"aPhase",At*.137%1),V(_e,"aCtl",St?1:0),V(_e,"aLen",de),V(_e,"aHead",0),V(_e,"aRad",re),J(_e,0,0,0),X.push(_e);let Ye=new ss(re*2.6,re*7,10,1),Ze=kt.getTangent(.985,pe).normalize();Ye.translate(0,re*3.5,0),Ye.applyQuaternion(Us.setFromUnitVectors(cs,Ze));let ze=kt.getPoint(1,Ce);Ye.translate(ze.x-Ze.x*re*7,ze.y-Ze.y*re*7,ze.z-Ze.z*re*7),V(Ye,"aPhase",0),V(Ye,"aCtl",St?1:0),V(Ye,"aLen",de),V(Ye,"aHead",1),V(Ye,"aRad",re),J(Ye,ze.x,ze.y,ze.z),X.push(Ye)}),ui.geometry=Hi(X),X.forEach(ct=>ct.dispose()),Wn=0}let H={v:0,to:0},rt={v:0,to:0,plate:-1};function tt(C,V=.7){for(let X of v)X.userData.hl.fill(0);let J=Ns.geometry.attributes.aHL;if(J.array.fill(0),C)for(let[X,ct]of C){for(let Et of R[X])Et[0].userData.hl[Et[1]]=ct;Ti[X]>=0&&(J.array[Ti[X]]=ct)}for(let X of v)X.userData.geo.attributes.aHL.needsUpdate=!0;J.needsUpdate=!0,H.to=C?V:0}function et(C){if(rt.plate=C,rt.to=C>=0?1:0,ae.uFocus.value=ci.uFocus.value=C,C>=0){let V=F[C];ue.uFocus.value.set(V.x0,V.z0,V.x1,V.z1)}}function Wt(C){for(let J of v){let{idx:X,vis:ct,geo:Et}=J.userData;X.forEach((St,Mt)=>{ct[Mt]=C[St]?1:0}),Et.attributes.aVis.needsUpdate=!0}let V=Ns.geometry.attributes.aVis;Ln.forEach((J,X)=>{V.array[X]=C[J]?1:0}),V.needsUpdate=!0,ls(C),S=2}let zt={t0:0,dur:0},Bt=0;function te(C=5200){let V=$t[0];for(let X of $t)ut[X]>ut[V]&&(V=X);for(let X of v){let{idx:ct,delay:Et,geo:St}=X.userData;ct.forEach((Mt,At)=>{Et[At]=an(Math.hypot(j[Mt]-j[V],(ht[Mt]-ht[V])*1.2)/95,0,1)*.85+Mt%7*.01}),St.attributes.aDelay.needsUpdate=!0}ae.uRise.value=0,zt.t0=performance.now(),zt.dur=C*.8;let J={x:Q.tx,z:Q.tz,d:Q.td};Q.x=j[V]+3,Q.z=ht[V]+6,Q.d=30,Q.yaw=-.5,Q.fly={a:{x:Q.x,z:Q.z,d:Q.d,yaw:Q.yaw},b:{...J,yaw:0},t0:performance.now(),dur:C,intro:!0},Bt=3}function ee(){if(Q.fly&&Q.fly.intro){let C=Q.fly;Q.fly=null,Q.tx=C.b.x,Q.tz=C.b.z,Q.td=C.b.d,Q.yaw=0}zt.dur&&(zt.t0=Math.min(zt.t0,performance.now()-zt.dur*.7))}let Ct={W:1,H:1,offX:0,offY:0,toX:0,toY:0,inset:{l:0,r:0,t:0,b:0}},Q={x:0,z:0,d:160,tx:0,tz:0,td:160,vx:0,vz:0,tilt:.5,yaw:0,sway:0,swayK:0,idleAt:performance.now(),fly:null},Qt=7,De=Math.max(260,f*2.4),je=C=>.5+.48*(1-pa(16,120,C));function He(){Q.tilt=je(Q.d);let C=Q.yaw+Q.sway,V=Math.sin(Q.tilt)*Q.d;A.position.set(Q.x+Math.sin(C)*V,Math.cos(Q.tilt)*Q.d,Q.z+Math.cos(C)*V),A.up.set(0,1,0),A.lookAt(Q.x,0,Q.z),x.fog.near=Q.d*1.3,x.fog.far=Q.d*4.4+60}let Re=new Ks,rn=new Pt;function Yt(C,V,J=g){rn.set(C/Ct.W*2-1,-(V/Ct.H)*2+1),Re.setFromCamera(rn,A);let X=(J-Re.ray.origin.y)/Re.ray.direction.y;return Re.ray.origin.clone().addScaledVector(Re.ray.direction,X)}function Sn(C,V,J,X,ct=1.08){let Et=A.fov*Math.PI/360,St=Ct.inset,Mt=Math.max(200,Ct.W-St.l-St.r),At=Math.max(160,Ct.H-St.t-St.b),kt=Mt/At,de=(V-C)*ct,re=(X-J)*ct,_e=100;for(let Ye=0;Ye<4;Ye++){let Ze=je(_e),ze=re/2*(Math.cos(Ze)/Math.tan(Et)+Math.sin(Ze)),Fe=de/2/(Math.tan(Et)*kt)+re/2*Math.sin(Ze)*.6;_e=Math.max(ze,Fe)*(Ct.H/At)}return an(_e+1,Qt,De)}function Ae(C,V,J,X=1100){Q.fly={a:{x:Q.x,z:Q.z,d:Q.d,yaw:Q.yaw},b:{x:C,z:V,d:J,yaw:0},t0:performance.now(),dur:X},Q.tx=C,Q.tz=V,Q.td=J,Q.vx=Q.vz=0}function wn(C,V,J,X,ct={}){let Et=Math.max(ct.minD||Qt,Sn(C,V,J,X,ct.pad||1.12));Ae((C+V)/2,(J+X)/2+(ct.dz||0),Et,ct.dur||1100)}function jn(C,V={}){if(!C.length)return;let J=1/0,X=-1/0,ct=1/0,Et=-1/0;for(let Mt of C)J=Math.min(J,j[Mt]-ot[Mt]),X=Math.max(X,j[Mt]+ot[Mt]),ct=Math.min(ct,ht[Mt]-ot[Mt]-Ot(Mt)*.75-.6),Et=Math.max(Et,ht[Mt]+ot[Mt]+.4);let St=V.minSpan||14;if(X-J<St){let Mt=(J+X)/2;J=Mt-St/2,X=Mt+St/2}if(Et-ct<St*.6){let Mt=(ct+Et)/2;ct=Mt-St*.3,Et=Mt+St*.3}wn(J,X,ct,Et,V)}function Ei(C,V={}){let J=F[C];wn(J.x0,J.x1,J.z0-2.5,J.z1,{pad:1.06,...V})}function hs(C=1100){wn(-u/2-2,u/2+2,-f/2-4,f/2+1,{pad:1.03,dur:C})}function Oe(C,V){let J=Yt(Ct.W/2,Ct.H/2),X=Yt(Ct.W/2+C,Ct.H/2+V);Q.x-=X.x-J.x,Q.z-=X.z-J.z,Q.tx=Q.x,Q.tz=Q.z,Q.fly=null,Be()}function Qe(C,V){let J=Yt(Ct.W/2,Ct.H/2),X=Yt(Ct.W/2+C*16,Ct.H/2+V*16);Q.vx=-(X.x-J.x),Q.vz=-(X.z-J.z)}function Ai(C,V,J){let X=Q.td,ct=an(Q.td*C,Qt,De);if(Q.fly=null,V!=null){let Et=Yt(V,J),St=1-ct/X;Q.tx+=(Et.x-Q.tx)*St,Q.tz+=(Et.z-Q.tz)*St}Q.td=ct}function Be(){Q.x=an(Q.x,-u*.62,u*.62),Q.z=an(Q.z,-f*.72,f*.78),Q.tx=an(Q.tx,-u*.62,u*.62),Q.tz=an(Q.tz,-f*.72,f*.78)}function Ci(){Q.idleAt=performance.now()}let Nn=new N;function Ta(C,V={}){let J=le[C]&&K[C]==="tower"?an(ae.uRise.value,.3,1):1;return Nn.set(j[C],lt[C]+ut[C]*J,ht[C]).project(A),V.x=(Nn.x*.5+.5)*Ct.W,V.y=(-Nn.y*.5+.5)*Ct.H,V.f=Nn.z<1&&V.x>-40&&V.x<Ct.W+40&&V.y>-40&&V.y<Ct.H+40?1:0,V.r=ot[C],V}function Ea(C,V,J,X={}){return Nn.set(C,V,J).project(A),X.x=(Nn.x*.5+.5)*Ct.W,X.y=(-Nn.y*.5+.5)*Ct.H,X.f=Nn.z<1?1:0,X}function Yu(){let C=Ea(Q.x,g,Q.z),V=Ea(Q.x+1,g,Q.z);return Math.hypot(V.x-C.x,V.y-C.y)}let Qc=[];function Dp(C,V,J){rn.set(C/Ct.W*2-1,-(V/Ct.H)*2+1),Re.setFromCamera(rn,A);let X=-1,ct=1/0;for(let kt of v){Qc.length=0,kt.raycast(Re,Qc);for(let de of Qc){let re=kt.userData.idx[de.instanceId];re==null||J&&!J[re]||de.distance<ct&&(ct=de.distance,X=re)}}if(X>=0)return X;let Et=matchMedia("(pointer: coarse)").matches?16:8,St=Yu(),Mt={},At=1/0;for(let kt=0;kt<a;kt++){if(J&&!J[kt]||(Ea(j[kt],lt[kt]+ut[kt]*.5,ht[kt],Mt),!Mt.f))continue;let de=Math.hypot(Mt.x-C,Mt.y-V),re=Math.max(2,ot[kt]*.8*St);if(de>Et+re)continue;let _e=de-re-(le[kt]||ge[kt]?3:0);_e<At&&(At=_e,X=kt)}return X}function Np(C,V){let J=Yt(C,V,0);for(let X of F)if(J.x>=X.x0&&J.x<=X.x1&&J.z>=X.z0&&J.z<=X.z1)return X.j;return-1}let ar={t:0,last:performance.now()};function Zu(C=performance.now()){let V=Math.min(.5,(C-ar.last)/1e3),J=Math.min(.05,V);if(ar.last=C,ar.t+=J,Bt&&!--Bt&&(zt.t0=C,Q.fly&&Q.fly.intro&&(Q.fly.t0=C)),Q.fly){let Mt=Q.fly,At=an((C-Mt.t0)/Mt.dur,0,1),kt=Mt.intro?At*At*(3-2*At):cp(At);Q.x=bi(Mt.a.x,Mt.b.x,kt),Q.z=bi(Mt.a.z,Mt.b.z,kt),Q.yaw=bi(Mt.a.yaw,Mt.b.yaw,kt),Q.d=Mt.intro?Math.exp(bi(Math.log(Mt.a.d),Math.log(Mt.b.d),kt)):bi(Mt.a.d,Mt.b.d,kt),At>=1&&(Q.fly=null,Q.tx=Mt.b.x,Q.tz=Mt.b.z,Q.td=Mt.b.d),Q.idleAt=C}else{Q.x+=Q.vx,Q.z+=Q.vz,Q.tx+=Q.vx,Q.tz+=Q.vz;let Mt=Math.pow(.88,J*60);Q.vx*=Mt,Q.vz*=Mt,Math.abs(Q.vx)+Math.abs(Q.vz)<.001&&(Q.vx=Q.vz=0);let At=Math.min(1,J*9);Q.x+=(Q.tx-Q.x)*At,Q.z+=(Q.tz-Q.z)*At,Q.d+=(Q.td-Q.d)*At,Q.yaw+=(0-Q.yaw)*Math.min(1,J*4),Be()}let X=r?0:pa(2500,7e3,C-Q.idleAt);if(Q.swayK=bi(Q.swayK,X,Math.min(1,J*1.5)),Q.sway=Math.sin(ar.t*.16)*.075*Q.swayK,Math.abs(Ct.toX-Ct.offX)+Math.abs(Ct.toY-Ct.offY)>.3){let Mt=1-Math.exp(-V*7);th(Ct.offX+(Ct.toX-Ct.offX)*Mt,Ct.offY+(Ct.toY-Ct.offY)*Mt)}He(),A.updateMatrixWorld(),H.v+=(H.to-H.v)*(1-Math.exp(-V*5)),rt.v+=(rt.to-rt.v)*(1-Math.exp(-V*5));let ct=Math.min(1,H.v*1.25);if(ae.uDim.value=ci.uDim.value=Ut.uDim.value=ct,Me.uDim.value=Math.max(ct,rt.v*.6),pn.uDim.value=Math.max(Math.min(1,H.v*1.3),rt.v*.7),ue.uDim.value=ct,ue.uFocusK.value=rt.v,ae.uTime.value=hi.uTime.value=ue.uTime.value=ci.uTime.value=Ut.uTime.value=en.uTime.value=ar.t,en.uDim.value=Math.max(ct,rt.v*.6),en.uRise.value=ae.uRise.value,zt.dur){let Mt=an((C-zt.t0)/zt.dur,0,1);ae.uRise.value=1.4*Mt,S=2,Mt>=1&&(zt.dur=0,ae.uRise.value=1.4)}let Et=ae.uRise.value;pn.uAlpha.value=pa(.8,1.35,Et),ci.uRise.value=Ut.uRise.value=Me.uRise.value=Et,pn.uFar.value=.12+.88*(1-pa(24,110,Q.d));let St=Ct.H*b/(2*Math.tan(A.fov*Math.PI/360));ci.uPx.value=hi.uPx.value=Ut.uPx.value=St,z&&(z.uniforms.uAmt.value=4.2*b*(1-pa(22,90,Q.d))*(1-.6*Math.min(1,H.v*1.3))),Wn=Math.min(1,Wn+V*1.25),hi.uGrow.value=cp(Wn)}let Un={n:0,acc:0,last:0,skip:45,level:0};function Up(C){let V=C-Un.last;if(Un.last=C,o||Un.level>=2||V>250||V<=0)return;if(Un.skip>0){Un.skip--;return}if(Un.acc+=V,++Un.n<50)return;let J=Un.acc/Un.n;Un.n=Un.acc=0,!(J<=42)&&(Un.level++,Un.skip=20,Un.level===1&&b>1.3?(b=1.25,_.setPixelRatio(b),O&&O.setPixelRatio(b),hi.uMinPx.value=b,Ku(Ct.W,Ct.H)):(Un.level=2,O&&(O.dispose(),O=null)))}function Ju(){Up(performance.now()),S>0&&(_.shadowMap.needsUpdate=!0,S--),O?O.render():_.render(x,A)}function Fp(){Zu();try{_.compile(x,A)}catch{}Ju(),ar.last=performance.now()}function Ku(C,V){Ct.W=Math.max(1,C),Ct.H=Math.max(1,V),_.setSize(Ct.W,Ct.H,!1),O&&(O.setSize(Ct.W,Ct.H),Z.resolution.set(Ct.W*.5,Ct.H*.5),z.uniforms.uRes.value.set(Ct.W*b,Ct.H*b)),A.aspect=Ct.W/Ct.H,A.updateProjectionMatrix(),th(Ct.offX,Ct.offY)}function ju(C,V,J=!1){Ct.toX=C,Ct.toY=V,J&&th(C,V)}function Op(C,V,J,X,ct=!1){Ct.inset={l:C,r:V,t:J,b:X},ju((C-V)/2,(J-X)/2,ct)}function th(C,V){Ct.offX=C,Ct.offY=V,A.setViewOffset(Ct.W,Ct.H,-C,-V,Ct.W,Ct.H)}return{renderer:_,scene:x,camera:A,cam:Q,view:Ct,plates:F,update:Zu,render:Ju,warmup:Fp,resize:Ku,setOffset:ju,setInsets:Op,pan:Oe,fling:Qe,zoom:Ai,flyTo:Ae,flyToBox:wn,flyToNodes:jn,flyToPlate:Ei,fitAll:hs,pick:Dp,plateAt:Np,project:Ta,projectPoint:Ea,pxPerUnit:Yu,setHighlight:tt,setFlows:w,setVisible:Wt,setFocusPlate:et,intro:te,skipIntro:ee,touch:Ci,isInv:Se,isGround:le,sky:ge,shape:K,X:j,Y:lt,Z:ht,R:ot,TOP:g,PLATE_H:0,get scale(){return d},get introK(){return Q.fly&&Q.fly.intro?Bt?0:an((performance.now()-Q.fly.t0)/Q.fly.dur,0,1):1},dispose(){_.dispose(),U.dispose()}}}var ma=new N;function ri(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ma.copy(t),ma[n]=0,ma.normalize();let c=.5*o/(o+a),h=1-ma.angleTo(i)/l;return Math.sign(ma[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Vc=class i extends Ge{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new N,c=new N,h=new N(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,y=new N,g=.5/o;for(let p=0,M=0;p<d.length;p+=3,M+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:y.set(1,0,0),f[M+0]=ri(y,c,"z","y",r,n),f[M+1]=1-ri(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),f[M+0]=1-ri(y,c,"z","y",r,n),f[M+1]=1-ri(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),f[M+0]=1-ri(y,c,"x","z",r,t),f[M+1]=ri(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),f[M+0]=1-ri(y,c,"x","z",r,t),f[M+1]=1-ri(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),f[M+0]=1-ri(y,c,"x","y",r,t),f[M+1]=1-ri(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),f[M+0]=ri(y,c,"x","y",r,t),f[M+1]=1-ri(y,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var as=(i,t,e)=>Math.max(t,Math.min(e,i)),Iu=i=>1-Math.pow(1-i,3),X_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Lu='"Inter", -apple-system, system-ui, sans-serif',ga='"IBM Plex Mono", ui-monospace, Menlo, monospace';function dp(i,t){let{W:e,colorOf:n,kindLabel:s,shortName:r,brl:o,pct:a,accent:l="#3cf0b4",onPick:c,onExt:h,canvas:d}=t,u=new ne(l),f=()=>innerWidth<=760,m=new es;m.background=new ne(461069),m.fog=new Vs(461069,24,60);let y=new gn(32,1,.1,200),g=new Cs(i);m.environment=g.fromScene(new Yr,.04).texture,m.environmentIntensity=.55;let p=new bs(16774378,2.4);p.position.set(-6,14,7),p.castShadow=!0,p.shadow.mapSize.set(2048,2048),Object.assign(p.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:1,far:50}),p.shadow.bias=-5e-4,p.shadow.normalBias=.02,p.shadow.radius=6,m.add(p,p.target);let M=new bs(10336511,.5);M.position.set(8,6,-4),m.add(M),m.add(new Js(12109533,724242,.45));let E={uAcc:{value:u},uGlow:{value:0}},_=new un({color:987929,roughness:.92,metalness:0,envMapIntensity:.2});_.onBeforeCompile=T=>{Object.assign(T.uniforms,E),T.vertexShader=T.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),T.fragmentShader=T.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWp; uniform vec3 uAcc; uniform float uGlow;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 g = abs(fract(vWp.xz / 0.5 + 0.5) - 0.5) * 0.5;
        float dotk = 1.0 - smoothstep(0.012, 0.022, length(g));
        float r = length(vWp.xz);
        diffuseColor.rgb += vec3(0.06, 0.075, 0.09) * dotk * (1.0 - smoothstep(10.0, 40.0, r));
        diffuseColor.rgb *= 1.0 - 0.45 * smoothstep(14.0, 48.0, r);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += uAcc * uGlow * 0.3 * exp(-pow(length(vWp.xz) / 2.0, 2.0));`)};let b=new Ee(new ti(260,260),_);b.rotation.x=-Math.PI/2,b.receiveShadow=!0,m.add(b);let S=new xi;m.add(S);let I=i.capabilities.getMaxAnisotropy();typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(T,D,$,L,k){this.moveTo(T+k,D),this.arcTo(T+$,D,T+$,D+L,k),this.arcTo(T+$,D+L,T,D+L,k),this.arcTo(T,D+L,T,D,k),this.arcTo(T,D,T+$,D,k),this.closePath()});function x(T,D,$){let L=document.createElement("canvas"),k=2;L.width=T*k,L.height=D*k;let st=L.getContext("2d");st.scale(k,k),$(st,T,D);let Y=new Oi(L);return Y.colorSpace=Tn,Y.anisotropy=Math.min(8,I),Y}function A(T,D,$,L){let k=String(D).split(/\s+/),st=[],Y="";for(let gt of k){let Tt=Y?`${Y} ${gt}`:gt;T.measureText(Tt).width<=$||!Y?Y=Tt:(st.push(Y),Y=gt)}if(Y&&st.push(Y),st.length>L){st.length=L;let gt=st[L-1];for(;gt.length>1&&T.measureText(`${gt}\u2026`).width>$;)gt=gt.slice(0,-1);st[L-1]=`${gt}\u2026`}return st}function U(T,D,$,L,k,st){T.save(),T.translate($,L),T.strokeStyle=st,T.fillStyle=st,T.lineWidth=k*.09,T.lineJoin="round",T.lineCap="round";let Y=k/2;if(T.beginPath(),D==="pf")T.arc(0,-Y*.32,Y*.3,0,Math.PI*2),T.stroke(),T.beginPath(),T.moveTo(-Y*.6,Y*.62),T.quadraticCurveTo(-Y*.6,Y*.05,0,Y*.05),T.quadraticCurveTo(Y*.6,Y*.05,Y*.6,Y*.62),T.stroke();else if(D==="gov"){T.moveTo(-Y*.7,-Y*.2),T.lineTo(0,-Y*.65),T.lineTo(Y*.7,-Y*.2),T.closePath(),T.stroke();for(let gt of[-.45,0,.45])T.beginPath(),T.moveTo(gt*Y,-Y*.1),T.lineTo(gt*Y,Y*.45),T.stroke();T.beginPath(),T.moveTo(-Y*.75,Y*.62),T.lineTo(Y*.75,Y*.62),T.stroke()}else D==="fund"||D==="pen"?(T.arc(0,0,Y*.62,-Math.PI/2,Math.PI*1.25),T.stroke(),T.beginPath(),T.moveTo(0,0),T.lineTo(0,-Y*.62),T.moveTo(0,0),T.lineTo(-Y*.44,Y*.44),T.stroke()):D==="ext"?(T.setLineDash([k*.12,k*.1]),T.strokeRect(-Y*.6,-Y*.45,Y*1.2,Y*.95)):(T.moveTo(-Y*.62,Y*.62),T.lineTo(-Y*.62,-Y*.35),T.lineTo(Y*.05,-Y*.65),T.lineTo(Y*.05,Y*.62),T.moveTo(Y*.05,-Y*.1),T.lineTo(Y*.62,Y*.05),T.lineTo(Y*.62,Y*.62),T.moveTo(-Y*.8,Y*.62),T.lineTo(Y*.8,Y*.62),T.stroke());T.restore()}let W=T=>T.t==="c"?"c":T.t==="p"?"pf":T.t==="s"?"sub":T.c,O={w:2.9,h:.26,d:1.12},Z=1.25,z=new Vc(O.w,O.h,O.d,5,.12),K=new ti(O.w-.16,O.d-.12);K.rotateX(-Math.PI/2);let j=(()=>{let T=new Nr,D=O.w/2+.07,$=O.d/2+.07,L=.2;T.moveTo(-D+L,-$),T.lineTo(D-L,-$),T.quadraticCurveTo(D,-$,D,-$+L),T.lineTo(D,$-L),T.quadraticCurveTo(D,$,D-L,$),T.lineTo(-D+L,$),T.quadraticCurveTo(-D,$,-D,$-L),T.lineTo(-D,-$+L),T.quadraticCurveTo(-D,-$,-D+L,-$);let k=new Xs,st=D-.035,Y=$-.035,gt=L-.03;k.moveTo(-st+gt,-Y),k.lineTo(st-gt,-Y),k.quadraticCurveTo(st,-Y,st,-Y+gt),k.lineTo(st,Y-gt),k.quadraticCurveTo(st,Y,st-gt,Y),k.lineTo(-st+gt,Y),k.quadraticCurveTo(-st,Y,-st,Y-gt),k.lineTo(-st,-Y+gt),k.quadraticCurveTo(-st,-Y,-st+gt,-Y),T.holes.push(k);let Tt=new zo(T,8);return Tt.rotateX(-Math.PI/2),Tt})(),lt=(()=>{let T=document.createElement("canvas");T.width=T.height=128;let D=T.getContext("2d"),$=D.createRadialGradient(64,64,0,64,64,64);return $.addColorStop(0,"rgba(255,255,255,1)"),$.addColorStop(.4,"rgba(255,255,255,.35)"),$.addColorStop(1,"rgba(255,255,255,0)"),D.fillStyle=$,D.fillRect(0,0,128,128),new Oi(T)})();function ht(T){return x(320,124,(D,$,L)=>{D.clearRect(0,0,$,L);let k=14,st=14,Y=44;D.fillStyle=T.dim?"#e9ebee":"#eef6f2",D.beginPath(),D.roundRect(k,st,Y,Y,10),D.fill(),D.strokeStyle=T.dim?"#cfd3d8":"#bfe7d7",D.lineWidth=1,D.stroke(),U(D,T.kind,k+Y/2,st+Y/2,26,T.dim?"#8a9097":"#1d9c70"),D.fillStyle=T.dim?"#5b616a":"#14171c",D.font=`700 19px ${Lu}`,D.textBaseline="alphabetic",A(D,T.name,$-80,2).forEach((jt,B)=>D.fillText(jt,70,34+B*22));let Tt=L-18;D.font=`600 14px ${ga}`,T.pct&&(D.fillStyle=T.ctl?"#0f8f63":"#3d4652",D.fillText(T.pct,14,Tt));let Dt=T.pct?D.measureText(T.pct).width+12:0;D.font=`500 12px ${ga}`,D.fillStyle="#6c7480";let qt=T.sub.toUpperCase();for(;qt.length>4&&D.measureText(qt).width>$-28-Dt;)qt=qt.slice(0,-2);D.fillText(qt,14+Dt,Tt),D.fillStyle=T.color,D.fillRect(14,L-8,Math.min($-28,40+200*(T.share||0)),2.5)})}function ot(T){return x(256,256,(D,$,L)=>{let k=D.createRadialGradient($/2,L/2,0,$/2,L/2,$/2);k.addColorStop(0,"#0f3a32"),k.addColorStop(1,"#08221d"),D.fillStyle=k,D.fillRect(0,0,$,L),D.textAlign="center";let st=T.tk||T.n.replace(/[^A-Za-zÀ-ÿ0-9 ]/g,"").split(/\s+/).filter(Boolean).slice(0,2).map(gt=>gt[0]).join("").toUpperCase();D.fillStyle="#e9fff6",D.font=`700 ${st.length>5?38:50}px ${Lu}`,D.fillText(st,$/2,L/2+4),D.font=`600 15px ${Lu}`,D.fillStyle="rgba(220,240,232,.78)";let Y=r(T.n);D.fillText(Y.length>24?`${Y.slice(0,22)}\u2026`:Y,$/2,L/2+36),D.font=`500 12px ${ga}`,D.fillStyle="rgba(150,230,200,.75)",D.fillText((T.t==="c"?T.mc?o(T.mc):"capital fechado":s(T)).toUpperCase(),$/2,L/2-44)})}let ut={uTime:{value:0},uAcc:{value:u},uGrow:{value:0}},vt=new ke({uniforms:ut,vertexShader:`attribute float aCtl; attribute float aPhase; attribute float aDir; attribute float aLen; varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying float vCtl; varying float vPhase; varying float vDir; varying float vLen;
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
      }`}),bt={open:!1,focus:-1,items:[],cables:null,hub:null,t0:0,a:0,aTo:0,hover:null,bounds:null},mt={x:0,z:1.2,dist:15,tx:0,tz:1.2,tdist:15,vx:0,vz:0,yaw:0};function ge(){for(let T of[...S.children])S.remove(T),T.traverse(D=>{if(D.geometry&&D.geometry!==z&&D.geometry!==K&&D.geometry!==j&&D.geometry.dispose(),D.material)for(let $ of[].concat(D.material))$.map&&$.map!==lt&&$.map.dispose(),$!==vt&&$.dispose()});bt.items=[],bt.cables=null,bt.hub=null}function le(T,D){ge();let $=e.nodes[T],L=[{key:`w${T}`,w:T,lvl:0}],k=new Map([[T,L[0]]]),st=[],Y=[T];for(let Ut=-1;Ut>=-4&&Y.length;Ut--){let Jt=[];for(let pe of Y){let Ce=e.inc[pe].filter(We=>e.ef[We]&1||e.ep[We]>=5||e.ep[We]<0).sort((We,Xe)=>(e.ef[Xe]&1)-(e.ef[We]&1)||e.ep[Xe]-e.ep[We]).slice(0,Ut===-1?14:5);for(let We of Ce){let Xe=e.es[We];if(!k.has(Xe)){if(Ut<-1&&!(e.ef[We]&1))continue;let Cn={key:`w${Xe}`,w:Xe,lvl:Ut};k.set(Xe,Cn),L.push(Cn),Jt.push(Xe)}k.get(Xe).lvl<k.get(pe).lvl&&st.push({a:k.get(Xe),b:k.get(pe),p:e.ep[We],ctl:e.ef[We]&1})}}Y=Jt}let gt=e.out[T].filter(Ut=>!k.has(e.et[Ut])).sort((Ut,Jt)=>(e.ef[Jt]&1)-(e.ef[Ut]&1)||e.ep[Jt]-e.ep[Ut]);for(let Ut of gt){let Jt=e.et[Ut],pe={key:`w${Jt}`,w:Jt,lvl:1};k.set(Jt,pe),L.push(pe),st.push({a:k.get(T),b:pe,p:e.ep[Ut],ctl:e.ef[Ut]&1})}for(let Ut of D||[]){let Jt=String(Ut.cnpj||"").replace(/\D/g,""),pe=e.byCnpj.get(Jt);if(pe!=null&&k.has(pe))continue;let Ce=pe!=null?{key:`w${pe}`,w:pe,lvl:1}:{key:`x${Jt||Ut.n}`,ext:Ut,lvl:1};pe!=null&&k.set(pe,Ce),L.push(Ce),st.push({a:k.get(T),b:Ce,p:Ut.pct,ctl:(Ut.pct||0)>50})}for(let Ut of L.filter(Jt=>Jt.lvl===1&&Jt.w!=null).slice(0,18))for(let Jt of e.out[Ut.w].filter(pe=>e.ef[pe]&1).slice(0,4)){let pe=e.et[Jt];if(k.has(pe))continue;let Ce={key:`w${pe}`,w:pe,lvl:2};k.set(pe,Ce),L.push(Ce),st.push({a:Ut,b:Ce,p:e.ep[Jt],ctl:1})}let Tt=L.filter(Ut=>Ut.lvl>0);if(Tt.length>64){let Ut=new Set(Tt.slice(0,64));for(let Jt=L.length-1;Jt>=0;Jt--)L[Jt].lvl>0&&!Ut.has(L[Jt])&&L.splice(Jt,1);for(let Jt=st.length-1;Jt>=0;Jt--)(!L.includes(st[Jt].b)||!L.includes(st[Jt].a))&&st.splice(Jt,1)}let qt=Ot(L,st).map(Ut=>{let Jt=xt(Ut);return S.add(Jt),Jt}),jt=new xi,B=Z,_t=[[0,0],[B,0],[B+.06,.05],[B+.08,.16],[B+.06,.34],[B,.4],[B-.12,.42],[0,.42]].map(([Ut,Jt])=>new Pt(Ut,Jt)),nt=new Ee(new Oo(_t,96),new un({color:1063475,roughness:.32,metalness:.55}));nt.castShadow=!0,nt.receiveShadow=!0;let pt=new Ee(new ko(B-.2,.045,16,128),new un({color:u,emissive:u,emissiveIntensity:1.6,roughness:.3}));pt.rotation.x=-Math.PI/2,pt.position.y=.43;let It=ot($),yt=new Ee(new Ro(B-.3,64),new un({color:16777215,roughness:.45,metalness:.2,map:It,emissive:16777215,emissiveMap:It,emissiveIntensity:.35}));yt.rotation.x=-Math.PI/2,yt.position.y=.425;let Kt=new Ee(new ti(6,6),new _i({map:lt,color:u,transparent:!0,opacity:.22,blending:ws,depthWrite:!1}));Kt.rotation.x=-Math.PI/2,Kt.position.y=.012,jt.add(nt,pt,yt,Kt),jt.userData={key:`w${T}`,w:T,nd:L[0],ring:pt,glow:Kt},S.add(jt),bt.hub=jt;let Zt=Math.max(1,...st.map(Ut=>Ut.p||0));for(let Ut of L){if(Ut.lvl===0)continue;let Jt=Ut.w!=null?e.nodes[Ut.w]:null,pe=Ut.lvl<0?st.find(mn=>mn.a===Ut):st.find(mn=>mn.b===Ut),Ce=!!(pe&&pe.ctl),We=Jt?{name:r(Jt.n),kind:W(Jt),color:n(Jt),sub:Jt.t==="c"?[Jt.tk,Jt.mc?o(Jt.mc):"capital fechado"].filter(Boolean).join(" \xB7 "):s(Jt),pct:pe&&pe.p>=0?a(pe.p):"",ctl:Ce,share:(pe?.p||0)/Zt}:{name:Ut.ext.n,kind:"ext",color:"#8a9097",sub:Ut.ext.pais&&!/^brasil$/i.test(Ut.ext.pais)?Ut.ext.pais:"capital fechado",pct:pe&&pe.p>=0?a(pe.p):"",ctl:Ce,dim:!0,share:(pe?.p||0)/Zt},Xe=new xi,Cn=new Ee(z,new un({color:We.dim?12172739:15264492,roughness:.5,metalness:0}));Cn.castShadow=!0,Cn.receiveShadow=!0,Cn.position.y=O.h/2+.02;let pn=new Ee(K,new un({map:ht(We),transparent:!0,roughness:.55}));pn.position.y=O.h+.022;let Dn=new Ee(j,new _i({color:Ce?u:new ne(7306380),transparent:!0,opacity:Ce?.9:.35,blending:ws,depthWrite:!1}));Dn.position.y=.015,Xe.add(Cn,pn,Dn),Xe.position.set(Ut.x,0,Ut.z),Xe.userData={nd:Ut,card:Cn,rim:Dn,ctl:Ce,baseY:0},S.add(Xe),bt.items.push(Xe)}let Ie=[];if(st.forEach((Ut,Jt)=>{let pe=Ut.a.lvl===0?null:Ut.a,Ce=Ut.b.lvl===0?null:Ut.b,We=pe?new N(pe.x,.13,pe.z+(pe.z<(Ce?Ce.z:0)?O.d/2:-O.d/2)):null,Xe=Ce?new N(Ce.x,.13,Ce.z+(Ce.z<(pe?pe.z:0)?O.d/2:-O.d/2)):null,Cn=Us=>{let w=new N(Us.x,0,Us.z).normalize();return new N(w.x*(B+.05),.16,w.z*(B+.05))},pn=We||Cn(Xe),Dn=Xe||Cn(We),mn=Dn.z-pn.z,ls=pn.clone().add(new N(0,0,mn*.5)),hi=Dn.clone().add(new N(0,0,-mn*.5));pe||ls.copy(pn).add(new N(pn.x*.5,0,pn.z*.5)),Ce||hi.copy(Dn).add(new N(Dn.x*.5,0,Dn.z*.5));let or=new Dr(pn,ls,hi,Dn),ui=or.getLength(),Wn=new Ys(or,Math.max(24,Math.round(ui*10)),Ut.ctl?.085:.05,10,!1),cs=Wn.attributes.position.count;Wn.setAttribute("aCtl",new ye(new Float32Array(cs).fill(Ut.ctl?1:0),1)),Wn.setAttribute("aPhase",new ye(new Float32Array(cs).fill(Jt*.173%1),1)),Wn.setAttribute("aDir",new ye(new Float32Array(cs).fill(1),1)),Wn.setAttribute("aLen",new ye(new Float32Array(cs).fill(ui),1)),Ie.push(Wn)}),Ie.length){let Ut=Se(Ie),Jt=new Ee(Ut,vt);Jt.castShadow=!0,S.add(Jt),bt.cables=Jt}let Me=-2,en=2,ln=-2,Ln=2;for(let Ut of L)Me=Math.min(Me,Ut.x-O.w/2),en=Math.max(en,Ut.x+O.w/2),ln=Math.min(ln,Ut.z-O.d/2),Ln=Math.max(Ln,Ut.z+O.d/2);for(let Ut of qt){let Jt=Ut.userData;Me=Math.min(Me,Jt.x0),en=Math.max(en,Jt.x1),ln=Math.min(ln,Jt.z-.3),Ln=Math.max(Ln,Jt.z+.3)}bt.bounds={x0:Me,x1:en,z0:ln,z1:Ln};let ci=f()?3:5,Ns=L.filter(Ut=>Ut.lvl===1).sort((Ut,Jt)=>Ut.z-Jt.z||Ut.x-Jt.x).slice(0,ci*2),Ti=L.filter(Ut=>Ut.lvl===-1).sort((Ut,Jt)=>Jt.z-Ut.z||Ut.x-Jt.x);bt.near=L.filter(Ut=>Ut.lvl===0).concat(f()?Ti.slice(0,ci*2):Ti,Ns)}function Se(T){let D=0,$=0;for(let Dt of T)D+=Dt.attributes.position.count,$+=Dt.index.count;let L=new Ue,k=["position","normal","uv","aCtl","aPhase","aDir","aLen"],st={};for(let Dt of k)st[Dt]=new Float32Array(D*T[0].attributes[Dt].itemSize);let Y=new Uint32Array($),gt=0,Tt=0;for(let Dt of T){for(let jt of k)st[jt].set(Dt.attributes[jt].array,gt*Dt.attributes[jt].itemSize);let qt=Dt.index.array;for(let jt=0;jt<qt.length;jt++)Y[Tt+jt]=qt[jt]+gt;gt+=Dt.attributes.position.count,Tt+=qt.length,Dt.dispose()}for(let Dt of k)L.setAttribute(Dt,new ye(st[Dt],T[0].attributes[Dt].itemSize));return L.setIndex(new ye(Y,1)),L}let ft={"-1":"Acionistas diretos","-2":"Quem controla os acionistas","-3":"Controle acima","-4":"Controle final",1:"Participa\xE7\xF5es e controladas",2:"Controladas das controladas"};function xt(T){let D=T.lvl===-1||T.lvl===1,$=`${ft[T.lvl]||(T.lvl<0?"Controle acima":"Mais abaixo")} \xB7 ${T.n}`.toUpperCase(),L=34,k=.3/L,st=document.createElement("canvas").getContext("2d");st.font=`600 17px ${ga}`;let Y=Math.ceil(st.measureText($).width+30),gt=x(Y,L,(_t,nt,pt)=>{_t.clearRect(0,0,nt,pt),_t.fillStyle=T.lvl<0?"rgba(150,170,200,.9)":"rgba(60,240,180,.85)",_t.beginPath(),D&&T.lvl<0?(_t.moveTo(2,pt/2+5),_t.lineTo(14,pt/2+5),_t.lineTo(8,pt/2-6)):D?(_t.moveTo(2,pt/2-5),_t.lineTo(14,pt/2-5),_t.lineTo(8,pt/2+6)):_t.arc(8,pt/2,4,0,Math.PI*2),_t.fill(),_t.font=`600 17px ${ga}`,_t.textBaseline="middle",_t.fillStyle="rgba(205,214,226,.82)",_t.fillText($,22,pt/2+1)}),Tt=Y*k,Dt=new ti(Tt,L*k);Dt.rotateX(-Math.PI/2);let qt=new Ee(Dt,new _i({map:gt,transparent:!0,depthWrite:!1,toneMapped:!1})),jt=D?Z+.45:T.n<=2?Math.min(T.x0,-Tt-1.7):T.x0,B=D?T.lvl<0?-.36:.36:T.zLab;return qt.position.set(jt+Tt/2,.012,B),qt.userData={band:T.lvl,x0:jt,x1:jt+Tt,z:B},qt}function Ot(T,D){let $=f()?3:5,L=.45,k=1.75,st=3.1,Y=new Map;for(let _t of T)(Y.get(_t.lvl)||Y.set(_t.lvl,[]).get(_t.lvl)).push(_t);let gt=_t=>{let nt=D.filter(pt=>pt.b===_t).map(pt=>pt.a.x||0);return nt.length?nt.reduce((pt,It)=>pt+It,0)/nt.length:0},Tt=_t=>{let nt=D.filter(pt=>pt.a===_t).map(pt=>pt.b.x||0);return nt.length?nt.reduce((pt,It)=>pt+It,0)/nt.length:0},Dt=Y.get(0)[0];Dt.x=0,Dt.z=0;let qt=[],jt=_t=>{let nt=Math.min($,_t);return-(nt*O.w+(nt-1)*L)/2},B=-st+.4;for(let _t of[...Y.keys()].filter(nt=>nt<0).sort((nt,pt)=>pt-nt)){let nt=Y.get(_t);nt.sort((pt,It)=>Tt(pt)-Tt(It));for(let pt=0;pt<nt.length;pt+=$){let It=nt.slice(pt,pt+$),yt=It.length*O.w+(It.length-1)*L;It.forEach((Kt,Zt)=>{Kt.x=-yt/2+O.w/2+Zt*(O.w+L),Kt.z=B}),B-=k}qt.push({lvl:_t,n:nt.length,x0:jt(nt.length),zLab:B+k-O.d/2-.36}),B-=st-k}B=st-.4;for(let _t of[...Y.keys()].filter(nt=>nt>0).sort((nt,pt)=>nt-pt)){let nt=Y.get(_t);_t>1&&nt.sort((pt,It)=>gt(pt)-gt(It)),qt.push({lvl:_t,n:nt.length,x0:jt(nt.length),zLab:B-O.d/2-.36});for(let pt=0;pt<nt.length;pt+=$){let It=nt.slice(pt,pt+$),yt=It.length*O.w+(It.length-1)*L;It.forEach((Kt,Zt)=>{Kt.x=-yt/2+O.w/2+Zt*(O.w+L),Kt.z=B}),B+=k}B+=st-k}return qt}let F={W:1,H:1,offX:0,offY:0,freeW:1,freeH:1,top:0};function dt(){y.setViewOffset(F.W,F.H,-F.offX,-F.offY,F.W,F.H)}function Rt(T){let D=bt.near&&bt.near.length>1?bt.near.reduce(($,L)=>({x0:Math.min($.x0,L.x-O.w/2),x1:Math.max($.x1,L.x+O.w/2),z0:Math.min($.z0,L.z-O.d/2),z1:Math.max($.z1,L.z+O.d/2)}),{x0:-2,x1:2,z0:-2,z1:2}):bt.bounds;wt(D,T)}function wt(T,D){let $=T.x1-T.x0+1.2,L=T.z1-T.z0+1.6,k=F.freeW/F.H,st=y.fov*Math.PI/360,Y=$/2/Math.tan(st)/k,gt=L/2/Math.tan(st)*(F.H/Math.max(200,F.freeH));mt.tdist=as(Math.max(Y,gt)*1.04,6,90),mt.tx=(T.x0+T.x1)/2,mt.tz=(T.z0+T.z1)/2,D&&(mt.dist=mt.tdist,mt.x=mt.tx,mt.z=mt.tz)}function Vt(){y.position.set(mt.x+Math.sin(mt.yaw)*Math.cos(1.5)*mt.dist,Math.sin(1.5)*mt.dist,mt.z+Math.cos(mt.yaw)*Math.cos(1.5)*mt.dist),y.lookAt(mt.x,0,mt.z),p.position.set(mt.x-6,14,mt.z+7),p.target.position.set(mt.x,0,mt.z)}let Ft=new Ks,Gt=new Pt;function Nt(T,D){Gt.set(T/F.W*2-1,-(D/F.H)*2+1),Ft.setFromCamera(Gt,y);let $=bt.items.map(k=>k.userData.card);bt.hub&&$.push(bt.hub.children[0]);let L=Ft.intersectObjects($,!1)[0];return L?L.object===bt.hub?.children[0]?bt.hub:bt.items.find(k=>k.userData.card===L.object):null}let $t=new Map,oe=null,Pe=null,ie=0;function ue(T,D){Gt.set(T/F.W*2-1,-(D/F.H)*2+1),Ft.setFromCamera(Gt,y);let $=-Ft.ray.origin.y/Ft.ray.direction.y;return Ft.ray.origin.clone().addScaledVector(Ft.ray.direction,$)}function G(T){if(bt.open){try{d.setPointerCapture(T.pointerId)}catch{}if($t.set(T.pointerId,{x:T.clientX,y:T.clientY}),$t.size===2){let[D,$]=[...$t.values()];Pe={d:Math.hypot(D.x-$.x,D.y-$.y)},oe=null;return}oe={sx:T.clientX,sy:T.clientY,x:T.clientX,y:T.clientY,moved:!1,g:ue(T.clientX,T.clientY)},mt.vx=mt.vz=0}}function fe(T){if(bt.open){if($t.has(T.pointerId)&&$t.set(T.pointerId,{x:T.clientX,y:T.clientY}),Pe&&$t.size===2){let[D,$]=[...$t.values()],L=Math.hypot(D.x-$.x,D.y-$.y);mt.tdist=as(mt.tdist*(Pe.d/Math.max(1,L)),5,90),mt.dist=mt.tdist,Pe.d=L;return}if(oe){if(!oe.moved&&Math.hypot(T.clientX-oe.sx,T.clientY-oe.sy)>6&&(oe.moved=!0,d.classList.add("dragging")),oe.moved){Vt(),y.updateMatrixWorld();let D=ue(T.clientX,T.clientY),$=oe.g.x-D.x,L=oe.g.z-D.z;mt.x+=$,mt.z+=L,mt.tx=mt.x,mt.tz=mt.z,mt.vx=$,mt.vz=L}return}if(T.pointerType==="mouse"){let D=Nt(T.clientX,T.clientY);D!==bt.hover&&(bt.hover=D,d.classList.toggle("pointing",!!D))}}}function ae(T){if(!bt.open)return;if($t.delete(T.pointerId),d.classList.remove("dragging"),Pe){$t.size<2&&(Pe=null);return}if(!oe)return;let D=oe;if(oe=null,D.moved)return;let $=performance.now(),L=$-ie<320;ie=$;let k=Nt(T.clientX,T.clientY);if(!k)return;let st=k.userData.nd;if(st.ext){h(st.ext);return}bt.selected=k,c(st.w,L&&k!==bt.hub)}function R(T){if(!bt.open)return;T.preventDefault();let D=Math.exp(T.deltaY*(T.ctrlKey?.012:.0016)),$=ue(T.clientX,T.clientY),L=as(mt.tdist*D,5,90),k=1-L/mt.tdist;mt.tx+=($.x-mt.tx)*k,mt.tz+=($.z-mt.tz)*k,mt.tdist=L}d.addEventListener("pointerdown",G),d.addEventListener("pointermove",fe),d.addEventListener("pointerup",ae),d.addEventListener("pointercancel",ae),d.addEventListener("wheel",R,{passive:!1});let v=performance.now(),q=0;function it(T){let D=Math.min(.05,(T-v)/1e3);v=T,q+=D;let $=as((T-bt.t0)/1400,0,1);if(bt.hub){let L=Iu(as($*1.8,0,1));bt.hub.scale.setScalar(.6+.4*L),bt.hub.position.y=-.4*(1-L),bt.hub.userData.ring.material.emissiveIntensity=1.2+.35*Math.sin(q*2.2)}bt.items.forEach((L,k)=>{let st=L.userData.nd,Y=as(($-.15-Math.min(.5,(Math.abs(st.lvl)-1)*.12+k%12*.025))/.35,0,1),gt=Iu(Y),Tt=bt.hover===L?1:0,Dt=bt.selected===L?1:0;L.userData.lift=(L.userData.lift||0)+(Tt*.18+Dt*.1-(L.userData.lift||0))*Math.min(1,D*12),L.position.y=-.5*(1-gt)+L.userData.lift,L.scale.setScalar(.85+.15*gt),L.visible=Y>0,L.userData.rim.material.opacity=(L.userData.ctl?.9:.35)*gt+Dt*.4}),ut.uGrow.value=X_(as(($-.3)/.6,0,1)),ut.uTime.value=q,E.uGlow.value=Iu(as($*1.5,0,1)),!oe&&!Pe&&(mt.x+=(mt.tx-mt.x)*Math.min(1,D*6),mt.z+=(mt.tz-mt.z)*Math.min(1,D*6)),mt.dist+=(mt.tdist-mt.dist)*Math.min(1,D*7),m.fog.near=mt.dist*1.35,m.fog.far=mt.dist*3.2,mt.yaw=0,Vt(),i.shadowMap.needsUpdate=!0,i.render(m,y)}return{get focus(){return bt.focus},open(T,D){le(T,D),bt.open=!0,bt.focus=T,bt.t0=performance.now(),bt.hover=null,bt.selected=bt.hub,Rt(!0),mt.dist=mt.tdist*1.25},close(){bt.open=!1,bt.focus=-1,ge()},frame:it,resize(T,D){F.W=T,F.H=D,y.aspect=T/D,y.updateProjectionMatrix(),dt()},setFree(T,D,$,L=0){F.offX=(T-D)/2,F.offY=(L-$)/2,F.freeW=Math.max(200,F.W-T-D),F.freeH=Math.max(200,F.H-$-L),dt(),bt.open&&Rt(!1)},zoom(T){mt.tdist=as(mt.tdist*T,5,90)},fit(){bt.bounds&&wt(bt.bounds)}}}var Du="mapa-4",jr=["fin","tech","saude","log","agro","ind","util","oil","base","cons","imob","out"];function pp(i){return i.t==="c"?i.mc?1.8+1.25*Math.log10(1+i.mc/1e8):1.8:i.t==="s"?1.2:i.v?1+.8*Math.log10(1+i.v/1e8):1}function $_(i){let t=i.nodes,e=t.length,n=new Int16Array(e).fill(-1),s=o=>{let a=jr.indexOf(o);return a<0?jr.length-1:a};t.forEach((o,a)=>{o.t==="c"&&(n[a]=s(o.c))});let r=Array.from({length:e},()=>[]);for(let[o,a,,l]of i.edges||[]){let c=l&1?3:1;r[o].push([a,c]),r[a].push([o,c])}for(let[o,a]of i.board||[])r[o].push([a,.3]),r[a].push([o,.3]);for(let o=0;o<6;o++){let a=0;for(let l=0;l<e;l++){if(n[l]>=0)continue;let c=new Float64Array(jr.length),h=!1;for(let[d,u]of r[l])n[d]>=0&&(c[n[d]]+=u*(t[d].t==="c"?2:1),h=!0);if(h){let d=0;for(let u=1;u<c.length;u++)c[u]>c[d]&&(d=u);n[l]=d,a++}}if(!a)break}for(let o=0;o<e;o++)n[o]<0&&(n[o]=jr.length-1);return n}function q_(i,t,e,n,s){let r=[],o=i.slice(),a=t,l=e,c=n,h=s,d=(u,f)=>{let m=u.reduce((g,p)=>g+p.a,0),y=0;for(let g of u){let p=m/f,M=g.a/p;y=Math.max(y,Math.max(p/M,M/p))}return y};for(;o.length;){let u=Math.min(c,h),f=[o.shift()];for(;o.length&&d([...f,o[0]],u)<=d(f,u);)f.push(o.shift());let m=f.reduce((y,g)=>y+g.a,0);if(c>=h){let y=m/h,g=l;for(let p of f){let M=p.a/y;r.push({...p,x0:a,y0:g,x1:a+y,y1:g+M}),g+=M}a+=y,c-=y}else{let y=m/c,g=a;for(let p of f){let M=p.a/y;r.push({...p,x0:g,y0:l,x1:g+M,y1:l+y}),g+=M}l+=y,h-=y}}return r}var Y_=1.62,mp=.62;function Z_(i){let t=i.nodes,e=t.length,n=Array.from({length:e},()=>[]),s=new Int32Array(e);for(let[M,E,_,b]of i.edges||[])n[M].push([E,_,b]),s[E]++;let r=Array.from({length:e},()=>[]);for(let[M,E]of i.board||[])r[M].push(E);let o=Uint8Array.from(t,(M,E)=>M.t==="c"||M.t==="s"||!n[E].length&&s[E]?1:0),a=new Array(e).fill(null),l=new Uint8Array(e),c=M=>{if(a[M])return a[M];if(l[M])return new Map;l[M]=1;let E=new Map;for(let[_,b,S]of n[M]){let I=(b>0?b:5)*(S&1?2:1);if(o[_])E.set(_,(E.get(_)||0)+I*Math.max(1e8,t[_].mc||0));else for(let[x,A]of c(_))E.set(x,(E.get(x)||0)+A*Math.min(100,I)/100)}return l[M]=0,a[M]=E},h=new Int32Array(e).fill(-1),d=new Uint8Array(e),u=new Uint8Array(e),f=M=>M.slice().sort((E,_)=>(t[_].mc||0)-(t[E].mc||0)||E-_)[0],m=-1;for(let M=0;M<e;M++)t[M].t==="c"&&(m<0||(t[M].mc||0)>(t[m].mc||0))&&(m=M);for(let M=0;M<e;M++){if(o[M])continue;let E=c(M);E.size===1?h[M]=E.keys().next().value:E.size>=2?d[M]=1:h[M]=r[M].length?f(r[M]):m}let y=new Int16Array(e).fill(-1),g=new Uint8Array(e),p=M=>{if(o[M])return 0;if(y[M]>=0)return y[M];if(g[M])return 0;g[M]=1;let E=0,_=99;for(let[b]of n[M]){let S=p(b);(!d[M]||d[b])&&(E=Math.max(E,d[b]||!d[M]?S:0)),_=Math.min(_,S)}return g[M]=0,y[M]=d[M]?E+1:(_===99?0:_)+1};for(let M=0;M<e;M++)if(!o[M]){let E=p(M);d[M]?d[M]=Math.min(6,E):u[M]=Math.min(9,E)}return{out:n,ground:o,reach:c,anchor:h,sky:d,depth:u}}function Nu(i,{log:t=()=>{},aspect:e=Y_}={}){let n=i.nodes,s=n.length,r=i.pos||[],{out:o,ground:a,reach:l,anchor:c,sky:h,depth:d}=Z_(i),u=$_(i),f=jr.length,m=new Map;for(let F=0;F<s;F++)c[F]>=0&&(m.get(c[F])||m.set(c[F],[]).get(c[F])).push(F);let y=Float64Array.from(n,F=>pp(F)*.62),g=new Map,p=new Float64Array(s),M=(F,dt)=>{let Rt=-1;for(let[wt,Vt,Ft]of o[F])wt===dt&&(Rt=Math.max(Rt,(Vt>0?Vt:0)+(Ft&1?1e3:0)));return Rt};for(let F=0;F<s;F++){if(!a[F])continue;let dt=m.get(F),Rt=y[F]*(n[F].t==="c"?2.1:1.42);if(!dt){p[F]=Rt+.9;continue}let wt=new Map;for(let Gt of dt){let Nt=d[Gt]||1;(wt.get(Nt)||wt.set(Nt,[]).get(Nt)).push(Gt)}let Vt=[],Ft=Rt+1.5;for(let Gt of[...wt.keys()].sort((Nt,$t)=>Nt-$t)){let Nt=wt.get(Gt);for(Gt===1&&Nt.sort(($t,oe)=>M(oe,F)-M($t,F)||(n[oe].v||0)-(n[$t].v||0)||$t-oe);Nt.length;){let $t=Math.max(4,Math.floor(2*Math.PI*Ft/1.5));Vt.push({r:Ft,d:Gt,list:Nt.splice(0,$t)}),Ft+=1.45}}g.set(F,Vt),p[F]=Ft-1.45+1.3}let E=new Float64Array(f);for(let F=0;F<s;F++)a[F]&&(E[u[F]]+=Math.PI*p[F]*p[F]);let _=[];for(let F=0;F<f;F++)E[F]>0&&_.push({k:F,c:jr[F],a:E[F]/.45});_.sort((F,dt)=>dt.a-F.a);let b=_.reduce((F,dt)=>F+dt.a,0),S=Math.sqrt(b*e),I=b/S,x=q_(_,0,0,S,I),A=Math.sqrt(b),U=A*Math.sqrt(1.62)*.02,W=x.map(F=>({c:F.c,k:F.k,x0:F.x0+U/2,y0:F.y0+U/2,x1:F.x1-U/2,y1:F.y1-U/2})),O=new Map(W.map((F,dt)=>[F.k,dt])),Z=new Float64Array(s),z=new Float64Array(s),K=F=>{let dt=Math.min(F.x1-F.x0,F.y1-F.y0)*.03+1,Rt=Math.min((F.y1-F.y0)*.12,A/Math.sqrt(1.62)*.035);return{x0:F.x0+dt,x1:F.x1-dt,y0:F.y0+dt+Rt,y1:F.y1-dt}},j=F=>{let dt=F.map((Gt,Nt)=>Nt).sort((Gt,Nt)=>F[Gt]-F[Nt]||Gt-Nt),Rt=new Float64Array(F.length);dt.forEach((Gt,Nt)=>{Rt[Gt]=(Nt+.5)/F.length});let wt=dt.map(Gt=>F[Gt]),Vt=wt[Math.floor(wt.length*.03)]??0,Ft=wt[Math.ceil(wt.length*.97)-1]??1;return F.map((Gt,Nt)=>.6*Rt[Nt]+.4*Math.min(1,Math.max(0,(Gt-Vt)/Math.max(1e-9,Ft-Vt))))};for(let F of W){let dt=[];for(let Ft=0;Ft<s;Ft++)a[Ft]&&u[Ft]===F.k&&dt.push(Ft);let Rt=K(F),wt=j(dt.map(Ft=>r[2*Ft]||0)),Vt=j(dt.map(Ft=>r[2*Ft+1]||0));dt.forEach((Ft,Gt)=>{Z[Ft]=Rt.x0+wt[Gt]*(Rt.x1-Rt.x0),z[Ft]=Rt.y0+Vt[Gt]*(Rt.y1-Rt.y0)})}let lt=[];for(let F=0;F<s;F++)a[F]&&lt.push(F);let ht=[];for(let[F,dt,,Rt]of i.edges||[])a[F]&&a[dt]&&u[F]===u[dt]&&ht.push([F,dt,Rt&1?.06:.02]);let ot=new Int32Array(s).fill(-1);for(let F of i.groups||[])if(F.nc>=2&&a[F.h])for(let dt of F.m)dt!==F.h&&a[dt]&&u[dt]===u[F.h]&&n[dt].t==="c"&&(ot[dt]=F.h);let ut=new Map(W.map(F=>[F.k,K(F)])),vt=(F,dt,Rt,wt,Vt)=>{let Ft=F.map(ie=>dt[ie]).sort((ie,ue)=>ie-ue),Gt=Math.max(2,(Ft[Math.floor(Ft.length/2)]||1)*2.2),Nt=(ie,ue)=>(ie+4096)*8192+(ue+4096),$t=new Float64Array(s),oe=new Float64Array(s),Pe=new Map;for(let ie=0;ie<Rt;ie++){let ue=1-ie/Rt;$t.fill(0),oe.fill(0),Vt($t,oe,Math.max(0,ue*1.6-.6)),Pe.clear();for(let fe of F){let ae=Nt(Math.floor(Z[fe]/Gt),Math.floor(z[fe]/Gt)),R=Pe.get(ae);R||Pe.set(ae,R=[]),R.push(fe)}for(let fe of F){let ae=Math.floor(Z[fe]/Gt),R=Math.floor(z[fe]/Gt),v=Math.ceil(2*dt[fe]/Gt);for(let q=ae-v;q<=ae+v;q++)for(let it=R-v;it<=R+v;it++){let T=Pe.get(Nt(q,it));if(T)for(let D of T){if(dt[D]>dt[fe]||dt[D]===dt[fe]&&D<=fe||!wt.same(fe,D))continue;let $=Z[fe]-Z[D],L=z[fe]-z[D],k=Math.hypot($,L);k<1e-6&&($=fe*7919%13-6||1,L=D*104729%11-5||1,k=Math.hypot($,L),$*=.001/k,L*=.001/k,k=.001);let st=dt[fe]+dt[D];if(k>=st)continue;let Y=(st-k)/k*.5;$t[fe]+=$*Y,oe[fe]+=L*Y,$t[D]-=$*Y,oe[D]-=L*Y}}}let G=wt.max*ue+.3;for(let fe of F){let ae=$t[fe],R=oe[fe],v=Math.hypot(ae,R);v>G&&(ae*=G/v,R*=G/v),wt.move(fe,Z[fe]+ae,z[fe]+R)}}};vt(lt,p,220,{max:4,same:(F,dt)=>u[F]===u[dt],move:(F,dt,Rt)=>{let wt=ut.get(u[F]),Vt=Math.min(p[F],(wt.x1-wt.x0)/2,(wt.y1-wt.y0)/2)*.9;Z[F]=Math.min(wt.x1-Vt,Math.max(wt.x0+Vt,dt)),z[F]=Math.min(wt.y1-Vt,Math.max(wt.y0+Vt,Rt))}},(F,dt,Rt)=>{if(Rt){for(let[wt,Vt,Ft]of ht){let Gt=Ft*Rt,Nt=Z[Vt]-Z[wt],$t=z[Vt]-z[wt],oe=Math.hypot(Nt,$t)||1e-9,Pe=(p[wt]+p[Vt])*1.05;if(oe<=Pe)continue;let ie=Gt*(oe-Pe)/oe;F[wt]+=Nt*ie,dt[wt]+=$t*ie,F[Vt]-=Nt*ie,dt[Vt]-=$t*ie}for(let wt of lt)ot[wt]>=0&&(F[wt]+=(Z[ot[wt]]-Z[wt])*.03*Rt,dt[wt]+=(z[ot[wt]]-z[wt])*.03*Rt)}});let bt=new Float64Array(s),mt=Math.PI/2;for(let[F,dt]of g)for(let Rt of dt){let wt=Rt.list.length,Vt=1.5/Rt.r,Ft;if(Rt.d===1){let Gt=Math.max(Vt,Math.min(2*Math.PI/wt,Vt*1.9));Ft=Rt.list.map((Nt,$t)=>mt+($t%2?1:-1)*Math.ceil($t/2)*Gt)}else{let Gt=Rt.list.map(ie=>{let ue=0,G=0;for(let[fe]of o[ie])c[fe]===F&&(ue+=Math.sin(bt[fe]),G+=Math.cos(bt[fe]));return ue||G?Math.atan2(ue,G):mt}),Nt=Rt.list.map((ie,ue)=>ue).sort((ie,ue)=>Gt[ie]-Gt[ue]||ie-ue);Ft=new Array(wt);let $t=-1/0,oe=0;for(let ie of Nt){let ue=Math.max(Gt[ie],$t+Vt);oe+=ue-Gt[ie],Ft[ie]=ue,$t=ue}let Pe=Math.min(oe/wt,Vt*wt*.5);for(let ie=0;ie<wt;ie++)Ft[ie]-=Pe}Rt.list.forEach((Gt,Nt)=>{bt[Gt]=Ft[Nt],Z[Gt]=Z[F]+Math.cos(Ft[Nt])*Rt.r,z[Gt]=z[F]+Math.sin(Ft[Nt])*Rt.r})}let ge=[];for(let F=0;F<s;F++)h[F]&&ge.push(F);let le=new Float64Array(s),Se=new Float64Array(s),ft=new Float64Array(s),xt=new Int16Array(s);for(let F=0;F<s;F++)xt[F]=a[F]?u[F]:c[F]>=0?u[c[F]]:0;for(let F of ge){let dt=l(F),Rt=0,wt=0,Vt=0,Ft=-1,Gt=-1;for(let[Nt,$t]of dt){let oe=Math.sqrt($t);Rt+=Z[Nt]*oe,wt+=z[Nt]*oe,Vt+=oe,$t>Gt&&(Gt=$t,Ft=Nt)}le[F]=Z[F]=Rt/Vt,Se[F]=z[F]=wt/Vt,xt[F]=u[Ft],ft[F]=pp(n[F])*1.5+.6}vt(ge,ft,140,{max:3,same:()=>!0,move:(F,dt,Rt)=>{Z[F]=Math.min(S-2,Math.max(2,dt)),z[F]=Math.min(I-2,Math.max(2,Rt))}},(F,dt,Rt)=>{for(let wt of ge)F[wt]+=(le[wt]-Z[wt])*.04*Rt,dt[wt]+=(Se[wt]-z[wt])*.04*Rt}),t(`mapa: ${W.length} bairros, ${lt.length} terrenos, ${s-lt.length-ge.length} nas pra\xE7as, ${ge.length} no c\xE9u, ${S.toFixed(0)} \xD7 ${I.toFixed(0)}`);let Ot=F=>Math.round(F*10)/10;return{v:Du,W:Ot(S),H:Ot(I),x:Array.from(Z,Ot),y:Array.from(z,Ot),plate:Array.from(xt,F=>O.get(F)),sky:Array.from(h),anchor:Array.from(c),lot:Array.from(p,Ot),plates:W.map(F=>({c:F.c,x0:Ot(F.x0),y0:Ot(F.y0),x1:Ot(F.x1),y1:Ot(F.y1)}))}}var Ht=(i,t=document)=>t.querySelector(i),he=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),va=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Ke=(i,t=0)=>Number(i).toLocaleString("pt-BR",{minimumFractionDigits:t,maximumFractionDigits:t}),Sp=i=>typeof i=="number"&&isFinite(i),Je=i=>Sp(i)?i>=1e12?`R$ ${Ke(i/1e12,2)} tri`:i>=1e9?`R$ ${Ke(i/1e9,i>=1e11?0:1)} bi`:i>=1e6?`R$ ${Ke(i/1e6,0)} mi`:`R$ ${Ke(i)}`:"\u2013",oi=i=>Sp(i)&&i>=0?`${Ke(i,i>=10||i===Math.round(i)?i===Math.round(i)?0:1:2)}%`:"\u2013",fn=(i,t,e)=>`${Ke(i)} ${i===1?t:e}`,Vi=(i,t="ic")=>`<svg class="${t}" aria-hidden="true"><use href="#i-${i}"/></svg>`,rr={get:(i,t)=>{try{let e=localStorage.getItem(`n1:${i}`);return e==null?t:JSON.parse(e)}catch{return t}},set:(i,t)=>{try{localStorage.setItem(`n1:${i}`,JSON.stringify(t))}catch{}}},Wc=matchMedia("(prefers-reduced-motion: reduce)").matches,sr=matchMedia("(pointer: coarse)").matches,dn=i=>{let t=String(i).replace(/[\s,]+(S\.?\/?A\.?|S\/a|Ltda\.?|Inc\.?|LLC|S\.à ?r\.l\.?|Sarl|S\.R\.L\.)\s*$/i,"").replace(/\s*\(.*?\)\s*$/,"").replace(/[\s,;-]+$/,"");return t.length>34?`${t.slice(0,32)}\u2026`:t},J_=i=>i.length===14?`${i.slice(0,2)}.${i.slice(2,5)}.${i.slice(5,8)}/${i.slice(8,12)}-${i.slice(12)}`:i;function _a(i){let t=Ht("#toast");t.textContent=i,t.hidden=!1,clearTimeout(_a.t),_a.t=setTimeout(()=>{t.hidden=!0},2800)}var to={fin:["#8fb8e8","Bancos e servi\xE7os financeiros","Financeiro"],tech:["#7cc6d9","Telecom, m\xEDdia e tecnologia","Tecnologia"],saude:["#78cfc0","Sa\xFAde e educa\xE7\xE3o","Sa\xFAde"],log:["#8ccfa3","Transporte e log\xEDstica","Log\xEDstica"],agro:["#b5cf86","Agro, alimentos e bebidas","Agro"],ind:["#d4c97f","Ind\xFAstria e bens de capital","Ind\xFAstria"],util:["#e3bb72","Energia el\xE9trica e saneamento","Energia"],oil:["#e59f78","Petr\xF3leo, g\xE1s e qu\xEDmica","Petr\xF3leo"],base:["#d99090","Minera\xE7\xE3o, siderurgia e papel","Minera\xE7\xE3o"],cons:["#d996b4","Varejo e consumo","Consumo"],imob:["#b9a0dd","Constru\xE7\xE3o e im\xF3veis","Imobili\xE1rio"],out:["#a8b3bf","Holdings e outros","Holdings"]},Jc={pf:["#f0c9a0","Pessoa f\xEDsica"],hold:["#8ea3bd","Holding ou empresa"],fund:["#a9a2f5","Gestora ou fundo"],pen:["#d39af0","Fundo de pens\xE3o"],gov:["#f2d37a","Governo"],sub:["#7fd6b4","Controlada em comum"]},K_="#b3a6f7",Xc="#3cf0b4",qi=i=>(to[i]||to.out)[0],Hu=i=>i.t==="s"?"sub":i.t==="p"?"pf":Jc[i.c]?i.c:"hold",wi=i=>i.t==="c"?qi(i.c):Jc[Hu(i)][0],ai=i=>i.t==="c"?"Companhia aberta":Jc[Hu(i)][1],j_={sector:qi,kind:i=>Jc[Hu(i)][0],investor:K_},P={ready:!1};function Q_(i){let t=i.nodes,e=t.length;Object.assign(P,{data:i,nodes:t,N:e,groups:i.groups||[],setores:i.setores||{}}),t.forEach((r,o)=>{r.i=o,r.f=va(r.n)});let n=i.edges||[];P.M=n.length,P.es=new Int32Array(P.M),P.et=new Int32Array(P.M),P.ep=new Float32Array(P.M),P.ef=new Uint8Array(P.M),n.forEach(([r,o,a,l],c)=>{P.es[c]=r,P.et[c]=o,P.ep[c]=a,P.ef[c]=l});let s=i.board||[];P.B=s.length,P.bs=new Int32Array(P.B),P.bt=new Int32Array(P.B),P.br=s.map(r=>r[2]),s.forEach(([r,o],a)=>{P.bs[a]=r,P.bt[a]=o}),P.out=Array.from({length:e},()=>[]),P.inc=Array.from({length:e},()=>[]),P.brd=Array.from({length:e},()=>[]);for(let r=0;r<P.M;r++)P.out[P.es[r]].push(r),P.inc[P.et[r]].push(r);for(let r=0;r<P.B;r++)P.brd[P.bs[r]].push(r),P.brd[P.bt[r]].push(r);P.groups.forEach((r,o)=>{r.i=o,r.f=va(r.n);let a={};for(let l of r.m)t[l].t==="c"&&(a[t[l].c]=(a[t[l].c]||0)+(t[l].mc||1e8));r.sector=Object.entries(a).sort((l,c)=>c[1]-l[1])[0]?.[0]||"out"}),P.deg=Float32Array.from(t,(r,o)=>P.out[o].length+P.inc[o].length+P.brd[o].length),P.crank=new Int32Array(e).fill(1e9),t.map((r,o)=>o).filter(r=>t[r].t==="c").sort((r,o)=>(t[o].mc||0)-(t[r].mc||0)).forEach((r,o)=>{P.crank[r]=o}),P.labelOrder=t.map((r,o)=>o).sort((r,o)=>$c(o)-$c(r)),P.byId=new Map(t.map(r=>[r.id,r.i])),P.byK=new Map(t.filter(r=>r.k).map(r=>[r.k,r.i])),P.bySlug=new Map(t.filter(r=>r.s).map(r=>[r.s,r.i])),P.byCnpj=new Map(t.filter(r=>r.cnpj).map(r=>[r.cnpj,r.i])),P.ready=!0}var $c=i=>{let t=P.nodes[i];return t.t==="c"?1e15+(t.mc||0)+P.deg[i]*1e8:(t.v||0)+P.deg[i]*5e8},at={mode:"world",hover:-1,sel:-1,group:-1,sector:-1,shape:null,hl:null,layers:{people:!0,funds:!0,board:!1,ctlonly:!1,groups:!0,...rr.get("mundo-layers",{})},pathIds:null,lastInput:performance.now()},Gn=new Uint8Array(1);function wp(){Gn=new Uint8Array(P.N);let i=at.layers;for(let t=0;t<P.N;t++){let e=P.nodes[t],n=1;e.t==="p"&&!i.people&&(n=0),e.t==="j"&&(e.c==="fund"||e.c==="pen")&&!i.funds&&(n=0),e.b&&!i.board&&!P.out[t].length&&!P.inc[t].length&&(n=0),i.ctlonly&&e.t!=="c"&&!P.out[t].some(s=>P.ef[s]&1)&&(n=0),Gn[t]=n}Lt?.setVisible(Gn)}var Lt=null,$i=null;function Vu(i){let t=new Set([i]),e=new Set,n=new Set;for(let s of P.out[i])Gn[P.et[s]]&&(!at.layers.ctlonly||P.ef[s]&1)&&(t.add(P.et[s]),e.add(s));for(let s of P.inc[i])Gn[P.es[s]]&&(!at.layers.ctlonly||P.ef[s]&1)&&(t.add(P.es[s]),e.add(s));if(at.layers.board||P.nodes[i].b)for(let s of P.brd[i]){let r=P.bs[s]===i?P.bt[s]:P.bs[s];t.add(r),n.add(s)}return{nodes:t,edges:e,brd:n}}function li(i,t,e,n=[],s=.75,r=!1,o=null){if(at.hl=i,at.rel=o,gy(),!Lt)return;if(!i){Lt.setHighlight(null),Lt.setFlows([]);return}let a=new Map;for(let c of i)a.set(c,.5);for(let c of n)a.set(c,1);Lt.setHighlight(a,s);let l=[];for(let c of t||[])l.push([P.es[c],P.et[c],r?1:P.ef[c]&1,P.ep[c]]);for(let c of e||[])l.push([P.bs[c],P.bt[c],r?1:0,4]);l.sort((c,h)=>h[2]-c[2]),Lt.setFlows(l)}function Gu(i,t){let e=new Map;for(let n of t.edges){let s=P.ef[n]&1,r=P.ep[n]>=0?oi(P.ep[n]):"";P.et[n]===i?e.set(P.es[n],s?`controla${r?` \xB7 ${r}`:""}`:r?`dono de ${r}`:"acionista"):e.set(P.et[n],s?`controlada${r?` \xB7 ${r}`:""}`:r?`participa\xE7\xE3o de ${r}`:"participa\xE7\xE3o")}for(let n of t.brd){let s=P.bs[n]===i?P.bt[n]:P.bs[n];e.has(s)||e.set(s,{P:"presid\xEAncia do conselho",E:"presid\xEAncia executiva",C:"conselho",D:"diretoria"}[P.br[n]]||"administra\xE7\xE3o")}return e}function bn(i,{fly:t=!0,push:e=!0}={}){if(at.mode!=="world"&&Gi(!1),Yi(),at.sel=i,at.group=-1,Wu(),io(),i<0){li(null),Ap(),e&&Ds("");return}let n=Vu(i);li(n.nodes,n.edges,n.brd,[i],.75,!1,Gu(i,n)),Xu(i),jc(),t&&Lt.flyToNodes(ty(i,n.nodes),{minSpan:16}),e&&Ds(`n/${P.nodes[i].id}`)}function ty(i,t){let e=[...t],n=1/0,s=-1/0,r=1/0,o=-1/0;for(let l of e)n=Math.min(n,Lt.X[l]),s=Math.max(s,Lt.X[l]),r=Math.min(r,Lt.Z[l]),o=Math.max(o,Lt.Z[l]);return Lt.sky[i]||Math.hypot(s-n,o-r)<=62?e:e.filter(l=>l===i||Math.hypot(Lt.X[l]-Lt.X[i],Lt.Z[l]-Lt.Z[i])<=26)}function qc(i,{push:t=!0}={}){at.mode!=="world"&&Gi(!1),Yi();let e=P.groups[i];at.sel=-1,at.group=i,Wu(),io();let n=new Set(e.m),s=new Set;for(let r of e.m)for(let o of P.out[r])n.has(P.et[o])&&s.add(o);li(n,s,new Set,e.m.filter(r=>P.nodes[r].t==="c")),ry(i),jc(),Lt.flyToNodes(e.m,{minSpan:20}),t&&Ds(`g/${i}`)}var gp=i=>(P.data.mapa.plates||[]).findIndex(t=>t.c===i);function ya(i,{push:t=!0,fly:e=!0}={}){i<0||(at.mode!=="world"&&Gi(!1),Yi(),at.sel=-1,at.group=-1,at.sector=i,io(),li(null),Lt.setFocusPlate(i),Ey(i),e&&Lt.flyToPlate(i),jc(),t&&Ds(`setor/${P.data.mapa.plates[i].c}`))}function Wu(){at.sector<0||(at.sector=-1,Lt?.setFocusPlate(-1))}function xp(i){if(!Lt||at.mode!=="world")return;if(at.shape===i||!i){io(),at.sel>=0?bn(at.sel,{fly:!1,push:!1}):li(null);return}(at.sel>=0||at.group>=0)&&(at.sel=-1,at.group=-1,at.sector<0&&Ap(),Ds(at.sector>=0?`setor/${P.data.mapa.plates[at.sector].c}`:""),jc()),Yi(),at.shape=i,Tp();let t=new Set,e=new Map;for(let n=0;n<P.N;n++)Gn[n]&&Lt.shape[n]===i&&(at.sector<0||P.data.mapa.plate[n]===at.sector)&&(t.add(n),e.set(n,.02));at.hl=t,Lt.setHighlight(e,.85),Lt.setFlows([])}function io(){at.shape&&(at.shape=null,Tp())}var Tp=()=>{for(let i of document.querySelectorAll("#m-key [data-shape]"))i.classList.toggle("on",i.dataset.shape===at.shape)};function Ep(i){let t=-1,e=-2;for(let n of P.inc[i])P.ef[n]&1&&P.ep[n]>e&&(e=P.ep[n],t=P.es[n]);return t}function ey(i){let t=[i],e=new Set([i]);for(;;){let n=Ep(t[t.length-1]);if(n<0||e.has(n))break;e.add(n),t.push(n)}return t}var ny=(i,t)=>P.out[i].find(e=>P.et[e]===t);function iy(i){let t=wi(i);if(i.t==="c"){let e=i.n.replace(/[^A-Za-zÀ-ÿ0-9 ]/g,"").split(/\s+/).filter(Boolean).slice(0,2).map(n=>n[0]).join("").toUpperCase();return`<span class="m-badge" style="--c:${t}"><span>${he(e)}</span>${i.tk?`<img src="https://icons.brapi.dev/icons/${he(i.tk)}.svg" alt="" loading="lazy" onload="this.naturalWidth > 1 ? this.classList.add('ok') : this.remove()" onerror="this.remove()">`:""}</span>`}if(i.t==="p"){let e=i.n.split(/\s+/).filter(n=>n&&!/^(de|da|do|das|dos|e)$/i.test(n)).slice(0,2).map(n=>n[0]).join("").toUpperCase();return`<span class="m-badge round" style="--c:${t}"><span>${he(e)}</span></span>`}return`<span class="m-badge" style="--c:${t}">${Vi("cias")}</span>`}function Is(i,t,e,n){let s=P.nodes[i];return`<li data-go="${i}"><span class="m-dot" style="--c:${wi(s)}"></span><span class="nm">${he(s.n)}</span>
    <span class="pc ${n?"m-ctl":""}">${he(t)}</span>${e?`<small>${he(e)}</small>`:""}</li>`}function Qr(i,t=8,e=""){return i.length?`<ul class="m-list" ${e?`data-list="${e}"`:""}>${i.slice(0,t).join("")}${i.length>t?`<li class="more" data-more="${e}">Mostrar mais ${i.length-t}</li>`:""}</ul>`:""}function sy(i){let t=i.filter(h=>h.p>0).slice(0,7);if(!t.length)return"";let e=t.reduce((h,d)=>h+d.p,0),n=e>100?100/e:1;e=Math.min(100,e);let s=46,r=2*Math.PI*s,o=0,a=t.map(h=>{let d=h.p*n/100,u=Math.max(0,d*r-2),f=`<circle r="${s}" cx="60" cy="60" fill="none" stroke="${wi(P.nodes[h.o])}" stroke-width="${h.ctl?13:10}" stroke-dasharray="${u.toFixed(2)} ${(r-u).toFixed(2)}" stroke-dashoffset="${(-o*r).toFixed(2)}" data-go="${h.o}"><title>${he(P.nodes[h.o].n)} \xB7 ${oi(h.p)}</title></circle>`;return o+=d,f}).join(""),l=t[0],c=t.slice(0,5).map(h=>`<li data-go="${h.o}"><i style="--c:${wi(P.nodes[h.o])}"></i><span>${he(dn(P.nodes[h.o].n))}</span><b>${oi(h.p)}</b></li>`).join("")+(e<99.5?`<li class="rest"><i></i><span>Demais acionistas</span><b>${oi(100-e)}</b></li>`:"");return`<div class="m-donut"><svg viewBox="0 0 120 120" aria-hidden="true"><circle r="${s}" cx="60" cy="60" fill="none" class="m-donut-track" stroke-width="10"/><g transform="rotate(-90 60 60)">${a}</g>
    <text x="60" y="56" text-anchor="middle" class="m-donut-v">${oi(l.p)}</text><text x="60" y="72" text-anchor="middle" class="m-donut-l">${l.ctl?"controle":"maior fatia"}</text></svg>
    <ul>${c}</ul></div>`}var Xi={},vp={P:"Presidente do conselho",E:"Diretor-presidente (CEO)",C:"Conselho de administra\xE7\xE3o",D:"Diretoria"};function Xu(i){let t=P.nodes[i],e=Ht("#m-panel-body"),n=P.inc[i].map(m=>({j:m,o:P.es[m],p:P.ep[m],ctl:P.ef[m]&1})).sort((m,y)=>y.ctl-m.ctl||y.p-m.p),s=P.out[i].map(m=>({j:m,o:P.et[m],p:P.ep[m],ctl:P.ef[m]&1})).sort((m,y)=>y.ctl-m.ctl||(P.nodes[y.o].mc||0)*y.p-(P.nodes[m.o].mc||0)*m.p||y.p-m.p),r=P.brd[i].map(m=>({j:m,o:P.bs[m]===i?P.bt[m]:P.bs[m],r:P.br[m]})),o=t.g!=null?P.groups[t.g]:null,a=ey(i),l=s.filter(m=>m.ctl).length,c=t.t==="c"?[t.tk||"capital fechado",t.st,t.uf]:[ai(t),t.pais,t.cnpj?J_(t.cnpj):""],h=t.t==="c"?[["Valor de mercado",t.mc?Je(t.mc):"\u2013"],["Acionistas",Ke(n.length)],["Participa\xE7\xF5es",Ke(s.length)]]:[["Participa\xE7\xF5es",Ke(s.length)],["Valor estimado",t.v?Je(t.v):"\u2013"],[r.length?"Cargos":"Controla",Ke(r.length||l)]];Xi={inc:n.map(m=>Is(m.o,oi(m.p),[m.ctl?"controlador":"",P.ef[m.j]&2?"acordo de acionistas":"",ai(P.nodes[m.o])].filter(Boolean).join(" \xB7 "),m.ctl)),out:s.map(m=>Is(m.o,oi(m.p),[m.ctl?"controla":"",P.nodes[m.o].mc?`valor de mercado ${Je(P.nodes[m.o].mc)}`:ai(P.nodes[m.o])].filter(Boolean).join(" \xB7 "),m.ctl)),brd:r.map(m=>{let y=P.nodes[m.o];if(t.t==="c"){let g=P.brd[m.o].map(p=>P.bs[p]===m.o?P.bt[p]:P.bs[p]).filter(p=>p!==i).map(p=>dn(P.nodes[p].n));return Is(m.o,"",`${vp[m.r]||"Cargo"} aqui \xB7 tamb\xE9m em ${g.slice(0,3).join(", ")}${g.length>3?` e mais ${g.length-3}`:""}`,!1)}return Is(m.o,"",`${vp[m.r]||"Cargo"}${y.mc?` \xB7 ${Je(y.mc)}`:""}`,!1)})};let d=t.t==="c"&&t.k?`cias.html#cia/${encodeURIComponent(t.k)}`:t.s?`cias.html#pessoa/${encodeURIComponent(t.s)}`:"",u=t.t==="c"?P.setores[t.c]||to[t.c]?.[1]:"",f=at.mode==="tree";e.innerHTML=`
    <div class="m-kicker" style="--c:${wi(t)}"><i></i>${he(t.t==="c"?u||"Companhia aberta":ai(t))}</div>
    <div class="m-head">${iy(t)}<div><h2>${he(t.n)}</h2><p>${he(c.filter(Boolean).join(" \xB7 "))}</p></div></div>
    ${o&&o.nc>=2?`<div class="m-chips"><button class="m-chip gold" data-group="${o.i}" type="button">${Vi("cias","ic ic-xs")}Grupo ${he(o.n)} \xB7 ${fn(o.nc,"companhia","companhias")}</button></div>`:""}
    <div class="m-stats">${h.map(([m,y])=>`<div class="m-stat"><span>${m}</span><b>${he(y)}</b></div>`).join("")}</div>
    <div class="m-btns">
      ${f&&at.treeFocus===i?`<button class="m-btn primary" type="button" data-act="world">${Vi("map")}Ver no mapa</button>`:`<button class="m-btn primary" type="button" data-act="tree">${Vi("tree")}Estrutura societ\xE1ria</button>`}
      <button class="m-btn" type="button" data-act="path">${Vi("path")}Conectar com\u2026</button>
      ${d?`<a class="m-btn wide ghost" href="${d}">${t.t==="c"?"Perfil completo da companhia":"Perfil completo"} ${Vi("ext")}</a>`:""}
    </div>
    <div id="m-pick-slot"></div>
    ${t.t==="c"&&n.length?`<div class="m-sec"><h3>Composi\xE7\xE3o acion\xE1ria<small>participa\xE7\xF5es relevantes</small></h3>${sy(n)}</div>`:""}
    ${a.length>1?`<div class="m-sec"><h3>Quem controla<small>do controlador final at\xE9 aqui</small></h3><ol class="m-chain">${a.slice().reverse().map((m,y,g)=>{let p=g[y+1],M=p!=null?ny(m,p):null,E=M==null?"":P.ef[M]&2?`bloco de controle \xB7 ${oi(P.ep[M])}`:`controla com ${oi(P.ep[M])}`;return`<li data-go="${m}" class="${m===i?"me":""}"><span class="nm">${he(P.nodes[m].n)}</span><span class="pc">${E}</span></li>`}).join("")}</ol></div>`:""}
    ${n.length?`<div class="m-sec"><h3>${t.t==="c"?"Acionistas":"Quem \xE9 dono"}<small>${fn(n.length,"acionista","acionistas")} relevante${n.length===1?"":"s"}</small></h3>${Qr(Xi.inc,8,"inc")}</div>`:""}
    ${s.length?`<div class="m-sec"><h3>${t.t==="c"?"Participa\xE7\xF5es em outras":"Participa\xE7\xF5es"}<small>${fn(s.length,"empresa","empresas")}</small></h3>${Qr(Xi.out,8,"out")}</div>`:""}
    ${r.length?`<div class="m-sec"><h3>${t.t==="c"?"Quem do conselho ou da diretoria tamb\xE9m est\xE1 em outras":"Cargos"}<small>${fn(r.length,t.t==="c"?"pessoa":"companhia",t.t==="c"?"pessoas":"companhias")}</small></h3>${Qr(Xi.brd,8,"brd")}</div>`:""}
    <p class="m-foot">Participa\xE7\xF5es acima de 5% e controladores, como declarados no Formul\xE1rio de Refer\xEAncia de cada companhia \xE0 CVM${t.v?"; valor estimado = participa\xE7\xE3o \xD7 valor de mercado":""}.</p>`,Kc()}function ry(i){let t=P.groups[i],e=t.m.filter(o=>P.nodes[o].t==="c").sort((o,a)=>(P.nodes[a].mc||0)-(P.nodes[o].mc||0)),n=P.nodes[t.h];Xi={cos:e.map(o=>Is(o,P.nodes[o].mc?Je(P.nodes[o].mc):"",[P.nodes[o].tk,o===t.h?"topo do grupo":""].filter(Boolean).join(" \xB7 "),!1))};let s=e.reduce((o,a)=>o+(P.nodes[a].mc||0),0),r=s?`<div class="m-bar">${e.filter(o=>P.nodes[o].mc).slice(0,12).map(o=>`<span data-go="${o}" style="flex:${P.nodes[o].mc/s};--c:${wi(P.nodes[o])}" title="${he(P.nodes[o].n)} \xB7 ${Je(P.nodes[o].mc)}"></span>`).join("")}</div>`:"";Ht("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${qi(t.sector)}"><i></i>Grupo econ\xF4mico \xB7 ${he(to[t.sector]?.[1]||"")}</div>
    <div class="m-head"><span class="m-badge" style="--c:${qi(t.sector)}">${Vi("cias")}</span><div><h2>Grupo ${he(t.n)}</h2><p>${fn(t.nc,"companhia aberta","companhias abertas")} \xB7 ${fn(t.m.length,"entidade","entidades")}</p></div></div>
    <div class="m-stats">
      <div class="m-stat"><span>Valor de mercado</span><b>${he(t.mc?Je(t.mc):"\u2013")}</b></div>
      <div class="m-stat"><span>Companhias</span><b>${Ke(t.nc)}</b></div>
      <div class="m-stat"><span>Entidades</span><b>${Ke(t.m.length)}</b></div>
    </div>
    ${r}
    <div class="m-btns"><button class="m-btn primary wide" type="button" data-act="tree" data-node="${t.h}">${Vi("tree")}Estrutura a partir de ${he(dn(n.n))}</button></div>
    ${t.r.length?`<div class="m-sec"><h3>Controle final</h3>${Qr(t.r.map(o=>Is(o,"",ai(P.nodes[o]),!0)),6)}</div>`:""}
    <div class="m-sec"><h3>Companhias do grupo<small>valor de mercado</small></h3>${Qr(Xi.cos,12,"cos")}</div>
    <p class="m-foot">Grupo = companhias que chegam ao mesmo topo seguindo, em cada uma, o acionista controlador de maior participa\xE7\xE3o.</p>`,Kc()}function Kc(){let i=Ht("#m-panel");innerWidth<=760&&(i.hidden||at.mode!=="world")&&i.classList.add("peek"),i.hidden=!1,document.body.classList.add("panel-open"),Ht("#m-panel-body").scrollTop=0,Bn(),clearTimeout(Bn.t),Bn.t=setTimeout(Bn,450)}function Ap(){Ht("#m-panel").hidden=!0,document.body.classList.remove("panel-open"),Bn(),clearTimeout(Bn.t),Bn.t=setTimeout(Bn,450)}function oy(i,t){let e=l=>!(P.nodes[l].t==="j"&&(P.nodes[l].c==="fund"||P.nodes[l].c==="pen"))||l===i||l===t,n=new Int32Array(P.N).fill(-1),s=new Int32Array(P.N).fill(-1),r=[i];for(n[i]=i;r.length;){let l=r.shift();if(l===t)break;if(l!==i&&!e(l))continue;let c=(h,d)=>{n[h]===-1&&(n[h]=l,s[h]=d,r.push(h))};for(let h of P.out[l])c(P.et[h],h);for(let h of P.inc[l])c(P.es[h],h);for(let h of P.brd[l])c(P.bs[h]===l?P.bt[h]:P.bs[h],-2-h)}if(n[t]===-1)return null;let o=[t],a=[];for(let l=t;l!==i;l=n[l])a.unshift(s[l]),o.unshift(n[l]);return{path:o,ev:a}}function Yc(i,t,{push:e=!0}={}){let n=oy(i,t);if(!n){_a(`N\xE3o h\xE1 liga\xE7\xE3o entre ${dn(P.nodes[i].n)} e ${dn(P.nodes[t].n)} sem passar por gestoras ou fundos`);return}at.mode==="tree"&&Gi(!1),at.mode="path",at.sel=-1,io();let s=new Set(n.path),r=new Set,o=new Set;for(let l of n.ev)l>=0?r.add(l):o.add(-2-l);if(at.pathIds=[i,t],at.forceVis&&(at.forceVis=null,Lt.setVisible(Gn)),n.path.some(l=>!Gn[l])){at.forceVis=new Set(n.path);let l=Gn.slice();for(let c of n.path)l[c]=1;Lt.setVisible(l)}Yi(),li(s,r,o,n.path,.85,!0),Ht("#m-mode").hidden=!1,Ht("#m-mode-text").innerHTML=`<span class="m-mode-k">Caminho</span><b>${he(dn(P.nodes[i].n))} \u2192 ${he(dn(P.nodes[t].n))}</b><span class="m-mode-n">${fn(n.ev.length,"passo","passos")}</span>`;let a=n.ev.map(l=>{let c=f=>`<b data-go="${f}">${he(P.nodes[f].n)}</b>`;if(l>=0){let f=P.es[l],m=P.et[l],y=P.ep[l],g=P.ef[l]&1;return`<li>${c(f)} ${g?"controla":"tem"} ${y>=0?`${oi(y)} de`:"participa\xE7\xE3o em"} ${c(m)}</li>`}let h=-2-l,d=P.bs[h],u=P.bt[h];return`<li>${c(d)} est\xE1 ${{P:"na presid\xEAncia do conselho",E:"na presid\xEAncia executiva",C:"no conselho de administra\xE7\xE3o",D:"na diretoria"}[P.br[h]]||"na administra\xE7\xE3o"} de ${c(u)}</li>`});Ht("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${Xc}"><i></i>Caminho mais curto</div>
    <div class="m-head"><span class="m-badge" style="--c:${Xc}">${Vi("path")}</span><div><h2>Como se conectam</h2><p>${he(dn(P.nodes[i].n))} e ${he(dn(P.nodes[t].n))}</p></div></div>
    <div class="m-sec"><h3>O caminho<small>${fn(n.ev.length,"liga\xE7\xE3o","liga\xE7\xF5es")}</small></h3><ol class="m-path">${a.join("")}</ol></div>
    <div class="m-btns"><button class="m-btn wide" type="button" data-sel="${i}">Voltar para ${he(dn(P.nodes[i].n))}</button><button class="m-btn wide" type="button" data-sel="${t}">Ir para ${he(dn(P.nodes[t].n))}</button></div>
    <p class="m-foot">Liga\xE7\xF5es por participa\xE7\xE3o acion\xE1ria (5% ou mais, ou controle) e por pessoas que est\xE3o no conselho ou na diretoria das duas. Gestoras e fundos n\xE3o contam como ponte.</p>`,Kc(),Lt.flyToNodes(n.path,{minSpan:20}),e&&Ds(`c/${P.nodes[i].id}/${P.nodes[t].id}`)}async function Ls(i,{push:t=!0}={}){let e=P.nodes[i],n=[];try{await Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1200))])}catch{}if(e.t==="c"&&e.k)try{n=(await fetch(`data/cias/perfil/${encodeURIComponent(e.k)}.json`,{cache:"no-cache"}).then(o=>o.ok?o.json():{})).participacoes||[]}catch{n=[]}let s=at.mode!=="tree";s&&await Zc(),at.mode="tree",at.sel=i,at.group=-1,at.treeFocus=i,Wu(),io(),Yi(),Ma(-1),at.hover=-1,li(null),document.body.classList.add("in-tree"),Xu(i),$i.open(i,n,{from:s?Lt.project(i,{}):null}),Ht("#m-mode").hidden=!1,Ht("#m-mode-text").innerHTML=`<span class="m-mode-k">Estrutura societ\xE1ria</span><b>${he(e.n)}</b>`,Bn(),t&&Ds(`e/${e.id}`)}function Zc(){let i=Ht("#m-fade");return!i||Wc?Promise.resolve():(i.classList.add("on"),clearTimeout(Zc.t),Zc.t=setTimeout(()=>i.classList.remove("on"),260),new Promise(t=>setTimeout(t,170)))}function Gi(i=!0){at.mode==="tree"&&(Zc(),$i.close(),document.body.classList.remove("in-tree")),at.mode="world",Ht("#m-mode").hidden=!0,at.pathIds=null,at.forceVis&&(at.forceVis=null,Lt.setVisible(Gn)),i&&(at.sel>=0?bn(at.sel):(li(null),Ds("")))}function ay(i,t=9){let e=va(i.trim());if(e.length<2)return[];let n=e.split(/\s+/),s=[];for(let r of P.groups)r.nc<2||n.every(o=>r.f.includes(o))&&s.push({g:r.i,s:(r.f.startsWith(e)?100:50)+Math.log10(r.mc||10)});for(let r of P.nodes){if(!Gn[r.i]&&r.t!=="c")continue;let o=0;r.f===e||r.tk&&va(r.tk)===e?o=120:r.f.startsWith(e)||r.tk&&va(r.tk).startsWith(e)?o=90:n.every(a=>r.f.includes(a))&&(o=r.f.split(/\s+/).some(a=>a.startsWith(n[0]))?60:35),o&&(o+=r.t==="c"?12+Math.log10(r.mc||1e6):Math.log10(r.v||1e6)+P.deg[r.i]*.2,s.push({i:r.i,s:o}))}return s.sort((r,o)=>o.s-r.s).slice(0,t)}function ly(i){if(!i.length)return'<li class="none">Nada com esse nome no mapa.</li>';let t=[["Grupos econ\xF4micos",i.filter(n=>n.g!=null)],["Companhias",i.filter(n=>n.i!=null&&P.nodes[n.i].t==="c")],["Pessoas e investidores",i.filter(n=>n.i!=null&&P.nodes[n.i].t!=="c")]],e=0;return t.filter(([,n])=>n.length).map(([n,s])=>`<li class="grp" role="presentation">${n}</li>`+s.map(r=>{let o=e++;if(r.g!=null){let l=P.groups[r.g];return`<li role="option" data-idx="${o}" aria-selected="false"><span class="m-dot" style="--c:${qi(l.sector)}"></span><span class="m-r-txt"><b>Grupo ${he(l.n)}</b><small>${fn(l.nc,"companhia","companhias")}${l.mc?` \xB7 ${Je(l.mc)}`:""}</small></span></li>`}let a=P.nodes[r.i];return`<li role="option" data-idx="${o}" aria-selected="false"><span class="m-dot" style="--c:${wi(a)}"></span><span class="m-r-txt"><b>${he(a.n)}</b><small>${he(a.t==="c"?[a.tk,a.mc?Je(a.mc):"capital fechado",a.st].filter(Boolean).join(" \xB7 "):[ai(a),a.v?`\u2248 ${Je(a.v)}`:""].filter(Boolean).join(" \xB7 "))}</small></span></li>`}).join("")).join("")}function Cp(i,t,e){let n=[],s=0,r=()=>{n=ay(i.value),n=[...n.filter(a=>a.g!=null),...n.filter(a=>a.i!=null&&P.nodes[a.i].t==="c"),...n.filter(a=>a.i!=null&&P.nodes[a.i].t!=="c")],s=Math.min(s,Math.max(0,n.length-1)),t.hidden=!i.value.trim(),t.innerHTML=ly(n),t.querySelectorAll("[data-idx]").forEach(a=>a.setAttribute("aria-selected",String(+a.dataset.idx===s))),i.closest("[role=combobox]")?.setAttribute("aria-expanded",String(!t.hidden))},o=a=>{a&&(i.value="",t.hidden=!0,i.blur(),e(a))};i.addEventListener("input",()=>{s=0,r()}),i.addEventListener("focus",()=>{i.value.trim()&&r()}),i.addEventListener("keydown",a=>{a.key==="ArrowDown"||a.key==="ArrowUp"?(a.preventDefault(),s=(s+(a.key==="ArrowDown"?1:-1)+n.length)%Math.max(1,n.length),r()):a.key==="Enter"?(a.preventDefault(),o(n[s])):a.key==="Escape"&&Vn.on?wa():a.key==="Escape"&&(i.value="",t.hidden=!0,i.blur())}),t.addEventListener("pointerdown",a=>{let l=a.target.closest("[data-idx]");l&&(a.preventDefault(),o(n[+l.dataset.idx]))}),document.addEventListener("pointerdown",a=>{!t.contains(a.target)&&a.target!==i&&(t.hidden=!0)})}var Uu="groups";function Fu(){let i=Ht("#m-rank"),t=Ht("#m-tab-note"),e="";if(Uu==="groups"){t.textContent="Grupos econ\xF4micos pelo valor de mercado das companhias abertas que re\xFAnem.";let n=P.groups.filter(r=>r.nc>=2),s=n[0]?.mc||1;e=n.slice(0,60).map(r=>`<li data-group="${r.i}" class="${at.group===r.i?"on":""}" style="--c:${qi(r.sector)};--w:${((r.mc||0)/s*100).toFixed(1)}%"><b>${he(r.n)}</b><span class="v">${r.mc?Je(r.mc).replace("R$ ",""):""}</span>
      <small>${fn(r.nc,"companhia","companhias")}${r.r.length?` \xB7 ${he(r.r.slice(0,2).map(o=>dn(P.nodes[o].n)).join(", "))}`:""}</small><i class="m-rank-bar"></i></li>`).join("")}else if(Uu==="investors"){t.textContent="Quem tem mais valor em participa\xE7\xF5es diretas (participa\xE7\xE3o \xD7 valor de mercado).";let n=P.nodes.filter(r=>r.t!=="c"&&r.v).sort((r,o)=>o.v-r.v).slice(0,60),s=n[0]?.v||1;e=n.map(r=>`<li data-go="${r.i}" class="${at.sel===r.i?"on":""}" style="--c:${wi(r)};--w:${(r.v/s*100).toFixed(1)}%"><b>${he(dn(r.n))}</b><span class="v">${Je(r.v).replace("R$ ","")}</span>
      <small>${he(ai(r))} \xB7 ${fn(P.out[r.i].length,"participa\xE7\xE3o","participa\xE7\xF5es")}</small><i class="m-rank-bar"></i></li>`).join("")}else{t.textContent="Pessoas e empresas que mais ligam companhias entre si: participa\xE7\xF5es e cadeiras em conselhos e diretorias.";let n=o=>new Set([...P.out[o.i].map(a=>P.et[a]),...P.brd[o.i].map(a=>P.bt[a])].filter(a=>P.nodes[a].t==="c")).size,s=P.nodes.filter(o=>o.t==="p"||o.t==="j").map(o=>[o,n(o)]).filter(([,o])=>o>=3).sort((o,a)=>a[1]-o[1]||(a[0].v||0)-(o[0].v||0)).slice(0,60),r=s[0]?.[1]||1;e=s.map(([o,a])=>`<li data-go="${o.i}" class="${at.sel===o.i?"on":""}" style="--c:${wi(o)};--w:${(a/r*100).toFixed(1)}%"><b>${he(dn(o.n))}</b><span class="v">${a}</span>
      <small>${he(ai(o))} \xB7 ${a} companhias</small><i class="m-rank-bar"></i></li>`).join("")}i.innerHTML=e}function jc(){for(let i of Ht("#m-rank").children)i.classList.toggle("on",i.dataset.group!=null&&+i.dataset.group===at.group||i.dataset.go!=null&&+i.dataset.go===at.sel)}var cy=[["tower","Companhia aberta",'<svg viewBox="0 0 20 20"><path d="M6 18V5h8v13z" fill="#141b29"/><path d="M6 5h8v1.8H6z" fill="var(--c)"/><path d="M7.6 8.4h1.3v1.3H7.6zM11 8.4h1.3v1.3H11zM9.3 11h1.3v1.3H9.3zM7.6 13.6h1.3v1.3H7.6zM11 13.6h1.3v1.3H11zM11 11h1.3v1.3H11z" fill="#ffd9a0"/></svg>'],["block","Capital fechado",'<svg viewBox="0 0 20 20"><path d="M4 17v-6h12v6z" fill="#141b29"/><path d="M4 11h12v1.5H4z" fill="var(--c)"/><path d="M6 13.6h1.3v1.3H6zM12.6 13.6h1.3v1.3h-1.3z" fill="#ffd9a0"/></svg>'],["sub","Controlada em comum",'<svg viewBox="0 0 20 20"><path d="M4 17v-6h12v6z" fill="#141b29"/><path d="M4 11h12v1.5H4z" fill="#7fd6b4"/><path d="M9.3 13.6h1.3v1.3H9.3z" fill="#ffd9a0"/></svg>'],["pawn","Pessoa f\xEDsica",'<svg viewBox="0 0 20 20"><circle cx="10" cy="6" r="2.6" fill="#f0c9a0"/><path d="M7.4 15.5 8.4 9.4h3.2l1 6.1z" fill="#f0c9a0"/><ellipse cx="10" cy="16" rx="4.6" ry="1.6" fill="#c99e74"/></svg>'],["tile","Holding ou empresa",'<svg viewBox="0 0 20 20"><path d="M5 8.5 10 6l5 2.5v6L10 17l-5-2.5z" fill="#5f7088"/><path d="M5 8.5 10 6l5 2.5-5 2.5z" fill="#a9bdd6"/></svg>'],["inv","Gestora, fundo ou governo",'<svg viewBox="0 0 20 20"><path d="M10 2.5 15 9 10 17.5 5 9z" fill="#b3a6f7"/><path d="M10 2.5 15 9H5z" fill="#d6cffb"/><path d="M10 17.5 15 9H10z" fill="#8576d6"/></svg>']],hy={tower:"Aberta",block:"Fechada",tile:"Holding",sub:"Controlada",pawn:"Pessoa",inv:"Gestora"},uy=()=>cy.map(([i,t,e])=>`<button type="button" class="m-key-i" data-shape="${i}" title="Destacar no mapa: ${t}" style="--c:${qi("util")}">${e}<span class="l">${t}</span><span class="s">${hy[i]}</span></button>`).join("")+'<span class="m-key-sep"></span><span class="m-key-i m-key-ctl" title="O feixe corre de quem \xE9 dono para o que \xE9 possu\xEDdo"><i class="m-key-ln"></i><span class="l">Controla</span><span class="s">Controla</span></span><span class="m-key-i m-key-ctl part" title="Participa\xE7\xE3o sem controle"><i class="m-key-ln"></i><span class="l">Participa</span><span class="s">Participa</span></span>';function $u(){let i=P.data.mapa,t=i.plates.map(()=>({n:0,listed:0,mc:0}));for(let e=0;e<P.N;e++){let n=P.nodes[e],s=t[i.plate[e]];n.t==="c"&&(s.n++,n.mc&&(s.listed++,s.mc+=n.mc))}return t}var eo=i=>to[i.c]?.[1]||i.c,fy=i=>to[i.c]?.[2]||i.c,Sa=i=>qi(i.c);function dy(){let i=$u(),t=P.data.mapa.plates.map((e,n)=>n).sort((e,n)=>i[n].mc-i[e].mc);Ht("#m-legend").innerHTML=`<div class="m-lg-sec">${t.map(e=>{let n=P.data.mapa.plates[e];return`<button class="lg" type="button" data-plate="${e}"><i style="--c:${Sa(n)}"></i><span>${he(eo(n))}</span><small>${Ke(i[e].n)}</small></button>`}).join("")}</div>`,Ht("#m-key").innerHTML=uy()}function Ds(i){let t=i?`#${i}`:"";location.hash!==t&&history.replaceState(null,"",t||location.pathname+location.search)}function Rp(){let i=decodeURIComponent(location.hash.replace(/^#/,"")),[t,e,n]=i.split("/"),s=r=>r?P.byId.has(r)?P.byId.get(r):r.startsWith("k")&&P.byK.has(r.slice(1))?P.byK.get(r.slice(1)):P.bySlug.has(r)?P.bySlug.get(r):P.byK.has(r)?P.byK.get(r):-1:-1;t==="n"&&s(e)>=0?bn(s(e),{push:!1}):t==="s"&&P.bySlug.has(e)?bn(P.bySlug.get(e),{push:!1}):t==="g"&&P.groups[+e]?qc(+e,{push:!1}):t==="e"&&s(e)>=0?Ls(s(e),{push:!1}):t==="c"&&s(e)>=0&&s(n)>=0?Yc(s(e),s(n),{push:!1}):t==="setor"&&gp(e)>=0?ya(gp(e),{push:!1}):(t==="n"||t==="s"||t==="e")&&_a("Essa entidade n\xE3o est\xE1 no mapa: ela n\xE3o tem participa\xE7\xE3o relevante em companhia aberta.")}var Hn={pool:[],used:new Map,layer:null,t:0},Gc=[],no=0;function py(){let i=performance.now();if(i-no<300)return Gc;no=i,Gc=[];for(let t of document.querySelectorAll(".m-top > :not(.m-pop), #m-explore, #m-panel, .m-nav > *, #m-hud, #m-key, #m-mode, #m-hint")){if(t.hidden||t.offsetParent===null)continue;let e=t.getBoundingClientRect();e.width&&e.height&&Gc.push([e.left-6,e.top-6,e.right+6,e.bottom+6])}return Gc}var xa=null;function my(){if(xa)return xa;xa=P.data.mapa.plates.map(()=>[]);for(let i of P.labelOrder)P.nodes[i].t==="c"&&xa[P.data.mapa.plate[i]].push(i);return xa}function gy(){for(let[i,t]of Hn.used)t.classList.remove("on"),Hn.used.delete(i),Hn.pool.push(t)}function _p(i){let t=P.nodes[i];return at.rel&&at.rel.has(i)?[dn(t.n),at.rel.get(i)]:t.t==="c"?[dn(t.n),[t.tk,t.mc?Je(t.mc).replace("R$ ","R$ ").toUpperCase():"capital fechado"].filter(Boolean).join(" \xB7 ")]:[dn(t.n),[ai(t),t.v?`\u2248 ${Je(t.v)}`:""].filter(Boolean).join(" \xB7 ")]}var qu=[];function xy(){let i=$u(),t=Ht("#m-plates");t.innerHTML="",P.data.mapa.plates.forEach((e,n)=>{let s=document.createElement("button");s.type="button",s.className="m-plate",s.dataset.plate=n,s.style.setProperty("--c",Sa(e));let r=fn(i[n].n,"companhia","companhias");s.innerHTML=`<b><span class="full">${he(eo(e))}</span><span class="short">${he(fy(e))}</span></b><small>${r}${i[n].mc?` \xB7 ${Je(i[n].mc)}`:""}</small>`,s.title=`Ver o setor ${eo(e)} inteiro`,t.appendChild(s),qu[n]={el:s,p:e}})}var vy={};function _y(i){let t=Lt.pxPerUnit();qu.forEach(({el:e},n)=>{let s=Lt.plates[n],r=Lt.projectPoint(s.x0+.9,Lt.PLATE_H+.1,s.z0+.7,vy),o=(s.x1-s.x0)*t,a=!!r.f&&o>46&&at.mode!=="tree";if(e.classList.toggle("on",a),e.classList.toggle("compact",o<210),e.classList.toggle("dim",at.sector>=0&&at.sector!==n),!a)return;e.style.transform=`translate3d(${r.x.toFixed(1)}px, ${r.y.toFixed(1)}px, 0)`,e.style.maxWidth=`${Math.max(60,o-18).toFixed(0)}px`;let l=e.getBoundingClientRect();l.width&&i.push([l.left-4,l.top-4,l.right+4,l.bottom+4])})}function yy(){if(!Lt||at.mode==="tree"){for(let u of Hn.used.values())u.classList.remove("on");for(let{el:u}of qu)u.classList.remove("on");return}let i=innerWidth,t=innerHeight,e=[...py()];_y(e);let n=(u,f,m,y)=>{if(u<8||f<8||m>i-8||y>t-8)return!1;for(let g of e)if(u<g[2]&&m>g[0]&&f<g[3]&&y>g[1])return!1;return!0},s=Lt.pxPerUnit(),r=an((s-6)/40,0,1),o=Math.round((sr?6:12)+r*(sr?26:60)),a=at.hl,l;if(a)l=[...a].sort((u,f)=>$c(f)-$c(u)).slice(0,60);else if(at.sector<0&&r<.5){let u=my(),f=s*s,m=Lt.plates.map(y=>an(Math.round((y.x1-y.x0)*(y.z1-y.z0)*f/42e3),1,6));l=[];for(let y=0;y<6;y++)for(let g=0;g<u.length;g++)y<m[g]&&u[g][y]!=null&&l.push(u[g][y]);o=Math.max(o,sr?12:34)}else at.sector>=0?(l=P.labelOrder.filter(u=>P.data.mapa.plate[u]===at.sector&&P.nodes[u].t==="c"),o=Math.max(o,sr?12:28)):l=P.labelOrder.slice(0,260);let c=new Map,h={},d=0;for(let u of l){if(d>=o)break;if(c.has(u)||!Gn[u]&&!at.forceVis?.has(u))continue;let f=P.nodes[u],m=a&&a.has(u);if(!m&&f.t!=="c"&&!Lt.sky[u]&&r<.55||(Lt.project(u,h),!h.f))continue;let[y,g]=_p(u),p=f.t==="c"&&P.crank[u]<10,M=Math.max(y.length*(p?7.6:6.9),g.length*6.1)+14,E=30,_=null;for(let[b,S]of[["r",!1],["l",!1],["r",!0],["l",!0]]){let I=b==="r"?h.x+14:h.x-14-M,x=S?h.y+8:h.y-34;if(n(I,x,I+M,x+E)){_={side:b,below:S,x0:I,y0:x};break}}_&&(e.push([_.x0,_.y0,_.x0+M,_.y0+E],[h.x-4,h.y-4,h.x+4,h.y+4]),c.set(u,{x:h.x,y:h.y,side:_.side,below:_.below,a:1,hl:m,big:p}),d++)}for(let[u,f]of Hn.used)c.has(u)||(f.classList.remove("on"),Hn.used.delete(u),Hn.pool.push(f));for(let[u,f]of c){let m=Hn.used.get(u);if(m)!m.classList.contains("on")&&performance.now()-m._t>20&&m.classList.add("on");else{m=Hn.pool.pop()||Object.assign(document.createElement("div"),{className:"m-lab"}),m.parentNode||Hn.layer.appendChild(m);let[y,g]=_p(u);m.innerHTML=`<i class="m-lab-dot"></i><span class="m-lab-ln"></span><span class="m-lab-tx"><b>${he(y)}</b><small>${he(g)}</small></span>`,m.classList.toggle("rel",!!(at.rel&&at.rel.has(u))),m.classList.toggle("relc",!!(at.rel&&/^control/.test(at.rel.get(u)||""))),m.dataset.i=u,m.classList.remove("on"),m._t=performance.now(),Hn.used.set(u,m)}m.classList.toggle("l",f.side==="l"),m.classList.toggle("b",!!f.below),m.classList.toggle("hl",!!f.hl),m.classList.toggle("big",f.big),m.style.transform=`translate3d(${f.x.toFixed(1)}px, ${f.y.toFixed(1)}px, 0)`,m.style.setProperty("--a","1")}}function Ou(){let i=Lt.plateAt(innerWidth/2+Lt.view.offX,innerHeight/2+Lt.view.offY),t=i>=0?P.data.mapa.plates[i]:null,e=Pp/Math.max(1,Lt.cam.d),n=e<1.45?"":`<span>ZOOM ${e.toFixed(1).replace(".",",")}\xD7</span>${t?`<span class="m-hud-sec" style="--c:${Sa(t)}">${he(eo(t).toUpperCase())}</span>`:""}`;n!==Ou.last&&(Ht("#m-hud").innerHTML=n,Ou.last=n)}var Pp=160;function Ma(i,t,e){let n=Ht("#m-tip");if(i<0||sr){n.hidden=!0;return}let s=P.nodes[i],r=[];if(s.t==="c"){r.push([s.tk||"Capital fechado",s.mc?Je(s.mc):""]);let c=Ep(i);c>=0&&r.push(["Controle",dn(P.nodes[c].n)])}else r.push([ai(s),s.v?`\u2248 ${Je(s.v)}`:""]);let o=new Set([...P.out[i].map(c=>P.et[c]),...P.inc[i].map(c=>P.es[c])]).size;r.push(["Liga\xE7\xF5es",Ke(o+P.brd[i].length)]),n.innerHTML=`<div class="m-tip-head"><i style="background:${wi(s)}"></i><b>${he(s.n)}</b></div>${r.map(([c,h])=>`<div class="row"><span>${he(c)}</span><span>${he(h)}</span></div>`).join("")}<div class="row muted"><span>${Lt.sky[i]?"Paira sobre o que possui \xB7 ":Lt.isGround[i]?"":"Na pra\xE7a da companhia \xB7 "}clique para ver as liga\xE7\xF5es</span></div>`,n.hidden=!1;let a=n.offsetWidth,l=n.offsetHeight;n.style.left=`${an(t+18,8,innerWidth-a-8)}px`,n.style.top=`${e+18+l>innerHeight-8?e-l-14:e+18}px`}function Bn(){if(no=0,!Lt)return;let i=Ht("#m-explore"),t=Ht("#m-panel"),e=Ht("#m-key").getBoundingClientRect(),n=t&&!t.hidden,s=0,r=0,o=0,a=Ht(".m-top").getBoundingClientRect().bottom+6;innerWidth>760?(i&&!i.classList.contains("collapsed")&&i.offsetParent&&(s=i.getBoundingClientRect().right),r=n?innerWidth-t.offsetLeft:62,e.height&&(o=innerHeight-e.top+6)):n?o=t.offsetHeight:o=e.height?innerHeight-e.top+6:64,Lt.setInsets(s,r,at.mode==="tree"?0:a,o);let l=Ht("#m-mode"),c=l&&!l.hidden?Math.max(a,l.getBoundingClientRect().bottom+6):a;$i?.setFree(s,r,o,c)}var Ip=0,yp=0;function Lp(i){Ip=requestAnimationFrame(Lp),!document.hidden&&(at.mode==="tree"?$i.frame(i):(Lt.update(i),Lt.render(),i-yp>32&&(yy(),Ou(),yp=i)))}var Wi=new Map,sn=null,Ps=null,Mp=0,Bu=0,zu=null;function My(i){if(at.mode==="tree")return;if(i.currentTarget.setPointerCapture(i.pointerId),Wi.set(i.pointerId,{x:i.clientX,y:i.clientY}),at.lastInput=performance.now(),Yi(),wa(),Lt.touch(),Lt.cam.vx=Lt.cam.vz=0,Lt.cam.fly=null,Wi.size===2){let[e,n]=[...Wi.values()];Ps={d:Math.hypot(e.x-n.x,e.y-n.y),mx:(e.x+n.x)/2,my:(e.y+n.y)/2},sn=null;return}sn={x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,moved:!1,hist:[{x:i.clientX,y:i.clientY,t:performance.now()}]}}function by(i){if(Wi.has(i.pointerId)&&Wi.set(i.pointerId,{x:i.clientX,y:i.clientY}),at.lastInput=performance.now(),Wi.size&&Lt?.touch(),at.mode!=="tree"){if(Ps&&Wi.size===2){let[t,e]=[...Wi.values()],n=Math.hypot(t.x-e.x,t.y-e.y),s=(t.x+e.x)/2,r=(t.y+e.y)/2;Lt.zoom(Ps.d/Math.max(1,n),s,r),Lt.pan(s-Ps.mx,r-Ps.my),Ps={d:n,mx:s,my:r};return}if(sn){let t=i.clientX-sn.x,e=i.clientY-sn.y;if(!sn.moved&&Math.hypot(i.clientX-sn.sx,i.clientY-sn.sy)>(sr?8:4)&&(sn.moved=!0,i.currentTarget.classList.add("dragging"),Ma(-1)),sn.moved){Lt.pan(t,e),sn.x=i.clientX,sn.y=i.clientY;let n=performance.now();for(sn.hist.push({x:i.clientX,y:i.clientY,t:n});sn.hist.length>6||sn.hist.length>2&&n-sn.hist[0].t>100;)sn.hist.shift()}return}i.pointerType==="mouse"&&(zu=[i.clientX,i.clientY],Bu||(Bu=requestAnimationFrame(ku)))}}function ku(){if(Bu=0,!zu||at.mode==="tree")return;let[i,t]=zu,e=Lt.pick(i,t,Gn),n=e<0?Lt.plateAt(i,t):-1;Ht("#map").classList.toggle("pointing",e>=0||n>=0),e!==at.hover&&(at.hover=e,clearTimeout(ku.t),at.sel<0&&at.group<0&&!at.shape&&at.mode==="world"&&(ku.t=setTimeout(()=>{if(!(at.sel>=0||at.group>=0||at.shape||at.mode!=="world"||at.hover!==e))if(e>=0){let r=Vu(e);li(r.nodes,r.edges,r.brd,[e],.5,!1,Gu(e,r))}else li(null)},e>=0?140:90))),e>=0?Ma(e,i,t):n>=0&&n!==at.sector?Sy(n,i,t):Ma(-1)}function Sy(i,t,e){let n=Ht("#m-tip");if(sr){n.hidden=!0;return}let s=P.data.mapa.plates[i],r=$u()[i];n.innerHTML=`<div class="m-tip-head"><i style="background:${Sa(s)}"></i><b>${he(eo(s))}</b></div><div class="row"><span>Companhias</span><span>${Ke(r.n)}</span></div><div class="row"><span>Valor de mercado</span><span>${r.mc?Je(r.mc):"\u2013"}</span></div><div class="row muted"><span>Clique para ver o setor inteiro</span></div>`,n.hidden=!1;let o=n.offsetWidth,a=n.offsetHeight;n.style.left=`${an(t+18,8,innerWidth-o-8)}px`,n.style.top=`${e+18+a>innerHeight-8?e-a-14:e+18}px`}function bp(i){if(Wi.delete(i.pointerId),i.currentTarget.classList.remove("dragging"),Ps){Wi.size<2&&(Ps=null);return}if(!sn||at.mode==="tree"){sn=null;return}let t=sn;if(sn=null,t.moved){let o=t.hist;if(o.length>=2&&!Wc){let a=o[0],l=o[o.length-1],c=Math.max(16,l.t-a.t);performance.now()-l.t<80&&Lt.fling((l.x-a.x)/c,(l.y-a.y)/c)}return}let e=performance.now(),n=e-Mp<320;Mp=e;let s=Lt.pick(i.clientX,i.clientY,Gn);if(n&&s>=0){Ls(s);return}if(s>=0){bn(s);return}if(n){Lt.zoom(.55,i.clientX,i.clientY);return}let r=Lt.plateAt(i.clientX,i.clientY);if(r>=0&&at.mode==="world"){(r!==at.sector||at.sel>=0||at.group>=0)&&ya(r);return}(at.sel>=0||at.group>=0||at.sector>=0||at.shape||at.mode==="path")&&(at.mode==="path"&&Gi(!1),bn(-1))}function wy(i){if(i.preventDefault(),at.lastInput=performance.now(),Yi(),wa(),Lt.touch(),at.mode==="tree")return;let t=Math.exp(i.deltaY*(i.ctrlKey?.012:i.deltaMode===1?.05:.0018));Lt.zoom(t,i.clientX,i.clientY)}var Vn={on:!1,t0:0,raf:0};function Ty(i){let t=Ht("#m-intro");if(!t)return;let e=P.nodes.filter(a=>a.t==="c"),n=e.reduce((a,l)=>a+(l.mc||0),0),s=P.nodes.length-e.length;Ht("#m-intro-cap").textContent=`${Ke(e.length)} companhias \xB7 ${Ke(s)} acionistas e conselheiros \xB7 ${Ke(P.M)} participa\xE7\xF5es`;let r=Ht("#m-intro-num");t.hidden=!1,requestAnimationFrame(()=>t.classList.add("on")),Object.assign(Vn,{on:!0,done:0});let o=a=>{if(!Vn.on)return;let l=an(Lt.introK/.86,0,1),c=1-Math.pow(1-l,3);if(r.textContent=Ke(n*c/1e12,2),Lt.introK>=1&&!Vn.done&&(Vn.done=a),Vn.done&&a-Vn.done>1800){wa(!0);return}Vn.raf=requestAnimationFrame(o)};Vn.raf=requestAnimationFrame(o)}function wa(i=!1){if(!Vn.on)return;Vn.on=!1,cancelAnimationFrame(Vn.raf);let t=Ht("#m-intro");t.classList.remove("on"),setTimeout(()=>{t.hidden=!0},900),i||Lt.skipIntro(),document.body.classList.remove("intro"),rr.get("mundo-hint",0)||(ba=setTimeout(()=>{at.sel<0&&at.mode==="world"&&(Ht("#m-hint").hidden=!1,no=0,ba=setTimeout(Yi,9e3))},1400))}var ba=0;function Yi(){let i=Ht("#m-hint");i&&!i.hidden&&(i.hidden=!0,rr.set("mundo-hint",1),no=0),clearTimeout(ba)}function Ey(i){let t=P.data.mapa,e=t.plates[i],n=[];for(let b=0;b<P.N;b++)t.plate[b]===i&&n.push(b);let s=(b,S)=>(P.nodes[S].mc||0)-(P.nodes[b].mc||0)||P.nodes[b].n.localeCompare(P.nodes[S].n),r=Sa(e);Xi={};let o=n.filter(b=>P.nodes[b].t==="c").sort(s),a=o.filter(b=>P.nodes[b].mc),l=a.reduce((b,S)=>b+P.nodes[S].mc,0),c=new Map;for(let b of o){let S=P.nodes[b].st||"Outros";(c.get(S)||c.set(S,[]).get(S)).push(b)}let h=[...c.entries()].map(([b,S])=>[b,S,S.reduce((I,x)=>I+(P.nodes[x].mc||0),0)]).sort((b,S)=>S[2]-b[2]||S[1].length-b[1].length),d=h.map(([b,S,I],x)=>(Xi[`seg${x}`]=S.map(A=>Is(A,P.nodes[A].mc?Je(P.nodes[A].mc):"",[P.nodes[A].tk||"capital fechado",P.nodes[A].g!=null&&P.groups[P.nodes[A].g]?.nc>=2?`grupo ${P.groups[P.nodes[A].g].n}`:""].filter(Boolean).join(" \xB7 "),!1)),`<div class="m-seg"><h4><span>${he(b)}</span><small>${fn(S.length,"companhia","companhias")}${I?` \xB7 ${Je(I)}`:""}</small></h4>${Qr(Xi[`seg${x}`],5,`seg${x}`)}</div>`)).join(""),u=b=>b.m.filter(S=>P.nodes[S].t==="c"&&t.plate[S]===i).length,f=P.groups.filter(b=>b.nc>=2&&u(b)>0).slice(0,12),m=f.map(b=>{let S=u(b);return`<li data-group="${b.i}"><span class="m-dot" style="--c:${qi(b.sector)}"></span><span class="nm">Grupo ${he(b.n)}</span><span class="pc">${b.mc?Je(b.mc):""}</span><small>${S===b.nc?fn(b.nc,"companhia","companhias"):`${S} de ${b.nc} companhias aqui`}${b.r.length?` \xB7 ${he(b.r.slice(0,2).map(I=>dn(P.nodes[I].n)).join(", "))}`:""}</small></li>`}).join(""),y=new Map;for(let b of o)for(let S of P.inc[b]){let I=P.es[S];if(!Lt.isInv[I])continue;let x=y.get(I)||{n:0,v:0};x.n++,x.v+=Math.max(0,P.ep[S])/100*(P.nodes[b].mc||0),y.set(I,x)}let p=[...y.entries()].sort((b,S)=>S[1].n-b[1].n||S[1].v-b[1].v).slice(0,8).map(([b,S])=>Is(b,S.v?`\u2248 ${Je(S.v)}`:"",`${ai(P.nodes[b])} \xB7 em ${fn(S.n,"companhia","companhias")} do setor`,!1)).join(""),M=n.filter(b=>!Lt.sky[b]),E=M.filter(b=>P.nodes[b].t==="p").length,_=M.filter(b=>P.nodes[b].t==="j"||P.nodes[b].t==="s").length;Ht("#m-panel-body").innerHTML=`
    <div class="m-kicker" style="--c:${r}"><i></i>Setor</div>
    <div class="m-head"><span class="m-badge" style="--c:${r}">${Vi("cias")}</span><div><h2>${he(eo(e))}</h2><p>${fn(o.length,"companhia","companhias")} \xB7 ${fn(h.length,"segmento","segmentos")} \xB7 ${fn(f.length,"grupo","grupos")}</p></div></div>
    <div class="m-stats"><div class="m-stat"><span>Valor de mercado</span><b>${he(l?Je(l):"\u2013")}</b></div><div class="m-stat"><span>Na bolsa</span><b>${Ke(a.length)}</b></div><div class="m-stat"><span>Capital fechado</span><b>${Ke(o.length-a.length)}</b></div></div>
    <p class="m-note m-sec-note">Nas pra\xE7as do bairro est\xE3o ${fn(E,"pessoa f\xEDsica","pessoas f\xEDsicas")} e ${fn(_,"holding ou empresa","holdings e empresas")} que s\xF3 t\xEAm participa\xE7\xE3o aqui.</p>
    <div class="m-sec"><h3>Companhias por segmento<small>valor de mercado</small></h3>${d}</div>
    ${m?`<div class="m-sec"><h3>Grupos econ\xF4micos<small>valor de mercado</small></h3><ul class="m-list">${m}</ul></div>`:""}
    ${p?`<div class="m-sec"><h3>Investidores mais presentes<small>companhias do setor</small></h3><ul class="m-list">${p}</ul></div>`:""}
    <p class="m-foot">Cada companhia fica no bairro do seu setor, com os donos de uma s\xF3 companhia na pra\xE7a dela; quem tem participa\xE7\xE3o em v\xE1rias paira acima da cidade. Segmento \xE9 o setor de atividade declarado \xE0 CVM.</p>`,Kc()}function Ay(){let i=Ht("#map");addEventListener("resize",()=>{Lt.resize(innerWidth,innerHeight),$i?.resize(innerWidth,innerHeight),Bn()}),i.addEventListener("pointerdown",My),i.addEventListener("pointermove",by),i.addEventListener("pointerup",bp),i.addEventListener("pointercancel",bp),i.addEventListener("pointerleave",()=>{sn||at.mode==="tree"||(Ma(-1),at.hover>=0&&(at.hover=-1,at.sel<0&&at.group<0&&!at.shape&&at.mode==="world"&&li(null)))}),i.addEventListener("wheel",wy,{passive:!1}),Hn.layer.addEventListener("click",n=>{let s=n.target.closest(".m-lab");s&&at.mode!=="tree"&&bn(+s.dataset.i)}),Hn.layer.addEventListener("dblclick",n=>{let s=n.target.closest(".m-lab");s&&Ls(+s.dataset.i)}),Ht("#m-plates").addEventListener("click",n=>{let s=n.target.closest("[data-plate]");s&&ya(+s.dataset.plate)});let t=n=>()=>{at.lastInput=performance.now(),at.mode==="tree"?$i.zoom(n):Lt.zoom(n)};Ht("#m-zin").onclick=t(.7),Ht("#m-zout").onclick=t(1/.7),Ht("#m-zfit").onclick=()=>{at.mode==="tree"?$i.fit():Lt.fitAll()},Ht("#m-layers-btn").onclick=n=>{n.stopPropagation();let s=Ht("#m-layers");s.hidden=!s.hidden,Ht("#m-layers-btn").setAttribute("aria-expanded",String(!s.hidden))},document.addEventListener("pointerdown",n=>{n.target.closest("#m-layers, #m-layers-btn")||(Ht("#m-layers").hidden=!0,Ht("#m-layers-btn").setAttribute("aria-expanded","false"))});for(let n of document.querySelectorAll("#m-layers [data-layer]"))n.checked=!!at.layers[n.dataset.layer],n.onchange=()=>{if(at.layers[n.dataset.layer]=n.checked,rr.set("mundo-layers",at.layers),wp(),at.sel>=0&&at.mode==="world"){let s=Vu(at.sel);li(s.nodes,s.edges,s.brd,[at.sel],.75,!1,Gu(at.sel,s))}else if(at.shape){let s=at.shape;at.shape=null,xp(s)}Fu()};let e=n=>{let s=n.target.closest("[data-plate]");s&&(Ht("#m-layers").hidden=!0,ya(+s.dataset.plate))};Ht("#m-legend").onclick=e,Ht("#m-key").onclick=n=>{let s=n.target.closest("[data-shape]");s&&xp(s.dataset.shape)},Ht("#m-explore-toggle").onclick=()=>{let n=Ht("#m-explore");n.classList.toggle("collapsed"),Ht("#m-explore-toggle").setAttribute("aria-expanded",String(!n.classList.contains("collapsed"))),rr.set("mundo-explore",!n.classList.contains("collapsed")),Bn()},Ht(".m-tabs").onclick=n=>{let s=n.target.closest("[data-tab]");if(s){Uu=s.dataset.tab;for(let r of document.querySelectorAll(".m-tabs [data-tab]"))r.setAttribute("aria-checked",String(r===s));Fu(),Ht("#m-rank").scrollTop=0}},Ht(".m-grab").onclick=()=>{Ht("#m-panel").classList.toggle("peek"),setTimeout(Bn,420)},Ht("#m-panel-close").onclick=()=>{at.mode!=="world"&&Gi(!1),bn(-1)},Ht("#m-mode-close").onclick=()=>{let n=at.sel;Gi(!1),n>=0?bn(n):bn(-1)},document.addEventListener("click",n=>{let s=n.target.closest("[data-more]");if(s){let c=s.dataset.more;s.closest("ul").innerHTML=Xi[c].join("");return}let r=n.target.closest("[data-go]");if(r&&(r.closest("#m-panel")||r.closest("#m-explore"))){let c=+r.dataset.go;if(at.mode==="tree"){Ls(c);return}bn(c);return}let o=n.target.closest("[data-sel]");if(o){Gi(!1),bn(+o.dataset.sel);return}let a=n.target.closest("[data-group]");if(a&&(a.closest("#m-panel")||a.closest("#m-explore"))){qc(+a.dataset.group),innerWidth<=760&&(Ht("#m-explore").classList.add("collapsed"),Bn());return}let l=n.target.closest("[data-act]");if(l){let c=l.dataset.node!=null?+l.dataset.node:at.sel;if(l.dataset.act==="tree"&&c>=0&&Ls(c),l.dataset.act==="world"){let h=at.sel;Gi(!1),h>=0&&bn(h)}l.dataset.act==="path"&&c>=0&&Cy(c)}}),document.addEventListener("keydown",n=>{if(!n.target.matches("input[type=search], input[type=text], textarea")){if(n.key==="/"||(n.metaKey||n.ctrlKey)&&n.key.toLowerCase()==="k")n.preventDefault(),Ht("#m-q").focus();else if(n.key==="Escape"&&Vn.on)wa();else if(n.key==="Escape")if(at.mode!=="world"){let s=at.sel;Gi(!1),s>=0?bn(s):bn(-1)}else bn(-1);else if(n.key==="+"||n.key==="=")Ht("#m-zin").click();else if(n.key==="-")Ht("#m-zout").click();else if(n.key==="0")Ht("#m-zfit").click();else if(at.mode==="world"&&n.key.startsWith("Arrow")){at.lastInput=performance.now();let s=80;Lt.pan(n.key==="ArrowLeft"?s:n.key==="ArrowRight"?-s:0,n.key==="ArrowUp"?s:n.key==="ArrowDown"?-s:0)}}}),Cp(Ht("#m-q"),Ht("#m-results"),n=>{n.g!=null?qc(n.g):at.mode==="tree"?Ls(n.i):bn(n.i)}),addEventListener("hashchange",()=>Rp())}function Cy(i){let t=Ht("#m-pick-slot");t.innerHTML=`<div class="m-pick"><div class="m-search" role="combobox" aria-expanded="false"><svg class="ic"><use href="#i-path"/></svg>
    <input id="m-pick-q" type="search" placeholder="Com quem? Empresa, pessoa ou investidor" autocomplete="off" aria-label="Conectar com"><ul id="m-pick-res" class="m-results" role="listbox" hidden></ul></div></div>`;let e=Ht("#m-pick-q");Cp(e,Ht("#m-pick-res"),n=>{n.g!=null?Yc(i,P.groups[n.g].h):Yc(i,n.i)}),e.focus()}async function Ry(){Hn.layer=Ht("#m-labels"),(innerWidth<=760||rr.get("mundo-explore",!1)===!1)&&Ht("#m-explore").classList.add("collapsed");let i;try{i=await fetch("data/cias/mundo.json",{cache:"no-cache"}).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}catch{Ht("#m-empty").hidden=!1,Ht("#m-empty").textContent="O mapa ainda n\xE3o foi montado. Ele \xE9 refeito a cada atualiza\xE7\xE3o do portal; tente de novo em alguns minutos.",document.body.classList.remove("loading");return}let t=s=>s&&s.v===Du&&s.x&&s.x.length===i.nodes.length;innerHeight>innerWidth*1.15?i.mapa=t(i.mapaV)?i.mapaV:Nu(i,{aspect:mp}):t(i.mapa)||(i.mapa=Nu(i)),delete i.mapaV,Q_(i);try{Lt=fp(Ht("#map"),i,{palette:j_,accent:Xc,reduced:Wc,fixedQuality:/[?&]hq\b/.test(location.search)})}catch(s){console.error(s),Ht("#m-empty").hidden=!1,Ht("#m-empty").textContent="Este navegador n\xE3o conseguiu abrir o Mundo em 3D (WebGL desligado ou indispon\xEDvel). Tente em outro navegador ou atualize o sistema.",document.body.classList.remove("loading");return}i.mapa.plates.forEach((s,r)=>{s.j=r}),$i=dp(Lt.renderer,{W:P,colorOf:wi,sectorColor:qi,kindLabel:ai,shortName:dn,brl:Je,pct:oi,accent:Xc,onPick:(s,r)=>{r?Ls(s):(at.sel=s,Xu(s))},onExt:s=>_a(`${s.n}: controlada de capital fechado (${oi(s.pct)})`),canvas:Ht("#map")}),Lt.resize(innerWidth,innerHeight),$i.resize(innerWidth,innerHeight),wp();let n=i.stats||{};Ht("#m-sub").textContent=`${Ke(n.cias||0)} companhias \xB7 ${Ke(n.grupos||0)} grupos \xB7 ${Ke((n.acionistas||0)+(n.pessoas_conselho||0))} acionistas e conselheiros`,dy(),xy(),Fu(),Ay(),Bn(),Lt.setOffset(Lt.view.toX,Lt.view.toY,!0),document.fonts?.ready.then(()=>Bn()),document.body.classList.remove("loading"),Lt.warmup(),Lt.fitAll(0),Lt.cam.x=Lt.cam.tx,Lt.cam.z=Lt.cam.tz,Lt.cam.d=Lt.cam.td,Lt.cam.fly=null,Pp=Lt.cam.td,!location.hash&&!Wc&&(document.body.classList.add("intro"),Lt.intro(5600),Ty(5600)),Ip=requestAnimationFrame(Lp),Rp(),!rr.get("mundo-hint",0)&&!location.hash&&!Vn.on&&(ba=setTimeout(()=>{at.sel<0&&at.mode==="world"&&(Ht("#m-hint").hidden=!1,no=0,ba=setTimeout(Yi,9e3))},2500)),/[?&]debug\b/.test(location.search)&&(window.__mundo={ui:at,W:P,map:Lt,tree:$i,select:bn,openTree:Ls,showPath:Yc,selectGroup:qc,focusSector:ya})}Ry();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
