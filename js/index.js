document.querySelectorAll(".mountain-btn").forEach((el,i) => {
	el.addEventListener("click",switchSlide3)
});
document.getElementById('v-slides').addEventListener('scroll', (event) => {
	checkLaTextInView()
	checkSlide3InView()
});
function checkLaTextInView(){
	const laText=document.querySelector("#v-slide-1 .la-text");
	const targetEle=document.querySelector("header .header-container .brand .la-text");
	if(isElementVisible(laText)){
		targetEle.style.display="none"
	}else{
		targetEle.style.display="block"
	}
}
function checkSlide3InView(){
	const header=document.querySelector("header");
	const el=document.querySelector(".s3-parent-section>.inner-section .just-text");
	if(isElementVisible(el) && window.innerWidth>920){
		header.style.display="none";
	}
	else{
		header.style.display="block";
	}
}
function switchSlide3(e){
	const btns=document.querySelectorAll(".mountain-btn");
	const tables=document.querySelectorAll("#v-slide-3 .schedule-div .table-div")
	const activateElNum=e.srcElement.dataset.num
	const parentDiv=document.querySelector("#v-slide-3");
	if(activateElNum==0){
		parentDiv.style.backgroundImage='url(assets/3.1.png)'
	}
	else{
		parentDiv.style.backgroundImage='url(assets/3.2.png)'
	}
	tables.forEach(table=>{
		table.style.display="block";
		if(table.dataset.num!=activateElNum){
			table.style.display="none";
		}
	})
	btns.forEach(btn=>{
		btn.classList.remove("active");
		if (btn.dataset.num==activateElNum)
			btn.classList.add("active")
	})
}
function isElementVisible(el) {
	var rect     = el.getBoundingClientRect(),
			vWidth   = window.innerWidth || document.documentElement.clientWidth,
			vHeight  = window.innerHeight || document.documentElement.clientHeight,
			efp      = function (x, y) { return document.elementFromPoint(x, y) };     

	// Return false if it's not in the viewport
	if (rect.right < 0 || rect.bottom < 0 
					|| rect.left > vWidth || rect.top > vHeight)
			return false;

	// Return true if any of its four corners are visible
	return (
				el.contains(efp(rect.left,  rect.top))
		||  el.contains(efp(rect.right, rect.top))
		||  el.contains(efp(rect.right, rect.bottom))
		||  el.contains(efp(rect.left,  rect.bottom))
	);
}