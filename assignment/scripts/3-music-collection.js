console.log('***** Music Collection ******');
let collection = [];
//Parameter 1
function addToCollection (title, artist, yearPublished){
    
    toAdd = {
    titleName: title,
    artistName: artist,
    year: yearPublished
}

    collection.push(toAdd);
    return collection[0];
}

console.log(addToCollection('Bobby Sounds', 'Bob', '1968'));
addToCollection('Electra Complex', 'Marin', '2011');
addToCollection('Darkplanet', 'Davey Bow', '2015');
addToCollection(`Grum's Greatest Hits`, 'Grum' , '2000');
addToCollection('DJ Dumbly', 'Party Mix 10' , '2023');
addToCollection(`Rocky Horror Painting Exhibition`, 'Live in 2002', '2002')
addToCollection('Bobby Sounds 2','Bob','1970')

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

console.log(`Should be array with objects ==>`, findByArtist('Bob'));
console.log(`Should be empty ==>`, findByArtist('Marina'));

