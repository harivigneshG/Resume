import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

const GravityDots = () => {
    const canvasRef = useRef(null);
    const { isDark } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let dots = [];
        const mouse = { x: -1000, y: -1000 };

        // Configuration for the "Antigravity" feel
        const DOT_SPACING = 25; // Closer dots for denser grid
        const DOT_RADIUS = 1.5;
        const MOUSE_RADIUS = 200; // Larger influence area
        const STIFFNESS = 0.08; // Lower stiffness for looser, floatier feel
        const DAMPING = 0.9; // Higher damping for smoother movement
        const REPULSION_STRENGTH = 40; // Stronger repulsion

        class Dot {
            constructor(x, y) {
                this.originX = x;
                this.originY = y;
                this.x = x;
                this.y = y;
                this.vx = 0;
                this.vy = 0;
            }

            update() {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                let forceX = 0;
                let forceY = 0;

                if (distance < MOUSE_RADIUS) {
                    const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
                    // Ease the force for smoother transition
                    const easedForce = Math.pow(force, 2);
                    const angle = Math.atan2(dy, dx);

                    // Push away
                    forceX = -Math.cos(angle) * easedForce * REPULSION_STRENGTH;
                    forceY = -Math.sin(angle) * easedForce * REPULSION_STRENGTH;
                }

                // Spring back
                const springX = (this.originX - this.x) * STIFFNESS;
                const springY = (this.originY - this.y) * STIFFNESS;

                this.vx += forceX + springX;
                this.vy += forceY + springY;

                this.vx *= DAMPING;
                this.vy *= DAMPING;

                this.x += this.vx;
                this.y += this.vy;
            }

            draw(context, color) {
                context.beginPath();
                context.arc(this.x, this.y, DOT_RADIUS, 0, Math.PI * 2);
                context.fillStyle = color;
                context.fill();
            }
        }

        const init = () => {
            dots = [];
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const cols = Math.floor(canvas.width / DOT_SPACING);
            const rows = Math.floor(canvas.height / DOT_SPACING);

            const offsetX = (canvas.width - cols * DOT_SPACING) / 2;
            const offsetY = (canvas.height - rows * DOT_SPACING) / 2;

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    dots.push(new Dot(
                        offsetX + i * DOT_SPACING,
                        offsetY + j * DOT_SPACING
                    ));
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const VISIBILITY_RADIUS = 200; // ~5cm visual radius

            dots.forEach(dot => {
                dot.update();

                // Calculate distance from mouse for visibility
                const dx = mouse.x - dot.x;
                const dy = mouse.y - dot.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Only draw if within visibility radius
                if (dist < VISIBILITY_RADIUS) {
                    // Calculate fade opacity (1 at center, 0 at edge)
                    const fade = Math.pow(1 - (dist / VISIBILITY_RADIUS), 1.5); // Ease out for smoother edge

                    // Base opacity higher since we only see a few
                    const baseOpacity = isDark ? 0.8 : 0.6;
                    const finalOpacity = baseOpacity * fade;

                    const color = isDark
                        ? `rgba(255, 255, 255, ${finalOpacity})`
                        : `rgba(15, 23, 42, ${finalOpacity})`;

                    dot.draw(ctx, color);
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleResize = () => {
            init();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        init();
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDark]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
};

export default GravityDots;
