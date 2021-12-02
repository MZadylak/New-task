const Task2 = () => {
    const form = document.querySelector('form');
    const list = document.querySelector('aside');
    const errors = [];
    const books = [];

    const validateData = e => {
        e.preventDefault();
        const { elements } = e.target;
        clearErrors(errors);
        checkErrors(errors, elements);
        showErrors(errors);
        if(errors.length === 0) {
            generateObject(elements);
        }
    }

    const checkErrors = (arr, elements) => {
        [...elements].forEach(el => {
            const { value, type, name } = el;

            if(value === '' && type !== 'submit') {
                return arr.push(el);
            };

            if(name === 'author' && value.length < 3) {
                return arr.push(el);
            };
        });
    }

    const showErrors = arr => errorsAppearance(arr, '1px solid red');

    const clearErrors = arr => {
        errorsAppearance(arr, null);
        arr.splice(0);
    }

    const errorsAppearance = (arr, type) => {
        arr.map(err => err.style.border = type);
    }

    const generateObject = elements => {
        const Book = {};
        [...elements].forEach(el => {
            if(el.type !== 'submit') {
                Book[el.name] = el.value;
                clearForm(el);
            }
        });
        books.push(Book);
        renderLibrary(books, list);
    }

    const renderLibrary = (arr, DOMplace) => {
        DOMplace.lastElementChild.textContent = '';
        arr.map(({ title, author, priority, categories }) => {
            const p = document.createElement('p');
            p.textContent = `Title: ${ title }, Author: ${ author }, Priority: ${ priority }, Categories: ${ categories }`;
            DOMplace.lastElementChild.appendChild(p);
        });
    }

    const clearForm = element => element.value = '';

    return { form, validateData };
};

export default Task2;