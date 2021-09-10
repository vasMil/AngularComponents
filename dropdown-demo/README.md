# Dropdown Demo
___

In this folder the current version of the dropdown module was deployed in order to demonstrate the process of bundling and exporting an angular module.

## Steps followed:
1. Create a new Angular project and move there the source code of the component you want to deploy
2. Install all the required dependencies:
   a. ng add @angular/elements
   b. npm install bootstrap jquery @popperjs/core
3. Import the nmp dependencies inside the angular.json file, under the scripts tag
4. Build your code, using: `ng build --prod --output-hasing none` (--prod can be omitted)
5. Create an .html file that you want to use that custom web component in and link the files in the dist folder (using the order bellow)
    a. `<link rel="stylesheet" href="path/to/dist/.../styles.css"`
    b. '<script type="text/javascript" src="path/to/dist/.../scripts.js"></script>'
    c. '<script type="text/javascript" src="path/to/dist/.../runtime.js"></script>'
    d. '<script type="text/javascript" src="path/to/dist/.../polyfills.js"></script>'
    e. '<script type="text/javascript" src="path/to/dist/.../main.js"></script>'

___
## Extra Notes
- You can not directly build this angular project, because it uses routing and has the views that are not webcomponents.
- You could maybe use a "clean angular project (that only contains custom web components)", so you only need to deploy once (Hasn't been tested)
- You could concatenate the JavaScript files in one, this is a really helpfull tutorial, at the end explains how to do it:
  - "https://www.youtube.com/watch?v=hb00ZR4sipw"