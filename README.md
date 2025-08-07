# Simple Next.js Application

A modern Next.js application built with TypeScript, featuring authentication, API routes, dynamic routing, and external API integration.

## 🚀 Features

### Core Technologies

- **Next.js 15.4.5** - React framework with App Router
- **React 19.1.0** - Latest React version
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Modern utility-first CSS framework
- **NextAuth.js** - Complete authentication solution

### Application Features

#### 🔐 Authentication System

- **Multiple OAuth Providers**: Google, GitHub, LinkedIn
- **Credentials Provider**: Email/password authentication
- **Secure Route Handling**: `/api/auth/[...nextauth]`

#### 🌐 API Routes

- **Backend API**: Custom API endpoint at `/backend`
  - GET endpoint returning JSON response
  - POST endpoint accepting and returning JSON data
- **RESTful Architecture**: Proper HTTP methods implementation

#### 📄 Dynamic Pages

- **Home Page**: Simple landing page (`/`)
- **User Pages**:
  - Basic user page (`/user`)
  - Advanced user page with API integration (`/user/v1`)
- **Blog System**: Dynamic blog posts (`/blog/[blogid]`)
  - Fetches data from JSONPlaceholder API
  - Dynamic routing with parameters

#### 🎨 UI/UX Features

- **Responsive Design**: Tailwind CSS styling
- **Modern Typography**: Geist font family (Sans & Mono)
- **Interactive Components**: Styled buttons and layouts
- **Loading States**: Async data fetching with proper handling

## 📁 Project Structure

```
simple-next/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.js          # NextAuth configuration
│   ├── backend/
│   │   └── route.js                  # Custom API endpoints
│   ├── blog/
│   │   └── [blogid]/
│   │       └── page.tsx              # Dynamic blog pages
│   ├── user/
│   │   ├── page.tsx                  # User page
│   │   └── v1/
│   │       └── page.tsx              # Advanced user page with API calls
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout component
│   └── page.tsx                      # Home page
├── package.json                      # Dependencies and scripts
├── next.config.ts                    # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
└── tailwind.config.js               # Tailwind CSS configuration
```

## 🛠️ Technical Implementation

### API Integration

- **Axios HTTP Client**: Used for making API requests
- **External API**: Integration with JSONPlaceholder for blog content
- **Internal API**: Custom backend routes for data handling

### Authentication Providers

```javascript
// Configured providers:
- Credentials (Email/Password)
- Google OAuth
- GitHub OAuth
- LinkedIn OAuth
```

### Data Flow Example

The `/user/v1` page demonstrates full-stack data flow:

1. Client makes POST request to `/backend`
2. Server processes request and returns data
3. Client renders response with Tailwind styling

### Styling Architecture

- **Tailwind CSS 4**: Latest version with modern features
- **Custom CSS Variables**: Geist font integration
- **Responsive Design**: Mobile-first approach
- **Component Styling**: Utility classes for rapid development

## 🚦 Getting Started

### Prerequisites

- Node.js (Latest LTS version)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd simple-next
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file with your authentication provider credentials:

   ```env
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GITHUB_ID=your_github_id
   GITHUB_SECRET=your_github_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔗 API Endpoints

### Authentication

- `GET/POST /api/auth/[...nextauth]` - NextAuth.js authentication endpoints

### Custom Backend

- `GET /backend` - Returns welcome message
- `POST /backend` - Accepts JSON data and returns it

### Pages

- `/` - Home page
- `/user` - Basic user page
- `/user/v1` - Advanced user page with API integration
- `/blog/[id]` - Dynamic blog post pages

## 🧪 Testing the Application

### Test API Integration

1. Visit `/user/v1` to see the POST request in action
2. Check browser console for API response logs
3. Observe the styled response display

### Test Dynamic Routing

1. Visit `/blog/1`, `/blog/2`, etc. to see dynamic blog posts
2. Data is fetched from JSONPlaceholder API

### Test Authentication

1. Navigate to authentication endpoints
2. Configure OAuth providers in `.env.local`
3. Test different authentication methods

## 🔧 Configuration Files

- **next.config.ts**: Next.js configuration
- **tsconfig.json**: TypeScript compiler options
- **eslint.config.mjs**: ESLint configuration
- **postcss.config.mjs**: PostCSS configuration for Tailwind
- **package.json**: Project dependencies and scripts

## 📦 Dependencies

### Production Dependencies

- `next`: 15.4.5 - React framework
- `react`: 19.1.0 - React library
- `react-dom`: 19.1.0 - React DOM renderer
- `next-auth`: 4.24.11 - Authentication
- `axios`: 1.11.0 - HTTP client

### Development Dependencies

- `typescript`: Type checking
- `tailwindcss`: Utility-first CSS
- `eslint`: Code linting
- Various type definitions for TypeScript

## 🚀 Deployment

This application is ready for deployment on platforms like:

- Vercel (recommended for Next.js)
- Netlify
- Railway
- Heroku

Remember to configure environment variables in your deployment platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
