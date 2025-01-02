import { Avatar } from "@/components/ui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mt-3 mx-auto p-6">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg rounded-lg bg-gray-900 border-0 p-6 mb-6">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-4">
              <Avatar className="w-[100px] h-[100px] rounded-full relative z-[1]">
                <Image
                  src="/images/pic.jpg"
                  alt="Anubhooti Pandey"
                  width={100}
                  height={100}
                  className="w-full h-full rounded-full"
                />
              </Avatar>

              <div className="text-center md:mt-5 sm:text-left">
                <CardTitle className="text-2xl sm:text-3xl font-semibold text-[#efeaf3]">
                  Anubhooti Pandey
                </CardTitle>
                <CardDescription className="text-[#efeaf1] text-lg sm:text-xl">
                  Frontend Developer
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <div className="mt-4">
            <p className="text-[15px] sm:text-[16px] text-gray-400 leading-relaxed">
              Hello! I am Anubhooti Pandey, a passionate Frontend Developer with experience in building modern web applications. I specialize in using tools like ReactJS, Tailwind CSS, and JavaScript to create visually stunning, responsive, and user-friendly websites. I am dedicated to delivering high-quality user experiences and ensuring that my designs work seamlessly across various devices.
            </p>

            <p className="text-[15px] sm:text-[16px] text-gray-400 mt-4">
              I am proficient in several frontend technologies such as Next.js, Shadcn UI, Material UI, and Ant Design, which allow me to craft aesthetically pleasing and highly functional web applications. I also have experience working with Redux for state management, enabling smooth data flow across applications. Additionally, I use Framer Motion for creating engaging animations and transitions that enhance the overall user experience.
            </p>

            <p className="text-[15px] sm:text-[16px] text-gray-400 mt-4">
              My toolbox also includes Bootstrap, which I use for quick prototyping and responsive designs, and TypeScript, which helps me write more reliable, type-safe code, ensuring scalability and maintainability in large applications. I'm constantly learning and staying up-to-date with the latest web development trends to ensure that my skills are aligned with industry standards.
            </p>

            <p className="text-[15px] sm:text-[16px] text-gray-400 mt-4">
              I am always eager to learn new technologies and improve my skills. Currently, I’m focusing on mastering full-stack development and exploring exciting areas like web performance optimization, progressive web apps (PWAs), and server-side rendering (SSR).
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
