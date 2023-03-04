const data = JSON.parse(localStorage.getItem("Wishlist")) || [];

const container = document.getElementById("container");
  
  const displayFunction = (data) => {
    console.log(data)
  
    data.forEach((element) => {
      const cards = document.createElement("cards");
      cards.classList.add("cards");
  
      const img = document.createElement("img");
      img.src =
    "https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg";
      img.classList.add("img");
  
      const title = document.createElement("h3");
      title.innerText = element.title;
  
      const brand = document.createElement("h3");
      brand.innerText = element.brand;
      const category = document.createElement("p");
      category.innerText = element.category;
  
      const price = document.createElement("h3");
      price.innerText = element.price;
    
  
      cards.append(img, title, brand, category, price);
      container.append(cards);
    });
}

displayFunction(data)

