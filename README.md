

### 🔍 Summary of Requirements

- To build a **4-page website** (Home, About, Gallery, Contact) with:

    - **HTML5, CSS3**, and **JavaScript**
    - **Responsive design** (mobile-friendly via media queries, grid/flexbox)
    - Features like **image galleries**, **form validation**, **interactive modals**, **multi-step forms**, **AJAX with JSON**, **dark/light mode**, **local/session storage**, and more.
    - Encouraged to use modern frameworks like **React/Vue/Angular**

---

## 💡 Imaginary Project: **PawPal - A Pet Adoption & Care Website**

---

### 1. 🌟 Project Title

**PawPal – Adopt. Care. Love.**

---

### 2. 🎯 Mission & Vision

**Mission:**
To connect adorable stray and shelter pets with loving homes while providing accessible resources and tools for pet care and well-being.

**Vision:**
A world where every pet has a family, and every family has the knowledge to care for their furry friend with confidence and love.

---

### 3. 🧬 Brand Story

PawPal was born from the passion of three animal lovers who volunteered in animal shelters and saw a lack of accessible digital tools to simplify pet adoption and post-adoption care. Our aim is to bridge that gap using clean design, modern technology, and a little heart.

---

### 4. 🖼️ Branding Guidelines

|Element|Specification|
|---|---|
|Logo|A paw inside a heart|
|Primary Color|#FF6B6B (Warm Coral)|
|Secondary Color|#4ECDC4 (Mint Green)|
|Font (Primary)|Poppins (Sans-serif, modern, friendly)|
|Font (Secondary)|Roboto (for longer texts, forms)|
|Style|Rounded buttons, minimal UI, white background with soft accents|

---

### 5. 🧩 Website Pages Overview

|Page|Description|
|---|---|
|**Home**|Welcome text, call to action, featured pets, success stories|
|**About**|Mission/vision, team story, shelter partner info|
|**Gallery**|Pet profiles with filter options, modal image previews|
|**Contact**|Multi-step adoption interest form, FAQs, location map|

---

### 6. 💻 Web Application Features

#### ➤ **Responsive Design**

- CSS Grid & Flexbox layouts
- Mobile-first design
- Fluid images and font sizes
- Media queries for phones, tablets, desktops

#### ➤ **Navigation & Layout**

- Sticky top navbar with logo, menu, and dark/light toggle
- Smooth scrolling between sections
- Footer with social links, sitemap, newsletter form

#### ➤ **Gallery Page**

- Pet card grid layout (using CSS Grid)
- Modal image preview with description and adoption status
- Hover animation: image scale + name reveal
- jQuery or library-based image carousel slider for featured pets

#### ➤ **Forms and Validation**

- **Contact/Adoption Form** (Multi-step):
    - Step 1: Personal Details (name, email, phone)
    - Step 2: Home Environment Questions
    - Step 3: Choose preferred pet (dropdown populated via JSON)
- JavaScript form validation (email format, phone pattern, required fields)
- Password strength meter for optional login (if adopted users create an account)
- Real-time feedback with green/red icons

#### ➤ **Dark/Light Mode**

- JavaScript toggle with smooth transition
- Theme preference saved to `localStorage`

#### ➤ **Dynamic Features**

- JSON-powered pet list: gallery content is loaded dynamically using `fetch()`
- AJAX call to simulate blog post loading from a file
- jQuery date picker for scheduling adoption interviews
- Filter pets by age, type, or availability with jQuery

#### ➤ **Other UI Interactions**

- Hover animations on cards and buttons
- CSS-only accordion FAQ section on Contact page
- Drag-and-drop upload for pet profile photo (simulated for demo)

#### ➤ **Mock Login Page (Optional)**

- Simple login form
- On login, stores mock user data in `localStorage` (name, pet preferences)
- Redirects to a mock dashboard showing "My Favorite Pets"

---

### 7. 🧠 Technical Stack Summary

| Technology              | Purpose                                               |
| ----------------------- | ----------------------------------------------------- |
| **HTML5**               | Page structure and semantic layout                    |
| **CSS3**                | Styling, responsive design, animations                |
| **JavaScript**          | Form validation, interactivity, theme toggle          |
| **AJAX + JSON**         | Dynamic pet data loading                              |
| **LocalStorage**        | User preferences (theme, login)                       |
| **Optional React Page** | Mini component: "Adoption Steps" (3-step card layout) |

### However, we will build this version in react.

---

### 8. 📍 Wireframe Overview (To be drawn by students)

Students should include:

