import React from 'react'

// export default function Card() {
//     return (
//         <div className='card-div'>
//             <img src="../images/pool-house.jpg" alt='pool house' className='card-image' />
//             <div className='card-stat'>
//                 <img src='../images/star.png' alt='star' className='card-star' />
//                 <span>4</span>
//                 <span>(8)</span>
//                 <span>  -  CA</span>
//             </div>
//             <p>Marylin's home</p>
//             <p><b>From $140</b> / person</p>
//         </div>
//     )
// }

export default function Card(props) {
    return (
        <div className='card-div'>
            <img src={`./images/${props.img}`} alt='pool house' className='card-image' />
            <div className='card-stat'>
                <img src='../images/star.png' alt='star' className='card-star' />
                <span>{props.rating}</span>
                <span>({props.reviewCount})</span>
                <span>  -  {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
    )
}