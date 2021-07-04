import React from 'react'
import GetStarted from '../components/home/GetStarted'
import Contact from '../components/news/Contact'
import { Feature } from '../components/news/Feature'
import InTheNews from '../components/news/InTheNews'
import NewsCards from '../components/news/NewsCards'
import Toolkits from '../components/news/Toolkits'
import Layout from '../template/Layout'

const News = () => {
    return (
        <Layout>
            <NewsCards />
            <Feature />
            <InTheNews />
            <Contact />
            <Toolkits />
            <GetStarted />
        </Layout>
    )
}

export default News
