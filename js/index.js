// Your code goes here

const navigator = (document.querySelector(".nav"));

// navigator.addEventListener.('click' , event =>{
//     event.preventDefault();
// })

navigator.addEventListener('click', (event) => {
    event.preventDefault();
  });

const letsGo  = document.querySelector(".text-content");

letsGo.addEventListener("mouseover", function (event){   

    event.target.style.color = "purple";
  
   
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

//   window.addEventListener('load', (event) => {
//         alert('page is fully loaded');
// });

const destination = document.querySelector(".intro");

destination.addEventListener ("wheel", function(event) {  
       
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)" 
    
    setTimeout(function(event){
        event.body.style.backgroundImage = "";
    }, 10);
    }, false);

    window.addEventListener('resize', () =>{
        alert('Did it work?!')
    })

    // window.addEventListener('scroll', ()=>{
    //     alert('Hold your horses!')
    // })

    const tester = document.querySelector(".footer")

    document.addEventListener('keydown', logKey);
    function logKey (e) {
        tester.textContent += `${e.code}`;
    }

    const update = document.querySelector('.destination');
    
    update.addEventListener('dblclick', event => {
        event.target.style.backgroundColor = 'yellow';
    })



    const vacation = document.querySelector('.content-destination');
    
    // vacation.addEventListener('focus', (vacation) => {
    //     vacation.target.style.backgroundColor = 'red';    
    //   }, true)

      update.addEventListener('dblclick', event => {
        event.target.style.backgroundColor = 'yellow';
    })