import domtoimage from 'dom-to-image';

const printElement = async (element, name) => {
  const node = element?.target
    ? element.target
    : document.getElementById(element);

  if (!node) return;

  const dataUrl = await domtoimage.toJpeg(node);
  const link = document.createElement('a');
  link.download = `${name ?? 'noname'}.jpg`;
  link.href = dataUrl;
  link.click();
};

export default printElement;
