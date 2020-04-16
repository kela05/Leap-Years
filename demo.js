var today = new Date();
var currentYear = today.getFullYear();
var leapyear = new Date(currentYear + "-02-29 0:00:00");

var yearRange = [];
var yearArray = [];

console.log(today);

if (today <= leapyear) {
  leapYearsRange(currentYear);
} else {
  var leapyearwithcurrent = currentYear + 1;
  leapYearsRange(leapyearwithcurrent);
}

function leapYearsRange(start) {
  for (var i = start; i <= start + 39; i++) {
    yearRange.push(i);
  }

  yearRange.forEach(function (year) {
    if (leapYears(year)) {
      yearArray.push(year);
    }
  });
  return yearArray;
}

function leapYears(year) {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

function showYears() {
  var allYears = yearArray.map(function (y) {
    return "The next leap year is in " + y;
  });
  document.getElementById("leapYears").innerHTML =
    "<ul><li>" + allYears.join("</li><li>") + "</li></ul>";
}
showYears();
