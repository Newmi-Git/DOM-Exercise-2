const updateName = document.getElementById("updateNameBtn");
const updateRole = document.getElementById("updateRoleBtn");
const updateImage = document.getElementById("updateImageBtn");
const toggleStatus = document.getElementById("toggleStatusBtn");
const profileName = document.getElementById("profileName");
const profileCard = document.getElementById("profileCard");
const profileImage = document.getElementById("profileImage")


updateName.addEventListener("click", function() {
    const newName = prompt("Whats the new name?");
    profileName.textContent = newName;
})

updateRole.addEventListener("click", function() {
    const newRole = prompt("Whats the new role?");
    profileRole.textContent = newRole;
})

toggleStatus.addEventListener("click", function() {
    profileCard.classList.toggle("active-status")
})

updateImage.addEventListener("click", function() {
    const newImage = prompt("New Image URL:");
    profileImage.src = newImage;
    
})


