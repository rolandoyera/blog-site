import baseTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui"
import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"
import './theme.css'

export default merge(baseTheme, {
  initialColorModeName: `light`,
  useCustomProperties: true,
  colors: {
    text: "#141a2c",
    navLink: `hsl(225, 58%, 55%)`,
    navLinkHover: `hsl(225, 58%, 70%)`,
    primaryLink: `hsl(225, 58%, 55%)`,
    primaryLinkHover: `hsl(225, 58%, 70%)`,


    primary: `hsl(215, 16%, 45%)`,
    secondary: `#5f6c80`,
    toggleIcon: tailwind.colors.gray[8],
    heading: tailwind.colors.black,
    divide: tailwind.colors.gray[4],
    cardBg: `hsl(225, 14%, 99%)`,

    modes: {
      dark: {
        text: "hsl(210, 50%, 90%)",
        navLink: `hsl(215, 16%, 85%)`,
        navLinkHover: `hsl(290, 50%, 75%)`,
        primaryLink: `hsl(215, 16%, 100%)`,
        primaryLinkHover: `hsl(290, 50%, 85%)`,


        cardBg: `hsl(225, 38%, 15%)`,
        background: "#141a2c",
        primary: "hsl(290, 50%, 75%)",
        secondary: "hsl(290, 50%, 75%)",
        highlight: "hsl(260, 20%, 40%)",
        purple: "hsl(290, 100%, 80%)",
        muted: "hsla(230, 20%, 0%, 20%)",
        gray: "hsl(210, 50%, 60%)",

        // text: tailwind.colors.gray[4],
        // primary: tailwind.colors.gray[4],
        // secondary: `#7f8ea3`,
        // toggleIcon: tailwind.colors.gray[4],
        // background: `#141a2c`,
        heading: "hsl(210, 50%, 90%)",
        // divide: tailwind.colors.gray[8],
        // muted: tailwind.colors.gray[8],
      },
    },
  },

  buttons: {
    primary: {
      color: 'white', bg: '#0d6efd', paddingX: '4', paddingY: '2', fontSize: '1rem', marginX: '1', cursor: 'pointer', borderWidth: '1px',
      borderStyle: 'solid', borderColor: '#0a58ca', boxShadow: '0 0 0 0.25rem transparent', '&:hover': { bg: '#3d8bfd', borderColor: '#0d6efd', },
      '&:focus': { boxShadow: '0 0 0 0.25rem rgba(13, 109, 253, 0.4)', bg: '#3d8bfd', borderColor: '#6ea8fe', outline: 0, }, '&:active': { boxShadow: '0 0 0 0.25rem rgba(13, 109, 253, 0.2)', bg: '#377de4', borderColor: '#377de4', outline: 0, },
    },
    secondary: {
      color: 'white', bg: '#b8bfc5', paddingX: '4', paddingY: '2', fontSize: '1rem', cursor: 'pointer', borderWidth: '1px', borderStyle: 'solid',
      borderColor: '#b8bfc5', boxShadow: '0 0 0 0.25rem transparent', '&:hover': { bg: '#8b949c', borderColor: '#6c757d', },
      '&:focus': { boxShadow: '0 0 0 0.25rem rgba(130, 138, 145, 0.4)', bg: '#8b949c', borderColor: '#b8bfc5', outline: 1, },
      '&:active': { boxShadow: '0 0 0 0.25rem rgba(130, 138, 145, 0.2)', bg: '#7d858c', borderColor: '#7d858c', outline: 0, },
    },

  },

  cards: {
    primary: {
      padding: 0,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      bg: `cardBg`,
    },
  },

})