#!/usr/bin/env node

/**
 * Module dependencies.
 */

const fs = require('fs');
const fse = require('fs-extra');
const figlet = require('figlet');
const program = require('commander');
const inquirer = require('inquirer');
const { prompt } = require('inquirer');
const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt');
const shell = require('shelljs');


inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection);

// run setup program
program
    .version('1.0.0', '-v, --version')
    .option('-c, --current', 'add to current directory')
    .parse(process.argv);

// async function to wait for response from user
(async () => {
    await write_figlet("Core Styles");

    setTimeout(async () => {
        // get requested destination for core folder
        let destination = await run();
        destination = destination + '/core';
        // add new core directory
        shell.mkdir('core');
        // get global npm path
        let npm_path = shell.exec('npm config get prefix').stdout;
        npm_path = npm_path.replace(/[\n\r]/g, '');
        // build reference to core directory
        let source = npm_path + '/lib/node_modules/core-styles/core';
        // copy core styles to new directory
        let result = copy_directory(source, destination);
        console.log(result);
        if(result) {
            // end program
            console.log("\n Core styles added to project! \n");
            process.exit(1);
        }

    }, 500);
})()

async function run() {
    const response = await prompt([
        {
            type: 'file-tree-selection',
            name: 'file',
            message: 'Where do you want the core folder?'
        }
    ]);

    return response.file;
}

async function copy_directory(source, dest) {
    //copy directory content including subfolders
    fse.copy(source, dest, function (err) {
      if (err) {
        throw err;
      } else {
        return true;
      }
    });
}

async function write_figlet(text) {
    let data = figlet.text(text, {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        kerning: 'fitted'
    }, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });
}

// Allows us to call this function from outside of the library file.
exports.run = run;