- Header with nav links and logo
- Hero section (Home)
- Grid layout for Gallery (filter on top, images in cards)
- Contact form: multi-step with progress bar
- Responsive sidebar for mobile view
- Sticky navbar behavior

---

### 9. 🌐 Hosting & Deployment

- Deploy the project to Vercel or other deployment platform, and present to everybody
- Ensure responsive layout and cross-browser testing (Chrome, Firefox, Safari, Edge)

---

### 10. 🧪 Testing & Optimization

- Use **Google Lighthouse** to test performance and accessibility

- Ensure:
    - Minified CSS/JS
    - Lazy loading of images
    - Alt tags on all images
    - Cross-browser responsive layout
- Validate all HTML and JavaScript with online validators



Now, the content structure for the website looks like this:

## 🏠 Home Page – _Welcome to PawPal_

**Page Objective:** Introduce the brand, create emotional connection, direct visitors to key areas (adopt, donate, volunteer).

---

### 1. **Hero Section**

- **Headline:** “Find Your Furry Best Friend Today”
- **Subheadline:** “Connecting loving pets with loving homes – one paw at a time.”
- **CTA Button(s):** [Adopt Now] [See Available Pets]


### 2. **About PawPal (Brief Intro)**

- Mission statement snippet: “We’re dedicated to rescuing, rehabilitating, and rehoming stray and abandoned pets.”
- CTA: [Learn More About Us]


### 3. **How Adoption Works**

- 3-step visual process:
    - Find a pet
    - Submit an application
    - Bring them home
- CTA: [Start the Process]


### 4. **Success Stories Carousel**

- Short pet stories with before/after photos
- Example content:
    - “Luna was found injured on the streets—today, she’s a therapy dog for children.”
- CTA: [Read More Stories]


### 5. **Volunteer / Donate / Foster CTA Grid**

- Three visually distinct cards:
    - “Become a Volunteer”
    - “Donate to Save Lives”
    - “Foster a Pet”
- CTA under each: [Join Now], [Donate], [Apply to Foster]

---

## 🐾 About Page – _Our Story_

**Page Objective:** Build trust, explain the "why" behind PawPal, and invite users to become part of the community.

---

### 1. **Brand Story**

- Founders’ story (imaginary): “Started by a group of animal lovers during the pandemic who saw the increase in abandoned pets.”

- Year established: 2021

- Mission & vision with emotional tone


### 2. **Our Work**

- Statistics section:

    - Pets rescued

    - Volunteers enrolled

    - Monthly adoptions

    - Partner vets and shelters


### 3. **Our Values**

- Compassion

- Responsibility

- Transparency

- Community Engagement


### 4. **Meet Our Team**

- Name + photo + short bio of 3–4 team members (Founder, Vet, Adoption Coordinator, Volunteer Manager)


### 5. **Our Partners**

- Logos/brands of shelters, pet food companies, vet clinics


---

## 🐶 Gallery Page – _Adoptable Pets_

**Page Objective:** Display pets available for adoption with appealing and clear information.

---

### 1. **Gallery Filters/Sort**

- Filter by: Species (dog/cat/rabbit), Size, Age, Location

- Sort by: Recently Added, Name, Age


### 2. **Pet Cards (Repeatable Content Block)**

- Name: Bella

- Photo

- Basic Info: Age, Breed, Gender

- Personality Tagline: “Energetic cuddle bug”

- CTA Button: [Meet Bella]


### 3. **Hover Modal / Lightbox Content**

- Full-size image carousel

- Detailed info:

    - Medical history

    - Vaccinations

    - Neutered/spayed?

    - Compatible with children/other pets

    - Story of the pet


### 4. **Empty State Message**

- “Looks like there are no matches right now. Try adjusting the filters or check back soon!”


---

## 📞 Contact Page – _Let’s Get in Touch_

**Page Objective:** Offer easy ways for visitors to contact PawPal or take action through forms.

---

### 1. **Contact Information**

- Address, Phone, Email

- Operating Hours

- Embedded Google Map


### 2. **General Inquiry Form**

- Name, Email, Message, Subject

- Dropdown options: Adoption, Volunteering, Donations, Others

- Real-time JS validation


### 3. **Quick CTA Cards**

- Report a lost pet [Form Link]

- Want to visit the shelter? [Schedule Visit]

- Questions about adoption? [Contact Coordinator]


### 4. **Newsletter Signup**

- Brief: “Want updates on available pets and adoption events?”

- Fields: Email, Name

- CTA: [Subscribe]
