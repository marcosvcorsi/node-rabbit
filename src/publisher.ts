import connection from "./connection";

class Publisher {
  constructor(private readonly queue: string) {}
  
  async send(message: string) {
    const channel = await connection.then(conn => conn.createChannel());

    channel.assertQueue(this.queue).then(() => {
      return channel.sendToQueue(this.queue, Buffer.from(message));
    })
  }
}

export default Publisher;