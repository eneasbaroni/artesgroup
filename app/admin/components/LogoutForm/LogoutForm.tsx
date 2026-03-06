"use client";

const LogoutForm = () => {
  const handleLogout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetch("/api/auth/logout", {
      method: "POST",
    });
    window.location.href = "/login";
  };

  return (
    <form onSubmit={handleLogout} className="block">
      <button
        type="submit"
        className="py-2 px-4 rounded-3xl border border-white bg-white/10 hover:bg-white/20 transition-colors duration-300 cursor-pointer"
      >
        Cerrar sesión
      </button>
    </form>
  );
};

export default LogoutForm;
