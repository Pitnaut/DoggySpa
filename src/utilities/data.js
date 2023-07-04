const monthNames = {
  0: 'january',
  1: 'february',
  2: 'march',
  3: 'april',
  4: 'may',
  5: 'june',
  6: 'july',
  7: 'august',
  8: 'september',
  9: 'october',
  10: 'november',
  11: 'december'
};

const sizes = ["S (less than 5kg)", "M (between 5kg and 15kg)", "L (between 15kg and 25kg)", "XL (more than 25kg)"];

const hours = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"];

// Function to convert number to ordinal
const toOrdinal = (number) => {
  if (number === 1) {
    return number + "st";
  } else if (number === 2) {
    return number + "nd";
  } else if (number === 3) {
    return number + "rd";
  } else {
    return number + "th";
  };
};

//function to convert size
const sizeReducer = (string) => {
  if (string === "S (less than 5kg)") {
    return "S";
  } else if (string === "M (between 5kg and 15kg)") {
    return "M";
  } else if (string === "L (between 15kg and 25kg)") {
    return "L";
  } else if (string === "XL (more than 25kg)") {
    return "XL";
  }
};

export {monthNames, sizes, hours, toOrdinal, sizeReducer};
