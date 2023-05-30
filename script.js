const getLink = document.getElementById("link");

// add document event listener
getLink.addEventListener("click", function () {
  const getTextLink = document.getElementById("link");
  let link = "rizkyramadhanrpd@gmail.com"; // this is the part of the text to be copied

  // Salin link ke clipboard
  let tempInput = document.createElement("input");
  tempInput.value = link;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  getTextLink.innerHTML = "email address has copied"; // if you have clicked automatically the previous sentence will be replaced with this sentence
});

// alerts for e-commerce area notifications (only temporary)
function comingSoon() {
  alert("Sorry, I don't have an ecommerce website yet. I will make it one day.");
}

/*
  <!> Reminder <!>

  if you want to use the entire code here, please don't copy and paste! You may copy and paste anything here, 
  but may not reproduce the template and appearance of this website. appreciate the maker. Thank You.
  
*/
