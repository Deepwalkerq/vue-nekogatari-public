const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cheerio = require('cheerio');
const fs = require('fs');
const data = require('./data/groups.json');

// main loop
async function main() {
  
  let groupLinks = createGroupLinks(data)

  let arr1 = await getGroupsTag(groupLinks)
  // getGroupsTag(groupLinks).then(r => {
  // arr1 = r; })

  let arr2 = await getGroupsXML(groupLinks)
  // console.log(arr1)
  // console.log(arr2)

  let mergedArr = mergeArrayObjects(arr1, arr2)
  console.log(mergedArr)
  
  let newData = JSON.stringify(mergedArr)


  fs.writeFile("./data/updatedgroups.json", newData, function(err) {
    if(err) {
      return console.log(err);
    }
    
    console.log("The file was saved!");
  })
}



// get array of groups urls
function createGroupLinks(data) {
  let groupLinks = []
  for(let i = 0; i < data.length; i++) {
    groupLinks.push('https://steamcommunity.com/groups/' + data[i].url)
    
  }
  return groupLinks
}

// get array of tags with group
async function getGroupsTag(groupLinks) {
  let groupData = []
  let i = 0
  for(let link of groupLinks){
    const response = await fetch(link);
    const body = await response.text();
  

  

    let $ = cheerio.load(body)
    let id = i


    // checks if group is valid
    let groupExist = $("#message h1").html()
    if (groupExist !== null){

      groupData.push({"id" : id, "groupTag": undefined})
      i = i + 1
      continue
    }
    
    const groupTag = $(".grouppage_header_abbrev", ".grouppage_header_name")
    groupData.push({"id" : id, "groupTag": (groupTag.text()  || '')})
    i = i + 1


    
    
  }

  return groupData
}

// get array of some xml group data
async function getGroupsXML(groupLinks) {
  let groupXML = []
  let i = 0
  for(let link of groupLinks){
    const response = await fetch(link + "/memberslistxml/?xml=1");
    const body = await response.text();

    let $ = cheerio.load(body)
    let id = i

    // checks if group is valid
    let groupExist = $("#message h1").html()
    if (groupExist !== null){
      groupXML.push({"id" : id, "isActive": false, "groupName": undefined, "memberCount": undefined, "groupOwner": undefined})
      i = i + 1
      continue
    }
    
    let groupName = $('groupName')[0].children[0].data;
    // get rid of cdata
    groupName = groupName.replace("[CDATA[", "").replace("]]", "");
    
    let memberCount = $('memberCount')[0].children[0].data
    let owner = $('members SteamID64')[0].children[0].data
    let isActive = true
    let groupURL = groupLinks[i]
    let groupOwnerName = data[i].groupOwnerName

    
    groupXML.push({"id": id, "groupName": groupName, "memberCount": memberCount, "groupOwner": owner, 
    "groupOwnerName": groupOwnerName, "isActive": isActive, "groupURL": groupURL})

    i = i + 1
    
  }
  return groupXML
}


function mergeArrayObjects(arr1,arr2){
  return arr1.map((item,i)=>{
     if(item.id === arr2[i].id){
         //merging two objects
       return Object.assign({},item,arr2[i])
     }
  })
}

// console.log(groupLinks)
// getGroupsXML(groupLinks).then(r => console.log(r))

main().then()


