'use client';

import { Card, CardContent } from '@/components/ui/card';
import TechStackItem from '@/components/tech-stack-item';
import { Lightbox } from '@/components/lightbox';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Import a Prism theme
import { TryAppButton } from '@/components/try-app-button';
import { GithubButton } from '@/components/github-button';

export default function Project3() {
    // Separate tech stack items into categories
    const programmingLanguages = [
        { src: '/techstack/python.png', alt: 'Python', reason: 'Coding out backend logic.', longReason: 'LD5' },
        { src: '/techstack/html5.png', alt: 'HTML5', reason: 'Used for structuring web content.', longReason: 'LD5' },
        { src: '/techstack/javascript.png', alt: 'JavaScript', reason: 'Main language for web development.', longReason: 'LD6' },
        // Add more languages as needed
    ];

    const frameworks = [
        { src: '/techstack/nextjs.svg', alt: 'Next.js', reason: 'Server-side rendering and optimized performance.', longReason: 'LD1' },
        { src: '/techstack/tailwindcss.png', alt: 'Tailwind CSS', reason: 'Rapid UI development and consistent styling.', longReason: 'LD3' },
        // Add more frameworks as needed
    ];

    const tools = [
        { src: '/techstack/vercel.svg', alt: 'Vercel', reason: 'Seamless deployment and Next.js integration.', longReason: 'LD4' },
        // Add more tools as needed
    ];

    const apis = [
        { src: '/techstack/gemini.png', alt: 'Gemini', reason: 'Powerful, efficient, and cost-effective LLM.', longReason: 'LD11' },
        { src: '/techstack/ocbc.png', alt: 'OCBC API', reason: 'Access to publicly available OCBC product information.', longReason: 'LD11' },
    ];

    const sampleCode1 = `
import google.generativeai as genai
import os

os.environ['API_KEY'] = "<Insert your API Key here>"
genai.configure(api_key=os.environ["API_KEY"])
model = genai.GenerativeModel("gemini-1.5-flash")
prompt = f"""
    You are a chatbot for the bank OCBC.
    The very first message has been sent for you already, being 
        '
        Hello! Would you like to start achieving your financial goals today?
        '
    To which the customer has responded yes. 

    Having asked the following questions:
        1. What is your age?
        2. Singaporean, PR, or foreigner?
        3. Current Income?
        4. What are your current goals? Upcoming big-ticket expenses?
        5. How important is it for you to have immediate access to your funds, or can you afford to lock them away for a period?
        6. Are you interested in maximizing interest rates, minimizing fees, or both?
        7. Do you have any specific preferences or requirements?
    
    Construct a financial planning recommendation with the following requirements:
        1. It shall be in plain, non-jargon English.
        2. It shall only use products in the products list I have passed to you in a previous prompt.
        3. It shall effectively meet the customer's needs.
        4. It shall detail which products should the customer take close notice of and why they would be advantageous to their specific situation.
"""
response = model.generate_content(prompt)
print(response.text)`;

    return (
        <Card className="w-full max-w-5xl mx-auto overflow-hidden border-none shadow-none">
            <CardContent className="p-3 mt-4">
                {/* Header */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 flex flex-col justify-center">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">AI Financial Assistant</h1>
                        <p className="text-xl text-muted-foreground mb-4">
                            Chatbot for Financial Planning with OCBC
                        </p>
                        <p className="text-reg text-muted-foreground mb-4">August 26, 2024</p>
                    </div>
                    {/* Main Image */}
                    <div className="relative aspect-square rounded-lg">
                        <Lightbox src="/ocbc/hero.jpg" alt="Main Image" width={800} height={600} />
                    </div>
                </div>

                <h2 className="text-3xl font-semibold mb-3">Problem Statement:</h2>
                <p className="text-lg text-muted-foreground mb-6">
                    OCBC was facing the issue of not having enough reach with PMETs (persons with 2-10 years of working experience). In our primary research, me and my peers identified that there were customers willing to switch for better benefits, which OCBC provided, but they chose not to because of convenience.
                    <br /><br />
                    While this was my business capstone project, I chose to leverage my competitive advantage as an information systems student to drive a technology solution to this business problem.
                </p>
                <h2 className="text-3xl font-semibold mb-3">Our Solution:</h2>
                <p className="text-lg text-muted-foreground mb-4">
                    To maximise convenience and encourage customers who currently had relationships with other banks to recognise the benefits of OCBC products and make the switch, I designed and developed an <strong>AI Financial Assistant</strong>.
                    <br /><br />
                    The application, powered by <strong>Gemini Pro</strong>, would prompt users for specific lifestyle information, financial goals, and big ticket expenses they foresaw in their near future.
                    <br /><br />
                    The applications gives a tailored recommendation on what products (savings accounts, deposit accounts, loans, insurance, securities etc) from OCBC that the user can consider to adopt, along with links to learn more about these products.
                </p>

                <div className="flex justify-center my-6 space-x-4">
                    <TryAppButton
                        href="/"
                    />
                    <GithubButton
                        href="https://github.com/JoelSngZhenWei/portfolio"
                    />
                </div>

                {/* More information */}
                <div className="bg-background py-12">
                    <div className="container  ">
                        <div className="flex flex-col lg:flex-row">
                            <div className="flex-1 space-y-8 ">
                                <section>
                                    <h2 className="text-3xl font-semibold mb-4">Making the Application:</h2>
                                    <p className="text-lg text-muted-foreground">
                                        The application was developed using Gemini Pro as the LLM. This offered a efficient, versatile, and cost-effective AI model.
                                        <br />
                                        <br />
                                        It was my first time working with a generate AI API, thankfully due to extensive documentation online I was able to integrate it into my application.
                                        <br />
                                        <br />
                                        Comprehensive OCBC product data was obtained using OCBC APIs. Only publicly available OCBC information was fed into the LLM prompt.
                                    </p>
                                </section>
                            </div>

                            <div className="lg:w-1/2 flex items-center justify-center">
                                <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                                    <Lightbox src="/ocbc/chat2.jpg" alt="Description photo" width={800} height={600} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Code Section */}
                <div className="py-2 px-8">
                    {/* Code Section with Syntax Highlighting */}
                    <h3 className="text-2xl font-semibold mb-2">Using Gemini</h3>
                    <div className='mb-3'>
                        <p className='text-lg text-muted-foreground'>
                            A code snippet showcasing a simplified version of my code to call Gemini Pro API and generate a response.
                        </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-2 shadow-sm">
                        <SyntaxHighlighter language="javascript" style={coy}>
                            {sampleCode1}
                        </SyntaxHighlighter>
                    </div>
                </div>


                {/* Long Description */}
                <div className="py-2 px-8">
                    {/* Main Tech Stack Title */}
                    <h2 className="text-3xl font-bold mb-6 text-center">Tech Stack</h2>

                    {/* Programming Languages */}
                    <h3 className="text-2xl font-semibold mb-4 text-center">Programming Languages</h3>
                    <div className="flex flex-wrap justify-center gap-24 mb-16">
                        {programmingLanguages.map((tech, index) => (
                            <TechStackItem key={index} {...tech} />
                        ))}
                    </div>

                    {/* APIs */}
                    <h3 className="text-2xl font-semibold mb-4 text-center">APIs</h3>
                    <div className="flex flex-wrap justify-center gap-24 mb-16">
                        {apis.map((tech, index) => (
                            <TechStackItem key={index} {...tech} />
                        ))}
                    </div>

                    {/* Frameworks */}
                    <h3 className="text-2xl font-semibold mb-4 text-center">Frameworks</h3>
                    <div className="flex flex-wrap justify-center gap-24 mb-16">
                        {frameworks.map((tech, index) => (
                            <TechStackItem key={index} {...tech} />
                        ))}
                    </div>

                    {/* Front-end and Back-end Tools */}
                    <h3 className="text-2xl font-semibold mb-4 text-center">Additional Tools</h3>
                    <div className="flex flex-wrap justify-center gap-24 mb-16">
                        {tools.map((tech, index) => (
                            <TechStackItem key={index} {...tech} />
                        ))}
                    </div>

                </div>
            </CardContent>
        </Card>
    );
}