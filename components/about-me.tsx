'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Briefcase, GraduationCap, Heart, Palmtree, Users } from "lucide-react"
import LineDivider from "./LineDivider"

export function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-5xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="w-32 h-32">
              <AvatarImage src="/Joel.jpg" alt="Joel Sng" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-3xl font-bold">Joel Sng</CardTitle>
          <p className="text-xl text-muted-foreground">Aspiring Data Professional</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold flex items-center mb-2">
              <GraduationCap className="mr-2" /> Educational Background
            </h2>
            <p>I am currently pursuing a Double Degree at Singapore Management University:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Information Systems (Analytics Major)</li>
              <li>Business Management (Operations Major)</li>
            </ul>
            <p className="mt-2">Key coursework includes:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Machine Learning</li>
              <li>Data Mining and RPA</li>
              <li>Data Structures and Algorithms</li>
              <li>Supply Chain Analytics</li>
              <li>Enterprise Data Management</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold flex items-center mb-2">
              <Briefcase className="mr-2" /> Professional Background
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Data Analyst Intern <span className="italic">at Housing & Development Board</span></h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Visualisation of structured data</li>
                  <li>Analysis of unstructured text data</li>
                  <li>Data mining using RPA and OCR</li>
                  <li>Applied machine learning to investigate suspicious customers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Technology Consulting Intern <span className="italic">at PwC Singapore</span></h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Contributed to finance transformation projects</li>
                  <li>Collaborated with SAP consultants to migrate data across ERP systems</li>
                  <li>Performed data analysis and developed systems to enhance financial processes</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold flex items-center mb-2">
              <Users className="mr-2" /> Co-Curricular Activities
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>President of the Special Interest and Community Service Sodality</li>
              <li>President of StarringSMU22</li>
              <li>Active in climbing, Muay Thai, and canoeing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold flex items-center mb-2">
              <Heart className="mr-2" /> Personal Interests & Hobbies
            </h2>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge>Fitness</Badge>
              <Badge>Food Exploration</Badge>
              <Badge>Gaming</Badge>
              <Badge>Community Service</Badge>
            </div>
            <p>
              I am a fitness junkie who enjoys gymming and staying active. As a foodie, I love exploring Singapore for
              delicious and affordable eats. In my downtime, you can find me playing games like Smash Bros. I am also
              passionate about community service and have held leadership roles in various organizations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold flex items-center mb-2">
              <Palmtree className="mr-2" /> My Furry Companion
            </h2>
            <div className="flex items-center space-x-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/loki.jpg" alt="Loki" />
                <AvatarFallback>Loki</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">Loki</h3>
                <p>
                  Meet Loki, my loyal husky! He is my study buddy and stress-reliever. Loki enjoys soaking up the air
                  conditioning while I work and always refuses to go home, even after long walks.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold flex items-center mb-2">
              <BookOpen className="mr-2" /> Current Goals
            </h2>
            <p>
              I am focused on advancing my capabilities in neural networks and deep learning, with the goal of applying
              my skills and passion for predictive analytics to make a meaningful impact in the data science field.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}
