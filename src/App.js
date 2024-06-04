import React from "react";
import "./styles/main.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Main from "./components/Main";
import Comments from "./components/comments";
import SideVideo from "./components/SideVideo";
import VideoOne from "./assets/Images/video-list-1.jpg";
import VideoTwo from "./assets/Images/video-list-2.jpg";
import VideoThree from "./assets/Images/video-list-3.jpg";
import VideoFour from "./assets/Images/video-list-4.jpg";
import VideoFive from "./assets/Images/video-list-5.jpg";
import VideoSix from "./assets/Images/video-list-6.jpg";
import VideoSeven from "./assets/Images/video-list-7.jpg";
import VideoEight from "./assets/Images/video-list-8.jpg";

//Made my array of default comments to be in a variable so that I can then call it within my mainVideo const
let comments = [
  {
    name: "Micheal Lyons",
    date: "12/18/2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    name: "Gary Wong",
    date: "12/12/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    name: "Theodore Duncan",
    date: "11/15/2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];

class App extends React.Component {
  state = {
    // Side Video array of objects
    sideVideo: [
      {
        id: "1",
        title: "Become A Travel Pro In One Easy Lesson...",
        channel: "Scotty Cranmer",
        image: VideoOne
      },
      {
        id: "2",
        title: "Les Houches The Hidden Gem Of The...",
        channel: "Scotty Cranmer",
        image: VideoTwo
      },
      {
        id: "3",
        title: "Travel Health Useful Medical Information...",
        channel: "Scotty Cranmer",
        image: VideoThree
      },
      {
        id: "4",
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: VideoFour
      },
      {
        id: "5",
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: VideoFive
      },
      {
        id: "6",
        title: "Choose The Perfect Accommodations",
        channel: "Lydia Perez",
        image: VideoSix
      },
      {
        id: "7",
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: VideoSeven
      },
      {
        id: "8",
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: VideoEight
      }
    ],
    //Main Video Object
    mainVideo: [
      {
        id: "type of <string>",
        title: "BMX Rampage: 2018 Highlights",
        description:
          "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
        channel: "By Red Cow",
        image: "type of <string>",
        views: "1,001,023",
        likes: "110,985",
        duration: "type of <string>",
        video: "type of <string>",
        timestamp: "12/18/2018",
        comments: comments
      }
    ]
  };
  render() {
    return (
      <div className="all-components">
        <Header />
        <Hero />
        <div className="all-components__main">
          <div className="all-components__one">
            <Main maain={this.state.mainVideo} />
            <Comments comments={this.state.mainVideo[0].comments} />
          </div>
          <div className="all-components__two">
            <SideVideo sideVideos={this.state.sideVideo} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;