const { createServer } = require('http')
const { parse } = require('url')
const { readFileSync } = require('fs')
const { join } = require('path')

const nextPort = process.env.PORT || 3000

createServer((req, res) => {
  const { pathname } = parse(req.url)

  if (pathname.startsWith('/_next') || pathname === '/index.html' || pathname === '/') {
    return
  }

  const html = readFileSync(join(__dirname, 'public', 'index.html'), 'utf-8')
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(html)
}).listen(nextPort + 1, () => {
  console.log(`Proxy running on http://localhost:${nextPort + 1}`)
})
