import { useRef, Suspense, useState, useEffect } from "react";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CheckCircle, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as THREE from "three";
import { OrbitPaths } from "./3d/OrbitPaths";
import { GlowEffect } from "./3d/GlowEffect";
import { LogoTexture } from "./3d/LogoTexture";

// Python Logo as center
function PythonLogo() {
  const groupRef = useRef<THREE.Group>(null);
  
  return (
    <LogoTexture
      texturePath="/logos/python.png"
      fallbackColor="#3776ab"
      geometryProps={{
        type: 'circle',
        args: [1.5, 32]
      }}
      meshProps={{
        position: [0, 0, 0]
      }}
    />
  );
}

// TypeScript Logo
function TypeScriptLogo() {
  return (
    <LogoTexture
      texturePath="/logos/typescript.png"
      fallbackColor="#3178c6"
      geometryProps={{
        type: 'box',
        args: [1.6, 1.6, 0.2]
      }}
      timeOffset={0}
      radius={3.5}
    />
  );
}

// Next.js Logo
function NextJsLogo() {
  return (
    <LogoTexture
      texturePath="/logos/nextjs.png"
      fallbackColor="#000000"
      geometryProps={{
        type: 'circle',
        args: [0.8, 32]
      }}
      timeOffset={0.5}
      radius={5}
    />
  );
}

// Premiere Pro Logo
function PremiereLogo() {
  return (
    <LogoTexture
      texturePath="/logos/premiere.png"
      fallbackColor="#e879f9"
      geometryProps={{
        type: 'box',
        args: [1.5, 1.5, 0.2]
      }}
      timeOffset={1}
      radius={6.5}
    />
  );
}

// After Effects Logo
function AfterEffectsLogo() {
  return (
    <LogoTexture
      texturePath="/logos/aftereffects.png"
      fallbackColor="#7dd3fc"
      geometryProps={{
        type: 'box',
        args: [1.5, 1.5, 0.2]
      }}
      timeOffset={1.5}
      radius={8}
    />
  );
}

// Make.com Logo
function MakeLogo() {
  return (
    <LogoTexture
      texturePath="/logos/makecom.png"
      fallbackColor="#4285f4"
      geometryProps={{
        type: 'circle',
        args: [0.8, 32]
      }}
      timeOffset={2}
      radius={9.5}
    />
  );
}

// MongoDB Logo
function MongoDBLogo() {
  return (
    <LogoTexture
      texturePath="/logos/mongodb.png"
      fallbackColor="#4db33d"
      geometryProps={{
        type: 'box',
        args: [1.6, 1.6, 0.2]
      }}
      timeOffset={2.5}
      radius={11}
    />
  );
}

// Main Scene component
function Scene() {
  const [sceneError, setSceneError] = useState<string | null>(null);

  useEffect(() => {
    // Adding a global error handler for WebGL context issues
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes("WebGL") || event.message.includes("Context")) {
        setSceneError("WebGL rendering error. Your browser might not support 3D content.");
        console.error("WebGL Error:", event);
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (sceneError) {
    return (
      <div className="flex h-full w-full items-center justify-center text-center p-8">
        <div>
          <h3 className="text-xl font-bold text-red-500 mb-2">3D Rendering Error</h3>
          <p className="text-gray-300">{sceneError}</p>
          <p className="text-sm text-gray-400 mt-2">Try using a different browser or device.</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400">Loading 3D scene...</p>
        </div>
      </div>
    }>
      <ambientLight intensity={0.6} />
      <pointLight position={[0, 10, 10]} intensity={1} color="#a855f7" />
      <pointLight position={[0, -10, -10]} color="#d946ef" intensity={0.7} />
      <GlowEffect />
      <OrbitPaths />
      <group>
        <PythonLogo />
        <TypeScriptLogo />
        <NextJsLogo />
        <PremiereLogo />
        <AfterEffectsLogo />
        <MakeLogo />
        <MongoDBLogo />
      </group>
      <OrbitControls 
        enableZoom={true} 
        enablePan={true} 
        autoRotate={true}
        autoRotateSpeed={0.5}
        minDistance={8}
        maxDistance={25}
      />
    </Suspense>
  );
}

export const Hero = () => {
  const [renderError, setRenderError] = useState<string | null>(null);

  // Fallback for when 3D rendering completely fails
  const renderFallback = () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-primary/10 to-purple-900/20 rounded-2xl border border-white/10 ml-16">
      <div className="text-center p-8">
        <h3 className="text-2xl font-semibold mb-4 gradient-text">Our Technology Stack</h3>
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="p-4 card-modern text-center">
            <span className="text-sm font-medium">TypeScript</span>
          </div>
          <div className="p-4 card-modern text-center">
            <span className="text-sm font-medium">Next.js</span>
          </div>
          <div className="p-4 card-modern text-center">
            <span className="text-sm font-medium">React</span>
          </div>
          <div className="p-4 card-modern text-center">
            <span className="text-sm font-medium">Python</span>
          </div>
          <div className="p-4 card-modern text-center">
            <span className="text-sm font-medium">AI/ML</span>
          </div>
          <div className="p-4 card-modern text-center">
            <span className="text-sm font-medium">Cloud</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary/20 p-2 rounded-full border border-primary/30">
              <CheckCircle size={20} className="text-primary" />
            </div>
            <span className="text-sm font-medium tracking-wider text-primary uppercase">Available for Work</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
            Where Innovation<br />
            Meets <span className="gradient-text">Imagination</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl leading-relaxed">
            We're your partner in product design, website creation, 
            and branding for every stage of your business journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="btn-primary group">
              Get Started 
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-secondary group">
              <Play size={18} className="mr-2" />
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>250+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>98% Client Satisfaction</span>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 h-[500px] relative animate-fade-in animate-float ml-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
          {renderError ? (
            renderFallback()
          ) : (
            <ErrorBoundary onError={() => setRenderError("Failed to render 3D scene")}>
              <Canvas
                camera={{ position: [0, 15, 20], fov: 50 }}
                shadows
                onError={(error) => {
                  console.error("Canvas error:", error);
                  setRenderError("Canvas error occurred");
                }}
                className="rounded-2xl ml-16"
              >
                <Scene />
              </Canvas>
            </ErrorBoundary>
          )}
        </div>
      </div>
    </section>
  );
};

// Error boundary component to catch errors in 3D rendering
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError: (error: Error) => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onError: (error: Error) => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Error in 3D rendering:", error);
    this.props.onError(error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
