export const covers = {
  pineyTrails: {
    name: "pineyTrails",
    href: "https://pineytrails.com",
    project: "Piney Trails - Travel/Hiking/Outdoors Blog",
    details: `PineyTrails is a passion project and personal blog dedicated to the world
    of hiking and outdoor adventures. This blog is more than just a platform for sharing my
    hiking experiences; it's also a journey in web development and a testament to my love for
    the great outdoors.
    PineyTrails is built on Next.js, a powerful and modern React framework known for its performance
     and SEO-friendliness. Leveraging server-side rendering (SSR) and static site generation (SSG),
     the blog offers blazing-fast load times and impeccable SEO optimization, ensuring that my
     content reaches a broader audience of fellow outdoor enthusiasts.`,
    tech_stack: ["React", "Next.js", "Jest", "Cloudflare", "Google Cloud Run", "Google Cloud Storage", "Github Actions", "Terraform"],
    colors: ["#4a6741"],
    url1: "pineyTrails_home.jpg"
  },
  f1app: {
    name: "f1app",
    href: "https://f1.anikamlodzianowski.com",
    github: "https://github.com/anikaml/f1",
    project: "F1 Stats - Hobby Project",
    details: "This is a single-page Javascript application showing F1 stats (location of races, drivers wins, constructor wins). Select on the calendar which time period interests you and the map will visualize each F1 race chronologically and the bar chart will show you even more statistics.",
    tech_stack: ["React", "TypeScript", "d3", "Jest", "@testing-library/react", "Material-UI", "GraphQL", "AWS Amplify via Apollo Client", "AWS S3", "AWS CloudFront", "AWS CodeBuild", "AWS CertificateManager", "AWS Lambda", "AWS IAM", "AWS Route53"],
    colors: ["#e10700", "#1f1f26"],
    url1: "f1app_main.png",
    url2: "f1screen.png",
  },
  stalue: {
    name: "stalue",
    project: "Stalue Machine Learning powered Stock & Crypto Value Forecasts.",
    details: "Stalue is a platform built to create and update price predictions for assets such as stocks and cryptocurrencies using the power of machine learning. The main component of the website is a stock price chart, done using ChartJS. One of the biggest challenges was to design a chart which will show current and historical prices in a clean readable way. I have done it splitting chart into two tabs. The default is a current tab showing Tesla stock price. User can also switch to historical tab and select the historical date to see previous prices on a given day. How much stock options is showed depends on the user plan. After signing up, user can buy pro tier, cancel subscription or renew it using Stripe components.",
    tech_stack: ["React", "PWA", "AWS Amplify", "Redux", "Stripe", "Material-UI", "Chart.js"],
    colors: ["#ff6060", "#4bc0c0"],
    url1: "mockup-1500x500.png",
    url2: "iPhoneXs.png",
    url3: "macbook-pro-stalue.png",
    screenshots: ["chart1.png", "chart2.png", "asset_list.png", "pricing.png"],
    logo: "/projects/stalue/logo512.svg",
  },
  bokiem: {
    name: "bokiem",
    project: "Bokiem Solutions",
    details: "Bokiem Solutions is a San Diego based company specializing in Progressive Web App development and deep expertise at running AWS-based workloads at scale.",
    tech_stack: ["React", "Redux", "Axios", "Material-UI"],
    colors: ["#5000ca", "#4bc0c0"],
    url1: "bokiem_mockup_1.png",
    url2: "desktop.png",
    url3: "mobile.png",
    logo: "/projects/bokiem/logo512.svg",
  },
  datette: {
    name: "datette",
    project: "Datette - Dating ideas and checklist app for couples.",
    colors: ["#FF9F79", "#3D444F"],
    tech_stack: ["React", "PWA", "Axios", "Material-UI", "Redux"],
    details: "Datette is a platform designed for couples to discover new date night ideas and hobby suggestions. This was one of my first projects. It is a PWA website. My goal was to make it look and work good on desktop as well as on mobile devices. In the first phase I was responsible for UI designs, creating app mockups using AdobeXD. After design approval I started coding app components with ReactJS + Material-ui library.",
    url1: "exploded_mockup_datette.png",
    screenshots: ["datette_1.png", "datette_2.png", "datette_3.png", "datette_4.png", "datette_5.png", "datette_6.png",],
  }
}