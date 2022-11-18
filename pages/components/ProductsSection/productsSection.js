import { useState } from 'react';

const {useRouter} = require('next/router')
export default function ProductsSection(){
    const router = useRouter()
    const [keyword,setKeyword] = useState("")
    const SearchKeyword = (event) => {
        event.preventDefault();
        router.push(`/products/search?&keyword=${keyword}`)
    }
    console.log(keyword,"keyword")
    return(
        <section className="hero-section">
        <div className="layer">
            <div className="home-banner"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-search aos" data-aos="fade-up">
                            <h3>World Largest <span>Marketplace</span></h3>
                            <p>Search From 150 Awesome Verified Ads!</p>
                            <div className="search-box">
                                <form onSubmit={SearchKeyword}> 
                                    <div className="search-input line">
                                        <i className="fas fa-tv bficon"></i>
                                        <div className="form-group mb-0">
                                            <input type="text" className="form-control" placeholder="What are you looking for?" onChange={(e) => setKeyword(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="search-input">
                                        <i className="fas fa-location-arrow bficon"></i>
                                        <div className="form-group mb-0">
                                            <input type="text" className="form-control" placeholder="Your Location"/> 
                                            <a className="current-loc-icon current_location" ><i className="fas fa-crosshairs"></i></a>
                                        </div>
                                    </div>
                                    <div className="search-btn">
                                        <button className="btn search_service" type="submit">Search</button>
                                    </div>
                                </form>
                            </div>
                            <div className="search-cat">
                                <i className="fas fa-circle"></i>
                                <span>Popular Searches</span>
                                <a href="search.html">Electrical  Works</a>
                                <a href="search.html">Cleaning</a>
                                <a href="search.html">AC Repair</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}