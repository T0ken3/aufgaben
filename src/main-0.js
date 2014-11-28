var client = new Client();
var notePad = new NotePad();

var note1 = new Note('Text 1');
var note2 = new Note('Text 2');
var note3 = new Note('Text 3');

var note4 = new Note('Text 4');
var note5 = new Note('Text 5');
var note6 = new Note('Text 6');

var note7 = new Note('Text 7');
var note8 = new Note('Text 8');
var note9 = new Note('Text 9');

// notePad.add(note1);
// notePad.add(note2);

client.on('connected', function () {
    console.log('Connection successfully established!');
});

// Bevor die Anfrage an den Server gestellt wird
client.on('create:create', function createListener(note) {
    console.info('Creating new note with text: ' + note.text);
});

//client.connect('https://wrong.uri');
client.connect('https://secure/note/server');

// client.create(note1);

client.create(note1, function callback(err, note) {
    client.create(note2, function callback(err, note) {
        client.create(note3);
        notePad.add(note1);
        notePad.add(note2);
        notePad.add(note3);
    });
});

client
    .create(note4)
    .then(function () {
        client.create(note5)
    })
    .then(function () {
        client.create(note6);
        notePad.add(note4);
        notePad.add(note5);
        notePad.add(note6);
    })

