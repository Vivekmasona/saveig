const lang = document.querySelectorAll('.lang'),
    langItem = document.querySelectorAll('.lang-item'),
    faqBtn = document.querySelectorAll('.faq-item__btn')


lang.forEach(lang => {
    lang.addEventListener('click', () => {
        lang.classList.toggle('showLangMenu');
    });
})


langItem.forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.parentElement.parentElement.children[0].children[1].innerText = item.innerText
    });
});


let count = 0;
faqBtn.forEach(faq => {
    faq.addEventListener('click', () => {
        if (faq.textContent == '+') {
            faq.textContent = '-'
            faq.parentElement.nextElementSibling.classList.add('d-flex');
            // return count = 1;
        } else {
            faq.textContent = '+'
            faq.parentElement.nextElementSibling.classList.remove('d-flex');
            // return count = 0;
        }
    })
})
