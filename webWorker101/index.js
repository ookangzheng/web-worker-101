const worker = new Worker('worker.js')

worker.addEventListener('message', ({ data }) => {
  if (data.action == 'count2') {
    alert(
      `From web worker: We're done without blocking the UI time: ${data.time}`
    )
    console.log(
      `From web worker: We're done without blocking the UI time: ${data.time}`
    )
  }
})
const now = performance.now()
worker.postMessage({ type: 'cmd', action: 'count2' })

document.getElementById('app').innerHTML = `
<h1>Hello Web worker 101</h1>
<h3> Time taken is ${performance.now() - now}
`
