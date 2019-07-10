addEventListener('message', ({ data }) => {
  let time = performance.now()

  if (data.action == 'count2') {
    let count = 0
    for (let i = 0; i < 200000000; i++) {
      count++
    }
    postMessage({ action: 'count2', status: 'done', time: time })
    console.log('time is:', time)
  }
})
