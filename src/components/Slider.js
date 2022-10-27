import {AiOutlineRight} from 'react-icons/ai';
import {AiOutlineLeft} from 'react-icons/ai';

function slide (){
    return(
        <div style={{display:"flex" }}>
            <div >
               <button className="arrow"><AiOutlineLeft/> </button>
            </div>  &nbsp;&nbsp;
            <div>
            <button className="arrow"><AiOutlineRight/></button>
            </div>
        </div>

    )
}

export default slide;