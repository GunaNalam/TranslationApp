# Quick Start Guide 🚀

## Step 1: Add Your API Key

Open the `.env` file and replace `your_api_key_here` with your actual Gemini API key:

```
GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## Step 2: Start the Server

```bash
npm start
```

You should see:
```
Server running on http://localhost:3000
Open this URL in your phone browser (make sure phone is on same network)
```

## Step 3: Access from Your Phone

### Find Your Computer's IP Address:

**On Mac:**
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

**On Windows (Command Prompt):**
```bash
ipconfig
```
Look for "IPv4 Address"

**On Linux:**
```bash
hostname -I
```

### Open on Phone:

1. Make sure phone is on **same WiFi** as your computer
2. Open browser on phone
3. Go to: `http://YOUR_IP_ADDRESS:3000`
   
   Example: `http://192.168.1.100:3000`

## Step 4: Use the App!

1. Select your language (Telugu, Hindi, Tamil, etc.)
2. Tap 🎤 to speak OR type your message
3. Click "Generate English Message"
4. Review the formal English message
5. Check the translation
6. Click WhatsApp or Copy!

---

## Troubleshooting

**Can't access from phone?**
- Ensure both devices are on the same WiFi
- Try turning off firewall temporarily
- Make sure you're using the correct IP address

**Server won't start?**
- Did you run `npm install` first?
- Is port 3000 already in use?
- Check if `.env` file has your API key

---

## To Stop the Server

Press `Ctrl + C` in the terminal where the server is running.

---

**Need help?** Check the full README.md for detailed instructions!
