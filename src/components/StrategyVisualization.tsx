
import React, { useEffect, useRef } from 'react';

const StrategyVisualization: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Simple canvas animation for the strategy flow
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Node positions in a circular arrangement
    const nodes = [
      { x: 150, y: 150, color: '#7DF9FF', radius: 20, label: 'Analysis' },
      { x: 250, y: 80, color: '#9b87f5', radius: 20, label: 'Strategy' },
      { x: 350, y: 150, color: '#D946EF', radius: 20, label: 'Execution' },
      { x: 250, y: 220, color: '#00FFDD', radius: 20, label: 'Optimization' }
    ];
    
    // Particle system
    const particles: {x: number, y: number, targetIndex: number, progress: number, speed: number, size: number}[] = [];
    
    // Create initial particles
    for (let i = 0; i < 30; i++) {
      const randomNodeIndex = Math.floor(Math.random() * nodes.length);
      const nextNodeIndex = (randomNodeIndex + 1) % nodes.length;
      
      particles.push({
        x: nodes[randomNodeIndex].x,
        y: nodes[randomNodeIndex].y,
        targetIndex: nextNodeIndex,
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.003,
        size: 1 + Math.random() * 2
      });
    }
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between nodes
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.beginPath();
      nodes.forEach((node, i) => {
        const nextNode = nodes[(i + 1) % nodes.length];
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(nextNode.x, nextNode.y);
      });
      ctx.stroke();
      
      // Draw nodes
      nodes.forEach(node => {
        // Glow effect
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 2);
        glow.addColorStop(0, node.color + '50');
        glow.addColorStop(1, node.color + '00');
        
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Node
        ctx.fillStyle = node.color + '30';
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Node label
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.label, node.x, node.y + node.radius + 15);
      });
      
      // Update and draw particles
      particles.forEach(particle => {
        const currentNode = nodes[(nodes.findIndex(n => n.label === nodes[particle.targetIndex].label) - 1 + nodes.length) % nodes.length];
        const targetNode = nodes[particle.targetIndex];
        
        // Update position along the path
        particle.progress += particle.speed;
        if (particle.progress >= 1) {
          particle.progress = 0;
          particle.targetIndex = (particle.targetIndex + 1) % nodes.length;
        }
        
        const dx = targetNode.x - currentNode.x;
        const dy = targetNode.y - currentNode.y;
        
        particle.x = currentNode.x + dx * particle.progress;
        particle.y = currentNode.y + dy * particle.progress;
        
        // Draw particle with glow
        ctx.fillStyle = targetNode.color + '80';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="py-24 relative" id="strategy">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              AI-Driven <span className="text-gradient">Strategy</span>
            </h2>
            <p className="text-white/70 mb-6">
              Our advanced AI continuously analyzes market conditions, develops optimal strategies, executes trades with precision, and optimizes performance through machine learning—creating a powerful feedback loop for maximum returns.
            </p>
            
            <div className="space-y-4">
              <div className="glass-card p-4 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-kamui-accent/20 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 bg-kamui-accent rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-kamui-accent mb-1">Real-time Analysis</h3>
                  <p className="text-white/70 text-sm">Continuous monitoring of market conditions, volatility, and liquidity across multiple venues.</p>
                </div>
              </div>
              
              <div className="glass-card p-4 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-kamui-purple/20 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 bg-kamui-purple rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-kamui-purple mb-1">Strategy Development</h3>
                  <p className="text-white/70 text-sm">AI formulates optimal trading and liquidity provision strategies based on market analysis.</p>
                </div>
              </div>
              
              <div className="glass-card p-4 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-kamui-pink/20 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 bg-kamui-pink rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-kamui-pink mb-1">Precise Execution</h3>
                  <p className="text-white/70 text-sm">Strategies are executed across multiple platforms with minimal slippage and maximum efficiency.</p>
                </div>
              </div>
              
              <div className="glass-card p-4 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-kamui-teal/20 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 bg-kamui-teal rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-kamui-teal mb-1">Continuous Optimization</h3>
                  <p className="text-white/70 text-sm">Machine learning algorithms refine strategies based on performance data and changing market conditions.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-6 neon-border overflow-hidden">
              <canvas 
                ref={canvasRef}
                className="w-full aspect-square"
                style={{ touchAction: 'none' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyVisualization;
