import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import NewsItems from './NewsItems'

import Spinner from './Spinner'


function News(props){


    
    
    // articles = []

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [pageNo, setPageNo] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const apiKey = import.meta.env.VITE_API_KEY

    // constructor(props) {
    //     super(props);
    //     // You can initialize state here if needed
        
    //     this.state = {
    //         articles: this.articles,
    //         loading: false,
    //         pageNo : 1,
    //         totalResults: 0,
    //         apiKey : import.meta.env.VITE_API_KEY,
            
    //     }

    // }


    const updatePage = async(pageNo) => {

        
        
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${apiKey}&page=${pageNo}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false });
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);




    }

    useEffect(() =>{
        updatePage(pageNo);
        // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${this.state.apiKey}&page=1&pageSize=${props.pageSize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false });
    },[]);

        
    


    

     const handlePrevious = async() => {
        
        let newState = pageNo-1;
        if(newState < 1 )return;
        setPageNo(newState);


        // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${this.state.apiKey}&page=${newState}&pageSize=${props.pageSize}`;
        
        // this.setState({loading: true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({ articles: parsedData.articles, loading:false });


        

        updatePage(newState);
        
    }


    const handleNext = async() => {
        
        
        
        
        let newState = pageNo+1;
        setPageNo( newState); 
        
        // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${this.state.apiKey}&page=${newState}&pageSize=${props.pageSize}`;     
        // this.setState({loading: true});   
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({ articles: parsedData.articles, loading: false });

        
        

        updatePage(newState);
        

         
    }


    
    
               

        return (
            <div className='container m-auto p-4 py-19'>

                <h1 className="text-3xl font-bold text-center my-5">Latest News</h1>
                
                {loading && <Spinner/>}

                

               
                  <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                        { !loading &&   articles.map((element) => {
                            return <div key={element.url} >
                                <NewsItems
                                    title={element.title.slice(0, 88) + "..."}
                                    
                                    description={element.description != null ? element.description.slice(0, 120) + "..." : "..."}  
                                    
                                    imageUrl={element.urlToImage == null ? "https://nlujodhpur.ac.in/public/front/img/default-news.png" : element.urlToImage}
                                    
                                    newsUrl={element.url} />
                            </div>
                        })}
                    </div>

                


                <div className="flex justify-between mt-9 ">

                    <button
                     className={`bg-black p-2 ${pageNo <= 1?`opacity-50 cursor-not-allowed`: `cursor-pointer` }  text-white rounded-lg text-xs `} onClick={handlePrevious}
                     >&larr; previous
                     </button>
                    
                    
                    <button
                     id='nextButton'
                     
                     className={`bg-black p-2 text-white rounded-lg text-xs ${pageNo >= Math.ceil(totalResults/14)? `cursor-not-allowed opacity-50`: `cursor-pointer`} ` }
                     
                     onClick={handleNext}
                     >next &rarr;
                     </button>
                </div>


               

            </div>
        )
    
}


export default News