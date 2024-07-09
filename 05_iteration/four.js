const myObj = {
    js: 'javaScript',
    kt: 'Kotlin',
    java: 'java',
    swift: 'swift'
}

for (const key in myObj) {
    // console.log(`${key} shortcut for ${myObj[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

//return array key means array index
for (const key in programming) {
//    console.log(key);
}

const map = new Map()
map.set('IN',"India")
map.set('USA', " United States of America")
map.set('FR', "France")

for (const key in map) {
    console.log(key);
}