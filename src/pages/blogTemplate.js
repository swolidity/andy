import React from "react"
import { Helmet } from "react-helmet"

export default function Template({ children, pageContext }) {
  const { frontmatter } = pageContext
  return (
    <div className="blog-post-container markdown p-6 mx-auto my-0">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{frontmatter.title}</title>
      </Helmet>
      <div className="blog-post">
        <div className="blog-post-content">{children}</div>
      </div>
    </div>
  )
}
