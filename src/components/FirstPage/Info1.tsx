import React from 'react';
import images from '../../assets/images';
import Timer from '../Timer';
export default function Info1() {
return <section>
    <div className="contents">
        <div className="backgroundvideo">
            <iframe className='video'
                src={"https://player.vimeo.com/video/661908910?&autoplay=1&background=1&loop=1&byline=0&title=0"}/>
                </div> </div> <div className="content-logo">
                <div className="logo">
                    <img className='mb-5' src={images.Logo} style={{filter:"revert"}} alt="" />
                    <div className="content-slogan">
                        <h1>LOOK <br />CREATIVELY.</h1>
                        <a className='link-view' href="">
                            <h3>VIEW WORK</h3>
                        </a>
                    </div>
                </div>
        </div>
        <div className="timer">
            <h3 className='fw-normal pt-3 fs-3'>Time is our only limitation.</h3>
            {/* <Timer /> */}
        </div>
</section>
;
}