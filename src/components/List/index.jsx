import React from 'react';
import './List.scss';
import Badge from '../Badge';

import classNames from 'classnames';


  const List=({items,isRemovable, click })=> {
      
    return <ul onClick={click} className="list">
        {
            items.map((item,index)=>
              <li key={index} className={classNames(item.className,{'active': item.active})}>
                <i>
                  {item.icon ? item.icon : (<Badge color={item.color}/>)}
                </i>
            <span>{item.name}</span>
                </li>)
        }
        
    </ul>
}
export default List;