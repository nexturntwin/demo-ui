import { AuthService } from "./auth.service";

export function initAuth(authService: AuthService) {
    return () => authService.initAuth();
}