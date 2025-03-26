"use client";

import dynamic from 'next/dynamic';

// Dynamically import the WebGL background to prevent SSR issues
const WebGLBackground = dynamic(
  () => import('./WebGLBackground'),
  { ssr: false }
);

export default function BackgroundWrapper() {
  return <WebGLBackground />;
} 