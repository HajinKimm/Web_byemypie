import React, { useState } from 'react';
import list from '../../assets/api/home_visual'


const Visual = () => {
    const [visualList, setVisualList] = useState(list.filter(item=>item.language==='kr'))
    console.log(visualList)
    return (
        <div>
            <div className="btn">
                <span>1</span>
                <span>2</span>
            </div>
            {
                visualList.map(item=>
                    <div key={item.id} className='visual'>
                        <img src={item.img} alt="" />
                    </div>
                )
            }
        </div>
    );
};

export default Visual;