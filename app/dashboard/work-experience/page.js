import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function WorkExperience() {
  const workData = [
    {
      role: "Frontend Developer",
      company: "Future Core Innovations",
      duration: "June 2024 - Sep 2024",
      description:
        "Developed user-friendly web interfaces, implemented responsive designs, and optimized performance for modern web applications.",
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
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Work Experience</h1>

        <div className="space-y-6">
          {workData.map((job, index) => (
            <Card key={index} className="shadow-lg rounded-lg bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-800">{job.role}</CardTitle>
                <CardDescription className="text-gray-600">{job.company}</CardDescription>
                <span className="text-sm text-gray-500">{job.duration}</span>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
