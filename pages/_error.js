import React from 'react';
import Link from 'next/link';

import SVG from 'react-inlinesvg';
import Wrapper from 'styles/components/Error';
import Button from 'styles/ui/Button';


class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <Wrapper>
        <SVG className="brand" src={`/static/img/brand_cinementor.svg`} />
        <div className="box">
          <h1>Page not found, LOL !</h1>
        </div>
        <div>
          <Link href="/">
            <a title="">
              <Button>Return to Home</Button>
            </a>
          </Link>
        </div>
      </Wrapper>
    )
  }
}

export default Error