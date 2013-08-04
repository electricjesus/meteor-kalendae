Package.describe({
  summary: "Kalendae is an attempt to do something that nobody has yet been able to do: make a date picker that doesn't suck."
});

Package.on_use(function (api) {
  api.add_files([
    // FILES

    'Kalendae/build/arrows.png',
    'Kalendae/build/kalendae.min.js',
    'Kalendae/build/kalendae.js',
    'Kalendae/build/kalendae.css',
    'Kalendae/build/close.png',
    'Kalendae/build/kalendae.standalone.min.js'

    // END FILES
  ], 'client');
});
