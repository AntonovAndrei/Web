function search() {
   let searchText = document.getElementById('searchText').value;
   let ul = document.getElementsByTagName('ul')[0];
   let ulLength = ul.children.length;
   if(ulLength > 6){
      let deleteLi = ul.children[ulLength - 1];
      deleteLi.remove();
      ulLength = ulLength - 1;
   }
   let foundCount = 0;
   
   for(let i = 0; i < ulLength; i++){
       let li = ul.children[i];
       li.style.textDecoration = "none";
       li.style.fontWeight = "normal";
       if(li.textContent.includes(searchText)){
          li.style.textDecoration = "UnderLine";
          li.style.fontWeight = "bold";
          foundCount = foundCount + 1;
       }
   }
   
   let newLi = document.createElement("li");
   newLi.textContent = `${foundCount} matches found`;
   ul.appendChild(newLi);
}