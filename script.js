console.log("JS Connected");
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

editor.addEventListener("input", () => {
    const value = editor.value;

    let html = value;

    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");

    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

    html = html.split(/\n\n+/).map(paragraph => `<p>${paragraph}</p>`).join("");

    html = html.replace(/<p><\/p>/g, "");
    preview.innerHTML = html;
});
