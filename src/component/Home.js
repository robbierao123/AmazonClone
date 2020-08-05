import React, { Component } from 'react'
import '../componentCss/Home.css'
import Product from './Product';
import Banner from './Banner'
import BannerImg from '../bannerImg2.jpg'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="home">
               <img className ="banner_image"src={BannerImg} alt="banner image"/>



                  <div className="home_row">
                  <Product

                   id ="1" 
                   title=" D-Link Mini HD Wi-Fi Indoor Camera with Cloud Recording - Sound and Motion Detection & Night Vision - DCS-8000LH/RE (Renewed"
                   price="200"
                   rating={5}
                   image="https://images-na.ssl-images-amazon.com/images/I/21J8rBatSZL._AA218_.jpg"


                   />

                             <Product

                   id ="1" 
                   title=" D-Link Mini HD Wi-Fi Indoor Camera with Cloud Recording - Sound and Motion Detection & Night Vision - DCS-8000LH/RE (Renewed"
                   price="200"
                   rating={5}
                   image="https://images-na.ssl-images-amazon.com/images/I/21J8rBatSZL._AA218_.jpg"


                   />

                             <Product

                   id ="1" 
                   title=" D-Link Mini HD Wi-Fi Indoor Camera with Cloud Recording - Sound and Motion Detection & Night Vision - DCS-8000LH/RE (Renewed"
                   price="200"
                   rating={5}
                   image="https://images-na.ssl-images-amazon.com/images/I/21J8rBatSZL._AA218_.jpg"


                   />
                   </div>


                   <div className="home_row">
                  <Product

                   id ="1" 
                   title=" D-Link Mini HD Wi-Fi Indoor Camera with Cloud Recording - Sound and Motion Detection & Night Vision - DCS-8000LH/RE (Renewed"
                   price="200"
                   rating={5}
                   image="https://images-na.ssl-images-amazon.com/images/I/21J8rBatSZL._AA218_.jpg"


                   />

                             <Product

                   id ="1" 
                   title=" D-Link Mini HD Wi-Fi Indoor Camera with Cloud Recording - Sound and Motion Detection & Night Vision - DCS-8000LH/RE (Renewed"
                   price="200"
                   rating={5}
                   image="https://images-na.ssl-images-amazon.com/images/I/21J8rBatSZL._AA218_.jpg"


                   />

                             <Product

                   id ="1" 
                   title=" D-Link Mini HD Wi-Fi Indoor Camera with Cloud Recording - Sound and Motion Detection & Night Vision - DCS-8000LH/RE (Renewed"
                   price="200"
                   rating={5}
                   image="https://images-na.ssl-images-amazon.com/images/I/21J8rBatSZL._AA218_.jpg"


                   />
                   </div>

         
            </div>
        )
    }
}

export default Home
