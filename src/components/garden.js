/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Garden = () => {
  const data = useStaticQuery(graphql`
    query BioQuery2 {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div>
        <h1> Evergreen Interests:</h1>
        <ul>-Libraries</ul> 
        <ul>-Bikes</ul>
        <ul>-Product Management</ul>
        <h1>Dandelions:</h1>
    </div>
  )
}

export default Garden
