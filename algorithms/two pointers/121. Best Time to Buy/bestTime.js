/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

function bestTimetoTrade(prices) {
  /**
   * idea: intialize min buy price to maximum possible
   and max profit to 0
   now, we have to loop through the array obviouls.
   but then, we should check if we have found a new lower price, if we do, upfdate the new price. 
   we don;t have to do anything woith our profit. that does not do anything for us. 

   but them if we have not found na new min POrice, then we can simply check if we have found a new
   max profit. if truly we have, then update it. 

   the tricky part is, when we have updated the new min price, what if there is no high sales orice that will give us the a larger max profit. well, thankfully, we don;t have to worry about that since we have held on to our last maxProfit and we are never overwriting that unless we have a new maxProfit bigger than it. and the max profit will not be wrong because it was based of the lowest buy price ot the time of calculating it. that boy was the hot cake back then. haha, still is in retrospect. 

        */
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;
  for (const price of prices) {

    if (price < minPrice) {
      minPrice = price;
    } else if ((price - minPrice) > maxProfit) {
      maxProfit = price - minPrice;
    }
  }
  return maxProfit;


}


const testCase1 = [7, 1, 5, 3, 6, 4]

console.log(bestTimetoTrade(testCase1)) //5