!function(e){var t={};function s(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(i,o,function(t){return e[t]}.bind(null,o));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=1)}([function(e,t,s){},function(e,t,s){"use strict";s.r(t);s(0);var i=class{constructor(e){this._place=e,this._blocks}get place(){return this._place}get blocks(){return this._blocks}set place(e){this._place=e}render(){this._place.innerHTML=" ";let e=['<div class="line"></div>'];for(let t=0;t<9;t++)e.push(`<li class="ticTacToe__area" data-area="${t}"></li>`);this.place.insertAdjacentHTML("beforeend",e.join("")),this._blocks=document.querySelectorAll(".ticTacToe__area")}};var o=class{constructor(e){this._name=e,this._points=0,this._moves={}}get name(){return this._name}get points(){return this._points}set points(e){this._points=e}get moves(){return this._moves}set moves(e){return this._moves=e}point(){this.points++}};var r=class{constructor(e,t,s,r,a,l,n,c,h){this._ticTacToe=e,this._board=new i(t),this._place=t,this._playerOne=new o(s),this._playerTwo=new o(r),this.playerTurn=!0,this.scoreBoardPoints=a,this.whoIsPlaying=l,this._modal=n,this._modalBTNs=c,this._sybolsModal=h,this._possibilities={"012":{css:"display:block; top:14%"},345:{css:"display:block; top:47%"},678:{css:"display:block; top:80%"},"036":{css:"display:block; top: 46%; left: -33%; transform: rotate(90deg)"},147:{css:"display:block; top: 46%; transform: rotate(90deg);"},258:{css:"display:block; top: 46%; left: 33%; transform: rotate(90deg)"},"048":{css:"display:block; top: 46%; left: -1%; transform: rotate(45deg)"},246:{css:"display:block; top: 46%; left: -1%; transform: rotate(-45deg)"}}}set place(e){return this._place=e}get place(){return this._place}get ticTacToe(){return this._ticTacToe}get wonPossibilities(){return this._possibilities}set board(e){return this._board=e}get board(){return this._board}get playerOne(){return this._playerOne}get playerTwo(){return this._playerTwo}get getAllBlocks(){return this._board.blocks}get modal(){return this._modal}get modalBTNs(){return this._modalBTNs}get sybolsModal(){return this._sybolsModal}start(){this.board.render(),this.gamePlayEvents()}gamePlayEvents(){this.getAllBlocks.forEach(e=>{e.addEventListener("click",this.play.bind(this))}),this._modalBTNs[0].addEventListener("click",this.toMenu.bind(this)),this._modalBTNs[1].addEventListener("click",this.continue.bind(this))}play({currentTarget:e}){let t=document.querySelector(".line");if(this.playerTurn&&!e.classList.contains("clicked")){if(this.playerTurn=!1,this.playerOne.moves[e.dataset.area]="X",e.classList.add("xMark","clicked"),this.whoIsPlaying.src="src/image/circleBlue.svg",Object.keys(this.playerOne.moves).length>=3){let e=this.checkWinner(this.wonPossibilities,this.playerOne.moves);e[0]&&(this.sybolsModal.forEach(e=>e.src="/src/image/crossBlue.svg"),t.style=e[1].css,this.ticTacToe.classList.add("blur"),this.modal.style.display="flex",this.playerOne.point(),this.scoreBoardPoints[0].innerText=this.playerOne.points,setTimeout(()=>{this.finish()},2e3)),e[0]||5!==Object.keys(this.playerOne.moves).length||(this.finish(),this.start())}}else if(!this.playerTurn&&!e.classList.contains("clicked")&&(this.playerTurn=!0,this.playerTwo.moves[e.dataset.area]="O",e.classList.add("oMark","clicked"),this.whoIsPlaying.src="src/image/crossBlue.svg",Object.keys(this.playerTwo.moves).length>=3)){let e=this.checkWinner(this.wonPossibilities,this.playerTwo.moves);e[0]&&(this.sybolsModal.forEach(e=>e.src="../image/circleBlue.svg"),t.style=e[1].css,this.ticTacToe.classList.add("blur"),this.modal.style.display="flex",this.playerTwo.point(),this.scoreBoardPoints[1].innerText=this.playerTwo.points,setTimeout(()=>{this.finish()},2e3)),e[0]||5!=Object.keys(this.playerTwo.moves).length||(this.finish(),this.start())}}checkWinner(e,t){for(let s in e)if(s[0]in t&&s[1]in t&&s[2]in t)return[!0,e[s[0]+s[1]+s[2]]];return[!1]}finish(){this.playerOne.moves={},this.playerTwo.moves={}}toMenu({currentTarget:e}){location.reload()}continue({currentTarget:e}){this.start(),this.whoIsPlaying.src="src/image/crossBlue.svg",this.playerTurn=!0,this.modal.style.display="none",this.ticTacToe.classList.remove("blur")}};new class{constructor(e,t){this.gamePlay,this.toggle=document.querySelector(".ticTacToe__toggle"),this.start=document.querySelector(".ticTacToe__button"),this.playerOneInput=e,this.playerTwoInput=t,this.variables()}variables(){this.ticTacToe=document.querySelector(".ticTacToe"),this.mainArea=document.querySelector(".ticTacToe__board"),this.boardGame=document.querySelector(".ticTacToe__boardGame"),this.menu=document.querySelector(".ticTacToe__menu"),this.header=document.querySelector(".ticTacToe__header"),this.title=document.querySelector(".ticTacToe__title"),this.menuBox=document.querySelector(".ticTacToe__players"),this.scoreBoardNames=document.querySelectorAll(".scoreBoard__name"),this.scoreBoardPoints=document.querySelectorAll(".scoreBoard__points"),this.whoIsPlayingSymbol=document.querySelector(".ticTacToe__nowPlayingSymbol"),this.modal=document.querySelector(".modal"),this.modalButtons=document.querySelectorAll(".modal__button"),this.sybolsModal=document.querySelectorAll(".modal__symbol")}init(){this.events(),this.letteringAnimation(this.title),this.menuAnimationOrder()}events(){this.start.addEventListener("click",this.goToGamePlay.bind(this))}intoTheDark({currentTarget:e}){e.classList.contains("dark")?e.classList.remove("dark"):e.classList.add("dark")}goToGamePlay(){let e=this.playerOneInput.value,t=this.playerTwoInput.value;this.playerOneInput.value||(e="Too lazy to put the name One"),this.playerTwoInput.value||(t="Too lazy to put the name Two"),this.gamePlay=new r(this.ticTacToe,this.mainArea,e,t,this.scoreBoardPoints,this.whoIsPlayingSymbol,this.modal,this.modalButtons,this.sybolsModal),this.scoreBoardNames[0].innerText=this.gamePlay.playerOne.name,this.scoreBoardNames[1].innerText=this.gamePlay.playerTwo.name,this.closeMenu(),setTimeout(()=>{this.gamePlay.start()},1e3)}letteringAnimation(e){let t=e.innerHTML.split("");e.innerHTML=" ",t.forEach(t=>{" "===t&&(t="&nbsp"),e.insertAdjacentHTML("beforeend",`<span>${t}</span>`)})}menuAnimationOrder(){setTimeout(()=>{this.title.style.display="block"},200)}closeMenu(){this.menuBox.classList.add("close"),this.header.classList.add("close"),setTimeout(()=>{this.menu.style.display="none",this.boardGame.classList.add("show")},1e3)}updateScoreBoart(){}}(document.querySelector("#playerOneInputName"),document.querySelector("#playerTwoInputName")).init()}]);
//# sourceMappingURL=app.def2ed91.js.map