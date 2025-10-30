//your code here!

const list = document.getElementById("infi-list");
let itemCount = 10;

// Function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(li);
  }
}

// Add 10 items initially
addItems(itemCount);

// Listen for scroll on window
window.addEventListener("scroll", () => {
  // When user reaches the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addItems(2); // Add 2 new items
  }
});
