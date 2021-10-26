const settings = {
  delay: 0,
  url: 'https://www.youtube.com/youtubei/v1/log_event?alt=json&key=%replace%',
};

const activate = () => {
  setInterval(() => {
    const random = (Math.random() * 1000).toString();
    const el = document.getElementById('requests');
    const url = settings.url.replace('%replace%', random);

    try {
      fetch(url);
      const requests = parseInt(el.innerHTML);
      el.innerText = requests + 1;
    } catch (err) {}
  }, settings.delay);
};
