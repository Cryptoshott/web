(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{44523:function(t,r,e){"use strict";e.d(r,{Z:function(){return a}});var n=e(719),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=(t,r)=>{let e=(0,n.forwardRef)(({color:e="currentColor",size:a=24,strokeWidth:u=2,absoluteStrokeWidth:f,children:l,...c},s)=>(0,n.createElement)("svg",{ref:s,...o,width:a,height:a,stroke:e,strokeWidth:f?24*Number(u)/Number(a):u,className:`lucide lucide-${i(t)}`,...c},[...r.map(([t,r])=>(0,n.createElement)(t,r)),...(Array.isArray(l)?l:[l])||[]]));return e.displayName=`${t}`,e}},79807:function(t,r,e){"use strict";e.d(r,{Z:function(){return n}});let n=(0,e(44523).Z)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},63821:function(t,r){var e,n,o=function(){var t,r,e,n,o,i,a,u=function(t,r){var e=t,n=l[r],o=null,i=0,a=null,u=[],f={},c=function(t,r){o=function(t){for(var r=Array(t),e=0;e<t;e+=1){r[e]=Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(i=4*e+17),g(0,0),g(i-7,0),g(0,i-7),M(),B(),C(t,r),e>=7&&k(t),null==a&&(a=x(e,n,u)),b(a,r)},g=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1)&&!(i<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||i<=r+n||(0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4?o[t+e][r+n]=!0:o[t+e][r+n]=!1)},A=function(){for(var t=0,r=0,e=0;e<8;e+=1){c(!0,e);var n=s.getLostPoint(f);(0==e||t>n)&&(t=n,r=e)}return r},B=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==o[6][r]&&(o[6][r]=r%2==0)},M=function(){for(var t=s.getPatternPosition(e),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var i=t[r],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)-2==u||2==u||-2==f||2==f||0==u&&0==f?o[i+u][a+f]=!0:o[i+u][a+f]=!1}},k=function(t){for(var r=s.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!t&&(r>>n&1)==1;o[Math.floor(n/3)][n%3+i-8-3]=a}for(var n=0;n<18;n+=1){var a=!t&&(r>>n&1)==1;o[n%3+i-8-3][Math.floor(n/3)]=a}},C=function(t,r){for(var e=n<<3|r,a=s.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!t&&(a>>u&1)==1;u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[i-15+u][8]=f}for(var u=0;u<15;u+=1){var f=!t&&(a>>u&1)==1;u<8?o[8][i-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[i-8][8]=!t},b=function(t,r){for(var e=-1,n=i-1,a=7,u=0,f=s.getMaskFunction(r),l=i-1;l>0;l-=2)for(6==l&&(l-=1);;){for(var c=0;c<2;c+=1)if(null==o[n][l-c]){var g=!1;u<t.length&&(g=(t[u]>>>a&1)==1),f(n,l-c)&&(g=!g),o[n][l-c]=g,-1==(a-=1)&&(u+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},T=function(t,r){for(var e=0,n=0,o=0,i=Array(r.length),a=Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,l=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,l),i[u]=Array(f);for(var c=0;c<i[u].length;c+=1)i[u][c]=255&t.getBuffer()[c+e];e+=f;var g=s.getErrorCorrectPolynomial(l),v=h(i[u],g.getLength()-1).mod(g);a[u]=Array(g.getLength()-1);for(var c=0;c<a[u].length;c+=1){var d=c+v.getLength()-a[u].length;a[u][c]=d>=0?v.getAt(d):0}}for(var p=0,c=0;c<r.length;c+=1)p+=r[c].totalCount;for(var w=Array(p),y=0,c=0;c<n;c+=1)for(var u=0;u<r.length;u+=1)c<i[u].length&&(w[y]=i[u][c],y+=1);for(var c=0;c<o;c+=1)for(var u=0;u<r.length;u+=1)c<a[u].length&&(w[y]=a[u][c],y+=1);return w},x=function(t,r,e){for(var n=v.getRSBlocks(t,r),o=d(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),s.getLengthInBits(a.getMode(),t)),a.write(o)}for(var u=0,i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u)&&(o.put(236,8),!(o.getLengthInBits()>=8*u));)o.put(17,8);return T(o,n)};f.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=p(t);break;case"Alphanumeric":e=w(t);break;case"Byte":e=y(t);break;case"Kanji":e=m(t);break;default:throw"mode:"+r}u.push(e),a=null},f.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw t+","+r;return o[t][r]},f.getModuleCount=function(){return i},f.make=function(){if(e<1){for(var t=1;t<40;t++){for(var r=v.getRSBlocks(t,n),o=d(),i=0;i<u.length;i++){var a=u[i];o.put(a.getMode(),4),o.put(a.getLength(),s.getLengthInBits(a.getMode(),t)),a.write(o)}for(var f=0,i=0;i<r.length;i++)f+=r[i].dataCount;if(o.getLengthInBits()<=8*f)break}e=t}c(!1,A())},f.createTableTag=function(t,r){t=t||2;var e="";e+='<table style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: '+(r=void 0===r?4*t:r)+'px;"><tbody>';for(var n=0;n<f.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<f.getModuleCount();o+=1)e+='<td style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: 0px; width: '+t+"px; height: "+t+"px; background-color: "+(f.isDark(n,o)?"#000000":"#ffffff")+';"/>';e+="</tr>"}return e+"</tbody></table>"},f.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(o=arguments[0],t=o.cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,l,c=f.getModuleCount()*t+2*r,s="";for(l="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",s+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"'+(o.scalable?"":' width="'+c+'px" height="'+c+'px"')+(' viewBox="0 0 '+c+" ")+c+'"  preserveAspectRatio="xMinYMin meet"'+(n.text||e.text?' role="img" aria-labelledby="'+D([n.id,e.id].join(" ").trim())+'"':"")+">"+(n.text?'<title id="'+D(n.id)+'">'+D(n.text)+"</title>":"")+(e.text?'<description id="'+D(e.id)+'">'+D(e.text)+"</description>":"")+'<rect width="100%" height="100%" fill="white" cx="0" cy="0"/><path d="',a=0;a<f.getModuleCount();a+=1)for(i=0,u=a*t+r;i<f.getModuleCount();i+=1)f.isDark(a,i)&&(s+="M"+(i*t+r)+","+u+l);return s+'" stroke="transparent" fill="black"/></svg>'},f.createDataURL=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=f.getModuleCount()*t+2*r,n=r,o=e-r;return E(e,e,function(r,e){if(!(n<=r)||!(r<o)||!(n<=e)||!(e<o))return 1;var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return f.isDark(a,i)?0:1})},f.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=f.getModuleCount()*t+2*r,o="";return o+='<img src="'+f.createDataURL(t,r)+'" width="'+n+'" height="'+n+'"',e&&(o+=' alt="'+D(e)+'"'),o+="/>"};var D=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r},N=function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*f.getModuleCount()+2*t,u=t,l=a-t,c={"██":"█","█ ":"▀"," █":"▄","  ":" "},s={"██":"▀","█ ":"▀"," █":" ","  ":" "},g="";for(r=0;r<a;r+=2){for(e=0,n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1);e<a;e+=1)i="█",u<=e&&e<l&&u<=r&&r<l&&f.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<l&&u<=r+1&&r+1<l&&f.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",g+=t<1&&r+1>=l?s[i]:c[i];g+="\n"}return a%2&&t>0?g.substring(0,g.length-a-1)+Array(a+1).join("▀"):g.substring(0,g.length-1)};return f.createASCII=function(t,r){if((t=t||1)<2)return N(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=f.getModuleCount()*t+2*r,u=r,l=a-r,c=Array(t+1).join("██"),s=Array(t+1).join("  "),g="",h="";for(e=0;e<a;e+=1){for(n=0,o=Math.floor((e-u)/t),h="";n<a;n+=1)i=1,u<=n&&n<l&&u<=e&&e<l&&f.isDark(o,Math.floor((n-u)/t))&&(i=0),h+=i?c:s;for(o=0;o<t;o+=1)g+=h+"\n"}return g.substring(0,g.length-1)},f.renderTo2dContext=function(t,r){r=r||2;for(var e=f.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=f.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},f};u.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}},u.stringToBytes=u.stringToBytesFuncs.default,u.createStringToBytes=function(t,r){var e=function(){for(var e=M(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n(),l=n(),c=String.fromCharCode(a<<8|u),s=f<<8|l;i[c]=s,o+=1}if(o!=r)throw o+" != "+r;return i}();return function(t){for(var r=[],n=0;n<t.length;n+=1){var o=t.charCodeAt(n);if(o<128)r.push(o);else{var i=e[t.charAt(n)];"number"==typeof i?(255&i)==i?r.push(i):(r.push(i>>>8),r.push(255&i)):r.push(63)}}return r}};var f={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},l={L:1,M:0,Q:3,H:2},c={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s=(t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],r={},e=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},r.getBCHTypeInfo=function(t){for(var r=t<<10;e(r)-e(1335)>=0;)r^=1335<<e(r)-e(1335);return(t<<10|r)^21522},r.getBCHTypeNumber=function(t){for(var r=t<<12;e(r)-e(7973)>=0;)r^=7973<<e(r)-e(7973);return t<<12|r},r.getPatternPosition=function(r){return t[r-1]},r.getMaskFunction=function(t){switch(t){case c.PATTERN000:return function(t,r){return(t+r)%2==0};case c.PATTERN001:return function(t,r){return t%2==0};case c.PATTERN010:return function(t,r){return r%3==0};case c.PATTERN011:return function(t,r){return(t+r)%3==0};case c.PATTERN100:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case c.PATTERN101:return function(t,r){return t*r%2+t*r%3==0};case c.PATTERN110:return function(t,r){return(t*r%2+t*r%3)%2==0};case c.PATTERN111:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},r.getErrorCorrectPolynomial=function(t){for(var r=h([1],0),e=0;e<t;e+=1)r=r.multiply(h([1,g.gexp(e)],0));return r},r.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case f.MODE_NUMBER:return 10;case f.MODE_ALPHA_NUM:return 9;case f.MODE_8BIT_BYTE:case f.MODE_KANJI:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case f.MODE_NUMBER:return 12;case f.MODE_ALPHA_NUM:return 11;case f.MODE_8BIT_BYTE:return 16;case f.MODE_KANJI:return 10;default:throw"mode:"+t}else if(r<41)switch(t){case f.MODE_NUMBER:return 14;case f.MODE_ALPHA_NUM:return 13;case f.MODE_8BIT_BYTE:return 16;case f.MODE_KANJI:return 12;default:throw"mode:"+t}else throw"type:"+r},r.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0)&&!(r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a!=t.isDark(n+u,o+f)||(i+=1);i>5&&(e+=3+i-5)}for(var n=0;n<r-1;n+=1)for(var o=0;o<r-1;o+=1){var l=0;t.isDark(n,o)&&(l+=1),t.isDark(n+1,o)&&(l+=1),t.isDark(n,o+1)&&(l+=1),t.isDark(n+1,o+1)&&(l+=1),(0==l||4==l)&&(e+=3)}for(var n=0;n<r;n+=1)for(var o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(var o=0;o<r;o+=1)for(var n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);for(var c=0,o=0;o<r;o+=1)for(var n=0;n<r;n+=1)t.isDark(n,o)&&(c+=1);return e+Math.abs(100*c/r/r-50)/5*10},r),g=function(){for(var t=Array(256),r=Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(var e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(var e=0;e<255;e+=1)r[t[e]]=e;var n={};return n.glog=function(t){if(t<1)throw"glog("+t+")";return r[t]},n.gexp=function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]},n}();function h(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={};return n.getAt=function(t){return e[t]},n.getLength=function(){return e.length},n.multiply=function(t){for(var r=Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=g.gexp(g.glog(n.getAt(e))+g.glog(t.getAt(o)));return h(r,0)},n.mod=function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=g.glog(n.getAt(0))-g.glog(t.getAt(0)),e=Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(var o=0;o<t.getLength();o+=1)e[o]^=g.gexp(g.glog(t.getAt(o))+r);return h(e,0).mod(t)},n}var v=(n=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},i={},a=function(t,r){switch(r){case l.L:return n[(t-1)*4+0];case l.M:return n[(t-1)*4+1];case l.Q:return n[(t-1)*4+2];case l.H:return n[(t-1)*4+3];default:return}},i.getRSBlocks=function(t,r){var e=a(t,r);if(void 0===e)throw"bad rs block @ typeNumber:"+t+"/errorCorrectionLevel:"+r;for(var n=e.length/3,i=[],u=0;u<n;u+=1)for(var f=e[3*u+0],l=e[3*u+1],c=e[3*u+2],s=0;s<f;s+=1)i.push(o(l,c));return i},i),d=function(){var t=[],r=0,e={};return e.getBuffer=function(){return t},e.getAt=function(r){return(t[Math.floor(r/8)]>>>7-r%8&1)==1},e.put=function(t,r){for(var n=0;n<r;n+=1)e.putBit((t>>>r-n-1&1)==1)},e.getLengthInBits=function(){return r},e.putBit=function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1},e},p=function(t){var r=f.MODE_NUMBER,e={};e.getMode=function(){return r},e.getLength=function(r){return t.length},e.write=function(r){for(var e=0;e+2<t.length;)r.put(n(t.substring(e,e+3)),10),e+=3;e<t.length&&(t.length-e==1?r.put(n(t.substring(e,e+1)),4):t.length-e==2&&r.put(n(t.substring(e,e+2)),7))};var n=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+o(t.charAt(e));return r},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-48;throw"illegal char :"+t};return e},w=function(t){var r=f.MODE_ALPHA_NUM,e={};e.getMode=function(){return r},e.getLength=function(r){return t.length},e.write=function(r){for(var e=0;e+1<t.length;)r.put(45*n(t.charAt(e))+n(t.charAt(e+1)),11),e+=2;e<t.length&&r.put(n(t.charAt(e)),6)};var n=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-48;if("A"<=t&&t<="Z")return t.charCodeAt(0)-65+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return e},y=function(t){var r=f.MODE_8BIT_BYTE,e=u.stringToBytes(t),n={};return n.getMode=function(){return r},n.getLength=function(t){return e.length},n.write=function(t){for(var r=0;r<e.length;r+=1)t.put(e[r],8)},n},m=function(t){var r=f.MODE_KANJI,e=u.stringToBytesFuncs.SJIS;if(!e)throw"sjis not supported.";!function(t,r){var n=e("友");if(2!=n.length||(n[0]<<8|n[1])!=38726)throw"sjis not supported."}(0,0);var n=e(t),o={};return o.getMode=function(){return r},o.getLength=function(t){return~~(n.length/2)},o.write=function(t){for(var r=0;r+1<n.length;){var e=(255&n[r])<<8|255&n[r+1];if(33088<=e&&e<=40956)e-=33088;else if(57408<=e&&e<=60351)e-=49472;else throw"illegal char at "+(r+1)+"/"+e;e=(e>>>8&255)*192+(255&e),t.put(e,13),r+=2}if(r<n.length)throw"illegal char at "+(r+1)},o},A=function(){var t=[],r={};return r.writeByte=function(r){t.push(255&r)},r.writeShort=function(t){r.writeByte(t),r.writeByte(t>>>8)},r.writeBytes=function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},r.writeString=function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},r.toByteArray=function(){return t},r.toString=function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+"]"},r},B=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else if(t<26)return 65+t;else if(t<52)return 97+(t-26);else if(t<62)return 48+(t-52);else if(62==t)return 43;else if(63==t)return 47;throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o},M=function(t){var r=0,e=0,n=0,o={};o.read=function(){for(;n<8;){if(r>=t.length){if(0==n)return -1;throw"unexpected end of file./"+n}var o=t.charAt(r);if(r+=1,"="==o)return n=0,-1;o.match(/^\s$/)||(e=e<<6|i(o.charCodeAt(0)),n+=6)}var a=e>>>n-8&255;return n-=8,a};var i=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return o},k=function(t,r){var e=Array(t*r),n={};n.setPixel=function(r,n,o){e[n*t+r]=o},n.write=function(e){e.writeString("GIF87a"),e.writeShort(t),e.writeShort(r),e.writeByte(128),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(255),e.writeByte(255),e.writeByte(255),e.writeString(","),e.writeShort(0),e.writeShort(0),e.writeShort(t),e.writeShort(r),e.writeByte(0);var n=i(2);e.writeByte(2);for(var o=0;n.length-o>255;)e.writeByte(255),e.writeBytes(n,o,255),o+=255;e.writeByte(n.length-o),e.writeBytes(n,o,n.length-o),e.writeByte(0),e.writeString(";")};var o=function(t){var r=0,e=0,n={};return n.write=function(n,o){if(n>>>o!=0)throw"length over";for(;r+o>=8;)t.writeByte(255&(n<<r|e)),o-=8-r,n>>>=8-r,e=0,r=0;e=n<<r|e,r+=o},n.flush=function(){r>0&&t.writeByte(e)},n},i=function(t){for(var r=1<<t,n=(1<<t)+1,i=t+1,u=a(),f=0;f<r;f+=1)u.add(String.fromCharCode(f));u.add(String.fromCharCode(r)),u.add(String.fromCharCode(n));var l=A(),c=o(l);c.write(r,i);var s=0,g=String.fromCharCode(e[0]);for(s+=1;s<e.length;){var h=String.fromCharCode(e[s]);s+=1,u.contains(g+h)?g+=h:(c.write(u.indexOf(g),i),4095>u.size()&&(u.size()==1<<i&&(i+=1),u.add(g+h)),g=h)}return c.write(u.indexOf(g),i),c.write(n,i),c.flush(),l.toByteArray()},a=function(){var t={},r=0,e={};return e.add=function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},e.size=function(){return r},e.indexOf=function(r){return t[r]},e.contains=function(r){return void 0!==t[r]},e};return n},E=function(t,r,e){for(var n=k(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=A();n.write(a);for(var u=B(),f=a.toByteArray(),l=0;l<f.length;l+=1)u.writeByte(f[l]);return u.flush(),"data:image/gif;base64,"+u};return u}();o.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},void 0!==(n="function"==typeof(e=function(){return o})?e.apply(r,[]):e)&&(t.exports=n)},46908:function(t,r,e){"use strict";e.d(r,{w_:function(){return f}});var n=e(719),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},u=function(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>r.indexOf(n)&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)0>r.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(e[n[o]]=t[n[o]]);return e};function f(t){return function(r){return n.createElement(l,a({attr:a({},t.attr)},r),function t(r){return r&&r.map(function(r,e){return n.createElement(r.tag,a({key:e},r.attr),t(r.child))})}(t.child))}}function l(t){var r=function(r){var e,o=t.attr,i=t.size,f=t.title,l=u(t,["attr","size","title"]),c=i||r.size||"1em";return r.className&&(e=r.className),t.className&&(e=(e?e+" ":"")+t.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,l,{className:e,style:a(a({color:t.color||r.color},r.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),f&&n.createElement("title",null,f),t.children)};return void 0!==i?n.createElement(i.Consumer,null,function(t){return r(t)}):r(o)}},83082:function(t,r,e){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}e.d(r,{Z:function(){return n}})},33711:function(t,r,e){"use strict";var n=e(719);let o=n.forwardRef(function(t,r){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:r},t),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))});r.Z=o},61157:function(t,r,e){"use strict";e.d(r,{F:function(){return o},e:function(){return i}});var n=e(719);function o(...t){return r=>t.forEach(t=>{"function"==typeof t?t(r):null!=t&&(t.current=r)})}function i(...t){return(0,n.useCallback)(o(...t),t)}},7650:function(t,r,e){"use strict";e.d(r,{WV:function(){return u},jH:function(){return f}});var n=e(83082),o=e(719),i=e(86731),a=e(32820);let u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((t,r)=>{let e=(0,o.forwardRef)((t,e)=>{let{asChild:i,...u}=t,f=i?a.g7:r;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(f,(0,n.Z)({},u,{ref:e}))});return e.displayName=`Primitive.${r}`,{...t,[r]:e}},{});function f(t,r){t&&(0,i.flushSync)(()=>t.dispatchEvent(r))}},32820:function(t,r,e){"use strict";e.d(r,{A4:function(){return f},g7:function(){return a}});var n=e(83082),o=e(719),i=e(61157);let a=(0,o.forwardRef)((t,r)=>{let{children:e,...i}=t,a=o.Children.toArray(e),f=a.find(l);if(f){let t=f.props.children,e=a.map(r=>r!==f?r:o.Children.count(t)>1?o.Children.only(null):(0,o.isValidElement)(t)?t.props.children:null);return(0,o.createElement)(u,(0,n.Z)({},i,{ref:r}),(0,o.isValidElement)(t)?(0,o.cloneElement)(t,void 0,e):null)}return(0,o.createElement)(u,(0,n.Z)({},i,{ref:r}),e)});a.displayName="Slot";let u=(0,o.forwardRef)((t,r)=>{let{children:e,...n}=t;return(0,o.isValidElement)(e)?(0,o.cloneElement)(e,{...function(t,r){let e={...r};for(let n in r){let o=t[n],i=r[n];/^on[A-Z]/.test(n)?o&&i?e[n]=(...t)=>{i(...t),o(...t)}:o&&(e[n]=o):"style"===n?e[n]={...o,...i}:"className"===n&&(e[n]=[o,i].filter(Boolean).join(" "))}return{...t,...e}}(n,e.props),ref:r?(0,i.F)(r,e.ref):e.ref}):o.Children.count(e)>1?o.Children.only(null):null});u.displayName="SlotClone";let f=({children:t})=>(0,o.createElement)(o.Fragment,null,t);function l(t){return(0,o.isValidElement)(t)&&t.type===f}}}]);