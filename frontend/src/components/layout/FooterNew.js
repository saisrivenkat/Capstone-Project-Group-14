import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="py-1" style={{  display: "flex", backgroundColor: "black", justifyContent: "space-around", alignItems: "center", color: "white" }}>
        <div style={{}}>
          @2021 Shop4Home
        </div>
        <div>
          <img src="./images/blacklogo.jpg" width="250" height="80" />
        </div>
        <div style={{ display: "flex" }}>

          <img src="https://i.pinimg.com/originals/25/f3/c5/25f3c5a28bd422e8da0bb2d02f2e278d.png" width="80" height="80" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAi68fw3hBkE6l-vGLWYB9aRoSV5DWJ0zKJtAzpjYTMD83DwP5WU4D1N7eHx1ucPcZle8&usqp=CAU" width="60" height="60" style={{ margin: "10px 0 0 -10px" }} />
        </div>
      </div>
    </>
  )
}

export default Footer;