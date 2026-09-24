import type { CaseStudy } from "@/types";

export const realEstateCaseStudy: CaseStudy = {
    slug: "real-estate",
    title: "Real Estate MERN App",
    tagline: "Property Listings, Containerized and Deployed on AWS",
    description:
        "A full stack real estate platform where users create accounts, list properties with photos, and browse listings, built with the MERN stack and containerized for deployment on AWS EC2.",
    techStack: [
        "React",
        "Vite",
        "Redux Toolkit",
        "React Router",
        "Tailwind CSS",
        "Swiper.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Supabase Storage",
        "Docker",
        "AWS EC2",
        "Nginx",
    ],
    liveUrl: "",
    githubUrl: "",
    overview:
        "This platform lets users create an account, list a property with up to six photos, and browse other listings through a slider-driven interface. Authentication runs on JWT stored in HTTP-only cookies, and every write to a listing is tied back to the authenticated user rather than trusting anything the client sends. Beyond the application itself, this project doubled as a DevOps exercise, containerizing the frontend and backend with Docker and deploying the result to a real AWS EC2 instance instead of a managed platform like Vercel.",
    highlights: [
        {
            title: "Listings with image uploads through Supabase",
            description:
                "Creating a listing supports up to six images, uploaded to Supabase Storage rather than stored directly in the app's own database. Only the resulting public URLs get saved to MongoDB, and a Swiper-powered slider handles browsing through them on the listing page.",
            image: "/images/case-studies/real-estate/listing-detail.webp",
        },
        {
            title: "Ownership enforced server side, not client side",
            description:
                "Every listing is tied to a userRef field, but that value is never read from what the client submits. It's derived from the authenticated JWT on the server, so there's no way to submit a listing under someone else's account by tampering with a request body.",
            image: "/images/case-studies/real-estate/create-listing.webp",
        },
        {
            title: "Containerized and deployed on a real EC2 instance",
            description:
                "Rather than deploying to a managed platform, the app is packaged into Docker containers and served from an AWS EC2 instance behind Nginx, which is a deliberately more hands on deployment path than most portfolio projects take.",
            image: "/images/case-studies/real-estate/deployment-proof.webp",
        },
    ],
    features: [
        {
            title: "JWT authentication",
            description:
                "Registration and login backed by JWT tokens stored in secure, HTTP-only cookies.",
        },
        {
            title: "Protected listing routes",
            description:
                "Creating, updating, and deleting a listing all require an authenticated session tied to that listing's owner.",
        },
        {
            title: "Multi-image listings",
            description:
                "Up to six images per listing, uploaded to Supabase Storage with client-side type and size validation.",
        },
        {
            title: "Image slider",
            description:
                "Listing photos browse through a Swiper-powered slider rather than a static gallery grid.",
        },
        {
            title: "Profile management",
            description:
                "Users can update their profile details, change their profile picture, or delete their account entirely.",
        },
        {
            title: "Containerized deployment",
            description:
                "Frontend and backend both run in Docker containers, deployed to an AWS EC2 instance rather than a managed hosting platform.",
        },
    ],
    stats: [
        { label: "Max images / listing", value: "6" },
        { label: "User roles", value: "1" },
        { label: "Storage", value: "Supabase" },
        { label: "Auth", value: "JWT" },
    ],
    diagrams: [
        {
            title: "System Architecture",
            kind: "architecture",
            caption:
                "The React frontend talks to an Express API split into auth, listing, and user modules, with MongoDB for data and Supabase handling image storage separately.",
            mermaid: `graph TD
  Client["User (Buyer / Renter)"]
  FE["Frontend (React + Vite + Redux Toolkit)"]
  BE["Backend API (Express.js)"]

  subgraph BackendModules [Backend Modules]
    Auth["Authentication (JWT)"]
    Listings["Listing Management"]
    Users["User Profile"]
  end

  DB["MongoDB + Mongoose"]
  Storage["Supabase Storage (Images)"]

  Client --> FE
  FE --> BE
  BE --> Auth & Listings & Users
  Auth --> DB
  Listings --> DB
  Listings --> Storage
  Users --> DB
  Users --> Storage`,
        },
        {
            title: "Database Design",
            kind: "erd",
            caption:
                "Two collections, users and listings, connected through a userRef field on each listing. Field names here are a reasonable guess based on the README's feature list, edit freely once you confirm the actual schema.",
            mermaid: `erDiagram
    users {
        string _id PK
        string username
        string email
        string password
        string avatar
        datetime createdAt
        datetime updatedAt
    }
    listings {
        string _id PK
        string name
        string description
        string address
        number regularPrice
        number discountPrice
        number bathrooms
        number bedrooms
        boolean furnished
        boolean parking
        string type
        boolean offer
        array imageURLs
        string userRef FK
        datetime createdAt
        datetime updatedAt
    }

    users ||--o{ listings : "creates"`,
        },
        {
            title: "User Flow",
            kind: "sequence",
            caption:
                "Registration and login issue a JWT cookie, then creating a listing uploads images to Supabase first and only stores the resulting URLs, with userRef pulled from the token rather than the request.",
            mermaid: `sequenceDiagram
    participant User
    participant Frontend
    participant AuthController
    participant ListingController
    participant Database
    participant Supabase

    User->>Frontend: Register account
    Frontend->>AuthController: POST /api/auth/signup
    AuthController->>Database: User.create()
    AuthController-->>Frontend: Account created

    User->>Frontend: Login
    Frontend->>AuthController: POST /api/auth/signin
    AuthController->>Database: User.findOne({email})
    AuthController-->>Frontend: JWT set as HTTP-only cookie

    User->>Frontend: Create listing, upload images
    Frontend->>Supabase: Upload up to 6 images
    Supabase-->>Frontend: Public image URLs
    Frontend->>ListingController: POST /api/listing/create
    ListingController->>Database: Listing.create({userRef from JWT})
    ListingController-->>Frontend: Listing created

    User->>Frontend: Browse listings
    Frontend->>ListingController: GET /api/listing/get
    ListingController->>Database: Listing.find()
    ListingController-->>Frontend: Listings list`,
        },
        {
            title: "Deployment Architecture",
            kind: "deployment",
            caption:
                "Placeholder based on what you described in chat, not the README. Nginx routes traffic from the EC2 instance to the frontend and backend containers, which reach MongoDB Atlas and Supabase externally. Confirm or correct this once you share your actual Docker and EC2 setup.",
            mermaid: `graph TD
  Visitor["Visitor Browser"]

  subgraph EC2["AWS EC2 Instance"]
    Nginx["Nginx Reverse Proxy"]
    FEContainer["Docker: Frontend (React build)"]
    BEContainer["Docker: Backend (Express API)"]
  end

  Mongo["MongoDB Atlas"]
  Supabase["Supabase Storage"]

  Visitor --> Nginx
  Nginx --> FEContainer
  Nginx --> BEContainer
  BEContainer --> Mongo
  BEContainer --> Supabase`,
        },
    ],
    challenges: [
        {
            challenge:
                "A client could potentially spoof the listing owner by sending an arbitrary userRef value in the request body.",
            solution:
                "userRef is derived from the authenticated JWT on the server instead of ever being trusted from what the frontend submits.",
        },
    ],
    bestPractices: [
        {
            category: "Authentication & security",
            points: [
                "JWT stored in HTTP-only cookies, never exposed to client-side JavaScript",
                "Protected routes enforced through a verifyToken middleware on the backend",
                "userRef derived from the token, never trusted from client input",
            ],
        },
        {
            category: "Media handling",
            points: [
                "Images uploaded to Supabase Storage, only public URLs saved in MongoDB",
                "Client-side validation on image type and size before upload",
                "Up to six images per listing, browsed through a Swiper slider",
            ],
        },
        {
            category: "Deployment & DevOps",
            points: [
                "Frontend and backend containerized separately with Docker",
                "Deployed to a real AWS EC2 instance rather than a managed platform",
                "Nginx configured as the entry point in front of both containers",
            ],
        },
        {
            category: "What's next",
            points: [
                "Favorites and saved listings",
                "Admin dashboard",
                "Google Maps integration",
                "Messaging between users",
            ],
        },
    ],
};