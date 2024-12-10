import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '../../..//components/ui/button';

export default function Projects() {
  const projectsData = [
    {
      title: "E-Commerce Website",
      description: "A fully functional e-commerce platform with payment gateway integration, user authentication, and product management.",
      techStack: ["React.js", "Axios", "ContextAPI", "Tailwind CSS", "Material UI"],
      image: "/images/e-commerce.png",
      liveDemo: "https://e-commerce-website-five-gamma.vercel.app/",
      sourceCode: "https://github.com/anubhootipandey/E-Commerce-Website",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase projects, skills, and contact information with a modern UI/UX design.",
      techStack: ["Next.js", "ShadCN UI", "Framer Motion"],
      image: "/images/portfolio.png",
      liveDemo: "https://example-portfolio.com",
      sourceCode: "https://github.com/example/portfolio",
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks, setting priorities, and tracking progress with a user-friendly interface.",
      techStack: ["React.js", "CSS", "LocalStorage"],
      image: "/images/task.png",
      liveDemo: "https://react-todo-ten-tau.vercel.app/",
      sourceCode: "https://github.com/anubhootipandey/react-crud-application",
    },
    {
      title: "Armstrong Checker App",
      description: "A productivity app for managing tasks, setting priorities, and tracking progress with a user-friendly interface.",
      techStack: ["HTML", "CSS", "Javascript"],
      image: "/images/armstrong.png",
      liveDemo: "https://react-todo-ten-tau.vercel.app/",
      sourceCode: "https://github.com/anubhootipandey/react-crud-application",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto"> 
        <h1 className="text-3xl font-semibold text-gray-300 mb-6">Projects</h1>

        <div className="space-y-6">
          {projectsData.map((project, index) => (
            <Card key={index} className="rounded-lg border-0 bg-gray-900">
              <CardHeader>
                <div className="relative h-52 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-medium text-white mt-6">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-300">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-950 text-gray-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-4">
                <Button asChild variant="link">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:underline"
                  >
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="link">
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:underline"
                  >
                    Source Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
