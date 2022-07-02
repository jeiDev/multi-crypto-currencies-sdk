export function rand(){
    return Math.random().toString(36).substring(2);
};

export function generateRandomToken() {
    return `${rand()}${rand()}`;
};
