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

saveBtn.on("click", function () {
	var time = $(this).siblings(".hour").text();
	var plan = $(this).siblings(".plan").val();

	// saved in local storage
	localStorage.setItem(time, plan);
});

function usePlanner() {

	$(".hour").each(function () {
		var currHour = $(this).text();
		var currPlan = localStorage.getItem(currHour);

		if (currPlan !== null) {
			$(this).siblings(".plan").val(currPlan);
		}
	});
}

timeBlockColor();
usePlanner();