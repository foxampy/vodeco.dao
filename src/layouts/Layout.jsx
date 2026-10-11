import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#010f1a] to-[#031a2e] text-white">
      {/* Здесь добавим хедер, боковое меню и динамические блоки */}
      {children}
    </div>
  );
};

export default Layout;