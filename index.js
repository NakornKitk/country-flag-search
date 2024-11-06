const formEle = document.querySelector("#searchForm")

formEle.addEventListener("submit", function(e){
    e.preventDefault()
    getCountryDetails()
})



const getCountryDetails = async () => {
    try{
        const keyRegion = formEle.elements.region.value;
        const res = await axios.get(`https://restcountries.com/v3.1/region/${keyRegion}`)
        renderImg(res.data)
    } catch (err) {
        console.log(err)
    }
}



const renderImg = (data) => {
    const search = document.getElementById("search-result")
    search.replaceChildren();
    
    for (let item of data) {
            const flag = document.createElement("img");
            flag.src = item.flags.png;
            const countryname = document.createElement("h4");
            countryname.innerHTML = `${item.name.official}`;
            const capital = document.createElement("figcaption")
            capital.innerText = `Capital city: ${item.capital}`;

            const search = document.getElementById("search-result")
            const figure = document.createElement("figure");

            search.appendChild(figure)
            figure.appendChild(flag);
            figure.appendChild(countryname);
            figure.appendChild(capital);
        } 
}


function resetCountry() {
    const search = document.getElementById("search-result")
    search.replaceChildren();
}


