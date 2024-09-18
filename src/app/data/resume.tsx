import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dipak Giri",
  initials: "DG",
  url: "https://dipakgiri12.com.np",
  location: "Kathmandu, Nepal",
  locationLink: "https://www.google.com/maps/place/Kathmandu",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/dipak/first.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "MongoDb",
    "MySQL",
    "GraphQL",
    "Nginx",
    "Git",
    "Github",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dipakgiri.dev@gmail.com",
    tel: "9865506700",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dipaktech",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/dpakgiri",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/dipakgirii",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@dipakgiri@6072",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelancing",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Full stack developer",
      logoUrl: "/atomic.png",
      start: "April- 2024",
      end: "Present",
      description:
        "building scalable full stack applications for different clients",
    },
    {
      company: "NGIT Solutions PVT.LTD",
      badges: [],
      href: "https://np.linkedin.com/company/ngit-solutions",
      location: "Kathmandu,nepal",
      title: "Frontend Developer",
      logoUrl: "/images/logos/ngit.png",
      start: "Dec 2023",
      end: "April 2024",
      description:
        "As a web3-based frontend developer, I have successfully built subscription and sign-in functionalities that currently serve thousands of users. My expertise extends to working on mono-repo projects, where I have developed a comprehensive UI kit and integrated various API endpoints to enhance user experience. Throughout my career, I have demonstrated strong teamwork and coding practices, ensuring that collaborative efforts lead to high-quality outcomes.",
    },
    {
      company: "MSP solution PVT.LTD",
      href: "https://www.mspsolution.com.np/",
      badges: [],
      location: "Kathmandu , nepal",
      title: "Full stack developer",
      logoUrl: "/images/logos/msp.png",
      start: "Jan 2023",
      end: "Mar 2024",
      description:
        "I led the development of an e-commerce platform for a grocery store as part of a dedicated four-member team, significantly enhancing the online sales capabilities of the business. My responsibilities included administering multiple REST APIs for authentication, product management, order processing, and inventory management using Node.js and Express.js. I also built an entire user interface using React.js, ensuring a seamless user experience. Through strategic scaling efforts, the platform successfully accommodates over 2,000 active users. Additionally, I developed a secure login system utilizing JSON Web Tokens (JWT) for robust user authentication and authorization, reinforcing the platform's security measures.",
    },
    {
      company: "Matrix Soft Solution",
      href: "https://www.matrixsoftsolution.com/",
      badges: [],
      location: "kathmandu",
      title: "Frontend Developer",
      logoUrl: "/images/logos/matrixsoft.png",
      start: "May 2022",
      end: "Nov 2022",
      description:
        "I designed and developed engaging frontends for various components of the platform, including the homepage, user profile, user dashboard, admin dashboard, news portal management, and IPO results page. Throughout this process, I encountered challenges in data visualization on the dashboard, which I successfully overcame to ensure a seamless and intuitive user experience. My focus on user-centric design allowed me to create interfaces that not only captivate users but also facilitate easy navigation and interaction with the platform's features.",
    },
  ],
  education: [
    {
      school: "College of applied business",
      href: "https://www.cab.edu.np/",
      degree:
        "Bachelor of Science in Computer Science and Information Technology (BSC.CSIT)",
      logoUrl: "/images/logos/cab.png",
      start: "2018",
      end: "2023",
      score: "74%",
    },
    {
      school: "Madhyabindu Multiple Campus",
      href: "https://madhyabindu.edu.np/",
      degree: "+2 in Science",
      logoUrl: "/images/logos/mmc.jpg",
      start: "2016",
      end: "2018",
    },
    {
      school: "Janata higher secondary school",
      href: "#",
      degree: "SLC",
      logoUrl: "/laurier.png",
      start: "2015",
      end: "2016",
    },
  ],
  certification: [
    {
      course: "Pro Javascript Backend Developer, a course from Udemy",
      href: "https://www.udemy.com/certificate/UC-068adb46-b636-4093-b0fe-8e2b4cc6f2b5/",
      logoUrl: "/images/logos/cab.png",
      date: "  Mar 2023",
    },
    {
      course: "Ultimate React.js Design Pattern from Codedamn",
      href: "https://codedamn.com/certificate/verify/b76620317e690d3d91f0793d5efb014492325d90",
      logoUrl: "/images/logos/cab.png",
      date: "  Dec 2023",
    },
    {
      course: "Docker: Containerization for Modern Development from Codedamn ",
      href: "https://codedamn.com/certificate/verify/4b26e443540d0355b9abeeaab928c2b9336dfa2c",
      logoUrl: "/images/logos/cab.png",
      date: "Dec 2023",
    },
  ],
  projects: [
    {
      title: "Dipakgiri12.com.np",
      href: "https://dipakgiri12.com.np",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "I built an entire AI-powered blogging platform and cover letter generator utilizing the Llama LLM model. This project involved creating a chat system that enables developers to quickly share information with team members, enhancing collaboration and efficiency. To optimize performance, I implemented caching of results using Redis, which significantly improved API response times, ensuring a smooth user experience. This comprehensive approach not only streamlined content creation but also facilitated effective communication within development teams.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
        "lama LLM",
        "Grok LLM",
        "cloudflare worker",
        "socket.io",
        "supabase",
        "hono",
      ],
      links: [
        {
          type: "Website",
          href: "https://dipakgiri12.com.np",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/dipakplatform.png",
      video: "",
    },
    {
      title: "NepsayMart",
      href: "https://nepsaymart.com.au/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "I developed a user-friendly shopping platform that allows seamless browsing, easy cart management, and secure checkout with payment options like Cash on Delivery and Stripe. Additionally, I created an intuitive admin dashboard for efficient management of products, user data, and order processing.",
      technologies: [
        "Reactjs.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Stripe",
        "Nodejs",
        "express",
      ],
      links: [
        {
          type: "Website",
          href: "https://nepsaymart.com.au/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/nepsaymart.png",
      video: "",
    },
    {
      title: "Bulk Ipo result checker",
      href: "https://ipo.dipakgiri12.com.np",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed a web application that allows users to check the IPO results of multiple account holder. To enhance user experience, I implemented a display news section that provides users with the latest updates on IPO results. Additionally, ",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ipo.dipakgiri12.com.np",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/iporesult.png",
      video: "",
    },
    {
      title: "blogging and cover letter generator platform",
      href: "https://dipakgiri12.com.np/blog",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed a ai powered blogging platform that allows to write blog post and generate cover letter using the ai model",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "clerk",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://dipakgiri12.com.np/blog",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/blog.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
