var parser=function(){function n(){this.yy={}}var e={trace:function(){},yy:{},symbols_:{error:2,expressions:3,stmntexp:4,label:5,stmnt:6,ID:7,":":8,"=":9,e:10,"[":11,NUMBERS:12,"]":13,EOF:14,ifstmnt:15,GOTO:16,INT:17,opp:18,"+":19,oppp:20,"-":21,IF:22,coop:23,"<":24,">":25,"<=":26,">=":27,"==":28,$accept:0,$end:1},terminals_:{2:"error",7:"ID",8:":",9:"=",11:"[",12:"NUMBERS",13:"]",14:"EOF",16:"GOTO",17:"INT",19:"+",21:"-",22:"IF",24:"<",25:">",26:"<=",27:">=",28:"=="},productions_:[0,[3,1],[4,1],[4,1],[5,3],[6,3],[6,7],[6,1],[6,3],[6,3],[6,6],[10,4],[10,4],[10,2],[15,7],[23,1],[23,1],[23,1],[23,1],[23,1],[18,1],[18,2],[18,1],[18,2],[20,1],[20,1]],performAction:function(t,n,r,i,s,o,u){var a=o.length-1;switch(s){case 1:return o[a];break;case 2:return o[a];break;case 3:return o[a];break;case 4:this.$=lbfun(o[a-2],o[a]);break;case 5:this.$=equlnew(idd(o[a-2]),o[a]);break;case 6:this.$=eqMatrix(o[a-6],o[a-4],o[a-2]);break;case 7:this.$=o[a];break;case 8:this.$=gotofn(o[a-1]);break;case 9:this.$=initvar(o[a-1]);break;case 10:this.$=initvarMat(o[a-4],Number(o[a-2]));break;case 11:this.$=adderop(o[a-3],o[a-1]);break;case 12:this.$=suberop(o[a-3],o[a-1]);break;case 14:this.$=ifstmnt(o[a-5],o[a-3],o[a-4],o[a-1]);break;case 20:this.$=numb(Number(t));break;case 21:this.$=minnumb(o[a]);break;case 22:this.$=idd(o[a]);break;case 23:this.$=minID(o[a]);break;case 24:this.$=numb(Number(t));break;case 25:this.$=idd(o[a]);break}},table:[{3:1,4:2,5:3,6:4,7:[1,5],15:6,16:[1,7],17:[1,8],22:[1,9]},{1:[3]},{1:[2,1]},{1:[2,2]},{1:[2,3]},{8:[1,10],9:[1,11]},{1:[2,7]},{7:[1,12]},{7:[1,13]},{7:[1,17],12:[1,15],18:14,21:[1,16]},{6:18,7:[1,19],15:6,16:[1,7],17:[1,8],22:[1,9]},{7:[1,21],10:20,12:[1,15],18:22,21:[1,16]},{14:[1,23]},{11:[1,25],14:[1,24]},{23:26,24:[1,27],25:[1,28],26:[1,29],27:[1,30],28:[1,31]},{14:[2,20],16:[2,20],19:[2,20],21:[2,20],24:[2,20],25:[2,20],26:[2,20],27:[2,20],28:[2,20]},{7:[1,33],12:[1,32]},{16:[2,22],24:[2,22],25:[2,22],26:[2,22],27:[2,22],28:[2,22]},{1:[2,4]},{9:[1,11]},{1:[2,5]},{11:[1,34],14:[2,22],19:[2,22],21:[2,22]},{14:[1,37],19:[1,35],21:[1,36]},{1:[2,8]},{1:[2,9]},{12:[1,38]},{7:[1,17],12:[1,15],18:39,21:[1,16]},{7:[2,15],12:[2,15],21:[2,15]},{7:[2,16],12:[2,16],21:[2,16]},{7:[2,17],12:[2,17],21:[2,17]},{7:[2,18],12:[2,18],21:[2,18]},{7:[2,19],12:[2,19],21:[2,19]},{14:[2,21],16:[2,21],19:[2,21],21:[2,21],24:[2,21],25:[2,21],26:[2,21],27:[2,21],28:[2,21]},{14:[2,23],16:[2,23],19:[2,23],21:[2,23],24:[2,23],25:[2,23],26:[2,23],27:[2,23],28:[2,23]},{12:[1,40]},{7:[1,43],12:[1,42],20:41},{7:[1,43],12:[1,42],20:44},{1:[2,13]},{13:[1,45]},{16:[1,46]},{13:[1,47]},{14:[1,48]},{14:[2,24]},{14:[2,25]},{14:[1,49]},{14:[1,50]},{7:[1,51]},{14:[1,52]},{1:[2,11]},{1:[2,12]},{1:[2,10]},{14:[1,53]},{1:[2,6]},{1:[2,14]}],defaultActions:{2:[2,1],3:[2,2],4:[2,3],6:[2,7],18:[2,4],20:[2,5],23:[2,8],24:[2,9],37:[2,13],42:[2,24],43:[2,25],48:[2,11],49:[2,12],50:[2,10],52:[2,6],53:[2,14]},parseError:function(t,n){if(n.recoverable){this.trace(t)}else{throw new Error(t)}},parse:function(t){function m(e){r.length=r.length-2*e;i.length=i.length-e;s.length=s.length-e}function g(){var e;e=n.lexer.lex()||h;if(typeof e!=="number"){e=n.symbols_[e]||e}return e}var n=this,r=[0],i=[null],s=[],o=this.table,u="",a=0,f=0,l=0,c=2,h=1;var p=s.slice.call(arguments,1);this.lexer.setInput(t);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}}var d=this.lexer.yylloc;s.push(d);var v=this.lexer.options&&this.lexer.options.ranges;if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError}else{this.parseError=Object.getPrototypeOf(this).parseError}var y,b,w,E,S,x,T={},N,C,k,L;while(true){w=r[r.length-1];if(this.defaultActions[w]){E=this.defaultActions[w]}else{if(y===null||typeof y=="undefined"){y=g()}E=o[w]&&o[w][y]}if(typeof E==="undefined"||!E.length||!E[0]){var A="";L=[];for(N in o[w]){if(this.terminals_[N]&&N>c){L.push("'"+this.terminals_[N]+"'")}}if(this.lexer.showPosition){A="Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+L.join(", ")+", got '"+(this.terminals_[y]||y)+"'"}else{A="Parse error on line "+(a+1)+": Unexpected "+(y==h?"end of input":"'"+(this.terminals_[y]||y)+"'")}this.parseError(A,{text:this.lexer.match,token:this.terminals_[y]||y,line:this.lexer.yylineno,loc:d,expected:L})}if(E[0]instanceof Array&&E.length>1){throw new Error("Parse Error: multiple actions possible at state: "+w+", token: "+y)}switch(E[0]){case 1:r.push(y);i.push(this.lexer.yytext);s.push(this.lexer.yylloc);r.push(E[1]);y=null;if(!b){f=this.lexer.yyleng;u=this.lexer.yytext;a=this.lexer.yylineno;d=this.lexer.yylloc;if(l>0){l--}}else{y=b;b=null}break;case 2:C=this.productions_[E[1]][1];T.$=i[i.length-C];T._$={first_line:s[s.length-(C||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(C||1)].first_column,last_column:s[s.length-1].last_column};if(v){T._$.range=[s[s.length-(C||1)].range[0],s[s.length-1].range[1]]}x=this.performAction.apply(T,[u,f,a,this.yy,E[1],i,s].concat(p));if(typeof x!=="undefined"){return x}if(C){r=r.slice(0,-1*C*2);i=i.slice(0,-1*C);s=s.slice(0,-1*C)}r.push(this.productions_[E[1]][0]);i.push(T.$);s.push(T._$);k=o[r[r.length-2]][r[r.length-1]];r.push(k);break;case 3:return true}}return true}};var t=function(){var e={EOF:1,parseError:function(t,n){if(this.yy.parser){this.yy.parser.parseError(t,n)}else{throw new Error(t)}},setInput:function(e){this._input=e;this._more=this._backtrack=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges){this.yylloc.range=[0,0]}this.offset=0;return this},input:function(){var e=this._input[0];this.yytext+=e;this.yyleng++;this.offset++;this.match+=e;this.matched+=e;var t=e.match(/(?:\r\n?|\n).*/g);if(t){this.yylineno++;this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges){this.yylloc.range[1]++}this._input=this._input.slice(1);return e},unput:function(e){var t=e.length;var n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-t-1);this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(n.length-1){this.yylineno-=n.length-1}var i=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t};if(this.options.ranges){this.yylloc.range=[i[0],i[0]+this.yyleng-t]}this.yyleng=this.yytext.length;return this},more:function(){this._more=true;return this},reject:function(){if(this.options.backtrack_lexer){this._backtrack=true}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}return this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;if(e.length<20){e+=this._input.substr(0,20-e.length)}return(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput();var t=(new Array(e.length+1)).join("-");return e+this.upcomingInput()+"\n"+t+"^"},test_match:function(e,t){var n,r,i;if(this.options.backtrack_lexer){i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};if(this.options.ranges){i.yylloc.range=this.yylloc.range.slice(0)}}r=e[0].match(/(?:\r\n?|\n).*/g);if(r){this.yylineno+=r.length}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length};this.yytext+=e[0];this.match+=e[0];this.matches=e;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._backtrack=false;this._input=this._input.slice(e[0].length);this.matched+=e[0];n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input){this.done=false}if(n){return n}else if(this._backtrack){for(var s in i){this[s]=i[s]}return false}return false},next:function(){if(this.done){return this.EOF}if(!this._input){this.done=true}var e,t,n,r;if(!this._more){this.yytext="";this.match=""}var i=this._currentRules();for(var s=0;s<i.length;s++){n=this._input.match(this.rules[i[s]]);if(n&&(!t||n[0].length>t[0].length)){t=n;r=s;if(this.options.backtrack_lexer){e=this.test_match(n,i[s]);if(e!==false){return e}else if(this._backtrack){t=false;continue}else{return false}}else if(!this.options.flex){break}}}if(t){e=this.test_match(t,i[r]);if(e!==false){return e}return false}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function(){var t=this.next();if(t){return t}else{return this.lex()}},begin:function(t){this.conditionStack.push(t)},popState:function(){var t=this.conditionStack.length-1;if(t>0){return this.conditionStack.pop()}else{return this.conditionStack[0]}},_currentRules:function(){if(this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules}else{return this.conditions["INITIAL"].rules}},topState:function(t){t=this.conditionStack.length-1-Math.abs(t||0);if(t>=0){return this.conditionStack[t]}else{return"INITIAL"}},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(t,n,r,i){var s=i;switch(r){case 0:break;case 1:return 12;break;case 2:return 22;break;case 3:return 16;break;case 4:return 17;break;case 5:return 11;break;case 6:return 13;break;case 7:return 7;break;case 8:return 8;break;case 9:return 21;break;case 10:return 19;break;case 11:return 26;break;case 12:return 27;break;case 13:return 24;break;case 14:return 25;break;case 15:return 28;break;case 16:return 9;break;case 17:return 14;break;case 18:return"INVALID";break}},rules:[/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:if\b)/,/^(?:goto\b)/,/^(?:int\b)/,/^(?:\[)/,/^(?:\])/,/^(?:[A-Za-z]([A-Za-z]|[0-9])*)/,/^(?::)/,/^(?:-)/,/^(?:\+)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?:==)/,/^(?:=)/,/^(?:$)/,/^(?:.)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],inclusive:true}}};return e}();e.lexer=t;n.prototype=e;e.Parser=n;return new n}();if(typeof require!=="undefined"&&typeof exports!=="undefined"){exports.parser=parser;exports.Parser=parser.Parser;exports.parse=function(){return parser.parse.apply(parser,arguments)};exports.main=function(t){if(!t[1]){console.log("Usage: "+t[0]+" FILE");process.exit(1)}var n=require("fs").readFileSync(require("path").normalize(t[1]),"utf8");return exports.parser.parse(n)};if(typeof module!=="undefined"&&require.main===module){exports.main(process.argv.slice(1))}}
