//your code here!
document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById("list");
    const totalItems = 10; // Total items initially

    // Function to add more items to the list
    function addMoreItems() {
        const itemsToAdd = 2; // Number of items to add
        for (let i = 0; i < itemsToAdd; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = `Item ${totalItems + i + 1}`;
            list.appendChild(listItem);
        }
        totalItems += itemsToAdd;
    }

    // Initial items
    for (let i = 0; i < totalItems; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Item ${i + 1}`;
        list.appendChild(listItem);
    }

    // Add more items when reaching the end of the list
    list.addEventListener("scroll", function() {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            addMoreItems();
        }
    });
});
