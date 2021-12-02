import Task1 from "./components/Task1";
import Task2 from "./components/Task2";

const { btn, addContent } = Task1();
btn.addEventListener('click', addContent);

const { form, validateData } = Task2();
form.addEventListener('submit', validateData);