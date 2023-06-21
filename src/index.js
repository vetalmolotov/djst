// Test import of a JavaScript module
import { example } from '@/js/example'
import bootstrap from 'bootstrap'

import {iconArrowSVG} from './js/icon-arrow'

import '@/styles/index.scss'

const iconArrow = document.querySelectorAll('.icon-arrow')
for (let i = 0; i < iconArrow.length; ++i) {
  iconArrow[i].innerHTML = iconArrowSVG()
}
// Test import of an asset
// import webpackLogo from '@/images/webpack-logo.svg'

// Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo
//
// const heading = document.createElement('h1')
// heading.textContent = example()

// Test a background image url in CSS
// const imageBackground = document.createElement('div')
// imageBackground.classList.add('image')

// Test a public folder asset
// const imagePublic = document.createElement('img')
// imagePublic.src = '/assets/example.png'

// const app = document.querySelector('#root')
// app.append(logo, heading, imageBackground, imagePublic)
