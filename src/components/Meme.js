import React from "react";
// import memesData from "../memesData";
 
export default function Meme(props) {
    // let ximg = "1bij"
    const [meme , setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
        // randomImage : `http://i.imgflip.com/${ximg}.jpg`
        
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data=> setAllMemeImages(data.data.memes))
    },[])
    

    function handleChange(event) {
        console.log(event.target.value)
        setMeme(prevData => {
            return{
                ...prevData,
                [event.target.name]:event.target.value
            }
            
        })
    }



    let Url
    // const [memeImg , setMemeImg] = React.useState("")
    function getMemeImage () {
        // const allMemeImages = memesData.data.memes
        // const allMemeImages = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        Url = allMemeImages[randomNumber].url
        console.log(Url)
        // setMemeImg(memeImg => Url)
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage : Url
            }
        })
    }

    
    return(
        <main className="meme--form">
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text"
                    className="form--input"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button 
                    className="form--btn"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>

            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}