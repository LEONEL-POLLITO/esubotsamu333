let handler = async m => m.reply(`
 *GIT DE ESTE BOT*
subot
Tu mama es zorra y cobra
MY GIT:

Hijo de puta
😴                                       
`.trim()) 
handler.help = ['git']
handler.tags = ['info']
handler.command = /^git$/i

module.exports = handler

