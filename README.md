# English Message Generator 📝

A simple, mobile-friendly web application that helps users generate formal English messages from their native language (Telugu, Hindi, Tamil, etc.) using voice or text input.

## Features ✨

- 🎤 **Voice Input**: Speak in your native language with high accuracy
- ⌨️ **Text Input**: Type in Telugu, Hindi, Tamil, Kannada, Malayalam, Marathi, Bengali, or Gujarati
- 🤖 **AI-Powered**: Uses Google's Gemini AI to generate formal, well-written English messages
- 🔄 **Translation**: Shows the English message translated back to your language for verification
- 💬 **WhatsApp Sharing**: Instantly share generated messages via WhatsApp
- 📋 **Copy to Clipboard**: Easy one-tap copy functionality
- 🧠 **Context Memory**: Remembers last 5 messages in session for easy edits
- 📱 **Mobile-First**: Designed specifically for mobile phone usage

## Setup Instructions 🚀

### 1. Install Node.js

Make sure you have Node.js installed (version 14 or higher).
Download from: https://nodejs.org/

### 2. Setup the Project

```bash
# Navigate to the project folder
cd english-message-generator

# Install dependencies
npm install
```

### 3. Configure Your API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

5. Open the `.env` file in the project folder
6. Replace `your_api_key_here` with your actual API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

**Note**: The free tier is sufficient for personal use!

### 4. Run the Server

```bash
npm start
```

The server will start on `http://localhost:3000`

### 5. Access on Your Phone

#### Option A: Same WiFi Network (Easiest)
1. Make sure your phone and computer are on the same WiFi network
2. Find your computer's IP address:
   - **Mac**: System Preferences → Network
   - **Windows**: Run `ipconfig` in command prompt
   - **Linux**: Run `hostname -I`
3. On your phone, open browser and go to: `http://YOUR_IP_ADDRESS:3000`
   (e.g., `http://192.168.1.100:3000`)

#### Option B: Deploy to Cloud (For Remote Access)
Deploy to platforms like:
- **Render**: Free tier available
- **Railway**: Easy deployment
- **Heroku**: Free tier available
- **Vercel**: Serverless deployment

### 6. Using the App

1. **Generate Messages**:
   - Select your language
   - Either:
     - Tap "Tap to Speak" and speak your message
     - Or type in the text box
   - Click "Generate English Message"
   - Review the formal English message
   - Check the translation in your language to verify accuracy

3. **Share or Copy**:
   - Click "Copy" to copy the message
   - Click "WhatsApp" to share directly via WhatsApp

4. **Edit or Add More**:
   - The app remembers your last 5 messages
   - Just type/speak additional context and generate again
   - The AI will understand the context and modify accordingly

## Privacy & Security 🔒

- **API Key**: Stored securely in `.env` file on your server (never exposed to browser)
- **Messages**: Not stored anywhere - only kept in memory during the session
- **Backend**: Simple Node.js proxy that keeps your API key secure
- **.gitignore**: Prevents `.env` file from being committed to git

## Supported Languages 🌐

- తెలుగు (Telugu)
- हिन्दी (Hindi)
- தமிழ் (Tamil)
- ಕನ್ನಡ (Kannada)
- മലയാളം (Malayalam)
- मराठी (Marathi)
- বাংলা (Bengali)
- ગુજરાતી (Gujarati)

## Troubleshooting 🔧

**Can't connect from phone?**
- Make sure both devices are on the same WiFi network
- Check if firewall is blocking port 3000
- Try disabling firewall temporarily

**Voice input not working?**
- Make sure you've granted microphone permissions to your browser
- Voice input works best in Chrome on mobile

**Server won't start?**
- Make sure you ran `npm install` first
- Check if port 3000 is already in use
- Verify `.env` file exists with your API key

**API errors?**
- Check if your API key in `.env` is correct
- Verify you have internet connection
- Make sure you haven't exceeded the free tier quota

**Translation not accurate?**
- The translation is for verification only
- The English message is what gets sent

## Technical Details 💻

- **Frontend**: Pure HTML, CSS, and JavaScript (vanilla)
- **Backend**: Node.js + Express
- **Dependencies**: express, dotenv, cors
- **API**: Google Gemini Pro API
- **Deployment**: Easy deployment to any Node.js hosting platform

## Tips for Best Results 💡

1. Speak clearly and naturally when using voice input
2. Be specific about what you want to say
3. Review the translation to ensure accuracy
4. Use the context feature to refine messages
5. Keep messages concise for better results

---

Made with ❤️ for making communication easier
