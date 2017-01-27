
const wordByLine = [];
for (let region of this.props.ocr.ocr.regions){
  for (let line of region.lines){
    let lineText= "";
    for (let word of line.words){
      lineText += word.text+' '
    }
    wordByLine.push(lineText)
  }
}



const listItems = wordByLine.map(function(item,index) {
  return (
    <TextWrap text={item} key={index}/>
  );
});
