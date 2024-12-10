import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Education() {
  const educationData = [
    {
      institution: "IET, Dr Ram Manohar Lohia Awadh University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2021 - 2025",
      description: "Focused on operating system, theory of computation, artificial intelligence, data structures, and software engineering.",
    },
    {
      institution: "St. Xavier's Senior Secondary School",
      degree: "Intermediate Education",
      duration: "2020 - 2021",
      description: "Specialized in science stream with a focus on Mathematics, Physics, and Computer Science.",
    },
    {
        institution: "St. Xavier's Senior Secondary School",
        degree: "High School Education",
        duration: "2018 - 2019",
        description: "Specialized in core subjects with a focus on Science, Social Studies, English and Computer Science.",
      },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-[#B6FFFA] mb-6">Education</h1>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className="shadow-lg rounded-lg bg-transparent border-2 border-[#B6FFFA]">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#B6FFFA]">
                  {edu.institution}
                </CardTitle>
                <CardDescription className="text-[#eaf0ef]">
                  {edu.degree} &mdash; {edu.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#56a5a0]">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
