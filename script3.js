function addNote() {

    let text = document.getElementById("noteInput").value;

    if (text === "") return;

    let noteDiv = document.createElement("div");
    noteDiv.className = "note";

    noteDiv.innerHTML = text +
        " <button onclick='this.parentElement.remove()'>Delete</button>";

    document.getElementById("notes").appendChild(noteDiv);

    document.getElementById("noteInput").value = "";
}