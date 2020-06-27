let library = [
    {
        author : 'Bill Gates',
        title : 'The road Ahead',
        images: 'https://image.winudf.com/v2/image/YmQuY29tLmRvZC5iaWxsZ2F0ZXN0aGVyb2FkYWhlYWRfc2NyZWVuXzBfMTUzMDEwNTgzNF8wNTM/screen-0.jpg?fakeurl=1&type=.jpg',
        readingStatus : true
    },
    {
        author : 'Steve Jobs',
        title : 'Walter Isaacson',
        images: 'https://images-na.ssl-images-amazon.com/images/I/61tviUP-E3L.jpg',
        readingStatus : true
    },
    {
        author : 'Suzanne Collins',
        title : 'Mockingjay: the final book of the hunger games',
        images: 'https://m.media-amazon.com/images/I/51zkheo7x8L.jpg',
        readingStatus : false
    }
]

let hasil = document.getElementById('hasil')
let txt = ""
for (let i = 0; i < library.length;i++){
    if(library[i].readingStatus){
        console.log(`Already read '${library[i].author}' by ${library[i].title}`)
        txt += `<div style="float: left;margin-left: 5%"><img src="${library[i].images}" width=400px><br>Already read '${library[i].author}' by ${library[i].title}</div>`
    }
    else {
        console.log(`You still need to read '${library[i].title}' by ${library[i].author}`)
        txt += `<div style="float: left; margin-left: 5%"><img src="${library[i].images}" width=400px><br>You still need to read '${library[i].title}' by ${library[i].author}</div>`
    }
}
hasil.innerHTML = txt