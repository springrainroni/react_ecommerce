import React from 'react'

 export const Product = ({id,title,brand,price,image_url,keyword, addCart}) => {
  function getHighlightedText(text, highlight) {
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span> { parts.map((part, i) => 
        <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? {color:'green', fontWeight: 'bold' } : {} }>
            { part }
        </span>)
    } </span>;
}
  return (
    <div className='product'>
        <img src={image_url} alt={title} />
        <div className='title'>
            <span>{getHighlightedText(title,keyword)}</span>
            <span>{getHighlightedText(brand,keyword)}</span>
        </div>
        <div className='action'>
            <span>$ {price}</span>
            <span> <button onClick={()=>addCart(id)}>Add to Cart </button></span>
        </div>
    </div>
  )
}

