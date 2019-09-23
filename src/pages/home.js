import React from "react";
import BackgroundSlider from 'react-background-slider';




const Home = () => {
    return (

        <div className="welcome">
            <BackgroundSlider
                images={['https://i2.wp.com/networkinferno.net/wp-content/uploads/2018/11/lord-of-the-rings-landscape-wallpapers-1080p-For-Desktop-Wallpaper.jpg?ssl=1', 'https://www.wallpaperbetter.com/wallpaper/954/747/641/lord-of-the-rings-the-fellowship-of-the-rings-1080P-wallpaper-middle-size.jpg', 'https://wallpapercave.com/wp/2jk7Vgg.jpg', 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F7d48de207b934a3e3a63e2aab34d2d09%2F205858706%2Flord_of_the_rings.jpg&client=amp-blogside-v2&signature=f47b967d63f9d8aecfad869f63a10017907778eb']}
                duration={8}
                transition={1}
            />

            <h1>WELCOME TO MY CAPSTONE!!!</h1>
            <div>
                <hr />
            </div>
            <div className="what">
                <p>Go to the Lords link to arrange your favorite Lord of the Rings characters from favorite to least favorite</p>

            </div>
            <div>
                <hr />
            </div>
            <div className="what-what-what">
                <p>Go to the Fellowship link to create your own fellowship!</p>
            </div>
            <div>
                <hr />
            </div>
            <div className="what-what">
                <p>To learn more about me, go to my about page. Also, learn how to reach out to me on the contact page</p>
            </div>

        </div>


    )
};

export default Home;