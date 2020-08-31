const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")

let prefix = config.prefix;

function presence (){
  client.user.setPresence({
      status:'online',
      activity: {
          name: '_Help ',
          type: 'PLAYING'
      }
  })
  
} 
client.on("ready", () => {
    console.log("Capo estoy Listo Para Ser Virgo");
    presence();
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith(prefix + "ping")) {
     message.channel.send("pong!");
   }
 
 });

 client.on("message", (message) => {
  if(message.content.startsWith(prefix + "Donate")) {
    message.channel.send("Hola Quirees Si Quieres Donar Para Mejorar El Servidor metiendo bots premium dona aqui \n\npaypal.me/mamberroi1");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + "Youtube")) {
    message.channel.send("Hola Si Quieres Apoyarme suscribiendote al canal de youtube de mi dueño.\n\nhttps://www.youtube.com/channel/UC83Dl6q6XgQ3uvRM-0IuI-A?view_as=subscriber");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + "Twich")) {
    message.channel.send("Hola Si Quieres Apoyar Ami Dueño siguiendolo en twich este es el link \n\nhttps://www.twitch.tv/mamberroixde");
  }

});


client.on("message", (message) => {
  if(message.content.startsWith(prefix + "Help")) {
    message.channel.send("Hola Hay una sección de comandos de apoyo por ahora los comandos son  \n\nApoya a mi Creador en youtube con el comando _Youtube \n\nApoya ami Creador Siguiendolo en twich con _Twich \n\nApoya ami creador Donandole en su paypal con _Donate");
  }

});

 client.login(config.token);