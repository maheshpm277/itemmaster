$(document).ready(function(){
	alert("welcome....");
	//document.getElementById("lbar").innerHTML="please enter barcode to search item";
	document.getElementById("sbar").innerHTML="please enter barcode to search item";
// code to add new item
$("#btn-submit").click(function(){
	if (document.getElementById("id").value!="" && document.getElementById("barcode").value!="" && document.getElementById("description").value!="" && document.getElementById("unit").value!=""  &&  document.getElementById("cost").value!=""  && document.getElementById("price").value!="")
	{
		//alert("9");
		var itemid=document.getElementById("id").value;
		var barcode=document.getElementById("barcode").value;
		var desc=document.getElementById("description").value;
		var unit=document.getElementById("unit").value;
		var cost=document.getElementById("cost").value;
		var price=document.getElementById("price").value;
	
		var a = {
		id : itemid,
		barcode : barcode,
		desc:desc,
		unit:unit,
		cost:cost,
		price:price,
		act:"addition"
		
		};
	//----sending data to server----
		$.ajax({
			url: "192.168.1.7/server.php",
			data: a,
			type: 'post',
			success: function(data) {
			alert(data);
			}
		});
	}
	else{
		//alert("38");
		document.getElementById("lbar").innerHTML="*this field cannot be empty";
		document.getElementById("lid").innerHTML="*this field cannot be empty";
		document.getElementById("ldes").innerHTML="*this field cannot be empty";
		document.getElementById("lunit").innerHTML="*this field cannot be empty";
		document.getElementById("lcost").innerHTML="*this field cannot be empty";
		document.getElementById("lprice").innerHTML="*this field cannot be empty";
	}
});


// code to search an item by barcode
$("#btn-search").click(function(){
	if(document.getElementById("btn-search").innerHTML=="Search")
	{
	
		if (document.getElementById("sbarcode").value!=""){
			var barcode=document.getElementById("sbarcode").value;
			//alert(barcode);
			var a={barcode:barcode,act:"search"};
		
			
			$.ajax({
				url: "192.168.1.7.3000/server.php",
				data: a,
				type: 'post',
				success: function(data) {
						if(data!="no such items present"){
						var val=data.split(",");
						//alert(value[0]);
						document.getElementById("sbarcode").value=val[0];
						document.getElementById("sid").value=val[1];
						document.getElementById("sdescription").value=val[2];
						document.getElementById("sunit").value=val[3];
						document.getElementById("scost").value=val[4];
						document.getElementById("sprice").value=val[5];
						document.getElementById("btn-search").innerHTML="Update";
						document.getElementById("sbar").innerHTML="";
					}
					else{
						document.getElementById("sbar").innerHTML="no such items present";
						
					}
				},
				error :function(){
				
					alert("error");
				}
			});
			
		}
		else{
			document.getElementById("sbar").innerHTML="please enter barcode to search item";
			//alert('35 not');
		}
	}
	
	
	
	if(document.getElementById("btn-search").innerHTML=="Update")
	{
		if (document.getElementById("sid").value!="" && document.getElementById("sbarcode").value!="" && document.getElementById("sdescription").value!="" && document.getElementById("sunit").value!=""  &&  document.getElementById("scost").value!=""  && document.getElementById("sprice").value!="")
		{
			var itemid=document.getElementById("sid").value;
			var barcode=document.getElementById("sbarcode").value;
			var desc=document.getElementById("sdescription").value;
			var unit=document.getElementById("sunit").value;
			var cost=document.getElementById("scost").value;
			var price=document.getElementById("sprice").value;
			
			var a = {
				id : itemid,
				barcode : barcode,
				desc:desc,
				unit:unit,
				cost:cost,
				price:price,
				act:"updation"
				
			};
			$.ajax({
				url: "server.php",
				data: a,
				type: 'post',
				success: function(data) {
					alert(data);
				}
			});
		}
		else{
			alert("please fill the fields");
		}
	}
	
});


//cancel buttons
$("#sbtn-cancel").click(function(){
	
			document.getElementById("sbarcode").value="";
			document.getElementById("sid").value="";
			document.getElementById("sdescription").value="";
			document.getElementById("sunit").value="";
			document.getElementById("scost").value="";
			document.getElementById("sprice").value="";
			document.getElementById("btn-search").innerHTML="Search";
			document.getElementById("sbar").innerHTML="please enter barcode to search item";
	
});

$("#btn-cancel").click(function(){
	//alert("79");
	
			document.getElementById("barcode").value="";
			document.getElementById("id").value="";
			document.getElementById("description").value="";
			document.getElementById("unit").value="";
			document.getElementById("cost").value="";
			document.getElementById("price").value="";
			document.getElementById("sbar").innerHTML="please enter barcode to search item";
			
	
});

	
});	

