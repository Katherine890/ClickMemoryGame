(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e){e.exports=[{id:1,image:"https://vignette.wikia.nocookie.net/fairlyoddparents/images/5/50/Stock_Image_of_Timmy_Turner.png/revision/latest?cb=20180813140232&path-prefix=en",clicked:!1},{id:2,image:"https://vignette.wikia.nocookie.net/fairlyoddparents/images/e/ed/Cosmo_image.png/revision/latest?cb=20190123010657&path-prefix=en",clicked:!1},{id:3,image:"https://vignette.wikia.nocookie.net/fairlyoddparents/images/d/d5/WandaFOP.png/revision/latest?cb=20190123010606&path-prefix=en",clicked:!1},{id:4,image:"https://vignette.wikia.nocookie.net/fairlyoddparents/images/6/64/Fop_vector_4_chester_mcbadbat_by_rainyhooves-d6ewtc4.png/revision/latest?cb=20170210071341&path-prefix=en",clicked:!1},{id:5,image:"https://vignette.wikia.nocookie.net/fairlyoddparents/images/9/9f/Stock_Image_of_A.J..png/revision/latest?cb=20170627083429&path-prefix=en",clicked:!1},{id:6,image:"https://vignette.wikia.nocookie.net/fairlyoddparents/images/9/92/Trixie.png/revision/latest?cb=20180217015854&path-prefix=en",clicked:!1},{id:7,image:"https://vignette.wikia.nocookie.net/fairlyoddparents/images/4/48/Stock_Image_of_Tootie.png/revision/latest?cb=20190109061431&path-prefix=en",clicked:!1},{id:8,image:"https://vignette.wikia.nocookie.net/fairlyoddparents/images/c/c6/Elmer_Stock_2018.png/revision/latest?cb=20181231022012&path-prefix=en",clicked:!1},{id:9,image:"https://vignette.wikia.nocookie.net/fairlyoddparents/images/5/5f/Denzel_Crocker.png/revision/latest?cb=20140121055405&path-prefix=en",clicked:!1},{id:10,image:"https://vignette.wikia.nocookie.net/fairlyoddparents/images/e/e4/C7D222F5-5A23-43A2-A5E3-BDAF3A61CF45.png/revision/latest?cb=20181226053542&path-prefix=en",clicked:!1},{id:11,image:"https://vignette.wikia.nocookie.net/fairlyoddparents/images/8/87/Vicky7.png/revision/latest?cb=20130125001514&path-prefix=en",clicked:!1},{id:12,image:"https://vignette.wikia.nocookie.net/fairlyoddparents/images/6/6e/Stock_Image_of_Veronica.png/revision/latest?cb=20181029153638&path-prefix=en",clicked:!1}]},,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),r=a.n(c),o=(a(16),a(1)),s=a(2),l=a(5),d=a(3),m=a(6);a(17);var p=function(e){return i.a.createElement("div",{className:"wrapper"},e.children,i.a.createElement("div",{className:"container-fluid"},i.a.createElement("nav",{className:"navbar navbar-dark bg-dark"}),i.a.createElement("div",{className:"jumbotron jumbotron-fluid"}),i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"display-4"},"Welcome to Dimmsdale!"),i.a.createElement("p",{className:"lead"},"Click on a character to earn points. But don't click on a character more than once.")),i.a.createElement("div",{className:"card-container"})))};a(18);var g=function(e){return i.a.createElement("h1",{className:"title"},e.children)},u=a(4),f=a(9);a(19);var h=function(e){return i.a.createElement("span",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("span",{onClick:function(){return e.handleClick(e.id)},"aria-label":"click item",className:"click-item"},i.a.createElement("img",{alt:e.id,src:e.image}))))},k=(a(20),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={guessResponse:"",topScore:0,cartoons:u,score:0},a.shuffleArray=function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e},a.handleClick=function(e){var t=!1,n=a.state.cartoons.map(function(a){return e===a.id&&!1===a.clicked&&(a.clicked=!0,t=!0),a});t?(a.correctGuess(n),console.log("correct guess")):(a.incorrectGuess(n),console.log("incorrect guess"))},a.correctGuess=function(e){var t=a.state,n=t.topScore,i=t.score;a.setState({score:i+1,guessResponse:"Correct!",topScore:a.state.score+1,cartoons:a.shuffleArray(e)});var c=i+1,r=Math.max(c,n);a.setState({score:c,topScore:r})},a.incorrectGuess=function(e){var t=e.map(function(e){return Object(f.a)({},e,{clicked:!1})}),n=a.state;n.topScore,n.score;a.setState({score:0,guessResponse:"Incorrect!",cartoons:a.shuffleArray(t)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"body"},i.a.createElement("div",{className:"score-body"},i.a.createElement("span",{className:"navbar-brand mb-0 h1 guessResponse"},this.state.guessResponse),i.a.createElement("p",{className:"navbar-brand mb-0 h1 score"},"Score: ",this.state.score," | Top Score: ",this.state.topScore)),this.state.cartoons.map(function(t){return i.a.createElement(h,{score:e.state.score,handleClick:e.handleClick,id:t.id,key:t.id,image:t.image})}))}}]),t}(i.a.Component)),v=(a(21),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={cartoons:u},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(p,null,i.a.createElement(g,null,"Click Memory | Fairly Odd Parents"),i.a.createElement(k,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.1641725f.chunk.js.map