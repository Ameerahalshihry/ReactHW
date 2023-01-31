import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='firstCol'>
            <h4>Company Name</h4>
            <p>Lorem ipsum dolor sit amet consectetur<br/>
            adipisicing elit. Tenetur exercitationem, </p>
        </div>
        <div className="secondCol">
        <h4>Important Links</h4>
        <ul>
            <li>Latest News</li>
            <li>Subscribe</li>
            <li>FAQ</li>
        </ul>
        </div>
        <div className="thirdCol">
            <h4>Social Media</h4>
            <ul>
                <li>Fasbok</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;