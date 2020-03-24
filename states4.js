fetch("https://covidtracking.com/api/states/daily", {
	"method": "GET",

})

.then(response => response.json().then(data =>{
    console.log(data)
    
//Getting all the country statistic using a loop
    for(let i = 0; i<data.length;i++){
        console.log(data[i]);


        
        //we will start by inserting the new rows inside our table
        let row = table.insertRow(i+1);
        let state = row.insertCell(0);
        let positive = row.insertCell(1);
        let negative = row.insertCell(2);
        let death = row.insertCell(3);
        let hospitilized = row.insertCell(4);
        let total = row.insertCell(5);
        let dateChecked = row.insertCell(6);

        state.innerHTML = data[i].state;
        positive.innerHTML = data[i].positive;
        negative.innerHTML = data[i].negative;
        death.innerHTML = data[i].death;
        hospitilized.innerHTML = data[i].hospitilized;
        total.innerHTML = data[i].total;
        dateChecked.innerHTML = data[i].dateChecked;
      

    }
}));


