import React from 'react'
import '../../styles/home/sliderPost.css'

const SliderPost = ({ items }) => {

    return (
        <div className="sliderPost__mainContainer mt-10">
            <div style={{ backgroundColor: items?.backgroundColor, color: items?.color }} className="sliderPost__container">
                <div className="sliderPost__image">
                    <img src={items?.image} />
                </div>
                <div className="sliderPost__content-wrapper">
                    <div className="sliderPost__Title">
                        <blockquote className="sliderPost__blockQoute">
                            <h4>{items?.title}</h4>
                        </blockquote>
                        <div className="sliderPost__bottomContent">
                        <div className="sliderPost__smallText">
                            <p>{items?.slogan}</p>
                        </div>
                        <div className="sliderPost__icon">
                            <img src={items?.icon} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SliderPost
