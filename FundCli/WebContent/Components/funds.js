$(document).ready(function()
{ 
	if ($("#alertSuccess").text().trim() == "") 
 	{ 
 	$("#alertSuccess").hide(); 
 	} 
 	$("#alertError").hide(); 
});


// SAVE ============================================
$(document).on("click", "#btnSave", function(event) 
{ 
	// Clear alerts---------------------
 	$("#alertSuccess").text(""); 
 	$("#alertSuccess").hide(); 
 	$("#alertError").text(""); 
 	$("#alertError").hide(); 
	
	// Form validation-------------------
	var status = validateFundForm(); 
	if (status != true) 
 	{ 
 		$("#alertError").text(status); 
 		$("#alertError").show(); 
 		return; 
	} 

		// If valid------------------------
 		var type = ($("#hidFundIDSave").val() == "") ? "POST" : "PUT"; 
 		
 		$.ajax( 
 		{ 
 			url : "FundsAPI", 
	 		type : type, 
 			data : $("#formFund").serialize(), 
 			dataType : "text", 
 			complete : function(response, status) 
 		{ 
 			onFundSaveComplete(response.responseText, status); 
 		} 
 	});
});


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
{ 
 	$("#hidFundIDSave").val($(this).data("fundid")); 
 	$("#FundRecipient").val($(this).closest("tr").find('td:eq(0)').text()); 
	$("#CompanyName").val($(this).closest("tr").find('td:eq(1)').text()); 
 	$("#TimeDuration").val($(this).closest("tr").find('td:eq(2)').text());
    $("#Purpose").val($(this).closest("tr").find('td:eq(3)').text()); 
 	$("#DonationAmount").val($(this).closest("tr").find('td:eq(4)').text()); 
});


// DELETE=====================================================
$(document).on("click", ".btnRemove", function(event)
{ 
 	$.ajax( 
 	{ 
 		url : "FundsAPI", 
 		type : "DELETE", 
 		data : "FundID=" + $(this).data("fundid"),
 		dataType : "text", 
 		complete : function(response, status) 
 		{ 
 			onFundDeleteComplete(response.responseText, status); 
 		} 
	}); 
});


// CLIENT-MODEL================================================================
function validateFundForm() 
{ 
	// Fund Recipient Name
	if ($("#FundRecipient").val().trim() == "") 
 	{ 
 		return "Insert Recipient Name."; 
 	} 
	
	// Company Name
	if ($("#CompanyName").val().trim() == "") 
 	{ 
 		return "Insert Company Name."; 
 	}
	
	// Time Duration
	if ($("#TimeDuration").val().trim() == "") 
 	{ 
 		return "Insert Time Duration."; 
 	} 
	
	// Purpose
	if ($("#Purpose").val().trim() == "") 
 	{ 
 		return "Insert a Purpose."; 
 	}

 	// DonationAmount-------------------------------
	if ($("#DonationAmount").val().trim() == "") 
 	{ 
 		return "Insert Donation Amount."; 
 	} 
	// is numerical value
	var DAmount = $("#DonationAmount").val().trim(); 
	if (!$.isNumeric(DAmount)) 
 	{ 
 		return "Insert a numerical value for Donation Amount."; 
 	} 
	// convert to decimal price
 	$("#DonationAmount").val(parseFloat(DAmount).toFixed(2)); 
	
return true; 
}

// Function on funds==========
function onFundSaveComplete(response, status)
{ 
	if (status == "success") 
 	{ 
 		var resultSet = JSON.parse(response); 
 		if (resultSet.status.trim() == "success") 
 		{ 
 			$("#alertSuccess").text("Successfully saved."); 
 			$("#alertSuccess").show(); 
 			$("#divFundsGrid").html(resultSet.data); 
 		} 
		
		else if (resultSet.status.trim() == "error") 
 		{ 
 			$("#alertError").text(resultSet.data); 
 			$("#alertError").show(); 
 		} 
 	}
	
	else if (status == "error") 
 	{ 
 		$("#alertError").text("Error while saving."); 
 		$("#alertError").show(); 
 	} 
	else
 	{ 
 		$("#alertError").text("Unknown error while saving.."); 
 		$("#alertError").show(); 
 	}	
 	$("#hidFundIDSave").val(""); 
 	$("#formFund")[0].reset(); 
}

// function funds Delete====================
function onFundDeleteComplete(response, status)
{ 
	if (status == "success") 
 	{ 
 		var resultSet = JSON.parse(response); 
 		
		if (resultSet.status.trim() == "success") 
 		{ 
 			$("#alertSuccess").text("Successfully deleted."); 
 			$("#alertSuccess").show(); 
			$("#divFundsGrid").html(resultSet.data); 
 		} 
	
		else if (resultSet.status.trim() == "error") 
 		{ 
 			$("#alertError").text(resultSet.data); 
 			$("#alertError").show(); 
 		} 
 	} 
	
	else if (status == "error") 
 	{ 
 		$("#alertError").text("Error while deleting."); 
 		$("#alertError").show(); 
 	} 

	else
 	{ 
 		$("#alertError").text("Unknown error while deleting.."); 
 		$("#alertError").show(); 
 	} 
}



































