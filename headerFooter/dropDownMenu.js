function toggleDropdown() {
    const container = document.getElementById('container');
    container.classList.toggle('expanded');
}

// Close dropdown if clicking outside container or menu button
document.addEventListener('click', function (e) {
    const container = document.getElementById('container');
    

    if (!container.contains(e.target)) {
        container.classList.remove('expanded');
    }
});
