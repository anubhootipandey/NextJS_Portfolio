import { Link } from 'lucide-react';
import { Badge } from '../../..//components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Certifications() {
    const certificationsData = [
      {
        title: "React Course",
        organization: "Coding Ninja",
        date: "April 2024",
        link: "https://files.codingninjas.in/certi_image59368434d15cad52ac62aef8350734acce3150.jpg", 
      },
      {
        title: "JavaScript Algorithms and Data Structures",
        organization: "FreeCodeCamp",
        date: "November 2024",
        link: "https://www.freecodecamp.org/certification/freecodecamp/javascript-algorithms-and-data-structures", 
      },
      {
        title: "Introduction to Prompt Engineering for Generative AI",
        organization: "LinkedIn & Microsoft",
        date: "November 2024",
        link: "https://www.linkedin.com/learning/certificates/0dfb073db3af618d154bf715089b5ee568e063659b86f69f5af3d26de7950303?trk=share_certificate", 
      },
      {
        title: "C++ Course",
        organization: "Coding Ninja",
        date: "April 2024",
        link: "https://files.codingninjas.in/certi_image333825f15e8791e2d21b79bd26f8a6e05bd37b.jpg", 
      },
    ];

      const achievementsData = [
        {
          title: "Participated in Codekaze Round 1",
          organization: "Coding Ninja",
          date: "June 2023"
        },
        {
          title: "Participated in Codathon’2022",
          organization: "NIT Bhopal",
          date: "February 2022"
        },
        {
          title: "Participated in CodeChampions RMLAU",
          organization: "Algozenith RMLAU",
          date: "April 2024"
        },
        {
          title: "Contributor in IWOC’24 2.0",
          organization: "Innogeeks Winter of Code",
          date: "February 2024"
        },
        {
          title: "Participated in MentorAide Presents: JavaScript Genius Quiz Competition’24",
          organization: "MentorAide",
          date: "February 2024"
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
        <div className="max-w-4xl mt-10 mx-auto">
          <h1 className="text-3xl font-semibold text-pink-400 mb-6">Achievements</h1>
  
          <div className="space-y-6">
            {achievementsData.map((ach, index) => (
              <Card key={index} className="rounded-lg bg-transparent border-2 border-pink-400 relative">
                <CardHeader>
                  <CardTitle className="text-xl font-medium text-pink-100">
                    {ach.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="bg-pink-200 border-0 text-gray-900">
                      {ach.organization}
                    </Badge>
                    <span className="text-sm text-gray-500">{ach.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }