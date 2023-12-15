export const formatDate = (date) => {
	if (!date) return "";

	const utcDate = new Date(date);

	const formattedDate = utcDate.toLocaleString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
	return formattedDate;
};
