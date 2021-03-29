/* eslint-disable indent */
'use strict';
let leftIndex;
let midellIndex;
let rightIndex;
let maxclick=25;
let click=1;
let votes=[];
let views=[];
//let leftI2;
//let midell2;
//let right2 ;
let index=[];


const products=['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
const leftImage = document.getElementById('left-image');
const midellImage = document.getElementById('midell-image');
const rightImage = document.getElementById('right-image');
const imagesSection = document.getElementById('images-section');
function ProductsMall(name) {
  this.name = name;
  this.path = `./assets/${name}.jpg`;
  this.votes = 0;
  this.views = 0;

  ProductsMall.all.push(this);
}
ProductsMall.all = [];
for(let i =0;i<products.length;i++){
  new ProductsMall(products[i]);
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function render(){
  //if (index.includes(leftIndex)===leftIndex)  (index.includes(rightIndex)===rightIndex)||(index.includes( midellIndex )===midellIndex)

   // while((index.includes(leftIndex))||(index.includes(rightIndex))||(index.includes(midellIndex)))
   //{
     //leftIndex=randomNumber(0,ProductsMall.all.length-1);



     //rightIndex=randomNumber(0,ProductsMall.all.length-1);


     //midellIndex=randomNumber(0,ProductsMall.all.length-1);
  // }
   do{
      leftIndex = randomNumber(0,ProductsMall.all.length-1);
     midellIndex = randomNumber(0,ProductsMall.all.length-1);
     rightIndex = randomNumber(0,ProductsMall.all.length-1);
    }while(leftIndex===midellIndex||midellIndex===rightIndex||leftIndex===rightIndex);
    //console.log(leftIndex);






   //leftIndex = randomNumber(0,ProductsMall.all.length-1);
   //console.log('left: ', leftIndex);

    leftImage.src = ProductsMall.all[leftIndex].path;
   leftImage.alt = ProductsMall.all[leftIndex].name;
   leftImage.title = ProductsMall.all[leftIndex].name;
   index.push(leftIndex);

   //console.log(leftIndex);

   //midellIndex = randomNumber(0,ProductsMall.all.length-1);

   midellImage.src = ProductsMall.all[midellIndex].path;
   midellImage.alt = ProductsMall.all[midellIndex].name;
   midellImage.title = ProductsMall.all[midellIndex].name;
   index.push(midellIndex);
    //console.log(midellIndex);

   //rightIndex = randomNumber(0,ProductsMall.all.length-1);

    rightImage.src = ProductsMall.all[rightIndex].path;
   rightImage.alt = ProductsMall.all[rightIndex].name;
   rightImage.title = ProductsMall.all[rightIndex].name;
   index.push(rightIndex);
  //}


}
render();


//duplicate();
imagesSection.addEventListener('click',handelClick);
function handelClick(event){
  if(event.target.id !== 'images-section'){
    if(click<maxclick){
      click++;
      if(event.target.id === rightImage.id)
      {
        ProductsMall.all[rightIndex].votes++;
        ProductsMall.all[rightIndex].views++;
        ProductsMall.all[leftIndex].views++;
        ProductsMall.all[midellIndex].views++;
      }
      else if(event.target.id === midellImage.id){
        ProductsMall.all[midellIndex].votes++;
        ProductsMall.all[rightIndex].views++;
        ProductsMall.all[leftIndex].views++;
        ProductsMall.all[midellIndex].views++;
      }else{
        ProductsMall.all[leftIndex].votes++;
        ProductsMall.all[rightIndex].views++;
        ProductsMall.all[leftIndex].views++;
        ProductsMall.all[midellIndex].views++;
      }



    }else{

      let list = document.getElementById('list');
      for (let j = 0; j < products.length; j++)
      {
        votes.push(ProductsMall.all[j].votes);
        views.push(ProductsMall.all[j].views);
        let li = document.createElement('li');
        list.appendChild(li);
        li.textContent = ProductsMall.all[j].name + '  has ' + ProductsMall.all[j].votes + ' votes and has ' + ProductsMall.all[j].views+'views' ;
      }
      imagesSection.removeEventListener('click',handelClick);
      chartDesign();



    }
    render();

  }


  //console.table(ProductsMall.all);
 // render();
  //duplicate();
}


render();



//let button=document.getElementById('result');
//let container=document.getElementById('container');
//button.addEventListener('click',he);
//console.log(button);

//function he()
//{let list = document.getElementById('list');
//for (let j = 0; j < products.length; j++)
//{
//let li = document.createElement('li');
//list.appendChild(li);
//li.textContent = ProductsMall.all[j].name + '  has ' + ProductsMall.all[j].votes + ' votes and has ' + ProductsMall.all[j].views+'views' ;

//}



//}console.log(he);


function chartDesign(){
  let ctx = document.getElementById('myChart').getContext('2d');
  let chart= new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: products,
        datasets: [{
            label: 'votes',
            backgroundColor: 'rgb(63,20,220)',
            borderColor: 'rgb(63,20,220)',
            data: votes
        },
        {
          label: 'views',
          backgroundColor: 'rgb(220,77,20)',
          borderColor: 'rgb(220,77,20)',
          data: views
        } ]
    },

    // Configuration options go here
    options: {}
  });
}




