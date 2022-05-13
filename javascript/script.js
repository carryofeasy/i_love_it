// поведение меню
window.addEventListener('scroll', function(){
	var header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
})


// поведение меню на маленьком экране
function toggleMenu(){
	var menuToggle = document.querySelector('.toggle');
	var menu = document.querySelector('.menu');
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');
}

// отправка данных формы
emailjs.init("XrQKNWjyTYMhlyN6B");
function send() {
		if (document.getElementById("formular").checkValidity() == false) {
			document.getElementById("formular").reportValidity();
			return;
	}
		var date = {
			nume: document.getElementById("nume").value,
			email: document.getElementById("email").value,
			message: document.getElementById("message").value
	};
		emailjs.send("service_ytw41pv", "template_z3skz9i", date)
		.then(function (respons) {
			alert("Сообщение успешно было отправлено")
			document.getElementById("formular").reset();
  }, function (error) {
		alert("Ошибка при отправке")
  })
}