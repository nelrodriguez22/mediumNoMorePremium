# mediumNoMorePremium
This script is dedicated to those distracted people like me who don't want to lose their free 5 member-only stories due to missclicks again so to avoid that, the premium elements are blurry to make them stand out

Copy this script, open medium (duh) from **Chrome/Firefox : press <em>ctrl+shift+i</em> or Menu>More Tools>Development Tools** and paste it into the console.

Ps: remember that you have to do this manually everytime you close the browser, until i have the time to make the extension lol 


Script: 

const noMorePremium=()=>{let e=document.querySelector(".star-15px_svg__svgIcon-use").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className.replace(/ /g,"."),r=document.querySelectorAll("."+e);for(let e=0;e<r.length;e++)r[e].innerHTML.includes("star-15px_svg__svgIcon-use")?(r[e].style.filter="blur(1px)",r[e].style.opacity="0.8"):(r[e].style.borderLeft="solid",r[e].style.borderColor="black",r[e].style.borderRadius="8px")};noMorePremium(),document.addEventListener("scroll",noMorePremium);
