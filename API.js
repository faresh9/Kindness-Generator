let sentences = [ 
    "Give an unexpected compliment." , "Plant a tree.", "Let someone cut in front of you in line","Pay the toll for the car behind you.","Slow down so someone can merge in front of you in traffic.","Let someone else take that primo parking spot.","Give someone your seat on a crowded bus or subway.", "Put coins in an expired parking meter.","Give up your seat on a plane so other travelers can sit together.","Buy a warm meal for someone in need.","Help someone struggling to carry their grocery bags.","Stop to assist someone who looks lost.", "Say something encouraging to a parent who's struggling with rambunctious kids in a restaurant or grocery store.","Offer to return a stranger's grocery cart to the front of the store.",
    "Keep plastic bags filled with snacks and sample-size toiletries in your car to give to the homeless" , "Donate flowers to a nursing home.", 
    "Hand out disposable water bottles to people working outside on a hot day.","Buy a gift card to hand to someone on your way out of the coffee shop.",
    "Leave a great coupon next to that item in the grocery store.","Pick up a piece of litter on the street and throw it out.",
    "Pass along a compliment to a service worker's boss.","Take the time to write a great online review for a restaurant you love.",
    "Pay for the meal of the people at the next table,Leave before they realize what you've done","Leave a positive comment on a news article or blog post.",
    "Keep an extra umbrella in your car to give to someone stuck in the rain","Buy lemonade from a child's lemonade stand.","Visit a nursing home — read books to or play board games with residents.",
    "Send a care package to a service member.","Bring treats to your local fire station.","Write a thank you note to your mail carrier.",
    "alk to a stranger at a party who looks like they don't know anyone.", "Smile at someone who looks sad."

];
 //random sentence from array , and display it in the html page 
 function getRandomElementFromArray(arr) {
    // Check if the array is not empty
    if (arr.length === 0) {
      return null; // Return null if the array is empty
    }
  
    // Generate a random index within the array length
    const randomIndex = Math.floor(Math.random() * arr.length);
  
    // Return the random element
    return arr[randomIndex];
  }