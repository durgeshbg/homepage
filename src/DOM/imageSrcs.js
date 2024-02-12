import profilePC from '../assets/profile-pc.jpeg';
import profileTablet from '../assets/profile-tablet.jpeg';
import profileMobile from '../assets/profile-mobile.jpeg';
import contactPC from '../assets/contact-pc.JPG';
import contactTablet from '../assets/contact-tablet.JPG';
import contactMobile from '../assets/contact-mobile.JPG';

export default function imageLoader() {
  document.querySelector('#profile-pc').src = profilePC;
  document.querySelector('#profile-tablet').srcset = profileTablet;
  document.querySelector('#profile-mobile').srcset = profileMobile;

  document.querySelector('#contact-pc').src = contactPC;
  document.querySelector('#contact-tablet').srcset = contactTablet;
  document.querySelector('#contact-mobile').srcset = contactMobile;
}
