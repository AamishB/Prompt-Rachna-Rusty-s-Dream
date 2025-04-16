function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
        page.style.opacity = '0';
    });
    const page = document.getElementById(pageId);
    if (pageId.startsWith('chapter')) {
        page.style.display = 'flex';
    } else {
        page.style.display = 'block';
    }
    setTimeout(() => {
        page.style.opacity = '1';
    }, 10);
}

// Show landing page on load
document.addEventListener('DOMContentLoaded', () => {
    showPage('landing');
});