import { ServiceBusClient } from "@azure/service-bus"
import 'dotenv/config'

const claim = {
  claimId: 123,
  area: 100
}

const claimMessage = JSON.stringify(claim)

const client = new ServiceBusClient(process.env.CONNECTION_STRING)

const sender = client.createSender(process.env.CLAIMS_TOPIC)

const message = {
  body: claimMessage,
  contentType: "application/json",
}

await sender.sendMessages(message)

console.log("Message sent")