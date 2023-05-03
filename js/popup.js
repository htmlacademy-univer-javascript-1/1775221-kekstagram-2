import {renderItemDetails} from './big-items.js';
import {isEscapeKey, isEnterKey} from './utils.js';

const body = document.querySelector('body');
const itemOpenDialogElement = document.querySelector('.big-picture');
const itemCloseDialogElement = document.querySelector('.big-picture__cancel');


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePopup();
  }
};

function hidePopup () {
  itemOpenDialogElement.classList.add('hidden');
  body.classList.remove('.modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

export const showPopup = (itemData) => {
  itemOpenDialogElement.classList.remove('hidden');
  body.classList.add('.modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  renderItemDetails(itemData, itemOpenDialogElement);
};

itemCloseDialogElement.addEventListener('click', () => {
  hidePopup();
});

itemCloseDialogElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    hidePopup();
  }
});
