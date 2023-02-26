//All categories.
const numberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", numberOfCategories.length);

const arrayEl = document.querySelectorAll("li.item");
arrayEl.forEach((element) => {
    const categoryEl = element.firstElementChild.textContent;
    const elementsEl = element.lastElementChild.children.length;

    console.log("Category:", categoryEl);
    console.log("Elements:", elementsEl);
});
    
