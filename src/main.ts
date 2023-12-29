import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

const DOM_ELEMENT_ID = "substrateConnectExtensionAvailable"
const DOM_ELEMENT_ID2 = "substrateConnectExtensionAvailableV2"

const isExtensionPresent = () =>
  typeof document === "object" &&
  typeof document.getElementById === "function" &&
  !!document.getElementById(DOM_ELEMENT_ID)

const isExtensionPresent2 = () =>
  typeof document === "object" &&
  typeof document.getElementById === "function" &&
  !!document.getElementById(DOM_ELEMENT_ID2)


let count = 0
setInterval(() => {
  const present = isExtensionPresent() ? 'old' : isExtensionPresent2() ? 'new': 'none'
  const element = document.querySelector<HTMLButtonElement>('#counter')!
  element.innerHTML = `${present}-(${++count})`
}, 1_000)
