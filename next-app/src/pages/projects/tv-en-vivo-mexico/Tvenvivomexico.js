import sliceAppLarge from 'assets/tvenvivomexicoTexture.png';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/tvenvivomexicoTexture.png';
import sliceBackgroundLarge from 'assets/tvenvivomexico-background.jpeg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/tvenvivomexico-background.jpeg';
import sliceSidebarAnnotationsLarge from 'assets/TvEnVivoMexicoMobile-1.png';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from 'assets/TvEnVivoMexicoMobile-1.png';
import sliceSidebarLayersLarge from 'assets/TvEnVivoMexicoMobile-2.png';
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from 'assets/TvEnVivoMexicoMobile-2.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Slice.module.css';

const title = 'Tv en vivo Mexico';
const description =
  'This project involved designing a better way to watch tv straming without ads that you can play in any device.';
const roles = ['User Research', 'UX Design', 'Interface Design'];

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
          url="https://www.tvenvivomexico.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[sliceApp, sliceAppLarge]}
              placeholder={sliceAppPlaceholder}
              alt="The Tv en vio Mexico web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Bringing it together</ProjectSectionHeading>
              <ProjectSectionText>
                A simple live TV website with over 300 chanels developed using nextjs and
                the latest technologies that you can play in any device.
              </ProjectSectionText>
              <ProjectSectionText>
                A solution runing in a local server, allowing to scale the project as much
                as it required and brings the control over the hardware back to the
                developer needs.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers, sliceSidebarLayersLarge]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarAnnotations, sliceSidebarAnnotationsLarge]}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
