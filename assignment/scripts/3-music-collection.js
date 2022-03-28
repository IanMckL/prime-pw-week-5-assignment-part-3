console.log('***** Music Collection *****');
let collection = [];
//Parameter 1
function addToCollection (title, artist, yearPublished){
    
    toAdd = {
    titleName: title,
    artistName: artist,
    year: yearPublished
}

    collection.push(toAdd);
    return collection;
}

console.log(addToCollection('Bobby Sounds', 'Bob', '1968'));
//Parameter 2
function showCollection(array){
    console.log(array, 'The length of the collection is' + array.length + 'entries');
    for (i = 0 ; i < array.length; i++) {
        console.log(array[i].titleName + ' by ' + array[i].artistName + ' in ' + array[i].year);
    }
}

showCollection(collection);
//Parameter 3
function findByArtist(artist){
    tempArray = [];
    for (i = 0; i < collection.length; i++){
        if (collection[i].artistName === artist){
            tempArray.push(collection[i]);
        }
        else{
        }
    }
    return tempArray;
}

console.log(findByArtist('Bob'));
console.log(findByArtist('Marina'));
