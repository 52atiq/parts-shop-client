import React from 'react';
import facebook from '../../assets/image/social/facebook.png'
import twitter from '../../assets/image/social/twitter.png'
import linkedin from '../../assets/image/social/linkedin2.png'
const Footer = () => {
    return (
        <footer class="footer p-10 bg-neutral text-neutral-content mt-20">
        <div>
          <span class="footer-title">Services</span> 
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span class="footer-title">Company</span> 
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact us</a>
          <a class="link link-hover">Jobs</a>
          {/* <a class="link link-hover">Press kit</a> */}
        </div> 
        <div>
          <span class="footer-title">Legal</span> 
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span class="footer-title">Social</span> 
          <a class="link link-hover"><img className='w-6 rounded' src={facebook} alt="" srcset="" /></a>
          <a class="link link-hover"><img className='w-6 rounded' src={twitter} alt="" srcset="" /></a>
          <a class="link link-hover"><img className='w-6 rounded' src={linkedin} alt="" srcset="" /></a>
          
        </div>
      </footer>
    );
};

export default Footer;