var saveBtn = $(".saveBtn");

$("#currentDayTime").text(moment().format('dddd MMMM Do YYYY'));

function timeBlockColor() {
	var hour = moment().hours();

	$(".time-block").each(function () {
		var currentHour = parseInt($(this).attr("id"));

		if (currentHour > hour) {
			$(this).addClass("future");
		} else if (currentHour === hour) {
			$(this).addClass("present");
		} else {
			$(this).addClass("past");
		}
	})
};
