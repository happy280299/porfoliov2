import { Navigate, useRoutes } from "react-router-dom";
// config
import Mainlayout from "src/layout/main/Mainlayout";
import HomePage from "src/pages/home/HomePage";
import AboutPage from "src/pages/about/AboutPage";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // {
    //   path: 'auth',
    //   children: [
    //     {
    //       path: 'login',
    //       element: (
    //         <GuestGuard>
    //           <LoginPage />
    //         </GuestGuard>
    //       ),
    //     },
    //     {
    //       path: 'register',
    //       element: (
    //         <GuestGuard>
    //           <RegisterPage />
    //         </GuestGuard>
    //       ),
    //     },
    //     { path: 'login-unprotected', element: <LoginPage /> },
    //     { path: 'register-unprotected', element: <RegisterPage /> },
    //     {
    //       element: <CompactLayout />,
    //       children: [
    //         { path: 'reset-password', element: <ResetPasswordPage /> },
    //         { path: 'new-password', element: <NewPasswordPage /> },
    //         { path: 'verify', element: <VerifyCodePage /> },
    //       ],
    //     },
    //   ],
    // },

    // // Dashboard
    // {
    //   path: 'dashboard',
    //   element: (
    //     <AuthGuard>
    //       <DashboardLayout />
    //     </AuthGuard>
    //   ),
    //   children: [
    //     { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
    //     { path: 'app', element: <GeneralAppPage /> },
    //     { path: 'ecommerce', element: <GeneralEcommercePage /> },
    //     { path: 'analytics', element: <GeneralAnalyticsPage /> },
    //     { path: 'banking', element: <GeneralBankingPage /> },
    //     { path: 'booking', element: <GeneralBookingPage /> },
    //     { path: 'file', element: <GeneralFilePage /> },
    //     {
    //       path: 'e-commerce',
    //       children: [
    //         { element: <Navigate to="/dashboard/e-commerce/shop" replace />, index: true },
    //         { path: 'shop', element: <EcommerceShopPage /> },
    //         { path: 'product/:name', element: <EcommerceProductDetailsPage /> },
    //         { path: 'list', element: <EcommerceProductListPage /> },
    //         { path: 'product/new', element: <EcommerceProductCreatePage /> },
    //         { path: 'product/:name/edit', element: <EcommerceProductEditPage /> },
    //         { path: 'checkout', element: <EcommerceCheckoutPage /> },
    //       ],
    //     },
    //     {
    //       path: 'user',
    //       children: [
    //         { element: <Navigate to="/dashboard/user/profile" replace />, index: true },
    //         { path: 'profile', element: <UserProfilePage /> },
    //         { path: 'cards', element: <UserCardsPage /> },
    //         { path: 'list', element: <UserListPage /> },
    //         { path: 'new', element: <UserCreatePage /> },
    //         { path: ':name/edit', element: <UserEditPage /> },
    //         { path: 'account', element: <UserAccountPage /> },
    //       ],
    //     },
    //     {
    //       path: 'invoice',
    //       children: [
    //         { element: <Navigate to="/dashboard/invoice/list" replace />, index: true },
    //         { path: 'list', element: <InvoiceListPage /> },
    //         { path: ':id', element: <InvoiceDetailsPage /> },
    //         { path: ':id/edit', element: <InvoiceEditPage /> },
    //         { path: 'new', element: <InvoiceCreatePage /> },
    //       ],
    //     },
    //     {
    //       path: 'blog',
    //       children: [
    //         { element: <Navigate to="/dashboard/blog/posts" replace />, index: true },
    //         { path: 'posts', element: <BlogPostsPage /> },
    //         { path: 'post/:title', element: <BlogPostPage /> },
    //         { path: 'new', element: <BlogNewPostPage /> },
    //       ],
    //     },
    //     { path: 'files-manager', element: <FileManagerPage /> },
    //     {
    //       path: 'mail',
    //       children: [
    //         { element: <Navigate to="/dashboard/mail/all" replace />, index: true },
    //         { path: 'label/:customLabel', element: <MailPage /> },
    //         { path: 'label/:customLabel/:mailId', element: <MailPage /> },
    //         { path: ':systemLabel', element: <MailPage /> },
    //         { path: ':systemLabel/:mailId', element: <MailPage /> },
    //       ],
    //     },
    //     {
    //       path: 'chat',
    //       children: [
    //         { element: <ChatPage />, index: true },
    //         { path: 'new', element: <ChatPage /> },
    //         { path: ':conversationKey', element: <ChatPage /> },
    //       ],
    //     },
    //     { path: 'calendar', element: <CalendarPage /> },
    //     { path: 'kanban', element: <KanbanPage /> },
    //     { path: 'permission-denied', element: <PermissionDeniedPage /> },
    //     { path: 'blank', element: <BlankPage /> },
    //   ],
    // },

    // Main Routes
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: "about-us", element: <AboutPage /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
