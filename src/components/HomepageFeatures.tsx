import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { useHistory } from '@docusaurus/router';

type FeatureItem = {
  title: string;
  image: string;
  href: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Homebrew Rules',
    image: '/img/undraw_file_searching_re_3evy.svg',
    href: '/docs/rules/sources',
    description: <>Reference this campaigns custom rules.</>,
  },
  {
    title: 'Setting Details',
    image: '/img/undraw_explore_re_8l4v.svg',
    href: '/docs/setting/placeholder',
    description: <>Explore the settings lore, check out maps, and more.</>,
  },
  {
    title: 'DM Notes',
    image: '/img/undraw_programming_re_kg9v.svg',
    href: '/docs/dmnotes/placeholder',
    description: <>DM notes, statblocks, plans, or other spoiler containing documents.</>,
  },
];

function Feature({ title, image, href, description }: FeatureItem) {
  const history = useHistory();
  // Wrapping the element in a <Link> messes up styling
  const redirect = () => {
    history.push(href);
  };

  return (
    <div className={clsx('col col--4', styles.cursorPointer)} onClick={redirect}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
