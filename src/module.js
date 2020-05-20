console.log('Module')

async function start() {
  return await Promise.resolve('async work')
}

start().then(console.log)
