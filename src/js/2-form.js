const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const formData = { email: '', message: '' };
loadFormData();

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
    event.preventDefault();

    const { email, message } = formData;
    if (!email || !message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    event.target.reset();
    formData.email = '';
    formData.message = '';
}

function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || '';
        formData.message = parsedData.message || '';
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
}
