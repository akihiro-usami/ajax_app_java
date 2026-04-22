function post() {
    const submit = document.getElementById("submit");
    submit.addEventListener("click", (e) => {
        e.preventDefault();

        const form = document.getElementById("form");
        const formData = new FormData(form);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/posts", true);
        xhr.responseType = "json";
        xhr.send(formData);
    });
}

window.addEventListener('load', post);
