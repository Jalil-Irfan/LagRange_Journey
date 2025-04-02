import { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function TestComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-heading font-bold mb-6 text-glow">
        Personal Vibe Coding Showcase
      </h1>
      <p className="text-xl mb-8">
        Our application is working correctly! This is a test component.
      </p>
      <div className="mb-8">
        <p className="text-2xl mb-4">Count: {count}</p>
        <Button 
          onClick={() => setCount(count + 1)}
          className="bg-primary hover:bg-primary/80 text-white"
        >
          Click Me
        </Button>
      </div>
      <div className="gradient-border p-6 bg-card/80 max-w-md">
        <h2 className="text-2xl font-heading font-bold mb-4">Status</h2>
        <p>The server is running correctly on port 5000.</p>
        <p className="mt-2">The frontend is being served properly.</p>
        <p className="mt-2">We are using React with TypeScript and Tailwind CSS.</p>
      </div>
    </div>
  );
}