// Adice Api 
    const Api = "https://api.adviceslip.com/advice";
   
 function Advice_Generator() {

        const Icon_dice = document.querySelector('.icon-dice');
        // const AdviceID = document.querySelector('p');
        // const Quotes= document.querySelector('h4');

        const getAdvice = ()=> {
        fetch(Api)
        .then( (response) => response.json())
        .then((data)=> {
            console.log(data)
            const AdviceID = document.querySelector('p');
            const Quotes= document.querySelector('h4');
            AdviceID.textContent =  " Advice # " + data.slip.id;
            Quotes.textContent = data.slip.advice;

          
        })
       .catch( err => console.log(err));
        }


        Icon_dice.addEventListener('click', ()=> {
        getAdvice();
        })
 }


Advice_Generator()
