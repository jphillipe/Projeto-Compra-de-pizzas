const q = (el)=> document.querySelector(el);
const qa = (el)=> document.querySelectorAll(el);

pizzaJson.map((item, index)=>{
    let pizzaItem = q('.models .pizza-item').cloneNode(true);

    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener('click',(e) =>{
        e.preventDefault();

        q('.pizzaWindowArea').style.opacity = 0;
        q('.pizzaWindowArea').style.display = 'flex';
        

        setTimeout(() => {
            q('.pizzaWindowArea').style.opacity = 1;    
        }, 50);
        
    }); 

    q('.pizza-area').append(pizzaItem);
})