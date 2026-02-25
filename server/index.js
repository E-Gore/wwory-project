import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server działa!');
});

// Endpoint tworzący sesję płatności
app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body; // np. [{ name: 'Produkt', price: 2000, quantity: 1 }]

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'pln',
          product_data: { name: item.name },
          unit_amount: item.price, // cena w groszach, np. 2000 = 20zł
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint sprawdzający status płatności
app.get('/verify-payment', async (req, res) => {
  const { session_id } = req.query;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    res.json({ status: session.payment_status }); // 'paid' | 'unpaid'
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server na porcie 3000');
});
