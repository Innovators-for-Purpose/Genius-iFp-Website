fetch('../headerFooter/header.html')
.then(res=> res.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
});

fetch('../headerFooter/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });