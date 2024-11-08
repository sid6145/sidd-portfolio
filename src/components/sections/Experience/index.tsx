import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import "./experience.css"

const Experience = () => {
  return (
    <section id='experience' className='experienceRoot'>
      <h4 className='headerTxt'>Experience</h4>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: 'transparent', color: '#fff', border: '1px solid #fff', borderRadius: 10 }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="October 2021 - July 2023"
          iconStyle={{ background: 'transparent', color: '#fff' }}
        >
          <h4 className="jobTitle">Frontend Developer</h4>
          <h4 className="companyName">LinkFields Innovation Pvt Ltd</h4>
          <ul>
            <li>Built responsive and reusable components in react, next.js to optimise code maintainability, scalability and development productivity</li>
            <li>Responsible for translating design flows from Figma into functional code ensuring high quality implementation.</li>
            <li>Tailored and modified Ant design and Material UI components to meet specific project needs, ensuring seamless integration in the project.</li>
            <li>Integrated first party and third party APIs into the web application ensuring data exchange and functionality across different services.</li>
            <li>Implemented redux code to manage complex data flows as well as utilised redux middleware like thunk to handle side effects and asynchronous operations.</li>
            <li>Used Static Site Generation (SSG) and Incremental Static Regeneration (ISR) in Next.js, enabling faster page load times, improved SEO, and efficient use of server resources.</li>

          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: 'transparent', color: '#fff', border: '1px solid #fff', borderRadius: 10 }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="October 2021 - July 2023"
          iconStyle={{ background: 'transparent', color: '#fff' }}
        >
          <h4 className="jobTitle">Associate Software Developer</h4>
          <h4 className="companyName">Orosoft Solutions Pvt Ltd</h4>
          <ul>
            <li>Improved project localization by integrating the i18n library and crafting custom components and functions to seamlessly integrate language translation features throughout the project.</li>
            <li>Crafted custom components and tailored MUI elements to precisely match project specifications, enhancing integration and functionality. </li>
            <li>Implemented TypeScript to enforce type safety across the codebase, incorporating interfaces and types as needed, and leveraging TypeScript features such as partials and unions to meet project requirements effectively.</li>
            <li>Transform design flows from Figma into functional code, guaranteeing high-quality implementation.</li>
            <li>Integrated backend APIs with frontend elements to ensure seamless operation.</li>
            <li>Leveraged Redux's RTK query and toolkit for efficient state management, optimizing project performance by implementing RTK query caching.</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  )
}

export default Experience