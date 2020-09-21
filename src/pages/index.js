import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import ReactiveButton from 'reactive-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Playground from '../components/Playground/Playground';

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
    />
  );
}
`.trim();

const showcaseScope = { ReactiveButton, useState };

const features = [
  {
    title: 'Reactive',
    description: (
      <>
        Replacing traditional button with reactive behavior.
      </>
    ),
  },
  {
    title: 'Customizable',
    description: (
      <>
        Comes with proper customization. Use the beautiful default themes or create your own.
      </>
    ),
  },
  {
    title: 'Not a rocket science',
    description: (
      <>
        You know button? Use it just like a button. It's super easy and simple. 
      </>
    ),
  },
  {
    title: 'Lightweight',
    description: (
      <>
        Extremely small in size. Less than 20 KB with zero dependency.
      </>
    ),
  },
  {
    title: 'Flexible',
    description: (
      <>
        Reactive button is an isolated component. Use it with any UI library. 
      </>
    ),
  },
  {
    title: 'Progress Indicator',
    description: (
      <>
        Don't just click button. See what is happening behind your button click.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4 text--center p-4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const [showGetStartedButton, setShowGetStartedButton] = useState(false);

  useEffect(() => {
    setShowGetStartedButton(true);
  }, []);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <header className={clsx('hero ', styles.heroBanner)}>
        <div className="container">
          <div className="text--center">
            <img
              alt="Reactive Button"
              className={styles.logo}
              src={useBaseUrl('img/logo/logo.svg')}
            />
        </div>
          <h1 className="hero__title"><span className={styles.heroProjectKeywords}>React</span><span className={styles.heroProjectKeywordsSecondary}>ive</span> <span className={styles.heroProjectKeywords}>Button</span></h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                '',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              <ReactiveButton
                style={{ display: showGetStartedButton ? 'block' : 'none' }}
                color={'dark'}
                size={"large"}
                idleText={<span>Get Started &nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight}/></span>}
                width={'170px'}
                height={'49px'}
                className={'fadeIn'}
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
                    <Playground code={showcaseCode} scope={ showcaseScope } height={'250px'}/>
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