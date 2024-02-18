import Experience from "../Experience"
import About from "../about"

// import About from "../About";
const RightSection = () =>{
    return(
<div className="grid gap-y-40 px-5">
        <About/>
        <Experience/>
        <div>Experience</div>
        <div>Experience</div>
        <div>Experience</div>
        <div>Experience</div>

        {/* <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div> */}
      </div>
    )
}
export default RightSection