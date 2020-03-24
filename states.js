

//Fetching The Data
fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "ZeHU2dLvjAmshuqcmPA4HBoNcnGjp1s2JLejsnV9UPv93eRbuo"
	}
})

.then(response => response.json().then(data =>{
    console.log(data)

//   let covid19Stats = data.covid19Stats;
let covid19Stats = Array.from(data.data.covid19Stats)

//Getting all the data using a loop
    for(let i = 0; i<covid19Stats.length;i++){
        console.log(covid19Stats[i]);
        //we will start by inserting the new rows inside our table
        let row = table.insertRow(i+1);
        let city = row.insertCell(0);
        let province = row.insertCell(1);
        let confirmed= row.insertCell(2);
        let recovered = row.insertCell(3);
        let deaths = row.insertCell(4);
        
        
        city.innerHTML = covid19Stats[i].city;
        province.innerHTML = covid19Stats[i].province;
        confirmed.innerHTML = covid19Stats[i].confirmed;
        recovered.innerHTML = covid19Stats[i].recovered;
        deaths.innerHTML = covid19Stats[i].deaths;
        
        

    }
}))

.catch(err => {
	console.log(err);
});









