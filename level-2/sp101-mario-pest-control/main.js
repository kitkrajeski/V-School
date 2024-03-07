const getPaid = document.querySelector("button[type='submit']");

getPaid.addEventListener("click", event =>{
    event.preventDefault();
    const goombaKills = parseInt(document.forms.killCount.goombaKills.value);
    const bobOmbKills = parseInt(document.forms.killCount.bobOmbKills.value);
    const cheepCheepKills = parseInt(document.forms.killCount.cheepCheepKills.value);
    const moneyOwed = (goombaKills * 5) + (bobOmbKills * 7) + (cheepCheepKills * 11);
    getPaid.textContent = `We gonna pay ya ${moneyOwed}!!!`
})