//Ouverture du menu déroulant "Accueil"
$("#accueil").on("mouseover", function () {
	$("#menu1").show();
});
$("#accueil").on("mouseout", function () {
	$("#menu1").hide();
});
$("#menu1").on("mouseover", function () {
	$("#menu1").show();
});
$("#menu1").on("mouseout", function () {
	$("#menu1").hide();
});

//Ouverture du menu déroulant "Contact"
$("#contact").on("mouseover", function () {
	$("#menu2").show();
});
$("#contact").on("mouseout", function () {
	$("#menu2").hide();
});
$("#menu2").on("mouseover", function () {
	$("#menu2").show();
});
$("#menu2").on("mouseout", function () {
	$("#menu2").hide();
});

//Gestion du sous-menu
$("#sub_menu").on("mouseover", function () {
	$("#folder").removeClass("glyphicon glyphicon-folder-close").addClass("glyphicon glyphicon-folder-open");
	$("#sub_menu_list").show();
});
$("#sub_menu").on("mouseout", function () {
	$("#folder").removeClass("glyphicon glyphicon-folder-open").addClass("glyphicon glyphicon-folder-close");
	$("#sub_menu_list").hide();
});
$("#sub_menu_list").on("mouseover", function () {
	$("#folder").removeClass("glyphicon glyphicon-folder-close").addClass("glyphicon glyphicon-folder-open");
	$(this).show();
});
$("#sub_menu_list").on("mouseout", function () {
	$("#folder").removeClass("glyphicon glyphicon-folder-open").addClass("glyphicon glyphicon-folder-close");
	$(this).hide();
});

//Mouvement fluide vers les ancres
$("#button1").on("click", function (e) {
	e.preventDefault;
	var target = $(this).attr("href");
	$("html").animate({scrollTop: $(target).offset().top}, 1000);
});
$("#button2").on("click", function (e) {
	e.preventDefault;
	var target = $(this).attr("href");
	$("html").animate({scrollTop: $(target).offset().top}, 1000);
});
$("#button3").on("click", function (e) {
	e.preventDefault;
	var target = $(this).attr("href");
	$("html").animate({scrollTop: $(target).offset().top}, 1000);
});
$("#button4").on("click", function (e) {
	e.preventDefault;
	var target = $(this).attr("href");
	$("html").animate({scrollTop: $(target).offset().top}, 1000);
});

//Agrandissement de la photo en cas de survol
$("figure img").on("mouseover", function () {
	$(this).css("width", "340px").css("height", "450px");
	$(this).css("margin-top", "100px");
	$("figcaption").hide();
});
$("figure img").on("mouseout", function () {
	$(this).css("width", "225px").css("height", "300px");
	$(this).css("margin-top", "120px");
	$("figcaption").show();
});

//initialisation des infos-bulles
$("a[title*='HTML5']").tooltip();
$("a[title*='Laos']").tooltip();

//Carousel
$("#carousel").carousel({ interval: 3000 });

//Effet accordéon
$("#qui").on("shown.bs.collapse", function () {
	$("#chevron1").removeClass("glyphicon glyphicon-chevron-down").addClass("glyphicon glyphicon-chevron-up");
});
$("#qui").on("hidden.bs.collapse", function () {
	$("#chevron1").removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down");
});
$("#competences").on("shown.bs.collapse", function () {
	$("#chevron2").removeClass("glyphicon glyphicon-chevron-down").addClass("glyphicon glyphicon-chevron-up");
});
$("#competences").on("hidden.bs.collapse", function () {
	$("#chevron2").removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down");
});
$("#formation").on("shown.bs.collapse", function () {
	$("#chevron3").removeClass("glyphicon glyphicon-chevron-down").addClass("glyphicon glyphicon-chevron-up");
});
$("#formation").on("hidden.bs.collapse", function () {
	$("#chevron3").removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down");
});
$("#langues").on("shown.bs.collapse", function () {
	$("#chevron4").removeClass("glyphicon glyphicon-chevron-down").addClass("glyphicon glyphicon-chevron-up");
});
$("#langues").on("hidden.bs.collapse", function () {
	$("#chevron4").removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down");
});

//Effet fluide du Home dans le Footer
$("footer a").on("click", function (e) {
	e.preventDefault;
	var target = $(this).attr("href");
	$("html").animate({scrollTop: $(target).offset().top}, 1000);
});