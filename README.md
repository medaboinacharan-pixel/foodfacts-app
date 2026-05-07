# FoodFacts - Search Nutrition Info by Food Name

A React + Vite application for searching and exploring nutrition information from the Open Food Facts API.

## Part 2: Multi-Page Routing & Advanced Patterns

This is Part 2 of the FoodFacts project, featuring multi-page navigation, detailed product views, and saved items functionality.

### 🎯 Features

- **Multi-page Navigation**: Browse between Home, Product Details, and Saved Items pages using React Router
- **Search Functionality**: Search for food products using the Open Food Facts API
- **Product Details**: Click on any product to view comprehensive nutrition information
- **Save Products**: Save your favorite products for quick access later
- **Smart Validation**: Real-time form validation with helpful error messages
- **Error Handling**: Graceful handling of network errors and API failures
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### 🏗️ Project Structure

```
src/
├── pages/
│   ├── HomePage.jsx          # Search interface
│   ├── DetailPage.jsx        # Product details & nutrition info
│   └── SavedPage.jsx         # Saved items management
├── hooks/
│   └── useFoodSearch.js      # Custom hook for API calls
├── components/
│   ├── NavBar.jsx            # Navigation with active styling
│   ├── NavBar.css
│   ├── SearchBar.jsx         # Search form with validation
│   ├── FoodCard.jsx          # Product card component
│   ├── FoodList.jsx          # Product grid layout
│   └── ErrorMessage.jsx      # Error display component
├── App.jsx                   # Routing shell & state management
├── App.css                   # Comprehensive styling
└── main.jsx                  # Router wrapper
```

### 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to `http://localhost:5173/`

### 💻 Technologies Used

- **React 19** - UI library
- **Vite 8** - Build tool & dev server
- **React Router v6** - Client-side routing
- **Axios** - HTTP client for API calls
- **Open Food Facts API** - Nutrition data source

### 🎓 Concepts Demonstrated

#### 1. React Router v6
- Dynamic routes with URL parameters (`:barcode`)
- `useParams()` for reading URL data
- `useNavigate()` for programmatic navigation
- `NavLink` for active route styling

#### 2. Custom Hooks
- `useFoodSearch` extracts API logic into reusable hook
- Proper error handling (connectivity vs server errors)
- Automatic JSON parsing with Axios

#### 3. State Management
- `useReducer` for managing saved items
- ADD action with duplicate prevention
- REMOVE action for deletion
- Lifting state to App.jsx for inter-page communication

#### 4. Form Validation
- Required field validation
- Minimum length validation (2+ characters)
- Real-time error feedback
- Validation errors cleared on successful submission

#### 5. useEffect Lifecycle
- Dependency arrays for controlling when effects run
- Cleanup functions to prevent memory leaks
- Component lifecycle: mount → update → unmount

#### 6. Error Handling
- Axios error differentiation (response vs request)
- User-friendly error messages
- Error boundary concepts

### 📱 Component Walkthrough

#### HomePage
- Displays SearchBar for input
- Uses `useFoodSearch` custom hook
- Shows ErrorMessage if API fails
- Renders FoodList when results available
- Navigates to detail page on card click

#### DetailPage
- Reads barcode from URL with `useParams`
- Fetches product details on mount with `useEffect`
- Includes cleanup function to prevent state updates after unmount
- Displays full nutrition information (6+ nutrient values)
- Save/Remove button with dynamic label
- Back button using `navigate(-1)`

#### SavedPage
- Displays products from `saved` state (passed via props)
- Shows empty state when no items saved
- Each item has "View Details" and "Remove" buttons
- Dispatches REMOVE action when item deleted

#### NavBar
- Shows current page indicator with active styling
- Displays badge with count of saved items
- Navigation links to all three pages

### ✨ Key Features Implemented

1. **Form Validation**
   - Empty input check
   - Minimum 2 character requirement
   - Visual error feedback in red

2. **Error Boundaries**
   - Network error handling
   - User-friendly error messages
   - Try-catch in useEffect with cleanup

3. **Loading States**
   - Loading indicator while fetching
   - Initial state messages
   - No-results state

4. **Duplicate Prevention**
   - ADD action checks if product already saved
   - Uses product code as unique identifier

5. **Navigation Without Page Reload**
   - React Router handles all routing
   - State preserved across navigation
   - Browser back button works correctly

### 🧪 Testing the Application

1. **Test Form Validation**:
   - Click search with empty input → See "Please enter a food name"
   - Type single character → See "Search must be at least 2 characters"
   - Type valid food name → Search executes

2. **Test Navigation**:
   - Click "Search" and "Saved Items" links
   - Verify NavBar highlights active page
   - Browser back/forward buttons work

3. **Test Save Functionality**:
   - Search for a product
   - Click product card to view details
   - Click "Save Product" button
   - Navigate to "Saved Items"
   - Verify product appears
   - Click "Remove" and verify it's deleted

### 📊 API Response Structure

The app fetches from Open Food Facts API:

```javascript
// Search endpoint
GET /cgi/search.pl?search_terms=apple&json=1
Response: { products: [...] }

// Detail endpoint  
GET /api/v0/product/{barcode}.json
Response: { product: {..., nutriments: {...}} }
```

### 🎨 Styling Highlights

- Dark navbar with green active state
- Card-based product layout with hover effects
- Responsive grid (auto-columns, gap spacing)
- Color-coded buttons (green=save, red=remove, blue=details)
- Badges for notification counts
- Clean typography and spacing

### ⚙️ Build & Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### 🔄 Git Workflow

This project uses feature branching:
- Main branch: `main`
- Feature branch: `part2/routing-and-async` (or `feature/foodfacts-part1`)

Commits follow conventional format:
```
feat: add major features
fix: bug fixes
style: styling changes
refactor: code restructuring
```

### 🧠 Learning Outcomes

After building this project, you understand:
- How React Router powers multi-page SPAs
- Custom hooks for extracting reusable logic
- useReducer for complex state patterns
- useEffect lifecycle and cleanup functions
- Error handling in async operations
- Form validation patterns
- Component composition and prop passing

### 📚 Next Steps (Part 3)

Part 3 will add:
- Redux Toolkit for global state management
- Material UI for professional styling
- localStorage for data persistence
- Class components for historical context
- Production deployment

### 🤝 Contributing

This is an educational project for learning React patterns.

---

**Built with ❤️ using React + Vite**

