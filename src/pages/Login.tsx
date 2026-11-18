import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, User, Eye, EyeOff, ArrowLeft, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simular login
    setTimeout(() => {
      setIsLoading(false);
      navigate(-1); // Volver a donde venía
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full">
        {/* Logo/Brand Area */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
            <div className="w-10 h-10 bg-brand-blue flex items-center justify-center text-white scale-110 group-hover:rotate-12 transition-transform">
              <Lock className="w-5 h-5" />
            </div>
            <span className="text-2xl font-black text-brand-gray tracking-tighter">BIBLIOTECA<span className="text-brand-blue">ICESI</span></span>
          </Link>
          <h2 className="text-3xl font-black text-brand-gray tracking-tight mb-2">Autenticación Institucional</h2>
          <p className="text-sm text-gray-500 font-medium">Ingresa tus credenciales para acceder a los recursos protegidos.</p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-brand-border p-8 md:p-10 shadow-sm relative overflow-hidden">
          {/* Decorative bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue"></div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                  Usuario Institucional
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-300 group-focus-within:text-brand-blue transition-colors">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block w-full pl-11 pr-4 py-3 border border-brand-border text-sm placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue transition-all"
                    placeholder="ej: juan.perez"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                  Contraseña
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-300 group-focus-within:text-brand-blue transition-colors">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="block w-full pl-11 pr-12 py-3 border border-brand-border text-sm placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-brand-blue transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-4 h-4 border border-brand-border flex items-center justify-center group-hover:border-brand-blue transition-colors">
                 {/* Checkbox logic would go here */}
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Recordarme</span>
            </label>
            <Link to="#" className="text-[10px] font-black text-brand-blue uppercase tracking-widest hover:underline">
              ¿Olvidaste tu clave?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-gray text-white py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-blue transition-all relative overflow-hidden group border-none"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Verificando...
              </span>
            ) : (
              'Iniciar Sesión'
            )}
          </button>
        </form>
      </div>

        {/* Footer/Help Area */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
           <Link to="/" className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-brand-blue transition-colors">
              <ArrowLeft className="w-4 h-4" /> Principal
           </Link>
           <div className="flex gap-6">
              <Link to="/contacto" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-brand-gray">
                 <ShieldCheck className="w-4 h-4" /> Privacidad
              </Link>
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-brand-gray">
                 <HelpCircle className="w-4 h-4" /> Ayuda
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
