


const apikey="/372PRNxjUEJ/NWDzBexJg==oMldzj1lWMWngUHm";


const option={
    method:"GET",
    headers:{
        "X-Api-Key":apikey,
    }
};

const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1"

const btnEl=document.getElementsByClassName('btn')
const jokeEl=document.getElementById("joke")
btnEl[0].addEventListener('click',getjoke);

   async function getjoke(){
     
       try {
        jokeEl.innerText="upadating plz wait"
        btnEl.disabled = true;
        btnEl.innerText="Loading"
     const response=await fetch(apiurl,option);
     const data=await response.json();
     console.log(data);
     jokeEl.innerText=data[0].joke;
     btnEl.disabled=false;
     btnEl.innerText="tell me a joke"
       } catch (error) {
        jokeEl.innerText="An Error Happen"
       }
    
    
   }