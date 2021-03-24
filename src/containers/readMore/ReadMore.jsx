import React, { useState } from 'react';
import styles from './readMore.module.css';

const ReadMore = ({ text = '', cutoffLength = 100 }) => {
    const [isReadMore, setReadMore] = useState(true);
    return (
        <>
            {isReadMore ? text.slice(0, cutoffLength) : text}
            <span className={styles.readMore} onClick={() => setReadMore(!isReadMore)}>
                {text.length <= cutoffLength ? null : (isReadMore ? '...Read more' : '...Show less')}
            </span>
        </>
    )
}

export default ReadMore
