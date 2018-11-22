/**
 * This is a utility to parse an XM XML file and transform the content for the same
 */

const {ncp} = require('ncp');
const rimraf = require('rimraf');
const path = require('path');
const config = require('./config');
 
const sourceDirectory = path.join(__dirname, 'src');

const destinationDirectory = path.join(__dirname, 'dest');

console.log('Initiating the file copier');
console.log('Deleting the destination folder');
// Clear destination directory
rimraf(destinationDirectory, (err) => {
  if(err) {
    console.log('Error deleting destination directory : ' + err);
  } else {
    console.log('Destination folder deleted successfully!');
    doCopy();
  }
});

function doCopy() {
console.log('Starting copy operation');
ncp(sourceDirectory, destinationDirectory, config, (err) => {
    if(err) {
      console.log('Error copying file: ' + err);
    } else {
      console.log('Copy operation completed successfully!');
    }
  });
}