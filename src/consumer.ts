import connection from "./connection";

class Consumer {
  constructor(private readonly queue: string) {}
  
  async consume() {
    const channel = await connection.then(conn => conn.createChannel());

    channel.assertQueue(this.queue).then(() => {
      return channel.consume(this.queue, (message) => {
        if(message !== null) {
          console.log(message.content.toString());
          channel.ack(message);
        }
      })
    })
  }
}

export default Consumer;