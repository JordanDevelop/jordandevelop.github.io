function keyPressHandler(e){var n=e.keyCode?e.keyCode:e.charCode;if(!(e.metaKey||e.ctrlKey||e.altKey))switch(e.preventDefault(),commandIndex--,n){case 27:break;case 8:backspaceKey();break;case 13:enterKey();break;case 32:addCharSpace();break;case 187:case 61:addCharPlusEquals(e);break;case 189:case 109:case 173:addCharDash();break;case 38:upArrowKey();break;case 40:commandIndex+=2,downArrowKey();break;default:if(e.shiftKey)return;letterKey(n)}}function enterKey(){var e=commandLine.innerText||commandLine.textContent;pastCommands.push(e);var n=document.createElement("div");n.classList.add("completed-command"),n.innerHTML=document.getElementById("command-line").innerHTML.replace('<textarea id="commands" class="commands">','<div class="output">'),visibleSection.appendChild(n);var a=" ";switch(e){case"everything":appendSection("sections");break;case"help":appendSection(e);break;case"blog":appendSection(e);break;case"blog"+a+"-n":appendSection("blog-new");break;case"blog"+a+"-l":appendSection("blog-latest");break;case"clear":clearSection();break;default:appendSection(sectionsArray.indexOf(e)>=0?e:"error")}commandLine.innerHTML=""}function appendSection(e){var n=document.createElement("div");n.innerHTML=document.getElementById(e).innerHTML,visibleSection.appendChild(n),commandLine.scrollIntoView(!0),$(".container").scrollTop($(".container")[0].scrollHeight)}function clearSection(e){var n=document.createElement("div");n.innerHTML=document.getElementById("visible-sections").innerHTML=""}function backspaceKey(){var e=commandLine.innerHTML;e=e.substring(0,e.length-1),"&nbsp"===e.slice(-5)&&(e=e.substring(0,e.length-5)),commandLine.innerHTML=e}function letterKey(e){var n="";e>47&&e<58||e>95&&e<106?(n=e-48,n>9&&(n-=48)):(e+=32,n=String.fromCharCode(e)),commandLine.innerHTML+=n}function addCharSpace(){commandLine.innerHTML+="&nbsp;"}function addCharDash(){commandLine.innerHTML+="-"}function addCharPlusEquals(e){e.shiftKey?commandLine.innerHTML+="+":commandLine.innerHTML+="="}function upArrowKey(){commandIndex<0&&(commandIndex=pastCommands.length-1),commandLine.innerHTML=pastCommands[commandIndex]+""}function downArrowKey(){commandIndex>=pastCommands.length?commandLine.innerHTML="":commandLine.innerHTML=pastCommands[commandIndex]+""}var sectionsArray=["blog","contact","portfolio"],pastCommands=[],commandLine=document.querySelector("#command-line .commands"),visibleSection=document.getElementById("visible-sections"),commandIndex=0,twilio_start=!1;$(document).keyup(function(e){27==e.keyCode&&$(".cmd-modal").trigger("click")}),document.addEventListener("keydown",keyPressHandler);