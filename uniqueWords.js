//given a paragraph of text, it will output the paragraph’s unique words and count of each word
function uniqueWordCount(paragraph){
  var retVal = {};
  var words = paragraph
                .toLowerCase()
                .replace(/[^a-z0-9]/g, ' ') //only alphanumeric allowed
                .split(' ')
                .filter(x=> x!='');
  
  words.forEach(x=>{
    retVal[x] = retVal[x] !== undefined ? retVal[x]+1 : 1;
  });
  
  return retVal;
};

//unit tests for function uniqueWordCount(paragraph)
describe("uniqueWordCount", function(){
  it("should have zero unique words on an empty string",function(){
    var wordsObj = uniqueWordCount("");
    Test.assertEquals(Object.keys(wordsObj).length, 0);
  });
  it("should be case insensitive when counting unique words",function(){
    var wordsObj = uniqueWordCount("This is a sentence. THIS IS A SENTENCE. ThIs Is A sEnTeNcE.");
    Test.assertEquals(wordsObj['this']), 3);
    Test.assertEquals(wordsObj['is']), 3);
    Test.assertEquals(wordsObj['a']), 3);
    Test.assertEquals(wordsObj['sentence']), 3);
  });
  it("should allow alphanumeric words",function(){
    var wordsObj = uniqueWordCount("Skimtech1 is a company name with a number.");
    Test.assertEquals(wordsObj['Skimtech1']), 1);
  });
  it("should ignore punctuation marks",function(){
    var wordsObj = uniqueWordCount("Hi, my name is Steve! How are you??");
    Test.assertEquals(wordsObj['hi,']), 3);
    Test.assertEquals(wordsObj['steve!']), 3);
    Test.assertEquals(wordsObj['you??']), 3);
    //TODO: test for other punctuation marks
  });
  //TODO: add more tests, which will probably never be added
});
