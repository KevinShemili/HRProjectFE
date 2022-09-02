export interface PasswordChangeDTO {
  userId: string;
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
