browser.browserAction.onClicked.addListener(handleClick);

function handleClick(){

  function bustCache(tabs){
    let activeURL = new URL(tabs[0].url.split('?')[0]);
    let randomNum = Math.floor(Math.random() * 9999) + 1;
    let newURL =  `${activeURL}?hsCacheBuster=${randomNum}`

    function onUpdated(tab){
      console.log(`Updated tab: ${tab.id}`);
    }

    function onError(error){
      console.log(`Error: ${error}`);
    }

    const updating = browser.tabs.update({url: newURL});
    updating.then(onUpdated, onError);
  }
  let querying = browser.tabs.query({active: true});
  querying.then(bustCache) 
}