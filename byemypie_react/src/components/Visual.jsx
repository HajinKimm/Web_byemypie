import React, { useState } from 'react';
import list from '../assets/api/home_visual'
import { VisualWrap } from '../styled/HomeStyle';


const Visual = () => {
    const [visualList, setVisualList] = useState(list.filter(item=>item.language==='kr'))
    // console.log(visualList)
    const [btn, setBtn] = useState(1)
    setTimeout(x=>{
        if(btn===1) setBtn(2)
        if(btn===2) setBtn(1)
    },5000)

    return (
        <VisualWrap>
            <div className="btn">
            {
                visualList.map(item=>
                    <span  key={item.id} onClick={()=>setBtn(item.id)} className={btn===item.id?'on':''}>{item.id}</span>
                    )
                }
            </div>
            {
                visualList.map(item=>
                    <div key={item.id} className='visual'>
                            <img src={item.img} alt="" className={btn===item.id?'on':''}/>
                    </div>
                )
            }
            {/* {
                    noticeData.map(item => {
                        const { content } = item;
                        return (
                            <div dangerouslySetInnerHTML={{ __html: content }}></div>
                        )
                    })} */}
        </VisualWrap>
    );
};

export default Visual;