import React from "react";

const Projects = () => {
  return (
    <section>
       <h2>Projects</h2>
          <article>
              <h3>Zendesk Internal Tools (Admin Enforcement & Requester Reassignment)</h3>
                <p>
                   Zendesk does not natively support swapping CC’d users into the requester role or enforcing admin inclusion based on organization domains. I built Zendesk apps that automatically enforce admin inclusion for tickets from specific domains and allow agents to reassign the requester via a menu selector when needed. This reduces manual ticket edits, eliminates copy/paste workflows, and ensures admins are consistently included without agent friction.
                </p>
                <ul>
                  <li>
                    <a href="https://github.com/mikearino/reCCuester">Requester Reassigner (reCCuester)</a>
                  </li>
                  <li>
                    <a href="https://github.com/mikearino/adminEnforcer">Admin Enforcer</a>
                  </li>
                </ul>
            </article>
            <article>
            <h3>AWS Backed Blog Platform</h3>
              <p>
                Deployed and operated a blog on AWS to gain hands-on experience with cloud infrastructure and backend ownership. Provisioned a WordPress instance using AWS Lightsail, configured a static public IP, managed DNS through Route 53 and enabled HTTPS for secure access. This project demonstrates end-to-end ownership of a production service, including deployment, networking, DNS configuration and basic operational maintenance.
              </p>
                <ul>
                  <li>
                    <a href="https://ithinkitsworking.com">View live site</a>
                  </li>
                </ul>
            </article>
            <article>
              <h3>Tube Chaos</h3>
                <p>
                    A browser game built with Phaser.js where the player inner tubes down a river while avoiding rocks and obstacles. The project focuses on core game mechanics such as movement physics, collision detection, obstacle spawning and game state management. This is an actively developed project used to explore realtime gameplay loops and interactive systems.
                </p>
                <ul>
                  <li>
                    <strong>Tech:</strong> Phaser.js
                  </li>
                  <li>
                    <strong>Status:</strong> In progress
                  </li> 
                  <li>
                    Github Repository: <a href="https://github.com/mikearino/tubeChaos">https://github.com/mikearino/tubeChaos</a>
                  </li>
                </ul>
            </article>
    </section>
  )
}

export default Projects;