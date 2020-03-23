const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-19-coronavirus-statistics.p.rapidapi.com",
    "x-rapidapi-key":"ZeHU2dLvjAmshuqcmPA4HBoNcnGjp1s2JLejsnV9UPv93eRbuo"
    },"params":{
    "country":"USA"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })