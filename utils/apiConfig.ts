export const API_BASE_URL = 'http://192.168.1.13:8000';

export const API_DOMAIN = API_BASE_URL + '/api';

export const API_ENDPOINTS = {
  AUTH: {
    Login: API_DOMAIN + '/public/login',
    Register: API_DOMAIN + '/auth/customer/register',
    Logout: API_DOMAIN + '/auth/logout',
    VerifyEmailOtp: API_DOMAIN + '/auth/verify-email-otp',
    ResendOtp: API_DOMAIN + '/auth/resend-otp',
    ForgotPassword: API_DOMAIN + '/auth/forgot-password',
    VerifyPasswordOtp: API_DOMAIN + '/auth/verify-forgot-password-otp',
    ResetPassword: API_DOMAIN + '/auth/reset-password',
  },

  ACCOUNT_MANAGEMENT: {
    GetUserProfileData: API_DOMAIN + '/edit-profile-details',
    UpdatePassword: API_DOMAIN + '/update-password',
    DeleteAccount: API_DOMAIN + '/delete-account',
    UpdateProfile: API_DOMAIN + 'update-profile',
    GetNotifications: API_DOMAIN + '/unread-notifications',
    MarkAllNotificationsAsRead: API_DOMAIN + '/mark-all-read',
  },

  PUBLIC: {
    GetCountries: API_DOMAIN + '/customer/countries',
  },
  QUICK_ACTIONS: {
    GetActionCatagories: API_DOMAIN + '/public/categories', //with dept id parameter
    GetActionSubacategories: API_DOMAIN + '/public/subcategories', //inside query parameter, need dept id and cat id
    GetActionDepartments: API_DOMAIN + '/public/departments',
  },

  CHATS: {
    GetAllChats: API_DOMAIN + '/customer/get-all-chats',
    GetChatDetails: API_DOMAIN + '/customer/get-chat', //with chatid parameter
    SendMessage: API_DOMAIN + '/customer/send-message',
  },

  TRANSACTIONS: {
    GetRecentTransactions: API_DOMAIN + '/transactions/get-recent',
    GetRecentTransactionsItems: API_DOMAIN + '/transactions/get-recent-items',
  },
};
