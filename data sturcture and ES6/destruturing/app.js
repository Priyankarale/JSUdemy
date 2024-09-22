const cat = document.querySelector("#cat");
const catItem = document.querySelector(".cat--item");

const resturant = {
  name: "Priyanka kitchen",
  location: "July Solapur",
  categories: ["Maharastrian food", "South indian food", "Chainess"],
  starterMenu: ["Panner chili", "Panner Pakoda", "Panner Sadwich"],
  mainMenu: ["veg biryani", "biryani", "Roti", "chicken", "Panner Masala"],
  order: function (startIdex, mainIndex) {
    return [this.categories[startIdex]];
  },
};

const categoriessItem = [...resturant.categories];
console.log(categoriessItem, "***");
const catItems = function (e) {
  categoriessItem.forEach((ele, index) => {
    let list = document.createElement("list");
    list.textContent = ele;
    list.dataset.index = index;
    catItem.append(list);
  });
};
//categoriessItem.map((ele, index) => console.log(index + 1));
catItems();
cat.addEventListener("mouseover", function () {
  catItem.classList.add("cat--show");
});
cat.addEventListener("mouseout", function () {
  catItem.classList.remove("cat--show");
});

catItem.addEventListener("click", (e) => {
  console.log("p");
  if (e.target.tagName === "LIST") {
    const index = e.target.dataset.index;
    console.log(resturant.order(index));
    console.log(index);
  }
});

var mergeTwoLists = function (list1, list2) {
  const newList = [...list1, ...list2];
  console.log(newList.sort());
};
mergeTwoLists([], [0]);
