import React from "react"
import Hero from "../components/home/hero-section"
import Layout from "../template/Layout"
import MiddleContent from "../components/home/MiddleContent"
import Qoute from "../components/home/Qoute"
import CustomerStories from "../components/home/CustomerStories"
import SliderPost from "../components/home/SliderPost"
import SliderIcons from "../components/home/SliderIcons"
import Cards from "../components/home/VC_Cards"
import GetStarted from "../components/home/GetStarted"

import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby"

import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

import '../styles/home/sliderPost.css'

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: 'slider-slides',
    autoplaySpeed: 3000,
    autoplay: true,
  };

  const SliderQuery = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {path: {eq: "/home/slider"}}}) {
        edges {
          node {
            id
            frontmatter {
              SliderContent {
                title
                slogan
                image
                icon
                color
                backgroundColor
              }
              heading
              subHeading
            }
          }
        }
      }
    }
  `)
    
  const data = SliderQuery?.allMarkdownRemark?.edges[0]?.node


  return (
    <Layout>
      <Hero />
      <MiddleContent />
      <Qoute />
      <CustomerStories />
      <Slider className="mt-10">
        {data?.frontmatter?.SliderContent.map((items, index) => {
          return (
            <SliderPost key={index} items={items} />
          )
        })}
      </Slider>
      <SliderIcons />
      <Cards />
      <GetStarted />
    </Layout>
  )
}
