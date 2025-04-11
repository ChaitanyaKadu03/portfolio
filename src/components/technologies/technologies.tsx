import { component$, useStore, useSignal } from "@builder.io/qwik"
import userInfoData from "@data/export-data"

export default component$(() => {
  const tech = useSignal<number>(0);
  const userInfo = useStore<any>({
    "data-set": {
      "person": {
        "first-name": "Chaitanya",
        "last-name": "Kadu",
        "full-name": "Chaitanya Kadu",
        "location": "Pune, India"
      },
      "ui": {
        "navbar": {
          "set-1": [
            "\\@todo - Img link.",
            "Chaitanya"
          ],
          "set-2": [
            "Home",
            "About Me",
            "Projects",
            "Experience",
            "Open Source",
            "Resume"
          ],
          "set-3": [
            "Let's Connect"
          ]
        },
        "hero": {
          "section": "Full-Stacks Developer and DevOps Engineer",
          "header": "Programmer",
          "paragraph": null
        },
        "about": {
          "section": "About Me",
          "header": "Hii There",
          "paragraph": "Dynamic Full-Stack Developer and Junior DevOps Engineer who led the full development cycle—design, code, and deploy—for two freelance projects. Built highly complex projects showcasing full-stack and DevOps expertise, with multiple open-source contributions to OpenStreetMap and blogs on Medium covering a variety of topics."
        },
        "technologies": {
          "section": "Technologies",
          "header": "Skill Sets",
          "paragraph": "The technologies mentioned here are the one's I have frequenly worked with. Built highly complex projects showcasing full-stack and DevOps expertise, with multiple open-source contributions to OpenStreetMap and blogs on Medium covering a variety of topics.",
          "data": {
            "Languages": {
              "JavaScript": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                "text": "A versatile, high-level programming language primarily used for web development to create interactive effects within web browsers."
              },
              "TypeScript": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
                "text": "A strict syntactical superset of JavaScript that adds static typing, enhancing development efficiency and code quality."
              },
              "Rust": {
                "link": "https://user-images.githubusercontent.com/8974888/231858967-7c37bf1e-335b-4f5a-9760-da97be9f54bb.png",
                "text": "A systems programming language focusing on safety, speed, and concurrency, eliminating many classes of bugs at compile-time."
              },
              "Python": {
                "link": "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg",
                "text": "A high-level, general-purpose programming language emphasizing code readability and ease of use."
              },
              "Bash": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg",
                "text": "A Unix shell and command language used for executing commands and scripting in Unix-based operating systems."
              },
              "SQL": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
                "text": "A domain-specific language used for managing and manipulating relational databases."
              }
            },
            "Frontend": {
              "React.js": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                "text": "A JavaScript library for building user interfaces, allowing developers to create reusable UI components."
              },
              "Vite.js": {
                "link": "https://vitejs.dev/logo.svg",
                "text": "A next-generation frontend build tool that offers fast and efficient development experiences."
              },
              "Next.js": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
                "text": "A React-based framework enabling functionalities like server-side rendering and static site generation for web applications."
              },
              "Qwik.js": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Qwik-logo.svg",
                "text": "A modern JavaScript framework focused on delivering instant-loading web applications."
              },
              "Redux.js": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
                "text": "A predictable state container for JavaScript apps, commonly used with React for managing application state."
              },
              "Recoil.js": {
                "link": "https://recoiljs.org/img/logo.svg",
                "text": "A state management library for React applications, providing a minimal and flexible API."
              }
            },
            "Backend": {
              "Node.js": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
                "text": "A JavaScript runtime built on Chrome's V8 engine, enabling server-side scripting and building scalable network applications."
              },
              "Express.js": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
                "text": "A minimal and flexible Node.js web application framework providing robust features for web and mobile applications."
              },
              "Django": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
                "text": "A high-level Python web framework that encourages rapid development and clean, pragmatic design."
              },
              "Hono.js": {
                "link": "https://hono.dev/logo.svg",
                "text": "A small, simple, and ultrafast web framework for Cloudflare Workers and other serverless environments."
              }
            },
            "Databases": {
              "MongoDB": {
                "link": "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg",
                "text": "A NoSQL database known for its flexibility and scalability, storing data in JSON-like documents."
              },
              "PostgreSQL": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
                "text": "An advanced, open-source relational database system known for its robustness and performance."
              },
              "Redis": {
                "link": "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg",
                "text": "An in-memory key-value store used as a database, cache, and message broker."
              }
            },
            "DevOps": {
              "Linux": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Linux_Logo_in_Linux_Libertine_Font.svg",
                "text": "An open-source Unix-like operating system kernel that serves as the foundation for various distributions."
              },
              "Docker": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
                "text": "A platform for developing, shipping, and running applications inside lightweight, portable containers."
              },
              "Kubernetes": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
                "text": "An open-source system for automating the deployment, scaling, and management of containerized applications."
              },
              "gRPC": {
                "link": "https://grpc.io/img/logos/grpc-logo.png",
                "text": "A high-performance, open-source universal RPC framework enabling communication between client and server applications."
              },
              "AWS": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
                "text": "A comprehensive and widely adopted cloud platform offering over 200 fully featured services from data centers globally."
              },
              "Kafka": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg",
                "text": "A distributed event streaming platform capable of handling trillions of events a day."
              },
              "Nginx": {
                "link": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg",
                "text": "A high-performance web server and reverse proxy server known for its stability, rich feature set, and low resource consumption."
              }
            }
          }
        },
        "experience": {
          "section": "Experience",
          "data": {
            "experience-1": {
              "title": "Building a High-Performance Marketing Site with Next.js and Vercel",
              "Project": "Vigyan",
              "Role": "Full-Stack Developer (Freelance)",
              "Duration": "May 2023 - June 2023",
              "Tech Stack": "Next.js, Vercel",
              "paragraph1": "Vigyan required a high-performance marketing website that would serve as the digital face of their brand. The goal was to build a modern, scalable, and SEO-optimized application with minimal load times and strong Lighthouse performance.",
              "paragraph2": "I designed and developed the entire solution using Next.js, leveraging its server-side rendering and static generation capabilities to enhance SEO and performance. The app was styled with Tailwind CSS for rapid UI development and deployed on Vercel to take advantage of its global CDN and seamless CI/CD pipeline.",
              "paragraph3": "We achieved 99 desktop and 100 mobile performance scores on Lighthouse. The site delivered sub-second load times with optimized images and minimal JavaScript bundles. Within 6 months of launch, it handled over 1,000 page views while using just 650 MB of bandwidth.",
              "paragraph4": "The main challenge was balancing performance with interactivity. By optimizing image delivery, reducing JavaScript payload, and carefully structuring content, I delivered a lightweight yet dynamic experience.",
              "img1": "\\@todo - img",
              "img2": "\\@todo - img",
              "img3": "\\@todo - img"
            },
            "experience-2": {
              "title": "Replatforming ASQUARE From WordPress to a Scalable React/Next.js Stack",
              "Project": "ASQUARE",
              "Role": "Full-Stack Developer (Freelance)",
              "Duration": "Nov 2022 - Feb 2023",
              "Tech Stack": "React.js, Next.js, Tailwind CSS, Vercel",
              "paragraph1": "ASQUARE needed a robust replatforming of their corporate site. Their WordPress-based setup was difficult to scale, and performance issues were hindering SEO and engagement. The goal was to build a fast, maintainable site with better developer experience and search visibility.",
              "paragraph2": "I started by migrating their content architecture to React.js for component reusability. Once the structure was defined, I transitioned the project to Next.js to enable server-side rendering and improve SEO. The UI was developed using Tailwind CSS, and the application was deployed via Vercel for fast global delivery.",
              "paragraph3": "We successfully migrated from WordPress to a fully custom stack, significantly increasing site performance and SEO rankings. The new platform achieved over 5,000 page views within the first year post-launch.",
              "paragraph4": "The key challenge was migrating legacy WordPress content while maintaining structure and SEO integrity. I implemented static generation for most pages and SSR where needed to balance performance and content freshness.",
              "img1": "\\@todo - img",
              "img2": "\\@todo - img",
              "img3": "\\@todo - img"
            }
          }
        },
        "projects": {
          "section": "Projects",
          "data": {
            "project-1": {
              "title": "Conscioux - Real-Time Collaborative Chalkboard",
              "paragraph-1": "Conscioux is a web-based electronic classroom that enables real-time collaboration on a shared digital chalkboard. Multiple users can draw simultaneously, with changes reflected instantly across all sessions.",
              "paragraph-2": "The system is built with Next.js for the frontend, Redux for state management, and Express.js for the backend API. Data persistence is handled through PostgreSQL and Prisma ORM, while Redis supports session and state synchronization. The entire setup is managed under a Turborepo monorepo structure and deployed on AWS for scalable hosting.",
              "paragraph-3": "This project focused heavily on performance and real-time accuracy, addressing challenges like concurrent data updates and latency smoothing to maintain a seamless user experience.",
              "img1": "\\@todo - img",
              "img2": "\\@todo - img",
              "img3": "\\@todo - img",
              "github": "\\@todo - link",
              "live": "\\@todo - link"
            },
            "project-2": {
              "title": "Gambits - Synchronized Digital Whiteboard",
              "paragraph-1": "Gambits is a collaborative platform that mirrors a classroom chalkboard, allowing multiple users to draw and annotate in real time. Every user’s edits are instantly visible to others, enabling live teaching or brainstorming sessions.",
              "paragraph-2": "The tech stack includes Next.js and Redux on the frontend, with Express.js handling backend services. PostgreSQL and Prisma manage the data layer, and Redis is used for fast in-memory updates. Deployed on AWS using Turborepo, the project is structured for maintainability and scalability.",
              "paragraph-3": "Core challenges included low-latency communication, user session management, and ensuring data consistency across concurrent user interactions.",
              "img1": "\\@todo - img",
              "img2": "\\@todo - img",
              "img3": "\\@todo - img",
              "github": "\\@todo - link",
              "live": "\\@todo - link"
            }
          }
        },
        "open-source": {
          "section": "Open Source Contributions",
          "data": {
            "contribution-1": {
              "title": "Hotkey Support for Tag Editing in OpenStreetMap iD Editor",
              "paragraph-1": "To improve user efficiency in the iD editor, I added keybindings (Alt + 1 to 9) to the Raw Tag Editor. This enhancement allows users to quickly focus on the value input fields of specific tag rows without manually navigating through them. It's a small usability tweak with a big impact on mapping speed and workflow.",
              "paragraph-2": "Tech Stack - JavaScript",
              "img": "\\@todo - img",
              "github": "\\@todo - link",
              "live": "\\@todo - link"
            },
            "contribution-2": {
              "title": "Node Snapping Operation in OpenStreetMap iD Editor",
              "paragraph-1": "I implemented the operationConnect function to snap one node to another if they share the same coordinates. This addressed a long-standing issue (#10698) and significantly improved editing precision, especially when working with overlapping geometry or aligning features in the editor.",
              "paragraph-2": "Tech Stack - JavaScript",
              "img": "\\@todo - img",
              "github": "\\@todo - link",
              "live": "\\@todo - link"
            },
            "contribution-3": {
              "title": "Hotkey Support for Tag Editing in OpenStreetMap iD Editor",
              "paragraph-1": "To improve user efficiency in the iD editor, I added keybindings (Alt + 1 to 9) to the Raw Tag Editor. This enhancement allows users to quickly focus on the value input fields of specific tag rows without manually navigating through them. It's a small usability tweak with a big impact on mapping speed and workflow.",
              "paragraph-2": "Tech Stack - JavaScript",
              "img": "\\@todo - img",
              "github": "\\@todo - link",
              "live": "\\@todo - link"
            },
            "contribution-4": {
              "title": "Node Snapping Operation in OpenStreetMap iD Editor",
              "paragraph-1": "I implemented the operationConnect function to snap one node to another if they share the same coordinates. This addressed a long-standing issue (#10698) and significantly improved editing precision, especially when working with overlapping geometry or aligning features in the editor.",
              "paragraph-2": "Tech Stack - JavaScript",
              "img": "\\@todo - img",
              "github": "\\@todo - link",
              "live": "\\@todo - link"
            },
            "contribution-5": {
              "title": "Node Snapping Operation in OpenStreetMap iD Editor",
              "paragraph-1": "I implemented the operationConnect function to snap one node to another if they share the same coordinates. This addressed a long-standing issue (#10698) and significantly improved editing precision, especially when working with overlapping geometry or aligning features in the editor.",
              "paragraph-2": "Tech Stack - JavaScript",
              "img": "\\@todo - img",
              "github": "\\@todo - link",
              "live": "\\@todo - link"
            },
            "contribution-6": {
              "title": "Node Snapping Operation in OpenStreetMap iD Editor",
              "paragraph-1": "I implemented the operationConnect function to snap one node to another if they share the same coordinates. This addressed a long-standing issue (#10698) and significantly improved editing precision, especially when working with overlapping geometry or aligning features in the editor.",
              "paragraph-2": "Tech Stack - JavaScript",
              "img": "\\@todo - img",
              "github": "\\@todo - link",
              "live": "\\@todo - link"
            },
            "contribution-7": {
              "title": "Hotkey Support for Tag Editing in OpenStreetMap iD Editor",
              "paragraph-1": "To improve user efficiency in the iD editor, I added keybindings (Alt + 1 to 9) to the Raw Tag Editor. This enhancement allows users to quickly focus on the value input fields of specific tag rows without manually navigating through them. It's a small usability tweak with a big impact on mapping speed and workflow.",
              "paragraph-2": "Tech Stack - JavaScript",
              "img": "\\@todo - img",
              "github": "\\@todo - link",
              "live": "\\@todo - link"
            },
            "contribution-8": {
              "title": "Node Snapping Operation in OpenStreetMap iD Editor",
              "paragraph-1": "I implemented the operationConnect function to snap one node to another if they share the same coordinates. This addressed a long-standing issue (#10698) and significantly improved editing precision, especially when working with overlapping geometry or aligning features in the editor.",
              "paragraph-2": "Tech Stack - JavaScript",
              "img": "\\@todo - img",
              "github": "\\@todo - link",
              "live": "\\@todo - link"
            },
            "contribution-9": {
              "title": "Hotkey Support for Tag Editing in OpenStreetMap iD Editor",
              "paragraph-1": "To improve user efficiency in the iD editor, I added keybindings (Alt + 1 to 9) to the Raw Tag Editor. This enhancement allows users to quickly focus on the value input fields of specific tag rows without manually navigating through them. It's a small usability tweak with a big impact on mapping speed and workflow.",
              "paragraph-2": "Tech Stack - JavaScript",
              "img": "\\@todo - img",
              "github": "\\@todo - link",
              "live": "\\@todo - link"
            }
          }
        },
        "blogs": {
          "section": "Blogs",
          "blog-1": {
            "title": "Pseudo-Random Number Generators: A Condensed Introduction",
            "paragraph": "This blog provides a condensed yet simple introduction to topics like pseudo-random number generators (PRNGs), Xorshift, and the V8 engine’s implementation of PRNG."
          },
          "blog-2": {
            "title": "Caching Unleashed: Boost Performance with These Key Concepts",
            "paragraph": "In this age of instant access, caching can deliver exceptional performance to end users. However, if not utilized appropriately, it can lead to poor performance and high memory usage. This blog explores various caching concepts."
          }
        },
        "connect": {
          "section": "Connect",
          "data": {
            "Email": {
              "link": "chaitanyakadu03@gmail.com",
              "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
            },
            "Website": {
              "link": "https://chaitanyakadu.in",
              "logo": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Globe_icon.svg"
            },
            "Medium": {
              "link": "https://medium.com/@chaitanyakadu03",
              "logo": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Medium_logo_Monogram.svg"
            },
            "LinkedIn": {
              "link": "https://linkedin.com/in/chaitanyakadu",
              "logo": "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            },
            "GitHub": {
              "link": "https://github.com/ChaitanyaKadu03",
              "logo": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            },
            "X": {
              "link": "https://x.com/03_chaitanya",
              "logo": "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023.svg"
            }
          }
        }
      },
      "resume": {
        "name": "Chaitanya Kadu",
        "location": "Pune, India",
        "email": "chaitanyakadu03@gmail.com",
        "website": "https://chaitanyakadu.in",
        "summary": "Dynamic Full-Stack Developer and Junior DevOps Engineer who led the full development cycle—design, code, and deploy—for two freelance projects. Built highly complex projects showcasing full-stack and DevOps expertise, with multiple open-source contributions and blogs on Medium.\n",
        "previously": [
          {
            "title": "Full-Stack Developer",
            "company": "Vigyan (Freelance)",
            "date": "May 2023 - June 2023",
            "details": [
              "Led full-cycle development of a Next.js app deployed on Vercel",
              "Achieved 99 (desktop) and 100 (mobile) performance metrics",
              "Attracted 1,000+ visits using ~650 MB bandwidth"
            ]
          },
          {
            "title": "Full-Stack Developer",
            "company": "ASQUARE (Freelance)",
            "date": "Nov 2022 - Feb 2023",
            "details": [
              "Migrated platform from WordPress to React.js/Next.js",
              "Delivered a scalable solution with 5,000+ visits in one year"
            ]
          }
        ],
        "open_source": [
          {
            "title": "Snap node/vertex to underlying way",
            "link": "https://github.com/openstreetmap/iD/pull/10892"
          },
          {
            "title": "Hotkey to select tags (Alt + 1..9)",
            "link": "https://github.com/openstreetmap/iD/pull/10864"
          }
        ],
        "projects": [
          {
            "title": "Conscioux",
            "repo": "https://github.com/ChaitanyaKadu03/conscioux",
            "live": "https://conscioux.in",
            "description": "Collaborative classroom with live chalkboard drawing and sync.\n",
            "stack": [
              "Next.js",
              "Redux.js",
              "Express.js",
              "PostgreSQL",
              "Redis",
              "AWS"
            ]
          },
          {
            "title": "Gambits",
            "repo": "https://github.com/ChaitanyaKadu03/conscioux",
            "live": "https://conscioux.in",
            "description": "Same collaborative features as Conscioux (duplicated entry).\n",
            "stack": [
              "Next.js",
              "Redux.js",
              "Express.js",
              "PostgreSQL",
              "Redis",
              "AWS"
            ]
          }
        ],
        "links": [
          {
            "Twitter": "https://x.com/03_chaitanya_"
          },
          {
            "LinkedIn": "https://www.linkedin.com/in/chaitanyakadu/"
          },
          {
            "GitHub": "https://github.com/ChaitanyaKadu03"
          },
          {
            "Medium": "https://medium.com/@chaitanyakadu03"
          }
        ]
      }
    }
  });

  // Calculate current technology dynamically based on tech.value
  const techKeys: any = Object.keys(userInfo["data-set"].ui.technologies.data);
  const currentTech = useSignal(techKeys[tech.value]);

  return (
    <section class="flex flex-col gap-12 my-24">
      <div class="flex flex-col items-center justify-center text-center gap-2">
        <h6 class="h6">
          {userInfo["data-set"].ui.technologies.section}
        </h6>
        <h3 class="h3">
          {userInfo["data-set"].ui.technologies.header}
        </h3>
        <p class="p1 max-w-[800px]">
          {userInfo["data-set"].ui.technologies.paragraph}
        </p>
      </div>
      <div class="grid grid-cols-3 gap-2  p-2 w-[1024px] bg-[#0c0c0c] rounded-md shadow-2xl shadow-neutral-800 relative left-1/2 -translate-x-1/2 box-border">
        {
          Object.keys(userInfo["data-set"].ui.technologies.data[currentTech.value]).map((val: any) => {
            return (
              <div class="flex flex-col gap-2 items-center justify-center text-center bg-no-repeat bg-contain bg-center h-full w-fit border-[0.2px] border-neutral-800 rounded-md bg-[#22222240] py-12 px-8 overflow-hidden">
                <h6 class="p1">
                  {val}
                </h6>
                <p class="p2">
                  {userInfo["data-set"].ui.technologies.data[currentTech.value][val].text}
                </p>
                <img
                  src={userInfo["data-set"].ui.technologies.data[currentTech.value][val]["link"]}
                  alt={val}
                  class="h-fit w-[160px] object-cover absolute opacity-10 select-none"
                />
              </div>
            );
          })
        }
      </div>
    </section>
  )
});
