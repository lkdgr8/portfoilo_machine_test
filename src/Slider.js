import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

function Slider() {
    const images = [
        { url: "img/Robofrnds.png" },
        { url: "img/todo_list_project.png" },
        { url: "img/weather_proj.png" },
        { url: "img/ave_project.png" },
      ];
  return (
    <>
    <div>
        <SimpleImageSlider
            style={{ margin: "0 30px" }}
            width={1700}
            height={800}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
        />
      </div>
    </>
  )
}

export default Slider