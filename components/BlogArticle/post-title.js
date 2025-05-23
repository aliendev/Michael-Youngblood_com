/*TODO: Make this file consistent with the rest of the codebase. */

export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12">
      {children}
    </h1>
  );
}
