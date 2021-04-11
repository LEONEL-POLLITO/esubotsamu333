let handler = function (m) {
  // this.sendContact(m.chat, '51996897568', 'Nurutomo', m)
  this.sendContact(m.chat, '51996897568', '👑MERRY👑', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
