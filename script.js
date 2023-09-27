//your JS code here. If required.

// Get references to the select element and the remove button
const colorSelect = document.getElementById("colorSelect");
const removeButton = document.getElementById("removeButton");

// Add a click event listener to the remove button
removeButton.addEventListener("click", function() {
    const selectedIndex = colorSelect.selectedIndex;
    
    if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex);
    }
});
