/* eslint-disable no-param-reassign */
import profilePC from '../assets/images/profile-pc.jpeg';
import profileTablet from '../assets/images/profile-tablet.jpeg';
import profileMobile from '../assets/images/profile-mobile.jpeg';
import contactPC from '../assets/images/contact-pc.JPG';
import contactTablet from '../assets/images/contact-tablet.JPG';
import contactMobile from '../assets/images/contact-mobile.JPG';

import github from '../assets/icons/github.svg';
import phone from '../assets/icons/phone.svg';
import x from '../assets/icons/x.svg';
import linkedin from '../assets/icons/linkedin.svg';
import mail from '../assets/icons/mail.svg';
import link from '../assets/icons/link.svg';

const icons = {
  github,
  phone,
  x,
  linkedin,
  mail,
  link,
};

function imageLoader() {
  document.querySelector('#profile-pc').src = profilePC;
  document.querySelector('#profile-tablet').srcset = profileTablet;
  document.querySelector('#profile-mobile').srcset = profileMobile;
  document.querySelector('#profile-mobile-ss').srcset = profileTablet;

  document.querySelector('#contact-pc').src = contactPC;
  document.querySelector('#contact-tablet').srcset = contactTablet;
  document.querySelector('#contact-mobile').srcset = contactMobile;
  document.querySelector('#contact-mobile-ss').srcset = contactTablet;
}

function iconLoader() {
  Array.from(document.querySelectorAll('.icon')).forEach((elem) => {
    elem.src = icons[elem.classList[1]];
  });
}

export default function assetLoader() {
  imageLoader();
  iconLoader();
}
