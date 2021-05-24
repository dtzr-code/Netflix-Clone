import React, {useState} from 'react'
import "./HomeScreen.css"
import Nav from '../components/Nav'
import Row from '../components/Row'
import SearchRow from '../components/SearchRow'
import Banner from '../components/Banner'
import requests from '../Requests'
import { API_KEY } from '../Requests'

function HomeScreen() {

  /* for the search results */
  const [searchTerm, setSearchTerm] = useState("")
  const [searchActive, setIsActive] = useState(false)
  if (searchTerm > 0){
    setIsActive(!searchActive)
  }

  const search_query= `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`

  const handleChange = e => {
    setSearchTerm(e)
  }

  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav 
        value={searchTerm} 
        handleChange={e=> handleChange(e.target.value)}
      />
      {searchTerm
        ?
          <SearchRow 
            title="Search Results" 
            fetchUrl = {search_query}
          />
        :
        <div>
          {/* Banner */}
          <Banner/>

            {/* Row */}
            {/* Each row will take a few different props */}
            {/* Props allow us to customise one component from another */}
          <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
          />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        </div>
        }
    </div>
  )
}

export default HomeScreen
