import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to setup',
    Svg: require('../../static/img/f9b1dffb05a1461469d987b64b008dde.svg').default,
    description: (
      <>
      The docs feature plenty of tutorials to help you get started with the bot, so you don't have to scratch your head messing
      up with all the bits!
      </>
    ),
  },
  {
    title: 'Stay up-to date!',
    Svg: require('../../static/img/82acbc870c0257fb567bfba84dfdc2f7.svg').default,
    description: (
      <>
      Regular blog-posts and announcements will keep you upto date! Know what's cooking over our services or at Discord.
      </>
    ),
  },
  {
    title: 'Social & Events',
    Svg: require('../../static/img/3e79e153462010709e03af848cb2bc5a.svg').default,
    description: (
      <>
      Get notified about events, giveaways, and our current projects that we're working on or something that we're trying to implement!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
