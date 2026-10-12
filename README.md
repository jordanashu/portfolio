# ASHU.DEV — Premium 3D Interactive Portfolio Website

An interactive, responsive 3D portfolio website for **Ashutosh Kumar Singh** — AI Educator, AI Developer, and Technology Enthusiast. Built with **React 19**, **Vite**, **Three.js**, **React Three Fiber**, **Drei**, **GSAP**, and **Tailwind CSS**.

---

## 🚀 Live Preview & Execution

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/) to view the portfolio live.

---

## 🏛️ Sections Overview (Requested 6-Section Architecture)

1. **Hero — Intro**
   - Interactive full-screen 3D **Holographic AI Core** with rotating concentric icosahedrons, quantum rings, and floating neural node particles.
   - Interactive mouse parallax rig reacting smoothly to pointer position.
   - Live status badges: *Google Certified Educator*, *Availability Indicator*, *Verified SMPS School Coordinator*.
   - Editorial typography: `"Building the Future with AI & Code."`
   - Key impact metrics grid (3+ Years Experience, 100+ Students Taught, 30+ Educators Trained, 10+ Student AI Projects).

2. **Experience & Education**
   - Vertical timeline with glowing progress nodes.
   - Current role at **SMPS School Chandausi** (AI Teacher & ERP Coordinator).
   - Internships at **Code Brew Innovation** (Web3 & React) and **Hoping Minds**.
   - Degrees: **MCA** from Chandigarh University (7.9 GPA) & **BCA** from Bareilly College.
   - Complete Undergraduate Coursework breakdown.

3. **Projects Showcase**
   - **Persona AI Chatbot** (Python, OpenAI GPT-4o-mini, Prompt Engineering).
   - **Tanishkaips.com** (Live school web application, 40% traffic increase).
   - **RAG Knowledge Assistant** (Document vectorization & hallucination-free retrieval).
   - **Interactive AI & Coding Lab** (Teachable Machine, Python, Scratch).
   - **Web3 Decentralized Application** (Smart contract front-end).
   - Interactive category filtering, modal architecture view, GitHub and live demo links.

4. **Skills — Technology Ecosystem**
   - Categorized into:
     - *AI & Generative AI* (Prompt Engineering, RAG, AI Agents, ML, Computer Vision, Gemini/ChatGPT)
     - *Frontend & Web Development* (React.js, JavaScript, Tailwind CSS, HTML5/CSS3, Redux, Git)
     - *Programming & Backend* (Python, C++, SQL, REST APIs)
     - *Educational Tech & Creative Tools* (Edunext ERP, Canva, Google Colab, Scratch, Three.js)
   - Interactive skill inspector banner showcasing proficiency percentages and descriptions.

5. **Certifications & Accreditations**
   - Tabbed view distinguishing **Educator Certifications** from **Technical Certifications**.
   - Verified credentials including:
     - Google: *Gemini Certified Educator (Active)*
     - CBSE: *AI Aware Certification*, *Computational Thinking & AI*, *Critical and Creative Thinking*, *SAFAL*, *Cyber Safety & Security*
     - NPTEL / IIT: *Data Analytics with Python (12-week course)*
     - NIELIT: *DOEACC 'O' Level (1 year)*
     - Great Learning: *Digital Marketing Certification*
     - Mahattattva Academy: *Canva Education: Code & Magic Activities*

6. **Contact Us**
   - Direct contact coordinates:
     - Email: `ashutosh91528@hotmail.com` (one-click copy with toast feedback)
     - Phone: `+91 7017615918` (one-click copy)
     - Location: Chandausi / Bareilly / NCR, India
   - Interactive dispatch form with client validation and celebratory confetti trigger.
   - Social links to LinkedIn and GitHub.

---

## 🛠️ How to Customize Personal Details

All content is cleanly decoupled from presentation logic in:
`src/data/portfolioData.js`

- **Update Email/Phone/Socials:** Modify `personalData` in `src/data/portfolioData.js`.
- **Add or Edit Projects:** Modify the `projectsData` array in `src/data/portfolioData.js`.
- **Add or Update Certifications:** Update `certificationsData` in `src/data/portfolioData.js`.
