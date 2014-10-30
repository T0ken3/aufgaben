var input = new Input();
input.on("new", function (note) { notePad.add(new Note(note)); });
