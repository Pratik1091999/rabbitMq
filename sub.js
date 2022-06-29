const { connect } = require('amqplib');
const amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', (err, connection) => {
    if (err) {
        throw err;
    }
    connection.createChannel((err, Channel) => {
        if (err) {
            throw err;
        }
        let queueName = "abcd";
        Channel.assertQueue(queueName,{
            durable:false
        });
        Channel.consume(queueName,(msg)=>{
            console.log(`recive: ${msg.content.toString()}`);
        })
    })
})