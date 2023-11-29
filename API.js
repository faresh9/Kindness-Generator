
function generateSentence() {

let sentences = [ 
    "Give an unexpected compliment." , "Plant a tree.", "Let someone cut in front of you in line","Pay the toll for the car behind you.","Slow down so someone can merge in front of you in traffic.","Let someone else take that primo parking spot.","Give someone your seat on a crowded bus or subway.", "Put coins in an expired parking meter.","Give up your seat on a plane so other travelers can sit together.","Buy a warm meal for someone in need.","Help someone struggling to carry their grocery bags.","Stop to assist someone who looks lost.", "Offer to return a stranger's grocery cart to the front of the store.",
    "Donate flowers to a nursing home.", 
    "Hand out disposable water bottles to people working outside on a hot day.","Buy a gift card to hand to someone on your way out of the coffee shop.",
    "Leave a great coupon next to that item in the grocery store.","Pick up a piece of litter on the street and throw it out.",
    "Pass along a compliment to a service worker's boss.","Take the time to write a great online review for a restaurant you love."
    ,"Leave a positive comment on a news article or blog post.",
    "Keep an extra umbrella in your car to give to someone stuck in the rain","Buy lemonade from a child's lemonade stand.","Visit a nursing home — read books to or play board games with residents.",
    "Send a care package to a service member.","Bring treats to your local fire station.","Write a thank you note to your mail carrier.",
    "Talk to a stranger at a party who looks like they don't know anyone.", "Smile at someone who looks sad."
];

const generatedSentence = getRandomElementFromArray(sentences);

const sentenceElement = document.getElementById('generatedSentence');
sentenceElement.innerHTML = generatedSentence;

const machineElement = document.getElementById('machine');

// Apply the translation animation to move the machine to the left
machineElement.style.transform = 'translateX(-100%)';

// Reset the translation after a short delay
setTimeout(() => {
  machineElement.style.transform = 'translateX(0)';
}, 500);
}

// Function to get a random element from an array (as provided in the previous examples)
function getRandomElementFromArray(arr) {
if (arr.length === 0) {
  return null;
}

const randomIndex = Math.floor(Math.random() * arr.length);
return arr[randomIndex];
}