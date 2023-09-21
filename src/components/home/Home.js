//React
import React from "react";
// import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
//Components, styles, & assets
import s from "./Home.module.scss";

// class Home extends React.Component {
//   render() {

//   }
// }

// Home.PropTypes = {

// }

const Home = () => {
  return (
    <>
      <div>
        <div className={s.homeHeader}>
          <h1 className={s.welcome}>Welcome</h1>
          <span className={s.firstLast}>User</span>
        </div>
        <div className={s.homeBody}>
          <div className={s.boxesContainer}>
            <div
              className={s.communityTilesBox}
              onClick={e => {
                // props.history.push("/community-tiles");
              }}
            >
              <FontAwesomeIcon className={s.heartIcon} icon="heart" />
              <h1 className={s.communityTiles}>Software Developer</h1>
              <p className={s.communityTilesDescription}>
                A software Developer, or Computer Software Developer, is responsible
                for using their knowledge of programming languages to design software programs. Their duties include
                meeting with clients to determine theri software needs, coding and testing software to ensure
                functionality and updating software programs to refine compononents like cybersecurity measures
                and data storage capacities.
              </p>
            </div>
            <div
              className={s.userJourneysBox}
              onClick={e => {
                // props.history.push("/user-journeys");
              }}
            >
              <FontAwesomeIcon className={s.sitemapIcon} icon="sitemap" />
              <h1 className={s.userJourneys}>Typical Responsibilities:</h1>
              <p className={s.userJourneysDescription}>
                Collaborating with management, departments and customers to identify end-user requirements and specifications.
              </p>
              <p className={s.userJourneysDescription}>
                Design algorithms and flowcharts to create new software programs and systems.
              </p>
              <p className={s.userJourneysDescription}>
                Produce efficient and code based on requirements.
              </p>
              <p className={s.userJourneysDescription}>
                Compile and assess user feedback to improve software performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
