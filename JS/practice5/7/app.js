function lockedProfile() {
    let profiles = document.querySelectorAll('.profile');

    profiles.forEach((el, i) => {
        let radios = el.querySelectorAll(`input[name=user${i+1}Locked]`);
        let hiddenFields = el.querySelector(`#user${i+1}HiddenFields`);
        let btn = el.querySelector('button');
        btn.disabled = true;
        radios.forEach(e => {
            e.addEventListener('change', function(e) {
                btn.disabled = this.value == 'lock';
            })
        });
        btn.addEventListener('click', ()=> {
            if (hiddenFields.style.display != 'block') {
                hiddenFields.style.display = 'block';
                btn.textContent = 'Hide it';
            } else {
                hiddenFields.style.display = 'none';
                btn.textContent = 'Show more';
            }
        })
    })
}