export function convertDate(date) {
	if (typeof date == "string") {
		date = new Date(date);
	} else if (date == null) {
		date = new Date();
	} else if (!(date instanceof Date)) {
		throw new Error("Cannot convert valid date");
	}

	let dd = date.getDate();
	let mm = date.getMonth() + 1;

	return [(dd>9 ? '' : '0') + dd,
			(mm>9 ? '' : '0') + mm,
			date.getFullYear()].join('/');
}

