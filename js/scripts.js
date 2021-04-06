var colors = ['#FFEBD3', '#C2FFFB', '#FFBBBB', '#D8FFCA', '#FFFDD9', '#F2D6FF']

$(".user").each(function () {
	var randomColor = colors[Math.floor(Math.random() * colors.length)];
	$(this).css('background', randomColor);
});

$("#muteButton").click(function () {
	if ($(this).text() === "Mute") {
		$(this).addClass("btn-success");
		$(this).removeClass("btn-danger");
		$(this).text("Unmute");
	} else {
		$(this).addClass("btn-danger");
		$(this).removeClass("btn-success");
		$(this).text("Mute");
	}
});

$(".permsButton").click(function() {
	$("#permsModal").modal("toggle");
});