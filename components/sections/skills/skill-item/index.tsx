import { CaretDownOutlined } from '@ant-design/icons';
import * as React from 'react';

export interface SkillProps {
  skillTitle: string;
  exp: string;
  skillList: string[];
  children: React.ReactNode;
}

export default function SkilLItem(props: SkillProps) {
  const { skillTitle, exp, skillList, children } = props;
  const [skillActive, setSkillActive] = React.useState(false);
  return (
    <div className={`skills__content skills__${skillActive ? 'open' : 'close'} `}>
      <div className="skills__header">
        {children}
        <div>
          <h1 className="skills__title">{skillTitle}</h1>
          <span className="skills__subtitle">{exp}</span>
        </div>
        <CaretDownOutlined className="skills__arrow" onClick={() => setSkillActive(!skillActive)} />
      </div>

      <div className="skills__list ">
        {skillList.map((skill, index) => (
          <div key={index} className="skills__item button button--outline">
            <span className="skills__title">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
