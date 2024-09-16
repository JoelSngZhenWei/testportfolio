'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Lightbox } from '@/components/lightbox';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Import a Prism theme

export default function SPM() {

  const sampleCode1 = `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`;

  return (
    <Card className="w-full max-w-5xl mx-auto overflow-hidden border-none shadow-none">
      <CardContent className="p-0 mt-4">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Template 2</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Code segments
            </p>
            <p className="text-reg text-muted-foreground mb-4">March 1, 2024</p>
          </div>
          {/* Main Image */}
          <div className="relative aspect-square rounded-lg">
            <Lightbox src="/loki.jpg" alt="Main Image" width={800} height={600} />
          </div>
        </div>

        <div className="py-16 px-8">

          {/* Code Section with Syntax Highlighting */}
          <h3 className="text-2xl font-semibold mb-6">Sample Code</h3>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-12 shadow-sm">
            <SyntaxHighlighter language="javascript" style={coy}>
              {sampleCode1}
            </SyntaxHighlighter>
          </div>
        </div>
        
      </CardContent>
    </Card>
  );
}
