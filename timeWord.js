// Define a function to convert 24h time to words
function timeToWords(timeStr) {
	// Split the time string into hours and minutes
	const timeParts = timeStr.split(':');
	const hours = parseInt(timeParts[0], 10); // Extract hours as an integer // use decimal system
	const minutes = parseInt(timeParts[1], 10); // Extract minutes as an integer // use decimal system

	// Arrays to map hours and minutes to words
	const hourWords = [
		'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
		'eleven', 'twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'
	];

	const minuteWords = [
		'', 'oh one', 'oh two', 'oh three', 'oh four', 'oh five', 'oh six', 'oh seven', 'oh eight', 'oh nine',
		'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
		'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine',
		'thirty', 'thirty one', 'thirty two', 'thirty three', 'thirty four', 'thirty five', 'thirty six', 'thirty seven', 'thirty eight', 'thirty nine',
		'forty', 'forty one', 'forty two', 'forty three', 'forty four', 'forty five', 'forty six', 'forty seven', 'forty eight', 'forty nine',
		'fifty', 'fifty one', 'fifty two', 'fifty three', 'fifty four', 'fifty five', 'fifty six', 'fifty seven', 'fifty eight', 'fifty nine'
	];

	// Initialize variables for hour and minute words

	let hourWord = '';
	let minuteWord = '';

	// Handle special cases for midnight and noon
	if (hours === 0 && minutes === 0) {
		return 'midnight';
	} else if (hours === 12 && minutes === 0) {
		return 'noon';
	} else {
		// Map hours and minutes to their corresponding words
		hourWord = hourWords[hours % 12]; // Use modulo 12 to handle 12-hour format
		minuteWord = minuteWords[minutes];
	}

	// Determine the period (am/pm)
	const period = hours < 12 ? 'am' : 'pm';

	// Construct the final time in words
	return `${hourWord} ${minuteWord} ${period}`.trim(); // Use backticks for string interpolation
	// Trim any extra spaces
}

