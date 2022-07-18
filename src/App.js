import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Card from './components/Card';
import data from './data';


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Main />
//       <Card />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Navbar />
//       <Main />
//       <Card
//         img='katie-zaferes.png'
//         rating='5'
//         reviewCount={6}
//         country='USA'
//         title='Life lessons with Katie Zaferes'
//         price={136}
//       />
//     </div >
//   );
// }

export default function App() {

  const cards = data.map(item => {
    return (
      <Card
        img={item.coverImg}
        rating={item.rating}
        reviewCount={item.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Main />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}




