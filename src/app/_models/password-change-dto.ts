export interface PasswordChangeDTO {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
  userId: string;
}
