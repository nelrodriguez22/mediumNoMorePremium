const noMorePremium = ()=> {
	let targetDiv = document.querySelector(".star-15px_svg__svgIcon-use").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
	let cnDiv = targetDiv.className.replace(/ /g, ".")
	let elPrem = document.querySelectorAll('.'+ cnDiv);
	for (let i = 0; i < elPrem.length; i++) {
		if (elPrem[i].innerHTML.includes("star-15px_svg__svgIcon-use")) {
			elPrem[i].style.filter = "blur(1px)";
			elPrem[i].style.opacity = "0.8";
		}
		else {
			elPrem[i].style.borderLeft = "solid";
			elPrem[i].style.borderColor = "black";
			elPrem[i].style.borderRadius = "8px";
		}
	}
};
noMorePremium();
document.addEventListener("scroll", noMorePremium);
