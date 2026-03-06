"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginFormData, loginSchema } from "./formValidation";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../components/InputField/FormField";
import ProfileIcon from "../icons/ProfileIcon";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("🚀 ~ onSubmit ~ LoginFormData:", data);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-15 max-w-150 flex flex-col border border-white/10 p-10 rounded-xl white-glass"
      >
        <div className="flex flex-row flex-wrap gap-x-4 gap-y-6 ">
          <div className="flex flex-row gap-2 items-center w-full">
            <div className="w-15 h-15 bg-white/10 rounded-full border border-white/10 flex items-center justify-center">
              <ProfileIcon />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h3 className="font-anton text-xl">Login</h3>
              <h4 className="font-light">Ingrese sus credenciales</h4>
            </div>
          </div>
          <FormField
            label="Usuario"
            id="username"
            placeholder="Usuario"
            {...register("username")}
            error={errors.username}
          />
          <FormField
            label="Contraseña"
            id="password"
            type="password"
            placeholder="Contraseña"
            {...register("password")}
            error={errors.password}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full p-2 mt-2 rounded-full border border-white/10 cursor-pointer hover:bg-white/10 transition-colors font-medium"
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
