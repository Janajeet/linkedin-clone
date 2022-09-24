import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function widgets() {
    const newsArticle = (heading,subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn news</h2>
            <InfoIcon />
        </div>
        {newsArticle("General trivia","Queen is no more")}
        {newsArticle("Nation wants to know","Is the government any good?")}
        {newsArticle("Raiden Shogun wallpaper","https://drive.google.com/file/d/1jx-Rh3dhn9C3DdLQwkurhf755XNqcwst/view?usp=sharing")}
        {newsArticle("My incapabilities","Idk how to pass link to a function so please copy paste the above link for a surprise")}

    </div>
  )
}

export default widgets