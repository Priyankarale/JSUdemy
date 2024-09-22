// Function to dynamically create the dropdown menu
//document.addEventListener("DOMContentLoaded", (event) => {
const dropbtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

// Sample dynamic data
const menuItems = [
  { text: "Item 1" },
  { text: "Item 2" },
  { text: "Item 3" },
  // You can add more items here
];

// Function to populate the dropdown content with dynamic data
function populateDropdown(items) {
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.text;
    dropdownContent.appendChild(li);
  });
}

// Populate the dropdown with the sample data
populateDropdown(menuItems);

// Event listener to toggle the dropdown menu
dropbtn.addEventListener("mouseover", (event) => {
  event.preventDefault(); // Prevent the default link behavior
  dropdownContent.classList.toggle("show");
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("mouseout", (event) => {
  if (!event.target.matches(".dropbtn")) {
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    }
  }
});
//});
