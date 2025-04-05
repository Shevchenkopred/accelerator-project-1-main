const iframeContainer = document.querySelector('.iframe__video-container');
const buttonPlayVidio = document.querySelector('.iframe__button');

const createIframe = () => {
  const iframe = document.createElement('iframe');

  // iframe.src = 'https://rutube.ru/play/embed/9d92e7b1de9ac526c37caf317e5f206a/?autoplay=1/';
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?si=GvyIPOEQDZclaH8g&autoplay=1';
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.style.border = 'none';
  iframe.loading = 'lazy';
  iframe.title = 'Превью нашего фитнес зала.';
  iframe.allow = 'autoplay; clipboard-write;';
  iframe.allowFullscreen = true;

  iframe.classList.add('iframe__video');
  iframeContainer.innerHTML = '';
  iframeContainer.appendChild(iframe);
};

const playVidio = () => {
  buttonPlayVidio.style.display = 'none';
  createIframe();
};

buttonPlayVidio.addEventListener('click', playVidio);
