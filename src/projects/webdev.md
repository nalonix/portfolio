---
banner: '/webdev/media/images/webdev-banner.png'
title: Web Development
description: my web development projects
date: '2024-01-28'
tags:
  - NEXT
  - SVELTEKIT
  - CSS
  - WEB
  - NODEJS
  - JS/TS
published: true
order: 1
---

<script>
  import VideoPlayer from '../lib/components/VideoPlayer.svelte'
  import Link from '../lib/components/Link.svelte'
  import Tags from '../lib/components/Tags.svelte'
</script>

## Web Apps ❤️

<hr />

### **Grade Report**

<Tags tags={[
"SvelteKit", "Tailwind CSS", "NodeJS", "MongoDB", "Lucia Auth",
"UploadThing", "Google SMTP", "TypeScript", "Vite", "ChartJS"
]} />

#### Overview

The **Grade Report System** is a comprehensive web application designed to streamline grade management for educational institutions. It provides a secure, minimalist, and easy-to-navigate environment tailored for **admins** and **instructors**, while ensuring students can access their grades conveniently. The system is built with scalability, security, and usability in mind, featuring advanced functionalities like **student ID verification**, **instructor invitations via email**, and a **notification system**.

#### Key Features

The **Grade Report System** is a secure, minimalist platform for managing and delivering grades. Key features include:

1. **Grade Management**: Admins and instructors upload, manage, and publish grades; students view them in a clean interface.
2. **Student ID Verification**: Students upload IDs via **UploadThing**; admins verify and approve IDs.
3. **Instructor Invitations**: Admins invite instructors via **Google SMTP** emails with secure OTP passwords.
4. **Notification System**: Real-time alerts for grade updates, ID verification, and report publications.
5. **Admin Dashboard**:
   - Invite instructors.
   - Create/manage courses and control visibility.
   - Approve/restrict student access.
   - Publish/unpublish grade reports.
6. **Secure Design**: Separate from main student records, ensuring data security and compliance.

#### Demo Video

<VideoPlayer src={'https://youtu.be/TljF3iwWyJA'} title={'Second Project Video'} />

<Link name="Live Site" href="http://grade-report.vercel.app/" />

<hr />

### **Spotlight**

<Tags tags={[
"Next.js", "Tailwind CSS", "MongoDB", "Stripe", "Clerk",
"UploadThing", "TypeScript", "Radix UI", "Chapa", "React Hook Form"
]} />

#### Overview

The **Spotlight Portfolio Platform** is a dynamic web application that allows users to create personalized portfolio pages accessible via a unique link. Designed for professionals, creators, and developers, it enables users to showcase their projects, tell their story using customizable content blocks, and integrate advanced features like **online payments**, **file uploads**, and **custom themes**.

#### Key Features

The **Link-in-Bio Portfolio Platform** is a versatile and user-friendly tool for building professional portfolios. Key features include:

1. **Customizable Portfolio Pages**: Users create a unique link (e.g., `spotlight.et/username`) and customize their portfolio with various content blocks.
2. **Content Blocks**:
   - **Challenge vs Solution**: Highlight project challenges and solutions.
   - **Highlights**: Showcase key achievements or features.
   - **Media Embeds**: Add videos, image galleries, and social media embeds.
   - **File Uploads/Embeds**: Upload resumes, project files, or other documents.
3. **Customizable Themes**: Users can personalize their portfolio’s look and feel with custom themes.
4. **Subscription Payments**: Integrated **Stripe** and **Chapa** for online payments and subscription plans.
5. **Complete User Profiles**: Add **social links**, **skills**, and **resume uploads** to build a comprehensive professional profile.
6. **Secure Authentication**: **Clerk** for secure user sign-up and login.
7. **File Management**: **UploadThing** for handling file uploads and media storage.

<Link name="Live Site" href="https://spotlight-et.vercel.app/" />

<hr />

### **Etuber LMS**

<Tags tags={[
"Next.js", "Tailwind CSS", "MongoDB", "Lucia Auth", "UploadThing",
"TypeScript", "Radix UI", "DND Kit", "Resend", "React Hook Form"
]} />

#### Overview

The **Etuber LMS** is a modern Learning Management System (LMS) designed to provide a seamless and interactive learning experience. Built with scalability and usability in mind, it offers features like **course management**, **drag-and-drop content organization**, **video streaming**, and **secure authentication**. The platform is tailored for educators and learners, ensuring a smooth and engaging educational journey.

#### Key Features

The **Etuber LMS** is a robust and user-friendly platform for managing and delivering educational content. Key features include:

