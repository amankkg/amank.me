import { renderToString } from 'react-dom/server'

const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  replaceBodyHTMLString(renderToString(bodyComponent))
}

export { replaceRenderer }
