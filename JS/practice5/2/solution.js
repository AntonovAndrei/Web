function solve() {
  var htmlSpan = document.getElementById('result');
  htmlSpan.textContent = "";
  var text = document.getElementById('text').value.toLowerCase().trim();
  var words = text.split(" ");
  var convention = document.getElementById('naming-convention').value;
  
  if(convention == "Camel Case"){
    htmlSpan.textContent += words.shift();

    words.forEach(element => {
      htmlSpan.textContent += element[0].toUpperCase() + element.slice(1);
    });
  }
  else if(convention == "Pascal Case"){
    words.forEach(element => {
      htmlSpan.textContent += element[0].toUpperCase() + element.slice(1);
    });
  }
  else{
    htmlSpan.textContent += "Error!"; 
  }
}