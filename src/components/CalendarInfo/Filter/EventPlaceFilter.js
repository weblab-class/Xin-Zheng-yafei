/**
 * Created by xinzheng on 1/27/17.
 */


export function lineHeight(line) {
  //Given a single line object, compute size and string of the texts.
  const h = line.boundingBox.split(",")[3];
  let lineStr = '';

  for (var i = 0; i < line.words.length-1; i++) {
    lineStr += line.words[i].text+ " ";}

  lineStr += line.words[i].text;//last word

  return {"line":lineStr,"height": parseInt(h)};
}


export function likeAddress(line) {
  let like = 0;  // if string like an address, like =1.
  let lineStr = '';
  for (var i = 0; i < line.words.length-1; i++) {
    lineStr += line.words[i].text+ " ";}
  lineStr += line.words[i].text;//last word
  if (/\d/.test(lineStr)) {
    like = 1;
  }
  if (lineStr.match(/room/i) || lineStr.match(/house/i) || lineStr.match(/street/i) || lineStr.match(/avenue/i) || lineStr.match(/ave/i) || lineStr.match(/apt/i) || lineStr.match(/place/i) || lineStr.match(/house/i) || lineStr.match(/location/i))
  {
    like += 1;
  }

  return {"line":lineStr,"address": like}
}


/// Wrapper function.
//Sort by specified criteria.
//Return array of {lineStr, sortScore}

export function sortLines(state, sortFun, keyWord) {
  const regions = state['regions']; //may contain multiple regions
  const result = [];
  for (var r = 0; r < regions.length; r++) {
    const region = regions[r];
    const lines = region["lines"];
    for (var l = 0; l < lines.length; l++) {
      result.push(sortFun(lines[l]));
    }
  }
  return result
    .sort((a, b) => parseFloat(b[keyWord]) - parseFloat(a[keyWord]))
    .map(item => item.line)

}



//test: sort by height
// export function sortLines(state,lineHeight, "height");

// test: sort by address
// export function sortLines(state,likeAddress, "address");











