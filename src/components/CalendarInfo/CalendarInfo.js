import React from "react";
import s from "./CalendarInfo.css"
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import {sortLines, lineHeight, likeAddress} from "./Filter/EventPlaceFilter"
import {allURL} from "./Filter/URLFilter"
import Chrono from "chrono-node";
import Datetime from 'react-datetime';


const SortableItemAll = SortableElement(({indexNum, value, onClickAll, panel}) => <li className={s.textWrap}
                                                                                      onClick={()=>onClickAll(indexNum, panel)}>{value}</li>);
const SortableItemSelected = SortableElement(({indexNum, value, onClickSelected, panel}) => <li
  className={s.textWrapClick}
  onClick={()=>onClickSelected(indexNum, panel)}>{value}</li>);

const SortableListSelected = SortableContainer(({panel, selected, onClickSelected}) => {
  return (
    <div>

      <ul>
        {selected.map((value, index) =>
          <SortableItemSelected key={`item-${index}`} value={value} index={index} collection="1"
                                onClickSelected={onClickSelected} indexNum={index} panel={panel}/>
        )}
      </ul>
    </div>
  );
});


const SortableListAll = SortableContainer(({panel, all, onClickAll}) => {
  return (
    <div>
      <ul>
        {all.map((value, index) =>
          <SortableItemAll key={`item-${index}`} value={value} index={index} collection="0" onClickAll={onClickAll}
                           indexNum={index} disabled={true} panel={panel}/>
        )}
      </ul>
    </div>
  );
});



const SortableListSelectedTime = SortableContainer(({panel, selected, onClickSelected}) => {
  return (
    <div>

      <ul>
        {selected.map((value, index) =>
          <SortableItemSelected key={`item-${index}`} value={value.text} index={index} collection="1"
                                onClickSelected={onClickSelected} indexNum={index} panel={panel}/>
        )}
      </ul>
    </div>
  );
});


const SortableListAllTime = SortableContainer(({panel, all, onClickAll}) => {
  return (
    <div>
      <ul>
        {all.map((value, index) =>
          <SortableItemAll key={`item-${index}`} value={value.text} index={index} collection="0" onClickAll={onClickAll}
                           indexNum={index} disabled={true} panel={panel}/>
        )}
      </ul>
    </div>
  );
});


