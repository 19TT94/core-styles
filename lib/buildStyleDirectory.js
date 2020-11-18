const fse = require('fs-extra');

exports.buildSassDir = async (npmPath, destination) => {
  console.log(npmPath);
  let sassFolder = `${npmPath}/lib/node_modules/core-styles/core/sass`;
  let all = `${npmPath}/lib/node_modules/core-styles/core/all.scss`;
  let project = `${npmPath}/lib/node_modules/core-styles/core/project.scss`;

  fse.copy(sassFolder, destination)
    .then(() => {
      fse.copyFile(all, destination)
      .then(() => {
        fse.copyFile(project, destination)
        .then(() => {
          console.log("\n sass directory built \n")
        })
        .catch(err => {
          throw err;
        });
      })
      .catch(err => {
        throw err;
      });
    })
    .catch(err => {
      throw err;
    });
}

exports.buildStyledComponentsDir = async (npmPath, destination) => {
  let styledComponentsFolder = `${npmPath}/lib/node_modules/core-styles/core/styled-components`;
  let resets = `${npmPath}/lib/node_modules/core-styles/core/resets.css`;
  fse.copy(styledComponentsFolder, destination)
    .then(() => {
      fse.copyFile(resets, destination)
      .then(() => {
        console.log("\n styled-components directory built \n")
      })
      .catch(err => {
        throw err;
      });
    })
    .catch(err => {
      throw err;
    });
}