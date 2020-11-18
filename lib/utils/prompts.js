const { prompt } = require('inquirer');

exports.getDestination = async () => {
    const response = await prompt([
        {
            type: 'file-tree-selection',
            name: 'file',
            message: 'Where do you want the core folder?',
            onlyShowDir: true
        }
    ]);

    return response.file;
}

exports.getPreprocessor = async () => {
    const response = await prompt([
        {
            type: 'list',
            name: 'preprocessor',
            message: 'What type css preprocessor are you using? Current options listed below:',
            choices: [
                'sass/scss',
                'styled-components'
            ]
        }
    ]);

    return response.preprocessor;
}