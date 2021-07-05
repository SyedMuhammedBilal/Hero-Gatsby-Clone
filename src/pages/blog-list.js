import React from 'react'
import BlockComponent from '../components/blog-list/BlockComponent'
import BlogCard from '../components/blog-list/BlogCard'
import BlogContent from '../components/blog-list/BlogContent'
import GetStarted from '../components/home/GetStarted'
import Layout from '../template/Layout'

const blogList = () => {
    return (
        <Layout>
            <BlockComponent />
            <BlogContent />
            <GetStarted />
        </Layout>
    )
}

export default blogList
