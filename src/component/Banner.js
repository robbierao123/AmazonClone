import React, { Component } from 'react'
import '../componentCss/Banner.css'
import BannerImg from '../bannerImg2.jpg'
class Banner extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="banner_container">
         
                <img className ="banner_image"src={BannerImg} alt="banner image"/>
            </div>
        )
    }
}

export default Banner
