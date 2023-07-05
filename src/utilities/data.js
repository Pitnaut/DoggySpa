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

// Function to convert size
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

// Function to get prize from size options

const calculateSizePrice = (size) => {
  let sizePrice = 0;
  if (size === "S") {
    sizePrice = 5;
  } else if (size === "M") {
    sizePrice = 10;
  } else if (size === "L") {
    sizePrice = 15;
  } else if (size === "XL") {
    sizePrice = 20
  }
  return sizePrice
};

// Function to get price from bath options

const calculateBathPrice = (bath) => {
  let bathPrice = 0;
  if (bath === "Standard") {
    bathPrice = 10;
  } else if (bath === "Premium") {
    bathPrice = 15;
  } else if (bath === "Deluxe") {
    bathPrice = 20
  }
  return bathPrice
};

// Function to get price from extra options

const calculateExtraPrice = (extras) => {
  let extraPrice = 0;
  extras.forEach((extra) => {
    if(extra === "ear cleaning") {
      extraPrice += 5;
    } else if (extra === "pedicure") {
      extraPrice += 10;
    } else if (extra === "haircut") {
      extraPrice += 20;
    }
  });
  return extraPrice
}

export { monthNames, sizes, hours, toOrdinal, sizeReducer, calculateSizePrice, calculateBathPrice, calculateExtraPrice };
