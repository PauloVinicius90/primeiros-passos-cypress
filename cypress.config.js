const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
<<<<<<< HEAD
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
=======

    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',

>>>>>>> a320857 (Add page objects)
  },
});
