!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).ackeeTracker=e()}}((function(){return function e(t,r,n){function i(a,l){if(!r[a]){if(!t[a]){var s="function"==typeof require&&require;if(!l&&s)return s(a,!0);if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=r[a]={exports:{}};t[a][0].call(c.exports,(function(e){return i(t[a][1][e]||e)}),c,c.exports,e,t,r,n)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(e,t,r){(function(e){(function(){(function(){"use strict";var n={function:!0,object:!0},i=n[typeof window]&&window||this,o=n[typeof r]&&r,a=n[typeof t]&&t&&!t.nodeType&&t,l=o&&a&&"object"==typeof e&&e;!l||l.global!==l&&l.window!==l&&l.self!==l||(i=l);var s=Math.pow(2,53)-1,u=/\bOpera/,c=Object.prototype,b=c.hasOwnProperty,d=c.toString;function p(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function f(e){return e=x(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:p(e)}function h(e,t){for(var r in e)b.call(e,r)&&t(e[r],r,e)}function g(e){return null==e?p(e):d.call(e).slice(8,-1)}function S(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function m(e,t){var r=null;return function(e,t){var r=-1,n=e?e.length:0;if("number"==typeof n&&n>-1&&n<=s)for(;++r<n;)t(e[r],r,e);else h(e,t)}(e,(function(n,i){r=t(r,n,i,e)})),r}function x(e){return String(e).replace(/^ +| +$/g,"")}var y=function e(t){var r=i,n=t&&"object"==typeof t&&"String"!=g(t);n&&(r=t,t=null);var o=r.navigator||{},a=o.userAgent||"";t||(t=a);var l,s,c,b,p,y=n?!!o.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(d.toString()),w="Object",O=n?w:"ScriptBridgingProxyObject",v=n?w:"Environment",E=n&&r.java?"JavaPackage":g(r.java),M=n?w:"RuntimeObject",P=/\bJava/.test(E)&&r.java,C=P&&g(r.environment)==v,k=P?"a":"Î±",R=P?"b":"Î²",B=r.document||{},I=r.operamini||r.opera,W=u.test(W=n&&I?I["[[Class]]"]:g(I))?W:I=null,A=t,T=[],F=null,$=t==a,j=$&&I&&"function"==typeof I.version&&I.version(),G=m([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],(function(e,r){return e||RegExp("\\b"+(r.pattern||S(r))+"\\b","i").exec(t)&&(r.label||r)})),N=function(e){return m(e,(function(e,r){return e||RegExp("\\b"+(r.pattern||S(r))+"\\b","i").exec(t)&&(r.label||r)}))}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),X=D([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),K=function(e){return m(e,(function(e,r,n){return e||(r[X]||r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(X)]||RegExp("\\b"+S(n)+"(?:\\b|\\w*\\d)","i").exec(t))&&n}))}({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),L=function(e){return m(e,(function(e,r){var n=r.pattern||S(r);return!e&&(e=RegExp("\\b"+n+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(e=function(e,t,r){var n={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&r&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(n=n[/[\d.]+$/.exec(e)])&&(e="Windows "+n),e=String(e),t&&r&&(e=e.replace(RegExp(t,"i"),r)),f(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,n,r.label||r)),e}))}(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function D(e){return m(e,(function(e,r){var n=r.pattern||S(r);return!e&&(e=RegExp("\\b"+n+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+n+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+n+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((e=String(r.label&&!RegExp(n,"i").test(r.label)?r.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),r=r.label||r,e=f(e[0].replace(RegExp(n,"i"),r).replace(RegExp("; *(?:"+r+"[_-])?","i")," ").replace(RegExp("("+r+")[-_.]?(\\w)","i"),"$1 $2"))),e}))}function V(e){return m(e,(function(e,r){return e||(RegExp(r+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null}))}if(G&&(G=[G]),/\bAndroid\b/.test(L)&&!X&&(l=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t))&&(X=x(l[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),K&&!X?X=D([K]):K&&X&&(X=X.replace(RegExp("^("+S(K)+")[-_.\\s]","i"),K+" ").replace(RegExp("^("+S(K)+")[-_.]?(\\w)","i"),K+" $2")),(l=/\bGoogle TV\b/.exec(X))&&(X=l[0]),/\bSimulator\b/i.test(t)&&(X=(X?X+" ":"")+"Simulator"),"Opera Mini"==N&&/\bOPiOS\b/.test(t)&&T.push("running in Turbo/Uncompressed mode"),"IE"==N&&/\blike iPhone OS\b/.test(t)?(K=(l=e(t.replace(/like iPhone OS/,""))).manufacturer,X=l.product):/^iP/.test(X)?(N||(N="Safari"),L="iOS"+((l=/ OS ([\d_]+)/i.exec(t))?" "+l[1].replace(/_/g,"."):"")):"Konqueror"==N&&/^Linux\b/i.test(L)?L="Kubuntu":K&&"Google"!=K&&(/Chrome/.test(N)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test(X))||/\bAndroid\b/.test(L)&&/^Chrome/.test(N)&&/\bVersion\//i.test(t)?(N="Android Browser",L=/\bAndroid\b/.test(L)?L:"Android"):"Silk"==N?(/\bMobi/i.test(t)||(L="Android",T.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&T.unshift("accelerated")):"UC Browser"==N&&/\bUCWEB\b/.test(t)?T.push("speed mode"):"PaleMoon"==N&&(l=/\bFirefox\/([\d.]+)\b/.exec(t))?T.push("identifying as Firefox "+l[1]):"Firefox"==N&&(l=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(L||(L="Firefox OS"),X||(X=l[1])):!N||(l=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(N))?(N&&!X&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(l+"/")+8))&&(N=null),(l=X||K||L)&&(X||K||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(L))&&(N=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(L)?L:l)+" Browser")):"Electron"==N&&(l=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&T.push("Chromium "+l),j||(j=V(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",S(N),"(?:Firefox|Minefield|NetFront)"])),(l=("iCab"==G&&parseFloat(j)>3?"WebKit":/\bOpera\b/.test(N)&&(/\bOPR\b/.test(t)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(G)&&"WebKit"||!G&&/\bMSIE\b/i.test(t)&&("Mac OS"==L?"Tasman":"Trident")||"WebKit"==G&&/\bPlayStation\b(?! Vita\b)/i.test(N)&&"NetFront")&&(G=[l]),"IE"==N&&(l=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(N+=" Mobile",L="Windows Phone "+(/\+$/.test(l)?l:l+".x"),T.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(N="IE Mobile",L="Windows Phone 8.x",T.unshift("desktop mode"),j||(j=(/\brv:([\d.]+)/.exec(t)||0)[1])):"IE"!=N&&"Trident"==G&&(l=/\brv:([\d.]+)/.exec(t))&&(N&&T.push("identifying as "+N+(j?" "+j:"")),N="IE",j=l[1]),$){if(b="global",p=null!=(c=r)?typeof c[b]:"number",/^(?:boolean|number|string|undefined)$/.test(p)||"object"==p&&!c[b])g(l=r.runtime)==O?(N="Adobe AIR",L=l.flash.system.Capabilities.os):g(l=r.phantom)==M?(N="PhantomJS",j=(l=l.version||null)&&l.major+"."+l.minor+"."+l.patch):"number"==typeof B.documentMode&&(l=/\bTrident\/(\d+)/i.exec(t))?(j=[j,B.documentMode],(l=+l[1]+4)!=j[1]&&(T.push("IE "+j[1]+" mode"),G&&(G[1]=""),j[1]=l),j="IE"==N?String(j[1].toFixed(1)):j[0]):"number"==typeof B.documentMode&&/^(?:Chrome|Firefox)\b/.test(N)&&(T.push("masking as "+N+" "+j),N="IE",j="11.0",G=["Trident"],L="Windows");else if(P&&(A=(l=P.lang.System).getProperty("os.arch"),L=L||l.getProperty("os.name")+" "+l.getProperty("os.version")),C){try{j=r.require("ringo/engine").version.join("."),N="RingoJS"}catch(e){(l=r.system)&&l.global.system==r.system&&(N="Narwhal",L||(L=l[0].os||null))}N||(N="Rhino")}else"object"==typeof r.process&&!r.process.browser&&(l=r.process)&&("object"==typeof l.versions&&("string"==typeof l.versions.electron?(T.push("Node "+l.versions.node),N="Electron",j=l.versions.electron):"string"==typeof l.versions.nw&&(T.push("Chromium "+j,"Node "+l.versions.node),N="NW.js",j=l.versions.nw)),N||(N="Node.js",A=l.arch,L=l.platform,j=(j=/[\d.]+/.exec(l.version))?j[0]:null));L=L&&f(L)}if(j&&(l=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(j)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+($&&o.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&(F=/b/i.test(l)?"beta":"alpha",j=j.replace(RegExp(l+"\\+?$"),"")+("beta"==F?R:k)+(/\d+\+?/.exec(l)||"")),"Fennec"==N||"Firefox"==N&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(L))N="Firefox Mobile";else if("Maxthon"==N&&j)j=j.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(X))"Xbox 360"==X&&(L=null),"Xbox 360"==X&&/\bIEMobile\b/.test(t)&&T.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(N)&&(!N||X||/Browser|Mobi/.test(N))||"Windows CE"!=L&&!/Mobi/i.test(t))if("IE"==N&&$)try{null===r.external&&T.unshift("platform preview")}catch(e){T.unshift("embedded")}else(/\bBlackBerry\b/.test(X)||/\bBB10\b/.test(t))&&(l=(RegExp(X.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||j)?(L=((l=[l,/BB10/.test(t)])[1]?(X=null,K="BlackBerry"):"Device Software")+" "+l[0],j=null):this!=h&&"Wii"!=X&&($&&I||/Opera/.test(N)&&/\b(?:MSIE|Firefox)\b/i.test(t)||"Firefox"==N&&/\bOS X (?:\d+\.){2,}/.test(L)||"IE"==N&&(L&&!/^Win/.test(L)&&j>5.5||/\bWindows XP\b/.test(L)&&j>8||8==j&&!/\bTrident\b/.test(t)))&&!u.test(l=e.call(h,t.replace(u,"")+";"))&&l.name&&(l="ing as "+l.name+((l=l.version)?" "+l:""),u.test(N)?(/\bIE\b/.test(l)&&"Mac OS"==L&&(L=null),l="identify"+l):(l="mask"+l,N=W?f(W.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(l)&&(L=null),$||(j=null)),G=["Presto"],T.push(l));else N+=" Mobile";(l=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(l=[parseFloat(l.replace(/\.(\d)$/,".0$1")),l],"Safari"==N&&"+"==l[1].slice(-1)?(N="WebKit Nightly",F="alpha",j=l[1].slice(0,-1)):j!=l[1]&&j!=(l[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1])||(j=null),l[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t)||0)[1],537.36==l[0]&&537.36==l[2]&&parseFloat(l[1])>=28&&"WebKit"==G&&(G=["Blink"]),$&&(y||l[1])?(G&&(G[1]="like Chrome"),l=l[1]||((l=l[0])<530?1:l<532?2:l<532.05?3:l<533?4:l<534.03?5:l<534.07?6:l<534.1?7:l<534.13?8:l<534.16?9:l<534.24?10:l<534.3?11:l<535.01?12:l<535.02?"13+":l<535.07?15:l<535.11?16:l<535.19?17:l<536.05?18:l<536.1?19:l<537.01?20:l<537.11?"21+":l<537.13?23:l<537.18?24:l<537.24?25:l<537.36?26:"Blink"!=G?"27":"28")):(G&&(G[1]="like Safari"),l=(l=l[0])<400?1:l<500?2:l<526?3:l<533?4:l<534?"4+":l<535?5:l<537?6:l<538?7:l<601?8:l<602?9:l<604?10:l<606?11:l<608?12:"12"),G&&(G[1]+=" "+(l+="number"==typeof l?".x":/[.+]/.test(l)?"":"+")),"Safari"==N&&(!j||parseInt(j)>45)?j=l:"Chrome"==N&&/\bHeadlessChrome/i.test(t)&&T.unshift("headless")),"Opera"==N&&(l=/\bzbov|zvav$/.exec(L))?(N+=" ",T.unshift("desktop mode"),"zvav"==l?(N+="Mini",j=null):N+="Mobile",L=L.replace(RegExp(" *"+l+"$"),"")):"Safari"==N&&/\bChrome\b/.exec(G&&G[1])?(T.unshift("desktop mode"),N="Chrome Mobile",j=null,/\bOS X\b/.test(L)?(K="Apple",L="iOS 4.3+"):L=null):/\bSRWare Iron\b/.test(N)&&!j&&(j=V("Chrome")),j&&0==j.indexOf(l=/[\d.]+$/.exec(L))&&t.indexOf("/"+l+"-")>-1&&(L=x(L.replace(l,""))),L&&-1!=L.indexOf(N)&&!RegExp(N+" OS").test(L)&&(L=L.replace(RegExp(" *"+S(N)+" *"),"")),G&&!/\b(?:Avant|Nook)\b/.test(N)&&(/Browser|Lunascape|Maxthon/.test(N)||"Safari"!=N&&/^iOS/.test(L)&&/\bSafari\b/.test(G[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(N)&&G[1])&&(l=G[G.length-1])&&T.push(l),T.length&&(T=["("+T.join("; ")+")"]),K&&X&&X.indexOf(K)<0&&T.push("on "+K),X&&T.push((/^on /.test(T[T.length-1])?"":"on ")+X),L&&(l=/ ([\d.+]+)$/.exec(L),s=l&&"/"==L.charAt(L.length-l[0].length-1),L={architecture:32,family:l&&!s?L.replace(l[0],""):L,version:l?l[1]:null,toString:function(){var e=this.version;return this.family+(e&&!s?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(l=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(A))&&!/\bi686\b/i.test(A)?(L&&(L.architecture=64,L.family=L.family.replace(RegExp(" *"+l),"")),N&&(/\bWOW64\b/i.test(t)||$&&/\w(?:86|32)$/.test(o.cpuClass||o.platform)&&!/\bWin64; x64\b/i.test(t))&&T.unshift("32-bit")):L&&/^OS X/.test(L.family)&&"Chrome"==N&&parseFloat(j)>=39&&(L.architecture=64),t||(t=null);var _={};return _.description=t,_.layout=G&&G[0],_.manufacturer=K,_.name=N,_.prerelease=F,_.product=X,_.ua=t,_.version=N&&j,_.os=L||{architecture:null,family:null,version:null,toString:function(){return"null"}},_.parse=e,_.toString=function(){return this.description||""},_.version&&T.unshift(j),_.name&&T.unshift(N),L&&N&&(L!=String(L).split(" ")[0]||L!=N.split(" ")[0]&&!X)&&T.push(X?"("+L+")":"on "+L),T.length&&(_.description=T.join(" ")),_}();o&&a?h(y,(function(e,t){o[t]=e})):i.platform=y}).call(this)}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.create=r.detect=r.attributes=void 0;var n,i=(n=e("platform"))&&n.__esModule?n:{default:n};function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s="undefined"!=typeof window,u=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={siteLocation:window.location.href,siteReferrer:document.referrer},r={siteLanguage:(navigator.language||navigator.userLanguage).substr(0,2),screenWidth:screen.width,screenHeight:screen.height,screenColorDepth:screen.colorDepth,deviceName:i.default.product,deviceManufacturer:i.default.manufacturer,osName:i.default.os.family,osVersion:i.default.os.version,browserName:i.default.name,browserVersion:i.default.version,browserWidth:window.outerWidth,browserHeight:window.outerHeight};return a(a({},t),!0===e?r:{})};r.attributes=u;var c=function(e,t,r,n,i){var o=new XMLHttpRequest;o.open("POST",e),o.onload=function(){if(200===o.status||201===o.status){var e=null;try{e=JSON.parse(o.responseText)}catch(e){return i(new Error("Failed to parse response from server"))}return null!=e.errors?i(new Error(e.errors[0].message)):i(null,e)}return i(new Error("Server returned with an unhandled status"))},o.setRequestHeader("Content-Type","application/json;charset=UTF-8"),n.ignoreOwnVisits&&(o.withCredentials=!0),o.send(JSON.stringify({query:t,variables:r}))},b=function(e,t,r,n,i){if(!0===n.ignoreLocalhost&&!0==(""===(o=location.hostname)||"localhost"===o||"127.0.0.1"===o||"::1"===o))return console.warn("Ackee ignores you because you are on localhost");var o,a;if(!0===(a=navigator.userAgent,/bot|crawler|spider|crawling/i.test(a)))return console.warn("Ackee ignores you because you are a bot");var l=function(e){var t="/"===e.substr(-1);return e+(!0===t?"":"/")+"api"}(e);c(l,"\n\t\tmutation createRecord($domainId: ID!, $input: CreateRecordInput!) {\n\t\t\tcreateRecord(domainId: $domainId, input: $input) {\n\t\t\t\tpayload {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t",{domainId:t,input:r},n,(function(e,t){if(null!=e)return console.error(e);var r=t.data.createRecord.payload.id;if(!0===function(e){return"88888888-8888-8888-8888-888888888888"===e}(r))return console.warn("Ackee ignores you because this is your own site");var o=setInterval((function(){if(!1!==i()){c(l,"\n\t\t\t\tmutation updateRecord($id: ID!) {\n\t\t\t\t\tupdateRecord(id: $id) {\n\t\t\t\t\t\tsuccess\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t",{id:r},n,(function(e){if(null!=e)return console.error(e)}))}else clearInterval(o)}),15e3)}))},d=function(){var e=document.querySelector("[data-ackee-domain-id]");if(null!=e){var t=e.getAttribute("data-ackee-server")||"",r=e.getAttribute("data-ackee-domain-id"),n=e.getAttribute("data-ackee-opts")||"{}";p({server:t,domainId:r},JSON.parse(n)).record()}};r.detect=d;var p=function(e,t){var r,n=e.server,i=e.domainId;t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return t.detailed=!0===e.detailed,t.ignoreLocalhost=!1!==e.ignoreLocalhost,t.ignoreOwnVisits=!0===e.ignoreOwnVisits,t}(t);return{record:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u(t.detailed),o=!1,a=r=Date.now(),l=function(){return!1===o&&a===r},s=function(){o=!0};return b(n,i,e,t,l),{stop:s}}}};r.create=p,!0===s&&d()},{platform:1}]},{},[2])(2)}));