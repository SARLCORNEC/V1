
function anchor_ext(){
	var url = document.location.toString();
	if (url.match('#')) {
		var anchor = url.split('#')[1];
	}
	//alert(anchor);

	var tab = document.getElementById("myTab");
	var lis = tab.getElementsByTagName("li");
	for(var i=0 ; i<lis.length; i++){
		lis[i].setAttribute("class","");
		
		if(("#"+anchor)==lis[i].getElementsByTagName("a")[0].getAttribute("href")){
			//alert(anchor);
			lis[i].setAttribute("class","active");
		}
	}
	
	var myTabContent = document.getElementById("myTabContent");
	var divs = myTabContent.getElementsByTagName("div");
	for(var i=0 ; i<divs.length; i++){
		if(divs[i].getAttribute("class").indexOf("tab") != -1){
			//alert(divs[i].getAttribute("class"));
			divs[i].setAttribute("class","tab-pane fade");
		//alert(lis[i].getElementsByTagName("a")[0].getAttribute("href"));
		}
		if((anchor)==divs[i].getAttribute("id")){
			divs[i].setAttribute("class","tab-pane fade active in");
		}
	}
	location.hash=anchor;
}

function anchor_int(obj){	
	//alert(obj);
	var anchor = obj.getAttribute("href").split("#")[1];
	//alert(anchor);

	var tab = document.getElementById("myTab");
	var lis = tab.getElementsByTagName("li");
	for(var i=0 ; i<lis.length; i++){
		//alert(lis[i].getAttribute("class"));
		lis[i].setAttribute("class","");
		
		if(("#"+anchor)==lis[i].getElementsByTagName("a")[0].getAttribute("href")){
			//alert(anchor);
			lis[i].setAttribute("class","active");
		}
	}
	
	var myTabContent = document.getElementById("myTabContent");
	var divs = myTabContent.getElementsByTagName("div");
	for(var i=0 ; i<divs.length; i++){
		if(divs[i].getAttribute("class").indexOf("tab") != -1){
			divs[i].setAttribute("class","tab-pane fade");
		}
		//alert(lis[i].getElementsByTagName("a")[0].getAttribute("href"));
		if((anchor)==divs[i].getAttribute("id")){
			divs[i].setAttribute("class","tab-pane fade active in");
		}
	}
	location.hash=anchor;
}

