import React from 'react'
import Image from 'react-bootstrap/Image'

const Photo = () => {
    return(
        <div>
            <Image class="mx-auto d-block" src={require("../images/picture1.JPG")} thumbnail/>
        </div>
    )
}

export default Photo;