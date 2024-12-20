import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function WorkExperience() {
  const workData = [
    {
      role: "Frontend Developer Intern",
      company: "Future Core Innovations",
      duration: "June 2024 - Sep 2024",
      description:
        "Developed user-friendly web interfaces, implemented responsive designs, and optimized performance for modern web applications.",
    },
    {
      role: "Front-End Software Engineering Virtual Programme",
      company: "Skyscanner",
      duration: "Dec 2024 - Dec 2024",
      description:
        "Completed a job simulation where I built a web application using React as a front-end engineer at Skyscanner.",
    },
    {
      role: "UK Developer and Technology Virtual Experience Programme",
      company: "Accenture",
      duration: "Nov 2024 - Dec 2024",
      description:
        "Completed the Developer and Technology Job Simulation where I developed an end to end understanding of the Software Development Lifecycle.",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-[#a6fddd] mb-6">Work Experience</h1>

        <div className="space-y-6">
          {workData.map((job, index) => (
            <Card key={index} className="border-0 rounded-lg bg-gray-900">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-200">{job.role}</CardTitle>
                <CardDescription className="text-gray-400">{job.company}</CardDescription>
                <span className="text-sm text-gray-500">{job.duration}</span>
              </CardHeader>
              <CardContent>
                <p className="text-[#bbd6cc]">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
