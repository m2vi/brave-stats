const settings = {
  delay: 0,
  url: 'https://www.youtube.com/youtubei/v1/log_event?alt=json&key=%random%',
};

const activate = () => {
  setInterval(async () => {
    const random = (Math.random() * 10 * Math.PI).toString();
    const el = document.getElementById('requests');
    const url = settings.url.replace('%random%', random);

    try {
      await fetch(url);
    } catch (err) {
      const requests = parseInt(el.innerHTML);
      el.innerText = requests + 1;
    }
  }, settings.delay);
};
