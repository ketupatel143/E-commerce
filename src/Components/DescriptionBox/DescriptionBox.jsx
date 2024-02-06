import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box"> Description </div>
            <div className="descriptionbox-nav-box fade"> Reviews </div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sint, facere dolorem rem assumenda fuga nesciunt animi voluptatum,
                 iure repudiandae nisi blanditiis unde ipsa harum veniam quisquam, error similique? Ducimus enim, alias iure maxime corrupti, quasi itaque velit,
                  modi consectetur optio ut saepe eveniet molestiae? Quo quibusdam corporis asperiores vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Nemo sint, facere dolorem rem assumenda fuga nesciunt animi voluptatum, iure repudiandae nisi blanditiis unde ipsa harum veniam quisquam, error similique? 
                  Ducimus enim,</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum totam consequatur similique alias eaque minima impedit aspernatur facilis. Laudantium, 
                deserunt!</p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
