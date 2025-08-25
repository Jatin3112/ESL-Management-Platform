# ESL Management Platform

A comprehensive Electronic Shelf Label (ESL) management system built with modern web technologies.

## 🚀 Features

### Authentication System
- **User Registration**: Create new accounts with email verification
- **User Login**: Secure authentication with JWT tokens
- **Protected Routes**: Automatic redirects for unauthenticated users
- **User Management**: Profile information and role-based access

### Dashboard & Management
- **Store Management**: Monitor and manage multiple store locations
- **Product Catalog**: Maintain product information and pricing
- **ESL Tags**: Real-time monitoring of electronic shelf labels
- **Gateway Control**: Manage communication devices
- **Sync Logs**: Track synchronization activities
- **User Administration**: Manage platform users and permissions

### Technical Features
- **Real-time Updates**: Live status monitoring of ESL devices
- **Responsive Design**: Mobile-first approach with modern UI
- **Secure API**: RESTful backend with JWT authentication
- **Database Integration**: MongoDB for scalable data storage

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **React Context** - State management
- **Lucide React** - Beautiful icons

### Backend
- **FastAPI** - Modern Python web framework
- **MongoDB** - NoSQL database
- **JWT** - JSON Web Token authentication
- **bcrypt** - Password hashing
- **Pydantic** - Data validation
- **Motor** - Async MongoDB driver

## 📁 Project Structure

```
ESL-Management-Platform/
├── frontend/                 # Next.js frontend application
│   ├── app/                 # App router pages
│   │   ├── login/          # Login page
│   │   ├── register/       # Registration page
│   │   ├── landing/        # Landing page
│   │   └── layout.tsx      # Root layout
│   ├── components/         # Reusable components
│   ├── contexts/           # React contexts
│   └── dashboard.tsx       # Main dashboard
├── backend/                 # FastAPI backend application
│   ├── app/                # Application modules
│   ├── routes/             # API endpoints
│   ├── models/             # Database models
│   ├── schemas/            # Data validation
│   └── utils/              # Utility functions
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Python 3.8+
- MongoDB (local or cloud instance)

### Option 1: Quick Start with Scripts (Recommended)

#### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. **Windows Users**: Double-click `start_backend.bat`
   **Unix/Linux/Mac Users**: 
   ```bash
   chmod +x start_backend.sh
   ./start_backend.sh
   ```

#### Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. **Windows Users**: Double-click `start_frontend.bat`
   **Unix/Linux/Mac Users**: 
   ```bash
   chmod +x start_frontend.sh
   ./start_frontend.sh
   ```

### Option 2: Manual Setup

#### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create `.env` file with your configuration:
   ```env
   MONGO_URL=mongodb://localhost:27017/esl_management
   JWT_SECRET_KEY=your-secret-key-here
   JWT_ALGORITHM=HS256
   JWT_EXPIRE_MINUTES=60
   ```

5. Start the backend server:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

#### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Option 3: Python Setup Script
```bash
cd backend
python setup.py
```

## 🔐 Authentication Flow

1. **Landing Page**: Unauthenticated users see the platform overview
2. **Registration**: New users can create accounts
3. **Login**: Existing users authenticate with email/password
4. **Dashboard**: Authenticated users access the main application
5. **Protected Routes**: Automatic redirects for unauthorized access

## 📱 User Interface

- **Modern Design**: Clean, professional interface
- **Responsive Layout**: Works on all device sizes
- **Intuitive Navigation**: Easy-to-use sidebar and top navigation
- **Real-time Updates**: Live status indicators and notifications
- **Form Validation**: Client-side and server-side validation
- **Loading States**: Smooth user experience with loading indicators

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt encryption for user passwords
- **Protected Routes**: Server-side route protection
- **Input Validation**: Comprehensive data validation
- **CORS Support**: Configurable cross-origin resource sharing

## 🚧 Development Status

- ✅ Authentication system (login/register)
- ✅ User management and JWT tokens
- ✅ Dashboard with navigation
- ✅ Protected routes and context
- ✅ Modern UI components
- ✅ Quick start scripts
- 🔄 ESL management features (in progress)
- 🔄 Store and product management (planned)
- 🔄 Real-time synchronization (planned)

## 🆘 Troubleshooting

### Backend Issues
- **MongoDB Connection**: Make sure MongoDB is running on localhost:27017
- **Port Conflicts**: Kill processes using port 8000 or change the port
- **Dependencies**: Upgrade pip and reinstall requirements

### Frontend Issues
- **Port Conflicts**: Kill processes using port 3000
- **Build Errors**: Clear Next.js cache and restart
- **Backend Connection**: Ensure backend is running on port 8000

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the GitHub repository.
