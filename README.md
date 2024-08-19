# Next Suspense

## Purpose of the repo:
The purpose of this repository is to quickly and easily learn how to use the **Suspense** utility from **React** in a **NextJS** environment.

## How it works:
We have two components, each of which displays different data by fetching from an API. The first component (`src/components/Name.tsx`) takes 3 seconds to retrieve the data. The second one (`src/components/Height.tsx`) takes only 1 second.

Both are shown on the homepage (`src/app/page.tsx`), but to avoid the page waiting to render until both data are available, we display a skeleton as a placeholder until each fetch is completed. The skeletons of the first and second components are slightly different to highlight the distinction. The skeletons are defined in the `src/components/Skeleton.jsx` file, and were created with [Create React Content Loader](https://skeletonreact.com/).

We achieve this with the help of **React's Suspense**.

Now, upon loading the page, the content will initially display placeholders instead of the components. After one second, the lower placeholder will be replaced by the component, and two seconds later, the upper one will load, displaying a piece of data called **Name** and another called **Height**.

The code files include detailed explanations of the process through **comments**.

## Crucial points:
- For a Suspense component to work properly, all of its content must rely on a promise.

## Deployment:
To view the app, open this Code SandBox: [https://vq245q-3000.csb.app/](https://vq245q-3000.csb.app/)

or simply clone the repository and run:
```
npm run dev
```
