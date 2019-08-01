#!/usr/bin/env node

/**
 * Module dependencies.
 */

const fs = require('fs');
const figlet = require('figlet');
const program = require('commander');
const inquirer = require('inquirer');
const { prompt } = require('inquirer');
const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt');
const shell = require('shelljs');
const ora = require('ora');
const spinner = ora('spinning');

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection);

// run setup program
program
    .version('1.0.0', '-v, --version')
    .option('-c, --current', 'add to current directory')
    .parse(process.argv);

// async function to wait for response from user
(async () => {
    await write_figlet("Core Styles");

    let location = null;
    setTimeout(async () => {

        location = await run();

        console.log(location);

        console.log("\n Complete! \n");

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
