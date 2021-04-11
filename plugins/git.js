let handler = async m => m.reply(`
 *GIT DE ESTE BOT*
subot
LEONEL DE MERRY❤ 

MY GIT:

MERRY DE LEONEL❤
😴                                       
`.trim()) 
handler.help = ['git']
handler.tags = ['info']
handler.command = /^git$/i

module.exports = handler

