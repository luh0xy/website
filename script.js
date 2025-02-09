document.removeEventListener('mousemove', function(e) {
    const cursorEffect = document.querySelector('.cursor-effect');
    if (cursorEffect) {
        const container = document.querySelector('.cursor-container');
        const rect = container.getBoundingClientRect();
        cursorEffect.style.left = (e.clientX - rect.left) + 'px';
        cursorEffect.style.top = (e.clientY - rect.top) + 'px';
    }
});
