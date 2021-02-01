import React from 'react';
import HelmetHOC from '../../../../hoc/Helmet/Helmet';
import PortfolioProject from '../../../../hoc/PortfolioProject/PortfolioProject';
import ogSketchbox from '../../../../assets/images/openGraph/ogSketchbox.png';
import logo from '../../../../assets/images/projects/sketchbox-design/sketchbox-design-logo.png';
import home from '../../../../assets/images/projects/sketchbox-design/screenshots/home.png';
import benefits from '../../../../assets/images/projects/sketchbox-design/screenshots/benefits.png';
import how from '../../../../assets/images/projects/sketchbox-design/screenshots/how.png';
import showcase from '../../../../assets/images/projects/sketchbox-design/screenshots/showcase.png';
import testimonials from '../../../../assets/images/projects/sketchbox-design/screenshots/testimonials.png';
import integrations from '../../../../assets/images/projects/sketchbox-design/screenshots/integrations.png';

const SketchboxDesignProject = () => {
  let SEO = (
    <HelmetHOC
      title="Sketchbox Design Website Update | timkelly.dev"
      image={ogSketchbox}
    />
  );

  return (
    <React.Fragment>
      {SEO}
      <PortfolioProject
        name="Sketchbox Design"
        logo={logo}
        url="https://design.sketchbox3d.com/"
        projectTitle="Website Update"
        projectDescription="Sketchbox Design is a marketing website for a VR design and collaboration tool."
        gradient1="#d1d0e8"
        gradient2="#ab9ad3"
        images={[home, how, benefits, showcase, testimonials, integrations]}
        content={[
          {
            heading: 'The Context',
            paragraph:
              'Sketchbox design is enterprise software for large organisations for developers and designers to build more efficiently and effectively in virtual reality. The website needs to be informative, signal professionalism and get people excited about using the software for better results at work.',
          },
        ]}
      />
    </React.Fragment>
  );
};

export default SketchboxDesignProject;
