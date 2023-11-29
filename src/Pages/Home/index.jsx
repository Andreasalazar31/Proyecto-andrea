import { useState,useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import React from 'react'




export const Home = () => {
  const [items, setItems] = useState(null)
  useEffect(() => {
   
    fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Garment/')
    
    .then(response => response.json())
    .then(data => setItems(data) )

  }, [])
  
  return (
    <>
      <Layout>
           Home
          
        <div className='grid gap-9 grid-cols-4 w-full max-w-screen-lg'>
            {
                items?.map(item => (
                    <Card key={item.id} data = {item} />
                ))
            }

        </div>
        
      </Layout>
  
    </>
  )
}

    
    export default Home
 