1. **Course Management**: Educators can create, organize, and publish courses with ease.
2. **Drag-and-Drop Content Organization**: Use **DND Kit** for intuitive course content arrangement.
3. **Video Streaming**: Integrated **Vidstack** and **Plyr** for high-quality video playback.
4. **Secure Authentication**: **Lucia Auth** for secure user sign-up and login.
5. **File Management**: **UploadThing** for handling files.
6. **Free and Secure Video Hosting**: video hosted on Youtube video protected url for fast and free content hosting.
7. **Analytics**: **Loglib Tracker** for monitoring user engagement and course performance.
8. **Referral Marketing System**: Users can **earn money by referring friends**.

<Link name="Live Site" href="http://etubers.org/" />

<hr />

### **HuleChereta**

<Tags tags={[
"Next.js", "Tailwind CSS", "MongoDB", "Lucia Auth", "UploadThing",
"TypeScript", "i18next", "Google APIs", "React Markdown", "DaisyUI"
]} />

#### Overview

The **Chereta Auction Platform** is a specialized Ethiopian auction platform tailored for the real estate market. It features **multilanguage support** (Amharic and English) and is designed to handle large volumes of data, including user registrations and downloadable files. Built to meet the needs of a traditional company, it includes custom solutions like Excel-based user registration and organized file management. Although the service is currently discontinued, the platform showcases innovative solutions to unique challenges.

#### Key Features

The **Chereta Auction Platform** is a robust and user-friendly platform for managing auctions and real estate listings. Key features include:

1. **Multilanguage Support**: Integrated **i18next** for seamless Amharic and English language support.
2. **Custom User Registration**: Built a custom registration form to save user data directly to **Excel files**, as requested by the client.
3. **File Management**: Organized and presented large volumes of downloadable files without compromising aesthetics.
4. **Real Estate Listings**: Displayed property details with **React Markdown** for rich text formatting.
5. **Secure Authentication**: **Lucia Auth** for secure user sign-up and login.
6. **Google APIs**: Integrated Google services for additional functionality.
7. **Responsive Design**: Used **Tailwind CSS** and **DaisyUI** for a clean, responsive, and visually appealing interface.
8. **Deployment**: Successfully deployed on a **barebones VPS**, showcasing adaptability to client infrastructure needs.

#### Challenges and Solutions

**Excel-Based Registration**

- **Challenge**: The client required user registrations to be saved directly to Excel files, which is unconventional for web applications.
- **Solution**: Built a custom registration form that writes data to Excel files using **formidable** and **xlsx**.

**File Organization**:

- **Challenge**: Managing and presenting a large volume of downloadable files without degrading the site’s aesthetics.
- **Solution**: Implemented a structured file management system with **UploadThing** and designed a clean UI for file presentation.

**Multilanguage Support**:

- **Challenge**: Ensuring seamless language switching between Amharic and English.
- **Solution**: Integrated **i18next** and **next-i18n-router** for efficient multilanguage support.

**Deployment on VPS**:

- **Challenge**: Deploying the application on a barebones VPS, which required manual setup and configuration.
- **Solution**: Successfully deployed the platform, demonstrating adaptability to client infrastructure requirements.

Although the original site is no longer live, a reference version is available on **Vercel** for review. This project highlights my ability to tackle unique challenges and deliver tailored solutions for traditional businesses.

<Link name="Live Site" href="https://hule-chereta.vercel.app/" />

<hr />

### **PraxiBox**

<Tags tags={[
"SvelteKit", "Tailwind CSS", "TypeScript","SHADCN SVELTE"
]} />

This was a passion project I built a while ago. It was meant to be a practice question bank for college students. I would still like to get back to it and build out the whole system. Here is the components I built for it.

<Link name="Live Site" href="https://praxibox-playground.vercel.app/" />

<br />
<br />

## Static Sites

<hr />

### **Topk Portfolio Template**

<Tags tags={[
"HTML", "CSS", "JS"
]} />

This was my build out of a twitter trending ui design of a portfolio template. It has a minimalist design and is responsive. I used some neat tricks to make the interactions work with out any javascript.

<Link name="Live Site" href="https://unique-brioche-bc44d6.netlify.app/" /> |
<Link name="GitHub" href="https://github.com/nalonix/topk/tree/master" />

<hr />

### **Boston University Brochure**

<Tags tags={[
"HTML", "CSS", "JS"
]} />

Vanilla JS, HTML, and CSS build out of a Boston University brochure design.

<Link name="Live Site" href="https://sage-parfait-c71a0b.netlify.app/" /> | 
<Link name="GitHub" href="https://github.com/nalonix/bu" />

<hr />

### **Sushi Restaurant Website**

<Tags tags={[0
"HTML", "CSS", "JS"
]} />

Sushi restaurant website built with HTML, CSS, and JS.

<Link name="Live Site" href="https://sushi-mane.vercel.app/" /> | 
<Link name="GitHub" href="https://github.com/nalonix/SushiMane" />

<hr />
