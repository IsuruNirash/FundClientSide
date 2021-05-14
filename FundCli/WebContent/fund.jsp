<%@page import="com.Fund"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Funds Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/funds.js"></script>
</head>
<body>



	<h1>Funds Management</h1>
	<br>
	<br>
	
	<ul>
  		<li><a href="#home">Home</a></li>
  		<li><a class="active" href="#fund">Fund</a></li>
  		<li><a href="#Profile">Profile</a></li>
  		<li><a href="#about">About</a></li>
	</ul>


<div class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
        <div class="col-10 col-md-8 col-lg-6">

	
	<br>
	<br>
	<div class="card">
	<form id="formFund" name="formFund">
		  Fund Recipient:
  		  <input id="FundRecipient" name="FundRecipient" type="text"
 						class="form-control form-control-sm">
 
 		<br> 
 		Company Name:
 		<input id="CompanyName" name="CompanyName" type="text"
 					class="form-control form-control-sm">
 
 		<br> 
 		Time Duration:
 		<input id="TimeDuration" name="TimeDuration" type="text"
 					class="form-control form-control-sm">

		<br> 
		Purpose:
 		<input id="Purpose" name="Purpose" type="text"
 					class="form-control form-control-sm">
 
 		<br> 
		Donation Amount:
 		<input id="DonationAmount" name="DonationAmount" type="text"
 					class="form-control form-control-sm">
 		
 		<br>
		<input id="btnSave" name="btnSave" type="button" value="Save"
 					class="btn btn-primary">

		<input type="hidden" id="hidFundIDSave"
 		name="hidFundIDSave" value="">
	</form>
<br>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>

</div>
</div> 
</div> 
</div>
<br>
<br>

<br>

<div class="container"><div class="row"><div class="col-11">

<h2>Funds Details</h2>
<br>
<div id="divFundsGrid">
 <%
	Fund fundObj = new Fund();
 	out.print(fundObj.readFunds());
 %>
</div>
</div> 
</div> 
</div>

</body>
</html>