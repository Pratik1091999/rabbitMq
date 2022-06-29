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
        let message = "This is message for reciver 123456789";
        Channel.assertQueue(queueName,{
            durable:false
        });
        Channel.sendToQueue(queueName,Buffer.from(message));
        console.log(`Message: ${message}`)
        setTimeout(()=>{
            connection.close();
        },1000)

    })
})