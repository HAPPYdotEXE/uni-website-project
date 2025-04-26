
document.addEventListener('DOMContentLoaded', function() {

    const faqItems = document.querySelectorAll('.faq-item');
    

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {

            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    otherAnswer.style.maxHeight = null;
                }
            });
            

            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
    

    if (window.location.hash === '#faq') {
        const faqSection = document.getElementById('faq');
        if (faqSection) {

            setTimeout(() => {
                faqSection.scrollIntoView({ behavior: 'smooth' });
                
                const firstFaqItem = document.querySelector('.faq-item');
                if (firstFaqItem) {
                    firstFaqItem.classList.add('active');
                    const firstAnswer = firstFaqItem.querySelector('.faq-answer');
                    firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
                }
            }, 100);
        }
    }
    
    const missionCards = document.querySelectorAll('.mission-card');
    
    const animateOnScroll = () => {
        missionCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    missionCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    animateOnScroll();
    
    window.addEventListener('scroll', animateOnScroll);
});