import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'alt=''/> 
            
                <div className='home__row'>
                    <Product id='48514613' title='The Lean Startup' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg' rating={5}/>
                    <Product id='47514613'  title='NVIDIA GEFORCE RTX 2080 Ti Founders Edition' price={1699.00} image='https://m.media-amazon.com/images/I/514km+ZccrL._AC_UY218_.jpg' rating={4}/>
                </div>

                <div className='home__row'>
                    <Product id='47584613'  title='BLACKMYTH Women Summer Short Sleeve Top Tee Graphic Cute T-Shirt' price={11.99} image='https://m.media-amazon.com/images/I/51OTih+BZ6L._AC_UL320_.jpg' rating={4}/>
                    <Product id='48532613'  title='ASUS ROG Zenith II Extreme Alpha TRX40 Gaming AMD 3rd Gen Ryzen Threadripper sTRX4 EATX Motherboard with 16 Infineon Power Stages, PCIe 4.0, Wi-Fi 6 (802.11ax), USB 3.2 Gen 2x2 and Aura Sync RGB' price={829.99} image='https://m.media-amazon.com/images/I/71+cv1MHnRL._AC_UY218_.jpg' rating={5}/>
                    <Product id='58545613'  title='G.SKILL Trident Z Royal Series 32GB (2 x 16GB) 288-Pin DDR4 SDRAM DDR4 3600 Desktop Memory Model F4-3600C19D-32GTRS' price={169.99} image='https://m.media-amazon.com/images/I/71undHAHytL._AC_UY218_.jpg' rating={5}/>
                </div>

                <div className='home__row'>
                    <Product id='4971713'  title='Samsung CJ89 43" Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor (LC43J890DKNXZA), Black' price={874.73} image='https://m.media-amazon.com/images/I/81v90JtbImL._AC_UY218_.jpg' rating={4}/>
                </div>
                
            </div>

            

        </div>
    )
}

export default Home
