const links = document.querySelectorAll('.nav-links');
const sections = document.querySelectorAll('section');
const mac = document.querySelector('#macbooks');
const phone = document.querySelector('#smartphones');
const watch = document.querySelector('#watches');
const btnHome = document.querySelector('#btn-home');
const search = document.querySelector('form');
const btnSearch = document.querySelector('#btn-search')


function addClass(index) {
    sections.forEach((item) => {
        item.classList.remove('selected');
    });
    links.forEach((el) => {
        el.classList.remove('active');
    });

    
    if (index === 0) {
        mac.classList.add('selected');
    } else if (index === 1) {
        phone.classList.add('selected');
    } else {
        watch.classList.add('selected');
    }
    
}

links.forEach((item, index) => {
    item.addEventListener('click', () => {
        addClass(index);
    });
});

btnHome.addEventListener('click', ()=>{
    sections.forEach((item) => {
        item.classList.remove('selected');
    });
    watch.classList.add('selected')
})

btnSearch.addEventListener('click', ()=>{
    search.classList.toggle('on-search')
})