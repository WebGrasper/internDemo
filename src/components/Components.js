import Banner from './Banner/Banner';
import Category from './Category/Category';
import Catalogue from './Catalogue/Catalogue';

export function applyStyle(style) {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = style;
  document.head.appendChild(styleElement);
}

const componentMapping = {
  Banner,
  Category,
  Catalogue
};

export default componentMapping;