
 export const BASE_URL =
    "https://citisolve-smarter-complaint-resolution.onrender.com/api";

const callAPI = async (endpoint, options = {}) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            credentials: "include",   // important for Render
            ...options,
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(data.message || "Request failed");
        }

        return data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};

export const authAPI = {
    register: (userData) =>
        callAPI("auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }),

    login: (credentials) =>
        callAPI("auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        }),
};
