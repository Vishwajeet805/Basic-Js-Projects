document.addEventListener("DOMContentLoaded", loadNotes);

function addNote() {
    const noteInput = document.getElementById("noteInput");
    const noteText = noteInput.value.trim();

    if (noteText === "") {
        alert("Please write something!");
        return;
    }

    createNoteElement(noteText);
    saveNote(noteText);

    noteInput.value = "";
}

function createNoteElement(text) {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function () {
        noteDiv.remove();
        deleteNote(text);
    });

    noteDiv.appendChild(deleteBtn);
    document.getElementById("notesContainer").appendChild(noteDiv);
}

function saveNote(note) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(note => createNoteElement(note));
}

function deleteNote(noteToDelete) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes = notes.filter(note => note !== noteToDelete);
    localStorage.setItem("notes", JSON.stringify(notes));
}