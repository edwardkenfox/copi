chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  let url = tabs[0].url;
  let title = tabs[0].title;

  title = title.replace('[', '\\[').replace(']', '\\]')

  const str = `[${title}](${url})`

  chrome.runtime.sendMessage({
    text: str
  });

  window.close()
});
