(this["webpackJsonpstudy-time-planner"]=this["webpackJsonpstudy-time-planner"]||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/alarm.2f154994.mp3"},24:function(e,t,n){e.exports=n(40)},29:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),l=n(20),r=n.n(l),o=(n(29),n(12)),i=n(1),c=n(7),u=n(8),m=n(10),d=n(9),E=(n(30),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return s.a.createElement("header",null,s.a.createElement(o.b,{to:"/"},s.a.createElement("p",{className:"name"},"Study Planner")),s.a.createElement("nav",null,s.a.createElement("ul",{className:"nav-links",href:"#"},s.a.createElement(o.b,{to:"/log"},s.a.createElement("li",null,"Log")),s.a.createElement(o.b,{to:"/about"},s.a.createElement("li",null,"About")))))}}]),n}(a.Component)),h=n(22),v=n.n(h),f=n(5),S=n.n(f),b=(n(37),n(23)),p=new Audio(n.n(b).a),O=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),a=t.call(this,e),document.title="Study Planner",a.state={minutes:25,seconds:0,intervalID:null,mode:"study"},a}return Object(u.a)(n,[{key:"startTimer",value:function(){var e=this,t=60*this.state.minutes+this.state.seconds,n=0;this.state.intervalID=setInterval((function(){0===e.state.minutes&&0===e.state.seconds||(60===e.state.seconds&&e.setState({minutes:e.state.minutes-1}),0===e.state.seconds&&e.setState({minutes:e.state.minutes-1,seconds:60}),e.setState({seconds:e.state.seconds-1})),(n+=1)===t&&(clearInterval(e.state.intervalID),e.setCookie(),p.play())}),1e3)}},{key:"setCookie",value:function(){var e=v()(),t=0;"study"===this.state.mode?t=25:"short_break"===this.state.mode?t=5:"long_break"===this.state.mode&&(t=10);var n={Mode:this.state.mode,Start:e.format("dddd, MMMM Do YYYY - HH:mm:ss"),End:e.add(t,"minutes").format("dddd, MMMM Do YYYY - HH:mm:ss")};S.a.get("counter")?(S.a.set("counter",parseInt(S.a.get("counter"))+1,{expires:10}),S.a.set("log".concat(S.a.get("counter")),n,{expires:10})):(S.a.set("counter",1,{expires:10}),S.a.set("log".concat(S.a.get("counter")),n,{expires:10}))}},{key:"pauseTimer",value:function(){this.setState({minutes:this.state.minutes}),clearInterval(this.state.intervalID)}},{key:"resetTimer",value:function(){"study"===this.state.mode?this.setState({minutes:25,seconds:0}):"short_break"===this.state.mode?this.setState({minutes:5,seconds:0}):this.setState({minutes:10,seconds:0}),clearInterval(this.state.intervalID)}},{key:"studyTime",value:function(){this.setState({minutes:25,seconds:0,mode:"study"}),clearInterval(this.state.intervalID)}},{key:"shortBreak",value:function(){this.setState({minutes:5,seconds:0,mode:"short_break"}),clearInterval(this.state.intervalID)}},{key:"longBreak",value:function(){this.setState({minutes:10,seconds:0,mode:"long_break"}),clearInterval(this.state.intervalID)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"timer-container"},s.a.createElement("div",null,s.a.createElement("ul",{className:"timer-mode"},s.a.createElement("li",null,s.a.createElement("button",{onClick:function(){return e.studyTime()}},"Study")),s.a.createElement("li",null,s.a.createElement("button",{onClick:function(){return e.shortBreak()}},"Short Break")),s.a.createElement("li",null,s.a.createElement("button",{onClick:function(){return e.longBreak()}},"Long Break")))),s.a.createElement("div",null,s.a.createElement("p",{className:"timer"},this.state.minutes.toLocaleString("en-GB",{minimumIntegerDigits:2}),":",(this.state.seconds%60).toLocaleString("en-GB",{minimumIntegerDigits:2}))),s.a.createElement("div",{className:"timer-controls"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("button",{onClick:function(){e.startTimer()}},"Start")),s.a.createElement("li",null,s.a.createElement("button",{onClick:function(){e.pauseTimer()}},"Stop")),s.a.createElement("li",null,s.a.createElement("button",{onClick:function(){e.resetTimer()}},"Reset")))))}}]),n}(a.Component),k=n(14),g=(n(38),function(){return s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Session Type"),s.a.createElement("th",null,"Start Time"),s.a.createElement("th",null,"End Time"),s.a.createElement("th",null)))}),y=function(e){return s.a.createElement("tr",null,s.a.createElement("td",null,e.sessionType),s.a.createElement("td",null,e.sessionStart),s.a.createElement("td",null,e.sessionEnd),s.a.createElement("td",null,s.a.createElement("button",{className:"delete-log-button",onClick:function(){e.deleteLog(e.id)}},"X")))},I=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(c.a)(this,n),a=t.call(this,e),document.title="Logs",a.state={COOKIES_KEYS:[],LOGS:[],LOGS_RENDERED:[]};var s=S.a.getJSON();return delete s.counter,a.state.COOKIES_KEYS=Object.keys(s),a.state.COOKIES_KEYS.forEach((function(e){a.state.LOGS_RENDERED.includes(e)||(a.state.LOGS.push(s[e]),a.state.LOGS_RENDERED.push(e))})),a.deleteLog=a.deleteLog.bind(Object(k.a)(a)),a}return Object(u.a)(n,[{key:"deleteLog",value:function(e){var t=this.state.COOKIES_KEYS.indexOf(e);this.setState({COOKIES_KEYS:this.state.COOKIES_KEYS.filter((function(e,n){return n!==t})),LOGS:this.state.LOGS.filter((function(e,n){return n!==t})),LOGS_RENDERED:this.state.LOGS_RENDERED.filter((function(e,n){return n!==t}))}),S.a.remove(e)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"log-container"},s.a.createElement("table",{className:"log-table"},s.a.createElement(g,null),s.a.createElement("tbody",null,this.state.LOGS.map((function(t,n){return s.a.createElement(y,{id:e.state.COOKIES_KEYS[n],sessionType:t.Mode,sessionStart:t.Start,sessionEnd:t.End,deleteLog:e.deleteLog})})))))}}]),n}(a.Component),D=(n(39),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),a=t.call(this,e),document.title="About",a}return Object(u.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"about-container"},s.a.createElement("h2",null,"About"),s.a.createElement("p",null,"Study Planer uses a time management method developed by Francesco Cirillo. This technique is called the Pomodoro Technique. The Pomodoro Technique has been used by countless apps and websites."))}}]),n}(a.Component));var C=function(){return s.a.createElement(o.a,null,s.a.createElement("div",null,s.a.createElement(E,null),s.a.createElement(i.c,null,s.a.createElement(i.a,{path:"/",exact:!0,component:O}),s.a.createElement(i.a,{path:"/log",component:I}),s.a.createElement(i.a,{path:"/about",component:D}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.0c674acf.chunk.js.map