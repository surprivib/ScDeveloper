	
	function slidtext()
	{
		
		//var x=document.getElementById("slide-text");
		//x.style.transition="all 2s";
		//x.style.bottom="30%";
	}

	function scrolltopbotton()
	{
		
		var x=document.getElementById("totop");
		
		if(window.pageYOffset >100)
		{
			x.classList.add("active");
		}
		else
		{
			
			x.classList.remove("active");
		}
	}


	function togglefunction()
	{
		var x=document.getElementById("menu");
		var y=document.getElementById("id");
		if(window.innerWidth<800)
		{
			if(y.classList.contains("open-menu"))
			{
				
				y.classList.remove("open-menu");
			}
			else
			{
				
				y.classList.add("open-menu");
			}
		}
	}
	

window.addEventListener('scroll', function() {
		

	
	var contact = document.querySelector("div.footer");
	var contactposition = contact.getBoundingClientRect();
	var contactli=document.querySelector("li.contact");

	var home = document.querySelector("div.main-image");
	var homeposition = home.getBoundingClientRect();
	var homeli=document.querySelector("li.home");

	var services = document.querySelector("div.card1");
	var servicesposition = services.getBoundingClientRect();
	var serviceli=document.querySelector("li.services");
	

	if(contactposition.top >= 0 && contactposition.bottom <= window.innerHeight) 
	{
		contactli.classList.add("active");
		homeli.classList.remove("active");
		serviceli.classList.remove("active");
				
	}

	if(homeposition.top >= 0 && homeposition.bottom <= window.innerHeight) 
	{
		
		contactli.classList.remove("active");
		homeli.classList.add("active");
		serviceli.classList.remove("active");
	}

	if(servicesposition.top >= 0 && servicesposition.bottom <= window.innerHeight)
	 {
		contactli.classList.remove("active");
		homeli.classList.remove("active");
		serviceli.classList.add("active");
		
		
	}






});


	window.addEventListener('scroll', function() {
		
	

});

	window.addEventListener('scroll', function() {
		

});