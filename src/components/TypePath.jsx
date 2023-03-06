import React from "react";
import {useParams} from 'react-router-dom'
const TypePath = () => {
        const {string, color, backgroundColor} = useParams();
    return(
        <div>
            {
                isNaN(string)?
                //must be listed as style in order for the colors/styling to populate
                <p style={
                    
                    color?
                    {color: color, backgroundColor: backgroundColor}
                    :null
                }>
                    This is a word: {string}
                </p>
                :
                <p>
                    This is a number: {string}
                </p>
            }
                </div>
    )
}

export default TypePath