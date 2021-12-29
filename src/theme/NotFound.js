/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import NotFoundSVG from '../../static/img/undraw_page_not_found_re_e9o6.svg';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <Layout
      title={translate({
        id: 'theme.NotFound.title',
        message: 'Page Not Found',
      })}
    >
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <NotFoundSVG className={styles.notFoundImage} />
            <h1 className="hero__title">
              <Translate id="theme.NotFound.title" description="The title of the 404 page">
                Page Not Found
              </Translate>
            </h1>
            <p>
              <Translate id="theme.NotFound.p1" description="The first paragraph of the 404 page">
                We could not find what you were looking for.
              </Translate>
            </p>
            <p>
              <Translate id="theme.NotFound.p2" description="The 2nd paragraph of the 404 page">
                Please contact the owner of the site that linked you to the original URL and let them know their link is
                broken.
              </Translate>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
