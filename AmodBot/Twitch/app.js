const irc = require("tmi.js");

const options = {
    options: {
        debug: true
    },
    connection: {
		cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "AModBot",
        password: "oauth:"
    },
    channels: ["#z_to_the_z"]
};

const client = new irc.client(options);
// Connect the client to the server..
client.connect();

client.on("connected", (address, port) => {
	client.action('z_to_the_z', 'Hello, AModBot is now connected');
});

client.on("chat", function (channel, user, message, self)  {

	if (self) return;
	console.log(user)
	console.log("message: " + message) 
	let sender = user['display-name'];

	if(user['mod',"vip","sub"] === false) {
		if(message.includes("www.","https://","http://") || message.includes(".com",".fi",".org")){
			client.timeout("z_to_the_z", sender, 30, "link detection system alerted.")
		}
	}	

	if(message === '!amodbot') {
		client.action('z_to_the_z', 'AModBot is moderation bot that under development by Z_to_the_Z');
	}
});
