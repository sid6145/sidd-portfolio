import React from 'react'
import "./tech.css"
import SkillCard from '../../common/SkillCard'

const Tech = () => {
  return (
    <div id='skills' className='techRoot'>
      <h4 className='headerTxt'>Skills</h4>

      <div className='skillWrap'>
        <h4 className='skillTitle'>Frontend</h4>
        <div className='skillsContainer'>
          <SkillCard label="HTML5" image="/html-icon.png" />
          <SkillCard label="CSS3" image="/css.png" />
          <SkillCard label="React" image="/react.png" />
          <SkillCard label="Next" image="/next.png" />
          <SkillCard label="Tailwind CSS" image="/tailwind.png" />
          <SkillCard label="Material UI" image="/material-ui.png" />
          <SkillCard label="JavaScript" image="/js.png" />
          <SkillCard label="TypeScript" image="/ts.png" />
        </div>
      </div>

      <div className='skillWrap'>
        <h4 className='skillTitle'>Backend</h4>
        <div className='skillsContainer'>
          <SkillCard label="Node JS" image="/node.png" />
          <SkillCard label="Express JS" image="/express.png" />
          <SkillCard label="Mongo DB" image="/mongo.png" />
        </div>
      </div>

      <div className='skillWrap'>
        <h4 className='skillTitle'>Tools</h4>
        <div className='skillsContainer'>
          <SkillCard label="GIT" image="/git.png" />
          <SkillCard label="VS Code" image="/vs.png" />
          <SkillCard label="Rancher" image="/rancher.png" />
          <SkillCard label="Azure" image="/azure.png" />
        </div>
      </div>
    </div>
  )
}

export default Tech