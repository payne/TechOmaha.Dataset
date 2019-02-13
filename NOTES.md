
# Logos
To get logos from http://techomaha.com/list-omaha-user-groups/
1. [Export HAR data from DevTools Network view](https://stackoverflow.com/questions/7521942/export-data-from-chrome-developer-tool)
2. `grep -i uploads techomaha.com.har   > logos.sh`
3. Change "url:" to wget
4. Run the script 

# Groups homepages
1. `anchors = document.getElementsByTagName('a');`
2. `for (let i=0; i < anchors.length; i++) { console.log(anchors[i].getAttribute('href')); }`
3. Right click on devtools console and save as to get the output into a text file.


# Group Names
1. `paras = document.getElementsByTagName('p');`
2. `for (let i=0; i < paras.length; i++) { console.log(paras[i].innerText); }`
3. Right click on devtools console and save as to get the output into a text file.

# Video thumb nails
1. `imgs=document.getElementsByTagName('img');`
2. `for (let i=0; i < imgs.length; i++) { console.log(imgs[i].src); }`

