import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import styles from './navbar.module.css'
import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div className={styles.container}>
  <ul>
    <Link to={`/`}>
      <li
        css={css`
          margin-bottom: ${rhythm(1)};
          margin-right: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        HOME
      </li>
    </Link>
    <Link to={`/about`}>
      <li
        css={css`
          margin-bottom: ${rhythm(1)};
          margin-right: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        ABOUT
      </li>
    </Link>
    <Link to={`/posts`}>
      <li
        css={css`
          margin-bottom: ${rhythm(1)};
          margin-right: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        BLOG
      </li>
    </Link>
  </ul >
    <hr />
    {children}
  </div>
)