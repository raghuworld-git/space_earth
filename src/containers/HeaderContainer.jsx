import React, { useState } from 'react';
import Header from '../presentational/header/Header';


const HeaderContainer = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (<>
        <Header toggleCollapse={toggleCollapse} isOpen={isOpen} />
    </>)
}

export default HeaderContainer;