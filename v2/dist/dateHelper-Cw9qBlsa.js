const parseDateFromString = (dateString) => {
  try {
    let pieces = dateString.split(" ");
    if (pieces.length > 1) {
      let pieces22 = pieces[0].split("-");
      return new Date(pieces22[2], pieces22[1] - 1, pieces22[0]);
    }
    let pieces2 = dateString.split("T");
    if (pieces2.length > 1) {
      let pieces3 = pieces2[0].split("-");
      return new Date(pieces3[0], pieces3[1] - 1, pieces3[2]);
    }
  } catch (ex) {
    return null;
  }
};
const parseDateTimeFromString = (dateString) => {
  try {
    let pieces = dateString.split(" ");
    if (pieces.length > 1) {
      let pieces2 = pieces[0].split("-");
      let pieces3 = pieces[1].split(":");
      var date = new Date(pieces2[2], pieces2[1] - 1, pieces2[0]);
      date.setHours(pieces3[0]);
      date.setMinutes(pieces3[1]);
      date.setSeconds(0);
      date.setMilliseconds(0);
      if (pieces[2].toLowerCase() == "pm") {
        date.setHours(date.getHours() + 12);
      }
      return date;
    }
  } catch (ex) {
    return null;
  }
};
const renderShortDate = (date) => {
  try {
    return date.toLocaleDateString().replaceAll("/", "-");
  } catch (ex) {
    return "";
  }
};
export {
  parseDateFromString as a,
  parseDateTimeFromString as p,
  renderShortDate as r
};
