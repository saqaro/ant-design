(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2601],{348168:function(w,M,d){var g=d(139092),p={};for(var m in g)g.hasOwnProperty(m)&&(p[g[m]]=m);var u=w.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var b in u)if(u.hasOwnProperty(b)){if(!("channels"in u[b]))throw new Error("missing channels property: "+b);if(!("labels"in u[b]))throw new Error("missing channel labels property: "+b);if(u[b].labels.length!==u[b].channels)throw new Error("channel and label counts mismatch: "+b);var c=u[b].channels,h=u[b].labels;delete u[b].channels,delete u[b].labels,Object.defineProperty(u[b],"channels",{value:c}),Object.defineProperty(u[b],"labels",{value:h})}u.rgb.hsl=function(r){var n=r[0]/255,t=r[1]/255,i=r[2]/255,l=Math.min(n,t,i),a=Math.max(n,t,i),e=a-l,o,s,v;return a===l?o=0:n===a?o=(t-i)/e:t===a?o=2+(i-n)/e:i===a&&(o=4+(n-t)/e),o=Math.min(o*60,360),o<0&&(o+=360),v=(l+a)/2,a===l?s=0:v<=.5?s=e/(a+l):s=e/(2-a-l),[o,s*100,v*100]},u.rgb.hsv=function(r){var n,t,i,l,a,e=r[0]/255,o=r[1]/255,s=r[2]/255,v=Math.max(e,o,s),y=v-Math.min(e,o,s),k=function(x){return(v-x)/6/y+1/2};return y===0?l=a=0:(a=y/v,n=k(e),t=k(o),i=k(s),e===v?l=i-t:o===v?l=1/3+n-i:s===v&&(l=2/3+t-n),l<0?l+=1:l>1&&(l-=1)),[l*360,a*100,v*100]},u.rgb.hwb=function(r){var n=r[0],t=r[1],i=r[2],l=u.rgb.hsl(r)[0],a=1/255*Math.min(n,Math.min(t,i));return i=1-1/255*Math.max(n,Math.max(t,i)),[l,a*100,i*100]},u.rgb.cmyk=function(r){var n=r[0]/255,t=r[1]/255,i=r[2]/255,l,a,e,o;return o=Math.min(1-n,1-t,1-i),l=(1-n-o)/(1-o)||0,a=(1-t-o)/(1-o)||0,e=(1-i-o)/(1-o)||0,[l*100,a*100,e*100,o*100]};function f(r,n){return Math.pow(r[0]-n[0],2)+Math.pow(r[1]-n[1],2)+Math.pow(r[2]-n[2],2)}u.rgb.keyword=function(r){var n=p[r];if(n)return n;var t=1/0,i;for(var l in g)if(g.hasOwnProperty(l)){var a=g[l],e=f(r,a);e<t&&(t=e,i=l)}return i},u.keyword.rgb=function(r){return g[r]},u.rgb.xyz=function(r){var n=r[0]/255,t=r[1]/255,i=r[2]/255;n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92;var l=n*.4124+t*.3576+i*.1805,a=n*.2126+t*.7152+i*.0722,e=n*.0193+t*.1192+i*.9505;return[l*100,a*100,e*100]},u.rgb.lab=function(r){var n=u.rgb.xyz(r),t=n[0],i=n[1],l=n[2],a,e,o;return t/=95.047,i/=100,l/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,a=116*i-16,e=500*(t-i),o=200*(i-l),[a,e,o]},u.hsl.rgb=function(r){var n=r[0]/360,t=r[1]/100,i=r[2]/100,l,a,e,o,s;if(t===0)return s=i*255,[s,s,s];i<.5?a=i*(1+t):a=i+t-i*t,l=2*i-a,o=[0,0,0];for(var v=0;v<3;v++)e=n+1/3*-(v-1),e<0&&e++,e>1&&e--,6*e<1?s=l+(a-l)*6*e:2*e<1?s=a:3*e<2?s=l+(a-l)*(2/3-e)*6:s=l,o[v]=s*255;return o},u.hsl.hsv=function(r){var n=r[0],t=r[1]/100,i=r[2]/100,l=t,a=Math.max(i,.01),e,o;return i*=2,t*=i<=1?i:2-i,l*=a<=1?a:2-a,o=(i+t)/2,e=i===0?2*l/(a+l):2*t/(i+t),[n,e*100,o*100]},u.hsv.rgb=function(r){var n=r[0]/60,t=r[1]/100,i=r[2]/100,l=Math.floor(n)%6,a=n-Math.floor(n),e=255*i*(1-t),o=255*i*(1-t*a),s=255*i*(1-t*(1-a));switch(i*=255,l){case 0:return[i,s,e];case 1:return[o,i,e];case 2:return[e,i,s];case 3:return[e,o,i];case 4:return[s,e,i];case 5:return[i,e,o]}},u.hsv.hsl=function(r){var n=r[0],t=r[1]/100,i=r[2]/100,l=Math.max(i,.01),a,e,o;return o=(2-t)*i,a=(2-t)*l,e=t*l,e/=a<=1?a:2-a,e=e||0,o/=2,[n,e*100,o*100]},u.hwb.rgb=function(r){var n=r[0]/360,t=r[1]/100,i=r[2]/100,l=t+i,a,e,o,s;l>1&&(t/=l,i/=l),a=Math.floor(6*n),e=1-i,o=6*n-a,a&1&&(o=1-o),s=t+o*(e-t);var v,y,k;switch(a){default:case 6:case 0:v=e,y=s,k=t;break;case 1:v=s,y=e,k=t;break;case 2:v=t,y=e,k=s;break;case 3:v=t,y=s,k=e;break;case 4:v=s,y=t,k=e;break;case 5:v=e,y=t,k=s;break}return[v*255,y*255,k*255]},u.cmyk.rgb=function(r){var n=r[0]/100,t=r[1]/100,i=r[2]/100,l=r[3]/100,a,e,o;return a=1-Math.min(1,n*(1-l)+l),e=1-Math.min(1,t*(1-l)+l),o=1-Math.min(1,i*(1-l)+l),[a*255,e*255,o*255]},u.xyz.rgb=function(r){var n=r[0]/100,t=r[1]/100,i=r[2]/100,l,a,e;return l=n*3.2406+t*-1.5372+i*-.4986,a=n*-.9689+t*1.8758+i*.0415,e=n*.0557+t*-.204+i*1.057,l=l>.0031308?1.055*Math.pow(l,1/2.4)-.055:l*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a*12.92,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*12.92,l=Math.min(Math.max(0,l),1),a=Math.min(Math.max(0,a),1),e=Math.min(Math.max(0,e),1),[l*255,a*255,e*255]},u.xyz.lab=function(r){var n=r[0],t=r[1],i=r[2],l,a,e;return n/=95.047,t/=100,i/=108.883,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,l=116*t-16,a=500*(n-t),e=200*(t-i),[l,a,e]},u.lab.xyz=function(r){var n=r[0],t=r[1],i=r[2],l,a,e;a=(n+16)/116,l=t/500+a,e=a-i/200;var o=Math.pow(a,3),s=Math.pow(l,3),v=Math.pow(e,3);return a=o>.008856?o:(a-16/116)/7.787,l=s>.008856?s:(l-16/116)/7.787,e=v>.008856?v:(e-16/116)/7.787,l*=95.047,a*=100,e*=108.883,[l,a,e]},u.lab.lch=function(r){var n=r[0],t=r[1],i=r[2],l,a,e;return l=Math.atan2(i,t),a=l*360/2/Math.PI,a<0&&(a+=360),e=Math.sqrt(t*t+i*i),[n,e,a]},u.lch.lab=function(r){var n=r[0],t=r[1],i=r[2],l,a,e;return e=i/360*2*Math.PI,l=t*Math.cos(e),a=t*Math.sin(e),[n,l,a]},u.rgb.ansi16=function(r){var n=r[0],t=r[1],i=r[2],l=1 in arguments?arguments[1]:u.rgb.hsv(r)[2];if(l=Math.round(l/50),l===0)return 30;var a=30+(Math.round(i/255)<<2|Math.round(t/255)<<1|Math.round(n/255));return l===2&&(a+=60),a},u.hsv.ansi16=function(r){return u.rgb.ansi16(u.hsv.rgb(r),r[2])},u.rgb.ansi256=function(r){var n=r[0],t=r[1],i=r[2];if(n===t&&t===i)return n<8?16:n>248?231:Math.round((n-8)/247*24)+232;var l=16+36*Math.round(n/255*5)+6*Math.round(t/255*5)+Math.round(i/255*5);return l},u.ansi16.rgb=function(r){var n=r%10;if(n===0||n===7)return r>50&&(n+=3.5),n=n/10.5*255,[n,n,n];var t=(~~(r>50)+1)*.5,i=(n&1)*t*255,l=(n>>1&1)*t*255,a=(n>>2&1)*t*255;return[i,l,a]},u.ansi256.rgb=function(r){if(r>=232){var n=(r-232)*10+8;return[n,n,n]}r-=16;var t,i=Math.floor(r/36)/5*255,l=Math.floor((t=r%36)/6)/5*255,a=t%6/5*255;return[i,l,a]},u.rgb.hex=function(r){var n=((Math.round(r[0])&255)<<16)+((Math.round(r[1])&255)<<8)+(Math.round(r[2])&255),t=n.toString(16).toUpperCase();return"000000".substring(t.length)+t},u.hex.rgb=function(r){var n=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];var t=n[0];n[0].length===3&&(t=t.split("").map(function(o){return o+o}).join(""));var i=parseInt(t,16),l=i>>16&255,a=i>>8&255,e=i&255;return[l,a,e]},u.rgb.hcg=function(r){var n=r[0]/255,t=r[1]/255,i=r[2]/255,l=Math.max(Math.max(n,t),i),a=Math.min(Math.min(n,t),i),e=l-a,o,s;return e<1?o=a/(1-e):o=0,e<=0?s=0:l===n?s=(t-i)/e%6:l===t?s=2+(i-n)/e:s=4+(n-t)/e+4,s/=6,s%=1,[s*360,e*100,o*100]},u.hsl.hcg=function(r){var n=r[1]/100,t=r[2]/100,i=1,l=0;return t<.5?i=2*n*t:i=2*n*(1-t),i<1&&(l=(t-.5*i)/(1-i)),[r[0],i*100,l*100]},u.hsv.hcg=function(r){var n=r[1]/100,t=r[2]/100,i=n*t,l=0;return i<1&&(l=(t-i)/(1-i)),[r[0],i*100,l*100]},u.hcg.rgb=function(r){var n=r[0]/360,t=r[1]/100,i=r[2]/100;if(t===0)return[i*255,i*255,i*255];var l=[0,0,0],a=n%1*6,e=a%1,o=1-e,s=0;switch(Math.floor(a)){case 0:l[0]=1,l[1]=e,l[2]=0;break;case 1:l[0]=o,l[1]=1,l[2]=0;break;case 2:l[0]=0,l[1]=1,l[2]=e;break;case 3:l[0]=0,l[1]=o,l[2]=1;break;case 4:l[0]=e,l[1]=0,l[2]=1;break;default:l[0]=1,l[1]=0,l[2]=o}return s=(1-t)*i,[(t*l[0]+s)*255,(t*l[1]+s)*255,(t*l[2]+s)*255]},u.hcg.hsv=function(r){var n=r[1]/100,t=r[2]/100,i=n+t*(1-n),l=0;return i>0&&(l=n/i),[r[0],l*100,i*100]},u.hcg.hsl=function(r){var n=r[1]/100,t=r[2]/100,i=t*(1-n)+.5*n,l=0;return i>0&&i<.5?l=n/(2*i):i>=.5&&i<1&&(l=n/(2*(1-i))),[r[0],l*100,i*100]},u.hcg.hwb=function(r){var n=r[1]/100,t=r[2]/100,i=n+t*(1-n);return[r[0],(i-n)*100,(1-i)*100]},u.hwb.hcg=function(r){var n=r[1]/100,t=r[2]/100,i=1-t,l=i-n,a=0;return l<1&&(a=(i-l)/(1-l)),[r[0],l*100,a*100]},u.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},u.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},u.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},u.gray.hsl=u.gray.hsv=function(r){return[0,0,r[0]]},u.gray.hwb=function(r){return[0,100,r[0]]},u.gray.cmyk=function(r){return[0,0,0,r[0]]},u.gray.lab=function(r){return[r[0],0,0]},u.gray.hex=function(r){var n=Math.round(r[0]/100*255)&255,t=(n<<16)+(n<<8)+n,i=t.toString(16).toUpperCase();return"000000".substring(i.length)+i},u.rgb.gray=function(r){var n=(r[0]+r[1]+r[2])/3;return[n/255*100]}},112085:function(w,M,d){var g=d(348168),p=d(804111),m={},u=Object.keys(g);function b(h){var f=function(r){return r==null?r:(arguments.length>1&&(r=Array.prototype.slice.call(arguments)),h(r))};return"conversion"in h&&(f.conversion=h.conversion),f}function c(h){var f=function(r){if(r==null)return r;arguments.length>1&&(r=Array.prototype.slice.call(arguments));var n=h(r);if(typeof n=="object")for(var t=n.length,i=0;i<t;i++)n[i]=Math.round(n[i]);return n};return"conversion"in h&&(f.conversion=h.conversion),f}u.forEach(function(h){m[h]={},Object.defineProperty(m[h],"channels",{value:g[h].channels}),Object.defineProperty(m[h],"labels",{value:g[h].labels});var f=p(h),r=Object.keys(f);r.forEach(function(n){var t=f[n];m[h][n]=c(t),m[h][n].raw=b(t)})}),w.exports=m},139092:function(w){"use strict";w.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},804111:function(w,M,d){var g=d(348168);function p(){for(var c={},h=Object.keys(g),f=h.length,r=0;r<f;r++)c[h[r]]={distance:-1,parent:null};return c}function m(c){var h=p(),f=[c];for(h[c].distance=0;f.length;)for(var r=f.pop(),n=Object.keys(g[r]),t=n.length,i=0;i<t;i++){var l=n[i],a=h[l];a.distance===-1&&(a.distance=h[r].distance+1,a.parent=r,f.unshift(l))}return h}function u(c,h){return function(f){return h(c(f))}}function b(c,h){for(var f=[h[c].parent,c],r=g[h[c].parent][c],n=h[c].parent;h[n].parent;)f.unshift(h[n].parent),r=u(g[h[n].parent][n],r),n=h[n].parent;return r.conversion=f,r}w.exports=function(c){for(var h=m(c),f={},r=Object.keys(h),n=r.length,t=0;t<n;t++){var i=r[t],l=h[i];l.parent!==null&&(f[i]=b(i,h))}return f}},708874:function(w){"use strict";w.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},919818:function(w,M,d){var g=d(708874),p=d(286851),m=Object.hasOwnProperty,u=Object.create(null);for(var b in g)m.call(g,b)&&(u[g[b]]=b);var c=w.exports={to:{},get:{}};c.get=function(r){var n=r.substring(0,3).toLowerCase(),t,i;switch(n){case"hsl":t=c.get.hsl(r),i="hsl";break;case"hwb":t=c.get.hwb(r),i="hwb";break;default:t=c.get.rgb(r),i="rgb";break}return t?{model:i,value:t}:null},c.get.rgb=function(r){if(!r)return null;var n=/^#([a-f0-9]{3,4})$/i,t=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,i=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,l=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,a=/^(\w+)$/,e=[0,0,0,1],o,s,v;if(o=r.match(t)){for(v=o[2],o=o[1],s=0;s<3;s++){var y=s*2;e[s]=parseInt(o.slice(y,y+2),16)}v&&(e[3]=parseInt(v,16)/255)}else if(o=r.match(n)){for(o=o[1],v=o[3],s=0;s<3;s++)e[s]=parseInt(o[s]+o[s],16);v&&(e[3]=parseInt(v+v,16)/255)}else if(o=r.match(i)){for(s=0;s<3;s++)e[s]=parseInt(o[s+1],0);o[4]&&(o[5]?e[3]=parseFloat(o[4])*.01:e[3]=parseFloat(o[4]))}else if(o=r.match(l)){for(s=0;s<3;s++)e[s]=Math.round(parseFloat(o[s+1])*2.55);o[4]&&(o[5]?e[3]=parseFloat(o[4])*.01:e[3]=parseFloat(o[4]))}else return(o=r.match(a))?o[1]==="transparent"?[0,0,0,0]:m.call(g,o[1])?(e=g[o[1]],e[3]=1,e):null:null;for(s=0;s<3;s++)e[s]=h(e[s],0,255);return e[3]=h(e[3],0,1),e},c.get.hsl=function(r){if(!r)return null;var n=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,t=r.match(n);if(t){var i=parseFloat(t[4]),l=(parseFloat(t[1])%360+360)%360,a=h(parseFloat(t[2]),0,100),e=h(parseFloat(t[3]),0,100),o=h(isNaN(i)?1:i,0,1);return[l,a,e,o]}return null},c.get.hwb=function(r){if(!r)return null;var n=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,t=r.match(n);if(t){var i=parseFloat(t[4]),l=(parseFloat(t[1])%360+360)%360,a=h(parseFloat(t[2]),0,100),e=h(parseFloat(t[3]),0,100),o=h(isNaN(i)?1:i,0,1);return[l,a,e,o]}return null},c.to.hex=function(){var r=p(arguments);return"#"+f(r[0])+f(r[1])+f(r[2])+(r[3]<1?f(Math.round(r[3]*255)):"")},c.to.rgb=function(){var r=p(arguments);return r.length<4||r[3]===1?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},c.to.rgb.percent=function(){var r=p(arguments),n=Math.round(r[0]/255*100),t=Math.round(r[1]/255*100),i=Math.round(r[2]/255*100);return r.length<4||r[3]===1?"rgb("+n+"%, "+t+"%, "+i+"%)":"rgba("+n+"%, "+t+"%, "+i+"%, "+r[3]+")"},c.to.hsl=function(){var r=p(arguments);return r.length<4||r[3]===1?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},c.to.hwb=function(){var r=p(arguments),n="";return r.length>=4&&r[3]!==1&&(n=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+n+")"},c.to.keyword=function(r){return u[r.slice(0,3)]};function h(r,n,t){return Math.min(Math.max(n,r),t)}function f(r){var n=Math.round(r).toString(16).toUpperCase();return n.length<2?"0"+n:n}},6767:function(w,M,d){"use strict";var g=d(919818),p=d(112085),m=[].slice,u=["keyword","gray","hex"],b={};Object.keys(p).forEach(function(a){b[m.call(p[a].labels).sort().join("")]=a});var c={};function h(a,e){if(!(this instanceof h))return new h(a,e);if(e&&e in u&&(e=null),e&&!(e in p))throw new Error("Unknown model: "+e);var o,s;if(a==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(a instanceof h)this.model=a.model,this.color=a.color.slice(),this.valpha=a.valpha;else if(typeof a=="string"){var v=g.get(a);if(v===null)throw new Error("Unable to parse color from string: "+a);this.model=v.model,s=p[this.model].channels,this.color=v.value.slice(0,s),this.valpha=typeof v.value[s]=="number"?v.value[s]:1}else if(a.length){this.model=e||"rgb",s=p[this.model].channels;var y=m.call(a,0,s);this.color=l(y,s),this.valpha=typeof a[s]=="number"?a[s]:1}else if(typeof a=="number")a&=16777215,this.model="rgb",this.color=[a>>16&255,a>>8&255,a&255],this.valpha=1;else{this.valpha=1;var k=Object.keys(a);"alpha"in a&&(k.splice(k.indexOf("alpha"),1),this.valpha=typeof a.alpha=="number"?a.alpha:0);var x=k.sort().join("");if(!(x in b))throw new Error("Unable to parse color from object: "+JSON.stringify(a));this.model=b[x];var F=p[this.model].labels,O=[];for(o=0;o<F.length;o++)O.push(a[F[o]]);this.color=l(O)}if(c[this.model])for(s=p[this.model].channels,o=0;o<s;o++){var A=c[this.model][o];A&&(this.color[o]=A(this.color[o]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}h.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(a){var e=this.model in g.to?this:this.rgb();e=e.round(typeof a=="number"?a:1);var o=e.valpha===1?e.color:e.color.concat(this.valpha);return g.to[e.model](o)},percentString:function(a){var e=this.rgb().round(typeof a=="number"?a:1),o=e.valpha===1?e.color:e.color.concat(this.valpha);return g.to.rgb.percent(o)},array:function(){return this.valpha===1?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var a={},e=p[this.model].channels,o=p[this.model].labels,s=0;s<e;s++)a[o[s]]=this.color[s];return this.valpha!==1&&(a.alpha=this.valpha),a},unitArray:function(){var a=this.rgb().color;return a[0]/=255,a[1]/=255,a[2]/=255,this.valpha!==1&&a.push(this.valpha),a},unitObject:function(){var a=this.rgb().object();return a.r/=255,a.g/=255,a.b/=255,this.valpha!==1&&(a.alpha=this.valpha),a},round:function(a){return a=Math.max(a||0,0),new h(this.color.map(r(a)).concat(this.valpha),this.model)},alpha:function(a){return arguments.length?new h(this.color.concat(Math.max(0,Math.min(1,a))),this.model):this.valpha},red:n("rgb",0,t(255)),green:n("rgb",1,t(255)),blue:n("rgb",2,t(255)),hue:n(["hsl","hsv","hsl","hwb","hcg"],0,function(a){return(a%360+360)%360}),saturationl:n("hsl",1,t(100)),lightness:n("hsl",2,t(100)),saturationv:n("hsv",1,t(100)),value:n("hsv",2,t(100)),chroma:n("hcg",1,t(100)),gray:n("hcg",2,t(100)),white:n("hwb",1,t(100)),wblack:n("hwb",2,t(100)),cyan:n("cmyk",0,t(100)),magenta:n("cmyk",1,t(100)),yellow:n("cmyk",2,t(100)),black:n("cmyk",3,t(100)),x:n("xyz",0,t(100)),y:n("xyz",1,t(100)),z:n("xyz",2,t(100)),l:n("lab",0,t(100)),a:n("lab",1),b:n("lab",2),keyword:function(a){return arguments.length?new h(a):p[this.model].keyword(this.color)},hex:function(a){return arguments.length?new h(a):g.to.hex(this.rgb().round().color)},rgbNumber:function(){var a=this.rgb().color;return(a[0]&255)<<16|(a[1]&255)<<8|a[2]&255},luminosity:function(){for(var a=this.rgb().color,e=[],o=0;o<a.length;o++){var s=a[o]/255;e[o]=s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)}return .2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(a){var e=this.luminosity(),o=a.luminosity();return e>o?(e+.05)/(o+.05):(o+.05)/(e+.05)},level:function(a){var e=this.contrast(a);return e>=7.1?"AAA":e>=4.5?"AA":""},isDark:function(){var a=this.rgb().color,e=(a[0]*299+a[1]*587+a[2]*114)/1e3;return e<128},isLight:function(){return!this.isDark()},negate:function(){for(var a=this.rgb(),e=0;e<3;e++)a.color[e]=255-a.color[e];return a},lighten:function(a){var e=this.hsl();return e.color[2]+=e.color[2]*a,e},darken:function(a){var e=this.hsl();return e.color[2]-=e.color[2]*a,e},saturate:function(a){var e=this.hsl();return e.color[1]+=e.color[1]*a,e},desaturate:function(a){var e=this.hsl();return e.color[1]-=e.color[1]*a,e},whiten:function(a){var e=this.hwb();return e.color[1]+=e.color[1]*a,e},blacken:function(a){var e=this.hwb();return e.color[2]+=e.color[2]*a,e},grayscale:function(){var a=this.rgb().color,e=a[0]*.3+a[1]*.59+a[2]*.11;return h.rgb(e,e,e)},fade:function(a){return this.alpha(this.valpha-this.valpha*a)},opaquer:function(a){return this.alpha(this.valpha+this.valpha*a)},rotate:function(a){var e=this.hsl(),o=e.color[0];return o=(o+a)%360,o=o<0?360+o:o,e.color[0]=o,e},mix:function(a,e){if(!a||!a.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof a);var o=a.rgb(),s=this.rgb(),v=e===void 0?.5:e,y=2*v-1,k=o.alpha()-s.alpha(),x=((y*k===-1?y:(y+k)/(1+y*k))+1)/2,F=1-x;return h.rgb(x*o.red()+F*s.red(),x*o.green()+F*s.green(),x*o.blue()+F*s.blue(),o.alpha()*v+s.alpha()*(1-v))}},Object.keys(p).forEach(function(a){if(u.indexOf(a)===-1){var e=p[a].channels;h.prototype[a]=function(){if(this.model===a)return new h(this);if(arguments.length)return new h(arguments,a);var o=typeof arguments[e]=="number"?e:this.valpha;return new h(i(p[this.model][a].raw(this.color)).concat(o),a)},h[a]=function(o){return typeof o=="number"&&(o=l(m.call(arguments),e)),new h(o,a)}}});function f(a,e){return Number(a.toFixed(e))}function r(a){return function(e){return f(e,a)}}function n(a,e,o){return a=Array.isArray(a)?a:[a],a.forEach(function(s){(c[s]||(c[s]=[]))[e]=o}),a=a[0],function(s){var v;return arguments.length?(o&&(s=o(s)),v=this[a](),v.color[e]=s,v):(v=this[a]().color[e],o&&(v=o(v)),v)}}function t(a){return function(e){return Math.max(0,Math.min(a,e))}}function i(a){return Array.isArray(a)?a:[a]}function l(a,e){for(var o=0;o<e;o++)typeof a[o]!="number"&&(a[o]=0);return a}w.exports=h},701469:function(w){var M=Array.isArray;w.exports=M},286851:function(w,M,d){"use strict";var g=d(989594),p=Array.prototype.concat,m=Array.prototype.slice,u=w.exports=function(c){for(var h=[],f=0,r=c.length;f<r;f++){var n=c[f];g(n)?h=p.call(h,m.call(n)):h.push(n)}return h};u.wrap=function(b){return function(){return b(u(arguments))}}},989594:function(w){w.exports=function(d){return!d||typeof d=="string"?!1:d instanceof Array||Array.isArray(d)||d.length>=0&&(d.splice instanceof Function||Object.getOwnPropertyDescriptor(d,d.length-1)&&d.constructor.name!=="String")}}}]);
