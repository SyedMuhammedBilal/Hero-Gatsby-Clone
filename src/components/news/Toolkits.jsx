import React from 'react'
import '../../styles/news/newsCards.css'
import '../../styles/news/toolkits.css'
import Arrow from '../../svgs/arrow'

const Toolkits = () => {
    return (
        <div className="mt-28 mb-28">
            <div style={{textAlign: 'center', padding: 0}} className="news__heading mb-10">
                <h1>HERO® TOOLKITS</h1>
            </div>
            
            <div className="toolkits__main">
              <ul className="toolkits__cards">
                <li className="toolkits__cards_item">
                  <div className="toolkits__card">
                    <div className="toolkits__card_image">
                      <img src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/HERO-Marketing-Kit.jpg" />
                    </div>
                    <div className="toolkits__card_content">
                      <h2 className="toolkits__card_title">newsroom</h2>
                      <p className="toolkits__card_text">
                      Axel Arigato Launches Virtual Shopping Experience in Partnership With HERO® 
                      </p>
                      <p style={{display: 'flex', textAlign: 'center', color: '#111'}} className="toolkits__btn card_btn">12-10-2021 <Arrow /></p>
                    </div>
                  </div>
                </li>
                <li className="toolkits__cards_item">
                  <div className="toolkits__card">
                    <div className="toolkits__card_image">
                      <img src="https://2hrmp9bzmmx3f0xil1wyssgx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/HERO-Brand.jpg" />
                    </div>
                    <div className="toolkits__card_content">
                      <h2 className="toolkits__card_title">newsroom</h2>
                      <p className="toolkits__card_text">
                      Axel Arigato Launches Virtual Shopping Experience in Partnership With HERO® 
                      </p>
                      <p style={{display: 'flex', textAlign: 'center', color: '#111'}} className="toolkits__btn card_btn">12-10-2021 <Arrow /></p>
                    </div>
                  </div>
                </li>
                </ul>
                </div>
        </div>
    )
}

export default Toolkits
