import React, { useState } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import sectionsData from './directory.data';
import './directory.styles.scss';

function Directory(){
    const [sections, setSections] = useState(sectionsData);


    return(
        <div className='directory-menu'>
            {sections.map(({id, ...otherSectionProps}) => (
               <MenuItem
                key={id}
                {...otherSectionProps}
               />
            ))}     
        </div>
    )
}

export default Directory;