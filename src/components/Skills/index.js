import React from "react";
import {
  FaSlack,
  FaPython,
  FaFigma
} from "react-icons/fa";
import {
  DiDjango,
  DiGithubBadge,
  DiMongodb,
  DiPostgresql,
  DiHeroku,
  DiHtml5,
  DiNpm,
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiGit,
  DiVisualstudio,
  DiBootstrap,
  DiCss3,
} from "react-icons/di";
import "./skills.css";

function skills() {
  return (
    <>
      <h1 className="techheading">Tech Stack</h1>
      <div className="skillscontainer">
        <div className="skillcard">
          <DiJsBadge className="skillsiconsjs" ></DiJsBadge>
          <p>Javascript</p>
        </div>
        <div className="skillcard">
          <DiReact className="skillsiconsreact"></DiReact>
          <p>React</p>
        </div>
        <div className="skillcard">
          <DiNodejs className="skillsiconsnode"></DiNodejs>
          <p>Node</p>
        </div>
        <div className="skillcard">
          <DiGithubBadge className="skillsiconsgithub"></DiGithubBadge>
          <p>Github</p>
        </div>
        <div className="skillcard">
          <DiGit className="skillsiconsgit"></DiGit>
          <p>Git</p>
        </div>
        <div className="skillcard">
          <FaPython className="skillsiconspython"></FaPython>
          <p>Python</p>
        </div>
        <div className="skillcard">
          <DiDjango className="skillsiconsdjango"></DiDjango>
          <p>Django</p>
        </div>
        <div className="skillcard">
          <DiMongodb className="skillsiconsmongo"></DiMongodb>
          <p>MongoDb</p>
        </div>
        <div className="skillcard">
          <DiPostgresql className="skillsiconspost"></DiPostgresql>
          <p>PostgreSQL</p>
        </div>
        <div className="skillcard">
          <DiHeroku className="skillsiconsheroku"></DiHeroku>
          <p>Heroku</p>
        </div>
        <div className="skillcard">
          <DiHtml5 className="skillsiconshtml"></DiHtml5>
          <p>HTML</p>
        </div>
        <div className="skillcard">
          <DiCss3 className="skillsiconscss"></DiCss3>
          <p>CSS</p>
        </div>
        <div className="skillcard">
          <DiNpm className="skillsiconsnpm"></DiNpm>
          <p>NPM</p>
        </div>
          <div className="skillcard">
          <FaSlack className="skillsiconsslack"></FaSlack>
          <p>Slack</p>
        </div>
        <div className="skillcard">
          <DiVisualstudio className="skillsiconsvscode"></DiVisualstudio>
          <p>VS Code</p>
        </div>
        <div className="skillcard">
          <DiBootstrap className="skillsiconsbootstrap"></DiBootstrap>
          <p>Bootstrap</p>
          </div>
        <div className="skillcard">
          <FaFigma className="skillsiconsfigma"></FaFigma>
          <p>Figma</p>
        </div>
      </div>
    </>
  );
}

export default skills;
