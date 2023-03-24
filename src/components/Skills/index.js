import React from "react";
import {
  FaSlack,
  FaFigma,
  FaAngular,
} from "react-icons/fa";
import {
  DiGithubBadge,
  DiMaterializecss,
  DiHtml5,
  DiNpm,
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiGit,
  DiVisualstudio,
  DiCss3,
  
} from "react-icons/di";
import {
  SiAzuredevops,
  SiNetlify
} from 'react-icons/si';
import "./skills.css";

function skills() {
  return (
    <>
      <h1 className="techheading" id="tech">Tech Stack</h1>
      <div className="skillscontainer">
        <div className="skillcard">
          <DiJsBadge className="skillsiconsjs" ></DiJsBadge>
          <p>Javascript</p>
        </div>
        <div className="skillcard">
          <FaAngular className="skillsiconsreact"></FaAngular>
          <p>Angular</p>
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
          <SiAzuredevops className="skillsiconsmongo"></SiAzuredevops>
          <p>Azure Devops</p>
        </div>
        <div className="skillcard">
          <SiNetlify className="skillsiconsheroku"></SiNetlify>
          <p>Netlify</p>
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
          <DiMaterializecss className="skillsiconsbootstrap"></DiMaterializecss>
          <p>Material</p>
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
