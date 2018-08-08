function emailIsValid(){
	console.log("WOI");
	if(/^\w+@([a-z]+\.)+[a-z]{2,3}/.test(this.value)){
		$(this).addClass("success");
		$(this).removeClass("error");
		$("span").text("Email Valid");
		$("span").addClass("success");
		$("span").removeClass("error");
	}
	else{
		$(this).removeClass("success");
		$(this).addClass("error");
		$("span").text("Email not Valid");
		$("span").removeClass("success");
		$("span").addClass("error");
	}
}

$("#email").keyup(emailIsValid);
