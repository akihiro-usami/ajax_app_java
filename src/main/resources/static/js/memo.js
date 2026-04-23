function buildHTML(xhr) {
    const item = xhr.response;
    const html = `
        <div class="post">
            <div class="post-date">
                投稿日時：${item.createdAt}
            </div>
            <div class="post-content">
                ${item.content}
            </div>
        </div>`;
    return html;
}

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
        xhr.onload = () => {
            if (xhr.status != 200) {
                alert(`Error ${xhr.status}: ${xhr.response.error}`);
                return;
            }
            const list = document.getElementById("list");
            const formText = document.getElementById("content");
            list.insertAdjacentHTML("afterend", buildHTML(xhr));
            formText.value = "";
        };
    });
}

window.addEventListener('load', post);
