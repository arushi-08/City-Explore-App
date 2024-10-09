import React, { useEffect, useState } from 'react';
import CitySkylinesHeader from './CitySkylinesHeader';
import './style.css';
// React

// React Server Components

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/home').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [])
  return (
    <div>
      <CitySkylinesHeader />
    </div>
  )
}


// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// }

// export const MyComponent = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <motion.nav
//       animate={isOpen ? "open" : "closed"}
//       variants={variants}
//     >
//       <Toggle onClick={() => setIsOpen(isOpen => !isOpen)} />
//       <Items />
//     </motion.nav>
//   )
// }

export default App