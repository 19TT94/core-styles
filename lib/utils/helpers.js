const figlet = require('figlet');

exports.writeFiglet = async (text) => {
  figlet.text(text, {
      font: 'Standard',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      kerning: 'fitted'
  }, function(err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        throw err;
      }

      console.log(data);
  });
}