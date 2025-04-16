# Personal Portfolio Website

Welcome to the Personal Portfolio Website repository! This project is a cutting-edge, developer-focused portfolio designed to showcase the best of modern web development. Crafted to reflect the multifaceted journey of a programmer, it delivers an exceptional user experience, leverages blazing performance optimizations, and features a clean, intuitive UI.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Configuration](#configuration)
- [Getting Started](#getting-started)
- [Performance and Deployment](#performance-and-deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

This repository contains the codebase for a personal portfolio website, showcasing a programmer’s journey—projects, skills, and achievements. Built with [Qwik](https://qwik.builder.io/) and TypeScript, the website is structured for modularity and reusability. The entire content is driven by an external `info.yml` file, allowing any developer to easily customize and deploy their own portfolio.

---

## Features

- **High Performance:** Developed using Qwik to ensure minimal loading times and rapid interactivity.
- **Responsive Design:** Optimized for all device sizes with a focus on exceptional UI experience.
- **Data-Driven Architecture:** All dynamic content is managed via a single `info.yml` file.
- **Scalable and Modular:** Built with modern development practices that ease future enhancements.
- **AWS CDN Deployment:** Ensures global content delivery with optimal load times and high availability.

---

## Technology Stack

- **Framework:** [Qwik](https://qwik.builder.io/)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Data Management:** YAML configuration through `info.yml`
- **Deployment:** AWS Content Delivery Network (CDN)

---

## Configuration

The website's content and structure are dynamically generated using the `info.yml` file. This modular approach means that developers can adapt this portfolio to fit their personal narrative without altering the underlying codebase.

---

## Performance and Deployment

This project emphasizes exceptional performance and efficient content delivery:

- **Optimized for Speed:**  
  Qwik’s innovative architecture allows for fine-grained lazy loading and rapid initial rendering.

- **Global Delivery:**  
  Deployment over AWS CDN means content is served from edge locations worldwide, reducing latency.

- **Modern Build Practices:**  
  Utilizes code-splitting, minification, and tree shaking, ensuring that only necessary code is delivered to the client.

For deployment, follow your AWS CDN deployment process to ensure that build artifacts are optimized and globally accessible.

## Getting Started

### Prerequisites

- **Node.js** (version 14 or above)
- **npm** or **bun** package manager

### Installation

1. **Clone the Repository**
  ```
  git clone https://github.com/yourusername/portfolio-website.git
  cd portfolio-website
  ```

2. **Install Dependencies**
  ```
  npm install
  ```

3. **Configure Your Data**
  ```
  Update the info.yml file with your personal and project information.
  ```

4. **Run Locally**
  ```
  bun dev
  ```

Visit http://localhost:3000 in your browser to view your live site.

## Static Site Generator (Node.js)

```shell
bun build.server
```
