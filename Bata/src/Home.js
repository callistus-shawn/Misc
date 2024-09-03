import video from './video.mp4';
import './home.css'

function Home()
{
  return(

    <><div className='main'>
      <br /><br />
      
      <video className='vid'
      autoPlay loop muted
      src={video} 
      height={300}
      width={2000}
      controls={false}
       />
    </div>
    <div className='text'>
        <p>Life is full of surprises and adventures.Saying yes to those adventures is how you live limitless.<br/> So, live without worrying about what's next. Roll anytime, anywhere with fab sneakers from Sneaker Studio at Bata.<br/> Choose from over 300 sneaker styles from 9 brands.
          Say yes to adventures, say yes to fun and <span>Live limitless.</span></p>
      </div></>

  )
}

export default Home