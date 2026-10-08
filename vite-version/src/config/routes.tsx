import { Navigate } from "react-router-dom"

import {
  Landing,
  Dashboard,
  Dashboard2,
  Mail,
  Tasks,
  Chat,
  Calendar,
  Users,
  FAQs,
  Pricing,
  SignIn,
  SignIn2,
  SignIn3,
  SignUp,
  SignUp2,
  SignUp3,
  ForgotPassword,
  ForgotPassword2,
  ForgotPassword3,
  Unauthorized,
  Forbidden,
  NotFound,
  InternalServerError,
  UnderMaintenance,
  UserSettings,
  AccountSettings,
  BillingSettings,
  AppearanceSettings,
  NotificationSettings,
  ConnectionSettings,
} from "@/config/lazy-pages"

export interface RouteConfig {
  path: string
  element: React.ReactNode
  children?: RouteConfig[]
}

export const routes: RouteConfig[] = [
  // Default route - redirect to dashboard
  // Use relative path "dashboard" instead of "/dashboard" for basename compatibility
  {
    path: "/",
    element: <Navigate to="dashboard" replace />,
  },

  // Landing Page
  {
    path: "/landing",
    element: <Landing />,
  },

  // Dashboard Routes
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard-2",
    element: <Dashboard2 />,
  },

  // Application Routes
  {
    path: "/mail",
    element: <Mail />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },

  // Content Pages
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/faqs",
    element: <FAQs />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },

  // Authentication Routes
  {
    path: "/auth/sign-in",
    element: <SignIn />,
  },
  {
    path: "/auth/sign-in-2",
    element: <SignIn2 />,
  },
  {
    path: "/auth/sign-in-3",
    element: <SignIn3 />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUp />,
  },
  {
    path: "/auth/sign-up-2",
    element: <SignUp2 />,
  },
  {
    path: "/auth/sign-up-3",
    element: <SignUp3 />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/auth/forgot-password-2",
    element: <ForgotPassword2 />,
  },
  {
    path: "/auth/forgot-password-3",
    element: <ForgotPassword3 />,
  },

  // Error Pages
  {
    path: "/errors/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "/errors/forbidden",
    element: <Forbidden />,
  },
  {
    path: "/errors/not-found",
    element: <NotFound />,
  },
  {
    path: "/errors/internal-server-error",
    element: <InternalServerError />,
  },
  {
    path: "/errors/under-maintenance",
    element: <UnderMaintenance />,
  },

  // Settings Routes
  {
    path: "/settings/user",
    element: <UserSettings />,
  },
  {
    path: "/settings/account",
    element: <AccountSettings />,
  },
  {
    path: "/settings/billing",
    element: <BillingSettings />,
  },
  {
    path: "/settings/appearance",
    element: <AppearanceSettings />,
  },
  {
    path: "/settings/notifications",
    element: <NotificationSettings />,
  },
  {
    path: "/settings/connections",
    element: <ConnectionSettings />,
  },

  // Catch-all route for 404
  {
    path: "*",
    element: <NotFound />,
  },
]
