const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

editor.addEventListener("input", () => {
    const value = editor.value;

    let html = value;

    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    preview.innerHTML = html;
});
