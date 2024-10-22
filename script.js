function getFormvalue(e) {
	e.preventDefault();
	var fname = document.getElementsByName('fname')[0].value;
	var lname = document.getElementsByName('lname')[0].value;
    
    alert("First Name: " + fname + "\nLast Name: " + lname);
}
