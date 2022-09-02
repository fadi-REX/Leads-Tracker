let myleads= [] ;

const inputel = document.querySelector("#input-el");
const inputbtn = document.querySelector("#input-btn");
const ulel  = document.querySelector("#ul-el");
const deletebtn = document.querySelector("#delete-btn");
const savebtn = document.querySelector("#save-btn")

const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))

 if(leadsfromlocalstorage) {
                           myleads = leadsfromlocalstorage 
                           render(myleads)
                            }




function render(leads)
{
let listitems = ""

for(let i = 0; i < leads.length; i+=1 )
{

   
   listitems += `<li> <a href=' ${leads[i]} ' target ='_blank' > ${leads[i]} </a> </li>`

}


ulel.innerHTML= listitems;

}







inputbtn.addEventListener("click", function()
{
    myleads.push(inputel.value)
    inputel.value = ""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)

    

    

}
)


deletebtn.addEventListener("dblclick",function(){

   localStorage.clear()
   myleads = []
   render(myleads)



})





savebtn.addEventListener("click",function(){

  chrome.tabs.query({active: true , currentWindow: true}, function(tabs){


    
    
   
    myleads.push(tabs[0].url)
    



  })

   localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)

})










