export function saveToken(token) {
    localStorage.setItem('jwtToken', token);
}

export function getToken() {
    return localStorage.getItem('jwtToken');
}

export function logout() {
    localStorage.removeItem('jwtToken');
}