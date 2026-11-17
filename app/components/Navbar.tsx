export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#030712]/90 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* Left */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold">
            Durga<span className="text-violet-500">.dev</span>
          </h1>
        </div>

        {/* Center */}
        <div className="flex-1 flex justify-center">
          <ul className="flex items-center gap-10 text-lg">
            <li><a href="#home" className="hover:text-violet-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-violet-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-violet-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-violet-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-violet-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Right (keeps navbar balanced) */}
        <div className="flex-1"></div>

      </div>
    </nav>
  );
}