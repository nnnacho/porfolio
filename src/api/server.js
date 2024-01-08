import express from 'express';
import { sendMail } from '../Js/Resend.js';

const app = express();
const port = 3000;

app.post('/api/sendmail', async (req, res) => {
    try {
      await sendMail(req.body.name, req.body.subjet, req.body.mail, req.body.message);
      res.status(200).send('Email enviado correctamente');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al enviar el email');
    }
  });
  
  app.listen(3000, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
  });