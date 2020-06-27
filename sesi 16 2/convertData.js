function convertData(arr){
    let person = []
    let data = {}
    for (let i = 0 ; i < arr.length; i ++){
        let data = {
            id : arr[i][0],
            firstName : arr[i][1],
            lastName : arr[i][2],
            email : arr[i][3]
        }
        person.push(data)
    }
    return person
}

export {
    convertData,
}