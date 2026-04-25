# Deploy to Vercel 🚀

## Step-by-Step Deployment Guide

### Step 1: Push Changes to GitHub

Your changes are ready to be pushed. The serverless functions are now in the `api/` folder.

### Step 2: Deploy to Vercel

1. **Go to [Vercel](https://vercel.com)**

2. **Sign up/Login** with your GitHub account

3. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find and select `GunaNalam/TranslationApp`
   - Click "Import"

4. **Configure Your Project**
   - **Framework Preset**: Leave as detected (should be "Other" or auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: Leave empty or use default
   - **Output Directory**: Leave empty or use default

5. **Add Environment Variable** ⚠️ IMPORTANT
   - Click "Environment Variables"
   - Add:
     - **Name**: `GEMINI_API_KEY`
     - **Value**: `YOUR_GEMINI_API_KEY_HERE`
   - Make sure it's added for all environments (Production, Preview, Development)

6. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for deployment to complete

7. **Get Your URL**
   - Once deployed, you'll get a URL like: `https://translation-app.vercel.app`
   - Click on it to test!

### Step 3: Test the App

1. Open the Vercel URL on your phone
2. Select language
3. Speak or type a message
4. Generate and share!

---

## How Vercel Deployment Works

- **Frontend**: `index.html` is served as a static file
- **Backend**: `api/generate.js` and `api/translate.js` run as serverless functions
- **API Routes**: 
  - `/api/generate` → calls Gemini to generate messages
  - `/api/translate` → calls Gemini to translate

---

## Updating Your App

Every time you push to GitHub, Vercel will automatically redeploy!

```bash
git add .
git commit -m "Update message"
git push
```

Vercel detects the push and redeploys automatically!

---

## Troubleshooting

**Deployment fails?**
- Check if you added the `GEMINI_API_KEY` environment variable
- Make sure it's added to all environments

**API not working?**
- Verify environment variable is set correctly in Vercel dashboard
- Check the deployment logs in Vercel

**Can't access from phone?**
- Make sure you're using the HTTPS Vercel URL
- Try in incognito mode if cached

---

## Cost

✅ **100% FREE** on Vercel's hobby plan!
- Unlimited deployments
- Serverless functions included
- Custom domain support (optional)

---

**Ready to deploy? Push the changes and follow the steps above!**
