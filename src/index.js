import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const _window = window
function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
if (_window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = _window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
export async function bootstrap() {

}
export async function mount() {
  render()
}
export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}
if (!_window.__POWERED_BY_QIANKUN__) {
  render()
}