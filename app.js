function convertToUSD(amountInManat) {
  
  var exchangeRate = 0.59;
  var amountInUSD = amountInManat * exchangeRate;
  return amountInUSD.toFixed(2); 
}


document.getElementById("convertButton").addEventListener("click", function() {
  
  var amountInManat = parseFloat(prompt("Məbləği manatla daxil edin:"));

  
  var amountInUSD = convertToUSD(amountInManat);

  
  document.getElementById("netice").innerText = "Məbləğ: $" + amountInUSD + " (USD)";
});



