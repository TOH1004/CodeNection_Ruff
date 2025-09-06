# Ruff 🐾 – Campus Safety Companion

Ruff is a campus safety application designed to protect students through friend accompaniment, AI support, blockchain-secured safety logs, and a smart SOS system.
Built by Team Pelajar-Pelajar.

## What Problem We Solve
•	Many students and staff feel unsafe when walking alone, especially at night. <br>
•	Sometimes they want a companion, sometimes they just need someone checking on them.<br>
•	And in a real emergency, they need to quickly send their exact location to trusted people.<br>
•	On top of that, stress and fear can get overwhelming — so we provide an AI companion to keep users calm, cared for, or entertained.<br>

### Video Presentation Link 


## What Our App Does 

### Onboarding & Journey Start <br>
Home screen with mascot guardian (Ruff) and a **“Start Now”** button. <br>
User selects current location and destination to begin a “journey”. <br>
A video-call room created for accompaniment. <br>

### Post Status for Company <br>
Users can **create a status** whenever they want a companion to walk home with them.  <br>
They can also control who is able to view the post, and the system will only display their **coarse location** for privacy.  <br>
Other users can then browse the in "status" to see these posts in real time. <br>

### AI Companion (3 Modes) <br>
If a user is still alone, they can choose to be accompanied by our AI Buddy. <br>
Our AI Buddy comes with useful skills such as calming scripts, campus safety tips, and helpful reminders which offers **three** supportive modes.  <br>
In **Silent Mode 🎵**, the AI stays mostly quiet, giving short affirmations and playing soothing background music.  <br>
In **Chatty Mode 💬**, it engages with cheerful conversation, fun facts, and friendly banter to keep the user company.  <br>
In **Caring Mode 🤗**, the AI provides gentle reassurance, emotional support, and calming tips to help users feel safe and at ease. <br>

### SOS Button <br>
SOS button will be triggered in condition below: <br>
i) User **presses the big red SOS button**. <br>
ii) User's **connection lost for more than 30 seconds**. <br> 
iii) User not **tap their screen within 1.5 minutes**. The 1-minute countdown is displayed and counted by tapping anywhere in screen. <br>
The another 30 seconds is for checking your condition.<br>

#### After SOS button triggered: 
The app instantly **records their exact GPS location and a precise timestamp**. <br> 
At the same time, the backend **calculates the safest and fastest route to a nearby secure place**, such as a guardhouse or operating stores.  <br>
Guardians and campus security are immediately **notified with the live location and route details**, allowing them to respond quickly and effectively. <br>

#### User's response paths: 
i) **Wait for guard** - The feature is designed for users with injuries or limited mobility. When a guard receives the SOS notification, they will come to assist the user. <br>
ii) **Go to the nearest shop** - Designed for situations where the user feels they are being followed. <br>
The app provides a safe route to an open shop. <br>
If the user still feels unsafe upon arrival, guards can proceed to their location.<br>
** After resolution, the app offers to (a) post a “safe now” status or (b) continue the journey ** <br>

### Offline Safety Guidance
If the user has no internet connection, the app will display the nearest guardhouse address and their destination address using pre-downloaded data. <br>

## Technical Parts

### Frontend (Mobile App)
Built with **Flutter** for cross-platform compatibility (Android/iOS). <br>
Provides the user interface for posting, SOS activation, AI chat, and history viewing. <br>

### Backend Server
Built with Node.js and Express.js to handles SOS events, calculates safe routes, manages guardian notifications, and communicates with blockchain. <br>

### Database
Uses MySQL or PostgreSQL to store guard house's address, user's destination, and non-sensitive data.<br>
Provides quick lookup for route to pre-stored safe locations during emergencies.<br>

### Blockchain Layer
Implemented with Ethereum or Polygon.<br>
Automatically creates a unique digital identity for each user.<br>
Stores immutable SOS logs with GPS location and timestamp.<br>
Records full event timelines (activation and deactivation). <br>

### AI Companion
Powered by a Large Language Model (LLM). <br>
Uses Text-to-Speech (TTS) for natural voice interaction. <br>
Provides multiple emotional support modes and additional safety skills.<br>

### APIs for Safety Guidance
Google Places API → Finds safe places (guardhouses, clinics, police posts) and checks if they are open.<br>
Google Directions API → Calculates walking routes, distance, ETA, and safest path to open safe places.<br>

### Notifications System
Uses Firebase Cloud Messaging (FCM) for real-time push notifications.<br>
Integrates with SMS or WhatsApp API to ensure guardians/security are alerted even without the app.<br>

### Offline Event Syncing
Stores SOS events locally when there is no internet.<br>
Automatically syncs them to backend and blockchain once connectivity is restored.<br>

### Safety Timer Mechanism
Detects user inactivity (no tap within 1 minute).<br>
Triggers SOS automatically if the user fails to confirm they are safe.<br>

### Real-time Monitoring Dashboard
Backend provides a dashboard for campus security to track SOS activations, live GPS location, and routes.<br>

## Conclusion

Ruff is more than just a campus safety app — it is a trusted companion that combines blockchain security, AI-driven emotional support, and real-time emergency response into one platform. By empowering students to stay connected with friends, guardians, and security personnel, Ruff creates a safer and more supportive campus environment.<br><br>

Team Pelajar-Pelajar built this project with the vision of giving every student peace of mind, whether they are walking home with a friend, accompanied by our AI Buddy, or relying on the SOS system in times of need. With Ruff, no one has to feel alone when it matters most.<br>
