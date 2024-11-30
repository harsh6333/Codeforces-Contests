# Codeforces Contests Viewer

This is a React-based web app built with Vite, designed to view and interact with live Codeforces contests. The app provides a user-friendly interface to view ongoing, upcoming, and past contests, along with detailed contest information.

## Features

- **List of Contests**: View all available contests, including their type and phase.
- **Contest Details**: Access detailed information about a specific contest such as its name, start time, duration, and more.
- **Dynamic Filtering**: Filter contests based on phase and type for a more refined view.
- **Pagination**: Efficiently handle large datasets with pagination support.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server for modern web projects.
- **Codeforces API**: Fetches data related to contests.
- **Tailwind CSS**: For styling the app with a utility-first CSS framework.
- **Polaris**: A design system and React component library for consistent UI components.
- **Chart.js**: To visualize contest durations in a bar chart format.

## Installation

### Clone the repository:

```bash
git clone https://github.com/your-username/codeforces-contests-app.git
cd codeforces-contests-app
npm install
npm run dev


/src
  /components
    ContestGraph.js      # Bar chart to visualize contest duration.
    ContestList.js       # List of contests displayed in a card format.
    Header.js            # Header component with the app name.
  /pages
    Home.js              # Main page displaying contest list and graph.
    ContestDetailPage.js # Page displaying detailed information for a specific contest.
  /hooks
    useContest.js        # Custom hook to fetch contest data from the API.
  /assets
    logo.png             # App logo (if available).
  App.js                 # Root component.
  main.js                # Main entry point for the app.
  index.css              # Global styles.
```
