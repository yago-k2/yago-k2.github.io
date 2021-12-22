console.log("inside SW 13.15")
//this is a nop serviceworker
//self.addEventListener("fetch",evt=>fetch(evt.request))


self.addEventListener("fetch",(evt)=>{
  console.log("got fetch event")
  evt.respondWith(caches.match(evt.request)).then(d=>{
      console.log("right from cache!")
      if(d) return d;
      console.log("error in cache")
      fetch(evt.request)
    }
    
  )
  .catch(()=>{
    console.log("not in cache")
    fetch(evt.request)
  })
})
