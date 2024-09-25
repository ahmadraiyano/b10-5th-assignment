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

function isNumberOnly(str) {
    const num = Number(str);
    return Number.isInteger(num) && num.toString() === str;
  };

document.getElementById("sectionOneDonationButton")
.addEventListener("click", function(event){
    event.preventDefault();
      let sectionOneIn = document.getElementById("sectionOneInput").value;
      let sectionOneInNum = parseFloat(sectionOneIn);
      let numCheck = isNumberOnly(sectionOneIn);
      if (numCheck === true && sectionOneIn > 0) {
           let donatedNoakhali = document.getElementById("noakhaliFund").innerText;
           let donatedNoakhaliAmount = parseFloat(donatedNoakhali);
           let newBalance = document.getElementById("balance").innerText;
           let newBalanceAmount = parseFloat(newBalance);
           
           let subAmount = newBalanceAmount - sectionOneInNum;
           document.getElementById("balance").innerText = subAmount;

           let addAmount = donatedNoakhaliAmount + sectionOneInNum;
           document.getElementById("noakhaliFund").innerText = addAmount;

           let inputDiv = document.createElement("div");
           inputDiv.classList.add("border-2", "p-4");

           let heading = document.createElement("h2");
           heading.classList.add("font-bold");
           heading.innerText = sectionOneInNum + " Taka is Donated for " + document.getElementById("noakhaliHeading").innerText;

           let date = new Date();
           let p = document.createElement("p");
           p.innerText = date;

           let historyTextDiv = document.getElementById("historyText");
           historyTextDiv.appendChild(inputDiv);
           inputDiv.appendChild(heading);
           inputDiv.appendChild(p);

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