function adjustDateTime(dateTimeString) {
    let newDate = new Date(dateTimeString);
    newDate.setHours(newDate.getHours() - 7);
    // while (newDate > date) {
    //     newDate.setDate(newDate.getDate() - 1); // Go to previous day
    // }
    return newDate;
}
function getTime(dateTimeString) {
    const adjustedDate = adjustDateTime(dateTimeString)
    const dateTime = new Date(adjustedDate);
    const now = new Date();
    const timeDifference = now.getTime() - dateTime.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} days ago`;
    } else if (hours > 0) {
        return `${hours} hours ago`;
    } else if (minutes > 0) {
        return `${minutes} minutes ago`;
    } else {
        return `< 1 minute ago`;
    }
}
function formatDateTime(dateTimeString) {
    const adjustedDate = adjustDateTime(dateTimeString)
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dateTime = new Date(adjustedDate);
    const month = months[dateTime.getMonth()];
    const day = dateTime.getDate();
    let hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    let period = 'A.M.';
    // Convert hours to 12-hour format and determine period (A.M. or P.M.)
    if (hours >= 12) {
        period = 'P.M.';
        if (hours > 12) {
            hours -= 12;
        }
    }
    if (hours === 0) {
        hours = 12; // Midnight is 12 A.M., noon is 12 P.M.
    }
    return `${month} ${day} ${hours}:${minutes < 10 ? '0' + minutes : minutes} ${period}`;
}
export {getTime, formatDateTime};