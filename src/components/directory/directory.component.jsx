import React, { useState } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import sectionsData from './directory.data';
import './directory.styles.scss';

function Directory(){
    const [sections, setSections] = useState(sectionsData);


    return(
        <div className='directory-menu'>
            {sectionsData.map(({title, imageUrl, id, size}) => (
               <MenuItem
                key={id}
                title={title}
                imageUrl={imageUrl}
                size={size}
               />
            ))}     
        </div>
    )
}

export default Directory;