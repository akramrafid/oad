
import { useRef, Suspense, useState, useEffect } from "react";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CheckCircle, ArrowRight, Play, Star, Users, Trophy, Clock } from "lucide-react";
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
          <p className="text-muted-foreground">{sceneError}</p>
          <p className="text-sm text-muted-foreground mt-2">Try using a different browser or device.</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading 3D scene...</p>
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

export const CROHero = () => {
  const [renderError, setRenderError] = useState<string | null>(null);
  const [urgencyTime, setUrgencyTime] = useState(72); // 72 hours countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setUrgencyTime(prev => prev > 0 ? prev - 1 : 72);
    }, 3600000); // Update every hour
    
    return () => clearInterval(timer);
  }, []);

  const renderFallback = () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-primary/10 to-purple-900/20 rounded-2xl border border-border">
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
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(2,91,245,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-fade-in-up">
          {/* Social Proof Badges */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-green-700 dark:text-green-300">Available Now</span>
            </div>
            <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full">
              <Star size={12} className="text-yellow-500 fill-current" />
              <span className="text-xs font-medium text-yellow-700 dark:text-yellow-300">5.0 Rating</span>
            </div>
            <div className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
              <Users size={12} className="text-blue-500" />
              <span className="text-xs font-medium text-blue-700 dark:text-blue-300">250+ Clients</span>
            </div>
          </div>

          {/* Urgency Banner with Blue-White-Purple Gradient */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-800 text-white px-4 py-2 rounded-lg mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock size={16} className="animate-pulse" />
              <span className="font-medium">Limited Offer Ends In: {urgencyTime}h</span>
            </div>
            <span className="text-sm bg-white/20 px-2 py-1 rounded">Save 40%</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
            Transform Your Business with 
            <span className="gradient-text block">AI-Powered Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl leading-relaxed">
            Join 250+ successful businesses that increased revenue by 300% with our proven digital strategies. 
            <strong className="text-foreground"> Get results in 30 days or money back.</strong>
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="text-center">
              <div className="stats-highlight">300%</div>
              <p className="text-sm text-foreground/60">Revenue Increase</p>
            </div>
            <div className="text-center">
              <div className="stats-highlight">98%</div>
              <p className="text-sm text-foreground/60">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="stats-highlight">30</div>
              <p className="text-sm text-foreground/60">Days to Results</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="btn-primary group text-lg px-8 py-4">
              Get Free Strategy Session
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-secondary group text-lg px-8 py-4">
              <Play size={18} className="mr-2" />
              Watch Success Stories
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex items-center gap-6 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <Trophy size={16} className="text-yellow-500" />
              <span>Award-Winning Agency</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>Money-Back Guarantee</span>
            </div>
          </div>

          {/* Risk Reversal */}
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3">
              <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-green-800 dark:text-green-200">
                  Zero Risk Guarantee
                </p>
                <p className="text-sm text-green-600 dark:text-green-300">
                  If you don't see results in 30 days, we'll refund 100% of your investment.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 h-[500px] relative animate-fade-in animate-float">
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
                className="rounded-2xl"
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

// Error boundary component
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
