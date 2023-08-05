import React from 'react'
import galleryImg from './galleryImages'
import  Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1 , 769:3 , 992:4}}>
        <Masonry gutter='1rem'>
            {
                galleryImg.map((item , index) =>{
                    return <img className='masonry__img' 
                    src={item} 
                    key={index} 
                    style={{'width':'100%' , 'display': 'block' , 'borderRadius': '10px'}  }
                    />
                })
            }
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery