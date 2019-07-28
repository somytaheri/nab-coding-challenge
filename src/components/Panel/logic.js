const calculateProfit = data => {
  let currencyData = data.map(currency => currency);

  let currencyProfit = currencyData.map(itme => {
    let currency = itme.currency;
    let date = itme.date;
    // sort the data from lowest to highest
    let sorted = [...itme.quotes].sort((a, b) => (a.price > b.price ? 1 : -1));
    let highest;
    let indexOfHeighest;
    let j = 0;

    let sortArray = function(sorted) {
      let length = sorted.length;
      highest = sorted[length - 1];

      //find index of highest quote inside the main data list before sorting
      indexOfHeighest = itme.quotes.findIndex(i => i.price === highest.price);

      // If highest quote is first in the list remove it from the data list as you can not sell before buying
      if (indexOfHeighest === j) {
        let length = sorted.length - 1;
        let newsorted = sorted.filter((data, index) => index !== length);
        highest = newsorted[newsorted.length - 1];
        sorted = [...newsorted];
      } else {
        return sorted;
      }

      if (length <= 1) {
        return sorted;
      } else {
        j++;
        return sortArray(sorted);
      }
    };
    // call sortArray until highest is not on the top of the data list
    sorted = sortArray(sorted);

    if (sorted.length > 0) {
      //lowest quote should be before the highest in the data list
      let filtered = sorted.filter(data => data.time < highest.time);

      //sort the list based on remaining data
      let sortedfiltered = filtered.sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
      let lowest = sortedfiltered[0];
      let profit = { date, currency, lowest, highest };
      return profit;
    } else {
      let profit = { date, currency };
      return profit;
    }
  });

  return currencyProfit;
};

export default calculateProfit;
