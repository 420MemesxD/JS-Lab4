let requestURL = 'https://420memesxd.github.io/JS-Lab4/main.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
  let strangeProducts = request.response;
  console.log(strangeProducts);
  sProducts(strangeProducts);
};

function sProducts(jsonObj){

  let sProducts = jsonObj.main;

  for(let i = 0; i < sProducts.length; i++){

  //build HTML elements for the content
  let article = document.createElement('article');
  let h2 = document.createElement('h2');
  let img= document.createElement('img');
  let p = document.createElement('p');
  let ul = document.createElement('ul');

  let section = document.quuerySelector('section');
  img.setAttribute('src', 'https://420memesxd.github.io/JavaScript/assets/' + sProducts[i].image);
  img.setAttribute('alt', sProducts[i].image);
  h2.textContent = sProducts[i].name;
  p1.textContent = 'Price' + sProducts[i].price;
  let toppings = sProducts[i].toppings;
  for (let j = 0; j < details.length; j++){
    let listItem = document.createElement('li');
    listItem.textContent = details[j];
    ul.appendChild(listItem);
  }
article.appendChild(img);
article.appendChild(h1);
article.appendChild(p1);
article.appendChild(p2);
article.appendChild(ul);
section.appendChild(article);
  }
}

