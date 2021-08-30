# purr.app | Tinder for cats

This project was made with the help of [The Cat API](https://thecatapi.com/).

## How the application works.

After entering the application, it fetches cat category's list as well as images for each cat's category. After they are fetched it stores them in global state and renders `CatCategoryCard` component that have the name of category as well as image of it for all the avilable categories.

After clicking on the desired category, it then with the help of `id` of the category stored in global state, fetches 10 images for the selected category. We are then sent to another page `/cats` and `CatImageCard` component is rendered with the first image of the fetched images list. It also contains `ActionButtons` component that have all the avilable actions for us. We can either pet, not pet or skip the cat and the container renders photos of different cats there till there is no more left.

After we choose the action for the last cat, we are sent to yet another page `/stats` that contains the info of what we did to the 10 cats. It renders `StatsComponent` along with data that was being stored the whole time about our actions. It also have 2 buttons from `Button` component, which allows us to either restart on the same category or start over with a new category.

If we choose the same category all the details of the cat as well as our actions (pet, not pet, skip) are reset and it renders newly fetched images from the API. If we choose new category, we are then sent to the home page with everything reset expect cat category list and they images from the global state.

## Getting started with the application.

To get started with the application, you can follow these commands by opening a terminal in your home screen or the location of your desire:

```sh
git clone https://github.com/BinayT/purr-app/
cd purr-app
yarn
yarn start
```

or

```sh
git clone https://github.com/BinayT/purr-app/
cd purr-app
npm i
npm start
```

or

```sh
https://binayt.github.io/purr-app/
```

Following these commands will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Screens

There are in total 3 screens. One being HomeScreen, another CatScreen and last being StatsScreen, with their respective components in it.

## Components

There are in total 6 components as well as 3 subcomponents. Below are the list of them.

ActionButton > ActionIcon\
ButtonComponent > Button\
CatCategoryCard\
CatImageCard\
Navbar\
StatsComponent > StatsBox

## CSS

Each Screen, components & subcomponents have their own `styles.css` file and `BEM` pattern is being used.

## Redux

Global application state managment library Redux is used in this project as well. Below are the list of them and what they contain.

`catCategories` - Stores the avilable cat categories. Contains:
- loading - boolean
- catCategoriesList - array
- error - object

`catCategoryImage` - Stores the image for respective cat categories. Contains:
- loading - boolean
- catCategoryImageList - array
- error - object

`catImages` - Stores the images for user chosen cat category. Contains:
- loading - boolean
- catImagesList - array

`selectedCategory` - Stores the id and name of the selected category. Contains:
- categoryID - number
- categoryName - string

`userStats` - Stores user's choices. Contains:
- dontPet - number
- skip - number
- pet - number

## 3rd Party Libraries

- axios - To make HTTP requests
- gh-pages - To public this react app to Github to get a link to share.
- react-redux - To use redux with react.
- react-loader-spinner - Spinner component while the app fetches data.
- react-router-dom - For react routing.
- redux - For using redux.
- redux-devtools-extension - To see the redux state on the browser
- redux-thunk - To write action creators that return a function instead of an action.
