CC-15 Online Event Registration System (Full Stack MERN) — Complete Steps
1. Launch EC2 Instance
Open AWS EC2
Launch Ubuntu instance
Create/select key pair
Launch instance
2. Configure Security Group

Go to:

EC2 → Security Groups → Edit inbound rules

Add:

Type	Port
SSH	22
Custom TCP	3000
Custom TCP	5000
Custom TCP	5173

Source for all:

0.0.0.0/0

Save rules.

3. Connect to EC2

Click:

Connect → EC2 Instance Connect → Connect
4. Install Node.js

Run:

sudo apt update
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

Check version:

node -v
npm -v
5. Install Git
sudo apt install git -y
6. Install MongoDB
sudo apt install mongodb -y
sudo systemctl start mongodb
sudo systemctl enable mongodb

Check:

sudo systemctl status mongodb
7. Clone GitHub Repository
git clone YOUR_GITHUB_LINK

Example:

git clone https://github.com/username/register.git

Go inside project:

cd register

Check folders:

ls

You will see:

backend
frontend
8. Run Backend

Go to backend:

cd backend

Install packages:

npm install

Run backend:

node server.js

You should see:

Server running on port 5000
MongoDB Connected

KEEP THIS TERMINAL RUNNING.

9. Open New Terminal Tab

Again connect EC2 instance.

Go to frontend:

cd register/frontend

Install packages:

npm install
10. Change API URL

Go to src folder:

cd src

Open file:

nano App.jsx

OR

nano App.js

Find:

http://localhost:5000

Replace with:

http://YOUR_PUBLIC_IP:5000

Example:

http://34.228.82.242:5000

Save:

CTRL + O
Enter
CTRL + X
11. Start Frontend

Go back:

cd ..

Run frontend:

npm run dev -- --host

You will see:

VITE ready

and port like:

5173
12. Open Website

Open browser:

http://YOUR_PUBLIC_IP:5173

Example:

http://34.228.82.242:5173

Your Event Registration website will open ✅

Final Running Commands
Backend Terminal
cd register/backend
node server.js
Frontend Terminal
cd register/frontend
npm run dev -- --host
Viva Questions Answers
Why backend and frontend use different ports?

Frontend and backend are separate services:

Frontend → React/Vite UI
Backend → Node/Express API

So they run on different ports.

Example:

Service	Port
Frontend	5173
Backend	5000
Why use --host?

It allows EC2 public IP access from browser.

Without it:

localhost only

works.



https://github.com/Kadambari0305
