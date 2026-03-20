# 🏠 Roommate Sync V2 — Setup Guide

## Files in this project:
- index.html      → Login / Sign Up page
- quiz.html       → 4-step lifestyle assessment  
- result.html     → Compatibility score + radar chart + AI insight
- find-roommates.html → Browse & filter profiles, save, AI insight
- profile.html    → Full roommate profile + connect + icebreaker
- chat.html       → Real-time chat with any matched roommate

---

## STEP 1 — Create Firebase Project (FREE)

1. Go to: https://console.firebase.google.com
2. Click "Create a project"
3. Name it: roommate-sync (or anything)
4. Disable Google Analytics (optional)
5. Click "Create project"

---

## STEP 2 — Enable Authentication

1. In Firebase Console → left sidebar → "Authentication"
2. Click "Get started"
3. Click "Email/Password" → Enable → Save
4. Click "Google" → Enable → add your email → Save

---

## STEP 3 — Create Firestore Database

1. Left sidebar → "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a region → Enable
5. Go to "Rules" tab and paste these rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      allow read: if request.auth != null;
      
      match /saved/{profileId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
      
      match /conversations/{convId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
    
    match /chats/{chatId} {
      allow read, write: if request.auth != null;
      
      match /messages/{messageId} {
        allow read, write: if request.auth != null;
      }
    }
  }
}
```

6. Click "Publish"

---

## STEP 4 — Get Your Firebase Config

1. In Firebase Console → gear icon (top left) → "Project settings"
2. Scroll down to "Your apps"
3. Click the "</>" (web) icon
4. Register app with any nickname
5. Copy the firebaseConfig object — it looks like:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

## STEP 5 — Replace Config in ALL HTML Files

Open each file and find the comment:
`// ⚠️ REPLACE WITH YOUR FIREBASE CONFIG`

Replace the placeholder config with YOUR config from Step 4.

Files to update (5 files):
- index.html
- quiz.html  
- result.html
- find-roommates.html
- profile.html
- chat.html

---

## STEP 6 — Deploy to GitHub Pages

1. Create a new GitHub repository (e.g., "roommate-sync-v2")
2. Upload all the HTML files to the repository
3. Go to repository Settings → Pages
4. Source: "Deploy from a branch"
5. Branch: main, folder: / (root)
6. Click Save
7. Your site will be live at: https://yourusername.github.io/roommate-sync-v2/

---

## STEP 7 — Add GitHub Pages URL to Firebase Auth

1. Firebase Console → Authentication → Settings tab
2. Scroll to "Authorized domains"
3. Click "Add domain"
4. Add: yourusername.github.io
5. Save

---

## AI Features Note

The AI features (compatibility insight, icebreaker messages) use the Claude API.
These will work when hosted on GitHub Pages through the Anthropic API.

If AI doesn't work, the app automatically falls back to smart pre-written insights.

---

## Features Summary

✅ Real Email/Password + Google Login
✅ 4-step lifestyle quiz (saved to Firebase)
✅ Compatibility score with animated ring
✅ Radar chart (Chart.js)  
✅ AI compatibility insight (Claude AI)
✅ 9 seed profiles + real user profiles
✅ Filter by budget, sleep, food, cleanliness
✅ Sort by compatibility / name / age
✅ Save profiles (persisted in Firebase)
✅ View full profile with breakdown
✅ AI icebreaker message generator
✅ Real-time chat (Firebase Firestore)
✅ Password reset email
✅ Auto-redirect based on quiz completion

---

## Troubleshooting

**Login not working?**
→ Make sure you replaced the Firebase config in ALL 6 files

**Google login popup blocked?**
→ Allow popups for your domain in the browser

**Chat not sending?**
→ Check Firestore rules are published correctly

**AI insight not generating?**
→ The fallback text will show — AI works when hosted live
