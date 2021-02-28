import baseTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui"
import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"
import './theme.css'

export default merge(baseTheme, {
  colors: {
    text: "#141a2c",
    modes: {
      dark: {
        text: tailwind.colors.gray[4],
        toggleIcon: tailwind.colors.gray[4],
        background: `#141a2c`,
        heading: tailwind.colors.white,
        divide: tailwind.colors.gray[8],
        muted: tailwind.colors.gray[8],
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
      borderColor: 'secondary', boxShadow: '0 0 0 0.25rem transparent', '&:hover': { bg: '#8b949c', borderColor: '#6c757d', },
      '&:focus': { boxShadow: '0 0 0 0.25rem rgba(130, 138, 145, 0.4)', bg: '#8b949c', borderColor: '#b8bfc5', outline: 0, },
      '&:active': { boxShadow: '0 0 0 0.25rem rgba(130, 138, 145, 0.2)', bg: '#7d858c', borderColor: '#7d858c', outline: 0, },
    },

  },
})