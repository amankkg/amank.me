import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  replaceBodyHTMLString(renderToString(bodyComponent))
  setHeadComponents([new ServerStyleSheet().getStyleElement()])
}

export { replaceRenderer }
