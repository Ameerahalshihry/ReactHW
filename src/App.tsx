import './App.css'
import Nav from './component/Nav'
import Footer from './component/Footer'
import Movie from './component/Movie'
import Show from './component/Show'

function App() {
let movies = [
  {img: "https://assets.voxcinemas.com/posters/P_HO00009984.jpg", name:"Plane", date:"22 Feb 2023", rate:9, isAvailable:false},
  {img: "https://assets.voxcinemas.com/posters/P_HO00010024.jpg", name:"Blood", date:"2 Jan 2023", rate:10, isAvailable:true},
  {img: "https://assets.voxcinemas.com/posters/P_HO00009831.jpg", name:"Pathaan", date:"1 Feb 2023", rate:7, isAvailable:false},
  {img: "https://assets.voxcinemas.com/posters/P_HO00010013.jpg", name:"Alice, Darling", date:"22 Jan 2023", rate:8, isAvailable:true},
  {img: "https://assets.voxcinemas.com/posters/P_HO00010031.jpg", name:"The Son", date:"22 Jan 2023", rate:10, isAvailable:true},
]
let shows = [
  {img: "https://assets.voxcinemas.com/posters/P_HO00009537.jpg", name:"Cold Play", date:"22 Feb 2023", rate:3, isAvailable:true},
  {img: "https://assets.voxcinemas.com/posters/P_HO00008962.jpg", name:"Blippi", date:"2 Feb 2023", rate:5, isAvailable:false},
  {img: "https://assets.voxcinemas.com/posters/P_HO00008749.jpg", name:"Sing 2", date:"1 Feb 2023", rate:7, isAvailable:false},
  {img: "https://assets.voxcinemas.com/posters/P_HO00003692.jpg", name:"WRESTLEMANIA 32", date:"22 Jan 2023", rate:8, isAvailable:true},
  {img: "https://assets.voxcinemas.com/posters/P_HO00009708.jpg", name:"THE ADVENTURES OF PADDINGTON", date:"22 Jan 2023", rate:10, isAvailable:true},
]

  return (
    <div className="App">
      <Nav/>
      {/* movies */}
      <h1 className='mainTitle animate__animated animate__fadeInUp '>Movies</h1>
        <div className="cardContainer">
          {movies.map(movie => 
          {
            return(
            <Movie key={movie.name} img={movie.img} name={movie.name} date={movie.date} rate={movie.rate} isAvailable={movie.isAvailable}/>
            )
          })}  
        </div>
        <hr />
        {/* shows */}
        <h1 className='mainTitle animate__animated animate__fadeInUp'>TV Shows</h1>
        <div className="cardContainer">
          {shows.map(show => 
          {
            return(
            <Show key={show.name} img={show.img} name={show.name} date={show.date} rate={show.rate} isAvailable={show.isAvailable}/>
            )
          })}  
        </div>
      <Footer/>
    </div>
  )
}

export default App
