window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('form').style.display = 'block';
    }, 10000);
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('form').style.display = 'none';
});