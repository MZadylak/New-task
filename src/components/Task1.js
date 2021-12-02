const Task1 = () => {
    const btn = document.querySelector('.task--one');
    const generateNumbers = range => {
        const even = { name: 'even', content: [] };
        const odd = { name: 'odd', content: [] };
        for(let i = 0; i < range; i++) {
            const number = Math.round(Math.random() * 100);
            number %2 === 0 ? even.content.push(number) : odd.content.push(number);
        };
        sortNumbers(even.content);
        sortNumbers(odd.content);

        return [ even, odd ];
    };
    const sortNumbers = arr => arr.sort((a, b) => a - b);
    const addContent = () => {
        const list = generateNumbers(20);
        return list.map(el => {
            const div = document.createElement('div');
            return btn.nextElementSibling.appendChild(div).textContent = `${ el.name }: ${ el.content }`;
        });
    }
    return { btn, addContent };
}

export default Task1;