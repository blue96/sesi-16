var shoppingList = {
    'store':'Hero Department Store',
    'location':'Medan',
    'list' : ['cereal','fruits','vegetables']
}

for (let key in shoppingList){
    if (Array.isArray(shoppingList[key])){
        console.log(`${key}: `)
        for(let i = 0; i< shoppingList[key].length;i++){
            console.log(`${shoppingList[key][i]}`)
        }
    }
    else{
        console.log(`${key}: ${shoppingList[key]}`)
    }

}