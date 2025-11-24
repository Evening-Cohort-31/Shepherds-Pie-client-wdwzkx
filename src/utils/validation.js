// validation helper function for email
export const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
};

// validation helper function for phone number
export const isValidPhone = (phone) => {
    return /^[0-9+\-() ]{7,20}$/.test(phone);
};

// validation helper function for non-empty strings
export const isNotEmptyString = (value) => {
    return value.trim().length > 0;
};

// validation helper function for dates (DD/MM/YYYY) format
export const isValidDate = (dateString) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
    if (!regex.test(dateString)) return false;

    const parts = dateString.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are zero-based in JS Date
    const year = parseInt(parts[2], 10);

    const date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
};