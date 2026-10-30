import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
export const NotFoundPage: React.FC = () => (
  <main id="main-content" className="editorial-page not-found">
    <h1>A little off course.</h1>
    <p>This page isn’t part of the collection.</p>
    <Link to="/" className="text-link">
      <ArrowLeft size={15} />
      Back to the beginning
    </Link>
  </main>
);
