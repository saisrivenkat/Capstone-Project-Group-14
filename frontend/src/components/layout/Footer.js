import React, { Fragment } from 'react'
import "../../App.css";

const Footer = () => {
    return (
        <Fragment>
            <footer className="py-1">
                {/* <p className="text-center mt-1">
                    Shopping Cart - 2019-2022, All Rights Reserved
                </p> */}
                <div className="leftFooter">
        <h4>Download Our APP</h4>
        <p>Download App from for Android and IOS Mobile</p>
        <img src={"https://i.imgur.com/KUytzcT.png"} alt="playstore" />
        <img src={"https://i.imgur.com/ja3xbqS.png"} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Shop For Home</h1>
        <p>High Quality is our first Priority</p>
        <p>Copyrights 2022 &copy; Group 8 Capastone</p>
      </div>

      <div className="rightFooter">
        <h4>Follow us</h4>
        <a href="https://www.linkedin.com/">
          Linkedln
        </a>
        <a href="https://github.com/">Github</a>
        <a href="https://twitter.com/">Twitter</a>
      </div>
            </footer>
        </Fragment>
    )
}

export default Footer
