/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import serialize from 'serialize-javascript';
import { analytics } from '../config';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    // eslint-disable-next-line react/forbid-prop-types
    state: PropTypes.object,
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
    state: null,
  };

  render() {
    const { title, description, styles, scripts, state, children, v, seo } = this.props;
    return (
      <html className="no-js" lang="vi">
        <head>
            {/*<base href="http://comhoavang.com" />*/}
            {/*<base href="http://localhost:3000" />*/}
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon" href="/ico.png" />
            <link rel="icon" type="image/png" href="ico.png" />
            {/*Og tag*/}
            <meta property="og:locale" content="vi_VN" />
            <meta property="og:type" content="website" />
            {seo && seo.og_title && <meta property="og:title" content={seo.og_title} />}
            {seo && seo.url && <meta property="og:url" content={seo.url} />}
            {seo && seo.og_image && <meta property="og:image" content={seo.og_image} />}
            {/**/}

            {/*Theme head source*/}
            <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
            <link href="/assets/css/bootstrap-extra-modal.css" rel="stylesheet" />
            <link href="/assets/css/plugins.css" rel="stylesheet" />

            <link href="/assets/css/themify-icons.css" rel="stylesheet" />
            <link href="/assets/css/font-awesome.min.css" rel="stylesheet" />
            <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,300italic,500,700,900' rel='stylesheet' type='text/css' />
            <link href='https://fonts.googleapis.com/css?family=Raleway:400,100,300,500,600,700,800,900,200' rel='stylesheet' type='text/css' />


            <link rel="stylesheet" type="text/css" href="/assets/revolution/css/settings.css" />

            <link rel="stylesheet" type="text/css" href="/assets/revolution/css/layers.css" />
            <link rel="stylesheet" type="text/css" href="/assets/revolution/css/navigation.css" />
            <link href="/assets/css/style.css" rel="stylesheet" />
            {/**/}

            <link rel="stylesheet" type="text/css"  href={"/css/app.css?v=" +v }/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js" />
            <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
            <script dangerouslySetInnerHTML={{ __html: this.props.scriptTop }} />
        </head>

        <body className="clearfix">

          <div
            id="app"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: children }}
          />
          {state && (
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html:
              `window.APP_STATE=${serialize(state, { isJSON: true })}` }}
            />
          )}

          {/*{scripts.map(script => <script key={script} src={script} />)}*/}
          <script
            dangerouslySetInnerHTML={{ __html:
                `head.load("/assets/js/jquery.js")`
                + `.js("/assets/js/bootstrap.min.js" )`
                + `.js("/assets/js/scripts.js" )`
                + `.js("/assets/revolution/js/jquery.themepunch.tools.min.js")`
                + `.js("/assets/revolution/js/jquery.themepunch.revolution.min.js")`
                + `.js("/assets/js/init.js")`
                +  `.js("${scripts[0]}?v=${v}")`
                +  `.js("${scripts[1]}?v=${v}")`}}
          >
          </script>

          <script dangerouslySetInnerHTML={{ __html: this.props.scriptBottom }} />

        </body>
      </html>
    );
  }
}

export default Html;
