// Fungsi untuk mengubah warna latar belakang secara acak
document.getElementById('ubah-warna').addEventListener('click', function() {
    const colors = ['#f4f4f4', '#ffeaa7', '#fab1a0', '#a29bfe', '#fd79a8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});