const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

editor.addEventListener("input", () => {
    const value = editor.value;
    preview.innerText = value;
});
