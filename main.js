let requestURL = 'https://420memesxd.github.io/JS-Lab4/main.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
  let products = request.response;
  console.log(products);
  sProducts(products);
};

function sProducts(jsonObj){

  let sProducts = jsonObj.strangeProducts;

  for(let i = 0; i < sProducts.length; i++){

  //build HTML elements for the content
  let article = document.createElement('article');
  let h2 = document.createElement('h2');
  let img= document.createElement('img');
  let p = document.createElement('p');
  let ul = document.createElement('ul');

  let section = document.querySelector('section');
  h2.textContent = sProducts[i].name;
  img.setAttribute('src', 'https://420memesxd.github.io/JS-Lab4/assets/' + sProducts[i].image);
  img.setAttribute('alt', sProducts[i].image);
  p.textContent = 'Price' + sProducts[i].price;
  let details = sProducts[i].details;
  for (let j = 0; j < details.length; j++){
    let listItem = document.createElement('li');
    listItem.textContent = details[j];
    ul.appendChild(listItem);
  }
article.appendChild(h2);
article.appendChild(img);
article.appendChild(p);
article.appendChild(ul);
section.appendChild(article);
  }
}

