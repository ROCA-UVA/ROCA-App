export function getDate() {
	var yr = new Date().getFullYear()
	var mo = new Date().getMonth() + 1
	var dt = new Date().getDate()

	return mo + "/" + dt + "/" + yr
}

export function getTime() {
	var hrs = new Date().getHours()
	var min = new Date().getMinutes()
	var sec = new Date().getSeconds()

	return hrs + ":" + min + ":" + sec
}