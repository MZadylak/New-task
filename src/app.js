import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import React from 'react';
import ReactDOM from 'react-dom';

const { btn, addContent } = Task1();
btn.addEventListener('click', addContent);

const { form, validateData } = Task2();
form.addEventListener('submit', validateData);

ReactDOM.render(
    <Task3 />,
    document.querySelector('#root')
);