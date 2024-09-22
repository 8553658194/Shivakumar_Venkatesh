document.querySelectorAll('.accordion-title').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        const isVisible = content.style.display === 'block';
        
        document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
        content.style.display = isVisible ? 'none' : 'block';
    });
});
