document.addEventListener('DOMContentLoaded', () => {
    const botoesMenu = document.querySelectorAll('.nav-item');

    // Navegação Suave
    botoesMenu.forEach(botao => {
        botao.addEventListener('click', () => {
            // Atualiza classe ativa no menu
            document.querySelector('.nav-item.active').classList.remove('active');
            botao.classList.add('active');

            // Pega o ID da seção pelo atributo data-section
            const sectionId = botao.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito de destaque nos cards de projetos
    const cards = document.querySelectorAll('.projeto-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = '0.3s';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});