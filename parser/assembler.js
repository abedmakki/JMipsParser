function Pass1(){if(document.getElementById("assembResult").innerHTML==""||document.getElementById("assembResult").innerHTML==null){alert("Please Enter Assembly code...!");return false}cody=[];symbolTab=[];var e=0;var t=document.getElementById("assembResult").innerHTML;var n=t.split("\n");var r=0;while(r<n.length&&n[r].toLowerCase().trim()!="end"){n[r]=n[r].replace(/\/.*/,"");var i=new Array(4);if(n[r].indexOf(",")>-1){var s=n[r].split(",");i[0]=s[0].trim();s=s[1].trim().split(/\s+/);i[1]=s[0].trim();if(s.length>1)for(var o=1;o<s.length;o++)i[o+1]=s[o].trim()}else if(n[r].trim().length==0){r++;continue}else{var s=n[r].replace(/^\s+/,"").split(/\s+/);i[1]=s[0].trim();if(s.length>1)for(var o=1;o<s.length;o++)i[o+1]=s[o].trim()}cody.push({col1:i[0],col2:i[1],col3:i[2],col4:i[3]});r++}for(var u=0;u<cody.length;u++){if(cody[u].col1!=null||cody[u].col1!=undefined){if(cody[u].col1.length>3){alert("Label ("+cody[u].col1+") is more than 3 char");return false}if(checkLabel(cody[u].col1)){alert("Error: label ("+cody[u].col1+") has been defined");return false}symbolTab.push({label:cody[u].col1,LC:e});e=(parseInt(e,16)+parseInt(1,16)).toString(16).toUpperCase()}else if(cody[u].col2.toLowerCase()=="org"){if(!/^[0-9A-F]+$/.test(cody[u].col3)){alert("ORG with error address");return false}e=cody[u].col3}else{e=(parseInt(e,16)+parseInt(1,16)).toString(16).toUpperCase()}}return{symbolTab:symbolTab,cody:cody}}function checkLabel(e){for(var t=0;t<symbolTab.length;t++){if(symbolTab[t].label.toLowerCase()==e.toLowerCase()){return true}}return false}function Pass2(e,t){t=symbolTab;symbolTab=t;e=e;if(t.length==0){alert("Should run Pass1 First!");return false}Hexa=[];var n=0;var r=0;while(r<e.length){if(e[r].col2.toLowerCase()=="org"){if(!/^[0-9A-F]+$/.test(e[r].col3)){alert("ORG with error address");return false}n=e[r].col3}else if(e[r].col2.toLowerCase()=="dec"){if(!/^(-)*[0-9]+$/.test(e[r].col3)){alert("DEC with error address");return false}Hexa.push({LC:formatHex(n),opcode:DEC2HEX(Number(e[r].col3))});n=(parseInt(n,16)+1).toString(16)}else if(e[r].col2.toLowerCase()=="hex"){if(!/^[0-9A-F]+$/.test(e[r].col3)){alert("HEX with error address");return false}Hexa.push({LC:formatHex(n),opcode:formatHex(e[r].col3)});n=(parseInt(n,16)+1).toString(16)}else if(e[r].col3!=""&&e[r].col3!=undefined&&e[r].col3!=null){var i;if(e[r].col4!=""&&e[r].col4!=undefined&&e[r].col4.toLowerCase()=="i"){i=(8+MRI.indexOf(e[r].col2.toLowerCase())).toString(16).toUpperCase()}else{i=MRI.indexOf(e[r].col2.toLowerCase())}if(parseInt(i,16)>-1){var s=i+formatHex(checkel(e[r].col3,t).LC,3);Hexa.push({LC:formatHex(n),opcode:s});n=(parseInt(n,16)+1).toString(16)}else{alert("Wrong MRI/ORG instruction...");return false}}else if((i=checkel(e[r].col2.toLowerCase(),NMRI))!=null){Hexa.push({LC:formatHex(n),opcode:i.opcode});n=(parseInt(n,16)+1).toString(16)}else{alert("Wrong Instruction...");return false}r++}var o=document.getElementById("machineResult");o.innerHTML="";for(var u=0;u<Hexa.length;u++){o.innerHTML+=Hexa[u].LC+" "+Hexa[u].opcode+"</br>"}}function DEC2HEX(e){if(e<0){e=65535+e+1}return formatHex(e.toString(16).toUpperCase())}function formatHex(e,t){if(t==3)return("000"+e).slice(-3).toUpperCase();else return("0000"+e).slice(-4).toUpperCase()}function checkel(e,t){var n;if(t.some(function(r){n=r;if(t==symbolTab)return r.label==e;else return r.ins==e}))return n}function formatBin(e){return("0000000000000000"+parseInt(e,16).toString(2)).slice(-16)}function DoPass(){var e=null;if((e=Pass1())!=null)Pass2(e.cody,e.symbolTable);else{alert("Error..");return false}return true}var cody=[];var symbolTab=[];var Hexa=[];var MRI=["and","add","lda","sta","bun","bsa","isz"];var NMRI=[{opcode:7800,ins:"cla"},{opcode:7400,ins:"cle"},{opcode:7200,ins:"cma"},{opcode:7100,ins:"cme"},{opcode:7080,ins:"cir"},{opcode:7040,ins:"cil"},{opcode:7020,ins:"inc"},{opcode:7010,ins:"spa"},{opcode:7008,ins:"sna"},{opcode:7004,ins:"sza"},{opcode:7002,ins:"sze"},{opcode:7001,ins:"hlt"},{opcode:"F800",ins:"inp"},{opcode:"F400",ins:"out"},{opcode:"F200",ins:"ski"},{opcode:"F100",ins:"sko"},{opcode:"F080",ins:"ion"},{opcode:"F040",ins:"iof"}]
