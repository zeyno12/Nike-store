import React from 'react'
import Title from '../utils/Title';
import Item from '../utils/Item';
const Sales = ({endpoint:{title,items}}) => {
  return (
    <>
    <div>
        <Title title={title}/>
        <div className='sales'>
            {items?.map((item,i)=>(
            <Item {...item} key={i}/>
                ))}
        </div>
    </div>
    </>
  )
}

export default Sales;