import profilePC from '../assets/images/profile-pc.jpeg';
import profileTablet from '../assets/images/profile-tablet.jpeg';
import profileMobile from '../assets/images/profile-mobile.jpeg';
import contactPC from '../assets/images/contact-pc.JPG';
import contactTablet from '../assets/images/contact-tablet.JPG';
import contactMobile from '../assets/images/contact-mobile.JPG';

import githubIcon from '../assets/icons/github.svg';
import phoneIcon from '../assets/icons/phone.svg';
import xIcon from '../assets/icons/x.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import mailIcon from '../assets/icons/mail.svg';
import linkIcon from '../assets/icons/link.svg';

function imageLoader() {
  document.querySelector('#profile-pc').src = profilePC;
  document.querySelector('#profile-tablet').srcset = profileTablet;
  document.querySelector('#profile-mobile').srcset = profileMobile;

  document.querySelector('#contact-pc').src = contactPC;
  document.querySelector('#contact-tablet').srcset = contactTablet;
  document.querySelector('#contact-mobile').srcset = contactMobile;
}

function iconLoader() {
  document.querySelector('#x-icon').src = xIcon;
  document.querySelector('#github-icon').src = githubIcon;
  document.querySelector('#link-icon').src = linkIcon;
  document.querySelector('#linkedin-icon').src = linkedinIcon;
  document.querySelector('#phone-icon').src = phoneIcon;
  document.querySelector('#mail-icon').src = mailIcon;
}

export default function assetLoader() {
  imageLoader();
  iconLoader();
}
