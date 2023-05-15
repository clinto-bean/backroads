import Title from "./Title"
import banner from "../images/main.jpeg"

function About() {
  return (
    <>
      <section>
        <Title title='about' subtitle='us' />

        <div className='section-center about-center'>
          <div className='about-img'>
            <img src={banner} className='about-photo' alt='awesome beach' />
          </div>
          <article className='about-info'>
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <a href='#home' className='btn'>
              Read more
            </a>
          </article>
        </div>
      </section>
    </>
  )
}

export default About
