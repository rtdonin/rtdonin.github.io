function countingCharacters(stringToCount) {
    console.log(stringToCount + " has " + stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind){
    var characterCount = 0;
    for (var position = 0; position < stringToCount.length; position++){
        if (stringToCount[position] == characterToFind){
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + characterCount);
}

function countingCharacters3(str, search) {
    var count = 0;
    var numChars = search.length;
    var lastIndex = str.length - numChars;

    for (var index = 0; index <= lastIndex; index++){
        var current = str.substring(index, index + numChars);
        if (current == search){
            count++;
        }
    }
    return count;
    // console.log("String to search in: " + str);
    // console.log("chracter to find: " + search);
    // console.log("Number of times the character appears: " + count);
}