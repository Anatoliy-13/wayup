const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const items = document.getElementById('items');


    // console.log(tabs.children); 
    // проверяет массив tabs.children

const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
    };
    el.classList.add('active');
}

const changeItem = el => {
    for(let i = 0; i < items.children.length; i++){
        items.children[i].classList.remove('active');
    };
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTabs = e.target.dataset.btn;
    changeClass(e.target);
    for(i = 0; i < content.length; i++){
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTabs){
            content[i].classList.add('active');
        }
    }
})



items.addEventListener('click', e => {
    const currTabs = e.target.dataset.item;
    changeItem(e.target);
})