const qrcode = require('qrcode-terminal');

const { Client, LocalAuth,MessageMedia } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('message', message => {
	if(message.body === 'Hi') {
		message.reply('Hello This is RAPIS(Rithik\'s Automated Personal Intelligence System) \n1-->About Me\n2--> My skills\nEce-->ECE Time Table\nCie-->Civil Time Table\nFood-->For this weeks Menu');
	}
    else if(message.body === '1') {
		message.reply('This is Matta Rithik Reddy, Presently Studying in Mahindra University in the Branch of ECE.You can see my profile more clearly on https://www.rithikreddy.com.');
	
    }
    else if(message.body==='2'){
        message.reply('1.Java\n2.Web Development\n3.linux Command Line and Networks\n4.Adobe Creative Cloud')
    }
    else if(message.body ==='Ece'){
        client.sendMessage(message.from, MessageMedia.fromFilePath('C:/Users/rithi/Desktop/Whatsapp/ECE.pdf'));
    }
    else if(message.body ==='Cie'){
        client.sendMessage(message.from, MessageMedia.fromFilePath('C:/Users/rithi/Desktop/Whatsapp/Cie.jpg'));
    }
    else if(message.body ==='Food'){
        client.sendMessage(message.from, MessageMedia.fromFilePath('C:/Users/rithi/Desktop/Whatsapp/Menu.pdf'));
    }
    });



client.initialize();
 