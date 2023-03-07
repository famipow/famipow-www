import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'DevOps & Cloud',
    Svg: require('@site/static/img/canvas_devops.svg').default,
    description: (
      <>
        Docker, AWS, Azure, baremetal, Kubernetes, Helm, Jenkins, Terraform, Ansible, etc.
      </>
    ),
  },
  {
    title: 'Powered by Linux',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Debian, Ubuntu, RedHat
      </>
    ),
  },
  {
    title: 'Infrastracture & Deployment',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We are a company specialized in infrastructure and systems, with expertise in Linux Debian/Ubuntu, Ansible, Terraform, CI/CD, networks, security and more.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
