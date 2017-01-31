/**
 * Created by xinzheng on 1/27/17.
 */

function findURL(line) {
  const urlList = [];

  for (var i = 0; i < line.words.length; i++) {
    const word = line.words[i].text;



    const match = word.match(/(((http|ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w-]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g);

    if (match) {
      urlList.push(match[0]);
    }
    if (word.includes("tinyurl.com/") || word.includes("bit.ly/") || word.includes("goo.gl/")) {
      urlList.push(word);
    }
  }
  return urlList;
}


export function allURL(state) {
  const regions = state['regions']; //may contain multiple regions
  const URL = [];
  for (var r = 0; r < regions.length; r++) {
    const region = regions[r];
    const lines = region["lines"];
    for (var l = 0; l < lines.length; l++) {
      const urlList = findURL(lines[l]);
      if (urlList !== [])
      {
        for (var i = 0; i < urlList.length; i++) {
          URL.push(urlList[i]);
        }
      }
    }
  }
  return URL;
}
