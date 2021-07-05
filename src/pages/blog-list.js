import React from 'react'
import BlockComponent from '../components/blog-list/BlockComponent'
import BlogCard from '../components/blog-list/BlogCard'
import BlogContent from '../components/blog-list/BlogContent'
import GetStarted from '../components/home/GetStarted'

const blogList = () => {
    return (
        <div>
            <BlockComponent />
            <BlogContent />
            <GetStarted />
        </div>
    )
}

export default blogList
