import {
  aboutUs,
  chickens,
  saliva,
  slow,
  special,
  walnut_honey,
  weak_sauce,
} from '@/public';
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiPhone,
  FiTwitter,
} from 'react-icons/fi';

import { chickenHeart, chickenKids, egg } from '@/public';

export const navLinks = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/menu',
    label: 'Menu',
  },
  {
    url: '/aboutUs',
    label: 'About Us',
  },
  {
    url: '/contactUs',
    label: 'Contact Us',
  },
];

export const socialLinks = [
  {
    url: 'tel:+123456789',
    icon: FiPhone,
  },
  {
    url: 'mailto:info@thicken.com',
    icon: FiMail,
  },
  {
    url: 'https://instagram.com',
    icon: FiInstagram,
  },
  {
    url: 'https://facebook.com',
    icon: FiFacebook,
  },
  {
    url: 'https://twitter.com',
    icon: FiTwitter,
  },
];

export const saucesInfo = [
  {
    name: 'Walnut Honey Skunk',
    desc: 'A unique combination of walnut essence and the mysterious aroma of a skunk.',
    imgSrc: walnut_honey,
  },
  {
    name: 'Not Really A Special Sauce (Weak Sauce)',
    desc: 'A sauce that challenges the boundaries of mediocrity. Prepare for a taste adventure!',
    imgSrc: weak_sauce,
  },
  {
    name: 'House Special Saliva',
    desc: "A magical sauce crafted from unicorn saliva. It's mystical, it's enchanting — it's one of a kind.",
    imgSrc: saliva,
  },
  {
    name: 'More Special Than You Sauce',
    desc: 'A sauce that outshines even the most special of individuals. Brace yourself for an extraordinary experience!',
    imgSrc: special,
  },
];

export const freeMenu = [
  {
    name: 'Chicken Egg',
    desc: 'A delicately cooked egg straight from the source. Breakfast and dinner collide in this delectable treat.',
    imgSrc: egg,
  },
  {
    name: 'Chicken Hearts',
    desc: 'Embark on a culinary adventure with our unconventional offering. This dish is for the bold and daring!',
    imgSrc: chickenHeart,
  },
  {
    name: 'Chicken Kids',
    desc: `We recommend adopting these adorable chicks instead of eating them. They're for cuddles, not consumption!`,
    imgSrc: chickenKids,
  },
];

export const featuredSection = [
  {
    id: 'aboutUs',
    title: 'About Us',
    heading: 'Welcome to Thicken Thighs: Where Chickens Are Our Superstars!',
    content: `At Thicken Thighs, we take pride in being the premier
    slow-food restaurant in the industry. Our commitment to
    slowness and chicken-centric cuisine sets us apart. With the
    quality coming from the slowest staff and thickest chickens,
    we're here to serve up a memorable dining experience that
    will leave you clucking for more!`,
    imgSrc: aboutUs,
    alt: 'Inside a restaurant',
  },
  {
    id: 'commitment',
    title: 'Commitment',
    heading: 'Out Commitment to Slowness',
    content: `You won't find a restaurant slower than us — seriously,
    we've won awards for it! We take our time with each and
    every meal, ensuring that the flavors develop at a
    snail's pace to reach maximum deliciousness.! Join us on
    a culinary adventure where every bite is worth the wait.`,
    imgSrc: slow,
    alt: 'A snail on a long leaf',
  },
  {
    id: 'profits',
    title: 'Profits',
    heading: 'Chicken Reproduction Fund',
    content: `At Thicken Thighs, our profits are dedicated to supporting our backyard chickens. By dining with us, you contribute to their romantic endeavors. Please be patient, as our feathered friends need time to do their thing — reproduce. It's all part of our commitment to sustainable poultry practices.`,
    imgSrc: chickens,
    alt: 'Chickens in a garden',
  },
];
