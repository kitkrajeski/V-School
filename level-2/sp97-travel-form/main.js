const submitButton = document.querySelector('button[type="submit"]')

submitButton.addEventListener("click", event => {
    event.preventDefault();
    const fName = document.forms.travelForm.elements.firstName.value;
    const lName = document.forms.travelForm.lastName.value;
    const age = document.forms.travelForm.pAge.value;
    const gender = document.forms.travelForm.pGender.value;
    const destination = document.forms.travelForm.destination.value
    const diet = document.forms.travelForm.querySelectorAll('input[type="checkbox"]:checked')
    const items = []
    diet.forEach(function(input){ items.push(input.value)})
    alert(`First Name: ${fName} \nLast Name: ${lName} \nAge: ${age} \nGender: ${gender} \nDestination: ${destination} \nDietary Restrictions: ${items}`);
})