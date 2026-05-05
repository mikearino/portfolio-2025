import React from "react";

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <p>
        Selected projects demonstrating full stack development and cloud
        deployment.
      </p>
      <article>
        <h3>River Chaos</h3>
        <p>
          A full-stack browser game where players navigate obstacles and compete
          for high scores. Built with a custom backend API and deployed on AWS
          (S3, CloudFront, Elastic Beanstalk, RDS) to persist runs and power a
          global leaderboard.
        </p>
        <ul>
          <li>
            <strong>Status:</strong> Live
          </li>
          <li>
            <strong>
              <a
                href="https://d1vskmi94pi261.cloudfront.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                Play Now
              </a>
            </strong>
          </li>
          <li>
            <strong>
              <a
                href="https://github.com/mikearino/tubeChaos"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>
            </strong>
          </li>
        </ul>
      </article>
      <article>
        <h3>
          Zendesk Internal Tools (Admin Enforcement & Requester Reassignment)
        </h3>
        <p>
          Built internal Zendesk apps to automate admin enforcement and
          requester reassignment. These tools reduce manual ticket edits and
          improve consistency for support workflows.
        </p>
        <ul>
          <li>
            <a href="https://github.com/mikearino/reCCuester">
              Requester Reassigner (reCCuester)
            </a>
          </li>
          <li>
            <a href="https://github.com/mikearino/adminEnforcer">
              Admin Enforcer
            </a>
          </li>
        </ul>
      </article>
      <article>
        <h3>AWS Backed Blog Platform</h3>
        <p>
          Deployed and operated a WordPress blog on AWS Lightsail. Configured
          DNS with Route 53, set up HTTPS, and managed a static IP. This project
          demonstrates hands-on experience with cloud infrastructure and basic
          production operations.
        </p>
        <ul>
          <li>
            <a href="https://ithinkitsworking.com">View live site</a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Projects;
