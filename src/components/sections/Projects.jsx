import React from "react";

const Projects = () => {
  return (
    <section>
       <h2>Projects</h2>
          <article>
            <h3>Zendesk Internal Tools (Admin Enforcement & Requester Reassignment)</h3>
              <p>
                Zendesk does not natively support swapping CC’d admins into the requester role or enforcing admin inclusion based on organization domains. I built Zendesk Apps using ZCLI that automatically enforce admin inclusion for specific domains and to allow agents to explicitly reassign the requester via a menu selector when needed. This drastically reduces manual ticket edits, eliminating copy/paste workflows and ensured admins were consistently included without agent friction.
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
    </section>
  )
}

export default Projects;