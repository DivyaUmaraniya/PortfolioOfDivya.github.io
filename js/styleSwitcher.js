

const links=document.querySelectorAll(".alternate-style"),
		totalLinks=links.length;
		

function setActiveStyle(color)
{
	for(let i=0;i<totalLinks;i++)
	{
		if(color == links[i].getAttribute("title"))
		{
			links[i].removeAttribute("disabled");
		}
		else
		{
			links[i].setAttribute("disabled","true"); 
		}
	}
}

const bodyskin=document.querySelectorAll(".body-skin"),
		totalskin=bodyskin.length;

	for(let i=0;i<totalskin;i++){
		bodyskin[i].addEventListener("change",function(){
			if(this.value === "dark"){
				document.body.className="dark"
			}
			else{
				document.body.className=""
			}
		})
	}

document.querySelector(".toggle-style-switcher").addEventListener("click",()=>{
	document.querySelector(".style-switcher").classList.toggle("open");
})