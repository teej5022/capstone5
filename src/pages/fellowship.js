import React, { Component } from "react";
import Persons from "../containers/Persons";
import BackgroundSlider from 'react-background-slider';

class Fellowship extends Component {
    render() {
        return (
            <div className="Fellowship">
                <p>Create your own Fellowship</p>
                <Persons />
                <BackgroundSlider
                    images={['https://i2.wp.com/networkinferno.net/wp-content/uploads/2018/11/lord-of-the-rings-landscape-wallpapers-1080p-For-Desktop-Wallpaper.jpg?ssl=1', 'https://www.wallpaperbetter.com/wallpaper/954/747/641/lord-of-the-rings-the-fellowship-of-the-rings-1080P-wallpaper-middle-size.jpg', 'https://wallpapercave.com/wp/2jk7Vgg.jpg', 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F7d48de207b934a3e3a63e2aab34d2d09%2F205858706%2Flord_of_the_rings.jpg&client=amp-blogside-v2&signature=f47b967d63f9d8aecfad869f63a10017907778eb']}
                    duration={8}
                    transition={2}
                />
            </div>


        );
    }
}

export default Fellowship;