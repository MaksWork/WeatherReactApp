const get_date_time = () => {
	const month = new Array(12);
	month[0] = "Jan";
	month[1] = "Feb";
	month[2] = "Mar";
	month[3] = "Apr";
	month[4] = "May";
	month[5] = "Jun";
	month[6] = "Jul";
	month[7] = "Aug";
	month[8] = "Sep";
	month[9] = "Oct";
	month[10] = "Nov";
	month[11] = "Dec";

	const weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	let today = new Date();
	let minutes;
	if(today.getMinutes() < 10){
		minutes = `0${today.getMinutes()}`;
	}
	else{
		minutes = today.getMinutes();
	}
	let time = `${today.getHours()}:${minutes}`;
	let day = weekday[today.getDay()];
	let date = `${month[today.getMonth()]}' ${today.getDate()}`;

	return `${time} - ${day}, ${date}`;
};

export default get_date_time;