let library = [
    {
        author : 'Bill Gates',
        title : 'The road Ahead',
        readingStatus : true
    },
    {
        author : 'Steve Jobs',
        title : 'Walter Isaacson',
        readingStatus : true
    },
    {
        author : 'Suzanne Collins',
        title : 'Mockingjay: the final book of the hunger games',
        readingStatus : false
    }
]

for (let i = 0; i < library.length;i++){
    if(library[i].readingStatus){
        console.log(`Already read '${library[i].author}' by ${library[i].title}`)
    }
    else {
        console.log(`You still need to read '${library[i].title}' by ${library[i].author}`)
    }
}