function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let items = document.querySelectorAll("table.container tbody tr");
      let searchString = document.getElementById("searchField").value.trim();
      items.forEach(element => {
         element.classList.remove("select");
         if(element.textContent.includes(searchString)){
            element.classList.add("select");
         }
      });
   }
}