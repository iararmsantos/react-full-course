###Deployment Steps

1. Test application
2. Optimization of code - lazy loading concept
3. Build App: script that parse, transform and optimize code
4. Upload App to a server
5. Configure server to ensure app is served securely

_Lazy Loading_: load code only when it's needed

- when application starts every import should be resolved, this delays the loading

- Lazy loading will delay the load of some content until the user goes to where the content lives, like a page

### Deployment

1. Test Code
2. Optimize Code
3. Build app - build a bundle to upload: `npm run build`

- the build folder will be used to deploy the app

4. Upload the code to a server
5. Go to firebase login and start a project
6. Go to build > hosting > Get Started
7. Follow the steps:
8. In the `firebase init step` choose:

- Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys (enter space to select, then enter)
- Use an existing project (select the project you created)
- type "build" to select the folder you want firebase use to deploy
- Configure a single page (Yes? for now)
- Set automatic build or deploy with GitHub? No
- Overwrite the existing build/index.html? No

9. Firebase deploy is the last command, then you will have in the terminal the url to access your page
10. To remove the filebase from the web: `firebase hosting:disable`

`https://react-deployment-demo-9b0a1.web.app/`
