import React from "react";
import "./Home.css";
import weatherpic from "../assets/weatherpic.png";
import tarotpic from "../assets/tarotimg.png";
import parkspic from "../assets/parksandpages.png";
import profilepic from "../assets/profilepic.jpeg";
import playlistpic from "../assets/playlistpic.png";

function Projects() {
  return (
    <div className="container">
      <div className="second" id="work">
        <div className="worksize">
          <h2 className="headers">About Me</h2>
        </div>
        <div className="array1">
          <p className="aboutme">
            Software engineer with certificates from UCF and USF’s Web
            Development Bootcamps and leveraging a B.S. in Cell and Molecular
            Biology. The combination of applied interpersonal skills and
            analytical thinking define a collaborative, communicative, and
            self-motivated problem-solver that is ready to take on the
            challenges of the fast-paced workday.
          </p>
          <div className="profilepicture">
            <img className="image" src={profilepic} alt="profile" />
          </div>
        </div>
      </div>

      <div className="second" id="work">
        <div className="worksize">
          <h2 className="headers">Work</h2>
        </div>
        <div className="array">
          <div className="row">
            <div className="bigpic">
              <a
                href="https://desolate-garden-53776.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="image" src={tarotpic} alt="work picture3" />
              </a>
              <div className="text-header">TarotTeacher</div>
              <p className="undertext">
                TarotTeacher is a full-stack web application designed to provide
                education on individual tarot cards. Built with React.js,
                Node.js, Express, and PostgreSQL, this application allows users
                to explore the mystical world of tarot cards and delve into the
                meanings behind the cards.
              </p>
              <p className="undertext underlink">
                <a href="https://github.com/panicor/capstone-tarot">
                  GitHub Repository
                </a>
              </p>
            </div>

            <div className="bigpic">
              <a
                href="https://panicor.github.io/parks-and-pages/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="image" src={parkspic} alt="work picture2" />
              </a>
              <div className="text-header">Parks & Pages</div>
              <p className="undertext">
                A search tool for the avid hiker and reader. The user can search
                for their state, and a list of parks and a map showing the park
                locations shows up. The Google Books API was used to show book
                results that are related to the park.
              </p>
              <p className="undertext underlink">
                <a href="https://github.com/panicor/parks-and-pages">
                  GitHub Repository
                </a>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="bigpic">
              <a
                href="https://panicor.github.io/weatherDashboard/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="image" src={weatherpic} alt="work picture1" />
              </a>

              <div className="text-header">Weather Dashboard</div>
              <p className="undertext">
                Third-party weather API OpenWeather One Call was used to fetch
                weather data from an input city. Multiple dynamic URLs were used
                to fetch the coordinates and display the weather with a sleek
                UI.
              </p>
              <p className="undertext underlink">
                <a href="https://github.com/panicor/weatherDash">
                  GitHub Repository
                </a>
              </p>
            </div>
          

          <div className="bigpic">
            <div className="picpart">
              <a
                href="https://playlist-app-dsn7.onrender.com"
                target="_blank"
                rel="noreferrer"
              >
                <img className="image" src={playlistpic} alt="work picture1" />
              </a>
            </div>
            <div className="textpart">
              <div className="text-header">Playlist Pal</div>
              <p className="undertext">
                Playlist Pal is a web application built in Python with a backend
                in Flask. SQLAlchemy was utilized in this project as well for
                database operations. The app allows users to add songs and
                playlists to the app, as well as the ability to add said songs
                to playlists.
              </p>
              <p className="undertext underlink">
                <a href="https://github.com/panicor/playlist-app">
                  GitHub Repository
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="second" id="work">
        <div className="worksize">
          <h2 className="headers">Technologies</h2>
        </div>
        <div className="array">
          <p>
            HTML | CSS | JS | Node.js | JQuery | Express.js | Python3 |
            PostgreSQL | React.js
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
