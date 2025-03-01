# Personal Portfolio Website

## Overview
This is a personal portfolio website designed to showcase my technical skill set, projects, and professional experience. The website serves as a digital resume, allowing visitors to explore my work, skills, and contact information. It is built with a modern tech stack, ensuring responsiveness, accessibility, and performance. This space is often times used as a testing ground for using different technologies or how one might integrate.


## Dependencies
1. NVM + NPM
1. Contentful CLI (Not required, but useful)

## Configuration

### Step 1. Create an account and a space on Contentful
First, [create an account on Contentful](https://www.contentful.com/sign-up/). You should sign-up with your professional or corporate email address (it helps during account management).

After creating an account, reach out to the current development team and request access to the contentful account.


### Step 2. Create your local environment
Clone this repo locally to your machine. An assumption is made that you know to setup NPM via NVM. Once the repository is cloned locally, run the following: 

``` bash
npm install
```

If any errors occur, report it with as many details as possible to https://github.com/aliendev/Michael-Youngblood_com/issues


### Step 3. Set up environment variables

The easiest way to ensure you have all the variables you need to run locally, is to ask the current development team to share their .env file. We utilize tools such as onetimesecret.com or keybase.io to share these types of details, knowing it will safely be deleted after the first use of the link.

If getting a copy is not possible for whatever reason, you can get the current environment variables from the server host, currently Vercel. If this is your route, copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```


### Step 6. Run Next.js in development mode

```bash
npm install
npm run dev

```

The site should be up and running on [http://localhost:3000](http://localhost:3000)!
