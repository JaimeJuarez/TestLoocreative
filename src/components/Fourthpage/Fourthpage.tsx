import React from 'react';
import Year2016 from './Year2016';
import Year2017 from './Year2017';
import Year2018 from './Year2018';
import Year2019 from './Year2019';
import Year2020 from './Year2020';

export default function Fourthpage() {
return <div className='fourthpage'>
    <div className="title4">
        <h1>History</h1>
    </div>
    <div className="slick-list">
        <div className="slick-track">
            <Year2020 />
            <Year2019 />
            <Year2018 />
            <Year2017 />
            <Year2016 />
        </div>
    </div>
</div>;
}