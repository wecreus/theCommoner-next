# theCommoner-next
My blog for random stuff that I like.

View it online https://commoner.vercel.app/

This is a version of https://github.com/wecreus/theCommoner but built with Next.js 15rc for better performance, security and accessibility. 

<div align="center">

![LOGO](./app/apple-icon.png) 
</div>

## Implementation

This project was build as Full-Stack Web APP with [Next.js 15 RC](https://nextjs.org/blog/next-15-rc), [React 19 RC](https://react.dev/blog/2024/04/25/react-19), [Redux](https://redux.js.org/), [Firebase](https://firebase.google.com/) for basic database manipulation, [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) (alpha version for React 19 support), [Three-Globe](https://github.com/vasturiano/three-globe) for creating an interactive 3D Globe and [Resend](https://resend.com/) for basic Email functionality. 

And a Candy heart shape by Google [CC-BY](https://creativecommons.org/licenses/by/3.0/).

Built with [Typescript](https://www.typescriptlang.org/) and [SCSS](https://sass-lang.com/).


## Features
* Home page tracks what user is looking at with IntersectionObserver and lazy loads sections based on scroll position.
  * All the database manipulations are done on the server with server actions [actions.ts](/app/lib/actions.ts)
  * Reviews is loading data from Firebase and, if present, parses markdown received and converts them to DOM elements with [DOMPurify.sanitize](https://github.com/cure53/DOMPurify?tab=readme-ov-file#how-do-i-use-it). Also done on the server
  * Globe is based around [Three-Globe](https://github.com/vasturiano/three-globe) with lightning from [Environment](https://github.com/pmndrs/drei?tab=readme-ov-file#environment)
    * Globe points are stored on the server and send to the client, with some points deleted/modified by me to reduce file size.
    * Heart animations are done with [React-Spring](https://github.com/pmndrs/react-spring) and all the camera animations are done with [CameraControls](https://github.com/pmndrs/drei?tab=readme-ov-file#cameracontrols)
    * You can click on the heart or on an empty space in the embedded html to center the camera around Ukraine.
* Header tracks scroll position and collapses when user scrolls down. Also allows for quick scroll to top by clicking on an empty space
* User selected themes are stored in Redux and are loaded/saved to LocalStorage
  * Themes can be easily added or modified in [_variables.scss](/styles/_variables.scss) which are then exports to other scss or typescript files to create user interaction
* Contact page allows for any user to send me an email with Resend library. Validation is done on the server with [Zod](https://zod.dev/) which are displayed on the client with [useActionState()](https://react.dev/reference/react/useActionState) hook

## Usage

Basic usage as with any Next.js application

```bash
pnpm install   
pnpm run dev    # live website will be served locally at http://localhost:3000/
```
Alternatively you can use [Turbopack](https://turbo.build/pack) but it is unstable. Some styles that are imported directly from external libraries will not load with Turbopack.

```bash  
pnpm run dev:turbo
```