axios.get("https://api.vschool.io/pokemon")
    .then(response => response.data.objects[0].pokemon.forEach((poke) => {
        const h1 = document.createElement("h1");
        h1.textContent = poke.name;
        document.body.appendChild(h1);
    }))
    .catch(error => console.log(error));