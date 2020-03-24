fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "ZeHU2dLvjAmshuqcmPA4HBoNcnGjp1s2JLejsnV9UPv93eRbuo"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});