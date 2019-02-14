import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 1000px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(0.5)};
    `}
  >
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          margin-right: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        HOME
      </h3>
    </Link>
    <Link to={`/posts`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          margin-right: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        BLOG
      </h3>
    </Link>
    <Link to={`/about`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          margin-right: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        ABOUT
      </h3>
    </Link>
    {children}
  </div>
)