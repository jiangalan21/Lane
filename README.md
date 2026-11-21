<p align="center">
  <img src="public/logo.png" alt="Lane logo" width="128" />
</p>

<h1 align="center">Lane</h1>

<p align="center">
  <em>Start strolling.</em><br />
  A private diary that finds you in the moment, so you can find the moment again later.
</p>

---

## Why Lane

Most apps that ask you to capture your life are really asking you to perform it for someone else. Lane is built for an audience of one.

It exists to help you notice the moments that matter as they happen, and to bring them back to you, in detail, long after they've passed. Lane never asks you to step out of your life to document it. It asks for just enough, at just the right time.

## How it works

**A gentle nudge, at an unexpected time.**
Once a day, at a moment you can't predict, Lane sends a quiet prompt to write an entry. There's no streak to protect and no feed to keep up with. It's simply a reminder to look up and notice where you are.

**Capture without leaving the moment.**
An entry takes seconds: a title, how you're feeling, a photo or a short video, and answers to a couple of guided prompts. Lane collects enough detail to bring a memory back to life without pulling you out of it.

**A library of your own story.**
Every entry lands in a personal, chronological library of your days. It's searchable, organized and private, a running record of your journey that reads like a diary rather than a timeline.

**Reflection, on its own schedule.**
Lane brings past entries back to you when you aren't expecting them, so the small moments get a second life.

## Principles

- **Private by default.** There are no followers, likes or public profiles. Your entries are yours alone.
- **Present over performative.** Lane is designed to give you time back, not take it.
- **Detail worth revisiting.** Each memory keeps enough texture (mood, media and your own words) to be worth reliving.

## Architecture

Lane is designed as a serverless mobile app on AWS:

| Layer | Service |
| --- | --- |
| App | React + Vite, installable on your phone as a progressive web app |
| Sign-in | Amazon Cognito |
| API | API Gateway (HTTP API) and AWS Lambda, in TypeScript |
| Entries | Amazon DynamoDB |
| Photos and video | Amazon S3, uploaded directly from the phone with presigned URLs and served through CloudFront |
| Spontaneous prompts | Amazon EventBridge Scheduler and Lambda, delivered as push notifications |
| Infrastructure | AWS CDK |

**Status:** the front end is complete; the AWS backend is in active development.

## Running locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Design

The original interface was designed in [Figma](https://www.figma.com/design/vJoWfvnUXpCelAd9O0x0EA/Lane). Third-party component credits are listed in [ATTRIBUTIONS.md](ATTRIBUTIONS.md).
