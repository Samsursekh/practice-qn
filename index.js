const container = document.getElementById("container");
let dataArr = [];
const cardsPerPage = 12;
const pagination = document.getElementById("pagination");

const fetchDataFunction = async() => {
  const res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);   
  
  dataArr = await res.json();
  let data = dataArr.data;
  displayDunction(data, 1);
}

const displayDunction = (data,currentPage) => {
    // console.log(data)
    container.innerHTML = '';

    const firstCardIndex = (currentPage - 1) * cardsPerPage;
    const lastCardIndex = firstCardIndex + cardsPerPage;

    const currentProducts = dataArr.data.slice(firstCardIndex, lastCardIndex)

    currentProducts.forEach(element => {
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

    const pageCount = Math.ceil(dataArr.data.length / cardsPerPage);
    const pageLinksHtml = Array.from({length : pageCount}, (_, i) => `
     <a class="page-link ${i + 1  === currentPage ? "active" : ""} " data-page= "${i + 1}" > ${i + 1} </a>
    `).join("");

    pagination.innerHTML = pageLinksHtml;

    const pageLinks = pagination.querySelectorAll(".page-link");
    pageLinks.forEach(link => {
        link.addEventListener("click", () => {
            const pageNumber = link.dataset.page;
            displayDunction(dataArr.data, pageNumber);
        })
    })
}



const filterByCategory = () => {
   const selected = document.getElementById("categoryFilter").value;
   console.log(selected);
   let filteredList = dataArr.data.filter((element) => {
    return element.category === selected;
   })
//    console.log(filteredList);
   displayDunction(filteredList,1);
}

const sortByPrice = () => {
    const selected = document.getElementById("sortPrice").value;
    // console.log(selected)
    // console.log(dataArr.data);
    if(selected === "asc"){
        currentProducts.sort((a,b) => {
            return b.price - a.price;
        })
        console.log(dataArr);
        displayDunction(currentProducts, 1);
    }
    if(selected === "dsc"){
        currentProducts.sort((a,b) => {
            return a.price - b.price;
        })
        console.log(dataArr);
        displayDunction(currentProducts, 1);
    }
}

//Sort ta kaj ho6e na kal dekhbo ja hobe

fetchDataFunction();