document.getElementById('businessForm').addEventListener('input', function() {
    document.getElementById('cardName').textContent = document.getElementById('name').value || "Your Name";
    document.getElementById('cardBusiness').textContent = document.getElementById('business type').value || "Business Type";
    document.getElementById('cardContact').textContent = document.getElementById('contact').value || "Contact Details";
})
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const image = document.getElementById('cardImage');
            image.src = e.target.result;
            image.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});