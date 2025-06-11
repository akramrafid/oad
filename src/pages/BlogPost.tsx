
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from "@/components/layout/Layout";
import { CalendarBlank, Clock, CaretLeft, User, Tag } from "@phosphor-icons/react";
import { NotFound } from "./NotFound";

// This is a simplified version for the demo.
// In a real application, you'd fetch this data from an API.
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Explore the emerging technologies and methodologies that are reshaping the landscape of web development, from AI-driven development to edge computing.",
    date: "May 2, 2025",
    readTime: "6 min read",
    author: "Akram H.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=928",
    content: `
      <p>As we move deeper into 2025, the web development landscape continues to evolve at an unprecedented pace. New technologies, methodologies, and user expectations are reshaping how we approach digital experiences. Staying ahead of these trends is essential for developers and businesses alike.</p>
      
      <h3>AI-Driven Development</h3>
      <p>Artificial intelligence is no longer just a buzzword—it's becoming an integral part of the development process. AI-powered tools are now capable of generating code, identifying bugs, and even suggesting optimal design patterns. These tools don't replace developers but rather augment their capabilities, allowing them to focus on more complex, creative aspects of development.</p>
      
      <p>We're seeing a rise in "AI pair programmers" that work alongside human developers, suggesting completions, refactoring code, and providing insights into potential improvements. This collaborative approach is significantly boosting productivity and code quality.</p>
      
      <h3>Edge Computing</h3>
      <p>With the increasing demand for real-time processing and reduced latency, edge computing is becoming more prevalent in web development. By processing data closer to where it's generated rather than sending it to centralized cloud servers, applications can deliver faster, more responsive experiences.</p>
      
      <p>Edge functions—small pieces of code that run at the network edge—are particularly transforming how we build and deploy web applications. They're ideal for tasks like image optimization, authentication, and personalization, all without the latency traditionally associated with server-based processing.</p>
      
      <h3>WebAssembly Expansion</h3>
      <p>WebAssembly (Wasm) continues to gain traction as a powerful tool for bringing high-performance applications to the web. Originally designed to allow languages like C++ and Rust to run in browsers, Wasm is now expanding beyond this initial use case.</p>
      
      <p>We're seeing WebAssembly being used for everything from complex in-browser gaming to data visualization and machine learning applications. As the ecosystem matures, expect to see more traditional desktop applications moving to the web through WebAssembly.</p>
      
      <h3>Progressive Web Apps Evolution</h3>
      <p>Progressive Web Apps (PWAs) have been around for a while, but they're evolving to become even more powerful and feature-rich. The lines between native apps and PWAs continue to blur as web capabilities expand.</p>
      
      <p>New browser APIs are enabling features previously only available to native applications, such as advanced file system access, hardware integration, and improved background processing. These advancements are making PWAs a viable alternative to native development for many use cases.</p>
      
      <h3>Micro-Frontends Architecture</h3>
      <p>As web applications grow in complexity, the micro-frontends architecture is gaining popularity. Similar to microservices on the backend, this approach involves breaking down frontend applications into smaller, more manageable pieces that can be developed, tested, and deployed independently.</p>
      
      <p>This architecture is particularly valuable for large organizations with multiple teams working on different parts of a web application. It allows for greater autonomy, flexibility in technology choices, and more sustainable codebases.</p>
      
      <h3>Conclusion</h3>
      <p>The web development landscape of 2025 is marked by technologies and approaches that emphasize performance, developer experience, and seamless user experiences. By embracing these trends—AI-driven development, edge computing, WebAssembly, evolving PWAs, and micro-frontends—developers can create more powerful, efficient, and user-friendly web applications.</p>
      
      <p>As always, the key is not to adopt every new technology for its own sake, but to thoughtfully integrate those that address your specific challenges and align with your business goals. By staying informed and selective, you can leverage these trends to create truly exceptional digital experiences.</p>
    `
  },
  {
    id: 2,
    title: "Mastering Mobile App Design: Creating Experiences Users Love",
    excerpt: "Learn the principles and practices that lead to exceptional mobile app designs, from intuitive navigation to thoughtful micro-interactions.",
    date: "April 24, 2025",
    readTime: "8 min read",
    author: "Mia Chen",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=928",
    content: `
      <p>In today's competitive app marketplace, good design isn't just an advantage—it's a requirement. Users have increasingly high expectations for app experiences, and they won't hesitate to abandon apps that don't meet their standards. This article explores the key principles and practices that lead to exceptional mobile app designs that users genuinely love.</p>
      
      <h3>Understanding Your Users</h3>
      <p>Great app design begins with a deep understanding of your users' needs, preferences, and behaviors. Before diving into visual design or interface layouts, invest time in:</p>
      
      <ul>
        <li>User research: Conduct interviews, surveys, and observation sessions with your target audience.</li>
        <li>Persona development: Create detailed profiles of your typical users to guide design decisions.</li>
        <li>Journey mapping: Chart the complete user journey to identify pain points and opportunities.</li>
      </ul>
      
      <p>This foundational work ensures that your design decisions are rooted in actual user needs rather than assumptions or personal preferences.</p>
      
      <h3>Intuitive Navigation</h3>
      <p>Navigation is the backbone of app usability. Users should always know where they are, where they can go, and how to get there. Consider these navigation best practices:</p>
      
      <p>Maintain consistency across screens to build user confidence and reduce cognitive load. Use familiar patterns that users already understand from other apps when possible. Prioritize common actions and make them easily accessible. Implement gesture-based navigation thoughtfully, ensuring discoverability through visual cues.</p>
      
      <p>Remember that good navigation often goes unnoticed—it's when navigation is confusing or cumbersome that users become aware of it.</p>
      
      <h3>Visual Hierarchy and Typography</h3>
      <p>Effective visual design guides users' attention to the most important elements first, creating a clear path through the interface. To establish a strong visual hierarchy:</p>
      
      <p>Use size, color, contrast, and spacing to indicate the relative importance of elements. Limit the number of visual weights (like font sizes or button styles) to create a clear system. Choose typography that's both readable and reflective of your brand personality. Maintain generous white space to improve readability and focus.</p>
      
      <p>In mobile design, where screen space is limited, a clear visual hierarchy is especially crucial for helping users quickly find what they need.</p>
      
      <h3>Thoughtful Micro-interactions</h3>
      <p>Micro-interactions are subtle animations or responses that occur when users interact with your app. When designed thoughtfully, they can delight users, provide feedback, and make the experience feel more dynamic and responsive.</p>
      
      <p>Examples of effective micro-interactions include button state changes that confirm a tap has registered, subtle animations that guide attention during screen transitions, visual feedback that confirms a task has been completed, and loading animations that reduce perceived wait time.</p>
      
      <p>The key is to keep micro-interactions purposeful and unobtrusive—they should enhance the experience rather than distract from it.</p>
      
      <h3>Accessibility as a Priority</h3>
      <p>Inclusive design isn't just an ethical consideration—it results in better apps for everyone. Build accessibility into your design process by:</p>
      
      <p>Ensuring sufficient color contrast for text and important elements. Supporting dynamic text sizing for users who need larger text. Designing for screen readers by including proper element labels. Creating tap targets large enough for users with motor challenges.</p>
      
      <p>Many accessibility features, like clear contrast and generous tap targets, improve usability for all users, not just those with disabilities.</p>
      
      <h3>Performance Considerations in Design</h3>
      <p>Even the most beautiful app design will fail if the app itself is slow or unresponsive. As you design, consider how your choices impact performance:</p>
      
      <p>Optimize images and animations to minimize their impact on loading times and battery life. Design appropriate loading states that keep users informed and engaged. Consider offline states and how your app handles poor connectivity. Use progressive loading techniques for content-heavy screens.</p>
      
      <p>Speed and responsiveness are fundamental aspects of the user experience—no amount of visual polish can compensate for a sluggish app.</p>
      
      <h3>Testing and Iteration</h3>
      <p>Great app design is rarely achieved on the first attempt. Plan for multiple rounds of testing and refinement:</p>
      
      <p>Conduct usability testing throughout the design process, not just at the end. A/B test different approaches for critical features or screens. Analyze user behavior through analytics after launch. Continuously gather user feedback and be willing to revisit design decisions.</p>
      
      <p>Each iteration should bring you closer to an app that truly resonates with your users and meets their needs.</p>
      
      <h3>Conclusion</h3>
      <p>Mastering mobile app design is about balancing aesthetics, functionality, and user needs. By understanding your users, creating intuitive navigation, establishing clear visual hierarchies, adding thoughtful micro-interactions, prioritizing accessibility, considering performance, and embracing an iterative process, you can create app experiences that users not only use but genuinely love.</p>
      
      <p>Remember that design is never truly "finished"—as user expectations evolve and new technologies emerge, your approach to app design should continue to grow and adapt as well.</p>
    `
  },
  {
    id: 3,
    title: "The Art of Video Editing: Techniques for Compelling Visual Storytelling",
    excerpt: "Discover the professional editing techniques that transform raw footage into captivating narratives that resonate with viewers.",
    date: "April 15, 2025",
    readTime: "7 min read",
    author: "David Roberts",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=928",
    content: `
      <p>Video editing is where the magic of storytelling comes to life. It's the process that transforms disconnected clips into a coherent, compelling narrative that resonates with viewers. In this article, we'll explore professional editing techniques that can elevate your video content from amateur to extraordinary.</p>
      
      <h3>The Foundation: Understanding Story Structure</h3>
      <p>Before diving into technical editing techniques, it's essential to understand the fundamentals of storytelling. Every compelling video, regardless of length or purpose, follows a narrative structure:</p>
      
      <p>Introduction: Capture attention and establish the subject or premise. Development: Build on the introduction with details, examples, or escalating action. Climax: Reach the most important or emotional point of the content. Resolution: Provide closure or a call to action.</p>
      
      <p>This structure creates a natural flow that guides viewers through your content while maintaining their interest. When approaching your edit, first organize your footage within this framework before focusing on specific cuts or transitions.</p>
      
      <h3>Rhythm and Pacing</h3>
      <p>The rhythm of your edits—how and when you cut from one shot to another—significantly impacts the viewer's experience. Different pacing creates different emotional responses:</p>
      
      <p>Quick cuts create energy, tension, and excitement. Longer shots foster contemplation, emphasize emotional moments, or establish location. Varying your pace prevents monotony and can signal shifts in tone or topic.</p>
      
      <p>Don't feel compelled to show everything in real-time. Compress mundane actions while allowing important moments to breathe. Remember that pacing should serve the content—a corporate training video will typically have different rhythmic needs than a music video or documentary.</p>
      
      <h3>The Power of B-Roll</h3>
      <p>B-roll—supplementary footage that enriches your primary content—is one of the most valuable tools in video editing. Effective use of B-roll:</p>
      
      <p>Illustrates concepts being discussed in interviews or narration. Covers cuts in primary footage for smoother transitions. Adds visual interest and prevents "talking head" fatigue. Establishes context by showing environments or related activities.</p>
      
      <p>When shooting, always capture more B-roll than you think you'll need. During editing, select B-roll that not only relates to the content but also enhances it by adding emotional depth or additional information.</p>
      
      <h3>Color Grading for Mood and Cohesion</h3>
      <p>Color grading is more than technical correction—it's a powerful storytelling tool that affects the emotional tone of your video. Different color treatments evoke different feelings:</p>
      
      <p>Warm tones (orange, yellow) suggest comfort, nostalgia, or energy. Cool tones (blue, teal) can feel calm, professional, or melancholic. High contrast often creates drama or intensity. Desaturated looks may convey seriousness or historical context.</p>
      
      <p>Beyond setting mood, color grading creates visual cohesion across clips shot in different conditions. Develop a consistent color palette for your project, but don't hesitate to shift the grade subtly between sections if it serves the narrative.</p>
      
      <h3>Sound Design: The Unsung Hero</h3>
      <p>Viewers may forgive mediocre visuals, but poor audio can immediately undermine your production value. Professional sound design includes:</p>
      
      <p>Cleaning dialogue by removing background noise and normalizing levels. Adding ambient sound to create a sense of place and prevent "dead air." Using music strategically to establish mood and enhance emotional impact. Incorporating sound effects to emphasize actions or transitions.</p>
      
      <p>Layer your audio thoughtfully, adjusting levels so elements don't compete. Remember that silence can be as powerful as sound when used deliberately—a momentary drop in music can emphasize an important statement or create tension.</p>
      
      <h3>The Art of the Invisible Edit</h3>
      <p>The most effective editing often goes unnoticed by viewers, creating a seamless experience that keeps them engaged with the content rather than aware of its construction. Techniques for invisible editing include:</p>
      
      <p>Cutting on action: Transitioning between shots during movement to mask the cut. Matching visual elements: Maintaining consistency in composition across cuts. Using natural sound bridges: Letting audio from one scene bleed into the next. Employing motivated transitions: Using movement or visual elements to inspire wipes or dissolves.</p>
      
      <p>While stylized editing has its place, mastering invisible editing techniques gives you a foundation of skills that apply to nearly any video project.</p>
      
      <h3>Ethical Considerations</h3>
      <p>With great editing power comes responsibility. Ethical editing means:</p>
      
      <p>Preserving the essence of what was said or done, even when condensing. Making edits that clarify rather than distort. Being transparent about manipulated footage (like speeding up time-lapses). Respecting the dignity of your subjects.</p>
      
      <p>Especially in documentary or journalistic contexts, maintaining editorial integrity is paramount. Your editing choices should serve truthful storytelling, even as you craft a compelling narrative.</p>
      
      <h3>Conclusion</h3>
      <p>Video editing is where technical skill meets artistic expression. By understanding story structure, mastering rhythm and pacing, utilizing B-roll effectively, applying thoughtful color grading, designing comprehensive audio, creating invisible edits, and maintaining ethical standards, you can transform raw footage into captivating visual stories.</p>
      
      <p>Remember that rules can be broken once understood, and that finding your own voice as an editor is ultimately about using these techniques in service of the stories you want to tell. The most powerful edits aren't just technically proficient—they're emotionally resonant, creating connections between content and viewers that linger long after the video ends.</p>
    `
  },
  {
    id: 4,
    title: "AI Automation: Transforming Businesses Across Industries",
    excerpt: "Explore how artificial intelligence is revolutionizing business processes, creating efficiencies, and opening new opportunities for innovation.",
    date: "April 8, 2025",
    readTime: "9 min read",
    author: "Akram H.",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80&w=928",
    content: `
      <p>Artificial intelligence has moved beyond theoretical discussions into practical applications that are transforming how businesses operate across virtually every industry. From streamlining routine tasks to enabling entirely new business models, AI automation is creating unprecedented opportunities for efficiency, innovation, and competitive advantage.</p>
      
      <h3>Beyond the Buzzword: Real-World AI Applications</h3>
      <p>While "AI" has become a marketing buzzword, businesses are finding concrete value in specific applications:</p>
      
      <p>Intelligent document processing systems that extract information from unstructured documents, reducing manual data entry by up to 90%. Customer service chatbots that resolve up to 80% of routine inquiries without human intervention. Predictive maintenance systems that identify potential equipment failures before they occur, reducing downtime by up to 50%. Supply chain optimization algorithms that adjust inventory levels and distribution patterns in real-time based on multiple variables.</p>
      
      <p>These applications share a common thread: they automate processes that previously required significant human effort, often with greater speed, accuracy, and consistency.</p>
      
      <h3>Transforming Operations Across Departments</h3>
      <p>AI automation is breaking down traditional departmental silos, offering benefits throughout organizations:</p>
      
      <h4>Marketing and Sales</h4>
      <p>AI-powered tools analyze customer behavior patterns to predict which prospects are most likely to convert. Content generation systems create personalized marketing materials at scale. Sentiment analysis monitors brand perception across social media in real-time. Sales forecasting models incorporate multiple variables to improve accuracy.</p>
      
      <h4>Human Resources</h4>
      <p>Resume screening systems identify promising candidates from large applicant pools. Chatbots handle initial interview questions and scheduling. Employee retention models flag potential turnover risks before resignations occur. Learning platforms recommend personalized development resources based on individual performance and goals.</p>
      
      <h4>Finance</h4>
      <p>Fraud detection systems identify suspicious patterns in transactional data. Automated reporting tools generate financial statements and visualizations. Cash flow forecasting models optimize working capital management. Expense management systems audit submissions for policy compliance with minimal human oversight.</p>
      
      <p>The cross-functional nature of these applications is creating new collaborative opportunities between traditionally separate business units.</p>
      
      <h3>Implementation Strategies for Success</h3>
      <p>Despite the potential benefits, many organizations struggle with AI implementation. Companies that successfully deploy AI automation typically follow these strategies:</p>
      
      <h4>Start with Well-Defined Problems</h4>
      <p>Successful AI implementations begin with specific business challenges rather than technology-first approaches. Identify processes that are:</p>
      
      <p>Repetitive and time-consuming. Data-rich but insight-poor. Subject to human error or inconsistency. Critical to operations but not requiring complex judgment.</p>
      
      <p>These characteristics often indicate opportunities where AI can deliver immediate, measurable value.</p>
      
      <h4>Focus on Change Management</h4>
      <p>The technical deployment of AI systems is often simpler than the human element of implementation. Effective change management involves:</p>
      
      <p>Transparent communication about how AI will affect roles and responsibilities. Training programs that help employees work alongside AI systems. Involving end-users in the implementation process to address concerns and gather feedback. Celebrating early wins to build organizational confidence in the technology.</p>
      
      <p>Organizations that neglect these human factors often find their AI investments underutilized or actively resisted.</p>
      
      <h4>Build Data Foundations</h4>
      <p>AI systems are only as good as the data they're trained on. Before implementing advanced automation, ensure you have:</p>
      
      <p>Reliable data collection mechanisms across relevant systems. Standardized data formats and definitions throughout the organization. Governance protocols that ensure data accuracy and security. Sufficient historical data to train models effectively.</p>
      
      <p>Many organizations find that preparing their data infrastructure is the most time-consuming aspect of AI implementation, but also the most critical for long-term success.</p>
      
      <h3>Ethical Considerations and Guardrails</h3>
      <p>As AI automation becomes more prevalent, organizations must establish ethical guidelines for its use:</p>
      
      <p>Transparency: Employees and customers should understand when and how AI is being used. Oversight: Automated systems should have human supervision, especially for consequential decisions. Bias prevention: Regular audits should identify and correct algorithmic biases. Privacy protection: Clear policies should govern how data is used for AI training and operation.</p>
      
      <p>These ethical guardrails not only mitigate risks but often enhance AI effectiveness by ensuring systems operate within appropriate contexts.</p>
      
      <h3>The Future: Adaptive AI and Human Collaboration</h3>
      <p>The most exciting developments in AI automation aren't about replacing humans but creating new collaborative paradigms:</p>
      
      <p>Adaptive systems that continuously learn from human feedback, becoming more aligned with organizational objectives over time. Augmented intelligence tools that enhance human capabilities rather than replacing them, providing insights and recommendations while leaving judgment to people. Human-in-the-loop automation that handles routine elements of complex processes while escalating exceptions to specialists.</p>
      
      <p>This collaborative approach often yields better results than either fully manual or fully automated processes, combining human creativity and judgment with machine efficiency and consistency.</p>
      
      <h3>Conclusion</h3>
      <p>AI automation isn't just changing how businesses operate—it's redefining what's possible. Organizations that approach implementation strategically, focusing on specific business problems, change management, data foundations, and ethical guidelines, are positioning themselves for long-term competitive advantage.</p>
      
      <p>The most successful companies won't be those that simply adopt AI technologies, but those that thoughtfully integrate them into their operations, culture, and strategic vision. In doing so, they'll not only increase efficiency but potentially discover entirely new business opportunities that were previously unimaginable.</p>
    `
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<typeof blogPosts[0] | null>(null);
  
  useEffect(() => {
    // In a real app, you'd fetch the post from an API
    const foundPost = blogPosts.find(p => p.id === Number(id));
    setPost(foundPost || null);
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!post) {
    return <NotFound />;
  }
  
  return (
    <Layout>
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <a href="/blog" className="flex items-center text-primary hover:text-primary/80 mb-4 transition-colors">
              <CaretLeft size={20} weight="light" className="mr-1" />
              Back to Blog
            </a>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full flex items-center">
                <Tag size={12} weight="light" className="mr-1" />
                {post.category}
              </span>
              <div className="flex items-center text-sm text-foreground/60">
                <CalendarBlank size={14} weight="light" className="mr-1" />
                {post.date}
              </div>
              <div className="flex items-center text-sm text-foreground/60">
                <Clock size={14} weight="light" className="mr-1" />
                {post.readTime}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter mb-6">{post.title}</h1>
            
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                <User size={20} weight="light" className="text-primary" />
              </div>
              <div>
                <p className="font-medium">By {post.author}</p>
                <p className="text-sm text-foreground/60">Content Writer</p>
              </div>
            </div>
          </div>
          
          <div className="relative mb-12 animate-fade-in-up">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 animate-fade-in-up">
            <div className="lg:col-span-3">
              <div className="prose prose-invert prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-xl font-medium mb-4">Share this article</h3>
                <div className="flex gap-4">
                  <a href="#" className="p-2 bg-secondary/50 rounded-full hover:bg-primary/20 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 6C21.1 6.5 20.1 6.9 19 7.1C18.1 6.2 16.9 5.6 15.5 5.6C12.8 5.6 10.7 7.7 10.7 10.4C10.7 10.8 10.7 11.1 10.8 11.4C6.7 11.2 3.1 9.3 0.9 6.4C0.5 7 0.3 7.7 0.3 8.5C0.3 9.9 1 11.1 2 11.8C1.2 11.8 0.4 11.6 0 11.3V11.4C0 13.8 1.6 15.8 3.7 16.2C3.3 16.3 2.9 16.4 2.4 16.4C2.1 16.4 1.8 16.4 1.5 16.3C2.1 18.2 3.8 19.6 5.8 19.6C4.2 20.9 2.2 21.7 0 21.7H0.8C2.8 23 5.1 23.8 7.6 23.8C15.5 23.8 20.1 17.3 20.1 11.7C20.1 11.5 20.1 11.3 20.1 11.1C21 10.5 21.8 9.7 22.4 8.8C21.6 9.1 20.7 9.3 19.8 9.4C20.7 8.8 21.4 8 21.7 7C20.8 7.5 19.8 7.8 18.7 8C18 7.2 16.8 6.7 15.5 6.7C13 6.7 11 8.7 11 11.2C11 11.6 11 11.9 11.1 12.2C7.6 12 4.5 10.2 2.5 7.6C2.1 8.2 1.9 8.9 1.9 9.7C1.9 11.1 2.6 12.3 3.6 13C2.8 13 2.1 12.8 1.5 12.5V12.6C1.5 14.8 3 16.6 4.9 17C4.5 17.1 4.1 17.2 3.6 17.2C3.3 17.2 3 17.2 2.7 17.1C3.3 18.9 5 20.2 7 20.3C5.5 21.4 3.6 22.1 1.6 22.1H1C3 23.2 5.3 23.9 7.7 23.9C15.6 23.9 20.2 17.4 20.2 11.8V11.4C21.1 10.8 21.9 10 22.5 9.1C21.7 9.4 20.8 9.6 19.9 9.7C20.8 9.1 21.5 8.2 21.8 7.2C20.9 7.7 19.9 8 18.9 8.2C18.1 7.3 17 6.8 15.7 6.8C13.2 6.8 11.2 8.8 11.2 11.3C11.2 11.7 11.2 12 11.3 12.3C7.8 12.1 4.7 10.3 2.7 7.7C2.3 8.3 2.1 9 2.1 9.8C2.1 11.2 2.8 12.4 3.8 13.1C3 13.1 2.3 12.9 1.7 12.6V12.7C1.7 14.9 3.2 16.7 5.1 17.1C4.7 17.2 4.3 17.3 3.8 17.3C3.5 17.3 3.2 17.3 2.9 17.2C3.5 19 5.2 20.3 7.2 20.3C5.7 21.4 3.8 22.1 1.8 22.1H1.2C3.2 23.2 5.5 23.9 7.9 23.9C15.8 23.9 20.4 17.4 20.4 11.8L20.3 11.2C21.2 10.7 22 9.8 22.6 8.9C21.8 9.2 20.9 9.4 20 9.5C21 8.9 21.6 8.1 22 7.2C21.1 7.7 20.1 8 19.1 8.2C18.3 7.4 17.2 6.9 16 6.9C13.5 6.9 11.5 8.9 11.5 11.4C11.5 11.8 11.5 12.1 11.6 12.4C8.1 12.2 5 10.4 3 7.8C2.6 8.4 2.4 9.1 2.4 9.9C2.4 11.3 3.1 12.5 4.1 13.2C3.3 13.2 2.6 13 2 12.7V12.8C2 15 3.5 16.8 5.4 17.2C5 17.3 4.6 17.4 4.1 17.4C3.8 17.4 3.5 17.4 3.2 17.3C3.8 19.1 5.5 20.4 7.5 20.4C6 21.5 4.1 22.2 2.1 22.2H1.5C3.5 23.4 5.7 24.1 8.2 24.1C16.1 24.1 20.7 17.6 20.7 12C20.7 11.8 20.7 11.6 20.7 11.4C21.6 10.8 22.4 10 23 9.1" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-secondary/50 rounded-full hover:bg-primary/20 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.0301C24 5.38389 18.624 -0.000152588 12 -0.000152588C5.376 -0.000152588 0 5.38389 0 12.0301C0 18.0201 4.128 23.0941 9.6 24.0001V15.6001H6.72V12.0301H9.6V9.36009C9.6 6.35209 11.316 4.70409 14.064 4.70409C15.384 4.70409 16.704 4.94409 16.704 4.94409V7.73409H15.168C13.68 7.73409 13.2 8.65209 13.2 9.60009V12.0001H16.56L16.032 15.5701H13.2V23.9701C18.672 23.0641 24 18.0001 24 12.0301Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-secondary/50 rounded-full hover:bg-primary/20 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.73438V22.2656C0 23.2266 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2266 24 22.2656V1.73438C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="card-glass p-6 sticky top-32">
                <h3 className="text-xl font-medium mb-4">More Articles</h3>
                <div className="space-y-4">
                  {blogPosts
                    .filter(p => p.id !== post.id)
                    .slice(0, 3)
                    .map(relatedPost => (
                      <a 
                        key={relatedPost.id} 
                        href={`/blog/${relatedPost.id}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div>
                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-foreground/60 mt-1">{relatedPost.date}</p>
                          </div>
                        </div>
                      </a>
                    ))
                  }
                </div>
                <div className="mt-6">
                  <a href="/blog" className="text-primary hover:text-primary/80 text-sm transition-colors">
                    View All Articles
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
