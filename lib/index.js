#!/usr/bin/env node

/**
 * Module dependencies.
 */

const { mkdir } = require('fs');
const fse = require('fs-extra');
const program = require('commander');
const inquirer = require('inquirer');
const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt');
const shell = require('shelljs');

/**
 * Utils
 */
const { getDestination, getPreprocessor } = require('./utils/prompts.js');
const { writeFiglet } = require('./utils/helpers.js');
const { buildSassDir, buildStyledComponentsDir } = require('./buildStyleDirectory.js');

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection);

// run setup program
program
    .version('1.0.0', '-v, --version')
    .option('-c, --current-dir', 'add to current directory')
    .option('-s, --sass', 'use sass files')
    .option('-sc, --styled-components', 'use styled components')
    .parse(process.argv);

if (program.current) {
    // get current working directory
    let destination = shell.exec('pwd').stdout;
    destination = destination.replace(/[\n\r]/g, '') + '/core';
    // add new core directory
    shell.mkdir('core');
    // get global npm path
    let npmPath = shell.exec('npm config get prefix').stdout;
    npmPath = npm_path.replace(/[\n\r]/g, '');

    // copy resets to core folder
    let resets = `${npmPath}/lib/node_modules/core-styles/core/resets`;
    fse.copy(resets, destination)
        .then(() => {
            if (program.sass) {
                let childDestination = `${destination}/sass`;
                shell.mkdir(childDestination);
                buildSassDir(npmPath, childDestination);
            }
            
            if (program.styledComponents) {
                let childDestination = `${destination}/styled-components`;
                shell.mkdir(childDestination);
                buildSassDir(npmPath, childDestination);
            }

            // end program
            console.log("\n Core styles added to project! \n");
            process.exit(1);
        })
        .catch(err => {
            console.log(error);
            throw err;
        });
} else {
    // async function to wait for response from user
    (async () => {
        await writeFiglet("Core Styles");

        setTimeout(async () => {
            // get requested destination for core folder
            let destination = await getDestination();
            destination = `${destination}/core`;
            // add new core directory
            shell.mkdir(destination);
            // get global npm path
            let npmPath = shell.exec('npm config get prefix').stdout;
            npmPath = npmPath.replace(/[\n\r]/g, '');

            let preprocessor = await getPreprocessor();
            let childDestination = `${destination}/${preprocessor}`
            shell.mkdir(childDestination);

            if (preprocessor === 'sass') {
                buildSassDir(npmPath, childDestination);
            }

            if (preprocessor === 'styled-components') {
                buildStyledComponentsDir(npmPath, childDestination);
            }

            // end program
            console.log("\n Core styles added to project! \n");
            process.exit(1);
        }, 500);
    })()
}

// Allows us to call this function from outside of the library file.
exports.run = getDestination;
