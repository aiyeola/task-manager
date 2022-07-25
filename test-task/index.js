// Mrm module to work with new line separated text files
const { lines } = require('mrm-core');

module.exports = function task() {
  // Read .gitignore if it exists
  lines('.gitignore')
    // Add lines that do not exist in a file yet,
    // but keep all existing lines
    .add(['node_modules/', '.DS_Store'])
    // Update or create a file
    .save();
};

module.exports.description = 'Adds .gitignore';
