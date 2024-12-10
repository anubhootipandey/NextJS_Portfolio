import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Typescript", "C++", "Python"],
    },
    {
      category: "Frontend Frameworks",
      skills: ["React.js", "Next.js", "Angular.js"],
    },
    {
      category: "UI Libraries",
      skills: ["ShadCN UI", "Material-UI", "Tailwind CSS", "Bootstrap", "Ant Design"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Github", "Figma", "Vercel", "VS Code"],
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-6">Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => (
            <Card key={index} className="shadow-lg rounded-lg bg-transparent border-2 border-white">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-white">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-300">{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
