document.getElementById("historyButton")
.addEventListener("click", function(){
    document.getElementById("historyButton").classList.add("bg-green-200");
    document.getElementById("donationButton").classList.remove("bg-green-200");
    document.getElementById("sectionContainer").classList.add("hidden");
    document.getElementById("historyContainer").classList.remove("hidden");
});
document.getElementById("donationButton")
.addEventListener("click", function(){
    document.getElementById("historyButton").classList.remove("bg-green-200");
    document.getElementById("donationButton").classList.add("bg-green-200");
    document.getElementById("sectionContainer").classList.remove("hidden");
    document.getElementById("historyContainer").classList.add("hidden");
});

function message(){
    document.getElementById("congratesMessage").classList.remove("hidden");
};

document.getElementById("sectionOneDonationButton")
.addEventListener("click", function(){
    let sectionOnein = document.getElementById("sectionOneInput").value;

    function isNumberOnly(str) {
        const num = Number(str);
        return Number.isInteger(num) && num.toString() === str;
      }
      let numCheck = isNumberOnly(sectionOnein);

      if (numCheck === true && sectionOnein > 0) {
            let newBalance = parseInt(document.getElementById("balance").innerText);
            let donatedFund = parseInt(document.getElementById("noakhaliFund").innerText);
            let substracted = newBalance - sectionOnein;
            let donationAmount = donatedFund + sectionOnein;
            document.getElementById("balance").innerText = substracted;
            document.getElementById("noakhaliFund").innerText = donationAmount;
            document.getElementById("historyText").innerHTML = "hole";
            message();
            
      } else {
        alert("invalid");
      }
});
document.getElementById("sectionTwoDonationButton")
.addEventListener("click", function(){
    message();
});
document.getElementById("sectionThreeDonationButton")
.addEventListener("click", function(){
    message();
});

function close() {
    document.getElementById("congratesMessage")
    .addEventListener("click", function(){
    document.getElementById("congratesMessage").classList.add("hidden");
});
};
close();