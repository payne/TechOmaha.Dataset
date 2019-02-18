'use strict';
const axios = require('axios');
const url = 'https://raw.githubusercontent.com/payne/TechOmaha.Dataset/master/TechOmaha.json';
axios.get(url)
  .then(data => {
    //console.log(data);
    const t = data.data; // don't need to parse!? nice! :-)
    console.log(`There are ${t.groups.length} groups`)
    const inactive = t.groups.filter(g => g.active === false);
    console.log(`${inactive.length} are not active.`);
    console.log('Here are notes about those groups:');
    inactive.forEach(ig => {
      console.log(`\t${ig.name}`);
      console.log(`\t${ig.note}\n`);
    })
    console.log(`\nThere are ${t.videos.length} videos in the archive!`);

  })
  .catch(error => { console.log(`error: ${error}`); });
