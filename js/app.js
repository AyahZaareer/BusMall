'use strict';
let leftIndex;
let midellIndex;
let rightIndex;
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
  //duplicate();
  leftIndex = randomNumber(0,ProductsMall.all.length-1);
  console.log('left: ', leftIndex);

  leftImage.src = ProductsMall.all[leftIndex].path;
  leftImage.alt = ProductsMall.all[leftIndex].name;
  leftImage.title = ProductsMall.all[leftIndex].name;

  //console.log(leftIndex);

  midellIndex = randomNumber(0,ProductsMall.all.length-1);

  midellImage.src = ProductsMall.all[midellIndex].path;
  midellImage.alt = ProductsMall.all[midellIndex].name;
  midellImage.title = ProductsMall.all[midellIndex].name;
  console.log(midellIndex);

  rightIndex = randomNumber(0,ProductsMall.all.length-1);

  rightImage.src = ProductsMall.all[rightIndex].path;
  rightImage.alt = ProductsMall.all[rightIndex].name;
  rightImage.title = ProductsMall.all[rightIndex].name;
  console.log(rightIndex);

  duplicate();
}
render();
duplicate();
imagesSection.addEventListener('click',handelClick);
function handelClick(event){

  if(event.target.id !== 'images-section'){
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
  }
  //console.table(ProductsMall.all);
  render();
  duplicate();
}

function duplicate()
{
  if(rightIndex===midellIndex)
  {
    rightIndex=randomNumber(0,ProductsMall.all.length-1);
    rightImage.src = ProductsMall.all[rightIndex].path;
    rightImage.alt = ProductsMall.all[rightIndex].name;
    rightImage.title = ProductsMall.all[rightIndex].name;

  }else if(rightIndex ===leftIndex)
  {
    rightIndex=randomNumber(0,ProductsMall.all.length-1);
    rightImage.src = ProductsMall.all[rightIndex].path;
    rightImage.alt = ProductsMall.all[rightIndex].name;
    rightImage.title = ProductsMall.all[rightIndex].name;
  }else{
    rightImage.src = ProductsMall.all[rightIndex].path;
    rightImage.alt = ProductsMall.all[rightIndex].name;
    rightImage.title = ProductsMall.all[rightIndex].name;

  }


  //while(rightIndex === midellIndex){
  //console.log('Duplicate Found');
  // midellIndex =randomNumber(0,ProductsMall.all.length-1);
  //  console.log(midellIndex);
  //}

  //while(leftIndex === rightIndex ||leftIndex === midellIndex){
  //console.log('Duplicate Found');
  //leftIndex = randomNumber(0,ProductsMall.all.length-1);
  //}

}
duplicate();
render();



let button=document.getElementById('result');
//let container=document.getElementById('container');
button.addEventListener('click',he);
//console.log(button);

function he()
{
  let list = document.getElementById('list');

  for (let j = 0; j < products.length; j++)
  {
    let li = document.createElement('li');
    li.textContent = ProductsMall.all[j].name + ' was clicked ' + ProductsMall.all[j].votes + ' times out of ' + ProductsMall.all[j].views ;
    list.appendChild(li);
  }


}console.log(he);




