import { CaretDownOutlined, CodeOutlined, DatabaseFilled } from '@ant-design/icons';
import * as React from 'react';
import SkilLItem from './skill-item';

export default function SkillSection() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical</span>

      <div className="skills__container container grid">
        <div>
          {/* skill 1 */}

          <SkilLItem
            skillList={['HTML', 'Javascript', 'React', 'Vue']}
            skillTitle="Frontend developer"
            exp="More than 2 years"
          >
            <CodeOutlined className="skills__icon" />
          </SkilLItem>

          {/* skill 2 */}
        </div>
      </div>
    </section>
  );
}
