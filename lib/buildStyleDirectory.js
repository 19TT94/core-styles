const fse = require('fs-extra');

exports.buildResetsDir = async (npmPath, destination) => {
  let resetsDir = `${npmPath}/lib/node_modules/core-styles/core/resets`;
  let resets = `${npmPath}/lib/node_modules/core-styles/core/resets.css`;

  try {
    const resetsDirExists = await fse.pathExists(resetsDir);
    if (resetsDirExists) {
      await fse.copy(resetsDir, `${destination}/resets/`)
    }

    const resetsFileExists = await fse.pathExists(resets);
    if (resetsFileExists) {
      await fse.copy(resets, `${destination}/resets.css`)
    }

  } catch (error) {
    throw error;
  }
}

exports.buildSassDir = async (npmPath, destination) => {
  let sassDir = `${npmPath}/lib/node_modules/core-styles/core/sass`;
  let all = `${npmPath}/lib/node_modules/core-styles/core/all.scss`;
  let project = `${npmPath}/lib/node_modules/core-styles/core/project.scss`;

  try {
    const sassDirExists = await fse.pathExists(sassDir);
    if (sassDirExists) {
      await fse.copy(sassDir, `${destination}/sass/`)
    }

    const allFileExists = await fse.pathExists(all);
    if (allFileExists) {
      await fse.copy(all, `${destination}/all.scss`)
    }

    const projectFileExists = await fse.pathExists(project);
    if (projectFileExists) {
      await fse.copy(project, `${destination}/project.scss`)
    }

  } catch (error) {
    throw error;
  }
}

exports.buildStyledComponentsDir = async (npmPath, destination) => {
  let styledComponents = `${npmPath}/lib/node_modules/core-styles/core/styled-components`;

  try {
    const styledComponentsDirExists = await fse.pathExists(styledComponents);
    if (styledComponentsDirExists) {
      await fse.copy(styledComponents, `${destination}/components/`)
    }
  } catch (error) {
    throw error;
  }
}