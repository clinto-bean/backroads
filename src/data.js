import tour1 from "./images/tour-1.jpeg"
import tour2 from "./images/tour-2.jpeg"
import tour3 from "./images/tour-3.jpeg"
import tour4 from "./images/tour-4.jpeg"

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
]

export const socialLinks = [
  { id: 1, href: "https://twitter.com", icon: "fab fa-twitter" },
  { id: 2, href: "https://fb.com", icon: "fab fa-facebook" },
  { id: 3, href: "https://instagram.com", icon: "fab fa-instagram" },
]

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Saving Money",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, nesciunt",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Endless Hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Complete Comfort",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, nesciunt. Joe mama",
  },
]

export const tours = [
  {
    id: 1,
    date: "august 26th, 2020",
    img: tour1,
    name: "Tibet Adventure",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, dolore?",
    location: "china",
    length: 6,
    price: 2100,
  },
  {
    id: 2,
    date: "october 11th, 2020",
    img: tour2,
    name: "Best of Java",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, dolore?",
    location: "Indonesia",
    length: 11,
    price: 1400,
  },
  {
    id: 3,
    date: "september 15th, 2020",
    img: tour3,
    name: "explore hong kong",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, dolore?",
    location: "hong kong",
    length: 8,
    price: 5000,
  },
  {
    id: 4,
    date: "december 5th, 2019",
    img: tour4,
    name: "kenya highlights",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, dolore?",
    location: "kenya",
    length: 20,
    price: 3300,
  },
]
