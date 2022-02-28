import React from 'react'
import { FaTwitter, FaDiscord } from 'react-icons/fa'
import {AiOutlineMedium} from 'react-icons/ai'
export default function Footer() {
  return (
    <div className='footerC'>
      <div className='subscribe'>
        <div>
        <div className="inner">
          <input type="text" placeholder='Enter your email address' />
          <button>Subscribe</button>
        </div>
        </div>
      </div>
      <div className='hideInDesktop footerIcon'>
          <FaTwitter />
          <FaDiscord />
          <AiOutlineMedium />
        </div>
      <div className='footer-bottom'>
        <div>
          <img src="/images/logo.png" alt="" />
        </div>
        <div>
          <p>© 2021 Quack Squad. All Rights Reserved</p>
        </div>
        <div className='hideInMobile'>
          <FaTwitter />
          <FaDiscord />
          <AiOutlineMedium />
        </div>
      </div>
    </div>
  )
}
