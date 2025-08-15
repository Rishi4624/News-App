import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NewsItems from './NewsItems'

import Spinner from './Spinner'

export default class News extends Component {


    
    
    articles = []

    constructor(props) {
        super(props);
        // You can initialize state here if needed
        
        this.state = {
            articles: this.articles,
            loading: false,
            pageNo : 1,
            totalResults: 0,
            apiKey : import.meta.env.VITE_API_KEY,
            
        }

    }


    async componentDidMount() {
        
        
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.state.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false });
    }   


    

     handlePrevious = async() => {
        
        let newState = this.state.pageNo-1;
        if(newState < 1 )return;
        this.setState({ pageNo: newState});


        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${newState}&pageSize=${this.props.pageSize}`;
        
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, loading:false });
        
    }


    handleNext = async() => {
        
        
        
        
        let newState = this.state.pageNo+1;
        this.setState({ pageNo: newState}); 
        
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${newState}&pageSize=${this.props.pageSize}`;     
        this.setState({loading: true});   
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, loading: false });
        

         
    }


    
    render() {
               

        return (
            <div className='container m-auto p-4'>

                <h1 className="text-3xl font-bold text-center my-5">Latest News</h1>
                
                {this.state.loading && <Spinner/>}

                

               
                  <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        { !this.state.loading &&   this.state.articles.map((element) => {
                            return <div key={element.url} >
                                <NewsItems
                                    title={element.title.slice(0, 45) + "..."}
                                    
                                    description={element.description != null ? element.description.slice(0, 88) + "..." : "..."}  
                                    
                                    imageUrl={element.urlToImage == null ? "https://nlujodhpur.ac.in/public/front/img/default-news.png" : element.urlToImage}
                                    
                                    newsUrl={element.url} />
                            </div>
                        })}
                    </div>

                


                <div className="flex justify-between mt-9 ">

                    <button
                     className={`bg-black p-2 ${this.state.pageNo <= 1?`opacity-50 cursor-not-allowed`: `cursor-pointer` }  text-white rounded-lg text-xs `} onClick={this.handlePrevious}
                     >&larr; previous
                     </button>
                    
                    
                    <button
                     id='nextButton'
                     
                     className={`bg-black p-2 text-white rounded-lg text-xs ${this.state.pageNo >= Math.ceil(this.state.totalResults/14)? `cursor-not-allowed opacity-50`: `cursor-pointer`} ` }
                     
                     onClick={this.handleNext}
                     >next &rarr;
                     </button>
                </div>


               

            </div>
        )
    }
}
