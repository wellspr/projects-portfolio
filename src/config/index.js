const origin = "http://localhost:4000";

export const corsConfig = {
    origin: origin,
    allowedHeaders: [
        "Content-Type", 
    ],
    credentials: true,
};

export const appBrandName = () => {
    return "Projects Portfolio"
}

export const githubLink = () => {
    return "https://github.com/wellspr/projects-portfolio";
};