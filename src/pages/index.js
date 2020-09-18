import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import ReactiveButton from 'reactive-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Showcase from '../components/Showcase/Showcase';

const showcaseCode =  `
  function App() {
    const [state, setState] = useState('idle');
    const onClickHandler = () => {
      setState('loading');
      setTimeout(() => {
        setState('success');
      }, 2000);
    }
    return (
      <ReactiveButton
        buttonState={state}
        onClick={onClickHandler}
        color={'green'}
        idleText={'I am in idle state'}
        loadingText={<span><i className="reactive-btn-spinner"></i>I am in loading state</span>}
        successText={'I am in success state'}
        errorText={'I am in error state'}
        type={'button'}
        className={'class1 class2'}
        style={{ textAlign: 'center' }}
        outline={true}
        shadow={true}
        rounded={false}
        size={'large'}
        block={false}
        messageDuration={2000}
        disabled={false}
        buttonRef={null}
        width={'200px'}
        height={'50px'}
      />
    );
  }
`.trim();

const showcaseScope = { ReactiveButton, useState };

const features = [
  {
    title: 'Reactive',
    imageUrl: 'img/reactive.svg',
    description: (
      <>
        Replacing traditional button with reactive behaviour
      </>
    ),
  },
  {
    title: 'Customizable',
    imageUrl: 'img/customizable.svg',
    description: (
      <>
        Comes with proper customization option.
      </>
    ),
  },
  {
    title: 'Progress Indicator',
    imageUrl: 'img/progress.svg',
    description: (
      <>
        Knows what is happening behind your button click.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4 text--center', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A React Button component that thinks like React.">
      <header className={clsx('hero ', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                '',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              <ReactiveButton
                color={'dark'}
                size={"large"}
                idleText={<span>Get Started &nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight}/></span>}
                width={'170px'}
                height={'49px'}
              />
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.exampleComponent}>
            <div className={styles.exampleComponent__container}>
              <div className="row">
                <div className="col col--12">
                  <div className={styles.exampleComponent__item}>
                    <Showcase code={showcaseCode} scope={ showcaseScope } height={'250px'}/>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </main>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;