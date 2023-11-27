   function displayPrice(){
    let displaySpan = document.getElementById('display');
    let selectTour = document.getElementById('tour');
    let valueTour = selectTour.value;
   let priceTour = 0;
     if(valueTour == 'muine'){
        priceTour = 100;
     }
     else if(valueTour == 'camau'){
          priceTour = 150;
     }
     else if(valueTour == 'vungtau'){
         priceTour = 90;
   }
   else if(valueTour == 'dalat'){
          priceTour = 120;
   }
   else if(valueTour == 'hotram'){
         priceTour = 110;
   }
    displaySpan.textContent = `${priceTour}$/Person`;
   }
   
   let totalDiv = document.getElementById('total');
   let totalTien = 0;
   function  CalTotal(){
    let selectTour = document.getElementById('tour');
    let valueTour = selectTour.value;
   let priceTour = 0;
     if(valueTour == 'muine'){
        priceTour = 100;
     }
     else if(valueTour == 'camau'){
          priceTour = 150;
     }
     else if(valueTour == 'vungtau'){
         priceTour = 90;
   }
   else if(valueTour == 'dalat'){
          priceTour = 120;
   }
   else if(valueTour == 'hotram'){
         priceTour = 110;
   }
    let numberOfPeople = document.getElementById("num").value;
    let numberOfPerson = parseInt( numberOfPeople);
    totalTien = numberOfPerson * priceTour;
    totalDiv.textContent = `Total amount: ${totalTien}$`
    totalDiv.style.backgroundColor ="green";
   }