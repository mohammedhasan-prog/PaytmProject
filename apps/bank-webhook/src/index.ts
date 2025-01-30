import express from "express";
const app = express();
import { db } from "@repo/db/client";
app.post("/hdfcWebhook", async (req, res) => {
  const paymentIngfo = {
    token: req.body.token,
    userId: req.body.userId,
    amount: req.body.ammount,
  };

  await db.balance.update({
    where: {
      userId: paymentIngfo.userId,
    },
    data: {
      balance: {
        increment: paymentIngfo.amount,
      },
    },
  })
  
  ;

  await db.onRampTransaction.update({
    where: { token: paymentIngfo.token },
    data: {
      status: "success",
    }, 
});

res.status(200).send('Payment Successfull');
});
