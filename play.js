'use strict';
// Copy of https://repl.it/@payne/TechOmahaDataSetPlay
const request = require('request');
const url = 'https://raw.githubusercontent.com/payne/TechOmaha.Dataset/master/TechOmaha.json';
request(url, function (error, response, body) {
  const t = JSON.parse(body);
  console.log(`There are ${t.groups.length} groups`)
  const inactive = t.groups.filter(g => g.active === false);
  console.log(`${inactive.length} are not active.`);
  console.log('Here are notes about those groups:');
  inactive.forEach(ig => {
    console.log(`\t${ig.name}`);
    console.log(`\t${ig.note}`);
  })
  console.log(`\nThere are ${t.videos.length} videos in the archive!`);
});