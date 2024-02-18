
import { faGithub, faLinkedinIn, faMedium } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () =>{
    return(
         <div className='flex items-end gap-4 text-2xl'>
            <div>
              <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGithub} style={{ marginRight: '8px' }}/>
              <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faMedium} style={{ marginRight: '8px' }}/>
              <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faLinkedinIn} style={{ marginRight: '8px' }}/>
            </div>

            </div> 
    )
}
export default Contact