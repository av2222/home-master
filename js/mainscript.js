

// PopUp1 Open_Close block
var btn_app_request = document.querySelector(".btn_app_request");
var popup_app_request = document.querySelector(".popup_app_request");

btn_app_request.addEventListener("click", function(event){
	event.preventDefault();
	popup_app_request.classList.toggle("popup_app_request_open");
});

var popup_app_request_close = document.querySelector(".popup_app_request .close");
popup_app_request_close.addEventListener("click", function(event){
	event.preventDefault();
	popup_app_request.classList.toggle("popup_app_request_open");
});
// ----------------------

// PopUp2 Open_Close block
var feedback_btn = document.querySelector(".feedback_btn");
var popup_feedback = document.querySelector(".popup_feedback");

feedback_btn.addEventListener("click", function(event){
	event.preventDefault();
	popup_feedback.classList.toggle("popup_feedback_open");
});

var popup_feedback_close = document.querySelector(".popup_feedback .close");
popup_feedback_close.addEventListener("click", function(event){
	event.preventDefault();
	popup_feedback.classList.toggle("popup_feedback_open");
});
// ----------------------