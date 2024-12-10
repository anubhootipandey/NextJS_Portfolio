import { Avatar } from "@/components/ui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container mt-16 mx-auto p-6">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg rounded-lg bg-transparent border-2 border-[#CB9DF0] p-6 mb-6">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20 rounded-full">
                <img
                  src="/path-to-your-image.jpg" 
                  alt="Anubhooti Pandey"
                  className="w-full h-full rounded-full"
                />
              </Avatar>
              <div>
                <CardTitle className="text-2xl font-semibold text-[#efeaf3]">
                  Anubhooti Pandey
                </CardTitle>
                <CardDescription className="text-[#efeaf1]">
                  Frontend Developer
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <div className="mt-4">
            <p className="text-lg text-[#CB9DF0]">
              Hello! I am Anubhooti Pandey, a passionate Frontend Developer with experience in building modern web applications. I specialize in using tools like ReactJS, Tailwind CSS, and JavaScript to create visually stunning, responsive, and user-friendly websites.
            </p>
            <p className="text-lg text-[#CB9DF0] mt-4">
              I am always eager to learn new technologies and improve my skills. Currently, I'm focusing on mastering full-stack development and exploring other exciting areas like web performance optimization.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
