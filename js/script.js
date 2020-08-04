
window.addEventListener("load",function(){
	document.querySelector(".proloader").classList.add("opacity-0");
	setTimeout(function(){
		document.querySelector(".proloader").style.display="none";
	},1000)  
})

const filtercontainer=document.querySelector(".portfolio-filter"),
		filterBtns=filtercontainer.children,
		totalFiterbtn=filterBtns.length;
		portfolioItems=document.querySelectorAll(".portfolio-item"),
		totalPortfolioItems=portfolioItems.length;
		

		for(let i=0; i<totalFiterbtn;i++)
		{
			filterBtns[i].addEventListener("click",function(){
				filtercontainer.querySelector(".active").classList.remove("active");
				this.classList.add("active");

				const filtervalue=this.getAttribute("data-filter");
				for(let k=0;k<totalPortfolioItems;k++)
				{
					if(filtervalue === portfolioItems[k].getAttribute("data-category")){
						portfolioItems[k].classList.remove("hide");
						portfolioItems[k].classList.add("show");
					}
					else{
						portfolioItems[k].classList.remove("show");
						portfolioItems[k].classList.add("hide");
					}
					if(filtervalue === "all")
					{
						portfolioItems[k].classList.remove("hide");
						portfolioItems[k].classList.add("show"); 
					}
				}
			})
		}
const lightbox=document.querySelector(".lightbox"),
	 	lightboxImg=lightbox.querySelector(".lightbox-img"),
	 	lightboxClose=lightbox.querySelector(".lightbox-close"),
	 	lightboxText=lightbox.querySelector(".caption-text"),
	 	lightboxCounter=lightbox.querySelector(".caption-counter");
	 	let itemIndex=0;
	 	for(let i=0;i<totalPortfolioItems;i++)
	 	{
	 		portfolioItems[i].addEventListener("click",function(){
	 			itemIndex=i;
	 			changeItem();
	 			toggleLightbox();
	 		})
	 	}
	 	function prevItem()
	 	{
	 		if(itemIndex==0)
	 		{
	 			itemIndex= totalPortfolioItems-1;
	 		}
	 		else{
	 			itemIndex--
	 		}	
	 		changeItem();
	 	}
	 	function nextItem()
	 	{
	 		if(itemIndex==totalPortfolioItems-1)
	 		{
	 			itemIndex=0;
	 		}
	 		else{
	 			itemIndex++
	 		}
	 		changeItem()
	 	}
	 	function changeItem(){
	 		imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
	 		lightboxImg.src=imgSrc;
	 		lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
	 		lightboxCounter.innerHTML=(itemIndex+1)+" of "+totalPortfolioItems;
	 	}
	 	function toggleLightbox(){
	 		lightbox.classList.toggle("open");
	 	}

	 	lightbox.addEventListener("click",function(event){
	 		if(event.target===lightboxClose || event.target ===lightbox){
	 			toggleLightbox();
	 		}
	 	})

	 	const nav=document.querySelector(".nav"),
	 		navlist=nav.querySelectorAll("li"),
	 		totalnav=navlist.length,
	 		allsection=document.querySelectorAll(".section"),
	 		totalsection=allsection.length;
	 	

	 	for(let i=0;i<totalnav;i++)
	 	{
	 		const a=navlist[i].querySelector("a");
	 		a.addEventListener("click",function(){
			removeBack();

	 			for(let j=0;j<totalnav;j++)
	 			{
	 				if( navlist[j].querySelector("a").classList.contains("active")){
	 					 
	 					addback(j);
	 				}
	 				navlist[j].querySelector("a").classList.remove("active");
	 			}
	 			this.classList.add("active");
	 			showSection(this);
	 		})
	 	}

	 	
	 	 document.querySelector(".hire-me").addEventListener("click",function(){
	 	 	const sectionIndex=this.getAttribute("data-section-index")
	 	 	showSection(this);
	 	 	updateNav(this);
	 	 	addback(sectionIndex);
	 	 	removeBack();
	 	 })


	 	 function addback(j){
	 	 		allsection[j].classList.add("back-section")
	 	 }

	 	 function removeBack(){
	 	 	for(let i=0;i<totalsection;i++)
	 		{
	 			allsection[i].classList.remove("back-section");
	 		} 
	 	 }

	 	 function updateNav(element){
	 	 	for(let j=0;j<totalnav;j++){
	 	 		navlist[j].querySelector("a").classList.remove("active");
	 			const target=element.getAttribute("href").split("#")[1];
	 	 		if(target===navlist[j].querySelector("a").getAttribute("href").split("#")[1]){
	 	 			navlist[j].querySelector("a").classList.add("active");
	 	 		}

	 	 	}
	 	 }

	 	function showSection(element){
	 		for(let i=0;i<totalsection;i++)
	 		{
	 			allsection[i].classList.remove("active");
	 		}
	 		const target=element.getAttribute("href").split("#")[1];
	 		document.querySelector("#"+target).classList.add("active") 
	 	}

	 	const navToggler=document.querySelector(".nav-toggler"),
	 		aside=document.querySelector(".aside");

	 	navToggler.addEventListener("click",()=>{
	 		asideSectiontoggle();
	 	})

	 	 function asideSectiontoggle(){
	 	 	aside.classList.toggle("open");
	 	 	navToggler.classList.toggle("open");
	 	 	for(let i=0;i<totalsection;i++)
	 		{
	 			allsection[i].classList.toggle("open");
	 		}

	 	 }


