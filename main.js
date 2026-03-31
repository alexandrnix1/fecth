document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.content-block').forEach(block => block.classList.remove('active'));

        button.classList.add('active');

        const targetId = button.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});