// CalendarInfo page component
class CalendarInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ocr: {
        "language": "en",
        "textAngle": -1.6000000000000336,
        "orientation": "Up",
        "regions": [
          {
            "boundingBox": "56,368,2144,3471",
            "lines": [
              {
                "boundingBox": "256,368,1944,264",
                "words": [
                  {
                    "boundingBox": "256,384,328,248",
                    "text": "The"
                  },
                  {
                    "boundingBox": "712,368,1488,264",
                    "text": "Academic"
                  }
                ]
              },
              {
                "boundingBox": "56,680,1664,256",
                "words": [
                  {
                    "boundingBox": "56,688,536,248",
                    "text": "Job"
                  },
                  {
                    "boundingBox": "720,680,1000,256",
                    "text": "Search"
                  }
                ]
              },
              {
                "boundingBox": "65,1095,1926,129",
                "words": [
                  {
                    "boundingBox": "65,1095,176,100",
                    "text": "Are"
                  },
                  {
                    "boundingBox": "283,1125,200,99",
                    "text": "you"
                  },
                  {
                    "boundingBox": "535,1126,63,72",
                    "text": "a"
                  },
                  {
                    "boundingBox": "644,1097,209,101",
                    "text": "PhD"
                  },
                  {
                    "boundingBox": "903,1098,425,103",
                    "text": "student"
                  },
                  {
                    "boundingBox": "1375,1128,117,73",
                    "text": "or"
                  },
                  {
                    "boundingBox": "1537,1098,454,104",
                    "text": "Postdoc"
                  }
                ]
              },
              {
                "boundingBox": "77,1250,1826,133",
                "words": [
                  {
                    "boundingBox": "77,1253,522,126",
                    "text": "tomorrow"
                  },
                  {
                    "boundingBox": "637,1250,153,102",
                    "text": "for"
                  },
                  {
                    "boundingBox": "828,1253,175,101",
                    "text": "the"
                  },
                  {
                    "boundingBox": "1047,1253,380,130",
                    "text": "faculty"
                  },
                  {
                    "boundingBox": "1471,1253,432,104",
                    "text": "search?"
                  }
                ]
              },
              {
                "boundingBox": "86,1397,1724,139",
                "words": [
                  {
                    "boundingBox": "86,1397,310,103",
                    "text": "Come"
                  },
                  {
                    "boundingBox": "445,1402,271,101",
                    "text": "learn"
                  },
                  {
                    "boundingBox": "766,1406,320,100",
                    "text": "about"
                  },
                  {
                    "boundingBox": "1131,1407,466,102",
                    "text": "effective"
                  },
                  {
                    "boundingBox": "1632,1410,178,126",
                    "text": "job"
                  }
                ]
              },
              {
                "boundingBox": "94,1553,2035,130",
                "words": [
                  {
                    "boundingBox": "94,1553,352,97",
                    "text": "search"
                  },
                  {
                    "boundingBox": "494,1559,536,121",
                    "text": "strategies"
                  },
                  {
                    "boundingBox": "1077,1559,200,97",
                    "text": "and"
                  },
                  {
                    "boundingBox": "1327,1564,631,119",
                    "text": "preparation"
                  },
                  {
                    "boundingBox": "2011,1562,118,99",
                    "text": "of"
                  }
                ]
              },
              {
                "boundingBox": "106,1698,1909,128",
                "words": [
                  {
                    "boundingBox": "106,1698,635,116",
                    "text": "documents,"
                  },
                  {
                    "boundingBox": "786,1705,495,121",
                    "text": "including"
                  },
                  {
                    "boundingBox": "1323,1712,526,93",
                    "text": "overviews"
                  },
                  {
                    "boundingBox": "1898,1711,117,95",
                    "text": "of"
                  }
                ]
              },
              {
                "boundingBox": "108,1844,1665,122",
                "words": [
                  {
                    "boundingBox": "108,1844,166,95",
                    "text": "the"
                  },
                  {
                    "boundingBox": "321,1845,165,112",
                    "text": "CV,"
                  },
                  {
                    "boundingBox": "526,1847,500,119",
                    "text": "Tuesday January 5 1:30 - 3:00pm",
                  },
                  {
                    "boundingBox": "1073,1852,454,91",
                    "text": "research"
                  },
                  {
                    "boundingBox": "1576,1855,197,91",
                    "text": "and"
                  }
                ]
              },
              {
                "boundingBox": "125,1987,1110,120",
                "words": [
                  {
                    "boundingBox": "125,1987,444,120",
                    "text": "diversity"
                  },
                  {
                    "boundingBox": "614,2000,621,80",
                    "text": "statements."
                  }
                ]
              },
              {
                "boundingBox": "139,2317,1635,171",
                "words": [
                  {
                    "boundingBox": "139,2321,670,167",
                    "text": "Tuesday"
                  },
                  {
                    "boundingBox": "908,2317,635,163",
                    "text": "January"
                  },
                  {
                    "boundingBox": "1619,2318,155,127",
                    "text": "17"
                  }
                ]
              },
              {
                "boundingBox": "172,2512,1643,169",
                "words": [
                  {
                    "boundingBox": "172,2524,324,134",
                    "text": "1:30"
                  },
                  {
                    "boundingBox": "565,2589,50,13",
                    "text": "-"
                  },
                  {
                    "boundingBox": "686,2515,573,166",
                    "text": "3:00pm"
                  },
                  {
                    "boundingBox": "1306,2512,509,166",
                    "text": "14-270"
                  }
                ]
              },
              {
                "boundingBox": "174,2704,1728,100",
                "words": [
                  {
                    "boundingBox": "174,2719,310,85",
                    "text": "Register"
                  },
                  {
                    "boundingBox": "516,2744,93,45",
                    "text": "on"
                  },
                  {
                    "boundingBox": "645,2713,491,83",
                    "text": "careerbridge"
                  },
                  {
                    "boundingBox": "1158,2712,9,85",
                    "text": "I"
                  },
                  {
                    "boundingBox": "1189,2704,713,91",
                    "text": "bit.ly/careerbridge"
                  }
                ]
              },
              {
                "boundingBox": "395,3538,329,142",
                "words": [
                  {
                    "boundingBox": "395,3538,329,142",
                    "text": "gelOd"
                  }
                ]
              },
              {
                "boundingBox": "749,3596,385,63",
                "words": [
                  {
                    "boundingBox": "749,3596,68,29",
                    "text": "MIT"
                  },
                  {
                    "boundingBox": "829,3604,112,35",
                    "text": "Global"
                  },
                  {
                    "boundingBox": "954,3615,180,44",
                    "text": "Education"
                  }
                ]
              },
              {
                "boundingBox": "1168,3627,169,86",
                "words": [
                  {
                    "boundingBox": "1168,3627,169,86",
                    "text": "IAP"
                  }
                ]
              },
              {
                "boundingBox": "751,3630,390,65",
                "words": [
                  {
                    "boundingBox": "751,3630,28,28",
                    "text": "&"
                  },
                  {
                    "boundingBox": "787,3634,115,35",
                    "text": "Career"
                  },
                  {
                    "boundingBox": "912,3645,229,50",
                    "text": "Development"
                  }
                ]
              },
              {
                "boundingBox": "398,3699,925,140",
                "words": [
                  {
                    "boundingBox": "398,3699,394,97",
                    "text": "Career"
                  },
                  {
                    "boundingBox": "833,3711,490,128",
                    "text": "Services"
                  }
                ]
              }
            ]
          }
        ]
      },

      currentPanel: "Title",
      originOCR: [],
      allTitle: [],
      allTime: [],
      allPlace: [],
      allURL: [],
      selectedTitle: [],
      selectedTime: [],
      selectedPlace: [],
      selectedURL: [],
      wholeWord: "",
      finalStartTime: null,
      finalEndTime: null,
    };

    this.submit = this.submit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initClient = this.initClient.bind(this);
    this.updateSigninStatus = this.updateSigninStatus.bind(this);
    this.onSortEndAll = this.onSortEndAll.bind(this);
    this.onSortEndSelected = this.onSortEndSelected.bind(this);

    this.onClickAll = this.onClickAll.bind(this);
    this.onClickSelected = this.onClickSelected.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this);





  }

  handleSubmit() {
    gapi.load('client', this.initClient);
  }

  initClient() {

    // Initialize the client with API key and People API, and initialize OAuth with an
    // OAuth 2.0 client ID and scopes (space delimited string) to request access.
    gapi.client.init({
      apiKey: 'AIzaSyANWhk-aYTE-SmP4PoMHNKgTqTAiTkbfnM',
      clientId: '367785159299-tebqtl75v98og0kg5qqrtcabonnbg2i2.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/calendar'
    }).then(() => {
      // Listen for sign-in state changes.
      console.log("init");
      gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

      // Handle the initial sign-in state.
      this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  }


  updateSigninStatus(isSignedIn) {
    // When signin status changes, this function is called.
    // If the signin status is changed to signedIn, we make an API call.
    if (isSignedIn) {
      console.log("signedIN");
      this.submit();
    }
  }

  submit() {
    this.props.SubmitToRedux(this.state);
    // this.props.router.push('/success');

    const eventName = this.state.selectedTitle.join(" ");
    const locationName = this.state.selectedPlace.join(" ");
    const description = this.state.wholeWord;
    const start = this.state.finalStartTime;
    const end = this.state.finalEndTime;
    const urlInPoster = this.state.selectedURL;


    var event = {
      'summary': eventName,
      'location': locationName,
      'description': "URL:"+urlInPoster+"\n\n"+description,
      'start': {
        'dateTime': start,
      },
      'end': {
        'dateTime': end,
      },
      "source":{
        "title":"Poster URL",
        "url": this.props.url.URL,
      },
      'reminders': {
        'useDefault': false,
        'overrides': [
          // {'method': 'email', 'minutes': 24 * 60},
          {'method': 'popup', 'minutes': 10}
        ]
      }
    };


    gapi.client.load('calendar', 'v3')
      .then(() => {
          var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
          });
          request.execute(() => console.log("done"));
        }
      )
  }


  onSortEndAll({oldIndex, newIndex}) {
    this.setState({
      ["all" + this.state.currentPanel]: arrayMove(this.state["all" + this.state.currentPanel], oldIndex, newIndex)
    });
  };

  onSortEndSelected({oldIndex, newIndex}) {
    this.setState({
      ["selected" + this.state.currentPanel]: arrayMove(this.state["selected" + this.state.currentPanel], oldIndex, newIndex)
    });
  };


  onClickAll(index, panel) {
    if (panel !== "Time") {
      console.log("clickall" + index + panel);
      const tempAll = this.state["all" + panel];
      const tempSelect = this.state["selected" + panel];

      tempSelect.push(tempAll[index]);

      tempAll.splice(index, 1);
      this.setState({
        ["all" + panel]: tempAll,
        ["selected" + panel]: tempSelect
      });
    }
    else{
      if (this.state.selectedTime.length == 0){
        const tempAll = this.state.allTime;
        const tempSelect = this.state.selectedTime;

        tempSelect.push(tempAll[index]);

        tempAll.splice(index, 1);
        this.setState({
          allTime: tempAll,
          selectedTime: tempSelect,
          finalStartTime: tempSelect[0].start.date(),
          finalEndTime: tempSelect[0].end ? tempSelect[0].end.date() : null,
        })
      }
      else{
        const tempAll = this.state.allTime;
        const tempSelect = this.state.selectedTime;

        tempSelect.push(tempAll[index]);
        tempAll.push(tempSelect.shift());

        tempAll.splice(index, 1);
        this.setState({
          allTime: tempAll,
          selectedTime: tempSelect,
          finalStartTime: tempSelect[0].start.date(),
          finalEndTime: tempSelect[0].end ? tempSelect[0].end.date() : null,

        })


      }




    }
  };

  onClickSelected(index, panel) {

    console.log("clickselect" + index + panel);

    const tempAll = this.state["all" + panel];
    const tempSelect = this.state["selected" + panel];

    tempAll.push(tempSelect[index]);

    tempSelect.splice(index, 1);
    this.setState({
      ["all" + panel]: tempAll,
      ["selected" + panel]: tempSelect
    });

    if(this.state.selectedTime.length == 0){
      this.setState(
        {
          finalStartTime: null,
          finalEndTime: null,
        }
      )
    }

  };


  changePanel(panel) {
    this.setState(
      {
        currentPanel: panel,
      });

  }


  componentWillMount() {
    let wholeWord = "";
    const wordByLine = [];
    for (let region of this.state.ocr.regions) {
      for (let line of region.lines) {
        let lineText = "";
        for (let word of line.words) {
          lineText += word.text + ' ';
          wholeWord += word.text + ' '
        }
        wordByLine.push(lineText)
      }

    }


    const lineByHeight = sortLines(this.state.ocr, lineHeight, "height");
    const lineByAddress = sortLines(this.state.ocr, likeAddress, "address");
    const lineByURL = allURL(this.state.ocr);


    this.setState(
      {
        originOCR: wordByLine,
        allTitle: lineByHeight.slice(2),
        selectedTitle: lineByHeight.slice(0, 2),
        allPlace: lineByAddress.slice(1),
        selectedPlace: lineByAddress.slice(0, 1),
        allURL: lineByURL.slice(1),
        selectedURL: lineByURL.slice(0, 1),
        allTime: [...Chrono.parse(wholeWord)].slice(1),
        selectedTime: [...Chrono.parse(wholeWord)].slice(0, 1),
        finalStartTime: [...Chrono.parse(wholeWord)].slice(0, 1)[0]? [...Chrono.parse(wholeWord)].slice(0, 1)[0].start.date() : null,
        finalEndTime: [...Chrono.parse(wholeWord)].slice(0, 1)[0]? ([...Chrono.parse(wholeWord)].slice(0, 1)[0].end? [...Chrono.parse(wholeWord)].slice(0, 1)[0].end.date() : null) : null,
        wholeWord: wholeWord,
      });


  }



  handleStartTimeChange(time){
    console.log(time);
    this.setState(
      {
        finalStartTime: time._d,
      }
    )
  }

  handleEndTimeChange(time){
    console.log(time);
    this.setState(
      {
        finalEndTime: time._d,
      }
    )
  }

  render() {

    let areaContent = null;
    if (this.state.currentPanel !== "Time") {
      areaContent =
        <div>
          <SortableListSelected panel={this.state.currentPanel}
                              selected={this.state["selected" + this.state.currentPanel]}
                              onSortEnd={this.onSortEndSelected}
                              onClickSelected={this.onClickSelected} pressDelay={200}/>
          <div className = {s.poolHeading}>
            <h1>Tap to select</h1>
          </div>
        <SortableListAll panel={this.state.currentPanel} all={this.state["all" + this.state.currentPanel]}
                         onSortEnd={this.onSortEndAll}
                         onClickAll={this.onClickAll} pressDelay={200}/>
      </div>
    }
    else {
      areaContent =
        <div className = {s.wrapTime}>
          <div className = {s.timeForm}>
            <p>Start Time</p>
            <Datetime onChange={this.handleStartTimeChange} value={this.state.finalStartTime}/>
            <p>End Time</p>
            <Datetime onChange={this.handleEndTimeChange} value={this.state.finalEndTime} />
          </div>

          <div className = {s.ulTime}>
            <SortableListSelectedTime className = {s.timeSel}
                                panel={this.state.currentPanel}
                                selected={this.state.selectedTime}
                                onSortEnd={this.onSortEndSelected}
                                onClickSelected={this.onClickSelected} pressDelay={200} />

            <div className = {s.poolHeading}>
              <h1>Tap to select</h1>
            </div>

            <SortableListAllTime panel={this.state.currentPanel} all={this.state.allTime}
                           onSortEnd={this.onSortEndAll}
                           onClickAll={this.onClickAll} />
          </div>
      </div>
    }


    let headerTitle = null;
    if (this.state.currentPanel === "Title")  headerTitle  =  <h1>Event</h1>
    if (this.state.currentPanel === "Time")  headerTitle = <h1>Time</h1>
    if (this.state.currentPanel === "Place")  headerTitle = <h1>Location</h1>
    if (this.state.currentPanel === "URL")  headerTitle = <h1>URL</h1>


    return (
      <div className={s.container}>

        <div className={s.appWrap}>
          <div className={s.areaSubmit}>
            <button className={s.buttonSignOut} ><i className="fa fa-sign-out  fa-2.5x"/></button>
            {headerTitle}
            <button className={s.buttonSubmit} onClick={this.handleSubmit}><i className="fa fa-paper-plane  fa-2.5x"/></button>
          </div>

          <div className={s.areaContent}>
            {areaContent}
          </div>

          <div className={s.areaOption}>
            <button className={s.buttonCalOpt}><i className="fa fa-newspaper-o" onClick={() => this.changePanel("Title")}/></button>
            <button className={s.buttonCalOpt}><i className="fa fa-clock-o" onClick={() => this.changePanel("Time")}/></button>
            <button className={s.buttonCalOpt}><i className="fa fa-map-marker" onClick={() => this.changePanel("Place")}/></button>
            <button className={s.buttonCalOpt}><i className="fa fa-link" onClick={() => this.changePanel("URL")}/></button>

          </div>
        </div>
      </div>
    );
  }
}

export default CalendarInfo;





