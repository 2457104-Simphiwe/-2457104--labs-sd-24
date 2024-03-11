async function fetchData() {
    try {
        const countryName = document.getElementById('countryName').value.toLowerCase();
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();

        const capital = data[0].capital[0];
        const pop = data[0].population;
        const reg = data[0].region;

        const flagElement = document.getElementById('countryFlag');
        flagElement.src = data[0].flags.png; // or data[0].flags.svg for SVG
        flagElement.alt = `Flag of ${data[0].name.common}`;

        document.getElementById('CName2').innerHTML = countryName;
        document.getElementById('Capital').innerHTML = `Capital: ${capital}`;
        document.getElementById('Pop').textContent = `Population: ${pop}`;
        document.getElementById('Region').textContent = `Region: ${reg}`;

        // Display bordering countries
       

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
