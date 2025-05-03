# Interactive-Data-Explorer

# Pokémon Explorer

An interactive React application that fetches and displays Pokémon data from the PokeAPI with search and filtering capabilities.

## Features

- **Browse Pokémon**: View the first 150 Pokémon in a responsive grid
- **Search Functionality**: Real-time search by Pokémon name
- **Type Filtering**: Filter Pokémon by their type (Fire, Water, Grass, etc.)
- **Responsive Design**: Works on all device sizes
- **Beautiful UI**: Modern card design with type-specific colors
- **Loading States**: Smooth loading indicators

## Technologies Used

- React (Functional Components with Hooks)
- Axios (API requests)
- CSS3 (Flexbox, Grid, Animations)
- PokeAPI (Data source)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pokemon-explorer.git
   ```
2. Navigate to the project directory:
```bash
   cd  Interactive Data Explorer
   ```
3. Navigate to the project directory:
```bash  
   npm install
   ```
4. Start the development server:
```bash
   npm start
   ```

## Project Structure

src/
├── components/
│   ├── PokemonCard.js
│   ├── SearchBar.js
│   ├── TypeFilter.js
│   ├── Loading.js
│   └── Error.js
├── │── App.css
├── App.js
└── index.js


##API Usage
This project uses the PokeAPI to fetch Pokémon data. Key endpoints used:

https://pokeapi.co/api/v2/pokemon?limit=150 - Get first 150 Pokémon

https://pokeapi.co/api/v2/pokemon/{id} - Get details for individual Pokémon

-------------------------------------------------------------------------------------

Available Scripts
npm start: Runs the app in development mode

npm test: Launches the test runner

npm run build: Builds the app for production

npm run eject: Ejects from Create React App (not recommended)
