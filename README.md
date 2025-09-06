# Ruff 🐾 – Campus Safety Companion

Ruff is a campus safety application designed to protect students through friend accompaniment, AI support, blockchain-secured safety logs, and a smart SOS system.
Built by Team Pelajar-Pelajar.

## What Problem We Solve
•	Many students and staff feel unsafe when walking alone, especially at night.
•	Sometimes they want a companion, sometimes they just need someone checking on them.
•	And in a real emergency, they need to quickly send their exact location to trusted people.
•	On top of that, stress and fear can get overwhelming — so we provide an AI companion to keep users calm, cared for, or entertained.


## What Our App Does 

### Start a journey <br>
User must first start a journey and enter a “room.” <br>
The room acts as a session where friends or guardians can monitor the journey in real-time. <br>
Once the journey has started, other features like AI Companion and SOS button become available. <br>

### Post Status for Company <br>
Users can create a status whenever they want a companion to walk home with them.  <br>
They can also control who is able to view the post, and the system will only display their coarse location for privacy.  <br>
Other users can then browse the in "status" to see these posts in real time. <br>

### AI Companion (3 Modes) <br>
If a user is still alone, they can choose to be accompanied by our AI Buddy. <br>
Our AI Buddy comes with useful skills such as calming scripts, campus safety tips, and helpful reminders which offers **three** supportive modes.  <br>
In Silent Mode 🎵, the AI stays mostly quiet, giving short affirmations and playing soothing background music.  <br>
In Chatty Mode 💬, it engages with cheerful conversation, fun facts, and friendly banter to keep the user company.  <br>
In Caring Mode 🤗, the AI provides gentle reassurance, emotional support, and calming tips to help users feel safe and at ease. <br>

### SOS Button <br>
With a single tap, users can activate the emergency SOS button whenever they feel unsafe.  <br>
Once triggered, the app instantly records their exact GPS location and a precise timestamp. <br> 
At the same time, the backend calculates the safest and fastest route to a nearby secure place, such as a guardhouse or operating stores.  <br>
Guardians and campus security are immediately notified with the live location and route details, allowing them to respond quickly and effectively. <br>

### Safety Check Timer <br>
A safety check is included that asks users to tap their phone within one minute to confirm they are okay.  <br>
This quick action reassures both the system and their guardians that the user is safe and alert.  <br>
If no response is detected, the SOS button is automatically triggered. <br>

### SOS History Timeline <br>
Users can access a history section that displays all of their past SOS activations in a clear timeline format and the place with details address for safety audits. <br>

### Offline Safety Guidance
If the user has no internet connection, the app will display the nearest guardhouse address and their destination address using pre-downloaded data.

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
