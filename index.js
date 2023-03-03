const container = document.getElementById("container");
let dataArr = [];
const fetchDataFunction = async() => {
  const res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);   
  
  dataArr = await res.json();
  let data = dataArr.data;
  displayDunction(data);
}

const displayDunction = (data) => {
    // console.log(data)
    container.innerHTML = '';
    data.forEach(element => {
         const cards = document.createElement("cards");
         cards.classList.add("cards");
         
         const img = document.createElement("img");
         img.src = 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg';
         img.classList.add("img")

         const title = document.createElement("h3");
         title.innerText = element.title;

         const brand = document.createElement("h3");
         brand.innerText = element.brand;
         const category = document.createElement("p");
         category.innerText = element.category;

         const price = document.createElement("h3");
         price.innerText = element.price;
         const heartIcon = document.createElement("span");
         heartIcon.innerHTML = '&#x2764;'
         heartIcon.style.color = "teal"

         cards.append(img,title,brand,category,price,heartIcon);
         container.append(cards);
    });
}

const filterByCategory = () => {
//    console.log("Clicked.....")
   console.log(dataArr, "Data Array")
   const selected = document.getElementById("categoryFilter").value;
   console.log(selected);
   let filteredList = dataArr.data.filter((element) => {
    return element.category === selected;
   })
   console.log(filteredList);

   displayDunction(filteredList);
}


fetchDataFunction();