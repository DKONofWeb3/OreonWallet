Oreon Wallet – Waitlist System

This project powers the early-access waitlist system for Oreon Wallet, a next-generation everything wallet built for crypto users, creators, and collectors.

It includes a premium-styled frontend waitlist page, a Node.js backend to collect and manage email submissions, and a lightweight admin dashboard to view and export the list.


---

🚀 Features

✅ Clean landing page CTA linking to the waitlist form

✅ Tailored email capture form (for early access)

✅ Responsive, minimal UI using Tailwind CSS

✅ Emails are stored in a local waitlist.json file

✅ Duplicate-checking + timestamp tracking

✅ Admin panel to:

View all waitlisted emails

Export to CSV with one click


🔐 Backend built with Express.js

⚙ Easy to connect to any mailing service (Mailchimp, Resend, etc.)



---

🧱 Tech Stack

Layer	Tools Used

Frontend	HTML, Tailwind CSS, JavaScript
Backend	Node.js, Express.js
Data Storage	JSON file (waitlist.json)
Admin Panel	HTML + Fetch API



---

📂 Project Structure

oreon-waitlist/
├── public/
│   ├── index.html         → Landing page
│   ├── waitlist.html      → Waitlist form UI
│   ├── admin.html         → Admin dashboard
├── waitlist.json          → Stores submitted emails
├── server.js              → Express backend logic
└── README.md


---

⚙ How to Run

1. Clone the repo:



git clone https://github.com/your-username/oreon-waitlist.git
cd oreon-waitlist

2. Install dependencies:



npm install

3. Start the server:



node server.js

4. Access in browser:



Waitlist: http://localhost:3000/waitlist.html

Admin Panel: http://localhost:3000/admin.html



---

📬 Future Plans

[ ] Integrate email confirmation via Nodemailer or Resend

[ ] Store waitlist data in Supabase or MongoDB

[ ] Add admin authentication

[ ] Build full dashboard with charts and filters



---

🙌 Credits

Built by @KonOfWeb3 as part of the Oreon Wallet launch ecosystem.
