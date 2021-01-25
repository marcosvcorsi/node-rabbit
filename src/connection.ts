import amqp from 'amqplib';

const connection = amqp.connect('amqp://localhost');

export default connection;