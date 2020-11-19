# Core Styles

Core styles is a group of resets, base styles, and mixins to add to an initial project build.

### Local Installation
[Core Styles NPM Package](https://www.npmjs.com/package/core-styles)

`npm install core-styles`

Currently this feature will install all available configurations to the `node_modules`. Please use Global installation if you plan on confuring the files.

### Global Installation

`npm install -g core-styles`

run `addcore` from your project directory

* follow prompt to add core styles folder to your project

* or run `addcore --current` to add the folder to your current directory

### Usage

The current implementation allows for you to create a base style directory with resets and general style files and helpers. The supported configurations for this directory are *Sass/Scss* with vue projects in mind and *styled-components* for react projects.

#### Sass Configuration

##### Import files from `node_modules`
* add `@import '~/core-styles/core/all'` to your `app.scss` file
* use `/resets` to use only the css resets
* use `/project` to use only the project specific styles

##### Global installation for custom configuration (reccomended)
* add the `/style` folder with the cli tool
* update configure the files in the directory
* import your files as specified above from your `app.scss` file

#### Styled Components

##### Import files from `node_modules` as specified above

##### Global installation for custom configuration (reccomended)
* use cli to create `/style`
* add general styled components to the `/style/components`
* import `styled-components` and helpers provided where needed

```js
import { 
  pad,
  colors
} from '../style/components/general.js';

const Menu = styled.nav`
  width: 100%;
  padding: ${pad}px;
  background: ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
```

### Contributing

```bash
git clone git@github.com:19TT94/core-styles.git`

npm install

npm link

# navigate to test directory

npm link core-styles

npm install

addcore
```
