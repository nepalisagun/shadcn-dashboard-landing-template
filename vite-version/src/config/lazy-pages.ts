import { lazy } from 'react'

// Route-level code splitting: every page loads on demand
export const Landing = lazy(() => import('@/app/landing/page'))
export const Dashboard = lazy(() => import('@/app/dashboard/page'))
export const Dashboard2 = lazy(() => import('@/app/dashboard-2/page'))
export const Mail = lazy(() => import('@/app/mail/page'))
export const Tasks = lazy(() => import('@/app/tasks/page'))
export const Chat = lazy(() => import('@/app/chat/page'))
export const Calendar = lazy(() => import('@/app/calendar/page'))
export const Users = lazy(() => import('@/app/users/page'))
export const FAQs = lazy(() => import('@/app/faqs/page'))
export const Pricing = lazy(() => import('@/app/pricing/page'))

// Auth pages
export const SignIn = lazy(() => import('@/app/auth/sign-in/page'))
export const SignIn2 = lazy(() => import('@/app/auth/sign-in-2/page'))
export const SignIn3 = lazy(() => import('@/app/auth/sign-in-3/page'))
export const SignUp = lazy(() => import('@/app/auth/sign-up/page'))
export const SignUp2 = lazy(() => import('@/app/auth/sign-up-2/page'))
export const SignUp3 = lazy(() => import('@/app/auth/sign-up-3/page'))
export const ForgotPassword = lazy(() => import('@/app/auth/forgot-password/page'))
export const ForgotPassword2 = lazy(() => import('@/app/auth/forgot-password-2/page'))
export const ForgotPassword3 = lazy(() => import('@/app/auth/forgot-password-3/page'))

// Error pages
export const Unauthorized = lazy(() => import('@/app/errors/unauthorized/page'))
export const Forbidden = lazy(() => import('@/app/errors/forbidden/page'))
export const NotFound = lazy(() => import('@/app/errors/not-found/page'))
export const InternalServerError = lazy(() => import('@/app/errors/internal-server-error/page'))
export const UnderMaintenance = lazy(() => import('@/app/errors/under-maintenance/page'))

// Settings pages
export const UserSettings = lazy(() => import('@/app/settings/user/page'))
export const AccountSettings = lazy(() => import('@/app/settings/account/page'))
export const BillingSettings = lazy(() => import('@/app/settings/billing/page'))
export const AppearanceSettings = lazy(() => import('@/app/settings/appearance/page'))
export const NotificationSettings = lazy(() => import('@/app/settings/notifications/page'))
export const ConnectionSettings = lazy(() => import('@/app/settings/connections/page'))
