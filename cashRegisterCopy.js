// 6/8/23 3:42PM
function checkCashRegister(price, cash, cid) {
  debugger;
  //   global vars
  let roundedChangeEnd;
  let finalArr = [];
  let compareArr = [];
  let emptyArr = [];
  let coinValueArr = [];
  const moneyValue = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];
  const reversedCID = cid.reverse();

  // find change to be given
  let change = cash - price;
  let roundedChange = Math.round(100 * change) / 100;
  roundedChangeEnd = roundedChange;
  console.log(roundedChange);

  // create array to store values of comparing cid to change
  reversedCID.forEach((item) => {
    if (roundedChange > item[1]) {
      compareArr.push(item);
    }
  });
  console.log("change available in drawer");
  console.log(compareArr);
  console.log(" ");
  // create array to store values of needed currency types
  moneyValue.forEach((item) => {
    if (roundedChange > item[1]) {
      emptyArr.push(item);
    }
  });

  for (let i = 0; i < emptyArr.length; i++) {
    const coinValue = emptyArr[i][1];
    coinValueArr.push(coinValue);
  }
  // sort array from biggest to smallest values
  coinValueArr = coinValueArr.sort((a, b) => b - a);

  // series of functions that will determine the most ideal change to be distrubuted
  function hundredCount() {
    let skipper = false;
    let count = 0;
    while (roundedChange >= 100) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;
      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 100) {
      return count;
    }

    console.log(count + " 100");
    return count;
  }
  function twentyCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 20) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 20) {
      coinValueArr.shift();
      return count;
    }

    console.log(count + " 20");
    return count;
  }
  function tenCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 10) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 10) {
      coinValueArr.shift();
      return count;
    }

    console.log(count + " 10");
    return count;
  }
  function fiveCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 5) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 5) {
      coinValueArr.shift();
      return count;
    }

    console.log(count + " 5");
    return count;
  }
  function onesCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 1) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 1) {
      coinValueArr.shift();
      return count;
    }

    console.log(count + " 1");
    return count;
  }
  function quarterCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 0.25) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 0.25) {
      coinValueArr.shift();
      return count;
    }
    // console.log(coinValueArr);
    console.log(count + " .25");
    return count;
  }
  function dimeCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 0.1) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 0.1) {
      coinValueArr.shift();
      return count;
    }
    // console.log(coinValueArr);
    console.log(count + " .10");
    return count;
  }
  function nickelCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 0.05) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;
      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 0.05) {
      coinValueArr.shift();
      return count;
    }
    // console.log(coinValueArr);
    console.log(count + " .05");
    return count;
  }
  function pennyCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 0.01) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;
      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 0.01) {
      coinValueArr.shift();
      return count;
    }
    // console.log(coinValueArr);
    console.log(count + " .01");
    return count;
  }

  // declaring said functions in vars to get most ideal change to be given: this returns the count of currency type needed(IDEALLY)
  console.log("ideal change to be given");
  const numOfHundreds = hundredCount();
  const numOfTwenties = twentyCount();
  const numOfTens = tenCount();
  const numOfFives = fiveCount();
  const numOfOnes = onesCount();
  const numOfQuarters = quarterCount();
  const numOfDimes = dimeCount();
  const numOfNickels = nickelCount();
  const numOfPennies = pennyCount();
  // checking the rounded change left to be sure funds are sufficient
  // if the currency type is in there, then we will take money out of that section until we no longer can while( currency >= baseAmount)
  //
  // MAYBE MOVE TENS CHECKER VARS HERE SO THE CALL STACK READS IT FIRST
  function hundredsChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 100;
      let counter = 0;
      while (roundedChangeEnd > 100 && multCounter * 100 > 0) {
        roundedChangeEnd -= 100;
        multCounter--;
        counter++;
      }
      fivesUsed = counter;
      console.log("num of 5s: " + counter);
      if (roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the ones"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function twentiesChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with");
    //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 20;
      let counter = 0;
      while (roundedChangeEnd > 20 && multCounter * 20 > 0) {
        roundedChangeEnd -= 20;
        multCounter--;
        counter++;
      }
      twentiesUsed = counter;
      twentiesUsed = counter;
      console.log("num of 20s: " + counter);
      if (roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the tens"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function tensChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with");
    //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 10;
      let counter = 0;
      while (roundedChangeEnd > 10 && multCounter * 10 > 0) {
        roundedChangeEnd -= 10;
        multCounter--;
        counter++;
      }
      tensUsed = counter;
      console.log("num of 10s: " + counter);
      if (roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the fives"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function fivesChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 5;
      let counter = 0;
      while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
        roundedChangeEnd -= 5;
        multCounter--;
        counter++;
      }
      fivesUsed = counter;
      console.log("num of 5s: " + counter);
      if (roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the ones"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function onesChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 1;
      let counter = 0;
      while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
        roundedChangeEnd -= 1;
        multCounter--;
        counter++;
      }
      onesUsed = counter;
      console.log("num of 1s: " + counter);
      if (roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the quarters"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function quartersChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 0.25;
      let counter = 0;
      while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
        roundedChangeEnd -= 0.25;
        multCounter--;
        counter++;
      }
      quartersUsed = counter;
      console.log("num of Quarters: " + counter);
      if (roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the dimes"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function dimesChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 0.1;
      let counter = 0;
      while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
        roundedChangeEnd -= 0.1;
        multCounter--;
        counter++;
      }
      dimesUsed = counter;
      console.log("num of Dimes: " + counter);
      if (roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the Nickels"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function nickelsChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 0.05;
      let counter = 0;
      while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
        roundedChangeEnd -= 0.05;
        multCounter--;
        counter++;
      }
      nickelsUsed = counter;
      console.log("num of Nickels: " + counter);
      if (roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the Pennies"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function penniesChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 0.01;
      let counter = 0;
      while (roundedChangeEnd > 0.01 && multCounter * 0.01 > 0) {
        roundedChangeEnd -= 0.01;
        multCounter--;
        counter++;
      }
      penniesUsed = counter;
      console.log("num of Pennies: " + counter);
      if (roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(roundedChangeEnd + " this is it boys");
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }

  //

  function checkCurrency100() {
    function hundredsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 100;
        let counter = 0;
        while (roundedChangeEnd > 100 && multCounter * 100 > 0) {
          roundedChangeEnd -= 100;
          multCounter--;
          counter++;
        }
        fivesUsed = counter;
        console.log("num of 5s: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the ones"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function twentiesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with");
      //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 20;
        let counter = 0;
        while (roundedChangeEnd > 20 && multCounter * 20 > 0) {
          roundedChangeEnd -= 20;
          multCounter--;
          counter++;
        }
        twentiesUsed = counter;
        twentiesUsed = counter;
        console.log("num of 20s: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the tens"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function tensChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with");
      //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 10;
        let counter = 0;
        while (roundedChangeEnd > 10 && multCounter * 10 > 0) {
          roundedChangeEnd -= 10;
          multCounter--;
          counter++;
        }
        tensUsed = counter;
        console.log("num of 10s: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the fives"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function fivesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 5;
        let counter = 0;
        while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
          roundedChangeEnd -= 5;
          multCounter--;
          counter++;
        }
        fivesUsed = counter;
        console.log("num of 5s: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the ones"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function onesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 1;
        let counter = 0;
        while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
          roundedChangeEnd -= 1;
          multCounter--;
          counter++;
        }
        onesUsed = counter;
        console.log("num of 1s: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd +
            " this is what we got left, send it to the quarters"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.01 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
  }

  function checkCurrency20() {
    function twentiesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with");
      //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 20;
        let counter = 0;
        while (roundedChangeEnd > 20 && multCounter * 20 > 0) {
          roundedChangeEnd -= 20;
          multCounter--;
          counter++;
        }
        twentiesUsed = counter;
        twentiesUsed = counter;
        console.log("num of 20s: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the tens"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function tensChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with");
      //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 10;
        let counter = 0;
        while (roundedChangeEnd > 10 && multCounter * 10 > 0) {
          roundedChangeEnd -= 10;
          multCounter--;
          counter++;
        }
        tensUsed = counter;
        console.log("num of 10s: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the fives"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function fivesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 5;
        let counter = 0;
        while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
          roundedChangeEnd -= 5;
          multCounter--;
          counter++;
        }
        fivesUsed = counter;
        console.log("num of 5s: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the ones"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function onesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 1;
        let counter = 0;
        while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
          roundedChangeEnd -= 1;
          multCounter--;
          counter++;
        }
        onesUsed = counter;
        console.log("num of 1s: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd +
            " this is what we got left, send it to the quarters"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.01 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
  }
  function checkCurrency10() {
    function tensChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with");
      //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 10;
        let counter = 0;
        while (roundedChangeEnd > 10 && multCounter * 10 > 0) {
          roundedChangeEnd -= 10;
          multCounter--;
          counter++;
        }
        tensUsed = counter;
        console.log("num of 10s: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the fives"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function fivesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 5;
        let counter = 0;
        while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
          roundedChangeEnd -= 5;
          multCounter--;
          counter++;
        }
        fivesUsed = counter;
        console.log("num of 5s: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the ones"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function onesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 1;
        let counter = 0;
        while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
          roundedChangeEnd -= 1;
          multCounter--;
          counter++;
        }
        onesUsed = counter;
        console.log("num of 1s: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd +
            " this is what we got left, send it to the quarters"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.01 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
  }
  function checkCurrency5() {
    function fivesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 5;
        let counter = 0;
        while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
          roundedChangeEnd -= 5;
          multCounter--;
          counter++;
        }
        fivesUsed = counter;
        console.log("num of 5s: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the ones"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function onesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 1;
        let counter = 0;
        while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
          roundedChangeEnd -= 1;
          multCounter--;
          counter++;
        }
        onesUsed = counter;
        console.log("num of 1s: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd +
            " this is what we got left, send it to the quarters"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.01 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
  }
  function checkCurrency1() {
    function onesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 1;
        let counter = 0;
        while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
          roundedChangeEnd -= 1;
          multCounter--;
          counter++;
        }
        onesUsed = counter;
        console.log("num of 1s: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd +
            " this is what we got left, send it to the quarters"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.01 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
  }
  function checkCurrencyC25() {
    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.01 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
  }
  function checkCurrencyC10() {
    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.01 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
  }
  function checkCurrencyC5() {
    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.01 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
  }
  function checkCurrencyC1() {
    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.01 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
  }

  const currencyChecker100 = checkCurrency100();
  const currencyChecker20 = checkCurrency20();
  const currencyChecker10 = checkCurrency10();
  const currencyChecker5 = checkCurrency5();
  const currencyChecker1 = checkCurrency1();
  const currencyCheckerC25 = checkCurrencyC25();
  const currencyCheckerC10 = checkCurrencyC10();
  const currencyCheckerC5 = checkCurrencyC5();
  const currencyCheckerC1 = checkCurrencyC1();

  function cidHundredsCheck() {
    if (compareArr.flat().includes("ONE HUNDRED")) return currencyChecker100;
    else return;
  }
  function cidTwentiesCheck() {
    if (compareArr.flat().includes("TWENTY")) return currencyChecker20;
    else return;
  }

  function cidTensCheck() {
    if (compareArr.flat().includes("TEN")) return currencyChecker10;
    else return;
  }

  function cidFivesCheck() {
    if (compareArr.flat().includes("FIVE")) return currencyChecker5;
    else return;
  }

  function cidOnesCheck() {
    if (compareArr.flat().includes("ONE")) return currencyChecker1;
    else return;
  }

  function cidQuartersCheck() {
    if (compareArr.flat().includes("QUARTER")) return currencyCheckerC25;
    else return;
  }

  function cidDimesCheck() {
    if (compareArr.flat().includes("DIME")) return currencyCheckerC10;
    else return;
  }

  function cidNickelsCheck() {
    if (compareArr.flat().includes("NICKEL")) return currencyCheckerC5;
    else return;
  }
  function cidPenniesCheck() {
    if (compareArr.flat().includes("PENNY")) return currencyCheckerC1;
    else return;
  }
  const cidHundreds = cidHundredsCheck();
  const cidTwenties = cidTwentiesCheck();
  const cidTens = cidTensCheck();
  const cidFives = cidFivesCheck();
  const cidOnes = cidOnesCheck();
  const cidQuarters = cidQuartersCheck();
  const cidDimes = cidDimesCheck();
  const cidNickels = cidNickelsCheck();
  const cidPennies = cidPenniesCheck();

  const cidCheck100 = hundredsChecker();
  const cidCheck20 = twentiesChecker();
  const cidCheck10 = tensChecker();
  const cidCheck5 = fivesChecker();
  const cidCheck1 = onesChecker();
  const cidCheckC25 = quartersChecker();
  const cidCheckC10 = dimesChecker();
  const cidCheckC5 = nickelsChecker();
  const cidCheckC1 = penniesChecker();
  return roundedChange;
}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

// function test(cash, price, cid) {
//   let emptyArr = [];
//   let coinValueArr = [];
//   const moneyValue = [
//     ["PENNY", 0.01],
//     ["NICKEL", 0.05],
//     ["DIME", 0.1],
//     ["QUARTER", 0.25],
//     ["ONE", 1],
//     ["FIVE", 5],
//     ["TEN", 10],
//     ["TWENTY", 20],
//     ["ONE HUNDRED", 100],
//   ];

//   let change = price - cash;
//   moneyValue.forEach((item) => {
//     if (change > item[1]) {
//       emptyArr.push(item);
//     }
//   });
//   console.log(emptyArr);
//   console.log(emptyArr[0][1]);

//   for (let i = 0; i < emptyArr.length; i++) {
//     const coinValue = emptyArr[i][1];
//     coinValueArr.push(coinValue);
//   }
//   coinValueArr = coinValueArr.sort((a, b) => b - a);

//   function quarterCount() {
//     let count = 0;
//     while (change >= coinValueArr[0]) {
//       change = change - coinValueArr[0];
//       count++;
//     }
//     console.log(count);
//   }
//   quarterCount();
// }
// checkCashRegister(712.39, 2002.43, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]);

/*
returns obj like --> {status: "INSUFFICIENT_FUNDS",change: []};
if(cid < change) {
return  {status: "INSUFFICIENT_FUNDS", change: []} 
} else if(cid > change) {
 return {status: "OPEN", change: [...]}
} else {
  return {status: "CLOSED", change: [...]} 
}

sort change in highest value to lowest value
EX: {
status: "OPEN", 
change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]
}

1: Each 0index of the arr index needs to equate to that coins value
EX: quarter needs to equal .25
2: For this problem, we need to take the highest coin available and subtract it from the change amount
3: first we need a math equation that calulates the change
(change = cash - price)
4: similar to register project in cs50 with C
5: if(change > cash amount)
if(.57 > .25)
cycle thru array and only use amounts that are smaller than the change
if(change > currency) {
  emptyArr.push(currency)
}

if there are not enough of a currency type in CID, find a way to move to the next drawer under and subtract the origianl value that is needed. If the next is not enough, then continue down the line until wither it works or it finds the funds are insufficent

 */
/* console.log(cidHundreds + " HI");
  // console.log(cidTwenties + " second one");
  // console.log(cidTens);
  // console.log(cidFives);
  // console.log(cidOnes);
  // console.log(cidQuarters);
  // console.log(cidDimes);
  // console.log(cidNickels);
  // console.log(cidPennies);

// function checkCurrency() {
//   function hundredsChecker() {
//     console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
//     if (true) {
//       let multCounter = compareArr[0][1] / 100;
//       let counter = 0;
//       while (roundedChangeEnd > 100 && multCounter * 100 > 0) {
//         roundedChangeEnd -= 100;
//         multCounter--;
//         counter++;
//       }
fivesUsed = counter;//       
console.log("num of 5s: " + counter);
//       if (roundedChangeEnd > 0) {
//         finalArr.push(compareArr[0]);
//         compareArr.shift();
//       }
//       console.log(
//         roundedChangeEnd + " this is what we got left, send it to the ones"
//       );
//       console.log(finalArr);
//     }
//     return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
//   }

//   function twentiesChecker() {
//     console.log(roundedChangeEnd + " this is what we are starting with");
//     //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
//     if (true) {
//       let multCounter = compareArr[0][1] / 20;
//       let counter = 0;
//       while (roundedChangeEnd > 20 && multCounter * 20 > 0) {
//         roundedChangeEnd -= 20;
//         multCounter--;
//         counter++;
//       }
twentiesUsed = counter;//       
console.log("num of 20s: " + counter);
//       if (roundedChangeEnd > 0) {
//         finalArr.push(compareArr[0]);
//         compareArr.shift();
//       }
//       console.log(
//         roundedChangeEnd + " this is what we got left, send it to the tens"
//       );
//       console.log(finalArr);
//     }
//     return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
//   }

//   function tensChecker() {
//     console.log(roundedChangeEnd + " this is what we are starting with");
//     //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
//     if (true) {
//       let multCounter = compareArr[0][1] / 10;
//       let counter = 0;
//       while (roundedChangeEnd > 10 && multCounter * 10 > 0) {
//         roundedChangeEnd -= 10;
//         multCounter--;
//         counter++;
//       }
tensUsed = counter;//      
 console.log("num of 10s: " + counter);
//       if (roundedChangeEnd > 0) {
//         finalArr.push(compareArr[0]);
//         compareArr.shift();
//       }
//       console.log(
//         roundedChangeEnd + " this is what we got left, send it to the fives"
//       );
//       console.log(finalArr);
//     }
//     return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
//   }

//   function fivesChecker() {
//     console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
//     if (true) {
//       let multCounter = compareArr[0][1] / 5;
//       let counter = 0;
//       while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
//         roundedChangeEnd -= 5;
//         multCounter--;
//         counter++;
//       }
fivesUsed = counter;//       
console.log("num of 5s: " + counter);
//       if (roundedChangeEnd > 0) {
//         finalArr.push(compareArr[0]);
//         compareArr.shift();
//       }
//       console.log(
//         roundedChangeEnd + " this is what we got left, send it to the ones"
//       );
//       console.log(finalArr);
//     }
//     return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
//   }

//   function onesChecker() {
//     console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
//     if (true) {
//       let multCounter = compareArr[0][1] / 1;
//       let counter = 0;
//       while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
//         roundedChangeEnd -= 1;
//         multCounter--;
//         counter++;
//       }
onesUsed = counter;//       
console.log("num of 1s: " + counter);
//       if (roundedChangeEnd > 0) {
//         finalArr.push(compareArr[0]);
//         compareArr.shift();
//       }
//       console.log(
//         roundedChangeEnd + " this is what we got left, send it to the quarters"
//       );
//       console.log(finalArr);
//     }
//     return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
//   }

//   function quartersChecker() {
//     console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
//     if (true) {
//       let multCounter = compareArr[0][1] / 0.25;
//       let counter = 0;
//       while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
//         roundedChangeEnd -= 0.25;
//         multCounter--;
//         counter++;
//       }
quartersUsed = counter;//       
console.log("num of Quarters: " + counter);
//       if (roundedChangeEnd > 0) {
//         finalArr.push(compareArr[0]);
//         compareArr.shift();
//       }
//       console.log(
//         roundedChangeEnd + " this is what we got left, send it to the dimes"
//       );
//       console.log(finalArr);
//     }
//     return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
//   }

//   function dimesChecker() {
//     console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
//     if (true) {
//       let multCounter = compareArr[0][1] / 0.1;
//       let counter = 0;
//       while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
//         roundedChangeEnd -= 0.1;
//         multCounter--;
//         counter++;
//       }
dimesUsed = counter;//       
console.log("num of Dimes: " + counter);
//       if (roundedChangeEnd > 0) {
//         finalArr.push(compareArr[0]);
//         compareArr.shift();
//       }
//       console.log(
//         roundedChangeEnd + " this is what we got left, send it to the Nickels"
//       );
//       console.log(finalArr);
//     }
//     return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
//   }

//   function nickelsChecker() {
//     console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
//     if (true) {
//       let multCounter = compareArr[0][1] / 0.05;
//       let counter = 0;
//       while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
//         roundedChangeEnd -= 0.05;
//         multCounter--;
//         counter++;
//       }
nickelsUsed = counter;//       
console.log("num of Nickels: " + counter);
//       if (roundedChangeEnd > 0) {
//         finalArr.push(compareArr[0]);
//         compareArr.shift();
//       }
//       console.log(
//         roundedChangeEnd + " this is what we got left, send it to the Pennies"
//       );
//       console.log(finalArr);
//     }
//     return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
//   }

//   function penniesChecker() {
//     console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
//     if (true) {
//       let multCounter = compareArr[0][1] / 0.01;
//       let counter = 0;
//       while (roundedChangeEnd > 0.01 && multCounter * 0.01 > 0) {
//         roundedChangeEnd -= 0.01;
//         multCounter--;
//         counter++;
//       }
penniesUsed = counter;//      
 console.log("num of Pennies: " + counter);
//       if (roundedChangeEnd > 0) {
//         finalArr.push(compareArr[0]);
//         compareArr.shift();
//       }
//       console.log(roundedChangeEnd + " this is it boys");
//       console.log(finalArr);
//     }
//     return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
//   }
// }


  // function cidChecker() {
  //   let decreasingCash = numOfTwenties * 20;
  //   while(numOfHundreds * 100 >= compareArr[0][1] &&
  //   decreasingCash >= compareArr[0][1]) {
  // let count = 0;
  // // console.log('does something');
  // count += 100;
  //   }
  //   if(numOfTwenties * 20 >= compareArr[0][1]) {
  // let remains = 0;
  // /*then we will subtract the amoutn of[0][1] from our decreasing cash
  // we will do this by num20s * 20 - compareArr[0][1] */
// remains = numOfTwenties * 20 - compareArr[0][1];

// // TEST SECTION: testing count like in cs50 coin register
// // 6/6/23 11:55pm
// // ///////////////////////////////////////////////////////

/* test(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]);
// // ///////////////////////////////////////////////////////

// // code so far on actual tab
// // 6/7/23 5:16pm
// /* got the change to calculate correctly, now i need to translate that info into the obj preferred and status
//  if there is not enough money in the register I need it to say insufficent funds
//  if(count of bills > amount of bills in cid) {
//      return indufficient funds
//  }
// ALSO: if there are not enough 20s then find a way to use 10s instead unitl drawer is empty
// if the drawer does not have enough, advance to the next drawer. if no drawers have enought cover the change, then return insufficient funds for OBJ key
// - drawer does not show # of bills, instead amount of money with bills as a description of the money inside
// EX: hundreds: 300 = 3 blue strips

// */
// function checkCashRegister(price, cash, cid) {

//! COPY NUM 2!// Most up to date copy
//*SO FAR THIS CODE IS LOOKING SOLID. NEXT STEP IS TO NOW APPLY THE CHANGE CURRENCY AMOUNTS TO A FINAL OBJECT TO PASS OUR TESTS
//* REMEMBER: WE NEED TO PASS A TEST OF INSUFFICIENT FUNDS IN CID, RETURN THE KEYS AND VALUES OF THE TOTAL CHANGE FIVEN, SO
//* 3 $20 BILLS WILL BE REPRESENTED AS 'TWENTY': 60 FOR THE OBJECT

// 6/9/23 5:55PM
function checkCashRegister(price, cash, cid) {
  debugger;
  //   global vars
  let roundedChangeEnd;
  let finalArr = [];
  let compareArr = [];
  let compareArr2 = [];
  let emptyArr = [];
  let coinValueArr = [];
  const moneyValue = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];
  const reversedCID = cid.reverse();

  // find change to be given
  let change = cash - price;
  let roundedChange = Math.round(100 * change) / 100;
  roundedChangeEnd = roundedChange;
  console.log(roundedChange);

  // create array to store values of comparing cid to change
  reversedCID.forEach((item) => {
    if (roundedChange > item[1]) {
      compareArr.push(item);
    }
  });
  console.log("change available in drawer");
  console.log(compareArr);
  console.log(compareArr2 + " use this for the end");
  console.log(" ");
  // create array to store values of needed currency types
  moneyValue.forEach((item) => {
    if (roundedChange > item[1]) {
      emptyArr.push(item);
    }
  });

  for (let i = 0; i < emptyArr.length; i++) {
    const coinValue = emptyArr[i][1];
    coinValueArr.push(coinValue);
  }
  // sort array from biggest to smallest values
  coinValueArr = coinValueArr.sort((a, b) => b - a);

  //* series of functions that will determine the most ideal change to be distrubuted
  function hundredCount() {
    let skipper = false;
    let count = 0;
    while (roundedChange >= 100) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;
      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 100) {
      return count;
    }

    console.log(count + " 100");
    return count;
  }
  function twentyCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 20) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 20) {
      coinValueArr.shift();
      return count;
    }

    console.log(count + " 20");
    return count;
  }
  function tenCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 10) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 10) {
      coinValueArr.shift();
      return count;
    }

    console.log(count + " 10");
    return count;
  }
  function fiveCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 5) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 5) {
      coinValueArr.shift();
      return count;
    }

    console.log(count + " 5");
    return count;
  }
  function onesCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 1) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 1) {
      coinValueArr.shift();
      return count;
    }

    console.log(count + " 1");
    return count;
  }
  function quarterCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 0.25) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 0.25) {
      coinValueArr.shift();
      return count;
    }
    // console.log(coinValueArr);
    console.log(count + " .25");
    return count;
  }
  function dimeCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 0.1) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 0.1) {
      coinValueArr.shift();
      return count;
    }
    // console.log(coinValueArr);
    console.log(count + " .10");
    return count;
  }
  function nickelCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 0.05) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;
      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 0.05) {
      coinValueArr.shift();
      return count;
    }
    // console.log(coinValueArr);
    console.log(count + " .05");
    return count;
  }
  function pennyCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 0.01) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;
      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 0.01) {
      coinValueArr.shift();
      return count;
    }
    // console.log(coinValueArr);
    console.log(count + " .01");
    return count;
  }

  //* declaring said functions in vars to get most ideal change to be given: this returns the count of currency type needed(IDEALLY)
  console.log("ideal change to be given");
  const numOfHundreds = hundredCount();
  const numOfTwenties = twentyCount();
  const numOfTens = tenCount();
  const numOfFives = fiveCount();
  const numOfOnes = onesCount();
  const numOfQuarters = quarterCount();
  const numOfDimes = dimeCount();
  const numOfNickels = nickelCount();
  const numOfPennies = pennyCount();
  // checking the rounded change left to be sure funds are sufficient
  // if the currency type is in there, then we will take money out of that section until we no longer can while( currency >= baseAmount)
  //
  //? MAYBE MOVE TENS CHECKER VARS HERE SO THE CALL STACK READS IT FIRST
  function hundredsChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 100;
      let counter = 0;
      while (roundedChangeEnd > 100 && multCounter * 100 > 0) {
        roundedChangeEnd -= 100;
        multCounter--;
        counter++;
      }
      //  !!! right now I am fixing an issue where the condition for shift() the compareArr is broken due to falty conditions
      // !!! I think putting the conditions fixes the compareArr uissue , but may cause problems for the finalArr that we need to log our results
      hundredsUsed;
      console.log("num of 100s: " + counter);
      if (roundedChangeEnd < 100 && roundedChange > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the ones"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function twentiesChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with");
    //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 20;
      let counter = 0;
      while (roundedChangeEnd > 20 && multCounter * 20 > 0) {
        roundedChangeEnd -= 20;
        multCounter--;
        counter++;
      }
      twentiesUsed = counter;
      console.log("num of 20s: " + counter);
      if (roundedChange < 20 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the tens"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function tensChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with");
    //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 10;
      let counter = 0;
      while (roundedChangeEnd > 10 && multCounter * 10 > 0) {
        roundedChangeEnd -= 10;
        multCounter--;
        counter++;
      }
      tensUsed = counter;
      console.log("num of 10s: " + counter);
      if (roundedChange < 10 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the fives"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function fivesChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 5;
      let counter = 0;
      while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
        roundedChangeEnd -= 5;
        multCounter--;
        counter++;
      }
      fivesUsed = counter;
      console.log("num of 5s: " + counter);
      if (roundedChange < 5 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the ones"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function onesChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 1;
      let counter = 0;
      while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
        roundedChangeEnd -= 1;
        multCounter--;
        counter++;
      }
      onesUsed = counter;
      console.log("num of 1s: " + counter);
      if (roundedChange < 1 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the quarters"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function quartersChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 0.25;
      let counter = 0;
      while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
        roundedChangeEnd -= 0.25;
        multCounter--;
        counter++;
      }
      quartersUsed = counter;
      console.log("num of Quarters: " + counter);
      if (roundedChange < 0.25 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the dimes"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function dimesChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 0.1;
      let counter = 0;
      while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
        roundedChangeEnd -= 0.1;
        multCounter--;
        counter++;
      }
      dimesUsed = counter;
      console.log("num of Dimes: " + counter);
      if (roundedChange < 0.1 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the Nickels"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function nickelsChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 0.05;
      let counter = 0;
      while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
        roundedChangeEnd -= 0.05;
        multCounter--;
        counter++;
      }
      nickelsUsed = counter;
      console.log("num of Nickels: " + counter);
      if (roundedChange < 0.05 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the Pennies"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  //! find a way to make roundedChange actually round the last penny. Could just add one, or go through and fix the roundedChange ending
  //? maybe go to the 1000s place instead of just the 100s? or the other way around?
  function penniesChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 0.01;
      let counter = 0;
      while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
        roundedChangeEnd -= 0.01;
        multCounter--;
        counter++;
      }
      penniesUsed = counter;
      console.log("num of Pennies: " + counter);
      if (roundedChange < 0.009 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(roundedChangeEnd + " this is it boys");
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }

  //

  function checkCurrency100() {
    function hundredsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 100;
        let counter = 0;
        while (roundedChangeEnd > 100 && multCounter * 100 > 0) {
          roundedChangeEnd -= 100;
          multCounter--;
          counter++;
        }
        //  !!! right now I am fixing an issue where the condition for shift() the compareArr is broken due to falty conditions
        // !!! I think putting the conditions fixes the compareArr uissue , but may cause problems for the finalArr that we need to log our results
        hundredsUsed;
        console.log("num of 100s: " + counter);
        if (roundedChangeEnd < 100 && roundedChange > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the ones"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function twentiesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with");
      //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 20;
        let counter = 0;
        while (roundedChangeEnd > 20 && multCounter * 20 > 0) {
          roundedChangeEnd -= 20;
          multCounter--;
          counter++;
        }
        twentiesUsed = counter;
        console.log("num of 20s: " + counter);
        if (roundedChange < 20 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the tens"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function tensChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with");
      //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 10;
        let counter = 0;
        while (roundedChangeEnd > 10 && multCounter * 10 > 0) {
          roundedChangeEnd -= 10;
          multCounter--;
          counter++;
        }
        tensUsed = counter;
        console.log("num of 10s: " + counter);
        if (roundedChange < 10 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the fives"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function fivesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 5;
        let counter = 0;
        while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
          roundedChangeEnd -= 5;
          multCounter--;
          counter++;
        }
        fivesUsed = counter;
        console.log("num of 5s: " + counter);
        if (roundedChange < 5 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the ones"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function onesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 1;
        let counter = 0;
        while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
          roundedChangeEnd -= 1;
          multCounter--;
          counter++;
        }
        onesUsed = counter;
        console.log("num of 1s: " + counter);
        if (roundedChange < 1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd +
            " this is what we got left, send it to the quarters"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //  done

    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChange < 0.25 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChange < 0.1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2

  function checkCurrency20() {
    function twentiesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with");
      //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 20;
        let counter = 0;
        while (roundedChangeEnd > 20 && multCounter * 20 > 0) {
          roundedChangeEnd -= 20;
          multCounter--;
          counter++;
        }
        twentiesUsed = counter;
        console.log("num of 20s: " + counter);
        if (roundedChange < 20 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the tens"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function tensChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with");
      //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 10;
        let counter = 0;
        while (roundedChangeEnd > 10 && multCounter * 10 > 0) {
          roundedChangeEnd -= 10;
          multCounter--;
          counter++;
        }
        tensUsed = counter;
        console.log("num of 10s: " + counter);
        if (roundedChange < 10 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the fives"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function fivesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 5;
        let counter = 0;
        while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
          roundedChangeEnd -= 5;
          multCounter--;
          counter++;
        }
        fivesUsed = counter;
        console.log("num of 5s: " + counter);
        if (roundedChange < 5 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the ones"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function onesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 1;
        let counter = 0;
        while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
          roundedChangeEnd -= 1;
          multCounter--;
          counter++;
        }
        onesUsed = counter;
        console.log("num of 1s: " + counter);
        if (roundedChange < 1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd +
            " this is what we got left, send it to the quarters"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //  done

    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChange < 0.25 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChange < 0.1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2
  function checkCurrency10() {
    function tensChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with");
      //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 10;
        let counter = 0;
        while (roundedChangeEnd > 10 && multCounter * 10 > 0) {
          roundedChangeEnd -= 10;
          multCounter--;
          counter++;
        }
        tensUsed = counter;
        console.log("num of 10s: " + counter);
        if (roundedChange < 10 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the fives"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function fivesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 5;
        let counter = 0;
        while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
          roundedChangeEnd -= 5;
          multCounter--;
          counter++;
        }
        fivesUsed = counter;
        console.log("num of 5s: " + counter);
        if (roundedChange < 5 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the ones"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function onesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 1;
        let counter = 0;
        while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
          roundedChangeEnd -= 1;
          multCounter--;
          counter++;
        }
        onesUsed = counter;
        console.log("num of 1s: " + counter);
        if (roundedChange < 1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd +
            " this is what we got left, send it to the quarters"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //  done

    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChange < 0.25 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChange < 0.1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2
  function checkCurrency5() {
    function fivesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 5;
        let counter = 0;
        while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
          roundedChangeEnd -= 5;
          multCounter--;
          counter++;
        }
        fivesUsed = counter;
        console.log("num of 5s: " + counter);
        if (roundedChange < 5 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the ones"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function onesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 1;
        let counter = 0;
        while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
          roundedChangeEnd -= 1;
          multCounter--;
          counter++;
        }
        onesUsed = counter;
        console.log("num of 1s: " + counter);
        if (roundedChange < 1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd +
            " this is what we got left, send it to the quarters"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //  done

    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChange < 0.25 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChange < 0.1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2
  function checkCurrency1() {
    function onesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 1;
        let counter = 0;
        while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
          roundedChangeEnd -= 1;
          multCounter--;
          counter++;
        }
        onesUsed = counter;
        console.log("num of 1s: " + counter);
        if (roundedChange < 1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd +
            " this is what we got left, send it to the quarters"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //  done

    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChange < 0.25 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChange < 0.1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2
  function checkCurrencyC25() {
    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChange < 0.25 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChange < 0.1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2
  function checkCurrencyC10() {
    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChange < 0.1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2

  function checkCurrencyC5() {
    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2
  function checkCurrencyC1() {
    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2

  const currencyChecker100 = checkCurrency100();
  const currencyChecker20 = checkCurrency20();
  const currencyChecker10 = checkCurrency10();
  const currencyChecker5 = checkCurrency5();
  const currencyChecker1 = checkCurrency1();
  const currencyCheckerC25 = checkCurrencyC25();
  const currencyCheckerC10 = checkCurrencyC10();
  const currencyCheckerC5 = checkCurrencyC5();
  const currencyCheckerC1 = checkCurrencyC1();

  function cidHundredsCheck() {
    if (compareArr.flat().includes("ONE HUNDRED")) return currencyChecker100;
    else return;
  }
  function cidTwentiesCheck() {
    if (compareArr.flat().includes("TWENTY")) return currencyChecker20;
    else return;
  }

  function cidTensCheck() {
    if (compareArr.flat().includes("TEN")) return currencyChecker10;
    else return;
  }

  function cidFivesCheck() {
    if (compareArr.flat().includes("FIVE")) return currencyChecker5;
    else return;
  }

  function cidOnesCheck() {
    if (compareArr.flat().includes("ONE")) return currencyChecker1;
    else return;
  }

  function cidQuartersCheck() {
    if (compareArr.flat().includes("QUARTER")) return currencyCheckerC25;
    else return;
  }

  function cidDimesCheck() {
    if (compareArr.flat().includes("DIME")) return currencyCheckerC10;
    else return;
  }

  function cidNickelsCheck() {
    if (compareArr.flat().includes("NICKEL")) return currencyCheckerC5;
    else return;
  }
  function cidPenniesCheck() {
    if (compareArr.flat().includes("PENNY")) return currencyCheckerC1;
    else return;
  }
  const cidHundreds = cidHundredsCheck();
  const cidTwenties = cidTwentiesCheck();
  const cidTens = cidTensCheck();
  const cidFives = cidFivesCheck();
  const cidOnes = cidOnesCheck();
  const cidQuarters = cidQuartersCheck();
  const cidDimes = cidDimesCheck();
  const cidNickels = cidNickelsCheck();
  const cidPennies = cidPenniesCheck();

  const cidCheck100 = hundredsChecker();
  const cidCheck20 = twentiesChecker();
  const cidCheck10 = tensChecker();
  const cidCheck5 = fivesChecker();
  const cidCheck1 = onesChecker();
  const cidCheckC25 = quartersChecker();
  const cidCheckC10 = dimesChecker();
  const cidCheckC5 = nickelsChecker();
  const cidCheckC1 = penniesChecker();

  if (roundedChange > 0.01) {
    return console.log("indufficient");
  }
  let total = 0;
  for (let i = 0; i < compareArr.length; i++) {
    total += compareArr[i][1];
  }
  console.log(total);
  return roundedChange;
}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

// this is off bc it is using the ideal change nums and not the necessary change nums

const statusArrBuilder = () => {
  if (numOfHundreds > 0) {
    let amount = 0;
    amount = numOfHundreds * 100;
    statusArr.push(["ONE HUNDRED", amount]);
  }
  if (numOfTwenties > 0) {
    let amount = 0;
    amount = numOfTwenties * 20;
    statusArr.push(["TWENTY", amount]);
  }
  if (numOfTens > 0) {
    let amount = 0;
    amount = numOfTens * 10;
    statusArr.push(["TEN", amount]);
  }
  if (numOfFives > 0) {
    let amount = 0;
    amount = numOfFives * 5;
    statusArr.push(["FIVE", amount]);
  }
  if (numOfOnes > 0) {
    let amount = 0;
    amount = numOfOnes;
    statusArr.push(["ONE", amount]);
  }
  if (numOfQuarters > 0) {
    let amount = 0;
    amount = numOfQuarters * 0.25;
    statusArr.push(["QUARTERS", amount]);
  }
  if (numOfDimes > 0) {
    let amount = 0;
    amount = numOfDimes * 0.1;
    statusArr.push(["DIME", amount]);
  }
  if (numOfNickels > 0) {
    let amount = 0;
    amount = numOfNickels * 0.05;
    statusArr.push(["NICKEL", amount]);
  }
  if (numOfPennies > 0) {
    let amount = 0;
    amount = numOfPennies * 0.01;
    statusArr.push(["PENNY", amount]);
  }
  console.log(statusArr);
  return statusArr;
};

statusArrBuilder();

// ////////////////////////////////////////////// ////////////////////////////////////////////// ////////////////////////////////////////////
//! COPY NUM 3
// 6/11/23 9:21PM
function checkCashRegister(price, cash, cid) {
  debugger;
  //   global vars
  let hundredsUsed = 0;
  let twentiesUsed = 0;
  let tensUsed = 0;
  let fivesUsed = 0;
  let onesUsed = 0;
  let quartersUsed = 0;
  let dimesUsed = 0;
  let nickelsUsed = 0;
  let penniesUsed = 0;

  let finalAnswer;
  let roundedChangeEnd;
  let finalArr = [];
  let statusArr = [];
  let compareArr = [];
  let compareArr2 = [];
  let emptyArr = [];
  let coinValueArr = [];
  const moneyValue = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];
  const reversedCID = cid.reverse();

  // find change to be given
  let change = cash - price;
  let roundedChange = Math.round(100 * change) / 100;
  roundedChangeEnd = roundedChange;
  console.log(roundedChange);

  // create array to store values of comparing cid to change
  reversedCID.forEach((item) => {
    if (roundedChange > item[1]) {
      compareArr.push(item);
    }
  });
  compareArr2 = compareArr.slice();
  console.log("change available in drawer");
  console.log(compareArr);
  console.log(" ");
  // create array to store values of needed currency types
  moneyValue.forEach((item) => {
    if (roundedChange > item[1]) {
      emptyArr.push(item);
    }
  });

  for (let i = 0; i < emptyArr.length; i++) {
    const coinValue = emptyArr[i][1];
    coinValueArr.push(coinValue);
  }
  // sort array from biggest to smallest values
  coinValueArr = coinValueArr.sort((a, b) => b - a);

  //* series of functions that will determine the most ideal change to be distrubuted
  function hundredCount() {
    let skipper = false;
    let count = 0;
    while (roundedChange >= 100) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;
      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 100) {
      return count;
    }

    console.log(count + " 100");
    return count;
  }
  function twentyCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 20) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 20) {
      coinValueArr.shift();
      return count;
    }

    console.log(count + " 20");
    return count;
  }
  function tenCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 10) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 10) {
      coinValueArr.shift();
      return count;
    }

    console.log(count + " 10");
    return count;
  }
  function fiveCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 5) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 5) {
      coinValueArr.shift();
      return count;
    }

    console.log(count + " 5");
    return count;
  }
  function onesCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 1) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 1) {
      coinValueArr.shift();
      return count;
    }

    console.log(count + " 1");
    return count;
  }
  function quarterCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 0.25) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 0.25) {
      coinValueArr.shift();
      return count;
    }
    // console.log(coinValueArr);
    console.log(count + " .25");
    return count;
  }
  function dimeCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 0.1) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;

      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 0.1) {
      coinValueArr.shift();
      return count;
    }
    // console.log(coinValueArr);
    console.log(count + " .10");
    return count;
  }
  function nickelCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 0.05) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;
      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 0.05) {
      coinValueArr.shift();
      return count;
    }
    // console.log(coinValueArr);
    console.log(count + " .05");
    return count;
  }
  function pennyCount() {
    let skipper = false;

    let count = 0;
    while (roundedChange >= 0.01) {
      roundedChange = roundedChange - coinValueArr[0];
      roundedChange = Math.round(100 * roundedChange) / 100;
      count++;
      skipper = true;
    }
    if (skipper) {
      coinValueArr.shift();
    } else if (roundedChange < 0.01) {
      coinValueArr.shift();
      return count;
    }
    // console.log(coinValueArr);
    console.log(count + " .01");
    return count;
  }

  //* declaring said functions in vars to get most ideal change to be given: this returns the count of currency type needed(IDEALLY)
  console.log("ideal change to be given");
  const numOfHundreds = hundredCount();
  const numOfTwenties = twentyCount();
  const numOfTens = tenCount();
  const numOfFives = fiveCount();
  const numOfOnes = onesCount();
  const numOfQuarters = quarterCount();
  const numOfDimes = dimeCount();
  const numOfNickels = nickelCount();
  const numOfPennies = pennyCount();
  // checking the rounded change left to be sure funds are sufficient
  // if the currency type is in there, then we will take money out of that section until we no longer can while( currency >= baseAmount)
  //
  //? MAYBE MOVE TENS CHECKER VARS HERE SO THE CALL STACK READS IT FIRST
  function hundredsChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 100;
      let counter = 0;
      while (roundedChangeEnd > 100 && multCounter * 100 > 0) {
        roundedChangeEnd -= 100;
        multCounter--;
        counter++;
      }
      //  !!! right now I am fixing an issue where the condition for shift() the compareArr is broken due to falty conditions
      // !!! I think putting the conditions fixes the compareArr uissue , but may cause problems for the finalArr that we need to log our results
      hundredsUsed = counter;
      console.log("num of 100s: " + counter);
      if (roundedChangeEnd < 100 && roundedChange > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the ones"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function twentiesChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with");
    //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 20;
      let counter = 0;
      while (roundedChangeEnd > 20 && multCounter * 20 > 0) {
        roundedChangeEnd -= 20;
        multCounter--;
        counter++;
      }
      twentiesUsed = counter;
      console.log("num of 20s: " + counter);
      if (roundedChange < 20 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the tens"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function tensChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with");
    //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 10;
      let counter = 0;
      while (roundedChangeEnd > 10 && multCounter * 10 > 0) {
        roundedChangeEnd -= 10;
        multCounter--;
        counter++;
      }
      tensUsed = counter;
      console.log("num of 10s: " + counter);
      if (roundedChange < 10 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the fives"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function fivesChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 5;
      let counter = 0;
      while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
        roundedChangeEnd -= 5;
        multCounter--;
        counter++;
      }
      fivesUsed = counter;
      console.log("num of 5s: " + counter);
      if (roundedChange < 5 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the ones"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function onesChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 1;
      let counter = 0;
      while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
        roundedChangeEnd -= 1;
        multCounter--;
        counter++;
      }
      onesUsed = counter;
      console.log("num of 1s: " + counter);
      if (roundedChange < 1 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the quarters"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function quartersChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 0.25;
      let counter = 0;
      while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
        roundedChangeEnd -= 0.25;
        multCounter--;
        counter++;
      }
      quartersUsed = counter;
      console.log("num of Quarters: " + counter);
      if (roundedChange < 0.25 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the dimes"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function dimesChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 0.1;
      let counter = 0;
      while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
        roundedChangeEnd -= 0.1;
        multCounter--;
        counter++;
      }
      dimesUsed = counter;
      console.log("num of Dimes: " + counter);
      if (roundedChange < 0.1 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the Nickels"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function nickelsChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 0.05;
      let counter = 0;
      while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
        roundedChangeEnd -= 0.05;
        multCounter--;
        counter++;
      }
      nickelsUsed = counter;
      console.log("num of Nickels: " + counter);
      if (roundedChange < 0.05 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(
        roundedChangeEnd + " this is what we got left, send it to the Pennies"
      );
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }
  function penniesChecker() {
    console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
    if (true) {
      let multCounter = compareArr[0][1] / 0.01;
      let counter = 0;
      while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
        roundedChangeEnd -= 0.01;
        multCounter--;
        counter++;
      }
      penniesUsed = counter;
      console.log("num of Pennies: " + counter);
      if (roundedChange < 0.009 && roundedChangeEnd > 0) {
        finalArr.push(compareArr[0]);
        compareArr.shift();
      }
      console.log(roundedChangeEnd + " this is it boys");
      console.log(finalArr);
    }
    return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
  }

  //

  function checkCurrency100() {
    function hundredsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 100;
        let counter = 0;
        while (roundedChangeEnd > 100 && multCounter * 100 > 0) {
          roundedChangeEnd -= 100;
          multCounter--;
          counter++;
        }
        //  !!! right now I am fixing an issue where the condition for shift() the compareArr is broken due to falty conditions
        // !!! I think putting the conditions fixes the compareArr uissue , but may cause problems for the finalArr that we need to log our results
        hundredsUsed = counter;
        console.log("num of 100s: " + counter);
        if (roundedChangeEnd < 100 && roundedChange > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the ones"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function twentiesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with");
      //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 20;
        let counter = 0;
        while (roundedChangeEnd > 20 && multCounter * 20 > 0) {
          roundedChangeEnd -= 20;
          multCounter--;
          counter++;
        }
        twentiesUsed = counter;
        console.log("num of 20s: " + counter);
        if (roundedChange < 20 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the tens"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function tensChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with");
      //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 10;
        let counter = 0;
        while (roundedChangeEnd > 10 && multCounter * 10 > 0) {
          roundedChangeEnd -= 10;
          multCounter--;
          counter++;
        }

        tensUsed = counter;
        console.log("num of 10s: " + counter);
        if (roundedChange < 10 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the fives"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function fivesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 5;
        let counter = 0;
        while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
          roundedChangeEnd -= 5;
          multCounter--;
          counter++;
        }
        fivesUsed = counter;
        console.log("num of 5s: " + counter);
        if (roundedChange < 5 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the ones"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function onesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 1;
        let counter = 0;
        while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
          roundedChangeEnd -= 1;
          multCounter--;
          counter++;
        }
        onesUsed = counter;
        console.log("num of 1s: " + counter);
        if (roundedChange < 1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd +
            " this is what we got left, send it to the quarters"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //  done

    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChange < 0.25 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChange < 0.1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2

  function checkCurrency20() {
    function twentiesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with");
      //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 20;
        let counter = 0;
        while (roundedChangeEnd > 20 && multCounter * 20 > 0) {
          roundedChangeEnd -= 20;
          multCounter--;
          counter++;
        }
        twentiesUsed = counter;
        console.log("num of 20s: " + counter);
        if (roundedChange < 20 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the tens"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function tensChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with");
      //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 10;
        let counter = 0;
        while (roundedChangeEnd > 10 && multCounter * 10 > 0) {
          roundedChangeEnd -= 10;
          multCounter--;
          counter++;
        }
        tensUsed = counter;
        console.log("num of 10s: " + counter);
        if (roundedChange < 10 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the fives"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function fivesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 5;
        let counter = 0;
        while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
          roundedChangeEnd -= 5;
          multCounter--;
          counter++;
        }
        fivesUsed = counter;
        console.log("num of 5s: " + counter);
        if (roundedChange < 5 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the ones"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function onesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 1;
        let counter = 0;
        while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
          roundedChangeEnd -= 1;
          multCounter--;
          counter++;
        }
        onesUsed = counter;
        console.log("num of 1s: " + counter);
        if (roundedChange < 1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd +
            " this is what we got left, send it to the quarters"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //  done

    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChange < 0.25 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChange < 0.1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2
  function checkCurrency10() {
    function tensChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with");
      //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 10;
        let counter = 0;
        while (roundedChangeEnd > 10 && multCounter * 10 > 0) {
          roundedChangeEnd -= 10;
          multCounter--;
          counter++;
        }
        tensUsed = counter;
        console.log("num of 10s: " + counter);
        if (roundedChange < 10 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the fives"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function fivesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 5;
        let counter = 0;
        while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
          roundedChangeEnd -= 5;
          multCounter--;
          counter++;
        }
        fivesUsed = counter;
        console.log("num of 5s: " + counter);
        if (roundedChange < 5 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the ones"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function onesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 1;
        let counter = 0;
        while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
          roundedChangeEnd -= 1;
          multCounter--;
          counter++;
        }
        onesUsed = counter;
        console.log("num of 1s: " + counter);
        if (roundedChange < 1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd +
            " this is what we got left, send it to the quarters"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //  done

    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChange < 0.25 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChange < 0.1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2
  function checkCurrency5() {
    function fivesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 5;
        let counter = 0;
        while (roundedChangeEnd > 5 && multCounter * 5 > 0) {
          roundedChangeEnd -= 5;
          multCounter--;
          counter++;
        }
        fivesUsed = counter;
        console.log("num of 5s: " + counter);
        if (roundedChange < 5 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the ones"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function onesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 1;
        let counter = 0;
        while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
          roundedChangeEnd -= 1;
          multCounter--;
          counter++;
        }
        onesUsed = counter;
        console.log("num of 1s: " + counter);
        if (roundedChange < 1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd +
            " this is what we got left, send it to the quarters"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //  done

    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChange < 0.25 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChange < 0.1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2
  function checkCurrency1() {
    function onesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 1;
        let counter = 0;
        while (roundedChangeEnd > 1 && multCounter * 1 > 0) {
          roundedChangeEnd -= 1;
          multCounter--;
          counter++;
        }
        onesUsed = counter;
        console.log("num of 1s: " + counter);
        if (roundedChange < 1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd +
            " this is what we got left, send it to the quarters"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //  done

    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChange < 0.25 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChange < 0.1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2
  function checkCurrencyC25() {
    function quartersChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.25;
        let counter = 0;
        while (roundedChangeEnd > 0.25 && multCounter * 0.25 > 0) {
          roundedChangeEnd -= 0.25;
          multCounter--;
          counter++;
        }
        quartersUsed = counter;
        console.log("num of Quarters: " + counter);
        if (roundedChange < 0.25 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the dimes"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChange < 0.1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2
  function checkCurrencyC10() {
    function dimesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.1;
        let counter = 0;
        while (roundedChangeEnd > 0.1 && multCounter * 0.1 > 0) {
          roundedChangeEnd -= 0.1;
          multCounter--;
          counter++;
        }
        dimesUsed = counter;
        console.log("num of Dimes: " + counter);
        if (roundedChange < 0.1 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Nickels"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2

  function checkCurrencyC5() {
    function nickelsChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.05;
        let counter = 0;
        while (roundedChangeEnd > 0.05 && multCounter * 0.05 > 0) {
          roundedChangeEnd -= 0.05;
          multCounter--;
          counter++;
        }
        nickelsUsed = counter;
        console.log("num of Nickels: " + counter);
        if (roundedChange < 0.05 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(
          roundedChangeEnd + " this is what we got left, send it to the Pennies"
        );
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    //   done

    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2
  function checkCurrencyC1() {
    function penniesChecker() {
      console.log(roundedChangeEnd + " this is what we are starting with"); //  changing this to always be true for sake of testing, likely removing this and placing these functions into the includes test above
      if (true) {
        let multCounter = compareArr[0][1] / 0.01;
        let counter = 0;
        while (roundedChangeEnd > 0.009 && multCounter * 0.01 > 0) {
          roundedChangeEnd -= 0.01;
          multCounter--;
          counter++;
        }
        penniesUsed = counter;
        console.log("num of Pennies: " + counter);
        if (roundedChange < 0.009 && roundedChangeEnd > 0) {
          finalArr.push(compareArr[0]);
          compareArr.shift();
        }
        console.log(roundedChangeEnd + " this is it boys");
        console.log(finalArr);
      }
      return (roundedChangeEnd = Math.round(roundedChangeEnd * 100) / 100);
    }
    // done
  }
  //   EDITED2

  const currencyChecker100 = checkCurrency100();
  const currencyChecker20 = checkCurrency20();
  const currencyChecker10 = checkCurrency10();
  const currencyChecker5 = checkCurrency5();
  const currencyChecker1 = checkCurrency1();
  const currencyCheckerC25 = checkCurrencyC25();
  const currencyCheckerC10 = checkCurrencyC10();
  const currencyCheckerC5 = checkCurrencyC5();
  const currencyCheckerC1 = checkCurrencyC1();

  function cidHundredsCheck() {
    if (compareArr.flat().includes("ONE HUNDRED")) return currencyChecker100;
    else return;
  }
  function cidTwentiesCheck() {
    if (compareArr.flat().includes("TWENTY")) return currencyChecker20;
    else return;
  }

  function cidTensCheck() {
    if (compareArr.flat().includes("TEN")) return currencyChecker10;
    else return;
  }

  function cidFivesCheck() {
    if (compareArr.flat().includes("FIVE")) return currencyChecker5;
    else return;
  }

  function cidOnesCheck() {
    if (compareArr.flat().includes("ONE")) return currencyChecker1;
    else return;
  }

  function cidQuartersCheck() {
    if (compareArr.flat().includes("QUARTER")) return currencyCheckerC25;
    else return;
  }

  function cidDimesCheck() {
    if (compareArr.flat().includes("DIME")) return currencyCheckerC10;
    else return;
  }

  function cidNickelsCheck() {
    if (compareArr.flat().includes("NICKEL")) return currencyCheckerC5;
    else return;
  }
  function cidPenniesCheck() {
    if (compareArr.flat().includes("PENNY")) return currencyCheckerC1;
    else return;
  }
  const cidHundreds = cidHundredsCheck();
  const cidTwenties = cidTwentiesCheck();
  const cidTens = cidTensCheck();
  const cidFives = cidFivesCheck();
  const cidOnes = cidOnesCheck();
  const cidQuarters = cidQuartersCheck();
  const cidDimes = cidDimesCheck();
  const cidNickels = cidNickelsCheck();
  const cidPennies = cidPenniesCheck();

  const cidCheck100 = hundredsChecker();
  const cidCheck20 = twentiesChecker();
  const cidCheck10 = tensChecker();
  const cidCheck5 = fivesChecker();
  const cidCheck1 = onesChecker();
  const cidCheckC25 = quartersChecker();
  const cidCheckC10 = dimesChecker();
  const cidCheckC5 = nickelsChecker();
  const cidCheckC1 = penniesChecker();

  // statusArrBuilder, will use later to create change response in open status
  const statusArrBuilder = () => {
    if (hundredsUsed > 0) {
      let amount = 0;
      amount = hundredsUsed * 100;
      statusArr.push(["ONE HUNDRED", amount]);
    }
    if (twentiesUsed > 0) {
      let amount = 0;
      amount = twentiesUsed * 20;
      statusArr.push(["TWENTY", amount]);
    }
    if (tensUsed > 0) {
      let amount = 0;
      amount = tensUsed * 10;
      statusArr.push(["TEN", amount]);
    }
    if (fivesUsed > 0) {
      let amount = 0;
      amount = fivesUsed * 5;
      statusArr.push(["FIVE", amount]);
    }
    if (onesUsed > 0) {
      let amount = 0;
      amount = onesUsed;
      statusArr.push(["ONE", amount]);
    }
    if (quartersUsed > 0) {
      let amount = 0;
      amount = quartersUsed * 0.25;
      statusArr.push(["QUARTERS", amount]);
    }
    if (dimesUsed > 0) {
      let amount = 0;
      amount = dimesUsed * 0.1;
      statusArr.push(["DIME", amount]);
    }
    if (nickelsUsed > 0) {
      let amount = 0;
      amount = nickelsUsed * 0.05;
      statusArr.push(["NICKEL", amount]);
    }
    if (penniesUsed > 0) {
      let amount = 0;
      amount = penniesUsed * 0.01;
      statusArr.push(["PENNY", amount]);
    }
    console.log(statusArr);
    return statusArr;
  };

  // create class and constructor functions for later
  class Status {
    constructor(status, change) {
      this.status = status;
      this.change = change;
    }
  }

  // setting conditions for register status
  // if the code is left with more than a penny, then we will not get exact change and it will be insufficient funds
  if (roundedChange > 0.01) {
    const insufficientStatus = new Status("INSUFFICIENT_FUNDS", []);
    finalAnswer = insufficientStatus;
    // return insufficientStatus;
  }
  // for loop to get the maximum amount of change in the cid
  let total = 0;
  for (let i = 0; i < compareArr2.length; i++) {
    total += compareArr2[i][1];
  }
  // added a buffer of half a penny for exact change since rounding has been an issue throughout
  if (change < total + 0.005 && change > total - 0.005) {
    const closedStatus = new Status("CLOSED", compareArr2);
    finalAnswer = closedStatus;
    // return closedStatus;
  }
  // hardest part, need to make array show ONLY the values that were used in the compareArr to calculate the change from cid
  else {
    const openStatus = new Status("OPEN", statusArrBuilder());
    finalAnswer = openStatus;
    // return openStatus;
  }
  console.log(" ");
  console.log(" ");
  console.log(" ");
  console.log(" ");
  console.log(finalAnswer);
  return finalAnswer;
}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);


// //////////////////////////// //////////////////////////// //////////////////////////// //////////////////////////