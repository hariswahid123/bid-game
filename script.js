let initAmount = document.getElementById("heading");
let bidMessage = document.getElementById("bidMessage");

initAmount.innerHTML = 1000;

let userBidAmount;
let userBidNumber;

function playGame() {
    if (Number(initAmount.innerHTML) <= 0) {
        alert("Your account balance is 0. You cannot place more bids.");
        return;
    }

    userBidAmount = +prompt("Enter your bid amount");

     if(userBidAmount === 0){
        alert("enter bid amount");
        return;
    }

    if(userBidAmount > Number(initAmount.innerHTML)){
        alert("You cannot bid more than your current balance");
        return;
    }

    
    userBidNumber = +prompt("What is your bid number from 1 to 10");

    if(userBidNumber === 0){
        alert("enter bid number");
        return;
    }
    
    let gnBid = generatedBid();
    let bidMatched = isBidMatched(userBidNumber, gnBid);
    showBidMessage(bidMatched, userBidAmount);
}

function generatedBid() {
    let randomNumber = Math.ceil(Math.random() * 10);
    return randomNumber;
}

function isBidMatched(gnBid, userBidNumber) {
    return gnBid === userBidNumber;
}

function showBidMessage(bidMatched, userBidAmount) {
    if (bidMatched) {
        initAmount.innerHTML = Number(initAmount.innerHTML) + userBidAmount;
        bidMessage.innerHTML = "Congrats! You won the bid. " + userBidAmount + " has been added to your account.";
    } else {
        initAmount.innerHTML = Number(initAmount.innerHTML) - userBidAmount;

        if (Number(initAmount.innerHTML) <= 0) {
            bidMessage.innerHTML = "Sorry! You lost the bid and your balance is now 0.";
            alert("Your balance is now 0. You cannot play more bids.");
        } else {
            bidMessage.innerHTML = "Sorry! You lost the bid. " + userBidAmount + " has been deducted from your account.";
        }
    }
}
