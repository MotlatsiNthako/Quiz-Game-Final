import React from 'react'
import Pop from '../Images/Pop.png';
import chemistry from '../Images/chemistry.png';
import history from '../Images/history.png';
import Astronomy from '../Images/Astronomy.png';



function Category() {
    return (

        
        <div className='category'>
            
            <input className="search" type="text" placeholder="Search Quizzes"></input>

            <div className='image'>
            <a href = {'PopCulture.tsx'}> <img src={Pop} alt="Pop" width ="1110px" height="300px"/></a>

            </div>
              
            <div className="sub-category">
                
                <div className='Row-one'>

                <img src={Astronomy} alt="Astronomy" width ="350px" height="200px"/>

                </div>

                <div className='Row-two'>

                <img src={chemistry} alt="chemistry" width ="350px" height="200px"/>

                </div>

                <div className='Row-three'>

                <img src={history} alt="history" width ="350px" height="200px"/>

                </div>


            </div>
            



            {/* <div className="sub-two">
                
                <div className='Row-one'>

                <img src={Astronomy} alt="Astronomy" width ="350px" height="200px"/>

                </div>

                <div className='Row-two'>

                <img src={chemistry} alt="chemistry" width ="350px" height="200px"/>

                </div>

                <div className='Row-three'>

                <img src={history} alt="history" width ="350px" height="200px"/>

                </div>


            </div>
             */}    
            
        </div>
        
        
    )
    
}
<><div>

    
    
</div>


</>

export default Category;
