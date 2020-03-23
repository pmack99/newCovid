
var covid19Stats = [];

//Fetching The Data
fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=USA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "ZeHU2dLvjAmshuqcmPA4HBoNcnGjp1s2JLejsnV9UPv93eRbuo"
	}
})

//.then(response => {
//	console.log(response);
//})

.then(response => response.json().then(data =>{
    console.log(data)

//   let covid19Stats = data.covid19Stats;
let covid19Stats = Array.from(data.covid19Stats)

//Getting all the data using a loop
    for(let i = 0; i<covid19Stats.length;i++){
        console.log(covid19Stats[i]);
        //we will start by inserting the new rows inside our table
        let row = table.insertRow(i+1);
        let province = row.insertCell(0);
        let confirmed = row.insertCell(1);
        let deaths = row.insertCell(2);
        let recovered = row.insertCell(3);
        
        
        province.innerHTML = covid19Stats[i].province;
        confirmed.innerHTML = covid19Stats[i].confirmed;
        deaths.innerHTML = covid19Stats[i].deaths;
        recovered.innerHTML = covid19Stats[i].recovered;
        
        

    }
}))

.catch(err => {
	console.log(err);
});









