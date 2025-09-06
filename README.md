# Ruff 🐾 – Campus Safety Companion

Ruff is a campus safety application designed to protect students through **friend accompaniment, AI support, blockchain-secured safety logs, and a smart SOS system**. <br>
Built by Team **Pelajar-Pelajar**.

## What Problem We Solve
•	Many students and staff feel unsafe when walking alone, especially at night. <br> <br>
•	Sometimes they want a companion, sometimes they just need someone checking on them.<br> <br>
•	And in a real emergency, they need to quickly send their exact location to trusted people.<br> <br>
•	On top of that, stress and fear can get overwhelming — so we provide an AI companion to keep users calm, cared for, or entertained.<br> <br>

### Video Presentation Link 


## What Our App Does 

### 1. Onboarding & Journey Start
When users land on our homepage, they will see a **“Start Now”** button. By tapping it, they can choose their destination to begin their journey. At the same time, a **video-call room** will be created to provide real-time accompaniment. <br>
#### Technical Approach
*To detect user's current location, we planned to use a **GPS-based geolocation**, combined with **Flutter's Geolocator package** which will communicates with phone's GPS and Wi-Fi to find user's position.*


### 2. Post Status for Acompanian <br>
Users can **create a status** whenever they want a companion to walk home with them.
They can also control who is able to view the post, and the system will only display their **coarse location** for privacy.
Other users can then browse the in "status" to see these posts in real time. <br>
#### Technical Approach
*When user create a status in our application, the data will be stored in a secure cloud database which is **Firebase**.*


### 3. AI Companion <br>
If user still alone, they can choose to be accompanied by our AI Buddy. <br>
Our AI Buddy comes with useful skills such as calming scripts, campus safety tips, and helpful reminders which offers **three** supportive modes.  <br>
In **Silent Mode 🎵**, the AI stays mostly quiet, giving short affirmations and playing soothing background music.  <br>
In **Chatty Mode 💬**, it engages with cheerful conversation, fun facts, and friendly banter to keep the user company.  <br>
In **Caring Mode 🤗**, the AI provides gentle reassurance, emotional support, and calming tips to help users feel safe and at ease. <br>
#### Technical Approach
*We plan to use **GPT-3.5 free tier** as our AI model, where the prompts we send will be adjusted depending on the mode selected by the user. In addition, we will integrate a **Text-to-Speech (TTS) system** using the **flutter_tts plugin**, which which enables the AI to interact with users using a natural-sounding voice.*


### 4. SOS Button <br>
SOS button will be triggered in condition below: <br>
i) User **presses the big red SOS button**. <br>
ii) User's **connection lost for more than 30 seconds**. <br> 
iii) User not **tap their screen within 1.5 minutes**. The 1-minute countdown is displayed and counted by tapping anywhere in screen. <br>
The next 30 seconds are used to check on user's condition.<br>

#### After SOS button triggered: 
**Nearby operating stores and the guardhouse location** will be displayed. 
Guardians and campus security are immediately **notified with the live location and route details**, allowing them to respond quickly and effectively. <br>

**User can choose to:** <br>
i) **Wait for guard** - The feature is designed for users with injuries or limited mobility. When a guard receives the SOS notification, they will come to assist the user. <br>
ii) **Go to the nearest shop** - Designed for situations where the user feels they are being followed. The app provides a safe route to an open shop. <br> 

**If the user still feels unsafe upon arrival, guards can proceed to their location.<br>
After resolution, the app offers to (a) post a “safe now” status or (b) continue the journey.** 

#### Technical Approach
*For backend, we planned to use **Node.js** as the main framework.*<br>
*i) GuardHouse Locations - will be stored in **PostgreSQL database*** <br>
*ii) The operating stores - will be verified for availability through **Google Places API**.*
*The backend will uses **Firebase Cloud Messaging(FCM)** to push notification to guardian and campus security*

### Offline Safety Guidance
If the user has no internet connection, the app will start a **30-second countdown** to check their safety. <br>
If the user **does not respond or indicates danger**, the app will automatically display the nearest **guardhouse address** along with the **user’s destination** (from pre-downloaded data). <br>
At the same time, an **SMS alert** containing this information will be sent to both the nearest guard and the user’s guardian. <br>
#### Technical Approach
*To store the guardhouse address and user's destination, we planned to use a **local database** such as **SQLite** which is a built-in small database for mobile application to store the data.*<br>
*For SMS alert, we planned to use **telephony package** that available in **Flutter**. Instead of using online servers, it uses the **phone’s SIM card** to send a text directly which is useful for offline condition.*

### Additional Features
Here, the user can choose if they want the functions to be activated. <br>
Motion Detaction - Includes anomaly motion detection, which can identify unusual patterns such as sudden stops or unexpected route deviations. <br>
Safe word - A chosen word or phrase the user can say aloud to prevent the SOS alert from being activated. <br>

## Tech Stack
### Frontend
1. Flutter - For cross-platform which is Android and iOS mobile application.
### Backend
1. Node.js - Main backend framework to handle SOS requests and status posts
### Database
1. PostgreSQL- Stores static safe locations (guardhouses and operating stores).
2. Firebase Firestore - For real-time storage of user posts/status.
3. SQLite (local database) → For storing guardhouse addresses and user’s destination for offline mode.
### Artificial Intelligence / Machine Learning
1. OpenAI GPT-3.5 (Free Tier) - Powers AI Buddy conversations in 3 modes (Silent, Chatty, Caring).
### External APIs
1. Google Places API - To check if nearby stores/clinics are open.
### Communication
1. Firebase Cloud Messaging (FCM) - To send instant SOS notifications to guardians & campus security.
2. Telephony - For sending SMS alerts when there’s no internet.
   
## Conclusion

Ruff is more than just a campus safety app — it is a trusted companion that combines blockchain security, AI-driven emotional support, and real-time emergency response into one platform. By empowering students to stay connected with friends, guardians, and security personnel, Ruff creates a safer and more supportive campus environment.<br><br>

Team Pelajar-Pelajar built this project with the vision of giving every student peace of mind, whether they are walking home with a friend, accompanied by our AI Buddy, or relying on the SOS system in times of need. With Ruff, no one has to feel alone when it matters most.<br>
