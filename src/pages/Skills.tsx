
import { Layout } from "@/components/layout/Layout";
import { Globe, DeviceTablet, VideoCamera, Robot } from "@phosphor-icons/react";

const skillsData = [
  {
    id: "web",
    title: "Web Development",
    icon: Globe,
    description: "Creating responsive, visually stunning websites optimized for performance and user experience.",
    expertise: ["React.js", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
    projects: [
      {
        name: "E-Commerce Platform",
        description: "A fully-featured online shopping platform with secure payment processing, inventory management, and customer accounts.",
      },
      {
        name: "Corporate Website Redesign",
        description: "Complete overhaul of a financial institution's web presence, enhancing both aesthetic appeal and functionality.",
      },
      {
        name: "SaaS Application",
        description: "Development of a subscription-based software service with complex user dashboard and analytics features.",
      }
    ]
  },
  {
    id: "app",
    title: "App Development",
    icon: DeviceTablet,
    description: "Building native and cross-platform mobile applications that engage and delight users.",
    expertise: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Firebase", "AWS Amplify"],
    projects: [
      {
        name: "Health & Fitness Tracker",
        description: "Mobile application that monitors health metrics, workout routines, and nutritional intake with social sharing features.",
      },
      {
        name: "Real Estate Marketplace",
        description: "Cross-platform app connecting property buyers, sellers, and agents with interactive maps and virtual tours.",
      },
      {
        name: "Event Management App",
        description: "Full-featured event planning application with ticketing, attendee management, and in-app messaging.",
      }
    ]
  },
  {
    id: "video",
    title: "Video Editing",
    icon: VideoCamera,
    description: "Professional video editing services that elevate your visual content to cinematic quality.",
    expertise: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "Motion Graphics", "Color Grading"],
    projects: [
      {
        name: "Corporate Brand Film",
        description: "Cinematic brand story showcasing company values, mission, and impact through compelling visuals and narrative.",
      },
      {
        name: "Product Launch Campaign",
        description: "Series of promotional videos highlighting features and benefits of a new tech product for multiple platforms.",
      },
      {
        name: "Documentary Short",
        description: "Award-winning mini-documentary telling the story of a social enterprise and its community impact.",
      }
    ]
  },
  {
    id: "ai",
    title: "AI Automation",
    icon: Robot,
    description: "Leveraging artificial intelligence to streamline operations and enhance productivity.",
    expertise: ["Machine Learning", "Natural Language Processing", "Computer Vision", "TensorFlow", "PyTorch", "OpenAI APIs", "Workflow Automation"],
    projects: [
      {
        name: "Customer Service Chatbot",
        description: "AI-powered conversational agent handling support queries and routing complex issues to appropriate departments.",
      },
      {
        name: "Content Recommendation Engine",
        description: "Personalized content suggestion system based on user behavior, preferences, and engagement patterns.",
      },
      {
        name: "Automated Data Analysis Tool",
        description: "System that processes large datasets, identifies trends, and generates actionable reports for business decision-making.",
      }
    ]
  }
];

const Skills = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">Our Skills & Expertise</h1>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Discover the comprehensive range of technical capabilities that power our innovative digital solutions.
            </p>
          </div>

          <div className="space-y-32">
            {skillsData.map((skill, index) => (
              <div 
                key={skill.id}
                id={skill.id}
                className="animate-on-scroll"
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-primary/20 rounded-full mr-4">
                        <skill.icon size={30} weight="light" className="text-primary" />
                      </div>
                      <h2 className="text-3xl font-light tracking-tighter">{skill.title}</h2>
                    </div>
                    <p className="text-foreground/70 mb-8 text-lg">
                      {skill.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-medium mb-4">Core Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {skill.expertise.map((tech, techIndex) => (
                          <span key={techIndex} className="px-4 py-2 rounded-full text-sm bg-secondary/50 text-foreground/80">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium mb-4">Notable Projects</h3>
                      <div className="space-y-4">
                        {skill.projects.map((project, projectIndex) => (
                          <div key={projectIndex} className="card-glass">
                            <div className="p-4">
                              <h4 className="text-lg font-medium mb-2">{project.name}</h4>
                              <p className="text-foreground/70 text-sm">{project.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 !== 0 ? 'md:col-start-1' : ''}>
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-lg blur-xl opacity-50"></div>
                      <img 
                        src={`https://images.unsplash.com/photo-${index % 4 === 0 ? '1460925895917-afdab827c52f' : 
                          index % 4 === 1 ? '1581091226825-a6a2a5aee158' : 
                          index % 4 === 2 ? '1488590528505-98d2b5aba04b' : 
                          '1518770660439-4636190af475'
                        }?auto=format&fit=crop&q=80&w=928`} 
                        alt={skill.title} 
                        className="rounded-lg relative z-10 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-32 card-glass p-10 text-center animate-on-scroll">
            <h2 className="text-3xl font-light tracking-tighter mb-6">Ready to Elevate Your Digital Presence?</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8">
              Let's collaborate to create innovative digital solutions that drive your business forward.
            </p>
            <a href="/#contact" className="btn-neumorphic inline-block">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
