import { Link } from 'lucide-react';
import { Badge } from '../../..//components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Certifications() {
    const certificationsData = [
      {
        title: "Certified React Developer",
        organization: "Coding Ninja",
        date: "March 2023",
        link: "https://www.reactacademy.com/certified-react-developer", 
      },
      {
        title: "JavaScript Algorithms and Data Structures",
        organization: "FreeCodeCamp",
        date: "November 2024",
        link: "https://www.freecodecamp.org/certification/freecodecamp/javascript-algorithms-and-data-structures", 
      },
      {
        title: "Web Development Bootcamp",
        organization: "Udemy",
        date: "December 2024",
        link: "https://www.udemy.com/course/the-web-developer-bootcamp/", 
      },
    ];
  
    return (
        <div className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold text-[#BFF6C3] mb-6">Certifications</h1>
  
          <div className="space-y-6">
            {certificationsData.map((cert, index) => (
              <Card key={index} className="border-0 rounded-lg bg-gray-900 relative">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-green-700 hover:text-green-800"
                >
                  <Link className="h-5 w-5" />
                </a>
                <CardHeader>
                  <CardTitle className="text-xl font-medium text-[#c3c7c3]">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="bg-[#a3a5a3] border-0 text-gray-900">
                      {cert.organization}
                    </Badge>
                    <span className="text-sm text-gray-500">{cert.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }