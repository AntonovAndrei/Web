function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let command = btn.textContent;

    let txt = document.getElementById('extra');
    
    if(command === "More"){
        txt.style.display = "block";
        btn.textContent = "Less";
    }
    else if(command === "Less"){
        txt.style.display = "none";
        btn.textContent = "More";
    }
}