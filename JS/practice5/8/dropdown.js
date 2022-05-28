function addItem() {
    var option = document.createElement('option');
    option.text = document.getElementById('newItemText').value;
    option.value = document.getElementById('newItemValue').value;
     
    document.querySelector('select').add(option);
}