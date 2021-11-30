import { NextPageWithLayout } from '@/models/common';
import { MainLayout } from '../components/layouts';
import AboutSection from '../components/sections/about';
import HomeSection from '../components/sections/home';
import ProjectSection from '../components/sections/projects';
import QualificationSection from '../components/sections/qualification';
import ServiceSection from '../components/sections/services';
import SkillSection from '../components/sections/skills';
import ContactSection from '../components/sections/contact';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <QualificationSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

Home.Layout = MainLayout;

export default Home;
