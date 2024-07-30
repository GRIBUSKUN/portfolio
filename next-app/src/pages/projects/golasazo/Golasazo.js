import sliceAppLarge from 'assets/GolasazoTexture.png';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/GolasazoTexture.png';
import sliceBackgroundBarLarge from 'assets/seo-tool-collage.png';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/seo-tool-collage.png';
import sliceBackgroundLarge from 'assets/golasazo-background.jpeg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/golasazo-background.jpeg';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import teamImg from 'assets/IMG_5220.JPG';

import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';

import report1 from 'assets/report-1.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Slice.module.css';

const title = 'Golasazo a futball news website';
const description =
  'This project involved designing a better way for biomedical educators and learners to annotate digital slides together.';
const roles = ['SEO', 'Futball News', 'Focused on latin american market'];

export const Slice = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://golasazo.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[sliceApp, sliceAppLarge]}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                Improving the SEO beyond the frontiers
              </ProjectSectionHeading>
              <ProjectSectionText>
                I had a hard job, creating a new site full of competition with the
                objective of increasing traffic considerably in less than 5 months, but I
                acheaved a great improvment in the first month.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[report1, report1]}
              placeholder={sliceSlidesPlaceholder}
              alt="Seo report 1 golasazo."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[sliceBackgroundBar, sliceBackgroundBarLarge]}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Seo Tools</ProjectSectionHeading>
              <ProjectSectionText>
                There was many tools that helped to improve the seo of Golasazo looking
                for keywords to write articles that could made the highest impact, such as
                hrefs, semrush, and money robot.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                This project helped me to understand the market, get experience developing
                for wordpress, and the skills needed to manage a big team of writers and
                influencers.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={teamImg}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
